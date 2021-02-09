<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'add-fees-installment' }" class="fw-btn-fill btn-gradient-yellow text-white">Add New</router-link>
            </div>
            <h3>Fees Report</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'FeeMaster' }">Fees Management</router-link>
                </li>
                <li>Fees</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        
        <div class="card height-auto mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Session</label>
                        <select v-model="session" class="form-control">
                            <option value="">Select Session</option>
                            <option :value="s.id" v-for="(s,i) in sessions" :key="i">{{ s.session_name }}</option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <label>Department</label>
                        <select v-model="department" class="form-control" @change="getClasses()">
                            <option value="">Select Department</option>
                            <option :value="d.id" v-for="(d,i) in departments" :key="i">{{ d.dept_name }}</option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <label>Class</label>
                        <select v-model="class_id" class="form-control" @change="getStudents()">
                            <option value="">Select Class</option>
                            <optgroup :label="cls.class" v-for="(cls, i) in classes" :key="i">
                                <option :value="s.id" v-for="(s, j) in cls.sections" :key="j">{{ s.class_name }}-{{ s.name }}</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lists Students -->
        <div class="card height-auto mb-3" v-if="lists.length">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>FATHER NAME</th>
                                <th>FEES AMOUNT</th>
                                <th>MONTH</th>
                                <th>Pay Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(s,i) in lists" :key="i" :class="s.pay_status == 'paid' ? 'bg-success text-white' : 'bg-danger text-white'">
                                <td>{{ i + 1 }}</td>
                                <td>{{ s.structure.student.user.name }}</td>
                                <td>{{ s.structure.student.father_info.name }}</td>
                                <td>{{ s.amount }}</td>
                                <td>{{ s.month }}</td>
                                <td>
                                    <select v-model="lists[i].pay_status" class="form-control" @change="payStatus( i )">
                                        <option value="due">Due</option>
                                        <option value="paid">Paid</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

let count = 0;
export default {
    data() {
        return {
            errors: 0,
            lists: [],
            check: [],
            session: '',
            class_id: '',
            department: '',
            sessions: [],
            departments: [],
            classes: [],
            fees_for_new: [],
            fees_for_old: [],
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.getSession();
        this.getDepartments();
    },
    methods: {
        getSession() {
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('session/all')
                .then(res => {
                    this.loaded = 1;
                    this.sessions = res.data;
                });
        },
        getDepartments() {
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-departments')
                .then(res => {
                    this.loaded = 1;
                    this.departments = res.data.data;
                });
        },
        getClasses() {
            this.loaded = 0;
            let dept_id = this.department

            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('class/department/' + dept_id)
                .then(res => {
                    this.loaded = 1;
                    this.classes = res.data;
                });
        },
        getStudents() {
            this.loaded = 0;
            let class_id = this.class_id

            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('fees/student/' + class_id)
                .then(res => {
                    this.loaded = 1;
                    this.lists = res.data;
                });
        },
        payStatus(i) {
            let status = this.lists[i].pay_status,
                id     = this.lists[i].id;

            this.loaded = 0;
            
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('fees/update_pay_status/' + id + '/' + status)
                .then(res => {
                    this.lists = res.data
                    this.getStudents()
                });
        }
    }
}
</script>

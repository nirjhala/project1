<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'add-fees-installment' }" class="fw-btn-fill btn-gradient-yellow text-white">Add New</router-link>
            </div>
            <h3>Fees</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>Fees</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->

        <!-- Student Table Area Start Here -->
        <form method="post" @submit.prevent=" saveFees() ">
            <div class="row">
                <div class="col-sm-3">
                    <div class="card height-auto">
                        <div class="card-body">
                            <h3 class="card-title">Options</h3>
                            <div class="form-group">
                                <label>Select Session</label>
                                <select class="form-control" v-model="session">
                                    <option :value="s.id" v-for="s in sessions">{{ s.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Select Class</label>
                                <select class="form-control" v-model="class_id" v-on:change="getInstallments()">
                                    <option value="">Select a Class</option>
                                    <optgroup :label="dept.dept_name" v-for="dept in departments">
                                        <option :value="cls.id" v-for="cls in dept.classes">{{ cls.name }}</option>
                                    </optgroup>
                                </select>
                            </div>
                            <button v-if="installments.length" type="submit" class="fw-btn-fill btn-block btn-gradient-yellow text-white">Save &amp; Update</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-9" v-if="installments.length">
                    <div class="card height-auto mb-1">
                        <div class="card-body">
                            <h3 class="card-title">Student Lists</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Father Name</th>
                                            <th>Roll No.</th>
                                            <th v-for="(ins, index2) in installments">{{ ins.name }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td v-for="(ft, index2) in ftypes">
                                                <div v-if="fees_for_new[index] && fees_for_new[index].ftypes[index2]">
                                                    <input type="number" v-model="fees_for_new[index].ftypes[index2].fees" value="" min="0" class="form-control">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Student Table Area End Here -->
        </form>
    </div>
</template>
<script>
const school = localStorage.getItem('school');
const userId = localStorage.getItem('userId');
const token  = localStorage.getItem('token');
let count = 0;
export default {
    data() {
        return {
            errors: 0,
            lists: {},
            check: [],
            s: '',
            class_id: '',
            departments: [],
            installments: [],
            ftypes: [],
            fees_for_new: [],
            fees_for_old: [],
            loaded: 0,
        }
    },
    mounted() {
        this.getRecords();
        this.getDepartments();
    },
    methods: {

        getDepartments() {
            this.loaded = 0;

            axios.get('api/get-all-departments/?school='+school)
                .then(res => {
                    this.loaded      = 1;
                    this.departments = res.data;
                });
        },
        getInstallments() {
            this.loaded = 0;
            let installments = [], ftypes = [];
            axios.get('api/get-all-fees-installments/?school='+school)
                .then(res => { count++;
                    this.loaded = 1;
                    this.installments = res.data;
                    installments = res.data;
                    this.effectFeesInput();
                });

            axios.get('api/get-all-fees-type/?school='+school)
                .then(res => { count++;
                    this.loaded      = 1;
                    this.ftypes      = res.data;
                    ftypes = res.data;
                    this.effectFeesInput();
                });
        },
        effectFeesInput() {
            let self = this;
        },
        getRecords(page) {
            if (typeof page === 'undefined') {
               page = 1;
            }
            axios.get('api/view-fees/?page='+page+'&school='+school)
                .then(res => {
                    this.loaded = 1;
                    if(res.status) {
                        this.lists  = res.data.data;
                    } else {
                        this.errors = 1;
                    }
                }).catch(err => {
                    this.loaded = 1;
                    console.log(err);
                });
        },
        saveFees() {
            let new_fees = this.fees_for_new;
            let old_fees = this.fees_for_old;

            let params = {
                new_fees: this.fees_for_new,
                old_fees: this.fees_for_old,
                class_id: this.class_id,
                school: school
            };
            axios.post('api/add-fees/', params)
                .then(res => {
                    this.loaded = 1;
                    if(res.status) {
                        this.lists  = res.data.data;
                    } else {
                        this.errors = 1;
                    }
                }).catch(err => {
                    this.loaded = 1;
                    console.log(err);
                });
        }
    }
}
</script>

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
                <li>
                    <router-link :to="{ name: 'FeeMaster' }">Fees Management</router-link>
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
                            <h3 class="card-title">Select Class</h3>
                            <div class="form-group">
                                <label>Select Class</label>
                                <select class="form-control" v-model="class_id" v-on:change="getInstallments()">
                                    <option value="">Select a Class</option>
                                    <optgroup :label="dept.dept_name" v-for="(dept, i) in departments" :key="i">
                                        <option :value="cls.id" v-for="(cls, j) in dept.classes" :key="j">{{ cls.name }}</option>
                                    </optgroup>
                                </select>
                            </div>
                            <button v-if="ftypes.length" type="submit" class="fw-btn-fill btn-block btn-gradient-yellow text-white">Save &amp; Update</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-9" v-if="ftypes.length">
                    <div class="card height-auto mb-1">
                        <div class="card-body">
                            <h3 class="card-title">Total Fees (Yearly)</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Fees Type</th>
                                            <th>New Admission</th>
                                            <th>Old Admission</th>
                                        </tr>
                                    </thead>
                                    <tr v-for="(ft, i) in ftypes" :key="i">
                                        <td>{{ ft.name }}</td>
                                        <td>
                                            <input type="number" v-model="record[ft.id].fees_for_new" value="0" min="0" :disabled="ft.fees_for == 'old'" class="form-control">
                                        </td>
                                        <td>
                                            <input type="number" v-model="record[ft.id].fees_for_old" value="0" min="0" :disabled="ft.fees_for == 'new'" class="form-control">
                                        </td>
                                    </tr>
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
            ftypes: {},
            record: {},
            fees_for_new: [],
            fees_for_old: [],
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.getDepartments();
    },
    methods: {
        getDepartments() {
            this.loaded = 0;

            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-all-departments')
                .then(res => {
                    this.loaded      = 1;
                    this.departments = res.data;
                });
        },
        getInstallments() {
            this.loaded = 0;
            let installments = [], ftypes = [];

            let instance2 = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance2.get('get-all-fees-type')
            .then(res => { count++;
                this.loaded      = 1;
                this.ftypes      = res.data;
                ftypes = res.data;
                this.effectFeesInput();
            });
        },
        effectFeesInput() {
            let self = this, records = [];
            if(self.ftypes.length) {
                $.each(self.ftypes, function(i, row) {
                    records[row.id] = {
                        fees_for_new: 0,
                        fees_for_old: 0,
                    }

                    self.record = records
                });
                let params = {
                    'class_id'      : self.class_id,
                    'session'       : '',
                };

                let instance = axios.create({
                    baseURL: self.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+self.token,
                        'Accept': 'application/json'
                    }
                })
                instance.post('fees', params)
                        .then(res => {
                            if(res.status) {
                                self.record = res.data
                            }
                        })
            }
        },
        saveFees() {
            let params = {
                record: this.record,
                class_id: this.class_id
            };
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('fees/add', params)
                .then(res => {
                    this.loaded = 1;
                    if(res.status) {
                        // this.lists  = res.data.data;
                        this.getRecords()
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

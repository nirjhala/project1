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
                            <h3 class="card-title">Select Class</h3>
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
                    <div class="card height-auto mb-1" v-for="(ins, index) in installments">
                        <div class="card-body">
                            <h3 class="card-title">{{ ins.name }} ({{ ins.start_month }} - {{ ins.end_month }})</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-sm">
                                    <tr>
                                        <th></th>
                                        <th v-for="(ft, index2) in ftypes">{{ ft.name }}</th>
                                    </tr>
                                    <tr>
                                        <th>New Admission</th>
                                        <td v-for="(ft, index2) in ftypes">
                                            <div v-if="fees_for_new[index] && fees_for_new[index].ftypes[index2]">
                                                <input type="number" v-model="fees_for_new[index].ftypes[index2].fees" value="" min="0" class="form-control">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Old Admission</th>
                                        <td v-for="(ft, index2) in ftypes">
                                            <div v-if="fees_for_old[index] && fees_for_old[index].ftypes[index2]">
                                                <input type="number" v-model="fees_for_old[index].ftypes[index2].fees" value="" min="0" class="form-control">
                                            </div>
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
            ftypes: [],
            fees_for_new: [],
            fees_for_old: [],
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.getRecords();
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
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-all-fees-installments')
                .then(res => { count++;
                    this.loaded = 1;
                    this.installments = res.data;
                    installments = res.data;
                    this.effectFeesInput();
                });

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
            let self = this;
            if(self.installments.length && self.ftypes.length) {
                $.each(self.installments, function(i, row) {
                    let key = row.id;
                    self.fees_for_new.push({
                        installment_id: row.id,
                        ftypes: []
                    });
                    self.fees_for_old.push({
                        installment_id: row.id,
                        ftypes: []
                    });
                    $.each(self.ftypes, function(j, row2) {

                        self.fees_for_new[i].ftypes.push({
                            ftype_id: row2.id,
                            fees: ''
                        });
                        self.fees_for_old[i].ftypes.push({
                            ftype_id: row2.id,
                            fees: ''
                        });
                        let params = {
                            'fee_type_id'   : row2.id,
                            'class_id'      : self.class_id,
                            'installment_id': row.id,
                            'session'       : '',
                        };
                        let instance = axios.create({
                            baseURL: self.apiBaseUrl,
                            headers: {
                                'Authorization': 'Bearer '+self.token,
                                'Accept': 'application/json'
                            }
                        });
                        instance.post('get-fees', params)
                             .then(res => {
                                 if(res.status) {
                                     self.fees_for_new[i].ftypes[j].fees = res.data.new_fees;
                                     self.fees_for_old[i].ftypes[j].fees = res.data.old_fees;
                                 }
                             });

                    });
                });
            }
        },
        getRecords(page) {
            if (typeof page === 'undefined') {
               page = 1;
            }
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('view-fees/?page='+page)
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
                class_id: this.class_id
            };
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('add-fees/', params)
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

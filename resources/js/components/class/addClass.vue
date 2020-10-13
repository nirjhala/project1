<template>
<div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
        <div class="float-right">
            <router-link :to="{ name: 'class' }" class="fw-btn-fill btn-gradient-yellow text-white">View Class</router-link>
        </div>
        <h3>{{ !id ? 'Add' : 'Edit' }} Class</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'class' }">Class</router-link>
            </li>
            <li>{{ !id ? 'Add' : 'Edit' }} Class</li>
        </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
        <div class="card-body">
            <div class="text-center" v-if="!loaded">
                <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
            </div>
            <div v-if="loaded">
                <div class="heading-layout1">
                    <div class="item-title">
                        <h3>{{ !id ? 'Add New' : 'Edit' }} Class</h3>
                    </div>
                </div>
                <form class="new-added-form" @submit.prevent=" id ? updateData() : addSession()">
                    <div class="alert alert-danger" v-if="errors.length">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                        </ul>
                    </div>
                    <input type="hidden" v-model="id" value="">
                    <div class="row">
                        <div class="col-xl-3 col-lg-6 col-12 form-group">
                            <label>Department</label>
                            <select class="form-control classDept" v-model="classDept">
                                <option value="">Select Department</option>
                                <option v-for="dept in departments" :value="dept.id">{{ dept.dept_name }}</option>
                            </select>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-12 form-group">
                            <label>Name *</label>
                            <input type="text" v-model="className" placeholder="" value="" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 form-group mg-t-8">
                            <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">{{ !id ? 'Save' : 'Update' }}</button>
                            <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Student Table Area End Here -->
</div>
</template>
<script>
export default {
    data() {
        return {
            id: '',
            className: '',
            classDept: '',
            errors: [],
            loaded: 0,
            departments: [],
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        let params = this.$route.params;
        this.getDepts(params);

        // $('.select2').select2();
    },
    methods: {
        getDepts(params) {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-departments')
                .then(res => {
                    this.departments = res.data.data;
                    if (params.id != undefined && params.id != '') {
                        this.getInfo(params.id);
                    } else {
                        this.loaded = 1;
                    }
                });
        },
        getInfo(id) {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-class-info/' + id)
                .then(res => {
                    this.id = res.data.data.id;
                    this.className = res.data.data.name;
                    this.classDept = res.data.data.department

                    this.loaded = 1;

                    $('.select2').each(function() {
                        $(this).trigger('change');
                    });
                });
        },
        addSession: function() {
            let params = {
                name: this.className,
                department: this.classDept
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('add-class', params)
                .then(res => {
                    if (res.data.status) {
                        this.$router.push({
                                name: 'class'
                            })
                            .then(
                                res => {
                                    this.loaded = 1;
                                    this.$toast.success('Record saved.');
                                }
                            )
                            .catch(
                                err => {
                                    this.loaded = 1;
                                    console.log(err);
                                }
                            );
                    } else {
                        this.loaded = 1;
                        this.errors = res.data.errors;
                    }
                })
                .catch(error => {
                    this.loaded = 1;
                    console.log(error);
                });
        },
        updateData: function() {
            let params = {
                id: this.id,
                name: this.className,
                department: this.classDept
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('update-class', params)
                .then(res => {
                    if (res.data.status) {
                        this.$router.push({
                                name: 'class'
                            })
                            .then(
                                res => {
                                    this.loaded = 1;
                                    this.$toast.success('Record saved.');
                                }
                            )
                            .catch(
                                err => {
                                    this.loaded = 1;
                                    console.log(err);
                                }
                            );
                    } else {
                        this.loaded = 1;
                        this.errors = res.data.errors;
                    }
                })
                .catch(error => {
                    this.loaded = 1;
                    console.log(error);
                });
        },
    }
}
</script>

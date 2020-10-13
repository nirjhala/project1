<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'section' }" class="fw-btn-fill btn-gradient-yellow text-white">View Section</router-link>
            </div>
            <h3>{{ !id ? 'Add' : 'Edit' }} Section</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'section' }">Section</router-link>
                </li>
                <li>{{ !id ? 'Add' : 'Edit' }} Section</li>
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
                            <h3>{{ !id ? 'Add New' : 'Edit' }} Section</h3>
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
                                <select class="form-control sectionDept" v-model="sectionDept" v-on:change="getClasses">
                                    <option value="">Select Department</option>
                                    <option v-for="dept in departments" :value="dept.id" >{{ dept.dept_name }}</option>
                                </select>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Class</label>
                                <select class="form-control" v-model="sectionClass">
                                    <option value="">Select Class</option>
                                    <option v-for="cls in classes" :value="cls.id" >{{ cls.name }}</option>
                                </select>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Name *</label>
                                <input type="text" v-model="sectionName" placeholder="" class="form-control">
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
    name: 'addShift',
    data() {
        return {
            id: '',
            sectionName: '',
            sectionDept: '',
            sectionClass: '',
            errors: [],
            loaded: 0,
            departments: [],
            classes: [],
            sectionNo: 1,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        let params = this.$route.params;
        this.getDepts(params);
    },
    methods: {
        getClasses() {
            let deptId  = this.sectionDept;
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-class-by-dept/'+deptId)
                 .then( res => {
                     this.classes = res.data;
                     this.sectionClass = '';
                     this.loaded        = 1;
                 });
        },
        getEditClasses( id ) {
            let deptId  = this.sectionDept;
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-class-by-dept/'+deptId)
                 .then( res => {
                     this.classes = res.data;
                     this.loaded        = 1;
                 });
        },
        addSectionsText: function() {
            for(let i = 0; i < this.sectionNo; i++) {
                this.sectionNames.push( this.sectionArr[i] );
            }
        },
        getDepts(params) {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-departments')
                 .then( res => {
                     this.departments = res.data.data;

                     if( params.id != undefined && params.id != '' ) {
                         this.getInfo( params.id );
                     } else {
                         this.loaded = 1;
                     }
                 });
        },
        getInfo(id) {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-section-info/'+id)
                 .then( res => {
                     this.id            = res.data.data.id;
                     this.sectionClass  = res.data.data.class;
                     this.sectionDept   = res.data.data.cls.department;
                     this.sectionName   = res.data.data.name;

                     this.getEditClasses( this.id );
                 });
        },
        updateData: function () {
            let params = {
                id: this.id,
                name: this.sectionName,
                department: this.sectionDept,
                class: this.sectionClass
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('update-section', params)
                .then(res => {
                    if(res.data.status) {
                        this.$router.push({ name: 'section' })
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

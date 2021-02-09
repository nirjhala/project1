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
                    <form @submit.prevent=" id ? updateData() : addSession()">
                        <div class="alert alert-danger" v-if="errors.length">
                            <ul class="mb-0">
                                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                            </ul>
                        </div>
                        <input type="hidden" v-model="id" value="">
                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Department</label>
                                <select 
                                    class="form-control sectionDept" 
                                    v-model.trim="$v.sectionDept.$model" 
                                    v-on:change="getClasses"
                                    :class="{
                                        'is-invalid': $v.sectionDept.$error
                                    }"
                                >
                                    <option value="">Select Department</option>
                                    <option v-for="dept in departments" :value="dept.id" :key="dept.id">{{ dept.dept_name }}</option>
                                </select>
                                <b-form-invalid-feedback>Please select department.</b-form-invalid-feedback>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Class</label>
                                <select 
                                    v-model="$v.sectionClass.$model" 
                                    class="form-control" 
                                    :class="{
                                        'is-invalid': $v.sectionClass.$error
                                    }"
                                >
                                    <option value="">Select Class</option>
                                    <option v-for="cls in classes" :value="cls.id" :key="cls.id">{{ cls.name }}</option>
                                </select>
                                <b-form-invalid-feedback>Please select class.</b-form-invalid-feedback>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-12 form-group">
                                <label>No. of Sections</label>
                                <select 
                                    v-model.trim="$v.sectionNo.$model" 
                                    v-on:change="addSectionsText" 
                                    class="form-control" 
                                    :class="{
                                        'is-invalid': $v.sectionNo.$error
                                    }"
                                >
                                    <option value="">Select No. of Sections</option>
                                    <option :value="n" v-for="n in 20" :key="n">{{ n }}</option>
                                </select>
                                <b-form-invalid-feedback>Please select number of sections.</b-form-invalid-feedback>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-12 form-group" v-for="(sec, index) in $v.sectionNames.$each.$iter" :key="index">
                                <label>Name *</label>
                                <input 
                                    type="text" 
                                    v-model.trim="sec.name.$model" 
                                    class="form-control"
                                    :class="{
                                        'is-invalid': sec.name.$error
                                    }"
                                >
                                <b-form-invalid-feedback v-if="!sec.name.required">Please enter section name.</b-form-invalid-feedback>
                                <!-- <b-form-invalid-feedback v-if="!sec.isDuplicate">Duplicate section name.</b-form-invalid-feedback> -->
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
import { required } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            id: '',
            sectionNames: [],
            sectionDept: '',
            sectionClass: '',
            errors: [],
            loaded: 0,
            departments: [],
            classes: [],
            sectionNo: '',
            sectionArr: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            token: localStorage.getItem('token')
        }
    },
    validations: {
        sectionDept: {
            required
        },
        sectionClass: {
            required
        },
        sectionNo: {
            required
        },
        sectionNames: {
            required,
            $each: {
                name: { 
                    required
                }
            }
        }
    },
    mounted() {
        let params = this.$route.params;
        this.getDepts(params);
    },
    methods: {
        getClasses() {
            let deptId = this.sectionDept;
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
                 });
        },
        addSectionsText: function() {
            this.sectionNames = [];
            for(let i = 0; i < this.sectionNo; i++) {
                this.sectionNames.push( {name: this.sectionArr[i]} );
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
                     this.className     = res.data.data.name;
                     this.sectionDept     = res.data.data.department

                     this.loaded        = 1;

                     $('.select2').each(function() {
                         $(this).trigger('change');
                     });
                 });
        },
        addSession: function () {
            this.$v.$touch()

            if(!this.$v.$anyError) {
                let params = {
                    names: this.sectionNames,
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
                instance.post('add-section', params)
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
                    })
            }
        }
    }
}
</script>

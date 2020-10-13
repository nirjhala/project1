<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'student' }" class="fw-btn-fill btn-gradient-yellow text-white">View Student</router-link>
            </div>
            <h3>{{ !id ? 'Add' : 'Edit' }} Student</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'student' }">Student</router-link>
                </li>
                <li>{{ !id ? 'Add' : 'Edit' }} Student</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <div class="card mb-3 h-auto">
            <div class="step-wizard-tabs card-body">
                <ul>
                    <li data-tab="#general-info" class="current">
                        <a href="#general-info"><span class="step-no">1</span> General Info</a>
                    </li>
                    <li data-tab="#admission-info">
                        <a href="#admission-info"><span class="step-no">2</span> Admission Info</a>
                    </li>
                    <li data-tab="#gaurdian-info">
                        <a href="#gaurdian-info"><span class="step-no">3</span> Guardian Info</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="alert alert-danger mb-2" v-if="errors.length">
            <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>

        <div class="step-wizard-panels">
            <!-- Card Table Area Start Here -->
            <form class="new-added-form" id="addStudentForm" @submit.prevent=" id ? updateData() : addData()">
                <div id="general-info" class="card height-auto step-wizard-panel active">
                    <div class="card-body">
                        <div class="text-center" v-if="!loaded">
                            <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
                        </div>
                        <div v-if="loaded">
                                <div class="heading-layout1">
                                    <div class="item-title">
                                        <h3>Login Info</h3>
                                    </div>
                                </div>
                                <input type="hidden" v-model="id" value="">
                                <div class="row">
                                    <div class="col-xl-3 col-lg-6 col-12 form-group">
                                        <label>Mobile No.</label>
                                        <input type="tel" v-model="mobile" class="form-control">
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-12 form-group">
                                        <label>Login *</label>
                                        <input type="text" v-model="login" class="form-control" required>
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-12 form-group">
                                        <label>Password *</label>
                                        <input type="password" v-model="password" id="userPassword" class="form-control">
                                        <i class="far fa fa-eye passwordToggle" style="cursor: pointer"></i>
                                    </div>
                                    <div class="col-xl-3 col-lg-6 col-12 form-group">
                                        <label>&nbsp;</label>
                                        <button type="button" class="btn-fill-lg bg-blue-dark btn-hover-yellow genPassBtn">Auto Generate</button>
                                    </div>
                                </div>
                                <div class="heading-layout1">
                                    <div class="item-title">
                                        <h3>User Info</h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-9">
                                        <div class="row">
                                            <div class="col-xl-4 col-12 form-group">
                                                <label>Title *</label>
                                                <select class="form-control" v-model="title" v-on:change="fillName()" required>
                                                    <option value="Mr.">Mr.</option>
                                                    <option value="Ms.">Ms.</option>
                                                    <option value="Mrs.">Mrs.</option>
                                                </select>
                                            </div>
                                            <div class="col-xl-4 col-12 form-group">
                                                <label>First Name *</label>
                                                <input type="text" v-model="fname" v-on:keyup="fillName()" class="form-control" required>
                                            </div>
                                            <div class="col-xl-4 col-12 form-group">
                                                <label>Last Name</label>
                                                <input type="text" v-model="lname" v-on:keyup="fillName()" class="form-control" >
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Display Name *</label>
                                            <input type="text" v-model="name" class="form-control" required>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-4 col-12 form-group">
                                                <label>Date of Birth *</label>
                                                <input type="date" v-model="dob" class="form-control" required>
                                            </div>
                                            <div class="col-xl-4 form-group">
                                                <label>Gender *</label>
                                                <select class="form-control" v-model="gender">
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div class="col-xl-4 col-12 form-group">
                                                <label>Email Address</label>
                                                <input type="email" v-model="email" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Address Line 1</label>
                                            <input type="text" v-model="address1" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label>Address Line 2</label>
                                            <input type="text" v-model="address2" class="form-control">
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-4 col-12 form-group">
                                                <label>State *</label>
                                                <select class="form-control" v-model="state" v-on:change="getCities()">
                                                    <option value="">Select State</option>
                                                    <option :value="s.id" v-for="s in states" :key="s.id">{{ s.name }}, {{ s.country_name.name }}</option>
                                                </select>
                                            </div>
                                            <div class="col-xl-4 form-group">
                                                <label>City *</label>
                                                <select class="form-control" v-model="city">
                                                    <option value="">Select City</option>
                                                    <option :value="s.id" v-for="s in cities" :key="s.id">{{ s.name }}</option>
                                                </select>
                                            </div>
                                            <div class="col-xl-4 col-12 form-group">
                                                <label>Pincode</label>
                                                <!-- <select class="form-control" v-model="pin_code">
                                                    <option value="">Select Pincode</option>
                                                    <option :value="p.pincode" v-for="p in pincodes">{{ p.pincode }}</option>
                                                </select> -->
                                                <input type="tel" v-model="pin_code" class="form-control" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="mb-3">
                                            <label>Upload Image</label>
                                            <img v-bind:src="image_src" alt="" title="" id="featuredImage" class="w-100 featuredImage">
                                            <input type="hidden" v-model="image" value="" id="featuredImageId">
                                        </div>
                                        <button type="button" class="uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block uploadImageBtn" data-image="#featuredImage" data-field="#featuredImageId">Upload Image</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6"> </div>
                                    <div class="col-6 form-group mg-t-8 text-right">
                                        <button type="button" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark wizardBtn" data-target="#admission-info">Next</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div id="admission-info" class="card height-auto step-wizard-panel">
                    <div class="card-body">
                        <div class="text-center" v-if="!loaded">
                            <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
                        </div>
                        <div v-if="loaded">
                            <div class="heading-layout1">
                                <div class="item-title">
                                    <h3>Admission Info</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-3 col-12 form-group">
                                    <label>Enrollment No. *</label>
                                    <input type="text" v-model="reg_no" class="form-control" required>
                                </div>
                                <div class="col-xl-3 col-12 form-group">
                                    <label>Roll No.</label>
                                    <input type="text" v-model="roll_no" class="form-control">
                                </div>
                                <div class="col-xl-3 col-12 form-group">
                                    <label>Blood Group</label>
                                    <select class="form-control" v-model="blood_group">
                                        <option value="">Select Bloog Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="0+">0+</option>
                                        <option value="0-">0-</option>
                                        <option value="Do not know">Don't know</option>
                                    </select>
                                </div>
                                <div class="col-xl-3 form-group">
                                    <label>Category *</label>
                                    <select class="form-control" v-model="category" required>
                                        <option value="">Select Category</option>
                                        <option value="General">General</option>
                                        <option value="OBC">OBC</option>
                                        <option value="SBC">SBC</option>
                                        <option value="SC">SC</option>
                                        <option value="ST">ST</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-3 col-12 form-group">
                                    <label>Religion</label>
                                    <select class="form-control" v-model="religion">
                                        <option value="">Select Religion</option>
                                        <option :value="r.id" v-for="r in religions" :key="r.id">{{ r.name }}</option>
                                    </select>
                                </div>
                                <div class="col-xl-3 col-12 form-group">
                                    <label>Cast</label>
                                    <input type="text" v-model="cast" class="form-control">
                                </div>
                                <div class="col-xl-3 form-group">
                                    <label>Class *</label>
                                    <select class="form-control" v-model="class_id" v-on:change="getSections()" required>
                                        <option value="">Select Class</option>
                                        <option :value="c.id" v-for="c in classes" :key="c.id">{{ c.name }}</option>
                                    </select>
                                </div>
                                <div class="col-xl-3 col-12 form-group">
                                    <label>Section *</label>
                                    <select class="form-control" v-model="section" required>
                                        <option value="">Select Section</option>
                                        <option :value="s.id" v-for="s in sections" :key="s.id">{{ s.name }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6 form-group mg-t-8">
                                        <button type="button" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark wizardBtn" data-target="#general-info">Previous</button>
                                </div>
                                <div class="col-6 form-group mg-6-8 text-right">
                                    <button type="button" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark wizardBtn" data-target="#gaurdian-info">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gaurdian-info" class="card height-auto step-wizard-panel">
                    <div class="card-body">
                        <div class="text-center" v-if="!loaded">
                            <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
                        </div>
                        <div v-if="loaded">
                            <div class="heading-layout1">
                                <div class="item-title">
                                    <h3>Parents Info</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-12 form-group">
                                    <label>Father *</label>
                                    <multiselect v-model="father" deselect-label="Can't remove this value" track-by="id" :custom-label="nameWithMobile" placeholder="Select Father Name" :options="guardians.father ? guardians.father : []" :searchable="true" :allow-empty="false">
                                        <template slot="singleLabel" slot-scope="{ option }">
                                            {{ option.name }} {{ option.mobile }}
                                        </template>
                                    </multiselect>
                                </div>
                                <div class="col-xl-2 col-lg-6 col-12 form-group">
                                    <label>&nbsp;</label>
                                    <button type="button" class="btn btn-lg btn-success btn-block" v-on:click="openParentModal('father')" data-source="father">Add New</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-12 form-group">
                                    <label>Mother *</label>
                                    <multiselect v-model="mother" deselect-label="Can't remove this value" track-by="mobile" :custom-label="nameWithMobile" placeholder="Select Mother Name" :options="guardians.mother ? guardians.mother : []" :searchable="true" :allow-empty="false">
                                        <template slot="singleLabel" slot-scope="{ option }">
                                            {{ option.name }} {{ option.mobile }}
                                        </template>
                                    </multiselect>
                                </div>
                                <div class="col-xl-2 col-lg-6 col-12 form-group">
                                    <label>&nbsp;</label>
                                    <button type="button" class="btn btn-lg btn-success btn-block" v-on:click="openParentModal('mother')" data-source="mother">Add New</button>
                                </div>
                            </div>
                            <div class="heading-layout1">
                                <div class="item-title">
                                    <h3>Guardian Info</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Relation *</label>
                                    <select class="form-control" v-model="relation" v-on:change="changeRelationName()" required>
                                        <option value="">Select Relation</option>
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="col-xl-5 col-lg-6 col-12 form-group">
                                    <label>Relation Name (if Other Selected)</label>
                                    <input type="text" v-model="relation_name" class="form-control" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-12 form-group">
                                    <label>Guardian *</label>
                                    <multiselect v-model="guardian" deselect-label="Can't remove this value" track-by="name" :custom-label="nameWithMobile" placeholder="Select Guardian Name" :options="guardians.all ? guardians.all : []" :searchable="true" :allow-empty="false">
                                        <template slot="singleLabel" slot-scope="{ option }">
                                            {{ option.name }} {{ option.mobile }}
                                        </template>
                                    </multiselect>
                                </div>
                                <div class="col-xl-2 col-lg-6 col-12 form-group" v-if="relation == 'other'">
                                    <label>&nbsp;</label>
                                    <button type="button" class="btn btn-lg btn-success btn-block" v-on:click="openParentModal('guardian')" data-source="guardian">Add New</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 form-group mg-t-8">
                                    <button type="button" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark wizardBtn" data-target="#admission-info">Previous</button>
                                </div>
                                <div class="col-6 form-group mg-t-8 text-right">
                                    <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">{{ !id ? 'Save' : 'Update' }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <!-- Student Table Area End Here -->
        </div>

        <!--
        #############################################
        # Add Gaurdian Model
        #############################################
        -->
        <div class="modal align-middle" id="guardianModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Gaurdian</h5>
                        <button class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent=" addParent()">
                            <input type="hidden" id="userSource" value="">
                            <div class="form-group">
                                <input type="text" v-model="parentName" placeholder="Name" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="parentType" placeholder="Type" class="form-control" required readonly>
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="parentMobile" placeholder="Mobile No." class="form-control" required>
                            </div>
                            <div class="form-group">
                                <input type="password" v-model="parentPassword" placeholder="Password" class="form-control" required>
                            </div>
                            <div class="form-group text-center">
                                <button type="submit" class="btn btn-lg btn-info btnReflectPassword"><i class="fas fa-check"></i> &nbsp; &nbsp; Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!--
        #############################################
        # Genrate Password Popup
        #############################################
        -->
        <div class="modal align-middle" id="generatePasswordModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Generate Password</h5>
                        <button class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group mb-3">
                            <input type="text" id="generatedPassword" class="form-control">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary genPassBtn" type="button">Generate</button>
                            </div>
                        </div>
                        <div class="">
                            <label>
                                <input type="checkbox" id="copyConfirm" value="1"> Have you copied password?
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-info btnReflectPassword" v-on:click="fillPassword()" disabled>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
    import Multiselect from 'vue-multiselect'
    export default {
        components: { Multiselect },
        props: ['image_src', 'image'],
        data() {
            return {
                id: '',
                role: '',
                mobile: '',
                login: '',
                password: '',
                title: 'Mr.',
                
                fname: '',
                lname: '',
                name: '',
                dob: '',
                gender: 'Male',
                email: '',
                address1: '',
                address2: '',
                state: '',
                city: '',
                pin_code: '',
                // image: '',
                reg_no: '',
                roll_no: '',
                blood_group: '',
                category: '',
                religion: '',
                cast: '',
                class_id: '',
                section: '',
                father: {},
                mother: {},
                guardian: {},
                relation: '',
                relation_name: '',
                parentName: '',
                parentMobile: '',
                parentPassword: '',
                parentType: 'other',
                // featuredImage: '/school-management/img/default.jpg',
                guardians: [
                    {
                        father: [],
                        mother: [],
                        other: [],
                        all: []
                    }
                ],
                roles: [],
                states: [],
                cities: [],
                pincodes: [],
                religions: [],
                classes: [],
                sections: [],
                errors: [],
                loaded: 0,
                token: localStorage.getItem('token')
            }
        },
        mounted() {
            let params = this.$route.params;

            this.getRoles();
            this.getStates();
            this.getReligions();
            this.getClasses();
            this.getParents();

            if (params.id != undefined && params.id != '') {
                this.getInfo(params.id);
            } else {
                this.loaded = 1;
            }
        },
        methods: {
            nameWithMobile({name, mobile}) {
                return `${name} — ${mobile}`
            },
            changeRelationName() {
                this.guardians.all = this.guardians[this.relation]
                if(this.relation != "other") {
                    this.relation_name = this.relation;
                } else {
                    this.relation_name = '';
                }
            },
            fillName() {
                this.name = (this.title + ' ' + this.fname + ' ' + this.lname).trim();
            },
            fillPassword() {
                this.password = $('#generatedPassword').val();
                $('#generatePasswordModal').modal('hide');
            },
            getPincodes() {
                let city = this.city,
                    params = {
                        id: city
                    };
                    let instance = axios.create({
                        baseURL: this.apiBaseUrl,
                        headers: {
                            'Authorization': 'Bearer '+this.token,
                            'Accept': 'application/json'
                        }
                    });
                    instance.post('get-pincodes-by-city', params)
                     .then(res => {
                         this.pincodes = res.data;
                     });
            },
            getCities() {
                let state = this.state,
                    params = {
                        id: state
                    };
                    let instance = axios.create({
                        baseURL: this.apiBaseUrl,
                        headers: {
                            'Authorization': 'Bearer '+this.token,
                            'Accept': 'application/json'
                        }
                    });
                    instance.post('get-cities-by-state', params)
                     .then(res => {
                         this.cities = res.data;
                     });
            },
            getRoles() {
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.get('get-all-roles')
                    .then(res => {
                        this.roles = res.data;
                    });
            },
            getStates() {
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.get('get-all-states')
                    .then(res => {
                        this.states = res.data;
                    });
            },
            getSections() {
                let class_id = this.class_id,
                    params = {
                        id: class_id
                    };

                    let instance = axios.create({
                        baseURL: this.apiBaseUrl,
                        headers: {
                            'Authorization': 'Bearer '+this.token,
                            'Accept': 'application/json'
                        }
                    });
                    instance.get('get-sections-by-class/'+class_id)
                     .then(res => {
                         this.sections = res.data;
                     });
            },
            getClasses() {
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.get('get-all-classes')
                     .then(res => {
                         this.classes = res.data;
                     });
            },
            openParentModal(type) {
                this.parentType = type

                $('#guardianModal').modal('show');
            },
            addParent() {
                let form     = $('#guardianModal form'),
                    name     = this.parentName,
                    mobile   = this.parentMobile,
                    password = this.parentPassword,
                    source   = this.parentType;

                let params = {
                    name: name,
                    mobile: mobile,
                    password: password,
                    type: source
                };

                let is_valid = form.is_valid();
                let self = this;
                if(is_valid) {
                    let instance = axios.create({
                        baseURL: this.apiBaseUrl,
                        headers: {
                            'Authorization': 'Bearer '+this.token,
                            'Accept': 'application/json'
                        }
                    });
                    instance.post('parent/add', params)
                         .then(res => {
                             let new_id = res.data.id;
                             self.guardians.all = res.data.list.all;
                             if(source == "father") {
                                self.guardians.father = res.data.list.father;
                                self.father    = new_id;
                             } else if(source == "mother") {
                                self.guardians.mother = res.data.list.mother;
                                self.mother    = new_id;
                             } else if(source == "other") {
                                self.guardians.all = res.data.list.other;
                                self.guardian  = new_id;
                             }

                             self.parentName        = '';
                             self.parentMobile      = '';
                             self.parentPassword    = '';

                             $('#guardianModal').modal('hide');
                         });
                 }
            },
            getParents() {
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.get('parent')
                     .then(res => {
                         this.guardians = res.data;
                     });
            },
            getReligions() {
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.get('get-all-religions')
                     .then(res => {
                         this.religions = res.data;
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
                instance.get('get-student-info/' + id)
                    .then(res => {
                        this.id             = res.data.id;
                        this.title          = res.data.title;
                        this.fname          = res.data.fname;
                        this.lname          = res.data.lname;
                        this.name           = res.data.name;
                        this.mobile         = res.data.mobile;
                        this.login          = res.data.login;
                        this.dob            = res.data.dob;
                        this.gender         = res.data.gender;
                        this.email          = res.data.email;
                        this.address1       = res.data.address1;
                        this.address2       = res.data.address2;
                        this.state          = res.data.city_data.state;
                        this.city           = res.data.city_id;
                        this.pin_code       = res.data.pin_code;
                        // this.image = res.data.image;
                        this.reg_no         = res.data.student_data.reg_no;
                        this.roll_no        = res.data.student_data.roll_no;
                        this.blood_group    = res.data.student_data.blood_group;
                        this.category       = res.data.student_data.category;
                        this.religion       = res.data.student_data.religion;
                        this.cast           = res.data.student_data.cast;
                        this.category       = res.data.student_data.category;
                        this.class_id       = res.data.student_data.section_name.class;
                        this.section        = res.data.student_data.section;
                        this.father         = res.data.student_data.father_info;
                        this.mother         = res.data.student_data.mother_info;
                        this.guardian       = res.data.student_data.guardian_info;
                        this.relation_name  = res.data.student_data.guardian_relation;

                        let relationName    = res.data.student_data.guardian_relation.toLowerCase();

                        if(relationName == "father" || relationName == "mother") {
                            this.relation       = relationName;
                        } else {
                            this.relation       = "other";
                        }

                        // if(res.data.media && res.data.media.image != null) {
                        let media_image    = res.data.image != null ? res.data.image : '';
                        let media_src      = res.data.media ? this.baseURL+'uploads/medium/'+res.data.media.image : this.baseURL+'/img/default.jpg';

                        this.$emit('update-image_src-selected', media_src);
                        this.$emit('update-image-selected', media_image);
                        // }

                        this.getCities();
                        // this.getPincodes();
                        this.getSections();

                        this.loaded     = 1;

                        $('.select2').each(function() {
                            $(this).trigger('change');
                        });
                    });
            },
            addData: function() {
                let father      = this.father.id ? this.father.id : '';
                let mother      = this.mother.id ? this.mother.id : '';
                let guardian    = this.guardian.id ? this.guardian.id : '';

                let params = {
                    user: {
                        title: this.title,
                        fname: this.fname,
                        lname: this.lname,
                        name: this.name,
                        mobile: this.mobile, // Optional
                        email: this.email,
                        gender: this.gender,
                        dob: this.dob,
                        image: this.image,
                        address1: this.address1,
                        address2: this.address2,
                        pin_code: this.pin_code,
                        city_id: this.city,
                        role: this.role,
                        login: this.login,
                        password: this.password
                    },
                    student: {
                        reg_no: this.reg_no,
                        roll_no: this.roll_no,
                        blood_group: this.blood_group,
                        category: this.category,
                        religion: this.religion,
                        cast: this.cast,
                        section: this.section,
                        father: father,
                        mother: mother,
                        guardian: guardian,
                        // guardian_relation: this.relation,
                        guardian_relation: this.relation_name,
                    }
                }
                let is_valid = $('#addStudentForm').is_valid();
                if(is_valid) {
                    this.loaded = 0;
                    let instance = axios.create({
                        baseURL: this.apiBaseUrl,
                        headers: {
                            'Authorization': 'Bearer '+this.token,
                            'Accept': 'application/json'
                        }
                    });
                    instance.post('add-student', params)
                        .then(res => {
                            if (res.data.status) {
                                this.$router.push({
                                        name: 'student'
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
                }
            },
            updateData: function() {
                let father      = this.father.id ? this.father.id : '';
                let mother      = this.mother.id ? this.mother.id : '';
                let guardian    = this.guardian.id ? this.guardian.id : '';

                let params = {
                    id: this.id,
                    user: {
                        title: this.title,
                        fname: this.fname,
                        lname: this.lname,
                        name: this.name,
                        mobile: this.mobile, // Optional
                        email: this.email,
                        gender: this.gender,
                        dob: this.dob,
                        image: this.image,
                        address1: this.address1,
                        address2: this.address2,
                        pin_code: this.pin_code,
                        city_id: this.city,
                        role: this.role,
                        login: this.login,
                        password: this.password
                    },
                    student: {
                        reg_no: this.reg_no,
                        roll_no: this.roll_no,
                        blood_group: this.blood_group,
                        category: this.category,
                        religion: this.religion,
                        cast: this.cast,
                        section: this.section,
                        father: father,
                        mother: mother,
                        guardian: guardian,
                        // guardian_relation: this.relation,
                        guardian_relation: this.relation_name,
                    }
                };
                this.loaded = 0;
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('update-student', params)
                    .then(res => {
                        if (res.data.status) {
                            this.$router.push({
                                    name: 'student'
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

<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'user' }" class="fw-btn-fill btn-gradient-yellow text-white">View User</router-link>
            </div>
            <h3>{{ !id ? 'Add' : 'Edit' }} User</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'user' }">User</router-link>
                </li>
                <li>{{ !id ? 'Add' : 'Edit' }} User</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <div class="card height-auto">
            <div class="card-body">
                <div class="text-center" v-if="!loaded">
                    <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
                </div>
                <div v-if="loaded">
                    <form class="new-added-form" @submit.prevent=" id ? updateData() : addData()">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Login Info</h3>
                            </div>
                        </div>
                        <div class="alert alert-danger" v-if="errors.length">
                            <ul class="mb-0">
                                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                            </ul>
                        </div>
                        <input type="hidden" v-model="id" value="">
                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Role *</label>
                                <!-- <Select2 name="role" v-model="role" :options="role_options" :settings="{ placeholder: 'Select Role' }" /> -->
                                <select v-model="role" class="form-control" name="role">
                                    <option :value="r.id" v-for="r in role_options">{{ r.text }}</option>
                                </select>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Mobile No. *</label>
                                <input type="text" v-model="mobile" class="form-control">
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
                                        <select class="form-control" v-model="title" v-on:change="getFullName()" required>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Ms.">Ms.</option>
                                            <option value="Mrs.">Mrs.</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-4 col-12 form-group">
                                        <label>First Name *</label>
                                        <input type="text" v-model="fname" class="form-control" v-on:keyup="getFullName()" required>
                                    </div>
                                    <div class="col-xl-4 col-12 form-group">
                                        <label>Last Name</label>
                                        <input type="text" v-model="lname" v-on:keyup="getFullName()" class="form-control" >
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
                                        <label>Email Address *</label>
                                        <input type="email" v-model="email" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Address Line 1</label>
                                    <input type="text" v-model="address1" value="" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Address Line 2</label>
                                    <input type="text" v-model="address2" value="" class="form-control">
                                </div>
                                <div class="row">
                                    <div class="col-xl-4 col-12 form-group">
                                        <label>State *</label>
                                        <select class="form-control" v-model="state" v-on:change="getCities()">
                                            <option value="">Select State</option>
                                            <option :value="s.id" v-for="s in states">{{ s.name }}, {{ s.country_name.name }}</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-4 form-group">
                                        <label>City *</label>
                                        <select class="form-control" v-model="city">
                                            <option value="">Select City</option>
                                            <option :value="s.id" v-for="s in cities">{{ s.name }}</option>
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
                                    <img :src="image_src" alt="" title="" id="featuredImage" class="w-100 uploadImage" data-image="#featuredImage" data-field="#featuredImageId" v-if="image_src">
                                    <input type="hidden" v-model="image" value="" id="featuredImageId">
                                </div>
                                <button type="button" class="uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block uploadImageBtn" data-image="#featuredImage" data-field="#featuredImageId">Upload Image</button>
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
        <div class="modal align-middle" id="generatePasswordModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Generate Password</h5>
                        <button class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group mb-3">
                            <input type="text" v-model="generated_password" id="generatedPassword" class="form-control">
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
<script>
    import Select2 from 'v-select2-component';

    export default {
        components: { Select2 },
        props: ['image_src', 'image'],
        data() {
            return {
                id: '',
                role: '',
                mobile: '',
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
                generated_password: '',
                states: [],
                cities: [],
                pincodes: [],
                errors: [],
                loaded: 0,
                role_options: [],
                token: localStorage.getItem('token'),
            }
        },
        mounted() {
            let params = this.$route.params;

            this.getRoles();
            this.getStates();

            if (params.id != undefined && params.id != '') {
                this.getInfo(params.id);
            } else {
                this.loaded = 1;
            }
        },
        methods: {
            getFullName() {
                this.name = ( this.title + ' ' + this.fname + ' ' + this.lname ).trim();
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
                        let self = this;
                        let options = [{
                            id: '',
                            text: 'Select Role'
                        }];

                        $.each(res.data, function(i, row) {
                            options.push({
                                id: row.id,
                                text: row.name
                            });
                        });
                        this.role_options = options;
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
            getInfo(id) {
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.get('get-user-info/' + id)
                    .then(res => {
                        this.id             = res.data.data.id;
                        this.role           = res.data.data.role;
                        this.mobile         = res.data.data.mobile;
                        this.title          = res.data.data.title;
                        this.fname          = res.data.data.fname;
                        this.lname          = res.data.data.lname;
                        this.name           = res.data.data.name;
                        this.dob            = res.data.data.dob;
                        this.gender         = res.data.data.gender;
                        this.email          = res.data.data.email;
                        this.address1       = res.data.data.address1;
                        this.address2       = res.data.data.address2;
                        this.state          = res.data.data.city_data ? res.data.data.city_data.state : '';
                        // this.city        = res.data.data.pincode_data ? res.data.data.pincode_data.city : '';
                        this.city           = res.data.data.city_id;
                        this.pin_code       = res.data.data.pin_code != null ? res.data.data.pin_code : '';
                        this.loaded         = 1;

                        let media_image    = res.data.data.image;
                        let media_src      = res.data.data.media ? this.baseURL+'uploads/medium/'+res.data.data.media.image : this.baseURL+'/img/default.jpg';

                        this.$emit('update-image_src-selected', media_src);
                        this.$emit('update-image-selected', media_image);

                        this.getCities();
                        // this.getPincodes();
                    });
            },
            addData: function() {
                let params = {
                    title: this.title,
                    fname: this.fname,
                    lname: this.lname,
                    mobile: this.mobile,
                    email: this.email,
                    gender: this.gender,
                    dob: this.dob,
                    image: this.image,
                    address1: this.address1,
                    address2: this.address2,
                    city_id: this.city,
                    pin_code: this.pin_code,
                    role: this.role,
                    login: this.mobile,
                    password: this.password,
                }
                this.loaded = 0;
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('add-user', params)
                    .then(res => {
                        if (res.data.status) {
                            this.$router.push({
                                    name: 'user'
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
                    title: this.title,
                    fname: this.fname,
                    lname: this.lname,
                    mobile: this.mobile,
                    email: this.email,
                    gender: this.gender,
                    dob: this.dob,
                    image: this.image,
                    address1: this.address1,
                    address2: this.address2,
                    city_id: this.city,
                    pin_code: this.pin_code,
                    role: this.role,
                    login: this.mobile,
                    password: this.password,
                }
                this.loaded = 0;
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('update-user', params)
                    .then(res => {
                        if (res.data.status) {
                            this.$router.push({
                                    name: 'user'
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

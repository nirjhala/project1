<template>
<div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>General Settings</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>General Settings</li>
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
                <form class="new-added-form" @submit.prevent="updateData()" enctype="multipart/form-data">
                    <div class="alert alert-danger" v-if="errors.length">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                        </ul>
                    </div>

                    <div class="row">
                        <div class="col-sm-9">
                            <div class="row">
                                <div class="col-sm-4 form-group">
                                    <label>School Name *</label>
                                    <input type="text" v-model="record.name" value="" class="form-control" placeholder="School Name">
                                </div>
                                <div class="col-sm-4 form-group">
                                    <label>Registration No. *</label>
                                    <input type="text" v-model="record.registration_no" value="" class="form-control" placeholder="Registration No.">
                                </div>
                                <div class="col-sm-4 form-group">
                                    <label>Roll No. Prefix</label>
                                    <input type="text" v-model="record.roll_prefix" class="form-control" placeholder="Roll No. Prefix" required>
                                </div>
                                <div class="col-sm-4 form-group">
                                    <label>Phone No. *</label>
                                    <input type="tel" v-model="record.phone" name="" class="form-control" placeholder="Phone No." required>
                                </div>
                                <div class="col-sm-4 form-group">
                                    <label>Email Address *</label>
                                    <input type="email" v-model="record.email" name="" class="form-control" placeholder="Email Address" required>
                                </div>
                                <div class="col-sm-4 form-group">
                                    <label>Est. Year *</label>
                                    <select class="form-control" v-model="record.est_year">
                                        <option value="">Select Year</option>
                                        <option :value="y" v-for="y in years">{{ y }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Address *</label>
                                <textarea v-model="record.address" rows="8" class="form-control h-auto p-3" placeholder="Address" required></textarea>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                    <label>State *</label>
                                    <select class="form-control" v-model="record.state" v-on:change="getCities()" required>
                                        <option value="">Select State</option>
                                        <option :value="s.id" v-for="s in states">{{ s.name }}</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 form-group">
                                    <label>City *</label>
                                    <select class="form-control" v-model="record.city" required>
                                        <option value="">Select City</option>
                                        <option :value="c.id" v-for="c in cities">{{ c.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Student ID-Card Instructions *</label>
                                <textarea v-model="record.student_id_instructions" rows="8" class="form-control h-auto p-3" placeholder="Address" required></textarea>
                            </div>
                            <div class="form-group">
                                <label>Teacher ID-Card Instructions *</label>
                                <textarea v-model="record.teacher_id_instructions" rows="8" class="form-control h-auto p-3" placeholder="Address" required></textarea>
                            </div>
                            <div class="form-group">
                                <label>Staff ID-Card Instructions *</label>
                                <textarea v-model="record.staff_id_instructions" rows="8" class="form-control h-auto p-3" placeholder="Address" required></textarea>
                            </div>
                            <div class="row">
                                <div class="col-12 form-group mg-t-8">
                                    <label>&nbsp;</label>
                                    <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Update</button>
                                    <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="mb-3">
                                <div class="mb-3">
                                    <label>Upload Logo</label>
                                    <label class="d-block">
                                        <img :src="logo_src" alt="" title="" id="featuredImage"  style="width: 100%; height: 200px; object-fit: contain;">
                                        <input type="file" id="siteLogo" v-on:change="logoHandler" class="d-none">
                                    </label>
                                </div>
                                <label for="siteLogo" class="uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block text-center">Choose Image</label>
                            </div>
                            <div class="mb-3">
                                <div class="mb-3">
                                    <label>Upload Favicon</label>
                                    <label class="d-block text-center">
                                        <img :src="favicon_src" alt="" title="" id="featuredImage" style="max-width: 100%; max-height: 300px; object-fit: contain;">
                                        <input type="file" id="siteFavicon" v-on:change="faviconHandler" class="d-none">
                                    </label>
                                </div>
                                <label for="siteFavicon" class="uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block text-center">Choose Image</label>
                            </div>
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
var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
if (month.length < 2)
    month = '0' + month;
if (day.length < 2)
    day = '0' + day;
var currentDate = [year, month, day].join('-');
var years = [];
for (var i = year; i >= year - 200; i--) {
    years.push(i);
}
export default {
    props: ['image_src', 'image'],
    data() {
        return {
            record: {
                name: '',
                registration_no: '',
                roll_prefix: '',
                phone: '',
                email: '',
                est_year: '',
                address: '',
                state: '',
                city: '',
                student_id_instructions: '',
                teacher_id_instructions: '',
                staff_id_instructions: '',
            },
            logo: '',
            logo_src: 'img/default.jpg',
            favicon: '',
            favicon_src: 'img/default.jpg',
            states: [],
            cities: [],
            years: years,
            errors: [],
            loaded: 0,
            token: localStorage.getItem('token'),
            maxDate: currentDate
        }
    },
    computed: {
        name: {
            get() {
                return (this.title + ' ' + this.fname + ' ' + this.lname).trim();
            },
            set(newValue) {
                //
            }
        }
    },
    mounted() {
        let params = this.$route.params;
        this.getSchoolInfo();
    },
    methods: {
        logoHandler(e) {
            this.logo = e.target.files[0];
            this.logo_src = URL.createObjectURL(this.logo);
        },
        faviconHandler(e) {
            this.favicon = e.target.files[0];
            this.favicon_src = URL.createObjectURL(this.favicon);
        },
        getSchoolInfo() {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-school-info')
                .then(res => {
                    this.states = res.data.states;
                    this.cities = res.data.cities;

                    let profile = res.data.userInfo;
                    this.record.name = profile.name;
                    this.record.registration_no = profile.registration_no;
                    this.record.roll_prefix = profile.roll_prefix;
                    this.record.phone = profile.phone;
                    this.record.email = profile.email;
                    this.record.est_year = profile.est_year ? profile.est_year : '';
                    this.record.address = profile.address;
                    this.record.student_id_instructions = profile.student_id_instructions;
                    this.record.teacher_id_instructions = profile.teacher_id_instructions;
                    this.record.staff_id_instructions = profile.staff_id_instructions;

                    this.record.state = profile.city ? profile.city.state : '';
                    this.record.city = profile.city_id;

                    console.log(profile);

                    let logo_src = profile.logo ? this.baseURL + 'img/profiles/' + profile.logo : this.baseURL + '/img/default.jpg';

                    let favicon_src = profile.favicon ? this.baseURL + 'img/profiles/' + profile.favicon : this.baseURL + '/img/default.jpg';

                    this.logo_src = logo_src;
                    this.favicon_src = favicon_src;


                    this.loaded = 1;
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
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('get-cities-by-state', params)
                .then(res => {
                    this.cities = res.data;
                });
        },
        updateData: function() {
            let formData = new FormData();
            formData.append('logo', this.logo); // Logo
            formData.append('favicon', this.favicon); // Favicon
            let params = JSON.stringify(this.record);
            formData.append('record', params); // Other Parameters

            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            });
            instance.post('general-settings', formData)
                .then(res => {
                    this.loaded = 1;
                    if (res.data.status) {
                        // location.reload();
                    } else {
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

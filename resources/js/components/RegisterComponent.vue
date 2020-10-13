<template>
<!-- Register Page Start Here -->
<div class="register-page-wrap">
    <div class="register-page-content">
        <div class="clearfix mb-5">
            <div class="float-left h-100" style="width: 40%">
                <div class="register-wizard-steps d-flex">
                    <ul>
                        <li class="active" data-tab="#login-information"><a href="#">Login Information</a></li>
                        <li data-tab="#personal-information"><a href="#">Personal Information</a></li>
                        <li data-tab="#plan-information"><a href="#">Select your plan</a></li>
                        <li data-tab="#create-url"><a href="#">Create your URL</a></li>
                    </ul>
                </div>
            </div>
            <div class="float-left h-100" style="width: 60%;">
                <div class="register-box">
                    <!-- <div class="item-logo">
                            <img src="img/logo2.png" alt="logo">
                        </div> -->
                    <div class="alert alert-danger" v-if="errors.length">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                        </ul>
                    </div>
                    <form class="login-form" id="register-form" @submit.prevent="registerUser()">
                        <div class="wizard-tab active" id="login-information">
                            <div class="form-group">
                                <input type="text" placeholder="Enter Mobile No." v-model="mobile" class="form-control" readonly>
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter Email ID" v-model="email" class="form-control" required>
                                <i class="far fa-envelope"></i>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Enter password" v-model="password" class="form-control" required>
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Re-enter password" v-model="confirm_password" class="form-control" required>
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="form-group mb-0">
                                <button type="button" class="login-btn wizard-next-btn" data-target="#personal-information">Proceed</button>
                            </div>
                        </div>
                        <div class="wizard-tab" id="personal-information">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="Enter First Name" v-model="fname" class="form-control" required>
                                        <i class="fas fa-user"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="Enter Last Name" v-model="lname" class="form-control">
                                        <i class="fas fa-user"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter School Name" v-model="school_name" class="form-control" required>
                                <i class="far fa-building"></i>
                            </div>
                            <div class="form-group">
                                <select class="form-control" v-model="est_year" required>
                                    <option value="">Select Est. Year</option>
                                    <option :value="y" v-for="y in years">{{ y }}</option>
                                </select>
                                <i class="far fa-calendar"></i>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <select class="form-control" v-model="state" v-on:change="getCities()" required>
                                            <option value="">Select State</option>
                                            <option :value="s.id" v-for="s in states">{{ s.name }}</option>
                                        </select>
                                        <i class="fas fa-globe"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <select class="form-control" v-model="city_id" required>
                                            <option value="">Select City</option>
                                            <option :value="c.id" v-for="c in cities">{{ c.name }}</option>
                                        </select>
                                        <i class="fas fa-map-marker"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group mb-0">
                                        <button type="button" class="login-btn wizard-next-btn" data-target="#login-information">Previous</button>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group mb-0">
                                        <button type="button" class="login-btn wizard-next-btn" data-target="#plan-information">Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wizard-tab" id="plan-information">
                            <div class="row">
                                <div class="col-6" v-for="p in plans">
                                    <label class="panel-select">
                                        <input type="radio" name="plan" v-model="plan_id" :value="p.id" class="d-none">
                                        <div class="label-name">{{ p.name }} ₹{{ p.cost }}</div>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <a :href="landingBase+'pricing.php'" target="_blank">Click Here</a> To view plan details.
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group mb-0">
                                        <button type="button" class="login-btn wizard-next-btn" data-target="#personal-information">Previous</button>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group mb-0">
                                        <button type="button" class="login-btn wizard-next-btn" data-target="#create-url">Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wizard-tab" id="create-url">
                            <div class="form-group">
                                <input type="text" placeholder="Web URL" v-model="weburl" class="form-control" required>
                            </div>
                            <div class="form-group" v-if="weburl">
                                {{ weburl }}.{{ suffixUrl }}
                            </div>
                            <div class="form-group" v-if="!weburl">
                                Please enter weburl to make your URL.
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group mb-0">
                                        <button type="button" class="login-btn wizard-next-btn" data-target="#plan-information">Previous</button>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group mb-0">
                                        <button type="submit" class="login-btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="sign-up">Already have an account ? <router-link :to="{ name: 'get-started' }">Login now!</router-link>
        </div>
    </div>
</div>
<!-- Register Page End Here -->
</template>

<script>
const userId = localStorage.getItem('userId');
const token = localStorage.getItem('token');

export default {
    data() {
        return {
            mobile: '',
            email: '',
            password: '',
            confirm_password: '',
            fname: '',
            lname: '',
            school_name: '',
            est_year: '',
            state: '',
            city_id: '',
            plan_id: '',
            weburl: '',
            errors: [],
            plans: [],
            states: [],
            cities: [],
            years: []
        };
    },
    mounted() {
        let params = this.$route.params,
            mobile_no = params.mobile_no;

        if (mobile_no == undefined || mobile_no == '') {
            this.$router.push('get-started');
        }

        this.mobile = mobile_no;

        let year = new Date().getFullYear(),
            limit = year - 500;

        while (year >= limit) {
            this.years.push(year);
            year--;
        }

        this.getStates();
        this.getPlans();
    },
    methods: {
        getPlans() {
            axios.get(this.baseURL + 'api/get-all-plans')
                .then(res => {
                    this.plans = res.data;
                    this.plan_id = res.data[0].id;
                });
        },
        getCities() {
            let state = this.state,
                params = {
                    id: state
                };
            axios.post(this.baseURL + 'api/get-cities-by-state', params)
                .then(res => {
                    this.cities = res.data;
                });
        },
        getStates() {
            axios.get(this.baseURL + 'api/get-all-states')
                .then(res => {
                    this.states = res.data;
                });
        },
        registerUser() {
            let form = $('#register-form');

            let is_valid = form.is_valid();

            if (is_valid) {
                let params = {
                    user: {
                        mobile: this.mobile,
                        email: this.email,
                        login: this.mobile,
                        password: this.password,
                        fname: this.fname,
                        lname: this.lname,
                        name: (this.fname + ' ' + this.lname).trim(),
                    },
                    school: {
                        name: this.school_name,
                        weburl: this.weburl,
                        est_year: this.est_year,
                        city_id: this.city_id,
                        plan_id: this.plan_id
                    }
                };
                axios.post(this.baseURL + 'api/school-register', params)
                    .then(res => {
                        if (res.data.status) {
                            swal('Success!!', 'You are registered successfully, you will be redirected to your portal.', 'success')
                                .then(() => {
                                    window.location = this.http + res.data.weburl + this.suffixUrl;
                                });
                        } else {
                            this.errors = res.data.errors;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
}
</script>

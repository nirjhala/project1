<template>
<!-- Login Page Start Here -->
<div class="login-page-wrap">
    <div class="login-page-content">
        <div class="login-box">
            <div class="item-logo">
                <img src="img/logo2.png" alt="logo">
            </div>
            <div class="alert alert-danger" v-if="errors.length">
                <ul class="mb-0">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>
            <form class="login-form" @submit.prevent="loginUser()">
                <div :class="alert_class">{{ login_msg }}</div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" v-model="user_login" class="form-control">
                    <i class="far fa-user"></i>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" v-model="password" class="form-control">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="form-group d-flex align-items-center justify-content-between">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="remember" value="1" id="remember-me">
                        <label for="remember-me" class="form-check-label">Remember Me</label>
                    </div>
                    <!-- <a href="#" class="forgot-btn">Forgot Password?</a> -->
                    <router-link :to="{ name: 'forgot-password', params: {} }" class="forgot-btn">Forgot Password?</router-link>
                </div>
                <div class="form-group">
                    <button type="submit" :class="loading == 0 ? 'login-btn' : 'login-btn disabled'" :disabled="loading == 1">Login</button>
                </div>
            </form>
        </div>
        <div class="sign-up">
            Don't have an account ?
            <a :href="registerUrl+'get-started'">Signup now!</a>
        </div>
    </div>
</div>
<!-- Login Page End Here -->
</template>
<script>
const token = localStorage.getItem('token');
export default {
    data() {
        return {
            user_login: '',
            password: '',
            login_msg: '',
            alert_class: '',
            errors: [],
            remember: 0,
            loading: 0,
        };
    },
    mounted() {
        let token = localStorage.getItem('token');
        if (token != undefined && token != null && token != '') {
            this.auth = true;
            this.$router.push({
                name: 'dashboard'
            });
        }
    },
    methods: {
        loginUser: function() {
            let form = this;
            let params = {
                user_login: form.user_login,
                password: form.password
            };
            this.alert_class = 'alert alert-info';
            this.login_msg = 'Authenticating, please wait...';
            axios.post(this.apiBaseUrl + 'user-login', params)
                .then(res => {
                    if (res.data.status) {
                        this.alert_class = 'alert alert-success';
                        this.login_msg = 'Login success! Redirecting, please wait...';
                        this.loading = 1;
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('user_info', JSON.stringify(res.data.data));

                        setTimeout(() => {
                            this.$emit('loginauth', res.data.data.id);
                            this.$router.push({
                                    name: 'dashboard'
                                })
                                .then(
                                    result => {
                                        this.loading = 0;
                                        console.log('Logged in successfully.');
                                    }
                                )
                                .catch(
                                    err => {
                                        this.loading = 0;
                                        console.log(err);
                                    }
                                );
                        }, 300);
                    } else {
                        if (res.data.errors)
                            this.errors = res.data.errors;
                        this.alert_class = 'alert alert-danger';
                        this.login_msg = res.data.message;
                    }
                })
                .catch(error => {
                    this.errors = res.data.errors;
                    this.alert_class = 'alert alert-danger';
                    this.login_msg = res.data.message;
                    console.log(error);
                });
        }
    }
}
</script>

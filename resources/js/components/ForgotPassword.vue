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
            <form class="login-form" @submit.prevent="ForgotPassword()">
                <div :class="alert_class">{{ login_msg }}</div>
                <div class="form-group">
                    <label>Username / Mobile No.</label>
                    <input type="text" placeholder="Enter Username / Mobile No." v-model="user_login" class="form-control" required>
                    <i class="far fa-user"></i>
                </div>
                <div class="form-group">
                    <button type="submit" :class="loading == 0 ? 'login-btn' : 'login-btn disabled'" :disabled="loading == 1">Send OTP</button>
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
        //
    },
    methods: {
        ForgotPassword() {
            let form = this;
            let params = {
                user_login: form.user_login,
                password: form.password
            };
            this.alert_class = 'alert alert-info';
            this.login_msg = 'Progressing, please wait...';
            axios.post(this.apiBaseUrl + 'forgot-password', params)
                .then(res => {
                    if (res.data.status) {

                        this.alert_class = 'alert alert-success';
                        this.login_msg = res.data.message;
                        this.loading = 1;

                        setTimeout(() => {
                            this.$router.push({
                                    name: 'otp',
                                    params: {
                                        'action': 'forgot-password',
                                        'mobile_no': res.data.mobile_no,
                                        'login': res.data.login,
                                        'otp_code': res.data.otp,
                                    }
                                })
                                .then(
                                    result => {
                                        this.loading = 0;
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
                        this.errors = res.data.errors;
                        this.alert_class = 'alert alert-success';
                        this.login_msg = 'Login failed! Credentials not matched.';
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

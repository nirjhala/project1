<template>
<!-- Get Started Page Start Here -->
<div class="login-page-wrap">
    <div class="login-page-content">
        <div class="login-box">
            <div class="alert alert-danger" v-if="errors.length">
                <ul class="mb-0">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>
            <form class="login-form" @submit.prevent="RecoverPassword()">
                <div :class="alert_class">{{ login_msg }}</div>
                <div class="form-group">
                    <label>Enter Password</label>
                    <input type="password" placeholder="New Password" minlenght="6" v-model="new_password" class="form-control" required>
                    <i class="fa fa-ellipsis-h"></i>
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" minlenght="6" v-model="confirm_password" class="form-control" required>
                    <i class="fa fa-ellipsis-h"></i>
                </div>
                <div class="form-group">
                    <button type="submit" class="login-btn">Update Password</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Get Started Page End Here -->
</template>

<script>
const userId = localStorage.getItem('userId');
const token = localStorage.getItem('token');

export default {
    data() {
        return {
            otp_code: '',
            errors: []
        };
    },
    mounted() {
        let params = this.$route.params,
            mobile_no = params.mobile_no;

        if (mobile_no == undefined || mobile_no == '') {
            this.$router.push({
                name: 'login'
            });
        }
    },
    methods: {
        RecoverPassword: function() {
            let params = this.$route.params,
                login = params.login,
                mobile_no = params.mobile_no,
                otp_code = params.otp_code;

            let ajax_params = {
                login: login,
                new_password: this.new_password,
                confirm_password: this.confirm_password,
            };
            console.log(ajax_params);
            this.alert_class = 'alert alert-info';
            this.login_msg = 'Progressing, please wait...';
            axios.post(this.apiBaseUrl + 'recover-password', ajax_params)
                .then(res => {
                    if (res.data.status) {

                        this.alert_class = 'alert alert-success';
                        this.login_msg = res.data.message;
                        this.loading = 1;

                        setTimeout(() => {
                            this.$router.push({
                                    name: 'login'
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
                        this.alert_class = 'alert alert-danger';
                        this.login_msg = 'Some error occurs.';
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

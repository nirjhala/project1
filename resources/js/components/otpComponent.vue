<template>
<!-- Get Started Page Start Here -->
<div class="login-page-wrap">
    <div class="login-page-content">
        <div class="login-box">
            <form class="login-form" @submit.prevent="verifyOTP()">
                <div class="form-group">
                    <label>Enter OTP</label>
                    <input type="tel" placeholder="Enter OTP" minlenght="6" maxlength="6" v-model="otp_code" class="form-control">
                    <i class="fa fa-ellipsis-h"></i>
                </div>
                <div class="form-group">
                    <button type="submit" class="login-btn">Verify</button>
                </div>
                <div class="text-center">
                    Didn't Recieved OTP? <a href="#" v-on:click="resendOtp()">Re-send OTP</a>
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
        let host = window.location.host;
        let parts = host.split('.');

        let params = this.$route.params,
            mobile_no = params.mobile_no,
            otp_code = params.otp_code;

        if (mobile_no == undefined || mobile_no == '') {
            if (parts[0] == "acc")
                this.$router.push('get-started');
            else
                this.$router.push('login');
        }

    },
    methods: {
        verifyOTP: function() {
            let params = this.$route.params,
                mobile_no = params.mobile_no,
                otp_code = params.otp_code;

            let ajax_params = {
                mobile: mobile_no
            };

            if (otp_code == this.otp_code) {
                if (params.action != undefined && params.action == "forgot-password") {
                    let login = params.login;

                    this.$router.push({
                        name: 'recover-password',
                        params: {
                            mobile_no: mobile_no,
                            login: login
                        }
                    });
                } else {
                    this.$router.push({
                        name: 'register',
                        params: {
                            mobile_no: mobile_no
                        }
                    });
                }
            } else {
                swal('OTP is not matched', 'Please try again.', 'warning');
            }
        },
        resendOtp() {
            let params = this.$route.params,
                mobile_no = params.mobile_no;

            axios.post('/school-management/api/resend-otp', {
                    mobile_no: mobile_no
                })
                .then(res => {
                    this.$router.push({
                        name: 'otp',
                        params: {
                            mobile_no: mobile_no,
                            otp_code: res.data.otp_code
                        },
                        query: {
                            resend: "yes",
                            time: Date.now()
                        }
                    });
                });
        }
    }
}
</script>

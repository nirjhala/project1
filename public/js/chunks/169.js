(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{443:function(t,e,o){"use strict";o.r(e);localStorage.getItem("userId"),localStorage.getItem("token");var s={data:function(){return{otp_code:"",errors:[]}},mounted:function(){var t=window.location.host.split("."),e=this.$route.params,o=e.mobile_no;e.otp_code;null!=o&&""!=o||("acc"==t[0]?this.$router.push("get-started"):this.$router.push("login"))},methods:{verifyOTP:function(){var t=this.$route.params,e=t.mobile_no;if(t.otp_code==this.otp_code)if(null!=t.action&&"forgot-password"==t.action){var o=t.login;this.$router.push({name:"recover-password",params:{mobile_no:e,login:o}})}else this.$router.push({name:"register",params:{mobile_no:e}});else swal("OTP is not matched","Please try again.","warning")},resendOtp:function(){var t=this,e=this.$route.params.mobile_no;axios.post("/school-management/api/resend-otp",{mobile_no:e}).then((function(o){t.$router.push({name:"otp",params:{mobile_no:e,otp_code:o.data.otp_code},query:{resend:"yes",time:Date.now()}})}))}}},n=o(0),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-page-wrap"},[o("div",{staticClass:"login-page-content"},[o("div",{staticClass:"login-box"},[o("form",{staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),t.verifyOTP()}}},[o("div",{staticClass:"form-group"},[o("label",[t._v("Enter OTP")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.otp_code,expression:"otp_code"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"Enter OTP",minlenght:"6",maxlength:"6"},domProps:{value:t.otp_code},on:{input:function(e){e.target.composing||(t.otp_code=e.target.value)}}}),t._v(" "),o("i",{staticClass:"fa fa-ellipsis-h"})]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"text-center"},[t._v("\n                    Didn't Recieved OTP? "),o("a",{attrs:{href:"#"},on:{click:function(e){return t.resendOtp()}}},[t._v("Re-send OTP")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"login-btn",attrs:{type:"submit"}},[this._v("Verify")])])}],!1,null,null,null);e.default=a.exports}}]);
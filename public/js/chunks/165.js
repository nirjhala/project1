(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{444:function(s,t,o){"use strict";o.r(t);localStorage.getItem("userId"),localStorage.getItem("token");var e={data:function(){return{otp_code:"",errors:[]}},mounted:function(){var s=this.$route.params.mobile_no;null!=s&&""!=s||this.$router.push({name:"login"})},methods:{RecoverPassword:function(){var s=this,t=this.$route.params,o=t.login,e=(t.mobile_no,t.otp_code,{login:o,new_password:this.new_password,confirm_password:this.confirm_password});console.log(e),this.alert_class="alert alert-info",this.login_msg="Progressing, please wait...",axios.post(this.apiBaseUrl+"recover-password",e).then((function(t){t.data.status?(s.alert_class="alert alert-success",s.login_msg=t.data.message,s.loading=1,setTimeout((function(){s.$router.push({name:"login"}).then((function(t){s.loading=0})).catch((function(t){s.loading=0,console.log(t)}))}),300)):(s.errors=t.data.errors,s.alert_class="alert alert-danger",s.login_msg="Some error occurs.")})).catch((function(s){console.log(s)}))}}},a=o(0),r=Object(a.a)(e,(function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{staticClass:"login-page-wrap"},[o("div",{staticClass:"login-page-content"},[o("div",{staticClass:"login-box"},[s.errors.length?o("div",{staticClass:"alert alert-danger"},[o("ul",{staticClass:"mb-0"},s._l(s.errors,(function(t,e){return o("li",{key:e},[s._v(s._s(t))])})),0)]):s._e(),s._v(" "),o("form",{staticClass:"login-form",on:{submit:function(t){return t.preventDefault(),s.RecoverPassword()}}},[o("div",{class:s.alert_class},[s._v(s._s(s.login_msg))]),s._v(" "),o("div",{staticClass:"form-group"},[o("label",[s._v("Enter Password")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.new_password,expression:"new_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"New Password",minlenght:"6",required:""},domProps:{value:s.new_password},on:{input:function(t){t.target.composing||(s.new_password=t.target.value)}}}),s._v(" "),o("i",{staticClass:"fa fa-ellipsis-h"})]),s._v(" "),o("div",{staticClass:"form-group"},[o("label",[s._v("Confirm Password")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.confirm_password,expression:"confirm_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password",minlenght:"6",required:""},domProps:{value:s.confirm_password},on:{input:function(t){t.target.composing||(s.confirm_password=t.target.value)}}}),s._v(" "),o("i",{staticClass:"fa fa-ellipsis-h"})]),s._v(" "),s._m(0)])])])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"login-btn",attrs:{type:"submit"}},[this._v("Update Password")])])}],!1,null,null,null);t.default=r.exports}}]);
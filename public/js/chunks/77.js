(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otpComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otpComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var userId = localStorage.getItem('userId');
var token = localStorage.getItem('token');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      otp_code: '',
      errors: []
    };
  },
  mounted: function mounted() {
    var host = window.location.host;
    var parts = host.split('.');
    var params = this.$route.params,
        mobile_no = params.mobile_no,
        otp_code = params.otp_code;

    if (mobile_no == undefined || mobile_no == '') {
      if (parts[0] == "acc") this.$router.push('get-started');else this.$router.push('login');
    }
  },
  methods: {
    verifyOTP: function verifyOTP() {
      var params = this.$route.params,
          mobile_no = params.mobile_no,
          otp_code = params.otp_code;
      var ajax_params = {
        mobile: mobile_no
      };

      if (otp_code == this.otp_code) {
        if (params.action != undefined && params.action == "forgot-password") {
          var login = params.login;
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
    resendOtp: function resendOtp() {
      var _this = this;

      var params = this.$route.params,
          mobile_no = params.mobile_no;
      axios.post('/school-management/api/resend-otp', {
        mobile_no: mobile_no
      }).then(function (res) {
        _this.$router.push({
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
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otpComponent.vue?vue&type=template&id=eddf7646&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otpComponent.vue?vue&type=template&id=eddf7646& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-page-wrap" }, [
    _c("div", { staticClass: "login-page-content" }, [
      _c("div", { staticClass: "login-box" }, [
        _c(
          "form",
          {
            staticClass: "login-form",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.verifyOTP()
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Enter OTP")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.otp_code,
                    expression: "otp_code"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "tel",
                  placeholder: "Enter OTP",
                  minlenght: "6",
                  maxlength: "6"
                },
                domProps: { value: _vm.otp_code },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.otp_code = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-ellipsis-h" })
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "text-center" }, [
              _vm._v("\n                    Didn't Recieved OTP? "),
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      return _vm.resendOtp()
                    }
                  }
                },
                [_vm._v("Re-send OTP")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("button", { staticClass: "login-btn", attrs: { type: "submit" } }, [
        _vm._v("Verify")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/otpComponent.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/otpComponent.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _otpComponent_vue_vue_type_template_id_eddf7646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otpComponent.vue?vue&type=template&id=eddf7646& */ "./resources/js/components/otpComponent.vue?vue&type=template&id=eddf7646&");
/* harmony import */ var _otpComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otpComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otpComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _otpComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _otpComponent_vue_vue_type_template_id_eddf7646___WEBPACK_IMPORTED_MODULE_0__["render"],
  _otpComponent_vue_vue_type_template_id_eddf7646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otpComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otpComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/otpComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_otpComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./otpComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otpComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_otpComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otpComponent.vue?vue&type=template&id=eddf7646&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/otpComponent.vue?vue&type=template&id=eddf7646& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_otpComponent_vue_vue_type_template_id_eddf7646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./otpComponent.vue?vue&type=template&id=eddf7646& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otpComponent.vue?vue&type=template&id=eddf7646&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_otpComponent_vue_vue_type_template_id_eddf7646___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_otpComponent_vue_vue_type_template_id_eddf7646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForgotPassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
var token = localStorage.getItem('token');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user_login: '',
      password: '',
      login_msg: '',
      alert_class: '',
      errors: [],
      remember: 0,
      loading: 0
    };
  },
  mounted: function mounted() {//
  },
  methods: {
    ForgotPassword: function ForgotPassword() {
      var _this = this;

      var form = this;
      var params = {
        user_login: form.user_login,
        password: form.password
      };
      this.alert_class = 'alert alert-info';
      this.login_msg = 'Progressing, please wait...';
      axios.post(this.apiBaseUrl + 'forgot-password', params).then(function (res) {
        if (res.data.status) {
          _this.alert_class = 'alert alert-success';
          _this.login_msg = res.data.message;
          _this.loading = 1;
          setTimeout(function () {
            _this.$router.push({
              name: 'otp',
              params: {
                'action': 'forgot-password',
                'mobile_no': res.data.mobile_no,
                'login': res.data.login,
                'otp_code': res.data.otp
              }
            }).then(function (result) {
              _this.loading = 0;
            })["catch"](function (err) {
              _this.loading = 0;
              console.log(err);
            });
          }, 300);
        } else {
          _this.errors = res.data.errors;
          _this.alert_class = 'alert alert-success';
          _this.login_msg = 'Login failed! Credentials not matched.';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForgotPassword.vue?vue&type=template&id=3ac5fb09&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ForgotPassword.vue?vue&type=template&id=3ac5fb09& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _vm.errors.length
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _c(
                "ul",
                { staticClass: "mb-0" },
                _vm._l(_vm.errors, function(error, index) {
                  return _c("li", { key: index }, [_vm._v(_vm._s(error))])
                }),
                0
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "login-form",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.ForgotPassword()
              }
            }
          },
          [
            _c("div", { class: _vm.alert_class }, [
              _vm._v(_vm._s(_vm.login_msg))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Username / Mobile No.")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user_login,
                    expression: "user_login"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  placeholder: "Enter Username / Mobile No.",
                  required: ""
                },
                domProps: { value: _vm.user_login },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.user_login = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("i", { staticClass: "far fa-user" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  class: _vm.loading == 0 ? "login-btn" : "login-btn disabled",
                  attrs: { type: "submit", disabled: _vm.loading == 1 }
                },
                [_vm._v("Send OTP")]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sign-up" }, [
        _vm._v("\n            Don't have an account ?\n            "),
        _c("a", { attrs: { href: _vm.registerUrl + "get-started" } }, [
          _vm._v("Signup now!")
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item-logo" }, [
      _c("img", { attrs: { src: "img/logo2.png", alt: "logo" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ForgotPassword.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ForgotPassword.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_3ac5fb09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=3ac5fb09& */ "./resources/js/components/ForgotPassword.vue?vue&type=template&id=3ac5fb09&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_3ac5fb09___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_3ac5fb09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ForgotPassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ForgotPassword.vue?vue&type=template&id=3ac5fb09&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ForgotPassword.vue?vue&type=template&id=3ac5fb09& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_3ac5fb09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=3ac5fb09& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForgotPassword.vue?vue&type=template&id=3ac5fb09&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_3ac5fb09___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_3ac5fb09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
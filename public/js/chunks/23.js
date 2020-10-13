(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RecoverPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RecoverPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
    var params = this.$route.params,
        mobile_no = params.mobile_no;

    if (mobile_no == undefined || mobile_no == '') {
      this.$router.push({
        name: 'login'
      });
    }
  },
  methods: {
    RecoverPassword: function RecoverPassword() {
      var _this = this;

      var params = this.$route.params,
          login = params.login,
          mobile_no = params.mobile_no,
          otp_code = params.otp_code;
      var ajax_params = {
        login: login,
        new_password: this.new_password,
        confirm_password: this.confirm_password
      };
      console.log(ajax_params);
      this.alert_class = 'alert alert-info';
      this.login_msg = 'Progressing, please wait...';
      axios.post(this.apiBaseUrl + 'recover-password', ajax_params).then(function (res) {
        if (res.data.status) {
          _this.alert_class = 'alert alert-success';
          _this.login_msg = res.data.message;
          _this.loading = 1;
          setTimeout(function () {
            _this.$router.push({
              name: 'login'
            }).then(function (result) {
              _this.loading = 0;
            })["catch"](function (err) {
              _this.loading = 0;
              console.log(err);
            });
          }, 300);
        } else {
          _this.errors = res.data.errors;
          _this.alert_class = 'alert alert-danger';
          _this.login_msg = 'Some error occurs.';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RecoverPassword.vue?vue&type=template&id=8732e5f8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RecoverPassword.vue?vue&type=template&id=8732e5f8& ***!
  \******************************************************************************************************************************************************************************************************************/
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
                return _vm.RecoverPassword()
              }
            }
          },
          [
            _c("div", { class: _vm.alert_class }, [
              _vm._v(_vm._s(_vm.login_msg))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Enter Password")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.new_password,
                    expression: "new_password"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "password",
                  placeholder: "New Password",
                  minlenght: "6",
                  required: ""
                },
                domProps: { value: _vm.new_password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.new_password = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-ellipsis-h" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Confirm Password")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.confirm_password,
                    expression: "confirm_password"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "password",
                  placeholder: "Confirm Password",
                  minlenght: "6",
                  required: ""
                },
                domProps: { value: _vm.confirm_password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.confirm_password = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-ellipsis-h" })
            ]),
            _vm._v(" "),
            _vm._m(0)
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
        _vm._v("Update Password")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/RecoverPassword.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/RecoverPassword.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecoverPassword_vue_vue_type_template_id_8732e5f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecoverPassword.vue?vue&type=template&id=8732e5f8& */ "./resources/js/components/RecoverPassword.vue?vue&type=template&id=8732e5f8&");
/* harmony import */ var _RecoverPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecoverPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/RecoverPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecoverPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecoverPassword_vue_vue_type_template_id_8732e5f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecoverPassword_vue_vue_type_template_id_8732e5f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RecoverPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RecoverPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/RecoverPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoverPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RecoverPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RecoverPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoverPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RecoverPassword.vue?vue&type=template&id=8732e5f8&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/RecoverPassword.vue?vue&type=template&id=8732e5f8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoverPassword_vue_vue_type_template_id_8732e5f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RecoverPassword.vue?vue&type=template&id=8732e5f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RecoverPassword.vue?vue&type=template&id=8732e5f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoverPassword_vue_vue_type_template_id_8732e5f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoverPassword_vue_vue_type_template_id_8732e5f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
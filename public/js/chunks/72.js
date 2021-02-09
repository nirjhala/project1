(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetStarted.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GetStarted.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mobile: '',
      errors: []
    };
  },
  methods: {
    getStarted: function getStarted() {
      var _this = this;

      var mobile_no = this.mobile;
      var params = {
        mobile: this.mobile
      };
      var parent = $('.get-started-form');
      var is_valid = parent.is_valid();

      if (is_valid) {
        axios.post('/school-management/api/get-started', params).then(function (res) {
          if (res.data.status) {
            if (res.data.is_exists) {
              window.location = "http://" + res.data.weburl + ".localhost/school-management/login";
            } else {
              var route_param = {
                name: res.data.route,
                params: {
                  mobile_no: mobile_no,
                  otp_code: res.data.otp_code
                }
              };

              _this.$router.push(route_param);
            }
          } else {
            _this.errors = res.data.errors;
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetStarted.vue?vue&type=template&id=14050b76&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GetStarted.vue?vue&type=template&id=14050b76& ***!
  \*************************************************************************************************************************************************************************************************************/
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
            staticClass: "login-form get-started-form",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.getStarted()
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Mobile No.")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.mobile,
                    expression: "mobile"
                  }
                ],
                staticClass: "form-control mobile",
                attrs: {
                  type: "tel",
                  placeholder: "Enter Mobile No.",
                  required: ""
                },
                domProps: { value: _vm.mobile },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.mobile = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-mobile-alt" })
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
        _vm._v("Get Started")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/GetStarted.vue":
/*!************************************************!*\
  !*** ./resources/js/components/GetStarted.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetStarted_vue_vue_type_template_id_14050b76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetStarted.vue?vue&type=template&id=14050b76& */ "./resources/js/components/GetStarted.vue?vue&type=template&id=14050b76&");
/* harmony import */ var _GetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetStarted.vue?vue&type=script&lang=js& */ "./resources/js/components/GetStarted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GetStarted_vue_vue_type_template_id_14050b76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GetStarted_vue_vue_type_template_id_14050b76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GetStarted.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GetStarted.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/GetStarted.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GetStarted.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetStarted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GetStarted.vue?vue&type=template&id=14050b76&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/GetStarted.vue?vue&type=template&id=14050b76& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_template_id_14050b76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GetStarted.vue?vue&type=template&id=14050b76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetStarted.vue?vue&type=template&id=14050b76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_template_id_14050b76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_template_id_14050b76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
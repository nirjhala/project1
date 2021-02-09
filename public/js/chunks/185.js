(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[185],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/template/contact.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/template/contact.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['page'],
  data: function data() {
    return {
      items: [{
        text: 'Home',
        to: {
          name: 'Homepage'
        }
      }, {
        text: '',
        active: true
      }],
      form: {
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  mounted: function mounted() {
    this.items[1].text = this.page.title;
  },
  methods: {
    submitForm: function submitForm() {
      console.log('hello');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/template/contact.vue?vue&type=template&id=dd0f2996&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/template/contact.vue?vue&type=template&id=dd0f2996& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "inner-page" }, [
    _c(
      "section",
      { attrs: { id: "page-header" } },
      [
        _c(
          "b-container",
          [
            _c("h1", [_vm._v(_vm._s(_vm.page.title))]),
            _vm._v(" "),
            _c("b-breadcrumb", { attrs: { items: _vm.items } })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "py-5", attrs: { id: "page-content" } },
      [
        _c(
          "b-container",
          { staticClass: "text-justify" },
          [
            _c(
              "b-row",
              [
                _c(
                  "b-col",
                  { attrs: { sm: "6" } },
                  [
                    _c(
                      "b-form-group",
                      { attrs: { label: "Full Name" } },
                      [
                        _c("b-form-input", {
                          attrs: {
                            placeholder: "Enter Full Name",
                            required: ""
                          },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      { attrs: { label: "Mobile No." } },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "tel",
                            placeholder: "Enter Mobile No.",
                            required: ""
                          },
                          model: {
                            value: _vm.form.mobile,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "mobile", $$v)
                            },
                            expression: "form.mobile"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      { attrs: { label: "Email Address" } },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "email",
                            placeholder: "Enter Email Address"
                          },
                          model: {
                            value: _vm.form.email,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "email", $$v)
                            },
                            expression: "form.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      { attrs: { label: "Subject" } },
                      [
                        _c("b-form-input", {
                          attrs: { placeholder: "Enter Subject", required: "" },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { sm: "6" } },
                  [
                    _c(
                      "b-form-group",
                      { attrs: { label: "Message" } },
                      [
                        _c("b-form-textarea", {
                          staticStyle: { height: "293px" },
                          attrs: { placeholder: "Enter Message" },
                          model: {
                            value: _vm.form.message,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "message", $$v)
                            },
                            expression: "form.message"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-right" },
              [
                _c("b-button", { attrs: { variant: "primary" } }, [
                  _vm._v("Send "),
                  _c("i", { staticClass: "icon-long-arrow-right" })
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("iframe", {
      staticClass: "w-100",
      staticStyle: { border: "0" },
      attrs: {
        src:
          "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57252.5276478356!2d72.96196061056163!3d26.25247780445193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1603799512259!5m2!1sen!2sin",
        height: "450",
        frameborder: "0",
        allowfullscreen: "",
        "aria-hidden": "false",
        tabindex: "0"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/template/contact.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/pages/template/contact.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_vue_vue_type_template_id_dd0f2996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.vue?vue&type=template&id=dd0f2996& */ "./resources/js/views/pages/template/contact.vue?vue&type=template&id=dd0f2996&");
/* harmony import */ var _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/template/contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contact_vue_vue_type_template_id_dd0f2996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contact_vue_vue_type_template_id_dd0f2996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/template/contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/template/contact.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/pages/template/contact.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/template/contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/template/contact.vue?vue&type=template&id=dd0f2996&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/template/contact.vue?vue&type=template&id=dd0f2996& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_dd0f2996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=template&id=dd0f2996& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/template/contact.vue?vue&type=template&id=dd0f2996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_dd0f2996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_dd0f2996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
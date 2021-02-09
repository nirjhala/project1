(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/script */ "./resources/js/api/script.js");
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
  data: function data() {
    return {
      pay_grade: {
        name: ''
      },
      success: null,
      errors: [],
      loaded: 0
    };
  },
  validations: function validations() {
    return {
      pay_grade: {
        name: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        }
      }
    };
  },
  mounted: function mounted() {
    this.routeLoading();
  },
  methods: {
    routeLoading: function routeLoading() {
      if (this.$route.params.id) {
        this.getInfo();
      } else {
        this.loaded = 1;
      }
    },
    getInfo: function getInfo() {
      var _this = this;

      this.loaded = 0;
      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["show_pay_grade"])(this.$route.params.id).then(function (res) {
        _this.pay_grade = res.data;
        _this.loaded = 1;
      });
    },
    saveData: function saveData() {
      var _this2 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        this.loaded = 0;
        var params = {
          pay_grade: this.pay_grade
        };

        if (!this.$route.params.id) {
          Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["add_pay_grade"])(params).then(function (res) {
            _this2.loaded = 1;

            _this2.$router.push({
              name: 'PayGrade'
            });
          })["catch"](function (error) {
            _this2.loaded = 1;
            console.log(error);
          });
        } else {
          Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["edit_pay_grade"])(this.$route.params.id, params).then(function (res) {
            _this2.loaded = 1;

            _this2.$router.push({
              name: 'PayGrade'
            });
          })["catch"](function (error) {
            _this2.loaded = 1;
            console.log(error);
          });
        }
      }
    }
  },
  watch: {
    "$route.params.id": function $routeParamsId() {
      this.routeLoading();
    },
    "$route.params.type": function $routeParamsType(type) {
      this.type = type;
    },
    student: function student(_student) {
      this.form.name = _student.user.name;
      this.form["class"] = _student.section_name.cls.name;
      this.form.father_name = _student.father_info.name;
      this.form.mother_name = _student.mother_info.name;
      this.form.gender = _student.user.gender;
      this.form.admission_no = _student.reg_no;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nlabel[data-v-1bc4c76d] {\n    text-transform: capitalize;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=template&id=1bc4c76d&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=template&id=1bc4c76d&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "dashboard-content-one" },
    [
      _c("div", { staticClass: "breadcrumbs-area" }, [
        _c(
          "div",
          { staticClass: "float-right" },
          [
            _c(
              "router-link",
              {
                staticClass: "fw-btn-fill btn-gradient-yellow text-white",
                attrs: {
                  to: {
                    name: "PayGrade"
                  }
                }
              },
              [_vm._v("View Pay Grade")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [
          _vm._v(_vm._s(!_vm.$route.params.id ? "Add" : "Edit") + " Pay Grade")
        ]),
        _vm._v(" "),
        _c("ul", [
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: { name: "dashboard" } } }, [
                _vm._v("Dashboard")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: { name: "PayrollMaster" } } }, [
                _vm._v("Payroll Management Master")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: { name: "PayGrade" } } }, [
                _vm._v("Pay Grade")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              _vm._s(!_vm.$route.params.id ? "Add" : "Edit") + " Pay Grade"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-card",
        {
          staticClass: "h-auto",
          attrs: {
            title: !_vm.$route.params.id ? "Create Pay Grade" : "Edit Pay Grade"
          }
        },
        [
          _c(
            "b-form",
            {
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.saveData($event)
                }
              }
            },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Grade Pay Name *" } },
                [
                  _c("b-input", {
                    attrs: { placeholder: "Enter Grade Pay Name" },
                    model: {
                      value: _vm.$v.pay_grade.name.$model,
                      callback: function($$v) {
                        _vm.$set(_vm.$v.pay_grade.name, "$model", $$v)
                      },
                      expression: "$v.pay_grade.name.$model"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v("Please enter required field.")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                  attrs: { type: "submit" }
                },
                [_vm._v(_vm._s(_vm.$route.params.id ? "Update" : "Save"))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn-fill-lg bg-blue-dark btn-hover-yellow",
                  attrs: { type: "reset" }
                },
                [_vm._v("Reset")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddPayGrade.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddPayGrade.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPayGrade_vue_vue_type_template_id_1bc4c76d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPayGrade.vue?vue&type=template&id=1bc4c76d&scoped=true& */ "./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=template&id=1bc4c76d&scoped=true&");
/* harmony import */ var _AddPayGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPayGrade.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddPayGrade_vue_vue_type_style_index_0_id_1bc4c76d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css& */ "./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddPayGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPayGrade_vue_vue_type_template_id_1bc4c76d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddPayGrade_vue_vue_type_template_id_1bc4c76d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1bc4c76d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/payroll/AddPayGrade.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPayGrade.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_style_index_0_id_1bc4c76d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=style&index=0&id=1bc4c76d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_style_index_0_id_1bc4c76d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_style_index_0_id_1bc4c76d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_style_index_0_id_1bc4c76d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_style_index_0_id_1bc4c76d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_style_index_0_id_1bc4c76d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=template&id=1bc4c76d&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=template&id=1bc4c76d&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_template_id_1bc4c76d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPayGrade.vue?vue&type=template&id=1bc4c76d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddPayGrade.vue?vue&type=template&id=1bc4c76d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_template_id_1bc4c76d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayGrade_vue_vue_type_template_id_1bc4c76d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
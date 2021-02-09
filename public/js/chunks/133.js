(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/master.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/master.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      folders: [{
        header: 'PAY GRADE',
        link: 'PayGrade',
        variant: 'primary',
        icon: 'icon-equalizer1'
      }, {
        header: 'PROMOTION / INCREAMENT',
        link: 'PayrollPromotion',
        variant: 'danger',
        icon: 'icon-level-up'
      }, {
        header: 'ALLOWANCE',
        link: 'PayrollAllowance',
        variant: 'success',
        icon: 'icon-plus-square1'
      }, {
        header: 'DEDUCTION',
        link: 'PayrollDeduction',
        variant: 'info',
        icon: 'icon-minus-square1'
      }, {
        header: 'SALARY SLIP',
        link: 'PayrollSalarySlip',
        variant: 'primary',
        icon: 'icon-print'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/master.vue?vue&type=template&id=28fdb096&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/master.vue?vue&type=template&id=28fdb096& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c(
        "b-row",
        _vm._l(_vm.folders, function(row, i) {
          return _c(
            "b-col",
            { key: i, attrs: { sm: "3" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "master-card",
                  attrs: {
                    "border-variant": row.variant,
                    "header-bg-variant": row.variant,
                    header: row.header,
                    "header-text-variant": "white",
                    align: "center"
                  }
                },
                [
                  _c("div", {
                    staticClass: "master-icon mt-3",
                    class: row.icon
                  }),
                  _vm._v(" "),
                  _c("router-link", {
                    attrs: {
                      to: { name: row.link, params: { type: row.type } }
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "breadcrumbs-area" }, [
      _c("h3", [_vm._v("Payroll Management Master")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/payroll/master.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/master.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _master_vue_vue_type_template_id_28fdb096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master.vue?vue&type=template&id=28fdb096& */ "./resources/js/components/school-panel/payroll/master.vue?vue&type=template&id=28fdb096&");
/* harmony import */ var _master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/payroll/master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _master_vue_vue_type_template_id_28fdb096___WEBPACK_IMPORTED_MODULE_0__["render"],
  _master_vue_vue_type_template_id_28fdb096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/payroll/master.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/master.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/master.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./master.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/master.vue?vue&type=template&id=28fdb096&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/master.vue?vue&type=template&id=28fdb096& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_template_id_28fdb096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./master.vue?vue&type=template&id=28fdb096& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/master.vue?vue&type=template&id=28fdb096&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_template_id_28fdb096___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_template_id_28fdb096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
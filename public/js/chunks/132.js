(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[132],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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


var d = new Date();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      currentYear: d.getFullYear(),
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      month: d.getMonth() > 0 ? d.getMonth() - 1 : 11,
      year: d.getMonth() > 0 ? d.getFullYear() : d.getFullYear() - 1,
      s: '',
      loaded: 1
    };
  },
  mounted: function mounted() {
    this.getRecords();
  },
  methods: {
    searchAfterDebounce: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function () {
      this.getRecords();
    }, 500),
    checkAll: function checkAll() {
      var self = this;
      self.check = [];

      if (!self.allSelected) {
        $.each(self.lists.data, function (i, row) {
          self.check.push(row.id);
        });
      }
    },
    getRecords: function getRecords(page) {
      var _this = this;

      if (typeof page === 'undefined') {
        page = 1;
      }

      this.loaded = 0;
      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_salary_slip"])("month=".concat(this.month, "&year=").concat(this.year)).then(function (res) {
        _this.lists = res.data;
        _this.loaded = 1;
      });
    },
    resetSearch: function resetSearch() {
      this.search = {
        s: ''
      };
      this.getRecords();
    },
    deleteRecord: function deleteRecord(id) {
      var self = this;
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this record!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        delete_allowance(id).then(function (res) {
          self.$toast.success(res.data.message);
          self.getRecords();
        });
      });
    }
  },
  watch: {
    "s": function s() {
      this.searchAfterDebounce();
    },
    month: function month() {
      this.getRecords();
    },
    year: function year() {
      this.getRecords();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=template&id=d8e0fbc6&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=template&id=d8e0fbc6& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "dashboard-content-one",
      staticStyle: { "text-transform": "capitialize" }
    },
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
                    name: "AddPayrollSalarySlip"
                  }
                }
              },
              [_vm._v("Add New")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [_vm._v("Salary Slip")]),
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
          _c("li", [_vm._v("Salary Slip")])
        ])
      ]),
      _vm._v(" "),
      _c("form", { attrs: { method: "post" } }, [
        _c("div", { staticClass: "card height-auto" }, [
          _c("div", { staticClass: "card-body" }, [
            !_vm.loaded
              ? _c("div", { staticClass: "text-center" }, [
                  _c("img", {
                    staticStyle: { "max-width": "100%" },
                    attrs: { src: _vm.baseURL + "img/preloader.gif", alt: "" }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.loaded
              ? _c("div", [
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.month,
                            expression: "month"
                          }
                        ],
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.month = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      _vm._l(_vm.months, function(name, num) {
                        return _c(
                          "option",
                          { key: num, domProps: { value: num } },
                          [_vm._v(_vm._s(name))]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.year,
                            expression: "year"
                          }
                        ],
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.year = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { domProps: { value: _vm.currentYear } }, [
                          _vm._v(_vm._s(_vm.currentYear))
                        ]),
                        _vm._v(" "),
                        _c(
                          "option",
                          { domProps: { value: _vm.currentYear - 1 } },
                          [_vm._v(_vm._s(_vm.currentYear - 1))]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { domProps: { value: _vm.currentYear - 2 } },
                          [_vm._v(_vm._s(_vm.currentYear - 2))]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { domProps: { value: _vm.currentYear - 3 } },
                          [_vm._v(_vm._s(_vm.currentYear - 3))]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.lists
                    ? _c(
                        "div",
                        [
                          _c("div", { staticClass: "table-responsive" }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-bordered display data-table text-nowrap"
                              },
                              [
                                _vm._m(0),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.lists.data, function(list, j) {
                                    return _c("tr", { key: j }, [
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(_vm.lists.from + j) +
                                            ".\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(list.slip_no))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(list.name))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(list.employee_no))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(list.designation))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(list.grade))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(list.basic_salary))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              href:
                                                _vm.baseURL +
                                                "api/salaryslip/" +
                                                list.id,
                                              target: "_blank"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "icon-print"
                                            }),
                                            _vm._v(
                                              " Print / Download Payslip\n                                            "
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("pagination", {
                            attrs: { data: _vm.lists, limit: 2 },
                            on: { "pagination-change-page": _vm.getRecords }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              : _vm._e()
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [
          _vm._v(
            "\n                                            Sr. No.\n                                        "
          )
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Slip No.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Employee No.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Designation")]),
        _vm._v(" "),
        _c("th", [_vm._v("Grade")]),
        _vm._v(" "),
        _c("th", [_vm._v("Basic Salary")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/payroll/SalarySlip.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/SalarySlip.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalarySlip_vue_vue_type_template_id_d8e0fbc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalarySlip.vue?vue&type=template&id=d8e0fbc6& */ "./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=template&id=d8e0fbc6&");
/* harmony import */ var _SalarySlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalarySlip.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SalarySlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalarySlip_vue_vue_type_template_id_d8e0fbc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalarySlip_vue_vue_type_template_id_d8e0fbc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/payroll/SalarySlip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalarySlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalarySlip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalarySlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=template&id=d8e0fbc6&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=template&id=d8e0fbc6& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalarySlip_vue_vue_type_template_id_d8e0fbc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalarySlip.vue?vue&type=template&id=d8e0fbc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/SalarySlip.vue?vue&type=template&id=d8e0fbc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalarySlip_vue_vue_type_template_id_d8e0fbc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalarySlip_vue_vue_type_template_id_d8e0fbc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
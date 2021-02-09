(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api/script */ "./resources/js/api/script.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      s: '',
      limit: 100,
      checkAll: false,
      customers: {},
      suppliers: {},
      user: '',
      report: {
        check: [],
        fields: [{
          key: 'index',
          label: 'Sr. No.'
        }, {
          key: 'remarks'
        }, {
          key: 'credit'
        }, {
          key: 'debit'
        }, {
          key: 'balance'
        }, {
          key: 'date'
        }]
      },
      reports: {}
    };
  },
  mounted: function mounted() {
    this.fetchCustomers();
    this.fetchSuppliers();
  },
  methods: {
    searchAfterDebounce: _.debounce(function () {
      this.fetchReports();
    }, 500),
    fetchCustomers: function fetchCustomers() {
      var _this = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["view_users"])('type=all').then(function (res) {
        _this.customers = res.data;
      });
    },
    fetchSuppliers: function fetchSuppliers() {
      var _this2 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["view_supplier"])('type=all').then(function (res) {
        _this2.suppliers = res.data;
      });
    },
    fetchReports: function fetchReports() {
      var _this3 = this;

      this.reports = {};
      Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["ledger"])(this.user).then(function (res) {
        _this3.reports = res.data;
      });
    }
  },
  watch: {
    s: function s() {
      this.searchAfterDebounce();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=template&id=3b9374d5&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=template&id=3b9374d5& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v("Ledger")]),
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
              _c(
                "router-link",
                { attrs: { to: { name: "InventoryMaster" } } },
                [_vm._v("Inventory Master")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [_vm._v("Ledger")])
        ])
      ]),
      _vm._v(" "),
      _c("b-form-group", { attrs: { label: "Select Customer / Supplier" } }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user,
                expression: "user"
              }
            ],
            staticClass: "form-control",
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.user = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                _vm.fetchReports
              ]
            }
          },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("Select User")]),
            _vm._v(" "),
            _c(
              "optgroup",
              { attrs: { label: "Supplier" } },
              _vm._l(_vm.suppliers, function(name, id) {
                return _c(
                  "option",
                  { key: id, domProps: { value: "supplier-" + id } },
                  [_vm._v(_vm._s(name))]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "optgroup",
              { attrs: { label: "Customer" } },
              _vm._l(_vm.customers, function(name, id) {
                return _c(
                  "option",
                  { key: id, domProps: { value: "customer-" + id } },
                  [_vm._v(_vm._s(name))]
                )
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm.user
        ? _c(
            "div",
            [
              !_vm.reports.data
                ? _c(
                    "b-card",
                    { staticClass: "text-center h-auto" },
                    [
                      _c("b-spinner", {
                        staticStyle: { width: "48px", height: "48px" },
                        attrs: { label: "Spinning" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.reports.data
                ? _c(
                    "div",
                    [
                      !_vm.reports.data.length
                        ? _c("b-card", { staticClass: "h-auto" }, [
                            _vm._v(
                              "\n                No record(s) found.\n            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.reports.data.length
                        ? _c(
                            "b-card",
                            { staticClass: "h-auto" },
                            [
                              _c(
                                "div",
                                { staticClass: "table-responsive" },
                                [
                                  _c("b-table", {
                                    attrs: {
                                      fields: _vm.report.fields,
                                      items: _vm.reports.data,
                                      "foot-clone": true,
                                      striped: "",
                                      bordered: ""
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "cell(index)",
                                          fn: function(data) {
                                            return [
                                              _c("label", [
                                                _vm._v(
                                                  "\n                                " +
                                                    _vm._s(data.index + 1) +
                                                    ".\n                            "
                                                )
                                              ])
                                            ]
                                          }
                                        },
                                        {
                                          key: "cell(action)",
                                          fn: function(data) {
                                            return [
                                              _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    href:
                                                      _vm.baseURL +
                                                      "invoice/report/" +
                                                      data.item.id,
                                                    target: "_blank"
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "icon-print"
                                                  }),
                                                  _vm._v(" Print")
                                                ]
                                              )
                                            ]
                                          }
                                        },
                                        {
                                          key: "cell(created_at)",
                                          fn: function(data) {
                                            return [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    _vm._f("formatDate")(
                                                      data.item.created_at
                                                    )
                                                  ) +
                                                  "\n                        "
                                              )
                                            ]
                                          }
                                        },
                                        {
                                          key: "cell(description)",
                                          fn: function(data) {
                                            return [
                                              _c(
                                                "div",
                                                [
                                                  _c(
                                                    "router-link",
                                                    {
                                                      attrs: {
                                                        to: {
                                                          name: "EditReport",
                                                          params: {
                                                            id: data.item.id
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "icon-mode_edit"
                                                      }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            data.item
                                                              .organization_name
                                                          )
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("div", [
                                                _vm._v(_vm._s(data.item.name))
                                              ])
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      1734239741
                                    )
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("pagination", {
                                attrs: { data: _vm.reports, limit: 2 },
                                on: {
                                  "pagination-change-page": _vm.fetchReports
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/inventory/reports/Ledger.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/reports/Ledger.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ledger_vue_vue_type_template_id_3b9374d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ledger.vue?vue&type=template&id=3b9374d5& */ "./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=template&id=3b9374d5&");
/* harmony import */ var _Ledger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ledger.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Ledger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ledger_vue_vue_type_template_id_3b9374d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ledger_vue_vue_type_template_id_3b9374d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/inventory/reports/Ledger.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ledger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ledger.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ledger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=template&id=3b9374d5&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=template&id=3b9374d5& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ledger_vue_vue_type_template_id_3b9374d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ledger.vue?vue&type=template&id=3b9374d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/reports/Ledger.vue?vue&type=template&id=3b9374d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ledger_vue_vue_type_template_id_3b9374d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ledger_vue_vue_type_template_id_3b9374d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
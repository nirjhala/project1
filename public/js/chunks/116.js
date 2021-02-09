(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
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
      limit: 10,
      checkAll: false,
      sale: {
        check: [],
        fields: [{
          key: 'index',
          label: 'Sr. No.'
        }, {
          key: 'customer_name',
          sortable: true
        }, {
          key: 'full_invoice_no',
          label: 'Invoice No.'
        }, {
          key: 'payment_mode'
        }, {
          key: 'total_amount',
          sortable: true
        }, {
          key: 'paid_amount',
          sortable: true
        }, {
          key: 'action'
        }]
      },
      sales: {}
    };
  },
  mounted: function mounted() {
    this.fetchSales();
  },
  methods: {
    searchAfterDebounce: _.debounce(function () {
      this.fetchSales();
    }, 500),
    selectAll: function selectAll() {
      this.sale.check = [];

      if (!this.checkAll) {
        for (var index in this.sales.data) {
          if (!this.sales.data[index].stock) {
            this.sale.check.push(this.sales.data[index].id);
          }
        }
      }
    },
    fetchSales: function fetchSales() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.sales = {};
      Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["view_sale"])("page=".concat(page, "&limit=").concat(this.limit, "&s=").concat(this.s)).then(function (res) {
        _this.sales = res.data;
      });
    },
    deleteMultiple: function deleteMultiple() {
      var _this2 = this;

      if (this.sale.check.length) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this record!",
          icon: "warning",
          buttons: true,
          dangerMode: true
        }).then(function (willDelete) {
          if (willDelete) {
            Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["multiple_delete_sale"])({
              ids: _this2.sale.check
            }).then(function (res) {
              _this2.$toast.success(res.data.message);

              _this2.fetchSales(1);
            });
          }
        });
      } else {
        swal("Warning", "Please select at least one record to delete.", "warning");
      }
    }
  },
  watch: {
    s: function s() {
      this.searchAfterDebounce();
    },
    limit: function limit() {
      this.fetchSales(1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=template&id=b445c0f4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=template&id=b445c0f4& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
                    name: "AddSale"
                  }
                }
              },
              [_vm._v("Add Sales")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [_vm._v("View Sales")]),
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
          _c("li", [_vm._v("View Sales")])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-form-group",
        [
          _c("b-input", {
            attrs: { type: "search", placeholder: "Search ..." },
            model: {
              value: _vm.s,
              callback: function($$v) {
                _vm.s = typeof $$v === "string" ? $$v.trim() : $$v
              },
              expression: "s"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      !_vm.sales.data
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
      _vm.sales.data
        ? _c(
            "div",
            [
              !_vm.sales.data.length
                ? _c("b-card", { staticClass: "h-auto" }, [
                    _vm._v("\n            No record(s) found.\n        ")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.sales.data.length
                ? _c(
                    "b-card",
                    {
                      staticClass: "h-auto",
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "header",
                            fn: function() {
                              return [
                                _c("div", { staticClass: "float-right" }, [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(_vm.sales.from) +
                                      " - " +
                                      _vm._s(_vm.sales.to) +
                                      " of " +
                                      _vm._s(_vm.sales.total) +
                                      " record(s) are showing.\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.limit,
                                        expression: "limit"
                                      }
                                    ],
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.limit = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "10" } }, [
                                      _vm._v("10")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "25" } }, [
                                      _vm._v("25")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "50" } }, [
                                      _vm._v("50")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "100" } }, [
                                      _vm._v("100")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Per Page")])
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        1142783804
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "table-responsive" },
                        [
                          _c("b-table", {
                            attrs: {
                              fields: _vm.sale.fields,
                              items: _vm.sales.data,
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
                                          "\n                            " +
                                            _vm._s(
                                              data.index + _vm.sales.from
                                            ) +
                                            ".\n                        "
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
                                              "invoice/sale/" +
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
                                                  name: "EditSale",
                                                  params: {
                                                    id: data.item.id
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "icon-mode_edit"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    data.item.organization_name
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
                              2324725845
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("pagination", {
                        attrs: { data: _vm.sales, limit: 2 },
                        on: { "pagination-change-page": _vm.fetchSales }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/inventory/sale/index.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/sale/index.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b445c0f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b445c0f4& */ "./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=template&id=b445c0f4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b445c0f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b445c0f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/inventory/sale/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=template&id=b445c0f4&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=template&id=b445c0f4& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b445c0f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b445c0f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/sale/index.vue?vue&type=template&id=b445c0f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b445c0f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b445c0f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
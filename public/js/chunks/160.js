(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[160],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/payFees.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/payFees.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/script */ "./resources/js/api/script.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var current_year = d.getFullYear();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      lists: [],
      fee_setting: {},
      loaded: 0,
      amount: 0,
      penalty_amount: 0
    };
  },
  computed: {
    totalFees: function totalFees() {
      var total = 0;
      this.lists.forEach(function (row) {
        if (row.pay_status == 'due') {
          total += parseFloat(row.amount - row.paid_amount);
        }
      });
      return total;
    },
    penaltyAmt: function penaltyAmt() {
      var _this = this;

      var total = 0;
      this.lists.forEach(function (row, index) {
        if (row.pay_status == 'paid') {
          total += parseFloat(row.penalty_amount - row.paid_penalty);
        } else {
          var penalty_amt = 0,
              _month = row.month > 9 ? "0".concat(row.month) : row.month,
              date = row.month > 3 ? new Date(current_year, row.month - 1, _this.fee_setting.fee_day) : new Date(current_year + 1, row.month - 1, _this.fee_setting.fee_day),
              late = 0;

          switch (_this.fee_setting.penalty_type) {
            case 'daily':
              late = Math.round((d - date) / (24 * 60 * 60 * 1000));
              break;

            case 'weekly':
              late = Math.round((d - date) / (7 * 24 * 60 * 60 * 1000));
              break;

            case 'monthly':
              late = _this.monthDiff(d, date);
              break;
          }

          late = late > 0 ? late : 0;
          _this.lists[index].penalty_amount = _this.fee_setting.penalty_amount * late;
          total += _this.lists[index].penalty_amount;
        }
      });
      return total;
    }
  },
  mounted: function mounted() {
    this.getLists();
  },
  methods: {
    monthDiff: function monthDiff(d2, d1) {
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      if (d2.getDate() < d1.getDate()) month--;
      return months <= 0 ? 0 : months;
    },
    getLists: function getLists() {
      var _this2 = this;

      this.loaded = 0;
      Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["view_fee_setting"])().then(function (res) {
        _this2.fee_setting = res.data;
      });
      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_0__["default"].studentFees(this.$route.params.id);
      apiResponse.then(function (res) {
        setTimeout(function () {
          _this2.lists = res.data;
          _this2.amount = _this2.totalFees;
          _this2.penalty_amount = _this2.penaltyAmt;
        }, 300);
      })["catch"](function (err) {
        console.log('Errors: ', err);
      });
    },
    payFees: function payFees() {
      var _this3 = this;

      var amount = this.amount;
      var installment_penalty = {};
      this.lists.forEach(function (row) {
        installment_penalty[row.id] = row.penalty_amount - row.paid_penalty;
      });

      if (amount && amount > 0 || this.penalty_amount || this.penalty_amount > 0) {
        Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["pay_student_fees"])({
          sid: this.$route.params.id,
          amount: this.amount,
          penalty_amount: this.penalty_amount,
          installment_penalty: installment_penalty
        }).then(function (res) {
          _this3.$toast.success(res.message);

          _this3.getLists();
        });
      }
    }
  },
  watch: {
    amount: function amount(amt) {
      var _this4 = this;

      if (parseFloat(amt) > parseFloat(this.totalFees)) {
        setTimeout(function () {
          _this4.amount = parseFloat(_this4.totalFees);
        }, 1);
      }

      if (this.totalFees > 0 && amt < this.totalFees) {
        setTimeout(function () {
          _this4.penalty_amount = 0;
        }, 1);
      } else if (amt == this.totalFees && this.penalty_amount == 0) {
        this.penalty_amount = this.penaltyAmt;
      }
    },
    penalty_amount: function penalty_amount(amt) {
      var _this5 = this;

      if (parseFloat(amt) > parseFloat(this.penaltyAmt)) {
        setTimeout(function () {
          _this5.penalty_amount = parseFloat(_this5.penaltyAmt);
        }, 1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/payFees.vue?vue&type=template&id=1c660648&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/payFees.vue?vue&type=template&id=1c660648& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v("Pay Fee")]),
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
              _c("router-link", { attrs: { to: { name: "StudentMaster" } } }, [
                _vm._v("Student Master")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [_vm._v("Pay Fee")])
        ])
      ]),
      _vm._v(" "),
      _vm.lists.length
        ? _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { sm: "8" } },
                [
                  _c("b-card", { attrs: { header: "Fees Summary" } }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("table", { staticClass: "table table-bordered" }, [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("FEES AMOUNT")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("MONTH")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Pay Status")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Paid Amount")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Due Amount")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Penalty")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Due Penalty")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.lists, function(s, i) {
                              return _c(
                                "tr",
                                {
                                  key: i,
                                  class:
                                    s.pay_status == "paid"
                                      ? "bg-success text-white"
                                      : "bg-danger text-white"
                                },
                                [
                                  _c("td", [_vm._v(_vm._s(i + 1))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v("₹ " + _vm._s(s.amount))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(s.month))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(s.pay_status) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(s.paid_amount))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(s.amount - s.paid_amount))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(s.penalty_amount))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(s.penalty_amount - s.paid_penalty)
                                    )
                                  ])
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _c("tr", [
                              _c("th", { attrs: { colspan: "6" } }, [
                                _vm._v(
                                  "\n                                    TOTAL DUE FEES AMOUNT\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { attrs: { colspan: "2" } }, [
                                _vm._v("₹ " + _vm._s(_vm.totalFees))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("th", { attrs: { colspan: "6" } }, [
                                _c("span", { staticClass: "float-right" }, [
                                  _vm._v("(+)")
                                ]),
                                _vm._v(
                                  "\n                                    TOTAL PENALTY AMOUNT (due to late fees)\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { attrs: { colspan: "2" } }, [
                                _vm._v("₹ " + _vm._s(_vm.penaltyAmt))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("th", { attrs: { colspan: "6" } }, [
                                _vm._v(
                                  "\n                                    TOTAL PAYABLE AMOUNT\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { attrs: { colspan: "2" } }, [
                                _vm._v(
                                  "₹ " + _vm._s(_vm.totalFees + _vm.penaltyAmt)
                                )
                              ])
                            ])
                          ],
                          2
                        )
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "4" } },
                [
                  _c(
                    "b-card",
                    { attrs: { header: "Pay Fees" } },
                    [
                      _c(
                        "b-form",
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Amount" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "number",
                                  min: "1",
                                  max: _vm.totalFees,
                                  placeholder: "Enter Fees Amount"
                                },
                                on: {
                                  focus: function($event) {
                                    return $event.target.select()
                                  }
                                },
                                model: {
                                  value: _vm.amount,
                                  callback: function($$v) {
                                    _vm.amount = $$v
                                  },
                                  expression: "amount"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Penalty Amount" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "number",
                                  min: "0",
                                  max: _vm.penaltyAmt,
                                  placeholder: "Enter Penalty Amount"
                                },
                                on: {
                                  focus: function($event) {
                                    return $event.target.select()
                                  }
                                },
                                model: {
                                  value: _vm.penalty_amount,
                                  callback: function($$v) {
                                    _vm.penalty_amount = $$v
                                  },
                                  expression: "penalty_amount"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            [
                              _vm.amount > 0 || _vm.penalty_amount > 0
                                ? _c(
                                    "b-button",
                                    {
                                      staticClass:
                                        "fw-btn-fill btn-gradient-yellow text-white",
                                      attrs: { block: "" },
                                      on: { click: _vm.payFees }
                                    },
                                    [_vm._v("Pay Now")]
                                  )
                                : _vm._e()
                            ],
                            1
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

/***/ "./resources/js/components/school-panel/student/payFees.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/school-panel/student/payFees.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payFees_vue_vue_type_template_id_1c660648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payFees.vue?vue&type=template&id=1c660648& */ "./resources/js/components/school-panel/student/payFees.vue?vue&type=template&id=1c660648&");
/* harmony import */ var _payFees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payFees.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/student/payFees.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payFees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payFees_vue_vue_type_template_id_1c660648___WEBPACK_IMPORTED_MODULE_0__["render"],
  _payFees_vue_vue_type_template_id_1c660648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/student/payFees.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/student/payFees.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/payFees.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payFees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./payFees.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/payFees.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payFees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/student/payFees.vue?vue&type=template&id=1c660648&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/payFees.vue?vue&type=template&id=1c660648& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payFees_vue_vue_type_template_id_1c660648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./payFees.vue?vue&type=template&id=1c660648& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/payFees.vue?vue&type=template&id=1c660648&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payFees_vue_vue_type_template_id_1c660648___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payFees_vue_vue_type_template_id_1c660648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
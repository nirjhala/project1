(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../api/script */ "./resources/js/api/script.js");
/* harmony import */ var _SelectSearch_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../SelectSearch.vue */ "./resources/js/components/SelectSearch.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SelectSearch: _SelectSearch_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      country_id: '',
      state_id: '',
      payment: {
        purchase_id: '',
        amount: 0,
        payment_mode: 'Cash',
        txn_number: '',
        remarks: ''
      },
      items: {},
      carts: {},
      customers: {},
      purchases: {},
      loading: false
    };
  },
  validations: {
    payment: {
      purchase_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      amount: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      payment_mode: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  mounted: function mounted() {
    this.fetchPurchases();

    if (this.$route.params.id) {
      this.getInfo();
    }
  },
  methods: {
    fetchPurchases: function fetchPurchases() {
      var _this = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_purchase"])("type=all").then(function (res) {
        _this.purchases = res.data;
      });
    },
    changePurchaseInvoice: function changePurchaseInvoice(id) {
      var _this2 = this;

      this.payment.purchase_id = id;
      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["show_purchase"])(id).then(function (res) {
        _this2.payment.amount = res.data.due_amount;
      });
    },
    getInfo: function getInfo() {
      var _this3 = this;

      show_supplier(this.$route.params.id).then(function (res) {
        _this3.item = res.data;
      });
    },
    saveData: function saveData() {
      var _this4 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        this.loading = true;
        var params = {
          payment: this.payment
        };
        var apiResponse = '';

        if (!this.$route.params.id) {
          apiResponse = Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["add_payment"])(params);
        } else {
          apiResponse = Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["edit_payment"])(this.$route.params.id, params);
        }

        apiResponse.then(function (res) {
          _this4.loading = false;

          _this4.$router.push({
            name: 'ViewPayment'
          }).then(function () {
            _this4.$toast.success(res.data.message);
          });
        })["catch"](function (err) {
          console.log(err);
          _this4.loading = false;
        });
      }
    }
  },
  watch: {
    totalGST: function totalGST() {
      this.payment.paid_amount = Math.floor(this.totalCartAmount + this.totalGST);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=template&id=d59e9968&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=template&id=d59e9968& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "dashboard-content-one" }, [
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
                  name: "ViewPayment"
                }
              }
            },
            [_vm._v("View Payments")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [
        _vm._v(_vm._s(_vm.$route.params.id ? "Edit" : "Add") + " Payments")
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
            _c("router-link", { attrs: { to: { name: "InventoryMaster" } } }, [
              _vm._v("Inventory Master")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "ViewPayment" } } }, [
              _vm._v("Payments")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [
          _vm._v(_vm._s(_vm.$route.params.id ? "Edit" : "Add") + " Payments")
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "form",
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
          "b-card",
          { staticClass: "h-auto" },
          [
            _c(
              "b-row",
              [
                _c(
                  "b-form-group",
                  {
                    staticClass: "col-sm-4",
                    attrs: { label: "Select Purchase Invoice" }
                  },
                  [
                    _c("select-search", {
                      attrs: {
                        options: _vm.purchases,
                        placeholder: "Select Purchase Invoice",
                        customClass: {
                          "is-invalid": _vm.$v.payment.purchase_id.$error
                        }
                      },
                      on: { input: _vm.changePurchaseInvoice }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  { staticClass: "col-sm-4", attrs: { label: "Amount" } },
                  [
                    _c("b-input", {
                      class: {
                        "is-invalid": _vm.$v.payment.amount.$error
                      },
                      attrs: { type: "number", placeholder: "Enter Amount" },
                      model: {
                        value: _vm.$v.payment.amount.$model,
                        callback: function($$v) {
                          _vm.$set(_vm.$v.payment.amount, "$model", $$v)
                        },
                        expression: "$v.payment.amount.$model"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-form-invalid-feedback", [
                      _vm._v("Please enter amount.")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  { staticClass: "col-sm-4", attrs: { label: "Payment Mode" } },
                  [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.payment.payment_mode.$model,
                            expression: "$v.payment.payment_mode.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.$v.payment.payment_mode.$error
                        },
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
                            _vm.$set(
                              _vm.$v.payment.payment_mode,
                              "$model",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "Cash" } }, [
                          _vm._v("Cash")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "Card" } }, [
                          _vm._v("Card")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "PayTM" } }, [
                          _vm._v("PayTM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "Cheque" } }, [
                          _vm._v("Cheque")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "UPI" } }, [
                          _vm._v("UPI")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "Demand Draft" } }, [
                          _vm._v("Demand Draft - DD")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "Bank Transfer" } }, [
                          _vm._v("Bank Transfer like NEFT, EFT, etc.")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "Other" } }, [
                          _vm._v("Other payment options.")
                        ])
                      ]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.payment.payment_mode != "Cash"
              ? _c(
                  "b-form-group",
                  {
                    attrs: {
                      label:
                        _vm.payment.payment_mode == "Cheque"
                          ? "Cheque No."
                          : "Txn. Number"
                    }
                  },
                  [
                    _c("b-input", {
                      attrs: {
                        placeholder:
                          _vm.payment.payment_mode == "Cheque"
                            ? "Cheque No."
                            : "Txn. Number"
                      },
                      model: {
                        value: _vm.payment.txn_number,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.payment,
                            "txn_number",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "payment.txn_number"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "b-form-group",
              { attrs: { label: "Remarks" } },
              [
                _c("b-textarea", {
                  staticClass: "h-auto",
                  attrs: { placeholder: "Remarks (if any)", rows: "10" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm.loading
              ? _c(
                  "div",
                  [_c("b-spinner"), _vm._v(" In process, please wait...")],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.loading
              ? _c(
                  "b-button",
                  {
                    staticClass:
                      "fw-btn-fill btn-gradient-yellow text-white router-link-active",
                    staticStyle: { "max-width": "100px" },
                    attrs: { type: "submit" }
                  },
                  [_vm._v(_vm._s(_vm.$route.params.id ? "Update" : "Save"))]
                )
              : _vm._e()
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/inventory/payment/add.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/payment/add.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_d59e9968___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=d59e9968& */ "./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=template&id=d59e9968&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_d59e9968___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_d59e9968___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/inventory/payment/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=template&id=d59e9968&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=template&id=d59e9968& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_d59e9968___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=d59e9968& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/payment/add.vue?vue&type=template&id=d59e9968&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_d59e9968___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_d59e9968___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
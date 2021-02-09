(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      allowance: {
        gender: 'Male',
        from_amount: '',
        to_amount: '',
        type: 'percent',
        name: '',
        percent: 5,
        amount: ''
      },
      percentages: [],
      payroll_masters: {},
      success: null,
      errors: [],
      loaded: 0
    };
  },
  validations: function validations() {
    return {
      allowance: {
        to_amount: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        },
        name: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        },
        amount: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        }
      }
    };
  },
  mounted: function mounted() {
    this.routeLoading();
    this.fetch_payroll_master(); // if(!this.$route.params.id) {
    //     view_max_salary_allowance(this.allowance.gender, this.allowance.name)
    //         .then(res => {
    //             this.allowance.from_amount = res.data
    //         })
    // }

    var num = 1;

    do {
      this.percentages.push(num);
      if (num < 10) num++;else num += 5;
    } while (num <= 50);

    this.allowance.percent = 1;
  },
  methods: {
    routeLoading: function routeLoading() {
      if (this.$route.params.id) {
        this.getInfo();
      } else {
        this.loaded = 1;
      }
    },
    fetch_last_allowance: function fetch_last_allowance() {
      var _this = this;

      if (!this.$route.params.id && this.allowance.gender && this.allowance.name) {
        Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_max_salary_allowance"])(this.allowance.gender, this.allowance.name).then(function (res) {
          _this.allowance.from_amount = res.data;
        });
      }
    },
    fetch_payroll_master: function fetch_payroll_master() {
      var _this2 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_all_payroll_masters"])('allowance').then(function (res) {
        _this2.payroll_masters = res.data;
      });
    },
    getInfo: function getInfo() {
      var _this3 = this;

      this.loaded = 0;
      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["show_allowance"])(this.$route.params.id).then(function (res) {
        _this3.allowance = res.data;
        _this3.loaded = 1;
      });
    },
    saveData: function saveData() {
      var _this4 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        this.loaded = 0;
        var params = {
          allowance: this.allowance
        };

        if (!this.$route.params.id) {
          Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["add_allowance"])(params).then(function (res) {
            _this4.loaded = 1;

            _this4.$router.push({
              name: 'PayrollAllowance'
            });
          })["catch"](function (error) {
            _this4.loaded = 1;
            console.log(error);
          });
        } else {
          Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["edit_allowance"])(this.$route.params.id, params).then(function (res) {
            _this4.loaded = 1;

            _this4.$router.push({
              name: 'PayrollAllowance'
            });
          })["catch"](function (error) {
            _this4.loaded = 1;
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
    "allowance.type": function allowanceType(type) {
      if (type == 'percent') {
        this.percentages = [];
        var num = 1;

        do {
          this.percentages.push(num);
          if (num < 10) num++;else num += 5;
        } while (num <= 50);

        this.allowance.percent = 1;
      } else {
        this.percentages.push(0);
        this.allowance.percent = 0;
      }

      this.fetch_employees();
    },
    "allowance.gender": function allowanceGender() {
      this.fetch_last_allowance();
    },
    "allowance.name": function allowanceName() {
      this.fetch_last_allowance();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nlabel[data-v-49769b2a] {\n    text-transform: capitalize;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=template&id=49769b2a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=template&id=49769b2a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
                    name: "PayrollAllowance"
                  }
                }
              },
              [_vm._v("View Allowance")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [
          _vm._v(_vm._s(!_vm.$route.params.id ? "Add" : "Edit") + " Allowance")
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
              _c(
                "router-link",
                { attrs: { to: { name: "PayrollAllowance" } } },
                [_vm._v("Allowance")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              _vm._s(!_vm.$route.params.id ? "Add" : "Edit") + " Allowance"
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
            title: !_vm.$route.params.id ? "Create Allowance" : "Edit Allowance"
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
                "b-row",
                [
                  _c(
                    "b-form-group",
                    { staticClass: "col-sm-4", attrs: { label: "Gender *" } },
                    [
                      _c("label", { staticClass: "mr-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.allowance.gender,
                              expression: "allowance.gender"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "gender",
                            value: "Male"
                          },
                          domProps: {
                            checked: _vm._q(_vm.allowance.gender, "Male")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.allowance, "gender", "Male")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Male\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "mr-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.allowance.gender,
                              expression: "allowance.gender"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "gender",
                            value: "Female"
                          },
                          domProps: {
                            checked: _vm._q(_vm.allowance.gender, "Female")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.allowance, "gender", "Female")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Female\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "mr-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.allowance.gender,
                              expression: "allowance.gender"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "gender",
                            value: "Other"
                          },
                          domProps: {
                            checked: _vm._q(_vm.allowance.gender, "Other")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.allowance, "gender", "Other")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Other\n                    "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-4",
                      attrs: { label: "Select Allowance" }
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.$v.allowance.name.$model,
                              expression: "$v.allowance.name.$model"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.allowance.name.$error
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
                                _vm.$v.allowance.name,
                                "$model",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Name")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.payroll_masters, function(name, id) {
                            return _c(
                              "option",
                              { key: id, domProps: { value: name } },
                              [_vm._v(_vm._s(name))]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please enter required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-2",
                      attrs: { label: "From Salary Amount" }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          type: "number",
                          placeholder: "From Salary Amount",
                          readonly: ""
                        },
                        model: {
                          value: _vm.allowance.from_amount,
                          callback: function($$v) {
                            _vm.$set(_vm.allowance, "from_amount", $$v)
                          },
                          expression: "allowance.from_amount"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-2",
                      attrs: { label: "To Salary Amount" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.allowance.to_amount.$error
                        },
                        attrs: {
                          type: "number",
                          placeholder: "To Salary Amount"
                        },
                        model: {
                          value: _vm.$v.allowance.to_amount.$model,
                          callback: function($$v) {
                            _vm.$set(_vm.$v.allowance.to_amount, "$model", $$v)
                          },
                          expression: "$v.allowance.to_amount.$model"
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
                    "b-form-group",
                    { staticClass: "col-sm-4", attrs: { label: "Type" } },
                    [
                      _c("label", { staticClass: "mr-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.allowance.type,
                              expression: "allowance.type"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "type",
                            value: "percent"
                          },
                          domProps: {
                            checked: _vm._q(_vm.allowance.type, "percent")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.allowance, "type", "percent")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Percent\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "mr-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.allowance.type,
                              expression: "allowance.type"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "type",
                            value: "fixed"
                          },
                          domProps: {
                            checked: _vm._q(_vm.allowance.type, "fixed")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.allowance, "type", "fixed")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Fixed\n                    "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { staticClass: "col-sm-4", attrs: { label: "Percent" } },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.allowance.percent,
                              expression: "allowance.percent"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { disabled: _vm.allowance.type == "fixed" },
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
                                _vm.allowance,
                                "percent",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.percentages, function(percent, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: percent } },
                            [_vm._v(_vm._s(percent))]
                          )
                        }),
                        0
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-4",
                      attrs: { label: "Amount (upto)" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.allowance.amount.$error
                        },
                        attrs: { placeholder: "Enter Amount" },
                        model: {
                          value: _vm.$v.allowance.amount.$model,
                          callback: function($$v) {
                            _vm.$set(_vm.$v.allowance.amount, "$model", $$v)
                          },
                          expression: "$v.allowance.amount.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please enter required field.")
                      ])
                    ],
                    1
                  )
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

/***/ "./resources/js/components/school-panel/payroll/AddAllowance.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddAllowance.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddAllowance_vue_vue_type_template_id_49769b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddAllowance.vue?vue&type=template&id=49769b2a&scoped=true& */ "./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=template&id=49769b2a&scoped=true&");
/* harmony import */ var _AddAllowance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddAllowance.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddAllowance_vue_vue_type_style_index_0_id_49769b2a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css& */ "./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddAllowance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddAllowance_vue_vue_type_template_id_49769b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddAllowance_vue_vue_type_template_id_49769b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49769b2a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/payroll/AddAllowance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddAllowance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_style_index_0_id_49769b2a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=style&index=0&id=49769b2a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_style_index_0_id_49769b2a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_style_index_0_id_49769b2a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_style_index_0_id_49769b2a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_style_index_0_id_49769b2a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_style_index_0_id_49769b2a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=template&id=49769b2a&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=template&id=49769b2a&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_template_id_49769b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddAllowance.vue?vue&type=template&id=49769b2a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddAllowance.vue?vue&type=template&id=49769b2a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_template_id_49769b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAllowance_vue_vue_type_template_id_49769b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/fees-collection/info.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/fees-collection/info.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      id: '',
      user_info: {},
      no_of_installments: 1,
      admission_type: "New",
      fees_lists: [],
      fees_include: [],
      installment_amount: [],
      payement_month: [],
      errors: [],
      discount: 0,
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  computed: {
    fee_amount: function fee_amount() {
      var feeAmt = [];
      var self = this;
      self.fees_lists.forEach(function (row, i) {
        feeAmt[row.id] = self.admission_type == "New" ? row.fees_for_new : row.fees_for_old;
      });
      return feeAmt;
    },
    total_fees: function total_fees() {
      var self = this;
      var total = 0;
      self.fees_include.forEach(function (row, i) {
        total += parseFloat(self.fee_amount[row]);
      });
      return total;
    },
    final_total: function final_total() {
      return this.total_fees - this.discount;
    }
  },
  mounted: function mounted() {
    var params = this.$route.params;

    if (params.id != undefined && params.id != '') {
      this.getInfo(params.id);
    }
  },
  methods: {
    calcInstallments: function calcInstallments() {
      var feeAmt = 0;
      var extraAmt = 0;
      var self = this;
      self.fees_lists.forEach(function (row, i) {
        feeAmt = self.admission_type == "New" ? row.fees_for_new : row.fees_for_old;

        if (row.ftype.installment_availability == 0 && self.fees_include.includes(row.id)) {
          extraAmt += parseFloat(feeAmt);
        }
      }); // Installments

      var avg_emi = (this.final_total - extraAmt) / this.no_of_installments;
      var installment_amount = [];
      var payement_month = [];

      for (var num = 1; num <= this.no_of_installments; num++) {
        installment_amount[num] = avg_emi;

        if (num == 1) {
          installment_amount[num] += parseFloat(extraAmt);
        }

        installment_amount[num] = Math.round(installment_amount[num]);
        payement_month[num] = this.payement_month[num] ? this.payement_month[num] : '';
      }

      this.installment_amount = installment_amount;
      this.payement_month = payement_month;
    },
    getInfo: function getInfo(id) {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get("fees/info/student/".concat(id)).then(function (res) {
        var self = _this;
        var list = res.data;
        self.user_info = list.user_info;
        self.fees_lists = list.fees_lists;

        if (list.fees_str) {
          self.id = list.fees_str.id;
          self.fees_include = list.fees_str.fees_types;
          self.admission_type = list.fees_str.admission_type;
          self.discount = list.fees_str.discount;
          self.no_of_installments = list.fees_str.installments_count;
          var monthArr = {};
          list.fees_str.installments.forEach(function (row, i) {
            monthArr[i + 1] = row.month;
          });
          self.payement_month = monthArr;
        }

        self.calcInstallments();
        _this.loaded = 1;
        $('.select2').each(function () {
          $(this).trigger('change');
        });
      });
    },
    saveInstallments: function saveInstallments() {
      var _this2 = this;

      var params = {
        sid: this.user_info.id,
        fees_types: this.fees_include,
        admission_type: this.admission_type,
        total_installments: this.no_of_installments,
        discount: this.discount,
        total_amount: this.total_fees,
        payement_month: this.payement_month,
        // Installments
        installment_amount: this.installment_amount
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('fees-structure/' + this.id, params).then(function (res) {
        if (res.data.status) {
          _this2.$router.push({
            name: 'fees-type'
          }).then(function (res) {
            _this2.loaded = 1;

            _this2.$toast.success('Record saved.');
          })["catch"](function (err) {
            _this2.loaded = 1;
            console.log(err);
          });
        } else {
          _this2.loaded = 1;
          _this2.errors = res.data.errors;
        }
      })["catch"](function (error) {
        _this2.loaded = 1;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/fees-collection/info.vue?vue&type=template&id=47ab9f70&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/fees-collection/info.vue?vue&type=template&id=47ab9f70& ***!
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
  return _c("div", { staticClass: "dashboard-content-one" }, [
    _c("div", { staticClass: "breadcrumbs-area" }, [
      _c("h3", [_vm._v("Fees Summary")]),
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
            _c("router-link", { attrs: { to: { name: "FeeMaster" } } }, [
              _vm._v("Fees Management")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "fees-collection" } } }, [
              _vm._v("Fees Collection")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v("Fees Summary")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card height-auto mb-3" }, [
      _c("div", { staticClass: "card-body" }, [
        !_vm.loaded
          ? _c("div", { staticClass: "text-center" }, [
              _c("img", {
                staticStyle: { "max-width": "100%" },
                attrs: { src: "img/preloader.gif", alt: "" }
              })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.loaded
          ? _c("div", [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c("tr", [
                    _c("th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.user_info.name))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "text-center",
                        staticStyle: { width: "100px" },
                        attrs: { colspan: "2", rowspan: "4" }
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("img", {
                          staticStyle: { "max-width": "100px" },
                          attrs: { src: _vm.user_info.picture, alt: "" }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Father Name")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm.user_info.student_data.father_info.name)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Enrollment No.")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.user_info.student_data.reg_no))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Admission Type")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.admission_type,
                              expression: "admission_type"
                            }
                          ],
                          attrs: { type: "radio", value: "New" },
                          domProps: {
                            checked: _vm._q(_vm.admission_type, "New")
                          },
                          on: {
                            change: [
                              function($event) {
                                _vm.admission_type = "New"
                              },
                              function($event) {
                                return _vm.calcInstallments()
                              }
                            ]
                          }
                        }),
                        _vm._v(" New\n                                ")
                      ]),
                      _vm._v(" "),
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.admission_type,
                              expression: "admission_type"
                            }
                          ],
                          attrs: { type: "radio", value: "Old" },
                          domProps: {
                            checked: _vm._q(_vm.admission_type, "Old")
                          },
                          on: {
                            change: [
                              function($event) {
                                _vm.admission_type = "Old"
                              },
                              function($event) {
                                return _vm.calcInstallments()
                              }
                            ]
                          }
                        }),
                        _vm._v(" Old\n                                ")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card height-auto mb-3" }, [
      _c("div", { staticClass: "card-body" }, [
        !_vm.loaded
          ? _c("div", { staticClass: "text-center" }, [
              _c("img", {
                staticStyle: { "max-width": "100%" },
                attrs: { src: "img/preloader.gif", alt: "" }
              })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.loaded
          ? _c("div", [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.fees_lists, function(ft, i) {
                      return _c("tr", { key: i }, [
                        _c("td", [_vm._v(_vm._s(ft.ftype.name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.fee_amount[ft.id]) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("label", { staticClass: "switch" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.fees_include,
                                  expression: "fees_include"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                value: ft.id,
                                checked: Array.isArray(_vm.fees_include)
                                  ? _vm._i(_vm.fees_include, ft.id) > -1
                                  : _vm.fees_include
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = _vm.fees_include,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = ft.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.fees_include = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.fees_include = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.fees_include = $$c
                                    }
                                  },
                                  function($event) {
                                    return _vm.calcInstallments()
                                  }
                                ]
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "slider round" })
                          ])
                        ])
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c("th", [_vm._v("Total Amount")]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.total_fees) +
                            "\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", [_vm._v("No. Of Installments")]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.no_of_installments,
                                expression: "no_of_installments"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.no_of_installments = $event.target
                                    .multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                function($event) {
                                  return _vm.calcInstallments()
                                }
                              ]
                            }
                          },
                          _vm._l(10, function(i) {
                            return _c(
                              "option",
                              { key: i, domProps: { value: i } },
                              [_vm._v(_vm._s(i))]
                            )
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", [_vm._v("Discount")]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.discount,
                              expression: "discount"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "number" },
                          domProps: { value: _vm.discount },
                          on: {
                            change: function($event) {
                              return _vm.calcInstallments()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.discount = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", [_vm._v("Final Amount")]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.final_total) +
                            "\n                                "
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _vm.no_of_installments
      ? _c("div", { staticClass: "card height-auto mb-3" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.no_of_installments, function(num) {
                      return _c("tr", { key: num }, [
                        _c("td", [_vm._v("Installment " + _vm._s(num))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                    ₹ " +
                              _vm._s(_vm.installment_amount[num]) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.payement_month[num],
                                  expression: "payement_month[num]"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.payement_month,
                                    num,
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select Month")
                              ]),
                              _vm._v(" "),
                              _vm._l(12, function(m) {
                                return _c(
                                  "option",
                                  { key: m, domProps: { value: m } },
                                  [_vm._v(_vm._s(m))]
                                )
                              })
                            ],
                            2
                          )
                        ])
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c("th", [_vm._v("Total Amount")]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(
                          "\n                                    ₹ " +
                            _vm._s(_vm.final_total) +
                            "\n                                "
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.saveInstallments()
                      }
                    }
                  },
                  [_vm._v("Save & Submit")]
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("Student Info")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("strong", [_vm._v("Photograph")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("Fees Setting")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Fees Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("Fees Installments")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Installment")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payment Month")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/fees-collection/info.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/school-panel/fees-collection/info.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_vue_vue_type_template_id_47ab9f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=47ab9f70& */ "./resources/js/components/school-panel/fees-collection/info.vue?vue&type=template&id=47ab9f70&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/fees-collection/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_47ab9f70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_vue_vue_type_template_id_47ab9f70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/fees-collection/info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/fees-collection/info.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/fees-collection/info.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/fees-collection/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/fees-collection/info.vue?vue&type=template&id=47ab9f70&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/fees-collection/info.vue?vue&type=template&id=47ab9f70& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_47ab9f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=template&id=47ab9f70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/fees-collection/info.vue?vue&type=template&id=47ab9f70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_47ab9f70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_47ab9f70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
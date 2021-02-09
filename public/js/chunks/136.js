(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/script */ "./resources/js/api/script.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['image_src', 'image'],
  data: function data() {
    return {
      fee: {
        id: null,
        fee_day: '',
        penalty_type: '',
        penalty_amount: 0
      },
      errors: [],
      loaded: 0
    };
  },
  validations: {
    fee: {
      fee_day: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      penalty_type: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      penalty_amount: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }
  },
  mounted: function mounted() {
    this.getFeeSetting();
  },
  methods: {
    getFeeSetting: function getFeeSetting() {
      var _this = this;

      this.loaded = 0;
      Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["view_fee_setting"])().then(function (res) {
        _this.loaded = 1;
        _this.fee = res.data;
      })["catch"](function (err) {
        _this.loaded = 1;
      });
    },
    updateData: function updateData() {
      var _this2 = this;

      this.loaded = 0;
      Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["update_fee_setting"])(this.fee.id, this.fee).then(function (res) {
        _this2.loaded = 1;

        _this2.$toast.success(res.data.message);
      })["catch"](function (err) {
        _this2.loaded = 1;
      });
    }
  },
  watch: {
    "fee.penalty_amount": function feePenalty_amount(amount) {
      var _this3 = this;

      if (parseFloat(amount) < 0) {
        setTimeout(function () {
          _this3.fee.penalty_amount = 0;
        }, 1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=template&id=d31c528e&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=template&id=d31c528e& ***!
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
  return _c("div", { staticClass: "dashboard-content-one" }, [
    _c("div", { staticClass: "breadcrumbs-area" }, [
      _c("h3", [_vm._v("Fees Settings")]),
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
        _c("li", [_vm._v("Fees Settings")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card height-auto" }, [
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
              _c(
                "form",
                {
                  staticClass: "new-added-form",
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateData()
                    }
                  }
                },
                [
                  _vm.errors.length
                    ? _c("div", { staticClass: "alert alert-danger" }, [
                        _c(
                          "ul",
                          { staticClass: "mb-0" },
                          _vm._l(_vm.errors, function(error, index) {
                            return _c("li", { key: index }, [
                              _vm._v(_vm._s(error))
                            ])
                          }),
                          0
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-4 form-group py-4" }, [
                          _vm._v(
                            "\r\n                                    Fee Collection Day *\r\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-8 form-group" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.fee.fee_day,
                                  expression: "fee.fee_day",
                                  modifiers: { trim: true }
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
                                    _vm.fee,
                                    "fee_day",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select day")
                              ]),
                              _vm._v(" "),
                              _vm._l(28, function(d) {
                                return _c(
                                  "option",
                                  { key: d, domProps: { value: d } },
                                  [_vm._v(_vm._s(d < 10 ? "0" + d : d))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 form-group py-4" }, [
                          _vm._v(
                            "\r\n                                    Penalty Type *\r\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-8 form-group" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.fee.penalty_type,
                                  expression: "fee.penalty_type",
                                  modifiers: { trim: true }
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
                                    _vm.fee,
                                    "penalty_type",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select Fees Type")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "daily" } }, [
                                _vm._v("Daily")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "weekly" } }, [
                                _vm._v("Weekly")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "monthly" } }, [
                                _vm._v("Monthly")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 form-group py-4" }, [
                          _vm._v(
                            "\r\n                                    Penalty Amount *\r\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-8 form-group" },
                          [
                            _c("b-input", {
                              attrs: {
                                type: "number",
                                min: "0",
                                placeholder: "Penalty Amount"
                              },
                              model: {
                                value: _vm.fee.penalty_amount,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.fee,
                                    "penalty_amount",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "fee.penalty_amount"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(0)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" })
                  ])
                ]
              )
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 form-group mg-t-8" }, [
        _c("label", [_vm._v(" ")]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
            attrs: { type: "submit" }
          },
          [_vm._v("Save Changes")]
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
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/profile/feeSetting.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/school-panel/profile/feeSetting.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feeSetting_vue_vue_type_template_id_d31c528e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feeSetting.vue?vue&type=template&id=d31c528e& */ "./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=template&id=d31c528e&");
/* harmony import */ var _feeSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feeSetting.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _feeSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feeSetting_vue_vue_type_template_id_d31c528e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _feeSetting_vue_vue_type_template_id_d31c528e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/profile/feeSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feeSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feeSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feeSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=template&id=d31c528e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=template&id=d31c528e& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feeSetting_vue_vue_type_template_id_d31c528e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feeSetting.vue?vue&type=template&id=d31c528e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/profile/feeSetting.vue?vue&type=template&id=d31c528e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feeSetting_vue_vue_type_template_id_d31c528e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feeSetting_vue_vue_type_template_id_d31c528e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
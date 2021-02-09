(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/item/add.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/item/add.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../api/script */ "./resources/js/api/script.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      item: {
        name: '',
        description: '',
        purchase_price: 0,
        margin: 0,
        sale_price: 0,
        gst_rate: 0,
        type: 'inc'
      },
      gst_rates: []
    };
  },
  validations: {
    item: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      purchase_price: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      margin: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      sale_price: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  mounted: function mounted() {
    this.fetchGstRates();

    if (this.$route.params.id) {
      this.getInfo();
    }
  },
  methods: {
    fetchGstRates: function fetchGstRates() {
      var _this = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_gst_rates"])().then(function (res) {
        _this.gst_rates = res.data;
      });
    },
    getInfo: function getInfo() {
      var _this2 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["show_item"])(this.$route.params.id).then(function (res) {
        _this2.item = res.data;
      });
    },
    saveData: function saveData() {
      var _this3 = this;

      var params = {
        item: this.item
      };
      var apiResponse = '';

      if (!this.$route.params.id) {
        apiResponse = Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["add_item"])(params);
      } else {
        apiResponse = Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["edit_item"])(this.$route.params.id, params);
      }

      apiResponse.then(function (res) {
        _this3.$router.push({
          name: 'ViewItem'
        }).then(function () {
          _this3.$toast.success(res.data.message);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/item/add.vue?vue&type=template&id=26f094be&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/item/add.vue?vue&type=template&id=26f094be& ***!
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
                  name: "ViewItem"
                }
              }
            },
            [_vm._v("View Items")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [
        _vm._v(_vm._s(_vm.$route.params.id ? "Edit" : "Add") + " Items")
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
            _c("router-link", { attrs: { to: { name: "ViewItem" } } }, [
              _vm._v("Items")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [
          _vm._v(_vm._s(_vm.$route.params.id ? "Edit" : "Add") + " Items")
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
              "b-form-group",
              { attrs: { label: "Name" } },
              [
                _c("b-input", {
                  attrs: { placeholder: "Enter Name" },
                  model: {
                    value: _vm.item.name,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.item,
                        "name",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "item.name"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-form-group",
              { attrs: { label: "Description" } },
              [
                _c("b-textarea", {
                  staticClass: "h-auto",
                  attrs: { rows: "5", placeholder: "Enter Desription" },
                  model: {
                    value: _vm.item.description,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.item,
                        "description",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "item.description"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-row",
              [
                _c(
                  "b-form-group",
                  {
                    staticClass: "col-sm-4",
                    attrs: { label: "Purchase Price" }
                  },
                  [
                    _c("b-input", {
                      attrs: {
                        type: "number",
                        placeholder: "Enter Purchase Price"
                      },
                      model: {
                        value: _vm.item.purchase_price,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.item,
                            "purchase_price",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "item.purchase_price"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  { staticClass: "col-sm-4", attrs: { label: "Margin" } },
                  [
                    _c("b-input", {
                      attrs: { type: "number", placeholder: "Enter Margin" },
                      model: {
                        value: _vm.item.margin,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.item,
                            "margin",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "item.margin"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  { staticClass: "col-sm-4", attrs: { label: "Sale Price" } },
                  [
                    _c("b-input", {
                      attrs: {
                        type: "number",
                        placeholder: "Enter Sale Price"
                      },
                      model: {
                        value: _vm.item.sale_price,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.item,
                            "sale_price",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "item.sale_price"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  { staticClass: "col-sm-4", attrs: { label: "Price Type" } },
                  [
                    _c("label", { staticClass: "d-block" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.type,
                            expression: "item.type"
                          }
                        ],
                        attrs: { type: "radio", value: "inc" },
                        domProps: { checked: _vm._q(_vm.item.type, "inc") },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.item, "type", "inc")
                          }
                        }
                      }),
                      _vm._v(
                        "\n                        Inclusive GST\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("label", { staticClass: "d-block" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.type,
                            expression: "item.type"
                          }
                        ],
                        attrs: { type: "radio", value: "excl" },
                        domProps: { checked: _vm._q(_vm.item.type, "excl") },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.item, "type", "excl")
                          }
                        }
                      }),
                      _vm._v(
                        "\n                        Exclusive GST\n                    "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  { staticClass: "col-sm-4", attrs: { label: "GST Rate" } },
                  [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.gst_rate,
                            expression: "item.gst_rate"
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
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.item,
                              "gst_rate",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.gst_rates, function(r, i) {
                        return _c(
                          "option",
                          { key: i, domProps: { value: r } },
                          [_vm._v(_vm._s(r))]
                        )
                      }),
                      0
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                staticClass:
                  "fw-btn-fill btn-gradient-yellow text-white router-link-active",
                staticStyle: { "max-width": "100px" },
                attrs: { type: "submit" }
              },
              [_vm._v(_vm._s(_vm.$route.params.id ? "Update" : "Save"))]
            )
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

/***/ "./resources/js/components/school-panel/inventory/item/add.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/item/add.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_26f094be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=26f094be& */ "./resources/js/components/school-panel/inventory/item/add.vue?vue&type=template&id=26f094be&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/inventory/item/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_26f094be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_26f094be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/inventory/item/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/item/add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/item/add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/item/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/item/add.vue?vue&type=template&id=26f094be&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/item/add.vue?vue&type=template&id=26f094be& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_26f094be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=26f094be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/item/add.vue?vue&type=template&id=26f094be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_26f094be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_26f094be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
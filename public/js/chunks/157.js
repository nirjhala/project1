(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/fees.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/fees.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

var count = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      lists: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.getLists();
  },
  methods: {
    getLists: function getLists() {
      var _this = this;

      this.loaded = 0;
      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_0__["default"].studentFees(this.$route.params.id);
      apiResponse.then(function (res) {
        _this.lists = res.data;
      })["catch"](function (err) {
        console.log('Errors: ', err);
      });
    },
    payStatus: function payStatus(i) {
      var _this2 = this;

      var status = this.lists[i].pay_status,
          id = this.lists[i].id;
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('fees/update_pay_status/' + id + '/' + status).then(function (res) {
        _this2.lists = res.data;

        _this2.getLists();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/fees.vue?vue&type=template&id=f893282c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/fees.vue?vue&type=template&id=f893282c& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Fees Details")]),
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
        _c("li", [_vm._v("Fees Details")])
      ])
    ]),
    _vm._v(" "),
    _vm.lists.length
      ? _c("div", { staticClass: "card height-auto mb-3" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
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
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.lists[i].pay_status,
                                  expression: "lists[i].pay_status"
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
                                    _vm.$set(
                                      _vm.lists[i],
                                      "pay_status",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.payStatus(i)
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "due" } }, [
                                _vm._v("Due")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "paid" } }, [
                                _vm._v("Paid")
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  }),
                  0
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("FEES AMOUNT")]),
        _vm._v(" "),
        _c("th", [_vm._v("MONTH")]),
        _vm._v(" "),
        _c("th", [_vm._v("Pay Status")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/student/fees.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/school-panel/student/fees.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fees_vue_vue_type_template_id_f893282c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fees.vue?vue&type=template&id=f893282c& */ "./resources/js/components/school-panel/student/fees.vue?vue&type=template&id=f893282c&");
/* harmony import */ var _fees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fees.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/student/fees.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _fees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fees_vue_vue_type_template_id_f893282c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fees_vue_vue_type_template_id_f893282c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/student/fees.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/student/fees.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/fees.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fees.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/fees.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/student/fees.vue?vue&type=template&id=f893282c&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/fees.vue?vue&type=template&id=f893282c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fees_vue_vue_type_template_id_f893282c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fees.vue?vue&type=template&id=f893282c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/fees.vue?vue&type=template&id=f893282c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fees_vue_vue_type_template_id_f893282c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fees_vue_vue_type_template_id_f893282c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
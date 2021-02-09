(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
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
      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_allowance"])().then(function (res) {
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
        Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["delete_allowance"])(id).then(function (res) {
          self.$toast.success(res.data.message);
          self.getRecords();
        });
      });
    }
  },
  watch: {
    "s": function s() {
      this.searchAfterDebounce();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=template&id=085e84f5&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=template&id=085e84f5& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                    name: "AddPayrollAllowance"
                  }
                }
              },
              [_vm._v("Add New")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [_vm._v("Allowance")]),
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
          _c("li", [_vm._v("Allowance")])
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
                  _vm.lists
                    ? _c("div", [
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
                              _vm._l(_vm.lists, function(listItem, gender) {
                                return [
                                  _c(
                                    "tbody",
                                    { key: gender },
                                    [
                                      _c("tr", [
                                        _c(
                                          "th",
                                          {
                                            staticClass: "bg-dark text-white",
                                            attrs: { colspan: "8" }
                                          },
                                          [_vm._v(_vm._s(gender))]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(listItem, function(allList, name) {
                                        return _vm._l(allList, function(
                                          list,
                                          j
                                        ) {
                                          return _c(
                                            "tr",
                                            {
                                              key: gender + "-" + name + "-" + j
                                            },
                                            [
                                              _c("td", [
                                                _vm._v(
                                                  "\n                                                    " +
                                                    _vm._s(1 + j) +
                                                    ".\n                                                "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              j == 0
                                                ? _c(
                                                    "td",
                                                    {
                                                      attrs: {
                                                        rowspan: allList.length
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(list.name) +
                                                          "\n                                                "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(_vm._s(list.from_amount))
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(_vm._s(list.to_amount))
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(_vm._s(list.type))
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(list.percent) + "%"
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(_vm._s(list.amount))
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                [
                                                  j == allList.length - 2
                                                    ? _c(
                                                        "b-button",
                                                        {
                                                          attrs: {
                                                            type: "button",
                                                            variant: "danger"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.deleteRecord(
                                                                list.id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-minus1"
                                                          }),
                                                          _vm._v(" Remove")
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        })
                                      })
                                    ],
                                    2
                                  )
                                ]
                              })
                            ],
                            2
                          )
                        ])
                      ])
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
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("From")]),
        _vm._v(" "),
        _c("th", [_vm._v("To")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Percent")]),
        _vm._v(" "),
        _c("th", [_vm._v("Upto Amount")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/payroll/Allowance.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/Allowance.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Allowance_vue_vue_type_template_id_085e84f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Allowance.vue?vue&type=template&id=085e84f5& */ "./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=template&id=085e84f5&");
/* harmony import */ var _Allowance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Allowance.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Allowance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Allowance_vue_vue_type_template_id_085e84f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Allowance_vue_vue_type_template_id_085e84f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/payroll/Allowance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Allowance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Allowance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Allowance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=template&id=085e84f5&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=template&id=085e84f5& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Allowance_vue_vue_type_template_id_085e84f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Allowance.vue?vue&type=template&id=085e84f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/Allowance.vue?vue&type=template&id=085e84f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Allowance_vue_vue_type_template_id_085e84f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Allowance_vue_vue_type_template_id_085e84f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
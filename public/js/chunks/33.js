(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fees/due.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fees/due.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
var school = localStorage.getItem('school');
var userId = localStorage.getItem('userId');
var token = localStorage.getItem('token');
var count = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      lists: {},
      check: [],
      s: '',
      class_id: '',
      departments: [],
      installments: [],
      ftypes: [],
      fees_for_new: [],
      fees_for_old: [],
      loaded: 0
    };
  },
  mounted: function mounted() {
    this.getRecords();
    this.getDepartments();
  },
  methods: {
    getDepartments: function getDepartments() {
      var _this = this;

      this.loaded = 0;
      axios.get('api/get-all-departments/?school=' + school).then(function (res) {
        _this.loaded = 1;
        _this.departments = res.data;
      });
    },
    getInstallments: function getInstallments() {
      var _this2 = this;

      this.loaded = 0;
      var installments = [],
          ftypes = [];
      axios.get('api/get-all-fees-installments/?school=' + school).then(function (res) {
        count++;
        _this2.loaded = 1;
        _this2.installments = res.data;
        installments = res.data;

        _this2.effectFeesInput();
      });
      axios.get('api/get-all-fees-type/?school=' + school).then(function (res) {
        count++;
        _this2.loaded = 1;
        _this2.ftypes = res.data;
        ftypes = res.data;

        _this2.effectFeesInput();
      });
    },
    effectFeesInput: function effectFeesInput() {
      var self = this;
    },
    getRecords: function getRecords(page) {
      var _this3 = this;

      if (typeof page === 'undefined') {
        page = 1;
      }

      axios.get('api/view-fees/?page=' + page + '&school=' + school).then(function (res) {
        _this3.loaded = 1;

        if (res.status) {
          _this3.lists = res.data.data;
        } else {
          _this3.errors = 1;
        }
      })["catch"](function (err) {
        _this3.loaded = 1;
        console.log(err);
      });
    },
    saveFees: function saveFees() {
      var _this4 = this;

      var new_fees = this.fees_for_new;
      var old_fees = this.fees_for_old;
      var params = {
        new_fees: this.fees_for_new,
        old_fees: this.fees_for_old,
        class_id: this.class_id,
        school: school
      };
      axios.post('api/add-fees/', params).then(function (res) {
        _this4.loaded = 1;

        if (res.status) {
          _this4.lists = res.data.data;
        } else {
          _this4.errors = 1;
        }
      })["catch"](function (err) {
        _this4.loaded = 1;
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fees/due.vue?vue&type=template&id=64c252dd&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fees/due.vue?vue&type=template&id=64c252dd& ***!
  \***********************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "add-fees-installment" } }
            },
            [_vm._v("Add New")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v("Fees")]),
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
        _c("li", [_vm._v("Fees")])
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
            return _vm.saveFees()
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "card height-auto" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h3", { staticClass: "card-title" }, [_vm._v("Options")]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Select Session")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.session,
                          expression: "session"
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
                          _vm.session = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    _vm._l(_vm.sessions, function(s) {
                      return _c("option", { domProps: { value: s.id } }, [
                        _vm._v(_vm._s(s.name))
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Select Class")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.class_id,
                          expression: "class_id"
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
                            _vm.class_id = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            return _vm.getInstallments()
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select a Class")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.departments, function(dept) {
                        return _c(
                          "optgroup",
                          { attrs: { label: dept.dept_name } },
                          _vm._l(dept.classes, function(cls) {
                            return _c(
                              "option",
                              { domProps: { value: cls.id } },
                              [_vm._v(_vm._s(cls.name))]
                            )
                          }),
                          0
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _vm.installments.length
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "fw-btn-fill btn-block btn-gradient-yellow text-white",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Save & Update")]
                    )
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.installments.length
            ? _c("div", { staticClass: "col-sm-9" }, [
                _c("div", { staticClass: "card height-auto mb-1" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h3", { staticClass: "card-title" }, [
                      _vm._v("Student Lists")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        { staticClass: "table table-striped table-sm" },
                        [
                          _c("thead", [
                            _c(
                              "tr",
                              [
                                _c("th", [_vm._v("#")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Name")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Father Name")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Roll No.")]),
                                _vm._v(" "),
                                _vm._l(_vm.installments, function(ins, index2) {
                                  return _c("th", [_vm._v(_vm._s(ins.name))])
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("tbody", [
                            _c(
                              "tr",
                              [
                                _c("td", [_vm._v("#")]),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _vm._l(_vm.ftypes, function(ft, index2) {
                                  return _c("td", [
                                    _vm.fees_for_new[_vm.index] &&
                                    _vm.fees_for_new[_vm.index].ftypes[index2]
                                      ? _c("div", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.fees_for_new[_vm.index]
                                                    .ftypes[index2].fees,
                                                expression:
                                                  "fees_for_new[index].ftypes[index2].fees"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "",
                                              min: "0"
                                            },
                                            domProps: {
                                              value:
                                                _vm.fees_for_new[_vm.index]
                                                  .ftypes[index2].fees
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.fees_for_new[_vm.index]
                                                    .ftypes[index2],
                                                  "fees",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ])
                                      : _vm._e()
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/fees/due.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/fees/due.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _due_vue_vue_type_template_id_64c252dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./due.vue?vue&type=template&id=64c252dd& */ "./resources/js/components/fees/due.vue?vue&type=template&id=64c252dd&");
/* harmony import */ var _due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./due.vue?vue&type=script&lang=js& */ "./resources/js/components/fees/due.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _due_vue_vue_type_template_id_64c252dd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _due_vue_vue_type_template_id_64c252dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fees/due.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/fees/due.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/fees/due.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./due.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fees/due.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fees/due.vue?vue&type=template&id=64c252dd&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/fees/due.vue?vue&type=template&id=64c252dd& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_due_vue_vue_type_template_id_64c252dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./due.vue?vue&type=template&id=64c252dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fees/due.vue?vue&type=template&id=64c252dd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_due_vue_vue_type_template_id_64c252dd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_due_vue_vue_type_template_id_64c252dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[189],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      s: '',
      limit: 10,
      checkAll: false,
      test: {
        check: [],
        fields: [{
          key: 'index',
          label: 'Sr. No.'
        }, {
          key: 'title',
          sortable: true
        }, {
          key: 'description'
        }]
      },
      tests: {}
    };
  },
  mounted: function mounted() {
    this.fetchTests();
  },
  methods: {
    searchAfterDebounce: _.debounce(function () {
      this.fetchTests();
    }, 500),
    selectAll: function selectAll() {
      this.test.check = [];

      if (!this.checkAll) {
        for (var index in this.tests.data) {
          if (!this.tests.data[index].stock) {
            this.test.check.push(this.tests.data[index].id);
          }
        }
      }
    },
    fetchTests: function fetchTests() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.tests = {};
      Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["view_test"])("page=".concat(page, "&limit=").concat(this.limit, "&s=").concat(this.s)).then(function (res) {
        _this.tests = res.data;
      });
    },
    deleteMultiple: function deleteMultiple() {
      var _this2 = this;

      if (this.test.check.length) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this record!",
          icon: "warning",
          buttons: true,
          dangerMode: true
        }).then(function (willDelete) {
          if (willDelete) {
            Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["multiple_delete_test"])({
              ids: _this2.test.check
            }).then(function (res) {
              _this2.$toast.success(res.data.message);

              _this2.fetchTests(1);
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
      this.fetchTests(1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=template&id=3db82b8e&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=template&id=3db82b8e& ***!
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
                    name: "AddTest"
                  }
                }
              },
              [_vm._v("Add Tests")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [_vm._v("View Tests")]),
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
                { attrs: { to: { name: "OnlineExamMaster" } } },
                [_vm._v("Online Exam Master")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [_vm._v("View Tests")])
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
      !_vm.tests.data
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
      _vm.tests.data
        ? _c(
            "div",
            [
              !_vm.tests.data.length
                ? _c("b-card", { staticClass: "h-auto" }, [
                    _vm._v("\n            No record(s) found.\n        ")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.tests.data.length
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
                                      _vm._s(_vm.tests.from) +
                                      " - " +
                                      _vm._s(_vm.tests.to) +
                                      " of " +
                                      _vm._s(_vm.tests.total) +
                                      " record(s) are showing.\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("a", {
                                  staticClass: "icon icon-delete text-dark",
                                  attrs: {
                                    href: "javascript:",
                                    title: "Remove Selected"
                                  },
                                  on: { click: _vm.deleteMultiple }
                                }),
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
                        1160238804
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
                              fields: _vm.test.fields,
                              items: _vm.tests.data,
                              striped: "",
                              bordered: ""
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "head(index)",
                                  fn: function(data) {
                                    return [
                                      _c("label", [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.checkAll,
                                              expression: "checkAll"
                                            }
                                          ],
                                          attrs: {
                                            type: "checkbox",
                                            value: "1"
                                          },
                                          domProps: {
                                            checked: Array.isArray(_vm.checkAll)
                                              ? _vm._i(_vm.checkAll, "1") > -1
                                              : _vm.checkAll
                                          },
                                          on: {
                                            click: _vm.selectAll,
                                            change: function($event) {
                                              var $$a = _vm.checkAll,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = "1",
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.checkAll = $$a.concat([
                                                      $$v
                                                    ]))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.checkAll = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.checkAll = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(data.label) +
                                            ".\n                        "
                                        )
                                      ])
                                    ]
                                  }
                                },
                                {
                                  key: "cell(index)",
                                  fn: function(data) {
                                    return [
                                      _c("label", [
                                        !data.item.stock
                                          ? _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.test.check,
                                                  expression: "test.check"
                                                }
                                              ],
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                value: data.item.id,
                                                checked: Array.isArray(
                                                  _vm.test.check
                                                )
                                                  ? _vm._i(
                                                      _vm.test.check,
                                                      data.item.id
                                                    ) > -1
                                                  : _vm.test.check
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a = _vm.test.check,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = data.item.id,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.test,
                                                          "check",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.test,
                                                          "check",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.test,
                                                      "check",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        data.item.stock
                                          ? _c("span", {
                                              staticClass: "icon-x-square"
                                            })
                                          : _vm._e(),
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              data.index + _vm.tests.from
                                            ) +
                                            ".\n                        "
                                        )
                                      ])
                                    ]
                                  }
                                },
                                {
                                  key: "cell(title)",
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
                                                  name: "EditTest",
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
                                                " " + _vm._s(data.item.title)
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                },
                                {
                                  key: "cell(description)",
                                  fn: function(data) {
                                    return [
                                      _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            data.item.description
                                          )
                                        }
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              160551141
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("pagination", {
                        attrs: { data: _vm.tests, limit: 2 },
                        on: { "pagination-change-page": _vm.fetchTests }
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

/***/ "./resources/js/components/school-panel/onlineexam/test/index.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/school-panel/onlineexam/test/index.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3db82b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3db82b8e& */ "./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=template&id=3db82b8e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3db82b8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3db82b8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/onlineexam/test/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=template&id=3db82b8e&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=template&id=3db82b8e& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3db82b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3db82b8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/test/index.vue?vue&type=template&id=3db82b8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3db82b8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3db82b8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
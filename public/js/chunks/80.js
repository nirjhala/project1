(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/assignment/manage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/assignment/manage.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      s: '',
      allClasses: [],
      classes: [],
      loaded: 0,
      subjectId: '',
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.title = this.$route.params.role;
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
      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_1__["default"].fetchAssignments(page, this.s);
      apiResponse.then(function (res) {
        _this.lists = res.data;
        _this.loaded = 1;
      })["catch"](function (err) {
        _this.loaded = 1;
        console.log(err);
      });
    },
    deleteRecord: function deleteRecord() {
      var _this2 = this;

      var params = {
        check: this.check
      };
      var parent = $(this).closest('form');

      if (this.check.length > 0) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this record!",
          icon: "warning",
          buttons: true,
          dangerMode: true
        }).then(function (willDelete) {
          if (willDelete) {
            _this2.loaded = 0;
            var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_1__["default"].deleteAssignments(params);
            apiResponse.then(function (res) {
              _this2.getRecords();

              _this2.$toast.success('Selected record(s) has been deleted.');
            })["catch"](function (err) {
              _this2.loaded = 1;
              console.log(err);
            });
          }
        });
      } else {
        this.loaded = 1;
        swal("Warning", "Please select at least one record to delete.", "warning");
        return false;
      }
    }
  },
  watch: {
    s: function s(val) {
      this.searchAfterDebounce();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/assignment/manage.vue?vue&type=template&id=8552b064&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/assignment/manage.vue?vue&type=template&id=8552b064& ***!
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
              attrs: { to: { name: "AssignmentIssue" } }
            },
            [_vm._v("Add New")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v("Manage Assignment")]),
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
            _c("router-link", { attrs: { to: { name: "AssignmentMaster" } } }, [
              _vm._v("Assignment Master")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v("Manage Assignment")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mg-b-20" }, [
      _c("div", { staticClass: "row gutters-8" }, [
        _c(
          "div",
          { staticClass: "col-4-xxxl col-xl-4 col-lg-3 col-12 form-group" },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.s,
                  expression: "s"
                }
              ],
              staticClass: "form-control bg-white",
              attrs: { type: "search", placeholder: "Search ..." },
              domProps: { value: _vm.s },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.s = $event.target.value
                }
              }
            })
          ]
        )
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
            return _vm.deleteRecord()
          }
        }
      },
      [
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
                  !_vm.lists.data || !_vm.lists.data.length
                    ? _c("div", { staticClass: "alert alert-warning" }, [
                        _c("i", { staticClass: "fa fa-exclamation-circle" }),
                        _vm._v(
                          "\n                        No record(s) found.\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.lists.data && _vm.lists.data.length
                    ? _c("div", [
                        _c("div", { staticClass: "heading-layout1" }, [
                          _c("div", { staticClass: "item-title" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.lists.from) +
                                " - " +
                                _vm._s(_vm.lists.to) +
                                " of " +
                                _vm._s(_vm.lists.total) +
                                " record(s) are showing\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(0)
                        ]),
                        _vm._v(" "),
                        _vm.lists
                          ? _c(
                              "div",
                              { staticClass: "table-responsive" },
                              [
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table display data-table text-nowrap"
                                  },
                                  [
                                    _c("thead", [
                                      _c("tr", [
                                        _c("th", [
                                          _c(
                                            "div",
                                            { staticClass: "form-check" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.allSelected,
                                                    expression: "allSelected"
                                                  }
                                                ],
                                                staticClass: "form-check-input",
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.allSelected
                                                  )
                                                    ? _vm._i(
                                                        _vm.allSelected,
                                                        null
                                                      ) > -1
                                                    : _vm.allSelected
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.checkAll()
                                                  },
                                                  change: function($event) {
                                                    var $$a = _vm.allSelected,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          (_vm.allSelected = $$a.concat(
                                                            [$$v]
                                                          ))
                                                      } else {
                                                        $$i > -1 &&
                                                          (_vm.allSelected = $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            ))
                                                      }
                                                    } else {
                                                      _vm.allSelected = $$c
                                                    }
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-check-label"
                                                },
                                                [_vm._v("Sr. No.")]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Name")]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Dates")]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Manage")])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.lists.data, function(list, i) {
                                        return _c("tr", { key: i }, [
                                          _c("td", [
                                            _c(
                                              "div",
                                              { staticClass: "form-check" },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.check,
                                                      expression: "check"
                                                    }
                                                  ],
                                                  key: _vm.lists.from + i,
                                                  staticClass:
                                                    "form-check-input",
                                                  attrs: { type: "checkbox" },
                                                  domProps: {
                                                    value: list.id,
                                                    checked: Array.isArray(
                                                      _vm.check
                                                    )
                                                      ? _vm._i(
                                                          _vm.check,
                                                          list.id
                                                        ) > -1
                                                      : _vm.check
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      var $$a = _vm.check,
                                                        $$el = $event.target,
                                                        $$c = $$el.checked
                                                          ? true
                                                          : false
                                                      if (Array.isArray($$a)) {
                                                        var $$v = list.id,
                                                          $$i = _vm._i($$a, $$v)
                                                        if ($$el.checked) {
                                                          $$i < 0 &&
                                                            (_vm.check = $$a.concat(
                                                              [$$v]
                                                            ))
                                                        } else {
                                                          $$i > -1 &&
                                                            (_vm.check = $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              ))
                                                        }
                                                      } else {
                                                        _vm.check = $$c
                                                      }
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "form-check-label"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.lists.from + i
                                                      ) + "."
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "UpdateAssignment",
                                                      params: { id: list.id }
                                                    },
                                                    "data-toggle": "tooltip",
                                                    title: "Edit"
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa fa-edit"
                                                  }),
                                                  _vm._v(
                                                    " " + _vm._s(list.name)
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c("div", [
                                              _c("strong", [
                                                _vm._v("Created At: ")
                                              ]),
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(list.created_at) +
                                                  "\n                                            "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("div", [
                                              _c("strong", [
                                                _vm._v("Last Updated At: ")
                                              ]),
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(list.updated_at) +
                                                  "\n                                            "
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "AllotAssignment",
                                                      params: { id: list.id }
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Allot Assignement (2)"
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      }),
                                      0
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("pagination", {
                                  attrs: { data: _vm.lists },
                                  on: {
                                    "pagination-change-page": _vm.getRecords
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-link text-dark removeBtn",
        attrs: { type: "submit", "data-toggle": "tooltip", title: "Remove" }
      },
      [_c("i", { staticClass: "fa fa-trash fa-2x" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/assignment/manage.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/school-panel/assignment/manage.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _manage_vue_vue_type_template_id_8552b064___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage.vue?vue&type=template&id=8552b064& */ "./resources/js/components/school-panel/assignment/manage.vue?vue&type=template&id=8552b064&");
/* harmony import */ var _manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/assignment/manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _manage_vue_vue_type_template_id_8552b064___WEBPACK_IMPORTED_MODULE_0__["render"],
  _manage_vue_vue_type_template_id_8552b064___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/assignment/manage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/assignment/manage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/assignment/manage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./manage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/assignment/manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/assignment/manage.vue?vue&type=template&id=8552b064&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/assignment/manage.vue?vue&type=template&id=8552b064& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_template_id_8552b064___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./manage.vue?vue&type=template&id=8552b064& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/assignment/manage.vue?vue&type=template&id=8552b064&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_template_id_8552b064___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_template_id_8552b064___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
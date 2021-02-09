(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/script */ "./resources/js/api/script.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      title: 'Users',
      errors: 0,
      section_id: '',
      exam_type_id: '',
      lists: {},
      allSelected: 0,
      check: [],
      s: '',
      allClasses: [],
      classes: [],
      custom_fields: [],
      loaded: 1,
      subjectId: '',
      search: {
        s: ''
      },
      custom_field: {},
      // All Dropdown Data
      exam_types: []
    }, _defineProperty(_ref, "classes", []), _defineProperty(_ref, "token", localStorage.getItem('token')), _ref;
  },
  mounted: function mounted() {
    this.title = this.$route.params.role; // this.getRecords()

    this.fetch_exam_types();
    this.fetch_all_classes();
  },
  methods: {
    searchAfterDebounce: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function () {
      this.getRecords();
    }, 500),
    fetch_exam_types: function fetch_exam_types() {
      var _this = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_exam_type"])('type=all').then(function (res) {
        _this.exam_types = res.data.types;
      })["catch"](function (err) {
        console.log("Errors: ", err);
      });
    },
    fetch_all_classes: function fetch_all_classes() {
      var _this2 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_all_classes"])().then(function (res) {
        _this2.classes = res.data;
      });
    },
    fetch_subjects: function fetch_subjects() {
      var _this3 = this;

      this.admit_card_subjects = [];

      if (this.admit_card.section_id) {
        _api_script__WEBPACK_IMPORTED_MODULE_1__["default"].fetchSubjectBySection(this.admit_card.section_id).then(function (res) {
          _this3.subjects = res.data;

          for (var id in _this3.subjects) {
            _this3.admit_card_subjects.push({
              subject_id: id,
              date: '',
              time: ''
            });
          }
        });
      }
    },
    checkAll: function checkAll() {
      var self = this;
      self.check = [];

      if (!self.allSelected) {
        $.each(self.lists.data, function (i, row) {
          self.check.push(row.id);
        });
      }
    },
    showAdmitCards: function showAdmitCards() {
      var _this4 = this;

      if (this.section_id && this.exam_type_id) {
        this.loaded = 0;
        Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_admit_card"])("section_id=".concat(this.section_id, "&exam_type_id=").concat(this.exam_type_id)).then(function (res) {
          _this4.lists = res.data;
          _this4.loaded = 1;
        });
      }
    },
    // getRecords (page) {
    //     if (typeof page === 'undefined') {
    //        page = 1;
    //     }
    //     this.loaded = 0;
    //     view_admit_card (`page=${page}&search=${this.search.s}`)
    //         .then(res => {
    //             this.lists = res.data
    //             this.loaded = 1
    //         })
    //         .catch(err => {
    //             this.loaded = 1
    //             console.log(err)
    //         })
    // },
    resetSearch: function resetSearch() {
      this.search = {
        s: ''
      };
      this.getRecords();
    },
    deleteRecord: function deleteRecord() {
      var _this5 = this;

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
            _this5.loaded = 0;
            Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["multiple_delete_tc"])(params).then(function (res) {
              _this5.getRecords();

              _this5.$toast.success('Selected record(s) has been deleted.');
            })["catch"](function (err) {
              _this5.loaded = 1;
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
    "search.s": function searchS() {
      this.searchAfterDebounce();
    },
    section_id: function section_id() {
      this.showAdmitCards();
    },
    exam_type_id: function exam_type_id() {
      this.showAdmitCards();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=template&id=5b6d00db&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=template&id=5b6d00db& ***!
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
                    name: "FillMarksheet"
                  }
                }
              },
              [_vm._v("Fill Marksheet")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [_vm._v("View Marksheet")]),
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
              _c("router-link", { attrs: { to: { name: "ExamMaster" } } }, [
                _vm._v("Exam Master")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [_vm._v("View Marksheet")])
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
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-form-group",
                      {
                        staticClass: "col-sm-6",
                        attrs: { label: "Class / Section *" }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.section_id,
                                expression: "section_id"
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
                                _vm.section_id = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Class")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.classes, function(c, i) {
                              return _c(
                                "optgroup",
                                {
                                  key: i,
                                  attrs: {
                                    label: c.dept.dept_name + " " + c.name
                                  }
                                },
                                _vm._l(c.sections, function(s, j) {
                                  return _c(
                                    "option",
                                    { key: j, domProps: { value: s.id } },
                                    [_vm._v(_vm._s(c.name + " - " + s.name))]
                                  )
                                }),
                                0
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("b-form-invalid-feedback", [
                          _vm._v("Please select class")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      {
                        staticClass: "col-sm-6",
                        attrs: { label: "Select Exam" }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.exam_type_id,
                                expression: "exam_type_id"
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
                                _vm.exam_type_id = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Exam")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.exam_types, function(name, id) {
                              return _c(
                                "option",
                                { key: id, domProps: { value: id } },
                                [_vm._v(_vm._s(name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("b-form-invalid-feedback", [
                          _vm._v("Please select exam")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                !_vm.loaded
                  ? _c("div", { staticClass: "text-center" }, [
                      _c("img", {
                        staticStyle: { "max-width": "100%" },
                        attrs: {
                          src: _vm.baseURL + "img/preloader.gif",
                          alt: ""
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.loaded
                  ? _c("div", [
                      _vm.lists.length
                        ? _c("div", [
                            _vm.lists
                              ? _c("div", { staticClass: "table-responsive" }, [
                                  _c(
                                    "table",
                                    {
                                      staticClass:
                                        "table display data-table text-nowrap"
                                    },
                                    [
                                      _vm._m(0),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        _vm._l(_vm.lists, function(list, i) {
                                          return _c("tr", { key: i }, [
                                            _c("td", [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-check-label"
                                                },
                                                [_vm._v(_vm._s(1 + i) + ".")]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(
                                                    list.student_data.roll_no
                                                  ) +
                                                  "\n                                        "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(list.name) +
                                                  "\n                                        "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  list.student_data.father_info
                                                    .name
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    href:
                                                      _vm.baseURL +
                                                      "api/student/marksheet/" +
                                                      list.id,
                                                    target: "_blank"
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "icon-print"
                                                  }),
                                                  _vm._v(
                                                    " Print Marksheet\n                                            "
                                                  )
                                                ]
                                              )
                                            ])
                                          ])
                                        }),
                                        0
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ],
              1
            )
          ])
        ]
      )
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
          _c("label", { staticClass: "form-check-label" }, [_vm._v("Sr. No.")])
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Roll No.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Father Name")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/examination/Marksheet.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/school-panel/examination/Marksheet.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Marksheet_vue_vue_type_template_id_5b6d00db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Marksheet.vue?vue&type=template&id=5b6d00db& */ "./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=template&id=5b6d00db&");
/* harmony import */ var _Marksheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marksheet.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Marksheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Marksheet_vue_vue_type_template_id_5b6d00db___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Marksheet_vue_vue_type_template_id_5b6d00db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/examination/Marksheet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marksheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Marksheet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marksheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=template&id=5b6d00db&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=template&id=5b6d00db& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Marksheet_vue_vue_type_template_id_5b6d00db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Marksheet.vue?vue&type=template&id=5b6d00db& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/examination/Marksheet.vue?vue&type=template&id=5b6d00db&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Marksheet_vue_vue_type_template_id_5b6d00db___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Marksheet_vue_vue_type_template_id_5b6d00db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
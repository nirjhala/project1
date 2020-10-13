(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/setting.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lms/setting.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: '',
      record: {},
      lists: {},
      allSelected: false,
      check: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    var params = this.$route.params;
    this.getInfo();
  },
  methods: {
    rerenderSelf: function rerenderSelf() {
      console.log("reload");
      this.$emit('rerender', 1);
    },
    getInfo: function getInfo() {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('lms/setting').then(function (res) {
        _this.id = res.data.id;
        _this.record = res.data;
        _this.loaded = 1;
        $('.select2').each(function () {
          $(this).trigger('change');
        });
      });
    },
    updateData: function updateData() {
      var _this2 = this;

      var params = {
        record: this.record
      },
          is_valid = $('#lms_settings').is_valid();

      if (is_valid) {
        this.loaded = 0;
        this.errors = [];
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('lms/setting', params).then(function (res) {
          _this2.loaded = 1;

          if (res.data.status) {
            _this2.record = {};

            _this2.$toast.success(res.data.message); // this.rerenderSelf();

          } else {
            _this2.errors = res.data.errors;
          }
        })["catch"](function (error) {
          _this2.loaded = 1;
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/setting.vue?vue&type=template&id=7d8ec450&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lms/setting.vue?vue&type=template&id=7d8ec450& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("LMS Setting")]),
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
        _c("li", [_vm._v("LMS Setting")])
      ])
    ]),
    _vm._v(" "),
    _vm.loaded
      ? _c("div", [
          !_vm.loaded
            ? _c("div", { staticClass: "text-center" }, [
                _c("img", {
                  staticStyle: { "max-width": "100%" },
                  attrs: {
                    src: _vm.baseURL + "img/preloader.gif",
                    alt: "Loading"
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              attrs: { id: "lms_settings", method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateData()
                }
              }
            },
            [
              _c("div", { staticClass: "card height-auto" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", [
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
                          !_vm.lists
                            ? _c(
                                "div",
                                { staticClass: "alert alert-warning" },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-exclamation-circle"
                                  }),
                                  _vm._v(
                                    "\r\n                                No record(s) found.\r\n                            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.lists
                            ? _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table table-bordered text-nowrap"
                                  },
                                  [
                                    _vm._m(0),
                                    _vm._v(" "),
                                    _c("tbody", [
                                      _c("tr", [
                                        _c("th", [_vm._v("Student")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.record
                                                    .student_issue_book_limit,
                                                expression:
                                                  "record.student_issue_book_limit"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "0",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.record
                                                  .student_issue_book_limit
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.record,
                                                  "student_issue_book_limit",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.record
                                                    .student_issue_time_limit,
                                                expression:
                                                  "record.student_issue_time_limit"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "0",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.record
                                                  .student_issue_time_limit
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.record,
                                                  "student_issue_time_limit",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.record
                                                    .student_fine_per_day,
                                                expression:
                                                  "record.student_fine_per_day"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "0",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.record.student_fine_per_day
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.record,
                                                  "student_fine_per_day",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Teacher")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.record
                                                    .teacher_issue_book_limit,
                                                expression:
                                                  "record.teacher_issue_book_limit"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "0",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.record
                                                  .teacher_issue_book_limit
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.record,
                                                  "teacher_issue_book_limit",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.record
                                                    .teacher_issue_time_limit,
                                                expression:
                                                  "record.teacher_issue_time_limit"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "0",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.record
                                                  .teacher_issue_time_limit
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.record,
                                                  "teacher_issue_time_limit",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.record
                                                    .teacher_fine_per_day,
                                                expression:
                                                  "record.teacher_fine_per_day"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "0",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.record.teacher_fine_per_day
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.record,
                                                  "teacher_fine_per_day",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Other")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.record
                                                    .other_issue_book_limit,
                                                expression:
                                                  "record.other_issue_book_limit"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "0",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.record
                                                  .other_issue_book_limit
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.record,
                                                  "other_issue_book_limit",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.record
                                                    .other_issue_time_limit,
                                                expression:
                                                  "record.other_issue_time_limit"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "0",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.record
                                                  .other_issue_time_limit
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.record,
                                                  "other_issue_time_limit",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.record.other_fine_per_day,
                                                expression:
                                                  "record.other_fine_per_day"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              value: "0",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.record.other_fine_per_day
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.record,
                                                  "other_fine_per_day",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ])
                                      ])
                                    ])
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._m(1)
                        ])
                      : _vm._e()
                  ])
                ])
              ])
            ]
          )
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
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Limit of Books")]),
        _vm._v(" "),
        _c("th", [_vm._v("Limit of Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fine per day")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group mg-t-8" }, [
      _c(
        "button",
        {
          staticClass: "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
          attrs: { type: "submit" }
        },
        [_vm._v("Update")]
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/lms/setting.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/lms/setting.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_vue_vue_type_template_id_7d8ec450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=7d8ec450& */ "./resources/js/components/lms/setting.vue?vue&type=template&id=7d8ec450&");
/* harmony import */ var _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js& */ "./resources/js/components/lms/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setting_vue_vue_type_template_id_7d8ec450___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setting_vue_vue_type_template_id_7d8ec450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lms/setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lms/setting.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/lms/setting.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lms/setting.vue?vue&type=template&id=7d8ec450&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/lms/setting.vue?vue&type=template&id=7d8ec450& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_7d8ec450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=7d8ec450& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/setting.vue?vue&type=template&id=7d8ec450&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_7d8ec450___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_7d8ec450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
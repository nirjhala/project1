(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[164],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/timetable/teacher.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/timetable/teacher.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      teacher: '',
      teacher_name: '',
      teachers: [],
      timeslots: [],
      weekdays: [],
      lists: [],
      allSelected: 0,
      check: [],
      s: '',
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.getTeachers();
  },
  methods: {
    printTimeTable: function printTimeTable() {
      var divToPrint = document.getElementById('timetable');
      var newWin = window.open('', 'Time-Table', "width=800,height=600");
      newWin.document.open();
      var html = "\n            <html>\n                <head>\n                    <title>Time-Table</title>\n                    <style>\n                    body {\n                        margin:0;\n                        font-family: sans-serif;\n                    }\n                    table {\n                        width: 100%;\n                        border-collapse: collapse;\n                    }\n                    table, th, td {\n                        border: 1px solid #000;\n                        padding: 5px 10px;\n                        font-size: 12px;\n                    }\n                    th {\n                        background: #555;\n                        color: #fff;\n                    }\n                    .text-center {\n                        text-align: center;\n                    }\n                    div.table-responsive {\n                        margin: 10px;\n                        padding: 10px;\n                        border: 1px solid #000;\n                    }\n                    h4 {\n                        margin-top: 20px;\n                    }\n                    @page {\n                        margin: 0;\n                        size: landscape;\n                    }\n                    </style>\n                </head>\n                <body onload=\"window.print()\">".concat(divToPrint.innerHTML, "</body>\n            </html>");
      newWin.document.write(html);
      newWin.document.close();
      setTimeout(function () {
        newWin.close();
      }, 10);
    },
    getTeachers: function getTeachers() {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-teachers').then(function (res) {
        _this.teachers = res.data;
      });
    },
    getTimetable: function getTimetable() {
      var _this2 = this;

      var params = {
        'teacher_id': this.teacher
      };
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('view-teacher-timetable', params).then(function (res) {
        _this2.loaded = 1;

        if (res.status) {
          _this2.timeslots = res.data.timeslots;
          _this2.lists = res.data.data;
          _this2.weekdays = res.data.weekdays;
          _this2.teacher_name = res.data.teacher_name;
        } else {
          _this2.errors = 1;
        }
      })["catch"](function (err) {
        _this2.loaded = 1;
        console.log(err);
      });
    },
    deleteRecord: function deleteRecord() {
      var _this3 = this;

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
            _this3.loaded = 0;
            var instance = axios.create({
              baseURL: _this3.apiBaseUrl,
              headers: {
                'Authorization': 'Bearer ' + _this3.token,
                'Accept': 'application/json'
              }
            });
            instance.post('remove-vehicle', params).then(function (res) {
              if (res.status) {
                _this3.getRecords();

                _this3.$toast.success('Selected record(s) has been deleted.');
              } else {
                _this3.loaded = 1;

                _this3.$toast.warning('Record(s) unable to delete.');
              }
            })["catch"](function (err) {
              _this3.loaded = 1;
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/timetable/teacher.vue?vue&type=template&id=9888a94a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/timetable/teacher.vue?vue&type=template&id=9888a94a& ***!
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
      _c("h3", [_vm._v("Teacher Timetable")]),
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
        _c("li", [_vm._v("Teacher Timetable")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mg-b-20" }, [
      _c("div", { staticClass: "row gutters-8" }, [
        _c(
          "div",
          { staticClass: "col-4-xxxl col-xl-4 col-lg-3 col-12 form-group" },
          [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.teacher,
                    expression: "teacher"
                  }
                ],
                staticClass: "form-control",
                attrs: { required: "" },
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
                      _vm.teacher = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      return _vm.getTimetable()
                    }
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select Teacher")
                ]),
                _vm._v(" "),
                _vm._l(_vm.teachers, function(t, i) {
                  return _c("option", { key: i, domProps: { value: t.id } }, [
                    _vm._v(_vm._s(t.name) + " - " + _vm._s(t.mobile))
                  ])
                })
              ],
              2
            )
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
        _vm.teacher
          ? _c("div", { staticClass: "card height-auto" }, [
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
                      _c("div", { attrs: { id: "timetable" } }, [
                        _c("h4", { staticClass: "text-center" }, [
                          _vm._v("Time-Table of " + _vm._s(_vm.teacher_name))
                        ]),
                        _vm._v(" "),
                        _vm.lists
                          ? _c("div", { staticClass: "table-responsive" }, [
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table display table-bordered text-nowrap"
                                },
                                [
                                  _c("thead", [
                                    _c(
                                      "tr",
                                      [
                                        _c(
                                          "th",
                                          {
                                            staticClass:
                                              "text-center bg-dark text-white"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                            Day\n                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.weekdays, function(w, i) {
                                          return _c(
                                            "th",
                                            {
                                              key: i,
                                              staticClass:
                                                "text-center bg-dark text-white"
                                            },
                                            [_vm._v(_vm._s(w))]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.lists, function(x, i) {
                                      return _c(
                                        "tr",
                                        { key: "slot" + i },
                                        [
                                          _c(
                                            "th",
                                            {
                                              staticClass:
                                                "text-center bg-dark text-white"
                                            },
                                            [
                                              _c("div", [
                                                _vm._v(_vm._s(x.timeslot))
                                              ]),
                                              _vm._v(" "),
                                              _c("div", [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(x.timeslot_time) +
                                                    "\n                                            "
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.weekdays, function(w, j) {
                                            return _c(
                                              "td",
                                              {
                                                key: "wk" + j,
                                                staticClass: "text-center"
                                              },
                                              [
                                                _c("div", [
                                                  _c("strong", [
                                                    _vm._v(
                                                      _vm._s(
                                                        x[w] &&
                                                          x[w].subject_info
                                                          ? x[w].subject_info
                                                              .name
                                                          : "-"
                                                      )
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _vm._v(
                                                    _vm._s(
                                                      x[w] && x[w].section_info
                                                        ? "(" +
                                                            x[w].section_info
                                                              .cls.name +
                                                            " - " +
                                                            x[w].section_info
                                                              .name +
                                                            ")"
                                                        : ""
                                                    )
                                                  )
                                                ])
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.printTimeTable()
                              }
                            }
                          },
                          [_vm._v(" Print ")]
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ])
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/timetable/teacher.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/school-panel/timetable/teacher.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _teacher_vue_vue_type_template_id_9888a94a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher.vue?vue&type=template&id=9888a94a& */ "./resources/js/components/school-panel/timetable/teacher.vue?vue&type=template&id=9888a94a&");
/* harmony import */ var _teacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/timetable/teacher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _teacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _teacher_vue_vue_type_template_id_9888a94a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _teacher_vue_vue_type_template_id_9888a94a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/timetable/teacher.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/timetable/teacher.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/timetable/teacher.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./teacher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/timetable/teacher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/timetable/teacher.vue?vue&type=template&id=9888a94a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/timetable/teacher.vue?vue&type=template&id=9888a94a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_vue_vue_type_template_id_9888a94a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./teacher.vue?vue&type=template&id=9888a94a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/timetable/teacher.vue?vue&type=template&id=9888a94a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_vue_vue_type_template_id_9888a94a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_vue_vue_type_template_id_9888a94a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
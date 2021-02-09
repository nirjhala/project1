(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/attendence/student.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/attendence/student.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;
var currentDate = [year, month, day].join('-');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      department: '',
      section: '',
      departments: [],
      classes: [],
      students: [],
      attendence: [],
      lists: [],
      attd_date: currentDate,
      maxDate: currentDate,
      s: '',
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.getDepts();
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
    saveAttendence: function saveAttendence() {
      var _this = this;

      var params = {
        'attendence': this.attendence,
        'date': this.attd_date,
        'section': this.section
      };
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('save-attendence', params).then(function (res) {
        _this.$toast.success('Attendence saved.');
      });
    },
    getDepts: function getDepts() {
      var _this2 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-departments').then(function (res) {
        _this2.departments = res.data.data;
      });
    },
    getClasses: function getClasses() {
      var _this3 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-class-by-dept/' + this.department).then(function (res) {
        _this3.classes = res.data;
      });
    },
    getStudents: function getStudents() {
      var _this4 = this;

      if (this.section) {
        var params = {
          section: this.section,
          date: this.attd_date
        };
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('attd-students', params).then(function (res) {
          _this4.loaded = 1;

          if (res.status) {
            _this4.students = res.data.data;
            _this4.attendence = res.data.attendees;

            if (typeof res.data.attendees === 'undefined' || res.data.attendees.length == 0) {
              _this4.students.forEach(function (i, row) {
                this.students[i].attd_count = 1;
              });
            }
          } else {
            _this4.errors = 1;
          }
        })["catch"](function (err) {
          _this4.loaded = 1;
          console.log(err);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/attendence/student.vue?vue&type=template&id=40103e8c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/attendence/student.vue?vue&type=template&id=40103e8c& ***!
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
      _c("h3", [_vm._v("Student Attendence")]),
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
        _c("li", [_vm._v("Student Attendence")])
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
                  value: _vm.attd_date,
                  expression: "attd_date"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "date",
                max: _vm.maxDate,
                placeholder: "Date",
                value: ""
              },
              domProps: { value: _vm.attd_date },
              on: {
                change: function($event) {
                  return _vm.getStudents()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.attd_date = $event.target.value
                }
              }
            })
          ]
        ),
        _vm._v(" "),
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
                    value: _vm.department,
                    expression: "department"
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
                      _vm.department = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      return _vm.getClasses()
                    }
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select Department")
                ]),
                _vm._v(" "),
                _vm._l(_vm.departments, function(d) {
                  return _c(
                    "option",
                    { key: d.id, domProps: { value: d.id } },
                    [_vm._v(_vm._s(d.dept_name))]
                  )
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
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
                    value: _vm.section,
                    expression: "section"
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
                      _vm.section = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      return _vm.getStudents()
                    }
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select Class / Section")
                ]),
                _vm._v(" "),
                _vm._l(_vm.classes, function(cls) {
                  return _c(
                    "optgroup",
                    { key: cls.id, attrs: { label: cls.name } },
                    _vm._l(cls.sections, function(s) {
                      return _c(
                        "option",
                        { key: s.id, domProps: { value: s.id } },
                        [_vm._v(_vm._s(cls.name) + " - " + _vm._s(s.name))]
                      )
                    }),
                    0
                  )
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
            return _vm.saveAttendence()
          }
        }
      },
      [
        _vm.section
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
                        _vm.lists
                          ? _c("div", { staticClass: "table-responsive" }, [
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table display table-bordered table-sm text-nowrap"
                                },
                                [
                                  _vm._m(0),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.students, function(x, i) {
                                      return _c("tr", { key: i }, [
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(i + 1) +
                                                "\n                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(x.name))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                x.student_data &&
                                                  x.student_data.father_info
                                                  ? x.student_data.father_info
                                                      .name
                                                  : ""
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "onoffswitch d-inline-block my-1"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.attendence,
                                                      expression: "attendence"
                                                    }
                                                  ],
                                                  key: i,
                                                  staticClass:
                                                    "onoffswitch-checkbox",
                                                  attrs: {
                                                    type: "checkbox",
                                                    id: "attd_btn" + x.id,
                                                    tabindex: i
                                                  },
                                                  domProps: {
                                                    value: x.id,
                                                    checked: x.attd_count,
                                                    checked: Array.isArray(
                                                      _vm.attendence
                                                    )
                                                      ? _vm._i(
                                                          _vm.attendence,
                                                          x.id
                                                        ) > -1
                                                      : _vm.attendence
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      var $$a = _vm.attendence,
                                                        $$el = $event.target,
                                                        $$c = $$el.checked
                                                          ? true
                                                          : false
                                                      if (Array.isArray($$a)) {
                                                        var $$v = x.id,
                                                          $$i = _vm._i($$a, $$v)
                                                        if ($$el.checked) {
                                                          $$i < 0 &&
                                                            (_vm.attendence = $$a.concat(
                                                              [$$v]
                                                            ))
                                                        } else {
                                                          $$i > -1 &&
                                                            (_vm.attendence = $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              ))
                                                        }
                                                      } else {
                                                        _vm.attendence = $$c
                                                      }
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "onoffswitch-label m-0 text-left",
                                                    attrs: {
                                                      for: "attd_btn" + x.id
                                                    }
                                                  },
                                                  [
                                                    _c("span", {
                                                      staticClass:
                                                        "onoffswitch-inner"
                                                    }),
                                                    _vm._v(" "),
                                                    _c("span", {
                                                      staticClass:
                                                        "onoffswitch-switch"
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ])
                  : _vm._e()
              ])
            ])
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-dark" }, [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [
          _vm._v(
            "\n                                            #\n                                        "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("NAME")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("FATHER")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Attendence")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
          attrs: { type: "submit" }
        },
        [_vm._v(" Save ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/attendence/student.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/school-panel/attendence/student.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _student_vue_vue_type_template_id_40103e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.vue?vue&type=template&id=40103e8c& */ "./resources/js/components/school-panel/attendence/student.vue?vue&type=template&id=40103e8c&");
/* harmony import */ var _student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/attendence/student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _student_vue_vue_type_template_id_40103e8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _student_vue_vue_type_template_id_40103e8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/attendence/student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/attendence/student.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/attendence/student.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/attendence/student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/attendence/student.vue?vue&type=template&id=40103e8c&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/attendence/student.vue?vue&type=template&id=40103e8c& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_template_id_40103e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./student.vue?vue&type=template&id=40103e8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/attendence/student.vue?vue&type=template&id=40103e8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_template_id_40103e8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_template_id_40103e8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
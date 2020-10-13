(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/idcard/student.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/idcard/student.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var user_info = localStorage.getItem('user_info');
user_info = JSON.parse(user_info);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      department: '',
      section: '',
      departments: [],
      classes: [],
      students: [],
      lists: [],
      s: '',
      user_info: user_info,
      logo_src: baseURL + 'img/logo.png',
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.getDepts();

    if (user_info.school_data && user_info.school_data.logo) {
      this.logo_src = this.baseURL + 'img/profiles/' + user_info.school_data.logo;
    }
  },
  methods: {
    printIdCards: function printIdCards() {
      var divToPrint = document.getElementById('divToPrint');
      var newWin = window.open('', 'Time-Table', "width=800,height=600");
      newWin.document.open();
      var html = "\n            <html>\n                <head>\n                    <title>ID-CARD</title>\n                    <style>\n                    body {\n                        margin:0;\n                        font-family: sans-serif;\n                        background: #ebebeb;\n                    }\n                    @page {\n                        size: A4 landscape;\n                        margin: 0;\n                    }\n                    </style>\n                </head>\n                <body onload=\"window.print()\">".concat(divToPrint.innerHTML, "</body>\n            </html>");
      newWin.document.write(html);
      newWin.document.close();
      setTimeout(function () {
        newWin.close();
      }, 10);
    },
    getDepts: function getDepts() {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-departments').then(function (res) {
        _this.departments = res.data.data;
      });
    },
    getClasses: function getClasses() {
      var _this2 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-class-by-dept/' + this.department).then(function (res) {
        _this2.classes = res.data;
      });
    },
    getStudents: function getStudents() {
      var _this3 = this;

      // let params = {
      //     'department': this.department,
      //     'section': this.section,
      // };
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-student-by-section/' + this.section).then(function (res) {
        _this3.loaded = 1;

        if (res.status) {
          _this3.students = res.data;
        } else {
          _this3.errors = 1;
        }
      })["catch"](function (err) {
        _this3.loaded = 1;
        console.log(err);
      });
    },
    deleteRecord: function deleteRecord() {
      var _this4 = this;

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
            _this4.loaded = 0;
            var instance = axios.create({
              baseURL: _this4.apiBaseUrl,
              headers: {
                'Authorization': 'Bearer ' + _this4.token,
                'Accept': 'application/json'
              }
            });
            instance.post('remove-vehicle', params).then(function (res) {
              if (res.status) {
                _this4.getRecords();

                _this4.$toast.success('Selected record(s) has been deleted.');
              } else {
                _this4.loaded = 1;

                _this4.$toast.warning('Record(s) unable to delete.');
              }
            })["catch"](function (err) {
              _this4.loaded = 1;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/idcard/student.vue?vue&type=template&id=4f045b3c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/idcard/student.vue?vue&type=template&id=4f045b3c& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Student Id-Card")]),
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
        _c("li", [_vm._v("Student Id-Card")])
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
                  return _c("option", { domProps: { value: d.id } }, [
                    _vm._v(_vm._s(d.dept_name))
                  ])
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
                    { attrs: { label: cls.name } },
                    _vm._l(cls.sections, function(s) {
                      return _c("option", { domProps: { value: s.id } }, [
                        _vm._v(_vm._s(cls.name) + " - " + _vm._s(s.name))
                      ])
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
    _vm.section
      ? _c("form", { attrs: { method: "post" } }, [
          _c("div", { staticClass: "card height-auto" }, [
            _c("div", { attrs: { id: "divToPrint" } }, [
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
                ? _c(
                    "div",
                    {
                      staticStyle: {
                        "margin-left": "auto",
                        "margin-right": "auto",
                        display: "flex",
                        "flex-wrap": "wrap"
                      }
                    },
                    [
                      _vm._l(_vm.students, function(s, i) {
                        return _c(
                          "div",
                          {
                            style:
                              i % 5 == 0
                                ? "margin: 0px 5px; width: calc(20% - 10px); page-break-after: always"
                                : "margin: 0px 5px; width: calc(20% - 10px);"
                          },
                          [
                            i % 6 == 0
                              ? _c("div", {
                                  staticStyle: { "page-break-before": "always" }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "border-radius": "8px",
                                  "background-color": "#fff",
                                  height: "338.67px",
                                  width: "212.67px",
                                  position: "relative",
                                  overflow: "hidden",
                                  margin: "auto"
                                }
                              },
                              [
                                _c("div", {}, [_vm._v("   ")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      background: "#2980b9",
                                      padding: "5px 10px",
                                      margin: "10px 0 20px 0",
                                      position: "relative",
                                      color: "#fff"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          position: "absolute",
                                          width: "60px",
                                          height: "60px",
                                          top: "50%",
                                          transform: "translateY(-50%)",
                                          background: "#fff",
                                          border: "1px solid #ccc",
                                          "border-radius": "50%"
                                        }
                                      },
                                      [
                                        _c("img", {
                                          staticStyle: {
                                            width: "100%",
                                            height: "100%",
                                            "object-fit": "contain"
                                          },
                                          attrs: { src: _vm.logo_src, alt: "" }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "font-size": "0.6em",
                                          "padding-left": "60px",
                                          "font-weight": "bold",
                                          "text-align": "center",
                                          "text-transform": "uppercase"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              s.parent_school.school_data.name
                                            ) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(0, true),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      width: "90px",
                                      height: "100px",
                                      border: "1px solid #ccc",
                                      "border-radius": "10px",
                                      overflow: "hidden",
                                      position: "absolute",
                                      top: "50%",
                                      left: "50%",
                                      transform: "translate(-50%, -50%)",
                                      "z-index": "2",
                                      background: "#fff"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticStyle: {
                                        width: "100%",
                                        height: "100%",
                                        "object-fit": "cover"
                                      },
                                      attrs: { src: s.picture, alt: "" }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      background: "#2980b9",
                                      color: "#fff",
                                      padding: "15px",
                                      "padding-top": "55px",
                                      position: "absolute",
                                      left: "0",
                                      right: "0",
                                      bottom: "0",
                                      top: "50%",
                                      "z-index": "1",
                                      "font-size": "0.5em"
                                    }
                                  },
                                  [
                                    _c(
                                      "table",
                                      {
                                        staticStyle: {
                                          width: "100%",
                                          "font-size": "8px",
                                          color: "#fff",
                                          "text-transform": "uppercase"
                                        }
                                      },
                                      [
                                        _c("tr", [
                                          _c(
                                            "th",
                                            {
                                              staticStyle: {
                                                "text-align": "left"
                                              },
                                              attrs: { width: "40%" }
                                            },
                                            [_vm._v("NAME")]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(": " + _vm._s(s.name))
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "th",
                                            {
                                              staticStyle: {
                                                "text-align": "left"
                                              }
                                            },
                                            [_vm._v("FATHER")]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              ": " +
                                                _vm._s(
                                                  s.student_data.father_info
                                                    .name
                                                )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "th",
                                            {
                                              staticStyle: {
                                                "text-align": "left"
                                              }
                                            },
                                            [_vm._v("CONTACT")]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              ": " +
                                                _vm._s(
                                                  s.student_data.father_info
                                                    .mobile
                                                )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "th",
                                            {
                                              staticStyle: {
                                                "text-align": "left"
                                              }
                                            },
                                            [_vm._v("DOB")]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(": " + _vm._s(s.dob))
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _vm._m(1, true),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "td",
                                            {
                                              staticStyle: {
                                                "text-align": "center"
                                              },
                                              attrs: { colspan: "2" }
                                            },
                                            [_vm._v(_vm._s(s.full_address))]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticStyle: {
                                margin: "50px 0",
                                "border-top": "1px solid #000"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "border-radius": "8px",
                                  background: "#fff",
                                  height: "338.67px",
                                  width: "212.67px",
                                  position: "relative",
                                  overflow: "hidden",
                                  margin: "auto"
                                }
                              },
                              [
                                _c("div", {}, [_vm._v("   ")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      background: "#2980b9",
                                      padding: "5px 10px",
                                      margin: "10px 0 20px 0",
                                      position: "relative",
                                      color: "#fff"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          position: "absolute",
                                          width: "60px",
                                          height: "60px",
                                          top: "50%",
                                          transform: "translateY(-50%)",
                                          background: "#fff",
                                          border: "1px solid #ccc",
                                          "border-radius": "50%"
                                        }
                                      },
                                      [
                                        _c("img", {
                                          staticStyle: {
                                            width: "100%",
                                            height: "100%",
                                            "object-fit": "contain"
                                          },
                                          attrs: { src: _vm.logo_src, alt: "" }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "font-size": "0.6em",
                                          "padding-left": "60px",
                                          "font-weight": "bold",
                                          "text-align": "center",
                                          "text-transform": "uppercase"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              s.parent_school.school_data.name
                                            ) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(2, true),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticStyle: {
                                      "font-size": "10px",
                                      "list-style": "inside disc",
                                      padding: "5px 15px"
                                    }
                                  },
                                  _vm._l(
                                    s.parent_school.school_data
                                      .student_id_instructions,
                                    function(ins) {
                                      return _c("li", [
                                        _vm._v(_vm._s(ins) + ".")
                                      ])
                                    }
                                  ),
                                  0
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticStyle: { "text-align": "center" } },
                                  [
                                    _c("div", [
                                      _c("img", {
                                        attrs: { src: s.barcode_image, alt: "" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "letter-spacing": "5px",
                                          "font-size": "8px",
                                          margin: "2px 0"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(s.barcode) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticStyle: {
                                    background: "#2980b9",
                                    color: "#fff",
                                    padding: "5px 10px",
                                    position: "absolute",
                                    left: "0",
                                    right: "0",
                                    bottom: "0",
                                    "z-index": "1"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c("div", { staticStyle: { clear: "both" } })
                    ],
                    2
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn-main",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.printIdCards()
                    }
                  }
                },
                [_vm._v("Print")]
              )
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
    return _c("div", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_c("u", [_vm._v("ID-CARD")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "th",
        {
          staticStyle: { "text-align": "center" },
          attrs: { colspan: "2", valign: "top" }
        },
        [_vm._v("ADDRESS")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_c("u", [_vm._v("TERMS")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/idcard/student.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/idcard/student.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _student_vue_vue_type_template_id_4f045b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.vue?vue&type=template&id=4f045b3c& */ "./resources/js/components/idcard/student.vue?vue&type=template&id=4f045b3c&");
/* harmony import */ var _student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.vue?vue&type=script&lang=js& */ "./resources/js/components/idcard/student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _student_vue_vue_type_template_id_4f045b3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _student_vue_vue_type_template_id_4f045b3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/idcard/student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/idcard/student.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/idcard/student.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/idcard/student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/idcard/student.vue?vue&type=template&id=4f045b3c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/idcard/student.vue?vue&type=template&id=4f045b3c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_template_id_4f045b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./student.vue?vue&type=template&id=4f045b3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/idcard/student.vue?vue&type=template&id=4f045b3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_template_id_4f045b3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_template_id_4f045b3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
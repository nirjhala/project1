(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[176],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student-panel/timetable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/student-panel/timetable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      department: '',
      section: '',
      class_full_name: '',
      departments: [],
      classes: [],
      timeslots: [],
      weekdays: [],
      lists: [],
      allSelected: 0,
      check: [],
      subject: {},
      teacher: {},
      subject_lists: [],
      teacher_lists: [],
      s: '',
      loaded: 0,
      editFlag: false,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.getTimetable();
  },
  methods: {
    printTimeTable: function printTimeTable() {
      var divToPrint = document.getElementById('timetable');
      var newWin = window.open('', 'Time-Table', "width=800,height=600");
      newWin.document.open();
      var html = "\n            <html>\n                <head>\n                    <title>Time-Table</title>\n                    <style>\n                    body {\n                        margin:0;\n                        font-family: sans-serif;\n                    }\n                    table {\n                        width: 100%;\n                        border-collapse: collapse;\n                    }\n                    table, th, td {\n                        border: 1px solid #000;\n                        padding: 5px 10px;\n                        font-size: 8px;\n                    }\n                    th {\n                        background: #555;\n                        color: #fff;\n                    }\n                    .text-center {\n                        text-align: center;\n                    }\n                    div.table-responsive {\n                        margin: 15px;\n                        padding: 10px;\n                        border: 1px solid #000;\n                    }\n                    h4 {\n                        margin-top: 20px;\n                        text-align: center;\n                    }\n                    button {\n                        display: none;\n                    }\n                    @page {\n                        margin: 0;\n                        size: A4 landscape;\n                    }\n                    </style>\n                </head>\n                <body onload=\"window.print()\">".concat(divToPrint.innerHTML, "</body>\n            </html>");
      newWin.document.write(html);
      newWin.document.close();
      setTimeout(function () {
        newWin.close();
      }, 10);
    },
    getTimetable: function getTimetable() {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      var self = this;
      instance.post('timetable/student').then(function (res) {
        self.loaded = 1;

        if (res.status) {
          self.timeslots = res.data.timeslots;
          self.lists = res.data.data;
          self.weekdays = res.data.weekdays;
          self.class_full_name = res.data.class_full_name;
        } else {
          self.errors = 1;
        }
      })["catch"](function (err) {
        _this.loaded = 1;
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student-panel/timetable.vue?vue&type=template&id=030a2cc9&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/student-panel/timetable.vue?vue&type=template&id=030a2cc9& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Time Table")]),
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
        _c("li", [_vm._v("Time Table")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card height-auto" }, [
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
                _c("h4", [
                  _vm._v("Time-Table for Class " + _vm._s(_vm.class_full_name))
                ]),
                _vm._v(" "),
                _vm.lists
                  ? _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        {
                          staticClass:
                            "table display table-bordered text-nowrap",
                          staticStyle: { "font-size": "10px" }
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
                                      "\n                                        Day\n                                    "
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
                                { key: i },
                                [
                                  _c(
                                    "th",
                                    {
                                      staticClass:
                                        "text-center bg-dark text-white"
                                    },
                                    [
                                      _c("div", [_vm._v(_vm._s(x.timeslot))]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(x.timeslot_time) +
                                            "\n                                        "
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.weekdays, function(w, i) {
                                    return _c(
                                      "td",
                                      { key: i, staticClass: "text-center" },
                                      [
                                        _c("div", [
                                          _c("div", [
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(
                                                  x[w] && x[w].subject_info
                                                    ? x[w].subject_info.name
                                                    : "-"
                                                )
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("div", [
                                            _vm._v(
                                              _vm._s(
                                                x[w] && x[w].teacher_info
                                                  ? "(" +
                                                      x[w].teacher_info.name +
                                                      ")"
                                                  : ""
                                              )
                                            )
                                          ])
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
                !_vm.editFlag
                  ? _c(
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
                  : _vm._e(),
                _vm._v(" "),
                _vm.editFlag
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.updateData()
                          }
                        }
                      },
                      [_vm._v("Save & Update")]
                    )
                  : _vm._e()
              ])
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/student-panel/timetable.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/student-panel/timetable.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timetable_vue_vue_type_template_id_030a2cc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable.vue?vue&type=template&id=030a2cc9& */ "./resources/js/components/student-panel/timetable.vue?vue&type=template&id=030a2cc9&");
/* harmony import */ var _timetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.vue?vue&type=script&lang=js& */ "./resources/js/components/student-panel/timetable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _timetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _timetable_vue_vue_type_template_id_030a2cc9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _timetable_vue_vue_type_template_id_030a2cc9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/student-panel/timetable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/student-panel/timetable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/student-panel/timetable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./timetable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student-panel/timetable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/student-panel/timetable.vue?vue&type=template&id=030a2cc9&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/student-panel/timetable.vue?vue&type=template&id=030a2cc9& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timetable_vue_vue_type_template_id_030a2cc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./timetable.vue?vue&type=template&id=030a2cc9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student-panel/timetable.vue?vue&type=template&id=030a2cc9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timetable_vue_vue_type_template_id_030a2cc9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timetable_vue_vue_type_template_id_030a2cc9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/attendence/staff.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/attendence/staff.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
      users: [],
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
    this.getStaffs();
  },
  methods: {
    saveAttendence: function saveAttendence() {
      var _this = this;

      var params = {
        'attendence': this.attendence,
        'date': this.attd_date,
        'role': 'staff'
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
    getStaffs: function getStaffs() {
      var _this2 = this;

      if (this.attd_date) {
        var params = {
          date: this.attd_date
        };
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('attd-users/Staff', params).then(function (res) {
          _this2.loaded = 1;

          if (res.status) {
            _this2.users = res.data.data;
            _this2.attendence = res.data.attendees;
          } else {
            _this2.errors = 1;
          }
        })["catch"](function (err) {
          _this2.loaded = 1;
          console.log(err);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/attendence/staff.vue?vue&type=template&id=a7369ffe&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/attendence/staff.vue?vue&type=template&id=a7369ffe& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Staff Attendence")]),
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
        _c("li", [_vm._v("Staff Attendence")])
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
                  return _vm.getStaffs()
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
        _vm.attd_date
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
                                    _vm._l(_vm.users, function(x, i) {
                                      return _c("tr", [
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
                                          [_vm._v(_vm._s(x.mobile))]
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
        _c("th", { staticClass: "text-center" }, [_vm._v("CONTACT")]),
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

/***/ "./resources/js/components/attendence/staff.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/attendence/staff.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _staff_vue_vue_type_template_id_a7369ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff.vue?vue&type=template&id=a7369ffe& */ "./resources/js/components/attendence/staff.vue?vue&type=template&id=a7369ffe&");
/* harmony import */ var _staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff.vue?vue&type=script&lang=js& */ "./resources/js/components/attendence/staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _staff_vue_vue_type_template_id_a7369ffe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _staff_vue_vue_type_template_id_a7369ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/attendence/staff.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/attendence/staff.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/attendence/staff.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./staff.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/attendence/staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/attendence/staff.vue?vue&type=template&id=a7369ffe&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/attendence/staff.vue?vue&type=template&id=a7369ffe& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_template_id_a7369ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./staff.vue?vue&type=template&id=a7369ffe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/attendence/staff.vue?vue&type=template&id=a7369ffe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_template_id_a7369ffe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_template_id_a7369ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student-panel/complain/add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/student-panel/complain/add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      record: {
        type: 'Complain',
        against: '',
        teacher_id: '',
        subject: '',
        remarks: ''
      },
      errors: [],
      teachers: [],
      cities: [],
      pincodes: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    var params = this.$route.params;
    this.getTeachers();

    if (params.id != undefined && params.id != '') {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
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
    getInfo: function getInfo(id) {
      var _this2 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('complain/' + id).then(function (res) {
        var list = res.data;
        _this2.id = list.id;
        _this2.record = list;

        if (list.city_name) {
          _this2.getCities(_this2.state);
        }

        _this2.loaded = 1;
        $('.select2').each(function () {
          $(this).trigger('change');
        });
      });
    },
    addData: function addData() {
      var _this3 = this;

      var params = {
        record: this.record
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('complain', params).then(function (res) {
        if (res.data.status) {
          _this3.$router.push({
            name: 'view-complain'
          }).then(function (res) {
            _this3.loaded = 1;

            _this3.$toast.success('Record saved.');
          })["catch"](function (err) {
            _this3.loaded = 1;
            console.log(err);
          });
        } else {
          _this3.loaded = 1;
          _this3.errors = res.data.errors;
        }
      })["catch"](function (error) {
        _this3.loaded = 1;
        console.log(error);
      });
    },
    updateData: function updateData() {
      var _this4 = this;

      var params = {
        record: this.record
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.put('complain/' + this.id, params).then(function (res) {
        if (res.data.status) {
          _this4.$router.push({
            name: 'view-complain'
          }).then(function (res) {
            _this4.loaded = 1;

            _this4.$toast.success('Record saved.');
          })["catch"](function (err) {
            _this4.loaded = 1;
            console.log(err);
          });
        } else {
          _this4.loaded = 1;
          _this4.errors = res.data.errors;
        }
      })["catch"](function (error) {
        _this4.loaded = 1;
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student-panel/complain/add.vue?vue&type=template&id=36c5dc03&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/student-panel/complain/add.vue?vue&type=template&id=36c5dc03& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "hostel" } }
            },
            [_vm._v("View Complain")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(!_vm.id ? "Raise" : "Edit") + " Complain")]),
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
            _c("router-link", { attrs: { to: { name: "hostel" } } }, [
              _vm._v("Complain")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v(_vm._s(!_vm.id ? "Raise" : "Edit") + " Complain")])
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
              _c("div", { staticClass: "heading-layout1" }, [
                _c("div", { staticClass: "item-title" }, [
                  _c("h3", [
                    _vm._v(_vm._s(!_vm.id ? "Raise New" : "Edit") + " Complain")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "new-added-form",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.id ? _vm.updateData() : _vm.addData()
                    }
                  }
                },
                [
                  _vm.errors.length
                    ? _c("div", { staticClass: "alert alert-danger" }, [
                        _c(
                          "ul",
                          { staticClass: "mb-0" },
                          _vm._l(_vm.errors, function(error, index) {
                            return _c("li", { key: index }, [
                              _vm._v(_vm._s(error))
                            ])
                          }),
                          0
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.id,
                        expression: "id"
                      }
                    ],
                    attrs: { type: "hidden", value: "" },
                    domProps: { value: _vm.id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.id = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-4 col-12 form-group" }, [
                      _c("label", [_vm._v("Type *")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.type,
                              expression: "record.type"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { required: "" },
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
                              _vm.$set(
                                _vm.record,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "Complain" } }, [
                            _vm._v("Complain")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Suggestion" } }, [
                            _vm._v("Suggestion")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-12 form-group" }, [
                      _c("label", [
                        _vm._v(
                          _vm._s(
                            _vm.record.type == "Complain" ? "Against" : "For"
                          ) + " *"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.against,
                              expression: "record.against"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { required: "" },
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
                              _vm.$set(
                                _vm.record,
                                "against",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Any Option")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "School" } }, [
                            _vm._v("School")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Principal" } }, [
                            _vm._v("Principal")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Head Master" } }, [
                            _vm._v("Head Master")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Teacher" } }, [
                            _vm._v("Teacher")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Other" } }, [
                            _vm._v("Other")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.record.against == "Teacher"
                      ? _c(
                          "div",
                          { staticClass: "col-lg-4 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Select Teacher")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.record.teacher_id,
                                    expression: "record.teacher_id"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { required: "" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.record,
                                      "teacher_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select Teacher")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.teachers, function(t, i) {
                                  return _c(
                                    "option",
                                    { key: i, domProps: { value: t.id } },
                                    [_vm._v(_vm._s(t.name))]
                                  )
                                })
                              ],
                              2
                            )
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Subject")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.record.subject,
                          expression: "record.subject"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", required: "" },
                      domProps: { value: _vm.record.subject },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.record, "subject", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Complain / Suggestion")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.record.remarks,
                          expression: "record.remarks"
                        }
                      ],
                      staticClass: "form-control",
                      staticStyle: { height: "200px" },
                      attrs: { rows: "8", required: "" },
                      domProps: { value: _vm.record.remarks },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.record, "remarks", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 form-group mg-t-8" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                          attrs: { type: "submit" }
                        },
                        [_vm._v(_vm._s(!_vm.id ? "Save" : "Update"))]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn-fill-lg bg-blue-dark btn-hover-yellow",
                          attrs: { type: "reset" }
                        },
                        [_vm._v("Reset")]
                      )
                    ])
                  ])
                ]
              )
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/student-panel/complain/add.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/student-panel/complain/add.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_36c5dc03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=36c5dc03& */ "./resources/js/components/student-panel/complain/add.vue?vue&type=template&id=36c5dc03&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/student-panel/complain/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_36c5dc03___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_36c5dc03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/student-panel/complain/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/student-panel/complain/add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/student-panel/complain/add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student-panel/complain/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/student-panel/complain/add.vue?vue&type=template&id=36c5dc03&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/student-panel/complain/add.vue?vue&type=template&id=36c5dc03& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_36c5dc03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=36c5dc03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student-panel/complain/add.vue?vue&type=template&id=36c5dc03&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_36c5dc03___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_36c5dc03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
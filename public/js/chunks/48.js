(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/timeslot/add.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/timeslot/add.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      slotName: '',
      startTime: '',
      endTime: '',
      timeslotShift: '',
      start_from_time: 0,
      start_to_time: 0,
      end_from_time: 0,
      end_to_time: 0,
      shifts: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  validations: {
    slotName: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    startTime: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    endTime: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    timeslotShift: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    }
  },
  mounted: function mounted() {
    var params = this.$route.params;
    this.getShifts();

    if (params.id != undefined && params.id != '') {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getShifts: function getShifts() {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-shifts').then(function (res) {
        _this.shifts = res.data;
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
      instance.get('get-timeslot-info/' + id).then(function (res) {
        _this2.id = res.data.data.id;
        _this2.slotName = res.data.data.name;
        _this2.startTime = res.data.data.time_start;
        _this2.endTime = res.data.data.time_end;
        _this2.timeslotShift = res.data.data.shift;
        _this2.loaded = 1;
        $('.select2').each(function () {
          $(this).trigger('change');
        });
      });
    },
    addData: function addData() {
      var _this3 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        var params = {
          name: this.slotName,
          time_start: this.startTime,
          time_end: this.endTime,
          shift: this.timeslotShift
        };
        this.loaded = 0;
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('add-timeslot', params).then(function (res) {
          if (res.data.status) {
            _this3.$router.push({
              name: 'timeslot'
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
      }
    },
    updateData: function updateData() {
      var _this4 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        var params = {
          id: this.id,
          name: this.slotName,
          time_start: this.startTime,
          time_end: this.endTime,
          shift: this.timeslotShift
        };
        this.loaded = 0;
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('update-timeslot', params).then(function (res) {
          if (res.data.status) {
            _this4.$router.push({
              name: 'timeslot'
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
    },
    findIndex: function findIndex(jsonData, findThis) {
      var indexNum = jsonData.findIndex(function (obj) {
        return obj.id == findThis;
      });
      return indexNum;
    }
  },
  watch: {
    timeslotShift: function timeslotShift(id) {
      var index = this.findIndex(this.shifts, id);
      this.start_from_time = this.shifts[index].shift_opening_time;
      this.start_to_time = this.shifts[index].shift_closing_time;
      this.end_from_time = this.shifts[index].shift_opening_time;
      this.end_to_time = this.shifts[index].shift_closing_time;
    },
    startTime: function startTime(time) {
      this.end_from_time = time;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/timeslot/add.vue?vue&type=template&id=9843f874&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/timeslot/add.vue?vue&type=template&id=9843f874& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "timeslot" } }
            },
            [_vm._v("View Timeslot")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Timeslot")]),
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
            _c("router-link", { attrs: { to: { name: "timeslot" } } }, [
              _vm._v("Timeslot")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Timeslot")])
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
                    _vm._v(_vm._s(!_vm.id ? "Add New" : "Edit") + " Timeslot")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
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
                  _c("b-row", [
                    _c(
                      "div",
                      { staticClass: "col-xl-3 col-lg-6 col-12 form-group" },
                      [
                        _c("label", [_vm._v("Shift *")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.$v.timeslotShift.$model,
                                expression: "$v.timeslotShift.$model"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.$v.timeslotShift.$error
                            },
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
                                  _vm.$v.timeslotShift,
                                  "$model",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Shift")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.shifts, function(s) {
                              return _c(
                                "option",
                                { key: s.id, domProps: { value: s.id } },
                                [_vm._v(_vm._s(s.shift_name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("b-form-invalid-feedback", [
                          _vm._v("Please enter required field.")
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm.timeslotShift
                    ? _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-3 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Name *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.$v.slotName.$model,
                                  expression: "$v.slotName.$model"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.slotName.$error
                              },
                              attrs: {
                                type: "text",
                                placeholder:
                                  "like Lecture number, name, prayer, break etc."
                              },
                              domProps: { value: _vm.$v.slotName.$model },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.slotName,
                                    "$model",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("b-form-invalid-feedback", [
                              _vm._v("Please enter required field.")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-3 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Start Time *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.startTime,
                                  expression: "startTime"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.slotName.$error
                              },
                              attrs: {
                                type: "time",
                                placeholder: "",
                                min: _vm.start_from_time,
                                max: _vm.start_to_time
                              },
                              domProps: { value: _vm.startTime },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.startTime = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("b-form-invalid-feedback", [
                              _vm._v("Please enter required field.")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-3 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("End Time *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.$v.endTime.$model,
                                  expression: "$v.endTime.$model"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.slotName.$error
                              },
                              attrs: {
                                type: "time",
                                placeholder: "",
                                min: _vm.end_from_time,
                                max: _vm.end_to_time
                              },
                              domProps: { value: _vm.$v.endTime.$model },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.endTime,
                                    "$model",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("b-form-invalid-feedback", [
                              _vm._v("Please enter required field.")
                            ])
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.timeslotShift
                    ? _c("div", { staticClass: "row" }, [
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
                    : _vm._e()
                ],
                1
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

/***/ "./resources/js/components/school-panel/timeslot/add.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/school-panel/timeslot/add.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_9843f874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=9843f874& */ "./resources/js/components/school-panel/timeslot/add.vue?vue&type=template&id=9843f874&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/timeslot/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_9843f874___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_9843f874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/timeslot/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/timeslot/add.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/school-panel/timeslot/add.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/timeslot/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/timeslot/add.vue?vue&type=template&id=9843f874&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/timeslot/add.vue?vue&type=template&id=9843f874& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_9843f874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=9843f874& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/timeslot/add.vue?vue&type=template&id=9843f874&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_9843f874___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_9843f874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
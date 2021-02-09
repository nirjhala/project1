(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/shift/add.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/shift/add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'addShift',
  data: function data() {
    return {
      id: '',
      shiftName: '',
      openingTime: '',
      closingTime: '',
      errors: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  validations: {
    shiftName: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    openingTime: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    closingTime: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    }
  },
  mounted: function mounted() {
    var params = this.$route.params;

    if (params.id != undefined && params.id != '') {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getInfo: function getInfo(id) {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-shift-info/' + id).then(function (res) {
        _this.id = res.data.data.id;
        _this.shiftName = res.data.data.shift_name;
        _this.openingTime = res.data.data.shift_opening_time;
        _this.closingTime = res.data.data.shift_closing_time;
        _this.loaded = 1;
        $('.select2').each(function () {
          $(this).trigger('change');
        });
      });
    },
    addSession: function addSession() {
      var _this2 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        var params = {
          shift_name: this.shiftName,
          shift_opening_time: this.openingTime,
          shift_closing_time: this.closingTime
        };
        this.loaded = 0;
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('add-shift', params).then(function (res) {
          if (res.data.status) {
            _this2.$router.push({
              name: 'shift'
            }).then(function (res) {
              _this2.loaded = 1;

              _this2.$toast.success('Record saved.');
            })["catch"](function (err) {
              _this2.loaded = 1;
              console.log(err);
            });
          } else {
            _this2.loaded = 1;
            _this2.errors = res.data.errors;
          }
        })["catch"](function (error) {
          _this2.loaded = 1;
          console.log(error);
        });
      }
    },
    updateData: function updateData() {
      var _this3 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        var params = {
          id: this.id,
          shift_name: this.shiftName,
          shift_opening_time: this.openingTime,
          shift_closing_time: this.closingTime
        };
        this.loaded = 0;
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('update-shift', params).then(function (res) {
          if (res.data.status) {
            _this3.$router.push({
              name: 'shift'
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/shift/add.vue?vue&type=template&id=75e5d2fb&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/shift/add.vue?vue&type=template&id=75e5d2fb& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "shift" } }
            },
            [_vm._v("View Shift")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Shift")]),
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
            _c("router-link", { attrs: { to: { name: "shift" } } }, [
              _vm._v("Shift")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Shift")])
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
                    _vm._v(_vm._s(!_vm.id ? "Add New" : "Edit") + " Shift")
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
                      _vm.id ? _vm.updateData() : _vm.addSession()
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
                    _c(
                      "div",
                      { staticClass: "col-xl-3 col-lg-6 col-12 form-group" },
                      [
                        _c("label", [_vm._v("Name *")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.shiftName.$model,
                              expression: "$v.shiftName.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.shiftName.$error
                          },
                          attrs: {
                            type: "text",
                            placeholder: "like Morning, Evening etc.",
                            value: ""
                          },
                          domProps: { value: _vm.$v.shiftName.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.shiftName,
                                "$model",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
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
                      { staticClass: "col-xl-3 col-lg-6 col-12 form-group" },
                      [
                        _c("label", [_vm._v("Opening Time *")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.$v.openingTime.$model,
                              expression: "$v.openingTime.$model"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.openingTime.$error
                          },
                          attrs: { type: "time", placeholder: "Opening Time" },
                          domProps: { value: _vm.$v.openingTime.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.openingTime,
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
                      { staticClass: "col-xl-3 col-lg-6 col-12 form-group" },
                      [
                        _c("label", [_vm._v("Closing Time *")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.closingTime.$model,
                              expression: "$v.closingTime.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.closingTime.$error
                          },
                          attrs: { type: "time", placeholder: "Closing Time" },
                          domProps: { value: _vm.$v.closingTime.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.closingTime,
                                "$model",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
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

/***/ "./resources/js/components/school-panel/shift/add.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/school-panel/shift/add.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_75e5d2fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=75e5d2fb& */ "./resources/js/components/school-panel/shift/add.vue?vue&type=template&id=75e5d2fb&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/shift/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_75e5d2fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_75e5d2fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/shift/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/shift/add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/school-panel/shift/add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/shift/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/shift/add.vue?vue&type=template&id=75e5d2fb&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/school-panel/shift/add.vue?vue&type=template&id=75e5d2fb& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_75e5d2fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=75e5d2fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/shift/add.vue?vue&type=template&id=75e5d2fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_75e5d2fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_75e5d2fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
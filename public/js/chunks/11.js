(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/route/add.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/route/add.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: '',
      routeName: '',
      startPoint: '',
      endPoint: '',
      vehicle: '',
      routes: [{
        name: ''
      }],
      vehicles: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.getVehicles();
    var params = this.$route.params;

    if (params.id != undefined && params.id != '') {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getVehicles: function getVehicles() {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-vehicles').then(function (res) {
        _this.vehicles = res.data;
      });
    },
    addRoute: function addRoute() {
      var flag = true;
      $(this.routes).each(function (i, row) {
        if (row.name == '') flag = false;
      });

      if (flag) {
        this.routes.push({
          name: ''
        });
      } else {
        swal('Warning', 'Please enter route name.', 'warning');
      }
    },
    removeRoute: function removeRoute(index) {
      this.routes.splice(index, 1);
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
      instance.get('get-route-info/' + id).then(function (res) {
        var list = res.data.data;
        _this2.id = list.id;
        _this2.routeName = list.name;
        _this2.vehicle = list.vehicle;
        _this2.startPoint = list.start_point;
        _this2.routes = list.points;
        _this2.loaded = 1;
        $('.select2').each(function () {
          $(this).trigger('change');
        });
      });
    },
    addData: function addData() {
      var _this3 = this;

      var params = {
        name: this.routeName,
        vehicle: this.vehicle,
        start_point: this.startPoint,
        routes: this.routes
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('add-route', params).then(function (res) {
        if (res.data.status) {
          _this3.$router.push({
            name: 'route'
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
        id: this.id,
        name: this.routeName,
        vehicle: this.vehicle,
        start_point: this.startPoint,
        routes: this.routes
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('update-route', params).then(function (res) {
        if (res.data.status) {
          _this4.$router.push({
            name: 'route'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/route/add.vue?vue&type=template&id=d5ad5ec0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/route/add.vue?vue&type=template&id=d5ad5ec0& ***!
  \************************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "route" } }
            },
            [_vm._v("View Route")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Route")]),
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
            _c("router-link", { attrs: { to: { name: "route" } } }, [
              _vm._v("Route")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Route")])
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
                    _vm._v(_vm._s(!_vm.id ? "Add New" : "Edit") + " Route")
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
                    _c(
                      "div",
                      { staticClass: "col-xl-3 col-lg-6 col-12 form-group" },
                      [
                        _c("label", [_vm._v("Route Name *")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.routeName,
                              expression: "routeName"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            value: "",
                            required: ""
                          },
                          domProps: { value: _vm.routeName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.routeName = $event.target.value
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-xl-3 col-lg-6 col-12 form-group" },
                      [
                        _c("label", [_vm._v("Vehicle *")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.vehicle,
                                expression: "vehicle"
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
                                _vm.vehicle = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Vehicle")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.vehicles, function(v) {
                              return _c(
                                "option",
                                { domProps: { value: v.id } },
                                [_vm._v(_vm._s(v.vehicle_no))]
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
                      { staticClass: "col-xl-3 col-lg-6 col-12 form-group" },
                      [
                        _c("label", [_vm._v("Start Point *")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.startPoint,
                              expression: "startPoint"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            value: "",
                            required: ""
                          },
                          domProps: { value: _vm.startPoint },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.startPoint = $event.target.value
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "route-list-group" },
                    _vm._l(_vm.routes, function(i, index) {
                      return _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-3 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Pickup Point *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: i.name,
                                  expression: "i.name"
                                }
                              ],
                              key: index,
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "",
                                value: "",
                                required: ""
                              },
                              domProps: { value: i.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(i, "name", $event.target.value)
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _vm.routes.length > 1
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-xl-3 col-lg-6 col-12 form-group"
                              },
                              [
                                _c("label", [_vm._v(" ")]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-danger btn-lg btn-block",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.removeRoute(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("span", { staticClass: "fa fa-minus" }),
                                    _vm._v(" REMOVE ")
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        index == _vm.routes.length - 1
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-xl-3 col-lg-6 col-12 form-group"
                              },
                              [
                                _c("label", [_vm._v(" ")]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-success btn-lg btn-block addRouteBtn",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.addRoute()
                                      }
                                    }
                                  },
                                  [
                                    _c("span", { staticClass: "fa fa-plus" }),
                                    _vm._v(" ADD ")
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    }),
                    0
                  ),
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

/***/ "./resources/js/components/route/add.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/route/add.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_d5ad5ec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=d5ad5ec0& */ "./resources/js/components/route/add.vue?vue&type=template&id=d5ad5ec0&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/route/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_d5ad5ec0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_d5ad5ec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/route/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/route/add.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/route/add.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/route/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/route/add.vue?vue&type=template&id=d5ad5ec0&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/route/add.vue?vue&type=template&id=d5ad5ec0& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_d5ad5ec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=d5ad5ec0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/route/add.vue?vue&type=template&id=d5ad5ec0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_d5ad5ec0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_d5ad5ec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
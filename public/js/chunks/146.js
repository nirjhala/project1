(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/school/menu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/school/menu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/script */ "./resources/js/api/script.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: {
        id: '',
        type: 'Page',
        p_id: '',
        ml_id: '',
        label: '',
        link: ''
      },
      title: 'Users',
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      menu_locations: [],
      menu: [],
      pages: {},
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.title = this.$route.params.role;
    this.getMenu();
    this.getPages();
  },
  methods: {
    searchAfterDebounce: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function () {
      this.getRecords();
    }, 500),
    getPages: function getPages() {
      var _this = this;

      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_1__["default"].getAllPages();
      apiResponse.then(function (res) {
        _this.pages = res.data;
      })["catch"](function (err) {
        console.log('Errors: ', err);
      });
    },
    getMenu: function getMenu() {
      var _this2 = this;

      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_1__["default"].fetchMenu();
      apiResponse.then(function (res) {
        _this2.menu = res.data;
        _this2.loaded = 1;
      });
    },
    deleteMenu: function deleteMenu(id) {
      var _this3 = this;

      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this record!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          _api_script__WEBPACK_IMPORTED_MODULE_1__["default"].deleteMenu(id).then(function (res) {
            _this3.$toast.success(res.data.message);

            _this3.getMenu();
          });
        }
      });
    },
    checkAll: function checkAll() {
      var self = this;
      self.check = [];

      if (!self.allSelected) {
        $.each(self.lists.data, function (i, row) {
          self.check.push(row.id);
        });
      }
    },
    addMenu: function addMenu() {
      var _this4 = this;

      var self = this;
      var params = {
        form: this.form,
        menu_locations: this.menu_locations
      };
      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_1__["default"].insertMenu(params);
      apiResponse.then(function (res) {
        self.form = {
          id: '',
          type: 'Page',
          p_id: '',
          ml_id: '',
          label: '',
          link: ''
        };

        _this4.getMenu();
      })["catch"](function (err) {
        console.log('Errors:', err);
      });
    },
    deleteRecord: function deleteRecord() {
      var _this5 = this;

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
            _this5.loaded = 0;
            var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_1__["default"].deleteMenus(params);
            apiResponse.then(function (res) {
              _this5.getRecords();

              _this5.$toast.success('Selected record(s) has been deleted.');
            })["catch"](function (err) {
              _this5.loaded = 1;
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
  },
  watch: {
    "form.p_id": function formP_id(id) {
      this.form.label = this.pages[id];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/school/menu.vue?vue&type=template&id=21a789c1&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/school/menu.vue?vue&type=template&id=21a789c1& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Menu")]),
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
            _c("router-link", { attrs: { to: { name: "SchoolMaster" } } }, [
              _vm._v("School Master")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v("Menu")])
      ])
    ]),
    _vm._v(" "),
    !_vm.loaded
      ? _c("div", { staticClass: "card height-auto" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "text-center" }, [
              _c("img", {
                staticStyle: { "max-width": "100%" },
                attrs: { src: _vm.baseURL + "img/preloader.gif", alt: "" }
              })
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.loaded
      ? _c(
          "div",
          [
            _c(
              "b-row",
              [
                _c(
                  "b-col",
                  { attrs: { sm: "4" } },
                  [
                    _c("b-card", { attrs: { header: "Add Menu" } }, [
                      _c(
                        "form",
                        {
                          attrs: { method: "post" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.addMenu($event)
                            }
                          }
                        },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Select Menu Location" } },
                            [
                              _c("label", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.type,
                                      expression: "form.type"
                                    }
                                  ],
                                  attrs: { type: "radio", value: "External" },
                                  domProps: {
                                    checked: _vm._q(_vm.form.type, "External")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "type",
                                        "External"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                                External Link\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("label", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.type,
                                      expression: "form.type"
                                    }
                                  ],
                                  attrs: { type: "radio", value: "Page" },
                                  domProps: {
                                    checked: _vm._q(_vm.form.type, "Page")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(_vm.form, "type", "Page")
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                                Page\n                            "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.form.type == "Page"
                            ? _c(
                                "b-form-group",
                                { attrs: { label: "Select Page" } },
                                [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.p_id,
                                          expression: "form.p_id"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { required: "" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "p_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v("Select Page")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.pages, function(title, id) {
                                        return _c(
                                          "option",
                                          { key: id, domProps: { value: id } },
                                          [_vm._v(_vm._s(title))]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.type != "Page"
                            ? _c(
                                "b-form-group",
                                { attrs: { label: "Enter Link" } },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.link,
                                        expression: "form.link"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Link / URL",
                                      required: ""
                                    },
                                    domProps: { value: _vm.form.link },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "link",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("b-form-group", { attrs: { label: "Label" } }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.label,
                                  expression: "form.label"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Label",
                                required: ""
                              },
                              domProps: { value: _vm.form.label },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "label",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            [
                              _c("label", [_vm._v("Menu Locations")]),
                              _vm._v(" "),
                              _vm._l(_vm.menu, function(m, i) {
                                return _c("div", { key: i }, [
                                  _c("label", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.menu_locations,
                                          expression: "menu_locations"
                                        }
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        value: m.id,
                                        checked: Array.isArray(
                                          _vm.menu_locations
                                        )
                                          ? _vm._i(_vm.menu_locations, m.id) >
                                            -1
                                          : _vm.menu_locations
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.menu_locations,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = m.id,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.menu_locations = $$a.concat(
                                                  [$$v]
                                                ))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.menu_locations = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.menu_locations = $$c
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(m.name) +
                                        "\n                                "
                                    )
                                  ])
                                ])
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("b-form-group"),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn-fill-lg btn-block btn-gradient-yellow btn-hover-bluedark",
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                            Save\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { sm: "8" } },
                  [
                    _c(
                      "b-card",
                      { attrs: { "no-body": "" } },
                      [
                        _c(
                          "b-tabs",
                          { attrs: { card: "" } },
                          _vm._l(_vm.menu, function(m, i) {
                            return _c(
                              "b-tab",
                              { key: i, attrs: { title: m.name } },
                              [
                                !m.menu.length
                                  ? _c("div", [
                                      _vm._v(
                                        "\n                                No menu added yet.\n                            "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                m.menu.length
                                  ? _c("div", [
                                      _c(
                                        "table",
                                        { staticClass: "table table-bordered" },
                                        [
                                          _c("thead", [
                                            _c("tr", [
                                              _c("th", [_vm._v("#")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Menu Name")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Link")])
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            {
                                              directives: [
                                                {
                                                  name: "sortable",
                                                  rawName: "v-sortable"
                                                }
                                              ]
                                            },
                                            _vm._l(m.menu, function(link, j) {
                                              return _c("tr", { key: j }, [
                                                _c("td", [
                                                  _vm._v(_vm._s(j + 1))
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("div", [
                                                      _vm._v(_vm._s(link.label))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-button",
                                                      {
                                                        staticClass:
                                                          "text-danger m-0 p-0",
                                                        attrs: {
                                                          type: "button",
                                                          variant: "link"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteMenu(
                                                              link.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Remove")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                " +
                                                      _vm._s(
                                                        link.link
                                                          ? link.link
                                                          : link.page.slug
                                                      ) +
                                                      "\n                                            "
                                                  )
                                                ])
                                              ])
                                            }),
                                            0
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/school/menu.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/school-panel/school/menu.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_21a789c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=21a789c1& */ "./resources/js/components/school-panel/school/menu.vue?vue&type=template&id=21a789c1&");
/* harmony import */ var _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/school/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_21a789c1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_vue_vue_type_template_id_21a789c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/school/menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/school/menu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/school-panel/school/menu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/school/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/school/menu.vue?vue&type=template&id=21a789c1&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/school/menu.vue?vue&type=template&id=21a789c1& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_21a789c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=21a789c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/school/menu.vue?vue&type=template&id=21a789c1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_21a789c1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_21a789c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
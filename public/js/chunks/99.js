(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/fees/view.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/fees/view.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
var count = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      lists: {},
      check: [],
      s: '',
      class_id: '',
      departments: [],
      installments: [],
      ftypes: {},
      record: {},
      fees_for_new: [],
      fees_for_old: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.getDepartments();
  },
  methods: {
    getDepartments: function getDepartments() {
      var _this = this;

      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-departments').then(function (res) {
        _this.loaded = 1;
        _this.departments = res.data;
      });
    },
    getInstallments: function getInstallments() {
      var _this2 = this;

      this.loaded = 0;
      var installments = [],
          ftypes = [];
      var instance2 = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance2.get('get-all-fees-type').then(function (res) {
        count++;
        _this2.loaded = 1;
        _this2.ftypes = res.data;
        ftypes = res.data;

        _this2.effectFeesInput();
      });
    },
    effectFeesInput: function effectFeesInput() {
      var self = this,
          records = [];

      if (self.ftypes.length) {
        $.each(self.ftypes, function (i, row) {
          records[row.id] = {
            fees_for_new: 0,
            fees_for_old: 0
          };
          self.record = records;
        });
        var params = {
          'class_id': self.class_id,
          'session': ''
        };
        var instance = axios.create({
          baseURL: self.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + self.token,
            'Accept': 'application/json'
          }
        });
        instance.post('fees', params).then(function (res) {
          if (res.status) {
            self.record = res.data;
          }
        });
      }
    },
    saveFees: function saveFees() {
      var _this3 = this;

      var params = {
        record: this.record,
        class_id: this.class_id
      };
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('fees/add', params).then(function (res) {
        _this3.loaded = 1;

        if (res.status) {
          // this.lists  = res.data.data;
          _this3.getRecords();
        } else {
          _this3.errors = 1;
        }
      })["catch"](function (err) {
        _this3.loaded = 1;
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/fees/view.vue?vue&type=template&id=4d750ca4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/fees/view.vue?vue&type=template&id=4d750ca4& ***!
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
              attrs: { to: { name: "add-fees-installment" } }
            },
            [_vm._v("Add New")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v("Fees")]),
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
            _c("router-link", { attrs: { to: { name: "FeeMaster" } } }, [
              _vm._v("Fees Management")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v("Fees")])
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
            return _vm.saveFees()
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "card height-auto" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Select Class")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Select Class")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.class_id,
                          expression: "class_id"
                        }
                      ],
                      staticClass: "form-control",
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
                            _vm.class_id = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            return _vm.getInstallments()
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select a Class")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.departments, function(dept, i) {
                        return _c(
                          "optgroup",
                          { key: i, attrs: { label: dept.dept_name } },
                          _vm._l(dept.classes, function(cls, j) {
                            return _c(
                              "option",
                              { key: j, domProps: { value: cls.id } },
                              [_vm._v(_vm._s(cls.name))]
                            )
                          }),
                          0
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _vm.ftypes.length
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "fw-btn-fill btn-block btn-gradient-yellow text-white",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Save & Update")]
                    )
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.ftypes.length
            ? _c("div", { staticClass: "col-sm-9" }, [
                _c("div", { staticClass: "card height-auto mb-1" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h3", { staticClass: "card-title" }, [
                      _vm._v("Total Fees (Yearly)")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        { staticClass: "table table-striped table-sm" },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _vm._l(_vm.ftypes, function(ft, i) {
                            return _c("tr", { key: i }, [
                              _c("td", [_vm._v(_vm._s(ft.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.record[ft.id].fees_for_new,
                                      expression: "record[ft.id].fees_for_new"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    value: "0",
                                    min: "0",
                                    disabled: ft.fees_for == "old"
                                  },
                                  domProps: {
                                    value: _vm.record[ft.id].fees_for_new
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.record[ft.id],
                                        "fees_for_new",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.record[ft.id].fees_for_old,
                                      expression: "record[ft.id].fees_for_old"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    value: "0",
                                    min: "0",
                                    disabled: ft.fees_for == "new"
                                  },
                                  domProps: {
                                    value: _vm.record[ft.id].fees_for_old
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.record[ft.id],
                                        "fees_for_old",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Fees Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("New Admission")]),
        _vm._v(" "),
        _c("th", [_vm._v("Old Admission")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/fees/view.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/school-panel/fees/view.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_4d750ca4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=4d750ca4& */ "./resources/js/components/school-panel/fees/view.vue?vue&type=template&id=4d750ca4&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/fees/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_4d750ca4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_4d750ca4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/fees/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/fees/view.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/school-panel/fees/view.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/fees/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/fees/view.vue?vue&type=template&id=4d750ca4&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/school-panel/fees/view.vue?vue&type=template&id=4d750ca4& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_4d750ca4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=4d750ca4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/fees/view.vue?vue&type=template&id=4d750ca4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_4d750ca4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_4d750ca4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
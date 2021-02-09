(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      lists: {},
      errors: [],
      loaded: 0,
      teacher: [],
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    var params = this.$route.params;
    this.getSections();
    this.loaded = 1;
  },
  methods: {
    getSections: function getSections() {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-sections').then(function (res) {
        _this.lists = res.data.data;
        _this.teacher = [];
        var teacherArr = [];

        _this.lists.data.forEach(function (row, i) {
          var teacher_id = row.class_teacher ? row.class_teacher : '';
          teacherArr.push(_defineProperty({}, row.id, teacher_id));
        });

        _this.teacher = teacherArr;
      });
    },
    updateData: function updateData() {
      var _this2 = this;

      this.loaded = 0;
      var params = {
        teachers: this.teacher
      };
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('allocate-class-teacher', params).then(function (res) {
        _this2.loaded = 1;

        _this2.$toast.success('Changes saved successfully.');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=template&id=5fa40a16&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=template&id=5fa40a16& ***!
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
      _c("h3", [_vm._v("Class Teacher Allocation")]),
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
        _c("li", [_vm._v("Class Teacher Allocation")])
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
              _vm.lists.data
                ? _c(
                    "form",
                    {
                      staticClass: "new-added-form",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateData()
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
                      _c("div", { staticClass: "table-responsive mb-3" }, [
                        _c("table", { staticClass: "table table-bordered" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.lists.data, function(list, i) {
                              return _c("tr", { key: i }, [
                                _c("td", [
                                  _vm._v(_vm._s(i + _vm.lists.from) + ".")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(list.cls.dept.dept_name) +
                                      " » " +
                                      _vm._s(list.cls.name) +
                                      " ‐ " +
                                      _vm._s(list.name)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticStyle: { width: "200px" } },
                                    [
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.teacher[i][list.id],
                                              expression: "teacher[i][list.id]"
                                            }
                                          ],
                                          staticClass: "form-control",
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
                                                _vm.teacher[i],
                                                list.id,
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "" } },
                                            [_vm._v("Select Teacher")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(list.teachers, function(t, i) {
                                            return _c(
                                              "option",
                                              {
                                                key: i,
                                                domProps: { value: t.id }
                                              },
                                              [_vm._v(_vm._s(t.name))]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.lists.data
                ? _c("div", [
                    _c("div", { staticClass: "alert alert-warning" }, [
                      _vm._v(
                        "\n                        No records found!\n                    "
                      )
                    ])
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Class Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Class Teacher")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
          attrs: { type: "submit" }
        },
        [_vm._v("Save & Submit")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/class-teacher/edit.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/school-panel/class-teacher/edit.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_5fa40a16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=5fa40a16& */ "./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=template&id=5fa40a16&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_5fa40a16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_5fa40a16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/class-teacher/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=template&id=5fa40a16&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=template&id=5fa40a16& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_5fa40a16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=5fa40a16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/class-teacher/edit.vue?vue&type=template&id=5fa40a16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_5fa40a16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_5fa40a16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[168],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/user/info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/user/info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
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
      loaded: 0,
      user: {},
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.getDetails();
  },
  methods: {
    getDetails: function getDetails() {
      var _this = this;

      var id = this.$route.params.id;
      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo(id);
      apiResponse.then(function (res) {
        _this.user = res.data.data;
        _this.loaded = 1;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/user/info.vue?vue&type=template&id=0db472d9&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/user/info.vue?vue&type=template&id=0db472d9& ***!
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
  return _vm.user.id
    ? _c("div", { staticClass: "dashboard-content-one" }, [
        _c("div", { staticClass: "breadcrumbs-area" }, [
          _c(
            "div",
            { staticClass: "float-right" },
            [
              _c(
                "router-link",
                {
                  staticClass: "fw-btn-fill btn-gradient-yellow text-white",
                  attrs: {
                    to: {
                      name: "AddUser",
                      params: { role: _vm.$route.params.role }
                    }
                  }
                },
                [_vm._v("Add New")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("h3", [_vm._v(_vm._s(_vm.user.name))]),
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
                _c("router-link", { attrs: { to: { name: "UserMaster" } } }, [
                  _vm._v("User Master")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "ViewUser",
                        params: { role: _vm.$route.params.role }
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.$route.params.role))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [_vm._v(_vm._s(_vm.user.name))])
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
                return _vm.deleteRecord()
              }
            }
          },
          [
            _c("div", { staticClass: "card height-auto" }, [
              _c("div", { staticClass: "card-body" }, [
                !_vm.loaded
                  ? _c("div", { staticClass: "text-center" }, [
                      _c("img", {
                        staticStyle: { "max-width": "100%" },
                        attrs: {
                          src: _vm.baseURL + "img/preloader.gif",
                          alt: ""
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.loaded
                  ? _c("div", [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          { staticClass: "table table-sm table-bordered" },
                          [
                            _c("tbody", [
                              _vm._m(0),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticStyle: { width: "300px" } }, [
                                  _vm._v("FIRST NAME")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(_vm.user.fname) +
                                      "\n                                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-center",
                                    staticStyle: { width: "300px" },
                                    attrs: { rowspan: "9" }
                                  },
                                  [
                                    _c("p", [_vm._v(" ")]),
                                    _vm._v(" "),
                                    _c("img", {
                                      staticStyle: { "max-width": "300px" },
                                      attrs: {
                                        src: _vm.user.media
                                          ? _vm.user.media.image_url.medium
                                          : _vm.baseURL + "img/user.png",
                                        alt: _vm.user.name
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", [_vm._v("LAST NAME")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.lname))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", [_vm._v("FULL NAME")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.name))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", [_vm._v("DATE OF BIRTH")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatDateOnly")(_vm.user.dob)
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", [_vm._v("LOGIN USERNAME")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.login))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", [_vm._v("EMAIL")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.email))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", [_vm._v("MOBILE NO.")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.mobile))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", [_vm._v("GENDER")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.gender))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", [_vm._v("FULL ADDRESS")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.user.full_address))
                                ])
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.user.custom_fields && _vm.user.custom_fields.length
                        ? _c("div", { staticClass: "table-responsive" }, [
                            _c(
                              "table",
                              { staticClass: "table table-sm table-bordered" },
                              [
                                _vm._m(1),
                                _vm._v(" "),
                                _vm._l(_vm.user.custom_fields, function(cf, i) {
                                  return _c("tr", { key: i }, [
                                    _c(
                                      "th",
                                      { staticStyle: { width: "300px" } },
                                      [_vm._v(_vm._s(cf.name))]
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(cf.valueText) +
                                          "\n                                "
                                      )
                                    ])
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.user.documents && _vm.user.documents.length
                        ? _c("div", { staticClass: "table-responsive" }, [
                            _c(
                              "table",
                              { staticClass: "table table-sm table-bordered" },
                              [
                                _vm._m(2),
                                _vm._v(" "),
                                _vm._l(_vm.user.documents, function(d, i) {
                                  return _c("tr", { key: i }, [
                                    _c(
                                      "th",
                                      { staticStyle: { width: "300px" } },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            d.document.en_name +
                                              " " +
                                              d.document.hi_name +
                                              " (" +
                                              d.document.short_name +
                                              ")"
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "a",
                                        {
                                          attrs: {
                                            href: d.file_url,
                                            target: "_blank"
                                          }
                                        },
                                        [_vm._v("VIEW / DOWNLOAD")]
                                      )
                                    ])
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ])
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-dark text-white" }, [
      _c("th", { attrs: { colspan: "3" } }, [
        _c("div", { staticClass: "px-3 py-2" }, [_vm._v("BASIC INFO")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-dark text-white" }, [
      _c("th", { attrs: { colspan: "2" } }, [
        _c("div", { staticClass: "px-3 py-2" }, [_vm._v("OTHER INFO")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-dark text-white" }, [
      _c("th", { attrs: { colspan: "2" } }, [
        _c("div", { staticClass: "px-3 py-2" }, [_vm._v("UPLOADED DOCUMENTS")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/user/info.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/school-panel/user/info.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_vue_vue_type_template_id_0db472d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=0db472d9& */ "./resources/js/components/school-panel/user/info.vue?vue&type=template&id=0db472d9&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/user/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_0db472d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_vue_vue_type_template_id_0db472d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/user/info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/user/info.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/school-panel/user/info.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/user/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/user/info.vue?vue&type=template&id=0db472d9&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/school-panel/user/info.vue?vue&type=template&id=0db472d9& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_0db472d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=template&id=0db472d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/user/info.vue?vue&type=template&id=0db472d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_0db472d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_0db472d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
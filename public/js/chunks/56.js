(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Layout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Layout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/script */ "./resources/js/api/script.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      menues: {
        'Header Menu': [],
        'Footer 1': [],
        'Footer 2': [],
        'Footer 3': [],
        'Footer 4': []
      }
    };
  },
  mounted: function mounted() {
    this.getMenues();
  },
  methods: {
    getMenues: function getMenues() {
      var _this = this;

      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_0__["default"].fetchFrontMenues();
      apiResponse.then(function (res) {
        _this.menues = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Layout.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/icomoon/style.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/icomoon/style.min.css"), "");

// module
exports.push([module.i, "\n.bg-primary {\r\n    background-color: #2c3e50!important;\r\n    color: #fff;\n}\n.border-primary {\r\n    border-color: #2c3e50 !important;\n}\n.btn-primary {\r\n    background-color: #2c3e50 !important;\r\n    border-color: #2c3e50 !important;\n}\n.btn-primary:hover {\r\n    background-color: #ff9e01 !important;\r\n    border-color: #ff9e01 !important;\n}\nh1, h2, h3, h4, h5, h6, a {\r\n    color: #2c3e50;\n}\nh1 span, h2 span, h3 span, h4 span, h5 span, h6 span, a:hover {\r\n    color: #ff9e01;\n}\n.toast-icon {\r\n    display: block;\r\n    width: 27px;\r\n    min-width: 27px;\r\n    height: 27px;\r\n    margin-left: 1em;\r\n    background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45.999 45.999'%3e %3cpath fill='%23fff' d='M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 11-6 0V21a3 3 0 116 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z'/%3e %3c/svg%3e\") no-repeat;\n}\n.toast-success .toast-icon {\r\n    background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'%3e %3cpath fill='%23fff' d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329l-16 18a1.997 1.997 0 01-2.745.233l-10-8a2 2 0 012.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 012.99 2.659z'/%3e %3c/svg%3e\") no-repeat;\n}\n.toast-text {\r\n    padding: 1.5em 1em;\n}\nheader.main-header {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 10px #ccc;\r\n    z-index: 99;\n}\n.main-navbar, .main-navbar ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: auto;\r\n    list-style: none;\n}\n.main-navbar>li>a {\r\n    padding: 12px 15px;\r\n    display: block;\r\n    color: #2c3e50;\n}\n.main-navbar>li:last-child>a {\r\n    padding-right: 0;\n}\n.main-navbar>li:hover>a {\r\n    color: #ff9e01;\n}\n@-webkit-keyframes slideUp {\nfrom {\r\n        opacity: 0;\r\n        transform: translateY(-20px)\n}\nto {\r\n        opacity: 1;\r\n        transform: translateY(0px)\n}\n}\n@keyframes slideUp {\nfrom {\r\n        opacity: 0;\r\n        transform: translateY(-20px)\n}\nto {\r\n        opacity: 1;\r\n        transform: translateY(0px)\n}\n}\n.main-navbar>li>ul {\r\n    display: none;\r\n    position: absolute;\r\n    top: 100%;\r\n    margin-top: -2px;\r\n    z-index: 1;\r\n    background: #2c3e50;\r\n    border-radius: 3px;\r\n    -webkit-animation: slideUp .3s;\r\n            animation: slideUp .3s;\n}\n.main-navbar>li:hover>ul {\r\n    display: block;\n}\n.main-navbar>li>ul>li:first-child:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 15px;\r\n    top: -20px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #2c3e50;\n}\n.main-navbar>li>ul>li:hover:first-child:before {\r\n    border-bottom-color: #ff9e01;\n}\n.main-navbar>li>ul>li>a {\r\n    display: block;\r\n    color: #fff;\r\n    padding: 5px 15px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    min-width: 100px;\n}\n.main-navbar>li>ul>li:hover>a {\r\n    background-color: #ff9e01;\n}\n.main-navbar>li>ul>li:not(:last-child)>a {\r\n    border-bottom: 1px solid #999;\n}\na:hover {\r\n    text-decoration: none;\n}\nfooter {\r\n  background: #161616;\n}\nfooter * {\r\n  color: #fff;\n}\nfooter ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\n}\nfooter h4 {\r\n  margin-bottom: 30px;\n}\r\n\r\n/* Other Pages */\n#page-header {\r\n    background: #ebebeb;\r\n    padding: 40px 0;\r\n    text-align: center;\n}\n#page-header h1 {\r\n    font-size: 36px;\r\n    text-transform: capitalize;\n}\n.breadcrumb {\r\n    background-color: transparent;\r\n    padding: 0;\r\n    justify-content: center;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Layout.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Layout.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "header",
      { staticClass: "top-header bg-primary py-2" },
      [
        _c(
          "b-container",
          [
            _c(
              "b-row",
              [
                _c("b-col", [
                  _c(
                    "a",
                    {
                      staticClass: "text-white",
                      attrs: { href: "tel: 9087654321" }
                    },
                    [
                      _c("i", { staticClass: "icon-mobile" }),
                      _vm._v(" +91 9087654321")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "text-white ml-3",
                      attrs: { href: "mailto: info@example.com" }
                    },
                    [
                      _c("i", { staticClass: "icon-envelope-open-o" }),
                      _vm._v(" info@example.com")
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("b-col", { staticClass: "text-right" }, [
                  _c(
                    "a",
                    { staticClass: "text-white ml-3", attrs: { href: "" } },
                    [_c("i", { staticClass: "icon-facebook" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "text-white ml-3", attrs: { href: "" } },
                    [_c("i", { staticClass: "icon-instagram" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "text-white ml-3", attrs: { href: "" } },
                    [_c("i", { staticClass: "icon-linkedin" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "text-white ml-3", attrs: { href: "" } },
                    [_c("i", { staticClass: "icon-twitter" })]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "header",
      { staticClass: "main-header py-3" },
      [
        _c(
          "b-container",
          [
            _c(
              "b-row",
              [
                _c(
                  "b-col",
                  { attrs: { sm: "4" } },
                  [
                    _c("router-link", { attrs: { to: { name: "Page" } } }, [
                      _c("img", {
                        attrs: {
                          src: _vm.baseURL + "/img/logo2.png",
                          alt: "Akkhor",
                          title: "Akkhor"
                        }
                      })
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-col", { staticClass: "text-right", attrs: { sm: "8" } }, [
                  _c(
                    "ul",
                    { staticClass: "main-navbar m-0 ml-auto d-inline-flex" },
                    _vm._l(_vm.menues["Header Menu"], function(m, i) {
                      return _c(
                        "li",
                        { key: i },
                        [
                          m.page
                            ? _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "Page",
                                      params: { slug: m.page.slug }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(m.label) +
                                      "\n                                "
                                  ),
                                  m.submenu.length
                                    ? _c("i", {
                                        staticClass: "icon-angle-down"
                                      })
                                    : _vm._e()
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !m.page
                            ? _c("a", { attrs: { href: m.link } }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(m.label) +
                                    "\n                                "
                                ),
                                m.submenu.length
                                  ? _c("i", { staticClass: "icon-angle-down" })
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          m.submenu.length
                            ? _c(
                                "ul",
                                _vm._l(m.submenu, function(sm, j) {
                                  return _c(
                                    "li",
                                    { key: j },
                                    [
                                      sm.page
                                        ? _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "Page",
                                                  params: { slug: sm.page.slug }
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(sm.label) +
                                                  "\n                                    "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !sm.page
                                        ? _c(
                                            "a",
                                            { attrs: { href: sm.link } },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(sm.label) +
                                                  "\n                                    "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                }),
                                0
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    }),
                    0
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("section", [_c("router-view")], 1),
    _vm._v(" "),
    _c(
      "footer",
      { staticClass: "py-5" },
      [
        _c(
          "b-container",
          [
            _c(
              "b-row",
              [
                _c("b-col", { attrs: { sm: "3" } }, [
                  _c("h4", [_vm._v("Latest News")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c(
                      "li",
                      [
                        _c("router-link", { attrs: { to: "#" } }, [
                          _vm._v("Home")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c("router-link", { attrs: { to: "#" } }, [
                          _vm._v("Our Mission & Vision")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c("router-link", { attrs: { to: "#" } }, [
                          _vm._v("Chairman's Message")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c("router-link", { attrs: { to: "#" } }, [
                          _vm._v("Principal's Message")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c("router-link", { attrs: { to: "#" } }, [
                          _vm._v("Picture Gallery")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c("router-link", { attrs: { to: "#" } }, [
                          _vm._v("[More…]")
                        ])
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("b-col", { attrs: { sm: "3" } }, [
                  _c("h4", [_vm._v("Quick Links")]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    _vm._l(_vm.menues["Footer 1"], function(m, i) {
                      return _c(
                        "li",
                        { key: i },
                        [
                          m.page
                            ? _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "Page",
                                      params: { slug: m.page.slug }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(m.label) +
                                      "\n                    "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !m.page
                            ? _c("a", { attrs: { href: m.link } }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(m.label) +
                                    "\n                    "
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("b-col", { attrs: { sm: "3" } }, [
                  _c("h4", [_vm._v("Admission")]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    _vm._l(_vm.menues["Footer 2"], function(m, i) {
                      return _c(
                        "li",
                        { key: i },
                        [
                          m.page
                            ? _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "Page",
                                      params: { slug: m.page.slug }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(m.label) +
                                      "\n                    "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !m.page
                            ? _c("a", { attrs: { href: m.link } }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(m.label) +
                                    "\n                    "
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("b-col", { attrs: { sm: "3" } }, [
                  _c("h4", [_vm._v("Other Useful Links")]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    _vm._l(_vm.menues["Footer 3"], function(m, i) {
                      return _c(
                        "li",
                        { key: i },
                        [
                          m.page
                            ? _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "Page",
                                      params: { slug: m.page.slug }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(m.label) +
                                      "\n                    "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !m.page
                            ? _c("a", { attrs: { href: m.link } }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(m.label) +
                                    "\n                    "
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("h4", { staticClass: "mt-3" }, [
                    _vm._v("Connect on Social")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "icon-facebook",
                    attrs: { href: "", target: "_blank" }
                  }),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "ml-3 icon-instagram",
                    attrs: { href: "", target: "_blank" }
                  }),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "ml-3 icon-linkedin2",
                    attrs: { href: "", target: "_blank" }
                  }),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "ml-3 icon-twitter",
                    attrs: { href: "", target: "_blank" }
                  })
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0)
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mt-5" }, [
      _vm._v("\n        Powered by: "),
      _c("a", { attrs: { href: "#", target: "_blank" } }, [
        _vm._v("School Management System")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Layout.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Layout.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_6a4bdfee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6a4bdfee& */ "./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/views/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_6a4bdfee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_6a4bdfee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Layout.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Layout.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6a4bdfee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=6a4bdfee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Layout.vue?vue&type=template&id=6a4bdfee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6a4bdfee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6a4bdfee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
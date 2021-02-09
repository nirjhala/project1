(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/homepage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/homepage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cool-lightbox */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.esm.js");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cool-lightbox/dist/vue-cool-lightbox.min.css */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/script */ "./resources/js/api/script.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    CoolLightBox: vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      slide: 0,
      visible: false,
      index: null,
      // default: 0
      notices: {},
      media: ['https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg' // { // For video
      //   thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
      //   sources: [
      //     {
      //       src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      //       type: 'video/mp4'
      //     }
      //   ],
      //   type: "video",
      //   caption: '<h4>Monsters Inc.</h4>',
      //   width: 800, // required
      //   height: 600, // required
      //   autoplay: true //Optional to autoplay video when lightbox opens
      // }
      ]
    };
  },
  mounted: function mounted() {
    this.fetchNotices();
  },
  methods: {
    fetchNotices: function fetchNotices() {
      var _this = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_2__["view_all_notices"])().then(function (res) {
        _this.notices = res.data;
      });
    },
    showImg: function showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide: function handleHide() {
      this.visible = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/homepage.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/homepage.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#home-slider-carousel img {\r\n    height: calc(100vh - 122px);\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\nmarquee ul {\r\n    list-style: inside decimal;\n}\n.gray-bg {\r\n    background-color: #ebebeb;\n}\n.service-block .service-icon {\r\n    font-size: 36px;\r\n    color: #2c3e50;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/homepage.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/homepage.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./homepage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/homepage.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/homepage.vue?vue&type=template&id=43b1f018&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/homepage.vue?vue&type=template&id=43b1f018& ***!
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
  return _c("div", [
    _c(
      "section",
      { attrs: { id: "home-slider" } },
      [
        _c(
          "b-carousel",
          {
            staticStyle: { "text-shadow": "1px 1px 2px #333" },
            attrs: {
              id: "home-slider-carousel",
              interval: 4000,
              controls: "",
              indicators: "",
              background: "#ababab",
              "img-height": "260"
            },
            model: {
              value: _vm.slide,
              callback: function($$v) {
                _vm.slide = $$v
              },
              expression: "slide"
            }
          },
          [
            _c("b-carousel-slide", {
              attrs: {
                caption: "First slide",
                text:
                  "Nulla vitae elit libero, a pharetra augue mollis interdum.",
                "img-src": "https://picsum.photos/1024/480/?image=52"
              }
            }),
            _vm._v(" "),
            _c(
              "b-carousel-slide",
              {
                attrs: { "img-src": "https://picsum.photos/1024/480/?image=54" }
              },
              [
                _c("h1", { staticClass: "text-white" }, [
                  _vm._v("Hello world!")
                ])
              ]
            ),
            _vm._v(" "),
            _c("b-carousel-slide", {
              attrs: { "img-src": "https://picsum.photos/1024/480/?image=58" }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "py-5", attrs: { id: "news-section" } },
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
                    _c(
                      "b-card",
                      {
                        attrs: {
                          "border-variant": "primary",
                          header: "Notice",
                          "header-bg-variant": "primary",
                          "header-text-variant": "white",
                          align: "center"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "Page",
                                        params: {
                                          slug: "notice"
                                        }
                                      }
                                    }
                                  },
                                  [_vm._v("View All Notices »")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _c(
                          "b-card-text",
                          [
                            _c(
                              "marquee",
                              {
                                attrs: {
                                  behavior: "scroll",
                                  direction: "up",
                                  scrollamount: "5",
                                  onmouseover: "stop()",
                                  onmouseleave: "start()"
                                }
                              },
                              _vm._l(_vm.notices, function(notice, date) {
                                return _c(
                                  "ol",
                                  { key: date, staticClass: "m-0 p-0" },
                                  [
                                    _c("li", [
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(_vm._f("formatDateOnly")(date))
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(notice, function(n, index) {
                                      return _c(
                                        "li",
                                        { key: index },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "NoticeDetails",
                                                  params: {
                                                    slug: n.slug
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  index +
                                                    1 +
                                                    ". " +
                                                    n.full_title
                                                )
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    })
                                  ],
                                  2
                                )
                              }),
                              0
                            )
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
                  "b-col",
                  { attrs: { sm: "8" } },
                  [
                    _c("h1", { staticClass: "mt-0" }, [
                      _vm._v("Welcome To "),
                      _c("span", [_vm._v("Akkhor School")])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy […]\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { staticClass: "btn btn-primary", attrs: { to: "#" } },
                      [_vm._v("Read More »")]
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
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "gray-bg py-5", attrs: { id: "home-services" } },
      [
        _c(
          "b-container",
          [
            _c("h3", { staticClass: "text-center" }, [
              _vm._v("Why "),
              _c("span", [_vm._v("Akkhor School")])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-center w-75 m-auto" }, [
              _vm._v(
                "\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "b-row",
              { staticClass: "mt-5" },
              [
                _c("b-col", [
                  _c("div", { staticClass: "service-block text-center" }, [
                    _c("div", { staticClass: "service-icon" }, [
                      _c("i", { staticClass: "icon-file" })
                    ]),
                    _vm._v(" "),
                    _c("h4", [_vm._v("Immersive Education")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                            More than 60% of our pupils are boarders and the majority of our staff live on site, so all pupils enjoy a busy, active and social environment seven days a week.\n                        "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("b-col", [
                  _c("div", { staticClass: "service-block text-center" }, [
                    _c("div", { staticClass: "service-icon" }, [
                      _c("i", { staticClass: "icon-book" })
                    ]),
                    _vm._v(" "),
                    _c("h4", [_vm._v("First Class Facilities")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                            More than 60% of our pupils are boarders and the majority of our staff live on site, so all pupils enjoy a busy, active and social environment seven days a week.\n                        "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("b-col", [
                  _c("div", { staticClass: "service-block text-center" }, [
                    _c("div", { staticClass: "service-icon" }, [
                      _c("i", { staticClass: "icon-sports_tennis" })
                    ]),
                    _vm._v(" "),
                    _c("h4", [_vm._v("Sports Excellence")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                            More than 60% of our pupils are boarders and the majority of our staff live on site, so all pupils enjoy a busy, active and social environment seven days a week.\n                        "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("b-col", [
                  _c("div", { staticClass: "service-block text-center" }, [
                    _c("div", { staticClass: "service-icon" }, [
                      _c("i", { staticClass: "icon-group" })
                    ]),
                    _vm._v(" "),
                    _c("h4", [_vm._v("Creative Opportunity")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                            More than 60% of our pupils are boarders and the majority of our staff live on site, so all pupils enjoy a busy, active and social environment seven days a week.\n                        "
                      )
                    ])
                  ])
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
      "section",
      { staticClass: "py-5", attrs: { id: "home-news" } },
      [
        _c(
          "b-container",
          [
            _c("h3", { staticClass: "text-center" }, [
              _vm._v("Upcoming "),
              _c("span", [_vm._v("Events")])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-center w-75 m-auto" }, [
              _vm._v(
                "\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n        "
              )
            ]),
            _vm._v(" "),
            _c(
              "b-row",
              { staticClass: "mt-5" },
              [
                _c(
                  "b-col",
                  { attrs: { sm: "4" } },
                  [
                    _c(
                      "b-card",
                      {
                        staticClass: "mb-2",
                        attrs: {
                          title: "Event Title",
                          "img-src": "https://picsum.photos/600/300/?image=25",
                          "img-alt": "Image",
                          "img-top": "",
                          tag: "article"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _vm._v(
                            "\n                Some quick example text to build on the card title and make up the bulk of the card's content.\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-block",
                            attrs: { href: "#", variant: "primary" }
                          },
                          [_vm._v("View Details")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { sm: "4" } },
                  [
                    _c(
                      "b-card",
                      {
                        staticClass: "mb-2",
                        attrs: {
                          title: "Event Title",
                          "img-src": "https://picsum.photos/600/300/?image=25",
                          "img-alt": "Image",
                          "img-top": "",
                          tag: "article"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _vm._v(
                            "\n                Some quick example text to build on the card title and make up the bulk of the card's content.\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-block",
                            attrs: { href: "#", variant: "primary" }
                          },
                          [_vm._v("View Details")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { sm: "4" } },
                  [
                    _c(
                      "b-card",
                      {
                        staticClass: "mb-2",
                        attrs: {
                          title: "Event Title",
                          "img-src": "https://picsum.photos/600/300/?image=25",
                          "img-alt": "Image",
                          "img-top": "",
                          tag: "article"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _vm._v(
                            "\n                Some quick example text to build on the card title and make up the bulk of the card's content.\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-block",
                            attrs: { href: "#", variant: "primary" }
                          },
                          [_vm._v("View Details")]
                        )
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
              "div",
              { staticClass: "mt-3 text-center" },
              [
                _c(
                  "router-link",
                  { staticClass: "btn-primary btn", attrs: { to: "#" } },
                  [
                    _vm._v("View All Events "),
                    _c("i", { staticClass: "icon-long-arrow-right" })
                  ]
                )
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
      "section",
      { staticClass: "gray-bg py-5" },
      [
        _c("b-container", [
          _c("h3", { staticClass: "text-center" }, [
            _vm._v("Explore "),
            _c("span", [_vm._v("Our School")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-center w-75 m-auto" }, [
            _vm._v(
              "\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-5" },
            [
              _c(
                "b-row",
                { staticClass: "images-wrapper" },
                _vm._l(_vm.media, function(image, imageIndex) {
                  return _c("b-col", { key: imageIndex, attrs: { sm: "3" } }, [
                    _c("div", {
                      staticClass: "image mb-4",
                      staticStyle: {
                        height: "200px",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                      },
                      style: { backgroundImage: "url(" + image + ")" },
                      on: {
                        click: function($event) {
                          _vm.index = imageIndex
                        }
                      }
                    })
                  ])
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-3 text-center" },
                [
                  _c(
                    "router-link",
                    { staticClass: "btn-primary btn", attrs: { to: "#" } },
                    [
                      _vm._v("View All Pictures "),
                      _c("i", { staticClass: "icon-long-arrow-right" })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("CoolLightBox", {
                attrs: { items: _vm.media, index: _vm.index },
                on: {
                  close: function($event) {
                    _vm.index = null
                  }
                }
              })
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/homepage.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/pages/homepage.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage_vue_vue_type_template_id_43b1f018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.vue?vue&type=template&id=43b1f018& */ "./resources/js/views/pages/homepage.vue?vue&type=template&id=43b1f018&");
/* harmony import */ var _homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/homepage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _homepage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/pages/homepage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _homepage_vue_vue_type_template_id_43b1f018___WEBPACK_IMPORTED_MODULE_0__["render"],
  _homepage_vue_vue_type_template_id_43b1f018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/homepage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/homepage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/pages/homepage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./homepage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/homepage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/homepage.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/pages/homepage.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./homepage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/homepage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/homepage.vue?vue&type=template&id=43b1f018&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/pages/homepage.vue?vue&type=template&id=43b1f018& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_template_id_43b1f018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./homepage.vue?vue&type=template&id=43b1f018& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/homepage.vue?vue&type=template&id=43b1f018&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_template_id_43b1f018___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_template_id_43b1f018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
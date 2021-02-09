(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/lms/issue_book.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/lms/issue_book.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
      user: '',
      user_info: {},
      book: '',
      books: [],
      record: {},
      lists: {},
      allSelected: false,
      check: [],
      errors: [],
      loaded: 1,
      render: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    var params = this.$route.params; // this.$refs.user.$el.focus();
    // this.getInfo();
  },
  methods: {
    rerenderSelf: function rerenderSelf() {
      this.$emit('rerender', Date.now());
    },
    scanLibPass: function scanLibPass() {
      var _this = this;

      var barcode = this.user;

      if (barcode != '' && barcode != undefined) {
        var params = {
          barcode: barcode
        };
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('book/pass/info-by-barcode', params).then(function (res) {
          _this.user_info = res.data.data;
        });
      }
    },
    scanLibBook: function scanLibBook() {
      var _this2 = this;

      var barcode = this.book;
      var hasMatch = false;

      for (b in this.books) {
        if (b.barcode == barcode) {
          hasMatch = true;
        }
      }

      if (barcode != '' && barcode != undefined && hasMatch == false) {
        var params = {
          barcode: barcode
        };
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('book/info-by-barcode', params).then(function (res) {
          _this2.books.push(res.data);
        });
      }
    },
    saveData: function saveData() {
      var _this3 = this;

      var bookList = [];
      var b;
      this.books.forEach(function (b, i) {
        bookList.push(b.id);
      });
      var params = {
        pass: this.user_info.id,
        books: bookList
      };
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('lms/book/issue', params).then(function (res) {
        if (res.data.status) {
          _this3.$toast.success('Book issued successfully.'); // this.rerenderSelf();


          _this3.user = "";
          _this3.user_info = "";
          _this3.book = "";
          _this3.books = "";
        } else {
          _this3.$toast.error('Data not saved, please try again.');
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getInfo: function getInfo() {
      var _this4 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('lms/setting').then(function (res) {
        _this4.id = res.data.id;
        _this4.record = res.data;
        _this4.loaded = 1;
        $('.select2').each(function () {
          $(this).trigger('change');
        });
      });
    },
    updateData: function updateData() {
      var _this5 = this;

      var params = {
        record: this.record
      },
          is_valid = $('#lms_settings').is_valid();

      if (is_valid && this.user_info.id) {
        this.loaded = 0;
        this.errors = [];
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('lms/book/issue', params).then(function (res) {
          _this5.loaded = 1;

          if (res.data.status) {
            _this5.record = {};

            _this5.$toast.success(res.data.message);

            _this5.$forceUpdate();
          } else {
            _this5.errors = res.data.errors;
          }
        })["catch"](function (error) {
          _this5.loaded = 1;
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/lms/issue_book.vue?vue&type=template&id=518526d5&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/lms/issue_book.vue?vue&type=template&id=518526d5& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Issue Book")]),
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
        _c("li", [_vm._v("Issue Book")])
      ])
    ]),
    _vm._v(" "),
    _vm.loaded
      ? _c("div", [
          !_vm.loaded
            ? _c("div", { staticClass: "text-center" }, [
                _c("img", {
                  staticStyle: { "max-width": "100%" },
                  attrs: {
                    src: _vm.baseURL + "img/preloader.gif",
                    alt: "Loading"
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "card height-auto" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", [
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
                      _c("div", { staticClass: "row mb-3" }, [
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Scan Library Pass")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user,
                                  expression: "user"
                                }
                              ],
                              ref: "user",
                              staticClass: "form-control",
                              attrs: { type: "text", autofocus: "" },
                              domProps: { value: _vm.user },
                              on: {
                                change: function($event) {
                                  return _vm.scanLibPass()
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.user = $event.target.value
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _vm.user_info.id
                            ? _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v("Scan Book")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.book,
                                      expression: "book"
                                    }
                                  ],
                                  ref: "book",
                                  staticClass: "form-control",
                                  attrs: { type: "text", autofocus: "" },
                                  domProps: { value: _vm.book },
                                  on: {
                                    change: function($event) {
                                      return _vm.scanLibBook()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.book = $event.target.value
                                    }
                                  }
                                })
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-5" }, [
                          _vm.user_info.id
                            ? _c(
                                "table",
                                { staticClass: "table table-bordered" },
                                [
                                  _c("tr", [
                                    _c("th", [_vm._v("ID")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(_vm.user_info.barcode))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("th", [_vm._v("NAME")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(_vm.user_info.name))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("th", [_vm._v("ROLE")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(_vm.user_info.type))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("th", [_vm._v("LIMIT OF BOOKS")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(_vm.user_info.book_issue_limit)
                                      )
                                    ])
                                  ])
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.books.length && _vm.user_info.id
                        ? _c("div", { staticClass: "table-responsive mb-3" }, [
                            _c(
                              "table",
                              { staticClass: "table table-bordered" },
                              [
                                _vm._m(0),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.books, function(b, i) {
                                    return _c("tr", { key: i }, [
                                      _c("td", [_vm._v(_vm._s(i + 1))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(b.title))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(b.author))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(b.publication_year))
                                      ])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.user_info.id && _vm.books.length
                        ? _c("div", { staticClass: "form-group mg-t-8" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.saveData()
                                  }
                                }
                              },
                              [_vm._v("Submit")]
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
                        : _vm._e()
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("S.No.")]),
        _vm._v(" "),
        _c("th", [_vm._v("DESCRIPTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("Author")]),
        _vm._v(" "),
        _c("th", [_vm._v("Publication")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/lms/issue_book.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/school-panel/lms/issue_book.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _issue_book_vue_vue_type_template_id_518526d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./issue_book.vue?vue&type=template&id=518526d5& */ "./resources/js/components/school-panel/lms/issue_book.vue?vue&type=template&id=518526d5&");
/* harmony import */ var _issue_book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./issue_book.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/lms/issue_book.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _issue_book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _issue_book_vue_vue_type_template_id_518526d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _issue_book_vue_vue_type_template_id_518526d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/lms/issue_book.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/lms/issue_book.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/school-panel/lms/issue_book.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./issue_book.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/lms/issue_book.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/lms/issue_book.vue?vue&type=template&id=518526d5&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/lms/issue_book.vue?vue&type=template&id=518526d5& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_book_vue_vue_type_template_id_518526d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./issue_book.vue?vue&type=template&id=518526d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/lms/issue_book.vue?vue&type=template&id=518526d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_book_vue_vue_type_template_id_518526d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_book_vue_vue_type_template_id_518526d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
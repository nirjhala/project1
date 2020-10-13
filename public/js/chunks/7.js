(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/book/add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lms/book/add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var d = new Date();
var currentYear = d.getFullYear();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['image_src', 'image'],
  data: function data() {
    return {
      id: '',
      record: {
        isbn: '',
        title: '',
        subtitle: '',
        author: '',
        edition: '',
        edition_year: currentYear,
        no_of_copies: 1,
        cover_image: '',
        physical_form: 'Other',
        publisher: '',
        series: '',
        size: 'medium',
        price: 0,
        category: '',
        editor: '',
        publication_year: currentYear,
        publication_place: '',
        total_pages: '',
        book_source: 'other',
        notes: '',
        pdf_link: ''
      },
      categories: [],
      years: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    var params = this.$route.params;

    if (params.id != undefined && params.id != '') {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }

    for (var i = currentYear; i >= currentYear - 20; i--) {
      this.years.push(i);
    }

    this.getCategories();
  },
  methods: {
    pdfHandler: function pdfHandler(e) {
      this.pdf_file = e.target.files[0];
    },
    getCategories: function getCategories() {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('book/category/all').then(function (res) {
        _this.categories = res.data;
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
      instance.get('get-book-info/' + id).then(function (res) {
        _this2.id = res.data.data.id;
        _this2.bookName = res.data.data.name;
        _this2.loaded = 1;
        $('.select2').each(function () {
          $(this).trigger('change');
        });
      });
    },
    addData: function addData() {
      var _this3 = this;

      var params = {
        record: this.record,
        image: this.image
      };
      var is_valid = $('#addBookForm').is_valid();

      if (is_valid) {
        // params = JSON.stringify(params);
        var formData = new FormData();
        formData.append('pdf_file', this.pdf_file); // Pdf file

        formData.append('record', JSON.stringify(params.record));
        formData.append('image', params.image);
        this.loaded = 0;
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('book/add', params).then(function (res) {
          if (res.data.status) {
            _this3.$router.push({
              name: 'book'
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

      var params = {
        id: this.id,
        name: this.bookName
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('update-book', params).then(function (res) {
        if (res.data.status) {
          _this4.$router.push({
            name: 'book'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/book/add.vue?vue&type=template&id=7d2b8aa3&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lms/book/add.vue?vue&type=template&id=7d2b8aa3& ***!
  \***************************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "book" } }
            },
            [_vm._v("View Book")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Book")]),
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
            _c("router-link", { attrs: { to: { name: "book" } } }, [
              _vm._v("Book")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Book")])
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
                    _vm._v(_vm._s(!_vm.id ? "Add New" : "Edit") + " Book")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "new-added-form",
                  attrs: { id: "addBookForm", enctype: "multipart/form-data" },
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
                    _c("div", { staticClass: "col-sm-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("ISBN")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.isbn,
                                  expression: "record.isbn"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", placeholder: "ISBN" },
                              domProps: { value: _vm.record.isbn },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "isbn",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Title *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.title,
                                  expression: "record.title"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Title",
                                required: ""
                              },
                              domProps: { value: _vm.record.title },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "title",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Subtitle")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.subtitle,
                                  expression: "record.subtitle"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", placeholder: "Subtitle" },
                              domProps: { value: _vm.record.subtitle },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "subtitle",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Author")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.author,
                                  expression: "record.author"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", placeholder: "Author" },
                              domProps: { value: _vm.record.author },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "author",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Edition")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.edition,
                                  expression: "record.edition"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Edition",
                                required: ""
                              },
                              domProps: { value: _vm.record.edition },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "edition",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Edition Year")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.record.edition_year,
                                    expression: "record.edition_year"
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
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.record,
                                      "edition_year",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.years, function(yr) {
                                return _c(
                                  "option",
                                  { domProps: { value: yr } },
                                  [_vm._v(_vm._s(yr))]
                                )
                              }),
                              0
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("No. of Copies *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.no_of_copies,
                                  expression: "record.no_of_copies"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                placeholder: "No. of Copies",
                                required: ""
                              },
                              domProps: { value: _vm.record.no_of_copies },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "no_of_copies",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Physical Form")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.record.physical_form,
                                    expression: "record.physical_form"
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
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.record,
                                      "physical_form",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "Book" } }, [
                                  _vm._v("Book")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "Journal" } }, [
                                  _vm._v("Journal")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CD/DVD" } }, [
                                  _vm._v("CD/DVD")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "Manuscript" } },
                                  [_vm._v("Manuscript")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "Other" } }, [
                                  _vm._v("Other")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Publisher")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.publisher,
                                  expression: "record.publisher"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", placeholder: "Publisher" },
                              domProps: { value: _vm.record.publisher },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "publisher",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Publication Year")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.record.publication_year,
                                    expression: "record.publication_year"
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
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.record,
                                      "publication_year",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.years, function(yr) {
                                return _c(
                                  "option",
                                  { domProps: { value: yr } },
                                  [_vm._v(_vm._s(yr))]
                                )
                              }),
                              0
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Series *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.series,
                                  expression: "record.series"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", placeholder: "Series" },
                              domProps: { value: _vm.record.series },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "series",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Size")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.record.size,
                                    expression: "record.size"
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
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.record,
                                      "size",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "medium" } }, [
                                  _vm._v("Medium")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "large" } }, [
                                  _vm._v("Large")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "huge" } }, [
                                  _vm._v("Huge")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "small" } }, [
                                  _vm._v("Small")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "tiny" } }, [
                                  _vm._v("Tiny")
                                ])
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Price")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.price,
                                  expression: "record.price"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number", placeholder: "Price" },
                              domProps: { value: _vm.record.price },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "price",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Category")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.record.category,
                                    expression: "record.category"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { required: "" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.record,
                                      "category",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select Category")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.categories, function(c) {
                                  return _c(
                                    "option",
                                    { domProps: { value: c.id } },
                                    [_vm._v(_vm._s(c.name))]
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
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Editor")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.editor,
                                  expression: "record.editor"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", placeholder: "Editor" },
                              domProps: { value: _vm.record.editor },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "editor",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Publication Place *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.publication_place,
                                  expression: "record.publication_place"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Publication Place"
                              },
                              domProps: { value: _vm.record.publication_place },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "publication_place",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Total Pages")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.total_pages,
                                  expression: "record.total_pages"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                placeholder: "Total Pages"
                              },
                              domProps: { value: _vm.record.total_pages },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.record,
                                    "total_pages",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-4 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Source of Book")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.record.book_source,
                                    expression: "record.book_source"
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
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.record,
                                      "book_source",
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
                                  { attrs: { value: "local purchase" } },
                                  [_vm._v("Local Purchase")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "university" } },
                                  [_vm._v("University")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "world bank donation" } },
                                  [_vm._v("World Bank Donation")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "personal donation" } },
                                  [_vm._v("Personal Donation")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "other" } }, [
                                  _vm._v("Other")
                                ])
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Notes")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.notes,
                              expression: "record.notes"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Notes" },
                          domProps: { value: _vm.record.notes },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.record, "notes", $event.target.value)
                            }
                          }
                        })
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
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("div", { staticClass: "mb-3" }, [
                        _c("label", [_vm._v("Cover Image")]),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "w-100 featuredImage",
                          attrs: {
                            src: _vm.image_src,
                            alt: "",
                            title: "",
                            id: "featuredImage"
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.image,
                              expression: "image"
                            }
                          ],
                          attrs: {
                            type: "hidden",
                            value: "",
                            id: "featuredImageId"
                          },
                          domProps: { value: _vm.image },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.image = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block uploadImageBtn",
                          attrs: {
                            type: "button",
                            "data-image": "#featuredImage",
                            "data-field": "#featuredImageId"
                          }
                        },
                        [_vm._v("Upload Image")]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-3 form-group" }, [
                        _c("label", [_vm._v("Upload PDF File (If ebook)")]),
                        _vm._v(" "),
                        _c("input", {
                          attrs: { type: "file", value: "" },
                          on: { change: _vm.pdfHandler }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group h3 font-bold" }, [
                        _vm._v(
                          "\n                                OR\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("PDF Link (If ebook)")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.pdf_link,
                              expression: "record.pdf_link"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", value: "" },
                          domProps: { value: _vm.record.pdf_link },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "pdf_link",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
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

/***/ "./resources/js/components/lms/book/add.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/lms/book/add.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_7d2b8aa3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=7d2b8aa3& */ "./resources/js/components/lms/book/add.vue?vue&type=template&id=7d2b8aa3&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/lms/book/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_7d2b8aa3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_7d2b8aa3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lms/book/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lms/book/add.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/lms/book/add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/book/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lms/book/add.vue?vue&type=template&id=7d2b8aa3&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/lms/book/add.vue?vue&type=template&id=7d2b8aa3& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_7d2b8aa3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=7d2b8aa3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/book/add.vue?vue&type=template&id=7d2b8aa3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_7d2b8aa3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_7d2b8aa3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
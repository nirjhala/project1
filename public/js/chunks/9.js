(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/pass.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lms/pass.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: '',
      record: {
        name: '',
        mobile: '',
        mobile2: '',
        type: '',
        address: ''
      },
      lists: {},
      allSelected: false,
      check: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    var params = this.$route.params;
    this.getData();

    if (params.id != undefined && params.id != '') {
      this.getInfo(params.id);
    }
  },
  methods: {
    rerenderSelf: function rerenderSelf() {
      console.log("reload");
      this.$emit('rerender', 1);
    },
    printPass: function printPass(id_name) {
      var divToPrint = document.getElementById(id_name);
      var newWin = window.open('', 'Time-Table', "width=800,height=600");
      newWin.document.open();
      var html = "\n          <html>\n              <head>\n                  <title>Library Pass</title>\n                  <style>\n                  body {\n                      margin:0;\n                      font-family: sans-serif;\n                  }\n                  @page {\n                      size: 2.13in 3.38in;\n                      margin: 15px;\n                  }\n                  </style>\n              </head>\n              <body onload=\"window.print()\">".concat(divToPrint.innerHTML, "</body>\n          </html>");
      newWin.document.write(html);
      newWin.document.close();
      setTimeout(function () {
        newWin.close();
      }, 10);
    },
    checkAll: function checkAll() {
      var self = this;
      self.check = [];

      if (!self.allSelected) {
        $.each(self.lists.data, function (i, row) {
          // if(row.classes_count == 0)
          self.check.push(row.id);
        });
      }
    },
    getInfo: function getInfo(id) {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('book/pass/info/' + id).then(function (res) {
        _this.record = res.data;
        _this.id = res.data.id;
        _this.loaded = 1;
      });
    },
    addData: function addData() {
      var _this2 = this;

      var params = {
        'record': this.record
      },
          is_valid = $('#addPassForm').is_valid();

      if (is_valid) {
        this.loaded = 0;
        this.errors = [];
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('book/pass', params).then(function (res) {
          _this2.loaded = 1;

          if (res.data.status) {
            _this2.$toast.success(res.data.message);

            _this2.getData(1);
          } else {
            _this2.errors = res.data.errors;
          }
        })["catch"](function (error) {
          _this2.loaded = 1;
          console.log(error);
        });
      }
    },
    updateData: function updateData(id) {
      var _this3 = this;

      var params = {
        'record': this.record
      },
          is_valid = $('#addPassForm').is_valid();

      if (is_valid) {
        this.loaded = 0;
        this.errors = [];
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('library/pass/edit/' + id, params).then(function (res) {
          _this3.loaded = 1;

          if (res.data.status) {
            _this3.record = {
              name: ''
            };

            _this3.$toast.success(res.data.message);

            _this3.$router.push({
              name: 'book-pass'
            });
          } else {
            _this3.errors = res.data.errors;
          }
        })["catch"](function (error) {
          _this3.loaded = 1;
          console.log(error);
        });
      }
    },
    getData: function getData(page) {
      var _this4 = this;

      if (typeof page === 'undefined') {
        page = 1;
      }

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('book/pass/?page=' + page).then(function (res) {
        _this4.loaded = 1;
        _this4.lists = res.data;
      })["catch"](function (error) {
        _this4.loaded = 1;
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
            var instance = axios.create({
              baseURL: _this5.apiBaseUrl,
              headers: {
                'Authorization': 'Bearer ' + _this5.token,
                'Accept': 'application/json'
              }
            });
            instance.post('book/pass/remove', params).then(function (res) {
              if (res.status) {
                _this5.getData();

                _this5.$toast.success('Selected record(s) has been deleted.');
              } else {
                _this5.loaded = 1;

                _this5.$toast.warning('Record(s) unable to delete.');
              }
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
    // call again the method if the route changes
    '$route': function $route(to, from) {
      var params = this.$route.params;
      this.loaded = 0;
      this.getData();

      if (params.id != undefined && params.id != '') {
        this.getInfo(params.id);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/pass.vue?vue&type=template&id=1a84718e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lms/pass.vue?vue&type=template&id=1a84718e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Library Pass")]),
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
        _c("li", [_vm._v("Library Pass")])
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c(
                "form",
                {
                  staticClass: "new-added-form",
                  attrs: { id: "addPassForm" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.id ? _vm.updateData(_vm.id) : _vm.addData()
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
                  _c("div", { staticClass: "card height-auto" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _vm._m(0),
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
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.name,
                              expression: "record.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            value: "",
                            placeholder: "Name *",
                            required: ""
                          },
                          domProps: { value: _vm.record.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.record, "name", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.mobile,
                              expression: "record.mobile"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "tel",
                            value: "",
                            placeholder: "Mobile No. *",
                            required: ""
                          },
                          domProps: { value: _vm.record.mobile },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "mobile",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.mobile2,
                              expression: "record.mobile2"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "tel",
                            value: "",
                            placeholder: "Mobile No. 2 (Alternate No.)"
                          },
                          domProps: { value: _vm.record.mobile2 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "mobile2",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.record.type,
                                expression: "record.type"
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
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.record,
                                  "type",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Type *")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "student" } }, [
                              _vm._v("Student")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "teacher" } }, [
                              _vm._v("Teacher")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "other" } }, [
                              _vm._v("Other")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.address,
                              expression: "record.address"
                            }
                          ],
                          staticClass: "form-control h-auto",
                          attrs: {
                            rows: "8",
                            placeholder: "Address *",
                            required: ""
                          },
                          domProps: { value: _vm.record.address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "address",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-8" }, [
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
                      _c("div", [
                        _vm._m(2),
                        _vm._v(" "),
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
                              !_vm.lists
                                ? _c(
                                    "div",
                                    { staticClass: "alert alert-warning" },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-exclamation-circle"
                                      }),
                                      _vm._v(
                                        "\r\n                                      No record(s) found.\r\n                                  "
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.lists
                                ? _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table display data-table text-nowrap"
                                        },
                                        [
                                          _c("thead", [
                                            _c("tr", [
                                              _c("th", [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-check" },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.allSelected,
                                                          expression:
                                                            "allSelected"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-check-input",
                                                      attrs: {
                                                        type: "checkbox"
                                                      },
                                                      domProps: {
                                                        checked: Array.isArray(
                                                          _vm.allSelected
                                                        )
                                                          ? _vm._i(
                                                              _vm.allSelected,
                                                              null
                                                            ) > -1
                                                          : _vm.allSelected
                                                      },
                                                      on: {
                                                        click: _vm.checkAll,
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.allSelected,
                                                            $$el =
                                                              $event.target,
                                                            $$c = $$el.checked
                                                              ? true
                                                              : false
                                                          if (
                                                            Array.isArray($$a)
                                                          ) {
                                                            var $$v = null,
                                                              $$i = _vm._i(
                                                                $$a,
                                                                $$v
                                                              )
                                                            if ($$el.checked) {
                                                              $$i < 0 &&
                                                                (_vm.allSelected = $$a.concat(
                                                                  [$$v]
                                                                ))
                                                            } else {
                                                              $$i > -1 &&
                                                                (_vm.allSelected = $$a
                                                                  .slice(0, $$i)
                                                                  .concat(
                                                                    $$a.slice(
                                                                      $$i + 1
                                                                    )
                                                                  ))
                                                            }
                                                          } else {
                                                            _vm.allSelected = $$c
                                                          }
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "form-check-label"
                                                      },
                                                      [_vm._v("Sr. No.")]
                                                    )
                                                  ]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Name")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Mobile No.")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Type")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Address")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Barcode")])
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(_vm.lists.data, function(
                                              list,
                                              i
                                            ) {
                                              return _c("tr", [
                                                _c("td", [
                                                  !list.classes_count
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-check"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.check,
                                                                expression:
                                                                  "check"
                                                              }
                                                            ],
                                                            key:
                                                              _vm.lists.from +
                                                              i,
                                                            staticClass:
                                                              "form-check-input",
                                                            attrs: {
                                                              type: "checkbox"
                                                            },
                                                            domProps: {
                                                              value: list.id,
                                                              checked: Array.isArray(
                                                                _vm.check
                                                              )
                                                                ? _vm._i(
                                                                    _vm.check,
                                                                    list.id
                                                                  ) > -1
                                                                : _vm.check
                                                            },
                                                            on: {
                                                              change: function(
                                                                $event
                                                              ) {
                                                                var $$a =
                                                                    _vm.check,
                                                                  $$el =
                                                                    $event.target,
                                                                  $$c = $$el.checked
                                                                    ? true
                                                                    : false
                                                                if (
                                                                  Array.isArray(
                                                                    $$a
                                                                  )
                                                                ) {
                                                                  var $$v =
                                                                      list.id,
                                                                    $$i = _vm._i(
                                                                      $$a,
                                                                      $$v
                                                                    )
                                                                  if (
                                                                    $$el.checked
                                                                  ) {
                                                                    $$i < 0 &&
                                                                      (_vm.check = $$a.concat(
                                                                        [$$v]
                                                                      ))
                                                                  } else {
                                                                    $$i > -1 &&
                                                                      (_vm.check = $$a
                                                                        .slice(
                                                                          0,
                                                                          $$i
                                                                        )
                                                                        .concat(
                                                                          $$a.slice(
                                                                            $$i +
                                                                              1
                                                                          )
                                                                        ))
                                                                  }
                                                                } else {
                                                                  _vm.check = $$c
                                                                }
                                                              }
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "form-check-label"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.lists
                                                                    .from + i
                                                                ) + "."
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  list.classes_count
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-check"
                                                        },
                                                        [
                                                          _c("input", {
                                                            staticClass:
                                                              "form-check-input",
                                                            attrs: {
                                                              type: "checkbox",
                                                              disabled: ""
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "form-check-label"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.lists
                                                                    .from + i
                                                                ) + "."
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "router-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            path:
                                                              _vm.baseURL +
                                                              "library-pass/edit/" +
                                                              list.id,
                                                            params: list
                                                          },
                                                          "data-toggle":
                                                            "tooltip",
                                                          title: "Edit"
                                                        },
                                                        on: {
                                                          click:
                                                            _vm.rerenderSelf
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-edit"
                                                        }),
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(list.name)
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("div", [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-sm btn-dark",
                                                          attrs: {
                                                            type: "button"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.printPass(
                                                                "pass_" +
                                                                  list.id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-print"
                                                          }),
                                                          _vm._v(" Print")
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticStyle: {
                                                          display: "none"
                                                        },
                                                        attrs: {
                                                          id: "pass_" + list.id
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticStyle: {
                                                              border:
                                                                "1px solid #000",
                                                              "border-radius":
                                                                "12px",
                                                              overflow:
                                                                "hidden",
                                                              height:
                                                                "calc(100% - 10px)",
                                                              position:
                                                                "relative"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticStyle: {
                                                                  padding:
                                                                    "5px 0"
                                                                }
                                                              },
                                                              [
                                                                _c("img", {
                                                                  staticStyle: {
                                                                    width:
                                                                      "100%",
                                                                    height:
                                                                      "70px",
                                                                    "object-fit":
                                                                      "contain"
                                                                  },
                                                                  attrs: {
                                                                    src:
                                                                      _vm.baseURL +
                                                                      "img/profiles/" +
                                                                      list
                                                                        .parent_school
                                                                        .logo,
                                                                    alt: ""
                                                                  }
                                                                })
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticStyle: {
                                                                  background:
                                                                    "#000",
                                                                  padding:
                                                                    "10px",
                                                                  "text-align":
                                                                    "center",
                                                                  color: "#fff"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticStyle: {
                                                                      "font-size":
                                                                        "16px",
                                                                      "text-transform":
                                                                        "uppercase",
                                                                      "font-weight":
                                                                        "bold"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        list
                                                                          .parent_school
                                                                          .name
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticStyle: {
                                                                      "font-size":
                                                                        "8px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "LIBRARY PASS"
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticStyle: {
                                                                  padding:
                                                                    "10px"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "table",
                                                                  {
                                                                    staticStyle: {
                                                                      width:
                                                                        "100%",
                                                                      "font-size":
                                                                        "10px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("tr", [
                                                                      _c(
                                                                        "th",
                                                                        {
                                                                          attrs: {
                                                                            align:
                                                                              "left"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Name"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticStyle: {
                                                                            "white-space":
                                                                              "nowrap"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            ": " +
                                                                              _vm._s(
                                                                                list.name
                                                                              )
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c(
                                                                        "th",
                                                                        {
                                                                          staticStyle: {
                                                                            "white-space":
                                                                              "nowrap"
                                                                          },
                                                                          attrs: {
                                                                            align:
                                                                              "left",
                                                                            valign:
                                                                              "top"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Mobile No."
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticStyle: {
                                                                            "white-space":
                                                                              "nowrap"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            ": " +
                                                                              _vm._s(
                                                                                list.mobile
                                                                              )
                                                                          ),
                                                                          _c(
                                                                            "br"
                                                                          ),
                                                                          list.mobile2
                                                                            ? _c(
                                                                                "span",
                                                                                [
                                                                                  _vm._v(
                                                                                    "  " +
                                                                                      _vm._s(
                                                                                        list.mobile2
                                                                                      )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            : _vm._e()
                                                                        ]
                                                                      )
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c(
                                                                        "th",
                                                                        {
                                                                          attrs: {
                                                                            align:
                                                                              "left"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Type"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          ": " +
                                                                            _vm._s(
                                                                              list.type
                                                                            )
                                                                        )
                                                                      ])
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c(
                                                                        "th",
                                                                        {
                                                                          attrs: {
                                                                            align:
                                                                              "left"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Address"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          ": " +
                                                                            _vm._s(
                                                                              list.address
                                                                            )
                                                                        )
                                                                      ])
                                                                    ])
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticStyle: {
                                                                      position:
                                                                        "absolute",
                                                                      bottom:
                                                                        "15px",
                                                                      left: "0",
                                                                      right: "0"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticStyle: {
                                                                          "text-align":
                                                                            "center"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          [
                                                                            _c(
                                                                              "img",
                                                                              {
                                                                                staticStyle: {
                                                                                  "max-width":
                                                                                    "100%"
                                                                                },
                                                                                attrs: {
                                                                                  src:
                                                                                    list.barcode_image,
                                                                                  alt:
                                                                                    ""
                                                                                }
                                                                              }
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticStyle: {
                                                                              "letter-spacing":
                                                                                "5px",
                                                                              "font-size":
                                                                                "8px",
                                                                              margin:
                                                                                "2px 0"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "\r\n                                                                      " +
                                                                                _vm._s(
                                                                                  list.barcode
                                                                                ) +
                                                                                "\r\n                                                                  "
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\r\n                                                    " +
                                                      _vm._s(list.mobile) +
                                                      "\r\n                                                    "
                                                  ),
                                                  list.mobile2
                                                    ? _c("span", [
                                                        _c("br"),
                                                        _vm._v(
                                                          _vm._s(list.mobile2)
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(list.type))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(list.address))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "center"
                                                      }
                                                    },
                                                    [
                                                      _c("div", [
                                                        _c("img", {
                                                          attrs: {
                                                            src:
                                                              list.barcode_image,
                                                            alt: ""
                                                          }
                                                        })
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticStyle: {
                                                            "letter-spacing":
                                                              "5px",
                                                            "font-size": "8px",
                                                            margin: "2px 0"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                                            " +
                                                              _vm._s(
                                                                list.barcode
                                                              ) +
                                                              "\r\n                                                        "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ])
                                            }),
                                            0
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("pagination", {
                                        attrs: { data: _vm.lists },
                                        on: {
                                          "pagination-change-page": _vm.getData
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                ]
              )
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
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("Member Registration")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        {
          staticClass:
            "btn-fill-lg btn-gradient-yellow btn-hover-bluedark btn-block",
          attrs: { type: "submit" }
        },
        [_vm._v("Save")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("All Library Pass")])
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-link text-dark removeBtn",
          attrs: { type: "submit", "data-toggle": "tooltip", title: "Remove" }
        },
        [_c("i", { staticClass: "fa fa-trash fa-2x" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/lms/pass.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/lms/pass.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pass_vue_vue_type_template_id_1a84718e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass.vue?vue&type=template&id=1a84718e& */ "./resources/js/components/lms/pass.vue?vue&type=template&id=1a84718e&");
/* harmony import */ var _pass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pass.vue?vue&type=script&lang=js& */ "./resources/js/components/lms/pass.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pass_vue_vue_type_template_id_1a84718e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pass_vue_vue_type_template_id_1a84718e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lms/pass.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lms/pass.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/lms/pass.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./pass.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/pass.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lms/pass.vue?vue&type=template&id=1a84718e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/lms/pass.vue?vue&type=template&id=1a84718e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pass_vue_vue_type_template_id_1a84718e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./pass.vue?vue&type=template&id=1a84718e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lms/pass.vue?vue&type=template&id=1a84718e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pass_vue_vue_type_template_id_1a84718e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pass_vue_vue_type_template_id_1a84718e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
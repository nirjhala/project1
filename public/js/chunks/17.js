(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['image_src', 'image'],
  data: function data() {
    return {
      id: '',
      role: '',
      mobile: '',
      password: '',
      title: 'Mr.',
      fname: '',
      lname: '',
      name: '',
      dob: '',
      gender: 'Male',
      email: '',
      address1: '',
      address2: '',
      state: '',
      city: '',
      pin_code: '',
      generated_password: '',
      states: [],
      cities: [],
      pincodes: [],
      errors: [],
      loaded: 0,
      role_options: [],
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    var params = this.$route.params;
    this.getRoles();
    this.getStates();

    if (params.id != undefined && params.id != '') {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getFullName: function getFullName() {
      this.name = (this.title + ' ' + this.fname + ' ' + this.lname).trim();
    },
    fillPassword: function fillPassword() {
      this.password = $('#generatedPassword').val();
      $('#generatePasswordModal').modal('hide');
    },
    getPincodes: function getPincodes() {
      var _this = this;

      var city = this.city,
          params = {
        id: city
      };
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('get-pincodes-by-city', params).then(function (res) {
        _this.pincodes = res.data;
      });
    },
    getRoles: function getRoles() {
      var _this2 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-roles').then(function (res) {
        var self = _this2;
        var options = [{
          id: '',
          text: 'Select Role'
        }];
        $.each(res.data, function (i, row) {
          options.push({
            id: row.id,
            text: row.name
          });
        });
        _this2.role_options = options;
      });
    },
    getCities: function getCities() {
      var _this3 = this;

      var state = this.state,
          params = {
        id: state
      };
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('get-cities-by-state', params).then(function (res) {
        _this3.cities = res.data;
      });
    },
    getStates: function getStates() {
      var _this4 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-states').then(function (res) {
        _this4.states = res.data;
      });
    },
    getInfo: function getInfo(id) {
      var _this5 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-user-info/' + id).then(function (res) {
        _this5.id = res.data.data.id;
        _this5.role = res.data.data.role;
        _this5.mobile = res.data.data.mobile;
        _this5.title = res.data.data.title;
        _this5.fname = res.data.data.fname;
        _this5.lname = res.data.data.lname;
        _this5.name = res.data.data.name;
        _this5.dob = res.data.data.dob;
        _this5.gender = res.data.data.gender;
        _this5.email = res.data.data.email;
        _this5.address1 = res.data.data.address1;
        _this5.address2 = res.data.data.address2;
        _this5.state = res.data.data.city_data ? res.data.data.city_data.state : ''; // this.city        = res.data.data.pincode_data ? res.data.data.pincode_data.city : '';

        _this5.city = res.data.data.city_id;
        _this5.pin_code = res.data.data.pin_code != null ? res.data.data.pin_code : '';
        _this5.loaded = 1;
        var media_image = res.data.data.image;
        var media_src = res.data.data.media ? _this5.baseURL + 'uploads/medium/' + res.data.data.media.image : _this5.baseURL + '/img/default.jpg';

        _this5.$emit('update-image_src-selected', media_src);

        _this5.$emit('update-image-selected', media_image);

        _this5.getCities(); // this.getPincodes();

      });
    },
    addData: function addData() {
      var _this6 = this;

      var params = {
        title: this.title,
        fname: this.fname,
        lname: this.lname,
        mobile: this.mobile,
        email: this.email,
        gender: this.gender,
        dob: this.dob,
        image: this.image,
        address1: this.address1,
        address2: this.address2,
        city_id: this.city,
        pin_code: this.pin_code,
        role: this.role,
        login: this.mobile,
        password: this.password
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('add-user', params).then(function (res) {
        if (res.data.status) {
          _this6.$router.push({
            name: 'user'
          }).then(function (res) {
            _this6.loaded = 1;

            _this6.$toast.success('Record saved.');
          })["catch"](function (err) {
            _this6.loaded = 1;
            console.log(err);
          });
        } else {
          _this6.loaded = 1;
          _this6.errors = res.data.errors;
        }
      })["catch"](function (error) {
        _this6.loaded = 1;
        console.log(error);
      });
    },
    updateData: function updateData() {
      var _this7 = this;

      var params = {
        id: this.id,
        title: this.title,
        fname: this.fname,
        lname: this.lname,
        mobile: this.mobile,
        email: this.email,
        gender: this.gender,
        dob: this.dob,
        image: this.image,
        address1: this.address1,
        address2: this.address2,
        city_id: this.city,
        pin_code: this.pin_code,
        role: this.role,
        login: this.mobile,
        password: this.password
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('update-user', params).then(function (res) {
        if (res.data.status) {
          _this7.$router.push({
            name: 'user'
          }).then(function (res) {
            _this7.loaded = 1;

            _this7.$toast.success('Record saved.');
          })["catch"](function (err) {
            _this7.loaded = 1;
            console.log(err);
          });
        } else {
          _this7.loaded = 1;
          _this7.errors = res.data.errors;
        }
      })["catch"](function (error) {
        _this7.loaded = 1;
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/add.vue?vue&type=template&id=a6b5a1b0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/add.vue?vue&type=template&id=a6b5a1b0& ***!
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
      _c(
        "div",
        { staticClass: "float-right" },
        [
          _c(
            "router-link",
            {
              staticClass: "fw-btn-fill btn-gradient-yellow text-white",
              attrs: { to: { name: "user" } }
            },
            [_vm._v("View User")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " User")]),
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
            _c("router-link", { attrs: { to: { name: "user" } } }, [
              _vm._v("User")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " User")])
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
                  _vm._m(0),
                  _vm._v(" "),
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
                        _c("label", [_vm._v("Role *")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.role,
                                expression: "role"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "role" },
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
                                _vm.role = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.role_options, function(r) {
                            return _c("option", { domProps: { value: r.id } }, [
                              _vm._v(_vm._s(r.text))
                            ])
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-xl-3 col-lg-6 col-12 form-group" },
                      [
                        _c("label", [_vm._v("Mobile No. *")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.mobile,
                              expression: "mobile"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.mobile },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.mobile = $event.target.value
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
                        _c("label", [_vm._v("Password *")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "password", id: "userPassword" },
                          domProps: { value: _vm.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.password = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "far fa fa-eye passwordToggle",
                          staticStyle: { cursor: "pointer" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(1)
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-xl-4 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Title *")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.title,
                                    expression: "title"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { required: "" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.title = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    function($event) {
                                      return _vm.getFullName()
                                    }
                                  ]
                                }
                              },
                              [
                                _c("option", { attrs: { value: "Mr." } }, [
                                  _vm._v("Mr.")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "Ms." } }, [
                                  _vm._v("Ms.")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "Mrs." } }, [
                                  _vm._v("Mrs.")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-xl-4 col-12 form-group" },
                          [
                            _c("label", [_vm._v("First Name *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.fname,
                                  expression: "fname"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", required: "" },
                              domProps: { value: _vm.fname },
                              on: {
                                keyup: function($event) {
                                  return _vm.getFullName()
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.fname = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-xl-4 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Last Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.lname,
                                  expression: "lname"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.lname },
                              on: {
                                keyup: function($event) {
                                  return _vm.getFullName()
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.lname = $event.target.value
                                }
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Display Name *")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name,
                              expression: "name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", required: "" },
                          domProps: { value: _vm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.name = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-xl-4 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Date of Birth *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.dob,
                                  expression: "dob"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "date", required: "" },
                              domProps: { value: _vm.dob },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.dob = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 form-group" }, [
                          _c("label", [_vm._v("Gender *")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.gender,
                                  expression: "gender"
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
                                  _vm.gender = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "Male" } }, [
                                _vm._v("Male")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Female" } }, [
                                _vm._v("Female")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Other" } }, [
                                _vm._v("Other")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-xl-4 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Email Address *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.email,
                                  expression: "email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "email", required: "" },
                              domProps: { value: _vm.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.email = $event.target.value
                                }
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Address Line 1")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.address1,
                              expression: "address1"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", value: "" },
                          domProps: { value: _vm.address1 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.address1 = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Address Line 2")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.address2,
                              expression: "address2"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", value: "" },
                          domProps: { value: _vm.address2 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.address2 = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-xl-4 col-12 form-group" },
                          [
                            _c("label", [_vm._v("State *")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.state,
                                    expression: "state"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.state = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    function($event) {
                                      return _vm.getCities()
                                    }
                                  ]
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select State")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.states, function(s) {
                                  return _c(
                                    "option",
                                    { domProps: { value: s.id } },
                                    [
                                      _vm._v(
                                        _vm._s(s.name) +
                                          ", " +
                                          _vm._s(s.country_name.name)
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 form-group" }, [
                          _c("label", [_vm._v("City *")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.city,
                                  expression: "city"
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
                                  _vm.city = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select City")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.cities, function(s) {
                                return _c(
                                  "option",
                                  { domProps: { value: s.id } },
                                  [_vm._v(_vm._s(s.name))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-xl-4 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Pincode")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pin_code,
                                  expression: "pin_code"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "tel", required: "" },
                              domProps: { value: _vm.pin_code },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.pin_code = $event.target.value
                                }
                              }
                            })
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3" }, [
                      _c("div", { staticClass: "mb-3" }, [
                        _c("label", [_vm._v("Upload Image")]),
                        _vm._v(" "),
                        _vm.image_src
                          ? _c("img", {
                              staticClass: "w-100 uploadImage",
                              attrs: {
                                src: _vm.image_src,
                                alt: "",
                                title: "",
                                id: "featuredImage",
                                "data-image": "#featuredImage",
                                "data-field": "#featuredImageId"
                              }
                            })
                          : _vm._e(),
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
                      )
                    ])
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
                ]
              )
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal align-middle",
        attrs: { id: "generatePasswordModal" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.generated_password,
                      expression: "generated_password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "generatedPassword" },
                  domProps: { value: _vm.generated_password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.generated_password = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(4)
              ]),
              _vm._v(" "),
              _vm._m(5)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-info btnReflectPassword",
                  attrs: { disabled: "" },
                  on: {
                    click: function($event) {
                      return _vm.fillPassword()
                    }
                  }
                },
                [_vm._v("Okay")]
              )
            ])
          ])
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
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("Login Info")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-3 col-lg-6 col-12 form-group" }, [
      _c("label", [_vm._v(" ")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn-fill-lg bg-blue-dark btn-hover-yellow genPassBtn",
          attrs: { type: "button" }
        },
        [_vm._v("Auto Generate")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("User Info")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Generate Password")]),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "close", attrs: { "data-dismiss": "modal" } },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-secondary genPassBtn",
          attrs: { type: "button" }
        },
        [_vm._v("Generate")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("label", [
        _c("input", {
          attrs: { type: "checkbox", id: "copyConfirm", value: "1" }
        }),
        _vm._v(" Have you copied password?\n                        ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/add.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/user/add.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_a6b5a1b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=a6b5a1b0& */ "./resources/js/components/user/add.vue?vue&type=template&id=a6b5a1b0&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/user/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_a6b5a1b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_a6b5a1b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/add.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/user/add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/add.vue?vue&type=template&id=a6b5a1b0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/user/add.vue?vue&type=template&id=a6b5a1b0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_a6b5a1b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=a6b5a1b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/add.vue?vue&type=template&id=a6b5a1b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_a6b5a1b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_a6b5a1b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
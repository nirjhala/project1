(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;
var currentDate = [year, month, day].join('-');
var years = [];

for (var i = year; i >= year - 200; i--) {
  years.push(i);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['image_src', 'image'],
  data: function data() {
    return {
      record: {
        name: '',
        registration_no: '',
        roll_prefix: '',
        phone: '',
        email: '',
        est_year: '',
        address: '',
        state: '',
        city: '',
        student_id_instructions: '',
        teacher_id_instructions: '',
        staff_id_instructions: ''
      },
      logo: '',
      logo_src: 'img/default.jpg',
      favicon: '',
      favicon_src: 'img/default.jpg',
      states: [],
      cities: [],
      years: years,
      errors: [],
      loaded: 0,
      token: localStorage.getItem('token'),
      maxDate: currentDate
    };
  },
  computed: {
    name: {
      get: function get() {
        return (this.title + ' ' + this.fname + ' ' + this.lname).trim();
      },
      set: function set(newValue) {//
      }
    }
  },
  mounted: function mounted() {
    var params = this.$route.params;
    this.getSchoolInfo();
  },
  methods: {
    logoHandler: function logoHandler(e) {
      this.logo = e.target.files[0];
      this.logo_src = URL.createObjectURL(this.logo);
    },
    faviconHandler: function faviconHandler(e) {
      this.favicon = e.target.files[0];
      this.favicon_src = URL.createObjectURL(this.favicon);
    },
    getSchoolInfo: function getSchoolInfo() {
      var _this = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-school-info').then(function (res) {
        _this.states = res.data.states;
        _this.cities = res.data.cities;
        var profile = res.data.userInfo;
        _this.record.name = profile.name;
        _this.record.registration_no = profile.registration_no;
        _this.record.roll_prefix = profile.roll_prefix;
        _this.record.phone = profile.phone;
        _this.record.email = profile.email;
        _this.record.est_year = profile.est_year ? profile.est_year : '';
        _this.record.address = profile.address;
        _this.record.student_id_instructions = profile.student_id_instructions;
        _this.record.teacher_id_instructions = profile.teacher_id_instructions;
        _this.record.staff_id_instructions = profile.staff_id_instructions;
        _this.record.state = profile.city ? profile.city.state : '';
        _this.record.city = profile.city_id;
        console.log(profile);
        var logo_src = profile.logo ? _this.baseURL + 'img/profiles/' + profile.logo : _this.baseURL + '/img/default.jpg';
        var favicon_src = profile.favicon ? _this.baseURL + 'img/profiles/' + profile.favicon : _this.baseURL + '/img/default.jpg';
        _this.logo_src = logo_src;
        _this.favicon_src = favicon_src;
        _this.loaded = 1;
      });
    },
    getCities: function getCities() {
      var _this2 = this;

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
        _this2.cities = res.data;
      });
    },
    updateData: function updateData() {
      var _this3 = this;

      var formData = new FormData();
      formData.append('logo', this.logo); // Logo

      formData.append('favicon', this.favicon); // Favicon

      var params = JSON.stringify(this.record);
      formData.append('record', params); // Other Parameters

      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      });
      instance.post('general-settings', formData).then(function (res) {
        _this3.loaded = 1;

        if (res.data.status) {// location.reload();
        } else {
          _this3.errors = res.data.errors;
        }
      })["catch"](function (error) {
        _this3.loaded = 1;
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/settings.vue?vue&type=template&id=168c98d8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/settings.vue?vue&type=template&id=168c98d8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("General Settings")]),
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
        _c("li", [_vm._v("General Settings")])
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
                  attrs: { enctype: "multipart/form-data" },
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
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-4 form-group" }, [
                          _c("label", [_vm._v("School Name *")]),
                          _vm._v(" "),
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
                              placeholder: "School Name"
                            },
                            domProps: { value: _vm.record.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.record,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 form-group" }, [
                          _c("label", [_vm._v("Registration No. *")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.record.registration_no,
                                expression: "record.registration_no"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              value: "",
                              placeholder: "Registration No."
                            },
                            domProps: { value: _vm.record.registration_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.record,
                                  "registration_no",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 form-group" }, [
                          _c("label", [_vm._v("Roll No. Prefix")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.record.roll_prefix,
                                expression: "record.roll_prefix"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Roll No. Prefix",
                              required: ""
                            },
                            domProps: { value: _vm.record.roll_prefix },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.record,
                                  "roll_prefix",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 form-group" }, [
                          _c("label", [_vm._v("Phone No. *")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.record.phone,
                                expression: "record.phone"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "tel",
                              name: "",
                              placeholder: "Phone No.",
                              required: ""
                            },
                            domProps: { value: _vm.record.phone },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.record,
                                  "phone",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 form-group" }, [
                          _c("label", [_vm._v("Email Address *")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.record.email,
                                expression: "record.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              name: "",
                              placeholder: "Email Address",
                              required: ""
                            },
                            domProps: { value: _vm.record.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.record,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 form-group" }, [
                          _c("label", [_vm._v("Est. Year *")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.est_year,
                                  expression: "record.est_year"
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
                                    "est_year",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select Year")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.years, function(y) {
                                return _c(
                                  "option",
                                  { domProps: { value: y } },
                                  [_vm._v(_vm._s(y))]
                                )
                              })
                            ],
                            2
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Address *")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.address,
                              expression: "record.address"
                            }
                          ],
                          staticClass: "form-control h-auto p-3",
                          attrs: {
                            rows: "8",
                            placeholder: "Address",
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
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-6 form-group" }, [
                          _c("label", [_vm._v("State *")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.state,
                                  expression: "record.state"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { required: "" },
                              on: {
                                change: [
                                  function($event) {
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
                                      "state",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
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
                                  [_vm._v(_vm._s(s.name))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6 form-group" }, [
                          _c("label", [_vm._v("City *")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.record.city,
                                  expression: "record.city"
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
                                    "city",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select City")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.cities, function(c) {
                                return _c(
                                  "option",
                                  { domProps: { value: c.id } },
                                  [_vm._v(_vm._s(c.name))]
                                )
                              })
                            ],
                            2
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Student ID-Card Instructions *")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.student_id_instructions,
                              expression: "record.student_id_instructions"
                            }
                          ],
                          staticClass: "form-control h-auto p-3",
                          attrs: {
                            rows: "8",
                            placeholder: "Address",
                            required: ""
                          },
                          domProps: {
                            value: _vm.record.student_id_instructions
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "student_id_instructions",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Teacher ID-Card Instructions *")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.teacher_id_instructions,
                              expression: "record.teacher_id_instructions"
                            }
                          ],
                          staticClass: "form-control h-auto p-3",
                          attrs: {
                            rows: "8",
                            placeholder: "Address",
                            required: ""
                          },
                          domProps: {
                            value: _vm.record.teacher_id_instructions
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "teacher_id_instructions",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Staff ID-Card Instructions *")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.staff_id_instructions,
                              expression: "record.staff_id_instructions"
                            }
                          ],
                          staticClass: "form-control h-auto p-3",
                          attrs: {
                            rows: "8",
                            placeholder: "Address",
                            required: ""
                          },
                          domProps: { value: _vm.record.staff_id_instructions },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "staff_id_instructions",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm._m(0)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("div", { staticClass: "mb-3" }, [
                        _c("div", { staticClass: "mb-3" }, [
                          _c("label", [_vm._v("Upload Logo")]),
                          _vm._v(" "),
                          _c("label", { staticClass: "d-block" }, [
                            _c("img", {
                              staticStyle: {
                                width: "100%",
                                height: "200px",
                                "object-fit": "contain"
                              },
                              attrs: {
                                src: _vm.logo_src,
                                alt: "",
                                title: "",
                                id: "featuredImage"
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "d-none",
                              attrs: { type: "file", id: "siteLogo" },
                              on: { change: _vm.logoHandler }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass:
                              "uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block text-center",
                            attrs: { for: "siteLogo" }
                          },
                          [_vm._v("Choose Image")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-3" }, [
                        _c("div", { staticClass: "mb-3" }, [
                          _c("label", [_vm._v("Upload Favicon")]),
                          _vm._v(" "),
                          _c("label", { staticClass: "d-block text-center" }, [
                            _c("img", {
                              staticStyle: {
                                "max-width": "100%",
                                "max-height": "300px",
                                "object-fit": "contain"
                              },
                              attrs: {
                                src: _vm.favicon_src,
                                alt: "",
                                title: "",
                                id: "featuredImage"
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "d-none",
                              attrs: { type: "file", id: "siteFavicon" },
                              on: { change: _vm.faviconHandler }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass:
                              "uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block text-center",
                            attrs: { for: "siteFavicon" }
                          },
                          [_vm._v("Choose Image")]
                        )
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 form-group mg-t-8" }, [
        _c("label", [_vm._v(" ")]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
            attrs: { type: "submit" }
          },
          [_vm._v("Update")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn-fill-lg bg-blue-dark btn-hover-yellow",
            attrs: { type: "reset" }
          },
          [_vm._v("Reset")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/profile/settings.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/profile/settings.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_vue_vue_type_template_id_168c98d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=168c98d8& */ "./resources/js/components/profile/settings.vue?vue&type=template&id=168c98d8&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_168c98d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _settings_vue_vue_type_template_id_168c98d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/profile/settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profile/settings.vue?vue&type=template&id=168c98d8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/profile/settings.vue?vue&type=template&id=168c98d8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_168c98d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=template&id=168c98d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/settings.vue?vue&type=template&id=168c98d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_168c98d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_168c98d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
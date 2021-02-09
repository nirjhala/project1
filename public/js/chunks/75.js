(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
var userId = localStorage.getItem('userId');
var token = localStorage.getItem('token');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mobile: '',
      email: '',
      password: '',
      confirm_password: '',
      fname: '',
      lname: '',
      school_name: '',
      est_year: '',
      state: '',
      city_id: '',
      plan_id: '',
      weburl: '',
      errors: [],
      plans: [],
      states: [],
      cities: [],
      years: []
    };
  },
  mounted: function mounted() {
    var params = this.$route.params,
        mobile_no = params.mobile_no;

    if (mobile_no == undefined || mobile_no == '') {
      this.$router.push('get-started');
    }

    this.mobile = mobile_no;
    var year = new Date().getFullYear(),
        limit = year - 500;

    while (year >= limit) {
      this.years.push(year);
      year--;
    }

    this.getStates();
    this.getPlans();
  },
  methods: {
    getPlans: function getPlans() {
      var _this = this;

      axios.get(this.baseURL + 'api/get-all-plans').then(function (res) {
        _this.plans = res.data;
        _this.plan_id = res.data[0].id;
      });
    },
    getCities: function getCities() {
      var _this2 = this;

      var state = this.state,
          params = {
        id: state
      };
      axios.post(this.baseURL + 'api/get-cities-by-state', params).then(function (res) {
        _this2.cities = res.data;
      });
    },
    getStates: function getStates() {
      var _this3 = this;

      axios.get(this.baseURL + 'api/get-all-states').then(function (res) {
        _this3.states = res.data;
      });
    },
    registerUser: function registerUser() {
      var _this4 = this;

      var form = $('#register-form');
      var is_valid = form.is_valid();

      if (is_valid) {
        var params = {
          user: {
            mobile: this.mobile,
            email: this.email,
            login: this.mobile,
            password: this.password,
            fname: this.fname,
            lname: this.lname,
            name: (this.fname + ' ' + this.lname).trim()
          },
          school: {
            name: this.school_name,
            weburl: this.weburl,
            est_year: this.est_year,
            city_id: this.city_id,
            plan_id: this.plan_id
          }
        };
        axios.post(this.baseURL + 'api/school-register', params).then(function (res) {
          if (res.data.status) {
            swal('Success!!', 'You are registered successfully, you will be redirected to your portal.', 'success').then(function () {
              window.location = _this4.http + res.data.weburl + _this4.suffixUrl;
            });
          } else {
            _this4.errors = res.data.errors;
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "register-page-wrap" }, [
    _c("div", { staticClass: "register-page-content" }, [
      _c("div", { staticClass: "clearfix mb-5" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "float-left h-100", staticStyle: { width: "60%" } },
          [
            _c("div", { staticClass: "register-box" }, [
              _vm.errors.length
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _c(
                      "ul",
                      { staticClass: "mb-0" },
                      _vm._l(_vm.errors, function(error, index) {
                        return _c("li", { key: index }, [_vm._v(_vm._s(error))])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "login-form",
                  attrs: { id: "register-form" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.registerUser()
                    }
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "wizard-tab active",
                      attrs: { id: "login-information" }
                    },
                    [
                      _c("div", { staticClass: "form-group" }, [
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
                          attrs: {
                            type: "text",
                            placeholder: "Enter Mobile No.",
                            readonly: ""
                          },
                          domProps: { value: _vm.mobile },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.mobile = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-mobile-alt" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
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
                          attrs: {
                            type: "text",
                            placeholder: "Enter Email ID",
                            required: ""
                          },
                          domProps: { value: _vm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.email = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", { staticClass: "far fa-envelope" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
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
                          attrs: {
                            type: "password",
                            placeholder: "Enter password",
                            required: ""
                          },
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
                        _c("i", { staticClass: "fas fa-lock" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.confirm_password,
                              expression: "confirm_password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            placeholder: "Re-enter password",
                            required: ""
                          },
                          domProps: { value: _vm.confirm_password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.confirm_password = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-lock" })
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "wizard-tab",
                      attrs: { id: "personal-information" }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-6" }, [
                          _c("div", { staticClass: "form-group" }, [
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
                              attrs: {
                                type: "text",
                                placeholder: "Enter First Name",
                                required: ""
                              },
                              domProps: { value: _vm.fname },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.fname = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fas fa-user" })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("div", { staticClass: "form-group" }, [
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
                              attrs: {
                                type: "text",
                                placeholder: "Enter Last Name"
                              },
                              domProps: { value: _vm.lname },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.lname = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fas fa-user" })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.school_name,
                              expression: "school_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter School Name",
                            required: ""
                          },
                          domProps: { value: _vm.school_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.school_name = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", { staticClass: "far fa-building" })
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
                                value: _vm.est_year,
                                expression: "est_year"
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
                                _vm.est_year = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Est. Year")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.years, function(y) {
                              return _c("option", { domProps: { value: y } }, [
                                _vm._v(_vm._s(y))
                              ])
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("i", { staticClass: "far fa-calendar" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-6" }, [
                          _c("div", { staticClass: "form-group" }, [
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
                                    [_vm._v(_vm._s(s.name))]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("i", { staticClass: "fas fa-globe" })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.city_id,
                                    expression: "city_id"
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
                                    _vm.city_id = $event.target.multiple
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
                                _vm._l(_vm.cities, function(c) {
                                  return _c(
                                    "option",
                                    { domProps: { value: c.id } },
                                    [_vm._v(_vm._s(c.name))]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("i", { staticClass: "fas fa-map-marker" })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(2)
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "wizard-tab",
                      attrs: { id: "plan-information" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "row" },
                        _vm._l(_vm.plans, function(p) {
                          return _c("div", { staticClass: "col-6" }, [
                            _c("label", { staticClass: "panel-select" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.plan_id,
                                    expression: "plan_id"
                                  }
                                ],
                                staticClass: "d-none",
                                attrs: { type: "radio", name: "plan" },
                                domProps: {
                                  value: p.id,
                                  checked: _vm._q(_vm.plan_id, p.id)
                                },
                                on: {
                                  change: function($event) {
                                    _vm.plan_id = p.id
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "label-name" }, [
                                _vm._v(_vm._s(p.name) + " ₹" + _vm._s(p.cost))
                              ])
                            ])
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.landingBase + "pricing.php",
                              target: "_blank"
                            }
                          },
                          [_vm._v("Click Here")]
                        ),
                        _vm._v(
                          " To view plan details.\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(3)
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "wizard-tab", attrs: { id: "create-url" } },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.weburl,
                              expression: "weburl"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Web URL",
                            required: ""
                          },
                          domProps: { value: _vm.weburl },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.weburl = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.weburl
                        ? _c("div", { staticClass: "form-group" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.weburl) +
                                "." +
                                _vm._s(_vm.suffixUrl) +
                                "\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.weburl
                        ? _c("div", { staticClass: "form-group" }, [
                            _vm._v(
                              "\n                                Please enter weburl to make your URL.\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(4)
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "sign-up" },
        [
          _vm._v("Already have an account ? "),
          _c("router-link", { attrs: { to: { name: "get-started" } } }, [
            _vm._v("Login now!")
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "float-left h-100", staticStyle: { width: "40%" } },
      [
        _c("div", { staticClass: "register-wizard-steps d-flex" }, [
          _c("ul", [
            _c(
              "li",
              {
                staticClass: "active",
                attrs: { "data-tab": "#login-information" }
              },
              [_c("a", { attrs: { href: "#" } }, [_vm._v("Login Information")])]
            ),
            _vm._v(" "),
            _c("li", { attrs: { "data-tab": "#personal-information" } }, [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v("Personal Information")
              ])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { "data-tab": "#plan-information" } }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Select your plan")])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { "data-tab": "#create-url" } }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Create your URL")])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group mb-0" }, [
      _c(
        "button",
        {
          staticClass: "login-btn wizard-next-btn",
          attrs: { type: "button", "data-target": "#personal-information" }
        },
        [_vm._v("Proceed")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "form-group mb-0" }, [
          _c(
            "button",
            {
              staticClass: "login-btn wizard-next-btn",
              attrs: { type: "button", "data-target": "#login-information" }
            },
            [_vm._v("Previous")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "form-group mb-0" }, [
          _c(
            "button",
            {
              staticClass: "login-btn wizard-next-btn",
              attrs: { type: "button", "data-target": "#plan-information" }
            },
            [_vm._v("Proceed")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "form-group mb-0" }, [
          _c(
            "button",
            {
              staticClass: "login-btn wizard-next-btn",
              attrs: { type: "button", "data-target": "#personal-information" }
            },
            [_vm._v("Previous")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "form-group mb-0" }, [
          _c(
            "button",
            {
              staticClass: "login-btn wizard-next-btn",
              attrs: { type: "button", "data-target": "#create-url" }
            },
            [_vm._v("Proceed")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "form-group mb-0" }, [
          _c(
            "button",
            {
              staticClass: "login-btn wizard-next-btn",
              attrs: { type: "button", "data-target": "#plan-information" }
            },
            [_vm._v("Previous")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "form-group mb-0" }, [
          _c(
            "button",
            { staticClass: "login-btn", attrs: { type: "submit" } },
            [_vm._v("Submit")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/RegisterComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/RegisterComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=template&id=51f045bf& */ "./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf&");
/* harmony import */ var _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RegisterComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=template&id=51f045bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
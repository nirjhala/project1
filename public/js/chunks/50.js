(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/user/add.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/user/add.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/script */ "./resources/js/api/script.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var alphaOnly = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('aplpha', /^[A-Za-z ]*$/i);
var date = new Date();
date.setFullYear(date.getFullYear() - 18);
var month = date.getMonth() < 10 ? "0".concat(date.getMonth()) : date.getMonth();
var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['image_src', 'image'],
  data: function data() {
    return {
      maxDob: "".concat(date.getFullYear(), "-").concat(month, "-").concat(day),
      page_title: '',
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
      city: '',
      pin_code: '',
      state: '',
      generated_password: '',
      custom_field: {},
      states: [],
      cities: [],
      pincodes: [],
      custom_fields: [],
      errors: [],
      loaded: 0,
      role_options: [],
      user_certificates: {},
      certificates: [],
      token: localStorage.getItem('token')
    };
  },
  validations: {
    password: {
      requiredIf: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function () {
        return !this.$route.params.id;
      })
    },
    title: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    fname: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      alphaOnly: alphaOnly
    },
    lname: {
      alphaOnly: alphaOnly
    },
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    dob: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    email: {
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["email"]
    },
    gender: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    mobile: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      mobileNo: function mobileNo(mobile) {
        return /[0-9]{10}/.test(mobile) && mobile.length == 10;
      },
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(10)
    },
    address1: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    state: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    city: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    pin_code: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      isPincode: function isPincode(postcode) {
        return postcode.length == 0 || postcode.length == 6 && /[0-9]{6}/.test(postcode);
      }
    }
  },
  mounted: function mounted() {
    this.routeLoading();
  },
  methods: {
    routeLoading: function routeLoading() {
      var params = this.$route.params;
      this.page_title = params.role;
      this.getCustomFields();
      this.getStates();

      if (params.id != undefined && params.id != '') {
        this.getInfo(params.id);
        this.fetchCertificates();
      } else {
        this.loaded = 1;
      }
    },
    getFullName: function getFullName() {
      this.name = (this.title + ' ' + this.fname + ' ' + this.lname).trim();
    },
    fillPassword: function fillPassword() {
      this.password = $('#generatedPassword').val();
      $('#generatePasswordModal').modal('hide');
    },
    handleFile: function handleFile(e) {
      var _this = this;

      var certificate_id = e.target.getAttribute('data-id');
      var data = new FormData();
      data.append('user_id', this.id);
      data.append('certificate_id', certificate_id);
      data.append('file', e.target.files[0]);
      Object(_api_script__WEBPACK_IMPORTED_MODULE_2__["addUserCertificate"])(data).then(function (res) {
        _this.getInfo(_this.id);

        _this.$toast.success('File uploaded.');
      })["catch"](function (err) {
        console.log('Errors: ', err);
      });
    },
    fetchCertificates: function fetchCertificates() {
      var _this2 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_2__["view_certificate"])(this.page_title.toLowerCase()).then(function (res) {
        _this2.certificates = res.data;
      });
    },
    getCustomFields: function getCustomFields() {
      var _this3 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_2__["view_custom_fields"])(this.page_title.toLowerCase()).then(function (res) {
        _this3.custom_fields = res.data;
        res.data.forEach(function (row, i) {
          _this3.custom_field[row.id] = '';
        });
      })["catch"](function (err) {
        console.log('Error: ', err);
      });
    },
    getCities: function getCities() {
      var _this4 = this;

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
        _this4.cities = res.data;
      });
    },
    getStates: function getStates() {
      var _this5 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-states').then(function (res) {
        _this5.states = res.data;
      });
    },
    getInfo: function getInfo(id) {
      var _this6 = this;

      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_2__["default"].userInfo(id);
      apiResponse.then(function (res) {
        _this6.id = res.data.data.id;
        _this6.role = res.data.data.role;
        _this6.mobile = res.data.data.mobile;
        _this6.title = res.data.data.title;
        _this6.fname = res.data.data.fname;
        _this6.lname = res.data.data.lname;
        _this6.name = res.data.data.name;
        _this6.dob = res.data.data.dob;
        _this6.gender = res.data.data.gender;
        _this6.email = res.data.data.email;
        _this6.address1 = res.data.data.address1;
        _this6.address2 = res.data.data.address2;
        _this6.state = res.data.data.city_data ? res.data.data.city_data.state : '';
        _this6.city = res.data.data.city_id;
        _this6.pin_code = res.data.data.pin_code != null ? res.data.data.pin_code : '';
        _this6.loaded = 1;

        if (res.data.data.documents.length) {
          res.data.data.documents.forEach(function (c, i) {
            _this6.user_certificates[c.certificate_id] = c.file_url;
          });
        }

        if (res.data.data.custom_fields.length) {
          res.data.data.custom_fields.forEach(function (cf, i) {
            _this6.custom_field[cf.id] = cf.pivot.value;
          });
        }

        var media_image = res.data.data.image;
        var media_src = res.data.data.media ? _this6.baseURL + 'uploads/medium/' + res.data.data.media.image : _this6.baseURL + '/img/default.jpg';

        _this6.$emit('update-image_src-selected', media_src);

        _this6.$emit('update-image-selected', media_image);

        _this6.getCities();
      });
    },
    addData: function addData() {
      var _this7 = this;

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
        role: this.page_title,
        login: this.mobile,
        password: this.password,
        custom_field: this.custom_field
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('user', params).then(function (res) {
        if (res.data.status) {
          _this7.$router.push({
            name: 'EditUser',
            params: {
              id: res.data.user.id,
              role: _this7.page_title
            }
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
    },
    updateData: function updateData() {
      var _this8 = this;

      var params = {
        _method: 'PUT',
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
        role: this.page_title,
        login: this.mobile,
        password: this.password,
        custom_field: this.custom_field
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post("user/".concat(this.id), params).then(function (res) {
        if (res.data.status) {
          _this8.$router.push({
            name: 'ViewUser',
            params: {
              role: _this8.page_title
            }
          }).then(function (res) {
            _this8.loaded = 1;

            _this8.$toast.success('Record saved.');
          })["catch"](function (err) {
            _this8.loaded = 1;
            console.log(err);
          });
        } else {
          _this8.loaded = 1;
          _this8.errors = res.data.errors;
        }
      })["catch"](function (error) {
        _this8.loaded = 1;
        console.log(error);
      });
    }
  },
  watch: {
    "$route.params.id": function $routeParamsId() {
      this.routeLoading();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/user/add.vue?vue&type=template&id=68fe71c6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/user/add.vue?vue&type=template&id=68fe71c6& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "dashboard-content-one" },
    [
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
                  to: { name: "ViewUser", params: { role: _vm.page_title } }
                }
              },
              [_vm._v("View " + _vm._s(_vm.page_title))]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [
          _vm._v(
            _vm._s(!_vm.id ? "Add" : "Edit") + " " + _vm._s(_vm.page_title)
          )
        ]),
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
                    to: { name: "ViewUser", params: { role: _vm.page_title } }
                  }
                },
                [_vm._v(_vm._s(_vm.page_title))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              _vm._s(!_vm.id ? "Add" : "Edit") + " " + _vm._s(_vm.page_title)
            )
          ])
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
                    _c("div", { staticClass: "row" }, [
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
                                value: _vm.$v.mobile.$model,
                                expression: "$v.mobile.$model"
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.$v.mobile.$error },
                            attrs: { type: "text" },
                            domProps: { value: _vm.$v.mobile.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.mobile,
                                  "$model",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          !_vm.$v.mobile.required
                            ? _c("b-form-invalid-feedback", [
                                _vm._v("Please enter mobile no.")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.$v.mobile.mobileNo
                            ? _c("b-form-invalid-feedback", [
                                _vm._v("Please enter valid 10 digit mobile no.")
                              ])
                            : _vm._e()
                        ],
                        1
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
                                value: _vm.$v.password.$model,
                                expression: "$v.password.$model"
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.$v.password.$error },
                            attrs: { type: "password", id: "userPassword" },
                            domProps: { value: _vm.$v.password.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.password,
                                  "$model",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("b-form-invalid-feedback", [
                            _vm._v("Please enter password.")
                          ]),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "far fa fa-eye passwordToggle input-icon",
                            staticStyle: { cursor: "pointer" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._m(1)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "heading-layout1" }, [
                      _c("div", { staticClass: "item-title" }, [
                        _c("h3", [_vm._v(_vm._s(_vm.page_title) + " Info")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-9" },
                        [
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
                                        rawName: "v-model.trim",
                                        value: _vm.$v.title.$model,
                                        expression: "$v.title.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.$v.title.$error
                                    },
                                    on: {
                                      change: [
                                        function($event) {
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
                                            _vm.$v.title,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
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
                                ),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select title")
                                ])
                              ],
                              1
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
                                      value: _vm.$v.fname.$model,
                                      expression: "$v.fname.$model"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: { "is-invalid": _vm.$v.fname.$error },
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.$v.fname.$model },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.getFullName()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.fname,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                !_vm.$v.fname.required
                                  ? _c("b-form-invalid-feedback", [
                                      _vm._v("Please select title")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$v.fname.required
                                  ? _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        "Please don't enter any special symbol or numeric value."
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
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
                                      value: _vm.$v.lname.$model,
                                      expression: "$v.lname.$model"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: { "is-invalid": _vm.$v.lname.$error },
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.$v.lname.$model },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.getFullName()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.lname,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                !_vm.$v.lname.alphaOnly
                                  ? _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        "Please don't enter any special symbol or numeric value."
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Display Name *")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.$v.name.$model,
                                    expression: "$v.name.$model"
                                  }
                                ],
                                staticClass: "form-control",
                                class: { "is-invalid": _vm.$v.name.$error },
                                attrs: { type: "text" },
                                domProps: { value: _vm.$v.name.$model },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.name,
                                      "$model",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("b-form-invalid-feedback", [
                                _vm._v("Please enter name.")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-xl-4 col-12 form-group" },
                              [
                                _c("label", [_vm._v("Date of Birth")]),
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
                                  attrs: { type: "date", max: _vm.maxDob },
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
                            _c(
                              "div",
                              { staticClass: "col-xl-4 form-group" },
                              [
                                _c("label", [_vm._v("Gender *")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.$v.gender.$model,
                                        expression: "$v.gender.$model"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.$v.gender.$error
                                    },
                                    on: {
                                      change: function($event) {
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
                                        _vm.$set(
                                          _vm.$v.gender,
                                          "$model",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "Male" } }, [
                                      _vm._v("Male")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Female" } },
                                      [_vm._v("Female")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Other" } },
                                      [_vm._v("Other")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select gender.")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-xl-4 col-12 form-group" },
                              [
                                _c("label", [_vm._v("Email Address")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.$v.email.$model,
                                      expression: "$v.email.$model"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: { "is-invalid": _vm.$v.email.$error },
                                  attrs: { type: "email" },
                                  domProps: { value: _vm.$v.email.$model },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.email,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please enter valid email.")
                                ])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Address Line 1")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.$v.address1.$model,
                                    expression: "$v.address1.$model"
                                  }
                                ],
                                staticClass: "form-control",
                                class: { "is-invalid": _vm.$v.address1.$error },
                                attrs: { type: "text", value: "" },
                                domProps: { value: _vm.$v.address1.$model },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.address1,
                                      "$model",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("b-form-invalid-feedback", [
                                _vm._v("Please fill address line 1.")
                              ])
                            ],
                            1
                          ),
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
                                        value: _vm.$v.state.$model,
                                        expression: "$v.state.$model"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.$v.state.$error
                                    },
                                    on: {
                                      change: [
                                        function($event) {
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
                                            _vm.$v.state,
                                            "$model",
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
                                    _vm._l(_vm.states, function(s, i) {
                                      return _c(
                                        "option",
                                        { key: i, domProps: { value: s.id } },
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
                                ),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select state")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-xl-4 form-group" },
                              [
                                _c("label", [_vm._v("City *")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.$v.city.$model,
                                        expression: "$v.city.$model"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: { "is-invalid": _vm.$v.city.$error },
                                    on: {
                                      change: function($event) {
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
                                        _vm.$set(
                                          _vm.$v.city,
                                          "$model",
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
                                    _vm._l(_vm.cities, function(s, i) {
                                      return _c(
                                        "option",
                                        { key: i, domProps: { value: s.id } },
                                        [_vm._v(_vm._s(s.name))]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select city")
                                ])
                              ],
                              1
                            ),
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
                                      value: _vm.$v.pin_code.$model,
                                      expression: "$v.pin_code.$model"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.$v.pin_code.$error
                                  },
                                  attrs: { type: "tel" },
                                  domProps: { value: _vm.$v.pin_code.$model },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.pin_code,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                !_vm.$v.pin_code.required
                                  ? _c("b-form-invalid-feedback", [
                                      _vm._v("Please select pincode")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$v.pin_code.required
                                  ? _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        "Please enter valid 6 digit pincode"
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm.custom_fields.length
                            ? _c("div", { staticClass: "heading-layout1" }, [
                                _vm._m(2)
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.custom_fields.length
                            ? _c(
                                "b-row",
                                _vm._l(_vm.custom_fields, function(cf, index) {
                                  return _c(
                                    "b-col",
                                    {
                                      key: index,
                                      staticClass: "form-group",
                                      staticStyle: {
                                        "margin-bottom": "2.3rem"
                                      },
                                      attrs: {
                                        xl: cf.type == "textarea" ? 12 : 4
                                      }
                                    },
                                    [
                                      _c("label", [_vm._v(_vm._s(cf.name))]),
                                      _vm._v(" "),
                                      cf.type == "text"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.custom_field[cf.id],
                                                expression:
                                                  "custom_field[cf.id]"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              placeholder: cf.name
                                            },
                                            domProps: {
                                              value: _vm.custom_field[cf.id]
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.custom_field,
                                                  cf.id,
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      cf.type == "textarea"
                                        ? _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.custom_field[cf.id],
                                                expression:
                                                  "custom_field[cf.id]"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            staticStyle: { height: "200px" },
                                            attrs: { placeholder: cf.name },
                                            domProps: {
                                              value: _vm.custom_field[cf.id]
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.custom_field,
                                                  cf.id,
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      cf.type == "relation"
                                        ? _c(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.custom_field[cf.id],
                                                  expression:
                                                    "custom_field[cf.id]"
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
                                                    _vm.custom_field,
                                                    cf.id,
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
                                                [_vm._v("Select an option")]
                                              ),
                                              _vm._v(" "),
                                              _vm._l(cf.options, function(
                                                name,
                                                id
                                              ) {
                                                return _c(
                                                  "option",
                                                  {
                                                    key: id,
                                                    domProps: { value: id }
                                                  },
                                                  [_vm._v(_vm._s(name))]
                                                )
                                              })
                                            ],
                                            2
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      cf.type == "boolean"
                                        ? _c("div", [
                                            _c("label", [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.custom_field[cf.id],
                                                    expression:
                                                      "custom_field[cf.id]"
                                                  }
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  name: "customField" + cf.id,
                                                  value: "Yes"
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.custom_field[cf.id],
                                                    "Yes"
                                                  )
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.$set(
                                                      _vm.custom_field,
                                                      cf.id,
                                                      "Yes"
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(
                                                "\n                                            Yes\n                                        "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("label", [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.custom_field[cf.id],
                                                    expression:
                                                      "custom_field[cf.id]"
                                                  }
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  name: "customField" + cf.id,
                                                  value: "No"
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.custom_field[cf.id],
                                                    "No"
                                                  )
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.$set(
                                                      _vm.custom_field,
                                                      cf.id,
                                                      "No"
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(
                                                "\n                                            No\n                                        "
                                              )
                                            ])
                                          ])
                                        : _vm._e()
                                    ]
                                  )
                                }),
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
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
      this.id
        ? _c("b-card", { attrs: { title: "Documents" } }, [
            _c(
              "form",
              { attrs: { method: "post", enctype: "multipart/form-data" } },
              _vm._l(_vm.certificates, function(c, i) {
                return _c("div", { key: i, staticClass: "row mb-2" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _vm._v("\n                    " + _vm._s(c.en_name) + " "),
                    c.short_name
                      ? _c("span", [_vm._v(" - " + _vm._s(c.short_name))])
                      : _vm._e(),
                    _vm._v(
                      " (" + _vm._s(c.hi_name) + ")\n\n                    "
                    ),
                    _vm.user_certificates[c.id]
                      ? _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.user_certificates[c.id],
                              target: "_blank"
                            }
                          },
                          [_vm._v("VIEW / DOWNLOAD FILE")]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("input", {
                      attrs: { type: "file", "data-id": c.id },
                      on: { change: _vm.handleFile }
                    })
                  ])
                ])
              }),
              0
            )
          ])
        : _vm._e(),
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
    ],
    1
  )
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
    return _c("div", { staticClass: "item-title" }, [
      _c("h3", [_vm._v("Other Details")])
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

/***/ "./resources/js/components/school-panel/user/add.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/school-panel/user/add.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_68fe71c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=68fe71c6& */ "./resources/js/components/school-panel/user/add.vue?vue&type=template&id=68fe71c6&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/user/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_68fe71c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_68fe71c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/user/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/user/add.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/school-panel/user/add.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/user/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/user/add.vue?vue&type=template&id=68fe71c6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/school-panel/user/add.vue?vue&type=template&id=68fe71c6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_68fe71c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=68fe71c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/user/add.vue?vue&type=template&id=68fe71c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_68fe71c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_68fe71c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
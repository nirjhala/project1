(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student/add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/student/add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: ['image_src', 'image'],
  data: function data() {
    return {
      id: '',
      role: '',
      mobile: '',
      login: '',
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
      // image: '',
      reg_no: '',
      roll_no: '',
      blood_group: '',
      category: '',
      religion: '',
      cast: '',
      class_id: '',
      section: '',
      father: {},
      mother: {},
      guardian: {},
      relation: '',
      relation_name: '',
      parentName: '',
      parentMobile: '',
      parentPassword: '',
      parentType: 'other',
      // featuredImage: '/school-management/img/default.jpg',
      guardians: [{
        father: [],
        mother: [],
        other: [],
        all: []
      }],
      roles: [],
      states: [],
      cities: [],
      pincodes: [],
      religions: [],
      classes: [],
      sections: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    var params = this.$route.params;
    this.getRoles();
    this.getStates();
    this.getReligions();
    this.getClasses();
    this.getParents();

    if (params.id != undefined && params.id != '') {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    nameWithMobile: function nameWithMobile(_ref) {
      var name = _ref.name,
          mobile = _ref.mobile;
      return "".concat(name, " \u2014 ").concat(mobile);
    },
    changeRelationName: function changeRelationName() {
      this.guardians.all = this.guardians[this.relation];

      if (this.relation != "other") {
        this.relation_name = this.relation;
      } else {
        this.relation_name = '';
      }
    },
    fillName: function fillName() {
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
    getRoles: function getRoles() {
      var _this3 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-roles').then(function (res) {
        _this3.roles = res.data;
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
    getSections: function getSections() {
      var _this5 = this;

      var class_id = this.class_id,
          params = {
        id: class_id
      };
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-sections-by-class/' + class_id).then(function (res) {
        _this5.sections = res.data;
      });
    },
    getClasses: function getClasses() {
      var _this6 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-classes').then(function (res) {
        _this6.classes = res.data;
      });
    },
    openParentModal: function openParentModal(type) {
      this.parentType = type;
      $('#guardianModal').modal('show');
    },
    addParent: function addParent() {
      var form = $('#guardianModal form'),
          name = this.parentName,
          mobile = this.parentMobile,
          password = this.parentPassword,
          source = this.parentType;
      var params = {
        name: name,
        mobile: mobile,
        password: password,
        type: source
      };
      var is_valid = form.is_valid();
      var self = this;

      if (is_valid) {
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('parent/add', params).then(function (res) {
          var new_id = res.data.id;
          self.guardians.all = res.data.list.all;

          if (source == "father") {
            self.guardians.father = res.data.list.father;
            self.father = new_id;
          } else if (source == "mother") {
            self.guardians.mother = res.data.list.mother;
            self.mother = new_id;
          } else if (source == "other") {
            self.guardians.all = res.data.list.other;
            self.guardian = new_id;
          }

          self.parentName = '';
          self.parentMobile = '';
          self.parentPassword = '';
          $('#guardianModal').modal('hide');
        });
      }
    },
    getParents: function getParents() {
      var _this7 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('parent').then(function (res) {
        _this7.guardians = res.data;
      });
    },
    getReligions: function getReligions() {
      var _this8 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-religions').then(function (res) {
        _this8.religions = res.data;
      });
    },
    getInfo: function getInfo(id) {
      var _this9 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-student-info/' + id).then(function (res) {
        _this9.id = res.data.id;
        _this9.title = res.data.title;
        _this9.fname = res.data.fname;
        _this9.lname = res.data.lname;
        _this9.name = res.data.name;
        _this9.mobile = res.data.mobile;
        _this9.login = res.data.login;
        _this9.dob = res.data.dob;
        _this9.gender = res.data.gender;
        _this9.email = res.data.email;
        _this9.address1 = res.data.address1;
        _this9.address2 = res.data.address2;
        _this9.state = res.data.city_data.state;
        _this9.city = res.data.city_id;
        _this9.pin_code = res.data.pin_code; // this.image = res.data.image;

        _this9.reg_no = res.data.student_data.reg_no;
        _this9.roll_no = res.data.student_data.roll_no;
        _this9.blood_group = res.data.student_data.blood_group;
        _this9.category = res.data.student_data.category;
        _this9.religion = res.data.student_data.religion;
        _this9.cast = res.data.student_data.cast;
        _this9.category = res.data.student_data.category;
        _this9.class_id = res.data.student_data.section_name["class"];
        _this9.section = res.data.student_data.section;
        _this9.father = res.data.student_data.father_info;
        _this9.mother = res.data.student_data.mother_info;
        _this9.guardian = res.data.student_data.guardian_info;
        _this9.relation_name = res.data.student_data.guardian_relation;
        var relationName = res.data.student_data.guardian_relation.toLowerCase();

        if (relationName == "father" || relationName == "mother") {
          _this9.relation = relationName;
        } else {
          _this9.relation = "other";
        } // if(res.data.media && res.data.media.image != null) {


        var media_image = res.data.image != null ? res.data.image : '';
        var media_src = res.data.media ? _this9.baseURL + 'uploads/medium/' + res.data.media.image : _this9.baseURL + '/img/default.jpg';

        _this9.$emit('update-image_src-selected', media_src);

        _this9.$emit('update-image-selected', media_image); // }


        _this9.getCities(); // this.getPincodes();


        _this9.getSections();

        _this9.loaded = 1;
        $('.select2').each(function () {
          $(this).trigger('change');
        });
      });
    },
    addData: function addData() {
      var _this10 = this;

      var father = this.father.id ? this.father.id : '';
      var mother = this.mother.id ? this.mother.id : '';
      var guardian = this.guardian.id ? this.guardian.id : '';
      var params = {
        user: {
          title: this.title,
          fname: this.fname,
          lname: this.lname,
          name: this.name,
          mobile: this.mobile,
          // Optional
          email: this.email,
          gender: this.gender,
          dob: this.dob,
          image: this.image,
          address1: this.address1,
          address2: this.address2,
          pin_code: this.pin_code,
          city_id: this.city,
          role: this.role,
          login: this.login,
          password: this.password
        },
        student: {
          reg_no: this.reg_no,
          roll_no: this.roll_no,
          blood_group: this.blood_group,
          category: this.category,
          religion: this.religion,
          cast: this.cast,
          section: this.section,
          father: father,
          mother: mother,
          guardian: guardian,
          // guardian_relation: this.relation,
          guardian_relation: this.relation_name
        }
      };
      var is_valid = $('#addStudentForm').is_valid();

      if (is_valid) {
        this.loaded = 0;
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json'
          }
        });
        instance.post('add-student', params).then(function (res) {
          if (res.data.status) {
            _this10.$router.push({
              name: 'student'
            }).then(function (res) {
              _this10.loaded = 1;

              _this10.$toast.success('Record saved.');
            })["catch"](function (err) {
              _this10.loaded = 1;
              console.log(err);
            });
          } else {
            _this10.loaded = 1;
            _this10.errors = res.data.errors;
          }
        })["catch"](function (error) {
          _this10.loaded = 1;
          console.log(error);
        });
      }
    },
    updateData: function updateData() {
      var _this11 = this;

      var father = this.father.id ? this.father.id : '';
      var mother = this.mother.id ? this.mother.id : '';
      var guardian = this.guardian.id ? this.guardian.id : '';
      var params = {
        id: this.id,
        user: {
          title: this.title,
          fname: this.fname,
          lname: this.lname,
          name: this.name,
          mobile: this.mobile,
          // Optional
          email: this.email,
          gender: this.gender,
          dob: this.dob,
          image: this.image,
          address1: this.address1,
          address2: this.address2,
          pin_code: this.pin_code,
          city_id: this.city,
          role: this.role,
          login: this.login,
          password: this.password
        },
        student: {
          reg_no: this.reg_no,
          roll_no: this.roll_no,
          blood_group: this.blood_group,
          category: this.category,
          religion: this.religion,
          cast: this.cast,
          section: this.section,
          father: father,
          mother: mother,
          guardian: guardian,
          // guardian_relation: this.relation,
          guardian_relation: this.relation_name
        }
      };
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.post('update-student', params).then(function (res) {
        if (res.data.status) {
          _this11.$router.push({
            name: 'student'
          }).then(function (res) {
            _this11.loaded = 1;

            _this11.$toast.success('Record saved.');
          })["catch"](function (err) {
            _this11.loaded = 1;
            console.log(err);
          });
        } else {
          _this11.loaded = 1;
          _this11.errors = res.data.errors;
        }
      })["catch"](function (error) {
        _this11.loaded = 1;
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student/add.vue?vue&type=template&id=dbe8515c&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/student/add.vue?vue&type=template&id=dbe8515c& ***!
  \**************************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "student" } }
            },
            [_vm._v("View Student")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Student")]),
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
            _c("router-link", { attrs: { to: { name: "student" } } }, [
              _vm._v("Student")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v(_vm._s(!_vm.id ? "Add" : "Edit") + " Student")])
      ])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm.errors.length
      ? _c("div", { staticClass: "alert alert-danger mb-2" }, [
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
    _c("div", { staticClass: "step-wizard-panels" }, [
      _c(
        "form",
        {
          staticClass: "new-added-form",
          attrs: { id: "addStudentForm" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.id ? _vm.updateData() : _vm.addData()
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "card height-auto step-wizard-panel active",
              attrs: { id: "general-info" }
            },
            [
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
                      _vm._m(1),
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
                          {
                            staticClass: "col-xl-3 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Mobile No.")]),
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
                              attrs: { type: "tel" },
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
                          {
                            staticClass: "col-xl-3 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Login *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.login,
                                  expression: "login"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", required: "" },
                              domProps: { value: _vm.login },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.login = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-3 col-lg-6 col-12 form-group"
                          },
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
                        _vm._m(2)
                      ]),
                      _vm._v(" "),
                      _vm._m(3),
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
                                          _vm.title = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                        function($event) {
                                          return _vm.fillName()
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
                                      return _vm.fillName()
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
                                      return _vm.fillName()
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
                                _c("label", [_vm._v("Email Address")]),
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
                                  attrs: { type: "email" },
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
                              attrs: { type: "text" },
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
                              attrs: { type: "text" },
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
                                        {
                                          key: s.id,
                                          domProps: { value: s.id }
                                        },
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
                                      { key: s.id, domProps: { value: s.id } },
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
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(4)
                    ])
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "card height-auto step-wizard-panel",
              attrs: { id: "admission-info" }
            },
            [
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
                      _vm._m(5),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-xl-3 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Enrollment No. *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.reg_no,
                                  expression: "reg_no"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", required: "" },
                              domProps: { value: _vm.reg_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.reg_no = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-xl-3 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Roll No.")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.roll_no,
                                  expression: "roll_no"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.roll_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.roll_no = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-xl-3 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Blood Group")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.blood_group,
                                    expression: "blood_group"
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
                                    _vm.blood_group = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select Bloog Group")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "A+" } }, [
                                  _vm._v("A+")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "A-" } }, [
                                  _vm._v("A-")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "B+" } }, [
                                  _vm._v("B+")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "B-" } }, [
                                  _vm._v("B-")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "AB+" } }, [
                                  _vm._v("AB+")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "AB-" } }, [
                                  _vm._v("AB-")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "0+" } }, [
                                  _vm._v("0+")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "0-" } }, [
                                  _vm._v("0-")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "Do not know" } },
                                  [_vm._v("Don't know")]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-3 form-group" }, [
                          _c("label", [_vm._v("Category *")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.category,
                                  expression: "category"
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
                                  _vm.category = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select Category")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "General" } }, [
                                _vm._v("General")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "OBC" } }, [
                                _vm._v("OBC")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "SBC" } }, [
                                _vm._v("SBC")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "SC" } }, [
                                _vm._v("SC")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "ST" } }, [
                                _vm._v("ST")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Other" } }, [
                                _vm._v("Other")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-xl-3 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Religion")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.religion,
                                    expression: "religion"
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
                                    _vm.religion = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select Religion")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.religions, function(r) {
                                  return _c(
                                    "option",
                                    { key: r.id, domProps: { value: r.id } },
                                    [_vm._v(_vm._s(r.name))]
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
                          { staticClass: "col-xl-3 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Cast")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.cast,
                                  expression: "cast"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.cast },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.cast = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-3 form-group" }, [
                          _c("label", [_vm._v("Class *")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.class_id,
                                  expression: "class_id"
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
                                    _vm.class_id = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  function($event) {
                                    return _vm.getSections()
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select Class")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.classes, function(c) {
                                return _c(
                                  "option",
                                  { key: c.id, domProps: { value: c.id } },
                                  [_vm._v(_vm._s(c.name))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-xl-3 col-12 form-group" },
                          [
                            _c("label", [_vm._v("Section *")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.section,
                                    expression: "section"
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
                                    _vm.section = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select Section")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.sections, function(s) {
                                  return _c(
                                    "option",
                                    { key: s.id, domProps: { value: s.id } },
                                    [_vm._v(_vm._s(s.name))]
                                  )
                                })
                              ],
                              2
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(6)
                    ])
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "card height-auto step-wizard-panel",
              attrs: { id: "gaurdian-info" }
            },
            [
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
                      _vm._m(7),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-6 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Father *")]),
                            _vm._v(" "),
                            _c("multiselect", {
                              attrs: {
                                "deselect-label": "Can't remove this value",
                                "track-by": "id",
                                "custom-label": _vm.nameWithMobile,
                                placeholder: "Select Father Name",
                                options: _vm.guardians.father
                                  ? _vm.guardians.father
                                  : [],
                                searchable: true,
                                "allow-empty": false
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "singleLabel",
                                    fn: function(ref) {
                                      var option = ref.option
                                      return [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(option.name) +
                                            " " +
                                            _vm._s(option.mobile) +
                                            "\n                                    "
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                3325196079
                              ),
                              model: {
                                value: _vm.father,
                                callback: function($$v) {
                                  _vm.father = $$v
                                },
                                expression: "father"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-2 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v(" ")]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-lg btn-success btn-block",
                                attrs: {
                                  type: "button",
                                  "data-source": "father"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.openParentModal("father")
                                  }
                                }
                              },
                              [_vm._v("Add New")]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-6 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Mother *")]),
                            _vm._v(" "),
                            _c("multiselect", {
                              attrs: {
                                "deselect-label": "Can't remove this value",
                                "track-by": "mobile",
                                "custom-label": _vm.nameWithMobile,
                                placeholder: "Select Mother Name",
                                options: _vm.guardians.mother
                                  ? _vm.guardians.mother
                                  : [],
                                searchable: true,
                                "allow-empty": false
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "singleLabel",
                                    fn: function(ref) {
                                      var option = ref.option
                                      return [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(option.name) +
                                            " " +
                                            _vm._s(option.mobile) +
                                            "\n                                    "
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                3325196079
                              ),
                              model: {
                                value: _vm.mother,
                                callback: function($$v) {
                                  _vm.mother = $$v
                                },
                                expression: "mother"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-2 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v(" ")]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-lg btn-success btn-block",
                                attrs: {
                                  type: "button",
                                  "data-source": "mother"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.openParentModal("mother")
                                  }
                                }
                              },
                              [_vm._v("Add New")]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(8),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-xl-3 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Relation *")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.relation,
                                    expression: "relation"
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
                                      _vm.relation = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    function($event) {
                                      return _vm.changeRelationName()
                                    }
                                  ]
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select Relation")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "father" } }, [
                                  _vm._v("Father")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "mother" } }, [
                                  _vm._v("Mother")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "other" } }, [
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
                            staticClass: "col-xl-5 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [
                              _vm._v("Relation Name (if Other Selected)")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.relation_name,
                                  expression: "relation_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", required: "" },
                              domProps: { value: _vm.relation_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.relation_name = $event.target.value
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
                            staticClass: "col-xl-6 col-lg-6 col-12 form-group"
                          },
                          [
                            _c("label", [_vm._v("Guardian *")]),
                            _vm._v(" "),
                            _c("multiselect", {
                              attrs: {
                                "deselect-label": "Can't remove this value",
                                "track-by": "name",
                                "custom-label": _vm.nameWithMobile,
                                placeholder: "Select Guardian Name",
                                options: _vm.guardians.all
                                  ? _vm.guardians.all
                                  : [],
                                searchable: true,
                                "allow-empty": false
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "singleLabel",
                                    fn: function(ref) {
                                      var option = ref.option
                                      return [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(option.name) +
                                            " " +
                                            _vm._s(option.mobile) +
                                            "\n                                    "
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                3325196079
                              ),
                              model: {
                                value: _vm.guardian,
                                callback: function($$v) {
                                  _vm.guardian = $$v
                                },
                                expression: "guardian"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.relation == "other"
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-xl-2 col-lg-6 col-12 form-group"
                              },
                              [
                                _c("label", [_vm._v(" ")]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-lg btn-success btn-block",
                                    attrs: {
                                      type: "button",
                                      "data-source": "guardian"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.openParentModal("guardian")
                                      }
                                    }
                                  },
                                  [_vm._v("Add New")]
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _vm._m(9),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-6 form-group mg-t-8 text-right" },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                                attrs: { type: "submit" }
                              },
                              [_vm._v(_vm._s(!_vm.id ? "Save" : "Update"))]
                            )
                          ]
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal align-middle", attrs: { id: "guardianModal" } },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(10),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  attrs: { method: "post" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.addParent()
                    }
                  }
                },
                [
                  _c("input", {
                    attrs: { type: "hidden", id: "userSource", value: "" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.parentName,
                          expression: "parentName"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Name",
                        required: ""
                      },
                      domProps: { value: _vm.parentName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.parentName = $event.target.value
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
                          value: _vm.parentType,
                          expression: "parentType"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Type",
                        required: "",
                        readonly: ""
                      },
                      domProps: { value: _vm.parentType },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.parentType = $event.target.value
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
                          value: _vm.parentMobile,
                          expression: "parentMobile"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Mobile No.",
                        required: ""
                      },
                      domProps: { value: _vm.parentMobile },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.parentMobile = $event.target.value
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
                          value: _vm.parentPassword,
                          expression: "parentPassword"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        placeholder: "Password",
                        required: ""
                      },
                      domProps: { value: _vm.parentPassword },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.parentPassword = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(11)
                ]
              )
            ])
          ])
        ])
      ]
    ),
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
            _vm._m(12),
            _vm._v(" "),
            _vm._m(13),
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
    return _c("div", { staticClass: "card mb-3 h-auto" }, [
      _c("div", { staticClass: "step-wizard-tabs card-body" }, [
        _c("ul", [
          _c(
            "li",
            { staticClass: "current", attrs: { "data-tab": "#general-info" } },
            [
              _c("a", { attrs: { href: "#general-info" } }, [
                _c("span", { staticClass: "step-no" }, [_vm._v("1")]),
                _vm._v(" General Info")
              ])
            ]
          ),
          _vm._v(" "),
          _c("li", { attrs: { "data-tab": "#admission-info" } }, [
            _c("a", { attrs: { href: "#admission-info" } }, [
              _c("span", { staticClass: "step-no" }, [_vm._v("2")]),
              _vm._v(" Admission Info")
            ])
          ]),
          _vm._v(" "),
          _c("li", { attrs: { "data-tab": "#gaurdian-info" } }, [
            _c("a", { attrs: { href: "#gaurdian-info" } }, [
              _c("span", { staticClass: "step-no" }, [_vm._v("3")]),
              _vm._v(" Guardian Info")
            ])
          ])
        ])
      ])
    ])
  },
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 form-group mg-t-8 text-right" }, [
        _c(
          "button",
          {
            staticClass:
              "btn-fill-lg btn-gradient-yellow btn-hover-bluedark wizardBtn",
            attrs: { type: "button", "data-target": "#admission-info" }
          },
          [_vm._v("Next")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("Admission Info")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6 form-group mg-t-8" }, [
        _c(
          "button",
          {
            staticClass:
              "btn-fill-lg btn-gradient-yellow btn-hover-bluedark wizardBtn",
            attrs: { type: "button", "data-target": "#general-info" }
          },
          [_vm._v("Previous")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 form-group mg-6-8 text-right" }, [
        _c(
          "button",
          {
            staticClass:
              "btn-fill-lg btn-gradient-yellow btn-hover-bluedark wizardBtn",
            attrs: { type: "button", "data-target": "#gaurdian-info" }
          },
          [_vm._v("Next")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("Parents Info")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading-layout1" }, [
      _c("div", { staticClass: "item-title" }, [
        _c("h3", [_vm._v("Guardian Info")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 form-group mg-t-8" }, [
      _c(
        "button",
        {
          staticClass:
            "btn-fill-lg btn-gradient-yellow btn-hover-bluedark wizardBtn",
          attrs: { type: "button", "data-target": "#admission-info" }
        },
        [_vm._v("Previous")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Add Gaurdian")]),
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
    return _c("div", { staticClass: "form-group text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-lg btn-info btnReflectPassword",
          attrs: { type: "submit" }
        },
        [_c("i", { staticClass: "fas fa-check" }), _vm._v("     Submit")]
      )
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
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", { staticClass: "input-group mb-3" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", id: "generatedPassword" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "input-group-append" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-secondary genPassBtn",
              attrs: { type: "button" }
            },
            [_vm._v("Generate")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", {}, [
        _c("label", [
          _c("input", {
            attrs: { type: "checkbox", id: "copyConfirm", value: "1" }
          }),
          _vm._v(" Have you copied password?\n                        ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/student/add.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/student/add.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_dbe8515c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=dbe8515c& */ "./resources/js/components/student/add.vue?vue&type=template&id=dbe8515c&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/student/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_dbe8515c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_dbe8515c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/student/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/student/add.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/student/add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/student/add.vue?vue&type=template&id=dbe8515c&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/student/add.vue?vue&type=template&id=dbe8515c& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_dbe8515c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=dbe8515c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/student/add.vue?vue&type=template&id=dbe8515c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_dbe8515c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_dbe8515c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
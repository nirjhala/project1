(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/script.js */ "./resources/js/api/script.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: ['image_src', 'image'],
  data: function data() {
    return {
      id: '',
      user: {
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
        city_id: '',
        pin_code: '',
        image: '',
        role: ''
      },
      student: {
        reg_no: '',
        roll_no: '',
        blood_group: '',
        category: '',
        religion: '',
        cast: '',
        section: '',
        admission_date: '',
        signature: ''
      },
      parent: {
        father: '',
        mother: '',
        guardian: '',
        guardian_relation: ''
      },
      user_certificates: {},
      father: {},
      mother: {},
      guardian: {},
      relation: '',
      relation_name: '',
      parentName: '',
      parentMobile: '',
      parentPassword: '',
      parentType: 'other',
      guardians: [{
        father: [],
        mother: [],
        other: [],
        all: []
      }],
      roles: [],
      states: [],
      pincodes: [],
      religions: [],
      classes: [],
      sections: [],
      certificates: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem('token')
    };
  },
  validations: {
    user: {
      login: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
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
      city_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      pin_code: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        isPincode: function isPincode(postcode) {
          return postcode.length == 0 || postcode.length == 6 && /[0-9]{6}/.test(postcode);
        }
      }
    },
    student: {
      reg_no: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      category: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      religion: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      cast: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      section: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    },
    father: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    mother: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    guardian: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    relation: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    parent: {
      guardian_relation: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  mounted: function mounted() {
    this.firstLoad();
  },
  methods: {
    validateState: function validateState(key_name, name) {
      var _this$$v$key_name$nam = this.$v[key_name][name],
          $dirty = _this$$v$key_name$nam.$dirty,
          $error = _this$$v$key_name$nam.$error;
      return $dirty ? !$error : null;
    },
    handleFile: function handleFile(e) {
      var _this = this;

      var certificate_id = e.target.getAttribute('data-id');
      var data = new FormData();
      data.append('user_id', this.id);
      data.append('certificate_id', certificate_id);
      data.append('file', e.target.files[0]);
      Object(_api_script_js__WEBPACK_IMPORTED_MODULE_2__["addUserCertificate"])(data).then(function (res) {
        _this.$toast.success('File uploaded.');
      })["catch"](function (err) {
        console.log('Errors: ', err);
      });
    },
    firstLoad: function firstLoad() {
      var params = this.$route.params;
      this.getStates();

      if (params.id != undefined && params.id != '') {
        this.getInfo(params.id);
        this.getReligions();
        this.getClasses();
        this.getParents();
        this.fetchCertificates();
        this.id = params.id;
      } else {
        this.loaded = 1;
      }
    },
    scrollToSection: function scrollToSection(sel) {
      var container = this.$el.querySelector(sel);
      container.scrollTop = container.scrollHeight;
    },
    nameWithMobile: function nameWithMobile(_ref) {
      var name = _ref.name,
          mobile = _ref.mobile;
      return "".concat(name, " \u2014 ").concat(mobile);
    },
    changeRelationName: function changeRelationName() {
      this.guardians.all = this.guardians[this.relation];

      if (this.relation != "other") {
        this.parent.guardian_relation = this.relation;
      } else {
        this.parent.guardian_relation = '';
      }
    },
    fillName: function fillName() {
      this.user.name = (this.user.title + ' ' + this.user.fname + ' ' + this.user.lname).trim();
    },
    fillPassword: function fillPassword() {
      this.password = $('#generatedPassword').val();
      $('#generatePasswordModal').modal('hide');
    },
    fetchCertificates: function fetchCertificates() {
      var _this2 = this;

      Object(_api_script_js__WEBPACK_IMPORTED_MODULE_2__["view_certificate"])('student').then(function (res) {
        _this2.certificates = res.data;
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

      Object(_api_script_js__WEBPACK_IMPORTED_MODULE_2__["view_all_states"])().then(function (res) {
        _this4.states = res.data;
      });
    },
    getClasses: function getClasses() {
      var _this5 = this;

      Object(_api_script_js__WEBPACK_IMPORTED_MODULE_2__["view_all_classes"])().then(function (res) {
        _this5.classes = res.data;
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
      var _this6 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('parent').then(function (res) {
        _this6.guardians = res.data;
      });
    },
    getReligions: function getReligions() {
      var _this7 = this;

      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('get-all-religions').then(function (res) {
        _this7.religions = res.data;
      });
    },
    getInfo: function getInfo(id) {
      var _this8 = this;

      Object(_api_script_js__WEBPACK_IMPORTED_MODULE_2__["studentInfo"])(id).then(function (res) {
        _this8.user = res.data.user;
        _this8.student.reg_no = res.data.reg_no;
        _this8.student.roll_no = res.data.roll_no;
        _this8.student.blood_group = res.data.blood_group;
        _this8.student.category = res.data.category;
        _this8.student.religion = res.data.religion;
        _this8.student.cast = res.data.cast;
        _this8.student.category = res.data.category;
        _this8.student.section = res.data.section;
        _this8.father = res.data.father_info;
        _this8.mother = res.data.mother_info;
        _this8.guardian = res.data.guardian_info;
        _this8.parent.father = res.data.father;
        _this8.parent.mother = res.data.mother;
        _this8.parent.guardian = res.data.guardian;
        _this8.parent.guardian_relation = res.data.guardian_relation;
        var relationName = res.data.guardian_relation != null ? res.data.guardian_relation.toLowerCase() : '';

        if (relationName == "father" || relationName == "mother") {
          _this8.relation = relationName;
        } else {
          _this8.relation = "other";
        }

        if (res.data.user.documents.length) {
          res.data.user.documents.forEach(function (c, i) {
            _this8.user_certificates[c.certificate_id] = c.file_url;
          });
        }

        var media_image = res.data.user.image != null ? res.data.user.image : '';
        var media_src = res.data.media ? res.data.media.image_url.medium : _this8.baseURL + '/img/default.jpg';

        _this8.$emit('update-image_src-selected', media_src);

        _this8.$emit('update-image-selected', media_image);

        _this8.loaded = 1;
        console.log('Student', _this8.student);
      });
    },
    addUser: function addUser() {
      var _this9 = this;

      this.$v.user.$reset();
      this.$v.user.$touch();

      if (this.$v.user.$anyError) {
        return false;
      } else {
        this.loading = true;
        Object(_api_script_js__WEBPACK_IMPORTED_MODULE_2__["addStudent"])({
          user: this.user
        }).then(function (res) {
          _this9.$router.push({
            name: 'EditStudent',
            params: {
              id: res.data.id
            }
          });
        })["catch"](function (err) {
          _this9.loading = false;
          console.log('Error: ', err);
        });
      }
    },
    updateUser: function updateUser() {
      var _this10 = this;

      this.$v.user.$reset();
      this.$v.user.$touch();
      console.log('errors', this.$v.user.$anyError);

      if (this.$v.user.$anyError) {
        return false;
      } else {
        this.loading = true;
        Object(_api_script_js__WEBPACK_IMPORTED_MODULE_2__["updateStudentData"])(this.$route.params.id, {
          _method: 'PUT',
          user: this.user
        }).then(function (res) {
          _this10.$router.push({
            name: 'EditStudent',
            params: {
              id: res.data.id
            }
          });
        })["catch"](function (err) {
          _this10.loading = false;
          console.log('Error: ', err);
        });
      }
    },
    updateStudent: function updateStudent() {
      var _this11 = this;

      this.$v.student.$reset();
      this.$v.student.$touch();

      if (this.$v.student.$anyError) {
        return false;
      } else {
        var data = {
          _method: 'put',
          student: this.student
        };
        this.loading = true;
        Object(_api_script_js__WEBPACK_IMPORTED_MODULE_2__["updateStudentData"])(this.$route.params.id, data).then(function (res) {
          _this11.loading = false;

          _this11.$toast.success(res.data.message);
        })["catch"](function (err) {
          _this11.loading = false;

          _this11.$toast.error(err);
        });
      }
    },
    updateParentInfo: function updateParentInfo() {
      var _this12 = this;

      this.$v.$reset();
      this.$v.parent.$touch();
      this.$v.father.$touch();
      this.$v.mother.$touch();
      this.$v.guardian.$touch();

      if (this.$v.parent.$anyError && this.$v.father.$anyError && this.$v.mother.$anyError && this.$v.guardian.$anyError) {
        return false;
      } else {
        var data = {
          _method: 'put',
          student: {
            father: this.father.id ? this.father.id : '',
            mother: this.mother.id ? this.mother.id : '',
            guardian: this.guardian.id ? this.guardian.id : '',
            guardian_relation: this.parent.guardian_relation
          }
        };
        Object(_api_script_js__WEBPACK_IMPORTED_MODULE_2__["updateStudentData"])(this.$route.params.id, data).then(function (res) {
          _this12.$toast.success(res.data.message);
        })["catch"](function (err) {
          _this12.$toast.error(err);
        });
      }
    },
    updateData: function updateData() {
      var _this13 = this;

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
          _this13.$router.push({
            name: 'student'
          }).then(function (res) {
            _this13.loaded = 1;

            _this13.$toast.success('Record saved.');
          })["catch"](function (err) {
            _this13.loaded = 1;
            console.log(err);
          });
        } else {
          _this13.loaded = 1;
          _this13.errors = res.data.errors;
        }
      })["catch"](function (error) {
        _this13.loaded = 1;
        console.log(error);
      });
    }
  },
  watch: {
    image: function image() {
      this.user.image = this.image;
    },
    "$route.params.id": function $routeParamsId() {
      this.firstLoad();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/add.vue?vue&type=template&id=2d49b018&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/add.vue?vue&type=template&id=2d49b018& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "ViewStudent" } }
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
            _c("router-link", { attrs: { to: { name: "ViewStudent" } } }, [
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
    _c("div", { staticClass: "card mb-3 h-auto" }, [
      _c("div", { staticClass: "step-wizard-tabs card-body" }, [
        _c("ul", [
          _c("li", { staticClass: "current" }, [
            _c(
              "a",
              {
                attrs: { href: "#general-info" },
                on: {
                  click: function($event) {
                    return _vm.scrollToSection("#general-info")
                  }
                }
              },
              [
                _c("span", { staticClass: "step-no" }, [_vm._v("1")]),
                _vm._v(" General Info")
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: { href: "#admission-info" },
                on: {
                  click: function($event) {
                    return _vm.scrollToSection("#admission-info")
                  }
                }
              },
              [
                _c("span", { staticClass: "step-no" }, [_vm._v("2")]),
                _vm._v(" Admission Info")
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: { href: "#documents-info" },
                on: {
                  click: function($event) {
                    return _vm.scrollToSection("#documents-info")
                  }
                }
              },
              [
                _c("span", { staticClass: "step-no" }, [_vm._v("2")]),
                _vm._v(" Student Documents")
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: { href: "#gaurdian-info" },
                on: {
                  click: function($event) {
                    return _vm.scrollToSection("#gaurdian-info")
                  }
                }
              },
              [
                _c("span", { staticClass: "step-no" }, [_vm._v("3")]),
                _vm._v(" Guardian Info")
              ]
            )
          ])
        ])
      ])
    ]),
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
        "div",
        { staticClass: "card height-auto", attrs: { id: "general-info" } },
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
              ? _c(
                  "div",
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "b-form",
                      {
                        attrs: { method: "post" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            !_vm.$route.params.id
                              ? _vm.addUser()
                              : _vm.updateUser()
                          }
                        }
                      },
                      [
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
                                    rawName: "v-model.trim",
                                    value: _vm.$v.user.mobile.$model,
                                    expression: "$v.user.mobile.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.$v.user.mobile.$error
                                },
                                attrs: { type: "tel" },
                                domProps: { value: _vm.$v.user.mobile.$model },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.user.mobile,
                                      "$model",
                                      $event.target.value.trim()
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("b-form-invalid-feedback", [
                                _vm._v(
                                  _vm._s(
                                    !_vm.$v.user.mobile.required
                                      ? "This is a required field."
                                      : "Enter valid 10 digit mobile no."
                                  )
                                )
                              ])
                            ],
                            1
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
                                    rawName: "v-model.trim",
                                    value: _vm.$v.user.login.$model,
                                    expression: "$v.user.login.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.$v.user.login.$error
                                },
                                attrs: { type: "text" },
                                domProps: { value: _vm.$v.user.login.$model },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.user.login,
                                      "$model",
                                      $event.target.value.trim()
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("b-form-invalid-feedback", [
                                _vm._v("This is a required field.")
                              ])
                            ],
                            1
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
                                    rawName: "v-model.trim",
                                    value: _vm.$v.user.password.$model,
                                    expression: "$v.user.password.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.$v.user.password.$error
                                },
                                attrs: { type: "password", id: "userPassword" },
                                domProps: {
                                  value: _vm.$v.user.password.$model
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.user.password,
                                      "$model",
                                      $event.target.value.trim()
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass:
                                  "far fa fa-eye passwordToggle input-icon",
                                staticStyle: { cursor: "pointer" }
                              }),
                              _vm._v(" "),
                              _c("b-form-invalid-feedback", [
                                _vm._v("This is a required field.")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-xl-3 col-lg-6 col-12 form-group"
                            },
                            [
                              _c("label", [_vm._v(" ")]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn-fill-lg bg-blue-dark btn-hover-yellow genPassBtn",
                                  attrs: { type: "button" }
                                },
                                [_vm._v("Auto Generate")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "heading-layout1" }, [
                          _c("div", { staticClass: "item-title" }, [
                            _c("h3", [_vm._v("User Info")])
                          ])
                        ]),
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
                                          rawName: "v-model.trim",
                                          value: _vm.$v.user.title.$model,
                                          expression: "$v.user.title.$model",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.$v.user.title.$error
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
                                              _vm.$v.user.title,
                                              "$model",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.fillName()
                                          }
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "Mr." } },
                                        [_vm._v("Mr.")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Ms." } },
                                        [_vm._v("Ms.")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Mrs." } },
                                        [_vm._v("Mrs.")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v("This is a required field.")
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
                                        rawName: "v-model.trim",
                                        value: _vm.$v.user.fname.$model,
                                        expression: "$v.user.fname.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.$v.user.fname.$error
                                    },
                                    attrs: { type: "text" },
                                    domProps: {
                                      value: _vm.$v.user.fname.$model
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.fillName()
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.$v.user.fname,
                                          "$model",
                                          $event.target.value.trim()
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v(
                                      _vm._s(
                                        !_vm.$v.user.fname.required
                                          ? "This is a required field."
                                          : "Please enter only characters."
                                      )
                                    )
                                  ])
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
                                        rawName: "v-model.trim",
                                        value: _vm.$v.user.lname.$model,
                                        expression: "$v.user.lname.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.$v.user.lname.$error
                                    },
                                    attrs: { type: "text" },
                                    domProps: {
                                      value: _vm.$v.user.lname.$model
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.fillName()
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.$v.user.lname,
                                          "$model",
                                          $event.target.value.trim()
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v("Please enter only characters.")
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
                                _c("label", [_vm._v("Display Name *")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.trim",
                                      value: _vm.$v.user.name.$model,
                                      expression: "$v.user.name.$model",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.$v.user.name.$error
                                  },
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.$v.user.name.$model },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.user.name,
                                        "$model",
                                        $event.target.value.trim()
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("This is a required field.")
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
                                  _c("label", [_vm._v("Date of Birth *")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: _vm.$v.user.dob.$model,
                                        expression: "$v.user.dob.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.$v.user.dob.$error
                                    },
                                    attrs: { type: "date" },
                                    domProps: { value: _vm.$v.user.dob.$model },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.$v.user.dob,
                                          "$model",
                                          $event.target.value.trim()
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v("This is a required field.")
                                  ])
                                ],
                                1
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
                                          rawName: "v-model.trim",
                                          value: _vm.$v.user.gender.$model,
                                          expression: "$v.user.gender.$model",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.$v.user.gender.$error
                                      },
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
                                            _vm.$v.user.gender,
                                            "$model",
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
                                        { attrs: { value: "Male" } },
                                        [_vm._v("Male")]
                                      ),
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
                                    _vm._v("This is a required field.")
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
                                        rawName: "v-model.trim",
                                        value: _vm.$v.user.email.$model,
                                        expression: "$v.user.email.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.$v.user.email.$error
                                    },
                                    attrs: { type: "email" },
                                    domProps: {
                                      value: _vm.$v.user.email.$model
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.$v.user.email,
                                          "$model",
                                          $event.target.value.trim()
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
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
                                _c("label", [_vm._v("Address Line 1 *")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.trim",
                                      value: _vm.$v.user.address1.$model,
                                      expression: "$v.user.address1.$model",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.$v.user.address1.$error
                                  },
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.$v.user.address1.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.user.address1,
                                        "$model",
                                        $event.target.value.trim()
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("This is a required field.")
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
                                    value: _vm.user.address2,
                                    expression: "user.address2"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.user.address2 },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "address2",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
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
                                          rawName: "v-model.trim",
                                          value: _vm.$v.user.city_id.$model,
                                          expression: "$v.user.city_id.$model",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.$v.user.city_id.$error
                                      },
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
                                            _vm.$v.user.city_id,
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
                                      _vm._l(_vm.states, function(s, i) {
                                        return _c(
                                          "optgroup",
                                          { key: i, attrs: { label: s.name } },
                                          _vm._l(s.cities, function(c, j) {
                                            return _c(
                                              "option",
                                              {
                                                key: j,
                                                domProps: { value: c.id }
                                              },
                                              [_vm._v(_vm._s(c.name))]
                                            )
                                          }),
                                          0
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v("This is a required field.")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-xl-4 col-12 form-group" },
                                [
                                  _c("label", [_vm._v("Pincode *")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: _vm.$v.user.pin_code.$model,
                                        expression: "$v.user.pin_code.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.$v.user.pin_code.$error
                                    },
                                    attrs: { type: "tel" },
                                    domProps: {
                                      value: _vm.$v.user.pin_code.$model
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.$v.user.pin_code,
                                          "$model",
                                          $event.target.value.trim()
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.$forceUpdate()
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v(
                                      _vm._s(
                                        !_vm.$v.user.pin_code.required
                                          ? "This is a required field."
                                          : "Please enter valid 6 digit postcode."
                                      )
                                    )
                                  ])
                                ],
                                1
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
                                    value: _vm.user.image,
                                    expression: "user.image"
                                  }
                                ],
                                attrs: {
                                  type: "hidden",
                                  value: "",
                                  id: "featuredImageId"
                                },
                                domProps: { value: _vm.user.image },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "image",
                                      $event.target.value
                                    )
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
                          _c("div", { staticClass: "col-6" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-6 form-group mg-t-8 text-right"
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                                  attrs: { type: "submit" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$route.params.id ? "Update" : "Save"
                                    )
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _vm.id
        ? _c(
            "div",
            {
              staticClass: "card height-auto",
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
                      _c(
                        "form",
                        {
                          attrs: { method: "post" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateStudent()
                            }
                          }
                        },
                        [
                          _vm._m(1),
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
                                      rawName: "v-model.trim",
                                      value: _vm.$v.student.reg_no.$model,
                                      expression: "$v.student.reg_no.$model",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.$v.student.reg_no.$error
                                  },
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.$v.student.reg_no.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.student.reg_no,
                                        "$model",
                                        $event.target.value.trim()
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please enter Entrollment No.")
                                ])
                              ],
                              1
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
                                      rawName: "v-model.trim",
                                      value: _vm.student.roll_no,
                                      expression: "student.roll_no",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.student.roll_no },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.student,
                                        "roll_no",
                                        $event.target.value.trim()
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
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
                                        rawName: "v-model.trim",
                                        value: _vm.student.blood_group,
                                        expression: "student.blood_group",
                                        modifiers: { trim: true }
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
                                        _vm.$set(
                                          _vm.student,
                                          "blood_group",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
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
                                    _c("option", { attrs: { value: "O+" } }, [
                                      _vm._v("O+")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "O-" } }, [
                                      _vm._v("O-")
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
                            _c(
                              "div",
                              { staticClass: "col-xl-3 form-group" },
                              [
                                _c("label", [_vm._v("Category *")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: _vm.$v.student.category.$model,
                                        expression:
                                          "$v.student.category.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.$v.student.category.$error
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
                                          _vm.$v.student.category,
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
                                      _vm._v("Select Category")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "General" } },
                                      [_vm._v("General")]
                                    ),
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
                                    _c(
                                      "option",
                                      { attrs: { value: "Other" } },
                                      [_vm._v("Other")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select category")
                                ])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-xl-3 col-12 form-group" },
                              [
                                _c("label", [_vm._v("Religion *")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: _vm.$v.student.religion.$model,
                                        expression:
                                          "$v.student.religion.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.$v.student.religion.$error
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
                                          _vm.$v.student.religion,
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
                                      _vm._v("Select Religion")
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.religions, function(r) {
                                      return _c(
                                        "option",
                                        {
                                          key: r.id,
                                          domProps: { value: r.id }
                                        },
                                        [_vm._v(_vm._s(r.name))]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select religion.")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-xl-3 col-12 form-group" },
                              [
                                _c("label", [_vm._v("Cast *")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.trim",
                                      value: _vm.$v.student.cast.$model,
                                      expression: "$v.student.cast.$model",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.$v.student.cast.$error
                                  },
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.$v.student.cast.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.student.cast,
                                        "$model",
                                        $event.target.value.trim()
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please enter student's cast")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-xl-3 col-12 form-group" },
                              [
                                _c("label", [_vm._v("Class / Section *")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.$v.student.section.$model,
                                        expression: "$v.student.section.$model"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.$v.student.section.$error
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
                                          _vm.$v.student.section,
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
                                      _vm._v("Select Section")
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.classes, function(c, i) {
                                      return _c(
                                        "optgroup",
                                        {
                                          key: i,
                                          attrs: {
                                            label:
                                              c.dept.dept_name + " - " + c.name
                                          }
                                        },
                                        _vm._l(c.sections, function(s) {
                                          return _c(
                                            "option",
                                            {
                                              key: s.id,
                                              domProps: { value: s.id }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(c.name) +
                                                  " - " +
                                                  _vm._s(s.name) +
                                                  " (" +
                                                  _vm._s(c.dept.dept_name) +
                                                  ")"
                                              )
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select your class and section")
                                ])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(2)
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.id
        ? _c(
            "div",
            {
              staticClass: "card height-auto",
              attrs: { id: "documents-info" }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _vm.loaded
                  ? _c("div", [
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          attrs: {
                            method: "post",
                            enctype: "multipart/form-data"
                          }
                        },
                        _vm._l(_vm.certificates, function(c, i) {
                          return _c(
                            "div",
                            { key: i, staticClass: "row mb-2" },
                            [
                              _c("div", { staticClass: "col-6" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(c.en_name) +
                                    " "
                                ),
                                c.short_name
                                  ? _c("span", [
                                      _vm._v(" - " + _vm._s(c.short_name))
                                    ])
                                  : _vm._e(),
                                _vm._v(
                                  " (" +
                                    _vm._s(c.hi_name) +
                                    ")\n\n                                    "
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
                            ]
                          )
                        }),
                        0
                      )
                    ])
                  : _vm._e()
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.id
        ? _c(
            "div",
            { staticClass: "card height-auto", attrs: { id: "gaurdian-info" } },
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
                      _c(
                        "form",
                        {
                          attrs: { method: "post" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateParentInfo()
                            }
                          }
                        },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-xl-6 col-lg-6 col-12 form-group"
                              },
                              [
                                _c("label", [_vm._v("Father *")]),
                                _vm._v(" "),
                                _c("multiselect", {
                                  class: { "is-invalid": _vm.$v.father.$error },
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
                                              "\n                                            " +
                                                _vm._s(option.name) +
                                                " " +
                                                _vm._s(option.mobile) +
                                                "\n                                        "
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    2956381231
                                  ),
                                  model: {
                                    value: _vm.$v.father.$model,
                                    callback: function($$v) {
                                      _vm.$set(_vm.$v.father, "$model", $$v)
                                    },
                                    expression: "$v.father.$model"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select father's name")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
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
                                staticClass:
                                  "col-xl-6 col-lg-6 col-12 form-group"
                              },
                              [
                                _c("label", [_vm._v("Mother *")]),
                                _vm._v(" "),
                                _c("multiselect", {
                                  class: { "is-invalid": _vm.$v.mother.$error },
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
                                              "\n                                            " +
                                                _vm._s(option.name) +
                                                " " +
                                                _vm._s(option.mobile) +
                                                "\n                                        "
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    2956381231
                                  ),
                                  model: {
                                    value: _vm.$v.mother.$model,
                                    callback: function($$v) {
                                      _vm.$set(_vm.$v.mother, "$model", $$v)
                                    },
                                    expression: "$v.mother.$model"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select mother's name")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
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
                          _vm._m(5),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-xl-3 col-lg-6 col-12 form-group"
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
                                        value: _vm.$v.relation.$model,
                                        expression: "$v.relation.$model"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.$v.relation.$error
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
                                            _vm.$v.relation,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
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
                                    _c(
                                      "option",
                                      { attrs: { value: "father" } },
                                      [_vm._v("Father")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "mother" } },
                                      [_vm._v("Mother")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "other" } },
                                      [_vm._v("Other")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select any one option")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-xl-5 col-lg-6 col-12 form-group"
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
                                      value:
                                        _vm.$v.parent.guardian_relation.$model,
                                      expression:
                                        "$v.parent.guardian_relation.$model"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.parent.guardian_relation.$error
                                  },
                                  attrs: { type: "text" },
                                  domProps: {
                                    value:
                                      _vm.$v.parent.guardian_relation.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.parent.guardian_relation,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please enter relation name")
                                ])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-xl-6 col-lg-6 col-12 form-group"
                              },
                              [
                                _c("label", [_vm._v("Guardian *")]),
                                _vm._v(" "),
                                _c("multiselect", {
                                  class: {
                                    "is-invalid": _vm.$v.guardian.$error
                                  },
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
                                              "\n                                            " +
                                                _vm._s(option.name) +
                                                " " +
                                                _vm._s(option.mobile) +
                                                "\n                                        "
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    2956381231
                                  ),
                                  model: {
                                    value: _vm.$v.guardian.$model,
                                    callback: function($$v) {
                                      _vm.$set(_vm.$v.guardian, "$model", $$v)
                                    },
                                    expression: "$v.guardian.$model"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v("Please select guardian")
                                ])
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
                                            return _vm.openParentModal(
                                              "guardian"
                                            )
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
                          _vm._m(6)
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal align-middle", attrs: { id: "guardianModal" } },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(7),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _c(
                  "b-form",
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
                        attrs: { type: "text", placeholder: "Name" },
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
                        attrs: { type: "text", placeholder: "Mobile No." },
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
                        attrs: { type: "password", placeholder: "Password" },
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
                    _c("div", { staticClass: "form-group text-center" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-lg btn-info btnReflectPassword",
                          attrs: { type: "submit" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-check" }),
                          _vm._v("     Submit")
                        ]
                      )
                    ])
                  ]
                )
              ],
              1
            )
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
            _vm._m(8),
            _vm._v(" "),
            _vm._m(9),
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
      _c("div", { staticClass: "col-6" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 form-group mg-6-8 text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
            attrs: { type: "submit" }
          },
          [_vm._v("Save")]
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
        _c("h3", [_vm._v("Student Documents")])
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 form-group mg-t-8 text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
            attrs: { type: "submit" }
          },
          [_vm._v("Save")]
        )
      ])
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

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/school-panel/student/add.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/school-panel/student/add.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_2d49b018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=2d49b018& */ "./resources/js/components/school-panel/student/add.vue?vue&type=template&id=2d49b018&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/student/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_2d49b018___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_2d49b018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/student/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/student/add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/student/add.vue?vue&type=template&id=2d49b018&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/add.vue?vue&type=template&id=2d49b018& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_2d49b018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=2d49b018& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/add.vue?vue&type=template&id=2d49b018&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_2d49b018___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_2d49b018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
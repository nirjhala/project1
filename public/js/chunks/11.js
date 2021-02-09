(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/script */ "./resources/js/api/script.js");
var _form;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var alphaOnly = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["helpers"].regex('aplpha', /^[A-Za-z ]*$/i);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      form: {
        user_id: '',
        tc_number: '',
        name: '',
        "class": '',
        section: '',
        roll_no: '',
        admission_no: '',
        admission_date: '',
        father_name: '',
        mother_name: '',
        cast_category: '',
        dob: '',
        dob_words: '',
        apply_date: '',
        issue_date: '',
        admitted_class: '',
        reason: '',
        paid_month: '',
        fee_concession: '',
        is_ncc: 'no',
        is_game: 'no',
        total_working_days: '',
        total_present_days: '',
        result: 'Pass',
        conduct: '',
        remarks: '',
        nationality: 'Indian',
        class_promotion: 'yes',
        promoting_class: ''
      },
      student: null,
      students: [],
      success: null,
      errors: [],
      loaded: 0
    };
  },
  validations: {
    form: (_form = {
      apply_date: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      issue_date: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      reason: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      tc_number: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      nationality: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      promoting_class: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      "class": {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      dob_words: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      section: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      roll_no: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      admitted_class: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      paid_month: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      total_working_days: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      total_present_days: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }, _defineProperty(_form, "reason", {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    }), _defineProperty(_form, "conduct", {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    }), _form)
  },
  mounted: function mounted() {
    this.routeLoading();
    this.fetch_students();
  },
  methods: {
    routeLoading: function routeLoading() {
      if (this.$route.params) {
        this.getInfo();
      } else {
        this.loaded = 1;
      }
    },
    studentLabel: function studentLabel(_ref) {
      var user = _ref.user,
          father_info = _ref.father_info,
          section_name = _ref.section_name;
      var text = user.name;
      if (father_info && father_info.name) text += " ".concat(father_info.name);
      text += ', Class - ';
      if (section_name && section_name.cls && section_name.cls.name) text += " ".concat(section_name.cls.name);
      if (section_name && section_name.name) text += " ".concat(section_name.name);
      return text;
    },
    fetch_students: function fetch_students() {
      var _this = this;

      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_2__["default"].getStudents();
      apiResponse.then(function (res) {
        _this.students = res.data;
      })["catch"](function (err) {
        console.log("Errors: ", err);
      });
    },
    getInfo: function getInfo() {
      var _this2 = this;

      this.loaded = 0;
      Object(_api_script__WEBPACK_IMPORTED_MODULE_2__["show_tc"])(this.$route.params.id).then(function (res) {
        _this2.form = res.data;
        _this2.loaded = 1;
      });
    },
    saveData: function saveData() {
      var _this3 = this;

      this.loaded = 0;
      var params = {
        form: this.form
      };

      if (!this.$route.params.id) {
        Object(_api_script__WEBPACK_IMPORTED_MODULE_2__["add_tc"])(params).then(function (res) {
          _this3.loaded = 1;

          _this3.$router.push({
            name: 'ViewTc'
          });
        })["catch"](function (error) {
          _this3.loaded = 1;
          console.log(error);
        });
      } else {
        Object(_api_script__WEBPACK_IMPORTED_MODULE_2__["edit_tc"])(this.$route.params.id, params).then(function (res) {
          _this3.loaded = 1;

          _this3.$router.push({
            name: 'ViewTc'
          });
        })["catch"](function (error) {
          _this3.loaded = 1;
          console.log(error);
        });
      }
    }
  },
  watch: {
    "$route.params.id": function $routeParamsId() {
      this.routeLoading();
    },
    student: function student(_student) {
      this.form.user_id = _student.uid;
      this.form.name = _student.user.name;
      this.form["class"] = _student.section_name.cls.name;
      this.form.section = _student.section_name.name;
      this.form.roll_no = _student.roll_no;
      this.form.admission_no = _student.reg_no;
      this.form.father_name = _student.father_info.name;
      this.form.mother_name = _student.mother_info.name;
      this.form.dob = _student.user.dob;
      this.form.admission_date = _student.admission_date;
      this.form.cast_category = _student.category;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[readonly] {\n    background-color: bisque !important;\n    cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_tc.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./vue-multiselect.min.css?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=template&id=06a46b24&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=template&id=06a46b24& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                attrs: { to: { name: "ViewTc" } }
              },
              [_vm._v("View TC")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [
          _vm._v(_vm._s(!_vm.$route.params.id ? "Add" : "Edit") + " TC")
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
              _c(
                "router-link",
                { attrs: { to: { name: "CertificateMaster" } } },
                [_vm._v("Certificate Master")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: { name: "ViewTc" } } }, [
                _vm._v("TC")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [
            _vm._v(_vm._s(!_vm.$route.params.id ? "Add" : "Edit") + " TC")
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-card",
        { attrs: { title: !_vm.$route.params.id ? "Add TC" : "Edit TC" } },
        [
          _c(
            "b-form",
            {
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.saveData($event)
                }
              }
            },
            [
              _c(
                "b-row",
                [
                  !_vm.$route.params.id
                    ? _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-9",
                          attrs: { label: "Search Student" }
                        },
                        [
                          _c("multiselect", {
                            attrs: {
                              "track-by": "uid",
                              placeholder: "Search Student",
                              "select-label": "",
                              "deselect-label": "",
                              options: _vm.students,
                              "custom-label": _vm.studentLabel,
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
                                        "\n                            " +
                                          _vm._s(
                                            option.user.name +
                                              " - " +
                                              option.father_info.name +
                                              ", Class - " +
                                              option.section_name.cls.name +
                                              " " +
                                              option.section_name.name
                                          ) +
                                          "\n                        "
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              3257800345
                            ),
                            model: {
                              value: _vm.student,
                              callback: function($$v) {
                                _vm.student = $$v
                              },
                              expression: "student"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "TC Generate No." }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          placeholder:
                            "Enter TC Number (leave blank to auto generate)"
                        },
                        model: {
                          value: _vm.form.tc_number,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "tc_number",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.tc_number"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Name of Pupil" }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          placeholder: "Enter Student Name",
                          readonly: ""
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "name",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { staticClass: "col-sm-3", attrs: { label: "Class" } },
                    [
                      _c("b-input", {
                        attrs: {
                          placeholder: "Enter Class Name",
                          readonly: ""
                        },
                        model: {
                          value: _vm.form.class,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "class",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.class"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { staticClass: "col-sm-3", attrs: { label: "Section" } },
                    [
                      _c("b-input", {
                        attrs: {
                          placeholder: "Enter Section Name",
                          readonly: ""
                        },
                        model: {
                          value: _vm.form.section,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "section",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.section"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Student Roll No." }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          placeholder: "Enter Student Roll No.",
                          readonly: ""
                        },
                        model: {
                          value: _vm.form.roll_no,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "roll_no",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.roll_no"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Admission Number" }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          placeholder: "Enter Admission No.",
                          readonly: ""
                        },
                        model: {
                          value: _vm.form.admission_no,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "admission_no",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.admission_no"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Admission Date" }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          type: "date",
                          placeholder: "Enter Admission Date",
                          readonly: ""
                        },
                        model: {
                          value: _vm.form.admission_date,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "admission_date",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.admission_date"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Father's Name" }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          placeholder: "Enter Father's Name",
                          readonly: ""
                        },
                        model: {
                          value: _vm.form.father_name,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "father_name",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.father_name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Mother's Name" }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          placeholder: "Enter Mother's Name",
                          readonly: ""
                        },
                        model: {
                          value: _vm.form.mother_name,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "mother_name",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.mother_name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Date Of Birth" }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          type: "date",
                          placeholder: "Enter DOB",
                          readonly: ""
                        },
                        model: {
                          value: _vm.form.dob,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "dob",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.dob"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Date Of Birth (in words)" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.dob_words.$error
                        },
                        attrs: { placeholder: "Enter DOB (in words)" },
                        model: {
                          value: _vm.$v.form.dob_words.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.dob_words,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.dob_words.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Nationality" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.nationality.$error
                        },
                        attrs: { placeholder: "Nationality" },
                        model: {
                          value: _vm.$v.form.nationality.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.nationality,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.nationality.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Cast Category" }
                    },
                    [
                      _c("b-input", {
                        attrs: { placeholder: "Cast Category", readonly: "" },
                        model: {
                          value: _vm.form.cast_category,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "cast_category",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.cast_category"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Date of Application" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.apply_date.$error
                        },
                        attrs: {
                          placeholder: "Date of Application",
                          type: "date"
                        },
                        model: {
                          value: _vm.$v.form.apply_date.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.apply_date,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.apply_date.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Date of Issuance" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.issue_date.$error
                        },
                        attrs: {
                          placeholder: "Date of Issuance",
                          type: "date"
                        },
                        model: {
                          value: _vm.$v.form.issue_date.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.issue_date,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.issue_date.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Class in which admitted" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.admitted_class.$error
                        },
                        attrs: { placeholder: "Class in which admitted *" },
                        model: {
                          value: _vm.$v.form.admitted_class.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.admitted_class,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.admitted_class.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Promoted to other class?" }
                    },
                    [
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.class_promotion,
                              expression: "form.class_promotion"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "class_promotion",
                            value: "yes"
                          },
                          domProps: {
                            checked: _vm._q(_vm.form.class_promotion, "yes")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(
                                _vm.form,
                                "class_promotion",
                                "yes"
                              )
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Yes\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.class_promotion,
                              expression: "form.class_promotion"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "class_promotion",
                            value: "no"
                          },
                          domProps: {
                            checked: _vm._q(_vm.form.class_promotion, "no")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.form, "class_promotion", "no")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        No\n                    "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Class in which promoted" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.promoting_class.$error
                        },
                        attrs: { placeholder: "Class in which promoted *" },
                        model: {
                          value: _vm.$v.form.promoting_class.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.promoting_class,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.promoting_class.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { staticClass: "col-sm-3", attrs: { label: "Reason" } },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.reason.$error
                        },
                        attrs: { placeholder: "Reason for leaving *" },
                        model: {
                          value: _vm.$v.form.reason.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.reason,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.reason.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      class: {
                        "is-invalid": _vm.$v.form.paid_month.$error
                      },
                      attrs: { label: "Paid Month *" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.paid_month.$error
                        },
                        attrs: { placeholder: "Enter paid month" },
                        model: {
                          value: _vm.$v.form.paid_month.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.paid_month,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.paid_month.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Any Fee Concession" }
                    },
                    [
                      _c("b-input", {
                        attrs: { placeholder: "Any Fee Concession" },
                        model: {
                          value: _vm.form.fee_concession,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "fee_concession",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.fee_concession"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Wheather NCC/SCOUT/GUIDE *" }
                    },
                    [
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.is_ncc,
                              expression: "form.is_ncc"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "is_ncc",
                            value: "yes"
                          },
                          domProps: { checked: _vm._q(_vm.form.is_ncc, "yes") },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.form, "is_ncc", "yes")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Yes\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.is_ncc,
                              expression: "form.is_ncc"
                            }
                          ],
                          attrs: { type: "radio", name: "is_ncc", value: "no" },
                          domProps: { checked: _vm._q(_vm.form.is_ncc, "no") },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.form, "is_ncc", "no")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        No\n                    "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Games Played or Extra Activity *" }
                    },
                    [
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.is_game,
                              expression: "form.is_game"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "is_game",
                            value: "yes"
                          },
                          domProps: {
                            checked: _vm._q(_vm.form.is_game, "yes")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.form, "is_game", "yes")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Yes\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.is_game,
                              expression: "form.is_game"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "is_game",
                            value: "no"
                          },
                          domProps: { checked: _vm._q(_vm.form.is_game, "no") },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.form, "is_game", "no")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        No\n                    "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Total working day *" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.total_working_days.$error
                        },
                        attrs: {
                          type: "number",
                          placeholder: "Total no. of days to be present"
                        },
                        model: {
                          value: _vm.$v.form.total_working_days.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.total_working_days,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.total_working_days.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "No. of days present *" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.total_present_days.$error
                        },
                        attrs: {
                          type: "number",
                          placeholder: "Total no. of present days"
                        },
                        model: {
                          value: _vm.$v.form.total_present_days.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.total_present_days,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.total_present_days.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "Result status" }
                    },
                    [
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.result,
                              expression: "form.result"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "result",
                            value: "Pass"
                          },
                          domProps: {
                            checked: _vm._q(_vm.form.result, "Pass")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.form, "result", "Pass")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Pass\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.result,
                              expression: "form.result"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "result",
                            value: "Fail"
                          },
                          domProps: {
                            checked: _vm._q(_vm.form.result, "Fail")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.form, "result", "Fail")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Fail\n                    "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-3",
                      attrs: { label: "General Conduct *" }
                    },
                    [
                      _c("b-input", {
                        class: {
                          "is-invalid": _vm.$v.form.conduct.$error
                        },
                        attrs: { placeholder: "Conduct or behaviour" },
                        model: {
                          value: _vm.$v.form.conduct.$model,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$v.form.conduct,
                              "$model",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "$v.form.conduct.$model"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please fill required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { staticClass: "col-sm-6", attrs: { label: "Remarks" } },
                    [
                      _c("b-input", {
                        attrs: { placeholder: "Any other Remarks" },
                        model: {
                          value: _vm.form.remarks,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "remarks",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.remarks"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.student || _vm.$route.params.id
                ? _c(
                    "button",
                    {
                      staticClass:
                        "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                      attrs: { type: "submit" }
                    },
                    [_vm._v(_vm._s(_vm.$route.params.id ? "Update" : "Save"))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.student || _vm.$route.params.id
                ? _c(
                    "button",
                    {
                      staticClass: "btn-fill-lg bg-blue-dark btn-hover-yellow",
                      attrs: { type: "reset" }
                    },
                    [_vm._v("Reset")]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./vue-multiselect.min.css?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/school-panel/certificate/add_tc.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/school-panel/certificate/add_tc.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_tc_vue_vue_type_template_id_06a46b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_tc.vue?vue&type=template&id=06a46b24& */ "./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=template&id=06a46b24&");
/* harmony import */ var _add_tc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_tc.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _add_tc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_tc.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _add_tc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_tc_vue_vue_type_template_id_06a46b24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_tc_vue_vue_type_template_id_06a46b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/certificate/add_tc.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_tc.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_tc.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=template&id=06a46b24&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=template&id=06a46b24& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_template_id_06a46b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_tc.vue?vue&type=template&id=06a46b24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/certificate/add_tc.vue?vue&type=template&id=06a46b24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_template_id_06a46b24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_tc_vue_vue_type_template_id_06a46b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
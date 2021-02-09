(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/info.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/info.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      errors: 0,
      id: null,
      info: {},
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.id = this.$route.params.id;
    this.getInfo();
  },
  methods: {
    searchAfterDebounce: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function () {
      this.searchData();
    }, 500),
    studentLabel: function studentLabel(_ref) {
      var user = _ref.user,
          father_info = _ref.father_info,
          section_name = _ref.section_name;
      return "".concat(user.name, " - ").concat(father_info.name, ", Class - ").concat(section_name.cls.name, " ").concat(section_name.name);
    },
    getInfo: function getInfo() {
      var _this = this;

      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_2__["default"].studentInfo(this.id);
      apiResponse.then(function (res) {
        _this.info = res.data;
      })["catch"](function (err) {
        console.log("Errors: ", err);
      });
    },
    searchData: function searchData(page) {
      var _this2 = this;

      var s = this.s;

      if (typeof page === 'undefined') {
        page = 1;
      }

      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('search-student/?page=' + page + '&s=' + s).then(function (res) {
        _this2.loaded = 1;
        _this2.lists = res.data.data;

        if (!res.data.status) {
          _this2.errors = 1;
        }
      })["catch"](function (err) {
        _this2.loaded = 1;
        console.log(err);
      });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/info.vue?vue&type=template&id=ce22fb2a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/info.vue?vue&type=template&id=ce22fb2a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Student Details")]),
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
            _c("router-link", { attrs: { to: { name: "StudentMaster" } } }, [
              _vm._v("Student Master")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v("Student Details")])
      ])
    ]),
    _vm._v(" "),
    _vm.info.id
      ? _c(
          "div",
          { staticClass: "mg-b-20" },
          [
            _c(
              "b-card",
              {
                staticClass: "height-auto",
                attrs: { header: "Basic Information" }
              },
              [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _c("tr", [
                      _c("th", [_vm._v("TITLE: ")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.user.title))]),
                      _vm._v(" "),
                      _c("th", [_vm._v("FIRST NAME: ")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.user.fname))]),
                      _vm._v(" "),
                      _c("th", [_vm._v("LAST NAME: ")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.user.lname))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { colspan: "2" } }, [
                        _vm._v("FULL NAME: ")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(_vm._s(_vm.info.user.name))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "text-center",
                          attrs: { colspan: "2", rowspan: "8" }
                        },
                        [
                          _c("div", { staticClass: "mb-2" }, [
                            _vm._v(
                              "\n                                PHOTOGRAPH\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("img", {
                              staticStyle: { "max-width": "200px" },
                              attrs: {
                                src: _vm.info.picture,
                                alt: _vm.info.user.name,
                                title: _vm.info.user.name
                              }
                            })
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { colspan: "2" } }, [
                        _vm._v("EMAIL ADDRESS: ")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(_vm._s(_vm.info.user.email))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { colspan: "2" } }, [
                        _vm._v("MOBILE NO.: ")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(_vm._s(_vm.info.user.mobile))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { colspan: "2" } }, [
                        _vm._v("GENDER: ")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(_vm._s(_vm.info.user.gender))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { colspan: "2" } }, [_vm._v("DOB: ")]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(_vm._s(_vm.info.user.dob))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { colspan: "2" } }, [
                        _vm._v("ENROLLMENT NO.: ")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(_vm._s(_vm.info.reg_no))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { colspan: "2" } }, [
                        _vm._v("ROLL NO.: ")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(_vm._s(_vm.info.roll_no))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { colspan: "2" } }, [
                        _vm._v("ENROLLMENT NO.: ")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(_vm._s(_vm.info.reg_no))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { colspan: "2" } }, [
                        _vm._v("ADDRESS: ")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "4" } }, [
                        _c("div", [
                          _vm._v(
                            _vm._s(
                              _vm.info.user.address1 +
                                " " +
                                _vm.info.user.address2
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _vm.info.user.city_data
                          ? _c("div", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.info.user.city_data.state_name.name +
                                      " " +
                                      _vm.info.user.city_data.name +
                                      " " +
                                      _vm.info.user.pin_code
                                  ) +
                                  "\n                            "
                              )
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticClass: "height-auto",
                attrs: { header: "Parents Information" }
              },
              [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _c("tr", [
                      _c("th", [_vm._v("RELATION")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("NAME")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("MOBILE")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("EMAIL")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Father")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.father_info.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.father_info.mobile))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.father_info.email))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Mother")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.mother_info.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.mother_info.mobile))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.mother_info.email))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(_vm.info.guardian_relation))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.guardian_info.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.guardian_info.mobile))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.info.guardian_info.email))])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticClass: "height-auto",
                attrs: { header: "Other Information" }
              },
              [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c("tr", [
                    _c("th", [_vm._v("CLASS")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm.info.section_name.cls.name +
                            " - " +
                            _vm.info.section_name.name
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("RELIGION")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.info.religion_info.name))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("CAST")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.info.cast))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("CATEGORY")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.info.category))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("BLOOD GROUP")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.info.blood_group))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "2" } }, [
                      _c("strong", [_vm._v("ABOUT / BIO: ")]),
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.info.short_bio ? _vm.info.short_bio : "N/A"
                          ) +
                          "\n                    "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm.info.user.documents && _vm.info.user.documents.length
                  ? _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        { staticClass: "table table-bordered" },
                        [
                          _c("tr", { staticClass: "bg-dark text-white" }, [
                            _c("th", { attrs: { colspan: "2" } }, [
                              _c("div", { staticClass: "px-3 py-2" }, [
                                _vm._v("UPLOADED DOCUMENTS")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.info.user.documents, function(d, i) {
                            return _c("tr", { key: i }, [
                              _c("th", [
                                _vm._v(
                                  _vm._s(
                                    d.document.en_name +
                                      " " +
                                      d.document.hi_name +
                                      " (" +
                                      d.document.short_name +
                                      ")"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: d.file_url,
                                      target: "_blank"
                                    }
                                  },
                                  [_vm._v("VIEW / DOWNLOAD")]
                                )
                              ])
                            ])
                          })
                        ],
                        2
                      )
                    ])
                  : _vm._e()
              ]
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/components/school-panel/student/info.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/school-panel/student/info.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_vue_vue_type_template_id_ce22fb2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=ce22fb2a& */ "./resources/js/components/school-panel/student/info.vue?vue&type=template&id=ce22fb2a&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/student/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_ce22fb2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_vue_vue_type_template_id_ce22fb2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/student/info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/student/info.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/info.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/student/info.vue?vue&type=template&id=ce22fb2a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/info.vue?vue&type=template&id=ce22fb2a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_ce22fb2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=template&id=ce22fb2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/info.vue?vue&type=template&id=ce22fb2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_ce22fb2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_ce22fb2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
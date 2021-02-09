(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/script */ "./resources/js/api/script.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      salary: {
        type: 'Teacher',
        employee_id: '',
        name: '',
        designation: '',
        grade: '',
        pan_no: '',
        bank_name: '',
        account_no: '',
        ifsc_code: '',
        total_days: 0,
        total_leave: 0,
        days_paid: 0,
        basic_salary: 0,
        previous_due: 0,
        month: d.getMonth() > 0 ? d.getMonth() - 1 : 11,
        year: d.getMonth() > 0 ? d.getFullYear() : d.getFullYear() - 1
      },
      employees: {},
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      allowances: [],
      deductions: [],
      currentYear: d.getFullYear(),
      success: null,
      errors: [],
      loaded: 0
    };
  },
  validations: function validations() {
    return {
      salary: {
        employee_id: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        }
      }
    };
  },
  mounted: function mounted() {
    this.routeLoading();
    this.fetch_employees();
    var num = 1;

    do {
      this.percentages.push(num);
      if (num < 10) num++;else num += 5;
    } while (num <= 50);

    this.salary.percent = 1;
  },
  methods: {
    routeLoading: function routeLoading() {
      if (this.$route.params.id) {
        this.getInfo();
      } else {
        this.loaded = 1;
      }
    },
    fetch_employees: function fetch_employees() {
      var _this = this;

      this.salary.employee_id = '';
      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_users"])("type=all&role=".concat(this.salary.type, "&month=").concat(this.salary.month, "&year=").concat(this.salary.year)).then(function (res) {
        _this.employees = res.data;
      });
    },
    fetch_employee_info: function fetch_employee_info() {
      var self = this;

      if (this.salary.employee_id) {
        Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_employee_info"])(this.salary.employee_id, "type=all-details&month=".concat(this.salary.month, "&year=").concat(this.salary.year)).then(function (res) {
          var _user$EmployeeNumber, _user$Designation, _user$grade, _user$PANNumber, _user$BankName, _user$AccountNumber, _user$IFSCCode, _user$salary;

          var user = res.data;
          self.salary.name = user.name;
          self.salary.employee_no = (_user$EmployeeNumber = user['Employee Number']) !== null && _user$EmployeeNumber !== void 0 ? _user$EmployeeNumber : '';
          self.salary.designation = (_user$Designation = user.Designation) !== null && _user$Designation !== void 0 ? _user$Designation : '';
          self.salary.grade = (_user$grade = user.grade) !== null && _user$grade !== void 0 ? _user$grade : '';
          self.salary.pan_no = (_user$PANNumber = user['PAN Number']) !== null && _user$PANNumber !== void 0 ? _user$PANNumber : '';
          self.salary.bank_name = (_user$BankName = user['Bank Name']) !== null && _user$BankName !== void 0 ? _user$BankName : '';
          self.salary.account_no = (_user$AccountNumber = user['Account Number']) !== null && _user$AccountNumber !== void 0 ? _user$AccountNumber : '';
          self.salary.ifsc_code = (_user$IFSCCode = user['IFSC Code']) !== null && _user$IFSCCode !== void 0 ? _user$IFSCCode : '';
          self.salary.basic_salary = (_user$salary = user.salary) !== null && _user$salary !== void 0 ? _user$salary : '';
          self.salary.total_days = user.total_days;
          self.salary.days_paid = user.paid_days;
          self.salary.total_leave = user.total_days - user.paid_days;
          self.allowances = user.allowance;
          self.deductions = user.deduction;
        });
      }
    },
    getInfo: function getInfo() {
      var _this2 = this;

      this.loaded = 0;
      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["show_salary_slip"])(this.$route.params.id).then(function (res) {
        _this2.allowance = res.data;
        _this2.loaded = 1;
      });
    },
    saveData: function saveData() {
      var _this3 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        this.loaded = 0;
        var params = {
          salary: this.salary,
          allowances: this.allowances,
          deductions: this.deductions
        };

        if (!this.$route.params.id) {
          Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["add_salary_slip"])(params).then(function (res) {
            _this3.loaded = 1;

            _this3.$router.push({
              name: 'PayrollSalarySlip'
            });
          })["catch"](function (error) {
            _this3.loaded = 1;
            console.log(error);
          });
        } else {
          Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["edit_salary_slip"])(this.$route.params.id, params).then(function (res) {
            _this3.loaded = 1;

            _this3.$router.push({
              name: 'PayrollSalarySlip'
            });
          })["catch"](function (error) {
            _this3.loaded = 1;
            console.log(error);
          });
        }
      }
    }
  },
  watch: {
    "$route.params.id": function $routeParamsId() {
      this.routeLoading();
    },
    "salary.type": function salaryType() {
      this.fetch_employees();
    },
    "salary.employee_id": function salaryEmployee_id() {
      this.fetch_employee_info();
    },
    "salary.month": function salaryMonth() {
      this.fetch_employee_info();
    },
    "salary.year": function salaryYear() {
      this.fetch_employee_info();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nlabel[data-v-757a3288] {\n    text-transform: capitalize;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=template&id=757a3288&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=template&id=757a3288&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
                  to: {
                    name: "PayrollSalarySlip"
                  }
                }
              },
              [_vm._v("View Salary Slip")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [
          _vm._v(
            _vm._s(!_vm.$route.params.id ? "Add" : "Edit") + " Salary Slip"
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
              _c("router-link", { attrs: { to: { name: "PayrollMaster" } } }, [
                _vm._v("Payroll Management Master")
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
                { attrs: { to: { name: "PayrollSalarySlip" } } },
                [_vm._v("Salary Slip")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              _vm._s(!_vm.$route.params.id ? "Add" : "Edit") + " Salary Slip"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-card",
        {
          staticClass: "h-auto",
          attrs: {
            title: !_vm.$route.params.id
              ? "Create Salary Slip"
              : "Edit Salary Slip"
          }
        },
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
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-4",
                      attrs: { label: "Teacher / Staff *" }
                    },
                    [
                      _c("label", { staticClass: "mr-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.salary.type,
                              expression: "salary.type"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "type",
                            value: "Teacher"
                          },
                          domProps: {
                            checked: _vm._q(_vm.salary.type, "Teacher")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.salary, "type", "Teacher")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Teacher\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "mr-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.salary.type,
                              expression: "salary.type"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            name: "type",
                            value: "Staff"
                          },
                          domProps: {
                            checked: _vm._q(_vm.salary.type, "Staff")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.salary, "type", "Staff")
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        Staff\n                    "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-4",
                      attrs: { label: "Select " + _vm.salary.type }
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.$v.salary.employee_id.$model,
                              expression: "$v.salary.employee_id.$model"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.salary.employee_id.$error
                          },
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
                                _vm.$v.salary.employee_id,
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
                            _vm._v("Select Name")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.employees, function(name, id) {
                            return _c(
                              "option",
                              { key: id, domProps: { value: id } },
                              [_vm._v(_vm._s(name))]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v("Please enter required field.")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-2",
                      attrs: { label: "Select Month" }
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.salary.month,
                              expression: "salary.month"
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
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.salary,
                                "month",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.months, function(name, num) {
                          return _c(
                            "option",
                            { key: num, domProps: { value: num } },
                            [_vm._v(_vm._s(name))]
                          )
                        }),
                        0
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      staticClass: "col-sm-2",
                      attrs: { label: "Select Month" }
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.salary.year,
                              expression: "salary.year"
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
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.salary,
                                "year",
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
                            { domProps: { value: _vm.currentYear } },
                            [_vm._v(_vm._s(_vm.currentYear))]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { domProps: { value: _vm.currentYear - 1 } },
                            [_vm._v(_vm._s(_vm.currentYear - 1))]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { domProps: { value: _vm.currentYear - 2 } },
                            [_vm._v(_vm._s(_vm.currentYear - 2))]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { domProps: { value: _vm.currentYear - 3 } },
                            [_vm._v(_vm._s(_vm.currentYear - 3))]
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.salary.employee_id
                ? _c(
                    "b-row",
                    [
                      _c(
                        "b-form-group",
                        { staticClass: "col-sm-2", attrs: { label: "Name" } },
                        [
                          _c("b-input", {
                            attrs: { placeholder: "Name", readonly: "" },
                            model: {
                              value: _vm.salary.name,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "name", $$v)
                              },
                              expression: "salary.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "Employee No." }
                        },
                        [
                          _c("b-input", {
                            attrs: {
                              placeholder: "Employee No.",
                              readonly: ""
                            },
                            model: {
                              value: _vm.salary.employee_no,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "employee_no", $$v)
                              },
                              expression: "salary.employee_no"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "Designation" }
                        },
                        [
                          _c("b-input", {
                            attrs: { placeholder: "Designation", readonly: "" },
                            model: {
                              value: _vm.salary.designation,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "designation", $$v)
                              },
                              expression: "salary.designation"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { staticClass: "col-sm-2", attrs: { label: "Grade" } },
                        [
                          _c("b-input", {
                            attrs: { placeholder: "Grade", readonly: "" },
                            model: {
                              value: _vm.salary.grade,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "grade", $$v)
                              },
                              expression: "salary.grade"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "PAN No." }
                        },
                        [
                          _c("b-input", {
                            attrs: { placeholder: "PAN No.", readonly: "" },
                            model: {
                              value: _vm.salary.pan_no,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "pan_no", $$v)
                              },
                              expression: "salary.pan_no"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "Bank Name" }
                        },
                        [
                          _c("b-input", {
                            attrs: { placeholder: "Bank Name", readonly: "" },
                            model: {
                              value: _vm.salary.bank_name,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "bank_name", $$v)
                              },
                              expression: "salary.bank_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "Account No." }
                        },
                        [
                          _c("b-input", {
                            attrs: { placeholder: "Account No.", readonly: "" },
                            model: {
                              value: _vm.salary.account_no,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "account_no", $$v)
                              },
                              expression: "salary.account_no"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "IFSC Code" }
                        },
                        [
                          _c("b-input", {
                            attrs: { placeholder: "IFSC Code", readonly: "" },
                            model: {
                              value: _vm.salary.ifsc_code,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "ifsc_code", $$v)
                              },
                              expression: "salary.ifsc_code"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "Total Days in Month" }
                        },
                        [
                          _c("b-input", {
                            attrs: {
                              placeholder: "Total Days in Month",
                              readonly: ""
                            },
                            model: {
                              value: _vm.salary.total_days,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "total_days", $$v)
                              },
                              expression: "salary.total_days"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "Days Paid" }
                        },
                        [
                          _c("b-input", {
                            attrs: { placeholder: "Days Paid", readonly: "" },
                            model: {
                              value: _vm.salary.days_paid,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "days_paid", $$v)
                              },
                              expression: "salary.days_paid"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "Total Leave" }
                        },
                        [
                          _c("b-input", {
                            attrs: { placeholder: "Leave Taken", readonly: "" },
                            model: {
                              value: _vm.salary.total_leave,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "total_leave", $$v)
                              },
                              expression: "salary.total_leave"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "Basic Salary" }
                        },
                        [
                          _c("b-input", {
                            attrs: {
                              placeholder: "Basic Salary",
                              readonly: ""
                            },
                            model: {
                              value: _vm.salary.basic_salary,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "basic_salary", $$v)
                              },
                              expression: "salary.basic_salary"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "col-sm-2",
                          attrs: { label: "Previous Due" }
                        },
                        [
                          _c("b-input", {
                            attrs: {
                              type: "number",
                              min: "0",
                              placeholder: "Previous Due"
                            },
                            model: {
                              value: _vm.salary.previous_due,
                              callback: function($$v) {
                                _vm.$set(_vm.salary, "previous_due", $$v)
                              },
                              expression: "salary.previous_due"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.salary.employee_id
                ? _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { sm: "6" } },
                        [
                          _c("h4", { staticClass: "card-title" }, [
                            _vm._v("Allowance")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.allowances, function(allowance, i) {
                            return _c(
                              "b-row",
                              { key: i, staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "col-sm-5",
                                    attrs: { for: "" }
                                  },
                                  [_vm._v(_vm._s(allowance.name))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-sm-7" },
                                  [
                                    _c("b-input", {
                                      attrs: {
                                        type: "number",
                                        placeholder: "Amount"
                                      },
                                      model: {
                                        value: allowance.amount,
                                        callback: function($$v) {
                                          _vm.$set(allowance, "amount", $$v)
                                        },
                                        expression: "allowance.amount"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { sm: "6" } },
                        [
                          _c("h4", { staticClass: "card-title" }, [
                            _vm._v("Deduction")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.deductions, function(deduction, i) {
                            return _c(
                              "b-row",
                              { key: i, staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "col-sm-5",
                                    attrs: { for: "" }
                                  },
                                  [_vm._v(_vm._s(deduction.name))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-sm-7" },
                                  [
                                    _c("b-input", {
                                      attrs: {
                                        type: "number",
                                        placeholder: "Amount"
                                      },
                                      model: {
                                        value: deduction.amount,
                                        callback: function($$v) {
                                          _vm.$set(deduction, "amount", $$v)
                                        },
                                        expression: "deduction.amount"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                  attrs: { type: "submit" }
                },
                [_vm._v(_vm._s(_vm.$route.params.id ? "Update" : "Save"))]
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

/***/ "./resources/js/components/school-panel/payroll/AddSalarySlip.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddSalarySlip.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddSalarySlip_vue_vue_type_template_id_757a3288_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSalarySlip.vue?vue&type=template&id=757a3288&scoped=true& */ "./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=template&id=757a3288&scoped=true&");
/* harmony import */ var _AddSalarySlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddSalarySlip.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddSalarySlip_vue_vue_type_style_index_0_id_757a3288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css& */ "./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddSalarySlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddSalarySlip_vue_vue_type_template_id_757a3288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddSalarySlip_vue_vue_type_template_id_757a3288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "757a3288",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/payroll/AddSalarySlip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSalarySlip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_style_index_0_id_757a3288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=style&index=0&id=757a3288&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_style_index_0_id_757a3288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_style_index_0_id_757a3288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_style_index_0_id_757a3288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_style_index_0_id_757a3288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_style_index_0_id_757a3288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=template&id=757a3288&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=template&id=757a3288&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_template_id_757a3288_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSalarySlip.vue?vue&type=template&id=757a3288&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/payroll/AddSalarySlip.vue?vue&type=template&id=757a3288&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_template_id_757a3288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalarySlip_vue_vue_type_template_id_757a3288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
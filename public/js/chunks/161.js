(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/view.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/view.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      loaded: 0,
      subjectId: '',
      search: {
        s: '',
        department_id: '',
        class_id: '',
        section_id: '',
        gender: '',
        state_id: '',
        city_id: '',
        category: '',
        religion_id: '',
        cast: '',
        blood_group: ''
      },
      // All Dropdown Data
      departments: [],
      classes: [],
      sections: [],
      states: [],
      cities: [],
      religions: [],
      // token
      token: localStorage.getItem('token')
    };
  },
  mounted: function mounted() {
    this.loadComponent();
  },
  methods: {
    loadComponent: function loadComponent() {
      this.getRecords();
      this.getDepartments();
      this.getReligions();
      this.getStates();
    },
    getDepartments: function getDepartments() {
      var _this = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["fetchDepartments"])().then(function (res) {
        _this.departments = res.data;
      })["catch"](function (err) {
        console.log('Dept Error: ', err);
      });
    },
    getClasses: function getClasses(deptId) {
      var _this2 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["fetchClasses"])(deptId).then(function (res) {
        _this2.classes = res.data;
      })["catch"](function (err) {
        console.log('Class Error: ', err);
      });
    },
    getSections: function getSections(class_id) {
      var _this3 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["fetchSections"])(class_id).then(function (res) {
        _this3.sections = res.data;
      })["catch"](function (err) {
        console.log('Section Error: ', err);
      });
    },
    getStates: function getStates() {
      var _this4 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["fetchStates"])().then(function (res) {
        _this4.states = res.data;
      })["catch"](function (err) {
        console.log('State Error: ', err);
      });
    },
    getCities: function getCities(state_id) {
      var _this5 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["fetchCities"])(state_id).then(function (res) {
        _this5.cities = res.data;
      })["catch"](function (err) {
        console.log('City Error: ', err);
      });
    },
    getReligions: function getReligions() {
      var _this6 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["fetchReligions"])().then(function (res) {
        _this6.religions = res.data;
      })["catch"](function (err) {
        console.log('Religions Error: ', err);
      });
    },
    checkAll: function checkAll() {
      var self = this;
      self.check = [];

      if (!self.allSelected) {
        $.each(self.lists.data, function (i, row) {
          self.check.push(row.id);
        });
      }
    },
    resetSearch: function resetSearch() {
      this.search = {
        s: '',
        department_id: '',
        class_id: '',
        section_id: '',
        gender: '',
        state_id: '',
        city_id: '',
        category: '',
        religion_id: '',
        cast: '',
        blood_group: ''
      };
      this.searchData();
    },
    searchAfterDebounce: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function () {
      this.searchData();
    }, 500),
    searchData: function searchData(page) {
      var _this7 = this;

      if (typeof page === 'undefined') {
        page = 1;
      }

      var searchQuery = new URLSearchParams(this.search).toString();
      this.loaded = 0;
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }
      });
      instance.get('search-student/?page=' + page + '&' + searchQuery).then(function (res) {
        _this7.loaded = 1;
        _this7.lists = res.data.data;

        if (!res.data.status) {
          _this7.errors = 1;
        }
      })["catch"](function (err) {
        _this7.loaded = 1;
        console.log(err);
      });
    },
    getRecords: function getRecords(page) {
      var _this8 = this;

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
      instance.get('view-student/?page=' + page).then(function (res) {
        if (res.data.status) {
          _this8.lists = res.data.data;
        } else {
          _this8.errors = 1;
        }

        _this8.loaded = 1;
      })["catch"](function (err) {
        _this8.loaded = 1;
        console.log(err);
      });
    },
    deleteRecord: function deleteRecord() {
      var _this9 = this;

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
            _this9.loaded = 0;
            var instance = axios.create({
              baseURL: _this9.apiBaseUrl,
              headers: {
                'Authorization': 'Bearer ' + _this9.token,
                'Accept': 'application/json'
              }
            });
            instance.post('remove-student', params).then(function (res) {
              if (res.status) {
                _this9.getRecords();

                _this9.$toast.success('Selected record(s) has been deleted.');
              } else {
                _this9.loaded = 1;

                _this9.$toast.warning('Record(s) unable to delete.');
              }
            })["catch"](function (err) {
              _this9.loaded = 1;
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
    "search.s": function searchS() {
      this.searchAfterDebounce();
    },
    "search.cast": function searchCast() {
      this.searchAfterDebounce();
    },
    "search.department_id": function searchDepartment_id(dept_id) {
      this.getClasses(dept_id);
      this.searchData();
    },
    "search.class_id": function searchClass_id(class_id) {
      this.getSections(class_id);
      this.searchData();
    },
    "search.section_id": function searchSection_id() {
      this.searchData();
    },
    "search.gender": function searchGender() {
      this.searchData();
    },
    "search.state_id": function searchState_id(state_id) {
      this.getCities(state_id);
      this.searchData();
    },
    "search.city_id": function searchCity_id() {
      this.searchData();
    },
    "search.category": function searchCategory() {
      this.searchData();
    },
    "search.religion_id": function searchReligion_id() {
      this.searchData();
    },
    "search.blood_group": function searchBlood_group() {
      this.searchData();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/view.vue?vue&type=template&id=54caf63c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/view.vue?vue&type=template&id=54caf63c& ***!
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
      _c(
        "div",
        { staticClass: "float-right" },
        [
          _c(
            "router-link",
            {
              staticClass: "fw-btn-fill btn-gradient-yellow text-white",
              attrs: { to: { name: "AddStudent" } }
            },
            [_vm._v("Add New")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v("Student")]),
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
        _c("li", [_vm._v("Student")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mg-b-20" }, [
      _c("div", { staticClass: "row gutters-8 mb-2" }, [
        _c(
          "div",
          { staticClass: "col-1-xxxl col-xl-1 col-lg-2 col-12 form-group" },
          [
            _c(
              "button",
              {
                staticClass:
                  "btn btn-block btn-dark d-flex justify-content-center align-items-center",
                staticStyle: { height: "45px", "font-size": "16px" },
                on: { click: _vm.resetSearch }
              },
              [_vm._v("All")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-3-xxxl col-xl-3 col-lg-3 col-12 form-group" },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search.s,
                  expression: "search.s"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                placeholder:
                  "Search by Name, Mobile no., Email, Pincode etc. ..."
              },
              domProps: { value: _vm.search.s },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.search, "s", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.search.department_id,
                  expression: "search.department_id",
                  modifiers: { trim: true }
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
                    _vm.search,
                    "department_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Select Department")
              ]),
              _vm._v(" "),
              _vm._l(_vm.departments, function(name, id) {
                return _c("option", { key: id, domProps: { value: id } }, [
                  _vm._v(_vm._s(name))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.search.class_id,
                  expression: "search.class_id",
                  modifiers: { trim: true }
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
                    _vm.search,
                    "class_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Select Class")]),
              _vm._v(" "),
              _vm._l(_vm.classes, function(name, id) {
                return _c("option", { key: id, domProps: { value: id } }, [
                  _vm._v(_vm._s(name))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.search.section_id,
                  expression: "search.section_id",
                  modifiers: { trim: true }
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
                    _vm.search,
                    "section_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Select Section")
              ]),
              _vm._v(" "),
              _vm._l(_vm.sections, function(name, id) {
                return _c("option", { key: id, domProps: { value: id } }, [
                  _vm._v(_vm._s(name))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.search.gender,
                  expression: "search.gender",
                  modifiers: { trim: true }
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
                    _vm.search,
                    "gender",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Select Gender")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Male" } }, [_vm._v("Male")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Female" } }, [_vm._v("Female")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Other" } }, [_vm._v("Other")])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row gutters-8" }, [
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.search.state_id,
                  expression: "search.state_id",
                  modifiers: { trim: true }
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
                    _vm.search,
                    "state_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Select State")]),
              _vm._v(" "),
              _vm._l(_vm.states, function(name, id) {
                return _c("option", { key: id, domProps: { value: id } }, [
                  _vm._v(_vm._s(name))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.search.city_id,
                  expression: "search.city_id",
                  modifiers: { trim: true }
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
                    _vm.search,
                    "city_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Select City")]),
              _vm._v(" "),
              _vm._l(_vm.cities, function(name, id) {
                return _c("option", { key: id, domProps: { value: id } }, [
                  _vm._v(_vm._s(name))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.search.category,
                  expression: "search.category",
                  modifiers: { trim: true }
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
                    _vm.search,
                    "category",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
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
              _c("option", { attrs: { value: "OBC" } }, [_vm._v("OBC")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "SBC" } }, [_vm._v("SBC")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "SC" } }, [_vm._v("SC")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "ST" } }, [_vm._v("ST")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Other" } }, [_vm._v("Other")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search.religion_id,
                  expression: "search.religion_id"
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
                    _vm.search,
                    "religion_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Select Religion")
              ]),
              _vm._v(" "),
              _vm._l(_vm.religions, function(name, id) {
                return _c("option", { key: id, domProps: { value: id } }, [
                  _vm._v(_vm._s(name))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search.cast,
                expression: "search.cast"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "By Cast" },
            domProps: { value: _vm.search.cast },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.search, "cast", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-12 form-group" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search.blood_group,
                  expression: "search.blood_group"
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
                    _vm.search,
                    "blood_group",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Select Blood Group")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "A+" } }, [_vm._v("A+")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "A-" } }, [_vm._v("A-")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "B+" } }, [_vm._v("B+")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "B-" } }, [_vm._v("B-")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "AB+" } }, [_vm._v("AB+")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "AB-" } }, [_vm._v("AB-")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "O+" } }, [_vm._v("O+")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "O-" } }, [_vm._v("O-")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Do not know" } }, [
                _vm._v("Don't know")
              ])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
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
                  _vm._m(0),
                  _vm._v(" "),
                  !_vm.lists.data
                    ? _c("div", { staticClass: "alert alert-warning" }, [
                        _c("i", { staticClass: "fa fa-exclamation-circle" }),
                        _vm._v(
                          "\n                        No record(s) found.\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.lists.data
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
                                    _c("div", { staticClass: "form-check" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.allSelected,
                                            expression: "allSelected"
                                          }
                                        ],
                                        staticClass: "form-check-input",
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: Array.isArray(
                                            _vm.allSelected
                                          )
                                            ? _vm._i(_vm.allSelected, null) > -1
                                            : _vm.allSelected
                                        },
                                        on: {
                                          click: _vm.checkAll,
                                          change: function($event) {
                                            var $$a = _vm.allSelected,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  (_vm.allSelected = $$a.concat(
                                                    [$$v]
                                                  ))
                                              } else {
                                                $$i > -1 &&
                                                  (_vm.allSelected = $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1)))
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
                                        { staticClass: "form-check-label" },
                                        [_vm._v("Sr. No.")]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Name")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Image")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Mobile No.")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Email")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("State")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("City")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Pincode")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Class")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Section")]),
                                  _vm._v(" "),
                                  _c("th")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.lists.data, function(list, i) {
                                  return _c("tr", { key: i }, [
                                    _c("td", [
                                      _c("div", { staticClass: "form-check" }, [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.check,
                                              expression: "check"
                                            }
                                          ],
                                          key: _vm.lists.from + i,
                                          staticClass: "form-check-input",
                                          attrs: { type: "checkbox" },
                                          domProps: {
                                            value: list.id,
                                            checked: Array.isArray(_vm.check)
                                              ? _vm._i(_vm.check, list.id) > -1
                                              : _vm.check
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$a = _vm.check,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = list.id,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.check = $$a.concat([
                                                      $$v
                                                    ]))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.check = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
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
                                          { staticClass: "form-check-label" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.lists.from + i) + "."
                                            )
                                          ]
                                        )
                                      ])
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
                                                name: "EditStudent",
                                                params: { id: list.id }
                                              },
                                              "data-toggle": "tooltip",
                                              title: "Edit"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-edit"
                                            }),
                                            _vm._v(" " + _vm._s(list.name))
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      list.media
                                        ? _c("div", [
                                            _c("img", {
                                              attrs: {
                                                src: list.media.thumb_image,
                                                alt: ""
                                              }
                                            })
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !list.media
                                        ? _c("div", [
                                            _vm._v(
                                              "\n                                            Not Available\n                                        "
                                            )
                                          ])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(list.mobile))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(list.email))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      list.city_data &&
                                      list.city_data.state_name
                                        ? _c("div", [
                                            _vm._v(
                                              _vm._s(
                                                list.city_data.state_name.name
                                              )
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !list.city_data ||
                                      !list.city_data.state_name
                                        ? _c("div", [_vm._v("—")])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      list.city_data
                                        ? _c("div", [
                                            _vm._v(_vm._s(list.city_data.name))
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !list.city_data
                                        ? _c("div", [_vm._v("—")])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(list.pin_code))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      list.student_data.section_name &&
                                      list.student_data.section_name.cls
                                        ? _c("div", [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  list.student_data.section_name
                                                    .cls.name
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !list.student_data.section_name ||
                                      !list.student_data.section_name.cls
                                        ? _c("div", [
                                            _vm._v(
                                              "\n                                            N/A\n                                        "
                                            )
                                          ])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      list.student_data.section_name
                                        ? _c("div", [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  list.student_data.section_name
                                                    .name
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !list.student_data.section_name
                                        ? _c("div", [
                                            _vm._v(
                                              "\n                                            N/A\n                                        "
                                            )
                                          ])
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
                                                name: "StudentDetails",
                                                params: { id: list.id }
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "icon-eye"
                                            }),
                                            _vm._v(" Details")
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                }),
                                0
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("pagination", {
                            attrs: { data: _vm.lists },
                            on: { "pagination-change-page": _vm.getRecords }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              : _vm._e()
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
        _c("h3", [_vm._v("All Student Data")])
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

/***/ "./resources/js/components/school-panel/student/view.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/school-panel/student/view.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_54caf63c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=54caf63c& */ "./resources/js/components/school-panel/student/view.vue?vue&type=template&id=54caf63c&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/student/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_54caf63c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_54caf63c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/student/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/student/view.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/view.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/student/view.vue?vue&type=template&id=54caf63c&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/view.vue?vue&type=template&id=54caf63c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_54caf63c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=54caf63c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/view.vue?vue&type=template&id=54caf63c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_54caf63c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_54caf63c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
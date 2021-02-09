(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../api/script */ "./resources/js/api/script.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      record: {
        question: '',
        suggestion: '',
        class_id: '',
        subject_id: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: 1
      },
      editor_options: {
        height: 300,
        branding: false,
        menubar: false,
        plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
        toolbar: 'undo redo | formatselect | bold italic forecolor backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | image imagetools | code fullscreen'
      },
      classes: {},
      subjects: {}
    };
  },
  validations: {
    record: {
      question: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      class_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      subject_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      option1: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      option2: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      answer: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  mounted: function mounted() {
    this.fetchClasses();

    if (this.$route.params.id) {
      this.getInfo();
    }
  },
  methods: {
    fetchClasses: function fetchClasses() {
      var _this = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["view_all_classes"])('type=all').then(function (res) {
        _this.classes = res.data;
      });
    },
    fetchAllSubjects: function fetchAllSubjects() {
      var _this2 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["fetchSubjects"])(this.record.class_id).then(function (res) {
        _this2.subjects = res.data;
      });
    },
    getInfo: function getInfo() {
      var _this3 = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["show_question"])(this.$route.params.id).then(function (res) {
        _this3.record = res.data;
      });
    },
    saveData: function saveData() {
      var _this4 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        var params = {
          record: this.record
        };
        var apiResponse = '';

        if (!this.$route.params.id) {
          apiResponse = Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["add_question"])(params);
        } else {
          apiResponse = Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["edit_question"])(this.$route.params.id, params);
        }

        apiResponse.then(function (res) {
          _this4.$router.push({
            name: 'ViewQuestion'
          }).then(function () {
            _this4.$toast.success(res.data.message);
          });
        });
      }
    }
  },
  watch: {
    "record.class_id": function recordClass_id() {
      this.fetchAllSubjects();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=template&id=5adfdf9c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=template&id=5adfdf9c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
              attrs: {
                to: {
                  name: "ViewQuestion"
                }
              }
            },
            [_vm._v("View Questions")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [
        _vm._v(_vm._s(_vm.$route.params.id ? "Edit" : "Add") + " Questions")
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
            _c("router-link", { attrs: { to: { name: "OnlineExamMaster" } } }, [
              _vm._v("Online Exam Master")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "ViewQuestion" } } }, [
              _vm._v("Questions")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [
          _vm._v(_vm._s(_vm.$route.params.id ? "Edit" : "Add") + " Questions")
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
            return _vm.saveData($event)
          }
        }
      },
      [
        _c(
          "b-card",
          { staticClass: "h-auto" },
          [
            _c(
              "b-row",
              [
                _c(
                  "b-form-group",
                  { staticClass: "col-sm-6", attrs: { label: "Select Class" } },
                  [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.$v.record.class_id.$model,
                            expression: "$v.record.class_id.$model"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.$v.record.class_id.$error
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
                              _vm.$v.record.class_id,
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
                          _vm._v("Select A Class")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.classes, function(name, id) {
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
                      _vm._v("Please select class")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    staticClass: "col-sm-6",
                    attrs: { label: "Select Subject" }
                  },
                  [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.$v.record.subject_id.$model,
                            expression: "$v.record.subject_id.$model"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.$v.record.subject_id.$error
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
                              _vm.$v.record.subject_id,
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
                          _vm._v("Select A Subject")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.subjects, function(name, id) {
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
                      _vm._v("Please select subject")
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-form-group",
              { attrs: { label: "Question" } },
              [
                _c("editor", {
                  class: {
                    "is-invalid": _vm.$v.record.question.$error
                  },
                  attrs: { init: _vm.editor_options },
                  model: {
                    value: _vm.$v.record.question.$model,
                    callback: function($$v) {
                      _vm.$set(_vm.$v.record.question, "$model", $$v)
                    },
                    expression: "$v.record.question.$model"
                  }
                }),
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
              { attrs: { label: "Suggestion" } },
              [
                _c("b-textarea", {
                  staticClass: "h-auto",
                  attrs: { rows: "5", placeholder: "Enter Suggestion" },
                  model: {
                    value: _vm.record.suggestion,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.record,
                        "suggestion",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "record.suggestion"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-row",
              [
                _c(
                  "b-form-group",
                  { staticClass: "col-sm-6" },
                  [
                    _c("label", { staticClass: "float-right" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.answer,
                            expression: "record.answer"
                          }
                        ],
                        attrs: { type: "radio", name: "answer", value: "1" },
                        domProps: { checked: _vm._q(_vm.record.answer, "1") },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.record, "answer", "1")
                          }
                        }
                      }),
                      _vm._v(
                        "\n                        Correct\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("label", [_vm._v("Option A")]),
                    _vm._v(" "),
                    _c("b-input", {
                      class: {
                        "is-invalid": _vm.$v.record.option1.$error
                      },
                      attrs: { placeholder: "Option A" },
                      model: {
                        value: _vm.$v.record.option1.$model,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.$v.record.option1,
                            "$model",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "$v.record.option1.$model"
                      }
                    }),
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
                  { staticClass: "col-sm-6" },
                  [
                    _c("label", { staticClass: "float-right" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.answer,
                            expression: "record.answer"
                          }
                        ],
                        attrs: { type: "radio", name: "answer", value: "2" },
                        domProps: { checked: _vm._q(_vm.record.answer, "2") },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.record, "answer", "2")
                          }
                        }
                      }),
                      _vm._v(
                        "\n                        Correct\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("label", [_vm._v("Option B")]),
                    _vm._v(" "),
                    _c("b-input", {
                      class: {
                        "is-invalid": _vm.$v.record.option2.$error
                      },
                      attrs: { placeholder: "Option B" },
                      model: {
                        value: _vm.$v.record.option2.$model,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.$v.record.option2,
                            "$model",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "$v.record.option2.$model"
                      }
                    }),
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
                  { staticClass: "col-sm-6" },
                  [
                    _vm.record.option3
                      ? _c("label", { staticClass: "float-right" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.record.answer,
                                expression: "record.answer"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              name: "answer",
                              value: "3"
                            },
                            domProps: {
                              checked: _vm._q(_vm.record.answer, "3")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.record, "answer", "3")
                              }
                            }
                          }),
                          _vm._v(
                            "\n                        Correct\n                    "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("label", [_vm._v("Option C")]),
                    _vm._v(" "),
                    _c("b-input", {
                      attrs: { placeholder: "Option C" },
                      model: {
                        value: _vm.record.option3,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.record,
                            "option3",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "record.option3"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  { staticClass: "col-sm-6" },
                  [
                    _vm.record.option4
                      ? _c("label", { staticClass: "float-right" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.record.answer,
                                expression: "record.answer"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              name: "answer",
                              value: "4"
                            },
                            domProps: {
                              checked: _vm._q(_vm.record.answer, "4")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.record, "answer", "4")
                              }
                            }
                          }),
                          _vm._v(
                            "\n                        Correct\n                    "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("label", [_vm._v("Option D")]),
                    _vm._v(" "),
                    _c("b-input", {
                      attrs: { placeholder: "Option D" },
                      model: {
                        value: _vm.record.option4,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.record,
                            "option4",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "record.option4"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                staticClass:
                  "fw-btn-fill btn-gradient-yellow text-white router-link-active",
                staticStyle: { "max-width": "100px" },
                attrs: { type: "submit" }
              },
              [_vm._v(_vm._s(_vm.$route.params.id ? "Update" : "Save"))]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/onlineexam/question/add.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/school-panel/onlineexam/question/add.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_5adfdf9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=5adfdf9c& */ "./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=template&id=5adfdf9c&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_5adfdf9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_5adfdf9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/onlineexam/question/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=template&id=5adfdf9c&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=template&id=5adfdf9c& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_5adfdf9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=5adfdf9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/question/add.vue?vue&type=template&id=5adfdf9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_5adfdf9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_5adfdf9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
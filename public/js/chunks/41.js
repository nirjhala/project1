(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      record: {
        title: '',
        description: ''
      },
      editor_options: {
        height: 600,
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
      title: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  mounted: function mounted() {
    if (this.$route.params.id) {
      this.getInfo();
    }
  },
  methods: {
    getInfo: function getInfo() {
      var _this = this;

      Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["show_instruction"])(this.$route.params.id).then(function (res) {
        _this.record = res.data;
      });
    },
    saveData: function saveData() {
      var _this2 = this;

      this.$v.$touch();

      if (!this.$v.$anyError) {
        var params = {
          record: this.record
        };
        var apiResponse = '';

        if (!this.$route.params.id) {
          apiResponse = Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["add_instruction"])(params);
        } else {
          apiResponse = Object(_api_script__WEBPACK_IMPORTED_MODULE_1__["edit_instruction"])(this.$route.params.id, params);
        }

        apiResponse.then(function (res) {
          _this2.$router.push({
            name: 'ViewInstruction'
          }).then(function () {
            _this2.$toast.success(res.data.message);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=template&id=55a928ac&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=template&id=55a928ac& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
                  name: "ViewInstruction"
                }
              }
            },
            [_vm._v("View Instructions")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [
        _vm._v(_vm._s(_vm.$route.params.id ? "Edit" : "Add") + " Instructions")
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
            _c("router-link", { attrs: { to: { name: "ViewInstruction" } } }, [
              _vm._v("Instructions")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            _vm._s(_vm.$route.params.id ? "Edit" : "Add") + " Instructions"
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
              "b-form-group",
              { attrs: { label: "Title" } },
              [
                _c("b-input", {
                  class: {
                    "is-invalid": _vm.$v.record.title.$error
                  },
                  attrs: { placeholder: "Enter Title" },
                  model: {
                    value: _vm.$v.record.title.$model,
                    callback: function($$v) {
                      _vm.$set(_vm.$v.record.title, "$model", $$v)
                    },
                    expression: "$v.record.title.$model"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-form-group",
              { attrs: { label: "Description" } },
              [
                _c("editor", {
                  class: {
                    "is-invalid": _vm.$v.record.description.$error
                  },
                  attrs: { init: _vm.editor_options },
                  model: {
                    value: _vm.$v.record.description.$model,
                    callback: function($$v) {
                      _vm.$set(_vm.$v.record.description, "$model", $$v)
                    },
                    expression: "$v.record.description.$model"
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

/***/ "./resources/js/components/school-panel/onlineexam/instruction/add.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/school-panel/onlineexam/instruction/add.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_55a928ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=55a928ac& */ "./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=template&id=55a928ac&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_55a928ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_55a928ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/onlineexam/instruction/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=template&id=55a928ac&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=template&id=55a928ac& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_55a928ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=55a928ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/onlineexam/instruction/add.vue?vue&type=template&id=55a928ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_55a928ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_55a928ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
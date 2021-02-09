(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/master.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/master.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      main_panel: [{
        header: 'ENQUIRY',
        link: 'SchoolAdmissionEnquiry',
        variant: 'primary',
        icon: 'icon-laptop1'
      }, {
        header: 'ADMISSION',
        link: 'AddStudent',
        variant: 'danger',
        icon: 'icon-school'
      }, {
        header: 'VIEW STUDENTS',
        link: 'ViewStudent',
        variant: 'success',
        icon: 'icon-users2'
      }, {
        header: 'ONE CLICK',
        link: 'StudentOneClick',
        variant: 'info',
        icon: 'icon-mouse'
      } // {
      //     header: 'PROFILE UPDATE',
      //     link: 'StudentProfileUpdate',
      //     variant: 'primary',
      //     icon: 'icon-pencil1'
      // },
      // {
      //     header: 'MAPPING DATA UPDATE',
      //     link: 'AddStudent',
      //     variant: 'danger',
      //     icon: 'icon-sync'
      // },
      // {
      //     header: 'PHOTO UPDATE',
      //     link: 'ViewStudent',
      //     variant: 'success',
      //     icon: 'icon-photo'
      // },
      // {
      //     header: 'SMS CONTACT UPDATE',
      //     link: 'ViewStudent',
      //     variant: 'info',
      //     icon: 'icon-phone'
      // },
      // {
      //     header: 'WEB SMS',
      //     link: 'StudentOneClick',
      //     variant: 'primary',
      //     icon: 'icon-envelope'
      // },
      // {
      //     header: 'ROLL NO GENERATE',
      //     link: 'AddStudent',
      //     variant: 'success',
      //     icon: 'icon-art_track'
      // },
      // {
      //     header: 'MEDICAL FITNESS',
      //     link: 'ViewStudent',
      //     variant: 'info',
      //     icon: 'icon-plus'
      // },
      // {
      //     header: 'GUARDIAN ID GENERATE',
      //     link: 'StudentOneClick',
      //     variant: 'primary',
      //     icon: 'icon-vcard'
      // },
      // {
      //     header: 'FATHER ID GENERATE',
      //     link: 'SchoolAdmissionEnquiry',
      //     variant: 'danger',
      //     icon: 'icon-vcard'
      // },
      // {
      //     header: 'MOTHER ID GENERATE',
      //     link: 'AddStudent',
      //     variant: 'success',
      //     icon: 'icon-vcard'
      // },
      // {
      //     header: 'STUDENT ID',
      //     link: 'StudentIdCard',
      //     variant: 'info',
      //     icon: 'icon-address-card-o'
      // },
      // {
      //     header: 'PHYSICAL FITNESS',
      //     link: 'StudentOneClick',
      //     variant: 'primary',
      //     icon: 'icon-sports_handball'
      // },
      // {
      //     header: 'PROFILE UPDATE RANDOM',
      //     link: 'SchoolAdmissionEnquiry',
      //     variant: 'danger',
      //     icon: 'icon-laptop1'
      // },
      // {
      //     header: 'STUDENT PROMOTION',
      //     link: 'StudentPromotion',
      //     variant: 'success',
      //     icon: 'icon-redo1'
      // }
      ],
      reports: [{
        header: 'STUDENT STRENTH CASTE WISE',
        link: 'StudentPromotion',
        variant: 'primary',
        icon: 'icon-redo1'
      }, {
        header: 'STUDENT STRENTH RELIGION WISE',
        link: 'StudentPromotion',
        variant: 'success',
        icon: 'icon-redo1'
      }, {
        header: 'STUDENT STRENTH CLASS SECTION WISE',
        link: 'StudentPromotion',
        variant: 'danger',
        icon: 'icon-redo1'
      }],
      help: [{
        header: 'USER HELP ENGLISH',
        link: 'StudentPromotion',
        variant: 'primary',
        icon: 'icon-live_help'
      }, {
        header: 'USER HELP HINDI',
        link: 'StudentPromotion',
        variant: 'success',
        icon: 'icon-help'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/master.vue?vue&type=template&id=0d7458df&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/student/master.vue?vue&type=template&id=0d7458df& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c(
        "b-row",
        _vm._l(_vm.main_panel, function(row, i) {
          return _c(
            "b-col",
            { key: i, attrs: { sm: "3" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "master-card",
                  attrs: {
                    "border-variant": row.variant,
                    "header-bg-variant": row.variant,
                    header: row.header,
                    "header-text-variant": "white",
                    align: "center"
                  }
                },
                [
                  _c("div", {
                    staticClass: "master-icon mt-3",
                    class: row.icon
                  }),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: { name: row.link } } })
                ],
                1
              )
            ],
            1
          )
        }),
        1
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
    return _c("div", { staticClass: "breadcrumbs-area" }, [
      _c("h3", [_vm._v("Student Master")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/student/master.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/school-panel/student/master.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _master_vue_vue_type_template_id_0d7458df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master.vue?vue&type=template&id=0d7458df& */ "./resources/js/components/school-panel/student/master.vue?vue&type=template&id=0d7458df&");
/* harmony import */ var _master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/student/master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _master_vue_vue_type_template_id_0d7458df___WEBPACK_IMPORTED_MODULE_0__["render"],
  _master_vue_vue_type_template_id_0d7458df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/student/master.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/student/master.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/master.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./master.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/student/master.vue?vue&type=template&id=0d7458df&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/student/master.vue?vue&type=template&id=0d7458df& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_template_id_0d7458df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./master.vue?vue&type=template&id=0d7458df& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/student/master.vue?vue&type=template&id=0d7458df&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_template_id_0d7458df___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_template_id_0d7458df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
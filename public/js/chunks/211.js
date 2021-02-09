(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[211],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/page.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/page.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/script */ "./resources/js/api/script.js");
//
//
//


var PageTemplate = function PageTemplate() {
  return __webpack_require__.e(/*! import() */ 154).then(__webpack_require__.bind(null, /*! ./template/page */ "./resources/js/views/pages/template/page.vue"));
};

var HomepageTemplate = function HomepageTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(54)]).then(__webpack_require__.bind(null, /*! ./homepage */ "./resources/js/views/pages/homepage.vue"));
};

var NewsTemplate = function NewsTemplate() {
  return __webpack_require__.e(/*! import() */ 57).then(__webpack_require__.bind(null, /*! ./template/news */ "./resources/js/views/pages/template/news.vue"));
};

var EventsTemplate = function EventsTemplate() {
  return __webpack_require__.e(/*! import() */ 56).then(__webpack_require__.bind(null, /*! ./template/events */ "./resources/js/views/pages/template/events.vue"));
};

var GalleryTemplate = function GalleryTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(153)]).then(__webpack_require__.bind(null, /*! ./template/imageGallery */ "./resources/js/views/pages/template/imageGallery.vue"));
};

var VideoGalleryTemplate = function VideoGalleryTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(155)]).then(__webpack_require__.bind(null, /*! ./template/videoGallery */ "./resources/js/views/pages/template/videoGallery.vue"));
};

var AdmissionTemplate = function AdmissionTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(151)]).then(__webpack_require__.bind(null, /*! ./template/admission */ "./resources/js/views/pages/template/admission.vue"));
};

var ContactTemplate = function ContactTemplate() {
  return __webpack_require__.e(/*! import() */ 152).then(__webpack_require__.bind(null, /*! ./template/contact */ "./resources/js/views/pages/template/contact.vue"));
};

var NoticeTemplate = function NoticeTemplate() {
  return __webpack_require__.e(/*! import() */ 58).then(__webpack_require__.bind(null, /*! ./template/notice */ "./resources/js/views/pages/template/notice.vue"));
};

var AdmitCardTemplate = function AdmitCardTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(55)]).then(__webpack_require__.bind(null, /*! ./template/AdmitCard */ "./resources/js/views/pages/template/AdmitCard.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PageTemplate: PageTemplate,
    HomepageTemplate: HomepageTemplate,
    NewsTemplate: NewsTemplate,
    EventsTemplate: EventsTemplate,
    GalleryTemplate: GalleryTemplate,
    VideoGalleryTemplate: VideoGalleryTemplate,
    AdmissionTemplate: AdmissionTemplate,
    ContactTemplate: ContactTemplate,
    NoticeTemplate: NoticeTemplate,
    AdmitCardTemplate: AdmitCardTemplate
  },
  data: function data() {
    return {
      page: {},
      currentPage: null
    };
  },
  methods: {
    pageInfo: function pageInfo() {
      var _this = this;

      var slug = this.$route.params.slug ? this.$route.params.slug : 'homepage';
      var apiResponse = _api_script__WEBPACK_IMPORTED_MODULE_0__["default"].fetchPageInfo(slug);
      apiResponse.then(function (res) {
        _this.page = res.data;
        _this.currentPage = res.data.template_name ? "".concat(res.data.template_name, "Template") : 'PageTemplate';

        if (slug == 'homepage') {
          _this.currentPage = 'HomepageTemplate';
        }
      });
    }
  },
  mounted: function mounted() {
    this.pageInfo();
  },
  watch: {
    "$route.params.slug": function $routeParamsSlug() {
      this.pageInfo();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/page.vue?vue&type=template&id=dc25398e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/page.vue?vue&type=template&id=dc25398e& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _vm.currentPage
    ? _c(_vm.currentPage, { tag: "component", attrs: { page: _vm.page } })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/script.js":
/*!************************************!*\
  !*** ./resources/js/api/script.js ***!
  \************************************/
/*! exports provided: default, view_news, news_info, view_all_notices, notice_info, view_events, event_info, view_gallery, addStudent, studentInfo, updateStudentData, view_all_states, view_certificate, addUserCertificate, view_all_classes, view_custom_fields, pay_student_fees, view_fee_setting, update_fee_setting, fetchDepartments, fetchClasses, fetchSections, fetchSubjects, fetchStates, fetchCities, fetchReligions, add_tc, edit_tc, view_tc, delete_tc, show_tc, multiple_delete_tc, add_sch_certificate, edit_sch_certificate, view_sch_certificate, delete_sch_certificate, show_sch_certificate, multiple_delete_sch_certificate, add_exam_type, edit_exam_type, view_exam_type, delete_exam_type, show_exam_type, multiple_delete_exam_type, view_web_exam_type, add_admit_card, edit_admit_card, view_admit_card, delete_admit_card, show_admit_card, multiple_delete_admit_card, view_admit_card_subjects, add_marksheet, view_marksheet, search_admit_card, add_pay_grade, edit_pay_grade, view_pay_grade, delete_pay_grade, show_pay_grade, multiple_delete_pay_grade, view_users, view_employee_info, add_employe_promotion, edit_employe_promotion, view_employe_promotion, delete_employe_promotion, show_employe_promotion, multiple_delete_employe_promotion, view_all_payroll_masters, view_max_salary_allowance, add_allowance, edit_allowance, view_allowance, delete_allowance, show_allowance, multiple_delete_allowance, view_max_salary_deduction, add_deduction, edit_deduction, view_deduction, delete_deduction, show_deduction, multiple_delete_deduction, add_salary_slip, edit_salary_slip, view_salary_slip, delete_salary_slip, show_salary_slip, multiple_delete_salary_slip */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Xampp\\htdocs\\school-management\\resources\\js\\api\\script.js: Identifier 'add_salary_slip' has already been declared (628:13)\n\n\u001b[0m \u001b[90m 626 | \u001b[39m\u001b[90m * @param {*} data \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 627 | \u001b[39m\u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 628 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m add_salary_slip \u001b[33m=\u001b[39m (data) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 629 | \u001b[39m    \u001b[36mreturn\u001b[39m execute(\u001b[32m'post'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m`salary-slip`\u001b[39m\u001b[33m,\u001b[39m data)\u001b[0m\n\u001b[0m \u001b[90m 630 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 631 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m edit_salary_slip \u001b[33m=\u001b[39m (id\u001b[33m,\u001b[39m data) \u001b[33m=>\u001b[39m {\u001b[0m\n    at Parser._raise (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at ScopeHandler.checkRedeclarationInScope (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:4873:12)\n    at ScopeHandler.declareName (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:4839:12)\n    at Parser.checkLVal (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:9422:22)\n    at Parser.parseVarId (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:12118:10)\n    at Parser.parseVar (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:12093:12)\n    at Parser.parseVarStatement (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:11905:10)\n    at Parser.parseStatementContent (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:11497:21)\n    at Parser.parseStatement (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:11430:17)\n    at Parser.parseExportDeclaration (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:12626:17)\n    at Parser.maybeParseExportDeclaration (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:12582:31)\n    at Parser.parseExport (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:12520:29)\n    at Parser.parseStatementContent (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:11536:27)\n    at Parser.parseStatement (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:11430:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:12012:25)\n    at Parser.parseBlockBody (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:11998:10)\n    at Parser.parseTopLevel (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:11361:10)\n    at Parser.parse (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:13044:10)\n    at parse (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\parser\\lib\\index.js:13097:38)\n    at parser (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (D:\\Xampp\\htdocs\\school-management\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (D:\\Xampp\\htdocs\\school-management\\node_modules\\gensync\\index.js:254:32)\n    at D:\\Xampp\\htdocs\\school-management\\node_modules\\gensync\\index.js:266:13\n    at async.call.result.err.err (D:\\Xampp\\htdocs\\school-management\\node_modules\\gensync\\index.js:216:11)");

/***/ }),

/***/ "./resources/js/views/pages/page.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/pages/page.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_vue_vue_type_template_id_dc25398e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.vue?vue&type=template&id=dc25398e& */ "./resources/js/views/pages/page.vue?vue&type=template&id=dc25398e&");
/* harmony import */ var _page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _page_vue_vue_type_template_id_dc25398e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _page_vue_vue_type_template_id_dc25398e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/page.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/pages/page.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/page.vue?vue&type=template&id=dc25398e&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/pages/page.vue?vue&type=template&id=dc25398e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_template_id_dc25398e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./page.vue?vue&type=template&id=dc25398e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/page.vue?vue&type=template&id=dc25398e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_template_id_dc25398e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_template_id_dc25398e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
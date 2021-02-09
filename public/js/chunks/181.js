(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[181],{

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
  return __webpack_require__.e(/*! import() */ 185).then(__webpack_require__.bind(null, /*! ./template/page */ "./resources/js/views/pages/template/page.vue"));
};

var HomepageTemplate = function HomepageTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(66)]).then(__webpack_require__.bind(null, /*! ./homepage */ "./resources/js/views/pages/homepage.vue"));
};

var NewsTemplate = function NewsTemplate() {
  return __webpack_require__.e(/*! import() */ 69).then(__webpack_require__.bind(null, /*! ./template/news */ "./resources/js/views/pages/template/news.vue"));
};

var EventsTemplate = function EventsTemplate() {
  return __webpack_require__.e(/*! import() */ 68).then(__webpack_require__.bind(null, /*! ./template/events */ "./resources/js/views/pages/template/events.vue"));
};

var GalleryTemplate = function GalleryTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(184)]).then(__webpack_require__.bind(null, /*! ./template/imageGallery */ "./resources/js/views/pages/template/imageGallery.vue"));
};

var VideoGalleryTemplate = function VideoGalleryTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(186)]).then(__webpack_require__.bind(null, /*! ./template/videoGallery */ "./resources/js/views/pages/template/videoGallery.vue"));
};

var AdmissionTemplate = function AdmissionTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(182)]).then(__webpack_require__.bind(null, /*! ./template/admission */ "./resources/js/views/pages/template/admission.vue"));
};

var ContactTemplate = function ContactTemplate() {
  return __webpack_require__.e(/*! import() */ 183).then(__webpack_require__.bind(null, /*! ./template/contact */ "./resources/js/views/pages/template/contact.vue"));
};

var NoticeTemplate = function NoticeTemplate() {
  return __webpack_require__.e(/*! import() */ 70).then(__webpack_require__.bind(null, /*! ./template/notice */ "./resources/js/views/pages/template/notice.vue"));
};

var AdmitCardTemplate = function AdmitCardTemplate() {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(67)]).then(__webpack_require__.bind(null, /*! ./template/AdmitCard */ "./resources/js/views/pages/template/AdmitCard.vue"));
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
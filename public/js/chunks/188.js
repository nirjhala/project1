(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[188],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/template/videoGallery.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/template/videoGallery.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/script */ "./resources/js/api/script.js");
/* harmony import */ var vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cool-lightbox */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.esm.js");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-cool-lightbox/dist/vue-cool-lightbox.min.css */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['page'],
  components: {
    CoolLightBox: vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      items: [{
        text: 'Home',
        to: {
          name: 'Homepage'
        }
      }, {
        text: '',
        active: true
      }],
      index: null,
      images: [],
      galleries: {}
    };
  },
  mounted: function mounted() {
    this.items[1].text = this.page.title;
    this.fetchGallery();
  },
  methods: {
    fetchGallery: function fetchGallery() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var apiResponse = Object(_api_script__WEBPACK_IMPORTED_MODULE_0__["view_gallery"])('video', page);
      apiResponse.then(function (res) {
        _this.galleries = res.data;
        _this.images = [];

        if (res.data.data && res.data.data.length) {
          res.data.data.forEach(function (g, i) {
            if (g.media && g.media.image_url && g.media.image_url.thumb && g.video_url) {
              _this.images.push({
                title: g.title,
                description: "",
                src: g.video_url,
                thumb: g.media.image_url.thumb
              });
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/template/videoGallery.vue?vue&type=template&id=0a6d5b12&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/template/videoGallery.vue?vue&type=template&id=0a6d5b12& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "inner-page" }, [
    _c(
      "section",
      { attrs: { id: "page-header" } },
      [
        _c(
          "b-container",
          [
            _c("h1", [_vm._v(_vm._s(_vm.page.title))]),
            _vm._v(" "),
            _c("b-breadcrumb", { attrs: { items: _vm.items } })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "py-5", attrs: { id: "page-content" } },
      [
        _c(
          "b-container",
          [
            _c(
              "b-row",
              { staticClass: "images-wrapper" },
              _vm._l(_vm.galleries.data, function(g, imageIndex) {
                return _c(
                  "b-col",
                  { key: imageIndex, staticClass: "mb-4", attrs: { sm: "3" } },
                  [
                    g.media && g.media.image_url && g.media.image_url.medium
                      ? _c("div", {
                          staticClass: "image",
                          staticStyle: {
                            height: "200px",
                            "background-size": "cover",
                            "background-repeat": "no-repeat"
                          },
                          style: {
                            backgroundImage:
                              "url(" + g.media.image_url.medium + ")"
                          },
                          on: {
                            click: function($event) {
                              _vm.index = imageIndex
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        "\n                " +
                          _vm._s(g.title) +
                          "\n              "
                      )
                    ])
                  ]
                )
              }),
              1
            ),
            _vm._v(" "),
            _c("CoolLightBox", {
              attrs: { items: _vm.images, index: _vm.index },
              on: {
                close: function($event) {
                  _vm.index = null
                }
              }
            })
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

/***/ "./resources/js/views/pages/template/videoGallery.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/pages/template/videoGallery.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videoGallery_vue_vue_type_template_id_0a6d5b12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoGallery.vue?vue&type=template&id=0a6d5b12& */ "./resources/js/views/pages/template/videoGallery.vue?vue&type=template&id=0a6d5b12&");
/* harmony import */ var _videoGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoGallery.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/template/videoGallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _videoGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videoGallery_vue_vue_type_template_id_0a6d5b12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videoGallery_vue_vue_type_template_id_0a6d5b12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/template/videoGallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/template/videoGallery.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/template/videoGallery.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_videoGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./videoGallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/template/videoGallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_videoGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/template/videoGallery.vue?vue&type=template&id=0a6d5b12&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/pages/template/videoGallery.vue?vue&type=template&id=0a6d5b12& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_videoGallery_vue_vue_type_template_id_0a6d5b12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./videoGallery.vue?vue&type=template&id=0a6d5b12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/template/videoGallery.vue?vue&type=template&id=0a6d5b12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_videoGallery_vue_vue_type_template_id_0a6d5b12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_videoGallery_vue_vue_type_template_id_0a6d5b12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
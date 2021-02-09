(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SidebarView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarView */ "./resources/js/components/SidebarView.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var token = localStorage.getItem('token'),
    user_info = localStorage.getItem('user_info');
user_info = JSON.parse(user_info);



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      routerKey: 0,
      images: [],
      logo_src: baseURL + 'img/logo.png',
      profile_picture: baseURL + 'img/figure/admin.jpg',
      media_image: '',
      media_image_url: '',
      media_src: baseURL + 'img/default.jpg',
      imageTarget: '',
      fieldTarget: '',
      user_info: JSON.parse(localStorage.getItem('user_info')),
      auth: localStorage.getItem('token'),
      js_load: 0,
      dropzoneOptions: {
        url: apiBaseUrl + 'add-media',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json'
        }
      }
    };
  },
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a,
    Sidebar: _SidebarView__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.getMedia();
    this.loadJs();
    var token = localStorage.getItem('token');

    if (this.user_info.picture) {
      this.profile_picture = this.user_info.picture;
    }

    if (this.user_info.school_data && this.user_info.school_data.logo) {
      this.logo_src = this.baseURL + 'img/profiles/' + this.user_info.school_data.logo;
    }

    this.auth = token;
  },
  methods: {
    logOut: function logOut() {
      var _this = this;

      var token = localStorage.getItem('token');
      localStorage.removeItem("token");
      localStorage.removeItem("user_info");
      var instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json'
        }
      });
      instance.get('logout').then(function (res) {
        _this.auth = false;

        _this.$router.push({
          name: 'login'
        });
      });
    },
    userInfo: function userInfo(info) {
      user_info = localStorage.getItem('user_info');
      this.user_info = JSON.parse(user_info);
    },
    fileUploaded: function fileUploaded(file, response) {
      $("[href='#chooseImage']").trigger('click');
      var html = "<div class=\"mr-2\">\n            <label>\n              <input type=\"radio\" name=\"media_image\" data-src=\"".concat(response.image, "\" value=\"").concat(response.id, "\" class=\"media_check\" checked>\n              <img src=\"").concat(response.image, "\" class=\"media_thumb\">\n              <span class=\"fa fa-check-circle check-icon\"></span>\n            </label>\n          </div>");
      $('.media_images').append(html);
      $('media_image div').last().find('input[type="radio"]').prop('checked', 'checked');
    },
    changeLayout: function changeLayout(id) {
      this.auth = id;
      token = localStorage.getItem('token');
      user_info = localStorage.getItem('user_info');
      user_info = JSON.parse(user_info);
      this.user_info = user_info;

      if (user_info.picture) {
        this.profile_picture = user_info.picture;
      }

      if (user_info.school_data && user_info.school_data.logo) {
        this.logo_src = this.baseURL + 'img/profiles/' + user_info.school_data.logo;
      }

      this.dropzoneOptions = {
        url: apiBaseUrl + 'add-media',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json'
        }
      };
      this.getMedia();
    },
    rerenderComponent: function rerenderComponent(id) {
      this.routerKey += 1;
    },
    okClicked: function okClicked() {
      var target = $('#imageTarget').val(),
          image = $('.media_check:checked').data('src'),
          id = $('.media_check:checked').val(),
          target_field = $('#fieldTarget').val();
      this.media_src = image;
      this.media_image = id;
      $('#mediaModal').modal('hide');
    },
    getMedia: function getMedia() {
      var _this2 = this;

      if (token != undefined && token != '') {
        var instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json'
          }
        });
        instance.get('view-media').then(function (res) {
          _this2.images = res.data;
        });
      }
    },
    loadJs: function loadJs() {
      var _this3 = this;

      this.js_load++;

      if (this.js_load == 1) {
        var src_urls = ['plugins.js', 'jquery.counterup.min.js', 'moment.min.js', 'jquery.waypoints.min.js', 'jquery.scrollUp.min.js', 'sweetalert.min.js', 'fullcalendar.min.js', 'Chart.min.js', 'validation.min.js', 'main.js'];
        var scriptTag;
        src_urls.forEach(function (row, i) {
          scriptTag = document.createElement('script');
          scriptTag.defer = "defer";
          scriptTag.src = "".concat(_this3.baseURL, "js/").concat(row);
          document.body.appendChild(scriptTag);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SidebarView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SidebarView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Sidebar',
  data: function data() {
    return {
      role: ''
    };
  },
  mounted: function mounted() {
    var user_info = localStorage.getItem('user_info');

    if (user_info) {
      user_info = JSON.parse(user_info);
      this.role = user_info.role_name.name;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/css/normalize.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/css/normalize.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/css/main.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/css/main.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/css/all.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/css/all.min.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/css/fullcalendar.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/css/fullcalendar.min.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/css/bootstrap.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/css/bootstrap.min.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/css/animate.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/css/animate.min.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/css/style.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/css/style.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/admin/css/style.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/admin/css/style.min.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../public/icomoon/style.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public/icomoon/style.min.css"), "");

// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* @import '../../../public/css/flaticon.css'; */\n.bounce-enter-active {\n  -webkit-animation: bounce-in .5s;\n          animation: bounce-in .5s;\n}\n.bounce-leave-active {\n  animation: bounce-in .5s reverse;\n}\n@-webkit-keyframes bounce-in {\n0% {\n    transform: scale(0);\n}\n50% {\n    transform: scale(1.5);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes bounce-in {\n0% {\n    transform: scale(0);\n}\n50% {\n    transform: scale(1.5);\n}\n100% {\n    transform: scale(1);\n}\n}\n.form-group .input-icon {\n    cursor: pointer;\n    position: absolute;\n    right: 25px;\n    top: 45px;\n}\n.form-control.is-invalid {\n    background-color: #f7e7e7;\n}\n.master-card {\n    position: relative;\n}\n.master-card>.card-header {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 14px;\n}\n.master-card>.card-body>a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n}\n.master-card .master-icon {\n    font-size: 48px;\n    line-height: 100%;\n}\n.notices {\n    display: block;\n    text-align: center;\n}\n.notices .toast {\n    min-height: 4em;\n    font-size: 1em;\n}\n.notices .toast .toast-icon {\n    display: block;\n    width: 27px;\n    min-width: 27px;\n    height: 27px;\n    margin-left: 1em;\n    background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45.999 45.999'%3e %3cpath fill='%23fff' d='M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 11-6 0V21a3 3 0 116 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z'/%3e %3c/svg%3e\") no-repeat;\n}\n.notices .toast.toast-success .toast-icon {\n    background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'%3e %3cpath fill='%23fff' d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329l-16 18a1.997 1.997 0 01-2.745.233l-10-8a2 2 0 012.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 012.99 2.659z'/%3e %3c/svg%3e\") no-repeat;\n}\n.toast-text {\n    padding: 1.5em 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c("div", { attrs: { id: "preloader" } }),
    _vm._v(" "),
    _c("div", { staticClass: "wrapper bg-ash", attrs: { id: "wrapper" } }, [
      _c(
        "div",
        { staticClass: "navbar navbar-expand-md header-menu-one bg-light" },
        [
          _c("div", { staticClass: "nav-bar-header-one" }, [
            _c("div", { staticClass: "header-logo" }, [
              _c(
                "a",
                {
                  staticClass: "text-white text-uppercase",
                  attrs: { href: "./" }
                },
                [
                  _c("img", {
                    staticClass: "admin_logo",
                    attrs: { src: _vm.logo_src, alt: "logo" }
                  }),
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.user_info.school_data &&
                          _vm.user_info.school_data.name
                          ? _vm.user_info.school_data.name
                          : ""
                      ) +
                      "\n                    "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "header-main-menu collapse navbar-collapse",
              attrs: { id: "mobile-navbar" }
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c("ul", { staticClass: "navbar-nav" }, [
                _vm._m(3),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c("li", { staticClass: "navbar-item dropdown header-admin" }, [
                  _c(
                    "a",
                    {
                      staticClass: "navbar-nav-link dropdown-toggle",
                      attrs: {
                        href: "#",
                        role: "button",
                        "data-toggle": "dropdown",
                        "aria-expanded": "false"
                      }
                    },
                    [
                      _c("div", { staticClass: "admin-title" }, [
                        _c("h5", { staticClass: "item-title" }, [
                          _vm._v(_vm._s(_vm.user_info.name))
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.user_info.role_name.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "admin-img" }, [
                        _c("img", {
                          staticClass: "profile_pic",
                          attrs: { src: _vm.profile_picture, alt: "Admin" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("div", { staticClass: "item-header" }, [
                        _c("h6", { staticClass: "item-title" }, [
                          _vm._v(_vm._s(_vm.user_info.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "item-content" }, [
                        _c("ul", { staticClass: "settings-list" }, [
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: { name: "edit-profile" } } },
                                [
                                  _c("i", { staticClass: "icon-user2" }),
                                  _vm._v(" My Profile")
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.user_info.role_name.name == "School"
                            ? _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: { name: "settings" } } },
                                    [
                                      _c("i", {
                                        staticClass: "icon-settings1"
                                      }),
                                      _vm._v(" General Settings")
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.user_info.role_name.name == "School"
                            ? _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: { name: "FeeSetting" } } },
                                    [
                                      _c("i", {
                                        staticClass: "icon-settings1"
                                      }),
                                      _vm._v(" Fees Settings")
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: { name: "change-password" } } },
                                [
                                  _c("i", { staticClass: "icon-lock3" }),
                                  _vm._v(" Change Password")
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript: return void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.logOut()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-power2" }),
                                _vm._v("Log Out")
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dashboard-page-one" },
        [
          _c("Sidebar"),
          _vm._v(" "),
          _c("router-view", {
            attrs: {
              auth: _vm.auth,
              image: _vm.media_image,
              image_src: _vm.media_src
            },
            on: {
              "update-image-selected": function($event) {
                _vm.media_image = $event
              },
              "update-image_src-selected": function($event) {
                _vm.media_src = $event
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal align-middle", attrs: { id: "mediaModal" } },
        [
          _c(
            "div",
            { staticClass: "modal-dialog modal-dialog-centered modal-lg" },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-body" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.imageTarget,
                        expression: "imageTarget"
                      }
                    ],
                    attrs: { type: "hidden", value: "", id: "imageTarget" },
                    domProps: { value: _vm.imageTarget },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.imageTarget = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fieldTarget,
                        expression: "fieldTarget"
                      }
                    ],
                    attrs: { type: "hidden", value: "", id: "fieldTarget" },
                    domProps: { value: _vm.fieldTarget },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.fieldTarget = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-content",
                      attrs: { id: "myTabContent" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane fade show active",
                          attrs: {
                            id: "chooseImage",
                            role: "tabpanel",
                            "aria-labelledby": "home-tab"
                          }
                        },
                        [
                          _c("div", { staticStyle: { height: "500px" } }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex flex-wrap mt-3 media_images"
                              },
                              _vm._l(_vm.images, function(img, i) {
                                return _c(
                                  "div",
                                  { key: i, staticClass: "mr-2" },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        staticClass: "media_check",
                                        attrs: {
                                          type: "radio",
                                          name: "media_image",
                                          "data-src": img.thumb_url
                                        },
                                        domProps: { value: img.id }
                                      }),
                                      _vm._v(" "),
                                      _c("img", {
                                        staticClass: "media_thumb",
                                        attrs: { src: img.thumb_url }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass:
                                          "fa fa-check-circle check-icon"
                                      })
                                    ])
                                  ]
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-3" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-fill-lg btn-gradient-yellow btn-hover-bluedark",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.okClicked()
                                  }
                                }
                              },
                              [_vm._v("Okay")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: {
                            id: "uploadImage",
                            role: "tabpanel",
                            "aria-labelledby": "profile-tab"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticStyle: { height: "500px" } },
                            [
                              _c("vue-dropzone", {
                                ref: "mediaDropzone",
                                attrs: {
                                  id: "media-dropzone",
                                  options: _vm.dropzoneOptions
                                },
                                on: { "vdropzone-success": _vm.fileUploaded }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toggle-button sidebar-toggle" }, [
      _c("button", { staticClass: "item-link", attrs: { type: "button" } }, [
        _c("span", { staticClass: "btn-icon-wrap" }, [
          _c("span"),
          _vm._v(" "),
          _c("span"),
          _vm._v(" "),
          _c("span")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-md-none mobile-nav-bar" }, [
      _c(
        "button",
        {
          staticClass: "navbar-toggler pulse-animation",
          attrs: {
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#mobile-navbar",
            "aria-expanded": "false"
          }
        },
        [_c("i", { staticClass: "far fa-arrow-alt-circle-down" })]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "navbar-toggler sidebar-toggle-mobile",
          attrs: { type: "button" }
        },
        [_c("i", { staticClass: "fas fa-bars" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "navbar-nav" }, [
      _c("li", { staticClass: "navbar-item header-search-bar" }, [
        _c("div", { staticClass: "input-group stylish-input-group" }, [
          _c("span", { staticClass: "input-group-addon" }, [
            _c("button", { attrs: { type: "submit" } }, [
              _c("span", {
                staticClass: "flaticon-search",
                attrs: { "aria-hidden": "true" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "Find Something..." }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "navbar-item dropdown header-message" }, [
      _c(
        "a",
        {
          staticClass: "navbar-nav-link dropdown-toggle",
          attrs: {
            href: "#",
            role: "button",
            "data-toggle": "dropdown",
            "aria-expanded": "false"
          }
        },
        [
          _c("i", { staticClass: "far fa-envelope" }),
          _vm._v(" "),
          _c("div", { staticClass: "item-title d-md-none text-16 mg-l-10" }, [
            _vm._v("Message")
          ]),
          _vm._v(" "),
          _c("span", [_vm._v("5")])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
        _c("div", { staticClass: "item-header" }, [
          _c("h6", { staticClass: "item-title" }, [_vm._v("05 Message")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item-content" }, [
          _c("div", { staticClass: "media" }, [
            _c("div", { staticClass: "item-img bg-skyblue author-online" }, [
              _c("img", {
                attrs: { src: "img/figure/student11.png", alt: "img" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media-body space-sm" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("span", { staticClass: "item-name" }, [
                    _vm._v("Maria Zaman")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "item-time" }, [_vm._v("18:30")])
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "What is the reason of buy this item.\n                                            Is it usefull for me....."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media" }, [
            _c("div", { staticClass: "item-img bg-yellow author-online" }, [
              _c("img", {
                attrs: { src: "img/figure/student12.png", alt: "img" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media-body space-sm" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("span", { staticClass: "item-name" }, [
                    _vm._v("Benny Roy")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "item-time" }, [_vm._v("10:35")])
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "What is the reason of buy this item.\n                                            Is it usefull for me....."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media" }, [
            _c("div", { staticClass: "item-img bg-pink" }, [
              _c("img", {
                attrs: { src: "img/figure/student13.png", alt: "img" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media-body space-sm" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("span", { staticClass: "item-name" }, [_vm._v("Steven")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "item-time" }, [_vm._v("02:35")])
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "What is the reason of buy this item.\n                                            Is it usefull for me....."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media" }, [
            _c("div", { staticClass: "item-img bg-violet-blue" }, [
              _c("img", {
                attrs: { src: "img/figure/student11.png", alt: "img" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media-body space-sm" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("span", { staticClass: "item-name" }, [
                    _vm._v("Joshep Joe")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "item-time" }, [_vm._v("12:35")])
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "What is the reason of buy this item.\n                                            Is it usefull for me....."
                )
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "navbar-item dropdown header-notification" },
      [
        _c(
          "a",
          {
            staticClass: "navbar-nav-link dropdown-toggle",
            attrs: {
              href: "#",
              role: "button",
              "data-toggle": "dropdown",
              "aria-expanded": "false"
            }
          },
          [
            _c("i", { staticClass: "far fa-bell" }),
            _vm._v(" "),
            _c("div", { staticClass: "item-title d-md-none text-16 mg-l-10" }, [
              _vm._v("Notification")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("8")])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
          _c("div", { staticClass: "item-header" }, [
            _c("h6", { staticClass: "item-title" }, [
              _vm._v("03 Notifiacations")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item-content" }, [
            _c("div", { staticClass: "media" }, [
              _c("div", { staticClass: "item-icon bg-skyblue" }, [
                _c("i", { staticClass: "fas fa-check" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "media-body space-sm" }, [
                _c("div", { staticClass: "post-title" }, [
                  _vm._v("Complete Today Task")
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("1 Mins ago")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media" }, [
              _c("div", { staticClass: "item-icon bg-orange" }, [
                _c("i", { staticClass: "fas fa-calendar-alt" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "media-body space-sm" }, [
                _c("div", { staticClass: "post-title" }, [
                  _vm._v("Director Metting")
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("20 Mins ago")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media" }, [
              _c("div", { staticClass: "item-icon bg-violet-blue" }, [
                _c("i", { staticClass: "fas fa-cogs" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "media-body space-sm" }, [
                _c("div", { staticClass: "post-title" }, [
                  _vm._v("Update Password")
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("45 Mins ago")])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { id: "myTab", role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "profile-tab",
                "data-toggle": "tab",
                href: "#chooseImage",
                role: "tab",
                "aria-controls": "profile",
                "aria-selected": "false"
              }
            },
            [_vm._v("Choose Image")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "home-tab",
                "data-toggle": "tab",
                href: "#uploadImage",
                role: "tab",
                "aria-controls": "home",
                "aria-selected": "true"
              }
            },
            [_vm._v("Upload Image")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SidebarView.vue?vue&type=template&id=0163ae86&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SidebarView.vue?vue&type=template&id=0163ae86& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-menu-content" }, [
        _c("ul", { staticClass: "nav nav-sidebar-menu sidebar-toggle-view" }, [
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: { to: { name: "dashboard" } }
                },
                [
                  _c("i", { staticClass: "icon-dashboard" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Dashboard")])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.role == "Student"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "student-timetable" } }
                    },
                    [
                      _c("i", { staticClass: "icon-calendar" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Time Table")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "Student"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "student_attendence" } }
                    },
                    [
                      _c("i", { staticClass: "icon-user-check1" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Attendence")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "Student"
            ? _c("li", { staticClass: "nav-item sidebar-nav-item" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("ul", { staticClass: "nav sub-group-menu" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "add-complain" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Raise Complain")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "view-complain" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Your Complains")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "Teacher"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "teacher-timetable" } }
                    },
                    [
                      _c("i", { staticClass: "icon-calendar" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Time Table")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "Teacher"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "teacher_attendence" } }
                    },
                    [
                      _c("i", { staticClass: "icon-user-check1" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Attendence")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "Parents"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "parent-children" } }
                    },
                    [
                      _c("i", { staticClass: "icon-users" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Children")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "Parents"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "parent-complain-box" } }
                    },
                    [
                      _c("i", { staticClass: "icon-question_answer" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Complain Box")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "Driver"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "driver-routes" } }
                    },
                    [
                      _c("i", { staticClass: "icon-map" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Routes")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "master" } }
                    },
                    [
                      _c("i", { staticClass: "icon-apps" }),
                      _c("span", [_vm._v("Master")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "SchoolMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-university" }),
                      _c("span", [_vm._v("School")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "UserMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-users2" }),
                      _c("span", [_vm._v("Users")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "StudentMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-graduation-cap" }),
                      _c("span", [_vm._v("Students")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "AssignmentMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-file_present" }),
                      _c("span", [_vm._v("Assignment")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "FeeMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-rupee" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Fees Management")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "CertificateMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-certificate" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Certificates")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "ExamMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-forum" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Examination")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "OnlineClassMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-laptop" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Online Class")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "PayrollMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-money1" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Payroll System")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "InventoryMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-show_chart" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Inventory")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "OnlineExamMaster" } }
                    },
                    [
                      _c("i", { staticClass: "icon-mouse" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Online Exam")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c("li", { staticClass: "nav-item sidebar-nav-item" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("ul", { staticClass: "nav sub-group-menu" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "week-day" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Week Day")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "create-time-table" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Create Time Table")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "student-time-table" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Student Time Table")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "teacher-time-table" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Teacher Time Table")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c("li", { staticClass: "nav-item sidebar-nav-item" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("ul", { staticClass: "nav sub-group-menu" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "student-id-card" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Student")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "teacher-id-card" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Teacher")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "staff-id-card" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Staff")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c("li", { staticClass: "nav-item sidebar-nav-item" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("ul", { staticClass: "nav sub-group-menu" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "student-attendence" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Student Attendence")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "teacher-attendence" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Teacher Attendence")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "staff-attendence" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Staff Attendence")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "class-teacher-allocation" } }
                    },
                    [
                      _c("i", { staticClass: "icon-clipboard" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Class Teacher Allocation")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c("li", { staticClass: "nav-item sidebar-nav-item" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("ul", { staticClass: "nav sub-group-menu" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "library-pass" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Library Pass")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "book-category" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Book Category")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "book" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" All Book")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "add-book" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Add New Book")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "lms-setting" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Setting")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "issue-book" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Book Issue")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "issue-history" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-angle-right" }),
                          _vm._v(" Book Issue History")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "view-complain" } }
                    },
                    [
                      _c("i", { staticClass: "icon-question_answer" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Complains / Sugeestion")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: { to: { name: "edit-profile", params: {} } }
                },
                [
                  _c("i", { staticClass: "icon-pencil" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Edit Profile")])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.role == "School"
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "settings", params: {} } }
                    },
                    [
                      _c("i", { staticClass: "icon-settings1" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Settings")])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: { to: { name: "change-password", params: {} } }
                },
                [
                  _c("i", { staticClass: "icon-lock3" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Change Password")])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { href: "javascript: return void(0)" },
                on: {
                  click: function($event) {
                    return _vm.logOut()
                  }
                }
              },
              [
                _c("i", { staticClass: "icon-power2" }),
                _vm._v(" "),
                _c("span", [_vm._v("Log Out")])
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mobile-sidebar-header d-md-none" }, [
      _c("div", { staticClass: "header-logo" }, [
        _c("a", { attrs: { href: "" } }, [
          _c("img", { attrs: { src: "img/logo1.png", alt: "logo" } })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
      _c("i", { staticClass: "icon-question_answer" }),
      _c("span", [_vm._v("Complain Box")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
      _c("i", { staticClass: "icon-calendar2" }),
      _c("span", [_vm._v("Time Table")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
      _c("i", { staticClass: "icon-id-badge" }),
      _c("span", [_vm._v("ID-Card")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
      _c("i", { staticClass: "icon-user-check1" }),
      _c("span", [_vm._v("Attendence")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
      _c("i", { staticClass: "icon-books" }),
      _c("span", [_vm._v("LMS")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Layout.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Layout.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=e245f756& */ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=e245f756& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SidebarView.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/SidebarView.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarView_vue_vue_type_template_id_0163ae86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarView.vue?vue&type=template&id=0163ae86& */ "./resources/js/components/SidebarView.vue?vue&type=template&id=0163ae86&");
/* harmony import */ var _SidebarView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarView.vue?vue&type=script&lang=js& */ "./resources/js/components/SidebarView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarView_vue_vue_type_template_id_0163ae86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarView_vue_vue_type_template_id_0163ae86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SidebarView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SidebarView.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/SidebarView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SidebarView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SidebarView.vue?vue&type=template&id=0163ae86&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/SidebarView.vue?vue&type=template&id=0163ae86& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarView_vue_vue_type_template_id_0163ae86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarView.vue?vue&type=template&id=0163ae86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SidebarView.vue?vue&type=template&id=0163ae86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarView_vue_vue_type_template_id_0163ae86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarView_vue_vue_type_template_id_0163ae86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
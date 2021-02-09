(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/master.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/master.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      folders: [{
        header: 'ITEMS',
        link: 'ViewItem',
        variant: 'primary',
        icon: 'icon-box'
      }, {
        header: 'SUPPLIER',
        link: 'ViewSupplier',
        variant: 'danger',
        icon: 'icon-users2'
      }, {
        header: 'PURCHASE',
        link: 'ViewPurchase',
        variant: 'success',
        icon: 'icon-shopping-bag1'
      }, {
        header: 'SALE',
        link: 'ViewSale',
        variant: 'info',
        icon: 'icon-shopping-cart1'
      }, {
        header: 'DEBIT NOTE',
        link: 'ViewDebitNote',
        variant: 'primary',
        icon: 'icon-minus-square1'
      }, {
        header: 'CREDIT NOTE',
        link: 'ViewCreditNote',
        variant: 'danger',
        icon: 'icon-plus-square1'
      }, {
        header: 'RECEIPT',
        link: 'ViewReceipt',
        variant: 'success',
        icon: 'icon-print'
      }, {
        header: 'PAYMENT',
        link: 'ViewPayment',
        variant: 'info',
        icon: 'icon-credit-card'
      } // {
      //     header: 'DUMP ITEMS',
      //     link: 'ViewDumpItems',
      //     variant: 'primary',
      //     icon: 'icon-bin2'
      // },
      // {
      //     header: 'BARCODE',
      //     link: 'ViewBarcode',
      //     variant: 'danger',
      //     icon: 'icon-barcode'
      // }
      ],
      reports: [{
        header: 'STOCK',
        link: 'StockReport',
        variant: 'primary',
        icon: 'icon-equalizer1'
      }, {
        header: 'DAY BOOK',
        link: 'DayBook',
        variant: 'danger',
        icon: 'icon-calendar_today'
      }, {
        header: 'BANK ENTRY',
        link: 'BankBook',
        variant: 'success',
        icon: 'icon-bank'
      }, {
        header: 'CASH BOOK',
        link: 'CashBook',
        variant: 'info',
        icon: 'icon-rupee'
      }, // {
      //     header: 'CUSTOM RANGE',
      //     link: 'CustomReport',
      //     variant: 'primary',
      //     icon: 'icon-date_range'
      // },
      {
        header: 'LEDGER',
        link: 'Ledger',
        variant: 'danger',
        icon: 'icon-book1'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/master.vue?vue&type=template&id=713a5a44&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/school-panel/inventory/master.vue?vue&type=template&id=713a5a44& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        _vm._l(_vm.folders, function(row, i) {
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
                  _c("router-link", {
                    attrs: {
                      to: { name: row.link, params: { type: row.type } }
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v("Reports")]),
      _vm._v(" "),
      _c(
        "b-row",
        _vm._l(_vm.reports, function(row, i) {
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
                  _c("router-link", {
                    attrs: {
                      to: { name: row.link, params: { type: row.type } }
                    }
                  })
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
      _c("h3", [_vm._v("Inventory Master")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/school-panel/inventory/master.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/master.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _master_vue_vue_type_template_id_713a5a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master.vue?vue&type=template&id=713a5a44& */ "./resources/js/components/school-panel/inventory/master.vue?vue&type=template&id=713a5a44&");
/* harmony import */ var _master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master.vue?vue&type=script&lang=js& */ "./resources/js/components/school-panel/inventory/master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _master_vue_vue_type_template_id_713a5a44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _master_vue_vue_type_template_id_713a5a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/school-panel/inventory/master.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/master.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/master.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./master.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/school-panel/inventory/master.vue?vue&type=template&id=713a5a44&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/school-panel/inventory/master.vue?vue&type=template&id=713a5a44& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_template_id_713a5a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./master.vue?vue&type=template&id=713a5a44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/school-panel/inventory/master.vue?vue&type=template&id=713a5a44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_template_id_713a5a44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_master_vue_vue_type_template_id_713a5a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
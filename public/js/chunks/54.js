(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{557:function(t,e,a){"use strict";a.r(e);var s=a(2),r=a(1);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n={data:function(){return{country_id:"",state_id:"",purchase:{session_id:"",supplier_id:"",total_amount:0,paid_amount:0,invoice_no:"",payment_mode:"Cash",txn_number:""},items:{},carts:{},suppliers:{},sessions:{},loading:!1}},validations:{purchase:{session_id:{required:s.required},supplier_id:{required:s.required},invoice_no:{required:s.required},payment_mode:{required:s.required}}},computed:{totalCartAmount:function(){var t=0;for(var e in this.carts)t+=parseFloat(this.carts[e].price*this.carts[e].qty);return this.purchase.total_amount=Math.round(100*t)/100,Math.round(100*t)/100}},mounted:function(){this.fetchItems(),this.fetchSuppliers(),this.fetchSessions(),this.$route.params.id&&this.getInfo()},methods:{addToCart:function(t,e){Vue.set(this.carts,t,{}),this.carts[t]={qty:1,price:e.purchase_price,name:e.name,discount_amt:0,discount_per:0}},updateCart:function(t,e){for(var a in e)this.carts["".concat(t)][a]=e[a]},increamentCart:function(t){var e={};e.qty=parseInt(this.carts[t].qty)+1,this.updateCart(t,e)},decreamentCart:function(t){if(this.carts[t].qty>1){var e={};e.qty=parseInt(this.carts[t].qty)-1,this.updateCart(t,e)}else Vue.delete(this.carts,t)},fetchItems:function(){var t=this;Object(r.uc)("limit=100").then((function(e){t.items=e.data}))},fetchSuppliers:function(){var t=this;Object(r.Kc)("type=all").then((function(e){t.suppliers=e.data}))},fetchSessions:function(){var t=this;r.D.getAllSessions("type=all").then((function(e){t.sessions=e.data,console.log("key array",Object.keys(e.data),i(e.data)),setTimeout((function(){"object"===i(e.data)&&(t.purchase.session_id=parseInt(Object.keys(e.data)[0]))}),10)}))},getInfo:function(){var t=this;show_supplier(this.$route.params.id).then((function(e){t.item=e.data}))},saveData:function(){var t=this;if(this.$v.$touch(),!this.$v.$anyError){this.loading=!0;var e={purchase:this.purchase,purchase_items:this.carts};(this.$route.params.id?Object(r.R)(this.$route.params.id,e):Object(r.p)(e)).then((function(e){t.loading=!1,t.$router.push({name:"ViewPurchase"}).then((function(){t.$toast.success(e.data.message)}))})).catch((function(e){t.loading=!1}))}}}},o=a(0),u=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewPurchase"}}},[t._v("View Purchases")])],1),t._v(" "),a("h3",[t._v(t._s(t.$route.params.id?"Edit":"Add")+" Purchases")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"InventoryMaster"}}},[t._v("Inventory Master")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"ViewPurchase"}}},[t._v("Purchases")])],1),t._v(" "),a("li",[t._v(t._s(t.$route.params.id?"Edit":"Add")+" Purchases")])])]),t._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.saveData(e)}}},[a("b-row",[a("b-col",{attrs:{sm:"8"}},[t.items.data&&t.items.data.length?a("b-row",t._l(t.items.data,(function(e,s){return a("b-col",{key:s,attrs:{xs:"3"}},[a("b-card",{scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"float-right"},[t.carts[e.id]?t._e():a("b-button",{attrs:{type:"button",variant:"dark"},on:{click:function(a){return t.addToCart(e.id,e)}}},[t._v("Add")]),t._v(" "),t.carts[e.id]?a("div",{staticClass:"d-flex cart-input"},[a("button",{attrs:{type:"button"},on:{click:function(a){return t.decreamentCart(e.id)}}},[a("i",{staticClass:"icon-minus-circle1"})]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.carts[e.id].qty,expression:"carts[item.id].qty"}],attrs:{type:"text"},domProps:{value:t.carts[e.id].qty},on:{input:function(a){a.target.composing||t.$set(t.carts[e.id],"qty",a.target.value)}}}),t._v(" "),a("button",{attrs:{type:"button"},on:{click:function(a){return t.increamentCart(e.id)}}},[a("i",{staticClass:"icon-plus-circle1"})])]):t._e()],1),t._v(" "),a("div",[t._v(t._s(e.name))])]},proxy:!0}],null,!0)},[t._v(" "),a("div",[t._v(t._s(e.description))]),t._v(" "),a("div",[t._v("\n                                ₹ "+t._s(e.purchase_price)+"\n                            ")])])],1)})),1):t._e()],1),t._v(" "),a("b-col",{attrs:{sm:"4"}},[a("b-card",{staticClass:"h-auto"},[a("b-form-group",{attrs:{label:"Select Session"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.$v.purchase.session_id.$model,expression:"$v.purchase.session_id.$model"}],staticClass:"form-control",class:{"is-invalid":t.$v.purchase.session_id.$error},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$v.purchase.session_id,"$model",e.target.multiple?a:a[0])}}},t._l(t.sessions,(function(e,s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(e))])})),0),t._v(" "),a("b-form-invalid-feedback",[t._v("Please select session")])],1),t._v(" "),a("b-form-group",{attrs:{label:"Select Supplier"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.$v.purchase.supplier_id.$model,expression:"$v.purchase.supplier_id.$model"}],staticClass:"form-control",class:{"is-invalid":t.$v.purchase.supplier_id.$error},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$v.purchase.supplier_id,"$model",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Supplier")]),t._v(" "),t._l(t.suppliers,(function(e,s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(e))])}))],2),t._v(" "),a("b-form-invalid-feedback",[t._v("Please select supplier")])],1),t._v(" "),a("b-form-group",{attrs:{label:"Purchase Invoice No."}},[a("b-input",{class:{"is-invalid":t.$v.purchase.invoice_no.$error},attrs:{placeholder:"Enter Invoice No."},model:{value:t.$v.purchase.invoice_no.$model,callback:function(e){t.$set(t.$v.purchase.invoice_no,"$model","string"==typeof e?e.trim():e)},expression:"$v.purchase.invoice_no.$model"}}),t._v(" "),a("b-form-invalid-feedback",[t._v("Please enter required field.")])],1),t._v(" "),t.totalCartAmount?a("div",[a("b-form-group",[t._l(t.carts,(function(e,s){return a("div",{key:s,staticClass:"row"},[a("div",{staticClass:"col"},[t._v("\n                                    "+t._s(e.name)+"\n                                ")]),t._v(" "),a("div",{staticClass:"col"},[t._v("\n                                    ₹"+t._s(e.price)+" x "+t._s(e.qty)+"\n                                ")]),t._v(" "),a("div",{staticClass:"col text-right"},[t._v("\n                                    ₹"+t._s(e.price*e.qty)+"\n                                ")])])})),t._v(" "),a("hr"),t._v(" "),t.totalCartAmount?a("div",{staticClass:"row font-weight-bold"},[a("div",{staticClass:"col-8"},[t._v("TOTAL")]),t._v(" "),a("div",{staticClass:"col-4 text-right"},[t._v("₹"+t._s(t.totalCartAmount))])]):t._e()],2),t._v(" "),a("b-form-group",{attrs:{label:"Payment Mode"}},[a("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.purchase.payment_mode.$model,expression:"$v.purchase.payment_mode.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.purchase.payment_mode.$error},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$v.purchase.payment_mode,"$model",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Cash"}},[t._v("Cash")]),t._v(" "),a("option",{attrs:{value:"Card"}},[t._v("Card")]),t._v(" "),a("option",{attrs:{value:"PayTM"}},[t._v("PayTM")]),t._v(" "),a("option",{attrs:{value:"Cheque"}},[t._v("Cheque")]),t._v(" "),a("option",{attrs:{value:"UPI"}},[t._v("UPI")]),t._v(" "),a("option",{attrs:{value:"Demand Draft"}},[t._v("Demand Draft - DD")]),t._v(" "),a("option",{attrs:{value:"Bank Transfer"}},[t._v("Bank Transfer like NEFT, EFT, etc.")]),t._v(" "),a("option",{attrs:{value:"Other"}},[t._v("Other payment options.")])])]),t._v(" "),"Cash"!=t.purchase.payment_mode?a("b-form-group",{attrs:{label:"Cheque"==t.purchase.payment_mode?"Cheque No.":"Txn. Number"}},[a("b-input",{attrs:{placeholder:"Cheque"==t.purchase.payment_mode?"Cheque No.":"Txn. Number"},model:{value:t.purchase.txn_number,callback:function(e){t.$set(t.purchase,"txn_number","string"==typeof e?e.trim():e)},expression:"purchase.txn_number"}})],1):t._e(),t._v(" "),a("b-form-group",{attrs:{label:"Paid Amount"}},[a("b-input",{attrs:{type:"number",placeholder:"Enter Paid Amount"},model:{value:t.purchase.paid_amount,callback:function(e){t.$set(t.purchase,"paid_amount","string"==typeof e?e.trim():e)},expression:"purchase.paid_amount"}})],1),t._v(" "),t.loading?a("div",[a("b-spinner"),t._v(" In process, please wait...")],1):t._e(),t._v(" "),!t.loading&&t.totalCartAmount&&t.purchase.supplier_id?a("b-button",{staticClass:"fw-btn-fill btn-gradient-yellow text-white router-link-active",attrs:{type:"submit"}},[t._v(t._s(t.$route.params.id?"Update":"Save"))]):t._e()],1):t._e()],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=u.exports}}]);
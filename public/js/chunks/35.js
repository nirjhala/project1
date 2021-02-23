(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{14:function(t,e,a){"use strict";var o={props:{options:Object,placeholder:{default:"Select Option"},customClass:[String,Object]},data:function(){return{valueSelected:"",search_value:"",current:0,open:!1}},computed:{matches:function(){var t,e={};for(t in this.options)this.search_value&&!this.options[t].toLowerCase().includes(this.search_value.toLowerCase())||(e[t]=this.options[t]);return e},openSuggestion:function(){return!0===this.open}},methods:{optionSelected:function(t){this.current=Object.keys(this.matches).indexOf(t),this.updateSelectValue()},updateSelectValue:function(){var t=Object.keys(this.matches)[this.current];this.search_value=this.matches[t],this.valueSelected=t,this.current=0,this.$emit("input",t)},toggleDropdown:function(){this.open=!this.open},enter:function(){this.updateSelectValue(),this.open=!1},up:function(){this.current>0&&this.open?this.current--:this.current=Object.keys(this.matches).length-1},down:function(){this.current<Object.keys(this.matches).length-1&&this.open?this.current++:this.current=0},isActive:function(t){return t===Object.keys(this.matches)[this.current]}}},n=(a(253),a(0)),s=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.options?a("div",{staticClass:"custom-select-wrapper",on:{click:t.toggleDropdown}},[a("div",{staticClass:"custom-select",class:{open:t.openSuggestion}},[a("div",{staticClass:"custom-select__trigger"},[a("span",{staticClass:"arrow"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSelected,expression:"valueSelected"}],attrs:{type:"hidden"},domProps:{value:t.valueSelected},on:{input:function(e){e.target.composing||(t.valueSelected=e.target.value)}}}),t._v(" "),a("b-input",{staticClass:"search_select_input",class:t.customClass,attrs:{placeholder:t.placeholder,autocomplete:"off"},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enter(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.down(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.up(e)}]},model:{value:t.search_value,callback:function(e){t.search_value=e},expression:"search_value"}}),t._v(" "),a("b-form-invalid-feedback",[t._v("Please select required feild.")])],1),t._v(" "),t.matches?a("div",{staticClass:"custom-options"},t._l(t.matches,(function(e,o){return a("span",{key:o,staticClass:"custom-option",class:{selected:t.isActive(o)},attrs:{"data-value":o},on:{click:function(e){return t.optionSelected(o)}}},[t._v(t._s(e))])})),0):t._e(),t._v(" "),a("span",{})])]):t._e()}),[],!1,null,"732a9b00",null);e.a=s.exports},25:function(t,e,a){var o=a(254);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(7)(o,n);o.locals&&(t.exports=o.locals)},253:function(t,e,a){"use strict";var o=a(25);a.n(o).a},254:function(t,e,a){(t.exports=a(6)(!1)).push([t.i,'.custom-select-wrapper[data-v-732a9b00]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.custom-select[data-v-732a9b00]{position:relative;display:flex;flex-direction:column;border:0;height:auto;padding:0}.custom-select__trigger[data-v-732a9b00]{position:relative;align-items:center;justify-content:space-between;font-size:20px;font-weight:300;color:#3b3b3b;height:auto;line-height:100%;background:#fff;cursor:pointer;border:0}.custom-options[data-v-732a9b00]{position:absolute;display:block;top:100%;left:0;right:0;border:2px solid #394a6d;border-top:0;background:#fff;transition:all .5s;opacity:0;visibility:hidden;pointer-events:none;z-index:2}.custom-select.open .custom-options[data-v-732a9b00]{opacity:1;visibility:visible;pointer-events:all}.custom-option[data-v-732a9b00]{position:relative;display:block;padding:10px 15px;font-size:16px;font-weight:300;color:#3b3b3b;line-height:100%;cursor:pointer;transition:all .5s}.custom-option[data-v-732a9b00]:hover{cursor:pointer;background-color:#b2b2b2}.custom-option.selected[data-v-732a9b00]{color:#fff;background-color:#305c91}.arrow[data-v-732a9b00]{position:absolute;right:5px;height:15px;width:15px;top:15px}.arrow[data-v-732a9b00]:after,.arrow[data-v-732a9b00]:before{content:"";position:absolute;bottom:0;width:.15rem;height:100%;transition:all .5s}.arrow[data-v-732a9b00]:before{left:-5px;transform:rotate(-45deg);background-color:#394a6d}.arrow[data-v-732a9b00]:after{left:5px;transform:rotate(45deg);background-color:#394a6d}.open .arrow[data-v-732a9b00]:before{left:-5px;transform:rotate(45deg)}.open .arrow[data-v-732a9b00]:after{left:5px;transform:rotate(-45deg)}',""])},506:function(t,e,a){"use strict";a.r(e);var o=a(2),n=a(1),s={components:{SelectSearch:a(14).a},data:function(){return{country_id:"",state_id:"",payment:{purchase_id:"",amount:0,payment_mode:"Cash",txn_number:"",remarks:""},items:{},carts:{},customers:{},purchases:{},loading:!1}},validations:{payment:{purchase_id:{required:o.required},amount:{required:o.required},payment_mode:{required:o.required}}},mounted:function(){this.fetchPurchases(),this.$route.params.id&&this.getInfo()},methods:{fetchPurchases:function(){var t=this;Object(n.Ac)("type=all").then((function(e){t.purchases=e.data}))},changePurchaseInvoice:function(t){var e=this;this.payment.purchase_id=t,Object(n.Nb)(t).then((function(t){e.payment.amount=t.data.due_amount}))},getInfo:function(){var t=this;show_supplier(this.$route.params.id).then((function(e){t.item=e.data}))},saveData:function(){var t=this;if(this.$v.$touch(),!this.$v.$anyError){this.loading=!0;var e={payment:this.payment};(this.$route.params.id?Object(n.Q)(this.$route.params.id,e):Object(n.o)(e)).then((function(e){t.loading=!1,t.$router.push({name:"ViewPayment"}).then((function(){t.$toast.success(e.data.message)}))})).catch((function(e){console.log(e),t.loading=!1}))}}},watch:{totalGST:function(){this.payment.paid_amount=Math.floor(this.totalCartAmount+this.totalGST)}}},r=a(0),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewPayment"}}},[t._v("View Payments")])],1),t._v(" "),a("h3",[t._v(t._s(t.$route.params.id?"Edit":"Add")+" Payments")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"InventoryMaster"}}},[t._v("Inventory Master")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"ViewPayment"}}},[t._v("Payments")])],1),t._v(" "),a("li",[t._v(t._s(t.$route.params.id?"Edit":"Add")+" Payments")])])]),t._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.saveData(e)}}},[a("b-card",{staticClass:"h-auto"},[a("b-row",[a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Select Purchase Invoice"}},[a("select-search",{attrs:{options:t.purchases,placeholder:"Select Purchase Invoice",customClass:{"is-invalid":t.$v.payment.purchase_id.$error}},on:{input:t.changePurchaseInvoice}})],1),t._v(" "),a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Amount"}},[a("b-input",{class:{"is-invalid":t.$v.payment.amount.$error},attrs:{type:"number",placeholder:"Enter Amount"},model:{value:t.$v.payment.amount.$model,callback:function(e){t.$set(t.$v.payment.amount,"$model",e)},expression:"$v.payment.amount.$model"}}),t._v(" "),a("b-form-invalid-feedback",[t._v("Please enter amount.")])],1),t._v(" "),a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Payment Mode"}},[a("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.payment.payment_mode.$model,expression:"$v.payment.payment_mode.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.payment.payment_mode.$error},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$v.payment.payment_mode,"$model",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Cash"}},[t._v("Cash")]),t._v(" "),a("option",{attrs:{value:"Card"}},[t._v("Card")]),t._v(" "),a("option",{attrs:{value:"PayTM"}},[t._v("PayTM")]),t._v(" "),a("option",{attrs:{value:"Cheque"}},[t._v("Cheque")]),t._v(" "),a("option",{attrs:{value:"UPI"}},[t._v("UPI")]),t._v(" "),a("option",{attrs:{value:"Demand Draft"}},[t._v("Demand Draft - DD")]),t._v(" "),a("option",{attrs:{value:"Bank Transfer"}},[t._v("Bank Transfer like NEFT, EFT, etc.")]),t._v(" "),a("option",{attrs:{value:"Other"}},[t._v("Other payment options.")])])])],1),t._v(" "),"Cash"!=t.payment.payment_mode?a("b-form-group",{attrs:{label:"Cheque"==t.payment.payment_mode?"Cheque No.":"Txn. Number"}},[a("b-input",{attrs:{placeholder:"Cheque"==t.payment.payment_mode?"Cheque No.":"Txn. Number"},model:{value:t.payment.txn_number,callback:function(e){t.$set(t.payment,"txn_number","string"==typeof e?e.trim():e)},expression:"payment.txn_number"}})],1):t._e(),t._v(" "),a("b-form-group",{attrs:{label:"Remarks"}},[a("b-textarea",{staticClass:"h-auto",attrs:{placeholder:"Remarks (if any)",rows:"10"}})],1),t._v(" "),t.loading?a("div",[a("b-spinner"),t._v(" In process, please wait...")],1):t._e(),t._v(" "),t.loading?t._e():a("b-button",{staticClass:"fw-btn-fill btn-gradient-yellow text-white router-link-active",staticStyle:{"max-width":"100px"},attrs:{type:"submit"}},[t._v(t._s(t.$route.params.id?"Update":"Save"))])],1)],1)])}),[],!1,null,null,null);e.default=i.exports}}]);
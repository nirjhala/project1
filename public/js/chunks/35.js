(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{14:function(e,t,a){"use strict";var o={props:{options:Object,placeholder:{default:"Select Option"},customClass:[String,Object]},data:function(){return{valueSelected:"",search_value:"",current:0,open:!1}},computed:{matches:function(){var e,t={};for(e in this.options)this.search_value&&!this.options[e].toLowerCase().includes(this.search_value.toLowerCase())||(t[e]=this.options[e]);return t},openSuggestion:function(){return!0===this.open}},methods:{optionSelected:function(e){this.current=Object.keys(this.matches).indexOf(e),this.updateSelectValue()},updateSelectValue:function(){var e=Object.keys(this.matches)[this.current];this.search_value=this.matches[e],this.valueSelected=e,this.current=0,this.$emit("input",e)},toggleDropdown:function(){this.open=!this.open},enter:function(){this.updateSelectValue(),this.open=!1},up:function(){this.current>0&&this.open?this.current--:this.current=Object.keys(this.matches).length-1},down:function(){this.current<Object.keys(this.matches).length-1&&this.open?this.current++:this.current=0},isActive:function(e){return e===Object.keys(this.matches)[this.current]}}},r=(a(274),a(0)),s=Object(r.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.options?a("div",{staticClass:"custom-select-wrapper",on:{click:e.toggleDropdown}},[a("div",{staticClass:"custom-select",class:{open:e.openSuggestion}},[a("div",{staticClass:"custom-select__trigger"},[a("span",{staticClass:"arrow"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.valueSelected,expression:"valueSelected"}],attrs:{type:"hidden"},domProps:{value:e.valueSelected},on:{input:function(t){t.target.composing||(e.valueSelected=t.target.value)}}}),e._v(" "),a("b-input",{staticClass:"search_select_input",class:e.customClass,attrs:{placeholder:e.placeholder,autocomplete:"off"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.down(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.up(t)}]},model:{value:e.search_value,callback:function(t){e.search_value=t},expression:"search_value"}}),e._v(" "),a("b-form-invalid-feedback",[e._v("Please select required feild.")])],1),e._v(" "),e.matches?a("div",{staticClass:"custom-options"},e._l(e.matches,(function(t,o){return a("span",{key:o,staticClass:"custom-option",class:{selected:e.isActive(o)},attrs:{"data-value":o},on:{click:function(t){return e.optionSelected(o)}}},[e._v(e._s(t))])})),0):e._e(),e._v(" "),a("span",{})])]):e._e()}),[],!1,null,"732a9b00",null);t.a=s.exports},26:function(e,t,a){var o=a(275);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(7)(o,r);o.locals&&(e.exports=o.locals)},274:function(e,t,a){"use strict";var o=a(26);a.n(o).a},275:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,'.custom-select-wrapper[data-v-732a9b00]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.custom-select[data-v-732a9b00]{position:relative;display:flex;flex-direction:column;border:0;height:auto;padding:0}.custom-select__trigger[data-v-732a9b00]{position:relative;align-items:center;justify-content:space-between;font-size:20px;font-weight:300;color:#3b3b3b;height:auto;line-height:100%;background:#fff;cursor:pointer;border:0}.custom-options[data-v-732a9b00]{position:absolute;display:block;top:100%;left:0;right:0;border:2px solid #394a6d;border-top:0;background:#fff;transition:all .5s;opacity:0;visibility:hidden;pointer-events:none;z-index:2}.custom-select.open .custom-options[data-v-732a9b00]{opacity:1;visibility:visible;pointer-events:all}.custom-option[data-v-732a9b00]{position:relative;display:block;padding:10px 15px;font-size:16px;font-weight:300;color:#3b3b3b;line-height:100%;cursor:pointer;transition:all .5s}.custom-option[data-v-732a9b00]:hover{cursor:pointer;background-color:#b2b2b2}.custom-option.selected[data-v-732a9b00]{color:#fff;background-color:#305c91}.arrow[data-v-732a9b00]{position:absolute;right:5px;height:15px;width:15px;top:15px}.arrow[data-v-732a9b00]:after,.arrow[data-v-732a9b00]:before{content:"";position:absolute;bottom:0;width:.15rem;height:100%;transition:all .5s}.arrow[data-v-732a9b00]:before{left:-5px;transform:rotate(-45deg);background-color:#394a6d}.arrow[data-v-732a9b00]:after{left:5px;transform:rotate(45deg);background-color:#394a6d}.open .arrow[data-v-732a9b00]:before{left:-5px;transform:rotate(45deg)}.open .arrow[data-v-732a9b00]:after{left:5px;transform:rotate(-45deg)}',""])},522:function(e,t,a){"use strict";a.r(t);var o=a(2),r=a(1),s={components:{SelectSearch:a(14).a},data:function(){return{country_id:"",state_id:"",receipt:{sale_id:"",amount:0,payment_mode:"Cash",txn_number:"",remarks:""},items:{},carts:{},customers:{},sales:{},loading:!1}},validations:{receipt:{sale_id:{required:o.required},amount:{required:o.required},payment_mode:{required:o.required}}},mounted:function(){this.fetchSales(),this.$route.params.id&&this.getInfo()},methods:{fetchSales:function(){var e=this;Object(r.Ec)("type=all").then((function(t){e.sales=t.data}))},changeSaleInvoice:function(e){var t=this;this.receipt.sale_id=e,Object(r.Qb)(e).then((function(e){t.receipt.amount=e.data.due_amount}))},getInfo:function(){var e=this;show_supplier(this.$route.params.id).then((function(t){e.item=t.data}))},saveData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){this.loading=!0;var t={receipt:this.receipt};(this.$route.params.id?Object(r.T)(this.$route.params.id,t):Object(r.r)(t)).then((function(t){e.loading=!1,e.$router.push({name:"ViewReceipt"}).then((function(){e.$toast.success(t.data.message)}))})).catch((function(t){console.log(t),e.loading=!1}))}}},watch:{totalGST:function(){this.receipt.paid_amount=Math.floor(this.totalCartAmount+this.totalGST)}}},i=a(0),n=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewReceipt"}}},[e._v("View Receipts")])],1),e._v(" "),a("h3",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" Receipts")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"InventoryMaster"}}},[e._v("Inventory Master")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"ViewReceipt"}}},[e._v("Receipts")])],1),e._v(" "),a("li",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" Receipts")])])]),e._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.saveData(t)}}},[a("b-card",{staticClass:"h-auto"},[a("b-row",[a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Select Sale Invoice"}},[a("select-search",{attrs:{options:e.sales,placeholder:"Select Sale Invoice",customClass:{"is-invalid":e.$v.receipt.sale_id.$error}},on:{input:e.changeSaleInvoice}})],1),e._v(" "),a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Amount"}},[a("b-input",{class:{"is-invalid":e.$v.receipt.amount.$error},attrs:{type:"number",placeholder:"Enter Amount"},model:{value:e.$v.receipt.amount.$model,callback:function(t){e.$set(e.$v.receipt.amount,"$model",t)},expression:"$v.receipt.amount.$model"}}),e._v(" "),a("b-form-invalid-feedback",[e._v("Please enter amount.")])],1),e._v(" "),a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Payment Mode"}},[a("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.receipt.payment_mode.$model,expression:"$v.receipt.payment_mode.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.$v.receipt.payment_mode.$error},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.receipt.payment_mode,"$model",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Cash"}},[e._v("Cash")]),e._v(" "),a("option",{attrs:{value:"Card"}},[e._v("Card")]),e._v(" "),a("option",{attrs:{value:"PayTM"}},[e._v("PayTM")]),e._v(" "),a("option",{attrs:{value:"Cheque"}},[e._v("Cheque")]),e._v(" "),a("option",{attrs:{value:"UPI"}},[e._v("UPI")]),e._v(" "),a("option",{attrs:{value:"Demand Draft"}},[e._v("Demand Draft - DD")]),e._v(" "),a("option",{attrs:{value:"Bank Transfer"}},[e._v("Bank Transfer like NEFT, EFT, etc.")]),e._v(" "),a("option",{attrs:{value:"Other"}},[e._v("Other payment options.")])])])],1),e._v(" "),"Cash"!=e.receipt.payment_mode?a("b-form-group",{attrs:{label:"Cheque"==e.receipt.payment_mode?"Cheque No.":"Txn. Number"}},[a("b-input",{attrs:{placeholder:"Cheque"==e.receipt.payment_mode?"Cheque No.":"Txn. Number"},model:{value:e.receipt.txn_number,callback:function(t){e.$set(e.receipt,"txn_number","string"==typeof t?t.trim():t)},expression:"receipt.txn_number"}})],1):e._e(),e._v(" "),a("b-form-group",{attrs:{label:"Remarks"}},[a("b-textarea",{staticClass:"h-auto",attrs:{placeholder:"Remarks (if any)",rows:"10"}})],1),e._v(" "),e.loading?a("div",[a("b-spinner"),e._v(" In process, please wait...")],1):e._e(),e._v(" "),e.loading?e._e():a("b-button",{staticClass:"fw-btn-fill btn-gradient-yellow text-white router-link-active",staticStyle:{"max-width":"100px"},attrs:{type:"submit"}},[e._v(e._s(e.$route.params.id?"Update":"Save"))])],1)],1)])}),[],!1,null,null,null);t.default=n.exports}}]);
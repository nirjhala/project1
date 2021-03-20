(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{20:function(t,e,a){"use strict";var s={props:{options:Object,placeholder:{default:"Select Option"},customClass:[String,Object]},data:function(){return{valueSelected:"",search_value:"",current:0,open:!1}},computed:{matches:function(){var t,e={};for(t in this.options)this.search_value&&!this.options[t].toLowerCase().includes(this.search_value.toLowerCase())||(e[t]=this.options[t]);return e},openSuggestion:function(){return!0===this.open}},methods:{optionSelected:function(t){this.current=Object.keys(this.matches).indexOf(t),this.updateSelectValue()},updateSelectValue:function(){var t=Object.keys(this.matches)[this.current];this.search_value=this.matches[t],this.valueSelected=t,this.current=0,this.$emit("input",t)},toggleDropdown:function(){this.open=!this.open},enter:function(){this.updateSelectValue(),this.open=!1},up:function(){this.current>0&&this.open?this.current--:this.current=Object.keys(this.matches).length-1},down:function(){this.current<Object.keys(this.matches).length-1&&this.open?this.current++:this.current=0},isActive:function(t){return t===Object.keys(this.matches)[this.current]}}},o=(a(298),a(0)),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.options?a("div",{staticClass:"custom-select-wrapper",on:{click:t.toggleDropdown}},[a("div",{staticClass:"custom-select",class:{open:t.openSuggestion}},[a("div",{staticClass:"custom-select__trigger"},[a("span",{staticClass:"arrow"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSelected,expression:"valueSelected"}],attrs:{type:"hidden"},domProps:{value:t.valueSelected},on:{input:function(e){e.target.composing||(t.valueSelected=e.target.value)}}}),t._v(" "),a("b-input",{staticClass:"search_select_input",class:t.customClass,attrs:{placeholder:t.placeholder,autocomplete:"off"},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enter(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.down(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.up(e)}]},model:{value:t.search_value,callback:function(e){t.search_value=e},expression:"search_value"}}),t._v(" "),a("b-form-invalid-feedback",[t._v("Please select required feild.")])],1),t._v(" "),t.matches?a("div",{staticClass:"custom-options"},t._l(t.matches,(function(e,s){return a("span",{key:s,staticClass:"custom-option",class:{selected:t.isActive(s)},attrs:{"data-value":s},on:{click:function(e){return t.optionSelected(s)}}},[t._v(t._s(e))])})),0):t._e(),t._v(" "),a("span",{})])]):t._e()}),[],!1,null,"732a9b00",null);e.a=i.exports},298:function(t,e,a){"use strict";var s=a(41);a.n(s).a},299:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,'.custom-select-wrapper[data-v-732a9b00]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.custom-select[data-v-732a9b00]{position:relative;display:flex;flex-direction:column;border:0;height:auto;padding:0}.custom-select__trigger[data-v-732a9b00]{position:relative;align-items:center;justify-content:space-between;font-size:20px;font-weight:300;color:#3b3b3b;height:auto;line-height:100%;background:#fff;cursor:pointer;border:0}.custom-options[data-v-732a9b00]{position:absolute;display:block;top:100%;left:0;right:0;border:2px solid #394a6d;border-top:0;background:#fff;transition:all .5s;opacity:0;visibility:hidden;pointer-events:none;z-index:2}.custom-select.open .custom-options[data-v-732a9b00]{opacity:1;visibility:visible;pointer-events:all}.custom-option[data-v-732a9b00]{position:relative;display:block;padding:10px 15px;font-size:16px;font-weight:300;color:#3b3b3b;line-height:100%;cursor:pointer;transition:all .5s}.custom-option[data-v-732a9b00]:hover{cursor:pointer;background-color:#b2b2b2}.custom-option.selected[data-v-732a9b00]{color:#fff;background-color:#305c91}.arrow[data-v-732a9b00]{position:absolute;right:5px;height:15px;width:15px;top:15px}.arrow[data-v-732a9b00]:after,.arrow[data-v-732a9b00]:before{content:"";position:absolute;bottom:0;width:.15rem;height:100%;transition:all .5s}.arrow[data-v-732a9b00]:before{left:-5px;transform:rotate(-45deg);background-color:#394a6d}.arrow[data-v-732a9b00]:after{left:5px;transform:rotate(45deg);background-color:#394a6d}.open .arrow[data-v-732a9b00]:before{left:-5px;transform:rotate(45deg)}.open .arrow[data-v-732a9b00]:after{left:5px;transform:rotate(-45deg)}',""])},41:function(t,e,a){var s=a(299);"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,o);s.locals&&(t.exports=s.locals)},553:function(t,e,a){"use strict";a.r(e);var s=a(2),o=a(1);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n={components:{SelectSearch:a(20).a},data:function(){return{country_id:"",state_id:"",sale:{session_id:"",customer_id:"",total_amount:0,paid_amount:0,payment_mode:"Cash",txn_number:""},items:{},carts:{},customers:{},sessions:{},loading:!1}},validations:{sale:{session_id:{required:s.required},customer_id:{required:s.required},payment_mode:{required:s.required}}},computed:{totalCartAmount:function(){var t=0;for(var e in this.carts)t+=parseFloat(this.carts[e].price*this.carts[e].qty);return this.sale.total_amount=Math.round(100*t)/100,Math.round(100*t)/100},totalGST:function(){var t,e,a=0;for(var s in this.items.data)t=this.items.data[s],this.carts[t.id]&&(e=this.carts[t.id],a+=parseFloat(e.price*e.qty*t.gst_rate/100));return Math.round(100*a)/100}},mounted:function(){this.fetchItems(),this.fetchCustomers(),this.fetchSessions(),this.$route.params.id&&this.getInfo()},methods:{addToCart:function(t,e){e.stock>0&&(Vue.set(this.carts,t,{}),this.carts[t]={qty:1,price:e.sale_price,name:e.name,discount_amt:0,discount_per:0})},updateCart:function(t,e){for(var a in e)this.carts["".concat(t)][a]=e[a]},increamentCart:function(t,e){if(e.stock>this.carts[t].qty){var a={};a.qty=parseInt(this.carts[t].qty)+1,this.updateCart(t,a)}},decreamentCart:function(t){if(this.carts[t].qty>1){var e={};e.qty=parseInt(this.carts[t].qty)-1,this.updateCart(t,e)}else Vue.delete(this.carts,t)},fetchItems:function(){var t=this;Object(o.tc)("limit=100").then((function(e){t.items=e.data}))},fetchCustomers:function(){var t=this;Object(o.Nc)("type=all").then((function(e){t.customers=e.data}))},fetchSessions:function(){var t=this;o.D.getAllSessions("type=all").then((function(e){t.sessions=e.data,console.log("key array",Object.keys(e.data),i(e.data)),setTimeout((function(){"object"===i(e.data)&&(t.sale.session_id=parseInt(Object.keys(e.data)[0]))}),10)}))},getInfo:function(){var t=this;show_supplier(this.$route.params.id).then((function(e){t.item=e.data}))},saveData:function(){var t=this;if(this.$v.$touch(),!this.$v.$anyError){this.loading=!0;var e={sale:this.sale,sale_items:this.carts};(this.$route.params.id?Object(o.V)(this.$route.params.id,e):Object(o.t)(e)).then((function(e){t.loading=!1,t.$router.push({name:"ViewSale"}).then((function(){t.$toast.success(e.data.message)}))})).catch((function(e){console.log(e),t.loading=!1}))}}},watch:{totalGST:function(){this.sale.paid_amount=Math.floor(this.totalCartAmount+this.totalGST)}}},r=a(0),l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewSale"}}},[t._v("View Sales")])],1),t._v(" "),a("h3",[t._v(t._s(t.$route.params.id?"Edit":"Add")+" Sales")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"InventoryMaster"}}},[t._v("Inventory Master")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"ViewSale"}}},[t._v("Sales")])],1),t._v(" "),a("li",[t._v(t._s(t.$route.params.id?"Edit":"Add")+" Sales")])])]),t._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.saveData(e)}}},[a("b-row",[a("b-col",{attrs:{sm:"8"}},[t.items.data&&t.items.data.length?a("b-row",t._l(t.items.data,(function(e,s){return a("b-col",{key:s,attrs:{xs:"3"}},[a("b-card",{scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"float-right"},[t.carts[e.id]?t._e():a("b-button",{attrs:{type:"button",variant:"dark"},on:{click:function(a){return t.addToCart(e.id,e)}}},[t._v("Add")]),t._v(" "),t.carts[e.id]?a("div",{staticClass:"d-flex cart-input"},[a("button",{attrs:{type:"button"},on:{click:function(a){return t.decreamentCart(e.id)}}},[a("i",{staticClass:"icon-minus-circle1"})]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.carts[e.id].qty,expression:"carts[item.id].qty"}],attrs:{type:"text",readonly:""},domProps:{value:t.carts[e.id].qty},on:{input:function(a){a.target.composing||t.$set(t.carts[e.id],"qty",a.target.value)}}}),t._v(" "),a("button",{attrs:{type:"button"},on:{click:function(a){return t.increamentCart(e.id,e)}}},[a("i",{staticClass:"icon-plus-circle1"})])]):t._e()],1),t._v(" "),a("div",[t._v(t._s(e.name))])]},proxy:!0}],null,!0)},[t._v(" "),a("div",[t._v(t._s(e.description))]),t._v(" "),a("div",{staticClass:"float-right"},[t._v("Avaliable: "+t._s(e.stock))]),t._v(" "),a("div",[t._v("\n                                ₹ "+t._s(e.sale_price)+"\n                            ")])])],1)})),1):t._e()],1),t._v(" "),a("b-col",{attrs:{sm:"4"}},[a("b-card",{staticClass:"h-auto"},[a("b-form-group",{attrs:{label:"Select Session"}},[a("select-search",{attrs:{options:t.sessions,placeholder:"Select Session",customClass:{"is-invalid":t.$v.sale.session_id.$error}},on:{input:function(e){return t.sale.session_id=e}}})],1),t._v(" "),a("b-form-group",{attrs:{label:"Select Customer"}},[a("select-search",{attrs:{options:t.customers,placeholder:"Select Customer",customClass:{"is-invalid":t.$v.sale.customer_id.$error}},on:{input:function(e){return t.sale.customer_id=e}}})],1),t._v(" "),t.totalCartAmount?a("div",[a("b-form-group",[t._l(t.carts,(function(e,s){return a("div",{key:s,staticClass:"row"},[a("div",{staticClass:"col"},[t._v("\n                                    "+t._s(e.name)+"\n                                ")]),t._v(" "),a("div",{staticClass:"col"},[t._v("\n                                    ₹"+t._s(e.price)+" x "+t._s(e.qty)+"\n                                ")]),t._v(" "),a("div",{staticClass:"col text-right"},[t._v("\n                                    ₹"+t._s(e.price*e.qty)+"\n                                ")])])})),t._v(" "),a("hr"),t._v(" "),t.totalCartAmount?a("div",{staticClass:"row font-weight-bold"},[a("div",{staticClass:"col-8"},[t._v("TOTAL")]),t._v(" "),a("div",{staticClass:"col-4 text-right"},[t._v("₹"+t._s(t.totalCartAmount))])]):t._e(),t._v(" "),t.totalCartAmount?a("div",{staticClass:"row font-weight-bold"},[a("div",{staticClass:"col-8"},[t._v("GST")]),t._v(" "),a("div",{staticClass:"col-4 text-right"},[t._v("₹"+t._s(t.totalGST?t.totalGST:0))])]):t._e(),t._v(" "),t.totalCartAmount?a("div",{staticClass:"row font-weight-bold"},[a("div",{staticClass:"col-8"},[t._v("NET AMOUNT")]),t._v(" "),a("div",{staticClass:"col-4 text-right"},[t._v("₹"+t._s(t.totalCartAmount+t.totalGST))])]):t._e()],2),t._v(" "),a("b-form-group",{attrs:{label:"Payment Mode"}},[a("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.sale.payment_mode.$model,expression:"$v.sale.payment_mode.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.sale.payment_mode.$error},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$v.sale.payment_mode,"$model",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Cash"}},[t._v("Cash")]),t._v(" "),a("option",{attrs:{value:"Card"}},[t._v("Card")]),t._v(" "),a("option",{attrs:{value:"PayTM"}},[t._v("PayTM")]),t._v(" "),a("option",{attrs:{value:"Cheque"}},[t._v("Cheque")]),t._v(" "),a("option",{attrs:{value:"UPI"}},[t._v("UPI")]),t._v(" "),a("option",{attrs:{value:"Demand Draft"}},[t._v("Demand Draft - DD")]),t._v(" "),a("option",{attrs:{value:"Bank Transfer"}},[t._v("Bank Transfer like NEFT, EFT, etc.")]),t._v(" "),a("option",{attrs:{value:"Other"}},[t._v("Other payment options.")])])]),t._v(" "),"Cash"!=t.sale.payment_mode?a("b-form-group",{attrs:{label:"Cheque"==t.sale.payment_mode?"Cheque No.":"Txn. Number"}},[a("b-input",{attrs:{placeholder:"Cheque"==t.sale.payment_mode?"Cheque No.":"Txn. Number"},model:{value:t.sale.txn_number,callback:function(e){t.$set(t.sale,"txn_number","string"==typeof e?e.trim():e)},expression:"sale.txn_number"}})],1):t._e(),t._v(" "),a("b-form-group",{attrs:{label:"Paid Amount"}},[a("b-input",{attrs:{type:"number",placeholder:"Enter Paid Amount"},model:{value:t.sale.paid_amount,callback:function(e){t.$set(t.sale,"paid_amount","string"==typeof e?e.trim():e)},expression:"sale.paid_amount"}})],1),t._v(" "),t.loading?a("div",[a("b-spinner"),t._v(" In process, please wait...")],1):t._e(),t._v(" "),!t.loading&&t.totalCartAmount&&t.sale.customer_id?a("b-button",{staticClass:"fw-btn-fill btn-gradient-yellow text-white router-link-active",attrs:{type:"submit"}},[t._v(t._s(t.$route.params.id?"Update":"Save"))]):t._e()],1):t._e()],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=l.exports}}]);
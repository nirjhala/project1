(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{514:function(t,e,a){"use strict";a.r(e);var r=a(2),i=a(1),s={data:function(){return{item:{name:"",description:"",purchase_price:0,margin:0,sale_price:0,gst_rate:0,type:"inc"},gst_rates:[]}},validations:{item:{name:{required:r.required},purchase_price:{required:r.required},margin:{required:r.required},sale_price:{required:r.required}}},mounted:function(){this.fetchGstRates(),this.$route.params.id&&this.getInfo()},methods:{fetchGstRates:function(){var t=this;Object(i.rc)().then((function(e){t.gst_rates=e.data}))},getInfo:function(){var t=this;Object(i.Lb)(this.$route.params.id).then((function(e){t.item=e.data}))},saveData:function(){var t=this,e={item:this.item};(this.$route.params.id?Object(i.O)(this.$route.params.id,e):Object(i.k)(e)).then((function(e){t.$router.push({name:"ViewItem"}).then((function(){t.$toast.success(e.data.message)}))}))}}},n=a(0),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewItem"}}},[t._v("View Items")])],1),t._v(" "),a("h3",[t._v(t._s(t.$route.params.id?"Edit":"Add")+" Items")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"InventoryMaster"}}},[t._v("Inventory Master")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"ViewItem"}}},[t._v("Items")])],1),t._v(" "),a("li",[t._v(t._s(t.$route.params.id?"Edit":"Add")+" Items")])])]),t._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.saveData(e)}}},[a("b-card",{staticClass:"h-auto"},[a("b-form-group",{attrs:{label:"Name"}},[a("b-input",{attrs:{placeholder:"Enter Name"},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name","string"==typeof e?e.trim():e)},expression:"item.name"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"Description"}},[a("b-textarea",{staticClass:"h-auto",attrs:{rows:"5",placeholder:"Enter Desription"},model:{value:t.item.description,callback:function(e){t.$set(t.item,"description","string"==typeof e?e.trim():e)},expression:"item.description"}})],1),t._v(" "),a("b-row",[a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Purchase Price"}},[a("b-input",{attrs:{type:"number",placeholder:"Enter Purchase Price"},model:{value:t.item.purchase_price,callback:function(e){t.$set(t.item,"purchase_price","string"==typeof e?e.trim():e)},expression:"item.purchase_price"}})],1),t._v(" "),a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Margin"}},[a("b-input",{attrs:{type:"number",placeholder:"Enter Margin"},model:{value:t.item.margin,callback:function(e){t.$set(t.item,"margin","string"==typeof e?e.trim():e)},expression:"item.margin"}})],1),t._v(" "),a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Sale Price"}},[a("b-input",{attrs:{type:"number",placeholder:"Enter Sale Price"},model:{value:t.item.sale_price,callback:function(e){t.$set(t.item,"sale_price","string"==typeof e?e.trim():e)},expression:"item.sale_price"}})],1),t._v(" "),a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Price Type"}},[a("label",{staticClass:"d-block"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.type,expression:"item.type"}],attrs:{type:"radio",value:"inc"},domProps:{checked:t._q(t.item.type,"inc")},on:{change:function(e){return t.$set(t.item,"type","inc")}}}),t._v("\n                        Inclusive GST\n                    ")]),t._v(" "),a("label",{staticClass:"d-block"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.type,expression:"item.type"}],attrs:{type:"radio",value:"excl"},domProps:{checked:t._q(t.item.type,"excl")},on:{change:function(e){return t.$set(t.item,"type","excl")}}}),t._v("\n                        Exclusive GST\n                    ")])]),t._v(" "),a("b-form-group",{staticClass:"col-sm-4",attrs:{label:"GST Rate"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.item.gst_rate,expression:"item.gst_rate"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.item,"gst_rate",e.target.multiple?a:a[0])}}},t._l(t.gst_rates,(function(e,r){return a("option",{key:r,domProps:{value:e}},[t._v(t._s(e))])})),0)])],1),t._v(" "),a("b-button",{staticClass:"fw-btn-fill btn-gradient-yellow text-white router-link-active",staticStyle:{"max-width":"100px"},attrs:{type:"submit"}},[t._v(t._s(t.$route.params.id?"Update":"Save"))])],1)],1)])}),[],!1,null,null,null);e.default=o.exports}}]);
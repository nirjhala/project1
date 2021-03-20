(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{366:function(e,a,t){"use strict";var l=t(62);t.n(l).a},367:function(e,a,t){(e.exports=t(7)(!1)).push([e.i,"label[data-v-132efcd2]{text-transform:capitalize}",""])},540:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t(1),o={data:function(){return{allowance:{gender:"Male",from_amount:"",to_amount:"",type:"percent",name:"",percent:5,amount:""},percentages:[],payroll_masters:{},success:null,errors:[],loaded:0}},validations:function(){return{allowance:{to_amount:{required:l.required},name:{required:l.required},amount:{required:l.required}}}},mounted:function(){this.routeLoading(),this.fetch_payroll_master();var e=1;do{this.percentages.push(e),e<10?e++:e+=5}while(e<=50);this.allowance.percent=1},methods:{routeLoading:function(){this.$route.params.id?this.getInfo():this.loaded=1},fetch_last_allowance:function(){var e=this;!this.$route.params.id&&this.allowance.gender&&this.allowance.name&&Object(n.uc)(this.allowance.gender,this.allowance.name).then((function(a){e.allowance.from_amount=a.data}))},fetch_payroll_master:function(){var e=this;Object(n.bc)("allowance").then((function(a){e.payroll_masters=a.data}))},getInfo:function(){var e=this;this.loaded=0,Object(n.Eb)(this.$route.params.id).then((function(a){e.allowance=a.data,e.loaded=1}))},saveData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){this.loaded=0;var a={allowance:this.allowance};this.$route.params.id?Object(n.H)(this.$route.params.id,a).then((function(a){e.loaded=1,e.$router.push({name:"PayrollAllowance"})})).catch((function(a){e.loaded=1,console.log(a)})):Object(n.d)(a).then((function(a){e.loaded=1,e.$router.push({name:"PayrollAllowance"})})).catch((function(a){e.loaded=1,console.log(a)}))}}},watch:{"$route.params.id":function(){this.routeLoading()},"allowance.type":function(e){if("percent"==e){this.percentages=[];var a=1;do{this.percentages.push(a),a<10?a++:a+=5}while(a<=50);this.allowance.percent=1}else this.percentages.push(0),this.allowance.percent=0;this.fetch_employees()},"allowance.gender":function(){this.fetch_last_allowance()},"allowance.name":function(){this.fetch_last_allowance()}}},r=(t(366),t(0)),s=Object(r.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"dashboard-content-one"},[t("div",{staticClass:"breadcrumbs-area"},[t("div",{staticClass:"float-right"},[t("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"PayrollAllowance"}}},[e._v("View Allowance")])],1),e._v(" "),t("h3",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" Allowance")]),e._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:{name:"PayrollMaster"}}},[e._v("Payroll Management Master")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:{name:"PayrollAllowance"}}},[e._v("Allowance")])],1),e._v(" "),t("li",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" Allowance")])])]),e._v(" "),t("b-card",{staticClass:"h-auto",attrs:{title:e.$route.params.id?"Edit Allowance":"Create Allowance"}},[t("b-form",{attrs:{method:"post"},on:{submit:function(a){return a.preventDefault(),e.saveData(a)}}},[t("b-row",[t("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Gender *"}},[t("label",{staticClass:"mr-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.allowance.gender,expression:"allowance.gender"}],attrs:{type:"radio",name:"gender",value:"Male"},domProps:{checked:e._q(e.allowance.gender,"Male")},on:{change:function(a){return e.$set(e.allowance,"gender","Male")}}}),e._v("\n                        Male\n                    ")]),e._v(" "),t("label",{staticClass:"mr-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.allowance.gender,expression:"allowance.gender"}],attrs:{type:"radio",name:"gender",value:"Female"},domProps:{checked:e._q(e.allowance.gender,"Female")},on:{change:function(a){return e.$set(e.allowance,"gender","Female")}}}),e._v("\n                        Female\n                    ")]),e._v(" "),t("label",{staticClass:"mr-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.allowance.gender,expression:"allowance.gender"}],attrs:{type:"radio",name:"gender",value:"Other"},domProps:{checked:e._q(e.allowance.gender,"Other")},on:{change:function(a){return e.$set(e.allowance,"gender","Other")}}}),e._v("\n                        Other\n                    ")])]),e._v(" "),t("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Select Allowance"}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.allowance.name.$model,expression:"$v.allowance.name.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.allowance.name.$error},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.allowance.name,"$model",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[e._v("Select Name")]),e._v(" "),e._l(e.payroll_masters,(function(a,l){return t("option",{key:l,domProps:{value:a}},[e._v(e._s(a))])}))],2),e._v(" "),t("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"From Salary Amount"}},[t("b-input",{attrs:{type:"number",placeholder:"From Salary Amount",readonly:""},model:{value:e.allowance.from_amount,callback:function(a){e.$set(e.allowance,"from_amount",a)},expression:"allowance.from_amount"}})],1),e._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"To Salary Amount"}},[t("b-input",{class:{"is-invalid":e.$v.allowance.to_amount.$error},attrs:{type:"number",placeholder:"To Salary Amount"},model:{value:e.$v.allowance.to_amount.$model,callback:function(a){e.$set(e.$v.allowance.to_amount,"$model",a)},expression:"$v.allowance.to_amount.$model"}}),e._v(" "),t("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),t("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Type"}},[t("label",{staticClass:"mr-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.allowance.type,expression:"allowance.type"}],attrs:{type:"radio",name:"type",value:"percent"},domProps:{checked:e._q(e.allowance.type,"percent")},on:{change:function(a){return e.$set(e.allowance,"type","percent")}}}),e._v("\n                        Percent\n                    ")]),e._v(" "),t("label",{staticClass:"mr-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.allowance.type,expression:"allowance.type"}],attrs:{type:"radio",name:"type",value:"fixed"},domProps:{checked:e._q(e.allowance.type,"fixed")},on:{change:function(a){return e.$set(e.allowance,"type","fixed")}}}),e._v("\n                        Fixed\n                    ")])]),e._v(" "),t("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Percent"}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.allowance.percent,expression:"allowance.percent"}],staticClass:"form-control",attrs:{disabled:"fixed"==e.allowance.type},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.allowance,"percent",a.target.multiple?t:t[0])}}},e._l(e.percentages,(function(a,l){return t("option",{key:l,domProps:{value:a}},[e._v(e._s(a))])})),0)]),e._v(" "),t("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Amount (upto)"}},[t("b-input",{class:{"is-invalid":e.$v.allowance.amount.$error},attrs:{placeholder:"Enter Amount"},model:{value:e.$v.allowance.amount.$model,callback:function(a){e.$set(e.$v.allowance.amount,"$model",a)},expression:"$v.allowance.amount.$model"}}),e._v(" "),t("b-form-invalid-feedback",[e._v("Please enter required field.")])],1)],1),e._v(" "),t("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v(e._s(e.$route.params.id?"Update":"Save"))]),e._v(" "),t("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("Reset")])],1)],1)],1)}),[],!1,null,"132efcd2",null);a.default=s.exports},62:function(e,a,t){var l=t(367);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(8)(l,n);l.locals&&(e.exports=l.locals)}}]);
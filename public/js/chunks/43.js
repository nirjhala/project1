(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{326:function(e,t,o){"use strict";var r=o(44);o.n(r).a},327:function(e,t,o){(e.exports=o(6)(!1)).push([e.i,"label[data-v-652415c4]{text-transform:capitalize}",""])},44:function(e,t,o){var r=o(327);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(7)(r,a);r.locals&&(e.exports=r.locals)},487:function(e,t,o){"use strict";o.r(t);var r=o(2),a=o(1),n={data:function(){return{promotion:{employee_type:"Teacher",user_id:"",current_grade:"NEW",current_salary:"NEW",grade_id:"",new_salary:""},employees:{},pay_grades:{},success:null,errors:[],loaded:0}},validations:function(){return{promotion:{employee_type:{required:r.required},user_id:{required:r.required},grade_id:{required:r.required},new_salary:{required:r.required}}}},mounted:function(){this.routeLoading(),this.fetch_pay_grades(),this.fetch_employees()},methods:{routeLoading:function(){this.$route.params.id?this.getInfo():this.loaded=1},fetch_pay_grades:function(){var e=this;Object(a.yc)("type=all").then((function(t){e.pay_grades=t.data}))},fetch_employees:function(){var e=this;this.promotion.user_id="",Object(a.Nc)("type=all&role=".concat(this.promotion.employee_type)).then((function(t){e.employees=t.data}))},fetch_employee_info:function(){var e=this;Object(a.mc)(this.promotion.user_id).then((function(t){var o,r,a,n;e.promotion.current_grade=null!==(o=t.data.grade_name)&&void 0!==o?o:"NEW",e.promotion.current_salary=null!==(r=t.data.new_salary)&&void 0!==r?r:"NEW",e.promotion.grade_id=null!==(a=t.data.pay_grade_id)&&void 0!==a?a:"",e.promotion.new_salary=null!==(n=t.data.new_salary)&&void 0!==n?n:""}))},getInfo:function(){var e=this;this.loaded=0,Object(a.Ib)(this.$route.params.id).then((function(t){e.promotion=t.data,e.promotion.grade_id=t.data.grade_id,e.loaded=1}))},saveData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){this.loaded=0;var t={promotion:this.promotion};this.$route.params.id?Object(a.L)(this.$route.params.id,t).then((function(t){e.loaded=1,e.$router.push({name:"PayrollPromotion"})})).catch((function(t){e.loaded=1,console.log(t)})):Object(a.h)(t).then((function(t){e.loaded=1,e.$router.push({name:"PayrollPromotion"})})).catch((function(t){e.loaded=1,console.log(t)}))}}},watch:{"$route.params.id":function(){this.routeLoading()},"promotion.employee_type":function(){this.fetch_employees()},"promotion.user_id":function(){this.fetch_employee_info()}}},i=(o(326),o(0)),l=Object(i.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dashboard-content-one"},[o("div",{staticClass:"breadcrumbs-area"},[o("div",{staticClass:"float-right"},[o("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"PayrollPromotion"}}},[e._v("View Promotion / Increament")])],1),e._v(" "),o("h3",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" Promotion / Increament")]),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:{name:"PayrollMaster"}}},[e._v("Payroll Management Master")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:{name:"PayrollPromotion"}}},[e._v("Promotion / Increament")])],1),e._v(" "),o("li",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" Promotion / Increament")])])]),e._v(" "),o("b-card",{staticClass:"h-auto",attrs:{title:e.$route.params.id?"Edit Promotion / Increament":"Create Promotion / Increament"}},[o("b-form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.saveData(t)}}},[o("b-row",[o("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Staff / Teacher *"}},[o("label",{staticClass:"mr-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.promotion.employee_type,expression:"promotion.employee_type"}],attrs:{type:"radio",name:"employee_type",value:"Teacher"},domProps:{checked:e._q(e.promotion.employee_type,"Teacher")},on:{change:function(t){return e.$set(e.promotion,"employee_type","Teacher")}}}),e._v("\n                        Teacher\n                    ")]),e._v(" "),o("label",{staticClass:"mr-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.promotion.employee_type,expression:"promotion.employee_type"}],attrs:{type:"radio",name:"employee_type",value:"Staff"},domProps:{checked:e._q(e.promotion.employee_type,"Staff")},on:{change:function(t){return e.$set(e.promotion,"employee_type","Staff")}}}),e._v("\n                        Staff\n                    ")])]),e._v(" "),o("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Select "+e.promotion.employee_type}},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.promotion.user_id.$model,expression:"$v.promotion.user_id.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.promotion.user_id.$error},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.promotion.user_id,"$model",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[e._v("Select "+e._s(e.promotion.employee_type))]),e._v(" "),e._l(e.employees,(function(t,r){return o("option",{key:r,domProps:{value:r}},[e._v(e._s(t))])}))],2),e._v(" "),o("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-6 col-lg-3",attrs:{label:"Current Grade"}},[o("b-input",{attrs:{readonly:""},model:{value:e.promotion.current_grade,callback:function(t){e.$set(e.promotion,"current_grade",t)},expression:"promotion.current_grade"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-6 col-lg-3",attrs:{label:"Current Salary"}},[o("b-input",{attrs:{readonly:""},model:{value:e.promotion.current_salary,callback:function(t){e.$set(e.promotion,"current_salary",t)},expression:"promotion.current_salary"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-6 col-lg-3",attrs:{label:"New Grade"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.promotion.grade_id.$model,expression:"$v.promotion.grade_id.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.promotion.grade_id.$error},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.promotion.grade_id,"$model",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[e._v("Select Grade")]),e._v(" "),e._l(e.pay_grades,(function(t,r){return o("option",{key:r,domProps:{value:r}},[e._v(e._s(t))])}))],2),e._v(" "),o("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-6 col-lg-3",attrs:{label:"New Salary"}},[o("b-input",{class:{"is-invalid":e.$v.promotion.new_salary.$error},attrs:{type:"number"},model:{value:e.$v.promotion.new_salary.$model,callback:function(t){e.$set(e.$v.promotion.new_salary,"$model",t)},expression:"$v.promotion.new_salary.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please enter required field.")])],1)],1),e._v(" "),o("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v(e._s(e.$route.params.id?"Update":"Save"))]),e._v(" "),o("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("Reset")])],1)],1)],1)}),[],!1,null,"652415c4",null);t.default=l.exports}}]);
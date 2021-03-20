(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{370:function(a,e,t){"use strict";var l=t(64);t.n(l).a},371:function(a,e,t){(a.exports=t(7)(!1)).push([a.i,"label[data-v-09fde0a8]{text-transform:capitalize}",""])},544:function(a,e,t){"use strict";t.r(e);var l=t(2),s=t(1),r=new Date,o={data:function(){return{salary:{type:"Teacher",employee_id:"",name:"",designation:"",grade:"",pan_no:"",bank_name:"",account_no:"",ifsc_code:"",total_days:0,total_leave:0,days_paid:0,basic_salary:0,previous_due:0,month:r.getMonth()>0?r.getMonth()-1:11,year:r.getMonth()>0?r.getFullYear():r.getFullYear()-1},employees:{},months:["January","February","March","April","May","June","July","August","September","October","November","December"],allowances:[],deductions:[],currentYear:r.getFullYear(),success:null,errors:[],loaded:0}},validations:function(){return{salary:{employee_id:{required:l.required}}}},mounted:function(){this.routeLoading(),this.fetch_employees();var a=1;do{this.percentages.push(a),a<10?a++:a+=5}while(a<=50);this.salary.percent=1},methods:{routeLoading:function(){this.$route.params.id?this.getInfo():this.loaded=1},fetch_employees:function(){var a=this;this.salary.employee_id="",Object(s.Nc)("type=all&role=".concat(this.salary.type,"&month=").concat(this.salary.month,"&year=").concat(this.salary.year)).then((function(e){a.employees=e.data}))},fetch_employee_info:function(){var a=this;this.salary.employee_id&&Object(s.mc)(this.salary.employee_id,"type=all-details&month=".concat(this.salary.month,"&year=").concat(this.salary.year)).then((function(e){var t,l,s,r,o,n,i,c,u=e.data;a.salary.name=u.name,a.salary.employee_no=null!==(t=u["Employee Number"])&&void 0!==t?t:"",a.salary.designation=null!==(l=u.Designation)&&void 0!==l?l:"",a.salary.grade=null!==(s=u.grade)&&void 0!==s?s:"",a.salary.pan_no=null!==(r=u["PAN Number"])&&void 0!==r?r:"",a.salary.bank_name=null!==(o=u["Bank Name"])&&void 0!==o?o:"",a.salary.account_no=null!==(n=u["Account Number"])&&void 0!==n?n:"",a.salary.ifsc_code=null!==(i=u["IFSC Code"])&&void 0!==i?i:"",a.salary.basic_salary=null!==(c=u.salary)&&void 0!==c?c:"",a.salary.total_days=u.total_days,a.salary.days_paid=u.paid_days,a.salary.total_leave=u.total_days-u.paid_days,a.allowances=u.allowance,a.deductions=u.deduction}))},getInfo:function(){var a=this;this.loaded=0,Object(s.Pb)(this.$route.params.id).then((function(e){a.allowance=e.data,a.loaded=1}))},saveData:function(){var a=this;if(this.$v.$touch(),!this.$v.$anyError){this.loaded=0;var e={salary:this.salary,allowances:this.allowances,deductions:this.deductions};this.$route.params.id?Object(s.U)(this.$route.params.id,e).then((function(e){a.loaded=1,a.$router.push({name:"PayrollSalarySlip"})})).catch((function(e){a.loaded=1,console.log(e)})):Object(s.s)(e).then((function(e){a.loaded=1,a.$router.push({name:"PayrollSalarySlip"})})).catch((function(e){a.loaded=1,console.log(e)}))}}},watch:{"$route.params.id":function(){this.routeLoading()},"salary.type":function(){this.fetch_employees()},"salary.employee_id":function(){this.fetch_employee_info()},"salary.month":function(){this.fetch_employee_info()},"salary.year":function(){this.fetch_employee_info()}}},n=(t(370),t(0)),i=Object(n.a)(o,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"dashboard-content-one"},[t("div",{staticClass:"breadcrumbs-area"},[t("div",{staticClass:"float-right"},[t("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"PayrollSalarySlip"}}},[a._v("View Salary Slip")])],1),a._v(" "),t("h3",[a._v(a._s(a.$route.params.id?"Edit":"Add")+" Salary Slip")]),a._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:{name:"dashboard"}}},[a._v("Dashboard")])],1),a._v(" "),t("li",[t("router-link",{attrs:{to:{name:"PayrollMaster"}}},[a._v("Payroll Management Master")])],1),a._v(" "),t("li",[t("router-link",{attrs:{to:{name:"PayrollSalarySlip"}}},[a._v("Salary Slip")])],1),a._v(" "),t("li",[a._v(a._s(a.$route.params.id?"Edit":"Add")+" Salary Slip")])])]),a._v(" "),t("b-card",{staticClass:"h-auto",attrs:{title:a.$route.params.id?"Edit Salary Slip":"Create Salary Slip"}},[t("b-form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),a.saveData(e)}}},[t("b-row",[t("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Teacher / Staff *"}},[t("label",{staticClass:"mr-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.salary.type,expression:"salary.type"}],attrs:{type:"radio",name:"type",value:"Teacher"},domProps:{checked:a._q(a.salary.type,"Teacher")},on:{change:function(e){return a.$set(a.salary,"type","Teacher")}}}),a._v("\n                        Teacher\n                    ")]),a._v(" "),t("label",{staticClass:"mr-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.salary.type,expression:"salary.type"}],attrs:{type:"radio",name:"type",value:"Staff"},domProps:{checked:a._q(a.salary.type,"Staff")},on:{change:function(e){return a.$set(a.salary,"type","Staff")}}}),a._v("\n                        Staff\n                    ")])]),a._v(" "),t("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Select "+a.salary.type}},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.$v.salary.employee_id.$model,expression:"$v.salary.employee_id.$model"}],staticClass:"form-control",class:{"is-invalid":a.$v.salary.employee_id.$error},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.$v.salary.employee_id,"$model",e.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[a._v("Select Name")]),a._v(" "),a._l(a.employees,(function(e,l){return t("option",{key:l,domProps:{value:l}},[a._v(a._s(e))])}))],2),a._v(" "),t("b-form-invalid-feedback",[a._v("Please enter required field.")])],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Select Month"}},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.salary.month,expression:"salary.month"}],staticClass:"form-control",on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.salary,"month",e.target.multiple?t:t[0])}}},a._l(a.months,(function(e,l){return t("option",{key:l,domProps:{value:l}},[a._v(a._s(e))])})),0)]),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Select Month"}},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.salary.year,expression:"salary.year"}],staticClass:"form-control",on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.salary,"year",e.target.multiple?t:t[0])}}},[t("option",{domProps:{value:a.currentYear}},[a._v(a._s(a.currentYear))]),a._v(" "),t("option",{domProps:{value:a.currentYear-1}},[a._v(a._s(a.currentYear-1))]),a._v(" "),t("option",{domProps:{value:a.currentYear-2}},[a._v(a._s(a.currentYear-2))]),a._v(" "),t("option",{domProps:{value:a.currentYear-3}},[a._v(a._s(a.currentYear-3))])])])],1),a._v(" "),a.salary.employee_id?t("b-row",[t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Name"}},[t("b-input",{attrs:{placeholder:"Name",readonly:""},model:{value:a.salary.name,callback:function(e){a.$set(a.salary,"name",e)},expression:"salary.name"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Employee No."}},[t("b-input",{attrs:{placeholder:"Employee No.",readonly:""},model:{value:a.salary.employee_no,callback:function(e){a.$set(a.salary,"employee_no",e)},expression:"salary.employee_no"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Designation"}},[t("b-input",{attrs:{placeholder:"Designation",readonly:""},model:{value:a.salary.designation,callback:function(e){a.$set(a.salary,"designation",e)},expression:"salary.designation"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Grade"}},[t("b-input",{attrs:{placeholder:"Grade",readonly:""},model:{value:a.salary.grade,callback:function(e){a.$set(a.salary,"grade",e)},expression:"salary.grade"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"PAN No."}},[t("b-input",{attrs:{placeholder:"PAN No.",readonly:""},model:{value:a.salary.pan_no,callback:function(e){a.$set(a.salary,"pan_no",e)},expression:"salary.pan_no"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Bank Name"}},[t("b-input",{attrs:{placeholder:"Bank Name",readonly:""},model:{value:a.salary.bank_name,callback:function(e){a.$set(a.salary,"bank_name",e)},expression:"salary.bank_name"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Account No."}},[t("b-input",{attrs:{placeholder:"Account No.",readonly:""},model:{value:a.salary.account_no,callback:function(e){a.$set(a.salary,"account_no",e)},expression:"salary.account_no"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"IFSC Code"}},[t("b-input",{attrs:{placeholder:"IFSC Code",readonly:""},model:{value:a.salary.ifsc_code,callback:function(e){a.$set(a.salary,"ifsc_code",e)},expression:"salary.ifsc_code"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Total Days in Month"}},[t("b-input",{attrs:{placeholder:"Total Days in Month",readonly:""},model:{value:a.salary.total_days,callback:function(e){a.$set(a.salary,"total_days",e)},expression:"salary.total_days"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Days Paid"}},[t("b-input",{attrs:{placeholder:"Days Paid",readonly:""},model:{value:a.salary.days_paid,callback:function(e){a.$set(a.salary,"days_paid",e)},expression:"salary.days_paid"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Total Leave"}},[t("b-input",{attrs:{placeholder:"Leave Taken",readonly:""},model:{value:a.salary.total_leave,callback:function(e){a.$set(a.salary,"total_leave",e)},expression:"salary.total_leave"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Basic Salary"}},[t("b-input",{attrs:{placeholder:"Basic Salary",readonly:""},model:{value:a.salary.basic_salary,callback:function(e){a.$set(a.salary,"basic_salary",e)},expression:"salary.basic_salary"}})],1),a._v(" "),t("b-form-group",{staticClass:"col-sm-2",attrs:{label:"Previous Due"}},[t("b-input",{attrs:{type:"number",min:"0",placeholder:"Previous Due"},model:{value:a.salary.previous_due,callback:function(e){a.$set(a.salary,"previous_due",e)},expression:"salary.previous_due"}})],1)],1):a._e(),a._v(" "),a.salary.employee_id?t("b-row",[t("b-col",{attrs:{sm:"6"}},[t("h4",{staticClass:"card-title"},[a._v("Allowance")]),a._v(" "),a._l(a.allowances,(function(e,l){return t("b-row",{key:l,staticClass:"form-group"},[t("label",{staticClass:"col-sm-5",attrs:{for:""}},[a._v(a._s(e.name))]),a._v(" "),t("div",{staticClass:"col-sm-7"},[t("b-input",{attrs:{type:"number",placeholder:"Amount"},model:{value:e.amount,callback:function(t){a.$set(e,"amount",t)},expression:"allowance.amount"}})],1)])}))],2),a._v(" "),t("b-col",{attrs:{sm:"6"}},[t("h4",{staticClass:"card-title"},[a._v("Deduction")]),a._v(" "),a._l(a.deductions,(function(e,l){return t("b-row",{key:l,staticClass:"form-group"},[t("label",{staticClass:"col-sm-5",attrs:{for:""}},[a._v(a._s(e.name))]),a._v(" "),t("div",{staticClass:"col-sm-7"},[t("b-input",{attrs:{type:"number",placeholder:"Amount"},model:{value:e.amount,callback:function(t){a.$set(e,"amount",t)},expression:"deduction.amount"}})],1)])}))],2)],1):a._e(),a._v(" "),t("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[a._v(a._s(a.$route.params.id?"Update":"Save"))]),a._v(" "),t("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[a._v("Reset")])],1)],1)],1)}),[],!1,null,"09fde0a8",null);e.default=i.exports},64:function(a,e,t){var l=t(371);"string"==typeof l&&(l=[[a.i,l,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(8)(l,s);l.locals&&(a.exports=l.locals)}}]);
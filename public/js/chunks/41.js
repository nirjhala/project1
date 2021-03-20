(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{360:function(e,t,s){"use strict";var a=s(59);s.n(a).a},361:function(e,t,s){(e.exports=s(7)(!1)).push([e.i,"label[data-v-0ad9f90f]{text-transform:capitalize}",""])},532:function(e,t,s){"use strict";s.r(t);var a=s(2),r=s(1),o={data:function(){return{department_id:"",form:{class_id:"",subject_id:"",user_id:"",sch_time_from:"",sch_time_upto:"",room_unique_id:""},departments:{},classes:{},subjects:{},teachers:{},success:null,errors:[],loaded:0}},validations:function(){return{form:{class_id:{required:a.required},subject_id:{required:a.required},user_id:{required:a.required},sch_time_from:{required:a.required},sch_time_upto:{required:a.required}}}},mounted:function(){this.fetch_deparments(),this.genOnlineId(),this.routeLoading()},methods:{routeLoading:function(){this.$route.params.id?this.getInfo():this.loaded=1},genOnlineId:function(){var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var s=(e+20*Math.random())%20|0;return e=Math.floor(e/20),("x"==t?s:3&s|8).toString(20)}));this.form.room_unique_id=t},fetch_deparments:function(){var e=this;Object(r.db)().then((function(t){e.departments=t.data}))},fetch_classes:function(){var e=this;this.form.class_id="",Object(r.cb)(this.department_id).then((function(t){e.classes=t.data}))},fetch_subjects:function(){var e=this;this.form.subject_id="",Object(r.hb)(this.form.class_id).then((function(t){e.subjects=t.data}))},fetch_teachers:function(){var e=this;this.form.user_id="",Object(r.Lc)(this.form.class_id,this.form.subject_id).then((function(t){e.teachers=t.data}))},getInfo:function(){var e=this;this.loaded=0,show_onlineadd_online_class(this.$route.params.id).then((function(t){e.allowance=t.data,e.loaded=1}))},saveData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){this.loaded=0;var t={online_class:this.form};this.$route.params.id?edit_onlineadd_online_class(this.$route.params.id,t).then((function(t){e.loaded=1,e.$router.push({name:"ViewOnlineClass"})})).catch((function(t){e.loaded=1,console.log(t)})):Object(r.m)(t).then((function(t){e.loaded=1,e.$router.push({name:"ViewOnlineClass"})})).catch((function(t){e.loaded=1,console.log(t)}))}}},watch:{"$route.params.id":function(){this.routeLoading()},"allowance.type":function(e){if("percent"==e){this.percentages=[];var t=1;do{this.percentages.push(t),t<10?t++:t+=5}while(t<=50);this.allowance.percent=1}else this.percentages.push(0),this.allowance.percent=0;this.fetch_employees()},"allowance.gender":function(){this.fetch_last_onlineadd_online_class()},"allowance.name":function(){this.fetch_last_onlineadd_online_class()}}},i=(s(360),s(0)),n=Object(i.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dashboard-content-one"},[s("div",{staticClass:"breadcrumbs-area"},[s("div",{staticClass:"float-right"},[s("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewOnlineClass"}}},[e._v("View Online Class")])],1),e._v(" "),s("h3",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" Online Class")]),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:{name:"OnlineClassMaster"}}},[e._v("Online Class Master")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:{name:"ViewOnlineClass"}}},[e._v("Online Class")])],1),e._v(" "),s("li",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" Online Class")])])]),e._v(" "),s("b-card",{staticClass:"h-auto",attrs:{title:e.$route.params.id?"Edit Online Class":"Create Online Class"}},[s("b-form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.saveData(t)}}},[s("b-row",[s("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Department *"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.department_id,expression:"department_id"}],staticClass:"form-control",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.department_id=t.target.multiple?s:s[0]},e.fetch_classes]}},[s("option",{attrs:{value:""}},[e._v("Select Department")]),e._v(" "),e._l(e.departments,(function(t,a){return s("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])}))],2)]),e._v(" "),s("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Class *"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.class_id.$model,expression:"$v.form.class_id.$model"}],staticClass:"form-control",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.form.class_id,"$model",t.target.multiple?s:s[0])},e.fetch_subjects]}},[s("option",{attrs:{value:""}},[e._v("Select Class")]),e._v(" "),e._l(e.classes,(function(t,a){return s("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])}))],2)]),e._v(" "),s("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Select Subject"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.subject_id.$model,expression:"$v.form.subject_id.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.form.subject_id.$error},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.form.subject_id,"$model",t.target.multiple?s:s[0])},e.fetch_teachers]}},[s("option",{attrs:{value:""}},[e._v("Select Name")]),e._v(" "),e._l(e.subjects,(function(t,a){return s("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])}))],2),e._v(" "),s("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),s("b-form-group",{staticClass:"col-sm-4"},[s("a",{staticClass:"float-right",attrs:{href:"javascript:"},on:{click:e.genOnlineId}},[e._v("Regenerate")]),e._v(" "),s("label",[e._v("Online Class ID")]),e._v(" "),s("b-input",{attrs:{readonly:""},model:{value:e.form.room_unique_id,callback:function(t){e.$set(e.form,"room_unique_id","string"==typeof t?t.trim():t)},expression:"form.room_unique_id"}})],1),e._v(" "),s("b-form-group",{staticClass:"col-sm-4",attrs:{label:"Select Teacher"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.user_id.$model,expression:"$v.form.user_id.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.form.user_id.$error},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.form.user_id,"$model",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v("Select Teacher")]),e._v(" "),e._l(e.teachers,(function(t,a){return s("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])}))],2)]),e._v(" "),s("b-form-group",{staticClass:"col-sm-2",attrs:{label:"From Time"}},[s("b-input",{class:{"is-invalid":e.$v.form.sch_time_from.$error},attrs:{type:"time",placeholder:"From Time"},model:{value:e.$v.form.sch_time_from.$model,callback:function(t){e.$set(e.$v.form.sch_time_from,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.sch_time_from.$model"}}),e._v(" "),s("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),s("b-form-group",{staticClass:"col-sm-2",attrs:{label:"To Time"}},[s("b-input",{class:{"is-invalid":e.$v.form.sch_time_upto.$error},attrs:{type:"time",placeholder:"To Time"},model:{value:e.$v.form.sch_time_upto.$model,callback:function(t){e.$set(e.$v.form.sch_time_upto,"$model",t)},expression:"$v.form.sch_time_upto.$model"}}),e._v(" "),s("b-form-invalid-feedback",[e._v("Please enter required field.")])],1)],1),e._v(" "),s("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v(e._s(e.$route.params.id?"Update":"Save"))]),e._v(" "),s("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("Reset")])],1)],1)],1)}),[],!1,null,"0ad9f90f",null);t.default=n.exports},59:function(e,t,s){var a=s(361);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(8)(a,r);a.locals&&(e.exports=a.locals)}}]);
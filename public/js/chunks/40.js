(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{353:function(e,t,o){"use strict";var r=o(55);o.n(r).a},354:function(e,t,o){(e.exports=o(7)(!1)).push([e.i,"input[readonly]{background-color:bisque!important;cursor:not-allowed}",""])},521:function(e,t,o){"use strict";o.r(t);var r,a=o(13),s=o.n(a),l=o(2),n=o(1);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}l.helpers.regex("aplpha",/^[A-Za-z ]*$/i);var m={components:{Multiselect:s.a},data:function(){return{form:{user_id:"",tc_number:"",name:"",class:"",section:"",roll_no:"",admission_no:"",admission_date:"",father_name:"",mother_name:"",cast_category:"",dob:"",dob_words:"",apply_date:"",issue_date:"",admitted_class:"",reason:"",paid_month:"",fee_concession:"",is_ncc:"no",is_game:"no",total_working_days:"",total_present_days:"",result:"Pass",conduct:"",remarks:"",nationality:"Indian",class_promotion:"yes",promoting_class:""},student:null,students:[],success:null,errors:[],loaded:0}},validations:{form:(r={apply_date:{required:l.required},issue_date:{required:l.required},reason:{required:l.required},tc_number:{required:l.required},name:{required:l.required},nationality:{required:l.required},promoting_class:{required:l.required},class:{required:l.required},dob_words:{required:l.required},section:{required:l.required},roll_no:{required:l.required},admitted_class:{required:l.required},paid_month:{required:l.required},total_working_days:{required:l.required},total_present_days:{required:l.required}},i(r,"reason",{required:l.required}),i(r,"conduct",{required:l.required}),r)},mounted:function(){this.routeLoading(),this.fetch_students()},methods:{routeLoading:function(){this.$route.params?this.getInfo():this.loaded=1},studentLabel:function(e){var t=e.user,o=e.father_info,r=e.section_name,a=t.name;return o&&o.name&&(a+=" ".concat(o.name)),a+=", Class - ",r&&r.cls&&r.cls.name&&(a+=" ".concat(r.cls.name)),r&&r.name&&(a+=" ".concat(r.name)),a},fetch_students:function(){var e=this;n.D.getStudents().then((function(t){e.students=t.data})).catch((function(e){console.log("Errors: ",e)}))},getInfo:function(){var e=this;this.loaded=0,Object(n.Sb)(this.$route.params.id).then((function(t){e.form=t.data,e.loaded=1}))},saveData:function(){var e=this;this.loaded=0;var t={form:this.form};this.$route.params.id?Object(n.Y)(this.$route.params.id,t).then((function(t){e.loaded=1,e.$router.push({name:"ViewTc"})})).catch((function(t){e.loaded=1,console.log(t)})):Object(n.w)(t).then((function(t){e.loaded=1,e.$router.push({name:"ViewTc"})})).catch((function(t){e.loaded=1,console.log(t)}))}},watch:{"$route.params.id":function(){this.routeLoading()},student:function(e){this.form.user_id=e.uid,this.form.name=e.user.name,this.form.class=e.section_name.cls.name,this.form.section=e.section_name.name,this.form.roll_no=e.roll_no,this.form.admission_no=e.reg_no,this.form.father_name=e.father_info.name,this.form.mother_name=e.mother_info.name,this.form.dob=e.user.dob,this.form.admission_date=e.admission_date,this.form.cast_category=e.category}}},d=(o(353),o(120),o(0)),c=Object(d.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dashboard-content-one"},[o("div",{staticClass:"breadcrumbs-area"},[o("div",{staticClass:"float-right"},[o("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewTc"}}},[e._v("View TC")])],1),e._v(" "),o("h3",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" TC")]),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:{name:"CertificateMaster"}}},[e._v("Certificate Master")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:{name:"ViewTc"}}},[e._v("TC")])],1),e._v(" "),o("li",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" TC")])])]),e._v(" "),o("b-card",{attrs:{title:e.$route.params.id?"Edit TC":"Add TC"}},[o("b-form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.saveData(t)}}},[o("b-row",[e.$route.params.id?e._e():o("b-form-group",{staticClass:"col-sm-9",attrs:{label:"Search Student"}},[o("multiselect",{attrs:{"track-by":"uid",placeholder:"Search Student","select-label":"","deselect-label":"",options:e.students,"custom-label":e.studentLabel,searchable:!0,"allow-empty":!1},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var o=t.option;return[e._v("\n                            "+e._s(o.user.name+" - "+o.father_info.name+", Class - "+o.section_name.cls.name+" "+o.section_name.name)+"\n                        ")]}}],null,!1,3257800345),model:{value:e.student,callback:function(t){e.student=t},expression:"student"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"TC Generate No."}},[o("b-input",{attrs:{placeholder:"Enter TC Number (leave blank to auto generate)"},model:{value:e.form.tc_number,callback:function(t){e.$set(e.form,"tc_number","string"==typeof t?t.trim():t)},expression:"form.tc_number"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Name of Pupil"}},[o("b-input",{attrs:{placeholder:"Enter Student Name",readonly:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Class"}},[o("b-input",{attrs:{placeholder:"Enter Class Name",readonly:""},model:{value:e.form.class,callback:function(t){e.$set(e.form,"class","string"==typeof t?t.trim():t)},expression:"form.class"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Section"}},[o("b-input",{attrs:{placeholder:"Enter Section Name",readonly:""},model:{value:e.form.section,callback:function(t){e.$set(e.form,"section","string"==typeof t?t.trim():t)},expression:"form.section"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Student Roll No."}},[o("b-input",{attrs:{placeholder:"Enter Student Roll No.",readonly:""},model:{value:e.form.roll_no,callback:function(t){e.$set(e.form,"roll_no","string"==typeof t?t.trim():t)},expression:"form.roll_no"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Admission Number"}},[o("b-input",{attrs:{placeholder:"Enter Admission No.",readonly:""},model:{value:e.form.admission_no,callback:function(t){e.$set(e.form,"admission_no","string"==typeof t?t.trim():t)},expression:"form.admission_no"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Admission Date"}},[o("b-input",{attrs:{type:"date",placeholder:"Enter Admission Date",readonly:""},model:{value:e.form.admission_date,callback:function(t){e.$set(e.form,"admission_date","string"==typeof t?t.trim():t)},expression:"form.admission_date"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Father's Name"}},[o("b-input",{attrs:{placeholder:"Enter Father's Name",readonly:""},model:{value:e.form.father_name,callback:function(t){e.$set(e.form,"father_name","string"==typeof t?t.trim():t)},expression:"form.father_name"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Mother's Name"}},[o("b-input",{attrs:{placeholder:"Enter Mother's Name",readonly:""},model:{value:e.form.mother_name,callback:function(t){e.$set(e.form,"mother_name","string"==typeof t?t.trim():t)},expression:"form.mother_name"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Date Of Birth"}},[o("b-input",{attrs:{type:"date",placeholder:"Enter DOB",readonly:""},model:{value:e.form.dob,callback:function(t){e.$set(e.form,"dob","string"==typeof t?t.trim():t)},expression:"form.dob"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Date Of Birth (in words)"}},[o("b-input",{class:{"is-invalid":e.$v.form.dob_words.$error},attrs:{placeholder:"Enter DOB (in words)"},model:{value:e.$v.form.dob_words.$model,callback:function(t){e.$set(e.$v.form.dob_words,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.dob_words.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Nationality"}},[o("b-input",{class:{"is-invalid":e.$v.form.nationality.$error},attrs:{placeholder:"Nationality"},model:{value:e.$v.form.nationality.$model,callback:function(t){e.$set(e.$v.form.nationality,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.nationality.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Cast Category"}},[o("b-input",{attrs:{placeholder:"Cast Category",readonly:""},model:{value:e.form.cast_category,callback:function(t){e.$set(e.form,"cast_category","string"==typeof t?t.trim():t)},expression:"form.cast_category"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Date of Application"}},[o("b-input",{class:{"is-invalid":e.$v.form.apply_date.$error},attrs:{placeholder:"Date of Application",type:"date"},model:{value:e.$v.form.apply_date.$model,callback:function(t){e.$set(e.$v.form.apply_date,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.apply_date.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Date of Issuance"}},[o("b-input",{class:{"is-invalid":e.$v.form.issue_date.$error},attrs:{placeholder:"Date of Issuance",type:"date"},model:{value:e.$v.form.issue_date.$model,callback:function(t){e.$set(e.$v.form.issue_date,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.issue_date.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Class in which admitted"}},[o("b-input",{class:{"is-invalid":e.$v.form.admitted_class.$error},attrs:{placeholder:"Class in which admitted *"},model:{value:e.$v.form.admitted_class.$model,callback:function(t){e.$set(e.$v.form.admitted_class,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.admitted_class.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Promoted to other class?"}},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.class_promotion,expression:"form.class_promotion"}],attrs:{type:"radio",name:"class_promotion",value:"yes"},domProps:{checked:e._q(e.form.class_promotion,"yes")},on:{change:function(t){return e.$set(e.form,"class_promotion","yes")}}}),e._v("\n                        Yes\n                    ")]),e._v(" "),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.class_promotion,expression:"form.class_promotion"}],attrs:{type:"radio",name:"class_promotion",value:"no"},domProps:{checked:e._q(e.form.class_promotion,"no")},on:{change:function(t){return e.$set(e.form,"class_promotion","no")}}}),e._v("\n                        No\n                    ")])]),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Class in which promoted"}},[o("b-input",{class:{"is-invalid":e.$v.form.promoting_class.$error},attrs:{placeholder:"Class in which promoted *"},model:{value:e.$v.form.promoting_class.$model,callback:function(t){e.$set(e.$v.form.promoting_class,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.promoting_class.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Reason"}},[o("b-input",{class:{"is-invalid":e.$v.form.reason.$error},attrs:{placeholder:"Reason for leaving *"},model:{value:e.$v.form.reason.$model,callback:function(t){e.$set(e.$v.form.reason,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.reason.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",class:{"is-invalid":e.$v.form.paid_month.$error},attrs:{label:"Paid Month *"}},[o("b-input",{class:{"is-invalid":e.$v.form.paid_month.$error},attrs:{placeholder:"Enter paid month"},model:{value:e.$v.form.paid_month.$model,callback:function(t){e.$set(e.$v.form.paid_month,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.paid_month.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Any Fee Concession"}},[o("b-input",{attrs:{placeholder:"Any Fee Concession"},model:{value:e.form.fee_concession,callback:function(t){e.$set(e.form,"fee_concession","string"==typeof t?t.trim():t)},expression:"form.fee_concession"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Wheather NCC/SCOUT/GUIDE *"}},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.is_ncc,expression:"form.is_ncc"}],attrs:{type:"radio",name:"is_ncc",value:"yes"},domProps:{checked:e._q(e.form.is_ncc,"yes")},on:{change:function(t){return e.$set(e.form,"is_ncc","yes")}}}),e._v("\n                        Yes\n                    ")]),e._v(" "),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.is_ncc,expression:"form.is_ncc"}],attrs:{type:"radio",name:"is_ncc",value:"no"},domProps:{checked:e._q(e.form.is_ncc,"no")},on:{change:function(t){return e.$set(e.form,"is_ncc","no")}}}),e._v("\n                        No\n                    ")])]),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Games Played or Extra Activity *"}},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.is_game,expression:"form.is_game"}],attrs:{type:"radio",name:"is_game",value:"yes"},domProps:{checked:e._q(e.form.is_game,"yes")},on:{change:function(t){return e.$set(e.form,"is_game","yes")}}}),e._v("\n                        Yes\n                    ")]),e._v(" "),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.is_game,expression:"form.is_game"}],attrs:{type:"radio",name:"is_game",value:"no"},domProps:{checked:e._q(e.form.is_game,"no")},on:{change:function(t){return e.$set(e.form,"is_game","no")}}}),e._v("\n                        No\n                    ")])]),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Total working day *"}},[o("b-input",{class:{"is-invalid":e.$v.form.total_working_days.$error},attrs:{type:"number",placeholder:"Total no. of days to be present"},model:{value:e.$v.form.total_working_days.$model,callback:function(t){e.$set(e.$v.form.total_working_days,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.total_working_days.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"No. of days present *"}},[o("b-input",{class:{"is-invalid":e.$v.form.total_present_days.$error},attrs:{type:"number",placeholder:"Total no. of present days"},model:{value:e.$v.form.total_present_days.$model,callback:function(t){e.$set(e.$v.form.total_present_days,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.total_present_days.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Result status"}},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.result,expression:"form.result"}],attrs:{type:"radio",name:"result",value:"Pass"},domProps:{checked:e._q(e.form.result,"Pass")},on:{change:function(t){return e.$set(e.form,"result","Pass")}}}),e._v("\n                        Pass\n                    ")]),e._v(" "),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.result,expression:"form.result"}],attrs:{type:"radio",name:"result",value:"Fail"},domProps:{checked:e._q(e.form.result,"Fail")},on:{change:function(t){return e.$set(e.form,"result","Fail")}}}),e._v("\n                        Fail\n                    ")])]),e._v(" "),o("b-form-group",{staticClass:"col-sm-3",attrs:{label:"General Conduct *"}},[o("b-input",{class:{"is-invalid":e.$v.form.conduct.$error},attrs:{placeholder:"Conduct or behaviour"},model:{value:e.$v.form.conduct.$model,callback:function(t){e.$set(e.$v.form.conduct,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.conduct.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),o("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Remarks"}},[o("b-input",{attrs:{placeholder:"Any other Remarks"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks","string"==typeof t?t.trim():t)},expression:"form.remarks"}})],1)],1),e._v(" "),e.student||e.$route.params.id?o("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v(e._s(e.$route.params.id?"Update":"Save"))]):e._e(),e._v(" "),e.student||e.$route.params.id?o("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("Reset")]):e._e()],1)],1)],1)}),[],!1,null,null,null);t.default=c.exports},55:function(e,t,o){var r=o(354);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(8)(r,a);r.locals&&(e.exports=r.locals)}}]);
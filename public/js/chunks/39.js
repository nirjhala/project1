(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{356:function(e,t,r){"use strict";var a=r(57);r.n(a).a},357:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,"input[readonly][data-v-ecc83a44]{background-color:bisque!important;cursor:not-allowed}label[data-v-ecc83a44]{text-transform:capitalize}",""])},523:function(e,t,r){"use strict";r.r(t);var a=r(12),o=r.n(a),s=r(2),n=r(1),l={components:{Multiselect:o.a},data:function(){return{form:{sr_no:"",name:"",class:"",father_name:"",mother_name:"",type:this.$route.params.type,from:"",to:"",admission_no:"",gender:"Male",rank:"",organized_at:"",c_name:""},student:null,students:[],success:null,errors:[],loaded:0}},validations:function(){return"character"==this.$route.params.type?{form:{from:{required:s.required},to:{required:s.required}}}:{form:{rank:{required:s.required},organized_at:{required:s.required},c_name:{required:s.required}}}},mounted:function(){this.routeLoading(),this.fetch_students()},methods:{routeLoading:function(){this.$route.params.id?this.getInfo():this.loaded=1},studentLabel:function(e){var t=e.user,r=e.father_info,a=e.section_name,o=t.name;return r&&r.name&&(o+=" ".concat(r.name)),o+=", Class - ",a&&a.cls&&a.cls.name&&(o+=" ".concat(a.cls.name)),a&&a.name&&(o+=" ".concat(a.name)),o},fetch_students:function(){var e=this;n.D.getStudents().then((function(t){e.students=t.data})).catch((function(e){console.log("Errors: ",e)}))},getInfo:function(){var e=this;this.loaded=0,show_tc(this.$route.params.id).then((function(t){e.form=t.data,e.loaded=1}))},saveData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){this.loaded=0;var t={form:this.form};this.$route.params.id?Object(n.W)(this.$route.params.id,t).then((function(t){e.loaded=1,e.$router.push({name:"ViewCertificate",params:{type:e.$route.params.type}})})).catch((function(t){e.loaded=1,console.log(t)})):Object(n.u)(t).then((function(t){e.loaded=1,e.$router.push({name:"ViewCertificate",params:{type:e.$route.params.type}})})).catch((function(t){e.loaded=1,console.log(t)}))}}},watch:{"$route.params.id":function(){this.routeLoading()},"$route.params.type":function(e){this.type=e},student:function(e){this.form.name=e.user.name,this.form.class=e.section_name.cls.name,this.form.father_name=e.father_info.name,this.form.mother_name=e.mother_info.name,this.form.gender=e.user.gender,this.form.admission_no=e.reg_no}}},i=(r(356),r(120),r(0)),m=Object(i.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-content-one"},[r("div",{staticClass:"breadcrumbs-area"},[r("div",{staticClass:"float-right"},[r("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewCertificate",params:{type:e.$route.params.type}}}},[e._v("View "+e._s(e.$route.params.type))])],1),e._v(" "),r("h3",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" "+e._s(e.$route.params.type))]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"CertificateMaster"}}},[e._v("Certificate Master")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"ViewCertificate",params:{type:e.$route.params.type}}}},[e._v(e._s(e.$route.params.type))])],1),e._v(" "),r("li",[e._v(e._s(e.$route.params.id?"Edit":"Add")+" "+e._s(e.$route.params.type))])])]),e._v(" "),r("b-card",{attrs:{title:e.$route.params.id?"Edit "+e.$route.params.type:"Add "+e.$route.params.type}},[r("b-form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.saveData(t)}}},[r("b-row",[e.$route.params.id?e._e():r("b-form-group",{staticClass:"col-sm-9",attrs:{label:"Search Student"}},[r("multiselect",{attrs:{"track-by":"uid",placeholder:"Search Student","select-label":"","deselect-label":"",options:e.students,"custom-label":e.studentLabel,searchable:!0,"allow-empty":!1},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var r=t.option;return[e._v("\n                            "+e._s(r.user.name+" - "+r.father_info.name+", Class - "+r.section_name.cls.name+" "+r.section_name.name)+"\n                        ")]}}],null,!1,3257800345),model:{value:e.student,callback:function(t){e.student=t},expression:"student"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Sr. No."}},[r("b-input",{attrs:{placeholder:"Enter Serial Number (leave blank to auto generate)"},model:{value:e.form.sr_no,callback:function(t){e.$set(e.form,"sr_no","string"==typeof t?t.trim():t)},expression:"form.sr_no"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Name of Pupil"}},[r("b-input",{attrs:{placeholder:"Enter Student Name",readonly:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Class"}},[r("b-input",{attrs:{placeholder:"Enter Class Name",readonly:""},model:{value:e.form.class,callback:function(t){e.$set(e.form,"class","string"==typeof t?t.trim():t)},expression:"form.class"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Father's Name"}},[r("b-input",{attrs:{placeholder:"Enter Father's Name",readonly:""},model:{value:e.form.father_name,callback:function(t){e.$set(e.form,"father_name","string"==typeof t?t.trim():t)},expression:"form.father_name"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Mother's Name"}},[r("b-input",{attrs:{placeholder:"Enter Mother's Name",readonly:""},model:{value:e.form.mother_name,callback:function(t){e.$set(e.form,"mother_name","string"==typeof t?t.trim():t)},expression:"form.mother_name"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Gender"}},[r("b-input",{attrs:{placeholder:"Enter Gender",readonly:""},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender","string"==typeof t?t.trim():t)},expression:"form.gender"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Admission No."}},[r("b-input",{attrs:{placeholder:"Enter Admission No.",readonly:""},model:{value:e.form.admission_no,callback:function(t){e.$set(e.form,"admission_no","string"==typeof t?t.trim():t)},expression:"form.admission_no"}})],1),e._v(" "),"character"==e.$route.params.type?r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"From"}},[r("b-input",{class:{"is-invalid":e.$v.form.from.$error},attrs:{placeholder:"Enter Year"},model:{value:e.$v.form.from.$model,callback:function(t){e.$set(e.$v.form.from,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.from.$model"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1):e._e(),e._v(" "),"character"==e.$route.params.type?r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"To"}},[r("b-input",{class:{"is-invalid":e.$v.form.to.$error},attrs:{placeholder:"Enter Year or Till Now"},model:{value:e.$v.form.to.$model,callback:function(t){e.$set(e.$v.form.to,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.to.$model"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1):e._e(),e._v(" "),"character"!=e.$route.params.type?r("b-form-group",{staticClass:"col-sm-3",attrs:{label:e.$route.params.type+" Name"}},[r("b-input",{class:{"is-invalid":e.$v.form.c_name.$error},attrs:{placeholder:"Enter Year or Till Now"},model:{value:e.$v.form.c_name.$model,callback:function(t){e.$set(e.$v.form.c_name,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.c_name.$model"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1):e._e(),e._v(" "),"character"!=e.$route.params.type?r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Organized On"}},[r("b-input",{class:{"is-invalid":e.$v.form.organized_at.$error},attrs:{type:"date",placeholder:"Enter Date"},model:{value:e.$v.form.organized_at.$model,callback:function(t){e.$set(e.$v.form.organized_at,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.organized_at.$model"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1):e._e(),e._v(" "),"character"!=e.$route.params.type?r("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Rank"}},[r("b-input",{class:{"is-invalid":e.$v.form.rank.$error},attrs:{placeholder:"Enter Rank"},model:{value:e.$v.form.rank.$model,callback:function(t){e.$set(e.$v.form.rank,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.rank.$model"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1):e._e()],1),e._v(" "),e.student||e.$route.params.id?r("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v(e._s(e.$route.params.id?"Update":"Save"))]):e._e(),e._v(" "),e.student||e.$route.params.id?r("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("Reset")]):e._e()],1)],1)],1)}),[],!1,null,"ecc83a44",null);t.default=m.exports},57:function(e,t,r){var a=r(357);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(8)(a,o);a.locals&&(e.exports=a.locals)}}]);
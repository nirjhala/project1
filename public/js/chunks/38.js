(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{355:function(t,e,a){"use strict";var o=a(55);a.n(o).a},356:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,".tox-notification{display:none!important}",""])},472:function(t,e,a){"use strict";a.r(e);var o=a(1),s={components:{Editor:a(12).a},props:["image_src","image"],data:function(){return{form:{id:"",name:"",section_id:"",subject_id:"",description:""},attachment:"",editor_options:{height:500,branding:!1,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic forecolor backcolor |                     alignleft aligncenter alignright alignjustify |                     bullist numlist outdent indent | removeformat | help code"},classes:{},subjects:{},errors:[],loaded:0}},mounted:function(){var t=this.$route.params;this.getAllSections(),null!=t.id&&""!=t.id?this.getInfo(t.id):this.loaded=1},methods:{handleAttachment:function(t){this.attachment=t.target.files[0]},getAllSections:function(){var t=this;o.D.fetchAllSections().then((function(e){t.classes=e.data}))},fetchSubjectBySection:function(t){var e=this;o.D.fetchSubjectBySection(t).then((function(t){e.subjects=t.data})).catch((function(t){console.log("Errors: ",t)}))},getInfo:function(t){var e=this;o.D.AssignmentDetails(t).then((function(t){e.loaded=1,e.form=t.data}))},addData:function(){var t=this,e=new FormData;for(var a in this.form)e.append("form[".concat(a,"]"),this.form[a]);e.append("attachement",this.attachment),this.loaded=0,o.D.addAssignment(e).then((function(e){t.$router.push({name:"ManageAssignment"}).then((function(e){t.loaded=1,t.$toast.success("Record saved.")})).catch((function(e){t.loaded=1,console.log(e)}))})).catch((function(e){t.loaded=1,console.log(e)}))},updateData:function(){var t=this,e={_method:"PUT",form:this.form};this.loaded=0,o.D.updateAssignment(this.form.id,e).then((function(e){t.$router.push({name:"ManageAssignment"}).then((function(e){t.loaded=1,t.$toast.success("Record saved.")})).catch((function(e){t.loaded=1,console.log(e)}))})).catch((function(e){t.loaded=1,console.log(e)}))}},watch:{image:function(t){this.form.image_id=t},"form.section_id":function(t){this.fetchSubjectBySection(t)}}},n=(a(355),a(0)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewPage"}}},[t._v("View Page")])],1),t._v(" "),a("h3",[t._v("Issue Assignment")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"AssignmentMaster"}}},[t._v("Assignment Master")])],1),t._v(" "),a("li",[t._v("Issue Assignment")])])]),t._v(" "),a("b-row",[a("b-col",{attrs:{sm:"8"}},[a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),t._v(" "),t.loaded?a("div",[a("form",{staticClass:"new-added-form",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){e.preventDefault(),t.form.id?t.updateData():t.addData()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Name *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Class *")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.section_id,expression:"form.section_id"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"section_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Class")]),t._v(" "),t._l(t.classes,(function(e,o){return a("optgroup",{key:o,attrs:{label:o}},t._l(e,(function(e,s){return a("option",{key:s,domProps:{value:s}},[t._v("\n                          "+t._s(o)+" - "+t._s(e)+"\n                        ")])})),0)}))],2)]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Subject *")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.subject_id,expression:"form.subject_id"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"subject_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Subject")]),t._v(" "),t._l(t.subjects,(function(e,o){return a("option",{key:o,domProps:{value:o}},[t._v("\n                        "+t._s(e)+"\n                      ")])}))],2)]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Description")]),t._v(" "),a("editor",{attrs:{init:t.editor_options},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 form-group mg-t-8"},[a("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[t._v("\n                    "+t._s(t.form.id?"Update":"Save")+"\n                  ")]),t._v(" "),a("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[t._v("\n                    Reset\n                  ")])])])])]):t._e()])])]),t._v(" "),a("b-col",{attrs:{sm:"4"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"mb-3"},[a("label",[t._v("Attachment")]),t._v(" "),a("input",{staticClass:"d-block",attrs:{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx"},on:{change:t.handleAttachment}})]),t._v(" "),t.form.attachment_full_url?a("div",{staticClass:"mt-1"},[a("a",{attrs:{href:t.form.attachment_full_url,target:"_blank"}},[t._v("\n              View / Download\n            ")])]):t._e()])])])],1)],1)}),[],!1,null,null,null);e.default=i.exports},55:function(t,e,a){var o=a(356);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(8)(o,s);o.locals&&(t.exports=o.locals)}}]);
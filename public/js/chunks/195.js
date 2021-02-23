(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{434:function(t,e,s){"use strict";s.r(e);var a=s(4),l={data:function(){return{errors:0,lists:{},allSelected:0,check:[],s:"",allClasses:[],classes:[],loaded:0,subjectId:"",token:localStorage.getItem("token")}},mounted:function(){this.getRecords(),this.getAllClasses()},methods:{searchAfterDebounce:s.n(a).a.debounce((function(){this.searchData()}),500),checkAll:function(){var t=this;t.check=[],t.allSelected||$.each(t.lists.data,(function(e,s){t.check.push(s.id)}))},assignClass:function(){var t=this,e=this.classes,s=this.subjectId;this.loaded=0;var a={classes:e,subjectId:s};axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("assign-subject-class",a).then((function(e){t.loaded=1,$("#classModal").modal("hide"),t.getRecords(1)}))},showClassPop:function(t,e){this.subjectId=t;var s=[];$(e).each((function(t,e){s.push(e.class)})),this.classes=s,$("#classModal").modal("show")},getAllClasses:function(){var t=this;this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-all-classes").then((function(e){t.loaded=1,t.allClasses=e.data}))},searchData:function(t){var e=this,s=this.s;void 0===t&&(t=1),this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("search-subject/?page="+t+"&s="+s).then((function(t){e.loaded=1,t.status?e.lists=t.data.data:e.errors=1})).catch((function(t){e.loaded=1,console.log(t)}))},getRecords:function(t){var e=this;void 0===t&&(t=1),axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("view-subject/?page="+t).then((function(t){e.loaded=1,t.status?e.lists=t.data.data:e.errors=1})).catch((function(t){e.loaded=1,console.log(t)}))},deleteRecord:function(){var t=this,e={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(s){s&&(t.loaded=0,axios.create({baseURL:t.apiBaseUrl,headers:{Authorization:"Bearer "+t.token,Accept:"application/json"}}).post("remove-subject",e).then((function(e){e.status?(t.getRecords(),t.$toast.success("Selected record(s) has been deleted.")):(t.loaded=1,t.$toast.warning("Record(s) unable to delete."))})).catch((function(e){t.loaded=1,console.log(e)})))}))}},watch:{s:function(t){this.searchAfterDebounce()}}},c=s(0),i=Object(c.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-content-one"},[s("div",{staticClass:"breadcrumbs-area"},[s("div",{staticClass:"float-right"},[s("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"add-subject"}}},[t._v("Add New")])],1),t._v(" "),s("h3",[t._v("Subject")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),s("li",[t._v("Subject")])])]),t._v(" "),s("div",{staticClass:"mg-b-20"},[s("div",{staticClass:"row gutters-8"},[s("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.s,expression:"s"}],staticClass:"form-control bg-white",attrs:{type:"text",placeholder:"Search ..."},domProps:{value:t.s},on:{input:function(e){e.target.composing||(t.s=e.target.value)}}})])])]),t._v(" "),s("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.deleteRecord()}}},[s("div",{staticClass:"card height-auto"},[s("div",{staticClass:"card-body"},[t.loaded?t._e():s("div",{staticClass:"text-center"},[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),t._v(" "),t.loaded?s("div",[t._m(0),t._v(" "),t.lists?t._e():s("div",{staticClass:"alert alert-warning"},[s("i",{staticClass:"fa fa-exclamation-circle"}),t._v("\n                        No record(s) found.\n                    ")]),t._v(" "),t.lists?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table display data-table text-nowrap"},[s("thead",[s("tr",[s("th",[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.allSelected,expression:"allSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allSelected)?t._i(t.allSelected,null)>-1:t.allSelected},on:{click:function(e){return t.checkAll()},change:function(e){var s=t.allSelected,a=e.target,l=!!a.checked;if(Array.isArray(s)){var c=t._i(s,null);a.checked?c<0&&(t.allSelected=s.concat([null])):c>-1&&(t.allSelected=s.slice(0,c).concat(s.slice(c+1)))}else t.allSelected=l}}}),t._v(" "),s("label",{staticClass:"form-check-label"},[t._v("Sr. No.")])])]),t._v(" "),s("th",[t._v("Subject Name")]),t._v(" "),s("th",[t._v("Classes")])])]),t._v(" "),s("tbody",t._l(t.lists.data,(function(e,a){return s("tr",[s("td",[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"check"}],key:t.lists.from+a,staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.check)?t._i(t.check,e.id)>-1:t.check},on:{change:function(s){var a=t.check,l=s.target,c=!!l.checked;if(Array.isArray(a)){var i=e.id,o=t._i(a,i);l.checked?o<0&&(t.check=a.concat([i])):o>-1&&(t.check=a.slice(0,o).concat(a.slice(o+1)))}else t.check=c}}}),t._v(" "),s("label",{staticClass:"form-check-label"},[t._v(t._s(t.lists.from+a)+".")])])]),t._v(" "),s("td",[s("router-link",{attrs:{to:{path:"edit-subject/"+e.id,params:e},"data-toggle":"tooltip",title:"Edit"}},[s("i",{staticClass:"fa fa-edit"}),t._v(" "+t._s(e.name))])],1),t._v(" "),s("td",[e.classes?s("ol",{staticClass:"m-0 p-0",staticStyle:{"list-style":"inside decimal"}},t._l(e.classes,(function(e,a){return s("li",[t._v(t._s(e.cls.name)+" - "+t._s(e.cls.dept.dept_name))])})),0):t._e(),t._v(" "),s("button",{staticClass:"btn btn-primary addClassBtn",attrs:{type:"button"},on:{click:function(s){return t.showClassPop(e.id,e.classes)}}},[t._v("Add Class")])])])})),0)]),t._v(" "),s("pagination",{attrs:{data:t.lists},on:{"pagination-change-page":t.getRecords}})],1):t._e()]):t._e()])])]),t._v(" "),s("div",{staticClass:"modal align-middle fade",attrs:{id:"classModal"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subjectId,expression:"subjectId"}],attrs:{type:"hidden"},domProps:{value:t.subjectId},on:{input:function(e){e.target.composing||(t.subjectId=e.target.value)}}}),t._v(" "),s("ul",{staticClass:"list-item-group"},t._l(t.allClasses,(function(e){return s("li",{staticClass:"list-item"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.classes,expression:"classes"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.classes)?t._i(t.classes,e.id)>-1:t.classes},on:{change:function(s){var a=t.classes,l=s.target,c=!!l.checked;if(Array.isArray(a)){var i=e.id,o=t._i(a,i);l.checked?o<0&&(t.classes=a.concat([i])):o>-1&&(t.classes=a.slice(0,o).concat(a.slice(o+1)))}else t.classes=c}}}),t._v("\n                                "+t._s(e.name)+" ("+t._s(e.dept.dept_name)+")\n                            ")])])})),0)]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.assignClass()}}},[t._v("Submit")]),t._v(" "),s("button",{staticClass:"btn btn-info",attrs:{"data-dismiss":"modal"}},[t._v("Close")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading-layout1"},[e("div",{staticClass:"item-title"},[e("h3",[this._v("All Subject Data")])]),this._v(" "),e("button",{staticClass:"btn btn-link text-dark removeBtn",attrs:{type:"submit","data-toggle":"tooltip",title:"Remove"}},[e("i",{staticClass:"fa fa-trash fa-2x"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("Assign Classes")]),this._v(" "),e("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[this._v("×")])])}],!1,null,null,null);e.default=i.exports}}]);
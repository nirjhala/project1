(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{532:function(e,t,a){"use strict";a.r(t);var s=a(4),c=a.n(s),i=a(2),r=a(1),l={data:function(){return{name:"",errors:0,lists:{},allSelected:0,check:[],s:"",allClasses:[],classes:[],custom_fields:[],loaded:0,subjectId:"",search:{s:""},custom_field:{},success:null,states:[],cities:[],token:localStorage.getItem("token")}},validations:function(){return{name:{required:i.required}}},mounted:function(){this.routeLoading()},methods:{searchAfterDebounce:c.a.debounce((function(){this.getRecords()}),500),routeLoading:function(){this.getRecords()},saveData:function(){var e=this;if(this.$v.$touch(),this.success="",!this.$v.$anyError){var t={name:this.name};(this.$route.params.id?Object(r.M)(this.$route.params.id,t):Object(r.i)(t)).then((function(t){e.success=t.data.message,e.name="",e.$v.$reset(),e.$route.params.id&&e.$router.push({name:"ExamType"}),e.getRecords(1)})).catch((function(e){console.log("Errors: ",e)}))}},checkAll:function(){var e=this;e.check=[],e.allSelected||$.each(e.lists.data,(function(t,a){e.check.push(a.id)}))},getRecords:function(e){var t=this;this.$route.params.id&&Object(r.Kb)(this.$route.params.id).then((function(e){t.name=e.data.name})),void 0===e&&(e=1),this.loaded=0,Object(r.pc)("page=".concat(e,"&search=").concat(this.search.s)).then((function(e){t.lists=e.data.types,t.loaded=1})).catch((function(e){t.loaded=1,console.log(e)}))},resetSearch:function(){this.search={s:""},this.getRecords()},deleteRecord:function(){var e=this,t={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a&&(e.loaded=0,Object(r.xb)(t).then((function(t){e.getRecords(),e.$toast.success("Selected record(s) has been deleted.")})).catch((function(t){e.loaded=1,console.log(t)})))}))}},watch:{"search.s":function(){this.searchAfterDebounce()},"$route.params.id":function(){this.routeLoading()}}},o=a(0),n=Object(o.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-content-one",staticStyle:{"text-transform":"capitialize"}},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[e._v("Exam Type")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"ExamMaster"}}},[e._v("Exam Master")])],1),e._v(" "),a("li",[e._v("Exam Type")])])]),e._v(" "),e.success?a("div",{staticClass:"alert alert-success"},[e._v(e._s(e.success))]):e._e(),e._v(" "),a("b-card",{staticClass:"h-auto",scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n            "+e._s(e.$route.params.id?"Edit":"Add")+" Exam Type\n        ")]},proxy:!0}])},[e._v(" "),a("b-form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.saveData(t)}}},[a("b-row",[a("b-form-group",{staticClass:"col-sm-3",attrs:{label:"Name *"}},[a("b-input",{class:{"is-invalid":e.$v.name.$error},attrs:{placeholder:"Enter Name *"},model:{value:e.$v.name.$model,callback:function(t){e.$set(e.$v.name,"$model","string"==typeof t?t.trim():t)},expression:"$v.name.$model"}}),e._v(" "),a("b-form-invalid-feedback",[e._v("Please fill required field.")])],1),e._v(" "),a("b-form-group",{staticClass:"col-sm-3 col-lg-2"},[a("label",{attrs:{for:""}},[e._v("??")]),e._v(" "),a("b-button",{staticClass:"fw-btn-fill btn-gradient-yellow text-white router-link-active",attrs:{type:"submit",block:""}},[e._v(e._s(e.$route.params.id?"Update":"Save"))])],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"mg-b-20"},[a("div",{staticClass:"row gutters-8"},[a("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.search.s,expression:"search.s",modifiers:{trim:!0}}],staticClass:"form-control bg-white",attrs:{type:"search",placeholder:"Search ..."},domProps:{value:e.search.s},on:{input:function(t){t.target.composing||e.$set(e.search,"s",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])]),e._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.deleteRecord()}}},[a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[e.loaded?e._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),e._v(" "),e.loaded?a("div",[e.lists.data&&e.lists.data.length?e._e():a("div",{staticClass:"alert alert-warning"},[a("i",{staticClass:"fa fa-exclamation-circle"}),e._v("\n                        No record(s) found.\n                    ")]),e._v(" "),e.lists.data&&e.lists.data.length?a("div",[a("div",{staticClass:"heading-layout1"},[a("div",{staticClass:"item-title"},[e._v("\n                                "+e._s(e.lists.from)+" - "+e._s(e.lists.to)+" of "+e._s(e.lists.total)+" record(s) are showing\n                            ")]),e._v(" "),e._m(0)]),e._v(" "),e.lists?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table display data-table text-nowrap"},[a("thead",[a("tr",[a("th",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.allSelected,expression:"allSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allSelected)?e._i(e.allSelected,null)>-1:e.allSelected},on:{click:function(t){return e.checkAll()},change:function(t){var a=e.allSelected,s=t.target,c=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&(e.allSelected=a.concat([null])):i>-1&&(e.allSelected=a.slice(0,i).concat(a.slice(i+1)))}else e.allSelected=c}}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v("Sr. No.")])])]),e._v(" "),a("th",[e._v("Name")])])]),e._v(" "),a("tbody",e._l(e.lists.data,(function(t,s){return a("tr",{key:s},[a("td",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.check,expression:"check"}],key:e.lists.from+s,staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.check)?e._i(e.check,t.id)>-1:e.check},on:{change:function(a){var s=e.check,c=a.target,i=!!c.checked;if(Array.isArray(s)){var r=t.id,l=e._i(s,r);c.checked?l<0&&(e.check=s.concat([r])):l>-1&&(e.check=s.slice(0,l).concat(s.slice(l+1)))}else e.check=i}}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v(e._s(e.lists.from+s)+".")])])]),e._v(" "),a("td",[a("router-link",{attrs:{to:{name:"EditExamType",params:{id:t.id,type:t.type}},"data-toggle":"tooltip",title:"Edit"}},[a("i",{staticClass:"fa fa-edit"}),e._v(" \n                                                "+e._s(t.name)+"\n                                            ")])],1)])})),0)]),e._v(" "),a("pagination",{attrs:{data:e.lists},on:{"pagination-change-page":e.getRecords}})],1):e._e()]):e._e()]):e._e()])])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"btn btn-link text-dark removeBtn",attrs:{type:"submit","data-toggle":"tooltip",title:"Remove"}},[t("i",{staticClass:"fa fa-trash fa-2x"})])}],!1,null,null,null);t.default=n.exports}}]);
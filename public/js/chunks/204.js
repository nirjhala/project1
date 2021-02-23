(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{551:function(e,t,a){"use strict";a.r(t);var s=a(4),l={data:function(){return{errors:0,lists:{},allSelected:0,check:[],s:"",loaded:0,token:localStorage.getItem("token"),role:JSON.parse(localStorage.getItem("user_info")).role_name.name}},mounted:function(){this.getRecords()},methods:{searchAfterDebounce:a.n(s).a.debounce((function(){console.log("search",this.s),this.getRecords()}),500),checkAll:function(){var e=this;e.check=[],e.allSelected||$.each(e.lists.data,(function(t,a){e.check.push(a.id)}))},getRecords:function(e){var t=this;this.loaded=0,void 0===e&&(e=1);var a=axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}),s="complain?page="+e;this.s&&(s+="&s="+this.s),a.get(s).then((function(e){t.loaded=1,e.status?t.lists=e.data:t.errors=1})).catch((function(e){t.loaded=1,console.log(e)}))},deleteRecord:function(){var e=this,t={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a&&(e.loaded=0,axios.create({baseURL:e.apiBaseUrl,headers:{Authorization:"Bearer "+e.token,Accept:"application/json"}}).post("complain/remove",t).then((function(t){t.status?(e.getRecords(),e.$toast.success("Selected record(s) has been deleted.")):(e.loaded=1,e.$toast.warning("Record(s) unable to delete."))})).catch((function(t){e.loaded=1,console.log(t)})))}))}},watch:{s:function(e){this.searchAfterDebounce()}}},c=a(0),i=Object(c.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"add-complain"}}},[e._v("Add New")])],1),e._v(" "),a("h3",[e._v("Complain")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),a("li",[e._v("Complain")])])]),e._v(" "),a("div",{staticClass:"mg-b-20"},[a("div",{staticClass:"row gutters-8"},[a("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.s,expression:"s"}],staticClass:"form-control bg-white",attrs:{type:"search",placeholder:"Search ..."},domProps:{value:e.s},on:{input:function(t){t.target.composing||(e.s=t.target.value)}}})])])]),e._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.deleteRecord()}}},[a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[e.loaded?e._e():a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/img/preloader.gif",alt:""}})]),e._v(" "),e.loaded?a("div",[e._m(0),e._v(" "),e.lists.data&&e.lists.data.length?e._e():a("div",{staticClass:"alert alert-warning"},[a("i",{staticClass:"fa fa-exclamation-circle"}),e._v("\n                        No record(s) found.\n                    ")]),e._v(" "),e.lists.data&&e.lists.data.length?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table display data-table text-nowrap"},[a("thead",[a("tr",[a("th",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.allSelected,expression:"allSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allSelected)?e._i(e.allSelected,null)>-1:e.allSelected},on:{click:function(t){return e.checkAll()},change:function(t){var a=e.allSelected,s=t.target,l=!!s.checked;if(Array.isArray(a)){var c=e._i(a,null);s.checked?c<0&&(e.allSelected=a.concat([null])):c>-1&&(e.allSelected=a.slice(0,c).concat(a.slice(c+1)))}else e.allSelected=l}}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v("Sr. No.")])])]),e._v(" "),a("th",[e._v("Subject")]),e._v(" "),"School"==e.role?a("th",[e._v("User")]):e._e(),e._v(" "),a("th",[e._v("Against")]),e._v(" "),e._m(1),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Remarks")]),e._v(" "),a("th",[e._v("Created At")])])]),e._v(" "),a("tbody",e._l(e.lists.data,(function(t,s){return a("tr",{key:s},[a("td",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.check,expression:"check"}],key:e.lists.from+s,staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.check)?e._i(e.check,t.id)>-1:e.check},on:{change:function(a){var s=e.check,l=a.target,c=!!l.checked;if(Array.isArray(s)){var i=t.id,o=e._i(s,i);l.checked?o<0&&(e.check=s.concat([i])):o>-1&&(e.check=s.slice(0,o).concat(s.slice(o+1)))}else e.check=c}}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v(e._s(e.lists.from+s)+".")])])]),e._v(" "),a("td",[a("router-link",{attrs:{to:{name:"edit-complain",params:{id:t.id}},"data-toggle":"tooltip",title:"Edit"}},[a("i",{staticClass:"fa fa-edit"}),e._v(" "+e._s(t.subject))])],1),e._v(" "),"School"==e.role?a("th",[e._v("\n                                        "+e._s(t.user.name)),a("br"),e._v(" "),a("small",[e._v("("+e._s(t.user.mobile)+", "+e._s(t.user.role_name.name)+")")])]):e._e(),e._v(" "),a("td",[e._v(e._s(t.against))]),e._v(" "),a("td",[e._v(e._s(t.teacher?t.teacher.name:"N/A"))]),e._v(" "),a("td",[e._v(e._s(t.type))]),e._v(" "),a("td",[e._v(e._s(t.remarks))]),e._v(" "),a("td",[e._v(e._s(t.created_at))])])})),0)]),e._v(" "),a("pagination",{attrs:{data:e.lists},on:{"pagination-change-page":e.getRecords}})],1):e._e()]):e._e()])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"heading-layout1"},[t("div",{staticClass:"item-title"},[t("h3",[this._v("All Complain Data")])]),this._v(" "),t("button",{staticClass:"btn btn-link text-dark removeBtn",attrs:{type:"submit","data-toggle":"tooltip",title:"Remove"}},[t("i",{staticClass:"fa fa-trash fa-2x"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("th",[this._v("Teacher Name "),t("small",[this._v("(If exists)")])])}],!1,null,null,null);t.default=i.exports}}]);
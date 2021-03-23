(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{518:function(e,t,a){"use strict";a.r(t);var s={data:function(){return{errors:0,lists:{},allSelected:0,check:[],s:"",loaded:0,token:localStorage.getItem("token")}},mounted:function(){this.getRecords()},methods:{searchAfterDebounce:_.debounce((function(){this.searchData()}),500),checkAll:function(){var e=this;e.check=[],e.allSelected||$.each(e.lists.data,(function(t,a){e.check.push(a.id)}))},searchData:function(e){var t=this,a=this.s;void 0===e&&(e=1),this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("fees-type/?page="+e+"&s="+a).then((function(e){t.loaded=1,e.status?t.lists=e.data.data:t.errors=1})).catch((function(e){t.loaded=1,console.log(e)}))},getRecords:function(e){var t=this;void 0===e&&(e=1),axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("fees-type/?page="+e).then((function(e){t.loaded=1,t.lists=e.data.data})).catch((function(e){t.loaded=1,console.log(e)}))},deleteRecord:function(){var e=this,t={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a&&(e.loaded=0,axios.create({baseURL:e.apiBaseUrl,headers:{Authorization:"Bearer "+e.token,Accept:"application/json"}}).post("fees-type/remove",t).then((function(t){t.status?(e.getRecords(),e.$toast.success("Selected record(s) has been deleted.")):(e.loaded=1,e.$toast.warning("Record(s) unable to delete."))})).catch((function(t){e.loaded=1,console.log(t)})))}))}},watch:{s:function(e){this.searchAfterDebounce()}}},c=a(0),l=Object(c.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"add-fees-type"}}},[e._v("Add New")])],1),e._v(" "),a("h3",[e._v("Fee Type")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"FeeMaster"}}},[e._v("Fees Management")])],1),e._v(" "),a("li",[e._v("Fee Type")])])]),e._v(" "),a("div",{staticClass:"mg-b-20"},[a("div",{staticClass:"row gutters-8"},[a("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.s,expression:"s"}],staticClass:"form-control bg-white",attrs:{type:"search",placeholder:"Search ..."},domProps:{value:e.s},on:{input:function(t){t.target.composing||(e.s=t.target.value)}}})])])]),e._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.deleteRecord()}}},[a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[e.loaded?e._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),e._v(" "),e.loaded?a("div",[e._m(0),e._v(" "),e.lists.data?e._e():a("div",{staticClass:"alert alert-warning"},[a("i",{staticClass:"fa fa-exclamation-circle"}),e._v("\n            No record(s) found.\n          ")]),e._v(" "),e.lists.data?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table display data-table text-nowrap"},[a("thead",[a("tr",[a("th",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.allSelected,expression:"allSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allSelected)?e._i(e.allSelected,null)>-1:e.allSelected},on:{click:function(t){return e.checkAll()},change:function(t){var a=e.allSelected,s=t.target,c=!!s.checked;if(Array.isArray(a)){var l=e._i(a,null);s.checked?l<0&&(e.allSelected=a.concat([null])):l>-1&&(e.allSelected=a.slice(0,l).concat(a.slice(l+1)))}else e.allSelected=c}}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v("Sr. No.")])])]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Installment Availability")]),e._v(" "),a("th",[e._v("Applied On")])])]),e._v(" "),a("tbody",e._l(e.lists.data,(function(t,s){return a("tr",{key:s},[a("td",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.check,expression:"check"}],key:s,staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.check)?e._i(e.check,t.id)>-1:e.check},on:{change:function(a){var s=e.check,c=a.target,l=!!c.checked;if(Array.isArray(s)){var i=t.id,o=e._i(s,i);c.checked?o<0&&(e.check=s.concat([i])):o>-1&&(e.check=s.slice(0,o).concat(s.slice(o+1)))}else e.check=l}}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v(e._s(e.lists.from+s)+".")])])]),e._v(" "),a("td",[a("router-link",{attrs:{to:{path:"edit-fees-type/"+t.id,params:t},"data-toggle":"tooltip",title:"Edit"}},[a("i",{staticClass:"fa fa-edit"}),e._v(" "+e._s(t.name))])],1),e._v(" "),a("td",[e._v("\n                    "+e._s(t.installment_availability?"Yes":"No")+"\n                  ")]),e._v(" "),a("td",{staticClass:"text-capitalize"},[e._v("\n                    "+e._s(t.fees_for)+" Students\n                  ")])])})),0)]),e._v(" "),a("pagination",{attrs:{data:e.lists},on:{"pagination-change-page":e.getRecords}})],1):e._e()]):e._e()])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"heading-layout1"},[t("div",{staticClass:"item-title"},[t("h3",[this._v("All Fee Type Data")])]),this._v(" "),t("button",{staticClass:"btn btn-link text-dark removeBtn",attrs:{type:"submit","data-toggle":"tooltip",title:"Remove"}},[t("i",{staticClass:"fa fa-trash fa-2x"})])])}],!1,null,null,null);t.default=l.exports}}]);
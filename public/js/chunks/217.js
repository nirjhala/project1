(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{613:function(t,e,a){"use strict";a.r(e);var s=a(4),c={data:function(){return{errors:0,lists:{},allSelected:0,check:[],s:"",loaded:0,token:localStorage.getItem("token")}},mounted:function(){this.getRecords()},methods:{searchAfterDebounce:a.n(s).a.debounce((function(){this.searchData()}),500),checkAll:function(){var t=this;t.check=[],t.allSelected||$.each(t.lists.data,(function(e,a){t.check.push(a.id)}))},searchData:function(t){var e=this,a=this.s;void 0===t&&(t=1),this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("search-hostel/?page="+t+"&s="+a).then((function(t){e.loaded=1,t.status?e.lists=t.data.data:e.errors=1})).catch((function(t){e.loaded=1,console.log(t)}))},getRecords:function(t){var e=this;void 0===t&&(t=1),axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("view-hostel/?page="+t).then((function(t){e.loaded=1,t.status?e.lists=t.data.data:e.errors=1})).catch((function(t){e.loaded=1,console.log(t)}))},deleteRecord:function(){var t=this,e={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a&&(t.loaded=0,axios.create({baseURL:t.apiBaseUrl,headers:{Authorization:"Bearer "+t.token,Accept:"application/json"}}).post("remove-hostel",e).then((function(e){e.status?(t.getRecords(),t.$toast.success("Selected record(s) has been deleted.")):(t.loaded=1,t.$toast.warning("Record(s) unable to delete."))})).catch((function(e){t.loaded=1,console.log(e)})))}))}},watch:{s:function(t){this.searchAfterDebounce()}}},i=a(0),l=Object(i.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"add-hostel"}}},[t._v("Add New")])],1),t._v(" "),a("h3",[t._v("Hostel")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Hostel")])])]),t._v(" "),a("div",{staticClass:"mg-b-20"},[a("div",{staticClass:"row gutters-8"},[a("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.s,expression:"s"}],staticClass:"form-control bg-white",attrs:{type:"search",placeholder:"Search ..."},domProps:{value:t.s},on:{input:function(e){e.target.composing||(t.s=e.target.value)}}})])])]),t._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.deleteRecord()}}},[a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),t._v(" "),t.loaded?a("div",[t._m(0),t._v(" "),t.lists?t._e():a("div",{staticClass:"alert alert-warning"},[a("i",{staticClass:"fa fa-exclamation-circle"}),t._v("\n            No record(s) found.\n          ")]),t._v(" "),t.lists?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table display data-table text-nowrap"},[a("thead",[a("tr",[a("th",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.allSelected,expression:"allSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allSelected)?t._i(t.allSelected,null)>-1:t.allSelected},on:{click:function(e){return t.checkAll()},change:function(e){var a=t.allSelected,s=e.target,c=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.allSelected=a.concat([null])):i>-1&&(t.allSelected=a.slice(0,i).concat(a.slice(i+1)))}else t.allSelected=c}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("Sr. No.")])])]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Total Rooms")]),t._v(" "),t._m(1),t._v(" "),a("th",[t._v("Capacity")]),t._v(" "),a("th",[t._v("Address")]),t._v(" "),a("th",[t._v("State")]),t._v(" "),a("th",[t._v("City")]),t._v(" "),a("th",[t._v("Pincode")])])]),t._v(" "),a("tbody",t._l(t.lists.data,(function(e,s){return a("tr",{key:s},[a("td",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"check"}],key:t.lists.from+s,staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.check)?t._i(t.check,e.id)>-1:t.check},on:{change:function(a){var s=t.check,c=a.target,i=!!c.checked;if(Array.isArray(s)){var l=e.id,o=t._i(s,l);c.checked?o<0&&(t.check=s.concat([l])):o>-1&&(t.check=s.slice(0,o).concat(s.slice(o+1)))}else t.check=i}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v(t._s(t.lists.from+s)+".")])])]),t._v(" "),a("td",[a("router-link",{attrs:{to:{path:"edit-hostel/"+e.id,params:e},"data-toggle":"tooltip",title:"Edit"}},[a("i",{staticClass:"fa fa-edit"}),t._v(" "+t._s(e.name))])],1),t._v(" "),a("td",[t._v(t._s(e.total_rooms))]),t._v(" "),a("td",[t._v("Rs. "+t._s(e.cost))]),t._v(" "),a("td",[t._v(t._s(e.capacity))]),t._v(" "),a("td",[t._v(t._s(e.address))]),t._v(" "),a("td",[e.city_name&&e.city_name.state_name?a("span",[t._v(t._s(e.city_name.state_name.name))]):t._e()]),t._v(" "),a("td",[e.city_name?a("span",[t._v(t._s(e.city_name.name))]):t._e()]),t._v(" "),a("td",[a("span",[t._v(t._s(e.pincode))])])])})),0)]),t._v(" "),a("pagination",{attrs:{data:t.lists},on:{"pagination-change-page":t.getRecords}})],1):t._e()]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading-layout1"},[e("div",{staticClass:"item-title"},[e("h3",[this._v("All Hostel Data")])]),this._v(" "),e("button",{staticClass:"btn btn-link text-dark removeBtn",attrs:{type:"submit","data-toggle":"tooltip",title:"Remove"}},[e("i",{staticClass:"fa fa-trash fa-2x"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[this._v("Cost "),e("small",[this._v("(per yr.)")])])}],!1,null,null,null);e.default=l.exports}}]);
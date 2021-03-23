(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{29:function(t,e,a){"use strict";a.d(e,"e",(function(){return c})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return r}));var s=a(5),c=function(t){return Object(s.a)("get","view-timeslot/?".concat(t))},i=function(t){return Object(s.a)("post","remove-timeslot",t)},l=function(t){return Object(s.a)("get","get-timeslot-info/".concat(t))},n=function(t){return Object(s.a)("post","add-timeslot",t)},r=function(t){return Object(s.a)("post","update-timeslot",t)}},488:function(t,e,a){"use strict";a.r(e);var s=a(4),c=a.n(s),i=a(29),l={components:{Breadcrumbs:a(9).a},data:function(){return{title:"View Timeslot",b_items:[{target:{name:"dashboard"},title:"Dashboard"},{target:{name:"master"},title:"Master"}],errors:0,lists:{},allSelected:0,check:[],s:"",allClasses:[],classes:[],loaded:0,subjectId:""}},mounted:function(){this.getRecords()},methods:{searchAfterDebounce:c.a.debounce((function(){this.getRecords()}),500),checkAll:function(){var t=this;t.check=[],t.allSelected||$.each(t.lists.data,(function(e,a){t.check.push(a.id)}))},getRecords:function(t){var e=this;void 0===t&&(t=1),this.loaded=0,Object(i.e)("page=".concat(t,"&s=").concat(this.s)).then((function(t){e.loaded=1,t.status?e.lists=t.data.data:e.errors=1})).catch((function(t){e.loaded=1,console.log(t)}))},deleteRecord:function(){var t=this,e={check:this.check};if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a&&(t.loaded=0,Object(i.b)(e).then((function(e){e.status?(t.getRecords(),t.$toast.success("Selected record(s) has been deleted.")):(t.loaded=1,t.$toast.warning("Record(s) unable to delete."))})).catch((function(e){t.loaded=1,console.log(e)})))}))}},watch:{s:function(t){this.searchAfterDebounce()}}},n=a(0),r=Object(n.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("breadcrumbs",{attrs:{items:t.b_items,title:t.title,btn:{target:{name:"add-timeslot"},label:"Add New Timeslot"}}}),t._v(" "),a("div",{staticClass:"mg-b-20"},[a("div",{staticClass:"row gutters-8"},[a("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.s,expression:"s"}],staticClass:"form-control bg-white",attrs:{type:"text",placeholder:"Search ..."},domProps:{value:t.s},on:{input:function(e){e.target.composing||(t.s=e.target.value)}}})])])]),t._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.deleteRecord()}}},[a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),t._v(" "),t.loaded?a("div",[t._m(0),t._v(" "),t.lists?t._e():a("div",{staticClass:"alert alert-warning"},[a("i",{staticClass:"fa fa-exclamation-circle"}),t._v("\n            No record(s) found.\n          ")]),t._v(" "),t.lists?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table display data-table text-nowrap"},[a("thead",[a("tr",[a("th",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.allSelected,expression:"allSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allSelected)?t._i(t.allSelected,null)>-1:t.allSelected},on:{click:t.checkAll,change:function(e){var a=t.allSelected,s=e.target,c=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.allSelected=a.concat([null])):i>-1&&(t.allSelected=a.slice(0,i).concat(a.slice(i+1)))}else t.allSelected=c}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("Sr. No.")])])]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Time Start")]),t._v(" "),a("th",[t._v("Time End")]),t._v(" "),a("th",[t._v("Shift")])])]),t._v(" "),a("tbody",t._l(t.lists.data,(function(e,s){return a("tr",{key:s},[a("td",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"check"}],key:t.lists.from+s,staticClass:"form-check-input check",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.check)?t._i(t.check,e.id)>-1:t.check},on:{change:function(a){var s=t.check,c=a.target,i=!!c.checked;if(Array.isArray(s)){var l=e.id,n=t._i(s,l);c.checked?n<0&&(t.check=s.concat([l])):n>-1&&(t.check=s.slice(0,n).concat(s.slice(n+1)))}else t.check=i}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v(t._s(t.lists.from+s)+".")])])]),t._v(" "),a("td",[a("router-link",{attrs:{to:{path:"edit-timeslot/"+e.id,params:e},"data-toggle":"tooltip",title:"Edit"}},[a("i",{staticClass:"fa fa-edit"}),t._v(" "+t._s(e.name))])],1),t._v(" "),a("td",[t._v(t._s(e.time_start))]),t._v(" "),a("td",[t._v(t._s(e.time_end))]),t._v(" "),a("td",[t._v(t._s(e.shift.shift_name))])])})),0)]),t._v(" "),a("pagination",{attrs:{data:t.lists},on:{"pagination-change-page":t.getRecords}})],1):t._e()]):t._e()])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading-layout1"},[e("div",{staticClass:"item-title"},[e("h3",[this._v("All Timeslot Data")])]),this._v(" "),e("button",{staticClass:"btn btn-link text-dark removeBtn",attrs:{type:"submit","data-toggle":"tooltip",title:"Remove"}},[e("i",{staticClass:"fa fa-trash fa-2x"})])])}],!1,null,null,null);e.default=r.exports},5:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var s=axios.create({baseURL:"/api/",json:!0}),c=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i={Accept:"application/json",Authorization:null};if(c){var l=localStorage.getItem("token");i.Authorization="Bearer "+l}return s({method:t,url:e,data:a,headers:i})}},9:function(t,e,a){"use strict";var s={props:{title:String,items:Array,btn:Object}},c=a(0),i=Object(c.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[t.btn?a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:t.btn.target}},[t._v("\n      "+t._s(t.btn.label)+"\n    ")]):t._e()],1),t._v(" "),a("h3",[t._v(t._s(t.title))]),t._v(" "),a("ul",[t._l(t.items,(function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:e.target,title:e.title}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),t._v(" "),a("li",[t._v(t._s(t.title))])],2)])}),[],!1,null,null,null);e.a=i.exports}}]);
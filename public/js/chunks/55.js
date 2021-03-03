(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{560:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{id:"",record:{name:""},lists:{},allSelected:!1,check:[],errors:[],loaded:0,token:localStorage.getItem("token")}},mounted:function(){var t=this.$route.params;this.getData(),null!=t.id&&""!=t.id&&this.getInfo(t.id)},methods:{rerenderSelf:function(){console.log("reload"),this.$emit("rerender",1)},checkAll:function(){var t=this;t.check=[],t.allSelected||$.each(t.lists.data,(function(e,a){t.check.push(a.id)}))},getInfo:function(t){var e=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("book/category/info/"+t).then((function(t){e.id=t.data.id,e.record.name=t.data.name,e.loaded=1,$(".select2").each((function(){$(this).trigger("change")}))}))},addData:function(){var t=this,e=this.record;$("#addCategoryForm").is_valid()&&(this.loaded=0,this.errors=[],axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("book/category",e).then((function(e){t.loaded=1,e.data.status?(t.$toast.success(e.data.message),t.getData(1)):t.errors=e.data.errors})).catch((function(e){t.loaded=1,console.log(e)})))},updateData:function(t){var e=this,a=this.record;$("#addCategoryForm").is_valid()&&(this.loaded=0,this.errors=[],axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("book/category/edit/"+t,a).then((function(t){e.loaded=1,t.data.status?(e.record={name:""},e.$toast.success(t.data.message),e.$router.push({name:"book-category"})):e.errors=t.data.errors})).catch((function(t){e.loaded=1,console.log(t)})))},getData:function(t){var e=this;void 0===t&&(t=1),axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("book/category/?page="+t).then((function(t){e.loaded=1,e.lists=t.data})).catch((function(t){e.loaded=1}))},deleteRecord:function(){var t=this,e={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a&&(t.loaded=0,axios.create({baseURL:t.apiBaseUrl,headers:{Authorization:"Bearer "+t.token,Accept:"application/json"}}).post("book/category/remove",e).then((function(e){e.status?(t.getData(),t.$toast.success("Selected record(s) has been deleted.")):(t.loaded=1,t.$toast.warning("Record(s) unable to delete."))})).catch((function(e){t.loaded=1,console.log(e)})))}))}},watch:{$route:function(t,e){var a=this.$route.params;this.loaded=0,this.getData(),null!=a.id&&""!=a.id&&this.getInfo(a.id)}}},i=a(0),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Book Category")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Book Category")])])]),t._v(" "),t.loaded?a("div",[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.baseURL+"img/preloader.gif",alt:"Loading"}})]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("form",{staticClass:"new-added-form",attrs:{id:"addCategoryForm"},on:{submit:function(e){e.preventDefault(),t.id?t.updateData(t.id):t.addData()}}},[t.errors.length?a("div",{staticClass:"alert alert-danger"},[a("ul",{staticClass:"mb-0"},t._l(t.errors,(function(e,s){return a("li",{key:s},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"heading-layout1"},[a("div",{staticClass:"item-title"},[a("h3",[t._v(t._s(t.id?"Edit":"Add New")+" Category")])])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"hidden",value:""},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Name *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.record.name,expression:"record.name"}],staticClass:"form-control",attrs:{type:"text",value:"",placeholder:"Name",required:""},domProps:{value:t.record.name},on:{input:function(e){e.target.composing||t.$set(t.record,"name",e.target.value)}}})]),t._v(" "),t._m(0)])])])]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.deleteRecord()}}},[a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[a("div",[t._m(1),t._v(" "),t.loaded?t._e():a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),t._v(" "),t.loaded?a("div",[t.lists?t._e():a("div",{staticClass:"alert alert-warning"},[a("i",{staticClass:"fa fa-exclamation-circle"}),t._v("\r\n                                      No record(s) found.\r\n                                  ")]),t._v(" "),t.lists?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table display data-table text-nowrap"},[a("thead",[a("tr",[a("th",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.allSelected,expression:"allSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allSelected)?t._i(t.allSelected,null)>-1:t.allSelected},on:{click:t.checkAll,change:function(e){var a=t.allSelected,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o=t._i(a,null);s.checked?o<0&&(t.allSelected=a.concat([null])):o>-1&&(t.allSelected=a.slice(0,o).concat(a.slice(o+1)))}else t.allSelected=i}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("Sr. No.")])])]),t._v(" "),a("th",[t._v("Name")])])]),t._v(" "),a("tbody",t._l(t.lists.data,(function(e,s){return a("tr",[a("td",[e.classes_count?t._e():a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"check"}],key:t.lists.from+s,staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.check)?t._i(t.check,e.id)>-1:t.check},on:{change:function(a){var s=t.check,i=a.target,o=!!i.checked;if(Array.isArray(s)){var r=e.id,c=t._i(s,r);i.checked?c<0&&(t.check=s.concat([r])):c>-1&&(t.check=s.slice(0,c).concat(s.slice(c+1)))}else t.check=o}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v(t._s(t.lists.from+s)+".")])]),t._v(" "),e.classes_count?a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",disabled:""}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v(t._s(t.lists.from+s)+".")])]):t._e()]),t._v(" "),a("td",[a("router-link",{attrs:{to:{path:t.baseURL+"book-category/edit/"+e.id,params:e},"data-toggle":"tooltip",title:"Edit"},on:{click:t.rerenderSelf}},[a("i",{staticClass:"fa fa-edit"}),t._v(" "+t._s(e.name))]),t._v(" "),a("div",[a("small",[t._v("("+t._s(e.classes_count)+" books)")])])],1)])})),0)]),t._v(" "),a("pagination",{attrs:{data:t.lists},on:{"pagination-change-page":t.getData}})],1):t._e()]):t._e()])])])])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark btn-block",attrs:{type:"submit"}},[this._v("Save")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading-layout1"},[e("div",{staticClass:"item-title"},[e("h3",[this._v("All Book Categories")])]),this._v(" "),e("button",{staticClass:"btn btn-link text-dark removeBtn",attrs:{type:"submit","data-toggle":"tooltip",title:"Remove"}},[e("i",{staticClass:"fa fa-trash fa-2x"})])])}],!1,null,null,null);e.default=o.exports}}]);
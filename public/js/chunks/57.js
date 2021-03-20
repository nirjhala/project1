(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{593:function(e,t,a){"use strict";a.r(t);var s={data:function(){return{id:"",record:{name:""},lists:{},allSelected:!1,check:[],errors:[],loaded:0,token:localStorage.getItem("token")}},mounted:function(){var e=this.$route.params;this.getData(),null!=e.id&&""!=e.id&&this.getInfo(e.id)},methods:{rerenderSelf:function(){console.log("reload"),this.$emit("rerender",1)},checkAll:function(){var e=this;e.check=[],e.allSelected||$.each(e.lists.data,(function(t,a){e.check.push(a.id)}))},getInfo:function(e){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("book/category/info/"+e).then((function(e){t.id=e.data.id,t.record.name=e.data.name,t.loaded=1,$(".select2").each((function(){$(this).trigger("change")}))}))},addData:function(){var e=this,t=this.record;$("#addCategoryForm").is_valid()&&(this.loaded=0,this.errors=[],axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("book/category",t).then((function(t){e.loaded=1,t.data.status?(e.$toast.success(t.data.message),e.getData(1)):e.errors=t.data.errors})).catch((function(t){e.loaded=1,console.log(t)})))},updateData:function(e){var t=this,a=this.record;$("#addCategoryForm").is_valid()&&(this.loaded=0,this.errors=[],axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("book/category/edit/"+e,a).then((function(e){t.loaded=1,e.data.status?(t.record={name:""},t.$toast.success(e.data.message),t.$router.push({name:"book-category"})):t.errors=e.data.errors})).catch((function(e){t.loaded=1,console.log(e)})))},getData:function(e){var t=this;void 0===e&&(e=1),axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("book/category/?page="+e).then((function(e){t.loaded=1,t.lists=e.data})).catch((function(e){t.loaded=1}))},deleteRecord:function(){var e=this,t={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a&&(e.loaded=0,axios.create({baseURL:e.apiBaseUrl,headers:{Authorization:"Bearer "+e.token,Accept:"application/json"}}).post("book/category/remove",t).then((function(t){t.status?(e.getData(),e.$toast.success("Selected record(s) has been deleted.")):(e.loaded=1,e.$toast.warning("Record(s) unable to delete."))})).catch((function(t){e.loaded=1,console.log(t)})))}))}},watch:{$route:function(e,t){var a=this.$route.params;this.loaded=0,this.getData(),null!=a.id&&""!=a.id&&this.getInfo(a.id)}}},i=a(0),o=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[e._v("Book Category")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),a("li",[e._v("Book Category")])])]),e._v(" "),e.loaded?a("div",[e.loaded?e._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("form",{staticClass:"new-added-form",attrs:{id:"addCategoryForm"},on:{submit:function(t){t.preventDefault(),e.id?e.updateData(e.id):e.addData()}}},[e.errors.length?a("div",{staticClass:"alert alert-danger"},[a("ul",{staticClass:"mb-0"},e._l(e.errors,(function(t,s){return a("li",{key:s},[e._v("\n                "+e._s(t)+"\n              ")])})),0)]):e._e(),e._v(" "),a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"heading-layout1"},[a("div",{staticClass:"item-title"},[a("h3",[e._v(e._s(e.id?"Edit":"Add New")+" Category")])])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],attrs:{type:"hidden",value:""},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Name *")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.record.name,expression:"record.name"}],staticClass:"form-control",attrs:{type:"text",value:"",placeholder:"Name",required:""},domProps:{value:e.record.name},on:{input:function(t){t.target.composing||e.$set(e.record,"name",t.target.value)}}})]),e._v(" "),e._m(0)])])])]),e._v(" "),a("div",{staticClass:"col-sm-8"},[a("form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.deleteRecord()}}},[a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[a("div",[e._m(1),e._v(" "),e.loaded?e._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),e._v(" "),e.loaded?a("div",[e.lists?e._e():a("div",{staticClass:"alert alert-warning"},[a("i",{staticClass:"fa fa-exclamation-circle"}),e._v("\n                    No record(s) found.\n                  ")]),e._v(" "),e.lists?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table display data-table text-nowrap"},[a("thead",[a("tr",[a("th",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.allSelected,expression:"allSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allSelected)?e._i(e.allSelected,null)>-1:e.allSelected},on:{click:e.checkAll,change:function(t){var a=e.allSelected,s=t.target,i=!!s.checked;if(Array.isArray(a)){var o=e._i(a,null);s.checked?o<0&&(e.allSelected=a.concat([null])):o>-1&&(e.allSelected=a.slice(0,o).concat(a.slice(o+1)))}else e.allSelected=i}}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v("Sr. No.")])])]),e._v(" "),a("th",[e._v("Name")])])]),e._v(" "),a("tbody",e._l(e.lists.data,(function(t,s){return a("tr",[a("td",[t.classes_count?e._e():a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.check,expression:"check"}],key:e.lists.from+s,staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.check)?e._i(e.check,t.id)>-1:e.check},on:{change:function(a){var s=e.check,i=a.target,o=!!i.checked;if(Array.isArray(s)){var r=t.id,c=e._i(s,r);i.checked?c<0&&(e.check=s.concat([r])):c>-1&&(e.check=s.slice(0,c).concat(s.slice(c+1)))}else e.check=o}}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v(e._s(e.lists.from+s)+".")])]),e._v(" "),t.classes_count?a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",disabled:""}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v(e._s(e.lists.from+s)+".")])]):e._e()]),e._v(" "),a("td",[a("router-link",{attrs:{to:{path:e.baseURL+"book-category/edit/"+t.id,params:t},"data-toggle":"tooltip",title:"Edit"},on:{click:e.rerenderSelf}},[a("i",{staticClass:"fa fa-edit"}),e._v("\n                              "+e._s(t.name))]),e._v(" "),a("div",[a("small",[e._v("("+e._s(t.classes_count)+" books)")])])],1)])})),0)]),e._v(" "),a("pagination",{attrs:{data:e.lists},on:{"pagination-change-page":e.getData}})],1):e._e()]):e._e()])])])])])])]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark btn-block",attrs:{type:"submit"}},[this._v("\n                  Save\n                ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"heading-layout1"},[t("div",{staticClass:"item-title"},[t("h3",[this._v("All Book Categories")])]),this._v(" "),t("button",{staticClass:"btn btn-link text-dark removeBtn",attrs:{type:"submit","data-toggle":"tooltip",title:"Remove"}},[t("i",{staticClass:"fa fa-trash fa-2x"})])])}],!1,null,null,null);t.default=o.exports}}]);
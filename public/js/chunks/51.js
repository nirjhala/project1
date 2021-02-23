(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{462:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{id:"",record:{name:"",installment_availability:0,fees_for:"both"},errors:[],loaded:0,token:localStorage.getItem("token")}},mounted:function(){var t=this.$route.params;null!=t.id&&""!=t.id?this.getInfo(t.id):this.loaded=1},methods:{getInfo:function(t){var e=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("fees-type/"+t).then((function(t){var a=t.data;e.id=a.id,e.record=a,e.loaded=1,$(".select2").each((function(){$(this).trigger("change")}))}))},addData:function(){var t=this,e={record:this.record};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("fees-type",e).then((function(e){e.data.status?t.$router.push({name:"fees-type"}).then((function(e){t.loaded=1,t.$toast.success("Record saved.")})).catch((function(e){t.loaded=1,console.log(e)})):(t.loaded=1,t.errors=e.data.errors)})).catch((function(e){t.loaded=1,console.log(e)}))},updateData:function(){var t=this,e={record:this.record};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).put("fees-type/"+this.id,e).then((function(e){e.data.status?t.$router.push({name:"fees-type"}).then((function(e){t.loaded=1,t.$toast.success("Record saved.")})).catch((function(e){t.loaded=1,console.log(e)})):(t.loaded=1,t.errors=e.data.errors)})).catch((function(e){t.loaded=1}))}}},i=a(0),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"fees-type"}}},[t._v("View Fees Type")])],1),t._v(" "),a("h3",[t._v(t._s(t.id?"Edit":"Add")+" Fees Type")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"FeeMaster"}}},[t._v("Fees Management")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"fees-type"}}},[t._v("Fees Type")])],1),t._v(" "),a("li",[t._v(t._s(t.id?"Edit":"Add")+" Fees Type")])])]),t._v(" "),a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),t._v(" "),t.loaded?a("div",[a("div",{staticClass:"heading-layout1"},[a("div",{staticClass:"item-title"},[a("h3",[t._v(t._s(t.id?"Edit":"Add New")+" Fees Type")])])]),t._v(" "),a("form",{staticClass:"new-added-form",on:{submit:function(e){e.preventDefault(),t.id?t.updateData():t.addData()}}},[t.errors.length?a("div",{staticClass:"alert alert-danger"},[a("ul",{staticClass:"mb-0"},t._l(t.errors,(function(e,s){return a("li",{key:s},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.record.id,expression:"record.id"}],attrs:{type:"hidden",value:""},domProps:{value:t.record.id},on:{input:function(e){e.target.composing||t.$set(t.record,"id",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Name *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.record.name,expression:"record.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"",required:""},domProps:{value:t.record.name},on:{input:function(e){e.target.composing||t.$set(t.record,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-6"},[t._v("\n                                Installment Avalailability\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-4 col-6"},[a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.record.installment_availability,expression:"record.installment_availability"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.record.installment_availability)?t._i(t.record.installment_availability,"1")>-1:t.record.installment_availability},on:{change:function(e){var a=t.record.installment_availability,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r=t._i(a,"1");s.checked?r<0&&t.$set(t.record,"installment_availability",a.concat(["1"])):r>-1&&t.$set(t.record,"installment_availability",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.record,"installment_availability",i)}}}),t._v(" "),a("span",{staticClass:"slider round"})])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-6"},[t._v("\n                                Fees Applied On\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-4 col-6"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.record.fees_for,expression:"record.fees_for"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.record,"fees_for",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"both"}},[t._v("Both")]),t._v(" "),a("option",{attrs:{value:"new"}},[t._v("New")]),t._v(" "),a("option",{attrs:{value:"old"}},[t._v("Old")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 form-group mg-t-8"},[a("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[t._v(t._s(t.id?"Update":"Save"))]),t._v(" "),a("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[t._v("Reset")])])])])]):t._e()])])])}),[],!1,null,null,null);e.default=r.exports}}]);
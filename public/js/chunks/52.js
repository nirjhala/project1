(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{519:function(e,t,a){"use strict";a.r(t);var s={data:function(){return{id:"",record:{name:"",installment_availability:0,fees_for:"both"},errors:[],loaded:0,token:localStorage.getItem("token")}},mounted:function(){var e=this.$route.params;null!=e.id&&""!=e.id?this.getInfo(e.id):this.loaded=1},methods:{getInfo:function(e){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("fees-type/"+e).then((function(e){var a=e.data;t.id=a.id,t.record=a,t.loaded=1,$(".select2").each((function(){$(this).trigger("change")}))}))},addData:function(){var e=this,t={record:this.record};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("fees-type",t).then((function(t){t.data.status?e.$router.push({name:"fees-type"}).then((function(t){e.loaded=1,e.$toast.success("Record saved.")})).catch((function(t){e.loaded=1,console.log(t)})):(e.loaded=1,e.errors=t.data.errors)})).catch((function(t){e.loaded=1,console.log(t)}))},updateData:function(){var e=this,t={record:this.record};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).put("fees-type/"+this.id,t).then((function(t){t.data.status?e.$router.push({name:"fees-type"}).then((function(t){e.loaded=1,e.$toast.success("Record saved.")})).catch((function(t){e.loaded=1,console.log(t)})):(e.loaded=1,e.errors=t.data.errors)})).catch((function(t){e.loaded=1}))}}},i=a(0),r=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"fees-type"}}},[e._v("View Fees Type")])],1),e._v(" "),a("h3",[e._v(e._s(e.id?"Edit":"Add")+" Fees Type")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"FeeMaster"}}},[e._v("Fees Management")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"fees-type"}}},[e._v("Fees Type")])],1),e._v(" "),a("li",[e._v(e._s(e.id?"Edit":"Add")+" Fees Type")])])]),e._v(" "),a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[e.loaded?e._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),e._v(" "),e.loaded?a("div",[a("div",{staticClass:"heading-layout1"},[a("div",{staticClass:"item-title"},[a("h3",[e._v(e._s(e.id?"Edit":"Add New")+" Fees Type")])])]),e._v(" "),a("form",{staticClass:"new-added-form",on:{submit:function(t){t.preventDefault(),e.id?e.updateData():e.addData()}}},[e.errors.length?a("div",{staticClass:"alert alert-danger"},[a("ul",{staticClass:"mb-0"},e._l(e.errors,(function(t,s){return a("li",{key:s},[e._v("\n                "+e._s(t)+"\n              ")])})),0)]):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.record.id,expression:"record.id"}],attrs:{type:"hidden",value:""},domProps:{value:e.record.id},on:{input:function(t){t.target.composing||e.$set(e.record,"id",t.target.value)}}}),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Name *")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.record.name,expression:"record.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"",required:""},domProps:{value:e.record.name},on:{input:function(t){t.target.composing||e.$set(e.record,"name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-6"},[e._v("Installment Avalailability")]),e._v(" "),a("div",{staticClass:"col-lg-4 col-6"},[a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.record.installment_availability,expression:"record.installment_availability"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.record.installment_availability)?e._i(e.record.installment_availability,"1")>-1:e.record.installment_availability},on:{change:function(t){var a=e.record.installment_availability,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=e._i(a,"1");s.checked?r<0&&e.$set(e.record,"installment_availability",a.concat(["1"])):r>-1&&e.$set(e.record,"installment_availability",a.slice(0,r).concat(a.slice(r+1)))}else e.$set(e.record,"installment_availability",i)}}}),e._v(" "),a("span",{staticClass:"slider round"})])])])]),e._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-6"},[e._v("Fees Applied On")]),e._v(" "),a("div",{staticClass:"col-lg-4 col-6"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.record.fees_for,expression:"record.fees_for"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.record,"fees_for",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"both"}},[e._v("Both")]),e._v(" "),a("option",{attrs:{value:"new"}},[e._v("New")]),e._v(" "),a("option",{attrs:{value:"old"}},[e._v("Old")])])])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 form-group mg-t-8"},[a("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v("\n                "+e._s(e.id?"Update":"Save")+"\n              ")]),e._v(" "),a("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("\n                Reset\n              ")])])])])]):e._e()])])])}),[],!1,null,null,null);t.default=r.exports}}]);
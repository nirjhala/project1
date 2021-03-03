(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{319:function(t,e,o){"use strict";var a=o(32);o.n(a).a},32:function(t,e,o){var a=o(320);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(7)(a,s);a.locals&&(t.exports=a.locals)},320:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,".tox-notification{display:none!important}",""])},427:function(t,e,o){"use strict";o.r(e);var a=o(16),s=o(1),i=o(9),r={components:{Select2:a.a,Editor:i.a},props:["image_src","image"],data:function(){return{form:{id:"",title:"",date:"",description:"",session_id:""},sessions:[],errors:[],loaded:0}},mounted:function(){var t=this.$route.params;this.getSessions(),null!=t.id&&""!=t.id?this.getInfo(t.id):this.loaded=1},methods:{getSessions:function(){var t=this;s.D.getAllSessions().then((function(e){t.sessions=e.data})).catch((function(t){console.log("Errors: ",t)}))},getInfo:function(t){var e=this;s.D.holidayInfo(t).then((function(t){e.loaded=1,e.form=t.data}))},addData:function(){var t=this,e={form:this.form};this.loaded=0,s.D.addHoliday(e).then((function(e){t.$router.push({name:"ViewHoliday"}).then((function(e){t.loaded=1,t.$toast.success("Record saved.")})).catch((function(e){t.loaded=1,console.log(e)}))})).catch((function(e){t.loaded=1,e.response&&t.$toast.error("Holiday already exists.")}))},updateData:function(){var t=this,e={_method:"PUT",form:this.form};this.loaded=0,s.D.updateHoliday(this.form.id,e).then((function(e){e.data.status?t.$router.push({name:"ViewHoliday"}).then((function(e){t.loaded=1,t.$toast.success("Record saved.")})).catch((function(e){t.loaded=1,console.log(e)})):(t.loaded=1,t.errors=e.data.errors)})).catch((function(e){t.loaded=1,console.log(e)}))}}},n=(o(319),o(0)),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dashboard-content-one"},[o("div",{staticClass:"breadcrumbs-area"},[o("div",{staticClass:"float-right"},[o("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewHoliday"}}},[t._v("View Holiday")])],1),t._v(" "),o("h3",[t._v(t._s(t.form.id?"Edit":"Add")+" Holiday")]),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:{name:"ViewHoliday"}}},[t._v("Holiday")])],1),t._v(" "),o("li",[t._v(t._s(t.form.id?"Edit":"Add")+" Holiday")])])]),t._v(" "),o("div",{staticClass:"card height-auto"},[o("div",{staticClass:"card-body"},[t.loaded?t._e():o("div",{staticClass:"text-center"},[o("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),t._v(" "),t.loaded?o("div",[o("form",{staticClass:"new-added-form",on:{submit:function(e){e.preventDefault(),t.form.id?t.updateData():t.addData()}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Title *")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-6 col-12 form-group"},[o("label",[t._v("Session")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.session_id,expression:"form.session_id"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"session_id",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[t._v("Select Session")]),t._v(" "),t._l(t.sessions,(function(e,a){return o("option",{key:a,domProps:{value:e.id}},[t._v(t._s(e.session_name))])}))],2)]),t._v(" "),o("div",{staticClass:"col-xl-6 col-12 form-group"},[o("label",[t._v("Date *")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date,expression:"form.date"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.form.date},on:{input:function(e){e.target.composing||t.$set(t.form,"date",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Description")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-control",staticStyle:{height:"150px"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 form-group mg-t-8"},[o("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[t._v(t._s(t.form.id?"Update":"Save"))]),t._v(" "),o("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[t._v("Reset")])])])])]):t._e()])])])}),[],!1,null,null,null);e.default=l.exports}}]);
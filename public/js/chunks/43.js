(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{31:function(t,e,a){var o=a(318);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(7)(o,s);o.locals&&(t.exports=o.locals)},317:function(t,e,a){"use strict";var o=a(31);a.n(o).a},318:function(t,e,a){(t.exports=a(6)(!1)).push([t.i,".tox-notification{display:none!important}",""])},424:function(t,e,a){"use strict";a.r(e);var o=a(16),s=a(1),i=a(9),r={components:{Select2:o.a,Editor:i.a},props:["image_src","image"],data:function(){return{form:{id:"",name:"",slug:"",type:"custom",dates:"",dates_text:"",classes:[],short_description:"",description:"",weekday:"",image:"",session_id:""},editor_options:{height:500,branding:!1,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic forecolor backcolor |                     alignleft aligncenter alignright alignjustify |                     bullist numlist outdent indent | removeformat | help code"},ev_dates:[],sessions:[],errors:[],loaded:0}},mounted:function(){var t=this.$route.params;this.getSessions(),null!=t.id&&""!=t.id?this.getInfo(t.id):this.loaded=1},methods:{addDateRow:function(){this.ev_dates.push({date:""})},removeDateRow:function(t){this.ev_dates.splice(t,1)},change_ev_dates:function(){var t=this;this.form.dates=[],this.ev_dates.forEach((function(e,a){t.form.dates.push(e.date)}))},getSessions:function(){var t=this;s.D.getAllSessions().then((function(e){t.sessions=e.data})).catch((function(t){console.log("Errors: ",t)}))},getInfo:function(t){var e=this;s.D.eventInfo(t).then((function(t){e.loaded=1;var a=t.data.image,o=t.data.media?e.baseURL+"uploads/medium/"+t.data.media.image:e.baseURL+"/img/default.jpg";e.$emit("update-image_src-selected",o),e.$emit("update-image-selected",a),delete t.data.media,e.form=t.data}))},addData:function(){var t=this,e={form:this.form};this.loaded=0,s.D.addEvent(e).then((function(e){t.$router.push({name:"ViewEvent"}).then((function(e){t.loaded=1,t.$toast.success("Record saved.")})).catch((function(e){t.loaded=1,console.log(e)}))})).catch((function(e){t.loaded=1,e.response&&t.$toast.error("Event already exists.")}))},updateData:function(){var t=this,e={_method:"PUT",form:this.form};this.loaded=0,s.D.updateEvent(this.form.id,e).then((function(e){e.data.status?t.$router.push({name:"ViewEvent"}).then((function(e){t.loaded=1,t.$toast.success("Record saved.")})).catch((function(e){t.loaded=1,console.log(e)})):(t.loaded=1,t.errors=e.data.errors)})).catch((function(e){t.loaded=1,console.log(e)}))}},watch:{image:function(t){this.form.image=t},ev_dates:function(){this.change_ev_dates()},"form.name":function(t){this.form.slug=t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},"form.type":function(t){this.ev_dates=[],this.form.weekday="","date-range"==t&&(this.ev_dates=[{date:""},{date:""}])},"form.weekday":function(t){if(this.ev_dates=[],""!==t){var e=new Date,a=e.getMonth(),o=e.getFullYear(),s=a<=2?o-1:o,i=parseInt(s)+1,r=moment(s+"-04-01"),n=r.day(),l=moment(i+"-03-31"),d=r.clone();for(n<=t?(d.subtract("days",n),d.add("days",t)):n>t&&d.add("days",14-t);d.isSameOrBefore(l);)this.ev_dates.push({date:d.format("YYYY-MM-DD")}),d.add("days",7)}}}},n=(a(317),a(0)),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("div",{staticClass:"float-right"},[a("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"ViewEvent"}}},[t._v("View Event")])],1),t._v(" "),a("h3",[t._v(t._s(t.form.id?"Edit":"Add")+" Event")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"ViewEvent"}}},[t._v("Event")])],1),t._v(" "),a("li",[t._v(t._s(t.form.id?"Edit":"Add")+" Event")])])]),t._v(" "),a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),t._v(" "),t.loaded?a("div",[a("form",{staticClass:"new-added-form",on:{submit:function(e){e.preventDefault(),t.form.id?t.updateData():t.addData()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Name *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Slug *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.slug,expression:"form.slug"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.slug},on:{input:function(e){e.target.composing||t.$set(t.form,"slug",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6 col-12 form-group"},[a("label",[t._v("Session")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.session_id,expression:"form.session_id"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"session_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Session")]),t._v(" "),t._l(t.sessions,(function(e,o){return a("option",{key:o,domProps:{value:e.id}},[t._v(t._s(e.session_name))])}))],2)]),t._v(" "),a("div",{staticClass:"col-xl-6 col-12 form-group"},[a("label",[t._v("Type")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"custom"}},[t._v("Custom")]),t._v(" "),a("option",{attrs:{value:"date-range"}},[t._v("Date Range")]),t._v(" "),a("option",{attrs:{value:"weekdays"}},[t._v("Weekdays")])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Short Description")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.short_description,expression:"form.short_description"}],staticClass:"form-control",staticStyle:{height:"150px"},domProps:{value:t.form.short_description},on:{input:function(e){e.target.composing||t.$set(t.form,"short_description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Description")]),t._v(" "),a("editor",{attrs:{init:t.editor_options},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"mb-3"},[a("label",[t._v("Upload Image")]),t._v(" "),t.image_src?a("img",{staticClass:"w-100 uploadImage",attrs:{src:t.image_src,alt:"",title:"",id:"featuredImage","data-image":"#featuredImage","data-field":"#featuredImageId"}}):t._e(),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.image,expression:"form.image"}],attrs:{type:"hidden",value:"",id:"featuredImageId"},domProps:{value:t.form.image},on:{input:function(e){e.target.composing||t.$set(t.form,"image",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block uploadImageBtn",attrs:{type:"button","data-image":"#featuredImage","data-field":"#featuredImageId"}},[t._v("Upload Image")]),t._v(" "),"weekdays"==t.form.type?a("div",{staticClass:"mt-3 form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.weekday,expression:"form.weekday"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"weekday",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Day")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("Sunday")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("Monday")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Tuesday")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Wednesday")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("Thursday")]),t._v(" "),a("option",{attrs:{value:"5"}},[t._v("Friday")]),t._v(" "),a("option",{attrs:{value:"6"}},[t._v("Saturday")])])]):t._e(),t._v(" "),a("div",[a("div",{staticClass:"mt-3"},[a("label",[t._v("Event Dates")]),t._v(" "),"custom"==t.form.type?a("button",{staticClass:"btn btn-light btn-block",attrs:{type:"button"},on:{click:t.addDateRow}},[a("i",{staticClass:"icon-plus"}),t._v(" Add Row")]):t._e()]),t._v(" "),a("div",{staticStyle:{"max-height":"500px",overflow:"auto"}},t._l(t.ev_dates,(function(e,o){return a("div",{key:o,staticClass:"mt-3 input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.ev_dates[o].date,expression:"ev_dates[i].date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.ev_dates[o].date},on:{change:t.change_ev_dates,input:function(e){e.target.composing||t.$set(t.ev_dates[o],"date",e.target.value)}}}),t._v(" "),"custom"==t.form.type?a("span",{staticClass:"input-group-append",on:{click:function(e){return t.removeDateRow(o)}}},[t._m(0,!0)]):t._e()])})),0)])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 form-group mg-t-8"},[a("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[t._v(t._s(t.form.id?"Update":"Save"))]),t._v(" "),a("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[t._v("Reset")])])])])]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[e("i",{staticClass:"icon-minus"})])}],!1,null,null,null);e.default=l.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var i=w(r(250)),n=w(r(253)),a=w(r(254)),o=w(r(255)),u=w(r(256)),s=w(r(257)),l=w(r(258)),d=w(r(259)),f=w(r(260)),c=w(r(261)),m=w(r(262)),v=w(r(263)),p=w(r(264)),h=w(r(265)),_=w(r(266)),b=w(r(267)),y=w(r(268)),g=w(r(269)),P=w(r(270)),x=w(r(271)),j=w(r(272)),$=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};i.get||i.set?Object.defineProperty(t,r,i):t[r]=e[r]}return t.default=e,t}(r(8));function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=$},250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(8).regex)("alpha",/^[a-zA-Z]*$/);t.default=i},251:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="web"===e.env.BUILD?r(252).withParams:r(67).withParams;t.default=i}).call(this,r(24))},252:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var i="undefined"!=typeof window?window:void 0!==e?e:{},n=i.vuelidate?i.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=n}).call(this,r(13))},253:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(8).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(8).regex)("numeric",/^[0-9]*$/);t.default=i},255:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(e,t){return(0,i.withParams)({type:"between",min:e,max:t},(function(r){return!(0,i.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(8).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=i},257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8),n=(0,i.withParams)({type:"ipAddress"},(function(e){if(!(0,i.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=n;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},258:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,i.withParams)({type:"macAddress"},(function(t){if(!(0,i.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(n)}))};var n=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},259:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(e){return(0,i.withParams)({type:"maxLength",max:e},(function(t){return!(0,i.req)(t)||(0,i.len)(t)<=e}))}},260:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(e){return(0,i.withParams)({type:"minLength",min:e},(function(t){return!(0,i.req)(t)||(0,i.len)(t)>=e}))}},261:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8),n=(0,i.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,i.req)(e.trim()):(0,i.req)(e)}));t.default=n},262:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(e){return(0,i.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,i.ref)(e,this,r)||(0,i.req)(t)}))}},263:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(e){return(0,i.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,i.ref)(e,this,r)||(0,i.req)(t)}))}},264:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(e){return(0,i.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,i.ref)(e,this,r)}))}},265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(8).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=i},266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,i)}),!1)}))}},267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,i)}),!0)}))}},268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(e){return(0,i.withParams)({type:"not"},(function(t,r){return!(0,i.req)(t)||!e.call(this,t,r)}))}},269:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(e){return(0,i.withParams)({type:"minValue",min:e},(function(t){return!(0,i.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},270:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(8);t.default=function(e){return(0,i.withParams)({type:"maxValue",max:e},(function(t){return!(0,i.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(8).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=i},272:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(8).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},455:function(e,t,r){"use strict";r.r(t);var i=r(2),n={data:function(){return{id:"",slotName:"",startTime:"",endTime:"",timeslotShift:"",start_from_time:0,start_to_time:0,end_from_time:0,end_to_time:0,shifts:[],errors:[],loaded:0,token:localStorage.getItem("token")}},validations:{slotName:{required:i.required},startTime:{required:i.required},endTime:{required:i.required},timeslotShift:{required:i.required}},mounted:function(){var e=this.$route.params;this.getShifts(),null!=e.id&&""!=e.id?this.getInfo(e.id):this.loaded=1},methods:{getShifts:function(){var e=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-all-shifts").then((function(t){e.shifts=t.data}))},getInfo:function(e){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-timeslot-info/"+e).then((function(e){t.id=e.data.data.id,t.slotName=e.data.data.name,t.startTime=e.data.data.time_start,t.endTime=e.data.data.time_end,t.timeslotShift=e.data.data.shift,t.loaded=1,$(".select2").each((function(){$(this).trigger("change")}))}))},addData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){var t={name:this.slotName,time_start:this.startTime,time_end:this.endTime,shift:this.timeslotShift};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("add-timeslot",t).then((function(t){t.data.status?e.$router.push({name:"timeslot"}).then((function(t){e.loaded=1,e.$toast.success("Record saved.")})).catch((function(t){e.loaded=1,console.log(t)})):(e.loaded=1,e.errors=t.data.errors)})).catch((function(t){e.loaded=1,console.log(t)}))}},updateData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){var t={id:this.id,name:this.slotName,time_start:this.startTime,time_end:this.endTime,shift:this.timeslotShift};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("update-timeslot",t).then((function(t){t.data.status?e.$router.push({name:"timeslot"}).then((function(t){e.loaded=1,e.$toast.success("Record saved.")})).catch((function(t){e.loaded=1,console.log(t)})):(e.loaded=1,e.errors=t.data.errors)})).catch((function(t){e.loaded=1,console.log(t)}))}},findIndex:function(e,t){return e.findIndex((function(e){return e.id==t}))}},watch:{timeslotShift:function(e){var t=this.findIndex(this.shifts,e);this.start_from_time=this.shifts[t].shift_opening_time,this.start_to_time=this.shifts[t].shift_closing_time,this.end_from_time=this.shifts[t].shift_opening_time,this.end_to_time=this.shifts[t].shift_closing_time},startTime:function(e){this.end_from_time=e}}},a=r(0),o=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-content-one"},[r("div",{staticClass:"breadcrumbs-area"},[r("div",{staticClass:"float-right"},[r("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"timeslot"}}},[e._v("View Timeslot")])],1),e._v(" "),r("h3",[e._v(e._s(e.id?"Edit":"Add")+" Timeslot")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"timeslot"}}},[e._v("Timeslot")])],1),e._v(" "),r("li",[e._v(e._s(e.id?"Edit":"Add")+" Timeslot")])])]),e._v(" "),r("div",{staticClass:"card height-auto"},[r("div",{staticClass:"card-body"},[e.loaded?e._e():r("div",{staticClass:"text-center"},[r("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),e._v(" "),e.loaded?r("div",[r("div",{staticClass:"heading-layout1"},[r("div",{staticClass:"item-title"},[r("h3",[e._v(e._s(e.id?"Edit":"Add New")+" Timeslot")])])]),e._v(" "),r("form",{on:{submit:function(t){t.preventDefault(),e.id?e.updateData():e.addData()}}},[e.errors.length?r("div",{staticClass:"alert alert-danger"},[r("ul",{staticClass:"mb-0"},e._l(e.errors,(function(t,i){return r("li",{key:i},[e._v(e._s(t))])})),0)]):e._e(),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],attrs:{type:"hidden",value:""},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),e._v(" "),r("b-row",[r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v("Shift *")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.timeslotShift.$model,expression:"$v.timeslotShift.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.timeslotShift.$error},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.timeslotShift,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select Shift")]),e._v(" "),e._l(e.shifts,(function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.shift_name))])}))],2),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1)]),e._v(" "),e.timeslotShift?r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v("Name *")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.slotName.$model,expression:"$v.slotName.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.slotName.$error},attrs:{type:"text",placeholder:"like Lecture number, name, prayer, break etc."},domProps:{value:e.$v.slotName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.slotName,"$model",t.target.value)}}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v("Start Time *")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.startTime,expression:"startTime"}],staticClass:"form-control",class:{"is-invalid":e.$v.slotName.$error},attrs:{type:"time",placeholder:"",min:e.start_from_time,max:e.start_to_time},domProps:{value:e.startTime},on:{input:function(t){t.target.composing||(e.startTime=t.target.value)}}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v("End Time *")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.endTime.$model,expression:"$v.endTime.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.slotName.$error},attrs:{type:"time",placeholder:"",min:e.end_from_time,max:e.end_to_time},domProps:{value:e.$v.endTime.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.endTime,"$model",t.target.value)}}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1)]):e._e(),e._v(" "),e.timeslotShift?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 form-group mg-t-8"},[r("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v(e._s(e.id?"Update":"Save"))]),e._v(" "),r("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("Reset")])])]):e._e()],1)]):e._e()])])])}),[],!1,null,null,null);t.default=o.exports},8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var i,n=(i=r(251))&&i.__esModule?i:{default:i};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;t.len=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))}}}]);
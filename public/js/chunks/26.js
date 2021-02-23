(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return x.default}}),t.helpers=void 0;var n=w(r(229)),a=w(r(232)),i=w(r(233)),o=w(r(234)),u=w(r(235)),l=w(r(236)),s=w(r(237)),d=w(r(238)),c=w(r(239)),f=w(r(240)),v=w(r(241)),m=w(r(242)),p=w(r(243)),h=w(r(244)),b=w(r(245)),g=w(r(246)),_=w(r(247)),y=w(r(248)),P=w(r(249)),$=w(r(250)),x=w(r(251)),j=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(8));function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(8).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},230:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(231).withParams:r(64).withParams;t.default=n}).call(this,r(23))},231:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},a=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=a}).call(this,r(13))},232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(8).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(8).regex)("numeric",/^[0-9]*$/);t.default=n},234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(8).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},236:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=a;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},237:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},238:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},240:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8),a=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},241:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},242:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},243:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},244:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(8).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},245:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},247:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},248:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},249:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(8).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},251:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(8).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},449:function(e,t,r){"use strict";r.r(t);var n=r(2),a={data:function(){return{id:"",routeName:"",startPoint:"",endPoint:"",vehicle:"",routes:[{name:""}],vehicles:[],errors:[],loaded:0,token:localStorage.getItem("token")}},validations:{routeName:{required:n.required},startPoint:{required:n.required},vehicle:{required:n.required},routes:{required:n.required,minLength:Object(n.minLength)(2),$each:{isUnique:function(e,t){var r=t.findIndex((function(t){return e.name===t.name}));return console.log(e,t[r]),e===t[r]},name:{required:n.required}}}},mounted:function(){this.getVehicles();var e=this.$route.params;null!=e.id&&""!=e.id?this.getInfo(e.id):this.loaded=1},methods:{getVehicles:function(){var e=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-all-vehicles/?type=exclude-routes").then((function(t){e.vehicles=t.data}))},addRoute:function(){var e=!0;$(this.routes).each((function(t,r){""==r.name&&(e=!1)})),e?this.routes.push({name:""}):swal("Warning","Please enter route name.","warning")},removeRoute:function(e){this.routes.splice(e,1)},getInfo:function(e){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-route-info/"+e).then((function(e){var r=e.data.data;t.id=r.id,t.routeName=r.name,t.vehicle=r.vehicle,t.startPoint=r.start_point,t.routes=r.points,t.loaded=1,$(".select2").each((function(){$(this).trigger("change")}))}))},addData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){var t={name:this.routeName,vehicle:this.vehicle,start_point:this.startPoint,routes:this.routes};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("add-route",t).then((function(t){t.data.status?e.$router.push({name:"route"}).then((function(t){e.loaded=1,e.$toast.success("Record saved.")})).catch((function(t){e.loaded=1,console.log(t)})):(e.loaded=1,e.errors=t.data.errors)})).catch((function(t){e.loaded=1,console.log(t)}))}},updateData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){var t={id:this.id,name:this.routeName,vehicle:this.vehicle,start_point:this.startPoint,routes:this.routes};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("update-route",t).then((function(t){t.data.status?e.$router.push({name:"route"}).then((function(t){e.loaded=1,e.$toast.success("Record saved.")})).catch((function(t){e.loaded=1,console.log(t)})):(e.loaded=1,e.errors=t.data.errors)})).catch((function(t){e.loaded=1,console.log(t)}))}}}},i=r(0),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-content-one"},[r("div",{staticClass:"breadcrumbs-area"},[r("div",{staticClass:"float-right"},[r("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"route"}}},[e._v("View Route")])],1),e._v(" "),r("h3",[e._v(e._s(e.id?"Edit":"Add")+" Route")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"route"}}},[e._v("Route")])],1),e._v(" "),r("li",[e._v(e._s(e.id?"Edit":"Add")+" Route")])])]),e._v(" "),r("div",{staticClass:"card height-auto"},[r("div",{staticClass:"card-body"},[e.loaded?e._e():r("div",{staticClass:"text-center"},[r("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),e._v(" "),e.loaded?r("div",[r("div",{staticClass:"heading-layout1"},[r("div",{staticClass:"item-title"},[r("h3",[e._v(e._s(e.id?"Edit":"Add New")+" Route")])])]),e._v(" "),r("form",{on:{submit:function(t){t.preventDefault(),e.id?e.updateData():e.addData()}}},[e.errors.length?r("div",{staticClass:"alert alert-danger"},[r("ul",{staticClass:"mb-0"},e._l(e.errors,(function(t,n){return r("li",{key:n},[e._v(e._s(t))])})),0)]):e._e(),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],attrs:{type:"hidden",value:""},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v("Route Name *")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.routeName.$model,expression:"$v.routeName.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.$v.routeName.$error},attrs:{type:"text",placeholder:"",value:""},domProps:{value:e.$v.routeName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.routeName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v("Vehicle *")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.vehicle.$model,expression:"$v.vehicle.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.$v.routeName.$error},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.vehicle,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select Vehicle")]),e._v(" "),e._l(e.vehicles,(function(t,n){return r("option",{key:n,domProps:{value:t.id}},[e._v(e._s(t.vehicle_no))])}))],2),e._v(" "),r("b-form-invalid-feedback",[e._v("Please select required field.")])],1),e._v(" "),r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v("Start Point *")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.startPoint.$model,expression:"$v.startPoint.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.startPoint.$error},attrs:{type:"text",placeholder:"Route starting location from while picking students",value:""},domProps:{value:e.$v.startPoint.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.startPoint,"$model",t.target.value)}}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1)]),e._v(" "),e.$v.routes.$error&&!e.$v.routes.isUnique&&e.routes.length>1?r("div",{staticClass:"alert alert-danger"},[e._v("Duplicate routes entered.")]):e._e(),e._v(" "),e.$v.routes.$error&&1==e.routes.length?r("div",{staticClass:"alert alert-danger"},[e._v("Enter more than 1 route points.")]):e._e(),e._v(" "),r("div",{staticClass:"route-list-group"},e._l(e.$v.routes.$each.$iter,(function(t,n){return r("div",{key:"route-"+n,staticClass:"row"},[r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v("Pickup Point *")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name.$model,expression:"i.name.$model"}],staticClass:"form-control",class:{"is-invalid":t.name.$error},attrs:{type:"text",placeholder:"",value:""},domProps:{value:t.name.$model},on:{input:function(r){r.target.composing||e.$set(t.name,"$model",r.target.value)}}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1),e._v(" "),e.routes.length>1?r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v(" ")]),e._v(" "),r("button",{staticClass:"btn btn-danger btn-lg btn-block",attrs:{type:"button"},on:{click:function(t){return e.removeRoute(n)}}},[r("span",{staticClass:"fa fa-minus"}),e._v(" REMOVE ")])]):e._e(),e._v(" "),n==e.routes.length-1?r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v(" ")]),e._v(" "),r("button",{staticClass:"btn btn-success btn-lg btn-block addRouteBtn",attrs:{type:"button"},on:{click:function(t){return e.addRoute()}}},[r("span",{staticClass:"fa fa-plus"}),e._v(" ADD ")])]):e._e()])})),0),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 form-group mg-t-8"},[r("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v(e._s(e.id?"Update":"Save"))]),e._v(" "),r("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("Reset")])])])])]):e._e()])])])}),[],!1,null,null,null);t.default=o.exports},8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return a.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,a=(n=r(230))&&n.__esModule?n:{default:n};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;t.len=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,a.default)({type:e},(function(e){return!o(e)||t.test(e)}))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return u.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,u=(n=r(275))&&n.__esModule?n:{default:n};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;t.len=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,u.default)({type:e},(function(e){return!i(e)||t.test(e)}))}},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var n=w(r(274)),u=w(r(277)),a=w(r(278)),i=w(r(279)),o=w(r(280)),l=w(r(281)),c=w(r(282)),d=w(r(283)),s=w(r(284)),f=w(r(285)),v=w(r(286)),b=w(r(287)),p=w(r(288)),m=w(r(289)),y=w(r(290)),h=w(r(291)),g=w(r(292)),_=w(r(293)),j=w(r(294)),P=w(r(295)),O=w(r(296)),x=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(11));function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},25:function(e,t,r){"use strict";r.d(t,"f",(function(){return u})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return c}));var n=r(5),u=function(e){return Object(n.a)("get","view-subject/?".concat(e))},a=function(e){return Object(n.a)("post","remove-subject",e)},i=function(e){return Object(n.a)("get","get-subject-info/".concat(e))},o=function(e){return Object(n.a)("post","add-subject",e)},l=function(e){return Object(n.a)("post","update-subject",e)},c=function(e){return Object(n.a)("post","assign-subject-class",e)}},274:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(11).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},275:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(276).withParams:r(83).withParams;t.default=n}).call(this,r(39))},276:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},u=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=u}).call(this,r(18))},277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(11).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},278:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(11).regex)("numeric",/^[0-9]*$/);t.default=n},279:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},280:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(11).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},281:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11),u=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=u;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},282:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(u)}))};var u=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},283:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},284:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},285:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11),u=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=u},286:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},287:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},288:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},289:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(11).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},290:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},292:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},293:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(11);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(11).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},296:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(11).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},481:function(e,t,r){"use strict";r.r(t);var n=r(2),u=r(25),a={components:{Breadcrumbs:r(9).a},data:function(){return{title:"Add Subject",b_items:[{target:{name:"dashboard"},title:"Dashboard"},{target:{name:"master"},title:"Master"}],id:"",subjectName:"",errors:[],loaded:0}},validations:{subjectName:{required:n.required}},mounted:function(){var e=this.$route.params;null!=e.id&&""!=e.id?(this.getInfo(e.id),this.title="Edit Subject"):this.loaded=1},methods:{getInfo:function(e){var t=this;Object(u.d)(e).then((function(e){t.id=e.data.data.id,t.subjectName=e.data.data.name,t.loaded=1,$(".select2").each((function(){$(this).trigger("change")}))}))},addData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){var t={name:this.subjectName};this.loaded=0,Object(u.a)(t).then((function(t){t.data.status?e.$router.push({name:"subject"}).then((function(t){e.loaded=1,e.$toast.success("Record saved.")})).catch((function(t){e.loaded=1,console.log(t)})):(e.loaded=1,e.errors=t.data.errors)})).catch((function(t){e.loaded=1,console.log(t)}))}},updateData:function(){var e=this;if(this.$v.$touch(),!this.$v.$anyError){var t={id:this.id,name:this.subjectName};this.loaded=0,Object(u.e)(t).then((function(t){t.data.status?e.$router.push({name:"subject"}).then((function(t){e.loaded=1,e.$toast.success("Record saved.")})).catch((function(t){e.loaded=1,console.log(t)})):(e.loaded=1,e.errors=t.data.errors)})).catch((function(t){e.loaded=1,console.log(t)}))}}}},i=r(0),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-content-one"},[r("breadcrumbs",{attrs:{items:e.b_items,title:e.title,btn:{target:{name:"subject"},label:"View Subject"}}}),e._v(" "),r("div",{staticClass:"card height-auto"},[r("div",{staticClass:"card-body"},[e.loaded?e._e():r("div",{staticClass:"text-center"},[r("b-spinner")],1),e._v(" "),e.loaded?r("div",[r("div",{staticClass:"heading-layout1"},[r("div",{staticClass:"item-title"},[r("h3",[e._v(e._s(e.title))])])]),e._v(" "),r("form",{on:{submit:function(t){t.preventDefault(),e.id?e.updateData():e.addData()}}},[e.errors.length?r("div",{staticClass:"alert alert-danger"},[r("ul",{staticClass:"mb-0"},e._l(e.errors,(function(t,n){return r("li",{key:n},[e._v("\n                "+e._s(t)+"\n              ")])})),0)]):e._e(),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],attrs:{type:"hidden",value:""},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-3 col-lg-6 col-12 form-group"},[r("label",[e._v("Name *")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.subjectName.$model,expression:"$v.subjectName.$model"}],staticClass:"form-control",class:{"is-invalid":e.$v.subjectName.$error},attrs:{type:"text",placeholder:"like Hindi, English, Maths etc."},domProps:{value:e.$v.subjectName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.subjectName,"$model",t.target.value)}}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Please enter required field.")])],1)]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 form-group mg-t-8"},[r("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v("\n                "+e._s(e.id?"Update":"Save")+"\n              ")]),e._v(" "),r("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("\n                Reset\n              ")])])])])]):e._e()])])],1)}),[],!1,null,null,null);t.default=o.exports},5:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=axios.create({baseURL:"/api/",json:!0}),u=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a={Accept:"application/json",Authorization:null};if(u){var i=localStorage.getItem("token");a.Authorization="Bearer "+i}return n({method:e,url:t,data:r,headers:a})}},9:function(e,t,r){"use strict";var n={props:{title:String,items:Array,btn:Object}},u=r(0),a=Object(u.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"breadcrumbs-area"},[r("div",{staticClass:"float-right"},[e.btn?r("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:e.btn.target}},[e._v("\n      "+e._s(e.btn.label)+"\n    ")]):e._e()],1),e._v(" "),r("h3",[e._v(e._s(e.title))]),e._v(" "),r("ul",[e._l(e.items,(function(t,n){return r("li",{key:n},[r("router-link",{attrs:{to:t.target,title:t.title}},[e._v("\n        "+e._s(t.title)+"\n      ")])],1)})),e._v(" "),r("li",[e._v(e._s(e.title))])],2)])}),[],!1,null,null,null);t.a=a.exports}}]);
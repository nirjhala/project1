(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{228:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function d(){}function h(){}function f(){}var v={};v[o]=function(){return this};var m=Object.getPrototypeOf,p=m&&m(m(L([])));p&&p!==e&&r.call(p,o)&&(v=p);var g=f.prototype=d.prototype=Object.create(v);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=g.constructor=f,f.constructor=h,h.displayName=c(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(g),c(g,i,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},412:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n),a=r(1),i={data:function(){return{form:{id:"",type:"Page",p_id:"",ml_id:"",label:"",link:""},title:"Users",errors:0,lists:{},allSelected:0,check:[],menu_locations:[],menu:[],pages:{},loaded:0,token:localStorage.getItem("token")}},mounted:function(){this.title=this.$route.params.role,this.getMenu(),this.getPages()},methods:{searchAfterDebounce:o.a.debounce((function(){this.getRecords()}),500),getPages:function(){var t=this;a.D.getAllPages().then((function(e){t.pages=e.data})).catch((function(t){console.log("Errors: ",t)}))},getMenu:function(){var t=this;a.D.fetchMenu().then((function(e){t.menu=e.data,t.loaded=1}))},deleteMenu:function(t){var e=this;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(r){r&&a.D.deleteMenu(t).then((function(t){e.$toast.success(t.data.message),e.getMenu()}))}))},checkAll:function(){var t=this;t.check=[],t.allSelected||$.each(t.lists.data,(function(e,r){t.check.push(r.id)}))},addMenu:function(){var t=this,e=this,r={form:this.form,menu_locations:this.menu_locations};a.D.insertMenu(r).then((function(r){e.form={id:"",type:"Page",p_id:"",ml_id:"",label:"",link:""},t.getMenu()})).catch((function(t){console.log("Errors:",t)}))},deleteRecord:function(){var t=this,e={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(r){r&&(t.loaded=0,a.D.deleteMenus(e).then((function(e){t.getRecords(),t.$toast.success("Selected record(s) has been deleted.")})).catch((function(e){t.loaded=1,console.log(e)})))}))}},watch:{"form.p_id":function(t){this.form.label=this.pages[t]}}},c=r(0),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard-content-one"},[r("div",{staticClass:"breadcrumbs-area"},[r("h3",[t._v("Menu")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:{name:"SchoolMaster"}}},[t._v("School Master")])],1),t._v(" "),r("li",[t._v("Menu")])])]),t._v(" "),t.loaded?t._e():r("div",{staticClass:"card height-auto"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"text-center"},[r("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.baseURL+"img/preloader.gif",alt:""}})])])]),t._v(" "),t.loaded?r("div",[r("b-row",[r("b-col",{attrs:{sm:"4"}},[r("b-card",{attrs:{header:"Add Menu"}},[r("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.addMenu(e)}}},[r("b-form-group",{attrs:{label:"Select Menu Location"}},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],attrs:{type:"radio",value:"External"},domProps:{checked:t._q(t.form.type,"External")},on:{change:function(e){return t.$set(t.form,"type","External")}}}),t._v("\n                                External Link\n                            ")]),t._v(" "),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],attrs:{type:"radio",value:"Page"},domProps:{checked:t._q(t.form.type,"Page")},on:{change:function(e){return t.$set(t.form,"type","Page")}}}),t._v("\n                                Page\n                            ")])]),t._v(" "),"Page"==t.form.type?r("b-form-group",{attrs:{label:"Select Page"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.p_id,expression:"form.p_id"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"p_id",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("Select Page")]),t._v(" "),t._l(t.pages,(function(e,n){return r("option",{key:n,domProps:{value:n}},[t._v(t._s(e))])}))],2)]):t._e(),t._v(" "),"Page"!=t.form.type?r("b-form-group",{attrs:{label:"Enter Link"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.link,expression:"form.link"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Link / URL",required:""},domProps:{value:t.form.link},on:{input:function(e){e.target.composing||t.$set(t.form,"link",e.target.value)}}})]):t._e(),t._v(" "),r("b-form-group",{attrs:{label:"Label"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.label,expression:"form.label"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Label",required:""},domProps:{value:t.form.label},on:{input:function(e){e.target.composing||t.$set(t.form,"label",e.target.value)}}})]),t._v(" "),r("b-form-group",[r("label",[t._v("Menu Locations")]),t._v(" "),t._l(t.menu,(function(e,n){return r("div",{key:n},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.menu_locations,expression:"menu_locations"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.menu_locations)?t._i(t.menu_locations,e.id)>-1:t.menu_locations},on:{change:function(r){var n=t.menu_locations,o=r.target,a=!!o.checked;if(Array.isArray(n)){var i=e.id,c=t._i(n,i);o.checked?c<0&&(t.menu_locations=n.concat([i])):c>-1&&(t.menu_locations=n.slice(0,c).concat(n.slice(c+1)))}else t.menu_locations=a}}}),t._v("\n                                    "+t._s(e.name)+"\n                                ")])])}))],2),t._v(" "),r("b-form-group"),t._v(" "),r("button",{staticClass:"btn-fill-lg btn-block btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[t._v("\n                            Save\n                        ")])],1)])],1),t._v(" "),r("b-col",{attrs:{sm:"8"}},[r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:""}},t._l(t.menu,(function(e,n){return r("b-tab",{key:n,attrs:{title:e.name}},[e.menu.length?t._e():r("div",[t._v("\n                                No menu added yet.\n                            ")]),t._v(" "),e.menu.length?r("div",[r("table",{staticClass:"table table-bordered"},[r("thead",[r("tr",[r("th",[t._v("#")]),t._v(" "),r("th",[t._v("Menu Name")]),t._v(" "),r("th",[t._v("Link")])])]),t._v(" "),r("tbody",{directives:[{name:"sortable",rawName:"v-sortable"}]},t._l(e.menu,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(n+1))]),t._v(" "),r("td",[r("div",[t._v(t._s(e.label))]),t._v(" "),r("b-button",{staticClass:"text-danger m-0 p-0",attrs:{type:"button",variant:"link"},on:{click:function(r){return t.deleteMenu(e.id)}}},[t._v("Remove")])],1),t._v(" "),r("td",[t._v("\n                                                "+t._s(e.link?e.link:e.page.slug)+"\n                                            ")])])})),0)])]):t._e()])})),1)],1)],1)],1)],1):t._e()])}),[],!1,null,null,null);e.default=l.exports},59:function(t,e,r){t.exports=r(228)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{273:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),a=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return L()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=w(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function h(){}function f(){}function d(){}var v={};v[i]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(A([])));m&&m!==e&&r.call(m,i)&&(v=m);var y=d.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(i,o){function a(){return new e((function(n,a){!function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}(i,o,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=y.constructor=d,d.constructor=f,f.displayName=s(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[o]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new _(c(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),s(y,a,"Generator"),y[i]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;b(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},574:function(t,e,r){"use strict";r.r(e);var n=r(1),i={data:function(){return{s:"",limit:10,checkAll:!1,test:{check:[],fields:[{key:"index",label:"Sr. No."},{key:"name",sortable:!0},{key:"duration",sortable:!0},{key:"date",sortable:!0},"expire_in",{key:"total_questions",sortable:!0},{key:"questions"}]},tests:{}}},mounted:function(){this.fetchTests()},methods:{searchAfterDebounce:_.debounce((function(){this.fetchTests()}),500),selectAll:function(){if(this.test.check=[],!this.checkAll)for(var t in this.tests.data)this.tests.data[t].stock||this.test.check.push(this.tests.data[t].id)},fetchTests:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.tests={},Object(n.Mc)("page=".concat(e,"&limit=").concat(this.limit,"&s=").concat(this.s)).then((function(e){t.tests=e.data}))},deleteMultiple:function(){var t=this;this.test.check.length?swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e&&Object(n.xb)({ids:t.test.check}).then((function(e){t.$toast.success(e.data.message),t.fetchTests(1)}))})):swal("Warning","Please select at least one record to delete.","warning")}},watch:{s:function(){this.searchAfterDebounce()},limit:function(){this.fetchTests(1)}}},o=r(0),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard-content-one"},[r("div",{staticClass:"breadcrumbs-area"},[r("div",{staticClass:"float-right"},[r("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"AddTest"}}},[t._v("Add Tests")])],1),t._v(" "),r("h3",[t._v("View Tests")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:{name:"OnlineExamMaster"}}},[t._v("Online Exam Master")])],1),t._v(" "),r("li",[t._v("View Tests")])])]),t._v(" "),r("b-form-group",[r("b-input",{attrs:{type:"search",placeholder:"Search ..."},model:{value:t.s,callback:function(e){t.s="string"==typeof e?e.trim():e},expression:"s"}})],1),t._v(" "),t.tests.data?t._e():r("b-card",{staticClass:"text-center h-auto"},[r("b-spinner",{staticStyle:{width:"48px",height:"48px"},attrs:{label:"Spinning"}})],1),t._v(" "),t.tests.data?r("div",[t.tests.data.length?t._e():r("b-card",{staticClass:"h-auto"},[t._v("\n            No record(s) found.\n        ")]),t._v(" "),t.tests.data.length?r("b-card",{staticClass:"h-auto",scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"float-right"},[t._v("\n                    "+t._s(t.tests.from)+" - "+t._s(t.tests.to)+" of "+t._s(t.tests.total)+" record(s) are showing.\n                ")]),t._v(" "),r("a",{staticClass:"icon icon-delete text-dark",attrs:{href:"javascript:",title:"Remove Selected"},on:{click:t.deleteMultiple}}),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.limit=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),r("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),r("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),r("option",{attrs:{value:"100"}},[t._v("100")])]),t._v(" "),r("span",[t._v("Per Page")])]},proxy:!0}],null,!1,1160238804)},[t._v(" "),r("div",{staticClass:"table-responsive"},[r("b-table",{attrs:{fields:t.test.fields,items:t.tests.data,striped:"",bordered:""},scopedSlots:t._u([{key:"head(index)",fn:function(e){return[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAll,expression:"checkAll"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.checkAll)?t._i(t.checkAll,"1")>-1:t.checkAll},on:{click:t.selectAll,change:function(e){var r=t.checkAll,n=e.target,i=!!n.checked;if(Array.isArray(r)){var o=t._i(r,"1");n.checked?o<0&&(t.checkAll=r.concat(["1"])):o>-1&&(t.checkAll=r.slice(0,o).concat(r.slice(o+1)))}else t.checkAll=i}}}),t._v("\n                            "+t._s(e.label)+"\n                        ")])]}},{key:"cell(index)",fn:function(e){return[r("label",[e.item.stock?t._e():r("input",{directives:[{name:"model",rawName:"v-model",value:t.test.check,expression:"test.check"}],attrs:{type:"checkbox"},domProps:{value:e.item.id,checked:Array.isArray(t.test.check)?t._i(t.test.check,e.item.id)>-1:t.test.check},on:{change:function(r){var n=t.test.check,i=r.target,o=!!i.checked;if(Array.isArray(n)){var a=e.item.id,s=t._i(n,a);i.checked?s<0&&t.$set(t.test,"check",n.concat([a])):s>-1&&t.$set(t.test,"check",n.slice(0,s).concat(n.slice(s+1)))}else t.$set(t.test,"check",o)}}}),t._v(" "),e.item.stock?r("span",{staticClass:"icon-x-square"}):t._e(),t._v("\n                            "+t._s(e.index+t.tests.from)+".\n                        ")])]}},{key:"cell(name)",fn:function(e){return[r("div",[r("router-link",{attrs:{to:{name:"EditTest",params:{id:e.item.id}}}},[r("i",{staticClass:"icon-mode_edit"}),t._v(" "+t._s(e.item.name))])],1)]}},{key:"cell(questions)",fn:function(e){return[r("div",[r("router-link",{attrs:{to:{name:"AddTestQuestion",params:{test_id:e.item.id}}}},[t._v("Add")]),t._v(" |\n                            \n                            "),r("router-link",{attrs:{to:{name:"ViewTestQuestion",params:{test_id:e.item.id}}}},[t._v("View ("+t._s(e.item.test_questions_count)+")")])],1)]}}],null,!1,2519021979)})],1),t._v(" "),r("pagination",{attrs:{data:t.tests,limit:2},on:{"pagination-change-page":t.fetchTests}})],1):t._e()],1):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},76:function(t,e,r){t.exports=r(273)}}]);
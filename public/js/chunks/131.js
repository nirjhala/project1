(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{273:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return A()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function h(){}function f(){}function d(){}var v={};v[o]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(q([])));y&&y!==e&&n.call(y,o)&&(v=y);var m=d.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function q(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return f.prototype=m.constructor=d,d.constructor=f,f.displayName=s(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new _(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),s(m,a,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=q,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:q(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},568:function(t,e,n){"use strict";n.r(e);var r=n(1),o={data:function(){return{s:"",limit:10,checkAll:!1,question:{check:[],fields:[{key:"index",label:"Sr. No."},{key:"question",sortable:!0},{key:"option1",sortable:!0},{key:"option2",sortable:!0},{key:"option3",sortable:!0},{key:"option4",sortable:!0}]},questions:{}}},mounted:function(){this.fetchQuestions()},methods:{searchAfterDebounce:_.debounce((function(){this.fetchQuestions()}),500),selectAll:function(){if(this.question.check=[],!this.checkAll)for(var t in this.questions.data)this.questions.data[t].stock||this.question.check.push(this.questions.data[t].id)},fetchQuestions:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.questions={},Object(r.Bc)("page=".concat(e,"&limit=").concat(this.limit,"&s=").concat(this.s)).then((function(e){t.questions=e.data}))},deleteMultiple:function(){var t=this;this.question.check.length?swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e&&Object(r.sb)({ids:t.question.check}).then((function(e){t.$toast.success(e.data.message),t.fetchQuestions(1)}))})):swal("Warning","Please select at least one record to delete.","warning")}},watch:{s:function(){this.searchAfterDebounce()},limit:function(){this.fetchQuestions(1)}}},i=n(0),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-content-one"},[n("div",{staticClass:"breadcrumbs-area"},[n("div",{staticClass:"float-right"},[n("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"AddQuestion"}}},[t._v("Add Questions")])],1),t._v(" "),n("h3",[t._v("View Questions")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"OnlineExamMaster"}}},[t._v("Online Exam Master")])],1),t._v(" "),n("li",[t._v("View Questions")])])]),t._v(" "),n("b-form-group",[n("b-input",{attrs:{type:"search",placeholder:"Search ..."},model:{value:t.s,callback:function(e){t.s="string"==typeof e?e.trim():e},expression:"s"}})],1),t._v(" "),t.questions.data?t._e():n("b-card",{staticClass:"text-center h-auto"},[n("b-spinner",{staticStyle:{width:"48px",height:"48px"},attrs:{label:"Spinning"}})],1),t._v(" "),t.questions.data?n("div",[t.questions.data.length?t._e():n("b-card",{staticClass:"h-auto"},[t._v("\n            No record(s) found.\n        ")]),t._v(" "),t.questions.data.length?n("b-card",{staticClass:"h-auto",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"float-right"},[t._v("\n                    "+t._s(t.questions.from)+" - "+t._s(t.questions.to)+" of "+t._s(t.questions.total)+" record(s) are showing.\n                ")]),t._v(" "),n("a",{staticClass:"icon icon-delete text-dark",attrs:{href:"javascript:",title:"Remove Selected"},on:{click:t.deleteMultiple}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.limit=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),n("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),n("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),n("option",{attrs:{value:"100"}},[t._v("100")])]),t._v(" "),n("span",[t._v("Per Page")])]},proxy:!0}],null,!1,2765808140)},[t._v(" "),n("div",{staticClass:"table-responsive"},[n("b-table",{attrs:{fields:t.question.fields,items:t.questions.data,striped:"",bordered:""},scopedSlots:t._u([{key:"head(index)",fn:function(e){return[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAll,expression:"checkAll"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.checkAll)?t._i(t.checkAll,"1")>-1:t.checkAll},on:{click:t.selectAll,change:function(e){var n=t.checkAll,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,"1");r.checked?i<0&&(t.checkAll=n.concat(["1"])):i>-1&&(t.checkAll=n.slice(0,i).concat(n.slice(i+1)))}else t.checkAll=o}}}),t._v("\n                            "+t._s(e.label)+".\n                        ")])]}},{key:"cell(index)",fn:function(e){return[n("label",[e.item.stock?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.question.check,expression:"question.check"}],attrs:{type:"checkbox"},domProps:{value:e.item.id,checked:Array.isArray(t.question.check)?t._i(t.question.check,e.item.id)>-1:t.question.check},on:{change:function(n){var r=t.question.check,o=n.target,i=!!o.checked;if(Array.isArray(r)){var a=e.item.id,s=t._i(r,a);o.checked?s<0&&t.$set(t.question,"check",r.concat([a])):s>-1&&t.$set(t.question,"check",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.question,"check",i)}}}),t._v(" "),e.item.stock?n("span",{staticClass:"icon-x-square"}):t._e(),t._v("\n                            "+t._s(e.index+t.questions.from)+".\n                        ")])]}},{key:"cell(question)",fn:function(e){return[n("div",{domProps:{innerHTML:t._s(e.item.question)}}),t._v(" "),n("div",[n("router-link",{attrs:{to:{name:"EditQuestion",params:{id:e.item.id}}}},[n("i",{staticClass:"icon-mode_edit"}),t._v(" Edit")])],1)]}}],null,!1,2435257101)})],1),t._v(" "),n("pagination",{attrs:{data:t.questions,limit:2},on:{"pagination-change-page":t.fetchQuestions}})],1):t._e()],1):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},76:function(t,e,n){t.exports=n(273)}}]);
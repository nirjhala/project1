(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{249:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),c=new x(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return L()}for(n.method=i,n.arg=o;;){var c=n.delegate;if(c){var a=w(c,n);if(a){if(a===u)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,c),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function h(){}function f(){}function d(){}var v={};v[i]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(A([])));y&&y!==e&&n.call(y,i)&&(v=y);var m=d.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var r;this._invoke=function(i,o){function c(){return new e((function(r,c){!function r(i,o,c,a){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,a)}))}a(s.arg)}(i,o,r,c)}))}return r=r?r.then(c,c):c()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=m.constructor=d,d.constructor=f,f.displayName=a(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[o]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var c=new _(s(e,n,r,i),o);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(m),a(m,c,"Generator"),m[i]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;b(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},537:function(t,e,n){"use strict";n.r(e);var r=n(1),i={data:function(){return{s:"",limit:10,checkAll:!1,instruction:{check:[],fields:[{key:"index",label:"Sr. No."},{key:"title",sortable:!0},{key:"description"}]},instructions:{}}},mounted:function(){this.fetchInstructions()},methods:{searchAfterDebounce:_.debounce((function(){this.fetchInstructions()}),500),selectAll:function(){if(this.instruction.check=[],!this.checkAll)for(var t in this.instructions.data)this.instructions.data[t].stock||this.instruction.check.push(this.instructions.data[t].id)},fetchInstructions:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.instructions={},Object(r.sc)("page=".concat(e,"&limit=").concat(this.limit,"&s=").concat(this.s)).then((function(e){t.instructions=e.data}))},deleteMultiple:function(){var t=this;this.instruction.check.length?swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e&&Object(r.mb)({ids:t.instruction.check}).then((function(e){t.$toast.success(e.data.message),t.fetchInstructions(1)}))})):swal("Warning","Please select at least one record to delete.","warning")}},watch:{s:function(){this.searchAfterDebounce()},limit:function(){this.fetchInstructions(1)}}},o=n(0),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-content-one"},[n("div",{staticClass:"breadcrumbs-area"},[n("div",{staticClass:"float-right"},[n("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"AddInstruction"}}},[t._v("Add Instructions")])],1),t._v(" "),n("h3",[t._v("View Instructions")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"OnlineExamMaster"}}},[t._v("Online Exam Master")])],1),t._v(" "),n("li",[t._v("View Instructions")])])]),t._v(" "),n("b-form-group",[n("b-input",{attrs:{type:"search",placeholder:"Search ..."},model:{value:t.s,callback:function(e){t.s="string"==typeof e?e.trim():e},expression:"s"}})],1),t._v(" "),t.instructions.data?t._e():n("b-card",{staticClass:"text-center h-auto"},[n("b-spinner",{staticStyle:{width:"48px",height:"48px"},attrs:{label:"Spinning"}})],1),t._v(" "),t.instructions.data?n("div",[t.instructions.data.length?t._e():n("b-card",{staticClass:"h-auto"},[t._v("\n            No record(s) found.\n        ")]),t._v(" "),t.instructions.data.length?n("b-card",{staticClass:"h-auto",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"float-right"},[t._v("\n                    "+t._s(t.instructions.from)+" - "+t._s(t.instructions.to)+" of "+t._s(t.instructions.total)+" record(s) are showing.\n                ")]),t._v(" "),n("a",{staticClass:"icon icon-delete text-dark",attrs:{href:"javascript:",title:"Remove Selected"},on:{click:t.deleteMultiple}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.limit=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),n("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),n("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),n("option",{attrs:{value:"100"}},[t._v("100")])]),t._v(" "),n("span",[t._v("Per Page")])]},proxy:!0}],null,!1,4115419002)},[t._v(" "),n("div",{staticClass:"table-responsive"},[n("b-table",{attrs:{fields:t.instruction.fields,items:t.instructions.data,striped:"",bordered:""},scopedSlots:t._u([{key:"head(index)",fn:function(e){return[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAll,expression:"checkAll"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.checkAll)?t._i(t.checkAll,"1")>-1:t.checkAll},on:{click:t.selectAll,change:function(e){var n=t.checkAll,r=e.target,i=!!r.checked;if(Array.isArray(n)){var o=t._i(n,"1");r.checked?o<0&&(t.checkAll=n.concat(["1"])):o>-1&&(t.checkAll=n.slice(0,o).concat(n.slice(o+1)))}else t.checkAll=i}}}),t._v("\n                            "+t._s(e.label)+".\n                        ")])]}},{key:"cell(index)",fn:function(e){return[n("label",[e.item.stock?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.instruction.check,expression:"instruction.check"}],attrs:{type:"checkbox"},domProps:{value:e.item.id,checked:Array.isArray(t.instruction.check)?t._i(t.instruction.check,e.item.id)>-1:t.instruction.check},on:{change:function(n){var r=t.instruction.check,i=n.target,o=!!i.checked;if(Array.isArray(r)){var c=e.item.id,a=t._i(r,c);i.checked?a<0&&t.$set(t.instruction,"check",r.concat([c])):a>-1&&t.$set(t.instruction,"check",r.slice(0,a).concat(r.slice(a+1)))}else t.$set(t.instruction,"check",o)}}}),t._v(" "),e.item.stock?n("span",{staticClass:"icon-x-square"}):t._e(),t._v("\n                            "+t._s(e.index+t.instructions.from)+".\n                        ")])]}},{key:"cell(title)",fn:function(e){return[n("div",[n("router-link",{attrs:{to:{name:"EditInstruction",params:{id:e.item.id}}}},[n("i",{staticClass:"icon-mode_edit"}),t._v(" "+t._s(e.item.title))])],1)]}},{key:"cell(description)",fn:function(e){return[n("div",{domProps:{innerHTML:t._s(e.item.description)}})]}}],null,!1,3287409835)})],1),t._v(" "),n("pagination",{attrs:{data:t.instructions,limit:2},on:{"pagination-change-page":t.fetchInstructions}})],1):t._e()],1):t._e()],1)}),[],!1,null,null,null);e.default=c.exports},60:function(t,e,n){t.exports=n(249)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{249:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function h(){}function f(){}function d(){}var v={};v[o]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(L([])));y&&y!==e&&r.call(y,o)&&(v=y);var m=d.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=m.constructor=d,d.constructor=f,f.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,a,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},529:function(t,e,r){"use strict";r.r(e);var n=r(1),o={data:function(){return{s:"",limit:100,checkAll:!1,stock:{check:[],fields:[{key:"index",label:"Sr. No."},{key:"item.name",label:"Item Name",sortable:!0},{key:"qty_in"},{key:"qty_out"},{key:"remarks",sortable:!0},{label:"Date",key:"created_at",sortable:!0}]},stocks:{}}},mounted:function(){this.fetchReceipts()},methods:{searchAfterDebounce:_.debounce((function(){this.fetchReceipts()}),500),selectAll:function(){if(this.stock.check=[],!this.checkAll)for(var t in this.stocks.data)this.stocks.data[t].stock||this.stock.check.push(this.stocks.data[t].id)},fetchReceipts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.stocks={},Object(n.Hc)("page=".concat(e,"&limit=").concat(this.limit,"&s=").concat(this.s)).then((function(e){t.stocks=e.data}))}},watch:{s:function(){this.searchAfterDebounce()},limit:function(){this.fetchReceipts(1)}}},i=r(0),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard-content-one"},[r("div",{staticClass:"breadcrumbs-area"},[r("h3",[t._v("Stock Report")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:{name:"InventoryMaster"}}},[t._v("Inventory Master")])],1),t._v(" "),r("li",[t._v("Stock Report")])])]),t._v(" "),t.stocks.data?t._e():r("b-card",{staticClass:"text-center h-auto"},[r("b-spinner",{staticStyle:{width:"48px",height:"48px"},attrs:{label:"Spinning"}})],1),t._v(" "),t.stocks.data?r("div",[t.stocks.data.length?t._e():r("b-card",{staticClass:"h-auto"},[t._v("\n            No record(s) found.\n        ")]),t._v(" "),t.stocks.data.length?r("b-card",{staticClass:"h-auto",scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"float-right"},[t._v("\n                    "+t._s(t.stocks.from)+" - "+t._s(t.stocks.to)+" of "+t._s(t.stocks.total)+" record(s) are showing.\n                ")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.limit=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),r("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),r("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),r("option",{attrs:{value:"100"}},[t._v("100")])]),t._v(" "),r("span",[t._v("Per Page")])]},proxy:!0}],null,!1,1419024583)},[t._v(" "),r("div",{staticClass:"table-responsive"},[r("b-table",{attrs:{fields:t.stock.fields,items:t.stocks.data,"foot-clone":!0,striped:"",bordered:""},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[r("label",[t._v("\n                            "+t._s(e.index+t.stocks.from)+".\n                        ")])]}},{key:"cell(action)",fn:function(e){return[r("a",{attrs:{href:t.baseURL+"invoice/stock/"+e.item.id,target:"_blank"}},[r("i",{staticClass:"icon-print"}),t._v(" Print")])]}},{key:"cell(created_at)",fn:function(e){return[t._v("\n                        "+t._s(t._f("formatDate")(e.item.created_at))+"\n                    ")]}},{key:"cell(description)",fn:function(e){return[r("div",[r("router-link",{attrs:{to:{name:"EditReceipt",params:{id:e.item.id}}}},[r("i",{staticClass:"icon-mode_edit"}),t._v(" "+t._s(e.item.organization_name))])],1),t._v(" "),r("div",[t._v(t._s(e.item.name))])]}}],null,!1,806476923)})],1),t._v(" "),r("pagination",{attrs:{data:t.stocks,limit:2},on:{"pagination-change-page":t.fetchReceipts}})],1):t._e()],1):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},60:function(t,e,r){t.exports=r(249)}}]);
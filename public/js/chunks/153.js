(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{273:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=b(i,n);if(s){if(s===c)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===c)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var c={};function h(){}function f(){}function p(){}var v={};v[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(E([])));y&&y!==e&&n.call(y,o)&&(v=y);var d=p.prototype=h.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,s){var u=l(t[o],t,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(h).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,s)}))}s(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,c;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=d.constructor=p,p.constructor=f,f.displayName=s(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,i,"GeneratorFunction")),t.prototype=Object.create(d),t},t.awrap=function(t){return{__await:t}},_(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new g(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(d),s(d,i,"Generator"),d[o]=function(){return this},d.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;F(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},503:function(t,e,n){"use strict";n.r(e);var r=n(1),o=new Date,a=o.getFullYear(),i={data:function(){return{errors:0,lists:[],fee_setting:{},loaded:0,amount:0,penalty_amount:0}},computed:{totalFees:function(){var t=0;return this.lists.forEach((function(e){"due"==e.pay_status&&(t+=parseFloat(e.amount-e.paid_amount))})),t},penaltyAmt:function(){var t=this,e=0;return this.lists.forEach((function(n,r){if("paid"==n.pay_status)e+=parseFloat(n.penalty_amount-n.paid_penalty);else{n.month>9?"0".concat(n.month):n.month;var i=n.month>3?new Date(a,n.month-1,t.fee_setting.fee_day):new Date(a+1,n.month-1,t.fee_setting.fee_day),s=0;switch(t.fee_setting.penalty_type){case"daily":s=Math.round((o-i)/864e5);break;case"weekly":s=Math.round((o-i)/6048e5);break;case"monthly":s=t.monthDiff(o,i)}s=s>0?s:0,t.lists[r].penalty_amount=t.fee_setting.penalty_amount*s,e+=t.lists[r].penalty_amount}})),e}},mounted:function(){this.getLists()},methods:{monthDiff:function(t,e){var n;return n=12*(t.getFullYear()-e.getFullYear()),n-=e.getMonth(),n+=t.getMonth(),t.getDate()<e.getDate()&&month--,n<=0?0:n},getLists:function(){var t=this;this.loaded=0,Object(r.pc)().then((function(e){t.fee_setting=e.data})),r.D.studentFees(this.$route.params.id).then((function(e){setTimeout((function(){t.lists=e.data,t.amount=t.totalFees,t.penalty_amount=t.penaltyAmt}),300)})).catch((function(t){console.log("Errors: ",t)}))},payFees:function(){var t=this,e=this.amount,n={};this.lists.forEach((function(t){n[t.id]=t.penalty_amount-t.paid_penalty})),(e&&e>0||this.penalty_amount||this.penalty_amount>0)&&Object(r.Bb)({sid:this.$route.params.id,amount:this.amount,penalty_amount:this.penalty_amount,installment_penalty:n}).then((function(e){t.$toast.success(e.message),t.getLists()}))}},watch:{amount:function(t){var e=this;parseFloat(t)>parseFloat(this.totalFees)&&setTimeout((function(){e.amount=parseFloat(e.totalFees)}),1),this.totalFees>0&&t<this.totalFees?setTimeout((function(){e.penalty_amount=0}),1):t==this.totalFees&&0==this.penalty_amount&&(this.penalty_amount=this.penaltyAmt)},penalty_amount:function(t){var e=this;parseFloat(t)>parseFloat(this.penaltyAmt)&&setTimeout((function(){e.penalty_amount=parseFloat(e.penaltyAmt)}),1)}}},s=n(0),u=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-content-one"},[n("div",{staticClass:"breadcrumbs-area"},[n("h3",[t._v("Pay Fee")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"StudentMaster"}}},[t._v("Student Master")])],1),t._v(" "),n("li",[t._v("Pay Fee")])])]),t._v(" "),t.lists.length?n("b-row",[n("b-col",{attrs:{sm:"8"}},[n("b-card",{attrs:{header:"Fees Summary"}},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[n("thead",[n("tr",[n("th",[t._v("#")]),t._v(" "),n("th",[t._v("FEES AMOUNT")]),t._v(" "),n("th",[t._v("MONTH")]),t._v(" "),n("th",[t._v("Pay Status")]),t._v(" "),n("th",[t._v("Paid Amount")]),t._v(" "),n("th",[t._v("Due Amount")]),t._v(" "),n("th",[t._v("Penalty")]),t._v(" "),n("th",[t._v("Due Penalty")])])]),t._v(" "),n("tbody",[t._l(t.lists,(function(e,r){return n("tr",{key:r,class:"paid"==e.pay_status?"bg-success text-white":"bg-danger text-white"},[n("td",[t._v(t._s(r+1))]),t._v(" "),n("td",[t._v("₹ "+t._s(e.amount))]),t._v(" "),n("td",[t._v(t._s(e.month))]),t._v(" "),n("td",[t._v("\n                                    "+t._s(e.pay_status)+"\n                                ")]),t._v(" "),n("td",[t._v(t._s(e.paid_amount))]),t._v(" "),n("td",[t._v(t._s(e.amount-e.paid_amount))]),t._v(" "),n("td",[t._v(t._s(e.penalty_amount))]),t._v(" "),n("td",[t._v(t._s(e.penalty_amount-e.paid_penalty))])])})),t._v(" "),n("tr",[n("th",{attrs:{colspan:"6"}},[t._v("\n                                    TOTAL DUE FEES AMOUNT\n                                ")]),t._v(" "),n("th",{attrs:{colspan:"2"}},[t._v("₹ "+t._s(t.totalFees))])]),t._v(" "),n("tr",[n("th",{attrs:{colspan:"6"}},[n("span",{staticClass:"float-right"},[t._v("(+)")]),t._v("\n                                    TOTAL PENALTY AMOUNT (due to late fees)\n                                ")]),t._v(" "),n("th",{attrs:{colspan:"2"}},[t._v("₹ "+t._s(t.penaltyAmt))])]),t._v(" "),n("tr",[n("th",{attrs:{colspan:"6"}},[t._v("\n                                    TOTAL PAYABLE AMOUNT\n                                ")]),t._v(" "),n("th",{attrs:{colspan:"2"}},[t._v("₹ "+t._s(t.totalFees+t.penaltyAmt))])])],2)])])])],1),t._v(" "),n("b-col",{attrs:{sm:"4"}},[n("b-card",{attrs:{header:"Pay Fees"}},[n("b-form",[n("b-form-group",{attrs:{label:"Amount"}},[n("b-input",{attrs:{type:"number",min:"1",max:t.totalFees,placeholder:"Enter Fees Amount"},on:{focus:function(t){return t.target.select()}},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Penalty Amount"}},[n("b-input",{attrs:{type:"number",min:"0",max:t.penaltyAmt,placeholder:"Enter Penalty Amount"},on:{focus:function(t){return t.target.select()}},model:{value:t.penalty_amount,callback:function(e){t.penalty_amount=e},expression:"penalty_amount"}})],1),t._v(" "),n("b-form-group",[t.amount>0||t.penalty_amount>0?n("b-button",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{block:""},on:{click:t.payFees}},[t._v("Pay Now")]):t._e()],1)],1)],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=u.exports},76:function(t,e,n){t.exports=n(273)}}]);
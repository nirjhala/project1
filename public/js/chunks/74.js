(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{249:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function i(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new x(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return C()}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var l=b(c,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var i=s(t,e,n);if("normal"===i.type){if(r=n.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r="completed",n.method="throw",n.arg=i.arg)}}}(t,n,c),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=i;var u={};function h(){}function d(){}function f(){}var v={};v[o]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(_([])));y&&y!==e&&n.call(y,o)&&(v=y);var g=f.prototype=h.prototype=Object.create(v);function m(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var r;this._invoke=function(o,a){function c(){return new e((function(r,c){!function r(o,a,c,l){var i=s(t[o],t,a);if("throw"!==i.type){var u=i.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,l)}))}l(i.arg)}(o,a,r,c)}))}return r=r?r.then(c,c):c()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=g.constructor=f,f.constructor=d,d.displayName=l(f,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var c=new k(i(e,n,r,o),a);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},m(g),l(g,c,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),i=n.call(a,"finallyLoc");if(l&&i){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},331:function(t,e,n){"use strict";var r=n(38);n.n(r).a},332:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".checkbox-list-item,.checkbox-list-item input[type=checkbox]+span{display:block}.checkbox-list-item input[type=checkbox]{display:none}.checkbox-list-item input[type=checkbox]+span{padding:5px 15px;border:1px solid #ccc;margin-bottom:1px;cursor:pointer;border-radius:3px}.checkbox-list-item input[type=checkbox]:checked+span{background:#042954;color:#fff}",""])},38:function(t,e,n){var r=n(332);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(t.exports=r.locals)},440:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),a=n(1),c={data:function(){return{errors:0,s:"",unallocatedCheckAll:null,allocatedCheckAll:null,allocated:[],unallocated:[],student:{allocated:{},unallocated:{}}}},mounted:function(){this.title=this.$route.params.role,this.fetchAllotStudents()},methods:{searchAfterDebounce:o.a.debounce((function(){this.getRecords()}),500),fetchAllotStudents:function(){var t=this;a.D.fetchAllotStudents(this.$route.params.id).then((function(e){t.student=e.data})).catch((function(t){console.log("Fetch Error: ",t)}))},allocateAssignemnt:function(){var t=this;a.D.addAssignmentStudent(this.$route.params.id,this.allocated).then((function(e){t.fetchAllotStudents()})).catch((function(t){console.log("Fetch Error: ",t)}))},unallocateAssignemnt:function(){var t=this;a.D.deleteAssignmentStudent(this.$route.params.id,this.unallocated).then((function(e){t.fetchAllotStudents()})).catch((function(t){console.log("Fetch Error: ",t)}))},getRecords:function(t){var e=this;void 0===t&&(t=1),this.loaded=0,a.D.fetchAssignments(t,this.s).then((function(t){e.lists=t.data,e.loaded=1})).catch((function(t){e.loaded=1,console.log(t)}))},deleteRecord:function(){var t=this,e={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n&&(t.loaded=0,a.D.deleteAssignments(e).then((function(e){t.getRecords(),t.$toast.success("Selected record(s) has been deleted.")})).catch((function(e){t.loaded=1,console.log(e)})))}))}},watch:{s:function(t){this.searchAfterDebounce()},allocatedCheckAll:function(t){if(this.allocated=[],t)for(var e in this.student.unallocated)this.allocated.push(e)},allocated:function(t){Object.keys(this.student.unallocated).length==this.allocated.length&&(this.allocatedCheckAll=1),0==this.allocated.length&&(this.allocatedCheckAll=null)},unallocatedCheckAll:function(t){if(this.unallocated=[],t)for(var e in this.student.allocated)this.unallocated.push(e)},unallocated:function(t){Object.keys(this.student.allocated).length==this.unallocated.length&&(this.unallocatedCheckAll=1),0==this.unallocated.length&&(this.unallocatedCheckAll=null)}}},l=(n(331),n(0)),i=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-content-one"},[n("div",{staticClass:"breadcrumbs-area"},[n("div",{staticClass:"float-right"},[n("router-link",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{to:{name:"AssignmentIssue"}}},[t._v("Add New")])],1),t._v(" "),n("h3",[t._v("Allot Assignment")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"AssignmentMaster"}}},[t._v("Assignment Master")])],1),t._v(" "),n("li",[t._v("Allot Assignment")])])]),t._v(" "),n("div",{staticClass:"mg-b-20"},[n("div",{staticClass:"row gutters-8"},[n("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.s,expression:"s"}],staticClass:"form-control bg-white",attrs:{type:"search",placeholder:"Search ..."},domProps:{value:t.s},on:{input:function(e){e.target.composing||(t.s=e.target.value)}}})])])]),t._v(" "),n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("b-card",{attrs:{header:"Unallocated Students"}},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.allocatedCheckAll,expression:"allocatedCheckAll"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.allocatedCheckAll)?t._i(t.allocatedCheckAll,"1")>-1:t.allocatedCheckAll},on:{change:function(e){var n=t.allocatedCheckAll,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=t._i(n,"1");r.checked?a<0&&(t.allocatedCheckAll=n.concat(["1"])):a>-1&&(t.allocatedCheckAll=n.slice(0,a).concat(n.slice(a+1)))}else t.allocatedCheckAll=o}}}),t._v(" "),n("span",[t._v("Check All")])]),t._v(" "),t._l(t.student.unallocated,(function(e,r){return n("label",{key:r,staticClass:"checkbox-list-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.allocated,expression:"allocated"}],attrs:{type:"checkbox"},domProps:{value:r,checked:Array.isArray(t.allocated)?t._i(t.allocated,r)>-1:t.allocated},on:{change:function(e){var n=t.allocated,o=e.target,a=!!o.checked;if(Array.isArray(n)){var c=r,l=t._i(n,c);o.checked?l<0&&(t.allocated=n.concat([c])):l>-1&&(t.allocated=n.slice(0,l).concat(n.slice(l+1)))}else t.allocated=a}}}),t._v(" "),n("span",[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"text-center"},[n("button",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{type:"button"},on:{click:t.allocateAssignemnt}},[t._v("Allocate "),n("i",{staticClass:"icon-long-arrow-right"})])])],2)],1),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("b-card",{attrs:{header:"Allocated Students"}},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.unallocatedCheckAll,expression:"unallocatedCheckAll"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.unallocatedCheckAll)?t._i(t.unallocatedCheckAll,"1")>-1:t.unallocatedCheckAll},on:{change:function(e){var n=t.unallocatedCheckAll,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=t._i(n,"1");r.checked?a<0&&(t.unallocatedCheckAll=n.concat(["1"])):a>-1&&(t.unallocatedCheckAll=n.slice(0,a).concat(n.slice(a+1)))}else t.unallocatedCheckAll=o}}}),t._v(" "),n("span",[t._v("Check All")])]),t._v(" "),t._l(t.student.allocated,(function(e,r){return n("label",{key:r,staticClass:"checkbox-list-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.unallocated,expression:"unallocated"}],attrs:{type:"checkbox"},domProps:{value:r,checked:Array.isArray(t.unallocated)?t._i(t.unallocated,r)>-1:t.unallocated},on:{change:function(e){var n=t.unallocated,o=e.target,a=!!o.checked;if(Array.isArray(n)){var c=r,l=t._i(n,c);o.checked?l<0&&(t.unallocated=n.concat([c])):l>-1&&(t.unallocated=n.slice(0,l).concat(n.slice(l+1)))}else t.unallocated=a}}}),t._v(" "),n("span",[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"text-center"},[n("button",{staticClass:"fw-btn-fill btn-gradient-yellow text-white",attrs:{type:"button"},on:{click:t.unallocateAssignemnt}},[n("i",{staticClass:"icon-long-arrow-left"}),t._v(" Unallocate")])])],2)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports},60:function(t,e,n){t.exports=n(249)}}]);
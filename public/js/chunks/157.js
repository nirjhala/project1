(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{548:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{lists:{},errors:[],loaded:0,teacher:[],token:localStorage.getItem("token")}},mounted:function(){this.$route.params;this.getSections(),this.loaded=1},methods:{getSections:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-all-sections").then((function(e){t.lists=e.data.data,t.teacher=[];var a=[];t.lists.data.forEach((function(t,e){var s,r,i,l=t.class_teacher?t.class_teacher:"";a.push((s={},r=t.id,i=l,r in s?Object.defineProperty(s,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[r]=i,s))})),t.teacher=a}))},updateData:function(){var t=this;this.loaded=0;var e={teachers:this.teacher};axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("allocate-class-teacher",e).then((function(e){t.loaded=1,t.$toast.success("Changes saved successfully.")}))}}},r=a(0),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Class Teacher Allocation")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Class Teacher Allocation")])])]),t._v(" "),a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),t._v(" "),t.loaded?a("div",[t.lists.data?a("form",{staticClass:"new-added-form",on:{submit:function(e){return e.preventDefault(),t.updateData()}}},[t.errors.length?a("div",{staticClass:"alert alert-danger"},[a("ul",{staticClass:"mb-0"},t._l(t.errors,(function(e,s){return a("li",{key:s},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),a("div",{staticClass:"table-responsive mb-3"},[a("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),a("tbody",t._l(t.lists.data,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s+t.lists.from)+".")]),t._v(" "),a("td",[t._v(t._s(e.cls.dept.dept_name)+" » "+t._s(e.cls.name)+" ‐ "+t._s(e.name))]),t._v(" "),a("td",[a("div",{staticStyle:{width:"200px"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.teacher[s][e.id],expression:"teacher[i][list.id]"}],staticClass:"form-control",on:{change:function(a){var r=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.teacher[s],e.id,a.target.multiple?r:r[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Teacher")]),t._v(" "),t._l(e.teachers,(function(e,s){return a("option",{key:s,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])])])})),0)])]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.lists.data?t._e():a("div",[a("div",{staticClass:"alert alert-warning"},[t._v("\n                        No records found!\n                    ")])])]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("#")]),this._v(" "),e("th",[this._v("Class Name")]),this._v(" "),e("th",[this._v("Class Teacher")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[this._v("Save & Submit")])])}],!1,null,null,null);e.default=i.exports}}]);
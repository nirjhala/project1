(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{555:function(t,e,n){"use strict";n.r(e);n(4);var s=new Date,i=new Array;i[0]="January",i[1]="February",i[2]="March",i[3]="April",i[4]="May",i[5]="June",i[6]="July",i[7]="August",i[8]="September",i[9]="October",i[10]="November",i[11]="December";var a=i[s.getMonth()]+" "+s.getFullYear(),c={data:function(){return{errors:0,month:a,class_full_name:"",timeslots:[],weekdays:[],lists:[],s:"",loaded:0,editFlag:!1,token:localStorage.getItem("token")}},computed:{attdLists:function(){var t=this;return this.lists.filter((function(e,n){return e.month==t.month}))},allMonths:function(){var t=[];return this.lists.forEach((function(e,n){t.push(e.month)})),t}},mounted:function(){this.getAttendence()},methods:{getAttendence:function(){var t=this,e=axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}),n=this;e.post("attendence/student").then((function(t){n.loaded=1,t.status?n.lists=t.data:n.errors=1})).catch((function(e){t.loaded=1,console.log(e)}))}}},r=n(0),o=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-content-one"},[n("div",{staticClass:"breadcrumbs-area"},[n("h3",[t._v("Attendence")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),n("li",[t._v("Attendence")])])]),t._v(" "),n("div",{staticClass:"card height-auto"},[n("div",{staticClass:"card-body"},[t.loaded?t._e():n("div",{staticClass:"text-center"},[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),t._v(" "),t.loaded?n("div",[n("div",{staticClass:"form-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.month=e.target.multiple?n:n[0]}}},t._l(t.allMonths,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)]),t._v(" "),n("div",{attrs:{id:"attendence"}},[t.attdLists?n("div",{staticClass:"table-responsive"},t._l(t.attdLists,(function(e,s){return n("div",{key:"m_"+s},[n("div",{staticClass:"p-3 bg-dark text-white"},[t._v(t._s(e.month))]),t._v(" "),t._m(0,!0),t._v(" "),n("div",{staticClass:"d-flex flex-wrap"},[t._l(e.start_week,(function(t){return n("div",{key:"w"+t,staticClass:"d-flex align-items-center justify-content-center text-center",staticStyle:{width:"14.28%",height:"100px",border:"1px solid #ccc","font-size":"18px",background:"#bdc3c7"}})})),t._v(" "),t._l(e.days,(function(e,s){return n("div",{key:"date_"+s,staticClass:"d-flex align-items-center justify-content-center text-center",class:e.class_name,staticStyle:{width:"14.28%",height:"100px",border:"1px solid #ccc","font-size":"18px",background:"#f9f9f9"}},[n("div",[n("div",[t._v(t._s(e.date))]),t._v(" "),n("div",[t._v(t._s(e.status))])])])})),t._v(" "),t._l(e.left,(function(t){return n("div",{key:t,staticClass:"d-flex align-items-center justify-content-center text-center",staticStyle:{width:"14.28%",height:"100px",border:"1px solid #ccc","font-size":"18px",background:"#bdc3c7"}})}))],2)])})),0):t._e()])]):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex bg-info text-white"},[n("div",{staticClass:"d-flex align-items-center justify-content-center text-center",staticStyle:{width:"14.28%",height:"30px",border:"1px solid #ccc","font-size":"18px"}},[t._v("\n                                    Sunday\n                                ")]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center text-center",staticStyle:{width:"14.28%",height:"30px",border:"1px solid #ccc","font-size":"18px"}},[t._v("\n                                    Monday\n                                ")]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center text-center",staticStyle:{width:"14.28%",height:"30px",border:"1px solid #ccc","font-size":"18px"}},[t._v("\n                                    Tuesday\n                                ")]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center text-center",staticStyle:{width:"14.28%",height:"30px",border:"1px solid #ccc","font-size":"18px"}},[t._v("\n                                    Wednesday\n                                ")]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center text-center",staticStyle:{width:"14.28%",height:"30px",border:"1px solid #ccc","font-size":"18px"}},[t._v("\n                                    Thursday\n                                ")]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center text-center",staticStyle:{width:"14.28%",height:"30px",border:"1px solid #ccc","font-size":"18px"}},[t._v("\n                                    Friday\n                                ")]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center text-center",staticStyle:{width:"14.28%",height:"30px",border:"1px solid #ccc","font-size":"18px"}},[t._v("\n                                    Saturday\n                                ")])])}],!1,null,null,null);e.default=o.exports}}]);
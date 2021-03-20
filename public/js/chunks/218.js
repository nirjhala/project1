(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{605:function(t,e,n){"use strict";n.r(e);n(4);var a={data:function(){return{errors:0,teacher:"",teacher_name:"",timeslots:[],weekdays:[],lists:[],loaded:0,editFlag:!1,token:localStorage.getItem("token")}},mounted:function(){this.getTimetable()},methods:{printTimeTable:function(){var t=document.getElementById("timetable"),e=window.open("","Time-Table","width=800,height=600");e.document.open();var n='\n            <html>\n                <head>\n                    <title>Time-Table</title>\n                    <style>\n                    body {\n                        margin:0;\n                        font-family: sans-serif;\n                    }\n                    table {\n                        width: 100%;\n                        border-collapse: collapse;\n                    }\n                    table, th, td {\n                        border: 1px solid #000;\n                        padding: 5px 10px;\n                        font-size: 12px;\n                    }\n                    th {\n                        background: #555;\n                        color: #fff;\n                    }\n                    .text-center {\n                        text-align: center;\n                    }\n                    div.table-responsive {\n                        margin: 10px;\n                        padding: 10px;\n                        border: 1px solid #000;\n                    }\n                    h4 {\n                        margin-top: 20px;\n                    }\n                    @page {\n                        margin: 0;\n                        size: landscape;\n                    }\n                    </style>\n                </head>\n                <body onload="window.print()">'.concat(t.innerHTML,"</body>\n            </html>");e.document.write(n),e.document.close(),setTimeout((function(){e.close()}),10)},getTimetable:function(){var t=this,e=axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}),n=this;e.post("timetable/teacher").then((function(t){n.loaded=1,t.status?(n.timeslots=t.data.timeslots,n.lists=t.data.data,n.weekdays=t.data.weekdays,n.teacher_name=t.data.teacher_name):n.errors=1})).catch((function(e){t.loaded=1,console.log(e)}))}}},s=n(0),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-content-one"},[n("div",{staticClass:"breadcrumbs-area"},[n("h3",[t._v("Time Table")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),n("li",[t._v("Time Table")])])]),t._v(" "),n("div",{staticClass:"card height-auto"},[n("div",{staticClass:"card-body"},[t.loaded?t._e():n("div",{staticClass:"text-center"},[n("b-spinner")],1),t._v(" "),t.loaded?n("div",[n("div",{attrs:{id:"timetable"}},[n("h4",{staticClass:"text-center"},[t._v("Time-Table of "+t._s(t.teacher_name))]),t._v(" "),t.lists?n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table display table-bordered text-nowrap"},[n("thead",[n("tr",[n("th",{staticClass:"text-center bg-dark text-white"},[t._v("Day")]),t._v(" "),t._l(t.weekdays,(function(e,a){return n("th",{key:a,staticClass:"text-center bg-dark text-white"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2)]),t._v(" "),n("tbody",t._l(t.lists,(function(e,a){return n("tr",{key:"slot"+a},[n("th",{staticClass:"text-center bg-dark text-white"},[n("div",[t._v(t._s(e.timeslot))]),t._v(" "),n("div",[t._v("\n                      "+t._s(e.timeslot_time)+"\n                    ")])]),t._v(" "),t._l(t.weekdays,(function(a,s){return n("td",{key:"wk"+s,staticClass:"text-center"},[n("div",[n("strong",[t._v(t._s(e[a]&&e[a].subject_info?e[a].subject_info.name:"-"))])]),t._v(" "),n("div",[t._v("\n                      "+t._s(e[a]&&e[a].section_info?"("+e[a].section_info.cls.name+" - "+e[a].section_info.name+")":"")+"\n                    ")])])}))],2)})),0)])]):t._e()]),t._v(" "),n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"button"},on:{click:function(e){return t.printTimeTable()}}},[t._v("\n            Print\n          ")])])]):t._e()])])])}),[],!1,null,null,null);e.default=i.exports}}]);
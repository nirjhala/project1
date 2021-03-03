(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{546:function(t,e,a){"use strict";a.r(e);a(4);var n={data:function(){return{errors:0,department:"",section:"",class_full_name:"",departments:[],classes:[],timeslots:[],weekdays:[],lists:[],allSelected:0,check:[],subject:{},teacher:{},subject_lists:[],teacher_lists:[],s:"",loaded:0,editFlag:!1,token:localStorage.getItem("token")}},mounted:function(){this.getDepts()},methods:{editAction:function(t){this.editFlag=t},updateData:function(){var t=this,e={subject:this.subject,teacher:this.teacher,department:this.department,section:this.section};axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("timetable/edit",e).then((function(e){t.$toast.success("Timetable updated successfully."),t.editAction(!1),t.getTimetable()}))},printTimeTable:function(){var t=document.getElementById("timetable"),e=window.open("","Time-Table","width=800,height=600");e.document.open();var a='\n            <html>\n                <head>\n                    <title>Time-Table</title>\n                    <style>\n                    body {\n                        margin:0;\n                        font-family: sans-serif;\n                    }\n                    table {\n                        width: 100%;\n                        border-collapse: collapse;\n                    }\n                    table, th, td {\n                        border: 1px solid #000;\n                        padding: 5px 10px;\n                        font-size: 8px;\n                    }\n                    th {\n                        background: #555;\n                        color: #fff;\n                    }\n                    .text-center {\n                        text-align: center;\n                    }\n                    div.table-responsive {\n                        margin: 15px;\n                        padding: 10px;\n                        border: 1px solid #000;\n                    }\n                    h4 {\n                        margin-top: 20px;\n                        text-align: center;\n                    }\n                    button {\n                        display: none;\n                    }\n                    @page {\n                        margin: 0;\n                        size: A4 landscape;\n                    }\n                    </style>\n                </head>\n                <body onload="window.print()">'.concat(t.innerHTML,"</body>\n            </html>");e.document.write(a),e.document.close(),setTimeout((function(){e.close()}),10)},getDepts:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-departments").then((function(e){t.departments=e.data.data,null!=params.id&&""!=params.id?t.getInfo(params.id):t.loaded=1}))},getClasses:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-class-by-dept/"+this.department).then((function(e){t.classes=e.data}))},getDropdowns:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-timetable-dropdowns").then((function(e){t.subject_lists=e.data.subjects,t.teacher_lists=e.data.teachers}))},getTimetable:function(){var t=this,e=(this.department,this.section,{department_id:this.department,section_id:this.section}),a=axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}),n=this;a.post("view-timetable",e).then((function(e){if(n.loaded=1,e.status){n.timeslots=e.data.timeslots,n.lists=e.data.data,n.weekdays=e.data.weekdays,n.class_full_name=e.data.class_full_name,n.getDropdowns();var a=[],i=[];n.lists.forEach((function(t,e){a[t.timeslot_id]={},i[t.timeslot_id]={},n.weekdays.forEach((function(e,n){a[t.timeslot_id][e]=t[e]&&t[e].subject_info?t[e].subject_info.id:"",i[t.timeslot_id][e]=t[e]&&t[e].teacher_info?t[e].teacher_info.id:""}))})),t.subject=a,t.teacher=i}else n.errors=1})).catch((function(e){t.loaded=1,console.log(e)}))}}},i=a(0),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Student Timetable")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Student Timetable")])])]),t._v(" "),a("div",{staticClass:"mg-b-20"},[a("div",{staticClass:"row gutters-8"},[a("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.department,expression:"department"}],staticClass:"form-control",attrs:{required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.department=e.target.multiple?a:a[0]},function(e){return t.getClasses()}]}},[a("option",{attrs:{value:""}},[t._v("Select Department")]),t._v(" "),t._l(t.departments,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.dept_name))])}))],2)]),t._v(" "),a("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.section,expression:"section"}],staticClass:"form-control",attrs:{required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.section=e.target.multiple?a:a[0]},function(e){return t.getTimetable()}]}},[a("option",{attrs:{value:""}},[t._v("Select Section")]),t._v(" "),t._l(t.classes,(function(e){return a("optgroup",{key:e.id,attrs:{label:e.name}},t._l(e.sections,(function(n){return a("option",{key:n.id,domProps:{value:n.id}},[t._v(t._s(e.name)+" - "+t._s(n.name))])})),0)}))],2)])])]),t._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.deleteRecord()}}},[t.section?a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),t._v(" "),t.loaded?a("div",[a("div",{attrs:{id:"timetable"}},[t.editFlag?t._e():a("button",{staticClass:"btn btn-dark float-right",staticStyle:{"@media print { display":"none"},attrs:{type:"button"},on:{click:function(e){return t.editAction(!0)}}},[a("i",{staticClass:"icon-pencil"}),t._v(" Edit")]),t._v(" "),t.editFlag?a("button",{staticClass:"btn btn-dark float-right",staticStyle:{"@media print { display":"none"},attrs:{type:"button"},on:{click:function(e){return t.editAction(!1)}}},[a("i",{staticClass:"icon-times"}),t._v(" Close")]):t._e(),t._v(" "),a("h4",[t._v("Time-Table for Class "+t._s(t.class_full_name))]),t._v(" "),t.lists?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table display table-bordered text-nowrap",staticStyle:{"font-size":"10px"}},[a("thead",[a("tr",[a("th",{staticClass:"text-center bg-dark text-white"},[t._v("\n                                            Day\n                                        ")]),t._v(" "),t._l(t.weekdays,(function(e,n){return a("th",{key:n,staticClass:"text-center bg-dark text-white"},[t._v(t._s(e))])}))],2)]),t._v(" "),a("tbody",t._l(t.lists,(function(e,n){return a("tr",{key:n},[a("th",{staticClass:"text-center bg-dark text-white"},[a("div",[t._v(t._s(e.timeslot))]),t._v(" "),a("div",[t._v("\n                                                "+t._s(e.timeslot_time)+"\n                                            ")])]),t._v(" "),t._l(t.weekdays,(function(n,i){return a("td",{key:i,staticClass:"text-center"},[0==t.editFlag?a("div",[a("div",[a("strong",[t._v(t._s(e[n]&&e[n].subject_info?e[n].subject_info.name:"-"))])]),t._v(" "),a("div",[t._v(t._s(e[n]&&e[n].teacher_info?"("+e[n].teacher_info.name+")":""))])]):t._e(),t._v(" "),1==t.editFlag?a("div",[a("div",{staticClass:"mb-1"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.subject[e.timeslot_id][n],expression:"subject[x.timeslot_id][w]"}],staticClass:"form-control",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.subject[e.timeslot_id],n,a.target.multiple?i:i[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Subject")]),t._v(" "),t._l(t.subject_lists,(function(e,n){return a("option",{key:n,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.teacher[e.timeslot_id][n],expression:"teacher[x.timeslot_id][w]"}],staticClass:"form-control",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.teacher[e.timeslot_id],n,a.target.multiple?i:i[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Teacher")]),t._v(" "),t._l(t.teacher_lists,(function(e,n){return a("option",{key:n,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])]):t._e()])}))],2)})),0)])]):t._e()]),t._v(" "),a("div",{staticClass:"text-center"},[t.editFlag?t._e():a("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"button"},on:{click:function(e){return t.printTimeTable()}}},[t._v(" Print ")]),t._v(" "),t.editFlag?a("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"button"},on:{click:function(e){return t.updateData()}}},[t._v("Save & Update")]):t._e()])]):t._e()])]):t._e()])])}),[],!1,null,null,null);e.default=s.exports}}]);
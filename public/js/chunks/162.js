(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{433:function(t,s,a){"use strict";a.r(s);var e=a(5),i=a(36),n={extends:i.b,mixins:[i.c.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},o=a(0),r=Object(o.a)(n,void 0,void 0,!1,null,null,null).exports,d={extends:i.a,mixins:[i.c.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},l={components:{LineChart:r,Doughnut:Object(o.a)(d,void 0,void 0,!1,null,null,null).exports},data:function(){return{dashboard_data:{},lineChartData:{labels:["","Mon","Tue","Wed","Thu","Fri","Sat","Sun",""],datasets:[{data:[0,5e4,1e4,5e4,14e3,7e4,5e4,75e3,5e4],backgroundColor:"#ff0000",borderColor:"#ff0000",borderWidth:1,pointRadius:0,pointBackgroundColor:"#ff0000",pointBorderColor:"#ffffff",pointHoverRadius:6,pointHoverBorderWidth:3,fill:"origin",label:"Total Collection"},{data:[0,3e4,2e4,6e4,7e4,5e4,5e4,9e4,8e4],backgroundColor:"#417dfc",borderColor:"#417dfc",borderWidth:1,pointRadius:0,pointBackgroundColor:"#304ffe",pointBorderColor:"#ffffff",pointHoverRadius:6,pointHoverBorderWidth:3,fill:"origin",label:"Fees Collection"}]},lineChartOptions:{responsive:!0,maintainAspectRatio:!1,animation:{duration:2e3},scales:{xAxes:[{display:!0,ticks:{display:!0,fontColor:"#222222",fontSize:16,padding:20},gridLines:{display:!0,drawBorder:!0,color:"#cccccc",borderDash:[5,5]}}],yAxes:[{display:!0,ticks:{display:!0,autoSkip:!0,maxRotation:0,fontColor:"#646464",fontSize:16,stepSize:25e3,padding:20,callback:function(t){var s=[{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];return function(t){for(var a=0;a<s.length;a++)if(t>=s[a].divider)return(t/s[a].divider).toString()+s[a].suffix;return t}(t)}},gridLines:{display:!0,drawBorder:!1,color:"#cccccc",borderDash:[5,5],zeroLineBorderDash:[5,5]}}]},legend:{display:!1},tooltips:{mode:"index",intersect:!1,enabled:!0},elements:{line:{tension:.35},point:{pointStyle:"circle"}}},doughnutChartData:{labels:["Female Students","Male Students"],datasets:[{backgroundColor:["#304ffe","#ffa601"],data:[45e3,105e3],label:"Total Students"}]},doughnutChartOptions:{responsive:!0,maintainAspectRatio:!1,cutoutPercentage:65,rotation:-9.4,animation:{duration:2e3},legend:{display:!1},tooltips:{enabled:!0}}}},mounted:function(){this.getData()},methods:{loadScript:function(){if($("#earning-line-chart").length){var t=$("#earning-line-chart").get(0).getContext("2d");new Chart(t,{type:"line",data:{labels:["","Mon","Tue","Wed","Thu","Fri","Sat","Sun",""],datasets:[{data:[0,5e4,1e4,5e4,14e3,7e4,5e4,75e3,5e4],backgroundColor:"#ff0000",borderColor:"#ff0000",borderWidth:1,pointRadius:0,pointBackgroundColor:"#ff0000",pointBorderColor:"#ffffff",pointHoverRadius:6,pointHoverBorderWidth:3,fill:"origin",label:"Total Collection"},{data:[0,3e4,2e4,6e4,7e4,5e4,5e4,9e4,8e4],backgroundColor:"#417dfc",borderColor:"#417dfc",borderWidth:1,pointRadius:0,pointBackgroundColor:"#304ffe",pointBorderColor:"#ffffff",pointHoverRadius:6,pointHoverBorderWidth:3,fill:"origin",label:"Fees Collection"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:2e3},scales:{xAxes:[{display:!0,ticks:{display:!0,fontColor:"#222222",fontSize:16,padding:20},gridLines:{display:!0,drawBorder:!0,color:"#cccccc",borderDash:[5,5]}}],yAxes:[{display:!0,ticks:{display:!0,autoSkip:!0,maxRotation:0,fontColor:"#646464",fontSize:16,stepSize:25e3,padding:20,callback:function(t){var s=[{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];return function(t){for(var a=0;a<s.length;a++)if(t>=s[a].divider)return(t/s[a].divider).toString()+s[a].suffix;return t}(t)}},gridLines:{display:!0,drawBorder:!1,color:"#cccccc",borderDash:[5,5],zeroLineBorderDash:[5,5]}}]},legend:{display:!1},tooltips:{mode:"index",intersect:!1,enabled:!0},elements:{line:{tension:.35},point:{pointStyle:"circle"}}}})}if($("#student-doughnut-chart").length){var s=$("#student-doughnut-chart").get(0).getContext("2d");new Chart(s,{type:"doughnut",data:{labels:["Female Students","Male Students"],datasets:[{backgroundColor:["#304ffe","#ffa601"],data:[45e3,105e3],label:"Total Students"}]},options:{responsive:!0,maintainAspectRatio:!1,cutoutPercentage:65,rotation:-9.4,animation:{duration:2e3},legend:{display:!1},tooltips:{enabled:!0}}})}},getData:function(){var t=this;Object(e.a)("get","admin-dashboard").then((function(s){t.dashboard_data=s.data}))}}},c=Object(o.a)(l,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.dashboard_data.count?a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Admin Dashboard")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Admin")])])]),t._v(" "),a("div",{staticClass:"row gutters-20"},[a("div",{staticClass:"col-xl-3 col-sm-6 col-12"},[a("div",{staticClass:"dashboard-summery-one mg-b-20"},[a("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-title"},[t._v("Students")]),t._v(" "),a("div",{staticClass:"item-number"},[a("span",{staticClass:"counter",attrs:{"data-num":t.dashboard_data.count.student}},[t._v("\n                  "+t._s(t.dashboard_data.count.student)+"\n                ")])])])])])])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-sm-6 col-12"},[a("div",{staticClass:"dashboard-summery-one mg-b-20"},[a("div",{staticClass:"row align-items-center"},[t._m(1),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-title"},[t._v("Teachers")]),t._v(" "),a("div",{staticClass:"item-number"},[a("span",{staticClass:"counter",attrs:{"data-num":t.dashboard_data.count.teacher}},[t._v("\n                  "+t._s(t.dashboard_data.count.teacher)+"\n                ")])])])])])])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-sm-6 col-12"},[a("div",{staticClass:"dashboard-summery-one mg-b-20"},[a("div",{staticClass:"row align-items-center"},[t._m(2),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-title"},[t._v("Parents")]),t._v(" "),a("div",{staticClass:"item-number"},[a("span",{staticClass:"counter",attrs:{"data-num":t.dashboard_data.count.parents}},[t._v("\n                  "+t._s(t.dashboard_data.count.parents)+"\n                ")])])])])])])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-sm-6 col-12"},[a("div",{staticClass:"dashboard-summery-one mg-b-20"},[a("div",{staticClass:"row align-items-center"},[t._m(3),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-title"},[t._v("Earnings")]),t._v(" "),a("div",{staticClass:"item-number"},[a("span",[t._v("₹")]),t._v(" "),a("span",{staticClass:"counter",attrs:{"data-num":t.dashboard_data.count.total_sales_paid}},[t._v("\n                  "+t._s(t.dashboard_data.count.total_sales_paid)+"\n                ")])])])])])])])]),t._v(" "),a("div",{staticClass:"row gutters-20"},[a("div",{staticClass:"col-12 col-xl-8 col-6-xxxl"},[a("div",{staticClass:"card dashboard-card-one pd-b-20"},[a("div",{staticClass:"card-body"},[t._m(4),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"earning-chart-wrap"},[a("line-chart",{attrs:{chartData:t.lineChartData,options:t.lineChartOptions}})],1)])])]),t._v(" "),a("div",{staticClass:"col-12 col-xl-6 col-6-xxxl"},[a("div",{staticClass:"card dashboard-card-three pd-b-20"},[a("div",{staticClass:"card-body"},[t._m(6),t._v(" "),a("div",{staticClass:"doughnut-chart-wrap"},[a("doughnut",{attrs:{chartData:t.doughnutChartData,options:t.doughnutChartOptions}})],1),t._v(" "),t._m(7)])])])])]):t._e()}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-icon bg-light-green"},[s("i",{staticClass:"flaticon-classmates text-green"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-icon bg-light-blue"},[s("i",{staticClass:"flaticon-multiple-users-silhouette text-blue"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-icon bg-light-yellow"},[s("i",{staticClass:"flaticon-couple text-orange"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-icon bg-light-red"},[s("i",{staticClass:"flaticon-money text-red"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"heading-layout1"},[a("div",{staticClass:"item-title"},[a("h3",[t._v("Earnings")])]),t._v(" "),a("div",{staticClass:"dropdown"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("...")]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-times text-orange-red"}),t._v("Close")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-cogs text-dark-pastel-green"}),t._v("Edit")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-redo-alt text-orange-peel"}),t._v("Refresh")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"earning-report"},[s("div",{staticClass:"item-content"},[s("div",{staticClass:"single-item pseudo-bg-blue"},[s("h4",[this._v("Total Collections")]),this._v(" "),s("span",[this._v("75,000")])]),this._v(" "),s("div",{staticClass:"single-item pseudo-bg-red"},[s("h4",[this._v("Fees Collection")]),this._v(" "),s("span",[this._v("15,000")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"heading-layout1"},[s("div",{staticClass:"item-title"},[s("h3",[this._v("Students")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"student-report"},[s("div",{staticClass:"student-count pseudo-bg-blue"},[s("h4",{staticClass:"item-title"},[this._v("Female Students")]),this._v(" "),s("div",{staticClass:"item-number"},[this._v("45,000")])]),this._v(" "),s("div",{staticClass:"student-count pseudo-bg-yellow"},[s("h4",{staticClass:"item-title"},[this._v("Male Students")]),this._v(" "),s("div",{staticClass:"item-number"},[this._v("1,05,000")])])])}],!1,null,null,null).exports,_={data:function(){return{user_info:{},loaded:0,token:localStorage.getItem("token")}},computed:{user_address:function(){return this.user_info.address1+" "+this.user_info.address1+"\n"+this.user_info.city_data.name+" "+this.user_info.city_data.state_name.name+" "+this.user_info.pin_code}},mounted:function(){this.getInfo()},methods:{getInfo:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("student/info").then((function(s){t.loaded=1,t.user_info=s.data,console.log(t.user_info)}))}}},u=Object(o.a)(_,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Student Dashboard")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Student")])])]),t._v(" "),a("div",{staticClass:"card h-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),t._v(" "),t.loaded?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2 col-4"},[a("img",{staticClass:"rounded bordered",staticStyle:{"object-fit":"contain","max-width":"100%"},attrs:{src:t.user_info.picture,alt:t.user_info.name,title:t.user_info.name}})]),t._v(" "),a("div",{staticClass:"col-sm-5 col-4"},[a("h3",{staticClass:"mb-0"},[t._v(t._s(t.user_info.name))]),t._v(" "),a("div",[t.user_info.student_data.section_name?a("div",{staticClass:"mt-1"},[a("strong",[t._v("Class:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.student_data.section_name.cls.name)+" -\n                  "+t._s(t.user_info.student_data.section_name.name))])]):t._e(),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Enroll. No.:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.student_data.reg_no))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Roll No.:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.student_data.roll_no))])])])]),t._v(" "),a("div",{staticClass:"col-sm-5 col-4"},[a("h3",{staticClass:"mb-0"},[t._v("Contact Information")]),t._v(" "),a("div",[a("div",{staticClass:"mt-1"},[a("strong",[t._v("Phone:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.mobile))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Email:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.email))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Address:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v("\n                  "+t._s(t.user_address)+"\n                ")])])])])])]):t._e(),t._v(" "),t.loaded?a("div",{staticClass:"table-responsive mt-3"},[a("table",{staticClass:"table table-striped table-bordered"},[a("tr",[a("th",[t._v("BLOOD GROUP")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.blood_group))]),t._v(" "),a("th",[t._v("DOB")]),t._v(" "),a("td",[t._v(t._s(t.user_info.dob))]),t._v(" "),a("th",[t._v("GENDER")]),t._v(" "),a("td",[t._v(t._s(t.user_info.gender))])]),t._v(" "),a("tr",[a("th",[t._v("FATHER NAME")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.father_info.name))]),t._v(" "),a("th",[t._v("FATHER MOBILE NO.")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.father_info.mobile))]),t._v(" "),a("th",[t._v("FATHER EMAIL")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.father_info.email))])]),t._v(" "),a("tr",[a("th",[t._v("MOTHER NAME")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.mother_info.name))]),t._v(" "),a("th",[t._v("MOTHER MOBILE NO.")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.mother_info.mobile))]),t._v(" "),a("th",[t._v("MOTHER EMAIL")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.mother_info.email))])]),t._v(" "),a("tr",[a("th",[t._v("GUARDIAN NAME")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.guardian_info.name))]),t._v(" "),a("th",[t._v("GUARDIAN MOBILE NO.")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.guardian_info.mobile))]),t._v(" "),a("th",[t._v("GUARDIAN RELATION")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.guardian_relation))])]),t._v(" "),a("tr",[a("th",[t._v("RELIGION")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.religion_info.name))]),t._v(" "),a("th",[t._v("CATEGORY")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.category))]),t._v(" "),a("th",[t._v("CASTE")]),t._v(" "),a("td",[t._v(t._s(t.user_info.student_data.cast))])])])]):t._e()])])])}),[],!1,null,null,null).exports,v={data:function(){return{user_info:{},loaded:0,token:localStorage.getItem("token")}},computed:{user_address:function(){return this.user_info.address1+" "+this.user_info.address1+"\n"+this.user_info.city_data.name+" "+this.user_info.city_data.state_name.name+" "+this.user_info.pin_code}},mounted:function(){this.getInfo()},methods:{getInfo:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("student/info").then((function(s){t.loaded=1,t.user_info=s.data,console.log(t.user_info)}))}}},h=Object(o.a)(v,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Teacher Dashboard")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Teacher")])])]),t._v(" "),a("div",{staticClass:"card h-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),t._v(" "),t.loaded?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2 col-4"},[a("img",{staticClass:"rounded bordered",staticStyle:{"object-fit":"contain","max-width":"100%"},attrs:{src:t.user_info.picture,alt:t.user_info.name,title:t.user_info.name}})]),t._v(" "),a("div",{staticClass:"col-sm-10 col-8"},[a("h3",{staticClass:"mb-0"},[t._v(t._s(t.user_info.name))]),t._v(" "),a("div",[a("div",{staticClass:"mt-1"},[a("strong",[t._v("Phone:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.mobile))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Email:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.email))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Address:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v("\n                  "+t._s(t.user_address)+"\n                ")])])])])])]):t._e()])])])}),[],!1,null,null,null).exports,f={data:function(){return{user_info:{},loaded:0,token:localStorage.getItem("token")}},computed:{user_address:function(){var t="";return t+=(this.user_info.address1+" "+this.user_info.address2).trim(),this.user_info.city_data&&(t+="\n"+this.user_info.city_data.name+" "+this.user_info.city_data.state_name.name),(t+=" "+this.user_info.pin_code).replace(null,"").replace(null,"").replace(null,"")}},mounted:function(){this.getInfo()},methods:{getInfo:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("student/info").then((function(s){t.loaded=1,t.user_info=s.data}))}}},m=Object(o.a)(f,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Parent Dashboard")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Parent")])])]),t._v(" "),a("div",{staticClass:"card h-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),t._v(" "),t.loaded?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2 col-4"},[a("img",{staticClass:"rounded bordered",staticStyle:{"object-fit":"contain","max-width":"100%"},attrs:{src:t.user_info.picture,alt:t.user_info.name,title:t.user_info.name}})]),t._v(" "),a("div",{staticClass:"col-sm-10 col-8"},[a("h3",{staticClass:"mb-0"},[t._v(t._s(t.user_info.name))]),t._v(" "),a("div",[a("div",{staticClass:"mt-1"},[a("strong",[t._v("Phone:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.mobile))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Email:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.email))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Address:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v("\n                                    "+t._s(t.user_address)+"\n                                ")])])])])])]):t._e()])])])}),[],!1,null,null,null).exports,C={data:function(){return{user_info:{},loaded:0,token:localStorage.getItem("token")}},computed:{user_address:function(){var t="";return t+=(this.user_info.address1+" "+this.user_info.address2).trim(),this.user_info.city_data&&(t+="\n"+this.user_info.city_data.name+" "+this.user_info.city_data.state_name.name),(t+=" "+this.user_info.pin_code).replace(null,"").replace(null,"").replace(null,"")}},mounted:function(){this.getInfo()},methods:{getInfo:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("student/info").then((function(s){t.loaded=1,t.user_info=s.data}))}}},p=Object(o.a)(C,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Staff Dashboard")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Staff")])])]),t._v(" "),a("div",{staticClass:"card h-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),t._v(" "),t.loaded?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2 col-4"},[a("img",{staticClass:"rounded bordered",staticStyle:{"object-fit":"contain","max-width":"100%"},attrs:{src:t.user_info.picture,alt:t.user_info.name,title:t.user_info.name}})]),t._v(" "),a("div",{staticClass:"col-sm-10 col-8"},[a("h3",{staticClass:"mb-0"},[t._v(t._s(t.user_info.name))]),t._v(" "),a("div",[a("div",{staticClass:"mt-1"},[a("strong",[t._v("Phone:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.mobile))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Email:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.email))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Address:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v("\n                  "+t._s(t.user_address)+"\n                ")])])])])])]):t._e()])])])}),[],!1,null,null,null).exports,b={data:function(){return{user_info:{},loaded:0,token:localStorage.getItem("token")}},computed:{user_address:function(){var t="";return t+=(this.user_info.address1+" "+this.user_info.address2).trim(),this.user_info.city_data&&(t+="\n"+this.user_info.city_data.name+" "+this.user_info.city_data.state_name.name),(t+=" "+this.user_info.pin_code).replace(null,"").replace(null,"").replace(null,"")}},mounted:function(){this.getInfo()},methods:{getInfo:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("student/info").then((function(s){t.loaded=1,t.user_info=s.data}))}}},g=Object(o.a)(b,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Parent Dashboard")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Parent")])])]),t._v(" "),a("div",{staticClass:"card h-auto"},[a("div",{staticClass:"card-body"},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("b-spinner")],1),t._v(" "),t.loaded?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2 col-4"},[a("img",{staticClass:"rounded bordered",staticStyle:{"object-fit":"contain","max-width":"100%"},attrs:{src:t.user_info.picture,alt:t.user_info.name,title:t.user_info.name}})]),t._v(" "),a("div",{staticClass:"col-sm-10 col-8"},[a("h3",{staticClass:"mb-0"},[t._v(t._s(t.user_info.name))]),t._v(" "),a("div",[a("div",{staticClass:"mt-1"},[a("strong",[t._v("Phone:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.mobile))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Email:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v(t._s(t.user_info.email))])]),t._v(" "),a("div",{staticClass:"mt-1"},[a("strong",[t._v("Address:")]),t._v(" "),a("span",{staticClass:"text-warning"},[t._v("\n                  "+t._s(t.user_address)+"\n                ")])])])])])]):t._e()])])])}),[],!1,null,null,null).exports,x=(localStorage.getItem("token"),{components:{SchoolDashboard:c,StudentDashboard:u,TeacherDashboard:h,ParentsDashboard:m,DriverDashboard:p,StaffDashboard:g},data:function(){return{dashboardComponent:"SchoolDashboard"}},mounted:function(){var t=localStorage.getItem("user_info");t=JSON.parse(t),this.dashboardComponent="".concat(t.role_name.name,"Dashboard")}}),w=Object(o.a)(x,(function(){var t=this.$createElement;return(this._self._c||t)(this.dashboardComponent,{tag:"component"})}),[],!1,null,null,null);s.default=w.exports},5:function(t,s,a){"use strict";a.d(s,"a",(function(){return i}));var e=axios.create({baseURL:"/api/",json:!0}),i=function(t,s){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n={Accept:"application/json",Authorization:null};if(i){var o=localStorage.getItem("token");n.Authorization="Bearer "+o}return e({method:t,url:s,data:a,headers:n})}}}]);
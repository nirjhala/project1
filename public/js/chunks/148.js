(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{419:function(t,a,s){"use strict";s.r(a);localStorage.getItem("token");var e={mounted:function(){if(void 0!==$.fn.vectorMap&&$("#world-map").vectorMap({map:"world_mill",zoomButtons:!1,backgroundColor:"transparent",regionStyle:{initial:{fill:"#0070ba"}},focusOn:{x:0,y:0,scale:1},series:{regions:[{values:{CA:"#41dfce",RU:"#f50056",US:"#f50056",IT:"#f50056",AU:"#fbd348"}}]}}),$("#earning-line-chart").length){var t=$("#earning-line-chart").get(0).getContext("2d");new Chart(t,{type:"line",data:{labels:["","Mon","Tue","Wed","Thu","Fri","Sat","Sun",""],datasets:[{data:[0,5e4,1e4,5e4,14e3,7e4,5e4,75e3,5e4],backgroundColor:"#ff0000",borderColor:"#ff0000",borderWidth:1,pointRadius:0,pointBackgroundColor:"#ff0000",pointBorderColor:"#ffffff",pointHoverRadius:6,pointHoverBorderWidth:3,fill:"origin",label:"Total Collection"},{data:[0,3e4,2e4,6e4,7e4,5e4,5e4,9e4,8e4],backgroundColor:"#417dfc",borderColor:"#417dfc",borderWidth:1,pointRadius:0,pointBackgroundColor:"#304ffe",pointBorderColor:"#ffffff",pointHoverRadius:6,pointHoverBorderWidth:3,fill:"origin",label:"Fees Collection"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:2e3},scales:{xAxes:[{display:!0,ticks:{display:!0,fontColor:"#222222",fontSize:16,padding:20},gridLines:{display:!0,drawBorder:!0,color:"#cccccc",borderDash:[5,5]}}],yAxes:[{display:!0,ticks:{display:!0,autoSkip:!0,maxRotation:0,fontColor:"#646464",fontSize:16,stepSize:25e3,padding:20,callback:function(t){var a=[{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];return function(t){for(var s=0;s<a.length;s++)if(t>=a[s].divider)return(t/a[s].divider).toString()+a[s].suffix;return t}(t)}},gridLines:{display:!0,drawBorder:!1,color:"#cccccc",borderDash:[5,5],zeroLineBorderDash:[5,5]}}]},legend:{display:!1},tooltips:{mode:"index",intersect:!1,enabled:!0},elements:{line:{tension:.35},point:{pointStyle:"circle"}}}})}if($("#expense-bar-chart").length){var a=$("#expense-bar-chart").get(0).getContext("2d");new Chart(a,{type:"bar",data:{labels:["Jan","Feb","Mar"],datasets:[{backgroundColor:["#40dfcd","#417dfc","#ffaa01"],data:[125e3,1e5,75e3,5e4,15e4],label:"Expenses (millions)"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:2e3},scales:{xAxes:[{display:!1,maxBarThickness:100,ticks:{display:!1,padding:0,fontColor:"#646464",fontSize:14},gridLines:{display:!0,color:"#e1e1e1"}}],yAxes:[{display:!0,ticks:{display:!0,autoSkip:!1,fontColor:"#646464",fontSize:14,stepSize:25e3,padding:20,beginAtZero:!0,callback:function(t){var a=[{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];return function(t){for(var s=0;s<a.length;s++)if(t>=a[s].divider)return(t/a[s].divider).toString()+a[s].suffix;return t}(t)}},gridLines:{display:!0,drawBorder:!0,color:"#e1e1e1",zeroLineColor:"#e1e1e1"}}]},legend:{display:!1},tooltips:{enabled:!0},elements:{}}})}if($("#student-doughnut-chart").length){var s=$("#student-doughnut-chart").get(0).getContext("2d");new Chart(s,{type:"doughnut",data:{labels:["Female Students","Male Students"],datasets:[{backgroundColor:["#304ffe","#ffa601"],data:[45e3,105e3],label:"Total Students"}]},options:{responsive:!0,maintainAspectRatio:!1,cutoutPercentage:65,rotation:-9.4,animation:{duration:2e3},legend:{display:!1},tooltips:{enabled:!0}}})}void 0!==$.fn.fullCalendar&&$("#fc-calender").fullCalendar({header:{center:"basicDay,basicWeek,month",left:"title",right:"prev,next"},fixedWeekCount:!1,navLinks:!0,editable:!0,eventLimit:!0,aspectRatio:1.8,events:[{title:"All Day Event",start:"2019-04-01"},{title:"Meeting",start:"2019-04-12T14:30:00"},{title:"Happy Hour",start:"2019-04-15T17:30:00"},{title:"Birthday Party",start:"2019-04-20T07:00:00"}]})}},i=s(0),l=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard-content-one"},[s("div",{staticClass:"breadcrumbs-area"},[s("h3",[t._v("Admin Dashboard")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),s("li",[t._v("Admin")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row gutters-20"},[s("div",{staticClass:"col-xl-3 col-sm-6 col-12"},[s("div",{staticClass:"dashboard-summery-one mg-b-20"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-icon bg-light-green "},[s("i",{staticClass:"flaticon-classmates text-green"})])]),t._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-title"},[t._v("Students")]),t._v(" "),s("div",{staticClass:"item-number"},[s("span",{staticClass:"counter",attrs:{"data-num":"150000"}},[t._v("1,50,000")])])])])])])]),t._v(" "),s("div",{staticClass:"col-xl-3 col-sm-6 col-12"},[s("div",{staticClass:"dashboard-summery-one mg-b-20"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-icon bg-light-blue"},[s("i",{staticClass:"flaticon-multiple-users-silhouette text-blue"})])]),t._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-title"},[t._v("Teachers")]),t._v(" "),s("div",{staticClass:"item-number"},[s("span",{staticClass:"counter",attrs:{"data-num":"2250"}},[t._v("2,250")])])])])])])]),t._v(" "),s("div",{staticClass:"col-xl-3 col-sm-6 col-12"},[s("div",{staticClass:"dashboard-summery-one mg-b-20"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-icon bg-light-yellow"},[s("i",{staticClass:"flaticon-couple text-orange"})])]),t._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-title"},[t._v("Parents")]),t._v(" "),s("div",{staticClass:"item-number"},[s("span",{staticClass:"counter",attrs:{"data-num":"5690"}},[t._v("5,690")])])])])])])]),t._v(" "),s("div",{staticClass:"col-xl-3 col-sm-6 col-12"},[s("div",{staticClass:"dashboard-summery-one mg-b-20"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-icon bg-light-red"},[s("i",{staticClass:"flaticon-money text-red"})])]),t._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-title"},[t._v("Earnings")]),t._v(" "),s("div",{staticClass:"item-number"},[s("span",[t._v("$")]),s("span",{staticClass:"counter",attrs:{"data-num":"193000"}},[t._v("1,93,000")])])])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row gutters-20"},[s("div",{staticClass:"col-12 col-xl-8 col-6-xxxl"},[s("div",{staticClass:"card dashboard-card-one pd-b-20"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"heading-layout1"},[s("div",{staticClass:"item-title"},[s("h3",[t._v("Earnings")])]),t._v(" "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("...")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-times text-orange-red"}),t._v("Close")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-cogs text-dark-pastel-green"}),t._v("Edit")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-redo-alt text-orange-peel"}),t._v("Refresh")])])])]),t._v(" "),s("div",{staticClass:"earning-report"},[s("div",{staticClass:"item-content"},[s("div",{staticClass:"single-item pseudo-bg-blue"},[s("h4",[t._v("Total Collections")]),t._v(" "),s("span",[t._v("75,000")])]),t._v(" "),s("div",{staticClass:"single-item pseudo-bg-red"},[s("h4",[t._v("Fees Collection")]),t._v(" "),s("span",[t._v("15,000")])])]),t._v(" "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"date-dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("Jan 20, 2019")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Jan 20, 2019")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Jan 20, 2021")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Jan 20, 2020")])])])]),t._v(" "),s("div",{staticClass:"earning-chart-wrap"},[s("canvas",{attrs:{id:"earning-line-chart",width:"660",height:"320"}})])])])]),t._v(" "),s("div",{staticClass:"col-12 col-xl-4 col-3-xxxl"},[s("div",{staticClass:"card dashboard-card-two pd-b-20"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"heading-layout1"},[s("div",{staticClass:"item-title"},[s("h3",[t._v("Expenses")])]),t._v(" "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("...")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-times text-orange-red"}),t._v("Close")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-cogs text-dark-pastel-green"}),t._v("Edit")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-redo-alt text-orange-peel"}),t._v("Refresh")])])])]),t._v(" "),s("div",{staticClass:"expense-report"},[s("div",{staticClass:"monthly-expense pseudo-bg-Aquamarine"},[s("div",{staticClass:"expense-date"},[t._v("Jan 2019")]),t._v(" "),s("div",{staticClass:"expense-amount"},[s("span",[t._v("$")]),t._v(" 15,000")])]),t._v(" "),s("div",{staticClass:"monthly-expense pseudo-bg-blue"},[s("div",{staticClass:"expense-date"},[t._v("Feb 2019")]),t._v(" "),s("div",{staticClass:"expense-amount"},[s("span",[t._v("$")]),t._v(" 10,000")])]),t._v(" "),s("div",{staticClass:"monthly-expense pseudo-bg-yellow"},[s("div",{staticClass:"expense-date"},[t._v("Mar 2019")]),t._v(" "),s("div",{staticClass:"expense-amount"},[s("span",[t._v("$")]),t._v(" 8,000")])])]),t._v(" "),s("div",{staticClass:"expense-chart-wrap"},[s("canvas",{attrs:{id:"expense-bar-chart",width:"100",height:"300"}})])])])]),t._v(" "),s("div",{staticClass:"col-12 col-xl-6 col-3-xxxl"},[s("div",{staticClass:"card dashboard-card-three pd-b-20"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"heading-layout1"},[s("div",{staticClass:"item-title"},[s("h3",[t._v("Students")])]),t._v(" "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("...")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-times text-orange-red"}),t._v("Close")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-cogs text-dark-pastel-green"}),t._v("Edit")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-redo-alt text-orange-peel"}),t._v("Refresh")])])])]),t._v(" "),s("div",{staticClass:"doughnut-chart-wrap"},[s("canvas",{attrs:{id:"student-doughnut-chart",width:"100",height:"300"}})]),t._v(" "),s("div",{staticClass:"student-report"},[s("div",{staticClass:"student-count pseudo-bg-blue"},[s("h4",{staticClass:"item-title"},[t._v("Female Students")]),t._v(" "),s("div",{staticClass:"item-number"},[t._v("45,000")])]),t._v(" "),s("div",{staticClass:"student-count pseudo-bg-yellow"},[s("h4",{staticClass:"item-title"},[t._v("Male Students")]),t._v(" "),s("div",{staticClass:"item-number"},[t._v("1,05,000")])])])])])]),t._v(" "),s("div",{staticClass:"col-12 col-xl-6 col-4-xxxl"},[s("div",{staticClass:"card dashboard-card-four pd-b-20"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"heading-layout1"},[s("div",{staticClass:"item-title"},[s("h3",[t._v("Event Calender")])]),t._v(" "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("...")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-times text-orange-red"}),t._v("Close")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-cogs text-dark-pastel-green"}),t._v("Edit")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-redo-alt text-orange-peel"}),t._v("Refresh")])])])]),t._v(" "),s("div",{staticClass:"calender-wrap"},[s("div",{staticClass:"fc-calender",attrs:{id:"fc-calender"}})])])])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-xl-6 col-4-xxxl"},[s("div",{staticClass:"card dashboard-card-five pd-b-20"},[s("div",{staticClass:"card-body pd-b-14"},[s("div",{staticClass:"heading-layout1"},[s("div",{staticClass:"item-title"},[s("h3",[t._v("Website Traffic")])]),t._v(" "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("...")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-times text-orange-red"}),t._v("Close")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-cogs text-dark-pastel-green"}),t._v("Edit")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-redo-alt text-orange-peel"}),t._v("Refresh")])])])]),t._v(" "),s("h6",{staticClass:"traffic-title"},[t._v("Unique Visitors")]),t._v(" "),s("div",{staticClass:"traffic-number"},[t._v("2,590")]),t._v(" "),s("div",{staticClass:"traffic-bar"},[s("div",{staticClass:"direct",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Direct"}}),t._v(" "),s("div",{staticClass:"search",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Search"}}),t._v(" "),s("div",{staticClass:"referrals",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Referrals"}}),t._v(" "),s("div",{staticClass:"social",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Social"}})]),t._v(" "),s("div",{staticClass:"traffic-table table-responsive"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"t-title pseudo-bg-Aquamarine"},[t._v("Direct")]),t._v(" "),s("td",[t._v("12,890")]),t._v(" "),s("td",[t._v("50%")])]),t._v(" "),s("tr",[s("td",{staticClass:"t-title pseudo-bg-blue"},[t._v("Search")]),t._v(" "),s("td",[t._v("7,245")]),t._v(" "),s("td",[t._v("27%")])]),t._v(" "),s("tr",[s("td",{staticClass:"t-title pseudo-bg-yellow"},[t._v("Referrals")]),t._v(" "),s("td",[t._v("4,256")]),t._v(" "),s("td",[t._v("8%")])]),t._v(" "),s("tr",[s("td",{staticClass:"t-title pseudo-bg-red"},[t._v("Social")]),t._v(" "),s("td",[t._v("500")]),t._v(" "),s("td",[t._v("7%")])])])])])])])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-xl-6 col-4-xxxl"},[s("div",{staticClass:"card dashboard-card-six pd-b-20"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"heading-layout1 mg-b-17"},[s("div",{staticClass:"item-title"},[s("h3",[t._v("Notice Board")])]),t._v(" "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("...")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-times text-orange-red"}),t._v("Close")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-cogs text-dark-pastel-green"}),t._v("Edit")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-redo-alt text-orange-peel"}),t._v("Refresh")])])])]),t._v(" "),s("div",{staticClass:"notice-box-wrap"},[s("div",{staticClass:"notice-list"},[s("div",{staticClass:"post-date bg-skyblue"},[t._v("16 June, 2019")]),t._v(" "),s("h6",{staticClass:"notice-title"},[s("a",{attrs:{href:"#"}},[t._v("Great School manag mene esom text of the\n                                    printing.")])]),t._v(" "),s("div",{staticClass:"entry-meta"},[t._v(" Jennyfar Lopez / "),s("span",[t._v("5 min ago")])])]),t._v(" "),s("div",{staticClass:"notice-list"},[s("div",{staticClass:"post-date bg-yellow"},[t._v("16 June, 2019")]),t._v(" "),s("h6",{staticClass:"notice-title"},[s("a",{attrs:{href:"#"}},[t._v("Great School manag printing.")])]),t._v(" "),s("div",{staticClass:"entry-meta"},[t._v(" Jennyfar Lopez / "),s("span",[t._v("5 min ago")])])]),t._v(" "),s("div",{staticClass:"notice-list"},[s("div",{staticClass:"post-date bg-pink"},[t._v("16 June, 2019")]),t._v(" "),s("h6",{staticClass:"notice-title"},[s("a",{attrs:{href:"#"}},[t._v("Great School manag meneesom.")])]),t._v(" "),s("div",{staticClass:"entry-meta"},[t._v(" Jennyfar Lopez / "),s("span",[t._v("5 min ago")])])]),t._v(" "),s("div",{staticClass:"notice-list"},[s("div",{staticClass:"post-date bg-skyblue"},[t._v("16 June, 2019")]),t._v(" "),s("h6",{staticClass:"notice-title"},[s("a",{attrs:{href:"#"}},[t._v("Great School manag mene esom text of the\n                                    printing.")])]),t._v(" "),s("div",{staticClass:"entry-meta"},[t._v(" Jennyfar Lopez / "),s("span",[t._v("5 min ago")])])]),t._v(" "),s("div",{staticClass:"notice-list"},[s("div",{staticClass:"post-date bg-yellow"},[t._v("16 June, 2019")]),t._v(" "),s("h6",{staticClass:"notice-title"},[s("a",{attrs:{href:"#"}},[t._v("Great School manag printing.")])]),t._v(" "),s("div",{staticClass:"entry-meta"},[t._v(" Jennyfar Lopez / "),s("span",[t._v("5 min ago")])])]),t._v(" "),s("div",{staticClass:"notice-list"},[s("div",{staticClass:"post-date bg-pink"},[t._v("16 June, 2019")]),t._v(" "),s("h6",{staticClass:"notice-title"},[s("a",{attrs:{href:"#"}},[t._v("Great School manag meneesom.")])]),t._v(" "),s("div",{staticClass:"entry-meta"},[t._v(" Jennyfar Lopez / "),s("span",[t._v("5 min ago")])])])])])])])])}],!1,null,null,null);a.default=l.exports}}]);
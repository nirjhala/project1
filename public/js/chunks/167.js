(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{450:function(e,t,i){"use strict";i.r(t);localStorage.getItem("token");var a={mounted:function(){if(void 0!==$.fn.vectorMap&&$("#world-map").vectorMap({map:"world_mill",zoomButtons:!1,backgroundColor:"transparent",regionStyle:{initial:{fill:"#0070ba"}},focusOn:{x:0,y:0,scale:1},series:{regions:[{values:{CA:"#41dfce",RU:"#f50056",US:"#f50056",IT:"#f50056",AU:"#fbd348"}}]}}),$("#earning-line-chart").length){var e=$("#earning-line-chart").get(0).getContext("2d");new Chart(e,{type:"line",data:{labels:["","Mon","Tue","Wed","Thu","Fri","Sat","Sun",""],datasets:[{data:[0,5e4,1e4,5e4,14e3,7e4,5e4,75e3,5e4],backgroundColor:"#ff0000",borderColor:"#ff0000",borderWidth:1,pointRadius:0,pointBackgroundColor:"#ff0000",pointBorderColor:"#ffffff",pointHoverRadius:6,pointHoverBorderWidth:3,fill:"origin",label:"Total Collection"},{data:[0,3e4,2e4,6e4,7e4,5e4,5e4,9e4,8e4],backgroundColor:"#417dfc",borderColor:"#417dfc",borderWidth:1,pointRadius:0,pointBackgroundColor:"#304ffe",pointBorderColor:"#ffffff",pointHoverRadius:6,pointHoverBorderWidth:3,fill:"origin",label:"Fees Collection"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:2e3},scales:{xAxes:[{display:!0,ticks:{display:!0,fontColor:"#222222",fontSize:16,padding:20},gridLines:{display:!0,drawBorder:!0,color:"#cccccc",borderDash:[5,5]}}],yAxes:[{display:!0,ticks:{display:!0,autoSkip:!0,maxRotation:0,fontColor:"#646464",fontSize:16,stepSize:25e3,padding:20,callback:function(e){var t=[{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];return function(e){for(var i=0;i<t.length;i++)if(e>=t[i].divider)return(e/t[i].divider).toString()+t[i].suffix;return e}(e)}},gridLines:{display:!0,drawBorder:!1,color:"#cccccc",borderDash:[5,5],zeroLineBorderDash:[5,5]}}]},legend:{display:!1},tooltips:{mode:"index",intersect:!1,enabled:!0},elements:{line:{tension:.35},point:{pointStyle:"circle"}}}})}if($("#expense-bar-chart").length){var t=$("#expense-bar-chart").get(0).getContext("2d");new Chart(t,{type:"bar",data:{labels:["Jan","Feb","Mar"],datasets:[{backgroundColor:["#40dfcd","#417dfc","#ffaa01"],data:[125e3,1e5,75e3,5e4,15e4],label:"Expenses (millions)"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:2e3},scales:{xAxes:[{display:!1,maxBarThickness:100,ticks:{display:!1,padding:0,fontColor:"#646464",fontSize:14},gridLines:{display:!0,color:"#e1e1e1"}}],yAxes:[{display:!0,ticks:{display:!0,autoSkip:!1,fontColor:"#646464",fontSize:14,stepSize:25e3,padding:20,beginAtZero:!0,callback:function(e){var t=[{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];return function(e){for(var i=0;i<t.length;i++)if(e>=t[i].divider)return(e/t[i].divider).toString()+t[i].suffix;return e}(e)}},gridLines:{display:!0,drawBorder:!0,color:"#e1e1e1",zeroLineColor:"#e1e1e1"}}]},legend:{display:!1},tooltips:{enabled:!0},elements:{}}})}if($("#student-doughnut-chart").length){var i=$("#student-doughnut-chart").get(0).getContext("2d");new Chart(i,{type:"doughnut",data:{labels:["Female Students","Male Students"],datasets:[{backgroundColor:["#304ffe","#ffa601"],data:[45e3,105e3],label:"Total Students"}]},options:{responsive:!0,maintainAspectRatio:!1,cutoutPercentage:65,rotation:-9.4,animation:{duration:2e3},legend:{display:!1},tooltips:{enabled:!0}}})}void 0!==$.fn.fullCalendar&&$("#fc-calender").fullCalendar({header:{center:"basicDay,basicWeek,month",left:"title",right:"prev,next"},fixedWeekCount:!1,navLinks:!0,editable:!0,eventLimit:!0,aspectRatio:1.8,events:[{title:"All Day Event",start:"2019-04-01"},{title:"Meeting",start:"2019-04-12T14:30:00"},{title:"Happy Hour",start:"2019-04-15T17:30:00"},{title:"Birthday Party",start:"2019-04-20T07:00:00"}]})}},o=i(0),n=Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dashboard-content-one"},[t("div",{staticClass:"breadcrumbs-area"},[t("h3",[this._v("505 Forbidden Error")]),this._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:{name:"dashboard"}}},[this._v("Dashboard")])],1),this._v(" "),t("li",[this._v("505 Forbidden Error")])])]),this._v(" "),this._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card h-auto"},[t("div",{staticClass:"card-body text-center"},[t("p",[this._v(" ")]),this._v(" "),t("div",{staticStyle:{"font-size":"128px","line-height":"100%"}},[t("i",{staticClass:"icon-error_outline text-warning"})]),this._v(" "),t("h3",{staticClass:"text-warning"},[this._v("Access Denied")]),this._v(" "),t("p",[this._v("You don't have enough permission to access this page, please contact your administrator.")])])])}],!1,null,null,null);t.default=n.exports}}]);
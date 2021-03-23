(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{511:function(t,e,n){"use strict";n.r(e);var a=n(4),s=n.n(a),i=n(13),o=n.n(i),l=n(1),d={components:{Multiselect:o.a},data:function(){return{errors:0,lists:{},allSelected:0,check:[],student:"",allClasses:[],classes:[],students:[],loaded:0,subjectId:"",clickActions:[{label:"Pay Fee",link:{name:"StudentPayFee",params:{id:""}}},{label:"Fee Details",link:{name:"StudentFeeDetails",params:{id:""}}},{label:"TC Generate",link:{name:"ViewTc"}},{label:"Student Edit",link:{name:"EditStudent",params:{id:""}}},{label:"Attendance",link:{name:"StudentAttendance",params:{id:""}}},{label:"Full Mark-sheet",link:!1,click:"openMarksheet"},{label:"Student Details",link:{name:"StudentDetails",params:{id:""}}}],token:localStorage.getItem("token")}},mounted:function(){this.getStudents()},methods:{searchAfterDebounce:s.a.debounce((function(){this.searchData()}),500),handle_function_call:function(t){this[t]()},openMarksheet:function(){window.open(this.baseURL+"/api/student/marksheet/"+this.student.uid)},openTc:function(){window.open(this.baseURL+"api/student/tc/"+this.student.uid)},studentLabel:function(t){var e=t.user,n=t.father_info,a=t.section_name,s=e.name;return n&&n.name&&(s+=" ".concat(n.name)),s+=", Class - ",a&&a.cls&&a.cls.name&&(s+=" ".concat(a.cls.name)),a&&a.name&&(s+=" ".concat(a.name)),s},getStudents:function(){var t=this;l.D.getStudents().then((function(e){t.students=e.data})).catch((function(t){console.log("Errors: ",t)}))},searchData:function(t){var e=this,n=this.s;void 0===t&&(t=1),this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("search-student/?page="+t+"&s="+n).then((function(t){e.loaded=1,e.lists=t.data.data,t.data.status||(e.errors=1)})).catch((function(t){e.loaded=1}))},getRecords:function(t){var e=this;void 0===t&&(t=1),this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("view-student/?page="+t).then((function(t){t.data.status?e.lists=t.data.data:e.errors=1,e.loaded=1})).catch((function(t){e.loaded=1,console.log(t)}))},deleteRecord:function(){var t=this,e={check:this.check};if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n&&(t.loaded=0,axios.create({baseURL:t.apiBaseUrl,headers:{Authorization:"Bearer "+t.token,Accept:"application/json"}}).post("remove-student",e).then((function(e){e.status?(t.getRecords(),t.$toast.success("Selected record(s) has been deleted.")):(t.loaded=1,t.$toast.warning("Record(s) unable to delete."))})).catch((function(e){t.loaded=1,console.log(e)})))}))}},watch:{s:function(t){this.searchAfterDebounce()},student:function(t){var e=this;setTimeout((function(){e.$router.push({name:"EditStudent",params:{id:t.uid}})}),2e3)}}},c=(n(34),n(0)),r=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-content-one"},[n("div",{staticClass:"breadcrumbs-area"},[n("h3",[t._v("Student Profile Update")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"StudentMaster"}}},[t._v("Student Master")])],1),t._v(" "),n("li",[t._v("Student Profile Update")])])]),t._v(" "),n("div",{staticClass:"mg-b-20"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"gutters-8"},[n("div",{staticClass:"form-group"},[n("multiselect",{attrs:{"track-by":"uid",placeholder:"Select Student","select-label":"","deselect-label":"",options:t.students,"custom-label":t.studentLabel,searchable:!0,"allow-empty":!1},scopedSlots:t._u([{key:"singleLabel",fn:function(e){var n=e.option;return[t._v("\n                "+t._s(n.user.name+" - "+n.father_info.name+", Class - "+n.section_name.cls.name+" "+n.section_name.name)+"\n              ")]}}]),model:{value:t.student,callback:function(e){t.student=e},expression:"student"}})],1)]),t._v(" "),t.student?n("div",[n("div",{staticClass:"mb-3 table-responsive"},[n("table",{staticClass:"table table-bordered"},[n("tr",[n("th",[t._v("NAME")]),t._v(" "),n("td",[t._v(t._s(t.student.user.name))])]),t._v(" "),n("tr",[n("th",[t._v("FATHER NAME")]),t._v(" "),n("td",[t._v(t._s(t.student.father_info.name))])]),t._v(" "),n("tr",[n("th",[t._v("ROLL NO.")]),t._v(" "),n("td",[t._v(t._s(t.student.roll_no?t.student.roll_no:"N/A"))])]),t._v(" "),n("tr",[n("th",[t._v("CLASS")]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.student.section_name.cls.name+"-"+t.student.section_name.name)+"\n                ")])])])]),t._v(" "),n("div",{staticClass:"text-center"},[n("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{"font-size":"18px"}},[n("b-spinner",{staticClass:"mr-4"}),t._v(" Redirecting to Edit Profile\n              in few moments, if any problem, then you can redirect by\n              clicking below button.\n            ")],1),t._v(" "),n("router-link",{staticClass:"btn btn-dark px-5",attrs:{to:{name:"EditStudent",params:{id:t.student.uid}}}},[t._v("\n              Redirect\n            ")])],1)]):t._e()])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
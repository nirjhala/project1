(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{552:function(t,e,a){"use strict";a.r(e);a(4);var i=localStorage.getItem("user_info");i=JSON.parse(i);var n={data:function(){return{errors:0,department:"",section:"",departments:[],classes:[],students:[],lists:[],s:"",user_info:i,logo_src:baseURL+"img/logo.png",loaded:0,token:localStorage.getItem("token")}},mounted:function(){this.getDepts(),i.school_data&&i.school_data.logo&&(this.logo_src=this.baseURL+"img/profiles/"+i.school_data.logo)},methods:{printIdCards:function(){var t=document.getElementById("divToPrint"),e=window.open("","Time-Table","width=800,height=600");e.document.open();var a='\n            <html>\n                <head>\n                    <title>ID-CARD</title>\n                    <style>\n                    body {\n                        margin:0;\n                        font-family: sans-serif;\n                        background: #ebebeb;\n                    }\n                    @page {\n                        size: A4 landscape;\n                        margin: 0;\n                    }\n                    </style>\n                </head>\n                <body onload="window.print()">'.concat(t.innerHTML,"</body>\n            </html>");e.document.write(a),e.document.close(),setTimeout((function(){e.close()}),10)},getDepts:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-departments").then((function(e){t.departments=e.data.data}))},getClasses:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-class-by-dept/"+this.department).then((function(e){t.classes=e.data}))},getStudents:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-student-by-section/"+this.section).then((function(e){t.loaded=1,e.status?t.students=e.data:t.errors=1})).catch((function(e){t.loaded=1,console.log(e)}))},deleteRecord:function(){var t=this,e={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a&&(t.loaded=0,axios.create({baseURL:t.apiBaseUrl,headers:{Authorization:"Bearer "+t.token,Accept:"application/json"}}).post("remove-vehicle",e).then((function(e){e.status?(t.getRecords(),t.$toast.success("Selected record(s) has been deleted.")):(t.loaded=1,t.$toast.warning("Record(s) unable to delete."))})).catch((function(e){t.loaded=1,console.log(e)})))}))}}},o=a(0),s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[t._v("Student Id-Card")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",[t._v("Student Id-Card")])])]),t._v(" "),a("div",{staticClass:"mg-b-20"},[a("div",{staticClass:"row gutters-8"},[a("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.department,expression:"department"}],staticClass:"form-control",attrs:{required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.department=e.target.multiple?a:a[0]},function(e){return t.getClasses()}]}},[a("option",{attrs:{value:""}},[t._v("Select Department")]),t._v(" "),t._l(t.departments,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.dept_name))])}))],2)]),t._v(" "),a("div",{staticClass:"col-4-xxxl col-xl-4 col-lg-3 col-12 form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.section,expression:"section"}],staticClass:"form-control",attrs:{required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.section=e.target.multiple?a:a[0]},function(e){return t.getStudents()}]}},[a("option",{attrs:{value:""}},[t._v("Select Class / Section")]),t._v(" "),t._l(t.classes,(function(e){return a("optgroup",{attrs:{label:e.name}},t._l(e.sections,(function(i){return a("option",{domProps:{value:i.id}},[t._v(t._s(e.name)+" - "+t._s(i.name))])})),0)}))],2)])])]),t._v(" "),t.section?a("form",{attrs:{method:"post"}},[a("div",{staticClass:"card height-auto"},[a("div",{attrs:{id:"divToPrint"}},[t.loaded?t._e():a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),t._v(" "),t.loaded?a("div",{staticStyle:{"margin-left":"auto","margin-right":"auto",display:"flex","flex-wrap":"wrap"}},[t._l(t.students,(function(e,i){return a("div",{style:i%5==0?"margin: 0px 5px; width: calc(20% - 10px); page-break-after: always":"margin: 0px 5px; width: calc(20% - 10px);"},[i%6==0?a("div",{staticStyle:{"page-break-before":"always"}}):t._e(),t._v(" "),a("div",{staticStyle:{"border-radius":"8px","background-color":"#fff",height:"338.67px",width:"212.67px",position:"relative",overflow:"hidden",margin:"auto"}},[a("div",{},[t._v("   ")]),t._v(" "),a("div",{staticStyle:{background:"#2980b9",padding:"5px 10px",margin:"10px 0 20px 0",position:"relative",color:"#fff"}},[a("div",{staticStyle:{position:"absolute",width:"60px",height:"60px",top:"50%",transform:"translateY(-50%)",background:"#fff",border:"1px solid #ccc","border-radius":"50%"}},[a("img",{staticStyle:{width:"100%",height:"100%","object-fit":"contain"},attrs:{src:t.logo_src,alt:""}})]),t._v(" "),a("div",{staticStyle:{"font-size":"0.6em","padding-left":"60px","font-weight":"bold","text-align":"center","text-transform":"uppercase"}},[t._v("\n                                    "+t._s(e.parent_school.school_data.name)+"\n                                ")])]),t._v(" "),t._m(0,!0),t._v(" "),a("div",{staticStyle:{width:"90px",height:"100px",border:"1px solid #ccc","border-radius":"10px",overflow:"hidden",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)","z-index":"2",background:"#fff"}},[a("img",{staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{src:e.picture,alt:""}})]),t._v(" "),a("div",{staticStyle:{background:"#2980b9",color:"#fff",padding:"15px","padding-top":"55px",position:"absolute",left:"0",right:"0",bottom:"0",top:"50%","z-index":"1","font-size":"0.5em"}},[a("table",{staticStyle:{width:"100%","font-size":"8px",color:"#fff","text-transform":"uppercase"}},[a("tr",[a("th",{staticStyle:{"text-align":"left"},attrs:{width:"40%"}},[t._v("NAME")]),t._v(" "),a("td",[t._v(": "+t._s(e.name))])]),t._v(" "),a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("FATHER")]),t._v(" "),a("td",[t._v(": "+t._s(e.student_data.father_info.name))])]),t._v(" "),a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("CONTACT")]),t._v(" "),a("td",[t._v(": "+t._s(e.student_data.father_info.mobile))])]),t._v(" "),a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("DOB")]),t._v(" "),a("td",[t._v(": "+t._s(e.dob))])]),t._v(" "),t._m(1,!0),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"2"}},[t._v(t._s(e.full_address))])])])])]),t._v(" "),a("div",{staticStyle:{margin:"50px 0","border-top":"1px solid #000"}}),t._v(" "),a("div",{staticStyle:{"border-radius":"8px",background:"#fff",height:"338.67px",width:"212.67px",position:"relative",overflow:"hidden",margin:"auto"}},[a("div",{},[t._v("   ")]),t._v(" "),a("div",{staticStyle:{background:"#2980b9",padding:"5px 10px",margin:"10px 0 20px 0",position:"relative",color:"#fff"}},[a("div",{staticStyle:{position:"absolute",width:"60px",height:"60px",top:"50%",transform:"translateY(-50%)",background:"#fff",border:"1px solid #ccc","border-radius":"50%"}},[a("img",{staticStyle:{width:"100%",height:"100%","object-fit":"contain"},attrs:{src:t.logo_src,alt:""}})]),t._v(" "),a("div",{staticStyle:{"font-size":"0.6em","padding-left":"60px","font-weight":"bold","text-align":"center","text-transform":"uppercase"}},[t._v("\n                                    "+t._s(e.parent_school.school_data.name)+"\n                                ")])]),t._v(" "),t._m(2,!0),t._v(" "),a("ul",{staticStyle:{"font-size":"10px","list-style":"inside disc",padding:"5px 15px"}},t._l(e.parent_school.school_data.student_id_instructions,(function(e){return a("li",[t._v(t._s(e)+".")])})),0),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("div",[a("img",{attrs:{src:e.barcode_image,alt:""}})]),t._v(" "),a("div",{staticStyle:{"letter-spacing":"5px","font-size":"8px",margin:"2px 0"}},[t._v("\n                                    "+t._s(e.barcode)+"\n                                ")])]),t._v(" "),a("div",{staticStyle:{background:"#2980b9",color:"#fff",padding:"5px 10px",position:"absolute",left:"0",right:"0",bottom:"0","z-index":"1"}})])])})),t._v(" "),a("div",{staticStyle:{clear:"both"}})],2):t._e()]),t._v(" "),a("div",[a("button",{staticClass:"btn-main",attrs:{type:"button"},on:{click:function(e){return t.printIdCards()}}},[t._v("Print")])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"text-align":"center"}},[e("strong",[e("u",[this._v("ID-CARD")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"2",valign:"top"}},[this._v("ADDRESS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"text-align":"center"}},[e("strong",[e("u",[this._v("TERMS")])])])}],!1,null,null,null);e.default=s.exports}}]);
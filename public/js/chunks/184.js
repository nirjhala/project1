(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{593:function(t,e,i){"use strict";i.r(e);i(4);var a=localStorage.getItem("user_info");a=JSON.parse(a);var o={data:function(){return{errors:0,staffs:[],lists:[],s:"",user_info:a,logo_src:baseURL+"img/logo.png",loaded:0,token:localStorage.getItem("token")}},mounted:function(){this.getStaffs(),a.school_data&&a.school_data.logo&&(this.logo_src=this.baseURL+"/img/profiles/"+a.school_data.logo)},methods:{printIdCards:function(){var t=document.getElementById("divToPrint"),e=window.open("","Time-Table","width=800,height=600");e.document.open();var i='\n            <html>\n                <head>\n                    <title>ID-CARD</title>\n                    <style>\n                    body {\n                        margin:0;\n                        font-family: sans-serif;\n                        background: #ebebeb;\n                    }\n                    @page {\n                        size: A4 landscape;\n                        margin: 0;\n                    }\n                    </style>\n                </head>\n                <body onload="window.print()">'.concat(t.innerHTML,"</body>\n            </html>");e.document.write(i),e.document.close(),setTimeout((function(){e.close()}),10)},getStaffs:function(){var t=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-staffs").then((function(e){t.loaded=1,e.status?t.staffs=e.data:t.errors=1})).catch((function(e){t.loaded=1,console.log(e)}))},deleteRecord:function(){var t=this,e={check:this.check};$(this).closest("form");if(!(this.check.length>0))return this.loaded=1,swal("Warning","Please select at least one record to delete.","warning"),!1;swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(i){i&&(t.loaded=0,axios.create({baseURL:t.apiBaseUrl,headers:{Authorization:"Bearer "+t.token,Accept:"application/json"}}).post("remove-vehicle",e).then((function(e){e.status?(t.getRecords(),t.$toast.success("Selected record(s) has been deleted.")):(t.loaded=1,t.$toast.warning("Record(s) unable to delete."))})).catch((function(e){t.loaded=1,console.log(e)})))}))}}},n=i(0),s=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dashboard-content-one"},[i("div",{staticClass:"breadcrumbs-area"},[i("h3",[t._v("Staff Id-Card")]),t._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),i("li",[t._v("Staff Id-Card")])])]),t._v(" "),i("form",{attrs:{method:"post"}},[i("div",{staticClass:"card height-auto"},[i("div",{attrs:{id:"divToPrint"}},[t.loaded?t._e():i("div",{staticClass:"text-center"},[i("b-spinner")],1),t._v(" "),t.loaded?i("div",{staticStyle:{"margin-left":"auto","margin-right":"auto",display:"flex","flex-wrap":"wrap"}},[t._l(t.staffs,(function(e,a){return i("div",{key:a,style:a%5==0?"margin: 0px 5px; width: calc(20% - 10px); page-break-after: always":"margin: 0px 5px; width: calc(20% - 10px);"},[a%6==0?i("div",{staticStyle:{"page-break-before":"always"}}):t._e(),t._v(" "),i("div",{staticStyle:{"border-radius":"8px","background-color":"#fff",height:"338.67px",width:"212.67px",position:"relative",overflow:"hidden",margin:"auto"}},[i("div",{},[t._v(" ")]),t._v(" "),i("div",{staticStyle:{background:"#2980b9",padding:"5px 10px",margin:"10px 0 20px 0",position:"relative",color:"#fff"}},[i("div",{staticStyle:{position:"absolute",width:"60px",height:"60px",top:"50%",transform:"translateY(-50%)",background:"#fff",border:"1px solid #ccc","border-radius":"50%"}},[i("img",{staticStyle:{width:"100%",height:"100%","object-fit":"contain"},attrs:{src:t.logo_src,alt:""}})]),t._v(" "),i("div",{staticStyle:{"font-size":"0.6em","padding-left":"60px","font-weight":"bold","text-align":"center","text-transform":"uppercase"}},[t._v("\n                  "+t._s(e.parent_school.school_data.name)+"\n                ")])]),t._v(" "),t._m(0,!0),t._v(" "),i("div",{staticStyle:{width:"90px",height:"100px",border:"1px solid #ccc","border-radius":"10px",overflow:"hidden",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)","z-index":"2",background:"#fff"}},[i("img",{staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{src:e.picture,alt:""}})]),t._v(" "),i("div",{staticStyle:{background:"#2980b9",color:"#fff",padding:"15px","padding-top":"55px",position:"absolute",left:"0",right:"0",bottom:"0",top:"50%","z-index":"1","font-size":"0.5em"}},[i("table",{staticStyle:{width:"100%","font-size":"8px",color:"#fff","text-transform":"uppercase"}},[i("tr",[i("th",{staticStyle:{"text-align":"left"},attrs:{width:"40%"}},[t._v("NAME")]),t._v(" "),i("td",[t._v(": "+t._s(e.name))])]),t._v(" "),t._m(1,!0),t._v(" "),i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("CONTACT")]),t._v(" "),i("td",[t._v(": "+t._s(e.mobile))])]),t._v(" "),i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("DOB")]),t._v(" "),i("td",[t._v(": "+t._s(e.dob))])]),t._v(" "),t._m(2,!0),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"2"}},[t._v("\n                      "+t._s(e.full_address)+"\n                    ")])])])])]),t._v(" "),i("div",{staticStyle:{margin:"50px 0","border-top":"1px solid #000"}}),t._v(" "),i("div",{staticStyle:{"border-radius":"8px",background:"#fff",height:"338.67px",width:"212.67px",position:"relative",overflow:"hidden",margin:"auto"}},[i("div",{},[t._v(" ")]),t._v(" "),i("div",{staticStyle:{background:"#2980b9",padding:"5px 10px",margin:"10px 0 20px 0",position:"relative",color:"#fff"}},[i("div",{staticStyle:{position:"absolute",width:"60px",height:"60px",top:"50%",transform:"translateY(-50%)",background:"#fff",border:"1px solid #ccc","border-radius":"50%"}},[i("img",{staticStyle:{width:"100%",height:"100%","object-fit":"contain"},attrs:{src:t.logo_src,alt:""}})]),t._v(" "),i("div",{staticStyle:{"font-size":"0.6em","padding-left":"60px","font-weight":"bold","text-align":"center","text-transform":"uppercase"}},[t._v("\n                  "+t._s(e.parent_school.school_data.name)+"\n                ")])]),t._v(" "),t._m(3,!0),t._v(" "),i("ul",{staticStyle:{"font-size":"10px","list-style":"inside disc",padding:"5px 15px"}},t._l(e.parent_school.school_data.staff_id_instructions,(function(e,a){return i("li",{key:a},[t._v("\n                  "+t._s(e)+".\n                ")])})),0),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("div",[i("img",{attrs:{src:e.barcode_image,alt:""}})]),t._v(" "),i("div",{staticStyle:{"letter-spacing":"5px","font-size":"8px",margin:"2px 0"}},[t._v("\n                  "+t._s(e.barcode)+"\n                ")])]),t._v(" "),i("div",{staticStyle:{background:"#2980b9",color:"#fff",padding:"5px 10px",position:"absolute",left:"0",right:"0",bottom:"0","z-index":"1"}})])])})),t._v(" "),i("div",{staticStyle:{clear:"both"}})],2):t._e()]),t._v(" "),i("div",[i("button",{staticClass:"btn-main",attrs:{type:"button"},on:{click:function(e){return t.printIdCards()}}},[t._v("\n          Print\n        ")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"text-align":"center"}},[e("strong",[e("u",[this._v("ID-CARD")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("DESIGNATION")]),this._v(" "),e("td",[this._v(": Staff")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"2",valign:"top"}},[this._v("\n                      ADDRESS\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"text-align":"center"}},[e("strong",[e("u",[this._v("TERMS")])])])}],!1,null,null,null);e.default=s.exports}}]);
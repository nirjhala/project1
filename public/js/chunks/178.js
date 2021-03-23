(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{525:function(t,e,s){"use strict";s.r(e);var n={data:function(){return{id:"",user_info:{},no_of_installments:1,admission_type:"New",fees_lists:[],fees_include:[],installment_amount:[],payement_month:[],errors:[],discount:0,loaded:0,token:localStorage.getItem("token")}},computed:{fee_amount:function(){var t=[],e=this;return e.fees_lists.forEach((function(s,n){t[s.id]="New"==e.admission_type?s.fees_for_new:s.fees_for_old})),t},total_fees:function(){var t=this,e=0;return t.fees_include.forEach((function(s,n){e+=parseFloat(t.fee_amount[s])})),e},final_total:function(){return this.total_fees-this.discount}},mounted:function(){var t=this.$route.params;null!=t.id&&""!=t.id&&this.getInfo(t.id)},methods:{calcInstallments:function(){var t=0,e=0,s=this;s.fees_lists.forEach((function(n,a){t="New"==s.admission_type?n.fees_for_new:n.fees_for_old,0==n.ftype.installment_availability&&s.fees_include.includes(n.id)&&(e+=parseFloat(t))}));for(var n=(this.final_total-e)/this.no_of_installments,a=[],i=[],o=1;o<=this.no_of_installments;o++)a[o]=n,1==o&&(a[o]+=parseFloat(e)),a[o]=Math.round(a[o]),i[o]=this.payement_month[o]?this.payement_month[o]:"";this.installment_amount=a,this.payement_month=i},getInfo:function(t){var e=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("fees/info/student/".concat(t)).then((function(t){var s=e,n=t.data;if(s.user_info=n.user_info,s.fees_lists=n.fees_lists,n.fees_str){s.id=n.fees_str.id,s.fees_include=n.fees_str.fees_types,s.admission_type=n.fees_str.admission_type,s.discount=n.fees_str.discount,s.no_of_installments=n.fees_str.installments_count;var a={};n.fees_str.installments.forEach((function(t,e){a[e+1]=t.month})),s.payement_month=a}s.calcInstallments(),e.loaded=1,$(".select2").each((function(){$(this).trigger("change")}))}))},saveInstallments:function(){var t=this,e={sid:this.user_info.id,fees_types:this.fees_include,admission_type:this.admission_type,total_installments:this.no_of_installments,discount:this.discount,total_amount:this.total_fees,payement_month:this.payement_month,installment_amount:this.installment_amount};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("fees-structure/"+this.id,e).then((function(e){e.data.status?t.$router.push({name:"fees-type"}).then((function(e){t.loaded=1,t.$toast.success("Record saved.")})).catch((function(e){t.loaded=1,console.log(e)})):(t.loaded=1,t.errors=e.data.errors)})).catch((function(e){t.loaded=1}))}}},a=s(0),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-content-one"},[s("div",{staticClass:"breadcrumbs-area"},[s("h3",[t._v("Fees Summary")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"FeeMaster"}}},[t._v("Fees Management")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"fees-collection"}}},[t._v("Fees Collection")])],1),t._v(" "),s("li",[t._v("Fees Summary")])])]),t._v(" "),s("div",{staticClass:"card height-auto mb-3"},[s("div",{staticClass:"card-body"},[t.loaded?t._e():s("div",{staticClass:"text-center"},[s("b-spinner")],1),t._v(" "),t.loaded?s("div",[t._m(0),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered"},[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("td",[t._v(t._s(t.user_info.name))]),t._v(" "),s("td",{staticClass:"text-center",staticStyle:{width:"100px"},attrs:{colspan:"2",rowspan:"4"}},[t._m(1),t._v(" "),s("img",{staticStyle:{"max-width":"100px"},attrs:{src:t.user_info.picture,alt:""}})])]),t._v(" "),s("tr",[s("th",[t._v("Father Name")]),t._v(" "),s("td",[t._v(t._s(t.user_info.student_data.father_info.name))])]),t._v(" "),s("tr",[s("th",[t._v("Enrollment No.")]),t._v(" "),s("td",[t._v(t._s(t.user_info.student_data.reg_no))])]),t._v(" "),s("tr",[s("th",[t._v("Admission Type")]),t._v(" "),s("td",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.admission_type,expression:"admission_type"}],attrs:{type:"radio",value:"New"},domProps:{checked:t._q(t.admission_type,"New")},on:{change:[function(e){t.admission_type="New"},function(e){return t.calcInstallments()}]}}),t._v("\n                  New\n                ")]),t._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.admission_type,expression:"admission_type"}],attrs:{type:"radio",value:"Old"},domProps:{checked:t._q(t.admission_type,"Old")},on:{change:[function(e){t.admission_type="Old"},function(e){return t.calcInstallments()}]}}),t._v("\n                  Old\n                ")])])])])])]):t._e()])]),t._v(" "),s("div",{staticClass:"card height-auto mb-3"},[s("div",{staticClass:"card-body"},[t.loaded?t._e():s("div",{staticClass:"text-center"},[s("b-spinner")],1),t._v(" "),t.loaded?s("div",[t._m(2),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered"},[t._m(3),t._v(" "),s("tbody",t._l(t.fees_lists,(function(e,n){return s("tr",{key:n},[s("td",[t._v(t._s(e.ftype.name))]),t._v(" "),s("td",[t._v("\n                  "+t._s(t.fee_amount[e.id])+"\n                ")]),t._v(" "),s("td",[s("label",{staticClass:"switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.fees_include,expression:"fees_include"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.fees_include)?t._i(t.fees_include,e.id)>-1:t.fees_include},on:{change:[function(s){var n=t.fees_include,a=s.target,i=!!a.checked;if(Array.isArray(n)){var o=e.id,l=t._i(n,o);a.checked?l<0&&(t.fees_include=n.concat([o])):l>-1&&(t.fees_include=n.slice(0,l).concat(n.slice(l+1)))}else t.fees_include=i},function(e){return t.calcInstallments()}]}}),t._v(" "),s("span",{staticClass:"slider round"})])])])})),0),t._v(" "),s("tfoot",[s("tr",[s("th",[t._v("Total Amount")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("\n                  "+t._s(t.total_fees)+"\n                ")])]),t._v(" "),s("tr",[s("th",[t._v("No. Of Installments")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.no_of_installments,expression:"no_of_installments"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.no_of_installments=e.target.multiple?s:s[0]},function(e){return t.calcInstallments()}]}},t._l(10,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v("\n                      "+t._s(e)+"\n                    ")])})),0)])]),t._v(" "),s("tr",[s("th",[t._v("Discount")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.discount,expression:"discount"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.discount},on:{change:function(e){return t.calcInstallments()},input:function(e){e.target.composing||(t.discount=e.target.value)}}})])]),t._v(" "),s("tr",[s("th",[t._v("Final Amount")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("\n                  "+t._s(t.final_total)+"\n                ")])])])])])]):t._e()])]),t._v(" "),t.no_of_installments?s("div",{staticClass:"card height-auto mb-3"},[s("div",{staticClass:"card-body"},[s("div",[t._m(4),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered"},[t._m(5),t._v(" "),s("tbody",t._l(t.no_of_installments,(function(e){return s("tr",{key:e},[s("td",[t._v("Installment "+t._s(e))]),t._v(" "),s("td",[t._v("₹ "+t._s(t.installment_amount[e]))]),t._v(" "),s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.payement_month[e],expression:"payement_month[num]"}],staticClass:"form-control",on:{change:function(s){var n=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.payement_month,e,s.target.multiple?n:n[0])}}},[s("option",{attrs:{value:""}},[t._v("Select Month")]),t._v(" "),t._l(12,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v("\n                      "+t._s(e)+"\n                    ")])}))],2)])])})),0),t._v(" "),s("tfoot",[s("tr",[s("th",[t._v("Total Amount")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("₹ "+t._s(t.final_total))])])])])]),t._v(" "),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.saveInstallments()}}},[t._v("\n            Save & Submit\n          ")])])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading-layout1"},[e("div",{staticClass:"item-title"},[e("h3",[this._v("Student Info")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("strong",[this._v("Photograph")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading-layout1"},[e("div",{staticClass:"item-title"},[e("h3",[this._v("Fees Setting")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Fees Type")]),this._v(" "),e("th",[this._v("Amount")]),this._v(" "),e("th",[this._v("Status")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading-layout1"},[e("div",{staticClass:"item-title"},[e("h3",[this._v("Fees Installments")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Installment")]),this._v(" "),e("th",[this._v("Amount")]),this._v(" "),e("th",[this._v("Payment Month")])])])}],!1,null,null,null);e.default=i.exports}}]);
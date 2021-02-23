(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{537:function(e,t,a){"use strict";a.r(t);var s=new Date,i=""+(s.getMonth()+1),o=""+s.getDate(),r=s.getFullYear();i.length<2&&(i="0"+i),o.length<2&&(o="0"+o);var n=[r,i,o].join("-"),l={props:["image_src","image"],data:function(){return{id:"",title:"Mr.",fname:"",lname:"",gender:"Male",email:"",dob:"",address1:"",address2:"",state:"",city:"",pin_code:"",states:[],cities:[],pincodes:[],errors:[],loaded:0,departments:[],token:localStorage.getItem("token"),maxDate:n}},computed:{name:{get:function(){return(this.title+" "+this.fname+" "+this.lname).trim()},set:function(e){}}},mounted:function(){this.$route.params;this.getProfile()},methods:{getProfile:function(){var e=this;axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).get("get-profile").then((function(t){e.states=t.data.states,e.cities=t.data.cities,e.pincodes=t.data.pincodes;var a=t.data.userInfo;e.title=a.title,e.fname=a.fname,e.lname=a.lname,e.name=a.name,e.gender=a.gender,e.email=a.email,e.dob=a.dob,e.address1=a.address1,e.address2=a.address2,e.state=a.pincode_data&&a.pincode_data.city_name?a.pincode_data.city_name.state:"",e.city=a.pincode_data?a.pincode_data.city:"",e.pin_code=a.pin_code?a.pin_code:"";var s=a.image,i=a.media?e.baseURL+"uploads/medium/"+a.media.image:e.baseURL+"/img/default.jpg";e.$emit("update-image_src-selected",i),e.$emit("update-image-selected",s),e.loaded=1}))},getPincodes:function(){var e=this,t={id:this.city};axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("get-pincodes-by-city",t).then((function(t){e.pincodes=t.data}))},getCities:function(){var e=this,t={id:this.state};axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("get-cities-by-state",t).then((function(t){e.cities=t.data}))},updateData:function(){var e=this,t={record:{title:this.title,fname:this.fname,lname:this.lname,name:this.name,gender:this.gender,email:this.email,image:this.image,dob:this.dob,address1:this.address1,address2:this.address2,pin_code:this.pin_code}};this.loaded=0,axios.create({baseURL:this.apiBaseUrl,headers:{Authorization:"Bearer "+this.token,Accept:"application/json"}}).post("update-profile",t).then((function(t){e.loaded=1,t.data.status?e.$toast.success("Profile updated."):e.errors=t.data.errors})).catch((function(t){e.loaded=1,console.log(t)}))}}},d=a(0),c=Object(d.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-content-one"},[a("div",{staticClass:"breadcrumbs-area"},[a("h3",[e._v("Edit Profile")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),a("li",[e._v("Edit Profile")])])]),e._v(" "),a("div",{staticClass:"card height-auto"},[a("div",{staticClass:"card-body"},[e.loaded?e._e():a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/preloader.gif",alt:""}})]),e._v(" "),e.loaded?a("div",[a("form",{staticClass:"new-added-form",on:{submit:function(t){return t.preventDefault(),e.updateData()}}},[e.errors.length?a("div",{staticClass:"alert alert-danger"},[a("ul",{staticClass:"mb-0"},e._l(e.errors,(function(t,s){return a("li",{key:s},[e._v(e._s(t))])})),0)]):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],attrs:{type:"hidden",value:""},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-9"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 form-group"},[a("label",[e._v("Title *")]),e._v(" "),a("div",[a("label",{staticClass:"custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"radio",name:"title",value:"Mr."},domProps:{checked:e._q(e.title,"Mr.")},on:{change:function(t){e.title="Mr."}}}),e._v(" "),a("span",[e._v("Mr.")])]),e._v(" "),a("label",{staticClass:"custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"radio",name:"title",value:"Ms."},domProps:{checked:e._q(e.title,"Ms.")},on:{change:function(t){e.title="Ms."}}}),e._v(" "),a("span",[e._v("Ms.")])]),e._v(" "),a("label",{staticClass:"custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"radio",name:"title",value:"Mrs."},domProps:{checked:e._q(e.title,"Mrs.")},on:{change:function(t){e.title="Mrs."}}}),e._v(" "),a("span",[e._v("Mrs.")])])])]),e._v(" "),a("div",{staticClass:"col-sm-4 form-group"},[a("label",[e._v("First Name *")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fname,expression:"fname"}],staticClass:"form-control",attrs:{type:"text",name:"",placeholder:"First Name",required:""},domProps:{value:e.fname},on:{input:function(t){t.target.composing||(e.fname=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-4 form-group"},[a("label",[e._v("Last Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lname,expression:"lname"}],staticClass:"form-control",attrs:{type:"text",name:"",placeholder:"Last Name"},domProps:{value:e.lname},on:{input:function(t){t.target.composing||(e.lname=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 form-group"},[a("label",[e._v("Display Name *")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"",placeholder:"Display Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-12 form-group"})]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 form-group"},[a("label",[e._v("Gender *")]),e._v(" "),a("div",[a("label",{staticClass:"custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",value:"Male"},domProps:{checked:e._q(e.gender,"Male")},on:{change:function(t){e.gender="Male"}}}),e._v(" "),a("span",[e._v("Male")])]),e._v(" "),a("label",{staticClass:"custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",value:"Female"},domProps:{checked:e._q(e.gender,"Female")},on:{change:function(t){e.gender="Female"}}}),e._v(" "),a("span",[e._v("Female")])]),e._v(" "),a("label",{staticClass:"custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",value:"Other"},domProps:{checked:e._q(e.gender,"Other")},on:{change:function(t){e.gender="Other"}}}),e._v(" "),a("span",[e._v("Other")])])])]),e._v(" "),a("div",{staticClass:"col-sm-4 form-group"},[a("label",[e._v("Email Address *")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"",placeholder:"Email Address",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-4 form-group"},[a("label",[e._v("Date of Birth *")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dob,expression:"dob"}],staticClass:"form-control",attrs:{type:"date",name:"",placeholder:"Date of Birth",max:e.maxDate,required:""},domProps:{value:e.dob},on:{input:function(t){t.target.composing||(e.dob=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Address Line 1 *")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address1,expression:"address1"}],staticClass:"form-control",attrs:{type:"text",value:"",placeholder:"Address Line 1",required:""},domProps:{value:e.address1},on:{input:function(t){t.target.composing||(e.address1=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Address Line 2")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address2,expression:"address2"}],staticClass:"form-control",attrs:{type:"text",value:"",placeholder:"Address Line 2"},domProps:{value:e.address2},on:{input:function(t){t.target.composing||(e.address2=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 form-group"},[a("label",[e._v("State *")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"form-control",attrs:{required:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.state=t.target.multiple?a:a[0]},function(t){return e.getCities()}]}},[a("option",{attrs:{value:""}},[e._v("Select State")]),e._v(" "),e._l(e.states,(function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]),e._v(" "),a("div",{staticClass:"col-sm-4 form-group"},[a("label",[e._v("City *")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"form-control",attrs:{required:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.city=t.target.multiple?a:a[0]},function(t){return e.getPincodes()}]}},[a("option",{attrs:{value:""}},[e._v("Select City")]),e._v(" "),e._l(e.cities,(function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]),e._v(" "),a("div",{staticClass:"col-sm-4 form-group"},[a("label",[e._v("Pincode *")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.pin_code,expression:"pin_code"}],staticClass:"form-control",attrs:{required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.pin_code=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select Pincode")]),e._v(" "),e._l(e.pincodes,(function(t){return a("option",{domProps:{value:t.pincode}},[e._v(e._s(t.pincode))])}))],2)])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 form-group mg-t-8"},[a("label",[e._v(" ")]),e._v(" "),a("button",{staticClass:"btn-fill-lg btn-gradient-yellow btn-hover-bluedark",attrs:{type:"submit"}},[e._v(e._s(e.id?"Update":"Save"))]),e._v(" "),a("button",{staticClass:"btn-fill-lg bg-blue-dark btn-hover-yellow",attrs:{type:"reset"}},[e._v("Reset")])])])]),e._v(" "),a("div",{staticClass:"col-sm-3"},[a("div",{staticClass:"mb-3"},[a("label",[e._v("Upload Image")]),e._v(" "),e.image_src?a("img",{staticClass:"w-100 uploadImage",attrs:{src:e.image_src,alt:"",title:"",id:"featuredImage","data-image":"#featuredImage","data-field":"#featuredImageId"}}):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.image,expression:"image"}],attrs:{type:"hidden",value:"",id:"featuredImageId"},domProps:{value:e.image},on:{input:function(t){t.target.composing||(e.image=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block uploadImageBtn",attrs:{type:"button","data-image":"#featuredImage","data-field":"#featuredImageId"}},[e._v("Choose Image")])])])])]):e._e()])])])}),[],!1,null,null,null);t.default=c.exports}}]);
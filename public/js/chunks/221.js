(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{616:function(t,e,i){"use strict";i.r(e);i(1);var s={props:["page"],data:function(){return{items:[],metaInfo:{title:"School Website"}}},mounted:function(){this.items=[{text:"Home",to:{name:"Homepage"}},{text:this.page.title,active:!0}],this.metaInfo.title=this.page.seo_title?this.page.seo_title:this.page.title},watch:{page:function(){this.items=[{text:"Home",to:{name:"Homepage"}},{text:this.page.title,active:!0}]}}},a=i(0),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inner-page"},[i("section",{attrs:{id:"page-header"}},[i("b-container",[i("h1",[t._v(t._s(t.page.title))]),t._v(" "),i("b-breadcrumb",{attrs:{items:t.items}})],1)],1),t._v(" "),i("section",{staticClass:"py-5",attrs:{id:"page-content"}},[i("b-container",{staticClass:"text-justify",domProps:{innerHTML:t._s(t.page.description)}})],1)])}),[],!1,null,null,null);e.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{621:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(35),s=(a(80),{props:["page"],components:{CoolLightBox:n.a},data:function(){return{items:[{text:"Home",to:{name:"Homepage"}},{text:"",active:!0}],index:null,images:[],galleries:{}}},mounted:function(){this.items[1].text=this.page.title,this.fetchGallery()},methods:{fetchGallery:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=Object(i.qc)("video",t);a.then((function(t){e.galleries=t.data,e.images=[],t.data.data&&t.data.data.length&&t.data.data.forEach((function(t,a){t.media&&t.media.image_url&&t.media.image_url.thumb&&t.video_url&&e.images.push({title:t.title,description:"",src:t.video_url,thumb:t.media.image_url.thumb})}))}))}}}),l=a(0),r=Object(l.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"inner-page"},[a("section",{attrs:{id:"page-header"}},[a("b-container",[a("h1",[e._v(e._s(e.page.title))]),e._v(" "),a("b-breadcrumb",{attrs:{items:e.items}})],1)],1),e._v(" "),a("section",{staticClass:"py-5",attrs:{id:"page-content"}},[a("b-container",[a("b-row",{staticClass:"images-wrapper"},e._l(e.galleries.data,(function(t,i){return a("b-col",{key:i,staticClass:"mb-4",attrs:{sm:"3"}},[t.media&&t.media.image_url&&t.media.image_url.medium?a("div",{staticClass:"image",staticStyle:{height:"200px","background-size":"cover","background-repeat":"no-repeat"},style:{backgroundImage:"url("+t.media.image_url.medium+")"},on:{click:function(t){e.index=i}}}):e._e(),e._v(" "),a("div",[e._v("\n                "+e._s(t.title)+"\n              ")])])})),1),e._v(" "),a("CoolLightBox",{attrs:{items:e.images,index:e.index},on:{close:function(t){e.index=null}}})],1)],1)])}),[],!1,null,null,null);t.default=r.exports}}]);
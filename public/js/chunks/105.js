(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{386:function(t,e,a){"use strict";var s=a(69);a.n(s).a},387:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,"#home-slider-carousel img{height:500px;-o-object-fit:cover;object-fit:cover}marquee ul{list-style:inside decimal}.gray-bg{background-color:#ebebeb}.service-block .service-icon{font-size:36px;color:#2c3e50}#home-slider-carousel h3{color:#fff}.events img{height:200px;-o-object-fit:cover;object-fit:cover}",""])},617:function(t,e,a){"use strict";a.r(e);var s=a(35),i=(a(80),a(1)),n={components:{CoolLightBox:s.a},data:function(){return{slide:0,visible:!1,index:null,notices:{},slides:{},events:{},galleries:{},media:[]}},mounted:function(){this.fetchNotices(),this.fetchSliders(),this.fetchEvents(),this.fetchGallery()},methods:{fetchGallery:function(){var t=this;Object(i.qc)("image",1).then((function(e){t.galleries=e.data,t.media=[],e.data.data&&e.data.data.length&&e.data.data.forEach((function(e,a){e.media&&e.media.image_url&&e.media.image_url.full&&t.media.push(e.media.image_url.full)}))}))},fetchEvents:function(){var t=this;Object(i.nc)(1).then((function(e){t.events=e.data}))},fetchNotices:function(){var t=this;Object(i.ac)().then((function(e){t.notices=e.data}))},fetchSliders:function(){var t=this;i.D.getSlider(1,"").then((function(e){t.slides=e.data}))},showImg:function(t){this.index=t,this.visible=!0},handleHide:function(){this.visible=!1}}},o=(a(386),a(0)),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.slides.data&&t.slides.data.length?a("section",{attrs:{id:"home-slider"}},[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"home-slider-carousel",interval:4e3,controls:"",indicators:"",background:"#ababab","img-height":"260"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.slides.data,(function(t,e){return a("b-carousel-slide",{key:e,attrs:{caption:t.title,text:t.description,"img-src":t.image_url}})})),1)],1):t._e(),t._v(" "),a("section",{staticClass:"py-5",attrs:{id:"news-section"}},[a("b-container",[a("b-row",[a("b-col",{attrs:{sm:"4"}},[a("b-card",{attrs:{"border-variant":"primary",header:"Notice","header-bg-variant":"primary","header-text-variant":"white",align:"center"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("router-link",{attrs:{to:{name:"Page",params:{slug:"notice"}}}},[t._v("View All Notices »")])]},proxy:!0}])},[a("b-card-text",[a("marquee",{attrs:{behavior:"scroll",direction:"up",scrollamount:"5",onmouseover:"stop()",onmouseleave:"start()"}},t._l(t.notices,(function(e,s){return a("ol",{key:s,staticClass:"m-0 p-0"},[a("li",[a("strong",[t._v(t._s(t._f("formatDateOnly")(s)))])]),t._v(" "),t._l(e,(function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:{name:"NoticeDetails",params:{slug:e.slug}}}},[t._v(t._s(s+1+". "+e.full_title))])],1)}))],2)})),0)],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"8"}},[a("h1",{staticClass:"mt-0"},[t._v("Welcome To "),a("span",[t._v("Akkhor School")])]),t._v(" "),a("p",{staticClass:"text-justify"},[t._v("\n            It is a long established fact that a reader will be distracted by\n            the readable content of a page when looking at its layout. The\n            point of using Lorem Ipsum is that it has a more-or-less normal\n            distribution of letters, as opposed to using 'Content here,\n            content here', making it look like readable English. Many desktop\n            publishing packages and web page editors now use Lorem Ipsum as\n            their default model text, and a search for 'lorem ipsum' will\n            uncover many web sites still in their infancy […]\n          ")]),t._v(" "),a("router-link",{staticClass:"btn btn-primary",attrs:{to:"#"}},[t._v("Read More »")])],1)],1)],1)],1),t._v(" "),a("section",{staticClass:"gray-bg py-5",attrs:{id:"home-services"}},[a("b-container",[a("h3",{staticClass:"text-center"},[t._v("Why "),a("span",[t._v("Akkhor School")])]),t._v(" "),a("p",{staticClass:"text-center w-75 m-auto"},[t._v("\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout, It is a long\n        established fact that a reader will be distracted by the readable\n        content of a page when looking at its layout,\n      ")]),t._v(" "),a("b-row",{staticClass:"mt-5"},[a("b-col",[a("div",{staticClass:"service-block text-center"},[a("div",{staticClass:"service-icon"},[a("i",{staticClass:"icon-file"})]),t._v(" "),a("h4",[t._v("Immersive Education")]),t._v(" "),a("p",[t._v("\n              More than 60% of our pupils are boarders and the majority of our\n              staff live on site, so all pupils enjoy a busy, active and\n              social environment seven days a week.\n            ")])])]),t._v(" "),a("b-col",[a("div",{staticClass:"service-block text-center"},[a("div",{staticClass:"service-icon"},[a("i",{staticClass:"icon-book"})]),t._v(" "),a("h4",[t._v("First Class Facilities")]),t._v(" "),a("p",[t._v("\n              More than 60% of our pupils are boarders and the majority of our\n              staff live on site, so all pupils enjoy a busy, active and\n              social environment seven days a week.\n            ")])])]),t._v(" "),a("b-col",[a("div",{staticClass:"service-block text-center"},[a("div",{staticClass:"service-icon"},[a("i",{staticClass:"icon-sports_tennis"})]),t._v(" "),a("h4",[t._v("Sports Excellence")]),t._v(" "),a("p",[t._v("\n              More than 60% of our pupils are boarders and the majority of our\n              staff live on site, so all pupils enjoy a busy, active and\n              social environment seven days a week.\n            ")])])]),t._v(" "),a("b-col",[a("div",{staticClass:"service-block text-center"},[a("div",{staticClass:"service-icon"},[a("i",{staticClass:"icon-group"})]),t._v(" "),a("h4",[t._v("Creative Opportunity")]),t._v(" "),a("p",[t._v("\n              More than 60% of our pupils are boarders and the majority of our\n              staff live on site, so all pupils enjoy a busy, active and\n              social environment seven days a week.\n            ")])])])],1)],1)],1),t._v(" "),a("section",{staticClass:"py-5 events",attrs:{id:"home-news"}},[a("b-container",[a("h3",{staticClass:"text-center"},[t._v("Upcoming "),a("span",[t._v("Events")])]),t._v(" "),a("p",{staticClass:"text-center w-75 m-auto"},[t._v("\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout, It is a long\n        established fact that a reader will be distracted by the readable\n        content of a page when looking at its layout,\n      ")]),t._v(" "),a("b-row",{staticClass:"mt-5"},t._l(t.events.data,(function(e,s){return a("b-col",{key:s,attrs:{sm:"4"}},[a("b-card",{staticClass:"mb-2",attrs:{title:e.name,"img-src":e.media&&e.media.image_url&&e.media.image_url.medium?e.media.image_url.medium:null,"img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",{domProps:{innerHTML:t._s(e.short_description)}}),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-block",attrs:{to:{name:"EventDetails",params:{slug:e.slug}}}},[t._v("\n              View Details\n            ")])],1)],1)})),1),t._v(" "),a("div",{staticClass:"mt-3 text-center"},[a("router-link",{staticClass:"btn-primary btn",attrs:{to:"/upcoming-events"}},[t._v("View All Events "),a("i",{staticClass:"icon-long-arrow-right"})])],1)],1)],1),t._v(" "),a("section",{staticClass:"gray-bg py-5"},[a("b-container",[a("h3",{staticClass:"text-center"},[t._v("Explore "),a("span",[t._v("Our School")])]),t._v(" "),a("p",{staticClass:"text-center w-75 m-auto"},[t._v("\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout, It is a long\n        established fact that a reader will be distracted by the readable\n        content of a page when looking at its layout,\n      ")]),t._v(" "),a("div",{staticClass:"mt-5"},[a("b-row",{staticClass:"images-wrapper"},t._l(t.media,(function(e,s){return a("b-col",{key:s,attrs:{sm:"3"}},[a("div",{staticClass:"image mb-4",staticStyle:{height:"200px","background-size":"cover","background-repeat":"no-repeat"},style:{backgroundImage:"url("+e+")"},on:{click:function(e){t.index=s}}})])})),1),t._v(" "),a("div",{staticClass:"mt-3 text-center"},[a("router-link",{staticClass:"btn-primary btn",attrs:{to:"/picture-gallery"}},[t._v("View All Pictures "),a("i",{staticClass:"icon-long-arrow-right"})])],1),t._v(" "),a("CoolLightBox",{attrs:{items:t.media,index:t.index},on:{close:function(e){t.index=null}}})],1)])],1)])}),[],!1,null,null,null);e.default=r.exports},69:function(t,e,a){var s=a(387);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,i);s.locals&&(t.exports=s.locals)}}]);
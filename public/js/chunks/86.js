(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{361:function(t,e,a){"use strict";var s=a(53);a.n(s).a},362:function(t,e,a){(t.exports=a(6)(!1)).push([t.i,"#home-slider-carousel img{height:calc(100vh - 122px);-o-object-fit:cover;object-fit:cover}marquee ul{list-style:inside decimal}.gray-bg{background-color:#ebebeb}.service-block .service-icon{font-size:36px;color:#2c3e50}",""])},53:function(t,e,a){var s=a(362);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(7)(s,i);s.locals&&(t.exports=s.locals)},584:function(t,e,a){"use strict";a.r(e);var s=a(20),i=(a(64),a(1)),o={components:{CoolLightBox:s.a},data:function(){return{slide:0,visible:!1,index:null,notices:{},media:["https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg","https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg","https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg","https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg","https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg","https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg","https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg","https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg"]}},mounted:function(){this.fetchNotices()},methods:{fetchNotices:function(){var t=this;Object(i.ac)().then((function(e){t.notices=e.data}))},showImg:function(t){this.index=t,this.visible=!0},handleHide:function(){this.visible=!1}}},r=(a(361),a(0)),n=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{attrs:{id:"home-slider"}},[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"home-slider-carousel",interval:4e3,controls:"",indicators:"",background:"#ababab","img-height":"260"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),t._v(" "),a("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[a("h1",{staticClass:"text-white"},[t._v("Hello world!")])]),t._v(" "),a("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}})],1)],1),t._v(" "),a("section",{staticClass:"py-5",attrs:{id:"news-section"}},[a("b-container",[a("b-row",[a("b-col",{attrs:{sm:"4"}},[a("b-card",{attrs:{"border-variant":"primary",header:"Notice","header-bg-variant":"primary","header-text-variant":"white",align:"center"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("router-link",{attrs:{to:{name:"Page",params:{slug:"notice"}}}},[t._v("View All Notices »")])]},proxy:!0}])},[a("b-card-text",[a("marquee",{attrs:{behavior:"scroll",direction:"up",scrollamount:"5",onmouseover:"stop()",onmouseleave:"start()"}},t._l(t.notices,(function(e,s){return a("ol",{key:s,staticClass:"m-0 p-0"},[a("li",[a("strong",[t._v(t._s(t._f("formatDateOnly")(s)))])]),t._v(" "),t._l(e,(function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:{name:"NoticeDetails",params:{slug:e.slug}}}},[t._v(t._s(s+1+". "+e.full_title))])],1)}))],2)})),0)],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"8"}},[a("h1",{staticClass:"mt-0"},[t._v("Welcome To "),a("span",[t._v("Akkhor School")])]),t._v(" "),a("p",{staticClass:"text-justify"},[t._v("\n                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy […]\n                    ")]),t._v(" "),a("router-link",{staticClass:"btn btn-primary",attrs:{to:"#"}},[t._v("Read More »")])],1)],1)],1)],1),t._v(" "),a("section",{staticClass:"gray-bg py-5",attrs:{id:"home-services"}},[a("b-container",[a("h3",{staticClass:"text-center"},[t._v("Why "),a("span",[t._v("Akkhor School")])]),t._v(" "),a("p",{staticClass:"text-center w-75 m-auto"},[t._v("\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n            ")]),t._v(" "),a("b-row",{staticClass:"mt-5"},[a("b-col",[a("div",{staticClass:"service-block text-center"},[a("div",{staticClass:"service-icon"},[a("i",{staticClass:"icon-file"})]),t._v(" "),a("h4",[t._v("Immersive Education")]),t._v(" "),a("p",[t._v("\n                            More than 60% of our pupils are boarders and the majority of our staff live on site, so all pupils enjoy a busy, active and social environment seven days a week.\n                        ")])])]),t._v(" "),a("b-col",[a("div",{staticClass:"service-block text-center"},[a("div",{staticClass:"service-icon"},[a("i",{staticClass:"icon-book"})]),t._v(" "),a("h4",[t._v("First Class Facilities")]),t._v(" "),a("p",[t._v("\n                            More than 60% of our pupils are boarders and the majority of our staff live on site, so all pupils enjoy a busy, active and social environment seven days a week.\n                        ")])])]),t._v(" "),a("b-col",[a("div",{staticClass:"service-block text-center"},[a("div",{staticClass:"service-icon"},[a("i",{staticClass:"icon-sports_tennis"})]),t._v(" "),a("h4",[t._v("Sports Excellence")]),t._v(" "),a("p",[t._v("\n                            More than 60% of our pupils are boarders and the majority of our staff live on site, so all pupils enjoy a busy, active and social environment seven days a week.\n                        ")])])]),t._v(" "),a("b-col",[a("div",{staticClass:"service-block text-center"},[a("div",{staticClass:"service-icon"},[a("i",{staticClass:"icon-group"})]),t._v(" "),a("h4",[t._v("Creative Opportunity")]),t._v(" "),a("p",[t._v("\n                            More than 60% of our pupils are boarders and the majority of our staff live on site, so all pupils enjoy a busy, active and social environment seven days a week.\n                        ")])])])],1)],1)],1),t._v(" "),a("section",{staticClass:"py-5",attrs:{id:"home-news"}},[a("b-container",[a("h3",{staticClass:"text-center"},[t._v("Upcoming "),a("span",[t._v("Events")])]),t._v(" "),a("p",{staticClass:"text-center w-75 m-auto"},[t._v("\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n        ")]),t._v(" "),a("b-row",{staticClass:"mt-5"},[a("b-col",{attrs:{sm:"4"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Event Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v("\n                Some quick example text to build on the card title and make up the bulk of the card's content.\n              ")]),t._v(" "),a("b-button",{staticClass:"btn-block",attrs:{href:"#",variant:"primary"}},[t._v("View Details")])],1)],1),t._v(" "),a("b-col",{attrs:{sm:"4"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Event Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v("\n                Some quick example text to build on the card title and make up the bulk of the card's content.\n              ")]),t._v(" "),a("b-button",{staticClass:"btn-block",attrs:{href:"#",variant:"primary"}},[t._v("View Details")])],1)],1),t._v(" "),a("b-col",{attrs:{sm:"4"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Event Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v("\n                Some quick example text to build on the card title and make up the bulk of the card's content.\n              ")]),t._v(" "),a("b-button",{staticClass:"btn-block",attrs:{href:"#",variant:"primary"}},[t._v("View Details")])],1)],1)],1),t._v(" "),a("div",{staticClass:"mt-3 text-center"},[a("router-link",{staticClass:"btn-primary btn",attrs:{to:"#"}},[t._v("View All Events "),a("i",{staticClass:"icon-long-arrow-right"})])],1)],1)],1),t._v(" "),a("section",{staticClass:"gray-bg py-5"},[a("b-container",[a("h3",{staticClass:"text-center"},[t._v("Explore "),a("span",[t._v("Our School")])]),t._v(" "),a("p",{staticClass:"text-center w-75 m-auto"},[t._v("\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout,\n        ")]),t._v(" "),a("div",{staticClass:"mt-5"},[a("b-row",{staticClass:"images-wrapper"},t._l(t.media,(function(e,s){return a("b-col",{key:s,attrs:{sm:"3"}},[a("div",{staticClass:"image mb-4",staticStyle:{height:"200px","background-size":"cover","background-repeat":"no-repeat"},style:{backgroundImage:"url("+e+")"},on:{click:function(e){t.index=s}}})])})),1),t._v(" "),a("div",{staticClass:"mt-3 text-center"},[a("router-link",{staticClass:"btn-primary btn",attrs:{to:"#"}},[t._v("View All Pictures "),a("i",{staticClass:"icon-long-arrow-right"})])],1),t._v(" "),a("CoolLightBox",{attrs:{items:t.media,index:t.index},on:{close:function(e){t.index=null}}})],1)])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);
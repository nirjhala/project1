(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{367:function(t,e,s){"use strict";var n=s(56);s.n(n).a},368:function(t,e,s){(t.exports=s(6)(!1)).push([t.i,".notices-box{border:1px solid #ccc;border-radius:3px}",""])},56:function(t,e,s){var n=s(368);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(7)(n,i);n.locals&&(t.exports=n.locals)},591:function(t,e,s){"use strict";s.r(e);var n=s(1),i={props:["page"],data:function(){return{items:[{text:"Home",to:{name:"Homepage"}},{text:"News",active:!0}],notices:{}}},mounted:function(){this.items[1].text=this.page.title,this.fetchNotices()},methods:{fetchNotices:function(){var t=this;Object(n.ac)().then((function(e){t.notices=e.data})).catch((function(t){console.log("Server Error: ",t)}))}}},o=(s(367),s(0)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inner-page"},[s("section",{attrs:{id:"page-header"}},[s("b-container",[s("h1",[t._v(t._s(t.page.title))]),t._v(" "),s("b-breadcrumb",{attrs:{items:t.items}})],1)],1),t._v(" "),s("section",{staticClass:"py-5",attrs:{id:"page-content"}},[s("b-container",t._l(t.notices,(function(e,n){return s("b-card",{key:n,attrs:{"no-body":"",header:n}},[s("b-list-group",{attrs:{flush:""}},t._l(e,(function(e,n){return s("b-list-group-item",{key:n},[s("router-link",{attrs:{to:{name:"NoticeDetails",params:{slug:e.slug}}}},[s("strong",[t._v(t._s(n+1+". "+e.full_title))])]),t._v(" "),s("div",[s("small",[t._v(t._s(t._f("formatDate")(e.updated_at)))])])],1)})),1)],1)})),1)],1)])}),[],!1,null,null,null);e.default=r.exports}}]);
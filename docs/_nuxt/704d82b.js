(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{338:function(t,r,n){var content=n(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("347b2c9a",content,!0,{sourceMap:!1})},378:function(t,r,n){"use strict";n(338)},379:function(t,r,n){(r=n(49)(!1)).push([t.i,"#jumbotron-mentor{margin-top:2%}.contr-image{padding:2px;width:8%;border-radius:100%;opacity:.7}.contr-image:hover{opacity:1;transition:.7s}.contr-a:hover{color:#fff}",""]),t.exports=r},727:function(t,r,n){"use strict";n.r(r);n(15),n(46),n(71),n(54);var e=n(20),o={asyncData:function(t){return Object(e.a)(regeneratorRuntime.mark((function r(){var n,e,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.$content,r.next=3,Promise.all([n("mentees").fetch(),n("mentors").fetch(),n("how-to-contact").fetch(),n("github-best-practises").fetch(),n("linkedin-best-practises").fetch()]);case 3:return e=r.sent,r.next=6,n("contribs").fetch();case 6:return o=(o=r.sent).contribs,r.abrupt("return",{rows:e,contribs:o});case 9:case"end":return r.stop()}}),r)})))()}},c=(n(378),n(44)),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"container",attrs:{id:"jumbotron-mentor"}},[n("b-jumbotron",{attrs:{"text-variant":"black","border-variant":"dark"}},[n("h1",[t._v("Founders")]),t._v(" "),n("p",[n("i",[t._v("As contributors are the actual founders of this collaborative artwork.")])]),t._v(" "),t._l(t.contribs,(function(t){return n("a",{key:t.url,staticClass:"contr-a",attrs:{href:t.url,target:"_blank"}},[n("img",{staticClass:"contr-image",attrs:{src:t.avatar_url}})])}))],2),t._v(" "),t._l(t.rows,(function(t,r){return n("b-jumbotron",{key:r,attrs:{"text-variant":"black","border-variant":"dark"}},[n("nuxt-content",{attrs:{document:t}})],1)}))],2)}),[],!1,null,null,null);r.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{733:function(t,e,n){"use strict";n.r(e);var r=n(23),o=(n(54),n(20)),c={fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("mentorships").limit(t.postList.mentorships.limit).skip(t.postList.mentorships.skip).fetch();case 2:t.postList.mentorships.items=e.sent;case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{postList:{mentorships:{items:[],limit:16,skip:0}}}},methods:{loadMore:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.postList.mentorships.skip+=e.postList.mentorships.limit,n.next=3,e.$content("mentorships").limit(e.postList.mentorships.limit).skip(e.postList.mentorships.skip).fetch();case 3:c=n.sent,(o=e.postList.mentorships.items).push.apply(o,Object(r.a)(c)),t.loaded(),c.length<=0&&t.complete();case 7:case"end":return n.stop()}}),n)})))()}}},m=n(45),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("ul",t._l(t.postList.mentorships.items,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{attrs:{to:"/mentorships/"+e.slug,itemprop:"url"}},[t._v("\n          "+t._s(e.goal)+"\n        ")])],1)})),0),t._v(" "),n("client-only",[n("infinite-loading",{on:{infinite:t.loadMore}})],1),t._v(" "),n("hr")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("a",{attrs:{href:"https://forms.gle/1517jvGHWW1Ma66K9"}},[this._v("Add your active mentorship project")])])}],!1,null,null,null);e.default=component.exports}}]);
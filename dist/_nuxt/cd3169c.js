(window.webpackJsonp=window.webpackJsonp||[]).push([[7,33],{1482:function(t,n,e){"use strict";e.r(n);var o={props:["title","text"]},l=e(78),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"title-comp"},[n("div",[n("h1",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("span")]),t._v(" "),n("div",[t.text?n("p",{domProps:{innerHTML:t._s(t.text)}}):t._e()])])}),[],!1,null,null,null);n.default=component.exports},1525:function(t,n,e){"use strict";e.r(n);var o=e(1510),l={data:function(){return{current:0,steps:[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}]}},components:{Title:e(1482).default,AboutUsCarousel:o.default},methods:{next:function(){this.current++},prev:function(){this.current--},enterLoading:function(){this.loading=!0},enterIconLoading:function(){this.iconLoading={delay:1e3}}}},r=e(78),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"about-us",attrs:{id:"howWeWork"}},[n("div",{staticClass:"container_xl position-relative"},[n("Title",{attrs:{title:t.$store.state.translations["main.howWeWork"]}}),t._v(" "),n("AboutUsCarousel"),t._v(" "),n("div",{staticClass:"ellipse-shodow-about"}),t._v(" "),n("div",{staticClass:"ellipse-shodow-about2"})],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Title:e(1482).default,AboutUsCarousel:e(1510).default})}}]);
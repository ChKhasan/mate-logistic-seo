(window.webpackJsonp=window.webpackJsonp||[]).push([[36,12],{1490:function(t,e,n){t.exports=function(t){"use strict";var e,n=(e="Function",function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}),i={__countup__:t.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){this.instance&&n(this.instance.update)&&this.instance.update(t)},deep:!1}},methods:{create:function(){var e=this;if(!e.instance){var n=e.$el,i=new t.CountUp(n,e.endVal,e.options);i.error||(e.instance=i,e.delay<0?e.$emit("ready",i,t.CountUp):setTimeout((function(){return i.start((function(){return e.$emit("ready",i,t.CountUp)}))}),e.delay))}},destroy:function(){this.instance=null},printValue:function(t){if(this.instance&&n(this.instance.printValue))return this.instance.printValue(t)},start:function(t){if(this.instance&&n(this.instance.start))return this.instance.start(t)},pauseResume:function(){if(this.instance&&n(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&n(this.instance.reset))return this.instance.reset()},update:function(t){if(this.instance&&n(this.instance.update))return this.instance.update(t)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};return function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(""),function(t,e,n,i,s,o,r,a,u,l){"boolean"!=typeof r&&(u=a,a=r,r=!1);var d,c="function"==typeof n?n.options:n;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),i&&(c._scopeId=i),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):e&&(d=r?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(c.functional){var p=c.render;c.render=function(t,e){return d.call(e),p(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,d):[d]}return n}({render:function(){var t=this.$createElement;return(this._self._c||t)("span")},staticRenderFns:[]},void 0,i,"data-v-0abbdf5a",!1,void 0,void 0,void 0)}(n(1491))},1491:function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",(function(){return r}));var o=function(){return(o=Object.assign||function(t){for(var i,e=1,s=arguments.length;e<s;e++)for(var a in i=arguments[e])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t}).apply(this,arguments)},r=function(){function t(t,i,e){var s=this;this.endVal=i,this.options=e,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration);var e=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=e?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,e,a,n,o=t<0?"-":"";i=Math.abs(t).toFixed(s.options.decimalPlaces);var r=(i+="").split(".");if(e=r[0],a=r.length>1?s.options.decimal+r[1]:"",s.options.useGrouping){n="";for(var l=3,d=0,u=0,p=e.length;u<p;++u)s.options.useIndianSeparators&&4===u&&(l=2,d=1),0!==u&&d%l==0&&(n=s.options.separator+n),d++,n=e[p-u-1]+n;e=n}return s.options.numerals&&s.options.numerals.length&&(e=e.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),a=a.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),o+s.options.prefix+e+a+s.options.suffix},this.easeOutExpo=function(t,i,e,s){return e*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=o(o({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,e=t.el.getBoundingClientRect(),s=e.top+window.pageYOffset,a=e.top+e.height+window.pageYOffset;a<i&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||s>i)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);this.el&&("INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i)},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},1512:function(t,e,n){t.exports=n.p+"img/employee-img.bcbe084.png"},1541:function(t,e,n){"use strict";n.r(e);var o={},r=n(78),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"employee-card"},[e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"employee-bg",attrs:{"data-src":n(1512),alt:""}}),t._v(" "),e("div",{staticClass:"employee-card-avatar"},[e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":n(810),alt:""}})]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{},[e("h1",{staticClass:"employee-card-name"},[t._v("Садулла Кобилжонов")]),t._v(" "),e("p",{staticClass:"employee-card-position"},[t._v("Director of Mate logistics")])])}],!1,null,null,null);e.default=component.exports},1546:function(t,e,n){t.exports=n.p+"img/Exclude.02bb47b.png"},1547:function(t,e,n){t.exports=n.p+"img/about_play.90538fb.svg"},1548:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjAuNDk1MzYxIiB5PSIwLjg1Mzc2IiB3aWR0aD0iNS4yNjUzIiBoZWlnaHQ9IjE0LjI5MTUiIHJ4PSIxLjcwODY1IiBmaWxsPSJ3aGl0ZSIvPg0KPHJlY3QgeD0iNy4yNjQwNCIgeT0iMC44NTM3NiIgd2lkdGg9IjUuMjY1MyIgaGVpZ2h0PSIxNC4yOTE1IiByeD0iMS43MDg2NSIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K"},1586:function(t,e,n){"use strict";n.r(e);n(808);var o=n(21),r=(n(64),n(1541)),l=n(1490),d=n.n(l),c={head:{title:"About Us"},data:function(){return{aboutUs:{},video:!0,vidPlay:n(1547),vidStop:n(1548),delay:1e3,endVal:120500,options:{useEasing:!0,useGrouping:!0,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!0,scrollSpyDelay:500,scrollSpyOnce:!0}}},computed:{localChange:function(){return this.$i18n.locale}},mounted:function(){this.GET_ABOUT_US()},methods:{onReady:function(t,e){t.update(Number(this.$store.state.translations["main.mlc_card1_title"]))},onReady1:function(t,e){t.update(Number(this.$store.state.translations["main.mlc_card2_title"]))},onReady2:function(t,e){t.update(Number(this.$store.state.translations["main.mlc_card3_title"]))},videoPlay:function(){this.$refs.video.paused?(this.$refs.video.play(),this.video=!0):(this.$refs.video.pause(),this.video=!1)},GET_ABOUT_US:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nextTick((function(){t.$nuxt.$loading.start()})),e.next=3,t.$store.dispatch("fetchAboutUs/getAboutUs",t.$i18n.locale);case 3:return t.aboutUs=e.sent,e.next=6,t.$nuxt.$loading.finish();case 6:case"end":return e.stop()}}),e)})))()}},components:{EmployeeCard:r.default,ICountUp:d.a}},h=n(78),component=Object(h.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("div",{staticClass:"container_xl postion-relative"},[e("div",[e("nuxt-link",{staticClass:"service-back-btn",attrs:{to:"/"}},[e("svg",{attrs:{width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15.0383 5.43603C14.9729 5.42597 14.9066 5.42132 14.8403 5.42214H3.55262L3.79875 5.31368C4.03934 5.2058 4.25821 5.05897 4.44556 4.87985L7.61091 1.88098C8.02779 1.50395 8.09784 0.897436 7.7769 0.443911C7.40338 -0.039371 6.68706 -0.144304 6.17691 0.209574C6.1357 0.23818 6.09653 0.269362 6.05972 0.302916L0.335755 5.72582C-0.111572 6.14915 -0.111966 6.83586 0.334861 7.25965C0.335147 7.25993 0.335469 7.26023 0.335755 7.2605L6.05972 12.6834C6.5074 13.1064 7.23223 13.1054 7.6787 12.6813C7.71383 12.6479 7.74664 12.6124 7.7769 12.5749C8.09784 12.1214 8.02779 11.5149 7.61091 11.1379L4.45128 8.13359C4.28332 7.97429 4.09021 7.84072 3.87889 7.73772L3.53545 7.5913H14.7773C15.3621 7.61187 15.8752 7.22485 15.9851 6.68025C16.0863 6.08899 15.6624 5.53195 15.0383 5.43603Z",fill:"#005BA8"}})]),t._v("\n        Back\n      ")])],1),t._v(" "),e("div",{staticClass:"about-us-shadow"}),t._v(" "),e("div",{staticClass:"about-container"},[e("div",{staticClass:"service-title"},[e("div",{staticClass:"d-flex flex-column"},[e("h1",[t._v(t._s(t.$store.state.translations["about_us.title"]))])])]),t._v(" "),e("div",{staticClass:"about-grid-container"},[e("div",[e("div",{staticClass:"about-video"},[e("div",{staticClass:"video_play_block"},[t.video?e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.vidStop,alt:""},on:{click:t.videoPlay}}):e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.vidPlay,alt:""},on:{click:t.videoPlay}})]),t._v(" "),e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":n(1546),alt:""}}),t._v(" "),e("video",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],ref:"video",attrs:{autoplay:"autoplay",loop:"loop",playsinline:"",muted:"muted","data-src":t.aboutUs.video},domProps:{muted:!0}})])]),t._v(" "),e("div",{staticClass:"about-desc"},[e("h1",[t._v(t._s(t.aboutUs.title_one))]),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.aboutUs.text_first)}}),t._v(" "),e("div",{staticClass:"about-us-numbers"},[e("div",{staticClass:"about-number-info"},[this.$store.state.translations["main.mlc_card1_title"]?e("h2",[e("ICountUp",{attrs:{delay:t.delay,endVal:Number(t.$store.state.translations["main.mlc_card1_title"]),options:t.options},on:{ready:t.onReady}})],1):t._e(),t._v(" "),e("h6",[t._v(t._s(t.$store.state.translations["main.mlc_card1_text"]))])]),t._v(" "),e("div",{staticClass:"about-number-info"},[this.$store.state.translations["main.mlc_card2_title"]?e("h2",[e("ICountUp",{attrs:{delay:t.delay,endVal:Number(t.$store.state.translations["main.mlc_card2_title"]),options:t.options},on:{ready:t.onReady1}})],1):t._e(),t._v(" "),e("h6",[t._v(t._s(t.$store.state.translations["main.mlc_card2_text"]))])]),t._v(" "),e("div",{staticClass:"about-number-info"},[this.$store.state.translations["main.mlc_card3_title"]?e("h2",[e("ICountUp",{attrs:{delay:t.delay,endVal:Number(t.$store.state.translations["main.mlc_card3_title"]),options:t.options},on:{ready:t.onReady2}})],1):t._e(),t._v(" "),e("h6",[t._v(t._s(t.$store.state.translations["main.mlc_card3_text"]))])])])]),t._v(" "),e("div",{staticClass:"about-desc"},[e("h1",[t._v(t._s(t.aboutUs.title_second))]),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.aboutUs.text_second)}})]),t._v(" "),e("div",{staticClass:"employee-card-grid"},[e("EmployeeCard"),t._v(" "),e("EmployeeCard")],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);
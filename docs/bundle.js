!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}({0:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},13:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i),r={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.android()||r.blackberry()||r.ios()||r.opera()||r.windows()}},c=r;var a={init:function(){!function(){var e=[-74.331,41.261];mapboxgl.accessToken="pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ";var t=new mapboxgl.Map({container:"map",style:"mapbox://styles/dock4242/cjnugndzr4rkn2spbxk0cnps5?optimize=true",center:[e[0],e[1]],zoom:6,pitch:0,bearing:0,interactive:!1});t.scrollZoom.disable(),t.on("load",function(e){t.setLayoutProperty("place-city-large","visibility","visible")});var n=new ScrollMagic.Controller,i=0,o=0;new ScrollMagic.Scene({triggerElement:"#fixed-map",duration:d3.select(".scroll__text").node().getBoundingClientRect().height-Math.max(document.documentElement.clientHeight,window.innerHeight||0)/2,offset:0,triggerHook:0}).setPin("#fixed-map",{pushfollowers:!1}).addTo(n),new ScrollMagic.Scene({triggerElement:"#tilt-shift-step",duration:d3.select("#tilt-shift-step").node().getBoundingClientRect().height,offset:0,triggerHook:.5}).on("progress",function(e){var n=e.progress;(n=Math.round(50*n)/50)!=i&&(i=n,t.jumpTo({pitch:60*i,bearing:0}))}).addTo(n),new ScrollMagic.Scene({triggerElement:"#rotate-step",duration:d3.select("#rotate-step").node().getBoundingClientRect().height,offset:0,triggerHook:.5}).on("progress",function(e){var n=e.progress;(n=Math.round(50*n)/50)!=o&&(o=n,t.jumpTo({bearing:-65.6*o,pitch:60}))}).addTo(n)}();var e="pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ",t=[{city_name:"Hong Kong",city_id:"hong_kong",location:{center:[113.570587,22.78],zoom:7.13,bearing:0,pitch:60}},{city_name:"Lagos",city_id:"lagos",location:{center:[3.32,6.58],zoom:7.13,bearing:0,pitch:60}},{city_name:"Kinshasa",city_id:"kinshasa",location:{center:[15.31,-4.36],zoom:7.13,bearing:-82.38,pitch:60}},{city_name:"New York City",city_id:"new_york_city",location:{center:[-73.98,40.76],zoom:7.13,bearing:-33.19,pitch:60}},{city_name:"London",city_id:"london",location:{center:[-.23,51.43],zoom:7.13,bearing:-19.59,pitch:60}},{city_name:"Paris",city_id:"paris",location:{center:[2.228,48.88],zoom:7.13,bearing:-19.59,pitch:60}},{city_name:"Karachi",city_id:"kirachi",location:{center:[67.065,24.95],zoom:7.13,bearing:73.21,pitch:60}},{city_name:"Bangalore",city_id:"bangalore",location:{center:[77.511,13.109],zoom:7.13,bearing:-23.18,pitch:60}},{city_name:"Mexico City",city_id:"mexico_city",location:{center:[-99.12,19.319],zoom:7.13,bearing:.74,pitch:60}},{city_name:"Singapore",city_id:"singapore",location:{center:[103.838,1.411],zoom:8.63,bearing:-38.48,pitch:60}}];for(var n in t){var i=Math.floor(440),o=i+50,r=t[n].location,c=r.bearing,a=r.pitch;console.log(r.center);var s=r.center[1],l=r.center[0],u=r.zoom;u=6.9;var f="cjnugndzr4rkn2spbxk0cnps5",p="https://api.mapbox.com/styles/v1/dock4242/"+f+"/static/"+l+","+s+","+(u-=.1)+","+c+","+a+"/"+i+"x"+o+"?access_token="+e;d3.select(".single-year-wrapper").append("div").attr("class","img-wrapper").append("img").attr("src",p),p="https://api.mapbox.com/styles/v1/dock4242/"+f+"/static/"+l+","+s+","+u+",0,0/"+(i=200)+"x"+(o=o)+"?access_token="+e,d3.select(".single-year-wrapper").append("div").attr("class","img-wrapper").append("img").attr("src",p)}},resize:function(){}},s=d3.select("body"),l=0;function u(){var e=s.node().offsetWidth;l!==e&&(l=e,a.resize())}s.classed("is-mobile",c.any()),window.addEventListener("resize",o()(u,150)),function(){if(s.select("header").classed("is-sticky")){var e=s.select(".header__menu"),t=s.select(".header__toggle");t.on("click",function(){var n=e.classed("is-visible");e.classed("is-visible",!n),t.classed("is-visible",!n)})}}(),a.init()},2:function(e,t,n){(function(t){var n="Expected a function",i=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=u||f||Function("return this")(),d=Object.prototype.toString,g=Math.max,y=Math.min,m=function(){return p.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==o}(e))return i;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):c.test(e)?i:+e}e.exports=function(e,t,i){var o,r,c,a,s,l,u=0,f=!1,p=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function h(t){var n=o,i=r;return o=r=void 0,u=t,a=e.apply(i,n)}function _(e){var n=e-l;return void 0===l||n>=t||n<0||p&&e-u>=c}function j(){var e=m();if(_(e))return w(e);s=setTimeout(j,function(e){var n=t-(e-l);return p?y(n,c-(e-u)):n}(e))}function w(e){return s=void 0,d&&o?h(e):(o=r=void 0,a)}function k(){var e=m(),n=_(e);if(o=arguments,r=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(j,t),f?h(e):a}(l);if(p)return s=setTimeout(j,t),h(l)}return void 0===s&&(s=setTimeout(j,t)),a}return t=v(t)||0,b(i)&&(f=!!i.leading,c=(p="maxWait"in i)?g(v(i.maxWait)||0,t):c,d="trailing"in i?!!i.trailing:d),k.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=l=r=s=void 0},k.flush=function(){return void 0===s?a:w(m())},k}}).call(this,n(0))}});
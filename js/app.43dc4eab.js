(function(){var t={573:function(t,e,n){"use strict";var o=n(963),i=n(252);const r=(0,i._)("div",{class:"follow"},null,-1),s=(0,i._)("div",{class:"cursor"},null,-1);function a(t,e,n,o,a,l){const c=(0,i.up)("navComponent"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c),(0,i.Wm)(u),r,s],64)}var l=n(427);const c=t=>((0,i.dD)("data-v-4da29436"),t=t(),(0,i.Cn)(),t),u={class:"navbar"},d=c((()=>(0,i._)("img",{src:l},null,-1))),p={class:"navbar__menu"},v={class:"navbar__item"},f=c((()=>(0,i._)("span",{class:"btn__line"},null,-1))),m=c((()=>(0,i._)("span",{class:"btn__text","data-text":"我要報名"},"我要報名",-1))),g=c((()=>(0,i._)("span",{class:"btn__line"},null,-1))),h={class:"navbar__item"},b=c((()=>(0,i._)("span",{class:"btn__line"},null,-1))),x=c((()=>(0,i._)("span",{class:"btn__text","data-text":"關卡資訊"},"關卡資訊",-1))),k=c((()=>(0,i._)("span",{class:"btn__line"},null,-1))),w={class:"navbar__item"},C=c((()=>(0,i._)("span",{class:"btn__line"},null,-1))),y=c((()=>(0,i._)("span",{class:"btn__text","data-text":"求職專區"},"求職專區",-1))),I=c((()=>(0,i._)("span",{class:"btn__line"},null,-1)));function _(t,e){const n=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("nav",u,[(0,i.Wm)(n,{class:"navbar__brand",to:"/"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i._)("ul",p,[(0,i._)("li",v,[(0,i.Wm)(n,{class:"navbar__link btn is-cubicFont is-cursorHover",to:"/"},{default:(0,i.w5)((()=>[f,m,g])),_:1})]),(0,i._)("li",h,[(0,i.Wm)(n,{class:"navbar__link btn is-cubicFont is-cursorHover",to:"/"},{default:(0,i.w5)((()=>[b,x,k])),_:1})]),(0,i._)("li",w,[(0,i.Wm)(n,{class:"navbar__link btn is-cubicFont is-cursorHover",to:"/"},{default:(0,i.w5)((()=>[C,y,I])),_:1})])])])])}var W=n(744);const R={},E=(0,W.Z)(R,[["render",_],["__scopeId","data-v-4da29436"]]);var T=E,Z=n(755),N=n.n(Z),P=n(0);P.p8.registerPlugin(P.Q3);var Q={name:"App",components:{navComponent:T},mounted:function(){let t=n(933);t.load({google:{families:["Noto Sans TC:300,500,700&display=swap"]}});let e=window.innerHeight/100;function o(){let t=N()(".cursor"),e=N()(".follow"),n=0,o=0,i=0,r=0;P.Q3.to({},.016,{repeat:-1,onRepeat:function(){n+=(i-n)/9,o+=(r-o)/9,P.Q3.set(e,{css:{left:n-12,top:o-12}}),P.Q3.set(t,{css:{left:i,top:r}})}}),N()(document).on("mousemove",(function(t){i=t.pageX,r=t.pageY})),N()(document).on("mouseenter",".is-cursorHover",(function(){t.addClass("is-active"),e.addClass("is-active")})),N()(document).on("mouseleave",".is-cursorHover",(function(){t.removeClass("is-active"),e.removeClass("is-active")}))}document.documentElement.style.setProperty("--vh",e+"px"),window.addEventListener("resize",(function(){e=window.innerHeight/100,document.documentElement.style.setProperty("--vh",e+"px")})),o()}};const z=(0,W.Z)(Q,[["render",a]]);var S=z,V=n(201);const O={class:"homeVue"};function G(t,e,n,o,r,s){const a=(0,i.up)("section_6_awards"),l=(0,i.up)("section_7_sponsor"),c=(0,i.up)("section_8_share");return(0,i.wg)(),(0,i.iD)("div",O,[(0,i.Wm)(a),(0,i.Wm)(l),(0,i.Wm)(c,{msg:"Welcome to Your Vue.js App"})])}const M={id:"awards"},U=(0,i.uE)('<h2 class="awards__title">區區修煉已經無法滿足了嗎？還有比賽等著你！</h2><div class="awards__content"><h6 class="is-tlt">評審機制：</h6><ol><li class="is-tlt">初選：將由六角學院前端、UI 評審進行第一波篩選。</li><li class="is-tlt">決選：由六角學院與贊助廠商討論，進行最後篩選，</li><li class="is-tlt">並於 12/30(五) 由評審進行直播公布名單！</li></ol></div><div class="awards__content"><h6 class="is-tlt">獎項：</h6><ol><li class="is-tlt">初選佳作 共六十位 數位獎狀</li><li class="is-tlt">個人企業獎 共六位 NTD 3,000/位</li><li class="is-tlt">團體企業獎 共三組 NTD 10,000/組</li><li class="is-tlt">以上皆提供完賽數位獎狀</li></ol></div>',3),D=[U];function B(t,e,n,o,r,s){return(0,i.wg)(),(0,i.iD)("div",M,D)}n(452),n(877);var A={mounted:function(){N()(".is-tlt").each((function(t){N()(this).textillate({minDisplayTime:2e3,autoStart:!0,in:{effect:"fadeIn",delayScale:.4*t,delay:40},out:{effect:"hinge",delayScale:.4*t,delay:40,shuffle:!0},type:"char"})}))}};const j=(0,W.Z)(A,[["render",B]]);var Y=j;const J=t=>((0,i.dD)("data-v-2dd2e83a"),t=t(),(0,i.Cn)(),t),H={id:"sponsor"},X={class:"sponsor__lists",ontouchstart:""},K={class:"sponsor__clip clip",viewbox:"0 0 0 0",xmlns:"http://www.w3.org/2000/svg"},L=J((()=>(0,i._)("polygon",{id:"top",points:"0 0 96 0 48 48"},null,-1))),F=J((()=>(0,i._)("polygon",{id:"bottom",points:"96 48 0 48 48 0"},null,-1))),q=J((()=>(0,i._)("polygon",{id:"left",points:"0 0 0 96 48 48"},null,-1))),$=J((()=>(0,i._)("polygon",{id:"right",points:"48 0 48 96 0 48"},null,-1)));function tt(t,e,n,o,r,s){const a=(0,i.up)("cube"),l=(0,i.up)("clippath");return(0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("ul",X,[(0,i.Wm)(a,{link:"https://blockstudio.tw/",title:"版塊設計",enTitle:"blockstudio"}),(0,i.Wm)(a,{link:"https://titansoft.com/tw",title:"鈦坦科技",enTitle:"titansoft"}),(0,i.Wm)(a,{link:"https://www.kdanmobile.com/zh-tw",title:"凱鈿科技",enTitle:"kdanmobile"})]),((0,i.wg)(),(0,i.iD)("svg",K,[(0,i._)("defs",null,[(0,i.Wm)(l,{id:"clip-top"},{default:(0,i.w5)((()=>[L])),_:1}),(0,i.Wm)(l,{id:"clip-bottom"},{default:(0,i.w5)((()=>[F])),_:1}),(0,i.Wm)(l,{id:"clip-left"},{default:(0,i.w5)((()=>[q])),_:1}),(0,i.Wm)(l,{id:"clip-right"},{default:(0,i.w5)((()=>[$])),_:1})])]))])}var et=n(577);const nt=t=>((0,i.dD)("data-v-cf2917dc"),t=t(),(0,i.Cn)(),t),ot={class:"sponsor__item"},it={class:"sponsor__link"},rt=["href"],st=["href"],at=["href"],lt=["href"],ct=["data-type"],ut=nt((()=>(0,i._)("div",{class:"cube-top"},null,-1))),dt=nt((()=>(0,i._)("div",{class:"cube-bottom"},null,-1))),pt=nt((()=>(0,i._)("div",{class:"cube-left"},null,-1))),vt=nt((()=>(0,i._)("div",{class:"cube-right"},null,-1))),ft={class:"cube-front"},mt=["src"],gt={class:"cube-back"};function ht(t,e,o,r,s,a){return(0,i.wg)(),(0,i.iD)("li",ot,[(0,i._)("div",it,[(0,i._)("a",{class:"link-top is-cursorHover",href:o.link,target:"_blank"},null,8,rt),(0,i._)("a",{class:"link-bottom is-cursorHover",href:o.link,target:"_blank"},null,8,st),(0,i._)("a",{class:"link-left is-cursorHover",href:o.link,target:"_blank"},null,8,at),(0,i._)("a",{class:"link-right is-cursorHover",href:o.link,target:"_blank"},null,8,lt),(0,i._)("div",{class:"sponsor__cube cube","data-type":o.enTitle},[ut,dt,pt,vt,(0,i._)("div",ft,[(0,i._)("img",{src:n(78)(`./${o.enTitle}_logo.jpg`)},null,8,mt)]),(0,i._)("div",gt,(0,et.zw)(o.title),1)],8,ct)])])}var bt={name:"section_7_sponsor_cube",props:{title:String,enTitle:String,link:String}};const xt=(0,W.Z)(bt,[["render",ht],["__scopeId","data-v-cf2917dc"]]);var kt=xt,wt={name:"section_7_sponsor",components:{cube:kt}};const Ct=(0,W.Z)(wt,[["render",tt],["__scopeId","data-v-2dd2e83a"]]);var yt=Ct;const It=t=>((0,i.dD)("data-v-1912b54d"),t=t(),(0,i.Cn)(),t),_t={id:"share"},Wt=It((()=>(0,i._)("div",{id:"CurtainsCanvas"},null,-1))),Rt={class:"share__lists"};function Et(t,e,n,o,r,s){const a=(0,i.up)("info");return(0,i.wg)(),(0,i.iD)("div",_t,[Wt,(0,i._)("ul",Rt,[(0,i.Wm)(a,{image:"blockstudio_logo.jpg",title:"網站的動態趨勢",date:"11/3（四）20:00 ~ 21:30",author:"李明",position:"版塊設計創辦人暨設計總監"}),(0,i.Wm)(a,{image:"blockstudio_logo.jpg",title:"網站的動態趨勢",date:"11/3（四）20:00 ~ 21:30",author:"李明",position:"版塊設計創辦人暨設計總監"}),(0,i.Wm)(a,{image:"blockstudio_logo.jpg",title:"網站的動態趨勢",date:"11/3（四）20:00 ~ 21:30",author:"李明",position:"版塊設計創辦人暨設計總監"}),(0,i.Wm)(a,{image:"blockstudio_logo.jpg",title:"網站的動態趨勢",date:"11/3（四）20:00 ~ 21:30",author:"李明",position:"版塊設計創辦人暨設計總監"})])])}const Tt=t=>((0,i.dD)("data-v-2bd3fa87"),t=t(),(0,i.Cn)(),t),Zt={class:"share__item plane-wrapper is-cursorHover"},Nt={class:"share__card plane-inner"},Pt={class:"share__image plane"},Qt=["src"],zt=Tt((()=>(0,i._)("p",{class:"share__tag"},"免費公開場",-1))),St={class:"share__info"},Vt={class:"share__title"},Ot={class:"share__date"},Gt={class:"share__author"},Mt={class:"share__position"};function Ut(t,e,o,r,s,a){return(0,i.wg)(),(0,i.iD)("li",Zt,[(0,i._)("div",Nt,[(0,i._)("div",Pt,[(0,i._)("img",{src:n(990)(`./${o.image}`),"data-sampler":"planeTexture"},null,8,Qt)]),zt,(0,i._)("div",St,[(0,i._)("h6",Vt,(0,et.zw)(o.title),1),(0,i._)("p",Ot,(0,et.zw)(o.date),1),(0,i._)("p",Gt,(0,et.zw)(o.author),1),(0,i._)("p",Mt,(0,et.zw)(o.position),1)])])])}var Dt=n(271),Bt={name:"section_8_share_info",props:{image:String,title:String,date:String,author:String,position:String},mounted:function(){let t=0;const e=new Dt.s_({container:"CurtainsCanvas",antialias:!1,pixelRatio:Math.min(1.5,window.devicePixelRatio)});e.onRender((()=>{t=e.lerp(t,0,.05)})).onScroll((()=>{const n=e.getScrollDeltas();n.y=-n.y,n.y>100?n.y=100:n.y<-100&&(n.y=-100),Math.abs(n.y)>Math.abs(t)&&(t=e.lerp(t,n.y,.5))})).onError((()=>{document.body.classList.add("no-curtains")})).onContextLost((()=>{e.restoreContext()}));const n=document.querySelectorAll(".plane"),o=new Dt.AC(e),i="\n      precision mediump float;\n\n      // default mandatory variables\n      attribute vec3 aVertexPosition;\n      attribute vec2 aTextureCoord;\n\n      uniform mat4 uMVMatrix;\n      uniform mat4 uPMatrix;\n\n      uniform mat4 planeTextureMatrix;\n\n      // custom variables\n      varying vec3 vVertexPosition;\n      varying vec2 vTextureMatrixCoord;\n\n      void main() {\n\n          vec3 vertexPosition = aVertexPosition;\n\n          gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n          // varyings\n          vVertexPosition = vertexPosition;\n          vTextureMatrixCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n      }\n    ",r="\n      precision mediump float;\n\n      varying vec3 vVertexPosition;\n      varying vec2 vTextureMatrixCoord;\n\n      uniform sampler2D planeTexture;\n\n      void main() {\n          // just display our texture\n          gl_FragColor = texture2D(planeTexture, vTextureMatrixCoord);\n      }\n    ";n.forEach(((t,n)=>{const s=new Dt.JO(e,t,{vertexShader:i,fragmentShader:r,texturesOptions:{minFilter:e.gl.LINEAR_MIPMAP_NEAREST}});s.setRenderTarget(o)}));const s="\n      precision mediump float;\n\n      varying vec3 vVertexPosition;\n      varying vec2 vTextureCoord;\n\n      uniform sampler2D uRenderTexture;\n\n      uniform float uScrollEffect;\n\n      void main() {\n          vec2 textureCoords = vTextureCoord;\n\n          vec2 redTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 650.0);\n          vec2 greenTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 800.0);\n          vec2 blueTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 900.0);\n\n          vec4 red = texture2D(uRenderTexture, redTextCoords);\n          vec4 green = texture2D(uRenderTexture, greenTextCoords);\n          vec4 blue = texture2D(uRenderTexture, blueTextCoords);\n\n          vec4 finalColor = vec4(red.r, green.g, blue.b, min(1.0, red.a + blue.a + green.a));\n          gl_FragColor = finalColor;\n      }\n    ",a=new Dt.TG(e,{fragmentShader:s,renderTarget:o,uniforms:{scrollEffect:{name:"uScrollEffect",type:"1f",value:0}}});a.onRender((()=>{a.uniforms.scrollEffect.value=t}))}};const At=(0,W.Z)(Bt,[["render",Ut],["__scopeId","data-v-2bd3fa87"]]);var jt=At,Yt={name:"section_8_share",components:{info:jt}};const Jt=(0,W.Z)(Yt,[["render",Et],["__scopeId","data-v-1912b54d"]]);var Ht=Jt,Xt={name:"HomeView",components:{section_6_awards:Y,section_7_sponsor:yt,section_8_share:Ht}};const Kt=(0,W.Z)(Xt,[["render",G]]);var Lt=Kt;const Ft=[{path:"/",name:"home",component:Lt}],qt=(0,V.p7)({history:(0,V.PO)("/thef2e-redesign-project/"),routes:Ft});var $t=qt,te=n(907),ee=(0,te.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(S).use(ee).use($t).mount("#app")},990:function(t,e,n){var o={"./blockstudio_logo.jpg":209,"./kdanmobile_logo.jpg":151,"./logo.png":427,"./titansoft_logo.jpg":782};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=990},78:function(t,e,n){var o={"./blockstudio_logo.jpg":209,"./kdanmobile_logo.jpg":151,"./titansoft_logo.jpg":782};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=78},209:function(t,e,n){"use strict";t.exports=n.p+"img/blockstudio_logo.b8d8b41e.jpg"},151:function(t,e,n){"use strict";t.exports=n.p+"img/kdanmobile_logo.3415b432.jpg"},427:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},782:function(t,e,n){"use strict";t.exports=n.p+"img/titansoft_logo.8f9af3ce.jpg"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],r=t[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(a=!1,r<s&&(s=r));if(a){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/thef2e-redesign-project/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,s=o[0],a=o[1],l=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var u=l(n)}for(e&&e(o);c<s.length;c++)r=s[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkthef2e_redesign_project"]=self["webpackChunkthef2e_redesign_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(573)}));o=n.O(o)})();
//# sourceMappingURL=app.43dc4eab.js.map
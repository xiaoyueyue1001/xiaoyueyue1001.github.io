System.register(["./index-legacy-CtoF77iG.js","./list-legacy-DMa0UVs0.js"],(function(e,a){"use strict";var t,i,r,n,l,d,c,s,o,u,b,m,f,v,p,g,h,w,x,k,y,_;return{setters:[function(e){t=e.d,i=e.h,r=e.i,n=e.j,l=e.o,d=e.c,c=e.a,s=e.m,o=e.w,u=e.v,b=e.q,m=e.F,f=e.r,v=e.b,p=e.e,g=e.f,h=e.k,w=e.t,x=e.p,k=e.g,y=e._},function(e){_=e.s}],execute:function(){var a=document.createElement("style");a.textContent="#dlbum-details-wrap[data-v-74b2bc8a]{height:100%;overflow:auto;position:relative;background-color:#f1f3f5;display:flex;flex-direction:column}#dlbum-details-wrap>.back[data-v-74b2bc8a]{padding:.4rem .12rem 0;background-color:#f1f3f5;display:flex;align-items:center}#dlbum-details-wrap>.back>img[data-v-74b2bc8a]{width:.24rem;height:.24rem;border-radius:50%;padding:.06rem;background-color:rgba(255,255,255,.6)}#dlbum-details-wrap>.back>.search[data-v-74b2bc8a]{width:3rem;margin:.12rem auto;height:.4rem;display:flex;align-items:center;background-color:rgba(0,0,0,.05);border-radius:.2rem;color:rgba(0,0,0,.4);padding:0 .12rem;font-size:.12rem;outline:none;border:none}#dlbum-details-wrap>.title[data-v-74b2bc8a]{height:.36rem;padding:0 .1rem;font-size:.12rem;color:#666;background-color:#eeeff0;display:flex;align-items:center;justify-content:space-between}#dlbum-details-wrap>.list[data-v-74b2bc8a]{flex:1;overflow:auto}#dlbum-details-wrap>.list>.item[data-v-74b2bc8a]{height:.6rem;padding:.1rem 0;border-bottom:1px solid #eeeeee;display:flex;align-items:center;color:#000}#dlbum-details-wrap>.list>.item.active[data-v-74b2bc8a]{color:red}#dlbum-details-wrap>.list>.item>.index[data-v-74b2bc8a]{width:.4rem;text-align:center;font-size:16px;opacity:.6}#dlbum-details-wrap>.list>.item>.center[data-v-74b2bc8a]{flex:1}#dlbum-details-wrap>.list>.item>.center>.name[data-v-74b2bc8a]{font-size:16px}#dlbum-details-wrap>.list>.item>.center>.singer[data-v-74b2bc8a]{font-size:14px;opacity:.6}#dlbum-details-wrap>.list>.item>.play[data-v-74b2bc8a]{width:.4rem;height:.4rem}\n",document.head.appendChild(a);var z={id:"dlbum-details-wrap"},C={class:"back"},j=function(e){return x("data-v-74b2bc8a"),e=e(),k(),e}((function(){return c("div",{class:"title"},[c("div",{class:"left"},"歌曲列表"),c("div",{class:"right"})],-1)})),I={class:"list"},S={class:"index"},q=["onClick"],E={class:"name"},F={class:"singer"};e("default",y(t({__name:"Search",setup:function(e){var a=i();v();var t=p(),x=r();r();var k=r(""),y=r([]),K=n((function(){return a.songInfo}));function L(){y.value=_.filter((function(e){return e.name.includes(k.value)})),x.value.blur()}function R(){t.back()}return l((function(){x.value.focus()})),function(e,t){return g(),d("div",z,[c("div",C,[c("img",{src:s,onClick:R}),o(c("input",{class:"search",onKeyup:b(L,["enter"]),placeholder:"点击搜索","onUpdate:modelValue":t[0]||(t[0]=function(e){return k.value=e}),ref_key:"inputRef",ref:x},null,544),[[u,k.value]])]),j,c("div",I,[(g(!0),d(m,null,f(y.value,(function(e,t){return g(),d("div",{class:h(["item",{active:K.value&&K.value.id===e.id}]),key:e.id},[c("div",S,w(t+1),1),c("div",{class:"center",onClick:function(t){return function(e){a.setList(y.value),a.setSongInfo(e)}(e)}},[c("div",E,w(e.name),1),c("div",F,w(e.singer)+"-"+w(e.artist),1)],8,q)],2)})),128))])])}}}),[["__scopeId","data-v-74b2bc8a"]]))}}}));

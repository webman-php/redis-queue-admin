import{_ as S,ae as B,am as x,aJ as T,a as k,at as p}from"./index.25bde1e8.js";import{A as w,bY as v,j as d,u as t,a0 as m,B as s,D as C,a1 as l,ac as _,K as D,aa as j}from"./vendor.0b8b9a83.js";import{c as y,u as F}from"./index.72912110.js";import"./index.170e6dae.js";import"./useWindowSizeFn.fd3295c9.js";import"./useContentViewHeight.98ac274f.js";const h=w({name:"LayoutFeatures",components:{BackTop:v,SettingDrawer:y(()=>B(()=>import("./index.50ce1a4c.js").then(function(e){return e.i}),["assets/index.50ce1a4c.js","assets/index.5c7227e9.css","assets/index.35b5cf30.css","assets/index.25bde1e8.js","assets/index.e75c4618.css","assets/vendor.0b8b9a83.js","assets/vendor.ced4861a.css","assets/index.72912110.js","assets/index.c7da2f10.css","assets/index.170e6dae.js","assets/index.55076fdd.css","assets/useWindowSizeFn.fd3295c9.js","assets/useContentViewHeight.98ac274f.js"]))},setup(){const{getUseOpenBackTop:e,getShowSettingButton:a,getSettingButtonPosition:r,getFullContent:i}=x(),u=T(),{prefixCls:c}=k("setting-drawer-fearure"),{getShowHeader:n}=F(),o=d(()=>u.getSessionTimeout),f=d(()=>{if(!t(a))return!1;const g=t(r);return g===p.AUTO?!t(n)||t(i):g===p.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:f,prefixCls:c,getIsSessionTimeout:o}}});function b(e,a,r,i,u,c){const n=m("BackTop"),o=m("SettingDrawer");return s(),C(j,null,[e.getUseOpenBackTop?(s(),l(n,{key:0,target:e.getTarget},null,8,["target"])):_("",!0),e.getIsFixedSettingDrawer?(s(),l(o,{key:1,class:D(e.prefixCls)},null,8,["class"])):_("",!0)],64)}var U=S(h,[["render",b]]);export{U as default};
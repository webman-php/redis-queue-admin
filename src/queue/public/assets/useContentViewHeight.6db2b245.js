var h=(t,i,e)=>new Promise((u,o)=>{var H=n=>{try{a(e.next(n))}catch(s){o(s)}},d=n=>{try{a(e.throw(n))}catch(s){o(s)}},a=n=>n.done?u(n.value):Promise.resolve(n.value).then(H,d);a((e=e.apply(t,i)).next())});import{L as m}from"./index.83ee0647.js";import{u as w}from"./useWindowSizeFn.fd3295c9.js";import{r,j as p,u as c}from"./vendor.0b8b9a83.js";const v=Symbol();function l(t){return m(t,v,{native:!0})}const g=r(0),f=r(0);function C(){function t(e){g.value=e}function i(e){f.value=e}return{headerHeightRef:g,footerHeightRef:f,setHeaderHeight:t,setFooterHeight:i}}function F(){const t=r(window.innerHeight),i=r(window.innerHeight),e=p(()=>c(t)-c(g)-c(f)||0);w(()=>{t.value=window.innerHeight},100,{immediate:!0});function u(o){return h(this,null,function*(){i.value=o})}l({contentHeight:e,setPageHeight:u,pageHeight:i})}export{F as a,C as u};
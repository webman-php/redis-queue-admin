import{A as v,r as a,j as x,u as e,B as y,D as w,w as H,a5 as S,H as b,K as f,X as d,aP as j}from"./vendor.0b8b9a83.js";import{u as z}from"./useWindowSizeFn.fd3295c9.js";import{p as C,a as R,_ as B}from"./index.83ee0647.js";import{u as F}from"./useContentViewHeight.6db2b245.js";const L=["src"],V=v({props:{frameSrc:C.string.def("")},setup(p){const i=a(!0),m=a(50),o=a(window.innerHeight),r=a(),{headerHeightRef:g}=F(),{prefixCls:c}=R("iframe-page");z(u,150,{immediate:!0});const l=x(()=>({height:`${e(o)}px`}));function u(){const n=e(r);if(!n)return;const t=g.value;m.value=t,o.value=window.innerHeight-t;const s=document.documentElement.clientHeight-t;n.style.height=`${s}px`}function _(){i.value=!1,u()}return(n,t)=>(y(),w("div",{class:f(e(c)),style:d(e(l))},[H(e(j),{spinning:i.value,size:"large",style:d(e(l))},{default:S(()=>[b("iframe",{src:p.frameSrc,class:f(`${e(c)}__main`),ref:(s,h)=>{h.frameRef=s,r.value=s},onLoad:_},null,42,L)]),_:1},8,["spinning","style"])],6))}});var E=B(V,[["__scopeId","data-v-179381bf"]]);export{E as default};

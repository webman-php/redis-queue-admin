import{A as _,aU as C,bZ as F,a as g,r as v,j as w,u as n,a0 as c,B as y,a1 as S,a5 as h,H as a,J as m,w as L,K as d,ac as R,L as $,N as I}from"./vendor.0b8b9a83.js";import{D as U,G as b,S as k}from"./siteSetting.c485f07c.js";import{_ as H,am as j,a as B,F as D,f as G}from"./index.4236c607.js";import{u as V}from"./useContentViewHeight.7ff5c4dd.js";import"./useWindowSizeFn.fd3295c9.js";const W=_({name:"LayoutFooter",components:{Footer:C.Footer,GithubFilled:F},setup(){const{t:e}=G(),{getShowFooter:o}=j(),{currentRoute:l}=g(),{prefixCls:p}=B("layout-footer"),r=v(null),{setFooterHeight:i}=V();return{getShowLayoutFooter:w(()=>{var s,t;if(n(o)){const u=(s=n(r))==null?void 0:s.$el;i((u==null?void 0:u.offsetHeight)||0)}else i(0);return n(o)&&!((t=n(l).meta)==null?void 0:t.hiddenFooter)}),prefixCls:p,t:e,DOC_URL:U,GITHUB_URL:b,SITE_URL:k,openWindow:D,footerRef:r}}}),N=e=>($("data-v-62583d60"),e=e(),I(),e),T=N(()=>a("div",null,"Copyright \xA92020 Vben Admin",-1));function A(e,o,l,p,r,i){const f=c("GithubFilled"),s=c("Footer");return e.getShowLayoutFooter?(y(),S(s,{key:0,class:d(e.prefixCls),ref:"footerRef"},{default:h(()=>[a("div",{class:d(`${e.prefixCls}__links`)},[a("a",{onClick:o[0]||(o[0]=t=>e.openWindow(e.SITE_URL))},m(e.t("layout.footer.onlinePreview")),1),L(f,{onClick:o[1]||(o[1]=t=>e.openWindow(e.GITHUB_URL)),class:d(`${e.prefixCls}__github`)},null,8,["class"]),a("a",{onClick:o[2]||(o[2]=t=>e.openWindow(e.DOC_URL))},m(e.t("layout.footer.onlineDocument")),1)],2),T]),_:1},8,["class"])):R("",!0)}var K=H(W,[["render",A],["__scopeId","data-v-62583d60"]]);export{K as default};

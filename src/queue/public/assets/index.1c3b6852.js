import{_ as I,ae as D,p as b,a as $,aD as j,f as S,F as x}from"./index.83ee0647.js";import{A as U,aB as A,aA as C,j as O,a0 as n,B as t,D as N,w as a,a5 as m,a1 as f,ac as _,H as s,K as r,J as B,aa as E}from"./vendor.0b8b9a83.js";import{D as P}from"./siteSetting.c485f07c.js";import{c as y,u as R}from"./index.7e0d07a1.js";import{b as V}from"./index.34a534cc.js";var T="/app/queue/assets/header.1b5fa5f8.jpg";const z=U({name:"UserDropdown",components:{Dropdown:A,Menu:C,MenuItem:y(()=>D(()=>import("./DropMenuItem.ed2d9048.js"),["assets/DropMenuItem.ed2d9048.js","assets/vendor.0b8b9a83.js","assets/vendor.ced4861a.css","assets/index.83ee0647.js","assets/index.e75c4618.css"])),MenuDivider:C.Divider,LockAction:y(()=>D(()=>import("./LockModal.0a84c2c2.js"),["assets/LockModal.0a84c2c2.js","assets/LockModal.0068f88c.css","assets/index.ccc15a38.css","assets/index.35b5cf30.css","assets/index.c4896195.css","assets/index.553174f4.css","assets/index.317f90e2.css","assets/index.83ee0647.js","assets/index.e75c4618.css","assets/vendor.0b8b9a83.js","assets/vendor.ced4861a.css","assets/index.34a534cc.js","assets/index.a6f0c974.css","assets/useWindowSizeFn.fd3295c9.js","assets/useForm.c8a9257b.js","assets/useForm.8c8535e0.css","assets/index.7e0d07a1.js","assets/index.c7da2f10.css","assets/index.b97b9dbd.js","assets/index.55076fdd.css","assets/useContentViewHeight.6db2b245.js","assets/siteSetting.c485f07c.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=$("header-user-dropdown"),{t:g}=S(),{getShowDoc:k,getUseLockPage:h}=R(),i=j(),v=O(()=>{const{realName:p="",avatar:M,desc:L}=i.getUserInfo||{};return{realName:p,avatar:M||T,desc:L}}),[o,{openModal:c}]=V();function l(){c(!0)}function d(){i.confirmLoginOut()}function u(){x(P)}function w(p){switch(p.key){case"logout":d();break;case"doc":u();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:v,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),F=["src"];function H(e,g,k,h,i,v){const o=n("MenuItem"),c=n("MenuDivider"),l=n("Menu"),d=n("Dropdown"),u=n("LockAction");return t(),N(E,null,[a(d,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[a(l,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(t(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(t(),f(c,{key:1})):_("",!0),e.getUseLockPage?(t(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),a(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[s("span",{class:r([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[s("img",{class:r(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,F),s("span",{class:r(`${e.prefixCls}__info hidden md:block`)},[s("span",{class:r([`${e.prefixCls}__name  `,"truncate"])},B(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),a(u,{onRegister:e.register},null,8,["onRegister"])],64)}var q=I(z,[["render",H]]),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});export{T as h,X as i};

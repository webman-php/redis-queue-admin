var u=(e,d,o)=>new Promise((m,r)=>{var p=s=>{try{a(o.next(s))}catch(n){r(n)}},t=s=>{try{a(o.throw(s))}catch(n){r(n)}},a=s=>s.done?m(s.value):Promise.resolve(s.value).then(p,t);a((o=o.apply(e,d)).next())});import{_ as C,a as w,aD as y,f as F}from"./index.f7705ca9.js";import{B as S,a as $}from"./index.7eabfedf.js";import{B as b,h as x}from"./useForm.ad554029.js";import{b as L}from"./index.dc3108dc.js";import{h as M}from"./index.6040e4e2.js";import{A as I,j as _,a0 as f,B as N,a1 as R,a5 as g,H as l,K as c,J as h,w as k,ad as V,a4 as D}from"./vendor.943fa63b.js";import"./useWindowSizeFn.f212eff5.js";/* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import"./index.df3c30ee.js";import"./useContentViewHeight.7e83edbb.js";import"./siteSetting.c485f07c.js";const P=I({name:"LockModal",components:{BasicModal:S,BasicForm:b},setup(){const{t:e}=F(),{prefixCls:d}=w("header-lock-modal"),o=y(),m=L(),r=_(()=>{var i;return(i=o.getUserInfo)==null?void 0:i.realName}),[p,{closeModal:t}]=$(),[a,{validateFields:s,resetFields:n}]=x({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});function j(){return u(this,null,function*(){const B=(yield s()).password;t(),m.setLockInfo({isLock:!0,pwd:B}),yield n()})}const v=_(()=>{const{avatar:i}=o.getUserInfo;return i||M});return{t:e,prefixCls:d,getRealName:r,register:p,registerForm:a,handleLock:j,avatar:v}}}),U=["src"];function z(e,d,o,m,r,p){const t=f("BasicForm"),a=f("a-button"),s=f("BasicModal");return N(),R(s,D({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:g(()=>[l("div",{class:c(`${e.prefixCls}__entry`)},[l("div",{class:c(`${e.prefixCls}__header`)},[l("img",{src:e.avatar,class:c(`${e.prefixCls}__header-img`)},null,10,U),l("p",{class:c(`${e.prefixCls}__header-name`)},h(e.getRealName),3)],2),k(t,{onRegister:e.registerForm},null,8,["onRegister"]),l("div",{class:c(`${e.prefixCls}__footer`)},[k(a,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:g(()=>[V(h(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var oe=C(P,[["render",z]]);export{oe as default};
var it=Object.defineProperty,at=Object.defineProperties;var rt=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var fe=(e,o,i)=>o in e?it(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,b=(e,o)=>{for(var i in o||(o={}))lt.call(o,i)&&fe(e,i,o[i]);if(Te)for(var i of Te(o))ut.call(o,i)&&fe(e,i,o[i]);return e},ge=(e,o)=>at(e,rt(o));var De=(e,o,i)=>new Promise((c,d)=>{var S=g=>{try{u(i.next(g))}catch(E){d(E)}},r=g=>{try{u(i.throw(g))}catch(E){d(E)}},u=g=>g.done?c(g.value):Promise.resolve(g.value).then(S,r);u((i=i.apply(e,o)).next())});import{f as ne,a as ce,_ as se,B as _t,p as de,S as gt,z as ct,W as Ce,d as dt,j as St,X as Et,V as Ot,w as pt,ae as w,aK as Ae,aL as Se,aM as m,a5 as ie,a6 as W,aN as Me,aw as ae,ap as Ne,aO as Re,aP as Ie,am as ye,aQ as Tt,aR as ft,aS as Dt,aT as Ct,av as At,b as Mt,aU as Nt,aV as Rt,aW as It,aX as yt,I as bt}from"./index.4236c607.js";import{A as $,j as A,a0 as M,B as f,D as U,aa as H,a6 as D,a1 as re,a5 as N,ad as Ee,J as le,a4 as X,ac as V,K as P,X as be,b_ as ht,H as he,w as s,bV as Lt,r as j,u as t,t as x,S as Le,ai as Be,$ as Bt,bc as wt,aD as we,F as mt,ap as Ut,aC as Pt,aS as Ft,P as me,af as kt,bd as vt,bi as R}from"./vendor.0b8b9a83.js";import{c as F,u as Gt,a as Wt}from"./index.b601f5a7.js";/* empty css              */const{t:Ue}=ne(),Pe={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:Ue("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:Ue("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},$t=b({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},Pe);const Ht=$({name:"BasicDrawerFooter",props:ge(b({},Pe),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:o}){const{prefixCls:i}=ce("basic-drawer-footer"),c=A(()=>{const r=`${e.height}`;return{height:r,lineHeight:`calc(${r} - 1px)`}});function d(){o("ok")}function S(){o("close")}return{handleOk:d,prefixCls:i,handleClose:S,getStyle:c}}});function Xt(e,o,i,c,d,S){const r=M("a-button");return e.showFooter||e.$slots.footer?(f(),U("div",{key:0,class:P(e.prefixCls),style:be(e.getStyle)},[e.$slots.footer?D(e.$slots,"footer",{key:1}):(f(),U(H,{key:0},[D(e.$slots,"insertFooter"),e.showCancelBtn?(f(),re(r,X({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:N(()=>[Ee(le(e.cancelText),1)]),_:1},16,["onClick"])):V("",!0),D(e.$slots,"centerFooter"),e.showOkBtn?(f(),re(r,X({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:N(()=>[Ee(le(e.okText),1)]),_:1},16,["type","onClick","loading"])):V("",!0),D(e.$slots,"appendFooter")],64))],6)):V("",!0)}var Vt=se(Ht,[["render",Xt]]);const jt=$({name:"BasicDrawerHeader",components:{BasicTitle:_t,ArrowLeftOutlined:ht},props:{isDetail:de.bool,showDetailBack:de.bool,title:de.string},emits:["close"],setup(e,{emit:o}){const{prefixCls:i}=ce("basic-drawer-header");function c(){o("close")}return{prefixCls:i,handleClose:c}}}),xt={key:1};function Kt(e,o,i,c,d,S){const r=M("BasicTitle"),u=M("ArrowLeftOutlined");return e.isDetail?(f(),U("div",{key:1,class:P([e.prefixCls,`${e.prefixCls}--detail`])},[he("span",{class:P(`${e.prefixCls}__twrap`)},[e.showDetailBack?(f(),U("span",{key:0,onClick:o[0]||(o[0]=(...g)=>e.handleClose&&e.handleClose(...g))},[s(u,{class:P(`${e.prefixCls}__back`)},null,8,["class"])])):V("",!0),e.title?(f(),U("span",xt,le(e.title),1)):V("",!0)],2),he("span",{class:P(`${e.prefixCls}__toolbar`)},[D(e.$slots,"titleToolbar")],2)],2)):(f(),re(r,{key:0,class:P(e.prefixCls)},{default:N(()=>[D(e.$slots,"title"),Ee(" "+le(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var Qt=se(jt,[["render",Kt]]);const Yt=$({components:{Drawer:Lt,ScrollContainer:gt,DrawerFooter:Vt,DrawerHeader:Qt},inheritAttrs:!1,props:$t,emits:["visible-change","ok","close","register"],setup(e,{emit:o}){const i=j(!1),c=ct(),d=j(null),{t:S}=ne(),{prefixVar:r,prefixCls:u}=ce("basic-drawer"),g={setDrawerProps:v,emitVisible:void 0},E=Be();E&&o("register",g,E.uid);const C=A(()=>Ce(x(e),t(d))),T=A(()=>{const l=ge(b(b({placement:"right"},t(c)),t(C)),{visible:t(i)});l.title=void 0;const{isDetail:O,width:G,wrapClassName:Z,getContainer:J}=l;if(O){G||(l.width="100%");const ee=`${u}__detail`;l.class=Z?`${Z} ${ee}`:ee,J||(l.getContainer=`.${r}-layout-content`)}return l}),k=A(()=>b(b({},c),t(T))),Y=A(()=>{const{footerHeight:l,showFooter:O}=t(T);return O&&l?dt(l)?`${l}px`:`${l.replace("px","")}px`:"0px"}),ue=A(()=>{const l=t(Y);return{position:"relative",height:`calc(100% - ${l})`}}),z=A(()=>{var l;return!!((l=t(T))==null?void 0:l.loading)});Le(()=>e.visible,(l,O)=>{l!==O&&(i.value=l)},{deep:!0}),Le(()=>i.value,l=>{Bt(()=>{var O;o("visible-change",l),E&&((O=g.emitVisible)==null||O.call(g,l,E.uid))})});function _e(l){return De(this,null,function*(){const{closeFunc:O}=t(T);if(o("close",l),O&&St(O)){const G=yield O();i.value=!G;return}i.value=!1})}function v(l){d.value=Ce(t(d)||{},l),Reflect.has(l,"visible")&&(i.value=!!l.visible)}function q(){o("ok")}return{onClose:_e,t:S,prefixCls:u,getMergeProps:C,getScrollContentStyle:ue,getProps:T,getLoading:z,getBindValues:k,getFooterHeight:Y,handleOk:q}}});function zt(e,o,i,c,d,S){const r=M("DrawerHeader"),u=M("ScrollContainer"),g=M("DrawerFooter"),E=M("Drawer"),C=wt("loading");return f(),re(E,X({class:e.prefixCls,onClose:e.onClose},e.getBindValues),we({default:N(()=>[mt(s(u,{style:be(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:N(()=>[D(e.$slots,"default")]),_:3},8,["style","loading-tip"]),[[C,e.getLoading]]),s(g,X(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),we({_:2},[Ut(Object.keys(e.$slots),T=>({name:T,fn:N(k=>[D(e.$slots,T,Pt(Ft(k||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:N(()=>[D(e.$slots,"title")])}:{name:"title",fn:N(()=>[s(r,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:N(()=>[D(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])])}]),1040,["class","onClose"])}var qt=se(Yt,[["render",zt]]);const K=me({}),Fe=me({});function Zt(){if(!Be())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=j(null),o=j(!1),i=j("");function c(r,u){kt(()=>{e.value=null,o.value=null,K[t(i)]=null}),!(t(o)&&Et()&&r===t(e))&&(i.value=u,e.value=r,o.value=!0,r.emitVisible=(g,E)=>{Fe[E]=g})}const d=()=>{const r=t(e);return r||Ot("useDrawer instance is undefined!"),r},S={setDrawerProps:r=>{var u;(u=d())==null||u.setDrawerProps(r)},getVisible:A(()=>Fe[~~t(i)]),openDrawer:(r=!0,u,g=!0)=>{var C;if((C=d())==null||C.setDrawerProps({visible:r}),!u)return;if(g){K[t(i)]=null,K[t(i)]=x(u);return}vt(x(K[t(i)]),x(u))||(K[t(i)]=x(u))},closeDrawer:()=>{var r;(r=d())==null||r.setDrawerProps({visible:!1})}};return[c,S]}const Jt=pt(qt),eo=F(()=>w(()=>import("./TypePicker.ab07d019.js"),["assets/TypePicker.ab07d019.js","assets/TypePicker.8770fc04.css","assets/vendor.0b8b9a83.js","assets/vendor.ced4861a.css","assets/index.4236c607.js","assets/index.e75c4618.css"])),Oe=F(()=>w(()=>import("./ThemeColorPicker.39541c20.js"),["assets/ThemeColorPicker.39541c20.js","assets/ThemeColorPicker.8eb61909.css","assets/index.35b5cf30.css","assets/index.4236c607.js","assets/index.e75c4618.css","assets/vendor.0b8b9a83.js","assets/vendor.ced4861a.css","assets/index.b601f5a7.js","assets/index.c7da2f10.css","assets/index.cf6b629e.js","assets/index.55076fdd.css","assets/useWindowSizeFn.fd3295c9.js","assets/useContentViewHeight.7ff5c4dd.js"])),to=F(()=>w(()=>import("./SettingFooter.331753be.js"),["assets/SettingFooter.331753be.js","assets/SettingFooter.9c0370f9.css","assets/index.4236c607.js","assets/index.e75c4618.css","assets/vendor.0b8b9a83.js","assets/vendor.ced4861a.css"])),_=F(()=>w(()=>import("./SwitchItem.5a858aa3.js"),["assets/SwitchItem.5a858aa3.js","assets/SwitchItem.458f0d56.css","assets/index.317f90e2.css","assets/index.35b5cf30.css","assets/vendor.0b8b9a83.js","assets/vendor.ced4861a.css","assets/index.4236c607.js","assets/index.e75c4618.css","assets/index.b601f5a7.js","assets/index.c7da2f10.css","assets/index.cf6b629e.js","assets/index.55076fdd.css","assets/useWindowSizeFn.fd3295c9.js","assets/useContentViewHeight.7ff5c4dd.js"])),Q=F(()=>w(()=>import("./SelectItem.833aa60d.js"),["assets/SelectItem.833aa60d.js","assets/SelectItem.809be52d.css","assets/index.35b5cf30.css","assets/vendor.0b8b9a83.js","assets/vendor.ced4861a.css","assets/index.4236c607.js","assets/index.e75c4618.css","assets/index.b601f5a7.js","assets/index.c7da2f10.css","assets/index.cf6b629e.js","assets/index.55076fdd.css","assets/useWindowSizeFn.fd3295c9.js","assets/useContentViewHeight.7ff5c4dd.js"])),ke=F(()=>w(()=>import("./InputNumberItem.becfc531.js"),["assets/InputNumberItem.becfc531.js","assets/InputNumberItem.228b843e.css","assets/index.553174f4.css","assets/index.35b5cf30.css","assets/vendor.0b8b9a83.js","assets/vendor.ced4861a.css","assets/index.4236c607.js","assets/index.e75c4618.css","assets/index.b601f5a7.js","assets/index.c7da2f10.css","assets/index.cf6b629e.js","assets/index.55076fdd.css","assets/useWindowSizeFn.fd3295c9.js","assets/useContentViewHeight.7ff5c4dd.js"])),{t:p}=ne();var n;(function(e){e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.LOCK_TIME=25]="LOCK_TIME",e[e.FULL_CONTENT=26]="FULL_CONTENT",e[e.CONTENT_MODE=27]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=30]="GRAY_MODE",e[e.COLOR_WEAK=31]="COLOR_WEAK",e[e.SHOW_LOGO=32]="SHOW_LOGO",e[e.SHOW_FOOTER=33]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=35]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION"})(n||(n={}));const oo=[{value:Ae.FULL,label:p("layout.setting.contentModeFull")},{value:Ae.FIXED,label:p("layout.setting.contentModeFixed")}],no=[{value:Se.CENTER,label:p("layout.setting.topMenuAlignRight")},{value:Se.START,label:p("layout.setting.topMenuAlignLeft")},{value:Se.END,label:p("layout.setting.topMenuAlignCenter")}],so=e=>[{value:ae.NONE,label:p("layout.setting.menuTriggerNone")},{value:ae.FOOTER,label:p("layout.setting.menuTriggerBottom")},...e?[]:[{value:ae.HEADER,label:p("layout.setting.menuTriggerTop")}]],io=[m.ZOOM_FADE,m.FADE,m.ZOOM_OUT,m.FADE_SIDE,m.FADE_BOTTOM,m.FADE_SCALE].map(e=>({label:e,value:e})),ao=[{title:p("layout.setting.menuTypeSidebar"),mode:ie.INLINE,type:W.SIDEBAR},{title:p("layout.setting.menuTypeMix"),mode:ie.INLINE,type:W.MIX},{title:p("layout.setting.menuTypeTopMenu"),mode:ie.HORIZONTAL,type:W.TOP_MENU},{title:p("layout.setting.menuTypeMixSidebar"),mode:ie.INLINE,type:W.MIX_SIDEBAR}],ro=[{value:Me.HOVER,label:p("layout.setting.triggerHover")},{value:Me.CLICK,label:p("layout.setting.triggerClick")}];function lo(e,o){const i=Ne(),c=uo(e,o);i.setProjectConfig(c),e===n.CHANGE_THEME&&(Re(),Ie())}function uo(e,o){const i=Ne(),{getThemeColor:c,getDarkMode:d}=ye();switch(e){case n.CHANGE_LAYOUT:const{mode:S,type:r,split:u}=o;return{menuSetting:b({mode:S,type:r,collapsed:!1,show:!0,hidden:!1},u===void 0?{split:u}:{})};case n.CHANGE_THEME_COLOR:return c.value===o?{}:(Ct(o),{themeColor:o});case n.CHANGE_THEME:return d.value===o?{}:(Dt(o),{});case n.MENU_HAS_DRAG:return{menuSetting:{canDrag:o}};case n.MENU_ACCORDION:return{menuSetting:{accordion:o}};case n.MENU_TRIGGER:return{menuSetting:{trigger:o}};case n.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:o}};case n.MENU_COLLAPSED:return{menuSetting:{collapsed:o}};case n.MENU_WIDTH:return{menuSetting:{menuWidth:o}};case n.MENU_SHOW_SIDEBAR:return{menuSetting:{show:o}};case n.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:o}};case n.MENU_THEME:return Ie(o),{menuSetting:{bgColor:o}};case n.MENU_SPLIT:return{menuSetting:{split:o}};case n.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:o}};case n.MENU_FIXED:return{menuSetting:{fixed:o}};case n.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:o}};case n.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:o}};case n.OPEN_PAGE_LOADING:return i.setPageLoading(!1),{transitionSetting:{openPageLoading:o}};case n.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:o}};case n.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:o}};case n.OPEN_PROGRESS:return{transitionSetting:{openNProgress:o}};case n.LOCK_TIME:return{lockTime:o};case n.FULL_CONTENT:return{fullContent:o};case n.CONTENT_MODE:return{contentMode:o};case n.SHOW_BREADCRUMB:return{showBreadCrumb:o};case n.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:o};case n.GRAY_MODE:return ft(o),{grayMode:o};case n.SHOW_FOOTER:return{showFooter:o};case n.COLOR_WEAK:return Tt(o),{colorWeak:o};case n.SHOW_LOGO:return{showLogo:o};case n.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:o}};case n.TABS_SHOW:return{multiTabsSetting:{show:o}};case n.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:o}};case n.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:o}};case n.HEADER_THEME:return Re(o),{headerSetting:{bgColor:o}};case n.HEADER_SEARCH:return{headerSetting:{showSearch:o}};case n.HEADER_FIXED:return{headerSetting:{fixed:o}};case n.HEADER_SHOW:return{headerSetting:{show:o}};default:return{}}}const{t:a}=ne();var _o=$({name:"SettingDrawer",setup(e,{attrs:o}){const{getContentMode:i,getShowFooter:c,getShowBreadCrumb:d,getShowBreadCrumbIcon:S,getShowLogo:r,getFullContent:u,getColorWeak:g,getGrayMode:E,getLockTime:C,getShowDarkModeToggle:T,getThemeColor:k}=ye(),{getOpenPageLoading:Y,getBasicTransition:ue,getEnableTransition:z,getOpenNProgress:_e}=At(),{getIsHorizontal:v,getShowMenu:q,getMenuType:l,getTrigger:O,getCollapsedShowTitle:G,getMenuFixed:Z,getCollapsed:J,getCanDrag:ee,getTopMenuAlign:ve,getAccordion:Ge,getMenuWidth:We,getMenuBgColor:$e,getIsTopMenu:He,getSplit:te,getIsMixSidebar:I,getCloseMixSidebarOnChange:Xe,getMixSideTrigger:Ve,getMixSideFixed:je}=Mt(),{getShowHeader:h,getFixed:xe,getHeaderBgColor:Ke,getShowSearch:Qe}=Gt(),{getShowMultipleTab:oe,getShowQuick:Ye,getShowRedo:ze,getShowFold:qe}=Wt(),y=A(()=>t(q)&&!t(v));function Ze(){return s(H,null,[s(eo,{menuTypeList:ao,handler:L=>{lo(n.CHANGE_LAYOUT,{mode:L.mode,type:L.type,split:t(v)?!1:void 0})},def:t(l)},null)])}function Je(){return s(Oe,{colorList:It,def:t(Ke),event:n.HEADER_THEME},null)}function et(){return s(Oe,{colorList:yt,def:t($e),event:n.MENU_THEME},null)}function tt(){return s(Oe,{colorList:Rt,def:t(k),event:n.CHANGE_THEME_COLOR},null)}function ot(){let L=t(O);const pe=so(t(te));return pe.some(B=>B.value===L)||(L=ae.FOOTER),s(H,null,[s(_,{title:a("layout.setting.splitMenu"),event:n.MENU_SPLIT,def:t(te),disabled:!t(y)||t(l)!==W.MIX},null),s(_,{title:a("layout.setting.mixSidebarFixed"),event:n.MENU_FIXED_MIX_SIDEBAR,def:t(je),disabled:!t(I)},null),s(_,{title:a("layout.setting.closeMixSidebarOnChange"),event:n.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:t(Xe),disabled:!t(I)},null),s(_,{title:a("layout.setting.menuCollapse"),event:n.MENU_COLLAPSED,def:t(J),disabled:!t(y)},null),s(_,{title:a("layout.setting.menuDrag"),event:n.MENU_HAS_DRAG,def:t(ee),disabled:!t(y)},null),s(_,{title:a("layout.setting.menuSearch"),event:n.HEADER_SEARCH,def:t(Qe),disabled:!t(h)},null),s(_,{title:a("layout.setting.menuAccordion"),event:n.MENU_ACCORDION,def:t(Ge),disabled:!t(y)},null),s(_,{title:a("layout.setting.collapseMenuDisplayName"),event:n.MENU_COLLAPSED_SHOW_TITLE,def:t(G),disabled:!t(y)||!t(J)||t(I)},null),s(_,{title:a("layout.setting.fixedHeader"),event:n.HEADER_FIXED,def:t(xe),disabled:!t(h)},null),s(_,{title:a("layout.setting.fixedSideBar"),event:n.MENU_FIXED,def:t(Z),disabled:!t(y)||t(I)},null),s(Q,{title:a("layout.setting.mixSidebarTrigger"),event:n.MENU_TRIGGER_MIX_SIDEBAR,def:t(Ve),options:ro,disabled:!t(I)},null),s(Q,{title:a("layout.setting.topMenuLayout"),event:n.MENU_TOP_ALIGN,def:t(ve),options:no,disabled:!t(h)||t(te)||!t(He)&&!t(te)||t(I)},null),s(Q,{title:a("layout.setting.menuCollapseButton"),event:n.MENU_TRIGGER,def:L,options:pe,disabled:!t(y)||t(I)},null),s(Q,{title:a("layout.setting.contentMode"),event:n.CONTENT_MODE,def:t(i),options:oo},null),s(ke,{title:a("layout.setting.autoScreenLock"),min:0,event:n.LOCK_TIME,defaultValue:t(C),formatter:B=>parseInt(B)===0?`0(${a("layout.setting.notAutoScreenLock")})`:`${B}${a("layout.setting.minute")}`},null),s(ke,{title:a("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:n.MENU_WIDTH,disabled:!t(y),defaultValue:t(We),formatter:B=>`${parseInt(B)}px`},null)])}function nt(){return s(H,null,[s(_,{title:a("layout.setting.breadcrumb"),event:n.SHOW_BREADCRUMB,def:t(d),disabled:!t(h)},null),s(_,{title:a("layout.setting.breadcrumbIcon"),event:n.SHOW_BREADCRUMB_ICON,def:t(S),disabled:!t(h)},null),s(_,{title:a("layout.setting.tabs"),event:n.TABS_SHOW,def:t(oe)},null),s(_,{title:a("layout.setting.tabsRedoBtn"),event:n.TABS_SHOW_REDO,def:t(ze),disabled:!t(oe)},null),s(_,{title:a("layout.setting.tabsQuickBtn"),event:n.TABS_SHOW_QUICK,def:t(Ye),disabled:!t(oe)},null),s(_,{title:a("layout.setting.tabsFoldBtn"),event:n.TABS_SHOW_FOLD,def:t(qe),disabled:!t(oe)},null),s(_,{title:a("layout.setting.sidebar"),event:n.MENU_SHOW_SIDEBAR,def:t(q),disabled:t(v)},null),s(_,{title:a("layout.setting.header"),event:n.HEADER_SHOW,def:t(h)},null),s(_,{title:"Logo",event:n.SHOW_LOGO,def:t(r),disabled:t(I)},null),s(_,{title:a("layout.setting.footer"),event:n.SHOW_FOOTER,def:t(c)},null),s(_,{title:a("layout.setting.fullContent"),event:n.FULL_CONTENT,def:t(u)},null),s(_,{title:a("layout.setting.grayMode"),event:n.GRAY_MODE,def:t(E)},null),s(_,{title:a("layout.setting.colorWeak"),event:n.COLOR_WEAK,def:t(g)},null)])}function st(){return s(H,null,[s(_,{title:a("layout.setting.progress"),event:n.OPEN_PROGRESS,def:t(_e)},null),s(_,{title:a("layout.setting.switchLoading"),event:n.OPEN_PAGE_LOADING,def:t(Y)},null),s(_,{title:a("layout.setting.switchAnimation"),event:n.OPEN_ROUTE_TRANSITION,def:t(z)},null),s(Q,{title:a("layout.setting.animationType"),event:n.ROUTER_TRANSITION,def:t(ue),options:io,disabled:!t(z)},null)])}return()=>s(Jt,X(o,{title:a("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"}),{default:()=>[t(T)&&s(R,null,{default:()=>a("layout.setting.darkMode")}),t(T)&&s(Nt,{class:"mx-auto"},null),s(R,null,{default:()=>a("layout.setting.navMode")}),Ze(),s(R,null,{default:()=>a("layout.setting.sysTheme")}),tt(),s(R,null,{default:()=>a("layout.setting.headerTheme")}),Je(),s(R,null,{default:()=>a("layout.setting.sidebarTheme")}),et(),s(R,null,{default:()=>a("layout.setting.interfaceFunction")}),ot(),s(R,null,{default:()=>a("layout.setting.interfaceDisplay")}),nt(),s(R,null,{default:()=>a("layout.setting.animation")}),st(),s(R,null,null),s(to,null,null)]})}});const go=$({name:"SettingButton",components:{SettingDrawer:_o,Icon:bt},setup(){const[e,{openDrawer:o}]=Zt();return{register:e,openDrawer:o}}});function co(e,o,i,c,d,S){const r=M("Icon"),u=M("SettingDrawer");return f(),U("div",{onClick:o[0]||(o[0]=g=>e.openDrawer(!0))},[s(r,{icon:"ion:settings-outline"}),s(u,{onRegister:e.register},null,8,["onRegister"])])}var So=se(go,[["render",co]]),Co=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:So});export{lo as b,Co as i};

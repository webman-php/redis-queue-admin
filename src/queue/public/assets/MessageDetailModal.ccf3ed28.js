import{B as i}from"./TableImg.36a0aa1a.js";import"./useForm.ad554029.js";import{B as d,a as l}from"./index.7eabfedf.js";import{_ as u}from"./index.f7705ca9.js";import{r as m,A as c,z as p,a0 as a,B as f,D as _,w as o,a5 as j,a4 as B}from"./vendor.943fa63b.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.f212eff5.js";import"./useContentViewHeight.7e83edbb.js";/* empty css               *//* empty css               *//* empty css               *//* empty css              */import"./sortable.esm.6bfbf233.js";/* empty css               *//* empty css               */const x=[{title:"\u5B57\u6BB5",dataIndex:"field",width:100},{title:"\u503C",dataIndex:"value",customRender:({record:e})=>e.field!="\u53C2\u6570"?e.value:p("pre",null,e.value)}],t=m([]),b=c({components:{BasicTable:i,BasicModal:d},emits:["reload","register"],setup(){const[e]=l(s=>{t.value=s});return{register:e,columns:x,dataSource:t}}}),g={class:"p-4"};function v(e,s,C,M,h,w){const n=a("BasicTable"),r=a("BasicModal");return f(),_("div",g,[o(r,B(e.$attrs,{destroyOnClose:"",onRegister:e.register,title:"\u6D88\u606F\u8BE6\u60C5"}),{default:j(()=>[o(n,{columns:e.columns,"data-source":e.dataSource,pagination:!1,bordered:!1,"show-index-column":!1},null,8,["columns","data-source"])]),_:1},16,["onRegister"])])}var P=u(b,[["render",v],["__scopeId","data-v-dc374ec4"]]);export{P as default};
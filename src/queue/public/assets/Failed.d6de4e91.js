import{B as c}from"./TableImg.b3142596.js";import{T as p}from"./useForm.b92e9584.js";import{u as f}from"./useTable.41d972c7.js";import{T as b}from"./index.5cdb4d60.js";import{g}from"./common.cd99993f.js";import{b as _}from"./index.ba146865.js";import j from"./MessageDetailModal.2e6483a7.js";import{_ as F}from"./index.25bde1e8.js";import{A as x,a0 as a,B as T,D as h,w as o,a5 as w,z as B}from"./vendor.0b8b9a83.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.fd3295c9.js";import"./useContentViewHeight.98ac274f.js";/* empty css               *//* empty css               *//* empty css               *//* empty css              */import"./sortable.esm.6bfbf233.js";/* empty css               *//* empty css               */const[v,{openModal:D}]=_(),M=[{title:"\u6D88\u606F",dataIndex:"message"},{title:"\u65F6\u95F4",dataIndex:"time",width:"120px",customRender:({record:e})=>B(b,{value:e.time*1e3})}],C=x({components:{BasicTable:c,TableAction:p,MessageDetailModal:j},setup(){const[e]=f({columns:M,api:g("/app/queue/redis/failed/view"),actionColumn:{width:120,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function n(r){let s=[],t=JSON.parse(r.message);t.time=new Date(t.time*1e3).toLocaleString().replace(/\//g,"-"),t.data=JSON.stringify(t.data,null," ");let l={time:"\u65F6\u95F4",delay:"\u5EF6\u8FDF\u65F6\u95F4",attempts:"\u5C1D\u8BD5\u6B21\u6570",queue:"\u6240\u5C5E\u961F\u5217",data:"\u53C2\u6570",error:"\u9519\u8BEF\u4FE1\u606F"};for(let i in t)s.push({field:l[i]||i,value:t[i]});D(!0,s)}return{register:v,registerTable:e,handleView:n}}}),A={class:"p-4"};function E(e,n,r,s,t,l){const i=a("TableAction"),d=a("BasicTable"),u=a("MessageDetailModal");return T(),h("div",A,[o(d,{onRegister:e.registerTable},{action:w(({record:m})=>[o(i,{actions:[{label:"\u67E5\u770B",onClick:e.handleView.bind(null,m)}]},null,8,["actions"])]),_:1},8,["onRegister"]),o(u,{onRegister:e.register,minHeight:100,width:600},null,8,["onRegister"])])}var X=F(C,[["render",E]]);export{X as default};

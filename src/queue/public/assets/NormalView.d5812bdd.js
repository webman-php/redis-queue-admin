import{B as p}from"./TableImg.36a0aa1a.js";import{T as f}from"./useForm.ad554029.js";import{u as g}from"./useTable.15add907.js";import{T as b}from"./index.44ec0682.js";import{g as _}from"./common.763c9c7d.js";import{A as j,bN as x,a0 as l,B as F,D as T,w as u,a5 as w,z as h}from"./vendor.943fa63b.js";import{b as B}from"./index.7eabfedf.js";import v from"./MessageDetailModal.ccf3ed28.js";import{_ as D}from"./index.f7705ca9.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.f212eff5.js";import"./useContentViewHeight.7e83edbb.js";/* empty css               *//* empty css               *//* empty css               *//* empty css              */import"./sortable.esm.6bfbf233.js";/* empty css               *//* empty css               */const[M,{openModal:C}]=B(),N=[{title:"\u6D88\u606F",dataIndex:"message"},{title:"\u65F6\u95F4",dataIndex:"time",width:"120px",customRender:({record:t})=>h(b,{value:t.time*1e3})}],R=j({components:{BasicTable:p,TableAction:f,MessageDetailModal:v},setup(){var o,s;const m=(s=(o=x().params)==null?void 0:o.id)!=null?s:"",[d]=g({title:"\u6B63\u5E38\u961F\u5217",columns:N,api:_("/app/queue/redis/normal/view/"+m),actionColumn:{width:120,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function c(i){let a=[],e=JSON.parse(i.message);e.time=new Date(e.time*1e3).toLocaleString().replace(/\//g,"-"),e.data=JSON.stringify(e.data,null," ");let n={time:"\u65F6\u95F4",delay:"\u5EF6\u8FDF\u65F6\u95F4",attempts:"\u5C1D\u8BD5\u6B21\u6570",queue:"\u6240\u5C5E\u961F\u5217",data:"\u53C2\u6570"};for(let r in e)a.push({field:n[r]||r,value:e[r]});C(!0,a)}return{register:M,registerTable:d,handleView:c}}}),A={class:"p-4"};function V(t,m,d,c,o,s){const i=l("TableAction"),a=l("BasicTable"),e=l("MessageDetailModal");return F(),T("div",A,[u(a,{onRegister:t.registerTable},{action:w(({record:n})=>[u(i,{actions:[{label:"\u67E5\u770B",onClick:t.handleView.bind(null,n)}]},null,8,["actions"])]),_:1},8,["onRegister"]),u(e,{onRegister:t.register,minHeight:100,width:600},null,8,["onRegister"])])}var Z=D(R,[["render",V]]);export{Z as default};

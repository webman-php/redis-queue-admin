import{B as p}from"./TableImg.36a0aa1a.js";import{T as d}from"./useForm.ad554029.js";import{u as l}from"./useTable.15add907.js";import{_ as u,u as f}from"./index.f7705ca9.js";import{g as b}from"./common.763c9c7d.js";import{A as j,a0 as n,B as x,D as _,w as a,a5 as T}from"./vendor.943fa63b.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.f212eff5.js";import"./useContentViewHeight.7e83edbb.js";/* empty css               *//* empty css               *//* empty css               */import"./index.7eabfedf.js";/* empty css              */import"./sortable.esm.6bfbf233.js";/* empty css               *//* empty css               */const g=j({components:{BasicTable:p,TableAction:d},setup(){const e=f(),o=[{title:"\u961F\u5217",dataIndex:"queue_type"}],[t]=l({title:"\u6D88\u606F\u961F\u5217",columns:o,api:b("/app/queue/redis/view"),pagination:!1,canResize:!0,actionColumn:{width:120,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function s(i){e("/redis/"+i.type)}return{registerTable:t,handleView:s}}}),w={class:"p-4"};function B(e,o,t,s,i,h){const r=n("TableAction"),c=n("BasicTable");return x(),_("div",w,[a(c,{onRegister:e.registerTable},{action:T(({record:m})=>[a(r,{actions:[{label:"\u67E5\u770B",onClick:e.handleView.bind(null,m)}]},null,8,["actions"])]),_:1},8,["onRegister"])])}var W=u(g,[["render",B]]);export{W as default};
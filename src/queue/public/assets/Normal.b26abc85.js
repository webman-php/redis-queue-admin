import{B as m}from"./TableImg.95324dda.js";import{T as d}from"./useForm.3c5e3c4b.js";import{u as l}from"./useTable.ea9ec969.js";import{_ as p,u}from"./index.4236c607.js";import{g as _}from"./common.f0c9327e.js";import{A as b,a0 as s,B as f,D as j,w as i,a5 as x}from"./vendor.0b8b9a83.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.fd3295c9.js";import"./useContentViewHeight.7ff5c4dd.js";/* empty css               *//* empty css               *//* empty css               */import"./index.7411de63.js";/* empty css              */import"./sortable.esm.6bfbf233.js";/* empty css               *//* empty css               */const T=[{title:"\u961F\u5217",dataIndex:"queue"},{title:"\u6570\u91CF",dataIndex:"count"}],g=b({components:{BasicTable:m,TableAction:d},setup(){const e=u(),[o]=l({columns:T,api:_("/app/queue/redis/normal"),actionColumn:{width:120,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function t(n){e("/redis/normal/"+n.queue)}return{registerTable:o,handleView:t}}}),B={class:"p-4"};function h(e,o,t,n,v,w){const a=s("TableAction"),r=s("BasicTable");return f(),j("div",B,[i(r,{onRegister:e.registerTable},{action:x(({record:c})=>[i(a,{actions:[{label:"\u67E5\u770B",onClick:e.handleView.bind(null,c)}]},null,8,["actions"])]),_:1},8,["onRegister"])])}var J=p(g,[["render",h]]);export{J as default};

var g=(o,s,r)=>new Promise((u,n)=>{var i=e=>{try{d(r.next(e))}catch(a){n(a)}},t=e=>{try{d(r.throw(e))}catch(a){n(a)}},d=e=>e.done?u(e.value):Promise.resolve(e.value).then(i,t);d((r=r.apply(o,s)).next())});import{X as m,Y as w,V as b}from"./index.25bde1e8.js";import{r as R,aj as f,u as c,S as p,t as l}from"./vendor.0b8b9a83.js";function y(o){const s=R(null),r=R(!1),u=R(null);let n;function i(e,a){f(()=>{s.value=null,r.value=null}),!(c(r)&&m()&&e===c(s))&&(s.value=e,u.value=a,o&&e.setProps(w(o)),r.value=!0,n==null||n(),n=p(()=>o,()=>{o&&e.setProps(w(o))},{immediate:!0,deep:!0}))}function t(){const e=c(s);return e||b("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}return[i,{reload:e=>g(this,null,function*(){return yield t().reload(e)}),setProps:e=>{t().setProps(e)},redoHeight:()=>{t().redoHeight()},setLoading:e=>{t().setLoading(e)},getDataSource:()=>t().getDataSource(),getRawDataSource:()=>t().getRawDataSource(),getColumns:({ignoreIndex:e=!1}={})=>{const a=t().getColumns({ignoreIndex:e})||[];return l(a)},setColumns:e=>{t().setColumns(e)},setTableData:e=>t().setTableData(e),setPagination:e=>t().setPagination(e),deleteSelectRowByKey:e=>{t().deleteSelectRowByKey(e)},getSelectRowKeys:()=>l(t().getSelectRowKeys()),getSelectRows:()=>l(t().getSelectRows()),clearSelectedRowKeys:()=>{t().clearSelectedRowKeys()},setSelectedRowKeys:e=>{t().setSelectedRowKeys(e)},getPaginationRef:()=>t().getPaginationRef(),getSize:()=>l(t().getSize()),updateTableData:(e,a,S)=>t().updateTableData(e,a,S),deleteTableDataRecord:e=>t().deleteTableDataRecord(e),insertTableDataRecord:(e,a)=>t().insertTableDataRecord(e,a),updateTableDataRecord:(e,a)=>t().updateTableDataRecord(e,a),findTableDataRecord:e=>t().findTableDataRecord(e),getRowSelection:()=>l(t().getRowSelection()),getCacheColumns:()=>l(t().getCacheColumns()),getForm:()=>c(u),setShowPagination:e=>g(this,null,function*(){t().setShowPagination(e)}),getShowPagination:()=>l(t().getShowPagination()),expandAll:()=>{t().expandAll()},expandRows:e=>{t().expandRows(e)},collapseAll:()=>{t().collapseAll()},scrollTo:e=>{t().scrollTo(e)}}]}export{y as u};

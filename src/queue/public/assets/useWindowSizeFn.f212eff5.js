import{bM as o,af as a,T as d}from"./vendor.943fa63b.js";function c(s,i=150,n){let e=()=>{s()};e=d(e,i);const t=()=>{n&&n.immediate&&e(),window.addEventListener("resize",e)},r=()=>{window.removeEventListener("resize",e)};return o(()=>{t()}),a(()=>{r()}),[t,r]}export{c as u};

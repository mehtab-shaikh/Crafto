import{r as d,_ as i,a as x,b as L,j as u,d as f}from"./index-BdNT52md.js";import{g as P,a as C,s as j,c as v}from"./Box-ELrfV3J3.js";const M=d.createContext({});function R(s){return P("MuiList",s)}C("MuiList",["root","padding","dense","subheader"]);const U=["children","className","component","dense","disablePadding","subheader"],_=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return v({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},R,e)},y=j("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>i({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),E=d.forwardRef(function(e,t){const o=x({props:e,name:"MuiList"}),{children:a,className:r,component:l="ul",dense:n=!1,disablePadding:p=!1,subheader:g}=o,m=L(o,U),b=d.useMemo(()=>({dense:n}),[n]),c=i({},o,{component:l,dense:n,disablePadding:p}),h=_(c);return u.jsx(M.Provider,{value:b,children:u.jsxs(y,i({as:l,className:f(h.root,r),ref:t,ownerState:c},m,{children:[g,a]}))})});export{M as L,E as a};
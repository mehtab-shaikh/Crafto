import{H as y,l as $,c as h,_ as a,r as x,a as j,b as M,j as _,d as N}from"./index-BdNT52md.js";import{a as P,g as U,s as z,u as H,c as W}from"./Box-ELrfV3J3.js";import{T as E}from"./Typography-BfnYBWhW.js";import{f as I}from"./ButtonBase-j_30sl6c.js";function O(e){return U("MuiLink",e)}const q=P("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=e=>g[e]||e,G=({theme:e,ownerState:o})=>{const n=w(o.color),r=y(e,`palette.${n}`,!1)||o.color,s=y(e,`palette.${n}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:$(r,.4)},J=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],K=e=>{const{classes:o,component:n,focusVisible:r,underline:s}=e,t={root:["root",`underline${h(s)}`,n==="button"&&"button",r&&"focusVisible"]};return W(t,O,o)},Q=z(E,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${h(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:G({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.focusVisible}`]:{outline:"auto"}})),oo=x.forwardRef(function(o,n){const r=j({props:o,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:C,underline:k="always",variant:d="inherit",sx:l}=r,V=M(r,J),{isFocusVisibleRef:f,onBlur:F,onFocus:L,ref:R}=I(),[v,m]=x.useState(!1),D=H(n,R),T=i=>{F(i),f.current===!1&&m(!1),u&&u(i)},A=i=>{L(i),f.current===!0&&m(!0),p&&p(i)},b=a({},r,{color:t,component:c,focusVisible:v,underline:k,variant:d}),B=K(b);return _.jsx(Q,a({color:t,className:N(B.root,s),classes:C,component:c,onBlur:T,onFocus:A,ref:D,ownerState:b,variant:d,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},V))});export{oo as L};
import{r as c,c as t,_ as s,l as u,F as T,a as V,b as F,j as b,d as R}from"./index-BdNT52md.js";import{a as O,g as j,s as f,r as U,c as G}from"./Box-ELrfV3J3.js";import{B as D}from"./ButtonBase-j_30sl6c.js";function ao(...o){return o.reduce((a,i)=>i==null?a:function(...r){a.apply(this,r),i.apply(this,r)},()=>{})}function io(o,a){var i,n;return c.isValidElement(o)&&a.indexOf((i=o.type.muiName)!=null?i:(n=o.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function H(o){return j("MuiButton",o)}const v=O("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),A=c.createContext({}),q=c.createContext(void 0),J=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],K=o=>{const{color:a,disableElevation:i,fullWidth:n,size:r,variant:l,classes:e}=o,x={root:["root",l,`${l}${t(a)}`,`size${t(r)}`,`${l}Size${t(r)}`,`color${t(a)}`,i&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${t(r)}`],endIcon:["icon","endIcon",`iconSize${t(r)}`]},g=G(x,H,e);return s({},e,g)},h=o=>s({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Q=f(D,{shouldForwardProp:o=>U(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.root,a[i.variant],a[`${i.variant}${t(i.color)}`],a[`size${t(i.size)}`],a[`${i.variant}Size${t(i.size)}`],i.color==="inherit"&&a.colorInherit,i.disableElevation&&a.disableElevation,i.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var i,n;const r=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],l=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return s({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":s({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":s({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${v.focusVisible}`]:s({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${v.disabled}`]:s({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${u(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(i=(n=o.palette).getContrastText)==null?void 0:i.call(n,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:r,boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}}),X=f("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.startIcon,a[`iconSize${t(i.size)}`]]}})(({ownerState:o})=>s({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},h(o))),Y=f("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.endIcon,a[`iconSize${t(i.size)}`]]}})(({ownerState:o})=>s({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},h(o))),no=c.forwardRef(function(a,i){const n=c.useContext(A),r=c.useContext(q),l=T(n,a),e=V({props:l,name:"MuiButton"}),{children:x,color:g="primary",component:z="button",className:k,disabled:y=!1,disableElevation:m=!1,disableFocusRipple:C=!1,endIcon:$,focusVisibleClassName:E,fullWidth:N=!1,size:P="medium",startIcon:I,type:B,variant:W="text"}=e,M=F(e,J),p=s({},e,{color:g,component:z,disabled:y,disableElevation:m,disableFocusRipple:C,fullWidth:N,size:P,type:B,variant:W}),d=K(p),_=I&&b.jsx(X,{className:d.startIcon,ownerState:p,children:I}),L=$&&b.jsx(Y,{className:d.endIcon,ownerState:p,children:$}),S=r||"";return b.jsxs(Q,s({ownerState:p,className:R(n.className,d.root,k,S),component:z,disabled:y,focusRipple:!C,focusVisibleClassName:R(d.focusVisible,E),ref:i,type:B},M,{classes:d,children:[_,x,L]}))});export{no as B,ao as c,io as i};

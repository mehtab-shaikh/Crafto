import{b as $,_ as v,M as O,R as _,l as A,r as c,a as rt,j as M,d as st,G as lt}from"./index-BdNT52md.js";import{f as ut,m as dt,u as w,h as pt,g as ct,a as ft,s as vt,c as Et,d as q}from"./Box-ELrfV3J3.js";import{_ as ht,h as z,u as H,g as mt}from"./ButtonBase-j_30sl6c.js";import{u as xt}from"./useTheme-Bzk-2L6r.js";const gt=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Lt(o){var a;const{elementType:r,externalSlotProps:i,ownerState:e,skipResolvingSlotProps:t=!1}=o,n=$(o,gt),s=t?{}:ut(i,e),{props:l,internalRef:d}=dt(v({},n,{externalSlotProps:s})),p=w(d,s==null?void 0:s.ref,(a=o.additionalProps)==null?void 0:a.ref);return pt(r,v({},l,{ref:p}),e)}const W=o=>{let a;return o<1?a=5.11916*o**2:a=4.5*Math.log(o+1)+2,(a/100).toFixed(2)},X={disabled:!1};var yt=function(a){return a.scrollTop},N="unmounted",y="exited",T="entering",R="entered",I="exiting",E=function(o){ht(a,o);function a(i,e){var t;t=o.call(this,i,e)||this;var n=e,s=n&&!n.isMounting?i.enter:i.appear,l;return t.appearStatus=null,i.in?s?(l=y,t.appearStatus=T):l=R:i.unmountOnExit||i.mountOnEnter?l=N:l=y,t.state={status:l},t.nextCallback=null,t}a.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===N?{status:y}:null};var r=a.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==T&&n!==R&&(t=T):(n===T||n===R)&&(t=I)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e=this.props.timeout,t,n,s;return t=n=s=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,s=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:s}},r.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===T){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this);n&&yt(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===y&&this.setState({status:N})},r.performEnter=function(e){var t=this,n=this.props.enter,s=this.context?this.context.isMounting:e,l=this.props.nodeRef?[s]:[O.findDOMNode(this),s],d=l[0],p=l[1],h=this.getTimeouts(),L=s?h.appear:h.enter;if(!e&&!n||X.disabled){this.safeSetState({status:R},function(){t.props.onEntered(d)});return}this.props.onEnter(d,p),this.safeSetState({status:T},function(){t.props.onEntering(d,p),t.onTransitionEnd(L,function(){t.safeSetState({status:R},function(){t.props.onEntered(d,p)})})})},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:O.findDOMNode(this);if(!t||X.disabled){this.safeSetState({status:y},function(){e.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:I},function(){e.props.onExiting(s),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:y},function(){e.props.onExited(s)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,t.nextCallback=null,e(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this),s=e==null&&!this.props.addEndListener;if(!n||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],d=l[0],p=l[1];this.props.addEndListener(d,p)}e!=null&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===N)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var s=$(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return _.createElement(z.Provider,{value:null},typeof n=="function"?n(e,s):_.cloneElement(_.Children.only(n),s))},a}(_.Component);E.contextType=z;E.propTypes={};function P(){}E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:P,onEntering:P,onEntered:P,onExit:P,onExiting:P,onExited:P};E.UNMOUNTED=N;E.EXITED=y;E.ENTERING=T;E.ENTERED=R;E.EXITING=I;const Tt=o=>o.scrollTop;function V(o,a){var r,i;const{timeout:e,easing:t,style:n={}}=o;return{duration:(r=n.transitionDuration)!=null?r:typeof e=="number"?e:e[a.mode]||0,easing:(i=n.transitionTimingFunction)!=null?i:typeof t=="object"?t[a.mode]:t,delay:n.transitionDelay}}function bt(o){return ct("MuiPaper",o)}ft("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const St=["className","component","elevation","square","variant"],Ct=o=>{const{square:a,elevation:r,variant:i,classes:e}=o,t={root:["root",i,!a&&"rounded",i==="elevation"&&`elevation${r}`]};return Et(t,bt,e)},Pt=vt("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,a[r.variant],!r.square&&a.rounded,r.variant==="elevation"&&a[`elevation${r.elevation}`]]}})(({theme:o,ownerState:a})=>{var r;return v({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!a.square&&{borderRadius:o.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.divider}`},a.variant==="elevation"&&v({boxShadow:(o.vars||o).shadows[a.elevation]},!o.vars&&o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${A("#fff",W(a.elevation))}, ${A("#fff",W(a.elevation))})`},o.vars&&{backgroundImage:(r=o.vars.overlays)==null?void 0:r[a.elevation]}))}),Ut=c.forwardRef(function(a,r){const i=rt({props:a,name:"MuiPaper"}),{className:e,component:t="div",elevation:n=1,square:s=!1,variant:l="elevation"}=i,d=$(i,St),p=v({},i,{component:t,elevation:n,square:s,variant:l}),h=Ct(p);return M.jsx(Pt,v({as:t,ownerState:p,className:st(h.root,e),ref:r},d))});function Rt(o){return typeof o=="function"?o():o}const jt=c.forwardRef(function(a,r){const{children:i,container:e,disablePortal:t=!1}=a,[n,s]=c.useState(null),l=w(c.isValidElement(i)?i.ref:null,r);if(H(()=>{t||s(Rt(e)||document.body)},[e,t]),H(()=>{if(n&&!t)return q(r,n),()=>{q(r,null)}},[r,n,t]),t){if(c.isValidElement(i)){const d={ref:l};return c.cloneElement(i,d)}return M.jsx(c.Fragment,{children:i})}return M.jsx(c.Fragment,{children:n&&lt.createPortal(i,n)})}),Nt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function F(o){return`scale(${o}, ${o**2})`}const Dt={entering:{opacity:1,transform:F(1)},entered:{opacity:1,transform:"none"}},G=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),kt=c.forwardRef(function(a,r){const{addEndListener:i,appear:e=!0,children:t,easing:n,in:s,onEnter:l,onEntered:d,onEntering:p,onExit:h,onExited:L,onExiting:K,style:U,timeout:g="auto",TransitionComponent:B=E}=a,J=$(a,Nt),Q=mt(),j=c.useRef(),b=xt(),D=c.useRef(null),Y=w(D,t.ref,r),S=u=>m=>{if(u){const x=D.current;m===void 0?u(x):u(x,m)}},Z=S(p),tt=S((u,m)=>{Tt(u);const{duration:x,delay:k,easing:f}=V({style:U,timeout:g,easing:n},{mode:"enter"});let C;g==="auto"?(C=b.transitions.getAutoHeightDuration(u.clientHeight),j.current=C):C=x,u.style.transition=[b.transitions.create("opacity",{duration:C,delay:k}),b.transitions.create("transform",{duration:G?C:C*.666,delay:k,easing:f})].join(","),l&&l(u,m)}),et=S(d),nt=S(K),ot=S(u=>{const{duration:m,delay:x,easing:k}=V({style:U,timeout:g,easing:n},{mode:"exit"});let f;g==="auto"?(f=b.transitions.getAutoHeightDuration(u.clientHeight),j.current=f):f=m,u.style.transition=[b.transitions.create("opacity",{duration:f,delay:x}),b.transitions.create("transform",{duration:G?f:f*.666,delay:G?x:x||f*.333,easing:k})].join(","),u.style.opacity=0,u.style.transform=F(.75),h&&h(u)}),it=S(L),at=u=>{g==="auto"&&Q.start(j.current||0,u),i&&i(D.current,u)};return M.jsx(B,v({appear:e,in:s,nodeRef:D,onEnter:tt,onEntered:et,onEntering:Z,onExit:ot,onExited:it,onExiting:nt,addEndListener:at,timeout:g==="auto"?null:g},J,{children:(u,m)=>c.cloneElement(t,v({style:v({opacity:0,transform:F(.75),visibility:u==="exited"&&!s?"hidden":void 0},Dt[u],U,t.props.style),ref:Y},m))}))});kt.muiSupportAuto=!0;export{kt as G,Ut as P,E as T,jt as a,V as g,Tt as r,Lt as u};

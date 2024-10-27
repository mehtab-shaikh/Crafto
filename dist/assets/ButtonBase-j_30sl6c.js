import{r as s,N as Xe,R as A,_ as W,b as se,d as C,j as k,m as ie,a as Ce}from"./index-BdNT52md.js";import{a as xe,s as ue,g as Ye,u as he,c as He}from"./Box-ELrfV3J3.js";const Ge=typeof window<"u"?s.useLayoutEffect:s.useEffect;function Ft(e,t=166){let n;function u(...r){const o=()=>{e.apply(this,r)};clearTimeout(n),n=setTimeout(o,t)}return u.clear=()=>{clearTimeout(n)},u}function qe(e){return e&&e.ownerDocument||document}function kt(e){return qe(e).defaultView||window}let me=0;function Ze(e){const[t,n]=s.useState(e),u=e||t;return s.useEffect(()=>{t==null&&(me+=1,n(`mui-${me}`))},[t]),u}const be=Xe.useId;function Nt(e){if(be!==void 0){const t=be();return e??t}return Ze(e)}function jt({controlled:e,default:t,name:n,state:u="value"}){const{current:r}=s.useRef(e!==void 0),[o,i]=s.useState(t),c=r?e:o,l=s.useCallback(p=>{r||i(p)},[]);return[c,l]}function H(e){const t=s.useRef(e);return Ge(()=>{t.current=e}),s.useRef((...n)=>(0,t.current)(...n)).current}const ge={};function Je(e,t){const n=s.useRef(ge);return n.current===ge&&(n.current=e(t)),n}const Qe=[];function et(e){s.useEffect(e,Qe)}class G{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new G}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function tt(){const e=Je(G.create).current;return et(e.disposeEffect),e}let q=!0,ne=!1;const nt=new G,rt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ot(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&rt[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function st(e){e.metaKey||e.altKey||e.ctrlKey||(q=!0)}function te(){q=!1}function it(){this.visibilityState==="hidden"&&ne&&(q=!0)}function ut(e){e.addEventListener("keydown",st,!0),e.addEventListener("mousedown",te,!0),e.addEventListener("pointerdown",te,!0),e.addEventListener("touchstart",te,!0),e.addEventListener("visibilitychange",it,!0)}function at(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return q||ot(t)}function lt(){const e=s.useCallback(r=>{r!=null&&ut(r.ownerDocument)},[]),t=s.useRef(!1);function n(){return t.current?(ne=!0,nt.start(100,()=>{ne=!1}),t.current=!1,!0):!1}function u(r){return at(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:n,ref:e}}function re(e,t){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,u){return n.__proto__=u,n},re(e,t)}function ct(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,re(e,t)}const Re=A.createContext(null);function pt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){var n=function(o){return t&&s.isValidElement(o)?t(o):o},u=Object.create(null);return e&&s.Children.map(e,function(r){return r}).forEach(function(r){u[r.key]=n(r)}),u}function ft(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var u=Object.create(null),r=[];for(var o in e)o in t?r.length&&(u[o]=r,r=[]):r.push(o);var i,c={};for(var l in t){if(u[l])for(i=0;i<u[l].length;i++){var p=u[l][i];c[u[l][i]]=n(p)}c[l]=n(l)}for(i=0;i<r.length;i++)c[r[i]]=n(r[i]);return c}function F(e,t,n){return n[t]!=null?n[t]:e.props[t]}function dt(e,t){return ae(e.children,function(n){return s.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:F(n,"appear",e),enter:F(n,"enter",e),exit:F(n,"exit",e)})})}function ht(e,t,n){var u=ae(e.children),r=ft(t,u);return Object.keys(r).forEach(function(o){var i=r[o];if(s.isValidElement(i)){var c=o in t,l=o in u,p=t[o],d=s.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[o]=s.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:F(i,"exit",e),enter:F(i,"enter",e)}):!l&&c&&!d?r[o]=s.cloneElement(i,{in:!1}):l&&c&&s.isValidElement(p)&&(r[o]=s.cloneElement(i,{onExited:n.bind(null,i),in:p.props.in,exit:F(i,"exit",e),enter:F(i,"enter",e)}))}}),r}var mt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},bt={component:"div",childFactory:function(t){return t}},le=function(e){ct(t,e);function t(u,r){var o;o=e.call(this,u,r)||this;var i=o.handleExited.bind(pt(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,o){var i=o.children,c=o.handleExited,l=o.firstRender;return{children:l?dt(r,c):ht(r,i,c),firstRender:!1}},n.handleExited=function(r,o){var i=ae(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(c){var l=W({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,o=r.component,i=r.childFactory,c=se(r,["component","childFactory"]),l=this.state.contextValue,p=mt(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,o===null?A.createElement(Re.Provider,{value:l},p):A.createElement(Re.Provider,{value:l},A.createElement(o,c,p))},t}(A.Component);le.propTypes={};le.defaultProps=bt;function gt(e){const{className:t,classes:n,pulsate:u=!1,rippleX:r,rippleY:o,rippleSize:i,in:c,onExited:l,timeout:p}=e,[d,g]=s.useState(!1),b=C(t,n.ripple,n.rippleVisible,u&&n.ripplePulsate),x={width:i,height:i,top:-(i/2)+o,left:-(i/2)+r},h=C(n.child,d&&n.childLeaving,u&&n.childPulsate);return!c&&!d&&g(!0),s.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),k.jsx("span",{className:b,style:x,children:k.jsx("span",{className:h})})}const m=xe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Rt=["center","classes","className"];let Z=e=>e,ye,Ee,Te,Me;const oe=550,yt=80,Et=ie(ye||(ye=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Tt=ie(Ee||(Ee=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Mt=ie(Te||(Te=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Ct=ue("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),xt=ue(gt,{name:"MuiTouchRipple",slot:"Ripple"})(Me||(Me=Z`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,Et,oe,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,Tt,oe,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,Mt,({theme:e})=>e.transitions.easing.easeInOut),vt=s.forwardRef(function(t,n){const u=Ce({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:i}=u,c=se(u,Rt),[l,p]=s.useState([]),d=s.useRef(0),g=s.useRef(null);s.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=s.useRef(!1),x=tt(),h=s.useRef(null),R=s.useRef(null),$=s.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:L,rippleSize:U,cb:O}=f;p(T=>[...T,k.jsx(xt,{classes:{ripple:C(o.ripple,m.ripple),rippleVisible:C(o.rippleVisible,m.rippleVisible),ripplePulsate:C(o.ripplePulsate,m.ripplePulsate),child:C(o.child,m.child),childLeaving:C(o.childLeaving,m.childLeaving),childPulsate:C(o.childPulsate,m.childPulsate)},timeout:oe,pulsate:y,rippleX:E,rippleY:L,rippleSize:U},d.current)]),d.current+=1,g.current=O},[o]),N=s.useCallback((f={},y={},E=()=>{})=>{const{pulsate:L=!1,center:U=r||y.pulsate,fakeElement:O=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=O?null:R.current,I=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,P,D;if(U||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(I.width/2),P=Math.round(I.height/2);else{const{clientX:B,clientY:w}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(B-I.left),P=Math.round(w-I.top)}if(U)D=Math.sqrt((2*I.width**2+I.height**2)/3),D%2===0&&(D+=1);else{const B=Math.max(Math.abs((T?T.clientWidth:0)-v),v)*2+2,w=Math.max(Math.abs((T?T.clientHeight:0)-P),P)*2+2;D=Math.sqrt(B**2+w**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{$({pulsate:L,rippleX:v,rippleY:P,rippleSize:D,cb:E})},x.start(yt,()=>{h.current&&(h.current(),h.current=null)})):$({pulsate:L,rippleX:v,rippleY:P,rippleSize:D,cb:E})},[r,$,x]),_=s.useCallback(()=>{N({},{pulsate:!0})},[N]),j=s.useCallback((f,y)=>{if(x.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,x.start(0,()=>{j(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[x]);return s.useImperativeHandle(n,()=>({pulsate:_,start:N,stop:j}),[_,N,j]),k.jsx(Ct,W({className:C(m.root,o.root,i),ref:R},c,{children:k.jsx(le,{component:null,exit:!0,children:l})}))});function wt(e){return Ye("MuiButtonBase",e)}const Vt=xe("MuiButtonBase",["root","disabled","focusVisible"]),It=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Pt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:u,classes:r}=e,i=He({root:["root",t&&"disabled",n&&"focusVisible"]},wt,r);return n&&u&&(i.root+=` ${u}`),i},Dt=ue("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Vt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ut=s.forwardRef(function(t,n){const u=Ce({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:i,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:x="a",onBlur:h,onClick:R,onContextMenu:$,onDragLeave:N,onFocus:_,onFocusVisible:j,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:L,onMouseUp:U,onTouchEnd:O,onTouchMove:T,onTouchStart:I,tabIndex:v=0,TouchRippleProps:P,touchRippleRef:D,type:B}=u,w=se(u,It),K=s.useRef(null),M=s.useRef(null),ve=he(M,D),{isFocusVisibleRef:ce,onFocus:we,onBlur:Ve,ref:Ie}=lt(),[S,X]=s.useState(!1);p&&S&&X(!1),s.useImperativeHandle(r,()=>({focusVisible:()=>{X(!0),K.current.focus()}}),[]);const[J,Pe]=s.useState(!1);s.useEffect(()=>{Pe(!0)},[]);const De=J&&!d&&!p;s.useEffect(()=>{S&&b&&!d&&J&&M.current.pulsate()},[d,b,S,J]);function V(a,fe,We=g){return H(de=>(fe&&fe(de),!We&&M.current&&M.current[a](de),!0))}const Le=V("start",E),Be=V("stop",$),Se=V("stop",N),Fe=V("stop",U),ke=V("stop",a=>{S&&a.preventDefault(),L&&L(a)}),Ne=V("start",I),je=V("stop",O),Ue=V("stop",T),$e=V("stop",a=>{Ve(a),ce.current===!1&&X(!1),h&&h(a)},!1),_e=H(a=>{K.current||(K.current=a.currentTarget),we(a),ce.current===!0&&(X(!0),j&&j(a)),_&&_(a)}),Q=()=>{const a=K.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},ee=s.useRef(!1),Oe=H(a=>{b&&!ee.current&&S&&M.current&&a.key===" "&&(ee.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),Ke=H(a=>{b&&a.key===" "&&M.current&&S&&!a.defaultPrevented&&(ee.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&R(a)});let Y=l;Y==="button"&&(w.href||w.to)&&(Y=x);const z={};Y==="button"?(z.type=B===void 0?"button":B,z.disabled=p):(!w.href&&!w.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const ze=he(n,Ie,K),pe=W({},u,{centerRipple:o,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:S}),Ae=Pt(pe);return k.jsxs(Dt,W({as:Y,className:C(Ae.root,c),ownerState:pe,onBlur:$e,onClick:R,onContextMenu:Be,onFocus:_e,onKeyDown:Oe,onKeyUp:Ke,onMouseDown:Le,onMouseLeave:ke,onMouseUp:Fe,onDragLeave:Se,onTouchEnd:je,onTouchMove:Ue,onTouchStart:Ne,ref:ze,tabIndex:p?-1:v,type:B},z,w,{children:[i,De?k.jsx(vt,W({ref:ve,center:o},P)):null]}))});export{Ut as B,G as T,ct as _,H as a,qe as b,Nt as c,Ft as d,jt as e,lt as f,tt as g,Re as h,kt as o,Ge as u};

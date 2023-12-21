(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7052)}])},7052:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Component}});var r=t(6811),o=t(7294),i=t(8595),a=t(4641),l=t(9564),c=t(5034),s=t(3838),d=t(9222);t(5202);var u=t(1664),h=t.n(u),m=t(9008),f=t.n(m);function Component(){return(0,r.BX)(o.Fragment,{children:[(0,r.tZ)(i.g,{}),(0,r.BX)(a.U,{sx:{width:"50%",height:"25%",marginY:"15%",marginX:"25%",paddingLeft:"1em",borderColor:"#D7D7D7",backgroundColor:"#3C3C41"},children:[(0,r.BX)(a.U,{children:[(0,r.tZ)(l.x,{as:"span",sx:{fontFamily:"Fira Code",fontWeight:"200",fontSize:"1em",color:"#AFAFAF"},children:"1"}),(0,r.tZ)(c.L,{}),(0,r.tZ)(l.x,{as:"span",sx:{fontFamily:"Fira Code",fontWeight:"200",fontSize:"1em",color:"#DCDCAA"},children:"open"}),(0,r.tZ)(l.x,{as:"span",sx:{fontFamily:"Fira Code",fontWeight:"200",fontSize:"1em",color:"#F0D70A"},children:"("}),(0,r.tZ)(l.x,{as:"span",sx:{fontFamily:"Fira Code",fontWeight:"200",fontSize:"1em",color:"#96DCFA"},children:"max.py"}),(0,r.tZ)(l.x,{as:"span",sx:{fontFamily:"Fira Code",fontWeight:"200",fontSize:"1em",color:"#F0D70A"},children:")"})]}),(0,r.tZ)(c.L,{}),(0,r.tZ)(s.r,{as:h(),href:"/main",sx:{textDecoration:"none",width:"20em",_hover:{}},children:(0,r.tZ)(d.z,{sx:{backgroundColor:"#1E1E1E",_hover:{backgroundColor:"#2D2D2D"},borderRadius:"0px",borderColor:"#AFAFAF",borderWidth:"0.05em",width:"100%",height:"100%",padding:"0.5em",color:"#D7D7D7",whiteSpace:"normal",textAlign:"start"},children:(0,r.tZ)(l.x,{sx:{fontFamily:"Fira Code",fontWeight:"200",fontSize:"1em",color:"#D7D7D7"},children:"Ejecutar archivo de Python"})})})]}),(0,r.BX)(f(),{children:[(0,r.tZ)("title",{children:"Ejecutar"}),(0,r.tZ)("meta",{content:"A Reflex app.",name:"description"}),(0,r.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},8595:function(n,e,t){"use strict";t.d(e,{g:function(){return Fragment_fd0e7cb8f9fb4669a6805377d925fba0}});var r=t(6811),o=t(7294),i=t(687),a=t(6608),l=t(2752),c=t(1963),s=t(3204),d=t(4504),u=t(3793),h=t(9564);function Fragment_fd0e7cb8f9fb4669a6805377d925fba0(){let[n,e]=(0,o.useContext)(i.DR);return(0,r.tZ)(o.Fragment,{children:(0,a.oA)(null!==e)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(l.u_,{isOpen:null!==e,children:(0,r.tZ)(c.Z,{children:(0,r.BX)(s.h,{children:[(0,r.tZ)(d.x,{children:"Connection Error"}),(0,r.tZ)(u.f,{children:(0,r.BX)(h.x,{children:["Cannot connect to server: ",null!==e?e.message:"",". Check if server is reachable at ",(0,a.e9)().href]})})]})})})}):(0,r.tZ)(o.Fragment,{})})}t(5202)},9222:function(n,e,t){"use strict";t.d(e,{z:function(){return f}});var r=t(7294);function useButtonType(n){let[e,t]=(0,r.useState)(!n),o=(0,r.useCallback)(n=>{n&&t("BUTTON"===n.tagName)},[]);return{ref:o,type:e?"button":void 0}}var[o,i]=(0,t(5227).k)({strict:!1,name:"ButtonGroupContext"}),a=t(2504),l=t(5432),c=t(5893);function ButtonIcon(n){let{children:e,className:t,...o}=n,i=(0,r.isValidElement)(e)?(0,r.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,s=(0,l.cx)("chakra-button__icon",t);return(0,c.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:s,children:i})}ButtonIcon.displayName="ButtonIcon";var s=t(295);function ButtonSpinner(n){let{label:e,placement:t,spacing:o="0.5rem",children:i=(0,c.jsx)(s.$,{color:"currentColor",width:"1em",height:"1em"}),className:d,__css:u,...h}=n,m=(0,l.cx)("chakra-button__spinner",d),f="start"===t?"marginEnd":"marginStart",p=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[f]:e?o:0,fontSize:"1em",lineHeight:"normal",...u}),[u,e,f,o]);return(0,c.jsx)(a.m.div,{className:m,...h,__css:p,children:i})}ButtonSpinner.displayName="ButtonSpinner";var d=t(1103),u=t(5059),h=t(1628),m=t(3179),f=(0,u.G)((n,e)=>{let t=i(),o=(0,h.mq)("Button",{...t,...n}),{isDisabled:s=null==t?void 0:t.isDisabled,isLoading:u,isActive:f,children:p,leftIcon:x,rightIcon:g,loadingText:C,iconSpacing:b="0.5rem",type:_,spinner:F,spinnerPlacement:B="start",className:y,as:Z,...v}=(0,m.Lr)(n),D=(0,r.useMemo)(()=>{let n={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!t&&{_focus:n}}},[o,t]),{ref:S,type:k}=useButtonType(Z),j={rightIcon:g,leftIcon:x,iconSpacing:b,children:p};return(0,c.jsxs)(a.m.button,{ref:(0,d.qq)(e,S),as:Z,type:null!=_?_:k,"data-active":(0,l.PB)(f),"data-loading":(0,l.PB)(u),__css:D,className:(0,l.cx)("chakra-button",y),...v,disabled:s||u,children:[u&&"start"===B&&(0,c.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:C,placement:"start",spacing:b,children:F}),u?C||(0,c.jsx)(a.m.span,{opacity:0,children:(0,c.jsx)(ButtonContent,{...j})}):(0,c.jsx)(ButtonContent,{...j}),u&&"end"===B&&(0,c.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:C,placement:"end",spacing:b,children:F})]})});function ButtonContent(n){let{leftIcon:e,rightIcon:t,children:r,iconSpacing:o}=n;return(0,c.jsxs)(c.Fragment,{children:[e&&(0,c.jsx)(ButtonIcon,{marginEnd:o,children:e}),r,t&&(0,c.jsx)(ButtonIcon,{marginStart:o,children:t})]})}f.displayName="Button"}},function(n){n.O(0,[395,413,774,888,179],function(){return n(n.s=5557)}),_N_E=n.O()}]);
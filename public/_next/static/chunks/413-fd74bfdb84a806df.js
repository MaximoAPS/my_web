(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[413],{7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return f}});let o="refresh",l="navigate",i="restore",a="server-patch",u="prefetch",c="fast-refresh",f="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(8754),o=n._(r(7294)),l=r(4450),i=r(2227),a=r(4364),u=r(109),c=r(3607),f=r(1823),s=r(9031),d=r(920),p=r(30),m=r(7192),v=r(7498),y=new Set;function prefetch(e,t,r,n,o,l){if(!l&&!(0,i.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(y.has(l))return;y.add(l)}let a=l?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,n,l,a,u,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(isModifiedEvent(e)||!f&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:c,scroll:e}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};f?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:a,children:y,prefetch:g=null,passHref:h,replace:b,shallow:_,scroll:k,locale:O,onClick:x,onMouseEnter:E,onTouchStart:S,legacyBehavior:C=!1,...j}=e;r=y,C&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let M=o.default.useContext(f.RouterContext),T=o.default.useContext(s.AppRouterContext),P=null!=M?M:T,R=!M,I=!1!==g,L=null===g?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:A,as:N}=o.default.useMemo(()=>{if(!M){let e=formatStringOrUrl(i);return{href:e,as:a?formatStringOrUrl(a):e}}let[e,t]=(0,l.resolveHref)(M,i,!0);return{href:e,as:a?(0,l.resolveHref)(M,a):t||e}},[M,i,a]),w=o.default.useRef(A),U=o.default.useRef(N);C&&(n=o.default.Children.only(r));let D=C?n&&"object"==typeof n&&n.ref:t,[K,W,B]=(0,d.useIntersection)({rootMargin:"200px"}),F=o.default.useCallback(e=>{(U.current!==N||w.current!==A)&&(B(),U.current=N,w.current=A),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[N,D,A,B,K]);o.default.useEffect(()=>{P&&W&&I&&prefetch(P,A,N,{locale:O},{kind:L},R)},[N,A,W,O,I,null==M?void 0:M.locale,P,R,L]);let H={ref:F,onClick(e){C||"function"!=typeof x||x(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),P&&!e.defaultPrevented&&linkClicked(e,P,A,N,b,_,k,O,R,I)},onMouseEnter(e){C||"function"!=typeof E||E(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),P&&(I||!R)&&prefetch(P,A,N,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)},onTouchStart(e){C||"function"!=typeof S||S(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),P&&(I||!R)&&prefetch(P,A,N,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)}};if((0,u.isAbsoluteUrl)(N))H.href=N;else if(!C||h||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(N,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);H.href=t||(0,m.addBasePath)((0,c.addLocale)(N,e,null==M?void 0:M.defaultLocale))}return C?o.default.cloneElement(n,H):o.default.createElement("a",{...j,...H},r)}),h=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),o=r(3436),l="function"==typeof IntersectionObserver,i=new Map,a=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),i.set(r,t),t}function observe(e,t,r){let{id:n,observer:o,elements:l}=createObserver(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:i}=e,a=i||!l,[u,c]=(0,n.useState)(!1),f=(0,n.useRef)(null),s=(0,n.useCallback)(e=>{f.current=e},[]);(0,n.useEffect)(()=>{if(l){if(a||u)return;let e=f.current;if(e&&e.tagName){let n=observe(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,r,t,u,f.current]);let d=(0,n.useCallback)(()=>{c(!1)},[]);return[s,u,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(5170)},5034:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var n=(0,r(2504).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});n.displayName="Spacer"},4641:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});var n=r(7073),o=r(5059),l=r(5893),i=(0,o.G)((e,t)=>(0,l.jsx)(n.K,{align:"center",...e,direction:"row",ref:t}));i.displayName="HStack"},7073:function(e,t,r){"use strict";r.d(t,{K:function(){return c}});var n=r(2504),o=r(5893),StackItem=e=>(0,o.jsx)(n.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var l=r(5432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,l.Kn)(e)?Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var i="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[i]:mapResponsive(r,e=>n[e])}}function getDividerStyles(e){let{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(r,e=>n[e])}}var a=r(5059),u=r(7294);function getValidChildren(e){return u.Children.toArray(e).filter(e=>(0,u.isValidElement)(e))}var c=(0,a.G)((e,t)=>{let{isInline:r,direction:a,align:c,justify:f,spacing:s="0.5rem",wrap:d,children:p,divider:m,className:v,shouldWrapChildren:y,...g}=e,h=r?"row":null!=a?a:"column",b=(0,u.useMemo)(()=>getStackStyles({direction:h,spacing:s}),[h,s]),_=(0,u.useMemo)(()=>getDividerStyles({spacing:s,direction:h}),[s,h]),k=!!m,O=!y&&!k,x=(0,u.useMemo)(()=>{let e=getValidChildren(p);return O?e:e.map((t,r)=>{let n=void 0!==t.key?t.key:r,l=r+1===e.length,i=(0,o.jsx)(StackItem,{children:t},n),a=y?i:t;if(!k)return a;let c=(0,u.cloneElement)(m,{__css:_});return(0,o.jsxs)(u.Fragment,{children:[a,l?null:c]},n)})},[m,_,k,O,y,p]),E=(0,l.cx)("chakra-stack",v);return(0,o.jsx)(n.m.div,{ref:t,display:"flex",alignItems:c,justifyContent:f,flexDirection:b.flexDirection,flexWrap:d,className:E,__css:k?{}:{[i]:b[i]},...g,children:x})});c.displayName="Stack"},3838:function(e,t,r){"use strict";r.d(t,{r:function(){return c}});var n=r(5059),o=r(1628),l=r(3179),i=r(2504),a=r(5432),u=r(5893),c=(0,n.G)(function(e,t){let r=(0,o.mq)("Link",e),{className:n,isExternal:c,...f}=(0,l.Lr)(e);return(0,u.jsx)(i.m.a,{target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:t,className:(0,a.cx)("chakra-link",n),...f,__css:r})});c.displayName="Link"}}]);
function dk(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(n,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function MI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dm={exports:{}},uu={},fm={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LE;function fk(){if(LE)return be;LE=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function T(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function k(F,G,pe){this.props=F,this.context=G,this.refs=M,this.updater=pe||R}k.prototype.isReactComponent={},k.prototype.setState=function(F,G){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,G,"setState")},k.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function K(){}K.prototype=k.prototype;function te(F,G,pe){this.props=F,this.context=G,this.refs=M,this.updater=pe||R}var Z=te.prototype=new K;Z.constructor=te,N(Z,k.prototype),Z.isPureReactComponent=!0;var oe=Array.isArray,Ee=Object.prototype.hasOwnProperty,we={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function S(F,G,pe){var ke,xe={},Ue=null,We=null;if(G!=null)for(ke in G.ref!==void 0&&(We=G.ref),G.key!==void 0&&(Ue=""+G.key),G)Ee.call(G,ke)&&!O.hasOwnProperty(ke)&&(xe[ke]=G[ke]);var He=arguments.length-2;if(He===1)xe.children=pe;else if(1<He){for(var Xe=Array(He),Dt=0;Dt<He;Dt++)Xe[Dt]=arguments[Dt+2];xe.children=Xe}if(F&&F.defaultProps)for(ke in He=F.defaultProps,He)xe[ke]===void 0&&(xe[ke]=He[ke]);return{$$typeof:n,type:F,key:Ue,ref:We,props:xe,_owner:we.current}}function P(F,G){return{$$typeof:n,type:F.type,key:G,ref:F.ref,props:F.props,_owner:F._owner}}function D(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function V(F){var G={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(pe){return G[pe]})}var U=/\/+/g;function A(F,G){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):G.toString(36)}function pt(F,G,pe,ke,xe){var Ue=typeof F;(Ue==="undefined"||Ue==="boolean")&&(F=null);var We=!1;if(F===null)We=!0;else switch(Ue){case"string":case"number":We=!0;break;case"object":switch(F.$$typeof){case n:case e:We=!0}}if(We)return We=F,xe=xe(We),F=ke===""?"."+A(We,0):ke,oe(xe)?(pe="",F!=null&&(pe=F.replace(U,"$&/")+"/"),pt(xe,G,pe,"",function(Dt){return Dt})):xe!=null&&(D(xe)&&(xe=P(xe,pe+(!xe.key||We&&We.key===xe.key?"":(""+xe.key).replace(U,"$&/")+"/")+F)),G.push(xe)),1;if(We=0,ke=ke===""?".":ke+":",oe(F))for(var He=0;He<F.length;He++){Ue=F[He];var Xe=ke+A(Ue,He);We+=pt(Ue,G,pe,Xe,xe)}else if(Xe=T(F),typeof Xe=="function")for(F=Xe.call(F),He=0;!(Ue=F.next()).done;)Ue=Ue.value,Xe=ke+A(Ue,He++),We+=pt(Ue,G,pe,Xe,xe);else if(Ue==="object")throw G=String(F),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return We}function Yt(F,G,pe){if(F==null)return F;var ke=[],xe=0;return pt(F,ke,"","",function(Ue){return G.call(pe,Ue,xe++)}),ke}function Jt(F){if(F._status===-1){var G=F._result;G=G(),G.then(function(pe){(F._status===0||F._status===-1)&&(F._status=1,F._result=pe)},function(pe){(F._status===0||F._status===-1)&&(F._status=2,F._result=pe)}),F._status===-1&&(F._status=0,F._result=G)}if(F._status===1)return F._result.default;throw F._result}var Qe={current:null},se={transition:null},ge={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:se,ReactCurrentOwner:we};function le(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:Yt,forEach:function(F,G,pe){Yt(F,function(){G.apply(this,arguments)},pe)},count:function(F){var G=0;return Yt(F,function(){G++}),G},toArray:function(F){return Yt(F,function(G){return G})||[]},only:function(F){if(!D(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},be.Component=k,be.Fragment=t,be.Profiler=i,be.PureComponent=te,be.StrictMode=r,be.Suspense=f,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,be.act=le,be.cloneElement=function(F,G,pe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ke=N({},F.props),xe=F.key,Ue=F.ref,We=F._owner;if(G!=null){if(G.ref!==void 0&&(Ue=G.ref,We=we.current),G.key!==void 0&&(xe=""+G.key),F.type&&F.type.defaultProps)var He=F.type.defaultProps;for(Xe in G)Ee.call(G,Xe)&&!O.hasOwnProperty(Xe)&&(ke[Xe]=G[Xe]===void 0&&He!==void 0?He[Xe]:G[Xe])}var Xe=arguments.length-2;if(Xe===1)ke.children=pe;else if(1<Xe){He=Array(Xe);for(var Dt=0;Dt<Xe;Dt++)He[Dt]=arguments[Dt+2];ke.children=He}return{$$typeof:n,type:F.type,key:xe,ref:Ue,props:ke,_owner:We}},be.createContext=function(F){return F={$$typeof:l,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},be.createElement=S,be.createFactory=function(F){var G=S.bind(null,F);return G.type=F,G},be.createRef=function(){return{current:null}},be.forwardRef=function(F){return{$$typeof:h,render:F}},be.isValidElement=D,be.lazy=function(F){return{$$typeof:y,_payload:{_status:-1,_result:F},_init:Jt}},be.memo=function(F,G){return{$$typeof:p,type:F,compare:G===void 0?null:G}},be.startTransition=function(F){var G=se.transition;se.transition={};try{F()}finally{se.transition=G}},be.unstable_act=le,be.useCallback=function(F,G){return Qe.current.useCallback(F,G)},be.useContext=function(F){return Qe.current.useContext(F)},be.useDebugValue=function(){},be.useDeferredValue=function(F){return Qe.current.useDeferredValue(F)},be.useEffect=function(F,G){return Qe.current.useEffect(F,G)},be.useId=function(){return Qe.current.useId()},be.useImperativeHandle=function(F,G,pe){return Qe.current.useImperativeHandle(F,G,pe)},be.useInsertionEffect=function(F,G){return Qe.current.useInsertionEffect(F,G)},be.useLayoutEffect=function(F,G){return Qe.current.useLayoutEffect(F,G)},be.useMemo=function(F,G){return Qe.current.useMemo(F,G)},be.useReducer=function(F,G,pe){return Qe.current.useReducer(F,G,pe)},be.useRef=function(F){return Qe.current.useRef(F)},be.useState=function(F){return Qe.current.useState(F)},be.useSyncExternalStore=function(F,G,pe){return Qe.current.useSyncExternalStore(F,G,pe)},be.useTransition=function(){return Qe.current.useTransition()},be.version="18.3.1",be}var ME;function Ug(){return ME||(ME=1,fm.exports=fk()),fm.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE;function pk(){if(VE)return uu;VE=1;var n=Ug(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(h,f,p){var y,v={},T=null,R=null;p!==void 0&&(T=""+p),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(R=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(v[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)v[y]===void 0&&(v[y]=f[y]);return{$$typeof:e,type:h,key:T,ref:R,props:v,_owner:i.current}}return uu.Fragment=t,uu.jsx=l,uu.jsxs=l,uu}var FE;function mk(){return FE||(FE=1,dm.exports=pk()),dm.exports}var b=mk(),re=Ug();const VI=MI(re),gk=dk({__proto__:null,default:VI},[re]);var Mh={},pm={exports:{}},Tn={},mm={exports:{}},gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE;function _k(){return UE||(UE=1,function(n){function e(se,ge){var le=se.length;se.push(ge);e:for(;0<le;){var F=le-1>>>1,G=se[F];if(0<i(G,ge))se[F]=ge,se[le]=G,le=F;else break e}}function t(se){return se.length===0?null:se[0]}function r(se){if(se.length===0)return null;var ge=se[0],le=se.pop();if(le!==ge){se[0]=le;e:for(var F=0,G=se.length,pe=G>>>1;F<pe;){var ke=2*(F+1)-1,xe=se[ke],Ue=ke+1,We=se[Ue];if(0>i(xe,le))Ue<G&&0>i(We,xe)?(se[F]=We,se[Ue]=le,F=Ue):(se[F]=xe,se[ke]=le,F=ke);else if(Ue<G&&0>i(We,le))se[F]=We,se[Ue]=le,F=Ue;else break e}}return ge}function i(se,ge){var le=se.sortIndex-ge.sortIndex;return le!==0?le:se.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,h=l.now();n.unstable_now=function(){return l.now()-h}}var f=[],p=[],y=1,v=null,T=3,R=!1,N=!1,M=!1,k=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(se){for(var ge=t(p);ge!==null;){if(ge.callback===null)r(p);else if(ge.startTime<=se)r(p),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(p)}}function oe(se){if(M=!1,Z(se),!N)if(t(f)!==null)N=!0,Jt(Ee);else{var ge=t(p);ge!==null&&Qe(oe,ge.startTime-se)}}function Ee(se,ge){N=!1,M&&(M=!1,K(S),S=-1),R=!0;var le=T;try{for(Z(ge),v=t(f);v!==null&&(!(v.expirationTime>ge)||se&&!V());){var F=v.callback;if(typeof F=="function"){v.callback=null,T=v.priorityLevel;var G=F(v.expirationTime<=ge);ge=n.unstable_now(),typeof G=="function"?v.callback=G:v===t(f)&&r(f),Z(ge)}else r(f);v=t(f)}if(v!==null)var pe=!0;else{var ke=t(p);ke!==null&&Qe(oe,ke.startTime-ge),pe=!1}return pe}finally{v=null,T=le,R=!1}}var we=!1,O=null,S=-1,P=5,D=-1;function V(){return!(n.unstable_now()-D<P)}function U(){if(O!==null){var se=n.unstable_now();D=se;var ge=!0;try{ge=O(!0,se)}finally{ge?A():(we=!1,O=null)}}else we=!1}var A;if(typeof te=="function")A=function(){te(U)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,Yt=pt.port2;pt.port1.onmessage=U,A=function(){Yt.postMessage(null)}}else A=function(){k(U,0)};function Jt(se){O=se,we||(we=!0,A())}function Qe(se,ge){S=k(function(){se(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){N||R||(N=!0,Jt(Ee))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(se){switch(T){case 1:case 2:case 3:var ge=3;break;default:ge=T}var le=T;T=ge;try{return se()}finally{T=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,ge){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var le=T;T=se;try{return ge()}finally{T=le}},n.unstable_scheduleCallback=function(se,ge,le){var F=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,se){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=le+G,se={id:y++,callback:ge,priorityLevel:se,startTime:le,expirationTime:G,sortIndex:-1},le>F?(se.sortIndex=le,e(p,se),t(f)===null&&se===t(p)&&(M?(K(S),S=-1):M=!0,Qe(oe,le-F))):(se.sortIndex=G,e(f,se),N||R||(N=!0,Jt(Ee))),se},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(se){var ge=T;return function(){var le=T;T=ge;try{return se.apply(this,arguments)}finally{T=le}}}}(gm)),gm}var jE;function yk(){return jE||(jE=1,mm.exports=_k()),mm.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE;function vk(){if(BE)return Tn;BE=1;var n=Ug(),e=yk();function t(s){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(s,o){l(s,o),l(s+"Capture",o)}function l(s,o){for(i[s]=o,s=0;s<o.length;s++)r.add(o[s])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function T(s){return f.call(v,s)?!0:f.call(y,s)?!1:p.test(s)?v[s]=!0:(y[s]=!0,!1)}function R(s,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function N(s,o,u,d){if(o===null||typeof o>"u"||R(s,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(s,o,u,d,m,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=u,this.propertyName=s,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){k[s]=new M(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var o=s[0];k[o]=new M(o,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){k[s]=new M(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){k[s]=new M(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){k[s]=new M(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){k[s]=new M(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){k[s]=new M(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){k[s]=new M(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){k[s]=new M(s,5,!1,s.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function te(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var o=s.replace(K,te);k[o]=new M(o,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var o=s.replace(K,te);k[o]=new M(o,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var o=s.replace(K,te);k[o]=new M(o,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){k[s]=new M(s,1,!1,s.toLowerCase(),null,!1,!1)}),k.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){k[s]=new M(s,1,!1,s.toLowerCase(),null,!0,!0)});function Z(s,o,u,d){var m=k.hasOwnProperty(o)?k[o]:null;(m!==null?m.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(N(o,u,m,d)&&(u=null),d||m===null?T(o)&&(u===null?s.removeAttribute(o):s.setAttribute(o,""+u)):m.mustUseProperty?s[m.propertyName]=u===null?m.type===3?!1:"":u:(o=m.attributeName,d=m.attributeNamespace,u===null?s.removeAttribute(o):(m=m.type,u=m===3||m===4&&u===!0?"":""+u,d?s.setAttributeNS(d,o,u):s.setAttribute(o,u))))}var oe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),we=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),V=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),pt=Symbol.for("react.suspense_list"),Yt=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),Qe=Symbol.for("react.offscreen"),se=Symbol.iterator;function ge(s){return s===null||typeof s!="object"?null:(s=se&&s[se]||s["@@iterator"],typeof s=="function"?s:null)}var le=Object.assign,F;function G(s){if(F===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);F=o&&o[1]||""}return`
`+F+s}var pe=!1;function ke(s,o){if(!s||pe)return"";pe=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch($){var d=$}Reflect.construct(s,[],o)}else{try{o.call()}catch($){d=$}s.call(o.prototype)}else{try{throw Error()}catch($){d=$}s()}}catch($){if($&&d&&typeof $.stack=="string"){for(var m=$.stack.split(`
`),_=d.stack.split(`
`),w=m.length-1,C=_.length-1;1<=w&&0<=C&&m[w]!==_[C];)C--;for(;1<=w&&0<=C;w--,C--)if(m[w]!==_[C]){if(w!==1||C!==1)do if(w--,C--,0>C||m[w]!==_[C]){var x=`
`+m[w].replace(" at new "," at ");return s.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",s.displayName)),x}while(1<=w&&0<=C);break}}}finally{pe=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?G(s):""}function xe(s){switch(s.tag){case 5:return G(s.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return s=ke(s.type,!1),s;case 11:return s=ke(s.type.render,!1),s;case 1:return s=ke(s.type,!0),s;default:return""}}function Ue(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case O:return"Fragment";case we:return"Portal";case P:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case pt:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case V:return(s.displayName||"Context")+".Consumer";case D:return(s._context.displayName||"Context")+".Provider";case U:var o=s.render;return s=s.displayName,s||(s=o.displayName||o.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case Yt:return o=s.displayName||null,o!==null?o:Ue(s.type)||"Memo";case Jt:o=s._payload,s=s._init;try{return Ue(s(o))}catch{}}return null}function We(s){var o=s.type;switch(s.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=o.render,s=s.displayName||s.name||"",o.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function He(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Xe(s){var o=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Dt(s){var o=Xe(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,o),d=""+s[o];if(!s.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var m=u.get,_=u.set;return Object.defineProperty(s,o,{configurable:!0,get:function(){return m.call(this)},set:function(w){d=""+w,_.call(this,w)}}),Object.defineProperty(s,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){s._valueTracker=null,delete s[o]}}}}function Jr(s){s._valueTracker||(s._valueTracker=Dt(s))}function Lo(s){if(!s)return!1;var o=s._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return s&&(d=Xe(s)?s.checked?"true":"false":s.value),s=d,s!==u?(o.setValue(s),!0):!1}function Pi(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function Ns(s,o){var u=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function Mo(s,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=He(o.value!=null?o.value:u),s._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ml(s,o){o=o.checked,o!=null&&Z(s,"checked",o,!1)}function gl(s,o){ml(s,o);var u=He(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(d==="submit"||d==="reset"){s.removeAttribute("value");return}o.hasOwnProperty("value")?Vo(s,o.type,u):o.hasOwnProperty("defaultValue")&&Vo(s,o.type,He(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(s.defaultChecked=!!o.defaultChecked)}function wc(s,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+s._wrapperState.initialValue,u||o===s.value||(s.value=o),s.defaultValue=o}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function Vo(s,o,u){(o!=="number"||Pi(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var Xr=Array.isArray;function Zr(s,o,u,d){if(s=s.options,o){o={};for(var m=0;m<u.length;m++)o["$"+u[m]]=!0;for(u=0;u<s.length;u++)m=o.hasOwnProperty("$"+s[u].value),s[u].selected!==m&&(s[u].selected=m),m&&d&&(s[u].defaultSelected=!0)}else{for(u=""+He(u),o=null,m=0;m<s.length;m++){if(s[m].value===u){s[m].selected=!0,d&&(s[m].defaultSelected=!0);return}o!==null||s[m].disabled||(o=s[m])}o!==null&&(o.selected=!0)}}function _l(s,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Fo(s,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(Xr(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}s._wrapperState={initialValue:He(u)}}function Uo(s,o){var u=He(o.value),d=He(o.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),o.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),d!=null&&(s.defaultValue=""+d)}function yl(s){var o=s.textContent;o===s._wrapperState.initialValue&&o!==""&&o!==null&&(s.value=o)}function Ct(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rt(s,o){return s==null||s==="http://www.w3.org/1999/xhtml"?Ct(o):s==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var ei,vl=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,m){MSApp.execUnsafeLocalFunction(function(){return s(o,u,d,m)})}:s}(function(s,o){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=o;else{for(ei=ei||document.createElement("div"),ei.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=ei.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;o.firstChild;)s.appendChild(o.firstChild)}});function ki(s,o){if(o){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=o;return}}s.textContent=o}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bs=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(s){bs.forEach(function(o){o=o+s.charAt(0).toUpperCase()+s.substring(1),xs[o]=xs[s]})});function El(s,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||xs.hasOwnProperty(s)&&xs[s]?(""+o).trim():o+"px"}function wl(s,o){s=s.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,m=El(u,o[u],d);u==="float"&&(u="cssFloat"),d?s.setProperty(u,m):s[u]=m}}var Tl=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(s,o){if(o){if(Tl[s]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,s));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Sl(s,o){if(s.indexOf("-")===-1)return typeof o.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Os=null;function jo(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Bo=null,Wn=null,Pr=null;function zo(s){if(s=Kl(s)){if(typeof Bo!="function")throw Error(t(280));var o=s.stateNode;o&&(o=Jc(o),Bo(s.stateNode,s.type,o))}}function kr(s){Wn?Pr?Pr.push(s):Pr=[s]:Wn=s}function Cl(){if(Wn){var s=Wn,o=Pr;if(Pr=Wn=null,zo(s),o)for(s=0;s<o.length;s++)zo(o[s])}}function Ds(s,o){return s(o)}function Rl(){}var ti=!1;function Al(s,o,u){if(ti)return s(o,u);ti=!0;try{return Ds(s,o,u)}finally{ti=!1,(Wn!==null||Pr!==null)&&(Rl(),Cl())}}function mt(s,o){var u=s.stateNode;if(u===null)return null;var d=Jc(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(s=s.type,d=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!d;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var $o=!1;if(h)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){$o=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{$o=!1}function Ls(s,o,u,d,m,_,w,C,x){var $=Array.prototype.slice.call(arguments,3);try{o.apply(u,$)}catch(Y){this.onError(Y)}}var Ms=!1,Wo=null,rr=!1,Pl=null,jf={onError:function(s){Ms=!0,Wo=s}};function Ho(s,o,u,d,m,_,w,C,x){Ms=!1,Wo=null,Ls.apply(jf,arguments)}function Tc(s,o,u,d,m,_,w,C,x){if(Ho.apply(this,arguments),Ms){if(Ms){var $=Wo;Ms=!1,Wo=null}else throw Error(t(198));rr||(rr=!0,Pl=$)}}function ir(s){var o=s,u=s;if(s.alternate)for(;o.return;)o=o.return;else{s=o;do o=s,(o.flags&4098)!==0&&(u=o.return),s=o.return;while(s)}return o.tag===3?u:null}function Vs(s){if(s.tag===13){var o=s.memoizedState;if(o===null&&(s=s.alternate,s!==null&&(o=s.memoizedState)),o!==null)return o.dehydrated}return null}function sr(s){if(ir(s)!==s)throw Error(t(188))}function Ic(s){var o=s.alternate;if(!o){if(o=ir(s),o===null)throw Error(t(188));return o!==s?null:s}for(var u=s,d=o;;){var m=u.return;if(m===null)break;var _=m.alternate;if(_===null){if(d=m.return,d!==null){u=d;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===u)return sr(m),s;if(_===d)return sr(m),o;_=_.sibling}throw Error(t(188))}if(u.return!==d.return)u=m,d=_;else{for(var w=!1,C=m.child;C;){if(C===u){w=!0,u=m,d=_;break}if(C===d){w=!0,d=m,u=_;break}C=C.sibling}if(!w){for(C=_.child;C;){if(C===u){w=!0,u=_,d=m;break}if(C===d){w=!0,d=_,u=m;break}C=C.sibling}if(!w)throw Error(t(189))}}if(u.alternate!==d)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?s:o}function kl(s){return s=Ic(s),s!==null?qo(s):null}function qo(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var o=qo(s);if(o!==null)return o;s=s.sibling}return null}var Go=e.unstable_scheduleCallback,Nl=e.unstable_cancelCallback,Sc=e.unstable_shouldYield,Bf=e.unstable_requestPaint,Ze=e.unstable_now,Cc=e.unstable_getCurrentPriorityLevel,Fs=e.unstable_ImmediatePriority,Ni=e.unstable_UserBlockingPriority,Hn=e.unstable_NormalPriority,xl=e.unstable_LowPriority,Rc=e.unstable_IdlePriority,Us=null,On=null;function Ac(s){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Us,s,void 0,(s.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:kc,bl=Math.log,Pc=Math.LN2;function kc(s){return s>>>=0,s===0?32:31-(bl(s)/Pc|0)|0}var Ko=64,Qo=4194304;function xi(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function js(s,o){var u=s.pendingLanes;if(u===0)return 0;var d=0,m=s.suspendedLanes,_=s.pingedLanes,w=u&268435455;if(w!==0){var C=w&~m;C!==0?d=xi(C):(_&=w,_!==0&&(d=xi(_)))}else w=u&~m,w!==0?d=xi(w):_!==0&&(d=xi(_));if(d===0)return 0;if(o!==0&&o!==d&&(o&m)===0&&(m=d&-d,_=o&-o,m>=_||m===16&&(_&4194240)!==0))return o;if((d&4)!==0&&(d|=u&16),o=s.entangledLanes,o!==0)for(s=s.entanglements,o&=d;0<o;)u=31-un(o),m=1<<u,d|=s[u],o&=~m;return d}function zf(s,o){switch(s){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(s,o){for(var u=s.suspendedLanes,d=s.pingedLanes,m=s.expirationTimes,_=s.pendingLanes;0<_;){var w=31-un(_),C=1<<w,x=m[w];x===-1?((C&u)===0||(C&d)!==0)&&(m[w]=zf(C,o)):x<=o&&(s.expiredLanes|=C),_&=~C}}function Dn(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Bs(){var s=Ko;return Ko<<=1,(Ko&4194240)===0&&(Ko=64),s}function bi(s){for(var o=[],u=0;31>u;u++)o.push(s);return o}function Oi(s,o,u){s.pendingLanes|=o,o!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,o=31-un(o),s[o]=u}function Je(s,o){var u=s.pendingLanes&~o;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=o,s.mutableReadLanes&=o,s.entangledLanes&=o,o=s.entanglements;var d=s.eventTimes;for(s=s.expirationTimes;0<u;){var m=31-un(u),_=1<<m;o[m]=0,d[m]=-1,s[m]=-1,u&=~_}}function Di(s,o){var u=s.entangledLanes|=o;for(s=s.entanglements;u;){var d=31-un(u),m=1<<d;m&o|s[d]&o&&(s[d]|=o),u&=~m}}var Fe=0;function Li(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var Nc,Yo,xc,bc,Oc,Ol=!1,Nr=[],$t=null,or=null,ar=null,Mi=new Map,qn=new Map,xr=[],$f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dc(s,o){switch(s){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Mi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(o.pointerId)}}function mn(s,o,u,d,m,_){return s===null||s.nativeEvent!==_?(s={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:_,targetContainers:[m]},o!==null&&(o=Kl(o),o!==null&&Yo(o)),s):(s.eventSystemFlags|=d,o=s.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),s)}function Wf(s,o,u,d,m){switch(o){case"focusin":return $t=mn($t,s,o,u,d,m),!0;case"dragenter":return or=mn(or,s,o,u,d,m),!0;case"mouseover":return ar=mn(ar,s,o,u,d,m),!0;case"pointerover":var _=m.pointerId;return Mi.set(_,mn(Mi.get(_)||null,s,o,u,d,m)),!0;case"gotpointercapture":return _=m.pointerId,qn.set(_,mn(qn.get(_)||null,s,o,u,d,m)),!0}return!1}function Lc(s){var o=qs(s.target);if(o!==null){var u=ir(o);if(u!==null){if(o=u.tag,o===13){if(o=Vs(u),o!==null){s.blockedOn=o,Oc(s.priority,function(){xc(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function ri(s){if(s.blockedOn!==null)return!1;for(var o=s.targetContainers;0<o.length;){var u=Jo(s.domEventName,s.eventSystemFlags,o[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var d=new u.constructor(u.type,u);Os=d,u.target.dispatchEvent(d),Os=null}else return o=Kl(u),o!==null&&Yo(o),s.blockedOn=u,!1;o.shift()}return!0}function zs(s,o,u){ri(s)&&u.delete(o)}function Mc(){Ol=!1,$t!==null&&ri($t)&&($t=null),or!==null&&ri(or)&&(or=null),ar!==null&&ri(ar)&&(ar=null),Mi.forEach(zs),qn.forEach(zs)}function lr(s,o){s.blockedOn===o&&(s.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mc)))}function ur(s){function o(m){return lr(m,s)}if(0<Nr.length){lr(Nr[0],s);for(var u=1;u<Nr.length;u++){var d=Nr[u];d.blockedOn===s&&(d.blockedOn=null)}}for($t!==null&&lr($t,s),or!==null&&lr(or,s),ar!==null&&lr(ar,s),Mi.forEach(o),qn.forEach(o),u=0;u<xr.length;u++)d=xr[u],d.blockedOn===s&&(d.blockedOn=null);for(;0<xr.length&&(u=xr[0],u.blockedOn===null);)Lc(u),u.blockedOn===null&&xr.shift()}var ii=oe.ReactCurrentBatchConfig,Vi=!0;function ot(s,o,u,d){var m=Fe,_=ii.transition;ii.transition=null;try{Fe=1,Dl(s,o,u,d)}finally{Fe=m,ii.transition=_}}function Hf(s,o,u,d){var m=Fe,_=ii.transition;ii.transition=null;try{Fe=4,Dl(s,o,u,d)}finally{Fe=m,ii.transition=_}}function Dl(s,o,u,d){if(Vi){var m=Jo(s,o,u,d);if(m===null)np(s,o,d,$s,u),Dc(s,d);else if(Wf(m,s,o,u,d))d.stopPropagation();else if(Dc(s,d),o&4&&-1<$f.indexOf(s)){for(;m!==null;){var _=Kl(m);if(_!==null&&Nc(_),_=Jo(s,o,u,d),_===null&&np(s,o,d,$s,u),_===m)break;m=_}m!==null&&d.stopPropagation()}else np(s,o,d,null,u)}}var $s=null;function Jo(s,o,u,d){if($s=null,s=jo(d),s=qs(s),s!==null)if(o=ir(s),o===null)s=null;else if(u=o.tag,u===13){if(s=Vs(o),s!==null)return s;s=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;s=null}else o!==s&&(s=null);return $s=s,null}function Ll(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cc()){case Fs:return 1;case Ni:return 4;case Hn:case xl:return 16;case Rc:return 536870912;default:return 16}default:return 16}}var Ln=null,Xo=null,gn=null;function Ml(){if(gn)return gn;var s,o=Xo,u=o.length,d,m="value"in Ln?Ln.value:Ln.textContent,_=m.length;for(s=0;s<u&&o[s]===m[s];s++);var w=u-s;for(d=1;d<=w&&o[u-d]===m[_-d];d++);return gn=m.slice(s,1<d?1-d:void 0)}function Zo(s){var o=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&o===13&&(s=13)):s=o,s===10&&(s=13),32<=s||s===13?s:0}function br(){return!0}function Vl(){return!1}function Wt(s){function o(u,d,m,_,w){this._reactName=u,this._targetInst=m,this.type=d,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var C in s)s.hasOwnProperty(C)&&(u=s[C],this[C]=u?u(_):_[C]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?br:Vl,this.isPropagationStopped=Vl,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),o}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Wt(cr),Or=le({},cr,{view:0,detail:0}),qf=Wt(Or),ta,si,Fi,Ws=le({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dr,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Fi&&(Fi&&s.type==="mousemove"?(ta=s.screenX-Fi.screenX,si=s.screenY-Fi.screenY):si=ta=0,Fi=s),ta)},movementY:function(s){return"movementY"in s?s.movementY:si}}),na=Wt(Ws),Fl=le({},Ws,{dataTransfer:0}),Vc=Wt(Fl),ra=le({},Or,{relatedTarget:0}),ia=Wt(ra),Fc=le({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),oi=Wt(Fc),Uc=le({},cr,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),jc=Wt(Uc),Bc=le({},cr,{data:0}),Ul=Wt(Bc),sa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $c(s){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(s):(s=zc[s])?!!o[s]:!1}function Dr(){return $c}var c=le({},Or,{key:function(s){if(s.key){var o=sa[s.key]||s.key;if(o!=="Unidentified")return o}return s.type==="keypress"?(s=Zo(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?cn[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dr,charCode:function(s){return s.type==="keypress"?Zo(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Zo(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),g=Wt(c),E=le({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Wt(E),j=le({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dr}),W=Wt(j),ie=le({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ke=Wt(ie),At=le({},Ws,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),je=Wt(At),Lt=[9,13,27,32],vt=h&&"CompositionEvent"in window,Gn=null;h&&"documentMode"in document&&(Gn=document.documentMode);var Mn=h&&"TextEvent"in window&&!Gn,Hs=h&&(!vt||Gn&&8<Gn&&11>=Gn),oa=" ",ky=!1;function Ny(s,o){switch(s){case"keyup":return Lt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xy(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var aa=!1;function uP(s,o){switch(s){case"compositionend":return xy(o);case"keypress":return o.which!==32?null:(ky=!0,oa);case"textInput":return s=o.data,s===oa&&ky?null:s;default:return null}}function cP(s,o){if(aa)return s==="compositionend"||!vt&&Ny(s,o)?(s=Ml(),gn=Xo=Ln=null,aa=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Hs&&o.locale!=="ko"?null:o.data;default:return null}}var hP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function by(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o==="input"?!!hP[s.type]:o==="textarea"}function Oy(s,o,u,d){kr(d),o=Kc(o,"onChange"),0<o.length&&(u=new ea("onChange","change",null,u,d),s.push({event:u,listeners:o}))}var jl=null,Bl=null;function dP(s){Jy(s,0)}function Wc(s){var o=da(s);if(Lo(o))return s}function fP(s,o){if(s==="change")return o}var Dy=!1;if(h){var Gf;if(h){var Kf="oninput"in document;if(!Kf){var Ly=document.createElement("div");Ly.setAttribute("oninput","return;"),Kf=typeof Ly.oninput=="function"}Gf=Kf}else Gf=!1;Dy=Gf&&(!document.documentMode||9<document.documentMode)}function My(){jl&&(jl.detachEvent("onpropertychange",Vy),Bl=jl=null)}function Vy(s){if(s.propertyName==="value"&&Wc(Bl)){var o=[];Oy(o,Bl,s,jo(s)),Al(dP,o)}}function pP(s,o,u){s==="focusin"?(My(),jl=o,Bl=u,jl.attachEvent("onpropertychange",Vy)):s==="focusout"&&My()}function mP(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Wc(Bl)}function gP(s,o){if(s==="click")return Wc(o)}function _P(s,o){if(s==="input"||s==="change")return Wc(o)}function yP(s,o){return s===o&&(s!==0||1/s===1/o)||s!==s&&o!==o}var hr=typeof Object.is=="function"?Object.is:yP;function zl(s,o){if(hr(s,o))return!0;if(typeof s!="object"||s===null||typeof o!="object"||o===null)return!1;var u=Object.keys(s),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var m=u[d];if(!f.call(o,m)||!hr(s[m],o[m]))return!1}return!0}function Fy(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function Uy(s,o){var u=Fy(s);s=0;for(var d;u;){if(u.nodeType===3){if(d=s+u.textContent.length,s<=o&&d>=o)return{node:u,offset:o-s};s=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=Fy(u)}}function jy(s,o){return s&&o?s===o?!0:s&&s.nodeType===3?!1:o&&o.nodeType===3?jy(s,o.parentNode):"contains"in s?s.contains(o):s.compareDocumentPosition?!!(s.compareDocumentPosition(o)&16):!1:!1}function By(){for(var s=window,o=Pi();o instanceof s.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)s=o.contentWindow;else break;o=Pi(s.document)}return o}function Qf(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o&&(o==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||o==="textarea"||s.contentEditable==="true")}function vP(s){var o=By(),u=s.focusedElem,d=s.selectionRange;if(o!==u&&u&&u.ownerDocument&&jy(u.ownerDocument.documentElement,u)){if(d!==null&&Qf(u)){if(o=d.start,s=d.end,s===void 0&&(s=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(s,u.value.length);else if(s=(o=u.ownerDocument||document)&&o.defaultView||window,s.getSelection){s=s.getSelection();var m=u.textContent.length,_=Math.min(d.start,m);d=d.end===void 0?_:Math.min(d.end,m),!s.extend&&_>d&&(m=d,d=_,_=m),m=Uy(u,_);var w=Uy(u,d);m&&w&&(s.rangeCount!==1||s.anchorNode!==m.node||s.anchorOffset!==m.offset||s.focusNode!==w.node||s.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),s.removeAllRanges(),_>d?(s.addRange(o),s.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),s.addRange(o)))}}for(o=[],s=u;s=s.parentNode;)s.nodeType===1&&o.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)s=o[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var EP=h&&"documentMode"in document&&11>=document.documentMode,la=null,Yf=null,$l=null,Jf=!1;function zy(s,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Jf||la==null||la!==Pi(d)||(d=la,"selectionStart"in d&&Qf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),$l&&zl($l,d)||($l=d,d=Kc(Yf,"onSelect"),0<d.length&&(o=new ea("onSelect","select",null,o,u),s.push({event:o,listeners:d}),o.target=la)))}function Hc(s,o){var u={};return u[s.toLowerCase()]=o.toLowerCase(),u["Webkit"+s]="webkit"+o,u["Moz"+s]="moz"+o,u}var ua={animationend:Hc("Animation","AnimationEnd"),animationiteration:Hc("Animation","AnimationIteration"),animationstart:Hc("Animation","AnimationStart"),transitionend:Hc("Transition","TransitionEnd")},Xf={},$y={};h&&($y=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function qc(s){if(Xf[s])return Xf[s];if(!ua[s])return s;var o=ua[s],u;for(u in o)if(o.hasOwnProperty(u)&&u in $y)return Xf[s]=o[u];return s}var Wy=qc("animationend"),Hy=qc("animationiteration"),qy=qc("animationstart"),Gy=qc("transitionend"),Ky=new Map,Qy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ui(s,o){Ky.set(s,o),a(o,[s])}for(var Zf=0;Zf<Qy.length;Zf++){var ep=Qy[Zf],wP=ep.toLowerCase(),TP=ep[0].toUpperCase()+ep.slice(1);Ui(wP,"on"+TP)}Ui(Wy,"onAnimationEnd"),Ui(Hy,"onAnimationIteration"),Ui(qy,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Gy,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wl));function Yy(s,o,u){var d=s.type||"unknown-event";s.currentTarget=u,Tc(d,o,void 0,s),s.currentTarget=null}function Jy(s,o){o=(o&4)!==0;for(var u=0;u<s.length;u++){var d=s[u],m=d.event;d=d.listeners;e:{var _=void 0;if(o)for(var w=d.length-1;0<=w;w--){var C=d[w],x=C.instance,$=C.currentTarget;if(C=C.listener,x!==_&&m.isPropagationStopped())break e;Yy(m,C,$),_=x}else for(w=0;w<d.length;w++){if(C=d[w],x=C.instance,$=C.currentTarget,C=C.listener,x!==_&&m.isPropagationStopped())break e;Yy(m,C,$),_=x}}}if(rr)throw s=Pl,rr=!1,Pl=null,s}function rt(s,o){var u=o[lp];u===void 0&&(u=o[lp]=new Set);var d=s+"__bubble";u.has(d)||(Xy(o,s,2,!1),u.add(d))}function tp(s,o,u){var d=0;o&&(d|=4),Xy(u,s,d,o)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function Hl(s){if(!s[Gc]){s[Gc]=!0,r.forEach(function(u){u!=="selectionchange"&&(IP.has(u)||tp(u,!1,s),tp(u,!0,s))});var o=s.nodeType===9?s:s.ownerDocument;o===null||o[Gc]||(o[Gc]=!0,tp("selectionchange",!1,o))}}function Xy(s,o,u,d){switch(Ll(o)){case 1:var m=ot;break;case 4:m=Hf;break;default:m=Dl}u=m.bind(null,o,u,s),m=void 0,!$o||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),d?m!==void 0?s.addEventListener(o,u,{capture:!0,passive:m}):s.addEventListener(o,u,!0):m!==void 0?s.addEventListener(o,u,{passive:m}):s.addEventListener(o,u,!1)}function np(s,o,u,d,m){var _=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var C=d.stateNode.containerInfo;if(C===m||C.nodeType===8&&C.parentNode===m)break;if(w===4)for(w=d.return;w!==null;){var x=w.tag;if((x===3||x===4)&&(x=w.stateNode.containerInfo,x===m||x.nodeType===8&&x.parentNode===m))return;w=w.return}for(;C!==null;){if(w=qs(C),w===null)return;if(x=w.tag,x===5||x===6){d=_=w;continue e}C=C.parentNode}}d=d.return}Al(function(){var $=_,Y=jo(u),X=[];e:{var Q=Ky.get(s);if(Q!==void 0){var ae=ea,he=s;switch(s){case"keypress":if(Zo(u)===0)break e;case"keydown":case"keyup":ae=g;break;case"focusin":he="focus",ae=ia;break;case"focusout":he="blur",ae=ia;break;case"beforeblur":case"afterblur":ae=ia;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Vc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=W;break;case Wy:case Hy:case qy:ae=oi;break;case Gy:ae=Ke;break;case"scroll":ae=qf;break;case"wheel":ae=je;break;case"copy":case"cut":case"paste":ae=jc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=I}var de=(o&4)!==0,gt=!de&&s==="scroll",B=de?Q!==null?Q+"Capture":null:Q;de=[];for(var L=$,z;L!==null;){z=L;var ee=z.stateNode;if(z.tag===5&&ee!==null&&(z=ee,B!==null&&(ee=mt(L,B),ee!=null&&de.push(ql(L,ee,z)))),gt)break;L=L.return}0<de.length&&(Q=new ae(Q,he,null,u,Y),X.push({event:Q,listeners:de}))}}if((o&7)===0){e:{if(Q=s==="mouseover"||s==="pointerover",ae=s==="mouseout"||s==="pointerout",Q&&u!==Os&&(he=u.relatedTarget||u.fromElement)&&(qs(he)||he[ai]))break e;if((ae||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,ae?(he=u.relatedTarget||u.toElement,ae=$,he=he?qs(he):null,he!==null&&(gt=ir(he),he!==gt||he.tag!==5&&he.tag!==6)&&(he=null)):(ae=null,he=$),ae!==he)){if(de=na,ee="onMouseLeave",B="onMouseEnter",L="mouse",(s==="pointerout"||s==="pointerover")&&(de=I,ee="onPointerLeave",B="onPointerEnter",L="pointer"),gt=ae==null?Q:da(ae),z=he==null?Q:da(he),Q=new de(ee,L+"leave",ae,u,Y),Q.target=gt,Q.relatedTarget=z,ee=null,qs(Y)===$&&(de=new de(B,L+"enter",he,u,Y),de.target=z,de.relatedTarget=gt,ee=de),gt=ee,ae&&he)t:{for(de=ae,B=he,L=0,z=de;z;z=ca(z))L++;for(z=0,ee=B;ee;ee=ca(ee))z++;for(;0<L-z;)de=ca(de),L--;for(;0<z-L;)B=ca(B),z--;for(;L--;){if(de===B||B!==null&&de===B.alternate)break t;de=ca(de),B=ca(B)}de=null}else de=null;ae!==null&&Zy(X,Q,ae,de,!1),he!==null&&gt!==null&&Zy(X,gt,he,de,!0)}}e:{if(Q=$?da($):window,ae=Q.nodeName&&Q.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Q.type==="file")var fe=fP;else if(by(Q))if(Dy)fe=_P;else{fe=mP;var _e=pP}else(ae=Q.nodeName)&&ae.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(fe=gP);if(fe&&(fe=fe(s,$))){Oy(X,fe,u,Y);break e}_e&&_e(s,Q,$),s==="focusout"&&(_e=Q._wrapperState)&&_e.controlled&&Q.type==="number"&&Vo(Q,"number",Q.value)}switch(_e=$?da($):window,s){case"focusin":(by(_e)||_e.contentEditable==="true")&&(la=_e,Yf=$,$l=null);break;case"focusout":$l=Yf=la=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,zy(X,u,Y);break;case"selectionchange":if(EP)break;case"keydown":case"keyup":zy(X,u,Y)}var ye;if(vt)e:{switch(s){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else aa?Ny(s,u)&&(Ce="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(Ce="onCompositionStart");Ce&&(Hs&&u.locale!=="ko"&&(aa||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&aa&&(ye=Ml()):(Ln=Y,Xo="value"in Ln?Ln.value:Ln.textContent,aa=!0)),_e=Kc($,Ce),0<_e.length&&(Ce=new Ul(Ce,s,null,u,Y),X.push({event:Ce,listeners:_e}),ye?Ce.data=ye:(ye=xy(u),ye!==null&&(Ce.data=ye)))),(ye=Mn?uP(s,u):cP(s,u))&&($=Kc($,"onBeforeInput"),0<$.length&&(Y=new Ul("onBeforeInput","beforeinput",null,u,Y),X.push({event:Y,listeners:$}),Y.data=ye))}Jy(X,o)})}function ql(s,o,u){return{instance:s,listener:o,currentTarget:u}}function Kc(s,o){for(var u=o+"Capture",d=[];s!==null;){var m=s,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=mt(s,u),_!=null&&d.unshift(ql(s,_,m)),_=mt(s,o),_!=null&&d.push(ql(s,_,m))),s=s.return}return d}function ca(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function Zy(s,o,u,d,m){for(var _=o._reactName,w=[];u!==null&&u!==d;){var C=u,x=C.alternate,$=C.stateNode;if(x!==null&&x===d)break;C.tag===5&&$!==null&&(C=$,m?(x=mt(u,_),x!=null&&w.unshift(ql(u,x,C))):m||(x=mt(u,_),x!=null&&w.push(ql(u,x,C)))),u=u.return}w.length!==0&&s.push({event:o,listeners:w})}var SP=/\r\n?/g,CP=/\u0000|\uFFFD/g;function ev(s){return(typeof s=="string"?s:""+s).replace(SP,`
`).replace(CP,"")}function Qc(s,o,u){if(o=ev(o),ev(s)!==o&&u)throw Error(t(425))}function Yc(){}var rp=null,ip=null;function sp(s,o){return s==="textarea"||s==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var op=typeof setTimeout=="function"?setTimeout:void 0,RP=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,AP=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(s){return tv.resolve(null).then(s).catch(PP)}:op;function PP(s){setTimeout(function(){throw s})}function ap(s,o){var u=o,d=0;do{var m=u.nextSibling;if(s.removeChild(u),m&&m.nodeType===8)if(u=m.data,u==="/$"){if(d===0){s.removeChild(m),ur(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=m}while(u);ur(o)}function ji(s){for(;s!=null;s=s.nextSibling){var o=s.nodeType;if(o===1||o===3)break;if(o===8){if(o=s.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return s}function nv(s){s=s.previousSibling;for(var o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return s;o--}else u==="/$"&&o++}s=s.previousSibling}return null}var ha=Math.random().toString(36).slice(2),Lr="__reactFiber$"+ha,Gl="__reactProps$"+ha,ai="__reactContainer$"+ha,lp="__reactEvents$"+ha,kP="__reactListeners$"+ha,NP="__reactHandles$"+ha;function qs(s){var o=s[Lr];if(o)return o;for(var u=s.parentNode;u;){if(o=u[ai]||u[Lr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(s=nv(s);s!==null;){if(u=s[Lr])return u;s=nv(s)}return o}s=u,u=s.parentNode}return null}function Kl(s){return s=s[Lr]||s[ai],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function da(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(t(33))}function Jc(s){return s[Gl]||null}var up=[],fa=-1;function Bi(s){return{current:s}}function it(s){0>fa||(s.current=up[fa],up[fa]=null,fa--)}function et(s,o){fa++,up[fa]=s.current,s.current=o}var zi={},Xt=Bi(zi),_n=Bi(!1),Gs=zi;function pa(s,o){var u=s.type.contextTypes;if(!u)return zi;var d=s.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in u)m[_]=o[_];return d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=o,s.__reactInternalMemoizedMaskedChildContext=m),m}function yn(s){return s=s.childContextTypes,s!=null}function Xc(){it(_n),it(Xt)}function rv(s,o,u){if(Xt.current!==zi)throw Error(t(168));et(Xt,o),et(_n,u)}function iv(s,o,u){var d=s.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var m in d)if(!(m in o))throw Error(t(108,We(s)||"Unknown",m));return le({},u,d)}function Zc(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||zi,Gs=Xt.current,et(Xt,s),et(_n,_n.current),!0}function sv(s,o,u){var d=s.stateNode;if(!d)throw Error(t(169));u?(s=iv(s,o,Gs),d.__reactInternalMemoizedMergedChildContext=s,it(_n),it(Xt),et(Xt,s)):it(_n),et(_n,u)}var li=null,eh=!1,cp=!1;function ov(s){li===null?li=[s]:li.push(s)}function xP(s){eh=!0,ov(s)}function $i(){if(!cp&&li!==null){cp=!0;var s=0,o=Fe;try{var u=li;for(Fe=1;s<u.length;s++){var d=u[s];do d=d(!0);while(d!==null)}li=null,eh=!1}catch(m){throw li!==null&&(li=li.slice(s+1)),Go(Fs,$i),m}finally{Fe=o,cp=!1}}return null}var ma=[],ga=0,th=null,nh=0,Kn=[],Qn=0,Ks=null,ui=1,ci="";function Qs(s,o){ma[ga++]=nh,ma[ga++]=th,th=s,nh=o}function av(s,o,u){Kn[Qn++]=ui,Kn[Qn++]=ci,Kn[Qn++]=Ks,Ks=s;var d=ui;s=ci;var m=32-un(d)-1;d&=~(1<<m),u+=1;var _=32-un(o)+m;if(30<_){var w=m-m%5;_=(d&(1<<w)-1).toString(32),d>>=w,m-=w,ui=1<<32-un(o)+m|u<<m|d,ci=_+s}else ui=1<<_|u<<m|d,ci=s}function hp(s){s.return!==null&&(Qs(s,1),av(s,1,0))}function dp(s){for(;s===th;)th=ma[--ga],ma[ga]=null,nh=ma[--ga],ma[ga]=null;for(;s===Ks;)Ks=Kn[--Qn],Kn[Qn]=null,ci=Kn[--Qn],Kn[Qn]=null,ui=Kn[--Qn],Kn[Qn]=null}var Vn=null,Fn=null,at=!1,dr=null;function lv(s,o){var u=Zn(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=s,o=s.deletions,o===null?(s.deletions=[u],s.flags|=16):o.push(u)}function uv(s,o){switch(s.tag){case 5:var u=s.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(s.stateNode=o,Vn=s,Fn=ji(o.firstChild),!0):!1;case 6:return o=s.pendingProps===""||o.nodeType!==3?null:o,o!==null?(s.stateNode=o,Vn=s,Fn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=Ks!==null?{id:ui,overflow:ci}:null,s.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Zn(18,null,null,0),u.stateNode=o,u.return=s,s.child=u,Vn=s,Fn=null,!0):!1;default:return!1}}function fp(s){return(s.mode&1)!==0&&(s.flags&128)===0}function pp(s){if(at){var o=Fn;if(o){var u=o;if(!uv(s,o)){if(fp(s))throw Error(t(418));o=ji(u.nextSibling);var d=Vn;o&&uv(s,o)?lv(d,u):(s.flags=s.flags&-4097|2,at=!1,Vn=s)}}else{if(fp(s))throw Error(t(418));s.flags=s.flags&-4097|2,at=!1,Vn=s}}}function cv(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Vn=s}function rh(s){if(s!==Vn)return!1;if(!at)return cv(s),at=!0,!1;var o;if((o=s.tag!==3)&&!(o=s.tag!==5)&&(o=s.type,o=o!=="head"&&o!=="body"&&!sp(s.type,s.memoizedProps)),o&&(o=Fn)){if(fp(s))throw hv(),Error(t(418));for(;o;)lv(s,o),o=ji(o.nextSibling)}if(cv(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(t(317));e:{for(s=s.nextSibling,o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(o===0){Fn=ji(s.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}s=s.nextSibling}Fn=null}}else Fn=Vn?ji(s.stateNode.nextSibling):null;return!0}function hv(){for(var s=Fn;s;)s=ji(s.nextSibling)}function _a(){Fn=Vn=null,at=!1}function mp(s){dr===null?dr=[s]:dr.push(s)}var bP=oe.ReactCurrentBatchConfig;function Ql(s,o,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var d=u.stateNode}if(!d)throw Error(t(147,s));var m=d,_=""+s;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var C=m.refs;w===null?delete C[_]:C[_]=w},o._stringRef=_,o)}if(typeof s!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,s))}return s}function ih(s,o){throw s=Object.prototype.toString.call(o),Error(t(31,s==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":s))}function dv(s){var o=s._init;return o(s._payload)}function fv(s){function o(B,L){if(s){var z=B.deletions;z===null?(B.deletions=[L],B.flags|=16):z.push(L)}}function u(B,L){if(!s)return null;for(;L!==null;)o(B,L),L=L.sibling;return null}function d(B,L){for(B=new Map;L!==null;)L.key!==null?B.set(L.key,L):B.set(L.index,L),L=L.sibling;return B}function m(B,L){return B=Ji(B,L),B.index=0,B.sibling=null,B}function _(B,L,z){return B.index=z,s?(z=B.alternate,z!==null?(z=z.index,z<L?(B.flags|=2,L):z):(B.flags|=2,L)):(B.flags|=1048576,L)}function w(B){return s&&B.alternate===null&&(B.flags|=2),B}function C(B,L,z,ee){return L===null||L.tag!==6?(L=om(z,B.mode,ee),L.return=B,L):(L=m(L,z),L.return=B,L)}function x(B,L,z,ee){var fe=z.type;return fe===O?Y(B,L,z.props.children,ee,z.key):L!==null&&(L.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Jt&&dv(fe)===L.type)?(ee=m(L,z.props),ee.ref=Ql(B,L,z),ee.return=B,ee):(ee=Ph(z.type,z.key,z.props,null,B.mode,ee),ee.ref=Ql(B,L,z),ee.return=B,ee)}function $(B,L,z,ee){return L===null||L.tag!==4||L.stateNode.containerInfo!==z.containerInfo||L.stateNode.implementation!==z.implementation?(L=am(z,B.mode,ee),L.return=B,L):(L=m(L,z.children||[]),L.return=B,L)}function Y(B,L,z,ee,fe){return L===null||L.tag!==7?(L=ro(z,B.mode,ee,fe),L.return=B,L):(L=m(L,z),L.return=B,L)}function X(B,L,z){if(typeof L=="string"&&L!==""||typeof L=="number")return L=om(""+L,B.mode,z),L.return=B,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ee:return z=Ph(L.type,L.key,L.props,null,B.mode,z),z.ref=Ql(B,null,L),z.return=B,z;case we:return L=am(L,B.mode,z),L.return=B,L;case Jt:var ee=L._init;return X(B,ee(L._payload),z)}if(Xr(L)||ge(L))return L=ro(L,B.mode,z,null),L.return=B,L;ih(B,L)}return null}function Q(B,L,z,ee){var fe=L!==null?L.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return fe!==null?null:C(B,L,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Ee:return z.key===fe?x(B,L,z,ee):null;case we:return z.key===fe?$(B,L,z,ee):null;case Jt:return fe=z._init,Q(B,L,fe(z._payload),ee)}if(Xr(z)||ge(z))return fe!==null?null:Y(B,L,z,ee,null);ih(B,z)}return null}function ae(B,L,z,ee,fe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return B=B.get(z)||null,C(L,B,""+ee,fe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ee:return B=B.get(ee.key===null?z:ee.key)||null,x(L,B,ee,fe);case we:return B=B.get(ee.key===null?z:ee.key)||null,$(L,B,ee,fe);case Jt:var _e=ee._init;return ae(B,L,z,_e(ee._payload),fe)}if(Xr(ee)||ge(ee))return B=B.get(z)||null,Y(L,B,ee,fe,null);ih(L,ee)}return null}function he(B,L,z,ee){for(var fe=null,_e=null,ye=L,Ce=L=0,Ft=null;ye!==null&&Ce<z.length;Ce++){ye.index>Ce?(Ft=ye,ye=null):Ft=ye.sibling;var $e=Q(B,ye,z[Ce],ee);if($e===null){ye===null&&(ye=Ft);break}s&&ye&&$e.alternate===null&&o(B,ye),L=_($e,L,Ce),_e===null?fe=$e:_e.sibling=$e,_e=$e,ye=Ft}if(Ce===z.length)return u(B,ye),at&&Qs(B,Ce),fe;if(ye===null){for(;Ce<z.length;Ce++)ye=X(B,z[Ce],ee),ye!==null&&(L=_(ye,L,Ce),_e===null?fe=ye:_e.sibling=ye,_e=ye);return at&&Qs(B,Ce),fe}for(ye=d(B,ye);Ce<z.length;Ce++)Ft=ae(ye,B,Ce,z[Ce],ee),Ft!==null&&(s&&Ft.alternate!==null&&ye.delete(Ft.key===null?Ce:Ft.key),L=_(Ft,L,Ce),_e===null?fe=Ft:_e.sibling=Ft,_e=Ft);return s&&ye.forEach(function(Xi){return o(B,Xi)}),at&&Qs(B,Ce),fe}function de(B,L,z,ee){var fe=ge(z);if(typeof fe!="function")throw Error(t(150));if(z=fe.call(z),z==null)throw Error(t(151));for(var _e=fe=null,ye=L,Ce=L=0,Ft=null,$e=z.next();ye!==null&&!$e.done;Ce++,$e=z.next()){ye.index>Ce?(Ft=ye,ye=null):Ft=ye.sibling;var Xi=Q(B,ye,$e.value,ee);if(Xi===null){ye===null&&(ye=Ft);break}s&&ye&&Xi.alternate===null&&o(B,ye),L=_(Xi,L,Ce),_e===null?fe=Xi:_e.sibling=Xi,_e=Xi,ye=Ft}if($e.done)return u(B,ye),at&&Qs(B,Ce),fe;if(ye===null){for(;!$e.done;Ce++,$e=z.next())$e=X(B,$e.value,ee),$e!==null&&(L=_($e,L,Ce),_e===null?fe=$e:_e.sibling=$e,_e=$e);return at&&Qs(B,Ce),fe}for(ye=d(B,ye);!$e.done;Ce++,$e=z.next())$e=ae(ye,B,Ce,$e.value,ee),$e!==null&&(s&&$e.alternate!==null&&ye.delete($e.key===null?Ce:$e.key),L=_($e,L,Ce),_e===null?fe=$e:_e.sibling=$e,_e=$e);return s&&ye.forEach(function(hk){return o(B,hk)}),at&&Qs(B,Ce),fe}function gt(B,L,z,ee){if(typeof z=="object"&&z!==null&&z.type===O&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Ee:e:{for(var fe=z.key,_e=L;_e!==null;){if(_e.key===fe){if(fe=z.type,fe===O){if(_e.tag===7){u(B,_e.sibling),L=m(_e,z.props.children),L.return=B,B=L;break e}}else if(_e.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Jt&&dv(fe)===_e.type){u(B,_e.sibling),L=m(_e,z.props),L.ref=Ql(B,_e,z),L.return=B,B=L;break e}u(B,_e);break}else o(B,_e);_e=_e.sibling}z.type===O?(L=ro(z.props.children,B.mode,ee,z.key),L.return=B,B=L):(ee=Ph(z.type,z.key,z.props,null,B.mode,ee),ee.ref=Ql(B,L,z),ee.return=B,B=ee)}return w(B);case we:e:{for(_e=z.key;L!==null;){if(L.key===_e)if(L.tag===4&&L.stateNode.containerInfo===z.containerInfo&&L.stateNode.implementation===z.implementation){u(B,L.sibling),L=m(L,z.children||[]),L.return=B,B=L;break e}else{u(B,L);break}else o(B,L);L=L.sibling}L=am(z,B.mode,ee),L.return=B,B=L}return w(B);case Jt:return _e=z._init,gt(B,L,_e(z._payload),ee)}if(Xr(z))return he(B,L,z,ee);if(ge(z))return de(B,L,z,ee);ih(B,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,L!==null&&L.tag===6?(u(B,L.sibling),L=m(L,z),L.return=B,B=L):(u(B,L),L=om(z,B.mode,ee),L.return=B,B=L),w(B)):u(B,L)}return gt}var ya=fv(!0),pv=fv(!1),sh=Bi(null),oh=null,va=null,gp=null;function _p(){gp=va=oh=null}function yp(s){var o=sh.current;it(sh),s._currentValue=o}function vp(s,o,u){for(;s!==null;){var d=s.alternate;if((s.childLanes&o)!==o?(s.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),s===u)break;s=s.return}}function Ea(s,o){oh=s,gp=va=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&o)!==0&&(vn=!0),s.firstContext=null)}function Yn(s){var o=s._currentValue;if(gp!==s)if(s={context:s,memoizedValue:o,next:null},va===null){if(oh===null)throw Error(t(308));va=s,oh.dependencies={lanes:0,firstContext:s}}else va=va.next=s;return o}var Ys=null;function Ep(s){Ys===null?Ys=[s]:Ys.push(s)}function mv(s,o,u,d){var m=o.interleaved;return m===null?(u.next=u,Ep(o)):(u.next=m.next,m.next=u),o.interleaved=u,hi(s,d)}function hi(s,o){s.lanes|=o;var u=s.alternate;for(u!==null&&(u.lanes|=o),u=s,s=s.return;s!==null;)s.childLanes|=o,u=s.alternate,u!==null&&(u.childLanes|=o),u=s,s=s.return;return u.tag===3?u.stateNode:null}var Wi=!1;function wp(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(s,o){s=s.updateQueue,o.updateQueue===s&&(o.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function di(s,o){return{eventTime:s,lane:o,tag:0,payload:null,callback:null,next:null}}function Hi(s,o,u){var d=s.updateQueue;if(d===null)return null;if(d=d.shared,(ze&2)!==0){var m=d.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),d.pending=o,hi(s,u)}return m=d.interleaved,m===null?(o.next=o,Ep(d)):(o.next=m.next,m.next=o),d.interleaved=o,hi(s,u)}function ah(s,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Di(s,u)}}function _v(s,o){var u=s.updateQueue,d=s.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var m=null,_=null;if(u=u.firstBaseUpdate,u!==null){do{var w={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};_===null?m=_=w:_=_.next=w,u=u.next}while(u!==null);_===null?m=_=o:_=_.next=o}else m=_=o;u={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:d.shared,effects:d.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=o:s.next=o,u.lastBaseUpdate=o}function lh(s,o,u,d){var m=s.updateQueue;Wi=!1;var _=m.firstBaseUpdate,w=m.lastBaseUpdate,C=m.shared.pending;if(C!==null){m.shared.pending=null;var x=C,$=x.next;x.next=null,w===null?_=$:w.next=$,w=x;var Y=s.alternate;Y!==null&&(Y=Y.updateQueue,C=Y.lastBaseUpdate,C!==w&&(C===null?Y.firstBaseUpdate=$:C.next=$,Y.lastBaseUpdate=x))}if(_!==null){var X=m.baseState;w=0,Y=$=x=null,C=_;do{var Q=C.lane,ae=C.eventTime;if((d&Q)===Q){Y!==null&&(Y=Y.next={eventTime:ae,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var he=s,de=C;switch(Q=o,ae=u,de.tag){case 1:if(he=de.payload,typeof he=="function"){X=he.call(ae,X,Q);break e}X=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,Q=typeof he=="function"?he.call(ae,X,Q):he,Q==null)break e;X=le({},X,Q);break e;case 2:Wi=!0}}C.callback!==null&&C.lane!==0&&(s.flags|=64,Q=m.effects,Q===null?m.effects=[C]:Q.push(C))}else ae={eventTime:ae,lane:Q,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Y===null?($=Y=ae,x=X):Y=Y.next=ae,w|=Q;if(C=C.next,C===null){if(C=m.shared.pending,C===null)break;Q=C,C=Q.next,Q.next=null,m.lastBaseUpdate=Q,m.shared.pending=null}}while(!0);if(Y===null&&(x=X),m.baseState=x,m.firstBaseUpdate=$,m.lastBaseUpdate=Y,o=m.shared.interleaved,o!==null){m=o;do w|=m.lane,m=m.next;while(m!==o)}else _===null&&(m.shared.lanes=0);Zs|=w,s.lanes=w,s.memoizedState=X}}function yv(s,o,u){if(s=o.effects,o.effects=null,s!==null)for(o=0;o<s.length;o++){var d=s[o],m=d.callback;if(m!==null){if(d.callback=null,d=u,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var Yl={},Mr=Bi(Yl),Jl=Bi(Yl),Xl=Bi(Yl);function Js(s){if(s===Yl)throw Error(t(174));return s}function Tp(s,o){switch(et(Xl,o),et(Jl,s),et(Mr,Yl),s=o.nodeType,s){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Rt(null,"");break;default:s=s===8?o.parentNode:o,o=s.namespaceURI||null,s=s.tagName,o=Rt(o,s)}it(Mr),et(Mr,o)}function wa(){it(Mr),it(Jl),it(Xl)}function vv(s){Js(Xl.current);var o=Js(Mr.current),u=Rt(o,s.type);o!==u&&(et(Jl,s),et(Mr,u))}function Ip(s){Jl.current===s&&(it(Mr),it(Jl))}var ut=Bi(0);function uh(s){for(var o=s;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Sp=[];function Cp(){for(var s=0;s<Sp.length;s++)Sp[s]._workInProgressVersionPrimary=null;Sp.length=0}var ch=oe.ReactCurrentDispatcher,Rp=oe.ReactCurrentBatchConfig,Xs=0,ct=null,Pt=null,Mt=null,hh=!1,Zl=!1,eu=0,OP=0;function Zt(){throw Error(t(321))}function Ap(s,o){if(o===null)return!1;for(var u=0;u<o.length&&u<s.length;u++)if(!hr(s[u],o[u]))return!1;return!0}function Pp(s,o,u,d,m,_){if(Xs=_,ct=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,ch.current=s===null||s.memoizedState===null?VP:FP,s=u(d,m),Zl){_=0;do{if(Zl=!1,eu=0,25<=_)throw Error(t(301));_+=1,Mt=Pt=null,o.updateQueue=null,ch.current=UP,s=u(d,m)}while(Zl)}if(ch.current=ph,o=Pt!==null&&Pt.next!==null,Xs=0,Mt=Pt=ct=null,hh=!1,o)throw Error(t(300));return s}function kp(){var s=eu!==0;return eu=0,s}function Vr(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?ct.memoizedState=Mt=s:Mt=Mt.next=s,Mt}function Jn(){if(Pt===null){var s=ct.alternate;s=s!==null?s.memoizedState:null}else s=Pt.next;var o=Mt===null?ct.memoizedState:Mt.next;if(o!==null)Mt=o,Pt=s;else{if(s===null)throw Error(t(310));Pt=s,s={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Mt===null?ct.memoizedState=Mt=s:Mt=Mt.next=s}return Mt}function tu(s,o){return typeof o=="function"?o(s):o}function Np(s){var o=Jn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=s;var d=Pt,m=d.baseQueue,_=u.pending;if(_!==null){if(m!==null){var w=m.next;m.next=_.next,_.next=w}d.baseQueue=m=_,u.pending=null}if(m!==null){_=m.next,d=d.baseState;var C=w=null,x=null,$=_;do{var Y=$.lane;if((Xs&Y)===Y)x!==null&&(x=x.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),d=$.hasEagerState?$.eagerState:s(d,$.action);else{var X={lane:Y,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};x===null?(C=x=X,w=d):x=x.next=X,ct.lanes|=Y,Zs|=Y}$=$.next}while($!==null&&$!==_);x===null?w=d:x.next=C,hr(d,o.memoizedState)||(vn=!0),o.memoizedState=d,o.baseState=w,o.baseQueue=x,u.lastRenderedState=d}if(s=u.interleaved,s!==null){m=s;do _=m.lane,ct.lanes|=_,Zs|=_,m=m.next;while(m!==s)}else m===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function xp(s){var o=Jn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=s;var d=u.dispatch,m=u.pending,_=o.memoizedState;if(m!==null){u.pending=null;var w=m=m.next;do _=s(_,w.action),w=w.next;while(w!==m);hr(_,o.memoizedState)||(vn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),u.lastRenderedState=_}return[_,d]}function Ev(){}function wv(s,o){var u=ct,d=Jn(),m=o(),_=!hr(d.memoizedState,m);if(_&&(d.memoizedState=m,vn=!0),d=d.queue,bp(Sv.bind(null,u,d,s),[s]),d.getSnapshot!==o||_||Mt!==null&&Mt.memoizedState.tag&1){if(u.flags|=2048,nu(9,Iv.bind(null,u,d,m,o),void 0,null),Vt===null)throw Error(t(349));(Xs&30)!==0||Tv(u,o,m)}return m}function Tv(s,o,u){s.flags|=16384,s={getSnapshot:o,value:u},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.stores=[s]):(u=o.stores,u===null?o.stores=[s]:u.push(s))}function Iv(s,o,u,d){o.value=u,o.getSnapshot=d,Cv(o)&&Rv(s)}function Sv(s,o,u){return u(function(){Cv(o)&&Rv(s)})}function Cv(s){var o=s.getSnapshot;s=s.value;try{var u=o();return!hr(s,u)}catch{return!0}}function Rv(s){var o=hi(s,1);o!==null&&gr(o,s,1,-1)}function Av(s){var o=Vr();return typeof s=="function"&&(s=s()),o.memoizedState=o.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tu,lastRenderedState:s},o.queue=s,s=s.dispatch=MP.bind(null,ct,s),[o.memoizedState,s]}function nu(s,o,u,d){return s={tag:s,create:o,destroy:u,deps:d,next:null},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.lastEffect=s.next=s):(u=o.lastEffect,u===null?o.lastEffect=s.next=s:(d=u.next,u.next=s,s.next=d,o.lastEffect=s)),s}function Pv(){return Jn().memoizedState}function dh(s,o,u,d){var m=Vr();ct.flags|=s,m.memoizedState=nu(1|o,u,void 0,d===void 0?null:d)}function fh(s,o,u,d){var m=Jn();d=d===void 0?null:d;var _=void 0;if(Pt!==null){var w=Pt.memoizedState;if(_=w.destroy,d!==null&&Ap(d,w.deps)){m.memoizedState=nu(o,u,_,d);return}}ct.flags|=s,m.memoizedState=nu(1|o,u,_,d)}function kv(s,o){return dh(8390656,8,s,o)}function bp(s,o){return fh(2048,8,s,o)}function Nv(s,o){return fh(4,2,s,o)}function xv(s,o){return fh(4,4,s,o)}function bv(s,o){if(typeof o=="function")return s=s(),o(s),function(){o(null)};if(o!=null)return s=s(),o.current=s,function(){o.current=null}}function Ov(s,o,u){return u=u!=null?u.concat([s]):null,fh(4,4,bv.bind(null,o,s),u)}function Op(){}function Dv(s,o){var u=Jn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&Ap(o,d[1])?d[0]:(u.memoizedState=[s,o],s)}function Lv(s,o){var u=Jn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&Ap(o,d[1])?d[0]:(s=s(),u.memoizedState=[s,o],s)}function Mv(s,o,u){return(Xs&21)===0?(s.baseState&&(s.baseState=!1,vn=!0),s.memoizedState=u):(hr(u,o)||(u=Bs(),ct.lanes|=u,Zs|=u,s.baseState=!0),o)}function DP(s,o){var u=Fe;Fe=u!==0&&4>u?u:4,s(!0);var d=Rp.transition;Rp.transition={};try{s(!1),o()}finally{Fe=u,Rp.transition=d}}function Vv(){return Jn().memoizedState}function LP(s,o,u){var d=Qi(s);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},Fv(s))Uv(o,u);else if(u=mv(s,o,u,d),u!==null){var m=dn();gr(u,s,d,m),jv(u,o,d)}}function MP(s,o,u){var d=Qi(s),m={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(Fv(s))Uv(o,m);else{var _=s.alternate;if(s.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,C=_(w,u);if(m.hasEagerState=!0,m.eagerState=C,hr(C,w)){var x=o.interleaved;x===null?(m.next=m,Ep(o)):(m.next=x.next,x.next=m),o.interleaved=m;return}}catch{}finally{}u=mv(s,o,m,d),u!==null&&(m=dn(),gr(u,s,d,m),jv(u,o,d))}}function Fv(s){var o=s.alternate;return s===ct||o!==null&&o===ct}function Uv(s,o){Zl=hh=!0;var u=s.pending;u===null?o.next=o:(o.next=u.next,u.next=o),s.pending=o}function jv(s,o,u){if((u&4194240)!==0){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Di(s,u)}}var ph={readContext:Yn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},VP={readContext:Yn,useCallback:function(s,o){return Vr().memoizedState=[s,o===void 0?null:o],s},useContext:Yn,useEffect:kv,useImperativeHandle:function(s,o,u){return u=u!=null?u.concat([s]):null,dh(4194308,4,bv.bind(null,o,s),u)},useLayoutEffect:function(s,o){return dh(4194308,4,s,o)},useInsertionEffect:function(s,o){return dh(4,2,s,o)},useMemo:function(s,o){var u=Vr();return o=o===void 0?null:o,s=s(),u.memoizedState=[s,o],s},useReducer:function(s,o,u){var d=Vr();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:o},d.queue=s,s=s.dispatch=LP.bind(null,ct,s),[d.memoizedState,s]},useRef:function(s){var o=Vr();return s={current:s},o.memoizedState=s},useState:Av,useDebugValue:Op,useDeferredValue:function(s){return Vr().memoizedState=s},useTransition:function(){var s=Av(!1),o=s[0];return s=DP.bind(null,s[1]),Vr().memoizedState=s,[o,s]},useMutableSource:function(){},useSyncExternalStore:function(s,o,u){var d=ct,m=Vr();if(at){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),Vt===null)throw Error(t(349));(Xs&30)!==0||Tv(d,o,u)}m.memoizedState=u;var _={value:u,getSnapshot:o};return m.queue=_,kv(Sv.bind(null,d,_,s),[s]),d.flags|=2048,nu(9,Iv.bind(null,d,_,u,o),void 0,null),u},useId:function(){var s=Vr(),o=Vt.identifierPrefix;if(at){var u=ci,d=ui;u=(d&~(1<<32-un(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=eu++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=OP++,o=":"+o+"r"+u.toString(32)+":";return s.memoizedState=o},unstable_isNewReconciler:!1},FP={readContext:Yn,useCallback:Dv,useContext:Yn,useEffect:bp,useImperativeHandle:Ov,useInsertionEffect:Nv,useLayoutEffect:xv,useMemo:Lv,useReducer:Np,useRef:Pv,useState:function(){return Np(tu)},useDebugValue:Op,useDeferredValue:function(s){var o=Jn();return Mv(o,Pt.memoizedState,s)},useTransition:function(){var s=Np(tu)[0],o=Jn().memoizedState;return[s,o]},useMutableSource:Ev,useSyncExternalStore:wv,useId:Vv,unstable_isNewReconciler:!1},UP={readContext:Yn,useCallback:Dv,useContext:Yn,useEffect:bp,useImperativeHandle:Ov,useInsertionEffect:Nv,useLayoutEffect:xv,useMemo:Lv,useReducer:xp,useRef:Pv,useState:function(){return xp(tu)},useDebugValue:Op,useDeferredValue:function(s){var o=Jn();return Pt===null?o.memoizedState=s:Mv(o,Pt.memoizedState,s)},useTransition:function(){var s=xp(tu)[0],o=Jn().memoizedState;return[s,o]},useMutableSource:Ev,useSyncExternalStore:wv,useId:Vv,unstable_isNewReconciler:!1};function fr(s,o){if(s&&s.defaultProps){o=le({},o),s=s.defaultProps;for(var u in s)o[u]===void 0&&(o[u]=s[u]);return o}return o}function Dp(s,o,u,d){o=s.memoizedState,u=u(d,o),u=u==null?o:le({},o,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var mh={isMounted:function(s){return(s=s._reactInternals)?ir(s)===s:!1},enqueueSetState:function(s,o,u){s=s._reactInternals;var d=dn(),m=Qi(s),_=di(d,m);_.payload=o,u!=null&&(_.callback=u),o=Hi(s,_,m),o!==null&&(gr(o,s,m,d),ah(o,s,m))},enqueueReplaceState:function(s,o,u){s=s._reactInternals;var d=dn(),m=Qi(s),_=di(d,m);_.tag=1,_.payload=o,u!=null&&(_.callback=u),o=Hi(s,_,m),o!==null&&(gr(o,s,m,d),ah(o,s,m))},enqueueForceUpdate:function(s,o){s=s._reactInternals;var u=dn(),d=Qi(s),m=di(u,d);m.tag=2,o!=null&&(m.callback=o),o=Hi(s,m,d),o!==null&&(gr(o,s,d,u),ah(o,s,d))}};function Bv(s,o,u,d,m,_,w){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(d,_,w):o.prototype&&o.prototype.isPureReactComponent?!zl(u,d)||!zl(m,_):!0}function zv(s,o,u){var d=!1,m=zi,_=o.contextType;return typeof _=="object"&&_!==null?_=Yn(_):(m=yn(o)?Gs:Xt.current,d=o.contextTypes,_=(d=d!=null)?pa(s,m):zi),o=new o(u,_),s.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=mh,s.stateNode=o,o._reactInternals=s,d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=m,s.__reactInternalMemoizedMaskedChildContext=_),o}function $v(s,o,u,d){s=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==s&&mh.enqueueReplaceState(o,o.state,null)}function Lp(s,o,u,d){var m=s.stateNode;m.props=u,m.state=s.memoizedState,m.refs={},wp(s);var _=o.contextType;typeof _=="object"&&_!==null?m.context=Yn(_):(_=yn(o)?Gs:Xt.current,m.context=pa(s,_)),m.state=s.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Dp(s,o,_,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&mh.enqueueReplaceState(m,m.state,null),lh(s,u,m,d),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308)}function Ta(s,o){try{var u="",d=o;do u+=xe(d),d=d.return;while(d);var m=u}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:s,source:o,stack:m,digest:null}}function Mp(s,o,u){return{value:s,source:null,stack:u??null,digest:o??null}}function Vp(s,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var jP=typeof WeakMap=="function"?WeakMap:Map;function Wv(s,o,u){u=di(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){Th||(Th=!0,Xp=d),Vp(s,o)},u}function Hv(s,o,u){u=di(-1,u),u.tag=3;var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=o.value;u.payload=function(){return d(m)},u.callback=function(){Vp(s,o)}}var _=s.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(u.callback=function(){Vp(s,o),typeof d!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),u}function qv(s,o,u){var d=s.pingCache;if(d===null){d=s.pingCache=new jP;var m=new Set;d.set(o,m)}else m=d.get(o),m===void 0&&(m=new Set,d.set(o,m));m.has(u)||(m.add(u),s=ek.bind(null,s,o,u),o.then(s,s))}function Gv(s){do{var o;if((o=s.tag===13)&&(o=s.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return s;s=s.return}while(s!==null);return null}function Kv(s,o,u,d,m){return(s.mode&1)===0?(s===o?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=di(-1,1),o.tag=2,Hi(u,o,1))),u.lanes|=1),s):(s.flags|=65536,s.lanes=m,s)}var BP=oe.ReactCurrentOwner,vn=!1;function hn(s,o,u,d){o.child=s===null?pv(o,null,u,d):ya(o,s.child,u,d)}function Qv(s,o,u,d,m){u=u.render;var _=o.ref;return Ea(o,m),d=Pp(s,o,u,d,_,m),u=kp(),s!==null&&!vn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~m,fi(s,o,m)):(at&&u&&hp(o),o.flags|=1,hn(s,o,d,m),o.child)}function Yv(s,o,u,d,m){if(s===null){var _=u.type;return typeof _=="function"&&!sm(_)&&_.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=_,Jv(s,o,_,d,m)):(s=Ph(u.type,null,d,o,o.mode,m),s.ref=o.ref,s.return=o,o.child=s)}if(_=s.child,(s.lanes&m)===0){var w=_.memoizedProps;if(u=u.compare,u=u!==null?u:zl,u(w,d)&&s.ref===o.ref)return fi(s,o,m)}return o.flags|=1,s=Ji(_,d),s.ref=o.ref,s.return=o,o.child=s}function Jv(s,o,u,d,m){if(s!==null){var _=s.memoizedProps;if(zl(_,d)&&s.ref===o.ref)if(vn=!1,o.pendingProps=d=_,(s.lanes&m)!==0)(s.flags&131072)!==0&&(vn=!0);else return o.lanes=s.lanes,fi(s,o,m)}return Fp(s,o,u,d,m)}function Xv(s,o,u){var d=o.pendingProps,m=d.children,_=s!==null?s.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Sa,Un),Un|=u;else{if((u&1073741824)===0)return s=_!==null?_.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:s,cachePool:null,transitions:null},o.updateQueue=null,et(Sa,Un),Un|=s,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:u,et(Sa,Un),Un|=d}else _!==null?(d=_.baseLanes|u,o.memoizedState=null):d=u,et(Sa,Un),Un|=d;return hn(s,o,m,u),o.child}function Zv(s,o){var u=o.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Fp(s,o,u,d,m){var _=yn(u)?Gs:Xt.current;return _=pa(o,_),Ea(o,m),u=Pp(s,o,u,d,_,m),d=kp(),s!==null&&!vn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~m,fi(s,o,m)):(at&&d&&hp(o),o.flags|=1,hn(s,o,u,m),o.child)}function eE(s,o,u,d,m){if(yn(u)){var _=!0;Zc(o)}else _=!1;if(Ea(o,m),o.stateNode===null)_h(s,o),zv(o,u,d),Lp(o,u,d,m),d=!0;else if(s===null){var w=o.stateNode,C=o.memoizedProps;w.props=C;var x=w.context,$=u.contextType;typeof $=="object"&&$!==null?$=Yn($):($=yn(u)?Gs:Xt.current,$=pa(o,$));var Y=u.getDerivedStateFromProps,X=typeof Y=="function"||typeof w.getSnapshotBeforeUpdate=="function";X||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==d||x!==$)&&$v(o,w,d,$),Wi=!1;var Q=o.memoizedState;w.state=Q,lh(o,d,w,m),x=o.memoizedState,C!==d||Q!==x||_n.current||Wi?(typeof Y=="function"&&(Dp(o,u,Y,d),x=o.memoizedState),(C=Wi||Bv(o,u,C,d,Q,x,$))?(X||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=x),w.props=d,w.state=x,w.context=$,d=C):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{w=o.stateNode,gv(s,o),C=o.memoizedProps,$=o.type===o.elementType?C:fr(o.type,C),w.props=$,X=o.pendingProps,Q=w.context,x=u.contextType,typeof x=="object"&&x!==null?x=Yn(x):(x=yn(u)?Gs:Xt.current,x=pa(o,x));var ae=u.getDerivedStateFromProps;(Y=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==X||Q!==x)&&$v(o,w,d,x),Wi=!1,Q=o.memoizedState,w.state=Q,lh(o,d,w,m);var he=o.memoizedState;C!==X||Q!==he||_n.current||Wi?(typeof ae=="function"&&(Dp(o,u,ae,d),he=o.memoizedState),($=Wi||Bv(o,u,$,d,Q,he,x)||!1)?(Y||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,he,x),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,he,x)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===s.memoizedProps&&Q===s.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===s.memoizedProps&&Q===s.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=he),w.props=d,w.state=he,w.context=x,d=$):(typeof w.componentDidUpdate!="function"||C===s.memoizedProps&&Q===s.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===s.memoizedProps&&Q===s.memoizedState||(o.flags|=1024),d=!1)}return Up(s,o,u,d,_,m)}function Up(s,o,u,d,m,_){Zv(s,o);var w=(o.flags&128)!==0;if(!d&&!w)return m&&sv(o,u,!1),fi(s,o,_);d=o.stateNode,BP.current=o;var C=w&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,s!==null&&w?(o.child=ya(o,s.child,null,_),o.child=ya(o,null,C,_)):hn(s,o,C,_),o.memoizedState=d.state,m&&sv(o,u,!0),o.child}function tE(s){var o=s.stateNode;o.pendingContext?rv(s,o.pendingContext,o.pendingContext!==o.context):o.context&&rv(s,o.context,!1),Tp(s,o.containerInfo)}function nE(s,o,u,d,m){return _a(),mp(m),o.flags|=256,hn(s,o,u,d),o.child}var jp={dehydrated:null,treeContext:null,retryLane:0};function Bp(s){return{baseLanes:s,cachePool:null,transitions:null}}function rE(s,o,u){var d=o.pendingProps,m=ut.current,_=!1,w=(o.flags&128)!==0,C;if((C=w)||(C=s!==null&&s.memoizedState===null?!1:(m&2)!==0),C?(_=!0,o.flags&=-129):(s===null||s.memoizedState!==null)&&(m|=1),et(ut,m&1),s===null)return pp(o),s=o.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((o.mode&1)===0?o.lanes=1:s.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=d.children,s=d.fallback,_?(d=o.mode,_=o.child,w={mode:"hidden",children:w},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=kh(w,d,0,null),s=ro(s,d,u,null),_.return=o,s.return=o,_.sibling=s,o.child=_,o.child.memoizedState=Bp(u),o.memoizedState=jp,s):zp(o,w));if(m=s.memoizedState,m!==null&&(C=m.dehydrated,C!==null))return zP(s,o,w,d,C,m,u);if(_){_=d.fallback,w=o.mode,m=s.child,C=m.sibling;var x={mode:"hidden",children:d.children};return(w&1)===0&&o.child!==m?(d=o.child,d.childLanes=0,d.pendingProps=x,o.deletions=null):(d=Ji(m,x),d.subtreeFlags=m.subtreeFlags&14680064),C!==null?_=Ji(C,_):(_=ro(_,w,u,null),_.flags|=2),_.return=o,d.return=o,d.sibling=_,o.child=d,d=_,_=o.child,w=s.child.memoizedState,w=w===null?Bp(u):{baseLanes:w.baseLanes|u,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=s.childLanes&~u,o.memoizedState=jp,d}return _=s.child,s=_.sibling,d=Ji(_,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=u),d.return=o,d.sibling=null,s!==null&&(u=o.deletions,u===null?(o.deletions=[s],o.flags|=16):u.push(s)),o.child=d,o.memoizedState=null,d}function zp(s,o){return o=kh({mode:"visible",children:o},s.mode,0,null),o.return=s,s.child=o}function gh(s,o,u,d){return d!==null&&mp(d),ya(o,s.child,null,u),s=zp(o,o.pendingProps.children),s.flags|=2,o.memoizedState=null,s}function zP(s,o,u,d,m,_,w){if(u)return o.flags&256?(o.flags&=-257,d=Mp(Error(t(422))),gh(s,o,w,d)):o.memoizedState!==null?(o.child=s.child,o.flags|=128,null):(_=d.fallback,m=o.mode,d=kh({mode:"visible",children:d.children},m,0,null),_=ro(_,m,w,null),_.flags|=2,d.return=o,_.return=o,d.sibling=_,o.child=d,(o.mode&1)!==0&&ya(o,s.child,null,w),o.child.memoizedState=Bp(w),o.memoizedState=jp,_);if((o.mode&1)===0)return gh(s,o,w,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var C=d.dgst;return d=C,_=Error(t(419)),d=Mp(_,d,void 0),gh(s,o,w,d)}if(C=(w&s.childLanes)!==0,vn||C){if(d=Vt,d!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|w))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,hi(s,m),gr(d,s,m,-1))}return im(),d=Mp(Error(t(421))),gh(s,o,w,d)}return m.data==="$?"?(o.flags|=128,o.child=s.child,o=tk.bind(null,s),m._reactRetry=o,null):(s=_.treeContext,Fn=ji(m.nextSibling),Vn=o,at=!0,dr=null,s!==null&&(Kn[Qn++]=ui,Kn[Qn++]=ci,Kn[Qn++]=Ks,ui=s.id,ci=s.overflow,Ks=o),o=zp(o,d.children),o.flags|=4096,o)}function iE(s,o,u){s.lanes|=o;var d=s.alternate;d!==null&&(d.lanes|=o),vp(s.return,o,u)}function $p(s,o,u,d,m){var _=s.memoizedState;_===null?s.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:m}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=u,_.tailMode=m)}function sE(s,o,u){var d=o.pendingProps,m=d.revealOrder,_=d.tail;if(hn(s,o,d.children,u),d=ut.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=o.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&iE(s,u,o);else if(s.tag===19)iE(s,u,o);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break e;for(;s.sibling===null;){if(s.return===null||s.return===o)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}d&=1}if(et(ut,d),(o.mode&1)===0)o.memoizedState=null;else switch(m){case"forwards":for(u=o.child,m=null;u!==null;)s=u.alternate,s!==null&&uh(s)===null&&(m=u),u=u.sibling;u=m,u===null?(m=o.child,o.child=null):(m=u.sibling,u.sibling=null),$p(o,!1,m,u,_);break;case"backwards":for(u=null,m=o.child,o.child=null;m!==null;){if(s=m.alternate,s!==null&&uh(s)===null){o.child=m;break}s=m.sibling,m.sibling=u,u=m,m=s}$p(o,!0,u,null,_);break;case"together":$p(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function _h(s,o){(o.mode&1)===0&&s!==null&&(s.alternate=null,o.alternate=null,o.flags|=2)}function fi(s,o,u){if(s!==null&&(o.dependencies=s.dependencies),Zs|=o.lanes,(u&o.childLanes)===0)return null;if(s!==null&&o.child!==s.child)throw Error(t(153));if(o.child!==null){for(s=o.child,u=Ji(s,s.pendingProps),o.child=u,u.return=o;s.sibling!==null;)s=s.sibling,u=u.sibling=Ji(s,s.pendingProps),u.return=o;u.sibling=null}return o.child}function $P(s,o,u){switch(o.tag){case 3:tE(o),_a();break;case 5:vv(o);break;case 1:yn(o.type)&&Zc(o);break;case 4:Tp(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,m=o.memoizedProps.value;et(sh,d._currentValue),d._currentValue=m;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(et(ut,ut.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?rE(s,o,u):(et(ut,ut.current&1),s=fi(s,o,u),s!==null?s.sibling:null);et(ut,ut.current&1);break;case 19:if(d=(u&o.childLanes)!==0,(s.flags&128)!==0){if(d)return sE(s,o,u);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),et(ut,ut.current),d)break;return null;case 22:case 23:return o.lanes=0,Xv(s,o,u)}return fi(s,o,u)}var oE,Wp,aE,lE;oE=function(s,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Wp=function(){},aE=function(s,o,u,d){var m=s.memoizedProps;if(m!==d){s=o.stateNode,Js(Mr.current);var _=null;switch(u){case"input":m=Ns(s,m),d=Ns(s,d),_=[];break;case"select":m=le({},m,{value:void 0}),d=le({},d,{value:void 0}),_=[];break;case"textarea":m=_l(s,m),d=_l(s,d),_=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(s.onclick=Yc)}Il(u,d);var w;u=null;for($ in m)if(!d.hasOwnProperty($)&&m.hasOwnProperty($)&&m[$]!=null)if($==="style"){var C=m[$];for(w in C)C.hasOwnProperty(w)&&(u||(u={}),u[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(i.hasOwnProperty($)?_||(_=[]):(_=_||[]).push($,null));for($ in d){var x=d[$];if(C=m!=null?m[$]:void 0,d.hasOwnProperty($)&&x!==C&&(x!=null||C!=null))if($==="style")if(C){for(w in C)!C.hasOwnProperty(w)||x&&x.hasOwnProperty(w)||(u||(u={}),u[w]="");for(w in x)x.hasOwnProperty(w)&&C[w]!==x[w]&&(u||(u={}),u[w]=x[w])}else u||(_||(_=[]),_.push($,u)),u=x;else $==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,C=C?C.__html:void 0,x!=null&&C!==x&&(_=_||[]).push($,x)):$==="children"?typeof x!="string"&&typeof x!="number"||(_=_||[]).push($,""+x):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(i.hasOwnProperty($)?(x!=null&&$==="onScroll"&&rt("scroll",s),_||C===x||(_=[])):(_=_||[]).push($,x))}u&&(_=_||[]).push("style",u);var $=_;(o.updateQueue=$)&&(o.flags|=4)}},lE=function(s,o,u,d){u!==d&&(o.flags|=4)};function ru(s,o){if(!at)switch(s.tailMode){case"hidden":o=s.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||s.tail===null?s.tail=null:s.tail.sibling=null:d.sibling=null}}function en(s){var o=s.alternate!==null&&s.alternate.child===s.child,u=0,d=0;if(o)for(var m=s.child;m!==null;)u|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=s,m=m.sibling;else for(m=s.child;m!==null;)u|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=s,m=m.sibling;return s.subtreeFlags|=d,s.childLanes=u,o}function WP(s,o,u){var d=o.pendingProps;switch(dp(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(o),null;case 1:return yn(o.type)&&Xc(),en(o),null;case 3:return d=o.stateNode,wa(),it(_n),it(Xt),Cp(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(s===null||s.child===null)&&(rh(o)?o.flags|=4:s===null||s.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,dr!==null&&(tm(dr),dr=null))),Wp(s,o),en(o),null;case 5:Ip(o);var m=Js(Xl.current);if(u=o.type,s!==null&&o.stateNode!=null)aE(s,o,u,d,m),s.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return en(o),null}if(s=Js(Mr.current),rh(o)){d=o.stateNode,u=o.type;var _=o.memoizedProps;switch(d[Lr]=o,d[Gl]=_,s=(o.mode&1)!==0,u){case"dialog":rt("cancel",d),rt("close",d);break;case"iframe":case"object":case"embed":rt("load",d);break;case"video":case"audio":for(m=0;m<Wl.length;m++)rt(Wl[m],d);break;case"source":rt("error",d);break;case"img":case"image":case"link":rt("error",d),rt("load",d);break;case"details":rt("toggle",d);break;case"input":Mo(d,_),rt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},rt("invalid",d);break;case"textarea":Fo(d,_),rt("invalid",d)}Il(u,_),m=null;for(var w in _)if(_.hasOwnProperty(w)){var C=_[w];w==="children"?typeof C=="string"?d.textContent!==C&&(_.suppressHydrationWarning!==!0&&Qc(d.textContent,C,s),m=["children",C]):typeof C=="number"&&d.textContent!==""+C&&(_.suppressHydrationWarning!==!0&&Qc(d.textContent,C,s),m=["children",""+C]):i.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&rt("scroll",d)}switch(u){case"input":Jr(d),wc(d,_,!0);break;case"textarea":Jr(d),yl(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=Yc)}d=m,o.updateQueue=d,d!==null&&(o.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=Ct(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=w.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof d.is=="string"?s=w.createElement(u,{is:d.is}):(s=w.createElement(u),u==="select"&&(w=s,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):s=w.createElementNS(s,u),s[Lr]=o,s[Gl]=d,oE(s,o,!1,!1),o.stateNode=s;e:{switch(w=Sl(u,d),u){case"dialog":rt("cancel",s),rt("close",s),m=d;break;case"iframe":case"object":case"embed":rt("load",s),m=d;break;case"video":case"audio":for(m=0;m<Wl.length;m++)rt(Wl[m],s);m=d;break;case"source":rt("error",s),m=d;break;case"img":case"image":case"link":rt("error",s),rt("load",s),m=d;break;case"details":rt("toggle",s),m=d;break;case"input":Mo(s,d),m=Ns(s,d),rt("invalid",s);break;case"option":m=d;break;case"select":s._wrapperState={wasMultiple:!!d.multiple},m=le({},d,{value:void 0}),rt("invalid",s);break;case"textarea":Fo(s,d),m=_l(s,d),rt("invalid",s);break;default:m=d}Il(u,m),C=m;for(_ in C)if(C.hasOwnProperty(_)){var x=C[_];_==="style"?wl(s,x):_==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&vl(s,x)):_==="children"?typeof x=="string"?(u!=="textarea"||x!=="")&&ki(s,x):typeof x=="number"&&ki(s,""+x):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(i.hasOwnProperty(_)?x!=null&&_==="onScroll"&&rt("scroll",s):x!=null&&Z(s,_,x,w))}switch(u){case"input":Jr(s),wc(s,d,!1);break;case"textarea":Jr(s),yl(s);break;case"option":d.value!=null&&s.setAttribute("value",""+He(d.value));break;case"select":s.multiple=!!d.multiple,_=d.value,_!=null?Zr(s,!!d.multiple,_,!1):d.defaultValue!=null&&Zr(s,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(s.onclick=Yc)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return en(o),null;case 6:if(s&&o.stateNode!=null)lE(s,o,s.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(u=Js(Xl.current),Js(Mr.current),rh(o)){if(d=o.stateNode,u=o.memoizedProps,d[Lr]=o,(_=d.nodeValue!==u)&&(s=Vn,s!==null))switch(s.tag){case 3:Qc(d.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&Qc(d.nodeValue,u,(s.mode&1)!==0)}_&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[Lr]=o,o.stateNode=d}return en(o),null;case 13:if(it(ut),d=o.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(at&&Fn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)hv(),_a(),o.flags|=98560,_=!1;else if(_=rh(o),d!==null&&d.dehydrated!==null){if(s===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Lr]=o}else _a(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;en(o),_=!1}else dr!==null&&(tm(dr),dr=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(d=d!==null,d!==(s!==null&&s.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(s===null||(ut.current&1)!==0?kt===0&&(kt=3):im())),o.updateQueue!==null&&(o.flags|=4),en(o),null);case 4:return wa(),Wp(s,o),s===null&&Hl(o.stateNode.containerInfo),en(o),null;case 10:return yp(o.type._context),en(o),null;case 17:return yn(o.type)&&Xc(),en(o),null;case 19:if(it(ut),_=o.memoizedState,_===null)return en(o),null;if(d=(o.flags&128)!==0,w=_.rendering,w===null)if(d)ru(_,!1);else{if(kt!==0||s!==null&&(s.flags&128)!==0)for(s=o.child;s!==null;){if(w=uh(s),w!==null){for(o.flags|=128,ru(_,!1),d=w.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)_=u,s=d,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=s,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,s=w.dependencies,_.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return et(ut,ut.current&1|2),o.child}s=s.sibling}_.tail!==null&&Ze()>Ca&&(o.flags|=128,d=!0,ru(_,!1),o.lanes=4194304)}else{if(!d)if(s=uh(w),s!==null){if(o.flags|=128,d=!0,u=s.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),ru(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!at)return en(o),null}else 2*Ze()-_.renderingStartTime>Ca&&u!==1073741824&&(o.flags|=128,d=!0,ru(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(u=_.last,u!==null?u.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Ze(),o.sibling=null,u=ut.current,et(ut,d?u&1|2:u&1),o):(en(o),null);case 22:case 23:return rm(),d=o.memoizedState!==null,s!==null&&s.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(Un&1073741824)!==0&&(en(o),o.subtreeFlags&6&&(o.flags|=8192)):en(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function HP(s,o){switch(dp(o),o.tag){case 1:return yn(o.type)&&Xc(),s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 3:return wa(),it(_n),it(Xt),Cp(),s=o.flags,(s&65536)!==0&&(s&128)===0?(o.flags=s&-65537|128,o):null;case 5:return Ip(o),null;case 13:if(it(ut),s=o.memoizedState,s!==null&&s.dehydrated!==null){if(o.alternate===null)throw Error(t(340));_a()}return s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 19:return it(ut),null;case 4:return wa(),null;case 10:return yp(o.type._context),null;case 22:case 23:return rm(),null;case 24:return null;default:return null}}var yh=!1,tn=!1,qP=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Ia(s,o){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){ft(s,o,d)}else u.current=null}function Hp(s,o,u){try{u()}catch(d){ft(s,o,d)}}var uE=!1;function GP(s,o){if(rp=Vi,s=By(),Qf(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var m=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{u.nodeType,_.nodeType}catch{u=null;break e}var w=0,C=-1,x=-1,$=0,Y=0,X=s,Q=null;t:for(;;){for(var ae;X!==u||m!==0&&X.nodeType!==3||(C=w+m),X!==_||d!==0&&X.nodeType!==3||(x=w+d),X.nodeType===3&&(w+=X.nodeValue.length),(ae=X.firstChild)!==null;)Q=X,X=ae;for(;;){if(X===s)break t;if(Q===u&&++$===m&&(C=w),Q===_&&++Y===d&&(x=w),(ae=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=ae}u=C===-1||x===-1?null:{start:C,end:x}}else u=null}u=u||{start:0,end:0}}else u=null;for(ip={focusedElem:s,selectionRange:u},Vi=!1,ce=o;ce!==null;)if(o=ce,s=o.child,(o.subtreeFlags&1028)!==0&&s!==null)s.return=o,ce=s;else for(;ce!==null;){o=ce;try{var he=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var de=he.memoizedProps,gt=he.memoizedState,B=o.stateNode,L=B.getSnapshotBeforeUpdate(o.elementType===o.type?de:fr(o.type,de),gt);B.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var z=o.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){ft(o,o.return,ee)}if(s=o.sibling,s!==null){s.return=o.return,ce=s;break}ce=o.return}return he=uE,uE=!1,he}function iu(s,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&s)===s){var _=m.destroy;m.destroy=void 0,_!==void 0&&Hp(o,u,_)}m=m.next}while(m!==d)}}function vh(s,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&s)===s){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function qp(s){var o=s.ref;if(o!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof o=="function"?o(s):o.current=s}}function cE(s){var o=s.alternate;o!==null&&(s.alternate=null,cE(o)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(o=s.stateNode,o!==null&&(delete o[Lr],delete o[Gl],delete o[lp],delete o[kP],delete o[NP])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function hE(s){return s.tag===5||s.tag===3||s.tag===4}function dE(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||hE(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Gp(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(s,o):u.insertBefore(s,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(s,u)):(o=u,o.appendChild(s)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Yc));else if(d!==4&&(s=s.child,s!==null))for(Gp(s,o,u),s=s.sibling;s!==null;)Gp(s,o,u),s=s.sibling}function Kp(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.insertBefore(s,o):u.appendChild(s);else if(d!==4&&(s=s.child,s!==null))for(Kp(s,o,u),s=s.sibling;s!==null;)Kp(s,o,u),s=s.sibling}var Ht=null,pr=!1;function qi(s,o,u){for(u=u.child;u!==null;)fE(s,o,u),u=u.sibling}function fE(s,o,u){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Us,u)}catch{}switch(u.tag){case 5:tn||Ia(u,o);case 6:var d=Ht,m=pr;Ht=null,qi(s,o,u),Ht=d,pr=m,Ht!==null&&(pr?(s=Ht,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):Ht.removeChild(u.stateNode));break;case 18:Ht!==null&&(pr?(s=Ht,u=u.stateNode,s.nodeType===8?ap(s.parentNode,u):s.nodeType===1&&ap(s,u),ur(s)):ap(Ht,u.stateNode));break;case 4:d=Ht,m=pr,Ht=u.stateNode.containerInfo,pr=!0,qi(s,o,u),Ht=d,pr=m;break;case 0:case 11:case 14:case 15:if(!tn&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var _=m,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Hp(u,o,w),m=m.next}while(m!==d)}qi(s,o,u);break;case 1:if(!tn&&(Ia(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(C){ft(u,o,C)}qi(s,o,u);break;case 21:qi(s,o,u);break;case 22:u.mode&1?(tn=(d=tn)||u.memoizedState!==null,qi(s,o,u),tn=d):qi(s,o,u);break;default:qi(s,o,u)}}function pE(s){var o=s.updateQueue;if(o!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new qP),o.forEach(function(d){var m=nk.bind(null,s,d);u.has(d)||(u.add(d),d.then(m,m))})}}function mr(s,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var m=u[d];try{var _=s,w=o,C=w;e:for(;C!==null;){switch(C.tag){case 5:Ht=C.stateNode,pr=!1;break e;case 3:Ht=C.stateNode.containerInfo,pr=!0;break e;case 4:Ht=C.stateNode.containerInfo,pr=!0;break e}C=C.return}if(Ht===null)throw Error(t(160));fE(_,w,m),Ht=null,pr=!1;var x=m.alternate;x!==null&&(x.return=null),m.return=null}catch($){ft(m,o,$)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)mE(o,s),o=o.sibling}function mE(s,o){var u=s.alternate,d=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(mr(o,s),Fr(s),d&4){try{iu(3,s,s.return),vh(3,s)}catch(de){ft(s,s.return,de)}try{iu(5,s,s.return)}catch(de){ft(s,s.return,de)}}break;case 1:mr(o,s),Fr(s),d&512&&u!==null&&Ia(u,u.return);break;case 5:if(mr(o,s),Fr(s),d&512&&u!==null&&Ia(u,u.return),s.flags&32){var m=s.stateNode;try{ki(m,"")}catch(de){ft(s,s.return,de)}}if(d&4&&(m=s.stateNode,m!=null)){var _=s.memoizedProps,w=u!==null?u.memoizedProps:_,C=s.type,x=s.updateQueue;if(s.updateQueue=null,x!==null)try{C==="input"&&_.type==="radio"&&_.name!=null&&ml(m,_),Sl(C,w);var $=Sl(C,_);for(w=0;w<x.length;w+=2){var Y=x[w],X=x[w+1];Y==="style"?wl(m,X):Y==="dangerouslySetInnerHTML"?vl(m,X):Y==="children"?ki(m,X):Z(m,Y,X,$)}switch(C){case"input":gl(m,_);break;case"textarea":Uo(m,_);break;case"select":var Q=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var ae=_.value;ae!=null?Zr(m,!!_.multiple,ae,!1):Q!==!!_.multiple&&(_.defaultValue!=null?Zr(m,!!_.multiple,_.defaultValue,!0):Zr(m,!!_.multiple,_.multiple?[]:"",!1))}m[Gl]=_}catch(de){ft(s,s.return,de)}}break;case 6:if(mr(o,s),Fr(s),d&4){if(s.stateNode===null)throw Error(t(162));m=s.stateNode,_=s.memoizedProps;try{m.nodeValue=_}catch(de){ft(s,s.return,de)}}break;case 3:if(mr(o,s),Fr(s),d&4&&u!==null&&u.memoizedState.isDehydrated)try{ur(o.containerInfo)}catch(de){ft(s,s.return,de)}break;case 4:mr(o,s),Fr(s);break;case 13:mr(o,s),Fr(s),m=s.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Jp=Ze())),d&4&&pE(s);break;case 22:if(Y=u!==null&&u.memoizedState!==null,s.mode&1?(tn=($=tn)||Y,mr(o,s),tn=$):mr(o,s),Fr(s),d&8192){if($=s.memoizedState!==null,(s.stateNode.isHidden=$)&&!Y&&(s.mode&1)!==0)for(ce=s,Y=s.child;Y!==null;){for(X=ce=Y;ce!==null;){switch(Q=ce,ae=Q.child,Q.tag){case 0:case 11:case 14:case 15:iu(4,Q,Q.return);break;case 1:Ia(Q,Q.return);var he=Q.stateNode;if(typeof he.componentWillUnmount=="function"){d=Q,u=Q.return;try{o=d,he.props=o.memoizedProps,he.state=o.memoizedState,he.componentWillUnmount()}catch(de){ft(d,u,de)}}break;case 5:Ia(Q,Q.return);break;case 22:if(Q.memoizedState!==null){yE(X);continue}}ae!==null?(ae.return=Q,ce=ae):yE(X)}Y=Y.sibling}e:for(Y=null,X=s;;){if(X.tag===5){if(Y===null){Y=X;try{m=X.stateNode,$?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(C=X.stateNode,x=X.memoizedProps.style,w=x!=null&&x.hasOwnProperty("display")?x.display:null,C.style.display=El("display",w))}catch(de){ft(s,s.return,de)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=$?"":X.memoizedProps}catch(de){ft(s,s.return,de)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===s)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===s)break e;for(;X.sibling===null;){if(X.return===null||X.return===s)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:mr(o,s),Fr(s),d&4&&pE(s);break;case 21:break;default:mr(o,s),Fr(s)}}function Fr(s){var o=s.flags;if(o&2){try{e:{for(var u=s.return;u!==null;){if(hE(u)){var d=u;break e}u=u.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(ki(m,""),d.flags&=-33);var _=dE(s);Kp(s,_,m);break;case 3:case 4:var w=d.stateNode.containerInfo,C=dE(s);Gp(s,C,w);break;default:throw Error(t(161))}}catch(x){ft(s,s.return,x)}s.flags&=-3}o&4096&&(s.flags&=-4097)}function KP(s,o,u){ce=s,gE(s)}function gE(s,o,u){for(var d=(s.mode&1)!==0;ce!==null;){var m=ce,_=m.child;if(m.tag===22&&d){var w=m.memoizedState!==null||yh;if(!w){var C=m.alternate,x=C!==null&&C.memoizedState!==null||tn;C=yh;var $=tn;if(yh=w,(tn=x)&&!$)for(ce=m;ce!==null;)w=ce,x=w.child,w.tag===22&&w.memoizedState!==null?vE(m):x!==null?(x.return=w,ce=x):vE(m);for(;_!==null;)ce=_,gE(_),_=_.sibling;ce=m,yh=C,tn=$}_E(s)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,ce=_):_E(s)}}function _E(s){for(;ce!==null;){var o=ce;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:tn||vh(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!tn)if(u===null)d.componentDidMount();else{var m=o.elementType===o.type?u.memoizedProps:fr(o.type,u.memoizedProps);d.componentDidUpdate(m,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&yv(o,_,d);break;case 3:var w=o.updateQueue;if(w!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}yv(o,w,u)}break;case 5:var C=o.stateNode;if(u===null&&o.flags&4){u=C;var x=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&u.focus();break;case"img":x.src&&(u.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var $=o.alternate;if($!==null){var Y=$.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&ur(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}tn||o.flags&512&&qp(o)}catch(Q){ft(o,o.return,Q)}}if(o===s){ce=null;break}if(u=o.sibling,u!==null){u.return=o.return,ce=u;break}ce=o.return}}function yE(s){for(;ce!==null;){var o=ce;if(o===s){ce=null;break}var u=o.sibling;if(u!==null){u.return=o.return,ce=u;break}ce=o.return}}function vE(s){for(;ce!==null;){var o=ce;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{vh(4,o)}catch(x){ft(o,u,x)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var m=o.return;try{d.componentDidMount()}catch(x){ft(o,m,x)}}var _=o.return;try{qp(o)}catch(x){ft(o,_,x)}break;case 5:var w=o.return;try{qp(o)}catch(x){ft(o,w,x)}}}catch(x){ft(o,o.return,x)}if(o===s){ce=null;break}var C=o.sibling;if(C!==null){C.return=o.return,ce=C;break}ce=o.return}}var QP=Math.ceil,Eh=oe.ReactCurrentDispatcher,Qp=oe.ReactCurrentOwner,Xn=oe.ReactCurrentBatchConfig,ze=0,Vt=null,Et=null,qt=0,Un=0,Sa=Bi(0),kt=0,su=null,Zs=0,wh=0,Yp=0,ou=null,En=null,Jp=0,Ca=1/0,pi=null,Th=!1,Xp=null,Gi=null,Ih=!1,Ki=null,Sh=0,au=0,Zp=null,Ch=-1,Rh=0;function dn(){return(ze&6)!==0?Ze():Ch!==-1?Ch:Ch=Ze()}function Qi(s){return(s.mode&1)===0?1:(ze&2)!==0&&qt!==0?qt&-qt:bP.transition!==null?(Rh===0&&(Rh=Bs()),Rh):(s=Fe,s!==0||(s=window.event,s=s===void 0?16:Ll(s.type)),s)}function gr(s,o,u,d){if(50<au)throw au=0,Zp=null,Error(t(185));Oi(s,u,d),((ze&2)===0||s!==Vt)&&(s===Vt&&((ze&2)===0&&(wh|=u),kt===4&&Yi(s,qt)),wn(s,d),u===1&&ze===0&&(o.mode&1)===0&&(Ca=Ze()+500,eh&&$i()))}function wn(s,o){var u=s.callbackNode;ni(s,o);var d=js(s,s===Vt?qt:0);if(d===0)u!==null&&Nl(u),s.callbackNode=null,s.callbackPriority=0;else if(o=d&-d,s.callbackPriority!==o){if(u!=null&&Nl(u),o===1)s.tag===0?xP(wE.bind(null,s)):ov(wE.bind(null,s)),AP(function(){(ze&6)===0&&$i()}),u=null;else{switch(Li(d)){case 1:u=Fs;break;case 4:u=Ni;break;case 16:u=Hn;break;case 536870912:u=Rc;break;default:u=Hn}u=kE(u,EE.bind(null,s))}s.callbackPriority=o,s.callbackNode=u}}function EE(s,o){if(Ch=-1,Rh=0,(ze&6)!==0)throw Error(t(327));var u=s.callbackNode;if(Ra()&&s.callbackNode!==u)return null;var d=js(s,s===Vt?qt:0);if(d===0)return null;if((d&30)!==0||(d&s.expiredLanes)!==0||o)o=Ah(s,d);else{o=d;var m=ze;ze|=2;var _=IE();(Vt!==s||qt!==o)&&(pi=null,Ca=Ze()+500,to(s,o));do try{XP();break}catch(C){TE(s,C)}while(!0);_p(),Eh.current=_,ze=m,Et!==null?o=0:(Vt=null,qt=0,o=kt)}if(o!==0){if(o===2&&(m=Dn(s),m!==0&&(d=m,o=em(s,m))),o===1)throw u=su,to(s,0),Yi(s,d),wn(s,Ze()),u;if(o===6)Yi(s,d);else{if(m=s.current.alternate,(d&30)===0&&!YP(m)&&(o=Ah(s,d),o===2&&(_=Dn(s),_!==0&&(d=_,o=em(s,_))),o===1))throw u=su,to(s,0),Yi(s,d),wn(s,Ze()),u;switch(s.finishedWork=m,s.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:no(s,En,pi);break;case 3:if(Yi(s,d),(d&130023424)===d&&(o=Jp+500-Ze(),10<o)){if(js(s,0)!==0)break;if(m=s.suspendedLanes,(m&d)!==d){dn(),s.pingedLanes|=s.suspendedLanes&m;break}s.timeoutHandle=op(no.bind(null,s,En,pi),o);break}no(s,En,pi);break;case 4:if(Yi(s,d),(d&4194240)===d)break;for(o=s.eventTimes,m=-1;0<d;){var w=31-un(d);_=1<<w,w=o[w],w>m&&(m=w),d&=~_}if(d=m,d=Ze()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*QP(d/1960))-d,10<d){s.timeoutHandle=op(no.bind(null,s,En,pi),d);break}no(s,En,pi);break;case 5:no(s,En,pi);break;default:throw Error(t(329))}}}return wn(s,Ze()),s.callbackNode===u?EE.bind(null,s):null}function em(s,o){var u=ou;return s.current.memoizedState.isDehydrated&&(to(s,o).flags|=256),s=Ah(s,o),s!==2&&(o=En,En=u,o!==null&&tm(o)),s}function tm(s){En===null?En=s:En.push.apply(En,s)}function YP(s){for(var o=s;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var m=u[d],_=m.getSnapshot;m=m.value;try{if(!hr(_(),m))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Yi(s,o){for(o&=~Yp,o&=~wh,s.suspendedLanes|=o,s.pingedLanes&=~o,s=s.expirationTimes;0<o;){var u=31-un(o),d=1<<u;s[u]=-1,o&=~d}}function wE(s){if((ze&6)!==0)throw Error(t(327));Ra();var o=js(s,0);if((o&1)===0)return wn(s,Ze()),null;var u=Ah(s,o);if(s.tag!==0&&u===2){var d=Dn(s);d!==0&&(o=d,u=em(s,d))}if(u===1)throw u=su,to(s,0),Yi(s,o),wn(s,Ze()),u;if(u===6)throw Error(t(345));return s.finishedWork=s.current.alternate,s.finishedLanes=o,no(s,En,pi),wn(s,Ze()),null}function nm(s,o){var u=ze;ze|=1;try{return s(o)}finally{ze=u,ze===0&&(Ca=Ze()+500,eh&&$i())}}function eo(s){Ki!==null&&Ki.tag===0&&(ze&6)===0&&Ra();var o=ze;ze|=1;var u=Xn.transition,d=Fe;try{if(Xn.transition=null,Fe=1,s)return s()}finally{Fe=d,Xn.transition=u,ze=o,(ze&6)===0&&$i()}}function rm(){Un=Sa.current,it(Sa)}function to(s,o){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,RP(u)),Et!==null)for(u=Et.return;u!==null;){var d=u;switch(dp(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Xc();break;case 3:wa(),it(_n),it(Xt),Cp();break;case 5:Ip(d);break;case 4:wa();break;case 13:it(ut);break;case 19:it(ut);break;case 10:yp(d.type._context);break;case 22:case 23:rm()}u=u.return}if(Vt=s,Et=s=Ji(s.current,null),qt=Un=o,kt=0,su=null,Yp=wh=Zs=0,En=ou=null,Ys!==null){for(o=0;o<Ys.length;o++)if(u=Ys[o],d=u.interleaved,d!==null){u.interleaved=null;var m=d.next,_=u.pending;if(_!==null){var w=_.next;_.next=m,d.next=w}u.pending=d}Ys=null}return s}function TE(s,o){do{var u=Et;try{if(_p(),ch.current=ph,hh){for(var d=ct.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}hh=!1}if(Xs=0,Mt=Pt=ct=null,Zl=!1,eu=0,Qp.current=null,u===null||u.return===null){kt=1,su=o,Et=null;break}e:{var _=s,w=u.return,C=u,x=o;if(o=qt,C.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var $=x,Y=C,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ae=Gv(w);if(ae!==null){ae.flags&=-257,Kv(ae,w,C,_,o),ae.mode&1&&qv(_,$,o),o=ae,x=$;var he=o.updateQueue;if(he===null){var de=new Set;de.add(x),o.updateQueue=de}else he.add(x);break e}else{if((o&1)===0){qv(_,$,o),im();break e}x=Error(t(426))}}else if(at&&C.mode&1){var gt=Gv(w);if(gt!==null){(gt.flags&65536)===0&&(gt.flags|=256),Kv(gt,w,C,_,o),mp(Ta(x,C));break e}}_=x=Ta(x,C),kt!==4&&(kt=2),ou===null?ou=[_]:ou.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var B=Wv(_,x,o);_v(_,B);break e;case 1:C=x;var L=_.type,z=_.stateNode;if((_.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Gi===null||!Gi.has(z)))){_.flags|=65536,o&=-o,_.lanes|=o;var ee=Hv(_,C,o);_v(_,ee);break e}}_=_.return}while(_!==null)}CE(u)}catch(fe){o=fe,Et===u&&u!==null&&(Et=u=u.return);continue}break}while(!0)}function IE(){var s=Eh.current;return Eh.current=ph,s===null?ph:s}function im(){(kt===0||kt===3||kt===2)&&(kt=4),Vt===null||(Zs&268435455)===0&&(wh&268435455)===0||Yi(Vt,qt)}function Ah(s,o){var u=ze;ze|=2;var d=IE();(Vt!==s||qt!==o)&&(pi=null,to(s,o));do try{JP();break}catch(m){TE(s,m)}while(!0);if(_p(),ze=u,Eh.current=d,Et!==null)throw Error(t(261));return Vt=null,qt=0,kt}function JP(){for(;Et!==null;)SE(Et)}function XP(){for(;Et!==null&&!Sc();)SE(Et)}function SE(s){var o=PE(s.alternate,s,Un);s.memoizedProps=s.pendingProps,o===null?CE(s):Et=o,Qp.current=null}function CE(s){var o=s;do{var u=o.alternate;if(s=o.return,(o.flags&32768)===0){if(u=WP(u,o,Un),u!==null){Et=u;return}}else{if(u=HP(u,o),u!==null){u.flags&=32767,Et=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{kt=6,Et=null;return}}if(o=o.sibling,o!==null){Et=o;return}Et=o=s}while(o!==null);kt===0&&(kt=5)}function no(s,o,u){var d=Fe,m=Xn.transition;try{Xn.transition=null,Fe=1,ZP(s,o,u,d)}finally{Xn.transition=m,Fe=d}return null}function ZP(s,o,u,d){do Ra();while(Ki!==null);if((ze&6)!==0)throw Error(t(327));u=s.finishedWork;var m=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(t(177));s.callbackNode=null,s.callbackPriority=0;var _=u.lanes|u.childLanes;if(Je(s,_),s===Vt&&(Et=Vt=null,qt=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||Ih||(Ih=!0,kE(Hn,function(){return Ra(),null})),_=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||_){_=Xn.transition,Xn.transition=null;var w=Fe;Fe=1;var C=ze;ze|=4,Qp.current=null,GP(s,u),mE(u,s),vP(ip),Vi=!!rp,ip=rp=null,s.current=u,KP(u),Bf(),ze=C,Fe=w,Xn.transition=_}else s.current=u;if(Ih&&(Ih=!1,Ki=s,Sh=m),_=s.pendingLanes,_===0&&(Gi=null),Ac(u.stateNode),wn(s,Ze()),o!==null)for(d=s.onRecoverableError,u=0;u<o.length;u++)m=o[u],d(m.value,{componentStack:m.stack,digest:m.digest});if(Th)throw Th=!1,s=Xp,Xp=null,s;return(Sh&1)!==0&&s.tag!==0&&Ra(),_=s.pendingLanes,(_&1)!==0?s===Zp?au++:(au=0,Zp=s):au=0,$i(),null}function Ra(){if(Ki!==null){var s=Li(Sh),o=Xn.transition,u=Fe;try{if(Xn.transition=null,Fe=16>s?16:s,Ki===null)var d=!1;else{if(s=Ki,Ki=null,Sh=0,(ze&6)!==0)throw Error(t(331));var m=ze;for(ze|=4,ce=s.current;ce!==null;){var _=ce,w=_.child;if((ce.flags&16)!==0){var C=_.deletions;if(C!==null){for(var x=0;x<C.length;x++){var $=C[x];for(ce=$;ce!==null;){var Y=ce;switch(Y.tag){case 0:case 11:case 15:iu(8,Y,_)}var X=Y.child;if(X!==null)X.return=Y,ce=X;else for(;ce!==null;){Y=ce;var Q=Y.sibling,ae=Y.return;if(cE(Y),Y===$){ce=null;break}if(Q!==null){Q.return=ae,ce=Q;break}ce=ae}}}var he=_.alternate;if(he!==null){var de=he.child;if(de!==null){he.child=null;do{var gt=de.sibling;de.sibling=null,de=gt}while(de!==null)}}ce=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,ce=w;else e:for(;ce!==null;){if(_=ce,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:iu(9,_,_.return)}var B=_.sibling;if(B!==null){B.return=_.return,ce=B;break e}ce=_.return}}var L=s.current;for(ce=L;ce!==null;){w=ce;var z=w.child;if((w.subtreeFlags&2064)!==0&&z!==null)z.return=w,ce=z;else e:for(w=L;ce!==null;){if(C=ce,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:vh(9,C)}}catch(fe){ft(C,C.return,fe)}if(C===w){ce=null;break e}var ee=C.sibling;if(ee!==null){ee.return=C.return,ce=ee;break e}ce=C.return}}if(ze=m,$i(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Us,s)}catch{}d=!0}return d}finally{Fe=u,Xn.transition=o}}return!1}function RE(s,o,u){o=Ta(u,o),o=Wv(s,o,1),s=Hi(s,o,1),o=dn(),s!==null&&(Oi(s,1,o),wn(s,o))}function ft(s,o,u){if(s.tag===3)RE(s,s,u);else for(;o!==null;){if(o.tag===3){RE(o,s,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Gi===null||!Gi.has(d))){s=Ta(u,s),s=Hv(o,s,1),o=Hi(o,s,1),s=dn(),o!==null&&(Oi(o,1,s),wn(o,s));break}}o=o.return}}function ek(s,o,u){var d=s.pingCache;d!==null&&d.delete(o),o=dn(),s.pingedLanes|=s.suspendedLanes&u,Vt===s&&(qt&u)===u&&(kt===4||kt===3&&(qt&130023424)===qt&&500>Ze()-Jp?to(s,0):Yp|=u),wn(s,o)}function AE(s,o){o===0&&((s.mode&1)===0?o=1:(o=Qo,Qo<<=1,(Qo&130023424)===0&&(Qo=4194304)));var u=dn();s=hi(s,o),s!==null&&(Oi(s,o,u),wn(s,u))}function tk(s){var o=s.memoizedState,u=0;o!==null&&(u=o.retryLane),AE(s,u)}function nk(s,o){var u=0;switch(s.tag){case 13:var d=s.stateNode,m=s.memoizedState;m!==null&&(u=m.retryLane);break;case 19:d=s.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),AE(s,u)}var PE;PE=function(s,o,u){if(s!==null)if(s.memoizedProps!==o.pendingProps||_n.current)vn=!0;else{if((s.lanes&u)===0&&(o.flags&128)===0)return vn=!1,$P(s,o,u);vn=(s.flags&131072)!==0}else vn=!1,at&&(o.flags&1048576)!==0&&av(o,nh,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;_h(s,o),s=o.pendingProps;var m=pa(o,Xt.current);Ea(o,u),m=Pp(null,o,d,s,m,u);var _=kp();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,yn(d)?(_=!0,Zc(o)):_=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,wp(o),m.updater=mh,o.stateNode=m,m._reactInternals=o,Lp(o,d,s,u),o=Up(null,o,d,!0,_,u)):(o.tag=0,at&&_&&hp(o),hn(null,o,m,u),o=o.child),o;case 16:d=o.elementType;e:{switch(_h(s,o),s=o.pendingProps,m=d._init,d=m(d._payload),o.type=d,m=o.tag=ik(d),s=fr(d,s),m){case 0:o=Fp(null,o,d,s,u);break e;case 1:o=eE(null,o,d,s,u);break e;case 11:o=Qv(null,o,d,s,u);break e;case 14:o=Yv(null,o,d,fr(d.type,s),u);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:fr(d,m),Fp(s,o,d,m,u);case 1:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:fr(d,m),eE(s,o,d,m,u);case 3:e:{if(tE(o),s===null)throw Error(t(387));d=o.pendingProps,_=o.memoizedState,m=_.element,gv(s,o),lh(o,d,null,u);var w=o.memoizedState;if(d=w.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){m=Ta(Error(t(423)),o),o=nE(s,o,d,u,m);break e}else if(d!==m){m=Ta(Error(t(424)),o),o=nE(s,o,d,u,m);break e}else for(Fn=ji(o.stateNode.containerInfo.firstChild),Vn=o,at=!0,dr=null,u=pv(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(_a(),d===m){o=fi(s,o,u);break e}hn(s,o,d,u)}o=o.child}return o;case 5:return vv(o),s===null&&pp(o),d=o.type,m=o.pendingProps,_=s!==null?s.memoizedProps:null,w=m.children,sp(d,m)?w=null:_!==null&&sp(d,_)&&(o.flags|=32),Zv(s,o),hn(s,o,w,u),o.child;case 6:return s===null&&pp(o),null;case 13:return rE(s,o,u);case 4:return Tp(o,o.stateNode.containerInfo),d=o.pendingProps,s===null?o.child=ya(o,null,d,u):hn(s,o,d,u),o.child;case 11:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:fr(d,m),Qv(s,o,d,m,u);case 7:return hn(s,o,o.pendingProps,u),o.child;case 8:return hn(s,o,o.pendingProps.children,u),o.child;case 12:return hn(s,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,m=o.pendingProps,_=o.memoizedProps,w=m.value,et(sh,d._currentValue),d._currentValue=w,_!==null)if(hr(_.value,w)){if(_.children===m.children&&!_n.current){o=fi(s,o,u);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var C=_.dependencies;if(C!==null){w=_.child;for(var x=C.firstContext;x!==null;){if(x.context===d){if(_.tag===1){x=di(-1,u&-u),x.tag=2;var $=_.updateQueue;if($!==null){$=$.shared;var Y=$.pending;Y===null?x.next=x:(x.next=Y.next,Y.next=x),$.pending=x}}_.lanes|=u,x=_.alternate,x!==null&&(x.lanes|=u),vp(_.return,u,o),C.lanes|=u;break}x=x.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=u,C=w.alternate,C!==null&&(C.lanes|=u),vp(w,u,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}hn(s,o,m.children,u),o=o.child}return o;case 9:return m=o.type,d=o.pendingProps.children,Ea(o,u),m=Yn(m),d=d(m),o.flags|=1,hn(s,o,d,u),o.child;case 14:return d=o.type,m=fr(d,o.pendingProps),m=fr(d.type,m),Yv(s,o,d,m,u);case 15:return Jv(s,o,o.type,o.pendingProps,u);case 17:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:fr(d,m),_h(s,o),o.tag=1,yn(d)?(s=!0,Zc(o)):s=!1,Ea(o,u),zv(o,d,m),Lp(o,d,m,u),Up(null,o,d,!0,s,u);case 19:return sE(s,o,u);case 22:return Xv(s,o,u)}throw Error(t(156,o.tag))};function kE(s,o){return Go(s,o)}function rk(s,o,u,d){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(s,o,u,d){return new rk(s,o,u,d)}function sm(s){return s=s.prototype,!(!s||!s.isReactComponent)}function ik(s){if(typeof s=="function")return sm(s)?1:0;if(s!=null){if(s=s.$$typeof,s===U)return 11;if(s===Yt)return 14}return 2}function Ji(s,o){var u=s.alternate;return u===null?(u=Zn(s.tag,o,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=o,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,o=s.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function Ph(s,o,u,d,m,_){var w=2;if(d=s,typeof s=="function")sm(s)&&(w=1);else if(typeof s=="string")w=5;else e:switch(s){case O:return ro(u.children,m,_,o);case S:w=8,m|=8;break;case P:return s=Zn(12,u,o,m|2),s.elementType=P,s.lanes=_,s;case A:return s=Zn(13,u,o,m),s.elementType=A,s.lanes=_,s;case pt:return s=Zn(19,u,o,m),s.elementType=pt,s.lanes=_,s;case Qe:return kh(u,m,_,o);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case D:w=10;break e;case V:w=9;break e;case U:w=11;break e;case Yt:w=14;break e;case Jt:w=16,d=null;break e}throw Error(t(130,s==null?s:typeof s,""))}return o=Zn(w,u,o,m),o.elementType=s,o.type=d,o.lanes=_,o}function ro(s,o,u,d){return s=Zn(7,s,d,o),s.lanes=u,s}function kh(s,o,u,d){return s=Zn(22,s,d,o),s.elementType=Qe,s.lanes=u,s.stateNode={isHidden:!1},s}function om(s,o,u){return s=Zn(6,s,null,o),s.lanes=u,s}function am(s,o,u){return o=Zn(4,s.children!==null?s.children:[],s.key,o),o.lanes=u,o.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},o}function sk(s,o,u,d,m){this.tag=o,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bi(0),this.expirationTimes=bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function lm(s,o,u,d,m,_,w,C,x){return s=new sk(s,o,u,C,x),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Zn(3,null,null,o),s.current=_,_.stateNode=s,_.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},wp(_),s}function ok(s,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:d==null?null:""+d,children:s,containerInfo:o,implementation:u}}function NE(s){if(!s)return zi;s=s._reactInternals;e:{if(ir(s)!==s||s.tag!==1)throw Error(t(170));var o=s;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(yn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(s.tag===1){var u=s.type;if(yn(u))return iv(s,u,o)}return o}function xE(s,o,u,d,m,_,w,C,x){return s=lm(u,d,!0,s,m,_,w,C,x),s.context=NE(null),u=s.current,d=dn(),m=Qi(u),_=di(d,m),_.callback=o??null,Hi(u,_,m),s.current.lanes=m,Oi(s,m,d),wn(s,d),s}function Nh(s,o,u,d){var m=o.current,_=dn(),w=Qi(m);return u=NE(u),o.context===null?o.context=u:o.pendingContext=u,o=di(_,w),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Hi(m,o,w),s!==null&&(gr(s,m,w,_),ah(s,m,w)),w}function xh(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function bE(s,o){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<o?u:o}}function um(s,o){bE(s,o),(s=s.alternate)&&bE(s,o)}function ak(){return null}var OE=typeof reportError=="function"?reportError:function(s){console.error(s)};function cm(s){this._internalRoot=s}bh.prototype.render=cm.prototype.render=function(s){var o=this._internalRoot;if(o===null)throw Error(t(409));Nh(s,o,null,null)},bh.prototype.unmount=cm.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var o=s.containerInfo;eo(function(){Nh(null,s,null,null)}),o[ai]=null}};function bh(s){this._internalRoot=s}bh.prototype.unstable_scheduleHydration=function(s){if(s){var o=bc();s={blockedOn:null,target:s,priority:o};for(var u=0;u<xr.length&&o!==0&&o<xr[u].priority;u++);xr.splice(u,0,s),u===0&&Lc(s)}};function hm(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Oh(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function DE(){}function lk(s,o,u,d,m){if(m){if(typeof d=="function"){var _=d;d=function(){var $=xh(w);_.call($)}}var w=xE(o,d,s,0,null,!1,!1,"",DE);return s._reactRootContainer=w,s[ai]=w.current,Hl(s.nodeType===8?s.parentNode:s),eo(),w}for(;m=s.lastChild;)s.removeChild(m);if(typeof d=="function"){var C=d;d=function(){var $=xh(x);C.call($)}}var x=lm(s,0,!1,null,null,!1,!1,"",DE);return s._reactRootContainer=x,s[ai]=x.current,Hl(s.nodeType===8?s.parentNode:s),eo(function(){Nh(o,x,u,d)}),x}function Dh(s,o,u,d,m){var _=u._reactRootContainer;if(_){var w=_;if(typeof m=="function"){var C=m;m=function(){var x=xh(w);C.call(x)}}Nh(o,w,s,m)}else w=lk(u,o,s,m,d);return xh(w)}Nc=function(s){switch(s.tag){case 3:var o=s.stateNode;if(o.current.memoizedState.isDehydrated){var u=xi(o.pendingLanes);u!==0&&(Di(o,u|1),wn(o,Ze()),(ze&6)===0&&(Ca=Ze()+500,$i()))}break;case 13:eo(function(){var d=hi(s,1);if(d!==null){var m=dn();gr(d,s,1,m)}}),um(s,1)}},Yo=function(s){if(s.tag===13){var o=hi(s,134217728);if(o!==null){var u=dn();gr(o,s,134217728,u)}um(s,134217728)}},xc=function(s){if(s.tag===13){var o=Qi(s),u=hi(s,o);if(u!==null){var d=dn();gr(u,s,o,d)}um(s,o)}},bc=function(){return Fe},Oc=function(s,o){var u=Fe;try{return Fe=s,o()}finally{Fe=u}},Bo=function(s,o,u){switch(o){case"input":if(gl(s,u),o=u.name,u.type==="radio"&&o!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==s&&d.form===s.form){var m=Jc(d);if(!m)throw Error(t(90));Lo(d),gl(d,m)}}}break;case"textarea":Uo(s,u);break;case"select":o=u.value,o!=null&&Zr(s,!!u.multiple,o,!1)}},Ds=nm,Rl=eo;var uk={usingClientEntryPoint:!1,Events:[Kl,da,Jc,kr,Cl,nm]},lu={findFiberByHostInstance:qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ck={bundleType:lu.bundleType,version:lu.version,rendererPackageName:lu.rendererPackageName,rendererConfig:lu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=kl(s),s===null?null:s.stateNode},findFiberByHostInstance:lu.findFiberByHostInstance||ak,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lh.isDisabled&&Lh.supportsFiber)try{Us=Lh.inject(ck),On=Lh}catch{}}return Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uk,Tn.createPortal=function(s,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hm(o))throw Error(t(200));return ok(s,o,null,u)},Tn.createRoot=function(s,o){if(!hm(s))throw Error(t(299));var u=!1,d="",m=OE;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=lm(s,1,!1,null,null,u,!1,d,m),s[ai]=o.current,Hl(s.nodeType===8?s.parentNode:s),new cm(o)},Tn.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var o=s._reactInternals;if(o===void 0)throw typeof s.render=="function"?Error(t(188)):(s=Object.keys(s).join(","),Error(t(268,s)));return s=kl(o),s=s===null?null:s.stateNode,s},Tn.flushSync=function(s){return eo(s)},Tn.hydrate=function(s,o,u){if(!Oh(o))throw Error(t(200));return Dh(null,s,o,!0,u)},Tn.hydrateRoot=function(s,o,u){if(!hm(s))throw Error(t(405));var d=u!=null&&u.hydratedSources||null,m=!1,_="",w=OE;if(u!=null&&(u.unstable_strictMode===!0&&(m=!0),u.identifierPrefix!==void 0&&(_=u.identifierPrefix),u.onRecoverableError!==void 0&&(w=u.onRecoverableError)),o=xE(o,null,s,1,u??null,m,!1,_,w),s[ai]=o.current,Hl(s),d)for(s=0;s<d.length;s++)u=d[s],m=u._getVersion,m=m(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,m]:o.mutableSourceEagerHydrationData.push(u,m);return new bh(o)},Tn.render=function(s,o,u){if(!Oh(o))throw Error(t(200));return Dh(null,s,o,!1,u)},Tn.unmountComponentAtNode=function(s){if(!Oh(s))throw Error(t(40));return s._reactRootContainer?(eo(function(){Dh(null,null,s,!1,function(){s._reactRootContainer=null,s[ai]=null})}),!0):!1},Tn.unstable_batchedUpdates=nm,Tn.unstable_renderSubtreeIntoContainer=function(s,o,u,d){if(!Oh(u))throw Error(t(200));if(s==null||s._reactInternals===void 0)throw Error(t(38));return Dh(s,o,u,!1,d)},Tn.version="18.3.1-next-f1338f8080-20240426",Tn}var zE;function FI(){if(zE)return pm.exports;zE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),pm.exports=vk(),pm.exports}var $E;function Ek(){if($E)return Mh;$E=1;var n=FI();return Mh.createRoot=n.createRoot,Mh.hydrateRoot=n.hydrateRoot,Mh}var wk=Ek();const Tk=MI(wk),Ik=()=>{};var WE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw Za(e)},Za=function(n){return new Error("Firebase Database ("+UI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Sk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],l=n[t++],h=n[t++],f=((i&7)<<18|(a&63)<<12|(l&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],l=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,p=f?n[i+2]:0,y=a>>2,v=(a&3)<<4|h>>4;let T=(h&15)<<2|p>>6,R=p&63;f||(R=64,l||(T=64)),r.push(t[y],t[v],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],h=i<n.length?t[n.charAt(i)]:0;++i;const p=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||h==null||p==null||v==null)throw new Ck;const T=a<<2|h>>4;if(r.push(T),p!==64){const R=h<<4&240|p>>2;if(r.push(R),v!==64){const N=p<<6&192|v;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ck extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BI=function(n){const e=jI(n);return jg.encodeByteArray(e,!0)},od=function(n){return BI(n).replace(/\./g,"")},Ou=function(n){try{return jg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(n){return Du(void 0,n)}function Du(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ak(t)||(n[t]=Du(n[t],e[t]));return n}function Ak(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=()=>zI().__FIREBASE_DEFAULTS__,kk=()=>{if(typeof process>"u"||typeof WE>"u")return;const n=WE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nk=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ou(n[1]);return e&&JSON.parse(e)},Qd=()=>{try{return Ik()||Pk()||kk()||Nk()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$I=n=>{var e,t;return(t=(e=Qd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Bg=n=>{const e=$I(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},WI=()=>{var n;return(n=Qd())===null||n===void 0?void 0:n.config},HI=n=>{var e;return(e=Qd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[od(JSON.stringify(t)),od(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $g(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function xk(){var n;const e=(n=Qd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bk(){return typeof window<"u"||qI()}function qI(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Ok(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function KI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dk(){const n=ln();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lk(){return UI.NODE_ADMIN===!0}function Mk(){return!xk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QI(){try{return typeof indexedDB=="object"}catch{return!1}}function YI(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}function Vk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="FirebaseError";class $n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Fk,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?Uk(a,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new $n(i,h,r)}}function Uk(n,e){return n.replace(jk,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){return JSON.parse(n)}function zt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=function(n){let e={},t={},r={},i="";try{const a=n.split(".");e=Lu(Ou(a[0])||""),t=Lu(Ou(a[1])||""),i=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},Bk=function(n){const e=JI(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},zk=function(n){const e=JI(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ja(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function $m(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ad(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Hr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],l=e[i];if(HE(a)&&HE(l)){if(!Hr(a,l))return!1}else if(a!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function HE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function _u(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)r[v]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let v=0;v<16;v++)r[v]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let v=16;v<80;v++){const T=r[v-3]^r[v-8]^r[v-14]^r[v-16];r[v]=(T<<1|T>>>31)&4294967295}let i=this.chain_[0],a=this.chain_[1],l=this.chain_[2],h=this.chain_[3],f=this.chain_[4],p,y;for(let v=0;v<80;v++){v<40?v<20?(p=h^a&(l^h),y=1518500249):(p=a^l^h,y=1859775393):v<60?(p=a&l|h&(a|l),y=2400959708):(p=a^l^h,y=3395469782);const T=(i<<5|i>>>27)+p+f+y+r[v]&4294967295;f=h,h=l,l=(a<<30|a>>>2)&4294967295,a=i,i=T}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const a=this.buf_;let l=this.inbuf_;for(;i<t;){if(l===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(a[l]=e.charCodeAt(i),++l,++i,l===this.blockSize){this.compress_(a),l=0;break}}else for(;i<t;)if(a[l]=e[i],++l,++i,l===this.blockSize){this.compress_(a),l=0;break}}this.inbuf_=l,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}function XI(n,e){const t=new Wk(n,e);return t.subscribe.bind(t)}class Wk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hk(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=_m),i.error===void 0&&(i.error=_m),i.complete===void 0&&(i.complete=_m);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _m(){}function Wg(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const a=i-55296;r++,ne(r<n.length,"Surrogate pair missing trail surrogate.");const l=n.charCodeAt(r)-56320;i=65536+(a<<10)+l}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Jd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=1e3,Kk=2,Qk=4*60*60*1e3,Yk=.5;function qE(n,e=Gk,t=Kk){const r=e*Math.pow(t,n),i=Math.round(Yk*r*(Math.random()-.5)*2);return Math.min(Qk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n){return n&&n._delegate?n._delegate:n}class Nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Yd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zk(e))try{this.getOrInitializeService({instanceIdentifier:io})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=io){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=io){return this.instances.has(e)}getOptions(e=io){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&l.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=io){return this.component?this.component.multipleInstances?e:io:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xk(n){return n===io?void 0:n}function Zk(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=[];var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const e0={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},eN=Oe.INFO,tN={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},nN=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=tN[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tl{constructor(e){this.name=e,this._logLevel=eN,this._logHandler=nN,this._userLogHandler=null,Hg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?e0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}function rN(n){Hg.forEach(e=>{e.setLogLevel(n)})}function iN(n,e){for(const t of Hg){let r=null;e&&e.level&&(r=e0[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,a,...l)=>{const h=l.map(f=>{if(f==null)return null;if(typeof f=="string")return f;if(typeof f=="number"||typeof f=="boolean")return f.toString();if(f instanceof Error)return f.message;try{return JSON.stringify(f)}catch{return null}}).filter(f=>f).join(" ");a>=(r??i.logLevel)&&n({level:Oe[a].toLowerCase(),message:h,args:l,type:i.name})}}}const sN=(n,e)=>e.some(t=>n instanceof t);let GE,KE;function oN(){return GE||(GE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aN(){return KE||(KE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t0=new WeakMap,Wm=new WeakMap,n0=new WeakMap,ym=new WeakMap,qg=new WeakMap;function lN(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(as(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&t0.set(t,n)}).catch(()=>{}),qg.set(e,n),e}function uN(n){if(Wm.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});Wm.set(n,e)}let Hm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||n0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return as(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cN(n){Hm=n(Hm)}function hN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(vm(this),e,...t);return n0.set(r,e.sort?e.sort():[e]),as(r)}:aN().includes(n)?function(...e){return n.apply(vm(this),e),as(t0.get(this))}:function(...e){return as(n.apply(vm(this),e))}}function dN(n){return typeof n=="function"?hN(n):(n instanceof IDBTransaction&&uN(n),sN(n,oN())?new Proxy(n,Hm):n)}function as(n){if(n instanceof IDBRequest)return lN(n);if(ym.has(n))return ym.get(n);const e=dN(n);return e!==n&&(ym.set(n,e),qg.set(e,n)),e}const vm=n=>qg.get(n);function r0(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const l=indexedDB.open(n,e),h=as(l);return r&&l.addEventListener("upgradeneeded",f=>{r(as(l.result),f.oldVersion,f.newVersion,as(l.transaction),f)}),t&&l.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),i&&f.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const fN=["get","getKey","getAll","getAllKeys","count"],pN=["put","add","delete","clear"],Em=new Map;function QE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Em.get(e))return Em.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=pN.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fN.includes(t)))return;const a=async function(l,...h){const f=this.transaction(l,i?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[t](...h),i&&f.done]))[0]};return Em.set(e,a),a}cN(n=>({...n,get:(e,t,r)=>QE(e,t)||n.get(e,t,r),has:(e,t)=>!!QE(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gN(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function gN(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ld="@firebase/app",qm="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new tl("@firebase/app"),_N="@firebase/app-compat",yN="@firebase/analytics-compat",vN="@firebase/analytics",EN="@firebase/app-check-compat",wN="@firebase/app-check",TN="@firebase/auth",IN="@firebase/auth-compat",SN="@firebase/database",CN="@firebase/data-connect",RN="@firebase/database-compat",AN="@firebase/functions",PN="@firebase/functions-compat",kN="@firebase/installations",NN="@firebase/installations-compat",xN="@firebase/messaging",bN="@firebase/messaging-compat",ON="@firebase/performance",DN="@firebase/performance-compat",LN="@firebase/remote-config",MN="@firebase/remote-config-compat",VN="@firebase/storage",FN="@firebase/storage-compat",UN="@firebase/firestore",jN="@firebase/vertexai",BN="@firebase/firestore-compat",zN="firebase",$N="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="[DEFAULT]",WN={[ld]:"fire-core",[_N]:"fire-core-compat",[vN]:"fire-analytics",[yN]:"fire-analytics-compat",[wN]:"fire-app-check",[EN]:"fire-app-check-compat",[TN]:"fire-auth",[IN]:"fire-auth-compat",[SN]:"fire-rtdb",[CN]:"fire-data-connect",[RN]:"fire-rtdb-compat",[AN]:"fire-fn",[PN]:"fire-fn-compat",[kN]:"fire-iid",[NN]:"fire-iid-compat",[xN]:"fire-fcm",[bN]:"fire-fcm-compat",[ON]:"fire-perf",[DN]:"fire-perf-compat",[LN]:"fire-rc",[MN]:"fire-rc-compat",[VN]:"fire-gcs",[FN]:"fire-gcs-compat",[UN]:"fire-fst",[BN]:"fire-fst-compat",[jN]:"fire-vertex","fire-js":"fire-js",[zN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map,Ba=new Map,za=new Map;function Mu(n,e){try{n.container.addComponent(e)}catch(t){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function i0(n,e){n.container.addOrOverwriteComponent(e)}function xn(n){const e=n.name;if(za.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,n);for(const t of ms.values())Mu(t,n);for(const t of Ba.values())Mu(t,n);return!0}function Rr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function HN(n,e,t=ps){Rr(n,e).clearInstance(t)}function s0(n){return n.options!==void 0}function fn(n){return n==null?!1:n.settings!==void 0}function qN(){za.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new Ai("app","Firebase",GN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o0=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(n,e){const t=Ou(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const i=JSON.parse(t).exp*1e3,a=new Date().getTime();i-a<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class KN extends o0{constructor(e,t,r,i){const a=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,l={name:r,automaticDataCollectionEnabled:a};if(e.apiKey!==void 0)super(e,l,i);else{const h=e;super(h.options,l,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:a},t),this._serverConfig.authIdToken&&YE(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&YE(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Tt(ld,qm,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Gg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw er.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=$N;function rc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ps,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw er.create("bad-app-name",{appName:String(i)});if(t||(t=WI()),!t)throw er.create("no-options");const a=ms.get(i);if(a){if(Hr(t,a.options)&&Hr(r,a.config))return a;throw er.create("duplicate-app",{appName:i})}const l=new ZI(i);for(const f of za.values())l.addComponent(f);const h=new o0(t,r,l);return ms.set(i,h),h}function QN(n,e){if(bk()&&!qI())throw er.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;s0(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=p=>[...p].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw er.create("finalization-registry-not-supported",{});const a=""+i(JSON.stringify(r)),l=Ba.get(a);if(l)return l.incRefCount(e.releaseOnDeref),l;const h=new ZI(a);for(const p of za.values())h.addComponent(p);const f=new KN(t,e,a,h);return Ba.set(a,f),f}function nl(n=ps){const e=ms.get(n);if(!e&&n===ps&&WI())return rc();if(!e)throw er.create("no-app",{appName:n});return e}function Gm(){return Array.from(ms.values())}async function Gg(n){let e=!1;const t=n.name;ms.has(t)?(e=!0,ms.delete(t)):Ba.has(t)&&n.decRefCount()<=0&&(Ba.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Tt(n,e,t){var r;let i=(r=WN[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const h=[`Unable to register library "${i}" with version "${e}":`];a&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(h.join(" "));return}xn(new Nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function a0(n,e){if(n!==null&&typeof n!="function")throw er.create("invalid-log-argument");iN(n,e)}function l0(n){rN(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN="firebase-heartbeat-database",JN=1,Vu="firebase-heartbeat-store";let wm=null;function u0(){return wm||(wm=r0(YN,JN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vu)}catch(t){console.warn(t)}}}}).catch(n=>{throw er.create("idb-open",{originalErrorMessage:n.message})})),wm}async function XN(n){try{const t=(await u0()).transaction(Vu),r=await t.objectStore(Vu).get(c0(n));return await t.done,r}catch(e){if(e instanceof $n)wi.warn(e.message);else{const t=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(t.message)}}}async function JE(n,e){try{const r=(await u0()).transaction(Vu,"readwrite");await r.objectStore(Vu).put(e,c0(n)),await r.done}catch(t){if(t instanceof $n)wi.warn(t.message);else{const r=er.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wi.warn(r.message)}}}function c0(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=1024,ex=30;class tx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rx(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=XE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>ex){const l=ix(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=XE(),{heartbeatsToSend:r,unsentEntries:i}=nx(this._heartbeatsCache.heartbeats),a=od(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return wi.warn(t),""}}}function XE(){return new Date().toISOString().substring(0,10)}function nx(n,e=ZN){const t=[];let r=n.slice();for(const i of n){const a=t.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),ZE(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ZE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class rx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QI()?YI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await XN(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return JE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return JE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ZE(n){return od(JSON.stringify({version:2,heartbeats:n})).length}function ix(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(n){xn(new Nn("platform-logger",e=>new mN(e),"PRIVATE")),xn(new Nn("heartbeat",e=>new tx(e),"PRIVATE")),Tt(ld,qm,n),Tt(ld,qm,"esm2017"),Tt("fire-js","")}sx("");const ox=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:$n,SDK_VERSION:Qr,_DEFAULT_ENTRY_NAME:ps,_addComponent:Mu,_addOrOverwriteComponent:i0,_apps:ms,_clearComponents:qN,_components:za,_getProvider:Rr,_isFirebaseApp:s0,_isFirebaseServerApp:fn,_registerComponent:xn,_removeServiceInstance:HN,_serverApps:Ba,deleteApp:Gg,getApp:nl,getApps:Gm,initializeApp:rc,initializeServerApp:QN,onLog:a0,registerVersion:Tt,setLogLevel:l0},Symbol.toStringTag,{value:"Module"}));function Kg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function h0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ax=h0,d0=new Ai("auth","Firebase",h0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new tl("@firebase/auth");function lx(n,...e){ud.logLevel<=Oe.WARN&&ud.warn(`Auth (${Qr}): ${n}`,...e)}function qh(n,...e){ud.logLevel<=Oe.ERROR&&ud.error(`Auth (${Qr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,...e){throw Qg(n,...e)}function Br(n,...e){return Qg(n,...e)}function f0(n,e,t){const r=Object.assign(Object.assign({},ax()),{[e]:t});return new Ai("auth","Firebase",r).create(e,{appName:n.name})}function vi(n){return f0(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return d0.create(n,...e)}function Te(n,e,...t){if(!n)throw Qg(e,...t)}function gi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qh(e),new Error(e)}function Ti(n,e){n||gi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ux(){return ew()==="http:"||ew()==="https:"}function ew(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ux()||GI()||"connection"in navigator)?navigator.onLine:!0}function hx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ti(t>e,"Short delay should be less than long delay!"),this.isMobile=$g()||KI()}get(){return cx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n,e){Ti(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],px=new ic(3e4,6e4);function Cs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Rs(n,e,t,r,i={}){return m0(n,i,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const h=el(Object.assign({key:n.config.apiKey},l)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:f},a);return Ok()||(p.referrerPolicy="no-referrer"),p0.fetch()(await g0(n,n.config.apiHost,t,h),p)})}async function m0(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},dx),e);try{const i=new gx(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Vh(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const h=a.ok?l.errorMessage:l.error.message,[f,p]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vh(n,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw Vh(n,"email-already-in-use",l);if(f==="USER_DISABLED")throw Vh(n,"user-disabled",l);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw f0(n,y,p);Cr(n,y)}}catch(i){if(i instanceof $n)throw i;Cr(n,"network-request-failed",{message:String(i)})}}async function sc(n,e,t,r,i={}){const a=await Rs(n,e,t,r,i);return"mfaPendingCredential"in a&&Cr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function g0(n,e,t,r){const i=`${e}${t}?${r}`,a=n,l=a.config.emulator?Yg(n.config,i):`${n.config.apiScheme}://${i}`;return fx.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function mx(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Br(this.auth,"network-request-failed")),px.get())})}}function Vh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Br(n,e,r);return i.customData._tokenResponse=t,i}function tw(n){return n!==void 0&&n.enterprise!==void 0}class _x{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yx(n,e){return Rs(n,"GET","/v2/recaptchaConfig",Cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(n,e){return Rs(n,"POST","/v1/accounts:delete",e)}async function cd(n,e){return Rs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ex(n,e=!1){const t=nt(n),r=await t.getIdToken(e),i=Jg(r);Te(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Tu(Tm(i.auth_time)),issuedAtTime:Tu(Tm(i.iat)),expirationTime:Tu(Tm(i.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Tm(n){return Number(n)*1e3}function Jg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qh("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ou(t);return i?JSON.parse(i):(qh("Failed to decode base64 JWT payload"),null)}catch(i){return qh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nw(n){const e=Jg(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $n&&wx(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tu(this.lastLoginAt),this.creationTime=Tu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hd(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Fu(n,cd(t,{idToken:r}));Te(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];n._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?_0(a.providerUserInfo):[],h=Sx(n.providerData,l),f=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),y=f?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Qm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function Ix(n){const e=nt(n);await hd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sx(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _0(n){return n.map(e=>{var{providerId:t}=e,r=Kg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(n,e){const t=await m0(n,{},async()=>{const r=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,l=await g0(n,i,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",p0.fetch()(l,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Rx(n,e){return Rs(n,"POST","/v2/accounts:revokeToken",Cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=nw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await Cx(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,l=new Da;return r&&(Te(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(Te(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),a&&(Te(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Da,this.toJSON())}_performRefresh(){return gi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,a=Kg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Qm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Fu(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ex(this,e)}reload(){return Ix(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await hd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await Fu(this,vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,a,l,h,f,p,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,N=(l=t.photoURL)!==null&&l!==void 0?l:void 0,M=(h=t.tenantId)!==null&&h!==void 0?h:void 0,k=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,K=(p=t.createdAt)!==null&&p!==void 0?p:void 0,te=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Z,emailVerified:oe,isAnonymous:Ee,providerData:we,stsTokenManager:O}=t;Te(Z&&O,e,"internal-error");const S=Da.fromJSON(this.name,O);Te(typeof Z=="string",e,"internal-error"),Zi(v,e.name),Zi(T,e.name),Te(typeof oe=="boolean",e,"internal-error"),Te(typeof Ee=="boolean",e,"internal-error"),Zi(R,e.name),Zi(N,e.name),Zi(M,e.name),Zi(k,e.name),Zi(K,e.name),Zi(te,e.name);const P=new yr({uid:Z,auth:e,email:T,emailVerified:oe,displayName:v,isAnonymous:Ee,photoURL:N,phoneNumber:R,tenantId:M,stsTokenManager:S,createdAt:K,lastLoginAt:te});return we&&Array.isArray(we)&&(P.providerData=we.map(D=>Object.assign({},D))),k&&(P._redirectEventId=k),P}static async _fromIdTokenResponse(e,t,r=!1){const i=new Da;i.updateFromServerResponse(t);const a=new yr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hd(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Te(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?_0(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),h=new Da;h.updateFromIdToken(r);const f=new yr({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,p),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Map;function _i(n){Ti(n instanceof Function,"Expected a class definition");let e=rw.get(n);return e?(Ti(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rw.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}y0.type="NONE";const iw=y0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n,e,t){return`firebase:${n}:${e}:${t}`}class La{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Gh(this.userKey,i.apiKey,a),this.fullPersistenceKey=Gh("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await cd(this.auth,{idToken:e}).catch(()=>{});return t?yr._fromGetAccountInfoResponse(this.auth,t,e):null}return yr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new La(_i(iw),e,r);const i=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=i[0]||_i(iw);const l=Gh(r,e.config.apiKey,e.name);let h=null;for(const p of t)try{const y=await p._get(l);if(y){let v;if(typeof y=="string"){const T=await cd(e,{idToken:y}).catch(()=>{});if(!T)break;v=await yr._fromGetAccountInfoResponse(e,T,y)}else v=yr._fromJSON(e,y);p!==a&&(h=v),a=p;break}}catch{}const f=i.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new La(a,e,r):(a=f[0],h&&await a._set(l,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==a)try{await p._remove(l)}catch{}})),new La(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(v0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(S0(e))return"Blackberry";if(C0(e))return"Webos";if(E0(e))return"Safari";if((e.includes("chrome/")||w0(e))&&!e.includes("edge/"))return"Chrome";if(I0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function v0(n=ln()){return/firefox\//i.test(n)}function E0(n=ln()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w0(n=ln()){return/crios\//i.test(n)}function T0(n=ln()){return/iemobile/i.test(n)}function I0(n=ln()){return/android/i.test(n)}function S0(n=ln()){return/blackberry/i.test(n)}function C0(n=ln()){return/webos/i.test(n)}function Xg(n=ln()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ax(n=ln()){var e;return Xg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Px(){return Dk()&&document.documentMode===10}function R0(n=ln()){return Xg(n)||I0(n)||C0(n)||S0(n)||/windows phone/i.test(n)||T0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(n,e=[]){let t;switch(n){case"Browser":t=sw(ln());break;case"Worker":t=`${sw(ln())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((l,h)=>{try{const f=e(a);l(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(n,e={}){return Rs(n,"GET","/v2/passwordPolicy",Cs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=6;class bx{constructor(e){var t,r,i,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:xx,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,a,l,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(i=f.containsLowercaseLetter)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(l=f.containsNumericCharacter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ow(this),this.idTokenSubscription=new ow(this),this.beforeStateQueue=new kx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_i(t)),this._initializationPromise=this.queue(async()=>{var r,i,a;if(!this._deleted&&(this.persistenceManager=await La.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cd(this,{idToken:e}),r=await yr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(fn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=i==null?void 0:i._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&(f!=null&&f.user)&&(i=f.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(vi(this));const t=e?nt(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_i(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nx(this),t=new bx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_i(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await La.create(this,[_i(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(h,this,"internal-error"),h.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,i);return()=>{l=!0,f()}}else{const f=e.addObserver(t);return()=>{l=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&lx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Po(n){return nt(n)}class ow{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dx(n){Xd=n}function P0(n){return Xd.loadJS(n)}function Lx(){return Xd.recaptchaEnterpriseScript}function Mx(){return Xd.gapiScript}function Vx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Fx{constructor(){this.enterprise=new Ux}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ux{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jx="recaptcha-enterprise",k0="NO_RECAPTCHA";class Bx{constructor(e){this.type=jx,this.auth=Po(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,h)=>{yx(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const p=new _x(f);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,l(p.siteKey)}}).catch(f=>{h(f)})})}function i(a,l,h){const f=window.grecaptcha;tw(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(p=>{l(p)}).catch(()=>{l(k0)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Fx().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{r(this.auth).then(h=>{if(!t&&tw(window.grecaptcha))i(h,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Lx();f.length!==0&&(f+=h),P0(f).then(()=>{i(h,a,l)}).catch(p=>{l(p)})}}).catch(h=>{l(h)})})}}async function aw(n,e,t,r=!1,i=!1){const a=new Bx(n);let l;if(i)l=k0;else try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,p=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:p,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Ym(n,e,t,r,i){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await aw(n,e,t,t==="getOobCode");return r(n,l)}else return r(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await aw(n,e,t,t==="getOobCode");return r(n,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(n,e){const t=Rr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Hr(a,e??{}))return i;Cr(i,"already-initialized")}return t.initialize({options:e})}function $x(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_i);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wx(n,e,t){const r=Po(n);Te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=N0(e),{host:l,port:h}=Hx(e),f=h===null?"":`:${h}`,p={url:`${a}//${l}${f}/`},y=Object.freeze({host:l,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Te(Hr(p,r.config.emulator)&&Hr(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,qx()}function N0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hx(n){const e=N0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:lw(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:lw(l)}}}function lw(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gi("not implemented")}_getIdTokenResponse(e){return gi("not implemented")}_linkToIdToken(e,t){return gi("not implemented")}_getReauthenticationResolver(e){return gi("not implemented")}}async function Gx(n,e){return Rs(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(n,e){return sc(n,"POST","/v1/accounts:signInWithPassword",Cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(n,e){return sc(n,"POST","/v1/accounts:signInWithEmailLink",Cs(n,e))}async function Yx(n,e){return sc(n,"POST","/v1/accounts:signInWithEmailLink",Cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Zg{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Uu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Uu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ym(e,t,"signInWithPassword",Kx);case"emailLink":return Qx(e,{email:this._email,oobCode:this._password});default:Cr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ym(e,r,"signUpPassword",Gx);case"emailLink":return Yx(e,{idToken:t,email:this._email,oobCode:this._password});default:Cr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(n,e){return sc(n,"POST","/v1/accounts:signInWithIdp",Cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx="http://localhost";class go extends Zg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new go(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Cr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,a=Kg(t,["providerId","signInMethod"]);if(!r||!i)return null;const l=new go(r,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Ma(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ma(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ma(e,t)}buildRequest(){const e={requestUri:Jx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=el(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zx(n){const e=gu(_u(n)).link,t=e?gu(_u(e)).deep_link_id:null,r=gu(_u(n)).deep_link_id;return(r?gu(_u(r)).link:null)||r||t||e||n}class e_{constructor(e){var t,r,i,a,l,h;const f=gu(_u(e)),p=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,v=Xx((i=f.mode)!==null&&i!==void 0?i:null);Te(p&&y&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=f.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=Zx(e);try{return new e_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.providerId=rl.PROVIDER_ID}static credential(e,t){return Uu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=e_.parseLink(t);return Te(r,"argument-error"),Uu._fromEmailAndCode(e,r.code,r.tenantId)}}rl.PROVIDER_ID="password";rl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends x0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends oc{constructor(){super("facebook.com")}static credential(e){return go._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com";es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends oc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return go._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ts.credential(t,r)}catch{return null}}}ts.GOOGLE_SIGN_IN_METHOD="google.com";ts.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends oc{constructor(){super("github.com")}static credential(e){return go._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.GITHUB_SIGN_IN_METHOD="github.com";ns.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends oc{constructor(){super("twitter.com")}static credential(e,t){return go._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return rs.credential(t,r)}catch{return null}}}rs.TWITTER_SIGN_IN_METHOD="twitter.com";rs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(n,e){return sc(n,"POST","/v1/accounts:signUp",Cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await yr._fromIdTokenResponse(e,r,i),l=uw(r);return new _o({user:a,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=uw(r);return new _o({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function uw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends $n{constructor(e,t,r,i){var a;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new dd(e,t,r,i)}}function b0(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?dd._fromErrorAndOperation(n,a,e,r):a})}async function tb(n,e,t=!1){const r=await Fu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _o._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(n,e,t=!1){const{auth:r}=n;if(fn(r.app))return Promise.reject(vi(r));const i="reauthenticate";try{const a=await Fu(n,b0(r,i,e,n),t);Te(a.idToken,r,"internal-error");const l=Jg(a.idToken);Te(l,r,"internal-error");const{sub:h}=l;return Te(n.uid===h,r,"user-mismatch"),_o._forOperation(n,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Cr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(n,e,t=!1){if(fn(n.app))return Promise.reject(vi(n));const r="signIn",i=await b0(n,r,e),a=await _o._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function rb(n,e){return O0(Po(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(n){const e=Po(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ib(n,e,t){if(fn(n.app))return Promise.reject(vi(n));const r=Po(n),l=await Ym(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eb).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&D0(n),f}),h=await _o._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(h.user),h}function sb(n,e,t){return fn(n.app)?Promise.reject(vi(n)):rb(nt(n),rl.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&D0(n),r})}function ob(n,e,t,r){return nt(n).onIdTokenChanged(e,t,r)}function ab(n,e,t){return nt(n).beforeAuthStateChanged(e,t)}function lb(n,e,t,r){return nt(n).onAuthStateChanged(e,t,r)}const fd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fd,"1"),this.storage.removeItem(fd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=1e3,cb=10;class M0 extends L0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=R0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,h,f)=>{this.notifyListeners(l,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);Px()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cb):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}M0.type="LOCAL";const hb=M0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0 extends L0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}V0.type="SESSION";const F0=V0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Zd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const h=Array.from(l).map(async p=>p(t.origin,a)),f=await db(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((h,f)=>{const p=t_("",20);i.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(v){const T=v;if(T.data.eventId===p)switch(T.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(T.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return window}function pb(n){zr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){return typeof zr().WorkerGlobalScope<"u"&&typeof zr().importScripts=="function"}async function mb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _b(){return U0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firebaseLocalStorageDb",yb=1,pd="firebaseLocalStorage",B0="fbase_key";class ac{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ef(n,e){return n.transaction([pd],e?"readwrite":"readonly").objectStore(pd)}function vb(){const n=indexedDB.deleteDatabase(j0);return new ac(n).toPromise()}function Jm(){const n=indexedDB.open(j0,yb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(pd,{keyPath:B0})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(pd)?e(r):(r.close(),await vb(),e(await Jm()))})})}async function cw(n,e,t){const r=ef(n,!0).put({[B0]:e,value:t});return new ac(r).toPromise()}async function Eb(n,e){const t=ef(n,!1).get(e),r=await new ac(t).toPromise();return r===void 0?null:r.value}function hw(n,e){const t=ef(n,!0).delete(e);return new ac(t).toPromise()}const wb=800,Tb=3;class z0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Tb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zd._getInstance(_b()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mb(),!this.activeServiceWorker)return;this.sender=new fb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jm();return await cw(e,fd,"1"),await hw(e,fd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cw(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Eb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=ef(i,!1).getAll();return new ac(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z0.type="LOCAL";const Ib=z0;new ic(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(n,e){return e?_i(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_ extends Zg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ma(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ma(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ma(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cb(n){return O0(n.auth,new n_(n),n.bypassAuthState)}function Rb(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),nb(t,new n_(n),n.bypassAuthState)}async function Ab(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),tb(t,new n_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:l,type:h}=e;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cb;case"linkViaPopup":case"linkViaRedirect":return Ab;case"reauthViaPopup":case"reauthViaRedirect":return Rb;default:Cr(this.auth,"internal-error")}}resolve(e){Ti(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ti(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=new ic(2e3,1e4);class ba extends $0{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ba.currentPopupAction&&ba.currentPopupAction.cancel(),ba.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Ti(this.filter.length===1,"Popup operations only handle one event");const e=t_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Br(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Br(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ba.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Br(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pb.get())};e()}}ba.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="pendingRedirect",Kh=new Map;class Nb extends $0{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Kh.get(this.auth._key());if(!e){try{const r=await xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Kh.set(this.auth._key(),e)}return this.bypassAuthState||Kh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xb(n,e){const t=Db(e),r=Ob(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function bb(n,e){Kh.set(n._key(),e)}function Ob(n){return _i(n._redirectPersistence)}function Db(n){return Gh(kb,n.config.apiKey,n.name)}async function Lb(n,e,t=!1){if(fn(n.app))return Promise.reject(vi(n));const r=Po(n),i=Sb(r,e),l=await new Nb(r,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=10*60*1e3;class Vb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!W0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Br(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mb&&this.cachedEventUids.clear(),this.cachedEventUids.has(dw(e))}saveEventToCache(e){this.cachedEventUids.add(dw(e)),this.lastProcessedEventTime=Date.now()}}function dw(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function W0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ub(n,e={}){return Rs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bb=/^https?/;async function zb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ub(n);for(const t of e)try{if($b(t))return}catch{}Cr(n,"unauthorized-domain")}function $b(n){const e=Km(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!Bb.test(t))return!1;if(jb.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=new ic(3e4,6e4);function fw(){const n=zr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Hb(n){return new Promise((e,t)=>{var r,i,a;function l(){fw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fw(),t(Br(n,"network-request-failed"))},timeout:Wb.get()})}if(!((i=(r=zr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=zr().gapi)===null||a===void 0)&&a.load)l();else{const h=Vx("iframefcb");return zr()[h]=()=>{gapi.load?l():t(Br(n,"network-request-failed"))},P0(`${Mx()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw Qh=null,e})}let Qh=null;function qb(n){return Qh=Qh||Hb(n),Qh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new ic(5e3,15e3),Kb="__/auth/iframe",Qb="emulator/auth/iframe",Yb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xb(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yg(e,Qb):`https://${n.config.authDomain}/${Kb}`,r={apiKey:e.apiKey,appName:n.name,v:Qr},i=Jb.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${el(r).slice(1)}`}async function Zb(n){const e=await qb(n),t=zr().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:Xb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yb,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const l=Br(n,"network-request-failed"),h=zr().setTimeout(()=>{a(l)},Gb.get());function f(){zr().clearTimeout(h),i(r)}r.ping(f).then(f,()=>{a(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t1=500,n1=600,r1="_blank",i1="http://localhost";class pw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s1(n,e,t,r=t1,i=n1){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},e1),{width:r.toString(),height:i.toString(),top:a,left:l}),p=ln().toLowerCase();t&&(h=w0(p)?r1:t),v0(p)&&(e=e||i1,f.scrollbars="yes");const y=Object.entries(f).reduce((T,[R,N])=>`${T}${R}=${N},`,"");if(Ax(p)&&h!=="_self")return o1(e||"",h),new pw(null);const v=window.open(e||"",h,y);Te(v,n,"popup-blocked");try{v.focus()}catch{}return new pw(v)}function o1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="__/auth/handler",l1="emulator/auth/handler",u1=encodeURIComponent("fac");async function mw(n,e,t,r,i,a){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Qr,eventId:i};if(e instanceof x0){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",$m(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries({}))l[y]=v}if(e instanceof oc){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(l.scopes=y.join(","))}n.tenantId&&(l.tid=n.tenantId);const h=l;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),p=f?`#${u1}=${encodeURIComponent(f)}`:"";return`${c1(n)}?${el(h).slice(1)}${p}`}function c1({config:n}){return n.emulator?Yg(n,l1):`https://${n.authDomain}/${a1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="webStorageSupport";class h1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F0,this._completeRedirectFn=Lb,this._overrideRedirectResult=bb}async _openPopup(e,t,r,i){var a;Ti((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await mw(e,t,r,Km(),i);return s1(e,l,t_())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await mw(e,t,r,Km(),i);return pb(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Ti(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Zb(e),r=new Vb(e);return t.register("authEvent",i=>(Te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Im,{type:Im},i=>{var a;const l=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Im];l!==void 0&&t(!!l),Cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return R0()||E0()||Xg()}}const d1=h1;var gw="@firebase/auth",_w="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m1(n){xn(new Nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:h}=r.options;Te(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:l,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A0(n)},p=new Ox(r,i,a,f);return $x(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xn(new Nn("auth-internal",e=>{const t=Po(e.getProvider("auth").getImmediate());return(r=>new f1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(gw,_w,p1(n)),Tt(gw,_w,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=5*60,_1=HI("authIdTokenMaxAge")||g1;let yw=null;const y1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>_1)return;const i=t==null?void 0:t.token;yw!==i&&(yw=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function r_(n=nl()){const e=Rr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zx(n,{popupRedirectResolver:d1,persistence:[Ib,hb,F0]}),r=HI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=y1(a.toString());ab(t,l,()=>l(t.currentUser)),ob(t,h=>l(h))}}const i=$I("auth");return i&&Wx(t,`http://${i}`),t}function v1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Dx({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=Br("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",v1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m1("Browser");var vw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls,H0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,S){function P(){}P.prototype=S.prototype,O.D=S.prototype,O.prototype=new P,O.prototype.constructor=O,O.C=function(D,V,U){for(var A=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)A[pt-2]=arguments[pt];return S.prototype[V].apply(D,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(O,S,P){P||(P=0);var D=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)D[V]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(V=0;16>V;++V)D[V]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=O.g[0],P=O.g[1],V=O.g[2];var U=O.g[3],A=S+(U^P&(V^U))+D[0]+3614090360&4294967295;S=P+(A<<7&4294967295|A>>>25),A=U+(V^S&(P^V))+D[1]+3905402710&4294967295,U=S+(A<<12&4294967295|A>>>20),A=V+(P^U&(S^P))+D[2]+606105819&4294967295,V=U+(A<<17&4294967295|A>>>15),A=P+(S^V&(U^S))+D[3]+3250441966&4294967295,P=V+(A<<22&4294967295|A>>>10),A=S+(U^P&(V^U))+D[4]+4118548399&4294967295,S=P+(A<<7&4294967295|A>>>25),A=U+(V^S&(P^V))+D[5]+1200080426&4294967295,U=S+(A<<12&4294967295|A>>>20),A=V+(P^U&(S^P))+D[6]+2821735955&4294967295,V=U+(A<<17&4294967295|A>>>15),A=P+(S^V&(U^S))+D[7]+4249261313&4294967295,P=V+(A<<22&4294967295|A>>>10),A=S+(U^P&(V^U))+D[8]+1770035416&4294967295,S=P+(A<<7&4294967295|A>>>25),A=U+(V^S&(P^V))+D[9]+2336552879&4294967295,U=S+(A<<12&4294967295|A>>>20),A=V+(P^U&(S^P))+D[10]+4294925233&4294967295,V=U+(A<<17&4294967295|A>>>15),A=P+(S^V&(U^S))+D[11]+2304563134&4294967295,P=V+(A<<22&4294967295|A>>>10),A=S+(U^P&(V^U))+D[12]+1804603682&4294967295,S=P+(A<<7&4294967295|A>>>25),A=U+(V^S&(P^V))+D[13]+4254626195&4294967295,U=S+(A<<12&4294967295|A>>>20),A=V+(P^U&(S^P))+D[14]+2792965006&4294967295,V=U+(A<<17&4294967295|A>>>15),A=P+(S^V&(U^S))+D[15]+1236535329&4294967295,P=V+(A<<22&4294967295|A>>>10),A=S+(V^U&(P^V))+D[1]+4129170786&4294967295,S=P+(A<<5&4294967295|A>>>27),A=U+(P^V&(S^P))+D[6]+3225465664&4294967295,U=S+(A<<9&4294967295|A>>>23),A=V+(S^P&(U^S))+D[11]+643717713&4294967295,V=U+(A<<14&4294967295|A>>>18),A=P+(U^S&(V^U))+D[0]+3921069994&4294967295,P=V+(A<<20&4294967295|A>>>12),A=S+(V^U&(P^V))+D[5]+3593408605&4294967295,S=P+(A<<5&4294967295|A>>>27),A=U+(P^V&(S^P))+D[10]+38016083&4294967295,U=S+(A<<9&4294967295|A>>>23),A=V+(S^P&(U^S))+D[15]+3634488961&4294967295,V=U+(A<<14&4294967295|A>>>18),A=P+(U^S&(V^U))+D[4]+3889429448&4294967295,P=V+(A<<20&4294967295|A>>>12),A=S+(V^U&(P^V))+D[9]+568446438&4294967295,S=P+(A<<5&4294967295|A>>>27),A=U+(P^V&(S^P))+D[14]+3275163606&4294967295,U=S+(A<<9&4294967295|A>>>23),A=V+(S^P&(U^S))+D[3]+4107603335&4294967295,V=U+(A<<14&4294967295|A>>>18),A=P+(U^S&(V^U))+D[8]+1163531501&4294967295,P=V+(A<<20&4294967295|A>>>12),A=S+(V^U&(P^V))+D[13]+2850285829&4294967295,S=P+(A<<5&4294967295|A>>>27),A=U+(P^V&(S^P))+D[2]+4243563512&4294967295,U=S+(A<<9&4294967295|A>>>23),A=V+(S^P&(U^S))+D[7]+1735328473&4294967295,V=U+(A<<14&4294967295|A>>>18),A=P+(U^S&(V^U))+D[12]+2368359562&4294967295,P=V+(A<<20&4294967295|A>>>12),A=S+(P^V^U)+D[5]+4294588738&4294967295,S=P+(A<<4&4294967295|A>>>28),A=U+(S^P^V)+D[8]+2272392833&4294967295,U=S+(A<<11&4294967295|A>>>21),A=V+(U^S^P)+D[11]+1839030562&4294967295,V=U+(A<<16&4294967295|A>>>16),A=P+(V^U^S)+D[14]+4259657740&4294967295,P=V+(A<<23&4294967295|A>>>9),A=S+(P^V^U)+D[1]+2763975236&4294967295,S=P+(A<<4&4294967295|A>>>28),A=U+(S^P^V)+D[4]+1272893353&4294967295,U=S+(A<<11&4294967295|A>>>21),A=V+(U^S^P)+D[7]+4139469664&4294967295,V=U+(A<<16&4294967295|A>>>16),A=P+(V^U^S)+D[10]+3200236656&4294967295,P=V+(A<<23&4294967295|A>>>9),A=S+(P^V^U)+D[13]+681279174&4294967295,S=P+(A<<4&4294967295|A>>>28),A=U+(S^P^V)+D[0]+3936430074&4294967295,U=S+(A<<11&4294967295|A>>>21),A=V+(U^S^P)+D[3]+3572445317&4294967295,V=U+(A<<16&4294967295|A>>>16),A=P+(V^U^S)+D[6]+76029189&4294967295,P=V+(A<<23&4294967295|A>>>9),A=S+(P^V^U)+D[9]+3654602809&4294967295,S=P+(A<<4&4294967295|A>>>28),A=U+(S^P^V)+D[12]+3873151461&4294967295,U=S+(A<<11&4294967295|A>>>21),A=V+(U^S^P)+D[15]+530742520&4294967295,V=U+(A<<16&4294967295|A>>>16),A=P+(V^U^S)+D[2]+3299628645&4294967295,P=V+(A<<23&4294967295|A>>>9),A=S+(V^(P|~U))+D[0]+4096336452&4294967295,S=P+(A<<6&4294967295|A>>>26),A=U+(P^(S|~V))+D[7]+1126891415&4294967295,U=S+(A<<10&4294967295|A>>>22),A=V+(S^(U|~P))+D[14]+2878612391&4294967295,V=U+(A<<15&4294967295|A>>>17),A=P+(U^(V|~S))+D[5]+4237533241&4294967295,P=V+(A<<21&4294967295|A>>>11),A=S+(V^(P|~U))+D[12]+1700485571&4294967295,S=P+(A<<6&4294967295|A>>>26),A=U+(P^(S|~V))+D[3]+2399980690&4294967295,U=S+(A<<10&4294967295|A>>>22),A=V+(S^(U|~P))+D[10]+4293915773&4294967295,V=U+(A<<15&4294967295|A>>>17),A=P+(U^(V|~S))+D[1]+2240044497&4294967295,P=V+(A<<21&4294967295|A>>>11),A=S+(V^(P|~U))+D[8]+1873313359&4294967295,S=P+(A<<6&4294967295|A>>>26),A=U+(P^(S|~V))+D[15]+4264355552&4294967295,U=S+(A<<10&4294967295|A>>>22),A=V+(S^(U|~P))+D[6]+2734768916&4294967295,V=U+(A<<15&4294967295|A>>>17),A=P+(U^(V|~S))+D[13]+1309151649&4294967295,P=V+(A<<21&4294967295|A>>>11),A=S+(V^(P|~U))+D[4]+4149444226&4294967295,S=P+(A<<6&4294967295|A>>>26),A=U+(P^(S|~V))+D[11]+3174756917&4294967295,U=S+(A<<10&4294967295|A>>>22),A=V+(S^(U|~P))+D[2]+718787259&4294967295,V=U+(A<<15&4294967295|A>>>17),A=P+(U^(V|~S))+D[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(V+(A<<21&4294967295|A>>>11))&4294967295,O.g[2]=O.g[2]+V&4294967295,O.g[3]=O.g[3]+U&4294967295}r.prototype.u=function(O,S){S===void 0&&(S=O.length);for(var P=S-this.blockSize,D=this.B,V=this.h,U=0;U<S;){if(V==0)for(;U<=P;)i(this,O,U),U+=this.blockSize;if(typeof O=="string"){for(;U<S;)if(D[V++]=O.charCodeAt(U++),V==this.blockSize){i(this,D),V=0;break}}else for(;U<S;)if(D[V++]=O[U++],V==this.blockSize){i(this,D),V=0;break}}this.h=V,this.o+=S},r.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;var P=8*this.o;for(S=O.length-8;S<O.length;++S)O[S]=P&255,P/=256;for(this.u(O),O=Array(16),S=P=0;4>S;++S)for(var D=0;32>D;D+=8)O[P++]=this.g[S]>>>D&255;return O};function a(O,S){var P=h;return Object.prototype.hasOwnProperty.call(P,O)?P[O]:P[O]=S(O)}function l(O,S){this.h=S;for(var P=[],D=!0,V=O.length-1;0<=V;V--){var U=O[V]|0;D&&U==S||(P[V]=U,D=!1)}this.g=P}var h={};function f(O){return-128<=O&&128>O?a(O,function(S){return new l([S|0],0>S?-1:0)}):new l([O|0],0>O?-1:0)}function p(O){if(isNaN(O)||!isFinite(O))return v;if(0>O)return k(p(-O));for(var S=[],P=1,D=0;O>=P;D++)S[D]=O/P|0,P*=4294967296;return new l(S,0)}function y(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return k(y(O.substring(1),S));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=p(Math.pow(S,8)),D=v,V=0;V<O.length;V+=8){var U=Math.min(8,O.length-V),A=parseInt(O.substring(V,V+U),S);8>U?(U=p(Math.pow(S,U)),D=D.j(U).add(p(A))):(D=D.j(P),D=D.add(p(A)))}return D}var v=f(0),T=f(1),R=f(16777216);n=l.prototype,n.m=function(){if(M(this))return-k(this).m();for(var O=0,S=1,P=0;P<this.g.length;P++){var D=this.i(P);O+=(0<=D?D:4294967296+D)*S,S*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(N(this))return"0";if(M(this))return"-"+k(this).toString(O);for(var S=p(Math.pow(O,6)),P=this,D="";;){var V=oe(P,S).g;P=K(P,V.j(S));var U=((0<P.g.length?P.g[0]:P.h)>>>0).toString(O);if(P=V,N(P))return U+D;for(;6>U.length;)U="0"+U;D=U+D}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function N(O){if(O.h!=0)return!1;for(var S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function M(O){return O.h==-1}n.l=function(O){return O=K(this,O),M(O)?-1:N(O)?0:1};function k(O){for(var S=O.g.length,P=[],D=0;D<S;D++)P[D]=~O.g[D];return new l(P,~O.h).add(T)}n.abs=function(){return M(this)?k(this):this},n.add=function(O){for(var S=Math.max(this.g.length,O.g.length),P=[],D=0,V=0;V<=S;V++){var U=D+(this.i(V)&65535)+(O.i(V)&65535),A=(U>>>16)+(this.i(V)>>>16)+(O.i(V)>>>16);D=A>>>16,U&=65535,A&=65535,P[V]=A<<16|U}return new l(P,P[P.length-1]&-2147483648?-1:0)};function K(O,S){return O.add(k(S))}n.j=function(O){if(N(this)||N(O))return v;if(M(this))return M(O)?k(this).j(k(O)):k(k(this).j(O));if(M(O))return k(this.j(k(O)));if(0>this.l(R)&&0>O.l(R))return p(this.m()*O.m());for(var S=this.g.length+O.g.length,P=[],D=0;D<2*S;D++)P[D]=0;for(D=0;D<this.g.length;D++)for(var V=0;V<O.g.length;V++){var U=this.i(D)>>>16,A=this.i(D)&65535,pt=O.i(V)>>>16,Yt=O.i(V)&65535;P[2*D+2*V]+=A*Yt,te(P,2*D+2*V),P[2*D+2*V+1]+=U*Yt,te(P,2*D+2*V+1),P[2*D+2*V+1]+=A*pt,te(P,2*D+2*V+1),P[2*D+2*V+2]+=U*pt,te(P,2*D+2*V+2)}for(D=0;D<S;D++)P[D]=P[2*D+1]<<16|P[2*D];for(D=S;D<2*S;D++)P[D]=0;return new l(P,0)};function te(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function Z(O,S){this.g=O,this.h=S}function oe(O,S){if(N(S))throw Error("division by zero");if(N(O))return new Z(v,v);if(M(O))return S=oe(k(O),S),new Z(k(S.g),k(S.h));if(M(S))return S=oe(O,k(S)),new Z(k(S.g),S.h);if(30<O.g.length){if(M(O)||M(S))throw Error("slowDivide_ only works with positive integers.");for(var P=T,D=S;0>=D.l(O);)P=Ee(P),D=Ee(D);var V=we(P,1),U=we(D,1);for(D=we(D,2),P=we(P,2);!N(D);){var A=U.add(D);0>=A.l(O)&&(V=V.add(P),U=A),D=we(D,1),P=we(P,1)}return S=K(O,V.j(S)),new Z(V,S)}for(V=v;0<=O.l(S);){for(P=Math.max(1,Math.floor(O.m()/S.m())),D=Math.ceil(Math.log(P)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),U=p(P),A=U.j(S);M(A)||0<A.l(O);)P-=D,U=p(P),A=U.j(S);N(U)&&(U=T),V=V.add(U),O=K(O,A)}return new Z(V,O)}n.A=function(O){return oe(this,O).h},n.and=function(O){for(var S=Math.max(this.g.length,O.g.length),P=[],D=0;D<S;D++)P[D]=this.i(D)&O.i(D);return new l(P,this.h&O.h)},n.or=function(O){for(var S=Math.max(this.g.length,O.g.length),P=[],D=0;D<S;D++)P[D]=this.i(D)|O.i(D);return new l(P,this.h|O.h)},n.xor=function(O){for(var S=Math.max(this.g.length,O.g.length),P=[],D=0;D<S;D++)P[D]=this.i(D)^O.i(D);return new l(P,this.h^O.h)};function Ee(O){for(var S=O.g.length+1,P=[],D=0;D<S;D++)P[D]=O.i(D)<<1|O.i(D-1)>>>31;return new l(P,O.h)}function we(O,S){var P=S>>5;S%=32;for(var D=O.g.length-P,V=[],U=0;U<D;U++)V[U]=0<S?O.i(U+P)>>>S|O.i(U+P+1)<<32-S:O.i(U+P);return new l(V,O.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,H0=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=y,ls=l}).apply(typeof vw<"u"?vw:typeof self<"u"?self:typeof window<"u"?window:{});var Fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var q0,yu,G0,Yh,Xm,K0,Q0,Y0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,E){return c==Array.prototype||c==Object.prototype||(c[g]=E.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fh=="object"&&Fh];for(var g=0;g<c.length;++g){var E=c[g];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function i(c,g){if(g)e:{var E=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var j=c[I];if(!(j in E))break e;E=E[j]}c=c[c.length-1],I=E[c],g=g(I),g!=I&&g!=null&&e(E,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var E=0,I=!1,j={next:function(){if(!I&&E<c.length){var W=E++;return{value:g(W,c[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}i("Array.prototype.values",function(c){return c||function(){return a(this,function(g,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function p(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,E){return c.call.apply(c.bind,arguments)}function v(c,g,E){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,I),c.apply(g,j)}}return function(){return c.apply(g,arguments)}}function T(c,g,E){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,T.apply(null,arguments)}function R(c,g){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function N(c,g){function E(){}E.prototype=g.prototype,c.aa=g.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(I,j,W){for(var ie=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)ie[Ke-2]=arguments[Ke];return g.prototype[j].apply(I,ie)}}function M(c){const g=c.length;if(0<g){const E=Array(g);for(let I=0;I<g;I++)E[I]=c[I];return E}return[]}function k(c,g){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(f(I)){const j=c.length||0,W=I.length||0;c.length=j+W;for(let ie=0;ie<W;ie++)c[j+ie]=I[ie]}else c.push(I)}}class K{constructor(g,E){this.i=g,this.j=E,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function te(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function oe(c){return oe[" "](c),c}oe[" "]=function(){};var Ee=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function we(c,g,E){for(const I in c)g.call(E,c[I],I,c)}function O(c,g){for(const E in c)g.call(void 0,c[E],E,c)}function S(c){const g={};for(const E in c)g[E]=c[E];return g}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(c,g){let E,I;for(let j=1;j<arguments.length;j++){I=arguments[j];for(E in I)c[E]=I[E];for(let W=0;W<P.length;W++)E=P[W],Object.prototype.hasOwnProperty.call(I,E)&&(c[E]=I[E])}}function V(c){var g=1;c=c.split(":");const E=[];for(;0<g&&c.length;)E.push(c.shift()),g--;return c.length&&E.push(c.join(":")),E}function U(c){h.setTimeout(()=>{throw c},0)}function A(){var c=ge;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class pt{constructor(){this.h=this.g=null}add(g,E){const I=Yt.get();I.set(g,E),this.h?this.h.next=I:this.g=I,this.h=I}}var Yt=new K(()=>new Jt,c=>c.reset());class Jt{constructor(){this.next=this.g=this.h=null}set(g,E){this.h=g,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,se=!1,ge=new pt,le=()=>{const c=h.Promise.resolve(void 0);Qe=()=>{c.then(F)}};var F=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(E){U(E)}var g=Yt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}se=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var ke=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};h.addEventListener("test",E,g),h.removeEventListener("test",E,g)}catch{}return c}();function xe(c,g){if(pe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Ee){e:{try{oe(g.nodeName);var j=!0;break e}catch{}j=!1}j||(g=null)}}else E=="mouseover"?g=c.fromElement:E=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ue[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&xe.aa.h.call(this)}}N(xe,pe);var Ue={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),He=0;function Xe(c,g,E,I,j){this.listener=c,this.proxy=null,this.src=g,this.type=E,this.capture=!!I,this.ha=j,this.key=++He,this.da=this.fa=!1}function Dt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Jr(c){this.src=c,this.g={},this.h=0}Jr.prototype.add=function(c,g,E,I,j){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var ie=Pi(c,g,I,j);return-1<ie?(g=c[ie],E||(g.fa=!1)):(g=new Xe(g,this.src,W,!!I,j),g.fa=E,c.push(g)),g};function Lo(c,g){var E=g.type;if(E in c.g){var I=c.g[E],j=Array.prototype.indexOf.call(I,g,void 0),W;(W=0<=j)&&Array.prototype.splice.call(I,j,1),W&&(Dt(g),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Pi(c,g,E,I){for(var j=0;j<c.length;++j){var W=c[j];if(!W.da&&W.listener==g&&W.capture==!!E&&W.ha==I)return j}return-1}var Ns="closure_lm_"+(1e6*Math.random()|0),Mo={};function ml(c,g,E,I,j){if(Array.isArray(g)){for(var W=0;W<g.length;W++)ml(c,g[W],E,I,j);return null}return E=yl(E),c&&c[We]?c.K(g,E,p(I)?!!I.capture:!1,j):gl(c,g,E,!1,I,j)}function gl(c,g,E,I,j,W){if(!g)throw Error("Invalid event type");var ie=p(j)?!!j.capture:!!j,Ke=Fo(c);if(Ke||(c[Ns]=Ke=new Jr(c)),E=Ke.add(g,E,I,ie,W),E.proxy)return E;if(I=wc(),E.proxy=I,I.src=c,I.listener=E,c.addEventListener)ke||(j=ie),j===void 0&&(j=!1),c.addEventListener(g.toString(),I,j);else if(c.attachEvent)c.attachEvent(Zr(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function wc(){function c(E){return g.call(c.src,c.listener,E)}const g=_l;return c}function Vo(c,g,E,I,j){if(Array.isArray(g))for(var W=0;W<g.length;W++)Vo(c,g[W],E,I,j);else I=p(I)?!!I.capture:!!I,E=yl(E),c&&c[We]?(c=c.i,g=String(g).toString(),g in c.g&&(W=c.g[g],E=Pi(W,E,I,j),-1<E&&(Dt(W[E]),Array.prototype.splice.call(W,E,1),W.length==0&&(delete c.g[g],c.h--)))):c&&(c=Fo(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Pi(g,E,I,j)),(E=-1<c?g[c]:null)&&Xr(E))}function Xr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[We])Lo(g.i,c);else{var E=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(E,I,c.capture):g.detachEvent?g.detachEvent(Zr(E),I):g.addListener&&g.removeListener&&g.removeListener(I),(E=Fo(g))?(Lo(E,c),E.h==0&&(E.src=null,g[Ns]=null)):Dt(c)}}}function Zr(c){return c in Mo?Mo[c]:Mo[c]="on"+c}function _l(c,g){if(c.da)c=!0;else{g=new xe(g,this);var E=c.listener,I=c.ha||c.src;c.fa&&Xr(c),c=E.call(I,g)}return c}function Fo(c){return c=c[Ns],c instanceof Jr?c:null}var Uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function yl(c){return typeof c=="function"?c:(c[Uo]||(c[Uo]=function(g){return c.handleEvent(g)}),c[Uo])}function Ct(){G.call(this),this.i=new Jr(this),this.M=this,this.F=null}N(Ct,G),Ct.prototype[We]=!0,Ct.prototype.removeEventListener=function(c,g,E,I){Vo(this,c,g,E,I)};function Rt(c,g){var E,I=c.F;if(I)for(E=[];I;I=I.F)E.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new pe(g,c);else if(g instanceof pe)g.target=g.target||c;else{var j=g;g=new pe(I,c),D(g,j)}if(j=!0,E)for(var W=E.length-1;0<=W;W--){var ie=g.g=E[W];j=ei(ie,I,!0,g)&&j}if(ie=g.g=c,j=ei(ie,I,!0,g)&&j,j=ei(ie,I,!1,g)&&j,E)for(W=0;W<E.length;W++)ie=g.g=E[W],j=ei(ie,I,!1,g)&&j}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var E=c.g[g],I=0;I<E.length;I++)Dt(E[I]);delete c.g[g],c.h--}}this.F=null},Ct.prototype.K=function(c,g,E,I){return this.i.add(String(c),g,!1,E,I)},Ct.prototype.L=function(c,g,E,I){return this.i.add(String(c),g,!0,E,I)};function ei(c,g,E,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,W=0;W<g.length;++W){var ie=g[W];if(ie&&!ie.da&&ie.capture==E){var Ke=ie.listener,At=ie.ha||ie.src;ie.fa&&Lo(c.i,ie),j=Ke.call(At,I)!==!1&&j}}return j&&!I.defaultPrevented}function vl(c,g,E){if(typeof c=="function")E&&(c=T(c,E));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(c,g||0)}function ki(c){c.g=vl(()=>{c.g=null,c.i&&(c.i=!1,ki(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class xs extends G{constructor(g,E){super(),this.m=g,this.l=E,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ki(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(c){G.call(this),this.h=c,this.g={}}N(bs,G);var El=[];function wl(c){we(c.g,function(g,E){this.g.hasOwnProperty(E)&&Xr(g)},c),c.g={}}bs.prototype.N=function(){bs.aa.N.call(this),wl(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tl=h.JSON.stringify,Il=h.JSON.parse,Sl=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function Os(){}Os.prototype.h=null;function jo(c){return c.h||(c.h=c.i())}function Bo(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pr(){pe.call(this,"d")}N(Pr,pe);function zo(){pe.call(this,"c")}N(zo,pe);var kr={},Cl=null;function Ds(){return Cl=Cl||new Ct}kr.La="serverreachability";function Rl(c){pe.call(this,kr.La,c)}N(Rl,pe);function ti(c){const g=Ds();Rt(g,new Rl(g))}kr.STAT_EVENT="statevent";function Al(c,g){pe.call(this,kr.STAT_EVENT,c),this.stat=g}N(Al,pe);function mt(c){const g=Ds();Rt(g,new Al(g,c))}kr.Ma="timingevent";function $o(c,g){pe.call(this,kr.Ma,c),this.size=g}N($o,pe);function nr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},g)}function Ls(){this.g=!0}Ls.prototype.xa=function(){this.g=!1};function Ms(c,g,E,I,j,W){c.info(function(){if(c.g)if(W)for(var ie="",Ke=W.split("&"),At=0;At<Ke.length;At++){var je=Ke[At].split("=");if(1<je.length){var Lt=je[0];je=je[1];var vt=Lt.split("_");ie=2<=vt.length&&vt[1]=="type"?ie+(Lt+"="+je+"&"):ie+(Lt+"=redacted&")}}else ie=null;else ie=W;return"XMLHTTP REQ ("+I+") [attempt "+j+"]: "+g+`
`+E+`
`+ie})}function Wo(c,g,E,I,j,W,ie){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+j+"]: "+g+`
`+E+`
`+W+" "+ie})}function rr(c,g,E,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+jf(c,E)+(I?" "+I:"")})}function Pl(c,g){c.info(function(){return"TIMEOUT: "+g})}Ls.prototype.info=function(){};function jf(c,g){if(!c.g)return g;if(!g)return null;try{var E=JSON.parse(g);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var I=E[c];if(!(2>I.length)){var j=I[1];if(Array.isArray(j)&&!(1>j.length)){var W=j[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ie=1;ie<j.length;ie++)j[ie]=""}}}}return Tl(E)}catch{return g}}var Ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ir;function Vs(){}N(Vs,Os),Vs.prototype.g=function(){return new XMLHttpRequest},Vs.prototype.i=function(){return{}},ir=new Vs;function sr(c,g,E,I){this.j=c,this.i=g,this.l=E,this.R=I||1,this.U=new bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ic}function Ic(){this.i=null,this.g="",this.h=!1}var kl={},qo={};function Go(c,g,E){c.L=1,c.v=Di(Dn(g)),c.m=E,c.P=!0,Nl(c,null)}function Nl(c,g){c.F=Date.now(),Ze(c),c.A=Dn(c.v);var E=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Mi(E.i,"t",I),c.C=0,E=c.j.J,c.h=new Ic,c.g=Bc(c.j,E?g:null,!c.m),0<c.O&&(c.M=new xs(T(c.Y,c,c.g),c.O)),g=c.U,E=c.g,I=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(El[0]=j.toString()),j=El);for(var W=0;W<j.length;W++){var ie=ml(E,j[W],I||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),ti(),Ms(c.i,c.u,c.A,c.l,c.R,c.m)}sr.prototype.ca=function(c){c=c.target;const g=this.M;g&&gn(c)==3?g.j():this.Y(c)},sr.prototype.Y=function(c){try{if(c==this.g)e:{const vt=gn(this.g);var g=this.g.Ba();const Gn=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Ml(this.g)))){this.J||vt!=4||g==7||(g==8||0>=Gn?ti(3):ti(2)),Fs(this);var E=this.g.Z();this.X=E;t:if(Sc(this)){var I=Ml(this.g);c="";var j=I.length,W=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hn(this),Ni(this);var ie="";break t}this.h.i=new h.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(W&&g==j-1)});I.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=E==200,Wo(this.i,this.u,this.A,this.l,this.R,vt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,At=this.g;if((Ke=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Ke)){var je=Ke;break t}}je=null}if(E=je)rr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xl(this,E);else{this.o=!1,this.s=3,mt(12),Hn(this),Ni(this);break e}}if(this.P){E=!0;let Mn;for(;!this.J&&this.C<ie.length;)if(Mn=Bf(this,ie),Mn==qo){vt==4&&(this.s=4,mt(14),E=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(Mn==kl){this.s=4,mt(15),rr(this.i,this.l,ie,"[Invalid Chunk]"),E=!1;break}else rr(this.i,this.l,Mn,null),xl(this,Mn);if(Sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||ie.length!=0||this.h.h||(this.s=1,mt(16),E=!1),this.o=this.o&&E,!E)rr(this.i,this.l,ie,"[Invalid Chunked Response]"),Hn(this),Ni(this);else if(0<ie.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Fl(Lt),Lt.M=!0,mt(11))}}else rr(this.i,this.l,ie,null),xl(this,ie);vt==4&&Hn(this),this.o&&!this.J&&(vt==4?ia(this.j,this):(this.o=!1,Ze(this)))}else Zo(this.g),E==400&&0<ie.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Hn(this),Ni(this)}}}catch{}finally{}};function Sc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Bf(c,g){var E=c.C,I=g.indexOf(`
`,E);return I==-1?qo:(E=Number(g.substring(E,I)),isNaN(E)?kl:(I+=1,I+E>g.length?qo:(g=g.slice(I,I+E),c.C=I+E,g)))}sr.prototype.cancel=function(){this.J=!0,Hn(this)};function Ze(c){c.S=Date.now()+c.I,Cc(c,c.I)}function Cc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=nr(T(c.ba,c),g)}function Fs(c){c.B&&(h.clearTimeout(c.B),c.B=null)}sr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Pl(this.i,this.A),this.L!=2&&(ti(),mt(17)),Hn(this),this.s=2,Ni(this)):Cc(this,this.S-c)};function Ni(c){c.j.G==0||c.J||ia(c.j,c)}function Hn(c){Fs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,wl(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function xl(c,g){try{var E=c.j;if(E.G!=0&&(E.g==c||un(E.h,c))){if(!c.K&&un(E.h,c)&&E.G==3){try{var I=E.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var j=I;if(j[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)ra(E),cr(E);else break e;na(E),mt(18)}}else E.za=j[1],0<E.za-E.T&&37500>j[2]&&E.F&&E.v==0&&!E.C&&(E.C=nr(T(E.Za,E),6e3));if(1>=Ac(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else oi(E,11)}else if((c.K||E.g==c)&&ra(E),!te(g))for(j=E.Da.g.parse(g),g=0;g<j.length;g++){let je=j[g];if(E.T=je[0],je=je[1],E.G==2)if(je[0]=="c"){E.K=je[1],E.ia=je[2];const Lt=je[3];Lt!=null&&(E.la=Lt,E.j.info("VER="+E.la));const vt=je[4];vt!=null&&(E.Aa=vt,E.j.info("SVER="+E.Aa));const Gn=je[5];Gn!=null&&typeof Gn=="number"&&0<Gn&&(I=1.5*Gn,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const Mn=c.g;if(Mn){const Hs=Mn.g?Mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hs){var W=I.h;W.g||Hs.indexOf("spdy")==-1&&Hs.indexOf("quic")==-1&&Hs.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(bl(W,W.h),W.h=null))}if(I.D){const oa=Mn.g?Mn.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(I.ya=oa,Je(I.I,I.D,oa))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ie=c;if(I.qa=jc(I,I.J?I.ia:null,I.W),ie.K){Pc(I.h,ie);var Ke=ie,At=I.L;At&&(Ke.I=At),Ke.B&&(Fs(Ke),Ze(Ke)),I.g=ie}else Ws(I);0<E.i.length&&Or(E)}else je[0]!="stop"&&je[0]!="close"||oi(E,7);else E.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?oi(E,7):Wt(E):je[0]!="noop"&&E.l&&E.l.ta(je),E.v=0)}}ti(4)}catch{}}var Rc=class{constructor(c,g){this.g=c,this.map=g}};function Us(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function On(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ac(c){return c.h?1:c.g?c.g.size:0}function un(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function bl(c,g){c.g?c.g.add(g):c.h=g}function Pc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Us.prototype.cancel=function(){if(this.i=kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function kc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const E of c.g.values())g=g.concat(E.D);return g}return M(c.i)}function Ko(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],E=c.length,I=0;I<E;I++)g.push(c[I]);return g}g=[],E=0;for(I in c)g[E++]=c[I];return g}function Qo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var E=0;E<c;E++)g.push(E);return g}g=[],E=0;for(const I in c)g[E++]=I;return g}}}function xi(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var E=Qo(c),I=Ko(c),j=I.length,W=0;W<j;W++)g.call(void 0,I[W],E&&E[W],c)}var js=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zf(c,g){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var I=c[E].indexOf("="),j=null;if(0<=I){var W=c[E].substring(0,I);j=c[E].substring(I+1)}else W=c[E];g(W,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function ni(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ni){this.h=c.h,Bs(this,c.j),this.o=c.o,this.g=c.g,bi(this,c.s),this.l=c.l;var g=c.i,E=new Nr;E.i=g.i,g.g&&(E.g=new Map(g.g),E.h=g.h),Oi(this,E),this.m=c.m}else c&&(g=String(c).match(js))?(this.h=!1,Bs(this,g[1]||"",!0),this.o=Fe(g[2]||""),this.g=Fe(g[3]||"",!0),bi(this,g[4]),this.l=Fe(g[5]||"",!0),Oi(this,g[6]||"",!0),this.m=Fe(g[7]||"")):(this.h=!1,this.i=new Nr(null,this.h))}ni.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Li(g,Yo,!0),":");var E=this.g;return(E||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Li(g,Yo,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Li(E,E.charAt(0)=="/"?bc:xc,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Li(E,Ol)),c.join("")};function Dn(c){return new ni(c)}function Bs(c,g,E){c.j=E?Fe(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function bi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Oi(c,g,E){g instanceof Nr?(c.i=g,xr(c.i,c.h)):(E||(g=Li(g,Oc)),c.i=new Nr(g,c.h))}function Je(c,g,E){c.i.set(g,E)}function Di(c){return Je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Fe(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Li(c,g,E){return typeof c=="string"?(c=encodeURI(c).replace(g,Nc),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Nc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Yo=/[#\/\?@]/g,xc=/[#\?:]/g,bc=/[#\?]/g,Oc=/[#\?@]/g,Ol=/#/g;function Nr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function $t(c){c.g||(c.g=new Map,c.h=0,c.i&&zf(c.i,function(g,E){c.add(decodeURIComponent(g.replace(/\+/g," ")),E)}))}n=Nr.prototype,n.add=function(c,g){$t(this),this.i=null,c=qn(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(g),this.h+=1,this};function or(c,g){$t(c),g=qn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function ar(c,g){return $t(c),g=qn(c,g),c.g.has(g)}n.forEach=function(c,g){$t(this),this.g.forEach(function(E,I){E.forEach(function(j){c.call(g,j,I,this)},this)},this)},n.na=function(){$t(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),E=[];for(let I=0;I<g.length;I++){const j=c[I];for(let W=0;W<j.length;W++)E.push(g[I])}return E},n.V=function(c){$t(this);let g=[];if(typeof c=="string")ar(this,c)&&(g=g.concat(this.g.get(qn(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)g=g.concat(c[E])}return g},n.set=function(c,g){return $t(this),this.i=null,c=qn(this,c),ar(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Mi(c,g,E){or(c,g),0<E.length&&(c.i=null,c.g.set(qn(c,g),M(E)),c.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var E=0;E<g.length;E++){var I=g[E];const W=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var j=W;ie[I]!==""&&(j+="="+encodeURIComponent(String(ie[I]))),c.push(j)}}return this.i=c.join("&")};function qn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function xr(c,g){g&&!c.j&&($t(c),c.i=null,c.g.forEach(function(E,I){var j=I.toLowerCase();I!=j&&(or(this,I),Mi(this,j,E))},c)),c.j=g}function $f(c,g){const E=new Ls;if(h.Image){const I=new Image;I.onload=R(mn,E,"TestLoadImage: loaded",!0,g,I),I.onerror=R(mn,E,"TestLoadImage: error",!1,g,I),I.onabort=R(mn,E,"TestLoadImage: abort",!1,g,I),I.ontimeout=R(mn,E,"TestLoadImage: timeout",!1,g,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function Dc(c,g){const E=new Ls,I=new AbortController,j=setTimeout(()=>{I.abort(),mn(E,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(W=>{clearTimeout(j),W.ok?mn(E,"TestPingServer: ok",!0,g):mn(E,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),mn(E,"TestPingServer: error",!1,g)})}function mn(c,g,E,I,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),I(E)}catch{}}function Wf(){this.g=new Sl}function Lc(c,g,E){const I=E||"";try{xi(c,function(j,W){let ie=j;p(j)&&(ie=Tl(j)),g.push(I+W+"="+encodeURIComponent(ie))})}catch(j){throw g.push(I+"type="+encodeURIComponent("_badmap")),j}}function ri(c){this.l=c.Ub||null,this.j=c.eb||!1}N(ri,Os),ri.prototype.g=function(){return new zs(this.l,this.j)},ri.prototype.i=function(c){return function(){return c}}({});function zs(c,g){Ct.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(zs,Ct),n=zs.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ur(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ur(this)),this.g&&(this.readyState=3,ur(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?lr(this):ur(this),this.readyState==3&&Mc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,lr(this))},n.Qa=function(c){this.g&&(this.response=c,lr(this))},n.ga=function(){this.g&&lr(this)};function lr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ur(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var E=g.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=g.next();return c.join(`\r
`)};function ur(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ii(c){let g="";return we(c,function(E,I){g+=I,g+=":",g+=E,g+=`\r
`}),g}function Vi(c,g,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=ii(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):Je(c,g,E))}function ot(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ot,Ct);var Hf=/^https?$/i,Dl=["POST","PUT"];n=ot.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ir.g(),this.v=this.o?jo(this.o):jo(ir),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(W){$s(this,W);return}if(c=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var j in I)E.set(j,I[j]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())E.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(W=>W.toLowerCase()=="content-type"),j=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Dl,g,void 0))||I||j||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ie]of E)this.g.setRequestHeader(W,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xo(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){$s(this,W)}};function $s(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Jo(c),Ln(c)}function Jo(c){c.A||(c.A=!0,Rt(c,"complete"),Rt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Rt(this,"complete"),Rt(this,"abort"),Ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ln(this,!0)),ot.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ll(this):this.bb())},n.bb=function(){Ll(this)};function Ll(c){if(c.h&&typeof l<"u"&&(!c.v[1]||gn(c)!=4||c.Z()!=2)){if(c.u&&gn(c)==4)vl(c.Ea,0,c);else if(Rt(c,"readystatechange"),gn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var E;if(!(E=g)){var I;if(I=ie===0){var j=String(c.D).match(js)[1]||null;!j&&h.self&&h.self.location&&(j=h.self.location.protocol.slice(0,-1)),I=!Hf.test(j?j.toLowerCase():"")}E=I}if(E)Rt(c,"complete"),Rt(c,"success");else{c.m=6;try{var W=2<gn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",Jo(c)}}finally{Ln(c)}}}}function Ln(c,g){if(c.g){Xo(c);const E=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Rt(c,"ready");try{E.onreadystatechange=I}catch{}}}function Xo(c){c.I&&(h.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function gn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Il(g)}};function Ml(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Zo(c){const g={};c=(c.g&&2<=gn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(te(c[I]))continue;var E=V(c[I]);const j=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const W=g[j]||[];g[j]=W,W.push(E)}O(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function br(c,g,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||g}function Vl(c){this.Aa=0,this.i=[],this.j=new Ls,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=br("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=br("baseRetryDelayMs",5e3,c),this.cb=br("retryDelaySeedMs",1e4,c),this.Wa=br("forwardChannelMaxRetries",2,c),this.wa=br("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Us(c&&c.concurrentRequestLimit),this.Da=new Wf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Vl.prototype,n.la=8,n.G=1,n.connect=function(c,g,E,I){mt(0),this.W=c,this.H=g||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=jc(this,null,this.W),Or(this)};function Wt(c){if(ea(c),c.G==3){var g=c.U++,E=Dn(c.I);if(Je(E,"SID",c.K),Je(E,"RID",g),Je(E,"TYPE","terminate"),si(c,E),g=new sr(c,c.j,g),g.L=2,g.v=Di(Dn(E)),E=!1,h.navigator&&h.navigator.sendBeacon)try{E=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!E&&h.Image&&(new Image().src=g.v,E=!0),E||(g.g=Bc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Ze(g)}Uc(c)}function cr(c){c.g&&(Fl(c),c.g.cancel(),c.g=null)}function ea(c){cr(c),c.u&&(h.clearTimeout(c.u),c.u=null),ra(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function Or(c){if(!On(c.h)&&!c.s){c.s=!0;var g=c.Ga;Qe||le(),se||(Qe(),se=!0),ge.add(g,c),c.B=0}}function qf(c,g){return Ac(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=nr(T(c.Ga,c,g),Fc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new sr(this,this.j,c);let W=this.o;if(this.S&&(W?(W=S(W),D(W,this.S)):W=this.S),this.m!==null||this.O||(j.H=W,W=null),this.P)e:{for(var g=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=E;break e}if(g===4096||E===this.i.length-1){g=E+1;break e}}g=1e3}else g=1e3;g=Fi(this,j,g),E=Dn(this.I),Je(E,"RID",c),Je(E,"CVER",22),this.D&&Je(E,"X-HTTP-Session-Id",this.D),si(this,E),W&&(this.O?g="headers="+encodeURIComponent(String(ii(W)))+"&"+g:this.m&&Vi(E,this.m,W)),bl(this.h,j),this.Ua&&Je(E,"TYPE","init"),this.P?(Je(E,"$req",g),Je(E,"SID","null"),j.T=!0,Go(j,E,null)):Go(j,E,g),this.G=2}}else this.G==3&&(c?ta(this,c):this.i.length==0||On(this.h)||ta(this))};function ta(c,g){var E;g?E=g.l:E=c.U++;const I=Dn(c.I);Je(I,"SID",c.K),Je(I,"RID",E),Je(I,"AID",c.T),si(c,I),c.m&&c.o&&Vi(I,c.m,c.o),E=new sr(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Fi(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),bl(c.h,E),Go(E,I,g)}function si(c,g){c.H&&we(c.H,function(E,I){Je(g,I,E)}),c.l&&xi({},function(E,I){Je(g,I,E)})}function Fi(c,g,E){E=Math.min(c.i.length,E);var I=c.l?T(c.l.Na,c.l,c):null;e:{var j=c.i;let W=-1;for(;;){const ie=["count="+E];W==-1?0<E?(W=j[0].g,ie.push("ofs="+W)):W=0:ie.push("ofs="+W);let Ke=!0;for(let At=0;At<E;At++){let je=j[At].g;const Lt=j[At].map;if(je-=W,0>je)W=Math.max(0,j[At].g-100),Ke=!1;else try{Lc(Lt,ie,"req"+je+"_")}catch{I&&I(Lt)}}if(Ke){I=ie.join("&");break e}}}return c=c.i.splice(0,E),g.D=c,I}function Ws(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Qe||le(),se||(Qe(),se=!0),ge.add(g,c),c.v=0}}function na(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=nr(T(c.Fa,c),Fc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Vc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=nr(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),cr(this),Vc(this))};function Fl(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function Vc(c){c.g=new sr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Dn(c.qa);Je(g,"RID","rpc"),Je(g,"SID",c.K),Je(g,"AID",c.T),Je(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Je(g,"TO",c.ja),Je(g,"TYPE","xmlhttp"),si(c,g),c.m&&c.o&&Vi(g,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=Di(Dn(g)),E.m=null,E.P=!0,Nl(E,c)}n.Za=function(){this.C!=null&&(this.C=null,cr(this),na(this),mt(19))};function ra(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function ia(c,g){var E=null;if(c.g==g){ra(c),Fl(c),c.g=null;var I=2}else if(un(c.h,g))E=g.D,Pc(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){E=g.m?g.m.length:0,g=Date.now()-g.F;var j=c.B;I=Ds(),Rt(I,new $o(I,E)),Or(c)}else Ws(c);else if(j=g.s,j==3||j==0&&0<g.X||!(I==1&&qf(c,g)||I==2&&na(c)))switch(E&&0<E.length&&(g=c.h,g.i=g.i.concat(E)),j){case 1:oi(c,5);break;case 4:oi(c,10);break;case 3:oi(c,6);break;default:oi(c,2)}}}function Fc(c,g){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*g}function oi(c,g){if(c.j.info("Error code "+g),g==2){var E=T(c.fb,c),I=c.Xa;const j=!I;I=new ni(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Bs(I,"https"),Di(I),j?$f(I.toString(),E):Dc(I.toString(),E)}else mt(2);c.G=0,c.l&&c.l.sa(g),Uc(c),ea(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Uc(c){if(c.G=0,c.ka=[],c.l){const g=kc(c.h);(g.length!=0||c.i.length!=0)&&(k(c.ka,g),k(c.ka,c.i),c.h.i.length=0,M(c.i),c.i.length=0),c.l.ra()}}function jc(c,g,E){var I=E instanceof ni?Dn(E):new ni(E);if(I.g!="")g&&(I.g=g+"."+I.g),bi(I,I.s);else{var j=h.location;I=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var W=new ni(null);I&&Bs(W,I),g&&(W.g=g),j&&bi(W,j),E&&(W.l=E),I=W}return E=c.D,g=c.ya,E&&g&&Je(I,E,g),Je(I,"VER",c.la),si(c,I),I}function Bc(c,g,E){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new ot(new ri({eb:E})):new ot(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ul(){}n=Ul.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sa(){}sa.prototype.g=function(c,g){return new cn(c,g)};function cn(c,g){Ct.call(this),this.g=new Vl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!te(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!te(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Dr(this)}N(cn,Ct),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Wt(this.g)},cn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=Tl(c),c=E);g.i.push(new Rc(g.Ya++,c)),g.G==3&&Or(g)},cn.prototype.N=function(){this.g.l=null,delete this.j,Wt(this.g),delete this.g,cn.aa.N.call(this)};function zc(c){Pr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const E in g){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}N(zc,Pr);function $c(){zo.call(this),this.status=1}N($c,zo);function Dr(c){this.g=c}N(Dr,Ul),Dr.prototype.ua=function(){Rt(this.g,"a")},Dr.prototype.ta=function(c){Rt(this.g,new zc(c))},Dr.prototype.sa=function(c){Rt(this.g,new $c)},Dr.prototype.ra=function(){Rt(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,Y0=function(){return new sa},Q0=function(){return Ds()},K0=kr,Xm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,Yh=Ho,Tc.COMPLETE="complete",G0=Tc,Bo.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,yu=Bo,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,q0=ot}).apply(typeof Fh<"u"?Fh:typeof self<"u"?self:typeof window<"u"?window:{});const Ew="@firebase/firestore",ww="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new tl("@firebase/firestore");function Pa(){return yo.logLevel}function ue(n,...e){if(yo.logLevel<=Oe.DEBUG){const t=e.map(i_);yo.debug(`Firestore (${il}): ${n}`,...t)}}function Ii(n,...e){if(yo.logLevel<=Oe.ERROR){const t=e.map(i_);yo.error(`Firestore (${il}): ${n}`,...t)}}function $a(n,...e){if(yo.logLevel<=Oe.WARN){const t=e.map(i_);yo.warn(`Firestore (${il}): ${n}`,...t)}}function i_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n="Unexpected state"){const e=`FIRESTORE (${il}) INTERNAL ASSERTION FAILED: `+n;throw Ii(e),new Error(e)}function Ge(n,e){n||Se()}function Ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends $n{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(rn.UNAUTHENTICATED))}shutdown(){}}class w1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class T1{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ge(this.o===void 0);let r=this.i;const i=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new us;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new us,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},h=f=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new us)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ge(typeof r.accessToken=="string"),new J0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new rn(e)}}class I1{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class S1{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new I1(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C1{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,fn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ge(this.o===void 0);const r=a=>{a.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,ue("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const i=a=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?i(a):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Tw(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ge(typeof t.token=="string"),this.R=t.token,new Tw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=R1(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function Ne(n,e){return n<e?-1:n>e?1:0}function Zm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Ne(r,i);{const a=X0(),l=A1(a.encode(Iw(n,t)),a.encode(Iw(e,t)));return l!==0?l:Ne(r,i)}}t+=r>65535?2:1}return Ne(n.length,e.length)}function Iw(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function A1(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ne(n[t],e[t]);return Ne(n.length,e.length)}function Wa(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=-62135596800,Cw=1e6;class bt{static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Cw);return new bt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sw)throw new me(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cw}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Sw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new bt(0,0))}static max(){return new Re(new bt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="__name__";class jr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Se(),r===void 0?r=e.length-t:r>e.length-t&&Se(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=jr.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return Ne(e.length,t.length)}static compareSegments(e,t){const r=jr.isNumericId(e),i=jr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?jr.extractNumericId(e).compare(jr.extractNumericId(t)):Zm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ls.fromString(e.substring(4,e.length-2))}}class lt extends jr{construct(e,t,r){return new lt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new me(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const P1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends jr{construct(e,t,r){return new Kt(e,t,r)}static isValidIdentifier(e){return P1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rw}static keyField(){return new Kt([Rw])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new me(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const h=e[i];if(h==="\\"){if(i+1===e.length)throw new me(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new me(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(a(),i++)}if(a(),l)throw new me(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(t)}static emptyPath(){return new Kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(lt.fromString(e))}static fromName(e){return new ve(lt.fromString(e).popFirst(5))}static empty(){return new ve(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new lt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=-1;function k1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(r===1e9?new bt(t+1,0):new bt(t,r));return new gs(i,ve.empty(),e)}function N1(n){return new gs(n.readTime,n.key,ju)}class gs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new gs(Re.min(),ve.empty(),ju)}static max(){return new gs(Re.max(),ve.empty(),ju)}}function x1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n){if(n.code!==J.FAILED_PRECONDITION||n.message!==b1)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,r)=>{t(e)})}static reject(e){return new q((t,r)=>{r(e)})}static waitFor(e){return new q((t,r)=>{let i=0,a=0,l=!1;e.forEach(h=>{++i,h.next(()=>{++a,l&&a===i&&t()},f=>r(f))}),l=!0,a===i&&t()})}static or(e){let t=q.resolve(!1);for(const r of e)t=t.next(i=>i?q.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,a)=>{r.push(t.call(this,i,a))}),this.waitFor(r)}static mapArray(e,t){return new q((r,i)=>{const a=e.length,l=new Array(a);let h=0;for(let f=0;f<a;f++){const p=f;t(e[p]).next(y=>{l[p]=y,++h,h===a&&r(l)},y=>i(y))}})}static doWhile(e,t){return new q((r,i)=>{const a=()=>{e()===!0?t().next(()=>{a()},i):r()};a()})}}function D1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ol(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}tf.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=-1;function nf(n){return n==null}function md(n){return n===0&&1/n==-1/0}function L1(n){return typeof n=="number"&&Number.isInteger(n)&&!md(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="";function M1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Aw(e)),e=V1(n.get(t),e);return Aw(e)}function V1(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case eS:t+="";break;default:t+=a}}return t}function Aw(n){return n+eS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function As(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St=class eg{constructor(e,t){this.comparator=e,this.root=t||cs.EMPTY}insert(e,t){return new eg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,cs.BLACK,null,null))}remove(e){return new eg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,cs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uh(this.root,e,this.comparator,!0)}},Uh=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},cs=class mi{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??mi.RED,this.left=i??mi.EMPTY,this.right=a??mi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new mi(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return mi.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}};cs.EMPTY=null,cs.RED=!0,cs.BLACK=!1;cs.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,r,i,a){return this}insert(e,t,r){return new cs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.comparator=e,this.data=new St(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kw(this.data.getIterator())}getIteratorFrom(e){return new kw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ot(this.comparator);return t.data=e,t}}class kw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new jn([])}unionWith(e){let t=new Ot(Kt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wa(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new nS("Invalid base64 string: "+a):a}}(e);return new Qt(t)}static fromUint8Array(e){const t=function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a}(e);return new Qt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const F1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _s(n){if(Ge(!!n),typeof n=="string"){let e=0;const t=F1.exec(n);if(Ge(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ys(n){return typeof n=="string"?Qt.fromBase64String(n):Qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="server_timestamp",iS="__type__",sS="__previous_value__",oS="__local_write_time__";function o_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[iS])===null||t===void 0?void 0:t.stringValue)===rS}function rf(n){const e=n.mapValue.fields[sS];return o_(e)?rf(e):e}function Bu(n){const e=_s(n.mapValue.fields[oS].timestampValue);return new bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t,r,i,a,l,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=p}}const gd="(default)";class zu{constructor(e,t){this.projectId=e,this.database=t||gd}static empty(){return new zu("","")}get isDefaultDatabase(){return this.database===gd}isEqual(e){return e instanceof zu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="__type__",j1="__max__",jh={mapValue:{}},lS="__vector__",_d="value";function vs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?o_(n)?4:z1(n)?9007199254740991:B1(n)?10:11:Se()}function qr(n,e){if(n===e)return!0;const t=vs(n);if(t!==vs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bu(n).isEqual(Bu(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=_s(i.timestampValue),h=_s(a.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return ys(i.bytesValue).isEqual(ys(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return yt(i.geoPointValue.latitude)===yt(a.geoPointValue.latitude)&&yt(i.geoPointValue.longitude)===yt(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a){if("integerValue"in i&&"integerValue"in a)return yt(i.integerValue)===yt(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=yt(i.doubleValue),h=yt(a.doubleValue);return l===h?md(l)===md(h):isNaN(l)&&isNaN(h)}return!1}(n,e);case 9:return Wa(n.arrayValue.values||[],e.arrayValue.values||[],qr);case 10:case 11:return function(i,a){const l=i.mapValue.fields||{},h=a.mapValue.fields||{};if(Pw(l)!==Pw(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!qr(l[f],h[f])))return!1;return!0}(n,e);default:return Se()}}function $u(n,e){return(n.values||[]).find(t=>qr(t,e))!==void 0}function Ha(n,e){if(n===e)return 0;const t=vs(n),r=vs(e);if(t!==r)return Ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(a,l){const h=yt(a.integerValue||a.doubleValue),f=yt(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return Nw(n.timestampValue,e.timestampValue);case 4:return Nw(Bu(n),Bu(e));case 5:return Zm(n.stringValue,e.stringValue);case 6:return function(a,l){const h=ys(a),f=ys(l);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,l){const h=a.split("/"),f=l.split("/");for(let p=0;p<h.length&&p<f.length;p++){const y=Ne(h[p],f[p]);if(y!==0)return y}return Ne(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,l){const h=Ne(yt(a.latitude),yt(l.latitude));return h!==0?h:Ne(yt(a.longitude),yt(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return xw(n.arrayValue,e.arrayValue);case 10:return function(a,l){var h,f,p,y;const v=a.fields||{},T=l.fields||{},R=(h=v[_d])===null||h===void 0?void 0:h.arrayValue,N=(f=T[_d])===null||f===void 0?void 0:f.arrayValue,M=Ne(((p=R==null?void 0:R.values)===null||p===void 0?void 0:p.length)||0,((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0);return M!==0?M:xw(R,N)}(n.mapValue,e.mapValue);case 11:return function(a,l){if(a===jh.mapValue&&l===jh.mapValue)return 0;if(a===jh.mapValue)return 1;if(l===jh.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),p=l.fields||{},y=Object.keys(p);f.sort(),y.sort();for(let v=0;v<f.length&&v<y.length;++v){const T=Zm(f[v],y[v]);if(T!==0)return T;const R=Ha(h[f[v]],p[y[v]]);if(R!==0)return R}return Ne(f.length,y.length)}(n.mapValue,e.mapValue);default:throw Se()}}function Nw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=_s(n),r=_s(e),i=Ne(t.seconds,r.seconds);return i!==0?i:Ne(t.nanos,r.nanos)}function xw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=Ha(t[i],r[i]);if(a)return a}return Ne(t.length,r.length)}function qa(n){return tg(n)}function tg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=_s(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ys(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=tg(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const l of r)a?a=!1:i+=",",i+=`${l}:${tg(t.fields[l])}`;return i+"}"}(n.mapValue):Se()}function Jh(n){switch(vs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rf(n);return e?16+Jh(e):16;case 5:return 2*n.stringValue.length;case 6:return ys(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,a)=>i+Jh(a),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return As(r.fields,(a,l)=>{i+=a.length+Jh(l)}),i}(n.mapValue);default:throw Se()}}function ng(n){return!!n&&"integerValue"in n}function a_(n){return!!n&&"arrayValue"in n}function bw(n){return!!n&&"nullValue"in n}function Ow(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xh(n){return!!n&&"mapValue"in n}function B1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[aS])===null||t===void 0?void 0:t.stringValue)===lS}function Iu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return As(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Iu(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Iu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function z1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===j1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Iu(t)}setAll(e){let t=Kt.emptyPath(),r={},i=[];e.forEach((l,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,i),r={},i=[],t=h.popLast()}l?r[h.lastSegment()]=Iu(l):i.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());Xh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Xh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){As(t,(i,a)=>e[i]=a);for(const i of r)delete e[i]}clone(){return new Sn(Iu(this.value))}}function uS(n){const e=[];return As(n.fields,(t,r)=>{const i=new Kt([t]);if(Xh(r)){const a=uS(r.mapValue).fields;if(a.length===0)e.push(i);else for(const l of a)e.push(i.child(l))}else e.push(i)}),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,r,i,a,l,h){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=l,this.documentState=h}static newInvalidDocument(e){return new sn(e,0,Re.min(),Re.min(),Re.min(),Sn.empty(),0)}static newFoundDocument(e,t,r,i){return new sn(e,1,t,Re.min(),r,i,0)}static newNoDocument(e,t){return new sn(e,2,t,Re.min(),Re.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new sn(e,3,t,Re.min(),Re.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof sn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.position=e,this.inclusive=t}}function Dw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],l=n.position[i];if(a.field.isKeyField()?r=ve.comparator(ve.fromName(l.referenceValue),t.key):r=Ha(l,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t="asc"){this.field=e,this.dir=t}}function $1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{}class Nt extends cS{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new H1(e,t,r):t==="array-contains"?new K1(e,r):t==="in"?new Q1(e,r):t==="not-in"?new Y1(e,r):t==="array-contains-any"?new J1(e,r):new Nt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new q1(e,r):new G1(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ha(t,this.value)):t!==null&&vs(this.value)===vs(t)&&this.matchesComparison(Ha(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gr extends cS{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Gr(e,t)}matches(e){return hS(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function hS(n){return n.op==="and"}function dS(n){return W1(n)&&hS(n)}function W1(n){for(const e of n.filters)if(e instanceof Gr)return!1;return!0}function rg(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+qa(n.value);if(dS(n))return n.filters.map(e=>rg(e)).join(",");{const e=n.filters.map(t=>rg(t)).join(",");return`${n.op}(${e})`}}function fS(n,e){return n instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.field.isEqual(i.field)&&qr(r.value,i.value)}(n,e):n instanceof Gr?function(r,i){return i instanceof Gr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((a,l,h)=>a&&fS(l,i.filters[h]),!0):!1}(n,e):void Se()}function pS(n){return n instanceof Nt?function(t){return`${t.field.canonicalString()} ${t.op} ${qa(t.value)}`}(n):n instanceof Gr?function(t){return t.op.toString()+" {"+t.getFilters().map(pS).join(" ,")+"}"}(n):"Filter"}class H1 extends Nt{constructor(e,t,r){super(e,t,r),this.key=ve.fromName(r.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class q1 extends Nt{constructor(e,t){super(e,"in",t),this.keys=mS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class G1 extends Nt{constructor(e,t){super(e,"not-in",t),this.keys=mS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ve.fromName(r.referenceValue))}class K1 extends Nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return a_(t)&&$u(t.arrayValue,this.value)}}class Q1 extends Nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$u(this.value.arrayValue,t)}}class Y1 extends Nt{constructor(e,t){super(e,"not-in",t)}matches(e){if($u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$u(this.value.arrayValue,t)}}class J1 extends Nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!a_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$u(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,t=null,r=[],i=[],a=null,l=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=l,this.endAt=h,this.le=null}}function Mw(n,e=null,t=[],r=[],i=null,a=null,l=null){return new X1(n,e,t,r,i,a,l)}function l_(n){const e=Ae(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>rg(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),nf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>qa(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>qa(r)).join(",")),e.le=t}return e.le}function u_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Lw(n.startAt,e.startAt)&&Lw(n.endAt,e.endAt)}function ig(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t=null,r=[],i=[],a=null,l="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=l,this.startAt=h,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Z1(n,e,t,r,i,a,l,h){return new sf(n,e,t,r,i,a,l,h)}function of(n){return new sf(n)}function Vw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eO(n){return n.collectionGroup!==null}function Su(n){const e=Ae(n);if(e.he===null){e.he=[];const t=new Set;for(const a of e.explicitOrderBy)e.he.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new Ot(Kt.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(h=h.add(p.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.he.push(new vd(a,r))}),t.has(Kt.keyField().canonicalString())||e.he.push(new vd(Kt.keyField(),r))}return e.he}function $r(n){const e=Ae(n);return e.Pe||(e.Pe=tO(e,Su(n))),e.Pe}function tO(n,e){if(n.limitType==="F")return Mw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const a=i.dir==="desc"?"asc":"desc";return new vd(i.field,a)});const t=n.endAt?new yd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yd(n.startAt.position,n.startAt.inclusive):null;return Mw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function sg(n,e,t){return new sf(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function af(n,e){return u_($r(n),$r(e))&&n.limitType===e.limitType}function gS(n){return`${l_($r(n))}|lt:${n.limitType}`}function ka(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>pS(i)).join(", ")}]`),nf(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>qa(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>qa(i)).join(",")),`Target(${r})`}($r(n))}; limitType=${n.limitType})`}function lf(n,e){return e.isFoundDocument()&&function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ve.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,i){for(const a of Su(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(l,h,f){const p=Dw(l,h,f);return l.inclusive?p<=0:p<0}(r.startAt,Su(r),i)||r.endAt&&!function(l,h,f){const p=Dw(l,h,f);return l.inclusive?p>=0:p>0}(r.endAt,Su(r),i))}(n,e)}function nO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _S(n){return(e,t)=>{let r=!1;for(const i of Su(n)){const a=rO(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function rO(n,e,t){const r=n.field.isKeyField()?ve.comparator(e.key,t.key):function(a,l,h){const f=l.data.field(a),p=h.data.field(a);return f!==null&&p!==null?Ha(f,p):Se()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,(t,r)=>{for(const[i,a]of r)e(i,a)})}isEmpty(){return tS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new St(ve.comparator);function Si(){return iO}const yS=new St(ve.comparator);function vu(...n){let e=yS;for(const t of n)e=e.insert(t.key,t);return e}function vS(n){let e=yS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function oo(){return Cu()}function ES(){return Cu()}function Cu(){return new ko(n=>n.toString(),(n,e)=>n.isEqual(e))}const sO=new St(ve.comparator),oO=new Ot(ve.comparator);function Ve(...n){let e=oO;for(const t of n)e=e.add(t);return e}const aO=new Ot(Ne);function lO(){return aO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:md(e)?"-0":e}}function wS(n){return{integerValue:""+n}}function uO(n,e){return L1(e)?wS(e):c_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this._=void 0}}function cO(n,e,t){return n instanceof Ed?function(i,a){const l={fields:{[iS]:{stringValue:rS},[oS]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&o_(a)&&(a=rf(a)),a&&(l.fields[sS]=a),{mapValue:l}}(t,e):n instanceof Ga?IS(n,e):n instanceof Wu?SS(n,e):function(i,a){const l=TS(i,a),h=Fw(l)+Fw(i.Ie);return ng(l)&&ng(i.Ie)?wS(h):c_(i.serializer,h)}(n,e)}function hO(n,e,t){return n instanceof Ga?IS(n,e):n instanceof Wu?SS(n,e):t}function TS(n,e){return n instanceof wd?function(r){return ng(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Ed extends uf{}class Ga extends uf{constructor(e){super(),this.elements=e}}function IS(n,e){const t=CS(e);for(const r of n.elements)t.some(i=>qr(i,r))||t.push(r);return{arrayValue:{values:t}}}class Wu extends uf{constructor(e){super(),this.elements=e}}function SS(n,e){let t=CS(e);for(const r of n.elements)t=t.filter(i=>!qr(i,r));return{arrayValue:{values:t}}}class wd extends uf{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Fw(n){return yt(n.integerValue||n.doubleValue)}function CS(n){return a_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,t){this.field=e,this.transform=t}}function fO(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ga&&i instanceof Ga||r instanceof Wu&&i instanceof Wu?Wa(r.elements,i.elements,qr):r instanceof wd&&i instanceof wd?qr(r.Ie,i.Ie):r instanceof Ed&&i instanceof Ed}(n.transform,e.transform)}class pO{constructor(e,t){this.version=e,this.transformResults=t}}class Tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tr}static exists(e){return new Tr(void 0,e)}static updateTime(e){return new Tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class cf{}function RS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new PS(n.key,Tr.none()):new lc(n.key,n.data,Tr.none());{const t=n.data,r=Sn.empty();let i=new Ot(Kt.comparator);for(let a of e.fields)if(!i.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?r.delete(a):r.set(a,l),i=i.add(a)}return new Ps(n.key,r,new jn(i.toArray()),Tr.none())}}function mO(n,e,t){n instanceof lc?function(i,a,l){const h=i.value.clone(),f=jw(i.fieldTransforms,a,l.transformResults);h.setAll(f),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Ps?function(i,a,l){if(!Zh(i.precondition,a))return void a.convertToUnknownDocument(l.version);const h=jw(i.fieldTransforms,a,l.transformResults),f=a.data;f.setAll(AS(i)),f.setAll(h),a.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,e,t):function(i,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Ru(n,e,t,r){return n instanceof lc?function(a,l,h,f){if(!Zh(a.precondition,l))return h;const p=a.value.clone(),y=Bw(a.fieldTransforms,f,l);return p.setAll(y),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ps?function(a,l,h,f){if(!Zh(a.precondition,l))return h;const p=Bw(a.fieldTransforms,f,l),y=l.data;return y.setAll(AS(a)),y.setAll(p),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(a,l,h){return Zh(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,e,t)}function gO(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=TS(r.transform,i||null);a!=null&&(t===null&&(t=Sn.empty()),t.set(r.field,a))}return t||null}function Uw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wa(r,i,(a,l)=>fO(a,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class lc extends cf{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ps extends cf{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function AS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function jw(n,e,t){const r=new Map;Ge(n.length===t.length);for(let i=0;i<t.length;i++){const a=n[i],l=a.transform,h=e.data.field(a.field);r.set(a.field,hO(l,h,t[i]))}return r}function Bw(n,e,t){const r=new Map;for(const i of n){const a=i.transform,l=t.data.field(i.field);r.set(i.field,cO(a,l,e))}return r}class PS extends cf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _O extends cf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&mO(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ru(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ru(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ES();return this.mutations.forEach(i=>{const a=e.get(i.key),l=a.overlayedDocument;let h=this.applyToLocalView(l,a.mutatedFields);h=t.has(i.key)?null:h;const f=RS(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(Re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ve())}isEqual(e){return this.batchId===e.batchId&&Wa(this.mutations,e.mutations,(t,r)=>Uw(t,r))&&Wa(this.baseMutations,e.baseMutations,(t,r)=>Uw(t,r))}}class h_{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ge(e.mutations.length===r.length);let i=function(){return sO}();const a=e.mutations;for(let l=0;l<a.length;l++)i=i.insert(a[l].key,r[l].version);return new h_(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,Be;function wO(n){switch(n){case J.OK:return Se();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return Se()}}function kS(n){if(n===void 0)return Ii("GRPC error has no .code"),J.UNKNOWN;switch(n){case wt.OK:return J.OK;case wt.CANCELLED:return J.CANCELLED;case wt.UNKNOWN:return J.UNKNOWN;case wt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case wt.INTERNAL:return J.INTERNAL;case wt.UNAVAILABLE:return J.UNAVAILABLE;case wt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case wt.NOT_FOUND:return J.NOT_FOUND;case wt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case wt.ABORTED:return J.ABORTED;case wt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case wt.DATA_LOSS:return J.DATA_LOSS;default:return Se()}}(Be=wt||(wt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=new ls([4294967295,4294967295],0);function zw(n){const e=X0().encode(n),t=new H0;return t.update(e),new Uint8Array(t.digest())}function $w(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ls([t,r],0),new ls([i,a],0)]}class d_{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Eu(`Invalid padding: ${t}`);if(r<0)throw new Eu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Eu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Eu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ls.fromNumber(this.Ee)}Ae(e,t,r){let i=e.add(t.multiply(ls.fromNumber(r)));return i.compare(TO)===1&&(i=new ls([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=zw(e),[r,i]=$w(t);for(let a=0;a<this.hashCount;a++){const l=this.Ae(r,i,a);if(!this.Re(l))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new d_(a,i,t);return r.forEach(h=>l.insert(h)),l}insert(e){if(this.Ee===0)return;const t=zw(e),[r,i]=$w(t);for(let a=0;a<this.hashCount;a++){const l=this.Ae(r,i,a);this.Ve(l)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Eu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,uc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new hf(Re.min(),i,new St(Ne),Si(),Ve())}}class uc{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new uc(r,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,r,i){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=i}}class NS{constructor(e,t){this.targetId=e,this.ge=t}}class xS{constructor(e,t,r=Qt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Ww{constructor(){this.pe=0,this.ye=Hw(),this.we=Qt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ve(),t=Ve(),r=Ve();return this.ye.forEach((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Se()}}),new uc(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=Hw()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ge(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class IO{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Si(),this.$e=Bh(),this.Ue=Bh(),this.Ke=new St(Ne)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:Se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,r=e.ge.count,i=this.Xe(t);if(i){const a=i.target;if(ig(a))if(r===0){const l=new ve(a.path);this.ze(t,l,sn.newNoDocument(l,Re.min()))}else Ge(r===1);else{const l=this.et(t);if(l!==r){const h=this.tt(e),f=h?this.nt(h,e,l):1;if(f!==0){this.Ye(t);const p=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,p)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let l,h;try{l=ys(r).toUint8Array()}catch(f){if(f instanceof nS)return $a("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new d_(l,i,a)}catch(f){return $a(f instanceof Eu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.Ee===0?null:h}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let i=0;return r.forEach(a=>{const l=this.ke.it(),h=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.ze(t,a,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((a,l)=>{const h=this.Xe(l);if(h){if(a.current&&ig(h.target)){const f=new ve(h.target.path);this._t(f).has(l)||this.ut(l,f)||this.ze(l,f,sn.newNoDocument(f,e))}a.ve&&(t.set(l,a.Fe()),a.Me())}});let r=Ve();this.Ue.forEach((a,l)=>{let h=!0;l.forEachWhile(f=>{const p=this.Xe(f);return!p||p.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(a))}),this.Qe.forEach((a,l)=>l.setReadTime(e));const i=new hf(e,t,this.Ke,this.Qe,r);return this.Qe=Si(),this.$e=Bh(),this.Ue=Bh(),this.Ke=new St(Ne),i}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Ww,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Ot(Ne),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ot(Ne),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Ww),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Bh(){return new St(ve.comparator)}function Hw(){return new St(ve.comparator)}const SO={asc:"ASCENDING",desc:"DESCENDING"},CO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RO={and:"AND",or:"OR"};class AO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function og(n,e){return n.useProto3Json||nf(e)?e:{value:e}}function Td(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function PO(n,e){return Td(n,e.toTimestamp())}function Wr(n){return Ge(!!n),Re.fromTimestamp(function(t){const r=_s(t);return new bt(r.seconds,r.nanos)}(n))}function f_(n,e){return ag(n,e).canonicalString()}function ag(n,e){const t=function(i){return new lt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function OS(n){const e=lt.fromString(n);return Ge(FS(e)),e}function lg(n,e){return f_(n.databaseId,e.path)}function Sm(n,e){const t=OS(e);if(t.get(1)!==n.databaseId.projectId)throw new me(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new me(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(LS(t))}function DS(n,e){return f_(n.databaseId,e)}function kO(n){const e=OS(n);return e.length===4?lt.emptyPath():LS(e)}function ug(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function LS(n){return Ge(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qw(n,e,t){return{name:lg(n,e),fields:t.value.mapValue.fields}}function NO(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(p,y){return p.useProto3Json?(Ge(y===void 0||typeof y=="string"),Qt.fromBase64String(y||"")):(Ge(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Qt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),l=e.targetChange.cause,h=l&&function(p){const y=p.code===void 0?J.UNKNOWN:kS(p.code);return new me(y,p.message||"")}(l);t=new xS(r,i,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sm(n,r.document.name),a=Wr(r.document.updateTime),l=r.document.createTime?Wr(r.document.createTime):Re.min(),h=new Sn({mapValue:{fields:r.document.fields}}),f=sn.newFoundDocument(i,a,l,h),p=r.targetIds||[],y=r.removedTargetIds||[];t=new ed(p,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Sm(n,r.document),a=r.readTime?Wr(r.readTime):Re.min(),l=sn.newNoDocument(i,a),h=r.removedTargetIds||[];t=new ed([],h,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Sm(n,r.document),a=r.removedTargetIds||[];t=new ed([],a,i,null)}else{if(!("filter"in e))return Se();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,l=new EO(i,a),h=r.targetId;t=new NS(h,l)}}return t}function xO(n,e){let t;if(e instanceof lc)t={update:qw(n,e.key,e.value)};else if(e instanceof PS)t={delete:lg(n,e.key)};else if(e instanceof Ps)t={update:qw(n,e.key,e.data),updateMask:jO(e.fieldMask)};else{if(!(e instanceof _O))return Se();t={verify:lg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const h=l.transform;if(h instanceof Ed)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Ga)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Wu)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof wd)return{fieldPath:l.field.canonicalString(),increment:h.Ie};throw Se()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,a){return a.updateTime!==void 0?{updateTime:PO(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Se()}(n,e.precondition)),t}function bO(n,e){return n&&n.length>0?(Ge(e!==void 0),n.map(t=>function(i,a){let l=i.updateTime?Wr(i.updateTime):Wr(a);return l.isEqual(Re.min())&&(l=Wr(a)),new pO(l,i.transformResults||[])}(t,e))):[]}function OO(n,e){return{documents:[DS(n,e.path)]}}function DO(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=DS(n,i);const a=function(p){if(p.length!==0)return VS(Gr.create(p,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const l=function(p){if(p.length!==0)return p.map(y=>function(T){return{field:Na(T.field),direction:VO(T.dir)}}(y))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const h=og(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ht:t,parent:i}}function LO(n){let e=kO(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ge(r===1);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=function(v){const T=MS(v);return T instanceof Gr&&dS(T)?T.getFilters():[T]}(t.where));let l=[];t.orderBy&&(l=function(v){return v.map(T=>function(N){return new vd(xa(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(T))}(t.orderBy));let h=null;t.limit&&(h=function(v){let T;return T=typeof v=="object"?v.value:v,nf(T)?null:T}(t.limit));let f=null;t.startAt&&(f=function(v){const T=!!v.before,R=v.values||[];return new yd(R,T)}(t.startAt));let p=null;return t.endAt&&(p=function(v){const T=!v.before,R=v.values||[];return new yd(R,T)}(t.endAt)),Z1(e,i,l,a,h,"F",f,p)}function MO(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function MS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xa(t.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xa(t.unaryFilter.field);return Nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=xa(t.unaryFilter.field);return Nt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=xa(t.unaryFilter.field);return Nt.create(l,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(n):n.fieldFilter!==void 0?function(t){return Nt.create(xa(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Gr.create(t.compositeFilter.filters.map(r=>MS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(n):Se()}function VO(n){return SO[n]}function FO(n){return CO[n]}function UO(n){return RO[n]}function Na(n){return{fieldPath:n.canonicalString()}}function xa(n){return Kt.fromServerFormat(n.fieldPath)}function VS(n){return n instanceof Nt?function(t){if(t.op==="=="){if(Ow(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NAN"}};if(bw(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ow(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NAN"}};if(bw(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Na(t.field),op:FO(t.op),value:t.value}}}(n):n instanceof Gr?function(t){const r=t.getFilters().map(i=>VS(i));return r.length===1?r[0]:{compositeFilter:{op:UO(t.op),filters:r}}}(n):Se()}function jO(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function FS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,r,i,a=Re.min(),l=Re.min(),h=Qt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.Tt=e}}function zO(n){const e=LO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?sg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.Tn=new WO}addToCollectionParentIndex(e,t){return this.Tn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(gs.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(gs.min())}updateCollectionGroup(e,t,r){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class WO{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ot(lt.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ot(lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},US=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(US,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Ka(0)}static Kn(){return new Ka(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="LruGarbageCollector",HO=1048576;function Qw([n,e],[t,r]){const i=Ne(n,t);return i===0?Ne(e,r):i}class qO{constructor(e){this.Hn=e,this.buffer=new Ot(Qw),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Qw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class GO{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ue(Kw,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ol(t)?ue(Kw,"Ignoring IndexedDB error during garbage collection: ",t):await sl(t)}await this.er(3e5)})}}class KO{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return q.resolve(tf.ae);const r=new qO(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Gw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gw):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,a,l,h,f,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,l=Date.now(),this.nthSequenceNumber(e,i))).next(v=>(r=v,h=Date.now(),this.removeTargets(e,r,t))).next(v=>(a=v,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(p=Date.now(),Pa()<=Oe.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-y}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${v} documents in `+(p-f)+`ms
Total Duration: ${p-y}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:v})))}}function QO(n,e){return new KO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.changes=new ko(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ru(r.mutation,i,jn.empty(),bt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ve()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ve()){const i=oo();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(a=>{let l=vu();return a.forEach((h,f)=>{l=l.insert(h,f.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=oo();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ve()))}populateOverlays(e,t,r){const i=[];return r.forEach(a=>{t.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(e,i).next(a=>{a.forEach((l,h)=>{t.set(l,h)})})}computeViews(e,t,r,i){let a=Si();const l=Cu(),h=function(){return Cu()}();return t.forEach((f,p)=>{const y=r.get(p.key);i.has(p.key)&&(y===void 0||y.mutation instanceof Ps)?a=a.insert(p.key,p):y!==void 0?(l.set(p.key,y.mutation.getFieldMask()),Ru(y.mutation,p,y.mutation.getFieldMask(),bt.now())):l.set(p.key,jn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((p,y)=>l.set(p,y)),t.forEach((p,y)=>{var v;return h.set(p,new JO(y,(v=l.get(p))!==null&&v!==void 0?v:null))}),h))}recalculateAndSaveOverlays(e,t){const r=Cu();let i=new St((l,h)=>l-h),a=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const h of l)h.keys().forEach(f=>{const p=t.get(f);if(p===null)return;let y=r.get(f)||jn.empty();y=h.applyToLocalView(p,y),r.set(f,y);const v=(i.get(h.batchId)||Ve()).add(f);i=i.insert(h.batchId,v)})}).next(()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),p=f.key,y=f.value,v=ES();y.forEach(T=>{if(!a.has(T)){const R=RS(t.get(T),r.get(T));R!==null&&v.set(T,R),a=a.add(T)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,v))}return q.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(l){return ve.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eO(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(a=>{const l=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):q.resolve(oo());let h=ju,f=a;return l.next(p=>q.forEach(p,(y,v)=>(h<v.largestBatchId&&(h=v.largestBatchId),a.get(y)?q.resolve():this.remoteDocumentCache.getEntry(e,y).next(T=>{f=f.insert(y,T)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,f,p,Ve())).next(y=>({batchId:h,changes:vS(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(r=>{let i=vu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let l=vu();return this.indexManager.getCollectionParents(e,a).next(h=>q.forEach(h,f=>{const p=function(v,T){return new sf(T,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,p,r,i).next(y=>{y.forEach((v,T)=>{l=l.insert(v,T)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i))).next(l=>{a.forEach((f,p)=>{const y=p.getKey();l.get(y)===null&&(l=l.insert(y,sn.newInvalidDocument(y)))});let h=vu();return l.forEach((f,p)=>{const y=a.get(f);y!==void 0&&Ru(y.mutation,p,jn.empty(),bt.now()),lf(t,p)&&(h=h.insert(f,p))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return q.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Wr(i.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:zO(i.bundledQuery),readTime:Wr(i.readTime)}}(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.overlays=new St(ve.comparator),this.Rr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=oo();return q.forEach(t,i=>this.getOverlay(e,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,a)=>{this.Et(e,t,a)}),q.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.Rr.delete(r)),q.resolve()}getOverlaysForCollection(e,t,r){const i=oo(),a=t.length+1,l=new ve(t.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,p=f.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===a&&f.largestBatchId>r&&i.set(f.getKey(),f)}return q.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new St((p,y)=>p-y);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let y=a.get(p.largestBatchId);y===null&&(y=oo(),a=a.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const h=oo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,y)=>h.set(p,y)),!(h.size()>=i)););return q.resolve(h)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new vO(t,r));let a=this.Rr.get(t);a===void 0&&(a=Ve(),this.Rr.set(t,a)),this.Rr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.Vr=new Ot(jt.mr),this.gr=new Ot(jt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new jt(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new jt(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ve(new lt([])),r=new jt(t,e),i=new jt(t,e+1),a=[];return this.gr.forEachInRange([r,i],l=>{this.wr(l),a.push(l.key)}),a}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ve(new lt([])),r=new jt(t,e),i=new jt(t,e+1);let a=Ve();return this.gr.forEachInRange([r,i],l=>{a=a.add(l.key)}),a}containsKey(e){const t=new jt(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class jt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ve.comparator(e.key,t.key)||Ne(e.Cr,t.Cr)}static pr(e,t){return Ne(e.Cr,t.Cr)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Ot(jt.mr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new yO(a,t,r,i);this.mutationQueue.push(l);for(const h of i)this.Mr=this.Mr.add(new jt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return q.resolve(l)}lookupMutationBatch(e,t){return q.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),a=i<0?0:i;return q.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?s_:this.Fr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new jt(t,0),i=new jt(t,Number.POSITIVE_INFINITY),a=[];return this.Mr.forEachInRange([r,i],l=>{const h=this.Or(l.Cr);a.push(h)}),q.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ot(Ne);return t.forEach(i=>{const a=new jt(i,0),l=new jt(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([a,l],h=>{r=r.add(h.Cr)})}),q.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ve.isDocumentKey(a)||(a=a.child(""));const l=new jt(new ve(a),0);let h=new Ot(Ne);return this.Mr.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(h=h.add(f.Cr)),!0)},l),q.resolve(this.Br(h))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ge(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return q.forEach(t.mutations,i=>{const a=new jt(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new jt(t,0),i=this.Mr.firstAfterOrEqual(r);return q.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.kr=e,this.docs=function(){return new St(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,l=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return q.resolve(r?r.document.mutableCopy():sn.newInvalidDocument(t))}getEntries(e,t){let r=Si();return t.forEach(i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():sn.newInvalidDocument(i))}),q.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Si();const l=t.path,h=new ve(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:p,value:{document:y}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||x1(N1(y),r)<=0||(i.has(y.key)||lf(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return q.resolve(a)}getAllFromCollectionGroup(e,t,r,i){Se()}qr(e,t){return q.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new iD(this)}getSize(e){return q.resolve(this.size)}}class iD extends YO{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),q.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.persistence=e,this.Qr=new ko(t=>l_(t),u_),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.$r=0,this.Ur=new p_,this.targetCount=0,this.Kr=Ka.Un()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),q.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Ka(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.zn(t),q.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.Qr.forEach((l,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Qr.delete(l),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),i++)}),q.waitFor(a).next(()=>i)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return q.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),q.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach(l=>{a.push(i.markPotentiallyOrphaned(e,l))}),q.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return q.resolve(r)}containsKey(e,t){return q.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new tf(0),this.zr=!1,this.zr=!0,this.jr=new tD,this.referenceDelegate=e(this),this.Hr=new sD(this),this.indexManager=new $O,this.remoteDocumentCache=function(i){return new rD(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new BO(t),this.Yr=new ZO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new nD(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const i=new oD(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(a=>this.referenceDelegate.Xr(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}ei(e,t){return q.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class oD extends O1{constructor(e){super(),this.currentSequenceNumber=e}}class m_{constructor(e){this.persistence=e,this.ti=new p_,this.ni=null}static ri(e){return new m_(e)}get ii(){if(this.ni)return this.ni;throw Se()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),q.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),q.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(a=>this.ii.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.ii,r=>{const i=ve.fromPath(r);return this.si(e,i).next(a=>{a||t.removeEntry(i,Re.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return q.or([()=>q.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Id{constructor(e,t){this.persistence=e,this.oi=new ko(r=>M1(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=QO(this,t)}static ri(e,t){return new Id(e,t)}Zr(){}Xr(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return q.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(a=>a?q.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.qr(e,l=>this.ar(e,l,t).next(h=>{h||(r++,a.removeEntry(l,Re.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jh(e.data.value)),t}ar(e,t,r){return q.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return q.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=Ve(),i=Ve();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new g_(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Mk()?8:D1(ln())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.rs(e,t).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.ss(e,t,i,r).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new aD;return this._s(e,t,l).next(h=>{if(a.result=h,this.Xi)return this.us(e,t,l,h.size)})}).next(()=>a.result)}us(e,t,r,i){return r.documentReadCount<this.es?(Pa()<=Oe.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",ka(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),q.resolve()):(Pa()<=Oe.DEBUG&&ue("QueryEngine","Query:",ka(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Pa()<=Oe.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",ka(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$r(t))):q.resolve())}rs(e,t){if(Vw(t))return q.resolve(null);let r=$r(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=sg(t,null,"F"),r=$r(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const l=Ve(...a);return this.ns.getDocuments(e,l).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const p=this.cs(t,h);return this.ls(t,p,l,f.readTime)?this.rs(e,sg(t,null,"F")):this.hs(e,p,t,f)}))})))}ss(e,t,r,i){return Vw(t)||i.isEqual(Re.min())?q.resolve(null):this.ns.getDocuments(e,r).next(a=>{const l=this.cs(t,a);return this.ls(t,l,r,i)?q.resolve(null):(Pa()<=Oe.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ka(t)),this.hs(e,l,t,k1(i,ju)).next(h=>h))})}cs(e,t){let r=new Ot(_S(e));return t.forEach((i,a)=>{lf(e,a)&&(r=r.add(a))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}_s(e,t,r){return Pa()<=Oe.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",ka(t)),this.ns.getDocumentsMatchingQuery(e,t,gs.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(a=>(t.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="LocalStore",uD=3e8;class cD{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new St(Ne),this.Is=new ko(a=>l_(a),u_),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XO(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function hD(n,e,t,r){return new cD(n,e,t,r)}async function BS(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(a=>(i=a,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const l=[],h=[];let f=Ve();for(const p of i){l.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}for(const p of a){h.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next(p=>({Rs:p,removedBatchIds:l,addedBatchIds:h}))})})}function dD(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),a=t.ds.newChangeBuffer({trackRemovals:!0});return function(h,f,p,y){const v=p.batch,T=v.keys();let R=q.resolve();return T.forEach(N=>{R=R.next(()=>y.getEntry(f,N)).next(M=>{const k=p.docVersions.get(N);Ge(k!==null),M.version.compareTo(k)<0&&(v.applyToRemoteDocument(M,p),M.isValidDocument()&&(M.setReadTime(p.commitVersion),y.addEntry(M)))})}),R.next(()=>h.mutationQueue.removeMutationBatch(f,v))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=Ve();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(f=f.add(h.batch.mutations[p].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function zS(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function fD(n,e){const t=Ae(n),r=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const h=[];e.targetChanges.forEach((y,v)=>{const T=i.get(v);if(!T)return;h.push(t.Hr.removeMatchingKeys(a,y.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(a,y.addedDocuments,v)));let R=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(v)!==null?R=R.withResumeToken(Qt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,r)),i=i.insert(v,R),function(M,k,K){return M.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=uD?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(T,R,y)&&h.push(t.Hr.updateTargetData(a,R))});let f=Si(),p=Ve();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))}),h.push(pD(a,l,e.documentUpdates).next(y=>{f=y.Vs,p=y.fs})),!r.isEqual(Re.min())){const y=t.Hr.getLastRemoteSnapshotVersion(a).next(v=>t.Hr.setTargetsMetadata(a,a.currentSequenceNumber,r));h.push(y)}return q.waitFor(h).next(()=>l.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,p)).next(()=>f)}).then(a=>(t.Ts=i,a))}function pD(n,e,t){let r=Ve(),i=Ve();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let l=Si();return t.forEach((h,f)=>{const p=a.get(h);f.isFoundDocument()!==p.isFoundDocument()&&(i=i.add(h)),f.isNoDocument()&&f.version.isEqual(Re.min())?(e.removeEntry(h,f.readTime),l=l.insert(h,f)):!p.isValidDocument()||f.version.compareTo(p.version)>0||f.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(f),l=l.insert(h,f)):ue(__,"Ignoring outdated watch update for ",h,". Current version:",p.version," Watch version:",f.version)}),{Vs:l,fs:i}})}function mD(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=s_),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gD(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Hr.getTargetData(r,e).next(a=>a?(i=a,q.resolve(i)):t.Hr.allocateTargetId(r).next(l=>(i=new ss(e,l,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function cg(n,e,t){const r=Ae(n),i=r.Ts.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!ol(l))throw l;ue(__,`Failed to update sequence numbers for target ${e}: ${l}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function Yw(n,e,t){const r=Ae(n);let i=Re.min(),a=Ve();return r.persistence.runTransaction("Execute query","readwrite",l=>function(f,p,y){const v=Ae(f),T=v.Is.get(y);return T!==void 0?q.resolve(v.Ts.get(T)):v.Hr.getTargetData(p,y)}(r,l,$r(e)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(l,h.targetId).next(f=>{a=f})}).next(()=>r.Ps.getDocumentsMatchingQuery(l,e,t?i:Re.min(),t?a:Ve())).next(h=>(_D(r,nO(e),h),{documents:h,gs:a})))}function _D(n,e,t){let r=n.Es.get(e)||Re.min();t.forEach((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.Es.set(e,r)}class Jw{constructor(){this.activeTargetIds=lO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yD{constructor(){this.ho=new Jw,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Jw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="ConnectivityMonitor";class Zw{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ue(Xw,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ue(Xw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh=null;function hg(){return zh===null?zh=function(){return 268435456+Math.round(2147483648*Math.random())}():zh++,"0x"+zh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="RestConnection",ED={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wD{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===gd?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,t,r,i,a){const l=hg(),h=this.bo(e,t.toUriEncodedString());ue(Cm,`Sending RPC '${e}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,i,a),this.vo(e,h,f,r).then(p=>(ue(Cm,`Received RPC '${e}' ${l}: `,p),p),p=>{throw $a(Cm,`RPC '${e}' ${l} failed with error: `,p,"url: ",h,"request:",r),p})}Co(e,t,r,i,a,l){return this.So(e,t,r,i,a)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+il}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,a)=>e[a]=i),r&&r.headers.forEach((i,a)=>e[a]=i)}bo(e,t){const r=ED[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="WebChannelConnection";class ID extends wD{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const a=hg();return new Promise((l,h)=>{const f=new q0;f.setWithCredentials(!0),f.listenOnce(G0.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Yh.NO_ERROR:const y=f.getResponseJson();ue(nn,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),l(y);break;case Yh.TIMEOUT:ue(nn,`RPC '${e}' ${a} timed out`),h(new me(J.DEADLINE_EXCEEDED,"Request time out"));break;case Yh.HTTP_ERROR:const v=f.getStatus();if(ue(nn,`RPC '${e}' ${a} failed with status:`,v,"response text:",f.getResponseText()),v>0){let T=f.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const N=function(k){const K=k.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(K)>=0?K:J.UNKNOWN}(R.status);h(new me(N,R.message))}else h(new me(J.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new me(J.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{ue(nn,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);ue(nn,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",p,r,15)})}Wo(e,t,r){const i=hg(),a=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=Y0(),h=Q0(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ue(nn,`Creating RPC '${e}' stream ${i}: ${y}`,f);const v=l.createWebChannel(y,f);let T=!1,R=!1;const N=new TD({Fo:k=>{R?ue(nn,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(T||(ue(nn,`Opening RPC '${e}' stream ${i} transport.`),v.open(),T=!0),ue(nn,`RPC '${e}' stream ${i} sending:`,k),v.send(k))},Mo:()=>v.close()}),M=(k,K,te)=>{k.listen(K,Z=>{try{te(Z)}catch(oe){setTimeout(()=>{throw oe},0)}})};return M(v,yu.EventType.OPEN,()=>{R||(ue(nn,`RPC '${e}' stream ${i} transport opened.`),N.Qo())}),M(v,yu.EventType.CLOSE,()=>{R||(R=!0,ue(nn,`RPC '${e}' stream ${i} transport closed`),N.Uo())}),M(v,yu.EventType.ERROR,k=>{R||(R=!0,$a(nn,`RPC '${e}' stream ${i} transport errored:`,k),N.Uo(new me(J.UNAVAILABLE,"The operation could not be completed")))}),M(v,yu.EventType.MESSAGE,k=>{var K;if(!R){const te=k.data[0];Ge(!!te);const Z=te,oe=(Z==null?void 0:Z.error)||((K=Z[0])===null||K===void 0?void 0:K.error);if(oe){ue(nn,`RPC '${e}' stream ${i} received error:`,oe);const Ee=oe.status;let we=function(P){const D=wt[P];if(D!==void 0)return kS(D)}(Ee),O=oe.message;we===void 0&&(we=J.INTERNAL,O="Unknown error status: "+Ee+" with message "+oe.message),R=!0,N.Uo(new me(we,O)),v.close()}else ue(nn,`RPC '${e}' stream ${i} received:`,te),N.Ko(te)}}),M(h,K0.STAT_EVENT,k=>{k.stat===Xm.PROXY?ue(nn,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Xm.NOPROXY&&ue(nn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.$o()},0),N}}function Rm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n){return new AO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=a,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&ue("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="PersistentStream";class WS{constructor(e,t,r,i,a,l,h,f){this.Ti=e,this.n_=r,this.r_=i,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new $S(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(Ii(t.toString()),Ii("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new me(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ue(eT,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ue(eT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SD extends WS{constructor(e,t,r,i,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=NO(this.serializer,e),r=function(a){if(!("targetChange"in a))return Re.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Re.min():l.readTime?Wr(l.readTime):Re.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=ug(this.serializer),t.addTarget=function(a,l){let h;const f=l.target;if(h=ig(f)?{documents:OO(a,f)}:{query:DO(a,f).ht},h.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){h.resumeToken=bS(a,l.resumeToken);const p=og(a,l.expectedCount);p!==null&&(h.expectedCount=p)}else if(l.snapshotVersion.compareTo(Re.min())>0){h.readTime=Td(a,l.snapshotVersion.toTimestamp());const p=og(a,l.expectedCount);p!==null&&(h.expectedCount=p)}return h}(this.serializer,e);const r=MO(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=ug(this.serializer),t.removeTarget=e,this.I_(t)}}class CD extends WS{constructor(e,t,r,i,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=bO(e.writeResults,e.commitTime),r=Wr(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=ug(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>xO(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{}class AD extends RD{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new me(J.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.So(e,ag(t,r),i,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new me(J.UNKNOWN,a.toString())})}Co(e,t,r,i,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Co(e,ag(t,r),i,l,h,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new me(J.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class PD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ii(t),this.N_=!1):ue("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="RemoteStore";class kD{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=a,this.z_.To(l=>{r.enqueueAndForget(async()=>{No(this)&&(ue(vo,"Restarting streams for network reachability change."),await async function(f){const p=Ae(f);p.W_.add(4),await cc(p),p.j_.set("Unknown"),p.W_.delete(4),await ff(p)}(this))})}),this.j_=new PD(r,i)}}async function ff(n){if(No(n))for(const e of n.G_)await e(!0)}async function cc(n){for(const e of n.G_)await e(!1)}function HS(n,e){const t=Ae(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),w_(t)?E_(t):al(t).c_()&&v_(t,e))}function y_(n,e){const t=Ae(n),r=al(t);t.K_.delete(e),r.c_()&&qS(t,e),t.K_.size===0&&(r.c_()?r.P_():No(t)&&t.j_.set("Unknown"))}function v_(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}al(n).y_(e)}function qS(n,e){n.H_.Ne(e),al(n).w_(e)}function E_(n){n.H_=new IO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),al(n).start(),n.j_.B_()}function w_(n){return No(n)&&!al(n).u_()&&n.K_.size>0}function No(n){return Ae(n).W_.size===0}function GS(n){n.H_=void 0}async function ND(n){n.j_.set("Online")}async function xD(n){n.K_.forEach((e,t)=>{v_(n,e)})}async function bD(n,e){GS(n),w_(n)?(n.j_.q_(e),E_(n)):n.j_.set("Unknown")}async function OD(n,e,t){if(n.j_.set("Online"),e instanceof xS&&e.state===2&&e.cause)try{await async function(i,a){const l=a.cause;for(const h of a.targetIds)i.K_.has(h)&&(await i.remoteSyncer.rejectListen(h,l),i.K_.delete(h),i.H_.removeTarget(h))}(n,e)}catch(r){ue(vo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sd(n,r)}else if(e instanceof ed?n.H_.We(e):e instanceof NS?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Re.min()))try{const r=await zS(n.localStore);t.compareTo(r)>=0&&await function(a,l){const h=a.H_.ot(l);return h.targetChanges.forEach((f,p)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.K_.get(p);y&&a.K_.set(p,y.withResumeToken(f.resumeToken,l))}}),h.targetMismatches.forEach((f,p)=>{const y=a.K_.get(f);if(!y)return;a.K_.set(f,y.withResumeToken(Qt.EMPTY_BYTE_STRING,y.snapshotVersion)),qS(a,f);const v=new ss(y.target,f,p,y.sequenceNumber);v_(a,v)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){ue(vo,"Failed to raise snapshot:",r),await Sd(n,r)}}async function Sd(n,e,t){if(!ol(e))throw e;n.W_.add(1),await cc(n),n.j_.set("Offline"),t||(t=()=>zS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ue(vo,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ff(n)})}function KS(n,e){return e().catch(t=>Sd(n,t,e))}async function pf(n){const e=Ae(n),t=Es(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:s_;for(;DD(e);)try{const i=await mD(e.localStore,r);if(i===null){e.U_.length===0&&t.P_();break}r=i.batchId,LD(e,i)}catch(i){await Sd(e,i)}QS(e)&&YS(e)}function DD(n){return No(n)&&n.U_.length<10}function LD(n,e){n.U_.push(e);const t=Es(n);t.c_()&&t.S_&&t.b_(e.mutations)}function QS(n){return No(n)&&!Es(n).u_()&&n.U_.length>0}function YS(n){Es(n).start()}async function MD(n){Es(n).C_()}async function VD(n){const e=Es(n);for(const t of n.U_)e.b_(t.mutations)}async function FD(n,e,t){const r=n.U_.shift(),i=h_.from(r,e,t);await KS(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await pf(n)}async function UD(n,e){e&&Es(n).S_&&await async function(r,i){if(function(l){return wO(l)&&l!==J.ABORTED}(i.code)){const a=r.U_.shift();Es(r).h_(),await KS(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i)),await pf(r)}}(n,e),QS(n)&&YS(n)}async function tT(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),ue(vo,"RemoteStore received new credentials");const r=No(t);t.W_.add(3),await cc(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ff(t)}async function jD(n,e){const t=Ae(n);e?(t.W_.delete(2),await ff(t)):e||(t.W_.add(2),await cc(t),t.j_.set("Unknown"))}function al(n){return n.J_||(n.J_=function(t,r,i){const a=Ae(t);return a.M_(),new SD(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(n.datastore,n.asyncQueue,{xo:ND.bind(null,n),No:xD.bind(null,n),Lo:bD.bind(null,n),p_:OD.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),w_(n)?E_(n):n.j_.set("Unknown")):(await n.J_.stop(),GS(n))})),n.J_}function Es(n){return n.Y_||(n.Y_=function(t,r,i){const a=Ae(t);return a.M_(),new CD(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:MD.bind(null,n),Lo:UD.bind(null,n),D_:VD.bind(null,n),v_:FD.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await pf(n)):(await n.Y_.stop(),n.U_.length>0&&(ue(vo,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const l=Date.now()+r,h=new T_(e,t,l,i,a);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(n,e){if(Ii("AsyncQueue",`${e}: ${n}`),ol(n))return new me(J.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{static emptySet(e){return new Va(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ve.comparator(t.key,r.key):(t,r)=>ve.comparator(t.key,r.key),this.keyedMap=vu(),this.sortedSet=new St(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Va)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Va;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(){this.Z_=new St(ve.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Se():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Qa{constructor(e,t,r,i,a,l,h,f,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,i,a){const l=[];return t.forEach(h=>{l.push({type:0,doc:h})}),new Qa(e,t,Va.emptySet(t),l,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&af(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class zD{constructor(){this.queries=rT(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=Ae(t),a=i.queries;i.queries=rT(),a.forEach((l,h)=>{for(const f of h.ta)f.onError(r)})})(this,new me(J.ABORTED,"Firestore shutting down"))}}function rT(){return new ko(n=>gS(n),af)}async function JS(n,e){const t=Ae(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.na()&&e.ra()&&(r=2):(a=new BD,r=e.ra()?0:1);try{switch(r){case 0:a.ea=await t.onListen(i,!0);break;case 1:a.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(l){const h=I_(l,`Initialization of query '${ka(e.query)}' failed`);return void e.onError(h)}t.queries.set(i,a),a.ta.push(e),e.sa(t.onlineState),a.ea&&e.oa(a.ea)&&S_(t)}async function XS(n,e){const t=Ae(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const l=a.ta.indexOf(e);l>=0&&(a.ta.splice(l,1),a.ta.length===0?i=e.ra()?0:1:!a.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function $D(n,e){const t=Ae(n);let r=!1;for(const i of e){const a=i.query,l=t.queries.get(a);if(l){for(const h of l.ta)h.oa(i)&&(r=!0);l.ea=i}}r&&S_(t)}function WD(n,e,t){const r=Ae(n),i=r.queries.get(e);if(i)for(const a of i.ta)a.onError(t);r.queries.delete(e)}function S_(n){n.ia.forEach(e=>{e.next()})}var dg,iT;(iT=dg||(dg={}))._a="default",iT.Cache="cache";class ZS{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Qa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Qa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==dg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.key=e}}class tC{constructor(e){this.key=e}}class HD{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ve(),this.mutatedKeys=Ve(),this.ya=_S(e),this.wa=new Va(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new nT,i=t?t.wa:this.wa;let a=t?t.mutatedKeys:this.mutatedKeys,l=i,h=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,p=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((y,v)=>{const T=i.get(y),R=lf(this.query,v)?v:null,N=!!T&&this.mutatedKeys.has(T.key),M=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let k=!1;T&&R?T.data.isEqual(R.data)?N!==M&&(r.track({type:3,doc:R}),k=!0):this.va(T,R)||(r.track({type:2,doc:R}),k=!0,(f&&this.ya(R,f)>0||p&&this.ya(R,p)<0)&&(h=!0)):!T&&R?(r.track({type:0,doc:R}),k=!0):T&&!R&&(r.track({type:1,doc:T}),k=!0,(f||p)&&(h=!0)),k&&(R?(l=l.add(R),a=M?a.add(y):a.delete(y)):(l=l.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const y=this.query.limitType==="F"?l.last():l.first();l=l.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{wa:l,Da:r,ls:h,mutatedKeys:a}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const l=e.Da.X_();l.sort((y,v)=>function(R,N){const M=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return M(R)-M(N)}(y.type,v.type)||this.ya(y.doc,v.doc)),this.Ca(r),i=i!=null&&i;const h=t&&!i?this.Fa():[],f=this.pa.size===0&&this.current&&!i?1:0,p=f!==this.ga;return this.ga=f,l.length!==0||p?{snapshot:new Qa(this.query,e.wa,a,l,e.mutatedKeys,f===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:h}:{Ma:h}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new nT,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ve(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new tC(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new eC(r))}),t}Oa(e){this.fa=e.gs,this.pa=Ve();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Qa.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const C_="SyncEngine";class qD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class GD{constructor(e){this.key=e,this.Ba=!1}}class KD{constructor(e,t,r,i,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new ko(h=>gS(h),af),this.qa=new Map,this.Qa=new Set,this.$a=new St(ve.comparator),this.Ua=new Map,this.Ka=new p_,this.Wa={},this.Ga=new Map,this.za=Ka.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function QD(n,e,t=!0){const r=aC(n);let i;const a=r.ka.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.Na()):i=await nC(r,e,t,!0),i}async function YD(n,e){const t=aC(n);await nC(t,e,!0,!1)}async function nC(n,e,t,r){const i=await gD(n.localStore,$r(e)),a=i.targetId,l=n.sharedClientState.addLocalQueryTarget(a,t);let h;return r&&(h=await JD(n,e,a,l==="current",i.resumeToken)),n.isPrimaryClient&&t&&HS(n.remoteStore,i),h}async function JD(n,e,t,r,i){n.Ha=(v,T,R)=>async function(M,k,K,te){let Z=k.view.ba(K);Z.ls&&(Z=await Yw(M.localStore,k.query,!1).then(({documents:O})=>k.view.ba(O,Z)));const oe=te&&te.targetChanges.get(k.targetId),Ee=te&&te.targetMismatches.get(k.targetId)!=null,we=k.view.applyChanges(Z,M.isPrimaryClient,oe,Ee);return oT(M,k.targetId,we.Ma),we.snapshot}(n,v,T,R);const a=await Yw(n.localStore,e,!0),l=new HD(e,a.gs),h=l.ba(a.documents),f=uc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),p=l.applyChanges(h,n.isPrimaryClient,f);oT(n,t,p.Ma);const y=new qD(e,t,l);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),p.snapshot}async function XD(n,e,t){const r=Ae(n),i=r.ka.get(e),a=r.qa.get(i.targetId);if(a.length>1)return r.qa.set(i.targetId,a.filter(l=>!af(l,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await cg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&y_(r.remoteStore,i.targetId),fg(r,i.targetId)}).catch(sl)):(fg(r,i.targetId),await cg(r.localStore,i.targetId,!0))}async function ZD(n,e){const t=Ae(n),r=t.ka.get(e),i=t.qa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),y_(t.remoteStore,r.targetId))}async function eL(n,e,t){const r=aL(n);try{const i=await function(l,h){const f=Ae(l),p=bt.now(),y=h.reduce((R,N)=>R.add(N.key),Ve());let v,T;return f.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=Si(),M=Ve();return f.ds.getEntries(R,y).next(k=>{N=k,N.forEach((K,te)=>{te.isValidDocument()||(M=M.add(K))})}).next(()=>f.localDocuments.getOverlayedDocuments(R,N)).next(k=>{v=k;const K=[];for(const te of h){const Z=gO(te,v.get(te.key).overlayedDocument);Z!=null&&K.push(new Ps(te.key,Z,uS(Z.value.mapValue),Tr.exists(!0)))}return f.mutationQueue.addMutationBatch(R,p,K,h)}).next(k=>{T=k;const K=k.applyToLocalDocumentSet(v,M);return f.documentOverlayCache.saveOverlays(R,k.batchId,K)})}).then(()=>({batchId:T.batchId,changes:vS(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,h,f){let p=l.Wa[l.currentUser.toKey()];p||(p=new St(Ne)),p=p.insert(h,f),l.Wa[l.currentUser.toKey()]=p}(r,i.batchId,t),await hc(r,i.changes),await pf(r.remoteStore)}catch(i){const a=I_(i,"Failed to persist write");t.reject(a)}}async function rC(n,e){const t=Ae(n);try{const r=await fD(t.localStore,e);e.targetChanges.forEach((i,a)=>{const l=t.Ua.get(a);l&&(Ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.Ba=!0:i.modifiedDocuments.size>0?Ge(l.Ba):i.removedDocuments.size>0&&(Ge(l.Ba),l.Ba=!1))}),await hc(t,r,e)}catch(r){await sl(r)}}function sT(n,e,t){const r=Ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((a,l)=>{const h=l.view.sa(e);h.snapshot&&i.push(h.snapshot)}),function(l,h){const f=Ae(l);f.onlineState=h;let p=!1;f.queries.forEach((y,v)=>{for(const T of v.ta)T.sa(h)&&(p=!0)}),p&&S_(f)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tL(n,e,t){const r=Ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ua.get(e),a=i&&i.key;if(a){let l=new St(ve.comparator);l=l.insert(a,sn.newNoDocument(a,Re.min()));const h=Ve().add(a),f=new hf(Re.min(),new Map,new St(Ne),l,h);await rC(r,f),r.$a=r.$a.remove(a),r.Ua.delete(e),R_(r)}else await cg(r.localStore,e,!1).then(()=>fg(r,e,t)).catch(sl)}async function nL(n,e){const t=Ae(n),r=e.batch.batchId;try{const i=await dD(t.localStore,e);sC(t,r,null),iC(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await hc(t,i)}catch(i){await sl(i)}}async function rL(n,e,t){const r=Ae(n);try{const i=await function(l,h){const f=Ae(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return f.mutationQueue.lookupMutationBatch(p,h).next(v=>(Ge(v!==null),y=v.keys(),f.mutationQueue.removeMutationBatch(p,v))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,y,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>f.localDocuments.getDocuments(p,y))})}(r.localStore,e);sC(r,e,t),iC(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await hc(r,i)}catch(i){await sl(i)}}function iC(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function sC(n,e,t){const r=Ae(n);let i=r.Wa[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function fg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||oC(n,r)})}function oC(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(y_(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),R_(n))}function oT(n,e,t){for(const r of t)r instanceof eC?(n.Ka.addReference(r.key,e),iL(n,r)):r instanceof tC?(ue(C_,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||oC(n,r.key)):Se()}function iL(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(ue(C_,"New document in limbo: "+t),n.Qa.add(r),R_(n))}function R_(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ve(lt.fromString(e)),r=n.za.next();n.Ua.set(r,new GD(t)),n.$a=n.$a.insert(t,r),HS(n.remoteStore,new ss($r(of(t.path)),r,"TargetPurposeLimboResolution",tf.ae))}}async function hc(n,e,t){const r=Ae(n),i=[],a=[],l=[];r.ka.isEmpty()||(r.ka.forEach((h,f)=>{l.push(r.Ha(f,e,t).then(p=>{var y;if((p||t)&&r.isPrimaryClient){const v=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,v?"current":"not-current")}if(p){i.push(p);const v=g_.Yi(f.targetId,p);a.push(v)}}))}),await Promise.all(l),r.La.p_(i),await async function(f,p){const y=Ae(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>q.forEach(p,T=>q.forEach(T.Hi,R=>y.persistence.referenceDelegate.addReference(v,T.targetId,R)).next(()=>q.forEach(T.Ji,R=>y.persistence.referenceDelegate.removeReference(v,T.targetId,R)))))}catch(v){if(!ol(v))throw v;ue(__,"Failed to update sequence numbers: "+v)}for(const v of p){const T=v.targetId;if(!v.fromCache){const R=y.Ts.get(T),N=R.snapshotVersion,M=R.withLastLimboFreeSnapshotVersion(N);y.Ts=y.Ts.insert(T,M)}}}(r.localStore,a))}async function sL(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){ue(C_,"User change. New user:",e.toKey());const r=await BS(t.localStore,e);t.currentUser=e,function(a,l){a.Ga.forEach(h=>{h.forEach(f=>{f.reject(new me(J.CANCELLED,l))})}),a.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hc(t,r.Rs)}}function oL(n,e){const t=Ae(n),r=t.Ua.get(e);if(r&&r.Ba)return Ve().add(r.key);{let i=Ve();const a=t.qa.get(e);if(!a)return i;for(const l of a){const h=t.ka.get(l);i=i.unionWith(h.view.Sa)}return i}}function aC(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tL.bind(null,e),e.La.p_=$D.bind(null,e.eventManager),e.La.Ja=WD.bind(null,e.eventManager),e}function aL(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rL.bind(null,e),e}class Cd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=df(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return hD(this.persistence,new lD,e.initialUser,this.serializer)}Xa(e){return new jS(m_.ri,this.serializer)}Za(e){return new yD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cd.provider={build:()=>new Cd};class lL extends Cd{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ge(this.persistence.referenceDelegate instanceof Id);const r=this.persistence.referenceDelegate.garbageCollector;return new GO(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new jS(r=>Id.ri(r,t),this.serializer)}}class pg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sL.bind(null,this.syncEngine),await jD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zD}()}createDatastore(e){const t=df(e.databaseInfo.databaseId),r=function(a){return new ID(a)}(e.databaseInfo);return function(a,l,h,f){return new AD(a,l,h,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,a,l,h){return new kD(r,i,a,l,h)}(this.localStore,this.datastore,e.asyncQueue,t=>sT(this.syncEngine,t,0),function(){return Zw.D()?new Zw:new vD}())}createSyncEngine(e,t){return function(i,a,l,h,f,p,y){const v=new KD(i,a,l,h,f,p);return y&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const a=Ae(i);ue(vo,"RemoteStore shutting down."),a.W_.add(5),await cc(a),a.z_.shutdown(),a.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}pg.provider={build:()=>new pg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Ii("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="FirestoreClient";class uL{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=rn.UNAUTHENTICATED,this.clientId=Z0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async l=>{ue(ws,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(ue(ws,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=I_(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Am(n,e){n.asyncQueue.verifyOperationInProgress(),ue(ws,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await BS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function aT(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cL(n);ue(ws,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>tT(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>tT(e.remoteStore,i)),n._onlineComponents=e}async function cL(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(ws,"Using user provided OfflineComponentProvider");try{await Am(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===J.FAILED_PRECONDITION||i.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;$a("Error using user provided cache. Falling back to memory cache: "+t),await Am(n,new Cd)}}else ue(ws,"Using default OfflineComponentProvider"),await Am(n,new lL(void 0));return n._offlineComponents}async function uC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(ws,"Using user provided OnlineComponentProvider"),await aT(n,n._uninitializedComponentsProvider._online)):(ue(ws,"Using default OnlineComponentProvider"),await aT(n,new pg))),n._onlineComponents}function hL(n){return uC(n).then(e=>e.syncEngine)}async function mg(n){const e=await uC(n),t=e.eventManager;return t.onListen=QD.bind(null,e.syncEngine),t.onUnlisten=XD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZD.bind(null,e.syncEngine),t}function dL(n,e,t={}){const r=new us;return n.asyncQueue.enqueueAndForget(async()=>function(a,l,h,f,p){const y=new lC({next:T=>{y.su(),l.enqueueAndForget(()=>XS(a,v));const R=T.docs.has(h);!R&&T.fromCache?p.reject(new me(J.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&f&&f.source==="server"?p.reject(new me(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(T)},error:T=>p.reject(T)}),v=new ZS(of(h.path),y,{includeMetadataChanges:!0,Ta:!0});return JS(a,v)}(await mg(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(n,e,t){if(!t)throw new me(J.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fL(n,e,t,r){if(e===!0&&r===!0)throw new me(J.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function uT(n){if(!ve.isDocumentKey(n))throw new me(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cT(n){if(ve.isDocumentKey(n))throw new me(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function A_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se()}function Ir(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new me(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=A_(n);throw new me(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="firestore.googleapis.com",hT=!0;class dT{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new me(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dC,this.ssl=hT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:hT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=US;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HO)throw new me(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new me(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new me(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new me(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mf{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new E1;switch(r.type){case"firstParty":return new S1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new me(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=lT.get(t);r&&(ue("ComponentProvider","Removing Datastore"),lT.delete(t),r.terminate())}(this),Promise.resolve()}}function pL(n,e,t,r={}){var i;const a=(n=Ir(n,mf))._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;a.host!==dC&&a.host!==h&&$a("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:h,ssl:!1,emulatorOptions:r});if(!Hr(f,l)&&(n._setSettings(f),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=rn.MOCK_USER;else{p=zg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new me(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new rn(v)}n._authCredentials=new w1(new J0(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gf(this.firestore,e,this._query)}}class pn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}}class hs extends gf{constructor(e,t,r){super(e,t,of(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new ve(e))}withConverter(e){return new hs(this.firestore,e,this._path)}}function fT(n,e,...t){if(n=nt(n),hC("collection","path",e),n instanceof mf){const r=lt.fromString(e,...t);return cT(r),new hs(n,null,r)}{if(!(n instanceof pn||n instanceof hs))throw new me(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return cT(r),new hs(n.firestore,null,r)}}function xo(n,e,...t){if(n=nt(n),arguments.length===1&&(e=Z0.newId()),hC("doc","path",e),n instanceof mf){const r=lt.fromString(e,...t);return uT(r),new pn(n,null,new ve(r))}{if(!(n instanceof pn||n instanceof hs))throw new me(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return uT(r),new pn(n.firestore,n instanceof hs?n.converter:null,new ve(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="AsyncQueue";class mT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new $S(this,"async_queue_retry"),this.Su=()=>{const r=Rm();r&&ue(pT,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Rm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Rm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new us;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ol(e))throw e;ue(pT,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(l){let h=l.message||"";return l.stack&&(h=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),h}(r);throw Ii("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=T_.createAndSchedule(this,e,t,r,a=>this.Fu(a));return this.fu.push(i),i}Du(){this.gu&&Se()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function gT(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const a of r)if(a in i&&typeof i[a]=="function")return!0;return!1}(n,["next","error","complete"])}class Eo extends mf{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new mT,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mT(e),this._firestoreClient=void 0,await e}}}function fC(n,e){const t=typeof n=="object"?n:nl(),r=typeof n=="string"?n:gd,i=Rr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=Bg("firestore");a&&pL(i,...a)}return i}function P_(n){if(n._terminated)throw new me(J.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||mL(n),n._firestoreClient}function mL(n){var e,t,r;const i=n._freezeSettings(),a=function(h,f,p,y){return new U1(h,f,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,cC(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new uL(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ya(Qt.fromBase64String(e))}catch(t){throw new me(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ya(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=/^__.*__$/;class _L{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new lc(e,this.data,t,this.fieldTransforms)}}class pC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ps(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class vf{constructor(e,t,r,i,a,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Bu(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Rd(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(mC(this.Lu)&&gL.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class yL{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||df(e)}ju(e,t,r,i=!1){return new vf({Lu:e,methodName:t,zu:r,path:Kt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function x_(n){const e=n._freezeSettings(),t=df(n._databaseId);return new yL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gC(n,e,t,r,i,a={}){const l=n.ju(a.merge||a.mergeFields?2:0,e,t,i);O_("Data must be an object, but it was:",l,r);const h=_C(r,l);let f,p;if(a.merge)f=new jn(l.fieldMask),p=l.fieldTransforms;else if(a.mergeFields){const y=[];for(const v of a.mergeFields){const T=gg(e,v,t);if(!l.contains(T))throw new me(J.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);vC(y,T)||y.push(T)}f=new jn(y),p=l.fieldTransforms.filter(v=>f.covers(v.field))}else f=null,p=l.fieldTransforms;return new _L(new Sn(h),f,p)}class Ef extends yf{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ef}}function vL(n,e,t){return new vf({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class b_ extends yf{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=vL(this,e,!0),r=this.Hu.map(a=>dc(a,t)),i=new Ga(r);return new dO(e.path,i)}isEqual(e){return e instanceof b_&&Hr(this.Hu,e.Hu)}}function EL(n,e,t,r){const i=n.ju(1,e,t);O_("Data must be an object, but it was:",i,r);const a=[],l=Sn.empty();As(r,(f,p)=>{const y=D_(e,f,t);p=nt(p);const v=i.Uu(y);if(p instanceof Ef)a.push(y);else{const T=dc(p,v);T!=null&&(a.push(y),l.set(y,T))}});const h=new jn(a);return new pC(l,h,i.fieldTransforms)}function wL(n,e,t,r,i,a){const l=n.ju(1,e,t),h=[gg(e,r,t)],f=[i];if(a.length%2!=0)throw new me(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)h.push(gg(e,a[T])),f.push(a[T+1]);const p=[],y=Sn.empty();for(let T=h.length-1;T>=0;--T)if(!vC(p,h[T])){const R=h[T];let N=f[T];N=nt(N);const M=l.Uu(R);if(N instanceof Ef)p.push(R);else{const k=dc(N,M);k!=null&&(p.push(R),y.set(R,k))}}const v=new jn(p);return new pC(y,v,l.fieldTransforms)}function dc(n,e){if(yC(n=nt(n)))return O_("Unsupported field value:",e,n),_C(n,e);if(n instanceof yf)return function(r,i){if(!mC(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const a=[];let l=0;for(const h of r){let f=dc(h,i.Ku(l));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),l++}return{arrayValue:{values:a}}}(n,e)}return function(r,i){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=bt.fromDate(r);return{timestampValue:Td(i.serializer,a)}}if(r instanceof bt){const a=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Td(i.serializer,a)}}if(r instanceof k_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ya)return{bytesValue:bS(i.serializer,r._byteString)};if(r instanceof pn){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:f_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof N_)return function(l,h){return{mapValue:{fields:{[aS]:{stringValue:lS},[_d]:{arrayValue:{values:l.toArray().map(p=>{if(typeof p!="number")throw h.Wu("VectorValues must only contain numeric values.");return c_(h.serializer,p)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${A_(r)}`)}(n,e)}function _C(n,e){const t={};return tS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(n,(r,i)=>{const a=dc(i,e.qu(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function yC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof bt||n instanceof k_||n instanceof Ya||n instanceof pn||n instanceof yf||n instanceof N_)}function O_(n,e,t){if(!yC(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=A_(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function gg(n,e,t){if((e=nt(e))instanceof _f)return e._internalPath;if(typeof e=="string")return D_(n,e);throw Rd("Field path arguments must be of type string or ",n,!1,void 0,t)}const TL=new RegExp("[~\\*/\\[\\]]");function D_(n,e,t){if(e.search(TL)>=0)throw Rd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _f(...e.split("."))._internalPath}catch{throw Rd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Rd(n,e,t,r,i){const a=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||l)&&(f+=" (found",a&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new me(J.INVALID_ARGUMENT,h+n+f)}function vC(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wC("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IL extends EC{data(){return super.data()}}function wC(n,e){return typeof e=="string"?D_(n,e):e instanceof _f?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new me(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class CL{convertValue(e,t="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return As(e,(i,a)=>{r[i]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,i;const a=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[_d].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(l=>yt(l.doubleValue));return new N_(a)}convertGeoPoint(e){return new k_(yt(e.latitude),yt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=rf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bu(e));default:return null}}convertTimestamp(e){const t=_s(e);return new bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=lt.fromString(e);Ge(FS(r));const i=new zu(r.get(1),r.get(3)),a=new ve(r.popFirst(5));return i.isEqual(t)||Ii(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class IC extends EC{constructor(e,t,r,i,a,l){super(e,t,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new td(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(wC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class td extends IC{data(e={}){return super.data(e)}}class RL{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new wu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new td(this._firestore,this._userDataWriter,r.key,r,new wu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new me(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,a){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(h=>{const f=new td(i._firestore,i._userDataWriter,h.doc.key,h.doc,new wu(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>a||h.type!==3).map(h=>{const f=new td(i._firestore,i._userDataWriter,h.doc.key,h.doc,new wu(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,y=-1;return h.type!==0&&(p=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),y=l.indexOf(h.doc.key)),{type:AL(h.type),doc:f,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function AL(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(n){n=Ir(n,pn);const e=Ir(n.firestore,Eo);return dL(P_(e),n._key).then(t=>RC(e,n,t))}class CC extends CL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ya(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pn(this.firestore,null,t)}}function PL(n,e,t){n=Ir(n,pn);const r=Ir(n.firestore,Eo),i=TC(n.converter,e);return M_(r,[gC(x_(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Tr.none())])}function L_(n,e,t,...r){n=Ir(n,pn);const i=Ir(n.firestore,Eo),a=x_(i);let l;return l=typeof(e=nt(e))=="string"||e instanceof _f?wL(a,"updateDoc",n._key,e,t,r):EL(a,"updateDoc",n._key,e),M_(i,[l.toMutation(n._key,Tr.exists(!0))])}function kL(n,e){const t=Ir(n.firestore,Eo),r=xo(n),i=TC(n.converter,e);return M_(t,[gC(x_(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Tr.exists(!1))]).then(()=>r)}function NL(n,...e){var t,r,i;n=nt(n);let a={includeMetadataChanges:!1,source:"default"},l=0;typeof e[l]!="object"||gT(e[l])||(a=e[l],l++);const h={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(gT(e[l])){const v=e[l];e[l]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[l+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[l+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let f,p,y;if(n instanceof pn)p=Ir(n.firestore,Eo),y=of(n._key.path),f={next:v=>{e[l]&&e[l](RC(p,n,v))},error:e[l+1],complete:e[l+2]};else{const v=Ir(n,gf);p=Ir(v.firestore,Eo),y=v._query;const T=new CC(p);f={next:R=>{e[l]&&e[l](new RL(p,T,v,R))},error:e[l+1],complete:e[l+2]},SL(n._query)}return function(T,R,N,M){const k=new lC(M),K=new ZS(R,k,N);return T.asyncQueue.enqueueAndForget(async()=>JS(await mg(T),K)),()=>{k.su(),T.asyncQueue.enqueueAndForget(async()=>XS(await mg(T),K))}}(P_(p),y,h,f)}function M_(n,e){return function(r,i){const a=new us;return r.asyncQueue.enqueueAndForget(async()=>eL(await hL(r),i,a)),a.promise}(P_(n),e)}function RC(n,e,t){const r=t.docs.get(e._key),i=new CC(n);return new IC(n,i,e._key,r,new wu(t.hasPendingWrites,t.fromCache),e.converter)}function xL(...n){return new b_("arrayUnion",n)}(function(e,t=!0){(function(i){il=i})(Qr),xn(new Nn("firestore",(r,{instanceIdentifier:i,options:a})=>{const l=r.getProvider("app").getImmediate(),h=new Eo(new T1(r.getProvider("auth-internal")),new C1(l,r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new me(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zu(p.options.projectId,y)}(l,i),l);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),Tt(Ew,ww,e),Tt(Ew,ww,"esm2017")})();var bL="firebase",OL="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(bL,OL,"app");const AC="@firebase/installations",V_="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=1e4,kC=`w:${V_}`,NC="FIS_v2",DL="https://firebaseinstallations.googleapis.com/v1",LL=60*60*1e3,ML="installations",VL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wo=new Ai(ML,VL,FL);function xC(n){return n instanceof $n&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC({projectId:n}){return`${DL}/projects/${n}/installations`}function OC(n){return{token:n.token,requestStatus:2,expiresIn:jL(n.expiresIn),creationTime:Date.now()}}async function DC(n,e){const r=(await e.json()).error;return wo.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function LC({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function UL(n,{refreshToken:e}){const t=LC(n);return t.append("Authorization",BL(e)),t}async function MC(n){const e=await n();return e.status>=500&&e.status<600?n():e}function jL(n){return Number(n.replace("s","000"))}function BL(n){return`${NC} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=bC(n),i=LC(n),a=e.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={fid:t,authVersion:NC,appId:n.appId,sdkVersion:kC},h={method:"POST",headers:i,body:JSON.stringify(l)},f=await MC(()=>fetch(r,h));if(f.ok){const p=await f.json();return{fid:p.fid||t,registrationStatus:2,refreshToken:p.refreshToken,authToken:OC(p.authToken)}}else throw await DC("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=/^[cdef][\w-]{21}$/,_g="";function HL(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=qL(n);return WL.test(t)?t:_g}catch{return _g}}function qL(n){return $L(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=new Map;function UC(n,e){const t=wf(n);jC(t,e),GL(t,e)}function jC(n,e){const t=FC.get(n);if(t)for(const r of t)r(e)}function GL(n,e){const t=KL();t&&t.postMessage({key:n,fid:e}),QL()}let ao=null;function KL(){return!ao&&"BroadcastChannel"in self&&(ao=new BroadcastChannel("[Firebase] FID Change"),ao.onmessage=n=>{jC(n.data.key,n.data.fid)}),ao}function QL(){FC.size===0&&ao&&(ao.close(),ao=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL="firebase-installations-database",JL=1,To="firebase-installations-store";let Pm=null;function F_(){return Pm||(Pm=r0(YL,JL,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(To)}}})),Pm}async function Ad(n,e){const t=wf(n),i=(await F_()).transaction(To,"readwrite"),a=i.objectStore(To),l=await a.get(t);return await a.put(e,t),await i.done,(!l||l.fid!==e.fid)&&UC(n,e.fid),e}async function BC(n){const e=wf(n),r=(await F_()).transaction(To,"readwrite");await r.objectStore(To).delete(e),await r.done}async function Tf(n,e){const t=wf(n),i=(await F_()).transaction(To,"readwrite"),a=i.objectStore(To),l=await a.get(t),h=e(l);return h===void 0?await a.delete(t):await a.put(h,t),await i.done,h&&(!l||l.fid!==h.fid)&&UC(n,h.fid),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(n){let e;const t=await Tf(n.appConfig,r=>{const i=XL(r),a=ZL(n,i);return e=a.registrationPromise,a.installationEntry});return t.fid===_g?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function XL(n){const e=n||{fid:HL(),registrationStatus:0};return zC(e)}function ZL(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=eM(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tM(n)}:{installationEntry:e}}async function eM(n,e){try{const t=await zL(n,e);return Ad(n.appConfig,t)}catch(t){throw xC(t)&&t.customData.serverCode===409?await BC(n.appConfig):await Ad(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function tM(n){let e=await _T(n.appConfig);for(;e.registrationStatus===1;)await VC(100),e=await _T(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await U_(n);return r||t}return e}function _T(n){return Tf(n,e=>{if(!e)throw wo.create("installation-not-found");return zC(e)})}function zC(n){return nM(n)?{fid:n.fid,registrationStatus:0}:n}function nM(n){return n.registrationStatus===1&&n.registrationTime+PC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM({appConfig:n,heartbeatServiceProvider:e},t){const r=iM(n,t),i=UL(n,t),a=e.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={installation:{sdkVersion:kC,appId:n.appId}},h={method:"POST",headers:i,body:JSON.stringify(l)},f=await MC(()=>fetch(r,h));if(f.ok){const p=await f.json();return OC(p)}else throw await DC("Generate Auth Token",f)}function iM(n,{fid:e}){return`${bC(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n,e=!1){let t;const r=await Tf(n.appConfig,a=>{if(!$C(a))throw wo.create("not-registered");const l=a.authToken;if(!e&&aM(l))return a;if(l.requestStatus===1)return t=sM(n,e),a;{if(!navigator.onLine)throw wo.create("app-offline");const h=uM(a);return t=oM(n,h),h}});return t?await t:r.authToken}async function sM(n,e){let t=await yT(n.appConfig);for(;t.authToken.requestStatus===1;)await VC(100),t=await yT(n.appConfig);const r=t.authToken;return r.requestStatus===0?j_(n,e):r}function yT(n){return Tf(n,e=>{if(!$C(e))throw wo.create("not-registered");const t=e.authToken;return cM(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function oM(n,e){try{const t=await rM(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ad(n.appConfig,r),t}catch(t){if(xC(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await BC(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ad(n.appConfig,r)}throw t}}function $C(n){return n!==void 0&&n.registrationStatus===2}function aM(n){return n.requestStatus===2&&!lM(n)}function lM(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+LL}function uM(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function cM(n){return n.requestStatus===1&&n.requestTime+PC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hM(n){const e=n,{installationEntry:t,registrationPromise:r}=await U_(e);return r?r.catch(console.error):j_(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dM(n,e=!1){const t=n;return await fM(t),(await j_(t,e)).token}async function fM(n){const{registrationPromise:e}=await U_(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(n){if(!n||!n.options)throw km("App Configuration");if(!n.name)throw km("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw km(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function km(n){return wo.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="installations",mM="installations-internal",gM=n=>{const e=n.getProvider("app").getImmediate(),t=pM(e),r=Rr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_M=n=>{const e=n.getProvider("app").getImmediate(),t=Rr(e,WC).getImmediate();return{getId:()=>hM(t),getToken:i=>dM(t,i)}};function yM(){xn(new Nn(WC,gM,"PUBLIC")),xn(new Nn(mM,_M,"PRIVATE"))}yM();Tt(AC,V_);Tt(AC,V_,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="analytics",vM="firebase_id",EM="origin",wM=60*1e3,TM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",B_="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new tl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bn=new Ai("analytics","Analytics",IM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(n){if(!n.startsWith(B_)){const e=Bn.create("invalid-gtag-resource",{gtagURL:n});return An.warn(e.message),""}return n}function HC(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function CM(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function RM(n,e){const t=CM("firebase-js-sdk-policy",{createScriptURL:SM}),r=document.createElement("script"),i=`${B_}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function AM(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function PM(n,e,t,r,i,a){const l=r[i];try{if(l)await e[l];else{const f=(await HC(t)).find(p=>p.measurementId===i);f&&await e[f.appId]}}catch(h){An.error(h)}n("config",i,a)}async function kM(n,e,t,r,i){try{let a=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const h=await HC(t);for(const f of l){const p=h.find(v=>v.measurementId===f),y=p&&e[p.appId];if(y)a.push(y);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",r,i||{})}catch(a){An.error(a)}}function NM(n,e,t,r){async function i(a,...l){try{if(a==="event"){const[h,f]=l;await kM(n,e,t,h,f)}else if(a==="config"){const[h,f]=l;await PM(n,e,t,r,h,f)}else if(a==="consent"){const[h,f]=l;n("consent",h,f)}else if(a==="get"){const[h,f,p]=l;n("get",h,f,p)}else if(a==="set"){const[h]=l;n("set",h)}else n(a,...l)}catch(h){An.error(h)}}return i}function xM(n,e,t,r,i){let a=function(...l){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=NM(a,n,e,t),{gtagCore:a,wrappedGtag:window[i]}}function bM(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(B_)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=30,DM=1e3;class LM{constructor(e={},t=DM){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qC=new LM;function MM(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function VM(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:MM(r)},a=TM.replace("{app-id}",t),l=await fetch(a,i);if(l.status!==200&&l.status!==304){let h="";try{const f=await l.json();!((e=f.error)===null||e===void 0)&&e.message&&(h=f.error.message)}catch{}throw Bn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function FM(n,e=qC,t){const{appId:r,apiKey:i,measurementId:a}=n.options;if(!r)throw Bn.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw Bn.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new BM;return setTimeout(async()=>{h.abort()},wM),GC({appId:r,apiKey:i,measurementId:a},l,h,e)}async function GC(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=qC){var a;const{appId:l,measurementId:h}=n;try{await UM(r,e)}catch(f){if(h)return An.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:h};throw f}try{const f=await VM(n);return i.deleteThrottleMetadata(l),f}catch(f){const p=f;if(!jM(p)){if(i.deleteThrottleMetadata(l),h)return An.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:h};throw f}const y=Number((a=p==null?void 0:p.customData)===null||a===void 0?void 0:a.httpStatus)===503?qE(t,i.intervalMillis,OM):qE(t,i.intervalMillis),v={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return i.setThrottleMetadata(l,v),An.debug(`Calling attemptFetch again in ${y} millis`),GC(n,v,r,i)}}function UM(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(a),r(Bn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jM(n){if(!(n instanceof $n)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class BM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zM(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const a=await e,l=Object.assign(Object.assign({},r),{send_to:a});n("event",t,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $M(){if(QI())try{await YI()}catch(n){return An.warn(Bn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return An.warn(Bn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WM(n,e,t,r,i,a,l){var h;const f=FM(n);f.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&An.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>An.error(R)),e.push(f);const p=$M().then(R=>{if(R)return r.getId()}),[y,v]=await Promise.all([f,p]);bM(a)||RM(a,y.measurementId),i("js",new Date);const T=(h=l==null?void 0:l.config)!==null&&h!==void 0?h:{};return T[EM]="firebase",T.update=!0,v!=null&&(T[vM]=v),i("config",y.measurementId,T),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e){this.app=e}_delete(){return delete Au[this.app.options.appId],Promise.resolve()}}let Au={},vT=[];const ET={};let Nm="dataLayer",qM="gtag",wT,KC,TT=!1;function GM(){const n=[];if(GI()&&n.push("This is a browser extension environment."),Vk()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Bn.create("invalid-analytics-context",{errorInfo:e});An.warn(t.message)}}function KM(n,e,t){GM();const r=n.options.appId;if(!r)throw Bn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)An.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bn.create("no-api-key");if(Au[r]!=null)throw Bn.create("already-exists",{id:r});if(!TT){AM(Nm);const{wrappedGtag:a,gtagCore:l}=xM(Au,vT,ET,Nm,qM);KC=a,wT=l,TT=!0}return Au[r]=WM(n,vT,ET,e,wT,Nm,t),new HM(n)}function QM(n=nl()){n=nt(n);const e=Rr(n,Pd);return e.isInitialized()?e.getImmediate():YM(n)}function YM(n,e={}){const t=Rr(n,Pd);if(t.isInitialized()){const i=t.getImmediate();if(Hr(e,t.getOptions()))return i;throw Bn.create("already-initialized")}return t.initialize({options:e})}function JM(n,e,t,r){n=nt(n),zM(KC,Au[n.app.options.appId],e,t,r).catch(i=>An.error(i))}const IT="@firebase/analytics",ST="0.10.12";function XM(){xn(new Nn(Pd,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return KM(r,i,t)},"PUBLIC")),xn(new Nn("analytics-internal",n,"PRIVATE")),Tt(IT,ST),Tt(IT,ST,"esm2017");function n(e){try{const t=e.getProvider(Pd).getImmediate();return{logEvent:(r,i,a)=>JM(t,r,i,a)}}catch(t){throw Bn.create("interop-component-reg-failed",{reason:t})}}}XM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="firebasestorage.googleapis.com",ZM="storageBucket",eV=2*60*1e3,tV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends $n{constructor(e,t,r=0){super(xm(e),`Firebase Storage: ${t} (${xm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Yr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Kr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Kr||(Kr={}));function xm(n){return"storage/"+n}function nV(){const n="An unknown error occurred, please check the error payload for server response.";return new Yr(Kr.UNKNOWN,n)}function rV(){return new Yr(Kr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iV(){return new Yr(Kr.CANCELED,"User canceled the upload/download.")}function sV(n){return new Yr(Kr.INVALID_URL,"Invalid URL '"+n+"'.")}function oV(n){return new Yr(Kr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function CT(n){return new Yr(Kr.INVALID_ARGUMENT,n)}function YC(){return new Yr(Kr.APP_DELETED,"The Firebase app was deleted.")}function aV(n){return new Yr(Kr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=vr.makeFromUrl(e,t)}catch{return new vr(e,"")}if(r.path==="")return r;throw oV(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function a(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const l="(/(.*))?$",h=new RegExp("^gs://"+i+l,"i"),f={bucket:1,path:3};function p(oe){oe.path_=decodeURIComponent(oe.path)}const y="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",R=new RegExp(`^https?://${v}/${y}/b/${i}/o${T}`,"i"),N={bucket:1,path:3},M=t===QC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",K=new RegExp(`^https?://${M}/${i}/${k}`,"i"),Z=[{regex:h,indices:f,postModify:a},{regex:R,indices:N,postModify:p},{regex:K,indices:{bucket:1,path:2},postModify:p}];for(let oe=0;oe<Z.length;oe++){const Ee=Z[oe],we=Ee.regex.exec(e);if(we){const O=we[Ee.indices.bucket];let S=we[Ee.indices.path];S||(S=""),r=new vr(O,S),Ee.postModify(r);break}}if(r==null)throw sV(e);return r}}class lV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(n,e,t){let r=1,i=null,a=null,l=!1,h=0;function f(){return h===2}let p=!1;function y(...k){p||(p=!0,e.apply(null,k))}function v(k){i=setTimeout(()=>{i=null,n(R,f())},k)}function T(){a&&clearTimeout(a)}function R(k,...K){if(p){T();return}if(k){T(),y.call(null,k,...K);return}if(f()||l){T(),y.call(null,k,...K);return}r<64&&(r*=2);let Z;h===1?(h=2,Z=0):Z=(r+Math.random())*1e3,v(Z)}let N=!1;function M(k){N||(N=!0,T(),!p&&(i!==null?(k||(h=2),clearTimeout(i),v(0)):k||(h=1)))}return v(0),a=setTimeout(()=>{l=!0,M(!0)},t),M}function cV(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(n){return n!==void 0}function RT(n,e,t,r){if(r<e)throw CT(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw CT(`Invalid value for '${n}'. Expected ${t} or less.`)}function dV(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var kd;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(kd||(kd={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fV(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||i||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,t,r,i,a,l,h,f,p,y,v,T=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=h,this.errorCallback_=f,this.timeout_=p,this.progressCallback_=y,this.connectionFactory_=v,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,N)=>{this.resolve_=R,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new $h(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=h=>{const f=h.loaded,p=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,p)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const h=a.getErrorCode()===kd.NO_ERROR,f=a.getStatus();if(!h||fV(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===kd.ABORT;r(!1,new $h(!1,null,y));return}const p=this.successCodes_.indexOf(f)!==-1;r(!0,new $h(p,a))})},t=(r,i)=>{const a=this.resolve_,l=this.reject_,h=i.connection;if(i.wasSuccessCode)try{const f=this.callback_(h,h.getResponse());hV(f)?a(f):a()}catch(f){l(f)}else if(h!==null){const f=nV();f.serverResponse=h.getErrorText(),this.errorCallback_?l(this.errorCallback_(h,f)):l(f)}else if(i.canceled){const f=this.appDelete_?YC():iV();l(f)}else{const f=rV();l(f)}};this.canceled_?t(!1,new $h(!1,null,!0)):this.backoffId_=uV(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $h{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function mV(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function gV(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _V(n,e){e&&(n["X-Firebase-GMPID"]=e)}function yV(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function vV(n,e,t,r,i,a,l=!0){const h=dV(n.urlParams),f=n.url+h,p=Object.assign({},n.headers);return _V(p,e),mV(p,t),gV(p,a),yV(p,r),new pV(f,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EV(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function wV(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this._service=e,t instanceof vr?this._location=t:this._location=vr.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Nd(e,t)}get root(){const e=new vr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wV(this._location.path)}get storage(){return this._service}get parent(){const e=EV(this._location.path);if(e===null)return null;const t=new vr(this._location.bucket,e);return new Nd(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw aV(e)}}function AT(n,e){const t=e==null?void 0:e[ZM];return t==null?null:vr.makeFromBucketSpec(t,n)}function TV(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:zg(i,n.app.options.projectId))}class IV{constructor(e,t,r,i,a){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=a,this._bucket=null,this._host=QC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eV,this._maxUploadRetryTime=tV,this._requests=new Set,i!=null?this._bucket=vr.makeFromBucketSpec(i,this._host):this._bucket=AT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vr.makeFromBucketSpec(this._url,e):this._bucket=AT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){RT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){RT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nd(this,e)}_makeRequest(e,t,r,i,a=!0){if(this._deleted)return new lV(YC());{const l=vV(e,this._appId,r,i,t,this._firebaseVersion,a);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const PT="@firebase/storage",kT="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="storage";function SV(n=nl(),e){n=nt(n);const r=Rr(n,JC).getImmediate({identifier:e}),i=Bg("storage");return i&&CV(r,...i),r}function CV(n,e,t,r={}){TV(n,e,t,r)}function RV(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new IV(t,r,i,e,Qr)}function AV(){xn(new Nn(JC,RV,"PUBLIC").setMultipleInstances(!0)),Tt(PT,kT,""),Tt(PT,kT,"esm2017")}AV();var NT={};const xT="@firebase/database",bT="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XC="";function PV(n){XC=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),zt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Lu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kV(e)}}catch{}return new NV},lo=ZC("localStorage"),xV=ZC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new tl("@firebase/database"),bV=function(){let n=1;return function(){return n++}}(),eR=function(n){const e=qk(n),t=new $k;t.update(e);const r=t.digest();return jg.encodeByteArray(r)},fc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fc.apply(null,r):typeof r=="object"?e+=zt(r):e+=r,e+=" "}return e};let Pu=null,OT=!0;const OV=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),Fa.logLevel=Oe.VERBOSE,Pu=Fa.log.bind(Fa)},on=function(...n){if(OT===!0&&(OT=!1,Pu===null&&xV.get("logging_enabled")===!0&&OV()),Pu){const e=fc.apply(null,n);Pu(e)}},pc=function(n){return function(...e){on(n,...e)}},yg=function(...n){const e="FIREBASE INTERNAL ERROR: "+fc(...n);Fa.error(e)},Ci=function(...n){const e=`FIREBASE FATAL ERROR: ${fc(...n)}`;throw Fa.error(e),new Error(e)},Pn=function(...n){const e="FIREBASE WARNING: "+fc(...n);Fa.warn(e)},DV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},z_=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},LV=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Io="[MIN_NAME]",Ts="[MAX_NAME]",ll=function(n,e){if(n===e)return 0;if(n===Io||e===Ts)return-1;if(e===Io||n===Ts)return 1;{const t=DT(n),r=DT(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},MV=function(n,e){return n===e?0:n<e?-1:1},cu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+zt(e))},$_=function(n){if(typeof n!="object"||n===null)return zt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=zt(e[r]),t+=":",t+=$_(n[e[r]]);return t+="}",t},tR=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function bn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const nR=function(n){ne(!z_(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,a,l,h,f;n===0?(a=0,l=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=h+r,l=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(a=0,l=Math.round(n/Math.pow(2,1-r-t))));const p=[];for(f=t;f;f-=1)p.push(l%2?1:0),l=Math.floor(l/2);for(f=e;f;f-=1)p.push(a%2?1:0),a=Math.floor(a/2);p.push(i?1:0),p.reverse();const y=p.join("");let v="";for(f=0;f<64;f+=8){let T=parseInt(y.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),v=v+T}return v.toLowerCase()},VV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function UV(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const jV=new RegExp("^-?(0*)\\d{1,10}$"),BV=-2147483648,zV=2147483647,DT=function(n){if(jV.test(n)){const e=Number(n);if(e>=BV&&e<=zV)return e}return null},ul=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Pn("Exception was thrown by user callback.",t),e},Math.floor(0))}},$V=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ku=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,fn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(on("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pn(e)}}class nd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="5",rR="v",iR="s",sR="r",oR="f",aR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lR="ls",uR="p",vg="ac",cR="websocket",hR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,t,r,i,a=!1,l="",h=!1,f=!1,p=null){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=a,this.persistenceKey=l,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this.emulatorOptions=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qV(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function fR(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let r;if(e===cR)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===hR)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qV(n)&&(t.ns=n.namespace);const i=[];return bn(t,(a,l)=>{i.push(a+"="+l)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this.counters_={}}incrementCounter(e,t=1){tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Rk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm={},Om={};function H_(n){const e=n.toString();return bm[e]||(bm[e]=new GV),bm[e]}function KV(n,e){const t=n.toString();return Om[t]||(Om[t]=e()),Om[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ul(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="start",YV="close",JV="pLPCommand",XV="pRTLPCB",pR="id",mR="pw",gR="ser",ZV="cb",e2="seg",t2="ts",n2="d",r2="dframe",_R=1870,yR=30,i2=_R-yR,s2=25e3,o2=3e4;class Oa{constructor(e,t,r,i,a,l,h){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.transportSessionId=l,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pc(e),this.stats_=H_(t),this.urlFn=f=>(this.appCheckToken&&(f[vg]=this.appCheckToken),fR(t,hR,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new QV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(o2)),LV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new q_((...a)=>{const[l,h,f,p,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===LT)this.id=h,this.password=f;else if(l===YV)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...a)=>{const[l,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(l,h)},()=>{this.onClosed_()},this.urlFn);const r={};r[LT]="t",r[gR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ZV]=this.scriptTagHolder.uniqueCallbackIdentifier),r[rR]=W_,this.transportSessionId&&(r[iR]=this.transportSessionId),this.lastSessionId&&(r[lR]=this.lastSessionId),this.applicationId&&(r[uR]=this.applicationId),this.appCheckToken&&(r[vg]=this.appCheckToken),typeof location<"u"&&location.hostname&&aR.test(location.hostname)&&(r[sR]=oR);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oa.forceAllow_=!0}static forceDisallow(){Oa.forceDisallow_=!0}static isAvailable(){return Oa.forceAllow_?!0:!Oa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VV()&&!FV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=BI(t),i=tR(r,i2);for(let a=0;a<i.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[r2]="t",r[pR]=e,r[mR]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=zt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class q_{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bV(),window[JV+this.uniqueCallbackIdentifier]=e,window[XV+this.uniqueCallbackIdentifier]=t,this.myIFrame=q_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(h){on("frame writing exception"),h.stack&&on(h.stack),on(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||on("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pR]=this.myID,e[mR]=this.myPW,e[gR]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yR+r.length<=_R;){const l=this.pendingSegs.shift();r=r+"&"+e2+i+"="+l.seg+"&"+t2+i+"="+l.ts+"&"+n2+i+"="+l.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(s2)),a=()=>{clearTimeout(i),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{on("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=16384,l2=45e3;let xd=null;typeof MozWebSocket<"u"?xd=MozWebSocket:typeof WebSocket<"u"&&(xd=WebSocket);class _r{constructor(e,t,r,i,a,l,h){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pc(this.connId),this.stats_=H_(t),this.connURL=_r.connectionURL_(t,l,h,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,a){const l={};return l[rR]=W_,typeof location<"u"&&location.hostname&&aR.test(location.hostname)&&(l[sR]=oR),t&&(l[iR]=t),r&&(l[lR]=r),i&&(l[vg]=i),a&&(l[uR]=a),fR(e,cR,l)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lo.set("previous_websocket_failure",!0);try{let r;Lk(),this.mySock=new xd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_r.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xd!==null&&!_r.forceDisallow_}static previouslyFailed(){return lo.isInMemoryStorage||lo.get("previous_websocket_failure")===!0}markConnectionHealthy(){lo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Lu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=tR(t,a2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(l2))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_r.responsesRequiredToBeHealthy=2;_r.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{static get ALL_TRANSPORTS(){return[Oa,_r]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=_r&&_r.isAvailable();let r=t&&!_r.previouslyFailed();if(e.webSocketOnly&&(t||Pn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_r];else{const i=this.transports_=[];for(const a of Hu.ALL_TRANSPORTS)a&&a.isAvailable()&&i.push(a);Hu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=6e4,c2=5e3,h2=10*1024,d2=100*1024,Dm="t",MT="d",f2="s",VT="r",p2="e",FT="o",UT="a",jT="n",BT="p",m2="h";class g2{constructor(e,t,r,i,a,l,h,f,p,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=a,this.onMessage_=l,this.onReady_=h,this.onDisconnect_=f,this.onKill_=p,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pc("c:"+this.id+":"),this.transportManager_=new Hu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ku(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>d2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>h2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dm in e){const t=e[Dm];t===UT?this.upgradeIfSecondaryHealthy_():t===VT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===FT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=cu("t",e),r=cu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:BT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:UT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=cu("t",e),r=cu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=cu(Dm,e);if(MT in e){const r=e[MT];if(t===m2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===jT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===f2?this.onConnectionShutdown_(r):t===VT?this.onReset_(r):t===p2?yg("Server Error: "+r):t===FT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),W_!==r&&Pn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),ku(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(u2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ku(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(c2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:BT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let a=0;a<i.length;a++)if(i[a].callback===t&&(!r||r===i[a].context)){i.splice(a,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends ER{static getInstance(){return new bd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$g()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=32,$T=768;class Ye{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function qe(){return new Ye("")}function De(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Is(n){return n.pieces_.length-n.pieceNum_}function tt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ye(n.pieces_,e)}function wR(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function _2(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function TR(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function IR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ye(e,0)}function xt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new Ye(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function Cn(n,e){const t=De(n),r=De(e);if(t===null)return e;if(t===r)return Cn(tt(n),tt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function G_(n,e){if(Is(n)!==Is(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Er(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Is(n)>Is(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class y2{constructor(e,t){this.errorPrefix_=t,this.parts_=TR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jd(this.parts_[r]);SR(this)}}function v2(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Jd(e),SR(n)}function E2(n){const e=n.parts_.pop();n.byteLength_-=Jd(e),n.parts_.length>0&&(n.byteLength_-=1)}function SR(n){if(n.byteLength_>$T)throw new Error(n.errorPrefix_+"has a key path longer than "+$T+" bytes ("+n.byteLength_+").");if(n.parts_.length>zT)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zT+") or object contains a cycle "+so(n))}function so(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_ extends ER{static getInstance(){return new K_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=1e3,w2=60*5*1e3,WT=30*1e3,T2=1.3,I2=3e4,S2="server_kill",HT=3;class Ei extends vR{constructor(e,t,r,i,a,l,h,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=a,this.authTokenProvider_=l,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=Ei.nextPersistentConnectionId_++,this.log_=pc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hu,this.maxReconnectDelay_=w2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");K_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,a={r:i,a:e,b:t};this.log_(zt(a)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Yd,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const h=l.d;l.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,i){this.initConnection_();const a=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+a),this.listens.has(l)||this.listens.set(l,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(l).has(a),"listen() called twice for same path/queryId.");const h={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(l).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const a={p:r},l="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(l,a,h=>{const f=h.d,p=h.s;Ei.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",h),p!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(p,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&tr(e,"w")){const r=ja(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Pn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=WT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Bk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const a=i.s,l=i.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const a={p:e},l="n";i&&(a.q=r,a.t=i),this.sendRequest(l,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,l=>{i&&setTimeout(()=>{i(l.s,l.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,a){this.initConnection_();const l={p:t,d:r};a!==void 0&&(l.h=a),this.outstandingPuts_.push({action:e,request:l,onComplete:i}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+zt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):yg("Unrecognized action received from server: "+zt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>I2&&(this.reconnectDelay_=hu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*T2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ei.nextConnectionId_++,a=this.lastSessionId;let l=!1,h=null;const f=function(){h?h.close():(l=!0,r())},p=function(v){ne(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(v)};this.realtime_={close:f,sendRequest:p};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,T]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);l?on("getToken() completed but was canceled"):(on("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=T&&T.token,h=new g2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,R=>{Pn(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(S2)},a))}catch(v){this.log_("Failed to get token: "+v),l||(this.repoInfo_.nodeAdmin&&Pn(v),f())}}}interrupt(e){on("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){on("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$m(this.interruptReasons_)&&(this.reconnectDelay_=hu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>$_(a)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new Ye(e).toString();let i;if(this.listens.has(r)){const a=this.listens.get(r);i=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){on("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=HT&&(this.reconnectDelay_=WT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){on("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=HT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+XC.replace(/\./g,"-")]=1,$g()?e["framework.cordova"]=1:KI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bd.getInstance().currentlyOnline();return $m(this.interruptReasons_)&&e}}Ei.nextPersistentConnectionId_=0;Ei.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Me(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Me(Io,e),i=new Me(Io,t);return this.compare(r,i)!==0}minPost(){return Me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wh;class CR extends If{static get __EMPTY_NODE(){return Wh}static set __EMPTY_NODE(e){Wh=e}compare(e,t){return ll(e.name,t.name)}isDefinedOn(e){throw Za("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Me.MIN}maxPost(){return new Me(Ts,Wh)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Me(e,Wh)}toString(){return".key"}}const fo=new CR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t,r,i,a=null){this.isReverse_=i,this.resultGenerator_=a,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=t?r(e.key,t):1,i&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??Bt.RED,this.left=i??Rn.EMPTY_NODE,this.right=a??Rn.EMPTY_NODE}copy(e,t,r,i,a){return new Bt(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return a<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Rn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0;Bt.BLACK=!1;class C2{copy(e,t,r,i,a){return this}insert(e,t,r){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rn{constructor(e,t=Rn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Hh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Hh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Hh(this.root_,null,this.comparator_,!0,e)}}Rn.EMPTY_NODE=new C2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(n,e){return ll(n.name,e.name)}function Q_(n,e){return ll(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eg;function A2(n){Eg=n}const RR=function(n){return typeof n=="number"?"number:"+nR(n):"string:"+n},AR=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tr(e,".sv"),"Priority must be a string or number.")}else ne(n===Eg||n.isEmpty(),"priority of unexpected type.");ne(n===Eg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qT;class Ut{static set __childrenNodeConstructor(e){qT=e}static get __childrenNodeConstructor(){return qT}constructor(e,t=Ut.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),AR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ut(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ut.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:De(e)===".priority"?this.priorityNode_:Ut.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ut.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=De(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||Is(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ut.__childrenNodeConstructor.EMPTY_NODE.updateChild(tt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+RR(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=nR(this.value_):e+=this.value_,this.lazyHash_=eR(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ut.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ut.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Ut.VALUE_TYPE_ORDER.indexOf(t),a=Ut.VALUE_TYPE_ORDER.indexOf(r);return ne(i>=0,"Unknown leaf type: "+t),ne(a>=0,"Unknown leaf type: "+r),i===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PR,kR;function P2(n){PR=n}function k2(n){kR=n}class N2 extends If{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),a=r.compareTo(i);return a===0?ll(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(Ts,new Ut("[PRIORITY-POST]",kR))}makePost(e,t){const r=PR(e);return new Me(t,new Ut("[PRIORITY-POST]",r))}toString(){return".priority"}}const ht=new N2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=Math.log(2);class b2{constructor(e){const t=a=>parseInt(Math.log(a)/x2,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Od=function(n,e,t,r){n.sort(e);const i=function(f,p){const y=p-f;let v,T;if(y===0)return null;if(y===1)return v=n[f],T=t?t(v):v,new Bt(T,v.node,Bt.BLACK,null,null);{const R=parseInt(y/2,10)+f,N=i(f,R),M=i(R+1,p);return v=n[R],T=t?t(v):v,new Bt(T,v.node,Bt.BLACK,N,M)}},a=function(f){let p=null,y=null,v=n.length;const T=function(N,M){const k=v-N,K=v;v-=N;const te=i(k+1,K),Z=n[k],oe=t?t(Z):Z;R(new Bt(oe,Z.node,M,null,te))},R=function(N){p?(p.left=N,p=N):(y=N,p=N)};for(let N=0;N<f.count;++N){const M=f.nextBitIsOne(),k=Math.pow(2,f.count-(N+1));M?T(k,Bt.BLACK):(T(k,Bt.BLACK),T(k,Bt.RED))}return y},l=new b2(n.length),h=a(l);return new Rn(r||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lm;const Aa={};class yi{static get Default(){return ne(Aa&&ht,"ChildrenNode.ts has not been loaded"),Lm=Lm||new yi({".priority":Aa},{".priority":ht}),Lm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ja(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rn?t:null}hasIndex(e){return tr(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==fo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const a=t.getIterator(Me.Wrap);let l=a.getNext();for(;l;)i=i||e.isDefinedOn(l.node),r.push(l),l=a.getNext();let h;i?h=Od(r,e.getCompare()):h=Aa;const f=e.toString(),p=Object.assign({},this.indexSet_);p[f]=e;const y=Object.assign({},this.indexes_);return y[f]=h,new yi(y,p)}addToIndexes(e,t){const r=ad(this.indexes_,(i,a)=>{const l=ja(this.indexSet_,a);if(ne(l,"Missing index implementation for "+a),i===Aa)if(l.isDefinedOn(e.node)){const h=[],f=t.getIterator(Me.Wrap);let p=f.getNext();for(;p;)p.name!==e.name&&h.push(p),p=f.getNext();return h.push(e),Od(h,l.getCompare())}else return Aa;else{const h=t.get(e.name);let f=i;return h&&(f=f.remove(new Me(e.name,h))),f.insert(e,e.node)}});return new yi(r,this.indexSet_)}removeFromIndexes(e,t){const r=ad(this.indexes_,i=>{if(i===Aa)return i;{const a=t.get(e.name);return a?i.remove(new Me(e.name,a)):i}});return new yi(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;class Ie{static get EMPTY_NODE(){return du||(du=new Ie(new Rn(Q_),null,yi.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&AR(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||du}updatePriority(e){return this.children_.isEmpty()?this:new Ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?du:t}}getChild(e){const t=De(e);return t===null?this:this.getImmediateChild(t).getChild(tt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Me(e,t);let i,a;t.isEmpty()?(i=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const l=i.isEmpty()?du:this.priorityNode_;return new Ie(i,l,a)}}updateChild(e,t){const r=De(e);if(r===null)return t;{ne(De(e)!==".priority"||Is(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(tt(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,a=!0;if(this.forEachChild(ht,(l,h)=>{t[l]=h.val(e),r++,a&&Ie.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):a=!1}),!e&&a&&i<2*r){const l=[];for(const h in t)l[h]=t[h];return l}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+RR(this.getPriority().val())+":"),this.forEachChild(ht,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":eR(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const a=i.getPredecessorKey(new Me(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Me(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Me.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)<0;)i.getNext(),a=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)>0;)i.getNext(),a=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mc?-1:0}withIndex(e){if(e===fo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===fo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ht),i=t.getIterator(ht);let a=r.getNext(),l=i.getNext();for(;a&&l;){if(a.name!==l.name||!a.node.equals(l.node))return!1;a=r.getNext(),l=i.getNext()}return a===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===fo?null:this.indexMap_.get(e.toString())}}Ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class O2 extends Ie{constructor(){super(new Rn(Q_),Ie.EMPTY_NODE,yi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ie.EMPTY_NODE}isEmpty(){return!1}}const mc=new O2;Object.defineProperties(Me,{MIN:{value:new Me(Io,Ie.EMPTY_NODE)},MAX:{value:new Me(Ts,mc)}});CR.__EMPTY_NODE=Ie.EMPTY_NODE;Ut.__childrenNodeConstructor=Ie;A2(mc);k2(mc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=!0;function Gt(n,e=null){if(n===null)return Ie.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ut(t,Gt(e))}if(!(n instanceof Array)&&D2){const t=[];let r=!1;if(bn(n,(l,h)=>{if(l.substring(0,1)!=="."){const f=Gt(h);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Me(l,f)))}}),t.length===0)return Ie.EMPTY_NODE;const a=Od(t,R2,l=>l.name,Q_);if(r){const l=Od(t,ht.getCompare());return new Ie(a,Gt(e),new yi({".priority":l},{".priority":ht}))}else return new Ie(a,Gt(e),yi.Default)}else{let t=Ie.EMPTY_NODE;return bn(n,(r,i)=>{if(tr(n,r)&&r.substring(0,1)!=="."){const a=Gt(i);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Gt(e))}}P2(Gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_ extends If{constructor(e){super(),this.indexPath_=e,ne(!Le(e)&&De(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),a=r.compareTo(i);return a===0?ll(e.name,t.name):a}makePost(e,t){const r=Gt(e),i=Ie.EMPTY_NODE.updateChild(this.indexPath_,r);return new Me(t,i)}maxPost(){const e=Ie.EMPTY_NODE.updateChild(this.indexPath_,mc);return new Me(Ts,e)}toString(){return TR(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2 extends If{compare(e,t){const r=e.node.compareTo(t.node);return r===0?ll(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,t){const r=Gt(e);return new Me(t,r)}toString(){return".value"}}const NR=new L2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(n){return{type:"value",snapshotNode:n}}function Ja(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function qu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Gu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function M2(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.index_=e}updateChild(e,t,r,i,a,l){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(i).equals(r.getChild(i))&&h.isEmpty()===r.isEmpty()||(l!=null&&(r.isEmpty()?e.hasChild(t)?l.trackChildChange(qu(t,h)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?l.trackChildChange(Ja(t,r)):l.trackChildChange(Gu(t,r,h))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ht,(i,a)=>{t.hasChild(i)||r.trackChildChange(qu(i,a))}),t.isLeafNode()||t.forEachChild(ht,(i,a)=>{if(e.hasChild(i)){const l=e.getImmediateChild(i);l.equals(a)||r.trackChildChange(Gu(i,a,l))}else r.trackChildChange(Ja(i,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this.indexedFilter_=new J_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ku.getStartPost_(e),this.endPost_=Ku.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,a,l){return this.matches(new Me(t,r))||(r=Ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,a,l)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Ie.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Ie.EMPTY_NODE);const a=this;return t.forEachChild(ht,(l,h)=>{a.matches(new Me(l,h))||(i=i.updateImmediateChild(l,Ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ku(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,a,l){return this.rangedFilter_.matches(new Me(t,r))||(r=Ie.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,a,l):this.fullLimitUpdateChild_(e,t,r,a,l)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=Ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Ie.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let l=0;for(;a.hasNext()&&l<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))i=i.updateImmediateChild(h.name,h.node),l++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Ie.EMPTY_NODE);let a;this.reverse_?a=i.getReverseIterator(this.index_):a=i.getIterator(this.index_);let l=0;for(;a.hasNext();){const h=a.getNext();l<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?l++:i=i.updateImmediateChild(h.name,Ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,a){let l;if(this.reverse_){const v=this.index_.getCompare();l=(T,R)=>v(R,T)}else l=this.index_.getCompare();const h=e;ne(h.numChildren()===this.limit_,"");const f=new Me(t,r),p=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(h.hasChild(t)){const v=h.getImmediateChild(t);let T=i.getChildAfterChild(this.index_,p,this.reverse_);for(;T!=null&&(T.name===t||h.hasChild(T.name));)T=i.getChildAfterChild(this.index_,T,this.reverse_);const R=T==null?1:l(T,f);if(y&&!r.isEmpty()&&R>=0)return a!=null&&a.trackChildChange(Gu(t,r,v)),h.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(qu(t,v));const M=h.updateImmediateChild(t,Ie.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(Ja(T.name,T.node)),M.updateImmediateChild(T.name,T.node)):M}}else return r.isEmpty()?e:y&&l(p,f)>=0?(a!=null&&(a.trackChildChange(qu(p.name,p.node)),a.trackChildChange(Ja(t,r))),h.updateImmediateChild(t,r).updateImmediateChild(p.name,Ie.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Io}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new X_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function F2(n){return n.loadsAllData()?new J_(n.getIndex()):n.hasLimit()?new V2(n):new Ku(n)}function U2(n,e){const t=n.copy();return t.index_=e,t}function GT(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ht?t="$priority":n.index_===NR?t="$value":n.index_===fo?t="$key":(ne(n.index_ instanceof Y_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=zt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=zt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+zt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=zt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+zt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function KT(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ht&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends vR{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=pc("p:rest:"),this.listens_={}}listen(e,t,r,i){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const l=Dd.getListenId_(e,r),h={};this.listens_[l]=h;const f=GT(e._queryParams);this.restRequest_(a+".json",f,(p,y)=>{let v=y;if(p===404&&(v=null,p=null),p===null&&this.onDataUpdate_(a,v,!1,r),ja(this.listens_,l)===h){let T;p?p===401?T="permission_denied":T="rest_error:"+p:T="ok",i(T,null)}})}unlisten(e,t){const r=Dd.getListenId_(e,t);delete this.listens_[r]}get(e){const t=GT(e._queryParams),r=e._path.toString(),i=new Yd;return this.restRequest_(r+".json",t,(a,l)=>{let h=l;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(r,h,!1,null),i.resolve(h)):i.reject(new Error(h))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,a])=>{i&&i.accessToken&&(t.auth=i.accessToken),a&&a.token&&(t.ac=a.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+el(t);this.log_("Sending REST request for "+l);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(r&&h.readyState===4){this.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=Lu(h.responseText)}catch{Pn("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,f)}else h.status!==401&&h.status!==404&&Pn("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(){this.rootNode_=Ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(){return{value:null,children:new Map}}function bR(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=De(e);n.children.has(r)||n.children.set(r,Ld());const i=n.children.get(r);e=tt(e),bR(i,e,t)}}function wg(n,e,t){n.value!==null?t(e,n.value):B2(n,(r,i)=>{const a=new Ye(e.toString()+"/"+r);wg(i,a,t)})}function B2(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&bn(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=10*1e3,$2=30*1e3,W2=5*60*1e3;class H2{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new z2(e);const r=QT+($2-QT)*Math.random();ku(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;bn(e,(i,a)=>{a>0&&tr(this.statsToReport_,i)&&(t[i]=a,r=!0)}),r&&this.server_.reportStats(t),ku(this.reportStats_.bind(this),Math.floor(Math.random()*2*W2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wr||(wr={}));function OR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Z_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ey(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=wr.ACK_USER_WRITE,this.source=OR()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ye(e));return new Md(qe(),t,this.revert)}}else return ne(De(this.path)===e,"operationForChild called for unrelated child."),new Md(tt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.source=e,this.path=t,this.type=wr.LISTEN_COMPLETE}operationForChild(e){return Le(this.path)?new Qu(this.source,qe()):new Qu(this.source,tt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=wr.OVERWRITE}operationForChild(e){return Le(this.path)?new So(this.source,qe(),this.snap.getImmediateChild(e)):new So(this.source,tt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=wr.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new Ye(e));return t.isEmpty()?null:t.value?new So(this.source,qe(),t.value):new Yu(this.source,qe(),t)}else return ne(De(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yu(this.source,tt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const t=De(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function G2(n,e,t,r){const i=[],a=[];return e.forEach(l=>{l.type==="child_changed"&&n.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&a.push(M2(l.childName,l.snapshotNode))}),fu(n,i,"child_removed",e,r,t),fu(n,i,"child_added",e,r,t),fu(n,i,"child_moved",a,r,t),fu(n,i,"child_changed",e,r,t),fu(n,i,"value",e,r,t),i}function fu(n,e,t,r,i,a){const l=r.filter(h=>h.type===t);l.sort((h,f)=>Q2(n,h,f)),l.forEach(h=>{const f=K2(n,h,a);i.forEach(p=>{p.respondsTo(h.type)&&e.push(p.createEvent(f,n.query_))})})}function K2(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Q2(n,e,t){if(e.childName==null||t.childName==null)throw Za("Should only compare child_ events.");const r=new Me(e.childName,e.snapshotNode),i=new Me(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n,e){return{eventCache:n,serverCache:e}}function Nu(n,e,t,r){return Sf(new Co(e,t,r),n.serverCache)}function DR(n,e,t,r){return Sf(n.eventCache,new Co(e,t,r))}function Tg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ro(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mm;const Y2=()=>(Mm||(Mm=new Rn(MV)),Mm);class st{static fromObject(e){let t=new st(null);return bn(e,(r,i)=>{t=t.set(new Ye(r),i)}),t}constructor(e,t=Y2()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:qe(),value:this.value};if(Le(e))return null;{const r=De(e),i=this.children.get(r);if(i!==null){const a=i.findRootMostMatchingPathAndValue(tt(e),t);return a!=null?{path:xt(new Ye(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=De(e),r=this.children.get(t);return r!==null?r.subtree(tt(e)):new st(null)}}set(e,t){if(Le(e))return new st(t,this.children);{const r=De(e),a=(this.children.get(r)||new st(null)).set(tt(e),t),l=this.children.insert(r,a);return new st(this.value,l)}}remove(e){if(Le(e))return this.children.isEmpty()?new st(null):new st(null,this.children);{const t=De(e),r=this.children.get(t);if(r){const i=r.remove(tt(e));let a;return i.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,i),this.value===null&&a.isEmpty()?new st(null):new st(this.value,a)}else return this}}get(e){if(Le(e))return this.value;{const t=De(e),r=this.children.get(t);return r?r.get(tt(e)):null}}setTree(e,t){if(Le(e))return t;{const r=De(e),a=(this.children.get(r)||new st(null)).setTree(tt(e),t);let l;return a.isEmpty()?l=this.children.remove(r):l=this.children.insert(r,a),new st(this.value,l)}}fold(e){return this.fold_(qe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,a)=>{r[i]=a.fold_(xt(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,qe(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(Le(e))return null;{const a=De(e),l=this.children.get(a);return l?l.findOnPath_(tt(e),xt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,qe(),t)}foreachOnPath_(e,t,r){if(Le(e))return this;{this.value&&r(t,this.value);const i=De(e),a=this.children.get(i);return a?a.foreachOnPath_(tt(e),xt(t,i),r):new st(null)}}foreach(e){this.foreach_(qe(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(xt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.writeTree_=e}static empty(){return new Sr(new st(null))}}function xu(n,e,t){if(Le(e))return new Sr(new st(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let a=r.value;const l=Cn(i,e);return a=a.updateChild(l,t),new Sr(n.writeTree_.set(i,a))}else{const i=new st(t),a=n.writeTree_.setTree(e,i);return new Sr(a)}}}function YT(n,e,t){let r=n;return bn(t,(i,a)=>{r=xu(r,xt(e,i),a)}),r}function JT(n,e){if(Le(e))return Sr.empty();{const t=n.writeTree_.setTree(e,new st(null));return new Sr(t)}}function Ig(n,e){return bo(n,e)!=null}function bo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Cn(t.path,e)):null}function XT(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ht,(r,i)=>{e.push(new Me(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Me(r,i.value))}),e}function ds(n,e){if(Le(e))return n;{const t=bo(n,e);return t!=null?new Sr(new st(t)):new Sr(n.writeTree_.subtree(e))}}function Sg(n){return n.writeTree_.isEmpty()}function Xa(n,e){return LR(qe(),n.writeTree_,e)}function LR(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,a)=>{i===".priority"?(ne(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=LR(xt(n,i),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(xt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(n,e){return UR(e,n)}function J2(n,e,t,r,i){ne(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=xu(n.visibleWrites,e,t)),n.lastWriteId=r}function X2(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Z2(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,a=!1,l=n.allWrites.length-1;for(;i&&l>=0;){const h=n.allWrites[l];h.visible&&(l>=t&&eF(h,r.path)?i=!1:Er(r.path,h.path)&&(a=!0)),l--}if(i){if(a)return tF(n),!0;if(r.snap)n.visibleWrites=JT(n.visibleWrites,r.path);else{const h=r.children;bn(h,f=>{n.visibleWrites=JT(n.visibleWrites,xt(r.path,f))})}return!0}else return!1}function eF(n,e){if(n.snap)return Er(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Er(xt(n.path,t),e))return!0;return!1}function tF(n){n.visibleWrites=MR(n.allWrites,nF,qe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function nF(n){return n.visible}function MR(n,e,t){let r=Sr.empty();for(let i=0;i<n.length;++i){const a=n[i];if(e(a)){const l=a.path;let h;if(a.snap)Er(t,l)?(h=Cn(t,l),r=xu(r,h,a.snap)):Er(l,t)&&(h=Cn(l,t),r=xu(r,qe(),a.snap.getChild(h)));else if(a.children){if(Er(t,l))h=Cn(t,l),r=YT(r,h,a.children);else if(Er(l,t))if(h=Cn(l,t),Le(h))r=YT(r,qe(),a.children);else{const f=ja(a.children,De(h));if(f){const p=f.getChild(tt(h));r=xu(r,qe(),p)}}}else throw Za("WriteRecord should have .snap or .children")}}return r}function VR(n,e,t,r,i){if(!r&&!i){const a=bo(n.visibleWrites,e);if(a!=null)return a;{const l=ds(n.visibleWrites,e);if(Sg(l))return t;if(t==null&&!Ig(l,qe()))return null;{const h=t||Ie.EMPTY_NODE;return Xa(l,h)}}}else{const a=ds(n.visibleWrites,e);if(!i&&Sg(a))return t;if(!i&&t==null&&!Ig(a,qe()))return null;{const l=function(p){return(p.visible||i)&&(!r||!~r.indexOf(p.writeId))&&(Er(p.path,e)||Er(e,p.path))},h=MR(n.allWrites,l,e),f=t||Ie.EMPTY_NODE;return Xa(h,f)}}}function rF(n,e,t){let r=Ie.EMPTY_NODE;const i=bo(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ht,(a,l)=>{r=r.updateImmediateChild(a,l)}),r;if(t){const a=ds(n.visibleWrites,e);return t.forEachChild(ht,(l,h)=>{const f=Xa(ds(a,new Ye(l)),h);r=r.updateImmediateChild(l,f)}),XT(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}else{const a=ds(n.visibleWrites,e);return XT(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}}function iF(n,e,t,r,i){ne(r||i,"Either existingEventSnap or existingServerSnap must exist");const a=xt(e,t);if(Ig(n.visibleWrites,a))return null;{const l=ds(n.visibleWrites,a);return Sg(l)?i.getChild(t):Xa(l,i.getChild(t))}}function sF(n,e,t,r){const i=xt(e,t),a=bo(n.visibleWrites,i);if(a!=null)return a;if(r.isCompleteForChild(t)){const l=ds(n.visibleWrites,i);return Xa(l,r.getNode().getImmediateChild(t))}else return null}function oF(n,e){return bo(n.visibleWrites,e)}function aF(n,e,t,r,i,a,l){let h;const f=ds(n.visibleWrites,e),p=bo(f,qe());if(p!=null)h=p;else if(t!=null)h=Xa(f,t);else return[];if(h=h.withIndex(l),!h.isEmpty()&&!h.isLeafNode()){const y=[],v=l.getCompare(),T=a?h.getReverseIteratorFrom(r,l):h.getIteratorFrom(r,l);let R=T.getNext();for(;R&&y.length<i;)v(R,r)!==0&&y.push(R),R=T.getNext();return y}else return[]}function lF(){return{visibleWrites:Sr.empty(),allWrites:[],lastWriteId:-1}}function Vd(n,e,t,r){return VR(n.writeTree,n.treePath,e,t,r)}function ny(n,e){return rF(n.writeTree,n.treePath,e)}function ZT(n,e,t,r){return iF(n.writeTree,n.treePath,e,t,r)}function Fd(n,e){return oF(n.writeTree,xt(n.treePath,e))}function uF(n,e,t,r,i,a){return aF(n.writeTree,n.treePath,e,t,r,i,a)}function ry(n,e,t){return sF(n.writeTree,n.treePath,e,t)}function FR(n,e){return UR(xt(n.treePath,e),n.writeTree)}function UR(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const a=i.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Gu(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,qu(r,i.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Ja(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Gu(r,e.snapshotNode,i.oldSnap));else throw Za("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const jR=new hF;class iy{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Co(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ry(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ro(this.viewCache_),a=uF(this.writes_,i,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(n){return{filter:n}}function fF(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function pF(n,e,t,r,i){const a=new cF;let l,h;if(t.type===wr.OVERWRITE){const p=t;p.source.fromUser?l=Cg(n,e,p.path,p.snap,r,i,a):(ne(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered()&&!Le(p.path),l=Ud(n,e,p.path,p.snap,r,i,h,a))}else if(t.type===wr.MERGE){const p=t;p.source.fromUser?l=gF(n,e,p.path,p.children,r,i,a):(ne(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered(),l=Rg(n,e,p.path,p.children,r,i,h,a))}else if(t.type===wr.ACK_USER_WRITE){const p=t;p.revert?l=vF(n,e,p.path,r,i,a):l=_F(n,e,p.path,p.affectedTree,r,i,a)}else if(t.type===wr.LISTEN_COMPLETE)l=yF(n,e,t.path,r,a);else throw Za("Unknown operation type: "+t.type);const f=a.getChanges();return mF(e,l,f),{viewCache:l,changes:f}}function mF(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Tg(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(xR(Tg(e)))}}function BR(n,e,t,r,i,a){const l=e.eventCache;if(Fd(r,t)!=null)return e;{let h,f;if(Le(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=Ro(e),y=p instanceof Ie?p:Ie.EMPTY_NODE,v=ny(r,y);h=n.filter.updateFullNode(e.eventCache.getNode(),v,a)}else{const p=Vd(r,Ro(e));h=n.filter.updateFullNode(e.eventCache.getNode(),p,a)}else{const p=De(t);if(p===".priority"){ne(Is(t)===1,"Can't have a priority with additional path components");const y=l.getNode();f=e.serverCache.getNode();const v=ZT(r,t,y,f);v!=null?h=n.filter.updatePriority(y,v):h=l.getNode()}else{const y=tt(t);let v;if(l.isCompleteForChild(p)){f=e.serverCache.getNode();const T=ZT(r,t,l.getNode(),f);T!=null?v=l.getNode().getImmediateChild(p).updateChild(y,T):v=l.getNode().getImmediateChild(p)}else v=ry(r,p,e.serverCache);v!=null?h=n.filter.updateChild(l.getNode(),p,v,y,i,a):h=l.getNode()}}return Nu(e,h,l.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function Ud(n,e,t,r,i,a,l,h){const f=e.serverCache;let p;const y=l?n.filter:n.filter.getIndexedFilter();if(Le(t))p=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const R=f.getNode().updateChild(t,r);p=y.updateFullNode(f.getNode(),R,null)}else{const R=De(t);if(!f.isCompleteForPath(t)&&Is(t)>1)return e;const N=tt(t),k=f.getNode().getImmediateChild(R).updateChild(N,r);R===".priority"?p=y.updatePriority(f.getNode(),k):p=y.updateChild(f.getNode(),R,k,N,jR,null)}const v=DR(e,p,f.isFullyInitialized()||Le(t),y.filtersNodes()),T=new iy(i,v,a);return BR(n,v,t,i,T,h)}function Cg(n,e,t,r,i,a,l){const h=e.eventCache;let f,p;const y=new iy(i,e,a);if(Le(t))p=n.filter.updateFullNode(e.eventCache.getNode(),r,l),f=Nu(e,p,!0,n.filter.filtersNodes());else{const v=De(t);if(v===".priority")p=n.filter.updatePriority(e.eventCache.getNode(),r),f=Nu(e,p,h.isFullyInitialized(),h.isFiltered());else{const T=tt(t),R=h.getNode().getImmediateChild(v);let N;if(Le(T))N=r;else{const M=y.getCompleteChild(v);M!=null?wR(T)===".priority"&&M.getChild(IR(T)).isEmpty()?N=M:N=M.updateChild(T,r):N=Ie.EMPTY_NODE}if(R.equals(N))f=e;else{const M=n.filter.updateChild(h.getNode(),v,N,T,y,l);f=Nu(e,M,h.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function eI(n,e){return n.eventCache.isCompleteForChild(e)}function gF(n,e,t,r,i,a,l){let h=e;return r.foreach((f,p)=>{const y=xt(t,f);eI(e,De(y))&&(h=Cg(n,h,y,p,i,a,l))}),r.foreach((f,p)=>{const y=xt(t,f);eI(e,De(y))||(h=Cg(n,h,y,p,i,a,l))}),h}function tI(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Rg(n,e,t,r,i,a,l,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,p;Le(t)?p=r:p=new st(null).setTree(t,r);const y=e.serverCache.getNode();return p.children.inorderTraversal((v,T)=>{if(y.hasChild(v)){const R=e.serverCache.getNode().getImmediateChild(v),N=tI(n,R,T);f=Ud(n,f,new Ye(v),N,i,a,l,h)}}),p.children.inorderTraversal((v,T)=>{const R=!e.serverCache.isCompleteForChild(v)&&T.value===null;if(!y.hasChild(v)&&!R){const N=e.serverCache.getNode().getImmediateChild(v),M=tI(n,N,T);f=Ud(n,f,new Ye(v),M,i,a,l,h)}}),f}function _F(n,e,t,r,i,a,l){if(Fd(i,t)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Le(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Ud(n,e,t,f.getNode().getChild(t),i,a,h,l);if(Le(t)){let p=new st(null);return f.getNode().forEachChild(fo,(y,v)=>{p=p.set(new Ye(y),v)}),Rg(n,e,t,p,i,a,h,l)}else return e}else{let p=new st(null);return r.foreach((y,v)=>{const T=xt(t,y);f.isCompleteForPath(T)&&(p=p.set(y,f.getNode().getChild(T)))}),Rg(n,e,t,p,i,a,h,l)}}function yF(n,e,t,r,i){const a=e.serverCache,l=DR(e,a.getNode(),a.isFullyInitialized()||Le(t),a.isFiltered());return BR(n,l,t,r,jR,i)}function vF(n,e,t,r,i,a){let l;if(Fd(r,t)!=null)return e;{const h=new iy(r,e,i),f=e.eventCache.getNode();let p;if(Le(t)||De(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Vd(r,Ro(e));else{const v=e.serverCache.getNode();ne(v instanceof Ie,"serverChildren would be complete if leaf node"),y=ny(r,v)}y=y,p=n.filter.updateFullNode(f,y,a)}else{const y=De(t);let v=ry(r,y,e.serverCache);v==null&&e.serverCache.isCompleteForChild(y)&&(v=f.getImmediateChild(y)),v!=null?p=n.filter.updateChild(f,y,v,tt(t),h,a):e.eventCache.getNode().hasChild(y)?p=n.filter.updateChild(f,y,Ie.EMPTY_NODE,tt(t),h,a):p=f,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=Vd(r,Ro(e)),l.isLeafNode()&&(p=n.filter.updateFullNode(p,l,a)))}return l=e.serverCache.isFullyInitialized()||Fd(r,qe())!=null,Nu(e,p,l,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new J_(r.getIndex()),a=F2(r);this.processor_=dF(a);const l=t.serverCache,h=t.eventCache,f=i.updateFullNode(Ie.EMPTY_NODE,l.getNode(),null),p=a.updateFullNode(Ie.EMPTY_NODE,h.getNode(),null),y=new Co(f,l.isFullyInitialized(),i.filtersNodes()),v=new Co(p,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=Sf(v,y),this.eventGenerator_=new q2(this.query_)}get query(){return this.query_}}function wF(n){return n.viewCache_.serverCache.getNode()}function TF(n,e){const t=Ro(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(De(e)).isEmpty())?t.getChild(e):null}function nI(n){return n.eventRegistrations_.length===0}function IF(n,e){n.eventRegistrations_.push(e)}function rI(n,e,t){const r=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(a=>{const l=a.createCancelEvent(t,i);l&&r.push(l)})}if(e){let i=[];for(let a=0;a<n.eventRegistrations_.length;++a){const l=n.eventRegistrations_[a];if(!l.matches(e))i.push(l);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function iI(n,e,t,r){e.type===wr.MERGE&&e.source.queryId!==null&&(ne(Ro(n.viewCache_),"We should always have a full cache before handling merges"),ne(Tg(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,a=pF(n.processor_,i,e,t,r);return fF(n.processor_,a.viewCache),ne(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,zR(n,a.changes,a.viewCache.eventCache.getNode(),null)}function SF(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ht,(a,l)=>{r.push(Ja(a,l))}),t.isFullyInitialized()&&r.push(xR(t.getNode())),zR(n,r,t.getNode(),e)}function zR(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return G2(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd;class CF{constructor(){this.views=new Map}}function RF(n){ne(!jd,"__referenceConstructor has already been defined"),jd=n}function AF(){return ne(jd,"Reference.ts has not been loaded"),jd}function PF(n){return n.views.size===0}function sy(n,e,t,r){const i=e.source.queryId;if(i!==null){const a=n.views.get(i);return ne(a!=null,"SyncTree gave us an op for an invalid query."),iI(a,e,t,r)}else{let a=[];for(const l of n.views.values())a=a.concat(iI(l,e,t,r));return a}}function kF(n,e,t,r,i){const a=e._queryIdentifier,l=n.views.get(a);if(!l){let h=Vd(t,i?r:null),f=!1;h?f=!0:r instanceof Ie?(h=ny(t,r),f=!1):(h=Ie.EMPTY_NODE,f=!1);const p=Sf(new Co(h,f,!1),new Co(r,i,!1));return new EF(e,p)}return l}function NF(n,e,t,r,i,a){const l=kF(n,e,r,i,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,l),IF(l,t),SF(l,t)}function xF(n,e,t,r){const i=e._queryIdentifier,a=[];let l=[];const h=Ss(n);if(i==="default")for(const[f,p]of n.views.entries())l=l.concat(rI(p,t,r)),nI(p)&&(n.views.delete(f),p.query._queryParams.loadsAllData()||a.push(p.query));else{const f=n.views.get(i);f&&(l=l.concat(rI(f,t,r)),nI(f)&&(n.views.delete(i),f.query._queryParams.loadsAllData()||a.push(f.query)))}return h&&!Ss(n)&&a.push(new(AF())(e._repo,e._path)),{removed:a,events:l}}function $R(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ua(n,e){let t=null;for(const r of n.views.values())t=t||TF(r,e);return t}function WR(n,e){if(e._queryParams.loadsAllData())return Cf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function HR(n,e){return WR(n,e)!=null}function Ss(n){return Cf(n)!=null}function Cf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bd;function bF(n){ne(!Bd,"__referenceConstructor has already been defined"),Bd=n}function OF(){return ne(Bd,"Reference.ts has not been loaded"),Bd}let DF=1;class sI{constructor(e){this.listenProvider_=e,this.syncPointTree_=new st(null),this.pendingWriteTree_=lF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qR(n,e,t,r,i){return J2(n.pendingWriteTree_,e,t,r,i),i?gc(n,new So(OR(),e,t)):[]}function uo(n,e,t=!1){const r=X2(n.pendingWriteTree_,e);if(Z2(n.pendingWriteTree_,e)){let a=new st(null);return r.snap!=null?a=a.set(qe(),!0):bn(r.children,l=>{a=a.set(new Ye(l),!0)}),gc(n,new Md(r.path,a,t))}else return[]}function Rf(n,e,t){return gc(n,new So(Z_(),e,t))}function LF(n,e,t){const r=st.fromObject(t);return gc(n,new Yu(Z_(),e,r))}function MF(n,e){return gc(n,new Qu(Z_(),e))}function VF(n,e,t){const r=ay(n,t);if(r){const i=ly(r),a=i.path,l=i.queryId,h=Cn(a,e),f=new Qu(ey(l),h);return uy(n,a,f)}else return[]}function Ag(n,e,t,r,i=!1){const a=e._path,l=n.syncPointTree_.get(a);let h=[];if(l&&(e._queryIdentifier==="default"||HR(l,e))){const f=xF(l,e,t,r);PF(l)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const p=f.removed;if(h=f.events,!i){const y=p.findIndex(T=>T._queryParams.loadsAllData())!==-1,v=n.syncPointTree_.findOnPath(a,(T,R)=>Ss(R));if(y&&!v){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const R=jF(T);for(let N=0;N<R.length;++N){const M=R[N],k=M.query,K=QR(n,M);n.listenProvider_.startListening(bu(k),zd(n,k),K.hashFn,K.onComplete)}}}!v&&p.length>0&&!r&&(y?n.listenProvider_.stopListening(bu(e),null):p.forEach(T=>{const R=n.queryToTagMap.get(Af(T));n.listenProvider_.stopListening(bu(T),R)}))}BF(n,p)}return h}function FF(n,e,t,r){const i=ay(n,r);if(i!=null){const a=ly(i),l=a.path,h=a.queryId,f=Cn(l,e),p=new So(ey(h),f,t);return uy(n,l,p)}else return[]}function UF(n,e,t,r){const i=ay(n,r);if(i){const a=ly(i),l=a.path,h=a.queryId,f=Cn(l,e),p=st.fromObject(t),y=new Yu(ey(h),f,p);return uy(n,l,y)}else return[]}function oI(n,e,t,r=!1){const i=e._path;let a=null,l=!1;n.syncPointTree_.foreachOnPath(i,(T,R)=>{const N=Cn(T,i);a=a||Ua(R,N),l=l||Ss(R)});let h=n.syncPointTree_.get(i);h?(l=l||Ss(h),a=a||Ua(h,qe())):(h=new CF,n.syncPointTree_=n.syncPointTree_.set(i,h));let f;a!=null?f=!0:(f=!1,a=Ie.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((R,N)=>{const M=Ua(N,qe());M&&(a=a.updateImmediateChild(R,M))}));const p=HR(h,e);if(!p&&!e._queryParams.loadsAllData()){const T=Af(e);ne(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const R=zF();n.queryToTagMap.set(T,R),n.tagToQueryMap.set(R,T)}const y=ty(n.pendingWriteTree_,i);let v=NF(h,e,t,y,a,f);if(!p&&!l&&!r){const T=WR(h,e);v=v.concat($F(n,e,T))}return v}function oy(n,e,t){const i=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(l,h)=>{const f=Cn(l,e),p=Ua(h,f);if(p)return p});return VR(i,e,a,t,!0)}function gc(n,e){return GR(e,n.syncPointTree_,null,ty(n.pendingWriteTree_,qe()))}function GR(n,e,t,r){if(Le(n.path))return KR(n,e,t,r);{const i=e.get(qe());t==null&&i!=null&&(t=Ua(i,qe()));let a=[];const l=De(n.path),h=n.operationForChild(l),f=e.children.get(l);if(f&&h){const p=t?t.getImmediateChild(l):null,y=FR(r,l);a=a.concat(GR(h,f,p,y))}return i&&(a=a.concat(sy(i,n,r,t))),a}}function KR(n,e,t,r){const i=e.get(qe());t==null&&i!=null&&(t=Ua(i,qe()));let a=[];return e.children.inorderTraversal((l,h)=>{const f=t?t.getImmediateChild(l):null,p=FR(r,l),y=n.operationForChild(l);y&&(a=a.concat(KR(y,h,f,p)))}),i&&(a=a.concat(sy(i,n,r,t))),a}function QR(n,e){const t=e.query,r=zd(n,t);return{hashFn:()=>(wF(e)||Ie.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?VF(n,t._path,r):MF(n,t._path);{const a=UV(i,t);return Ag(n,t,null,a)}}}}function zd(n,e){const t=Af(e);return n.queryToTagMap.get(t)}function Af(n){return n._path.toString()+"$"+n._queryIdentifier}function ay(n,e){return n.tagToQueryMap.get(e)}function ly(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ye(n.substr(0,e))}}function uy(n,e,t){const r=n.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const i=ty(n.pendingWriteTree_,e);return sy(r,t,i,null)}function jF(n){return n.fold((e,t,r)=>{if(t&&Ss(t))return[Cf(t)];{let i=[];return t&&(i=$R(t)),bn(r,(a,l)=>{i=i.concat(l)}),i}})}function bu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(OF())(n._repo,n._path):n}function BF(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=Af(r),a=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(a)}}}function zF(){return DF++}function $F(n,e,t){const r=e._path,i=zd(n,e),a=QR(n,t),l=n.listenProvider_.startListening(bu(e),i,a.hashFn,a.onComplete),h=n.syncPointTree_.subtree(r);if(i)ne(!Ss(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((p,y,v)=>{if(!Le(p)&&y&&Ss(y))return[Cf(y).query];{let T=[];return y&&(T=T.concat($R(y).map(R=>R.query))),bn(v,(R,N)=>{T=T.concat(N)}),T}});for(let p=0;p<f.length;++p){const y=f[p];n.listenProvider_.stopListening(bu(y),zd(n,y))}}return l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new cy(t)}node(){return this.node_}}class hy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=xt(this.path_,e);return new hy(this.syncTree_,t)}node(){return oy(this.syncTree_,this.path_)}}const WF=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},aI=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return HF(n[".sv"],e,t);if(typeof n[".sv"]=="object")return qF(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},HF=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},qF=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const i=e.node();if(ne(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const l=i.getValue();return typeof l!="number"?r:l+r},GF=function(n,e,t,r){return dy(e,new hy(t,n),r)},YR=function(n,e,t){return dy(n,new cy(e),t)};function dy(n,e,t){const r=n.getPriority().val(),i=aI(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const l=n,h=aI(l.getValue(),e,t);return h!==l.getValue()||i!==l.getPriority().val()?new Ut(h,Gt(i)):n}else{const l=n;return a=l,i!==l.getPriority().val()&&(a=a.updatePriority(new Ut(i))),l.forEachChild(ht,(h,f)=>{const p=dy(f,e.getImmediateChild(h),t);p!==f&&(a=a.updateImmediateChild(h,p))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function py(n,e){let t=e instanceof Ye?e:new Ye(e),r=n,i=De(t);for(;i!==null;){const a=ja(r.node.children,i)||{children:{},childCount:0};r=new fy(i,r,a),t=tt(t),i=De(t)}return r}function cl(n){return n.node.value}function JR(n,e){n.node.value=e,Pg(n)}function XR(n){return n.node.childCount>0}function KF(n){return cl(n)===void 0&&!XR(n)}function Pf(n,e){bn(n.node.children,(t,r)=>{e(new fy(t,n,r))})}function ZR(n,e,t,r){t&&e(n),Pf(n,i=>{ZR(i,e,!0)})}function QF(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _c(n){return new Ye(n.parent===null?n.name:_c(n.parent)+"/"+n.name)}function Pg(n){n.parent!==null&&YF(n.parent,n.name,n)}function YF(n,e,t){const r=KF(t),i=tr(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,Pg(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Pg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JF=/[\[\].#$\/\u0000-\u001F\u007F]/,XF=/[\[\].#$\u0000-\u001F\u007F]/,Vm=10*1024*1024,eA=function(n){return typeof n=="string"&&n.length!==0&&!JF.test(n)},tA=function(n){return typeof n=="string"&&n.length!==0&&!XF.test(n)},ZF=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tA(n)},lI=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!z_(n)||n&&typeof n=="object"&&tr(n,".sv")},nA=function(n,e,t,r){r&&e===void 0||my(Wg(n,"value"),e,t)},my=function(n,e,t){const r=t instanceof Ye?new y2(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+so(r));if(typeof e=="function")throw new Error(n+"contains a function "+so(r)+" with contents = "+e.toString());if(z_(e))throw new Error(n+"contains "+e.toString()+" "+so(r));if(typeof e=="string"&&e.length>Vm/3&&Jd(e)>Vm)throw new Error(n+"contains a string greater than "+Vm+" utf8 bytes "+so(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,a=!1;if(bn(e,(l,h)=>{if(l===".value")i=!0;else if(l!==".priority"&&l!==".sv"&&(a=!0,!eA(l)))throw new Error(n+" contains an invalid key ("+l+") "+so(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);v2(r,l),my(n,h,r),E2(r)}),i&&a)throw new Error(n+' contains ".value" child '+so(r)+" in addition to actual children.")}},gy=function(n,e,t,r){if(!tA(t))throw new Error(Wg(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eU=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gy(n,e,t)},rA=function(n,e){if(De(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},tU=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!eA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ZF(t))throw new Error(Wg(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _y(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],a=i.getPath();t!==null&&!G_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(i)}t&&n.eventLists_.push(t)}function iA(n,e,t){_y(n,t),sA(n,r=>G_(r,e))}function Ri(n,e,t){_y(n,t),sA(n,r=>Er(r,e)||Er(e,r))}function sA(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const a=i.path;e(a)?(rU(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function rU(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Pu&&on("event: "+t.toString()),ul(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU="repo_interrupt",sU=25;class oU{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ld(),this.transactionQueueTree_=new fy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aU(n,e,t){if(n.stats_=H_(n.repoInfo_),n.forceRestClient_||$V())n.server_=new Dd(n.repoInfo_,(r,i,a,l)=>{uI(n,r,i,a,l)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>cI(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{zt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Ei(n.repoInfo_,e,(r,i,a,l)=>{uI(n,r,i,a,l)},r=>{cI(n,r)},r=>{lU(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=KV(n.repoInfo_,()=>new H2(n.stats_,n.server_)),n.infoData_=new j2,n.infoSyncTree_=new sI({startListening:(r,i,a,l)=>{let h=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(h=Rf(n.infoSyncTree_,r._path,f),setTimeout(()=>{l("ok")},0)),h},stopListening:()=>{}}),vy(n,"connected",!1),n.serverSyncTree_=new sI({startListening:(r,i,a,l)=>(n.server_.listen(r,a,i,(h,f)=>{const p=l(h,f);Ri(n.eventQueue_,r._path,p)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function oA(n){const t=n.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function yy(n){return WF({timestamp:oA(n)})}function uI(n,e,t,r,i){n.dataUpdateCount++;const a=new Ye(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let l=[];if(i)if(r){const f=ad(t,p=>Gt(p));l=UF(n.serverSyncTree_,a,f,i)}else{const f=Gt(t);l=FF(n.serverSyncTree_,a,f,i)}else if(r){const f=ad(t,p=>Gt(p));l=LF(n.serverSyncTree_,a,f)}else{const f=Gt(t);l=Rf(n.serverSyncTree_,a,f)}let h=a;l.length>0&&(h=kf(n,a)),Ri(n.eventQueue_,h,l)}function cI(n,e){vy(n,"connected",e),e===!1&&cU(n)}function lU(n,e){bn(e,(t,r)=>{vy(n,t,r)})}function vy(n,e,t){const r=new Ye("/.info/"+e),i=Gt(t);n.infoData_.updateSnapshot(r,i);const a=Rf(n.infoSyncTree_,r,i);Ri(n.eventQueue_,r,a)}function aA(n){return n.nextWriteId_++}function uU(n,e,t,r,i){Ey(n,"set",{path:e.toString(),value:t,priority:r});const a=yy(n),l=Gt(t,r),h=oy(n.serverSyncTree_,e),f=YR(l,h,a),p=aA(n),y=qR(n.serverSyncTree_,e,f,p,!0);_y(n.eventQueue_,y),n.server_.put(e.toString(),l.val(!0),(T,R)=>{const N=T==="ok";N||Pn("set at "+e+" failed: "+T);const M=uo(n.serverSyncTree_,p,!N);Ri(n.eventQueue_,e,M),pU(n,i,T,R)});const v=dA(n,e);kf(n,v),Ri(n.eventQueue_,v,[])}function cU(n){Ey(n,"onDisconnectEvents");const e=yy(n),t=Ld();wg(n.onDisconnect_,qe(),(i,a)=>{const l=GF(i,a,n.serverSyncTree_,e);bR(t,i,l)});let r=[];wg(t,qe(),(i,a)=>{r=r.concat(Rf(n.serverSyncTree_,i,a));const l=dA(n,i);kf(n,l)}),n.onDisconnect_=Ld(),Ri(n.eventQueue_,qe(),r)}function hU(n,e,t){let r;De(e._path)===".info"?r=oI(n.infoSyncTree_,e,t):r=oI(n.serverSyncTree_,e,t),iA(n.eventQueue_,e._path,r)}function dU(n,e,t){let r;De(e._path)===".info"?r=Ag(n.infoSyncTree_,e,t):r=Ag(n.serverSyncTree_,e,t),iA(n.eventQueue_,e._path,r)}function fU(n){n.persistentConnection_&&n.persistentConnection_.interrupt(iU)}function Ey(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),on(t,...e)}function pU(n,e,t,r){e&&ul(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let a=i;r&&(a+=": "+r);const l=new Error(a);l.code=i,e(l)}})}function lA(n,e,t){return oy(n.serverSyncTree_,e,t)||Ie.EMPTY_NODE}function wy(n,e=n.transactionQueueTree_){if(e||Nf(n,e),cl(e)){const t=cA(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&mU(n,_c(e),t)}else XR(e)&&Pf(e,t=>{wy(n,t)})}function mU(n,e,t){const r=t.map(p=>p.currentWriteId),i=lA(n,e,r);let a=i;const l=i.hash();for(let p=0;p<t.length;p++){const y=t[p];ne(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const v=Cn(e,y.path);a=a.updateChild(v,y.currentOutputSnapshotRaw)}const h=a.val(!0),f=e;n.server_.put(f.toString(),h,p=>{Ey(n,"transaction put response",{path:f.toString(),status:p});let y=[];if(p==="ok"){const v=[];for(let T=0;T<t.length;T++)t[T].status=2,y=y.concat(uo(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&v.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();Nf(n,py(n.transactionQueueTree_,e)),wy(n,n.transactionQueueTree_),Ri(n.eventQueue_,e,y);for(let T=0;T<v.length;T++)ul(v[T])}else{if(p==="datastale")for(let v=0;v<t.length;v++)t[v].status===3?t[v].status=4:t[v].status=0;else{Pn("transaction at "+f.toString()+" failed: "+p);for(let v=0;v<t.length;v++)t[v].status=4,t[v].abortReason=p}kf(n,e)}},l)}function kf(n,e){const t=uA(n,e),r=_c(t),i=cA(n,t);return gU(n,i,r),r}function gU(n,e,t){if(e.length===0)return;const r=[];let i=[];const l=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],p=Cn(t,f.path);let y=!1,v;if(ne(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,v=f.abortReason,i=i.concat(uo(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=sU)y=!0,v="maxretry",i=i.concat(uo(n.serverSyncTree_,f.currentWriteId,!0));else{const T=lA(n,f.path,l);f.currentInputSnapshot=T;const R=e[h].update(T.val());if(R!==void 0){my("transaction failed: Data returned ",R,f.path);let N=Gt(R);typeof R=="object"&&R!=null&&tr(R,".priority")||(N=N.updatePriority(T.getPriority()));const k=f.currentWriteId,K=yy(n),te=YR(N,T,K);f.currentOutputSnapshotRaw=N,f.currentOutputSnapshotResolved=te,f.currentWriteId=aA(n),l.splice(l.indexOf(k),1),i=i.concat(qR(n.serverSyncTree_,f.path,te,f.currentWriteId,f.applyLocally)),i=i.concat(uo(n.serverSyncTree_,k,!0))}else y=!0,v="nodata",i=i.concat(uo(n.serverSyncTree_,f.currentWriteId,!0))}Ri(n.eventQueue_,t,i),i=[],y&&(e[h].status=2,function(T){setTimeout(T,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(v==="nodata"?r.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):r.push(()=>e[h].onComplete(new Error(v),!1,null))))}Nf(n,n.transactionQueueTree_);for(let h=0;h<r.length;h++)ul(r[h]);wy(n,n.transactionQueueTree_)}function uA(n,e){let t,r=n.transactionQueueTree_;for(t=De(e);t!==null&&cl(r)===void 0;)r=py(r,t),e=tt(e),t=De(e);return r}function cA(n,e){const t=[];return hA(n,e,t),t.sort((r,i)=>r.order-i.order),t}function hA(n,e,t){const r=cl(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);Pf(e,i=>{hA(n,i,t)})}function Nf(n,e){const t=cl(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,JR(e,t.length>0?t:void 0)}Pf(e,r=>{Nf(n,r)})}function dA(n,e){const t=_c(uA(n,e)),r=py(n.transactionQueueTree_,e);return QF(r,i=>{Fm(n,i)}),Fm(n,r),ZR(r,i=>{Fm(n,i)}),t}function Fm(n,e){const t=cl(e);if(t){const r=[];let i=[],a=-1;for(let l=0;l<t.length;l++)t[l].status===3||(t[l].status===1?(ne(a===l-1,"All SENT items should be at beginning of queue."),a=l,t[l].status=3,t[l].abortReason="set"):(ne(t[l].status===0,"Unexpected transaction status in abort"),t[l].unwatcher(),i=i.concat(uo(n.serverSyncTree_,t[l].currentWriteId,!0)),t[l].onComplete&&r.push(t[l].onComplete.bind(null,new Error("set"),!1,null))));a===-1?JR(e,void 0):t.length=a+1,Ri(n.eventQueue_,_c(e),i);for(let l=0;l<r.length;l++)ul(r[l])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _U(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yU(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pn(`Invalid query segment '${t}' in query '${n}'`)}return e}const hI=function(n,e){const t=vU(n),r=t.namespace;t.domain==="firebase.com"&&Ci(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Ci("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||DV();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new dR(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new Ye(t.pathString)}},vU=function(n){let e="",t="",r="",i="",a="",l=!0,h="https",f=443;if(typeof n=="string"){let p=n.indexOf("//");p>=0&&(h=n.substring(0,p-1),n=n.substring(p+2));let y=n.indexOf("/");y===-1&&(y=n.length);let v=n.indexOf("?");v===-1&&(v=n.length),e=n.substring(0,Math.min(y,v)),y<v&&(i=_U(n.substring(y,v)));const T=yU(n.substring(Math.min(n.length,v)));p=e.indexOf(":"),p>=0?(l=h==="https"||h==="wss",f=parseInt(e.substring(p+1),10)):p=e.length;const R=e.slice(0,p);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const N=e.indexOf(".");r=e.substring(0,N).toLowerCase(),t=e.substring(N+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:l,scheme:h,pathString:i,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",EU=function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let i;const a=new Array(8);for(i=7;i>=0;i--)a[i]=dI.charAt(t%64),t=Math.floor(t/64);ne(t===0,"Cannot push at time == 0");let l=a.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)l+=dI.charAt(e[i]);return ne(l.length===20,"nextPushId: Length should be 20."),l}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+zt(this.snapshot.exportVal())}}class TU{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return Le(this._path)?null:wR(this._path)}get ref(){return new ks(this._repo,this._path)}get _queryIdentifier(){const e=KT(this._queryParams),t=$_(e);return t==="{}"?"default":t}get _queryObject(){return KT(this._queryParams)}isEqual(e){if(e=nt(e),!(e instanceof xf))return!1;const t=this._repo===e._repo,r=G_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_2(this._path)}}function SU(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function CU(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===fo){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Io)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==Ts)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===ht){if(e!=null&&!lI(e)||t!=null&&!lI(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(ne(n.getIndex()instanceof Y_||n.getIndex()===NR,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class ks extends xf{constructor(e,t){super(e,t,new X_,!1)}get parent(){const e=IR(this._path);return e===null?null:new ks(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $d{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ye(e),r=Ju(this.ref,e);return new $d(this._node.getChild(t),r,ht)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new $d(i,Ju(this.ref,r),ht)))}hasChild(e){const t=new Ye(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function co(n,e){return n=nt(n),n._checkNotDeleted("ref"),e!==void 0?Ju(n._root,e):n._root}function Ju(n,e){return n=nt(n),De(n._path)===null?eU("child","path",e):gy("child","path",e),new ks(n._repo,xt(n._path,e))}function fA(n,e){n=nt(n),rA("push",n._path),nA("push",e,n._path,!0);const t=oA(n._repo),r=EU(t),i=Ju(n,r),a=Ju(n,r);let l;return e!=null?l=RU(a,e).then(()=>a):l=Promise.resolve(a),i.then=l.then.bind(l),i.catch=l.then.bind(l,void 0),i}function RU(n,e){n=nt(n),rA("set",n._path),nA("set",e,n._path,!1);const t=new Yd;return uU(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Ty{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new wU("value",this,new $d(e.snapshotNode,new ks(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new TU(this,e,t):null}matches(e){return e instanceof Ty?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AU(n,e,t,r,i){const a=new IU(t,void 0),l=new Ty(a);return hU(n._repo,n,l),()=>dU(n._repo,n,l)}function Wd(n,e,t,r){return AU(n,"value",e)}class PU{}class kU extends PU{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){SU(e,"orderByChild");const t=new Ye(this._path);if(Le(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Y_(t),i=U2(e._queryParams,r);return CU(i),new xf(e._repo,e._path,i,!0)}}function pA(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return gy("orderByChild","path",n),new kU(n)}RF(ks);bF(ks);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NU="FIREBASE_DATABASE_EMULATOR_HOST",kg={};let xU=!1;function bU(n,e,t,r){n.repoInfo_=new dR(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function OU(n,e,t,r,i){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Ci("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),on("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let l=hI(a,i),h=l.repoInfo,f;typeof process<"u"&&NT&&(f=NT[NU]),f?(a=`http://${f}?ns=${h.namespace}`,l=hI(a,i),h=l.repoInfo):l.repoInfo.secure;const p=new HV(n.name,n.options,e);tU("Invalid Firebase Database URL",l),Le(l.path)||Ci("Database URL must point to the root of a Firebase Database (not including a child path).");const y=LU(h,n,p,new WV(n,t));return new MU(y,n)}function DU(n,e){const t=kg[e];(!t||t[n.key]!==n)&&Ci(`Database ${e}(${n.repoInfo_}) has already been deleted.`),fU(n),delete t[n.key]}function LU(n,e,t,r){let i=kg[e.name];i||(i={},kg[e.name]=i);let a=i[n.toURLString()];return a&&Ci("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new oU(n,xU,t,r),i[n.toURLString()]=a,a}class MU{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ks(this._repo,qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ci("Cannot call "+e+" on a deleted database.")}}function VU(n=nl(),e){const t=Rr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Bg("database");r&&FU(t,...r)}return t}function FU(n,e,t,r={}){n=nt(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Hr(r,a.repoInfo_.emulatorOptions))return;Ci("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let l;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Ci('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new nd(nd.OWNER);else if(r.mockUserToken){const h=typeof r.mockUserToken=="string"?r.mockUserToken:zg(r.mockUserToken,n.app.options.projectId);l=new nd(h)}bU(a,i,r,l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(n){PV(Qr),xn(new Nn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return OU(r,i,a,t)},"PUBLIC").setMultipleInstances(!0)),Tt(xT,bT,n),Tt(xT,bT,"esm2017")}Ei.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ei.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};UU();const jU={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID",measurementId:void 0},hl=Gm().length?Gm()[0]:rc(jU),po=fC(hl),BU=r_(hl);SV(hl);const is=VU(hl);QM(hl);FI();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xu(){return Xu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Xu.apply(this,arguments)}var os;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(os||(os={}));const fI="popstate";function zU(n){n===void 0&&(n={});function e(r,i){let{pathname:a,search:l,hash:h}=r.location;return Ng("",{pathname:a,search:l,hash:h},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:Hd(i)}return WU(e,t,null,n)}function It(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function mA(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $U(){return Math.random().toString(36).substr(2,8)}function pI(n,e){return{usr:n.state,key:n.key,idx:e}}function Ng(n,e,t,r){return t===void 0&&(t=null),Xu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?dl(e):e,{state:t,key:e&&e.key||r||$U()})}function Hd(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function dl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function WU(n,e,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,h=os.Pop,f=null,p=y();p==null&&(p=0,l.replaceState(Xu({},l.state,{idx:p}),""));function y(){return(l.state||{idx:null}).idx}function v(){h=os.Pop;let k=y(),K=k==null?null:k-p;p=k,f&&f({action:h,location:M.location,delta:K})}function T(k,K){h=os.Push;let te=Ng(M.location,k,K);p=y()+1;let Z=pI(te,p),oe=M.createHref(te);try{l.pushState(Z,"",oe)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;i.location.assign(oe)}a&&f&&f({action:h,location:M.location,delta:1})}function R(k,K){h=os.Replace;let te=Ng(M.location,k,K);p=y();let Z=pI(te,p),oe=M.createHref(te);l.replaceState(Z,"",oe),a&&f&&f({action:h,location:M.location,delta:0})}function N(k){let K=i.location.origin!=="null"?i.location.origin:i.location.href,te=typeof k=="string"?k:Hd(k);return te=te.replace(/ $/,"%20"),It(K,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,K)}let M={get action(){return h},get location(){return n(i,l)},listen(k){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(fI,v),f=k,()=>{i.removeEventListener(fI,v),f=null}},createHref(k){return e(i,k)},createURL:N,encodeLocation(k){let K=N(k);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:T,replace:R,go(k){return l.go(k)}};return M}var mI;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(mI||(mI={}));function HU(n,e,t){return t===void 0&&(t="/"),qU(n,e,t)}function qU(n,e,t,r){let i=typeof e=="string"?dl(e):e,a=Iy(i.pathname||"/",t);if(a==null)return null;let l=gA(n);GU(l);let h=null;for(let f=0;h==null&&f<l.length;++f){let p=s4(a);h=n4(l[f],p)}return h}function gA(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(a,l,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};f.relativePath.startsWith("/")&&(It(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let p=fs([r,f.relativePath]),y=t.concat(f);a.children&&a.children.length>0&&(It(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),gA(a.children,e,y,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:e4(p,a.index),routesMeta:y})};return n.forEach((a,l)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))i(a,l);else for(let f of _A(a.path))i(a,l,f)}),e}function _A(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=_A(r.join("/")),h=[];return h.push(...l.map(f=>f===""?a:[a,f].join("/"))),i&&h.push(...l),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function GU(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:t4(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const KU=/^:[\w-]+$/,QU=3,YU=2,JU=1,XU=10,ZU=-2,gI=n=>n==="*";function e4(n,e){let t=n.split("/"),r=t.length;return t.some(gI)&&(r+=ZU),e&&(r+=YU),t.filter(i=>!gI(i)).reduce((i,a)=>i+(KU.test(a)?QU:a===""?JU:XU),r)}function t4(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function n4(n,e,t){let{routesMeta:r}=n,i={},a="/",l=[];for(let h=0;h<r.length;++h){let f=r[h],p=h===r.length-1,y=a==="/"?e:e.slice(a.length)||"/",v=r4({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y),T=f.route;if(!v)return null;Object.assign(i,v.params),l.push({params:i,pathname:fs([a,v.pathname]),pathnameBase:u4(fs([a,v.pathnameBase])),route:T}),v.pathnameBase!=="/"&&(a=fs([a,v.pathnameBase]))}return l}function r4(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=i4(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),h=i.slice(1);return{params:r.reduce((p,y,v)=>{let{paramName:T,isOptional:R}=y;if(T==="*"){let M=h[v]||"";l=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const N=h[v];return R&&!N?p[T]=void 0:p[T]=(N||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:l,pattern:n}}function i4(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),mA(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,h,f)=>(r.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function s4(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mA(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Iy(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function o4(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?dl(n):n;return{pathname:t?t.startsWith("/")?t:a4(t,e):e,search:c4(r),hash:h4(i)}}function a4(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Um(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l4(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function yA(n,e){let t=l4(n);return e?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function vA(n,e,t,r){r===void 0&&(r=!1);let i;typeof n=="string"?i=dl(n):(i=Xu({},n),It(!i.pathname||!i.pathname.includes("?"),Um("?","pathname","search",i)),It(!i.pathname||!i.pathname.includes("#"),Um("#","pathname","hash",i)),It(!i.search||!i.search.includes("#"),Um("#","search","hash",i)));let a=n===""||i.pathname==="",l=a?"/":i.pathname,h;if(l==null)h=t;else{let v=e.length-1;if(!r&&l.startsWith("..")){let T=l.split("/");for(;T[0]==="..";)T.shift(),v-=1;i.pathname=T.join("/")}h=v>=0?e[v]:"/"}let f=o4(i,h),p=l&&l!=="/"&&l.endsWith("/"),y=(a||l===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||y)&&(f.pathname+="/"),f}const fs=n=>n.join("/").replace(/\/\/+/g,"/"),u4=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),c4=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,h4=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function d4(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const EA=["post","put","patch","delete"];new Set(EA);const f4=["get",...EA];new Set(f4);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zu(){return Zu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Zu.apply(this,arguments)}const Sy=re.createContext(null),p4=re.createContext(null),Oo=re.createContext(null),bf=re.createContext(null),Do=re.createContext({outlet:null,matches:[],isDataRoute:!1}),wA=re.createContext(null);function m4(n,e){let{relative:t}=e===void 0?{}:e;yc()||It(!1);let{basename:r,navigator:i}=re.useContext(Oo),{hash:a,pathname:l,search:h}=IA(n,{relative:t}),f=l;return r!=="/"&&(f=l==="/"?r:fs([r,l])),i.createHref({pathname:f,search:h,hash:a})}function yc(){return re.useContext(bf)!=null}function Of(){return yc()||It(!1),re.useContext(bf).location}function TA(n){re.useContext(Oo).static||re.useLayoutEffect(n)}function Cy(){let{isDataRoute:n}=re.useContext(Do);return n?P4():g4()}function g4(){yc()||It(!1);let n=re.useContext(Sy),{basename:e,future:t,navigator:r}=re.useContext(Oo),{matches:i}=re.useContext(Do),{pathname:a}=Of(),l=JSON.stringify(yA(i,t.v7_relativeSplatPath)),h=re.useRef(!1);return TA(()=>{h.current=!0}),re.useCallback(function(p,y){if(y===void 0&&(y={}),!h.current)return;if(typeof p=="number"){r.go(p);return}let v=vA(p,JSON.parse(l),a,y.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:fs([e,v.pathname])),(y.replace?r.replace:r.push)(v,y.state,y)},[e,r,l,a,n])}function IA(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=re.useContext(Oo),{matches:i}=re.useContext(Do),{pathname:a}=Of(),l=JSON.stringify(yA(i,r.v7_relativeSplatPath));return re.useMemo(()=>vA(n,JSON.parse(l),a,t==="path"),[n,l,a,t])}function _4(n,e){return y4(n,e)}function y4(n,e,t,r){yc()||It(!1);let{navigator:i,static:a}=re.useContext(Oo),{matches:l}=re.useContext(Do),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let p=h?h.pathnameBase:"/";h&&h.route;let y=Of(),v;if(e){var T;let K=typeof e=="string"?dl(e):e;p==="/"||(T=K.pathname)!=null&&T.startsWith(p)||It(!1),v=K}else v=y;let R=v.pathname||"/",N=R;if(p!=="/"){let K=p.replace(/^\//,"").split("/");N="/"+R.replace(/^\//,"").split("/").slice(K.length).join("/")}let M=HU(n,{pathname:N}),k=I4(M&&M.map(K=>Object.assign({},K,{params:Object.assign({},f,K.params),pathname:fs([p,i.encodeLocation?i.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?p:fs([p,i.encodeLocation?i.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),l,t,r);return e&&k?re.createElement(bf.Provider,{value:{location:Zu({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:os.Pop}},k):k}function v4(){let n=A4(),e=d4(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),t?re.createElement("pre",{style:i},t):null,null)}const E4=re.createElement(v4,null);class w4 extends re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?re.createElement(Do.Provider,{value:this.props.routeContext},re.createElement(wA.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T4(n){let{routeContext:e,match:t,children:r}=n,i=re.useContext(Sy);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),re.createElement(Do.Provider,{value:e},r)}function I4(n,e,t,r){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,h=(i=t)==null?void 0:i.errors;if(h!=null){let y=l.findIndex(v=>v.route.id&&(h==null?void 0:h[v.route.id])!==void 0);y>=0||It(!1),l=l.slice(0,Math.min(l.length,y+1))}let f=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let y=0;y<l.length;y++){let v=l[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=y),v.route.id){let{loaderData:T,errors:R}=t,N=v.route.loader&&T[v.route.id]===void 0&&(!R||R[v.route.id]===void 0);if(v.route.lazy||N){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((y,v,T)=>{let R,N=!1,M=null,k=null;t&&(R=h&&v.route.id?h[v.route.id]:void 0,M=v.route.errorElement||E4,f&&(p<0&&T===0?(k4("route-fallback"),N=!0,k=null):p===T&&(N=!0,k=v.route.hydrateFallbackElement||null)));let K=e.concat(l.slice(0,T+1)),te=()=>{let Z;return R?Z=M:N?Z=k:v.route.Component?Z=re.createElement(v.route.Component,null):v.route.element?Z=v.route.element:Z=y,re.createElement(T4,{match:v,routeContext:{outlet:y,matches:K,isDataRoute:t!=null},children:Z})};return t&&(v.route.ErrorBoundary||v.route.errorElement||T===0)?re.createElement(w4,{location:t.location,revalidation:t.revalidation,component:M,error:R,children:te(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):te()},null)}var SA=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(SA||{}),CA=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(CA||{});function S4(n){let e=re.useContext(Sy);return e||It(!1),e}function C4(n){let e=re.useContext(p4);return e||It(!1),e}function R4(n){let e=re.useContext(Do);return e||It(!1),e}function RA(n){let e=R4(),t=e.matches[e.matches.length-1];return t.route.id||It(!1),t.route.id}function A4(){var n;let e=re.useContext(wA),t=C4(),r=RA();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function P4(){let{router:n}=S4(SA.UseNavigateStable),e=RA(CA.UseNavigateStable),t=re.useRef(!1);return TA(()=>{t.current=!0}),re.useCallback(function(i,a){a===void 0&&(a={}),t.current&&(typeof i=="number"?n.navigate(i):n.navigate(i,Zu({fromRouteId:e},a)))},[n,e])}const _I={};function k4(n,e,t){_I[n]||(_I[n]=!0)}function N4(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function _t(n){It(!1)}function x4(n){let{basename:e="/",children:t=null,location:r,navigationType:i=os.Pop,navigator:a,static:l=!1,future:h}=n;yc()&&It(!1);let f=e.replace(/^\/*/,"/"),p=re.useMemo(()=>({basename:f,navigator:a,static:l,future:Zu({v7_relativeSplatPath:!1},h)}),[f,h,a,l]);typeof r=="string"&&(r=dl(r));let{pathname:y="/",search:v="",hash:T="",state:R=null,key:N="default"}=r,M=re.useMemo(()=>{let k=Iy(y,f);return k==null?null:{location:{pathname:k,search:v,hash:T,state:R,key:N},navigationType:i}},[f,y,v,T,R,N,i]);return M==null?null:re.createElement(Oo.Provider,{value:p},re.createElement(bf.Provider,{children:t,value:M}))}function AA(n){let{children:e,location:t}=n;return _4(xg(e),t)}new Promise(()=>{});function xg(n,e){e===void 0&&(e=[]);let t=[];return re.Children.forEach(n,(r,i)=>{if(!re.isValidElement(r))return;let a=[...e,i];if(r.type===re.Fragment){t.push.apply(t,xg(r.props.children,a));return}r.type!==_t&&It(!1),!r.props.index||!r.props.children||It(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=xg(r.props.children,a)),t.push(l)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bg(){return bg=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},bg.apply(this,arguments)}function b4(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function O4(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function D4(n,e){return n.button===0&&(!e||e==="_self")&&!O4(n)}const L4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],M4="6";try{window.__reactRouterVersion=M4}catch{}const V4="startTransition",yI=gk[V4];function PA(n){let{basename:e,children:t,future:r,window:i}=n,a=re.useRef();a.current==null&&(a.current=zU({window:i,v5Compat:!0}));let l=a.current,[h,f]=re.useState({action:l.action,location:l.location}),{v7_startTransition:p}=r||{},y=re.useCallback(v=>{p&&yI?yI(()=>f(v)):f(v)},[f,p]);return re.useLayoutEffect(()=>l.listen(y),[l,y]),re.useEffect(()=>N4(r),[r]),re.createElement(x4,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:l,future:r})}const F4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",U4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pu=re.forwardRef(function(e,t){let{onClick:r,relative:i,reloadDocument:a,replace:l,state:h,target:f,to:p,preventScrollReset:y,viewTransition:v}=e,T=b4(e,L4),{basename:R}=re.useContext(Oo),N,M=!1;if(typeof p=="string"&&U4.test(p)&&(N=p,F4))try{let Z=new URL(window.location.href),oe=p.startsWith("//")?new URL(Z.protocol+p):new URL(p),Ee=Iy(oe.pathname,R);oe.origin===Z.origin&&Ee!=null?p=Ee+oe.search+oe.hash:M=!0}catch{}let k=m4(p,{relative:i}),K=j4(p,{replace:l,state:h,target:f,preventScrollReset:y,relative:i,viewTransition:v});function te(Z){r&&r(Z),Z.defaultPrevented||K(Z)}return re.createElement("a",bg({},T,{href:N||k,onClick:M||a?r:te,ref:t,target:f}))});var vI;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(vI||(vI={}));var EI;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(EI||(EI={}));function j4(n,e){let{target:t,replace:r,state:i,preventScrollReset:a,relative:l,viewTransition:h}=e===void 0?{}:e,f=Cy(),p=Of(),y=IA(n,{relative:l});return re.useCallback(v=>{if(D4(v,t)){v.preventDefault();let T=r!==void 0?r:Hd(p)===Hd(y);f(n,{replace:T,state:i,preventScrollReset:a,relative:l,viewTransition:h})}},[p,f,y,r,i,t,n,a,l,h])}function kA(n,e){return function(){return n.apply(e,arguments)}}const{toString:B4}=Object.prototype,{getPrototypeOf:Ry}=Object,Df=(n=>e=>{const t=B4.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ar=n=>(n=n.toLowerCase(),e=>Df(e)===n),Lf=n=>e=>typeof e===n,{isArray:fl}=Array,ec=Lf("undefined");function z4(n){return n!==null&&!ec(n)&&n.constructor!==null&&!ec(n.constructor)&&zn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const NA=Ar("ArrayBuffer");function $4(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&NA(n.buffer),e}const W4=Lf("string"),zn=Lf("function"),xA=Lf("number"),Mf=n=>n!==null&&typeof n=="object",H4=n=>n===!0||n===!1,rd=n=>{if(Df(n)!=="object")return!1;const e=Ry(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},q4=Ar("Date"),G4=Ar("File"),K4=Ar("Blob"),Q4=Ar("FileList"),Y4=n=>Mf(n)&&zn(n.pipe),J4=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||zn(n.append)&&((e=Df(n))==="formdata"||e==="object"&&zn(n.toString)&&n.toString()==="[object FormData]"))},X4=Ar("URLSearchParams"),[Z4,ej,tj,nj]=["ReadableStream","Request","Response","Headers"].map(Ar),rj=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vc(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,i;if(typeof n!="object"&&(n=[n]),fl(n))for(r=0,i=n.length;r<i;r++)e.call(null,n[r],r,n);else{const a=t?Object.getOwnPropertyNames(n):Object.keys(n),l=a.length;let h;for(r=0;r<l;r++)h=a[r],e.call(null,n[h],h,n)}}function bA(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,i;for(;r-- >0;)if(i=t[r],e===i.toLowerCase())return i;return null}const ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,OA=n=>!ec(n)&&n!==ho;function Og(){const{caseless:n}=OA(this)&&this||{},e={},t=(r,i)=>{const a=n&&bA(e,i)||i;rd(e[a])&&rd(r)?e[a]=Og(e[a],r):rd(r)?e[a]=Og({},r):fl(r)?e[a]=r.slice():e[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&vc(arguments[r],t);return e}const ij=(n,e,t,{allOwnKeys:r}={})=>(vc(e,(i,a)=>{t&&zn(i)?n[a]=kA(i,t):n[a]=i},{allOwnKeys:r}),n),sj=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),oj=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},aj=(n,e,t,r)=>{let i,a,l;const h={};if(e=e||{},n==null)return e;do{for(i=Object.getOwnPropertyNames(n),a=i.length;a-- >0;)l=i[a],(!r||r(l,n,e))&&!h[l]&&(e[l]=n[l],h[l]=!0);n=t!==!1&&Ry(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},lj=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},uj=n=>{if(!n)return null;if(fl(n))return n;let e=n.length;if(!xA(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},cj=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Ry(Uint8Array)),hj=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let i;for(;(i=r.next())&&!i.done;){const a=i.value;e.call(n,a[0],a[1])}},dj=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},fj=Ar("HTMLFormElement"),pj=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,i){return r.toUpperCase()+i}),wI=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),mj=Ar("RegExp"),DA=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};vc(t,(i,a)=>{let l;(l=e(i,a,n))!==!1&&(r[a]=l||i)}),Object.defineProperties(n,r)},gj=n=>{DA(n,(e,t)=>{if(zn(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(zn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},_j=(n,e)=>{const t={},r=i=>{i.forEach(a=>{t[a]=!0})};return fl(n)?r(n):r(String(n).split(e)),t},yj=()=>{},vj=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function Ej(n){return!!(n&&zn(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const wj=n=>{const e=new Array(10),t=(r,i)=>{if(Mf(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const a=fl(r)?[]:{};return vc(r,(l,h)=>{const f=t(l,i+1);!ec(f)&&(a[h]=f)}),e[i]=void 0,a}}return r};return t(n,0)},Tj=Ar("AsyncFunction"),Ij=n=>n&&(Mf(n)||zn(n))&&zn(n.then)&&zn(n.catch),LA=((n,e)=>n?setImmediate:e?((t,r)=>(ho.addEventListener("message",({source:i,data:a})=>{i===ho&&a===t&&r.length&&r.shift()()},!1),i=>{r.push(i),ho.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",zn(ho.postMessage)),Sj=typeof queueMicrotask<"u"?queueMicrotask.bind(ho):typeof process<"u"&&process.nextTick||LA,H={isArray:fl,isArrayBuffer:NA,isBuffer:z4,isFormData:J4,isArrayBufferView:$4,isString:W4,isNumber:xA,isBoolean:H4,isObject:Mf,isPlainObject:rd,isReadableStream:Z4,isRequest:ej,isResponse:tj,isHeaders:nj,isUndefined:ec,isDate:q4,isFile:G4,isBlob:K4,isRegExp:mj,isFunction:zn,isStream:Y4,isURLSearchParams:X4,isTypedArray:cj,isFileList:Q4,forEach:vc,merge:Og,extend:ij,trim:rj,stripBOM:sj,inherits:oj,toFlatObject:aj,kindOf:Df,kindOfTest:Ar,endsWith:lj,toArray:uj,forEachEntry:hj,matchAll:dj,isHTMLForm:fj,hasOwnProperty:wI,hasOwnProp:wI,reduceDescriptors:DA,freezeMethods:gj,toObjectSet:_j,toCamelCase:pj,noop:yj,toFiniteNumber:vj,findKey:bA,global:ho,isContextDefined:OA,isSpecCompliantForm:Ej,toJSONObject:wj,isAsyncFn:Tj,isThenable:Ij,setImmediate:LA,asap:Sj};function Pe(n,e,t,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}H.inherits(Pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const MA=Pe.prototype,VA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{VA[n]={value:n}});Object.defineProperties(Pe,VA);Object.defineProperty(MA,"isAxiosError",{value:!0});Pe.from=(n,e,t,r,i,a)=>{const l=Object.create(MA);return H.toFlatObject(n,l,function(f){return f!==Error.prototype},h=>h!=="isAxiosError"),Pe.call(l,n.message,e,t,r,i),l.cause=n,l.name=n.name,a&&Object.assign(l,a),l};const Cj=null;function Dg(n){return H.isPlainObject(n)||H.isArray(n)}function FA(n){return H.endsWith(n,"[]")?n.slice(0,-2):n}function TI(n,e,t){return n?n.concat(e).map(function(i,a){return i=FA(i),!t&&a?"["+i+"]":i}).join(t?".":""):e}function Rj(n){return H.isArray(n)&&!n.some(Dg)}const Aj=H.toFlatObject(H,{},null,function(e){return/^is[A-Z]/.test(e)});function Vf(n,e,t){if(!H.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=H.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,k){return!H.isUndefined(k[M])});const r=t.metaTokens,i=t.visitor||y,a=t.dots,l=t.indexes,f=(t.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(e);if(!H.isFunction(i))throw new TypeError("visitor must be a function");function p(N){if(N===null)return"";if(H.isDate(N))return N.toISOString();if(!f&&H.isBlob(N))throw new Pe("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(N)||H.isTypedArray(N)?f&&typeof Blob=="function"?new Blob([N]):Buffer.from(N):N}function y(N,M,k){let K=N;if(N&&!k&&typeof N=="object"){if(H.endsWith(M,"{}"))M=r?M:M.slice(0,-2),N=JSON.stringify(N);else if(H.isArray(N)&&Rj(N)||(H.isFileList(N)||H.endsWith(M,"[]"))&&(K=H.toArray(N)))return M=FA(M),K.forEach(function(Z,oe){!(H.isUndefined(Z)||Z===null)&&e.append(l===!0?TI([M],oe,a):l===null?M:M+"[]",p(Z))}),!1}return Dg(N)?!0:(e.append(TI(k,M,a),p(N)),!1)}const v=[],T=Object.assign(Aj,{defaultVisitor:y,convertValue:p,isVisitable:Dg});function R(N,M){if(!H.isUndefined(N)){if(v.indexOf(N)!==-1)throw Error("Circular reference detected in "+M.join("."));v.push(N),H.forEach(N,function(K,te){(!(H.isUndefined(K)||K===null)&&i.call(e,K,H.isString(te)?te.trim():te,M,T))===!0&&R(K,M?M.concat(te):[te])}),v.pop()}}if(!H.isObject(n))throw new TypeError("data must be an object");return R(n),e}function II(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ay(n,e){this._pairs=[],n&&Vf(n,this,e)}const UA=Ay.prototype;UA.append=function(e,t){this._pairs.push([e,t])};UA.toString=function(e){const t=e?function(r){return e.call(this,r,II)}:II;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function Pj(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function jA(n,e,t){if(!e)return n;const r=t&&t.encode||Pj;H.isFunction(t)&&(t={serialize:t});const i=t&&t.serialize;let a;if(i?a=i(e,t):a=H.isURLSearchParams(e)?e.toString():new Ay(e,t).toString(r),a){const l=n.indexOf("#");l!==-1&&(n=n.slice(0,l)),n+=(n.indexOf("?")===-1?"?":"&")+a}return n}class SI{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,function(r){r!==null&&e(r)})}}const BA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kj=typeof URLSearchParams<"u"?URLSearchParams:Ay,Nj=typeof FormData<"u"?FormData:null,xj=typeof Blob<"u"?Blob:null,bj={isBrowser:!0,classes:{URLSearchParams:kj,FormData:Nj,Blob:xj},protocols:["http","https","file","blob","url","data"]},Py=typeof window<"u"&&typeof document<"u",Lg=typeof navigator=="object"&&navigator||void 0,Oj=Py&&(!Lg||["ReactNative","NativeScript","NS"].indexOf(Lg.product)<0),Dj=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Lj=Py&&window.location.href||"http://localhost",Mj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Py,hasStandardBrowserEnv:Oj,hasStandardBrowserWebWorkerEnv:Dj,navigator:Lg,origin:Lj},Symbol.toStringTag,{value:"Module"})),an={...Mj,...bj};function Vj(n,e){return Vf(n,new an.classes.URLSearchParams,Object.assign({visitor:function(t,r,i,a){return an.isNode&&H.isBuffer(t)?(this.append(r,t.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},e))}function Fj(n){return H.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Uj(n){const e={},t=Object.keys(n);let r;const i=t.length;let a;for(r=0;r<i;r++)a=t[r],e[a]=n[a];return e}function zA(n){function e(t,r,i,a){let l=t[a++];if(l==="__proto__")return!0;const h=Number.isFinite(+l),f=a>=t.length;return l=!l&&H.isArray(i)?i.length:l,f?(H.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!h):((!i[l]||!H.isObject(i[l]))&&(i[l]=[]),e(t,r,i[l],a)&&H.isArray(i[l])&&(i[l]=Uj(i[l])),!h)}if(H.isFormData(n)&&H.isFunction(n.entries)){const t={};return H.forEachEntry(n,(r,i)=>{e(Fj(r),i,t,0)}),t}return null}function jj(n,e,t){if(H.isString(n))try{return(e||JSON.parse)(n),H.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const Ec={transitional:BA,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,a=H.isObject(e);if(a&&H.isHTMLForm(e)&&(e=new FormData(e)),H.isFormData(e))return i?JSON.stringify(zA(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let h;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vj(e,this.formSerializer).toString();if((h=H.isFileList(e))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Vf(h?{"files[]":e}:e,f&&new f,this.formSerializer)}}return a||i?(t.setContentType("application/json",!1),jj(e)):e}],transformResponse:[function(e){const t=this.transitional||Ec.transitional,r=t&&t.forcedJSONParsing,i=this.responseType==="json";if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(r&&!this.responseType||i)){const l=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(h){if(l)throw h.name==="SyntaxError"?Pe.from(h,Pe.ERR_BAD_RESPONSE,this,null,this.response):h}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:an.classes.FormData,Blob:an.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],n=>{Ec.headers[n]={}});const Bj=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zj=n=>{const e={};let t,r,i;return n&&n.split(`
`).forEach(function(l){i=l.indexOf(":"),t=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!t||e[t]&&Bj[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},CI=Symbol("internals");function mu(n){return n&&String(n).trim().toLowerCase()}function id(n){return n===!1||n==null?n:H.isArray(n)?n.map(id):String(n)}function $j(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const Wj=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function jm(n,e,t,r,i){if(H.isFunction(r))return r.call(this,e,t);if(i&&(e=t),!!H.isString(e)){if(H.isString(r))return e.indexOf(r)!==-1;if(H.isRegExp(r))return r.test(e)}}function Hj(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function qj(n,e){const t=H.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(i,a,l){return this[r].call(this,e,i,a,l)},configurable:!0})})}let kn=class{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function a(h,f,p){const y=mu(f);if(!y)throw new Error("header name must be a non-empty string");const v=H.findKey(i,y);(!v||i[v]===void 0||p===!0||p===void 0&&i[v]!==!1)&&(i[v||f]=id(h))}const l=(h,f)=>H.forEach(h,(p,y)=>a(p,y,f));if(H.isPlainObject(e)||e instanceof this.constructor)l(e,t);else if(H.isString(e)&&(e=e.trim())&&!Wj(e))l(zj(e),t);else if(H.isHeaders(e))for(const[h,f]of e.entries())a(f,h,r);else e!=null&&a(t,e,r);return this}get(e,t){if(e=mu(e),e){const r=H.findKey(this,e);if(r){const i=this[r];if(!t)return i;if(t===!0)return $j(i);if(H.isFunction(t))return t.call(this,i,r);if(H.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=mu(e),e){const r=H.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||jm(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let i=!1;function a(l){if(l=mu(l),l){const h=H.findKey(r,l);h&&(!t||jm(r,r[h],h,t))&&(delete r[h],i=!0)}}return H.isArray(e)?e.forEach(a):a(e),i}clear(e){const t=Object.keys(this);let r=t.length,i=!1;for(;r--;){const a=t[r];(!e||jm(this,this[a],a,e,!0))&&(delete this[a],i=!0)}return i}normalize(e){const t=this,r={};return H.forEach(this,(i,a)=>{const l=H.findKey(r,a);if(l){t[l]=id(i),delete t[a];return}const h=e?Hj(a):String(a).trim();h!==a&&delete t[a],t[h]=id(i),r[h]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return H.forEach(this,(r,i)=>{r!=null&&r!==!1&&(t[i]=e&&H.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[CI]=this[CI]={accessors:{}}).accessors,i=this.prototype;function a(l){const h=mu(l);r[h]||(qj(i,l),r[h]=!0)}return H.isArray(e)?e.forEach(a):a(e),this}};kn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(kn.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});H.freezeMethods(kn);function Bm(n,e){const t=this||Ec,r=e||t,i=kn.from(r.headers);let a=r.data;return H.forEach(n,function(h){a=h.call(t,a,i.normalize(),e?e.status:void 0)}),i.normalize(),a}function $A(n){return!!(n&&n.__CANCEL__)}function pl(n,e,t){Pe.call(this,n??"canceled",Pe.ERR_CANCELED,e,t),this.name="CanceledError"}H.inherits(pl,Pe,{__CANCEL__:!0});function WA(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new Pe("Request failed with status code "+t.status,[Pe.ERR_BAD_REQUEST,Pe.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Gj(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Kj(n,e){n=n||10;const t=new Array(n),r=new Array(n);let i=0,a=0,l;return e=e!==void 0?e:1e3,function(f){const p=Date.now(),y=r[a];l||(l=p),t[i]=f,r[i]=p;let v=a,T=0;for(;v!==i;)T+=t[v++],v=v%n;if(i=(i+1)%n,i===a&&(a=(a+1)%n),p-l<e)return;const R=y&&p-y;return R?Math.round(T*1e3/R):void 0}}function Qj(n,e){let t=0,r=1e3/e,i,a;const l=(p,y=Date.now())=>{t=y,i=null,a&&(clearTimeout(a),a=null),n.apply(null,p)};return[(...p)=>{const y=Date.now(),v=y-t;v>=r?l(p,y):(i=p,a||(a=setTimeout(()=>{a=null,l(i)},r-v)))},()=>i&&l(i)]}const qd=(n,e,t=3)=>{let r=0;const i=Kj(50,250);return Qj(a=>{const l=a.loaded,h=a.lengthComputable?a.total:void 0,f=l-r,p=i(f),y=l<=h;r=l;const v={loaded:l,total:h,progress:h?l/h:void 0,bytes:f,rate:p||void 0,estimated:p&&h&&y?(h-l)/p:void 0,event:a,lengthComputable:h!=null,[e?"download":"upload"]:!0};n(v)},t)},RI=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},AI=n=>(...e)=>H.asap(()=>n(...e)),Yj=an.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,an.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(an.origin),an.navigator&&/(msie|trident)/i.test(an.navigator.userAgent)):()=>!0,Jj=an.hasStandardBrowserEnv?{write(n,e,t,r,i,a){const l=[n+"="+encodeURIComponent(e)];H.isNumber(t)&&l.push("expires="+new Date(t).toGMTString()),H.isString(r)&&l.push("path="+r),H.isString(i)&&l.push("domain="+i),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Xj(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Zj(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function HA(n,e,t){let r=!Xj(e);return n&&(r||t==!1)?Zj(n,e):e}const PI=n=>n instanceof kn?{...n}:n;function Ao(n,e){e=e||{};const t={};function r(p,y,v,T){return H.isPlainObject(p)&&H.isPlainObject(y)?H.merge.call({caseless:T},p,y):H.isPlainObject(y)?H.merge({},y):H.isArray(y)?y.slice():y}function i(p,y,v,T){if(H.isUndefined(y)){if(!H.isUndefined(p))return r(void 0,p,v,T)}else return r(p,y,v,T)}function a(p,y){if(!H.isUndefined(y))return r(void 0,y)}function l(p,y){if(H.isUndefined(y)){if(!H.isUndefined(p))return r(void 0,p)}else return r(void 0,y)}function h(p,y,v){if(v in e)return r(p,y);if(v in n)return r(void 0,p)}const f={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:h,headers:(p,y,v)=>i(PI(p),PI(y),v,!0)};return H.forEach(Object.keys(Object.assign({},n,e)),function(y){const v=f[y]||i,T=v(n[y],e[y],y);H.isUndefined(T)&&v!==h||(t[y]=T)}),t}const qA=n=>{const e=Ao({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:l,auth:h}=e;e.headers=l=kn.from(l),e.url=jA(HA(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),h&&l.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):"")));let f;if(H.isFormData(t)){if(an.hasStandardBrowserEnv||an.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((f=l.getContentType())!==!1){const[p,...y]=f?f.split(";").map(v=>v.trim()).filter(Boolean):[];l.setContentType([p||"multipart/form-data",...y].join("; "))}}if(an.hasStandardBrowserEnv&&(r&&H.isFunction(r)&&(r=r(e)),r||r!==!1&&Yj(e.url))){const p=i&&a&&Jj.read(a);p&&l.set(i,p)}return e},eB=typeof XMLHttpRequest<"u",tB=eB&&function(n){return new Promise(function(t,r){const i=qA(n);let a=i.data;const l=kn.from(i.headers).normalize();let{responseType:h,onUploadProgress:f,onDownloadProgress:p}=i,y,v,T,R,N;function M(){R&&R(),N&&N(),i.cancelToken&&i.cancelToken.unsubscribe(y),i.signal&&i.signal.removeEventListener("abort",y)}let k=new XMLHttpRequest;k.open(i.method.toUpperCase(),i.url,!0),k.timeout=i.timeout;function K(){if(!k)return;const Z=kn.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),Ee={data:!h||h==="text"||h==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:Z,config:n,request:k};WA(function(O){t(O),M()},function(O){r(O),M()},Ee),k=null}"onloadend"in k?k.onloadend=K:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(K)},k.onabort=function(){k&&(r(new Pe("Request aborted",Pe.ECONNABORTED,n,k)),k=null)},k.onerror=function(){r(new Pe("Network Error",Pe.ERR_NETWORK,n,k)),k=null},k.ontimeout=function(){let oe=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const Ee=i.transitional||BA;i.timeoutErrorMessage&&(oe=i.timeoutErrorMessage),r(new Pe(oe,Ee.clarifyTimeoutError?Pe.ETIMEDOUT:Pe.ECONNABORTED,n,k)),k=null},a===void 0&&l.setContentType(null),"setRequestHeader"in k&&H.forEach(l.toJSON(),function(oe,Ee){k.setRequestHeader(Ee,oe)}),H.isUndefined(i.withCredentials)||(k.withCredentials=!!i.withCredentials),h&&h!=="json"&&(k.responseType=i.responseType),p&&([T,N]=qd(p,!0),k.addEventListener("progress",T)),f&&k.upload&&([v,R]=qd(f),k.upload.addEventListener("progress",v),k.upload.addEventListener("loadend",R)),(i.cancelToken||i.signal)&&(y=Z=>{k&&(r(!Z||Z.type?new pl(null,n,k):Z),k.abort(),k=null)},i.cancelToken&&i.cancelToken.subscribe(y),i.signal&&(i.signal.aborted?y():i.signal.addEventListener("abort",y)));const te=Gj(i.url);if(te&&an.protocols.indexOf(te)===-1){r(new Pe("Unsupported protocol "+te+":",Pe.ERR_BAD_REQUEST,n));return}k.send(a||null)})},nB=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let r=new AbortController,i;const a=function(p){if(!i){i=!0,h();const y=p instanceof Error?p:this.reason;r.abort(y instanceof Pe?y:new pl(y instanceof Error?y.message:y))}};let l=e&&setTimeout(()=>{l=null,a(new Pe(`timeout ${e} of ms exceeded`,Pe.ETIMEDOUT))},e);const h=()=>{n&&(l&&clearTimeout(l),l=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(a):p.removeEventListener("abort",a)}),n=null)};n.forEach(p=>p.addEventListener("abort",a));const{signal:f}=r;return f.unsubscribe=()=>H.asap(h),f}},rB=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let r=0,i;for(;r<t;)i=r+e,yield n.slice(r,i),r=i},iB=async function*(n,e){for await(const t of sB(n))yield*rB(t,e)},sB=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},kI=(n,e,t,r)=>{const i=iB(n,e);let a=0,l,h=f=>{l||(l=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:p,value:y}=await i.next();if(p){h(),f.close();return}let v=y.byteLength;if(t){let T=a+=v;t(T)}f.enqueue(new Uint8Array(y))}catch(p){throw h(p),p}},cancel(f){return h(f),i.return()}},{highWaterMark:2})},Ff=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",GA=Ff&&typeof ReadableStream=="function",oB=Ff&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),KA=(n,...e)=>{try{return!!n(...e)}catch{return!1}},aB=GA&&KA(()=>{let n=!1;const e=new Request(an.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),NI=64*1024,Mg=GA&&KA(()=>H.isReadableStream(new Response("").body)),Gd={stream:Mg&&(n=>n.body)};Ff&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Gd[e]&&(Gd[e]=H.isFunction(n[e])?t=>t[e]():(t,r)=>{throw new Pe(`Response type '${e}' is not supported`,Pe.ERR_NOT_SUPPORT,r)})})})(new Response);const lB=async n=>{if(n==null)return 0;if(H.isBlob(n))return n.size;if(H.isSpecCompliantForm(n))return(await new Request(an.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(H.isArrayBufferView(n)||H.isArrayBuffer(n))return n.byteLength;if(H.isURLSearchParams(n)&&(n=n+""),H.isString(n))return(await oB(n)).byteLength},uB=async(n,e)=>{const t=H.toFiniteNumber(n.getContentLength());return t??lB(e)},cB=Ff&&(async n=>{let{url:e,method:t,data:r,signal:i,cancelToken:a,timeout:l,onDownloadProgress:h,onUploadProgress:f,responseType:p,headers:y,withCredentials:v="same-origin",fetchOptions:T}=qA(n);p=p?(p+"").toLowerCase():"text";let R=nB([i,a&&a.toAbortSignal()],l),N;const M=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let k;try{if(f&&aB&&t!=="get"&&t!=="head"&&(k=await uB(y,r))!==0){let Ee=new Request(e,{method:"POST",body:r,duplex:"half"}),we;if(H.isFormData(r)&&(we=Ee.headers.get("content-type"))&&y.setContentType(we),Ee.body){const[O,S]=RI(k,qd(AI(f)));r=kI(Ee.body,NI,O,S)}}H.isString(v)||(v=v?"include":"omit");const K="credentials"in Request.prototype;N=new Request(e,{...T,signal:R,method:t.toUpperCase(),headers:y.normalize().toJSON(),body:r,duplex:"half",credentials:K?v:void 0});let te=await fetch(N);const Z=Mg&&(p==="stream"||p==="response");if(Mg&&(h||Z&&M)){const Ee={};["status","statusText","headers"].forEach(P=>{Ee[P]=te[P]});const we=H.toFiniteNumber(te.headers.get("content-length")),[O,S]=h&&RI(we,qd(AI(h),!0))||[];te=new Response(kI(te.body,NI,O,()=>{S&&S(),M&&M()}),Ee)}p=p||"text";let oe=await Gd[H.findKey(Gd,p)||"text"](te,n);return!Z&&M&&M(),await new Promise((Ee,we)=>{WA(Ee,we,{data:oe,headers:kn.from(te.headers),status:te.status,statusText:te.statusText,config:n,request:N})})}catch(K){throw M&&M(),K&&K.name==="TypeError"&&/fetch/i.test(K.message)?Object.assign(new Pe("Network Error",Pe.ERR_NETWORK,n,N),{cause:K.cause||K}):Pe.from(K,K&&K.code,n,N)}}),Vg={http:Cj,xhr:tB,fetch:cB};H.forEach(Vg,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const xI=n=>`- ${n}`,hB=n=>H.isFunction(n)||n===null||n===!1,QA={getAdapter:n=>{n=H.isArray(n)?n:[n];const{length:e}=n;let t,r;const i={};for(let a=0;a<e;a++){t=n[a];let l;if(r=t,!hB(t)&&(r=Vg[(l=String(t)).toLowerCase()],r===void 0))throw new Pe(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+a]=r}if(!r){const a=Object.entries(i).map(([h,f])=>`adapter ${h} `+(f===!1?"is not supported by the environment":"is not available in the build"));let l=e?a.length>1?`since :
`+a.map(xI).join(`
`):" "+xI(a[0]):"as no adapter specified";throw new Pe("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:Vg};function zm(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new pl(null,n)}function bI(n){return zm(n),n.headers=kn.from(n.headers),n.data=Bm.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),QA.getAdapter(n.adapter||Ec.adapter)(n).then(function(r){return zm(n),r.data=Bm.call(n,n.transformResponse,r),r.headers=kn.from(r.headers),r},function(r){return $A(r)||(zm(n),r&&r.response&&(r.response.data=Bm.call(n,n.transformResponse,r.response),r.response.headers=kn.from(r.response.headers))),Promise.reject(r)})}const YA="1.8.4",Uf={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Uf[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const OI={};Uf.transitional=function(e,t,r){function i(a,l){return"[Axios v"+YA+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,h)=>{if(e===!1)throw new Pe(i(l," has been removed"+(t?" in "+t:"")),Pe.ERR_DEPRECATED);return t&&!OI[l]&&(OI[l]=!0,console.warn(i(l," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,l,h):!0}};Uf.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function dB(n,e,t){if(typeof n!="object")throw new Pe("options must be an object",Pe.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let i=r.length;for(;i-- >0;){const a=r[i],l=e[a];if(l){const h=n[a],f=h===void 0||l(h,a,n);if(f!==!0)throw new Pe("option "+a+" must be "+f,Pe.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Pe("Unknown option "+a,Pe.ERR_BAD_OPTION)}}const sd={assertOptions:dB,validators:Uf},Ur=sd.validators;let mo=class{constructor(e){this.defaults=e,this.interceptors={request:new SI,response:new SI}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const a=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ao(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:a}=t;r!==void 0&&sd.assertOptions(r,{silentJSONParsing:Ur.transitional(Ur.boolean),forcedJSONParsing:Ur.transitional(Ur.boolean),clarifyTimeoutError:Ur.transitional(Ur.boolean)},!1),i!=null&&(H.isFunction(i)?t.paramsSerializer={serialize:i}:sd.assertOptions(i,{encode:Ur.function,serialize:Ur.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),sd.assertOptions(t,{baseUrl:Ur.spelling("baseURL"),withXsrfToken:Ur.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let l=a&&H.merge(a.common,a[t.method]);a&&H.forEach(["delete","get","head","post","put","patch","common"],N=>{delete a[N]}),t.headers=kn.concat(l,a);const h=[];let f=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(t)===!1||(f=f&&M.synchronous,h.unshift(M.fulfilled,M.rejected))});const p=[];this.interceptors.response.forEach(function(M){p.push(M.fulfilled,M.rejected)});let y,v=0,T;if(!f){const N=[bI.bind(this),void 0];for(N.unshift.apply(N,h),N.push.apply(N,p),T=N.length,y=Promise.resolve(t);v<T;)y=y.then(N[v++],N[v++]);return y}T=h.length;let R=t;for(v=0;v<T;){const N=h[v++],M=h[v++];try{R=N(R)}catch(k){M.call(this,k);break}}try{y=bI.call(this,R)}catch(N){return Promise.reject(N)}for(v=0,T=p.length;v<T;)y=y.then(p[v++],p[v++]);return y}getUri(e){e=Ao(this.defaults,e);const t=HA(e.baseURL,e.url,e.allowAbsoluteUrls);return jA(t,e.params,e.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(e){mo.prototype[e]=function(t,r){return this.request(Ao(r||{},{method:e,url:t,data:(r||{}).data}))}});H.forEach(["post","put","patch"],function(e){function t(r){return function(a,l,h){return this.request(Ao(h||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}mo.prototype[e]=t(),mo.prototype[e+"Form"]=t(!0)});let fB=class JA{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(a){t=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(h=>{r.subscribe(h),a=h}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},e(function(a,l,h){r.reason||(r.reason=new pl(a,l,h),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new JA(function(i){e=i}),cancel:e}}};function pB(n){return function(t){return n.apply(null,t)}}function mB(n){return H.isObject(n)&&n.isAxiosError===!0}const Fg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Fg).forEach(([n,e])=>{Fg[e]=n});function XA(n){const e=new mo(n),t=kA(mo.prototype.request,e);return H.extend(t,mo.prototype,e,{allOwnKeys:!0}),H.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return XA(Ao(n,i))},t}const dt=XA(Ec);dt.Axios=mo;dt.CanceledError=pl;dt.CancelToken=fB;dt.isCancel=$A;dt.VERSION=YA;dt.toFormData=Vf;dt.AxiosError=Pe;dt.Cancel=dt.CanceledError;dt.all=function(e){return Promise.all(e)};dt.spread=pB;dt.isAxiosError=mB;dt.mergeConfig=Ao;dt.AxiosHeaders=kn;dt.formToJSON=n=>zA(H.isHTMLForm(n)?new FormData(n):n);dt.getAdapter=QA.getAdapter;dt.HttpStatusCode=Fg;dt.default=dt;const{Axios:UB,AxiosError:jB,CanceledError:BB,isCancel:zB,CancelToken:$B,VERSION:WB,all:HB,Cancel:qB,isAxiosError:GB,spread:KB,toFormData:QB,AxiosHeaders:YB,HttpStatusCode:JB,formToJSON:XB,getAdapter:ZB,mergeConfig:e3}=dt,ZA=()=>b.jsx("footer",{className:"bg-purple-800 text-white p-4 text-center",children:b.jsx("p",{children:"© 2025 GameLinked by Exelion"})}),tc=({children:n,className:e})=>b.jsx("div",{className:`bg-white rounded-lg shadow-lg p-4 ${e}`,children:n}),nc=({children:n,onClick:e,className:t})=>b.jsx("button",{onClick:e,className:`px-4 py-2 rounded-lg ${t}`,children:n}),eP=({user:n})=>{const[e,t]=re.useState(null),[r,i]=re.useState(!0);return re.useEffect(()=>{if(n){const a=xo(po,"users",n.uid);SC(a).then(l=>{l.exists()&&t(l.data())}).finally(()=>i(!1))}else i(!1)},[n]),re.useEffect(()=>{},[]),r?b.jsx("div",{children:"Loading..."}):b.jsx("div",{className:"p-4",children:b.jsxs(tc,{className:"mb-4",children:[b.jsxs("div",{className:"flex items-center",children:[b.jsx("div",{className:"w-16 h-16 bg-gray-300 rounded-full mr-4"}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-xl font-bold",children:e.displayName}),b.jsx("p",{className:"text-gray-600",children:e.bio}),b.jsx(nc,{className:"bg-purple-600 text-white mt-1",children:"Edit Profile"})]})]}),b.jsxs("div",{className:"mt-4",children:[b.jsx("h3",{className:"font-bold",children:"Gaming Activity"}),b.jsxs("p",{children:["Games: ",e.games.join(", ")||"None"]}),b.jsxs("p",{children:["K/D: ",e.stats.kd]}),b.jsxs("p",{children:["Win Rate: ",e.stats.winRate,"%"]}),b.jsxs("p",{children:["Matches Played: ",e.stats.matches]})]}),b.jsxs("div",{className:"mt-4",children:[b.jsx("h3",{className:"font-bold",children:"Clips"}),b.jsx("div",{className:"grid grid-cols-2 gap-2",children:e.clips.map((a,l)=>b.jsx("div",{className:"w-full h-24 bg-gray-300 rounded-lg"},l))})]})]})})};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gB{constructor(e,t){this._delegate=e,this.firebase=t,Mu(e,new Nn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Gg(this._delegate)))}_getService(e,t=ps){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=ps){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Mu(this._delegate,e)}_addOrOverwriteComponent(e){i0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _B={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},DI=new Ai("app-compat","Firebase",_B);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yB(n){const e={},t={__esModule:!0,initializeApp:a,app:i,registerVersion:Tt,setLogLevel:l0,onLog:a0,apps:null,SDK_VERSION:Qr,INTERNAL:{registerComponent:h,removeApp:r,useAsService:f,modularAPIs:ox}};t.default=t,Object.defineProperty(t,"apps",{get:l});function r(p){delete e[p]}function i(p){if(p=p||ps,!tr(e,p))throw DI.create("no-app",{appName:p});return e[p]}i.App=n;function a(p,y={}){const v=rc(p,y);if(tr(e,v.name))return e[v.name];const T=new n(v,t);return e[v.name]=T,T}function l(){return Object.keys(e).map(p=>e[p])}function h(p){const y=p.name,v=y.replace("-compat","");if(xn(p)&&p.type==="PUBLIC"){const T=(R=i())=>{if(typeof R[v]!="function")throw DI.create("invalid-app-argument",{appName:y});return R[v]()};p.serviceProps!==void 0&&Du(T,p.serviceProps),t[v]=T,n.prototype[v]=function(...R){return this._getService.bind(this,y).apply(this,p.multipleInstances?R:[])}}return p.type==="PUBLIC"?t[v]:null}function f(p,y){return y==="serverAuth"?null:y}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(){const n=yB(gB);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:tP,extendNamespace:e,createSubscribe:XI,ErrorFactory:Ai,deepExtend:Du});function e(t){Du(n,t)}return n}const vB=tP();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new tl("@firebase/app-compat"),EB="@firebase/app-compat",wB="0.2.53";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TB(n){Tt(EB,wB,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=zI();if(n.firebase!==void 0){LI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&LI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const nP=vB;TB();var IB="firebase",SB="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nP.registerVersion(IB,SB,"app-compat");const rP=({user:n})=>{const[e,t]=re.useState([]),[r,i]=re.useState(""),[a,l]=re.useState("");re.useEffect(()=>{const p=NL(fT(po,"scrims"),y=>{t(y.docs.map(v=>({id:v.id,...v.data()})))});return()=>p()},[]);const h=async()=>{if(!r||!a){alert("Please fill in all fields.");return}await kL(fT(po,"scrims"),{creator:n.uid,game:r,ticketPrice:parseInt(a),participants:[n.uid],status:"pending",timestamp:nP.firestore.FieldValue.serverTimestamp()}),i(""),l("")},f=async(p,y)=>{try{const{data:v}=await dt.post("http://localhost:5000/api/payment",{amount:y}),T={key:'YOUR_RAZORPAY_PUBLIC_KEY" > .env',amount:v.amount,currency:"INR",name:"GameLinked Scrim",description:"Entry Fee for Scrim",order_id:v.id,handler:async()=>{await L_(xo(po,"scrims",p),{participants:xL(n.uid),status:"active"}),alert("Scrim joined!")}};new window.Razorpay(T).open()}catch(v){console.error("Error during payment:",v),alert("There was an error processing your payment.")}};return b.jsxs("div",{className:"p-4",children:[b.jsxs(tc,{className:"mb-4",children:[b.jsx("h3",{className:"font-bold",children:"Create a Challenge"}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"block text-gray-600 mb-1",children:"Game"}),b.jsx("input",{type:"text",value:r,onChange:p=>i(p.target.value),placeholder:"Select Game",className:"w-full p-2 border rounded-lg"})]}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"block text-gray-600 mb-1",children:"Ticket Price (₹)"}),b.jsx("input",{type:"number",value:a,onChange:p=>l(p.target.value),placeholder:"Set Price",className:"w-full p-2 border rounded-lg"})]}),b.jsx(nc,{onClick:h,className:"bg-purple-600 text-white w-full",children:"Create Challenge"})]}),b.jsx("h3",{className:"font-bold mt-4",children:"Active Scrims"}),e.map(p=>b.jsxs(tc,{className:"mb-2",children:[b.jsxs("p",{children:["Game: ",p.game]}),b.jsxs("p",{children:["Ticket: ₹",p.ticketPrice]}),b.jsx(nc,{onClick:()=>f(p.id,p.ticketPrice),className:"bg-purple-600 text-white",children:"Join Scrim"})]},p.id))]})},Kd=()=>{const n=Cy(),e=r_(hl),t=async()=>{const r=document.getElementById("email").value,i=document.getElementById("password").value;try{await sb(e,r,i),n("/feed")}catch(a){alert("Login failed: "+a.message)}};return b.jsx("div",{className:"flex justify-center items-center h-screen bg-purple-100",children:b.jsxs(tc,{className:"w-full max-w-sm",children:[b.jsx("h2",{className:"text-2xl font-bold text-purple-800 mb-4 text-center",children:"GameLinked"}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"block text-gray-600 mb-1",children:"Email"}),b.jsx("input",{type:"email",id:"email",placeholder:"Email",className:"w-full p-2 border rounded-lg"})]}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"block text-gray-600 mb-1",children:"Password"}),b.jsx("input",{type:"password",id:"password",placeholder:"Password",className:"w-full p-2 border rounded-lg"})]}),b.jsx(nc,{onClick:t,className:"bg-purple-600 text-white w-full mb-2",children:"LOGIN"}),b.jsx(nc,{onClick:()=>n("/signup"),className:"bg-gray-200 text-gray-800 w-full",children:"REGISTER"})]})})},iP=()=>{const n=Cy(),e=rc(firebaseConfig),t=r_(e),r=fC(e),i=async()=>{const a=document.getElementById("email").value,l=document.getElementById("password").value;try{const{user:h}=await ib(t,a,l),f=xo(r,"users",h.uid);await PL(f,{displayName:a.split("@")[0],bio:"Gamer",games:[],stats:{kd:0,winRate:0,matches:0},clips:[],points:0,isPremium:!1}),n("/feed")}catch(h){alert("Registration failed: "+h.message)}};return b.jsx("div",{className:"flex justify-center items-center h-screen bg-purple-100",children:b.jsxs(tc,{className:"w-full max-w-sm",children:[b.jsx("h2",{className:"text-2xl font-bold text-purple-800 mb-4 text-center",children:"Sign Up"}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"block text-gray-600 mb-1",children:"Email"}),b.jsx("input",{type:"email",id:"email",placeholder:"Email",className:"w-full p-2 border rounded-lg"})]}),b.jsxs("div",{className:"mb-4",children:[b.jsx("label",{className:"block text-gray-600 mb-1",children:"Password"}),b.jsx("input",{type:"password",id:"password",placeholder:"Password",className:"w-full p-2 border rounded-lg"})]}),b.jsx(Button,{onClick:i,className:"bg-purple-600 text-white w-full mb-2",children:"SIGN UP"}),b.jsx(Button,{onClick:()=>n("/login"),className:"bg-gray-200 text-gray-800 w-full",children:"BACK TO LOGIN"})]})})},sP=()=>b.jsxs("div",{className:"bg-purple-800 text-white flex justify-around py-3 fixed bottom-0 w-full",children:[b.jsx(pu,{to:"/feed",className:"focus:outline-none",children:"🏠 Home"}),b.jsx(pu,{to:"/profile",className:"focus:outline-none",children:"👤 Profile"}),b.jsx(pu,{to:"/leaderboard",className:"focus:outline-none",children:"🔍 Search"}),b.jsx(pu,{to:"/messages",className:"focus:outline-none",children:"💬 Messages"}),b.jsx(pu,{to:"/premium",className:"focus:outline-none",children:"⚙️ Settings"})]}),oP=()=>b.jsx("header",{className:"bg-purple-600 text-white p-4",children:b.jsx("h1",{className:"text-xl font-bold",children:"GameLinked"})}),aP=()=>b.jsx("footer",{className:"bg-purple-800 text-white p-4 text-center",children:b.jsx("p",{children:"© 2025 GameLinked by Exelion"})}),CB=()=>b.jsxs("div",{className:"p-4",children:[b.jsx("h2",{className:"text-xl font-bold mb-4",children:"Leaderboard"}),b.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[b.jsxs("div",{className:"flex justify-between mb-4",children:[b.jsx("button",{className:"bg-gray-200 text-gray-800 px-3 py-1 rounded-lg",children:"Sort by Rank"}),b.jsx("button",{className:"bg-gray-200 text-gray-800 px-3 py-1 rounded-lg",children:"Sort by Points"})]}),[1,2,3].map((n,e)=>b.jsxs("div",{className:"flex items-center mb-2",children:[b.jsxs("p",{className:"font-bold mr-2",children:[n,"."]}),b.jsx("div",{className:"w-10 h-10 bg-gray-300 rounded-full mr-2"}),b.jsxs("p",{children:["Player ",n," - ",1500-n*100," Points"]})]},e))]})]}),RB=({user:n,setIsPremium:e})=>{const t=async()=>{const{data:r}=await dt.post("http://localhost:5000/api/payment",{amount:99}),i={key:'YOUR_RAZORPAY_PUBLIC_KEY" > .env',amount:r.amount,currency:"INR",name:"GameLinked Premium",description:"Premium Subscription",order_id:r.id,handler:async()=>{const l=xo(po,"users",n.uid);await L_(l,{isPremium:!0}),e(!0),alert("Subscribed to Premium!")}};new window.Razorpay(i).open()};return b.jsxs("div",{className:"p-4",children:[b.jsx("h2",{className:"text-xl font-bold mb-4",children:"Premium Subscription"}),b.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[b.jsx("h3",{className:"font-bold",children:"Upgrade to Premium"}),b.jsxs("ul",{className:"list-disc list-inside my-4",children:[b.jsx("li",{children:"No Ads"}),b.jsx("li",{children:"Verified Status"}),b.jsx("li",{children:"Exclusive Challenges"})]}),b.jsx("button",{onClick:t,className:"w-full bg-purple-600 text-white p-2 rounded-lg",children:"Subscribe Now (₹99/month)"})]})]})},AB=({user:n})=>{const[e,t]=re.useState([]),[r,i]=re.useState(null),[a,l]=re.useState([]);re.useEffect(()=>{const f=co(is,"chats"),p=pA(co(is,"chats/participants/"+n.uid));equalTo(f,!0),Wd(p,y=>{const v=[];y.forEach(T=>{v.push({id:T.key,...T.val()})}),t(v)})},[n]),re.useEffect(()=>{let f=null;if(r){const p=co(is,`messages/${r.id}`);f=Wd(p,y=>{const v=[];y.forEach(T=>{v.push(T.val())}),l(v)})}return()=>{f&&console.log("unsubscribed")}},[r,is]);const h=async()=>{const f=document.getElementById("messageInput").value;r&&(await fA(co(is,`messages/${r.id}`),{sender:n.uid,content:f,timestamp:Date.now()}),document.getElementById("messageInput").value="")};return b.jsxs("div",{className:"p-4",children:[b.jsx("h2",{className:"text-xl font-bold mb-4",children:"Messages"}),b.jsxs("div",{className:"flex",children:[b.jsx("div",{className:"w-1/3 bg-white rounded-lg shadow-lg p-4 mr-4",children:e.map(f=>b.jsx("div",{onClick:()=>i(f),className:"p-2 border-b cursor-pointer",children:b.jsx("p",{children:Object.keys(f.participants).find(p=>p!==n.uid)})},f.id))}),b.jsx("div",{className:"w-2/3 bg-white rounded-lg shadow-lg p-4",children:r?b.jsxs(b.Fragment,{children:[b.jsx("h3",{className:"font-bold mb-2",children:Object.keys(r.participants).find(f=>f!==n.uid)}),b.jsx("div",{className:"h-64 overflow-y-scroll mb-4",children:a.map((f,p)=>b.jsx("div",{className:`p-2 ${f.sender===n.uid?"text-right":""}`,children:b.jsx("p",{className:`inline-block p-2 rounded-lg ${f.sender===n.uid?"bg-purple-600 text-white":"bg-gray-200"}`,children:f.content})},p))}),b.jsxs("div",{className:"flex",children:[b.jsx("input",{id:"messageInput",type:"text",placeholder:"Type a message...",className:"w-full p-2 border rounded-lg mr-2"}),b.jsx("button",{onClick:h,className:"bg-purple-600 text-white px-3 py-2 rounded-lg",children:"Send"})]})]}):b.jsx("p",{children:"Select a chat to start messaging"})})]})]})},lP=({user:n,setIsPremium:e,isPremium:t})=>{const r=()=>!t&&b.jsx("div",{className:"bg-purple-200 p-2 text-center text-purple-800",children:b.jsx("p",{children:"🎮 Upgrade to Premium to remove ads!"})});return b.jsxs(PA,{children:[b.jsx(r,{}),b.jsx(oP,{}),b.jsxs(AA,{children:[b.jsx(_t,{path:"/login",element:b.jsx(Kd,{})}),b.jsx(_t,{path:"/signup",element:b.jsx(iP,{})}),b.jsx(_t,{path:"/home",element:b.jsx(ZA,{})}),b.jsx(_t,{path:"/profile",element:b.jsx(eP,{user:n})}),b.jsx(_t,{path:"/challenge",element:b.jsx(rP,{user:n})}),b.jsx(_t,{path:"/feed",element:b.jsx(lP,{user:n})}),b.jsx(_t,{path:"/leaderboard",element:b.jsx(CB,{})}),b.jsx(_t,{path:"/premium",element:b.jsx(RB,{user:n,setIsPremium:e})}),b.jsx(_t,{path:"/messages",element:b.jsx(AB,{user:n})}),b.jsx(_t,{path:"/",element:b.jsx(Kd,{})})]}),n&&b.jsx(sP,{}),b.jsx(aP,{})]})},PB=()=>b.jsxs("div",{className:"p-4",children:[b.jsx("h2",{className:"text-xl font-bold mb-4",children:"Leaderboard"}),b.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[b.jsxs("div",{className:"flex justify-between mb-4",children:[b.jsx("button",{className:"bg-gray-200 text-gray-800 px-3 py-1 rounded-lg",children:"Sort by Rank"}),b.jsx("button",{className:"bg-gray-200 text-gray-800 px-3 py-1 rounded-lg",children:"Sort by Points"})]}),[1,2,3].map((n,e)=>b.jsxs("div",{className:"flex items-center mb-2",children:[b.jsxs("p",{className:"font-bold mr-2",children:[n,"."]}),b.jsx("div",{className:"w-10 h-10 bg-gray-300 rounded-full mr-2"}),b.jsxs("p",{children:["Player ",n," - ",1500-n*100," Points"]})]},e))]})]}),kB=({user:n,setIsPremium:e})=>{const t=async()=>{const{data:r}=await dt.post("http://localhost:5000/api/payment",{amount:99}),i={key:'YOUR_RAZORPAY_PUBLIC_KEY" > .env',amount:r.amount,currency:"INR",name:"GameLinked Premium",description:"Premium Subscription",order_id:r.id,handler:async()=>{const l=xo(po,"users",n.uid);await L_(l,{isPremium:!0}),e(!0),alert("Subscribed to Premium!")}};new window.Razorpay(i).open()};return b.jsxs("div",{className:"p-4",children:[b.jsx("h2",{className:"text-xl font-bold mb-4",children:"Premium Subscription"}),b.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[b.jsx("h3",{className:"font-bold",children:"Upgrade to Premium"}),b.jsxs("ul",{className:"list-disc list-inside my-4",children:[b.jsx("li",{children:"No Ads"}),b.jsx("li",{children:"Verified Status"}),b.jsx("li",{children:"Exclusive Challenges"})]}),b.jsx("button",{onClick:t,className:"w-full bg-purple-600 text-white p-2 rounded-lg",children:"Subscribe Now (₹99/month)"})]})]})},NB=({user:n})=>{const[e,t]=re.useState([]),[r,i]=re.useState(null),[a,l]=re.useState([]);re.useEffect(()=>{const f=co(is,"chats");pA(f,`participants/${n.uid}`);const p=Wd(f,y=>{const v=[];y.forEach(T=>{const R={id:T.key,...T.val()};v.push(R)}),t(v)});return()=>p()},[n]),re.useEffect(()=>{if(!r)return;const f=co(is,`messages/${r.id}`),p=Wd(f,y=>{const v=[];y.forEach(T=>{v.push(T.val())}),l(v)});return()=>p()},[r]);const h=async()=>{const f=document.getElementById("messageInput").value;r&&(await fA(co(is,`messages/${r.id}`),{sender:n.uid,content:f,timestamp:Date.now()}),document.getElementById("messageInput").value="")};return b.jsxs("div",{className:"p-4",children:[b.jsx("h2",{className:"text-xl font-bold mb-4",children:"Messages"}),b.jsxs("div",{className:"flex",children:[b.jsx("div",{className:"w-1/3 bg-white rounded-lg shadow-lg p-4 mr-4",children:e.map(f=>b.jsx("div",{onClick:()=>i(f),className:"p-2 border-b cursor-pointer",children:Object.keys(f.participants).find(p=>p!==n.uid)&&b.jsx("p",{children:Object.keys(f.participants).find(p=>p!==n.uid)})},f.id))}),b.jsx("div",{className:"w-2/3 bg-white rounded-lg shadow-lg p-4",children:r?b.jsxs(b.Fragment,{children:[b.jsx("h3",{className:"font-bold mb-2",children:Object.keys(r.participants).find(f=>f!==n.uid)}),b.jsx("div",{className:"h-64 overflow-y-scroll mb-4",children:a.map((f,p)=>b.jsx("div",{className:`p-2 ${f.sender===n.uid?"text-right":""}`,children:b.jsx("p",{className:`inline-block p-2 rounded-lg ${f.sender===n.uid?"bg-purple-600 text-white":"bg-gray-200"}`,children:f.content})},p))}),b.jsxs("div",{className:"flex",children:[b.jsx("input",{id:"messageInput",type:"text",placeholder:"Type a message...",className:"w-full p-2 border rounded-lg mr-2"}),b.jsx("button",{onClick:h,className:"bg-purple-600 text-white px-3 py-2 rounded-lg",children:"Send"})]})]}):b.jsx("p",{children:"Select a chat to start messaging"})})]})]})},xB=({user:n,setIsPremium:e,isPremium:t})=>{const r=()=>!t&&b.jsx("div",{className:"bg-purple-200 p-2 text-center text-purple-800",children:b.jsx("p",{children:"🎮 Upgrade to Premium to remove ads!"})});return b.jsxs(PA,{children:[b.jsx(r,{}),b.jsx(oP,{}),b.jsxs(AA,{children:[b.jsx(_t,{path:"/login",element:b.jsx(Kd,{})}),b.jsx(_t,{path:"/signup",element:b.jsx(iP,{})}),b.jsx(_t,{path:"/home",element:b.jsx(ZA,{})}),b.jsx(_t,{path:"/profile",element:b.jsx(eP,{user:n})}),b.jsx(_t,{path:"/challenge",element:b.jsx(rP,{user:n})}),b.jsx(_t,{path:"/feed",element:b.jsx(lP,{user:n})}),b.jsx(_t,{path:"/leaderboard",element:b.jsx(PB,{})}),b.jsx(_t,{path:"/premium",element:b.jsx(kB,{user:n,setIsPremium:e})}),b.jsx(_t,{path:"/messages",element:b.jsx(NB,{user:n})}),b.jsx(_t,{path:"/",element:b.jsx(Kd,{})})]}),n&&b.jsx(sP,{}),b.jsx(aP,{})]})};class bB extends re.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error:",e,t)}render(){return this.state.hasError?b.jsx("div",{style:{color:"red"},children:"Something went wrong."}):this.props.children}}const OB=()=>{const[n,e]=re.useState(null),[t,r]=re.useState(!1);return console.log("VITE_FIREBASE_API_KEY:","YOUR_API_KEY"),console.log("VITE_FIREBASE_AUTH_DOMAIN:","YOUR_AUTH_DOMAIN"),console.log("VITE_FIREBASE_PROJECT_ID:","YOUR_PROJECT_ID"),console.log("VITE_FIREBASE_STORAGE_BUCKET:","YOUR_STORAGE_BUCKET"),console.log("VITE_FIREBASE_MESSAGING_SENDER_ID:","YOUR_MESSAGING_SENDER_ID"),console.log("VITE_FIREBASE_APP_ID:","YOUR_APP_ID"),console.log("VITE_FIREBASE_MEASUREMENT_ID:",void 0),re.useEffect(()=>{const i=lb(BU,async a=>{if(e(a),a){const l=xo(po,"users",a.uid);SC(l).then(h=>{h.exists()&&r(h.data().isPremium||!1)})}});return()=>i()},[]),b.jsx("div",{className:"min-h-screen bg-gray-100",children:b.jsx(bB,{children:b.jsx(xB,{user:n,setIsPremium:r,isPremium:t})})})};Tk.createRoot(document.getElementById("root")).render(b.jsx(VI.StrictMode,{children:b.jsx(OB,{})}));

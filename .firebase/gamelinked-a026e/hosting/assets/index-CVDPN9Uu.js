function LP(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(n,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function PI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var nm={exports:{}},ru={},rm={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AE;function MP(){if(AE)return be;AE=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function T(V){return V===null||typeof V!="object"?null:(V=v&&V[v]||V["@@iterator"],typeof V=="function"?V:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,L={};function N(V,G,me){this.props=V,this.context=G,this.refs=L,this.updater=me||R}N.prototype.isReactComponent={},N.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},N.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function K(){}K.prototype=N.prototype;function te(V,G,me){this.props=V,this.context=G,this.refs=L,this.updater=me||R}var Z=te.prototype=new K;Z.constructor=te,k(Z,N.prototype),Z.isPureReactComponent=!0;var oe=Array.isArray,Ee=Object.prototype.hasOwnProperty,we={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function S(V,G,me){var ke,xe={},Ue=null,We=null;if(G!=null)for(ke in G.ref!==void 0&&(We=G.ref),G.key!==void 0&&(Ue=""+G.key),G)Ee.call(G,ke)&&!b.hasOwnProperty(ke)&&(xe[ke]=G[ke]);var He=arguments.length-2;if(He===1)xe.children=me;else if(1<He){for(var Xe=Array(He),bt=0;bt<He;bt++)Xe[bt]=arguments[bt+2];xe.children=Xe}if(V&&V.defaultProps)for(ke in He=V.defaultProps,He)xe[ke]===void 0&&(xe[ke]=He[ke]);return{$$typeof:n,type:V,key:Ue,ref:We,props:xe,_owner:we.current}}function P(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function O(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function M(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(me){return G[me]})}var F=/\/+/g;function A(V,G){return typeof V=="object"&&V!==null&&V.key!=null?M(""+V.key):G.toString(36)}function pt(V,G,me,ke,xe){var Ue=typeof V;(Ue==="undefined"||Ue==="boolean")&&(V=null);var We=!1;if(V===null)We=!0;else switch(Ue){case"string":case"number":We=!0;break;case"object":switch(V.$$typeof){case n:case e:We=!0}}if(We)return We=V,xe=xe(We),V=ke===""?"."+A(We,0):ke,oe(xe)?(me="",V!=null&&(me=V.replace(F,"$&/")+"/"),pt(xe,G,me,"",function(bt){return bt})):xe!=null&&(O(xe)&&(xe=P(xe,me+(!xe.key||We&&We.key===xe.key?"":(""+xe.key).replace(F,"$&/")+"/")+V)),G.push(xe)),1;if(We=0,ke=ke===""?".":ke+":",oe(V))for(var He=0;He<V.length;He++){Ue=V[He];var Xe=ke+A(Ue,He);We+=pt(Ue,G,me,Xe,xe)}else if(Xe=T(V),typeof Xe=="function")for(V=Xe.call(V),He=0;!(Ue=V.next()).done;)Ue=Ue.value,Xe=ke+A(Ue,He++),We+=pt(Ue,G,me,Xe,xe);else if(Ue==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return We}function Kt(V,G,me){if(V==null)return V;var ke=[],xe=0;return pt(V,ke,"","",function(Ue){return G.call(me,Ue,xe++)}),ke}function Qt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(me){(V._status===0||V._status===-1)&&(V._status=1,V._result=me)},function(me){(V._status===0||V._status===-1)&&(V._status=2,V._result=me)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Qe={current:null},se={transition:null},ge={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:se,ReactCurrentOwner:we};function le(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:Kt,forEach:function(V,G,me){Kt(V,function(){G.apply(this,arguments)},me)},count:function(V){var G=0;return Kt(V,function(){G++}),G},toArray:function(V){return Kt(V,function(G){return G})||[]},only:function(V){if(!O(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},be.Component=N,be.Fragment=t,be.Profiler=i,be.PureComponent=te,be.StrictMode=r,be.Suspense=f,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,be.act=le,be.cloneElement=function(V,G,me){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ke=k({},V.props),xe=V.key,Ue=V.ref,We=V._owner;if(G!=null){if(G.ref!==void 0&&(Ue=G.ref,We=we.current),G.key!==void 0&&(xe=""+G.key),V.type&&V.type.defaultProps)var He=V.type.defaultProps;for(Xe in G)Ee.call(G,Xe)&&!b.hasOwnProperty(Xe)&&(ke[Xe]=G[Xe]===void 0&&He!==void 0?He[Xe]:G[Xe])}var Xe=arguments.length-2;if(Xe===1)ke.children=me;else if(1<Xe){He=Array(Xe);for(var bt=0;bt<Xe;bt++)He[bt]=arguments[bt+2];ke.children=He}return{$$typeof:n,type:V.type,key:xe,ref:Ue,props:ke,_owner:We}},be.createContext=function(V){return V={$$typeof:l,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},be.createElement=S,be.createFactory=function(V){var G=S.bind(null,V);return G.type=V,G},be.createRef=function(){return{current:null}},be.forwardRef=function(V){return{$$typeof:h,render:V}},be.isValidElement=O,be.lazy=function(V){return{$$typeof:y,_payload:{_status:-1,_result:V},_init:Qt}},be.memo=function(V,G){return{$$typeof:p,type:V,compare:G===void 0?null:G}},be.startTransition=function(V){var G=se.transition;se.transition={};try{V()}finally{se.transition=G}},be.unstable_act=le,be.useCallback=function(V,G){return Qe.current.useCallback(V,G)},be.useContext=function(V){return Qe.current.useContext(V)},be.useDebugValue=function(){},be.useDeferredValue=function(V){return Qe.current.useDeferredValue(V)},be.useEffect=function(V,G){return Qe.current.useEffect(V,G)},be.useId=function(){return Qe.current.useId()},be.useImperativeHandle=function(V,G,me){return Qe.current.useImperativeHandle(V,G,me)},be.useInsertionEffect=function(V,G){return Qe.current.useInsertionEffect(V,G)},be.useLayoutEffect=function(V,G){return Qe.current.useLayoutEffect(V,G)},be.useMemo=function(V,G){return Qe.current.useMemo(V,G)},be.useReducer=function(V,G,me){return Qe.current.useReducer(V,G,me)},be.useRef=function(V){return Qe.current.useRef(V)},be.useState=function(V){return Qe.current.useState(V)},be.useSyncExternalStore=function(V,G,me){return Qe.current.useSyncExternalStore(V,G,me)},be.useTransition=function(){return Qe.current.useTransition()},be.version="18.3.1",be}var PE;function xg(){return PE||(PE=1,rm.exports=MP()),rm.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE;function VP(){if(kE)return ru;kE=1;var n=xg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(h,f,p){var y,v={},T=null,R=null;p!==void 0&&(T=""+p),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(R=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(v[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)v[y]===void 0&&(v[y]=f[y]);return{$$typeof:e,type:h,key:T,ref:R,props:v,_owner:i.current}}return ru.Fragment=t,ru.jsx=l,ru.jsxs=l,ru}var NE;function FP(){return NE||(NE=1,nm.exports=VP()),nm.exports}var z=FP(),re=xg();const kI=PI(re),UP=LP({__proto__:null,default:kI},[re]);var xh={},im={exports:{}},vn={},sm={exports:{}},om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE;function jP(){return xE||(xE=1,function(n){function e(se,ge){var le=se.length;se.push(ge);e:for(;0<le;){var V=le-1>>>1,G=se[V];if(0<i(G,ge))se[V]=ge,se[le]=G,le=V;else break e}}function t(se){return se.length===0?null:se[0]}function r(se){if(se.length===0)return null;var ge=se[0],le=se.pop();if(le!==ge){se[0]=le;e:for(var V=0,G=se.length,me=G>>>1;V<me;){var ke=2*(V+1)-1,xe=se[ke],Ue=ke+1,We=se[Ue];if(0>i(xe,le))Ue<G&&0>i(We,xe)?(se[V]=We,se[Ue]=le,V=Ue):(se[V]=xe,se[ke]=le,V=ke);else if(Ue<G&&0>i(We,le))se[V]=We,se[Ue]=le,V=Ue;else break e}}return ge}function i(se,ge){var le=se.sortIndex-ge.sortIndex;return le!==0?le:se.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,h=l.now();n.unstable_now=function(){return l.now()-h}}var f=[],p=[],y=1,v=null,T=3,R=!1,k=!1,L=!1,N=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(se){for(var ge=t(p);ge!==null;){if(ge.callback===null)r(p);else if(ge.startTime<=se)r(p),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(p)}}function oe(se){if(L=!1,Z(se),!k)if(t(f)!==null)k=!0,Qt(Ee);else{var ge=t(p);ge!==null&&Qe(oe,ge.startTime-se)}}function Ee(se,ge){k=!1,L&&(L=!1,K(S),S=-1),R=!0;var le=T;try{for(Z(ge),v=t(f);v!==null&&(!(v.expirationTime>ge)||se&&!M());){var V=v.callback;if(typeof V=="function"){v.callback=null,T=v.priorityLevel;var G=V(v.expirationTime<=ge);ge=n.unstable_now(),typeof G=="function"?v.callback=G:v===t(f)&&r(f),Z(ge)}else r(f);v=t(f)}if(v!==null)var me=!0;else{var ke=t(p);ke!==null&&Qe(oe,ke.startTime-ge),me=!1}return me}finally{v=null,T=le,R=!1}}var we=!1,b=null,S=-1,P=5,O=-1;function M(){return!(n.unstable_now()-O<P)}function F(){if(b!==null){var se=n.unstable_now();O=se;var ge=!0;try{ge=b(!0,se)}finally{ge?A():(we=!1,b=null)}}else we=!1}var A;if(typeof te=="function")A=function(){te(F)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,Kt=pt.port2;pt.port1.onmessage=F,A=function(){Kt.postMessage(null)}}else A=function(){N(F,0)};function Qt(se){b=se,we||(we=!0,A())}function Qe(se,ge){S=N(function(){se(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){k||R||(k=!0,Qt(Ee))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(se){switch(T){case 1:case 2:case 3:var ge=3;break;default:ge=T}var le=T;T=ge;try{return se()}finally{T=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,ge){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var le=T;T=se;try{return ge()}finally{T=le}},n.unstable_scheduleCallback=function(se,ge,le){var V=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?V+le:V):le=V,se){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=le+G,se={id:y++,callback:ge,priorityLevel:se,startTime:le,expirationTime:G,sortIndex:-1},le>V?(se.sortIndex=le,e(p,se),t(f)===null&&se===t(p)&&(L?(K(S),S=-1):L=!0,Qe(oe,le-V))):(se.sortIndex=G,e(f,se),k||R||(k=!0,Qt(Ee))),se},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(se){var ge=T;return function(){var le=T;T=ge;try{return se.apply(this,arguments)}finally{T=le}}}}(om)),om}var bE;function BP(){return bE||(bE=1,sm.exports=jP()),sm.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OE;function zP(){if(OE)return vn;OE=1;var n=xg(),e=BP();function t(s){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(s,o){l(s,o),l(s+"Capture",o)}function l(s,o){for(i[s]=o,s=0;s<o.length;s++)r.add(o[s])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function T(s){return f.call(v,s)?!0:f.call(y,s)?!1:p.test(s)?v[s]=!0:(y[s]=!0,!1)}function R(s,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function k(s,o,u,d){if(o===null||typeof o>"u"||R(s,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function L(s,o,u,d,m,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=u,this.propertyName=s,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){N[s]=new L(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var o=s[0];N[o]=new L(o,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){N[s]=new L(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){N[s]=new L(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){N[s]=new L(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){N[s]=new L(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){N[s]=new L(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){N[s]=new L(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){N[s]=new L(s,5,!1,s.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function te(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var o=s.replace(K,te);N[o]=new L(o,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var o=s.replace(K,te);N[o]=new L(o,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var o=s.replace(K,te);N[o]=new L(o,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){N[s]=new L(s,1,!1,s.toLowerCase(),null,!1,!1)}),N.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){N[s]=new L(s,1,!1,s.toLowerCase(),null,!0,!0)});function Z(s,o,u,d){var m=N.hasOwnProperty(o)?N[o]:null;(m!==null?m.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(k(o,u,m,d)&&(u=null),d||m===null?T(o)&&(u===null?s.removeAttribute(o):s.setAttribute(o,""+u)):m.mustUseProperty?s[m.propertyName]=u===null?m.type===3?!1:"":u:(o=m.attributeName,d=m.attributeNamespace,u===null?s.removeAttribute(o):(m=m.type,u=m===3||m===4&&u===!0?"":""+u,d?s.setAttributeNS(d,o,u):s.setAttribute(o,u))))}var oe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),we=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),M=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),pt=Symbol.for("react.suspense_list"),Kt=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Qe=Symbol.for("react.offscreen"),se=Symbol.iterator;function ge(s){return s===null||typeof s!="object"?null:(s=se&&s[se]||s["@@iterator"],typeof s=="function"?s:null)}var le=Object.assign,V;function G(s){if(V===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+s}var me=!1;function ke(s,o){if(!s||me)return"";me=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch($){var d=$}Reflect.construct(s,[],o)}else{try{o.call()}catch($){d=$}s.call(o.prototype)}else{try{throw Error()}catch($){d=$}s()}}catch($){if($&&d&&typeof $.stack=="string"){for(var m=$.stack.split(`
`),_=d.stack.split(`
`),w=m.length-1,C=_.length-1;1<=w&&0<=C&&m[w]!==_[C];)C--;for(;1<=w&&0<=C;w--,C--)if(m[w]!==_[C]){if(w!==1||C!==1)do if(w--,C--,0>C||m[w]!==_[C]){var x=`
`+m[w].replace(" at new "," at ");return s.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",s.displayName)),x}while(1<=w&&0<=C);break}}}finally{me=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?G(s):""}function xe(s){switch(s.tag){case 5:return G(s.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return s=ke(s.type,!1),s;case 11:return s=ke(s.type.render,!1),s;case 1:return s=ke(s.type,!0),s;default:return""}}function Ue(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case b:return"Fragment";case we:return"Portal";case P:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case pt:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case M:return(s.displayName||"Context")+".Consumer";case O:return(s._context.displayName||"Context")+".Provider";case F:var o=s.render;return s=s.displayName,s||(s=o.displayName||o.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case Kt:return o=s.displayName||null,o!==null?o:Ue(s.type)||"Memo";case Qt:o=s._payload,s=s._init;try{return Ue(s(o))}catch{}}return null}function We(s){var o=s.type;switch(s.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=o.render,s=s.displayName||s.name||"",o.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function He(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Xe(s){var o=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function bt(s){var o=Xe(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,o),d=""+s[o];if(!s.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var m=u.get,_=u.set;return Object.defineProperty(s,o,{configurable:!0,get:function(){return m.call(this)},set:function(w){d=""+w,_.call(this,w)}}),Object.defineProperty(s,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){s._valueTracker=null,delete s[o]}}}}function Kr(s){s._valueTracker||(s._valueTracker=bt(s))}function No(s){if(!s)return!1;var o=s._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return s&&(d=Xe(s)?s.checked?"true":"false":s.value),s=d,s!==u?(o.setValue(s),!0):!1}function Ri(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function Ps(s,o){var u=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function xo(s,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=He(o.value!=null?o.value:u),s._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ul(s,o){o=o.checked,o!=null&&Z(s,"checked",o,!1)}function cl(s,o){ul(s,o);var u=He(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(d==="submit"||d==="reset"){s.removeAttribute("value");return}o.hasOwnProperty("value")?bo(s,o.type,u):o.hasOwnProperty("defaultValue")&&bo(s,o.type,He(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(s.defaultChecked=!!o.defaultChecked)}function gc(s,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+s._wrapperState.initialValue,u||o===s.value||(s.value=o),s.defaultValue=o}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function bo(s,o,u){(o!=="number"||Ri(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var Qr=Array.isArray;function Yr(s,o,u,d){if(s=s.options,o){o={};for(var m=0;m<u.length;m++)o["$"+u[m]]=!0;for(u=0;u<s.length;u++)m=o.hasOwnProperty("$"+s[u].value),s[u].selected!==m&&(s[u].selected=m),m&&d&&(s[u].defaultSelected=!0)}else{for(u=""+He(u),o=null,m=0;m<s.length;m++){if(s[m].value===u){s[m].selected=!0,d&&(s[m].defaultSelected=!0);return}o!==null||s[m].disabled||(o=s[m])}o!==null&&(o.selected=!0)}}function hl(s,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Oo(s,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(Qr(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}s._wrapperState={initialValue:He(u)}}function Do(s,o){var u=He(o.value),d=He(o.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),o.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),d!=null&&(s.defaultValue=""+d)}function dl(s){var o=s.textContent;o===s._wrapperState.initialValue&&o!==""&&o!==null&&(s.value=o)}function It(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function St(s,o){return s==null||s==="http://www.w3.org/1999/xhtml"?It(o):s==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Jr,fl=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,m){MSApp.execUnsafeLocalFunction(function(){return s(o,u,d,m)})}:s}(function(s,o){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=o;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Jr.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;o.firstChild;)s.appendChild(o.firstChild)}});function Ai(s,o){if(o){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=o;return}}s.textContent=o}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ns=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(s){Ns.forEach(function(o){o=o+s.charAt(0).toUpperCase()+s.substring(1),ks[o]=ks[s]})});function pl(s,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||ks.hasOwnProperty(s)&&ks[s]?(""+o).trim():o+"px"}function ml(s,o){s=s.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,m=pl(u,o[u],d);u==="float"&&(u="cssFloat"),d?s.setProperty(u,m):s[u]=m}}var gl=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(s,o){if(o){if(gl[s]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,s));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function yl(s,o){if(s.indexOf("-")===-1)return typeof o.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs=null;function Lo(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Mo=null,Bn=null,Sr=null;function Vo(s){if(s=zl(s)){if(typeof Mo!="function")throw Error(t(280));var o=s.stateNode;o&&(o=qc(o),Mo(s.stateNode,s.type,o))}}function Cr(s){Bn?Sr?Sr.push(s):Sr=[s]:Bn=s}function vl(){if(Bn){var s=Bn,o=Sr;if(Sr=Bn=null,Vo(s),o)for(s=0;s<o.length;s++)Vo(o[s])}}function bs(s,o){return s(o)}function El(){}var Xr=!1;function wl(s,o,u){if(Xr)return s(o,u);Xr=!0;try{return bs(s,o,u)}finally{Xr=!1,(Bn!==null||Sr!==null)&&(El(),vl())}}function mt(s,o){var u=s.stateNode;if(u===null)return null;var d=qc(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(s=s.type,d=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!d;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var Fo=!1;if(h)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Fo=!1}function Os(s,o,u,d,m,_,w,C,x){var $=Array.prototype.slice.call(arguments,3);try{o.apply(u,$)}catch(Y){this.onError(Y)}}var Ds=!1,Uo=null,er=!1,Tl=null,Nf={onError:function(s){Ds=!0,Uo=s}};function jo(s,o,u,d,m,_,w,C,x){Ds=!1,Uo=null,Os.apply(Nf,arguments)}function _c(s,o,u,d,m,_,w,C,x){if(jo.apply(this,arguments),Ds){if(Ds){var $=Uo;Ds=!1,Uo=null}else throw Error(t(198));er||(er=!0,Tl=$)}}function tr(s){var o=s,u=s;if(s.alternate)for(;o.return;)o=o.return;else{s=o;do o=s,(o.flags&4098)!==0&&(u=o.return),s=o.return;while(s)}return o.tag===3?u:null}function Ls(s){if(s.tag===13){var o=s.memoizedState;if(o===null&&(s=s.alternate,s!==null&&(o=s.memoizedState)),o!==null)return o.dehydrated}return null}function nr(s){if(tr(s)!==s)throw Error(t(188))}function yc(s){var o=s.alternate;if(!o){if(o=tr(s),o===null)throw Error(t(188));return o!==s?null:s}for(var u=s,d=o;;){var m=u.return;if(m===null)break;var _=m.alternate;if(_===null){if(d=m.return,d!==null){u=d;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===u)return nr(m),s;if(_===d)return nr(m),o;_=_.sibling}throw Error(t(188))}if(u.return!==d.return)u=m,d=_;else{for(var w=!1,C=m.child;C;){if(C===u){w=!0,u=m,d=_;break}if(C===d){w=!0,d=m,u=_;break}C=C.sibling}if(!w){for(C=_.child;C;){if(C===u){w=!0,u=_,d=m;break}if(C===d){w=!0,d=_,u=m;break}C=C.sibling}if(!w)throw Error(t(189))}}if(u.alternate!==d)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?s:o}function Il(s){return s=yc(s),s!==null?Bo(s):null}function Bo(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var o=Bo(s);if(o!==null)return o;s=s.sibling}return null}var zo=e.unstable_scheduleCallback,Sl=e.unstable_cancelCallback,vc=e.unstable_shouldYield,xf=e.unstable_requestPaint,Ze=e.unstable_now,Ec=e.unstable_getCurrentPriorityLevel,Ms=e.unstable_ImmediatePriority,Pi=e.unstable_UserBlockingPriority,zn=e.unstable_NormalPriority,Cl=e.unstable_LowPriority,wc=e.unstable_IdlePriority,Vs=null,Nn=null;function Tc(s){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Vs,s,void 0,(s.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Sc,Rl=Math.log,Ic=Math.LN2;function Sc(s){return s>>>=0,s===0?32:31-(Rl(s)/Ic|0)|0}var $o=64,Wo=4194304;function ki(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function Fs(s,o){var u=s.pendingLanes;if(u===0)return 0;var d=0,m=s.suspendedLanes,_=s.pingedLanes,w=u&268435455;if(w!==0){var C=w&~m;C!==0?d=ki(C):(_&=w,_!==0&&(d=ki(_)))}else w=u&~m,w!==0?d=ki(w):_!==0&&(d=ki(_));if(d===0)return 0;if(o!==0&&o!==d&&(o&m)===0&&(m=d&-d,_=o&-o,m>=_||m===16&&(_&4194240)!==0))return o;if((d&4)!==0&&(d|=u&16),o=s.entangledLanes,o!==0)for(s=s.entanglements,o&=d;0<o;)u=31-ln(o),m=1<<u,d|=s[u],o&=~m;return d}function bf(s,o){switch(s){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zr(s,o){for(var u=s.suspendedLanes,d=s.pingedLanes,m=s.expirationTimes,_=s.pendingLanes;0<_;){var w=31-ln(_),C=1<<w,x=m[w];x===-1?((C&u)===0||(C&d)!==0)&&(m[w]=bf(C,o)):x<=o&&(s.expiredLanes|=C),_&=~C}}function xn(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Us(){var s=$o;return $o<<=1,($o&4194240)===0&&($o=64),s}function Ni(s){for(var o=[],u=0;31>u;u++)o.push(s);return o}function xi(s,o,u){s.pendingLanes|=o,o!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,o=31-ln(o),s[o]=u}function Je(s,o){var u=s.pendingLanes&~o;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=o,s.mutableReadLanes&=o,s.entangledLanes&=o,o=s.entanglements;var d=s.eventTimes;for(s=s.expirationTimes;0<u;){var m=31-ln(u),_=1<<m;o[m]=0,d[m]=-1,s[m]=-1,u&=~_}}function bi(s,o){var u=s.entangledLanes|=o;for(s=s.entanglements;u;){var d=31-ln(u),m=1<<d;m&o|s[d]&o&&(s[d]|=o),u&=~m}}var Fe=0;function Oi(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var Cc,Ho,Rc,Ac,Pc,Al=!1,Rr=[],Bt=null,rr=null,ir=null,Di=new Map,$n=new Map,Ar=[],Of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kc(s,o){switch(s){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Di.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(o.pointerId)}}function dn(s,o,u,d,m,_){return s===null||s.nativeEvent!==_?(s={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:_,targetContainers:[m]},o!==null&&(o=zl(o),o!==null&&Ho(o)),s):(s.eventSystemFlags|=d,o=s.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),s)}function Df(s,o,u,d,m){switch(o){case"focusin":return Bt=dn(Bt,s,o,u,d,m),!0;case"dragenter":return rr=dn(rr,s,o,u,d,m),!0;case"mouseover":return ir=dn(ir,s,o,u,d,m),!0;case"pointerover":var _=m.pointerId;return Di.set(_,dn(Di.get(_)||null,s,o,u,d,m)),!0;case"gotpointercapture":return _=m.pointerId,$n.set(_,dn($n.get(_)||null,s,o,u,d,m)),!0}return!1}function Nc(s){var o=Ws(s.target);if(o!==null){var u=tr(o);if(u!==null){if(o=u.tag,o===13){if(o=Ls(u),o!==null){s.blockedOn=o,Pc(s.priority,function(){Rc(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function ei(s){if(s.blockedOn!==null)return!1;for(var o=s.targetContainers;0<o.length;){var u=qo(s.domEventName,s.eventSystemFlags,o[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var d=new u.constructor(u.type,u);xs=d,u.target.dispatchEvent(d),xs=null}else return o=zl(u),o!==null&&Ho(o),s.blockedOn=u,!1;o.shift()}return!0}function js(s,o,u){ei(s)&&u.delete(o)}function xc(){Al=!1,Bt!==null&&ei(Bt)&&(Bt=null),rr!==null&&ei(rr)&&(rr=null),ir!==null&&ei(ir)&&(ir=null),Di.forEach(js),$n.forEach(js)}function sr(s,o){s.blockedOn===o&&(s.blockedOn=null,Al||(Al=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,xc)))}function or(s){function o(m){return sr(m,s)}if(0<Rr.length){sr(Rr[0],s);for(var u=1;u<Rr.length;u++){var d=Rr[u];d.blockedOn===s&&(d.blockedOn=null)}}for(Bt!==null&&sr(Bt,s),rr!==null&&sr(rr,s),ir!==null&&sr(ir,s),Di.forEach(o),$n.forEach(o),u=0;u<Ar.length;u++)d=Ar[u],d.blockedOn===s&&(d.blockedOn=null);for(;0<Ar.length&&(u=Ar[0],u.blockedOn===null);)Nc(u),u.blockedOn===null&&Ar.shift()}var ti=oe.ReactCurrentBatchConfig,Li=!0;function ot(s,o,u,d){var m=Fe,_=ti.transition;ti.transition=null;try{Fe=1,Pl(s,o,u,d)}finally{Fe=m,ti.transition=_}}function Lf(s,o,u,d){var m=Fe,_=ti.transition;ti.transition=null;try{Fe=4,Pl(s,o,u,d)}finally{Fe=m,ti.transition=_}}function Pl(s,o,u,d){if(Li){var m=qo(s,o,u,d);if(m===null)qf(s,o,d,Bs,u),kc(s,d);else if(Df(m,s,o,u,d))d.stopPropagation();else if(kc(s,d),o&4&&-1<Of.indexOf(s)){for(;m!==null;){var _=zl(m);if(_!==null&&Cc(_),_=qo(s,o,u,d),_===null&&qf(s,o,d,Bs,u),_===m)break;m=_}m!==null&&d.stopPropagation()}else qf(s,o,d,null,u)}}var Bs=null;function qo(s,o,u,d){if(Bs=null,s=Lo(d),s=Ws(s),s!==null)if(o=tr(s),o===null)s=null;else if(u=o.tag,u===13){if(s=Ls(o),s!==null)return s;s=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;s=null}else o!==s&&(s=null);return Bs=s,null}function kl(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ec()){case Ms:return 1;case Pi:return 4;case zn:case Cl:return 16;case wc:return 536870912;default:return 16}default:return 16}}var bn=null,Go=null,fn=null;function Nl(){if(fn)return fn;var s,o=Go,u=o.length,d,m="value"in bn?bn.value:bn.textContent,_=m.length;for(s=0;s<u&&o[s]===m[s];s++);var w=u-s;for(d=1;d<=w&&o[u-d]===m[_-d];d++);return fn=m.slice(s,1<d?1-d:void 0)}function Ko(s){var o=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&o===13&&(s=13)):s=o,s===10&&(s=13),32<=s||s===13?s:0}function Pr(){return!0}function xl(){return!1}function zt(s){function o(u,d,m,_,w){this._reactName=u,this._targetInst=m,this.type=d,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var C in s)s.hasOwnProperty(C)&&(u=s[C],this[C]=u?u(_):_[C]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Pr:xl,this.isPropagationStopped=xl,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),o}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=zt(ar),kr=le({},ar,{view:0,detail:0}),Mf=zt(kr),Yo,ni,Mi,zs=le({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nr,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Mi&&(Mi&&s.type==="mousemove"?(Yo=s.screenX-Mi.screenX,ni=s.screenY-Mi.screenY):ni=Yo=0,Mi=s),Yo)},movementY:function(s){return"movementY"in s?s.movementY:ni}}),Jo=zt(zs),bl=le({},zs,{dataTransfer:0}),bc=zt(bl),Xo=le({},kr,{relatedTarget:0}),Zo=zt(Xo),Oc=le({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),ri=zt(Oc),Dc=le({},ar,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),Lc=zt(Dc),Mc=le({},ar,{data:0}),Ol=zt(Mc),ea={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},un={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fc(s){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(s):(s=Vc[s])?!!o[s]:!1}function Nr(){return Fc}var c=le({},kr,{key:function(s){if(s.key){var o=ea[s.key]||s.key;if(o!=="Unidentified")return o}return s.type==="keypress"?(s=Ko(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?un[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nr,charCode:function(s){return s.type==="keypress"?Ko(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Ko(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),g=zt(c),E=le({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=zt(E),U=le({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nr}),W=zt(U),ie=le({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ke=zt(ie),Ct=le({},zs,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),je=zt(Ct),Ot=[9,13,27,32],vt=h&&"CompositionEvent"in window,Wn=null;h&&"documentMode"in document&&(Wn=document.documentMode);var On=h&&"TextEvent"in window&&!Wn,$s=h&&(!vt||Wn&&8<Wn&&11>=Wn),ta=" ",wy=!1;function Ty(s,o){switch(s){case"keyup":return Ot.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iy(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var na=!1;function bA(s,o){switch(s){case"compositionend":return Iy(o);case"keypress":return o.which!==32?null:(wy=!0,ta);case"textInput":return s=o.data,s===ta&&wy?null:s;default:return null}}function OA(s,o){if(na)return s==="compositionend"||!vt&&Ty(s,o)?(s=Nl(),fn=Go=bn=null,na=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return $s&&o.locale!=="ko"?null:o.data;default:return null}}var DA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sy(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o==="input"?!!DA[s.type]:o==="textarea"}function Cy(s,o,u,d){Cr(d),o=$c(o,"onChange"),0<o.length&&(u=new Qo("onChange","change",null,u,d),s.push({event:u,listeners:o}))}var Dl=null,Ll=null;function LA(s){$y(s,0)}function Uc(s){var o=aa(s);if(No(o))return s}function MA(s,o){if(s==="change")return o}var Ry=!1;if(h){var Vf;if(h){var Ff="oninput"in document;if(!Ff){var Ay=document.createElement("div");Ay.setAttribute("oninput","return;"),Ff=typeof Ay.oninput=="function"}Vf=Ff}else Vf=!1;Ry=Vf&&(!document.documentMode||9<document.documentMode)}function Py(){Dl&&(Dl.detachEvent("onpropertychange",ky),Ll=Dl=null)}function ky(s){if(s.propertyName==="value"&&Uc(Ll)){var o=[];Cy(o,Ll,s,Lo(s)),wl(LA,o)}}function VA(s,o,u){s==="focusin"?(Py(),Dl=o,Ll=u,Dl.attachEvent("onpropertychange",ky)):s==="focusout"&&Py()}function FA(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Uc(Ll)}function UA(s,o){if(s==="click")return Uc(o)}function jA(s,o){if(s==="input"||s==="change")return Uc(o)}function BA(s,o){return s===o&&(s!==0||1/s===1/o)||s!==s&&o!==o}var lr=typeof Object.is=="function"?Object.is:BA;function Ml(s,o){if(lr(s,o))return!0;if(typeof s!="object"||s===null||typeof o!="object"||o===null)return!1;var u=Object.keys(s),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var m=u[d];if(!f.call(o,m)||!lr(s[m],o[m]))return!1}return!0}function Ny(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function xy(s,o){var u=Ny(s);s=0;for(var d;u;){if(u.nodeType===3){if(d=s+u.textContent.length,s<=o&&d>=o)return{node:u,offset:o-s};s=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=Ny(u)}}function by(s,o){return s&&o?s===o?!0:s&&s.nodeType===3?!1:o&&o.nodeType===3?by(s,o.parentNode):"contains"in s?s.contains(o):s.compareDocumentPosition?!!(s.compareDocumentPosition(o)&16):!1:!1}function Oy(){for(var s=window,o=Ri();o instanceof s.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)s=o.contentWindow;else break;o=Ri(s.document)}return o}function Uf(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o&&(o==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||o==="textarea"||s.contentEditable==="true")}function zA(s){var o=Oy(),u=s.focusedElem,d=s.selectionRange;if(o!==u&&u&&u.ownerDocument&&by(u.ownerDocument.documentElement,u)){if(d!==null&&Uf(u)){if(o=d.start,s=d.end,s===void 0&&(s=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(s,u.value.length);else if(s=(o=u.ownerDocument||document)&&o.defaultView||window,s.getSelection){s=s.getSelection();var m=u.textContent.length,_=Math.min(d.start,m);d=d.end===void 0?_:Math.min(d.end,m),!s.extend&&_>d&&(m=d,d=_,_=m),m=xy(u,_);var w=xy(u,d);m&&w&&(s.rangeCount!==1||s.anchorNode!==m.node||s.anchorOffset!==m.offset||s.focusNode!==w.node||s.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),s.removeAllRanges(),_>d?(s.addRange(o),s.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),s.addRange(o)))}}for(o=[],s=u;s=s.parentNode;)s.nodeType===1&&o.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)s=o[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var $A=h&&"documentMode"in document&&11>=document.documentMode,ra=null,jf=null,Vl=null,Bf=!1;function Dy(s,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Bf||ra==null||ra!==Ri(d)||(d=ra,"selectionStart"in d&&Uf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Vl&&Ml(Vl,d)||(Vl=d,d=$c(jf,"onSelect"),0<d.length&&(o=new Qo("onSelect","select",null,o,u),s.push({event:o,listeners:d}),o.target=ra)))}function jc(s,o){var u={};return u[s.toLowerCase()]=o.toLowerCase(),u["Webkit"+s]="webkit"+o,u["Moz"+s]="moz"+o,u}var ia={animationend:jc("Animation","AnimationEnd"),animationiteration:jc("Animation","AnimationIteration"),animationstart:jc("Animation","AnimationStart"),transitionend:jc("Transition","TransitionEnd")},zf={},Ly={};h&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete ia.animationend.animation,delete ia.animationiteration.animation,delete ia.animationstart.animation),"TransitionEvent"in window||delete ia.transitionend.transition);function Bc(s){if(zf[s])return zf[s];if(!ia[s])return s;var o=ia[s],u;for(u in o)if(o.hasOwnProperty(u)&&u in Ly)return zf[s]=o[u];return s}var My=Bc("animationend"),Vy=Bc("animationiteration"),Fy=Bc("animationstart"),Uy=Bc("transitionend"),jy=new Map,By="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(s,o){jy.set(s,o),a(o,[s])}for(var $f=0;$f<By.length;$f++){var Wf=By[$f],WA=Wf.toLowerCase(),HA=Wf[0].toUpperCase()+Wf.slice(1);Vi(WA,"on"+HA)}Vi(My,"onAnimationEnd"),Vi(Vy,"onAnimationIteration"),Vi(Fy,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(Uy,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fl));function zy(s,o,u){var d=s.type||"unknown-event";s.currentTarget=u,_c(d,o,void 0,s),s.currentTarget=null}function $y(s,o){o=(o&4)!==0;for(var u=0;u<s.length;u++){var d=s[u],m=d.event;d=d.listeners;e:{var _=void 0;if(o)for(var w=d.length-1;0<=w;w--){var C=d[w],x=C.instance,$=C.currentTarget;if(C=C.listener,x!==_&&m.isPropagationStopped())break e;zy(m,C,$),_=x}else for(w=0;w<d.length;w++){if(C=d[w],x=C.instance,$=C.currentTarget,C=C.listener,x!==_&&m.isPropagationStopped())break e;zy(m,C,$),_=x}}}if(er)throw s=Tl,er=!1,Tl=null,s}function nt(s,o){var u=o[Xf];u===void 0&&(u=o[Xf]=new Set);var d=s+"__bubble";u.has(d)||(Wy(o,s,2,!1),u.add(d))}function Hf(s,o,u){var d=0;o&&(d|=4),Wy(u,s,d,o)}var zc="_reactListening"+Math.random().toString(36).slice(2);function Ul(s){if(!s[zc]){s[zc]=!0,r.forEach(function(u){u!=="selectionchange"&&(qA.has(u)||Hf(u,!1,s),Hf(u,!0,s))});var o=s.nodeType===9?s:s.ownerDocument;o===null||o[zc]||(o[zc]=!0,Hf("selectionchange",!1,o))}}function Wy(s,o,u,d){switch(kl(o)){case 1:var m=ot;break;case 4:m=Lf;break;default:m=Pl}u=m.bind(null,o,u,s),m=void 0,!Fo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),d?m!==void 0?s.addEventListener(o,u,{capture:!0,passive:m}):s.addEventListener(o,u,!0):m!==void 0?s.addEventListener(o,u,{passive:m}):s.addEventListener(o,u,!1)}function qf(s,o,u,d,m){var _=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var C=d.stateNode.containerInfo;if(C===m||C.nodeType===8&&C.parentNode===m)break;if(w===4)for(w=d.return;w!==null;){var x=w.tag;if((x===3||x===4)&&(x=w.stateNode.containerInfo,x===m||x.nodeType===8&&x.parentNode===m))return;w=w.return}for(;C!==null;){if(w=Ws(C),w===null)return;if(x=w.tag,x===5||x===6){d=_=w;continue e}C=C.parentNode}}d=d.return}wl(function(){var $=_,Y=Lo(u),X=[];e:{var Q=jy.get(s);if(Q!==void 0){var ae=Qo,he=s;switch(s){case"keypress":if(Ko(u)===0)break e;case"keydown":case"keyup":ae=g;break;case"focusin":he="focus",ae=Zo;break;case"focusout":he="blur",ae=Zo;break;case"beforeblur":case"afterblur":ae=Zo;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=bc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=W;break;case My:case Vy:case Fy:ae=ri;break;case Uy:ae=Ke;break;case"scroll":ae=Mf;break;case"wheel":ae=je;break;case"copy":case"cut":case"paste":ae=Lc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=I}var de=(o&4)!==0,gt=!de&&s==="scroll",j=de?Q!==null?Q+"Capture":null:Q;de=[];for(var D=$,B;D!==null;){B=D;var ee=B.stateNode;if(B.tag===5&&ee!==null&&(B=ee,j!==null&&(ee=mt(D,j),ee!=null&&de.push(jl(D,ee,B)))),gt)break;D=D.return}0<de.length&&(Q=new ae(Q,he,null,u,Y),X.push({event:Q,listeners:de}))}}if((o&7)===0){e:{if(Q=s==="mouseover"||s==="pointerover",ae=s==="mouseout"||s==="pointerout",Q&&u!==xs&&(he=u.relatedTarget||u.fromElement)&&(Ws(he)||he[ii]))break e;if((ae||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,ae?(he=u.relatedTarget||u.toElement,ae=$,he=he?Ws(he):null,he!==null&&(gt=tr(he),he!==gt||he.tag!==5&&he.tag!==6)&&(he=null)):(ae=null,he=$),ae!==he)){if(de=Jo,ee="onMouseLeave",j="onMouseEnter",D="mouse",(s==="pointerout"||s==="pointerover")&&(de=I,ee="onPointerLeave",j="onPointerEnter",D="pointer"),gt=ae==null?Q:aa(ae),B=he==null?Q:aa(he),Q=new de(ee,D+"leave",ae,u,Y),Q.target=gt,Q.relatedTarget=B,ee=null,Ws(Y)===$&&(de=new de(j,D+"enter",he,u,Y),de.target=B,de.relatedTarget=gt,ee=de),gt=ee,ae&&he)t:{for(de=ae,j=he,D=0,B=de;B;B=sa(B))D++;for(B=0,ee=j;ee;ee=sa(ee))B++;for(;0<D-B;)de=sa(de),D--;for(;0<B-D;)j=sa(j),B--;for(;D--;){if(de===j||j!==null&&de===j.alternate)break t;de=sa(de),j=sa(j)}de=null}else de=null;ae!==null&&Hy(X,Q,ae,de,!1),he!==null&&gt!==null&&Hy(X,gt,he,de,!0)}}e:{if(Q=$?aa($):window,ae=Q.nodeName&&Q.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Q.type==="file")var fe=MA;else if(Sy(Q))if(Ry)fe=jA;else{fe=FA;var _e=VA}else(ae=Q.nodeName)&&ae.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(fe=UA);if(fe&&(fe=fe(s,$))){Cy(X,fe,u,Y);break e}_e&&_e(s,Q,$),s==="focusout"&&(_e=Q._wrapperState)&&_e.controlled&&Q.type==="number"&&bo(Q,"number",Q.value)}switch(_e=$?aa($):window,s){case"focusin":(Sy(_e)||_e.contentEditable==="true")&&(ra=_e,jf=$,Vl=null);break;case"focusout":Vl=jf=ra=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,Dy(X,u,Y);break;case"selectionchange":if($A)break;case"keydown":case"keyup":Dy(X,u,Y)}var ye;if(vt)e:{switch(s){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else na?Ty(s,u)&&(Ce="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(Ce="onCompositionStart");Ce&&($s&&u.locale!=="ko"&&(na||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&na&&(ye=Nl()):(bn=Y,Go="value"in bn?bn.value:bn.textContent,na=!0)),_e=$c($,Ce),0<_e.length&&(Ce=new Ol(Ce,s,null,u,Y),X.push({event:Ce,listeners:_e}),ye?Ce.data=ye:(ye=Iy(u),ye!==null&&(Ce.data=ye)))),(ye=On?bA(s,u):OA(s,u))&&($=$c($,"onBeforeInput"),0<$.length&&(Y=new Ol("onBeforeInput","beforeinput",null,u,Y),X.push({event:Y,listeners:$}),Y.data=ye))}$y(X,o)})}function jl(s,o,u){return{instance:s,listener:o,currentTarget:u}}function $c(s,o){for(var u=o+"Capture",d=[];s!==null;){var m=s,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=mt(s,u),_!=null&&d.unshift(jl(s,_,m)),_=mt(s,o),_!=null&&d.push(jl(s,_,m))),s=s.return}return d}function sa(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function Hy(s,o,u,d,m){for(var _=o._reactName,w=[];u!==null&&u!==d;){var C=u,x=C.alternate,$=C.stateNode;if(x!==null&&x===d)break;C.tag===5&&$!==null&&(C=$,m?(x=mt(u,_),x!=null&&w.unshift(jl(u,x,C))):m||(x=mt(u,_),x!=null&&w.push(jl(u,x,C)))),u=u.return}w.length!==0&&s.push({event:o,listeners:w})}var GA=/\r\n?/g,KA=/\u0000|\uFFFD/g;function qy(s){return(typeof s=="string"?s:""+s).replace(GA,`
`).replace(KA,"")}function Wc(s,o,u){if(o=qy(o),qy(s)!==o&&u)throw Error(t(425))}function Hc(){}var Gf=null,Kf=null;function Qf(s,o){return s==="textarea"||s==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,QA=typeof clearTimeout=="function"?clearTimeout:void 0,Gy=typeof Promise=="function"?Promise:void 0,YA=typeof queueMicrotask=="function"?queueMicrotask:typeof Gy<"u"?function(s){return Gy.resolve(null).then(s).catch(JA)}:Yf;function JA(s){setTimeout(function(){throw s})}function Jf(s,o){var u=o,d=0;do{var m=u.nextSibling;if(s.removeChild(u),m&&m.nodeType===8)if(u=m.data,u==="/$"){if(d===0){s.removeChild(m),or(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=m}while(u);or(o)}function Fi(s){for(;s!=null;s=s.nextSibling){var o=s.nodeType;if(o===1||o===3)break;if(o===8){if(o=s.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return s}function Ky(s){s=s.previousSibling;for(var o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return s;o--}else u==="/$"&&o++}s=s.previousSibling}return null}var oa=Math.random().toString(36).slice(2),xr="__reactFiber$"+oa,Bl="__reactProps$"+oa,ii="__reactContainer$"+oa,Xf="__reactEvents$"+oa,XA="__reactListeners$"+oa,ZA="__reactHandles$"+oa;function Ws(s){var o=s[xr];if(o)return o;for(var u=s.parentNode;u;){if(o=u[ii]||u[xr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(s=Ky(s);s!==null;){if(u=s[xr])return u;s=Ky(s)}return o}s=u,u=s.parentNode}return null}function zl(s){return s=s[xr]||s[ii],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function aa(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(t(33))}function qc(s){return s[Bl]||null}var Zf=[],la=-1;function Ui(s){return{current:s}}function rt(s){0>la||(s.current=Zf[la],Zf[la]=null,la--)}function et(s,o){la++,Zf[la]=s.current,s.current=o}var ji={},Yt=Ui(ji),pn=Ui(!1),Hs=ji;function ua(s,o){var u=s.type.contextTypes;if(!u)return ji;var d=s.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in u)m[_]=o[_];return d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=o,s.__reactInternalMemoizedMaskedChildContext=m),m}function mn(s){return s=s.childContextTypes,s!=null}function Gc(){rt(pn),rt(Yt)}function Qy(s,o,u){if(Yt.current!==ji)throw Error(t(168));et(Yt,o),et(pn,u)}function Yy(s,o,u){var d=s.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var m in d)if(!(m in o))throw Error(t(108,We(s)||"Unknown",m));return le({},u,d)}function Kc(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||ji,Hs=Yt.current,et(Yt,s),et(pn,pn.current),!0}function Jy(s,o,u){var d=s.stateNode;if(!d)throw Error(t(169));u?(s=Yy(s,o,Hs),d.__reactInternalMemoizedMergedChildContext=s,rt(pn),rt(Yt),et(Yt,s)):rt(pn),et(pn,u)}var si=null,Qc=!1,ep=!1;function Xy(s){si===null?si=[s]:si.push(s)}function eP(s){Qc=!0,Xy(s)}function Bi(){if(!ep&&si!==null){ep=!0;var s=0,o=Fe;try{var u=si;for(Fe=1;s<u.length;s++){var d=u[s];do d=d(!0);while(d!==null)}si=null,Qc=!1}catch(m){throw si!==null&&(si=si.slice(s+1)),zo(Ms,Bi),m}finally{Fe=o,ep=!1}}return null}var ca=[],ha=0,Yc=null,Jc=0,Hn=[],qn=0,qs=null,oi=1,ai="";function Gs(s,o){ca[ha++]=Jc,ca[ha++]=Yc,Yc=s,Jc=o}function Zy(s,o,u){Hn[qn++]=oi,Hn[qn++]=ai,Hn[qn++]=qs,qs=s;var d=oi;s=ai;var m=32-ln(d)-1;d&=~(1<<m),u+=1;var _=32-ln(o)+m;if(30<_){var w=m-m%5;_=(d&(1<<w)-1).toString(32),d>>=w,m-=w,oi=1<<32-ln(o)+m|u<<m|d,ai=_+s}else oi=1<<_|u<<m|d,ai=s}function tp(s){s.return!==null&&(Gs(s,1),Zy(s,1,0))}function np(s){for(;s===Yc;)Yc=ca[--ha],ca[ha]=null,Jc=ca[--ha],ca[ha]=null;for(;s===qs;)qs=Hn[--qn],Hn[qn]=null,ai=Hn[--qn],Hn[qn]=null,oi=Hn[--qn],Hn[qn]=null}var Dn=null,Ln=null,at=!1,ur=null;function ev(s,o){var u=Yn(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=s,o=s.deletions,o===null?(s.deletions=[u],s.flags|=16):o.push(u)}function tv(s,o){switch(s.tag){case 5:var u=s.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(s.stateNode=o,Dn=s,Ln=Fi(o.firstChild),!0):!1;case 6:return o=s.pendingProps===""||o.nodeType!==3?null:o,o!==null?(s.stateNode=o,Dn=s,Ln=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=qs!==null?{id:oi,overflow:ai}:null,s.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Yn(18,null,null,0),u.stateNode=o,u.return=s,s.child=u,Dn=s,Ln=null,!0):!1;default:return!1}}function rp(s){return(s.mode&1)!==0&&(s.flags&128)===0}function ip(s){if(at){var o=Ln;if(o){var u=o;if(!tv(s,o)){if(rp(s))throw Error(t(418));o=Fi(u.nextSibling);var d=Dn;o&&tv(s,o)?ev(d,u):(s.flags=s.flags&-4097|2,at=!1,Dn=s)}}else{if(rp(s))throw Error(t(418));s.flags=s.flags&-4097|2,at=!1,Dn=s}}}function nv(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Dn=s}function Xc(s){if(s!==Dn)return!1;if(!at)return nv(s),at=!0,!1;var o;if((o=s.tag!==3)&&!(o=s.tag!==5)&&(o=s.type,o=o!=="head"&&o!=="body"&&!Qf(s.type,s.memoizedProps)),o&&(o=Ln)){if(rp(s))throw rv(),Error(t(418));for(;o;)ev(s,o),o=Fi(o.nextSibling)}if(nv(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(t(317));e:{for(s=s.nextSibling,o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(o===0){Ln=Fi(s.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}s=s.nextSibling}Ln=null}}else Ln=Dn?Fi(s.stateNode.nextSibling):null;return!0}function rv(){for(var s=Ln;s;)s=Fi(s.nextSibling)}function da(){Ln=Dn=null,at=!1}function sp(s){ur===null?ur=[s]:ur.push(s)}var tP=oe.ReactCurrentBatchConfig;function $l(s,o,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var d=u.stateNode}if(!d)throw Error(t(147,s));var m=d,_=""+s;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var C=m.refs;w===null?delete C[_]:C[_]=w},o._stringRef=_,o)}if(typeof s!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,s))}return s}function Zc(s,o){throw s=Object.prototype.toString.call(o),Error(t(31,s==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":s))}function iv(s){var o=s._init;return o(s._payload)}function sv(s){function o(j,D){if(s){var B=j.deletions;B===null?(j.deletions=[D],j.flags|=16):B.push(D)}}function u(j,D){if(!s)return null;for(;D!==null;)o(j,D),D=D.sibling;return null}function d(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function m(j,D){return j=Qi(j,D),j.index=0,j.sibling=null,j}function _(j,D,B){return j.index=B,s?(B=j.alternate,B!==null?(B=B.index,B<D?(j.flags|=2,D):B):(j.flags|=2,D)):(j.flags|=1048576,D)}function w(j){return s&&j.alternate===null&&(j.flags|=2),j}function C(j,D,B,ee){return D===null||D.tag!==6?(D=Yp(B,j.mode,ee),D.return=j,D):(D=m(D,B),D.return=j,D)}function x(j,D,B,ee){var fe=B.type;return fe===b?Y(j,D,B.props.children,ee,B.key):D!==null&&(D.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Qt&&iv(fe)===D.type)?(ee=m(D,B.props),ee.ref=$l(j,D,B),ee.return=j,ee):(ee=Ih(B.type,B.key,B.props,null,j.mode,ee),ee.ref=$l(j,D,B),ee.return=j,ee)}function $(j,D,B,ee){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=Jp(B,j.mode,ee),D.return=j,D):(D=m(D,B.children||[]),D.return=j,D)}function Y(j,D,B,ee,fe){return D===null||D.tag!==7?(D=to(B,j.mode,ee,fe),D.return=j,D):(D=m(D,B),D.return=j,D)}function X(j,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Yp(""+D,j.mode,B),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ee:return B=Ih(D.type,D.key,D.props,null,j.mode,B),B.ref=$l(j,null,D),B.return=j,B;case we:return D=Jp(D,j.mode,B),D.return=j,D;case Qt:var ee=D._init;return X(j,ee(D._payload),B)}if(Qr(D)||ge(D))return D=to(D,j.mode,B,null),D.return=j,D;Zc(j,D)}return null}function Q(j,D,B,ee){var fe=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return fe!==null?null:C(j,D,""+B,ee);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Ee:return B.key===fe?x(j,D,B,ee):null;case we:return B.key===fe?$(j,D,B,ee):null;case Qt:return fe=B._init,Q(j,D,fe(B._payload),ee)}if(Qr(B)||ge(B))return fe!==null?null:Y(j,D,B,ee,null);Zc(j,B)}return null}function ae(j,D,B,ee,fe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return j=j.get(B)||null,C(D,j,""+ee,fe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ee:return j=j.get(ee.key===null?B:ee.key)||null,x(D,j,ee,fe);case we:return j=j.get(ee.key===null?B:ee.key)||null,$(D,j,ee,fe);case Qt:var _e=ee._init;return ae(j,D,B,_e(ee._payload),fe)}if(Qr(ee)||ge(ee))return j=j.get(B)||null,Y(D,j,ee,fe,null);Zc(D,ee)}return null}function he(j,D,B,ee){for(var fe=null,_e=null,ye=D,Ce=D=0,Mt=null;ye!==null&&Ce<B.length;Ce++){ye.index>Ce?(Mt=ye,ye=null):Mt=ye.sibling;var $e=Q(j,ye,B[Ce],ee);if($e===null){ye===null&&(ye=Mt);break}s&&ye&&$e.alternate===null&&o(j,ye),D=_($e,D,Ce),_e===null?fe=$e:_e.sibling=$e,_e=$e,ye=Mt}if(Ce===B.length)return u(j,ye),at&&Gs(j,Ce),fe;if(ye===null){for(;Ce<B.length;Ce++)ye=X(j,B[Ce],ee),ye!==null&&(D=_(ye,D,Ce),_e===null?fe=ye:_e.sibling=ye,_e=ye);return at&&Gs(j,Ce),fe}for(ye=d(j,ye);Ce<B.length;Ce++)Mt=ae(ye,j,Ce,B[Ce],ee),Mt!==null&&(s&&Mt.alternate!==null&&ye.delete(Mt.key===null?Ce:Mt.key),D=_(Mt,D,Ce),_e===null?fe=Mt:_e.sibling=Mt,_e=Mt);return s&&ye.forEach(function(Yi){return o(j,Yi)}),at&&Gs(j,Ce),fe}function de(j,D,B,ee){var fe=ge(B);if(typeof fe!="function")throw Error(t(150));if(B=fe.call(B),B==null)throw Error(t(151));for(var _e=fe=null,ye=D,Ce=D=0,Mt=null,$e=B.next();ye!==null&&!$e.done;Ce++,$e=B.next()){ye.index>Ce?(Mt=ye,ye=null):Mt=ye.sibling;var Yi=Q(j,ye,$e.value,ee);if(Yi===null){ye===null&&(ye=Mt);break}s&&ye&&Yi.alternate===null&&o(j,ye),D=_(Yi,D,Ce),_e===null?fe=Yi:_e.sibling=Yi,_e=Yi,ye=Mt}if($e.done)return u(j,ye),at&&Gs(j,Ce),fe;if(ye===null){for(;!$e.done;Ce++,$e=B.next())$e=X(j,$e.value,ee),$e!==null&&(D=_($e,D,Ce),_e===null?fe=$e:_e.sibling=$e,_e=$e);return at&&Gs(j,Ce),fe}for(ye=d(j,ye);!$e.done;Ce++,$e=B.next())$e=ae(ye,j,Ce,$e.value,ee),$e!==null&&(s&&$e.alternate!==null&&ye.delete($e.key===null?Ce:$e.key),D=_($e,D,Ce),_e===null?fe=$e:_e.sibling=$e,_e=$e);return s&&ye.forEach(function(DP){return o(j,DP)}),at&&Gs(j,Ce),fe}function gt(j,D,B,ee){if(typeof B=="object"&&B!==null&&B.type===b&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Ee:e:{for(var fe=B.key,_e=D;_e!==null;){if(_e.key===fe){if(fe=B.type,fe===b){if(_e.tag===7){u(j,_e.sibling),D=m(_e,B.props.children),D.return=j,j=D;break e}}else if(_e.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Qt&&iv(fe)===_e.type){u(j,_e.sibling),D=m(_e,B.props),D.ref=$l(j,_e,B),D.return=j,j=D;break e}u(j,_e);break}else o(j,_e);_e=_e.sibling}B.type===b?(D=to(B.props.children,j.mode,ee,B.key),D.return=j,j=D):(ee=Ih(B.type,B.key,B.props,null,j.mode,ee),ee.ref=$l(j,D,B),ee.return=j,j=ee)}return w(j);case we:e:{for(_e=B.key;D!==null;){if(D.key===_e)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){u(j,D.sibling),D=m(D,B.children||[]),D.return=j,j=D;break e}else{u(j,D);break}else o(j,D);D=D.sibling}D=Jp(B,j.mode,ee),D.return=j,j=D}return w(j);case Qt:return _e=B._init,gt(j,D,_e(B._payload),ee)}if(Qr(B))return he(j,D,B,ee);if(ge(B))return de(j,D,B,ee);Zc(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,D!==null&&D.tag===6?(u(j,D.sibling),D=m(D,B),D.return=j,j=D):(u(j,D),D=Yp(B,j.mode,ee),D.return=j,j=D),w(j)):u(j,D)}return gt}var fa=sv(!0),ov=sv(!1),eh=Ui(null),th=null,pa=null,op=null;function ap(){op=pa=th=null}function lp(s){var o=eh.current;rt(eh),s._currentValue=o}function up(s,o,u){for(;s!==null;){var d=s.alternate;if((s.childLanes&o)!==o?(s.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),s===u)break;s=s.return}}function ma(s,o){th=s,op=pa=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&o)!==0&&(gn=!0),s.firstContext=null)}function Gn(s){var o=s._currentValue;if(op!==s)if(s={context:s,memoizedValue:o,next:null},pa===null){if(th===null)throw Error(t(308));pa=s,th.dependencies={lanes:0,firstContext:s}}else pa=pa.next=s;return o}var Ks=null;function cp(s){Ks===null?Ks=[s]:Ks.push(s)}function av(s,o,u,d){var m=o.interleaved;return m===null?(u.next=u,cp(o)):(u.next=m.next,m.next=u),o.interleaved=u,li(s,d)}function li(s,o){s.lanes|=o;var u=s.alternate;for(u!==null&&(u.lanes|=o),u=s,s=s.return;s!==null;)s.childLanes|=o,u=s.alternate,u!==null&&(u.childLanes|=o),u=s,s=s.return;return u.tag===3?u.stateNode:null}var zi=!1;function hp(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lv(s,o){s=s.updateQueue,o.updateQueue===s&&(o.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function ui(s,o){return{eventTime:s,lane:o,tag:0,payload:null,callback:null,next:null}}function $i(s,o,u){var d=s.updateQueue;if(d===null)return null;if(d=d.shared,(ze&2)!==0){var m=d.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),d.pending=o,li(s,u)}return m=d.interleaved,m===null?(o.next=o,cp(d)):(o.next=m.next,m.next=o),d.interleaved=o,li(s,u)}function nh(s,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,bi(s,u)}}function uv(s,o){var u=s.updateQueue,d=s.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var m=null,_=null;if(u=u.firstBaseUpdate,u!==null){do{var w={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};_===null?m=_=w:_=_.next=w,u=u.next}while(u!==null);_===null?m=_=o:_=_.next=o}else m=_=o;u={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:d.shared,effects:d.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=o:s.next=o,u.lastBaseUpdate=o}function rh(s,o,u,d){var m=s.updateQueue;zi=!1;var _=m.firstBaseUpdate,w=m.lastBaseUpdate,C=m.shared.pending;if(C!==null){m.shared.pending=null;var x=C,$=x.next;x.next=null,w===null?_=$:w.next=$,w=x;var Y=s.alternate;Y!==null&&(Y=Y.updateQueue,C=Y.lastBaseUpdate,C!==w&&(C===null?Y.firstBaseUpdate=$:C.next=$,Y.lastBaseUpdate=x))}if(_!==null){var X=m.baseState;w=0,Y=$=x=null,C=_;do{var Q=C.lane,ae=C.eventTime;if((d&Q)===Q){Y!==null&&(Y=Y.next={eventTime:ae,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var he=s,de=C;switch(Q=o,ae=u,de.tag){case 1:if(he=de.payload,typeof he=="function"){X=he.call(ae,X,Q);break e}X=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,Q=typeof he=="function"?he.call(ae,X,Q):he,Q==null)break e;X=le({},X,Q);break e;case 2:zi=!0}}C.callback!==null&&C.lane!==0&&(s.flags|=64,Q=m.effects,Q===null?m.effects=[C]:Q.push(C))}else ae={eventTime:ae,lane:Q,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Y===null?($=Y=ae,x=X):Y=Y.next=ae,w|=Q;if(C=C.next,C===null){if(C=m.shared.pending,C===null)break;Q=C,C=Q.next,Q.next=null,m.lastBaseUpdate=Q,m.shared.pending=null}}while(!0);if(Y===null&&(x=X),m.baseState=x,m.firstBaseUpdate=$,m.lastBaseUpdate=Y,o=m.shared.interleaved,o!==null){m=o;do w|=m.lane,m=m.next;while(m!==o)}else _===null&&(m.shared.lanes=0);Js|=w,s.lanes=w,s.memoizedState=X}}function cv(s,o,u){if(s=o.effects,o.effects=null,s!==null)for(o=0;o<s.length;o++){var d=s[o],m=d.callback;if(m!==null){if(d.callback=null,d=u,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var Wl={},br=Ui(Wl),Hl=Ui(Wl),ql=Ui(Wl);function Qs(s){if(s===Wl)throw Error(t(174));return s}function dp(s,o){switch(et(ql,o),et(Hl,s),et(br,Wl),s=o.nodeType,s){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:St(null,"");break;default:s=s===8?o.parentNode:o,o=s.namespaceURI||null,s=s.tagName,o=St(o,s)}rt(br),et(br,o)}function ga(){rt(br),rt(Hl),rt(ql)}function hv(s){Qs(ql.current);var o=Qs(br.current),u=St(o,s.type);o!==u&&(et(Hl,s),et(br,u))}function fp(s){Hl.current===s&&(rt(br),rt(Hl))}var ut=Ui(0);function ih(s){for(var o=s;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var pp=[];function mp(){for(var s=0;s<pp.length;s++)pp[s]._workInProgressVersionPrimary=null;pp.length=0}var sh=oe.ReactCurrentDispatcher,gp=oe.ReactCurrentBatchConfig,Ys=0,ct=null,Rt=null,Dt=null,oh=!1,Gl=!1,Kl=0,nP=0;function Jt(){throw Error(t(321))}function _p(s,o){if(o===null)return!1;for(var u=0;u<o.length&&u<s.length;u++)if(!lr(s[u],o[u]))return!1;return!0}function yp(s,o,u,d,m,_){if(Ys=_,ct=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,sh.current=s===null||s.memoizedState===null?oP:aP,s=u(d,m),Gl){_=0;do{if(Gl=!1,Kl=0,25<=_)throw Error(t(301));_+=1,Dt=Rt=null,o.updateQueue=null,sh.current=lP,s=u(d,m)}while(Gl)}if(sh.current=uh,o=Rt!==null&&Rt.next!==null,Ys=0,Dt=Rt=ct=null,oh=!1,o)throw Error(t(300));return s}function vp(){var s=Kl!==0;return Kl=0,s}function Or(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ct.memoizedState=Dt=s:Dt=Dt.next=s,Dt}function Kn(){if(Rt===null){var s=ct.alternate;s=s!==null?s.memoizedState:null}else s=Rt.next;var o=Dt===null?ct.memoizedState:Dt.next;if(o!==null)Dt=o,Rt=s;else{if(s===null)throw Error(t(310));Rt=s,s={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Dt===null?ct.memoizedState=Dt=s:Dt=Dt.next=s}return Dt}function Ql(s,o){return typeof o=="function"?o(s):o}function Ep(s){var o=Kn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=s;var d=Rt,m=d.baseQueue,_=u.pending;if(_!==null){if(m!==null){var w=m.next;m.next=_.next,_.next=w}d.baseQueue=m=_,u.pending=null}if(m!==null){_=m.next,d=d.baseState;var C=w=null,x=null,$=_;do{var Y=$.lane;if((Ys&Y)===Y)x!==null&&(x=x.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),d=$.hasEagerState?$.eagerState:s(d,$.action);else{var X={lane:Y,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};x===null?(C=x=X,w=d):x=x.next=X,ct.lanes|=Y,Js|=Y}$=$.next}while($!==null&&$!==_);x===null?w=d:x.next=C,lr(d,o.memoizedState)||(gn=!0),o.memoizedState=d,o.baseState=w,o.baseQueue=x,u.lastRenderedState=d}if(s=u.interleaved,s!==null){m=s;do _=m.lane,ct.lanes|=_,Js|=_,m=m.next;while(m!==s)}else m===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function wp(s){var o=Kn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=s;var d=u.dispatch,m=u.pending,_=o.memoizedState;if(m!==null){u.pending=null;var w=m=m.next;do _=s(_,w.action),w=w.next;while(w!==m);lr(_,o.memoizedState)||(gn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),u.lastRenderedState=_}return[_,d]}function dv(){}function fv(s,o){var u=ct,d=Kn(),m=o(),_=!lr(d.memoizedState,m);if(_&&(d.memoizedState=m,gn=!0),d=d.queue,Tp(gv.bind(null,u,d,s),[s]),d.getSnapshot!==o||_||Dt!==null&&Dt.memoizedState.tag&1){if(u.flags|=2048,Yl(9,mv.bind(null,u,d,m,o),void 0,null),Lt===null)throw Error(t(349));(Ys&30)!==0||pv(u,o,m)}return m}function pv(s,o,u){s.flags|=16384,s={getSnapshot:o,value:u},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.stores=[s]):(u=o.stores,u===null?o.stores=[s]:u.push(s))}function mv(s,o,u,d){o.value=u,o.getSnapshot=d,_v(o)&&yv(s)}function gv(s,o,u){return u(function(){_v(o)&&yv(s)})}function _v(s){var o=s.getSnapshot;s=s.value;try{var u=o();return!lr(s,u)}catch{return!0}}function yv(s){var o=li(s,1);o!==null&&fr(o,s,1,-1)}function vv(s){var o=Or();return typeof s=="function"&&(s=s()),o.memoizedState=o.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:s},o.queue=s,s=s.dispatch=sP.bind(null,ct,s),[o.memoizedState,s]}function Yl(s,o,u,d){return s={tag:s,create:o,destroy:u,deps:d,next:null},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.lastEffect=s.next=s):(u=o.lastEffect,u===null?o.lastEffect=s.next=s:(d=u.next,u.next=s,s.next=d,o.lastEffect=s)),s}function Ev(){return Kn().memoizedState}function ah(s,o,u,d){var m=Or();ct.flags|=s,m.memoizedState=Yl(1|o,u,void 0,d===void 0?null:d)}function lh(s,o,u,d){var m=Kn();d=d===void 0?null:d;var _=void 0;if(Rt!==null){var w=Rt.memoizedState;if(_=w.destroy,d!==null&&_p(d,w.deps)){m.memoizedState=Yl(o,u,_,d);return}}ct.flags|=s,m.memoizedState=Yl(1|o,u,_,d)}function wv(s,o){return ah(8390656,8,s,o)}function Tp(s,o){return lh(2048,8,s,o)}function Tv(s,o){return lh(4,2,s,o)}function Iv(s,o){return lh(4,4,s,o)}function Sv(s,o){if(typeof o=="function")return s=s(),o(s),function(){o(null)};if(o!=null)return s=s(),o.current=s,function(){o.current=null}}function Cv(s,o,u){return u=u!=null?u.concat([s]):null,lh(4,4,Sv.bind(null,o,s),u)}function Ip(){}function Rv(s,o){var u=Kn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&_p(o,d[1])?d[0]:(u.memoizedState=[s,o],s)}function Av(s,o){var u=Kn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&_p(o,d[1])?d[0]:(s=s(),u.memoizedState=[s,o],s)}function Pv(s,o,u){return(Ys&21)===0?(s.baseState&&(s.baseState=!1,gn=!0),s.memoizedState=u):(lr(u,o)||(u=Us(),ct.lanes|=u,Js|=u,s.baseState=!0),o)}function rP(s,o){var u=Fe;Fe=u!==0&&4>u?u:4,s(!0);var d=gp.transition;gp.transition={};try{s(!1),o()}finally{Fe=u,gp.transition=d}}function kv(){return Kn().memoizedState}function iP(s,o,u){var d=Gi(s);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},Nv(s))xv(o,u);else if(u=av(s,o,u,d),u!==null){var m=hn();fr(u,s,d,m),bv(u,o,d)}}function sP(s,o,u){var d=Gi(s),m={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(Nv(s))xv(o,m);else{var _=s.alternate;if(s.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,C=_(w,u);if(m.hasEagerState=!0,m.eagerState=C,lr(C,w)){var x=o.interleaved;x===null?(m.next=m,cp(o)):(m.next=x.next,x.next=m),o.interleaved=m;return}}catch{}finally{}u=av(s,o,m,d),u!==null&&(m=hn(),fr(u,s,d,m),bv(u,o,d))}}function Nv(s){var o=s.alternate;return s===ct||o!==null&&o===ct}function xv(s,o){Gl=oh=!0;var u=s.pending;u===null?o.next=o:(o.next=u.next,u.next=o),s.pending=o}function bv(s,o,u){if((u&4194240)!==0){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,bi(s,u)}}var uh={readContext:Gn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},oP={readContext:Gn,useCallback:function(s,o){return Or().memoizedState=[s,o===void 0?null:o],s},useContext:Gn,useEffect:wv,useImperativeHandle:function(s,o,u){return u=u!=null?u.concat([s]):null,ah(4194308,4,Sv.bind(null,o,s),u)},useLayoutEffect:function(s,o){return ah(4194308,4,s,o)},useInsertionEffect:function(s,o){return ah(4,2,s,o)},useMemo:function(s,o){var u=Or();return o=o===void 0?null:o,s=s(),u.memoizedState=[s,o],s},useReducer:function(s,o,u){var d=Or();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:o},d.queue=s,s=s.dispatch=iP.bind(null,ct,s),[d.memoizedState,s]},useRef:function(s){var o=Or();return s={current:s},o.memoizedState=s},useState:vv,useDebugValue:Ip,useDeferredValue:function(s){return Or().memoizedState=s},useTransition:function(){var s=vv(!1),o=s[0];return s=rP.bind(null,s[1]),Or().memoizedState=s,[o,s]},useMutableSource:function(){},useSyncExternalStore:function(s,o,u){var d=ct,m=Or();if(at){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),Lt===null)throw Error(t(349));(Ys&30)!==0||pv(d,o,u)}m.memoizedState=u;var _={value:u,getSnapshot:o};return m.queue=_,wv(gv.bind(null,d,_,s),[s]),d.flags|=2048,Yl(9,mv.bind(null,d,_,u,o),void 0,null),u},useId:function(){var s=Or(),o=Lt.identifierPrefix;if(at){var u=ai,d=oi;u=(d&~(1<<32-ln(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=Kl++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=nP++,o=":"+o+"r"+u.toString(32)+":";return s.memoizedState=o},unstable_isNewReconciler:!1},aP={readContext:Gn,useCallback:Rv,useContext:Gn,useEffect:Tp,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:Iv,useMemo:Av,useReducer:Ep,useRef:Ev,useState:function(){return Ep(Ql)},useDebugValue:Ip,useDeferredValue:function(s){var o=Kn();return Pv(o,Rt.memoizedState,s)},useTransition:function(){var s=Ep(Ql)[0],o=Kn().memoizedState;return[s,o]},useMutableSource:dv,useSyncExternalStore:fv,useId:kv,unstable_isNewReconciler:!1},lP={readContext:Gn,useCallback:Rv,useContext:Gn,useEffect:Tp,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:Iv,useMemo:Av,useReducer:wp,useRef:Ev,useState:function(){return wp(Ql)},useDebugValue:Ip,useDeferredValue:function(s){var o=Kn();return Rt===null?o.memoizedState=s:Pv(o,Rt.memoizedState,s)},useTransition:function(){var s=wp(Ql)[0],o=Kn().memoizedState;return[s,o]},useMutableSource:dv,useSyncExternalStore:fv,useId:kv,unstable_isNewReconciler:!1};function cr(s,o){if(s&&s.defaultProps){o=le({},o),s=s.defaultProps;for(var u in s)o[u]===void 0&&(o[u]=s[u]);return o}return o}function Sp(s,o,u,d){o=s.memoizedState,u=u(d,o),u=u==null?o:le({},o,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var ch={isMounted:function(s){return(s=s._reactInternals)?tr(s)===s:!1},enqueueSetState:function(s,o,u){s=s._reactInternals;var d=hn(),m=Gi(s),_=ui(d,m);_.payload=o,u!=null&&(_.callback=u),o=$i(s,_,m),o!==null&&(fr(o,s,m,d),nh(o,s,m))},enqueueReplaceState:function(s,o,u){s=s._reactInternals;var d=hn(),m=Gi(s),_=ui(d,m);_.tag=1,_.payload=o,u!=null&&(_.callback=u),o=$i(s,_,m),o!==null&&(fr(o,s,m,d),nh(o,s,m))},enqueueForceUpdate:function(s,o){s=s._reactInternals;var u=hn(),d=Gi(s),m=ui(u,d);m.tag=2,o!=null&&(m.callback=o),o=$i(s,m,d),o!==null&&(fr(o,s,d,u),nh(o,s,d))}};function Ov(s,o,u,d,m,_,w){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(d,_,w):o.prototype&&o.prototype.isPureReactComponent?!Ml(u,d)||!Ml(m,_):!0}function Dv(s,o,u){var d=!1,m=ji,_=o.contextType;return typeof _=="object"&&_!==null?_=Gn(_):(m=mn(o)?Hs:Yt.current,d=o.contextTypes,_=(d=d!=null)?ua(s,m):ji),o=new o(u,_),s.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ch,s.stateNode=o,o._reactInternals=s,d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=m,s.__reactInternalMemoizedMaskedChildContext=_),o}function Lv(s,o,u,d){s=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==s&&ch.enqueueReplaceState(o,o.state,null)}function Cp(s,o,u,d){var m=s.stateNode;m.props=u,m.state=s.memoizedState,m.refs={},hp(s);var _=o.contextType;typeof _=="object"&&_!==null?m.context=Gn(_):(_=mn(o)?Hs:Yt.current,m.context=ua(s,_)),m.state=s.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Sp(s,o,_,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&ch.enqueueReplaceState(m,m.state,null),rh(s,u,m,d),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308)}function _a(s,o){try{var u="",d=o;do u+=xe(d),d=d.return;while(d);var m=u}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:s,source:o,stack:m,digest:null}}function Rp(s,o,u){return{value:s,source:null,stack:u??null,digest:o??null}}function Ap(s,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var uP=typeof WeakMap=="function"?WeakMap:Map;function Mv(s,o,u){u=ui(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){_h||(_h=!0,zp=d),Ap(s,o)},u}function Vv(s,o,u){u=ui(-1,u),u.tag=3;var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=o.value;u.payload=function(){return d(m)},u.callback=function(){Ap(s,o)}}var _=s.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(u.callback=function(){Ap(s,o),typeof d!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),u}function Fv(s,o,u){var d=s.pingCache;if(d===null){d=s.pingCache=new uP;var m=new Set;d.set(o,m)}else m=d.get(o),m===void 0&&(m=new Set,d.set(o,m));m.has(u)||(m.add(u),s=IP.bind(null,s,o,u),o.then(s,s))}function Uv(s){do{var o;if((o=s.tag===13)&&(o=s.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return s;s=s.return}while(s!==null);return null}function jv(s,o,u,d,m){return(s.mode&1)===0?(s===o?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=ui(-1,1),o.tag=2,$i(u,o,1))),u.lanes|=1),s):(s.flags|=65536,s.lanes=m,s)}var cP=oe.ReactCurrentOwner,gn=!1;function cn(s,o,u,d){o.child=s===null?ov(o,null,u,d):fa(o,s.child,u,d)}function Bv(s,o,u,d,m){u=u.render;var _=o.ref;return ma(o,m),d=yp(s,o,u,d,_,m),u=vp(),s!==null&&!gn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~m,ci(s,o,m)):(at&&u&&tp(o),o.flags|=1,cn(s,o,d,m),o.child)}function zv(s,o,u,d,m){if(s===null){var _=u.type;return typeof _=="function"&&!Qp(_)&&_.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=_,$v(s,o,_,d,m)):(s=Ih(u.type,null,d,o,o.mode,m),s.ref=o.ref,s.return=o,o.child=s)}if(_=s.child,(s.lanes&m)===0){var w=_.memoizedProps;if(u=u.compare,u=u!==null?u:Ml,u(w,d)&&s.ref===o.ref)return ci(s,o,m)}return o.flags|=1,s=Qi(_,d),s.ref=o.ref,s.return=o,o.child=s}function $v(s,o,u,d,m){if(s!==null){var _=s.memoizedProps;if(Ml(_,d)&&s.ref===o.ref)if(gn=!1,o.pendingProps=d=_,(s.lanes&m)!==0)(s.flags&131072)!==0&&(gn=!0);else return o.lanes=s.lanes,ci(s,o,m)}return Pp(s,o,u,d,m)}function Wv(s,o,u){var d=o.pendingProps,m=d.children,_=s!==null?s.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(va,Mn),Mn|=u;else{if((u&1073741824)===0)return s=_!==null?_.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:s,cachePool:null,transitions:null},o.updateQueue=null,et(va,Mn),Mn|=s,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:u,et(va,Mn),Mn|=d}else _!==null?(d=_.baseLanes|u,o.memoizedState=null):d=u,et(va,Mn),Mn|=d;return cn(s,o,m,u),o.child}function Hv(s,o){var u=o.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Pp(s,o,u,d,m){var _=mn(u)?Hs:Yt.current;return _=ua(o,_),ma(o,m),u=yp(s,o,u,d,_,m),d=vp(),s!==null&&!gn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~m,ci(s,o,m)):(at&&d&&tp(o),o.flags|=1,cn(s,o,u,m),o.child)}function qv(s,o,u,d,m){if(mn(u)){var _=!0;Kc(o)}else _=!1;if(ma(o,m),o.stateNode===null)dh(s,o),Dv(o,u,d),Cp(o,u,d,m),d=!0;else if(s===null){var w=o.stateNode,C=o.memoizedProps;w.props=C;var x=w.context,$=u.contextType;typeof $=="object"&&$!==null?$=Gn($):($=mn(u)?Hs:Yt.current,$=ua(o,$));var Y=u.getDerivedStateFromProps,X=typeof Y=="function"||typeof w.getSnapshotBeforeUpdate=="function";X||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==d||x!==$)&&Lv(o,w,d,$),zi=!1;var Q=o.memoizedState;w.state=Q,rh(o,d,w,m),x=o.memoizedState,C!==d||Q!==x||pn.current||zi?(typeof Y=="function"&&(Sp(o,u,Y,d),x=o.memoizedState),(C=zi||Ov(o,u,C,d,Q,x,$))?(X||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=x),w.props=d,w.state=x,w.context=$,d=C):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{w=o.stateNode,lv(s,o),C=o.memoizedProps,$=o.type===o.elementType?C:cr(o.type,C),w.props=$,X=o.pendingProps,Q=w.context,x=u.contextType,typeof x=="object"&&x!==null?x=Gn(x):(x=mn(u)?Hs:Yt.current,x=ua(o,x));var ae=u.getDerivedStateFromProps;(Y=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==X||Q!==x)&&Lv(o,w,d,x),zi=!1,Q=o.memoizedState,w.state=Q,rh(o,d,w,m);var he=o.memoizedState;C!==X||Q!==he||pn.current||zi?(typeof ae=="function"&&(Sp(o,u,ae,d),he=o.memoizedState),($=zi||Ov(o,u,$,d,Q,he,x)||!1)?(Y||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,he,x),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,he,x)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===s.memoizedProps&&Q===s.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===s.memoizedProps&&Q===s.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=he),w.props=d,w.state=he,w.context=x,d=$):(typeof w.componentDidUpdate!="function"||C===s.memoizedProps&&Q===s.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===s.memoizedProps&&Q===s.memoizedState||(o.flags|=1024),d=!1)}return kp(s,o,u,d,_,m)}function kp(s,o,u,d,m,_){Hv(s,o);var w=(o.flags&128)!==0;if(!d&&!w)return m&&Jy(o,u,!1),ci(s,o,_);d=o.stateNode,cP.current=o;var C=w&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,s!==null&&w?(o.child=fa(o,s.child,null,_),o.child=fa(o,null,C,_)):cn(s,o,C,_),o.memoizedState=d.state,m&&Jy(o,u,!0),o.child}function Gv(s){var o=s.stateNode;o.pendingContext?Qy(s,o.pendingContext,o.pendingContext!==o.context):o.context&&Qy(s,o.context,!1),dp(s,o.containerInfo)}function Kv(s,o,u,d,m){return da(),sp(m),o.flags|=256,cn(s,o,u,d),o.child}var Np={dehydrated:null,treeContext:null,retryLane:0};function xp(s){return{baseLanes:s,cachePool:null,transitions:null}}function Qv(s,o,u){var d=o.pendingProps,m=ut.current,_=!1,w=(o.flags&128)!==0,C;if((C=w)||(C=s!==null&&s.memoizedState===null?!1:(m&2)!==0),C?(_=!0,o.flags&=-129):(s===null||s.memoizedState!==null)&&(m|=1),et(ut,m&1),s===null)return ip(o),s=o.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((o.mode&1)===0?o.lanes=1:s.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=d.children,s=d.fallback,_?(d=o.mode,_=o.child,w={mode:"hidden",children:w},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=Sh(w,d,0,null),s=to(s,d,u,null),_.return=o,s.return=o,_.sibling=s,o.child=_,o.child.memoizedState=xp(u),o.memoizedState=Np,s):bp(o,w));if(m=s.memoizedState,m!==null&&(C=m.dehydrated,C!==null))return hP(s,o,w,d,C,m,u);if(_){_=d.fallback,w=o.mode,m=s.child,C=m.sibling;var x={mode:"hidden",children:d.children};return(w&1)===0&&o.child!==m?(d=o.child,d.childLanes=0,d.pendingProps=x,o.deletions=null):(d=Qi(m,x),d.subtreeFlags=m.subtreeFlags&14680064),C!==null?_=Qi(C,_):(_=to(_,w,u,null),_.flags|=2),_.return=o,d.return=o,d.sibling=_,o.child=d,d=_,_=o.child,w=s.child.memoizedState,w=w===null?xp(u):{baseLanes:w.baseLanes|u,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=s.childLanes&~u,o.memoizedState=Np,d}return _=s.child,s=_.sibling,d=Qi(_,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=u),d.return=o,d.sibling=null,s!==null&&(u=o.deletions,u===null?(o.deletions=[s],o.flags|=16):u.push(s)),o.child=d,o.memoizedState=null,d}function bp(s,o){return o=Sh({mode:"visible",children:o},s.mode,0,null),o.return=s,s.child=o}function hh(s,o,u,d){return d!==null&&sp(d),fa(o,s.child,null,u),s=bp(o,o.pendingProps.children),s.flags|=2,o.memoizedState=null,s}function hP(s,o,u,d,m,_,w){if(u)return o.flags&256?(o.flags&=-257,d=Rp(Error(t(422))),hh(s,o,w,d)):o.memoizedState!==null?(o.child=s.child,o.flags|=128,null):(_=d.fallback,m=o.mode,d=Sh({mode:"visible",children:d.children},m,0,null),_=to(_,m,w,null),_.flags|=2,d.return=o,_.return=o,d.sibling=_,o.child=d,(o.mode&1)!==0&&fa(o,s.child,null,w),o.child.memoizedState=xp(w),o.memoizedState=Np,_);if((o.mode&1)===0)return hh(s,o,w,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var C=d.dgst;return d=C,_=Error(t(419)),d=Rp(_,d,void 0),hh(s,o,w,d)}if(C=(w&s.childLanes)!==0,gn||C){if(d=Lt,d!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|w))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,li(s,m),fr(d,s,m,-1))}return Kp(),d=Rp(Error(t(421))),hh(s,o,w,d)}return m.data==="$?"?(o.flags|=128,o.child=s.child,o=SP.bind(null,s),m._reactRetry=o,null):(s=_.treeContext,Ln=Fi(m.nextSibling),Dn=o,at=!0,ur=null,s!==null&&(Hn[qn++]=oi,Hn[qn++]=ai,Hn[qn++]=qs,oi=s.id,ai=s.overflow,qs=o),o=bp(o,d.children),o.flags|=4096,o)}function Yv(s,o,u){s.lanes|=o;var d=s.alternate;d!==null&&(d.lanes|=o),up(s.return,o,u)}function Op(s,o,u,d,m){var _=s.memoizedState;_===null?s.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:m}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=u,_.tailMode=m)}function Jv(s,o,u){var d=o.pendingProps,m=d.revealOrder,_=d.tail;if(cn(s,o,d.children,u),d=ut.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=o.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Yv(s,u,o);else if(s.tag===19)Yv(s,u,o);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break e;for(;s.sibling===null;){if(s.return===null||s.return===o)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}d&=1}if(et(ut,d),(o.mode&1)===0)o.memoizedState=null;else switch(m){case"forwards":for(u=o.child,m=null;u!==null;)s=u.alternate,s!==null&&ih(s)===null&&(m=u),u=u.sibling;u=m,u===null?(m=o.child,o.child=null):(m=u.sibling,u.sibling=null),Op(o,!1,m,u,_);break;case"backwards":for(u=null,m=o.child,o.child=null;m!==null;){if(s=m.alternate,s!==null&&ih(s)===null){o.child=m;break}s=m.sibling,m.sibling=u,u=m,m=s}Op(o,!0,u,null,_);break;case"together":Op(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function dh(s,o){(o.mode&1)===0&&s!==null&&(s.alternate=null,o.alternate=null,o.flags|=2)}function ci(s,o,u){if(s!==null&&(o.dependencies=s.dependencies),Js|=o.lanes,(u&o.childLanes)===0)return null;if(s!==null&&o.child!==s.child)throw Error(t(153));if(o.child!==null){for(s=o.child,u=Qi(s,s.pendingProps),o.child=u,u.return=o;s.sibling!==null;)s=s.sibling,u=u.sibling=Qi(s,s.pendingProps),u.return=o;u.sibling=null}return o.child}function dP(s,o,u){switch(o.tag){case 3:Gv(o),da();break;case 5:hv(o);break;case 1:mn(o.type)&&Kc(o);break;case 4:dp(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,m=o.memoizedProps.value;et(eh,d._currentValue),d._currentValue=m;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(et(ut,ut.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?Qv(s,o,u):(et(ut,ut.current&1),s=ci(s,o,u),s!==null?s.sibling:null);et(ut,ut.current&1);break;case 19:if(d=(u&o.childLanes)!==0,(s.flags&128)!==0){if(d)return Jv(s,o,u);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),et(ut,ut.current),d)break;return null;case 22:case 23:return o.lanes=0,Wv(s,o,u)}return ci(s,o,u)}var Xv,Dp,Zv,eE;Xv=function(s,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Dp=function(){},Zv=function(s,o,u,d){var m=s.memoizedProps;if(m!==d){s=o.stateNode,Qs(br.current);var _=null;switch(u){case"input":m=Ps(s,m),d=Ps(s,d),_=[];break;case"select":m=le({},m,{value:void 0}),d=le({},d,{value:void 0}),_=[];break;case"textarea":m=hl(s,m),d=hl(s,d),_=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(s.onclick=Hc)}_l(u,d);var w;u=null;for($ in m)if(!d.hasOwnProperty($)&&m.hasOwnProperty($)&&m[$]!=null)if($==="style"){var C=m[$];for(w in C)C.hasOwnProperty(w)&&(u||(u={}),u[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(i.hasOwnProperty($)?_||(_=[]):(_=_||[]).push($,null));for($ in d){var x=d[$];if(C=m!=null?m[$]:void 0,d.hasOwnProperty($)&&x!==C&&(x!=null||C!=null))if($==="style")if(C){for(w in C)!C.hasOwnProperty(w)||x&&x.hasOwnProperty(w)||(u||(u={}),u[w]="");for(w in x)x.hasOwnProperty(w)&&C[w]!==x[w]&&(u||(u={}),u[w]=x[w])}else u||(_||(_=[]),_.push($,u)),u=x;else $==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,C=C?C.__html:void 0,x!=null&&C!==x&&(_=_||[]).push($,x)):$==="children"?typeof x!="string"&&typeof x!="number"||(_=_||[]).push($,""+x):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(i.hasOwnProperty($)?(x!=null&&$==="onScroll"&&nt("scroll",s),_||C===x||(_=[])):(_=_||[]).push($,x))}u&&(_=_||[]).push("style",u);var $=_;(o.updateQueue=$)&&(o.flags|=4)}},eE=function(s,o,u,d){u!==d&&(o.flags|=4)};function Jl(s,o){if(!at)switch(s.tailMode){case"hidden":o=s.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||s.tail===null?s.tail=null:s.tail.sibling=null:d.sibling=null}}function Xt(s){var o=s.alternate!==null&&s.alternate.child===s.child,u=0,d=0;if(o)for(var m=s.child;m!==null;)u|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=s,m=m.sibling;else for(m=s.child;m!==null;)u|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=s,m=m.sibling;return s.subtreeFlags|=d,s.childLanes=u,o}function fP(s,o,u){var d=o.pendingProps;switch(np(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(o),null;case 1:return mn(o.type)&&Gc(),Xt(o),null;case 3:return d=o.stateNode,ga(),rt(pn),rt(Yt),mp(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(s===null||s.child===null)&&(Xc(o)?o.flags|=4:s===null||s.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,ur!==null&&(Hp(ur),ur=null))),Dp(s,o),Xt(o),null;case 5:fp(o);var m=Qs(ql.current);if(u=o.type,s!==null&&o.stateNode!=null)Zv(s,o,u,d,m),s.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return Xt(o),null}if(s=Qs(br.current),Xc(o)){d=o.stateNode,u=o.type;var _=o.memoizedProps;switch(d[xr]=o,d[Bl]=_,s=(o.mode&1)!==0,u){case"dialog":nt("cancel",d),nt("close",d);break;case"iframe":case"object":case"embed":nt("load",d);break;case"video":case"audio":for(m=0;m<Fl.length;m++)nt(Fl[m],d);break;case"source":nt("error",d);break;case"img":case"image":case"link":nt("error",d),nt("load",d);break;case"details":nt("toggle",d);break;case"input":xo(d,_),nt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},nt("invalid",d);break;case"textarea":Oo(d,_),nt("invalid",d)}_l(u,_),m=null;for(var w in _)if(_.hasOwnProperty(w)){var C=_[w];w==="children"?typeof C=="string"?d.textContent!==C&&(_.suppressHydrationWarning!==!0&&Wc(d.textContent,C,s),m=["children",C]):typeof C=="number"&&d.textContent!==""+C&&(_.suppressHydrationWarning!==!0&&Wc(d.textContent,C,s),m=["children",""+C]):i.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&nt("scroll",d)}switch(u){case"input":Kr(d),gc(d,_,!0);break;case"textarea":Kr(d),dl(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=Hc)}d=m,o.updateQueue=d,d!==null&&(o.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=It(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=w.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof d.is=="string"?s=w.createElement(u,{is:d.is}):(s=w.createElement(u),u==="select"&&(w=s,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):s=w.createElementNS(s,u),s[xr]=o,s[Bl]=d,Xv(s,o,!1,!1),o.stateNode=s;e:{switch(w=yl(u,d),u){case"dialog":nt("cancel",s),nt("close",s),m=d;break;case"iframe":case"object":case"embed":nt("load",s),m=d;break;case"video":case"audio":for(m=0;m<Fl.length;m++)nt(Fl[m],s);m=d;break;case"source":nt("error",s),m=d;break;case"img":case"image":case"link":nt("error",s),nt("load",s),m=d;break;case"details":nt("toggle",s),m=d;break;case"input":xo(s,d),m=Ps(s,d),nt("invalid",s);break;case"option":m=d;break;case"select":s._wrapperState={wasMultiple:!!d.multiple},m=le({},d,{value:void 0}),nt("invalid",s);break;case"textarea":Oo(s,d),m=hl(s,d),nt("invalid",s);break;default:m=d}_l(u,m),C=m;for(_ in C)if(C.hasOwnProperty(_)){var x=C[_];_==="style"?ml(s,x):_==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&fl(s,x)):_==="children"?typeof x=="string"?(u!=="textarea"||x!=="")&&Ai(s,x):typeof x=="number"&&Ai(s,""+x):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(i.hasOwnProperty(_)?x!=null&&_==="onScroll"&&nt("scroll",s):x!=null&&Z(s,_,x,w))}switch(u){case"input":Kr(s),gc(s,d,!1);break;case"textarea":Kr(s),dl(s);break;case"option":d.value!=null&&s.setAttribute("value",""+He(d.value));break;case"select":s.multiple=!!d.multiple,_=d.value,_!=null?Yr(s,!!d.multiple,_,!1):d.defaultValue!=null&&Yr(s,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(s.onclick=Hc)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Xt(o),null;case 6:if(s&&o.stateNode!=null)eE(s,o,s.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(u=Qs(ql.current),Qs(br.current),Xc(o)){if(d=o.stateNode,u=o.memoizedProps,d[xr]=o,(_=d.nodeValue!==u)&&(s=Dn,s!==null))switch(s.tag){case 3:Wc(d.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&Wc(d.nodeValue,u,(s.mode&1)!==0)}_&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[xr]=o,o.stateNode=d}return Xt(o),null;case 13:if(rt(ut),d=o.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(at&&Ln!==null&&(o.mode&1)!==0&&(o.flags&128)===0)rv(),da(),o.flags|=98560,_=!1;else if(_=Xc(o),d!==null&&d.dehydrated!==null){if(s===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[xr]=o}else da(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Xt(o),_=!1}else ur!==null&&(Hp(ur),ur=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(d=d!==null,d!==(s!==null&&s.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(s===null||(ut.current&1)!==0?At===0&&(At=3):Kp())),o.updateQueue!==null&&(o.flags|=4),Xt(o),null);case 4:return ga(),Dp(s,o),s===null&&Ul(o.stateNode.containerInfo),Xt(o),null;case 10:return lp(o.type._context),Xt(o),null;case 17:return mn(o.type)&&Gc(),Xt(o),null;case 19:if(rt(ut),_=o.memoizedState,_===null)return Xt(o),null;if(d=(o.flags&128)!==0,w=_.rendering,w===null)if(d)Jl(_,!1);else{if(At!==0||s!==null&&(s.flags&128)!==0)for(s=o.child;s!==null;){if(w=ih(s),w!==null){for(o.flags|=128,Jl(_,!1),d=w.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)_=u,s=d,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=s,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,s=w.dependencies,_.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return et(ut,ut.current&1|2),o.child}s=s.sibling}_.tail!==null&&Ze()>Ea&&(o.flags|=128,d=!0,Jl(_,!1),o.lanes=4194304)}else{if(!d)if(s=ih(w),s!==null){if(o.flags|=128,d=!0,u=s.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),Jl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!at)return Xt(o),null}else 2*Ze()-_.renderingStartTime>Ea&&u!==1073741824&&(o.flags|=128,d=!0,Jl(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(u=_.last,u!==null?u.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Ze(),o.sibling=null,u=ut.current,et(ut,d?u&1|2:u&1),o):(Xt(o),null);case 22:case 23:return Gp(),d=o.memoizedState!==null,s!==null&&s.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(Mn&1073741824)!==0&&(Xt(o),o.subtreeFlags&6&&(o.flags|=8192)):Xt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function pP(s,o){switch(np(o),o.tag){case 1:return mn(o.type)&&Gc(),s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 3:return ga(),rt(pn),rt(Yt),mp(),s=o.flags,(s&65536)!==0&&(s&128)===0?(o.flags=s&-65537|128,o):null;case 5:return fp(o),null;case 13:if(rt(ut),s=o.memoizedState,s!==null&&s.dehydrated!==null){if(o.alternate===null)throw Error(t(340));da()}return s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 19:return rt(ut),null;case 4:return ga(),null;case 10:return lp(o.type._context),null;case 22:case 23:return Gp(),null;case 24:return null;default:return null}}var fh=!1,Zt=!1,mP=typeof WeakSet=="function"?WeakSet:Set,ce=null;function ya(s,o){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){dt(s,o,d)}else u.current=null}function Lp(s,o,u){try{u()}catch(d){dt(s,o,d)}}var tE=!1;function gP(s,o){if(Gf=Li,s=Oy(),Uf(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var m=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{u.nodeType,_.nodeType}catch{u=null;break e}var w=0,C=-1,x=-1,$=0,Y=0,X=s,Q=null;t:for(;;){for(var ae;X!==u||m!==0&&X.nodeType!==3||(C=w+m),X!==_||d!==0&&X.nodeType!==3||(x=w+d),X.nodeType===3&&(w+=X.nodeValue.length),(ae=X.firstChild)!==null;)Q=X,X=ae;for(;;){if(X===s)break t;if(Q===u&&++$===m&&(C=w),Q===_&&++Y===d&&(x=w),(ae=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=ae}u=C===-1||x===-1?null:{start:C,end:x}}else u=null}u=u||{start:0,end:0}}else u=null;for(Kf={focusedElem:s,selectionRange:u},Li=!1,ce=o;ce!==null;)if(o=ce,s=o.child,(o.subtreeFlags&1028)!==0&&s!==null)s.return=o,ce=s;else for(;ce!==null;){o=ce;try{var he=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var de=he.memoizedProps,gt=he.memoizedState,j=o.stateNode,D=j.getSnapshotBeforeUpdate(o.elementType===o.type?de:cr(o.type,de),gt);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var B=o.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){dt(o,o.return,ee)}if(s=o.sibling,s!==null){s.return=o.return,ce=s;break}ce=o.return}return he=tE,tE=!1,he}function Xl(s,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&s)===s){var _=m.destroy;m.destroy=void 0,_!==void 0&&Lp(o,u,_)}m=m.next}while(m!==d)}}function ph(s,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&s)===s){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function Mp(s){var o=s.ref;if(o!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof o=="function"?o(s):o.current=s}}function nE(s){var o=s.alternate;o!==null&&(s.alternate=null,nE(o)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(o=s.stateNode,o!==null&&(delete o[xr],delete o[Bl],delete o[Xf],delete o[XA],delete o[ZA])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function rE(s){return s.tag===5||s.tag===3||s.tag===4}function iE(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||rE(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Vp(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(s,o):u.insertBefore(s,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(s,u)):(o=u,o.appendChild(s)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Hc));else if(d!==4&&(s=s.child,s!==null))for(Vp(s,o,u),s=s.sibling;s!==null;)Vp(s,o,u),s=s.sibling}function Fp(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.insertBefore(s,o):u.appendChild(s);else if(d!==4&&(s=s.child,s!==null))for(Fp(s,o,u),s=s.sibling;s!==null;)Fp(s,o,u),s=s.sibling}var $t=null,hr=!1;function Wi(s,o,u){for(u=u.child;u!==null;)sE(s,o,u),u=u.sibling}function sE(s,o,u){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Vs,u)}catch{}switch(u.tag){case 5:Zt||ya(u,o);case 6:var d=$t,m=hr;$t=null,Wi(s,o,u),$t=d,hr=m,$t!==null&&(hr?(s=$t,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):$t.removeChild(u.stateNode));break;case 18:$t!==null&&(hr?(s=$t,u=u.stateNode,s.nodeType===8?Jf(s.parentNode,u):s.nodeType===1&&Jf(s,u),or(s)):Jf($t,u.stateNode));break;case 4:d=$t,m=hr,$t=u.stateNode.containerInfo,hr=!0,Wi(s,o,u),$t=d,hr=m;break;case 0:case 11:case 14:case 15:if(!Zt&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var _=m,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Lp(u,o,w),m=m.next}while(m!==d)}Wi(s,o,u);break;case 1:if(!Zt&&(ya(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(C){dt(u,o,C)}Wi(s,o,u);break;case 21:Wi(s,o,u);break;case 22:u.mode&1?(Zt=(d=Zt)||u.memoizedState!==null,Wi(s,o,u),Zt=d):Wi(s,o,u);break;default:Wi(s,o,u)}}function oE(s){var o=s.updateQueue;if(o!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new mP),o.forEach(function(d){var m=CP.bind(null,s,d);u.has(d)||(u.add(d),d.then(m,m))})}}function dr(s,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var m=u[d];try{var _=s,w=o,C=w;e:for(;C!==null;){switch(C.tag){case 5:$t=C.stateNode,hr=!1;break e;case 3:$t=C.stateNode.containerInfo,hr=!0;break e;case 4:$t=C.stateNode.containerInfo,hr=!0;break e}C=C.return}if($t===null)throw Error(t(160));sE(_,w,m),$t=null,hr=!1;var x=m.alternate;x!==null&&(x.return=null),m.return=null}catch($){dt(m,o,$)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)aE(o,s),o=o.sibling}function aE(s,o){var u=s.alternate,d=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(dr(o,s),Dr(s),d&4){try{Xl(3,s,s.return),ph(3,s)}catch(de){dt(s,s.return,de)}try{Xl(5,s,s.return)}catch(de){dt(s,s.return,de)}}break;case 1:dr(o,s),Dr(s),d&512&&u!==null&&ya(u,u.return);break;case 5:if(dr(o,s),Dr(s),d&512&&u!==null&&ya(u,u.return),s.flags&32){var m=s.stateNode;try{Ai(m,"")}catch(de){dt(s,s.return,de)}}if(d&4&&(m=s.stateNode,m!=null)){var _=s.memoizedProps,w=u!==null?u.memoizedProps:_,C=s.type,x=s.updateQueue;if(s.updateQueue=null,x!==null)try{C==="input"&&_.type==="radio"&&_.name!=null&&ul(m,_),yl(C,w);var $=yl(C,_);for(w=0;w<x.length;w+=2){var Y=x[w],X=x[w+1];Y==="style"?ml(m,X):Y==="dangerouslySetInnerHTML"?fl(m,X):Y==="children"?Ai(m,X):Z(m,Y,X,$)}switch(C){case"input":cl(m,_);break;case"textarea":Do(m,_);break;case"select":var Q=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var ae=_.value;ae!=null?Yr(m,!!_.multiple,ae,!1):Q!==!!_.multiple&&(_.defaultValue!=null?Yr(m,!!_.multiple,_.defaultValue,!0):Yr(m,!!_.multiple,_.multiple?[]:"",!1))}m[Bl]=_}catch(de){dt(s,s.return,de)}}break;case 6:if(dr(o,s),Dr(s),d&4){if(s.stateNode===null)throw Error(t(162));m=s.stateNode,_=s.memoizedProps;try{m.nodeValue=_}catch(de){dt(s,s.return,de)}}break;case 3:if(dr(o,s),Dr(s),d&4&&u!==null&&u.memoizedState.isDehydrated)try{or(o.containerInfo)}catch(de){dt(s,s.return,de)}break;case 4:dr(o,s),Dr(s);break;case 13:dr(o,s),Dr(s),m=s.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Bp=Ze())),d&4&&oE(s);break;case 22:if(Y=u!==null&&u.memoizedState!==null,s.mode&1?(Zt=($=Zt)||Y,dr(o,s),Zt=$):dr(o,s),Dr(s),d&8192){if($=s.memoizedState!==null,(s.stateNode.isHidden=$)&&!Y&&(s.mode&1)!==0)for(ce=s,Y=s.child;Y!==null;){for(X=ce=Y;ce!==null;){switch(Q=ce,ae=Q.child,Q.tag){case 0:case 11:case 14:case 15:Xl(4,Q,Q.return);break;case 1:ya(Q,Q.return);var he=Q.stateNode;if(typeof he.componentWillUnmount=="function"){d=Q,u=Q.return;try{o=d,he.props=o.memoizedProps,he.state=o.memoizedState,he.componentWillUnmount()}catch(de){dt(d,u,de)}}break;case 5:ya(Q,Q.return);break;case 22:if(Q.memoizedState!==null){cE(X);continue}}ae!==null?(ae.return=Q,ce=ae):cE(X)}Y=Y.sibling}e:for(Y=null,X=s;;){if(X.tag===5){if(Y===null){Y=X;try{m=X.stateNode,$?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(C=X.stateNode,x=X.memoizedProps.style,w=x!=null&&x.hasOwnProperty("display")?x.display:null,C.style.display=pl("display",w))}catch(de){dt(s,s.return,de)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=$?"":X.memoizedProps}catch(de){dt(s,s.return,de)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===s)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===s)break e;for(;X.sibling===null;){if(X.return===null||X.return===s)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:dr(o,s),Dr(s),d&4&&oE(s);break;case 21:break;default:dr(o,s),Dr(s)}}function Dr(s){var o=s.flags;if(o&2){try{e:{for(var u=s.return;u!==null;){if(rE(u)){var d=u;break e}u=u.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(Ai(m,""),d.flags&=-33);var _=iE(s);Fp(s,_,m);break;case 3:case 4:var w=d.stateNode.containerInfo,C=iE(s);Vp(s,C,w);break;default:throw Error(t(161))}}catch(x){dt(s,s.return,x)}s.flags&=-3}o&4096&&(s.flags&=-4097)}function _P(s,o,u){ce=s,lE(s)}function lE(s,o,u){for(var d=(s.mode&1)!==0;ce!==null;){var m=ce,_=m.child;if(m.tag===22&&d){var w=m.memoizedState!==null||fh;if(!w){var C=m.alternate,x=C!==null&&C.memoizedState!==null||Zt;C=fh;var $=Zt;if(fh=w,(Zt=x)&&!$)for(ce=m;ce!==null;)w=ce,x=w.child,w.tag===22&&w.memoizedState!==null?hE(m):x!==null?(x.return=w,ce=x):hE(m);for(;_!==null;)ce=_,lE(_),_=_.sibling;ce=m,fh=C,Zt=$}uE(s)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,ce=_):uE(s)}}function uE(s){for(;ce!==null;){var o=ce;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Zt||ph(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!Zt)if(u===null)d.componentDidMount();else{var m=o.elementType===o.type?u.memoizedProps:cr(o.type,u.memoizedProps);d.componentDidUpdate(m,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&cv(o,_,d);break;case 3:var w=o.updateQueue;if(w!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}cv(o,w,u)}break;case 5:var C=o.stateNode;if(u===null&&o.flags&4){u=C;var x=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&u.focus();break;case"img":x.src&&(u.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var $=o.alternate;if($!==null){var Y=$.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&or(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Zt||o.flags&512&&Mp(o)}catch(Q){dt(o,o.return,Q)}}if(o===s){ce=null;break}if(u=o.sibling,u!==null){u.return=o.return,ce=u;break}ce=o.return}}function cE(s){for(;ce!==null;){var o=ce;if(o===s){ce=null;break}var u=o.sibling;if(u!==null){u.return=o.return,ce=u;break}ce=o.return}}function hE(s){for(;ce!==null;){var o=ce;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{ph(4,o)}catch(x){dt(o,u,x)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var m=o.return;try{d.componentDidMount()}catch(x){dt(o,m,x)}}var _=o.return;try{Mp(o)}catch(x){dt(o,_,x)}break;case 5:var w=o.return;try{Mp(o)}catch(x){dt(o,w,x)}}}catch(x){dt(o,o.return,x)}if(o===s){ce=null;break}var C=o.sibling;if(C!==null){C.return=o.return,ce=C;break}ce=o.return}}var yP=Math.ceil,mh=oe.ReactCurrentDispatcher,Up=oe.ReactCurrentOwner,Qn=oe.ReactCurrentBatchConfig,ze=0,Lt=null,Et=null,Wt=0,Mn=0,va=Ui(0),At=0,Zl=null,Js=0,gh=0,jp=0,eu=null,_n=null,Bp=0,Ea=1/0,hi=null,_h=!1,zp=null,Hi=null,yh=!1,qi=null,vh=0,tu=0,$p=null,Eh=-1,wh=0;function hn(){return(ze&6)!==0?Ze():Eh!==-1?Eh:Eh=Ze()}function Gi(s){return(s.mode&1)===0?1:(ze&2)!==0&&Wt!==0?Wt&-Wt:tP.transition!==null?(wh===0&&(wh=Us()),wh):(s=Fe,s!==0||(s=window.event,s=s===void 0?16:kl(s.type)),s)}function fr(s,o,u,d){if(50<tu)throw tu=0,$p=null,Error(t(185));xi(s,u,d),((ze&2)===0||s!==Lt)&&(s===Lt&&((ze&2)===0&&(gh|=u),At===4&&Ki(s,Wt)),yn(s,d),u===1&&ze===0&&(o.mode&1)===0&&(Ea=Ze()+500,Qc&&Bi()))}function yn(s,o){var u=s.callbackNode;Zr(s,o);var d=Fs(s,s===Lt?Wt:0);if(d===0)u!==null&&Sl(u),s.callbackNode=null,s.callbackPriority=0;else if(o=d&-d,s.callbackPriority!==o){if(u!=null&&Sl(u),o===1)s.tag===0?eP(fE.bind(null,s)):Xy(fE.bind(null,s)),YA(function(){(ze&6)===0&&Bi()}),u=null;else{switch(Oi(d)){case 1:u=Ms;break;case 4:u=Pi;break;case 16:u=zn;break;case 536870912:u=wc;break;default:u=zn}u=wE(u,dE.bind(null,s))}s.callbackPriority=o,s.callbackNode=u}}function dE(s,o){if(Eh=-1,wh=0,(ze&6)!==0)throw Error(t(327));var u=s.callbackNode;if(wa()&&s.callbackNode!==u)return null;var d=Fs(s,s===Lt?Wt:0);if(d===0)return null;if((d&30)!==0||(d&s.expiredLanes)!==0||o)o=Th(s,d);else{o=d;var m=ze;ze|=2;var _=mE();(Lt!==s||Wt!==o)&&(hi=null,Ea=Ze()+500,Zs(s,o));do try{wP();break}catch(C){pE(s,C)}while(!0);ap(),mh.current=_,ze=m,Et!==null?o=0:(Lt=null,Wt=0,o=At)}if(o!==0){if(o===2&&(m=xn(s),m!==0&&(d=m,o=Wp(s,m))),o===1)throw u=Zl,Zs(s,0),Ki(s,d),yn(s,Ze()),u;if(o===6)Ki(s,d);else{if(m=s.current.alternate,(d&30)===0&&!vP(m)&&(o=Th(s,d),o===2&&(_=xn(s),_!==0&&(d=_,o=Wp(s,_))),o===1))throw u=Zl,Zs(s,0),Ki(s,d),yn(s,Ze()),u;switch(s.finishedWork=m,s.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:eo(s,_n,hi);break;case 3:if(Ki(s,d),(d&130023424)===d&&(o=Bp+500-Ze(),10<o)){if(Fs(s,0)!==0)break;if(m=s.suspendedLanes,(m&d)!==d){hn(),s.pingedLanes|=s.suspendedLanes&m;break}s.timeoutHandle=Yf(eo.bind(null,s,_n,hi),o);break}eo(s,_n,hi);break;case 4:if(Ki(s,d),(d&4194240)===d)break;for(o=s.eventTimes,m=-1;0<d;){var w=31-ln(d);_=1<<w,w=o[w],w>m&&(m=w),d&=~_}if(d=m,d=Ze()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*yP(d/1960))-d,10<d){s.timeoutHandle=Yf(eo.bind(null,s,_n,hi),d);break}eo(s,_n,hi);break;case 5:eo(s,_n,hi);break;default:throw Error(t(329))}}}return yn(s,Ze()),s.callbackNode===u?dE.bind(null,s):null}function Wp(s,o){var u=eu;return s.current.memoizedState.isDehydrated&&(Zs(s,o).flags|=256),s=Th(s,o),s!==2&&(o=_n,_n=u,o!==null&&Hp(o)),s}function Hp(s){_n===null?_n=s:_n.push.apply(_n,s)}function vP(s){for(var o=s;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var m=u[d],_=m.getSnapshot;m=m.value;try{if(!lr(_(),m))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ki(s,o){for(o&=~jp,o&=~gh,s.suspendedLanes|=o,s.pingedLanes&=~o,s=s.expirationTimes;0<o;){var u=31-ln(o),d=1<<u;s[u]=-1,o&=~d}}function fE(s){if((ze&6)!==0)throw Error(t(327));wa();var o=Fs(s,0);if((o&1)===0)return yn(s,Ze()),null;var u=Th(s,o);if(s.tag!==0&&u===2){var d=xn(s);d!==0&&(o=d,u=Wp(s,d))}if(u===1)throw u=Zl,Zs(s,0),Ki(s,o),yn(s,Ze()),u;if(u===6)throw Error(t(345));return s.finishedWork=s.current.alternate,s.finishedLanes=o,eo(s,_n,hi),yn(s,Ze()),null}function qp(s,o){var u=ze;ze|=1;try{return s(o)}finally{ze=u,ze===0&&(Ea=Ze()+500,Qc&&Bi())}}function Xs(s){qi!==null&&qi.tag===0&&(ze&6)===0&&wa();var o=ze;ze|=1;var u=Qn.transition,d=Fe;try{if(Qn.transition=null,Fe=1,s)return s()}finally{Fe=d,Qn.transition=u,ze=o,(ze&6)===0&&Bi()}}function Gp(){Mn=va.current,rt(va)}function Zs(s,o){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,QA(u)),Et!==null)for(u=Et.return;u!==null;){var d=u;switch(np(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Gc();break;case 3:ga(),rt(pn),rt(Yt),mp();break;case 5:fp(d);break;case 4:ga();break;case 13:rt(ut);break;case 19:rt(ut);break;case 10:lp(d.type._context);break;case 22:case 23:Gp()}u=u.return}if(Lt=s,Et=s=Qi(s.current,null),Wt=Mn=o,At=0,Zl=null,jp=gh=Js=0,_n=eu=null,Ks!==null){for(o=0;o<Ks.length;o++)if(u=Ks[o],d=u.interleaved,d!==null){u.interleaved=null;var m=d.next,_=u.pending;if(_!==null){var w=_.next;_.next=m,d.next=w}u.pending=d}Ks=null}return s}function pE(s,o){do{var u=Et;try{if(ap(),sh.current=uh,oh){for(var d=ct.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}oh=!1}if(Ys=0,Dt=Rt=ct=null,Gl=!1,Kl=0,Up.current=null,u===null||u.return===null){At=1,Zl=o,Et=null;break}e:{var _=s,w=u.return,C=u,x=o;if(o=Wt,C.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var $=x,Y=C,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ae=Uv(w);if(ae!==null){ae.flags&=-257,jv(ae,w,C,_,o),ae.mode&1&&Fv(_,$,o),o=ae,x=$;var he=o.updateQueue;if(he===null){var de=new Set;de.add(x),o.updateQueue=de}else he.add(x);break e}else{if((o&1)===0){Fv(_,$,o),Kp();break e}x=Error(t(426))}}else if(at&&C.mode&1){var gt=Uv(w);if(gt!==null){(gt.flags&65536)===0&&(gt.flags|=256),jv(gt,w,C,_,o),sp(_a(x,C));break e}}_=x=_a(x,C),At!==4&&(At=2),eu===null?eu=[_]:eu.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var j=Mv(_,x,o);uv(_,j);break e;case 1:C=x;var D=_.type,B=_.stateNode;if((_.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Hi===null||!Hi.has(B)))){_.flags|=65536,o&=-o,_.lanes|=o;var ee=Vv(_,C,o);uv(_,ee);break e}}_=_.return}while(_!==null)}_E(u)}catch(fe){o=fe,Et===u&&u!==null&&(Et=u=u.return);continue}break}while(!0)}function mE(){var s=mh.current;return mh.current=uh,s===null?uh:s}function Kp(){(At===0||At===3||At===2)&&(At=4),Lt===null||(Js&268435455)===0&&(gh&268435455)===0||Ki(Lt,Wt)}function Th(s,o){var u=ze;ze|=2;var d=mE();(Lt!==s||Wt!==o)&&(hi=null,Zs(s,o));do try{EP();break}catch(m){pE(s,m)}while(!0);if(ap(),ze=u,mh.current=d,Et!==null)throw Error(t(261));return Lt=null,Wt=0,At}function EP(){for(;Et!==null;)gE(Et)}function wP(){for(;Et!==null&&!vc();)gE(Et)}function gE(s){var o=EE(s.alternate,s,Mn);s.memoizedProps=s.pendingProps,o===null?_E(s):Et=o,Up.current=null}function _E(s){var o=s;do{var u=o.alternate;if(s=o.return,(o.flags&32768)===0){if(u=fP(u,o,Mn),u!==null){Et=u;return}}else{if(u=pP(u,o),u!==null){u.flags&=32767,Et=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{At=6,Et=null;return}}if(o=o.sibling,o!==null){Et=o;return}Et=o=s}while(o!==null);At===0&&(At=5)}function eo(s,o,u){var d=Fe,m=Qn.transition;try{Qn.transition=null,Fe=1,TP(s,o,u,d)}finally{Qn.transition=m,Fe=d}return null}function TP(s,o,u,d){do wa();while(qi!==null);if((ze&6)!==0)throw Error(t(327));u=s.finishedWork;var m=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(t(177));s.callbackNode=null,s.callbackPriority=0;var _=u.lanes|u.childLanes;if(Je(s,_),s===Lt&&(Et=Lt=null,Wt=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||yh||(yh=!0,wE(zn,function(){return wa(),null})),_=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||_){_=Qn.transition,Qn.transition=null;var w=Fe;Fe=1;var C=ze;ze|=4,Up.current=null,gP(s,u),aE(u,s),zA(Kf),Li=!!Gf,Kf=Gf=null,s.current=u,_P(u),xf(),ze=C,Fe=w,Qn.transition=_}else s.current=u;if(yh&&(yh=!1,qi=s,vh=m),_=s.pendingLanes,_===0&&(Hi=null),Tc(u.stateNode),yn(s,Ze()),o!==null)for(d=s.onRecoverableError,u=0;u<o.length;u++)m=o[u],d(m.value,{componentStack:m.stack,digest:m.digest});if(_h)throw _h=!1,s=zp,zp=null,s;return(vh&1)!==0&&s.tag!==0&&wa(),_=s.pendingLanes,(_&1)!==0?s===$p?tu++:(tu=0,$p=s):tu=0,Bi(),null}function wa(){if(qi!==null){var s=Oi(vh),o=Qn.transition,u=Fe;try{if(Qn.transition=null,Fe=16>s?16:s,qi===null)var d=!1;else{if(s=qi,qi=null,vh=0,(ze&6)!==0)throw Error(t(331));var m=ze;for(ze|=4,ce=s.current;ce!==null;){var _=ce,w=_.child;if((ce.flags&16)!==0){var C=_.deletions;if(C!==null){for(var x=0;x<C.length;x++){var $=C[x];for(ce=$;ce!==null;){var Y=ce;switch(Y.tag){case 0:case 11:case 15:Xl(8,Y,_)}var X=Y.child;if(X!==null)X.return=Y,ce=X;else for(;ce!==null;){Y=ce;var Q=Y.sibling,ae=Y.return;if(nE(Y),Y===$){ce=null;break}if(Q!==null){Q.return=ae,ce=Q;break}ce=ae}}}var he=_.alternate;if(he!==null){var de=he.child;if(de!==null){he.child=null;do{var gt=de.sibling;de.sibling=null,de=gt}while(de!==null)}}ce=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,ce=w;else e:for(;ce!==null;){if(_=ce,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Xl(9,_,_.return)}var j=_.sibling;if(j!==null){j.return=_.return,ce=j;break e}ce=_.return}}var D=s.current;for(ce=D;ce!==null;){w=ce;var B=w.child;if((w.subtreeFlags&2064)!==0&&B!==null)B.return=w,ce=B;else e:for(w=D;ce!==null;){if(C=ce,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:ph(9,C)}}catch(fe){dt(C,C.return,fe)}if(C===w){ce=null;break e}var ee=C.sibling;if(ee!==null){ee.return=C.return,ce=ee;break e}ce=C.return}}if(ze=m,Bi(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Vs,s)}catch{}d=!0}return d}finally{Fe=u,Qn.transition=o}}return!1}function yE(s,o,u){o=_a(u,o),o=Mv(s,o,1),s=$i(s,o,1),o=hn(),s!==null&&(xi(s,1,o),yn(s,o))}function dt(s,o,u){if(s.tag===3)yE(s,s,u);else for(;o!==null;){if(o.tag===3){yE(o,s,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Hi===null||!Hi.has(d))){s=_a(u,s),s=Vv(o,s,1),o=$i(o,s,1),s=hn(),o!==null&&(xi(o,1,s),yn(o,s));break}}o=o.return}}function IP(s,o,u){var d=s.pingCache;d!==null&&d.delete(o),o=hn(),s.pingedLanes|=s.suspendedLanes&u,Lt===s&&(Wt&u)===u&&(At===4||At===3&&(Wt&130023424)===Wt&&500>Ze()-Bp?Zs(s,0):jp|=u),yn(s,o)}function vE(s,o){o===0&&((s.mode&1)===0?o=1:(o=Wo,Wo<<=1,(Wo&130023424)===0&&(Wo=4194304)));var u=hn();s=li(s,o),s!==null&&(xi(s,o,u),yn(s,u))}function SP(s){var o=s.memoizedState,u=0;o!==null&&(u=o.retryLane),vE(s,u)}function CP(s,o){var u=0;switch(s.tag){case 13:var d=s.stateNode,m=s.memoizedState;m!==null&&(u=m.retryLane);break;case 19:d=s.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),vE(s,u)}var EE;EE=function(s,o,u){if(s!==null)if(s.memoizedProps!==o.pendingProps||pn.current)gn=!0;else{if((s.lanes&u)===0&&(o.flags&128)===0)return gn=!1,dP(s,o,u);gn=(s.flags&131072)!==0}else gn=!1,at&&(o.flags&1048576)!==0&&Zy(o,Jc,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;dh(s,o),s=o.pendingProps;var m=ua(o,Yt.current);ma(o,u),m=yp(null,o,d,s,m,u);var _=vp();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,mn(d)?(_=!0,Kc(o)):_=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,hp(o),m.updater=ch,o.stateNode=m,m._reactInternals=o,Cp(o,d,s,u),o=kp(null,o,d,!0,_,u)):(o.tag=0,at&&_&&tp(o),cn(null,o,m,u),o=o.child),o;case 16:d=o.elementType;e:{switch(dh(s,o),s=o.pendingProps,m=d._init,d=m(d._payload),o.type=d,m=o.tag=AP(d),s=cr(d,s),m){case 0:o=Pp(null,o,d,s,u);break e;case 1:o=qv(null,o,d,s,u);break e;case 11:o=Bv(null,o,d,s,u);break e;case 14:o=zv(null,o,d,cr(d.type,s),u);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:cr(d,m),Pp(s,o,d,m,u);case 1:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:cr(d,m),qv(s,o,d,m,u);case 3:e:{if(Gv(o),s===null)throw Error(t(387));d=o.pendingProps,_=o.memoizedState,m=_.element,lv(s,o),rh(o,d,null,u);var w=o.memoizedState;if(d=w.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){m=_a(Error(t(423)),o),o=Kv(s,o,d,u,m);break e}else if(d!==m){m=_a(Error(t(424)),o),o=Kv(s,o,d,u,m);break e}else for(Ln=Fi(o.stateNode.containerInfo.firstChild),Dn=o,at=!0,ur=null,u=ov(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(da(),d===m){o=ci(s,o,u);break e}cn(s,o,d,u)}o=o.child}return o;case 5:return hv(o),s===null&&ip(o),d=o.type,m=o.pendingProps,_=s!==null?s.memoizedProps:null,w=m.children,Qf(d,m)?w=null:_!==null&&Qf(d,_)&&(o.flags|=32),Hv(s,o),cn(s,o,w,u),o.child;case 6:return s===null&&ip(o),null;case 13:return Qv(s,o,u);case 4:return dp(o,o.stateNode.containerInfo),d=o.pendingProps,s===null?o.child=fa(o,null,d,u):cn(s,o,d,u),o.child;case 11:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:cr(d,m),Bv(s,o,d,m,u);case 7:return cn(s,o,o.pendingProps,u),o.child;case 8:return cn(s,o,o.pendingProps.children,u),o.child;case 12:return cn(s,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,m=o.pendingProps,_=o.memoizedProps,w=m.value,et(eh,d._currentValue),d._currentValue=w,_!==null)if(lr(_.value,w)){if(_.children===m.children&&!pn.current){o=ci(s,o,u);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var C=_.dependencies;if(C!==null){w=_.child;for(var x=C.firstContext;x!==null;){if(x.context===d){if(_.tag===1){x=ui(-1,u&-u),x.tag=2;var $=_.updateQueue;if($!==null){$=$.shared;var Y=$.pending;Y===null?x.next=x:(x.next=Y.next,Y.next=x),$.pending=x}}_.lanes|=u,x=_.alternate,x!==null&&(x.lanes|=u),up(_.return,u,o),C.lanes|=u;break}x=x.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=u,C=w.alternate,C!==null&&(C.lanes|=u),up(w,u,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}cn(s,o,m.children,u),o=o.child}return o;case 9:return m=o.type,d=o.pendingProps.children,ma(o,u),m=Gn(m),d=d(m),o.flags|=1,cn(s,o,d,u),o.child;case 14:return d=o.type,m=cr(d,o.pendingProps),m=cr(d.type,m),zv(s,o,d,m,u);case 15:return $v(s,o,o.type,o.pendingProps,u);case 17:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:cr(d,m),dh(s,o),o.tag=1,mn(d)?(s=!0,Kc(o)):s=!1,ma(o,u),Dv(o,d,m),Cp(o,d,m,u),kp(null,o,d,!0,s,u);case 19:return Jv(s,o,u);case 22:return Wv(s,o,u)}throw Error(t(156,o.tag))};function wE(s,o){return zo(s,o)}function RP(s,o,u,d){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(s,o,u,d){return new RP(s,o,u,d)}function Qp(s){return s=s.prototype,!(!s||!s.isReactComponent)}function AP(s){if(typeof s=="function")return Qp(s)?1:0;if(s!=null){if(s=s.$$typeof,s===F)return 11;if(s===Kt)return 14}return 2}function Qi(s,o){var u=s.alternate;return u===null?(u=Yn(s.tag,o,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=o,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,o=s.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function Ih(s,o,u,d,m,_){var w=2;if(d=s,typeof s=="function")Qp(s)&&(w=1);else if(typeof s=="string")w=5;else e:switch(s){case b:return to(u.children,m,_,o);case S:w=8,m|=8;break;case P:return s=Yn(12,u,o,m|2),s.elementType=P,s.lanes=_,s;case A:return s=Yn(13,u,o,m),s.elementType=A,s.lanes=_,s;case pt:return s=Yn(19,u,o,m),s.elementType=pt,s.lanes=_,s;case Qe:return Sh(u,m,_,o);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case O:w=10;break e;case M:w=9;break e;case F:w=11;break e;case Kt:w=14;break e;case Qt:w=16,d=null;break e}throw Error(t(130,s==null?s:typeof s,""))}return o=Yn(w,u,o,m),o.elementType=s,o.type=d,o.lanes=_,o}function to(s,o,u,d){return s=Yn(7,s,d,o),s.lanes=u,s}function Sh(s,o,u,d){return s=Yn(22,s,d,o),s.elementType=Qe,s.lanes=u,s.stateNode={isHidden:!1},s}function Yp(s,o,u){return s=Yn(6,s,null,o),s.lanes=u,s}function Jp(s,o,u){return o=Yn(4,s.children!==null?s.children:[],s.key,o),o.lanes=u,o.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},o}function PP(s,o,u,d,m){this.tag=o,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Xp(s,o,u,d,m,_,w,C,x){return s=new PP(s,o,u,C,x),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Yn(3,null,null,o),s.current=_,_.stateNode=s,_.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(_),s}function kP(s,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:d==null?null:""+d,children:s,containerInfo:o,implementation:u}}function TE(s){if(!s)return ji;s=s._reactInternals;e:{if(tr(s)!==s||s.tag!==1)throw Error(t(170));var o=s;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(mn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(s.tag===1){var u=s.type;if(mn(u))return Yy(s,u,o)}return o}function IE(s,o,u,d,m,_,w,C,x){return s=Xp(u,d,!0,s,m,_,w,C,x),s.context=TE(null),u=s.current,d=hn(),m=Gi(u),_=ui(d,m),_.callback=o??null,$i(u,_,m),s.current.lanes=m,xi(s,m,d),yn(s,d),s}function Ch(s,o,u,d){var m=o.current,_=hn(),w=Gi(m);return u=TE(u),o.context===null?o.context=u:o.pendingContext=u,o=ui(_,w),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=$i(m,o,w),s!==null&&(fr(s,m,w,_),nh(s,m,w)),w}function Rh(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function SE(s,o){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<o?u:o}}function Zp(s,o){SE(s,o),(s=s.alternate)&&SE(s,o)}function NP(){return null}var CE=typeof reportError=="function"?reportError:function(s){console.error(s)};function em(s){this._internalRoot=s}Ah.prototype.render=em.prototype.render=function(s){var o=this._internalRoot;if(o===null)throw Error(t(409));Ch(s,o,null,null)},Ah.prototype.unmount=em.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var o=s.containerInfo;Xs(function(){Ch(null,s,null,null)}),o[ii]=null}};function Ah(s){this._internalRoot=s}Ah.prototype.unstable_scheduleHydration=function(s){if(s){var o=Ac();s={blockedOn:null,target:s,priority:o};for(var u=0;u<Ar.length&&o!==0&&o<Ar[u].priority;u++);Ar.splice(u,0,s),u===0&&Nc(s)}};function tm(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Ph(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function RE(){}function xP(s,o,u,d,m){if(m){if(typeof d=="function"){var _=d;d=function(){var $=Rh(w);_.call($)}}var w=IE(o,d,s,0,null,!1,!1,"",RE);return s._reactRootContainer=w,s[ii]=w.current,Ul(s.nodeType===8?s.parentNode:s),Xs(),w}for(;m=s.lastChild;)s.removeChild(m);if(typeof d=="function"){var C=d;d=function(){var $=Rh(x);C.call($)}}var x=Xp(s,0,!1,null,null,!1,!1,"",RE);return s._reactRootContainer=x,s[ii]=x.current,Ul(s.nodeType===8?s.parentNode:s),Xs(function(){Ch(o,x,u,d)}),x}function kh(s,o,u,d,m){var _=u._reactRootContainer;if(_){var w=_;if(typeof m=="function"){var C=m;m=function(){var x=Rh(w);C.call(x)}}Ch(o,w,s,m)}else w=xP(u,o,s,m,d);return Rh(w)}Cc=function(s){switch(s.tag){case 3:var o=s.stateNode;if(o.current.memoizedState.isDehydrated){var u=ki(o.pendingLanes);u!==0&&(bi(o,u|1),yn(o,Ze()),(ze&6)===0&&(Ea=Ze()+500,Bi()))}break;case 13:Xs(function(){var d=li(s,1);if(d!==null){var m=hn();fr(d,s,1,m)}}),Zp(s,1)}},Ho=function(s){if(s.tag===13){var o=li(s,134217728);if(o!==null){var u=hn();fr(o,s,134217728,u)}Zp(s,134217728)}},Rc=function(s){if(s.tag===13){var o=Gi(s),u=li(s,o);if(u!==null){var d=hn();fr(u,s,o,d)}Zp(s,o)}},Ac=function(){return Fe},Pc=function(s,o){var u=Fe;try{return Fe=s,o()}finally{Fe=u}},Mo=function(s,o,u){switch(o){case"input":if(cl(s,u),o=u.name,u.type==="radio"&&o!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==s&&d.form===s.form){var m=qc(d);if(!m)throw Error(t(90));No(d),cl(d,m)}}}break;case"textarea":Do(s,u);break;case"select":o=u.value,o!=null&&Yr(s,!!u.multiple,o,!1)}},bs=qp,El=Xs;var bP={usingClientEntryPoint:!1,Events:[zl,aa,qc,Cr,vl,qp]},nu={findFiberByHostInstance:Ws,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OP={bundleType:nu.bundleType,version:nu.version,rendererPackageName:nu.rendererPackageName,rendererConfig:nu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=Il(s),s===null?null:s.stateNode},findFiberByHostInstance:nu.findFiberByHostInstance||NP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nh.isDisabled&&Nh.supportsFiber)try{Vs=Nh.inject(OP),Nn=Nh}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bP,vn.createPortal=function(s,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(o))throw Error(t(200));return kP(s,o,null,u)},vn.createRoot=function(s,o){if(!tm(s))throw Error(t(299));var u=!1,d="",m=CE;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=Xp(s,1,!1,null,null,u,!1,d,m),s[ii]=o.current,Ul(s.nodeType===8?s.parentNode:s),new em(o)},vn.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var o=s._reactInternals;if(o===void 0)throw typeof s.render=="function"?Error(t(188)):(s=Object.keys(s).join(","),Error(t(268,s)));return s=Il(o),s=s===null?null:s.stateNode,s},vn.flushSync=function(s){return Xs(s)},vn.hydrate=function(s,o,u){if(!Ph(o))throw Error(t(200));return kh(null,s,o,!0,u)},vn.hydrateRoot=function(s,o,u){if(!tm(s))throw Error(t(405));var d=u!=null&&u.hydratedSources||null,m=!1,_="",w=CE;if(u!=null&&(u.unstable_strictMode===!0&&(m=!0),u.identifierPrefix!==void 0&&(_=u.identifierPrefix),u.onRecoverableError!==void 0&&(w=u.onRecoverableError)),o=IE(o,null,s,1,u??null,m,!1,_,w),s[ii]=o.current,Ul(s),d)for(s=0;s<d.length;s++)u=d[s],m=u._getVersion,m=m(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,m]:o.mutableSourceEagerHydrationData.push(u,m);return new Ah(o)},vn.render=function(s,o,u){if(!Ph(o))throw Error(t(200));return kh(null,s,o,!1,u)},vn.unmountComponentAtNode=function(s){if(!Ph(s))throw Error(t(40));return s._reactRootContainer?(Xs(function(){kh(null,null,s,!1,function(){s._reactRootContainer=null,s[ii]=null})}),!0):!1},vn.unstable_batchedUpdates=qp,vn.unstable_renderSubtreeIntoContainer=function(s,o,u,d){if(!Ph(u))throw Error(t(200));if(s==null||s._reactInternals===void 0)throw Error(t(38));return kh(s,o,u,!1,d)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var DE;function NI(){if(DE)return im.exports;DE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),im.exports=zP(),im.exports}var LE;function $P(){if(LE)return xh;LE=1;var n=NI();return xh.createRoot=n.createRoot,xh.hydrateRoot=n.hydrateRoot,xh}var WP=$P();const HP=PI(WP),qP=()=>{};var ME={};/**
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
 */const xI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ne=function(n,e){if(!n)throw Ga(e)},Ga=function(n){return new Error("Firebase Database ("+xI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const bI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},GP=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],l=n[t++],h=n[t++],f=((i&7)<<18|(a&63)<<12|(l&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],l=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},bg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,p=f?n[i+2]:0,y=a>>2,v=(a&3)<<4|h>>4;let T=(h&15)<<2|p>>6,R=p&63;f||(R=64,l||(T=64)),r.push(t[y],t[v],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):GP(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],h=i<n.length?t[n.charAt(i)]:0;++i;const p=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||h==null||p==null||v==null)throw new KP;const T=a<<2|h>>4;if(r.push(T),p!==64){const R=h<<4&240|p>>2;if(r.push(R),v!==64){const k=p<<6&192|v;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class KP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OI=function(n){const e=bI(n);return bg.encodeByteArray(e,!0)},td=function(n){return OI(n).replace(/\./g,"")},nd=function(n){try{return bg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QP(n){return DI(void 0,n)}function DI(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!YP(t)||(n[t]=DI(n[t],e[t]));return n}function YP(n){return n!=="__proto__"}/**
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
 */function JP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XP=()=>JP().__FIREBASE_DEFAULTS__,ZP=()=>{if(typeof process>"u"||typeof ME>"u")return;const n=ME.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ek=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&nd(n[1]);return e&&JSON.parse(e)},Bd=()=>{try{return qP()||XP()||ZP()||ek()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},LI=n=>{var e,t;return(t=(e=Bd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Og=n=>{const e=LI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},MI=()=>{var n;return(n=Bd())===null||n===void 0?void 0:n.config},VI=n=>{var e;return(e=Bd())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class zd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Dg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[td(JSON.stringify(t)),td(JSON.stringify(l)),""].join(".")}/**
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
 */function an(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())}function tk(){var n;const e=(n=Bd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function FI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function UI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rk(){const n=an();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ik(){return xI.NODE_ADMIN===!0}function sk(){return!tk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jI(){try{return typeof indexedDB=="object"}catch{return!1}}function BI(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}function ok(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ak="FirebaseError";class Xn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ak,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?lk(a,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new Xn(i,h,r)}}function lk(n,e){return n.replace(uk,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uk=/\{\$([^}]+)}/g;/**
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
 */function Au(n){return JSON.parse(n)}function jt(n){return JSON.stringify(n)}/**
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
 */const zI=function(n){let e={},t={},r={},i="";try{const a=n.split(".");e=Au(nd(a[0])||""),t=Au(nd(a[1])||""),i=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},ck=function(n){const e=zI(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},hk=function(n){const e=zI(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function qr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ma(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Lm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rd(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Br(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],l=e[i];if(VE(a)&&VE(l)){if(!Br(a,l))return!1}else if(a!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function VE(n){return n!==null&&typeof n=="object"}/**
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
 */function Ka(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function hu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class dk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)r[v]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let v=0;v<16;v++)r[v]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let v=16;v<80;v++){const T=r[v-3]^r[v-8]^r[v-14]^r[v-16];r[v]=(T<<1|T>>>31)&4294967295}let i=this.chain_[0],a=this.chain_[1],l=this.chain_[2],h=this.chain_[3],f=this.chain_[4],p,y;for(let v=0;v<80;v++){v<40?v<20?(p=h^a&(l^h),y=1518500249):(p=a^l^h,y=1859775393):v<60?(p=a&l|h&(a|l),y=2400959708):(p=a^l^h,y=3395469782);const T=(i<<5|i>>>27)+p+f+y+r[v]&4294967295;f=h,h=l,l=(a<<30|a>>>2)&4294967295,a=i,i=T}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const a=this.buf_;let l=this.inbuf_;for(;i<t;){if(l===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(a[l]=e.charCodeAt(i),++l,++i,l===this.blockSize){this.compress_(a),l=0;break}}else for(;i<t;)if(a[l]=e[i],++l,++i,l===this.blockSize){this.compress_(a),l=0;break}}this.inbuf_=l,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}function fk(n,e){const t=new pk(n,e);return t.subscribe.bind(t)}class pk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");mk(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=am),i.error===void 0&&(i.error=am),i.complete===void 0&&(i.complete=am);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function am(){}function Mg(n,e){return`${n} failed: ${e} argument `}/**
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
 */const gk=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const a=i-55296;r++,ne(r<n.length,"Surrogate pair missing trail surrogate.");const l=n.charCodeAt(r)-56320;i=65536+(a<<10)+l}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},$d=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const _k=1e3,yk=2,vk=4*60*60*1e3,Ek=.5;function FE(n,e=_k,t=yk){const r=e*Math.pow(t,n),i=Math.round(Ek*r*(Math.random()-.5)*2);return Math.min(vk,r+i)}/**
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
 */function st(n){return n&&n._delegate?n._delegate:n}class jn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const no="[DEFAULT]";/**
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
 */class wk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ik(e))try{this.getOrInitializeService({instanceIdentifier:no})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=no){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=no){return this.instances.has(e)}getOptions(e=no){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&l.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=no){return this.component?this.component.multipleInstances?e:no:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tk(n){return n===no?void 0:n}function Ik(n){return n.instantiationMode==="EAGER"}/**
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
 */class Sk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Me||(Me={}));const Ck={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},Rk=Me.INFO,Ak={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},Pk=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ak[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qu{constructor(e){this.name=e,this._logLevel=Rk,this._logHandler=Pk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ck[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const kk=(n,e)=>e.some(t=>n instanceof t);let UE,jE;function Nk(){return UE||(UE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xk(){return jE||(jE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $I=new WeakMap,Mm=new WeakMap,WI=new WeakMap,lm=new WeakMap,Vg=new WeakMap;function bk(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(is(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&$I.set(t,n)}).catch(()=>{}),Vg.set(e,n),e}function Ok(n){if(Mm.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});Mm.set(n,e)}let Vm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||WI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return is(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Dk(n){Vm=n(Vm)}function Lk(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(um(this),e,...t);return WI.set(r,e.sort?e.sort():[e]),is(r)}:xk().includes(n)?function(...e){return n.apply(um(this),e),is($I.get(this))}:function(...e){return is(n.apply(um(this),e))}}function Mk(n){return typeof n=="function"?Lk(n):(n instanceof IDBTransaction&&Ok(n),kk(n,Nk())?new Proxy(n,Vm):n)}function is(n){if(n instanceof IDBRequest)return bk(n);if(lm.has(n))return lm.get(n);const e=Mk(n);return e!==n&&(lm.set(n,e),Vg.set(e,n)),e}const um=n=>Vg.get(n);function HI(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const l=indexedDB.open(n,e),h=is(l);return r&&l.addEventListener("upgradeneeded",f=>{r(is(l.result),f.oldVersion,f.newVersion,is(l.transaction),f)}),t&&l.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),i&&f.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const Vk=["get","getKey","getAll","getAllKeys","count"],Fk=["put","add","delete","clear"],cm=new Map;function BE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cm.get(e))return cm.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Fk.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vk.includes(t)))return;const a=async function(l,...h){const f=this.transaction(l,i?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[t](...h),i&&f.done]))[0]};return cm.set(e,a),a}Dk(n=>({...n,get:(e,t,r)=>BE(e,t)||n.get(e,t,r),has:(e,t)=>!!BE(e,t)||n.has(e,t)}));/**
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
 */class Uk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jk(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jk(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fm="@firebase/app",zE="0.11.4";/**
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
 */const vi=new Qu("@firebase/app"),Bk="@firebase/app-compat",zk="@firebase/analytics-compat",$k="@firebase/analytics",Wk="@firebase/app-check-compat",Hk="@firebase/app-check",qk="@firebase/auth",Gk="@firebase/auth-compat",Kk="@firebase/database",Qk="@firebase/data-connect",Yk="@firebase/database-compat",Jk="@firebase/functions",Xk="@firebase/functions-compat",Zk="@firebase/installations",eN="@firebase/installations-compat",tN="@firebase/messaging",nN="@firebase/messaging-compat",rN="@firebase/performance",iN="@firebase/performance-compat",sN="@firebase/remote-config",oN="@firebase/remote-config-compat",aN="@firebase/storage",lN="@firebase/storage-compat",uN="@firebase/firestore",cN="@firebase/vertexai",hN="@firebase/firestore-compat",dN="firebase",fN="11.6.0";/**
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
 */const Um="[DEFAULT]",pN={[Fm]:"fire-core",[Bk]:"fire-core-compat",[$k]:"fire-analytics",[zk]:"fire-analytics-compat",[Hk]:"fire-app-check",[Wk]:"fire-app-check-compat",[qk]:"fire-auth",[Gk]:"fire-auth-compat",[Kk]:"fire-rtdb",[Qk]:"fire-data-connect",[Yk]:"fire-rtdb-compat",[Jk]:"fire-fn",[Xk]:"fire-fn-compat",[Zk]:"fire-iid",[eN]:"fire-iid-compat",[tN]:"fire-fcm",[nN]:"fire-fcm-compat",[rN]:"fire-perf",[iN]:"fire-perf-compat",[sN]:"fire-rc",[oN]:"fire-rc-compat",[aN]:"fire-gcs",[lN]:"fire-gcs-compat",[uN]:"fire-fst",[hN]:"fire-fst-compat",[cN]:"fire-vertex","fire-js":"fire-js",[dN]:"fire-js-all"};/**
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
 */const Pu=new Map,mN=new Map,jm=new Map;function $E(n,e){try{n.container.addComponent(e)}catch(t){vi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Jn(n){const e=n.name;if(jm.has(e))return vi.debug(`There were multiple attempts to register component ${e}.`),!1;jm.set(e,n);for(const t of Pu.values())$E(t,n);for(const t of mN.values())$E(t,n);return!0}function Ci(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const gN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ss=new Co("app","Firebase",gN);/**
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
 */class _N{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ss.create("app-deleted",{appName:this._name})}}/**
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
 */const Es=fN;function qI(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Um,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ss.create("bad-app-name",{appName:String(i)});if(t||(t=MI()),!t)throw ss.create("no-options");const a=Pu.get(i);if(a){if(Br(t,a.options)&&Br(r,a.config))return a;throw ss.create("duplicate-app",{appName:i})}const l=new Sk(i);for(const f of jm.values())l.addComponent(f);const h=new _N(t,r,l);return Pu.set(i,h),h}function Yu(n=Um){const e=Pu.get(n);if(!e&&n===Um&&MI())return qI();if(!e)throw ss.create("no-app",{appName:n});return e}function WE(){return Array.from(Pu.values())}function on(n,e,t){var r;let i=(r=pN[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const h=[`Unable to register library "${i}" with version "${e}":`];a&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vi.warn(h.join(" "));return}Jn(new jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yN="firebase-heartbeat-database",vN=1,ku="firebase-heartbeat-store";let hm=null;function GI(){return hm||(hm=HI(yN,vN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ku)}catch(t){console.warn(t)}}}}).catch(n=>{throw ss.create("idb-open",{originalErrorMessage:n.message})})),hm}async function EN(n){try{const t=(await GI()).transaction(ku),r=await t.objectStore(ku).get(KI(n));return await t.done,r}catch(e){if(e instanceof Xn)vi.warn(e.message);else{const t=ss.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vi.warn(t.message)}}}async function HE(n,e){try{const r=(await GI()).transaction(ku,"readwrite");await r.objectStore(ku).put(e,KI(n)),await r.done}catch(t){if(t instanceof Xn)vi.warn(t.message);else{const r=ss.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vi.warn(r.message)}}}function KI(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wN=1024,TN=30;class IN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new CN(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=qE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>TN){const l=RN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qE(),{heartbeatsToSend:r,unsentEntries:i}=SN(this._heartbeatsCache.heartbeats),a=td(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return vi.warn(t),""}}}function qE(){return new Date().toISOString().substring(0,10)}function SN(n,e=wN){const t=[];let r=n.slice();for(const i of n){const a=t.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),GE(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),GE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class CN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jI()?BI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await EN(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return HE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return HE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function GE(n){return td(JSON.stringify({version:2,heartbeats:n})).length}function RN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function AN(n){Jn(new jn("platform-logger",e=>new Uk(e),"PRIVATE")),Jn(new jn("heartbeat",e=>new IN(e),"PRIVATE")),on(Fm,zE,n),on(Fm,zE,"esm2017"),on("fire-js","")}AN("");function Fg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function QI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PN=QI,YI=new Co("auth","Firebase",QI());/**
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
 */const id=new Qu("@firebase/auth");function kN(n,...e){id.logLevel<=Me.WARN&&id.warn(`Auth (${Es}): ${n}`,...e)}function Bh(n,...e){id.logLevel<=Me.ERROR&&id.error(`Auth (${Es}): ${n}`,...e)}/**
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
 */function Tr(n,...e){throw Ug(n,...e)}function Vr(n,...e){return Ug(n,...e)}function JI(n,e,t){const r=Object.assign(Object.assign({},PN()),{[e]:t});return new Co("auth","Firebase",r).create(e,{appName:n.name})}function gi(n){return JI(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ug(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return YI.create(n,...e)}function Te(n,e,...t){if(!n)throw Ug(e,...t)}function fi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bh(e),new Error(e)}function Ei(n,e){n||fi(e)}/**
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
 */function Bm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function NN(){return KE()==="http:"||KE()==="https:"}function KE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function xN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NN()||FI()||"connection"in navigator)?navigator.onLine:!0}function bN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ju{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ei(t>e,"Short delay should be less than long delay!"),this.isMobile=Lg()||UI()}get(){return xN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jg(n,e){Ei(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class XI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ON={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LN=new Ju(3e4,6e4);function ws(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ts(n,e,t,r,i={}){return ZI(n,i,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const h=Ka(Object.assign({key:n.config.apiKey},l)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:f},a);return nk()||(p.referrerPolicy="no-referrer"),XI.fetch()(await e0(n,n.config.apiHost,t,h),p)})}async function ZI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ON),e);try{const i=new VN(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw bh(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const h=a.ok?l.errorMessage:l.error.message,[f,p]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw bh(n,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw bh(n,"email-already-in-use",l);if(f==="USER_DISABLED")throw bh(n,"user-disabled",l);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw JI(n,y,p);Tr(n,y)}}catch(i){if(i instanceof Xn)throw i;Tr(n,"network-request-failed",{message:String(i)})}}async function Xu(n,e,t,r,i={}){const a=await Ts(n,e,t,r,i);return"mfaPendingCredential"in a&&Tr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function e0(n,e,t,r){const i=`${e}${t}?${r}`,a=n,l=a.config.emulator?jg(n.config,i):`${n.config.apiScheme}://${i}`;return DN.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function MN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Vr(this.auth,"network-request-failed")),LN.get())})}}function bh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Vr(n,e,r);return i.customData._tokenResponse=t,i}function QE(n){return n!==void 0&&n.enterprise!==void 0}class FN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return MN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function UN(n,e){return Ts(n,"GET","/v2/recaptchaConfig",ws(n,e))}/**
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
 */async function jN(n,e){return Ts(n,"POST","/v1/accounts:delete",e)}async function sd(n,e){return Ts(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BN(n,e=!1){const t=st(n),r=await t.getIdToken(e),i=Bg(r);Te(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:gu(dm(i.auth_time)),issuedAtTime:gu(dm(i.iat)),expirationTime:gu(dm(i.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function dm(n){return Number(n)*1e3}function Bg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bh("JWT malformed, contained fewer than 3 sections"),null;try{const i=nd(t);return i?JSON.parse(i):(Bh("Failed to decode base64 JWT payload"),null)}catch(i){return Bh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function YE(n){const e=Bg(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Nu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Xn&&zN(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function zN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class $N{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gu(this.lastLoginAt),this.creationTime=gu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function od(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Nu(n,sd(t,{idToken:r}));Te(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];n._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?t0(a.providerUserInfo):[],h=HN(n.providerData,l),f=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),y=f?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new zm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function WN(n){const e=st(n);await od(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HN(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function t0(n){return n.map(e=>{var{providerId:t}=e,r=Fg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qN(n,e){const t=await ZI(n,{},async()=>{const r=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,l=await e0(n,i,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",XI.fetch()(l,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function GN(n,e){return Ts(n,"POST","/v2/accounts:revokeToken",ws(n,e))}/**
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
 */class Na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=YE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await qN(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,l=new Na;return r&&(Te(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(Te(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),a&&(Te(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Na,this.toJSON())}_performRefresh(){return fi("not implemented")}}/**
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
 */function Ji(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,a=Fg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $N(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new zm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Nu(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BN(this,e)}reload(){return WN(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await od(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(gi(this.auth));const e=await this.getIdToken();return await Nu(this,jN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,a,l,h,f,p,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,k=(l=t.photoURL)!==null&&l!==void 0?l:void 0,L=(h=t.tenantId)!==null&&h!==void 0?h:void 0,N=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,K=(p=t.createdAt)!==null&&p!==void 0?p:void 0,te=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Z,emailVerified:oe,isAnonymous:Ee,providerData:we,stsTokenManager:b}=t;Te(Z&&b,e,"internal-error");const S=Na.fromJSON(this.name,b);Te(typeof Z=="string",e,"internal-error"),Ji(v,e.name),Ji(T,e.name),Te(typeof oe=="boolean",e,"internal-error"),Te(typeof Ee=="boolean",e,"internal-error"),Ji(R,e.name),Ji(k,e.name),Ji(L,e.name),Ji(N,e.name),Ji(K,e.name),Ji(te,e.name);const P=new gr({uid:Z,auth:e,email:T,emailVerified:oe,displayName:v,isAnonymous:Ee,photoURL:k,phoneNumber:R,tenantId:L,stsTokenManager:S,createdAt:K,lastLoginAt:te});return we&&Array.isArray(we)&&(P.providerData=we.map(O=>Object.assign({},O))),N&&(P._redirectEventId=N),P}static async _fromIdTokenResponse(e,t,r=!1){const i=new Na;i.updateFromServerResponse(t);const a=new gr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await od(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Te(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?t0(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),h=new Na;h.updateFromIdToken(r);const f=new gr({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,p),f}}/**
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
 */const JE=new Map;function pi(n){Ei(n instanceof Function,"Expected a class definition");let e=JE.get(n);return e?(Ei(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,JE.set(n,e),e)}/**
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
 */class n0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}n0.type="NONE";const XE=n0;/**
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
 */function zh(n,e,t){return`firebase:${n}:${e}:${t}`}class xa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=zh(this.userKey,i.apiKey,a),this.fullPersistenceKey=zh("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sd(this.auth,{idToken:e}).catch(()=>{});return t?gr._fromGetAccountInfoResponse(this.auth,t,e):null}return gr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xa(pi(XE),e,r);const i=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=i[0]||pi(XE);const l=zh(r,e.config.apiKey,e.name);let h=null;for(const p of t)try{const y=await p._get(l);if(y){let v;if(typeof y=="string"){const T=await sd(e,{idToken:y}).catch(()=>{});if(!T)break;v=await gr._fromGetAccountInfoResponse(e,T,y)}else v=gr._fromJSON(e,y);p!==a&&(h=v),a=p;break}}catch{}const f=i.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new xa(a,e,r):(a=f[0],h&&await a._set(l,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==a)try{await p._remove(l)}catch{}})),new xa(a,e,r))}}/**
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
 */function ZE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l0(e))return"Blackberry";if(u0(e))return"Webos";if(i0(e))return"Safari";if((e.includes("chrome/")||s0(e))&&!e.includes("edge/"))return"Chrome";if(a0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function r0(n=an()){return/firefox\//i.test(n)}function i0(n=an()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s0(n=an()){return/crios\//i.test(n)}function o0(n=an()){return/iemobile/i.test(n)}function a0(n=an()){return/android/i.test(n)}function l0(n=an()){return/blackberry/i.test(n)}function u0(n=an()){return/webos/i.test(n)}function zg(n=an()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function KN(n=an()){var e;return zg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QN(){return rk()&&document.documentMode===10}function c0(n=an()){return zg(n)||a0(n)||u0(n)||l0(n)||/windows phone/i.test(n)||o0(n)}/**
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
 */function h0(n,e=[]){let t;switch(n){case"Browser":t=ZE(an());break;case"Worker":t=`${ZE(an())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Es}/${r}`}/**
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
 */class YN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((l,h)=>{try{const f=e(a);l(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JN(n,e={}){return Ts(n,"GET","/v2/passwordPolicy",ws(n,e))}/**
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
 */const XN=6;class ZN{constructor(e){var t,r,i,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:XN,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,a,l,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(i=f.containsLowercaseLetter)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(l=f.containsNumericCharacter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class ex{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ew(this),this.idTokenSubscription=new ew(this),this.beforeStateQueue=new YN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pi(t)),this._initializationPromise=this.queue(async()=>{var r,i,a;if(!this._deleted&&(this.persistenceManager=await xa.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sd(this,{idToken:e}),r=await gr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=i==null?void 0:i._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&(f!=null&&f.user)&&(i=f.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await od(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(gi(this));const t=e?st(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JN(this),t=new ZN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Co("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await GN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pi(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await xa.create(this,[pi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(h,this,"internal-error"),h.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,i);return()=>{l=!0,f()}}else{const f=e.addObserver(t);return()=>{l=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kN(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ro(n){return st(n)}class ew{constructor(e){this.auth=e,this.observer=null,this.addObserver=fk(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tx(n){Wd=n}function d0(n){return Wd.loadJS(n)}function nx(){return Wd.recaptchaEnterpriseScript}function rx(){return Wd.gapiScript}function ix(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class sx{constructor(){this.enterprise=new ox}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ox{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ax="recaptcha-enterprise",f0="NO_RECAPTCHA";class lx{constructor(e){this.type=ax,this.auth=Ro(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,h)=>{UN(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const p=new FN(f);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,l(p.siteKey)}}).catch(f=>{h(f)})})}function i(a,l,h){const f=window.grecaptcha;QE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(p=>{l(p)}).catch(()=>{l(f0)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sx().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{r(this.auth).then(h=>{if(!t&&QE(window.grecaptcha))i(h,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let f=nx();f.length!==0&&(f+=h),d0(f).then(()=>{i(h,a,l)}).catch(p=>{l(p)})}}).catch(h=>{l(h)})})}}async function tw(n,e,t,r=!1,i=!1){const a=new lx(n);let l;if(i)l=f0;else try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,p=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:p,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function $m(n,e,t,r,i){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await tw(n,e,t,t==="getOobCode");return r(n,l)}else return r(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await tw(n,e,t,t==="getOobCode");return r(n,h)}else return Promise.reject(l)})}/**
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
 */function ux(n,e){const t=Ci(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Br(a,e??{}))return i;Tr(i,"already-initialized")}return t.initialize({options:e})}function cx(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(pi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hx(n,e,t){const r=Ro(n);Te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=p0(e),{host:l,port:h}=dx(e),f=h===null?"":`:${h}`,p={url:`${a}//${l}${f}/`},y=Object.freeze({host:l,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Te(Br(p,r.config.emulator)&&Br(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,fx()}function p0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function dx(n){const e=p0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:nw(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:nw(l)}}}function nw(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class $g{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fi("not implemented")}_getIdTokenResponse(e){return fi("not implemented")}_linkToIdToken(e,t){return fi("not implemented")}_getReauthenticationResolver(e){return fi("not implemented")}}async function px(n,e){return Ts(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mx(n,e){return Xu(n,"POST","/v1/accounts:signInWithPassword",ws(n,e))}/**
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
 */async function gx(n,e){return Xu(n,"POST","/v1/accounts:signInWithEmailLink",ws(n,e))}async function _x(n,e){return Xu(n,"POST","/v1/accounts:signInWithEmailLink",ws(n,e))}/**
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
 */class xu extends $g{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new xu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new xu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $m(e,t,"signInWithPassword",mx);case"emailLink":return gx(e,{email:this._email,oobCode:this._password});default:Tr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $m(e,r,"signUpPassword",px);case"emailLink":return _x(e,{idToken:t,email:this._email,oobCode:this._password});default:Tr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ba(n,e){return Xu(n,"POST","/v1/accounts:signInWithIdp",ws(n,e))}/**
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
 */const yx="http://localhost";class fo extends $g{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,a=Fg(t,["providerId","signInMethod"]);if(!r||!i)return null;const l=new fo(r,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return ba(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ba(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ba(e,t)}buildRequest(){const e={requestUri:yx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ka(t)}return e}}/**
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
 */function vx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ex(n){const e=cu(hu(n)).link,t=e?cu(hu(e)).deep_link_id:null,r=cu(hu(n)).deep_link_id;return(r?cu(hu(r)).link:null)||r||t||e||n}class Wg{constructor(e){var t,r,i,a,l,h;const f=cu(hu(e)),p=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,v=vx((i=f.mode)!==null&&i!==void 0?i:null);Te(p&&y&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=f.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=Ex(e);try{return new Wg(t)}catch{return null}}}/**
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
 */class Qa{constructor(){this.providerId=Qa.PROVIDER_ID}static credential(e,t){return xu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wg.parseLink(t);return Te(r,"argument-error"),xu._fromEmailAndCode(e,r.code,r.tenantId)}}Qa.PROVIDER_ID="password";Qa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class m0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zu extends m0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xi extends Zu{constructor(){super("facebook.com")}static credential(e){return fo._fromParams({providerId:Xi.PROVIDER_ID,signInMethod:Xi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xi.credentialFromTaggedObject(e)}static credentialFromError(e){return Xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xi.credential(e.oauthAccessToken)}catch{return null}}}Xi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xi.PROVIDER_ID="facebook.com";/**
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
 */class Zi extends Zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fo._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zi.credentialFromTaggedObject(e)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Zi.credential(t,r)}catch{return null}}}Zi.GOOGLE_SIGN_IN_METHOD="google.com";Zi.PROVIDER_ID="google.com";/**
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
 */class es extends Zu{constructor(){super("github.com")}static credential(e){return fo._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.GITHUB_SIGN_IN_METHOD="github.com";es.PROVIDER_ID="github.com";/**
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
 */class ts extends Zu{constructor(){super("twitter.com")}static credential(e,t){return fo._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ts.credential(t,r)}catch{return null}}}ts.TWITTER_SIGN_IN_METHOD="twitter.com";ts.PROVIDER_ID="twitter.com";/**
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
 */async function wx(n,e){return Xu(n,"POST","/v1/accounts:signUp",ws(n,e))}/**
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
 */class po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await gr._fromIdTokenResponse(e,r,i),l=rw(r);return new po({user:a,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=rw(r);return new po({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function rw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ad extends Xn{constructor(e,t,r,i){var a;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ad.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ad(e,t,r,i)}}function g0(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ad._fromErrorAndOperation(n,a,e,r):a})}async function Tx(n,e,t=!1){const r=await Nu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return po._forOperation(n,"link",r)}/**
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
 */async function Ix(n,e,t=!1){const{auth:r}=n;if(wn(r.app))return Promise.reject(gi(r));const i="reauthenticate";try{const a=await Nu(n,g0(r,i,e,n),t);Te(a.idToken,r,"internal-error");const l=Bg(a.idToken);Te(l,r,"internal-error");const{sub:h}=l;return Te(n.uid===h,r,"user-mismatch"),po._forOperation(n,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Tr(r,"user-mismatch"),a}}/**
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
 */async function _0(n,e,t=!1){if(wn(n.app))return Promise.reject(gi(n));const r="signIn",i=await g0(n,r,e),a=await po._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function Sx(n,e){return _0(Ro(n),e)}/**
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
 */async function y0(n){const e=Ro(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Cx(n,e,t){if(wn(n.app))return Promise.reject(gi(n));const r=Ro(n),l=await $m(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wx).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&y0(n),f}),h=await po._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(h.user),h}function Rx(n,e,t){return wn(n.app)?Promise.reject(gi(n)):Sx(st(n),Qa.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&y0(n),r})}function Ax(n,e,t,r){return st(n).onIdTokenChanged(e,t,r)}function Px(n,e,t){return st(n).beforeAuthStateChanged(e,t)}function kx(n,e,t,r){return st(n).onAuthStateChanged(e,t,r)}const ld="__sak";/**
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
 */class v0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ld,"1"),this.storage.removeItem(ld),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nx=1e3,xx=10;class E0 extends v0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=c0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,h,f)=>{this.notifyListeners(l,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);QN()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xx):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}E0.type="LOCAL";const bx=E0;/**
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
 */class w0 extends v0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}w0.type="SESSION";const T0=w0;/**
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
 */function Ox(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Hd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const h=Array.from(l).map(async p=>p(t.origin,a)),f=await Ox(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hd.receivers=[];/**
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
 */function Hg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Dx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((h,f)=>{const p=Hg("",20);i.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(v){const T=v;if(T.data.eventId===p)switch(T.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(T.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Fr(){return window}function Lx(n){Fr().location.href=n}/**
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
 */function I0(){return typeof Fr().WorkerGlobalScope<"u"&&typeof Fr().importScripts=="function"}async function Mx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vx(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Fx(){return I0()?self:null}/**
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
 */const S0="firebaseLocalStorageDb",Ux=1,ud="firebaseLocalStorage",C0="fbase_key";class ec{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qd(n,e){return n.transaction([ud],e?"readwrite":"readonly").objectStore(ud)}function jx(){const n=indexedDB.deleteDatabase(S0);return new ec(n).toPromise()}function Wm(){const n=indexedDB.open(S0,Ux);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ud,{keyPath:C0})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ud)?e(r):(r.close(),await jx(),e(await Wm()))})})}async function iw(n,e,t){const r=qd(n,!0).put({[C0]:e,value:t});return new ec(r).toPromise()}async function Bx(n,e){const t=qd(n,!1).get(e),r=await new ec(t).toPromise();return r===void 0?null:r.value}function sw(n,e){const t=qd(n,!0).delete(e);return new ec(t).toPromise()}const zx=800,$x=3;class R0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>$x)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hd._getInstance(Fx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mx(),!this.activeServiceWorker)return;this.sender=new Dx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wm();return await iw(e,ld,"1"),await sw(e,ld),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>iw(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Bx(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=qd(i,!1).getAll();return new ec(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R0.type="LOCAL";const Wx=R0;new Ju(3e4,6e4);/**
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
 */function Hx(n,e){return e?pi(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class qg extends $g{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ba(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ba(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ba(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qx(n){return _0(n.auth,new qg(n),n.bypassAuthState)}function Gx(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),Ix(t,new qg(n),n.bypassAuthState)}async function Kx(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),Tx(t,new qg(n),n.bypassAuthState)}/**
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
 */class A0{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:l,type:h}=e;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qx;case"linkViaPopup":case"linkViaRedirect":return Kx;case"reauthViaPopup":case"reauthViaRedirect":return Gx;default:Tr(this.auth,"internal-error")}}resolve(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qx=new Ju(2e3,1e4);class Pa extends A0{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Pa.currentPopupAction&&Pa.currentPopupAction.cancel(),Pa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Ei(this.filter.length===1,"Popup operations only handle one event");const e=Hg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qx.get())};e()}}Pa.currentPopupAction=null;/**
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
 */const Yx="pendingRedirect",$h=new Map;class Jx extends A0{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$h.get(this.auth._key());if(!e){try{const r=await Xx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$h.set(this.auth._key(),e)}return this.bypassAuthState||$h.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xx(n,e){const t=t1(e),r=e1(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Zx(n,e){$h.set(n._key(),e)}function e1(n){return pi(n._redirectPersistence)}function t1(n){return zh(Yx,n.config.apiKey,n.name)}async function n1(n,e,t=!1){if(wn(n.app))return Promise.reject(gi(n));const r=Ro(n),i=Hx(r,e),l=await new Jx(r,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const r1=10*60*1e3;class i1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!P0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Vr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=r1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ow(e))}saveEventToCache(e){this.cachedEventUids.add(ow(e)),this.lastProcessedEventTime=Date.now()}}function ow(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function P0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P0(n);default:return!1}}/**
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
 */async function o1(n,e={}){return Ts(n,"GET","/v1/projects",e)}/**
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
 */const a1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,l1=/^https?/;async function u1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await o1(n);for(const t of e)try{if(c1(t))return}catch{}Tr(n,"unauthorized-domain")}function c1(n){const e=Bm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!l1.test(t))return!1;if(a1.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const h1=new Ju(3e4,6e4);function aw(){const n=Fr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function d1(n){return new Promise((e,t)=>{var r,i,a;function l(){aw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{aw(),t(Vr(n,"network-request-failed"))},timeout:h1.get()})}if(!((i=(r=Fr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Fr().gapi)===null||a===void 0)&&a.load)l();else{const h=ix("iframefcb");return Fr()[h]=()=>{gapi.load?l():t(Vr(n,"network-request-failed"))},d0(`${rx()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw Wh=null,e})}let Wh=null;function f1(n){return Wh=Wh||d1(n),Wh}/**
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
 */const p1=new Ju(5e3,15e3),m1="__/auth/iframe",g1="emulator/auth/iframe",_1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function v1(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jg(e,g1):`https://${n.config.authDomain}/${m1}`,r={apiKey:e.apiKey,appName:n.name,v:Es},i=y1.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ka(r).slice(1)}`}async function E1(n){const e=await f1(n),t=Fr().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:v1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_1,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const l=Vr(n,"network-request-failed"),h=Fr().setTimeout(()=>{a(l)},p1.get());function f(){Fr().clearTimeout(h),i(r)}r.ping(f).then(f,()=>{a(l)})}))}/**
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
 */const w1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T1=500,I1=600,S1="_blank",C1="http://localhost";class lw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function R1(n,e,t,r=T1,i=I1){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},w1),{width:r.toString(),height:i.toString(),top:a,left:l}),p=an().toLowerCase();t&&(h=s0(p)?S1:t),r0(p)&&(e=e||C1,f.scrollbars="yes");const y=Object.entries(f).reduce((T,[R,k])=>`${T}${R}=${k},`,"");if(KN(p)&&h!=="_self")return A1(e||"",h),new lw(null);const v=window.open(e||"",h,y);Te(v,n,"popup-blocked");try{v.focus()}catch{}return new lw(v)}function A1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const P1="__/auth/handler",k1="emulator/auth/handler",N1=encodeURIComponent("fac");async function uw(n,e,t,r,i,a){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Es,eventId:i};if(e instanceof m0){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Lm(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries({}))l[y]=v}if(e instanceof Zu){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(l.scopes=y.join(","))}n.tenantId&&(l.tid=n.tenantId);const h=l;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),p=f?`#${N1}=${encodeURIComponent(f)}`:"";return`${x1(n)}?${Ka(h).slice(1)}${p}`}function x1({config:n}){return n.emulator?jg(n,k1):`https://${n.authDomain}/${P1}`}/**
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
 */const fm="webStorageSupport";class b1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T0,this._completeRedirectFn=n1,this._overrideRedirectResult=Zx}async _openPopup(e,t,r,i){var a;Ei((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await uw(e,t,r,Bm(),i);return R1(e,l,Hg())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await uw(e,t,r,Bm(),i);return Lx(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Ei(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await E1(e),r=new i1(e);return t.register("authEvent",i=>(Te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fm,{type:fm},i=>{var a;const l=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[fm];l!==void 0&&t(!!l),Tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=u1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return c0()||i0()||zg()}}const O1=b1;var cw="@firebase/auth",hw="1.10.0";/**
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
 */class D1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function L1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function M1(n){Jn(new jn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:h}=r.options;Te(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:l,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h0(n)},p=new ex(r,i,a,f);return cx(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Jn(new jn("auth-internal",e=>{const t=Ro(e.getProvider("auth").getImmediate());return(r=>new D1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(cw,hw,L1(n)),on(cw,hw,"esm2017")}/**
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
 */const V1=5*60,F1=VI("authIdTokenMaxAge")||V1;let dw=null;const U1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>F1)return;const i=t==null?void 0:t.token;dw!==i&&(dw=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function j1(n=Yu()){const e=Ci(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ux(n,{popupRedirectResolver:O1,persistence:[Wx,bx,T0]}),r=VI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=U1(a.toString());Px(t,l,()=>l(t.currentUser)),Ax(t,h=>l(h))}}const i=LI("auth");return i&&hx(t,`http://${i}`),t}function B1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}tx({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=Vr("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",B1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});M1("Browser");var fw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var os,k0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,S){function P(){}P.prototype=S.prototype,b.D=S.prototype,b.prototype=new P,b.prototype.constructor=b,b.C=function(O,M,F){for(var A=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)A[pt-2]=arguments[pt];return S.prototype[M].apply(O,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,S,P){P||(P=0);var O=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)O[M]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(M=0;16>M;++M)O[M]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=b.g[0],P=b.g[1],M=b.g[2];var F=b.g[3],A=S+(F^P&(M^F))+O[0]+3614090360&4294967295;S=P+(A<<7&4294967295|A>>>25),A=F+(M^S&(P^M))+O[1]+3905402710&4294967295,F=S+(A<<12&4294967295|A>>>20),A=M+(P^F&(S^P))+O[2]+606105819&4294967295,M=F+(A<<17&4294967295|A>>>15),A=P+(S^M&(F^S))+O[3]+3250441966&4294967295,P=M+(A<<22&4294967295|A>>>10),A=S+(F^P&(M^F))+O[4]+4118548399&4294967295,S=P+(A<<7&4294967295|A>>>25),A=F+(M^S&(P^M))+O[5]+1200080426&4294967295,F=S+(A<<12&4294967295|A>>>20),A=M+(P^F&(S^P))+O[6]+2821735955&4294967295,M=F+(A<<17&4294967295|A>>>15),A=P+(S^M&(F^S))+O[7]+4249261313&4294967295,P=M+(A<<22&4294967295|A>>>10),A=S+(F^P&(M^F))+O[8]+1770035416&4294967295,S=P+(A<<7&4294967295|A>>>25),A=F+(M^S&(P^M))+O[9]+2336552879&4294967295,F=S+(A<<12&4294967295|A>>>20),A=M+(P^F&(S^P))+O[10]+4294925233&4294967295,M=F+(A<<17&4294967295|A>>>15),A=P+(S^M&(F^S))+O[11]+2304563134&4294967295,P=M+(A<<22&4294967295|A>>>10),A=S+(F^P&(M^F))+O[12]+1804603682&4294967295,S=P+(A<<7&4294967295|A>>>25),A=F+(M^S&(P^M))+O[13]+4254626195&4294967295,F=S+(A<<12&4294967295|A>>>20),A=M+(P^F&(S^P))+O[14]+2792965006&4294967295,M=F+(A<<17&4294967295|A>>>15),A=P+(S^M&(F^S))+O[15]+1236535329&4294967295,P=M+(A<<22&4294967295|A>>>10),A=S+(M^F&(P^M))+O[1]+4129170786&4294967295,S=P+(A<<5&4294967295|A>>>27),A=F+(P^M&(S^P))+O[6]+3225465664&4294967295,F=S+(A<<9&4294967295|A>>>23),A=M+(S^P&(F^S))+O[11]+643717713&4294967295,M=F+(A<<14&4294967295|A>>>18),A=P+(F^S&(M^F))+O[0]+3921069994&4294967295,P=M+(A<<20&4294967295|A>>>12),A=S+(M^F&(P^M))+O[5]+3593408605&4294967295,S=P+(A<<5&4294967295|A>>>27),A=F+(P^M&(S^P))+O[10]+38016083&4294967295,F=S+(A<<9&4294967295|A>>>23),A=M+(S^P&(F^S))+O[15]+3634488961&4294967295,M=F+(A<<14&4294967295|A>>>18),A=P+(F^S&(M^F))+O[4]+3889429448&4294967295,P=M+(A<<20&4294967295|A>>>12),A=S+(M^F&(P^M))+O[9]+568446438&4294967295,S=P+(A<<5&4294967295|A>>>27),A=F+(P^M&(S^P))+O[14]+3275163606&4294967295,F=S+(A<<9&4294967295|A>>>23),A=M+(S^P&(F^S))+O[3]+4107603335&4294967295,M=F+(A<<14&4294967295|A>>>18),A=P+(F^S&(M^F))+O[8]+1163531501&4294967295,P=M+(A<<20&4294967295|A>>>12),A=S+(M^F&(P^M))+O[13]+2850285829&4294967295,S=P+(A<<5&4294967295|A>>>27),A=F+(P^M&(S^P))+O[2]+4243563512&4294967295,F=S+(A<<9&4294967295|A>>>23),A=M+(S^P&(F^S))+O[7]+1735328473&4294967295,M=F+(A<<14&4294967295|A>>>18),A=P+(F^S&(M^F))+O[12]+2368359562&4294967295,P=M+(A<<20&4294967295|A>>>12),A=S+(P^M^F)+O[5]+4294588738&4294967295,S=P+(A<<4&4294967295|A>>>28),A=F+(S^P^M)+O[8]+2272392833&4294967295,F=S+(A<<11&4294967295|A>>>21),A=M+(F^S^P)+O[11]+1839030562&4294967295,M=F+(A<<16&4294967295|A>>>16),A=P+(M^F^S)+O[14]+4259657740&4294967295,P=M+(A<<23&4294967295|A>>>9),A=S+(P^M^F)+O[1]+2763975236&4294967295,S=P+(A<<4&4294967295|A>>>28),A=F+(S^P^M)+O[4]+1272893353&4294967295,F=S+(A<<11&4294967295|A>>>21),A=M+(F^S^P)+O[7]+4139469664&4294967295,M=F+(A<<16&4294967295|A>>>16),A=P+(M^F^S)+O[10]+3200236656&4294967295,P=M+(A<<23&4294967295|A>>>9),A=S+(P^M^F)+O[13]+681279174&4294967295,S=P+(A<<4&4294967295|A>>>28),A=F+(S^P^M)+O[0]+3936430074&4294967295,F=S+(A<<11&4294967295|A>>>21),A=M+(F^S^P)+O[3]+3572445317&4294967295,M=F+(A<<16&4294967295|A>>>16),A=P+(M^F^S)+O[6]+76029189&4294967295,P=M+(A<<23&4294967295|A>>>9),A=S+(P^M^F)+O[9]+3654602809&4294967295,S=P+(A<<4&4294967295|A>>>28),A=F+(S^P^M)+O[12]+3873151461&4294967295,F=S+(A<<11&4294967295|A>>>21),A=M+(F^S^P)+O[15]+530742520&4294967295,M=F+(A<<16&4294967295|A>>>16),A=P+(M^F^S)+O[2]+3299628645&4294967295,P=M+(A<<23&4294967295|A>>>9),A=S+(M^(P|~F))+O[0]+4096336452&4294967295,S=P+(A<<6&4294967295|A>>>26),A=F+(P^(S|~M))+O[7]+1126891415&4294967295,F=S+(A<<10&4294967295|A>>>22),A=M+(S^(F|~P))+O[14]+2878612391&4294967295,M=F+(A<<15&4294967295|A>>>17),A=P+(F^(M|~S))+O[5]+4237533241&4294967295,P=M+(A<<21&4294967295|A>>>11),A=S+(M^(P|~F))+O[12]+1700485571&4294967295,S=P+(A<<6&4294967295|A>>>26),A=F+(P^(S|~M))+O[3]+2399980690&4294967295,F=S+(A<<10&4294967295|A>>>22),A=M+(S^(F|~P))+O[10]+4293915773&4294967295,M=F+(A<<15&4294967295|A>>>17),A=P+(F^(M|~S))+O[1]+2240044497&4294967295,P=M+(A<<21&4294967295|A>>>11),A=S+(M^(P|~F))+O[8]+1873313359&4294967295,S=P+(A<<6&4294967295|A>>>26),A=F+(P^(S|~M))+O[15]+4264355552&4294967295,F=S+(A<<10&4294967295|A>>>22),A=M+(S^(F|~P))+O[6]+2734768916&4294967295,M=F+(A<<15&4294967295|A>>>17),A=P+(F^(M|~S))+O[13]+1309151649&4294967295,P=M+(A<<21&4294967295|A>>>11),A=S+(M^(P|~F))+O[4]+4149444226&4294967295,S=P+(A<<6&4294967295|A>>>26),A=F+(P^(S|~M))+O[11]+3174756917&4294967295,F=S+(A<<10&4294967295|A>>>22),A=M+(S^(F|~P))+O[2]+718787259&4294967295,M=F+(A<<15&4294967295|A>>>17),A=P+(F^(M|~S))+O[9]+3951481745&4294967295,b.g[0]=b.g[0]+S&4294967295,b.g[1]=b.g[1]+(M+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+M&4294967295,b.g[3]=b.g[3]+F&4294967295}r.prototype.u=function(b,S){S===void 0&&(S=b.length);for(var P=S-this.blockSize,O=this.B,M=this.h,F=0;F<S;){if(M==0)for(;F<=P;)i(this,b,F),F+=this.blockSize;if(typeof b=="string"){for(;F<S;)if(O[M++]=b.charCodeAt(F++),M==this.blockSize){i(this,O),M=0;break}}else for(;F<S;)if(O[M++]=b[F++],M==this.blockSize){i(this,O),M=0;break}}this.h=M,this.o+=S},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var S=1;S<b.length-8;++S)b[S]=0;var P=8*this.o;for(S=b.length-8;S<b.length;++S)b[S]=P&255,P/=256;for(this.u(b),b=Array(16),S=P=0;4>S;++S)for(var O=0;32>O;O+=8)b[P++]=this.g[S]>>>O&255;return b};function a(b,S){var P=h;return Object.prototype.hasOwnProperty.call(P,b)?P[b]:P[b]=S(b)}function l(b,S){this.h=S;for(var P=[],O=!0,M=b.length-1;0<=M;M--){var F=b[M]|0;O&&F==S||(P[M]=F,O=!1)}this.g=P}var h={};function f(b){return-128<=b&&128>b?a(b,function(S){return new l([S|0],0>S?-1:0)}):new l([b|0],0>b?-1:0)}function p(b){if(isNaN(b)||!isFinite(b))return v;if(0>b)return N(p(-b));for(var S=[],P=1,O=0;b>=P;O++)S[O]=b/P|0,P*=4294967296;return new l(S,0)}function y(b,S){if(b.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(b.charAt(0)=="-")return N(y(b.substring(1),S));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=p(Math.pow(S,8)),O=v,M=0;M<b.length;M+=8){var F=Math.min(8,b.length-M),A=parseInt(b.substring(M,M+F),S);8>F?(F=p(Math.pow(S,F)),O=O.j(F).add(p(A))):(O=O.j(P),O=O.add(p(A)))}return O}var v=f(0),T=f(1),R=f(16777216);n=l.prototype,n.m=function(){if(L(this))return-N(this).m();for(var b=0,S=1,P=0;P<this.g.length;P++){var O=this.i(P);b+=(0<=O?O:4294967296+O)*S,S*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if(L(this))return"-"+N(this).toString(b);for(var S=p(Math.pow(b,6)),P=this,O="";;){var M=oe(P,S).g;P=K(P,M.j(S));var F=((0<P.g.length?P.g[0]:P.h)>>>0).toString(b);if(P=M,k(P))return F+O;for(;6>F.length;)F="0"+F;O=F+O}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(var S=0;S<b.g.length;S++)if(b.g[S]!=0)return!1;return!0}function L(b){return b.h==-1}n.l=function(b){return b=K(this,b),L(b)?-1:k(b)?0:1};function N(b){for(var S=b.g.length,P=[],O=0;O<S;O++)P[O]=~b.g[O];return new l(P,~b.h).add(T)}n.abs=function(){return L(this)?N(this):this},n.add=function(b){for(var S=Math.max(this.g.length,b.g.length),P=[],O=0,M=0;M<=S;M++){var F=O+(this.i(M)&65535)+(b.i(M)&65535),A=(F>>>16)+(this.i(M)>>>16)+(b.i(M)>>>16);O=A>>>16,F&=65535,A&=65535,P[M]=A<<16|F}return new l(P,P[P.length-1]&-2147483648?-1:0)};function K(b,S){return b.add(N(S))}n.j=function(b){if(k(this)||k(b))return v;if(L(this))return L(b)?N(this).j(N(b)):N(N(this).j(b));if(L(b))return N(this.j(N(b)));if(0>this.l(R)&&0>b.l(R))return p(this.m()*b.m());for(var S=this.g.length+b.g.length,P=[],O=0;O<2*S;O++)P[O]=0;for(O=0;O<this.g.length;O++)for(var M=0;M<b.g.length;M++){var F=this.i(O)>>>16,A=this.i(O)&65535,pt=b.i(M)>>>16,Kt=b.i(M)&65535;P[2*O+2*M]+=A*Kt,te(P,2*O+2*M),P[2*O+2*M+1]+=F*Kt,te(P,2*O+2*M+1),P[2*O+2*M+1]+=A*pt,te(P,2*O+2*M+1),P[2*O+2*M+2]+=F*pt,te(P,2*O+2*M+2)}for(O=0;O<S;O++)P[O]=P[2*O+1]<<16|P[2*O];for(O=S;O<2*S;O++)P[O]=0;return new l(P,0)};function te(b,S){for(;(b[S]&65535)!=b[S];)b[S+1]+=b[S]>>>16,b[S]&=65535,S++}function Z(b,S){this.g=b,this.h=S}function oe(b,S){if(k(S))throw Error("division by zero");if(k(b))return new Z(v,v);if(L(b))return S=oe(N(b),S),new Z(N(S.g),N(S.h));if(L(S))return S=oe(b,N(S)),new Z(N(S.g),S.h);if(30<b.g.length){if(L(b)||L(S))throw Error("slowDivide_ only works with positive integers.");for(var P=T,O=S;0>=O.l(b);)P=Ee(P),O=Ee(O);var M=we(P,1),F=we(O,1);for(O=we(O,2),P=we(P,2);!k(O);){var A=F.add(O);0>=A.l(b)&&(M=M.add(P),F=A),O=we(O,1),P=we(P,1)}return S=K(b,M.j(S)),new Z(M,S)}for(M=v;0<=b.l(S);){for(P=Math.max(1,Math.floor(b.m()/S.m())),O=Math.ceil(Math.log(P)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),F=p(P),A=F.j(S);L(A)||0<A.l(b);)P-=O,F=p(P),A=F.j(S);k(F)&&(F=T),M=M.add(F),b=K(b,A)}return new Z(M,b)}n.A=function(b){return oe(this,b).h},n.and=function(b){for(var S=Math.max(this.g.length,b.g.length),P=[],O=0;O<S;O++)P[O]=this.i(O)&b.i(O);return new l(P,this.h&b.h)},n.or=function(b){for(var S=Math.max(this.g.length,b.g.length),P=[],O=0;O<S;O++)P[O]=this.i(O)|b.i(O);return new l(P,this.h|b.h)},n.xor=function(b){for(var S=Math.max(this.g.length,b.g.length),P=[],O=0;O<S;O++)P[O]=this.i(O)^b.i(O);return new l(P,this.h^b.h)};function Ee(b){for(var S=b.g.length+1,P=[],O=0;O<S;O++)P[O]=b.i(O)<<1|b.i(O-1)>>>31;return new l(P,b.h)}function we(b,S){var P=S>>5;S%=32;for(var O=b.g.length-P,M=[],F=0;F<O;F++)M[F]=0<S?b.i(F+P)>>>S|b.i(F+P+1)<<32-S:b.i(F+P);return new l(M,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,k0=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=y,os=l}).apply(typeof fw<"u"?fw:typeof self<"u"?self:typeof window<"u"?window:{});var Oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var N0,du,x0,Hh,Hm,b0,O0,D0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,E){return c==Array.prototype||c==Object.prototype||(c[g]=E.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oh=="object"&&Oh];for(var g=0;g<c.length;++g){var E=c[g];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function i(c,g){if(g)e:{var E=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var U=c[I];if(!(U in E))break e;E=E[U]}c=c[c.length-1],I=E[c],g=g(I),g!=I&&g!=null&&e(E,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var E=0,I=!1,U={next:function(){if(!I&&E<c.length){var W=E++;return{value:g(W,c[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}i("Array.prototype.values",function(c){return c||function(){return a(this,function(g,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function p(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,E){return c.call.apply(c.bind,arguments)}function v(c,g,E){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),c.apply(g,U)}}return function(){return c.apply(g,arguments)}}function T(c,g,E){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,T.apply(null,arguments)}function R(c,g){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function k(c,g){function E(){}E.prototype=g.prototype,c.aa=g.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(I,U,W){for(var ie=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)ie[Ke-2]=arguments[Ke];return g.prototype[U].apply(I,ie)}}function L(c){const g=c.length;if(0<g){const E=Array(g);for(let I=0;I<g;I++)E[I]=c[I];return E}return[]}function N(c,g){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(f(I)){const U=c.length||0,W=I.length||0;c.length=U+W;for(let ie=0;ie<W;ie++)c[U+ie]=I[ie]}else c.push(I)}}class K{constructor(g,E){this.i=g,this.j=E,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function te(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function oe(c){return oe[" "](c),c}oe[" "]=function(){};var Ee=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function we(c,g,E){for(const I in c)g.call(E,c[I],I,c)}function b(c,g){for(const E in c)g.call(void 0,c[E],E,c)}function S(c){const g={};for(const E in c)g[E]=c[E];return g}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,g){let E,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(E in I)c[E]=I[E];for(let W=0;W<P.length;W++)E=P[W],Object.prototype.hasOwnProperty.call(I,E)&&(c[E]=I[E])}}function M(c){var g=1;c=c.split(":");const E=[];for(;0<g&&c.length;)E.push(c.shift()),g--;return c.length&&E.push(c.join(":")),E}function F(c){h.setTimeout(()=>{throw c},0)}function A(){var c=ge;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class pt{constructor(){this.h=this.g=null}add(g,E){const I=Kt.get();I.set(g,E),this.h?this.h.next=I:this.g=I,this.h=I}}var Kt=new K(()=>new Qt,c=>c.reset());class Qt{constructor(){this.next=this.g=this.h=null}set(g,E){this.h=g,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,se=!1,ge=new pt,le=()=>{const c=h.Promise.resolve(void 0);Qe=()=>{c.then(V)}};var V=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(E){F(E)}var g=Kt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}se=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var ke=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};h.addEventListener("test",E,g),h.removeEventListener("test",E,g)}catch{}return c}();function xe(c,g){if(me.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Ee){e:{try{oe(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else E=="mouseover"?g=c.fromElement:E=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ue[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&xe.aa.h.call(this)}}k(xe,me);var Ue={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),He=0;function Xe(c,g,E,I,U){this.listener=c,this.proxy=null,this.src=g,this.type=E,this.capture=!!I,this.ha=U,this.key=++He,this.da=this.fa=!1}function bt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Kr(c){this.src=c,this.g={},this.h=0}Kr.prototype.add=function(c,g,E,I,U){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var ie=Ri(c,g,I,U);return-1<ie?(g=c[ie],E||(g.fa=!1)):(g=new Xe(g,this.src,W,!!I,U),g.fa=E,c.push(g)),g};function No(c,g){var E=g.type;if(E in c.g){var I=c.g[E],U=Array.prototype.indexOf.call(I,g,void 0),W;(W=0<=U)&&Array.prototype.splice.call(I,U,1),W&&(bt(g),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Ri(c,g,E,I){for(var U=0;U<c.length;++U){var W=c[U];if(!W.da&&W.listener==g&&W.capture==!!E&&W.ha==I)return U}return-1}var Ps="closure_lm_"+(1e6*Math.random()|0),xo={};function ul(c,g,E,I,U){if(Array.isArray(g)){for(var W=0;W<g.length;W++)ul(c,g[W],E,I,U);return null}return E=dl(E),c&&c[We]?c.K(g,E,p(I)?!!I.capture:!1,U):cl(c,g,E,!1,I,U)}function cl(c,g,E,I,U,W){if(!g)throw Error("Invalid event type");var ie=p(U)?!!U.capture:!!U,Ke=Oo(c);if(Ke||(c[Ps]=Ke=new Kr(c)),E=Ke.add(g,E,I,ie,W),E.proxy)return E;if(I=gc(),E.proxy=I,I.src=c,I.listener=E,c.addEventListener)ke||(U=ie),U===void 0&&(U=!1),c.addEventListener(g.toString(),I,U);else if(c.attachEvent)c.attachEvent(Yr(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function gc(){function c(E){return g.call(c.src,c.listener,E)}const g=hl;return c}function bo(c,g,E,I,U){if(Array.isArray(g))for(var W=0;W<g.length;W++)bo(c,g[W],E,I,U);else I=p(I)?!!I.capture:!!I,E=dl(E),c&&c[We]?(c=c.i,g=String(g).toString(),g in c.g&&(W=c.g[g],E=Ri(W,E,I,U),-1<E&&(bt(W[E]),Array.prototype.splice.call(W,E,1),W.length==0&&(delete c.g[g],c.h--)))):c&&(c=Oo(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ri(g,E,I,U)),(E=-1<c?g[c]:null)&&Qr(E))}function Qr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[We])No(g.i,c);else{var E=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(E,I,c.capture):g.detachEvent?g.detachEvent(Yr(E),I):g.addListener&&g.removeListener&&g.removeListener(I),(E=Oo(g))?(No(E,c),E.h==0&&(E.src=null,g[Ps]=null)):bt(c)}}}function Yr(c){return c in xo?xo[c]:xo[c]="on"+c}function hl(c,g){if(c.da)c=!0;else{g=new xe(g,this);var E=c.listener,I=c.ha||c.src;c.fa&&Qr(c),c=E.call(I,g)}return c}function Oo(c){return c=c[Ps],c instanceof Kr?c:null}var Do="__closure_events_fn_"+(1e9*Math.random()>>>0);function dl(c){return typeof c=="function"?c:(c[Do]||(c[Do]=function(g){return c.handleEvent(g)}),c[Do])}function It(){G.call(this),this.i=new Kr(this),this.M=this,this.F=null}k(It,G),It.prototype[We]=!0,It.prototype.removeEventListener=function(c,g,E,I){bo(this,c,g,E,I)};function St(c,g){var E,I=c.F;if(I)for(E=[];I;I=I.F)E.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new me(g,c);else if(g instanceof me)g.target=g.target||c;else{var U=g;g=new me(I,c),O(g,U)}if(U=!0,E)for(var W=E.length-1;0<=W;W--){var ie=g.g=E[W];U=Jr(ie,I,!0,g)&&U}if(ie=g.g=c,U=Jr(ie,I,!0,g)&&U,U=Jr(ie,I,!1,g)&&U,E)for(W=0;W<E.length;W++)ie=g.g=E[W],U=Jr(ie,I,!1,g)&&U}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var E=c.g[g],I=0;I<E.length;I++)bt(E[I]);delete c.g[g],c.h--}}this.F=null},It.prototype.K=function(c,g,E,I){return this.i.add(String(c),g,!1,E,I)},It.prototype.L=function(c,g,E,I){return this.i.add(String(c),g,!0,E,I)};function Jr(c,g,E,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,W=0;W<g.length;++W){var ie=g[W];if(ie&&!ie.da&&ie.capture==E){var Ke=ie.listener,Ct=ie.ha||ie.src;ie.fa&&No(c.i,ie),U=Ke.call(Ct,I)!==!1&&U}}return U&&!I.defaultPrevented}function fl(c,g,E){if(typeof c=="function")E&&(c=T(c,E));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(c,g||0)}function Ai(c){c.g=fl(()=>{c.g=null,c.i&&(c.i=!1,Ai(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ks extends G{constructor(g,E){super(),this.m=g,this.l=E,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Ai(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ns(c){G.call(this),this.h=c,this.g={}}k(Ns,G);var pl=[];function ml(c){we(c.g,function(g,E){this.g.hasOwnProperty(E)&&Qr(g)},c),c.g={}}Ns.prototype.N=function(){Ns.aa.N.call(this),ml(this)},Ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gl=h.JSON.stringify,_l=h.JSON.parse,yl=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function xs(){}xs.prototype.h=null;function Lo(c){return c.h||(c.h=c.i())}function Mo(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sr(){me.call(this,"d")}k(Sr,me);function Vo(){me.call(this,"c")}k(Vo,me);var Cr={},vl=null;function bs(){return vl=vl||new It}Cr.La="serverreachability";function El(c){me.call(this,Cr.La,c)}k(El,me);function Xr(c){const g=bs();St(g,new El(g))}Cr.STAT_EVENT="statevent";function wl(c,g){me.call(this,Cr.STAT_EVENT,c),this.stat=g}k(wl,me);function mt(c){const g=bs();St(g,new wl(g,c))}Cr.Ma="timingevent";function Fo(c,g){me.call(this,Cr.Ma,c),this.size=g}k(Fo,me);function Zn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},g)}function Os(){this.g=!0}Os.prototype.xa=function(){this.g=!1};function Ds(c,g,E,I,U,W){c.info(function(){if(c.g)if(W)for(var ie="",Ke=W.split("&"),Ct=0;Ct<Ke.length;Ct++){var je=Ke[Ct].split("=");if(1<je.length){var Ot=je[0];je=je[1];var vt=Ot.split("_");ie=2<=vt.length&&vt[1]=="type"?ie+(Ot+"="+je+"&"):ie+(Ot+"=redacted&")}}else ie=null;else ie=W;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+g+`
`+E+`
`+ie})}function Uo(c,g,E,I,U,W,ie){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+g+`
`+E+`
`+W+" "+ie})}function er(c,g,E,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Nf(c,E)+(I?" "+I:"")})}function Tl(c,g){c.info(function(){return"TIMEOUT: "+g})}Os.prototype.info=function(){};function Nf(c,g){if(!c.g)return g;if(!g)return null;try{var E=JSON.parse(g);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var I=E[c];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var W=U[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ie=1;ie<U.length;ie++)U[ie]=""}}}}return gl(E)}catch{return g}}var jo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_c={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tr;function Ls(){}k(Ls,xs),Ls.prototype.g=function(){return new XMLHttpRequest},Ls.prototype.i=function(){return{}},tr=new Ls;function nr(c,g,E,I){this.j=c,this.i=g,this.l=E,this.R=I||1,this.U=new Ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yc}function yc(){this.i=null,this.g="",this.h=!1}var Il={},Bo={};function zo(c,g,E){c.L=1,c.v=bi(xn(g)),c.m=E,c.P=!0,Sl(c,null)}function Sl(c,g){c.F=Date.now(),Ze(c),c.A=xn(c.v);var E=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Di(E.i,"t",I),c.C=0,E=c.j.J,c.h=new yc,c.g=Mc(c.j,E?g:null,!c.m),0<c.O&&(c.M=new ks(T(c.Y,c,c.g),c.O)),g=c.U,E=c.g,I=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(pl[0]=U.toString()),U=pl);for(var W=0;W<U.length;W++){var ie=ul(E,U[W],I||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Xr(),Ds(c.i,c.u,c.A,c.l,c.R,c.m)}nr.prototype.ca=function(c){c=c.target;const g=this.M;g&&fn(c)==3?g.j():this.Y(c)},nr.prototype.Y=function(c){try{if(c==this.g)e:{const vt=fn(this.g);var g=this.g.Ba();const Wn=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Nl(this.g)))){this.J||vt!=4||g==7||(g==8||0>=Wn?Xr(3):Xr(2)),Ms(this);var E=this.g.Z();this.X=E;t:if(vc(this)){var I=Nl(this.g);c="";var U=I.length,W=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),Pi(this);var ie="";break t}this.h.i=new h.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(W&&g==U-1)});I.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=E==200,Uo(this.i,this.u,this.A,this.l,this.R,vt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Ct=this.g;if((Ke=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Ke)){var je=Ke;break t}}je=null}if(E=je)er(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cl(this,E);else{this.o=!1,this.s=3,mt(12),zn(this),Pi(this);break e}}if(this.P){E=!0;let On;for(;!this.J&&this.C<ie.length;)if(On=xf(this,ie),On==Bo){vt==4&&(this.s=4,mt(14),E=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(On==Il){this.s=4,mt(15),er(this.i,this.l,ie,"[Invalid Chunk]"),E=!1;break}else er(this.i,this.l,On,null),Cl(this,On);if(vc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||ie.length!=0||this.h.h||(this.s=1,mt(16),E=!1),this.o=this.o&&E,!E)er(this.i,this.l,ie,"[Invalid Chunked Response]"),zn(this),Pi(this);else if(0<ie.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),bl(Ot),Ot.M=!0,mt(11))}}else er(this.i,this.l,ie,null),Cl(this,ie);vt==4&&zn(this),this.o&&!this.J&&(vt==4?Zo(this.j,this):(this.o=!1,Ze(this)))}else Ko(this.g),E==400&&0<ie.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),zn(this),Pi(this)}}}catch{}finally{}};function vc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function xf(c,g){var E=c.C,I=g.indexOf(`
`,E);return I==-1?Bo:(E=Number(g.substring(E,I)),isNaN(E)?Il:(I+=1,I+E>g.length?Bo:(g=g.slice(I,I+E),c.C=I+E,g)))}nr.prototype.cancel=function(){this.J=!0,zn(this)};function Ze(c){c.S=Date.now()+c.I,Ec(c,c.I)}function Ec(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Zn(T(c.ba,c),g)}function Ms(c){c.B&&(h.clearTimeout(c.B),c.B=null)}nr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Tl(this.i,this.A),this.L!=2&&(Xr(),mt(17)),zn(this),this.s=2,Pi(this)):Ec(this,this.S-c)};function Pi(c){c.j.G==0||c.J||Zo(c.j,c)}function zn(c){Ms(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,ml(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Cl(c,g){try{var E=c.j;if(E.G!=0&&(E.g==c||ln(E.h,c))){if(!c.K&&ln(E.h,c)&&E.G==3){try{var I=E.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)Xo(E),ar(E);else break e;Jo(E),mt(18)}}else E.za=U[1],0<E.za-E.T&&37500>U[2]&&E.F&&E.v==0&&!E.C&&(E.C=Zn(T(E.Za,E),6e3));if(1>=Tc(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else ri(E,11)}else if((c.K||E.g==c)&&Xo(E),!te(g))for(U=E.Da.g.parse(g),g=0;g<U.length;g++){let je=U[g];if(E.T=je[0],je=je[1],E.G==2)if(je[0]=="c"){E.K=je[1],E.ia=je[2];const Ot=je[3];Ot!=null&&(E.la=Ot,E.j.info("VER="+E.la));const vt=je[4];vt!=null&&(E.Aa=vt,E.j.info("SVER="+E.Aa));const Wn=je[5];Wn!=null&&typeof Wn=="number"&&0<Wn&&(I=1.5*Wn,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const On=c.g;if(On){const $s=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($s){var W=I.h;W.g||$s.indexOf("spdy")==-1&&$s.indexOf("quic")==-1&&$s.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Rl(W,W.h),W.h=null))}if(I.D){const ta=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;ta&&(I.ya=ta,Je(I.I,I.D,ta))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ie=c;if(I.qa=Lc(I,I.J?I.ia:null,I.W),ie.K){Ic(I.h,ie);var Ke=ie,Ct=I.L;Ct&&(Ke.I=Ct),Ke.B&&(Ms(Ke),Ze(Ke)),I.g=ie}else zs(I);0<E.i.length&&kr(E)}else je[0]!="stop"&&je[0]!="close"||ri(E,7);else E.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?ri(E,7):zt(E):je[0]!="noop"&&E.l&&E.l.ta(je),E.v=0)}}Xr(4)}catch{}}var wc=class{constructor(c,g){this.g=c,this.map=g}};function Vs(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Tc(c){return c.h?1:c.g?c.g.size:0}function ln(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Rl(c,g){c.g?c.g.add(g):c.h=g}function Ic(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Vs.prototype.cancel=function(){if(this.i=Sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Sc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const E of c.g.values())g=g.concat(E.D);return g}return L(c.i)}function $o(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],E=c.length,I=0;I<E;I++)g.push(c[I]);return g}g=[],E=0;for(I in c)g[E++]=c[I];return g}function Wo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var E=0;E<c;E++)g.push(E);return g}g=[],E=0;for(const I in c)g[E++]=I;return g}}}function ki(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var E=Wo(c),I=$o(c),U=I.length,W=0;W<U;W++)g.call(void 0,I[W],E&&E[W],c)}var Fs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bf(c,g){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var I=c[E].indexOf("="),U=null;if(0<=I){var W=c[E].substring(0,I);U=c[E].substring(I+1)}else W=c[E];g(W,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Zr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Zr){this.h=c.h,Us(this,c.j),this.o=c.o,this.g=c.g,Ni(this,c.s),this.l=c.l;var g=c.i,E=new Rr;E.i=g.i,g.g&&(E.g=new Map(g.g),E.h=g.h),xi(this,E),this.m=c.m}else c&&(g=String(c).match(Fs))?(this.h=!1,Us(this,g[1]||"",!0),this.o=Fe(g[2]||""),this.g=Fe(g[3]||"",!0),Ni(this,g[4]),this.l=Fe(g[5]||"",!0),xi(this,g[6]||"",!0),this.m=Fe(g[7]||"")):(this.h=!1,this.i=new Rr(null,this.h))}Zr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Oi(g,Ho,!0),":");var E=this.g;return(E||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Oi(g,Ho,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Oi(E,E.charAt(0)=="/"?Ac:Rc,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Oi(E,Al)),c.join("")};function xn(c){return new Zr(c)}function Us(c,g,E){c.j=E?Fe(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ni(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function xi(c,g,E){g instanceof Rr?(c.i=g,Ar(c.i,c.h)):(E||(g=Oi(g,Pc)),c.i=new Rr(g,c.h))}function Je(c,g,E){c.i.set(g,E)}function bi(c){return Je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Fe(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Oi(c,g,E){return typeof c=="string"?(c=encodeURI(c).replace(g,Cc),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Cc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ho=/[#\/\?@]/g,Rc=/[#\?:]/g,Ac=/[#\?]/g,Pc=/[#\?@]/g,Al=/#/g;function Rr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Bt(c){c.g||(c.g=new Map,c.h=0,c.i&&bf(c.i,function(g,E){c.add(decodeURIComponent(g.replace(/\+/g," ")),E)}))}n=Rr.prototype,n.add=function(c,g){Bt(this),this.i=null,c=$n(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(g),this.h+=1,this};function rr(c,g){Bt(c),g=$n(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function ir(c,g){return Bt(c),g=$n(c,g),c.g.has(g)}n.forEach=function(c,g){Bt(this),this.g.forEach(function(E,I){E.forEach(function(U){c.call(g,U,I,this)},this)},this)},n.na=function(){Bt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),E=[];for(let I=0;I<g.length;I++){const U=c[I];for(let W=0;W<U.length;W++)E.push(g[I])}return E},n.V=function(c){Bt(this);let g=[];if(typeof c=="string")ir(this,c)&&(g=g.concat(this.g.get($n(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)g=g.concat(c[E])}return g},n.set=function(c,g){return Bt(this),this.i=null,c=$n(this,c),ir(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Di(c,g,E){rr(c,g),0<E.length&&(c.i=null,c.g.set($n(c,g),L(E)),c.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var E=0;E<g.length;E++){var I=g[E];const W=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var U=W;ie[I]!==""&&(U+="="+encodeURIComponent(String(ie[I]))),c.push(U)}}return this.i=c.join("&")};function $n(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Ar(c,g){g&&!c.j&&(Bt(c),c.i=null,c.g.forEach(function(E,I){var U=I.toLowerCase();I!=U&&(rr(this,I),Di(this,U,E))},c)),c.j=g}function Of(c,g){const E=new Os;if(h.Image){const I=new Image;I.onload=R(dn,E,"TestLoadImage: loaded",!0,g,I),I.onerror=R(dn,E,"TestLoadImage: error",!1,g,I),I.onabort=R(dn,E,"TestLoadImage: abort",!1,g,I),I.ontimeout=R(dn,E,"TestLoadImage: timeout",!1,g,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function kc(c,g){const E=new Os,I=new AbortController,U=setTimeout(()=>{I.abort(),dn(E,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(W=>{clearTimeout(U),W.ok?dn(E,"TestPingServer: ok",!0,g):dn(E,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),dn(E,"TestPingServer: error",!1,g)})}function dn(c,g,E,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(E)}catch{}}function Df(){this.g=new yl}function Nc(c,g,E){const I=E||"";try{ki(c,function(U,W){let ie=U;p(U)&&(ie=gl(U)),g.push(I+W+"="+encodeURIComponent(ie))})}catch(U){throw g.push(I+"type="+encodeURIComponent("_badmap")),U}}function ei(c){this.l=c.Ub||null,this.j=c.eb||!1}k(ei,xs),ei.prototype.g=function(){return new js(this.l,this.j)},ei.prototype.i=function(c){return function(){return c}}({});function js(c,g){It.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(js,It),n=js.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,or(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,or(this)),this.g&&(this.readyState=3,or(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function xc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?sr(this):or(this),this.readyState==3&&xc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,sr(this))},n.Qa=function(c){this.g&&(this.response=c,sr(this))},n.ga=function(){this.g&&sr(this)};function sr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,or(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var E=g.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=g.next();return c.join(`\r
`)};function or(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(js.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ti(c){let g="";return we(c,function(E,I){g+=I,g+=":",g+=E,g+=`\r
`}),g}function Li(c,g,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=ti(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):Je(c,g,E))}function ot(c){It.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ot,It);var Lf=/^https?$/i,Pl=["POST","PUT"];n=ot.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tr.g(),this.v=this.o?Lo(this.o):Lo(tr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(W){Bs(this,W);return}if(c=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)E.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())E.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(W=>W.toLowerCase()=="content-type"),U=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Pl,g,void 0))||I||U||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ie]of E)this.g.setRequestHeader(W,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Go(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){Bs(this,W)}};function Bs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,qo(c),bn(c)}function qo(c){c.A||(c.A=!0,St(c,"complete"),St(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,St(this,"complete"),St(this,"abort"),bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),ot.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?kl(this):this.bb())},n.bb=function(){kl(this)};function kl(c){if(c.h&&typeof l<"u"&&(!c.v[1]||fn(c)!=4||c.Z()!=2)){if(c.u&&fn(c)==4)fl(c.Ea,0,c);else if(St(c,"readystatechange"),fn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var E;if(!(E=g)){var I;if(I=ie===0){var U=String(c.D).match(Fs)[1]||null;!U&&h.self&&h.self.location&&(U=h.self.location.protocol.slice(0,-1)),I=!Lf.test(U?U.toLowerCase():"")}E=I}if(E)St(c,"complete"),St(c,"success");else{c.m=6;try{var W=2<fn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",qo(c)}}finally{bn(c)}}}}function bn(c,g){if(c.g){Go(c);const E=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||St(c,"ready");try{E.onreadystatechange=I}catch{}}}function Go(c){c.I&&(h.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function fn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),_l(g)}};function Nl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ko(c){const g={};c=(c.g&&2<=fn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(te(c[I]))continue;var E=M(c[I]);const U=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const W=g[U]||[];g[U]=W,W.push(E)}b(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pr(c,g,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||g}function xl(c){this.Aa=0,this.i=[],this.j=new Os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pr("baseRetryDelayMs",5e3,c),this.cb=Pr("retryDelaySeedMs",1e4,c),this.Wa=Pr("forwardChannelMaxRetries",2,c),this.wa=Pr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Vs(c&&c.concurrentRequestLimit),this.Da=new Df,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xl.prototype,n.la=8,n.G=1,n.connect=function(c,g,E,I){mt(0),this.W=c,this.H=g||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Lc(this,null,this.W),kr(this)};function zt(c){if(Qo(c),c.G==3){var g=c.U++,E=xn(c.I);if(Je(E,"SID",c.K),Je(E,"RID",g),Je(E,"TYPE","terminate"),ni(c,E),g=new nr(c,c.j,g),g.L=2,g.v=bi(xn(E)),E=!1,h.navigator&&h.navigator.sendBeacon)try{E=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!E&&h.Image&&(new Image().src=g.v,E=!0),E||(g.g=Mc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Ze(g)}Dc(c)}function ar(c){c.g&&(bl(c),c.g.cancel(),c.g=null)}function Qo(c){ar(c),c.u&&(h.clearTimeout(c.u),c.u=null),Xo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function kr(c){if(!Nn(c.h)&&!c.s){c.s=!0;var g=c.Ga;Qe||le(),se||(Qe(),se=!0),ge.add(g,c),c.B=0}}function Mf(c,g){return Tc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Zn(T(c.Ga,c,g),Oc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new nr(this,this.j,c);let W=this.o;if(this.S&&(W?(W=S(W),O(W,this.S)):W=this.S),this.m!==null||this.O||(U.H=W,W=null),this.P)e:{for(var g=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=E;break e}if(g===4096||E===this.i.length-1){g=E+1;break e}}g=1e3}else g=1e3;g=Mi(this,U,g),E=xn(this.I),Je(E,"RID",c),Je(E,"CVER",22),this.D&&Je(E,"X-HTTP-Session-Id",this.D),ni(this,E),W&&(this.O?g="headers="+encodeURIComponent(String(ti(W)))+"&"+g:this.m&&Li(E,this.m,W)),Rl(this.h,U),this.Ua&&Je(E,"TYPE","init"),this.P?(Je(E,"$req",g),Je(E,"SID","null"),U.T=!0,zo(U,E,null)):zo(U,E,g),this.G=2}}else this.G==3&&(c?Yo(this,c):this.i.length==0||Nn(this.h)||Yo(this))};function Yo(c,g){var E;g?E=g.l:E=c.U++;const I=xn(c.I);Je(I,"SID",c.K),Je(I,"RID",E),Je(I,"AID",c.T),ni(c,I),c.m&&c.o&&Li(I,c.m,c.o),E=new nr(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Mi(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Rl(c.h,E),zo(E,I,g)}function ni(c,g){c.H&&we(c.H,function(E,I){Je(g,I,E)}),c.l&&ki({},function(E,I){Je(g,I,E)})}function Mi(c,g,E){E=Math.min(c.i.length,E);var I=c.l?T(c.l.Na,c.l,c):null;e:{var U=c.i;let W=-1;for(;;){const ie=["count="+E];W==-1?0<E?(W=U[0].g,ie.push("ofs="+W)):W=0:ie.push("ofs="+W);let Ke=!0;for(let Ct=0;Ct<E;Ct++){let je=U[Ct].g;const Ot=U[Ct].map;if(je-=W,0>je)W=Math.max(0,U[Ct].g-100),Ke=!1;else try{Nc(Ot,ie,"req"+je+"_")}catch{I&&I(Ot)}}if(Ke){I=ie.join("&");break e}}}return c=c.i.splice(0,E),g.D=c,I}function zs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Qe||le(),se||(Qe(),se=!0),ge.add(g,c),c.v=0}}function Jo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Zn(T(c.Fa,c),Oc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,bc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Zn(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),ar(this),bc(this))};function bl(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function bc(c){c.g=new nr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=xn(c.qa);Je(g,"RID","rpc"),Je(g,"SID",c.K),Je(g,"AID",c.T),Je(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Je(g,"TO",c.ja),Je(g,"TYPE","xmlhttp"),ni(c,g),c.m&&c.o&&Li(g,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=bi(xn(g)),E.m=null,E.P=!0,Sl(E,c)}n.Za=function(){this.C!=null&&(this.C=null,ar(this),Jo(this),mt(19))};function Xo(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function Zo(c,g){var E=null;if(c.g==g){Xo(c),bl(c),c.g=null;var I=2}else if(ln(c.h,g))E=g.D,Ic(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){E=g.m?g.m.length:0,g=Date.now()-g.F;var U=c.B;I=bs(),St(I,new Fo(I,E)),kr(c)}else zs(c);else if(U=g.s,U==3||U==0&&0<g.X||!(I==1&&Mf(c,g)||I==2&&Jo(c)))switch(E&&0<E.length&&(g=c.h,g.i=g.i.concat(E)),U){case 1:ri(c,5);break;case 4:ri(c,10);break;case 3:ri(c,6);break;default:ri(c,2)}}}function Oc(c,g){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*g}function ri(c,g){if(c.j.info("Error code "+g),g==2){var E=T(c.fb,c),I=c.Xa;const U=!I;I=new Zr(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Us(I,"https"),bi(I),U?Of(I.toString(),E):kc(I.toString(),E)}else mt(2);c.G=0,c.l&&c.l.sa(g),Dc(c),Qo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Dc(c){if(c.G=0,c.ka=[],c.l){const g=Sc(c.h);(g.length!=0||c.i.length!=0)&&(N(c.ka,g),N(c.ka,c.i),c.h.i.length=0,L(c.i),c.i.length=0),c.l.ra()}}function Lc(c,g,E){var I=E instanceof Zr?xn(E):new Zr(E);if(I.g!="")g&&(I.g=g+"."+I.g),Ni(I,I.s);else{var U=h.location;I=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var W=new Zr(null);I&&Us(W,I),g&&(W.g=g),U&&Ni(W,U),E&&(W.l=E),I=W}return E=c.D,g=c.ya,E&&g&&Je(I,E,g),Je(I,"VER",c.la),ni(c,I),I}function Mc(c,g,E){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new ot(new ei({eb:E})):new ot(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ol(){}n=Ol.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ea(){}ea.prototype.g=function(c,g){return new un(c,g)};function un(c,g){It.call(this),this.g=new xl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!te(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!te(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Nr(this)}k(un,It),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){zt(this.g)},un.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=gl(c),c=E);g.i.push(new wc(g.Ya++,c)),g.G==3&&kr(g)},un.prototype.N=function(){this.g.l=null,delete this.j,zt(this.g),delete this.g,un.aa.N.call(this)};function Vc(c){Sr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const E in g){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}k(Vc,Sr);function Fc(){Vo.call(this),this.status=1}k(Fc,Vo);function Nr(c){this.g=c}k(Nr,Ol),Nr.prototype.ua=function(){St(this.g,"a")},Nr.prototype.ta=function(c){St(this.g,new Vc(c))},Nr.prototype.sa=function(c){St(this.g,new Fc)},Nr.prototype.ra=function(){St(this.g,"b")},ea.prototype.createWebChannel=ea.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,D0=function(){return new ea},O0=function(){return bs()},b0=Cr,Hm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jo.NO_ERROR=0,jo.TIMEOUT=8,jo.HTTP_ERROR=6,Hh=jo,_c.COMPLETE="complete",x0=_c,Mo.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",It.prototype.listen=It.prototype.K,du=Mo,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,N0=ot}).apply(typeof Oh<"u"?Oh:typeof self<"u"?self:typeof window<"u"?window:{});const pw="@firebase/firestore",mw="4.7.10";/**
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
 */class tn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
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
 */let Ya="11.5.0";/**
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
 */const mo=new Qu("@firebase/firestore");function Sa(){return mo.logLevel}function ue(n,...e){if(mo.logLevel<=Me.DEBUG){const t=e.map(Gg);mo.debug(`Firestore (${Ya}): ${n}`,...t)}}function wi(n,...e){if(mo.logLevel<=Me.ERROR){const t=e.map(Gg);mo.error(`Firestore (${Ya}): ${n}`,...t)}}function Va(n,...e){if(mo.logLevel<=Me.WARN){const t=e.map(Gg);mo.warn(`Firestore (${Ya}): ${n}`,...t)}}function Gg(n){if(typeof n=="string")return n;try{/**
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
 */function Se(n="Unexpected state"){const e=`FIRESTORE (${Ya}) INTERNAL ASSERTION FAILED: `+n;throw wi(e),new Error(e)}function Ge(n,e){n||Se()}function Ae(n,e){return n}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends Xn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _i{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class L0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tn.UNAUTHENTICATED))}shutdown(){}}class $1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class W1{constructor(e){this.t=e,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ge(this.o===void 0);let r=this.i;const i=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new _i,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},h=f=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new _i)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ge(typeof r.accessToken=="string"),new L0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new tn(e)}}class H1{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class q1{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new H1(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G1{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,wn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ge(this.o===void 0);const r=a=>{a.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,ue("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const i=a=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?i(a):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new gw(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ge(typeof t.token=="string"),this.R=t.token,new gw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function K1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function M0(){return new TextEncoder}/**
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
 */class V0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=K1(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function Ne(n,e){return n<e?-1:n>e?1:0}function qm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Ne(r,i);{const a=M0(),l=Q1(a.encode(_w(n,t)),a.encode(_w(e,t)));return l!==0?l:Ne(r,i)}}t+=r>65535?2:1}return Ne(n.length,e.length)}function _w(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Q1(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ne(n[t],e[t]);return Ne(n.length,e.length)}function Fa(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const yw=-62135596800,vw=1e6;class Nt{static now(){return Nt.fromMillis(Date.now())}static fromDate(e){return Nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*vw);return new Nt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yw)throw new pe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vw}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-yw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Nt(0,0))}static max(){return new Re(new Nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ew="__name__";class Mr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Se(),r===void 0?r=e.length-t:r>e.length-t&&Se(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=Mr.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return Ne(e.length,t.length)}static compareSegments(e,t){const r=Mr.isNumericId(e),i=Mr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Mr.extractNumericId(e).compare(Mr.extractNumericId(t)):qm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return os.fromString(e.substring(4,e.length-2))}}class lt extends Mr{construct(e,t,r){return new lt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new pe(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const Y1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends Mr{construct(e,t,r){return new qt(e,t,r)}static isValidIdentifier(e){return Y1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ew}static keyField(){return new qt([Ew])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new pe(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const h=e[i];if(h==="\\"){if(i+1===e.length)throw new pe(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new pe(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(a(),i++)}if(a(),l)throw new pe(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(t)}static emptyPath(){return new qt([])}}/**
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
 */const bu=-1;function J1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(r===1e9?new Nt(t+1,0):new Nt(t,r));return new hs(i,ve.empty(),e)}function X1(n){return new hs(n.readTime,n.key,bu)}class hs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hs(Re.min(),ve.empty(),bu)}static max(){return new hs(Re.max(),ve.empty(),bu)}}function Z1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ja(n){if(n.code!==J.FAILED_PRECONDITION||n.message!==eb)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,r)=>{t(e)})}static reject(e){return new q((t,r)=>{r(e)})}static waitFor(e){return new q((t,r)=>{let i=0,a=0,l=!1;e.forEach(h=>{++i,h.next(()=>{++a,l&&a===i&&t()},f=>r(f))}),l=!0,a===i&&t()})}static or(e){let t=q.resolve(!1);for(const r of e)t=t.next(i=>i?q.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,a)=>{r.push(t.call(this,i,a))}),this.waitFor(r)}static mapArray(e,t){return new q((r,i)=>{const a=e.length,l=new Array(a);let h=0;for(let f=0;f<a;f++){const p=f;t(e[p]).next(y=>{l[p]=y,++h,h===a&&r(l)},y=>i(y))}})}static doWhile(e,t){return new q((r,i)=>{const a=()=>{e()===!0?t().next(()=>{a()},i):r()};a()})}}function nb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xa(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Gd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Gd.ae=-1;/**
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
 */const Kg=-1;function Kd(n){return n==null}function cd(n){return n===0&&1/n==-1/0}function rb(n){return typeof n=="number"&&Number.isInteger(n)&&!cd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const F0="";function ib(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ww(e)),e=sb(n.get(t),e);return ww(e)}function sb(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case F0:t+="";break;default:t+=a}}return t}function ww(n){return n+F0+""}/**
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
 */function Tw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Is(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function U0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Tt=class Gm{constructor(e,t){this.comparator=e,this.root=t||as.EMPTY}insert(e,t){return new Gm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,as.BLACK,null,null))}remove(e){return new Gm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,as.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dh(this.root,e,this.comparator,!0)}},Dh=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},as=class di{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??di.RED,this.left=i??di.EMPTY,this.right=a??di.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new di(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return di.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return di.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,di.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,di.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}};as.EMPTY=null,as.RED=!0,as.BLACK=!1;as.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,r,i,a){return this}insert(e,t,r){return new as(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new Tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Iw(this.data.getIterator())}getIteratorFrom(e){return new Iw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class Iw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vn{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new xt(qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fa(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class j0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new j0("Invalid base64 string: "+a):a}}(e);return new Gt(t)}static fromUint8Array(e){const t=function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a}(e);return new Gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(n){if(Ge(!!n),typeof n=="string"){let e=0;const t=ob.exec(n);if(Ge(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fs(n){return typeof n=="string"?Gt.fromBase64String(n):Gt.fromUint8Array(n)}/**
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
 */const B0="server_timestamp",z0="__type__",$0="__previous_value__",W0="__local_write_time__";function Qg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[z0])===null||t===void 0?void 0:t.stringValue)===B0}function Qd(n){const e=n.mapValue.fields[$0];return Qg(e)?Qd(e):e}function Ou(n){const e=ds(n.mapValue.fields[W0].timestampValue);return new Nt(e.seconds,e.nanos)}/**
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
 */class ab{constructor(e,t,r,i,a,l,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=p}}const hd="(default)";class Du{constructor(e,t){this.projectId=e,this.database=t||hd}static empty(){return new Du("","")}get isDefaultDatabase(){return this.database===hd}isEqual(e){return e instanceof Du&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const H0="__type__",lb="__max__",Lh={mapValue:{}},q0="__vector__",dd="value";function ps(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qg(n)?4:cb(n)?9007199254740991:ub(n)?10:11:Se()}function zr(n,e){if(n===e)return!0;const t=ps(n);if(t!==ps(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ou(n).isEqual(Ou(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=ds(i.timestampValue),h=ds(a.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return fs(i.bytesValue).isEqual(fs(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return _t(i.geoPointValue.latitude)===_t(a.geoPointValue.latitude)&&_t(i.geoPointValue.longitude)===_t(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a){if("integerValue"in i&&"integerValue"in a)return _t(i.integerValue)===_t(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=_t(i.doubleValue),h=_t(a.doubleValue);return l===h?cd(l)===cd(h):isNaN(l)&&isNaN(h)}return!1}(n,e);case 9:return Fa(n.arrayValue.values||[],e.arrayValue.values||[],zr);case 10:case 11:return function(i,a){const l=i.mapValue.fields||{},h=a.mapValue.fields||{};if(Tw(l)!==Tw(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!zr(l[f],h[f])))return!1;return!0}(n,e);default:return Se()}}function Lu(n,e){return(n.values||[]).find(t=>zr(t,e))!==void 0}function Ua(n,e){if(n===e)return 0;const t=ps(n),r=ps(e);if(t!==r)return Ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(a,l){const h=_t(a.integerValue||a.doubleValue),f=_t(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return Sw(n.timestampValue,e.timestampValue);case 4:return Sw(Ou(n),Ou(e));case 5:return qm(n.stringValue,e.stringValue);case 6:return function(a,l){const h=fs(a),f=fs(l);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,l){const h=a.split("/"),f=l.split("/");for(let p=0;p<h.length&&p<f.length;p++){const y=Ne(h[p],f[p]);if(y!==0)return y}return Ne(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,l){const h=Ne(_t(a.latitude),_t(l.latitude));return h!==0?h:Ne(_t(a.longitude),_t(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Cw(n.arrayValue,e.arrayValue);case 10:return function(a,l){var h,f,p,y;const v=a.fields||{},T=l.fields||{},R=(h=v[dd])===null||h===void 0?void 0:h.arrayValue,k=(f=T[dd])===null||f===void 0?void 0:f.arrayValue,L=Ne(((p=R==null?void 0:R.values)===null||p===void 0?void 0:p.length)||0,((y=k==null?void 0:k.values)===null||y===void 0?void 0:y.length)||0);return L!==0?L:Cw(R,k)}(n.mapValue,e.mapValue);case 11:return function(a,l){if(a===Lh.mapValue&&l===Lh.mapValue)return 0;if(a===Lh.mapValue)return 1;if(l===Lh.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),p=l.fields||{},y=Object.keys(p);f.sort(),y.sort();for(let v=0;v<f.length&&v<y.length;++v){const T=qm(f[v],y[v]);if(T!==0)return T;const R=Ua(h[f[v]],p[y[v]]);if(R!==0)return R}return Ne(f.length,y.length)}(n.mapValue,e.mapValue);default:throw Se()}}function Sw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=ds(n),r=ds(e),i=Ne(t.seconds,r.seconds);return i!==0?i:Ne(t.nanos,r.nanos)}function Cw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=Ua(t[i],r[i]);if(a)return a}return Ne(t.length,r.length)}function ja(n){return Km(n)}function Km(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ds(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return fs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=Km(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const l of r)a?a=!1:i+=",",i+=`${l}:${Km(t.fields[l])}`;return i+"}"}(n.mapValue):Se()}function qh(n){switch(ps(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qd(n);return e?16+qh(e):16;case 5:return 2*n.stringValue.length;case 6:return fs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,a)=>i+qh(a),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Is(r.fields,(a,l)=>{i+=a.length+qh(l)}),i}(n.mapValue);default:throw Se()}}function Qm(n){return!!n&&"integerValue"in n}function Yg(n){return!!n&&"arrayValue"in n}function Rw(n){return!!n&&"nullValue"in n}function Aw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Gh(n){return!!n&&"mapValue"in n}function ub(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[H0])===null||t===void 0?void 0:t.stringValue)===q0}function _u(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Is(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=_u(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_u(n.arrayValue.values[t]);return e}return Object.assign({},n)}function cb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===lb}/**
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
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Gh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_u(t)}setAll(e){let t=qt.emptyPath(),r={},i=[];e.forEach((l,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,i),r={},i=[],t=h.popLast()}l?r[h.lastSegment()]=_u(l):i.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());Gh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Gh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Is(t,(i,a)=>e[i]=a);for(const i of r)delete e[i]}clone(){return new Tn(_u(this.value))}}function G0(n){const e=[];return Is(n.fields,(t,r)=>{const i=new qt([t]);if(Gh(r)){const a=G0(r.mapValue).fields;if(a.length===0)e.push(i);else for(const l of a)e.push(i.child(l))}else e.push(i)}),new Vn(e)}/**
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
 */class nn{constructor(e,t,r,i,a,l,h){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=l,this.documentState=h}static newInvalidDocument(e){return new nn(e,0,Re.min(),Re.min(),Re.min(),Tn.empty(),0)}static newFoundDocument(e,t,r,i){return new nn(e,1,t,Re.min(),r,i,0)}static newNoDocument(e,t){return new nn(e,2,t,Re.min(),Re.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new nn(e,3,t,Re.min(),Re.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fd{constructor(e,t){this.position=e,this.inclusive=t}}function Pw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],l=n.position[i];if(a.field.isKeyField()?r=ve.comparator(ve.fromName(l.referenceValue),t.key):r=Ua(l,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function kw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class pd{constructor(e,t="asc"){this.field=e,this.dir=t}}function hb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class K0{}class Pt extends K0{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new fb(e,t,r):t==="array-contains"?new gb(e,r):t==="in"?new _b(e,r):t==="not-in"?new yb(e,r):t==="array-contains-any"?new vb(e,r):new Pt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new pb(e,r):new mb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ua(t,this.value)):t!==null&&ps(this.value)===ps(t)&&this.matchesComparison(Ua(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $r extends K0{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new $r(e,t)}matches(e){return Q0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Q0(n){return n.op==="and"}function Y0(n){return db(n)&&Q0(n)}function db(n){for(const e of n.filters)if(e instanceof $r)return!1;return!0}function Ym(n){if(n instanceof Pt)return n.field.canonicalString()+n.op.toString()+ja(n.value);if(Y0(n))return n.filters.map(e=>Ym(e)).join(",");{const e=n.filters.map(t=>Ym(t)).join(",");return`${n.op}(${e})`}}function J0(n,e){return n instanceof Pt?function(r,i){return i instanceof Pt&&r.op===i.op&&r.field.isEqual(i.field)&&zr(r.value,i.value)}(n,e):n instanceof $r?function(r,i){return i instanceof $r&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((a,l,h)=>a&&J0(l,i.filters[h]),!0):!1}(n,e):void Se()}function X0(n){return n instanceof Pt?function(t){return`${t.field.canonicalString()} ${t.op} ${ja(t.value)}`}(n):n instanceof $r?function(t){return t.op.toString()+" {"+t.getFilters().map(X0).join(" ,")+"}"}(n):"Filter"}class fb extends Pt{constructor(e,t,r){super(e,t,r),this.key=ve.fromName(r.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class pb extends Pt{constructor(e,t){super(e,"in",t),this.keys=Z0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class mb extends Pt{constructor(e,t){super(e,"not-in",t),this.keys=Z0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Z0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ve.fromName(r.referenceValue))}class gb extends Pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yg(t)&&Lu(t.arrayValue,this.value)}}class _b extends Pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Lu(this.value.arrayValue,t)}}class yb extends Pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Lu(this.value.arrayValue,t)}}class vb extends Pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Lu(this.value.arrayValue,r))}}/**
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
 */class Eb{constructor(e,t=null,r=[],i=[],a=null,l=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=l,this.endAt=h,this.le=null}}function Nw(n,e=null,t=[],r=[],i=null,a=null,l=null){return new Eb(n,e,t,r,i,a,l)}function Jg(n){const e=Ae(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ym(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Kd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ja(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ja(r)).join(",")),e.le=t}return e.le}function Xg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!hb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!J0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!kw(n.startAt,e.startAt)&&kw(n.endAt,e.endAt)}function Jm(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Yd{constructor(e,t=null,r=[],i=[],a=null,l="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=l,this.startAt=h,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function wb(n,e,t,r,i,a,l,h){return new Yd(n,e,t,r,i,a,l,h)}function Zg(n){return new Yd(n)}function xw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Tb(n){return n.collectionGroup!==null}function yu(n){const e=Ae(n);if(e.he===null){e.he=[];const t=new Set;for(const a of e.explicitOrderBy)e.he.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new xt(qt.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(h=h.add(p.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.he.push(new pd(a,r))}),t.has(qt.keyField().canonicalString())||e.he.push(new pd(qt.keyField(),r))}return e.he}function Ur(n){const e=Ae(n);return e.Pe||(e.Pe=Ib(e,yu(n))),e.Pe}function Ib(n,e){if(n.limitType==="F")return Nw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const a=i.dir==="desc"?"asc":"desc";return new pd(i.field,a)});const t=n.endAt?new fd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fd(n.startAt.position,n.startAt.inclusive):null;return Nw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xm(n,e,t){return new Yd(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Jd(n,e){return Xg(Ur(n),Ur(e))&&n.limitType===e.limitType}function eS(n){return`${Jg(Ur(n))}|lt:${n.limitType}`}function Ca(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>X0(i)).join(", ")}]`),Kd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>ja(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>ja(i)).join(",")),`Target(${r})`}(Ur(n))}; limitType=${n.limitType})`}function Xd(n,e){return e.isFoundDocument()&&function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ve.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,i){for(const a of yu(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(l,h,f){const p=Pw(l,h,f);return l.inclusive?p<=0:p<0}(r.startAt,yu(r),i)||r.endAt&&!function(l,h,f){const p=Pw(l,h,f);return l.inclusive?p>=0:p>0}(r.endAt,yu(r),i))}(n,e)}function Sb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tS(n){return(e,t)=>{let r=!1;for(const i of yu(n)){const a=Cb(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function Cb(n,e,t){const r=n.field.isKeyField()?ve.comparator(e.key,t.key):function(a,l,h){const f=l.data.field(a),p=h.data.field(a);return f!==null&&p!==null?Ua(f,p):Se()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Se()}}/**
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
 */class Ao{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(t,r)=>{for(const[i,a]of r)e(i,a)})}isEmpty(){return U0(this.inner)}size(){return this.innerSize}}/**
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
 */const Rb=new Tt(ve.comparator);function Ti(){return Rb}const nS=new Tt(ve.comparator);function fu(...n){let e=nS;for(const t of n)e=e.insert(t.key,t);return e}function rS(n){let e=nS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function io(){return vu()}function iS(){return vu()}function vu(){return new Ao(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ab=new Tt(ve.comparator),Pb=new xt(ve.comparator);function Ve(...n){let e=Pb;for(const t of n)e=e.add(t);return e}const kb=new xt(Ne);function Nb(){return kb}/**
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
 */function e_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cd(e)?"-0":e}}function sS(n){return{integerValue:""+n}}function xb(n,e){return rb(e)?sS(e):e_(n,e)}/**
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
 */class Zd{constructor(){this._=void 0}}function bb(n,e,t){return n instanceof Mu?function(i,a){const l={fields:{[z0]:{stringValue:B0},[W0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Qg(a)&&(a=Qd(a)),a&&(l.fields[$0]=a),{mapValue:l}}(t,e):n instanceof Ba?aS(n,e):n instanceof Vu?lS(n,e):function(i,a){const l=oS(i,a),h=bw(l)+bw(i.Ie);return Qm(l)&&Qm(i.Ie)?sS(h):e_(i.serializer,h)}(n,e)}function Ob(n,e,t){return n instanceof Ba?aS(n,e):n instanceof Vu?lS(n,e):t}function oS(n,e){return n instanceof md?function(r){return Qm(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Mu extends Zd{}class Ba extends Zd{constructor(e){super(),this.elements=e}}function aS(n,e){const t=uS(e);for(const r of n.elements)t.some(i=>zr(i,r))||t.push(r);return{arrayValue:{values:t}}}class Vu extends Zd{constructor(e){super(),this.elements=e}}function lS(n,e){let t=uS(e);for(const r of n.elements)t=t.filter(i=>!zr(i,r));return{arrayValue:{values:t}}}class md extends Zd{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function bw(n){return _t(n.integerValue||n.doubleValue)}function uS(n){return Yg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class cS{constructor(e,t){this.field=e,this.transform=t}}function Db(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ba&&i instanceof Ba||r instanceof Vu&&i instanceof Vu?Fa(r.elements,i.elements,zr):r instanceof md&&i instanceof md?zr(r.Ie,i.Ie):r instanceof Mu&&i instanceof Mu}(n.transform,e.transform)}class Lb{constructor(e,t){this.version=e,this.transformResults=t}}class Er{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Er}static exists(e){return new Er(void 0,e)}static updateTime(e){return new Er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ef{}function hS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fS(n.key,Er.none()):new tc(n.key,n.data,Er.none());{const t=n.data,r=Tn.empty();let i=new xt(qt.comparator);for(let a of e.fields)if(!i.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?r.delete(a):r.set(a,l),i=i.add(a)}return new Ss(n.key,r,new Vn(i.toArray()),Er.none())}}function Mb(n,e,t){n instanceof tc?function(i,a,l){const h=i.value.clone(),f=Dw(i.fieldTransforms,a,l.transformResults);h.setAll(f),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Ss?function(i,a,l){if(!Kh(i.precondition,a))return void a.convertToUnknownDocument(l.version);const h=Dw(i.fieldTransforms,a,l.transformResults),f=a.data;f.setAll(dS(i)),f.setAll(h),a.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,e,t):function(i,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Eu(n,e,t,r){return n instanceof tc?function(a,l,h,f){if(!Kh(a.precondition,l))return h;const p=a.value.clone(),y=Lw(a.fieldTransforms,f,l);return p.setAll(y),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ss?function(a,l,h,f){if(!Kh(a.precondition,l))return h;const p=Lw(a.fieldTransforms,f,l),y=l.data;return y.setAll(dS(a)),y.setAll(p),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(a,l,h){return Kh(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,e,t)}function Vb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=oS(r.transform,i||null);a!=null&&(t===null&&(t=Tn.empty()),t.set(r.field,a))}return t||null}function Ow(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fa(r,i,(a,l)=>Db(a,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tc extends ef{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends ef{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function dS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Dw(n,e,t){const r=new Map;Ge(n.length===t.length);for(let i=0;i<t.length;i++){const a=n[i],l=a.transform,h=e.data.field(a.field);r.set(a.field,Ob(l,h,t[i]))}return r}function Lw(n,e,t){const r=new Map;for(const i of n){const a=i.transform,l=t.data.field(i.field);r.set(i.field,bb(a,l,e))}return r}class fS extends ef{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fb extends ef{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ub{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&Mb(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Eu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Eu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=iS();return this.mutations.forEach(i=>{const a=e.get(i.key),l=a.overlayedDocument;let h=this.applyToLocalView(l,a.mutatedFields);h=t.has(i.key)?null:h;const f=hS(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(Re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ve())}isEqual(e){return this.batchId===e.batchId&&Fa(this.mutations,e.mutations,(t,r)=>Ow(t,r))&&Fa(this.baseMutations,e.baseMutations,(t,r)=>Ow(t,r))}}class t_{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ge(e.mutations.length===r.length);let i=function(){return Ab}();const a=e.mutations;for(let l=0;l<a.length;l++)i=i.insert(a[l].key,r[l].version);return new t_(e,t,r,i)}}/**
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
 */class jb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Bb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var wt,Be;function zb(n){switch(n){case J.OK:return Se();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return Se()}}function pS(n){if(n===void 0)return wi("GRPC error has no .code"),J.UNKNOWN;switch(n){case wt.OK:return J.OK;case wt.CANCELLED:return J.CANCELLED;case wt.UNKNOWN:return J.UNKNOWN;case wt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case wt.INTERNAL:return J.INTERNAL;case wt.UNAVAILABLE:return J.UNAVAILABLE;case wt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case wt.NOT_FOUND:return J.NOT_FOUND;case wt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case wt.ABORTED:return J.ABORTED;case wt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case wt.DATA_LOSS:return J.DATA_LOSS;default:return Se()}}(Be=wt||(wt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const $b=new os([4294967295,4294967295],0);function Mw(n){const e=M0().encode(n),t=new k0;return t.update(e),new Uint8Array(t.digest())}function Vw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new os([t,r],0),new os([i,a],0)]}class n_{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new pu(`Invalid padding: ${t}`);if(r<0)throw new pu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new pu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=os.fromNumber(this.Ee)}Ae(e,t,r){let i=e.add(t.multiply(os.fromNumber(r)));return i.compare($b)===1&&(i=new os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Mw(e),[r,i]=Vw(t);for(let a=0;a<this.hashCount;a++){const l=this.Ae(r,i,a);if(!this.Re(l))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new n_(a,i,t);return r.forEach(h=>l.insert(h)),l}insert(e){if(this.Ee===0)return;const t=Mw(e),[r,i]=Vw(t);for(let a=0;a<this.hashCount;a++){const l=this.Ae(r,i,a);this.Ve(l)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class pu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tf{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new tf(Re.min(),i,new Tt(Ne),Ti(),Ve())}}class nc{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new nc(r,t,Ve(),Ve(),Ve())}}/**
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
 */class Qh{constructor(e,t,r,i){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=i}}class mS{constructor(e,t){this.targetId=e,this.ge=t}}class gS{constructor(e,t,r=Gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Fw{constructor(){this.pe=0,this.ye=Uw(),this.we=Gt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ve(),t=Ve(),r=Ve();return this.ye.forEach((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Se()}}),new nc(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=Uw()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ge(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Wb{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ti(),this.$e=Mh(),this.Ue=Mh(),this.Ke=new Tt(Ne)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:Se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,r=e.ge.count,i=this.Xe(t);if(i){const a=i.target;if(Jm(a))if(r===0){const l=new ve(a.path);this.ze(t,l,nn.newNoDocument(l,Re.min()))}else Ge(r===1);else{const l=this.et(t);if(l!==r){const h=this.tt(e),f=h?this.nt(h,e,l):1;if(f!==0){this.Ye(t);const p=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,p)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let l,h;try{l=fs(r).toUint8Array()}catch(f){if(f instanceof j0)return Va("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new n_(l,i,a)}catch(f){return Va(f instanceof pu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.Ee===0?null:h}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let i=0;return r.forEach(a=>{const l=this.ke.it(),h=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.ze(t,a,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((a,l)=>{const h=this.Xe(l);if(h){if(a.current&&Jm(h.target)){const f=new ve(h.target.path);this._t(f).has(l)||this.ut(l,f)||this.ze(l,f,nn.newNoDocument(f,e))}a.ve&&(t.set(l,a.Fe()),a.Me())}});let r=Ve();this.Ue.forEach((a,l)=>{let h=!0;l.forEachWhile(f=>{const p=this.Xe(f);return!p||p.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(a))}),this.Qe.forEach((a,l)=>l.setReadTime(e));const i=new tf(e,t,this.Ke,this.Qe,r);return this.Qe=Ti(),this.$e=Mh(),this.Ue=Mh(),this.Ke=new Tt(Ne),i}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Fw,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new xt(Ne),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new xt(Ne),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Fw),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Mh(){return new Tt(ve.comparator)}function Uw(){return new Tt(ve.comparator)}const Hb={asc:"ASCENDING",desc:"DESCENDING"},qb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gb={and:"AND",or:"OR"};class Kb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zm(n,e){return n.useProto3Json||Kd(e)?e:{value:e}}function gd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _S(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Qb(n,e){return gd(n,e.toTimestamp())}function jr(n){return Ge(!!n),Re.fromTimestamp(function(t){const r=ds(t);return new Nt(r.seconds,r.nanos)}(n))}function r_(n,e){return eg(n,e).canonicalString()}function eg(n,e){const t=function(i){return new lt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function yS(n){const e=lt.fromString(n);return Ge(IS(e)),e}function tg(n,e){return r_(n.databaseId,e.path)}function pm(n,e){const t=yS(e);if(t.get(1)!==n.databaseId.projectId)throw new pe(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new pe(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(ES(t))}function vS(n,e){return r_(n.databaseId,e)}function Yb(n){const e=yS(n);return e.length===4?lt.emptyPath():ES(e)}function ng(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ES(n){return Ge(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function jw(n,e,t){return{name:tg(n,e),fields:t.value.mapValue.fields}}function Jb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(p,y){return p.useProto3Json?(Ge(y===void 0||typeof y=="string"),Gt.fromBase64String(y||"")):(Ge(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Gt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),l=e.targetChange.cause,h=l&&function(p){const y=p.code===void 0?J.UNKNOWN:pS(p.code);return new pe(y,p.message||"")}(l);t=new gS(r,i,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pm(n,r.document.name),a=jr(r.document.updateTime),l=r.document.createTime?jr(r.document.createTime):Re.min(),h=new Tn({mapValue:{fields:r.document.fields}}),f=nn.newFoundDocument(i,a,l,h),p=r.targetIds||[],y=r.removedTargetIds||[];t=new Qh(p,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pm(n,r.document),a=r.readTime?jr(r.readTime):Re.min(),l=nn.newNoDocument(i,a),h=r.removedTargetIds||[];t=new Qh([],h,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pm(n,r.document),a=r.removedTargetIds||[];t=new Qh([],a,i,null)}else{if(!("filter"in e))return Se();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,l=new Bb(i,a),h=r.targetId;t=new mS(h,l)}}return t}function Xb(n,e){let t;if(e instanceof tc)t={update:jw(n,e.key,e.value)};else if(e instanceof fS)t={delete:tg(n,e.key)};else if(e instanceof Ss)t={update:jw(n,e.key,e.data),updateMask:aO(e.fieldMask)};else{if(!(e instanceof Fb))return Se();t={verify:tg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const h=l.transform;if(h instanceof Mu)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Ba)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Vu)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof md)return{fieldPath:l.field.canonicalString(),increment:h.Ie};throw Se()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,a){return a.updateTime!==void 0?{updateTime:Qb(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Se()}(n,e.precondition)),t}function Zb(n,e){return n&&n.length>0?(Ge(e!==void 0),n.map(t=>function(i,a){let l=i.updateTime?jr(i.updateTime):jr(a);return l.isEqual(Re.min())&&(l=jr(a)),new Lb(l,i.transformResults||[])}(t,e))):[]}function eO(n,e){return{documents:[vS(n,e.path)]}}function tO(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vS(n,i);const a=function(p){if(p.length!==0)return TS($r.create(p,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const l=function(p){if(p.length!==0)return p.map(y=>function(T){return{field:Ra(T.field),direction:iO(T.dir)}}(y))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const h=Zm(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ht:t,parent:i}}function nO(n){let e=Yb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ge(r===1);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=function(v){const T=wS(v);return T instanceof $r&&Y0(T)?T.getFilters():[T]}(t.where));let l=[];t.orderBy&&(l=function(v){return v.map(T=>function(k){return new pd(Aa(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(T))}(t.orderBy));let h=null;t.limit&&(h=function(v){let T;return T=typeof v=="object"?v.value:v,Kd(T)?null:T}(t.limit));let f=null;t.startAt&&(f=function(v){const T=!!v.before,R=v.values||[];return new fd(R,T)}(t.startAt));let p=null;return t.endAt&&(p=function(v){const T=!v.before,R=v.values||[];return new fd(R,T)}(t.endAt)),wb(e,i,l,a,h,"F",f,p)}function rO(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Aa(t.unaryFilter.field);return Pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Aa(t.unaryFilter.field);return Pt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Aa(t.unaryFilter.field);return Pt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Aa(t.unaryFilter.field);return Pt.create(l,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(n):n.fieldFilter!==void 0?function(t){return Pt.create(Aa(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return $r.create(t.compositeFilter.filters.map(r=>wS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(n):Se()}function iO(n){return Hb[n]}function sO(n){return qb[n]}function oO(n){return Gb[n]}function Ra(n){return{fieldPath:n.canonicalString()}}function Aa(n){return qt.fromServerFormat(n.fieldPath)}function TS(n){return n instanceof Pt?function(t){if(t.op==="=="){if(Aw(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NAN"}};if(Rw(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Aw(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NAN"}};if(Rw(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ra(t.field),op:sO(t.op),value:t.value}}}(n):n instanceof $r?function(t){const r=t.getFilters().map(i=>TS(i));return r.length===1?r[0]:{compositeFilter:{op:oO(t.op),filters:r}}}(n):Se()}function aO(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function IS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ns{constructor(e,t,r,i,a=Re.min(),l=Re.min(),h=Gt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lO{constructor(e){this.Tt=e}}function uO(n){const e=nO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xm(e,e.limit,"L"):e}/**
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
 */class cO{constructor(){this.Tn=new hO}addToCollectionParentIndex(e,t){return this.Tn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(hs.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(hs.min())}updateCollectionGroup(e,t,r){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class hO{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new xt(lt.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new xt(lt.comparator)).toArray()}}/**
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
 */const Bw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},SS=41943040;class En{static withCacheSize(e){return new En(e,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */En.DEFAULT_COLLECTION_PERCENTILE=10,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,En.DEFAULT=new En(SS,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),En.DISABLED=new En(-1,0,0);/**
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
 */class za{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new za(0)}static Kn(){return new za(-1)}}/**
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
 */const zw="LruGarbageCollector",dO=1048576;function $w([n,e],[t,r]){const i=Ne(n,t);return i===0?Ne(e,r):i}class fO{constructor(e){this.Hn=e,this.buffer=new xt($w),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();$w(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pO{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ue(zw,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xa(t)?ue(zw,"Ignoring IndexedDB error during garbage collection: ",t):await Ja(t)}await this.er(3e5)})}}class mO{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Gd.ae);const r=new fO(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Bw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bw):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,a,l,h,f,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,l=Date.now(),this.nthSequenceNumber(e,i))).next(v=>(r=v,h=Date.now(),this.removeTargets(e,r,t))).next(v=>(a=v,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(p=Date.now(),Sa()<=Me.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-y}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${v} documents in `+(p-f)+`ms
Total Duration: ${p-y}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:v})))}}function gO(n,e){return new mO(n,e)}/**
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
 */class _O{constructor(){this.changes=new Ao(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class vO{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Eu(r.mutation,i,Vn.empty(),Nt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ve()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ve()){const i=io();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(a=>{let l=fu();return a.forEach((h,f)=>{l=l.insert(h,f.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=io();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ve()))}populateOverlays(e,t,r){const i=[];return r.forEach(a=>{t.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(e,i).next(a=>{a.forEach((l,h)=>{t.set(l,h)})})}computeViews(e,t,r,i){let a=Ti();const l=vu(),h=function(){return vu()}();return t.forEach((f,p)=>{const y=r.get(p.key);i.has(p.key)&&(y===void 0||y.mutation instanceof Ss)?a=a.insert(p.key,p):y!==void 0?(l.set(p.key,y.mutation.getFieldMask()),Eu(y.mutation,p,y.mutation.getFieldMask(),Nt.now())):l.set(p.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((p,y)=>l.set(p,y)),t.forEach((p,y)=>{var v;return h.set(p,new yO(y,(v=l.get(p))!==null&&v!==void 0?v:null))}),h))}recalculateAndSaveOverlays(e,t){const r=vu();let i=new Tt((l,h)=>l-h),a=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const h of l)h.keys().forEach(f=>{const p=t.get(f);if(p===null)return;let y=r.get(f)||Vn.empty();y=h.applyToLocalView(p,y),r.set(f,y);const v=(i.get(h.batchId)||Ve()).add(f);i=i.insert(h.batchId,v)})}).next(()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),p=f.key,y=f.value,v=iS();y.forEach(T=>{if(!a.has(T)){const R=hS(t.get(T),r.get(T));R!==null&&v.set(T,R),a=a.add(T)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,v))}return q.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(l){return ve.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Tb(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(a=>{const l=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):q.resolve(io());let h=bu,f=a;return l.next(p=>q.forEach(p,(y,v)=>(h<v.largestBatchId&&(h=v.largestBatchId),a.get(y)?q.resolve():this.remoteDocumentCache.getEntry(e,y).next(T=>{f=f.insert(y,T)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,f,p,Ve())).next(y=>({batchId:h,changes:rS(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(r=>{let i=fu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let l=fu();return this.indexManager.getCollectionParents(e,a).next(h=>q.forEach(h,f=>{const p=function(v,T){return new Yd(T,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,p,r,i).next(y=>{y.forEach((v,T)=>{l=l.insert(v,T)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i))).next(l=>{a.forEach((f,p)=>{const y=p.getKey();l.get(y)===null&&(l=l.insert(y,nn.newInvalidDocument(y)))});let h=fu();return l.forEach((f,p)=>{const y=a.get(f);y!==void 0&&Eu(y.mutation,p,Vn.empty(),Nt.now()),Xd(t,p)&&(h=h.insert(f,p))}),h})}}/**
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
 */class EO{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return q.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:jr(i.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:uO(i.bundledQuery),readTime:jr(i.readTime)}}(t)),q.resolve()}}/**
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
 */class wO{constructor(){this.overlays=new Tt(ve.comparator),this.Rr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=io();return q.forEach(t,i=>this.getOverlay(e,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,a)=>{this.Et(e,t,a)}),q.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.Rr.delete(r)),q.resolve()}getOverlaysForCollection(e,t,r){const i=io(),a=t.length+1,l=new ve(t.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,p=f.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===a&&f.largestBatchId>r&&i.set(f.getKey(),f)}return q.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new Tt((p,y)=>p-y);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let y=a.get(p.largestBatchId);y===null&&(y=io(),a=a.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const h=io(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,y)=>h.set(p,y)),!(h.size()>=i)););return q.resolve(h)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new jb(t,r));let a=this.Rr.get(t);a===void 0&&(a=Ve(),this.Rr.set(t,a)),this.Rr.set(t,a.add(r.key))}}/**
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
 */class TO{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class i_{constructor(){this.Vr=new xt(Ft.mr),this.gr=new xt(Ft.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new Ft(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new Ft(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ve(new lt([])),r=new Ft(t,e),i=new Ft(t,e+1),a=[];return this.gr.forEachInRange([r,i],l=>{this.wr(l),a.push(l.key)}),a}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ve(new lt([])),r=new Ft(t,e),i=new Ft(t,e+1);let a=Ve();return this.gr.forEachInRange([r,i],l=>{a=a.add(l.key)}),a}containsKey(e){const t=new Ft(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ft{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ve.comparator(e.key,t.key)||Ne(e.Cr,t.Cr)}static pr(e,t){return Ne(e.Cr,t.Cr)||ve.comparator(e.key,t.key)}}/**
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
 */class IO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new xt(Ft.mr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Ub(a,t,r,i);this.mutationQueue.push(l);for(const h of i)this.Mr=this.Mr.add(new Ft(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return q.resolve(l)}lookupMutationBatch(e,t){return q.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),a=i<0?0:i;return q.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Kg:this.Fr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ft(t,0),i=new Ft(t,Number.POSITIVE_INFINITY),a=[];return this.Mr.forEachInRange([r,i],l=>{const h=this.Or(l.Cr);a.push(h)}),q.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xt(Ne);return t.forEach(i=>{const a=new Ft(i,0),l=new Ft(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([a,l],h=>{r=r.add(h.Cr)})}),q.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ve.isDocumentKey(a)||(a=a.child(""));const l=new Ft(new ve(a),0);let h=new xt(Ne);return this.Mr.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(h=h.add(f.Cr)),!0)},l),q.resolve(this.Br(h))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ge(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return q.forEach(t.mutations,i=>{const a=new Ft(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new Ft(t,0),i=this.Mr.firstAfterOrEqual(r);return q.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class SO{constructor(e){this.kr=e,this.docs=function(){return new Tt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,l=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return q.resolve(r?r.document.mutableCopy():nn.newInvalidDocument(t))}getEntries(e,t){let r=Ti();return t.forEach(i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():nn.newInvalidDocument(i))}),q.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Ti();const l=t.path,h=new ve(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:p,value:{document:y}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||Z1(X1(y),r)<=0||(i.has(y.key)||Xd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return q.resolve(a)}getAllFromCollectionGroup(e,t,r,i){Se()}qr(e,t){return q.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new CO(this)}getSize(e){return q.resolve(this.size)}}class CO extends _O{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),q.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class RO{constructor(e){this.persistence=e,this.Qr=new Ao(t=>Jg(t),Xg),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.$r=0,this.Ur=new i_,this.targetCount=0,this.Kr=za.Un()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),q.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new za(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.zn(t),q.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.Qr.forEach((l,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Qr.delete(l),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),i++)}),q.waitFor(a).next(()=>i)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return q.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),q.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach(l=>{a.push(i.markPotentiallyOrphaned(e,l))}),q.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return q.resolve(r)}containsKey(e,t){return q.resolve(this.Ur.containsKey(t))}}/**
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
 */class CS{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Gd(0),this.zr=!1,this.zr=!0,this.jr=new TO,this.referenceDelegate=e(this),this.Hr=new RO(this),this.indexManager=new cO,this.remoteDocumentCache=function(i){return new SO(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new lO(t),this.Yr=new EO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new IO(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const i=new AO(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(a=>this.referenceDelegate.Xr(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}ei(e,t){return q.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class AO extends tb{constructor(e){super(),this.currentSequenceNumber=e}}class s_{constructor(e){this.persistence=e,this.ti=new i_,this.ni=null}static ri(e){return new s_(e)}get ii(){if(this.ni)return this.ni;throw Se()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),q.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),q.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(a=>this.ii.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.ii,r=>{const i=ve.fromPath(r);return this.si(e,i).next(a=>{a||t.removeEntry(i,Re.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return q.or([()=>q.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class _d{constructor(e,t){this.persistence=e,this.oi=new Ao(r=>ib(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=gO(this,t)}static ri(e,t){return new _d(e,t)}Zr(){}Xr(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return q.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(a=>a?q.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.qr(e,l=>this.ar(e,l,t).next(h=>{h||(r++,a.removeEntry(l,Re.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qh(e.data.value)),t}ar(e,t,r){return q.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return q.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class o_{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=Ve(),i=Ve();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new o_(e,t.fromCache,r,i)}}/**
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
 */class PO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kO{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return sk()?8:nb(an())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.rs(e,t).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.ss(e,t,i,r).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new PO;return this._s(e,t,l).next(h=>{if(a.result=h,this.Xi)return this.us(e,t,l,h.size)})}).next(()=>a.result)}us(e,t,r,i){return r.documentReadCount<this.es?(Sa()<=Me.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Ca(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),q.resolve()):(Sa()<=Me.DEBUG&&ue("QueryEngine","Query:",Ca(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Sa()<=Me.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Ca(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ur(t))):q.resolve())}rs(e,t){if(xw(t))return q.resolve(null);let r=Ur(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Xm(t,null,"F"),r=Ur(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const l=Ve(...a);return this.ns.getDocuments(e,l).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const p=this.cs(t,h);return this.ls(t,p,l,f.readTime)?this.rs(e,Xm(t,null,"F")):this.hs(e,p,t,f)}))})))}ss(e,t,r,i){return xw(t)||i.isEqual(Re.min())?q.resolve(null):this.ns.getDocuments(e,r).next(a=>{const l=this.cs(t,a);return this.ls(t,l,r,i)?q.resolve(null):(Sa()<=Me.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ca(t)),this.hs(e,l,t,J1(i,bu)).next(h=>h))})}cs(e,t){let r=new xt(tS(e));return t.forEach((i,a)=>{Xd(e,a)&&(r=r.add(a))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}_s(e,t,r){return Sa()<=Me.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Ca(t)),this.ns.getDocumentsMatchingQuery(e,t,hs.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(a=>(t.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
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
 */const a_="LocalStore",NO=3e8;class xO{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new Tt(Ne),this.Is=new Ao(a=>Jg(a),Xg),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vO(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function bO(n,e,t,r){return new xO(n,e,t,r)}async function RS(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(a=>(i=a,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const l=[],h=[];let f=Ve();for(const p of i){l.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}for(const p of a){h.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next(p=>({Rs:p,removedBatchIds:l,addedBatchIds:h}))})})}function OO(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),a=t.ds.newChangeBuffer({trackRemovals:!0});return function(h,f,p,y){const v=p.batch,T=v.keys();let R=q.resolve();return T.forEach(k=>{R=R.next(()=>y.getEntry(f,k)).next(L=>{const N=p.docVersions.get(k);Ge(N!==null),L.version.compareTo(N)<0&&(v.applyToRemoteDocument(L,p),L.isValidDocument()&&(L.setReadTime(p.commitVersion),y.addEntry(L)))})}),R.next(()=>h.mutationQueue.removeMutationBatch(f,v))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=Ve();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(f=f.add(h.batch.mutations[p].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function AS(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function DO(n,e){const t=Ae(n),r=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const h=[];e.targetChanges.forEach((y,v)=>{const T=i.get(v);if(!T)return;h.push(t.Hr.removeMatchingKeys(a,y.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(a,y.addedDocuments,v)));let R=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(v)!==null?R=R.withResumeToken(Gt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,r)),i=i.insert(v,R),function(L,N,K){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=NO?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(T,R,y)&&h.push(t.Hr.updateTargetData(a,R))});let f=Ti(),p=Ve();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))}),h.push(LO(a,l,e.documentUpdates).next(y=>{f=y.Vs,p=y.fs})),!r.isEqual(Re.min())){const y=t.Hr.getLastRemoteSnapshotVersion(a).next(v=>t.Hr.setTargetsMetadata(a,a.currentSequenceNumber,r));h.push(y)}return q.waitFor(h).next(()=>l.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,p)).next(()=>f)}).then(a=>(t.Ts=i,a))}function LO(n,e,t){let r=Ve(),i=Ve();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let l=Ti();return t.forEach((h,f)=>{const p=a.get(h);f.isFoundDocument()!==p.isFoundDocument()&&(i=i.add(h)),f.isNoDocument()&&f.version.isEqual(Re.min())?(e.removeEntry(h,f.readTime),l=l.insert(h,f)):!p.isValidDocument()||f.version.compareTo(p.version)>0||f.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(f),l=l.insert(h,f)):ue(a_,"Ignoring outdated watch update for ",h,". Current version:",p.version," Watch version:",f.version)}),{Vs:l,fs:i}})}function MO(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Kg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VO(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Hr.getTargetData(r,e).next(a=>a?(i=a,q.resolve(i)):t.Hr.allocateTargetId(r).next(l=>(i=new ns(e,l,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function rg(n,e,t){const r=Ae(n),i=r.Ts.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!Xa(l))throw l;ue(a_,`Failed to update sequence numbers for target ${e}: ${l}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function Ww(n,e,t){const r=Ae(n);let i=Re.min(),a=Ve();return r.persistence.runTransaction("Execute query","readwrite",l=>function(f,p,y){const v=Ae(f),T=v.Is.get(y);return T!==void 0?q.resolve(v.Ts.get(T)):v.Hr.getTargetData(p,y)}(r,l,Ur(e)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(l,h.targetId).next(f=>{a=f})}).next(()=>r.Ps.getDocumentsMatchingQuery(l,e,t?i:Re.min(),t?a:Ve())).next(h=>(FO(r,Sb(e),h),{documents:h,gs:a})))}function FO(n,e,t){let r=n.Es.get(e)||Re.min();t.forEach((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.Es.set(e,r)}class Hw{constructor(){this.activeTargetIds=Nb()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UO{constructor(){this.ho=new Hw,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Hw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jO{To(e){}shutdown(){}}/**
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
 */const qw="ConnectivityMonitor";class Gw{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ue(qw,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ue(qw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vh=null;function ig(){return Vh===null?Vh=function(){return 268435456+Math.round(2147483648*Math.random())}():Vh++,"0x"+Vh.toString(16)}/**
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
 */const mm="RestConnection",BO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zO{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===hd?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,t,r,i,a){const l=ig(),h=this.bo(e,t.toUriEncodedString());ue(mm,`Sending RPC '${e}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,i,a),this.vo(e,h,f,r).then(p=>(ue(mm,`Received RPC '${e}' ${l}: `,p),p),p=>{throw Va(mm,`RPC '${e}' ${l} failed with error: `,p,"url: ",h,"request:",r),p})}Co(e,t,r,i,a,l){return this.So(e,t,r,i,a)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ya}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,a)=>e[a]=i),r&&r.headers.forEach((i,a)=>e[a]=i)}bo(e,t){const r=BO[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class $O{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const en="WebChannelConnection";class WO extends zO{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const a=ig();return new Promise((l,h)=>{const f=new N0;f.setWithCredentials(!0),f.listenOnce(x0.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Hh.NO_ERROR:const y=f.getResponseJson();ue(en,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),l(y);break;case Hh.TIMEOUT:ue(en,`RPC '${e}' ${a} timed out`),h(new pe(J.DEADLINE_EXCEEDED,"Request time out"));break;case Hh.HTTP_ERROR:const v=f.getStatus();if(ue(en,`RPC '${e}' ${a} failed with status:`,v,"response text:",f.getResponseText()),v>0){let T=f.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const k=function(N){const K=N.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(K)>=0?K:J.UNKNOWN}(R.status);h(new pe(k,R.message))}else h(new pe(J.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new pe(J.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{ue(en,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);ue(en,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",p,r,15)})}Wo(e,t,r){const i=ig(),a=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=D0(),h=O0(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ue(en,`Creating RPC '${e}' stream ${i}: ${y}`,f);const v=l.createWebChannel(y,f);let T=!1,R=!1;const k=new $O({Fo:N=>{R?ue(en,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(T||(ue(en,`Opening RPC '${e}' stream ${i} transport.`),v.open(),T=!0),ue(en,`RPC '${e}' stream ${i} sending:`,N),v.send(N))},Mo:()=>v.close()}),L=(N,K,te)=>{N.listen(K,Z=>{try{te(Z)}catch(oe){setTimeout(()=>{throw oe},0)}})};return L(v,du.EventType.OPEN,()=>{R||(ue(en,`RPC '${e}' stream ${i} transport opened.`),k.Qo())}),L(v,du.EventType.CLOSE,()=>{R||(R=!0,ue(en,`RPC '${e}' stream ${i} transport closed`),k.Uo())}),L(v,du.EventType.ERROR,N=>{R||(R=!0,Va(en,`RPC '${e}' stream ${i} transport errored:`,N),k.Uo(new pe(J.UNAVAILABLE,"The operation could not be completed")))}),L(v,du.EventType.MESSAGE,N=>{var K;if(!R){const te=N.data[0];Ge(!!te);const Z=te,oe=(Z==null?void 0:Z.error)||((K=Z[0])===null||K===void 0?void 0:K.error);if(oe){ue(en,`RPC '${e}' stream ${i} received error:`,oe);const Ee=oe.status;let we=function(P){const O=wt[P];if(O!==void 0)return pS(O)}(Ee),b=oe.message;we===void 0&&(we=J.INTERNAL,b="Unknown error status: "+Ee+" with message "+oe.message),R=!0,k.Uo(new pe(we,b)),v.close()}else ue(en,`RPC '${e}' stream ${i} received:`,te),k.Ko(te)}}),L(h,b0.STAT_EVENT,N=>{N.stat===Hm.PROXY?ue(en,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Hm.NOPROXY&&ue(en,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function gm(){return typeof document<"u"?document:null}/**
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
 */function nf(n){return new Kb(n,!0)}/**
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
 */class PS{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=a,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&ue("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Kw="PersistentStream";class kS{constructor(e,t,r,i,a,l,h,f){this.Ti=e,this.n_=r,this.r_=i,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new PS(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(wi(t.toString()),wi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new pe(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ue(Kw,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ue(Kw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HO extends kS{constructor(e,t,r,i,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=Jb(this.serializer,e),r=function(a){if(!("targetChange"in a))return Re.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Re.min():l.readTime?jr(l.readTime):Re.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=ng(this.serializer),t.addTarget=function(a,l){let h;const f=l.target;if(h=Jm(f)?{documents:eO(a,f)}:{query:tO(a,f).ht},h.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){h.resumeToken=_S(a,l.resumeToken);const p=Zm(a,l.expectedCount);p!==null&&(h.expectedCount=p)}else if(l.snapshotVersion.compareTo(Re.min())>0){h.readTime=gd(a,l.snapshotVersion.toTimestamp());const p=Zm(a,l.expectedCount);p!==null&&(h.expectedCount=p)}return h}(this.serializer,e);const r=rO(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=ng(this.serializer),t.removeTarget=e,this.I_(t)}}class qO extends kS{constructor(e,t,r,i,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=Zb(e.writeResults,e.commitTime),r=jr(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=ng(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Xb(this.serializer,r))};this.I_(t)}}/**
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
 */class GO{}class KO extends GO{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new pe(J.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.So(e,eg(t,r),i,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new pe(J.UNKNOWN,a.toString())})}Co(e,t,r,i,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Co(e,eg(t,r),i,l,h,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new pe(J.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class QO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(wi(t),this.N_=!1):ue("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const go="RemoteStore";class YO{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=a,this.z_.To(l=>{r.enqueueAndForget(async()=>{Po(this)&&(ue(go,"Restarting streams for network reachability change."),await async function(f){const p=Ae(f);p.W_.add(4),await rc(p),p.j_.set("Unknown"),p.W_.delete(4),await rf(p)}(this))})}),this.j_=new QO(r,i)}}async function rf(n){if(Po(n))for(const e of n.G_)await e(!0)}async function rc(n){for(const e of n.G_)await e(!1)}function NS(n,e){const t=Ae(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),h_(t)?c_(t):Za(t).c_()&&u_(t,e))}function l_(n,e){const t=Ae(n),r=Za(t);t.K_.delete(e),r.c_()&&xS(t,e),t.K_.size===0&&(r.c_()?r.P_():Po(t)&&t.j_.set("Unknown"))}function u_(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Za(n).y_(e)}function xS(n,e){n.H_.Ne(e),Za(n).w_(e)}function c_(n){n.H_=new Wb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Za(n).start(),n.j_.B_()}function h_(n){return Po(n)&&!Za(n).u_()&&n.K_.size>0}function Po(n){return Ae(n).W_.size===0}function bS(n){n.H_=void 0}async function JO(n){n.j_.set("Online")}async function XO(n){n.K_.forEach((e,t)=>{u_(n,e)})}async function ZO(n,e){bS(n),h_(n)?(n.j_.q_(e),c_(n)):n.j_.set("Unknown")}async function eD(n,e,t){if(n.j_.set("Online"),e instanceof gS&&e.state===2&&e.cause)try{await async function(i,a){const l=a.cause;for(const h of a.targetIds)i.K_.has(h)&&(await i.remoteSyncer.rejectListen(h,l),i.K_.delete(h),i.H_.removeTarget(h))}(n,e)}catch(r){ue(go,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yd(n,r)}else if(e instanceof Qh?n.H_.We(e):e instanceof mS?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Re.min()))try{const r=await AS(n.localStore);t.compareTo(r)>=0&&await function(a,l){const h=a.H_.ot(l);return h.targetChanges.forEach((f,p)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.K_.get(p);y&&a.K_.set(p,y.withResumeToken(f.resumeToken,l))}}),h.targetMismatches.forEach((f,p)=>{const y=a.K_.get(f);if(!y)return;a.K_.set(f,y.withResumeToken(Gt.EMPTY_BYTE_STRING,y.snapshotVersion)),xS(a,f);const v=new ns(y.target,f,p,y.sequenceNumber);u_(a,v)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){ue(go,"Failed to raise snapshot:",r),await yd(n,r)}}async function yd(n,e,t){if(!Xa(e))throw e;n.W_.add(1),await rc(n),n.j_.set("Offline"),t||(t=()=>AS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ue(go,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await rf(n)})}function OS(n,e){return e().catch(t=>yd(n,t,e))}async function sf(n){const e=Ae(n),t=ms(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Kg;for(;tD(e);)try{const i=await MO(e.localStore,r);if(i===null){e.U_.length===0&&t.P_();break}r=i.batchId,nD(e,i)}catch(i){await yd(e,i)}DS(e)&&LS(e)}function tD(n){return Po(n)&&n.U_.length<10}function nD(n,e){n.U_.push(e);const t=ms(n);t.c_()&&t.S_&&t.b_(e.mutations)}function DS(n){return Po(n)&&!ms(n).u_()&&n.U_.length>0}function LS(n){ms(n).start()}async function rD(n){ms(n).C_()}async function iD(n){const e=ms(n);for(const t of n.U_)e.b_(t.mutations)}async function sD(n,e,t){const r=n.U_.shift(),i=t_.from(r,e,t);await OS(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await sf(n)}async function oD(n,e){e&&ms(n).S_&&await async function(r,i){if(function(l){return zb(l)&&l!==J.ABORTED}(i.code)){const a=r.U_.shift();ms(r).h_(),await OS(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i)),await sf(r)}}(n,e),DS(n)&&LS(n)}async function Qw(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),ue(go,"RemoteStore received new credentials");const r=Po(t);t.W_.add(3),await rc(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await rf(t)}async function aD(n,e){const t=Ae(n);e?(t.W_.delete(2),await rf(t)):e||(t.W_.add(2),await rc(t),t.j_.set("Unknown"))}function Za(n){return n.J_||(n.J_=function(t,r,i){const a=Ae(t);return a.M_(),new HO(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(n.datastore,n.asyncQueue,{xo:JO.bind(null,n),No:XO.bind(null,n),Lo:ZO.bind(null,n),p_:eD.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),h_(n)?c_(n):n.j_.set("Unknown")):(await n.J_.stop(),bS(n))})),n.J_}function ms(n){return n.Y_||(n.Y_=function(t,r,i){const a=Ae(t);return a.M_(),new qO(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:rD.bind(null,n),Lo:oD.bind(null,n),D_:iD.bind(null,n),v_:sD.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await sf(n)):(await n.Y_.stop(),n.U_.length>0&&(ue(go,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class d_{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const l=Date.now()+r,h=new d_(e,t,l,i,a);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function f_(n,e){if(wi("AsyncQueue",`${e}: ${n}`),Xa(n))return new pe(J.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Oa{static emptySet(e){return new Oa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ve.comparator(t.key,r.key):(t,r)=>ve.comparator(t.key,r.key),this.keyedMap=fu(),this.sortedSet=new Tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Oa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Yw{constructor(){this.Z_=new Tt(ve.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Se():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class $a{constructor(e,t,r,i,a,l,h,f,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,i,a){const l=[];return t.forEach(h=>{l.push({type:0,doc:h})}),new $a(e,t,Oa.emptySet(t),l,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class lD{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class uD{constructor(){this.queries=Jw(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=Ae(t),a=i.queries;i.queries=Jw(),a.forEach((l,h)=>{for(const f of h.ta)f.onError(r)})})(this,new pe(J.ABORTED,"Firestore shutting down"))}}function Jw(){return new Ao(n=>eS(n),Jd)}async function MS(n,e){const t=Ae(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.na()&&e.ra()&&(r=2):(a=new lD,r=e.ra()?0:1);try{switch(r){case 0:a.ea=await t.onListen(i,!0);break;case 1:a.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(l){const h=f_(l,`Initialization of query '${Ca(e.query)}' failed`);return void e.onError(h)}t.queries.set(i,a),a.ta.push(e),e.sa(t.onlineState),a.ea&&e.oa(a.ea)&&p_(t)}async function VS(n,e){const t=Ae(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const l=a.ta.indexOf(e);l>=0&&(a.ta.splice(l,1),a.ta.length===0?i=e.ra()?0:1:!a.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function cD(n,e){const t=Ae(n);let r=!1;for(const i of e){const a=i.query,l=t.queries.get(a);if(l){for(const h of l.ta)h.oa(i)&&(r=!0);l.ea=i}}r&&p_(t)}function hD(n,e,t){const r=Ae(n),i=r.queries.get(e);if(i)for(const a of i.ta)a.onError(t);r.queries.delete(e)}function p_(n){n.ia.forEach(e=>{e.next()})}var sg,Xw;(Xw=sg||(sg={}))._a="default",Xw.Cache="cache";class FS{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $a(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=$a.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==sg.Cache}}/**
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
 */class US{constructor(e){this.key=e}}class jS{constructor(e){this.key=e}}class dD{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ve(),this.mutatedKeys=Ve(),this.ya=tS(e),this.wa=new Oa(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new Yw,i=t?t.wa:this.wa;let a=t?t.mutatedKeys:this.mutatedKeys,l=i,h=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,p=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((y,v)=>{const T=i.get(y),R=Xd(this.query,v)?v:null,k=!!T&&this.mutatedKeys.has(T.key),L=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let N=!1;T&&R?T.data.isEqual(R.data)?k!==L&&(r.track({type:3,doc:R}),N=!0):this.va(T,R)||(r.track({type:2,doc:R}),N=!0,(f&&this.ya(R,f)>0||p&&this.ya(R,p)<0)&&(h=!0)):!T&&R?(r.track({type:0,doc:R}),N=!0):T&&!R&&(r.track({type:1,doc:T}),N=!0,(f||p)&&(h=!0)),N&&(R?(l=l.add(R),a=L?a.add(y):a.delete(y)):(l=l.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const y=this.query.limitType==="F"?l.last():l.first();l=l.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{wa:l,Da:r,ls:h,mutatedKeys:a}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const l=e.Da.X_();l.sort((y,v)=>function(R,k){const L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return L(R)-L(k)}(y.type,v.type)||this.ya(y.doc,v.doc)),this.Ca(r),i=i!=null&&i;const h=t&&!i?this.Fa():[],f=this.pa.size===0&&this.current&&!i?1:0,p=f!==this.ga;return this.ga=f,l.length!==0||p?{snapshot:new $a(this.query,e.wa,a,l,e.mutatedKeys,f===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:h}:{Ma:h}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Yw,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ve(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new jS(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new US(r))}),t}Oa(e){this.fa=e.gs,this.pa=Ve();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return $a.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const m_="SyncEngine";class fD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pD{constructor(e){this.key=e,this.Ba=!1}}class mD{constructor(e,t,r,i,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new Ao(h=>eS(h),Jd),this.qa=new Map,this.Qa=new Set,this.$a=new Tt(ve.comparator),this.Ua=new Map,this.Ka=new i_,this.Wa={},this.Ga=new Map,this.za=za.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function gD(n,e,t=!0){const r=qS(n);let i;const a=r.ka.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.Na()):i=await BS(r,e,t,!0),i}async function _D(n,e){const t=qS(n);await BS(t,e,!0,!1)}async function BS(n,e,t,r){const i=await VO(n.localStore,Ur(e)),a=i.targetId,l=n.sharedClientState.addLocalQueryTarget(a,t);let h;return r&&(h=await yD(n,e,a,l==="current",i.resumeToken)),n.isPrimaryClient&&t&&NS(n.remoteStore,i),h}async function yD(n,e,t,r,i){n.Ha=(v,T,R)=>async function(L,N,K,te){let Z=N.view.ba(K);Z.ls&&(Z=await Ww(L.localStore,N.query,!1).then(({documents:b})=>N.view.ba(b,Z)));const oe=te&&te.targetChanges.get(N.targetId),Ee=te&&te.targetMismatches.get(N.targetId)!=null,we=N.view.applyChanges(Z,L.isPrimaryClient,oe,Ee);return eT(L,N.targetId,we.Ma),we.snapshot}(n,v,T,R);const a=await Ww(n.localStore,e,!0),l=new dD(e,a.gs),h=l.ba(a.documents),f=nc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),p=l.applyChanges(h,n.isPrimaryClient,f);eT(n,t,p.Ma);const y=new fD(e,t,l);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),p.snapshot}async function vD(n,e,t){const r=Ae(n),i=r.ka.get(e),a=r.qa.get(i.targetId);if(a.length>1)return r.qa.set(i.targetId,a.filter(l=>!Jd(l,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&l_(r.remoteStore,i.targetId),og(r,i.targetId)}).catch(Ja)):(og(r,i.targetId),await rg(r.localStore,i.targetId,!0))}async function ED(n,e){const t=Ae(n),r=t.ka.get(e),i=t.qa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),l_(t.remoteStore,r.targetId))}async function wD(n,e,t){const r=PD(n);try{const i=await function(l,h){const f=Ae(l),p=Nt.now(),y=h.reduce((R,k)=>R.add(k.key),Ve());let v,T;return f.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=Ti(),L=Ve();return f.ds.getEntries(R,y).next(N=>{k=N,k.forEach((K,te)=>{te.isValidDocument()||(L=L.add(K))})}).next(()=>f.localDocuments.getOverlayedDocuments(R,k)).next(N=>{v=N;const K=[];for(const te of h){const Z=Vb(te,v.get(te.key).overlayedDocument);Z!=null&&K.push(new Ss(te.key,Z,G0(Z.value.mapValue),Er.exists(!0)))}return f.mutationQueue.addMutationBatch(R,p,K,h)}).next(N=>{T=N;const K=N.applyToLocalDocumentSet(v,L);return f.documentOverlayCache.saveOverlays(R,N.batchId,K)})}).then(()=>({batchId:T.batchId,changes:rS(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,h,f){let p=l.Wa[l.currentUser.toKey()];p||(p=new Tt(Ne)),p=p.insert(h,f),l.Wa[l.currentUser.toKey()]=p}(r,i.batchId,t),await ic(r,i.changes),await sf(r.remoteStore)}catch(i){const a=f_(i,"Failed to persist write");t.reject(a)}}async function zS(n,e){const t=Ae(n);try{const r=await DO(t.localStore,e);e.targetChanges.forEach((i,a)=>{const l=t.Ua.get(a);l&&(Ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.Ba=!0:i.modifiedDocuments.size>0?Ge(l.Ba):i.removedDocuments.size>0&&(Ge(l.Ba),l.Ba=!1))}),await ic(t,r,e)}catch(r){await Ja(r)}}function Zw(n,e,t){const r=Ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((a,l)=>{const h=l.view.sa(e);h.snapshot&&i.push(h.snapshot)}),function(l,h){const f=Ae(l);f.onlineState=h;let p=!1;f.queries.forEach((y,v)=>{for(const T of v.ta)T.sa(h)&&(p=!0)}),p&&p_(f)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TD(n,e,t){const r=Ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ua.get(e),a=i&&i.key;if(a){let l=new Tt(ve.comparator);l=l.insert(a,nn.newNoDocument(a,Re.min()));const h=Ve().add(a),f=new tf(Re.min(),new Map,new Tt(Ne),l,h);await zS(r,f),r.$a=r.$a.remove(a),r.Ua.delete(e),g_(r)}else await rg(r.localStore,e,!1).then(()=>og(r,e,t)).catch(Ja)}async function ID(n,e){const t=Ae(n),r=e.batch.batchId;try{const i=await OO(t.localStore,e);WS(t,r,null),$S(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ic(t,i)}catch(i){await Ja(i)}}async function SD(n,e,t){const r=Ae(n);try{const i=await function(l,h){const f=Ae(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return f.mutationQueue.lookupMutationBatch(p,h).next(v=>(Ge(v!==null),y=v.keys(),f.mutationQueue.removeMutationBatch(p,v))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,y,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>f.localDocuments.getDocuments(p,y))})}(r.localStore,e);WS(r,e,t),$S(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ic(r,i)}catch(i){await Ja(i)}}function $S(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function WS(n,e,t){const r=Ae(n);let i=r.Wa[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function og(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||HS(n,r)})}function HS(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(l_(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),g_(n))}function eT(n,e,t){for(const r of t)r instanceof US?(n.Ka.addReference(r.key,e),CD(n,r)):r instanceof jS?(ue(m_,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||HS(n,r.key)):Se()}function CD(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(ue(m_,"New document in limbo: "+t),n.Qa.add(r),g_(n))}function g_(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ve(lt.fromString(e)),r=n.za.next();n.Ua.set(r,new pD(t)),n.$a=n.$a.insert(t,r),NS(n.remoteStore,new ns(Ur(Zg(t.path)),r,"TargetPurposeLimboResolution",Gd.ae))}}async function ic(n,e,t){const r=Ae(n),i=[],a=[],l=[];r.ka.isEmpty()||(r.ka.forEach((h,f)=>{l.push(r.Ha(f,e,t).then(p=>{var y;if((p||t)&&r.isPrimaryClient){const v=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,v?"current":"not-current")}if(p){i.push(p);const v=o_.Yi(f.targetId,p);a.push(v)}}))}),await Promise.all(l),r.La.p_(i),await async function(f,p){const y=Ae(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>q.forEach(p,T=>q.forEach(T.Hi,R=>y.persistence.referenceDelegate.addReference(v,T.targetId,R)).next(()=>q.forEach(T.Ji,R=>y.persistence.referenceDelegate.removeReference(v,T.targetId,R)))))}catch(v){if(!Xa(v))throw v;ue(a_,"Failed to update sequence numbers: "+v)}for(const v of p){const T=v.targetId;if(!v.fromCache){const R=y.Ts.get(T),k=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(k);y.Ts=y.Ts.insert(T,L)}}}(r.localStore,a))}async function RD(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){ue(m_,"User change. New user:",e.toKey());const r=await RS(t.localStore,e);t.currentUser=e,function(a,l){a.Ga.forEach(h=>{h.forEach(f=>{f.reject(new pe(J.CANCELLED,l))})}),a.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ic(t,r.Rs)}}function AD(n,e){const t=Ae(n),r=t.Ua.get(e);if(r&&r.Ba)return Ve().add(r.key);{let i=Ve();const a=t.qa.get(e);if(!a)return i;for(const l of a){const h=t.ka.get(l);i=i.unionWith(h.view.Sa)}return i}}function qS(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TD.bind(null,e),e.La.p_=cD.bind(null,e.eventManager),e.La.Ja=hD.bind(null,e.eventManager),e}function PD(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ID.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SD.bind(null,e),e}class vd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return bO(this.persistence,new kO,e.initialUser,this.serializer)}Xa(e){return new CS(s_.ri,this.serializer)}Za(e){return new UO}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vd.provider={build:()=>new vd};class kD extends vd{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ge(this.persistence.referenceDelegate instanceof _d);const r=this.persistence.referenceDelegate.garbageCollector;return new pO(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?En.withCacheSize(this.cacheSizeBytes):En.DEFAULT;return new CS(r=>_d.ri(r,t),this.serializer)}}class ag{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RD.bind(null,this.syncEngine),await aD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uD}()}createDatastore(e){const t=nf(e.databaseInfo.databaseId),r=function(a){return new WO(a)}(e.databaseInfo);return function(a,l,h,f){return new KO(a,l,h,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,a,l,h){return new YO(r,i,a,l,h)}(this.localStore,this.datastore,e.asyncQueue,t=>Zw(this.syncEngine,t,0),function(){return Gw.D()?new Gw:new jO}())}createSyncEngine(e,t){return function(i,a,l,h,f,p,y){const v=new mD(i,a,l,h,f,p);return y&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const a=Ae(i);ue(go,"RemoteStore shutting down."),a.W_.add(5),await rc(a),a.z_.shutdown(),a.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ag.provider={build:()=>new ag};/**
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
 */class GS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):wi("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const gs="FirestoreClient";class ND{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=tn.UNAUTHENTICATED,this.clientId=V0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async l=>{ue(gs,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(ue(gs,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=f_(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _m(n,e){n.asyncQueue.verifyOperationInProgress(),ue(gs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await RS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function tT(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xD(n);ue(gs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Qw(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Qw(e.remoteStore,i)),n._onlineComponents=e}async function xD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(gs,"Using user provided OfflineComponentProvider");try{await _m(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===J.FAILED_PRECONDITION||i.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Va("Error using user provided cache. Falling back to memory cache: "+t),await _m(n,new vd)}}else ue(gs,"Using default OfflineComponentProvider"),await _m(n,new kD(void 0));return n._offlineComponents}async function KS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(gs,"Using user provided OnlineComponentProvider"),await tT(n,n._uninitializedComponentsProvider._online)):(ue(gs,"Using default OnlineComponentProvider"),await tT(n,new ag))),n._onlineComponents}function bD(n){return KS(n).then(e=>e.syncEngine)}async function QS(n){const e=await KS(n),t=e.eventManager;return t.onListen=gD.bind(null,e.syncEngine),t.onUnlisten=vD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_D.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ED.bind(null,e.syncEngine),t}function OD(n,e,t={}){const r=new _i;return n.asyncQueue.enqueueAndForget(async()=>function(a,l,h,f,p){const y=new GS({next:T=>{y.su(),l.enqueueAndForget(()=>VS(a,v));const R=T.docs.has(h);!R&&T.fromCache?p.reject(new pe(J.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&f&&f.source==="server"?p.reject(new pe(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(T)},error:T=>p.reject(T)}),v=new FS(Zg(h.path),y,{includeMetadataChanges:!0,Ta:!0});return MS(a,v)}(await QS(n),n.asyncQueue,e,t,r)),r.promise}function DD(n,e,t={}){const r=new _i;return n.asyncQueue.enqueueAndForget(async()=>function(a,l,h,f,p){const y=new GS({next:T=>{y.su(),l.enqueueAndForget(()=>VS(a,v)),T.fromCache&&f.source==="server"?p.reject(new pe(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(T)},error:T=>p.reject(T)}),v=new FS(h,y,{includeMetadataChanges:!0,Ta:!0});return MS(a,v)}(await QS(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function YS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const nT=new Map;/**
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
 */function JS(n,e,t){if(!t)throw new pe(J.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function LD(n,e,t,r){if(e===!0&&r===!0)throw new pe(J.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rT(n){if(!ve.isDocumentKey(n))throw new pe(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function iT(n){if(ve.isDocumentKey(n))throw new pe(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function __(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se()}function Wr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new pe(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=__(n);throw new pe(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const XS="firestore.googleapis.com",sT=!0;class oT{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=XS,this.ssl=sT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:sT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=SS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dO)throw new pe(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new pe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new pe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new pe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class of{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new z1;switch(r.type){case"firstParty":return new q1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new pe(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=nT.get(t);r&&(ue("ComponentProvider","Removing Datastore"),nT.delete(t),r.terminate())}(this),Promise.resolve()}}function MD(n,e,t,r={}){var i;const a=(n=Wr(n,of))._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;a.host!==XS&&a.host!==h&&Va("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:h,ssl:!1,emulatorOptions:r});if(!Br(f,l)&&(n._setSettings(f),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=tn.MOCK_USER;else{p=Dg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new pe(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new tn(v)}n._authCredentials=new $1(new L0(p,y))}}/**
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
 */class af{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new af(this.firestore,e,this._query)}}class Cn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Cn(this.firestore,e,this._key)}}class ls extends af{constructor(e,t,r){super(e,t,Zg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Cn(this.firestore,null,new ve(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function aT(n,e,...t){if(n=st(n),JS("collection","path",e),n instanceof of){const r=lt.fromString(e,...t);return iT(r),new ls(n,null,r)}{if(!(n instanceof Cn||n instanceof ls))throw new pe(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return iT(r),new ls(n.firestore,null,r)}}function el(n,e,...t){if(n=st(n),arguments.length===1&&(e=V0.newId()),JS("doc","path",e),n instanceof of){const r=lt.fromString(e,...t);return rT(r),new Cn(n,null,new ve(r))}{if(!(n instanceof Cn||n instanceof ls))throw new pe(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return rT(r),new Cn(n.firestore,n instanceof ls?n.converter:null,new ve(r))}}/**
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
 */const lT="AsyncQueue";class uT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new PS(this,"async_queue_retry"),this.Su=()=>{const r=gm();r&&ue(lT,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=gm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=gm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new _i;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Xa(e))throw e;ue(lT,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(l){let h=l.message||"";return l.stack&&(h=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),h}(r);throw wi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=d_.createAndSchedule(this,e,t,r,a=>this.Fu(a));return this.fu.push(i),i}Du(){this.gu&&Se()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class tl extends of{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new uT,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uT(e),this._firestoreClient=void 0,await e}}}function VD(n,e){const t=typeof n=="object"?n:Yu(),r=typeof n=="string"?n:hd,i=Ci(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=Og("firestore");a&&MD(i,...a)}return i}function y_(n){if(n._terminated)throw new pe(J.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||FD(n),n._firestoreClient}function FD(n){var e,t,r;const i=n._freezeSettings(),a=function(h,f,p,y){return new ab(h,f,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,YS(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new ND(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class Wa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wa(Gt.fromBase64String(e))}catch(t){throw new pe(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wa(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class lf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sc{constructor(e){this._methodName=e}}/**
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
 */class v_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */class E_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const UD=/^__.*__$/;class jD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,t,this.fieldTransforms):new tc(e,this.data,t,this.fieldTransforms)}}class ZS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ss(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function eC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class uf{constructor(e,t,r,i,a,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Bu(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ed(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(eC(this.Lu)&&UD.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class BD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||nf(e)}ju(e,t,r,i=!1){return new uf({Lu:e,methodName:t,zu:r,path:qt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function w_(n){const e=n._freezeSettings(),t=nf(n._databaseId);return new BD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tC(n,e,t,r,i,a={}){const l=n.ju(a.merge||a.mergeFields?2:0,e,t,i);S_("Data must be an object, but it was:",l,r);const h=nC(r,l);let f,p;if(a.merge)f=new Vn(l.fieldMask),p=l.fieldTransforms;else if(a.mergeFields){const y=[];for(const v of a.mergeFields){const T=lg(e,v,t);if(!l.contains(T))throw new pe(J.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);iC(y,T)||y.push(T)}f=new Vn(y),p=l.fieldTransforms.filter(v=>f.covers(v.field))}else f=null,p=l.fieldTransforms;return new jD(new Tn(h),f,p)}class cf extends sc{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cf}}function zD(n,e,t){return new uf({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class T_ extends sc{_toFieldTransform(e){return new cS(e.path,new Mu)}isEqual(e){return e instanceof T_}}class I_ extends sc{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=zD(this,e,!0),r=this.Hu.map(a=>oc(a,t)),i=new Ba(r);return new cS(e.path,i)}isEqual(e){return e instanceof I_&&Br(this.Hu,e.Hu)}}function $D(n,e,t,r){const i=n.ju(1,e,t);S_("Data must be an object, but it was:",i,r);const a=[],l=Tn.empty();Is(r,(f,p)=>{const y=C_(e,f,t);p=st(p);const v=i.Uu(y);if(p instanceof cf)a.push(y);else{const T=oc(p,v);T!=null&&(a.push(y),l.set(y,T))}});const h=new Vn(a);return new ZS(l,h,i.fieldTransforms)}function WD(n,e,t,r,i,a){const l=n.ju(1,e,t),h=[lg(e,r,t)],f=[i];if(a.length%2!=0)throw new pe(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)h.push(lg(e,a[T])),f.push(a[T+1]);const p=[],y=Tn.empty();for(let T=h.length-1;T>=0;--T)if(!iC(p,h[T])){const R=h[T];let k=f[T];k=st(k);const L=l.Uu(R);if(k instanceof cf)p.push(R);else{const N=oc(k,L);N!=null&&(p.push(R),y.set(R,N))}}const v=new Vn(p);return new ZS(y,v,l.fieldTransforms)}function oc(n,e){if(rC(n=st(n)))return S_("Unsupported field value:",e,n),nC(n,e);if(n instanceof sc)return function(r,i){if(!eC(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const a=[];let l=0;for(const h of r){let f=oc(h,i.Ku(l));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),l++}return{arrayValue:{values:a}}}(n,e)}return function(r,i){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Nt.fromDate(r);return{timestampValue:gd(i.serializer,a)}}if(r instanceof Nt){const a=new Nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gd(i.serializer,a)}}if(r instanceof v_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wa)return{bytesValue:_S(i.serializer,r._byteString)};if(r instanceof Cn){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:r_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof E_)return function(l,h){return{mapValue:{fields:{[H0]:{stringValue:q0},[dd]:{arrayValue:{values:l.toArray().map(p=>{if(typeof p!="number")throw h.Wu("VectorValues must only contain numeric values.");return e_(h.serializer,p)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${__(r)}`)}(n,e)}function nC(n,e){const t={};return U0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(n,(r,i)=>{const a=oc(i,e.qu(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function rC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Nt||n instanceof v_||n instanceof Wa||n instanceof Cn||n instanceof sc||n instanceof E_)}function S_(n,e,t){if(!rC(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=__(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function lg(n,e,t){if((e=st(e))instanceof lf)return e._internalPath;if(typeof e=="string")return C_(n,e);throw Ed("Field path arguments must be of type string or ",n,!1,void 0,t)}const HD=new RegExp("[~\\*/\\[\\]]");function C_(n,e,t){if(e.search(HD)>=0)throw Ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new lf(...e.split("."))._internalPath}catch{throw Ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ed(n,e,t,r,i){const a=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||l)&&(f+=" (found",a&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new pe(J.INVALID_ARGUMENT,h+n+f)}function iC(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class sC{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oC("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qD extends sC{data(){return super.data()}}function oC(n,e){return typeof e=="string"?C_(n,e):e instanceof lf?e._internalPath:e._delegate._internalPath}/**
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
 */function GD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new pe(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class KD{convertValue(e,t="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Is(e,(i,a)=>{r[i]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,i;const a=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[dd].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(l=>_t(l.doubleValue));return new E_(a)}convertGeoPoint(e){return new v_(_t(e.latitude),_t(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Qd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ou(e));default:return null}}convertTimestamp(e){const t=ds(e);return new Nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=lt.fromString(e);Ge(IS(r));const i=new Du(r.get(1),r.get(3)),a=new ve(r.popFirst(5));return i.isEqual(t)||wi(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function aC(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class mu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lC extends sC{constructor(e,t,r,i,a,l){super(e,t,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(oC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Yh extends lC{data(e={}){return super.data(e)}}class QD{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new mu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Yh(this._firestore,this._userDataWriter,r.key,r,new mu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,a){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(h=>{const f=new Yh(i._firestore,i._userDataWriter,h.doc.key,h.doc,new mu(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>a||h.type!==3).map(h=>{const f=new Yh(i._firestore,i._userDataWriter,h.doc.key,h.doc,new mu(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,y=-1;return h.type!==0&&(p=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),y=l.indexOf(h.doc.key)),{type:YD(h.type),doc:f,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function YD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}/**
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
 */function uC(n){n=Wr(n,Cn);const e=Wr(n.firestore,tl);return OD(y_(e),n._key).then(t=>eL(e,n,t))}class cC extends KD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wa(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Cn(this.firestore,null,t)}}function JD(n){n=Wr(n,af);const e=Wr(n.firestore,tl),t=y_(e),r=new cC(e);return GD(n._query),DD(t,n._query).then(i=>new QD(e,r,n,i))}function XD(n,e,t){n=Wr(n,Cn);const r=Wr(n.firestore,tl),i=aC(n.converter,e);return R_(r,[tC(w_(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Er.none())])}function hC(n,e,t,...r){n=Wr(n,Cn);const i=Wr(n.firestore,tl),a=w_(i);let l;return l=typeof(e=st(e))=="string"||e instanceof lf?WD(a,"updateDoc",n._key,e,t,r):$D(a,"updateDoc",n._key,e),R_(i,[l.toMutation(n._key,Er.exists(!0))])}function ZD(n,e){const t=Wr(n.firestore,tl),r=el(n),i=aC(n.converter,e);return R_(t,[tC(w_(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Er.exists(!1))]).then(()=>r)}function R_(n,e){return function(r,i){const a=new _i;return r.asyncQueue.enqueueAndForget(async()=>wD(await bD(r),i,a)),a.promise}(y_(n),e)}function eL(n,e,t){const r=t.docs.get(e._key),i=new cC(n);return new lC(n,i,e._key,r,new mu(t.hasPendingWrites,t.fromCache),e.converter)}function tL(){return new T_("serverTimestamp")}function nL(...n){return new I_("arrayUnion",n)}(function(e,t=!0){(function(i){Ya=i})(Es),Jn(new jn("firestore",(r,{instanceIdentifier:i,options:a})=>{const l=r.getProvider("app").getImmediate(),h=new tl(new W1(r.getProvider("auth-internal")),new G1(l,r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new pe(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Du(p.options.projectId,y)}(l,i),l);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),on(pw,mw,e),on(pw,mw,"esm2017")})();var rL="firebase",iL="11.6.0";/**
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
 */on(rL,iL,"app");const dC="@firebase/installations",A_="0.6.13";/**
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
 */const fC=1e4,pC=`w:${A_}`,mC="FIS_v2",sL="https://firebaseinstallations.googleapis.com/v1",oL=60*60*1e3,aL="installations",lL="Installations";/**
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
 */const uL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_o=new Co(aL,lL,uL);function gC(n){return n instanceof Xn&&n.code.includes("request-failed")}/**
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
 */function _C({projectId:n}){return`${sL}/projects/${n}/installations`}function yC(n){return{token:n.token,requestStatus:2,expiresIn:hL(n.expiresIn),creationTime:Date.now()}}async function vC(n,e){const r=(await e.json()).error;return _o.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function EC({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function cL(n,{refreshToken:e}){const t=EC(n);return t.append("Authorization",dL(e)),t}async function wC(n){const e=await n();return e.status>=500&&e.status<600?n():e}function hL(n){return Number(n.replace("s","000"))}function dL(n){return`${mC} ${n}`}/**
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
 */async function fL({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=_C(n),i=EC(n),a=e.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={fid:t,authVersion:mC,appId:n.appId,sdkVersion:pC},h={method:"POST",headers:i,body:JSON.stringify(l)},f=await wC(()=>fetch(r,h));if(f.ok){const p=await f.json();return{fid:p.fid||t,registrationStatus:2,refreshToken:p.refreshToken,authToken:yC(p.authToken)}}else throw await vC("Create Installation",f)}/**
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
 */function TC(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function pL(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const mL=/^[cdef][\w-]{21}$/,ug="";function gL(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=_L(n);return mL.test(t)?t:ug}catch{return ug}}function _L(n){return pL(n).substr(0,22)}/**
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
 */function hf(n){return`${n.appName}!${n.appId}`}/**
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
 */const IC=new Map;function SC(n,e){const t=hf(n);CC(t,e),yL(t,e)}function CC(n,e){const t=IC.get(n);if(t)for(const r of t)r(e)}function yL(n,e){const t=vL();t&&t.postMessage({key:n,fid:e}),EL()}let so=null;function vL(){return!so&&"BroadcastChannel"in self&&(so=new BroadcastChannel("[Firebase] FID Change"),so.onmessage=n=>{CC(n.data.key,n.data.fid)}),so}function EL(){IC.size===0&&so&&(so.close(),so=null)}/**
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
 */const wL="firebase-installations-database",TL=1,yo="firebase-installations-store";let ym=null;function P_(){return ym||(ym=HI(wL,TL,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(yo)}}})),ym}async function wd(n,e){const t=hf(n),i=(await P_()).transaction(yo,"readwrite"),a=i.objectStore(yo),l=await a.get(t);return await a.put(e,t),await i.done,(!l||l.fid!==e.fid)&&SC(n,e.fid),e}async function RC(n){const e=hf(n),r=(await P_()).transaction(yo,"readwrite");await r.objectStore(yo).delete(e),await r.done}async function df(n,e){const t=hf(n),i=(await P_()).transaction(yo,"readwrite"),a=i.objectStore(yo),l=await a.get(t),h=e(l);return h===void 0?await a.delete(t):await a.put(h,t),await i.done,h&&(!l||l.fid!==h.fid)&&SC(n,h.fid),h}/**
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
 */async function k_(n){let e;const t=await df(n.appConfig,r=>{const i=IL(r),a=SL(n,i);return e=a.registrationPromise,a.installationEntry});return t.fid===ug?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function IL(n){const e=n||{fid:gL(),registrationStatus:0};return AC(e)}function SL(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_o.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CL(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RL(n)}:{installationEntry:e}}async function CL(n,e){try{const t=await fL(n,e);return wd(n.appConfig,t)}catch(t){throw gC(t)&&t.customData.serverCode===409?await RC(n.appConfig):await wd(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function RL(n){let e=await cT(n.appConfig);for(;e.registrationStatus===1;)await TC(100),e=await cT(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await k_(n);return r||t}return e}function cT(n){return df(n,e=>{if(!e)throw _o.create("installation-not-found");return AC(e)})}function AC(n){return AL(n)?{fid:n.fid,registrationStatus:0}:n}function AL(n){return n.registrationStatus===1&&n.registrationTime+fC<Date.now()}/**
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
 */async function PL({appConfig:n,heartbeatServiceProvider:e},t){const r=kL(n,t),i=cL(n,t),a=e.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={installation:{sdkVersion:pC,appId:n.appId}},h={method:"POST",headers:i,body:JSON.stringify(l)},f=await wC(()=>fetch(r,h));if(f.ok){const p=await f.json();return yC(p)}else throw await vC("Generate Auth Token",f)}function kL(n,{fid:e}){return`${_C(n)}/${e}/authTokens:generate`}/**
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
 */async function N_(n,e=!1){let t;const r=await df(n.appConfig,a=>{if(!PC(a))throw _o.create("not-registered");const l=a.authToken;if(!e&&bL(l))return a;if(l.requestStatus===1)return t=NL(n,e),a;{if(!navigator.onLine)throw _o.create("app-offline");const h=DL(a);return t=xL(n,h),h}});return t?await t:r.authToken}async function NL(n,e){let t=await hT(n.appConfig);for(;t.authToken.requestStatus===1;)await TC(100),t=await hT(n.appConfig);const r=t.authToken;return r.requestStatus===0?N_(n,e):r}function hT(n){return df(n,e=>{if(!PC(e))throw _o.create("not-registered");const t=e.authToken;return LL(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function xL(n,e){try{const t=await PL(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await wd(n.appConfig,r),t}catch(t){if(gC(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await RC(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wd(n.appConfig,r)}throw t}}function PC(n){return n!==void 0&&n.registrationStatus===2}function bL(n){return n.requestStatus===2&&!OL(n)}function OL(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+oL}function DL(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function LL(n){return n.requestStatus===1&&n.requestTime+fC<Date.now()}/**
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
 */async function ML(n){const e=n,{installationEntry:t,registrationPromise:r}=await k_(e);return r?r.catch(console.error):N_(e).catch(console.error),t.fid}/**
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
 */async function VL(n,e=!1){const t=n;return await FL(t),(await N_(t,e)).token}async function FL(n){const{registrationPromise:e}=await k_(n);e&&await e}/**
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
 */function UL(n){if(!n||!n.options)throw vm("App Configuration");if(!n.name)throw vm("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw vm(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function vm(n){return _o.create("missing-app-config-values",{valueName:n})}/**
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
 */const kC="installations",jL="installations-internal",BL=n=>{const e=n.getProvider("app").getImmediate(),t=UL(e),r=Ci(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zL=n=>{const e=n.getProvider("app").getImmediate(),t=Ci(e,kC).getImmediate();return{getId:()=>ML(t),getToken:i=>VL(t,i)}};function $L(){Jn(new jn(kC,BL,"PUBLIC")),Jn(new jn(jL,zL,"PRIVATE"))}$L();on(dC,A_);on(dC,A_,"esm2017");/**
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
 */const Td="analytics",WL="firebase_id",HL="origin",qL=60*1e3,GL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",x_="https://www.googletagmanager.com/gtag/js";/**
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
 */const Rn=new Qu("@firebase/analytics");/**
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
 */const KL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fn=new Co("analytics","Analytics",KL);/**
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
 */function QL(n){if(!n.startsWith(x_)){const e=Fn.create("invalid-gtag-resource",{gtagURL:n});return Rn.warn(e.message),""}return n}function NC(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function YL(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function JL(n,e){const t=YL("firebase-js-sdk-policy",{createScriptURL:QL}),r=document.createElement("script"),i=`${x_}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function XL(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ZL(n,e,t,r,i,a){const l=r[i];try{if(l)await e[l];else{const f=(await NC(t)).find(p=>p.measurementId===i);f&&await e[f.appId]}}catch(h){Rn.error(h)}n("config",i,a)}async function eM(n,e,t,r,i){try{let a=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const h=await NC(t);for(const f of l){const p=h.find(v=>v.measurementId===f),y=p&&e[p.appId];if(y)a.push(y);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",r,i||{})}catch(a){Rn.error(a)}}function tM(n,e,t,r){async function i(a,...l){try{if(a==="event"){const[h,f]=l;await eM(n,e,t,h,f)}else if(a==="config"){const[h,f]=l;await ZL(n,e,t,r,h,f)}else if(a==="consent"){const[h,f]=l;n("consent",h,f)}else if(a==="get"){const[h,f,p]=l;n("get",h,f,p)}else if(a==="set"){const[h]=l;n("set",h)}else n(a,...l)}catch(h){Rn.error(h)}}return i}function nM(n,e,t,r,i){let a=function(...l){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=tM(a,n,e,t),{gtagCore:a,wrappedGtag:window[i]}}function rM(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(x_)&&t.src.includes(n))return t;return null}/**
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
 */const iM=30,sM=1e3;class oM{constructor(e={},t=sM){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const xC=new oM;function aM(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function lM(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:aM(r)},a=GL.replace("{app-id}",t),l=await fetch(a,i);if(l.status!==200&&l.status!==304){let h="";try{const f=await l.json();!((e=f.error)===null||e===void 0)&&e.message&&(h=f.error.message)}catch{}throw Fn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function uM(n,e=xC,t){const{appId:r,apiKey:i,measurementId:a}=n.options;if(!r)throw Fn.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw Fn.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new dM;return setTimeout(async()=>{h.abort()},qL),bC({appId:r,apiKey:i,measurementId:a},l,h,e)}async function bC(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=xC){var a;const{appId:l,measurementId:h}=n;try{await cM(r,e)}catch(f){if(h)return Rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:h};throw f}try{const f=await lM(n);return i.deleteThrottleMetadata(l),f}catch(f){const p=f;if(!hM(p)){if(i.deleteThrottleMetadata(l),h)return Rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:h};throw f}const y=Number((a=p==null?void 0:p.customData)===null||a===void 0?void 0:a.httpStatus)===503?FE(t,i.intervalMillis,iM):FE(t,i.intervalMillis),v={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return i.setThrottleMetadata(l,v),Rn.debug(`Calling attemptFetch again in ${y} millis`),bC(n,v,r,i)}}function cM(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(a),r(Fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hM(n){if(!(n instanceof Xn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class dM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fM(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const a=await e,l=Object.assign(Object.assign({},r),{send_to:a});n("event",t,l)}}/**
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
 */async function pM(){if(jI())try{await BI()}catch(n){return Rn.warn(Fn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Rn.warn(Fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mM(n,e,t,r,i,a,l){var h;const f=uM(n);f.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&Rn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>Rn.error(R)),e.push(f);const p=pM().then(R=>{if(R)return r.getId()}),[y,v]=await Promise.all([f,p]);rM(a)||JL(a,y.measurementId),i("js",new Date);const T=(h=l==null?void 0:l.config)!==null&&h!==void 0?h:{};return T[HL]="firebase",T.update=!0,v!=null&&(T[WL]=v),i("config",y.measurementId,T),y.measurementId}/**
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
 */class gM{constructor(e){this.app=e}_delete(){return delete wu[this.app.options.appId],Promise.resolve()}}let wu={},dT=[];const fT={};let Em="dataLayer",_M="gtag",pT,OC,mT=!1;function yM(){const n=[];if(FI()&&n.push("This is a browser extension environment."),ok()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Fn.create("invalid-analytics-context",{errorInfo:e});Rn.warn(t.message)}}function vM(n,e,t){yM();const r=n.options.appId;if(!r)throw Fn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fn.create("no-api-key");if(wu[r]!=null)throw Fn.create("already-exists",{id:r});if(!mT){XL(Em);const{wrappedGtag:a,gtagCore:l}=nM(wu,dT,fT,Em,_M);OC=a,pT=l,mT=!0}return wu[r]=mM(n,dT,fT,e,pT,Em,t),new gM(n)}function EM(n=Yu()){n=st(n);const e=Ci(n,Td);return e.isInitialized()?e.getImmediate():wM(n)}function wM(n,e={}){const t=Ci(n,Td);if(t.isInitialized()){const i=t.getImmediate();if(Br(e,t.getOptions()))return i;throw Fn.create("already-initialized")}return t.initialize({options:e})}function TM(n,e,t,r){n=st(n),fM(OC,wu[n.app.options.appId],e,t,r).catch(i=>Rn.error(i))}const gT="@firebase/analytics",_T="0.10.12";function IM(){Jn(new jn(Td,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return vM(r,i,t)},"PUBLIC")),Jn(new jn("analytics-internal",n,"PRIVATE")),on(gT,_T),on(gT,_T,"esm2017");function n(e){try{const t=e.getProvider(Td).getImmediate();return{logEvent:(r,i,a)=>TM(t,r,i,a)}}catch(t){throw Fn.create("interop-component-reg-failed",{reason:t})}}}IM();/**
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
 */const DC="firebasestorage.googleapis.com",SM="storageBucket",CM=2*60*1e3,RM=10*60*1e3;/**
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
 */class Gr extends Xn{constructor(e,t,r=0){super(wm(e),`Firebase Storage: ${t} (${wm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Hr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Hr||(Hr={}));function wm(n){return"storage/"+n}function AM(){const n="An unknown error occurred, please check the error payload for server response.";return new Gr(Hr.UNKNOWN,n)}function PM(){return new Gr(Hr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kM(){return new Gr(Hr.CANCELED,"User canceled the upload/download.")}function NM(n){return new Gr(Hr.INVALID_URL,"Invalid URL '"+n+"'.")}function xM(n){return new Gr(Hr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function yT(n){return new Gr(Hr.INVALID_ARGUMENT,n)}function LC(){return new Gr(Hr.APP_DELETED,"The Firebase app was deleted.")}function bM(n){return new Gr(Hr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class _r{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=_r.makeFromUrl(e,t)}catch{return new _r(e,"")}if(r.path==="")return r;throw xM(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function a(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const l="(/(.*))?$",h=new RegExp("^gs://"+i+l,"i"),f={bucket:1,path:3};function p(oe){oe.path_=decodeURIComponent(oe.path)}const y="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",R=new RegExp(`^https?://${v}/${y}/b/${i}/o${T}`,"i"),k={bucket:1,path:3},L=t===DC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",K=new RegExp(`^https?://${L}/${i}/${N}`,"i"),Z=[{regex:h,indices:f,postModify:a},{regex:R,indices:k,postModify:p},{regex:K,indices:{bucket:1,path:2},postModify:p}];for(let oe=0;oe<Z.length;oe++){const Ee=Z[oe],we=Ee.regex.exec(e);if(we){const b=we[Ee.indices.bucket];let S=we[Ee.indices.path];S||(S=""),r=new _r(b,S),Ee.postModify(r);break}}if(r==null)throw NM(e);return r}}class OM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function DM(n,e,t){let r=1,i=null,a=null,l=!1,h=0;function f(){return h===2}let p=!1;function y(...N){p||(p=!0,e.apply(null,N))}function v(N){i=setTimeout(()=>{i=null,n(R,f())},N)}function T(){a&&clearTimeout(a)}function R(N,...K){if(p){T();return}if(N){T(),y.call(null,N,...K);return}if(f()||l){T(),y.call(null,N,...K);return}r<64&&(r*=2);let Z;h===1?(h=2,Z=0):Z=(r+Math.random())*1e3,v(Z)}let k=!1;function L(N){k||(k=!0,T(),!p&&(i!==null?(N||(h=2),clearTimeout(i),v(0)):N||(h=1)))}return v(0),a=setTimeout(()=>{l=!0,L(!0)},t),L}function LM(n){n(!1)}/**
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
 */function MM(n){return n!==void 0}function vT(n,e,t,r){if(r<e)throw yT(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw yT(`Invalid value for '${n}'. Expected ${t} or less.`)}function VM(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Id;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Id||(Id={}));/**
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
 */function FM(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||i||a}/**
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
 */class UM{constructor(e,t,r,i,a,l,h,f,p,y,v,T=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=h,this.errorCallback_=f,this.timeout_=p,this.progressCallback_=y,this.connectionFactory_=v,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,k)=>{this.resolve_=R,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Fh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=h=>{const f=h.loaded,p=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,p)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const h=a.getErrorCode()===Id.NO_ERROR,f=a.getStatus();if(!h||FM(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===Id.ABORT;r(!1,new Fh(!1,null,y));return}const p=this.successCodes_.indexOf(f)!==-1;r(!0,new Fh(p,a))})},t=(r,i)=>{const a=this.resolve_,l=this.reject_,h=i.connection;if(i.wasSuccessCode)try{const f=this.callback_(h,h.getResponse());MM(f)?a(f):a()}catch(f){l(f)}else if(h!==null){const f=AM();f.serverResponse=h.getErrorText(),this.errorCallback_?l(this.errorCallback_(h,f)):l(f)}else if(i.canceled){const f=this.appDelete_?LC():kM();l(f)}else{const f=PM();l(f)}};this.canceled_?t(!1,new Fh(!1,null,!0)):this.backoffId_=DM(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&LM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function jM(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function BM(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function $M(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function WM(n,e,t,r,i,a,l=!0){const h=VM(n.urlParams),f=n.url+h,p=Object.assign({},n.headers);return zM(p,e),jM(p,t),BM(p,a),$M(p,r),new UM(f,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,l)}/**
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
 */function HM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function qM(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Sd{constructor(e,t){this._service=e,t instanceof _r?this._location=t:this._location=_r.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Sd(e,t)}get root(){const e=new _r(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qM(this._location.path)}get storage(){return this._service}get parent(){const e=HM(this._location.path);if(e===null)return null;const t=new _r(this._location.bucket,e);return new Sd(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw bM(e)}}function ET(n,e){const t=e==null?void 0:e[SM];return t==null?null:_r.makeFromBucketSpec(t,n)}function GM(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Dg(i,n.app.options.projectId))}class KM{constructor(e,t,r,i,a){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=a,this._bucket=null,this._host=DC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CM,this._maxUploadRetryTime=RM,this._requests=new Set,i!=null?this._bucket=_r.makeFromBucketSpec(i,this._host):this._bucket=ET(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_r.makeFromBucketSpec(this._url,e):this._bucket=ET(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sd(this,e)}_makeRequest(e,t,r,i,a=!0){if(this._deleted)return new OM(LC());{const l=WM(e,this._appId,r,i,t,this._firebaseVersion,a);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const wT="@firebase/storage",TT="0.13.7";/**
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
 */const MC="storage";function QM(n=Yu(),e){n=st(n);const r=Ci(n,MC).getImmediate({identifier:e}),i=Og("storage");return i&&YM(r,...i),r}function YM(n,e,t,r={}){GM(n,e,t,r)}function JM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new KM(t,r,i,e,Es)}function XM(){Jn(new jn(MC,JM,"PUBLIC").setMultipleInstances(!0)),on(wT,TT,""),on(wT,TT,"esm2017")}XM();var IT={};const ST="@firebase/database",CT="1.0.14";/**
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
 */let VC="";function ZM(n){VC=n}/**
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
 */class eV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Au(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return qr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const FC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eV(e)}}catch{}return new tV},oo=FC("localStorage"),nV=FC("sessionStorage");/**
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
 */const Da=new Qu("@firebase/database"),rV=function(){let n=1;return function(){return n++}}(),UC=function(n){const e=gk(n),t=new dk;t.update(e);const r=t.digest();return bg.encodeByteArray(r)},ac=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ac.apply(null,r):typeof r=="object"?e+=jt(r):e+=r,e+=" "}return e};let Tu=null,RT=!0;const iV=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),Da.logLevel=Me.VERBOSE,Tu=Da.log.bind(Da)},rn=function(...n){if(RT===!0&&(RT=!1,Tu===null&&nV.get("logging_enabled")===!0&&iV()),Tu){const e=ac.apply(null,n);Tu(e)}},lc=function(n){return function(...e){rn(n,...e)}},cg=function(...n){const e="FIREBASE INTERNAL ERROR: "+ac(...n);Da.error(e)},Ii=function(...n){const e=`FIREBASE FATAL ERROR: ${ac(...n)}`;throw Da.error(e),new Error(e)},An=function(...n){const e="FIREBASE WARNING: "+ac(...n);Da.warn(e)},sV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},b_=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},oV=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vo="[MIN_NAME]",_s="[MAX_NAME]",nl=function(n,e){if(n===e)return 0;if(n===vo||e===_s)return-1;if(e===vo||n===_s)return 1;{const t=AT(n),r=AT(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},aV=function(n,e){return n===e?0:n<e?-1:1},iu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+jt(e))},O_=function(n){if(typeof n!="object"||n===null)return jt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=jt(e[r]),t+=":",t+=O_(n[e[r]]);return t+="}",t},jC=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function kn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const BC=function(n){ne(!b_(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,a,l,h,f;n===0?(a=0,l=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=h+r,l=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(a=0,l=Math.round(n/Math.pow(2,1-r-t))));const p=[];for(f=t;f;f-=1)p.push(l%2?1:0),l=Math.floor(l/2);for(f=e;f;f-=1)p.push(a%2?1:0),a=Math.floor(a/2);p.push(i?1:0),p.reverse();const y=p.join("");let v="";for(f=0;f<64;f+=8){let T=parseInt(y.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),v=v+T}return v.toLowerCase()},lV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cV(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const hV=new RegExp("^-?(0*)\\d{1,10}$"),dV=-2147483648,fV=2147483647,AT=function(n){if(hV.test(n)){const e=Number(n);if(e>=dV&&e<=fV)return e}return null},rl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw An("Exception was thrown by user callback.",t),e},Math.floor(0))}},pV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Iu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class mV{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,wn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gV{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class Jh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jh.OWNER="owner";/**
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
 */const D_="5",zC="v",$C="s",WC="r",HC="f",qC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,GC="ls",KC="p",hg="ac",QC="websocket",YC="long_polling";/**
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
 */class JC{constructor(e,t,r,i,a=!1,l="",h=!1,f=!1,p=null){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=a,this.persistenceKey=l,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this.emulatorOptions=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function _V(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function XC(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let r;if(e===QC)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===YC)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_V(n)&&(t.ns=n.namespace);const i=[];return kn(t,(a,l)=>{i.push(a+"="+l)}),r+i.join("&")}/**
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
 */class yV{constructor(){this.counters_={}}incrementCounter(e,t=1){qr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return QP(this.counters_)}}/**
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
 */const Tm={},Im={};function L_(n){const e=n.toString();return Tm[e]||(Tm[e]=new yV),Tm[e]}function vV(n,e){const t=n.toString();return Im[t]||(Im[t]=e()),Im[t]}/**
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
 */class EV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&rl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const PT="start",wV="close",TV="pLPCommand",IV="pRTLPCB",ZC="id",eR="pw",tR="ser",SV="cb",CV="seg",RV="ts",AV="d",PV="dframe",nR=1870,rR=30,kV=nR-rR,NV=25e3,xV=3e4;class ka{constructor(e,t,r,i,a,l,h){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.transportSessionId=l,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=lc(e),this.stats_=L_(t),this.urlFn=f=>(this.appCheckToken&&(f[hg]=this.appCheckToken),XC(t,YC,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new EV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xV)),oV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new M_((...a)=>{const[l,h,f,p,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===PT)this.id=h,this.password=f;else if(l===wV)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...a)=>{const[l,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(l,h)},()=>{this.onClosed_()},this.urlFn);const r={};r[PT]="t",r[tR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[SV]=this.scriptTagHolder.uniqueCallbackIdentifier),r[zC]=D_,this.transportSessionId&&(r[$C]=this.transportSessionId),this.lastSessionId&&(r[GC]=this.lastSessionId),this.applicationId&&(r[KC]=this.applicationId),this.appCheckToken&&(r[hg]=this.appCheckToken),typeof location<"u"&&location.hostname&&qC.test(location.hostname)&&(r[WC]=HC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ka.forceAllow_=!0}static forceDisallow(){ka.forceDisallow_=!0}static isAvailable(){return ka.forceAllow_?!0:!ka.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lV()&&!uV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=OI(t),i=jC(r,kV);for(let a=0;a<i.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[PV]="t",r[ZC]=e,r[eR]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class M_{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rV(),window[TV+this.uniqueCallbackIdentifier]=e,window[IV+this.uniqueCallbackIdentifier]=t,this.myIFrame=M_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(h){rn("frame writing exception"),h.stack&&rn(h.stack),rn(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ZC]=this.myID,e[eR]=this.myPW,e[tR]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rR+r.length<=nR;){const l=this.pendingSegs.shift();r=r+"&"+CV+i+"="+l.seg+"&"+RV+i+"="+l.ts+"&"+AV+i+"="+l.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(NV)),a=()=>{clearTimeout(i),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{rn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const bV=16384,OV=45e3;let Cd=null;typeof MozWebSocket<"u"?Cd=MozWebSocket:typeof WebSocket<"u"&&(Cd=WebSocket);class mr{constructor(e,t,r,i,a,l,h){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=lc(this.connId),this.stats_=L_(t),this.connURL=mr.connectionURL_(t,l,h,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,a){const l={};return l[zC]=D_,typeof location<"u"&&location.hostname&&qC.test(location.hostname)&&(l[WC]=HC),t&&(l[$C]=t),r&&(l[GC]=r),i&&(l[hg]=i),a&&(l[KC]=a),XC(e,QC,l)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oo.set("previous_websocket_failure",!0);try{let r;ik(),this.mySock=new Cd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Cd!==null&&!mr.forceDisallow_}static previouslyFailed(){return oo.isInMemoryStorage||oo.get("previous_websocket_failure")===!0}markConnectionHealthy(){oo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Au(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=jC(t,bV);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OV))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mr.responsesRequiredToBeHealthy=2;mr.healthyTimeout=3e4;/**
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
 */class Fu{static get ALL_TRANSPORTS(){return[ka,mr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=mr&&mr.isAvailable();let r=t&&!mr.previouslyFailed();if(e.webSocketOnly&&(t||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mr];else{const i=this.transports_=[];for(const a of Fu.ALL_TRANSPORTS)a&&a.isAvailable()&&i.push(a);Fu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fu.globalTransportInitialized_=!1;/**
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
 */const DV=6e4,LV=5e3,MV=10*1024,VV=100*1024,Sm="t",kT="d",FV="s",NT="r",UV="e",xT="o",bT="a",OT="n",DT="p",jV="h";class BV{constructor(e,t,r,i,a,l,h,f,p,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=a,this.onMessage_=l,this.onReady_=h,this.onDisconnect_=f,this.onKill_=p,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=lc("c:"+this.id+":"),this.transportManager_=new Fu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Iu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>MV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sm in e){const t=e[Sm];t===bT?this.upgradeIfSecondaryHealthy_():t===NT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===xT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=iu("t",e),r=iu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:DT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:OT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=iu("t",e),r=iu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=iu(Sm,e);if(kT in e){const r=e[kT];if(t===jV){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===OT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===FV?this.onConnectionShutdown_(r):t===NT?this.onReset_(r):t===UV?cg("Server Error: "+r):t===xT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),D_!==r&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Iu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Iu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:DT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class iR{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class sR{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let a=0;a<i.length;a++)if(i[a].callback===t&&(!r||r===i[a].context)){i.splice(a,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Rd extends sR{static getInstance(){return new Rd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const LT=32,MT=768;class Ye{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function qe(){return new Ye("")}function Oe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ys(n){return n.pieces_.length-n.pieceNum_}function tt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ye(n.pieces_,e)}function oR(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function zV(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function aR(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function lR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ye(e,0)}function kt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new Ye(t,0)}function De(n){return n.pieceNum_>=n.pieces_.length}function In(n,e){const t=Oe(n),r=Oe(e);if(t===null)return e;if(t===r)return In(tt(n),tt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function V_(n,e){if(ys(n)!==ys(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function yr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(ys(n)>ys(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class $V{constructor(e,t){this.errorPrefix_=t,this.parts_=aR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=$d(this.parts_[r]);uR(this)}}function WV(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=$d(e),uR(n)}function HV(n){const e=n.parts_.pop();n.byteLength_-=$d(e),n.parts_.length>0&&(n.byteLength_-=1)}function uR(n){if(n.byteLength_>MT)throw new Error(n.errorPrefix_+"has a key path longer than "+MT+" bytes ("+n.byteLength_+").");if(n.parts_.length>LT)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+LT+") or object contains a cycle "+ro(n))}function ro(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class F_ extends sR{static getInstance(){return new F_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const su=1e3,qV=60*5*1e3,VT=30*1e3,GV=1.3,KV=3e4,QV="server_kill",FT=3;class yi extends iR{constructor(e,t,r,i,a,l,h,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=a,this.authTokenProvider_=l,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=yi.nextPersistentConnectionId_++,this.log_=lc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=su,this.maxReconnectDelay_=qV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");F_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,a={r:i,a:e,b:t};this.log_(jt(a)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new zd,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const h=l.d;l.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,i){this.initConnection_();const a=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+a),this.listens.has(l)||this.listens.set(l,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(l).has(a),"listen() called twice for same path/queryId.");const h={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(l).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const a={p:r},l="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(l,a,h=>{const f=h.d,p=h.s;yi.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",h),p!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(p,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&qr(e,"w")){const r=Ma(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=VT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ck(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const a=i.s,l=i.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const a={p:e},l="n";i&&(a.q=r,a.t=i),this.sendRequest(l,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,l=>{i&&setTimeout(()=>{i(l.s,l.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,a){this.initConnection_();const l={p:t,d:r};a!==void 0&&(l.h=a),this.outstandingPuts_.push({action:e,request:l,onComplete:i}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+jt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):cg("Unrecognized action received from server: "+jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KV&&(this.reconnectDelay_=su),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yi.nextConnectionId_++,a=this.lastSessionId;let l=!1,h=null;const f=function(){h?h.close():(l=!0,r())},p=function(v){ne(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(v)};this.realtime_={close:f,sendRequest:p};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,T]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);l?rn("getToken() completed but was canceled"):(rn("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=T&&T.token,h=new BV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,R=>{An(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(QV)},a))}catch(v){this.log_("Failed to get token: "+v),l||(this.repoInfo_.nodeAdmin&&An(v),f())}}}interrupt(e){rn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lm(this.interruptReasons_)&&(this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>O_(a)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new Ye(e).toString();let i;if(this.listens.has(r)){const a=this.listens.get(r);i=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){rn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=FT&&(this.reconnectDelay_=VT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=FT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+VC.replace(/\./g,"-")]=1,Lg()?e["framework.cordova"]=1:UI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rd.getInstance().currentlyOnline();return Lm(this.interruptReasons_)&&e}}yi.nextPersistentConnectionId_=0;yi.nextConnectionId_=0;/**
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
 */class Le{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Le(e,t)}}/**
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
 */class ff{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Le(vo,e),i=new Le(vo,t);return this.compare(r,i)!==0}minPost(){return Le.MIN}}/**
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
 */let Uh;class cR extends ff{static get __EMPTY_NODE(){return Uh}static set __EMPTY_NODE(e){Uh=e}compare(e,t){return nl(e.name,t.name)}isDefinedOn(e){throw Ga("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Le.MIN}maxPost(){return new Le(_s,Uh)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Le(e,Uh)}toString(){return".key"}}const uo=new cR;/**
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
 */class jh{constructor(e,t,r,i,a=null){this.isReverse_=i,this.resultGenerator_=a,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=t?r(e.key,t):1,i&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ut{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??Ut.RED,this.left=i??Sn.EMPTY_NODE,this.right=a??Sn.EMPTY_NODE}copy(e,t,r,i,a){return new Ut(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return a<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Sn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Sn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ut.RED=!0;Ut.BLACK=!1;class YV{copy(e,t,r,i,a){return this}insert(e,t,r){return new Ut(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Sn{constructor(e,t=Sn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Sn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ut.BLACK,null,null))}remove(e){return new Sn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ut.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new jh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new jh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new jh(this.root_,null,this.comparator_,!0,e)}}Sn.EMPTY_NODE=new YV;/**
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
 */function JV(n,e){return nl(n.name,e.name)}function U_(n,e){return nl(n,e)}/**
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
 */let dg;function XV(n){dg=n}const hR=function(n){return typeof n=="number"?"number:"+BC(n):"string:"+n},dR=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qr(e,".sv"),"Priority must be a string or number.")}else ne(n===dg||n.isEmpty(),"priority of unexpected type.");ne(n===dg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let UT;class Vt{static set __childrenNodeConstructor(e){UT=e}static get __childrenNodeConstructor(){return UT}constructor(e,t=Vt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Vt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Oe(e)===".priority"?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Vt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Oe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||ys(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Vt.__childrenNodeConstructor.EMPTY_NODE.updateChild(tt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hR(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=BC(this.value_):e+=this.value_,this.lazyHash_=UC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Vt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Vt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Vt.VALUE_TYPE_ORDER.indexOf(t),a=Vt.VALUE_TYPE_ORDER.indexOf(r);return ne(i>=0,"Unknown leaf type: "+t),ne(a>=0,"Unknown leaf type: "+r),i===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Vt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let fR,pR;function ZV(n){fR=n}function e2(n){pR=n}class t2 extends ff{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),a=r.compareTo(i);return a===0?nl(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Le.MIN}maxPost(){return new Le(_s,new Vt("[PRIORITY-POST]",pR))}makePost(e,t){const r=fR(e);return new Le(t,new Vt("[PRIORITY-POST]",r))}toString(){return".priority"}}const ht=new t2;/**
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
 */const n2=Math.log(2);class r2{constructor(e){const t=a=>parseInt(Math.log(a)/n2,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ad=function(n,e,t,r){n.sort(e);const i=function(f,p){const y=p-f;let v,T;if(y===0)return null;if(y===1)return v=n[f],T=t?t(v):v,new Ut(T,v.node,Ut.BLACK,null,null);{const R=parseInt(y/2,10)+f,k=i(f,R),L=i(R+1,p);return v=n[R],T=t?t(v):v,new Ut(T,v.node,Ut.BLACK,k,L)}},a=function(f){let p=null,y=null,v=n.length;const T=function(k,L){const N=v-k,K=v;v-=k;const te=i(N+1,K),Z=n[N],oe=t?t(Z):Z;R(new Ut(oe,Z.node,L,null,te))},R=function(k){p?(p.left=k,p=k):(y=k,p=k)};for(let k=0;k<f.count;++k){const L=f.nextBitIsOne(),N=Math.pow(2,f.count-(k+1));L?T(N,Ut.BLACK):(T(N,Ut.BLACK),T(N,Ut.RED))}return y},l=new r2(n.length),h=a(l);return new Sn(r||e,h)};/**
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
 */let Cm;const Ta={};class mi{static get Default(){return ne(Ta&&ht,"ChildrenNode.ts has not been loaded"),Cm=Cm||new mi({".priority":Ta},{".priority":ht}),Cm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ma(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Sn?t:null}hasIndex(e){return qr(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==uo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const a=t.getIterator(Le.Wrap);let l=a.getNext();for(;l;)i=i||e.isDefinedOn(l.node),r.push(l),l=a.getNext();let h;i?h=Ad(r,e.getCompare()):h=Ta;const f=e.toString(),p=Object.assign({},this.indexSet_);p[f]=e;const y=Object.assign({},this.indexes_);return y[f]=h,new mi(y,p)}addToIndexes(e,t){const r=rd(this.indexes_,(i,a)=>{const l=Ma(this.indexSet_,a);if(ne(l,"Missing index implementation for "+a),i===Ta)if(l.isDefinedOn(e.node)){const h=[],f=t.getIterator(Le.Wrap);let p=f.getNext();for(;p;)p.name!==e.name&&h.push(p),p=f.getNext();return h.push(e),Ad(h,l.getCompare())}else return Ta;else{const h=t.get(e.name);let f=i;return h&&(f=f.remove(new Le(e.name,h))),f.insert(e,e.node)}});return new mi(r,this.indexSet_)}removeFromIndexes(e,t){const r=rd(this.indexes_,i=>{if(i===Ta)return i;{const a=t.get(e.name);return a?i.remove(new Le(e.name,a)):i}});return new mi(r,this.indexSet_)}}/**
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
 */let ou;class Ie{static get EMPTY_NODE(){return ou||(ou=new Ie(new Sn(U_),null,mi.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&dR(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ou}updatePriority(e){return this.children_.isEmpty()?this:new Ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ou:t}}getChild(e){const t=Oe(e);return t===null?this:this.getImmediateChild(t).getChild(tt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Le(e,t);let i,a;t.isEmpty()?(i=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const l=i.isEmpty()?ou:this.priorityNode_;return new Ie(i,l,a)}}updateChild(e,t){const r=Oe(e);if(r===null)return t;{ne(Oe(e)!==".priority"||ys(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(tt(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,a=!0;if(this.forEachChild(ht,(l,h)=>{t[l]=h.val(e),r++,a&&Ie.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):a=!1}),!e&&a&&i<2*r){const l=[];for(const h in t)l[h]=t[h];return l}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hR(this.getPriority().val())+":"),this.forEachChild(ht,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":UC(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const a=i.getPredecessorKey(new Le(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Le(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Le(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Le.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)<0;)i.getNext(),a=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Le.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)>0;)i.getNext(),a=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===uc?-1:0}withIndex(e){if(e===uo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===uo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ht),i=t.getIterator(ht);let a=r.getNext(),l=i.getNext();for(;a&&l;){if(a.name!==l.name||!a.node.equals(l.node))return!1;a=r.getNext(),l=i.getNext()}return a===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===uo?null:this.indexMap_.get(e.toString())}}Ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class i2 extends Ie{constructor(){super(new Sn(U_),Ie.EMPTY_NODE,mi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ie.EMPTY_NODE}isEmpty(){return!1}}const uc=new i2;Object.defineProperties(Le,{MIN:{value:new Le(vo,Ie.EMPTY_NODE)},MAX:{value:new Le(_s,uc)}});cR.__EMPTY_NODE=Ie.EMPTY_NODE;Vt.__childrenNodeConstructor=Ie;XV(uc);e2(uc);/**
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
 */const s2=!0;function Ht(n,e=null){if(n===null)return Ie.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Vt(t,Ht(e))}if(!(n instanceof Array)&&s2){const t=[];let r=!1;if(kn(n,(l,h)=>{if(l.substring(0,1)!=="."){const f=Ht(h);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Le(l,f)))}}),t.length===0)return Ie.EMPTY_NODE;const a=Ad(t,JV,l=>l.name,U_);if(r){const l=Ad(t,ht.getCompare());return new Ie(a,Ht(e),new mi({".priority":l},{".priority":ht}))}else return new Ie(a,Ht(e),mi.Default)}else{let t=Ie.EMPTY_NODE;return kn(n,(r,i)=>{if(qr(n,r)&&r.substring(0,1)!=="."){const a=Ht(i);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Ht(e))}}ZV(Ht);/**
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
 */class j_ extends ff{constructor(e){super(),this.indexPath_=e,ne(!De(e)&&Oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),a=r.compareTo(i);return a===0?nl(e.name,t.name):a}makePost(e,t){const r=Ht(e),i=Ie.EMPTY_NODE.updateChild(this.indexPath_,r);return new Le(t,i)}maxPost(){const e=Ie.EMPTY_NODE.updateChild(this.indexPath_,uc);return new Le(_s,e)}toString(){return aR(this.indexPath_,0).join("/")}}/**
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
 */class o2 extends ff{compare(e,t){const r=e.node.compareTo(t.node);return r===0?nl(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Le.MIN}maxPost(){return Le.MAX}makePost(e,t){const r=Ht(e);return new Le(t,r)}toString(){return".value"}}const mR=new o2;/**
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
 */function gR(n){return{type:"value",snapshotNode:n}}function Ha(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Uu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ju(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function a2(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class B_{constructor(e){this.index_=e}updateChild(e,t,r,i,a,l){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(i).equals(r.getChild(i))&&h.isEmpty()===r.isEmpty()||(l!=null&&(r.isEmpty()?e.hasChild(t)?l.trackChildChange(Uu(t,h)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?l.trackChildChange(Ha(t,r)):l.trackChildChange(ju(t,r,h))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ht,(i,a)=>{t.hasChild(i)||r.trackChildChange(Uu(i,a))}),t.isLeafNode()||t.forEachChild(ht,(i,a)=>{if(e.hasChild(i)){const l=e.getImmediateChild(i);l.equals(a)||r.trackChildChange(ju(i,a,l))}else r.trackChildChange(Ha(i,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Bu{constructor(e){this.indexedFilter_=new B_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bu.getStartPost_(e),this.endPost_=Bu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,a,l){return this.matches(new Le(t,r))||(r=Ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,a,l)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Ie.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Ie.EMPTY_NODE);const a=this;return t.forEachChild(ht,(l,h)=>{a.matches(new Le(l,h))||(i=i.updateImmediateChild(l,Ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class l2{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Bu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,a,l){return this.rangedFilter_.matches(new Le(t,r))||(r=Ie.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,a,l):this.fullLimitUpdateChild_(e,t,r,a,l)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=Ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Ie.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let l=0;for(;a.hasNext()&&l<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))i=i.updateImmediateChild(h.name,h.node),l++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Ie.EMPTY_NODE);let a;this.reverse_?a=i.getReverseIterator(this.index_):a=i.getIterator(this.index_);let l=0;for(;a.hasNext();){const h=a.getNext();l<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?l++:i=i.updateImmediateChild(h.name,Ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,a){let l;if(this.reverse_){const v=this.index_.getCompare();l=(T,R)=>v(R,T)}else l=this.index_.getCompare();const h=e;ne(h.numChildren()===this.limit_,"");const f=new Le(t,r),p=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(h.hasChild(t)){const v=h.getImmediateChild(t);let T=i.getChildAfterChild(this.index_,p,this.reverse_);for(;T!=null&&(T.name===t||h.hasChild(T.name));)T=i.getChildAfterChild(this.index_,T,this.reverse_);const R=T==null?1:l(T,f);if(y&&!r.isEmpty()&&R>=0)return a!=null&&a.trackChildChange(ju(t,r,v)),h.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Uu(t,v));const L=h.updateImmediateChild(t,Ie.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(Ha(T.name,T.node)),L.updateImmediateChild(T.name,T.node)):L}}else return r.isEmpty()?e:y&&l(p,f)>=0?(a!=null&&(a.trackChildChange(Uu(p.name,p.node)),a.trackChildChange(Ha(t,r))),h.updateImmediateChild(t,r).updateImmediateChild(p.name,Ie.EMPTY_NODE)):e}}/**
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
 */class z_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vo}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_s}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new z_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function u2(n){return n.loadsAllData()?new B_(n.getIndex()):n.hasLimit()?new l2(n):new Bu(n)}function c2(n,e){const t=n.copy();return t.index_=e,t}function jT(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ht?t="$priority":n.index_===mR?t="$value":n.index_===uo?t="$key":(ne(n.index_ instanceof j_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=jt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=jt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+jt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=jt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+jt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function BT(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ht&&(e.i=n.index_.toString()),e}/**
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
 */class Pd extends iR{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=lc("p:rest:"),this.listens_={}}listen(e,t,r,i){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const l=Pd.getListenId_(e,r),h={};this.listens_[l]=h;const f=jT(e._queryParams);this.restRequest_(a+".json",f,(p,y)=>{let v=y;if(p===404&&(v=null,p=null),p===null&&this.onDataUpdate_(a,v,!1,r),Ma(this.listens_,l)===h){let T;p?p===401?T="permission_denied":T="rest_error:"+p:T="ok",i(T,null)}})}unlisten(e,t){const r=Pd.getListenId_(e,t);delete this.listens_[r]}get(e){const t=jT(e._queryParams),r=e._path.toString(),i=new zd;return this.restRequest_(r+".json",t,(a,l)=>{let h=l;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(r,h,!1,null),i.resolve(h)):i.reject(new Error(h))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,a])=>{i&&i.accessToken&&(t.auth=i.accessToken),a&&a.token&&(t.ac=a.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ka(t);this.log_("Sending REST request for "+l);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(r&&h.readyState===4){this.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=Au(h.responseText)}catch{An("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,f)}else h.status!==401&&h.status!==404&&An("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()})}}/**
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
 */class h2{constructor(){this.rootNode_=Ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function kd(){return{value:null,children:new Map}}function _R(n,e,t){if(De(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Oe(e);n.children.has(r)||n.children.set(r,kd());const i=n.children.get(r);e=tt(e),_R(i,e,t)}}function fg(n,e,t){n.value!==null?t(e,n.value):d2(n,(r,i)=>{const a=new Ye(e.toString()+"/"+r);fg(i,a,t)})}function d2(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class f2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&kn(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const zT=10*1e3,p2=30*1e3,m2=5*60*1e3;class g2{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new f2(e);const r=zT+(p2-zT)*Math.random();Iu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;kn(e,(i,a)=>{a>0&&qr(this.statsToReport_,i)&&(t[i]=a,r=!0)}),r&&this.server_.reportStats(t),Iu(this.reportStats_.bind(this),Math.floor(Math.random()*2*m2))}}/**
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
 */var vr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vr||(vr={}));function yR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function W_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Nd{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=vr.ACK_USER_WRITE,this.source=yR()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ye(e));return new Nd(qe(),t,this.revert)}}else return ne(Oe(this.path)===e,"operationForChild called for unrelated child."),new Nd(tt(this.path),this.affectedTree,this.revert)}}/**
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
 */class zu{constructor(e,t){this.source=e,this.path=t,this.type=vr.LISTEN_COMPLETE}operationForChild(e){return De(this.path)?new zu(this.source,qe()):new zu(this.source,tt(this.path))}}/**
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
 */class Eo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=vr.OVERWRITE}operationForChild(e){return De(this.path)?new Eo(this.source,qe(),this.snap.getImmediateChild(e)):new Eo(this.source,tt(this.path),this.snap)}}/**
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
 */class $u{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=vr.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new Ye(e));return t.isEmpty()?null:t.value?new Eo(this.source,qe(),t.value):new $u(this.source,qe(),t)}else return ne(Oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $u(this.source,tt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class wo{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Oe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function y2(n,e,t,r){const i=[],a=[];return e.forEach(l=>{l.type==="child_changed"&&n.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&a.push(a2(l.childName,l.snapshotNode))}),au(n,i,"child_removed",e,r,t),au(n,i,"child_added",e,r,t),au(n,i,"child_moved",a,r,t),au(n,i,"child_changed",e,r,t),au(n,i,"value",e,r,t),i}function au(n,e,t,r,i,a){const l=r.filter(h=>h.type===t);l.sort((h,f)=>E2(n,h,f)),l.forEach(h=>{const f=v2(n,h,a);i.forEach(p=>{p.respondsTo(h.type)&&e.push(p.createEvent(f,n.query_))})})}function v2(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function E2(n,e,t){if(e.childName==null||t.childName==null)throw Ga("Should only compare child_ events.");const r=new Le(e.childName,e.snapshotNode),i=new Le(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function pf(n,e){return{eventCache:n,serverCache:e}}function Su(n,e,t,r){return pf(new wo(e,t,r),n.serverCache)}function vR(n,e,t,r){return pf(n.eventCache,new wo(e,t,r))}function pg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function To(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Rm;const w2=()=>(Rm||(Rm=new Sn(aV)),Rm);class it{static fromObject(e){let t=new it(null);return kn(e,(r,i)=>{t=t.set(new Ye(r),i)}),t}constructor(e,t=w2()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:qe(),value:this.value};if(De(e))return null;{const r=Oe(e),i=this.children.get(r);if(i!==null){const a=i.findRootMostMatchingPathAndValue(tt(e),t);return a!=null?{path:kt(new Ye(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Oe(e),r=this.children.get(t);return r!==null?r.subtree(tt(e)):new it(null)}}set(e,t){if(De(e))return new it(t,this.children);{const r=Oe(e),a=(this.children.get(r)||new it(null)).set(tt(e),t),l=this.children.insert(r,a);return new it(this.value,l)}}remove(e){if(De(e))return this.children.isEmpty()?new it(null):new it(null,this.children);{const t=Oe(e),r=this.children.get(t);if(r){const i=r.remove(tt(e));let a;return i.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,i),this.value===null&&a.isEmpty()?new it(null):new it(this.value,a)}else return this}}get(e){if(De(e))return this.value;{const t=Oe(e),r=this.children.get(t);return r?r.get(tt(e)):null}}setTree(e,t){if(De(e))return t;{const r=Oe(e),a=(this.children.get(r)||new it(null)).setTree(tt(e),t);let l;return a.isEmpty()?l=this.children.remove(r):l=this.children.insert(r,a),new it(this.value,l)}}fold(e){return this.fold_(qe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,a)=>{r[i]=a.fold_(kt(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,qe(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(De(e))return null;{const a=Oe(e),l=this.children.get(a);return l?l.findOnPath_(tt(e),kt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,qe(),t)}foreachOnPath_(e,t,r){if(De(e))return this;{this.value&&r(t,this.value);const i=Oe(e),a=this.children.get(i);return a?a.foreachOnPath_(tt(e),kt(t,i),r):new it(null)}}foreach(e){this.foreach_(qe(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(kt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class wr{constructor(e){this.writeTree_=e}static empty(){return new wr(new it(null))}}function Cu(n,e,t){if(De(e))return new wr(new it(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let a=r.value;const l=In(i,e);return a=a.updateChild(l,t),new wr(n.writeTree_.set(i,a))}else{const i=new it(t),a=n.writeTree_.setTree(e,i);return new wr(a)}}}function $T(n,e,t){let r=n;return kn(t,(i,a)=>{r=Cu(r,kt(e,i),a)}),r}function WT(n,e){if(De(e))return wr.empty();{const t=n.writeTree_.setTree(e,new it(null));return new wr(t)}}function mg(n,e){return ko(n,e)!=null}function ko(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(In(t.path,e)):null}function HT(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ht,(r,i)=>{e.push(new Le(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Le(r,i.value))}),e}function us(n,e){if(De(e))return n;{const t=ko(n,e);return t!=null?new wr(new it(t)):new wr(n.writeTree_.subtree(e))}}function gg(n){return n.writeTree_.isEmpty()}function qa(n,e){return ER(qe(),n.writeTree_,e)}function ER(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,a)=>{i===".priority"?(ne(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=ER(kt(n,i),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(kt(n,".priority"),r)),t}}/**
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
 */function H_(n,e){return SR(e,n)}function T2(n,e,t,r,i){ne(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=Cu(n.visibleWrites,e,t)),n.lastWriteId=r}function I2(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function S2(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,a=!1,l=n.allWrites.length-1;for(;i&&l>=0;){const h=n.allWrites[l];h.visible&&(l>=t&&C2(h,r.path)?i=!1:yr(r.path,h.path)&&(a=!0)),l--}if(i){if(a)return R2(n),!0;if(r.snap)n.visibleWrites=WT(n.visibleWrites,r.path);else{const h=r.children;kn(h,f=>{n.visibleWrites=WT(n.visibleWrites,kt(r.path,f))})}return!0}else return!1}function C2(n,e){if(n.snap)return yr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&yr(kt(n.path,t),e))return!0;return!1}function R2(n){n.visibleWrites=wR(n.allWrites,A2,qe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function A2(n){return n.visible}function wR(n,e,t){let r=wr.empty();for(let i=0;i<n.length;++i){const a=n[i];if(e(a)){const l=a.path;let h;if(a.snap)yr(t,l)?(h=In(t,l),r=Cu(r,h,a.snap)):yr(l,t)&&(h=In(l,t),r=Cu(r,qe(),a.snap.getChild(h)));else if(a.children){if(yr(t,l))h=In(t,l),r=$T(r,h,a.children);else if(yr(l,t))if(h=In(l,t),De(h))r=$T(r,qe(),a.children);else{const f=Ma(a.children,Oe(h));if(f){const p=f.getChild(tt(h));r=Cu(r,qe(),p)}}}else throw Ga("WriteRecord should have .snap or .children")}}return r}function TR(n,e,t,r,i){if(!r&&!i){const a=ko(n.visibleWrites,e);if(a!=null)return a;{const l=us(n.visibleWrites,e);if(gg(l))return t;if(t==null&&!mg(l,qe()))return null;{const h=t||Ie.EMPTY_NODE;return qa(l,h)}}}else{const a=us(n.visibleWrites,e);if(!i&&gg(a))return t;if(!i&&t==null&&!mg(a,qe()))return null;{const l=function(p){return(p.visible||i)&&(!r||!~r.indexOf(p.writeId))&&(yr(p.path,e)||yr(e,p.path))},h=wR(n.allWrites,l,e),f=t||Ie.EMPTY_NODE;return qa(h,f)}}}function P2(n,e,t){let r=Ie.EMPTY_NODE;const i=ko(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ht,(a,l)=>{r=r.updateImmediateChild(a,l)}),r;if(t){const a=us(n.visibleWrites,e);return t.forEachChild(ht,(l,h)=>{const f=qa(us(a,new Ye(l)),h);r=r.updateImmediateChild(l,f)}),HT(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}else{const a=us(n.visibleWrites,e);return HT(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}}function k2(n,e,t,r,i){ne(r||i,"Either existingEventSnap or existingServerSnap must exist");const a=kt(e,t);if(mg(n.visibleWrites,a))return null;{const l=us(n.visibleWrites,a);return gg(l)?i.getChild(t):qa(l,i.getChild(t))}}function N2(n,e,t,r){const i=kt(e,t),a=ko(n.visibleWrites,i);if(a!=null)return a;if(r.isCompleteForChild(t)){const l=us(n.visibleWrites,i);return qa(l,r.getNode().getImmediateChild(t))}else return null}function x2(n,e){return ko(n.visibleWrites,e)}function b2(n,e,t,r,i,a,l){let h;const f=us(n.visibleWrites,e),p=ko(f,qe());if(p!=null)h=p;else if(t!=null)h=qa(f,t);else return[];if(h=h.withIndex(l),!h.isEmpty()&&!h.isLeafNode()){const y=[],v=l.getCompare(),T=a?h.getReverseIteratorFrom(r,l):h.getIteratorFrom(r,l);let R=T.getNext();for(;R&&y.length<i;)v(R,r)!==0&&y.push(R),R=T.getNext();return y}else return[]}function O2(){return{visibleWrites:wr.empty(),allWrites:[],lastWriteId:-1}}function xd(n,e,t,r){return TR(n.writeTree,n.treePath,e,t,r)}function q_(n,e){return P2(n.writeTree,n.treePath,e)}function qT(n,e,t,r){return k2(n.writeTree,n.treePath,e,t,r)}function bd(n,e){return x2(n.writeTree,kt(n.treePath,e))}function D2(n,e,t,r,i,a){return b2(n.writeTree,n.treePath,e,t,r,i,a)}function G_(n,e,t){return N2(n.writeTree,n.treePath,e,t)}function IR(n,e){return SR(kt(n.treePath,e),n.writeTree)}function SR(n,e){return{treePath:n,writeTree:e}}/**
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
 */class L2{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const a=i.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,ju(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Uu(r,i.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Ha(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,ju(r,e.snapshotNode,i.oldSnap));else throw Ga("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class M2{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const CR=new M2;class K_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new wo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return G_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:To(this.viewCache_),a=D2(this.writes_,i,t,1,r,e);return a.length===0?null:a[0]}}/**
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
 */function V2(n){return{filter:n}}function F2(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function U2(n,e,t,r,i){const a=new L2;let l,h;if(t.type===vr.OVERWRITE){const p=t;p.source.fromUser?l=_g(n,e,p.path,p.snap,r,i,a):(ne(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered()&&!De(p.path),l=Od(n,e,p.path,p.snap,r,i,h,a))}else if(t.type===vr.MERGE){const p=t;p.source.fromUser?l=B2(n,e,p.path,p.children,r,i,a):(ne(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered(),l=yg(n,e,p.path,p.children,r,i,h,a))}else if(t.type===vr.ACK_USER_WRITE){const p=t;p.revert?l=W2(n,e,p.path,r,i,a):l=z2(n,e,p.path,p.affectedTree,r,i,a)}else if(t.type===vr.LISTEN_COMPLETE)l=$2(n,e,t.path,r,a);else throw Ga("Unknown operation type: "+t.type);const f=a.getChanges();return j2(e,l,f),{viewCache:l,changes:f}}function j2(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=pg(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(gR(pg(e)))}}function RR(n,e,t,r,i,a){const l=e.eventCache;if(bd(r,t)!=null)return e;{let h,f;if(De(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=To(e),y=p instanceof Ie?p:Ie.EMPTY_NODE,v=q_(r,y);h=n.filter.updateFullNode(e.eventCache.getNode(),v,a)}else{const p=xd(r,To(e));h=n.filter.updateFullNode(e.eventCache.getNode(),p,a)}else{const p=Oe(t);if(p===".priority"){ne(ys(t)===1,"Can't have a priority with additional path components");const y=l.getNode();f=e.serverCache.getNode();const v=qT(r,t,y,f);v!=null?h=n.filter.updatePriority(y,v):h=l.getNode()}else{const y=tt(t);let v;if(l.isCompleteForChild(p)){f=e.serverCache.getNode();const T=qT(r,t,l.getNode(),f);T!=null?v=l.getNode().getImmediateChild(p).updateChild(y,T):v=l.getNode().getImmediateChild(p)}else v=G_(r,p,e.serverCache);v!=null?h=n.filter.updateChild(l.getNode(),p,v,y,i,a):h=l.getNode()}}return Su(e,h,l.isFullyInitialized()||De(t),n.filter.filtersNodes())}}function Od(n,e,t,r,i,a,l,h){const f=e.serverCache;let p;const y=l?n.filter:n.filter.getIndexedFilter();if(De(t))p=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const R=f.getNode().updateChild(t,r);p=y.updateFullNode(f.getNode(),R,null)}else{const R=Oe(t);if(!f.isCompleteForPath(t)&&ys(t)>1)return e;const k=tt(t),N=f.getNode().getImmediateChild(R).updateChild(k,r);R===".priority"?p=y.updatePriority(f.getNode(),N):p=y.updateChild(f.getNode(),R,N,k,CR,null)}const v=vR(e,p,f.isFullyInitialized()||De(t),y.filtersNodes()),T=new K_(i,v,a);return RR(n,v,t,i,T,h)}function _g(n,e,t,r,i,a,l){const h=e.eventCache;let f,p;const y=new K_(i,e,a);if(De(t))p=n.filter.updateFullNode(e.eventCache.getNode(),r,l),f=Su(e,p,!0,n.filter.filtersNodes());else{const v=Oe(t);if(v===".priority")p=n.filter.updatePriority(e.eventCache.getNode(),r),f=Su(e,p,h.isFullyInitialized(),h.isFiltered());else{const T=tt(t),R=h.getNode().getImmediateChild(v);let k;if(De(T))k=r;else{const L=y.getCompleteChild(v);L!=null?oR(T)===".priority"&&L.getChild(lR(T)).isEmpty()?k=L:k=L.updateChild(T,r):k=Ie.EMPTY_NODE}if(R.equals(k))f=e;else{const L=n.filter.updateChild(h.getNode(),v,k,T,y,l);f=Su(e,L,h.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function GT(n,e){return n.eventCache.isCompleteForChild(e)}function B2(n,e,t,r,i,a,l){let h=e;return r.foreach((f,p)=>{const y=kt(t,f);GT(e,Oe(y))&&(h=_g(n,h,y,p,i,a,l))}),r.foreach((f,p)=>{const y=kt(t,f);GT(e,Oe(y))||(h=_g(n,h,y,p,i,a,l))}),h}function KT(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function yg(n,e,t,r,i,a,l,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,p;De(t)?p=r:p=new it(null).setTree(t,r);const y=e.serverCache.getNode();return p.children.inorderTraversal((v,T)=>{if(y.hasChild(v)){const R=e.serverCache.getNode().getImmediateChild(v),k=KT(n,R,T);f=Od(n,f,new Ye(v),k,i,a,l,h)}}),p.children.inorderTraversal((v,T)=>{const R=!e.serverCache.isCompleteForChild(v)&&T.value===null;if(!y.hasChild(v)&&!R){const k=e.serverCache.getNode().getImmediateChild(v),L=KT(n,k,T);f=Od(n,f,new Ye(v),L,i,a,l,h)}}),f}function z2(n,e,t,r,i,a,l){if(bd(i,t)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(De(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Od(n,e,t,f.getNode().getChild(t),i,a,h,l);if(De(t)){let p=new it(null);return f.getNode().forEachChild(uo,(y,v)=>{p=p.set(new Ye(y),v)}),yg(n,e,t,p,i,a,h,l)}else return e}else{let p=new it(null);return r.foreach((y,v)=>{const T=kt(t,y);f.isCompleteForPath(T)&&(p=p.set(y,f.getNode().getChild(T)))}),yg(n,e,t,p,i,a,h,l)}}function $2(n,e,t,r,i){const a=e.serverCache,l=vR(e,a.getNode(),a.isFullyInitialized()||De(t),a.isFiltered());return RR(n,l,t,r,CR,i)}function W2(n,e,t,r,i,a){let l;if(bd(r,t)!=null)return e;{const h=new K_(r,e,i),f=e.eventCache.getNode();let p;if(De(t)||Oe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=xd(r,To(e));else{const v=e.serverCache.getNode();ne(v instanceof Ie,"serverChildren would be complete if leaf node"),y=q_(r,v)}y=y,p=n.filter.updateFullNode(f,y,a)}else{const y=Oe(t);let v=G_(r,y,e.serverCache);v==null&&e.serverCache.isCompleteForChild(y)&&(v=f.getImmediateChild(y)),v!=null?p=n.filter.updateChild(f,y,v,tt(t),h,a):e.eventCache.getNode().hasChild(y)?p=n.filter.updateChild(f,y,Ie.EMPTY_NODE,tt(t),h,a):p=f,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=xd(r,To(e)),l.isLeafNode()&&(p=n.filter.updateFullNode(p,l,a)))}return l=e.serverCache.isFullyInitialized()||bd(r,qe())!=null,Su(e,p,l,n.filter.filtersNodes())}}/**
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
 */class H2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new B_(r.getIndex()),a=u2(r);this.processor_=V2(a);const l=t.serverCache,h=t.eventCache,f=i.updateFullNode(Ie.EMPTY_NODE,l.getNode(),null),p=a.updateFullNode(Ie.EMPTY_NODE,h.getNode(),null),y=new wo(f,l.isFullyInitialized(),i.filtersNodes()),v=new wo(p,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=pf(v,y),this.eventGenerator_=new _2(this.query_)}get query(){return this.query_}}function q2(n){return n.viewCache_.serverCache.getNode()}function G2(n,e){const t=To(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Oe(e)).isEmpty())?t.getChild(e):null}function QT(n){return n.eventRegistrations_.length===0}function K2(n,e){n.eventRegistrations_.push(e)}function YT(n,e,t){const r=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(a=>{const l=a.createCancelEvent(t,i);l&&r.push(l)})}if(e){let i=[];for(let a=0;a<n.eventRegistrations_.length;++a){const l=n.eventRegistrations_[a];if(!l.matches(e))i.push(l);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function JT(n,e,t,r){e.type===vr.MERGE&&e.source.queryId!==null&&(ne(To(n.viewCache_),"We should always have a full cache before handling merges"),ne(pg(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,a=U2(n.processor_,i,e,t,r);return F2(n.processor_,a.viewCache),ne(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,AR(n,a.changes,a.viewCache.eventCache.getNode(),null)}function Q2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ht,(a,l)=>{r.push(Ha(a,l))}),t.isFullyInitialized()&&r.push(gR(t.getNode())),AR(n,r,t.getNode(),e)}function AR(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return y2(n.eventGenerator_,e,t,i)}/**
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
 */let Dd;class Y2{constructor(){this.views=new Map}}function J2(n){ne(!Dd,"__referenceConstructor has already been defined"),Dd=n}function X2(){return ne(Dd,"Reference.ts has not been loaded"),Dd}function Z2(n){return n.views.size===0}function Q_(n,e,t,r){const i=e.source.queryId;if(i!==null){const a=n.views.get(i);return ne(a!=null,"SyncTree gave us an op for an invalid query."),JT(a,e,t,r)}else{let a=[];for(const l of n.views.values())a=a.concat(JT(l,e,t,r));return a}}function eF(n,e,t,r,i){const a=e._queryIdentifier,l=n.views.get(a);if(!l){let h=xd(t,i?r:null),f=!1;h?f=!0:r instanceof Ie?(h=q_(t,r),f=!1):(h=Ie.EMPTY_NODE,f=!1);const p=pf(new wo(h,f,!1),new wo(r,i,!1));return new H2(e,p)}return l}function tF(n,e,t,r,i,a){const l=eF(n,e,r,i,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,l),K2(l,t),Q2(l,t)}function nF(n,e,t,r){const i=e._queryIdentifier,a=[];let l=[];const h=vs(n);if(i==="default")for(const[f,p]of n.views.entries())l=l.concat(YT(p,t,r)),QT(p)&&(n.views.delete(f),p.query._queryParams.loadsAllData()||a.push(p.query));else{const f=n.views.get(i);f&&(l=l.concat(YT(f,t,r)),QT(f)&&(n.views.delete(i),f.query._queryParams.loadsAllData()||a.push(f.query)))}return h&&!vs(n)&&a.push(new(X2())(e._repo,e._path)),{removed:a,events:l}}function PR(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function La(n,e){let t=null;for(const r of n.views.values())t=t||G2(r,e);return t}function kR(n,e){if(e._queryParams.loadsAllData())return mf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function NR(n,e){return kR(n,e)!=null}function vs(n){return mf(n)!=null}function mf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ld;function rF(n){ne(!Ld,"__referenceConstructor has already been defined"),Ld=n}function iF(){return ne(Ld,"Reference.ts has not been loaded"),Ld}let sF=1;class XT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new it(null),this.pendingWriteTree_=O2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xR(n,e,t,r,i){return T2(n.pendingWriteTree_,e,t,r,i),i?cc(n,new Eo(yR(),e,t)):[]}function ao(n,e,t=!1){const r=I2(n.pendingWriteTree_,e);if(S2(n.pendingWriteTree_,e)){let a=new it(null);return r.snap!=null?a=a.set(qe(),!0):kn(r.children,l=>{a=a.set(new Ye(l),!0)}),cc(n,new Nd(r.path,a,t))}else return[]}function gf(n,e,t){return cc(n,new Eo($_(),e,t))}function oF(n,e,t){const r=it.fromObject(t);return cc(n,new $u($_(),e,r))}function aF(n,e){return cc(n,new zu($_(),e))}function lF(n,e,t){const r=J_(n,t);if(r){const i=X_(r),a=i.path,l=i.queryId,h=In(a,e),f=new zu(W_(l),h);return Z_(n,a,f)}else return[]}function vg(n,e,t,r,i=!1){const a=e._path,l=n.syncPointTree_.get(a);let h=[];if(l&&(e._queryIdentifier==="default"||NR(l,e))){const f=nF(l,e,t,r);Z2(l)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const p=f.removed;if(h=f.events,!i){const y=p.findIndex(T=>T._queryParams.loadsAllData())!==-1,v=n.syncPointTree_.findOnPath(a,(T,R)=>vs(R));if(y&&!v){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const R=hF(T);for(let k=0;k<R.length;++k){const L=R[k],N=L.query,K=DR(n,L);n.listenProvider_.startListening(Ru(N),Md(n,N),K.hashFn,K.onComplete)}}}!v&&p.length>0&&!r&&(y?n.listenProvider_.stopListening(Ru(e),null):p.forEach(T=>{const R=n.queryToTagMap.get(_f(T));n.listenProvider_.stopListening(Ru(T),R)}))}dF(n,p)}return h}function uF(n,e,t,r){const i=J_(n,r);if(i!=null){const a=X_(i),l=a.path,h=a.queryId,f=In(l,e),p=new Eo(W_(h),f,t);return Z_(n,l,p)}else return[]}function cF(n,e,t,r){const i=J_(n,r);if(i){const a=X_(i),l=a.path,h=a.queryId,f=In(l,e),p=it.fromObject(t),y=new $u(W_(h),f,p);return Z_(n,l,y)}else return[]}function ZT(n,e,t,r=!1){const i=e._path;let a=null,l=!1;n.syncPointTree_.foreachOnPath(i,(T,R)=>{const k=In(T,i);a=a||La(R,k),l=l||vs(R)});let h=n.syncPointTree_.get(i);h?(l=l||vs(h),a=a||La(h,qe())):(h=new Y2,n.syncPointTree_=n.syncPointTree_.set(i,h));let f;a!=null?f=!0:(f=!1,a=Ie.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((R,k)=>{const L=La(k,qe());L&&(a=a.updateImmediateChild(R,L))}));const p=NR(h,e);if(!p&&!e._queryParams.loadsAllData()){const T=_f(e);ne(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const R=fF();n.queryToTagMap.set(T,R),n.tagToQueryMap.set(R,T)}const y=H_(n.pendingWriteTree_,i);let v=tF(h,e,t,y,a,f);if(!p&&!l&&!r){const T=kR(h,e);v=v.concat(pF(n,e,T))}return v}function Y_(n,e,t){const i=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(l,h)=>{const f=In(l,e),p=La(h,f);if(p)return p});return TR(i,e,a,t,!0)}function cc(n,e){return bR(e,n.syncPointTree_,null,H_(n.pendingWriteTree_,qe()))}function bR(n,e,t,r){if(De(n.path))return OR(n,e,t,r);{const i=e.get(qe());t==null&&i!=null&&(t=La(i,qe()));let a=[];const l=Oe(n.path),h=n.operationForChild(l),f=e.children.get(l);if(f&&h){const p=t?t.getImmediateChild(l):null,y=IR(r,l);a=a.concat(bR(h,f,p,y))}return i&&(a=a.concat(Q_(i,n,r,t))),a}}function OR(n,e,t,r){const i=e.get(qe());t==null&&i!=null&&(t=La(i,qe()));let a=[];return e.children.inorderTraversal((l,h)=>{const f=t?t.getImmediateChild(l):null,p=IR(r,l),y=n.operationForChild(l);y&&(a=a.concat(OR(y,h,f,p)))}),i&&(a=a.concat(Q_(i,n,r,t))),a}function DR(n,e){const t=e.query,r=Md(n,t);return{hashFn:()=>(q2(e)||Ie.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?lF(n,t._path,r):aF(n,t._path);{const a=cV(i,t);return vg(n,t,null,a)}}}}function Md(n,e){const t=_f(e);return n.queryToTagMap.get(t)}function _f(n){return n._path.toString()+"$"+n._queryIdentifier}function J_(n,e){return n.tagToQueryMap.get(e)}function X_(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ye(n.substr(0,e))}}function Z_(n,e,t){const r=n.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const i=H_(n.pendingWriteTree_,e);return Q_(r,t,i,null)}function hF(n){return n.fold((e,t,r)=>{if(t&&vs(t))return[mf(t)];{let i=[];return t&&(i=PR(t)),kn(r,(a,l)=>{i=i.concat(l)}),i}})}function Ru(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(iF())(n._repo,n._path):n}function dF(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=_f(r),a=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(a)}}}function fF(){return sF++}function pF(n,e,t){const r=e._path,i=Md(n,e),a=DR(n,t),l=n.listenProvider_.startListening(Ru(e),i,a.hashFn,a.onComplete),h=n.syncPointTree_.subtree(r);if(i)ne(!vs(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((p,y,v)=>{if(!De(p)&&y&&vs(y))return[mf(y).query];{let T=[];return y&&(T=T.concat(PR(y).map(R=>R.query))),kn(v,(R,k)=>{T=T.concat(k)}),T}});for(let p=0;p<f.length;++p){const y=f[p];n.listenProvider_.stopListening(Ru(y),Md(n,y))}}return l}/**
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
 */class ey{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ey(t)}node(){return this.node_}}class ty{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=kt(this.path_,e);return new ty(this.syncTree_,t)}node(){return Y_(this.syncTree_,this.path_)}}const mF=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},eI=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return gF(n[".sv"],e,t);if(typeof n[".sv"]=="object")return _F(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},gF=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},_F=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const i=e.node();if(ne(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const l=i.getValue();return typeof l!="number"?r:l+r},yF=function(n,e,t,r){return ny(e,new ty(t,n),r)},LR=function(n,e,t){return ny(n,new ey(e),t)};function ny(n,e,t){const r=n.getPriority().val(),i=eI(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const l=n,h=eI(l.getValue(),e,t);return h!==l.getValue()||i!==l.getPriority().val()?new Vt(h,Ht(i)):n}else{const l=n;return a=l,i!==l.getPriority().val()&&(a=a.updatePriority(new Vt(i))),l.forEachChild(ht,(h,f)=>{const p=ny(f,e.getImmediateChild(h),t);p!==f&&(a=a.updateImmediateChild(h,p))}),a}}/**
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
 */class ry{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function iy(n,e){let t=e instanceof Ye?e:new Ye(e),r=n,i=Oe(t);for(;i!==null;){const a=Ma(r.node.children,i)||{children:{},childCount:0};r=new ry(i,r,a),t=tt(t),i=Oe(t)}return r}function il(n){return n.node.value}function MR(n,e){n.node.value=e,Eg(n)}function VR(n){return n.node.childCount>0}function vF(n){return il(n)===void 0&&!VR(n)}function yf(n,e){kn(n.node.children,(t,r)=>{e(new ry(t,n,r))})}function FR(n,e,t,r){t&&e(n),yf(n,i=>{FR(i,e,!0)})}function EF(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function hc(n){return new Ye(n.parent===null?n.name:hc(n.parent)+"/"+n.name)}function Eg(n){n.parent!==null&&wF(n.parent,n.name,n)}function wF(n,e,t){const r=vF(t),i=qr(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,Eg(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Eg(n))}/**
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
 */const TF=/[\[\].#$\/\u0000-\u001F\u007F]/,IF=/[\[\].#$\u0000-\u001F\u007F]/,Am=10*1024*1024,UR=function(n){return typeof n=="string"&&n.length!==0&&!TF.test(n)},jR=function(n){return typeof n=="string"&&n.length!==0&&!IF.test(n)},SF=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jR(n)},tI=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!b_(n)||n&&typeof n=="object"&&qr(n,".sv")},BR=function(n,e,t,r){r&&e===void 0||sy(Mg(n,"value"),e,t)},sy=function(n,e,t){const r=t instanceof Ye?new $V(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ro(r));if(typeof e=="function")throw new Error(n+"contains a function "+ro(r)+" with contents = "+e.toString());if(b_(e))throw new Error(n+"contains "+e.toString()+" "+ro(r));if(typeof e=="string"&&e.length>Am/3&&$d(e)>Am)throw new Error(n+"contains a string greater than "+Am+" utf8 bytes "+ro(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,a=!1;if(kn(e,(l,h)=>{if(l===".value")i=!0;else if(l!==".priority"&&l!==".sv"&&(a=!0,!UR(l)))throw new Error(n+" contains an invalid key ("+l+") "+ro(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WV(r,l),sy(n,h,r),HV(r)}),i&&a)throw new Error(n+' contains ".value" child '+ro(r)+" in addition to actual children.")}},oy=function(n,e,t,r){if(!jR(t))throw new Error(Mg(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},CF=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oy(n,e,t)},zR=function(n,e){if(Oe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},RF=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!UR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!SF(t))throw new Error(Mg(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class AF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ay(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],a=i.getPath();t!==null&&!V_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(i)}t&&n.eventLists_.push(t)}function $R(n,e,t){ay(n,t),WR(n,r=>V_(r,e))}function Si(n,e,t){ay(n,t),WR(n,r=>yr(r,e)||yr(e,r))}function WR(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const a=i.path;e(a)?(PF(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function PF(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Tu&&rn("event: "+t.toString()),rl(r)}}}/**
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
 */const kF="repo_interrupt",NF=25;class xF{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kd(),this.transactionQueueTree_=new ry,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bF(n,e,t){if(n.stats_=L_(n.repoInfo_),n.forceRestClient_||pV())n.server_=new Pd(n.repoInfo_,(r,i,a,l)=>{nI(n,r,i,a,l)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>rI(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{jt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new yi(n.repoInfo_,e,(r,i,a,l)=>{nI(n,r,i,a,l)},r=>{rI(n,r)},r=>{OF(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=vV(n.repoInfo_,()=>new g2(n.stats_,n.server_)),n.infoData_=new h2,n.infoSyncTree_=new XT({startListening:(r,i,a,l)=>{let h=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(h=gf(n.infoSyncTree_,r._path,f),setTimeout(()=>{l("ok")},0)),h},stopListening:()=>{}}),uy(n,"connected",!1),n.serverSyncTree_=new XT({startListening:(r,i,a,l)=>(n.server_.listen(r,a,i,(h,f)=>{const p=l(h,f);Si(n.eventQueue_,r._path,p)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function HR(n){const t=n.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ly(n){return mF({timestamp:HR(n)})}function nI(n,e,t,r,i){n.dataUpdateCount++;const a=new Ye(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let l=[];if(i)if(r){const f=rd(t,p=>Ht(p));l=cF(n.serverSyncTree_,a,f,i)}else{const f=Ht(t);l=uF(n.serverSyncTree_,a,f,i)}else if(r){const f=rd(t,p=>Ht(p));l=oF(n.serverSyncTree_,a,f)}else{const f=Ht(t);l=gf(n.serverSyncTree_,a,f)}let h=a;l.length>0&&(h=vf(n,a)),Si(n.eventQueue_,h,l)}function rI(n,e){uy(n,"connected",e),e===!1&&LF(n)}function OF(n,e){kn(e,(t,r)=>{uy(n,t,r)})}function uy(n,e,t){const r=new Ye("/.info/"+e),i=Ht(t);n.infoData_.updateSnapshot(r,i);const a=gf(n.infoSyncTree_,r,i);Si(n.eventQueue_,r,a)}function qR(n){return n.nextWriteId_++}function DF(n,e,t,r,i){cy(n,"set",{path:e.toString(),value:t,priority:r});const a=ly(n),l=Ht(t,r),h=Y_(n.serverSyncTree_,e),f=LR(l,h,a),p=qR(n),y=xR(n.serverSyncTree_,e,f,p,!0);ay(n.eventQueue_,y),n.server_.put(e.toString(),l.val(!0),(T,R)=>{const k=T==="ok";k||An("set at "+e+" failed: "+T);const L=ao(n.serverSyncTree_,p,!k);Si(n.eventQueue_,e,L),UF(n,i,T,R)});const v=JR(n,e);vf(n,v),Si(n.eventQueue_,v,[])}function LF(n){cy(n,"onDisconnectEvents");const e=ly(n),t=kd();fg(n.onDisconnect_,qe(),(i,a)=>{const l=yF(i,a,n.serverSyncTree_,e);_R(t,i,l)});let r=[];fg(t,qe(),(i,a)=>{r=r.concat(gf(n.serverSyncTree_,i,a));const l=JR(n,i);vf(n,l)}),n.onDisconnect_=kd(),Si(n.eventQueue_,qe(),r)}function MF(n,e,t){let r;Oe(e._path)===".info"?r=ZT(n.infoSyncTree_,e,t):r=ZT(n.serverSyncTree_,e,t),$R(n.eventQueue_,e._path,r)}function VF(n,e,t){let r;Oe(e._path)===".info"?r=vg(n.infoSyncTree_,e,t):r=vg(n.serverSyncTree_,e,t),$R(n.eventQueue_,e._path,r)}function FF(n){n.persistentConnection_&&n.persistentConnection_.interrupt(kF)}function cy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),rn(t,...e)}function UF(n,e,t,r){e&&rl(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let a=i;r&&(a+=": "+r);const l=new Error(a);l.code=i,e(l)}})}function GR(n,e,t){return Y_(n.serverSyncTree_,e,t)||Ie.EMPTY_NODE}function hy(n,e=n.transactionQueueTree_){if(e||Ef(n,e),il(e)){const t=QR(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&jF(n,hc(e),t)}else VR(e)&&yf(e,t=>{hy(n,t)})}function jF(n,e,t){const r=t.map(p=>p.currentWriteId),i=GR(n,e,r);let a=i;const l=i.hash();for(let p=0;p<t.length;p++){const y=t[p];ne(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const v=In(e,y.path);a=a.updateChild(v,y.currentOutputSnapshotRaw)}const h=a.val(!0),f=e;n.server_.put(f.toString(),h,p=>{cy(n,"transaction put response",{path:f.toString(),status:p});let y=[];if(p==="ok"){const v=[];for(let T=0;T<t.length;T++)t[T].status=2,y=y.concat(ao(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&v.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();Ef(n,iy(n.transactionQueueTree_,e)),hy(n,n.transactionQueueTree_),Si(n.eventQueue_,e,y);for(let T=0;T<v.length;T++)rl(v[T])}else{if(p==="datastale")for(let v=0;v<t.length;v++)t[v].status===3?t[v].status=4:t[v].status=0;else{An("transaction at "+f.toString()+" failed: "+p);for(let v=0;v<t.length;v++)t[v].status=4,t[v].abortReason=p}vf(n,e)}},l)}function vf(n,e){const t=KR(n,e),r=hc(t),i=QR(n,t);return BF(n,i,r),r}function BF(n,e,t){if(e.length===0)return;const r=[];let i=[];const l=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],p=In(t,f.path);let y=!1,v;if(ne(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,v=f.abortReason,i=i.concat(ao(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=NF)y=!0,v="maxretry",i=i.concat(ao(n.serverSyncTree_,f.currentWriteId,!0));else{const T=GR(n,f.path,l);f.currentInputSnapshot=T;const R=e[h].update(T.val());if(R!==void 0){sy("transaction failed: Data returned ",R,f.path);let k=Ht(R);typeof R=="object"&&R!=null&&qr(R,".priority")||(k=k.updatePriority(T.getPriority()));const N=f.currentWriteId,K=ly(n),te=LR(k,T,K);f.currentOutputSnapshotRaw=k,f.currentOutputSnapshotResolved=te,f.currentWriteId=qR(n),l.splice(l.indexOf(N),1),i=i.concat(xR(n.serverSyncTree_,f.path,te,f.currentWriteId,f.applyLocally)),i=i.concat(ao(n.serverSyncTree_,N,!0))}else y=!0,v="nodata",i=i.concat(ao(n.serverSyncTree_,f.currentWriteId,!0))}Si(n.eventQueue_,t,i),i=[],y&&(e[h].status=2,function(T){setTimeout(T,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(v==="nodata"?r.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):r.push(()=>e[h].onComplete(new Error(v),!1,null))))}Ef(n,n.transactionQueueTree_);for(let h=0;h<r.length;h++)rl(r[h]);hy(n,n.transactionQueueTree_)}function KR(n,e){let t,r=n.transactionQueueTree_;for(t=Oe(e);t!==null&&il(r)===void 0;)r=iy(r,t),e=tt(e),t=Oe(e);return r}function QR(n,e){const t=[];return YR(n,e,t),t.sort((r,i)=>r.order-i.order),t}function YR(n,e,t){const r=il(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);yf(e,i=>{YR(n,i,t)})}function Ef(n,e){const t=il(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,MR(e,t.length>0?t:void 0)}yf(e,r=>{Ef(n,r)})}function JR(n,e){const t=hc(KR(n,e)),r=iy(n.transactionQueueTree_,e);return EF(r,i=>{Pm(n,i)}),Pm(n,r),FR(r,i=>{Pm(n,i)}),t}function Pm(n,e){const t=il(e);if(t){const r=[];let i=[],a=-1;for(let l=0;l<t.length;l++)t[l].status===3||(t[l].status===1?(ne(a===l-1,"All SENT items should be at beginning of queue."),a=l,t[l].status=3,t[l].abortReason="set"):(ne(t[l].status===0,"Unexpected transaction status in abort"),t[l].unwatcher(),i=i.concat(ao(n.serverSyncTree_,t[l].currentWriteId,!0)),t[l].onComplete&&r.push(t[l].onComplete.bind(null,new Error("set"),!1,null))));a===-1?MR(e,void 0):t.length=a+1,Si(n.eventQueue_,hc(e),i);for(let l=0;l<r.length;l++)rl(r[l])}}/**
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
 */function zF(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $F(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):An(`Invalid query segment '${t}' in query '${n}'`)}return e}const iI=function(n,e){const t=WF(n),r=t.namespace;t.domain==="firebase.com"&&Ii(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Ii("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||sV();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new JC(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new Ye(t.pathString)}},WF=function(n){let e="",t="",r="",i="",a="",l=!0,h="https",f=443;if(typeof n=="string"){let p=n.indexOf("//");p>=0&&(h=n.substring(0,p-1),n=n.substring(p+2));let y=n.indexOf("/");y===-1&&(y=n.length);let v=n.indexOf("?");v===-1&&(v=n.length),e=n.substring(0,Math.min(y,v)),y<v&&(i=zF(n.substring(y,v)));const T=$F(n.substring(Math.min(n.length,v)));p=e.indexOf(":"),p>=0?(l=h==="https"||h==="wss",f=parseInt(e.substring(p+1),10)):p=e.length;const R=e.slice(0,p);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const k=e.indexOf(".");r=e.substring(0,k).toLowerCase(),t=e.substring(k+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:l,scheme:h,pathString:i,namespace:a}};/**
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
 */const sI="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",HF=function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let i;const a=new Array(8);for(i=7;i>=0;i--)a[i]=sI.charAt(t%64),t=Math.floor(t/64);ne(t===0,"Cannot push at time == 0");let l=a.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)l+=sI.charAt(e[i]);return ne(l.length===20,"nextPushId: Length should be 20."),l}}();/**
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
 */class qF{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+jt(this.snapshot.exportVal())}}class GF{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class KF{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class wf{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return De(this._path)?null:oR(this._path)}get ref(){return new Cs(this._repo,this._path)}get _queryIdentifier(){const e=BT(this._queryParams),t=O_(e);return t==="{}"?"default":t}get _queryObject(){return BT(this._queryParams)}isEqual(e){if(e=st(e),!(e instanceof wf))return!1;const t=this._repo===e._repo,r=V_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zV(this._path)}}function QF(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function YF(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===uo){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==vo)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==_s)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===ht){if(e!=null&&!tI(e)||t!=null&&!tI(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(ne(n.getIndex()instanceof j_||n.getIndex()===mR,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Cs extends wf{constructor(e,t){super(e,t,new z_,!1)}get parent(){const e=lR(this._path);return e===null?null:new Cs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ye(e),r=Wu(this.ref,e);return new Vd(this._node.getChild(t),r,ht)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Vd(i,Wu(this.ref,r),ht)))}hasChild(e){const t=new Ye(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function km(n,e){return n=st(n),n._checkNotDeleted("ref"),e!==void 0?Wu(n._root,e):n._root}function Wu(n,e){return n=st(n),Oe(n._path)===null?CF("child","path",e):oy("child","path",e),new Cs(n._repo,kt(n._path,e))}function JF(n,e){n=st(n),zR("push",n._path),BR("push",e,n._path,!0);const t=HR(n._repo),r=HF(t),i=Wu(n,r),a=Wu(n,r);let l;return e!=null?l=XF(a,e).then(()=>a):l=Promise.resolve(a),i.then=l.then.bind(l),i.catch=l.then.bind(l,void 0),i}function XF(n,e){n=st(n),zR("set",n._path),BR("set",e,n._path,!1);const t=new zd;return DF(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class dy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new qF("value",this,new Vd(e.snapshotNode,new Cs(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new GF(this,e,t):null}matches(e){return e instanceof dy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ZF(n,e,t,r,i){const a=new KF(t,void 0),l=new dy(a);return MF(n._repo,n,l),()=>VF(n._repo,n,l)}function oI(n,e,t,r){return ZF(n,"value",e)}class eU{}class tU extends eU{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){QF(e,"orderByChild");const t=new Ye(this._path);if(De(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new j_(t),i=c2(e._queryParams,r);return YF(i),new wf(e._repo,e._path,i,!0)}}function nU(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return oy("orderByChild","path",n),new tU(n)}J2(Cs);rF(Cs);/**
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
 */const rU="FIREBASE_DATABASE_EMULATOR_HOST",wg={};let iU=!1;function sU(n,e,t,r){n.repoInfo_=new JC(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function oU(n,e,t,r,i){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Ii("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rn("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let l=iI(a,i),h=l.repoInfo,f;typeof process<"u"&&IT&&(f=IT[rU]),f?(a=`http://${f}?ns=${h.namespace}`,l=iI(a,i),h=l.repoInfo):l.repoInfo.secure;const p=new gV(n.name,n.options,e);RF("Invalid Firebase Database URL",l),De(l.path)||Ii("Database URL must point to the root of a Firebase Database (not including a child path).");const y=lU(h,n,p,new mV(n,t));return new uU(y,n)}function aU(n,e){const t=wg[e];(!t||t[n.key]!==n)&&Ii(`Database ${e}(${n.repoInfo_}) has already been deleted.`),FF(n),delete t[n.key]}function lU(n,e,t,r){let i=wg[e.name];i||(i={},wg[e.name]=i);let a=i[n.toURLString()];return a&&Ii("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new xF(n,iU,t,r),i[n.toURLString()]=a,a}class uU{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cs(this._repo,qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ii("Cannot call "+e+" on a deleted database.")}}function cU(n=Yu(),e){const t=Ci(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Og("database");r&&hU(t,...r)}return t}function hU(n,e,t,r={}){n=st(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Br(r,a.repoInfo_.emulatorOptions))return;Ii("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let l;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Ii('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new Jh(Jh.OWNER);else if(r.mockUserToken){const h=typeof r.mockUserToken=="string"?r.mockUserToken:Dg(r.mockUserToken,n.app.options.projectId);l=new Jh(h)}sU(a,i,r,l)}/**
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
 */function dU(n){ZM(Es),Jn(new jn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return oU(r,i,a,t)},"PUBLIC").setMultipleInstances(!0)),on(ST,CT,n),on(ST,CT,"esm2017")}yi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};yi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};dU();const fU={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_URL:"http://localhost:5000",VITE_FIREBASE_API_KEY:"YOUR_API_KEY",VITE_FIREBASE_APP_ID:"YOUR_APP_ID",VITE_FIREBASE_AUTH_DOMAIN:"YOUR_AUTH_DOMAIN",VITE_FIREBASE_MESSAGING_SENDER_ID:"YOUR_MESSAGING_SENDER_ID",VITE_FIREBASE_PROJECT_ID:"YOUR_PROJECT_ID",VITE_FIREBASE_STORAGE_BUCKET:"YOUR_STORAGE_BUCKET",VITE_RAZORPAY_KEY:'YOUR_RAZORPAY_PUBLIC_KEY" > .env'},pU=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID","VITE_FIREBASE_MEASUREMENT_ID"],mU=pU.filter(n=>!fU[n]);if(mU.length>0)throw console.error("Missing Firebase environment variables"),new Error("Missing Firebase environment variables");const gU={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID",measurementId:void 0},dc=WE().length?WE()[0]:qI(gU),co=VD(dc),fy=j1(dc);QM(dc);const Nm=cU(dc);EM(dc);NI();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hu(){return Hu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Hu.apply(this,arguments)}var rs;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(rs||(rs={}));const aI="popstate";function _U(n){n===void 0&&(n={});function e(r,i){let{pathname:a,search:l,hash:h}=r.location;return Tg("",{pathname:a,search:l,hash:h},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:Fd(i)}return vU(e,t,null,n)}function yt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function XR(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yU(){return Math.random().toString(36).substr(2,8)}function lI(n,e){return{usr:n.state,key:n.key,idx:e}}function Tg(n,e,t,r){return t===void 0&&(t=null),Hu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?sl(e):e,{state:t,key:e&&e.key||r||yU()})}function Fd(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function sl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function vU(n,e,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,h=rs.Pop,f=null,p=y();p==null&&(p=0,l.replaceState(Hu({},l.state,{idx:p}),""));function y(){return(l.state||{idx:null}).idx}function v(){h=rs.Pop;let N=y(),K=N==null?null:N-p;p=N,f&&f({action:h,location:L.location,delta:K})}function T(N,K){h=rs.Push;let te=Tg(L.location,N,K);p=y()+1;let Z=lI(te,p),oe=L.createHref(te);try{l.pushState(Z,"",oe)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;i.location.assign(oe)}a&&f&&f({action:h,location:L.location,delta:1})}function R(N,K){h=rs.Replace;let te=Tg(L.location,N,K);p=y();let Z=lI(te,p),oe=L.createHref(te);l.replaceState(Z,"",oe),a&&f&&f({action:h,location:L.location,delta:0})}function k(N){let K=i.location.origin!=="null"?i.location.origin:i.location.href,te=typeof N=="string"?N:Fd(N);return te=te.replace(/ $/,"%20"),yt(K,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,K)}let L={get action(){return h},get location(){return n(i,l)},listen(N){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(aI,v),f=N,()=>{i.removeEventListener(aI,v),f=null}},createHref(N){return e(i,N)},createURL:k,encodeLocation(N){let K=k(N);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:T,replace:R,go(N){return l.go(N)}};return L}var uI;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(uI||(uI={}));function EU(n,e,t){return t===void 0&&(t="/"),wU(n,e,t)}function wU(n,e,t,r){let i=typeof e=="string"?sl(e):e,a=py(i.pathname||"/",t);if(a==null)return null;let l=ZR(n);TU(l);let h=null;for(let f=0;h==null&&f<l.length;++f){let p=DU(a);h=xU(l[f],p)}return h}function ZR(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(a,l,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};f.relativePath.startsWith("/")&&(yt(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let p=cs([r,f.relativePath]),y=t.concat(f);a.children&&a.children.length>0&&(yt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),ZR(a.children,e,y,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:kU(p,a.index),routesMeta:y})};return n.forEach((a,l)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))i(a,l);else for(let f of eA(a.path))i(a,l,f)}),e}function eA(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=eA(r.join("/")),h=[];return h.push(...l.map(f=>f===""?a:[a,f].join("/"))),i&&h.push(...l),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function TU(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:NU(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const IU=/^:[\w-]+$/,SU=3,CU=2,RU=1,AU=10,PU=-2,cI=n=>n==="*";function kU(n,e){let t=n.split("/"),r=t.length;return t.some(cI)&&(r+=PU),e&&(r+=CU),t.filter(i=>!cI(i)).reduce((i,a)=>i+(IU.test(a)?SU:a===""?RU:AU),r)}function NU(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function xU(n,e,t){let{routesMeta:r}=n,i={},a="/",l=[];for(let h=0;h<r.length;++h){let f=r[h],p=h===r.length-1,y=a==="/"?e:e.slice(a.length)||"/",v=bU({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y),T=f.route;if(!v)return null;Object.assign(i,v.params),l.push({params:i,pathname:cs([a,v.pathname]),pathnameBase:FU(cs([a,v.pathnameBase])),route:T}),v.pathnameBase!=="/"&&(a=cs([a,v.pathnameBase]))}return l}function bU(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=OU(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),h=i.slice(1);return{params:r.reduce((p,y,v)=>{let{paramName:T,isOptional:R}=y;if(T==="*"){let L=h[v]||"";l=a.slice(0,a.length-L.length).replace(/(.)\/+$/,"$1")}const k=h[v];return R&&!k?p[T]=void 0:p[T]=(k||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:l,pattern:n}}function OU(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),XR(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,h,f)=>(r.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DU(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return XR(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function py(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function LU(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?sl(n):n;return{pathname:t?t.startsWith("/")?t:MU(t,e):e,search:UU(r),hash:jU(i)}}function MU(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function xm(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VU(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function my(n,e){let t=VU(n);return e?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function gy(n,e,t,r){r===void 0&&(r=!1);let i;typeof n=="string"?i=sl(n):(i=Hu({},n),yt(!i.pathname||!i.pathname.includes("?"),xm("?","pathname","search",i)),yt(!i.pathname||!i.pathname.includes("#"),xm("#","pathname","hash",i)),yt(!i.search||!i.search.includes("#"),xm("#","search","hash",i)));let a=n===""||i.pathname==="",l=a?"/":i.pathname,h;if(l==null)h=t;else{let v=e.length-1;if(!r&&l.startsWith("..")){let T=l.split("/");for(;T[0]==="..";)T.shift(),v-=1;i.pathname=T.join("/")}h=v>=0?e[v]:"/"}let f=LU(i,h),p=l&&l!=="/"&&l.endsWith("/"),y=(a||l===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||y)&&(f.pathname+="/"),f}const cs=n=>n.join("/").replace(/\/\/+/g,"/"),FU=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),UU=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,jU=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function BU(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const tA=["post","put","patch","delete"];new Set(tA);const zU=["get",...tA];new Set(zU);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qu(){return qu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},qu.apply(this,arguments)}const _y=re.createContext(null),$U=re.createContext(null),Rs=re.createContext(null),Tf=re.createContext(null),As=re.createContext({outlet:null,matches:[],isDataRoute:!1}),nA=re.createContext(null);function WU(n,e){let{relative:t}=e===void 0?{}:e;ol()||yt(!1);let{basename:r,navigator:i}=re.useContext(Rs),{hash:a,pathname:l,search:h}=iA(n,{relative:t}),f=l;return r!=="/"&&(f=l==="/"?r:cs([r,l])),i.createHref({pathname:f,search:h,hash:a})}function ol(){return re.useContext(Tf)!=null}function fc(){return ol()||yt(!1),re.useContext(Tf).location}function rA(n){re.useContext(Rs).static||re.useLayoutEffect(n)}function If(){let{isDataRoute:n}=re.useContext(As);return n?r4():HU()}function HU(){ol()||yt(!1);let n=re.useContext(_y),{basename:e,future:t,navigator:r}=re.useContext(Rs),{matches:i}=re.useContext(As),{pathname:a}=fc(),l=JSON.stringify(my(i,t.v7_relativeSplatPath)),h=re.useRef(!1);return rA(()=>{h.current=!0}),re.useCallback(function(p,y){if(y===void 0&&(y={}),!h.current)return;if(typeof p=="number"){r.go(p);return}let v=gy(p,JSON.parse(l),a,y.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:cs([e,v.pathname])),(y.replace?r.replace:r.push)(v,y.state,y)},[e,r,l,a,n])}function iA(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=re.useContext(Rs),{matches:i}=re.useContext(As),{pathname:a}=fc(),l=JSON.stringify(my(i,r.v7_relativeSplatPath));return re.useMemo(()=>gy(n,JSON.parse(l),a,t==="path"),[n,l,a,t])}function qU(n,e){return GU(n,e)}function GU(n,e,t,r){ol()||yt(!1);let{navigator:i,static:a}=re.useContext(Rs),{matches:l}=re.useContext(As),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let p=h?h.pathnameBase:"/";h&&h.route;let y=fc(),v;if(e){var T;let K=typeof e=="string"?sl(e):e;p==="/"||(T=K.pathname)!=null&&T.startsWith(p)||yt(!1),v=K}else v=y;let R=v.pathname||"/",k=R;if(p!=="/"){let K=p.replace(/^\//,"").split("/");k="/"+R.replace(/^\//,"").split("/").slice(K.length).join("/")}let L=EU(n,{pathname:k}),N=XU(L&&L.map(K=>Object.assign({},K,{params:Object.assign({},f,K.params),pathname:cs([p,i.encodeLocation?i.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?p:cs([p,i.encodeLocation?i.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),l,t,r);return e&&N?re.createElement(Tf.Provider,{value:{location:qu({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:rs.Pop}},N):N}function KU(){let n=n4(),e=BU(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),t?re.createElement("pre",{style:i},t):null,null)}const QU=re.createElement(KU,null);class YU extends re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?re.createElement(As.Provider,{value:this.props.routeContext},re.createElement(nA.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JU(n){let{routeContext:e,match:t,children:r}=n,i=re.useContext(_y);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),re.createElement(As.Provider,{value:e},r)}function XU(n,e,t,r){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,h=(i=t)==null?void 0:i.errors;if(h!=null){let y=l.findIndex(v=>v.route.id&&(h==null?void 0:h[v.route.id])!==void 0);y>=0||yt(!1),l=l.slice(0,Math.min(l.length,y+1))}let f=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let y=0;y<l.length;y++){let v=l[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=y),v.route.id){let{loaderData:T,errors:R}=t,k=v.route.loader&&T[v.route.id]===void 0&&(!R||R[v.route.id]===void 0);if(v.route.lazy||k){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((y,v,T)=>{let R,k=!1,L=null,N=null;t&&(R=h&&v.route.id?h[v.route.id]:void 0,L=v.route.errorElement||QU,f&&(p<0&&T===0?(i4("route-fallback"),k=!0,N=null):p===T&&(k=!0,N=v.route.hydrateFallbackElement||null)));let K=e.concat(l.slice(0,T+1)),te=()=>{let Z;return R?Z=L:k?Z=N:v.route.Component?Z=re.createElement(v.route.Component,null):v.route.element?Z=v.route.element:Z=y,re.createElement(JU,{match:v,routeContext:{outlet:y,matches:K,isDataRoute:t!=null},children:Z})};return t&&(v.route.ErrorBoundary||v.route.errorElement||T===0)?re.createElement(YU,{location:t.location,revalidation:t.revalidation,component:L,error:R,children:te(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):te()},null)}var sA=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(sA||{}),oA=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(oA||{});function ZU(n){let e=re.useContext(_y);return e||yt(!1),e}function e4(n){let e=re.useContext($U);return e||yt(!1),e}function t4(n){let e=re.useContext(As);return e||yt(!1),e}function aA(n){let e=t4(),t=e.matches[e.matches.length-1];return t.route.id||yt(!1),t.route.id}function n4(){var n;let e=re.useContext(nA),t=e4(),r=aA();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function r4(){let{router:n}=ZU(sA.UseNavigateStable),e=aA(oA.UseNavigateStable),t=re.useRef(!1);return rA(()=>{t.current=!0}),re.useCallback(function(i,a){a===void 0&&(a={}),t.current&&(typeof i=="number"?n.navigate(i):n.navigate(i,qu({fromRouteId:e},a)))},[n,e])}const hI={};function i4(n,e,t){hI[n]||(hI[n]=!0)}function s4(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function lu(n){let{to:e,replace:t,state:r,relative:i}=n;ol()||yt(!1);let{future:a,static:l}=re.useContext(Rs),{matches:h}=re.useContext(As),{pathname:f}=fc(),p=If(),y=gy(e,my(h,a.v7_relativeSplatPath),f,i==="path"),v=JSON.stringify(y);return re.useEffect(()=>p(JSON.parse(v),{replace:t,state:r,relative:i}),[p,v,i,t,r]),null}function pr(n){yt(!1)}function o4(n){let{basename:e="/",children:t=null,location:r,navigationType:i=rs.Pop,navigator:a,static:l=!1,future:h}=n;ol()&&yt(!1);let f=e.replace(/^\/*/,"/"),p=re.useMemo(()=>({basename:f,navigator:a,static:l,future:qu({v7_relativeSplatPath:!1},h)}),[f,h,a,l]);typeof r=="string"&&(r=sl(r));let{pathname:y="/",search:v="",hash:T="",state:R=null,key:k="default"}=r,L=re.useMemo(()=>{let N=py(y,f);return N==null?null:{location:{pathname:N,search:v,hash:T,state:R,key:k},navigationType:i}},[f,y,v,T,R,k,i]);return L==null?null:re.createElement(Rs.Provider,{value:p},re.createElement(Tf.Provider,{children:t,value:L}))}function a4(n){let{children:e,location:t}=n;return qU(Ig(e),t)}new Promise(()=>{});function Ig(n,e){e===void 0&&(e=[]);let t=[];return re.Children.forEach(n,(r,i)=>{if(!re.isValidElement(r))return;let a=[...e,i];if(r.type===re.Fragment){t.push.apply(t,Ig(r.props.children,a));return}r.type!==pr&&yt(!1),!r.props.index||!r.props.children||yt(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ig(r.props.children,a)),t.push(l)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sg(){return Sg=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Sg.apply(this,arguments)}function l4(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function u4(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function c4(n,e){return n.button===0&&(!e||e==="_self")&&!u4(n)}const h4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],d4="6";try{window.__reactRouterVersion=d4}catch{}const f4="startTransition",dI=UP[f4];function p4(n){let{basename:e,children:t,future:r,window:i}=n,a=re.useRef();a.current==null&&(a.current=_U({window:i,v5Compat:!0}));let l=a.current,[h,f]=re.useState({action:l.action,location:l.location}),{v7_startTransition:p}=r||{},y=re.useCallback(v=>{p&&dI?dI(()=>f(v)):f(v)},[f,p]);return re.useLayoutEffect(()=>l.listen(y),[l,y]),re.useEffect(()=>s4(r),[r]),re.createElement(o4,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:l,future:r})}const m4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ia=re.forwardRef(function(e,t){let{onClick:r,relative:i,reloadDocument:a,replace:l,state:h,target:f,to:p,preventScrollReset:y,viewTransition:v}=e,T=l4(e,h4),{basename:R}=re.useContext(Rs),k,L=!1;if(typeof p=="string"&&g4.test(p)&&(k=p,m4))try{let Z=new URL(window.location.href),oe=p.startsWith("//")?new URL(Z.protocol+p):new URL(p),Ee=py(oe.pathname,R);oe.origin===Z.origin&&Ee!=null?p=Ee+oe.search+oe.hash:L=!0}catch{}let N=WU(p,{relative:i}),K=_4(p,{replace:l,state:h,target:f,preventScrollReset:y,relative:i,viewTransition:v});function te(Z){r&&r(Z),Z.defaultPrevented||K(Z)}return re.createElement("a",Sg({},T,{href:k||N,onClick:L||a?r:te,ref:t,target:f}))});var fI;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(fI||(fI={}));var pI;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(pI||(pI={}));function _4(n,e){let{target:t,replace:r,state:i,preventScrollReset:a,relative:l,viewTransition:h}=e===void 0?{}:e,f=If(),p=fc(),y=iA(n,{relative:l});return re.useCallback(v=>{if(c4(v,t)){v.preventDefault();let T=r!==void 0?r:Fd(p)===Fd(y);f(n,{replace:T,state:i,preventScrollReset:a,relative:l,viewTransition:h})}},[p,f,y,r,i,t,n,a,l,h])}function lA(n,e){return function(){return n.apply(e,arguments)}}const{toString:y4}=Object.prototype,{getPrototypeOf:yy}=Object,Sf=(n=>e=>{const t=y4.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ir=n=>(n=n.toLowerCase(),e=>Sf(e)===n),Cf=n=>e=>typeof e===n,{isArray:al}=Array,Gu=Cf("undefined");function v4(n){return n!==null&&!Gu(n)&&n.constructor!==null&&!Gu(n.constructor)&&Un(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const uA=Ir("ArrayBuffer");function E4(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&uA(n.buffer),e}const w4=Cf("string"),Un=Cf("function"),cA=Cf("number"),Rf=n=>n!==null&&typeof n=="object",T4=n=>n===!0||n===!1,Xh=n=>{if(Sf(n)!=="object")return!1;const e=yy(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},I4=Ir("Date"),S4=Ir("File"),C4=Ir("Blob"),R4=Ir("FileList"),A4=n=>Rf(n)&&Un(n.pipe),P4=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Un(n.append)&&((e=Sf(n))==="formdata"||e==="object"&&Un(n.toString)&&n.toString()==="[object FormData]"))},k4=Ir("URLSearchParams"),[N4,x4,b4,O4]=["ReadableStream","Request","Response","Headers"].map(Ir),D4=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function pc(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,i;if(typeof n!="object"&&(n=[n]),al(n))for(r=0,i=n.length;r<i;r++)e.call(null,n[r],r,n);else{const a=t?Object.getOwnPropertyNames(n):Object.keys(n),l=a.length;let h;for(r=0;r<l;r++)h=a[r],e.call(null,n[h],h,n)}}function hA(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,i;for(;r-- >0;)if(i=t[r],e===i.toLowerCase())return i;return null}const lo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,dA=n=>!Gu(n)&&n!==lo;function Cg(){const{caseless:n}=dA(this)&&this||{},e={},t=(r,i)=>{const a=n&&hA(e,i)||i;Xh(e[a])&&Xh(r)?e[a]=Cg(e[a],r):Xh(r)?e[a]=Cg({},r):al(r)?e[a]=r.slice():e[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&pc(arguments[r],t);return e}const L4=(n,e,t,{allOwnKeys:r}={})=>(pc(e,(i,a)=>{t&&Un(i)?n[a]=lA(i,t):n[a]=i},{allOwnKeys:r}),n),M4=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),V4=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},F4=(n,e,t,r)=>{let i,a,l;const h={};if(e=e||{},n==null)return e;do{for(i=Object.getOwnPropertyNames(n),a=i.length;a-- >0;)l=i[a],(!r||r(l,n,e))&&!h[l]&&(e[l]=n[l],h[l]=!0);n=t!==!1&&yy(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},U4=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},j4=n=>{if(!n)return null;if(al(n))return n;let e=n.length;if(!cA(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},B4=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&yy(Uint8Array)),z4=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let i;for(;(i=r.next())&&!i.done;){const a=i.value;e.call(n,a[0],a[1])}},$4=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},W4=Ir("HTMLFormElement"),H4=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,i){return r.toUpperCase()+i}),mI=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),q4=Ir("RegExp"),fA=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};pc(t,(i,a)=>{let l;(l=e(i,a,n))!==!1&&(r[a]=l||i)}),Object.defineProperties(n,r)},G4=n=>{fA(n,(e,t)=>{if(Un(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(Un(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},K4=(n,e)=>{const t={},r=i=>{i.forEach(a=>{t[a]=!0})};return al(n)?r(n):r(String(n).split(e)),t},Q4=()=>{},Y4=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function J4(n){return!!(n&&Un(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const X4=n=>{const e=new Array(10),t=(r,i)=>{if(Rf(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const a=al(r)?[]:{};return pc(r,(l,h)=>{const f=t(l,i+1);!Gu(f)&&(a[h]=f)}),e[i]=void 0,a}}return r};return t(n,0)},Z4=Ir("AsyncFunction"),ej=n=>n&&(Rf(n)||Un(n))&&Un(n.then)&&Un(n.catch),pA=((n,e)=>n?setImmediate:e?((t,r)=>(lo.addEventListener("message",({source:i,data:a})=>{i===lo&&a===t&&r.length&&r.shift()()},!1),i=>{r.push(i),lo.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Un(lo.postMessage)),tj=typeof queueMicrotask<"u"?queueMicrotask.bind(lo):typeof process<"u"&&process.nextTick||pA,H={isArray:al,isArrayBuffer:uA,isBuffer:v4,isFormData:P4,isArrayBufferView:E4,isString:w4,isNumber:cA,isBoolean:T4,isObject:Rf,isPlainObject:Xh,isReadableStream:N4,isRequest:x4,isResponse:b4,isHeaders:O4,isUndefined:Gu,isDate:I4,isFile:S4,isBlob:C4,isRegExp:q4,isFunction:Un,isStream:A4,isURLSearchParams:k4,isTypedArray:B4,isFileList:R4,forEach:pc,merge:Cg,extend:L4,trim:D4,stripBOM:M4,inherits:V4,toFlatObject:F4,kindOf:Sf,kindOfTest:Ir,endsWith:U4,toArray:j4,forEachEntry:z4,matchAll:$4,isHTMLForm:W4,hasOwnProperty:mI,hasOwnProp:mI,reduceDescriptors:fA,freezeMethods:G4,toObjectSet:K4,toCamelCase:H4,noop:Q4,toFiniteNumber:Y4,findKey:hA,global:lo,isContextDefined:dA,isSpecCompliantForm:J4,toJSONObject:X4,isAsyncFn:Z4,isThenable:ej,setImmediate:pA,asap:tj};function Pe(n,e,t,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}H.inherits(Pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const mA=Pe.prototype,gA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{gA[n]={value:n}});Object.defineProperties(Pe,gA);Object.defineProperty(mA,"isAxiosError",{value:!0});Pe.from=(n,e,t,r,i,a)=>{const l=Object.create(mA);return H.toFlatObject(n,l,function(f){return f!==Error.prototype},h=>h!=="isAxiosError"),Pe.call(l,n.message,e,t,r,i),l.cause=n,l.name=n.name,a&&Object.assign(l,a),l};const nj=null;function Rg(n){return H.isPlainObject(n)||H.isArray(n)}function _A(n){return H.endsWith(n,"[]")?n.slice(0,-2):n}function gI(n,e,t){return n?n.concat(e).map(function(i,a){return i=_A(i),!t&&a?"["+i+"]":i}).join(t?".":""):e}function rj(n){return H.isArray(n)&&!n.some(Rg)}const ij=H.toFlatObject(H,{},null,function(e){return/^is[A-Z]/.test(e)});function Af(n,e,t){if(!H.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=H.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(L,N){return!H.isUndefined(N[L])});const r=t.metaTokens,i=t.visitor||y,a=t.dots,l=t.indexes,f=(t.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(e);if(!H.isFunction(i))throw new TypeError("visitor must be a function");function p(k){if(k===null)return"";if(H.isDate(k))return k.toISOString();if(!f&&H.isBlob(k))throw new Pe("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(k)||H.isTypedArray(k)?f&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function y(k,L,N){let K=k;if(k&&!N&&typeof k=="object"){if(H.endsWith(L,"{}"))L=r?L:L.slice(0,-2),k=JSON.stringify(k);else if(H.isArray(k)&&rj(k)||(H.isFileList(k)||H.endsWith(L,"[]"))&&(K=H.toArray(k)))return L=_A(L),K.forEach(function(Z,oe){!(H.isUndefined(Z)||Z===null)&&e.append(l===!0?gI([L],oe,a):l===null?L:L+"[]",p(Z))}),!1}return Rg(k)?!0:(e.append(gI(N,L,a),p(k)),!1)}const v=[],T=Object.assign(ij,{defaultVisitor:y,convertValue:p,isVisitable:Rg});function R(k,L){if(!H.isUndefined(k)){if(v.indexOf(k)!==-1)throw Error("Circular reference detected in "+L.join("."));v.push(k),H.forEach(k,function(K,te){(!(H.isUndefined(K)||K===null)&&i.call(e,K,H.isString(te)?te.trim():te,L,T))===!0&&R(K,L?L.concat(te):[te])}),v.pop()}}if(!H.isObject(n))throw new TypeError("data must be an object");return R(n),e}function _I(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function vy(n,e){this._pairs=[],n&&Af(n,this,e)}const yA=vy.prototype;yA.append=function(e,t){this._pairs.push([e,t])};yA.toString=function(e){const t=e?function(r){return e.call(this,r,_I)}:_I;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function sj(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vA(n,e,t){if(!e)return n;const r=t&&t.encode||sj;H.isFunction(t)&&(t={serialize:t});const i=t&&t.serialize;let a;if(i?a=i(e,t):a=H.isURLSearchParams(e)?e.toString():new vy(e,t).toString(r),a){const l=n.indexOf("#");l!==-1&&(n=n.slice(0,l)),n+=(n.indexOf("?")===-1?"?":"&")+a}return n}class yI{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,function(r){r!==null&&e(r)})}}const EA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oj=typeof URLSearchParams<"u"?URLSearchParams:vy,aj=typeof FormData<"u"?FormData:null,lj=typeof Blob<"u"?Blob:null,uj={isBrowser:!0,classes:{URLSearchParams:oj,FormData:aj,Blob:lj},protocols:["http","https","file","blob","url","data"]},Ey=typeof window<"u"&&typeof document<"u",Ag=typeof navigator=="object"&&navigator||void 0,cj=Ey&&(!Ag||["ReactNative","NativeScript","NS"].indexOf(Ag.product)<0),hj=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",dj=Ey&&window.location.href||"http://localhost",fj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ey,hasStandardBrowserEnv:cj,hasStandardBrowserWebWorkerEnv:hj,navigator:Ag,origin:dj},Symbol.toStringTag,{value:"Module"})),sn={...fj,...uj};function pj(n,e){return Af(n,new sn.classes.URLSearchParams,Object.assign({visitor:function(t,r,i,a){return sn.isNode&&H.isBuffer(t)?(this.append(r,t.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},e))}function mj(n){return H.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function gj(n){const e={},t=Object.keys(n);let r;const i=t.length;let a;for(r=0;r<i;r++)a=t[r],e[a]=n[a];return e}function wA(n){function e(t,r,i,a){let l=t[a++];if(l==="__proto__")return!0;const h=Number.isFinite(+l),f=a>=t.length;return l=!l&&H.isArray(i)?i.length:l,f?(H.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!h):((!i[l]||!H.isObject(i[l]))&&(i[l]=[]),e(t,r,i[l],a)&&H.isArray(i[l])&&(i[l]=gj(i[l])),!h)}if(H.isFormData(n)&&H.isFunction(n.entries)){const t={};return H.forEachEntry(n,(r,i)=>{e(mj(r),i,t,0)}),t}return null}function _j(n,e,t){if(H.isString(n))try{return(e||JSON.parse)(n),H.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const mc={transitional:EA,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,a=H.isObject(e);if(a&&H.isHTMLForm(e)&&(e=new FormData(e)),H.isFormData(e))return i?JSON.stringify(wA(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let h;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return pj(e,this.formSerializer).toString();if((h=H.isFileList(e))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Af(h?{"files[]":e}:e,f&&new f,this.formSerializer)}}return a||i?(t.setContentType("application/json",!1),_j(e)):e}],transformResponse:[function(e){const t=this.transitional||mc.transitional,r=t&&t.forcedJSONParsing,i=this.responseType==="json";if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(r&&!this.responseType||i)){const l=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(h){if(l)throw h.name==="SyntaxError"?Pe.from(h,Pe.ERR_BAD_RESPONSE,this,null,this.response):h}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:sn.classes.FormData,Blob:sn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],n=>{mc.headers[n]={}});const yj=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vj=n=>{const e={};let t,r,i;return n&&n.split(`
`).forEach(function(l){i=l.indexOf(":"),t=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!t||e[t]&&yj[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},vI=Symbol("internals");function uu(n){return n&&String(n).trim().toLowerCase()}function Zh(n){return n===!1||n==null?n:H.isArray(n)?n.map(Zh):String(n)}function Ej(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const wj=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function bm(n,e,t,r,i){if(H.isFunction(r))return r.call(this,e,t);if(i&&(e=t),!!H.isString(e)){if(H.isString(r))return e.indexOf(r)!==-1;if(H.isRegExp(r))return r.test(e)}}function Tj(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function Ij(n,e){const t=H.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(i,a,l){return this[r].call(this,e,i,a,l)},configurable:!0})})}let Pn=class{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function a(h,f,p){const y=uu(f);if(!y)throw new Error("header name must be a non-empty string");const v=H.findKey(i,y);(!v||i[v]===void 0||p===!0||p===void 0&&i[v]!==!1)&&(i[v||f]=Zh(h))}const l=(h,f)=>H.forEach(h,(p,y)=>a(p,y,f));if(H.isPlainObject(e)||e instanceof this.constructor)l(e,t);else if(H.isString(e)&&(e=e.trim())&&!wj(e))l(vj(e),t);else if(H.isHeaders(e))for(const[h,f]of e.entries())a(f,h,r);else e!=null&&a(t,e,r);return this}get(e,t){if(e=uu(e),e){const r=H.findKey(this,e);if(r){const i=this[r];if(!t)return i;if(t===!0)return Ej(i);if(H.isFunction(t))return t.call(this,i,r);if(H.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=uu(e),e){const r=H.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||bm(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let i=!1;function a(l){if(l=uu(l),l){const h=H.findKey(r,l);h&&(!t||bm(r,r[h],h,t))&&(delete r[h],i=!0)}}return H.isArray(e)?e.forEach(a):a(e),i}clear(e){const t=Object.keys(this);let r=t.length,i=!1;for(;r--;){const a=t[r];(!e||bm(this,this[a],a,e,!0))&&(delete this[a],i=!0)}return i}normalize(e){const t=this,r={};return H.forEach(this,(i,a)=>{const l=H.findKey(r,a);if(l){t[l]=Zh(i),delete t[a];return}const h=e?Tj(a):String(a).trim();h!==a&&delete t[a],t[h]=Zh(i),r[h]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return H.forEach(this,(r,i)=>{r!=null&&r!==!1&&(t[i]=e&&H.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[vI]=this[vI]={accessors:{}}).accessors,i=this.prototype;function a(l){const h=uu(l);r[h]||(Ij(i,l),r[h]=!0)}return H.isArray(e)?e.forEach(a):a(e),this}};Pn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(Pn.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});H.freezeMethods(Pn);function Om(n,e){const t=this||mc,r=e||t,i=Pn.from(r.headers);let a=r.data;return H.forEach(n,function(h){a=h.call(t,a,i.normalize(),e?e.status:void 0)}),i.normalize(),a}function TA(n){return!!(n&&n.__CANCEL__)}function ll(n,e,t){Pe.call(this,n??"canceled",Pe.ERR_CANCELED,e,t),this.name="CanceledError"}H.inherits(ll,Pe,{__CANCEL__:!0});function IA(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new Pe("Request failed with status code "+t.status,[Pe.ERR_BAD_REQUEST,Pe.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Sj(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Cj(n,e){n=n||10;const t=new Array(n),r=new Array(n);let i=0,a=0,l;return e=e!==void 0?e:1e3,function(f){const p=Date.now(),y=r[a];l||(l=p),t[i]=f,r[i]=p;let v=a,T=0;for(;v!==i;)T+=t[v++],v=v%n;if(i=(i+1)%n,i===a&&(a=(a+1)%n),p-l<e)return;const R=y&&p-y;return R?Math.round(T*1e3/R):void 0}}function Rj(n,e){let t=0,r=1e3/e,i,a;const l=(p,y=Date.now())=>{t=y,i=null,a&&(clearTimeout(a),a=null),n.apply(null,p)};return[(...p)=>{const y=Date.now(),v=y-t;v>=r?l(p,y):(i=p,a||(a=setTimeout(()=>{a=null,l(i)},r-v)))},()=>i&&l(i)]}const Ud=(n,e,t=3)=>{let r=0;const i=Cj(50,250);return Rj(a=>{const l=a.loaded,h=a.lengthComputable?a.total:void 0,f=l-r,p=i(f),y=l<=h;r=l;const v={loaded:l,total:h,progress:h?l/h:void 0,bytes:f,rate:p||void 0,estimated:p&&h&&y?(h-l)/p:void 0,event:a,lengthComputable:h!=null,[e?"download":"upload"]:!0};n(v)},t)},EI=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},wI=n=>(...e)=>H.asap(()=>n(...e)),Aj=sn.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,sn.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(sn.origin),sn.navigator&&/(msie|trident)/i.test(sn.navigator.userAgent)):()=>!0,Pj=sn.hasStandardBrowserEnv?{write(n,e,t,r,i,a){const l=[n+"="+encodeURIComponent(e)];H.isNumber(t)&&l.push("expires="+new Date(t).toGMTString()),H.isString(r)&&l.push("path="+r),H.isString(i)&&l.push("domain="+i),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function kj(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Nj(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function SA(n,e,t){let r=!kj(e);return n&&(r||t==!1)?Nj(n,e):e}const TI=n=>n instanceof Pn?{...n}:n;function Io(n,e){e=e||{};const t={};function r(p,y,v,T){return H.isPlainObject(p)&&H.isPlainObject(y)?H.merge.call({caseless:T},p,y):H.isPlainObject(y)?H.merge({},y):H.isArray(y)?y.slice():y}function i(p,y,v,T){if(H.isUndefined(y)){if(!H.isUndefined(p))return r(void 0,p,v,T)}else return r(p,y,v,T)}function a(p,y){if(!H.isUndefined(y))return r(void 0,y)}function l(p,y){if(H.isUndefined(y)){if(!H.isUndefined(p))return r(void 0,p)}else return r(void 0,y)}function h(p,y,v){if(v in e)return r(p,y);if(v in n)return r(void 0,p)}const f={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:h,headers:(p,y,v)=>i(TI(p),TI(y),v,!0)};return H.forEach(Object.keys(Object.assign({},n,e)),function(y){const v=f[y]||i,T=v(n[y],e[y],y);H.isUndefined(T)&&v!==h||(t[y]=T)}),t}const CA=n=>{const e=Io({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:l,auth:h}=e;e.headers=l=Pn.from(l),e.url=vA(SA(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),h&&l.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):"")));let f;if(H.isFormData(t)){if(sn.hasStandardBrowserEnv||sn.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((f=l.getContentType())!==!1){const[p,...y]=f?f.split(";").map(v=>v.trim()).filter(Boolean):[];l.setContentType([p||"multipart/form-data",...y].join("; "))}}if(sn.hasStandardBrowserEnv&&(r&&H.isFunction(r)&&(r=r(e)),r||r!==!1&&Aj(e.url))){const p=i&&a&&Pj.read(a);p&&l.set(i,p)}return e},xj=typeof XMLHttpRequest<"u",bj=xj&&function(n){return new Promise(function(t,r){const i=CA(n);let a=i.data;const l=Pn.from(i.headers).normalize();let{responseType:h,onUploadProgress:f,onDownloadProgress:p}=i,y,v,T,R,k;function L(){R&&R(),k&&k(),i.cancelToken&&i.cancelToken.unsubscribe(y),i.signal&&i.signal.removeEventListener("abort",y)}let N=new XMLHttpRequest;N.open(i.method.toUpperCase(),i.url,!0),N.timeout=i.timeout;function K(){if(!N)return;const Z=Pn.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),Ee={data:!h||h==="text"||h==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:Z,config:n,request:N};IA(function(b){t(b),L()},function(b){r(b),L()},Ee),N=null}"onloadend"in N?N.onloadend=K:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.indexOf("file:")===0)||setTimeout(K)},N.onabort=function(){N&&(r(new Pe("Request aborted",Pe.ECONNABORTED,n,N)),N=null)},N.onerror=function(){r(new Pe("Network Error",Pe.ERR_NETWORK,n,N)),N=null},N.ontimeout=function(){let oe=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const Ee=i.transitional||EA;i.timeoutErrorMessage&&(oe=i.timeoutErrorMessage),r(new Pe(oe,Ee.clarifyTimeoutError?Pe.ETIMEDOUT:Pe.ECONNABORTED,n,N)),N=null},a===void 0&&l.setContentType(null),"setRequestHeader"in N&&H.forEach(l.toJSON(),function(oe,Ee){N.setRequestHeader(Ee,oe)}),H.isUndefined(i.withCredentials)||(N.withCredentials=!!i.withCredentials),h&&h!=="json"&&(N.responseType=i.responseType),p&&([T,k]=Ud(p,!0),N.addEventListener("progress",T)),f&&N.upload&&([v,R]=Ud(f),N.upload.addEventListener("progress",v),N.upload.addEventListener("loadend",R)),(i.cancelToken||i.signal)&&(y=Z=>{N&&(r(!Z||Z.type?new ll(null,n,N):Z),N.abort(),N=null)},i.cancelToken&&i.cancelToken.subscribe(y),i.signal&&(i.signal.aborted?y():i.signal.addEventListener("abort",y)));const te=Sj(i.url);if(te&&sn.protocols.indexOf(te)===-1){r(new Pe("Unsupported protocol "+te+":",Pe.ERR_BAD_REQUEST,n));return}N.send(a||null)})},Oj=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let r=new AbortController,i;const a=function(p){if(!i){i=!0,h();const y=p instanceof Error?p:this.reason;r.abort(y instanceof Pe?y:new ll(y instanceof Error?y.message:y))}};let l=e&&setTimeout(()=>{l=null,a(new Pe(`timeout ${e} of ms exceeded`,Pe.ETIMEDOUT))},e);const h=()=>{n&&(l&&clearTimeout(l),l=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(a):p.removeEventListener("abort",a)}),n=null)};n.forEach(p=>p.addEventListener("abort",a));const{signal:f}=r;return f.unsubscribe=()=>H.asap(h),f}},Dj=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let r=0,i;for(;r<t;)i=r+e,yield n.slice(r,i),r=i},Lj=async function*(n,e){for await(const t of Mj(n))yield*Dj(t,e)},Mj=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},II=(n,e,t,r)=>{const i=Lj(n,e);let a=0,l,h=f=>{l||(l=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:p,value:y}=await i.next();if(p){h(),f.close();return}let v=y.byteLength;if(t){let T=a+=v;t(T)}f.enqueue(new Uint8Array(y))}catch(p){throw h(p),p}},cancel(f){return h(f),i.return()}},{highWaterMark:2})},Pf=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",RA=Pf&&typeof ReadableStream=="function",Vj=Pf&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),AA=(n,...e)=>{try{return!!n(...e)}catch{return!1}},Fj=RA&&AA(()=>{let n=!1;const e=new Request(sn.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),SI=64*1024,Pg=RA&&AA(()=>H.isReadableStream(new Response("").body)),jd={stream:Pg&&(n=>n.body)};Pf&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!jd[e]&&(jd[e]=H.isFunction(n[e])?t=>t[e]():(t,r)=>{throw new Pe(`Response type '${e}' is not supported`,Pe.ERR_NOT_SUPPORT,r)})})})(new Response);const Uj=async n=>{if(n==null)return 0;if(H.isBlob(n))return n.size;if(H.isSpecCompliantForm(n))return(await new Request(sn.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(H.isArrayBufferView(n)||H.isArrayBuffer(n))return n.byteLength;if(H.isURLSearchParams(n)&&(n=n+""),H.isString(n))return(await Vj(n)).byteLength},jj=async(n,e)=>{const t=H.toFiniteNumber(n.getContentLength());return t??Uj(e)},Bj=Pf&&(async n=>{let{url:e,method:t,data:r,signal:i,cancelToken:a,timeout:l,onDownloadProgress:h,onUploadProgress:f,responseType:p,headers:y,withCredentials:v="same-origin",fetchOptions:T}=CA(n);p=p?(p+"").toLowerCase():"text";let R=Oj([i,a&&a.toAbortSignal()],l),k;const L=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let N;try{if(f&&Fj&&t!=="get"&&t!=="head"&&(N=await jj(y,r))!==0){let Ee=new Request(e,{method:"POST",body:r,duplex:"half"}),we;if(H.isFormData(r)&&(we=Ee.headers.get("content-type"))&&y.setContentType(we),Ee.body){const[b,S]=EI(N,Ud(wI(f)));r=II(Ee.body,SI,b,S)}}H.isString(v)||(v=v?"include":"omit");const K="credentials"in Request.prototype;k=new Request(e,{...T,signal:R,method:t.toUpperCase(),headers:y.normalize().toJSON(),body:r,duplex:"half",credentials:K?v:void 0});let te=await fetch(k);const Z=Pg&&(p==="stream"||p==="response");if(Pg&&(h||Z&&L)){const Ee={};["status","statusText","headers"].forEach(P=>{Ee[P]=te[P]});const we=H.toFiniteNumber(te.headers.get("content-length")),[b,S]=h&&EI(we,Ud(wI(h),!0))||[];te=new Response(II(te.body,SI,b,()=>{S&&S(),L&&L()}),Ee)}p=p||"text";let oe=await jd[H.findKey(jd,p)||"text"](te,n);return!Z&&L&&L(),await new Promise((Ee,we)=>{IA(Ee,we,{data:oe,headers:Pn.from(te.headers),status:te.status,statusText:te.statusText,config:n,request:k})})}catch(K){throw L&&L(),K&&K.name==="TypeError"&&/fetch/i.test(K.message)?Object.assign(new Pe("Network Error",Pe.ERR_NETWORK,n,k),{cause:K.cause||K}):Pe.from(K,K&&K.code,n,k)}}),kg={http:nj,xhr:bj,fetch:Bj};H.forEach(kg,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const CI=n=>`- ${n}`,zj=n=>H.isFunction(n)||n===null||n===!1,PA={getAdapter:n=>{n=H.isArray(n)?n:[n];const{length:e}=n;let t,r;const i={};for(let a=0;a<e;a++){t=n[a];let l;if(r=t,!zj(t)&&(r=kg[(l=String(t)).toLowerCase()],r===void 0))throw new Pe(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+a]=r}if(!r){const a=Object.entries(i).map(([h,f])=>`adapter ${h} `+(f===!1?"is not supported by the environment":"is not available in the build"));let l=e?a.length>1?`since :
`+a.map(CI).join(`
`):" "+CI(a[0]):"as no adapter specified";throw new Pe("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:kg};function Dm(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new ll(null,n)}function RI(n){return Dm(n),n.headers=Pn.from(n.headers),n.data=Om.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),PA.getAdapter(n.adapter||mc.adapter)(n).then(function(r){return Dm(n),r.data=Om.call(n,n.transformResponse,r),r.headers=Pn.from(r.headers),r},function(r){return TA(r)||(Dm(n),r&&r.response&&(r.response.data=Om.call(n,n.transformResponse,r.response),r.response.headers=Pn.from(r.response.headers))),Promise.reject(r)})}const kA="1.8.4",kf={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{kf[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const AI={};kf.transitional=function(e,t,r){function i(a,l){return"[Axios v"+kA+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,h)=>{if(e===!1)throw new Pe(i(l," has been removed"+(t?" in "+t:"")),Pe.ERR_DEPRECATED);return t&&!AI[l]&&(AI[l]=!0,console.warn(i(l," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,l,h):!0}};kf.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function $j(n,e,t){if(typeof n!="object")throw new Pe("options must be an object",Pe.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let i=r.length;for(;i-- >0;){const a=r[i],l=e[a];if(l){const h=n[a],f=h===void 0||l(h,a,n);if(f!==!0)throw new Pe("option "+a+" must be "+f,Pe.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Pe("Unknown option "+a,Pe.ERR_BAD_OPTION)}}const ed={assertOptions:$j,validators:kf},Lr=ed.validators;let ho=class{constructor(e){this.defaults=e,this.interceptors={request:new yI,response:new yI}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const a=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Io(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:a}=t;r!==void 0&&ed.assertOptions(r,{silentJSONParsing:Lr.transitional(Lr.boolean),forcedJSONParsing:Lr.transitional(Lr.boolean),clarifyTimeoutError:Lr.transitional(Lr.boolean)},!1),i!=null&&(H.isFunction(i)?t.paramsSerializer={serialize:i}:ed.assertOptions(i,{encode:Lr.function,serialize:Lr.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ed.assertOptions(t,{baseUrl:Lr.spelling("baseURL"),withXsrfToken:Lr.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let l=a&&H.merge(a.common,a[t.method]);a&&H.forEach(["delete","get","head","post","put","patch","common"],k=>{delete a[k]}),t.headers=Pn.concat(l,a);const h=[];let f=!0;this.interceptors.request.forEach(function(L){typeof L.runWhen=="function"&&L.runWhen(t)===!1||(f=f&&L.synchronous,h.unshift(L.fulfilled,L.rejected))});const p=[];this.interceptors.response.forEach(function(L){p.push(L.fulfilled,L.rejected)});let y,v=0,T;if(!f){const k=[RI.bind(this),void 0];for(k.unshift.apply(k,h),k.push.apply(k,p),T=k.length,y=Promise.resolve(t);v<T;)y=y.then(k[v++],k[v++]);return y}T=h.length;let R=t;for(v=0;v<T;){const k=h[v++],L=h[v++];try{R=k(R)}catch(N){L.call(this,N);break}}try{y=RI.call(this,R)}catch(k){return Promise.reject(k)}for(v=0,T=p.length;v<T;)y=y.then(p[v++],p[v++]);return y}getUri(e){e=Io(this.defaults,e);const t=SA(e.baseURL,e.url,e.allowAbsoluteUrls);return vA(t,e.params,e.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(e){ho.prototype[e]=function(t,r){return this.request(Io(r||{},{method:e,url:t,data:(r||{}).data}))}});H.forEach(["post","put","patch"],function(e){function t(r){return function(a,l,h){return this.request(Io(h||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}ho.prototype[e]=t(),ho.prototype[e+"Form"]=t(!0)});let Wj=class NA{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(a){t=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(h=>{r.subscribe(h),a=h}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},e(function(a,l,h){r.reason||(r.reason=new ll(a,l,h),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new NA(function(i){e=i}),cancel:e}}};function Hj(n){return function(t){return n.apply(null,t)}}function qj(n){return H.isObject(n)&&n.isAxiosError===!0}const Ng={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ng).forEach(([n,e])=>{Ng[e]=n});function xA(n){const e=new ho(n),t=lA(ho.prototype.request,e);return H.extend(t,ho.prototype,e,{allOwnKeys:!0}),H.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return xA(Io(n,i))},t}const ft=xA(mc);ft.Axios=ho;ft.CanceledError=ll;ft.CancelToken=Wj;ft.isCancel=TA;ft.VERSION=kA;ft.toFormData=Af;ft.AxiosError=Pe;ft.Cancel=ft.CanceledError;ft.all=function(e){return Promise.all(e)};ft.spread=Hj;ft.isAxiosError=qj;ft.mergeConfig=Io;ft.AxiosHeaders=Pn;ft.formToJSON=n=>wA(H.isHTMLForm(n)?new FormData(n):n);ft.getAdapter=PA.getAdapter;ft.HttpStatusCode=Ng;ft.default=ft;const{Axios:dB,AxiosError:fB,CanceledError:pB,isCancel:mB,CancelToken:gB,VERSION:_B,all:yB,Cancel:vB,isAxiosError:EB,spread:wB,toFormData:TB,AxiosHeaders:IB,HttpStatusCode:SB,formToJSON:CB,getAdapter:RB,mergeConfig:AB}=ft,Gj=()=>z.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[z.jsx("h1",{className:"text-4xl font-bold mb-4 text-purple-800",children:"Home"}),z.jsx("p",{className:"text-lg text-gray-700",children:"Welcome to GameLinked"})]}),Ku=({children:n,className:e})=>z.jsx("div",{className:`bg-white rounded-lg shadow-lg p-4 ${e}`,children:n}),So=({children:n,onClick:e,className:t})=>z.jsx("button",{onClick:e,className:`px-4 py-2 rounded-lg ${t}`,children:n}),Kj=({user:n})=>{const[e,t]=re.useState(null),[r,i]=re.useState(!0);return re.useEffect(()=>{(async()=>{if(n)try{const l=el(co,"users",n.uid),h=await uC(l);h.exists()?t(h.data()):alert("User not found")}catch(l){alert("Error fetching profile: "+l.message)}finally{i(!1)}else i(!1)})()},[n]),r?z.jsx("div",{children:"Loading..."}):z.jsx("div",{className:"p-4",children:z.jsxs(Ku,{className:"mb-4",children:[z.jsxs("div",{className:"flex items-center",children:[z.jsx("div",{className:"w-16 h-16 bg-gray-300 rounded-full mr-4"}),z.jsxs("div",{children:[z.jsx("h2",{className:"text-xl font-bold",children:e.displayName}),z.jsx("p",{className:"text-gray-600",children:e.bio}),z.jsx(So,{className:"bg-purple-600 text-white mt-1",children:"Edit Profile"})]})]}),z.jsxs("div",{className:"mt-4",children:[z.jsx("h3",{className:"font-bold",children:"Gaming Activity"}),z.jsxs("p",{children:["Games: ",e.games.join(", ")||"None"]}),z.jsxs("p",{children:["K/D: ",e.stats.kd]}),z.jsxs("p",{children:["Win Rate: ",e.stats.winRate,"%"]}),z.jsxs("p",{children:["Matches Played: ",e.stats.matches]})]}),z.jsxs("div",{className:"mt-4",children:[z.jsx("h3",{className:"font-bold",children:"Clips"}),z.jsx("div",{className:"grid grid-cols-2 gap-2",children:e.clips.map((a,l)=>z.jsx("div",{className:"w-full h-24 bg-gray-300 rounded-lg"},l))})]})]})})},Qj=({user:n})=>{const[e,t]=re.useState([]),[r,i]=re.useState(""),[a,l]=re.useState(""),[h,f]=re.useState(!0);re.useEffect(()=>{(async()=>{try{const T=await JD(aT(co,"scrims"));t(T.docs.map(R=>({id:R.id,...R.data()})))}catch(T){alert("Error fetching scrims: "+T.message)}finally{f(!1)}})()},[]);const p=async()=>{if(!r||!a){alert("Please fill in all fields.");return}try{await ZD(aT(co,"scrims"),{creator:n.uid,game:r,ticketPrice:parseInt(a),participants:[n.uid],status:"pending",timestamp:tL()}),i(""),l("")}catch(v){alert("Error creating scrim: "+v.message)}},y=async(v,T)=>{try{const{data:R}=await ft.post("http://localhost:5000/api/payment",{amount:T}),k={key:'YOUR_RAZORPAY_PUBLIC_KEY" > .env',amount:R.amount,currency:"INR",name:"GameLinked Scrim",description:"Entry Fee for Scrim",order_id:R.id,handler:async()=>{try{await hC(el(co,"scrims",v),{participants:nL(n.uid),status:"active"}),alert("Scrim joined!")}catch(N){alert("Error joining scrim: "+N.message)}}};new window.Razorpay(k).open()}catch(R){alert("Error during payment: "+R.message)}};return h?z.jsx("div",{children:"Loading..."}):z.jsxs("div",{className:"p-4",children:[z.jsxs(Ku,{className:"mb-4",children:[z.jsx("h3",{className:"font-bold",children:"Create a Challenge"}),z.jsxs("div",{className:"mb-4",children:[z.jsx("label",{className:"block text-gray-600 mb-1",children:"Game"}),z.jsx("input",{type:"text",value:r,onChange:v=>i(v.target.value),placeholder:"Select Game",className:"w-full p-2 border rounded-lg"})]}),z.jsxs("div",{className:"mb-4",children:[z.jsx("label",{className:"block text-gray-600 mb-1",children:"Ticket Price (₹)"}),z.jsx("input",{type:"number",value:a,onChange:v=>l(v.target.value),placeholder:"Set Price",className:"w-full p-2 border rounded-lg"})]}),z.jsx(So,{onClick:p,className:"bg-purple-600 text-white w-full",children:"Create Challenge"})]}),z.jsx("h3",{className:"font-bold mt-4",children:"Active Scrims"}),e.map(v=>z.jsxs(Ku,{className:"mb-2",children:[z.jsxs("p",{children:["Game: ",v.game]}),z.jsxs("p",{children:["Ticket: ₹",v.ticketPrice]}),z.jsx(So,{onClick:()=>y(v.id,v.ticketPrice),className:"bg-purple-600 text-white",children:"Join Scrim"})]},v.id))]})},Yj=()=>z.jsxs("div",{className:"p-4",children:[z.jsx("h2",{className:"text-xl font-bold mb-4",children:"Feed"}),z.jsx("p",{children:"Here you can see all the posts from the community"})]}),Jj=()=>{const n=If(),e=async()=>{const t=document.getElementById("email").value,r=document.getElementById("password").value;try{await Rx(fy,t,r),n("/feed")}catch(i){alert("Login failed: "+i.message)}};return z.jsx("div",{className:"flex justify-center items-center h-screen bg-purple-100",children:z.jsxs(Ku,{className:"w-full max-w-sm",children:[z.jsx("h2",{className:"text-2xl font-bold text-purple-800 mb-4 text-center",children:"GameLinked"}),z.jsxs("div",{className:"mb-4",children:[z.jsx("label",{className:"block text-gray-600 mb-1",children:"Email"}),z.jsx("input",{type:"email",id:"email",placeholder:"Email",className:"w-full p-2 border rounded-lg"})]}),z.jsxs("div",{className:"mb-4",children:[z.jsx("label",{className:"block text-gray-600 mb-1",children:"Password"}),z.jsx("input",{type:"password",id:"password",placeholder:"Password",className:"w-full p-2 border rounded-lg"})]}),z.jsx(So,{onClick:e,className:"bg-purple-600 text-white w-full mb-2",children:"LOGIN"}),z.jsx(So,{onClick:()=>n("/signup"),className:"bg-gray-200 text-gray-800 w-full",children:"REGISTER"})]})})},Xj=()=>{const n=If(),e=async()=>{const t=document.getElementById("email").value,r=document.getElementById("password").value;try{const{user:i}=await Cx(fy,t,r),a=el(co,"users",i.uid);await XD(a,{displayName:t.split("@")[0],bio:"Gamer",games:[],stats:{kd:0,winRate:0,matches:0},clips:[],points:0,isPremium:!1}),n("/feed")}catch(i){alert("Registration failed: "+i.message)}};return z.jsx("div",{className:"flex justify-center items-center h-screen bg-purple-100",children:z.jsxs(Ku,{className:"w-full max-w-sm",children:[z.jsx("h2",{className:"text-2xl font-bold text-purple-800 mb-4 text-center",children:"Sign Up"}),z.jsxs("div",{className:"mb-4",children:[z.jsx("label",{className:"block text-gray-600 mb-1",children:"Email"}),z.jsx("input",{type:"email",id:"email",placeholder:"Email",className:"w-full p-2 border rounded-lg"})]}),z.jsxs("div",{className:"mb-4",children:[z.jsx("label",{className:"block text-gray-600 mb-1",children:"Password"}),z.jsx("input",{type:"password",id:"password",placeholder:"Password",className:"w-full p-2 border rounded-lg"})]}),z.jsx(So,{onClick:e,className:"bg-purple-600 text-white w-full mb-2",children:"SIGN UP"}),z.jsx(So,{onClick:()=>n("/login"),className:"bg-gray-200 text-gray-800 w-full",children:"BACK TO LOGIN"})]})})},Zj=()=>z.jsx("nav",{className:"bg-purple-600 text-white p-4",children:z.jsxs("div",{className:"container mx-auto flex justify-around items-center",children:[z.jsx(Ia,{to:"/feed",className:"hover:text-purple-200",children:"Feed"}),z.jsx(Ia,{to:"/challenge",className:"hover:text-purple-200",children:"Challenge"}),z.jsx(Ia,{to:"/profile",className:"hover:text-purple-200",children:"Profile"}),z.jsx(Ia,{to:"/leaderboard",className:"hover:text-purple-200",children:"Leaderboard"}),z.jsx(Ia,{to:"/messages",className:"hover:text-purple-200",children:"Messages"}),z.jsx(Ia,{to:"/premium",className:"hover:text-purple-200",children:"Premium"})]})}),eB=()=>z.jsx("header",{className:"bg-purple-600 text-white p-4",children:z.jsx("h1",{className:"text-xl font-bold",children:"GameLinked"})}),tB=()=>z.jsx("footer",{className:"bg-purple-800 text-white p-4 text-center",children:z.jsx("p",{children:"© 2025 GameLinked by Exelion"})}),nB=()=>z.jsxs("div",{className:"p-4",children:[z.jsx("h2",{className:"text-xl font-bold mb-4",children:"Leaderboard"}),z.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[z.jsxs("div",{className:"flex justify-between mb-4",children:[z.jsx("button",{className:"bg-gray-200 text-gray-800 px-3 py-1 rounded-lg",children:"Sort by Rank"}),z.jsx("button",{className:"bg-gray-200 text-gray-800 px-3 py-1 rounded-lg",children:"Sort by Points"})]}),[1,2,3].map((n,e)=>z.jsxs("div",{className:"flex items-center mb-2",children:[z.jsxs("p",{className:"font-bold mr-2",children:[n,"."]}),z.jsx("div",{className:"w-10 h-10 bg-gray-300 rounded-full mr-2"}),z.jsxs("p",{children:["Player ",n," - ",1500-n*100," Points"]})]},e))]})]}),rB=({user:n,setIsPremium:e})=>{const t=async()=>{try{const{data:r}=await ft.post("http://localhost:5000/api/payment",{amount:99}),i={key:'YOUR_RAZORPAY_PUBLIC_KEY" > .env',amount:r.amount,currency:"INR",name:"GameLinked Premium",description:"Premium Subscription",order_id:r.id,handler:async()=>{const l=el(co,"users",n.uid);await hC(l,{isPremium:!0}),e(!0),alert("Subscribed to Premium!")}};new window.Razorpay(i).open()}catch(r){alert("Error: "+r.message)}};return z.jsxs("div",{className:"p-4",children:[z.jsx("h2",{className:"text-xl font-bold mb-4",children:"Premium Subscription"}),z.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[z.jsx("h3",{className:"font-bold",children:"Upgrade to Premium"}),z.jsxs("ul",{className:"list-disc list-inside my-4",children:[z.jsx("li",{children:"No Ads"}),z.jsx("li",{children:"Verified Status"}),z.jsx("li",{children:"Exclusive Challenges"})]}),z.jsx("button",{onClick:t,className:"w-full bg-purple-600 text-white p-2 rounded-lg",children:"Subscribe Now (₹99/month)"})]})]})},iB=({user:n})=>{const[e,t]=re.useState([]),[r,i]=re.useState(null),[a,l]=re.useState([]);re.useEffect(()=>{try{const f=km(Nm,"chats"),p=nU(f,`participants/${n.uid}`),y=oI(f,v=>{const T=[];v.forEach(R=>{const k={id:R.key,...R.val()};T.push(k)}),t(T)});return()=>y()}catch(f){alert("Error: "+f.message)}},[n]),re.useEffect(()=>{try{if(!r)return;const f=km(Nm,`messages/${r.id}`),p=oI(f,y=>{const v=[];y.forEach(T=>{v.push(T.val())}),l(v)});return()=>p()}catch(f){alert("Error: "+f.message)}},[r]);const h=async()=>{try{const f=document.getElementById("messageInput").value;if(!r)return;await JF(km(Nm,`messages/${r.id}`),{sender:n.uid,content:f,timestamp:Date.now()}),document.getElementById("messageInput").value=""}catch(f){alert("Error: "+f.message)}};return z.jsxs("div",{className:"p-4",children:[z.jsx("h2",{className:"text-xl font-bold mb-4",children:"Messages"}),z.jsxs("div",{className:"flex",children:[z.jsx("div",{className:"w-1/3 bg-white rounded-lg shadow-lg p-4 mr-4",children:e.map(f=>z.jsx("div",{onClick:()=>i(f),className:"p-2 border-b cursor-pointer",children:Object.keys(f.participants).find(p=>p!==n.uid)&&z.jsx("p",{children:Object.keys(f.participants).find(p=>p!==n.uid)})},f.id))}),z.jsx("div",{className:"w-2/3 bg-white rounded-lg shadow-lg p-4",children:r?z.jsxs(z.Fragment,{children:[z.jsx("h3",{className:"font-bold mb-2",children:Object.keys(r.participants).find(f=>f!==n.uid)}),z.jsx("div",{className:"h-64 overflow-y-scroll mb-4",children:a.map((f,p)=>z.jsx("div",{className:`p-2 ${f.sender===n.uid?"text-right":""}`,children:z.jsx("p",{className:`inline-block p-2 rounded-lg ${f.sender===n.uid?"bg-purple-600 text-white":"bg-gray-200"}`,children:f.content})},p))}),z.jsxs("div",{className:"flex",children:[z.jsx("input",{id:"messageInput",type:"text",placeholder:"Type a message...",className:"w-full p-2 border rounded-lg mr-2"}),z.jsx("button",{onClick:h,className:"bg-purple-600 text-white px-3 py-2 rounded-lg",children:"Send"})]})]}):z.jsx("p",{children:"Select a chat to start messaging"})})]})]})},sB=({user:n,setIsPremium:e,isPremium:t})=>{const r=()=>!t&&z.jsx("div",{className:"bg-purple-200 p-2 text-center text-purple-800",children:z.jsx("p",{children:"🎮 Upgrade to Premium to remove ads!"})});return z.jsxs(p4,{children:[z.jsx(r,{}),z.jsx(eB,{}),z.jsxs(a4,{children:[z.jsx(pr,{path:"/login",element:n?z.jsx(lu,{to:"/home"}):z.jsx(Jj,{})}),z.jsx(pr,{path:"/signup",element:n?z.jsx(lu,{to:"/home"}):z.jsx(Xj,{})}),z.jsx(pr,{path:"/home",element:n?z.jsx(Gj,{user:n}):z.jsx(lu,{to:"/login"})}),z.jsx(pr,{path:"/profile",element:z.jsx(Kj,{user:n})}),z.jsx(pr,{path:"/challenge",element:z.jsx(Qj,{user:n})}),z.jsx(pr,{path:"/feed",element:z.jsx(Yj,{user:n})}),z.jsx(pr,{path:"/leaderboard",element:z.jsx(nB,{})}),z.jsx(pr,{path:"/premium",element:z.jsx(rB,{user:n,setIsPremium:e})}),z.jsx(pr,{path:"/messages",element:z.jsx(iB,{user:n})}),z.jsx(pr,{path:"/",element:n?z.jsx(lu,{to:"/home"}):z.jsx(lu,{to:"/login"})})]}),n&&z.jsx(Zj,{}),z.jsx(tB,{})]})};class oB extends re.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error:",e,t)}render(){return this.state.hasError?z.jsx("div",{style:{color:"red"},children:"Something went wrong."}):this.props.children}}const aB=()=>{const[n,e]=re.useState(!0),[t,r]=re.useState(null),[i,a]=re.useState(null),[l,h]=re.useState(!1);return re.useEffect(()=>{e(!0),r(null);const f=kx(fy,async p=>{if(a(p),p){const y=el(co,"users",p.uid);uC(y).then(v=>{v.exists()&&h(v.data().isPremium||!1)}).catch(v=>{r("Error loading user data"),console.error("Error loading user data:",v)}).finally(()=>{e(!1)})}});return()=>f()},[]),z.jsxs("div",{className:"min-h-screen bg-gray-100",children:[n&&z.jsx("div",{className:"flex justify-center items-center h-screen",children:z.jsx("p",{children:"loading..."})}),t&&z.jsx("div",{className:"flex justify-center items-center h-screen",children:z.jsx("p",{children:t})}),!n&&!t&&z.jsx(oB,{children:z.jsx(sB,{user:i,setIsPremium:h,isPremium:l})})]})};HP.createRoot(document.getElementById("root")).render(z.jsx(kI.StrictMode,{children:z.jsx(aB,{})}));

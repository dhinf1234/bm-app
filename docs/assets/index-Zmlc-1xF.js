(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function k0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vd={exports:{}},Ua={},wd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function R0(){if(Cg)return Ae;Cg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=I&&V[I]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,K={};function B(V,q,ue){this.props=V,this.context=q,this.refs=K,this.updater=ue||j}B.prototype.isReactComponent={},B.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function me(){}me.prototype=B.prototype;function ce(V,q,ue){this.props=V,this.context=q,this.refs=K,this.updater=ue||j}var he=ce.prototype=new me;he.constructor=ce,H(he,B.prototype),he.isPureReactComponent=!0;var Ee=Array.isArray,Qe=Object.prototype.hasOwnProperty,ke={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(V,q,ue){var Te,Se={},Ne=null,be=null;if(q!=null)for(Te in q.ref!==void 0&&(be=q.ref),q.key!==void 0&&(Ne=""+q.key),q)Qe.call(q,Te)&&!D.hasOwnProperty(Te)&&(Se[Te]=q[Te]);var Le=arguments.length-2;if(Le===1)Se.children=ue;else if(1<Le){for(var ze=Array(Le),vt=0;vt<Le;vt++)ze[vt]=arguments[vt+2];Se.children=ze}if(V&&V.defaultProps)for(Te in Le=V.defaultProps,Le)Se[Te]===void 0&&(Se[Te]=Le[Te]);return{$$typeof:r,type:V,key:Ne,ref:be,props:Se,_owner:ke.current}}function k(V,q){return{$$typeof:r,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function O(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ue){return q[ue]})}var x=/\/+/g;function A(V,q){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):q.toString(36)}function rt(V,q,ue,Te,Se){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(Ne){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case r:case e:be=!0}}if(be)return be=V,Se=Se(be),V=Te===""?"."+A(be,0):Te,Ee(Se)?(ue="",V!=null&&(ue=V.replace(x,"$&/")+"/"),rt(Se,q,ue,"",function(vt){return vt})):Se!=null&&(P(Se)&&(Se=k(Se,ue+(!Se.key||be&&be.key===Se.key?"":(""+Se.key).replace(x,"$&/")+"/")+V)),q.push(Se)),1;if(be=0,Te=Te===""?".":Te+":",Ee(V))for(var Le=0;Le<V.length;Le++){Ne=V[Le];var ze=Te+A(Ne,Le);be+=rt(Ne,q,ue,ze,Se)}else if(ze=R(V),typeof ze=="function")for(V=ze.call(V),Le=0;!(Ne=V.next()).done;)Ne=Ne.value,ze=Te+A(Ne,Le++),be+=rt(Ne,q,ue,ze,Se);else if(Ne==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return be}function Ot(V,q,ue){if(V==null)return V;var Te=[],Se=0;return rt(V,Te,"","",function(Ne){return q.call(ue,Ne,Se++)}),Te}function Vt(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(ue){(V._status===0||V._status===-1)&&(V._status=1,V._result=ue)},function(ue){(V._status===0||V._status===-1)&&(V._status=2,V._result=ue)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},Z={transition:null},de={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ke};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Ot,forEach:function(V,q,ue){Ot(V,function(){q.apply(this,arguments)},ue)},count:function(V){var q=0;return Ot(V,function(){q++}),q},toArray:function(V){return Ot(V,function(q){return q})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ae.Component=B,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ce,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ae.act=re,Ae.cloneElement=function(V,q,ue){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Te=H({},V.props),Se=V.key,Ne=V.ref,be=V._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,be=ke.current),q.key!==void 0&&(Se=""+q.key),V.type&&V.type.defaultProps)var Le=V.type.defaultProps;for(ze in q)Qe.call(q,ze)&&!D.hasOwnProperty(ze)&&(Te[ze]=q[ze]===void 0&&Le!==void 0?Le[ze]:q[ze])}var ze=arguments.length-2;if(ze===1)Te.children=ue;else if(1<ze){Le=Array(ze);for(var vt=0;vt<ze;vt++)Le[vt]=arguments[vt+2];Te.children=Le}return{$$typeof:r,type:V.type,key:Se,ref:Ne,props:Te,_owner:be}},Ae.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ae.createElement=S,Ae.createFactory=function(V){var q=S.bind(null,V);return q.type=V,q},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(V){return{$$typeof:f,render:V}},Ae.isValidElement=P,Ae.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Vt}},Ae.memo=function(V,q){return{$$typeof:_,type:V,compare:q===void 0?null:q}},Ae.startTransition=function(V){var q=Z.transition;Z.transition={};try{V()}finally{Z.transition=q}},Ae.unstable_act=re,Ae.useCallback=function(V,q){return Ue.current.useCallback(V,q)},Ae.useContext=function(V){return Ue.current.useContext(V)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Ae.useEffect=function(V,q){return Ue.current.useEffect(V,q)},Ae.useId=function(){return Ue.current.useId()},Ae.useImperativeHandle=function(V,q,ue){return Ue.current.useImperativeHandle(V,q,ue)},Ae.useInsertionEffect=function(V,q){return Ue.current.useInsertionEffect(V,q)},Ae.useLayoutEffect=function(V,q){return Ue.current.useLayoutEffect(V,q)},Ae.useMemo=function(V,q){return Ue.current.useMemo(V,q)},Ae.useReducer=function(V,q,ue){return Ue.current.useReducer(V,q,ue)},Ae.useRef=function(V){return Ue.current.useRef(V)},Ae.useState=function(V){return Ue.current.useState(V)},Ae.useSyncExternalStore=function(V,q,ue){return Ue.current.useSyncExternalStore(V,q,ue)},Ae.useTransition=function(){return Ue.current.useTransition()},Ae.version="18.3.1",Ae}var Pg;function mf(){return Pg||(Pg=1,wd.exports=R0()),wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function C0(){if(Ng)return Ua;Ng=1;var r=mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,I={},R=null,j=null;_!==void 0&&(R=""+_),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(I[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)I[w]===void 0&&(I[w]=g[w]);return{$$typeof:e,type:f,key:R,ref:j,props:I,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=h,Ua.jsxs=h,Ua}var Dg;function P0(){return Dg||(Dg=1,vd.exports=C0()),vd.exports}var X=P0(),Ke=mf();const N0=k0(Ke);var Lu={},Ed={exports:{}},en={},Td={exports:{}},Id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function D0(){return Og||(Og=1,(function(r){function e(Z,de){var re=Z.length;Z.push(de);e:for(;0<re;){var V=re-1>>>1,q=Z[V];if(0<o(q,de))Z[V]=de,Z[re]=q,re=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var de=Z[0],re=Z.pop();if(re!==de){Z[0]=re;e:for(var V=0,q=Z.length,ue=q>>>1;V<ue;){var Te=2*(V+1)-1,Se=Z[Te],Ne=Te+1,be=Z[Ne];if(0>o(Se,re))Ne<q&&0>o(be,Se)?(Z[V]=be,Z[Ne]=re,V=Ne):(Z[V]=Se,Z[Te]=re,V=Te);else if(Ne<q&&0>o(be,re))Z[V]=be,Z[Ne]=re,V=Ne;else break e}}return de}function o(Z,de){var re=Z.sortIndex-de.sortIndex;return re!==0?re:Z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,I=null,R=3,j=!1,H=!1,K=!1,B=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(Z){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=Z)s(_),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(_)}}function Ee(Z){if(K=!1,he(Z),!H)if(t(g)!==null)H=!0,Vt(Qe);else{var de=t(_);de!==null&&Ue(Ee,de.startTime-Z)}}function Qe(Z,de){H=!1,K&&(K=!1,me(S),S=-1),j=!0;var re=R;try{for(he(de),I=t(g);I!==null&&(!(I.expirationTime>de)||Z&&!O());){var V=I.callback;if(typeof V=="function"){I.callback=null,R=I.priorityLevel;var q=V(I.expirationTime<=de);de=r.unstable_now(),typeof q=="function"?I.callback=q:I===t(g)&&s(g),he(de)}else s(g);I=t(g)}if(I!==null)var ue=!0;else{var Te=t(_);Te!==null&&Ue(Ee,Te.startTime-de),ue=!1}return ue}finally{I=null,R=re,j=!1}}var ke=!1,D=null,S=-1,k=5,P=-1;function O(){return!(r.unstable_now()-P<k)}function x(){if(D!==null){var Z=r.unstable_now();P=Z;var de=!0;try{de=D(!0,Z)}finally{de?A():(ke=!1,D=null)}}else ke=!1}var A;if(typeof ce=="function")A=function(){ce(x)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ot=rt.port2;rt.port1.onmessage=x,A=function(){Ot.postMessage(null)}}else A=function(){B(x,0)};function Vt(Z){D=Z,ke||(ke=!0,A())}function Ue(Z,de){S=B(function(){Z(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){H||j||(H=!0,Vt(Qe))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(R){case 1:case 2:case 3:var de=3;break;default:de=R}var re=R;R=de;try{return Z()}finally{R=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,de){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var re=R;R=Z;try{return de()}finally{R=re}},r.unstable_scheduleCallback=function(Z,de,re){var V=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,Z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=re+q,Z={id:w++,callback:de,priorityLevel:Z,startTime:re,expirationTime:q,sortIndex:-1},re>V?(Z.sortIndex=re,e(_,Z),t(g)===null&&Z===t(_)&&(K?(me(S),S=-1):K=!0,Ue(Ee,re-V))):(Z.sortIndex=q,e(g,Z),H||j||(H=!0,Vt(Qe))),Z},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Z){var de=R;return function(){var re=R;R=de;try{return Z.apply(this,arguments)}finally{R=re}}}})(Id)),Id}var Vg;function O0(){return Vg||(Vg=1,Td.exports=D0()),Td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function V0(){if(xg)return en;xg=1;var r=mf(),e=O0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},I={};function R(n){return g.call(I,n)?!0:g.call(w,n)?!1:_.test(n)?I[n]=!0:(w[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function H(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function K(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new K(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new K(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new K(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new K(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new K(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new K(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new K(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new K(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new K(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(me,ce);B[i]=new K(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(me,ce);B[i]=new K(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(me,ce);B[i]=new K(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!0,!0)});function he(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(H(i,a,d,c)&&(a=null),c||d===null?R(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qe=Symbol.for("react.element"),ke=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),Z=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,V;function q(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var ue=!1;function Te(n,i){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,T=m.length-1;1<=v&&0<=T&&d[v]!==m[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==m[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==m[T]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Se(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case ke:return"Portal";case k:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case rt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case x:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ot:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case Vt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(n){var i=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function fr(n){n._valueTracker||(n._valueTracker=vt(n))}function Ss(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function zr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Vi(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function As(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Le(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ho(n,i){i=i.checked,i!=null&&he(n,"checked",i,!1)}function Wo(n,i){Ho(n,i);var a=Le(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ks(n,i.type,a):i.hasOwnProperty("defaultValue")&&ks(n,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function El(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ks(n,i,a){(i!=="number"||zr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var pr=Array.isArray;function mr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ko(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Rs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(pr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Le(a)}}function Cs(n,i){var a=Le(i.value),c=Le(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Go(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ft(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ft(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gr,Qo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=gr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function $r(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bi=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(n){bi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xi[i]=xi[n]})});function Yo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||xi.hasOwnProperty(n)&&xi[n]?(""+i).trim():i+"px"}function Xo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Yo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Jo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zo(n,i){if(i){if(Jo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ea(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=null;function Ps(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ns=null,dn=null,Kn=null;function Ds(n){if(n=Sa(n)){if(typeof Ns!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xl(i),Ns(n.stateNode,n.type,i))}}function Gn(n){dn?Kn?Kn.push(n):Kn=[n]:dn=n}function ta(){if(dn){var n=dn,i=Kn;if(Kn=dn=null,Ds(n),i)for(n=0;n<i.length;n++)Ds(i[n])}}function Mi(n,i){return n(i)}function na(){}var yr=!1;function ra(n,i,a){if(yr)return n(i,a);yr=!0;try{return Mi(n,i,a)}finally{yr=!1,(dn!==null||Kn!==null)&&(na(),ta())}}function it(n,i){var a=n.stateNode;if(a===null)return null;var c=Xl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Os=!1;if(f)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Os=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Os=!1}function Fi(n,i,a,c,d,m,v,T,C){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(G){this.onError(G)}}var Ui=!1,Vs=null,Rn=!1,ia=null,Kc={onError:function(n){Ui=!0,Vs=n}};function xs(n,i,a,c,d,m,v,T,C){Ui=!1,Vs=null,Fi.apply(Kc,arguments)}function Tl(n,i,a,c,d,m,v,T,C){if(xs.apply(this,arguments),Ui){if(Ui){var F=Vs;Ui=!1,Vs=null}else throw Error(t(198));Rn||(Rn=!0,ia=F)}}function Cn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ji(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Pn(n){if(Cn(n)!==n)throw Error(t(188))}function Il(n){var i=n.alternate;if(!i){if(i=Cn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Pn(d),n;if(m===c)return Pn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=m;break}if(T===c){v=!0,c=d,a=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===a){v=!0,a=m,c=d;break}if(T===c){v=!0,c=m,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function sa(n){return n=Il(n),n!==null?bs(n):null}function bs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=bs(n);if(i!==null)return i;n=n.sibling}return null}var Ls=e.unstable_scheduleCallback,oa=e.unstable_cancelCallback,Sl=e.unstable_shouldYield,Gc=e.unstable_requestPaint,$e=e.unstable_now,Al=e.unstable_getCurrentPriorityLevel,Bi=e.unstable_ImmediatePriority,qr=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,aa=e.unstable_LowPriority,kl=e.unstable_IdlePriority,zi=null,rn=null;function Rl(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(zi,n,void 0,(n.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Pl,la=Math.log,Cl=Math.LN2;function Pl(n){return n>>>=0,n===0?32:31-(la(n)/Cl|0)|0}var Ms=64,Fs=4194304;function Hr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $i(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Hr(T):(m&=v,m!==0&&(c=Hr(m)))}else v=a&~d,v!==0?c=Hr(v):m!==0&&(c=Hr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-$t(i),d=1<<a,c|=n[a],i&=~d;return c}function Qc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-$t(m),T=1<<v,C=d[v];C===-1?((T&a)===0||(T&c)!==0)&&(d[v]=Qc(T,i)):C<=i&&(n.expiredLanes|=T),m&=~T}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qi(){var n=Ms;return Ms<<=1,(Ms&4194240)===0&&(Ms=64),n}function Wr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Kr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-$t(i),n[i]=a}function je(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-$t(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Gr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-$t(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function Qr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Nl,Us,Dl,Ol,Vl,ua=!1,Qn=[],At=null,Nn=null,Dn=null,Yr=new Map,pn=new Map,Yn=[],Yc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(n,i){switch(n){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Yr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(i.pointerId)}}function Kt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Sa(i),i!==null&&Us(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Xc(n,i,a,c,d){switch(i){case"focusin":return At=Kt(At,n,i,a,c,d),!0;case"dragenter":return Nn=Kt(Nn,n,i,a,c,d),!0;case"mouseover":return Dn=Kt(Dn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Yr.set(m,Kt(Yr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,pn.set(m,Kt(pn.get(m)||null,n,i,a,c,d)),!0}return!1}function bl(n){var i=Qi(n.target);if(i!==null){var a=Cn(i);if(a!==null){if(i=a.tag,i===13){if(i=ji(a),i!==null){n.blockedOn=i,Vl(n.priority,function(){Dl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=js(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Li=c,a.target.dispatchEvent(c),Li=null}else return i=Sa(a),i!==null&&Us(i),n.blockedOn=a,!1;i.shift()}return!0}function Hi(n,i,a){vr(n)&&a.delete(i)}function Ll(){ua=!1,At!==null&&vr(At)&&(At=null),Nn!==null&&vr(Nn)&&(Nn=null),Dn!==null&&vr(Dn)&&(Dn=null),Yr.forEach(Hi),pn.forEach(Hi)}function On(n,i){n.blockedOn===i&&(n.blockedOn=null,ua||(ua=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ll)))}function Vn(n){function i(d){return On(d,n)}if(0<Qn.length){On(Qn[0],n);for(var a=1;a<Qn.length;a++){var c=Qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(At!==null&&On(At,n),Nn!==null&&On(Nn,n),Dn!==null&&On(Dn,n),Yr.forEach(i),pn.forEach(i),a=0;a<Yn.length;a++)c=Yn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)bl(a),a.blockedOn===null&&Yn.shift()}var wr=Ee.ReactCurrentBatchConfig,Xr=!0;function Ye(n,i,a,c){var d=Pe,m=wr.transition;wr.transition=null;try{Pe=1,ca(n,i,a,c)}finally{Pe=d,wr.transition=m}}function Jc(n,i,a,c){var d=Pe,m=wr.transition;wr.transition=null;try{Pe=4,ca(n,i,a,c)}finally{Pe=d,wr.transition=m}}function ca(n,i,a,c){if(Xr){var d=js(n,i,a,c);if(d===null)uh(n,i,c,Wi,a),xl(n,c);else if(Xc(d,n,i,a,c))c.stopPropagation();else if(xl(n,c),i&4&&-1<Yc.indexOf(n)){for(;d!==null;){var m=Sa(d);if(m!==null&&Nl(m),m=js(n,i,a,c),m===null&&uh(n,i,c,Wi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else uh(n,i,c,null,a)}}var Wi=null;function js(n,i,a,c){if(Wi=null,n=Ps(c),n=Qi(n),n!==null)if(i=Cn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ji(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Wi=n,null}function ha(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Al()){case Bi:return 1;case qr:return 4;case fn:case aa:return 16;case kl:return 536870912;default:return 16}default:return 16}}var on=null,Bs=null,Gt=null;function da(){if(Gt)return Gt;var n,i=Bs,a=i.length,c,d="value"in on?on.value:on.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function zs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Xn(){return!0}function fa(){return!1}function kt(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xn:fa,this.isPropagationStopped=fa,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),i}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=kt(xn),Jn=re({},xn,{view:0,detail:0}),Zc=kt(Jn),qs,Er,Jr,Ki=re({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Jr&&(Jr&&n.type==="mousemove"?(qs=n.screenX-Jr.screenX,Er=n.screenY-Jr.screenY):Er=qs=0,Jr=n),qs)},movementY:function(n){return"movementY"in n?n.movementY:Er}}),Hs=kt(Ki),pa=re({},Ki,{dataTransfer:0}),Ml=kt(pa),Ws=re({},Jn,{relatedTarget:0}),Ks=kt(Ws),Fl=re({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=kt(Fl),Ul=re({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jl=kt(Ul),Bl=re({},xn,{data:0}),ma=kt(Bl),Gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $l(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=zl[n])?!!i[n]:!1}function Zn(){return $l}var u=re({},Jn,{key:function(n){if(n.key){var i=Gs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=zs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(n){return n.type==="keypress"?zs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=kt(u),y=re({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=kt(y),b=re({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),U=kt(b),J=re({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=kt(J),mt=re({},Ki,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=kt(mt),wt=[9,13,27,32],lt=f&&"CompositionEvent"in window,mn=null;f&&"documentMode"in document&&(mn=document.documentMode);var an=f&&"TextEvent"in window&&!mn,Gi=f&&(!lt||mn&&8<mn&&11>=mn),Qs=" ",Tp=!1;function Ip(n,i){switch(n){case"keyup":return wt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function IE(n,i){switch(n){case"compositionend":return Sp(i);case"keypress":return i.which!==32?null:(Tp=!0,Qs);case"textInput":return n=i.data,n===Qs&&Tp?null:n;default:return null}}function SE(n,i){if(Ys)return n==="compositionend"||!lt&&Ip(n,i)?(n=da(),Gt=Bs=on=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gi&&i.locale!=="ko"?null:i.data;default:return null}}var AE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!AE[n.type]:i==="textarea"}function kp(n,i,a,c){Gn(c),i=Gl(i,"onChange"),0<i.length&&(a=new $s("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ga=null,ya=null;function kE(n){qp(n,0)}function ql(n){var i=to(n);if(Ss(i))return n}function RE(n,i){if(n==="change")return i}var Rp=!1;if(f){var eh;if(f){var th="oninput"in document;if(!th){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),th=typeof Cp.oninput=="function"}eh=th}else eh=!1;Rp=eh&&(!document.documentMode||9<document.documentMode)}function Pp(){ga&&(ga.detachEvent("onpropertychange",Np),ya=ga=null)}function Np(n){if(n.propertyName==="value"&&ql(ya)){var i=[];kp(i,ya,n,Ps(n)),ra(kE,i)}}function CE(n,i,a){n==="focusin"?(Pp(),ga=i,ya=a,ga.attachEvent("onpropertychange",Np)):n==="focusout"&&Pp()}function PE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ql(ya)}function NE(n,i){if(n==="click")return ql(i)}function DE(n,i){if(n==="input"||n==="change")return ql(i)}function OE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bn=typeof Object.is=="function"?Object.is:OE;function _a(n,i){if(bn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!bn(n[d],i[d]))return!1}return!0}function Dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Op(n,i){var a=Dp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dp(a)}}function Vp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Vp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function xp(){for(var n=window,i=zr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=zr(n.document)}return i}function nh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function VE(n){var i=xp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Vp(a.ownerDocument.documentElement,a)){if(c!==null&&nh(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Op(a,m);var v=Op(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var xE=f&&"documentMode"in document&&11>=document.documentMode,Xs=null,rh=null,va=null,ih=!1;function bp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ih||Xs==null||Xs!==zr(c)||(c=Xs,"selectionStart"in c&&nh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),va&&_a(va,c)||(va=c,c=Gl(rh,"onSelect"),0<c.length&&(i=new $s("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Xs)))}function Hl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Js={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},sh={},Lp={};f&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Wl(n){if(sh[n])return sh[n];if(!Js[n])return n;var i=Js[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Lp)return sh[n]=i[a];return n}var Mp=Wl("animationend"),Fp=Wl("animationiteration"),Up=Wl("animationstart"),jp=Wl("transitionend"),Bp=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(n,i){Bp.set(n,i),l(i,[n])}for(var oh=0;oh<zp.length;oh++){var ah=zp[oh],bE=ah.toLowerCase(),LE=ah[0].toUpperCase()+ah.slice(1);Zr(bE,"on"+LE)}Zr(Mp,"onAnimationEnd"),Zr(Fp,"onAnimationIteration"),Zr(Up,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(jp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ME=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function $p(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Tl(c,i,void 0,n),n.currentTarget=null}function qp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==m&&d.isPropagationStopped())break e;$p(d,T,F),m=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,F=T.currentTarget,T=T.listener,C!==m&&d.isPropagationStopped())break e;$p(d,T,F),m=C}}}if(Rn)throw n=ia,Rn=!1,ia=null,n}function He(n,i){var a=i[mh];a===void 0&&(a=i[mh]=new Set);var c=n+"__bubble";a.has(c)||(Hp(i,n,2,!1),a.add(c))}function lh(n,i,a){var c=0;i&&(c|=4),Hp(a,n,c,i)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[Kl]){n[Kl]=!0,s.forEach(function(a){a!=="selectionchange"&&(ME.has(a)||lh(a,!1,n),lh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Kl]||(i[Kl]=!0,lh("selectionchange",!1,i))}}function Hp(n,i,a,c){switch(ha(i)){case 1:var d=Ye;break;case 4:d=Jc;break;default:d=ca}a=d.bind(null,i,a,n),d=void 0,!Os||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function uh(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Qi(T),v===null)return;if(C=v.tag,C===5||C===6){c=m=v;continue e}T=T.parentNode}}c=c.return}ra(function(){var F=m,G=Ps(a),Q=[];e:{var W=Bp.get(n);if(W!==void 0){var te=$s,se=n;switch(n){case"keypress":if(zs(a)===0)break e;case"keydown":case"keyup":te=p;break;case"focusin":se="focus",te=Ks;break;case"focusout":se="blur",te=Ks;break;case"beforeblur":case"afterblur":te=Ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Ml;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=U;break;case Mp:case Fp:case Up:te=Tr;break;case jp:te=Fe;break;case"scroll":te=Zc;break;case"wheel":te=De;break;case"copy":case"cut":case"paste":te=jl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var oe=(i&4)!==0,st=!oe&&n==="scroll",L=oe?W!==null?W+"Capture":null:W;oe=[];for(var N=F,M;N!==null;){M=N;var Y=M.stateNode;if(M.tag===5&&Y!==null&&(M=Y,L!==null&&(Y=it(N,L),Y!=null&&oe.push(Ta(N,Y,M)))),st)break;N=N.return}0<oe.length&&(W=new te(W,se,null,a,G),Q.push({event:W,listeners:oe}))}}if((i&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",W&&a!==Li&&(se=a.relatedTarget||a.fromElement)&&(Qi(se)||se[Ir]))break e;if((te||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=F,se=se?Qi(se):null,se!==null&&(st=Cn(se),se!==st||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=F),te!==se)){if(oe=Hs,Y="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=E,Y="onPointerLeave",L="onPointerEnter",N="pointer"),st=te==null?W:to(te),M=se==null?W:to(se),W=new oe(Y,N+"leave",te,a,G),W.target=st,W.relatedTarget=M,Y=null,Qi(G)===F&&(oe=new oe(L,N+"enter",se,a,G),oe.target=M,oe.relatedTarget=st,Y=oe),st=Y,te&&se)t:{for(oe=te,L=se,N=0,M=oe;M;M=Zs(M))N++;for(M=0,Y=L;Y;Y=Zs(Y))M++;for(;0<N-M;)oe=Zs(oe),N--;for(;0<M-N;)L=Zs(L),M--;for(;N--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=Zs(oe),L=Zs(L)}oe=null}else oe=null;te!==null&&Wp(Q,W,te,oe,!1),se!==null&&st!==null&&Wp(Q,st,se,oe,!0)}}e:{if(W=F?to(F):window,te=W.nodeName&&W.nodeName.toLowerCase(),te==="select"||te==="input"&&W.type==="file")var ae=RE;else if(Ap(W))if(Rp)ae=DE;else{ae=PE;var fe=CE}else(te=W.nodeName)&&te.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ae=NE);if(ae&&(ae=ae(n,F))){kp(Q,ae,a,G);break e}fe&&fe(n,W,F),n==="focusout"&&(fe=W._wrapperState)&&fe.controlled&&W.type==="number"&&ks(W,"number",W.value)}switch(fe=F?to(F):window,n){case"focusin":(Ap(fe)||fe.contentEditable==="true")&&(Xs=fe,rh=F,va=null);break;case"focusout":va=rh=Xs=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,bp(Q,a,G);break;case"selectionchange":if(xE)break;case"keydown":case"keyup":bp(Q,a,G)}var pe;if(lt)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ys?Ip(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Gi&&a.locale!=="ko"&&(Ys||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ys&&(pe=da()):(on=G,Bs="value"in on?on.value:on.textContent,Ys=!0)),fe=Gl(F,_e),0<fe.length&&(_e=new ma(_e,n,null,a,G),Q.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=Sp(a),pe!==null&&(_e.data=pe)))),(pe=an?IE(n,a):SE(n,a))&&(F=Gl(F,"onBeforeInput"),0<F.length&&(G=new ma("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:F}),G.data=pe))}qp(Q,i)})}function Ta(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Gl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=it(n,a),m!=null&&c.unshift(Ta(n,m,d)),m=it(n,i),m!=null&&c.push(Ta(n,m,d))),n=n.return}return c}function Zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wp(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=it(a,m),C!=null&&v.unshift(Ta(a,C,T))):d||(C=it(a,m),C!=null&&v.push(Ta(a,C,T)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var FE=/\r\n?/g,UE=/\u0000|\uFFFD/g;function Kp(n){return(typeof n=="string"?n:""+n).replace(FE,`
`).replace(UE,"")}function Ql(n,i,a){if(i=Kp(i),Kp(n)!==i&&a)throw Error(t(425))}function Yl(){}var ch=null,hh=null;function dh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,jE=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,BE=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(n){return Gp.resolve(null).then(n).catch(zE)}:fh;function zE(n){setTimeout(function(){throw n})}function ph(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Vn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Vn(i)}function ei(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Qp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var eo=Math.random().toString(36).slice(2),er="__reactFiber$"+eo,Ia="__reactProps$"+eo,Ir="__reactContainer$"+eo,mh="__reactEvents$"+eo,$E="__reactListeners$"+eo,qE="__reactHandles$"+eo;function Qi(n){var i=n[er];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ir]||a[er]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Qp(n);n!==null;){if(a=n[er])return a;n=Qp(n)}return i}n=a,a=n.parentNode}return null}function Sa(n){return n=n[er]||n[Ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function to(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xl(n){return n[Ia]||null}var gh=[],no=-1;function ti(n){return{current:n}}function We(n){0>no||(n.current=gh[no],gh[no]=null,no--)}function qe(n,i){no++,gh[no]=n.current,n.current=i}var ni={},xt=ti(ni),Qt=ti(!1),Yi=ni;function ro(n,i){var a=n.type.contextTypes;if(!a)return ni;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function Jl(){We(Qt),We(xt)}function Yp(n,i,a){if(xt.current!==ni)throw Error(t(168));qe(xt,i),qe(Qt,a)}function Xp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return re({},a,c)}function Zl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ni,Yi=xt.current,qe(xt,n),qe(Qt,Qt.current),!0}function Jp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Xp(n,i,Yi),c.__reactInternalMemoizedMergedChildContext=n,We(Qt),We(xt),qe(xt,n)):We(Qt),qe(Qt,a)}var Sr=null,eu=!1,yh=!1;function Zp(n){Sr===null?Sr=[n]:Sr.push(n)}function HE(n){eu=!0,Zp(n)}function ri(){if(!yh&&Sr!==null){yh=!0;var n=0,i=Pe;try{var a=Sr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Sr=null,eu=!1}catch(d){throw Sr!==null&&(Sr=Sr.slice(n+1)),Ls(Bi,ri),d}finally{Pe=i,yh=!1}}return null}var io=[],so=0,tu=null,nu=0,gn=[],yn=0,Xi=null,Ar=1,kr="";function Ji(n,i){io[so++]=nu,io[so++]=tu,tu=n,nu=i}function em(n,i,a){gn[yn++]=Ar,gn[yn++]=kr,gn[yn++]=Xi,Xi=n;var c=Ar;n=kr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var m=32-$t(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Ar=1<<32-$t(i)+d|a<<d|c,kr=m+n}else Ar=1<<m|a<<d|c,kr=n}function _h(n){n.return!==null&&(Ji(n,1),em(n,1,0))}function vh(n){for(;n===tu;)tu=io[--so],io[so]=null,nu=io[--so],io[so]=null;for(;n===Xi;)Xi=gn[--yn],gn[yn]=null,kr=gn[--yn],gn[yn]=null,Ar=gn[--yn],gn[yn]=null}var ln=null,un=null,Xe=!1,Ln=null;function tm(n,i){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function nm(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ln=n,un=ei(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ln=n,un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Xi!==null?{id:Ar,overflow:kr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function wh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Eh(n){if(Xe){var i=un;if(i){var a=i;if(!nm(n,i)){if(wh(n))throw Error(t(418));i=ei(a.nextSibling);var c=ln;i&&nm(n,i)?tm(c,a):(n.flags=n.flags&-4097|2,Xe=!1,ln=n)}}else{if(wh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,ln=n}}}function rm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function ru(n){if(n!==ln)return!1;if(!Xe)return rm(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!dh(n.type,n.memoizedProps)),i&&(i=un)){if(wh(n))throw im(),Error(t(418));for(;i;)tm(n,i),i=ei(i.nextSibling)}if(rm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){un=ei(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}un=null}}else un=ln?ei(n.stateNode.nextSibling):null;return!0}function im(){for(var n=un;n;)n=ei(n.nextSibling)}function oo(){un=ln=null,Xe=!1}function Th(n){Ln===null?Ln=[n]:Ln.push(n)}var WE=Ee.ReactCurrentBatchConfig;function Aa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var T=d.refs;v===null?delete T[m]:T[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function iu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function sm(n){var i=n._init;return i(n._payload)}function om(n){function i(L,N){if(n){var M=L.deletions;M===null?(L.deletions=[N],L.flags|=16):M.push(N)}}function a(L,N){if(!n)return null;for(;N!==null;)i(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=hi(L,N),L.index=0,L.sibling=null,L}function m(L,N,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<N?(L.flags|=2,N):M):(L.flags|=2,N)):(L.flags|=1048576,N)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,N,M,Y){return N===null||N.tag!==6?(N=fd(M,L.mode,Y),N.return=L,N):(N=d(N,M),N.return=L,N)}function C(L,N,M,Y){var ae=M.type;return ae===D?G(L,N,M.props.children,Y,M.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Vt&&sm(ae)===N.type)?(Y=d(N,M.props),Y.ref=Aa(L,N,M),Y.return=L,Y):(Y=Cu(M.type,M.key,M.props,null,L.mode,Y),Y.ref=Aa(L,N,M),Y.return=L,Y)}function F(L,N,M,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==M.containerInfo||N.stateNode.implementation!==M.implementation?(N=pd(M,L.mode,Y),N.return=L,N):(N=d(N,M.children||[]),N.return=L,N)}function G(L,N,M,Y,ae){return N===null||N.tag!==7?(N=os(M,L.mode,Y,ae),N.return=L,N):(N=d(N,M),N.return=L,N)}function Q(L,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return N=fd(""+N,L.mode,M),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Qe:return M=Cu(N.type,N.key,N.props,null,L.mode,M),M.ref=Aa(L,null,N),M.return=L,M;case ke:return N=pd(N,L.mode,M),N.return=L,N;case Vt:var Y=N._init;return Q(L,Y(N._payload),M)}if(pr(N)||de(N))return N=os(N,L.mode,M,null),N.return=L,N;iu(L,N)}return null}function W(L,N,M,Y){var ae=N!==null?N.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return ae!==null?null:T(L,N,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Qe:return M.key===ae?C(L,N,M,Y):null;case ke:return M.key===ae?F(L,N,M,Y):null;case Vt:return ae=M._init,W(L,N,ae(M._payload),Y)}if(pr(M)||de(M))return ae!==null?null:G(L,N,M,Y,null);iu(L,M)}return null}function te(L,N,M,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(M)||null,T(N,L,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Qe:return L=L.get(Y.key===null?M:Y.key)||null,C(N,L,Y,ae);case ke:return L=L.get(Y.key===null?M:Y.key)||null,F(N,L,Y,ae);case Vt:var fe=Y._init;return te(L,N,M,fe(Y._payload),ae)}if(pr(Y)||de(Y))return L=L.get(M)||null,G(N,L,Y,ae,null);iu(N,Y)}return null}function se(L,N,M,Y){for(var ae=null,fe=null,pe=N,_e=N=0,It=null;pe!==null&&_e<M.length;_e++){pe.index>_e?(It=pe,pe=null):It=pe.sibling;var xe=W(L,pe,M[_e],Y);if(xe===null){pe===null&&(pe=It);break}n&&pe&&xe.alternate===null&&i(L,pe),N=m(xe,N,_e),fe===null?ae=xe:fe.sibling=xe,fe=xe,pe=It}if(_e===M.length)return a(L,pe),Xe&&Ji(L,_e),ae;if(pe===null){for(;_e<M.length;_e++)pe=Q(L,M[_e],Y),pe!==null&&(N=m(pe,N,_e),fe===null?ae=pe:fe.sibling=pe,fe=pe);return Xe&&Ji(L,_e),ae}for(pe=c(L,pe);_e<M.length;_e++)It=te(pe,L,_e,M[_e],Y),It!==null&&(n&&It.alternate!==null&&pe.delete(It.key===null?_e:It.key),N=m(It,N,_e),fe===null?ae=It:fe.sibling=It,fe=It);return n&&pe.forEach(function(di){return i(L,di)}),Xe&&Ji(L,_e),ae}function oe(L,N,M,Y){var ae=de(M);if(typeof ae!="function")throw Error(t(150));if(M=ae.call(M),M==null)throw Error(t(151));for(var fe=ae=null,pe=N,_e=N=0,It=null,xe=M.next();pe!==null&&!xe.done;_e++,xe=M.next()){pe.index>_e?(It=pe,pe=null):It=pe.sibling;var di=W(L,pe,xe.value,Y);if(di===null){pe===null&&(pe=It);break}n&&pe&&di.alternate===null&&i(L,pe),N=m(di,N,_e),fe===null?ae=di:fe.sibling=di,fe=di,pe=It}if(xe.done)return a(L,pe),Xe&&Ji(L,_e),ae;if(pe===null){for(;!xe.done;_e++,xe=M.next())xe=Q(L,xe.value,Y),xe!==null&&(N=m(xe,N,_e),fe===null?ae=xe:fe.sibling=xe,fe=xe);return Xe&&Ji(L,_e),ae}for(pe=c(L,pe);!xe.done;_e++,xe=M.next())xe=te(pe,L,_e,xe.value,Y),xe!==null&&(n&&xe.alternate!==null&&pe.delete(xe.key===null?_e:xe.key),N=m(xe,N,_e),fe===null?ae=xe:fe.sibling=xe,fe=xe);return n&&pe.forEach(function(A0){return i(L,A0)}),Xe&&Ji(L,_e),ae}function st(L,N,M,Y){if(typeof M=="object"&&M!==null&&M.type===D&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Qe:e:{for(var ae=M.key,fe=N;fe!==null;){if(fe.key===ae){if(ae=M.type,ae===D){if(fe.tag===7){a(L,fe.sibling),N=d(fe,M.props.children),N.return=L,L=N;break e}}else if(fe.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Vt&&sm(ae)===fe.type){a(L,fe.sibling),N=d(fe,M.props),N.ref=Aa(L,fe,M),N.return=L,L=N;break e}a(L,fe);break}else i(L,fe);fe=fe.sibling}M.type===D?(N=os(M.props.children,L.mode,Y,M.key),N.return=L,L=N):(Y=Cu(M.type,M.key,M.props,null,L.mode,Y),Y.ref=Aa(L,N,M),Y.return=L,L=Y)}return v(L);case ke:e:{for(fe=M.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===M.containerInfo&&N.stateNode.implementation===M.implementation){a(L,N.sibling),N=d(N,M.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else i(L,N);N=N.sibling}N=pd(M,L.mode,Y),N.return=L,L=N}return v(L);case Vt:return fe=M._init,st(L,N,fe(M._payload),Y)}if(pr(M))return se(L,N,M,Y);if(de(M))return oe(L,N,M,Y);iu(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,M),N.return=L,L=N):(a(L,N),N=fd(M,L.mode,Y),N.return=L,L=N),v(L)):a(L,N)}return st}var ao=om(!0),am=om(!1),su=ti(null),ou=null,lo=null,Ih=null;function Sh(){Ih=lo=ou=null}function Ah(n){var i=su.current;We(su),n._currentValue=i}function kh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function uo(n,i){ou=n,Ih=lo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xt=!0),n.firstContext=null)}function _n(n){var i=n._currentValue;if(Ih!==n)if(n={context:n,memoizedValue:i,next:null},lo===null){if(ou===null)throw Error(t(308));lo=n,ou.dependencies={lanes:0,firstContext:n}}else lo=lo.next=n;return i}var Zi=null;function Rh(n){Zi===null?Zi=[n]:Zi.push(n)}function lm(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Rh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Rr(n,c)}function Rr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ii=!1;function Ch(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function um(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Cr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function si(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Rr(n,a)}return d=c.interleaved,d===null?(i.next=i,Rh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Rr(n,a)}function au(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Gr(n,a)}}function cm(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function lu(n,i,a,c){var d=n.updateQueue;ii=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,v===null?m=F:v.next=F,v=C;var G=n.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=F:T.next=F,G.lastBaseUpdate=C))}if(m!==null){var Q=d.baseState;v=0,G=F=C=null,T=m;do{var W=T.lane,te=T.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:te,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,oe=T;switch(W=i,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(te,Q,W);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,W=typeof se=="function"?se.call(te,Q,W):se,W==null)break e;Q=re({},Q,W);break e;case 2:ii=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else te={eventTime:te,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(F=G=te,C=Q):G=G.next=te,v|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=G,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ns|=v,n.lanes=v,n.memoizedState=Q}}function hm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ka={},tr=ti(ka),Ra=ti(ka),Ca=ti(ka);function es(n){if(n===ka)throw Error(t(174));return n}function Ph(n,i){switch(qe(Ca,i),qe(Ra,n),qe(tr,ka),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pt(i,n)}We(tr),qe(tr,i)}function co(){We(tr),We(Ra),We(Ca)}function dm(n){es(Ca.current);var i=es(tr.current),a=pt(i,n.type);i!==a&&(qe(Ra,n),qe(tr,a))}function Nh(n){Ra.current===n&&(We(tr),We(Ra))}var Je=ti(0);function uu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Dh=[];function Oh(){for(var n=0;n<Dh.length;n++)Dh[n]._workInProgressVersionPrimary=null;Dh.length=0}var cu=Ee.ReactCurrentDispatcher,Vh=Ee.ReactCurrentBatchConfig,ts=0,Ze=null,gt=null,Et=null,hu=!1,Pa=!1,Na=0,KE=0;function bt(){throw Error(t(321))}function xh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!bn(n[a],i[a]))return!1;return!0}function bh(n,i,a,c,d,m){if(ts=m,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,cu.current=n===null||n.memoizedState===null?XE:JE,n=a(c,d),Pa){m=0;do{if(Pa=!1,Na=0,25<=m)throw Error(t(301));m+=1,Et=gt=null,i.updateQueue=null,cu.current=ZE,n=a(c,d)}while(Pa)}if(cu.current=pu,i=gt!==null&&gt.next!==null,ts=0,Et=gt=Ze=null,hu=!1,i)throw Error(t(300));return n}function Lh(){var n=Na!==0;return Na=0,n}function nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=n:Et=Et.next=n,Et}function vn(){if(gt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var i=Et===null?Ze.memoizedState:Et.next;if(i!==null)Et=i,gt=n;else{if(n===null)throw Error(t(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Et===null?Ze.memoizedState=Et=n:Et=Et.next=n}return Et}function Da(n,i){return typeof i=="function"?i(n):i}function Mh(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var T=v=null,C=null,F=m;do{var G=F.lane;if((ts&G)===G)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=Q,v=c):C=C.next=Q,Ze.lanes|=G,ns|=G}F=F.next}while(F!==null&&F!==m);C===null?v=c:C.next=T,bn(c,i.memoizedState)||(Xt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ze.lanes|=m,ns|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Fh(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);bn(m,i.memoizedState)||(Xt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function fm(){}function pm(n,i){var a=Ze,c=vn(),d=i(),m=!bn(c.memoizedState,d);if(m&&(c.memoizedState=d,Xt=!0),c=c.queue,Uh(ym.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Oa(9,gm.bind(null,a,c,d,i),void 0,null),Tt===null)throw Error(t(349));(ts&30)!==0||mm(a,i,d)}return d}function mm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function gm(n,i,a,c){i.value=a,i.getSnapshot=c,_m(i)&&vm(n)}function ym(n,i,a){return a(function(){_m(i)&&vm(n)})}function _m(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!bn(n,a)}catch{return!0}}function vm(n){var i=Rr(n,1);i!==null&&jn(i,n,1,-1)}function wm(n){var i=nr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},i.queue=n,n=n.dispatch=YE.bind(null,Ze,n),[i.memoizedState,n]}function Oa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Em(){return vn().memoizedState}function du(n,i,a,c){var d=nr();Ze.flags|=n,d.memoizedState=Oa(1|i,a,void 0,c===void 0?null:c)}function fu(n,i,a,c){var d=vn();c=c===void 0?null:c;var m=void 0;if(gt!==null){var v=gt.memoizedState;if(m=v.destroy,c!==null&&xh(c,v.deps)){d.memoizedState=Oa(i,a,m,c);return}}Ze.flags|=n,d.memoizedState=Oa(1|i,a,m,c)}function Tm(n,i){return du(8390656,8,n,i)}function Uh(n,i){return fu(2048,8,n,i)}function Im(n,i){return fu(4,2,n,i)}function Sm(n,i){return fu(4,4,n,i)}function Am(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function km(n,i,a){return a=a!=null?a.concat([n]):null,fu(4,4,Am.bind(null,i,n),a)}function jh(){}function Rm(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Cm(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Pm(n,i,a){return(ts&21)===0?(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=a):(bn(a,i)||(a=qi(),Ze.lanes|=a,ns|=a,n.baseState=!0),i)}function GE(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=Vh.transition;Vh.transition={};try{n(!1),i()}finally{Pe=a,Vh.transition=c}}function Nm(){return vn().memoizedState}function QE(n,i,a){var c=ui(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Dm(n))Om(i,a);else if(a=lm(n,i,a,c),a!==null){var d=Wt();jn(a,n,c,d),Vm(a,i,c)}}function YE(n,i,a){var c=ui(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dm(n))Om(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,T=m(v,a);if(d.hasEagerState=!0,d.eagerState=T,bn(T,v)){var C=i.interleaved;C===null?(d.next=d,Rh(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=lm(n,i,d,c),a!==null&&(d=Wt(),jn(a,n,c,d),Vm(a,i,c))}}function Dm(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function Om(n,i){Pa=hu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Vm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Gr(n,a)}}var pu={readContext:_n,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},XE={readContext:_n,useCallback:function(n,i){return nr().memoizedState=[n,i===void 0?null:i],n},useContext:_n,useEffect:Tm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,du(4194308,4,Am.bind(null,i,n),a)},useLayoutEffect:function(n,i){return du(4194308,4,n,i)},useInsertionEffect:function(n,i){return du(4,2,n,i)},useMemo:function(n,i){var a=nr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=nr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=QE.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=nr();return n={current:n},i.memoizedState=n},useState:wm,useDebugValue:jh,useDeferredValue:function(n){return nr().memoizedState=n},useTransition:function(){var n=wm(!1),i=n[0];return n=GE.bind(null,n[1]),nr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=nr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tt===null)throw Error(t(349));(ts&30)!==0||mm(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Tm(ym.bind(null,c,m,n),[n]),c.flags|=2048,Oa(9,gm.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=nr(),i=Tt.identifierPrefix;if(Xe){var a=kr,c=Ar;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Na++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=KE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},JE={readContext:_n,useCallback:Rm,useContext:_n,useEffect:Uh,useImperativeHandle:km,useInsertionEffect:Im,useLayoutEffect:Sm,useMemo:Cm,useReducer:Mh,useRef:Em,useState:function(){return Mh(Da)},useDebugValue:jh,useDeferredValue:function(n){var i=vn();return Pm(i,gt.memoizedState,n)},useTransition:function(){var n=Mh(Da)[0],i=vn().memoizedState;return[n,i]},useMutableSource:fm,useSyncExternalStore:pm,useId:Nm,unstable_isNewReconciler:!1},ZE={readContext:_n,useCallback:Rm,useContext:_n,useEffect:Uh,useImperativeHandle:km,useInsertionEffect:Im,useLayoutEffect:Sm,useMemo:Cm,useReducer:Fh,useRef:Em,useState:function(){return Fh(Da)},useDebugValue:jh,useDeferredValue:function(n){var i=vn();return gt===null?i.memoizedState=n:Pm(i,gt.memoizedState,n)},useTransition:function(){var n=Fh(Da)[0],i=vn().memoizedState;return[n,i]},useMutableSource:fm,useSyncExternalStore:pm,useId:Nm,unstable_isNewReconciler:!1};function Mn(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Bh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var mu={isMounted:function(n){return(n=n._reactInternals)?Cn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=ui(n),m=Cr(c,d);m.payload=i,a!=null&&(m.callback=a),i=si(n,m,d),i!==null&&(jn(i,n,d,c),au(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=ui(n),m=Cr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=si(n,m,d),i!==null&&(jn(i,n,d,c),au(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wt(),c=ui(n),d=Cr(a,c);d.tag=2,i!=null&&(d.callback=i),i=si(n,d,c),i!==null&&(jn(i,n,c,a),au(i,n,c))}};function xm(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!_a(a,c)||!_a(d,m):!0}function bm(n,i,a){var c=!1,d=ni,m=i.contextType;return typeof m=="object"&&m!==null?m=_n(m):(d=Yt(i)?Yi:xt.current,c=i.contextTypes,m=(c=c!=null)?ro(n,d):ni),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=mu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Lm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&mu.enqueueReplaceState(i,i.state,null)}function zh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Ch(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=_n(m):(m=Yt(i)?Yi:xt.current,d.context=ro(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Bh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&mu.enqueueReplaceState(d,d.state,null),lu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ho(n,i){try{var a="",c=i;do a+=Se(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function $h(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function qh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var e0=typeof WeakMap=="function"?WeakMap:Map;function Mm(n,i,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Tu||(Tu=!0,sd=c),qh(n,i)},a}function Fm(n,i,a){a=Cr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){qh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){qh(n,i),typeof c!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Um(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new e0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=p0.bind(null,n,i,a),i.then(n,n))}function jm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Bm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Cr(-1,1),i.tag=2,si(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var t0=Ee.ReactCurrentOwner,Xt=!1;function Ht(n,i,a,c){i.child=n===null?am(i,null,a,c):ao(i,n.child,a,c)}function zm(n,i,a,c,d){a=a.render;var m=i.ref;return uo(i,d),c=bh(n,i,a,c,m,d),a=Lh(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Xe&&a&&_h(i),i.flags|=1,Ht(n,i,c,d),i.child)}function $m(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!dd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,qm(n,i,m,c,d)):(n=Cu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:_a,a(v,c)&&n.ref===i.ref)return Pr(n,i,d)}return i.flags|=1,n=hi(m,c),n.ref=i.ref,n.return=i,i.child=n}function qm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(_a(m,c)&&n.ref===i.ref)if(Xt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xt=!0);else return i.lanes=n.lanes,Pr(n,i,d)}return Hh(n,i,a,c,d)}function Hm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(po,cn),cn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(po,cn),cn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,qe(po,cn),cn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,qe(po,cn),cn|=c;return Ht(n,i,d,a),i.child}function Wm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Hh(n,i,a,c,d){var m=Yt(a)?Yi:xt.current;return m=ro(i,m),uo(i,d),a=bh(n,i,a,c,m,d),c=Lh(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Xe&&c&&_h(i),i.flags|=1,Ht(n,i,a,d),i.child)}function Km(n,i,a,c,d){if(Yt(a)){var m=!0;Zl(i)}else m=!1;if(uo(i,d),i.stateNode===null)yu(n,i),bm(i,a,c),zh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,T=i.memoizedProps;v.props=T;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=_n(F):(F=Yt(a)?Yi:xt.current,F=ro(i,F));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==F)&&Lm(i,v,c,F),ii=!1;var W=i.memoizedState;v.state=W,lu(i,c,v,d),C=i.memoizedState,T!==c||W!==C||Qt.current||ii?(typeof G=="function"&&(Bh(i,a,G,c),C=i.memoizedState),(T=ii||xm(i,a,T,c,W,C,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,um(n,i),T=i.memoizedProps,F=i.type===i.elementType?T:Mn(i.type,T),v.props=F,Q=i.pendingProps,W=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=_n(C):(C=Yt(a)?Yi:xt.current,C=ro(i,C));var te=a.getDerivedStateFromProps;(G=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Q||W!==C)&&Lm(i,v,c,C),ii=!1,W=i.memoizedState,v.state=W,lu(i,c,v,d);var se=i.memoizedState;T!==Q||W!==se||Qt.current||ii?(typeof te=="function"&&(Bh(i,a,te,c),se=i.memoizedState),(F=ii||xm(i,a,F,c,W,se,C)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),v.props=c,v.state=se,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),c=!1)}return Wh(n,i,a,c,m,d)}function Wh(n,i,a,c,d,m){Wm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Jp(i,a,!1),Pr(n,i,m);c=i.stateNode,t0.current=i;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=ao(i,n.child,null,m),i.child=ao(i,null,T,m)):Ht(n,i,T,m),i.memoizedState=c.state,d&&Jp(i,a,!0),i.child}function Gm(n){var i=n.stateNode;i.pendingContext?Yp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Yp(n,i.context,!1),Ph(n,i.containerInfo)}function Qm(n,i,a,c,d){return oo(),Th(d),i.flags|=256,Ht(n,i,a,c),i.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ym(n,i,a){var c=i.pendingProps,d=Je.current,m=!1,v=(i.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Je,d&1),n===null)return Eh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Pu(v,c,0,null),n=os(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Gh(a),i.memoizedState=Kh,n):Qh(i,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return n0(n,i,v,c,T,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=hi(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?m=hi(T,m):(m=os(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?Gh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Kh,c}return m=n.child,n=m.sibling,c=hi(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Qh(n,i){return i=Pu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function gu(n,i,a,c){return c!==null&&Th(c),ao(i,n.child,null,a),n=Qh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function n0(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=$h(Error(t(422))),gu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Pu({mode:"visible",children:c.children},d,0,null),m=os(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ao(i,n.child,null,v),i.child.memoizedState=Gh(v),i.memoizedState=Kh,m);if((i.mode&1)===0)return gu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,m=Error(t(419)),c=$h(m,c,void 0),gu(n,i,v,c)}if(T=(v&n.childLanes)!==0,Xt||T){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Rr(n,d),jn(c,n,d,-1))}return hd(),c=$h(Error(t(421))),gu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=m0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,un=ei(d.nextSibling),ln=i,Xe=!0,Ln=null,n!==null&&(gn[yn++]=Ar,gn[yn++]=kr,gn[yn++]=Xi,Ar=n.id,kr=n.overflow,Xi=i),i=Qh(i,c.children),i.flags|=4096,i)}function Xm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),kh(n.return,i,a)}function Yh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Jm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Ht(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xm(n,a,i);else if(n.tag===19)Xm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&uu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Yh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&uu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Yh(i,!0,a,null,m);break;case"together":Yh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function yu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ns|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=hi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=hi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function r0(n,i,a){switch(i.tag){case 3:Gm(i),oo();break;case 5:dm(i);break;case 1:Yt(i.type)&&Zl(i);break;case 4:Ph(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(su,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ym(n,i,a):(qe(Je,Je.current&1),n=Pr(n,i,a),n!==null?n.sibling:null);qe(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Jm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,Hm(n,i,a)}return Pr(n,i,a)}var Zm,Xh,eg,tg;Zm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Xh=function(){},eg=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,es(tr.current);var m=null;switch(a){case"input":d=Vi(n,d),c=Vi(n,c),m=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":d=Ko(n,d),c=Ko(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Yl)}Zo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(m||(m=[]),m.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(m=m||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&He("scroll",n),m||T===C||(m=[])):(m=m||[]).push(F,C))}a&&(m=m||[]).push("style",a);var F=m;(i.updateQueue=F)&&(i.flags|=4)}},tg=function(n,i,a,c){a!==c&&(i.flags|=4)};function Va(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function i0(n,i,a){var c=i.pendingProps;switch(vh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Yt(i.type)&&Jl(),Lt(i),null;case 3:return c=i.stateNode,co(),We(Qt),We(xt),Oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ru(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ln!==null&&(ld(Ln),Ln=null))),Xh(n,i),Lt(i),null;case 5:Nh(i);var d=es(Ca.current);if(a=i.type,n!==null&&i.stateNode!=null)eg(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=es(tr.current),ru(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[er]=i,c[Ia]=m,n=(i.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<wa.length;d++)He(wa[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":As(c,m),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},He("invalid",c);break;case"textarea":Rs(c,m),He("invalid",c)}Zo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var T=m[v];v==="children"?typeof T=="string"?c.textContent!==T&&(m.suppressHydrationWarning!==!0&&Ql(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(m.suppressHydrationWarning!==!0&&Ql(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&He("scroll",c)}switch(a){case"input":fr(c),El(c,m,!0);break;case"textarea":fr(c),Go(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Yl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ft(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[er]=i,n[Ia]=c,Zm(n,i,!1,!1),i.stateNode=n;e:{switch(v=ea(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<wa.length;d++)He(wa[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":As(n,c),d=Vi(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),He("invalid",n);break;case"textarea":Rs(n,c),d=Ko(n,c),He("invalid",n);break;default:d=c}Zo(a,d),T=d;for(m in T)if(T.hasOwnProperty(m)){var C=T[m];m==="style"?Xo(n,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Qo(n,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&$r(n,C):typeof C=="number"&&$r(n,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&He("scroll",n):C!=null&&he(n,m,C,v))}switch(a){case"input":fr(n),El(n,c,!1);break;case"textarea":fr(n),Go(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?mr(n,!!c.multiple,m,!1):c.defaultValue!=null&&mr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Yl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)tg(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=es(Ca.current),es(tr.current),ru(i)){if(c=i.stateNode,a=i.memoizedProps,c[er]=i,(m=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:Ql(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ql(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=i,i.stateNode=c}return Lt(i),null;case 13:if(We(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)im(),oo(),i.flags|=98560,m=!1;else if(m=ru(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[er]=i}else oo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),m=!1}else Ln!==null&&(ld(Ln),Ln=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?yt===0&&(yt=3):hd())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return co(),Xh(n,i),n===null&&Ea(i.stateNode.containerInfo),Lt(i),null;case 10:return Ah(i.type._context),Lt(i),null;case 17:return Yt(i.type)&&Jl(),Lt(i),null;case 19:if(We(Je),m=i.memoizedState,m===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)Va(m,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=uu(n),v!==null){for(i.flags|=128,Va(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Je,Je.current&1|2),i.child}n=n.sibling}m.tail!==null&&$e()>mo&&(i.flags|=128,c=!0,Va(m,!1),i.lanes=4194304)}else{if(!c)if(n=uu(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Va(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Xe)return Lt(i),null}else 2*$e()-m.renderingStartTime>mo&&a!==1073741824&&(i.flags|=128,c=!0,Va(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$e(),i.sibling=null,a=Je.current,qe(Je,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return cd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(cn&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function s0(n,i){switch(vh(i),i.tag){case 1:return Yt(i.type)&&Jl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return co(),We(Qt),We(xt),Oh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Nh(i),null;case 13:if(We(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));oo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return We(Je),null;case 4:return co(),null;case 10:return Ah(i.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var _u=!1,Mt=!1,o0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function fo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,i,c)}else a.current=null}function Jh(n,i,a){try{a()}catch(c){nt(n,i,c)}}var ng=!1;function a0(n,i){if(ch=Xr,n=xp(),nh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,F=0,G=0,Q=n,W=null;t:for(;;){for(var te;Q!==a||d!==0&&Q.nodeType!==3||(T=v+d),Q!==m||c!==0&&Q.nodeType!==3||(C=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(te=Q.firstChild)!==null;)W=Q,Q=te;for(;;){if(Q===n)break t;if(W===a&&++F===d&&(T=v),W===m&&++G===c&&(C=v),(te=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=te}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(hh={focusedElem:n,selectionRange:a},Xr=!1,ie=i;ie!==null;)if(i=ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ie=n;else for(;ie!==null;){i=ie;try{var se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,st=se.memoizedState,L=i.stateNode,N=L.getSnapshotBeforeUpdate(i.elementType===i.type?oe:Mn(i.type,oe),st);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var M=i.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){nt(i,i.return,Y)}if(n=i.sibling,n!==null){n.return=i.return,ie=n;break}ie=i.return}return se=ng,ng=!1,se}function xa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Jh(i,a,m)}d=d.next}while(d!==c)}}function vu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Zh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function rg(n){var i=n.alternate;i!==null&&(n.alternate=null,rg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[er],delete i[Ia],delete i[mh],delete i[$E],delete i[qE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ig(n){return n.tag===5||n.tag===3||n.tag===4}function sg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ig(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ed(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Yl));else if(c!==4&&(n=n.child,n!==null))for(ed(n,i,a),n=n.sibling;n!==null;)ed(n,i,a),n=n.sibling}function td(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(td(n,i,a),n=n.sibling;n!==null;)td(n,i,a),n=n.sibling}var Rt=null,Fn=!1;function oi(n,i,a){for(a=a.child;a!==null;)og(n,i,a),a=a.sibling}function og(n,i,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(zi,a)}catch{}switch(a.tag){case 5:Mt||fo(a,i);case 6:var c=Rt,d=Fn;Rt=null,oi(n,i,a),Rt=c,Fn=d,Rt!==null&&(Fn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Fn?(n=Rt,a=a.stateNode,n.nodeType===8?ph(n.parentNode,a):n.nodeType===1&&ph(n,a),Vn(n)):ph(Rt,a.stateNode));break;case 4:c=Rt,d=Fn,Rt=a.stateNode.containerInfo,Fn=!0,oi(n,i,a),Rt=c,Fn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Jh(a,i,v),d=d.next}while(d!==c)}oi(n,i,a);break;case 1:if(!Mt&&(fo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){nt(a,i,T)}oi(n,i,a);break;case 21:oi(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,oi(n,i,a),Mt=c):oi(n,i,a);break;default:oi(n,i,a)}}function ag(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new o0),i.forEach(function(c){var d=g0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Un(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 5:Rt=T.stateNode,Fn=!1;break e;case 3:Rt=T.stateNode.containerInfo,Fn=!0;break e;case 4:Rt=T.stateNode.containerInfo,Fn=!0;break e}T=T.return}if(Rt===null)throw Error(t(160));og(m,v,d),Rt=null,Fn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){nt(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)lg(i,n),i=i.sibling}function lg(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Un(i,n),rr(n),c&4){try{xa(3,n,n.return),vu(3,n)}catch(oe){nt(n,n.return,oe)}try{xa(5,n,n.return)}catch(oe){nt(n,n.return,oe)}}break;case 1:Un(i,n),rr(n),c&512&&a!==null&&fo(a,a.return);break;case 5:if(Un(i,n),rr(n),c&512&&a!==null&&fo(a,a.return),n.flags&32){var d=n.stateNode;try{$r(d,"")}catch(oe){nt(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&m.type==="radio"&&m.name!=null&&Ho(d,m),ea(T,v);var F=ea(T,m);for(v=0;v<C.length;v+=2){var G=C[v],Q=C[v+1];G==="style"?Xo(d,Q):G==="dangerouslySetInnerHTML"?Qo(d,Q):G==="children"?$r(d,Q):he(d,G,Q,F)}switch(T){case"input":Wo(d,m);break;case"textarea":Cs(d,m);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var te=m.value;te!=null?mr(d,!!m.multiple,te,!1):W!==!!m.multiple&&(m.defaultValue!=null?mr(d,!!m.multiple,m.defaultValue,!0):mr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ia]=m}catch(oe){nt(n,n.return,oe)}}break;case 6:if(Un(i,n),rr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(oe){nt(n,n.return,oe)}}break;case 3:if(Un(i,n),rr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(i.containerInfo)}catch(oe){nt(n,n.return,oe)}break;case 4:Un(i,n),rr(n);break;case 13:Un(i,n),rr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(id=$e())),c&4&&ag(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||G,Un(i,n),Mt=F):Un(i,n),rr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(ie=n,G=n.child;G!==null;){for(Q=ie=G;ie!==null;){switch(W=ie,te=W.child,W.tag){case 0:case 11:case 14:case 15:xa(4,W,W.return);break;case 1:fo(W,W.return);var se=W.stateNode;if(typeof se.componentWillUnmount=="function"){c=W,a=W.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(oe){nt(c,a,oe)}}break;case 5:fo(W,W.return);break;case 22:if(W.memoizedState!==null){hg(Q);continue}}te!==null?(te.return=W,ie=te):hg(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,F?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(T=Q.stateNode,C=Q.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Yo("display",v))}catch(oe){nt(n,n.return,oe)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(oe){nt(n,n.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Un(i,n),rr(n),c&4&&ag(n);break;case 21:break;default:Un(i,n),rr(n)}}function rr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(ig(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&($r(d,""),c.flags&=-33);var m=sg(n);td(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=sg(n);ed(n,T,v);break;default:throw Error(t(161))}}catch(C){nt(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function l0(n,i,a){ie=n,ug(n)}function ug(n,i,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||_u;if(!v){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Mt;T=_u;var F=Mt;if(_u=v,(Mt=C)&&!F)for(ie=d;ie!==null;)v=ie,C=v.child,v.tag===22&&v.memoizedState!==null?dg(d):C!==null?(C.return=v,ie=C):dg(d);for(;m!==null;)ie=m,ug(m),m=m.sibling;ie=d,_u=T,Mt=F}cg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ie=m):cg(n)}}function cg(n){for(;ie!==null;){var i=ie;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||vu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Mn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&hm(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}hm(i,v,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&Vn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Zh(i)}catch(W){nt(i,i.return,W)}}if(i===n){ie=null;break}if(a=i.sibling,a!==null){a.return=i.return,ie=a;break}ie=i.return}}function hg(n){for(;ie!==null;){var i=ie;if(i===n){ie=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ie=a;break}ie=i.return}}function dg(n){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{vu(4,i)}catch(C){nt(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){nt(i,d,C)}}var m=i.return;try{Zh(i)}catch(C){nt(i,m,C)}break;case 5:var v=i.return;try{Zh(i)}catch(C){nt(i,v,C)}}}catch(C){nt(i,i.return,C)}if(i===n){ie=null;break}var T=i.sibling;if(T!==null){T.return=i.return,ie=T;break}ie=i.return}}var u0=Math.ceil,wu=Ee.ReactCurrentDispatcher,nd=Ee.ReactCurrentOwner,wn=Ee.ReactCurrentBatchConfig,Ve=0,Tt=null,ut=null,Ct=0,cn=0,po=ti(0),yt=0,ba=null,ns=0,Eu=0,rd=0,La=null,Jt=null,id=0,mo=1/0,Nr=null,Tu=!1,sd=null,ai=null,Iu=!1,li=null,Su=0,Ma=0,od=null,Au=-1,ku=0;function Wt(){return(Ve&6)!==0?$e():Au!==-1?Au:Au=$e()}function ui(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Ct!==0?Ct&-Ct:WE.transition!==null?(ku===0&&(ku=qi()),ku):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:ha(n.type)),n)}function jn(n,i,a,c){if(50<Ma)throw Ma=0,od=null,Error(t(185));Kr(n,a,c),((Ve&2)===0||n!==Tt)&&(n===Tt&&((Ve&2)===0&&(Eu|=a),yt===4&&ci(n,Ct)),Zt(n,c),a===1&&Ve===0&&(i.mode&1)===0&&(mo=$e()+500,eu&&ri()))}function Zt(n,i){var a=n.callbackNode;_r(n,i);var c=$i(n,n===Tt?Ct:0);if(c===0)a!==null&&oa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&oa(a),i===1)n.tag===0?HE(pg.bind(null,n)):Zp(pg.bind(null,n)),BE(function(){(Ve&6)===0&&ri()}),a=null;else{switch(Qr(c)){case 1:a=Bi;break;case 4:a=qr;break;case 16:a=fn;break;case 536870912:a=kl;break;default:a=fn}a=Tg(a,fg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function fg(n,i){if(Au=-1,ku=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(go()&&n.callbackNode!==a)return null;var c=$i(n,n===Tt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ru(n,c);else{i=c;var d=Ve;Ve|=2;var m=gg();(Tt!==n||Ct!==i)&&(Nr=null,mo=$e()+500,is(n,i));do try{d0();break}catch(T){mg(n,T)}while(!0);Sh(),wu.current=m,Ve=d,ut!==null?i=0:(Tt=null,Ct=0,i=yt)}if(i!==0){if(i===2&&(d=sn(n),d!==0&&(c=d,i=ad(n,d))),i===1)throw a=ba,is(n,0),ci(n,c),Zt(n,$e()),a;if(i===6)ci(n,c);else{if(d=n.current.alternate,(c&30)===0&&!c0(d)&&(i=Ru(n,c),i===2&&(m=sn(n),m!==0&&(c=m,i=ad(n,m))),i===1))throw a=ba,is(n,0),ci(n,c),Zt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ss(n,Jt,Nr);break;case 3:if(ci(n,c),(c&130023424)===c&&(i=id+500-$e(),10<i)){if($i(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=fh(ss.bind(null,n,Jt,Nr),i);break}ss(n,Jt,Nr);break;case 4:if(ci(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-$t(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*u0(c/1960))-c,10<c){n.timeoutHandle=fh(ss.bind(null,n,Jt,Nr),c);break}ss(n,Jt,Nr);break;case 5:ss(n,Jt,Nr);break;default:throw Error(t(329))}}}return Zt(n,$e()),n.callbackNode===a?fg.bind(null,n):null}function ad(n,i){var a=La;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=Ru(n,i),n!==2&&(i=Jt,Jt=a,i!==null&&ld(i)),n}function ld(n){Jt===null?Jt=n:Jt.push.apply(Jt,n)}function c0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!bn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ci(n,i){for(i&=~rd,i&=~Eu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-$t(i),c=1<<a;n[a]=-1,i&=~c}}function pg(n){if((Ve&6)!==0)throw Error(t(327));go();var i=$i(n,0);if((i&1)===0)return Zt(n,$e()),null;var a=Ru(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=ad(n,c))}if(a===1)throw a=ba,is(n,0),ci(n,i),Zt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ss(n,Jt,Nr),Zt(n,$e()),null}function ud(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(mo=$e()+500,eu&&ri())}}function rs(n){li!==null&&li.tag===0&&(Ve&6)===0&&go();var i=Ve;Ve|=1;var a=wn.transition,c=Pe;try{if(wn.transition=null,Pe=1,n)return n()}finally{Pe=c,wn.transition=a,Ve=i,(Ve&6)===0&&ri()}}function cd(){cn=po.current,We(po)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,jE(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(vh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Jl();break;case 3:co(),We(Qt),We(xt),Oh();break;case 5:Nh(c);break;case 4:co();break;case 13:We(Je);break;case 19:We(Je);break;case 10:Ah(c.type._context);break;case 22:case 23:cd()}a=a.return}if(Tt=n,ut=n=hi(n.current,null),Ct=cn=i,yt=0,ba=null,rd=Eu=ns=0,Jt=La=null,Zi!==null){for(i=0;i<Zi.length;i++)if(a=Zi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Zi=null}return n}function mg(n,i){do{var a=ut;try{if(Sh(),cu.current=pu,hu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}hu=!1}if(ts=0,Et=gt=Ze=null,Pa=!1,Na=0,nd.current=null,a===null||a.return===null){yt=1,ba=i,ut=null;break}e:{var m=n,v=a.return,T=a,C=i;if(i=Ct,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,G=T,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var te=jm(v);if(te!==null){te.flags&=-257,Bm(te,v,T,m,i),te.mode&1&&Um(m,F,i),i=te,C=F;var se=i.updateQueue;if(se===null){var oe=new Set;oe.add(C),i.updateQueue=oe}else se.add(C);break e}else{if((i&1)===0){Um(m,F,i),hd();break e}C=Error(t(426))}}else if(Xe&&T.mode&1){var st=jm(v);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Bm(st,v,T,m,i),Th(ho(C,T));break e}}m=C=ho(C,T),yt!==4&&(yt=2),La===null?La=[m]:La.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var L=Mm(m,C,i);cm(m,L);break e;case 1:T=C;var N=m.type,M=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ai===null||!ai.has(M)))){m.flags|=65536,i&=-i,m.lanes|=i;var Y=Fm(m,T,i);cm(m,Y);break e}}m=m.return}while(m!==null)}_g(a)}catch(ae){i=ae,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function gg(){var n=wu.current;return wu.current=pu,n===null?pu:n}function hd(){(yt===0||yt===3||yt===2)&&(yt=4),Tt===null||(ns&268435455)===0&&(Eu&268435455)===0||ci(Tt,Ct)}function Ru(n,i){var a=Ve;Ve|=2;var c=gg();(Tt!==n||Ct!==i)&&(Nr=null,is(n,i));do try{h0();break}catch(d){mg(n,d)}while(!0);if(Sh(),Ve=a,wu.current=c,ut!==null)throw Error(t(261));return Tt=null,Ct=0,yt}function h0(){for(;ut!==null;)yg(ut)}function d0(){for(;ut!==null&&!Sl();)yg(ut)}function yg(n){var i=Eg(n.alternate,n,cn);n.memoizedProps=n.pendingProps,i===null?_g(n):ut=i,nd.current=null}function _g(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=i0(a,i,cn),a!==null){ut=a;return}}else{if(a=s0(a,i),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,ut=null;return}}if(i=i.sibling,i!==null){ut=i;return}ut=i=n}while(i!==null);yt===0&&(yt=5)}function ss(n,i,a){var c=Pe,d=wn.transition;try{wn.transition=null,Pe=1,f0(n,i,a,c)}finally{wn.transition=d,Pe=c}return null}function f0(n,i,a,c){do go();while(li!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(je(n,m),n===Tt&&(ut=Tt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Iu||(Iu=!0,Tg(fn,function(){return go(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=wn.transition,wn.transition=null;var v=Pe;Pe=1;var T=Ve;Ve|=4,nd.current=null,a0(n,a),lg(a,n),VE(hh),Xr=!!ch,hh=ch=null,n.current=a,l0(a),Gc(),Ve=T,Pe=v,wn.transition=m}else n.current=a;if(Iu&&(Iu=!1,li=n,Su=d),m=n.pendingLanes,m===0&&(ai=null),Rl(a.stateNode),Zt(n,$e()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Tu)throw Tu=!1,n=sd,sd=null,n;return(Su&1)!==0&&n.tag!==0&&go(),m=n.pendingLanes,(m&1)!==0?n===od?Ma++:(Ma=0,od=n):Ma=0,ri(),null}function go(){if(li!==null){var n=Qr(Su),i=wn.transition,a=Pe;try{if(wn.transition=null,Pe=16>n?16:n,li===null)var c=!1;else{if(n=li,li=null,Su=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ie=n.current;ie!==null;){var m=ie,v=m.child;if((ie.flags&16)!==0){var T=m.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(ie=F;ie!==null;){var G=ie;switch(G.tag){case 0:case 11:case 15:xa(8,G,m)}var Q=G.child;if(Q!==null)Q.return=G,ie=Q;else for(;ie!==null;){G=ie;var W=G.sibling,te=G.return;if(rg(G),G===F){ie=null;break}if(W!==null){W.return=te,ie=W;break}ie=te}}}var se=m.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var st=oe.sibling;oe.sibling=null,oe=st}while(oe!==null)}}ie=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ie=v;else e:for(;ie!==null;){if(m=ie,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:xa(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,ie=L;break e}ie=m.return}}var N=n.current;for(ie=N;ie!==null;){v=ie;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,ie=M;else e:for(v=N;ie!==null;){if(T=ie,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:vu(9,T)}}catch(ae){nt(T,T.return,ae)}if(T===v){ie=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,ie=Y;break e}ie=T.return}}if(Ve=d,ri(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(zi,n)}catch{}c=!0}return c}finally{Pe=a,wn.transition=i}}return!1}function vg(n,i,a){i=ho(a,i),i=Mm(n,i,1),n=si(n,i,1),i=Wt(),n!==null&&(Kr(n,1,i),Zt(n,i))}function nt(n,i,a){if(n.tag===3)vg(n,n,a);else for(;i!==null;){if(i.tag===3){vg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ai===null||!ai.has(c))){n=ho(a,n),n=Fm(i,n,1),i=si(i,n,1),n=Wt(),i!==null&&(Kr(i,1,n),Zt(i,n));break}}i=i.return}}function p0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wt(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Ct&a)===a&&(yt===4||yt===3&&(Ct&130023424)===Ct&&500>$e()-id?is(n,0):rd|=a),Zt(n,i)}function wg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Fs,Fs<<=1,(Fs&130023424)===0&&(Fs=4194304)));var a=Wt();n=Rr(n,i),n!==null&&(Kr(n,i,a),Zt(n,a))}function m0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),wg(n,a)}function g0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),wg(n,a)}var Eg;Eg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qt.current)Xt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Xt=!1,r0(n,i,a);Xt=(n.flags&131072)!==0}else Xt=!1,Xe&&(i.flags&1048576)!==0&&em(i,nu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;yu(n,i),n=i.pendingProps;var d=ro(i,xt.current);uo(i,a),d=bh(null,i,c,n,d,a);var m=Lh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yt(c)?(m=!0,Zl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ch(i),d.updater=mu,i.stateNode=d,d._reactInternals=i,zh(i,c,n,a),i=Wh(null,i,c,!0,m,a)):(i.tag=0,Xe&&m&&_h(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(yu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=_0(c),n=Mn(c,n),d){case 0:i=Hh(null,i,c,n,a);break e;case 1:i=Km(null,i,c,n,a);break e;case 11:i=zm(null,i,c,n,a);break e;case 14:i=$m(null,i,c,Mn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),Hh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),Km(n,i,c,d,a);case 3:e:{if(Gm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,um(n,i),lu(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ho(Error(t(423)),i),i=Qm(n,i,c,a,d);break e}else if(c!==d){d=ho(Error(t(424)),i),i=Qm(n,i,c,a,d);break e}else for(un=ei(i.stateNode.containerInfo.firstChild),ln=i,Xe=!0,Ln=null,a=am(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),c===d){i=Pr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return dm(i),n===null&&Eh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,dh(c,d)?v=null:m!==null&&dh(c,m)&&(i.flags|=32),Wm(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&Eh(i),null;case 13:return Ym(n,i,a);case 4:return Ph(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ao(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),zm(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,qe(su,c._currentValue),c._currentValue=v,m!==null)if(bn(m.value,v)){if(m.children===d.children&&!Qt.current){i=Pr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var T=m.dependencies;if(T!==null){v=m.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=Cr(-1,a&-a),C.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?C.next=C:(C.next=G.next,G.next=C),F.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),kh(m.return,a,i),T.lanes|=a;break}C=C.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),kh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,uo(i,a),d=_n(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=Mn(c,i.pendingProps),d=Mn(c.type,d),$m(n,i,c,d,a);case 15:return qm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),yu(n,i),i.tag=1,Yt(c)?(n=!0,Zl(i)):n=!1,uo(i,a),bm(i,c,d),zh(i,c,d,a),Wh(null,i,c,!0,n,a);case 19:return Jm(n,i,a);case 22:return Hm(n,i,a)}throw Error(t(156,i.tag))};function Tg(n,i){return Ls(n,i)}function y0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,i,a,c){return new y0(n,i,a,c)}function dd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _0(n){if(typeof n=="function")return dd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===Ot)return 14}return 2}function hi(n,i){var a=n.alternate;return a===null?(a=En(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Cu(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")dd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return os(a.children,d,m,i);case S:v=8,d|=8;break;case k:return n=En(12,a,i,d|2),n.elementType=k,n.lanes=m,n;case A:return n=En(13,a,i,d),n.elementType=A,n.lanes=m,n;case rt:return n=En(19,a,i,d),n.elementType=rt,n.lanes=m,n;case Ue:return Pu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case O:v=9;break e;case x:v=11;break e;case Ot:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=En(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function os(n,i,a,c){return n=En(7,n,c,i),n.lanes=a,n}function Pu(n,i,a,c){return n=En(22,n,c,i),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function fd(n,i,a){return n=En(6,n,null,i),n.lanes=a,n}function pd(n,i,a){return i=En(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function v0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wr(0),this.expirationTimes=Wr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function md(n,i,a,c,d,m,v,T,C){return n=new v0(n,i,a,T,C),i===1?(i=1,m===!0&&(i|=8)):i=0,m=En(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ch(m),n}function w0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Ig(n){if(!n)return ni;n=n._reactInternals;e:{if(Cn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return Xp(n,a,i)}return i}function Sg(n,i,a,c,d,m,v,T,C){return n=md(a,c,!0,n,d,m,v,T,C),n.context=Ig(null),a=n.current,c=Wt(),d=ui(a),m=Cr(c,d),m.callback=i??null,si(a,m,d),n.current.lanes=d,Kr(n,d,c),Zt(n,c),n}function Nu(n,i,a,c){var d=i.current,m=Wt(),v=ui(d);return a=Ig(a),i.context===null?i.context=a:i.pendingContext=a,i=Cr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=si(d,i,v),n!==null&&(jn(n,d,v,m),au(n,d,v)),v}function Du(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ag(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function gd(n,i){Ag(n,i),(n=n.alternate)&&Ag(n,i)}function E0(){return null}var kg=typeof reportError=="function"?reportError:function(n){console.error(n)};function yd(n){this._internalRoot=n}Ou.prototype.render=yd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Nu(n,i,null,null)},Ou.prototype.unmount=yd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){Nu(null,n,null,null)}),i[Ir]=null}};function Ou(n){this._internalRoot=n}Ou.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ol();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Yn.length&&i!==0&&i<Yn[a].priority;a++);Yn.splice(a,0,n),a===0&&bl(n)}};function _d(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rg(){}function T0(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var F=Du(v);m.call(F)}}var v=Sg(i,c,n,0,null,!1,!1,"",Rg);return n._reactRootContainer=v,n[Ir]=v.current,Ea(n.nodeType===8?n.parentNode:n),rs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=Du(C);T.call(F)}}var C=md(n,0,!1,null,null,!1,!1,"",Rg);return n._reactRootContainer=C,n[Ir]=C.current,Ea(n.nodeType===8?n.parentNode:n),rs(function(){Nu(i,C,a,c)}),C}function xu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var T=d;d=function(){var C=Du(v);T.call(C)}}Nu(i,v,n,d)}else v=T0(a,i,n,d,c);return Du(v)}Nl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Hr(i.pendingLanes);a!==0&&(Gr(i,a|1),Zt(i,$e()),(Ve&6)===0&&(mo=$e()+500,ri()))}break;case 13:rs(function(){var c=Rr(n,1);if(c!==null){var d=Wt();jn(c,n,1,d)}}),gd(n,1)}},Us=function(n){if(n.tag===13){var i=Rr(n,134217728);if(i!==null){var a=Wt();jn(i,n,134217728,a)}gd(n,134217728)}},Dl=function(n){if(n.tag===13){var i=ui(n),a=Rr(n,i);if(a!==null){var c=Wt();jn(a,n,i,c)}gd(n,i)}},Ol=function(){return Pe},Vl=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},Ns=function(n,i,a){switch(i){case"input":if(Wo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Xl(c);if(!d)throw Error(t(90));Ss(c),Wo(c,d)}}}break;case"textarea":Cs(n,a);break;case"select":i=a.value,i!=null&&mr(n,!!a.multiple,i,!1)}},Mi=ud,na=rs;var I0={usingClientEntryPoint:!1,Events:[Sa,to,Xl,Gn,ta,ud]},Fa={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S0={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=sa(n),n===null?null:n.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||E0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{zi=bu.inject(S0),rn=bu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I0,en.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(i))throw Error(t(200));return w0(n,i,null,a)},en.createRoot=function(n,i){if(!_d(n))throw Error(t(299));var a=!1,c="",d=kg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=md(n,1,!1,null,null,a,!1,c,d),n[Ir]=i.current,Ea(n.nodeType===8?n.parentNode:n),new yd(i)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=sa(i),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return rs(n)},en.hydrate=function(n,i,a){if(!Vu(i))throw Error(t(200));return xu(null,n,i,!0,a)},en.hydrateRoot=function(n,i,a){if(!_d(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=kg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Sg(i,null,n,1,a??null,d,!1,m,v),n[Ir]=i.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ou(i)},en.render=function(n,i,a){if(!Vu(i))throw Error(t(200));return xu(null,n,i,!1,a)},en.unmountComponentAtNode=function(n){if(!Vu(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){xu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ir]=null})}),!0):!1},en.unstable_batchedUpdates=ud,en.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Vu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xu(n,i,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var bg;function x0(){if(bg)return Ed.exports;bg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ed.exports=V0(),Ed.exports}var Lg;function b0(){if(Lg)return Lu;Lg=1;var r=x0();return Lu.createRoot=r.createRoot,Lu.hydrateRoot=r.hydrateRoot,Lu}var L0=b0();const M0=()=>{};var Mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},F0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},A_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,I=(l&3)<<4|f>>4;let R=(f&15)<<2|_>>6,j=_&63;g||(j=64,h||(R=64)),s.push(t[w],t[I],t[R],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(S_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):F0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||I==null)throw new U0;const R=l<<2|f>>4;if(s.push(R),_!==64){const j=f<<4&240|_>>2;if(s.push(j),I!==64){const H=_<<6&192|I;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class U0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const j0=function(r){const e=S_(r);return A_.encodeByteArray(e,!0)},Zu=function(r){return j0(r).replace(/\./g,"")},k_=function(r){try{return A_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function B0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const z0=()=>B0().__FIREBASE_DEFAULTS__,$0=()=>{if(typeof process>"u"||typeof Mg>"u")return;const r=Mg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},q0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&k_(r[1]);return e&&JSON.parse(e)},vc=()=>{try{return M0()||z0()||$0()||q0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},R_=r=>{var e,t;return(t=(e=vc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},H0=r=>{const e=R_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},C_=()=>{var r;return(r=vc())===null||r===void 0?void 0:r.config},P_=r=>{var e;return(e=vc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function N_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function K0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Zu(JSON.stringify(t)),Zu(JSON.stringify(h)),""].join(".")}const Wa={};function G0(){const r={prod:[],emulator:[]};for(const e of Object.keys(Wa))Wa[e]?r.emulator.push(e):r.prod.push(e);return r}function Q0(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Fg=!1;function D_(r,e){if(typeof window>"u"||typeof document>"u"||!Lo(window.location.host)||Wa[r]===e||Wa[r]||Fg)return;Wa[r]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",l=G0().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function f(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function g(R,j){R.setAttribute("width","24"),R.setAttribute("id",j),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function _(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Fg=!0,h()},R}function w(R,j){R.setAttribute("id",j),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function I(){const R=Q0(s),j=t("text"),H=document.getElementById(j)||document.createElement("span"),K=t("learnmore"),B=document.getElementById(K)||document.createElement("a"),me=t("preprendIcon"),ce=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const he=R.element;f(he),w(B,K);const Ee=_();g(ce,me),he.append(ce,H,B,Ee),document.body.appendChild(he)}l?(H.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ce.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function X0(){var r;const e=(r=vc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function eT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tT(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function nT(){return!X0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O_(){try{return typeof indexedDB=="object"}catch{return!1}}function V_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function rT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="FirebaseError";class dr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=iT,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?sT(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new dr(o,f,s)}}function sT(r,e){return r.replace(oT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const oT=/\{\$([^}]+)}/g;function aT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ti(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Ug(l)&&Ug(h)){if(!Ti(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Ug(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ja(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ba(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function lT(r,e){const t=new uT(r,e);return t.subscribe.bind(t)}class uT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");cT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Sd),o.error===void 0&&(o.error=Sd),o.complete===void 0&&(o.complete=Sd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Sd(){}/**
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
 */function et(r){return r&&r._delegate?r._delegate:r}class qn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const as="[DEFAULT]";/**
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
 */class hT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new W0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fT(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dT(r){return r===as?void 0:r}function fT(r){return r.instantiationMode==="EAGER"}/**
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
 */class pT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Re||(Re={}));const mT={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},gT=Re.INFO,yT={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},_T=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=yT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gf{constructor(e){this.name=e,this._logLevel=gT,this._logHandler=_T,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const vT=(r,e)=>e.some(t=>r instanceof t);let jg,Bg;function wT(){return jg||(jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ET(){return Bg||(Bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x_=new WeakMap,zd=new WeakMap,b_=new WeakMap,Ad=new WeakMap,yf=new WeakMap;function TT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(br(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&x_.set(t,r)}).catch(()=>{}),yf.set(e,r),e}function IT(r){if(zd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});zd.set(r,e)}let $d={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return zd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||b_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return br(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ST(r){$d=r($d)}function AT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(kd(this),e,...t);return b_.set(s,e.sort?e.sort():[e]),br(s)}:ET().includes(r)?function(...e){return r.apply(kd(this),e),br(x_.get(this))}:function(...e){return br(r.apply(kd(this),e))}}function kT(r){return typeof r=="function"?AT(r):(r instanceof IDBTransaction&&IT(r),vT(r,wT())?new Proxy(r,$d):r)}function br(r){if(r instanceof IDBRequest)return TT(r);if(Ad.has(r))return Ad.get(r);const e=kT(r);return e!==r&&(Ad.set(r,e),yf.set(e,r)),e}const kd=r=>yf.get(r);function wc(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=br(h);return s&&h.addEventListener("upgradeneeded",g=>{s(br(h.result),g.oldVersion,g.newVersion,br(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}function Rd(r,{blocked:e}={}){const t=indexedDB.deleteDatabase(r);return e&&t.addEventListener("blocked",s=>e(s.oldVersion,s)),br(t).then(()=>{})}const RT=["get","getKey","getAll","getAllKeys","count"],CT=["put","add","delete","clear"],Cd=new Map;function zg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Cd.get(e))return Cd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=CT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||RT.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Cd.set(e,l),l}ST(r=>({...r,get:(e,t,s)=>zg(e,t)||r.get(e,t,s),has:(e,t)=>!!zg(e,t)||r.has(e,t)}));/**
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
 */class PT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(NT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function NT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qd="@firebase/app",$g="0.13.2";/**
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
 */const Mr=new gf("@firebase/app"),DT="@firebase/app-compat",OT="@firebase/analytics-compat",VT="@firebase/analytics",xT="@firebase/app-check-compat",bT="@firebase/app-check",LT="@firebase/auth",MT="@firebase/auth-compat",FT="@firebase/database",UT="@firebase/data-connect",jT="@firebase/database-compat",BT="@firebase/functions",zT="@firebase/functions-compat",$T="@firebase/installations",qT="@firebase/installations-compat",HT="@firebase/messaging",WT="@firebase/messaging-compat",KT="@firebase/performance",GT="@firebase/performance-compat",QT="@firebase/remote-config",YT="@firebase/remote-config-compat",XT="@firebase/storage",JT="@firebase/storage-compat",ZT="@firebase/firestore",eI="@firebase/ai",tI="@firebase/firestore-compat",nI="firebase",rI="11.10.0";/**
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
 */const Hd="[DEFAULT]",iI={[qd]:"fire-core",[DT]:"fire-core-compat",[VT]:"fire-analytics",[OT]:"fire-analytics-compat",[bT]:"fire-app-check",[xT]:"fire-app-check-compat",[LT]:"fire-auth",[MT]:"fire-auth-compat",[FT]:"fire-rtdb",[UT]:"fire-data-connect",[jT]:"fire-rtdb-compat",[BT]:"fire-fn",[zT]:"fire-fn-compat",[$T]:"fire-iid",[qT]:"fire-iid-compat",[HT]:"fire-fcm",[WT]:"fire-fcm-compat",[KT]:"fire-perf",[GT]:"fire-perf-compat",[QT]:"fire-rc",[YT]:"fire-rc-compat",[XT]:"fire-gcs",[JT]:"fire-gcs-compat",[ZT]:"fire-fst",[tI]:"fire-fst-compat",[eI]:"fire-vertex","fire-js":"fire-js",[nI]:"fire-js-all"};/**
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
 */const ec=new Map,sI=new Map,Wd=new Map;function qg(r,e){try{r.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function cr(r){const e=r.name;if(Wd.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Wd.set(e,r);for(const t of ec.values())qg(t,r);for(const t of sI.values())qg(t,r);return!0}function Mo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Tn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const oI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new _s("app","Firebase",oI);/**
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
 */class aI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
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
 */const Fo=rI;function L_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=C_()),!t)throw _i.create("no-options");const l=ec.get(o);if(l){if(Ti(t,l.options)&&Ti(s,l.config))return l;throw _i.create("duplicate-app",{appName:o})}const h=new pT(o);for(const g of Wd.values())h.addComponent(g);const f=new aI(t,s,h);return ec.set(o,f),f}function _f(r=Hd){const e=ec.get(r);if(!e&&r===Hd&&C_())return L_();if(!e)throw _i.create("no-app",{appName:r});return e}function Sn(r,e,t){var s;let o=(s=iI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(f.join(" "));return}cr(new qn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const lI="firebase-heartbeat-database",uI=1,Xa="firebase-heartbeat-store";let Pd=null;function M_(){return Pd||(Pd=wc(lI,uI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Xa)}catch(t){console.warn(t)}}}}).catch(r=>{throw _i.create("idb-open",{originalErrorMessage:r.message})})),Pd}async function cI(r){try{const t=(await M_()).transaction(Xa),s=await t.objectStore(Xa).get(F_(r));return await t.done,s}catch(e){if(e instanceof dr)Mr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function Hg(r,e){try{const s=(await M_()).transaction(Xa,"readwrite");await s.objectStore(Xa).put(e,F_(r)),await s.done}catch(t){if(t instanceof dr)Mr.warn(t.message);else{const s=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(s.message)}}}function F_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const hI=1024,dI=30;class fI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Wg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>dI){const h=gI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Mr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wg(),{heartbeatsToSend:s,unsentEntries:o}=pI(this._heartbeatsCache.heartbeats),l=Zu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function Wg(){return new Date().toISOString().substring(0,10)}function pI(r,e=hI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Kg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Kg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class mI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O_()?V_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Kg(r){return Zu(JSON.stringify({version:2,heartbeats:r})).length}function gI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function yI(r){cr(new qn("platform-logger",e=>new PT(e),"PRIVATE")),cr(new qn("heartbeat",e=>new fI(e),"PRIVATE")),Sn(qd,$g,r),Sn(qd,$g,"esm2017"),Sn("fire-js","")}yI("");function vf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function U_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _I=U_,j_=new _s("auth","Firebase",U_());/**
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
 */const tc=new gf("@firebase/auth");function vI(r,...e){tc.logLevel<=Re.WARN&&tc.warn(`Auth (${Fo}): ${r}`,...e)}function $u(r,...e){tc.logLevel<=Re.ERROR&&tc.error(`Auth (${Fo}): ${r}`,...e)}/**
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
 */function An(r,...e){throw Ef(r,...e)}function zn(r,...e){return Ef(r,...e)}function wf(r,e,t){const s=Object.assign(Object.assign({},_I()),{[e]:t});return new _s("auth","Firebase",s).create(e,{appName:r.name})}function vi(r){return wf(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wI(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&An(r,"argument-error"),wf(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ef(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return j_.create(r,...e)}function ge(r,e,...t){if(!r)throw Ef(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw $u(e),new Error(e)}function Fr(r,e){r||Vr(e)}/**
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
 */function Kd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function EI(){return Gg()==="http:"||Gg()==="https:"}function Gg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function TI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EI()||Z0()||"connection"in navigator)?navigator.onLine:!0}function II(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class cl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fr(t>e,"Short delay should be less than long delay!"),this.isMobile=Y0()||eT()}get(){return TI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tf(r,e){Fr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class B_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kI=new cl(3e4,6e4);function vs(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ni(r,e,t,s,o={}){return z_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=ul(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return J0()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Lo(r.emulatorConfig.host)&&(_.credentials="include"),B_.fetch()(await $_(r,r.config.apiHost,t,f),_)})}async function z_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},SI),e);try{const o=new CI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Mu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Mu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Mu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw wf(r,w,_);An(r,w)}}catch(o){if(o instanceof dr)throw o;An(r,"network-request-failed",{message:String(o)})}}async function Ec(r,e,t,s,o={}){const l=await Ni(r,e,t,s,o);return"mfaPendingCredential"in l&&An(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function $_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Tf(r.config,o):`${r.config.apiScheme}://${o}`;return AI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function RI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(zn(this.auth,"network-request-failed")),kI.get())})}}function Mu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=zn(r,e,s);return o.customData._tokenResponse=t,o}function Qg(r){return r!==void 0&&r.enterprise!==void 0}class PI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return RI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NI(r,e){return Ni(r,"GET","/v2/recaptchaConfig",vs(r,e))}/**
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
 */async function DI(r,e){return Ni(r,"POST","/v1/accounts:delete",e)}async function nc(r,e){return Ni(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ka(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OI(r,e=!1){const t=et(r),s=await t.getIdToken(e),o=If(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ka(Nd(o.auth_time)),issuedAtTime:Ka(Nd(o.iat)),expirationTime:Ka(Nd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Nd(r){return Number(r)*1e3}function If(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return $u("JWT malformed, contained fewer than 3 sections"),null;try{const o=k_(t);return o?JSON.parse(o):($u("Failed to decode base64 JWT payload"),null)}catch(o){return $u("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Yg(r){const e=If(r);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ja(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof dr&&VI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function VI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class xI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ka(this.lastLoginAt),this.creationTime=Ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Ja(r,nc(t,{idToken:s}));ge(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?q_(l.providerUserInfo):[],f=LI(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=g?_:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Gd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,I)}async function bI(r){const e=et(r);await rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function q_(r){return r.map(e=>{var{providerId:t}=e,s=vf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function MI(r,e){const t=await z_(r,{},async()=>{const s=ul({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await $_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:s};return r.emulatorConfig&&Lo(r.emulatorConfig.host)&&(g.credentials="include"),B_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function FI(r,e){return Ni(r,"POST","/v2/accounts:revokeToken",vs(r,e))}/**
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
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=Yg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await MI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Eo;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ge(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function fi(r,e){ge(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Gd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ja(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return OI(this,e)}reload(){return bI(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await rc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await Ja(this,DI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,_,w;const I=(s=t.displayName)!==null&&s!==void 0?s:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,H=(h=t.photoURL)!==null&&h!==void 0?h:void 0,K=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,me=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ce=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:he,emailVerified:Ee,isAnonymous:Qe,providerData:ke,stsTokenManager:D}=t;ge(he&&D,e,"internal-error");const S=Eo.fromJSON(this.name,D);ge(typeof he=="string",e,"internal-error"),fi(I,e.name),fi(R,e.name),ge(typeof Ee=="boolean",e,"internal-error"),ge(typeof Qe=="boolean",e,"internal-error"),fi(j,e.name),fi(H,e.name),fi(K,e.name),fi(B,e.name),fi(me,e.name),fi(ce,e.name);const k=new Bn({uid:he,auth:e,email:R,emailVerified:Ee,displayName:I,isAnonymous:Qe,photoURL:H,phoneNumber:j,tenantId:K,stsTokenManager:S,createdAt:me,lastLoginAt:ce});return ke&&Array.isArray(ke)&&(k.providerData=ke.map(P=>Object.assign({},P))),B&&(k._redirectEventId=B),k}static async _fromIdTokenResponse(e,t,s=!1){const o=new Eo;o.updateFromServerResponse(t);const l=new Bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await rc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?q_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Eo;f.updateFromIdToken(s);const g=new Bn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Gd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const Xg=new Map;function xr(r){Fr(r instanceof Function,"Expected a class definition");let e=Xg.get(r);return e?(Fr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Xg.set(r,e),e)}/**
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
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}H_.type="NONE";const Jg=H_;/**
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
 */function qu(r,e,t){return`firebase:${r}:${e}:${t}`}class To{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=qu(this.userKey,o.apiKey,l),this.fullPersistenceKey=qu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await nc(this.auth,{idToken:e}).catch(()=>{});return t?Bn._fromGetAccountInfoResponse(this.auth,t,e):null}return Bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new To(xr(Jg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||xr(Jg);const h=qu(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){let I;if(typeof w=="string"){const R=await nc(e,{idToken:w}).catch(()=>{});if(!R)break;I=await Bn._fromGetAccountInfoResponse(e,R,w)}else I=Bn._fromJSON(e,w);_!==l&&(f=I),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new To(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new To(l,e,s))}}/**
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
 */function Zg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X_(e))return"Blackberry";if(J_(e))return"Webos";if(K_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Y_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function W_(r=zt()){return/firefox\//i.test(r)}function K_(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(r=zt()){return/crios\//i.test(r)}function Q_(r=zt()){return/iemobile/i.test(r)}function Y_(r=zt()){return/android/i.test(r)}function X_(r=zt()){return/blackberry/i.test(r)}function J_(r=zt()){return/webos/i.test(r)}function Sf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function UI(r=zt()){var e;return Sf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jI(){return tT()&&document.documentMode===10}function Z_(r=zt()){return Sf(r)||Y_(r)||J_(r)||X_(r)||/windows phone/i.test(r)||Q_(r)}/**
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
 */function ev(r,e=[]){let t;switch(r){case"Browser":t=Zg(zt());break;case"Worker":t=`${Zg(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fo}/${s}`}/**
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
 */class BI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function zI(r,e={}){return Ni(r,"GET","/v2/passwordPolicy",vs(r,e))}/**
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
 */const $I=6;class qI{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:$I,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class HI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ey(this),this.idTokenSubscription=new ey(this),this.beforeStateQueue=new BI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nc(this,{idToken:e}),s=await Bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=II()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(vi(this));const t=e?et(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zI(this),t=new qI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await FI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ws(r){return et(r)}class ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=lT(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WI(r){Tc=r}function tv(r){return Tc.loadJS(r)}function KI(){return Tc.recaptchaEnterpriseScript}function GI(){return Tc.gapiScript}function QI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class YI{constructor(){this.enterprise=new XI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class XI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const JI="recaptcha-enterprise",nv="NO_RECAPTCHA";class ZI{constructor(e){this.type=JI,this.auth=ws(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{NI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new PI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Qg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(nv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Qg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=KI();g.length!==0&&(g+=f),tv(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function ty(r,e,t,s=!1,o=!1){const l=new ZI(r);let h;if(o)h=nv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function ny(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await ty(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await ty(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
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
 */function eS(r,e){const t=Mo(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ti(l,e??{}))return o;An(o,"already-initialized")}return t.initialize({options:e})}function tS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function nS(r,e,t){const s=ws(r);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=rv(e),{host:h,port:f}=rS(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(Ti(_,s.config.emulator)&&Ti(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Lo(h)?(N_(`${l}//${h}${g}`),D_("Auth",!0)):iS()}function rv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function rS(r){const e=rv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:ry(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:ry(h)}}}function ry(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function iS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Af{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function sS(r,e){return Ni(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function oS(r,e){return Ec(r,"POST","/v1/accounts:signInWithPassword",vs(r,e))}/**
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
 */async function aS(r,e){return Ec(r,"POST","/v1/accounts:signInWithEmailLink",vs(r,e))}async function lS(r,e){return Ec(r,"POST","/v1/accounts:signInWithEmailLink",vs(r,e))}/**
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
 */class Za extends Af{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Za(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Za(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ny(e,t,"signInWithPassword",oS);case"emailLink":return aS(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ny(e,s,"signUpPassword",sS);case"emailLink":return lS(e,{idToken:t,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Io(r,e){return Ec(r,"POST","/v1/accounts:signInWithIdp",vs(r,e))}/**
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
 */const uS="http://localhost";class fs extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):An("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=vf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new fs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Io(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Io(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Io(e,t)}buildRequest(){const e={requestUri:uS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ul(t)}return e}}/**
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
 */function cS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hS(r){const e=ja(Ba(r)).link,t=e?ja(Ba(e)).deep_link_id:null,s=ja(Ba(r)).deep_link_id;return(s?ja(Ba(s)).link:null)||s||t||e||r}class kf{constructor(e){var t,s,o,l,h,f;const g=ja(Ba(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,I=cS((o=g.mode)!==null&&o!==void 0?o:null);ge(_&&w&&I,"argument-error"),this.apiKey=_,this.operation=I,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=hS(e);try{return new kf(t)}catch{return null}}}/**
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
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(e,t){return Za._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=kf.parseLink(t);return ge(s,"argument-error"),Za._fromEmailAndCode(e,s.code,s.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hl extends Rf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pi extends hl{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
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
 */class Or extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Or.credential(t,s)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
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
 */class mi extends hl{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
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
 */class gi extends hl{constructor(){super("twitter.com")}static credential(e,t){return fs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gi.credential(t,s)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
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
 */class Ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Bn._fromIdTokenResponse(e,s,o),h=iy(s);return new Ro({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=iy(s);return new Ro({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function iy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ic extends dr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ic.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ic(e,t,s,o)}}function iv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ic._fromErrorAndOperation(r,l,e,s):l})}async function dS(r,e,t=!1){const s=await Ja(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ro._forOperation(r,"link",s)}/**
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
 */async function fS(r,e,t=!1){const{auth:s}=r;if(Tn(s.app))return Promise.reject(vi(s));const o="reauthenticate";try{const l=await Ja(r,iv(s,o,e,r),t);ge(l.idToken,s,"internal-error");const h=If(l.idToken);ge(h,s,"internal-error");const{sub:f}=h;return ge(r.uid===f,s,"user-mismatch"),Ro._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&An(s,"user-mismatch"),l}}/**
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
 */async function sv(r,e,t=!1){if(Tn(r.app))return Promise.reject(vi(r));const s="signIn",o=await iv(r,s,e),l=await Ro._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function pS(r,e){return sv(ws(r),e)}/**
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
 */async function mS(r){const e=ws(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function gS(r,e,t){return Tn(r.app)?Promise.reject(vi(r)):pS(et(r),Uo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&mS(r),s})}function yS(r,e,t,s){return et(r).onIdTokenChanged(e,t,s)}function _S(r,e,t){return et(r).beforeAuthStateChanged(e,t)}function vS(r,e,t,s){return et(r).onAuthStateChanged(e,t,s)}function wS(r){return et(r).signOut()}const sc="__sak";/**
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
 */class ov{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(sc,"1"),this.storage.removeItem(sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ES=1e3,TS=10;class av extends ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);jI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,TS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ES)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}av.type="LOCAL";const IS=av;/**
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
 */class lv extends ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lv.type="SESSION";const uv=lv;/**
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
 */function SS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await SS(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
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
 */function Cf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class AS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=Cf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(I){const R=I;if(R.data.eventId===_)switch(R.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function sr(){return window}function kS(r){sr().location.href=r}/**
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
 */function cv(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function RS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function PS(){return cv()?self:null}/**
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
 */const hv="firebaseLocalStorageDb",NS=1,oc="firebaseLocalStorage",dv="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sc(r,e){return r.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function DS(){const r=indexedDB.deleteDatabase(hv);return new dl(r).toPromise()}function Qd(){const r=indexedDB.open(hv,NS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(oc,{keyPath:dv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(oc)?e(s):(s.close(),await DS(),e(await Qd()))})})}async function sy(r,e,t){const s=Sc(r,!0).put({[dv]:e,value:t});return new dl(s).toPromise()}async function OS(r,e){const t=Sc(r,!1).get(e),s=await new dl(t).toPromise();return s===void 0?null:s.value}function oy(r,e){const t=Sc(r,!0).delete(e);return new dl(t).toPromise()}const VS=800,xS=3;class fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>xS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(PS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await RS(),!this.activeServiceWorker)return;this.sender=new AS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await sy(e,sc,"1"),await oy(e,sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>sy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>OS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Sc(o,!1).getAll();return new dl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fv.type="LOCAL";const bS=fv;new cl(3e4,6e4);/**
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
 */function pv(r,e){return e?xr(e):(ge(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Pf extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LS(r){return sv(r.auth,new Pf(r),r.bypassAuthState)}function MS(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),fS(t,new Pf(r),r.bypassAuthState)}async function FS(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),dS(t,new Pf(r),r.bypassAuthState)}/**
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
 */class mv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LS;case"linkViaPopup":case"linkViaRedirect":return FS;case"reauthViaPopup":case"reauthViaRedirect":return MS;default:An(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const US=new cl(2e3,1e4);async function jS(r,e,t){if(Tn(r.app))return Promise.reject(zn(r,"operation-not-supported-in-this-environment"));const s=ws(r);wI(r,e,Rf);const o=pv(s,t);return new ls(s,"signInViaPopup",e,o).executeNotNull()}class ls extends mv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,US.get())};e()}}ls.currentPopupAction=null;/**
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
 */const BS="pendingRedirect",Hu=new Map;class zS extends mv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Hu.get(this.auth._key());if(!e){try{const s=await $S(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Hu.set(this.auth._key(),e)}return this.bypassAuthState||Hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $S(r,e){const t=WS(e),s=HS(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function qS(r,e){Hu.set(r._key(),e)}function HS(r){return xr(r._redirectPersistence)}function WS(r){return qu(BS,r.config.apiKey,r.name)}async function KS(r,e,t=!1){if(Tn(r.app))return Promise.reject(vi(r));const s=ws(r),o=pv(s,e),h=await new zS(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const GS=600*1e3;class QS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!gv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ay(e))}saveEventToCache(e){this.cachedEventUids.add(ay(e)),this.lastProcessedEventTime=Date.now()}}function ay(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function gv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gv(r);default:return!1}}/**
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
 */async function XS(r,e={}){return Ni(r,"GET","/v1/projects",e)}/**
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
 */const JS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZS=/^https?/;async function e1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await XS(r);for(const t of e)try{if(t1(t))return}catch{}An(r,"unauthorized-domain")}function t1(r){const e=Kd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!ZS.test(t))return!1;if(JS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const n1=new cl(3e4,6e4);function ly(){const r=sr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function r1(r){return new Promise((e,t)=>{var s,o,l;function h(){ly(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ly(),t(zn(r,"network-request-failed"))},timeout:n1.get()})}if(!((o=(s=sr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)h();else{const f=QI("iframefcb");return sr()[f]=()=>{gapi.load?h():t(zn(r,"network-request-failed"))},tv(`${GI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Wu=null,e})}let Wu=null;function i1(r){return Wu=Wu||r1(r),Wu}/**
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
 */const s1=new cl(5e3,15e3),o1="__/auth/iframe",a1="emulator/auth/iframe",l1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c1(r){const e=r.config;ge(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Tf(e,a1):`https://${r.config.authDomain}/${o1}`,s={apiKey:e.apiKey,appName:r.name,v:Fo},o=u1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ul(s).slice(1)}`}async function h1(r){const e=await i1(r),t=sr().gapi;return ge(t,r,"internal-error"),e.open({where:document.body,url:c1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=zn(r,"network-request-failed"),f=sr().setTimeout(()=>{l(h)},s1.get());function g(){sr().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const d1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f1=500,p1=600,m1="_blank",g1="http://localhost";class uy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y1(r,e,t,s=f1,o=p1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},d1),{width:s.toString(),height:o.toString(),top:l,left:h}),_=zt().toLowerCase();t&&(f=G_(_)?m1:t),W_(_)&&(e=e||g1,g.scrollbars="yes");const w=Object.entries(g).reduce((R,[j,H])=>`${R}${j}=${H},`,"");if(UI(_)&&f!=="_self")return _1(e||"",f),new uy(null);const I=window.open(e||"",f,w);ge(I,r,"popup-blocked");try{I.focus()}catch{}return new uy(I)}function _1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const v1="__/auth/handler",w1="emulator/auth/handler",E1=encodeURIComponent("fac");async function cy(r,e,t,s,o,l){ge(r.config.authDomain,r,"auth-domain-config-required"),ge(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Fo,eventId:o};if(e instanceof Rf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",aT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,I]of Object.entries({}))h[w]=I}if(e instanceof hl){const w=e.getScopes().filter(I=>I!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),_=g?`#${E1}=${encodeURIComponent(g)}`:"";return`${T1(r)}?${ul(f).slice(1)}${_}`}function T1({config:r}){return r.emulator?Tf(r,w1):`https://${r.authDomain}/${v1}`}/**
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
 */const Dd="webStorageSupport";class I1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uv,this._completeRedirectFn=KS,this._overrideRedirectResult=qS}async _openPopup(e,t,s,o){var l;Fr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await cy(e,t,s,Kd(),o);return y1(e,h,Cf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await cy(e,t,s,Kd(),o);return kS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Fr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await h1(e),s=new QS(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Dd,{type:Dd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Dd];h!==void 0&&t(!!h),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=e1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Z_()||K_()||Sf()}}const S1=I1;var hy="@firebase/auth",dy="1.10.8";/**
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
 */class A1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function k1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R1(r){cr(new qn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ev(r)},_=new HI(s,o,l,g);return tS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),cr(new qn("auth-internal",e=>{const t=ws(e.getProvider("auth").getImmediate());return(s=>new A1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(hy,dy,k1(r)),Sn(hy,dy,"esm2017")}/**
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
 */const C1=300,P1=P_("authIdTokenMaxAge")||C1;let fy=null;const N1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>P1)return;const o=t==null?void 0:t.token;fy!==o&&(fy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function D1(r=_f()){const e=Mo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=eS(r,{popupRedirectResolver:S1,persistence:[bS,IS,uv]}),s=P_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=N1(l.toString());_S(t,h,()=>h(t.currentUser)),yS(t,f=>h(f))}}const o=R_("auth");return o&&nS(t,`http://${o}`),t}function O1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}WI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=zn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",O1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R1("Browser");var V1="firebase",x1="11.10.0";/**
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
 */Sn(V1,x1,"app");var py=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wi,yv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function k(){}k.prototype=S.prototype,D.D=S.prototype,D.prototype=new k,D.prototype.constructor=D,D.C=function(P,O,x){for(var A=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)A[rt-2]=arguments[rt];return S.prototype[O].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,k){k||(k=0);var P=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)P[O]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(O=0;16>O;++O)P[O]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=D.g[0],k=D.g[1],O=D.g[2];var x=D.g[3],A=S+(x^k&(O^x))+P[0]+3614090360&4294967295;S=k+(A<<7&4294967295|A>>>25),A=x+(O^S&(k^O))+P[1]+3905402710&4294967295,x=S+(A<<12&4294967295|A>>>20),A=O+(k^x&(S^k))+P[2]+606105819&4294967295,O=x+(A<<17&4294967295|A>>>15),A=k+(S^O&(x^S))+P[3]+3250441966&4294967295,k=O+(A<<22&4294967295|A>>>10),A=S+(x^k&(O^x))+P[4]+4118548399&4294967295,S=k+(A<<7&4294967295|A>>>25),A=x+(O^S&(k^O))+P[5]+1200080426&4294967295,x=S+(A<<12&4294967295|A>>>20),A=O+(k^x&(S^k))+P[6]+2821735955&4294967295,O=x+(A<<17&4294967295|A>>>15),A=k+(S^O&(x^S))+P[7]+4249261313&4294967295,k=O+(A<<22&4294967295|A>>>10),A=S+(x^k&(O^x))+P[8]+1770035416&4294967295,S=k+(A<<7&4294967295|A>>>25),A=x+(O^S&(k^O))+P[9]+2336552879&4294967295,x=S+(A<<12&4294967295|A>>>20),A=O+(k^x&(S^k))+P[10]+4294925233&4294967295,O=x+(A<<17&4294967295|A>>>15),A=k+(S^O&(x^S))+P[11]+2304563134&4294967295,k=O+(A<<22&4294967295|A>>>10),A=S+(x^k&(O^x))+P[12]+1804603682&4294967295,S=k+(A<<7&4294967295|A>>>25),A=x+(O^S&(k^O))+P[13]+4254626195&4294967295,x=S+(A<<12&4294967295|A>>>20),A=O+(k^x&(S^k))+P[14]+2792965006&4294967295,O=x+(A<<17&4294967295|A>>>15),A=k+(S^O&(x^S))+P[15]+1236535329&4294967295,k=O+(A<<22&4294967295|A>>>10),A=S+(O^x&(k^O))+P[1]+4129170786&4294967295,S=k+(A<<5&4294967295|A>>>27),A=x+(k^O&(S^k))+P[6]+3225465664&4294967295,x=S+(A<<9&4294967295|A>>>23),A=O+(S^k&(x^S))+P[11]+643717713&4294967295,O=x+(A<<14&4294967295|A>>>18),A=k+(x^S&(O^x))+P[0]+3921069994&4294967295,k=O+(A<<20&4294967295|A>>>12),A=S+(O^x&(k^O))+P[5]+3593408605&4294967295,S=k+(A<<5&4294967295|A>>>27),A=x+(k^O&(S^k))+P[10]+38016083&4294967295,x=S+(A<<9&4294967295|A>>>23),A=O+(S^k&(x^S))+P[15]+3634488961&4294967295,O=x+(A<<14&4294967295|A>>>18),A=k+(x^S&(O^x))+P[4]+3889429448&4294967295,k=O+(A<<20&4294967295|A>>>12),A=S+(O^x&(k^O))+P[9]+568446438&4294967295,S=k+(A<<5&4294967295|A>>>27),A=x+(k^O&(S^k))+P[14]+3275163606&4294967295,x=S+(A<<9&4294967295|A>>>23),A=O+(S^k&(x^S))+P[3]+4107603335&4294967295,O=x+(A<<14&4294967295|A>>>18),A=k+(x^S&(O^x))+P[8]+1163531501&4294967295,k=O+(A<<20&4294967295|A>>>12),A=S+(O^x&(k^O))+P[13]+2850285829&4294967295,S=k+(A<<5&4294967295|A>>>27),A=x+(k^O&(S^k))+P[2]+4243563512&4294967295,x=S+(A<<9&4294967295|A>>>23),A=O+(S^k&(x^S))+P[7]+1735328473&4294967295,O=x+(A<<14&4294967295|A>>>18),A=k+(x^S&(O^x))+P[12]+2368359562&4294967295,k=O+(A<<20&4294967295|A>>>12),A=S+(k^O^x)+P[5]+4294588738&4294967295,S=k+(A<<4&4294967295|A>>>28),A=x+(S^k^O)+P[8]+2272392833&4294967295,x=S+(A<<11&4294967295|A>>>21),A=O+(x^S^k)+P[11]+1839030562&4294967295,O=x+(A<<16&4294967295|A>>>16),A=k+(O^x^S)+P[14]+4259657740&4294967295,k=O+(A<<23&4294967295|A>>>9),A=S+(k^O^x)+P[1]+2763975236&4294967295,S=k+(A<<4&4294967295|A>>>28),A=x+(S^k^O)+P[4]+1272893353&4294967295,x=S+(A<<11&4294967295|A>>>21),A=O+(x^S^k)+P[7]+4139469664&4294967295,O=x+(A<<16&4294967295|A>>>16),A=k+(O^x^S)+P[10]+3200236656&4294967295,k=O+(A<<23&4294967295|A>>>9),A=S+(k^O^x)+P[13]+681279174&4294967295,S=k+(A<<4&4294967295|A>>>28),A=x+(S^k^O)+P[0]+3936430074&4294967295,x=S+(A<<11&4294967295|A>>>21),A=O+(x^S^k)+P[3]+3572445317&4294967295,O=x+(A<<16&4294967295|A>>>16),A=k+(O^x^S)+P[6]+76029189&4294967295,k=O+(A<<23&4294967295|A>>>9),A=S+(k^O^x)+P[9]+3654602809&4294967295,S=k+(A<<4&4294967295|A>>>28),A=x+(S^k^O)+P[12]+3873151461&4294967295,x=S+(A<<11&4294967295|A>>>21),A=O+(x^S^k)+P[15]+530742520&4294967295,O=x+(A<<16&4294967295|A>>>16),A=k+(O^x^S)+P[2]+3299628645&4294967295,k=O+(A<<23&4294967295|A>>>9),A=S+(O^(k|~x))+P[0]+4096336452&4294967295,S=k+(A<<6&4294967295|A>>>26),A=x+(k^(S|~O))+P[7]+1126891415&4294967295,x=S+(A<<10&4294967295|A>>>22),A=O+(S^(x|~k))+P[14]+2878612391&4294967295,O=x+(A<<15&4294967295|A>>>17),A=k+(x^(O|~S))+P[5]+4237533241&4294967295,k=O+(A<<21&4294967295|A>>>11),A=S+(O^(k|~x))+P[12]+1700485571&4294967295,S=k+(A<<6&4294967295|A>>>26),A=x+(k^(S|~O))+P[3]+2399980690&4294967295,x=S+(A<<10&4294967295|A>>>22),A=O+(S^(x|~k))+P[10]+4293915773&4294967295,O=x+(A<<15&4294967295|A>>>17),A=k+(x^(O|~S))+P[1]+2240044497&4294967295,k=O+(A<<21&4294967295|A>>>11),A=S+(O^(k|~x))+P[8]+1873313359&4294967295,S=k+(A<<6&4294967295|A>>>26),A=x+(k^(S|~O))+P[15]+4264355552&4294967295,x=S+(A<<10&4294967295|A>>>22),A=O+(S^(x|~k))+P[6]+2734768916&4294967295,O=x+(A<<15&4294967295|A>>>17),A=k+(x^(O|~S))+P[13]+1309151649&4294967295,k=O+(A<<21&4294967295|A>>>11),A=S+(O^(k|~x))+P[4]+4149444226&4294967295,S=k+(A<<6&4294967295|A>>>26),A=x+(k^(S|~O))+P[11]+3174756917&4294967295,x=S+(A<<10&4294967295|A>>>22),A=O+(S^(x|~k))+P[2]+718787259&4294967295,O=x+(A<<15&4294967295|A>>>17),A=k+(x^(O|~S))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(O+(A<<21&4294967295|A>>>11))&4294967295,D.g[2]=D.g[2]+O&4294967295,D.g[3]=D.g[3]+x&4294967295}s.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var k=S-this.blockSize,P=this.B,O=this.h,x=0;x<S;){if(O==0)for(;x<=k;)o(this,D,x),x+=this.blockSize;if(typeof D=="string"){for(;x<S;)if(P[O++]=D.charCodeAt(x++),O==this.blockSize){o(this,P),O=0;break}}else for(;x<S;)if(P[O++]=D[x++],O==this.blockSize){o(this,P),O=0;break}}this.h=O,this.o+=S},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var k=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=k&255,k/=256;for(this.u(D),D=Array(16),S=k=0;4>S;++S)for(var P=0;32>P;P+=8)D[k++]=this.g[S]>>>P&255;return D};function l(D,S){var k=f;return Object.prototype.hasOwnProperty.call(k,D)?k[D]:k[D]=S(D)}function h(D,S){this.h=S;for(var k=[],P=!0,O=D.length-1;0<=O;O--){var x=D[O]|0;P&&x==S||(k[O]=x,P=!1)}this.g=k}var f={};function g(D){return-128<=D&&128>D?l(D,function(S){return new h([S|0],0>S?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return I;if(0>D)return B(_(-D));for(var S=[],k=1,P=0;D>=k;P++)S[P]=D/k|0,k*=4294967296;return new h(S,0)}function w(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return B(w(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=_(Math.pow(S,8)),P=I,O=0;O<D.length;O+=8){var x=Math.min(8,D.length-O),A=parseInt(D.substring(O,O+x),S);8>x?(x=_(Math.pow(S,x)),P=P.j(x).add(_(A))):(P=P.j(k),P=P.add(_(A)))}return P}var I=g(0),R=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(K(this))return-B(this).m();for(var D=0,S=1,k=0;k<this.g.length;k++){var P=this.i(k);D+=(0<=P?P:4294967296+P)*S,S*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(H(this))return"0";if(K(this))return"-"+B(this).toString(D);for(var S=_(Math.pow(D,6)),k=this,P="";;){var O=Ee(k,S).g;k=me(k,O.j(S));var x=((0<k.g.length?k.g[0]:k.h)>>>0).toString(D);if(k=O,H(k))return x+P;for(;6>x.length;)x="0"+x;P=x+P}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function H(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function K(D){return D.h==-1}r.l=function(D){return D=me(this,D),K(D)?-1:H(D)?0:1};function B(D){for(var S=D.g.length,k=[],P=0;P<S;P++)k[P]=~D.g[P];return new h(k,~D.h).add(R)}r.abs=function(){return K(this)?B(this):this},r.add=function(D){for(var S=Math.max(this.g.length,D.g.length),k=[],P=0,O=0;O<=S;O++){var x=P+(this.i(O)&65535)+(D.i(O)&65535),A=(x>>>16)+(this.i(O)>>>16)+(D.i(O)>>>16);P=A>>>16,x&=65535,A&=65535,k[O]=A<<16|x}return new h(k,k[k.length-1]&-2147483648?-1:0)};function me(D,S){return D.add(B(S))}r.j=function(D){if(H(this)||H(D))return I;if(K(this))return K(D)?B(this).j(B(D)):B(B(this).j(D));if(K(D))return B(this.j(B(D)));if(0>this.l(j)&&0>D.l(j))return _(this.m()*D.m());for(var S=this.g.length+D.g.length,k=[],P=0;P<2*S;P++)k[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<D.g.length;O++){var x=this.i(P)>>>16,A=this.i(P)&65535,rt=D.i(O)>>>16,Ot=D.i(O)&65535;k[2*P+2*O]+=A*Ot,ce(k,2*P+2*O),k[2*P+2*O+1]+=x*Ot,ce(k,2*P+2*O+1),k[2*P+2*O+1]+=A*rt,ce(k,2*P+2*O+1),k[2*P+2*O+2]+=x*rt,ce(k,2*P+2*O+2)}for(P=0;P<S;P++)k[P]=k[2*P+1]<<16|k[2*P];for(P=S;P<2*S;P++)k[P]=0;return new h(k,0)};function ce(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function he(D,S){this.g=D,this.h=S}function Ee(D,S){if(H(S))throw Error("division by zero");if(H(D))return new he(I,I);if(K(D))return S=Ee(B(D),S),new he(B(S.g),B(S.h));if(K(S))return S=Ee(D,B(S)),new he(B(S.g),S.h);if(30<D.g.length){if(K(D)||K(S))throw Error("slowDivide_ only works with positive integers.");for(var k=R,P=S;0>=P.l(D);)k=Qe(k),P=Qe(P);var O=ke(k,1),x=ke(P,1);for(P=ke(P,2),k=ke(k,2);!H(P);){var A=x.add(P);0>=A.l(D)&&(O=O.add(k),x=A),P=ke(P,1),k=ke(k,1)}return S=me(D,O.j(S)),new he(O,S)}for(O=I;0<=D.l(S);){for(k=Math.max(1,Math.floor(D.m()/S.m())),P=Math.ceil(Math.log(k)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),x=_(k),A=x.j(S);K(A)||0<A.l(D);)k-=P,x=_(k),A=x.j(S);H(x)&&(x=R),O=O.add(x),D=me(D,A)}return new he(O,D)}r.A=function(D){return Ee(this,D).h},r.and=function(D){for(var S=Math.max(this.g.length,D.g.length),k=[],P=0;P<S;P++)k[P]=this.i(P)&D.i(P);return new h(k,this.h&D.h)},r.or=function(D){for(var S=Math.max(this.g.length,D.g.length),k=[],P=0;P<S;P++)k[P]=this.i(P)|D.i(P);return new h(k,this.h|D.h)},r.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),k=[],P=0;P<S;P++)k[P]=this.i(P)^D.i(P);return new h(k,this.h^D.h)};function Qe(D){for(var S=D.g.length+1,k=[],P=0;P<S;P++)k[P]=D.i(P)<<1|D.i(P-1)>>>31;return new h(k,D.h)}function ke(D,S){var k=S>>5;S%=32;for(var P=D.g.length-k,O=[],x=0;x<P;x++)O[x]=0<S?D.i(x+k)>>>S|D.i(x+k+1)<<32-S:D.i(x+k);return new h(O,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,yv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,wi=h}).apply(typeof py<"u"?py:typeof self<"u"?self:typeof window<"u"?window:{});var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _v,za,vv,Ku,Yd,wv,Ev,Tv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fu=="object"&&Fu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var b=u[E];if(!(b in y))break e;y=y[b]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,b={next:function(){if(!E&&y<u.length){var U=y++;return{value:p(U,u[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,y){return u.call.apply(u.bind,arguments)}function I(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,E),u.apply(p,b)}}return function(){return u.apply(p,arguments)}}function R(u,p,y){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:I,R.apply(null,arguments)}function j(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function H(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,b,U){for(var J=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)J[Fe-2]=arguments[Fe];return p.prototype[b].apply(E,J)}}function K(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function B(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const b=u.length||0,U=E.length||0;u.length=b+U;for(let J=0;J<U;J++)u[b+J]=E[J]}else u.push(E)}}class me{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ce(u){return/^[\s\xa0]*$/.test(u)}function he(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function Ee(u){return Ee[" "](u),u}Ee[" "]=function(){};var Qe=he().indexOf("Gecko")!=-1&&!(he().toLowerCase().indexOf("webkit")!=-1&&he().indexOf("Edge")==-1)&&!(he().indexOf("Trident")!=-1||he().indexOf("MSIE")!=-1)&&he().indexOf("Edge")==-1;function ke(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function D(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function S(u){const p={};for(const y in u)p[y]=u[y];return p}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,p){let y,E;for(let b=1;b<arguments.length;b++){E=arguments[b];for(y in E)u[y]=E[y];for(let U=0;U<k.length;U++)y=k[U],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function O(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function x(u){f.setTimeout(()=>{throw u},0)}function A(){var u=de;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class rt{constructor(){this.h=this.g=null}add(p,y){const E=Ot.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Ot=new me(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Z=!1,de=new rt,re=()=>{const u=f.Promise.resolve(void 0);Ue=()=>{u.then(V)}};var V=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){x(y)}var p=Ot;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Z=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Te=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Se(u,p){if(ue.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Qe){e:{try{Ee(p.nodeName);var b=!0;break e}catch{}b=!1}b||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Se.aa.h.call(this)}}H(Se,ue);var Ne={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Le=0;function ze(u,p,y,E,b){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=b,this.key=++Le,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fr(u){this.src=u,this.g={},this.h=0}fr.prototype.add=function(u,p,y,E,b){var U=u.toString();u=this.g[U],u||(u=this.g[U]=[],this.h++);var J=zr(u,p,E,b);return-1<J?(p=u[J],y||(p.fa=!1)):(p=new ze(p,this.src,U,!!E,b),p.fa=y,u.push(p)),p};function Ss(u,p){var y=p.type;if(y in u.g){var E=u.g[y],b=Array.prototype.indexOf.call(E,p,void 0),U;(U=0<=b)&&Array.prototype.splice.call(E,b,1),U&&(vt(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function zr(u,p,y,E){for(var b=0;b<u.length;++b){var U=u[b];if(!U.da&&U.listener==p&&U.capture==!!y&&U.ha==E)return b}return-1}var Vi="closure_lm_"+(1e6*Math.random()|0),As={};function Ho(u,p,y,E,b){if(Array.isArray(p)){for(var U=0;U<p.length;U++)Ho(u,p[U],y,E,b);return null}return y=Go(y),u&&u[be]?u.K(p,y,_(E)?!!E.capture:!1,b):Wo(u,p,y,!1,E,b)}function Wo(u,p,y,E,b,U){if(!p)throw Error("Invalid event type");var J=_(b)?!!b.capture:!!b,Fe=Rs(u);if(Fe||(u[Vi]=Fe=new fr(u)),y=Fe.add(p,y,E,J,U),y.proxy)return y;if(E=El(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Te||(b=J),b===void 0&&(b=!1),u.addEventListener(p.toString(),E,b);else if(u.attachEvent)u.attachEvent(mr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function El(){function u(y){return p.call(u.src,u.listener,y)}const p=Ko;return u}function ks(u,p,y,E,b){if(Array.isArray(p))for(var U=0;U<p.length;U++)ks(u,p[U],y,E,b);else E=_(E)?!!E.capture:!!E,y=Go(y),u&&u[be]?(u=u.i,p=String(p).toString(),p in u.g&&(U=u.g[p],y=zr(U,y,E,b),-1<y&&(vt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete u.g[p],u.h--)))):u&&(u=Rs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=zr(p,y,E,b)),(y=-1<u?p[u]:null)&&pr(y))}function pr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[be])Ss(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(mr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Rs(p))?(Ss(y,u),y.h==0&&(y.src=null,p[Vi]=null)):vt(u)}}}function mr(u){return u in As?As[u]:As[u]="on"+u}function Ko(u,p){if(u.da)u=!0;else{p=new Se(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&pr(u),u=y.call(E,p)}return u}function Rs(u){return u=u[Vi],u instanceof fr?u:null}var Cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Go(u){return typeof u=="function"?u:(u[Cs]||(u[Cs]=function(p){return u.handleEvent(p)}),u[Cs])}function ft(){q.call(this),this.i=new fr(this),this.M=this,this.F=null}H(ft,q),ft.prototype[be]=!0,ft.prototype.removeEventListener=function(u,p,y,E){ks(this,u,p,y,E)};function pt(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new ue(p,u);else if(p instanceof ue)p.target=p.target||u;else{var b=p;p=new ue(E,u),P(p,b)}if(b=!0,y)for(var U=y.length-1;0<=U;U--){var J=p.g=y[U];b=gr(J,E,!0,p)&&b}if(J=p.g=u,b=gr(J,E,!0,p)&&b,b=gr(J,E,!1,p)&&b,y)for(U=0;U<y.length;U++)J=p.g=y[U],b=gr(J,E,!1,p)&&b}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)vt(y[E]);delete u.g[p],u.h--}}this.F=null},ft.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},ft.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function gr(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var b=!0,U=0;U<p.length;++U){var J=p[U];if(J&&!J.da&&J.capture==y){var Fe=J.listener,mt=J.ha||J.src;J.fa&&Ss(u.i,J),b=Fe.call(mt,E)!==!1&&b}}return b&&!E.defaultPrevented}function Qo(u,p,y){if(typeof u=="function")y&&(u=R(u,y));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function $r(u){u.g=Qo(()=>{u.g=null,u.i&&(u.i=!1,$r(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class xi extends q{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:$r(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(u){q.call(this),this.h=u,this.g={}}H(bi,q);var Yo=[];function Xo(u){ke(u.g,function(p,y){this.g.hasOwnProperty(y)&&pr(p)},u),u.g={}}bi.prototype.N=function(){bi.aa.N.call(this),Xo(this)},bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=f.JSON.stringify,Zo=f.JSON.parse,ea=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Li(){}Li.prototype.h=null;function Ps(u){return u.h||(u.h=u.i())}function Ns(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){ue.call(this,"d")}H(Kn,ue);function Ds(){ue.call(this,"c")}H(Ds,ue);var Gn={},ta=null;function Mi(){return ta=ta||new ft}Gn.La="serverreachability";function na(u){ue.call(this,Gn.La,u)}H(na,ue);function yr(u){const p=Mi();pt(p,new na(p))}Gn.STAT_EVENT="statevent";function ra(u,p){ue.call(this,Gn.STAT_EVENT,u),this.stat=p}H(ra,ue);function it(u){const p=Mi();pt(p,new ra(p,u))}Gn.Ma="timingevent";function Os(u,p){ue.call(this,Gn.Ma,u),this.size=p}H(Os,ue);function kn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Fi(){this.g=!0}Fi.prototype.xa=function(){this.g=!1};function Ui(u,p,y,E,b,U){u.info(function(){if(u.g)if(U)for(var J="",Fe=U.split("&"),mt=0;mt<Fe.length;mt++){var De=Fe[mt].split("=");if(1<De.length){var wt=De[0];De=De[1];var lt=wt.split("_");J=2<=lt.length&&lt[1]=="type"?J+(wt+"="+De+"&"):J+(wt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+b+"]: "+p+`
`+y+`
`+J})}function Vs(u,p,y,E,b,U,J){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+b+"]: "+p+`
`+y+`
`+U+" "+J})}function Rn(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Kc(u,y)+(E?" "+E:"")})}function ia(u,p){u.info(function(){return"TIMEOUT: "+p})}Fi.prototype.info=function(){};function Kc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var b=E[1];if(Array.isArray(b)&&!(1>b.length)){var U=b[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<b.length;J++)b[J]=""}}}}return Jo(y)}catch{return p}}var xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function ji(){}H(ji,Li),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Cn=new ji;function Pn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Il}function Il(){this.i=null,this.g="",this.h=!1}var sa={},bs={};function Ls(u,p,y){u.L=1,u.v=Gr(sn(p)),u.m=y,u.P=!0,oa(u,null)}function oa(u,p){u.F=Date.now(),$e(u),u.A=sn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Yr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new Il,u.g=Bl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new xi(R(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var b="readystatechange";Array.isArray(b)||(b&&(Yo[0]=b.toString()),b=Yo);for(var U=0;U<b.length;U++){var J=Ho(y,b[U],E||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),yr(),Ui(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Gt(u)==3?p.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Gt(this.g);var p=this.g.Ba();const mn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||da(this.g)))){this.J||lt!=4||p==7||(p==8||0>=mn?yr(3):yr(2)),Bi(this);var y=this.g.Z();this.X=y;t:if(Sl(this)){var E=da(this.g);u="";var b=E.length,U=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),qr(this);var J="";break t}this.h.i=new f.TextDecoder}for(p=0;p<b;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(U&&p==b-1)});E.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Vs(this.i,this.u,this.A,this.l,this.R,lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,mt=this.g;if((Fe=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(Fe)){var De=Fe;break t}}De=null}if(y=De)Rn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aa(this,y);else{this.o=!1,this.s=3,it(12),fn(this),qr(this);break e}}if(this.P){y=!0;let an;for(;!this.J&&this.C<J.length;)if(an=Gc(this,J),an==bs){lt==4&&(this.s=4,it(14),y=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==sa){this.s=4,it(15),Rn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Rn(this.i,this.l,an,null),aa(this,an);if(Sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||J.length!=0||this.h.h||(this.s=1,it(16),y=!1),this.o=this.o&&y,!y)Rn(this.i,this.l,J,"[Invalid Chunked Response]"),fn(this),qr(this);else if(0<J.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),pa(wt),wt.M=!0,it(11))}}else Rn(this.i,this.l,J,null),aa(this,J);lt==4&&fn(this),this.o&&!this.J&&(lt==4?Ks(this.j,this):(this.o=!1,$e(this)))}else zs(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),fn(this),qr(this)}}}catch{}finally{}};function Sl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Gc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?bs:(y=Number(p.substring(y,E)),isNaN(y)?sa:(E+=1,E+y>p.length?bs:(p=p.slice(E,E+y),u.C=E+y,p)))}Pn.prototype.cancel=function(){this.J=!0,fn(this)};function $e(u){u.S=Date.now()+u.I,Al(u,u.I)}function Al(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=kn(R(u.ba,u),p)}function Bi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ia(this.i,this.A),this.L!=2&&(yr(),it(17)),fn(this),this.s=2,qr(this)):Al(this,this.S-u)};function qr(u){u.j.G==0||u.J||Ks(u.j,u)}function fn(u){Bi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Xo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function aa(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||$t(y.h,u))){if(!u.K&&$t(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var b=E;if(b[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ws(y),xn(y);else break e;Hs(y),it(18)}}else y.za=b[1],0<y.za-y.T&&37500>b[2]&&y.F&&y.v==0&&!y.C&&(y.C=kn(R(y.Za,y),6e3));if(1>=Rl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Tr(y,11)}else if((u.K||y.g==u)&&Ws(y),!ce(p))for(b=y.Da.g.parse(p),p=0;p<b.length;p++){let De=b[p];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const wt=De[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const lt=De[4];lt!=null&&(y.Aa=lt,y.j.info("SVER="+y.Aa));const mn=De[5];mn!=null&&typeof mn=="number"&&0<mn&&(E=1.5*mn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const an=u.g;if(an){const Gi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var U=E.h;U.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(la(U,U.h),U.h=null))}if(E.D){const Qs=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(E.ya=Qs,je(E.I,E.D,Qs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=u;if(E.qa=jl(E,E.J?E.ia:null,E.W),J.K){Cl(E.h,J);var Fe=J,mt=E.L;mt&&(Fe.I=mt),Fe.B&&(Bi(Fe),$e(Fe)),E.g=J}else Ki(E);0<y.i.length&&Jn(y)}else De[0]!="stop"&&De[0]!="close"||Tr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Tr(y,7):kt(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}yr(4)}catch{}}var kl=class{constructor(u,p){this.g=u,this.map=p}};function zi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Rl(u){return u.h?1:u.g?u.g.size:0}function $t(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function la(u,p){u.g?u.g.add(p):u.h=p}function Cl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}zi.prototype.cancel=function(){if(this.i=Pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Pl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return K(u.i)}function Ms(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Fs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function Hr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Fs(u),E=Ms(u),b=E.length,U=0;U<b;U++)p.call(void 0,E[U],y&&y[U],u)}var $i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),b=null;if(0<=E){var U=u[y].substring(0,E);b=u[y].substring(E+1)}else U=u[y];p(U,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,qi(this,u.j),this.o=u.o,this.g=u.g,Wr(this,u.s),this.l=u.l;var p=u.i,y=new Qn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Kr(this,y),this.m=u.m}else u&&(p=String(u).match($i))?(this.h=!1,qi(this,p[1]||"",!0),this.o=Pe(p[2]||""),this.g=Pe(p[3]||"",!0),Wr(this,p[4]),this.l=Pe(p[5]||"",!0),Kr(this,p[6]||"",!0),this.m=Pe(p[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}_r.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Qr(p,Us,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Qr(p,Us,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Qr(y,y.charAt(0)=="/"?Ol:Dl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Qr(y,ua)),u.join("")};function sn(u){return new _r(u)}function qi(u,p,y){u.j=y?Pe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Wr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Kr(u,p,y){p instanceof Qn?(u.i=p,Yn(u.i,u.h)):(y||(p=Qr(p,Vl)),u.i=new Qn(p,u.h))}function je(u,p,y){u.i.set(p,y)}function Gr(u){return je(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Pe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Nl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Nl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Us=/[#\/\?@]/g,Dl=/[#\?:]/g,Ol=/[#\?]/g,Vl=/[#\?@]/g,ua=/#/g;function Qn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&Qc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Qn.prototype,r.add=function(u,p){At(this),this.i=null,u=pn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Nn(u,p){At(u),p=pn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Dn(u,p){return At(u),p=pn(u,p),u.g.has(p)}r.forEach=function(u,p){At(this),this.g.forEach(function(y,E){y.forEach(function(b){u.call(p,b,E,this)},this)},this)},r.na=function(){At(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const b=u[E];for(let U=0;U<b.length;U++)y.push(p[E])}return y},r.V=function(u){At(this);let p=[];if(typeof u=="string")Dn(this,u)&&(p=p.concat(this.g.get(pn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return At(this),this.i=null,u=pn(this,u),Dn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Yr(u,p,y){Nn(u,p),0<y.length&&(u.i=null,u.g.set(pn(u,p),K(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var b=U;J[E]!==""&&(b+="="+encodeURIComponent(String(J[E]))),u.push(b)}}return this.i=u.join("&")};function pn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Yn(u,p){p&&!u.j&&(At(u),u.i=null,u.g.forEach(function(y,E){var b=E.toLowerCase();E!=b&&(Nn(this,E),Yr(this,b,y))},u)),u.j=p}function Yc(u,p){const y=new Fi;if(f.Image){const E=new Image;E.onload=j(Kt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=j(Kt,y,"TestLoadImage: error",!1,p,E),E.onabort=j(Kt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=j(Kt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function xl(u,p){const y=new Fi,E=new AbortController,b=setTimeout(()=>{E.abort(),Kt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(U=>{clearTimeout(b),U.ok?Kt(y,"TestPingServer: ok",!0,p):Kt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(b),Kt(y,"TestPingServer: error",!1,p)})}function Kt(u,p,y,E,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),E(y)}catch{}}function Xc(){this.g=new ea}function bl(u,p,y){const E=y||"";try{Hr(u,function(b,U){let J=b;_(b)&&(J=Jo(b)),p.push(E+U+"="+encodeURIComponent(J))})}catch(b){throw p.push(E+"type="+encodeURIComponent("_badmap")),b}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}H(vr,Li),vr.prototype.g=function(){return new Hi(this.l,this.j)},vr.prototype.i=(function(u){return function(){return u}})({});function Hi(u,p){ft.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(Hi,ft),r=Hi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Vn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ll(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ll(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?On(this):Vn(this),this.readyState==3&&Ll(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,On(this))},r.Qa=function(u){this.g&&(this.response=u,On(this))},r.ga=function(){this.g&&On(this)};function On(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Vn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Vn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let p="";return ke(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Xr(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=wr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):je(u,p,y))}function Ye(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(Ye,ft);var Jc=/^https?$/i,ca=["POST","PUT"];r=Ye.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ps(this.o):Ps(Cn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(U){Wi(this,U);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var b in E)y.set(b,E[b]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),b=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ca,p,void 0))||E||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bs(this),this.u=!0,this.g.send(u),this.u=!1}catch(U){Wi(this,U)}};function Wi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,js(u),on(u)}function js(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Ye.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ha(this):this.bb())},r.bb=function(){ha(this)};function ha(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Qo(u.Ea,0,u);else if(pt(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=J===0){var b=String(u.D).match($i)[1]||null;!b&&f.self&&f.self.location&&(b=f.self.location.protocol.slice(0,-1)),E=!Jc.test(b?b.toLowerCase():"")}y=E}if(y)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var U=2<Gt(u)?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.Z()+"]",js(u)}}finally{on(u)}}}}function on(u,p){if(u.g){Bs(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||pt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Bs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Zo(p)}};function da(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function zs(u){const p={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ce(u[E]))continue;var y=O(u[E]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=p[b]||[];p[b]=U,U.push(y)}D(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function fa(u){this.Aa=0,this.i=[],this.j=new Fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(u&&u.concurrentRequestLimit),this.Da=new Xc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=fa.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){it(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=jl(this,null,this.W),Jn(this)};function kt(u){if($s(u),u.G==3){var p=u.U++,y=sn(u.I);if(je(y,"SID",u.K),je(y,"RID",p),je(y,"TYPE","terminate"),Er(u,y),p=new Pn(u,u.j,p),p.L=2,p.v=Gr(sn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Bl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),$e(p)}Ul(u)}function xn(u){u.g&&(pa(u),u.g.cancel(),u.g=null)}function $s(u){xn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ws(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Jn(u){if(!rn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Ue||re(),Z||(Ue(),Z=!0),de.add(p,u),u.B=0}}function Zc(u,p){return Rl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=kn(R(u.Ga,u,p),Fl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const b=new Pn(this,this.j,u);let U=this.o;if(this.S&&(U?(U=S(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(b.H=U,U=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Jr(this,b,p),y=sn(this.I),je(y,"RID",u),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),Er(this,y),U&&(this.O?p="headers="+encodeURIComponent(String(wr(U)))+"&"+p:this.m&&Xr(y,this.m,U)),la(this.h,b),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",p),je(y,"SID","null"),b.T=!0,Ls(b,y,null)):Ls(b,y,p),this.G=2}}else this.G==3&&(u?qs(this,u):this.i.length==0||rn(this.h)||qs(this))};function qs(u,p){var y;p?y=p.l:y=u.U++;const E=sn(u.I);je(E,"SID",u.K),je(E,"RID",y),je(E,"AID",u.T),Er(u,E),u.m&&u.o&&Xr(E,u.m,u.o),y=new Pn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Jr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),la(u.h,y),Ls(y,E,p)}function Er(u,p){u.H&&ke(u.H,function(y,E){je(p,E,y)}),u.l&&Hr({},function(y,E){je(p,E,y)})}function Jr(u,p,y){y=Math.min(u.i.length,y);var E=u.l?R(u.l.Na,u.l,u):null;e:{var b=u.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=b[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let Fe=!0;for(let mt=0;mt<y;mt++){let De=b[mt].g;const wt=b[mt].map;if(De-=U,0>De)U=Math.max(0,b[mt].g-100),Fe=!1;else try{bl(wt,J,"req"+De+"_")}catch{E&&E(wt)}}if(Fe){E=J.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function Ki(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Ue||re(),Z||(Ue(),Z=!0),de.add(p,u),u.v=0}}function Hs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=kn(R(u.Fa,u),Fl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=kn(R(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),xn(this),Ml(this))};function pa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ml(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=sn(u.qa);je(p,"RID","rpc"),je(p,"SID",u.K),je(p,"AID",u.T),je(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&je(p,"TO",u.ja),je(p,"TYPE","xmlhttp"),Er(u,p),u.m&&u.o&&Xr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Gr(sn(p)),y.m=null,y.P=!0,oa(y,u)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),Hs(this),it(19))};function Ws(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Ks(u,p){var y=null;if(u.g==p){Ws(u),pa(u),u.g=null;var E=2}else if($t(u.h,p))y=p.D,Cl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var b=u.B;E=Mi(),pt(E,new Os(E,y)),Jn(u)}else Ki(u);else if(b=p.s,b==3||b==0&&0<p.X||!(E==1&&Zc(u,p)||E==2&&Hs(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),b){case 1:Tr(u,5);break;case 4:Tr(u,10);break;case 3:Tr(u,6);break;default:Tr(u,2)}}}function Fl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Tr(u,p){if(u.j.info("Error code "+p),p==2){var y=R(u.fb,u),E=u.Xa;const b=!E;E=new _r(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||qi(E,"https"),Gr(E),b?Yc(E.toString(),y):xl(E.toString(),y)}else it(2);u.G=0,u.l&&u.l.sa(p),Ul(u),$s(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Ul(u){if(u.G=0,u.ka=[],u.l){const p=Pl(u.h);(p.length!=0||u.i.length!=0)&&(B(u.ka,p),B(u.ka,u.i),u.h.i.length=0,K(u.i),u.i.length=0),u.l.ra()}}function jl(u,p,y){var E=y instanceof _r?sn(y):new _r(y);if(E.g!="")p&&(E.g=p+"."+E.g),Wr(E,E.s);else{var b=f.location;E=b.protocol,p=p?p+"."+b.hostname:b.hostname,b=+b.port;var U=new _r(null);E&&qi(U,E),p&&(U.g=p),b&&Wr(U,b),y&&(U.l=y),E=U}return y=u.D,p=u.ya,y&&p&&je(E,y,p),je(E,"VER",u.la),Er(u,E),E}function Bl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ye(new vr({eb:y})):new Ye(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ma(){}r=ma.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Gs(){}Gs.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){ft.call(this),this.g=new fa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ce(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ce(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Zn(this)}H(qt,ft),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){kt(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Jo(u),u=y);p.i.push(new kl(p.Ya++,u)),p.G==3&&Jn(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,qt.aa.N.call(this)};function zl(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}H(zl,Kn);function $l(){Ds.call(this),this.status=1}H($l,Ds);function Zn(u){this.g=u}H(Zn,ma),Zn.prototype.ua=function(){pt(this.g,"a")},Zn.prototype.ta=function(u){pt(this.g,new zl(u))},Zn.prototype.sa=function(u){pt(this.g,new $l)},Zn.prototype.ra=function(){pt(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Tv=function(){return new Gs},Ev=function(){return Mi()},wv=Gn,Yd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,Ku=xs,Tl.COMPLETE="complete",vv=Tl,Ns.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,za=Ns,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,_v=Ye}).apply(typeof Fu<"u"?Fu:typeof self<"u"?self:typeof window<"u"?window:{});const my="@firebase/firestore",gy="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new gf("@firebase/firestore");function yo(){return ps.logLevel}function ne(r,...e){if(ps.logLevel<=Re.DEBUG){const t=e.map(Nf);ps.debug(`Firestore (${jo}): ${r}`,...t)}}function Ur(r,...e){if(ps.logLevel<=Re.ERROR){const t=e.map(Nf);ps.error(`Firestore (${jo}): ${r}`,...t)}}function Ii(r,...e){if(ps.logLevel<=Re.WARN){const t=e.map(Nf);ps.warn(`Firestore (${jo}): ${r}`,...t)}}function Nf(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Iv(r,s,t)}function Iv(r,e,t){let s=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ur(s),new Error(s)}function Me(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||Iv(e,o,s)}function we(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class L1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class M1{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Me(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new hs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new hs,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new hs)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string",31837,{l:s}),new Sv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class F1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new F1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Me(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function B1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Av(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=B1(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ie(r,e){return r<e?-1:r>e?1:0}function Xd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ie(s,o);{const l=Av(),h=z1(l.encode(_y(r,t)),l.encode(_y(e,t)));return h!==0?h:Ie(s,o)}}t+=s>65535?2:1}return Ie(r.length,e.length)}function _y(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function z1(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ie(r[t],e[t]);return Ie(r.length,e.length)}function Co(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="__name__";class ir{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ir.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ie(e.length,t.length)}static compareSegments(e,t){const s=ir.isNumericId(e),o=ir.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):Xd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wi.fromString(e.substring(4,e.length-2))}}class Be extends ir{construct(e,t,s){return new Be(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Be(t)}static emptyPath(){return new Be([])}}const $1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends ir{construct(e,t,s){return new Nt(e,t,s)}static isValidIdentifier(e){return $1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vy}static keyField(){return new Nt([vy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ee(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ee(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Be.fromString(e))}static fromName(e){return new le(Be.fromString(e).popFirst(5))}static empty(){return new le(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Be(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(r,e,t){if(!t)throw new ee(z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function q1(r,e,t,s){if(e===!0&&s===!0)throw new ee(z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function wy(r){if(!le.isDocumentKey(r))throw new ee(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ey(r){if(le.isDocumentKey(r))throw new ee(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Rv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ac(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ye(12329,{type:typeof r})}function Lr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ee(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ac(r);throw new ee(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(r,e){const t={typeString:r};return e&&(t.value=e),t}function fl(r,e){if(!Rv(r))throw new ee(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ee(z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=-62135596800,Iy=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Iy);return new Ge(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ty)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Iy}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fl(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ty;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:dt("string",Ge._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ge(0,0))}static max(){return new ve(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const el=-1;function H1(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Ge(t+1,0):new Ge(t,s));return new Si(o,le.empty(),e)}function W1(r){return new Si(r.readTime,r.key,el)}class Si{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Si(ve.min(),le.empty(),el)}static max(){return new Si(ve.max(),le.empty(),el)}}function K1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(r.documentKey,e.documentKey),t!==0?t:Ie(r.largestBatchId,e.largestBatchId))}/**
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
 */const G1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(r){if(r.code!==z.FAILED_PRECONDITION||r.message!==G1)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++f,f===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function Y1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class kc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}kc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=-1;function Rc(r){return r==null}function ac(r){return r===0&&1/r==-1/0}function X1(r){return typeof r=="number"&&Number.isInteger(r)&&!ac(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="";function J1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Sy(e)),e=Z1(r.get(t),e);return Sy(e)}function Z1(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Cv:t+="";break;default:t+=l}}return t}function Sy(r){return r+Cv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Di(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Pv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uu(this.root,e,this.comparator,!0)}}class Uu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ky(this.data.getIterator())}getIteratorFrom(e){return new ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new hn([])}unionWith(e){let t=new _t(Nt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Nv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Nv("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const eA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(r){if(Me(!!r,39018),typeof r=="string"){let e=0;const t=eA.exec(r);if(Me(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ki(r){return typeof r=="string"?Dt.fromBase64String(r):Dt.fromUint8Array(r)}/**
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
 */const Dv="server_timestamp",Ov="__type__",Vv="__previous_value__",xv="__local_write_time__";function Cc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ov])===null||t===void 0?void 0:t.stringValue)===Dv}function Pc(r){const e=r.mapValue.fields[Vv];return Cc(e)?Pc(e):e}function tl(r){const e=Ai(r.mapValue.fields[xv].timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t,s,o,l,h,f,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const lc="(default)";class nl{constructor(e,t){this.projectId=e,this.database=t||lc}static empty(){return new nl("","")}get isDefaultDatabase(){return this.database===lc}isEqual(e){return e instanceof nl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bv="__type__",nA="__max__",ju={mapValue:{}},Lv="__vector__",uc="value";function Ri(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Cc(r)?4:iA(r)?9007199254740991:rA(r)?10:11:ye(28295,{value:r})}function hr(r,e){if(r===e)return!0;const t=Ri(r);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return tl(r).isEqual(tl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ai(o.timestampValue),f=Ai(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return ki(o.bytesValue).isEqual(ki(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ot(o.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ot(o.integerValue)===ot(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ot(o.doubleValue),f=ot(l.doubleValue);return h===f?ac(h)===ac(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Co(r.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Ay(h)!==Ay(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!hr(h[g],f[g])))return!1;return!0})(r,e);default:return ye(52216,{left:r})}}function rl(r,e){return(r.values||[]).find((t=>hr(t,e)))!==void 0}function Po(r,e){if(r===e)return 0;const t=Ri(r),s=Ri(e);if(t!==s)return Ie(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ie(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ot(l.integerValue||l.doubleValue),g=ot(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return Ry(r.timestampValue,e.timestampValue);case 4:return Ry(tl(r),tl(e));case 5:return Xd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=ki(l),g=ki(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=Ie(f[_],g[_]);if(w!==0)return w}return Ie(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ie(ot(l.latitude),ot(h.latitude));return f!==0?f:Ie(ot(l.longitude),ot(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Cy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,w;const I=l.fields||{},R=h.fields||{},j=(f=I[uc])===null||f===void 0?void 0:f.arrayValue,H=(g=R[uc])===null||g===void 0?void 0:g.arrayValue,K=Ie(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=H==null?void 0:H.values)===null||w===void 0?void 0:w.length)||0);return K!==0?K:Cy(j,H)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===ju.mapValue&&h===ju.mapValue)return 0;if(l===ju.mapValue)return 1;if(h===ju.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let I=0;I<g.length&&I<w.length;++I){const R=Xd(g[I],w[I]);if(R!==0)return R;const j=Po(f[g[I]],_[w[I]]);if(j!==0)return j}return Ie(g.length,w.length)})(r.mapValue,e.mapValue);default:throw ye(23264,{le:t})}}function Ry(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ie(r,e);const t=Ai(r),s=Ai(e),o=Ie(t.seconds,s.seconds);return o!==0?o:Ie(t.nanos,s.nanos)}function Cy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Po(t[o],s[o]);if(l)return l}return Ie(t.length,s.length)}function No(r){return Jd(r)}function Jd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ai(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ki(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return le.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Jd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Jd(t.fields[h])}`;return o+"}"})(r.mapValue):ye(61005,{value:r})}function Gu(r){switch(Ri(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pc(r);return e?16+Gu(e):16;case 5:return 2*r.stringValue.length;case 6:return ki(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Gu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Di(s.fields,((l,h)=>{o+=l.length+Gu(h)})),o})(r.mapValue);default:throw ye(13486,{value:r})}}function cc(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Zd(r){return!!r&&"integerValue"in r}function Vf(r){return!!r&&"arrayValue"in r}function Py(r){return!!r&&"nullValue"in r}function Ny(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Qu(r){return!!r&&"mapValue"in r}function rA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[bv])===null||t===void 0?void 0:t.stringValue)===Lv}function Ga(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Di(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ga(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ga(r.arrayValue.values[t]);return e}return Object.assign({},r)}function iA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===nA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Qu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ga(t)}setAll(e){let t=Nt.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Ga(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Qu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Qu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Di(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new nn(Ga(this.value))}}function Mv(r){const e=[];return Di(r.fields,((t,s)=>{const o=new Nt([t]);if(Qu(s)){const l=Mv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new jt(e,0,ve.min(),ve.min(),ve.min(),nn.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,ve.min(),ve.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,ve.min(),ve.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Do{constructor(e,t){this.position=e,this.inclusive=t}}function Dy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=le.comparator(le.fromName(h.referenceValue),t.key):s=Po(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Oy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!hr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class il{constructor(e,t="asc"){this.field=e,this.dir=t}}function sA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Fv{}class ht extends Fv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new aA(e,t,s):t==="array-contains"?new cA(e,s):t==="in"?new hA(e,s):t==="not-in"?new dA(e,s):t==="array-contains-any"?new fA(e,s):new ht(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new lA(e,s):new uA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Po(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(Po(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends Fv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Hn(e,t)}matches(e){return Uv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Uv(r){return r.op==="and"}function jv(r){return oA(r)&&Uv(r)}function oA(r){for(const e of r.filters)if(e instanceof Hn)return!1;return!0}function ef(r){if(r instanceof ht)return r.field.canonicalString()+r.op.toString()+No(r.value);if(jv(r))return r.filters.map((e=>ef(e))).join(",");{const e=r.filters.map((t=>ef(t))).join(",");return`${r.op}(${e})`}}function Bv(r,e){return r instanceof ht?(function(s,o){return o instanceof ht&&s.op===o.op&&s.field.isEqual(o.field)&&hr(s.value,o.value)})(r,e):r instanceof Hn?(function(s,o){return o instanceof Hn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&Bv(h,o.filters[f])),!0):!1})(r,e):void ye(19439)}function zv(r){return r instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${No(t.value)}`})(r):r instanceof Hn?(function(t){return t.op.toString()+" {"+t.getFilters().map(zv).join(" ,")+"}"})(r):"Filter"}class aA extends ht{constructor(e,t,s){super(e,t,s),this.key=le.fromName(s.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class lA extends ht{constructor(e,t){super(e,"in",t),this.keys=$v("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class uA extends ht{constructor(e,t){super(e,"not-in",t),this.keys=$v("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $v(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>le.fromName(s.referenceValue)))}class cA extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vf(t)&&rl(t.arrayValue,this.value)}}class hA extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&rl(this.value.arrayValue,t)}}class dA extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!rl(this.value.arrayValue,t)}}class fA extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>rl(this.value.arrayValue,s)))}}/**
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
 */class pA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Vy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new pA(r,e,t,s,o,l,h)}function xf(r){const e=we(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ef(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>No(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>No(s))).join(",")),e.Pe=t}return e.Pe}function bf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!sA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Bv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Oy(r.startAt,e.startAt)&&Oy(r.endAt,e.endAt)}function tf(r){return le.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mA(r,e,t,s,o,l,h,f){return new Es(r,e,t,s,o,l,h,f)}function Lf(r){return new Es(r)}function xy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Mf(r){return r.collectionGroup!==null}function So(r){const e=we(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new _t(Nt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new il(l,s))})),t.has(Nt.keyField().canonicalString())||e.Te.push(new il(Nt.keyField(),s))}return e.Te}function or(r){const e=we(r);return e.Ie||(e.Ie=gA(e,So(r))),e.Ie}function gA(r,e){if(r.limitType==="F")return Vy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new il(o.field,l)}));const t=r.endAt?new Do(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Do(r.startAt.position,r.startAt.inclusive):null;return Vy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function nf(r,e){const t=r.filters.concat([e]);return new Es(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function hc(r,e,t){return new Es(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Nc(r,e){return bf(or(r),or(e))&&r.limitType===e.limitType}function qv(r){return`${xf(or(r))}|lt:${r.limitType}`}function _o(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>zv(o))).join(", ")}]`),Rc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>No(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>No(o))).join(",")),`Target(${s})`})(or(r))}; limitType=${r.limitType})`}function Dc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):le.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of So(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,g){const _=Dy(h,f,g);return h.inclusive?_<=0:_<0})(s.startAt,So(s),o)||s.endAt&&!(function(h,f,g){const _=Dy(h,f,g);return h.inclusive?_>=0:_>0})(s.endAt,So(s),o))})(r,e)}function yA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Hv(r){return(e,t)=>{let s=!1;for(const o of So(r)){const l=_A(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function _A(r,e,t){const s=r.field.isKeyField()?le.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?Po(g,_):ye(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return Pv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=new tt(le.comparator);function jr(){return vA}const Wv=new tt(le.comparator);function $a(...r){let e=Wv;for(const t of r)e=e.insert(t.key,t);return e}function Kv(r){let e=Wv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function us(){return Qa()}function Gv(){return Qa()}function Qa(){return new Ts((r=>r.toString()),((r,e)=>r.isEqual(e)))}const wA=new tt(le.comparator),EA=new _t(le.comparator);function Ce(...r){let e=EA;for(const t of r)e=e.add(t);return e}const TA=new _t(Ie);function IA(){return TA}/**
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
 */function Ff(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ac(e)?"-0":e}}function Qv(r){return{integerValue:""+r}}function SA(r,e){return X1(e)?Qv(e):Ff(r,e)}/**
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
 */class Oc{constructor(){this._=void 0}}function AA(r,e,t){return r instanceof sl?(function(o,l){const h={fields:{[Ov]:{stringValue:Dv},[xv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Cc(l)&&(l=Pc(l)),l&&(h.fields[Vv]=l),{mapValue:h}})(t,e):r instanceof Oo?Xv(r,e):r instanceof ol?Jv(r,e):(function(o,l){const h=Yv(o,l),f=by(h)+by(o.Ee);return Zd(h)&&Zd(o.Ee)?Qv(f):Ff(o.serializer,f)})(r,e)}function kA(r,e,t){return r instanceof Oo?Xv(r,e):r instanceof ol?Jv(r,e):t}function Yv(r,e){return r instanceof dc?(function(s){return Zd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class sl extends Oc{}class Oo extends Oc{constructor(e){super(),this.elements=e}}function Xv(r,e){const t=Zv(e);for(const s of r.elements)t.some((o=>hr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class ol extends Oc{constructor(e){super(),this.elements=e}}function Jv(r,e){let t=Zv(e);for(const s of r.elements)t=t.filter((o=>!hr(o,s)));return{arrayValue:{values:t}}}class dc extends Oc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function by(r){return ot(r.integerValue||r.doubleValue)}function Zv(r){return Vf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t){this.field=e,this.transform=t}}function RA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Oo&&o instanceof Oo||s instanceof ol&&o instanceof ol?Co(s.elements,o.elements,hr):s instanceof dc&&o instanceof dc?hr(s.Ee,o.Ee):s instanceof sl&&o instanceof sl})(r.transform,e.transform)}class CA{constructor(e,t){this.version=e,this.transformResults=t}}class $n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Vc{}function tw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new rw(r.key,$n.none()):new pl(r.key,r.data,$n.none());{const t=r.data,s=nn.empty();let o=new _t(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Oi(r.key,s,new hn(o.toArray()),$n.none())}}function PA(r,e,t){r instanceof pl?(function(o,l,h){const f=o.value.clone(),g=My(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Oi?(function(o,l,h){if(!Yu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=My(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(nw(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ya(r,e,t,s){return r instanceof pl?(function(l,h,f,g){if(!Yu(l.precondition,h))return f;const _=l.value.clone(),w=Fy(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Oi?(function(l,h,f,g){if(!Yu(l.precondition,h))return f;const _=Fy(l.fieldTransforms,g,h),w=h.data;return w.setAll(nw(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(r,e,t,s):(function(l,h,f){return Yu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function NA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Yv(s.transform,o||null);l!=null&&(t===null&&(t=nn.empty()),t.set(s.field,l))}return t||null}function Ly(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Co(s,o,((l,h)=>RA(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class pl extends Vc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Oi extends Vc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function nw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function My(r,e,t){const s=new Map;Me(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,kA(h,f,t[o]))}return s}function Fy(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,AA(l,h,e))}return s}class rw extends Vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DA extends Vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&PA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ya(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ya(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Gv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=tw(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,((t,s)=>Ly(t,s)))&&Co(this.baseMutations,e.baseMutations,((t,s)=>Ly(t,s)))}}class Uf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Me(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return wA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Uf(e,t,s,o)}}/**
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
 */class VA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Oe;function bA(r){switch(r){case z.OK:return ye(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ye(15467,{code:r})}}function iw(r){if(r===void 0)return Ur("GRPC error has no .code"),z.UNKNOWN;switch(r){case ct.OK:return z.OK;case ct.CANCELLED:return z.CANCELLED;case ct.UNKNOWN:return z.UNKNOWN;case ct.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ct.INTERNAL:return z.INTERNAL;case ct.UNAVAILABLE:return z.UNAVAILABLE;case ct.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ct.NOT_FOUND:return z.NOT_FOUND;case ct.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ct.ABORTED:return z.ABORTED;case ct.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ct.DATA_LOSS:return z.DATA_LOSS;default:return ye(39323,{code:r})}}(Oe=ct||(ct={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const LA=new wi([4294967295,4294967295],0);function Uy(r){const e=Av().encode(r),t=new yv;return t.update(e),new Uint8Array(t.digest())}function jy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new wi([t,s],0),new wi([o,l],0)]}class jf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new qa(`Invalid padding: ${t}`);if(s<0)throw new qa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new qa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new qa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=wi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(wi.fromNumber(s)));return o.compare(LA)===1&&(o=new wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Uy(e),[s,o]=jy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new jf(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=Uy(e),[s,o]=jy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ml.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new xc(ve.min(),o,new tt(Ie),jr(),Ce())}}class ml{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ml(s,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class sw{constructor(e,t){this.targetId=e,this.De=t}}class ow{constructor(e,t,s=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class By{constructor(){this.ve=0,this.Ce=zy(),this.Fe=Dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ce(),t=Ce(),s=Ce();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:l})}})),new ml(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=zy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Me(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class MA{constructor(e){this.We=e,this.Ge=new Map,this.ze=jr(),this.je=Bu(),this.Je=Bu(),this.He=new tt(Ie)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(tf(l))if(s===0){const h=new le(l.path);this.Xe(t,h,jt.newNoDocument(h,ve.min()))}else Me(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=ki(s).toUint8Array()}catch(g){if(g instanceof Nv)return Ii("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new jf(h,o,l)}catch(g){return Ii(g instanceof qa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&tf(f.target)){const g=new le(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,jt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=Ce();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new xc(e,t,this.He,this.ze,s);return this.ze=jr(),this.je=Bu(),this.Je=Bu(),this.He=new tt(Ie),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new By,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new _t(Ie),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new _t(Ie),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new By),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Bu(){return new tt(le.comparator)}function zy(){return new tt(le.comparator)}const FA={asc:"ASCENDING",desc:"DESCENDING"},UA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jA={and:"AND",or:"OR"};class BA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rf(r,e){return r.useProto3Json||Rc(e)?e:{value:e}}function fc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function zA(r,e){return fc(r,e.toTimestamp())}function ar(r){return Me(!!r,49232),ve.fromTimestamp((function(t){const s=Ai(t);return new Ge(s.seconds,s.nanos)})(r))}function Bf(r,e){return sf(r,e).canonicalString()}function sf(r,e){const t=(function(o){return new Be(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function lw(r){const e=Be.fromString(r);return Me(fw(e),10190,{key:e.toString()}),e}function of(r,e){return Bf(r.databaseId,e.path)}function Od(r,e){const t=lw(e);if(t.get(1)!==r.databaseId.projectId)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new le(cw(t))}function uw(r,e){return Bf(r.databaseId,e)}function $A(r){const e=lw(r);return e.length===4?Be.emptyPath():cw(e)}function af(r){return new Be(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cw(r){return Me(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function $y(r,e,t){return{name:of(r,e),fields:t.value.mapValue.fields}}function qA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(Me(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(Me(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const w=_.code===void 0?z.UNKNOWN:iw(_.code);return new ee(w,_.message||"")})(h);t=new ow(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Od(r,s.document.name),l=ar(s.document.updateTime),h=s.document.createTime?ar(s.document.createTime):ve.min(),f=new nn({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,l,h,f),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Xu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Od(r,s.document),l=s.readTime?ar(s.readTime):ve.min(),h=jt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Xu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Od(r,s.document),l=s.removedTargetIds||[];t=new Xu([],l,o,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new xA(o,l),f=s.targetId;t=new sw(f,h)}}return t}function HA(r,e){let t;if(e instanceof pl)t={update:$y(r,e.key,e.value)};else if(e instanceof rw)t={delete:of(r,e.key)};else if(e instanceof Oi)t={update:$y(r,e.key,e.data),updateMask:ek(e.fieldMask)};else{if(!(e instanceof DA))return ye(16599,{Rt:e.type});t={verify:of(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const f=h.transform;if(f instanceof sl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Oo)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ol)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof dc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:zA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ye(27497)})(r,e.precondition)),t}function WA(r,e){return r&&r.length>0?(Me(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?ar(o.updateTime):ar(l);return h.isEqual(ve.min())&&(h=ar(l)),new CA(h,o.transformResults||[])})(t,e)))):[]}function KA(r,e){return{documents:[uw(r,e.path)]}}function GA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=uw(r,o);const l=(function(_){if(_.length!==0)return dw(Hn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(R){return{field:vo(R.field),direction:XA(R.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=rf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function QA(r){let e=$A(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Me(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(I){const R=hw(I);return R instanceof Hn&&jv(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((R=>(function(H){return new il(wo(H.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(R)))})(t.orderBy));let f=null;t.limit&&(f=(function(I){let R;return R=typeof I=="object"?I.value:I,Rc(R)?null:R})(t.limit));let g=null;t.startAt&&(g=(function(I){const R=!!I.before,j=I.values||[];return new Do(j,R)})(t.startAt));let _=null;return t.endAt&&(_=(function(I){const R=!I.before,j=I.values||[];return new Do(j,R)})(t.endAt)),mA(e,o,h,l,f,"F",g,_)}function YA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=wo(t.unaryFilter.field);return ht.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=wo(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=wo(t.unaryFilter.field);return ht.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=wo(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ht.create(wo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Hn.create(t.compositeFilter.filters.map((s=>hw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(r):ye(30097,{filter:r})}function XA(r){return FA[r]}function JA(r){return UA[r]}function ZA(r){return jA[r]}function vo(r){return{fieldPath:r.canonicalString()}}function wo(r){return Nt.fromServerFormat(r.fieldPath)}function dw(r){return r instanceof ht?(function(t){if(t.op==="=="){if(Ny(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(Py(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ny(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(Py(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:JA(t.op),value:t.value}}})(r):r instanceof Hn?(function(t){const s=t.getFilters().map((o=>dw(o)));return s.length===1?s[0]:{compositeFilter:{op:ZA(t.op),filters:s}}})(r):ye(54877,{filter:r})}function ek(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function fw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,s,o,l=ve.min(),h=ve.min(),f=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.gt=e}}function nk(r){const e=QA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?hc(e,e.limit,"L"):e}/**
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
 */class rk{constructor(){this.Dn=new ik}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Si.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class ik{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new _t(Be.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new _t(Be.comparator)).toArray()}}/**
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
 */const qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pw=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(pw,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Vo(0)}static ur(){return new Vo(-1)}}/**
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
 */const Hy="LruGarbageCollector",sk=1048576;function Wy([r,e],[t,s]){const o=Ie(r,t);return o===0?Ie(e,s):o}class ok{constructor(e){this.Tr=e,this.buffer=new _t(Wy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Wy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ak{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(Hy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zo(t)?ne(Hy,"Ignoring IndexedDB error during garbage collection: ",t):await Bo(t)}await this.Rr(3e5)}))}}class lk{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(kc.ue);const s=new ok(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(qy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,f,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,f=Date.now(),this.removeTargets(e,s,t)))).next((I=>(l=I,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(_=Date.now(),yo()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${I} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I}))))}}function uk(r,e){return new lk(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.changes=new Ts((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ya(s.mutation,o,hn.empty(),Ge.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ce()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ce()){const o=us();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=$a();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=us();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ce())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=jr();const h=Qa(),f=(function(){return Qa()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Oi)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Ya(w.mutation,_,w.mutation.getFieldMask(),Ge.now())):h.set(_.key,hn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var I;return f.set(_,new hk(w,(I=h.get(_))!==null&&I!==void 0?I:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=Qa();let o=new tt(((h,f)=>h-f)),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||hn.empty();w=f.applyToLocalView(_,w),s.set(g,w);const I=(o.get(f.batchId)||Ce()).add(g);o=o.insert(f.batchId,I)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,I=Gv();w.forEach((R=>{if(!l.has(R)){const j=tw(t.get(R),s.get(R));j!==null&&I.set(R,j),l=l.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,I))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return le.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):$.resolve(us());let f=el,g=l;return h.next((_=>$.forEach(_,((w,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((R=>{g=g.insert(w,R)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Ce()))).next((w=>({batchId:f,changes:Kv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next((s=>{let o=$a();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=$a();return this.indexManager.getCollectionParents(e,l).next((f=>$.forEach(f,(g=>{const _=(function(I,R){return new Es(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((I,R)=>{h=h.insert(I,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,jt.newInvalidDocument(w)))}));let f=$a();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&Ya(w.mutation,_,hn.empty(),Ge.now()),Dc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
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
 */class fk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:nk(o.bundledQuery),readTime:ar(o.readTime)}})(t)),$.resolve()}}/**
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
 */class pk{constructor(){this.overlays=new tt(le.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=us();return $.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=us(),l=t.length+1,h=new le(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new tt(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=us(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=us(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>f.set(_,w))),!(f.size()>=o)););return $.resolve(f)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new VA(t,s));let l=this.kr.get(t);l===void 0&&(l=Ce(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class mk{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.qr=new _t(St.Qr),this.$r=new _t(St.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new St(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new le(new Be([])),s=new St(t,e),o=new St(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new le(new Be([])),s=new St(t,e),o=new St(t,e+1);let l=Ce();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return le.comparator(e.key,t.key)||Ie(e.Hr,t.Hr)}static Ur(e,t){return Ie(e.Hr,t.Hr)||le.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new _t(St.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new OA(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return $.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Of:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),$.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _t(Ie);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{s=s.add(f.Hr)}))})),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;le.isDocumentKey(l)||(l=l.child(""));const h=new St(new le(l),0);let f=new _t(Ie);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),$.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Me(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new St(t,0),o=this.Yr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.ni=e,this.docs=(function(){return new tt(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=jr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=jr();const h=t.path,f=new le(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||K1(W1(w),s)<=0||(o.has(w.key)||Dc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return $.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ri(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new _k(this)}getSize(e){return $.resolve(this.size)}}class _k extends ck{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.persistence=e,this.ii=new Ts((t=>xf(t)),bf),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new zf,this.targetCount=0,this._i=Vo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Vo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),$.waitFor(l).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,t){this.ai={},this.overlays={},this.ui=new kc(0),this.ci=!1,this.ci=!0,this.li=new mk,this.referenceDelegate=e(this),this.hi=new vk(this),this.indexManager=new rk,this.remoteDocumentCache=(function(o){return new yk(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new tk(t),this.Ti=new fk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new gk(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new wk(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return $.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class wk extends Q1{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Ai=new zf,this.Ri=null}static Vi(e){return new $f(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(s=>{const o=le.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,ve.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class pc{constructor(e,t){this.persistence=e,this.gi=new Ts((s=>J1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=uk(this,t)}static Vi(e,t){return new pc(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return $.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(s++,l.removeEntry(h,ve.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gu(e.data.value)),t}Sr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ce(),o=Ce();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new qf(e,t.fromCache,s,o)}}/**
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
 */class Ek{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Tk{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return nT()?8:Y1(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new Ek;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(yo()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",_o(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(yo()<=Re.DEBUG&&ne("QueryEngine","Query:",_o(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(yo()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",_o(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):$.resolve())}ps(e,t){if(xy(t))return $.resolve(null);let s=or(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=hc(t,null,"F"),s=or(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Ce(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,hc(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return xy(t)||o.isEqual(ve.min())?$.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?$.resolve(null):(yo()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),_o(t)),this.vs(e,h,t,H1(o,el)).next((f=>f)))}))}bs(e,t){let s=new _t(Hv(e));return t.forEach(((o,l)=>{Dc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return yo()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",_o(t)),this.gs.getDocumentsMatchingQuery(e,t,Si.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Hf="LocalStore",Ik=3e8;class Sk{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new tt(Ie),this.Ms=new Ts((l=>xf(l)),bf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Ak(r,e,t,s){return new Sk(r,e,t,s)}async function gw(r,e){const t=we(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let g=Ce();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function kk(r,e){const t=we(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,w){const I=_.batch,R=I.keys();let j=$.resolve();return R.forEach((H=>{j=j.next((()=>w.getEntry(g,H))).next((K=>{const B=_.docVersions.get(H);Me(B!==null,48541),K.version.compareTo(B)<0&&(I.applyToRemoteDocument(K,_),K.isValidDocument()&&(K.setReadTime(_.commitVersion),w.addEntry(K)))}))})),j.next((()=>f.mutationQueue.removeMutationBatch(g,I)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let g=Ce();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function yw(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Rk(r,e){const t=we(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((w,I)=>{const R=o.get(I);if(!R)return;f.push(t.hi.removeMatchingKeys(l,w.removedDocuments,I).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,I))));let j=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?j=j.withResumeToken(Dt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(I,j),(function(K,B,me){return K.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=Ik?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(R,j,w)&&f.push(t.hi.updateTargetData(l,j))}));let g=jr(),_=Ce();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(Ck(l,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!s.isEqual(ve.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((I=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(w)}return $.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function Ck(r,e,t){let s=Ce(),o=Ce();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=jr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ne(Hf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function Pk(r,e){const t=we(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Of),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Nk(r,e){const t=we(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,$.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new yi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function lf(r,e,t){const s=we(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!zo(h))throw h;ne(Hf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Ky(r,e,t){const s=we(r);let o=ve.min(),l=Ce();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const I=we(g),R=I.Ms.get(w);return R!==void 0?$.resolve(I.Fs.get(R)):I.hi.getTargetData(_,w)})(s,h,or(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?l:Ce()))).next((f=>(Dk(s,yA(e),f),{documents:f,qs:l})))))}function Dk(r,e,t){let s=r.xs.get(e)||ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class Gy{constructor(){this.activeTargetIds=IA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ok{constructor(){this.Fo=new Gy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Gy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Vk{xo(e){}shutdown(){}}/**
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
 */const Qy="ConnectivityMonitor";class Yy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ne(Qy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ne(Qy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zu=null;function uf(){return zu===null?zu=(function(){return 268435456+Math.round(2147483648*Math.random())})():zu++,"0x"+zu.toString(16)}/**
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
 */const Vd="RestConnection",xk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===lc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=uf(),f=this.Go(e,t.toUriEncodedString());ne(Vd,`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),w=Lo(_);return this.jo(e,f,g,s,w).then((I=>(ne(Vd,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw Ii(Vd,`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",s),I}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=xk[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class Mk extends bk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=uf();return new Promise(((f,g)=>{const _=new _v;_.setWithCredentials(!0),_.listenOnce(vv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Ku.NO_ERROR:const I=_.getResponseJson();ne(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),f(I);break;case Ku.TIMEOUT:ne(Ft,`RPC '${e}' ${h} timed out`),g(new ee(z.DEADLINE_EXCEEDED,"Request time out"));break;case Ku.HTTP_ERROR:const R=_.getStatus();if(ne(Ft,`RPC '${e}' ${h} failed with status:`,R,"response text:",_.getResponseText()),R>0){let j=_.getResponseJson();Array.isArray(j)&&(j=j[0]);const H=j==null?void 0:j.error;if(H&&H.status&&H.message){const K=(function(me){const ce=me.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(ce)>=0?ce:z.UNKNOWN})(H.status);g(new ee(K,H.message))}else g(new ee(z.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(z.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ne(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=uf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Tv(),f=Ev(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");ne(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,g);const I=h.createWebChannel(w,g);this.T_(I);let R=!1,j=!1;const H=new Lk({Ho:B=>{j?ne(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(R||(ne(Ft,`Opening RPC '${e}' stream ${o} transport.`),I.open(),R=!0),ne(Ft,`RPC '${e}' stream ${o} sending:`,B),I.send(B))},Yo:()=>I.close()}),K=(B,me,ce)=>{B.listen(me,(he=>{try{ce(he)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return K(I,za.EventType.OPEN,(()=>{j||(ne(Ft,`RPC '${e}' stream ${o} transport opened.`),H.s_())})),K(I,za.EventType.CLOSE,(()=>{j||(j=!0,ne(Ft,`RPC '${e}' stream ${o} transport closed`),H.__(),this.I_(I))})),K(I,za.EventType.ERROR,(B=>{j||(j=!0,Ii(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),H.__(new ee(z.UNAVAILABLE,"The operation could not be completed")))})),K(I,za.EventType.MESSAGE,(B=>{var me;if(!j){const ce=B.data[0];Me(!!ce,16349);const he=ce,Ee=(he==null?void 0:he.error)||((me=he[0])===null||me===void 0?void 0:me.error);if(Ee){ne(Ft,`RPC '${e}' stream ${o} received error:`,Ee);const Qe=Ee.status;let ke=(function(k){const P=ct[k];if(P!==void 0)return iw(P)})(Qe),D=Ee.message;ke===void 0&&(ke=z.INTERNAL,D="Unknown error status: "+Qe+" with message "+Ee.message),j=!0,H.__(new ee(ke,D)),I.close()}else ne(Ft,`RPC '${e}' stream ${o} received:`,ce),H.a_(ce)}})),K(f,wv.STAT_EVENT,(B=>{B.stat===Yd.PROXY?ne(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Yd.NOPROXY&&ne(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{H.o_()}),0),H}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function xd(){return typeof document<"u"?document:null}/**
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
 */function bc(r){return new BA(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="PersistentStream";class vw{constructor(e,t,s,o,l,h,f,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new _w(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ee(z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(Xy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(Xy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fk extends vw{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=qA(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ve.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?ar(h.readTime):ve.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=af(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=tf(g)?{documents:KA(l,g)}:{query:GA(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=aw(l,h.resumeToken);const _=rf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(ve.min())>0){f.readTime=fc(l,h.snapshotVersion.toTimestamp());const _=rf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const s=YA(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=af(this.serializer),t.removeTarget=e,this.k_(t)}}class Uk extends vw{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=WA(e.writeResults,e.commitTime),s=ar(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=af(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>HA(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{}class Bk extends jk{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,sf(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(z.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,sf(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(z.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class zk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ur(t),this._a=!1):ne("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="RemoteStore";class $k{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{Is(this)&&(ne(ms,"Restarting streams for network reachability change."),await(async function(g){const _=we(g);_.Ia.add(4),await gl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Lc(_)})(this))}))})),this.Aa=new zk(s,o)}}async function Lc(r){if(Is(r))for(const e of r.da)await e(!0)}async function gl(r){for(const e of r.da)await e(!1)}function ww(r,e){const t=we(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Qf(t)?Gf(t):$o(t).x_()&&Kf(t,e))}function Wf(r,e){const t=we(r),s=$o(t);t.Ta.delete(e),s.x_()&&Ew(t,e),t.Ta.size===0&&(s.x_()?s.B_():Is(t)&&t.Aa.set("Unknown"))}function Kf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$o(r).H_(e)}function Ew(r,e){r.Ra.$e(e),$o(r).Y_(e)}function Gf(r){r.Ra=new MA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),$o(r).start(),r.Aa.aa()}function Qf(r){return Is(r)&&!$o(r).M_()&&r.Ta.size>0}function Is(r){return we(r).Ia.size===0}function Tw(r){r.Ra=void 0}async function qk(r){r.Aa.set("Online")}async function Hk(r){r.Ta.forEach(((e,t)=>{Kf(r,e)}))}async function Wk(r,e){Tw(r),Qf(r)?(r.Aa.la(e),Gf(r)):r.Aa.set("Unknown")}async function Kk(r,e,t){if(r.Aa.set("Online"),e instanceof ow&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(s){ne(ms,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await mc(r,s)}else if(e instanceof Xu?r.Ra.Ye(e):e instanceof sw?r.Ra.it(e):r.Ra.et(e),!t.isEqual(ve.min()))try{const s=await yw(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(_);w&&l.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),Ew(l,g);const I=new yi(w.target,g,_,w.sequenceNumber);Kf(l,I)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(s){ne(ms,"Failed to raise snapshot:",s),await mc(r,s)}}async function mc(r,e,t){if(!zo(e))throw e;r.Ia.add(1),await gl(r),r.Aa.set("Offline"),t||(t=()=>yw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(ms,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Lc(r)}))}function Iw(r,e){return e().catch((t=>mc(r,t,e)))}async function Mc(r){const e=we(r),t=Ci(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Of;for(;Gk(e);)try{const o=await Pk(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,Qk(e,o)}catch(o){await mc(e,o)}Sw(e)&&Aw(e)}function Gk(r){return Is(r)&&r.Pa.length<10}function Qk(r,e){r.Pa.push(e);const t=Ci(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Sw(r){return Is(r)&&!Ci(r).M_()&&r.Pa.length>0}function Aw(r){Ci(r).start()}async function Yk(r){Ci(r).na()}async function Xk(r){const e=Ci(r);for(const t of r.Pa)e.X_(t.mutations)}async function Jk(r,e,t){const s=r.Pa.shift(),o=Uf.from(s,e,t);await Iw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Mc(r)}async function Zk(r,e){e&&Ci(r).Z_&&await(async function(s,o){if((function(h){return bA(h)&&h!==z.ABORTED})(o.code)){const l=s.Pa.shift();Ci(s).N_(),await Iw(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Mc(s)}})(r,e),Sw(r)&&Aw(r)}async function Jy(r,e){const t=we(r);t.asyncQueue.verifyOperationInProgress(),ne(ms,"RemoteStore received new credentials");const s=Is(t);t.Ia.add(3),await gl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Lc(t)}async function eR(r,e){const t=we(r);e?(t.Ia.delete(2),await Lc(t)):e||(t.Ia.add(2),await gl(t),t.Aa.set("Unknown"))}function $o(r){return r.Va||(r.Va=(function(t,s,o){const l=we(t);return l.ia(),new Fk(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:qk.bind(null,r),e_:Hk.bind(null,r),n_:Wk.bind(null,r),J_:Kk.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Qf(r)?Gf(r):r.Aa.set("Unknown")):(await r.Va.stop(),Tw(r))}))),r.Va}function Ci(r){return r.ma||(r.ma=(function(t,s,o){const l=we(t);return l.ia(),new Uk(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:Yk.bind(null,r),n_:Zk.bind(null,r),ea:Xk.bind(null,r),ta:Jk.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Mc(r)):(await r.ma.stop(),r.Pa.length>0&&(ne(ms,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Yf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(r,e){if(Ur("AsyncQueue",`${e}: ${r}`),zo(r))return new ee(z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||le.comparator(t.key,s.key):(t,s)=>le.comparator(t.key,s.key),this.keyedMap=$a(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.fa=new tt(le.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ye(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class xo{constructor(e,t,s,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new xo(e,t,Ao.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class nR{constructor(){this.queries=e_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=we(t),l=o.queries;o.queries=e_(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(s)}))})(this,new ee(z.ABORTED,"Firestore shutting down"))}}function e_(){return new Ts((r=>qv(r)),Nc)}async function rR(r,e){const t=we(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new tR,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Xf(h,`Initialization of query '${_o(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Jf(t)}async function iR(r,e){const t=we(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function sR(r,e){const t=we(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(s=!0);h.ya=o}}s&&Jf(t)}function oR(r,e,t){const s=we(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Jf(r){r.Da.forEach((e=>{e.next()}))}var cf,t_;(t_=cf||(cf={})).Fa="default",t_.Cache="cache";class aR{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new xo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==cf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.key=e}}class Rw{constructor(e){this.key=e}}class lR{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ce(),this.mutatedKeys=Ce(),this.Xa=Hv(e),this.eu=new Ao(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Zy,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,I)=>{const R=o.get(w),j=Dc(this.query,I)?I:null,H=!!R&&this.mutatedKeys.has(R.key),K=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let B=!1;R&&j?R.data.isEqual(j.data)?H!==K&&(s.track({type:3,doc:j}),B=!0):this.iu(R,j)||(s.track({type:2,doc:j}),B=!0,(g&&this.Xa(j,g)>0||_&&this.Xa(j,_)<0)&&(f=!0)):!R&&j?(s.track({type:0,doc:j}),B=!0):R&&!j&&(s.track({type:1,doc:R}),B=!0,(g||_)&&(f=!0)),B&&(j?(h=h.add(j),l=K?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,I)=>(function(j,H){const K=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:B})}};return K(j)-K(H)})(w.type,I.type)||this.Xa(w.doc,I.doc))),this.su(s),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new xo(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Zy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ce(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Rw(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new kw(s))})),t}uu(e){this.Ha=e.qs,this.Za=Ce();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return xo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Zf="SyncEngine";class uR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class cR{constructor(e){this.key=e,this.lu=!1}}class hR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Ts((f=>qv(f)),Nc),this.Tu=new Map,this.Iu=new Set,this.du=new tt(le.comparator),this.Eu=new Map,this.Au=new zf,this.Ru={},this.Vu=new Map,this.mu=Vo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function dR(r,e,t=!0){const s=Vw(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Cw(s,e,t,!0),o}async function fR(r,e){const t=Vw(r);await Cw(t,e,!0,!1)}async function Cw(r,e,t,s){const o=await Nk(r.localStore,or(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await pR(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&ww(r.remoteStore,o),f}async function pR(r,e,t,s,o){r.gu=(I,R,j)=>(async function(K,B,me,ce){let he=B.view.nu(me);he.Ds&&(he=await Ky(K.localStore,B.query,!1).then((({documents:D})=>B.view.nu(D,he))));const Ee=ce&&ce.targetChanges.get(B.targetId),Qe=ce&&ce.targetMismatches.get(B.targetId)!=null,ke=B.view.applyChanges(he,K.isPrimaryClient,Ee,Qe);return r_(K,B.targetId,ke._u),ke.snapshot})(r,I,R,j);const l=await Ky(r.localStore,e,!0),h=new lR(e,l.qs),f=h.nu(l.documents),g=ml.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);r_(r,t,_._u);const w=new uR(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function mR(r,e,t){const s=we(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Nc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await lf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Wf(s.remoteStore,o.targetId),hf(s,o.targetId)})).catch(Bo)):(hf(s,o.targetId),await lf(s.localStore,o.targetId,!0))}async function gR(r,e){const t=we(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Wf(t.remoteStore,s.targetId))}async function yR(r,e,t){const s=SR(r);try{const o=await(function(h,f){const g=we(h),_=Ge.now(),w=f.reduce(((j,H)=>j.add(H.key)),Ce());let I,R;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let H=jr(),K=Ce();return g.Os.getEntries(j,w).next((B=>{H=B,H.forEach(((me,ce)=>{ce.isValidDocument()||(K=K.add(me))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,H))).next((B=>{I=B;const me=[];for(const ce of f){const he=NA(ce,I.get(ce.key).overlayedDocument);he!=null&&me.push(new Oi(ce.key,he,Mv(he.value.mapValue),$n.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,me,f)})).next((B=>{R=B;const me=B.applyToLocalDocumentSet(I,K);return g.documentOverlayCache.saveOverlays(j,B.batchId,me)}))})).then((()=>({batchId:R.batchId,changes:Kv(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new tt(Ie)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await yl(s,o.changes),await Mc(s.remoteStore)}catch(o){const l=Xf(o,"Failed to persist write");t.reject(l)}}async function Pw(r,e){const t=we(r);try{const s=await Rk(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Me(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Me(h.lu,14607):o.removedDocuments.size>0&&(Me(h.lu,42227),h.lu=!1))})),await yl(t,s,e)}catch(s){await Bo(s)}}function n_(r,e,t){const s=we(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=we(h);g.onlineState=f;let _=!1;g.queries.forEach(((w,I)=>{for(const R of I.wa)R.va(f)&&(_=!0)})),_&&Jf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _R(r,e,t){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new tt(le.comparator);h=h.insert(l,jt.newNoDocument(l,ve.min()));const f=Ce().add(l),g=new xc(ve.min(),new Map,new tt(Ie),h,f);await Pw(s,g),s.du=s.du.remove(l),s.Eu.delete(e),ep(s)}else await lf(s.localStore,e,!1).then((()=>hf(s,e,t))).catch(Bo)}async function vR(r,e){const t=we(r),s=e.batch.batchId;try{const o=await kk(t.localStore,e);Dw(t,s,null),Nw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await yl(t,o)}catch(o){await Bo(o)}}async function wR(r,e,t){const s=we(r);try{const o=await(function(h,f){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,f).next((I=>(Me(I!==null,37113),w=I.keys(),g.mutationQueue.removeMutationBatch(_,I)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Dw(s,e,t),Nw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await yl(s,o)}catch(o){await Bo(o)}}function Nw(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Dw(r,e,t){const s=we(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function hf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Ow(r,s)}))}function Ow(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Wf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),ep(r))}function r_(r,e,t){for(const s of t)s instanceof kw?(r.Au.addReference(s.key,e),ER(r,s)):s instanceof Rw?(ne(Zf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Ow(r,s.key)):ye(19791,{yu:s})}function ER(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ne(Zf,"New document in limbo: "+t),r.Iu.add(s),ep(r))}function ep(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new le(Be.fromString(e)),s=r.mu.next();r.Eu.set(s,new cR(t)),r.du=r.du.insert(t,s),ww(r.remoteStore,new yi(or(Lf(t.path)),s,"TargetPurposeLimboResolution",kc.ue))}}async function yl(r,e,t){const s=we(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((f,g)=>{h.push(s.gu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const I=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(_){o.push(_);const I=qf.Es(g.targetId,_);l.push(I)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const w=we(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>$.forEach(_,(R=>$.forEach(R.Is,(j=>w.persistence.referenceDelegate.addReference(I,R.targetId,j))).next((()=>$.forEach(R.ds,(j=>w.persistence.referenceDelegate.removeReference(I,R.targetId,j)))))))))}catch(I){if(!zo(I))throw I;ne(Hf,"Failed to update sequence numbers: "+I)}for(const I of _){const R=I.targetId;if(!I.fromCache){const j=w.Fs.get(R),H=j.snapshotVersion,K=j.withLastLimboFreeSnapshotVersion(H);w.Fs=w.Fs.insert(R,K)}}})(s.localStore,l))}async function TR(r,e){const t=we(r);if(!t.currentUser.isEqual(e)){ne(Zf,"User change. New user:",e.toKey());const s=await gw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new ee(z.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await yl(t,s.Bs)}}function IR(r,e){const t=we(r),s=t.Eu.get(e);if(s&&s.lu)return Ce().add(s.key);{let o=Ce();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Vw(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_R.bind(null,e),e.hu.J_=sR.bind(null,e.eventManager),e.hu.pu=oR.bind(null,e.eventManager),e}function SR(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wR.bind(null,e),e}class gc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Ak(this.persistence,new Tk,e.initialUser,this.serializer)}Du(e){return new mw($f.Vi,this.serializer)}bu(e){return new Ok}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gc.provider={build:()=>new gc};class AR extends gc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Me(this.persistence.referenceDelegate instanceof pc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ak(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new mw((s=>pc.Vi(s,t)),this.serializer)}}class df{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>n_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=TR.bind(null,this.syncEngine),await eR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nR})()}createDatastore(e){const t=bc(e.databaseInfo.databaseId),s=(function(l){return new Mk(l)})(e.databaseInfo);return(function(l,h,f,g){return new Bk(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new $k(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>n_(this.syncEngine,t,0)),(function(){return Yy.C()?new Yy:new Vk})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,w){const I=new hR(o,l,h,f,g,_);return w&&(I.fu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=we(o);ne(ms,"RemoteStore shutting down."),l.Ia.add(5),await gl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}df.provider={build:()=>new df};/**
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
 */class kR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="FirestoreClient";class RR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Df.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Pi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Pi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Xf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function bd(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Pi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await gw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ii("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ii("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function i_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await CR(r);ne(Pi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Jy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Jy(e.remoteStore,o))),r._onlineComponents=e}async function CR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Pi,"Using user provided OfflineComponentProvider");try{await bd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ii("Error using user provided cache. Falling back to memory cache: "+t),await bd(r,new gc)}}else ne(Pi,"Using default OfflineComponentProvider"),await bd(r,new AR(void 0));return r._offlineComponents}async function xw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Pi,"Using user provided OnlineComponentProvider"),await i_(r,r._uninitializedComponentsProvider._online)):(ne(Pi,"Using default OnlineComponentProvider"),await i_(r,new df))),r._onlineComponents}function PR(r){return xw(r).then((e=>e.syncEngine))}async function s_(r){const e=await xw(r),t=e.eventManager;return t.onListen=dR.bind(null,e.syncEngine),t.onUnlisten=mR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gR.bind(null,e.syncEngine),t}/**
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
 */function bw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const o_=new Map;/**
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
 */const Lw="firestore.googleapis.com",a_=!0;class l_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Lw,this.ssl=a_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:a_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sk)throw new ee(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new b1;switch(s.type){case"firstParty":return new U1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=o_.get(t);s&&(ne("ComponentProvider","Removing Datastore"),o_.delete(t),s.terminate())})(this),Promise.resolve()}}function NR(r,e,t,s={}){var o;r=Lr(r,Fc);const l=Lo(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(N_(`https://${g}`),D_("Firestore",!0)),h.host!==Lw&&h.host!==g&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!Ti(_,f)&&(r._setSettings(_),s.mockUserToken)){let w,I;if(typeof s.mockUserToken=="string")w=s.mockUserToken,I=Ut.MOCK_USER;else{w=K0(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new ee(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Ut(R)}r._authCredentials=new L1(new Sv(w,I))}}/**
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
 */class Br{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class at{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(fl(t,at._jsonSchema))return new at(e,s||null,new le(Be.fromString(t.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:dt("string",at._jsonSchemaVersion),referencePath:dt("string")};class Ei extends Br{constructor(e,t,s){super(e,t,Lf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new le(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function Mw(r,e,...t){if(r=et(r),kv("collection","path",e),r instanceof Fc){const s=Be.fromString(e,...t);return Ey(s),new Ei(r,null,s)}{if(!(r instanceof at||r instanceof Ei))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Be.fromString(e,...t));return Ey(s),new Ei(r.firestore,null,s)}}function Uc(r,e,...t){if(r=et(r),arguments.length===1&&(e=Df.newId()),kv("doc","path",e),r instanceof Fc){const s=Be.fromString(e,...t);return wy(s),new at(r,null,new le(s))}{if(!(r instanceof at||r instanceof Ei))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Be.fromString(e,...t));return wy(s),new at(r.firestore,r instanceof Ei?r.converter:null,new le(s))}}/**
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
 */const u_="AsyncQueue";class c_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new _w(this,"async_queue_retry"),this.oc=()=>{const s=xd();s&&ne(u_,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=xd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=xd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new hs;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!zo(e))throw e;ne(u_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Ur("INTERNAL UNHANDLED ERROR: ",h_(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Yf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ye(47125,{hc:h_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function h_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class bo extends Fc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new c_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c_(e),this._firestoreClient=void 0,await e}}}function DR(r,e){const t=typeof r=="object"?r:_f(),s=typeof r=="string"?r:lc,o=Mo(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=H0("firestore");l&&NR(o,...l)}return o}function Fw(r){if(r._terminated)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||OR(r),r._firestoreClient}function OR(r){var e,t,s;const o=r._freezeSettings(),l=(function(f,g,_,w){return new tA(f,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,bw(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new RR(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class In{constructor(e){this._byteString=e}static fromBase64String(e){try{return new In(Dt.fromBase64String(e))}catch(t){throw new ee(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new In(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:In._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fl(e,In._jsonSchema))return In.fromBase64String(e.bytes)}}In._jsonSchemaVersion="firestore/bytes/1.0",In._jsonSchema={type:dt("string",In._jsonSchemaVersion),bytes:dt("string")};/**
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
 */class jc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _l{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lr._jsonSchemaVersion}}static fromJSON(e){if(fl(e,lr._jsonSchema))return new lr(e.latitude,e.longitude)}}lr._jsonSchemaVersion="firestore/geoPoint/1.0",lr._jsonSchema={type:dt("string",lr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
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
 */class ur{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ur._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fl(e,ur._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ur(e.vectorValues);throw new ee(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ur._jsonSchemaVersion="firestore/vectorValue/1.0",ur._jsonSchema={type:dt("string",ur._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=/^__.*__$/;class xR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Oi(e,this.data,this.fieldMask,t,this.fieldTransforms):new pl(e,this.data,t,this.fieldTransforms)}}class Uw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Oi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:r})}}class Bc{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Bc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return yc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(jw(this.Ec)&&VR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class bR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||bc(e)}Dc(e,t,s,o=!1){return new Bc({Ec:e,methodName:t,bc:s,path:Nt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vl(r){const e=r._freezeSettings(),t=bc(r._databaseId);return new bR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Bw(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);rp("Data must be an object, but it was:",h,s);const f=$w(s,h);let g,_;if(l.merge)g=new hn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const I of l.mergeFields){const R=ff(e,I,t);if(!h.contains(R))throw new ee(z.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Hw(w,R)||w.push(R)}g=new hn(w),_=h.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,_=h.fieldTransforms;return new xR(new nn(f),g,_)}class zc extends _l{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zc}}function LR(r,e,t){return new Bc({Ec:3,bc:e.settings.bc,methodName:r._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class tp extends _l{_toFieldTransform(e){return new ew(e.path,new sl)}isEqual(e){return e instanceof tp}}class np extends _l{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=LR(this,e,!0),s=this.vc.map((l=>qo(l,t))),o=new Oo(s);return new ew(e.path,o)}isEqual(e){return e instanceof np&&Ti(this.vc,e.vc)}}function MR(r,e,t,s){const o=r.Dc(1,e,t);rp("Data must be an object, but it was:",o,s);const l=[],h=nn.empty();Di(s,((g,_)=>{const w=ip(e,g,t);_=et(_);const I=o.gc(w);if(_ instanceof zc)l.push(w);else{const R=qo(_,I);R!=null&&(l.push(w),h.set(w,R))}}));const f=new hn(l);return new Uw(h,f,o.fieldTransforms)}function FR(r,e,t,s,o,l){const h=r.Dc(1,e,t),f=[ff(e,s,t)],g=[o];if(l.length%2!=0)throw new ee(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<l.length;R+=2)f.push(ff(e,l[R])),g.push(l[R+1]);const _=[],w=nn.empty();for(let R=f.length-1;R>=0;--R)if(!Hw(_,f[R])){const j=f[R];let H=g[R];H=et(H);const K=h.gc(j);if(H instanceof zc)_.push(j);else{const B=qo(H,K);B!=null&&(_.push(j),w.set(j,B))}}const I=new hn(_);return new Uw(w,I,h.fieldTransforms)}function zw(r,e,t,s=!1){return qo(t,r.Dc(s?4:3,e))}function qo(r,e){if(qw(r=et(r)))return rp("Unsupported field value:",e,r),$w(r,e);if(r instanceof _l)return(function(s,o){if(!jw(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let g=qo(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=et(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return SA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ge.fromDate(s);return{timestampValue:fc(o.serializer,l)}}if(s instanceof Ge){const l=new Ge(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:fc(o.serializer,l)}}if(s instanceof lr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof In)return{bytesValue:aw(o.serializer,s._byteString)};if(s instanceof at){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Bf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ur)return(function(h,f){return{mapValue:{fields:{[bv]:{stringValue:Lv},[uc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return Ff(f.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Ac(s)}`)})(r,e)}function $w(r,e){const t={};return Pv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(r,((s,o)=>{const l=qo(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function qw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ge||r instanceof lr||r instanceof In||r instanceof at||r instanceof _l||r instanceof ur)}function rp(r,e,t){if(!qw(t)||!Rv(t)){const s=Ac(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function ff(r,e,t){if((e=et(e))instanceof jc)return e._internalPath;if(typeof e=="string")return ip(r,e);throw yc("Field path arguments must be of type string or ",r,!1,void 0,t)}const UR=new RegExp("[~\\*/\\[\\]]");function ip(r,e,t){if(e.search(UR)>=0)throw yc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new jc(...e.split("."))._internalPath}catch{throw yc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function yc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ee(z.INVALID_ARGUMENT,f+r+g)}function Hw(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class sp{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(op("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jR extends sp{data(){return super.data()}}function op(r,e){return typeof e=="string"?ip(r,e):e instanceof jc?e._internalPath:e._delegate._internalPath}/**
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
 */function BR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ee(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ap{}class $c extends ap{}function zR(r,e,...t){let s=[];e instanceof ap&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof up)).length,f=l.filter((g=>g instanceof lp)).length;if(h>1||h>0&&f>0)throw new ee(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class lp extends $c{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new lp(e,t,s)}_apply(e){const t=this._parse(e);return Ww(e._query,t),new Br(e.firestore,e.converter,nf(e._query,t))}_parse(e){const t=vl(e.firestore);return(function(l,h,f,g,_,w,I){let R;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){p_(I,w);const H=[];for(const K of I)H.push(f_(g,l,K));R={arrayValue:{values:H}}}else R=f_(g,l,I)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||p_(I,w),R=zw(f,h,I,w==="in"||w==="not-in");return ht.create(_,w,R)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class up extends ap{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new up(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Hn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)Ww(h,g),h=nf(h,g)})(e._query,t),new Br(e.firestore,e.converter,nf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cp extends $c{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new cp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new il(l,h)})(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Es(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function $R(r,e="asc"){const t=e,s=op("orderBy",r);return cp._create(s,t)}class hp extends $c{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new hp(e,t,s)}_apply(e){return new Br(e.firestore,e.converter,hc(e._query,this._limit,this._limitType))}}function qR(r){return hp._create("limit",r,"F")}class dp extends $c{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new dp(e,t,s)}_apply(e){const t=WR(e,this.type,this._docOrFields,this._inclusive);return new Br(e.firestore,e.converter,(function(o,l){return new Es(o.path,o.collectionGroup,o.explicitOrderBy.slice(),o.filters.slice(),o.limit,o.limitType,l,o.endAt)})(e._query,t))}}function HR(...r){return dp._create("startAfter",r,!1)}function WR(r,e,t,s){if(t[0]=et(t[0]),t[0]instanceof sp)return(function(l,h,f,g,_){if(!g)throw new ee(z.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const w=[];for(const I of So(l))if(I.field.isKeyField())w.push(cc(h,g.key));else{const R=g.data.field(I.field);if(Cc(R))throw new ee(z.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+I.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(R===null){const j=I.field.canonicalString();throw new ee(z.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${j}' (used as the orderBy) does not exist.`)}w.push(R)}return new Do(w,_)})(r._query,r.firestore._databaseId,e,t[0]._document,s);{const o=vl(r.firestore);return(function(h,f,g,_,w,I){const R=h.explicitOrderBy;if(w.length>R.length)throw new ee(z.INVALID_ARGUMENT,`Too many arguments provided to ${_}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const j=[];for(let H=0;H<w.length;H++){const K=w[H];if(R[H].field.isKeyField()){if(typeof K!="string")throw new ee(z.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${_}(), but got a ${typeof K}`);if(!Mf(h)&&K.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${_}() must be a plain document ID, but '${K}' contains a slash.`);const B=h.path.child(Be.fromString(K));if(!le.isDocumentKey(B))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${_}() must result in a valid document path, but '${B}' is not because it contains an odd number of segments.`);const me=new le(B);j.push(cc(f,me))}else{const B=zw(g,_,K);j.push(B)}}return new Do(j,I)})(r._query,r.firestore._databaseId,o,e,t,s)}}function f_(r,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new ee(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mf(e)&&t.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Be.fromString(t));if(!le.isDocumentKey(s))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return cc(r,new le(s))}if(t instanceof at)return cc(r,t._key);throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ac(t)}.`)}function p_(r,e){if(!Array.isArray(r)||r.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ww(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class KR{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Di(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[uc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>ot(h.doubleValue)));return new ur(l)}convertGeoPoint(e){return new lr(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Pc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(tl(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Be.fromString(e);Me(fw(s),9688,{name:e});const o=new nl(s.get(1),s.get(3)),l=new le(s.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function Kw(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Ha{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ds extends sp{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(op("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ds._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",ds._jsonSchema={type:dt("string",ds._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Ju extends ds{data(e={}){return super.data(e)}}class ko{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ha(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ju(this._firestore,this._userDataWriter,s.key,s,new Ha(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new Ju(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ha(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new Ju(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ha(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:GR(f.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ko._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Df.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:r})}}ko._jsonSchemaVersion="firestore/querySnapshot/1.0",ko._jsonSchema={type:dt("string",ko._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class Gw extends KR{constructor(e){super(),this.firestore=e}convertBytes(e){return new In(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}function Qw(r,e,t){r=Lr(r,at);const s=Lr(r.firestore,bo),o=Kw(r.converter,e,t);return fp(s,[Bw(vl(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,$n.none())])}function QR(r,e,t,...s){r=Lr(r,at);const o=Lr(r.firestore,bo),l=vl(o);let h;return h=typeof(e=et(e))=="string"||e instanceof jc?FR(l,"updateDoc",r._key,e,t,s):MR(l,"updateDoc",r._key,e),fp(o,[h.toMutation(r._key,$n.exists(!0))])}function YR(r,e){const t=Lr(r.firestore,bo),s=Uc(r),o=Kw(r.converter,e);return fp(t,[Bw(vl(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,$n.exists(!1))]).then((()=>s))}function XR(r,...e){var t,s,o;r=et(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||d_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(d_(e[h])){const I=e[h];e[h]=(t=I.next)===null||t===void 0?void 0:t.bind(I),e[h+1]=(s=I.error)===null||s===void 0?void 0:s.bind(I),e[h+2]=(o=I.complete)===null||o===void 0?void 0:o.bind(I)}let g,_,w;if(r instanceof at)_=Lr(r.firestore,bo),w=Lf(r._key.path),g={next:I=>{e[h]&&e[h](JR(_,r,I))},error:e[h+1],complete:e[h+2]};else{const I=Lr(r,Br);_=Lr(I.firestore,bo),w=I._query;const R=new Gw(_);g={next:j=>{e[h]&&e[h](new ko(_,R,I,j))},error:e[h+1],complete:e[h+2]},BR(r._query)}return(function(R,j,H,K){const B=new kR(K),me=new aR(j,B,H);return R.asyncQueue.enqueueAndForget((async()=>rR(await s_(R),me))),()=>{B.Ou(),R.asyncQueue.enqueueAndForget((async()=>iR(await s_(R),me)))}})(Fw(_),w,f,g)}function fp(r,e){return(function(s,o){const l=new hs;return s.asyncQueue.enqueueAndForget((async()=>yR(await PR(s),o,l))),l.promise})(Fw(r),e)}function JR(r,e,t){const s=t.docs.get(e._key),o=new Gw(r);return new ds(r,o,e._key,s,new Ha(t.hasPendingWrites,t.fromCache),e.converter)}function ZR(){return new tp("serverTimestamp")}function eC(...r){return new np("arrayUnion",r)}(function(e,t=!0){(function(o){jo=o})(Fo),cr(new qn("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new bo(new M1(s.getProvider("auth-internal")),new j1(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ee(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nl(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Sn(my,gy,e),Sn(my,gy,"esm2017")})();const Yw="@firebase/installations",pp="0.6.18";/**
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
 */const Xw=1e4,Jw=`w:${pp}`,Zw="FIS_v2",tC="https://firebaseinstallations.googleapis.com/v1",nC=3600*1e3,rC="installations",iC="Installations";/**
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
 */const sC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gs=new _s(rC,iC,sC);function eE(r){return r instanceof dr&&r.code.includes("request-failed")}/**
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
 */function tE({projectId:r}){return`${tC}/projects/${r}/installations`}function nE(r){return{token:r.token,requestStatus:2,expiresIn:aC(r.expiresIn),creationTime:Date.now()}}async function rE(r,e){const s=(await e.json()).error;return gs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function iE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function oC(r,{refreshToken:e}){const t=iE(r);return t.append("Authorization",lC(e)),t}async function sE(r){const e=await r();return e.status>=500&&e.status<600?r():e}function aC(r){return Number(r.replace("s","000"))}function lC(r){return`${Zw} ${r}`}/**
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
 */async function uC({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=tE(r),o=iE(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:Zw,appId:r.appId,sdkVersion:Jw},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await sE(()=>fetch(s,f));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:nE(_.authToken)}}else throw await rE("Create Installation",g)}/**
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
 */function oE(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function cC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const hC=/^[cdef][\w-]{21}$/,pf="";function dC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=fC(r);return hC.test(t)?t:pf}catch{return pf}}function fC(r){return cC(r).substr(0,22)}/**
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
 */function qc(r){return`${r.appName}!${r.appId}`}/**
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
 */const aE=new Map;function lE(r,e){const t=qc(r);uE(t,e),pC(t,e)}function uE(r,e){const t=aE.get(r);if(t)for(const s of t)s(e)}function pC(r,e){const t=mC();t&&t.postMessage({key:r,fid:e}),gC()}let cs=null;function mC(){return!cs&&"BroadcastChannel"in self&&(cs=new BroadcastChannel("[Firebase] FID Change"),cs.onmessage=r=>{uE(r.data.key,r.data.fid)}),cs}function gC(){aE.size===0&&cs&&(cs.close(),cs=null)}/**
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
 */const yC="firebase-installations-database",_C=1,ys="firebase-installations-store";let Ld=null;function mp(){return Ld||(Ld=wc(yC,_C,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ys)}}})),Ld}async function _c(r,e){const t=qc(r),o=(await mp()).transaction(ys,"readwrite"),l=o.objectStore(ys),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&lE(r,e.fid),e}async function cE(r){const e=qc(r),s=(await mp()).transaction(ys,"readwrite");await s.objectStore(ys).delete(e),await s.done}async function Hc(r,e){const t=qc(r),o=(await mp()).transaction(ys,"readwrite"),l=o.objectStore(ys),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&lE(r,f.fid),f}/**
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
 */async function gp(r){let e;const t=await Hc(r.appConfig,s=>{const o=vC(s),l=wC(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===pf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function vC(r){const e=r||{fid:dC(),registrationStatus:0};return hE(e)}function wC(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(gs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=EC(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:TC(r)}:{installationEntry:e}}async function EC(r,e){try{const t=await uC(r,e);return _c(r.appConfig,t)}catch(t){throw eE(t)&&t.customData.serverCode===409?await cE(r.appConfig):await _c(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function TC(r){let e=await m_(r.appConfig);for(;e.registrationStatus===1;)await oE(100),e=await m_(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await gp(r);return s||t}return e}function m_(r){return Hc(r,e=>{if(!e)throw gs.create("installation-not-found");return hE(e)})}function hE(r){return IC(r)?{fid:r.fid,registrationStatus:0}:r}function IC(r){return r.registrationStatus===1&&r.registrationTime+Xw<Date.now()}/**
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
 */async function SC({appConfig:r,heartbeatServiceProvider:e},t){const s=AC(r,t),o=oC(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:Jw,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await sE(()=>fetch(s,f));if(g.ok){const _=await g.json();return nE(_)}else throw await rE("Generate Auth Token",g)}function AC(r,{fid:e}){return`${tE(r)}/${e}/authTokens:generate`}/**
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
 */async function yp(r,e=!1){let t;const s=await Hc(r.appConfig,l=>{if(!dE(l))throw gs.create("not-registered");const h=l.authToken;if(!e&&CC(h))return l;if(h.requestStatus===1)return t=kC(r,e),l;{if(!navigator.onLine)throw gs.create("app-offline");const f=NC(l);return t=RC(r,f),f}});return t?await t:s.authToken}async function kC(r,e){let t=await g_(r.appConfig);for(;t.authToken.requestStatus===1;)await oE(100),t=await g_(r.appConfig);const s=t.authToken;return s.requestStatus===0?yp(r,e):s}function g_(r){return Hc(r,e=>{if(!dE(e))throw gs.create("not-registered");const t=e.authToken;return DC(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function RC(r,e){try{const t=await SC(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await _c(r.appConfig,s),t}catch(t){if(eE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await cE(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _c(r.appConfig,s)}throw t}}function dE(r){return r!==void 0&&r.registrationStatus===2}function CC(r){return r.requestStatus===2&&!PC(r)}function PC(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+nC}function NC(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function DC(r){return r.requestStatus===1&&r.requestTime+Xw<Date.now()}/**
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
 */async function OC(r){const e=r,{installationEntry:t,registrationPromise:s}=await gp(e);return s?s.catch(console.error):yp(e).catch(console.error),t.fid}/**
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
 */async function VC(r,e=!1){const t=r;return await xC(t),(await yp(t,e)).token}async function xC(r){const{registrationPromise:e}=await gp(r);e&&await e}/**
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
 */function bC(r){if(!r||!r.options)throw Md("App Configuration");if(!r.name)throw Md("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Md(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Md(r){return gs.create("missing-app-config-values",{valueName:r})}/**
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
 */const fE="installations",LC="installations-internal",MC=r=>{const e=r.getProvider("app").getImmediate(),t=bC(e),s=Mo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},FC=r=>{const e=r.getProvider("app").getImmediate(),t=Mo(e,fE).getImmediate();return{getId:()=>OC(t),getToken:o=>VC(t,o)}};function UC(){cr(new qn(fE,MC,"PUBLIC")),cr(new qn(LC,FC,"PRIVATE"))}UC();Sn(Yw,pp);Sn(Yw,pp,"esm2017");/**
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
 */const jC="/firebase-messaging-sw.js",BC="/firebase-cloud-messaging-push-scope",pE="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",zC="https://fcmregistrations.googleapis.com/v1",mE="google.c.a.c_id",$C="google.c.a.c_l",qC="google.c.a.ts",HC="google.c.a.e",y_=1e4;var __;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(__||(__={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var al;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(al||(al={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(r){const e=new Uint8Array(r);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function WC(r){const e="=".repeat((4-r.length%4)%4),t=(r+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(t),o=new Uint8Array(s.length);for(let l=0;l<s.length;++l)o[l]=s.charCodeAt(l);return o}/**
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
 */const Fd="fcm_token_details_db",KC=5,v_="fcm_token_object_Store";async function GC(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Fd))return null;let e=null;return(await wc(Fd,KC,{upgrade:async(s,o,l,h)=>{var f;if(o<2||!s.objectStoreNames.contains(v_))return;const g=h.objectStore(v_),_=await g.index("fcmSenderId").get(r);if(await g.clear(),!!_){if(o===2){const w=_;if(!w.auth||!w.p256dh||!w.endpoint)return;e={token:w.fcmToken,createTime:(f=w.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:w.auth,p256dh:w.p256dh,endpoint:w.endpoint,swScope:w.swScope,vapidKey:typeof w.vapidKey=="string"?w.vapidKey:Dr(w.vapidKey)}}}else if(o===3){const w=_;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:Dr(w.auth),p256dh:Dr(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:Dr(w.vapidKey)}}}else if(o===4){const w=_;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:Dr(w.auth),p256dh:Dr(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:Dr(w.vapidKey)}}}}}})).close(),await Rd(Fd),await Rd("fcm_vapid_details_db"),await Rd("undefined"),QC(e)?e:null}function QC(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:e}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const YC="firebase-messaging-database",XC=1,ll="firebase-messaging-store";let Ud=null;function gE(){return Ud||(Ud=wc(YC,XC,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ll)}}})),Ud}async function JC(r){const e=yE(r),s=await(await gE()).transaction(ll).objectStore(ll).get(e);if(s)return s;{const o=await GC(r.appConfig.senderId);if(o)return await _p(r,o),o}}async function _p(r,e){const t=yE(r),o=(await gE()).transaction(ll,"readwrite");return await o.objectStore(ll).put(e,t),await o.done,e}function yE({appConfig:r}){return r.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Bt=new _s("messaging","Messaging",ZC);/**
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
 */async function eP(r,e){const t=await wp(r),s=_E(e),o={method:"POST",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(vp(r.appConfig),o)).json()}catch(h){throw Bt.create("token-subscribe-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Bt.create("token-subscribe-failed",{errorInfo:h})}if(!l.token)throw Bt.create("token-subscribe-no-token");return l.token}async function tP(r,e){const t=await wp(r),s=_E(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(`${vp(r.appConfig)}/${e.token}`,o)).json()}catch(h){throw Bt.create("token-update-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Bt.create("token-update-failed",{errorInfo:h})}if(!l.token)throw Bt.create("token-update-no-token");return l.token}async function nP(r,e){const s={method:"DELETE",headers:await wp(r)};try{const l=await(await fetch(`${vp(r.appConfig)}/${e}`,s)).json();if(l.error){const h=l.error.message;throw Bt.create("token-unsubscribe-failed",{errorInfo:h})}}catch(o){throw Bt.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function vp({projectId:r}){return`${zC}/projects/${r}/registrations`}async function wp({appConfig:r,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function _E({p256dh:r,auth:e,endpoint:t,vapidKey:s}){const o={web:{endpoint:t,auth:e,p256dh:r}};return s!==pE&&(o.web.applicationPubKey=s),o}/**
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
 */const rP=10080*60*1e3;async function iP(r){const e=await oP(r.swRegistration,r.vapidKey),t={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:e.endpoint,auth:Dr(e.getKey("auth")),p256dh:Dr(e.getKey("p256dh"))},s=await JC(r.firebaseDependencies);if(s){if(aP(s.subscriptionOptions,t))return Date.now()>=s.createTime+rP?sP(r,{token:s.token,createTime:Date.now(),subscriptionOptions:t}):s.token;try{await nP(r.firebaseDependencies,s.token)}catch(o){console.warn(o)}return w_(r.firebaseDependencies,t)}else return w_(r.firebaseDependencies,t)}async function sP(r,e){try{const t=await tP(r.firebaseDependencies,e),s=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await _p(r.firebaseDependencies,s),t}catch(t){throw t}}async function w_(r,e){const s={token:await eP(r,e),createTime:Date.now(),subscriptionOptions:e};return await _p(r,s),s.token}async function oP(r,e){const t=await r.pushManager.getSubscription();return t||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:WC(e)})}function aP(r,e){const t=e.vapidKey===r.vapidKey,s=e.endpoint===r.endpoint,o=e.auth===r.auth,l=e.p256dh===r.p256dh;return t&&s&&o&&l}/**
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
 */function E_(r){const e={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return lP(e,r),uP(e,r),cP(e,r),e}function lP(r,e){if(!e.notification)return;r.notification={};const t=e.notification.title;t&&(r.notification.title=t);const s=e.notification.body;s&&(r.notification.body=s);const o=e.notification.image;o&&(r.notification.image=o);const l=e.notification.icon;l&&(r.notification.icon=l)}function uP(r,e){e.data&&(r.data=e.data)}function cP(r,e){var t,s,o,l,h;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;r.fcmOptions={};const f=(o=(s=e.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;f&&(r.fcmOptions.link=f);const g=(h=e.fcmOptions)===null||h===void 0?void 0:h.analytics_label;g&&(r.fcmOptions.analyticsLabel=g)}/**
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
 */function hP(r){return typeof r=="object"&&!!r&&mE in r}/**
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
 */function dP(r){if(!r||!r.options)throw jd("App Configuration Object");if(!r.name)throw jd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=r;for(const s of e)if(!t[s])throw jd(s);return{appName:r.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function jd(r){return Bt.create("missing-app-config-values",{valueName:r})}/**
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
 */class fP{constructor(e,t,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=dP(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function pP(r){try{r.swRegistration=await navigator.serviceWorker.register(jC,{scope:BC}),r.swRegistration.update().catch(()=>{}),await mP(r.swRegistration)}catch(e){throw Bt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function mP(r){return new Promise((e,t)=>{const s=setTimeout(()=>t(new Error(`Service worker not registered after ${y_} ms`)),y_),o=r.installing||r.waiting;r.active?(clearTimeout(s),e()):o?o.onstatechange=l=>{var h;((h=l.target)===null||h===void 0?void 0:h.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),t(new Error("No incoming service worker found.")))})}/**
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
 */async function gP(r,e){if(!e&&!r.swRegistration&&await pP(r),!(!e&&r.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Bt.create("invalid-sw-registration");r.swRegistration=e}}/**
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
 */async function yP(r,e){e?r.vapidKey=e:r.vapidKey||(r.vapidKey=pE)}/**
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
 */async function vE(r,e){if(!navigator)throw Bt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Bt.create("permission-blocked");return await yP(r,e==null?void 0:e.vapidKey),await gP(r,e==null?void 0:e.serviceWorkerRegistration),iP(r)}/**
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
 */async function _P(r,e,t){const s=vP(e);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:t[mE],message_name:t[$C],message_time:t[qC],message_device_time:Math.floor(Date.now()/1e3)})}function vP(r){switch(r){case al.NOTIFICATION_CLICKED:return"notification_open";case al.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(r,e){const t=e.data;if(!t.isFirebaseMessaging)return;r.onMessageHandler&&t.messageType===al.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(E_(t)):r.onMessageHandler.next(E_(t)));const s=t.data;hP(s)&&s[HC]==="1"&&await _P(r,t.messageType,s)}const T_="@firebase/messaging",I_="0.12.22";/**
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
 */const EP=r=>{const e=new fP(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>wP(e,t)),e},TP=r=>{const e=r.getProvider("messaging").getImmediate();return{getToken:s=>vE(e,s)}};function IP(){cr(new qn("messaging",EP,"PUBLIC")),cr(new qn("messaging-internal",TP,"PRIVATE")),Sn(T_,I_),Sn(T_,I_,"esm2017")}/**
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
 */async function wE(){try{await V_()}catch{return!1}return typeof window<"u"&&O_()&&rT()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function SP(r,e){if(!navigator)throw Bt.create("only-available-in-window");return r.onMessageHandler=e,()=>{r.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(r=_f()){return wE().then(e=>{if(!e)throw Bt.create("unsupported-browser")},e=>{throw Bt.create("indexed-db-unsupported")}),Mo(et(r),"messaging").getImmediate()}async function kP(r,e){return r=et(r),vE(r,e)}function RP(r,e){return r=et(r),SP(r,e)}IP();const CP={apiKey:"AIzaSyBxlG_O8h-d8fHku5iNLNrCkyXVYxa7vC8",authDomain:"bm-app-ae5f1.firebaseapp.com",projectId:"bm-app-ae5f1",storageBucket:"bm-app-ae5f1.firebasestorage.app",messagingSenderId:"555817344714",appId:"1:555817344714:web:3a614cd195626f21cade33"},Ep=L_(CP),Wc=D1(Ep),wl=DR(Ep),PP=new Or;async function EE(){return await wE()?AP(Ep):null}const NP=(r,e)=>gS(Wc,r,e),DP=()=>jS(Wc,PP),Bd=()=>wS(Wc);function OP(r){var e;return Qw(Uc(wl,"users",r.uid),{name:r.displayName||((e=r.email)==null?void 0:e.split("@")[0])||"User",email:r.email||"",fcmTokens:[],approved:!0},{merge:!0})}function VP(r,e,t){var s;return YR(Mw(wl,"submissions"),{userId:r.uid,userName:r.displayName||((s=r.email)==null?void 0:s.split("@")[0])||"User",value:e,link:t,viewedBy:{},createdAt:ZR()})}function xP(r,e,t=null){const s=[$R("createdAt","desc")];return t&&s.push(HR(t)),s.push(qR(20)),XR(zR(Mw(wl,"submissions"),...s),o=>r({items:o.docs.map(l=>({id:l.id,...l.data()})),lastDoc:o.docs.at(-1)||null}),e)}function bP(r,e){return Qw(Uc(wl,"users",r),{fcmTokens:eC(e)},{merge:!0})}function LP(r,e){var s;const t=e.displayName||((s=e.email)==null?void 0:s.split("@")[0])||"User";return QR(Uc(wl,"submissions",r),{[`viewedBy.${e.uid}`]:t})}async function MP(r){if(!("Notification"in window))throw new Error("This browser does not support notifications.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");const t=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),s=await EE();if(!s)throw new Error("Messaging is unavailable in this browser.");const o=await kP(s,{vapidKey:"BI-MfWS4wtluiWZi5STzk4_aKLU7Z6_0qqkh63ALDoKU5YW8MFzkKTV8BFu5z1GM6Tv5BxCDqT07I1_ZoGg13Rw",serviceWorkerRegistration:t});if(!o)throw new Error("No notification token was returned.");return await bP(r.uid,o),o}async function FP(){const r=await EE();return r?RP(r,e=>{var t,s;return new Notification(((t=e.notification)==null?void 0:t.title)||"Bookmark update",{body:(s=e.notification)==null?void 0:s.body})}):()=>{}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),TE=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=Ke.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...f},g)=>Ke.createElement("svg",{ref:g,...jP,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:TE("lucide",o),...f},[...h.map(([_,w])=>Ke.createElement(_,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=(r,e)=>{const t=Ke.forwardRef(({className:s,...o},l)=>Ke.createElement(BP,{ref:l,iconNode:e,className:TE(`lucide-${UP(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=Wn("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=Wn("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=Wn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=Wn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=Wn("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=Wn("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=Wn("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=Wn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=Wn("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=Wn("ShieldX",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=Wn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function ZP(){const[r,e]=Ke.useState(""),[t,s]=Ke.useState(""),[o,l]=Ke.useState(""),[h,f]=Ke.useState(!1);async function g(_){f(!0),l("");try{await _()}catch(w){l(w.code==="auth/popup-closed-by-user"?"Sign-in was cancelled.":"Unable to sign in. Check your details and try again.")}finally{f(!1)}}return X.jsx("main",{className:"auth-shell",children:X.jsxs("section",{className:"auth-card",children:[X.jsxs("div",{className:"brand",children:[X.jsx(zP,{})," ",X.jsx("span",{children:"Bookmark Pair"})]}),X.jsx("h1",{children:"A small space for two."}),X.jsx("p",{children:"Sign in with an approved account to continue."}),X.jsxs("form",{onSubmit:_=>{_.preventDefault(),g(()=>NP(r,t))},children:[X.jsxs("label",{children:["Email",X.jsx("input",{type:"email",value:r,onChange:_=>e(_.target.value),required:!0,autoComplete:"email"})]}),X.jsxs("label",{children:["Password",X.jsx("input",{type:"password",value:t,onChange:_=>s(_.target.value),required:!0,autoComplete:"current-password"})]}),o&&X.jsx("p",{className:"error",role:"alert",children:o}),X.jsxs("button",{disabled:h,className:"primary",children:[X.jsx(KP,{size:18}),h?"Signing in…":"Sign in"]})]}),X.jsx("div",{className:"or",children:"or"}),X.jsxs("button",{disabled:h,className:"secondary",onClick:()=>g(DP),children:[X.jsx($P,{size:18}),"Continue with Google"]})]})})}async function eN(r,e){const t="https://bookmark-pair-notifications.heydoctorinfo.workers.dev",s=await e.getIdToken();if(!(await fetch(`${t.replace(/\/$/,"")}/notify`,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({submissionId:r})})).ok)throw new Error("Notification delivery failed.")}function tN({user:r}){const[e,t]=Ke.useState("none"),[s,o]=Ke.useState(""),[l,h]=Ke.useState("idle"),f=[["none","None"],["bookmark_now","Bookmark now"],["bookmark_later","Bookmark later"]];async function g(_){if(_.preventDefault(),l==="sending")return;const w=s.trim();if(!w&&e==="none")return h("required");if(w&&!/^https?:\/\/.+/i.test(w))return h("invalid");h("sending");try{const I=await VP(r,e,w);eN(I.id,r).catch(()=>{}),h("done"),o(""),t("none")}catch{h("error")}}return X.jsxs("section",{className:"card form-card",children:[X.jsx("h2",{children:"New bookmark"}),X.jsx("p",{children:"Share a link, choose a bookmark option, or do both."}),X.jsxs("form",{onSubmit:g,children:[X.jsxs("label",{htmlFor:"bookmark-link",children:["Link ",X.jsx("span",{className:"optional",children:"(optional)"}),X.jsx("input",{id:"bookmark-link",type:"url",value:s,onChange:_=>{o(_.target.value),h("idle")},placeholder:"https://example.com",disabled:l==="sending"})]}),X.jsxs("fieldset",{className:"choice-group",children:[X.jsx("legend",{children:"Bookmark timing"}),X.jsx("div",{className:"chips",children:f.map(([_,w])=>X.jsxs("label",{className:`chip ${e===_?"selected":""}`,children:[X.jsx("input",{type:"radio",name:"bookmark-choice",value:_,checked:e===_,onChange:()=>{t(_),h("idle")},disabled:l==="sending"}),X.jsx("span",{children:w})]},_))})]}),X.jsxs("button",{className:"primary",disabled:l==="sending",children:[X.jsx(YP,{size:18}),l==="sending"?"Submitting…":"Submit"]}),l==="done"&&X.jsx("p",{className:"success",role:"status",children:"Saved"}),l==="required"&&X.jsx("p",{className:"error",role:"alert",children:"Add a link or choose Bookmark now / Bookmark later."}),l==="invalid"&&X.jsx("p",{className:"error",role:"alert",children:"Enter a valid link beginning with http:// or https://."}),l==="error"&&X.jsx("p",{className:"error",role:"alert",children:"Couldn’t save that. Please try again."})]})]})}const nN={none:"None",bookmark_now:"Bookmark now",bookmark_later:"Bookmark later"};function rN({items:r,error:e,user:t,page:s,onPrevious:o,onNext:l,canNext:h}){function f(g){LP(g.id,t).catch(()=>{})}return X.jsxs("section",{className:"activity",children:[X.jsx("h2",{className:"activity-heading",children:"Recent activity"}),e?X.jsx("p",{className:"error",children:e}):r.length===0?X.jsxs("div",{className:"empty",children:[X.jsx(WP,{size:26}),X.jsx("p",{children:"No bookmarks yet."})]}):X.jsx("div",{className:"feed",children:r.map(g=>{var w,I;const _=Object.values(g.viewedBy||{});return X.jsxs("article",{className:"activity-item link-item",children:[X.jsx("div",{className:"avatar",children:(w=g.userName)==null?void 0:w.charAt(0).toUpperCase()}),X.jsxs("div",{className:"activity-content",children:[X.jsx("strong",{children:g.userName}),X.jsx("p",{children:nN[g.value]||g.value}),g.link&&X.jsxs("a",{className:"shared-link",href:g.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>f(g),children:[X.jsx(qP,{size:14})," Open shared link"]}),_.length>0&&X.jsxs("p",{className:"viewed",children:[X.jsx(HP,{size:14})," Viewed by ",_.join(", ")]})]}),X.jsx("time",{children:(I=g.createdAt)!=null&&I.toDate?g.createdAt.toDate().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"Just now"})]},g.id)})}),X.jsxs("nav",{className:"pagination","aria-label":"Activity pages",children:[X.jsx("button",{className:"page-button",onClick:o,disabled:s===1,children:"Previous"}),X.jsxs("span",{children:["Page ",s]}),X.jsx("button",{className:"page-button",onClick:l,disabled:!h,children:"Next"})]})]})}function iN({user:r,items:e,feedError:t,dark:s,setDark:o,onLogout:l,page:h,onPrevious:f,onNext:g,canNext:_}){var H;const[w,I]=Ke.useState("");async function R(){try{await MP(r),I("Notifications are on for this device.")}catch(K){I(K.message)}}const j=r.displayName||((H=r.email)==null?void 0:H.split("@")[0])||"there";return X.jsxs("main",{className:"app-shell",children:[X.jsxs("header",{children:[X.jsx("div",{children:X.jsxs("h1",{children:["Hello, ",j]})}),X.jsxs("div",{className:"controls",children:[X.jsx("button",{"aria-label":"Toggle theme",className:"icon",onClick:()=>o(!s),children:s?X.jsx(JP,{size:19}):X.jsx(QP,{size:19})}),X.jsxs("button",{className:"logout",onClick:l,children:[X.jsx(GP,{size:17}),X.jsx("span",{children:"Logout"})]})]})]}),X.jsx(tN,{user:r}),X.jsxs("section",{className:"push-row",children:[X.jsxs("div",{children:[X.jsx("strong",{children:"Stay in sync"}),X.jsx("small",{children:"Receive a private alert when the other person submits."})]}),X.jsx("button",{className:"text-button",onClick:R,children:"Enable notifications"})]}),w&&X.jsx("p",{className:"notice",role:"status",children:w}),X.jsx(rN,{items:e,error:t,user:r,page:h,onPrevious:f,onNext:g,canNext:_})]})}function sN(){return X.jsx("main",{className:"center",children:X.jsxs("section",{className:"denied",children:[X.jsx(XP,{size:36}),X.jsx("h1",{children:"Access denied"}),X.jsx("p",{children:"This account is not approved for this private app. You have been signed out."})]})})}const oN="ty2E8bD4ALVEwmpHNp4fIyOVQ7m2,5lOhcWjXGdZUKJ1kdhxgqKtX3HQ2".split(",").map(r=>r.trim()).filter(Boolean);function aN(){const[r,e]=Ke.useState(void 0),[t,s]=Ke.useState(!1),[o,l]=Ke.useState([]),[h,f]=Ke.useState([null]),[g,_]=Ke.useState(null),[w,I]=Ke.useState(""),[R,j]=Ke.useState(()=>localStorage.getItem("theme")==="dark"||!localStorage.getItem("theme")&&matchMedia("(prefers-color-scheme: dark)").matches);if(Ke.useEffect(()=>{document.documentElement.dataset.theme=R?"dark":"light",localStorage.setItem("theme",R?"dark":"light")},[R]),Ke.useEffect(()=>vS(Wc,async B=>{if(!B){e(null),s(!1);return}if(!oN.includes(B.uid)){s(!0),e(null),await Bd();return}try{await OP(B),e(B)}catch{s(!0),await Bd()}}),[]),Ke.useEffect(()=>{if(!r)return;const B=h.at(-1),me=xP(he=>{l(he.items),_(he.lastDoc)},()=>I("Unable to load activity. Please try again."),B);let ce=()=>{};return FP().then(he=>{ce=he}),()=>{me(),ce()}},[r,h]),Ke.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").catch(()=>{})},[]),t)return X.jsx(sN,{});if(r===void 0)return X.jsxs("main",{className:"center",children:[X.jsx("span",{className:"spinner"})," Loading securely…"]});const H=()=>f(B=>B.length>1?B.slice(0,-1):B),K=()=>{g&&f(B=>[...B,g])};return r?X.jsx(iN,{user:r,items:o,feedError:w,dark:R,setDark:j,onLogout:Bd,page:h.length,onPrevious:H,onNext:K,canNext:o.length===20}):X.jsx(ZP,{})}L0.createRoot(document.getElementById("root")).render(X.jsx(N0.StrictMode,{children:X.jsx(aN,{})}));

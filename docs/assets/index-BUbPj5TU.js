(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function D0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var wd={exports:{}},Ba={},Ed={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function O0(){if(Vg)return ke;Vg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function k(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,K={};function B(V,H,ce){this.props=V,this.context=H,this.refs=K,this.updater=ce||U}B.prototype.isReactComponent={},B.prototype.setState=function(V,H){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,H,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function he(){}he.prototype=B.prototype;function ie(V,H,ce){this.props=V,this.context=H,this.refs=K,this.updater=ce||U}var fe=ie.prototype=new he;fe.constructor=ie,$(fe,B.prototype),fe.isPureReactComponent=!0;var ve=Array.isArray,be=Object.prototype.hasOwnProperty,Te={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(V,H,ce){var Ie,Ae={},Ne=null,Le=null;if(H!=null)for(Ie in H.ref!==void 0&&(Le=H.ref),H.key!==void 0&&(Ne=""+H.key),H)be.call(H,Ie)&&!D.hasOwnProperty(Ie)&&(Ae[Ie]=H[Ie]);var Me=arguments.length-2;if(Me===1)Ae.children=ce;else if(1<Me){for(var qe=Array(Me),vt=0;vt<Me;vt++)qe[vt]=arguments[vt+2];Ae.children=qe}if(V&&V.defaultProps)for(Ie in Me=V.defaultProps,Me)Ae[Ie]===void 0&&(Ae[Ie]=Me[Ie]);return{$$typeof:r,type:V,key:Ne,ref:Le,props:Ae,_owner:Te.current}}function R(V,H){return{$$typeof:r,type:V.type,key:H,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function O(V){var H={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ce){return H[ce]})}var x=/\/+/g;function A(V,H){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):H.toString(36)}function rt(V,H,ce,Ie,Ae){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case r:case e:Le=!0}}if(Le)return Le=V,Ae=Ae(Le),V=Ie===""?"."+A(Le,0):Ie,ve(Ae)?(ce="",V!=null&&(ce=V.replace(x,"$&/")+"/"),rt(Ae,H,ce,"",function(vt){return vt})):Ae!=null&&(P(Ae)&&(Ae=R(Ae,ce+(!Ae.key||Le&&Le.key===Ae.key?"":(""+Ae.key).replace(x,"$&/")+"/")+V)),H.push(Ae)),1;if(Le=0,Ie=Ie===""?".":Ie+":",ve(V))for(var Me=0;Me<V.length;Me++){Ne=V[Me];var qe=Ie+A(Ne,Me);Le+=rt(Ne,H,ce,qe,Ae)}else if(qe=k(V),typeof qe=="function")for(V=qe.call(V),Me=0;!(Ne=V.next()).done;)Ne=Ne.value,qe=Ie+A(Ne,Me++),Le+=rt(Ne,H,ce,qe,Ae);else if(Ne==="object")throw H=String(V),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Le}function Ot(V,H,ce){if(V==null)return V;var Ie=[],Ae=0;return rt(V,Ie,"","",function(Ne){return H.call(ce,Ne,Ae++)}),Ie}function Vt(V){if(V._status===-1){var H=V._result;H=H(),H.then(function(ce){(V._status===0||V._status===-1)&&(V._status=1,V._result=ce)},function(ce){(V._status===0||V._status===-1)&&(V._status=2,V._result=ce)}),V._status===-1&&(V._status=0,V._result=H)}if(V._status===1)return V._result.default;throw V._result}var je={current:null},Z={transition:null},de={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Te};function re(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Ot,forEach:function(V,H,ce){Ot(V,function(){H.apply(this,arguments)},ce)},count:function(V){var H=0;return Ot(V,function(){H++}),H},toArray:function(V){return Ot(V,function(H){return H})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},ke.Component=B,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=ie,ke.StrictMode=s,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,ke.act=re,ke.cloneElement=function(V,H,ce){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=$({},V.props),Ae=V.key,Ne=V.ref,Le=V._owner;if(H!=null){if(H.ref!==void 0&&(Ne=H.ref,Le=Te.current),H.key!==void 0&&(Ae=""+H.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(qe in H)be.call(H,qe)&&!D.hasOwnProperty(qe)&&(Ie[qe]=H[qe]===void 0&&Me!==void 0?Me[qe]:H[qe])}var qe=arguments.length-2;if(qe===1)Ie.children=ce;else if(1<qe){Me=Array(qe);for(var vt=0;vt<qe;vt++)Me[vt]=arguments[vt+2];Ie.children=Me}return{$$typeof:r,type:V.type,key:Ae,ref:Ne,props:Ie,_owner:Le}},ke.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},ke.createElement=S,ke.createFactory=function(V){var H=S.bind(null,V);return H.type=V,H},ke.createRef=function(){return{current:null}},ke.forwardRef=function(V){return{$$typeof:f,render:V}},ke.isValidElement=P,ke.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Vt}},ke.memo=function(V,H){return{$$typeof:_,type:V,compare:H===void 0?null:H}},ke.startTransition=function(V){var H=Z.transition;Z.transition={};try{V()}finally{Z.transition=H}},ke.unstable_act=re,ke.useCallback=function(V,H){return je.current.useCallback(V,H)},ke.useContext=function(V){return je.current.useContext(V)},ke.useDebugValue=function(){},ke.useDeferredValue=function(V){return je.current.useDeferredValue(V)},ke.useEffect=function(V,H){return je.current.useEffect(V,H)},ke.useId=function(){return je.current.useId()},ke.useImperativeHandle=function(V,H,ce){return je.current.useImperativeHandle(V,H,ce)},ke.useInsertionEffect=function(V,H){return je.current.useInsertionEffect(V,H)},ke.useLayoutEffect=function(V,H){return je.current.useLayoutEffect(V,H)},ke.useMemo=function(V,H){return je.current.useMemo(V,H)},ke.useReducer=function(V,H,ce){return je.current.useReducer(V,H,ce)},ke.useRef=function(V){return je.current.useRef(V)},ke.useState=function(V){return je.current.useState(V)},ke.useSyncExternalStore=function(V,H,ce){return je.current.useSyncExternalStore(V,H,ce)},ke.useTransition=function(){return je.current.useTransition()},ke.version="18.3.1",ke}var xg;function gf(){return xg||(xg=1,Ed.exports=O0()),Ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function V0(){if(bg)return Ba;bg=1;var r=gf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,T={},k=null,U=null;_!==void 0&&(k=""+_),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(U=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:f,key:k,ref:U,props:T,_owner:o.current}}return Ba.Fragment=t,Ba.jsx=h,Ba.jsxs=h,Ba}var Lg;function x0(){return Lg||(Lg=1,wd.exports=V0()),wd.exports}var Q=x0(),ze=gf();const b0=D0(ze);var Fu={},Td={exports:{}},tn={},Id={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function L0(){return Mg||(Mg=1,(function(r){function e(Z,de){var re=Z.length;Z.push(de);e:for(;0<re;){var V=re-1>>>1,H=Z[V];if(0<o(H,de))Z[V]=de,Z[re]=H,re=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var de=Z[0],re=Z.pop();if(re!==de){Z[0]=re;e:for(var V=0,H=Z.length,ce=H>>>1;V<ce;){var Ie=2*(V+1)-1,Ae=Z[Ie],Ne=Ie+1,Le=Z[Ne];if(0>o(Ae,re))Ne<H&&0>o(Le,Ae)?(Z[V]=Le,Z[Ne]=re,V=Ne):(Z[V]=Ae,Z[Ie]=re,V=Ie);else if(Ne<H&&0>o(Le,re))Z[V]=Le,Z[Ne]=re,V=Ne;else break e}}return de}function o(Z,de){var re=Z.sortIndex-de.sortIndex;return re!==0?re:Z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,T=null,k=3,U=!1,$=!1,K=!1,B=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(Z){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=Z)s(_),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(_)}}function ve(Z){if(K=!1,fe(Z),!$)if(t(g)!==null)$=!0,Vt(be);else{var de=t(_);de!==null&&je(ve,de.startTime-Z)}}function be(Z,de){$=!1,K&&(K=!1,he(S),S=-1),U=!0;var re=k;try{for(fe(de),T=t(g);T!==null&&(!(T.expirationTime>de)||Z&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,k=T.priorityLevel;var H=V(T.expirationTime<=de);de=r.unstable_now(),typeof H=="function"?T.callback=H:T===t(g)&&s(g),fe(de)}else s(g);T=t(g)}if(T!==null)var ce=!0;else{var Ie=t(_);Ie!==null&&je(ve,Ie.startTime-de),ce=!1}return ce}finally{T=null,k=re,U=!1}}var Te=!1,D=null,S=-1,R=5,P=-1;function O(){return!(r.unstable_now()-P<R)}function x(){if(D!==null){var Z=r.unstable_now();P=Z;var de=!0;try{de=D(!0,Z)}finally{de?A():(Te=!1,D=null)}}else Te=!1}var A;if(typeof ie=="function")A=function(){ie(x)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ot=rt.port2;rt.port1.onmessage=x,A=function(){Ot.postMessage(null)}}else A=function(){B(x,0)};function Vt(Z){D=Z,Te||(Te=!0,A())}function je(Z,de){S=B(function(){Z(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){$||U||($=!0,Vt(be))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(k){case 1:case 2:case 3:var de=3;break;default:de=k}var re=k;k=de;try{return Z()}finally{k=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,de){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var re=k;k=Z;try{return de()}finally{k=re}},r.unstable_scheduleCallback=function(Z,de,re){var V=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=re+H,Z={id:w++,callback:de,priorityLevel:Z,startTime:re,expirationTime:H,sortIndex:-1},re>V?(Z.sortIndex=re,e(_,Z),t(g)===null&&Z===t(_)&&(K?(he(S),S=-1):K=!0,je(ve,re-V))):(Z.sortIndex=H,e(g,Z),$||U||($=!0,Vt(be))),Z},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Z){var de=k;return function(){var re=k;k=de;try{return Z.apply(this,arguments)}finally{k=re}}}})(Sd)),Sd}var Fg;function M0(){return Fg||(Fg=1,Id.exports=L0()),Id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function F0(){if(Ug)return tn;Ug=1;var r=gf(),e=M0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function k(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function U(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,i,a,c){if(i===null||typeof i>"u"||U(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function K(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new K(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new K(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new K(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new K(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new K(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new K(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new K(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new K(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new K(n,5,!1,n.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ie(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(he,ie);B[i]=new K(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(he,ie);B[i]=new K(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(he,ie);B[i]=new K(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!0,!0)});function fe(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&($(i,a,d,c)&&(a=null),c||d===null?k(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ve=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),Te=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,V;function H(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var ce=!1;function Ie(n,i){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,I=m.length-1;1<=v&&0<=I&&d[v]!==m[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==m[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==m[I]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=I);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Ae(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Te:return"Portal";case R:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case rt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case x:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ot:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case Vt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(n){var i=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function fr(n){n._valueTracker||(n._valueTracker=vt(n))}function As(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function $r(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Vi(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ks(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Go(n,i){i=i.checked,i!=null&&fe(n,"checked",i,!1)}function Qo(n,i){Go(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rs(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rs(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Il(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rs(n,i,a){(i!=="number"||$r(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var pr=Array.isArray;function mr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Yo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Cs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(pr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function Ps(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Xo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ft(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ft(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gr,Jo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=gr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function qr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bi=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(n){bi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xi[i]=xi[n]})});function Zo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||xi.hasOwnProperty(n)&&xi[n]?(""+i).trim():i+"px"}function ea(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Zo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ta=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(n,i){if(i){if(ta[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ra(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=null;function Ns(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ds=null,fn=null,Kn=null;function Os(n){if(n=Ra(n)){if(typeof Ds!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Zl(i),Ds(n.stateNode,n.type,i))}}function Gn(n){fn?Kn?Kn.push(n):Kn=[n]:fn=n}function ia(){if(fn){var n=fn,i=Kn;if(Kn=fn=null,Os(n),i)for(n=0;n<i.length;n++)Os(i[n])}}function Mi(n,i){return n(i)}function sa(){}var yr=!1;function oa(n,i,a){if(yr)return n(i,a);yr=!0;try{return Mi(n,i,a)}finally{yr=!1,(fn!==null||Kn!==null)&&(sa(),ia())}}function it(n,i){var a=n.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Vs=!1;if(f)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Vs=!1}function Fi(n,i,a,c,d,m,v,I,C){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(G){this.onError(G)}}var Ui=!1,xs=null,Cn=!1,aa=null,Gc={onError:function(n){Ui=!0,xs=n}};function bs(n,i,a,c,d,m,v,I,C){Ui=!1,xs=null,Fi.apply(Gc,arguments)}function Sl(n,i,a,c,d,m,v,I,C){if(bs.apply(this,arguments),Ui){if(Ui){var F=xs;Ui=!1,xs=null}else throw Error(t(198));Cn||(Cn=!0,aa=F)}}function Pn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ji(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Nn(n){if(Pn(n)!==n)throw Error(t(188))}function Al(n){var i=n.alternate;if(!i){if(i=Pn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Nn(d),n;if(m===c)return Nn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=m;break}if(I===c){v=!0,c=d,a=m;break}I=I.sibling}if(!v){for(I=m.child;I;){if(I===a){v=!0,a=m,c=d;break}if(I===c){v=!0,c=m,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function la(n){return n=Al(n),n!==null?Ls(n):null}function Ls(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ls(n);if(i!==null)return i;n=n.sibling}return null}var Ms=e.unstable_scheduleCallback,ua=e.unstable_cancelCallback,kl=e.unstable_shouldYield,Qc=e.unstable_requestPaint,He=e.unstable_now,Rl=e.unstable_getCurrentPriorityLevel,zi=e.unstable_ImmediatePriority,Hr=e.unstable_UserBlockingPriority,pn=e.unstable_NormalPriority,ca=e.unstable_LowPriority,Cl=e.unstable_IdlePriority,Bi=null,sn=null;function Pl(n){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Bi,n,void 0,(n.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Dl,ha=Math.log,Nl=Math.LN2;function Dl(n){return n>>>=0,n===0?32:31-(ha(n)/Nl|0)|0}var Fs=64,Us=4194304;function Wr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $i(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Wr(I):(m&=v,m!==0&&(c=Wr(m)))}else v=a&~d,v!==0?c=Wr(v):m!==0&&(c=Wr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-$t(i),d=1<<a,c|=n[a],i&=~d;return c}function Yc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-$t(m),I=1<<v,C=d[v];C===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Yc(I,i)):C<=i&&(n.expiredLanes|=I),m&=~I}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qi(){var n=Fs;return Fs<<=1,(Fs&4194240)===0&&(Fs=64),n}function Kr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Gr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-$t(i),n[i]=a}function Be(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-$t(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Qr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-$t(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function Yr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ol,js,Vl,xl,bl,da=!1,Qn=[],At=null,Dn=null,On=null,Xr=new Map,mn=new Map,Yn=[],Xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ll(n,i){switch(n){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Xr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(i.pointerId)}}function Gt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ra(i),i!==null&&js(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Jc(n,i,a,c,d){switch(i){case"focusin":return At=Gt(At,n,i,a,c,d),!0;case"dragenter":return Dn=Gt(Dn,n,i,a,c,d),!0;case"mouseover":return On=Gt(On,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Xr.set(m,Gt(Xr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,mn.set(m,Gt(mn.get(m)||null,n,i,a,c,d)),!0}return!1}function Ml(n){var i=Qi(n.target);if(i!==null){var a=Pn(i);if(a!==null){if(i=a.tag,i===13){if(i=ji(a),i!==null){n.blockedOn=i,bl(n.priority,function(){Vl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=zs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Li=c,a.target.dispatchEvent(c),Li=null}else return i=Ra(a),i!==null&&js(i),n.blockedOn=a,!1;i.shift()}return!0}function Hi(n,i,a){vr(n)&&a.delete(i)}function Fl(){da=!1,At!==null&&vr(At)&&(At=null),Dn!==null&&vr(Dn)&&(Dn=null),On!==null&&vr(On)&&(On=null),Xr.forEach(Hi),mn.forEach(Hi)}function Vn(n,i){n.blockedOn===i&&(n.blockedOn=null,da||(da=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fl)))}function xn(n){function i(d){return Vn(d,n)}if(0<Qn.length){Vn(Qn[0],n);for(var a=1;a<Qn.length;a++){var c=Qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(At!==null&&Vn(At,n),Dn!==null&&Vn(Dn,n),On!==null&&Vn(On,n),Xr.forEach(i),mn.forEach(i),a=0;a<Yn.length;a++)c=Yn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)Ml(a),a.blockedOn===null&&Yn.shift()}var wr=ve.ReactCurrentBatchConfig,Jr=!0;function Ye(n,i,a,c){var d=Pe,m=wr.transition;wr.transition=null;try{Pe=1,fa(n,i,a,c)}finally{Pe=d,wr.transition=m}}function Zc(n,i,a,c){var d=Pe,m=wr.transition;wr.transition=null;try{Pe=4,fa(n,i,a,c)}finally{Pe=d,wr.transition=m}}function fa(n,i,a,c){if(Jr){var d=zs(n,i,a,c);if(d===null)ch(n,i,c,Wi,a),Ll(n,c);else if(Jc(d,n,i,a,c))c.stopPropagation();else if(Ll(n,c),i&4&&-1<Xc.indexOf(n)){for(;d!==null;){var m=Ra(d);if(m!==null&&Ol(m),m=zs(n,i,a,c),m===null&&ch(n,i,c,Wi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else ch(n,i,c,null,a)}}var Wi=null;function zs(n,i,a,c){if(Wi=null,n=Ns(c),n=Qi(n),n!==null)if(i=Pn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ji(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Wi=n,null}function pa(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rl()){case zi:return 1;case Hr:return 4;case pn:case ca:return 16;case Cl:return 536870912;default:return 16}default:return 16}}var an=null,Bs=null,Qt=null;function ma(){if(Qt)return Qt;var n,i=Bs,a=i.length,c,d="value"in an?an.value:an.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Qt=d.slice(n,1<c?1-c:void 0)}function $s(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Xn(){return!0}function ga(){return!1}function kt(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xn:ga,this.isPropagationStopped=ga,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),i}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=kt(bn),Jn=re({},bn,{view:0,detail:0}),eh=kt(Jn),Hs,Er,Zr,Ki=re({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zr&&(Zr&&n.type==="mousemove"?(Hs=n.screenX-Zr.screenX,Er=n.screenY-Zr.screenY):Er=Hs=0,Zr=n),Hs)},movementY:function(n){return"movementY"in n?n.movementY:Er}}),Ws=kt(Ki),ya=re({},Ki,{dataTransfer:0}),Ul=kt(ya),Ks=re({},Jn,{relatedTarget:0}),Gs=kt(Ks),jl=re({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=kt(jl),zl=re({},bn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bl=kt(zl),$l=re({},bn,{data:0}),_a=kt($l),Qs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ql={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ql[n])?!!i[n]:!1}function Zn(){return Hl}var u=re({},Jn,{key:function(n){if(n.key){var i=Qs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=$s(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(n){return n.type==="keypress"?$s(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$s(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=kt(u),y=re({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=kt(y),b=re({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),j=kt(b),J=re({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=kt(J),mt=re({},Ki,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=kt(mt),wt=[9,13,27,32],lt=f&&"CompositionEvent"in window,gn=null;f&&"documentMode"in document&&(gn=document.documentMode);var ln=f&&"TextEvent"in window&&!gn,Gi=f&&(!lt||gn&&8<gn&&11>=gn),Ys=" ",Rp=!1;function Cp(n,i){switch(n){case"keyup":return wt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Xs=!1;function CE(n,i){switch(n){case"compositionend":return Pp(i);case"keypress":return i.which!==32?null:(Rp=!0,Ys);case"textInput":return n=i.data,n===Ys&&Rp?null:n;default:return null}}function PE(n,i){if(Xs)return n==="compositionend"||!lt&&Cp(n,i)?(n=ma(),Qt=Bs=an=null,Xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gi&&i.locale!=="ko"?null:i.data;default:return null}}var NE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!NE[n.type]:i==="textarea"}function Dp(n,i,a,c){Gn(c),i=Yl(i,"onChange"),0<i.length&&(a=new qs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var va=null,wa=null;function DE(n){Qp(n,0)}function Wl(n){var i=no(n);if(As(i))return n}function OE(n,i){if(n==="change")return i}var Op=!1;if(f){var th;if(f){var nh="oninput"in document;if(!nh){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),nh=typeof Vp.oninput=="function"}th=nh}else th=!1;Op=th&&(!document.documentMode||9<document.documentMode)}function xp(){va&&(va.detachEvent("onpropertychange",bp),wa=va=null)}function bp(n){if(n.propertyName==="value"&&Wl(wa)){var i=[];Dp(i,wa,n,Ns(n)),oa(DE,i)}}function VE(n,i,a){n==="focusin"?(xp(),va=i,wa=a,va.attachEvent("onpropertychange",bp)):n==="focusout"&&xp()}function xE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wl(wa)}function bE(n,i){if(n==="click")return Wl(i)}function LE(n,i){if(n==="input"||n==="change")return Wl(i)}function ME(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ln=typeof Object.is=="function"?Object.is:ME;function Ea(n,i){if(Ln(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Ln(n[d],i[d]))return!1}return!0}function Lp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mp(n,i){var a=Lp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lp(a)}}function Fp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Fp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Up(){for(var n=window,i=$r();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=$r(n.document)}return i}function rh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function FE(n){var i=Up(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Fp(a.ownerDocument.documentElement,a)){if(c!==null&&rh(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Mp(a,m);var v=Mp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var UE=f&&"documentMode"in document&&11>=document.documentMode,Js=null,ih=null,Ta=null,sh=!1;function jp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sh||Js==null||Js!==$r(c)||(c=Js,"selectionStart"in c&&rh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&Ea(Ta,c)||(Ta=c,c=Yl(ih,"onSelect"),0<c.length&&(i=new qs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Js)))}function Kl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Zs={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},oh={},zp={};f&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Gl(n){if(oh[n])return oh[n];if(!Zs[n])return n;var i=Zs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in zp)return oh[n]=i[a];return n}var Bp=Gl("animationend"),$p=Gl("animationiteration"),qp=Gl("animationstart"),Hp=Gl("transitionend"),Wp=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(n,i){Wp.set(n,i),l(i,[n])}for(var ah=0;ah<Kp.length;ah++){var lh=Kp[ah],jE=lh.toLowerCase(),zE=lh[0].toUpperCase()+lh.slice(1);ei(jE,"on"+zE)}ei(Bp,"onAnimationEnd"),ei($p,"onAnimationIteration"),ei(qp,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(Hp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Gp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Sl(c,i,void 0,n),n.currentTarget=null}function Qp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],C=I.instance,F=I.currentTarget;if(I=I.listener,C!==m&&d.isPropagationStopped())break e;Gp(d,I,F),m=C}else for(v=0;v<c.length;v++){if(I=c[v],C=I.instance,F=I.currentTarget,I=I.listener,C!==m&&d.isPropagationStopped())break e;Gp(d,I,F),m=C}}}if(Cn)throw n=aa,Cn=!1,aa=null,n}function Ke(n,i){var a=i[gh];a===void 0&&(a=i[gh]=new Set);var c=n+"__bubble";a.has(c)||(Yp(i,n,2,!1),a.add(c))}function uh(n,i,a){var c=0;i&&(c|=4),Yp(a,n,c,i)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Sa(n){if(!n[Ql]){n[Ql]=!0,s.forEach(function(a){a!=="selectionchange"&&(BE.has(a)||uh(a,!1,n),uh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ql]||(i[Ql]=!0,uh("selectionchange",!1,i))}}function Yp(n,i,a,c){switch(pa(i)){case 1:var d=Ye;break;case 4:d=Zc;break;default:d=fa}a=d.bind(null,i,a,n),d=void 0,!Vs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function ch(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;I!==null;){if(v=Qi(I),v===null)return;if(C=v.tag,C===5||C===6){c=m=v;continue e}I=I.parentNode}}c=c.return}oa(function(){var F=m,G=Ns(a),Y=[];e:{var W=Wp.get(n);if(W!==void 0){var te=qs,oe=n;switch(n){case"keypress":if($s(a)===0)break e;case"keydown":case"keyup":te=p;break;case"focusin":oe="focus",te=Gs;break;case"focusout":oe="blur",te=Gs;break;case"beforeblur":case"afterblur":te=Gs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Ul;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=j;break;case Bp:case $p:case qp:te=Tr;break;case Hp:te=Ue;break;case"scroll":te=eh;break;case"wheel":te=De;break;case"copy":case"cut":case"paste":te=Bl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var ae=(i&4)!==0,st=!ae&&n==="scroll",L=ae?W!==null?W+"Capture":null:W;ae=[];for(var N=F,M;N!==null;){M=N;var X=M.stateNode;if(M.tag===5&&X!==null&&(M=X,L!==null&&(X=it(N,L),X!=null&&ae.push(Aa(N,X,M)))),st)break;N=N.return}0<ae.length&&(W=new te(W,oe,null,a,G),Y.push({event:W,listeners:ae}))}}if((i&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",W&&a!==Li&&(oe=a.relatedTarget||a.fromElement)&&(Qi(oe)||oe[Ir]))break e;if((te||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,te?(oe=a.relatedTarget||a.toElement,te=F,oe=oe?Qi(oe):null,oe!==null&&(st=Pn(oe),oe!==st||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(te=null,oe=F),te!==oe)){if(ae=Ws,X="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ae=E,X="onPointerLeave",L="onPointerEnter",N="pointer"),st=te==null?W:no(te),M=oe==null?W:no(oe),W=new ae(X,N+"leave",te,a,G),W.target=st,W.relatedTarget=M,X=null,Qi(G)===F&&(ae=new ae(L,N+"enter",oe,a,G),ae.target=M,ae.relatedTarget=st,X=ae),st=X,te&&oe)t:{for(ae=te,L=oe,N=0,M=ae;M;M=eo(M))N++;for(M=0,X=L;X;X=eo(X))M++;for(;0<N-M;)ae=eo(ae),N--;for(;0<M-N;)L=eo(L),M--;for(;N--;){if(ae===L||L!==null&&ae===L.alternate)break t;ae=eo(ae),L=eo(L)}ae=null}else ae=null;te!==null&&Xp(Y,W,te,ae,!1),oe!==null&&st!==null&&Xp(Y,st,oe,ae,!0)}}e:{if(W=F?no(F):window,te=W.nodeName&&W.nodeName.toLowerCase(),te==="select"||te==="input"&&W.type==="file")var le=OE;else if(Np(W))if(Op)le=LE;else{le=xE;var pe=VE}else(te=W.nodeName)&&te.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(le=bE);if(le&&(le=le(n,F))){Dp(Y,le,a,G);break e}pe&&pe(n,W,F),n==="focusout"&&(pe=W._wrapperState)&&pe.controlled&&W.type==="number"&&Rs(W,"number",W.value)}switch(pe=F?no(F):window,n){case"focusin":(Np(pe)||pe.contentEditable==="true")&&(Js=pe,ih=F,Ta=null);break;case"focusout":Ta=ih=Js=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,jp(Y,a,G);break;case"selectionchange":if(UE)break;case"keydown":case"keyup":jp(Y,a,G)}var me;if(lt)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Xs?Cp(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Gi&&a.locale!=="ko"&&(Xs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Xs&&(me=ma()):(an=G,Bs="value"in an?an.value:an.textContent,Xs=!0)),pe=Yl(F,_e),0<pe.length&&(_e=new _a(_e,n,null,a,G),Y.push({event:_e,listeners:pe}),me?_e.data=me:(me=Pp(a),me!==null&&(_e.data=me)))),(me=ln?CE(n,a):PE(n,a))&&(F=Yl(F,"onBeforeInput"),0<F.length&&(G=new _a("onBeforeInput","beforeinput",null,a,G),Y.push({event:G,listeners:F}),G.data=me))}Qp(Y,i)})}function Aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Yl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=it(n,a),m!=null&&c.unshift(Aa(n,m,d)),m=it(n,i),m!=null&&c.push(Aa(n,m,d))),n=n.return}return c}function eo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xp(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var I=a,C=I.alternate,F=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&F!==null&&(I=F,d?(C=it(a,m),C!=null&&v.unshift(Aa(a,C,I))):d||(C=it(a,m),C!=null&&v.push(Aa(a,C,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var $E=/\r\n?/g,qE=/\u0000|\uFFFD/g;function Jp(n){return(typeof n=="string"?n:""+n).replace($E,`
`).replace(qE,"")}function Xl(n,i,a){if(i=Jp(i),Jp(n)!==i&&a)throw Error(t(425))}function Jl(){}var hh=null,dh=null;function fh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,HE=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,WE=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(n){return Zp.resolve(null).then(n).catch(KE)}:ph;function KE(n){setTimeout(function(){throw n})}function mh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),xn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);xn(i)}function ti(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function em(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var to=Math.random().toString(36).slice(2),er="__reactFiber$"+to,ka="__reactProps$"+to,Ir="__reactContainer$"+to,gh="__reactEvents$"+to,GE="__reactListeners$"+to,QE="__reactHandles$"+to;function Qi(n){var i=n[er];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ir]||a[er]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=em(n);n!==null;){if(a=n[er])return a;n=em(n)}return i}n=a,a=n.parentNode}return null}function Ra(n){return n=n[er]||n[Ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function no(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Zl(n){return n[ka]||null}var yh=[],ro=-1;function ni(n){return{current:n}}function Ge(n){0>ro||(n.current=yh[ro],yh[ro]=null,ro--)}function We(n,i){ro++,yh[ro]=n.current,n.current=i}var ri={},xt=ni(ri),Yt=ni(!1),Yi=ri;function io(n,i){var a=n.type.contextTypes;if(!a)return ri;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(n){return n=n.childContextTypes,n!=null}function eu(){Ge(Yt),Ge(xt)}function tm(n,i,a){if(xt.current!==ri)throw Error(t(168));We(xt,i),We(Yt,a)}function nm(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Le(n)||"Unknown",d));return re({},a,c)}function tu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ri,Yi=xt.current,We(xt,n),We(Yt,Yt.current),!0}function rm(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=nm(n,i,Yi),c.__reactInternalMemoizedMergedChildContext=n,Ge(Yt),Ge(xt),We(xt,n)):Ge(Yt),We(Yt,a)}var Sr=null,nu=!1,_h=!1;function im(n){Sr===null?Sr=[n]:Sr.push(n)}function YE(n){nu=!0,im(n)}function ii(){if(!_h&&Sr!==null){_h=!0;var n=0,i=Pe;try{var a=Sr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Sr=null,nu=!1}catch(d){throw Sr!==null&&(Sr=Sr.slice(n+1)),Ms(zi,ii),d}finally{Pe=i,_h=!1}}return null}var so=[],oo=0,ru=null,iu=0,yn=[],_n=0,Xi=null,Ar=1,kr="";function Ji(n,i){so[oo++]=iu,so[oo++]=ru,ru=n,iu=i}function sm(n,i,a){yn[_n++]=Ar,yn[_n++]=kr,yn[_n++]=Xi,Xi=n;var c=Ar;n=kr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var m=32-$t(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Ar=1<<32-$t(i)+d|a<<d|c,kr=m+n}else Ar=1<<m|a<<d|c,kr=n}function vh(n){n.return!==null&&(Ji(n,1),sm(n,1,0))}function wh(n){for(;n===ru;)ru=so[--oo],so[oo]=null,iu=so[--oo],so[oo]=null;for(;n===Xi;)Xi=yn[--_n],yn[_n]=null,kr=yn[--_n],yn[_n]=null,Ar=yn[--_n],yn[_n]=null}var un=null,cn=null,Xe=!1,Mn=null;function om(n,i){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function am(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,un=n,cn=ti(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,un=n,cn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Xi!==null?{id:Ar,overflow:kr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,un=n,cn=null,!0):!1;default:return!1}}function Eh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Th(n){if(Xe){var i=cn;if(i){var a=i;if(!am(n,i)){if(Eh(n))throw Error(t(418));i=ti(a.nextSibling);var c=un;i&&am(n,i)?om(c,a):(n.flags=n.flags&-4097|2,Xe=!1,un=n)}}else{if(Eh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,un=n}}}function lm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;un=n}function su(n){if(n!==un)return!1;if(!Xe)return lm(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!fh(n.type,n.memoizedProps)),i&&(i=cn)){if(Eh(n))throw um(),Error(t(418));for(;i;)om(n,i),i=ti(i.nextSibling)}if(lm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){cn=ti(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}cn=null}}else cn=un?ti(n.stateNode.nextSibling):null;return!0}function um(){for(var n=cn;n;)n=ti(n.nextSibling)}function ao(){cn=un=null,Xe=!1}function Ih(n){Mn===null?Mn=[n]:Mn.push(n)}var XE=ve.ReactCurrentBatchConfig;function Ca(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var I=d.refs;v===null?delete I[m]:I[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ou(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function cm(n){var i=n._init;return i(n._payload)}function hm(n){function i(L,N){if(n){var M=L.deletions;M===null?(L.deletions=[N],L.flags|=16):M.push(N)}}function a(L,N){if(!n)return null;for(;N!==null;)i(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=di(L,N),L.index=0,L.sibling=null,L}function m(L,N,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<N?(L.flags|=2,N):M):(L.flags|=2,N)):(L.flags|=1048576,N)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,N,M,X){return N===null||N.tag!==6?(N=pd(M,L.mode,X),N.return=L,N):(N=d(N,M),N.return=L,N)}function C(L,N,M,X){var le=M.type;return le===D?G(L,N,M.props.children,X,M.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Vt&&cm(le)===N.type)?(X=d(N,M.props),X.ref=Ca(L,N,M),X.return=L,X):(X=Nu(M.type,M.key,M.props,null,L.mode,X),X.ref=Ca(L,N,M),X.return=L,X)}function F(L,N,M,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==M.containerInfo||N.stateNode.implementation!==M.implementation?(N=md(M,L.mode,X),N.return=L,N):(N=d(N,M.children||[]),N.return=L,N)}function G(L,N,M,X,le){return N===null||N.tag!==7?(N=os(M,L.mode,X,le),N.return=L,N):(N=d(N,M),N.return=L,N)}function Y(L,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return N=pd(""+N,L.mode,M),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case be:return M=Nu(N.type,N.key,N.props,null,L.mode,M),M.ref=Ca(L,null,N),M.return=L,M;case Te:return N=md(N,L.mode,M),N.return=L,N;case Vt:var X=N._init;return Y(L,X(N._payload),M)}if(pr(N)||de(N))return N=os(N,L.mode,M,null),N.return=L,N;ou(L,N)}return null}function W(L,N,M,X){var le=N!==null?N.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return le!==null?null:I(L,N,""+M,X);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case be:return M.key===le?C(L,N,M,X):null;case Te:return M.key===le?F(L,N,M,X):null;case Vt:return le=M._init,W(L,N,le(M._payload),X)}if(pr(M)||de(M))return le!==null?null:G(L,N,M,X,null);ou(L,M)}return null}function te(L,N,M,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(M)||null,I(N,L,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case be:return L=L.get(X.key===null?M:X.key)||null,C(N,L,X,le);case Te:return L=L.get(X.key===null?M:X.key)||null,F(N,L,X,le);case Vt:var pe=X._init;return te(L,N,M,pe(X._payload),le)}if(pr(X)||de(X))return L=L.get(M)||null,G(N,L,X,le,null);ou(N,X)}return null}function oe(L,N,M,X){for(var le=null,pe=null,me=N,_e=N=0,It=null;me!==null&&_e<M.length;_e++){me.index>_e?(It=me,me=null):It=me.sibling;var xe=W(L,me,M[_e],X);if(xe===null){me===null&&(me=It);break}n&&me&&xe.alternate===null&&i(L,me),N=m(xe,N,_e),pe===null?le=xe:pe.sibling=xe,pe=xe,me=It}if(_e===M.length)return a(L,me),Xe&&Ji(L,_e),le;if(me===null){for(;_e<M.length;_e++)me=Y(L,M[_e],X),me!==null&&(N=m(me,N,_e),pe===null?le=me:pe.sibling=me,pe=me);return Xe&&Ji(L,_e),le}for(me=c(L,me);_e<M.length;_e++)It=te(me,L,_e,M[_e],X),It!==null&&(n&&It.alternate!==null&&me.delete(It.key===null?_e:It.key),N=m(It,N,_e),pe===null?le=It:pe.sibling=It,pe=It);return n&&me.forEach(function(fi){return i(L,fi)}),Xe&&Ji(L,_e),le}function ae(L,N,M,X){var le=de(M);if(typeof le!="function")throw Error(t(150));if(M=le.call(M),M==null)throw Error(t(151));for(var pe=le=null,me=N,_e=N=0,It=null,xe=M.next();me!==null&&!xe.done;_e++,xe=M.next()){me.index>_e?(It=me,me=null):It=me.sibling;var fi=W(L,me,xe.value,X);if(fi===null){me===null&&(me=It);break}n&&me&&fi.alternate===null&&i(L,me),N=m(fi,N,_e),pe===null?le=fi:pe.sibling=fi,pe=fi,me=It}if(xe.done)return a(L,me),Xe&&Ji(L,_e),le;if(me===null){for(;!xe.done;_e++,xe=M.next())xe=Y(L,xe.value,X),xe!==null&&(N=m(xe,N,_e),pe===null?le=xe:pe.sibling=xe,pe=xe);return Xe&&Ji(L,_e),le}for(me=c(L,me);!xe.done;_e++,xe=M.next())xe=te(me,L,_e,xe.value,X),xe!==null&&(n&&xe.alternate!==null&&me.delete(xe.key===null?_e:xe.key),N=m(xe,N,_e),pe===null?le=xe:pe.sibling=xe,pe=xe);return n&&me.forEach(function(N0){return i(L,N0)}),Xe&&Ji(L,_e),le}function st(L,N,M,X){if(typeof M=="object"&&M!==null&&M.type===D&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case be:e:{for(var le=M.key,pe=N;pe!==null;){if(pe.key===le){if(le=M.type,le===D){if(pe.tag===7){a(L,pe.sibling),N=d(pe,M.props.children),N.return=L,L=N;break e}}else if(pe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Vt&&cm(le)===pe.type){a(L,pe.sibling),N=d(pe,M.props),N.ref=Ca(L,pe,M),N.return=L,L=N;break e}a(L,pe);break}else i(L,pe);pe=pe.sibling}M.type===D?(N=os(M.props.children,L.mode,X,M.key),N.return=L,L=N):(X=Nu(M.type,M.key,M.props,null,L.mode,X),X.ref=Ca(L,N,M),X.return=L,L=X)}return v(L);case Te:e:{for(pe=M.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===M.containerInfo&&N.stateNode.implementation===M.implementation){a(L,N.sibling),N=d(N,M.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else i(L,N);N=N.sibling}N=md(M,L.mode,X),N.return=L,L=N}return v(L);case Vt:return pe=M._init,st(L,N,pe(M._payload),X)}if(pr(M))return oe(L,N,M,X);if(de(M))return ae(L,N,M,X);ou(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,M),N.return=L,L=N):(a(L,N),N=pd(M,L.mode,X),N.return=L,L=N),v(L)):a(L,N)}return st}var lo=hm(!0),dm=hm(!1),au=ni(null),lu=null,uo=null,Sh=null;function Ah(){Sh=uo=lu=null}function kh(n){var i=au.current;Ge(au),n._currentValue=i}function Rh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function co(n,i){lu=n,Sh=uo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Jt=!0),n.firstContext=null)}function vn(n){var i=n._currentValue;if(Sh!==n)if(n={context:n,memoizedValue:i,next:null},uo===null){if(lu===null)throw Error(t(308));uo=n,lu.dependencies={lanes:0,firstContext:n}}else uo=uo.next=n;return i}var Zi=null;function Ch(n){Zi===null?Zi=[n]:Zi.push(n)}function fm(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Ch(i)):(a.next=d.next,d.next=a),i.interleaved=a,Rr(n,c)}function Rr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var si=!1;function Ph(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Cr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function oi(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Rr(n,a)}return d=c.interleaved,d===null?(i.next=i,Ch(c)):(i.next=d.next,d.next=i),c.interleaved=i,Rr(n,a)}function uu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qr(n,a)}}function mm(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function cu(n,i,a,c){var d=n.updateQueue;si=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,F=C.next;C.next=null,v===null?m=F:v.next=F,v=C;var G=n.alternate;G!==null&&(G=G.updateQueue,I=G.lastBaseUpdate,I!==v&&(I===null?G.firstBaseUpdate=F:I.next=F,G.lastBaseUpdate=C))}if(m!==null){var Y=d.baseState;v=0,G=F=C=null,I=m;do{var W=I.lane,te=I.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:te,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var oe=n,ae=I;switch(W=i,te=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Y=oe.call(te,Y,W);break e}Y=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,W=typeof oe=="function"?oe.call(te,Y,W):oe,W==null)break e;Y=re({},Y,W);break e;case 2:si=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[I]:W.push(I))}else te={eventTime:te,lane:W,tag:I.tag,payload:I.payload,callback:I.callback,next:null},G===null?(F=G=te,C=Y):G=G.next=te,v|=W;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;W=I,I=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(C=Y),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=G,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ns|=v,n.lanes=v,n.memoizedState=Y}}function gm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Pa={},tr=ni(Pa),Na=ni(Pa),Da=ni(Pa);function es(n){if(n===Pa)throw Error(t(174));return n}function Nh(n,i){switch(We(Da,i),We(Na,n),We(tr,Pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pt(i,n)}Ge(tr),We(tr,i)}function ho(){Ge(tr),Ge(Na),Ge(Da)}function ym(n){es(Da.current);var i=es(tr.current),a=pt(i,n.type);i!==a&&(We(Na,n),We(tr,a))}function Dh(n){Na.current===n&&(Ge(tr),Ge(Na))}var Je=ni(0);function hu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Oh=[];function Vh(){for(var n=0;n<Oh.length;n++)Oh[n]._workInProgressVersionPrimary=null;Oh.length=0}var du=ve.ReactCurrentDispatcher,xh=ve.ReactCurrentBatchConfig,ts=0,Ze=null,gt=null,Et=null,fu=!1,Oa=!1,Va=0,JE=0;function bt(){throw Error(t(321))}function bh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ln(n[a],i[a]))return!1;return!0}function Lh(n,i,a,c,d,m){if(ts=m,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,du.current=n===null||n.memoizedState===null?n0:r0,n=a(c,d),Oa){m=0;do{if(Oa=!1,Va=0,25<=m)throw Error(t(301));m+=1,Et=gt=null,i.updateQueue=null,du.current=i0,n=a(c,d)}while(Oa)}if(du.current=gu,i=gt!==null&&gt.next!==null,ts=0,Et=gt=Ze=null,fu=!1,i)throw Error(t(300));return n}function Mh(){var n=Va!==0;return Va=0,n}function nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=n:Et=Et.next=n,Et}function wn(){if(gt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var i=Et===null?Ze.memoizedState:Et.next;if(i!==null)Et=i,gt=n;else{if(n===null)throw Error(t(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Et===null?Ze.memoizedState=Et=n:Et=Et.next=n}return Et}function xa(n,i){return typeof i=="function"?i(n):i}function Fh(n){var i=wn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=v=null,C=null,F=m;do{var G=F.lane;if((ts&G)===G)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Y={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(I=C=Y,v=c):C=C.next=Y,Ze.lanes|=G,ns|=G}F=F.next}while(F!==null&&F!==m);C===null?v=c:C.next=I,Ln(c,i.memoizedState)||(Jt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ze.lanes|=m,ns|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Uh(n){var i=wn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Ln(m,i.memoizedState)||(Jt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function _m(){}function vm(n,i){var a=Ze,c=wn(),d=i(),m=!Ln(c.memoizedState,d);if(m&&(c.memoizedState=d,Jt=!0),c=c.queue,jh(Tm.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ba(9,Em.bind(null,a,c,d,i),void 0,null),Tt===null)throw Error(t(349));(ts&30)!==0||wm(a,i,d)}return d}function wm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Em(n,i,a,c){i.value=a,i.getSnapshot=c,Im(i)&&Sm(n)}function Tm(n,i,a){return a(function(){Im(i)&&Sm(n)})}function Im(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ln(n,a)}catch{return!0}}function Sm(n){var i=Rr(n,1);i!==null&&zn(i,n,1,-1)}function Am(n){var i=nr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:n},i.queue=n,n=n.dispatch=t0.bind(null,Ze,n),[i.memoizedState,n]}function ba(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function km(){return wn().memoizedState}function pu(n,i,a,c){var d=nr();Ze.flags|=n,d.memoizedState=ba(1|i,a,void 0,c===void 0?null:c)}function mu(n,i,a,c){var d=wn();c=c===void 0?null:c;var m=void 0;if(gt!==null){var v=gt.memoizedState;if(m=v.destroy,c!==null&&bh(c,v.deps)){d.memoizedState=ba(i,a,m,c);return}}Ze.flags|=n,d.memoizedState=ba(1|i,a,m,c)}function Rm(n,i){return pu(8390656,8,n,i)}function jh(n,i){return mu(2048,8,n,i)}function Cm(n,i){return mu(4,2,n,i)}function Pm(n,i){return mu(4,4,n,i)}function Nm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Dm(n,i,a){return a=a!=null?a.concat([n]):null,mu(4,4,Nm.bind(null,i,n),a)}function zh(){}function Om(n,i){var a=wn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&bh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Vm(n,i){var a=wn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&bh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function xm(n,i,a){return(ts&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a):(Ln(a,i)||(a=qi(),Ze.lanes|=a,ns|=a,n.baseState=!0),i)}function ZE(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=xh.transition;xh.transition={};try{n(!1),i()}finally{Pe=a,xh.transition=c}}function bm(){return wn().memoizedState}function e0(n,i,a){var c=ci(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Lm(n))Mm(i,a);else if(a=fm(n,i,a,c),a!==null){var d=Wt();zn(a,n,c,d),Fm(a,i,c)}}function t0(n,i,a){var c=ci(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lm(n))Mm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,I=m(v,a);if(d.hasEagerState=!0,d.eagerState=I,Ln(I,v)){var C=i.interleaved;C===null?(d.next=d,Ch(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=fm(n,i,d,c),a!==null&&(d=Wt(),zn(a,n,c,d),Fm(a,i,c))}}function Lm(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function Mm(n,i){Oa=fu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Fm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qr(n,a)}}var gu={readContext:vn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},n0={readContext:vn,useCallback:function(n,i){return nr().memoizedState=[n,i===void 0?null:i],n},useContext:vn,useEffect:Rm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,pu(4194308,4,Nm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return pu(4194308,4,n,i)},useInsertionEffect:function(n,i){return pu(4,2,n,i)},useMemo:function(n,i){var a=nr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=nr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=e0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=nr();return n={current:n},i.memoizedState=n},useState:Am,useDebugValue:zh,useDeferredValue:function(n){return nr().memoizedState=n},useTransition:function(){var n=Am(!1),i=n[0];return n=ZE.bind(null,n[1]),nr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=nr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tt===null)throw Error(t(349));(ts&30)!==0||wm(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Rm(Tm.bind(null,c,m,n),[n]),c.flags|=2048,ba(9,Em.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=nr(),i=Tt.identifierPrefix;if(Xe){var a=kr,c=Ar;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=JE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},r0={readContext:vn,useCallback:Om,useContext:vn,useEffect:jh,useImperativeHandle:Dm,useInsertionEffect:Cm,useLayoutEffect:Pm,useMemo:Vm,useReducer:Fh,useRef:km,useState:function(){return Fh(xa)},useDebugValue:zh,useDeferredValue:function(n){var i=wn();return xm(i,gt.memoizedState,n)},useTransition:function(){var n=Fh(xa)[0],i=wn().memoizedState;return[n,i]},useMutableSource:_m,useSyncExternalStore:vm,useId:bm,unstable_isNewReconciler:!1},i0={readContext:vn,useCallback:Om,useContext:vn,useEffect:jh,useImperativeHandle:Dm,useInsertionEffect:Cm,useLayoutEffect:Pm,useMemo:Vm,useReducer:Uh,useRef:km,useState:function(){return Uh(xa)},useDebugValue:zh,useDeferredValue:function(n){var i=wn();return gt===null?i.memoizedState=n:xm(i,gt.memoizedState,n)},useTransition:function(){var n=Uh(xa)[0],i=wn().memoizedState;return[n,i]},useMutableSource:_m,useSyncExternalStore:vm,useId:bm,unstable_isNewReconciler:!1};function Fn(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Bh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var yu={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=ci(n),m=Cr(c,d);m.payload=i,a!=null&&(m.callback=a),i=oi(n,m,d),i!==null&&(zn(i,n,d,c),uu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=ci(n),m=Cr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=oi(n,m,d),i!==null&&(zn(i,n,d,c),uu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wt(),c=ci(n),d=Cr(a,c);d.tag=2,i!=null&&(d.callback=i),i=oi(n,d,c),i!==null&&(zn(i,n,c,a),uu(i,n,c))}};function Um(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!Ea(a,c)||!Ea(d,m):!0}function jm(n,i,a){var c=!1,d=ri,m=i.contextType;return typeof m=="object"&&m!==null?m=vn(m):(d=Xt(i)?Yi:xt.current,c=i.contextTypes,m=(c=c!=null)?io(n,d):ri),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=yu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function zm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&yu.enqueueReplaceState(i,i.state,null)}function $h(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Ph(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=vn(m):(m=Xt(i)?Yi:xt.current,d.context=io(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Bh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&yu.enqueueReplaceState(d,d.state,null),cu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function fo(n,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function qh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Hh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var s0=typeof WeakMap=="function"?WeakMap:Map;function Bm(n,i,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Su||(Su=!0,od=c),Hh(n,i)},a}function $m(n,i,a){a=Cr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Hh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Hh(n,i),typeof c!="function"&&(li===null?li=new Set([this]):li.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function qm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new s0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=v0.bind(null,n,i,a),i.then(n,n))}function Hm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Wm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Cr(-1,1),i.tag=2,oi(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var o0=ve.ReactCurrentOwner,Jt=!1;function Ht(n,i,a,c){i.child=n===null?dm(i,null,a,c):lo(i,n.child,a,c)}function Km(n,i,a,c,d){a=a.render;var m=i.ref;return co(i,d),c=Lh(n,i,a,c,m,d),a=Mh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Xe&&a&&vh(i),i.flags|=1,Ht(n,i,c,d),i.child)}function Gm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!fd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Qm(n,i,m,c,d)):(n=Nu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(v,c)&&n.ref===i.ref)return Pr(n,i,d)}return i.flags|=1,n=di(m,c),n.ref=i.ref,n.return=i,i.child=n}function Qm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Ea(m,c)&&n.ref===i.ref)if(Jt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jt=!0);else return i.lanes=n.lanes,Pr(n,i,d)}return Wh(n,i,a,c,d)}function Ym(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(mo,hn),hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,We(mo,hn),hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,We(mo,hn),hn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,We(mo,hn),hn|=c;return Ht(n,i,d,a),i.child}function Xm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Wh(n,i,a,c,d){var m=Xt(a)?Yi:xt.current;return m=io(i,m),co(i,d),a=Lh(n,i,a,c,m,d),c=Mh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Xe&&c&&vh(i),i.flags|=1,Ht(n,i,a,d),i.child)}function Jm(n,i,a,c,d){if(Xt(a)){var m=!0;tu(i)}else m=!1;if(co(i,d),i.stateNode===null)vu(n,i),jm(i,a,c),$h(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=vn(F):(F=Xt(a)?Yi:xt.current,F=io(i,F));var G=a.getDerivedStateFromProps,Y=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||C!==F)&&zm(i,v,c,F),si=!1;var W=i.memoizedState;v.state=W,cu(i,c,v,d),C=i.memoizedState,I!==c||W!==C||Yt.current||si?(typeof G=="function"&&(Bh(i,a,G,c),C=i.memoizedState),(I=si||Um(i,a,I,c,W,C,F))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,pm(n,i),I=i.memoizedProps,F=i.type===i.elementType?I:Fn(i.type,I),v.props=F,Y=i.pendingProps,W=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=vn(C):(C=Xt(a)?Yi:xt.current,C=io(i,C));var te=a.getDerivedStateFromProps;(G=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Y||W!==C)&&zm(i,v,c,C),si=!1,W=i.memoizedState,v.state=W,cu(i,c,v,d);var oe=i.memoizedState;I!==Y||W!==oe||Yt.current||si?(typeof te=="function"&&(Bh(i,a,te,c),oe=i.memoizedState),(F=si||Um(i,a,F,c,W,oe,C)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),v.props=c,v.state=oe,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),c=!1)}return Kh(n,i,a,c,m,d)}function Kh(n,i,a,c,d,m){Xm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&rm(i,a,!1),Pr(n,i,m);c=i.stateNode,o0.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=lo(i,n.child,null,m),i.child=lo(i,null,I,m)):Ht(n,i,I,m),i.memoizedState=c.state,d&&rm(i,a,!0),i.child}function Zm(n){var i=n.stateNode;i.pendingContext?tm(n,i.pendingContext,i.pendingContext!==i.context):i.context&&tm(n,i.context,!1),Nh(n,i.containerInfo)}function eg(n,i,a,c,d){return ao(),Ih(d),i.flags|=256,Ht(n,i,a,c),i.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Qh(n){return{baseLanes:n,cachePool:null,transitions:null}}function tg(n,i,a){var c=i.pendingProps,d=Je.current,m=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Je,d&1),n===null)return Th(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Du(v,c,0,null),n=os(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Qh(a),i.memoizedState=Gh,n):Yh(i,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return a0(n,i,v,c,I,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,I=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=di(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=di(I,m):(m=os(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?Qh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Gh,c}return m=n.child,n=m.sibling,c=di(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Yh(n,i){return i=Du({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function _u(n,i,a,c){return c!==null&&Ih(c),lo(i,n.child,null,a),n=Yh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function a0(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=qh(Error(t(422))),_u(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Du({mode:"visible",children:c.children},d,0,null),m=os(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&lo(i,n.child,null,v),i.child.memoizedState=Qh(v),i.memoizedState=Gh,m);if((i.mode&1)===0)return _u(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=qh(m,c,void 0),_u(n,i,v,c)}if(I=(v&n.childLanes)!==0,Jt||I){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Rr(n,d),zn(c,n,d,-1))}return dd(),c=qh(Error(t(421))),_u(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=w0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,cn=ti(d.nextSibling),un=i,Xe=!0,Mn=null,n!==null&&(yn[_n++]=Ar,yn[_n++]=kr,yn[_n++]=Xi,Ar=n.id,kr=n.overflow,Xi=i),i=Yh(i,c.children),i.flags|=4096,i)}function ng(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Rh(n.return,i,a)}function Xh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function rg(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Ht(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ng(n,a,i);else if(n.tag===19)ng(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&hu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Xh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&hu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Xh(i,!0,a,null,m);break;case"together":Xh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function vu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ns|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=di(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=di(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function l0(n,i,a){switch(i.tag){case 3:Zm(i),ao();break;case 5:ym(i);break;case 1:Xt(i.type)&&tu(i);break;case 4:Nh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;We(au,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?tg(n,i,a):(We(Je,Je.current&1),n=Pr(n,i,a),n!==null?n.sibling:null);We(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return rg(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,Ym(n,i,a)}return Pr(n,i,a)}var ig,Jh,sg,og;ig=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Jh=function(){},sg=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,es(tr.current);var m=null;switch(a){case"input":d=Vi(n,d),c=Vi(n,c),m=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":d=Yo(n,d),c=Yo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Jl)}na(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in c){var C=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==I&&(C!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&I[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(m||(m=[]),m.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(m=m||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&Ke("scroll",n),m||I===C||(m=[])):(m=m||[]).push(F,C))}a&&(m=m||[]).push("style",a);var F=m;(i.updateQueue=F)&&(i.flags|=4)}},og=function(n,i,a,c){a!==c&&(i.flags|=4)};function La(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function u0(n,i,a){var c=i.pendingProps;switch(wh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Xt(i.type)&&eu(),Lt(i),null;case 3:return c=i.stateNode,ho(),Ge(Yt),Ge(xt),Vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(su(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mn!==null&&(ud(Mn),Mn=null))),Jh(n,i),Lt(i),null;case 5:Dh(i);var d=es(Da.current);if(a=i.type,n!==null&&i.stateNode!=null)sg(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=es(tr.current),su(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[er]=i,c[ka]=m,n=(i.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)Ke(Ia[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":ks(c,m),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ke("invalid",c);break;case"textarea":Cs(c,m),Ke("invalid",c)}na(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var I=m[v];v==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Xl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Xl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":fr(c),Il(c,m,!0);break;case"textarea":fr(c),Xo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Jl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ft(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[er]=i,n[ka]=c,ig(n,i,!1,!1),i.stateNode=n;e:{switch(v=ra(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)Ke(Ia[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":ks(n,c),d=Vi(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Cs(n,c),d=Yo(n,c),Ke("invalid",n);break;default:d=c}na(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var C=I[m];m==="style"?ea(n,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Jo(n,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&qr(n,C):typeof C=="number"&&qr(n,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&Ke("scroll",n):C!=null&&fe(n,m,C,v))}switch(a){case"input":fr(n),Il(n,c,!1);break;case"textarea":fr(n),Xo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?mr(n,!!c.multiple,m,!1):c.defaultValue!=null&&mr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)og(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=es(Da.current),es(tr.current),su(i)){if(c=i.stateNode,a=i.memoizedProps,c[er]=i,(m=c.nodeValue!==a)&&(n=un,n!==null))switch(n.tag){case 3:Xl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=i,i.stateNode=c}return Lt(i),null;case 13:if(Ge(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&cn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)um(),ao(),i.flags|=98560,m=!1;else if(m=su(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[er]=i}else ao(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),m=!1}else Mn!==null&&(ud(Mn),Mn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?yt===0&&(yt=3):dd())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return ho(),Jh(n,i),n===null&&Sa(i.stateNode.containerInfo),Lt(i),null;case 10:return kh(i.type._context),Lt(i),null;case 17:return Xt(i.type)&&eu(),Lt(i),null;case 19:if(Ge(Je),m=i.memoizedState,m===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)La(m,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=hu(n),v!==null){for(i.flags|=128,La(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Je,Je.current&1|2),i.child}n=n.sibling}m.tail!==null&&He()>go&&(i.flags|=128,c=!0,La(m,!1),i.lanes=4194304)}else{if(!c)if(n=hu(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),La(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Xe)return Lt(i),null}else 2*He()-m.renderingStartTime>go&&a!==1073741824&&(i.flags|=128,c=!0,La(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=He(),i.sibling=null,a=Je.current,We(Je,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return hd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(hn&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function c0(n,i){switch(wh(i),i.tag){case 1:return Xt(i.type)&&eu(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ho(),Ge(Yt),Ge(xt),Vh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Dh(i),null;case 13:if(Ge(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ao()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ge(Je),null;case 4:return ho(),null;case 10:return kh(i.type._context),null;case 22:case 23:return hd(),null;case 24:return null;default:return null}}var wu=!1,Mt=!1,h0=typeof WeakSet=="function"?WeakSet:Set,se=null;function po(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,i,c)}else a.current=null}function Zh(n,i,a){try{a()}catch(c){nt(n,i,c)}}var ag=!1;function d0(n,i){if(hh=Jr,n=Up(),rh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,I=-1,C=-1,F=0,G=0,Y=n,W=null;t:for(;;){for(var te;Y!==a||d!==0&&Y.nodeType!==3||(I=v+d),Y!==m||c!==0&&Y.nodeType!==3||(C=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(te=Y.firstChild)!==null;)W=Y,Y=te;for(;;){if(Y===n)break t;if(W===a&&++F===d&&(I=v),W===m&&++G===c&&(C=v),(te=Y.nextSibling)!==null)break;Y=W,W=Y.parentNode}Y=te}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(dh={focusedElem:n,selectionRange:a},Jr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,st=oe.memoizedState,L=i.stateNode,N=L.getSnapshotBeforeUpdate(i.elementType===i.type?ae:Fn(i.type,ae),st);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var M=i.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){nt(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return oe=ag,ag=!1,oe}function Ma(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Zh(i,a,m)}d=d.next}while(d!==c)}}function Eu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function ed(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function lg(n){var i=n.alternate;i!==null&&(n.alternate=null,lg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[er],delete i[ka],delete i[gh],delete i[GE],delete i[QE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ug(n){return n.tag===5||n.tag===3||n.tag===4}function cg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ug(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function td(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Jl));else if(c!==4&&(n=n.child,n!==null))for(td(n,i,a),n=n.sibling;n!==null;)td(n,i,a),n=n.sibling}function nd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(nd(n,i,a),n=n.sibling;n!==null;)nd(n,i,a),n=n.sibling}var Rt=null,Un=!1;function ai(n,i,a){for(a=a.child;a!==null;)hg(n,i,a),a=a.sibling}function hg(n,i,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Bi,a)}catch{}switch(a.tag){case 5:Mt||po(a,i);case 6:var c=Rt,d=Un;Rt=null,ai(n,i,a),Rt=c,Un=d,Rt!==null&&(Un?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Un?(n=Rt,a=a.stateNode,n.nodeType===8?mh(n.parentNode,a):n.nodeType===1&&mh(n,a),xn(n)):mh(Rt,a.stateNode));break;case 4:c=Rt,d=Un,Rt=a.stateNode.containerInfo,Un=!0,ai(n,i,a),Rt=c,Un=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Zh(a,i,v),d=d.next}while(d!==c)}ai(n,i,a);break;case 1:if(!Mt&&(po(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){nt(a,i,I)}ai(n,i,a);break;case 21:ai(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ai(n,i,a),Mt=c):ai(n,i,a);break;default:ai(n,i,a)}}function dg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new h0),i.forEach(function(c){var d=E0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function jn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,Un=!1;break e;case 3:Rt=I.stateNode.containerInfo,Un=!0;break e;case 4:Rt=I.stateNode.containerInfo,Un=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));hg(m,v,d),Rt=null,Un=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){nt(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)fg(i,n),i=i.sibling}function fg(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(i,n),rr(n),c&4){try{Ma(3,n,n.return),Eu(3,n)}catch(ae){nt(n,n.return,ae)}try{Ma(5,n,n.return)}catch(ae){nt(n,n.return,ae)}}break;case 1:jn(i,n),rr(n),c&512&&a!==null&&po(a,a.return);break;case 5:if(jn(i,n),rr(n),c&512&&a!==null&&po(a,a.return),n.flags&32){var d=n.stateNode;try{qr(d,"")}catch(ae){nt(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,I=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Go(d,m),ra(I,v);var F=ra(I,m);for(v=0;v<C.length;v+=2){var G=C[v],Y=C[v+1];G==="style"?ea(d,Y):G==="dangerouslySetInnerHTML"?Jo(d,Y):G==="children"?qr(d,Y):fe(d,G,Y,F)}switch(I){case"input":Qo(d,m);break;case"textarea":Ps(d,m);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var te=m.value;te!=null?mr(d,!!m.multiple,te,!1):W!==!!m.multiple&&(m.defaultValue!=null?mr(d,!!m.multiple,m.defaultValue,!0):mr(d,!!m.multiple,m.multiple?[]:"",!1))}d[ka]=m}catch(ae){nt(n,n.return,ae)}}break;case 6:if(jn(i,n),rr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ae){nt(n,n.return,ae)}}break;case 3:if(jn(i,n),rr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(i.containerInfo)}catch(ae){nt(n,n.return,ae)}break;case 4:jn(i,n),rr(n);break;case 13:jn(i,n),rr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(sd=He())),c&4&&dg(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||G,jn(i,n),Mt=F):jn(i,n),rr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(se=n,G=n.child;G!==null;){for(Y=se=G;se!==null;){switch(W=se,te=W.child,W.tag){case 0:case 11:case 14:case 15:Ma(4,W,W.return);break;case 1:po(W,W.return);var oe=W.stateNode;if(typeof oe.componentWillUnmount=="function"){c=W,a=W.return;try{i=c,oe.props=i.memoizedProps,oe.state=i.memoizedState,oe.componentWillUnmount()}catch(ae){nt(c,a,ae)}}break;case 5:po(W,W.return);break;case 22:if(W.memoizedState!==null){gg(Y);continue}}te!==null?(te.return=W,se=te):gg(Y)}G=G.sibling}e:for(G=null,Y=n;;){if(Y.tag===5){if(G===null){G=Y;try{d=Y.stateNode,F?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Y.stateNode,C=Y.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=Zo("display",v))}catch(ae){nt(n,n.return,ae)}}}else if(Y.tag===6){if(G===null)try{Y.stateNode.nodeValue=F?"":Y.memoizedProps}catch(ae){nt(n,n.return,ae)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;G===Y&&(G=null),Y=Y.return}G===Y&&(G=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:jn(i,n),rr(n),c&4&&dg(n);break;case 21:break;default:jn(i,n),rr(n)}}function rr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(ug(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(qr(d,""),c.flags&=-33);var m=cg(n);nd(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=cg(n);td(n,I,v);break;default:throw Error(t(161))}}catch(C){nt(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function f0(n,i,a){se=n,pg(n)}function pg(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||wu;if(!v){var I=d.alternate,C=I!==null&&I.memoizedState!==null||Mt;I=wu;var F=Mt;if(wu=v,(Mt=C)&&!F)for(se=d;se!==null;)v=se,C=v.child,v.tag===22&&v.memoizedState!==null?yg(d):C!==null?(C.return=v,se=C):yg(d);for(;m!==null;)se=m,pg(m),m=m.sibling;se=d,wu=I,Mt=F}mg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,se=m):mg(n)}}function mg(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||Eu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Fn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&gm(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}gm(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Y=G.dehydrated;Y!==null&&xn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&ed(i)}catch(W){nt(i,i.return,W)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function gg(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function yg(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Eu(4,i)}catch(C){nt(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){nt(i,d,C)}}var m=i.return;try{ed(i)}catch(C){nt(i,m,C)}break;case 5:var v=i.return;try{ed(i)}catch(C){nt(i,v,C)}}}catch(C){nt(i,i.return,C)}if(i===n){se=null;break}var I=i.sibling;if(I!==null){I.return=i.return,se=I;break}se=i.return}}var p0=Math.ceil,Tu=ve.ReactCurrentDispatcher,rd=ve.ReactCurrentOwner,En=ve.ReactCurrentBatchConfig,Ve=0,Tt=null,ut=null,Ct=0,hn=0,mo=ni(0),yt=0,Fa=null,ns=0,Iu=0,id=0,Ua=null,Zt=null,sd=0,go=1/0,Nr=null,Su=!1,od=null,li=null,Au=!1,ui=null,ku=0,ja=0,ad=null,Ru=-1,Cu=0;function Wt(){return(Ve&6)!==0?He():Ru!==-1?Ru:Ru=He()}function ci(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Ct!==0?Ct&-Ct:XE.transition!==null?(Cu===0&&(Cu=qi()),Cu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:pa(n.type)),n)}function zn(n,i,a,c){if(50<ja)throw ja=0,ad=null,Error(t(185));Gr(n,a,c),((Ve&2)===0||n!==Tt)&&(n===Tt&&((Ve&2)===0&&(Iu|=a),yt===4&&hi(n,Ct)),en(n,c),a===1&&Ve===0&&(i.mode&1)===0&&(go=He()+500,nu&&ii()))}function en(n,i){var a=n.callbackNode;_r(n,i);var c=$i(n,n===Tt?Ct:0);if(c===0)a!==null&&ua(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ua(a),i===1)n.tag===0?YE(vg.bind(null,n)):im(vg.bind(null,n)),WE(function(){(Ve&6)===0&&ii()}),a=null;else{switch(Yr(c)){case 1:a=zi;break;case 4:a=Hr;break;case 16:a=pn;break;case 536870912:a=Cl;break;default:a=pn}a=Rg(a,_g.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function _g(n,i){if(Ru=-1,Cu=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(yo()&&n.callbackNode!==a)return null;var c=$i(n,n===Tt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Pu(n,c);else{i=c;var d=Ve;Ve|=2;var m=Eg();(Tt!==n||Ct!==i)&&(Nr=null,go=He()+500,is(n,i));do try{y0();break}catch(I){wg(n,I)}while(!0);Ah(),Tu.current=m,Ve=d,ut!==null?i=0:(Tt=null,Ct=0,i=yt)}if(i!==0){if(i===2&&(d=on(n),d!==0&&(c=d,i=ld(n,d))),i===1)throw a=Fa,is(n,0),hi(n,c),en(n,He()),a;if(i===6)hi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!m0(d)&&(i=Pu(n,c),i===2&&(m=on(n),m!==0&&(c=m,i=ld(n,m))),i===1))throw a=Fa,is(n,0),hi(n,c),en(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ss(n,Zt,Nr);break;case 3:if(hi(n,c),(c&130023424)===c&&(i=sd+500-He(),10<i)){if($i(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ph(ss.bind(null,n,Zt,Nr),i);break}ss(n,Zt,Nr);break;case 4:if(hi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-$t(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*p0(c/1960))-c,10<c){n.timeoutHandle=ph(ss.bind(null,n,Zt,Nr),c);break}ss(n,Zt,Nr);break;case 5:ss(n,Zt,Nr);break;default:throw Error(t(329))}}}return en(n,He()),n.callbackNode===a?_g.bind(null,n):null}function ld(n,i){var a=Ua;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=Pu(n,i),n!==2&&(i=Zt,Zt=a,i!==null&&ud(i)),n}function ud(n){Zt===null?Zt=n:Zt.push.apply(Zt,n)}function m0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Ln(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hi(n,i){for(i&=~id,i&=~Iu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-$t(i),c=1<<a;n[a]=-1,i&=~c}}function vg(n){if((Ve&6)!==0)throw Error(t(327));yo();var i=$i(n,0);if((i&1)===0)return en(n,He()),null;var a=Pu(n,i);if(n.tag!==0&&a===2){var c=on(n);c!==0&&(i=c,a=ld(n,c))}if(a===1)throw a=Fa,is(n,0),hi(n,i),en(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ss(n,Zt,Nr),en(n,He()),null}function cd(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(go=He()+500,nu&&ii())}}function rs(n){ui!==null&&ui.tag===0&&(Ve&6)===0&&yo();var i=Ve;Ve|=1;var a=En.transition,c=Pe;try{if(En.transition=null,Pe=1,n)return n()}finally{Pe=c,En.transition=a,Ve=i,(Ve&6)===0&&ii()}}function hd(){hn=mo.current,Ge(mo)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,HE(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(wh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:ho(),Ge(Yt),Ge(xt),Vh();break;case 5:Dh(c);break;case 4:ho();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:kh(c.type._context);break;case 22:case 23:hd()}a=a.return}if(Tt=n,ut=n=di(n.current,null),Ct=hn=i,yt=0,Fa=null,id=Iu=ns=0,Zt=Ua=null,Zi!==null){for(i=0;i<Zi.length;i++)if(a=Zi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Zi=null}return n}function wg(n,i){do{var a=ut;try{if(Ah(),du.current=gu,fu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}fu=!1}if(ts=0,Et=gt=Ze=null,Oa=!1,Va=0,rd.current=null,a===null||a.return===null){yt=1,Fa=i,ut=null;break}e:{var m=n,v=a.return,I=a,C=i;if(i=Ct,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,G=I,Y=G.tag;if((G.mode&1)===0&&(Y===0||Y===11||Y===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var te=Hm(v);if(te!==null){te.flags&=-257,Wm(te,v,I,m,i),te.mode&1&&qm(m,F,i),i=te,C=F;var oe=i.updateQueue;if(oe===null){var ae=new Set;ae.add(C),i.updateQueue=ae}else oe.add(C);break e}else{if((i&1)===0){qm(m,F,i),dd();break e}C=Error(t(426))}}else if(Xe&&I.mode&1){var st=Hm(v);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Wm(st,v,I,m,i),Ih(fo(C,I));break e}}m=C=fo(C,I),yt!==4&&(yt=2),Ua===null?Ua=[m]:Ua.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var L=Bm(m,C,i);mm(m,L);break e;case 1:I=C;var N=m.type,M=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(li===null||!li.has(M)))){m.flags|=65536,i&=-i,m.lanes|=i;var X=$m(m,I,i);mm(m,X);break e}}m=m.return}while(m!==null)}Ig(a)}catch(le){i=le,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function Eg(){var n=Tu.current;return Tu.current=gu,n===null?gu:n}function dd(){(yt===0||yt===3||yt===2)&&(yt=4),Tt===null||(ns&268435455)===0&&(Iu&268435455)===0||hi(Tt,Ct)}function Pu(n,i){var a=Ve;Ve|=2;var c=Eg();(Tt!==n||Ct!==i)&&(Nr=null,is(n,i));do try{g0();break}catch(d){wg(n,d)}while(!0);if(Ah(),Ve=a,Tu.current=c,ut!==null)throw Error(t(261));return Tt=null,Ct=0,yt}function g0(){for(;ut!==null;)Tg(ut)}function y0(){for(;ut!==null&&!kl();)Tg(ut)}function Tg(n){var i=kg(n.alternate,n,hn);n.memoizedProps=n.pendingProps,i===null?Ig(n):ut=i,rd.current=null}function Ig(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=u0(a,i,hn),a!==null){ut=a;return}}else{if(a=c0(a,i),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,ut=null;return}}if(i=i.sibling,i!==null){ut=i;return}ut=i=n}while(i!==null);yt===0&&(yt=5)}function ss(n,i,a){var c=Pe,d=En.transition;try{En.transition=null,Pe=1,_0(n,i,a,c)}finally{En.transition=d,Pe=c}return null}function _0(n,i,a,c){do yo();while(ui!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Be(n,m),n===Tt&&(ut=Tt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Au||(Au=!0,Rg(pn,function(){return yo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=En.transition,En.transition=null;var v=Pe;Pe=1;var I=Ve;Ve|=4,rd.current=null,d0(n,a),fg(a,n),FE(dh),Jr=!!hh,dh=hh=null,n.current=a,f0(a),Qc(),Ve=I,Pe=v,En.transition=m}else n.current=a;if(Au&&(Au=!1,ui=n,ku=d),m=n.pendingLanes,m===0&&(li=null),Pl(a.stateNode),en(n,He()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Su)throw Su=!1,n=od,od=null,n;return(ku&1)!==0&&n.tag!==0&&yo(),m=n.pendingLanes,(m&1)!==0?n===ad?ja++:(ja=0,ad=n):ja=0,ii(),null}function yo(){if(ui!==null){var n=Yr(ku),i=En.transition,a=Pe;try{if(En.transition=null,Pe=16>n?16:n,ui===null)var c=!1;else{if(n=ui,ui=null,ku=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,se=n.current;se!==null;){var m=se,v=m.child;if((se.flags&16)!==0){var I=m.deletions;if(I!==null){for(var C=0;C<I.length;C++){var F=I[C];for(se=F;se!==null;){var G=se;switch(G.tag){case 0:case 11:case 15:Ma(8,G,m)}var Y=G.child;if(Y!==null)Y.return=G,se=Y;else for(;se!==null;){G=se;var W=G.sibling,te=G.return;if(lg(G),G===F){se=null;break}if(W!==null){W.return=te,se=W;break}se=te}}}var oe=m.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var st=ae.sibling;ae.sibling=null,ae=st}while(ae!==null)}}se=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,se=v;else e:for(;se!==null;){if(m=se,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ma(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,se=L;break e}se=m.return}}var N=n.current;for(se=N;se!==null;){v=se;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,se=M;else e:for(v=N;se!==null;){if(I=se,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Eu(9,I)}}catch(le){nt(I,I.return,le)}if(I===v){se=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,se=X;break e}se=I.return}}if(Ve=d,ii(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Bi,n)}catch{}c=!0}return c}finally{Pe=a,En.transition=i}}return!1}function Sg(n,i,a){i=fo(a,i),i=Bm(n,i,1),n=oi(n,i,1),i=Wt(),n!==null&&(Gr(n,1,i),en(n,i))}function nt(n,i,a){if(n.tag===3)Sg(n,n,a);else for(;i!==null;){if(i.tag===3){Sg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(li===null||!li.has(c))){n=fo(a,n),n=$m(i,n,1),i=oi(i,n,1),n=Wt(),i!==null&&(Gr(i,1,n),en(i,n));break}}i=i.return}}function v0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wt(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Ct&a)===a&&(yt===4||yt===3&&(Ct&130023424)===Ct&&500>He()-sd?is(n,0):id|=a),en(n,i)}function Ag(n,i){i===0&&((n.mode&1)===0?i=1:(i=Us,Us<<=1,(Us&130023424)===0&&(Us=4194304)));var a=Wt();n=Rr(n,i),n!==null&&(Gr(n,i,a),en(n,a))}function w0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Ag(n,a)}function E0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Ag(n,a)}var kg;kg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Yt.current)Jt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Jt=!1,l0(n,i,a);Jt=(n.flags&131072)!==0}else Jt=!1,Xe&&(i.flags&1048576)!==0&&sm(i,iu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;vu(n,i),n=i.pendingProps;var d=io(i,xt.current);co(i,a),d=Lh(null,i,c,n,d,a);var m=Mh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xt(c)?(m=!0,tu(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ph(i),d.updater=yu,i.stateNode=d,d._reactInternals=i,$h(i,c,n,a),i=Kh(null,i,c,!0,m,a)):(i.tag=0,Xe&&m&&vh(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(vu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=I0(c),n=Fn(c,n),d){case 0:i=Wh(null,i,c,n,a);break e;case 1:i=Jm(null,i,c,n,a);break e;case 11:i=Km(null,i,c,n,a);break e;case 14:i=Gm(null,i,c,Fn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fn(c,d),Wh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fn(c,d),Jm(n,i,c,d,a);case 3:e:{if(Zm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,pm(n,i),cu(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=fo(Error(t(423)),i),i=eg(n,i,c,a,d);break e}else if(c!==d){d=fo(Error(t(424)),i),i=eg(n,i,c,a,d);break e}else for(cn=ti(i.stateNode.containerInfo.firstChild),un=i,Xe=!0,Mn=null,a=dm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ao(),c===d){i=Pr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return ym(i),n===null&&Th(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,fh(c,d)?v=null:m!==null&&fh(c,m)&&(i.flags|=32),Xm(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&Th(i),null;case 13:return tg(n,i,a);case 4:return Nh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=lo(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fn(c,d),Km(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,We(au,c._currentValue),c._currentValue=v,m!==null)if(Ln(m.value,v)){if(m.children===d.children&&!Yt.current){i=Pr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){v=m.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=Cr(-1,a&-a),C.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?C.next=C:(C.next=G.next,G.next=C),F.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),Rh(m.return,a,i),I.lanes|=a;break}C=C.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Rh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,co(i,a),d=vn(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=Fn(c,i.pendingProps),d=Fn(c.type,d),Gm(n,i,c,d,a);case 15:return Qm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fn(c,d),vu(n,i),i.tag=1,Xt(c)?(n=!0,tu(i)):n=!1,co(i,a),jm(i,c,d),$h(i,c,d,a),Kh(null,i,c,!0,n,a);case 19:return rg(n,i,a);case 22:return Ym(n,i,a)}throw Error(t(156,i.tag))};function Rg(n,i){return Ms(n,i)}function T0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,i,a,c){return new T0(n,i,a,c)}function fd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function I0(n){if(typeof n=="function")return fd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===Ot)return 14}return 2}function di(n,i){var a=n.alternate;return a===null?(a=Tn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Nu(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")fd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return os(a.children,d,m,i);case S:v=8,d|=8;break;case R:return n=Tn(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case A:return n=Tn(13,a,i,d),n.elementType=A,n.lanes=m,n;case rt:return n=Tn(19,a,i,d),n.elementType=rt,n.lanes=m,n;case je:return Du(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case O:v=9;break e;case x:v=11;break e;case Ot:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Tn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function os(n,i,a,c){return n=Tn(7,n,c,i),n.lanes=a,n}function Du(n,i,a,c){return n=Tn(22,n,c,i),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function pd(n,i,a){return n=Tn(6,n,null,i),n.lanes=a,n}function md(n,i,a){return i=Tn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function S0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function gd(n,i,a,c,d,m,v,I,C){return n=new S0(n,i,a,I,C),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Tn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ph(m),n}function A0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Cg(n){if(!n)return ri;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xt(a))return nm(n,a,i)}return i}function Pg(n,i,a,c,d,m,v,I,C){return n=gd(a,c,!0,n,d,m,v,I,C),n.context=Cg(null),a=n.current,c=Wt(),d=ci(a),m=Cr(c,d),m.callback=i??null,oi(a,m,d),n.current.lanes=d,Gr(n,d,c),en(n,c),n}function Ou(n,i,a,c){var d=i.current,m=Wt(),v=ci(d);return a=Cg(a),i.context===null?i.context=a:i.pendingContext=a,i=Cr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=oi(d,i,v),n!==null&&(zn(n,d,v,m),uu(n,d,v)),v}function Vu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ng(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function yd(n,i){Ng(n,i),(n=n.alternate)&&Ng(n,i)}function k0(){return null}var Dg=typeof reportError=="function"?reportError:function(n){console.error(n)};function _d(n){this._internalRoot=n}xu.prototype.render=_d.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ou(n,i,null,null)},xu.prototype.unmount=_d.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){Ou(null,n,null,null)}),i[Ir]=null}};function xu(n){this._internalRoot=n}xu.prototype.unstable_scheduleHydration=function(n){if(n){var i=xl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Yn.length&&i!==0&&i<Yn[a].priority;a++);Yn.splice(a,0,n),a===0&&Ml(n)}};function vd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Og(){}function R0(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var F=Vu(v);m.call(F)}}var v=Pg(i,c,n,0,null,!1,!1,"",Og);return n._reactRootContainer=v,n[Ir]=v.current,Sa(n.nodeType===8?n.parentNode:n),rs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=Vu(C);I.call(F)}}var C=gd(n,0,!1,null,null,!1,!1,"",Og);return n._reactRootContainer=C,n[Ir]=C.current,Sa(n.nodeType===8?n.parentNode:n),rs(function(){Ou(i,C,a,c)}),C}function Lu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var I=d;d=function(){var C=Vu(v);I.call(C)}}Ou(i,v,n,d)}else v=R0(a,i,n,d,c);return Vu(v)}Ol=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Wr(i.pendingLanes);a!==0&&(Qr(i,a|1),en(i,He()),(Ve&6)===0&&(go=He()+500,ii()))}break;case 13:rs(function(){var c=Rr(n,1);if(c!==null){var d=Wt();zn(c,n,1,d)}}),yd(n,1)}},js=function(n){if(n.tag===13){var i=Rr(n,134217728);if(i!==null){var a=Wt();zn(i,n,134217728,a)}yd(n,134217728)}},Vl=function(n){if(n.tag===13){var i=ci(n),a=Rr(n,i);if(a!==null){var c=Wt();zn(a,n,i,c)}yd(n,i)}},xl=function(){return Pe},bl=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},Ds=function(n,i,a){switch(i){case"input":if(Qo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Zl(c);if(!d)throw Error(t(90));As(c),Qo(c,d)}}}break;case"textarea":Ps(n,a);break;case"select":i=a.value,i!=null&&mr(n,!!a.multiple,i,!1)}},Mi=cd,sa=rs;var C0={usingClientEntryPoint:!1,Events:[Ra,no,Zl,Gn,ia,cd]},za={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P0={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=la(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||k0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Bi=Mu.inject(P0),sn=Mu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0,tn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(i))throw Error(t(200));return A0(n,i,null,a)},tn.createRoot=function(n,i){if(!vd(n))throw Error(t(299));var a=!1,c="",d=Dg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=gd(n,1,!1,null,null,a,!1,c,d),n[Ir]=i.current,Sa(n.nodeType===8?n.parentNode:n),new _d(i)},tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=la(i),n=n===null?null:n.stateNode,n},tn.flushSync=function(n){return rs(n)},tn.hydrate=function(n,i,a){if(!bu(i))throw Error(t(200));return Lu(null,n,i,!0,a)},tn.hydrateRoot=function(n,i,a){if(!vd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Dg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Pg(i,null,n,1,a??null,d,!1,m,v),n[Ir]=i.current,Sa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new xu(i)},tn.render=function(n,i,a){if(!bu(i))throw Error(t(200));return Lu(null,n,i,!1,a)},tn.unmountComponentAtNode=function(n){if(!bu(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){Lu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ir]=null})}),!0):!1},tn.unstable_batchedUpdates=cd,tn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!bu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Lu(n,i,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var jg;function U0(){if(jg)return Td.exports;jg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=F0(),Td.exports}var zg;function j0(){if(zg)return Fu;zg=1;var r=U0();return Fu.createRoot=r.createRoot,Fu.hydrateRoot=r.hydrateRoot,Fu}var z0=j0();const B0=()=>{};var Bg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},$0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},D_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let k=(f&15)<<2|_>>6,U=_&63;g||(U=64,h||(k=64)),s.push(t[w],t[T],t[k],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(N_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):$0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new q0;const k=l<<2|f>>4;if(s.push(k),_!==64){const U=f<<4&240|_>>2;if(s.push(U),T!==64){const $=_<<6&192|T;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class q0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H0=function(r){const e=N_(r);return D_.encodeByteArray(e,!0)},tc=function(r){return H0(r).replace(/\./g,"")},O_=function(r){try{return D_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function W0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const K0=()=>W0().__FIREBASE_DEFAULTS__,G0=()=>{if(typeof process>"u"||typeof Bg>"u")return;const r=Bg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Q0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&O_(r[1]);return e&&JSON.parse(e)},Ec=()=>{try{return B0()||K0()||G0()||Q0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},V_=r=>{var e,t;return(t=(e=Ec())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Y0=r=>{const e=V_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},x_=()=>{var r;return(r=Ec())===null||r===void 0?void 0:r.config},b_=r=>{var e;return(e=Ec())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Fo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function L_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function J0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[tc(JSON.stringify(t)),tc(JSON.stringify(h)),""].join(".")}const Qa={};function Z0(){const r={prod:[],emulator:[]};for(const e of Object.keys(Qa))Qa[e]?r.emulator.push(e):r.prod.push(e);return r}function eT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let $g=!1;function M_(r,e){if(typeof window>"u"||typeof document>"u"||!Fo(window.location.host)||Qa[r]===e||Qa[r]||$g)return;Qa[r]=e;function t(k){return`__firebase__banner__${k}`}const s="__firebase__banner",l=Z0().prod.length>0;function h(){const k=document.getElementById(s);k&&k.remove()}function f(k){k.style.display="flex",k.style.background="#7faaf0",k.style.position="fixed",k.style.bottom="5px",k.style.left="5px",k.style.padding=".5em",k.style.borderRadius="5px",k.style.alignItems="center"}function g(k,U){k.setAttribute("width","24"),k.setAttribute("id",U),k.setAttribute("height","24"),k.setAttribute("viewBox","0 0 24 24"),k.setAttribute("fill","none"),k.style.marginLeft="-6px"}function _(){const k=document.createElement("span");return k.style.cursor="pointer",k.style.marginLeft="16px",k.style.fontSize="24px",k.innerHTML=" &times;",k.onclick=()=>{$g=!0,h()},k}function w(k,U){k.setAttribute("id",U),k.innerText="Learn more",k.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",k.setAttribute("target","__blank"),k.style.paddingLeft="5px",k.style.textDecoration="underline"}function T(){const k=eT(s),U=t("text"),$=document.getElementById(U)||document.createElement("span"),K=t("learnmore"),B=document.getElementById(K)||document.createElement("a"),he=t("preprendIcon"),ie=document.getElementById(he)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(k.created){const fe=k.element;f(fe),w(B,K);const ve=_();g(ie,he),fe.append(ie,$,B,ve),document.body.appendChild(fe)}l?($.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function nT(){var r;const e=(r=Ec())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function sT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oT(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function aT(){return!nT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function F_(){try{return typeof indexedDB=="object"}catch{return!1}}function U_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function lT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="FirebaseError";class dr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=uT,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?cT(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new dr(o,f,s)}}function cT(r,e){return r.replace(hT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const hT=/\{\$([^}]+)}/g;function dT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Mr(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(qg(l)&&qg(h)){if(!Mr(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function qg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $a(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function qa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function fT(r,e){const t=new pT(r,e);return t.subscribe.bind(t)}class pT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");mT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Ad),o.error===void 0&&(o.error=Ad),o.complete===void 0&&(o.complete=Ad);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ad(){}/**
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
 */function et(r){return r&&r._delegate?r._delegate:r}class Hn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class gT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new X0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_T(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yT(r){return r===as?void 0:r}function _T(r){return r.instantiationMode==="EAGER"}/**
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
 */class vT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Re||(Re={}));const wT={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},ET=Re.INFO,TT={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},IT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=TT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yf{constructor(e){this.name=e,this._logLevel=ET,this._logHandler=IT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const ST=(r,e)=>e.some(t=>r instanceof t);let Hg,Wg;function AT(){return Hg||(Hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kT(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j_=new WeakMap,$d=new WeakMap,z_=new WeakMap,kd=new WeakMap,_f=new WeakMap;function RT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(br(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&j_.set(t,r)}).catch(()=>{}),_f.set(e,r),e}function CT(r){if($d.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});$d.set(r,e)}let qd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return $d.get(r);if(e==="objectStoreNames")return r.objectStoreNames||z_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return br(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function PT(r){qd=r(qd)}function NT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Rd(this),e,...t);return z_.set(s,e.sort?e.sort():[e]),br(s)}:kT().includes(r)?function(...e){return r.apply(Rd(this),e),br(j_.get(this))}:function(...e){return br(r.apply(Rd(this),e))}}function DT(r){return typeof r=="function"?NT(r):(r instanceof IDBTransaction&&CT(r),ST(r,AT())?new Proxy(r,qd):r)}function br(r){if(r instanceof IDBRequest)return RT(r);if(kd.has(r))return kd.get(r);const e=DT(r);return e!==r&&(kd.set(r,e),_f.set(e,r)),e}const Rd=r=>_f.get(r);function Tc(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=br(h);return s&&h.addEventListener("upgradeneeded",g=>{s(br(h.result),g.oldVersion,g.newVersion,br(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}function Cd(r,{blocked:e}={}){const t=indexedDB.deleteDatabase(r);return e&&t.addEventListener("blocked",s=>e(s.oldVersion,s)),br(t).then(()=>{})}const OT=["get","getKey","getAll","getAllKeys","count"],VT=["put","add","delete","clear"],Pd=new Map;function Kg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=VT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||OT.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Pd.set(e,l),l}PT(r=>({...r,get:(e,t,s)=>Kg(e,t)||r.get(e,t,s),has:(e,t)=>!!Kg(e,t)||r.has(e,t)}));/**
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
 */class xT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function bT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hd="@firebase/app",Gg="0.13.2";/**
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
 */const Fr=new yf("@firebase/app"),LT="@firebase/app-compat",MT="@firebase/analytics-compat",FT="@firebase/analytics",UT="@firebase/app-check-compat",jT="@firebase/app-check",zT="@firebase/auth",BT="@firebase/auth-compat",$T="@firebase/database",qT="@firebase/data-connect",HT="@firebase/database-compat",WT="@firebase/functions",KT="@firebase/functions-compat",GT="@firebase/installations",QT="@firebase/installations-compat",YT="@firebase/messaging",XT="@firebase/messaging-compat",JT="@firebase/performance",ZT="@firebase/performance-compat",eI="@firebase/remote-config",tI="@firebase/remote-config-compat",nI="@firebase/storage",rI="@firebase/storage-compat",iI="@firebase/firestore",sI="@firebase/ai",oI="@firebase/firestore-compat",aI="firebase",lI="11.10.0";/**
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
 */const Wd="[DEFAULT]",uI={[Hd]:"fire-core",[LT]:"fire-core-compat",[FT]:"fire-analytics",[MT]:"fire-analytics-compat",[jT]:"fire-app-check",[UT]:"fire-app-check-compat",[zT]:"fire-auth",[BT]:"fire-auth-compat",[$T]:"fire-rtdb",[qT]:"fire-data-connect",[HT]:"fire-rtdb-compat",[WT]:"fire-fn",[KT]:"fire-fn-compat",[GT]:"fire-iid",[QT]:"fire-iid-compat",[YT]:"fire-fcm",[XT]:"fire-fcm-compat",[JT]:"fire-perf",[ZT]:"fire-perf-compat",[eI]:"fire-rc",[tI]:"fire-rc-compat",[nI]:"fire-gcs",[rI]:"fire-gcs-compat",[iI]:"fire-fst",[oI]:"fire-fst-compat",[sI]:"fire-vertex","fire-js":"fire-js",[aI]:"fire-js-all"};/**
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
 */const nc=new Map,cI=new Map,Kd=new Map;function Qg(r,e){try{r.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function cr(r){const e=r.name;if(Kd.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;Kd.set(e,r);for(const t of nc.values())Qg(t,r);for(const t of cI.values())Qg(t,r);return!0}function Uo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function In(r){return r==null?!1:r.settings!==void 0}/**
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
 */const hI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new _s("app","Firebase",hI);/**
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
 */class dI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
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
 */const jo=lI;function B_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw vi.create("bad-app-name",{appName:String(o)});if(t||(t=x_()),!t)throw vi.create("no-options");const l=nc.get(o);if(l){if(Mr(t,l.options)&&Mr(s,l.config))return l;throw vi.create("duplicate-app",{appName:o})}const h=new vT(o);for(const g of Kd.values())h.addComponent(g);const f=new dI(t,s,h);return nc.set(o,f),f}function vf(r=Wd){const e=nc.get(r);if(!e&&r===Wd&&x_())return B_();if(!e)throw vi.create("no-app",{appName:r});return e}function An(r,e,t){var s;let o=(s=uI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(f.join(" "));return}cr(new Hn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const fI="firebase-heartbeat-database",pI=1,el="firebase-heartbeat-store";let Nd=null;function $_(){return Nd||(Nd=Tc(fI,pI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(el)}catch(t){console.warn(t)}}}}).catch(r=>{throw vi.create("idb-open",{originalErrorMessage:r.message})})),Nd}async function mI(r){try{const t=(await $_()).transaction(el),s=await t.objectStore(el).get(q_(r));return await t.done,s}catch(e){if(e instanceof dr)Fr.warn(e.message);else{const t=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(t.message)}}}async function Yg(r,e){try{const s=(await $_()).transaction(el,"readwrite");await s.objectStore(el).put(e,q_(r)),await s.done}catch(t){if(t instanceof dr)Fr.warn(t.message);else{const s=vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fr.warn(s.message)}}}function q_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const gI=1024,yI=30;class _I{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Xg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>yI){const h=EI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Fr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xg(),{heartbeatsToSend:s,unsentEntries:o}=vI(this._heartbeatsCache.heartbeats),l=tc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Fr.warn(t),""}}}function Xg(){return new Date().toISOString().substring(0,10)}function vI(r,e=gI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Jg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Jg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class wI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return F_()?U_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Jg(r){return tc(JSON.stringify({version:2,heartbeats:r})).length}function EI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function TI(r){cr(new Hn("platform-logger",e=>new xT(e),"PRIVATE")),cr(new Hn("heartbeat",e=>new _I(e),"PRIVATE")),An(Hd,Gg,r),An(Hd,Gg,"esm2017"),An("fire-js","")}TI("");function wf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function H_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=H_,W_=new _s("auth","Firebase",H_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new yf("@firebase/auth");function SI(r,...e){rc.logLevel<=Re.WARN&&rc.warn(`Auth (${jo}): ${r}`,...e)}function Hu(r,...e){rc.logLevel<=Re.ERROR&&rc.error(`Auth (${jo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(r,...e){throw Tf(r,...e)}function $n(r,...e){return Tf(r,...e)}function Ef(r,e,t){const s=Object.assign(Object.assign({},II()),{[e]:t});return new _s("auth","Firebase",s).create(e,{appName:r.name})}function wi(r){return Ef(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function AI(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&kn(r,"argument-error"),Ef(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return W_.create(r,...e)}function ge(r,e,...t){if(!r)throw Tf(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Hu(e),new Error(e)}function Ur(r,e){r||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function kI(){return Zg()==="http:"||Zg()==="https:"}function Zg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kI()||iT()||"connection"in navigator)?navigator.onLine:!0}function CI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=tT()||sT()}get(){return RI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(r,e){Ur(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DI=new fl(3e4,6e4);function vs(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ni(r,e,t,s,o={}){return G_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=dl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return rT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Fo(r.emulatorConfig.host)&&(_.credentials="include"),K_.fetch()(await Q_(r,r.config.apiHost,t,f),_)})}async function G_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},PI),e);try{const o=new VI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Uu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Uu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Uu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Ef(r,w,_);kn(r,w)}}catch(o){if(o instanceof dr)throw o;kn(r,"network-request-failed",{message:String(o)})}}async function Ic(r,e,t,s,o={}){const l=await Ni(r,e,t,s,o);return"mfaPendingCredential"in l&&kn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function Q_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?If(r.config,o):`${r.config.apiScheme}://${o}`;return NI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function OI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s($n(this.auth,"network-request-failed")),DI.get())})}}function Uu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=$n(r,e,s);return o.customData._tokenResponse=t,o}function ey(r){return r!==void 0&&r.enterprise!==void 0}class xI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return OI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bI(r,e){return Ni(r,"GET","/v2/recaptchaConfig",vs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(r,e){return Ni(r,"POST","/v1/accounts:delete",e)}async function ic(r,e){return Ni(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MI(r,e=!1){const t=et(r),s=await t.getIdToken(e),o=Sf(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ya(Dd(o.auth_time)),issuedAtTime:Ya(Dd(o.iat)),expirationTime:Ya(Dd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Dd(r){return Number(r)*1e3}function Sf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Hu("JWT malformed, contained fewer than 3 sections"),null;try{const o=O_(t);return o?JSON.parse(o):(Hu("Failed to decode base64 JWT payload"),null)}catch(o){return Hu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ty(r){const e=Sf(r);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof dr&&FI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function FI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await tl(r,ic(t,{idToken:s}));ge(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Y_(l.providerUserInfo):[],f=zI(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Qd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,T)}async function jI(r){const e=et(r);await sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Y_(r){return r.map(e=>{var{providerId:t}=e,s=wf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(r,e){const t=await G_(r,{},async()=>{const s=dl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await Q_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:s};return r.emulatorConfig&&Fo(r.emulatorConfig.host)&&(g.credentials="include"),K_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $I(r,e){return Ni(r,"POST","/v2/accounts:revokeToken",vs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=ty(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await BI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new To;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ge(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(r,e){ge(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Qd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await tl(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return MI(this,e)}reload(){return jI(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await sc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(wi(this.auth));const e=await this.getIdToken();return await tl(this,LI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,_,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,k=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,K=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,he=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ie=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:fe,emailVerified:ve,isAnonymous:be,providerData:Te,stsTokenManager:D}=t;ge(fe&&D,e,"internal-error");const S=To.fromJSON(this.name,D);ge(typeof fe=="string",e,"internal-error"),pi(T,e.name),pi(k,e.name),ge(typeof ve=="boolean",e,"internal-error"),ge(typeof be=="boolean",e,"internal-error"),pi(U,e.name),pi($,e.name),pi(K,e.name),pi(B,e.name),pi(he,e.name),pi(ie,e.name);const R=new Bn({uid:fe,auth:e,email:k,emailVerified:ve,displayName:T,isAnonymous:be,photoURL:$,phoneNumber:U,tenantId:K,stsTokenManager:S,createdAt:he,lastLoginAt:ie});return Te&&Array.isArray(Te)&&(R.providerData=Te.map(P=>Object.assign({},P))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new To;o.updateFromServerResponse(t);const l=new Bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await sc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Y_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new To;f.updateFromIdToken(s);const g=new Bn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Qd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new Map;function xr(r){Ur(r instanceof Function,"Expected a class definition");let e=ny.get(r);return e?(Ur(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ny.set(r,e),e)}/**
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
 */class X_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}X_.type="NONE";const ry=X_;/**
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
 */function Wu(r,e,t){return`firebase:${r}:${e}:${t}`}class Io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Wu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Wu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ic(this.auth,{idToken:e}).catch(()=>{});return t?Bn._fromGetAccountInfoResponse(this.auth,t,e):null}return Bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Io(xr(ry),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||xr(ry);const h=Wu(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const k=await ic(e,{idToken:w}).catch(()=>{});if(!k)break;T=await Bn._fromGetAccountInfoResponse(e,k,w)}else T=Bn._fromJSON(e,w);_!==l&&(f=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Io(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new Io(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rv(e))return"Blackberry";if(iv(e))return"Webos";if(Z_(e))return"Safari";if((e.includes("chrome/")||ev(e))&&!e.includes("edge/"))return"Chrome";if(nv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function J_(r=Bt()){return/firefox\//i.test(r)}function Z_(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ev(r=Bt()){return/crios\//i.test(r)}function tv(r=Bt()){return/iemobile/i.test(r)}function nv(r=Bt()){return/android/i.test(r)}function rv(r=Bt()){return/blackberry/i.test(r)}function iv(r=Bt()){return/webos/i.test(r)}function Af(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function qI(r=Bt()){var e;return Af(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HI(){return oT()&&document.documentMode===10}function sv(r=Bt()){return Af(r)||nv(r)||iv(r)||rv(r)||/windows phone/i.test(r)||tv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(r,e=[]){let t;switch(r){case"Browser":t=iy(Bt());break;case"Worker":t=`${iy(Bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jo}/${s}`}/**
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
 */class WI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function KI(r,e={}){return Ni(r,"GET","/v2/passwordPolicy",vs(r,e))}/**
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
 */const GI=6;class QI{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:GI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sy(this),this.idTokenSubscription=new sy(this),this.beforeStateQueue=new WI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ic(this,{idToken:e}),s=await Bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(In(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(wi(this));const t=e?et(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KI(this),t=new QI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await $I(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(In(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&SI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ws(r){return et(r)}class sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=fT(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XI(r){Sc=r}function av(r){return Sc.loadJS(r)}function JI(){return Sc.recaptchaEnterpriseScript}function ZI(){return Sc.gapiScript}function e1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class t1{constructor(){this.enterprise=new n1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class n1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const r1="recaptcha-enterprise",lv="NO_RECAPTCHA";class i1{constructor(e){this.type=r1,this.auth=ws(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{bI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new xI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;ey(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(lv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new t1().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&ey(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=JI();g.length!==0&&(g+=f),av(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function oy(r,e,t,s=!1,o=!1){const l=new i1(r);let h;if(o)h=lv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function ay(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await oy(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await oy(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(r,e){const t=Uo(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Mr(l,e??{}))return o;kn(o,"already-initialized")}return t.initialize({options:e})}function o1(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function a1(r,e,t){const s=ws(r);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=uv(e),{host:h,port:f}=l1(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(Mr(_,s.config.emulator)&&Mr(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Fo(h)?(L_(`${l}//${h}${g}`),M_("Auth",!0)):u1()}function uv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function l1(r){const e=uv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:ly(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:ly(h)}}}function ly(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function u1(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function c1(r,e){return Ni(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(r,e){return Ic(r,"POST","/v1/accounts:signInWithPassword",vs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(r,e){return Ic(r,"POST","/v1/accounts:signInWithEmailLink",vs(r,e))}async function f1(r,e){return Ic(r,"POST","/v1/accounts:signInWithEmailLink",vs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends kf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new nl(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new nl(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ay(e,t,"signInWithPassword",h1);case"emailLink":return d1(e,{email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ay(e,s,"signUpPassword",c1);case"emailLink":return f1(e,{idToken:t,email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(r,e){return Ic(r,"POST","/v1/accounts:signInWithIdp",vs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="http://localhost";class fs extends kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=wf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new fs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,So(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:p1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g1(r){const e=$a(qa(r)).link,t=e?$a(qa(e)).deep_link_id:null,s=$a(qa(r)).deep_link_id;return(s?$a(qa(s)).link:null)||s||t||e||r}class Rf{constructor(e){var t,s,o,l,h,f;const g=$a(qa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,T=m1((o=g.mode)!==null&&o!==void 0?o:null);ge(_&&w&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=g1(e);try{return new Rf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,t){return nl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Rf.parseLink(t);return ge(s,"argument-error"),nl._fromEmailAndCode(e,s.code,s.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pl extends Cf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends pl{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";mi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Or.credential(t,s)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends pl{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends pl{constructor(){super("twitter.com")}static credential(e,t){return fs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return yi.credential(t,s)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Bn._fromIdTokenResponse(e,s,o),h=uy(s);return new Co({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=uy(s);return new Co({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function uy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends dr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new oc(e,t,s,o)}}function cv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(r,l,e,s):l})}async function y1(r,e,t=!1){const s=await tl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Co._forOperation(r,"link",s)}/**
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
 */async function _1(r,e,t=!1){const{auth:s}=r;if(In(s.app))return Promise.reject(wi(s));const o="reauthenticate";try{const l=await tl(r,cv(s,o,e,r),t);ge(l.idToken,s,"internal-error");const h=Sf(l.idToken);ge(h,s,"internal-error");const{sub:f}=h;return ge(r.uid===f,s,"user-mismatch"),Co._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&kn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(r,e,t=!1){if(In(r.app))return Promise.reject(wi(r));const s="signIn",o=await cv(r,s,e),l=await Co._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function v1(r,e){return hv(ws(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(r){const e=ws(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function E1(r,e,t){return In(r.app)?Promise.reject(wi(r)):v1(et(r),zo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&w1(r),s})}function T1(r,e,t,s){return et(r).onIdTokenChanged(e,t,s)}function I1(r,e,t){return et(r).beforeAuthStateChanged(e,t)}function S1(r,e,t,s){return et(r).onAuthStateChanged(e,t,s)}function A1(r){return et(r).signOut()}const ac="__sak";/**
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
 */class dv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=1e3,R1=10;class fv extends dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);HI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,R1):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},k1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fv.type="LOCAL";const C1=fv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pv.type="SESSION";const mv=pv;/**
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
 */function P1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ac(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await P1(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class N1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=Pf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const k=T;if(k.data.eventId===_)switch(k.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(k.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function D1(r){sr().location.href=r}/**
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
 */function gv(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function O1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function x1(){return gv()?self:null}/**
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
 */const yv="firebaseLocalStorageDb",b1=1,lc="firebaseLocalStorage",_v="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function kc(r,e){return r.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function L1(){const r=indexedDB.deleteDatabase(yv);return new ml(r).toPromise()}function Yd(){const r=indexedDB.open(yv,b1);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(lc,{keyPath:_v})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(lc)?e(s):(s.close(),await L1(),e(await Yd()))})})}async function cy(r,e,t){const s=kc(r,!0).put({[_v]:e,value:t});return new ml(s).toPromise()}async function M1(r,e){const t=kc(r,!1).get(e),s=await new ml(t).toPromise();return s===void 0?null:s.value}function hy(r,e){const t=kc(r,!0).delete(e);return new ml(t).toPromise()}const F1=800,U1=3;class vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>U1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ac._getInstance(x1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await O1(),!this.activeServiceWorker)return;this.sender=new N1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yd();return await cy(e,ac,"1"),await hy(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>cy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>M1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=kc(o,!1).getAll();return new ml(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vv.type="LOCAL";const j1=vv;new fl(3e4,6e4);/**
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
 */function wv(r,e){return e?xr(e):(ge(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Nf extends kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function z1(r){return hv(r.auth,new Nf(r),r.bypassAuthState)}function B1(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),_1(t,new Nf(r),r.bypassAuthState)}async function $1(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),y1(t,new Nf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z1;case"linkViaPopup":case"linkViaRedirect":return $1;case"reauthViaPopup":case"reauthViaRedirect":return B1;default:kn(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=new fl(2e3,1e4);async function H1(r,e,t){if(In(r.app))return Promise.reject($n(r,"operation-not-supported-in-this-environment"));const s=ws(r);AI(r,e,Cf);const o=wv(s,t);return new ls(s,"signInViaPopup",e,o).executeNotNull()}class ls extends Ev{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=Pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,q1.get())};e()}}ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="pendingRedirect",Ku=new Map;class K1 extends Ev{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const s=await G1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G1(r,e){const t=X1(e),s=Y1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Q1(r,e){Ku.set(r._key(),e)}function Y1(r){return xr(r._redirectPersistence)}function X1(r){return Wu(W1,r.config.apiKey,r.name)}async function J1(r,e,t=!1){if(In(r.app))return Promise.reject(wi(r));const s=ws(r),o=wv(s,e),h=await new K1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=600*1e3;class eS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Tv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError($n(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z1&&this.cachedEventUids.clear(),this.cachedEventUids.has(dy(e))}saveEventToCache(e){this.cachedEventUids.add(dy(e)),this.lastProcessedEventTime=Date.now()}}function dy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Tv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(r,e={}){return Ni(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iS=/^https?/;async function sS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await nS(r);for(const t of e)try{if(oS(t))return}catch{}kn(r,"unauthorized-domain")}function oS(r){const e=Gd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!iS.test(t))return!1;if(rS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const aS=new fl(3e4,6e4);function fy(){const r=sr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function lS(r){return new Promise((e,t)=>{var s,o,l;function h(){fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fy(),t($n(r,"network-request-failed"))},timeout:aS.get()})}if(!((o=(s=sr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)h();else{const f=e1("iframefcb");return sr()[f]=()=>{gapi.load?h():t($n(r,"network-request-failed"))},av(`${ZI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function uS(r){return Gu=Gu||lS(r),Gu}/**
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
 */const cS=new fl(5e3,15e3),hS="__/auth/iframe",dS="emulator/auth/iframe",fS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mS(r){const e=r.config;ge(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?If(e,dS):`https://${r.config.authDomain}/${hS}`,s={apiKey:e.apiKey,appName:r.name,v:jo},o=pS.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${dl(s).slice(1)}`}async function gS(r){const e=await uS(r),t=sr().gapi;return ge(t,r,"internal-error"),e.open({where:document.body,url:mS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fS,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=$n(r,"network-request-failed"),f=sr().setTimeout(()=>{l(h)},cS.get());function g(){sr().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const yS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_S=500,vS=600,wS="_blank",ES="http://localhost";class py{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TS(r,e,t,s=_S,o=vS){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},yS),{width:s.toString(),height:o.toString(),top:l,left:h}),_=Bt().toLowerCase();t&&(f=ev(_)?wS:t),J_(_)&&(e=e||ES,g.scrollbars="yes");const w=Object.entries(g).reduce((k,[U,$])=>`${k}${U}=${$},`,"");if(qI(_)&&f!=="_self")return IS(e||"",f),new py(null);const T=window.open(e||"",f,w);ge(T,r,"popup-blocked");try{T.focus()}catch{}return new py(T)}function IS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const SS="__/auth/handler",AS="emulator/auth/handler",kS=encodeURIComponent("fac");async function my(r,e,t,s,o,l){ge(r.config.authDomain,r,"auth-domain-config-required"),ge(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:jo,eventId:o};if(e instanceof Cf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",dT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof pl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),_=g?`#${kS}=${encodeURIComponent(g)}`:"";return`${RS(r)}?${dl(f).slice(1)}${_}`}function RS({config:r}){return r.emulator?If(r,AS):`https://${r.authDomain}/${SS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="webStorageSupport";class CS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mv,this._completeRedirectFn=J1,this._overrideRedirectResult=Q1}async _openPopup(e,t,s,o){var l;Ur((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await my(e,t,s,Gd(),o);return TS(e,h,Pf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await my(e,t,s,Gd(),o);return D1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Ur(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await gS(e),s=new eS(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Od,{type:Od},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Od];h!==void 0&&t(!!h),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sv()||Z_()||Af()}}const PS=CS;var gy="@firebase/auth",yy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OS(r){cr(new Hn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ov(r)},_=new YI(s,o,l,g);return o1(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),cr(new Hn("auth-internal",e=>{const t=ws(e.getProvider("auth").getImmediate());return(s=>new NS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(gy,yy,DS(r)),An(gy,yy,"esm2017")}/**
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
 */const VS=300,xS=b_("authIdTokenMaxAge")||VS;let _y=null;const bS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>xS)return;const o=t==null?void 0:t.token;_y!==o&&(_y=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function LS(r=vf()){const e=Uo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=s1(r,{popupRedirectResolver:PS,persistence:[j1,C1,mv]}),s=b_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=bS(l.toString());I1(t,h,()=>h(t.currentUser)),T1(t,f=>h(f))}}const o=V_("auth");return o&&a1(t,`http://${o}`),t}function MS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}XI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=$n("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",MS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OS("Browser");var FS="firebase",US="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(FS,US,"app");var vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ei,Iv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function R(){}R.prototype=S.prototype,D.D=S.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(P,O,x){for(var A=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)A[rt-2]=arguments[rt];return S.prototype[O].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,R){R||(R=0);var P=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)P[O]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(O=0;16>O;++O)P[O]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=D.g[0],R=D.g[1],O=D.g[2];var x=D.g[3],A=S+(x^R&(O^x))+P[0]+3614090360&4294967295;S=R+(A<<7&4294967295|A>>>25),A=x+(O^S&(R^O))+P[1]+3905402710&4294967295,x=S+(A<<12&4294967295|A>>>20),A=O+(R^x&(S^R))+P[2]+606105819&4294967295,O=x+(A<<17&4294967295|A>>>15),A=R+(S^O&(x^S))+P[3]+3250441966&4294967295,R=O+(A<<22&4294967295|A>>>10),A=S+(x^R&(O^x))+P[4]+4118548399&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(O^S&(R^O))+P[5]+1200080426&4294967295,x=S+(A<<12&4294967295|A>>>20),A=O+(R^x&(S^R))+P[6]+2821735955&4294967295,O=x+(A<<17&4294967295|A>>>15),A=R+(S^O&(x^S))+P[7]+4249261313&4294967295,R=O+(A<<22&4294967295|A>>>10),A=S+(x^R&(O^x))+P[8]+1770035416&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(O^S&(R^O))+P[9]+2336552879&4294967295,x=S+(A<<12&4294967295|A>>>20),A=O+(R^x&(S^R))+P[10]+4294925233&4294967295,O=x+(A<<17&4294967295|A>>>15),A=R+(S^O&(x^S))+P[11]+2304563134&4294967295,R=O+(A<<22&4294967295|A>>>10),A=S+(x^R&(O^x))+P[12]+1804603682&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(O^S&(R^O))+P[13]+4254626195&4294967295,x=S+(A<<12&4294967295|A>>>20),A=O+(R^x&(S^R))+P[14]+2792965006&4294967295,O=x+(A<<17&4294967295|A>>>15),A=R+(S^O&(x^S))+P[15]+1236535329&4294967295,R=O+(A<<22&4294967295|A>>>10),A=S+(O^x&(R^O))+P[1]+4129170786&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^O&(S^R))+P[6]+3225465664&4294967295,x=S+(A<<9&4294967295|A>>>23),A=O+(S^R&(x^S))+P[11]+643717713&4294967295,O=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(O^x))+P[0]+3921069994&4294967295,R=O+(A<<20&4294967295|A>>>12),A=S+(O^x&(R^O))+P[5]+3593408605&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^O&(S^R))+P[10]+38016083&4294967295,x=S+(A<<9&4294967295|A>>>23),A=O+(S^R&(x^S))+P[15]+3634488961&4294967295,O=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(O^x))+P[4]+3889429448&4294967295,R=O+(A<<20&4294967295|A>>>12),A=S+(O^x&(R^O))+P[9]+568446438&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^O&(S^R))+P[14]+3275163606&4294967295,x=S+(A<<9&4294967295|A>>>23),A=O+(S^R&(x^S))+P[3]+4107603335&4294967295,O=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(O^x))+P[8]+1163531501&4294967295,R=O+(A<<20&4294967295|A>>>12),A=S+(O^x&(R^O))+P[13]+2850285829&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^O&(S^R))+P[2]+4243563512&4294967295,x=S+(A<<9&4294967295|A>>>23),A=O+(S^R&(x^S))+P[7]+1735328473&4294967295,O=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(O^x))+P[12]+2368359562&4294967295,R=O+(A<<20&4294967295|A>>>12),A=S+(R^O^x)+P[5]+4294588738&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^O)+P[8]+2272392833&4294967295,x=S+(A<<11&4294967295|A>>>21),A=O+(x^S^R)+P[11]+1839030562&4294967295,O=x+(A<<16&4294967295|A>>>16),A=R+(O^x^S)+P[14]+4259657740&4294967295,R=O+(A<<23&4294967295|A>>>9),A=S+(R^O^x)+P[1]+2763975236&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^O)+P[4]+1272893353&4294967295,x=S+(A<<11&4294967295|A>>>21),A=O+(x^S^R)+P[7]+4139469664&4294967295,O=x+(A<<16&4294967295|A>>>16),A=R+(O^x^S)+P[10]+3200236656&4294967295,R=O+(A<<23&4294967295|A>>>9),A=S+(R^O^x)+P[13]+681279174&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^O)+P[0]+3936430074&4294967295,x=S+(A<<11&4294967295|A>>>21),A=O+(x^S^R)+P[3]+3572445317&4294967295,O=x+(A<<16&4294967295|A>>>16),A=R+(O^x^S)+P[6]+76029189&4294967295,R=O+(A<<23&4294967295|A>>>9),A=S+(R^O^x)+P[9]+3654602809&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^O)+P[12]+3873151461&4294967295,x=S+(A<<11&4294967295|A>>>21),A=O+(x^S^R)+P[15]+530742520&4294967295,O=x+(A<<16&4294967295|A>>>16),A=R+(O^x^S)+P[2]+3299628645&4294967295,R=O+(A<<23&4294967295|A>>>9),A=S+(O^(R|~x))+P[0]+4096336452&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~O))+P[7]+1126891415&4294967295,x=S+(A<<10&4294967295|A>>>22),A=O+(S^(x|~R))+P[14]+2878612391&4294967295,O=x+(A<<15&4294967295|A>>>17),A=R+(x^(O|~S))+P[5]+4237533241&4294967295,R=O+(A<<21&4294967295|A>>>11),A=S+(O^(R|~x))+P[12]+1700485571&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~O))+P[3]+2399980690&4294967295,x=S+(A<<10&4294967295|A>>>22),A=O+(S^(x|~R))+P[10]+4293915773&4294967295,O=x+(A<<15&4294967295|A>>>17),A=R+(x^(O|~S))+P[1]+2240044497&4294967295,R=O+(A<<21&4294967295|A>>>11),A=S+(O^(R|~x))+P[8]+1873313359&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~O))+P[15]+4264355552&4294967295,x=S+(A<<10&4294967295|A>>>22),A=O+(S^(x|~R))+P[6]+2734768916&4294967295,O=x+(A<<15&4294967295|A>>>17),A=R+(x^(O|~S))+P[13]+1309151649&4294967295,R=O+(A<<21&4294967295|A>>>11),A=S+(O^(R|~x))+P[4]+4149444226&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~O))+P[11]+3174756917&4294967295,x=S+(A<<10&4294967295|A>>>22),A=O+(S^(x|~R))+P[2]+718787259&4294967295,O=x+(A<<15&4294967295|A>>>17),A=R+(x^(O|~S))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(O+(A<<21&4294967295|A>>>11))&4294967295,D.g[2]=D.g[2]+O&4294967295,D.g[3]=D.g[3]+x&4294967295}s.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var R=S-this.blockSize,P=this.B,O=this.h,x=0;x<S;){if(O==0)for(;x<=R;)o(this,D,x),x+=this.blockSize;if(typeof D=="string"){for(;x<S;)if(P[O++]=D.charCodeAt(x++),O==this.blockSize){o(this,P),O=0;break}}else for(;x<S;)if(P[O++]=D[x++],O==this.blockSize){o(this,P),O=0;break}}this.h=O,this.o+=S},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var R=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=R&255,R/=256;for(this.u(D),D=Array(16),S=R=0;4>S;++S)for(var P=0;32>P;P+=8)D[R++]=this.g[S]>>>P&255;return D};function l(D,S){var R=f;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=S(D)}function h(D,S){this.h=S;for(var R=[],P=!0,O=D.length-1;0<=O;O--){var x=D[O]|0;P&&x==S||(R[O]=x,P=!1)}this.g=R}var f={};function g(D){return-128<=D&&128>D?l(D,function(S){return new h([S|0],0>S?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return B(_(-D));for(var S=[],R=1,P=0;D>=R;P++)S[P]=D/R|0,R*=4294967296;return new h(S,0)}function w(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return B(w(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(S,8)),P=T,O=0;O<D.length;O+=8){var x=Math.min(8,D.length-O),A=parseInt(D.substring(O,O+x),S);8>x?(x=_(Math.pow(S,x)),P=P.j(x).add(_(A))):(P=P.j(R),P=P.add(_(A)))}return P}var T=g(0),k=g(1),U=g(16777216);r=h.prototype,r.m=function(){if(K(this))return-B(this).m();for(var D=0,S=1,R=0;R<this.g.length;R++){var P=this.i(R);D+=(0<=P?P:4294967296+P)*S,S*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if($(this))return"0";if(K(this))return"-"+B(this).toString(D);for(var S=_(Math.pow(D,6)),R=this,P="";;){var O=ve(R,S).g;R=he(R,O.j(S));var x=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=O,$(R))return x+P;for(;6>x.length;)x="0"+x;P=x+P}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function $(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function K(D){return D.h==-1}r.l=function(D){return D=he(this,D),K(D)?-1:$(D)?0:1};function B(D){for(var S=D.g.length,R=[],P=0;P<S;P++)R[P]=~D.g[P];return new h(R,~D.h).add(k)}r.abs=function(){return K(this)?B(this):this},r.add=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],P=0,O=0;O<=S;O++){var x=P+(this.i(O)&65535)+(D.i(O)&65535),A=(x>>>16)+(this.i(O)>>>16)+(D.i(O)>>>16);P=A>>>16,x&=65535,A&=65535,R[O]=A<<16|x}return new h(R,R[R.length-1]&-2147483648?-1:0)};function he(D,S){return D.add(B(S))}r.j=function(D){if($(this)||$(D))return T;if(K(this))return K(D)?B(this).j(B(D)):B(B(this).j(D));if(K(D))return B(this.j(B(D)));if(0>this.l(U)&&0>D.l(U))return _(this.m()*D.m());for(var S=this.g.length+D.g.length,R=[],P=0;P<2*S;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<D.g.length;O++){var x=this.i(P)>>>16,A=this.i(P)&65535,rt=D.i(O)>>>16,Ot=D.i(O)&65535;R[2*P+2*O]+=A*Ot,ie(R,2*P+2*O),R[2*P+2*O+1]+=x*Ot,ie(R,2*P+2*O+1),R[2*P+2*O+1]+=A*rt,ie(R,2*P+2*O+1),R[2*P+2*O+2]+=x*rt,ie(R,2*P+2*O+2)}for(P=0;P<S;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=S;P<2*S;P++)R[P]=0;return new h(R,0)};function ie(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function fe(D,S){this.g=D,this.h=S}function ve(D,S){if($(S))throw Error("division by zero");if($(D))return new fe(T,T);if(K(D))return S=ve(B(D),S),new fe(B(S.g),B(S.h));if(K(S))return S=ve(D,B(S)),new fe(B(S.g),S.h);if(30<D.g.length){if(K(D)||K(S))throw Error("slowDivide_ only works with positive integers.");for(var R=k,P=S;0>=P.l(D);)R=be(R),P=be(P);var O=Te(R,1),x=Te(P,1);for(P=Te(P,2),R=Te(R,2);!$(P);){var A=x.add(P);0>=A.l(D)&&(O=O.add(R),x=A),P=Te(P,1),R=Te(R,1)}return S=he(D,O.j(S)),new fe(O,S)}for(O=T;0<=D.l(S);){for(R=Math.max(1,Math.floor(D.m()/S.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),x=_(R),A=x.j(S);K(A)||0<A.l(D);)R-=P,x=_(R),A=x.j(S);$(x)&&(x=k),O=O.add(x),D=he(D,A)}return new fe(O,D)}r.A=function(D){return ve(this,D).h},r.and=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],P=0;P<S;P++)R[P]=this.i(P)&D.i(P);return new h(R,this.h&D.h)},r.or=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],P=0;P<S;P++)R[P]=this.i(P)|D.i(P);return new h(R,this.h|D.h)},r.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],P=0;P<S;P++)R[P]=this.i(P)^D.i(P);return new h(R,this.h^D.h)};function be(D){for(var S=D.g.length+1,R=[],P=0;P<S;P++)R[P]=D.i(P)<<1|D.i(P-1)>>>31;return new h(R,D.h)}function Te(D,S){var R=S>>5;S%=32;for(var P=D.g.length-R,O=[],x=0;x<P;x++)O[x]=0<S?D.i(x+R)>>>S|D.i(x+R+1)<<32-S:D.i(x+R);return new h(O,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Iv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ei=h}).apply(typeof vy<"u"?vy:typeof self<"u"?self:typeof window<"u"?window:{});var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sv,Ha,Av,Qu,Xd,kv,Rv,Cv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ju=="object"&&ju];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var b=u[E];if(!(b in y))break e;y=y[b]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,b={next:function(){if(!E&&y<u.length){var j=y++;return{value:p(j,u[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,E),u.apply(p,b)}}return function(){return u.apply(p,arguments)}}function k(u,p,y){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,k.apply(null,arguments)}function U(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function $(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,b,j){for(var J=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)J[Ue-2]=arguments[Ue];return p.prototype[b].apply(E,J)}}function K(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function B(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const b=u.length||0,j=E.length||0;u.length=b+j;for(let J=0;J<j;J++)u[b+J]=E[J]}else u.push(E)}}class he{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ie(u){return/^[\s\xa0]*$/.test(u)}function fe(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ve(u){return ve[" "](u),u}ve[" "]=function(){};var be=fe().indexOf("Gecko")!=-1&&!(fe().toLowerCase().indexOf("webkit")!=-1&&fe().indexOf("Edge")==-1)&&!(fe().indexOf("Trident")!=-1||fe().indexOf("MSIE")!=-1)&&fe().indexOf("Edge")==-1;function Te(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function D(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function S(u){const p={};for(const y in u)p[y]=u[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,p){let y,E;for(let b=1;b<arguments.length;b++){E=arguments[b];for(y in E)u[y]=E[y];for(let j=0;j<R.length;j++)y=R[j],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function O(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function x(u){f.setTimeout(()=>{throw u},0)}function A(){var u=de;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class rt{constructor(){this.h=this.g=null}add(p,y){const E=Ot.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Ot=new he(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Z=!1,de=new rt,re=()=>{const u=f.Promise.resolve(void 0);je=()=>{u.then(V)}};var V=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){x(y)}var p=Ot;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Z=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Ae(u,p){if(ce.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(be){e:{try{ve(p.nodeName);var b=!0;break e}catch{}b=!1}b||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}$(Ae,ce);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function qe(u,p,y,E,b){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=b,this.key=++Me,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fr(u){this.src=u,this.g={},this.h=0}fr.prototype.add=function(u,p,y,E,b){var j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);var J=$r(u,p,E,b);return-1<J?(p=u[J],y||(p.fa=!1)):(p=new qe(p,this.src,j,!!E,b),p.fa=y,u.push(p)),p};function As(u,p){var y=p.type;if(y in u.g){var E=u.g[y],b=Array.prototype.indexOf.call(E,p,void 0),j;(j=0<=b)&&Array.prototype.splice.call(E,b,1),j&&(vt(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function $r(u,p,y,E){for(var b=0;b<u.length;++b){var j=u[b];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==E)return b}return-1}var Vi="closure_lm_"+(1e6*Math.random()|0),ks={};function Go(u,p,y,E,b){if(Array.isArray(p)){for(var j=0;j<p.length;j++)Go(u,p[j],y,E,b);return null}return y=Xo(y),u&&u[Le]?u.K(p,y,_(E)?!!E.capture:!1,b):Qo(u,p,y,!1,E,b)}function Qo(u,p,y,E,b,j){if(!p)throw Error("Invalid event type");var J=_(b)?!!b.capture:!!b,Ue=Cs(u);if(Ue||(u[Vi]=Ue=new fr(u)),y=Ue.add(p,y,E,J,j),y.proxy)return y;if(E=Il(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ie||(b=J),b===void 0&&(b=!1),u.addEventListener(p.toString(),E,b);else if(u.attachEvent)u.attachEvent(mr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Il(){function u(y){return p.call(u.src,u.listener,y)}const p=Yo;return u}function Rs(u,p,y,E,b){if(Array.isArray(p))for(var j=0;j<p.length;j++)Rs(u,p[j],y,E,b);else E=_(E)?!!E.capture:!!E,y=Xo(y),u&&u[Le]?(u=u.i,p=String(p).toString(),p in u.g&&(j=u.g[p],y=$r(j,y,E,b),-1<y&&(vt(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete u.g[p],u.h--)))):u&&(u=Cs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=$r(p,y,E,b)),(y=-1<u?p[u]:null)&&pr(y))}function pr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Le])As(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(mr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Cs(p))?(As(y,u),y.h==0&&(y.src=null,p[Vi]=null)):vt(u)}}}function mr(u){return u in ks?ks[u]:ks[u]="on"+u}function Yo(u,p){if(u.da)u=!0;else{p=new Ae(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&pr(u),u=y.call(E,p)}return u}function Cs(u){return u=u[Vi],u instanceof fr?u:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xo(u){return typeof u=="function"?u:(u[Ps]||(u[Ps]=function(p){return u.handleEvent(p)}),u[Ps])}function ft(){H.call(this),this.i=new fr(this),this.M=this,this.F=null}$(ft,H),ft.prototype[Le]=!0,ft.prototype.removeEventListener=function(u,p,y,E){Rs(this,u,p,y,E)};function pt(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new ce(p,u);else if(p instanceof ce)p.target=p.target||u;else{var b=p;p=new ce(E,u),P(p,b)}if(b=!0,y)for(var j=y.length-1;0<=j;j--){var J=p.g=y[j];b=gr(J,E,!0,p)&&b}if(J=p.g=u,b=gr(J,E,!0,p)&&b,b=gr(J,E,!1,p)&&b,y)for(j=0;j<y.length;j++)J=p.g=y[j],b=gr(J,E,!1,p)&&b}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)vt(y[E]);delete u.g[p],u.h--}}this.F=null},ft.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},ft.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function gr(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var b=!0,j=0;j<p.length;++j){var J=p[j];if(J&&!J.da&&J.capture==y){var Ue=J.listener,mt=J.ha||J.src;J.fa&&As(u.i,J),b=Ue.call(mt,E)!==!1&&b}}return b&&!E.defaultPrevented}function Jo(u,p,y){if(typeof u=="function")y&&(u=k(u,y));else if(u&&typeof u.handleEvent=="function")u=k(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function qr(u){u.g=Jo(()=>{u.g=null,u.i&&(u.i=!1,qr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class xi extends H{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:qr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(u){H.call(this),this.h=u,this.g={}}$(bi,H);var Zo=[];function ea(u){Te(u.g,function(p,y){this.g.hasOwnProperty(y)&&pr(p)},u),u.g={}}bi.prototype.N=function(){bi.aa.N.call(this),ea(this)},bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ta=f.JSON.stringify,na=f.JSON.parse,ra=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Li(){}Li.prototype.h=null;function Ns(u){return u.h||(u.h=u.i())}function Ds(){}var fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){ce.call(this,"d")}$(Kn,ce);function Os(){ce.call(this,"c")}$(Os,ce);var Gn={},ia=null;function Mi(){return ia=ia||new ft}Gn.La="serverreachability";function sa(u){ce.call(this,Gn.La,u)}$(sa,ce);function yr(u){const p=Mi();pt(p,new sa(p))}Gn.STAT_EVENT="statevent";function oa(u,p){ce.call(this,Gn.STAT_EVENT,u),this.stat=p}$(oa,ce);function it(u){const p=Mi();pt(p,new oa(p,u))}Gn.Ma="timingevent";function Vs(u,p){ce.call(this,Gn.Ma,u),this.size=p}$(Vs,ce);function Rn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Fi(){this.g=!0}Fi.prototype.xa=function(){this.g=!1};function Ui(u,p,y,E,b,j){u.info(function(){if(u.g)if(j)for(var J="",Ue=j.split("&"),mt=0;mt<Ue.length;mt++){var De=Ue[mt].split("=");if(1<De.length){var wt=De[0];De=De[1];var lt=wt.split("_");J=2<=lt.length&&lt[1]=="type"?J+(wt+"="+De+"&"):J+(wt+"=redacted&")}}else J=null;else J=j;return"XMLHTTP REQ ("+E+") [attempt "+b+"]: "+p+`
`+y+`
`+J})}function xs(u,p,y,E,b,j,J){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+b+"]: "+p+`
`+y+`
`+j+" "+J})}function Cn(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Gc(u,y)+(E?" "+E:"")})}function aa(u,p){u.info(function(){return"TIMEOUT: "+p})}Fi.prototype.info=function(){};function Gc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var b=E[1];if(Array.isArray(b)&&!(1>b.length)){var j=b[0];if(j!="noop"&&j!="stop"&&j!="close")for(var J=1;J<b.length;J++)b[J]=""}}}}return ta(y)}catch{return p}}var bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pn;function ji(){}$(ji,Li),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Pn=new ji;function Nn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Al}function Al(){this.i=null,this.g="",this.h=!1}var la={},Ls={};function Ms(u,p,y){u.L=1,u.v=Qr(on(p)),u.m=y,u.P=!0,ua(u,null)}function ua(u,p){u.F=Date.now(),He(u),u.A=on(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Xr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new Al,u.g=$l(u.j,y?p:null,!u.m),0<u.O&&(u.M=new xi(k(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var b="readystatechange";Array.isArray(b)||(b&&(Zo[0]=b.toString()),b=Zo);for(var j=0;j<b.length;j++){var J=Go(y,b[j],E||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),yr(),Ui(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Qt(u)==3?p.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Qt(this.g);var p=this.g.Ba();const gn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ma(this.g)))){this.J||lt!=4||p==7||(p==8||0>=gn?yr(3):yr(2)),zi(this);var y=this.g.Z();this.X=y;t:if(kl(this)){var E=ma(this.g);u="";var b=E.length,j=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),Hr(this);var J="";break t}this.h.i=new f.TextDecoder}for(p=0;p<b;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(j&&p==b-1)});E.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,xs(this.i,this.u,this.A,this.l,this.R,lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,mt=this.g;if((Ue=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Ue)){var De=Ue;break t}}De=null}if(y=De)Cn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ca(this,y);else{this.o=!1,this.s=3,it(12),pn(this),Hr(this);break e}}if(this.P){y=!0;let ln;for(;!this.J&&this.C<J.length;)if(ln=Qc(this,J),ln==Ls){lt==4&&(this.s=4,it(14),y=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==la){this.s=4,it(15),Cn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Cn(this.i,this.l,ln,null),ca(this,ln);if(kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||J.length!=0||this.h.h||(this.s=1,it(16),y=!1),this.o=this.o&&y,!y)Cn(this.i,this.l,J,"[Invalid Chunked Response]"),pn(this),Hr(this);else if(0<J.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),ya(wt),wt.M=!0,it(11))}}else Cn(this.i,this.l,J,null),ca(this,J);lt==4&&pn(this),this.o&&!this.J&&(lt==4?Gs(this.j,this):(this.o=!1,He(this)))}else $s(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),pn(this),Hr(this)}}}catch{}finally{}};function kl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Qc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?Ls:(y=Number(p.substring(y,E)),isNaN(y)?la:(E+=1,E+y>p.length?Ls:(p=p.slice(E,E+y),u.C=E+y,p)))}Nn.prototype.cancel=function(){this.J=!0,pn(this)};function He(u){u.S=Date.now()+u.I,Rl(u,u.I)}function Rl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(k(u.ba,u),p)}function zi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(aa(this.i,this.A),this.L!=2&&(yr(),it(17)),pn(this),this.s=2,Hr(this)):Rl(this,this.S-u)};function Hr(u){u.j.G==0||u.J||Gs(u.j,u)}function pn(u){zi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ea(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ca(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||$t(y.h,u))){if(!u.K&&$t(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var b=E;if(b[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ks(y),bn(y);else break e;Ws(y),it(18)}}else y.za=b[1],0<y.za-y.T&&37500>b[2]&&y.F&&y.v==0&&!y.C&&(y.C=Rn(k(y.Za,y),6e3));if(1>=Pl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Tr(y,11)}else if((u.K||y.g==u)&&Ks(y),!ie(p))for(b=y.Da.g.parse(p),p=0;p<b.length;p++){let De=b[p];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const wt=De[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const lt=De[4];lt!=null&&(y.Aa=lt,y.j.info("SVER="+y.Aa));const gn=De[5];gn!=null&&typeof gn=="number"&&0<gn&&(E=1.5*gn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const ln=u.g;if(ln){const Gi=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var j=E.h;j.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ha(j,j.h),j.h=null))}if(E.D){const Ys=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Ys&&(E.ya=Ys,Be(E.I,E.D,Ys))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=u;if(E.qa=Bl(E,E.J?E.ia:null,E.W),J.K){Nl(E.h,J);var Ue=J,mt=E.L;mt&&(Ue.I=mt),Ue.B&&(zi(Ue),He(Ue)),E.g=J}else Ki(E);0<y.i.length&&Jn(y)}else De[0]!="stop"&&De[0]!="close"||Tr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Tr(y,7):kt(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}yr(4)}catch{}}var Cl=class{constructor(u,p){this.g=u,this.map=p}};function Bi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Pl(u){return u.h?1:u.g?u.g.size:0}function $t(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ha(u,p){u.g?u.g.add(p):u.h=p}function Nl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Bi.prototype.cancel=function(){if(this.i=Dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Dl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return K(u.i)}function Fs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Us(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function Wr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Us(u),E=Fs(u),b=E.length,j=0;j<b;j++)p.call(void 0,E[j],y&&y[j],u)}var $i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),b=null;if(0<=E){var j=u[y].substring(0,E);b=u[y].substring(E+1)}else j=u[y];p(j,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,qi(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var p=u.i,y=new Qn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Gr(this,y),this.m=u.m}else u&&(p=String(u).match($i))?(this.h=!1,qi(this,p[1]||"",!0),this.o=Pe(p[2]||""),this.g=Pe(p[3]||"",!0),Kr(this,p[4]),this.l=Pe(p[5]||"",!0),Gr(this,p[6]||"",!0),this.m=Pe(p[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}_r.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Yr(p,js,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Yr(p,js,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Yr(y,y.charAt(0)=="/"?xl:Vl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Yr(y,da)),u.join("")};function on(u){return new _r(u)}function qi(u,p,y){u.j=y?Pe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Gr(u,p,y){p instanceof Qn?(u.i=p,Yn(u.i,u.h)):(y||(p=Yr(p,bl)),u.i=new Qn(p,u.h))}function Be(u,p,y){u.i.set(p,y)}function Qr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Pe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Ol),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ol(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var js=/[#\/\?@]/g,Vl=/[#\?:]/g,xl=/[#\?]/g,bl=/[#\?@]/g,da=/#/g;function Qn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&Yc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Qn.prototype,r.add=function(u,p){At(this),this.i=null,u=mn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Dn(u,p){At(u),p=mn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return At(u),p=mn(u,p),u.g.has(p)}r.forEach=function(u,p){At(this),this.g.forEach(function(y,E){y.forEach(function(b){u.call(p,b,E,this)},this)},this)},r.na=function(){At(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const b=u[E];for(let j=0;j<b.length;j++)y.push(p[E])}return y},r.V=function(u){At(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(mn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return At(this),this.i=null,u=mn(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Xr(u,p,y){Dn(u,p),0<y.length&&(u.i=null,u.g.set(mn(u,p),K(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const j=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var b=j;J[E]!==""&&(b+="="+encodeURIComponent(String(J[E]))),u.push(b)}}return this.i=u.join("&")};function mn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Yn(u,p){p&&!u.j&&(At(u),u.i=null,u.g.forEach(function(y,E){var b=E.toLowerCase();E!=b&&(Dn(this,E),Xr(this,b,y))},u)),u.j=p}function Xc(u,p){const y=new Fi;if(f.Image){const E=new Image;E.onload=U(Gt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=U(Gt,y,"TestLoadImage: error",!1,p,E),E.onabort=U(Gt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=U(Gt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Ll(u,p){const y=new Fi,E=new AbortController,b=setTimeout(()=>{E.abort(),Gt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(j=>{clearTimeout(b),j.ok?Gt(y,"TestPingServer: ok",!0,p):Gt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(b),Gt(y,"TestPingServer: error",!1,p)})}function Gt(u,p,y,E,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),E(y)}catch{}}function Jc(){this.g=new ra}function Ml(u,p,y){const E=y||"";try{Wr(u,function(b,j){let J=b;_(b)&&(J=ta(b)),p.push(E+j+"="+encodeURIComponent(J))})}catch(b){throw p.push(E+"type="+encodeURIComponent("_badmap")),b}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(vr,Li),vr.prototype.g=function(){return new Hi(this.l,this.j)},vr.prototype.i=(function(u){return function(){return u}})({});function Hi(u,p){ft.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Hi,ft),r=Hi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,xn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Vn(this):xn(this),this.readyState==3&&Fl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},r.Qa=function(u){this.g&&(this.response=u,Vn(this))},r.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,xn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function xn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let p="";return Te(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Jr(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=wr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Be(u,p,y))}function Ye(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Ye,ft);var Zc=/^https?$/i,fa=["POST","PUT"];r=Ye.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pn.g(),this.v=this.o?Ns(this.o):Ns(Pn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(j){Wi(this,j);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var b in E)y.set(b,E[b]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),b=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(fa,p,void 0))||E||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of y)this.g.setRequestHeader(j,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bs(this),this.u=!0,this.g.send(u),this.u=!1}catch(j){Wi(this,j)}};function Wi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,zs(u),an(u)}function zs(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),an(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Ye.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?pa(this):this.bb())},r.bb=function(){pa(this)};function pa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Qt(u)!=4||u.Z()!=2)){if(u.u&&Qt(u)==4)Jo(u.Ea,0,u);else if(pt(u,"readystatechange"),Qt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=J===0){var b=String(u.D).match($i)[1]||null;!b&&f.self&&f.self.location&&(b=f.self.location.protocol.slice(0,-1)),E=!Zc.test(b?b.toLowerCase():"")}y=E}if(y)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var j=2<Qt(u)?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.Z()+"]",zs(u)}}finally{an(u)}}}}function an(u,p){if(u.g){Bs(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||pt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Bs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Qt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),na(p)}};function ma(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function $s(u){const p={};u=(u.g&&2<=Qt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ie(u[E]))continue;var y=O(u[E]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[b]||[];p[b]=j,j.push(y)}D(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function ga(u){this.Aa=0,this.i=[],this.j=new Fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(u&&u.concurrentRequestLimit),this.Da=new Jc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ga.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){it(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Bl(this,null,this.W),Jn(this)};function kt(u){if(qs(u),u.G==3){var p=u.U++,y=on(u.I);if(Be(y,"SID",u.K),Be(y,"RID",p),Be(y,"TYPE","terminate"),Er(u,y),p=new Nn(u,u.j,p),p.L=2,p.v=Qr(on(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=$l(p.j,null),p.g.ea(p.v)),p.F=Date.now(),He(p)}zl(u)}function bn(u){u.g&&(ya(u),u.g.cancel(),u.g=null)}function qs(u){bn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ks(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Jn(u){if(!sn(u.h)&&!u.s){u.s=!0;var p=u.Ga;je||re(),Z||(je(),Z=!0),de.add(p,u),u.B=0}}function eh(u,p){return Pl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(k(u.Ga,u,p),jl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const b=new Nn(this,this.j,u);let j=this.o;if(this.S&&(j?(j=S(j),P(j,this.S)):j=this.S),this.m!==null||this.O||(b.H=j,j=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Zr(this,b,p),y=on(this.I),Be(y,"RID",u),Be(y,"CVER",22),this.D&&Be(y,"X-HTTP-Session-Id",this.D),Er(this,y),j&&(this.O?p="headers="+encodeURIComponent(String(wr(j)))+"&"+p:this.m&&Jr(y,this.m,j)),ha(this.h,b),this.Ua&&Be(y,"TYPE","init"),this.P?(Be(y,"$req",p),Be(y,"SID","null"),b.T=!0,Ms(b,y,null)):Ms(b,y,p),this.G=2}}else this.G==3&&(u?Hs(this,u):this.i.length==0||sn(this.h)||Hs(this))};function Hs(u,p){var y;p?y=p.l:y=u.U++;const E=on(u.I);Be(E,"SID",u.K),Be(E,"RID",y),Be(E,"AID",u.T),Er(u,E),u.m&&u.o&&Jr(E,u.m,u.o),y=new Nn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Zr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ha(u.h,y),Ms(y,E,p)}function Er(u,p){u.H&&Te(u.H,function(y,E){Be(p,E,y)}),u.l&&Wr({},function(y,E){Be(p,E,y)})}function Zr(u,p,y){y=Math.min(u.i.length,y);var E=u.l?k(u.l.Na,u.l,u):null;e:{var b=u.i;let j=-1;for(;;){const J=["count="+y];j==-1?0<y?(j=b[0].g,J.push("ofs="+j)):j=0:J.push("ofs="+j);let Ue=!0;for(let mt=0;mt<y;mt++){let De=b[mt].g;const wt=b[mt].map;if(De-=j,0>De)j=Math.max(0,b[mt].g-100),Ue=!1;else try{Ml(wt,J,"req"+De+"_")}catch{E&&E(wt)}}if(Ue){E=J.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function Ki(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;je||re(),Z||(je(),Z=!0),de.add(p,u),u.v=0}}function Ws(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(k(u.Fa,u),jl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(k(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),bn(this),Ul(this))};function ya(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ul(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=on(u.qa);Be(p,"RID","rpc"),Be(p,"SID",u.K),Be(p,"AID",u.T),Be(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(p,"TO",u.ja),Be(p,"TYPE","xmlhttp"),Er(u,p),u.m&&u.o&&Jr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Qr(on(p)),y.m=null,y.P=!0,ua(y,u)}r.Za=function(){this.C!=null&&(this.C=null,bn(this),Ws(this),it(19))};function Ks(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Gs(u,p){var y=null;if(u.g==p){Ks(u),ya(u),u.g=null;var E=2}else if($t(u.h,p))y=p.D,Nl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var b=u.B;E=Mi(),pt(E,new Vs(E,y)),Jn(u)}else Ki(u);else if(b=p.s,b==3||b==0&&0<p.X||!(E==1&&eh(u,p)||E==2&&Ws(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),b){case 1:Tr(u,5);break;case 4:Tr(u,10);break;case 3:Tr(u,6);break;default:Tr(u,2)}}}function jl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Tr(u,p){if(u.j.info("Error code "+p),p==2){var y=k(u.fb,u),E=u.Xa;const b=!E;E=new _r(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||qi(E,"https"),Qr(E),b?Xc(E.toString(),y):Ll(E.toString(),y)}else it(2);u.G=0,u.l&&u.l.sa(p),zl(u),qs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function zl(u){if(u.G=0,u.ka=[],u.l){const p=Dl(u.h);(p.length!=0||u.i.length!=0)&&(B(u.ka,p),B(u.ka,u.i),u.h.i.length=0,K(u.i),u.i.length=0),u.l.ra()}}function Bl(u,p,y){var E=y instanceof _r?on(y):new _r(y);if(E.g!="")p&&(E.g=p+"."+E.g),Kr(E,E.s);else{var b=f.location;E=b.protocol,p=p?p+"."+b.hostname:b.hostname,b=+b.port;var j=new _r(null);E&&qi(j,E),p&&(j.g=p),b&&Kr(j,b),y&&(j.l=y),E=j}return y=u.D,p=u.ya,y&&p&&Be(E,y,p),Be(E,"VER",u.la),Er(u,E),E}function $l(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ye(new vr({eb:y})):new Ye(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function _a(){}r=_a.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Qs(){}Qs.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){ft.call(this),this.g=new ga(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ie(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ie(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Zn(this)}$(qt,ft),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){kt(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=ta(u),u=y);p.i.push(new Cl(p.Ya++,u)),p.G==3&&Jn(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,qt.aa.N.call(this)};function ql(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}$(ql,Kn);function Hl(){Os.call(this),this.status=1}$(Hl,Os);function Zn(u){this.g=u}$(Zn,_a),Zn.prototype.ua=function(){pt(this.g,"a")},Zn.prototype.ta=function(u){pt(this.g,new ql(u))},Zn.prototype.sa=function(u){pt(this.g,new Hl)},Zn.prototype.ra=function(){pt(this.g,"b")},Qs.prototype.createWebChannel=Qs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Cv=function(){return new Qs},Rv=function(){return Mi()},kv=Gn,Xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bs.NO_ERROR=0,bs.TIMEOUT=8,bs.HTTP_ERROR=6,Qu=bs,Sl.COMPLETE="complete",Av=Sl,Ds.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Ha=Ds,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Sv=Ye}).apply(typeof ju<"u"?ju:typeof self<"u"?self:typeof window<"u"?window:{});const wy="@firebase/firestore",Ey="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Bo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new yf("@firebase/firestore");function _o(){return ps.logLevel}function ne(r,...e){if(ps.logLevel<=Re.DEBUG){const t=e.map(Df);ps.debug(`Firestore (${Bo}): ${r}`,...t)}}function jr(r,...e){if(ps.logLevel<=Re.ERROR){const t=e.map(Df);ps.error(`Firestore (${Bo}): ${r}`,...t)}}function Ii(r,...e){if(ps.logLevel<=Re.WARN){const t=e.map(Df);ps.warn(`Firestore (${Bo}): ${r}`,...t)}}function Df(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Pv(r,s,t)}function Pv(r,e,t){let s=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw jr(s),new Error(s)}function Fe(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||Pv(e,o,s)}function Ee(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class zS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class BS{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new hs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new hs,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new hs)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new Nv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class $S{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new $S(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ty{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,In(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ty(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ty(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Dv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=WS(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Se(r,e){return r<e?-1:r>e?1:0}function Jd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const l=Dv(),h=KS(l.encode(Iy(r,t)),l.encode(Iy(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(r.length,e.length)}function Iy(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function KS(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Se(r[t],e[t]);return Se(r.length,e.length)}function Po(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="__name__";class ir{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ir.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Se(e.length,t.length)}static compareSegments(e,t){const s=ir.isNumericId(e),o=ir.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):Jd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ei.fromString(e.substring(4,e.length-2))}}class $e extends ir{construct(e,t,s){return new $e(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new $e(t)}static emptyPath(){return new $e([])}}const GS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends ir{construct(e,t,s){return new Nt(e,t,s)}static isValidIdentifier(e){return GS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sy}static keyField(){return new Nt([Sy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ee(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ee(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue($e.fromString(e))}static fromName(e){return new ue($e.fromString(e).popFirst(5))}static empty(){return new ue($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return $e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new $e(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(r,e,t){if(!t)throw new ee(z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function QS(r,e,t,s){if(e===!0&&s===!0)throw new ee(z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ay(r){if(!ue.isDocumentKey(r))throw new ee(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ky(r){if(ue.isDocumentKey(r))throw new ee(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Vv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Rc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ye(12329,{type:typeof r})}function Lr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ee(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rc(r);throw new ee(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function dt(r,e){const t={typeString:r};return e&&(t.value=e),t}function gl(r,e){if(!Vv(r))throw new ee(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ee(z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=-62135596800,Cy=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Cy);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ry)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cy}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ry;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:dt("string",Qe._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Qe(0,0))}static max(){return new we(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const rl=-1;function YS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new Si(o,ue.empty(),e)}function XS(r){return new Si(r.readTime,r.key,rl)}class Si{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Si(we.min(),ue.empty(),rl)}static max(){return new Si(we.max(),ue.empty(),rl)}}function JS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(r.documentKey,e.documentKey),t!==0?t:Se(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(r){if(r.code!==z.FAILED_PRECONDITION||r.message!==ZS)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++f,f===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new q(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function tA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Cc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=-1;function Pc(r){return r==null}function uc(r){return r===0&&1/r==-1/0}function nA(r){return typeof r=="number"&&Number.isInteger(r)&&!uc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="";function rA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Py(e)),e=iA(r.get(t),e);return Py(e)}function iA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case xv:t+="";break;default:t+=l}}return t}function Py(r){return r+xv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Di(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function bv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zu(this.root,e,this.comparator,!0)}}class zu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(e){return new Dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class Dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new dn([])}unionWith(e){let t=new _t(Nt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new dn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Lv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Lv("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const sA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=sA.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ki(r){return typeof r=="string"?Dt.fromBase64String(r):Dt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="server_timestamp",Fv="__type__",Uv="__previous_value__",jv="__local_write_time__";function Nc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fv])===null||t===void 0?void 0:t.stringValue)===Mv}function Dc(r){const e=r.mapValue.fields[Uv];return Nc(e)?Dc(e):e}function il(r){const e=Ai(r.mapValue.fields[jv].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t,s,o,l,h,f,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const cc="(default)";class sl{constructor(e,t){this.projectId=e,this.database=t||cc}static empty(){return new sl("","")}get isDefaultDatabase(){return this.database===cc}isEqual(e){return e instanceof sl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="__type__",aA="__max__",Bu={mapValue:{}},Bv="__vector__",hc="value";function Ri(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Nc(r)?4:uA(r)?9007199254740991:lA(r)?10:11:ye(28295,{value:r})}function hr(r,e){if(r===e)return!0;const t=Ri(r);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return il(r).isEqual(il(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ai(o.timestampValue),f=Ai(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return ki(o.bytesValue).isEqual(ki(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ot(o.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ot(o.integerValue)===ot(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ot(o.doubleValue),f=ot(l.doubleValue);return h===f?uc(h)===uc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Po(r.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Ny(h)!==Ny(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!hr(h[g],f[g])))return!1;return!0})(r,e);default:return ye(52216,{left:r})}}function ol(r,e){return(r.values||[]).find((t=>hr(t,e)))!==void 0}function No(r,e){if(r===e)return 0;const t=Ri(r),s=Ri(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ot(l.integerValue||l.doubleValue),g=ot(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return Oy(r.timestampValue,e.timestampValue);case 4:return Oy(il(r),il(e));case 5:return Jd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=ki(l),g=ki(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=Se(f[_],g[_]);if(w!==0)return w}return Se(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Se(ot(l.latitude),ot(h.latitude));return f!==0?f:Se(ot(l.longitude),ot(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Vy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,w;const T=l.fields||{},k=h.fields||{},U=(f=T[hc])===null||f===void 0?void 0:f.arrayValue,$=(g=k[hc])===null||g===void 0?void 0:g.arrayValue,K=Se(((_=U==null?void 0:U.values)===null||_===void 0?void 0:_.length)||0,((w=$==null?void 0:$.values)===null||w===void 0?void 0:w.length)||0);return K!==0?K:Vy(U,$)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Bu.mapValue&&h===Bu.mapValue)return 0;if(l===Bu.mapValue)return 1;if(h===Bu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const k=Jd(g[T],w[T]);if(k!==0)return k;const U=No(f[g[T]],_[w[T]]);if(U!==0)return U}return Se(g.length,w.length)})(r.mapValue,e.mapValue);default:throw ye(23264,{le:t})}}function Oy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Se(r,e);const t=Ai(r),s=Ai(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function Vy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=No(t[o],s[o]);if(l)return l}return Se(t.length,s.length)}function Do(r){return Zd(r)}function Zd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ai(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ki(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ue.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Zd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Zd(t.fields[h])}`;return o+"}"})(r.mapValue):ye(61005,{value:r})}function Yu(r){switch(Ri(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dc(r);return e?16+Yu(e):16;case 5:return 2*r.stringValue.length;case 6:return ki(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Yu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Di(s.fields,((l,h)=>{o+=l.length+Yu(h)})),o})(r.mapValue);default:throw ye(13486,{value:r})}}function dc(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ef(r){return!!r&&"integerValue"in r}function xf(r){return!!r&&"arrayValue"in r}function xy(r){return!!r&&"nullValue"in r}function by(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Xu(r){return!!r&&"mapValue"in r}function lA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[zv])===null||t===void 0?void 0:t.stringValue)===Bv}function Xa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Di(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Xa(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xa(r.arrayValue.values[t]);return e}return Object.assign({},r)}function uA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===aA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Xu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xa(t)}setAll(e){let t=Nt.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Xa(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Xu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Xu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Di(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new rn(Xa(this.value))}}function $v(r){const e=[];return Di(r.fields,((t,s)=>{const o=new Nt([t]);if(Xu(s)){const l=$v(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new jt(e,0,we.min(),we.min(),we.min(),rn.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,we.min(),we.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,we.min(),we.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oo{constructor(e,t){this.position=e,this.inclusive=t}}function Ly(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=No(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function My(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!hr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class al{constructor(e,t="asc"){this.field=e,this.dir=t}}function cA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class qv{}class ht extends qv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new dA(e,t,s):t==="array-contains"?new mA(e,s):t==="in"?new gA(e,s):t==="not-in"?new yA(e,s):t==="array-contains-any"?new _A(e,s):new ht(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new fA(e,s):new pA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(No(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends qv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Wn(e,t)}matches(e){return Hv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Hv(r){return r.op==="and"}function Wv(r){return hA(r)&&Hv(r)}function hA(r){for(const e of r.filters)if(e instanceof Wn)return!1;return!0}function tf(r){if(r instanceof ht)return r.field.canonicalString()+r.op.toString()+Do(r.value);if(Wv(r))return r.filters.map((e=>tf(e))).join(",");{const e=r.filters.map((t=>tf(t))).join(",");return`${r.op}(${e})`}}function Kv(r,e){return r instanceof ht?(function(s,o){return o instanceof ht&&s.op===o.op&&s.field.isEqual(o.field)&&hr(s.value,o.value)})(r,e):r instanceof Wn?(function(s,o){return o instanceof Wn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&Kv(h,o.filters[f])),!0):!1})(r,e):void ye(19439)}function Gv(r){return r instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`})(r):r instanceof Wn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gv).join(" ,")+"}"})(r):"Filter"}class dA extends ht{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class fA extends ht{constructor(e,t){super(e,"in",t),this.keys=Qv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class pA extends ht{constructor(e,t){super(e,"not-in",t),this.keys=Qv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Qv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class mA extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xf(t)&&ol(t.arrayValue,this.value)}}class gA extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ol(this.value.arrayValue,t)}}class yA extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ol(this.value.arrayValue,t)}}class _A extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ol(this.value.arrayValue,s)))}}/**
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
 */class vA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Fy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new vA(r,e,t,s,o,l,h)}function bf(r){const e=Ee(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>tf(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Pc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Do(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Do(s))).join(",")),e.Pe=t}return e.Pe}function Lf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!cA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Kv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!My(r.startAt,e.startAt)&&My(r.endAt,e.endAt)}function nf(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function wA(r,e,t,s,o,l,h,f){return new Es(r,e,t,s,o,l,h,f)}function Mf(r){return new Es(r)}function Uy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ff(r){return r.collectionGroup!==null}function Ao(r){const e=Ee(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new _t(Nt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new al(l,s))})),t.has(Nt.keyField().canonicalString())||e.Te.push(new al(Nt.keyField(),s))}return e.Te}function or(r){const e=Ee(r);return e.Ie||(e.Ie=EA(e,Ao(r))),e.Ie}function EA(r,e){if(r.limitType==="F")return Fy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new al(o.field,l)}));const t=r.endAt?new Oo(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Oo(r.startAt.position,r.startAt.inclusive):null;return Fy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function rf(r,e){const t=r.filters.concat([e]);return new Es(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function fc(r,e,t){return new Es(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Oc(r,e){return Lf(or(r),or(e))&&r.limitType===e.limitType}function Yv(r){return`${bf(or(r))}|lt:${r.limitType}`}function vo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Gv(o))).join(", ")}]`),Pc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Do(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Do(o))).join(",")),`Target(${s})`})(or(r))}; limitType=${r.limitType})`}function Vc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ue.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Ao(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,g){const _=Ly(h,f,g);return h.inclusive?_<=0:_<0})(s.startAt,Ao(s),o)||s.endAt&&!(function(h,f,g){const _=Ly(h,f,g);return h.inclusive?_>=0:_>0})(s.endAt,Ao(s),o))})(r,e)}function TA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Xv(r){return(e,t)=>{let s=!1;for(const o of Ao(r)){const l=IA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function IA(r,e,t){const s=r.field.isKeyField()?ue.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?No(g,_):ye(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return bv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new tt(ue.comparator);function zr(){return SA}const Jv=new tt(ue.comparator);function Wa(...r){let e=Jv;for(const t of r)e=e.insert(t.key,t);return e}function Zv(r){let e=Jv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function us(){return Ja()}function ew(){return Ja()}function Ja(){return new Ts((r=>r.toString()),((r,e)=>r.isEqual(e)))}const AA=new tt(ue.comparator),kA=new _t(ue.comparator);function Ce(...r){let e=kA;for(const t of r)e=e.add(t);return e}const RA=new _t(Se);function CA(){return RA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function tw(r){return{integerValue:""+r}}function PA(r,e){return nA(e)?tw(e):Uf(r,e)}/**
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
 */class xc{constructor(){this._=void 0}}function NA(r,e,t){return r instanceof ll?(function(o,l){const h={fields:{[Fv]:{stringValue:Mv},[jv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Nc(l)&&(l=Dc(l)),l&&(h.fields[Uv]=l),{mapValue:h}})(t,e):r instanceof Vo?rw(r,e):r instanceof xo?iw(r,e):(function(o,l){const h=nw(o,l),f=jy(h)+jy(o.Ee);return ef(h)&&ef(o.Ee)?tw(f):Uf(o.serializer,f)})(r,e)}function DA(r,e,t){return r instanceof Vo?rw(r,e):r instanceof xo?iw(r,e):t}function nw(r,e){return r instanceof pc?(function(s){return ef(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class ll extends xc{}class Vo extends xc{constructor(e){super(),this.elements=e}}function rw(r,e){const t=sw(e);for(const s of r.elements)t.some((o=>hr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class xo extends xc{constructor(e){super(),this.elements=e}}function iw(r,e){let t=sw(e);for(const s of r.elements)t=t.filter((o=>!hr(o,s)));return{arrayValue:{values:t}}}class pc extends xc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function jy(r){return ot(r.integerValue||r.doubleValue)}function sw(r){return xf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.field=e,this.transform=t}}function OA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Vo&&o instanceof Vo||s instanceof xo&&o instanceof xo?Po(s.elements,o.elements,hr):s instanceof pc&&o instanceof pc?hr(s.Ee,o.Ee):s instanceof ll&&o instanceof ll})(r.transform,e.transform)}class VA{constructor(e,t){this.version=e,this.transformResults=t}}class qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class bc{}function ow(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new lw(r.key,qn.none()):new yl(r.key,r.data,qn.none());{const t=r.data,s=rn.empty();let o=new _t(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Oi(r.key,s,new dn(o.toArray()),qn.none())}}function xA(r,e,t){r instanceof yl?(function(o,l,h){const f=o.value.clone(),g=By(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Oi?(function(o,l,h){if(!Ju(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=By(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(aw(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Za(r,e,t,s){return r instanceof yl?(function(l,h,f,g){if(!Ju(l.precondition,h))return f;const _=l.value.clone(),w=$y(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Oi?(function(l,h,f,g){if(!Ju(l.precondition,h))return f;const _=$y(l.fieldTransforms,g,h),w=h.data;return w.setAll(aw(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,f){return Ju(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function bA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=nw(s.transform,o||null);l!=null&&(t===null&&(t=rn.empty()),t.set(s.field,l))}return t||null}function zy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Po(s,o,((l,h)=>OA(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class yl extends bc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Oi extends bc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function aw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function By(r,e,t){const s=new Map;Fe(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,DA(h,f,t[o]))}return s}function $y(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,NA(l,h,e))}return s}class lw extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LA extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&xA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Za(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Za(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ew();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=ow(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,((t,s)=>zy(t,s)))&&Po(this.baseMutations,e.baseMutations,((t,s)=>zy(t,s)))}}class zf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return AA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new zf(e,t,s,o)}}/**
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
 */class FA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class UA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Oe;function jA(r){switch(r){case z.OK:return ye(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ye(15467,{code:r})}}function uw(r){if(r===void 0)return jr("GRPC error has no .code"),z.UNKNOWN;switch(r){case ct.OK:return z.OK;case ct.CANCELLED:return z.CANCELLED;case ct.UNKNOWN:return z.UNKNOWN;case ct.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ct.INTERNAL:return z.INTERNAL;case ct.UNAVAILABLE:return z.UNAVAILABLE;case ct.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ct.NOT_FOUND:return z.NOT_FOUND;case ct.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ct.ABORTED:return z.ABORTED;case ct.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ct.DATA_LOSS:return z.DATA_LOSS;default:return ye(39323,{code:r})}}(Oe=ct||(ct={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const zA=new Ei([4294967295,4294967295],0);function qy(r){const e=Dv().encode(r),t=new Iv;return t.update(e),new Uint8Array(t.digest())}function Hy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ei([t,s],0),new Ei([o,l],0)]}class Bf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ka(`Invalid padding: ${t}`);if(s<0)throw new Ka(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ei.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(Ei.fromNumber(s)));return o.compare(zA)===1&&(o=new Ei([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=qy(e),[s,o]=Hy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Bf(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=qy(e),[s,o]=Hy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,_l.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Lc(we.min(),o,new tt(Se),zr(),Ce())}}class _l{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new _l(s,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class cw{constructor(e,t){this.targetId=e,this.De=t}}class hw{constructor(e,t,s=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Wy{constructor(){this.ve=0,this.Ce=Ky(),this.Fe=Dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ce(),t=Ce(),s=Ce();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:l})}})),new _l(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Ky()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class BA{constructor(e){this.We=e,this.Ge=new Map,this.ze=zr(),this.je=$u(),this.Je=$u(),this.He=new tt(Se)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(nf(l))if(s===0){const h=new ue(l.path);this.Xe(t,h,jt.newNoDocument(h,we.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=ki(s).toUint8Array()}catch(g){if(g instanceof Lv)return Ii("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Bf(h,o,l)}catch(g){return Ii(g instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&nf(f.target)){const g=new ue(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,jt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=Ce();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Lc(e,t,this.He,this.ze,s);return this.ze=zr(),this.je=$u(),this.Je=$u(),this.He=new tt(Se),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Wy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new _t(Se),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new _t(Se),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Wy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function $u(){return new tt(ue.comparator)}function Ky(){return new tt(ue.comparator)}const $A={asc:"ASCENDING",desc:"DESCENDING"},qA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HA={and:"AND",or:"OR"};class WA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sf(r,e){return r.useProto3Json||Pc(e)?e:{value:e}}function mc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function KA(r,e){return mc(r,e.toTimestamp())}function ar(r){return Fe(!!r,49232),we.fromTimestamp((function(t){const s=Ai(t);return new Qe(s.seconds,s.nanos)})(r))}function $f(r,e){return of(r,e).canonicalString()}function of(r,e){const t=(function(o){return new $e(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function fw(r){const e=$e.fromString(r);return Fe(_w(e),10190,{key:e.toString()}),e}function af(r,e){return $f(r.databaseId,e.path)}function Vd(r,e){const t=fw(e);if(t.get(1)!==r.databaseId.projectId)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ue(mw(t))}function pw(r,e){return $f(r.databaseId,e)}function GA(r){const e=fw(r);return e.length===4?$e.emptyPath():mw(e)}function lf(r){return new $e(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function mw(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Gy(r,e,t){return{name:af(r,e),fields:t.value.mapValue.fields}}function QA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const w=_.code===void 0?z.UNKNOWN:uw(_.code);return new ee(w,_.message||"")})(h);t=new hw(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Vd(r,s.document.name),l=ar(s.document.updateTime),h=s.document.createTime?ar(s.document.createTime):we.min(),f=new rn({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,l,h,f),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Zu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Vd(r,s.document),l=s.readTime?ar(s.readTime):we.min(),h=jt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Zu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Vd(r,s.document),l=s.removedTargetIds||[];t=new Zu([],l,o,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new UA(o,l),f=s.targetId;t=new cw(f,h)}}return t}function YA(r,e){let t;if(e instanceof yl)t={update:Gy(r,e.key,e.value)};else if(e instanceof lw)t={delete:af(r,e.key)};else if(e instanceof Oi)t={update:Gy(r,e.key,e.data),updateMask:sk(e.fieldMask)};else{if(!(e instanceof LA))return ye(16599,{Rt:e.type});t={verify:af(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const f=h.transform;if(f instanceof ll)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Vo)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof xo)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof pc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:KA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ye(27497)})(r,e.precondition)),t}function XA(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?ar(o.updateTime):ar(l);return h.isEqual(we.min())&&(h=ar(l)),new VA(h,o.transformResults||[])})(t,e)))):[]}function JA(r,e){return{documents:[pw(r,e.path)]}}function ZA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=pw(r,o);const l=(function(_){if(_.length!==0)return yw(Wn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(k){return{field:wo(k.field),direction:nk(k.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=sf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function ek(r){let e=GA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const k=gw(T);return k instanceof Wn&&Wv(k)?k.getFilters():[k]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((k=>(function($){return new al(Eo($.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(k)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let k;return k=typeof T=="object"?T.value:T,Pc(k)?null:k})(t.limit));let g=null;t.startAt&&(g=(function(T){const k=!!T.before,U=T.values||[];return new Oo(U,k)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const k=!T.before,U=T.values||[];return new Oo(U,k)})(t.endAt)),wA(e,o,h,l,f,"F",g,_)}function tk(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Eo(t.unaryFilter.field);return ht.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Eo(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Eo(t.unaryFilter.field);return ht.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Eo(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ht.create(Eo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Wn.create(t.compositeFilter.filters.map((s=>gw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(r):ye(30097,{filter:r})}function nk(r){return $A[r]}function rk(r){return qA[r]}function ik(r){return HA[r]}function wo(r){return{fieldPath:r.canonicalString()}}function Eo(r){return Nt.fromServerFormat(r.fieldPath)}function yw(r){return r instanceof ht?(function(t){if(t.op==="=="){if(by(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NAN"}};if(xy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(by(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NAN"}};if(xy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wo(t.field),op:rk(t.op),value:t.value}}})(r):r instanceof Wn?(function(t){const s=t.getFilters().map((o=>yw(o)));return s.length===1?s[0]:{compositeFilter:{op:ik(t.op),filters:s}}})(r):ye(54877,{filter:r})}function sk(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function _w(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,s,o,l=we.min(),h=we.min(),f=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new _i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.gt=e}}function ak(r){const e=ek({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?fc(e,e.limit,"L"):e}/**
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
 */class lk{constructor(){this.Dn=new uk}addToCollectionParentIndex(e,t){return this.Dn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Si.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class uk{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new _t($e.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new _t($e.comparator)).toArray()}}/**
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
 */const Qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vw=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(vw,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new bo(0)}static ur(){return new bo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="LruGarbageCollector",ck=1048576;function Xy([r,e],[t,s]){const o=Se(r,t);return o===0?Se(e,s):o}class hk{constructor(e){this.Tr=e,this.buffer=new _t(Xy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Xy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dk{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(Yy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qo(t)?ne(Yy,"Ignoring IndexedDB error during garbage collection: ",t):await $o(t)}await this.Rr(3e5)}))}}class fk{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Cc.ue);const s=new hk(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Qy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,f,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,f=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),_o()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function pk(r,e){return new fk(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.changes=new Ts((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Za(s.mutation,o,dn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ce()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ce()){const o=us();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Wa();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=us();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ce())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=zr();const h=Ja(),f=(function(){return Ja()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Oi)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Za(w.mutation,_,w.mutation.getFieldMask(),Qe.now())):h.set(_.key,dn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var T;return f.set(_,new gk(w,(T=h.get(_))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=Ja();let o=new tt(((h,f)=>h-f)),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||dn.empty();w=f.applyToLocalView(_,w),s.set(g,w);const T=(o.get(f.batchId)||Ce()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,T=ew();w.forEach((k=>{if(!l.has(k)){const U=ow(t.get(k),s.get(k));U!==null&&T.set(k,U),l=l.add(k)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ff(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):q.resolve(us());let f=rl,g=l;return h.next((_=>q.forEach(_,((w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next((k=>{g=g.insert(w,k)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Ce()))).next((w=>({batchId:f,changes:Zv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((s=>{let o=Wa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Wa();return this.indexManager.getCollectionParents(e,l).next((f=>q.forEach(f,(g=>{const _=(function(T,k){return new Es(k,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((T,k)=>{h=h.insert(T,k)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,jt.newInvalidDocument(w)))}));let f=Wa();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&Za(w.mutation,_,dn.empty(),Qe.now()),Vc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:ak(o.bundledQuery),readTime:ar(o.readTime)}})(t)),q.resolve()}}/**
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
 */class vk{constructor(){this.overlays=new tt(ue.comparator),this.kr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=us();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=us(),l=t.length+1,h=new ue(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new tt(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=us(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=us(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>f.set(_,w))),!(f.size()>=o)););return q.resolve(f)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new FA(t,s));let l=this.kr.get(t);l===void 0&&(l=Ce(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class wk{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.qr=new _t(St.Qr),this.$r=new _t(St.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new St(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new ue(new $e([])),s=new St(t,e),o=new St(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ue(new $e([])),s=new St(t,e),o=new St(t,e+1);let l=Ce();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ue.comparator(e.key,t.key)||Se(e.Hr,t.Hr)}static Ur(e,t){return Se(e.Hr,t.Hr)||ue.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new _t(St.Qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new MA(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Vf:this.er-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _t(Se);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{s=s.add(f.Hr)}))})),q.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ue.isDocumentKey(l)||(l=l.child(""));const h=new St(new ue(l),0);let f=new _t(Se);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),q.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return q.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new St(t,0),o=this.Yr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.ni=e,this.docs=(function(){return new tt(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=zr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=zr();const h=t.path,f=new ue(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||JS(XS(w),s)<=0||(o.has(w.key)||Vc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ri(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Ik(this)}getSize(e){return q.resolve(this.size)}}class Ik extends mk{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.persistence=e,this.ii=new Ts((t=>bf(t)),Lf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new qf,this.targetCount=0,this._i=bo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new bo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.hr(t),q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t){this.ai={},this.overlays={},this.ui=new Cc(0),this.ci=!1,this.ci=!0,this.li=new wk,this.referenceDelegate=e(this),this.hi=new Sk(this),this.indexManager=new lk,this.remoteDocumentCache=(function(o){return new Tk(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new ok(t),this.Ti=new _k(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new Ek(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new Ak(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return q.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class Ak extends eA{constructor(e){super(),this.currentSequenceNumber=e}}class Hf{constructor(e){this.persistence=e,this.Ai=new qf,this.Ri=null}static Vi(e){return new Hf(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.mi,(s=>{const o=ue.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return q.or([()=>q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class gc{constructor(e,t){this.persistence=e,this.gi=new Ts((s=>rA(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=pk(this,t)}static Vi(e,t){return new gc(e,t)}Ii(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return q.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(s++,l.removeEntry(h,we.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yu(e.data.value)),t}Sr(e,t,s){return q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ce(),o=Ce();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Wf(e,t.fromCache,s,o)}}/**
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
 */class kk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Rk{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return aT()?8:tA(Bt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new kk;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(_o()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(_o()<=Re.DEBUG&&ne("QueryEngine","Query:",vo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(_o()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):q.resolve())}ps(e,t){if(Uy(t))return q.resolve(null);let s=or(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=fc(t,null,"F"),s=or(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Ce(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,fc(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return Uy(t)||o.isEqual(we.min())?q.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?q.resolve(null):(_o()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vo(t)),this.vs(e,h,t,YS(o,rl)).next((f=>f)))}))}bs(e,t){let s=new _t(Xv(e));return t.forEach(((o,l)=>{Vc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return _o()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",vo(t)),this.gs.getDocumentsMatchingQuery(e,t,Si.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="LocalStore",Ck=3e8;class Pk{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new tt(Se),this.Ms=new Ts((l=>bf(l)),Lf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Nk(r,e,t,s){return new Pk(r,e,t,s)}async function Ew(r,e){const t=Ee(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let g=Ce();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function Dk(r,e){const t=Ee(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,w){const T=_.batch,k=T.keys();let U=q.resolve();return k.forEach(($=>{U=U.next((()=>w.getEntry(g,$))).next((K=>{const B=_.docVersions.get($);Fe(B!==null,48541),K.version.compareTo(B)<0&&(T.applyToRemoteDocument(K,_),K.isValidDocument()&&(K.setReadTime(_.commitVersion),w.addEntry(K)))}))})),U.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let g=Ce();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Tw(r){const e=Ee(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Ok(r,e){const t=Ee(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((w,T)=>{const k=o.get(T);if(!k)return;f.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let U=k.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?U=U.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),o=o.insert(T,U),(function(K,B,he){return K.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=Ck?!0:he.addedDocuments.size+he.modifiedDocuments.size+he.removedDocuments.size>0})(k,U,w)&&f.push(t.hi.updateTargetData(l,U))}));let g=zr(),_=Ce();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(Vk(l,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!s.isEqual(we.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(w)}return q.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function Vk(r,e,t){let s=Ce(),o=Ce();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=zr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ne(Kf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function xk(r,e){const t=Ee(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Vf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function bk(r,e){const t=Ee(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,q.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new _i(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function uf(r,e,t){const s=Ee(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!qo(h))throw h;ne(Kf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Jy(r,e,t){const s=Ee(r);let o=we.min(),l=Ce();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const T=Ee(g),k=T.Ms.get(w);return k!==void 0?q.resolve(T.Fs.get(k)):T.hi.getTargetData(_,w)})(s,h,or(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:Ce()))).next((f=>(Lk(s,TA(e),f),{documents:f,qs:l})))))}function Lk(r,e,t){let s=r.xs.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class Zy{constructor(){this.activeTargetIds=CA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mk{constructor(){this.Fo=new Zy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Zy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Fk{xo(e){}shutdown(){}}/**
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
 */const e_="ConnectivityMonitor";class t_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ne(e_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ne(e_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qu=null;function cf(){return qu===null?qu=(function(){return 268435456+Math.round(2147483648*Math.random())})():qu++,"0x"+qu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="RestConnection",Uk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===cc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=cf(),f=this.Go(e,t.toUriEncodedString());ne(xd,`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),w=Fo(_);return this.jo(e,f,g,s,w).then((T=>(ne(xd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Ii(xd,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",s),T}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=Uk[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class Bk extends jk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=cf();return new Promise(((f,g)=>{const _=new Sv;_.setWithCredentials(!0),_.listenOnce(Av.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Qu.NO_ERROR:const T=_.getResponseJson();ne(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case Qu.TIMEOUT:ne(Ft,`RPC '${e}' ${h} timed out`),g(new ee(z.DEADLINE_EXCEEDED,"Request time out"));break;case Qu.HTTP_ERROR:const k=_.getStatus();if(ne(Ft,`RPC '${e}' ${h} failed with status:`,k,"response text:",_.getResponseText()),k>0){let U=_.getResponseJson();Array.isArray(U)&&(U=U[0]);const $=U==null?void 0:U.error;if($&&$.status&&$.message){const K=(function(he){const ie=he.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(ie)>=0?ie:z.UNKNOWN})($.status);g(new ee(K,$.message))}else g(new ee(z.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(z.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ne(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=cf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Cv(),f=Rv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");ne(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.T_(T);let k=!1,U=!1;const $=new zk({Ho:B=>{U?ne(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(k||(ne(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),k=!0),ne(Ft,`RPC '${e}' stream ${o} sending:`,B),T.send(B))},Yo:()=>T.close()}),K=(B,he,ie)=>{B.listen(he,(fe=>{try{ie(fe)}catch(ve){setTimeout((()=>{throw ve}),0)}}))};return K(T,Ha.EventType.OPEN,(()=>{U||(ne(Ft,`RPC '${e}' stream ${o} transport opened.`),$.s_())})),K(T,Ha.EventType.CLOSE,(()=>{U||(U=!0,ne(Ft,`RPC '${e}' stream ${o} transport closed`),$.__(),this.I_(T))})),K(T,Ha.EventType.ERROR,(B=>{U||(U=!0,Ii(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),$.__(new ee(z.UNAVAILABLE,"The operation could not be completed")))})),K(T,Ha.EventType.MESSAGE,(B=>{var he;if(!U){const ie=B.data[0];Fe(!!ie,16349);const fe=ie,ve=(fe==null?void 0:fe.error)||((he=fe[0])===null||he===void 0?void 0:he.error);if(ve){ne(Ft,`RPC '${e}' stream ${o} received error:`,ve);const be=ve.status;let Te=(function(R){const P=ct[R];if(P!==void 0)return uw(P)})(be),D=ve.message;Te===void 0&&(Te=z.INTERNAL,D="Unknown error status: "+be+" with message "+ve.message),U=!0,$.__(new ee(Te,D)),T.close()}else ne(Ft,`RPC '${e}' stream ${o} received:`,ie),$.a_(ie)}})),K(f,kv.STAT_EVENT,(B=>{B.stat===Xd.PROXY?ne(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Xd.NOPROXY&&ne(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.o_()}),0),$}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function bd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(r){return new WA(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="PersistentStream";class Sw{constructor(e,t,s,o,l,h,f,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Iw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(jr(t.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ee(z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(n_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(n_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $k extends Sw{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=QA(this.serializer,e),s=(function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?ar(h.readTime):we.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=lf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=nf(g)?{documents:JA(l,g)}:{query:ZA(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=dw(l,h.resumeToken);const _=sf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=mc(l,h.snapshotVersion.toTimestamp());const _=sf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const s=tk(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=lf(this.serializer),t.removeTarget=e,this.k_(t)}}class qk extends Sw{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=XA(e.writeResults,e.commitTime),s=ar(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=lf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>YA(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{}class Wk extends Hk{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,of(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(z.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,of(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(z.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Kk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(jr(t),this._a=!1):ne("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="RemoteStore";class Gk{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{Is(this)&&(ne(ms,"Restarting streams for network reachability change."),await(async function(g){const _=Ee(g);_.Ia.add(4),await vl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Fc(_)})(this))}))})),this.Aa=new Kk(s,o)}}async function Fc(r){if(Is(r))for(const e of r.da)await e(!0)}async function vl(r){for(const e of r.da)await e(!1)}function Aw(r,e){const t=Ee(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Xf(t)?Yf(t):Ho(t).x_()&&Qf(t,e))}function Gf(r,e){const t=Ee(r),s=Ho(t);t.Ta.delete(e),s.x_()&&kw(t,e),t.Ta.size===0&&(s.x_()?s.B_():Is(t)&&t.Aa.set("Unknown"))}function Qf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ho(r).H_(e)}function kw(r,e){r.Ra.$e(e),Ho(r).Y_(e)}function Yf(r){r.Ra=new BA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Ho(r).start(),r.Aa.aa()}function Xf(r){return Is(r)&&!Ho(r).M_()&&r.Ta.size>0}function Is(r){return Ee(r).Ia.size===0}function Rw(r){r.Ra=void 0}async function Qk(r){r.Aa.set("Online")}async function Yk(r){r.Ta.forEach(((e,t)=>{Qf(r,e)}))}async function Xk(r,e){Rw(r),Xf(r)?(r.Aa.la(e),Yf(r)):r.Aa.set("Unknown")}async function Jk(r,e,t){if(r.Aa.set("Online"),e instanceof hw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(s){ne(ms,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yc(r,s)}else if(e instanceof Zu?r.Ra.Ye(e):e instanceof cw?r.Ra.it(e):r.Ra.et(e),!t.isEqual(we.min()))try{const s=await Tw(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(_);w&&l.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),kw(l,g);const T=new _i(w.target,g,_,w.sequenceNumber);Qf(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(s){ne(ms,"Failed to raise snapshot:",s),await yc(r,s)}}async function yc(r,e,t){if(!qo(e))throw e;r.Ia.add(1),await vl(r),r.Aa.set("Offline"),t||(t=()=>Tw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(ms,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Fc(r)}))}function Cw(r,e){return e().catch((t=>yc(r,t,e)))}async function Uc(r){const e=Ee(r),t=Ci(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Vf;for(;Zk(e);)try{const o=await xk(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,eR(e,o)}catch(o){await yc(e,o)}Pw(e)&&Nw(e)}function Zk(r){return Is(r)&&r.Pa.length<10}function eR(r,e){r.Pa.push(e);const t=Ci(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Pw(r){return Is(r)&&!Ci(r).M_()&&r.Pa.length>0}function Nw(r){Ci(r).start()}async function tR(r){Ci(r).na()}async function nR(r){const e=Ci(r);for(const t of r.Pa)e.X_(t.mutations)}async function rR(r,e,t){const s=r.Pa.shift(),o=zf.from(s,e,t);await Cw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Uc(r)}async function iR(r,e){e&&Ci(r).Z_&&await(async function(s,o){if((function(h){return jA(h)&&h!==z.ABORTED})(o.code)){const l=s.Pa.shift();Ci(s).N_(),await Cw(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Uc(s)}})(r,e),Pw(r)&&Nw(r)}async function r_(r,e){const t=Ee(r);t.asyncQueue.verifyOperationInProgress(),ne(ms,"RemoteStore received new credentials");const s=Is(t);t.Ia.add(3),await vl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Fc(t)}async function sR(r,e){const t=Ee(r);e?(t.Ia.delete(2),await Fc(t)):e||(t.Ia.add(2),await vl(t),t.Aa.set("Unknown"))}function Ho(r){return r.Va||(r.Va=(function(t,s,o){const l=Ee(t);return l.ia(),new $k(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:Qk.bind(null,r),e_:Yk.bind(null,r),n_:Xk.bind(null,r),J_:Jk.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Xf(r)?Yf(r):r.Aa.set("Unknown")):(await r.Va.stop(),Rw(r))}))),r.Va}function Ci(r){return r.ma||(r.ma=(function(t,s,o){const l=Ee(t);return l.ia(),new qk(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:tR.bind(null,r),n_:iR.bind(null,r),ea:nR.bind(null,r),ta:rR.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Uc(r)):(await r.ma.stop(),r.Pa.length>0&&(ne(ms,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Jf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(r,e){if(jr("AsyncQueue",`${e}: ${r}`),qo(r))return new ee(z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static emptySet(e){return new ko(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Wa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ko;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.fa=new tt(ue.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ye(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Lo{constructor(e,t,s,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Lo(e,t,ko.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class aR{constructor(){this.queries=s_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Ee(t),l=o.queries;o.queries=s_(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(s)}))})(this,new ee(z.ABORTED,"Firestore shutting down"))}}function s_(){return new Ts((r=>Yv(r)),Oc)}async function lR(r,e){const t=Ee(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new oR,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Zf(h,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&ep(t)}async function uR(r,e){const t=Ee(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function cR(r,e){const t=Ee(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(s=!0);h.ya=o}}s&&ep(t)}function hR(r,e,t){const s=Ee(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function ep(r){r.Da.forEach((e=>{e.next()}))}var hf,o_;(o_=hf||(hf={})).Fa="default",o_.Cache="cache";class dR{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==hf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.key=e}}class Ow{constructor(e){this.key=e}}class fR{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ce(),this.mutatedKeys=Ce(),this.Xa=Xv(e),this.eu=new ko(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new i_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const k=o.get(w),U=Vc(this.query,T)?T:null,$=!!k&&this.mutatedKeys.has(k.key),K=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let B=!1;k&&U?k.data.isEqual(U.data)?$!==K&&(s.track({type:3,doc:U}),B=!0):this.iu(k,U)||(s.track({type:2,doc:U}),B=!0,(g&&this.Xa(U,g)>0||_&&this.Xa(U,_)<0)&&(f=!0)):!k&&U?(s.track({type:0,doc:U}),B=!0):k&&!U&&(s.track({type:1,doc:k}),B=!0,(g||_)&&(f=!0)),B&&(U?(h=h.add(U),l=K?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,T)=>(function(U,$){const K=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:B})}};return K(U)-K($)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(s),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Lo(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new i_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ce(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Ow(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Dw(s))})),t}uu(e){this.Ha=e.qs,this.Za=Ce();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Lo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const tp="SyncEngine";class pR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class mR{constructor(e){this.key=e,this.lu=!1}}class gR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Ts((f=>Yv(f)),Oc),this.Tu=new Map,this.Iu=new Set,this.du=new tt(ue.comparator),this.Eu=new Map,this.Au=new qf,this.Ru={},this.Vu=new Map,this.mu=bo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function yR(r,e,t=!0){const s=Fw(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Vw(s,e,t,!0),o}async function _R(r,e){const t=Fw(r);await Vw(t,e,!0,!1)}async function Vw(r,e,t,s){const o=await bk(r.localStore,or(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await vR(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Aw(r.remoteStore,o),f}async function vR(r,e,t,s,o){r.gu=(T,k,U)=>(async function(K,B,he,ie){let fe=B.view.nu(he);fe.Ds&&(fe=await Jy(K.localStore,B.query,!1).then((({documents:D})=>B.view.nu(D,fe))));const ve=ie&&ie.targetChanges.get(B.targetId),be=ie&&ie.targetMismatches.get(B.targetId)!=null,Te=B.view.applyChanges(fe,K.isPrimaryClient,ve,be);return l_(K,B.targetId,Te._u),Te.snapshot})(r,T,k,U);const l=await Jy(r.localStore,e,!0),h=new fR(e,l.qs),f=h.nu(l.documents),g=_l.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);l_(r,t,_._u);const w=new pR(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function wR(r,e,t){const s=Ee(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Oc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await uf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Gf(s.remoteStore,o.targetId),df(s,o.targetId)})).catch($o)):(df(s,o.targetId),await uf(s.localStore,o.targetId,!0))}async function ER(r,e){const t=Ee(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Gf(t.remoteStore,s.targetId))}async function TR(r,e,t){const s=PR(r);try{const o=await(function(h,f){const g=Ee(h),_=Qe.now(),w=f.reduce(((U,$)=>U.add($.key)),Ce());let T,k;return g.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let $=zr(),K=Ce();return g.Os.getEntries(U,w).next((B=>{$=B,$.forEach(((he,ie)=>{ie.isValidDocument()||(K=K.add(he))}))})).next((()=>g.localDocuments.getOverlayedDocuments(U,$))).next((B=>{T=B;const he=[];for(const ie of f){const fe=bA(ie,T.get(ie.key).overlayedDocument);fe!=null&&he.push(new Oi(ie.key,fe,$v(fe.value.mapValue),qn.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,he,f)})).next((B=>{k=B;const he=B.applyToLocalDocumentSet(T,K);return g.documentOverlayCache.saveOverlays(U,B.batchId,he)}))})).then((()=>({batchId:k.batchId,changes:Zv(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new tt(Se)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await wl(s,o.changes),await Uc(s.remoteStore)}catch(o){const l=Zf(o,"Failed to persist write");t.reject(l)}}async function xw(r,e){const t=Ee(r);try{const s=await Ok(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await wl(t,s,e)}catch(s){await $o(s)}}function a_(r,e,t){const s=Ee(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Ee(h);g.onlineState=f;let _=!1;g.queries.forEach(((w,T)=>{for(const k of T.wa)k.va(f)&&(_=!0)})),_&&ep(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function IR(r,e,t){const s=Ee(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new tt(ue.comparator);h=h.insert(l,jt.newNoDocument(l,we.min()));const f=Ce().add(l),g=new Lc(we.min(),new Map,new tt(Se),h,f);await xw(s,g),s.du=s.du.remove(l),s.Eu.delete(e),np(s)}else await uf(s.localStore,e,!1).then((()=>df(s,e,t))).catch($o)}async function SR(r,e){const t=Ee(r),s=e.batch.batchId;try{const o=await Dk(t.localStore,e);Lw(t,s,null),bw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await wl(t,o)}catch(o){await $o(o)}}async function AR(r,e,t){const s=Ee(r);try{const o=await(function(h,f){const g=Ee(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,f).next((T=>(Fe(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Lw(s,e,t),bw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await wl(s,o)}catch(o){await $o(o)}}function bw(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Lw(r,e,t){const s=Ee(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function df(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Mw(r,s)}))}function Mw(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Gf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),np(r))}function l_(r,e,t){for(const s of t)s instanceof Dw?(r.Au.addReference(s.key,e),kR(r,s)):s instanceof Ow?(ne(tp,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Mw(r,s.key)):ye(19791,{yu:s})}function kR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ne(tp,"New document in limbo: "+t),r.Iu.add(s),np(r))}function np(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new ue($e.fromString(e)),s=r.mu.next();r.Eu.set(s,new mR(t)),r.du=r.du.insert(t,s),Aw(r.remoteStore,new _i(or(Mf(t.path)),s,"TargetPurposeLimboResolution",Cc.ue))}}async function wl(r,e,t){const s=Ee(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((f,g)=>{h.push(s.gu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Wf.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const w=Ee(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>q.forEach(_,(k=>q.forEach(k.Is,(U=>w.persistence.referenceDelegate.addReference(T,k.targetId,U))).next((()=>q.forEach(k.ds,(U=>w.persistence.referenceDelegate.removeReference(T,k.targetId,U)))))))))}catch(T){if(!qo(T))throw T;ne(Kf,"Failed to update sequence numbers: "+T)}for(const T of _){const k=T.targetId;if(!T.fromCache){const U=w.Fs.get(k),$=U.snapshotVersion,K=U.withLastLimboFreeSnapshotVersion($);w.Fs=w.Fs.insert(k,K)}}})(s.localStore,l))}async function RR(r,e){const t=Ee(r);if(!t.currentUser.isEqual(e)){ne(tp,"User change. New user:",e.toKey());const s=await Ew(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new ee(z.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await wl(t,s.Bs)}}function CR(r,e){const t=Ee(r),s=t.Eu.get(e);if(s&&s.lu)return Ce().add(s.key);{let o=Ce();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Fw(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IR.bind(null,e),e.hu.J_=cR.bind(null,e.eventManager),e.hu.pu=hR.bind(null,e.eventManager),e}function PR(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AR.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Nk(this.persistence,new Rk,e.initialUser,this.serializer)}Du(e){return new ww(Hf.Vi,this.serializer)}bu(e){return new Mk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class NR extends _c{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof gc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new dk(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new ww((s=>gc.Vi(s,t)),this.serializer)}}class ff{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>a_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=RR.bind(null,this.syncEngine),await sR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new aR})()}createDatastore(e){const t=Mc(e.databaseInfo.databaseId),s=(function(l){return new Bk(l)})(e.databaseInfo);return(function(l,h,f,g){return new Wk(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new Gk(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>a_(this.syncEngine,t,0)),(function(){return t_.C()?new t_:new Fk})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,w){const T=new gR(o,l,h,f,g,_);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ee(o);ne(ms,"RemoteStore shutting down."),l.Ia.add(5),await vl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ff.provider={build:()=>new ff};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="FirestoreClient";class OR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Pi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Pi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Zf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ld(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Pi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Ew(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ii("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ii("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function u_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await VR(r);ne(Pi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>r_(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>r_(e.remoteStore,o))),r._onlineComponents=e}async function VR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Pi,"Using user provided OfflineComponentProvider");try{await Ld(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ii("Error using user provided cache. Falling back to memory cache: "+t),await Ld(r,new _c)}}else ne(Pi,"Using default OfflineComponentProvider"),await Ld(r,new NR(void 0));return r._offlineComponents}async function Uw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Pi,"Using user provided OnlineComponentProvider"),await u_(r,r._uninitializedComponentsProvider._online)):(ne(Pi,"Using default OnlineComponentProvider"),await u_(r,new ff))),r._onlineComponents}function xR(r){return Uw(r).then((e=>e.syncEngine))}async function c_(r){const e=await Uw(r),t=e.eventManager;return t.onListen=yR.bind(null,e.syncEngine),t.onUnlisten=wR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_R.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ER.bind(null,e.syncEngine),t}/**
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
 */function jw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firestore.googleapis.com",d_=!0;class f_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zw,this.ssl=d_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:d_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ck)throw new ee(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new jS;switch(s.type){case"firstParty":return new qS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=h_.get(t);s&&(ne("ComponentProvider","Removing Datastore"),h_.delete(t),s.terminate())})(this),Promise.resolve()}}function bR(r,e,t,s={}){var o;r=Lr(r,jc);const l=Fo(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(L_(`https://${g}`),M_("Firestore",!0)),h.host!==zw&&h.host!==g&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!Mr(_,f)&&(r._setSettings(_),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=Ut.MOCK_USER;else{w=J0(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const k=s.mockUserToken.sub||s.mockUserToken.user_id;if(!k)throw new ee(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ut(k)}r._authCredentials=new zS(new Nv(w,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class at{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(gl(t,at._jsonSchema))return new at(e,s||null,new ue($e.fromString(t.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:dt("string",at._jsonSchemaVersion),referencePath:dt("string")};class Ti extends Br{constructor(e,t,s){super(e,t,Mf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new ue(e))}withConverter(e){return new Ti(this.firestore,e,this._path)}}function Bw(r,e,...t){if(r=et(r),Ov("collection","path",e),r instanceof jc){const s=$e.fromString(e,...t);return ky(s),new Ti(r,null,s)}{if(!(r instanceof at||r instanceof Ti))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child($e.fromString(e,...t));return ky(s),new Ti(r.firestore,null,s)}}function El(r,e,...t){if(r=et(r),arguments.length===1&&(e=Of.newId()),Ov("doc","path",e),r instanceof jc){const s=$e.fromString(e,...t);return Ay(s),new at(r,null,new ue(s))}{if(!(r instanceof at||r instanceof Ti))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child($e.fromString(e,...t));return Ay(s),new at(r.firestore,r instanceof Ti?r.converter:null,new ue(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="AsyncQueue";class m_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Iw(this,"async_queue_retry"),this.oc=()=>{const s=bd();s&&ne(p_,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=bd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=bd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new hs;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!qo(e))throw e;ne(p_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,jr("INTERNAL UNHANDLED ERROR: ",g_(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Jf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ye(47125,{hc:g_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function g_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function y_(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Mo extends jc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new m_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new m_(e),this._firestoreClient=void 0,await e}}}function LR(r,e){const t=typeof r=="object"?r:vf(),s=typeof r=="string"?r:cc,o=Uo(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=Y0("firestore");l&&bR(o,...l)}return o}function $w(r){if(r._terminated)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||MR(r),r._firestoreClient}function MR(r){var e,t,s;const o=r._freezeSettings(),l=(function(f,g,_,w){return new oA(f,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,jw(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new OR(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Dt.fromBase64String(e))}catch(t){throw new ee(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gl(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:dt("string",Sn._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lr._jsonSchemaVersion}}static fromJSON(e){if(gl(e,lr._jsonSchema))return new lr(e.latitude,e.longitude)}}lr._jsonSchemaVersion="firestore/geoPoint/1.0",lr._jsonSchema={type:dt("string",lr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
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
 */class ur{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ur._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gl(e,ur._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ur(e.vectorValues);throw new ee(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ur._jsonSchemaVersion="firestore/vectorValue/1.0",ur._jsonSchema={type:dt("string",ur._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=/^__.*__$/;class UR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Oi(e,this.data,this.fieldMask,t,this.fieldTransforms):new yl(e,this.data,t,this.fieldTransforms)}}class qw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Oi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:r})}}class Bc{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Bc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return vc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Hw(this.Ec)&&FR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class jR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Mc(e)}Dc(e,t,s,o=!1){return new Bc({Ec:e,methodName:t,bc:s,path:Nt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tl(r){const e=r._freezeSettings(),t=Mc(r._databaseId);return new jR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ww(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);op("Data must be an object, but it was:",h,s);const f=Qw(s,h);let g,_;if(l.merge)g=new dn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const k=pf(e,T,t);if(!h.contains(k))throw new ee(z.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);Xw(w,k)||w.push(k)}g=new dn(w),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new UR(new rn(f),g,_)}class $c extends Wo{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}function Kw(r,e,t){return new Bc({Ec:3,bc:e.settings.bc,methodName:r._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class rp extends Wo{_toFieldTransform(e){return new jf(e.path,new ll)}isEqual(e){return e instanceof rp}}class ip extends Wo{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Kw(this,e,!0),s=this.vc.map((l=>Ss(l,t))),o=new Vo(s);return new jf(e.path,o)}isEqual(e){return e instanceof ip&&Mr(this.vc,e.vc)}}class sp extends Wo{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Kw(this,e,!0),s=this.vc.map((l=>Ss(l,t))),o=new xo(s);return new jf(e.path,o)}isEqual(e){return e instanceof sp&&Mr(this.vc,e.vc)}}function zR(r,e,t,s){const o=r.Dc(1,e,t);op("Data must be an object, but it was:",o,s);const l=[],h=rn.empty();Di(s,((g,_)=>{const w=ap(e,g,t);_=et(_);const T=o.gc(w);if(_ instanceof $c)l.push(w);else{const k=Ss(_,T);k!=null&&(l.push(w),h.set(w,k))}}));const f=new dn(l);return new qw(h,f,o.fieldTransforms)}function BR(r,e,t,s,o,l){const h=r.Dc(1,e,t),f=[pf(e,s,t)],g=[o];if(l.length%2!=0)throw new ee(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<l.length;k+=2)f.push(pf(e,l[k])),g.push(l[k+1]);const _=[],w=rn.empty();for(let k=f.length-1;k>=0;--k)if(!Xw(_,f[k])){const U=f[k];let $=g[k];$=et($);const K=h.gc(U);if($ instanceof $c)_.push(U);else{const B=Ss($,K);B!=null&&(_.push(U),w.set(U,B))}}const T=new dn(_);return new qw(w,T,h.fieldTransforms)}function Gw(r,e,t,s=!1){return Ss(t,r.Dc(s?4:3,e))}function Ss(r,e){if(Yw(r=et(r)))return op("Unsupported field value:",e,r),Qw(r,e);if(r instanceof Wo)return(function(s,o){if(!Hw(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let g=Ss(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=et(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return PA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Qe.fromDate(s);return{timestampValue:mc(o.serializer,l)}}if(s instanceof Qe){const l=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:mc(o.serializer,l)}}if(s instanceof lr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Sn)return{bytesValue:dw(o.serializer,s._byteString)};if(s instanceof at){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:$f(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ur)return(function(h,f){return{mapValue:{fields:{[zv]:{stringValue:Bv},[hc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return Uf(f.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Rc(s)}`)})(r,e)}function Qw(r,e){const t={};return bv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(r,((s,o)=>{const l=Ss(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Yw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Qe||r instanceof lr||r instanceof Sn||r instanceof at||r instanceof Wo||r instanceof ur)}function op(r,e,t){if(!Yw(t)||!Vv(t)){const s=Rc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function pf(r,e,t){if((e=et(e))instanceof zc)return e._internalPath;if(typeof e=="string")return ap(r,e);throw vc("Field path arguments must be of type string or ",r,!1,void 0,t)}const $R=new RegExp("[~\\*/\\[\\]]");function ap(r,e,t){if(e.search($R)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new zc(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function vc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ee(z.INVALID_ARGUMENT,f+r+g)}function Xw(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(up("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qR extends lp{data(){return super.data()}}function up(r,e){return typeof e=="string"?ap(r,e):e instanceof zc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ee(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cp{}class qc extends cp{}function WR(r,e,...t){let s=[];e instanceof cp&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof dp)).length,f=l.filter((g=>g instanceof hp)).length;if(h>1||h>0&&f>0)throw new ee(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class hp extends qc{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new hp(e,t,s)}_apply(e){const t=this._parse(e);return Jw(e._query,t),new Br(e.firestore,e.converter,rf(e._query,t))}_parse(e){const t=Tl(e.firestore);return(function(l,h,f,g,_,w,T){let k;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){v_(T,w);const $=[];for(const K of T)$.push(__(g,l,K));k={arrayValue:{values:$}}}else k=__(g,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||v_(T,w),k=Gw(f,h,T,w==="in"||w==="not-in");return ht.create(_,w,k)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class dp extends cp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dp(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Wn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)Jw(h,g),h=rf(h,g)})(e._query,t),new Br(e.firestore,e.converter,rf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fp extends qc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new al(l,h)})(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Es(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function KR(r,e="asc"){const t=e,s=up("orderBy",r);return fp._create(s,t)}class pp extends qc{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new pp(e,t,s)}_apply(e){return new Br(e.firestore,e.converter,fc(e._query,this._limit,this._limitType))}}function GR(r){return pp._create("limit",r,"F")}class mp extends qc{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new mp(e,t,s)}_apply(e){const t=YR(e,this.type,this._docOrFields,this._inclusive);return new Br(e.firestore,e.converter,(function(o,l){return new Es(o.path,o.collectionGroup,o.explicitOrderBy.slice(),o.filters.slice(),o.limit,o.limitType,l,o.endAt)})(e._query,t))}}function QR(...r){return mp._create("startAfter",r,!1)}function YR(r,e,t,s){if(t[0]=et(t[0]),t[0]instanceof lp)return(function(l,h,f,g,_){if(!g)throw new ee(z.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const w=[];for(const T of Ao(l))if(T.field.isKeyField())w.push(dc(h,g.key));else{const k=g.data.field(T.field);if(Nc(k))throw new ee(z.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(k===null){const U=T.field.canonicalString();throw new ee(z.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${U}' (used as the orderBy) does not exist.`)}w.push(k)}return new Oo(w,_)})(r._query,r.firestore._databaseId,e,t[0]._document,s);{const o=Tl(r.firestore);return(function(h,f,g,_,w,T){const k=h.explicitOrderBy;if(w.length>k.length)throw new ee(z.INVALID_ARGUMENT,`Too many arguments provided to ${_}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const U=[];for(let $=0;$<w.length;$++){const K=w[$];if(k[$].field.isKeyField()){if(typeof K!="string")throw new ee(z.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${_}(), but got a ${typeof K}`);if(!Ff(h)&&K.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${_}() must be a plain document ID, but '${K}' contains a slash.`);const B=h.path.child($e.fromString(K));if(!ue.isDocumentKey(B))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${_}() must result in a valid document path, but '${B}' is not because it contains an odd number of segments.`);const he=new ue(B);U.push(dc(f,he))}else{const B=Gw(g,_,K);U.push(B)}}return new Oo(U,T)})(r._query,r.firestore._databaseId,o,e,t,s)}}function __(r,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new ee(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ff(e)&&t.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child($e.fromString(t));if(!ue.isDocumentKey(s))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return dc(r,new ue(s))}if(t instanceof at)return dc(r,t._key);throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rc(t)}.`)}function v_(r,e){if(!Array.isArray(r)||r.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jw(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class XR{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Di(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[hc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>ot(h.doubleValue)));return new ur(l)}convertGeoPoint(e){return new lr(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Dc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(il(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=$e.fromString(e);Fe(_w(s),9688,{name:e});const o=new sl(s.get(1),s.get(3)),l=new ue(s.popFirst(5));return o.isEqual(t)||jr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ds extends lp{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(up("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ds._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",ds._jsonSchema={type:dt("string",ds._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class ec extends ds{data(e={}){return super.data(e)}}class Ro{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ga(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ec(this._firestore,this._userDataWriter,s.key,s,new Ga(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new ec(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new ec(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:JR(f.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:r})}}Ro._jsonSchemaVersion="firestore/querySnapshot/1.0",Ro._jsonSchema={type:dt("string",Ro._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class eE extends XR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}function gp(r,e,t){r=Lr(r,at);const s=Lr(r.firestore,Mo),o=Zw(r.converter,e,t);return yp(s,[Ww(Tl(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,qn.none())])}function ZR(r,e,t,...s){r=Lr(r,at);const o=Lr(r.firestore,Mo),l=Tl(o);let h;return h=typeof(e=et(e))=="string"||e instanceof zc?BR(l,"updateDoc",r._key,e,t,s):zR(l,"updateDoc",r._key,e),yp(o,[h.toMutation(r._key,qn.exists(!0))])}function eC(r,e){const t=Lr(r.firestore,Mo),s=El(r),o=Zw(r.converter,e);return yp(t,[Ww(Tl(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,qn.exists(!1))]).then((()=>s))}function tC(r,...e){var t,s,o;r=et(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||y_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(y_(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,_,w;if(r instanceof at)_=Lr(r.firestore,Mo),w=Mf(r._key.path),g={next:T=>{e[h]&&e[h](nC(_,r,T))},error:e[h+1],complete:e[h+2]};else{const T=Lr(r,Br);_=Lr(T.firestore,Mo),w=T._query;const k=new eE(_);g={next:U=>{e[h]&&e[h](new Ro(_,k,T,U))},error:e[h+1],complete:e[h+2]},HR(r._query)}return(function(k,U,$,K){const B=new DR(K),he=new dR(U,B,$);return k.asyncQueue.enqueueAndForget((async()=>lR(await c_(k),he))),()=>{B.Ou(),k.asyncQueue.enqueueAndForget((async()=>uR(await c_(k),he)))}})($w(_),w,f,g)}function yp(r,e){return(function(s,o){const l=new hs;return s.asyncQueue.enqueueAndForget((async()=>TR(await xR(s),o,l))),l.promise})($w(r),e)}function nC(r,e,t){const s=t.docs.get(e._key),o=new eE(r);return new ds(r,o,e._key,s,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}function rC(){return new rp("serverTimestamp")}function iC(...r){return new ip("arrayUnion",r)}function sC(...r){return new sp("arrayRemove",r)}(function(e,t=!0){(function(o){Bo=o})(jo),cr(new Hn("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Mo(new BS(s.getProvider("auth-internal")),new HS(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ee(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sl(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),An(wy,Ey,e),An(wy,Ey,"esm2017")})();const tE="@firebase/installations",_p="0.6.18";/**
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
 */const nE=1e4,rE=`w:${_p}`,iE="FIS_v2",oC="https://firebaseinstallations.googleapis.com/v1",aC=3600*1e3,lC="installations",uC="Installations";/**
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
 */const cC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gs=new _s(lC,uC,cC);function sE(r){return r instanceof dr&&r.code.includes("request-failed")}/**
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
 */function oE({projectId:r}){return`${oC}/projects/${r}/installations`}function aE(r){return{token:r.token,requestStatus:2,expiresIn:dC(r.expiresIn),creationTime:Date.now()}}async function lE(r,e){const s=(await e.json()).error;return gs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function uE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function hC(r,{refreshToken:e}){const t=uE(r);return t.append("Authorization",fC(e)),t}async function cE(r){const e=await r();return e.status>=500&&e.status<600?r():e}function dC(r){return Number(r.replace("s","000"))}function fC(r){return`${iE} ${r}`}/**
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
 */async function pC({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=oE(r),o=uE(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:iE,appId:r.appId,sdkVersion:rE},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await cE(()=>fetch(s,f));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:aE(_.authToken)}}else throw await lE("Create Installation",g)}/**
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
 */function hE(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function mC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gC=/^[cdef][\w-]{21}$/,mf="";function yC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=_C(r);return gC.test(t)?t:mf}catch{return mf}}function _C(r){return mC(r).substr(0,22)}/**
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
 */function Hc(r){return`${r.appName}!${r.appId}`}/**
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
 */const dE=new Map;function fE(r,e){const t=Hc(r);pE(t,e),vC(t,e)}function pE(r,e){const t=dE.get(r);if(t)for(const s of t)s(e)}function vC(r,e){const t=wC();t&&t.postMessage({key:r,fid:e}),EC()}let cs=null;function wC(){return!cs&&"BroadcastChannel"in self&&(cs=new BroadcastChannel("[Firebase] FID Change"),cs.onmessage=r=>{pE(r.data.key,r.data.fid)}),cs}function EC(){dE.size===0&&cs&&(cs.close(),cs=null)}/**
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
 */const TC="firebase-installations-database",IC=1,ys="firebase-installations-store";let Md=null;function vp(){return Md||(Md=Tc(TC,IC,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ys)}}})),Md}async function wc(r,e){const t=Hc(r),o=(await vp()).transaction(ys,"readwrite"),l=o.objectStore(ys),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&fE(r,e.fid),e}async function mE(r){const e=Hc(r),s=(await vp()).transaction(ys,"readwrite");await s.objectStore(ys).delete(e),await s.done}async function Wc(r,e){const t=Hc(r),o=(await vp()).transaction(ys,"readwrite"),l=o.objectStore(ys),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&fE(r,f.fid),f}/**
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
 */async function wp(r){let e;const t=await Wc(r.appConfig,s=>{const o=SC(s),l=AC(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===mf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function SC(r){const e=r||{fid:yC(),registrationStatus:0};return gE(e)}function AC(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(gs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=kC(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RC(r)}:{installationEntry:e}}async function kC(r,e){try{const t=await pC(r,e);return wc(r.appConfig,t)}catch(t){throw sE(t)&&t.customData.serverCode===409?await mE(r.appConfig):await wc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function RC(r){let e=await w_(r.appConfig);for(;e.registrationStatus===1;)await hE(100),e=await w_(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await wp(r);return s||t}return e}function w_(r){return Wc(r,e=>{if(!e)throw gs.create("installation-not-found");return gE(e)})}function gE(r){return CC(r)?{fid:r.fid,registrationStatus:0}:r}function CC(r){return r.registrationStatus===1&&r.registrationTime+nE<Date.now()}/**
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
 */async function PC({appConfig:r,heartbeatServiceProvider:e},t){const s=NC(r,t),o=hC(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:rE,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await cE(()=>fetch(s,f));if(g.ok){const _=await g.json();return aE(_)}else throw await lE("Generate Auth Token",g)}function NC(r,{fid:e}){return`${oE(r)}/${e}/authTokens:generate`}/**
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
 */async function Ep(r,e=!1){let t;const s=await Wc(r.appConfig,l=>{if(!yE(l))throw gs.create("not-registered");const h=l.authToken;if(!e&&VC(h))return l;if(h.requestStatus===1)return t=DC(r,e),l;{if(!navigator.onLine)throw gs.create("app-offline");const f=bC(l);return t=OC(r,f),f}});return t?await t:s.authToken}async function DC(r,e){let t=await E_(r.appConfig);for(;t.authToken.requestStatus===1;)await hE(100),t=await E_(r.appConfig);const s=t.authToken;return s.requestStatus===0?Ep(r,e):s}function E_(r){return Wc(r,e=>{if(!yE(e))throw gs.create("not-registered");const t=e.authToken;return LC(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OC(r,e){try{const t=await PC(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await wc(r.appConfig,s),t}catch(t){if(sE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await mE(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wc(r.appConfig,s)}throw t}}function yE(r){return r!==void 0&&r.registrationStatus===2}function VC(r){return r.requestStatus===2&&!xC(r)}function xC(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+aC}function bC(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function LC(r){return r.requestStatus===1&&r.requestTime+nE<Date.now()}/**
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
 */async function MC(r){const e=r,{installationEntry:t,registrationPromise:s}=await wp(e);return s?s.catch(console.error):Ep(e).catch(console.error),t.fid}/**
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
 */async function FC(r,e=!1){const t=r;return await UC(t),(await Ep(t,e)).token}async function UC(r){const{registrationPromise:e}=await wp(r);e&&await e}/**
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
 */function jC(r){if(!r||!r.options)throw Fd("App Configuration");if(!r.name)throw Fd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Fd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Fd(r){return gs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="installations",zC="installations-internal",BC=r=>{const e=r.getProvider("app").getImmediate(),t=jC(e),s=Uo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},$C=r=>{const e=r.getProvider("app").getImmediate(),t=Uo(e,_E).getImmediate();return{getId:()=>MC(t),getToken:o=>FC(t,o)}};function qC(){cr(new Hn(_E,BC,"PUBLIC")),cr(new Hn(zC,$C,"PRIVATE"))}qC();An(tE,_p);An(tE,_p,"esm2017");/**
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
 */const HC="/firebase-messaging-sw.js",WC="/firebase-cloud-messaging-push-scope",vE="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",KC="https://fcmregistrations.googleapis.com/v1",wE="google.c.a.c_id",GC="google.c.a.c_l",QC="google.c.a.ts",YC="google.c.a.e",T_=1e4;var I_;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(I_||(I_={}));/**
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
 */var ul;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(ul||(ul={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(r){const e=new Uint8Array(r);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function XC(r){const e="=".repeat((4-r.length%4)%4),t=(r+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(t),o=new Uint8Array(s.length);for(let l=0;l<s.length;++l)o[l]=s.charCodeAt(l);return o}/**
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
 */const Ud="fcm_token_details_db",JC=5,S_="fcm_token_object_Store";async function ZC(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Ud))return null;let e=null;return(await Tc(Ud,JC,{upgrade:async(s,o,l,h)=>{var f;if(o<2||!s.objectStoreNames.contains(S_))return;const g=h.objectStore(S_),_=await g.index("fcmSenderId").get(r);if(await g.clear(),!!_){if(o===2){const w=_;if(!w.auth||!w.p256dh||!w.endpoint)return;e={token:w.fcmToken,createTime:(f=w.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:w.auth,p256dh:w.p256dh,endpoint:w.endpoint,swScope:w.swScope,vapidKey:typeof w.vapidKey=="string"?w.vapidKey:Dr(w.vapidKey)}}}else if(o===3){const w=_;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:Dr(w.auth),p256dh:Dr(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:Dr(w.vapidKey)}}}else if(o===4){const w=_;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:Dr(w.auth),p256dh:Dr(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:Dr(w.vapidKey)}}}}}})).close(),await Cd(Ud),await Cd("fcm_vapid_details_db"),await Cd("undefined"),eP(e)?e:null}function eP(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:e}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const tP="firebase-messaging-database",nP=1,cl="firebase-messaging-store";let jd=null;function EE(){return jd||(jd=Tc(tP,nP,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(cl)}}})),jd}async function rP(r){const e=TE(r),s=await(await EE()).transaction(cl).objectStore(cl).get(e);if(s)return s;{const o=await ZC(r.appConfig.senderId);if(o)return await Tp(r,o),o}}async function Tp(r,e){const t=TE(r),o=(await EE()).transaction(cl,"readwrite");return await o.objectStore(cl).put(e,t),await o.done,e}function TE({appConfig:r}){return r.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},zt=new _s("messaging","Messaging",iP);/**
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
 */async function sP(r,e){const t=await Sp(r),s=IE(e),o={method:"POST",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(Ip(r.appConfig),o)).json()}catch(h){throw zt.create("token-subscribe-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw zt.create("token-subscribe-failed",{errorInfo:h})}if(!l.token)throw zt.create("token-subscribe-no-token");return l.token}async function oP(r,e){const t=await Sp(r),s=IE(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(`${Ip(r.appConfig)}/${e.token}`,o)).json()}catch(h){throw zt.create("token-update-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw zt.create("token-update-failed",{errorInfo:h})}if(!l.token)throw zt.create("token-update-no-token");return l.token}async function aP(r,e){const s={method:"DELETE",headers:await Sp(r)};try{const l=await(await fetch(`${Ip(r.appConfig)}/${e}`,s)).json();if(l.error){const h=l.error.message;throw zt.create("token-unsubscribe-failed",{errorInfo:h})}}catch(o){throw zt.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Ip({projectId:r}){return`${KC}/projects/${r}/registrations`}async function Sp({appConfig:r,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function IE({p256dh:r,auth:e,endpoint:t,vapidKey:s}){const o={web:{endpoint:t,auth:e,p256dh:r}};return s!==vE&&(o.web.applicationPubKey=s),o}/**
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
 */const lP=10080*60*1e3;async function uP(r){const e=await hP(r.swRegistration,r.vapidKey),t={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:e.endpoint,auth:Dr(e.getKey("auth")),p256dh:Dr(e.getKey("p256dh"))},s=await rP(r.firebaseDependencies);if(s){if(dP(s.subscriptionOptions,t))return Date.now()>=s.createTime+lP?cP(r,{token:s.token,createTime:Date.now(),subscriptionOptions:t}):s.token;try{await aP(r.firebaseDependencies,s.token)}catch(o){console.warn(o)}return A_(r.firebaseDependencies,t)}else return A_(r.firebaseDependencies,t)}async function cP(r,e){try{const t=await oP(r.firebaseDependencies,e),s=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Tp(r.firebaseDependencies,s),t}catch(t){throw t}}async function A_(r,e){const s={token:await sP(r,e),createTime:Date.now(),subscriptionOptions:e};return await Tp(r,s),s.token}async function hP(r,e){const t=await r.pushManager.getSubscription();return t||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:XC(e)})}function dP(r,e){const t=e.vapidKey===r.vapidKey,s=e.endpoint===r.endpoint,o=e.auth===r.auth,l=e.p256dh===r.p256dh;return t&&s&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(r){const e={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return fP(e,r),pP(e,r),mP(e,r),e}function fP(r,e){if(!e.notification)return;r.notification={};const t=e.notification.title;t&&(r.notification.title=t);const s=e.notification.body;s&&(r.notification.body=s);const o=e.notification.image;o&&(r.notification.image=o);const l=e.notification.icon;l&&(r.notification.icon=l)}function pP(r,e){e.data&&(r.data=e.data)}function mP(r,e){var t,s,o,l,h;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;r.fcmOptions={};const f=(o=(s=e.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;f&&(r.fcmOptions.link=f);const g=(h=e.fcmOptions)===null||h===void 0?void 0:h.analytics_label;g&&(r.fcmOptions.analyticsLabel=g)}/**
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
 */function gP(r){return typeof r=="object"&&!!r&&wE in r}/**
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
 */function yP(r){if(!r||!r.options)throw zd("App Configuration Object");if(!r.name)throw zd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=r;for(const s of e)if(!t[s])throw zd(s);return{appName:r.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function zd(r){return zt.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,t,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=yP(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(r){try{r.swRegistration=await navigator.serviceWorker.register(HC,{scope:WC}),r.swRegistration.update().catch(()=>{}),await wP(r.swRegistration)}catch(e){throw zt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function wP(r){return new Promise((e,t)=>{const s=setTimeout(()=>t(new Error(`Service worker not registered after ${T_} ms`)),T_),o=r.installing||r.waiting;r.active?(clearTimeout(s),e()):o?o.onstatechange=l=>{var h;((h=l.target)===null||h===void 0?void 0:h.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(r,e){if(!e&&!r.swRegistration&&await vP(r),!(!e&&r.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw zt.create("invalid-sw-registration");r.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(r,e){e?r.vapidKey=e:r.vapidKey||(r.vapidKey=vE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(r,e){if(!navigator)throw zt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw zt.create("permission-blocked");return await TP(r,e==null?void 0:e.vapidKey),await EP(r,e==null?void 0:e.serviceWorkerRegistration),uP(r)}/**
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
 */async function IP(r,e,t){const s=SP(e);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:t[wE],message_name:t[GC],message_time:t[QC],message_device_time:Math.floor(Date.now()/1e3)})}function SP(r){switch(r){case ul.NOTIFICATION_CLICKED:return"notification_open";case ul.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(r,e){const t=e.data;if(!t.isFirebaseMessaging)return;r.onMessageHandler&&t.messageType===ul.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(k_(t)):r.onMessageHandler.next(k_(t)));const s=t.data;gP(s)&&s[YC]==="1"&&await IP(r,t.messageType,s)}const R_="@firebase/messaging",C_="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=r=>{const e=new _P(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>AP(e,t)),e},RP=r=>{const e=r.getProvider("messaging").getImmediate();return{getToken:s=>SE(e,s)}};function CP(){cr(new Hn("messaging",kP,"PUBLIC")),cr(new Hn("messaging-internal",RP,"PRIVATE")),An(R_,C_),An(R_,C_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(){try{await U_()}catch{return!1}return typeof window<"u"&&F_()&&lT()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(r,e){if(!navigator)throw zt.create("only-available-in-window");return r.onMessageHandler=e,()=>{r.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(r=vf()){return AE().then(e=>{if(!e)throw zt.create("unsupported-browser")},e=>{throw zt.create("indexed-db-unsupported")}),Uo(et(r),"messaging").getImmediate()}async function Ap(r,e){return r=et(r),SE(r,e)}function DP(r,e){return r=et(r),PP(r,e)}CP();const OP={apiKey:"AIzaSyBxlG_O8h-d8fHku5iNLNrCkyXVYxa7vC8",authDomain:"bm-app-ae5f1.firebaseapp.com",projectId:"bm-app-ae5f1",storageBucket:"bm-app-ae5f1.firebasestorage.app",messagingSenderId:"555817344714",appId:"1:555817344714:web:3a614cd195626f21cade33"},kp=B_(OP),hl=LS(kp),Ko=LR(kp),VP=new Or;async function Kc(){return await AE()?NP(kp):null}function xP(r){var e;return gp(El(Ko,"users",r.uid),{name:r.displayName||((e=r.email)==null?void 0:e.split("@")[0])||"User",email:r.email||"",fcmTokens:[],approved:!0},{merge:!0})}function bP(r,e,t){var s;return eC(Bw(Ko,"submissions"),{userId:r.uid,userName:r.displayName||((s=r.email)==null?void 0:s.split("@")[0])||"User",value:e,link:t,viewedBy:{},createdAt:rC()})}function LP(r,e,t=null){const s=[KR("createdAt","desc")];return t&&s.push(QR(t)),s.push(GR(20)),tC(WR(Bw(Ko,"submissions"),...s),o=>r({items:o.docs.map(l=>({id:l.id,...l.data()})),lastDoc:o.docs.at(-1)||null}),e)}function kE(r,e){return gp(El(Ko,"users",r),{fcmTokens:iC(e)},{merge:!0})}function MP(r,e){return gp(El(Ko,"users",r),{fcmTokens:sC(e)},{merge:!0})}function FP(r,e){var s;const t=e.displayName||((s=e.email)==null?void 0:s.split("@")[0])||"User";return ZR(El(Ko,"submissions",r),{[`viewedBy.${e.uid}`]:t})}async function P_(r){if(!("Notification"in window))throw new Error("This browser does not support notifications.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");const t=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),s=await Kc();if(!s)throw new Error("Messaging is unavailable in this browser.");const o=await Ap(s,{vapidKey:"BI-MfWS4wtluiWZi5STzk4_aKLU7Z6_0qqkh63ALDoKU5YW8MFzkKTV8BFu5z1GM6Tv5BxCDqT07I1_ZoGg13Rw",serviceWorkerRegistration:t});if(!o)throw new Error("No notification token was returned.");return await kE(r.uid,o),o}async function UP(r){if(!("Notification"in window)||Notification.permission!=="granted")return!1;try{const e=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),t=await Kc();if(!t)return!1;const s=await Ap(t,{vapidKey:"BI-MfWS4wtluiWZi5STzk4_aKLU7Z6_0qqkh63ALDoKU5YW8MFzkKTV8BFu5z1GM6Tv5BxCDqT07I1_ZoGg13Rw",serviceWorkerRegistration:e});return s?(await kE(r.uid,s),!0):!1}catch{return!1}}async function jP(r){if(!(!("Notification"in window)||Notification.permission!=="granted"))try{const e=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),t=await Kc();if(!t)return;const s=await Ap(t,{vapidKey:"BI-MfWS4wtluiWZi5STzk4_aKLU7Z6_0qqkh63ALDoKU5YW8MFzkKTV8BFu5z1GM6Tv5BxCDqT07I1_ZoGg13Rw",serviceWorkerRegistration:e});s&&await MP(r.uid,s)}catch{}}async function zP(){const r=await Kc();return r?DP(r,e=>{var t,s;return new Notification(((t=e.notification)==null?void 0:t.title)||"Bookmark update",{body:(s=e.notification)==null?void 0:s.body})}):()=>{}}const BP=(r,e)=>E1(hl,r,e),$P=()=>H1(hl,VP);async function Bd(){const r=hl.currentUser;return r&&await jP(r),A1(hl)}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),RE=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var HP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=ze.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...f},g)=>ze.createElement("svg",{ref:g,...HP,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:RE("lucide",o),...f},[...h.map(([_,w])=>ze.createElement(_,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=(r,e)=>{const t=ze.forwardRef(({className:s,...o},l)=>ze.createElement(WP,{ref:l,iconNode:e,className:RE(`lucide-${qP(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=Kt("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=Kt("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=Kt("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=Kt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=Kt("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=Kt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=Kt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=Kt("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=Kt("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=Kt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=Kt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=Kt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=Kt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=Kt("ShieldX",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=Kt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function lN(){const[r,e]=ze.useState(""),[t,s]=ze.useState(""),[o,l]=ze.useState(""),[h,f]=ze.useState(!1);async function g(_){f(!0),l("");try{await _()}catch(w){l(w.code==="auth/popup-closed-by-user"?"Sign-in was cancelled.":"Unable to sign in. Check your details and try again.")}finally{f(!1)}}return Q.jsx("main",{className:"auth-shell",children:Q.jsxs("section",{className:"auth-card",children:[Q.jsxs("div",{className:"brand",children:[Q.jsx(GP,{})," ",Q.jsx("span",{children:"Bookmark Pair"})]}),Q.jsx("h1",{children:"A small space for two."}),Q.jsx("p",{children:"Sign in with an approved account to continue."}),Q.jsxs("form",{onSubmit:_=>{_.preventDefault(),g(()=>BP(r,t))},children:[Q.jsxs("label",{children:["Email",Q.jsx("input",{type:"email",value:r,onChange:_=>e(_.target.value),required:!0,autoComplete:"email"})]}),Q.jsxs("label",{children:["Password",Q.jsx("input",{type:"password",value:t,onChange:_=>s(_.target.value),required:!0,autoComplete:"current-password"})]}),o&&Q.jsx("p",{className:"error",role:"alert",children:o}),Q.jsxs("button",{disabled:h,className:"primary",children:[Q.jsx(tN,{size:18}),h?"Signing in…":"Sign in"]})]}),Q.jsx("div",{className:"or",children:"or"}),Q.jsxs("button",{disabled:h,className:"secondary",onClick:()=>g($P),children:[Q.jsx(QP,{size:18}),"Continue with Google"]})]})})}async function uN(r,e){const t="http://localhost:8787",s=await e.getIdToken();if(!(await fetch(`${t.replace(/\/$/,"")}/notify`,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({submissionId:r})})).ok)throw new Error("Notification delivery failed.")}function cN({user:r,notificationsEnabled:e}){const[t,s]=ze.useState("none"),[o,l]=ze.useState(""),[h,f]=ze.useState("idle"),g=[["none","None"],["bookmark_now","Bookmark now"],["bookmark_later","Bookmark later"]],_=h==="sending"||!e;async function w(T){if(T.preventDefault(),_)return;const k=o.trim();if(!k&&t==="none")return f("required");if(k&&!/^https?:\/\/.+/i.test(k))return f("invalid");f("sending");try{const U=await bP(r,t,k);uN(U.id,r).catch(()=>{}),f("done"),l(""),s("none")}catch{f("error")}}return Q.jsxs("section",{className:`card form-card ${e?"":"form-locked"}`,children:[Q.jsx("h2",{children:"New bookmark"}),Q.jsx("p",{children:"Share a link, choose a bookmark option, or do both."}),!e&&Q.jsx("p",{className:"form-lock-message",role:"status",children:"Enable notifications above to unlock this form."}),Q.jsxs("form",{onSubmit:w,children:[Q.jsxs("label",{htmlFor:"bookmark-link",children:["Link ",Q.jsx("span",{className:"optional",children:"(optional)"}),Q.jsx("input",{id:"bookmark-link",type:"url",value:o,onChange:T=>{l(T.target.value),f("idle")},placeholder:"https://example.com",disabled:_})]}),Q.jsxs("fieldset",{className:"choice-group",disabled:_,children:[Q.jsx("legend",{children:"Bookmark timing"}),Q.jsx("div",{className:"chips",children:g.map(([T,k])=>Q.jsxs("label",{className:`chip ${t===T?"selected":""}`,children:[Q.jsx("input",{type:"radio",name:"bookmark-choice",value:T,checked:t===T,onChange:()=>{s(T),f("idle")}}),Q.jsx("span",{children:k})]},T))})]}),Q.jsxs("button",{className:"primary",disabled:_,children:[Q.jsx(sN,{size:18}),h==="sending"?"Submitting…":"Submit"]}),h==="done"&&Q.jsx("p",{className:"success",role:"status",children:"Saved"}),h==="required"&&Q.jsx("p",{className:"error",role:"alert",children:"Add a link or choose Bookmark now / Bookmark later."}),h==="invalid"&&Q.jsx("p",{className:"error",role:"alert",children:"Enter a valid link beginning with http:// or https://."}),h==="error"&&Q.jsx("p",{className:"error",role:"alert",children:"Couldn’t save that. Please try again."})]})]})}const hN={none:"None",bookmark_now:"Bookmark now",bookmark_later:"Bookmark later"};function dN({items:r,error:e,user:t,page:s,onPrevious:o,onNext:l,canNext:h}){function f(g){FP(g.id,t).catch(()=>{})}return Q.jsxs("section",{className:"activity",children:[Q.jsx("h2",{className:"activity-heading",children:"Recent activity"}),e?Q.jsx("p",{className:"error",children:e}):r.length===0?Q.jsxs("div",{className:"empty",children:[Q.jsx(eN,{size:26}),Q.jsx("p",{children:"No bookmarks yet."})]}):Q.jsx("div",{className:"feed",children:r.map(g=>{var w,T;const _=Object.values(g.viewedBy||{});return Q.jsxs("article",{className:"activity-item link-item",children:[Q.jsx("div",{className:"avatar",children:(w=g.userName)==null?void 0:w.charAt(0).toUpperCase()}),Q.jsxs("div",{className:"activity-content",children:[Q.jsx("strong",{children:g.userName}),Q.jsx("p",{children:hN[g.value]||g.value}),g.link&&Q.jsxs("a",{className:"shared-link",href:g.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>f(g),children:[Q.jsx(JP,{size:14})," Open shared link"]}),_.length>0&&Q.jsxs("p",{className:"viewed",children:[Q.jsx(ZP,{size:14})," Viewed by ",_.join(", ")]})]}),Q.jsx("time",{children:(T=g.createdAt)!=null&&T.toDate?g.createdAt.toDate().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"Just now"})]},g.id)})}),Q.jsxs("nav",{className:"pagination","aria-label":"Activity pages",children:[Q.jsx("button",{className:"page-button",onClick:o,disabled:s===1,children:"Previous"}),Q.jsxs("span",{children:["Page ",s]}),Q.jsx("button",{className:"page-button",onClick:l,disabled:!h,children:"Next"})]})]})}function fN({user:r,items:e,feedError:t,dark:s,setDark:o,onLogout:l,notificationsEnabled:h,setNotificationsEnabled:f,page:g,onPrevious:_,onNext:w,canNext:T}){var D;const[k,U]=ze.useState(""),[$,K]=ze.useState(!1),[B,he]=ze.useState(!1);async function ie(){K(!0);try{await P_(r),f(!0),U("Notifications are on for this device.")}catch(S){f(!1),U(S.message)}finally{K(!1)}}async function fe(){if(window.confirm("Refresh this device’s FCM token?")){he(!0);try{await P_(r),f(!0),U("FCM token refreshed for this device.")}catch(S){f(!1),U(S.message)}finally{he(!1)}}}const ve=r.displayName||((D=r.email)==null?void 0:D.split("@")[0])||"there",be=h?"Notifications enabled":"Notifications disabled",Te=h?"This device can receive private bookmark alerts.":"Enable notifications before submitting a bookmark.";return Q.jsxs("main",{className:"app-shell",children:[Q.jsxs("header",{children:[Q.jsx("div",{children:Q.jsxs("h1",{children:["Hello, ",ve]})}),Q.jsxs("div",{className:"controls",children:[Q.jsx("button",{"aria-label":"Toggle theme",className:"icon",onClick:()=>o(!s),children:s?Q.jsx(aN,{size:19}):Q.jsx(rN,{size:19})}),Q.jsxs("button",{className:"logout",onClick:l,children:[Q.jsx(nN,{size:17}),Q.jsx("span",{children:"Logout"})]})]})]}),Q.jsxs("section",{className:`push-row notification-status ${h?"enabled":"disabled"}`,children:[Q.jsxs("div",{className:"notification-copy",children:[Q.jsx("span",{className:"notification-icon","aria-hidden":"true",children:h?Q.jsx(YP,{size:20}):Q.jsx(XP,{size:20})}),Q.jsxs("div",{children:[Q.jsx("strong",{children:be}),Q.jsx("small",{children:Te})]})]}),h?Q.jsx("button",{className:"text-button",onClick:fe,disabled:B,children:B?"Refreshing…":Q.jsxs(Q.Fragment,{children:[Q.jsx(iN,{size:16})," Refresh FCM token"]})}):Q.jsx("button",{className:"text-button",onClick:ie,disabled:$,children:$?"Enabling…":Q.jsxs(Q.Fragment,{children:[Q.jsx(KP,{size:16})," Enable notifications"]})})]}),k&&Q.jsx("p",{className:"notice",role:"status",children:k}),Q.jsx(cN,{user:r,notificationsEnabled:h}),Q.jsx(dN,{items:e,error:t,user:r,page:g,onPrevious:_,onNext:w,canNext:T})]})}function pN(){return Q.jsx("main",{className:"center",children:Q.jsxs("section",{className:"denied",children:[Q.jsx(oN,{size:36}),Q.jsx("h1",{children:"Access denied"}),Q.jsx("p",{children:"This account is not approved for this private app. You have been signed out."})]})})}const mN="ty2E8bD4ALVEwmpHNp4fIyOVQ7m2,5lOhcWjXGdZUKJ1kdhxgqKtX3HQ2,uwt7mhHGgqeaIxVcLXAv57gXULH2".split(",").map(r=>r.trim()).filter(Boolean);function gN(){const[r,e]=ze.useState(void 0),[t,s]=ze.useState(!1),[o,l]=ze.useState([]),[h,f]=ze.useState([null]),[g,_]=ze.useState(null),[w,T]=ze.useState(""),[k,U]=ze.useState(!1),[$,K]=ze.useState(()=>localStorage.getItem("theme")==="dark"||!localStorage.getItem("theme")&&matchMedia("(prefers-color-scheme: dark)").matches);if(ze.useEffect(()=>{document.documentElement.dataset.theme=$?"dark":"light",localStorage.setItem("theme",$?"dark":"light")},[$]),ze.useEffect(()=>S1(hl,async ie=>{if(!ie){e(null),s(!1),U(!1);return}if(!mN.includes(ie.uid)){s(!0),e(null),await Bd();return}try{await xP(ie),U(await UP(ie)),e(ie)}catch{s(!0),await Bd()}}),[]),ze.useEffect(()=>{if(!r)return;const ie=h.at(-1),fe=LP(be=>{l(be.items),_(be.lastDoc)},()=>T("Unable to load activity. Please try again."),ie);let ve=()=>{};return zP().then(be=>{ve=be}),()=>{fe(),ve()}},[r,h]),ze.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").catch(()=>{})},[]),t)return Q.jsx(pN,{});if(r===void 0)return Q.jsxs("main",{className:"center",children:[Q.jsx("span",{className:"spinner"})," Loading securely…"]});const B=()=>f(ie=>ie.length>1?ie.slice(0,-1):ie),he=()=>{g&&f(ie=>[...ie,g])};return r?Q.jsx(fN,{user:r,items:o,feedError:w,dark:$,setDark:K,onLogout:Bd,notificationsEnabled:k,setNotificationsEnabled:U,page:h.length,onPrevious:B,onNext:he,canNext:o.length===20}):Q.jsx(lN,{})}z0.createRoot(document.getElementById("root")).render(Q.jsx(b0.StrictMode,{children:Q.jsx(gN,{})}));

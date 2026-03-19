var wh=Object.defineProperty;var Ch=(s,e,t)=>e in s?wh(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var R=(s,e,t)=>Ch(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs=globalThis,Wo=zs.ShadowRoot&&(zs.ShadyCSS===void 0||zs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,su=Symbol(),El=new WeakMap;let Sh=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==su)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Wo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=El.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&El.set(t,e))}return e}toString(){return this.cssText}};const $h=s=>new Sh(typeof s=="string"?s:s+"",void 0,su),Ph=(s,e)=>{if(Wo)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=zs.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},Al=Wo?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return $h(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:kh,defineProperty:Th,getOwnPropertyDescriptor:Oh,getOwnPropertyNames:Eh,getOwnPropertySymbols:Ah,getPrototypeOf:Lh}=Object,Ii=globalThis,Ll=Ii.trustedTypes,Mh=Ll?Ll.emptyScript:"",Ta=Ii.reactiveElementPolyfillSupport,kr=(s,e)=>s,Ws={toAttribute(s,e){switch(e){case Boolean:s=s?Mh:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Yo=(s,e)=>!kh(s,e),Ml={attribute:!0,type:String,converter:Ws,reflect:!1,useDefault:!1,hasChanged:Yo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ii.litPropertyMetadata??(Ii.litPropertyMetadata=new WeakMap);let jn=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ml){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Th(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=Oh(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:n,set(a){const o=n==null?void 0:n.call(this);r==null||r.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ml}static _$Ei(){if(this.hasOwnProperty(kr("elementProperties")))return;const e=Lh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(kr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kr("properties"))){const t=this.properties,i=[...Eh(t),...Ah(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Al(n))}else e!==void 0&&t.push(Al(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ph(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const a=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Ws).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){var r,a;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Ws;this._$Em=n;const c=l.fromAttribute(t,o.type);this[n]=c??((a=this._$Ej)==null?void 0:a.get(n))??c,this._$Em=null}}requestUpdate(e,t,i,n=!1,r){var a;if(e!==void 0){const o=this.constructor;if(n===!1&&(r=this[e]),i??(i=o.getPropertyOptions(e)),!((i.hasChanged??Yo)(r,t)||i.useDefault&&i.reflect&&r===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:r},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,a]of n){const{wrapped:o}=a,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};jn.elementStyles=[],jn.shadowRootOptions={mode:"open"},jn[kr("elementProperties")]=new Map,jn[kr("finalized")]=new Map,Ta==null||Ta({ReactiveElement:jn}),(Ii.reactiveElementVersions??(Ii.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=globalThis,zl=s=>s,Ys=Tr.trustedTypes,Dl=Ys?Ys.createPolicy("lit-html",{createHTML:s=>s}):void 0,au="$lit$",Li=`lit$${Math.random().toFixed(9).slice(2)}$`,ou="?"+Li,zh=`<${ou}>`,_n=document,Br=()=>_n.createComment(""),qr=s=>s===null||typeof s!="object"&&typeof s!="function",Xo=Array.isArray,Dh=s=>Xo(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Oa=`[ 	
\f\r]`,fr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rl=/-->/g,jl=/>/g,Zi=RegExp(`>|${Oa}(?:([^\\s"'>=/]+)(${Oa}*=${Oa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Il=/'/g,Nl=/"/g,lu=/^(?:script|style|textarea|title)$/i,Rh=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),D=Rh(1),vn=Symbol.for("lit-noChange"),Me=Symbol.for("lit-nothing"),Fl=new WeakMap,an=_n.createTreeWalker(_n,129);function cu(s,e){if(!Xo(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dl!==void 0?Dl.createHTML(e):e}const jh=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",a=fr;for(let o=0;o<t;o++){const l=s[o];let c,u,h=-1,d=0;for(;d<l.length&&(a.lastIndex=d,u=a.exec(l),u!==null);)d=a.lastIndex,a===fr?u[1]==="!--"?a=Rl:u[1]!==void 0?a=jl:u[2]!==void 0?(lu.test(u[2])&&(n=RegExp("</"+u[2],"g")),a=Zi):u[3]!==void 0&&(a=Zi):a===Zi?u[0]===">"?(a=n??fr,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?Zi:u[3]==='"'?Nl:Il):a===Nl||a===Il?a=Zi:a===Rl||a===jl?a=fr:(a=Zi,n=void 0);const f=a===Zi&&s[o+1].startsWith("/>")?" ":"";r+=a===fr?l+zh:h>=0?(i.push(c),l.slice(0,h)+au+l.slice(h)+Li+f):l+Li+(h===-2?o:f)}return[cu(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Wr{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,a=0;const o=e.length-1,l=this.parts,[c,u]=jh(e,t);if(this.el=Wr.createElement(c,i),an.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=an.nextNode())!==null&&l.length<o;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(au)){const d=u[a++],f=n.getAttribute(h).split(Li),g=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?Nh:g[1]==="?"?Fh:g[1]==="@"?Uh:_a}),n.removeAttribute(h)}else h.startsWith(Li)&&(l.push({type:6,index:r}),n.removeAttribute(h));if(lu.test(n.tagName)){const h=n.textContent.split(Li),d=h.length-1;if(d>0){n.textContent=Ys?Ys.emptyScript:"";for(let f=0;f<d;f++)n.append(h[f],Br()),an.nextNode(),l.push({type:2,index:++r});n.append(h[d],Br())}}}else if(n.nodeType===8)if(n.data===ou)l.push({type:2,index:r});else{let h=-1;for(;(h=n.data.indexOf(Li,h+1))!==-1;)l.push({type:7,index:r}),h+=Li.length-1}r++}}static createElement(e,t){const i=_n.createElement("template");return i.innerHTML=e,i}}function Gn(s,e,t=s,i){var a,o;if(e===vn)return e;let n=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const r=qr(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((o=n==null?void 0:n._$AO)==null||o.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=Gn(s,n._$AS(s,e.values),n,i)),e}class Ih{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??_n).importNode(t,!0);an.currentNode=n;let r=an.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new ls(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new Hh(r,this,e)),this._$AV.push(c),l=i[++o]}a!==(l==null?void 0:l.index)&&(r=an.nextNode(),a++)}return an.currentNode=_n,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ls{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Me,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Gn(this,e,t),qr(e)?e===Me||e==null||e===""?(this._$AH!==Me&&this._$AR(),this._$AH=Me):e!==this._$AH&&e!==vn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Dh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Me&&qr(this._$AH)?this._$AA.nextSibling.data=e:this.T(_n.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Wr.createElement(cu(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(t);else{const a=new Ih(n,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Fl.get(e.strings);return t===void 0&&Fl.set(e.strings,t=new Wr(e)),t}k(e){Xo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new ls(this.O(Br()),this.O(Br()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const n=zl(e).nextSibling;zl(e).remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class _a{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=Me,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Me}_$AI(e,t=this,i,n){const r=this.strings;let a=!1;if(r===void 0)e=Gn(this,e,t,0),a=!qr(e)||e!==this._$AH&&e!==vn,a&&(this._$AH=e);else{const o=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Gn(this,o[i+l],t,l),c===vn&&(c=this._$AH[l]),a||(a=!qr(c)||c!==this._$AH[l]),c===Me?e=Me:e!==Me&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!n&&this.j(e)}j(e){e===Me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Nh extends _a{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Me?void 0:e}}class Fh extends _a{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Me)}}class Uh extends _a{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=Gn(this,e,t,0)??Me)===vn)return;const i=this._$AH,n=e===Me&&i!==Me||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Me&&(i===Me||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Hh{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Gn(this,e)}}const Ea=Tr.litHtmlPolyfillSupport;Ea==null||Ea(Wr,ls),(Tr.litHtmlVersions??(Tr.litHtmlVersions=[])).push("3.3.2");const Vh=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new ls(e.insertBefore(Br(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cn=globalThis;let G=class extends jn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vh(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return vn}};var ru;G._$litElement$=!0,G.finalized=!0,(ru=cn.litElementHydrateSupport)==null||ru.call(cn,{LitElement:G});const Aa=cn.litElementPolyfillSupport;Aa==null||Aa({LitElement:G});(cn.litElementVersions??(cn.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bh={attribute:!0,type:String,converter:Ws,reflect:!1,hasChanged:Yo},qh=(s=Bh,e,t)=>{const{kind:i,metadata:n}=t;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,s,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,s,o),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,s,!0,o)}}throw Error("Unsupported decorator location: "+i)};function L(s){return(e,t)=>typeof t=="object"?qh(s,e,t):((i,n,r)=>{const a=n.hasOwnProperty(r);return n.constructor.createProperty(r,i),a?Object.getOwnPropertyDescriptor(n,r):void 0})(s,e,t)}function mi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function uu(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Kn={duration:.5,overwrite:!1,delay:0},Go,Ze,_e,Ht=1e8,fe=1/Ht,Ka=Math.PI*2,Wh=Ka/4,Yh=0,du=Math.sqrt,Xh=Math.cos,Gh=Math.sin,Ye=function(e){return typeof e=="string"},ke=function(e){return typeof e=="function"},wi=function(e){return typeof e=="number"},Ko=function(e){return typeof e>"u"},li=function(e){return typeof e=="object"},bt=function(e){return e!==!1},Jo=function(){return typeof window<"u"},gs=function(e){return ke(e)||Ye(e)},hu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},at=Array.isArray,Kh=/random\([^)]+\)/g,Jh=/,\s*/g,Ul=/(?:-?\.?\d|\.)+/gi,fu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,La=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pu=/[+-]=-?[.\d]+/,Zh=/[^,'"\[\]\s]+/gi,Qh=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,ei,Ja,Zo,Rt={},Xs={},gu,mu=function(e){return(Xs=Jn(e,Rt))&&Ct},Qo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yr=function(e,t){return!t&&console.warn(e)},_u=function(e,t){return e&&(Rt[e]=t)&&Xs&&(Xs[e]=t)||Rt},Xr=function(){return 0},ef={suppressEvents:!0,isStart:!0,kill:!1},Ds={suppressEvents:!0,kill:!1},tf={suppressEvents:!0},el={},Ni=[],Za={},vu,Ot={},Ma={},Hl=30,Rs=[],tl="",il=function(e){var t=e[0],i,n;if(li(t)||ke(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Rs.length;n--&&!Rs[n].targetTest(t););i=Rs[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Hu(e[n],i)))||e.splice(n,1);return e},un=function(e){return e._gsap||il(Vt(e))[0]._gsap},bu=function(e,t,i){return(i=e[t])&&ke(i)?e[t]():Ko(i)&&e.getAttribute&&e.getAttribute(t)||i},yt=function(e,t){return(e=e.split(",")).forEach(t)||e},Le=function(e){return Math.round(e*1e5)/1e5||0},be=function(e){return Math.round(e*1e7)/1e7||0},Vn=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},nf=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Gs=function(){var e=Ni.length,t=Ni.slice(0),i,n;for(Za={},Ni.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},nl=function(e){return!!(e._initted||e._startAt||e.add)},yu=function(e,t,i,n){Ni.length&&!Ze&&Gs(),e.render(t,i,!!(Ze&&t<0&&nl(e))),Ni.length&&!Ze&&Gs()},xu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zh).length<2?t:Ye(e)?e.trim():e},wu=function(e){return e},jt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},rf=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Jn=function(e,t){for(var i in t)e[i]=t[i];return e},Vl=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=li(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},Ks=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Or=function(e){var t=e.parent||ye,i=e.keyframes?rf(at(e.keyframes)):jt;if(bt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},sf=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Cu=function(e,t,i,n,r){var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},va=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Hi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},dn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},af=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qa=function(e,t,i,n){return e._startAt&&(Ze?e._startAt.revert(Ds):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},of=function s(e){return!e||e._ts&&s(e.parent)},Bl=function(e){return e._repeat?Zn(e._tTime,e=e.duration()+e._rDelay)*e:0},Zn=function(e,t){var i=Math.floor(e=be(e/t));return e&&i===e?i-1:i},Js=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ba=function(e){return e._end=be(e._start+(e._tDur/Math.abs(e._ts||e._rts||fe)||0))},ya=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=be(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ba(e),i._dirty||dn(i,e)),e},Su=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Js(e.rawTime(),t),(!t._dur||cs(0,t.totalDuration(),i)-t._tTime>fe)&&t.render(i,!0)),dn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-fe}},ii=function(e,t,i,n){return t.parent&&Hi(t),t._start=be((wi(i)?i:i||e!==ye?Nt(e,i,t):e._time)+t._delay),t._end=be(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Cu(e,t,"_first","_last",e._sort?"_start":0),eo(t)||(e._recent=t),n||Su(e,t),e._ts<0&&ya(e,e._tTime),e},$u=function(e,t){return(Rt.ScrollTrigger||Qo("scrollTrigger",t))&&Rt.ScrollTrigger.create(t,e)},Pu=function(e,t,i,n,r){if(sl(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Ze&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vu!==At.frame)return Ni.push(e),e._lazy=[r,n],1},lf=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},eo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cf=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&lf(e)&&!(!e._initted&&eo(e))||(e._ts<0||e._dp._ts<0)&&!eo(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=cs(0,e._tDur,t),u=Zn(l,o),e._yoyo&&u&1&&(a=1-a),u!==Zn(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ze||n||e._zTime===fe||!t&&e._zTime){if(!e._initted&&Pu(e,t,n,i,l))return;for(h=e._zTime,e._zTime=t||(i?fe:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Qa(e,t,i,!0),e._onUpdate&&!i&&Mt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Mt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Hi(e,1),!i&&!Ze&&(Mt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uf=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Qn=function(e,t,i,n){var r=e._repeat,a=be(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:be(a*(r+1)+e._rDelay*r):a,o>0&&!n&&ya(e,e._tTime=e._tDur*o),e.parent&&ba(e),i||dn(e.parent,e),e},ql=function(e){return e instanceof pt?dn(e):Qn(e,e._dur)},df={_start:0,endTime:Xr,totalDuration:Xr},Nt=function s(e,t,i){var n=e.labels,r=e._recent||df,a=e.duration()>=Ht?r.endTime(!1):e._dur,o,l,c;return Ye(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(at(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Er=function(e,t,i){var n=wi(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=bt(l.vars.inherit)&&l.parent;a.immediateRender=bt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new je(t[0],a,t[r+1])},Wi=function(e,t){return e||e===0?t(e):t},cs=function(e,t,i){return i<e?e:i>t?t:i},rt=function(e,t){return!Ye(e)||!(t=Qh.exec(e))?"":t[1]},hf=function(e,t,i){return Wi(i,function(n){return cs(e,t,n)})},to=[].slice,ku=function(e,t){return e&&li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&li(e[0]))&&!e.nodeType&&e!==ei},ff=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Ye(n)&&!t||ku(n,1)?(r=i).push.apply(r,Vt(n)):i.push(n)})||i},Vt=function(e,t,i){return _e&&!t&&_e.selector?_e.selector(e):Ye(e)&&!i&&(Ja||!er())?to.call((t||Zo).querySelectorAll(e),0):at(e)?ff(e,i):ku(e)?to.call(e,0):e?[e]:[]},io=function(e){return e=Vt(e)[0]||Yr("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Vt(t,i.querySelectorAll?i:i===e?Yr("Invalid scope")||Zo.createElement("div"):e)}},Tu=function(e){return e.sort(function(){return .5-Math.random()})},Ou=function(e){if(ke(e))return e;var t=li(e)?e:{each:e},i=hn(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,h=n;return Ye(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],h=n[1]),function(d,f,g){var p=(g||t).length,_=a[p],v,b,w,x,S,P,C,T,k;if(!_){if(k=t.grid==="auto"?0:(t.grid||[1,Ht])[1],!k){for(C=-Ht;C<(C=g[k++].getBoundingClientRect().left)&&k<p;);k<p&&k--}for(_=a[p]=[],v=l?Math.min(k,p)*u-.5:n%k,b=k===Ht?0:l?p*h/k-.5:n/k|0,C=0,T=Ht,P=0;P<p;P++)w=P%k-v,x=b-(P/k|0),_[P]=S=c?Math.abs(c==="y"?x:w):du(w*w+x*x),S>C&&(C=S),S<T&&(T=S);n==="random"&&Tu(_),_.max=C-T,_.min=T,_.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(k>p?p-1:c?c==="y"?p/k:k:Math.max(k,p/k))||0)*(n==="edges"?-1:1),_.b=p<0?r-p:r,_.u=rt(t.amount||t.each)||0,i=i&&p<0?Nu(i):i}return p=(_[d]-_.min)/_.max||0,be(_.b+(i?i(p):p)*_.v)+_.u}},no=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=be(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(wi(i)?0:rt(i))}},Eu=function(e,t){var i=at(e),n,r;return!i&&li(e)&&(n=i=e.radius||Ht,e.values?(e=Vt(e.values),(r=!wi(e[0]))&&(n*=n)):e=no(e.increment)),Wi(t,i?ke(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ht,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!n||c<=n?e[u]:a,r||u===a||wi(a)?u:u+rt(a)}:no(e))},Au=function(e,t,i,n){return Wi(at(e)?!t:i===!0?!!(i=0):!n,function(){return at(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},pf=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},gf=function(e,t){return function(i){return e(parseFloat(i))+(t||rt(i))}},mf=function(e,t,i){return Mu(e,t,0,1,i)},Lu=function(e,t,i){return Wi(i,function(n){return e[~~t(n)]})},_f=function s(e,t,i){var n=t-e;return at(e)?Lu(e,s(0,e.length),t):Wi(i,function(r){return(n+(r-e)%n)%n+e})},vf=function s(e,t,i){var n=t-e,r=n*2;return at(e)?Lu(e,s(0,e.length-1),t):Wi(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},Gr=function(e){return e.replace(Kh,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Jh);return Au(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Mu=function(e,t,i,n,r){var a=t-e,o=n-i;return Wi(r,function(l){return i+((l-e)/a*o||0)})},bf=function s(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Ye(e),o={},l,c,u,h,d;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(at(e)&&!at(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var p=Math.min(d,~~g);return u[p](g-p)},i=t}else n||(e=Jn(at(e)?[]:{},e));if(!u){for(l in t)rl.call(o,e,l,"get",t[l]);r=function(g){return ll(g,o)||(a?e.p:e)}}}return Wi(i,r)},Wl=function(e,t,i){var n=e.labels,r=Ht,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Mt=function(e,t,i){var n=e.vars,r=n[t],a=_e,o=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Ni.length&&Gs(),o&&(_e=o),u=l?r.apply(c,l):r.call(c),_e=a,u},yr=function(e){return Hi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ze),e.progress()<1&&Mt(e,"onInterrupt"),e},Un,zu=[],Du=function(e){if(e)if(e=!e.name&&e.default||e,Jo()||e.headless){var t=e.name,i=ke(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Xr,render:ll,add:rl,kill:Df,modifier:zf,rawVars:0},a={targetTest:0,get:0,getSetter:ol,aliases:{},register:0};if(er(),e!==n){if(Ot[t])return;jt(n,jt(Ks(e,r),a)),Jn(n.prototype,Jn(r,Ks(e,a))),Ot[n.prop=t]=n,e.targetTest&&(Rs.push(n),el[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_u(t,n),e.register&&e.register(Ct,n,xt)}else zu.push(e)},he=255,xr={aqua:[0,he,he],lime:[0,he,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,he],navy:[0,0,128],white:[he,he,he],olive:[128,128,0],yellow:[he,he,0],orange:[he,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[he,0,0],pink:[he,192,203],cyan:[0,he,he],transparent:[he,he,he,0]},za=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*he+.5|0},Ru=function(e,t,i){var n=e?wi(e)?[e>>16,e>>8&he,e&he]:0:xr.black,r,a,o,l,c,u,h,d,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xr[e])n=xr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&he,n&he,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&he,e&he]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Ul),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,n.length>3&&(n[3]*=1),n[0]=za(l+1/3,r,a),n[1]=za(l,r,a),n[2]=za(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(fu),i&&n.length<4&&(n[3]=1),n}else n=e.match(Ul)||xr.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/he,a=n[1]/he,o=n[2]/he,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(a-o)/f+(a<o?6:0):h===a?(o-r)/f+2:(r-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},ju=function(e){var t=[],i=[],n=-1;return e.split(Fi).forEach(function(r){var a=r.match(Fn)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},Yl=function(e,t,i){var n="",r=(e+n).match(Fi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=Ru(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=ju(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(Fi,"1").split(Fn),h=c.length-1;o<h;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(Fi),h=c.length-1;o<h;o++)n+=c[o]+r[o];return n+c[h]},Fi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xr)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),yf=/hsl[a]?\(/,Iu=function(e){var t=e.join(" "),i;if(Fi.lastIndex=0,Fi.test(t))return i=yf.test(t),e[1]=Yl(e[1],i),e[0]=Yl(e[0],i,ju(e[1])),!0},Kr,At=(function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,u,h,d,f,g=function p(_){var v=s()-n,b=_===!0,w,x,S,P;if((v>e||v<0)&&(i+=v-t),n+=v,S=n-i,w=S-a,(w>0||b)&&(P=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,a+=w+(w>=r?4:r-w),x=1),b||(l=c(p)),x)for(f=0;f<o.length;f++)o[f](S,d,P,_)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){gu&&(!Ja&&Jo()&&(ei=Ja=window,Zo=ei.document||{},Rt.gsap=Ct,(ei.gsapVersions||(ei.gsapVersions=[])).push(Ct.version),mu(Xs||ei.GreenSockGlobals||!ei.gsap&&ei||{}),zu.forEach(Du)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(_){return setTimeout(_,a-h.time*1e3+1|0)},Kr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Kr=0,c=Xr},lagSmoothing:function(_,v){e=_||1/0,t=Math.min(v||33,e)},fps:function(_){r=1e3/(_||240),a=h.time*1e3+r},add:function(_,v,b){var w=v?function(x,S,P,C){_(x,S,P,C),h.remove(w)}:_;return h.remove(_),o[b?"unshift":"push"](w),er(),w},remove:function(_,v){~(v=o.indexOf(_))&&o.splice(v,1)&&f>=v&&f--},_listeners:o},h})(),er=function(){return!Kr&&At.wake()},se={},xf=/^[\d.\-M][\d.\-,\s]/,wf=/["']/g,Cf=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(wf,"").trim():+c,n=l.substr(o+1).trim();return t},Sf=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},$f=function(e){var t=(e+"").split("("),i=se[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Cf(t[1])]:Sf(e).split(",").map(xu)):se._CE&&xf.test(e)?se._CE("",e):i},Nu=function(e){return function(t){return 1-e(1-t)}},Fu=function s(e,t){for(var i=e._first,n;i;)i instanceof pt?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},hn=function(e,t){return e&&(ke(e)?e:se[e]||$f(e))||t},Pn=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return yt(e,function(o){se[o]=Rt[o]=r,se[a=o.toLowerCase()]=i;for(var l in r)se[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[o+"."+l]=r[l]}),r},Uu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Da=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/Ka*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*Gh((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Uu(o);return r=Ka/r,l.config=function(c,u){return s(e,c,u)},l},Ra=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Uu(i);return n.config=function(r){return s(e,r)},n};yt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Pn(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;Pn("Elastic",Da("in"),Da("out"),Da());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Pn("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Pn("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Pn("Circ",function(s){return-(du(1-s*s)-1)});Pn("Sine",function(s){return s===1?1:-Xh(s*Wh)+1});Pn("Back",Ra("in"),Ra("out"),Ra());se.SteppedEase=se.steps=Rt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-fe;return function(o){return((n*cs(0,a,o)|0)+r)*i}}};Kn.ease=se["quad.out"];yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return tl+=s+","+s+"Params,"});var Hu=function(e,t){this.id=Yh++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bu,this.set=t?t.getSetter:ol},Jr=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qn(this,+t.duration,1,1),this.data=t.data,_e&&(this._ctx=_e,_e.data.push(this)),Kr||At.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qn(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(er(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ya(this,i),!r._dp||r.parent||Su(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===fe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),yu(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Bl(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Bl(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Zn(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-fe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Js(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-fe?0:this._rts,this.totalTime(cs(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),ba(this),af(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(er(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fe&&(this._tTime-=fe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=be(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ii(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(bt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Js(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=tf);var n=Ze;return Ze=i,nl(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ze=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ql(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,ql(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Nt(this,i),bt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,bt(n)),this._dur||(this._zTime=-fe),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-fe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-fe,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-fe)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(a){var o=ke(i)?i:wu,l=function(){var u=n.then;n.then=null,r&&r(),ke(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=u),a(o),n.then=u};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){yr(this)},s})();jt(Jr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fe,_prom:0,_ps:!1,_rts:1});var pt=(function(s){uu(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=bt(i.sortChildren),ye&&ii(i.parent||ye,mi(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&$u(mi(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return Er(0,arguments,this),this},t.from=function(n,r,a){return Er(1,arguments,this),this},t.fromTo=function(n,r,a,o){return Er(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,Or(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new je(n,r,Nt(this,a),1),this},t.call=function(n,r,a){return ii(this,je.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new je(n,a,Nt(this,l)),this},t.staggerFrom=function(n,r,a,o,l,c,u){return a.runBackwards=1,Or(a).immediateRender=bt(a.immediateRender),this.staggerTo(n,r,a,o,l,c,u)},t.staggerFromTo=function(n,r,a,o,l,c,u,h){return o.startAt=a,Or(o).immediateRender=bt(o.immediateRender),this.staggerTo(n,r,o,l,c,u,h)},t.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:be(n),h=this._zTime<0!=n<0&&(this._initted||!c),d,f,g,p,_,v,b,w,x,S,P,C;if(this!==ye&&u>l&&n>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),d=u,x=this._start,w=this._ts,v=!w,h&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(P=this._yoyo,_=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,r,a);if(d=be(u%_),u===l?(p=this._repeat,d=c):(S=be(u/_),p=~~S,p&&p===S&&(d=c,p--),d>c&&(d=c)),S=Zn(this._tTime,_),!o&&this._tTime&&S!==p&&this._tTime-S*_-this._dur<=0&&(S=p),P&&p&1&&(d=c-d,C=1),p!==S&&!this._lock){var T=P&&S&1,k=T===(P&&p&1);if(p<S&&(T=!T),o=T?0:u%c?c:u,this._lock=1,this.render(o||(C?0:be(p*_)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Mt(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,S=p),o&&o!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,k&&(this._lock=2,o=T?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Fu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=uf(this,be(o),be(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&u&&c&&!r&&!S&&(Mt(this,"onStart"),this._tTime!==u))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!v){b=0,g&&(u+=this._zTime=-fe);break}}f=g}else{f=this._last;for(var O=n<0?n:d;f;){if(g=f._prev,(f._act||O<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(O-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(O-f._start)*f._ts,r,a||Ze&&nl(f)),d!==this._time||!this._ts&&!v){b=0,g&&(u+=this._zTime=O?-fe:fe);break}}f=g}}if(b&&!r&&(this.pause(),b.render(d>=o?0:-fe)._zTime=d>=o?1:-1,this._ts))return this._start=x,ba(this),this.render(n,r,a);this._onUpdate&&!r&&Mt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hi(this,1),!r&&!(n<0&&!o)&&(u||o||!l)&&(Mt(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(wi(r)||(r=Nt(this,r,n)),!(n instanceof Jr)){if(at(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Ye(n))return this.addLabel(n,r);if(ke(n))n=je.delayedCall(0,n);else return this}return this!==n?ii(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ht);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof je?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Ye(n)?this.removeLabel(n):ke(n)?this.killTweensOf(n):(n.parent===this&&va(this,n),n===this._recent&&(this._recent=this._last),dn(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(At.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Nt(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=je.delayedCall(0,r||Xr,a);return o.data="isPause",this._hasPause=1,ii(this,o,Nt(this,n))},t.removePause=function(n){var r=this._first;for(n=Nt(this,n);r;)r._start===n&&r.data==="isPause"&&Hi(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Mi!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=Vt(n),l=this._first,c=wi(r),u;l;)l instanceof je?nf(l._targets,o)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=Nt(a,n),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=je.to(a,jt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||fe,onStart:function(){if(a.pause(),!f){var _=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==_&&Qn(g,_,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,jt({startAt:{time:Nt(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Wl(this,Nt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Wl(this,Nt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+fe)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=be(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return dn(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),dn(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,l=Ht,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ii(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=be(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Qn(a,a===ye&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(ye._ts&&(yu(ye,Js(n,ye)),vu=At.frame),At.frame>=Hl){Hl+=Dt.autoSleep||120;var r=ye._first;if((!r||!r._ts)&&Dt.autoSleep&&At._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||At.sleep()}}},e})(Jr);jt(pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Pf=function(e,t,i,n,r,a,o){var l=new xt(this._pt,e,t,0,1,Xu,null,r),c=0,u=0,h,d,f,g,p,_,v,b;for(l.b=i,l.e=n,i+="",n+="",(v=~n.indexOf("random("))&&(n=Gr(n)),a&&(b=[i,n],a(b,e,t),i=b[0],n=b[1]),d=i.match(La)||[];h=La.exec(n);)g=h[0],p=n.substring(c,h.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(_=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:_,c:g.charAt(1)==="="?Vn(_,g)-_:parseFloat(g)-_,m:f&&f<4?Math.round:0},c=La.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(pu.test(n)||v)&&(l.e=0),this._pt=l,l},rl=function(e,t,i,n,r,a,o,l,c,u){ke(n)&&(n=n(r||0,e,a));var h=e[t],d=i!=="get"?i:ke(h)?c?e[t.indexOf("set")||!ke(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=ke(h)?c?Af:Wu:al,g;if(Ye(n)&&(~n.indexOf("random(")&&(n=Gr(n)),n.charAt(1)==="="&&(g=Vn(d,n)+(rt(d)||0),(g||g===0)&&(n=g))),!u||d!==n||ro)return!isNaN(d*n)&&n!==""?(g=new xt(this._pt,e,t,+d||0,n-(d||0),typeof h=="boolean"?Mf:Yu,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Qo(t,n),Pf.call(this,e,t,d,n,f,l||Dt.stringFilter,c))},kf=function(e,t,i,n,r){if(ke(e)&&(e=Ar(e,r,t,i,n)),!li(e)||e.style&&e.nodeType||at(e)||hu(e))return Ye(e)?Ar(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=Ar(e[o],r,t,i,n);return a},Vu=function(e,t,i,n,r,a){var o,l,c,u;if(Ot[e]&&(o=new Ot[e]).init(r,o.rawVars?t[e]:kf(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new xt(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==Un))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Mi,ro,sl=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,h=n.yoyoEase,d=n.keyframes,f=n.autoRevert,g=e._dur,p=e._startAt,_=e._targets,v=e.parent,b=v&&v.data==="nested"?v.vars.targets:_,w=e._overwrite==="auto"&&!Go,x=e.timeline,S,P,C,T,k,O,M,E,V,U,I,N,j;if(x&&(!d||!r)&&(r="none"),e._ease=hn(r,Kn.ease),e._yEase=h?Nu(hn(h===!0?r:h,Kn.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!n.runBackwards,!x||d&&!n.stagger){if(E=_[0]?un(_[0]).harness:0,N=E&&n[E.prop],S=Ks(n,el),p&&(p._zTime<0&&p.progress(1),t<0&&u&&o&&!f?p.render(-1,!0):p.revert(u&&g?Ds:ef),p._lazy=0),a){if(Hi(e._startAt=je.set(_,jt({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&bt(l),startAt:null,delay:0,onUpdate:c&&function(){return Mt(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ze||!o&&!f)&&e._startAt.revert(Ds),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!p){if(t&&(o=!1),C=jt({overwrite:!1,data:"isFromStart",lazy:o&&!p&&bt(l),immediateRender:o,stagger:0,parent:v},S),N&&(C[E.prop]=N),Hi(e._startAt=je.set(_,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ze?e._startAt.revert(Ds):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,fe,fe);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&bt(l)||l&&!g,P=0;P<_.length;P++){if(k=_[P],M=k._gsap||il(_)[P]._gsap,e._ptLookup[P]=U={},Za[M.id]&&Ni.length&&Gs(),I=b===_?P:b.indexOf(k),E&&(V=new E).init(k,N||S,e,I,b)!==!1&&(e._pt=T=new xt(e._pt,k,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(J){U[J]=T}),V.priority&&(O=1)),!E||N)for(C in S)Ot[C]&&(V=Vu(C,S,e,I,k,b))?V.priority&&(O=1):U[C]=T=rl.call(e,k,C,"get",S[C],I,b,0,n.stringFilter);e._op&&e._op[P]&&e.kill(k,e._op[P]),w&&e._pt&&(Mi=e,ye.killTweensOf(k,U,e.globalTime(t)),j=!e.parent,Mi=0),e._pt&&l&&(Za[M.id]=1)}O&&Gu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,d&&t<=0&&x.render(Ht,!0,!0)},Tf=function(e,t,i,n,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ro=1,e.vars[t]="+=0",sl(e,o),ro=0,l?Yr(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(n||n===0)&&!r?n:u.s+(n||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=Le(i)+rt(h.e)),h.b&&(h.b=u.s+rt(h.b))},Of=function(e,t){var i=e[0]?un(e[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return t;r=Jn({},t);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Ef=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(at(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Ar=function(e,t,i,n,r){return ke(e)?e.call(t,i,n,r):Ye(e)&&~e.indexOf("random(")?Gr(e):e},Bu=tl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qu={};yt(Bu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return qu[s]=1});var je=(function(s){uu(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:Or(n))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,p=l.defaults,_=l.scrollTrigger,v=l.yoyoEase,b=n.parent||ye,w=(at(i)||hu(i)?wi(i[0]):"length"in n)?[i]:Vt(i),x,S,P,C,T,k,O,M;if(o._targets=w.length?il(w):Yr("GSAP target "+i+" not found. https://gsap.com",!Dt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||gs(c)||gs(u)){if(n=o.vars,x=o.timeline=new pt({data:"nested",defaults:p||{},targets:b&&b.data==="nested"?b.vars.targets:w}),x.kill(),x.parent=x._dp=mi(o),x._start=0,d||gs(c)||gs(u)){if(C=w.length,O=d&&Ou(d),li(d))for(T in d)~Bu.indexOf(T)&&(M||(M={}),M[T]=d[T]);for(S=0;S<C;S++)P=Ks(n,qu),P.stagger=0,v&&(P.yoyoEase=v),M&&Jn(P,M),k=w[S],P.duration=+Ar(c,mi(o),S,k,w),P.delay=(+Ar(u,mi(o),S,k,w)||0)-o._delay,!d&&C===1&&P.delay&&(o._delay=u=P.delay,o._start+=u,P.delay=0),x.to(k,P,O?O(S,k,w):0),x._ease=se.none;x.duration()?c=u=0:o.timeline=0}else if(g){Or(jt(x.vars.defaults,{ease:"none"})),x._ease=hn(g.ease||n.ease||"none");var E=0,V,U,I;if(at(g))g.forEach(function(N){return x.to(w,N,">")}),x.duration();else{P={};for(T in g)T==="ease"||T==="easeEach"||Ef(T,g[T],P,g.easeEach);for(T in P)for(V=P[T].sort(function(N,j){return N.t-j.t}),E=0,S=0;S<V.length;S++)U=V[S],I={ease:U.e,duration:(U.t-(S?V[S-1].t:0))/100*c},I[T]=U.v,x.to(w,I,E),E+=I.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!Go&&(Mi=mi(o),ye.killTweensOf(w),Mi=0),ii(b,mi(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(h||!c&&!g&&o._start===be(b._time)&&bt(h)&&of(mi(o))&&b.data!=="nested")&&(o._tTime=-fe,o.render(Math.max(0,-u)||0)),_&&$u(mi(o),_),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,u=n<0,h=n>l-fe&&!u?l:n<fe?0:n,d,f,g,p,_,v,b,w,x;if(!c)cf(this,n,r,a);else if(h!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,w=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+n,r,a);if(d=be(h%p),h===l?(g=this._repeat,d=c):(_=be(h/p),g=~~_,g&&g===_?(d=c,g--):d>c&&(d=c)),v=this._yoyo&&g&1,v&&(x=this._yEase,d=c-d),_=Zn(this._tTime,p),d===o&&!a&&this._initted&&g===_)return this._tTime=h,this;g!==_&&(w&&this._yEase&&Fu(w,v),this.vars.repeatRefresh&&!v&&!this._lock&&d!==p&&this._initted&&(this._lock=a=1,this.render(be(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Pu(this,u?n:d,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(x||this._ease)(d/c),this._from&&(this.ratio=b=1-b),!o&&h&&!r&&!_&&(Mt(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;w&&w.render(n<0?n:w._dur*w._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&Qa(this,n,r,a),Mt(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!r&&this.parent&&Mt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Qa(this,n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Hi(this,1),!r&&!(u&&!o)&&(h||o||v)&&(Mt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o,l){Kr||At.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||sl(this,c),u=this._ease(c/this._dur),Tf(this,n,r,a,o,u,c,l)?this.resetTo(n,r,a,o,1):(ya(this,0),this.parent||Cu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?yr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ze),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Mi&&Mi.vars.overwrite!==!0)._first||yr(this),this.parent&&a!==this.timeline.totalDuration()&&Qn(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?Vt(n):o,c=this._ptLookup,u=this._pt,h,d,f,g,p,_,v;if((!r||r==="all")&&sf(o,l))return r==="all"&&(this._pt=0),yr(this);for(h=this._op=this._op||[],r!=="all"&&(Ye(r)&&(p={},yt(r,function(b){return p[b]=1}),r=p),r=Of(o,r)),v=o.length;v--;)if(~l.indexOf(o[v])){d=c[v],r==="all"?(h[v]=r,g=d,f={}):(f=h[v]=h[v]||{},g=r);for(p in g)_=d&&d[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&va(this,_,"_pt"),delete d[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&yr(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return Er(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return Er(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return ye.killTweensOf(n,r,a)},e})(Jr);jt(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yt("staggerTo,staggerFrom,staggerFromTo",function(s){je[s]=function(){var e=new pt,t=to.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var al=function(e,t,i){return e[t]=i},Wu=function(e,t,i){return e[t](i)},Af=function(e,t,i,n){return e[t](n.fp,i)},Lf=function(e,t,i){return e.setAttribute(t,i)},ol=function(e,t){return ke(e[t])?Wu:Ko(e[t])&&e.setAttribute?Lf:al},Yu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Mf=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xu=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},ll=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},zf=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},Df=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?va(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Rf=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Gu=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},xt=(function(){function s(t,i,n,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||Yu,this.d=l||this,this.set=c||al,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Rf,this.m=i,this.mt=r,this.tween=n},s})();yt(tl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return el[s]=1});Rt.TweenMax=Rt.TweenLite=je;Rt.TimelineLite=Rt.TimelineMax=pt;ye=new pt({sortChildren:!1,defaults:Kn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Dt.stringFilter=Iu;var fn=[],js={},jf=[],Xl=0,If=0,ja=function(e){return(js[e]||jf).map(function(t){return t()})},so=function(){var e=Date.now(),t=[];e-Xl>2&&(ja("matchMediaInit"),fn.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=ei.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),ja("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Xl=e,ja("matchMedia"))},Ku=(function(){function s(t,i){this.selector=i&&io(i),this.data=[],this._r=[],this.isReverted=!1,this.id=If++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){ke(i)&&(r=n,n=i,i=ke);var a=this,o=function(){var c=_e,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=io(r)),_e=a,h=n.apply(a,arguments),ke(h)&&a._r.push(h),_e=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===ke?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=_e;_e=null,i(this),_e=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof je&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof pt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=fn.length;a--;)fn[a].id===this.id&&fn.splice(a,1)},e.revert=function(i){this.kill(i||{})},s})(),Nf=(function(){function s(t){this.contexts=[],this.scope=t,_e&&_e.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){li(i)||(i={matches:i});var a=new Ku(0,r||this.scope),o=a.conditions={},l,c,u;_e&&!a.selector&&(a.selector=_e.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?u=1:(l=ei.matchMedia(i[c]),l&&(fn.indexOf(a)<0&&fn.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(so):l.addEventListener("change",so)));return u&&n(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),Zs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Du(n)})},timeline:function(e){return new pt(e)},getTweensOf:function(e,t){return ye.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ye(e)&&(e=Vt(e)[0]);var r=un(e||{}).get,a=i?wu:xu;return i==="native"&&(i=""),e&&(t?a((Ot[t]&&Ot[t].get||r)(e,t,i,n)):function(o,l,c){return a((Ot[o]&&Ot[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Vt(e),e.length>1){var n=e.map(function(u){return Ct.quickSetter(u,t,i)}),r=n.length;return function(u){for(var h=r;h--;)n[h](u)}}e=e[0]||{};var a=Ot[t],o=un(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Un._pt=0,h.init(e,i?u+i:u,Un,0,[e]),h.render(1,h),Un._pt&&ll(1,Un)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,r=Ct.to(e,jt((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return ye.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hn(e.ease,Kn.ease)),Vl(Kn,e||{})},config:function(e){return Vl(Dt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Ot[o]&&!Rt[o]&&Yr(t+" effect requires "+o+" plugin.")}),Ma[t]=function(o,l,c){return i(Vt(o),jt(l||{},r),c)},a&&(pt.prototype[t]=function(o,l,c){return this.add(Ma[t](o,li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){se[e]=hn(t)},parseEase:function(e,t){return arguments.length?hn(e,t):se},getById:function(e){return ye.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new pt(e),n,r;for(i.smoothChildTiming=bt(e.smoothChildTiming),ye.remove(i),i._dp=0,i._time=i._tTime=ye._time,n=ye._first;n;)r=n._next,(t||!(!n._dur&&n instanceof je&&n.vars.onComplete===n._targets[0]))&&ii(i,n,n._start-n._delay),n=r;return ii(ye,i,0),i},context:function(e,t){return e?new Ku(e,t):_e},matchMedia:function(e){return new Nf(e)},matchMediaRefresh:function(){return fn.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||so()},addEventListener:function(e,t){var i=js[e]||(js[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=js[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:_f,wrapYoyo:vf,distribute:Ou,random:Au,snap:Eu,normalize:mf,getUnit:rt,clamp:hf,splitColor:Ru,toArray:Vt,selector:io,mapRange:Mu,pipe:pf,unitize:gf,interpolate:bf,shuffle:Tu},install:mu,effects:Ma,ticker:At,updateRoot:pt.updateRoot,plugins:Ot,globalTimeline:ye,core:{PropTween:xt,globals:_u,Tween:je,Timeline:pt,Animation:Jr,getCache:un,_removeLinkedListItem:va,reverting:function(){return Ze},context:function(e){return e&&_e&&(_e.data.push(e),e._ctx=_e),_e},suppressOverwrites:function(e){return Go=e}}};yt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Zs[s]=je[s]});At.add(pt.updateRoot);Un=Zs.to({},{duration:0});var Ff=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Uf=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=Ff(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},Ia=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(Ye(r)&&(l={},yt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Uf(o,r)}}}},Ct=Zs.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Ze?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ia("roundProps",no),Ia("modifiers"),Ia("snap",Eu))||Zs;je.version=pt.version=Ct.version="3.14.2";gu=1;Jo()&&er();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gl,zi,Bn,cl,on,Kl,ul,Hf=function(){return typeof window<"u"},Ci={},tn=180/Math.PI,qn=Math.PI/180,En=Math.atan2,Jl=1e8,dl=/([A-Z])/g,Vf=/(left|right|width|margin|padding|x)/i,Bf=/[\s,\(]\S/,ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ao=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qf=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Wf=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yf=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xf=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ju=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gf=function(e,t,i){return e.style[t]=i},Kf=function(e,t,i){return e.style.setProperty(t,i)},Jf=function(e,t,i){return e._gsap[t]=i},Zf=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Qf=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},ep=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},xe="transform",wt=xe+"Origin",tp=function s(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in Ci&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=_i(n,o)}):this.tfm[e]=a.x?a[e]:_i(n,e),e===wt&&(this.tfm.zOrigin=a.zOrigin);else return ni.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(xe)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(wt,t,"")),e=xe}(r||t)&&this.props.push(e,t,r[e])},Qu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ip=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(dl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ul(),(!r||!r.isStart)&&!i[xe]&&(Qu(i),n.zOrigin&&i[wt]&&(i[wt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ed=function(e,t){var i={target:e,props:[],revert:ip,save:tp};return e._gsap||Ct.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},td,oo=function(e,t){var i=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return i&&i.style?i:zi.createElement(e)},zt=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(dl,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,tr(t)||t,1)||""},Zl="O,Moz,ms,Ms,Webkit".split(","),tr=function(e,t,i){var n=t||on,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Zl[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Zl[a]:"")+e},lo=function(){Hf()&&window.document&&(Gl=window,zi=Gl.document,Bn=zi.documentElement,on=oo("div")||{style:{}},oo("div"),xe=tr(xe),wt=xe+"Origin",on.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",td=!!tr("perspective"),ul=Ct.core.reverting,cl=1)},Ql=function(e){var t=e.ownerSVGElement,i=oo("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Bn.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Bn.removeChild(i),r},ec=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},id=function(e){var t,i;try{t=e.getBBox()}catch{t=Ql(e),i=1}return t&&(t.width||t.height)||i||(t=Ql(e)),t&&!t.width&&!t.x&&!t.y?{x:+ec(e,["x","cx","x1"])||0,y:+ec(e,["y","cy","y1"])||0,width:0,height:0}:t},nd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&id(e))},Vi=function(e,t){if(t){var i=e.style,n;t in Ci&&t!==wt&&(t=xe),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(dl,"-$1").toLowerCase())):i.removeAttribute(t)}},Di=function(e,t,i,n,r,a){var o=new xt(e._pt,t,i,0,1,a?Zu:Ju);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},tc={deg:1,rad:1,turn:1},np={grid:1,flex:1},Bi=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=on.style,l=Vf.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=n==="px",f=n==="%",g,p,_,v;if(n===a||!r||tc[n]||tc[a])return r;if(a!=="px"&&!d&&(r=s(e,t,i,"px")),v=e.getCTM&&nd(e),(f||a==="%")&&(Ci[t]||~t.indexOf("adius")))return g=v?e.getBBox()[l?"width":"height"]:e[u],Le(f?r/g*h:r/100*g);if(o[l?"width":"height"]=h+(d?a:n),p=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,v&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===zi||!p.appendChild)&&(p=zi.body),_=p._gsap,_&&f&&_.width&&l&&_.time===At.time&&!_.uncache)return Le(r/_.width*h);if(f&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+n,g=e[u],b?e.style[t]=b:Vi(e,t)}else(f||a==="%")&&!np[zt(p,"display")]&&(o.position=zt(e,"position")),p===e&&(o.position="static"),p.appendChild(on),g=on[u],p.removeChild(on),o.position="absolute";return l&&f&&(_=un(p),_.time=At.time,_.width=p[u]),Le(d?g*r/h:g&&r?h/g*r:0)},_i=function(e,t,i,n){var r;return cl||lo(),t in ni&&t!=="transform"&&(t=ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ci[t]&&t!=="transform"?(r=Qr(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ea(zt(e,wt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Qs[t]&&Qs[t](e,t,i)||zt(e,t)||bu(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Bi(e,t,r,i)+i:r},rp=function(e,t,i,n){if(!i||i==="none"){var r=tr(t,e,1),a=r&&zt(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=zt(e,"borderTopColor"))}var o=new xt(this._pt,e.style,t,0,1,Xu),l=0,c=0,u,h,d,f,g,p,_,v,b,w,x,S;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=zt(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(p=e.style[t],e.style[t]=n,n=zt(e,t)||n,p?e.style[t]=p:Vi(e,t)),u=[i,n],Iu(u),i=u[0],n=u[1],d=i.match(Fn)||[],S=n.match(Fn)||[],S.length){for(;h=Fn.exec(n);)_=h[0],b=n.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),_!==(p=d[c++]||"")&&(f=parseFloat(p)||0,x=p.substr((f+"").length),_.charAt(1)==="="&&(_=Vn(f,_)+x),v=parseFloat(_),w=_.substr((v+"").length),l=Fn.lastIndex-w.length,w||(w=w||Dt.units[t]||x,l===n.length&&(n+=w,o.e+=w)),x!==w&&(f=Bi(e,t,p,w)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:f,c:v-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Zu:Ju;return pu.test(n)&&(o.e=0),this._pt=o,o},ic={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sp=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=ic[i]||i,t[1]=ic[n]||n,t.join(" ")},ap=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ci[o]&&(l=1,o=o==="transformOrigin"?wt:xe),Vi(i,o);l&&(Vi(i,xe),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Qr(i,1),a.uncache=1,Qu(n)))}},Qs={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new xt(e._pt,t,i,0,0,ap);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},Zr=[1,0,0,1,0,0],rd={},sd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nc=function(e){var t=zt(e,xe);return sd(t)?Zr:t.substr(7).match(fu).map(Le)},hl=function(e,t){var i=e._gsap||un(e),n=e.style,r=nc(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Zr:r):(r===Zr&&!e.offsetParent&&e!==Bn&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Bn.appendChild(e)),r=nc(e),l?n.display=l:Vi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Bn.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},co=function(e,t,i,n,r,a){var o=e._gsap,l=r||hl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],p=l[2],_=l[3],v=l[4],b=l[5],w=t.split(" "),x=parseFloat(w[0])||0,S=parseFloat(w[1])||0,P,C,T,k;i?l!==Zr&&(C=f*_-g*p)&&(T=x*(_/C)+S*(-p/C)+(p*b-_*v)/C,k=x*(-g/C)+S*(f/C)-(f*b-g*v)/C,x=T,S=k):(P=id(e),x=P.x+(~w[0].indexOf("%")?x/100*P.width:x),S=P.y+(~(w[1]||w[0]).indexOf("%")?S/100*P.height:S)),n||n!==!1&&o.smooth?(v=x-c,b=S-u,o.xOffset=h+(v*f+b*p)-v,o.yOffset=d+(v*g+b*_)-b):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=S,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[wt]="0px 0px",a&&(Di(a,o,"xOrigin",c,x),Di(a,o,"yOrigin",u,S),Di(a,o,"xOffset",h,o.xOffset),Di(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Qr=function(e,t){var i=e._gsap||new Hu(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=zt(e,wt)||"0",u,h,d,f,g,p,_,v,b,w,x,S,P,C,T,k,O,M,E,V,U,I,N,j,J,Y,y,K,Te,ge,ue,we;return u=h=d=p=_=v=b=w=x=0,f=g=1,i.svg=!!(e.getCTM&&nd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xe]!=="none"?l[xe]:"")),n.scale=n.rotate=n.translate="none"),C=hl(e,i.svg),i.svg&&(i.uncache?(J=e.getBBox(),c=i.xOrigin-J.x+"px "+(i.yOrigin-J.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),co(e,j||c,!!j||i.originIsAbsolute,i.smooth!==!1,C)),S=i.xOrigin||0,P=i.yOrigin||0,C!==Zr&&(M=C[0],E=C[1],V=C[2],U=C[3],u=I=C[4],h=N=C[5],C.length===6?(f=Math.sqrt(M*M+E*E),g=Math.sqrt(U*U+V*V),p=M||E?En(E,M)*tn:0,b=V||U?En(V,U)*tn+p:0,b&&(g*=Math.abs(Math.cos(b*qn))),i.svg&&(u-=S-(S*M+P*V),h-=P-(S*E+P*U))):(we=C[6],ge=C[7],y=C[8],K=C[9],Te=C[10],ue=C[11],u=C[12],h=C[13],d=C[14],T=En(we,Te),_=T*tn,T&&(k=Math.cos(-T),O=Math.sin(-T),j=I*k+y*O,J=N*k+K*O,Y=we*k+Te*O,y=I*-O+y*k,K=N*-O+K*k,Te=we*-O+Te*k,ue=ge*-O+ue*k,I=j,N=J,we=Y),T=En(-V,Te),v=T*tn,T&&(k=Math.cos(-T),O=Math.sin(-T),j=M*k-y*O,J=E*k-K*O,Y=V*k-Te*O,ue=U*O+ue*k,M=j,E=J,V=Y),T=En(E,M),p=T*tn,T&&(k=Math.cos(T),O=Math.sin(T),j=M*k+E*O,J=I*k+N*O,E=E*k-M*O,N=N*k-I*O,M=j,I=J),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,v=180-v),f=Le(Math.sqrt(M*M+E*E+V*V)),g=Le(Math.sqrt(N*N+we*we)),T=En(I,N),b=Math.abs(T)>2e-4?T*tn:0,x=ue?1/(ue<0?-ue:ue):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!sd(zt(e,xe)),j&&e.setAttribute("transform",j))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(f*=-1,b+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=Le(f),i.scaleY=Le(g),i.rotation=Le(p)+o,i.rotationX=Le(_)+o,i.rotationY=Le(v)+o,i.skewX=b+o,i.skewY=w+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[wt]=ea(c)),i.xOffset=i.yOffset=0,i.force3D=Dt.force3D,i.renderTransform=i.svg?lp:td?ad:op,i.uncache=0,i},ea=function(e){return(e=e.split(" "))[0]+" "+e[1]},Na=function(e,t,i){var n=rt(t);return Le(parseFloat(t)+parseFloat(Bi(e,"x",i+"px",n)))+n},op=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ad(e,t)},Qi="0deg",pr="0px",en=") ",ad=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,f=i.skewY,g=i.scaleX,p=i.scaleY,_=i.transformPerspective,v=i.force3D,b=i.target,w=i.zOrigin,x="",S=v==="auto"&&e&&e!==1||v===!0;if(w&&(h!==Qi||u!==Qi)){var P=parseFloat(u)*qn,C=Math.sin(P),T=Math.cos(P),k;P=parseFloat(h)*qn,k=Math.cos(P),a=Na(b,a,C*k*-w),o=Na(b,o,-Math.sin(P)*-w),l=Na(b,l,T*k*-w+w)}_!==pr&&(x+="perspective("+_+en),(n||r)&&(x+="translate("+n+"%, "+r+"%) "),(S||a!==pr||o!==pr||l!==pr)&&(x+=l!==pr||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+en),c!==Qi&&(x+="rotate("+c+en),u!==Qi&&(x+="rotateY("+u+en),h!==Qi&&(x+="rotateX("+h+en),(d!==Qi||f!==Qi)&&(x+="skew("+d+", "+f+en),(g!==1||p!==1)&&(x+="scale("+g+", "+p+en),b.style[xe]=x||"translate(0, 0)"},lp=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,f=i.target,g=i.xOrigin,p=i.yOrigin,_=i.xOffset,v=i.yOffset,b=i.forceCSS,w=parseFloat(a),x=parseFloat(o),S,P,C,T,k;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qn,c*=qn,S=Math.cos(l)*h,P=Math.sin(l)*h,C=Math.sin(l-c)*-d,T=Math.cos(l-c)*d,c&&(u*=qn,k=Math.tan(c-u),k=Math.sqrt(1+k*k),C*=k,T*=k,u&&(k=Math.tan(u),k=Math.sqrt(1+k*k),S*=k,P*=k)),S=Le(S),P=Le(P),C=Le(C),T=Le(T)):(S=h,T=d,P=C=0),(w&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(w=Bi(f,"x",a,"px"),x=Bi(f,"y",o,"px")),(g||p||_||v)&&(w=Le(w+g-(g*S+p*C)+_),x=Le(x+p-(g*P+p*T)+v)),(n||r)&&(k=f.getBBox(),w=Le(w+n/100*k.width),x=Le(x+r/100*k.height)),k="matrix("+S+","+P+","+C+","+T+","+w+","+x+")",f.setAttribute("transform",k),b&&(f.style[xe]=k)},cp=function(e,t,i,n,r){var a=360,o=Ye(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?tn:1),c=l-n,u=n+c+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Jl)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Jl)%a-~~(c/a)*a)),e._pt=d=new xt(e._pt,t,i,n,c,qf),d.e=u,d.u="deg",e._props.push(i),d},rc=function(e,t){for(var i in t)e[i]=t[i];return e},up=function(e,t,i){var n=rc({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,d,f,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[xe]=t,o=Qr(i,1),Vi(i,xe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[xe],a[xe]=t,o=Qr(i,1),a[xe]=c);for(l in Ci)c=n[l],u=o[l],c!==u&&r.indexOf(l)<0&&(f=rt(c),g=rt(u),h=f!==g?Bi(i,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new xt(e._pt,o,l,h,d-h,ao),e._pt.u=g||0,e._props.push(l));rc(o,n)};yt("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});Qs[e>1?"border"+s:s]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return _i(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,p){return f[g]=d[p]=d[p]||d[(p-1)/2|0]}),o.init(l,f,h)}});var od={name:"css",register:lo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,l=i.vars.startAt,c,u,h,d,f,g,p,_,v,b,w,x,S,P,C,T,k;cl||lo(),this.styles=this.styles||ed(e),T=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Ot[p]&&Vu(p,t,i,n,e,r)))){if(f=typeof u,g=Qs[p],f==="function"&&(u=u.call(i,n,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Gr(u)),g)g(this,e,p,u,i)&&(C=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Fi.lastIndex=0,Fi.test(c)||(_=rt(c),v=rt(u),v?_!==v&&(c=Bi(e,p,c,v)+v):_&&(u+=_)),this.add(o,"setProperty",c,u,n,r,0,0,p),a.push(p),T.push(p,0,o[p]);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,n,e,r):l[p],Ye(c)&&~c.indexOf("random(")&&(c=Gr(c)),rt(c+"")||c==="auto"||(c+=Dt.units[p]||rt(_i(e,p))||""),(c+"").charAt(1)==="="&&(c=_i(e,p))):c=_i(e,p),d=parseFloat(c),b=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),p in ni&&(p==="autoAlpha"&&(d===1&&_i(e,"visibility")==="hidden"&&h&&(d=0),T.push("visibility",0,o.visibility),Di(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=ni[p],~p.indexOf(",")&&(p=p.split(",")[0]))),w=p in Ci,w){if(this.styles.save(p),k=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=zt(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var O=e.style.perspective;e.style.perspective=u,u=zt(e,"perspective"),O?e.style.perspective=O:Vi(e,"perspective")}h=parseFloat(u)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||Qr(e,t.parseTransform),P=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new xt(this._pt,o,xe,0,1,S.renderTransform,S,0,-1),x.dep=1),p==="scale")this._pt=new xt(this._pt,S,"scaleY",S.scaleY,(b?Vn(S.scaleY,b+h):h)-S.scaleY||0,ao),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){T.push(wt,0,o[wt]),u=sp(u),S.svg?co(e,u,0,P,0,this):(v=parseFloat(u.split(" ")[2])||0,v!==S.zOrigin&&Di(this,S,"zOrigin",S.zOrigin,v),Di(this,o,p,ea(c),ea(u)));continue}else if(p==="svgOrigin"){co(e,u,1,P,0,this);continue}else if(p in rd){cp(this,S,p,d,b?Vn(d,b+u):u);continue}else if(p==="smoothOrigin"){Di(this,S,"smooth",S.smooth,u);continue}else if(p==="force3D"){S[p]=u;continue}else if(p==="transform"){up(this,u,e);continue}}else p in o||(p=tr(p)||p);if(w||(h||h===0)&&(d||d===0)&&!Bf.test(u)&&p in o)_=(c+"").substr((d+"").length),h||(h=0),v=rt(u)||(p in Dt.units?Dt.units[p]:_),_!==v&&(d=Bi(e,p,c,v)),this._pt=new xt(this._pt,w?S:o,p,d,(b?Vn(d,b+h):h)-d,!w&&(v==="px"||p==="zIndex")&&t.autoRound!==!1?Xf:ao),this._pt.u=v||0,w&&k!==u?(this._pt.b=c,this._pt.e=k,this._pt.r=Yf):_!==v&&v!=="%"&&(this._pt.b=c,this._pt.r=Wf);else if(p in o)rp.call(this,e,p,c,b?b+u:u);else if(p in e)this.add(e,p,c||e[p],b?b+u:u,n,r);else if(p!=="parseTransform"){Qo(p,u);continue}w||(p in o?T.push(p,0,o[p]):typeof e[p]=="function"?T.push(p,2,e[p]()):T.push(p,1,c||e[p])),a.push(p)}}C&&Gu(this)},render:function(e,t){if(t.tween._time||!ul())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:_i,aliases:ni,getSetter:function(e,t,i){var n=ni[t];return n&&n.indexOf(",")<0&&(t=n),t in Ci&&t!==wt&&(e._gsap.x||_i(e,"x"))?i&&Kl===i?t==="scale"?Zf:Jf:(Kl=i||{})&&(t==="scale"?Qf:ep):e.style&&!Ko(e.style[t])?Gf:~t.indexOf("-")?Kf:ol(e,t)},core:{_removeProperty:Vi,_getMatrix:hl}};Ct.utils.checkPrefix=tr;Ct.core.getStyleSaver=ed;(function(s,e,t,i){var n=yt(s+","+e+","+t,function(r){Ci[r]=1});yt(e,function(r){Dt.units[r]="deg",rd[r]=1}),ni[n[13]]=s+","+e,yt(i,function(r){var a=r.split(":");ni[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Dt.units[s]="px"});Ct.registerPlugin(od);var oe=Ct.registerPlugin(od)||Ct;oe.core.Tween;const dp=`<style>\r
    .spinning {\r
        animation: spinning .75s infinite linear;\r
        transform-origin: 50% 50%;\r
        vector-effect: non-scaling-stroke;\r
    }\r
\r
    @keyframes spinning {\r
        0% {\r
            transform: rotate(0deg);\r
        }\r
\r
        100% {\r
            transform: rotate(360deg);\r
        }\r
    }\r
</style>\r
<svg class="spinning" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<mask id="path-1-inside-1_1307_1673" fill="white">\r
<path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z"/>\r
</mask>\r
<g clip-path="url(#paint0_angular_1307_1673_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_1307_1673)"><g transform="matrix(0 -0.02 0.02 0 20 20)"><foreignObject x="-1200" y="-1200" width="2400" height="2400"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(255, 255, 255, 0) 0deg,rgba(183, 210, 224, 0.75) 306.968deg,rgba(255, 255, 255, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M40 20H36C36 28.8366 28.8366 36 20 36V40V44C33.2548 44 44 33.2548 44 20H40ZM20 40V36C11.1634 36 4 28.8366 4 20H0H-4C-4 33.2548 6.74517 44 20 44V40ZM0 20H4C4 11.1634 11.1634 4 20 4V0V-4C6.74517 -4 -4 6.74517 -4 20H0ZM20 0V4C28.8366 4 36 11.1634 36 20H40H44C44 6.74517 33.2548 -4 20 -4V0Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.72000002861022949,&#34;g&#34;:0.82666671276092529,&#34;b&#34;:0.87999999523162842,&#34;a&#34;:0.750},&#34;position&#34;:0.85268861055374146},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.72000002861022949,&#34;g&#34;:0.82666671276092529,&#34;b&#34;:0.87999999523162842,&#34;a&#34;:0.750},&#34;position&#34;:0.85268861055374146},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:-7.3478812213901255e-15,&#34;m01&#34;:40.0,&#34;m02&#34;:-7.1054273576010019e-14,&#34;m10&#34;:-40.0,&#34;m11&#34;:-7.3478812213901255e-15,&#34;m12&#34;:40.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" mask="url(#path-1-inside-1_1307_1673)"/>\r
<path d="M20 1.50996e-07C20.2626 1.39515e-07 20.5227 0.0517317 20.7654 0.152241C21.008 0.25275 21.2285 0.400069 21.4142 0.585787C21.5999 0.771504 21.7472 0.991982 21.8478 1.23463C21.9483 1.47728 22 1.73736 22 2C22 2.26264 21.9483 2.52272 21.8478 2.76537C21.7472 3.00802 21.5999 3.2285 21.4142 3.41421C21.2285 3.59993 21.008 3.74725 20.7654 3.84776C20.5227 3.94827 20.2626 4 20 4L20 2L20 1.50996e-07Z" fill="white"/>\r
<defs>\r
<clipPath id="paint0_angular_1307_1673_clip_path"><path d="M40 20H36C36 28.8366 28.8366 36 20 36V40V44C33.2548 44 44 33.2548 44 20H40ZM20 40V36C11.1634 36 4 28.8366 4 20H0H-4C-4 33.2548 6.74517 44 20 44V40ZM0 20H4C4 11.1634 11.1634 4 20 4V0V-4C6.74517 -4 -4 6.74517 -4 20H0ZM20 0V4C28.8366 4 36 11.1634 36 20H40H44C44 6.74517 33.2548 -4 20 -4V0Z" mask="url(#path-1-inside-1_1307_1673)"/></clipPath></defs>\r
</svg>`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hp={CHILD:2},fp=s=>(...e)=>({_$litDirective$:s,values:e});class pp{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class uo extends pp{constructor(e){if(super(e),this.it=Me,e.type!==hp.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Me||e==null)return this._t=void 0,this.it=e;if(e===vn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}uo.directiveName="unsafeHTML",uo.resultType=1;const ci=fp(uo);var gp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,ld=(s,e,t,i)=>{for(var n=i>1?void 0:i?mp(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&gp(e,t,n),n};let ho=class extends G{constructor(){super(...arguments),this.minMs=500,this.mountedAt=0,this.finishTimeoutId=null,this.fallbackTimeoutId=null,this.isExiting=!1,this.onDomContentLoaded=()=>this.finishAfterMinTime(),this.onWindowLoad=()=>this.finishAfterMinTime()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-busy","true"),this.setAttribute("aria-live","polite"),this.mountedAt=performance.now(),document.readyState==="complete"||document.readyState==="interactive"?this.finishAfterMinTime():(document.addEventListener("DOMContentLoaded",this.onDomContentLoaded,{once:!0}),window.addEventListener("load",this.onWindowLoad,{once:!0}),this.fallbackTimeoutId=window.setTimeout(()=>this.finishAfterMinTime(),8e3))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("DOMContentLoaded",this.onDomContentLoaded),window.removeEventListener("load",this.onWindowLoad),this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null)}finishAfterMinTime(){const s=performance.now()-this.mountedAt,e=Math.max(0,this.minMs-s);this.finishTimeoutId=window.setTimeout(()=>this.exit(),e)}exit(){if(this.isExiting)return;this.isExiting=!0,this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null);const s=this.querySelector("#loading")||this,e=document.querySelector("main");oe.set(e,{y:"1rem",opacity:0}),oe.to(s,{opacity:0,scale:2,filter:"blur(1rem)",duration:.4,force3D:!0,onComplete:()=>{this.dispatchEvent(new CustomEvent("mobile-loading:done",{bubbles:!0,composed:!0})),oe.to(e,{y:0,opacity:1,duration:1,onComplete:()=>{e.removeAttribute("style")}}),this.remove()}})}render(){return D` <div
      id="loading"
      class="fixed top-0 z-100 h-svh w-full bg-zinc-950"
    >
      <div
        class="container flex h-full flex-col items-center justify-center gap-4"
      >
        <div class="">${ci(`${dp}`)}</div>
        <span
          class="hidden animate-pulse text-[.75rem] leading-10 tracking-[.05em] text-zinc-50 uppercase"
        >
          ${this.lang==="pt"?D`Carregando...`:D`Loading...`}
        </span>
      </div>
    </div>`}createRenderRoot(){return this}};ld([L({type:Number,attribute:"min-ms"})],ho.prototype,"minMs",2);ho=ld([ie("page-loading")],ho);const B=s=>typeof s=="string",gr=()=>{let s,e;const t=new Promise((i,n)=>{s=i,e=n});return t.resolve=s,t.reject=e,t},sc=s=>s==null?"":""+s,_p=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},vp=/###/g,ac=s=>s&&s.indexOf("###")>-1?s.replace(vp,"."):s,oc=s=>!s||B(s),Lr=(s,e,t)=>{const i=B(e)?e.split("."):e;let n=0;for(;n<i.length-1;){if(oc(s))return{};const r=ac(i[n]);!s[r]&&t&&(s[r]=new t),Object.prototype.hasOwnProperty.call(s,r)?s=s[r]:s={},++n}return oc(s)?{}:{obj:s,k:ac(i[n])}},lc=(s,e,t)=>{const{obj:i,k:n}=Lr(s,e,Object);if(i!==void 0||e.length===1){i[n]=t;return}let r=e[e.length-1],a=e.slice(0,e.length-1),o=Lr(s,a,Object);for(;o.obj===void 0&&a.length;)r=`${a[a.length-1]}.${r}`,a=a.slice(0,a.length-1),o=Lr(s,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${r}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${r}`]=t},bp=(s,e,t,i)=>{const{obj:n,k:r}=Lr(s,e,Object);n[r]=n[r]||[],n[r].push(t)},ta=(s,e)=>{const{obj:t,k:i}=Lr(s,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},yp=(s,e,t)=>{const i=ta(s,t);return i!==void 0?i:ta(e,t)},cd=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?B(s[i])||s[i]instanceof String||B(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):cd(s[i],e[i],t):s[i]=e[i]);return s},An=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var xp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const wp=s=>B(s)?s.replace(/[&<>"'\/]/g,e=>xp[e]):s;class Cp{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Sp=[" ",",","?","!",";"],$p=new Cp(20),Pp=(s,e,t)=>{e=e||"",t=t||"";const i=Sp.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const n=$p.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let r=!n.test(s);if(!r){const a=s.indexOf(t);a>0&&!n.test(s.substring(0,a))&&(r=!0)}return r},fo=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;const i=e.split(t);let n=s;for(let r=0;r<i.length;){if(!n||typeof n!="object")return;let a,o="";for(let l=r;l<i.length;++l)if(l!==r&&(o+=t),o+=i[l],a=n[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;r+=l-r+1;break}n=a}return n},ia=s=>s==null?void 0:s.replace("_","-"),kp={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){var t,i;(i=(t=console==null?void 0:console[s])==null?void 0:t.apply)==null||i.call(t,console,e)}};class na{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||kp,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,n){return n&&!this.debug?null:(B(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new na(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new na(this.logger,e)}}var ri=new na;class xa{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(t)||0;this.observers[i].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let c=0;c<l;c++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let c=0;c<l;c++)o.apply(o,[e,...i])})}}class cc extends xa{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var c,u;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,a=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):B(i)&&r?o.push(...i.split(r)):o.push(i)));const l=ta(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!B(i)?l:fo((u=(c=this.data)==null?void 0:c[e])==null?void 0:u[t],i,r)}addResource(e,t,i,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),n=t,t=o[1]),this.addNamespaces(t),lc(this.data,o,n),r.silent||this.emit("added",e,t,i,n)}addResources(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(B(i[r])||Array.isArray(i[r]))&&this.addResource(e,t,r,i[r],{silent:!0});n.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,n,r){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),n=i,i=t,t=o[1]),this.addNamespaces(t);let l=ta(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?cd(l,i,r):l={...l,...i},lc(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(n=>t[n]&&Object.keys(t[n]).length>0)}toJSON(){return this.data}}var ud={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,n){return s.forEach(r=>{var a;e=((a=this.processors[r])==null?void 0:a.process(e,t,i,n))??e}),e}};const uc={},dc=s=>!B(s)&&typeof s!="boolean"&&typeof s!="number";class ra extends xa{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),_p(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ri.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Pp(e,i,n);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:B(r)?[r]:r};const c=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(n)}return{key:e,namespaces:B(r)?[r]:r}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],c=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((c==null?void 0:c.toLowerCase())==="cimode"){if(u){const M=t.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${M}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${M}${a}`}return n?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const h=this.resolve(e,t);let d=h==null?void 0:h.res;const f=(h==null?void 0:h.usedKey)||a,g=(h==null?void 0:h.exactUsedKey)||a,p=["[object Number]","[object Function]","[object RegExp]"],_=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,b=t.count!==void 0&&!B(t.count),w=ra.hasDefaultValue(t),x=b?this.pluralResolver.getSuffix(c,t.count,t):"",S=t.ordinal&&b?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",P=b&&!t.ordinal&&t.count===0,C=P&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${x}`]||t[`defaultValue${S}`]||t.defaultValue;let T=d;v&&!d&&w&&(T=C);const k=dc(T),O=Object.prototype.toString.apply(T);if(v&&T&&k&&p.indexOf(O)<0&&!(B(_)&&Array.isArray(T))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const M=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,T,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return n?(h.res=M,h.usedParams=this.getUsedParamsDetails(t),h):M}if(r){const M=Array.isArray(T),E=M?[]:{},V=M?g:f;for(const U in T)if(Object.prototype.hasOwnProperty.call(T,U)){const I=`${V}${r}${U}`;w&&!d?E[U]=this.translate(I,{...t,defaultValue:dc(C)?C[U]:void 0,joinArrays:!1,ns:o}):E[U]=this.translate(I,{...t,joinArrays:!1,ns:o}),E[U]===I&&(E[U]=T[U])}d=E}}else if(v&&B(_)&&Array.isArray(d))d=d.join(_),d&&(d=this.extendTranslation(d,e,t,i));else{let M=!1,E=!1;!this.isValidLookup(d)&&w&&(M=!0,d=C),this.isValidLookup(d)||(E=!0,d=a);const U=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:d,I=w&&C!==d&&this.options.updateMissing;if(E||M||I){if(this.logger.log(I?"updateKey":"missingKey",c,l,a,I?C:d),r){const Y=this.resolve(a,{...t,keySeparator:!1});Y&&Y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let N=[];const j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&j&&j[0])for(let Y=0;Y<j.length;Y++)N.push(j[Y]);else this.options.saveMissingTo==="all"?N=this.languageUtils.toResolveHierarchy(t.lng||this.language):N.push(t.lng||this.language);const J=(Y,y,K)=>{var ge;const Te=w&&K!==d?K:U;this.options.missingKeyHandler?this.options.missingKeyHandler(Y,l,y,Te,I,t):(ge=this.backendConnector)!=null&&ge.saveMissing&&this.backendConnector.saveMissing(Y,l,y,Te,I,t),this.emit("missingKey",Y,l,y,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?N.forEach(Y=>{const y=this.pluralResolver.getSuffixes(Y,t);P&&t[`defaultValue${this.options.pluralSeparator}zero`]&&y.indexOf(`${this.options.pluralSeparator}zero`)<0&&y.push(`${this.options.pluralSeparator}zero`),y.forEach(K=>{J([Y],a+K,t[`defaultValue${K}`]||C)})}):J(N,a,C))}d=this.extendTranslation(d,e,t,h,i),E&&d===a&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${a}`),(E||M)&&this.options.parseMissingKeyHandler&&(d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,M?d:void 0))}return n?(h.res=d,h.usedParams=this.getUsedParamsDetails(t),h):d}extendTranslation(e,t,i,n,r){var c,u;var a=this;if((c=this.i18nFormat)!=null&&c.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const h=B(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(h){const g=e.match(this.interpolator.nestingRegexp);d=g&&g.length}let f=i.replace&&!B(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||n.usedLng,i),h){const g=e.match(this.interpolator.nestingRegexp),p=g&&g.length;d<p&&(i.nest=!1)}!i.lng&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var g=arguments.length,p=new Array(g),_=0;_<g;_++)p[_]=arguments[_];return(r==null?void 0:r[0])===p[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`),null):a.translate(...p,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=B(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=ud.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,n,r,a,o;return B(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,t),u=c.key;n=u;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const d=t.count!==void 0&&!B(t.count),f=d&&!t.ordinal&&t.count===0,g=t.context!==void 0&&(B(t.context)||typeof t.context=="number")&&t.context!=="",p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);h.forEach(_=>{var v,b;this.isValidLookup(i)||(o=_,!uc[`${p[0]}-${_}`]&&((v=this.utils)!=null&&v.hasLoadedNamespace)&&!((b=this.utils)!=null&&b.hasLoadedNamespace(o))&&(uc[`${p[0]}-${_}`]=!0,this.logger.warn(`key "${n}" for languages "${p.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach(w=>{var P;if(this.isValidLookup(i))return;a=w;const x=[u];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(x,u,w,_,t);else{let C;d&&(C=this.pluralResolver.getSuffix(w,t.count,t));const T=`${this.options.pluralSeparator}zero`,k=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(x.push(u+C),t.ordinal&&C.indexOf(k)===0&&x.push(u+C.replace(k,this.options.pluralSeparator)),f&&x.push(u+T)),g){const O=`${u}${this.options.contextSeparator}${t.context}`;x.push(O),d&&(x.push(O+C),t.ordinal&&C.indexOf(k)===0&&x.push(O+C.replace(k,this.options.pluralSeparator)),f&&x.push(O+T))}}let S;for(;S=x.pop();)this.isValidLookup(i)||(r=S,i=this.getResource(w,_,S,t))}))})}),{res:i,usedKey:n,exactUsedKey:r,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var r;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(r=this.i18nFormat)!=null&&r.getResource?this.i18nFormat.getResource(e,t,i,n):this.resourceStore.getResource(e,t,i,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!B(e.replace);let n=i?e.replace:e;if(i&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const r of t)delete n[r]}return n}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class hc{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ri.create("languageUtils")}getScriptPartFromCode(e){if(e=ia(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=ia(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(B(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),B(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),n=[],r=a=>{a&&(this.isSupportedCode(a)?n.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return B(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):B(e)&&r(this.formatLanguageCode(e)),i.forEach(a=>{n.indexOf(a)<0&&r(this.formatLanguageCode(a))}),n}}const fc={zero:0,one:1,two:2,few:3,many:4,other:5},pc={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Tp{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=ri.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=ia(e==="dev"?"en":e),n=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let a;try{a=new Intl.PluralRules(i,{type:n})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),pc;if(!e.match(/-|_/))return pc;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[r]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(n=>`${t}${n}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((n,r)=>fc[n]-fc[r]).map(n=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${n}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,i);return n?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const gc=function(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=yp(s,e,t);return!r&&n&&B(t)&&(r=fo(s,t,i),r===void 0&&(r=fo(e,t,i))),r},Fa=s=>s.replace(/\$/g,"$$$$");class Op{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ri.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:n,prefix:r,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:g,nestingSuffixEscaped:p,nestingOptionsSeparator:_,maxReplaces:v,alwaysFormat:b}=e.interpolation;this.escape=t!==void 0?t:wp,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?An(r):a||"{{",this.suffix=o?An(o):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?An(d):f||An("$t("),this.nestingSuffix=g?An(g):p||An(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=v||1e3,this.alwaysFormat=b!==void 0?b:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,n){var f;let r,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=g=>{if(g.indexOf(this.formatSeparator)<0){const b=gc(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(b,void 0,i,{...n,...t,interpolationkey:g}):b}const p=g.split(this.formatSeparator),_=p.shift().trim(),v=p.join(this.formatSeparator).trim();return this.format(gc(t,l,_,this.options.keySeparator,this.options.ignoreJSONStructure),v,i,{...n,...t,interpolationkey:_})};this.resetRegExp();const u=(n==null?void 0:n.missingInterpolationHandler)||this.options.missingInterpolationHandler,h=((f=n==null?void 0:n.interpolation)==null?void 0:f.skipOnVariables)!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Fa(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Fa(this.escape(g)):Fa(g)}].forEach(g=>{for(o=0;r=g.regex.exec(e);){const p=r[1].trim();if(a=c(p),a===void 0)if(typeof u=="function"){const v=u(e,r,n);a=B(v)?v:""}else if(n&&Object.prototype.hasOwnProperty.call(n,p))a="";else if(h){a=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),a="";else!B(a)&&!this.useRawValueToEscape&&(a=sc(a));const _=g.safeValue(a);if(e=e.replace(r[0],_),h?(g.regex.lastIndex+=a.length,g.regex.lastIndex-=r[0].length):g.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,a;const o=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const h=l.split(new RegExp(`${u}[ ]*{`));let d=`{${h[1]}`;l=h[0],d=this.interpolate(d,a);const f=d.match(/'/g),g=d.match(/"/g);(((f==null?void 0:f.length)??0)%2===0&&!g||g.length%2!==0)&&(d=d.replace(/'/g,'"'));try{a=JSON.parse(d),c&&(a={...c,...a})}catch(p){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,p),`${l}${u}${d}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!B(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const u=n[1].split(this.formatSeparator).map(h=>h.trim());n[1]=u.shift(),l=u,c=!0}if(r=t(o.call(this,n[1].trim(),a),a),r&&n[0]===e&&!B(r))return r;B(r)||(r=sc(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,h)=>this.format(u,h,i.lng,{...i,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const Ep=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);e==="currency"&&n.indexOf(":")<0?t.currency||(t.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?t.range||(t.range=n.trim()):n.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=c),c==="false"&&(t[u]=!1),c==="true"&&(t[u]=!0),isNaN(c)||(t[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},Ln=s=>{const e={};return(t,i,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const a=i+JSON.stringify(r);let o=e[a];return o||(o=s(ia(i),n),e[a]=o),o(t)}};class Ap{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ri.create("formatter"),this.options=e,this.formats={number:Ln((t,i)=>{const n=new Intl.NumberFormat(t,{...i});return r=>n.format(r)}),currency:Ln((t,i)=>{const n=new Intl.NumberFormat(t,{...i,style:"currency"});return r=>n.format(r)}),datetime:Ln((t,i)=>{const n=new Intl.DateTimeFormat(t,{...i});return r=>n.format(r)}),relativetime:Ln((t,i)=>{const n=new Intl.RelativeTimeFormat(t,{...i});return r=>n.format(r,i.range||"day")}),list:Ln((t,i)=>{const n=new Intl.ListFormat(t,{...i});return r=>n.format(r)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ln(t)}format(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(o=>o.indexOf(")")>-1)){const o=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,o)].join(this.formatSeparator)}return r.reduce((o,l)=>{var h;const{formatName:c,formatOptions:u}=Ep(l);if(this.formats[c]){let d=o;try{const f=((h=n==null?void 0:n.formatParams)==null?void 0:h[n.interpolationkey])||{},g=f.locale||f.lng||n.locale||n.lng||i;d=this.formats[c](o,g,{...u,...n,...f})}catch(f){this.logger.warn(f)}return d}else this.logger.warn(`there was no format function for ${c}`);return o},e)}}const Lp=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class Mp extends xa{constructor(e,t,i){var r,a;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=ri.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],(a=(r=this.backend)==null?void 0:r.init)==null||a.call(r,i,n.backend,n)}queueLoad(e,t,i,n){const r={},a={},o={},l={};return e.forEach(c=>{let u=!0;t.forEach(h=>{const d=`${c}|${h}`;!i.reload&&this.store.hasResourceBundle(c,h)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?a[d]===void 0&&(a[d]=!0):(this.state[d]=1,u=!1,a[d]===void 0&&(a[d]=!0),r[d]===void 0&&(r[d]=!0),l[h]===void 0&&(l[h]=!0)))}),u||(o[c]=!0)}),(Object.keys(r).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const n=e.split("|"),r=n[0],a=n[1];t&&this.emit("failedLoading",r,a,t),!t&&i&&this.store.addResourceBundle(r,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{bp(l.loaded,[r],a),Lp(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{o[c]||(o[c]={});const u=l.loaded[c];u.length&&u.forEach(h=>{o[c][h]===void 0&&(o[c][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:n,wait:r,callback:a});return}this.readingCalls++;const o=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&u&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,n+1,r*2,a)},r);return}a(c,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(u=>o(null,u)).catch(o):o(null,c)}catch(c){o(c)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();B(e)&&(e=this.languageUtils.toResolveHierarchy(e)),B(t)&&(t=[t]);const r=this.queueLoad(e,t,i,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),n=i[0],r=i[1];this.read(n,r,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${r} for language ${n} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${r} for language ${n}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,n,r){var l,c,u,h,d;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((c=(l=this.services)==null?void 0:l.utils)!=null&&c.hasLoadedNamespace&&!((h=(u=this.services)==null?void 0:u.utils)!=null&&h.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((d=this.backend)!=null&&d.create){const f={...a,isUpdate:r},g=this.backend.create.bind(this.backend);if(g.length<6)try{let p;g.length===5?p=g(e,t,i,n,f):p=g(e,t,i,n),p&&typeof p.then=="function"?p.then(_=>o(null,_)).catch(o):o(null,p)}catch(p){o(p)}else g(e,t,i,n,o,f)}!e||!e[0]||this.store.addResource(e[0],t,i,n)}}}const mc=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),B(s[1])&&(e.defaultValue=s[1]),B(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),_c=s=>{var e,t;return B(s.ns)&&(s.ns=[s.ns]),B(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),B(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),((t=(e=s.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s},ms=()=>{},zp=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class es extends xa{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=_c(e),this.services={},this.logger=ri,this.modules={external:[]},zp(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(B(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const n=mc();this.options={...n,...this.options,..._c(t)},this.options.interpolation={...n.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?ri.init(r(this.modules.logger),this.options):ri.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=Ap;const h=new hc(this.options);this.store=new cc(this.options.resources,this.options);const d=this.services;d.logger=ri,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new Tp(h,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(d.formatter=r(u),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Op(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new Mp(r(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),_=1;_<g;_++)p[_-1]=arguments[_];e.emit(f,...p)}),this.modules.languageDetector&&(d.languageDetector=r(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=r(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new ra(this.services,this.options),this.translator.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),_=1;_<g;_++)p[_-1]=arguments[_];e.emit(f,...p)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=ms),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=gr(),c=()=>{const u=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),i(h,d)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?c():setTimeout(c,0),l}loadResources(e){var r,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ms;const n=B(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((n==null?void 0:n.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(h=>{h!=="cimode"&&o.indexOf(h)<0&&o.push(h)})};n?l(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(a=(r=this.options.preload)==null?void 0:r.forEach)==null||a.call(r,c=>l(c)),this.services.backendConnector.load(o,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(c)})}else i(null)}reloadResources(e,t,i){const n=gr();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ms),this.services.backendConnector.reload(e,t,r=>{n.resolve(),i(r)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&ud.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const n=gr();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var u,h;!e&&!l&&this.services.languageDetector&&(l=[]);const c=B(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),(h=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||h.call(u,c)),this.loadResources(c,d=>{a(d,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),n}getFixedT(e,t,i){var n=this;const r=function(a,o){let l;if(typeof o!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),h=2;h<c;h++)u[h-2]=arguments[h];l=n.options.overloadTranslationOptionHandler([a,o].concat(u))}else l={...o};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const d=n.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(a)?f=a.map(g=>`${l.keyPrefix}${d}${g}`):f=l.keyPrefix?`${l.keyPrefix}${d}${a}`:a,n.t(f,l)};return B(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=i,r}t(){var n;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(n=this.translator)==null?void 0:n.translate(...t)}exists(){var n;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(n=this.translator)==null?void 0:n.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const c=this.services.backendConnector.state[`${o}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!n||a(r,e)))}loadNamespaces(e,t){const i=gr();return this.options.ns?(B(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=gr();B(e)&&(e=[e]);const n=this.options.preload||[],r=e.filter(a=>n.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return r.length?(this.options.preload=n.concat(r),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var n,r;if(e||(e=this.resolvedLanguage||(((n=this.languages)==null?void 0:n.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((r=this.services)==null?void 0:r.languageUtils)||new hc(mc());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new es(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ms;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new es(n);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(o=>{r[o]=this[o]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i){const o=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},Object.keys(l[c]).reduce((u,h)=>(u[h]={...l[c][h]},u),{})),{});r.store=new cc(o,n),r.services.resourceStore=r.store}return r.translator=new ra(r.services,n),r.translator.on("*",function(o){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(o,...c)}),r.init(n,t),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const m=es.createInstance();m.createInstance=es.createInstance;m.createInstance;m.dir;m.init;m.loadResources;m.reloadResources;m.use;m.changeLanguage;m.getFixedT;m.t;m.exists;m.setDefaultNamespace;m.hasLoadedNamespace;m.loadNamespaces;m.loadLanguages;const{slice:Dp,forEach:Rp}=[];function jp(s){return Rp.call(Dp.call(arguments,1),e=>{if(e)for(const t in e)s[t]===void 0&&(s[t]=e[t])}),s}function Ip(s){return typeof s!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(s))}const vc=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Np=function(s,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},n=encodeURIComponent(e);let r=`${s}=${n}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!vc.test(i.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${i.domain}`}if(i.path){if(!vc.test(i.path))throw new TypeError("option path is invalid");r+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");r+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(r+="; HttpOnly"),i.secure&&(r+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(r+="; Partitioned"),r},bc={create(s,e,t,i){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(n.expires=new Date,n.expires.setTime(n.expires.getTime()+t*60*1e3)),i&&(n.domain=i),document.cookie=Np(s,e,n)},read(s){const e=`${s}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let n=t[i];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(e)===0)return n.substring(e.length,n.length)}return null},remove(s,e){this.create(s,"",-1,e)}};var Fp={name:"cookie",lookup(s){let{lookupCookie:e}=s;if(e&&typeof document<"u")return bc.read(e)||void 0},cacheUserLanguage(s,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:n,cookieOptions:r}=e;t&&typeof document<"u"&&bc.create(t,s,i,n,r)}},Up={name:"querystring",lookup(s){var i;let{lookupQuerystring:e}=s,t;if(typeof window<"u"){let{search:n}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(n=window.location.hash.substring(window.location.hash.indexOf("?")));const a=n.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}},Hp={name:"hash",lookup(s){var n;let{lookupHash:e,lookupFromHashIndex:t}=s,i;if(typeof window<"u"){const{hash:r}=window.location;if(r&&r.length>2){const a=r.substring(1);if(e){const o=a.split("&");for(let l=0;l<o.length;l++){const c=o[l].indexOf("=");c>0&&o[l].substring(0,c)===e&&(i=o[l].substring(c+1))}}if(i)return i;if(!i&&t>-1){const o=r.match(/\/([a-zA-Z-]*)/g);return Array.isArray(o)?(n=o[typeof t=="number"?t:0])==null?void 0:n.replace("/",""):void 0}}}return i}};let Mn=null;const yc=()=>{if(Mn!==null)return Mn;try{if(Mn=typeof window<"u"&&window.localStorage!==null,!Mn)return!1;const s="i18next.translate.boo";window.localStorage.setItem(s,"foo"),window.localStorage.removeItem(s)}catch{Mn=!1}return Mn};var Vp={name:"localStorage",lookup(s){let{lookupLocalStorage:e}=s;if(e&&yc())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupLocalStorage:t}=e;t&&yc()&&window.localStorage.setItem(t,s)}};let zn=null;const xc=()=>{if(zn!==null)return zn;try{if(zn=typeof window<"u"&&window.sessionStorage!==null,!zn)return!1;const s="i18next.translate.boo";window.sessionStorage.setItem(s,"foo"),window.sessionStorage.removeItem(s)}catch{zn=!1}return zn};var Bp={name:"sessionStorage",lookup(s){let{lookupSessionStorage:e}=s;if(e&&xc())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupSessionStorage:t}=e;t&&xc()&&window.sessionStorage.setItem(t,s)}},qp={name:"navigator",lookup(s){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:n}=navigator;if(t)for(let r=0;r<t.length;r++)e.push(t[r]);i&&e.push(i),n&&e.push(n)}return e.length>0?e:void 0}},Wp={name:"htmlTag",lookup(s){let{htmlTag:e}=s,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},Yp={name:"path",lookup(s){var n;let{lookupFromPathIndex:e}=s;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(n=t[typeof e=="number"?e:0])==null?void 0:n.replace("/",""):void 0}},Xp={name:"subdomain",lookup(s){var n,r;let{lookupFromSubdomainIndex:e}=s;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((r=(n=window.location)==null?void 0:n.hostname)==null?void 0:r.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let dd=!1;try{document.cookie,dd=!0}catch{}const hd=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];dd||hd.splice(1,1);const Gp=()=>({order:hd,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:s=>s});class fd{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=jp(t,this.options||{},Gp()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=n=>n.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Fp),this.addDetector(Up),this.addDetector(Vp),this.addDetector(Bp),this.addDetector(qp),this.addDetector(Wp),this.addDetector(Yp),this.addDetector(Xp),this.addDetector(Hp)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let n=this.detectors[i].lookup(this.options);n&&typeof n=="string"&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(i=>i!=null&&!Ip(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}fd.type="languageDetector";const Kp={about:"About",connect:"Connect",journey:"Journey",praxis:"Approach",languages:{en:"EN",pt:"PT"}},Jp={title:"About me",p1:"Enthusiast of decentralized technologies and other geeky stuff, I'm driven by the balance between people's needs and business goals. Also deeply interested in AI, as a tool to simplify workflows, improve decision-making, and explore new creative possibilities.",p2:"Devoted to quality, I commit to continuous learning and professional development, staying abreast of emerging design trends tech advancements and best practices to deliver cutting-edge solutions.",education:"Education",courses:"Courses",iaBusiness:"AI in Digital Business",link:"See credential"},Zp={name:"Paulo Melo Jr.",status:"Available for hiring",picDescription:"An image of Paul M., a bearded man with short, dark hair. He is looking to the right with a thoughtful expression. He is wearing a plain t-shirt.",title:"Software designer",subtitle:"Crafting future-ready digital interactions",cta:{label:"Check out my latest work",label_alt1:"See last project",label_alt2:"Explore the last project",label_alt3:"Discover recent project",label_alt4:"View last case study",label_alt5:"See recent project",url:"/last-project"}},Qp={t1:"Design in thinking",p1:"From insight to interface, I design with people in mind. Merging aesthetics, purpose, and cutting-edge tech through Design Thinking and Human-Centered Design.",t2:"Technology to deliver",p2:"Learning from tech experts early on made algorithms a core part of my toolkit, bridging design and engineering to craft seamless, refined digital experiences."},eg={1:"Strategy",2:"Create",3:"Deliver",4:"Repeat"},tg={t0:"Journey",t1:"Design <br class='block md:hidden'> intern",p1:"During my internship, I had the opportunity to refine and develop skills across various functions. HTML and CSS development, marketing initiatives, visual design, branding, and UX/UI design.",t2:"Designer, <br class='block md:hidden'> front-end coder",p2:"In multifaceted collaboration with managers and the development team, we successfully redesigned the interfaces and features of company's software.",m2:"Also played a key role in co-creating a platform that facilitates connecting individuals facing legal issues with specialized professionals.",t3:"Visual and <br class='block md:hidden'> product designer",p3:"Early 2018, I held the role of a generalist designer, tasked with developing and managing all aspects of design and creative outputs for their product project.",m3:"Second half of the year, I collaborated with another company to design an open-source library of interface components.",t4:"Lead designer, <br class='block md:hidden'> UI engineer",p4:"Today responsible for redesigning the company's advanced lead management platform, using React components to improve performance and scalability."},ig={title:"Recent project",description:"A robust software for lead management, optimization, and distribution.",cta:"See details",project:"twyne.io"},ng={title:"Reach out"},rg={title:"Featured works",button:"Featured works"},sg={menu:{about:"About",goal:"Challenge",proposal:"Proposition",impact:"Outcomes",mobile:"Mobile",final:"Final"},t1:"Case study / 01",t2:"Twyne",about:{t1:"about",p1:"Developed by Ifficient, <span class='text-zinc-50'>Twyne is a robust software for lead management, optimization, and distribution, focused on monetization and real-time analytics.</span>",p2:"Targeted at the B2B market, it serves a few clients in volume, but with high ticket value and demanding customization.",details:{company:"Company",companyValue:"Ifficient",industry:"Industry",industryValue:"AdTech",product:"Product",productValue:"Software as a Service",contributions:"Contributions",contribution1:"Product Design",contribution2:"Design System",contribution3:"UI Engineering"}},goal:{t1:"Challenge",p1:"Tackling one of the biggest challenges in digital design: creating a <span class='text-zinc-50'>modular</span>, <span class='text-zinc-50'>scalable</span>, and <span class='text-zinc-50'>adaptable</span> interface for highly complex software, with constant growth in features and requirements.",p2:"The visual approach needed to balance performance, readability, and continuous evolution, without requiring a restart for every new feature. Delivering clarity and control even in dense flows."},proposal:{t1:"Proposition",l1:["A robust, strategic, and flexible UI kit.","Simplified UI that puts information up front.","Built to last, scale, and ease development."],p1:"Each component carries decisions guided by performance, readability, and functional clarity, with special attention to business logic and the journey of corporate users."},impact:{t1:"Outcomes",l1:["Reduced rework for the engineering team.","Faster onboarding for new users.","Supports new modules with minimal friction.","Strengthened identity with a modern UI."]},numbers:{t1:"+ 400.000",p1:"Registrations acquired per day",t2:"+ 2 million",p2:"User clicks on campaigns",t3:"+ 7 million",p3:"Leads negotiated daily"},mobile:{t1:"Built on solid principles. Ready for any platform."},conclusion:{t1:"Final thoughts",p1:"The modularity of the component library enables smart reuse, reducing complexity and increasing development speed.",p2:"Decisions on layout, typography, contrast, and spacing were calibrated to support dense data environments without compromising readability.",p3:"The result is an interface that adapts to the usage context without losing visual coherence or functional integrity."}},ag={title:"Allugator",tags:"Design Partner, Start-up",year:"2018",description:"Acting as a generalist designer, I contributed key deliverables for the startup's growth in its early stage, from rebranding and brand communication to digital product evolution.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investors in 2018"},users:{title:"+ 7000 new users",subtitle:"+ 100% compared to 2017"},daily:{title:"+ 1000 daily in 2018",subtitle:"+ 100% compared to 2017"}}},og={title:"Damus",tags:"Experiment, Rebranding",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Damus official website'>Damus</a> is a client for the decentralized social network Nostr, available for iOS, iPad, and macOS. It allows users to post text, images, videos, and GIFs, as well as interact with other users through the sending of <a href='https://en.wikipedia.org/wiki/Satoshi' class='underline text-zinc-100' target='_blank' title='Satoshi is the smallest unit of the system, representing 0.00000001 bitcoin, a hundredth of a millionth of a bitcoin.'>satoshis</a> and encrypted private messages.",description2:"The goal of Damus is to offer an alternative to traditional social networks, focusing on freedom of expression and privacy."},lg={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Interactive marketing company specialized in lead generation, based in Denver, CO.",description2:"There I led the design of Twyne and Path Evolution software, ensuring scalability and consistency in product evolution.",cta:"See details",fullView:"Full view"},cg={title:"Multiplayer Orchestra",tags:"Volunteer, Visual Design",year:"2017",description1:"Created by former students of UFMG's School of Music, Multiplayer explored soundtracks from series, movies, and games in their repertoire, connecting classical music to pop culture.",description2:"I was invited to join the project as a designer, taking care of visual communication and providing support in event production.",metrics:{audience:{title:"1.6k people in 2 concerts",subtitle:"@ Cine Theatro Brasil"},facebook:{title:"4.7k followers",subtitle:"Facebook"},youtube:{title:"2.1k subscribers",subtitle:"YouTube"}}},ug={404:{title:"404 · Page not found"},common:{description:"Enthusiast of decentralized technologies, Paul is a designer and coder from Brazil. Here you can find links to stay in touch with him.",keywords:"Paul M, Paulo Melo Jr, pmjr, digital product designer, product designer, interface designer, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animations, motion design, branding, portfolio, Brazil, São Paulo, decentralized technologies, bitcoin, nostr"},home:{title:"Paulo Melo Jr. · Designer and coder"},projects:{title:"Featured projects · Paulo Melo Jr.",keywords:"archive, projects, case studies"},lastProject:{title:"Twyne · Paulo Melo Jr.",keywords:"twyne, case study, product design, ui/ux, onboarding, mobile, web, adtech, interactive marketing, lead generation"}},dg={home:{label:"Home",url:"/"},projects:{label:"Featured works",url:"/projects"},lastProject:{label:"Last project",url:"/last-project"},instagram:{label:"Instagram",url:"https://instagram.com/paulomelojunior"},github:{label:"GitHub",url:"https://github.com/paulomelojunior"},linkedin:{label:"LinkedIn",url:"https://linkedin.com/in/paulomelojunior/"},email:{label:"Email",url:"mailto:hello@pmjr.cc"}},hg={menu:Kp,about:Jp,hero:Zp,praxis:Qp,method:eg,journey:tg,cases:ig,connect:ng,featured:rg,twyne:sg,allugator:ag,damus:og,ifficient:lg,multiplayer:cg,seo:ug,links:dg},fg={about:"Sobre",journey:"Jornada",praxis:"Abordagem",connect:"Contato",languages:{en:"EN",pt:"PT"}},pg={title:"Sobre mim",p1:"Entusiasta de tecnologias descentralizadas e outros assuntos geek, sou movido pelo equilíbrio entre as necessidades das pessoas e os objetivos de negócios. Também tenho profundo interesse em IA, como uma ferramenta para simplificar fluxos de trabalho, melhorar a tomada de decisões e explorar novas possibilidades criativas.",p2:"Comprometido com a qualidade, busco constantemente o aprendizado e o desenvolvimento profissional, mantendo-me atualizado sobre tendências emergentes de design, avanços tecnológicos e melhores práticas para oferecer soluções inovadoras.",education:"Educação",courses:"Cursos",iaBusiness:"IA em Negócios Digitais",link:"Ver credencial"},gg={name:"Paulo Melo Júnior",status:"Disponível para contrato",picDescription:"Uma foto de Paulo, um homem barbado com cabelos curtos e escuros. Ele está olhando para a direita com uma expressão pensativa. Ele usa uma camisa simples.",title:"Software designer",subtitle:"Interações digitais prontas para o futuro",cta:{label:"Ver trabalho mais recente",url:"/last-project"}},mg={t1:"Design no pensar",p1:"Do insight à interface, projeto com foco nas pessoas. Unindo estética, propósito e tecnologia de ponta por meio do Design Thinking e Human-Centered Design.",t2:"Tecnologia para realizar",p2:"Aprender com experts em tecnologia desde cedo tornou algoritmos parte do meu repertório, conecto design e engenharia para criar experiências refinadas."},_g={1:"Strategy",2:"Create",3:"Deliver",4:"Repeat"},vg={t0:"Jornada",t1:"Estagiário de <br class='block md:hidden'> design",p1:"Durante meu estágio, aprofundei e refinei habilidades em desenvolvimento front-end, participei de iniciativas de marketing, e atuei em design visual, branding e UX/UI.",m1:"",t2:"Designer, <br class='block md:hidden'> front-end coder",p2:"Em colaboração multifacetada com gerentes e a equipe de desenvolvimento, redesenhamos com sucesso as interfaces e funcionalidades do software da empresa.",m2:"Também desempenhei um papel fundamental na co-criação de uma plataforma que facilita a conexão de pessoas enfrentando questões legais com profissionais especializados.",t3:"Designer de produto",p3:"No início de 2018, exerci o papel de designer generalista, responsável por desenvolver e gerenciar todos os aspectos do design e saídas criativas para o projeto de produto.",m3:"Na segunda metade do ano, colaborei com outra empresa para projetar uma biblioteca open-source de componentes de interface.",t4:"Lead designer, <br class='block md:hidden'> UI engineer",p4:"Hoje responsável por redesenhar a plataforma avançada de gerenciamento de leads da empresa, usando componentes React para melhorar performance e escalabilidade."},bg={title:"Projeto mais recente",description:"Um software robusto para gestão, otimização e distribuição de leads.",cta:"Ver detalhes",project:"twyne.io"},yg={title:"Entre em contato"},xg={title:"Projetos <br> em destaque",button:"Projetos destaque"},wg={menu:{about:"Sobre",goal:"Desafio",proposal:"Proposta",impact:"Resultados",mobile:"Mobile",final:"Final"},t1:"Estudo de caso / 01",t2:"Twyne",about:{t1:"O que é",p1:"Desenvolvida pela Ifficient, <span class='text-zinc-100'>o Twyne é um software robusto de gestão, otimização e distribuição de leads, com foco em monetização e análise em tempo real.</span>",p2:"Voltada para o mercado B2B, atende poucos clientes em volume, mas com alto ticket médio e exigências elevadas de personalização.",details:{company:"Empresa",companyValue:"Ifficient",industry:"Mercado",industryValue:"AdTech",product:"Produto",productValue:"Software as a Service",contributions:"Contribuições",contribution1:"Product Design",contribution2:"Design System",contribution3:"UI Engineering"}},projectInfo:{company:"Empresa",companyValue:"Ifficient",industry:"Setor",industryValue:"AdTech",product:"Produto",productValue:"Software as a Service",contributions:"Contribuições",contribution1:"Design de Produto",contribution2:"Design System",contribution3:"UI Engineering"},goal:{t1:"Desafio",p1:"Resolver um dos grandes desafios do design digital: criar uma <span class='text-zinc-100'>interface modular</span>, <span class='text-zinc-100'>escalável</span> e <span class='text-zinc-100'>adaptável</span> para um software de alta complexidade técnica, com crescimento constante de features e demandas.",p2:"A proposta visual precisava equilibrar performance, legibilidade e evolução contínua, sem exigir recomeços a cada nova funcionalidade. Oferecendo clareza e controle mesmo em fluxos densos."},proposal:{t1:"Proposta",l1:["Biblioteca de componentes robusta, estratégica e flexível.","UI simplificada e informações em primeiro plano.","Pensado para durar, escalar e facilitar o desenvolvimento."],p1:"Cada componente carrega decisões orientadas por performance, legibilidade e clareza funcional, com atenção especial à jornada dos usuários corporativos."},impact:{t1:"Resultados",l1:["Redução de retrabalho no time de engenharia.","Aumento na velocidade de onboarding de novos usuários.","Base que suportou a adição de novos módulos sem atrito.","Fortalecimento da identidade com uma UI moderna."]},numbers:{t1:"+ 400 mil",p1:"Registros adiquiridos por dia",t2:"+ 2 milhões",p2:"Clicks de usuários em campanhas",t3:"+ 7 milhões",p3:"Leads negociados diariamente"},mobile:{t1:"Construído com solidez. Pronto para qualquer plataforma."},conclusion:{t1:"Considerações finais",p1:"A modularidade do UI kit permite reuso inteligente, reduzindo complexidade e aumentando a velocidade de desenvolvimento.",p2:"As decisões de layout, tipografia, contraste e espaçamento foram calibradas para sustentar ambientes densos de dados sem comprometer a legibilidade.",p3:"O resultado é uma interface que se adapta ao contexto de uso sem perder coerência visual nem integridade funcional."}},Cg={title:"Allugator",tags:"Design Partner, Start-up",year:"2018",description:"Atuando como designer generalista, contribuí com entregas-chave para o crescimento da startup em seu estágio inicial, da reformulação da identidade e comunicação da marca à evolução do produto digital.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investidores em 2018"},users:{title:"+ 7000 usuários novos",subtitle:"+ 100% em relação a 2017"},daily:{title:"+ 1000 diárias em 2018",subtitle:"+ 100% em relação a 2017"}}},Sg={title:"Damus",tags:"Experimento, Rebranding",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Site oficial do Damus'>Damus</a> é um cliente para a rede social descentralizada Nostr, disponível para iOS, iPad e macOS. Ele permite aos usuários postar textos, imagens, vídeos e GIFs, além de interagir com outros usuários através de envio de <a href='https://pt.wikipedia.org/wiki/Bitcoin' class='underline text-zinc-100' target='_blank' title='Satoshi, é a menor quantidade do sistema, representando 0,00000001 bitcoin, um centésimo de milionésimo de bitcoin.'>satoshis</a> e mensagens privadas criptografadas.",description2:"O objetivo do Damus é oferecer uma alternativa às redes sociais tradicionais, com foco na liberdade de expressão e privacidade."},$g={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Companhia de marketing interativo especializada em geração de leads, com base em Denver, CO.",description2:"Nela liderei o design dos softwares Twyne e Path Evolution, assegurando escalabilidade e consistência na evolução dos produtos.",cta:"Ver detalhes",fullView:"Ver tudo"},Pg={title:"Orquestra Multiplayer",tags:"Voluntário, Visual Design",year:"2017",description1:"Criada por ex-alunos da Escola de Música da UFMG, a Multiplayer explorava trilhas sonoras de séries, filmes e jogos em seu repertório, ligando música erudita à cultura pop.",description2:"Fui convidado a integrar o projeto como designer, cuidando da comunicação visual e prestando suporte na produção dos eventos.",metrics:{audience:{title:"1600 pessoas em 2 concertos",subtitle:"@ Cine Theatro Brasil"},facebook:{title:"4,7 mil seguidores",subtitle:"Facebook"},youtube:{title:"2,1 mil inscritos",subtitle:"YouTube"}}},kg={404:{title:"404 · Página não encontrada"},common:{description:"Entusiasta de tecnologias descentralizadas, Paulo é designer e coder do Brasil. Aqui você encontra links para se conectar com ele.",keywords:"Paulo Melo Júnior, Paulo Melo Jr, Paul M, pmjr, designer de produto digital, product designer, designer de interface, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animações, motion design, branding, portfólio, Brasil, São Paulo, tecnologias descentralizadas, bitcoin, nostr"},home:{title:"Paulo Melo Jr. · Designer and coder"},projects:{title:"Projetos em destaque · Paulo Melo Jr.",keywords:"arquivo, projetos, cases"},lastProject:{title:"Twyne · Paulo Melo Jr.",keywords:"twyne, estudo de caso, design de produto, ui/ux, onboarding, mobile, web, adtech, marketing interativo, geração de leads"}},Tg={home:{label:"Home",url:"/"},projects:{label:"Projetos",url:"/projects"},lastProject:{label:"Último projeto",url:"/last-project"},github:{label:"GitHub",url:"https://github.com/paulomelojunior"},linkedin:{label:"LinkedIn",url:"https://linkedin.com/in/paulomelojunior/"},email:{label:"Email",url:"mailto:hello@pmjr.cc"}},Og={menu:fg,about:pg,hero:gg,praxis:mg,method:_g,journey:vg,cases:bg,connect:yg,featured:xg,twyne:wg,allugator:Cg,damus:Sg,ifficient:$g,multiplayer:Pg,seo:kg,links:Tg};m.use(fd).init({fallbackLng:"en",detection:{order:["navigator","htmlTag"],caches:["localStorage"]},interpolation:{escapeValue:!1},resources:{en:{translation:hg},pt:{translation:Og}}});m.on("languageChanged",s=>{document.documentElement.lang=s});var wc="1.3.18";function pd(s,e,t){return Math.max(s,Math.min(e,t))}function Eg(s,e,t){return(1-t)*s+t*e}function Ag(s,e,t,i){return Eg(s,e,1-Math.exp(-t*i))}function Lg(s,e){return(s%e+e)%e}var Mg=class{constructor(){R(this,"isRunning",!1);R(this,"value",0);R(this,"from",0);R(this,"to",0);R(this,"currentTime",0);R(this,"lerp");R(this,"duration");R(this,"easing");R(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const i=pd(0,this.currentTime/this.duration,1);e=i>=1;const n=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Ag(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:i,easing:n,onStart:r,onUpdate:a}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=a}};function zg(s,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,i)},e)}}var Dg=class{constructor(s,e,{autoResize:t=!0,debounce:i=250}={}){R(this,"width",0);R(this,"height",0);R(this,"scrollHeight",0);R(this,"scrollWidth",0);R(this,"debouncedResize");R(this,"wrapperResizeObserver");R(this,"contentResizeObserver");R(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});R(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});R(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=zg(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},gd=class{constructor(){R(this,"events",{})}emit(s,...e){var i;const t=this.events[s]||[];for(let n=0,r=t.length;n<r;n++)(i=t[n])==null||i.call(t,...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(i=>e!==i)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}},Rg=100/6,Oi={passive:!1};function Cc(s,e){return s===1?Rg:s===2?e:1}var jg=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){R(this,"touchStart",{x:0,y:0});R(this,"lastDelta",{x:0,y:0});R(this,"window",{width:0,height:0});R(this,"emitter",new gd);R(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});R(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});R(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});R(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:i}=s;const n=Cc(i,this.window.width),r=Cc(i,this.window.height);e*=n,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});R(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Oi),this.element.addEventListener("touchstart",this.onTouchStart,Oi),this.element.addEventListener("touchmove",this.onTouchMove,Oi),this.element.addEventListener("touchend",this.onTouchEnd,Oi)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Oi),this.element.removeEventListener("touchstart",this.onTouchStart,Oi),this.element.removeEventListener("touchmove",this.onTouchMove,Oi),this.element.removeEventListener("touchend",this.onTouchEnd,Oi)}},Sc=s=>Math.min(1,1.001-2**(-10*s)),md=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:p=!0,prevent:_,virtualScroll:v,overscroll:b=!0,autoRaf:w=!1,anchors:x=!1,autoToggle:S=!1,allowNestedScroll:P=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:T=C,stopInertiaOnNavigate:k=!1}={}){R(this,"_isScrolling",!1);R(this,"_isStopped",!1);R(this,"_isLocked",!1);R(this,"_preventNextNativeScrollEvent",!1);R(this,"_resetVelocityTimeout",null);R(this,"_rafId",null);R(this,"isTouching");R(this,"time",0);R(this,"userData",{});R(this,"lastVelocity",0);R(this,"velocity",0);R(this,"direction",0);R(this,"options");R(this,"targetScroll");R(this,"animatedScroll");R(this,"animate",new Mg);R(this,"emitter",new gd);R(this,"dimensions");R(this,"virtualScroll");R(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});R(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});R(this,"onTransitionEnd",s=>{s.propertyName.includes("overflow")&&this.checkOverflow()});R(this,"onClick",s=>{const t=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.getAttribute("href"));if(this.options.anchors){const i=t.find(n=>{var r;return(r=n.getAttribute("href"))==null?void 0:r.includes("#")});if(i){const n=i.getAttribute("href");if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${n.split("#")[1]}`;this.scrollTo(a,r)}}}this.options.stopInertiaOnNavigate&&t.find(n=>n.host===window.location.host)&&this.reset()});R(this,"onPointerDown",s=>{s.button===1&&this.reset()});R(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const n=i.type.includes("touch"),r=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(c.find(v=>{var b,w,x,S,P;return v instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(v))||((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent"))||h==="vertical"&&((w=v.hasAttribute)==null?void 0:w.call(v,"data-lenis-prevent-vertical"))||h==="horizontal"&&((x=v.hasAttribute)==null?void 0:x.call(v,"data-lenis-prevent-horizontal"))||n&&((S=v.hasAttribute)==null?void 0:S.call(v,"data-lenis-prevent-touch"))||r&&((P=v.hasAttribute)==null?void 0:P.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const g=n&&this.options.syncTouch,_=n&&i.type==="touchend";_&&(f=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...g?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});R(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});R(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=wc,window.lenis||(window.lenis={}),window.lenis.version=wc,h==="horizontal"&&(window.lenis.horizontal=!0),(!s||s===document.documentElement)&&(s=window),typeof o=="number"&&typeof l!="function"?l=Sc:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:g,autoResize:p,prevent:_,virtualScroll:v,overscroll:b,autoRaf:w,anchors:x,autoToggle:S,allowNestedScroll:P,naiveDimensions:T,stopInertiaOnNavigate:k},this.dimensions=new Dg(s,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new jg(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:n=!0,lerp:r=n?this.options.lerp:void 0,duration:a=n?this.options.duration:void 0,easing:o=n?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!u)return;let d=s,f=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&(d!=null&&d.nodeType)&&(g=d),g){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?_.left:_.top}const p=g.getBoundingClientRect();d=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof d=="number"){if(d+=f,d=Math.round(d),this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=pd(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=d),typeof a=="number"&&typeof o!="function"?o=Sc:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,d,{duration:a,easing:o,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),n&&(this.targetScroll=g),p||this.emit(),p&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){const i=Date.now();s._lenis||(s._lenis={});const n=s._lenis;let r,a,o,l,c,u,h,d,f,g;if(i-(n.time??0)>2e3){n.time=Date.now();const C=window.getComputedStyle(s);if(n.computedStyle=C,r=["auto","overlay","scroll"].includes(C.overflowX),a=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),n.hasOverflowX=r,n.hasOverflowY=a,!(r||a))return!1;h=s.scrollWidth,d=s.scrollHeight,f=s.clientWidth,g=s.clientHeight,o=h>f,l=d>g,n.isScrollableX=o,n.isScrollableY=l,n.scrollWidth=h,n.scrollHeight=d,n.clientWidth=f,n.clientHeight=g,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=u}else o=n.isScrollableX,l=n.isScrollableY,r=n.hasOverflowX,a=n.hasOverflowY,h=n.scrollWidth,d=n.scrollHeight,f=n.clientWidth,g=n.clientHeight,c=n.hasOverscrollBehaviorX,u=n.hasOverscrollBehaviorY;if(!(r&&o||a&&l))return!1;const p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,v,b,w,x,S;if(p==="horizontal")_=Math.round(s.scrollLeft),v=h-f,b=e,w=r,x=o,S=c;else if(p==="vertical")_=Math.round(s.scrollTop),v=d-g,b=t,w=a,x=l,S=u;else return!1;return!S&&(_>=v||_<=0)?!0:(b>0?_<v:_>0)&&w&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Lg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const ts=new md;window.lenis=ts;function po(s){ts.raf(s),requestAnimationFrame(po)}const Ig=!!document.querySelector("mobile-loading");Ig?(ts.stop(),window.addEventListener("mobile-loading:done",()=>{ts.start(),requestAnimationFrame(po)},{once:!0})):requestAnimationFrame(po);document.addEventListener("click",s=>{const e=s.target.closest('a[href^="#"]');if(!e)return;const t=e.getAttribute("href");if(!t)return;const i=document.querySelector(t);i&&(s.preventDefault(),ts.scrollTo(i))});/*!
 * paths 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ng=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Fg=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Ug=Math.PI/180,_s=Math.sin,vs=Math.cos,Mr=Math.abs,mr=Math.sqrt,Hg=function(e){return typeof e=="number"},$c=1e5,Ei=function(e){return Math.round(e*$c)/$c||0},Pc=function(e){return e.closed=Math.abs(e[0]-e[e.length-2])<.001&&Math.abs(e[1]-e[e.length-1])<.001};function Vg(s,e,t,i,n,r,a){for(var o=s.length,l,c,u,h,d;--o>-1;)for(l=s[o],c=l.length,u=0;u<c;u+=2)h=l[u],d=l[u+1],l[u]=h*e+d*i+r,l[u+1]=h*t+d*n+a;return s._dirty=1,s}function Bg(s,e,t,i,n,r,a,o,l){if(!(s===o&&e===l)){t=Mr(t),i=Mr(i);var c=n%360*Ug,u=vs(c),h=_s(c),d=Math.PI,f=d*2,g=(s-o)/2,p=(e-l)/2,_=u*g+h*p,v=-h*g+u*p,b=_*_,w=v*v,x=b/(t*t)+w/(i*i);x>1&&(t=mr(x)*t,i=mr(x)*i);var S=t*t,P=i*i,C=(S*P-S*w-P*b)/(S*w+P*b);C<0&&(C=0);var T=(r===a?-1:1)*mr(C),k=T*(t*v/i),O=T*-(i*_/t),M=(s+o)/2,E=(e+l)/2,V=M+(u*k-h*O),U=E+(h*k+u*O),I=(_-k)/t,N=(v-O)/i,j=(-_-k)/t,J=(-v-O)/i,Y=I*I+N*N,y=(N<0?-1:1)*Math.acos(I/mr(Y)),K=(I*J-N*j<0?-1:1)*Math.acos((I*j+N*J)/mr(Y*(j*j+J*J)));isNaN(K)&&(K=d),!a&&K>0?K-=f:a&&K<0&&(K+=f),y%=f,K%=f;var Te=Math.ceil(Mr(K)/(f/4)),ge=[],ue=K/Te,we=4/3*_s(ue/2)/(1+vs(ue/2)),Ue=u*t,Ce=h*t,Xe=h*-i,He=u*i,Se;for(Se=0;Se<Te;Se++)n=y+Se*ue,_=vs(n),v=_s(n),I=vs(n+=ue),N=_s(n),ge.push(_-we*v,v+we*_,I+we*N,N-we*I,I,N);for(Se=0;Se<ge.length;Se+=2)_=ge[Se],v=ge[Se+1],ge[Se]=_*Ue+v*Xe+V,ge[Se+1]=_*Ce+v*He+U;return ge[Se-2]=o,ge[Se-1]=l,ge}}function qg(s){var e=(s+"").replace(Fg,function(k){var O=+k;return O<1e-4&&O>-1e-4?0:O}).match(Ng)||[],t=[],i=0,n=0,r=2/3,a=e.length,o=0,l="ERROR: malformed path: "+s,c,u,h,d,f,g,p,_,v,b,w,x,S,P,C,T=function(O,M,E,V){b=(E-O)/3,w=(V-M)/3,p.push(O+b,M+w,E-b,V-w,E,V)};if(!s||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<a;c++)if(S=f,isNaN(e[c])?(f=e[c].toUpperCase(),g=f!==e[c]):c--,h=+e[c+1],d=+e[c+2],g&&(h+=i,d+=n),c||(_=h,v=d),f==="M")p&&(p.length<8?t.length-=1:o+=p.length,Pc(p)),i=_=h,n=v=d,p=[h,d],t.push(p),c+=2,f="L";else if(f==="C")p||(p=[0,0]),g||(i=n=0),p.push(h,d,i+e[c+3]*1,n+e[c+4]*1,i+=e[c+5]*1,n+=e[c+6]*1),c+=6;else if(f==="S")b=i,w=n,(S==="C"||S==="S")&&(b+=i-p[p.length-4],w+=n-p[p.length-3]),g||(i=n=0),p.push(b,w,h,d,i+=e[c+3]*1,n+=e[c+4]*1),c+=4;else if(f==="Q")b=i+(h-i)*r,w=n+(d-n)*r,g||(i=n=0),i+=e[c+3]*1,n+=e[c+4]*1,p.push(b,w,i+(h-i)*r,n+(d-n)*r,i,n),c+=4;else if(f==="T")b=i-p[p.length-4],w=n-p[p.length-3],p.push(i+b,n+w,h+(i+b*1.5-h)*r,d+(n+w*1.5-d)*r,i=h,n=d),c+=2;else if(f==="H")T(i,n,i=h,n),c+=1;else if(f==="V")T(i,n,i,n=h+(g?n-i:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(h=_,d=v,p.closed=!0),(f==="L"||Mr(i-h)>.5||Mr(n-d)>.5)&&(T(i,n,h,d),f==="L"&&(c+=2)),i=h,n=d;else if(f==="A"){if(P=e[c+4],C=e[c+5],b=e[c+6],w=e[c+7],u=7,P.length>1&&(P.length<3?(w=b,b=C,u--):(w=C,b=P.substr(2),u-=2),C=P.charAt(1),P=P.charAt(0)),x=Bg(i,n,+e[c+1],+e[c+2],+e[c+3],+P,+C,(g?i:0)+b*1,(g?n:0)+w*1),c+=u,x)for(u=0;u<x.length;u++)p.push(x[u]);i=p[p.length-2],n=p[p.length-1]}else console.log(l);return c=p.length,c<6?(t.pop(),c=0):Pc(p),t.totalPoints=o+c,t}function Wg(s){Hg(s[0])&&(s=[s]);var e="",t=s.length,i,n,r,a;for(n=0;n<t;n++){for(a=s[n],e+="M"+Ei(a[0])+","+Ei(a[1])+" C",i=a.length,r=2;r<i;r++)e+=Ei(a[r++])+","+Ei(a[r++])+" "+Ei(a[r++])+","+Ei(a[r++])+" "+Ei(a[r++])+","+Ei(a[r])+" ";a.closed&&(e+="z")}return e}/*!
 * CustomEase 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vt,_d,vd=function(){return vt||typeof window<"u"&&(vt=window.gsap)&&vt.registerPlugin&&vt},kc=function(){vt=vd(),vt?(vt.registerEase("_CE",sr.create),_d=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Yg=1e20,bs=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Xg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Gg=/[cLlsSaAhHvVtTqQ]/g,Kg=function(e){var t=e.length,i=Yg,n;for(n=1;n<t;n+=6)+e[n]<i&&(i=+e[n]);return i},Jg=function(e,t,i){!i&&i!==0&&(i=Math.max(+e[e.length-1],+e[1]));var n=+e[0]*-1,r=-i,a=e.length,o=1/(+e[a-2]+n),l=-t||(Math.abs(+e[a-1]-+e[1])<.01*(+e[a-2]-+e[0])?Kg(e)+r:+e[a-1]+r),c;for(l?l=1/l:l=-o,c=0;c<a;c+=2)e[c]=(+e[c]+n)*o,e[c+1]=(+e[c+1]+r)*l},Zg=function s(e,t,i,n,r,a,o,l,c,u,h){var d=(e+i)/2,f=(t+n)/2,g=(i+r)/2,p=(n+a)/2,_=(r+o)/2,v=(a+l)/2,b=(d+g)/2,w=(f+p)/2,x=(g+_)/2,S=(p+v)/2,P=(b+x)/2,C=(w+S)/2,T=o-e,k=l-t,O=Math.abs((i-o)*k-(n-l)*T),M=Math.abs((r-o)*k-(a-l)*T),E;return u||(u=[{x:e,y:t},{x:o,y:l}],h=1),u.splice(h||u.length-1,0,{x:P,y:C}),(O+M)*(O+M)>c*(T*T+k*k)&&(E=u.length,s(e,t,d,f,b,w,P,C,c,u,h),s(P,C,x,S,_,v,o,l,c,u,h+1+(u.length-E))),u},sr=(function(){function s(t,i,n){_d||kc(),this.id=t,this.setData(i,n)}var e=s.prototype;return e.setData=function(i,n){n=n||{},i=i||"0,0,1,1";var r=i.match(Xg),a=1,o=[],l=[],c=n.precision||1,u=c<=1,h,d,f,g,p,_,v,b,w;if(this.data=i,(Gg.test(i)||~i.indexOf("M")&&i.indexOf("C")<0)&&(r=qg(i)[0]),h=r.length,h===4)r.unshift(0,0),r.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[h-2]!=1)&&Jg(r,n.height,n.originY),this.segment=r,g=2;g<h;g+=6)d={x:+r[g-2],y:+r[g-1]},f={x:+r[g+4],y:+r[g+5]},o.push(d,f),Zg(d.x,d.y,+r[g],+r[g+1],+r[g+2],+r[g+3],f.x,f.y,1/(c*2e5),o,o.length-1);for(h=o.length,g=0;g<h;g++)v=o[g],b=o[g-1]||v,(v.x>b.x||b.y!==v.y&&b.x===v.x||v===b)&&v.x<=1?(b.cx=v.x-b.x,b.cy=v.y-b.y,b.n=v,b.nx=v.x,u&&g>1&&Math.abs(b.cy/b.cx-o[g-2].cy/o[g-2].cx)>2&&(u=0),b.cx<a&&(b.cx?a=b.cx:(b.cx=.001,g===h-1&&(b.x-=.001,a=Math.min(a,.001),u=0)))):(o.splice(g--,1),h--);if(h=1/a+1|0,p=1/h,_=0,v=o[0],u){for(g=0;g<h;g++)w=g*p,v.nx<w&&(v=o[++_]),d=v.y+(w-v.x)/v.cx*v.cy,l[g]={x:w,cx:p,y:d,cy:0,nx:9},g&&(l[g-1].cy=d-l[g-1].y);_=o[o.length-1],l[h-1].cy=_.y-d,l[h-1].cx=_.x-l[l.length-1].x}else{for(g=0;g<h;g++)v.nx<g*p&&(v=o[++_]),l[g]=v;_<o.length-1&&(l[g-1]=o[o.length-2])}return this.ease=function(x){var S=l[x*h|0]||l[h-1];return S.nx<x&&(S=S.n),S.y+(x-S.x)/S.cx*S.cy},this.ease.custom=this,this.id&&vt&&vt.registerEase(this.id,this.ease),this},e.getSVGData=function(i){return s.getSVGData(this,i)},s.create=function(i,n,r){return new s(i,n,r).ease},s.register=function(i){vt=i,kc()},s.get=function(i){return vt.parseEase(i)},s.getSVGData=function(i,n){n=n||{};var r=n.width||100,a=n.height||100,o=n.x||0,l=(n.y||0)+a,c=vt.utils.toArray(n.path)[0],u,h,d,f,g,p,_,v,b,w;if(n.invert&&(a=-a,l=0),typeof i=="string"&&(i=vt.parseEase(i)),i.custom&&(i=i.custom),i instanceof s)u=Wg(Vg([i.segment.slice(0)],r,0,0,-a,o,l));else{for(u=[o,l],_=Math.max(5,(n.precision||1)*200),f=1/_,_+=2,v=5/_,b=bs(o+f*r),w=bs(l+i(f)*-a),h=(w-l)/(b-o),d=2;d<_;d++)g=bs(o+d*f*r),p=bs(l+i(d*f)*-a),(Math.abs((p-w)/(g-b)-h)>v||d===_-1)&&(u.push(b,w),h=(p-w)/(g-b)),b=g,w=p;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},s})();sr.version="3.14.2";sr.headless=!0;vd()&&vt.registerPlugin(sr);function Qg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function em(s,e,t){return e&&Qg(s.prototype,e),s}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Je,Is,Lt,Ri,ji,Wn,bd,nn,zr,yd,bi,Kt,xd,wd=function(){return Je||typeof window<"u"&&(Je=window.gsap)&&Je.registerPlugin&&Je},Cd=1,Hn=[],te=[],oi=[],Dr=Date.now,go=function(e,t){return t},tm=function(){var e=zr.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,te),n.push.apply(n,oi),te=i,oi=n,go=function(a,o){return t[a](o)}},Ui=function(e,t){return~oi.indexOf(e)&&oi[oi.indexOf(e)+1][t]},Rr=function(e){return!!~yd.indexOf(e)},ut=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:n!==!1,capture:!!r})},ct=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},ys="scrollLeft",xs="scrollTop",mo=function(){return bi&&bi.isPressed||te.cache++},sa=function(e,t){var i=function n(r){if(r||r===0){Cd&&(Lt.history.scrollRestoration="manual");var a=bi&&bi.isPressed;r=n.v=Math.round(r)||(bi&&bi.iOS?1:0),e(r),n.cacheID=te.cache,a&&go("ss",r)}else(t||te.cache!==n.cacheID||go("ref"))&&(n.cacheID=te.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},gt={s:ys,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sa(function(s){return arguments.length?Lt.scrollTo(s,Fe.sc()):Lt.pageXOffset||Ri[ys]||ji[ys]||Wn[ys]||0})},Fe={s:xs,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gt,sc:sa(function(s){return arguments.length?Lt.scrollTo(gt.sc(),s):Lt.pageYOffset||Ri[xs]||ji[xs]||Wn[xs]||0})},_t=function(e,t){return(t&&t._ctx&&t._ctx.selector||Je.utils.toArray)(e)[0]||(typeof e=="string"&&Je.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},im=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},qi=function(e,t){var i=t.s,n=t.sc;Rr(e)&&(e=Ri.scrollingElement||ji);var r=te.indexOf(e),a=n===Fe.sc?1:2;!~r&&(r=te.push(e)-1),te[r+a]||ut(e,"scroll",mo);var o=te[r+a],l=o||(te[r+a]=sa(Ui(e,i),!0)||(Rr(e)?n:sa(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=Je.getProperty(e,"scrollBehavior")==="smooth"),l},_o=function(e,t,i){var n=e,r=e,a=Dr(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,p){var _=Dr();p||_-a>l?(r=n,n=g,o=a,a=_):i?n+=g:n=r+(g-r)/(_-o)*(a-o)},h=function(){r=n=i?0:n,o=a=0},d=function(g){var p=o,_=r,v=Dr();return(g||g===0)&&g!==n&&u(g),a===o||v-o>c?0:(n+(i?_:-_))/((i?v:a)-p)*1e3};return{update:u,reset:h,getVelocity:d}},_r=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Tc=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Sd=function(){zr=Je.core.globals().ScrollTrigger,zr&&zr.core&&tm()},$d=function(e){return Je=e||wd(),!Is&&Je&&typeof document<"u"&&document.body&&(Lt=window,Ri=document,ji=Ri.documentElement,Wn=Ri.body,yd=[Lt,Ri,ji,Wn],Je.utils.clamp,xd=Je.core.context||function(){},nn="onpointerenter"in Wn?"pointer":"mouse",bd=ze.isTouch=Lt.matchMedia&&Lt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Lt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Kt=ze.eventTypes=("ontouchstart"in ji?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ji?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Cd=0},500),Sd(),Is=1),Is};gt.op=Fe;te.cache=0;var ze=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){Is||$d(Je)||console.warn("Please gsap.registerPlugin(Observer)"),zr||Sd();var n=i.tolerance,r=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,d=i.onStopDelay,f=i.ignore,g=i.wheelSpeed,p=i.event,_=i.onDragStart,v=i.onDragEnd,b=i.onDrag,w=i.onPress,x=i.onRelease,S=i.onRight,P=i.onLeft,C=i.onUp,T=i.onDown,k=i.onChangeX,O=i.onChangeY,M=i.onChange,E=i.onToggleX,V=i.onToggleY,U=i.onHover,I=i.onHoverEnd,N=i.onMove,j=i.ignoreCheck,J=i.isNormalizer,Y=i.onGestureStart,y=i.onGestureEnd,K=i.onWheel,Te=i.onEnable,ge=i.onDisable,ue=i.onClick,we=i.scrollSpeed,Ue=i.capture,Ce=i.allowClicks,Xe=i.lockAxis,He=i.onLockAxis;this.target=o=_t(o)||ji,this.vars=i,f&&(f=Je.utils.toArray(f)),n=n||1e-9,r=r||0,g=g||1,we=we||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Lt.getComputedStyle(Wn).lineHeight)||22);var Se,ot,lt,ae,Oe,mt,St,$=this,$t=0,di=0,Si=i.passive||!u&&i.passive!==!1,$e=qi(o,gt),hi=qi(o,Fe),$i=$e(),Yi=hi(),Ve=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Kt[0]==="pointerdown",Pi=Rr(o),Ee=o.ownerDocument||Ri,qt=[0,0,0],It=[0,0,0],fi=0,cr=function(){return fi=Dr()},De=function(H,le){return($.event=H)&&f&&im(H.target,f)||le&&Ve&&H.pointerType!=="touch"||j&&j(H,le)},hs=function(){$._vx.reset(),$._vy.reset(),ot.pause(),h&&h($)},pi=function(){var H=$.deltaX=Tc(qt),le=$.deltaY=Tc(It),A=Math.abs(H)>=n,q=Math.abs(le)>=n;M&&(A||q)&&M($,H,le,qt,It),A&&(S&&$.deltaX>0&&S($),P&&$.deltaX<0&&P($),k&&k($),E&&$.deltaX<0!=$t<0&&E($),$t=$.deltaX,qt[0]=qt[1]=qt[2]=0),q&&(T&&$.deltaY>0&&T($),C&&$.deltaY<0&&C($),O&&O($),V&&$.deltaY<0!=di<0&&V($),di=$.deltaY,It[0]=It[1]=It[2]=0),(ae||lt)&&(N&&N($),lt&&(_&&lt===1&&_($),b&&b($),lt=0),ae=!1),mt&&!(mt=!1)&&He&&He($),Oe&&(K($),Oe=!1),Se=0},kn=function(H,le,A){qt[A]+=H,It[A]+=le,$._vx.update(H),$._vy.update(le),c?Se||(Se=requestAnimationFrame(pi)):pi()},Tn=function(H,le){Xe&&!St&&($.axis=St=Math.abs(H)>Math.abs(le)?"x":"y",mt=!0),St!=="y"&&(qt[2]+=H,$._vx.update(H,!0)),St!=="x"&&(It[2]+=le,$._vy.update(le,!0)),c?Se||(Se=requestAnimationFrame(pi)):pi()},ki=function(H){if(!De(H,1)){H=_r(H,u);var le=H.clientX,A=H.clientY,q=le-$.x,F=A-$.y,W=$.isDragging;$.x=le,$.y=A,(W||(q||F)&&(Math.abs($.startX-le)>=r||Math.abs($.startY-A)>=r))&&(lt||(lt=W?2:1),W||($.isDragging=!0),Tn(q,F))}},Xi=$.onPress=function(X){De(X,1)||X&&X.button||($.axis=St=null,ot.pause(),$.isPressed=!0,X=_r(X),$t=di=0,$.startX=$.x=X.clientX,$.startY=$.y=X.clientY,$._vx.reset(),$._vy.reset(),ut(J?o:Ee,Kt[1],ki,Si,!0),$.deltaX=$.deltaY=0,w&&w($))},ne=$.onRelease=function(X){if(!De(X,1)){ct(J?o:Ee,Kt[1],ki,!0);var H=!isNaN($.y-$.startY),le=$.isDragging,A=le&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),q=_r(X);!A&&H&&($._vx.reset(),$._vy.reset(),u&&Ce&&Je.delayedCall(.08,function(){if(Dr()-fi>300&&!X.defaultPrevented){if(X.target.click)X.target.click();else if(Ee.createEvent){var F=Ee.createEvent("MouseEvents");F.initMouseEvent("click",!0,!0,Lt,1,q.screenX,q.screenY,q.clientX,q.clientY,!1,!1,!1,!1,0,null),X.target.dispatchEvent(F)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,h&&le&&!J&&ot.restart(!0),lt&&pi(),v&&le&&v($),x&&x($,A)}},Gi=function(H){return H.touches&&H.touches.length>1&&($.isGesturing=!0)&&Y(H,$.isDragging)},Wt=function(){return($.isGesturing=!1)||y($)},Yt=function(H){if(!De(H)){var le=$e(),A=hi();kn((le-$i)*we,(A-Yi)*we,1),$i=le,Yi=A,h&&ot.restart(!0)}},Xt=function(H){if(!De(H)){H=_r(H,u),K&&(Oe=!0);var le=(H.deltaMode===1?l:H.deltaMode===2?Lt.innerHeight:1)*g;kn(H.deltaX*le,H.deltaY*le,0),h&&!J&&ot.restart(!0)}},Ki=function(H){if(!De(H)){var le=H.clientX,A=H.clientY,q=le-$.x,F=A-$.y;$.x=le,$.y=A,ae=!0,h&&ot.restart(!0),(q||F)&&Tn(q,F)}},On=function(H){$.event=H,U($)},gi=function(H){$.event=H,I($)},ur=function(H){return De(H)||_r(H,u)&&ue($)};ot=$._dc=Je.delayedCall(d||.25,hs).pause(),$.deltaX=$.deltaY=0,$._vx=_o(0,50,!0),$._vy=_o(0,50,!0),$.scrollX=$e,$.scrollY=hi,$.isDragging=$.isGesturing=$.isPressed=!1,xd(this),$.enable=function(X){return $.isEnabled||(ut(Pi?Ee:o,"scroll",mo),a.indexOf("scroll")>=0&&ut(Pi?Ee:o,"scroll",Yt,Si,Ue),a.indexOf("wheel")>=0&&ut(o,"wheel",Xt,Si,Ue),(a.indexOf("touch")>=0&&bd||a.indexOf("pointer")>=0)&&(ut(o,Kt[0],Xi,Si,Ue),ut(Ee,Kt[2],ne),ut(Ee,Kt[3],ne),Ce&&ut(o,"click",cr,!0,!0),ue&&ut(o,"click",ur),Y&&ut(Ee,"gesturestart",Gi),y&&ut(Ee,"gestureend",Wt),U&&ut(o,nn+"enter",On),I&&ut(o,nn+"leave",gi),N&&ut(o,nn+"move",Ki)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=ae=lt=!1,$._vx.reset(),$._vy.reset(),$i=$e(),Yi=hi(),X&&X.type&&Xi(X),Te&&Te($)),$},$.disable=function(){$.isEnabled&&(Hn.filter(function(X){return X!==$&&Rr(X.target)}).length||ct(Pi?Ee:o,"scroll",mo),$.isPressed&&($._vx.reset(),$._vy.reset(),ct(J?o:Ee,Kt[1],ki,!0)),ct(Pi?Ee:o,"scroll",Yt,Ue),ct(o,"wheel",Xt,Ue),ct(o,Kt[0],Xi,Ue),ct(Ee,Kt[2],ne),ct(Ee,Kt[3],ne),ct(o,"click",cr,!0),ct(o,"click",ur),ct(Ee,"gesturestart",Gi),ct(Ee,"gestureend",Wt),ct(o,nn+"enter",On),ct(o,nn+"leave",gi),ct(o,nn+"move",Ki),$.isEnabled=$.isPressed=$.isDragging=!1,ge&&ge($))},$.kill=$.revert=function(){$.disable();var X=Hn.indexOf($);X>=0&&Hn.splice(X,1),bi===$&&(bi=0)},Hn.push($),J&&Rr(o)&&(bi=$),$.enable(p)},em(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();ze.version="3.14.2";ze.create=function(s){return new ze(s)};ze.register=$d;ze.getAll=function(){return Hn.slice()};ze.getById=function(s){return Hn.filter(function(e){return e.vars.id===s})[0]};wd()&&Je.registerPlugin(ze);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var z,In,ee,pe,Et,ce,fl,aa,is,jr,wr,ws,it,wa,vo,ht,Oc,Ec,Nn,Pd,Ua,kd,dt,bo,Td,Od,Ai,yo,pl,Yn,gl,Ir,xo,Ha,Cs=1,nt=Date.now,Va=nt(),Bt=0,Cr=0,Ac=function(e,t,i){var n=Tt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},Lc=function(e,t){return t&&(!Tt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},nm=function s(){return Cr&&requestAnimationFrame(s)},Mc=function(){return wa=1},zc=function(){return wa=0},ti=function(e){return e},Sr=function(e){return Math.round(e*1e5)/1e5||0},Ed=function(){return typeof window<"u"},Ad=function(){return z||Ed()&&(z=window.gsap)&&z.registerPlugin&&z},bn=function(e){return!!~fl.indexOf(e)},Ld=function(e){return(e==="Height"?gl:ee["inner"+e])||Et["client"+e]||ce["client"+e]},Md=function(e){return Ui(e,"getBoundingClientRect")||(bn(e)?function(){return Vs.width=ee.innerWidth,Vs.height=gl,Vs}:function(){return vi(e)})},rm=function(e,t,i){var n=i.d,r=i.d2,a=i.a;return(a=Ui(e,"getBoundingClientRect"))?function(){return a()[n]}:function(){return(t?Ld(r):e["client"+r])||0}},sm=function(e,t){return!t||~oi.indexOf(e)?Md(e):function(){return Vs}},si=function(e,t){var i=t.s,n=t.d2,r=t.d,a=t.a;return Math.max(0,(i="scroll"+n)&&(a=Ui(e,i))?a()-Md(e)()[r]:bn(e)?(Et[i]||ce[i])-Ld(n):e[i]-e["offset"+n])},Ss=function(e,t){for(var i=0;i<Nn.length;i+=3)(!t||~t.indexOf(Nn[i+1]))&&e(Nn[i],Nn[i+1],Nn[i+2])},Tt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},$r=function(e){return typeof e=="number"},rn=function(e){return typeof e=="object"},vr=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ba=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Dn=Math.abs,zd="left",Dd="top",ml="right",_l="bottom",pn="width",gn="height",Nr="Right",Fr="Left",Ur="Top",Hr="Bottom",Re="padding",Ft="margin",ir="Width",vl="Height",Ne="px",Ut=function(e){return ee.getComputedStyle(e)},am=function(e){var t=Ut(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Dc=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},vi=function(e,t){var i=t&&Ut(e)[vo]!=="matrix(1, 0, 0, 1, 0, 0)"&&z.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return i&&i.progress(0).kill(),n},oa=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Rd=function(e){var t=[],i=e.labels,n=e.duration(),r;for(r in i)t.push(i[r]/n);return t},om=function(e){return function(t){return z.utils.snap(Rd(e),t)}},bl=function(e){var t=z.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,r){return n-r});return i?function(n,r,a){a===void 0&&(a=.001);var o;if(!r)return t(n);if(r>0){for(n-=a,o=0;o<i.length;o++)if(i[o]>=n)return i[o];return i[o-1]}else for(o=i.length,n+=a;o--;)if(i[o]<=n)return i[o];return i[0]}:function(n,r,a){a===void 0&&(a=.001);var o=t(n);return!r||Math.abs(o-n)<a||o-n<0==r<0?o:t(r<0?n-e:n+e)}},lm=function(e){return function(t,i){return bl(Rd(e))(t,i.direction)}},$s=function(e,t,i,n){return i.split(",").forEach(function(r){return e(t,r,n)})},We=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:!n,capture:!!r})},qe=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Ps=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Rc={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ks={toggleActions:"play",anticipatePin:0},la={top:0,left:0,center:.5,bottom:1,right:1},Ns=function(e,t){if(Tt(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in la?la[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ts=function(e,t,i,n,r,a,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,d=r.indent,f=r.fontWeight,g=pe.createElement("div"),p=bn(i)||Ui(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,v=p?ce:i,b=e.indexOf("start")!==-1,w=b?c:u,x="border-color:"+w+";font-size:"+h+";color:"+w+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((_||l)&&p?"fixed;":"absolute;"),(_||l||!p)&&(x+=(n===Fe?ml:_l)+":"+(a+parseFloat(d))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,v.children[0]?v.insertBefore(g,v.children[0]):v.appendChild(g),g._offset=g["offset"+n.op.d2],Fs(g,0,n,b),g},Fs=function(e,t,i,n){var r={display:"block"},a=i[n?"os2":"p2"],o=i[n?"p2":"os2"];e._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+a+ir]=1,r["border"+o+ir]=0,r[i.p]=t+"px",z.set(e,r)},Z=[],wo={},ns,jc=function(){return nt()-Bt>34&&(ns||(ns=requestAnimationFrame(xi)))},Rn=function(){(!dt||!dt.isPressed||dt.startX>ce.clientWidth)&&(te.cache++,dt?ns||(ns=requestAnimationFrame(xi)):xi(),Bt||xn("scrollStart"),Bt=nt())},qa=function(){Od=ee.innerWidth,Td=ee.innerHeight},Pr=function(e){te.cache++,(e===!0||!it&&!kd&&!pe.fullscreenElement&&!pe.webkitFullscreenElement&&(!bo||Od!==ee.innerWidth||Math.abs(ee.innerHeight-Td)>ee.innerHeight*.25))&&aa.restart(!0)},yn={},cm=[],jd=function s(){return qe(Q,"scrollEnd",s)||ln(!0)},xn=function(e){return yn[e]&&yn[e].map(function(t){return t()})||cm},kt=[],Id=function(e){for(var t=0;t<kt.length;t+=5)(!e||kt[t+4]&&kt[t+4].query===e)&&(kt[t].style.cssText=kt[t+1],kt[t].getBBox&&kt[t].setAttribute("transform",kt[t+2]||""),kt[t+3].uncache=1)},Nd=function(){return te.forEach(function(e){return st(e)&&++e.cacheID&&(e.rec=e())})},yl=function(e,t){var i;for(ht=0;ht<Z.length;ht++)i=Z[ht],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Ir=!0,t&&Id(t),t||xn("revert")},Fd=function(e,t){te.cache++,(t||!ft)&&te.forEach(function(i){return st(i)&&i.cacheID++&&(i.rec=0)}),Tt(e)&&(ee.history.scrollRestoration=pl=e)},ft,mn=0,Ic,um=function(){if(Ic!==mn){var e=Ic=mn;requestAnimationFrame(function(){return e===mn&&ln(!0)})}},Ud=function(){ce.appendChild(Yn),gl=!dt&&Yn.offsetHeight||ee.innerHeight,ce.removeChild(Yn)},Nc=function(e){return is(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ln=function(e,t){if(Et=pe.documentElement,ce=pe.body,fl=[ee,pe,Et,ce],Bt&&!e&&!Ir){We(Q,"scrollEnd",jd);return}Ud(),ft=Q.isRefreshing=!0,Ir||Nd();var i=xn("refreshInit");Pd&&Q.sort(),t||yl(),te.forEach(function(n){st(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Z.slice(0).forEach(function(n){return n.refresh()}),Ir=!1,Z.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",a=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-a),n.refresh()}}),xo=1,Nc(!0),Z.forEach(function(n){var r=si(n.scroller,n._dir),a=n.vars.end==="max"||n._endClamp&&n.end>r,o=n._startClamp&&n.start>=r;(a||o)&&n.setPositions(o?r-1:n.start,a?Math.max(o?r:n.start+1,r):n.end,!0)}),Nc(!1),xo=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),te.forEach(function(n){st(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Fd(pl,1),aa.pause(),mn++,ft=2,xi(2),Z.forEach(function(n){return st(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ft=Q.isRefreshing=!1,xn("refresh")},Co=0,Us=1,Vr,xi=function(e){if(e===2||!ft&&!Ir){Q.isUpdating=!0,Vr&&Vr.update(0);var t=Z.length,i=nt(),n=i-Va>=50,r=t&&Z[0].scroll();if(Us=Co>r?-1:1,ft||(Co=r),n&&(Bt&&!wa&&i-Bt>200&&(Bt=0,xn("scrollEnd")),wr=Va,Va=i),Us<0){for(ht=t;ht-- >0;)Z[ht]&&Z[ht].update(0,n);Us=1}else for(ht=0;ht<t;ht++)Z[ht]&&Z[ht].update(0,n);Q.isUpdating=!1}ns=0},So=[zd,Dd,_l,ml,Ft+Hr,Ft+Nr,Ft+Ur,Ft+Fr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Hs=So.concat([pn,gn,"boxSizing","max"+ir,"max"+vl,"position",Ft,Re,Re+Ur,Re+Nr,Re+Hr,Re+Fr]),dm=function(e,t,i){Xn(i);var n=e._gsap;if(n.spacerIsNative)Xn(n.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Wa=function(e,t,i,n){if(!e._gsap.swappedIn){for(var r=So.length,a=t.style,o=e.style,l;r--;)l=So[r],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[_l]=o[ml]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[pn]=oa(e,gt)+Ne,a[gn]=oa(e,Fe)+Ne,a[Re]=o[Ft]=o[Dd]=o[zd]="0",Xn(n),o[pn]=o["max"+ir]=i[pn],o[gn]=o["max"+vl]=i[gn],o[Re]=i[Re],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},hm=/([A-Z])/g,Xn=function(e){if(e){var t=e.t.style,i=e.length,n=0,r,a;for((e.t._gsap||z.core.getCache(e.t)).uncache=1;n<i;n+=2)a=e[n+1],r=e[n],a?t[r]=a:t[r]&&t.removeProperty(r.replace(hm,"-$1").toLowerCase())}},Os=function(e){for(var t=Hs.length,i=e.style,n=[],r=0;r<t;r++)n.push(Hs[r],i[Hs[r]]);return n.t=e,n},fm=function(e,t,i){for(var n=[],r=e.length,a=i?8:0,o;a<r;a+=2)o=e[a],n.push(o,o in t?t[o]:e[a+1]);return n.t=e.t,n},Vs={left:0,top:0},Fc=function(e,t,i,n,r,a,o,l,c,u,h,d,f,g){st(e)&&(e=e(l)),Tt(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Ns("0"+e.substr(3),i):0));var p=f?f.time():0,_,v,b;if(f&&f.seek(0),isNaN(e)||(e=+e),$r(e))f&&(e=z.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Fs(o,i,n,!0);else{st(t)&&(t=t(l));var w=(e||"0").split(" "),x,S,P,C;b=_t(t,l)||ce,x=vi(b)||{},(!x||!x.left&&!x.top)&&Ut(b).display==="none"&&(C=b.style.display,b.style.display="block",x=vi(b),C?b.style.display=C:b.style.removeProperty("display")),S=Ns(w[0],x[n.d]),P=Ns(w[1]||"0",i),e=x[n.p]-c[n.p]-u+S+r-P,o&&Fs(o,P,n,i-P<20||o._isStart&&P>20),i-=i-P}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var T=e+i,k=a._isStart;_="scroll"+n.d2,Fs(a,T,n,k&&T>20||!k&&(h?Math.max(ce[_],Et[_]):a.parentNode[_])<=T+1),h&&(c=vi(o),h&&(a.style[n.op.p]=c[n.op.p]-n.op.m-a._offset+Ne))}return f&&b&&(_=vi(b),f.seek(d),v=vi(b),f._caScrollDist=_[n.p]-v[n.p],e=e/f._caScrollDist*d),f&&f.seek(p),f?e:Math.round(e)},pm=/(webkit|moz|length|cssText|inset)/i,Uc=function(e,t,i,n){if(e.parentNode!==t){var r=e.style,a,o;if(t===ce){e._stOrig=r.cssText,o=Ut(e);for(a in o)!+a&&!pm.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=i,r.left=n}else r.cssText=e._stOrig;z.core.getCache(e).uncache=1,t.appendChild(e)}},Hd=function(e,t,i){var n=t,r=n;return function(a){var o=Math.round(e());return o!==n&&o!==r&&Math.abs(o-n)>3&&Math.abs(o-r)>3&&(a=o,i&&i()),r=n,n=Math.round(a),n}},Es=function(e,t,i){var n={};n[t.p]="+="+i,z.set(e,n)},Hc=function(e,t){var i=qi(e,t),n="_scroll"+t.p2,r=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,g={};c=c||i();var p=Hd(i,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[n]=o,l.inherit=!1,l.modifiers=g,g[n]=function(){return p(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){te.cache++,a.tween&&xi()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=z.to(e,l),d};return e[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},We(e,"wheel",i.wheelHandler),Q.isTouch&&We(e,"touchmove",i.wheelHandler),r},Q=(function(){function s(t,i){In||s.register(z)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yo(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Cr){this.update=this.refresh=this.kill=ti;return}i=Dc(Tt(i)||$r(i)||i.nodeType?{trigger:i}:i,ks);var r=i,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,d=r.trigger,f=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,_=r.anticipatePin,v=r.onScrubComplete,b=r.onSnapComplete,w=r.once,x=r.snap,S=r.pinReparent,P=r.pinSpacer,C=r.containerAnimation,T=r.fastScrollEnd,k=r.preventOverlaps,O=i.horizontal||i.containerAnimation&&i.horizontal!==!1?gt:Fe,M=!h&&h!==0,E=_t(i.scroller||ee),V=z.core.getCache(E),U=bn(E),I=("pinType"in i?i.pinType:Ui(E,"pinType")||U&&"fixed")==="fixed",N=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],j=M&&i.toggleActions.split(" "),J="markers"in i?i.markers:ks.markers,Y=U?0:parseFloat(Ut(E)["border"+O.p2+ir])||0,y=this,K=i.onRefreshInit&&function(){return i.onRefreshInit(y)},Te=rm(E,U,O),ge=sm(E,U),ue=0,we=0,Ue=0,Ce=qi(E,O),Xe,He,Se,ot,lt,ae,Oe,mt,St,$,$t,di,Si,$e,hi,$i,Yi,Ve,Pi,Ee,qt,It,fi,cr,De,hs,pi,kn,Tn,ki,Xi,ne,Gi,Wt,Yt,Xt,Ki,On,gi;if(y._startClamp=y._endClamp=!1,y._dir=O,_*=45,y.scroller=E,y.scroll=C?C.time.bind(C):Ce,ot=Ce(),y.vars=i,n=n||i.animation,"refreshPriority"in i&&(Pd=1,i.refreshPriority===-9999&&(Vr=y)),V.tweenScroll=V.tweenScroll||{top:Hc(E,Fe),left:Hc(E,gt)},y.tweenTo=Xe=V.tweenScroll[O.p],y.scrubDuration=function(A){Gi=$r(A)&&A,Gi?ne?ne.duration(A):ne=z.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Gi,paused:!0,onComplete:function(){return v&&v(y)}}):(ne&&ne.progress(1).kill(),ne=0)},n&&(n.vars.lazy=!1,n._initted&&!y.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),y.animation=n.pause(),n.scrollTrigger=y,y.scrubDuration(h),ki=0,l||(l=n.vars.id)),x&&((!rn(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ce.style&&z.set(U?[ce,Et]:E,{scrollBehavior:"auto"}),te.forEach(function(A){return st(A)&&A.target===(U?pe.scrollingElement||Et:E)&&(A.smooth=!1)}),Se=st(x.snapTo)?x.snapTo:x.snapTo==="labels"?om(n):x.snapTo==="labelsDirectional"?lm(n):x.directional!==!1?function(A,q){return bl(x.snapTo)(A,nt()-we<500?0:q.direction)}:z.utils.snap(x.snapTo),Wt=x.duration||{min:.1,max:2},Wt=rn(Wt)?jr(Wt.min,Wt.max):jr(Wt,Wt),Yt=z.delayedCall(x.delay||Gi/2||.1,function(){var A=Ce(),q=nt()-we<500,F=Xe.tween;if((q||Math.abs(y.getVelocity())<10)&&!F&&!wa&&ue!==A){var W=(A-ae)/$e,Be=n&&!M?n.totalProgress():W,re=q?0:(Be-Xi)/(nt()-wr)*1e3||0,Ae=z.utils.clamp(-W,1-W,Dn(re/2)*re/.185),Qe=W+(x.inertia===!1?0:Ae),Pe,me,de=x,Gt=de.onStart,ve=de.onInterrupt,Pt=de.onComplete;if(Pe=Se(Qe,y),$r(Pe)||(Pe=Qe),me=Math.max(0,Math.round(ae+Pe*$e)),A<=Oe&&A>=ae&&me!==A){if(F&&!F._initted&&F.data<=Dn(me-A))return;x.inertia===!1&&(Ae=Pe-W),Xe(me,{duration:Wt(Dn(Math.max(Dn(Qe-Be),Dn(Pe-Be))*.185/re/.05||0)),ease:x.ease||"power3",data:Dn(me-A),onInterrupt:function(){return Yt.restart(!0)&&ve&&ve(y)},onComplete:function(){y.update(),ue=Ce(),n&&!M&&(ne?ne.resetTo("totalProgress",Pe,n._tTime/n._tDur):n.progress(Pe)),ki=Xi=n&&!M?n.totalProgress():y.progress,b&&b(y),Pt&&Pt(y)}},A,Ae*$e,me-A-Ae*$e),Gt&&Gt(y,Xe.tween)}}else y.isActive&&ue!==A&&Yt.restart(!0)}).pause()),l&&(wo[l]=y),d=y.trigger=_t(d||f!==!0&&f),gi=d&&d._gsap&&d._gsap.stRevert,gi&&(gi=gi(y)),f=f===!0?d:_t(f),Tt(o)&&(o={targets:d,className:o}),f&&(g===!1||g===Ft||(g=!g&&f.parentNode&&f.parentNode.style&&Ut(f.parentNode).display==="flex"?!1:Re),y.pin=f,He=z.core.getCache(f),He.spacer?hi=He.pinState:(P&&(P=_t(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),He.spacerIsNative=!!P,P&&(He.spacerState=Os(P))),He.spacer=Ve=P||pe.createElement("div"),Ve.classList.add("pin-spacer"),l&&Ve.classList.add("pin-spacer-"+l),He.pinState=hi=Os(f)),i.force3D!==!1&&z.set(f,{force3D:!0}),y.spacer=Ve=He.spacer,Tn=Ut(f),cr=Tn[g+O.os2],Ee=z.getProperty(f),qt=z.quickSetter(f,O.a,Ne),Wa(f,Ve,Tn),Yi=Os(f)),J){di=rn(J)?Dc(J,Rc):Rc,$=Ts("scroller-start",l,E,O,di,0),$t=Ts("scroller-end",l,E,O,di,0,$),Pi=$["offset"+O.op.d2];var ur=_t(Ui(E,"content")||E);mt=this.markerStart=Ts("start",l,ur,O,di,Pi,0,C),St=this.markerEnd=Ts("end",l,ur,O,di,Pi,0,C),C&&(On=z.quickSetter([mt,St],O.a,Ne)),!I&&!(oi.length&&Ui(E,"fixedMarkers")===!0)&&(am(U?ce:E),z.set([$,$t],{force3D:!0}),hs=z.quickSetter($,O.a,Ne),kn=z.quickSetter($t,O.a,Ne))}if(C){var X=C.vars.onUpdate,H=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){y.update(0,0,1),X&&X.apply(C,H||[])})}if(y.previous=function(){return Z[Z.indexOf(y)-1]},y.next=function(){return Z[Z.indexOf(y)+1]},y.revert=function(A,q){if(!q)return y.kill(!0);var F=A!==!1||!y.enabled,W=it;F!==y.isReverted&&(F&&(Xt=Math.max(Ce(),y.scroll.rec||0),Ue=y.progress,Ki=n&&n.progress()),mt&&[mt,St,$,$t].forEach(function(Be){return Be.style.display=F?"none":"block"}),F&&(it=y,y.update(F)),f&&(!S||!y.isActive)&&(F?dm(f,Ve,hi):Wa(f,Ve,Ut(f),De)),F||y.update(F),it=W,y.isReverted=F)},y.refresh=function(A,q,F,W){if(!((it||!y.enabled)&&!q)){if(f&&A&&Bt){We(s,"scrollEnd",jd);return}!ft&&K&&K(y),it=y,Xe.tween&&!F&&(Xe.tween.kill(),Xe.tween=0),ne&&ne.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Ti){return Ti.vars.immediateRender&&Ti.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),y.isReverted||y.revert(!0,!0),y._subPinOffset=!1;var Be=Te(),re=ge(),Ae=C?C.duration():si(E,O),Qe=$e<=.01||!$e,Pe=0,me=W||0,de=rn(F)?F.end:i.end,Gt=i.endTrigger||d,ve=rn(F)?F.start:i.start||(i.start===0||!d?0:f?"0 0":"0 100%"),Pt=y.pinnedContainer=i.pinnedContainer&&_t(i.pinnedContainer,y),Jt=d&&Math.max(0,Z.indexOf(y))||0,Ge=Jt,Ke,et,Ji,fs,tt,Ie,Zt,ka,Ol,dr,Qt,hr,ps;for(J&&rn(F)&&(hr=z.getProperty($,O.p),ps=z.getProperty($t,O.p));Ge-- >0;)Ie=Z[Ge],Ie.end||Ie.refresh(0,1)||(it=y),Zt=Ie.pin,Zt&&(Zt===d||Zt===f||Zt===Pt)&&!Ie.isReverted&&(dr||(dr=[]),dr.unshift(Ie),Ie.revert(!0,!0)),Ie!==Z[Ge]&&(Jt--,Ge--);for(st(ve)&&(ve=ve(y)),ve=Ac(ve,"start",y),ae=Fc(ve,d,Be,O,Ce(),mt,$,y,re,Y,I,Ae,C,y._startClamp&&"_startClamp")||(f?-.001:0),st(de)&&(de=de(y)),Tt(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(Tt(ve)?ve.split(" ")[0]:"")+de:(Pe=Ns(de.substr(2),Be),de=Tt(ve)?ve:(C?z.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,ae):ae)+Pe,Gt=d)),de=Ac(de,"end",y),Oe=Math.max(ae,Fc(de||(Gt?"100% 0":Ae),Gt,Be,O,Ce()+Pe,St,$t,y,re,Y,I,Ae,C,y._endClamp&&"_endClamp"))||-.001,Pe=0,Ge=Jt;Ge--;)Ie=Z[Ge]||{},Zt=Ie.pin,Zt&&Ie.start-Ie._pinPush<=ae&&!C&&Ie.end>0&&(Ke=Ie.end-(y._startClamp?Math.max(0,Ie.start):Ie.start),(Zt===d&&Ie.start-Ie._pinPush<ae||Zt===Pt)&&isNaN(ve)&&(Pe+=Ke*(1-Ie.progress)),Zt===f&&(me+=Ke));if(ae+=Pe,Oe+=Pe,y._startClamp&&(y._startClamp+=Pe),y._endClamp&&!ft&&(y._endClamp=Oe||-.001,Oe=Math.min(Oe,si(E,O))),$e=Oe-ae||(ae-=.01)&&.001,Qe&&(Ue=z.utils.clamp(0,1,z.utils.normalize(ae,Oe,Xt))),y._pinPush=me,mt&&Pe&&(Ke={},Ke[O.a]="+="+Pe,Pt&&(Ke[O.p]="-="+Ce()),z.set([mt,St],Ke)),f&&!(xo&&y.end>=si(E,O)))Ke=Ut(f),fs=O===Fe,Ji=Ce(),It=parseFloat(Ee(O.a))+me,!Ae&&Oe>1&&(Qt=(U?pe.scrollingElement||Et:E).style,Qt={style:Qt,value:Qt["overflow"+O.a.toUpperCase()]},U&&Ut(ce)["overflow"+O.a.toUpperCase()]!=="scroll"&&(Qt.style["overflow"+O.a.toUpperCase()]="scroll")),Wa(f,Ve,Ke),Yi=Os(f),et=vi(f,!0),ka=I&&qi(E,fs?gt:Fe)(),g?(De=[g+O.os2,$e+me+Ne],De.t=Ve,Ge=g===Re?oa(f,O)+$e+me:0,Ge&&(De.push(O.d,Ge+Ne),Ve.style.flexBasis!=="auto"&&(Ve.style.flexBasis=Ge+Ne)),Xn(De),Pt&&Z.forEach(function(Ti){Ti.pin===Pt&&Ti.vars.pinSpacing!==!1&&(Ti._subPinOffset=!0)}),I&&Ce(Xt)):(Ge=oa(f,O),Ge&&Ve.style.flexBasis!=="auto"&&(Ve.style.flexBasis=Ge+Ne)),I&&(tt={top:et.top+(fs?Ji-ae:ka)+Ne,left:et.left+(fs?ka:Ji-ae)+Ne,boxSizing:"border-box",position:"fixed"},tt[pn]=tt["max"+ir]=Math.ceil(et.width)+Ne,tt[gn]=tt["max"+vl]=Math.ceil(et.height)+Ne,tt[Ft]=tt[Ft+Ur]=tt[Ft+Nr]=tt[Ft+Hr]=tt[Ft+Fr]="0",tt[Re]=Ke[Re],tt[Re+Ur]=Ke[Re+Ur],tt[Re+Nr]=Ke[Re+Nr],tt[Re+Hr]=Ke[Re+Hr],tt[Re+Fr]=Ke[Re+Fr],$i=fm(hi,tt,S),ft&&Ce(0)),n?(Ol=n._initted,Ua(1),n.render(n.duration(),!0,!0),fi=Ee(O.a)-It+$e+me,pi=Math.abs($e-fi)>1,I&&pi&&$i.splice($i.length-2,2),n.render(0,!0,!0),Ol||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Ua(0)):fi=$e,Qt&&(Qt.value?Qt.style["overflow"+O.a.toUpperCase()]=Qt.value:Qt.style.removeProperty("overflow-"+O.a));else if(d&&Ce()&&!C)for(et=d.parentNode;et&&et!==ce;)et._pinOffset&&(ae-=et._pinOffset,Oe-=et._pinOffset),et=et.parentNode;dr&&dr.forEach(function(Ti){return Ti.revert(!1,!0)}),y.start=ae,y.end=Oe,ot=lt=ft?Xt:Ce(),!C&&!ft&&(ot<Xt&&Ce(Xt),y.scroll.rec=0),y.revert(!1,!0),we=nt(),Yt&&(ue=-1,Yt.restart(!0)),it=0,n&&M&&(n._initted||Ki)&&n.progress()!==Ki&&n.progress(Ki||0,!0).render(n.time(),!0,!0),(Qe||Ue!==y.progress||C||p||n&&!n._initted)&&(n&&!M&&(n._initted||Ue||n.vars.immediateRender!==!1)&&n.totalProgress(C&&ae<-.001&&!Ue?z.utils.normalize(ae,Oe,0):Ue,!0),y.progress=Qe||(ot-ae)/$e===Ue?0:Ue),f&&g&&(Ve._pinOffset=Math.round(y.progress*fi)),ne&&ne.invalidate(),isNaN(hr)||(hr-=z.getProperty($,O.p),ps-=z.getProperty($t,O.p),Es($,O,hr),Es(mt,O,hr-(W||0)),Es($t,O,ps),Es(St,O,ps-(W||0))),Qe&&!ft&&y.update(),u&&!ft&&!Si&&(Si=!0,u(y),Si=!1)}},y.getVelocity=function(){return(Ce()-lt)/(nt()-wr)*1e3||0},y.endAnimation=function(){vr(y.callbackAnimation),n&&(ne?ne.progress(1):n.paused()?M||vr(n,y.direction<0,1):vr(n,n.reversed()))},y.labelToScroll=function(A){return n&&n.labels&&(ae||y.refresh()||ae)+n.labels[A]/n.duration()*$e||0},y.getTrailing=function(A){var q=Z.indexOf(y),F=y.direction>0?Z.slice(0,q).reverse():Z.slice(q+1);return(Tt(A)?F.filter(function(W){return W.vars.preventOverlaps===A}):F).filter(function(W){return y.direction>0?W.end<=ae:W.start>=Oe})},y.update=function(A,q,F){if(!(C&&!F&&!A)){var W=ft===!0?Xt:y.scroll(),Be=A?0:(W-ae)/$e,re=Be<0?0:Be>1?1:Be||0,Ae=y.progress,Qe,Pe,me,de,Gt,ve,Pt,Jt;if(q&&(lt=ot,ot=C?Ce():W,x&&(Xi=ki,ki=n&&!M?n.totalProgress():re)),_&&f&&!it&&!Cs&&Bt&&(!re&&ae<W+(W-lt)/(nt()-wr)*_?re=1e-4:re===1&&Oe>W+(W-lt)/(nt()-wr)*_&&(re=.9999)),re!==Ae&&y.enabled){if(Qe=y.isActive=!!re&&re<1,Pe=!!Ae&&Ae<1,ve=Qe!==Pe,Gt=ve||!!re!=!!Ae,y.direction=re>Ae?1:-1,y.progress=re,Gt&&!it&&(me=re&&!Ae?0:re===1?1:Ae===1?2:3,M&&(de=!ve&&j[me+1]!=="none"&&j[me+1]||j[me],Jt=n&&(de==="complete"||de==="reset"||de in n))),k&&(ve||Jt)&&(Jt||h||!n)&&(st(k)?k(y):y.getTrailing(k).forEach(function(Ji){return Ji.endAnimation()})),M||(ne&&!it&&!Cs?(ne._dp._time-ne._start!==ne._time&&ne.render(ne._dp._time-ne._start),ne.resetTo?ne.resetTo("totalProgress",re,n._tTime/n._tDur):(ne.vars.totalProgress=re,ne.invalidate().restart())):n&&n.totalProgress(re,!!(it&&(we||A)))),f){if(A&&g&&(Ve.style[g+O.os2]=cr),!I)qt(Sr(It+fi*re));else if(Gt){if(Pt=!A&&re>Ae&&Oe+1>W&&W+1>=si(E,O),S)if(!A&&(Qe||Pt)){var Ge=vi(f,!0),Ke=W-ae;Uc(f,ce,Ge.top+(O===Fe?Ke:0)+Ne,Ge.left+(O===Fe?0:Ke)+Ne)}else Uc(f,Ve);Xn(Qe||Pt?$i:Yi),pi&&re<1&&Qe||qt(It+(re===1&&!Pt?fi:0))}}x&&!Xe.tween&&!it&&!Cs&&Yt.restart(!0),o&&(ve||w&&re&&(re<1||!Ha))&&is(o.targets).forEach(function(Ji){return Ji.classList[Qe||w?"add":"remove"](o.className)}),a&&!M&&!A&&a(y),Gt&&!it?(M&&(Jt&&(de==="complete"?n.pause().totalProgress(1):de==="reset"?n.restart(!0).pause():de==="restart"?n.restart(!0):n[de]()),a&&a(y)),(ve||!Ha)&&(c&&ve&&Ba(y,c),N[me]&&Ba(y,N[me]),w&&(re===1?y.kill(!1,1):N[me]=0),ve||(me=re===1?1:3,N[me]&&Ba(y,N[me]))),T&&!Qe&&Math.abs(y.getVelocity())>($r(T)?T:2500)&&(vr(y.callbackAnimation),ne?ne.progress(1):vr(n,de==="reverse"?1:!re,1))):M&&a&&!it&&a(y)}if(kn){var et=C?W/C.duration()*(C._caScrollDist||0):W;hs(et+($._isFlipped?1:0)),kn(et)}On&&On(-W/C.duration()*(C._caScrollDist||0))}},y.enable=function(A,q){y.enabled||(y.enabled=!0,We(E,"resize",Pr),U||We(E,"scroll",Rn),K&&We(s,"refreshInit",K),A!==!1&&(y.progress=Ue=0,ot=lt=ue=Ce()),q!==!1&&y.refresh())},y.getTween=function(A){return A&&Xe?Xe.tween:ne},y.setPositions=function(A,q,F,W){if(C){var Be=C.scrollTrigger,re=C.duration(),Ae=Be.end-Be.start;A=Be.start+Ae*A/re,q=Be.start+Ae*q/re}y.refresh(!1,!1,{start:Lc(A,F&&!!y._startClamp),end:Lc(q,F&&!!y._endClamp)},W),y.update()},y.adjustPinSpacing=function(A){if(De&&A){var q=De.indexOf(O.d)+1;De[q]=parseFloat(De[q])+A+Ne,De[1]=parseFloat(De[1])+A+Ne,Xn(De)}},y.disable=function(A,q){if(A!==!1&&y.revert(!0,!0),y.enabled&&(y.enabled=y.isActive=!1,q||ne&&ne.pause(),Xt=0,He&&(He.uncache=1),K&&qe(s,"refreshInit",K),Yt&&(Yt.pause(),Xe.tween&&Xe.tween.kill()&&(Xe.tween=0)),!U)){for(var F=Z.length;F--;)if(Z[F].scroller===E&&Z[F]!==y)return;qe(E,"resize",Pr),U||qe(E,"scroll",Rn)}},y.kill=function(A,q){y.disable(A,q),ne&&!q&&ne.kill(),l&&delete wo[l];var F=Z.indexOf(y);F>=0&&Z.splice(F,1),F===ht&&Us>0&&ht--,F=0,Z.forEach(function(W){return W.scroller===y.scroller&&(F=1)}),F||ft||(y.scroll.rec=0),n&&(n.scrollTrigger=null,A&&n.revert({kill:!1}),q||n.kill()),mt&&[mt,St,$,$t].forEach(function(W){return W.parentNode&&W.parentNode.removeChild(W)}),Vr===y&&(Vr=0),f&&(He&&(He.uncache=1),F=0,Z.forEach(function(W){return W.pin===f&&F++}),F||(He.spacer=0)),i.onKill&&i.onKill(y)},Z.push(y),y.enable(!1,!1),gi&&gi(y),n&&n.add&&!$e){var le=y.update;y.update=function(){y.update=le,te.cache++,ae||Oe||y.refresh()},z.delayedCall(.01,y.update),$e=.01,ae=Oe=0}else y.refresh();f&&um()},s.register=function(i){return In||(z=i||Ad(),Ed()&&window.document&&s.enable(),In=Cr),In},s.defaults=function(i){if(i)for(var n in i)ks[n]=i[n];return ks},s.disable=function(i,n){Cr=0,Z.forEach(function(a){return a[n?"kill":"disable"](i)}),qe(ee,"wheel",Rn),qe(pe,"scroll",Rn),clearInterval(ws),qe(pe,"touchcancel",ti),qe(ce,"touchstart",ti),$s(qe,pe,"pointerdown,touchstart,mousedown",Mc),$s(qe,pe,"pointerup,touchend,mouseup",zc),aa.kill(),Ss(qe);for(var r=0;r<te.length;r+=3)Ps(qe,te[r],te[r+1]),Ps(qe,te[r],te[r+2])},s.enable=function(){if(ee=window,pe=document,Et=pe.documentElement,ce=pe.body,z&&(is=z.utils.toArray,jr=z.utils.clamp,yo=z.core.context||ti,Ua=z.core.suppressOverwrites||ti,pl=ee.history.scrollRestoration||"auto",Co=ee.pageYOffset||0,z.core.globals("ScrollTrigger",s),ce)){Cr=1,Yn=document.createElement("div"),Yn.style.height="100vh",Yn.style.position="absolute",Ud(),nm(),ze.register(z),s.isTouch=ze.isTouch,Ai=ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),bo=ze.isTouch===1,We(ee,"wheel",Rn),fl=[ee,pe,Et,ce],z.matchMedia?(s.matchMedia=function(c){var u=z.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},z.addEventListener("matchMediaInit",function(){Nd(),yl()}),z.addEventListener("matchMediaRevert",function(){return Id()}),z.addEventListener("matchMedia",function(){ln(0,1),xn("matchMedia")}),z.matchMedia().add("(orientation: portrait)",function(){return qa(),qa})):console.warn("Requires GSAP 3.11.0 or later"),qa(),We(pe,"scroll",Rn);var i=ce.hasAttribute("style"),n=ce.style,r=n.borderTopStyle,a=z.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=vi(ce),Fe.m=Math.round(o.top+Fe.sc())||0,gt.m=Math.round(o.left+gt.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(ce.setAttribute("style",""),ce.removeAttribute("style")),ws=setInterval(jc,250),z.delayedCall(.5,function(){return Cs=0}),We(pe,"touchcancel",ti),We(ce,"touchstart",ti),$s(We,pe,"pointerdown,touchstart,mousedown",Mc),$s(We,pe,"pointerup,touchend,mouseup",zc),vo=z.utils.checkPrefix("transform"),Hs.push(vo),In=nt(),aa=z.delayedCall(.2,ln).pause(),Nn=[pe,"visibilitychange",function(){var c=ee.innerWidth,u=ee.innerHeight;pe.hidden?(Oc=c,Ec=u):(Oc!==c||Ec!==u)&&Pr()},pe,"DOMContentLoaded",ln,ee,"load",ln,ee,"resize",Pr],Ss(We),Z.forEach(function(c){return c.enable(0,1)}),l=0;l<te.length;l+=3)Ps(qe,te[l],te[l+1]),Ps(qe,te[l],te[l+2])}},s.config=function(i){"limitCallbacks"in i&&(Ha=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(ws)||(ws=n)&&setInterval(jc,n),"ignoreMobileResize"in i&&(bo=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ss(qe)||Ss(We,i.autoRefreshEvents||"none"),kd=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=_t(i),a=te.indexOf(r),o=bn(r);~a&&te.splice(a,o?6:2),n&&(o?oi.unshift(ee,n,ce,n,Et,n):oi.unshift(r,n))},s.clearMatchMedia=function(i){Z.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var a=(Tt(i)?_t(i):i).getBoundingClientRect(),o=a[r?pn:gn]*n||0;return r?a.right-o>0&&a.left+o<ee.innerWidth:a.bottom-o>0&&a.top+o<ee.innerHeight},s.positionInViewport=function(i,n,r){Tt(i)&&(i=_t(i));var a=i.getBoundingClientRect(),o=a[r?pn:gn],l=n==null?o/2:n in la?la[n]*o:~n.indexOf("%")?parseFloat(n)*o/100:parseFloat(n)||0;return r?(a.left+l)/ee.innerWidth:(a.top+l)/ee.innerHeight},s.killAll=function(i){if(Z.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=yn.killAll||[];yn={},n.forEach(function(r){return r()})}},s})();Q.version="3.14.2";Q.saveStyles=function(s){return s?is(s).forEach(function(e){if(e&&e.style){var t=kt.indexOf(e);t>=0&&kt.splice(t,5),kt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),z.core.getCache(e),yo())}}):kt};Q.revert=function(s,e){return yl(!s,e)};Q.create=function(s,e){return new Q(s,e)};Q.refresh=function(s){return s?Pr(!0):(In||Q.register())&&ln(!0)};Q.update=function(s){return++te.cache&&xi(s===!0?2:0)};Q.clearScrollMemory=Fd;Q.maxScroll=function(s,e){return si(s,e?gt:Fe)};Q.getScrollFunc=function(s,e){return qi(_t(s),e?gt:Fe)};Q.getById=function(s){return wo[s]};Q.getAll=function(){return Z.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Q.isScrolling=function(){return!!Bt};Q.snapDirectional=bl;Q.addEventListener=function(s,e){var t=yn[s]||(yn[s]=[]);~t.indexOf(e)||t.push(e)};Q.removeEventListener=function(s,e){var t=yn[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Q.batch=function(s,e){var t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var h=[],d=[],f=z.delayedCall(n,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),r<=h.length&&f.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&st(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return st(r)&&(r=r(),We(Q,"refresh",function(){return r=e.batchMax()})),is(s).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(Q.create(c))}),t};var Vc=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},Ya=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(ze.isTouch?" pinch-zoom":""):"none",e===Et&&s(ce,t)},As={auto:1,scroll:1},gm=function(e){var t=e.event,i=e.target,n=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||z.core.getCache(r),o=nt(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==ce&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(As[(l=Ut(r)).overflowY]||As[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==i&&!bn(r)&&(As[(l=Ut(r)).overflowY]||As[l.overflowX]),a._isScrollT=o}(a._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Vd=function(e,t,i,n){return ze.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&gm,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&We(pe,ze.eventTypes[0],qc,!1,!0)},onDisable:function(){return qe(pe,ze.eventTypes[0],qc,!0)}})},mm=/(input|label|select|textarea)/i,Bc,qc=function(e){var t=mm.test(e.target.tagName);(t||Bc)&&(e._gsapAllow=!0,Bc=t)},_m=function(e){rn(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,l,c=_t(e.target)||Et,u=z.core.globals().ScrollSmoother,h=u&&u.get(),d=Ai&&(e.content&&_t(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=qi(c,Fe),g=qi(c,gt),p=1,_=(ze.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,v=0,b=st(n)?function(){return n(o)}:function(){return n||2.8},w,x,S=Vd(c,e.type,!0,r),P=function(){return x=!1},C=ti,T=ti,k=function(){l=si(c,Fe),T=jr(Ai?1:0,l),i&&(C=jr(0,si(c,gt))),w=mn},O=function(){d._gsap.y=Sr(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},M=function(){if(x){requestAnimationFrame(P);var J=Sr(o.deltaY/2),Y=T(f.v-J);if(d&&Y!==f.v+f.offset){f.offset=Y-f.v;var y=Sr((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+y+", 0, 1)",d._gsap.y=y+"px",f.cacheID=te.cache,xi()}return!0}f.offset&&O(),x=!0},E,V,U,I,N=function(){k(),E.isActive()&&E.vars.scrollY>l&&(f()>l?E.progress(1)&&f(l):E.resetTo("scrollY",l))};return d&&z.set(d,{y:"+=0"}),e.ignoreCheck=function(j){return Ai&&j.type==="touchmove"&&M()||p>1.05&&j.type!=="touchstart"||o.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){x=!1;var j=p;p=Sr((ee.visualViewport&&ee.visualViewport.scale||1)/_),E.pause(),j!==p&&Ya(c,p>1.01?!0:i?!1:"x"),V=g(),U=f(),k(),w=mn},e.onRelease=e.onGestureStart=function(j,J){if(f.offset&&O(),!J)I.restart(!0);else{te.cache++;var Y=b(),y,K;i&&(y=g(),K=y+Y*.05*-j.velocityX/.227,Y*=Vc(g,y,K,si(c,gt)),E.vars.scrollX=C(K)),y=f(),K=y+Y*.05*-j.velocityY/.227,Y*=Vc(f,y,K,si(c,Fe)),E.vars.scrollY=T(K),E.invalidate().duration(Y).play(.01),(Ai&&E.vars.scrollY>=l||y>=l-1)&&z.to({},{onUpdate:N,duration:Y})}a&&a(j)},e.onWheel=function(){E._ts&&E.pause(),nt()-v>1e3&&(w=0,v=nt())},e.onChange=function(j,J,Y,y,K){if(mn!==w&&k(),J&&i&&g(C(y[2]===J?V+(j.startX-j.x):g()+J-y[1])),Y){f.offset&&O();var Te=K[2]===Y,ge=Te?U+j.startY-j.y:f()+Y-K[1],ue=T(ge);Te&&ge!==ue&&(U+=ue-ge),f(ue)}(Y||J)&&xi()},e.onEnable=function(){Ya(c,i?!1:"x"),Q.addEventListener("refresh",N),We(ee,"resize",N),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){Ya(c,!0),qe(ee,"resize",N),Q.removeEventListener("refresh",N),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new ze(e),o.iOS=Ai,Ai&&!f()&&f(1),Ai&&z.ticker.add(ti),I=o._dc,E=z.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Hd(f,f(),function(){return E.pause()})},onUpdate:xi,onComplete:I.vars.onComplete}),o};Q.sort=function(s){if(st(s))return Z.sort(s);var e=ee.pageYOffset||0;return Q.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ee.innerHeight}),Z.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Q.observe=function(s){return new ze(s)};Q.normalizeScroll=function(s){if(typeof s>"u")return dt;if(s===!0&&dt)return dt.enable();if(s===!1){dt&&dt.kill(),dt=s;return}var e=s instanceof ze?s:_m(s);return dt&&dt.target===e.target&&dt.kill(),bn(e.target)&&(dt=e),e};Q.core={_getVelocityProp:_o,_inputObserver:Vd,_scrollers:te,_proxies:oi,bridge:{ss:function(){Bt||xn("scrollStart"),Bt=nt()},ref:function(){return it}}};Ad()&&z.registerPlugin(Q);/*!
 * DrawSVGPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ai,xl,ca,Bd,qd,Wc,$o,Wd,Yd=function(){return typeof window<"u"},Xd=function(){return ai||Yd()&&(ai=window.gsap)&&ai.registerPlugin&&ai},vm=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Xa={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},sn=function(e){return Math.round(e*1e4)/1e4},yi=function(e){return parseFloat(e)||0},Yc=function(e,t){var i=yi(e);return~e.indexOf("%")?i/100*t:i},Ls=function(e,t){return yi(e.getAttribute(t))},Bs=Math.sqrt,Xc=function(e,t,i,n,r,a){return Bs(Math.pow((yi(i)-yi(e))*r,2)+Math.pow((yi(n)-yi(t))*a,2))},Gc=function(e){return console.warn(e)},Gd=function(e){return e.getAttribute("vector-effect")==="non-scaling-stroke"},bm=1,ym=function(e,t,i){var n=e.indexOf(" "),r,a;return n<0?(r=i!==void 0?i+"":e,a=e):(r=e.substr(0,n),a=e.substr(n+1)),r=Yc(r,t),a=Yc(a,t),r>a?[a,r]:[r,a]},qs=function(e){if(e=xl(e)[0],!e)return 0;var t=e.tagName.toLowerCase(),i=e.style,n=1,r=1,a,o,l,c,u,h,d;Gd(e)&&(r=e.getScreenCTM(),n=Bs(r.a*r.a+r.b*r.b),r=Bs(r.d*r.d+r.c*r.c));try{o=e.getBBox()}catch{Gc("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var f=o||{x:0,y:0,width:0,height:0},g=f.x,p=f.y,_=f.width,v=f.height;if((!o||!_&&!v)&&Xa[t]&&(_=Ls(e,Xa[t][0]),v=Ls(e,Xa[t][1]),t!=="rect"&&t!=="line"&&(_*=2,v*=2),t==="line"&&(g=Ls(e,"x1"),p=Ls(e,"y1"),_=Math.abs(_-g),v=Math.abs(v-p))),t==="path")c=i.strokeDasharray,i.strokeDasharray="none",a=e.getTotalLength()||0,sn(n)!==sn(r)&&!Wc&&(Wc=1)&&Gc("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),a*=(n+r)/2,i.strokeDasharray=c;else if(t==="rect")a=_*2*n+v*2*r;else if(t==="line")a=Xc(g,p,g+_,p+v,n,r);else if(t==="polyline"||t==="polygon")for(l=e.getAttribute("points").match(vm)||[],t==="polygon"&&l.push(l[0],l[1]),a=0,u=2;u<l.length;u+=2)a+=Xc(l[u-2],l[u-1],l[u],l[u+1],n,r)||0;else(t==="circle"||t==="ellipse")&&(h=_/2*n,d=v/2*r,a=Math.PI*(3*(h+d)-Bs((3*h+d)*(h+3*d))));return a||0},Kc=function(e,t){if(e=xl(e)[0],!e)return[0,0];t||(t=qs(e)+1);var i=ca.getComputedStyle(e),n=i.strokeDasharray||"",r=yi(i.strokeDashoffset),a=n.indexOf(",");return a<0&&(a=n.indexOf(" ")),n=a<0?t:yi(n.substr(0,a)),n>t&&(n=t),[-r||0,n-r||0]},Jc=function(){Yd()&&(ca=window,qd=ai=Xd(),xl=ai.utils.toArray,$o=ai.core.getStyleSaver,Wd=ai.core.reverting||function(){},Bd=((ca.navigator||{}).userAgent||"").indexOf("Edge")!==-1)},Kd={version:"3.14.2",name:"drawSVG",register:function(e){ai=e,Jc()},init:function(e,t,i,n,r){if(!e.getBBox)return!1;qd||Jc();var a=qs(e),o,l,c;return this.styles=$o&&$o(e,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=i,this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?(t+"").indexOf(" ")===-1&&(t="0 "+t):t="0 0",o=Kc(e,a),l=ym(t,a,o[0]),this._length=sn(a),this._dash=sn(o[1]-o[0]),this._offset=sn(-o[0]),this._dashPT=this.add(this,"_dash",this._dash,sn(l[1]-l[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,sn(-l[0]),0,0,0,0,0,1),Bd&&(c=ca.getComputedStyle(e),c.strokeLinecap!==c.strokeLinejoin&&(l=yi(c.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",l,l+.01))),this._live=Gd(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),bm},render:function(e,t){if(t.tween._time||!Wd()){var i=t._pt,n=t._style,r,a,o,l;if(i){for(t._live&&(r=qs(t._target),r!==t._length&&(a=r/t._length,t._length=r,t._offsetPT&&(t._offsetPT.s*=a,t._offsetPT.c*=a),t._dashPT?(t._dashPT.s*=a,t._dashPT.c*=a):t._dash*=a));i;)i.r(e,i.d),i=i._next;o=t._dash||e&&e!==1&&1e-4||0,r=t._length-o+.1,l=t._offset,o&&l&&o+Math.abs(l%t._length)>t._length-.05&&(l+=l<0?.005:-.005)&&(r+=.005),n.strokeDashoffset=o?l:l+.001,n.strokeDasharray=r<.1?"none":o?o+"px,"+(t._nowrap?999999:r)+"px":"0px, 999999px"}}else t.styles.revert()},getLength:qs,getPosition:Kc};Xd()&&ai.registerPlugin(Kd);oe.registerPlugin(sr,Kd,Q);oe.defaults({duration:1,ease:sr.create("custom",".75,0,.5,1")});class xm{constructor(){this._dark=!0,this.listeners=new Set}get dark(){return this._dark}set dark(e){this._dark=e,document.documentElement.classList.toggle("dark",e),localStorage.setItem("theme",e?"dark":"light"),this.notifyListeners()}toggle(){this.dark=!this.dark}subscribe(e){this.listeners.add(e)}unsubscribe(e){this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>{e.requestUpdate()})}init(){const e=localStorage.getItem("theme");e&&(this._dark=e==="dark"),document.documentElement.classList.toggle("dark",this._dark)}}const br=new xm,ui=s=>class extends s{connectedCallback(){super.connectedCallback(),br.subscribe(this)}disconnectedCallback(){super.disconnectedCallback(),br.unsubscribe(this)}get dark(){return br.dark}set dark(e){br.dark=e}toggleTheme(){br.toggle()}};var wm=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,Jd=(s,e,t,i)=>{for(var n=i>1?void 0:i?Cm(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&wm(e,t,n),n};let Po=class extends ui(G){constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language,this.requestUpdate()}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){}render(){return D`
      <section id="section-about">
        <div class="container">
          <div
            class="grid items-baseline gap-y-8 px-5 pt-16 xl:grid-cols-3 xl:px-20 xl:pt-24 2xl:px-32 2xl:pt-64"
          >
            <h2
              class="text-[2.5rem] leading-none tracking-tighter text-pretty text-zinc-50 xl:text-[3rem] 2xl:text-[4rem]"
            >
              ${m.t("about.title")}
            </h2>
            <div
              class="col-span-2 flex flex-col gap-8 leading-loose xl:text-[1.125rem]"
            >
              <div>
                <h3
                  class="text-brand-400 mb-1 hidden font-mono text-[.625rem] font-semibold tracking-widest uppercase"
                >
                  Who I Am
                </h3>
                <p class="mb-8 text-sm/loose text-pretty lg:text-xl/loose">
                  ${m.t("about.p1")}
                </p>
                <p class="mb-2 text-sm/loose text-pretty lg:text-xl/loose">
                  ${m.t("about.p2")}
                </p>
              </div>
              <div>
                <h3
                  class="text-brand-400 font-mono text-[.625rem] font-semibold tracking-widest uppercase"
                >
                  ${m.t("about.education")}
                </h3>
                <ul class="grid gap-y-4 md:grid-cols-3">
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Industrial Design
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2012 <span class="text-zinc-400">&bull;</span> Escola de
                      Design, UEMG
                    </p>
                  </li>
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Software Development
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2026 <span class="text-zinc-400">&bull;</span> Univ.
                      Católica de Brasília
                    </p>
                  </li>
                </ul>
              </div>
              <div class="pt-3">
                <h3
                  class="text-brand-400 font-mono text-[.625rem] font-semibold tracking-widest uppercase"
                >
                  ${m.t("about.courses")}
                </h3>
                <ul class="grid gap-y-4 md:grid-cols-3">
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Digital Product Design
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2025 <span class="text-zinc-400">&bull;</span> Tera
                      <span class="text-zinc-400">&bull;</span>
                      <a
                        class="hover:text-brand-400 inline-flex underline decoration-zinc-600 underline-offset-4 transition-colors"
                        href="https://credentials.somostera.com/3efd7eaa4fbb5ef1277b1236b0d9f43d"
                      >
                        ${m.t("about.link")}
                      </a>
                    </p>
                  </li>
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      ${m.t("about.iaBusiness")}
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2025 <span class="text-zinc-400">&bull;</span> Tera
                      <span class="text-zinc-400">&bull;</span>
                      <a
                        class="hover:text-brand-400 inline-flex underline decoration-zinc-600 underline-offset-4 transition-colors"
                        href="https://credentials.somostera.com/d938e0586c96cd80ff9daef38415fab1"
                      >
                        ${m.t("about.link")}
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};Jd([L({type:String})],Po.prototype,"lang",2);Po=Jd([ie("about-section")],Po);var Sm=Object.defineProperty,$m=Object.getOwnPropertyDescriptor,Zd=(s,e,t,i)=>{for(var n=i>1?void 0:i?$m(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&Sm(e,t,n),n};let ko=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return D`
      <div class="mx-5 pt-22 pb-5 lg:pt-32 lg:pb-2">
        <h1
          class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
        >
          ${ci(m.t("featured.title"))}
        </h1>
      </div>
    `}createRenderRoot(){return this}};Zd([L({type:String})],ko.prototype,"lang",2);ko=Zd([ie("projects-header")],ko);var Pm=Object.defineProperty,km=Object.getOwnPropertyDescriptor,us=(s,e,t,i)=>{for(var n=i>1?void 0:i?km(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&Pm(e,t,n),n};let nr=class extends G{constructor(){super(...arguments),this.title="",this.tags="",this.year="2025",this.contentHtml=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){const e=this.tags.split(",").map(t=>t.trim()).map(t=>D`<span class="text-[.875rem] text-zinc-400">/</span
          ><span class="text-zinc-50">${t}</span>`);return D`
      <div
        class="mb-8 lg:sticky lg:top-24 lg:mb-0 lg:grid lg:items-end lg:gap-8"
      >
        <div
          class="mb-6 flex flex-wrap gap-2 text-[.875rem] leading-none lg:mb-1"
        >
          <span class="text-brand-400"> ${this.year} </span>
          ${e}
        </div>
        <h2
          class="text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem]"
        >
          ${this.title}
        </h2>
        ${this.contentHtml?D`<div
              class="mt-4 flex flex-col items-start gap-3 leading-loose text-balance lg:mt-0"
            >
              ${ci(this.contentHtml)}
            </div>`:null}
      </div>
    `}createRenderRoot(){return this}};us([L({type:String})],nr.prototype,"title",2);us([L({type:String})],nr.prototype,"tags",2);us([L({type:String})],nr.prototype,"year",2);us([L({type:String})],nr.prototype,"contentHtml",2);nr=us([ie("item-header")],nr);const Tm="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e";var Om=Object.defineProperty,Em=Object.getOwnPropertyDescriptor,wl=(s,e,t,i)=>{for(var n=i>1?void 0:i?Em(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&Om(e,t,n),n};let ua=class extends ui(G){constructor(){super(),this.more=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}toggleMore(){this.more=!this.more}toggleLanguage(){const e=m.language==="en"?"pt":"en";m.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}changeTheme(){this.toggleTheme()}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Copied!":"Copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){oe.from("header > *",{y:-64}),window.addEventListener("scroll",()=>{this.more=!1}),oe.to("header",{scrollTrigger:{trigger:".hero",start:"60 60",end:"60 0",toggleActions:"play none none reverse",scrub:1},outline:"1px solid hsla(0 0 100% / 0.075)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return D`
      <header
        class="fixed inset-x-0 z-40 w-full bg-linear-to-t from-zinc-950 to-zinc-950/80 backdrop-blur md:py-3 lg:fixed"
      >
        <div class="flex items-center lg:container lg:grid lg:grid-cols-4">
          <nav class="lg:hidden">
            <ul
              id="anchors"
              class="${this.more?"h-dvh":"h-0 *:opacity-0"} fixed inset-0 flex w-dvw flex-col justify-center overflow-hidden bg-zinc-950 duration-500 *:transition-all"
            >
              <li>
                <span
                  class="flex h-20 items-center px-5 text-[2rem] tracking-tighter text-zinc-400"
                >
                  Menu
                </span>
              </li>
              <li>
                <mobile-item href="/" label="Home" index="01"></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.github.url")}"
                  label="${m.t("links.github.label")}"
                  index="02"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.linkedin.url")}"
                  label="${m.t("links.linkedin.label")}"
                  index="03"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.email.url")}"
                  label="${m.t("links.email.label")}"
                  index="hello@pmjr.cc"
                ></mobile-item>
              </li>
              <div class="absolute right-4 bottom-4">
                <button-lang
                  @click=${()=>this.toggleLanguage()}
                  label=${this.lang==="pt"?"PT · BR":"EN · US"}
                  title="${this.lang==="en"?"Mudar para português":"Change to english"}"
                ></button-lang>
              </div>
            </ul>
          </nav>
          <div class="flex items-center">
            <button
              @click=${()=>this.getPreviousPage()}
              class="ms-2 flex size-8 cursor-pointer items-center justify-center rounded-full opacity-50 transition-all duration-[200ms] hover:bg-zinc-50/10 hover:opacity-100 active:scale-95 active:bg-zinc-50/20"
              title="Go back to homepage"
            >
              <img
                src="${Tm}"
                class="transition-all duration-[200ms]"
                alt="Go back"
              />
            </button>
            <mail-button
              @click=${()=>this.copyEmail()}
              @mouseleave=${()=>this.copyEmailReset()}
              label="hello@pmjr.cc"
              hover="${this.lang==="en"?"Click to copy":"Copiar e-mail"}"
            ></mail-button>
          </div>
          <button
            class="menu-toggle ${this.more?"menu-toggle--close":""} ms-auto me-4 lg:hidden"
            @click=${()=>this.toggleMore()}
          >
            <span class="text-[.75rem] font-semibold uppercase"> Menu </span>
          </button>
          <nav class="col-span-2">
            <ul id="anchors" class="hidden justify-center px-0 lg:flex">
              <li>
                <menu-item href="#ifficient" label="Ifficient"></menu-item>
              </li>
              <li>
                <menu-item href="#damus" label="Damus"></menu-item>
              </li>
              <li>
                <menu-item href="#allugator" label="Allugator"></menu-item>
              </li>
              <li>
                <menu-item href="#multiplayer" label="Multiplayer"></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden items-center justify-end gap-1 lg:flex">
            <a
              class="cta-button px-3.5 pt-2 pb-2.5 text-[.875rem]"
              href="/Paulo Melo Jr. - Currículo.pdf"
              target="_blank"
            >
              ${this.lang==="en"?"Download resume":"Baixar currículo"}
            </a>
            <languages-dropdown></languages-dropdown>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};wl([L({type:Boolean})],ua.prototype,"more",2);wl([L({type:String})],ua.prototype,"lang",2);ua=wl([ie("projects-menu")],ua);const Am="/src/5c2c4b.webp",Lm="/src/36c011.webp",Mm="/src/c5764d.webp",zm="/src/a374cc.webp",Dm="/src/bf87a5.webp",Rm="/src/fd8081.webp";var jm=Object.defineProperty,Im=Object.getOwnPropertyDescriptor,Qd=(s,e,t,i)=>{for(var n=i>1?void 0:i?Im(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&jm(e,t,n),n};let To=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=`
      <p class="mb-3 text-[.875rem]">
        ${m.t("allugator.description")}
      </p>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${m.t("allugator.metrics.valuation.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${m.t("allugator.metrics.valuation.subtitle")}</p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${m.t("allugator.metrics.users.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${m.t("allugator.metrics.users.subtitle")}</p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${m.t("allugator.metrics.daily.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${m.t("allugator.metrics.daily.subtitle")}</p>
      </div>
    `;return D`
      <div id="allugator" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${m.t("allugator.title")}"
          tags="${m.t("allugator.tags")}"
          year="${m.t("allugator.year")}"
          .contentHtml=${s}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:grid-cols-3 lg:gap-4"
        >
          <img
            class="border-2 border-zinc-800 mix-blend-screen"
            src="${zm}"
            loading="lazy"
          />
          <img src="${Rm}" loading="lazy" />
          <img src="${Am}" loading="lazy" />
          <img
            class="mix-blend-screen lg:col-span-2 lg:row-span-2"
            src="${Lm}"
            loading="lazy"
          />
          <img src="${Dm}" loading="lazy" />
          <img
            class="border-2 border-zinc-800"
            src="${Mm}"
            loading="lazy"
          />
        </div>
      </div>
    `}createRenderRoot(){return this}};Qd([L({type:String})],To.prototype,"lang",2);To=Qd([ie("projects-allugator")],To);const Nm="/src/39683d.webp",Fm="/src/15c264.webp",Um="/src/295098.webp",Hm="/src/778272.webp",Vm="/src/50783c.webp";var Bm=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,eh=(s,e,t,i)=>{for(var n=i>1?void 0:i?qm(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&Bm(e,t,n),n};let Oo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}renderDescription(){return`${m.t("damus.description1")}`}render(){const s=`
      <p class="text-[.875rem]">
        ${this.renderDescription()}
      </p>
      <p class="text-[.875rem]">
        ${m.t("damus.description2")}
      </p>
    `;return D`
      <div id="damus" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${m.t("damus.title")}"
          tags="${m.t("damus.tags")}"
          year="${m.t("damus.year")}"
          .contentHtml=${s}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:gap-4"
        >
          <img src="${Nm}" loading="lazy" class="border-2 border-zinc-800" />
          <img src="${Fm}" loading="lazy" />
          <img src="${Um}" loading="lazy" />
          <img src="${Vm}" loading="lazy" />
          <img
            class="col-span-2 border-2 border-zinc-800"
            src="${Hm}"
            loading="lazy"
          />
        </div>
      </div>
    `}createRenderRoot(){return this}};eh([L({type:String})],Oo.prototype,"lang",2);Oo=eh([ie("projects-damus")],Oo);const Wm="/src/e761eb.webp",Ym="/src/140c7b.webp",Xm="/src/36a4a4.webp",Gm="/src/ae754e.webp",Km="/src/492162.webp",Jm="/src/bec54c.webp",Zm="/src/555530.webp",Qm="/src/6a0945.webp",e0="/src/4fb0f0.webp",t0="/src/52e81e.webp",i0="/src/f150ed.webp",n0="/src/55a96b.webp",r0="/src/85d489.webp";var s0=Object.defineProperty,a0=Object.getOwnPropertyDescriptor,th=(s,e,t,i)=>{for(var n=i>1?void 0:i?a0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&s0(e,t,n),n};let Eo=class extends G{constructor(){super(...arguments),this.images=[],this.overlayRafId=0,this.onKeydown=s=>{s.key==="Escape"&&this.close()},this.onBackdropClick=s=>{s.target.classList.contains("zoom-overlay")&&this.close()},this.close=()=>{this.remove()}}connectedCallback(){var s;super.connectedCallback(),(s=window.lenis)==null||s.stop(),document.body.style.overflow="hidden",document.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){var s,e;super.disconnectedCallback(),this.overlayRafId&&cancelAnimationFrame(this.overlayRafId),(s=this.overlayLenis)==null||s.destroy(),this.overlayLenis=void 0,(e=window.lenis)==null||e.start(),document.body.style.overflow="",document.removeEventListener("keydown",this.onKeydown)}firstUpdated(){const s=this.querySelector(".zoom-overlay"),e=this.querySelector(".zoom-content");if(!s||!e)return;this.overlayLenis=new md({wrapper:s,content:e});const t=i=>{var n;(n=this.overlayLenis)==null||n.raf(i),this.overlayRafId=requestAnimationFrame(t)};this.overlayRafId=requestAnimationFrame(t)}render(){return D`
      <button
        class="fixed top-5 right-5 z-60 flex h-8 items-center gap-1 rounded-full ps-3 pe-1 text-sm/none leading-none text-zinc-100 uppercase transition-all hover:bg-zinc-100 hover:text-zinc-950 xl:pe-1.5"
        @click=${this.close}
      >
        Esc
        <svg class="size-5" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
          <path
            d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        class="zoom-overlay fixed inset-0 z-50 overflow-auto overscroll-contain bg-zinc-50/20 backdrop-blur backdrop-brightness-50"
        @click=${this.onBackdropClick}
      >
        <div class="zoom-content container my-24 max-w-[1280px]">
          <picture>
            ${this.images.map((s,e)=>D`
                <img
                  src=${s.src}
                  width=${s.width}
                  height=${s.height}
                  loading=${e===0?"eager":"lazy"}
                  class="${s.class??""} block w-full"
                />
              `)}
          </picture>
        </div>
      </div>
    `}createRenderRoot(){return this}};th([L({type:Array})],Eo.prototype,"images",2);Eo=th([ie("img-zoom")],Eo);var o0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,ih=(s,e,t,i)=>{for(var n=i>1?void 0:i?l0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&o0(e,t,n),n};const c0=[{src:Km,width:1920,height:1136,class:"rounded-t-[.5rem]"},{src:Jm,width:1920,height:800},{src:Zm,width:1920,height:800},{src:Qm,width:1920,height:800},{src:e0,width:1920,height:800},{src:t0,width:1920,height:800},{src:i0,width:1920,height:800},{src:n0,width:1920,height:800},{src:r0,width:1920,height:236,class:"rounded-b-[.5rem]"}];let Ao=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language},this.openZoom=()=>{const s=document.createElement("img-zoom");s.images=c0,document.body.appendChild(s)}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=`
      <p class="text-[.875rem]">
        ${m.t("ifficient.description1")}
      </p>
      <p class="text-[.875rem]">
        ${m.t("ifficient.description2")}
      </p>
      <a
        href="${m.t("links.lastProject.url")}"
        class="cta-button cta-button--accent inline-flex items-center gap-4 mt-3 lg:mt-7 px-6"
      >
        ${m.t("ifficient.cta")}
      </a>
    `;return D`
      <div id="ifficient" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${m.t("ifficient.title")}"
          tags="${m.t("ifficient.tags")}"
          .contentHtml=${s}
        ></item-header>
        <div class="grid gap-4 *:rounded-[.75rem] lg:col-span-2">
          <div
            class="group relative aspect-video cursor-pointer overflow-hidden border-2 border-zinc-800 before:absolute before:inset-0 before:transition-colors before:duration-200 hover:before:bg-zinc-950/50 before:hover:opacity-1"
            @click=${this.openZoom}
          >
            <img
              id="ifficient-homepage"
              class="w-full"
              src="${Wm}"
              alt="Ifficient homepage"
            />
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100/15 px-5 py-3 text-[1rem] leading-[20px] font-medium text-zinc-50 opacity-0 backdrop-blur transition-all duration-200 group-hover:opacity-100 hover:bg-zinc-100/30"
            >
              ${m.t("ifficient.fullView")}
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2 *:rounded-[.75rem] lg:gap-4">
            <img
              src="${Xm}"
              loading="lazy"
              decoding="async"
              alt="Ifficient screenshot 1"
            />
            <img
              src="${Ym}"
              loading="lazy"
              decoding="async"
              alt="Ifficient screenshot 2"
            />
            <img
              src="${Gm}"
              loading="lazy"
              decoding="async"
              alt="Ifficient screenshot 3"
            />
          </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};ih([L({type:String})],Ao.prototype,"lang",2);Ao=ih([ie("projects-ifficient")],Ao);const u0="/src/00c014.webp",d0="/src/f89330.webp",h0="/src/342435.webp",f0="/src/8e3288.webp",p0="/src/a44924.webp",g0="/src/a6b260.webp",m0="/src/53e6da.gif",_0="/src/73910b.webp",v0="/src/b808d9.webp",b0="/src/80a3c2.gif",y0="/src/dd2f35.webp";var x0=Object.defineProperty,w0=Object.getOwnPropertyDescriptor,nh=(s,e,t,i)=>{for(var n=i>1?void 0:i?w0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&x0(e,t,n),n};let Lo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=`
      <p class="text-[.875rem]">
        ${m.t("multiplayer.description1")}
      </p>
      <p class="mb-3 text-[.875rem]">
        ${m.t("multiplayer.description2")}
      </p>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${m.t("multiplayer.metrics.audience.title")}
        </h3>
        <p class="text-[.875rem] leading-none font-medium">
          ${m.t("multiplayer.metrics.audience.subtitle")}
        </p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${m.t("multiplayer.metrics.facebook.title")}
        </h3>
        <p class="text-[.875rem] leading-none font-medium">
          ${m.t("multiplayer.metrics.facebook.subtitle")}
        </p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${m.t("multiplayer.metrics.youtube.title")}
        </h3>
        <p class="text-[.875rem] leading-none font-medium">
          ${m.t("multiplayer.metrics.youtube.subtitle")}
        </p>
      </div>
    `;return D`
      <div id="multiplayer" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${m.t("multiplayer.title")}"
          tags="${m.t("multiplayer.tags")}"
          year="${m.t("multiplayer.year")}"
          .contentHtml=${s}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:gap-4"
        >
          <img src="${d0}" loading="lazy" />
          <img src="${h0}" loading="lazy" />
          <img src="${p0}" loading="lazy" />
          <img src="${g0}" loading="lazy" />
          <img src="${b0}" loading="lazy" />
          <img src="${f0}" loading="lazy" />
          <img src="${v0}" loading="lazy" />
          <img src="${y0}" loading="lazy" />
          <img src="${_0}" loading="lazy" />
          <img src="${m0}" loading="lazy" />
          <img
            class="col-span-2 border-2 border-zinc-800"
            src="${u0}"
            loading="lazy"
          />
        </div>
      </div>
    `}createRenderRoot(){return this}};nh([L({type:String})],Lo.prototype,"lang",2);Lo=nh([ie("projects-multiplayer")],Lo);var C0=Object.getOwnPropertyDescriptor,S0=(s,e,t,i)=>{for(var n=i>1?void 0:i?C0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};let Zc=class extends ui(G){render(){return D`
      <section class="container">
        <projects-header></projects-header>
        <projects-ifficient></projects-ifficient>
        <div
          class="my-8 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:my-16"
        ></div>
        <projects-damus></projects-damus>
        <div
          class="my-8 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:my-16"
        ></div>
        <projects-allugator></projects-allugator>
        <div
          class="my-8 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:my-16"
        ></div>
        <projects-multiplayer></projects-multiplayer>
        <div
          class="my-8 hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:my-16 lg:mb-32 lg:block"
        ></div>
        <cases-section></cases-section>
      </section>
    `}createRenderRoot(){return this}};Zc=S0([ie("projects-index")],Zc);var $0=Object.defineProperty,P0=Object.getOwnPropertyDescriptor,Cl=(s,e,t,i)=>{for(var n=i>1?void 0:i?P0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&$0(e,t,n),n};let da=class extends G{constructor(){super(...arguments),this.reverse=!1,this.customClass=""}render(){return D`
      <div
        class="progressive-blur ${this.reverse?"progressive-blur--reverse":""} ${this.customClass}"
      >
        ${Array.from({length:6},()=>D`<div></div>`)}
      </div>
    `}createRenderRoot(){return this}};Cl([L({type:Boolean})],da.prototype,"reverse",2);Cl([L({type:String})],da.prototype,"customClass",2);da=Cl([ie("progressive-blur")],da);const k0="/src/341817.webp",T0="/src/7ea3a6.webp";var O0=Object.defineProperty,E0=Object.getOwnPropertyDescriptor,rh=(s,e,t,i)=>{for(var n=i>1?void 0:i?E0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&O0(e,t,n),n};let Mo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}initAnimation(){const s=this.querySelector("#cases"),e=this.querySelectorAll("#cases .cases");s&&e.length>0&&oe.matchMedia().add("(min-width: 1024px)",()=>{oe.from(Array.from(e),{scrollTrigger:{trigger:s,start:"top 100%",end:"bottom 80%",toggleActions:"play none none reverse",scrub:2},stagger:-.1,y:"10rem"})})}firstUpdated(){this.initAnimation()}renderTitle(s){const e=s.split("<br class='block xl:hidden'>");return e.length>1?D`
        ${e[0]}
        <br class="block xl:hidden" />
        ${e[1]}
      `:s}render(){return D`
      <section id="cases" class="hidden xl:block">
        <div class="container">
          <div
            class="hidden h-px w-full bg-linear-to-r from-transparent via-zinc-800 to-transparent xl:block"
          ></div>
          <div
            class="cases-background relative flex rounded-4xl bg-radial-[circle_at_bottom_center] from-zinc-900 2xl:h-[512px]"
          >
            <div class="hidden w-2/3 justify-center xl:flex">
              <span
                class="absolute bottom-0 left-0 flex gap-2 p-8 font-mono text-[.75rem] leading-none font-medium tracking-[.05em] text-zinc-400 uppercase"
              >
                2025 ${m.t("cases.project")}
              </span>
              <div
                class="pointer-events-none absolute bottom-0 overflow-hidden"
              >
                <img
                  class="cases absolute w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${k0}"
                  width="1264"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  alt="Dark mode mobile dashboard showing analytics overview with graphs, lead count, and campaign metrics on a tilted iPhone screen."
                />
                <img
                  class="cases w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${T0}"
                  width="1264"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  alt="Mobile screen in dark mode showcasing an organized campaign list view, with project names, dates, and quick actions."
                />
              </div>
            </div>
            <div
              class="cases-content relative flex flex-1 flex-col p-20 xl:aspect-square xl:rounded-r-4xl 2xl:p-24"
            >
              <h2
                class="text-[2.5rem] leading-none tracking-tighter text-zinc-50 2xl:text-[3rem]"
              >
                ${this.renderTitle(m.t("cases.title"))}
              </h2>
              <p
                class="mt-8 mb-auto text-sm/loose text-pretty 2xl:text-base/loose"
              >
                ${m.t("cases.description")}
              </p>
              <a
                href="${m.t("links.lastProject.url")}"
                class="cta-button cta-button--accent flex w-full items-center justify-between gap-3 self-center py-4 ps-6"
              >
                ${m.t("cases.cta")}
                <svg
                  width="14"
                  height="14"
                  class="rotate-180"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 13L2 6.99999M2 6.99999L8 1M2 6.99999L14 6.99999"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            class="hidden h-px w-full bg-linear-to-r from-transparent via-zinc-800 to-transparent xl:block"
          ></div>
        </div>
      </section>
    `}createRenderRoot(){return this}};rh([L({type:String})],Mo.prototype,"lang",2);Mo=rh([ie("cases-section")],Mo);var A0=Object.defineProperty,L0=Object.getOwnPropertyDescriptor,ar=(s,e,t,i)=>{for(var n=i>1?void 0:i?L0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&A0(e,t,n),n};let wn=class extends G{constructor(){super(...arguments),this.url="",this.label="",this.index="000",this.target="_blank",this.rel="noopener noreferrer"}render(){return D`
      <a
        href="${this.url}"
        target="${this.target}"
        rel="${this.rel}"
        class="group relative flex h-20 items-center border-b border-zinc-900 px-5 text-zinc-50 transition-colors duration-400 group-hover/item:text-zinc-700 hover:text-white lg:h-auto lg:border-0 lg:bg-transparent"
      >
        ${this.label}
        <div
          class="bg-brand-400 pointer-events-none absolute -bottom-6 left-1/2 hidden w-4 -translate-x-1/2 translate-y-8 -rotate-180 justify-center rounded-full opacity-0 transition-[opacity_transform_width] duration-400 group-hover:w-6 group-hover:translate-y-0 group-hover:rotate-180 group-hover:opacity-100 lg:flex"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            class="size-4 fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9385 8.60896C13.9091 8.20693 14.9494 8 16 8C14.9494 8 13.9091 7.79307 12.9385 7.39104C11.9679 6.989 11.086 6.39972 10.3431 5.65685C9.60028 4.91399 9.011 4.03207 8.60896 3.06147C8.20693 2.09086 8 1.05057 8 0C8 2.12173 7.15714 4.15657 5.65685 5.65686C4.15656 7.15715 2.12173 8 0 8C1.05057 8 2.09086 8.20693 3.06147 8.60896C4.03207 9.011 4.91399 9.60028 5.65686 10.3431C6.39972 11.086 6.989 11.9679 7.39104 12.9385C7.79307 13.9091 8 14.9494 8 16C8 14.9494 8.20693 13.9091 8.60896 12.9385C9.011 11.9679 9.60028 11.086 10.3431 10.3431C11.086 9.60028 11.9679 9.011 12.9385 8.60896Z"
            />
          </svg>
        </div>
        <span
          class="absolute right-6 bottom-6 font-mono text-[.75rem] tracking-wider opacity-50 mix-blend-difference lg:hidden"
        >
          ${this.index}
        </span>
      </a>
    `}createRenderRoot(){return this}};ar([L({type:String})],wn.prototype,"url",2);ar([L({type:String})],wn.prototype,"label",2);ar([L({type:String})],wn.prototype,"index",2);ar([L({type:String})],wn.prototype,"target",2);ar([L({type:String})],wn.prototype,"rel",2);wn=ar([ie("footer-link")],wn);var M0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,sh=(s,e,t,i)=>{for(var n=i>1?void 0:i?z0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&M0(e,t,n),n};let zo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}currentYear(){return new Date().getFullYear()}getRandomQuote(){const s=["Stay hungry, stay foolish.","Get off zero.","No great thing is created suddenly.","Where the mind goes the body will follow.","To define is to limit.","Publish to polish."],e=Math.floor(Math.random()*s.length);return s[e]}initMenuAnimation(){const s=this.querySelector("footer"),e=this.querySelector("#menu"),t=this.querySelectorAll("#menu > *");s&&e&&t.length>0&&oe.from(Array.from(t),{scrollTrigger:{trigger:s,start:"top 50%",end:"top 0%",toggleActions:"play none none reverse"},opacity:0,stagger:.1,y:"5rem"})}firstUpdated(){this.initMenuAnimation()}render(){return D`
      <footer
        id="section-connect"
        class="footer md:from-brand-800 relative z-10 h-lvh overflow-hidden md:bg-linear-0 md:from-[5rem] md:via-zinc-950 lg:before:content-['']"
      >
        <div
          id="footerLinks"
          class="relative z-10 flex h-full flex-1 items-center"
        >
          <div
            id="menu"
            class="group/item container flex flex-1 flex-col flex-wrap text-[2rem] leading-none tracking-tighter lg:max-w-full lg:flex-row lg:items-baseline lg:justify-center lg:text-[2.5rem]"
          >
            <span
              class="mx-5 flex h-20 items-center text-zinc-400 transition-colors duration-400 group-hover/item:text-zinc-400 lg:p-0"
            >
              ${m.t("connect.title")}
            </span>
            <footer-link
              url=${m.t("links.github.url")}
              label=${m.t("links.github.label")}
              index="001"
            ></footer-link>

            <footer-link
              url=${m.t("links.linkedin.url")}
              label=${m.t("links.linkedin.label")}
              index="002"
            ></footer-link>

            <footer-link
              url=${m.t("links.email.url")}
              label=${m.t("links.email.label")}
              index="hello@pmjr.cc"
            ></footer-link>
          </div>
        </div>
        <div
          class="lg:bg-brand-800 absolute inset-x-0 bottom-0 z-50 flex w-full justify-center gap-2 px-5 pt-[10px] pb-[14px] font-mono text-[.625rem] font-semibold tracking-widest uppercase"
        >
          <span> [c] ${this.currentYear()||"2026"} Paulo Melo Jr. </span>
          <span class="hidden text-zinc-400 md:inline"> / </span>
          <span class="hidden md:inline">
            ${this.getRandomQuote()||"To define is to limit."}
          </span>
        </div>
      </footer>
    `}createRenderRoot(){return this}};sh([L({type:String})],zo.prototype,"lang",2);zo=sh([ie("footer-section")],zo);const D0="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e",R0="/src/c2501f.webp",j0="/src/c03c5c.webp",I0="/src/37694a.webp",N0="/src/2e45e1.webp",F0="/src/5963f7.webp";var U0=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,ah=(s,e,t,i)=>{for(var n=i>1?void 0:i?H0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&U0(e,t,n),n};let Do=class extends ui(G){constructor(){super(...arguments),this.lang=m.language}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}itemEntrance(){oe.from(".hero",{paddingTop:64}),document.querySelectorAll("[data-entrance]").forEach(s=>{const e=[{item:"4",opacity:"0",y:"20%",delay:.4,scale:1.1,duration:1},{item:"5",opacity:"0",y:"20%",delay:0,scale:1.1,duration:1.2},{item:"3",opacity:"0",y:"0rem",delay:.2,duration:1},{item:"2",opacity:"0",y:"0rem",delay:.2,duration:1},{item:"1",opacity:"0",y:"0rem",delay:.2,duration:1}],t=oe.timeline();e.forEach((i,n)=>{t.from(s.querySelectorAll(`[data-entrance-item="${i.item}"]`),{y:i.y,opacity:i.opacity,delay:i.delay,scale:i.scale,duration:i.duration},n===0?void 0:"<")})})}heroParallax(){document.querySelectorAll("[data-parallax-layers]").forEach(s=>{let e=oe.timeline({scrollTrigger:{trigger:s,start:"0% 0%",end:"100% 0%",scrub:0}});[{layer:"1",y:"2.5rem",opacity:0},{layer:"2",y:"5rem",opacity:0,filter:"blur(1rem)"}].forEach((i,n)=>{e.to(s.querySelectorAll(`[data-parallax-layer="${i.layer}"]`),{y:i.y,ease:"none",opacity:i.opacity,filter:i.filter},n===0?void 0:"<")})})}firstUpdated(){this.itemEntrance(),this.heroParallax()}render(){return D`
      <section
        class="hero animate-fade-in before:content-none sm:before:content-['']"
        data-parallax-layers
        data-entrance
      >
        <div
          class="container flex min-h-[calc(100svh-4rem)] flex-col-reverse pt-12 sm:flex-col sm:justify-between sm:pt-18"
        >
          <div
            class="relative z-10 mx-5 mb-auto flex flex-col sm:my-auto sm:items-center sm:pt-16 sm:pb-20"
            data-parallax-layer="1"
          >
            <div data-entrance-item="3" class="mb-5 flex items-center gap-4">
              <img
                src="${R0}"
                sizes="64px"
                height="64"
                width="64"
                fetchpriority="high"
                loading="eager"
                alt="${m.t("hero.picDescription")}"
                class="size-14 rounded-full bg-zinc-900 outline-4 outline-zinc-950"
              />
              <div class="grid gap-2 leading-none">
                <span class="text-white 2xl:text-[1.25rem]">
                  ${m.t("hero.name")}
                </span>
                <span
                  class="flex items-center gap-2 text-[.875rem] font-medium 2xl:text-[1rem]"
                >
                  <span class="relative flex size-3">
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400"
                    ></span>
                    <span
                      class="relative m-0.5 inline-flex size-2 rounded-full bg-green-300"
                    ></span>
                  </span>
                  ${m.t("hero.status")}
                </span>
              </div>
            </div>

            <div
              data-entrance-item="2"
              class="mb-9 flex flex-col gap-2 md:text-center"
            >
              <h1
                data-split="heading"
                class="tracking-tightest text-[2.75rem] leading-none font-medium text-balance text-zinc-50 2xl:text-[5rem]"
              >
                ${m.t("hero.title")}
              </h1>
              <h2 class="text-[1.125rem] text-balance 2xl:text-[1.5rem]">
                ${m.t("hero.subtitle")}
              </h2>
            </div>

            <div data-entrance-item="1" class="relative flex gap-2">
              <a
                href="${m.t("hero.cta.url")}"
                class="cta-button cta-button--accent flex items-center gap-3 self-center px-6 py-4"
              >
                ${m.t("hero.cta.label")}
              </a>
              <a
                href="#section-praxis"
                class="transition-color hidden size-[48px] items-center justify-center rounded-full bg-zinc-900 outline-4 outline-zinc-950 duration-[200ms] hover:bg-zinc-800 active:scale-95"
                title="Scroll page"
              >
                <img
                  src="${D0}"
                  class="-rotate-90 transition-opacity duration-500"
                />
              </a>
            </div>
          </div>
          <div
            class="col-span-12 container grid grid-cols-12 items-end"
            data-parallax-layer="2"
          >
            <div class="col-span-12 block bg-zinc-950 sm:hidden">
              <img
                data-entrance-item="1"
                class="aspect-[3/2] w-full rounded-t-4xl mask-b-from-50% object-cover object-center"
                src="${F0}"
              />
            </div>
            <div class="hidden bg-zinc-950 xl:col-span-3 xl:block">
              <img
                data-entrance-item="5"
                class="aspect-square w-full rounded-tl-lg mask-b-from-50% object-cover object-top sm:mask-r-from-50% sm:mask-b-from-0%"
                src="${j0}"
                height="384"
                width="384"
              />
            </div>
            <div class="col-span-8 hidden bg-zinc-950 sm:block xl:col-span-6">
              <img
                data-entrance-item="4"
                class="max-h-[432px] w-full rounded-t-lg mask-b-from-75% object-cover object-top"
                src="${I0}"
                height="432"
                width="768"
              />
            </div>
            <div class="col-span-4 hidden bg-zinc-950 sm:block xl:col-span-3">
              <img
                data-entrance-item="5"
                class="aspect-square w-full rounded-tr-lg mask-b-from-50% mask-l-from-0% object-cover object-top"
                src="${N0}"
                height="384"
                width="384"
              />
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};ah([L({type:String})],Do.prototype,"lang",2);Do=ah([ie("hero-section")],Do);var V0=Object.defineProperty,B0=Object.getOwnPropertyDescriptor,oh=(s,e,t,i)=>{for(var n=i>1?void 0:i?B0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&V0(e,t,n),n};let Ro=class extends ui(G){constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language,this.requestUpdate()}}get journeyItems(){return[{hide:!1,custom:"text-brand-400",start:"2019",end:"2025",title:m.t("journey.t4"),description:m.t("journey.p4")},{hide:!1,start:"2018",end:"2019",title:m.t("journey.t3"),description:m.t("journey.p3"),more:m.t("journey.m3")},{hide:!1,start:"2016",end:"2018",title:m.t("journey.t2"),description:m.t("journey.p2"),more:m.t("journey.m2")},{hide:!1,start:"2015",end:"2016",title:m.t("journey.t1"),description:m.t("journey.p1")}]}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}renderJourneyHeader(){return D`
      <h2
        class="px-5 text-[2.5rem] leading-none tracking-tighter text-pretty text-zinc-50 xl:px-20 xl:text-[3rem] 2xl:px-32 2xl:text-[4rem]"
      >
        ${m.t("journey.t0")}
      </h2>
      <div
        class="order-1 flex items-center px-5 lg:order-0 lg:justify-end xl:px-20 2xl:px-32"
      >
        <a
          href="/Paulo Melo Jr. - Currículo.pdf"
          target="_blank"
          class="cta-button cta-button--accent flex items-center px-6 py-4 text-[1rem] leading-none"
        >
          ${this.lang==="en"?"Download my resume":"Baixar meu currículo"}
        </a>
      </div>
    `}renderJourneyItem(s){return s.hide?D`<div class="hidden xl:flex"></div>`:D`
      <div class="job relative flex flex-col gap-4 px-5 xl:px-20 2xl:px-32">
        <span
          class="mb-2 font-mono text-[.75rem] leading-none font-medium tracking-tighter text-zinc-400"
        >
          ${s.start} &bull;
          <span class=${s.custom??""}>${s.end}</span>
        </span>
        <h2
          class="text-[1.5rem] tracking-tighter text-zinc-50 xl:leading-none 2xl:text-[2rem]"
        >
          ${ci(s.title)}
        </h2>
        <p class="text-sm/loose text-pretty lg:text-base/loose">
          ${s.description}
        </p>
        ${s.more?D`<span class="text-default mt-1 hidden text-xs"
              >${s.more}</span
            >`:Me}
      </div>
    `}firstUpdated(s){}render(){return D`
      <section id="section-journey">
        <div class="lg:py-16 xl:py-24 2xl:my-16 2xl:py-48">
          <div
            id="job"
            class="container grid gap-y-16 overflow-hidden pt-14 lg:grid-cols-2 lg:pt-0 xl:gap-y-32"
          >
            ${this.renderJourneyHeader()}
            ${this.journeyItems.map(s=>this.renderJourneyItem(s))}
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};oh([L({type:String})],Ro.prototype,"lang",2);Ro=oh([ie("journey-section")],Ro);function q0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ga={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Qc;function W0(){return Qc||(Qc=1,(function(s){(function(){var e={}.hasOwnProperty;function t(){for(var r="",a=0;a<arguments.length;a++){var o=arguments[a];o&&(r=n(r,i(o)))}return r}function i(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var a="";for(var o in r)e.call(r,o)&&r[o]&&(a=n(a,o));return a}function n(r,a){return a?r?r+" "+a:r+a:r}s.exports?(t.default=t,s.exports=t):window.classNames=t})()})(Ga)),Ga.exports}var Y0=W0();const Cn=q0(Y0);var X0=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,Ca=(s,e,t,i)=>{for(var n=i>1?void 0:i?G0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&X0(e,t,n),n};let rs=class extends G{constructor(){super(...arguments),this.star="",this.items="",this.reverse=!1}render(){const e=this.items.split(",").map(n=>n.trim()).map(n=>D`<li>${n}</li>
          <li>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="${this.star} size-2 xl:size-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9385 8.60896C13.9091 8.20693 14.9494 8 16 8C14.9494 8 13.9091 7.79307 12.9385 7.39104C11.9679 6.989 11.086 6.39972 10.3431 5.65685C9.60028 4.91399 9.011 4.03207 8.60896 3.06147C8.20693 2.09086 8 1.05057 8 0C8 2.12173 7.15714 4.15657 5.65685 5.65686C4.15656 7.15715 2.12173 8 0 8C1.05057 8 2.09086 8.20693 3.06147 8.60896C4.03207 9.011 4.91399 9.60028 5.65686 10.3431C6.39972 11.086 6.989 11.9679 7.39104 12.9385C7.79307 13.9091 8 14.9494 8 16C8 14.9494 8.20693 13.9091 8.60896 12.9385C9.011 11.9679 9.60028 11.086 10.3431 10.3431C11.086 9.60028 11.9679 9.011 12.9385 8.60896Z"
              />
            </svg>
          </li>`),t=this.reverse,i=Cn("marquee",{reverse:t});return D`
      <div class=${i}>
        <ul class="marquee__content">
          ${e}
        </ul>
        <ul class="marquee__content">
          ${e}
        </ul>
      </div>
    `}createRenderRoot(){return this}};Ca([L({type:String})],rs.prototype,"star",2);Ca([L({type:String})],rs.prototype,"items",2);Ca([L({type:Boolean})],rs.prototype,"reverse",2);rs=Ca([ie("marquee-element")],rs);var K0=Object.defineProperty,J0=Object.getOwnPropertyDescriptor,Sa=(s,e,t,i)=>{for(var n=i>1?void 0:i?J0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&K0(e,t,n),n};let ss=class extends G{constructor(){super(...arguments),this.classNames="",this.href="",this.label=""}firstUpdated(){const s=document.querySelectorAll(".menu-item");s.forEach(i=>{const n=i.firstElementChild;oe.set(n,{clipPath:"inset(0% 0% 100% 0%)"})});function e(){const i=this.firstElementChild;oe.to(i,{duration:.2,clipPath:"inset(0% 0% 0% 0%)"})}function t(){if(this.classList.contains("active"))return;const i=this.firstElementChild;i&&oe.to(i,{duration:.2,clipPath:"inset(100% 0 0 0)",onComplete:()=>{oe.set(i,{clipPath:"inset(0% 0% 100%)"})}})}s.forEach(i=>{i.addEventListener("mouseenter",e),i.addEventListener("mouseleave",t)})}render(){const s=Cn("font-medium relative flex justify-center leading-none pt-2 pb-2.5 px-4 text-zinc-300 text-[.875rem] items-center rounded-full hover:text-zinc-50 hover:bg-zinc-50/10 transition-all duration-[200ms] active:scale-95 active:bg-zinc-50/20");return D`<a
      class="${s} ${this.classNames}"
      href="${this.href}"
      data-label="${this.label}"
    >
      ${this.label}
    </a>`}createRenderRoot(){return this}};Sa([L({type:String})],ss.prototype,"classNames",2);Sa([L({type:String})],ss.prototype,"href",2);Sa([L({type:String})],ss.prototype,"label",2);ss=Sa([ie("menu-item")],ss);var Z0=Object.defineProperty,Q0=Object.getOwnPropertyDescriptor,Sl=(s,e,t,i)=>{for(var n=i>1?void 0:i?Q0(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&Z0(e,t,n),n};let ha=class extends ui(G){constructor(){super(),this.more=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}toggleMore(){this.more=!this.more}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}toggleLanguage(){const e=m.language==="en"?"pt":"en";m.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){oe.from("header > *",{y:-64}),window.addEventListener("scroll",()=>{this.more=!1}),oe.to("header",{scrollTrigger:{trigger:".hero",start:"60 60",end:"60 0",toggleActions:"play none none reverse",scrub:1},outline:"1px solid hsla(0 0 100% / 0.075)",padding:"0 0 0 0"})}render(){return D`
      <header
        class="fixed inset-x-0 z-40 w-full bg-linear-to-t from-zinc-950 to-zinc-950/80 backdrop-blur md:py-3 lg:fixed"
      >
        <div class="flex items-center lg:container lg:grid lg:grid-cols-3">
          <nav class="lg:hidden">
            <ul
              id="anchors"
              class="${this.more?"h-dvh":"h-0 *:opacity-0"} fixed inset-0 flex w-dvw flex-col justify-center overflow-hidden bg-zinc-950 duration-500 *:transition-all"
            >
              <li>
                <span
                  class="flex h-20 items-center px-5 text-[2rem] tracking-tighter text-zinc-400"
                >
                  Menu
                </span>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.lastProject.url")}"
                  label="${m.t("links.lastProject.label")}"
                  index="01"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.github.url")}"
                  label="${m.t("links.github.label")}"
                  index="02"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.linkedin.url")}"
                  label="${m.t("links.linkedin.label")}"
                  index="03"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.email.url")}"
                  label="${m.t("links.email.label")}"
                  index="hello@pmjr.cc"
                ></mobile-item>
              </li>
              <div class="absolute right-4 bottom-4">
                <button-lang
                  @click=${()=>this.toggleLanguage()}
                  label=${this.lang==="pt"?"PT · BR":"EN · US"}
                  title="${this.lang==="en"?"Mudar para português":"Change to english"}"
                ></button-lang>
              </div>
            </ul>
          </nav>
          <mail-button
            @click=${()=>this.copyEmail()}
            @mouseleave=${()=>this.copyEmailReset()}
            label="hello@pmjr.cc"
            class="ms-1.5"
            hover="${this.lang==="en"?"Click to copy":"Copiar e-mail"}"
          ></mail-button>
          <button
            class="menu-toggle ${this.more?"menu-toggle--close":""} ms-auto me-4 lg:hidden"
            @click=${()=>this.toggleMore()}
          >
            <span class="text-[.75rem] font-semibold uppercase"> Menu </span>
          </button>
          <nav>
            <ul id="anchors" class="hidden justify-center lg:flex">
              <li>
                <menu-item
                  href="#section-praxis"
                  label="${m.t("menu.praxis")}"
                ></menu-item>
              </li>
              <li>
                <menu-item
                  href="#section-journey"
                  label="${m.t("menu.journey")}"
                ></menu-item>
              </li>
              <li>
                <menu-item
                  href="#section-about"
                  label="${m.t("menu.about")}"
                ></menu-item>
              </li>
              <li>
                <menu-item
                  href="#section-connect"
                  label="${m.t("menu.connect")}"
                ></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden items-center justify-end gap-1 lg:flex">
            <a
              class="cta-button px-3.5 pt-2 pb-2.5 text-[.875rem]"
              href="${m.t("links.projects.url")}"
            >
              ${m.t("featured.button")}
            </a>
            <languages-dropdown></languages-dropdown>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};Sl([L({type:Boolean})],ha.prototype,"more",2);Sl([L({type:String})],ha.prototype,"lang",2);ha=Sl([ie("menu-container")],ha);var e1=Object.defineProperty,t1=Object.getOwnPropertyDescriptor,or=(s,e,t,i)=>{for(var n=i>1?void 0:i?t1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&e1(e,t,n),n};let Sn=class extends G{constructor(){super(...arguments),this.baseClasses="",this.customClasses="",this.icon="",this.label="",this.title=""}render(){const e=Cn("relative font-medium text-[.75rem] tracking-[0.04em] flex transition-all duration-[200ms] px-1 xl:px-1.5 gap-2 h-8 rounded-full leading-8.5 xl:items-center  hover:text-zinc-50 text-zinc-300  active:scale-95 me-2",this.customClasses);return D`
      <button class="${e}" title="${this.title}">
        ${this.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          class="h-8"
          viewBox="0 0 256 256"
        >
          <path
            d="M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z"
          ></path>
        </svg>
      </button>
    `}createRenderRoot(){return this}};or([L({type:String})],Sn.prototype,"baseClasses",2);or([L({type:String})],Sn.prototype,"customClasses",2);or([L({type:String})],Sn.prototype,"icon",2);or([L({type:String})],Sn.prototype,"label",2);or([L({type:String})],Sn.prototype,"title",2);Sn=or([ie("languages-button")],Sn);var i1=Object.defineProperty,n1=Object.getOwnPropertyDescriptor,$a=(s,e,t,i)=>{for(var n=i>1?void 0:i?n1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&i1(e,t,n),n};let as=class extends G{constructor(){super(...arguments),this.href="",this.label="",this.hover=""}render(){const s=Cn("flex px-3 tracking-wide gap-2 text-zinc-50 text-[.75rem] uppercase items-center py-2.5 leading-none rounded-full whitespace-nowrap font-medium active:scale-95");return D`<button class="menu-item group/item ${s} relative">
      <div
        class="${s} pointer-events-none absolute inset-0 justify-center"
        aria-hidden="true"
      >
        <span class="text-zinc-950">
          ${this.hover?this.hover:this.label}
        </span>
      </div>
      ${this.label}
    </button>`}createRenderRoot(){return this}};$a([L({type:String})],as.prototype,"href",2);$a([L({type:String})],as.prototype,"label",2);$a([L({type:String})],as.prototype,"hover",2);as=$a([ie("mail-button")],as);var r1=Object.defineProperty,s1=Object.getOwnPropertyDescriptor,ds=(s,e,t,i)=>{for(var n=i>1?void 0:i?s1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&r1(e,t,n),n};let rr=class extends G{constructor(){super(...arguments),this.classNames="",this.icon="",this.label="",this.title=""}render(){const e=Cn("relative text-[.75rem] tracking-[0.05em] flex transition-all ps-3 pe-1 xl:pe-1.5 gap-2 h-8 xl:h-6 hover:h-8 rounded-full leading-8.5 xl:items-center hover:bg-zinc-100 hover:text-zinc-950 text-zinc-300 font-medium stroke-zinc-300 hover:stroke-zinc-950 hover:fill-zinc-100 active:scale-95",this.classNames);return D`
      <button class="${e}" title="${this.title}">
        ${this.label}
        <svg
          width="20px"
          height="20px"
          stroke-width="1.75"
          viewBox="0 0 24 24"
          class="h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999C16 17.9999 13 21.9506 13 21.9506"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2.62964 15.5H21.3704"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2.62964 8.5H21.3704"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    `}createRenderRoot(){return this}};ds([L({type:String})],rr.prototype,"classNames",2);ds([L({type:String})],rr.prototype,"icon",2);ds([L({type:String})],rr.prototype,"label",2);ds([L({type:String})],rr.prototype,"title",2);rr=ds([ie("button-lang")],rr);var a1=Object.defineProperty,o1=Object.getOwnPropertyDescriptor,Pa=(s,e,t,i)=>{for(var n=i>1?void 0:i?o1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&a1(e,t,n),n};let os=class extends G{constructor(){super(...arguments),this.href="",this.label="",this.index=""}render(){return D`<div class="border-b border-zinc-900 xl:border-0">
      <a
        class="menu-item relative flex h-20 items-center px-5 text-[2rem] tracking-tighter text-zinc-100 xl:h-16"
        rel="noopener noreferrer"
        href="${this.href}"
      >
        ${this.label}
        <div
          class="absolute inset-0 flex items-center px-5 text-zinc-950 xl:rounded-full"
        >
          ${this.label}
        </div>
        <span
          class="absolute right-6 bottom-6 font-mono text-[.75rem] tracking-[0.05em] opacity-50 mix-blend-difference"
        >
          ${this.index}
        </span>
      </a>
    </div>`}createRenderRoot(){return this}};Pa([L({type:String})],os.prototype,"href",2);Pa([L({type:String})],os.prototype,"label",2);Pa([L({type:String})],os.prototype,"index",2);os=Pa([ie("mobile-item")],os);var l1=Object.defineProperty,c1=Object.getOwnPropertyDescriptor,$l=(s,e,t,i)=>{for(var n=i>1?void 0:i?c1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&l1(e,t,n),n};let fa=class extends G{constructor(){super(),this.langMenu=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}toggleLangMenu(){this.langMenu=!this.langMenu,this.langMenu&&setTimeout(()=>{const s=this.renderRoot.querySelector("#langMenuEl");if(s){const e=()=>{this.langMenu=!1};s.removeEventListener("mouseleave",e),s.addEventListener("mouseleave",e,{once:!0})}},0)}selectLanguage(s){m.changeLanguage(s),localStorage.setItem("lang",s),this.lang=s,this.langMenu=!1}render(){return D`
      <div class="relative flex h-12 items-center justify-center">
        <languages-button
          customClasses="${this.langMenu?"fill-brand-400 hover:fill-brand-300 hover:bg-brand-400/10":"fill-zinc-300 hover:bg-zinc-50/10 hover:fill-zinc-50"}"
          @click=${()=>this.toggleLangMenu()}
          title="${this.lang==="en"?"Mudar para português":"Change to english"}"
        ></languages-button>
        <ul
          id="langMenuEl"
          class="${this.langMenu?"scale-100 blur-none":"opacity-0 invisible -translate-y-4 blur-sm"} absolute top-full right-0 mt-2.5 flex flex-col gap-2 rounded-[1.5rem] bg-zinc-900 p-2 font-medium outline-1 outline-zinc-800 transition-all"
        >
          <li>
            <button
              @click=${()=>this.selectLanguage("en")}
              class=${Cn("w-full pt-2 pb-2.5 px-4 rounded-full text-[.875rem] leading-none transition-all active:scale-95 duration-[200ms]",this.lang==="en"?"bg-zinc-100 text-zinc-950 hover:bg-white":"hover:bg-zinc-50/10 hover:text-zinc-50")}
            >
              English
            </button>
          </li>
          <li>
            <button
              @click=${()=>this.selectLanguage("pt")}
              class=${Cn("w-full pt-2 pb-2.5 px-4 rounded-full text-[.875rem] leading-none transition-all active:scale-95 duration-[200ms]",this.lang==="pt"?"bg-zinc-100 text-zinc-950 hover:bg-white":"hover:bg-zinc-50/10 hover:text-zinc-50")}
            >
              Português
            </button>
          </li>
        </ul>
      </div>
    `}createRenderRoot(){return this}};$l([L({type:Boolean})],fa.prototype,"langMenu",2);$l([L({type:String})],fa.prototype,"lang",2);fa=$l([ie("languages-dropdown")],fa);var u1=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,lr=(s,e,t,i)=>{for(var n=i>1?void 0:i?d1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&u1(e,t,n),n};let $n=class extends ui(G){constructor(){super(...arguments),this.lang=m.language,this.index="000",this.t="Add Title",this.content="Add Content",this.open=!1}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}firstUpdated(){}render(){return D`
      <div
        class="${this.open?"col-span-3 bg-zinc-800":"bg-zinc-900"} flex aspect-square h-full flex-col justify-between rounded-[.25rem] p-6 xl:aspect-[2/1] xl:p-12"
      >
        <span class="mb-2 leading-none text-zinc-400"> ${this.index} </span>
        <h2
          class="text-[1.5rem] leading-none tracking-tighter text-zinc-50 xl:text-[2rem]"
        >
          ${this.t}
        </h2>
      </div>
    `}createRenderRoot(){return this}};lr([L({type:String})],$n.prototype,"lang",2);lr([L({type:String})],$n.prototype,"index",2);lr([L({type:String})],$n.prototype,"t",2);lr([L({type:String})],$n.prototype,"content",2);lr([L({type:Boolean})],$n.prototype,"open",2);$n=lr([ie("method-item")],$n);var h1=Object.defineProperty,f1=Object.getOwnPropertyDescriptor,lh=(s,e,t,i)=>{for(var n=i>1?void 0:i?f1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&h1(e,t,n),n};let jo=class extends ui(G){constructor(){super(...arguments),this.lang=m.language}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}firstUpdated(){}render(){return D`
      <section class="">
        <div class="container">
          <div
            class="grid grid-cols-2 gap-[2px] overflow-hidden rounded-4xl px-0.5 *:contents md:grid-cols-4"
          >
            <method-item
              index="001"
              t=${m.t("method.1")}
              content="It all begins with a no-stress chat. Without compromises."
            ></method-item>
            <method-item
              index="002"
              t=${m.t("method.2")}
              content="We analyze your brand and strategize a custom roadmap."
            ></method-item>
            <method-item
              index="003"
              t=${m.t("method.3")}
              content="Time to design and ask for feedback. We lock in and work."
            ></method-item>
            <method-item
              index="004"
              t=${m.t("method.4")}
              content="It's go-time! We launch your project, monitor its impact, and make adjustments to maximize performance."
            ></method-item>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};lh([L({type:String})],jo.prototype,"lang",2);jo=lh([ie("method-section")],jo);var p1=Object.defineProperty,g1=Object.getOwnPropertyDescriptor,ch=(s,e,t,i)=>{for(var n=i>1?void 0:i?g1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&p1(e,t,n),n};let Io=class extends ui(G){constructor(){super(...arguments),this.lang=m.language}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}firstUpdated(){const s=this.renderRoot.querySelectorAll(".praxis svg"),e=this.renderRoot.querySelector("section > .praxis-bg");oe.to(e,{scrollTrigger:{trigger:e,start:"0 75%",end:"0 50%",toggleActions:"play none none reverse",scrub:1},opacity:0,ease:"none"}),s.forEach(i=>{const n=i.querySelectorAll("path");oe.from(n,{scrollTrigger:{trigger:i,start:"0% 75%",toggleActions:"play none none reverse"},stagger:.12,opacity:0,fill:(this.dark,"var(--color-brand-400)"),drawSVG:!1})}),this.renderRoot.querySelectorAll(".praxis").forEach(i=>{oe.from(i.children,{scrollTrigger:{trigger:i.children,start:"0% 75%",toggleActions:"play none none reverse"},duration:.8,stagger:.1,x:"5rem",filter:"blur(.5rem)",opacity:n=>n===0?1:0})})}render(){return D`
      <section class="relative bg-zinc-950">
        <div class="praxis-bg absolute inset-0 bg-zinc-900"></div>
        <div id="section-praxis" class="absolute -top-12 h-px w-full"></div>
        <div
          class="relative mx-5 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent"
        ></div>
        <div class="container">
          <marquee-element
            star="fill-brand-400"
            items="Design Engineering, Product Design, User Experience"
          ></marquee-element>
          <div
            class="mx-5 grid gap-16 overflow-x-hidden py-16 *:flex *:items-start *:justify-center *:gap-5 lg:grid-cols-2 xl:gap-24 xl:py-0 xl:*:flex-row *:xl:gap-12 *:xl:py-24 *:2xl:py-48"
          >
            <div class="praxis">
              <svg
                class="size-16 shrink-0 xl:size-24"
                width="82"
                height="81"
                viewBox="0 0 82 81"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 23C31.1503 23 41 13.1503 41 1C28.8497 1 19 10.8497 19 23Z"
                />
                <path
                  d="M41 1C53.1503 1 63 10.8497 63 23C50.8497 23 41 13.1503 41 1Z"
                />
                <path
                  d="M19 23C31.1503 23 41 32.8497 41 45C28.8497 45 19 35.1503 19 23Z"
                />
                <path
                  d="M41 45C53.1503 45 63 35.1503 63 23C50.8497 23 41 32.8497 41 45Z"
                />
                <path
                  d="M41 79.0966C44.5746 79.0966 48.1492 78.4978 51.5712 77.3001L81 67V57C81 50.3726 75.6274 45 69 45H41"
                />
                <path
                  d="M41 79.0966C37.4254 79.0966 33.8508 78.4978 30.4288 77.3001L1 67V57C1 50.3726 6.37258 45 13 45H41"
                />
              </svg>
              <div class="grid gap-2 xl:gap-0">
                <h2
                  class="flex items-center text-[1.5rem] leading-16 tracking-tighter text-zinc-50 xl:text-[2rem] xl:leading-24 2xl:text-[2.5rem] 2xl:leading-24"
                >
                  ${m.t("praxis.t1")}
                </h2>
                <p class="text-default text-balance">
                  ${m.t("praxis.p1")}
                </p>
              </div>
            </div>
            <div class="praxis">
              <svg
                class="size-16 shrink-0 xl:size-24"
                width="82"
                height="66"
                viewBox="0 0 82 66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 23C31.1503 23 41 13.1503 41 1H1V23H19Z" />
                <path d="M63 23C50.8497 23 41 13.1503 41 1H81V23H63Z" />
                <path d="M19 23C31.1503 23 41 32.8497 41 45H1V23H19Z" />
                <path d="M63 23C50.8497 23 41 32.8497 41 45H81V23H63Z" />
                <path d="M41 65H11V57H29C33.4183 57 37 53.4183 37 49V45H41" />
                <path d="M41 65H71V57H53C48.5817 57 45 53.4183 45 49V45H41" />
              </svg>
              <div class="grid gap-2 xl:gap-0">
                <h2
                  class="flex items-center text-[1.5rem] leading-16 tracking-tighter text-zinc-50 xl:text-[2rem] xl:leading-24 2xl:text-[2.5rem] 2xl:leading-24"
                >
                  ${m.t("praxis.t2")}
                </h2>
                <p class="text-default text-balance">
                  ${m.t("praxis.p2")}
                </p>
              </div>
            </div>
          </div>
          <marquee-element
            reverse
            star="fill-brand-400"
            items="Design Engineering, Product Design, User Experience"
          ></marquee-element>
        </div>
      </section>
    `}createRenderRoot(){return this}};ch([L({type:String})],Io.prototype,"lang",2);Io=ch([ie("praxis-section")],Io);function Ms(s){let e=document.querySelector(`meta[name="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("name",s),document.head.appendChild(e)),e}function eu(s){let e=document.querySelector(`meta[property="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("property",s),document.head.appendChild(e)),e}function m1(s){const e=s.replace(/\/+$/,"")||"/";return e==="/"||e.endsWith("/index.html")?"home":e.endsWith("/projects")||e.endsWith("/projects.html")?"projects":e.endsWith("/last-project")||e.endsWith("/last-project.html")?"lastProject":e.endsWith("/404")||e.endsWith("/404.html")?"404":"home"}function tu(s){const e=m.t.bind(m),t=e("seo.common.description"),i=e("seo.common.keywords");switch(s){case"projects":return{title:e("seo.projects.title"),description:t,keywords:[i,e("seo.projects.keywords")].filter(Boolean).join(", ")};case"lastProject":return{title:e("seo.lastProject.title"),description:t,keywords:[i,e("seo.lastProject.keywords")].filter(Boolean).join(", ")};case"404":return{title:e("seo.404.title"),description:t,keywords:i};case"home":default:return{title:e("seo.home.title"),description:t,keywords:i}}}function iu(s){document.title=s.title,Ms("description").setAttribute("content",s.description),Ms("keywords").setAttribute("content",s.keywords),eu("og:title").setAttribute("content",s.title),eu("og:description").setAttribute("content",s.description),Ms("twitter:title").setAttribute("content",s.title),Ms("twitter:description").setAttribute("content",s.description)}function nu(){const s=m1(window.location.pathname);iu(tu(s)),m.on("languageChanged",()=>{iu(tu(s))})}typeof window<"u"&&document.readyState!=="loading"?nu():typeof window<"u"&&document.addEventListener("DOMContentLoaded",()=>nu(),{once:!0});const _1="/src/4f3f0c.png";var v1=Object.defineProperty,b1=Object.getOwnPropertyDescriptor,uh=(s,e,t,i)=>{for(var n=i>1?void 0:i?b1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&v1(e,t,n),n};let No=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}handleCoverImage(){const s=document.querySelector("#cover-image");s&&oe.matchMedia().add("(min-width: 1024px)",()=>{oe.to(s,{scrollTrigger:{trigger:"#about",start:"top 20%",end:"bottom 20%",scrub:2},y:"-5rem",ease:"none"})})}firstUpdated(){this.handleCoverImage()}render(){return D` <div
      id="about"
      class="relative grid overflow-hidden bg-linear-to-b from-zinc-900 to-zinc-950 lg:grid-cols-2 lg:rounded-4xl"
    >
      <div
        class="absolute h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:block"
      ></div>
      <div class="flex flex-col p-6 lg:p-16 lg:pe-0">
        <p class="text-default mb-4 text-balance lg:-mt-2">
          ${ci(m.t("twyne.about.p2"))}
        </p>
        <p class="text-default text-pretty">
          ${ci(m.t("twyne.about.p1"))}
        </p>
        <ul
          class="mt-auto hidden text-[.75rem] leading-none *:border-b *:border-zinc-800 *:py-6 lg:block lg:text-[1rem]"
        >
          <li class="flex justify-between align-baseline">
            <span> ${m.t("twyne.about.details.company")} </span>
            <span class="text-right text-zinc-50">
              ${m.t("twyne.about.details.companyValue")}
            </span>
          </li>
          <li class="flex justify-between align-baseline">
            <span> ${m.t("twyne.about.details.industry")} </span>
            <span class="text-right text-zinc-50">
              ${m.t("twyne.about.details.industryValue")}
            </span>
          </li>
          <li class="flex justify-between align-baseline">
            <span> ${m.t("twyne.about.details.product")} </span>
            <span class="text-right text-zinc-50">
              ${m.t("twyne.about.details.productValue")}
            </span>
          </li>
          <li class="flex justify-between align-baseline">
            <span> ${m.t("twyne.about.details.contributions")} </span>
            <span
              class="inline-flex gap-2 text-right align-baseline text-zinc-50"
            >
              <span> ${m.t("twyne.about.details.contribution1")} </span>
              <span class="text-zinc-400">/</span>
              <span class="hidden xl:flex">
                ${m.t("twyne.about.details.contribution2")}
              </span>
              <span class="hidden text-zinc-400 xl:flex">/</span>
              <span> ${m.t("twyne.about.details.contribution3")} </span>
            </span>
          </li>
        </ul>
      </div>
      <div
        class="relative flex aspect-square overflow-hidden lg:aspect-[3/4] xl:aspect-square"
      >
        <img
          src="${_1}"
          id="cover-image"
          loading="lazy"
          decoding="async"
          alt="Twyne about cover"
          class="absolute top-0 left-6 flex-none rounded-ss-md shadow-[0px_0px_48px_-12px_var(--color-zinc-950)] lg:top-16 lg:left-16 lg:max-w-none lg:rounded-ss-lg"
        />
        <progressive-blur
          class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-zinc-950 to-transparent"
        ></progressive-blur>
      </div>
    </div>`}createRenderRoot(){return this}};uh([L({type:String})],No.prototype,"lang",2);No=uh([ie("twyne-about")],No);var y1=Object.defineProperty,x1=Object.getOwnPropertyDescriptor,dh=(s,e,t,i)=>{for(var n=i>1?void 0:i?x1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&y1(e,t,n),n};oe.registerPlugin(Q);let Fo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.cleanupAnimation()}setupSignatureAnimation(){if(!this.signElement)return;const s=this.signElement.querySelectorAll("path");this.animation=oe.from(s,{scrollTrigger:{trigger:this.signElement,start:"100% 100%",toggleActions:"play none none reverse"},duration:.75,stagger:.75,drawSVG:!1})}cleanupAnimation(){this.animation&&(this.animation.kill(),this.animation=void 0)}firstUpdated(s){this.signElement=this.querySelector("#sign"),this.setupSignatureAnimation()}renderSignature(){return D`
      <svg
        id="sign"
        class="stroke-brand-400 mt-2 rotate-21"
        width="44"
        height="67"
        viewBox="0 0 44 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.622 26.2432C21.3514 21.7806 26.8467 14.2637 26.8467 14.2637L24.3142 20.9771C22.2556 25.7528 20.6914 30.708 18.6864 35.4888C16.8732 39.8121 13.9681 45.3093 12.0938 48.2719C10.2195 51.2345 5.20238 56.9493 4.7375 53.4575C4.51176 51.7619 5.98672 46.8824 8.83354 42.6494C11.6804 38.4164 18.3776 29.4011 24.7806 25.0562C32.0957 20.0925 40.026 12.6061 40.6384 8.03106C42.2438 -3.96201 21.0414 0.396133 1.82617 23.5558"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.0068 65.5502C25.5655 61.1839 21.8028 42.839 27.25 23.3022C28.2281 19.7942 29.5032 16.2477 31.2288 12.7368C30.2319 15.3528 27.6369 24.4559 30.9257 27.8938C34.2144 31.3317 40.2681 27.7068 42.8838 25.4646"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `}renderContent(){return D`
      <h2
        class="mt-16 mb-4 font-mono text-[0.75rem] leading-none font-semibold tracking-[0.05em] text-zinc-400 uppercase"
      >
        ${m.t("twyne.conclusion.t1")}
      </h2>
      <p class="text-default text-zinc-50">
        ${m.t("twyne.conclusion.p1")}
      </p>
      <p class="text-default text-zinc-50">
        ${m.t("twyne.conclusion.p2")}
      </p>
      <p class="text-default text-zinc-50">
        ${m.t("twyne.conclusion.p3")}
      </p>
    `}render(){return D`
      <section id="conclusion">
        <div class="container grid-cols-4 px-6 pt-24 lg:grid lg:pt-32">
          <div
            class="relative col-span-2 col-start-2 flex aspect-square flex-col items-center justify-center gap-8 text-center text-[1.25rem] leading-loose text-balance text-zinc-300 2xl:text-[1.5rem]"
          >
            ${this.renderContent()} ${this.renderSignature()}
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};dh([L({type:String})],Fo.prototype,"lang",2);Fo=dh([ie("twyne-conclusion")],Fo);var w1=Object.defineProperty,C1=Object.getOwnPropertyDescriptor,hh=(s,e,t,i)=>{for(var n=i>1?void 0:i?C1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&w1(e,t,n),n};let Uo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return D`
      <section id="goal" class="container px-6 py-24 lg:p-24 2xl:p-32">
        <div class="grid-cols-4 justify-center lg:grid">
          <div
            class="col-span-2 col-start-2 flex flex-col justify-center xl:aspect-square"
          >
            <h2
              class="mb-10 text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem] 2xl:text-[3rem]"
            >
              ${m.t("twyne.goal.t1")}
            </h2>
            <p class="text-default mb-8 leading-loose">
              ${ci(m.t("twyne.goal.p1"))}
            </p>
            <p class="text-default leading-loose">
              ${m.t("twyne.goal.p2")}
            </p>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};hh([L({type:String})],Uo.prototype,"lang",2);Uo=hh([ie("twyne-goal")],Uo);const S1="/src/3d9806.svg";var $1=Object.defineProperty,P1=Object.getOwnPropertyDescriptor,fh=(s,e,t,i)=>{for(var n=i>1?void 0:i?P1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&$1(e,t,n),n};let Ho=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return D`
      <div
        class="flex flex-col items-start px-5 py-12 pt-8 xl:gap-2 xl:px-14 xl:py-14 xl:pt-16"
      >
        <div class="flex items-center gap-6">
          <img
            src="${S1}"
            class="h-14 border-r border-zinc-700 pr-6"
            alt="Twyne"
          />
          <h1
            class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
          >
            ${m.t("twyne.t2")}
          </h1>
        </div>
      </div>
    `}createRenderRoot(){return this}};fh([L({type:String})],Ho.prototype,"lang",2);Ho=fh([ie("twyne-header")],Ho);var k1=Object.defineProperty,T1=Object.getOwnPropertyDescriptor,ph=(s,e,t,i)=>{for(var n=i>1?void 0:i?T1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&k1(e,t,n),n};let Vo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=m.t("twyne.impact.l1",{returnObjects:!0});return D`
      <div
        id="impact"
        class="container grid gap-10 px-6 pt-24 xl:px-24 xl:pt-32 2xl:px-32"
      >
        <h2
          class="text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem] 2xl:text-[3rem]"
        >
          ${ci(m.t("twyne.impact.t1"))}
        </h2>
        <div
          class="grid items-center gap-px overflow-hidden rounded-4xl lg:grid-cols-3"
        >
          <div class="grid gap-2 bg-zinc-900 py-12 text-center">
            <h3
              class="text-[2rem] leading-none font-semibold tracking-tighter text-zinc-50"
            >
              ${m.t("twyne.numbers.t1")}
            </h3>
            <p class="text-base/none text-pretty">
              ${m.t("twyne.numbers.p1")}
            </p>
          </div>
          <div class="grid gap-2 bg-zinc-900 py-12 text-center">
            <h3
              class="text-[2rem] leading-none font-semibold tracking-tighter text-zinc-50"
            >
              ${m.t("twyne.numbers.t2")}
            </h3>
            <p class="text-base/none text-pretty">
              ${m.t("twyne.numbers.p2")}
            </p>
          </div>
          <div class="grid gap-2 bg-zinc-900 py-12 text-center">
            <h3
              class="text-[2rem] leading-none font-semibold tracking-tighter text-zinc-50"
            >
              ${m.t("twyne.numbers.t3")}
            </h3>
            <p class="text-base/none text-pretty">
              ${m.t("twyne.numbers.p3")}
            </p>
          </div>
        </div>
        <ul
          class="grid gap-4 text-sm leading-loose text-zinc-50 lg:grid-cols-2 lg:gap-0 lg:text-base 2xl:text-[1.25rem]"
        >
          ${s.map(e=>D`<li
                class="flex items-baseline gap-2 text-balance before:text-zinc-700 before:content-['✦'] lg:gap-4"
              >
                ${e}
              </li>`)}
        </ul>
      </div>
    `}createRenderRoot(){return this}};ph([L({type:String})],Vo.prototype,"lang",2);Vo=ph([ie("twyne-impact")],Vo);const O1="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='1.75'/%3e%3c/svg%3e";var E1=Object.defineProperty,A1=Object.getOwnPropertyDescriptor,Pl=(s,e,t,i)=>{for(var n=i>1?void 0:i?A1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&E1(e,t,n),n};let pa=class extends ui(G){constructor(){super(),this.more=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}toggleMore(){this.more=!this.more}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}changeLang(){const e=m.language==="en"?"pt":"en";m.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){oe.from("header > *",{y:-64}),window.addEventListener("scroll",()=>{this.more=!1}),oe.to("header",{scrollTrigger:{trigger:".hero",start:"60 60",end:"60 0",toggleActions:"play none none reverse",scrub:1},outline:"1px solid hsla(0 0 100% / 0.075)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return D`
      <header
        class="fixed inset-x-0 z-40 w-full bg-linear-to-t from-zinc-950 to-zinc-950/80 backdrop-blur md:py-3 lg:fixed"
      >
        <div class="flex items-center lg:container lg:grid lg:grid-cols-4">
          <nav class="lg:hidden">
            <ul
              id="anchors"
              class="${this.more?"h-dvh":"h-0 *:opacity-0"} fixed inset-0 flex w-dvw flex-col justify-center overflow-hidden bg-zinc-950 duration-500 *:transition-all"
            >
              <li>
                <span
                  class="flex h-20 items-center px-5 text-[2rem] tracking-tighter text-zinc-400"
                >
                  Menu
                </span>
              </li>
              <li>
                <mobile-item href="/" label="Home" index="01"></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.github.url")}"
                  label="${m.t("links.github.label")}"
                  index="02"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.linkedin.url")}"
                  label="${m.t("links.linkedin.label")}"
                  index="03"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${m.t("links.email.url")}"
                  label="${m.t("links.email.label")}"
                  index="hello@pmjr.cc"
                ></mobile-item>
              </li>
              <div class="absolute right-4 bottom-4">
                <button-lang
                  @click=${()=>this.changeLang()}
                  label=${this.lang==="pt"?"PT · BR":"EN · US"}
                  title="${this.lang==="en"?"Mudar para português":"Change to english"}"
                ></button-lang>
              </div>
            </ul>
          </nav>
          <div class="flex items-center">
            <button
              @click=${()=>this.getPreviousPage()}
              class="ms-2 flex size-8 cursor-pointer items-center justify-center rounded-full opacity-50 transition-all duration-[200ms] hover:bg-zinc-50/10 hover:opacity-100 active:scale-95 active:bg-zinc-50/20"
              title="Go back to homepage"
            >
              <img
                src="${O1}"
                class="transition-all duration-[200ms]"
                alt="Go back"
              />
            </button>
            <mail-button
              @click=${()=>this.copyEmail()}
              @mouseleave=${()=>this.copyEmailReset()}
              label="hello@pmjr.cc"
              hover="${this.lang==="en"?"Click to copy":"Copiar e-mail"}"
            ></mail-button>
          </div>
          <button
            class="menu-toggle ${this.more?"menu-toggle--close":""} ms-auto me-4 lg:hidden"
            @click=${()=>this.toggleMore()}
          >
            <span class="text-[.75rem] font-semibold uppercase"> Menu </span>
          </button>
          <nav class="col-span-2">
            <ul id="anchors" class="hidden justify-center px-0 lg:flex">
              <li class="spy-link">
                <menu-item
                  href="#goal"
                  label="${m.t("twyne.menu.goal")}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#proposal"
                  label="${m.t("twyne.menu.proposal")}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#impact"
                  label="${m.t("twyne.menu.impact")}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#mobile"
                  label="${m.t("twyne.menu.mobile")}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#conclusion"
                  label="${m.t("twyne.menu.final")}"
                ></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden items-center justify-end gap-1 lg:flex">
            <a
              class="cta-button px-3.5 pt-2 pb-2.5 text-[.875rem]"
              href="${m.t("links.projects.url")}"
            >
              ${m.t("featured.button")}
            </a>
            <languages-dropdown></languages-dropdown>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};Pl([L({type:Boolean})],pa.prototype,"more",2);Pl([L({type:String})],pa.prototype,"lang",2);pa=Pl([ie("twyne-menu")],pa);const gh="/src/0f79a9.png",mh="/src/e2bfcc.png",_h="/src/4cb65f.png",vh="/src/04ff88.png",bh="/src/df5b53.png";var L1=Object.defineProperty,M1=Object.getOwnPropertyDescriptor,yh=(s,e,t,i)=>{for(var n=i>1?void 0:i?M1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&L1(e,t,n),n};let Bo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}screensMotion(){document.querySelectorAll("[data-parallax-layers]").forEach(s=>{let e=oe.timeline({scrollTrigger:{trigger:"#mobile-images",start:"0% 100%",end:"100% 0%",scrub:0}});[{layer:"1",ys:"30%",ye:"0%",opacity:.5},{layer:"2",ys:"20%",ye:"5%",opacity:.75},{layer:"3",ys:"10%",ye:"10%",opacity:1},{layer:"4",ys:"20%",ye:"5%",opacity:.75},{layer:"5",ys:"30%",ye:"0%",opacity:.5}].forEach((i,n)=>{e.fromTo(s.querySelectorAll(`[data-parallax-layer="${i.layer}"]`),{y:i.ys,opacity:i.opacity},{y:i.ye,opacity:1,ease:"none"},n===0?void 0:"<")})})}firstUpdated(s){this.screensMotion()}render(){return D`
      <section id="mobile" class="mt-24 py-24 xl:mt-32 xl:py-32">
        <h2
          class="mb-16 text-center text-[2.5rem] leading-normal tracking-tighter text-zinc-50 xl:mb-32 2xl:text-[3rem]"
        >
          ${ci(m.t("twyne.mobile.t1"))}
        </h2>
        <div
          id="mobile-images"
          class="mx-auto grid max-w-[1920px] grid-cols-5 items-center justify-center gap-4 px-4"
          data-parallax-layers
        >
          <img
            src="${mh}"
            data-parallax-layer="1"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 1"
          />
          <img
            src="${gh}"
            data-parallax-layer="2"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 2"
          />
          <img
            src="${_h}"
            data-parallax-layer="3"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 3"
          />
          <img
            src="${vh}"
            data-parallax-layer="4"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 4"
          />
          <img
            src="${bh}"
            data-parallax-layer="5"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 5"
          />
        </div>
      </section>
    `}createRenderRoot(){return this}};yh([L({type:String})],Bo.prototype,"lang",2);Bo=yh([ie("twyne-mobile")],Bo);var z1=Object.defineProperty,D1=Object.getOwnPropertyDescriptor,kl=(s,e,t,i)=>{for(var n=i>1?void 0:i?D1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&z1(e,t,n),n};let ga=class extends G{constructor(){super(...arguments),this.lang=m.language,this.currentIndex=0,this.abortController=new AbortController,this.handleLanguageChange=()=>{this.lang=m.language},this.handlePrev=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateMobScreens())},this.handleNext=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateMobScreens())}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.abortController.abort()}firstUpdated(){this.initCarousel()}updated(s){s.has("lang")&&this.updateComplete.then(()=>{this.initCarousel()})}initCarousel(){if(this.abortController.abort(),this.abortController=new AbortController,this.screens=this.querySelectorAll(".mob-carrossel img"),!this.screens.length)return;this.currentIndex=Math.min(this.currentIndex,this.screens.length-1),this.updateMobScreens=()=>{this.screens.forEach((i,n)=>{const r=n===this.currentIndex;oe.to(i,{opacity:r?1:0,y:r?0:100,duration:.4,delay:r?.2:0,ease:"power2.out",onStart:()=>{r&&i.classList.remove("invisible")},onComplete:()=>{r||i.classList.add("invisible")}})})},this.updateMobScreens();const s=this.querySelector("button[data-prev]"),e=this.querySelector("button[data-next]"),{signal:t}=this.abortController;s&&e&&(s.addEventListener("click",this.handlePrev,{signal:t}),e.addEventListener("click",this.handleNext,{signal:t}))}render(){var s;return D`
      <section class="relative mt-24 px-2 xl:mt-32">
        <div class="container">
          <h2
            class="mb-10 text-center text-[2rem] leading-normal tracking-tighter text-zinc-50 xl:text-[2.5rem] 2xl:text-[3rem]"
          >
            ${ci(m.t("twyne.mobile.t1"))}
          </h2>

          <div class="mob-carrossel relative overflow-hidden">
            <img
              src="${gh}"
              class="mobile-screen relative"
              loading="lazy"
              alt="Mobile screen"
            />
            <img
              src="${mh}"
              class="mobile-screen invisible absolute top-0 left-0"
              loading="lazy"
              alt="Mobile screen"
            />
            <img
              src="${_h}"
              class="mobile-screen invisible absolute top-0 left-0"
              loading="lazy"
              alt="Mobile screen"
            />
            <img
              src="${vh}"
              class="mobile-screen invisible absolute top-0 left-0"
              loading="lazy"
              alt="Mobile screen"
            />
            <img
              src="${bh}"
              class="mobile-screen invisible absolute top-0 left-0"
              loading="lazy"
              alt="Mobile screen"
            />
          </div>

          <div class="absolute inset-0">
            <div
              class="sticky -inset-x-4 top-[calc(100dvh-15rem)] isolate flex h-60 items-end justify-center after:absolute after:inset-0 after:z-10 after:bg-linear-to-t after:from-zinc-950 after:content-['']"
            >
              <progressive-blur></progressive-blur>

              <div class="relative z-20 flex gap-px pb-2">
                <button
                  data-prev
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 ps-5 pe-4 text-[.75rem] leading-none tracking-[.05em] text-zinc-50 uppercase transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] leading-none font-medium tracking-[.05em] uppercase"
                >
                  ${this.currentIndex+1} / ${((s=this.screens)==null?void 0:s.length)??5}
                </span>

                <button
                  data-next
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 ps-4 pe-5 text-[.75rem] leading-none tracking-[.05em] text-zinc-50 uppercase transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};kl([L({type:String})],ga.prototype,"lang",2);kl([L({type:Number})],ga.prototype,"currentIndex",2);ga=kl([ie("mobile-screens")],ga);const R1="/src/6ab55e.png",j1="/src/b0e17e.png",I1="/src/96ef6f.png",N1="/src/2bf8a7.png",F1="/src/2eab02.png",U1="/src/a54df0.png",H1="/src/b3d826.png",V1="/src/adef9e.png",B1="/src/120066.png",q1="/src/908f2c.png",W1="/src/20a18e.png";var Y1=Object.defineProperty,X1=Object.getOwnPropertyDescriptor,xh=(s,e,t,i)=>{for(var n=i>1?void 0:i?X1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&Y1(e,t,n),n};oe.registerPlugin(Q);let qo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}renderProposalList(){const s=m.t("twyne.proposal.l1",{returnObjects:!0});return D`
      <ul
        class="flex flex-col gap-4 leading-loose text-zinc-50 lg:gap-0 2xl:text-[1.25rem]"
      >
        ${s.map(e=>D`
            <li
              class="flex items-baseline gap-2 text-balance before:text-zinc-700 before:content-['✦'] lg:gap-4"
            >
              ${e}
            </li>
          `)}
      </ul>
    `}renderComponentGrid(){return D`
      <div class="flex flex-col items-center gap-2 lg:gap-4">
        <div class="flex gap-4">
          <div class="hidden flex-col gap-4 lg:flex">
            <img
              src="${F1}"
              height="425"
              width="216"
              loading="lazy"
              alt="Component B1"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
            <img
              src="${H1}"
              height="216"
              width="216"
              loading="lazy"
              alt="Component B3"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
          </div>
          <img
            src="${U1}"
            height="660"
            width="560"
            loading="lazy"
            alt="Component B2"
            class="w-[calc(560px*0.8)] xl:w-auto"
          />
        </div>
        <img
          src="${V1}"
          height="448"
          width="792"
          loading="lazy"
          alt="Component B4"
          class="w-[calc(792px*0.8)] xl:w-auto"
        />
        <div class="hidden gap-4 lg:flex">
          <img
            src="${W1}"
            height="218"
            width="280"
            loading="lazy"
            alt="Component B7"
            class="w-[calc(280px*0.8)] xl:w-auto"
          />
          <img
            src="${B1}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B5"
            class="w-[calc(240px*0.8)] xl:w-auto"
          />
          <img
            src="${q1}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B6"
            class="w-[calc(240px*0.8)] xl:w-auto"
          />
        </div>
      </div>
    `}renderComponentColumn(){return D`
      <div class="grid gap-2 lg:gap-4">
        <img
          src="${R1}"
          height="264"
          width="480"
          loading="lazy"
          alt="Component A1"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${j1}"
          height="248"
          width="480"
          loading="lazy"
          alt="Component A2"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${I1}"
          height="492"
          width="480"
          loading="lazy"
          alt="Component A3"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${N1}"
          height="296"
          width="480"
          loading="lazy"
          alt="Component A4"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
      </div>
    `}renderComponentsSection(){return D`
      <div
        id="components"
        class="relative flex flex-col items-center justify-center gap-2 px-2 lg:min-h-[1088px] lg:flex-row lg:gap-4 lg:p-0 xl:min-h-[1348px]"
      >
        <style>
          #components img {
            border-radius: 0.25rem;
          }
        </style>
        ${this.renderComponentGrid()} ${this.renderComponentColumn()}
      </div>
    `}render(){return D`
      <section id="proposal">
        <div
          class="container hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:block"
        ></div>
        <div class="container rounded-t-4xl px-6 pb-24 lg:py-24 2xl:p-32">
          <h2
            class="mb-10 text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem] 2xl:text-[3rem]"
          >
            ${m.t("twyne.proposal.t1")}
          </h2>
          <div class="flex grid-cols-2 flex-col gap-8 lg:grid">
            ${this.renderProposalList()}
            <p class="text-default text-pretty">
              ${m.t("twyne.proposal.p1")}
            </p>
          </div>
        </div>
        ${this.renderComponentsSection()}
        <twyne-impact></twyne-impact>
      </section>
    `}createRenderRoot(){return this}};xh([L({type:String})],qo.prototype,"lang",2);qo=xh([ie("twyne-proposal")],qo);const G1="/src/2f4591.png",K1="/src/367502.png",J1="/src/014eec.png";var Z1=Object.defineProperty,Q1=Object.getOwnPropertyDescriptor,Tl=(s,e,t,i)=>{for(var n=i>1?void 0:i?Q1(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&Z1(e,t,n),n};let ma=class extends G{constructor(){super(...arguments),this.lang=m.language,this.currentIndex=0,this.abortController=new AbortController,this.handleLanguageChange=()=>{this.lang=m.language},this.handlePrev=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateScreens())},this.handleNext=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateScreens())}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.abortController.abort()}firstUpdated(){this.initCarousel()}updated(s){s.has("lang")&&this.updateComplete.then(()=>{this.initCarousel()})}initCarousel(){if(this.abortController.abort(),this.abortController=new AbortController,this.screens=this.querySelectorAll(".carrossel img"),!this.screens.length)return;this.currentIndex=Math.min(this.currentIndex,this.screens.length-1),this.updateScreens=()=>{this.screens.forEach((i,n)=>{const r=n===this.currentIndex;oe.to(i,{opacity:r?1:0,y:r?0:100,duration:.4,delay:r?.2:0,ease:"power2.out",onStart:()=>{r&&i.classList.remove("invisible")},onComplete:()=>{r||i.classList.add("invisible")}})})},this.updateScreens();const s=this.querySelector("button[data-prev]"),e=this.querySelector("button[data-next]"),{signal:t}=this.abortController;s&&e&&(s.addEventListener("click",this.handlePrev,{signal:t}),e.addEventListener("click",this.handleNext,{signal:t}))}render(){var s;return D`
      <section class="relative mt-24 xl:mt-32">
        <div class="container">
          <div class="carrossel relative overflow-hidden">
            <img
              src="${G1}"
              width="1728"
              height="976"
              loading="lazy"
              class="relative rounded-[.5rem]"
              alt="Twyne screen 1"
            />
            <img
              src="${K1}"
              width="1728"
              height="976"
              loading="lazy"
              class="invisible absolute top-0 left-0 rounded-[.5rem]"
              alt="Twyne screen 2"
            />
            <img
              src="${J1}"
              width="1728"
              height="976"
              loading="lazy"
              class="invisible absolute top-0 left-0 rounded-[.5rem]"
              alt="Twyne screen 3"
            />
          </div>

          <div class="absolute inset-0">
            <div
              class="sticky top-[calc(100dvh-8rem)] isolate flex h-32 items-end justify-center after:absolute after:inset-0 after:z-10 after:content-['']"
            >
              <div class="relative z-20 flex gap-px mb-4 backdrop-blur-md rounded-full shadow-xl shadow-zinc-950/50">
                <button
                  data-prev
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 ps-5 pe-4 text-[.75rem] leading-none tracking-[.05em] text-zinc-50 uppercase transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] leading-none font-medium tracking-[.05em] uppercase"
                >
                  ${this.currentIndex+1} - ${((s=this.screens)==null?void 0:s.length)??3}
                </span>

                <button
                  data-next
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 ps-4 pe-5 text-[.75rem] leading-none tracking-[.05em] text-zinc-50 uppercase transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};Tl([L({type:String})],ma.prototype,"lang",2);Tl([L({type:Number})],ma.prototype,"currentIndex",2);ma=Tl([ie("twyne-screens")],ma);

var xh=Object.defineProperty;var wh=(s,e,t)=>e in s?xh(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var D=(s,e,t)=>wh(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const B=s=>typeof s=="string",fr=()=>{let s,e;const t=new Promise((i,n)=>{s=i,e=n});return t.resolve=s,t.reject=e,t},El=s=>s==null?"":""+s,Ch=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},Sh=/###/g,Al=s=>s&&s.indexOf("###")>-1?s.replace(Sh,"."):s,Ll=s=>!s||B(s),kr=(s,e,t)=>{const i=B(e)?e.split("."):e;let n=0;for(;n<i.length-1;){if(Ll(s))return{};const r=Al(i[n]);!s[r]&&t&&(s[r]=new t),Object.prototype.hasOwnProperty.call(s,r)?s=s[r]:s={},++n}return Ll(s)?{}:{obj:s,k:Al(i[n])}},Ml=(s,e,t)=>{const{obj:i,k:n}=kr(s,e,Object);if(i!==void 0||e.length===1){i[n]=t;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=kr(s,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=kr(s,o,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=t},$h=(s,e,t,i)=>{const{obj:n,k:r}=kr(s,e,Object);n[r]=n[r]||[],n[r].push(t)},Ws=(s,e)=>{const{obj:t,k:i}=kr(s,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},Ph=(s,e,t)=>{const i=Ws(s,t);return i!==void 0?i:Ws(e,t)},ru=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?B(s[i])||s[i]instanceof String||B(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):ru(s[i],e[i],t):s[i]=e[i]);return s},En=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var kh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Th=s=>B(s)?s.replace(/[&<>"'\/]/g,e=>kh[e]):s;class Oh{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Eh=[" ",",","?","!",";"],Ah=new Oh(20),Lh=(s,e,t)=>{e=e||"",t=t||"";const i=Eh.filter(o=>e.indexOf(o)<0&&t.indexOf(o)<0);if(i.length===0)return!0;const n=Ah.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(s);if(!r){const o=s.indexOf(t);o>0&&!n.test(s.substring(0,o))&&(r=!0)}return r},Zo=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;const i=e.split(t);let n=s;for(let r=0;r<i.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<i.length;++l)if(l!==r&&(a+=t),a+=i[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}n=o}return n},Ys=s=>s==null?void 0:s.replace("_","-"),Mh={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){var t,i;(i=(t=console==null?void 0:console[s])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Xs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Mh,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,n){return n&&!this.debug?null:(B(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Xs(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Xs(this.logger,e)}}var ni=new Xs;class bo{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(t)||0;this.observers[i].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...i])})}}class zl extends bo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var c,u;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):B(i)&&r?a.push(...i.split(r)):a.push(i)));const l=Ws(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!o||!B(i)?l:Zo((u=(c=this.data)==null?void 0:c[e])==null?void 0:u[t],i,r)}addResource(e,t,i,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),n=t,t=a[1]),this.addNamespaces(t),Ml(this.data,a,n),r.silent||this.emit("added",e,t,i,n)}addResources(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(B(i[r])||Array.isArray(i[r]))&&this.addResource(e,t,r,i[r],{silent:!0});n.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),n=i,i=t,t=a[1]),this.addNamespaces(t);let l=Ws(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?ru(l,i,r):l={...l,...i},Ml(this.data,a,l),o.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(n=>t[n]&&Object.keys(t[n]).length>0)}toJSON(){return this.data}}var su={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,n){return s.forEach(r=>{var o;e=((o=this.processors[r])==null?void 0:o.process(e,t,i,n))??e}),e}};const Dl={},Rl=s=>!B(s)&&typeof s!="boolean"&&typeof s!="number";class Gs extends bo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Ch(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ni.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Lh(e,i,n);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:B(r)?[r]:r};const c=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(n)}return{key:e,namespaces:B(r)?[r]:r}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],c=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((c==null?void 0:c.toLowerCase())==="cimode"){if(u){const M=t.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${M}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${M}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:o}const d=this.resolve(e,t);let h=d==null?void 0:d.res;const f=(d==null?void 0:d.usedKey)||o,g=(d==null?void 0:d.exactUsedKey)||o,p=["[object Number]","[object Function]","[object RegExp]"],_=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,b=t.count!==void 0&&!B(t.count),x=Gs.hasDefaultValue(t),w=b?this.pluralResolver.getSuffix(c,t.count,t):"",S=t.ordinal&&b?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",P=b&&!t.ordinal&&t.count===0,C=P&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${w}`]||t[`defaultValue${S}`]||t.defaultValue;let T=h;v&&!h&&x&&(T=C);const k=Rl(T),O=Object.prototype.toString.apply(T);if(v&&T&&k&&p.indexOf(O)<0&&!(B(_)&&Array.isArray(T))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const M=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,T,{...t,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(d.res=M,d.usedParams=this.getUsedParamsDetails(t),d):M}if(r){const M=Array.isArray(T),E=M?[]:{},V=M?g:f;for(const U in T)if(Object.prototype.hasOwnProperty.call(T,U)){const I=`${V}${r}${U}`;x&&!h?E[U]=this.translate(I,{...t,defaultValue:Rl(C)?C[U]:void 0,joinArrays:!1,ns:a}):E[U]=this.translate(I,{...t,joinArrays:!1,ns:a}),E[U]===I&&(E[U]=T[U])}h=E}}else if(v&&B(_)&&Array.isArray(h))h=h.join(_),h&&(h=this.extendTranslation(h,e,t,i));else{let M=!1,E=!1;!this.isValidLookup(h)&&x&&(M=!0,h=C),this.isValidLookup(h)||(E=!0,h=o);const U=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:h,I=x&&C!==h&&this.options.updateMissing;if(E||M||I){if(this.logger.log(I?"updateKey":"missingKey",c,l,o,I?C:h),r){const Y=this.resolve(o,{...t,keySeparator:!1});Y&&Y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let N=[];const j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&j&&j[0])for(let Y=0;Y<j.length;Y++)N.push(j[Y]);else this.options.saveMissingTo==="all"?N=this.languageUtils.toResolveHierarchy(t.lng||this.language):N.push(t.lng||this.language);const Z=(Y,y,K)=>{var ge;const Te=x&&K!==h?K:U;this.options.missingKeyHandler?this.options.missingKeyHandler(Y,l,y,Te,I,t):(ge=this.backendConnector)!=null&&ge.saveMissing&&this.backendConnector.saveMissing(Y,l,y,Te,I,t),this.emit("missingKey",Y,l,y,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?N.forEach(Y=>{const y=this.pluralResolver.getSuffixes(Y,t);P&&t[`defaultValue${this.options.pluralSeparator}zero`]&&y.indexOf(`${this.options.pluralSeparator}zero`)<0&&y.push(`${this.options.pluralSeparator}zero`),y.forEach(K=>{Z([Y],o+K,t[`defaultValue${K}`]||C)})}):Z(N,o,C))}h=this.extendTranslation(h,e,t,d,i),E&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(E||M)&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,M?h:void 0))}return n?(d.res=h,d.usedParams=this.getUsedParamsDetails(t),d):h}extendTranslation(e,t,i,n,r){var c,u;var o=this;if((c=this.i18nFormat)!=null&&c.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=B(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(d){const g=e.match(this.interpolator.nestingRegexp);h=g&&g.length}let f=i.replace&&!B(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||n.usedLng,i),d){const g=e.match(this.interpolator.nestingRegexp),p=g&&g.length;h<p&&(i.nest=!1)}!i.lng&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var g=arguments.length,p=new Array(g),_=0;_<g;_++)p[_]=arguments[_];return(r==null?void 0:r[0])===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`),null):o.translate(...p,t)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=B(a)?[a]:a;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=su.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,n,r,o,a;return B(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,t),u=c.key;n=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=t.count!==void 0&&!B(t.count),f=h&&!t.ordinal&&t.count===0,g=t.context!==void 0&&(B(t.context)||typeof t.context=="number")&&t.context!=="",p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(_=>{var v,b;this.isValidLookup(i)||(a=_,!Dl[`${p[0]}-${_}`]&&((v=this.utils)!=null&&v.hasLoadedNamespace)&&!((b=this.utils)!=null&&b.hasLoadedNamespace(a))&&(Dl[`${p[0]}-${_}`]=!0,this.logger.warn(`key "${n}" for languages "${p.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach(x=>{var P;if(this.isValidLookup(i))return;o=x;const w=[u];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(w,u,x,_,t);else{let C;h&&(C=this.pluralResolver.getSuffix(x,t.count,t));const T=`${this.options.pluralSeparator}zero`,k=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(w.push(u+C),t.ordinal&&C.indexOf(k)===0&&w.push(u+C.replace(k,this.options.pluralSeparator)),f&&w.push(u+T)),g){const O=`${u}${this.options.contextSeparator}${t.context}`;w.push(O),h&&(w.push(O+C),t.ordinal&&C.indexOf(k)===0&&w.push(O+C.replace(k,this.options.pluralSeparator)),f&&w.push(O+T))}}let S;for(;S=w.pop();)this.isValidLookup(i)||(r=S,i=this.getResource(x,_,S,t))}))})}),{res:i,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var r;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(r=this.i18nFormat)!=null&&r.getResource?this.i18nFormat.getResource(e,t,i,n):this.resourceStore.getResource(e,t,i,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!B(e.replace);let n=i?e.replace:e;if(i&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const r of t)delete n[r]}return n}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class jl{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ni.create("languageUtils")}getScriptPartFromCode(e){if(e=Ys(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ys(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(B(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),B(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return B(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):B(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}const Il={zero:0,one:1,two:2,few:3,many:4,other:5},Nl={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class zh{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=ni.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Ys(e==="dev"?"en":e),n=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:n})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Nl;if(!e.match(/-|_/))return Nl;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,t)}return this.pluralRulesCache[r]=o,o}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(n=>`${t}${n}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((n,r)=>Il[n]-Il[r]).map(n=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${n}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,i);return n?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Fl=function(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Ph(s,e,t);return!r&&n&&B(t)&&(r=Zo(s,t,i),r===void 0&&(r=Zo(e,t,i))),r},Oo=s=>s.replace(/\$/g,"$$$$");class Dh{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ni.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:g,nestingSuffixEscaped:p,nestingOptionsSeparator:_,maxReplaces:v,alwaysFormat:b}=e.interpolation;this.escape=t!==void 0?t:Th,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?En(r):o||"{{",this.suffix=a?En(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?En(h):f||En("$t("),this.nestingSuffix=g?En(g):p||En(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=v||1e3,this.alwaysFormat=b!==void 0?b:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,n){var f;let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=g=>{if(g.indexOf(this.formatSeparator)<0){const b=Fl(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(b,void 0,i,{...n,...t,interpolationkey:g}):b}const p=g.split(this.formatSeparator),_=p.shift().trim(),v=p.join(this.formatSeparator).trim();return this.format(Fl(t,l,_,this.options.keySeparator,this.options.ignoreJSONStructure),v,i,{...n,...t,interpolationkey:_})};this.resetRegExp();const u=(n==null?void 0:n.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((f=n==null?void 0:n.interpolation)==null?void 0:f.skipOnVariables)!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Oo(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Oo(this.escape(g)):Oo(g)}].forEach(g=>{for(a=0;r=g.regex.exec(e);){const p=r[1].trim();if(o=c(p),o===void 0)if(typeof u=="function"){const v=u(e,r,n);o=B(v)?v:""}else if(n&&Object.prototype.hasOwnProperty.call(n,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),o="";else!B(o)&&!this.useRawValueToEscape&&(o=El(o));const _=g.safeValue(o);if(e=e.replace(r[0],_),d?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=r[0].length):g.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),g=h.match(/"/g);(((f==null?void 0:f.length)??0)%2===0&&!g||g.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(p){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,p),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!B(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const u=n[1].split(this.formatSeparator).map(d=>d.trim());n[1]=u.shift(),l=u,c=!0}if(r=t(a.call(this,n[1].trim(),o),o),r&&n[0]===e&&!B(r))return r;B(r)||(r=El(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,i.lng,{...i,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const Rh=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);e==="currency"&&n.indexOf(":")<0?t.currency||(t.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?t.range||(t.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();t[u]||(t[u]=c),c==="false"&&(t[u]=!1),c==="true"&&(t[u]=!0),isNaN(c)||(t[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},An=s=>{const e={};return(t,i,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=i+JSON.stringify(r);let a=e[o];return a||(a=s(Ys(i),n),e[o]=a),a(t)}};class jh{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ni.create("formatter"),this.options=e,this.formats={number:An((t,i)=>{const n=new Intl.NumberFormat(t,{...i});return r=>n.format(r)}),currency:An((t,i)=>{const n=new Intl.NumberFormat(t,{...i,style:"currency"});return r=>n.format(r)}),datetime:An((t,i)=>{const n=new Intl.DateTimeFormat(t,{...i});return r=>n.format(r)}),relativetime:An((t,i)=>{const n=new Intl.RelativeTimeFormat(t,{...i});return r=>n.format(r,i.range||"day")}),list:An((t,i)=>{const n=new Intl.ListFormat(t,{...i});return r=>n.format(r)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=An(t)}format(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{var d;const{formatName:c,formatOptions:u}=Rh(l);if(this.formats[c]){let h=a;try{const f=((d=n==null?void 0:n.formatParams)==null?void 0:d[n.interpolationkey])||{},g=f.locale||f.lng||n.locale||n.lng||i;h=this.formats[c](a,g,{...u,...n,...f})}catch(f){this.logger.warn(f)}return h}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const Ih=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class Nh extends bo{constructor(e,t,i){var r,o;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=ni.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],(o=(r=this.backend)==null?void 0:r.init)==null||o.call(r,i,n.backend,n)}queueLoad(e,t,i,n){const r={},o={},a={},l={};return e.forEach(c=>{let u=!0;t.forEach(d=>{const h=`${c}|${d}`;!i.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const n=e.split("|"),r=n[0],o=n[1];t&&this.emit("failedLoading",r,o,t),!t&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{$h(l.loaded,[r],o),Ih(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,n+1,r*2,o)},r);return}o(c,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();B(e)&&(e=this.languageUtils.toResolveHierarchy(e)),B(t)&&(t=[t]);const r=this.queueLoad(e,t,i,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),n=i[0],r=i[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${t}loaded namespace ${r} for language ${n}`,a),this.loaded(e,o,a)})}saveMissing(e,t,i,n,r){var l,c,u,d,h;let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((c=(l=this.services)==null?void 0:l.utils)!=null&&c.hasLoadedNamespace&&!((d=(u=this.services)==null?void 0:u.utils)!=null&&d.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((h=this.backend)!=null&&h.create){const f={...o,isUpdate:r},g=this.backend.create.bind(this.backend);if(g.length<6)try{let p;g.length===5?p=g(e,t,i,n,f):p=g(e,t,i,n),p&&typeof p.then=="function"?p.then(_=>a(null,_)).catch(a):a(null,p)}catch(p){a(p)}else g(e,t,i,n,a,f)}!e||!e[0]||this.store.addResource(e[0],t,i,n)}}}const Ul=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),B(s[1])&&(e.defaultValue=s[1]),B(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Hl=s=>{var e,t;return B(s.ns)&&(s.ns=[s.ns]),B(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),B(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),((t=(e=s.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s},gs=()=>{},Fh=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class Br extends bo{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Hl(e),this.services={},this.logger=ni,this.modules={external:[]},Fh(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(B(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const n=Ul();this.options={...n,...this.options,...Hl(t)},this.options.interpolation={...n.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?ni.init(r(this.modules.logger),this.options):ni.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=jh;const d=new jl(this.options);this.store=new zl(this.options.resources,this.options);const h=this.services;h.logger=ni,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new zh(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new Dh(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Nh(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),_=1;_<g;_++)p[_-1]=arguments[_];e.emit(f,...p)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Gs(this.services,this.options),this.translator.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),_=1;_<g;_++)p[_-1]=arguments[_];e.emit(f,...p)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=gs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=fr(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(d,h)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?c():setTimeout(c,0),l}loadResources(e){var r,o;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:gs;const n=B(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((n==null?void 0:n.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],l=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(d=>{d!=="cimode"&&a.indexOf(d)<0&&a.push(d)})};n?l(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(o=(r=this.options.preload)==null?void 0:r.forEach)==null||o.call(r,c=>l(c)),this.services.backendConnector.load(a,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(c)})}else i(null)}reloadResources(e,t,i){const n=fr();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=gs),this.services.backendConnector.reload(e,t,r=>{n.resolve(),i(r)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&su.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const n=fr();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},a=l=>{var u,d;!e&&!l&&this.services.languageDetector&&(l=[]);const c=B(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),(d=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||d.call(u,c)),this.loadResources(c,h=>{o(h,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,i){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=n.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const h=n.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(g=>`${l.keyPrefix}${h}${g}`):f=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,n.t(f,l)};return B(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=i,r}t(){var n;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(n=this.translator)==null?void 0:n.translate(...t)}exists(){var n;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(n=this.translator)==null?void 0:n.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!n||o(r,e)))}loadNamespaces(e,t){const i=fr();return this.options.ns?(B(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=fr();B(e)&&(e=[e]);const n=this.options.preload||[],r=e.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}dir(e){var n,r;if(e||(e=this.resolvedLanguage||(((n=this.languages)==null?void 0:n.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((r=this.services)==null?void 0:r.languageUtils)||new jl(Ul());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Br(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:gs;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new Br(n);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i){const a=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},Object.keys(l[c]).reduce((u,d)=>(u[d]={...l[c][d]},u),{})),{});r.store=new zl(a,n),r.services.resourceStore=r.store}return r.translator=new Gs(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(n,t),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const m=Br.createInstance();m.createInstance=Br.createInstance;m.createInstance;m.dir;m.init;m.loadResources;m.reloadResources;m.use;m.changeLanguage;m.getFixedT;m.t;m.exists;m.setDefaultNamespace;m.hasLoadedNamespace;m.loadNamespaces;m.loadLanguages;const{slice:Uh,forEach:Hh}=[];function Vh(s){return Hh.call(Uh.call(arguments,1),e=>{if(e)for(const t in e)s[t]===void 0&&(s[t]=e[t])}),s}function Bh(s){return typeof s!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(s))}const Vl=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,qh=function(s,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},n=encodeURIComponent(e);let r=`${s}=${n}`;if(i.maxAge>0){const o=i.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(o)}`}if(i.domain){if(!Vl.test(i.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${i.domain}`}if(i.path){if(!Vl.test(i.path))throw new TypeError("option path is invalid");r+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");r+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(r+="; HttpOnly"),i.secure&&(r+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(r+="; Partitioned"),r},Bl={create(s,e,t,i){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(n.expires=new Date,n.expires.setTime(n.expires.getTime()+t*60*1e3)),i&&(n.domain=i),document.cookie=qh(s,e,n)},read(s){const e=`${s}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let n=t[i];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(e)===0)return n.substring(e.length,n.length)}return null},remove(s,e){this.create(s,"",-1,e)}};var Wh={name:"cookie",lookup(s){let{lookupCookie:e}=s;if(e&&typeof document<"u")return Bl.read(e)||void 0},cacheUserLanguage(s,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:n,cookieOptions:r}=e;t&&typeof document<"u"&&Bl.create(t,s,i,n,r)}},Yh={name:"querystring",lookup(s){var i;let{lookupQuerystring:e}=s,t;if(typeof window<"u"){let{search:n}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(n=window.location.hash.substring(window.location.hash.indexOf("?")));const o=n.substring(1).split("&");for(let a=0;a<o.length;a++){const l=o[a].indexOf("=");l>0&&o[a].substring(0,l)===e&&(t=o[a].substring(l+1))}}return t}},Xh={name:"hash",lookup(s){var n;let{lookupHash:e,lookupFromHashIndex:t}=s,i;if(typeof window<"u"){const{hash:r}=window.location;if(r&&r.length>2){const o=r.substring(1);if(e){const a=o.split("&");for(let l=0;l<a.length;l++){const c=a[l].indexOf("=");c>0&&a[l].substring(0,c)===e&&(i=a[l].substring(c+1))}}if(i)return i;if(!i&&t>-1){const a=r.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?(n=a[typeof t=="number"?t:0])==null?void 0:n.replace("/",""):void 0}}}return i}};let Ln=null;const ql=()=>{if(Ln!==null)return Ln;try{if(Ln=typeof window<"u"&&window.localStorage!==null,!Ln)return!1;const s="i18next.translate.boo";window.localStorage.setItem(s,"foo"),window.localStorage.removeItem(s)}catch{Ln=!1}return Ln};var Gh={name:"localStorage",lookup(s){let{lookupLocalStorage:e}=s;if(e&&ql())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupLocalStorage:t}=e;t&&ql()&&window.localStorage.setItem(t,s)}};let Mn=null;const Wl=()=>{if(Mn!==null)return Mn;try{if(Mn=typeof window<"u"&&window.sessionStorage!==null,!Mn)return!1;const s="i18next.translate.boo";window.sessionStorage.setItem(s,"foo"),window.sessionStorage.removeItem(s)}catch{Mn=!1}return Mn};var Kh={name:"sessionStorage",lookup(s){let{lookupSessionStorage:e}=s;if(e&&Wl())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupSessionStorage:t}=e;t&&Wl()&&window.sessionStorage.setItem(t,s)}},Zh={name:"navigator",lookup(s){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:n}=navigator;if(t)for(let r=0;r<t.length;r++)e.push(t[r]);i&&e.push(i),n&&e.push(n)}return e.length>0?e:void 0}},Jh={name:"htmlTag",lookup(s){let{htmlTag:e}=s,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},Qh={name:"path",lookup(s){var n;let{lookupFromPathIndex:e}=s;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(n=t[typeof e=="number"?e:0])==null?void 0:n.replace("/",""):void 0}},ef={name:"subdomain",lookup(s){var n,r;let{lookupFromSubdomainIndex:e}=s;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((r=(n=window.location)==null?void 0:n.hostname)==null?void 0:r.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let ou=!1;try{document.cookie,ou=!0}catch{}const au=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];ou||au.splice(1,1);const tf=()=>({order:au,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:s=>s});class lu{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Vh(t,this.options||{},tf()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=n=>n.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Wh),this.addDetector(Yh),this.addDetector(Gh),this.addDetector(Kh),this.addDetector(Zh),this.addDetector(Jh),this.addDetector(Qh),this.addDetector(ef),this.addDetector(Xh)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let n=this.detectors[i].lookup(this.options);n&&typeof n=="string"&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(i=>i!=null&&!Bh(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}lu.type="languageDetector";const nf={about:"About",connect:"Connect",journey:"Journey",praxis:"Approach",languages:{en:"EN",pt:"PT"}},rf={title:"About me",p1:"Enthusiast of decentralized technologies and other geeky stuff, I'm driven by the balance between people's needs and business goals. Also deeply interested in AI, as a tool to simplify workflows, improve decision-making, and explore new creative possibilities.",p2:"Devoted to quality, I commit to continuous learning and professional development, staying abreast of emerging design trends tech advancements and best practices to deliver cutting-edge solutions.",education:"Education",courses:"Courses",iaBusiness:"AI in Digital Business",link:"See credential"},sf={status:"Available for hiring",picDescription:"An image of Paul M., a bearded man with short, dark hair. He is looking to the right with a thoughtful expression. He is wearing a plain t-shirt.",title:"Software designer",subtitle:"Crafting future-ready digital interactions.",cta:{label:"Check out my latest work",label_alt1:"See last project",label_alt2:"Explore the last project",label_alt3:"Discover recent project",label_alt4:"View last case study",label_alt5:"See recent project",url:"/last-project"}},of={t1:"Design in thinking",p1:"From insight to interface, I design with people in mind. Merging aesthetics, purpose, and cutting-edge tech through Design Thinking and Human-Centered Design.",t2:"Technology to deliver",p2:"Learning from tech experts early on made algorithms a core part of my toolkit, bridging design and engineering to craft seamless, refined digital experiences."},af={1:"Strategy",2:"Create",3:"Deliver",4:"Repeat"},lf={t0:"Journey",t1:"Design <br class='block md:hidden'> intern",p1:"During my internship, I had the opportunity to refine and develop skills across various functions. HTML and CSS development, marketing initiatives, visual design, branding, and UX/UI design.",t2:"Designer, <br class='block md:hidden'> front-end coder",p2:"In multifaceted collaboration with managers and the development team, we successfully redesigned the interfaces and features of company's software.",m2:"Also played a key role in co-creating a platform that facilitates connecting individuals facing legal issues with specialized professionals.",t3:"Visual and <br class='block md:hidden'> product designer",p3:"Early 2018, I held the role of a generalist designer, tasked with developing and managing all aspects of design and creative outputs for their product project.",m3:"Second half of the year, I collaborated with another company to design an open-source library of interface components.",t4:"Lead designer, <br class='block md:hidden'> UI engineer",p4:"Today responsible for redesigning the company's advanced lead management platform, using React components to improve performance and scalability."},cf={title:"Recent project",description:"A robust software for lead management, optimization, and distribution.",cta:"See details",project:"twyne.io"},uf={title:"Reach out"},df={title:"Featured works",button:"Featured works"},hf={menu:{about:"About",goal:"Challenge",proposal:"Proposition",impact:"Outcomes",mobile:"Mobile",final:"Final"},t1:"Case study / 01",t2:"Twyne",about:{t1:"about",p1:"Developed by Ifficient, <span class='text-zinc-50'>Twyne is a robust software for lead management, optimization, and distribution, focused on monetization and real-time analytics.</span>",p2:"Targeted at the B2B market, it serves a few clients in volume, but with high ticket value and demanding customization.",details:{company:"Company",companyValue:"Ifficient",industry:"Industry",industryValue:"AdTech",product:"Product",productValue:"Software as a Service",contributions:"Contributions",contribution1:"Product Design",contribution2:"Design System",contribution3:"UI Engineering"}},goal:{t1:"Challenge",p1:"Tackling one of the biggest challenges in digital design: creating a <span class='text-zinc-50'>modular</span>, <span class='text-zinc-50'>scalable</span>, and <span class='text-zinc-50'>adaptable</span> interface for highly complex software, with constant growth in features and requirements.",p2:"The visual approach needed to balance performance, readability, and continuous evolution, without requiring a restart for every new feature. Delivering clarity and control even in dense flows."},proposal:{t1:"Proposition",l1:["A robust, strategic, and flexible UI kit.","Simplified UI that puts information up front.","Built to last, scale, and ease development."],p1:"Each component carries decisions guided by performance, readability, and functional clarity, with special attention to business logic and the journey of corporate users."},impact:{t1:"Outcomes",l1:["Reduced rework for the engineering team.","Faster onboarding for new users.","Supports new modules with minimal friction.","Strengthened identity with a modern UI."]},numbers:{t1:"+ 400.000",p1:"Registrations acquired per day",t2:"+ 2 million",p2:"User clicks on campaigns",t3:"+ 7 million",p3:"Leads negotiated daily"},mobile:{t1:"Built on solid principles. Ready for any platform."},conclusion:{t1:"Final thoughts",p1:"The modularity of the component library enables smart reuse, reducing complexity and increasing development speed.",p2:"Decisions on layout, typography, contrast, and spacing were calibrated to support dense data environments without compromising readability.",p3:"The result is an interface that adapts to the usage context without losing visual coherence or functional integrity."}},ff={title:"Allugator",tags:"Design Partner, Start-up",year:"2018",description:"Acting as a generalist designer, I contributed key deliverables for the startup's growth in its early stage, from rebranding and brand communication to digital product evolution.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investors in 2018"},users:{title:"+ 7000 new users",subtitle:"+ 100% compared to 2017"},daily:{title:"+ 1000 daily in 2018",subtitle:"+ 100% compared to 2017"}}},pf={title:"Damus",tags:"Experiment, Rebranding",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Damus official website'>Damus</a> is a client for the decentralized social network Nostr, available for iOS, iPad, and macOS. It allows users to post text, images, videos, and GIFs, as well as interact with other users through the sending of <a href='https://en.wikipedia.org/wiki/Satoshi' class='underline text-zinc-100' target='_blank' title='Satoshi is the smallest unit of the system, representing 0.00000001 bitcoin, a hundredth of a millionth of a bitcoin.'>satoshis</a> and encrypted private messages.",description2:"The goal of Damus is to offer an alternative to traditional social networks, focusing on freedom of expression and privacy."},gf={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Interactive marketing company specialized in lead generation, based in Denver, CO.",description2:"There I led the design of Twyne and Path Evolution software, ensuring scalability and consistency in product evolution.",cta:"See details",fullView:"Full view"},mf={title:"Multiplayer Orchestra",tags:"Volunteer, Visual Design",year:"2017",description1:"Created by former students of UFMG's School of Music, Multiplayer explored soundtracks from series, movies, and games in their repertoire, connecting classical music to pop culture.",description2:"I was invited to join the project as a designer, taking care of visual communication and providing support in event production.",metrics:{audience:{title:"1.6k people in 2 concerts",subtitle:"@ Cine Theatro Brasil"},facebook:{title:"4.7k followers",subtitle:"Facebook"},youtube:{title:"2.1k subscribers",subtitle:"YouTube"}}},_f={404:{title:"404 · Page not found"},common:{description:"Enthusiast of decentralized technologies, Paul is a designer and coder from Brazil. Here you can find links to stay in touch with him.",keywords:"Paul M, Paulo Melo Jr, pmjr, digital product designer, product designer, interface designer, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animations, motion design, branding, portfolio, Brazil, São Paulo, decentralized technologies, bitcoin, nostr"},home:{title:"Paulo Melo Jr. · Designer and coder"},projects:{title:"Featured projects · Paulo Melo Jr.",keywords:"archive, projects, case studies"},lastProject:{title:"Twyne · Paulo Melo Jr.",keywords:"twyne, case study, product design, ui/ux, onboarding, mobile, web, adtech, interactive marketing, lead generation"}},bf={home:{label:"Home",url:"/"},projects:{label:"Featured works",url:"/projects"},lastProject:{label:"Last project",url:"/last-project"},instagram:{label:"Instagram",url:"https://instagram.com/paulomelojunior"},github:{label:"GitHub",url:"https://github.com/paulomelojunior"},linkedin:{label:"LinkedIn",url:"https://linkedin.com/in/paulomelojunior/"},email:{label:"Email",url:"mailto:hello@pmjr.cc"}},vf={menu:nf,about:rf,hero:sf,praxis:of,method:af,journey:lf,cases:cf,connect:uf,featured:df,twyne:hf,allugator:ff,damus:pf,ifficient:gf,multiplayer:mf,seo:_f,links:bf},yf={about:"Sobre",journey:"Jornada",praxis:"Abordagem",connect:"Contato",languages:{en:"EN",pt:"PT"}},xf={title:"Sobre mim",p1:"Entusiasta de tecnologias descentralizadas e outros assuntos geek, sou movido pelo equilíbrio entre as necessidades das pessoas e os objetivos de negócios. Também tenho profundo interesse em IA, como uma ferramenta para simplificar fluxos de trabalho, melhorar a tomada de decisões e explorar novas possibilidades criativas.",p2:"Comprometido com a qualidade, busco constantemente o aprendizado e o desenvolvimento profissional, mantendo-me atualizado sobre tendências emergentes de design, avanços tecnológicos e melhores práticas para oferecer soluções inovadoras.",education:"Educação",courses:"Cursos",iaBusiness:"IA em Negócios Digitais",link:"Ver credencial"},wf={status:"Disponível para contrato",picDescription:"Uma foto de Paulo, um homem barbado com cabelos curtos e escuros. Ele está olhando para a direita com uma expressão pensativa. Ele usa uma camisa simples.",title:"Software designer",subtitle:"Criando experiências digitais prontas para o futuro.",cta:{label:"Ver trabalho mais recente",url:"/last-project"}},Cf={t1:"Design no pensar",p1:"Do insight à interface, projeto com foco nas pessoas. Unindo estética, propósito e tecnologia de ponta por meio do Design Thinking e Human-Centered Design.",t2:"Tecnologia para realizar",p2:"Aprender com experts em tecnologia desde cedo tornou algoritmos parte do meu repertório, conecto design e engenharia para criar experiências refinadas."},Sf={1:"Strategy",2:"Create",3:"Deliver",4:"Repeat"},$f={t0:"Jornada",t1:"Estagiário de <br class='block md:hidden'> design",p1:"Durante meu estágio, aprofundei e refinei habilidades em desenvolvimento front-end, participei de iniciativas de marketing, e atuei em design visual, branding e UX/UI.",m1:"",t2:"Designer, <br class='block md:hidden'> front-end coder",p2:"Em colaboração multifacetada com gerentes e a equipe de desenvolvimento, redesenhamos com sucesso as interfaces e funcionalidades do software da empresa.",m2:"Também desempenhei um papel fundamental na co-criação de uma plataforma que facilita a conexão de pessoas enfrentando questões legais com profissionais especializados.",t3:"Designer de produto",p3:"No início de 2018, exerci o papel de designer generalista, responsável por desenvolver e gerenciar todos os aspectos do design e saídas criativas para o projeto de produto.",m3:"Na segunda metade do ano, colaborei com outra empresa para projetar uma biblioteca open-source de componentes de interface.",t4:"Lead designer, <br class='block md:hidden'> UI engineer",p4:"Hoje responsável por redesenhar a plataforma avançada de gerenciamento de leads da empresa, usando componentes React para melhorar performance e escalabilidade."},Pf={title:"Projeto mais recente",description:"Um software robusto para gestão, otimização e distribuição de leads.",cta:"Ver detalhes",project:"twyne.io"},kf={title:"Entre em contato"},Tf={title:"Projetos <br> em destaque",button:"Projetos destaque"},Of={menu:{about:"Sobre",goal:"Desafio",proposal:"Proposta",impact:"Resultados",mobile:"Mobile",final:"Final"},t1:"Estudo de caso / 01",t2:"Twyne",about:{t1:"O que é",p1:"Desenvolvida pela Ifficient, <span class='text-zinc-100'>o Twyne é um software robusto de gestão, otimização e distribuição de leads, com foco em monetização e análise em tempo real.</span>",p2:"Voltada para o mercado B2B, atende poucos clientes em volume, mas com alto ticket médio e exigências elevadas de personalização.",details:{company:"Empresa",companyValue:"Ifficient",industry:"Mercado",industryValue:"AdTech",product:"Produto",productValue:"Software as a Service",contributions:"Contribuições",contribution1:"Product Design",contribution2:"Design System",contribution3:"UI Engineering"}},projectInfo:{company:"Empresa",companyValue:"Ifficient",industry:"Setor",industryValue:"AdTech",product:"Produto",productValue:"Software as a Service",contributions:"Contribuições",contribution1:"Design de Produto",contribution2:"Design System",contribution3:"UI Engineering"},goal:{t1:"Desafio",p1:"Resolver um dos grandes desafios do design digital: criar uma <span class='text-zinc-100'>interface modular</span>, <span class='text-zinc-100'>escalável</span> e <span class='text-zinc-100'>adaptável</span> para um software de alta complexidade técnica, com crescimento constante de features e demandas.",p2:"A proposta visual precisava equilibrar performance, legibilidade e evolução contínua, sem exigir recomeços a cada nova funcionalidade. Oferecendo clareza e controle mesmo em fluxos densos."},proposal:{t1:"Proposta",l1:["Biblioteca de componentes robusta, estratégica e flexível.","UI simplificada e informações em primeiro plano.","Pensado para durar, escalar e facilitar o desenvolvimento."],p1:"Cada componente carrega decisões orientadas por performance, legibilidade e clareza funcional, com atenção especial à jornada dos usuários corporativos."},impact:{t1:"Resultados",l1:["Redução de retrabalho no time de engenharia.","Aumento na velocidade de onboarding de novos usuários.","Base que suportou a adição de novos módulos sem atrito.","Fortalecimento da identidade com uma UI moderna."]},numbers:{t1:"+ 400 mil",p1:"Registros adiquiridos por dia",t2:"+ 2 milhões",p2:"Clicks de usuários em campanhas",t3:"+ 7 milhões",p3:"Leads negociados diariamente"},mobile:{t1:"Construído com solidez. Pronto para qualquer plataforma."},conclusion:{t1:"Considerações finais",p1:"A modularidade do UI kit permite reuso inteligente, reduzindo complexidade e aumentando a velocidade de desenvolvimento.",p2:"As decisões de layout, tipografia, contraste e espaçamento foram calibradas para sustentar ambientes densos de dados sem comprometer a legibilidade.",p3:"O resultado é uma interface que se adapta ao contexto de uso sem perder coerência visual nem integridade funcional."}},Ef={title:"Allugator",tags:"Design Partner, Start-up",year:"2018",description:"Atuando como designer generalista, contribuí com entregas-chave para o crescimento da startup em seu estágio inicial, da reformulação da identidade e comunicação da marca à evolução do produto digital.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investidores em 2018"},users:{title:"+ 7000 usuários novos",subtitle:"+ 100% em relação a 2017"},daily:{title:"+ 1000 diárias em 2018",subtitle:"+ 100% em relação a 2017"}}},Af={title:"Damus",tags:"Experimento, Rebranding",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Site oficial do Damus'>Damus</a> é um cliente para a rede social descentralizada Nostr, disponível para iOS, iPad e macOS. Ele permite aos usuários postar textos, imagens, vídeos e GIFs, além de interagir com outros usuários através de envio de <a href='https://pt.wikipedia.org/wiki/Bitcoin' class='underline text-zinc-100' target='_blank' title='Satoshi, é a menor quantidade do sistema, representando 0,00000001 bitcoin, um centésimo de milionésimo de bitcoin.'>satoshis</a> e mensagens privadas criptografadas.",description2:"O objetivo do Damus é oferecer uma alternativa às redes sociais tradicionais, com foco na liberdade de expressão e privacidade."},Lf={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Companhia de marketing interativo especializada em geração de leads, com base em Denver, CO.",description2:"Nela liderei o design dos softwares Twyne e Path Evolution, assegurando escalabilidade e consistência na evolução dos produtos.",cta:"Ver detalhes",fullView:"Ver tudo"},Mf={title:"Orquestra Multiplayer",tags:"Voluntário, Visual Design",year:"2017",description1:"Criada por ex-alunos da Escola de Música da UFMG, a Multiplayer explorava trilhas sonoras de séries, filmes e jogos em seu repertório, ligando música erudita à cultura pop.",description2:"Fui convidado a integrar o projeto como designer, cuidando da comunicação visual e prestando suporte na produção dos eventos.",metrics:{audience:{title:"1600 pessoas em 2 concertos",subtitle:"@ Cine Theatro Brasil"},facebook:{title:"4,7 mil seguidores",subtitle:"Facebook"},youtube:{title:"2,1 mil inscritos",subtitle:"YouTube"}}},zf={404:{title:"404 · Página não encontrada"},common:{description:"Entusiasta de tecnologias descentralizadas, Paulo é designer e coder do Brasil. Aqui você encontra links para se conectar com ele.",keywords:"Paulo Melo Júnior, Paulo Melo Jr, Paul M, pmjr, designer de produto digital, product designer, designer de interface, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animações, motion design, branding, portfólio, Brasil, São Paulo, tecnologias descentralizadas, bitcoin, nostr"},home:{title:"Paulo Melo Jr. · Designer and coder"},projects:{title:"Projetos em destaque · Paulo Melo Jr.",keywords:"arquivo, projetos, cases"},lastProject:{title:"Twyne · Paulo Melo Jr.",keywords:"twyne, estudo de caso, design de produto, ui/ux, onboarding, mobile, web, adtech, marketing interativo, geração de leads"}},Df={home:{label:"Home",url:"/"},projects:{label:"Projetos",url:"/projects"},lastProject:{label:"Último projeto",url:"/last-project"},github:{label:"GitHub",url:"https://github.com/paulomelojunior"},linkedin:{label:"LinkedIn",url:"https://linkedin.com/in/paulomelojunior/"},email:{label:"Email",url:"mailto:hello@pmjr.cc"}},Rf={menu:yf,about:xf,hero:wf,praxis:Cf,method:Sf,journey:$f,cases:Pf,connect:kf,featured:Tf,twyne:Of,allugator:Ef,damus:Af,ifficient:Lf,multiplayer:Mf,seo:zf,links:Df};m.use(lu).init({fallbackLng:"en",detection:{order:["navigator","htmlTag"],caches:["localStorage"]},interpolation:{escapeValue:!1},resources:{en:{translation:vf},pt:{translation:Rf}}});m.on("languageChanged",s=>{document.documentElement.lang=s});var jf="1.3.17";function cu(s,e,t){return Math.max(s,Math.min(e,t))}function If(s,e,t){return(1-t)*s+t*e}function Nf(s,e,t,i){return If(s,e,1-Math.exp(-t*i))}function Ff(s,e){return(s%e+e)%e}var Uf=class{constructor(){D(this,"isRunning",!1);D(this,"value",0);D(this,"from",0);D(this,"to",0);D(this,"currentTime",0);D(this,"lerp");D(this,"duration");D(this,"easing");D(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const i=cu(0,this.currentTime/this.duration,1);e=i>=1;const n=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Nf(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function Hf(s,e){let t;return function(...i){let n=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(n,i)},e)}}var Vf=class{constructor(s,e,{autoResize:t=!0,debounce:i=250}={}){D(this,"width",0);D(this,"height",0);D(this,"scrollHeight",0);D(this,"scrollWidth",0);D(this,"debouncedResize");D(this,"wrapperResizeObserver");D(this,"contentResizeObserver");D(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});D(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});D(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Hf(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},uu=class{constructor(){D(this,"events",{})}emit(s,...e){var i;let t=this.events[s]||[];for(let n=0,r=t.length;n<r;n++)(i=t[n])==null||i.call(t,...e)}on(s,e){var t;return(t=this.events[s])!=null&&t.push(e)||(this.events[s]=[e]),()=>{var i;this.events[s]=(i=this.events[s])==null?void 0:i.filter(n=>e!==n)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}},Yl=100/6,Oi={passive:!1},Bf=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){D(this,"touchStart",{x:0,y:0});D(this,"lastDelta",{x:0,y:0});D(this,"window",{width:0,height:0});D(this,"emitter",new uu);D(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});D(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});D(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});D(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:i}=s;const n=i===1?Yl:i===2?this.window.width:1,r=i===1?Yl:i===2?this.window.height:1;e*=n,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});D(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Oi),this.element.addEventListener("touchstart",this.onTouchStart,Oi),this.element.addEventListener("touchmove",this.onTouchMove,Oi),this.element.addEventListener("touchend",this.onTouchEnd,Oi)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Oi),this.element.removeEventListener("touchstart",this.onTouchStart,Oi),this.element.removeEventListener("touchmove",this.onTouchMove,Oi),this.element.removeEventListener("touchend",this.onTouchEnd,Oi)}},Xl=s=>Math.min(1,1.001-Math.pow(2,-10*s)),du=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:p=!0,prevent:_,virtualScroll:v,overscroll:b=!0,autoRaf:x=!1,anchors:w=!1,autoToggle:S=!1,allowNestedScroll:P=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:T=C,stopInertiaOnNavigate:k=!1}={}){D(this,"_isScrolling",!1);D(this,"_isStopped",!1);D(this,"_isLocked",!1);D(this,"_preventNextNativeScrollEvent",!1);D(this,"_resetVelocityTimeout",null);D(this,"_rafId",null);D(this,"isTouching");D(this,"time",0);D(this,"userData",{});D(this,"lastVelocity",0);D(this,"velocity",0);D(this,"direction",0);D(this,"options");D(this,"targetScroll");D(this,"animatedScroll");D(this,"animate",new Uf);D(this,"emitter",new uu);D(this,"dimensions");D(this,"virtualScroll");D(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});D(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});D(this,"onTransitionEnd",s=>{s.propertyName.includes("overflow")&&this.checkOverflow()});D(this,"onClick",s=>{const t=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.getAttribute("href"));if(this.options.anchors){const i=t.find(n=>{var r;return(r=n.getAttribute("href"))==null?void 0:r.includes("#")});if(i){const n=i.getAttribute("href");if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${n.split("#")[1]}`;this.scrollTo(o,r)}}}this.options.stopInertiaOnNavigate&&t.find(n=>n.host===window.location.host)&&this.reset()});D(this,"onPointerDown",s=>{s.button===1&&this.reset()});D(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const n=i.type.includes("touch"),r=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(_=>{var v,b,x;return _ instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(_))||((v=_.hasAttribute)==null?void 0:v.call(_,"data-lenis-prevent"))||n&&((b=_.hasAttribute)==null?void 0:b.call(_,"data-lenis-prevent-touch"))||r&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(_,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=n&&this.options.syncTouch,p=n&&i.type==="touchend";p&&(h=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});D(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});D(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=jf,(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Xl:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:p,prevent:_,virtualScroll:v,overscroll:b,autoRaf:x,anchors:w,autoToggle:S,allowNestedScroll:P,naiveDimensions:T,stopInertiaOnNavigate:k},this.dimensions=new Vf(s,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Bf(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:n=!0,lerp:r=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof s=="string"&&["top","left","start","#"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let h;if(typeof s=="string"?(h=document.querySelector(s),h||(s==="#top"?s=0:console.warn("Lenis: Target not found",s))):s instanceof HTMLElement&&(s!=null&&s.nodeType)&&(h=s),h){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const f=h.getBoundingClientRect();s=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=e,s=Math.round(s),this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const h=s-this.animatedScroll;h>this.limit/2?s=s-this.limit:h<-this.limit/2&&(s=s+this.limit)}}else s=cu(0,s,this.limit);if(s===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=s),typeof o=="number"&&typeof a!="function"?a=Xl:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,s,{duration:o,easing:a,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(h,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),n&&(this.targetScroll=h),f||this.emit(),f&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(s,{deltaX:e,deltaY:t}){const i=Date.now(),n=s._lenis??(s._lenis={});let r,o,a,l,c,u,d,h;const f=this.options.gestureOrientation;if(i-(n.time??0)>2e3){n.time=Date.now();const S=window.getComputedStyle(s);n.computedStyle=S;const P=S.overflowX,C=S.overflowY;if(r=["auto","overlay","scroll"].includes(P),o=["auto","overlay","scroll"].includes(C),n.hasOverflowX=r,n.hasOverflowY=o,!r&&!o||f==="vertical"&&!o||f==="horizontal"&&!r)return!1;c=s.scrollWidth,u=s.scrollHeight,d=s.clientWidth,h=s.clientHeight,a=c>d,l=u>h,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=c,n.scrollHeight=u,n.clientWidth=d,n.clientHeight=h}else a=n.isScrollableX,l=n.isScrollableY,r=n.hasOverflowX,o=n.hasOverflowY,c=n.scrollWidth,u=n.scrollHeight,d=n.clientWidth,h=n.clientHeight;if(!r&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!r||!a))return!1;let g;if(f==="horizontal")g="x";else if(f==="vertical")g="y";else{const S=e!==0,P=t!==0;S&&r&&a&&(g="x"),P&&o&&l&&(g="y")}if(!g)return!1;let p,_,v,b,x;if(g==="x")p=s.scrollLeft,_=c-d,v=e,b=r,x=a;else if(g==="y")p=s.scrollTop,_=u-h,v=t,b=o,x=l;else return!1;return(v>0?p<_:p>0)&&b&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Ff(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const qr=new du;window.lenis=qr;function Jo(s){qr.raf(s),requestAnimationFrame(Jo)}const qf=!!document.querySelector("mobile-loading");qf?(qr.stop(),window.addEventListener("mobile-loading:done",()=>{qr.start(),requestAnimationFrame(Jo)},{once:!0})):requestAnimationFrame(Jo);document.addEventListener("click",s=>{const e=s.target.closest('a[href^="#"]');if(!e)return;const t=e.getAttribute("href");if(!t)return;const i=document.querySelector(t);i&&(s.preventDefault(),qr.scrollTo(i))});function mi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function hu(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gn={duration:.5,overwrite:!1,delay:0},Wa,Je,_e,Ht=1e8,fe=1/Ht,Qo=Math.PI*2,Wf=Qo/4,Yf=0,fu=Math.sqrt,Xf=Math.cos,Gf=Math.sin,Ye=function(e){return typeof e=="string"},ke=function(e){return typeof e=="function"},wi=function(e){return typeof e=="number"},Ya=function(e){return typeof e>"u"},li=function(e){return typeof e=="object"},vt=function(e){return e!==!1},Xa=function(){return typeof window<"u"},ms=function(e){return ke(e)||Ye(e)},pu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ot=Array.isArray,Kf=/random\([^)]+\)/g,Zf=/,\s*/g,Gl=/(?:-?\.?\d|\.)+/gi,gu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Eo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mu=/[+-]=-?[.\d]+/,Jf=/[^,'"\[\]\s]+/gi,Qf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,ei,ea,Ga,Rt={},Ks={},_u,bu=function(e){return(Ks=Kn(e,Rt))&&Ct},Ka=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wr=function(e,t){return!t&&console.warn(e)},vu=function(e,t){return e&&(Rt[e]=t)&&Ks&&(Ks[e]=t)||Rt},Yr=function(){return 0},ep={suppressEvents:!0,isStart:!0,kill:!1},zs={suppressEvents:!0,kill:!1},tp={suppressEvents:!0},Za={},Ii=[],ta={},yu,Ot={},Ao={},Kl=30,Ds=[],Ja="",Qa=function(e){var t=e[0],i,n;if(li(t)||ke(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Ds.length;n--&&!Ds[n].targetTest(t););i=Ds[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Bu(e[n],i)))||e.splice(n,1);return e},cn=function(e){return e._gsap||Qa(Vt(e))[0]._gsap},xu=function(e,t,i){return(i=e[t])&&ke(i)?e[t]():Ya(i)&&e.getAttribute&&e.getAttribute(t)||i},yt=function(e,t){return(e=e.split(",")).forEach(t)||e},Le=function(e){return Math.round(e*1e5)/1e5||0},ve=function(e){return Math.round(e*1e7)/1e7||0},Vn=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},ip=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Zs=function(){var e=Ii.length,t=Ii.slice(0),i,n;for(ta={},Ii.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},el=function(e){return!!(e._initted||e._startAt||e.add)},wu=function(e,t,i,n){Ii.length&&!Je&&Zs(),e.render(t,i,!!(Je&&t<0&&el(e))),Ii.length&&!Je&&Zs()},Cu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jf).length<2?t:Ye(e)?e.trim():e},Su=function(e){return e},jt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},np=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Kn=function(e,t){for(var i in t)e[i]=t[i];return e},Zl=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=li(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},Js=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Tr=function(e){var t=e.parent||ye,i=e.keyframes?np(ot(e.keyframes)):jt;if(vt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},rp=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},$u=function(e,t,i,n,r){var o=e[n],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},vo=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Hi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},un=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},sp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ia=function(e,t,i,n){return e._startAt&&(Je?e._startAt.revert(zs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},op=function s(e){return!e||e._ts&&s(e.parent)},Jl=function(e){return e._repeat?Zn(e._tTime,e=e.duration()+e._rDelay)*e:0},Zn=function(e,t){var i=Math.floor(e=ve(e/t));return e&&i===e?i-1:i},Qs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yo=function(e){return e._end=ve(e._start+(e._tDur/Math.abs(e._ts||e._rts||fe)||0))},xo=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ve(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yo(e),i._dirty||un(i,e)),e},Pu=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qs(e.rawTime(),t),(!t._dur||ls(0,t.totalDuration(),i)-t._tTime>fe)&&t.render(i,!0)),un(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-fe}},ii=function(e,t,i,n){return t.parent&&Hi(t),t._start=ve((wi(i)?i:i||e!==ye?Nt(e,i,t):e._time)+t._delay),t._end=ve(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$u(e,t,"_first","_last",e._sort?"_start":0),na(t)||(e._recent=t),n||Pu(e,t),e._ts<0&&xo(e,e._tTime),e},ku=function(e,t){return(Rt.ScrollTrigger||Ka("scrollTrigger",t))&&Rt.ScrollTrigger.create(t,e)},Tu=function(e,t,i,n,r){if(il(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Je&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yu!==At.frame)return Ii.push(e),e._lazy=[r,n],1},ap=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},na=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},lp=function(e,t,i,n){var r=e.ratio,o=t<0||!t&&(!e._start&&ap(e)&&!(!e._initted&&na(e))||(e._ts<0||e._dp._ts<0)&&!na(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=ls(0,e._tDur,t),u=Zn(l,a),e._yoyo&&u&1&&(o=1-o),u!==Zn(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Je||n||e._zTime===fe||!t&&e._zTime){if(!e._initted&&Tu(e,t,n,i,l))return;for(d=e._zTime,e._zTime=t||(i?fe:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ia(e,t,i,!0),e._onUpdate&&!i&&Mt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Mt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hi(e,1),!i&&!Je&&(Mt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},cp=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Jn=function(e,t,i,n){var r=e._repeat,o=ve(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:ve(o*(r+1)+e._rDelay*r):o,a>0&&!n&&xo(e,e._tTime=e._tDur*a),e.parent&&yo(e),i||un(e.parent,e),e},Ql=function(e){return e instanceof pt?un(e):Jn(e,e._dur)},up={_start:0,endTime:Yr,totalDuration:Yr},Nt=function s(e,t,i){var n=e.labels,r=e._recent||up,o=e.duration()>=Ht?r.endTime(!1):e._dur,a,l,c;return Ye(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(ot(i)?i[0]:i).totalDuration()),a>1?s(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Or=function(e,t,i){var n=wi(t[1]),r=(n?2:1)+(e<2?0:1),o=t[r],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vt(l.vars.inherit)&&l.parent;o.immediateRender=vt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new je(t[0],o,t[r+1])},Wi=function(e,t){return e||e===0?t(e):t},ls=function(e,t,i){return i<e?e:i>t?t:i},rt=function(e,t){return!Ye(e)||!(t=Qf.exec(e))?"":t[1]},dp=function(e,t,i){return Wi(i,function(n){return ls(e,t,n)})},ra=[].slice,Ou=function(e,t){return e&&li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&li(e[0]))&&!e.nodeType&&e!==ei},hp=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Ye(n)&&!t||Ou(n,1)?(r=i).push.apply(r,Vt(n)):i.push(n)})||i},Vt=function(e,t,i){return _e&&!t&&_e.selector?_e.selector(e):Ye(e)&&!i&&(ea||!Qn())?ra.call((t||Ga).querySelectorAll(e),0):ot(e)?hp(e,i):Ou(e)?ra.call(e,0):e?[e]:[]},sa=function(e){return e=Vt(e)[0]||Wr("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Vt(t,i.querySelectorAll?i:i===e?Wr("Invalid scope")||Ga.createElement("div"):e)}},Eu=function(e){return e.sort(function(){return .5-Math.random()})},Au=function(e){if(ke(e))return e;var t=li(e)?e:{each:e},i=dn(t.ease),n=t.from||0,r=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,u=n,d=n;return Ye(n)?u=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(u=n[0],d=n[1]),function(h,f,g){var p=(g||t).length,_=o[p],v,b,x,w,S,P,C,T,k;if(!_){if(k=t.grid==="auto"?0:(t.grid||[1,Ht])[1],!k){for(C=-Ht;C<(C=g[k++].getBoundingClientRect().left)&&k<p;);k<p&&k--}for(_=o[p]=[],v=l?Math.min(k,p)*u-.5:n%k,b=k===Ht?0:l?p*d/k-.5:n/k|0,C=0,T=Ht,P=0;P<p;P++)x=P%k-v,w=b-(P/k|0),_[P]=S=c?Math.abs(c==="y"?w:x):fu(x*x+w*w),S>C&&(C=S),S<T&&(T=S);n==="random"&&Eu(_),_.max=C-T,_.min=T,_.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(k>p?p-1:c?c==="y"?p/k:k:Math.max(k,p/k))||0)*(n==="edges"?-1:1),_.b=p<0?r-p:r,_.u=rt(t.amount||t.each)||0,i=i&&p<0?Uu(i):i}return p=(_[h]-_.min)/_.max||0,ve(_.b+(i?i(p):p)*_.v)+_.u}},oa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=ve(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(wi(i)?0:rt(i))}},Lu=function(e,t){var i=ot(e),n,r;return!i&&li(e)&&(n=i=e.radius||Ht,e.values?(e=Vt(e.values),(r=!wi(e[0]))&&(n*=n)):e=oa(e.increment)),Wi(t,i?ke(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Ht,u=0,d=e.length,h,f;d--;)r?(h=e[d].x-a,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-a),h<c&&(c=h,u=d);return u=!n||c<=n?e[u]:o,r||u===o||wi(o)?u:u+rt(o)}:oa(e))},Mu=function(e,t,i,n){return Wi(ot(e)?!t:i===!0?!!(i=0):!n,function(){return ot(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},fp=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,o){return o(r)},n)}},pp=function(e,t){return function(i){return e(parseFloat(i))+(t||rt(i))}},gp=function(e,t,i){return Du(e,t,0,1,i)},zu=function(e,t,i){return Wi(i,function(n){return e[~~t(n)]})},mp=function s(e,t,i){var n=t-e;return ot(e)?zu(e,s(0,e.length),t):Wi(i,function(r){return(n+(r-e)%n)%n+e})},_p=function s(e,t,i){var n=t-e,r=n*2;return ot(e)?zu(e,s(0,e.length-1),t):Wi(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},Xr=function(e){return e.replace(Kf,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Zf);return Mu(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Du=function(e,t,i,n,r){var o=t-e,a=n-i;return Wi(r,function(l){return i+((l-e)/o*a||0)})},bp=function s(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=Ye(e),a={},l,c,u,d,h;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(ot(e)&&!ot(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,r=function(g){g*=d;var p=Math.min(h,~~g);return u[p](g-p)},i=t}else n||(e=Kn(ot(e)?[]:{},e));if(!u){for(l in t)tl.call(a,e,l,"get",t[l]);r=function(g){return sl(g,a)||(o?e.p:e)}}}return Wi(i,r)},ec=function(e,t,i){var n=e.labels,r=Ht,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Mt=function(e,t,i){var n=e.vars,r=n[t],o=_e,a=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Ii.length&&Zs(),a&&(_e=a),u=l?r.apply(c,l):r.call(c),_e=o,u},yr=function(e){return Hi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Je),e.progress()<1&&Mt(e,"onInterrupt"),e},Un,Ru=[],ju=function(e){if(e)if(e=!e.name&&e.default||e,Xa()||e.headless){var t=e.name,i=ke(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Yr,render:sl,add:tl,kill:zp,modifier:Mp,rawVars:0},o={targetTest:0,get:0,getSetter:rl,aliases:{},register:0};if(Qn(),e!==n){if(Ot[t])return;jt(n,jt(Js(e,r),o)),Kn(n.prototype,Kn(r,Js(e,o))),Ot[n.prop=t]=n,e.targetTest&&(Ds.push(n),Za[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vu(t,n),e.register&&e.register(Ct,n,xt)}else Ru.push(e)},he=255,xr={aqua:[0,he,he],lime:[0,he,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,he],navy:[0,0,128],white:[he,he,he],olive:[128,128,0],yellow:[he,he,0],orange:[he,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[he,0,0],pink:[he,192,203],cyan:[0,he,he],transparent:[he,he,he,0]},Lo=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*he+.5|0},Iu=function(e,t,i){var n=e?wi(e)?[e>>16,e>>8&he,e&he]:0:xr.black,r,o,a,l,c,u,d,h,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xr[e])n=xr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&he,n&he,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&he,e&he]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Gl),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,n.length>3&&(n[3]*=1),n[0]=Lo(l+1/3,r,o),n[1]=Lo(l,r,o),n[2]=Lo(l-1/3,r,o);else if(~e.indexOf("="))return n=e.match(gu),i&&n.length<4&&(n[3]=1),n}else n=e.match(Gl)||xr.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/he,o=n[1]/he,a=n[2]/he,d=Math.max(r,o,a),h=Math.min(r,o,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},Nu=function(e){var t=[],i=[],n=-1;return e.split(Ni).forEach(function(r){var o=r.match(Fn)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},tc=function(e,t,i){var n="",r=(e+n).match(Ni),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=Iu(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Nu(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(Ni,"1").split(Fn),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(Ni),d=c.length-1;a<d;a++)n+=c[a]+r[a];return n+c[d]},Ni=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xr)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),vp=/hsl[a]?\(/,Fu=function(e){var t=e.join(" "),i;if(Ni.lastIndex=0,Ni.test(t))return i=vp.test(t),e[1]=tc(e[1],i),e[0]=tc(e[0],i,Nu(e[1])),!0},Gr,At=(function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,u,d,h,f,g=function p(_){var v=s()-n,b=_===!0,x,w,S,P;if((v>e||v<0)&&(i+=v-t),n+=v,S=n-i,x=S-o,(x>0||b)&&(P=++d.frame,h=S-d.time*1e3,d.time=S=S/1e3,o+=x+(x>=r?4:r-x),w=1),b||(l=c(p)),w)for(f=0;f<a.length;f++)a[f](S,h,P,_)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){_u&&(!ea&&Xa()&&(ei=ea=window,Ga=ei.document||{},Rt.gsap=Ct,(ei.gsapVersions||(ei.gsapVersions=[])).push(Ct.version),bu(Ks||ei.GreenSockGlobals||!ei.gsap&&ei||{}),Ru.forEach(ju)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,o-d.time*1e3+1|0)},Gr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Gr=0,c=Yr},lagSmoothing:function(_,v){e=_||1/0,t=Math.min(v||33,e)},fps:function(_){r=1e3/(_||240),o=d.time*1e3+r},add:function(_,v,b){var x=v?function(w,S,P,C){_(w,S,P,C),d.remove(x)}:_;return d.remove(_),a[b?"unshift":"push"](x),Qn(),x},remove:function(_,v){~(v=a.indexOf(_))&&a.splice(v,1)&&f>=v&&f--},_listeners:a},d})(),Qn=function(){return!Gr&&At.wake()},se={},yp=/^[\d.\-M][\d.\-,\s]/,xp=/["']/g,wp=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(xp,"").trim():+c,n=l.substr(a+1).trim();return t},Cp=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Sp=function(e){var t=(e+"").split("("),i=se[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[wp(t[1])]:Cp(e).split(",").map(Cu)):se._CE&&yp.test(e)?se._CE("",e):i},Uu=function(e){return function(t){return 1-e(1-t)}},Hu=function s(e,t){for(var i=e._first,n;i;)i instanceof pt?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},dn=function(e,t){return e&&(ke(e)?e:se[e]||Sp(e))||t},Pn=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},o;return yt(e,function(a){se[a]=Rt[a]=r,se[o=a.toLowerCase()]=i;for(var l in r)se[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[a+"."+l]=r[l]}),r},Vu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Mo=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/Qo*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*Gf((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Vu(a);return r=Qo/r,l.config=function(c,u){return s(e,c,u)},l},zo=function s(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Vu(i);return n.config=function(r){return s(e,r)},n};yt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Pn(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;Pn("Elastic",Mo("in"),Mo("out"),Mo());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(a){return a<t?s*a*a:a<i?s*Math.pow(a-1.5/e,2)+.75:a<n?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Pn("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Pn("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Pn("Circ",function(s){return-(fu(1-s*s)-1)});Pn("Sine",function(s){return s===1?1:-Xf(s*Wf)+1});Pn("Back",zo("in"),zo("out"),zo());se.SteppedEase=se.steps=Rt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,o=1-fe;return function(a){return((n*ls(0,o,a)|0)+r)*i}}};Gn.ease=se["quad.out"];yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ja+=s+","+s+"Params,"});var Bu=function(e,t){this.id=Yf++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xu,this.set=t?t.getSetter:rl},Kr=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Jn(this,+t.duration,1,1),this.data=t.data,_e&&(this._ctx=_e,_e.data.push(this)),Gr||At.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Jn(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Qn(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(xo(this,i),!r._dp||r.parent||Pu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===fe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),wu(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Jl(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Jl(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Zn(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-fe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Qs(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-fe?0:this._rts,this.totalTime(ls(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),yo(this),sp(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fe&&(this._tTime-=fe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ve(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ii(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(vt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qs(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=tp);var n=Je;return Je=i,el(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Je=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ql(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Ql(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Nt(this,i),vt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,vt(n)),this._dur||(this._zTime=-fe),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-fe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-fe,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-fe)},e.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var a=ke(i)?i:Su,l=function(){var u=n.then;n.then=null,r&&r(),ke(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=u),o(a),n.then=u};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){yr(this)},s})();jt(Kr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fe,_prom:0,_ps:!1,_rts:1});var pt=(function(s){hu(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=vt(i.sortChildren),ye&&ii(i.parent||ye,mi(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&ku(mi(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,o){return Or(0,arguments,this),this},t.from=function(n,r,o){return Or(1,arguments,this),this},t.fromTo=function(n,r,o,a){return Or(2,arguments,this),this},t.set=function(n,r,o){return r.duration=0,r.parent=this,Tr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new je(n,r,Nt(this,o),1),this},t.call=function(n,r,o){return ii(this,je.delayedCall(0,n,r),o)},t.staggerTo=function(n,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new je(n,o,Nt(this,l)),this},t.staggerFrom=function(n,r,o,a,l,c,u){return o.runBackwards=1,Tr(o).immediateRender=vt(o.immediateRender),this.staggerTo(n,r,o,a,l,c,u)},t.staggerFromTo=function(n,r,o,a,l,c,u,d){return a.startAt=o,Tr(a).immediateRender=vt(a.immediateRender),this.staggerTo(n,r,a,l,c,u,d)},t.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:ve(n),d=this._zTime<0!=n<0&&(this._initted||!c),h,f,g,p,_,v,b,x,w,S,P,C;if(this!==ye&&u>l&&n>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,n+=this._time-a),h=u,w=this._start,x=this._ts,v=!x,d&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(P=this._yoyo,_=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,r,o);if(h=ve(u%_),u===l?(p=this._repeat,h=c):(S=ve(u/_),p=~~S,p&&p===S&&(h=c,p--),h>c&&(h=c)),S=Zn(this._tTime,_),!a&&this._tTime&&S!==p&&this._tTime-S*_-this._dur<=0&&(S=p),P&&p&1&&(h=c-h,C=1),p!==S&&!this._lock){var T=P&&S&1,k=T===(P&&p&1);if(p<S&&(T=!T),a=T?0:u%c?c:u,this._lock=1,this.render(a||(C?0:ve(p*_)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Mt(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,S=p),a&&a!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,k&&(this._lock=2,a=T?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Hu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=cp(this,ve(a),ve(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&u&&c&&!r&&!S&&(Mt(this,"onStart"),this._tTime!==u))return this;if(h>=a&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,r,o),h!==this._time||!this._ts&&!v){b=0,g&&(u+=this._zTime=-fe);break}}f=g}else{f=this._last;for(var O=n<0?n:h;f;){if(g=f._prev,(f._act||O<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(O-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(O-f._start)*f._ts,r,o||Je&&el(f)),h!==this._time||!this._ts&&!v){b=0,g&&(u+=this._zTime=O?-fe:fe);break}}f=g}}if(b&&!r&&(this.pause(),b.render(h>=a?0:-fe)._zTime=h>=a?1:-1,this._ts))return this._start=w,yo(this),this.render(n,r,o);this._onUpdate&&!r&&Mt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(w===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hi(this,1),!r&&!(n<0&&!a)&&(u||a||!l)&&(Mt(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var o=this;if(wi(r)||(r=Nt(this,r,n)),!(n instanceof Kr)){if(ot(n))return n.forEach(function(a){return o.add(a,r)}),this;if(Ye(n))return this.addLabel(n,r);if(ke(n))n=je.delayedCall(0,n);else return this}return this!==n?ii(this,n,r):this},t.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ht);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof je?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},t.remove=function(n){return Ye(n)?this.removeLabel(n):ke(n)?this.killTweensOf(n):(n.parent===this&&vo(this,n),n===this._recent&&(this._recent=this._last),un(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ve(At.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Nt(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,o){var a=je.delayedCall(0,r||Yr,o);return a.data="isPause",this._hasPause=1,ii(this,a,Nt(this,n))},t.removePause=function(n){var r=this._first;for(n=Nt(this,n);r;)r._start===n&&r.data==="isPause"&&Hi(r),r=r._next},t.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Mi!==a[l]&&a[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var o=[],a=Vt(n),l=this._first,c=wi(r),u;l;)l instanceof je?ip(l._targets,a)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(n,r){r=r||{};var o=this,a=Nt(o,n),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=je.to(o,jt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||fe,onStart:function(){if(o.pause(),!f){var _=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==_&&Jn(g,_,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(n,r,o){return this.tweenTo(r,jt({startAt:{time:Nt(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),ec(this,Nt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),ec(this,Nt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+fe)},t.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=ve(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return un(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),un(this)},t.totalDuration=function(n){var r=0,o=this,a=o._last,l=Ht,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ii(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ve(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Jn(o,o===ye&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(ye._ts&&(wu(ye,Qs(n,ye)),yu=At.frame),At.frame>=Kl){Kl+=Dt.autoSleep||120;var r=ye._first;if((!r||!r._ts)&&Dt.autoSleep&&At._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||At.sleep()}}},e})(Kr);jt(pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var $p=function(e,t,i,n,r,o,a){var l=new xt(this._pt,e,t,0,1,Ku,null,r),c=0,u=0,d,h,f,g,p,_,v,b;for(l.b=i,l.e=n,i+="",n+="",(v=~n.indexOf("random("))&&(n=Xr(n)),o&&(b=[i,n],o(b,e,t),i=b[0],n=b[1]),h=i.match(Eo)||[];d=Eo.exec(n);)g=d[0],p=n.substring(c,d.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(_=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:_,c:g.charAt(1)==="="?Vn(_,g)-_:parseFloat(g)-_,m:f&&f<4?Math.round:0},c=Eo.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(mu.test(n)||v)&&(l.e=0),this._pt=l,l},tl=function(e,t,i,n,r,o,a,l,c,u){ke(n)&&(n=n(r||0,e,o));var d=e[t],h=i!=="get"?i:ke(d)?c?e[t.indexOf("set")||!ke(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=ke(d)?c?Ep:Xu:nl,g;if(Ye(n)&&(~n.indexOf("random(")&&(n=Xr(n)),n.charAt(1)==="="&&(g=Vn(h,n)+(rt(h)||0),(g||g===0)&&(n=g))),!u||h!==n||aa)return!isNaN(h*n)&&n!==""?(g=new xt(this._pt,e,t,+h||0,n-(h||0),typeof d=="boolean"?Lp:Gu,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&Ka(t,n),$p.call(this,e,t,h,n,f,l||Dt.stringFilter,c))},Pp=function(e,t,i,n,r){if(ke(e)&&(e=Er(e,r,t,i,n)),!li(e)||e.style&&e.nodeType||ot(e)||pu(e))return Ye(e)?Er(e,r,t,i,n):e;var o={},a;for(a in e)o[a]=Er(e[a],r,t,i,n);return o},qu=function(e,t,i,n,r,o){var a,l,c,u;if(Ot[e]&&(a=new Ot[e]).init(r,a.rawVars?t[e]:Pp(t[e],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new xt(i._pt,r,e,0,1,a.render,a,0,a.priority),i!==Un))for(c=i._ptLookup[i._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Mi,aa,il=function s(e,t,i){var n=e.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,d=n.yoyoEase,h=n.keyframes,f=n.autoRevert,g=e._dur,p=e._startAt,_=e._targets,v=e.parent,b=v&&v.data==="nested"?v.vars.targets:_,x=e._overwrite==="auto"&&!Wa,w=e.timeline,S,P,C,T,k,O,M,E,V,U,I,N,j;if(w&&(!h||!r)&&(r="none"),e._ease=dn(r,Gn.ease),e._yEase=d?Uu(dn(d===!0?r:d,Gn.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!n.runBackwards,!w||h&&!n.stagger){if(E=_[0]?cn(_[0]).harness:0,N=E&&n[E.prop],S=Js(n,Za),p&&(p._zTime<0&&p.progress(1),t<0&&u&&a&&!f?p.render(-1,!0):p.revert(u&&g?zs:ep),p._lazy=0),o){if(Hi(e._startAt=je.set(_,jt({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&vt(l),startAt:null,delay:0,onUpdate:c&&function(){return Mt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Je||!a&&!f)&&e._startAt.revert(zs),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!p){if(t&&(a=!1),C=jt({overwrite:!1,data:"isFromStart",lazy:a&&!p&&vt(l),immediateRender:a,stagger:0,parent:v},S),N&&(C[E.prop]=N),Hi(e._startAt=je.set(_,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Je?e._startAt.revert(zs):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,fe,fe);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&vt(l)||l&&!g,P=0;P<_.length;P++){if(k=_[P],M=k._gsap||Qa(_)[P]._gsap,e._ptLookup[P]=U={},ta[M.id]&&Ii.length&&Zs(),I=b===_?P:b.indexOf(k),E&&(V=new E).init(k,N||S,e,I,b)!==!1&&(e._pt=T=new xt(e._pt,k,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(Z){U[Z]=T}),V.priority&&(O=1)),!E||N)for(C in S)Ot[C]&&(V=qu(C,S,e,I,k,b))?V.priority&&(O=1):U[C]=T=tl.call(e,k,C,"get",S[C],I,b,0,n.stringFilter);e._op&&e._op[P]&&e.kill(k,e._op[P]),x&&e._pt&&(Mi=e,ye.killTweensOf(k,U,e.globalTime(t)),j=!e.parent,Mi=0),e._pt&&l&&(ta[M.id]=1)}O&&Zu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,h&&t<=0&&w.render(Ht,!0,!0)},kp=function(e,t,i,n,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return aa=1,e.vars[t]="+=0",il(e,a),aa=0,l?Wr(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(n||n===0)&&!r?n:u.s+(n||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=Le(i)+rt(d.e)),d.b&&(d.b=u.s+rt(d.b))},Tp=function(e,t){var i=e[0]?cn(e[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return t;r=Kn({},t);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Op=function(e,t,i,n){var r=t.ease||n||"power1.inOut",o,a;if(ot(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Er=function(e,t,i,n,r){return ke(e)?e.call(t,i,n,r):Ye(e)&&~e.indexOf("random(")?Xr(e):e},Wu=Ja+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yu={};yt(Wu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Yu[s]=1});var je=(function(s){hu(e,s);function e(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:Tr(n))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,p=l.defaults,_=l.scrollTrigger,v=l.yoyoEase,b=n.parent||ye,x=(ot(i)||pu(i)?wi(i[0]):"length"in n)?[i]:Vt(i),w,S,P,C,T,k,O,M;if(a._targets=x.length?Qa(x):Wr("GSAP target "+i+" not found. https://gsap.com",!Dt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||h||ms(c)||ms(u)){if(n=a.vars,w=a.timeline=new pt({data:"nested",defaults:p||{},targets:b&&b.data==="nested"?b.vars.targets:x}),w.kill(),w.parent=w._dp=mi(a),w._start=0,h||ms(c)||ms(u)){if(C=x.length,O=h&&Au(h),li(h))for(T in h)~Wu.indexOf(T)&&(M||(M={}),M[T]=h[T]);for(S=0;S<C;S++)P=Js(n,Yu),P.stagger=0,v&&(P.yoyoEase=v),M&&Kn(P,M),k=x[S],P.duration=+Er(c,mi(a),S,k,x),P.delay=(+Er(u,mi(a),S,k,x)||0)-a._delay,!h&&C===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),w.to(k,P,O?O(S,k,x):0),w._ease=se.none;w.duration()?c=u=0:a.timeline=0}else if(g){Tr(jt(w.vars.defaults,{ease:"none"})),w._ease=dn(g.ease||n.ease||"none");var E=0,V,U,I;if(ot(g))g.forEach(function(N){return w.to(x,N,">")}),w.duration();else{P={};for(T in g)T==="ease"||T==="easeEach"||Op(T,g[T],P,g.easeEach);for(T in P)for(V=P[T].sort(function(N,j){return N.t-j.t}),E=0,S=0;S<V.length;S++)U=V[S],I={ease:U.e,duration:(U.t-(S?V[S-1].t:0))/100*c},I[T]=U.v,w.to(x,I,E),E+=I.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return f===!0&&!Wa&&(Mi=mi(a),ye.killTweensOf(x),Mi=0),ii(b,mi(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!g&&a._start===ve(b._time)&&vt(d)&&op(mi(a))&&b.data!=="nested")&&(a._tTime=-fe,a.render(Math.max(0,-u)||0)),_&&ku(mi(a),_),a}var t=e.prototype;return t.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,u=n<0,d=n>l-fe&&!u?l:n<fe?0:n,h,f,g,p,_,v,b,x,w;if(!c)lp(this,n,r,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,x=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+n,r,o);if(h=ve(d%p),d===l?(g=this._repeat,h=c):(_=ve(d/p),g=~~_,g&&g===_?(h=c,g--):h>c&&(h=c)),v=this._yoyo&&g&1,v&&(w=this._yEase,h=c-h),_=Zn(this._tTime,p),h===a&&!o&&this._initted&&g===_)return this._tTime=d,this;g!==_&&(x&&this._yEase&&Hu(x,v),this.vars.repeatRefresh&&!v&&!this._lock&&h!==p&&this._initted&&(this._lock=o=1,this.render(ve(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Tu(this,u?n:h,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(w||this._ease)(h/c),this._from&&(this.ratio=b=1-b),!a&&d&&!r&&!_&&(Mt(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;x&&x.render(n<0?n:x._dur*x._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&ia(this,n,r,o),Mt(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!r&&this.parent&&Mt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ia(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hi(this,1),!r&&!(u&&!a)&&(d||a||v)&&(Mt(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,o,a,l){Gr||At.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||il(this,c),u=this._ease(c/this._dur),kp(this,n,r,o,a,u,c,l)?this.resetTo(n,r,o,a,1):(xo(this,0),this.parent||$u(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?yr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Je),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Mi&&Mi.vars.overwrite!==!0)._first||yr(this),this.parent&&o!==this.timeline.totalDuration()&&Jn(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Vt(n):a,c=this._ptLookup,u=this._pt,d,h,f,g,p,_,v;if((!r||r==="all")&&rp(a,l))return r==="all"&&(this._pt=0),yr(this);for(d=this._op=this._op||[],r!=="all"&&(Ye(r)&&(p={},yt(r,function(b){return p[b]=1}),r=p),r=Tp(a,r)),v=a.length;v--;)if(~l.indexOf(a[v])){h=c[v],r==="all"?(d[v]=r,g=h,f={}):(f=d[v]=d[v]||{},g=r);for(p in g)_=h&&h[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&vo(this,_,"_pt"),delete h[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&yr(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return Or(1,arguments)},e.delayedCall=function(n,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,r,o){return Or(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return ye.killTweensOf(n,r,o)},e})(Kr);jt(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yt("staggerTo,staggerFrom,staggerFromTo",function(s){je[s]=function(){var e=new pt,t=ra.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var nl=function(e,t,i){return e[t]=i},Xu=function(e,t,i){return e[t](i)},Ep=function(e,t,i,n){return e[t](n.fp,i)},Ap=function(e,t,i){return e.setAttribute(t,i)},rl=function(e,t){return ke(e[t])?Xu:Ya(e[t])&&e.setAttribute?Ap:nl},Gu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Lp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ku=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},sl=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Mp=function(e,t,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,t,i),r=o},zp=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?vo(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Dp=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Zu=function(e){for(var t=e._pt,i,n,r,o;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=r},xt=(function(){function s(t,i,n,r,o,a,l,c,u){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||Gu,this.d=l||this,this.set=c||nl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Dp,this.m=i,this.mt=r,this.tween=n},s})();yt(Ja+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Za[s]=1});Rt.TweenMax=Rt.TweenLite=je;Rt.TimelineLite=Rt.TimelineMax=pt;ye=new pt({sortChildren:!1,defaults:Gn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Dt.stringFilter=Fu;var hn=[],Rs={},Rp=[],ic=0,jp=0,Do=function(e){return(Rs[e]||Rp).map(function(t){return t()})},la=function(){var e=Date.now(),t=[];e-ic>2&&(Do("matchMediaInit"),hn.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=ei.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Do("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),ic=e,Do("matchMedia"))},Ju=(function(){function s(t,i){this.selector=i&&sa(i),this.data=[],this._r=[],this.isReverted=!1,this.id=jp++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){ke(i)&&(r=n,n=i,i=ke);var o=this,a=function(){var c=_e,u=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=sa(r)),_e=o,d=n.apply(o,arguments),ke(d)&&o._r.push(d),_e=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===ke?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=_e;_e=null,i(this),_e=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof je&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof pt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=hn.length;o--;)hn[o].id===this.id&&hn.splice(o,1)},e.revert=function(i){this.kill(i||{})},s})(),Ip=(function(){function s(t){this.contexts=[],this.scope=t,_e&&_e.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){li(i)||(i={matches:i});var o=new Ju(0,r||this.scope),a=o.conditions={},l,c,u;_e&&!o.selector&&(o.selector=_e.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?u=1:(l=ei.matchMedia(i[c]),l&&(hn.indexOf(o)<0&&hn.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(la):l.addEventListener("change",la)));return u&&n(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),eo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return ju(n)})},timeline:function(e){return new pt(e)},getTweensOf:function(e,t){return ye.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ye(e)&&(e=Vt(e)[0]);var r=cn(e||{}).get,o=i?Su:Cu;return i==="native"&&(i=""),e&&(t?o((Ot[t]&&Ot[t].get||r)(e,t,i,n)):function(a,l,c){return o((Ot[a]&&Ot[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Vt(e),e.length>1){var n=e.map(function(u){return Ct.quickSetter(u,t,i)}),r=n.length;return function(u){for(var d=r;d--;)n[d](u)}}e=e[0]||{};var o=Ot[t],a=cn(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;Un._pt=0,d.init(e,i?u+i:u,Un,0,[e]),d.render(1,d),Un._pt&&sl(1,Un)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var n,r=Ct.to(e,jt((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return ye.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=dn(e.ease,Gn.ease)),Zl(Gn,e||{})},config:function(e){return Zl(Dt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Ot[a]&&!Rt[a]&&Wr(t+" effect requires "+a+" plugin.")}),Ao[t]=function(a,l,c){return i(Vt(a),jt(l||{},r),c)},o&&(pt.prototype[t]=function(a,l,c){return this.add(Ao[t](a,li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){se[e]=dn(t)},parseEase:function(e,t){return arguments.length?dn(e,t):se},getById:function(e){return ye.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new pt(e),n,r;for(i.smoothChildTiming=vt(e.smoothChildTiming),ye.remove(i),i._dp=0,i._time=i._tTime=ye._time,n=ye._first;n;)r=n._next,(t||!(!n._dur&&n instanceof je&&n.vars.onComplete===n._targets[0]))&&ii(i,n,n._start-n._delay),n=r;return ii(ye,i,0),i},context:function(e,t){return e?new Ju(e,t):_e},matchMedia:function(e){return new Ip(e)},matchMediaRefresh:function(){return hn.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||la()},addEventListener:function(e,t){var i=Rs[e]||(Rs[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Rs[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:mp,wrapYoyo:_p,distribute:Au,random:Mu,snap:Lu,normalize:gp,getUnit:rt,clamp:dp,splitColor:Iu,toArray:Vt,selector:sa,mapRange:Du,pipe:fp,unitize:pp,interpolate:bp,shuffle:Eu},install:bu,effects:Ao,ticker:At,updateRoot:pt.updateRoot,plugins:Ot,globalTimeline:ye,core:{PropTween:xt,globals:vu,Tween:je,Timeline:pt,Animation:Kr,getCache:cn,_removeLinkedListItem:vo,reverting:function(){return Je},context:function(e){return e&&_e&&(_e.data.push(e),e._ctx=_e),_e},suppressOverwrites:function(e){return Wa=e}}};yt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return eo[s]=je[s]});At.add(pt.updateRoot);Un=eo.to({},{duration:0});var Np=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Fp=function(e,t){var i=e._targets,n,r,o;for(n in t)for(r=i.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=Np(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[r],n))},Ro=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(Ye(r)&&(l={},yt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Fp(a,r)}}}},Ct=eo.registerPlugin({name:"attr",init:function(e,t,i,n,r){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Je?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ro("roundProps",oa),Ro("modifiers"),Ro("snap",Lu))||eo;je.version=pt.version=Ct.version="3.14.2";_u=1;Xa()&&Qn();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nc,zi,Bn,ol,on,rc,al,Up=function(){return typeof window<"u"},Ci={},tn=180/Math.PI,qn=Math.PI/180,zn=Math.atan2,sc=1e8,ll=/([A-Z])/g,Hp=/(left|right|width|margin|padding|x)/i,Vp=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ca=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Wp=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yp=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Qu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ed=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Xp=function(e,t,i){return e.style[t]=i},Gp=function(e,t,i){return e.style.setProperty(t,i)},Kp=function(e,t,i){return e._gsap[t]=i},Zp=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Jp=function(e,t,i,n,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},Qp=function(e,t,i,n,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},xe="transform",wt=xe+"Origin",eg=function s(e,t){var i=this,n=this.target,r=n.style,o=n._gsap;if(e in Ci&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=_i(n,a)}):this.tfm[e]=o.x?o[e]:_i(n,e),e===wt&&(this.tfm.zOrigin=o.zOrigin);else return ri.transform.split(",").forEach(function(a){return s.call(i,a,t)});if(this.props.indexOf(xe)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(wt,t,"")),e=xe}(r||t)&&this.props.push(e,t,r[e])},td=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tg=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(ll,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=al(),(!r||!r.isStart)&&!i[xe]&&(td(i),n.zOrigin&&i[wt]&&(i[wt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},id=function(e,t){var i={target:e,props:[],revert:tg,save:eg};return e._gsap||Ct.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},nd,ua=function(e,t){var i=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return i&&i.style?i:zi.createElement(e)},zt=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(ll,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,er(t)||t,1)||""},oc="O,Moz,ms,Ms,Webkit".split(","),er=function(e,t,i){var n=t||on,r=n.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(oc[o]+e in r););return o<0?null:(o===3?"ms":o>=0?oc[o]:"")+e},da=function(){Up()&&window.document&&(nc=window,zi=nc.document,Bn=zi.documentElement,on=ua("div")||{style:{}},ua("div"),xe=er(xe),wt=xe+"Origin",on.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nd=!!er("perspective"),al=Ct.core.reverting,ol=1)},ac=function(e){var t=e.ownerSVGElement,i=ua("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Bn.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Bn.removeChild(i),r},lc=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},rd=function(e){var t,i;try{t=e.getBBox()}catch{t=ac(e),i=1}return t&&(t.width||t.height)||i||(t=ac(e)),t&&!t.width&&!t.x&&!t.y?{x:+lc(e,["x","cx","x1"])||0,y:+lc(e,["y","cy","y1"])||0,width:0,height:0}:t},sd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rd(e))},Vi=function(e,t){if(t){var i=e.style,n;t in Ci&&t!==wt&&(t=xe),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(ll,"-$1").toLowerCase())):i.removeAttribute(t)}},Di=function(e,t,i,n,r,o){var a=new xt(e._pt,t,i,0,1,o?ed:Qu);return e._pt=a,a.b=n,a.e=r,e._props.push(i),a},cc={deg:1,rad:1,turn:1},ig={grid:1,flex:1},Bi=function s(e,t,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=on.style,l=Hp.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=n==="px",f=n==="%",g,p,_,v;if(n===o||!r||cc[n]||cc[o])return r;if(o!=="px"&&!h&&(r=s(e,t,i,"px")),v=e.getCTM&&sd(e),(f||o==="%")&&(Ci[t]||~t.indexOf("adius")))return g=v?e.getBBox()[l?"width":"height"]:e[u],Le(f?r/g*d:r/100*g);if(a[l?"width":"height"]=d+(h?o:n),p=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,v&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===zi||!p.appendChild)&&(p=zi.body),_=p._gsap,_&&f&&_.width&&l&&_.time===At.time&&!_.uncache)return Le(r/_.width*d);if(f&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+n,g=e[u],b?e.style[t]=b:Vi(e,t)}else(f||o==="%")&&!ig[zt(p,"display")]&&(a.position=zt(e,"position")),p===e&&(a.position="static"),p.appendChild(on),g=on[u],p.removeChild(on),a.position="absolute";return l&&f&&(_=cn(p),_.time=At.time,_.width=p[u]),Le(h?g*r/d:g&&r?d/g*r:0)},_i=function(e,t,i,n){var r;return ol||da(),t in ri&&t!=="transform"&&(t=ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ci[t]&&t!=="transform"?(r=Jr(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:io(zt(e,wt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=to[t]&&to[t](e,t,i)||zt(e,t)||xu(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Bi(e,t,r,i)+i:r},ng=function(e,t,i,n){if(!i||i==="none"){var r=er(t,e,1),o=r&&zt(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=zt(e,"borderTopColor"))}var a=new xt(this._pt,e.style,t,0,1,Ku),l=0,c=0,u,d,h,f,g,p,_,v,b,x,w,S;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=zt(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(p=e.style[t],e.style[t]=n,n=zt(e,t)||n,p?e.style[t]=p:Vi(e,t)),u=[i,n],Fu(u),i=u[0],n=u[1],h=i.match(Fn)||[],S=n.match(Fn)||[],S.length){for(;d=Fn.exec(n);)_=d[0],b=n.substring(l,d.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),_!==(p=h[c++]||"")&&(f=parseFloat(p)||0,w=p.substr((f+"").length),_.charAt(1)==="="&&(_=Vn(f,_)+w),v=parseFloat(_),x=_.substr((v+"").length),l=Fn.lastIndex-x.length,x||(x=x||Dt.units[t]||w,l===n.length&&(n+=x,a.e+=x)),w!==x&&(f=Bi(e,t,p,x)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:f,c:v-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?ed:Qu;return mu.test(n)&&(a.e=0),this._pt=a,a},uc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rg=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=uc[i]||i,t[1]=uc[n]||n,t.join(" ")},sg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ci[a]&&(l=1,a=a==="transformOrigin"?wt:xe),Vi(i,a);l&&(Vi(i,xe),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Jr(i,1),o.uncache=1,td(n)))}},to={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var o=e._pt=new xt(e._pt,t,i,0,0,sg);return o.u=n,o.pr=-10,o.tween=r,e._props.push(i),1}}},Zr=[1,0,0,1,0,0],od={},ad=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dc=function(e){var t=zt(e,xe);return ad(t)?Zr:t.substr(7).match(gu).map(Le)},cl=function(e,t){var i=e._gsap||cn(e),n=e.style,r=dc(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Zr:r):(r===Zr&&!e.offsetParent&&e!==Bn&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Bn.appendChild(e)),r=dc(e),l?n.display=l:Vi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Bn.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ha=function(e,t,i,n,r,o){var a=e._gsap,l=r||cl(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],g=l[1],p=l[2],_=l[3],v=l[4],b=l[5],x=t.split(" "),w=parseFloat(x[0])||0,S=parseFloat(x[1])||0,P,C,T,k;i?l!==Zr&&(C=f*_-g*p)&&(T=w*(_/C)+S*(-p/C)+(p*b-_*v)/C,k=w*(-g/C)+S*(f/C)-(f*b-g*v)/C,w=T,S=k):(P=rd(e),w=P.x+(~x[0].indexOf("%")?w/100*P.width:w),S=P.y+(~(x[1]||x[0]).indexOf("%")?S/100*P.height:S)),n||n!==!1&&a.smooth?(v=w-c,b=S-u,a.xOffset=d+(v*f+b*p)-v,a.yOffset=h+(v*g+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=w,a.yOrigin=S,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[wt]="0px 0px",o&&(Di(o,a,"xOrigin",c,w),Di(o,a,"yOrigin",u,S),Di(o,a,"xOffset",d,a.xOffset),Di(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",w+" "+S)},Jr=function(e,t){var i=e._gsap||new Bu(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=zt(e,wt)||"0",u,d,h,f,g,p,_,v,b,x,w,S,P,C,T,k,O,M,E,V,U,I,N,j,Z,Y,y,K,Te,ge,ue,we;return u=d=h=p=_=v=b=x=w=0,f=g=1,i.svg=!!(e.getCTM&&sd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xe]!=="none"?l[xe]:"")),n.scale=n.rotate=n.translate="none"),C=cl(e,i.svg),i.svg&&(i.uncache?(Z=e.getBBox(),c=i.xOrigin-Z.x+"px "+(i.yOrigin-Z.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),ha(e,j||c,!!j||i.originIsAbsolute,i.smooth!==!1,C)),S=i.xOrigin||0,P=i.yOrigin||0,C!==Zr&&(M=C[0],E=C[1],V=C[2],U=C[3],u=I=C[4],d=N=C[5],C.length===6?(f=Math.sqrt(M*M+E*E),g=Math.sqrt(U*U+V*V),p=M||E?zn(E,M)*tn:0,b=V||U?zn(V,U)*tn+p:0,b&&(g*=Math.abs(Math.cos(b*qn))),i.svg&&(u-=S-(S*M+P*V),d-=P-(S*E+P*U))):(we=C[6],ge=C[7],y=C[8],K=C[9],Te=C[10],ue=C[11],u=C[12],d=C[13],h=C[14],T=zn(we,Te),_=T*tn,T&&(k=Math.cos(-T),O=Math.sin(-T),j=I*k+y*O,Z=N*k+K*O,Y=we*k+Te*O,y=I*-O+y*k,K=N*-O+K*k,Te=we*-O+Te*k,ue=ge*-O+ue*k,I=j,N=Z,we=Y),T=zn(-V,Te),v=T*tn,T&&(k=Math.cos(-T),O=Math.sin(-T),j=M*k-y*O,Z=E*k-K*O,Y=V*k-Te*O,ue=U*O+ue*k,M=j,E=Z,V=Y),T=zn(E,M),p=T*tn,T&&(k=Math.cos(T),O=Math.sin(T),j=M*k+E*O,Z=I*k+N*O,E=E*k-M*O,N=N*k-I*O,M=j,I=Z),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,v=180-v),f=Le(Math.sqrt(M*M+E*E+V*V)),g=Le(Math.sqrt(N*N+we*we)),T=zn(I,N),b=Math.abs(T)>2e-4?T*tn:0,w=ue?1/(ue<0?-ue:ue):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ad(zt(e,xe)),j&&e.setAttribute("transform",j))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(f*=-1,b+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Le(f),i.scaleY=Le(g),i.rotation=Le(p)+a,i.rotationX=Le(_)+a,i.rotationY=Le(v)+a,i.skewX=b+a,i.skewY=x+a,i.transformPerspective=w+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[wt]=io(c)),i.xOffset=i.yOffset=0,i.force3D=Dt.force3D,i.renderTransform=i.svg?ag:nd?ld:og,i.uncache=0,i},io=function(e){return(e=e.split(" "))[0]+" "+e[1]},jo=function(e,t,i){var n=rt(t);return Le(parseFloat(t)+parseFloat(Bi(e,"x",i+"px",n)))+n},og=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ld(e,t)},Ji="0deg",pr="0px",Qi=") ",ld=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,f=i.skewY,g=i.scaleX,p=i.scaleY,_=i.transformPerspective,v=i.force3D,b=i.target,x=i.zOrigin,w="",S=v==="auto"&&e&&e!==1||v===!0;if(x&&(d!==Ji||u!==Ji)){var P=parseFloat(u)*qn,C=Math.sin(P),T=Math.cos(P),k;P=parseFloat(d)*qn,k=Math.cos(P),o=jo(b,o,C*k*-x),a=jo(b,a,-Math.sin(P)*-x),l=jo(b,l,T*k*-x+x)}_!==pr&&(w+="perspective("+_+Qi),(n||r)&&(w+="translate("+n+"%, "+r+"%) "),(S||o!==pr||a!==pr||l!==pr)&&(w+=l!==pr||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qi),c!==Ji&&(w+="rotate("+c+Qi),u!==Ji&&(w+="rotateY("+u+Qi),d!==Ji&&(w+="rotateX("+d+Qi),(h!==Ji||f!==Ji)&&(w+="skew("+h+", "+f+Qi),(g!==1||p!==1)&&(w+="scale("+g+", "+p+Qi),b.style[xe]=w||"translate(0, 0)"},ag=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,f=i.target,g=i.xOrigin,p=i.yOrigin,_=i.xOffset,v=i.yOffset,b=i.forceCSS,x=parseFloat(o),w=parseFloat(a),S,P,C,T,k;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qn,c*=qn,S=Math.cos(l)*d,P=Math.sin(l)*d,C=Math.sin(l-c)*-h,T=Math.cos(l-c)*h,c&&(u*=qn,k=Math.tan(c-u),k=Math.sqrt(1+k*k),C*=k,T*=k,u&&(k=Math.tan(u),k=Math.sqrt(1+k*k),S*=k,P*=k)),S=Le(S),P=Le(P),C=Le(C),T=Le(T)):(S=d,T=h,P=C=0),(x&&!~(o+"").indexOf("px")||w&&!~(a+"").indexOf("px"))&&(x=Bi(f,"x",o,"px"),w=Bi(f,"y",a,"px")),(g||p||_||v)&&(x=Le(x+g-(g*S+p*C)+_),w=Le(w+p-(g*P+p*T)+v)),(n||r)&&(k=f.getBBox(),x=Le(x+n/100*k.width),w=Le(w+r/100*k.height)),k="matrix("+S+","+P+","+C+","+T+","+x+","+w+")",f.setAttribute("transform",k),b&&(f.style[xe]=k)},lg=function(e,t,i,n,r){var o=360,a=Ye(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?tn:1),c=l-n,u=n+c+"deg",d,h;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*sc)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*sc)%o-~~(c/o)*o)),e._pt=h=new xt(e._pt,t,i,n,c,Bp),h.e=u,h.u="deg",e._props.push(i),h},hc=function(e,t){for(var i in t)e[i]=t[i];return e},cg=function(e,t,i){var n=hc({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,h,f,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[xe]=t,a=Jr(i,1),Vi(i,xe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[xe],o[xe]=t,a=Jr(i,1),o[xe]=c);for(l in Ci)c=n[l],u=a[l],c!==u&&r.indexOf(l)<0&&(f=rt(c),g=rt(u),d=f!==g?Bi(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new xt(e._pt,a,l,d,h-d,ca),e._pt.u=g||0,e._props.push(l));hc(a,n)};yt("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",o=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(a){return e<2?s+a:"border"+a+s});to[e>1?"border"+s:s]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=o.map(function(g){return _i(a,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(g,p){return f[g]=h[p]=h[p]||h[(p-1)/2|0]}),a.init(l,f,d)}});var cd={name:"css",register:da,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,h,f,g,p,_,v,b,x,w,S,P,C,T,k;ol||da(),this.styles=this.styles||id(e),T=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Ot[p]&&qu(p,t,i,n,e,r)))){if(f=typeof u,g=to[p],f==="function"&&(u=u.call(i,n,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Xr(u)),g)g(this,e,p,u,i)&&(C=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Ni.lastIndex=0,Ni.test(c)||(_=rt(c),v=rt(u),v?_!==v&&(c=Bi(e,p,c,v)+v):_&&(u+=_)),this.add(a,"setProperty",c,u,n,r,0,0,p),o.push(p),T.push(p,0,a[p]);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,n,e,r):l[p],Ye(c)&&~c.indexOf("random(")&&(c=Xr(c)),rt(c+"")||c==="auto"||(c+=Dt.units[p]||rt(_i(e,p))||""),(c+"").charAt(1)==="="&&(c=_i(e,p))):c=_i(e,p),h=parseFloat(c),b=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),p in ri&&(p==="autoAlpha"&&(h===1&&_i(e,"visibility")==="hidden"&&d&&(h=0),T.push("visibility",0,a.visibility),Di(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=ri[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in Ci,x){if(this.styles.save(p),k=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=zt(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var O=e.style.perspective;e.style.perspective=u,u=zt(e,"perspective"),O?e.style.perspective=O:Vi(e,"perspective")}d=parseFloat(u)}if(w||(S=e._gsap,S.renderTransform&&!t.parseTransform||Jr(e,t.parseTransform),P=t.smoothOrigin!==!1&&S.smooth,w=this._pt=new xt(this._pt,a,xe,0,1,S.renderTransform,S,0,-1),w.dep=1),p==="scale")this._pt=new xt(this._pt,S,"scaleY",S.scaleY,(b?Vn(S.scaleY,b+d):d)-S.scaleY||0,ca),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){T.push(wt,0,a[wt]),u=rg(u),S.svg?ha(e,u,0,P,0,this):(v=parseFloat(u.split(" ")[2])||0,v!==S.zOrigin&&Di(this,S,"zOrigin",S.zOrigin,v),Di(this,a,p,io(c),io(u)));continue}else if(p==="svgOrigin"){ha(e,u,1,P,0,this);continue}else if(p in od){lg(this,S,p,h,b?Vn(h,b+u):u);continue}else if(p==="smoothOrigin"){Di(this,S,"smooth",S.smooth,u);continue}else if(p==="force3D"){S[p]=u;continue}else if(p==="transform"){cg(this,u,e);continue}}else p in a||(p=er(p)||p);if(x||(d||d===0)&&(h||h===0)&&!Vp.test(u)&&p in a)_=(c+"").substr((h+"").length),d||(d=0),v=rt(u)||(p in Dt.units?Dt.units[p]:_),_!==v&&(h=Bi(e,p,c,v)),this._pt=new xt(this._pt,x?S:a,p,h,(b?Vn(h,b+d):d)-h,!x&&(v==="px"||p==="zIndex")&&t.autoRound!==!1?Yp:ca),this._pt.u=v||0,x&&k!==u?(this._pt.b=c,this._pt.e=k,this._pt.r=Wp):_!==v&&v!=="%"&&(this._pt.b=c,this._pt.r=qp);else if(p in a)ng.call(this,e,p,c,b?b+u:u);else if(p in e)this.add(e,p,c||e[p],b?b+u:u,n,r);else if(p!=="parseTransform"){Ka(p,u);continue}x||(p in a?T.push(p,0,a[p]):typeof e[p]=="function"?T.push(p,2,e[p]()):T.push(p,1,c||e[p])),o.push(p)}}C&&Zu(this)},render:function(e,t){if(t.tween._time||!al())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:_i,aliases:ri,getSetter:function(e,t,i){var n=ri[t];return n&&n.indexOf(",")<0&&(t=n),t in Ci&&t!==wt&&(e._gsap.x||_i(e,"x"))?i&&rc===i?t==="scale"?Zp:Kp:(rc=i||{})&&(t==="scale"?Jp:Qp):e.style&&!Ya(e.style[t])?Xp:~t.indexOf("-")?Gp:rl(e,t)},core:{_removeProperty:Vi,_getMatrix:cl}};Ct.utils.checkPrefix=er;Ct.core.getStyleSaver=id;(function(s,e,t,i){var n=yt(s+","+e+","+t,function(r){Ci[r]=1});yt(e,function(r){Dt.units[r]="deg",od[r]=1}),ri[n[13]]=s+","+e,yt(i,function(r){var o=r.split(":");ri[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Dt.units[s]="px"});Ct.registerPlugin(cd);var oe=Ct.registerPlugin(cd)||Ct;oe.core.Tween;/*!
 * paths 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ug=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,dg=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,hg=Math.PI/180,_s=Math.sin,bs=Math.cos,Ar=Math.abs,gr=Math.sqrt,fg=function(e){return typeof e=="number"},fc=1e5,Ei=function(e){return Math.round(e*fc)/fc||0},pc=function(e){return e.closed=Math.abs(e[0]-e[e.length-2])<.001&&Math.abs(e[1]-e[e.length-1])<.001};function pg(s,e,t,i,n,r,o){for(var a=s.length,l,c,u,d,h;--a>-1;)for(l=s[a],c=l.length,u=0;u<c;u+=2)d=l[u],h=l[u+1],l[u]=d*e+h*i+r,l[u+1]=d*t+h*n+o;return s._dirty=1,s}function gg(s,e,t,i,n,r,o,a,l){if(!(s===a&&e===l)){t=Ar(t),i=Ar(i);var c=n%360*hg,u=bs(c),d=_s(c),h=Math.PI,f=h*2,g=(s-a)/2,p=(e-l)/2,_=u*g+d*p,v=-d*g+u*p,b=_*_,x=v*v,w=b/(t*t)+x/(i*i);w>1&&(t=gr(w)*t,i=gr(w)*i);var S=t*t,P=i*i,C=(S*P-S*x-P*b)/(S*x+P*b);C<0&&(C=0);var T=(r===o?-1:1)*gr(C),k=T*(t*v/i),O=T*-(i*_/t),M=(s+a)/2,E=(e+l)/2,V=M+(u*k-d*O),U=E+(d*k+u*O),I=(_-k)/t,N=(v-O)/i,j=(-_-k)/t,Z=(-v-O)/i,Y=I*I+N*N,y=(N<0?-1:1)*Math.acos(I/gr(Y)),K=(I*Z-N*j<0?-1:1)*Math.acos((I*j+N*Z)/gr(Y*(j*j+Z*Z)));isNaN(K)&&(K=h),!o&&K>0?K-=f:o&&K<0&&(K+=f),y%=f,K%=f;var Te=Math.ceil(Ar(K)/(f/4)),ge=[],ue=K/Te,we=4/3*_s(ue/2)/(1+bs(ue/2)),Ue=u*t,Ce=d*t,Xe=d*-i,He=u*i,Se;for(Se=0;Se<Te;Se++)n=y+Se*ue,_=bs(n),v=_s(n),I=bs(n+=ue),N=_s(n),ge.push(_-we*v,v+we*_,I+we*N,N-we*I,I,N);for(Se=0;Se<ge.length;Se+=2)_=ge[Se],v=ge[Se+1],ge[Se]=_*Ue+v*Xe+V,ge[Se+1]=_*Ce+v*He+U;return ge[Se-2]=a,ge[Se-1]=l,ge}}function mg(s){var e=(s+"").replace(dg,function(k){var O=+k;return O<1e-4&&O>-1e-4?0:O}).match(ug)||[],t=[],i=0,n=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+s,c,u,d,h,f,g,p,_,v,b,x,w,S,P,C,T=function(O,M,E,V){b=(E-O)/3,x=(V-M)/3,p.push(O+b,M+x,E-b,V-x,E,V)};if(!s||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(S=f,isNaN(e[c])?(f=e[c].toUpperCase(),g=f!==e[c]):c--,d=+e[c+1],h=+e[c+2],g&&(d+=i,h+=n),c||(_=d,v=h),f==="M")p&&(p.length<8?t.length-=1:a+=p.length,pc(p)),i=_=d,n=v=h,p=[d,h],t.push(p),c+=2,f="L";else if(f==="C")p||(p=[0,0]),g||(i=n=0),p.push(d,h,i+e[c+3]*1,n+e[c+4]*1,i+=e[c+5]*1,n+=e[c+6]*1),c+=6;else if(f==="S")b=i,x=n,(S==="C"||S==="S")&&(b+=i-p[p.length-4],x+=n-p[p.length-3]),g||(i=n=0),p.push(b,x,d,h,i+=e[c+3]*1,n+=e[c+4]*1),c+=4;else if(f==="Q")b=i+(d-i)*r,x=n+(h-n)*r,g||(i=n=0),i+=e[c+3]*1,n+=e[c+4]*1,p.push(b,x,i+(d-i)*r,n+(h-n)*r,i,n),c+=4;else if(f==="T")b=i-p[p.length-4],x=n-p[p.length-3],p.push(i+b,n+x,d+(i+b*1.5-d)*r,h+(n+x*1.5-h)*r,i=d,n=h),c+=2;else if(f==="H")T(i,n,i=d,n),c+=1;else if(f==="V")T(i,n,i,n=d+(g?n-i:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(d=_,h=v,p.closed=!0),(f==="L"||Ar(i-d)>.5||Ar(n-h)>.5)&&(T(i,n,d,h),f==="L"&&(c+=2)),i=d,n=h;else if(f==="A"){if(P=e[c+4],C=e[c+5],b=e[c+6],x=e[c+7],u=7,P.length>1&&(P.length<3?(x=b,b=C,u--):(x=C,b=P.substr(2),u-=2),C=P.charAt(1),P=P.charAt(0)),w=gg(i,n,+e[c+1],+e[c+2],+e[c+3],+P,+C,(g?i:0)+b*1,(g?n:0)+x*1),c+=u,w)for(u=0;u<w.length;u++)p.push(w[u]);i=p[p.length-2],n=p[p.length-1]}else console.log(l);return c=p.length,c<6?(t.pop(),c=0):pc(p),t.totalPoints=a+c,t}function _g(s){fg(s[0])&&(s=[s]);var e="",t=s.length,i,n,r,o;for(n=0;n<t;n++){for(o=s[n],e+="M"+Ei(o[0])+","+Ei(o[1])+" C",i=o.length,r=2;r<i;r++)e+=Ei(o[r++])+","+Ei(o[r++])+" "+Ei(o[r++])+","+Ei(o[r++])+" "+Ei(o[r++])+","+Ei(o[r])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bt,ud,dd=function(){return bt||typeof window<"u"&&(bt=window.gsap)&&bt.registerPlugin&&bt},gc=function(){bt=dd(),bt?(bt.registerEase("_CE",sr.create),ud=1):console.warn("Please gsap.registerPlugin(CustomEase)")},bg=1e20,vs=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},vg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,yg=/[cLlsSaAhHvVtTqQ]/g,xg=function(e){var t=e.length,i=bg,n;for(n=1;n<t;n+=6)+e[n]<i&&(i=+e[n]);return i},wg=function(e,t,i){!i&&i!==0&&(i=Math.max(+e[e.length-1],+e[1]));var n=+e[0]*-1,r=-i,o=e.length,a=1/(+e[o-2]+n),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?xg(e)+r:+e[o-1]+r),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+n)*a,e[c+1]=(+e[c+1]+r)*l},Cg=function s(e,t,i,n,r,o,a,l,c,u,d){var h=(e+i)/2,f=(t+n)/2,g=(i+r)/2,p=(n+o)/2,_=(r+a)/2,v=(o+l)/2,b=(h+g)/2,x=(f+p)/2,w=(g+_)/2,S=(p+v)/2,P=(b+w)/2,C=(x+S)/2,T=a-e,k=l-t,O=Math.abs((i-a)*k-(n-l)*T),M=Math.abs((r-a)*k-(o-l)*T),E;return u||(u=[{x:e,y:t},{x:a,y:l}],d=1),u.splice(d||u.length-1,0,{x:P,y:C}),(O+M)*(O+M)>c*(T*T+k*k)&&(E=u.length,s(e,t,h,f,b,x,P,C,c,u,d),s(P,C,w,S,_,v,a,l,c,u,d+1+(u.length-E))),u},sr=(function(){function s(t,i,n){ud||gc(),this.id=t,this.setData(i,n)}var e=s.prototype;return e.setData=function(i,n){n=n||{},i=i||"0,0,1,1";var r=i.match(vg),o=1,a=[],l=[],c=n.precision||1,u=c<=1,d,h,f,g,p,_,v,b,x;if(this.data=i,(yg.test(i)||~i.indexOf("M")&&i.indexOf("C")<0)&&(r=mg(i)[0]),d=r.length,d===4)r.unshift(0,0),r.push(1,1),d=8;else if((d-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[d-2]!=1)&&wg(r,n.height,n.originY),this.segment=r,g=2;g<d;g+=6)h={x:+r[g-2],y:+r[g-1]},f={x:+r[g+4],y:+r[g+5]},a.push(h,f),Cg(h.x,h.y,+r[g],+r[g+1],+r[g+2],+r[g+3],f.x,f.y,1/(c*2e5),a,a.length-1);for(d=a.length,g=0;g<d;g++)v=a[g],b=a[g-1]||v,(v.x>b.x||b.y!==v.y&&b.x===v.x||v===b)&&v.x<=1?(b.cx=v.x-b.x,b.cy=v.y-b.y,b.n=v,b.nx=v.x,u&&g>1&&Math.abs(b.cy/b.cx-a[g-2].cy/a[g-2].cx)>2&&(u=0),b.cx<o&&(b.cx?o=b.cx:(b.cx=.001,g===d-1&&(b.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(g--,1),d--);if(d=1/o+1|0,p=1/d,_=0,v=a[0],u){for(g=0;g<d;g++)x=g*p,v.nx<x&&(v=a[++_]),h=v.y+(x-v.x)/v.cx*v.cy,l[g]={x,cx:p,y:h,cy:0,nx:9},g&&(l[g-1].cy=h-l[g-1].y);_=a[a.length-1],l[d-1].cy=_.y-h,l[d-1].cx=_.x-l[l.length-1].x}else{for(g=0;g<d;g++)v.nx<g*p&&(v=a[++_]),l[g]=v;_<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(w){var S=l[w*d|0]||l[d-1];return S.nx<w&&(S=S.n),S.y+(w-S.x)/S.cx*S.cy},this.ease.custom=this,this.id&&bt&&bt.registerEase(this.id,this.ease),this},e.getSVGData=function(i){return s.getSVGData(this,i)},s.create=function(i,n,r){return new s(i,n,r).ease},s.register=function(i){bt=i,gc()},s.get=function(i){return bt.parseEase(i)},s.getSVGData=function(i,n){n=n||{};var r=n.width||100,o=n.height||100,a=n.x||0,l=(n.y||0)+o,c=bt.utils.toArray(n.path)[0],u,d,h,f,g,p,_,v,b,x;if(n.invert&&(o=-o,l=0),typeof i=="string"&&(i=bt.parseEase(i)),i.custom&&(i=i.custom),i instanceof s)u=_g(pg([i.segment.slice(0)],r,0,0,-o,a,l));else{for(u=[a,l],_=Math.max(5,(n.precision||1)*200),f=1/_,_+=2,v=5/_,b=vs(a+f*r),x=vs(l+i(f)*-o),d=(x-l)/(b-a),h=2;h<_;h++)g=vs(a+h*f*r),p=vs(l+i(h*f)*-o),(Math.abs((p-x)/(g-b)-d)>v||h===_-1)&&(u.push(b,x),d=(p-x)/(g-b)),b=g,x=p;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},s})();sr.version="3.14.2";sr.headless=!0;dd()&&bt.registerPlugin(sr);function Sg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function $g(s,e,t){return e&&Sg(s.prototype,e),s}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ze,js,Lt,Ri,ji,Wn,hd,nn,Lr,fd,vi,Kt,pd,gd=function(){return Ze||typeof window<"u"&&(Ze=window.gsap)&&Ze.registerPlugin&&Ze},md=1,Hn=[],te=[],ai=[],Mr=Date.now,fa=function(e,t){return t},Pg=function(){var e=Lr.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,te),n.push.apply(n,ai),te=i,ai=n,fa=function(o,a){return t[o](a)}},Fi=function(e,t){return~ai.indexOf(e)&&ai[ai.indexOf(e)+1][t]},zr=function(e){return!!~fd.indexOf(e)},ut=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:n!==!1,capture:!!r})},ct=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},ys="scrollLeft",xs="scrollTop",pa=function(){return vi&&vi.isPressed||te.cache++},no=function(e,t){var i=function n(r){if(r||r===0){md&&(Lt.history.scrollRestoration="manual");var o=vi&&vi.isPressed;r=n.v=Math.round(r)||(vi&&vi.iOS?1:0),e(r),n.cacheID=te.cache,o&&fa("ss",r)}else(t||te.cache!==n.cacheID||fa("ref"))&&(n.cacheID=te.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},gt={s:ys,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:no(function(s){return arguments.length?Lt.scrollTo(s,Fe.sc()):Lt.pageXOffset||Ri[ys]||ji[ys]||Wn[ys]||0})},Fe={s:xs,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gt,sc:no(function(s){return arguments.length?Lt.scrollTo(gt.sc(),s):Lt.pageYOffset||Ri[xs]||ji[xs]||Wn[xs]||0})},_t=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ze.utils.toArray)(e)[0]||(typeof e=="string"&&Ze.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},kg=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},qi=function(e,t){var i=t.s,n=t.sc;zr(e)&&(e=Ri.scrollingElement||ji);var r=te.indexOf(e),o=n===Fe.sc?1:2;!~r&&(r=te.push(e)-1),te[r+o]||ut(e,"scroll",pa);var a=te[r+o],l=a||(te[r+o]=no(Fi(e,i),!0)||(zr(e)?n:no(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Ze.getProperty(e,"scrollBehavior")==="smooth"),l},ga=function(e,t,i){var n=e,r=e,o=Mr(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,p){var _=Mr();p||_-o>l?(r=n,n=g,a=o,o=_):i?n+=g:n=r+(g-r)/(_-a)*(o-a)},d=function(){r=n=i?0:n,a=o=0},h=function(g){var p=a,_=r,v=Mr();return(g||g===0)&&g!==n&&u(g),o===a||v-a>c?0:(n+(i?_:-_))/((i?v:o)-p)*1e3};return{update:u,reset:d,getVelocity:h}},mr=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},mc=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},_d=function(){Lr=Ze.core.globals().ScrollTrigger,Lr&&Lr.core&&Pg()},bd=function(e){return Ze=e||gd(),!js&&Ze&&typeof document<"u"&&document.body&&(Lt=window,Ri=document,ji=Ri.documentElement,Wn=Ri.body,fd=[Lt,Ri,ji,Wn],Ze.utils.clamp,pd=Ze.core.context||function(){},nn="onpointerenter"in Wn?"pointer":"mouse",hd=ze.isTouch=Lt.matchMedia&&Lt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Lt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Kt=ze.eventTypes=("ontouchstart"in ji?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ji?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return md=0},500),_d(),js=1),js};gt.op=Fe;te.cache=0;var ze=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){js||bd(Ze)||console.warn("Please gsap.registerPlugin(Observer)"),Lr||_d();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,h=i.onStopDelay,f=i.ignore,g=i.wheelSpeed,p=i.event,_=i.onDragStart,v=i.onDragEnd,b=i.onDrag,x=i.onPress,w=i.onRelease,S=i.onRight,P=i.onLeft,C=i.onUp,T=i.onDown,k=i.onChangeX,O=i.onChangeY,M=i.onChange,E=i.onToggleX,V=i.onToggleY,U=i.onHover,I=i.onHoverEnd,N=i.onMove,j=i.ignoreCheck,Z=i.isNormalizer,Y=i.onGestureStart,y=i.onGestureEnd,K=i.onWheel,Te=i.onEnable,ge=i.onDisable,ue=i.onClick,we=i.scrollSpeed,Ue=i.capture,Ce=i.allowClicks,Xe=i.lockAxis,He=i.onLockAxis;this.target=a=_t(a)||ji,this.vars=i,f&&(f=Ze.utils.toArray(f)),n=n||1e-9,r=r||0,g=g||1,we=we||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Lt.getComputedStyle(Wn).lineHeight)||22);var Se,at,lt,ae,Oe,mt,St,$=this,$t=0,di=0,Si=i.passive||!u&&i.passive!==!1,$e=qi(a,gt),hi=qi(a,Fe),$i=$e(),Yi=hi(),Ve=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Kt[0]==="pointerdown",Pi=zr(a),Ee=a.ownerDocument||Ri,qt=[0,0,0],It=[0,0,0],fi=0,cr=function(){return fi=Mr()},De=function(H,le){return($.event=H)&&f&&kg(H.target,f)||le&&Ve&&H.pointerType!=="touch"||j&&j(H,le)},hs=function(){$._vx.reset(),$._vy.reset(),at.pause(),d&&d($)},pi=function(){var H=$.deltaX=mc(qt),le=$.deltaY=mc(It),A=Math.abs(H)>=n,q=Math.abs(le)>=n;M&&(A||q)&&M($,H,le,qt,It),A&&(S&&$.deltaX>0&&S($),P&&$.deltaX<0&&P($),k&&k($),E&&$.deltaX<0!=$t<0&&E($),$t=$.deltaX,qt[0]=qt[1]=qt[2]=0),q&&(T&&$.deltaY>0&&T($),C&&$.deltaY<0&&C($),O&&O($),V&&$.deltaY<0!=di<0&&V($),di=$.deltaY,It[0]=It[1]=It[2]=0),(ae||lt)&&(N&&N($),lt&&(_&&lt===1&&_($),b&&b($),lt=0),ae=!1),mt&&!(mt=!1)&&He&&He($),Oe&&(K($),Oe=!1),Se=0},kn=function(H,le,A){qt[A]+=H,It[A]+=le,$._vx.update(H),$._vy.update(le),c?Se||(Se=requestAnimationFrame(pi)):pi()},Tn=function(H,le){Xe&&!St&&($.axis=St=Math.abs(H)>Math.abs(le)?"x":"y",mt=!0),St!=="y"&&(qt[2]+=H,$._vx.update(H,!0)),St!=="x"&&(It[2]+=le,$._vy.update(le,!0)),c?Se||(Se=requestAnimationFrame(pi)):pi()},ki=function(H){if(!De(H,1)){H=mr(H,u);var le=H.clientX,A=H.clientY,q=le-$.x,F=A-$.y,W=$.isDragging;$.x=le,$.y=A,(W||(q||F)&&(Math.abs($.startX-le)>=r||Math.abs($.startY-A)>=r))&&(lt||(lt=W?2:1),W||($.isDragging=!0),Tn(q,F))}},Xi=$.onPress=function(X){De(X,1)||X&&X.button||($.axis=St=null,at.pause(),$.isPressed=!0,X=mr(X),$t=di=0,$.startX=$.x=X.clientX,$.startY=$.y=X.clientY,$._vx.reset(),$._vy.reset(),ut(Z?a:Ee,Kt[1],ki,Si,!0),$.deltaX=$.deltaY=0,x&&x($))},ne=$.onRelease=function(X){if(!De(X,1)){ct(Z?a:Ee,Kt[1],ki,!0);var H=!isNaN($.y-$.startY),le=$.isDragging,A=le&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),q=mr(X);!A&&H&&($._vx.reset(),$._vy.reset(),u&&Ce&&Ze.delayedCall(.08,function(){if(Mr()-fi>300&&!X.defaultPrevented){if(X.target.click)X.target.click();else if(Ee.createEvent){var F=Ee.createEvent("MouseEvents");F.initMouseEvent("click",!0,!0,Lt,1,q.screenX,q.screenY,q.clientX,q.clientY,!1,!1,!1,!1,0,null),X.target.dispatchEvent(F)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&le&&!Z&&at.restart(!0),lt&&pi(),v&&le&&v($),w&&w($,A)}},Gi=function(H){return H.touches&&H.touches.length>1&&($.isGesturing=!0)&&Y(H,$.isDragging)},Wt=function(){return($.isGesturing=!1)||y($)},Yt=function(H){if(!De(H)){var le=$e(),A=hi();kn((le-$i)*we,(A-Yi)*we,1),$i=le,Yi=A,d&&at.restart(!0)}},Xt=function(H){if(!De(H)){H=mr(H,u),K&&(Oe=!0);var le=(H.deltaMode===1?l:H.deltaMode===2?Lt.innerHeight:1)*g;kn(H.deltaX*le,H.deltaY*le,0),d&&!Z&&at.restart(!0)}},Ki=function(H){if(!De(H)){var le=H.clientX,A=H.clientY,q=le-$.x,F=A-$.y;$.x=le,$.y=A,ae=!0,d&&at.restart(!0),(q||F)&&Tn(q,F)}},On=function(H){$.event=H,U($)},gi=function(H){$.event=H,I($)},ur=function(H){return De(H)||mr(H,u)&&ue($)};at=$._dc=Ze.delayedCall(h||.25,hs).pause(),$.deltaX=$.deltaY=0,$._vx=ga(0,50,!0),$._vy=ga(0,50,!0),$.scrollX=$e,$.scrollY=hi,$.isDragging=$.isGesturing=$.isPressed=!1,pd(this),$.enable=function(X){return $.isEnabled||(ut(Pi?Ee:a,"scroll",pa),o.indexOf("scroll")>=0&&ut(Pi?Ee:a,"scroll",Yt,Si,Ue),o.indexOf("wheel")>=0&&ut(a,"wheel",Xt,Si,Ue),(o.indexOf("touch")>=0&&hd||o.indexOf("pointer")>=0)&&(ut(a,Kt[0],Xi,Si,Ue),ut(Ee,Kt[2],ne),ut(Ee,Kt[3],ne),Ce&&ut(a,"click",cr,!0,!0),ue&&ut(a,"click",ur),Y&&ut(Ee,"gesturestart",Gi),y&&ut(Ee,"gestureend",Wt),U&&ut(a,nn+"enter",On),I&&ut(a,nn+"leave",gi),N&&ut(a,nn+"move",Ki)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=ae=lt=!1,$._vx.reset(),$._vy.reset(),$i=$e(),Yi=hi(),X&&X.type&&Xi(X),Te&&Te($)),$},$.disable=function(){$.isEnabled&&(Hn.filter(function(X){return X!==$&&zr(X.target)}).length||ct(Pi?Ee:a,"scroll",pa),$.isPressed&&($._vx.reset(),$._vy.reset(),ct(Z?a:Ee,Kt[1],ki,!0)),ct(Pi?Ee:a,"scroll",Yt,Ue),ct(a,"wheel",Xt,Ue),ct(a,Kt[0],Xi,Ue),ct(Ee,Kt[2],ne),ct(Ee,Kt[3],ne),ct(a,"click",cr,!0),ct(a,"click",ur),ct(Ee,"gesturestart",Gi),ct(Ee,"gestureend",Wt),ct(a,nn+"enter",On),ct(a,nn+"leave",gi),ct(a,nn+"move",Ki),$.isEnabled=$.isPressed=$.isDragging=!1,ge&&ge($))},$.kill=$.revert=function(){$.disable();var X=Hn.indexOf($);X>=0&&Hn.splice(X,1),vi===$&&(vi=0)},Hn.push($),Z&&zr(a)&&(vi=$),$.enable(p)},$g(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();ze.version="3.14.2";ze.create=function(s){return new ze(s)};ze.register=bd;ze.getAll=function(){return Hn.slice()};ze.getById=function(s){return Hn.filter(function(e){return e.vars.id===s})[0]};gd()&&Ze.registerPlugin(ze);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var z,jn,ee,pe,Et,ce,ul,ro,Qr,Dr,wr,ws,it,wo,ma,ht,_c,bc,In,vd,Io,yd,dt,_a,xd,wd,Ai,ba,dl,Yn,hl,Rr,va,No,Cs=1,nt=Date.now,Fo=nt(),Bt=0,Cr=0,vc=function(e,t,i){var n=Tt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},yc=function(e,t){return t&&(!Tt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Tg=function s(){return Cr&&requestAnimationFrame(s)},xc=function(){return wo=1},wc=function(){return wo=0},ti=function(e){return e},Sr=function(e){return Math.round(e*1e5)/1e5||0},Cd=function(){return typeof window<"u"},Sd=function(){return z||Cd()&&(z=window.gsap)&&z.registerPlugin&&z},_n=function(e){return!!~ul.indexOf(e)},$d=function(e){return(e==="Height"?hl:ee["inner"+e])||Et["client"+e]||ce["client"+e]},Pd=function(e){return Fi(e,"getBoundingClientRect")||(_n(e)?function(){return Hs.width=ee.innerWidth,Hs.height=hl,Hs}:function(){return bi(e)})},Og=function(e,t,i){var n=i.d,r=i.d2,o=i.a;return(o=Fi(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?$d(r):e["client"+r])||0}},Eg=function(e,t){return!t||~ai.indexOf(e)?Pd(e):function(){return Hs}},si=function(e,t){var i=t.s,n=t.d2,r=t.d,o=t.a;return Math.max(0,(i="scroll"+n)&&(o=Fi(e,i))?o()-Pd(e)()[r]:_n(e)?(Et[i]||ce[i])-$d(n):e[i]-e["offset"+n])},Ss=function(e,t){for(var i=0;i<In.length;i+=3)(!t||~t.indexOf(In[i+1]))&&e(In[i],In[i+1],In[i+2])},Tt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},$r=function(e){return typeof e=="number"},rn=function(e){return typeof e=="object"},_r=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Uo=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Dn=Math.abs,kd="left",Td="top",fl="right",pl="bottom",fn="width",pn="height",jr="Right",Ir="Left",Nr="Top",Fr="Bottom",Re="padding",Ft="margin",tr="Width",gl="Height",Ne="px",Ut=function(e){return ee.getComputedStyle(e)},Ag=function(e){var t=Ut(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cc=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},bi=function(e,t){var i=t&&Ut(e)[ma]!=="matrix(1, 0, 0, 1, 0, 0)"&&z.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return i&&i.progress(0).kill(),n},so=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Od=function(e){var t=[],i=e.labels,n=e.duration(),r;for(r in i)t.push(i[r]/n);return t},Lg=function(e){return function(t){return z.utils.snap(Od(e),t)}},ml=function(e){var t=z.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return t(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=t(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Mg=function(e){return function(t,i){return ml(Od(e))(t,i.direction)}},$s=function(e,t,i,n){return i.split(",").forEach(function(r){return e(t,r,n)})},We=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:!n,capture:!!r})},qe=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Ps=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Sc={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ks={toggleActions:"play",anticipatePin:0},oo={top:0,left:0,center:.5,bottom:1,right:1},Is=function(e,t){if(Tt(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in oo?oo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ts=function(e,t,i,n,r,o,a,l){var c=r.startColor,u=r.endColor,d=r.fontSize,h=r.indent,f=r.fontWeight,g=pe.createElement("div"),p=_n(i)||Fi(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,v=p?ce:i,b=e.indexOf("start")!==-1,x=b?c:u,w="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((_||l)&&p?"fixed;":"absolute;"),(_||l||!p)&&(w+=(n===Fe?fl:pl)+":"+(o+parseFloat(h))+"px;"),a&&(w+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=w,g.innerText=t||t===0?e+"-"+t:e,v.children[0]?v.insertBefore(g,v.children[0]):v.appendChild(g),g._offset=g["offset"+n.op.d2],Ns(g,0,n,b),g},Ns=function(e,t,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];e._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+tr]=1,r["border"+a+tr]=0,r[i.p]=t+"px",z.set(e,r)},J=[],ya={},es,$c=function(){return nt()-Bt>34&&(es||(es=requestAnimationFrame(xi)))},Rn=function(){(!dt||!dt.isPressed||dt.startX>ce.clientWidth)&&(te.cache++,dt?es||(es=requestAnimationFrame(xi)):xi(),Bt||vn("scrollStart"),Bt=nt())},Ho=function(){wd=ee.innerWidth,xd=ee.innerHeight},Pr=function(e){te.cache++,(e===!0||!it&&!yd&&!pe.fullscreenElement&&!pe.webkitFullscreenElement&&(!_a||wd!==ee.innerWidth||Math.abs(ee.innerHeight-xd)>ee.innerHeight*.25))&&ro.restart(!0)},bn={},zg=[],Ed=function s(){return qe(Q,"scrollEnd",s)||an(!0)},vn=function(e){return bn[e]&&bn[e].map(function(t){return t()})||zg},kt=[],Ad=function(e){for(var t=0;t<kt.length;t+=5)(!e||kt[t+4]&&kt[t+4].query===e)&&(kt[t].style.cssText=kt[t+1],kt[t].getBBox&&kt[t].setAttribute("transform",kt[t+2]||""),kt[t+3].uncache=1)},Ld=function(){return te.forEach(function(e){return st(e)&&++e.cacheID&&(e.rec=e())})},_l=function(e,t){var i;for(ht=0;ht<J.length;ht++)i=J[ht],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Rr=!0,t&&Ad(t),t||vn("revert")},Md=function(e,t){te.cache++,(t||!ft)&&te.forEach(function(i){return st(i)&&i.cacheID++&&(i.rec=0)}),Tt(e)&&(ee.history.scrollRestoration=dl=e)},ft,gn=0,Pc,Dg=function(){if(Pc!==gn){var e=Pc=gn;requestAnimationFrame(function(){return e===gn&&an(!0)})}},zd=function(){ce.appendChild(Yn),hl=!dt&&Yn.offsetHeight||ee.innerHeight,ce.removeChild(Yn)},kc=function(e){return Qr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},an=function(e,t){if(Et=pe.documentElement,ce=pe.body,ul=[ee,pe,Et,ce],Bt&&!e&&!Rr){We(Q,"scrollEnd",Ed);return}zd(),ft=Q.isRefreshing=!0,Rr||Ld();var i=vn("refreshInit");vd&&Q.sort(),t||_l(),te.forEach(function(n){st(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),J.slice(0).forEach(function(n){return n.refresh()}),Rr=!1,J.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),va=1,kc(!0),J.forEach(function(n){var r=si(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),kc(!1),va=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),te.forEach(function(n){st(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Md(dl,1),ro.pause(),gn++,ft=2,xi(2),J.forEach(function(n){return st(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ft=Q.isRefreshing=!1,vn("refresh")},xa=0,Fs=1,Ur,xi=function(e){if(e===2||!ft&&!Rr){Q.isUpdating=!0,Ur&&Ur.update(0);var t=J.length,i=nt(),n=i-Fo>=50,r=t&&J[0].scroll();if(Fs=xa>r?-1:1,ft||(xa=r),n&&(Bt&&!wo&&i-Bt>200&&(Bt=0,vn("scrollEnd")),wr=Fo,Fo=i),Fs<0){for(ht=t;ht-- >0;)J[ht]&&J[ht].update(0,n);Fs=1}else for(ht=0;ht<t;ht++)J[ht]&&J[ht].update(0,n);Q.isUpdating=!1}es=0},wa=[kd,Td,pl,fl,Ft+Fr,Ft+jr,Ft+Nr,Ft+Ir,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Us=wa.concat([fn,pn,"boxSizing","max"+tr,"max"+gl,"position",Ft,Re,Re+Nr,Re+jr,Re+Fr,Re+Ir]),Rg=function(e,t,i){Xn(i);var n=e._gsap;if(n.spacerIsNative)Xn(n.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Vo=function(e,t,i,n){if(!e._gsap.swappedIn){for(var r=wa.length,o=t.style,a=e.style,l;r--;)l=wa[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[pl]=a[fl]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[fn]=so(e,gt)+Ne,o[pn]=so(e,Fe)+Ne,o[Re]=a[Ft]=a[Td]=a[kd]="0",Xn(n),a[fn]=a["max"+tr]=i[fn],a[pn]=a["max"+gl]=i[pn],a[Re]=i[Re],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},jg=/([A-Z])/g,Xn=function(e){if(e){var t=e.t.style,i=e.length,n=0,r,o;for((e.t._gsap||z.core.getCache(e.t)).uncache=1;n<i;n+=2)o=e[n+1],r=e[n],o?t[r]=o:t[r]&&t.removeProperty(r.replace(jg,"-$1").toLowerCase())}},Os=function(e){for(var t=Us.length,i=e.style,n=[],r=0;r<t;r++)n.push(Us[r],i[Us[r]]);return n.t=e,n},Ig=function(e,t,i){for(var n=[],r=e.length,o=i?8:0,a;o<r;o+=2)a=e[o],n.push(a,a in t?t[a]:e[o+1]);return n.t=e.t,n},Hs={left:0,top:0},Tc=function(e,t,i,n,r,o,a,l,c,u,d,h,f,g){st(e)&&(e=e(l)),Tt(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Is("0"+e.substr(3),i):0));var p=f?f.time():0,_,v,b;if(f&&f.seek(0),isNaN(e)||(e=+e),$r(e))f&&(e=z.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),a&&Ns(a,i,n,!0);else{st(t)&&(t=t(l));var x=(e||"0").split(" "),w,S,P,C;b=_t(t,l)||ce,w=bi(b)||{},(!w||!w.left&&!w.top)&&Ut(b).display==="none"&&(C=b.style.display,b.style.display="block",w=bi(b),C?b.style.display=C:b.style.removeProperty("display")),S=Is(x[0],w[n.d]),P=Is(x[1]||"0",i),e=w[n.p]-c[n.p]-u+S+r-P,a&&Ns(a,P,n,i-P<20||a._isStart&&P>20),i-=i-P}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var T=e+i,k=o._isStart;_="scroll"+n.d2,Ns(o,T,n,k&&T>20||!k&&(d?Math.max(ce[_],Et[_]):o.parentNode[_])<=T+1),d&&(c=bi(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+Ne))}return f&&b&&(_=bi(b),f.seek(h),v=bi(b),f._caScrollDist=_[n.p]-v[n.p],e=e/f._caScrollDist*h),f&&f.seek(p),f?e:Math.round(e)},Ng=/(webkit|moz|length|cssText|inset)/i,Oc=function(e,t,i,n){if(e.parentNode!==t){var r=e.style,o,a;if(t===ce){e._stOrig=r.cssText,a=Ut(e);for(o in a)!+o&&!Ng.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=e._stOrig;z.core.getCache(e).uncache=1,t.appendChild(e)}},Dd=function(e,t,i){var n=t,r=n;return function(o){var a=Math.round(e());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},Es=function(e,t,i){var n={};n[t.p]="+="+i,z.set(e,n)},Ec=function(e,t){var i=qi(e,t),n="_scroll"+t.p2,r=function o(a,l,c,u,d){var h=o.tween,f=l.onComplete,g={};c=c||i();var p=Dd(i,c,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[n]=a,l.inherit=!1,l.modifiers=g,g[n]=function(){return p(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){te.cache++,o.tween&&xi()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=z.to(e,l),h};return e[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},We(e,"wheel",i.wheelHandler),Q.isTouch&&We(e,"touchmove",i.wheelHandler),r},Q=(function(){function s(t,i){jn||s.register(z)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ba(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Cr){this.update=this.refresh=this.kill=ti;return}i=Cc(Tt(i)||$r(i)||i.nodeType?{trigger:i}:i,ks);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,d=r.scrub,h=r.trigger,f=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,_=r.anticipatePin,v=r.onScrubComplete,b=r.onSnapComplete,x=r.once,w=r.snap,S=r.pinReparent,P=r.pinSpacer,C=r.containerAnimation,T=r.fastScrollEnd,k=r.preventOverlaps,O=i.horizontal||i.containerAnimation&&i.horizontal!==!1?gt:Fe,M=!d&&d!==0,E=_t(i.scroller||ee),V=z.core.getCache(E),U=_n(E),I=("pinType"in i?i.pinType:Fi(E,"pinType")||U&&"fixed")==="fixed",N=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],j=M&&i.toggleActions.split(" "),Z="markers"in i?i.markers:ks.markers,Y=U?0:parseFloat(Ut(E)["border"+O.p2+tr])||0,y=this,K=i.onRefreshInit&&function(){return i.onRefreshInit(y)},Te=Og(E,U,O),ge=Eg(E,U),ue=0,we=0,Ue=0,Ce=qi(E,O),Xe,He,Se,at,lt,ae,Oe,mt,St,$,$t,di,Si,$e,hi,$i,Yi,Ve,Pi,Ee,qt,It,fi,cr,De,hs,pi,kn,Tn,ki,Xi,ne,Gi,Wt,Yt,Xt,Ki,On,gi;if(y._startClamp=y._endClamp=!1,y._dir=O,_*=45,y.scroller=E,y.scroll=C?C.time.bind(C):Ce,at=Ce(),y.vars=i,n=n||i.animation,"refreshPriority"in i&&(vd=1,i.refreshPriority===-9999&&(Ur=y)),V.tweenScroll=V.tweenScroll||{top:Ec(E,Fe),left:Ec(E,gt)},y.tweenTo=Xe=V.tweenScroll[O.p],y.scrubDuration=function(A){Gi=$r(A)&&A,Gi?ne?ne.duration(A):ne=z.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Gi,paused:!0,onComplete:function(){return v&&v(y)}}):(ne&&ne.progress(1).kill(),ne=0)},n&&(n.vars.lazy=!1,n._initted&&!y.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),y.animation=n.pause(),n.scrollTrigger=y,y.scrubDuration(d),ki=0,l||(l=n.vars.id)),w&&((!rn(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in ce.style&&z.set(U?[ce,Et]:E,{scrollBehavior:"auto"}),te.forEach(function(A){return st(A)&&A.target===(U?pe.scrollingElement||Et:E)&&(A.smooth=!1)}),Se=st(w.snapTo)?w.snapTo:w.snapTo==="labels"?Lg(n):w.snapTo==="labelsDirectional"?Mg(n):w.directional!==!1?function(A,q){return ml(w.snapTo)(A,nt()-we<500?0:q.direction)}:z.utils.snap(w.snapTo),Wt=w.duration||{min:.1,max:2},Wt=rn(Wt)?Dr(Wt.min,Wt.max):Dr(Wt,Wt),Yt=z.delayedCall(w.delay||Gi/2||.1,function(){var A=Ce(),q=nt()-we<500,F=Xe.tween;if((q||Math.abs(y.getVelocity())<10)&&!F&&!wo&&ue!==A){var W=(A-ae)/$e,Be=n&&!M?n.totalProgress():W,re=q?0:(Be-Xi)/(nt()-wr)*1e3||0,Ae=z.utils.clamp(-W,1-W,Dn(re/2)*re/.185),Qe=W+(w.inertia===!1?0:Ae),Pe,me,de=w,Gt=de.onStart,be=de.onInterrupt,Pt=de.onComplete;if(Pe=Se(Qe,y),$r(Pe)||(Pe=Qe),me=Math.max(0,Math.round(ae+Pe*$e)),A<=Oe&&A>=ae&&me!==A){if(F&&!F._initted&&F.data<=Dn(me-A))return;w.inertia===!1&&(Ae=Pe-W),Xe(me,{duration:Wt(Dn(Math.max(Dn(Qe-Be),Dn(Pe-Be))*.185/re/.05||0)),ease:w.ease||"power3",data:Dn(me-A),onInterrupt:function(){return Yt.restart(!0)&&be&&be(y)},onComplete:function(){y.update(),ue=Ce(),n&&!M&&(ne?ne.resetTo("totalProgress",Pe,n._tTime/n._tDur):n.progress(Pe)),ki=Xi=n&&!M?n.totalProgress():y.progress,b&&b(y),Pt&&Pt(y)}},A,Ae*$e,me-A-Ae*$e),Gt&&Gt(y,Xe.tween)}}else y.isActive&&ue!==A&&Yt.restart(!0)}).pause()),l&&(ya[l]=y),h=y.trigger=_t(h||f!==!0&&f),gi=h&&h._gsap&&h._gsap.stRevert,gi&&(gi=gi(y)),f=f===!0?h:_t(f),Tt(a)&&(a={targets:h,className:a}),f&&(g===!1||g===Ft||(g=!g&&f.parentNode&&f.parentNode.style&&Ut(f.parentNode).display==="flex"?!1:Re),y.pin=f,He=z.core.getCache(f),He.spacer?hi=He.pinState:(P&&(P=_t(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),He.spacerIsNative=!!P,P&&(He.spacerState=Os(P))),He.spacer=Ve=P||pe.createElement("div"),Ve.classList.add("pin-spacer"),l&&Ve.classList.add("pin-spacer-"+l),He.pinState=hi=Os(f)),i.force3D!==!1&&z.set(f,{force3D:!0}),y.spacer=Ve=He.spacer,Tn=Ut(f),cr=Tn[g+O.os2],Ee=z.getProperty(f),qt=z.quickSetter(f,O.a,Ne),Vo(f,Ve,Tn),Yi=Os(f)),Z){di=rn(Z)?Cc(Z,Sc):Sc,$=Ts("scroller-start",l,E,O,di,0),$t=Ts("scroller-end",l,E,O,di,0,$),Pi=$["offset"+O.op.d2];var ur=_t(Fi(E,"content")||E);mt=this.markerStart=Ts("start",l,ur,O,di,Pi,0,C),St=this.markerEnd=Ts("end",l,ur,O,di,Pi,0,C),C&&(On=z.quickSetter([mt,St],O.a,Ne)),!I&&!(ai.length&&Fi(E,"fixedMarkers")===!0)&&(Ag(U?ce:E),z.set([$,$t],{force3D:!0}),hs=z.quickSetter($,O.a,Ne),kn=z.quickSetter($t,O.a,Ne))}if(C){var X=C.vars.onUpdate,H=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){y.update(0,0,1),X&&X.apply(C,H||[])})}if(y.previous=function(){return J[J.indexOf(y)-1]},y.next=function(){return J[J.indexOf(y)+1]},y.revert=function(A,q){if(!q)return y.kill(!0);var F=A!==!1||!y.enabled,W=it;F!==y.isReverted&&(F&&(Xt=Math.max(Ce(),y.scroll.rec||0),Ue=y.progress,Ki=n&&n.progress()),mt&&[mt,St,$,$t].forEach(function(Be){return Be.style.display=F?"none":"block"}),F&&(it=y,y.update(F)),f&&(!S||!y.isActive)&&(F?Rg(f,Ve,hi):Vo(f,Ve,Ut(f),De)),F||y.update(F),it=W,y.isReverted=F)},y.refresh=function(A,q,F,W){if(!((it||!y.enabled)&&!q)){if(f&&A&&Bt){We(s,"scrollEnd",Ed);return}!ft&&K&&K(y),it=y,Xe.tween&&!F&&(Xe.tween.kill(),Xe.tween=0),ne&&ne.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Ti){return Ti.vars.immediateRender&&Ti.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),y.isReverted||y.revert(!0,!0),y._subPinOffset=!1;var Be=Te(),re=ge(),Ae=C?C.duration():si(E,O),Qe=$e<=.01||!$e,Pe=0,me=W||0,de=rn(F)?F.end:i.end,Gt=i.endTrigger||h,be=rn(F)?F.start:i.start||(i.start===0||!h?0:f?"0 0":"0 100%"),Pt=y.pinnedContainer=i.pinnedContainer&&_t(i.pinnedContainer,y),Zt=h&&Math.max(0,J.indexOf(y))||0,Ge=Zt,Ke,et,Zi,fs,tt,Ie,Jt,To,Ol,dr,Qt,hr,ps;for(Z&&rn(F)&&(hr=z.getProperty($,O.p),ps=z.getProperty($t,O.p));Ge-- >0;)Ie=J[Ge],Ie.end||Ie.refresh(0,1)||(it=y),Jt=Ie.pin,Jt&&(Jt===h||Jt===f||Jt===Pt)&&!Ie.isReverted&&(dr||(dr=[]),dr.unshift(Ie),Ie.revert(!0,!0)),Ie!==J[Ge]&&(Zt--,Ge--);for(st(be)&&(be=be(y)),be=vc(be,"start",y),ae=Tc(be,h,Be,O,Ce(),mt,$,y,re,Y,I,Ae,C,y._startClamp&&"_startClamp")||(f?-.001:0),st(de)&&(de=de(y)),Tt(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(Tt(be)?be.split(" ")[0]:"")+de:(Pe=Is(de.substr(2),Be),de=Tt(be)?be:(C?z.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,ae):ae)+Pe,Gt=h)),de=vc(de,"end",y),Oe=Math.max(ae,Tc(de||(Gt?"100% 0":Ae),Gt,Be,O,Ce()+Pe,St,$t,y,re,Y,I,Ae,C,y._endClamp&&"_endClamp"))||-.001,Pe=0,Ge=Zt;Ge--;)Ie=J[Ge]||{},Jt=Ie.pin,Jt&&Ie.start-Ie._pinPush<=ae&&!C&&Ie.end>0&&(Ke=Ie.end-(y._startClamp?Math.max(0,Ie.start):Ie.start),(Jt===h&&Ie.start-Ie._pinPush<ae||Jt===Pt)&&isNaN(be)&&(Pe+=Ke*(1-Ie.progress)),Jt===f&&(me+=Ke));if(ae+=Pe,Oe+=Pe,y._startClamp&&(y._startClamp+=Pe),y._endClamp&&!ft&&(y._endClamp=Oe||-.001,Oe=Math.min(Oe,si(E,O))),$e=Oe-ae||(ae-=.01)&&.001,Qe&&(Ue=z.utils.clamp(0,1,z.utils.normalize(ae,Oe,Xt))),y._pinPush=me,mt&&Pe&&(Ke={},Ke[O.a]="+="+Pe,Pt&&(Ke[O.p]="-="+Ce()),z.set([mt,St],Ke)),f&&!(va&&y.end>=si(E,O)))Ke=Ut(f),fs=O===Fe,Zi=Ce(),It=parseFloat(Ee(O.a))+me,!Ae&&Oe>1&&(Qt=(U?pe.scrollingElement||Et:E).style,Qt={style:Qt,value:Qt["overflow"+O.a.toUpperCase()]},U&&Ut(ce)["overflow"+O.a.toUpperCase()]!=="scroll"&&(Qt.style["overflow"+O.a.toUpperCase()]="scroll")),Vo(f,Ve,Ke),Yi=Os(f),et=bi(f,!0),To=I&&qi(E,fs?gt:Fe)(),g?(De=[g+O.os2,$e+me+Ne],De.t=Ve,Ge=g===Re?so(f,O)+$e+me:0,Ge&&(De.push(O.d,Ge+Ne),Ve.style.flexBasis!=="auto"&&(Ve.style.flexBasis=Ge+Ne)),Xn(De),Pt&&J.forEach(function(Ti){Ti.pin===Pt&&Ti.vars.pinSpacing!==!1&&(Ti._subPinOffset=!0)}),I&&Ce(Xt)):(Ge=so(f,O),Ge&&Ve.style.flexBasis!=="auto"&&(Ve.style.flexBasis=Ge+Ne)),I&&(tt={top:et.top+(fs?Zi-ae:To)+Ne,left:et.left+(fs?To:Zi-ae)+Ne,boxSizing:"border-box",position:"fixed"},tt[fn]=tt["max"+tr]=Math.ceil(et.width)+Ne,tt[pn]=tt["max"+gl]=Math.ceil(et.height)+Ne,tt[Ft]=tt[Ft+Nr]=tt[Ft+jr]=tt[Ft+Fr]=tt[Ft+Ir]="0",tt[Re]=Ke[Re],tt[Re+Nr]=Ke[Re+Nr],tt[Re+jr]=Ke[Re+jr],tt[Re+Fr]=Ke[Re+Fr],tt[Re+Ir]=Ke[Re+Ir],$i=Ig(hi,tt,S),ft&&Ce(0)),n?(Ol=n._initted,Io(1),n.render(n.duration(),!0,!0),fi=Ee(O.a)-It+$e+me,pi=Math.abs($e-fi)>1,I&&pi&&$i.splice($i.length-2,2),n.render(0,!0,!0),Ol||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Io(0)):fi=$e,Qt&&(Qt.value?Qt.style["overflow"+O.a.toUpperCase()]=Qt.value:Qt.style.removeProperty("overflow-"+O.a));else if(h&&Ce()&&!C)for(et=h.parentNode;et&&et!==ce;)et._pinOffset&&(ae-=et._pinOffset,Oe-=et._pinOffset),et=et.parentNode;dr&&dr.forEach(function(Ti){return Ti.revert(!1,!0)}),y.start=ae,y.end=Oe,at=lt=ft?Xt:Ce(),!C&&!ft&&(at<Xt&&Ce(Xt),y.scroll.rec=0),y.revert(!1,!0),we=nt(),Yt&&(ue=-1,Yt.restart(!0)),it=0,n&&M&&(n._initted||Ki)&&n.progress()!==Ki&&n.progress(Ki||0,!0).render(n.time(),!0,!0),(Qe||Ue!==y.progress||C||p||n&&!n._initted)&&(n&&!M&&(n._initted||Ue||n.vars.immediateRender!==!1)&&n.totalProgress(C&&ae<-.001&&!Ue?z.utils.normalize(ae,Oe,0):Ue,!0),y.progress=Qe||(at-ae)/$e===Ue?0:Ue),f&&g&&(Ve._pinOffset=Math.round(y.progress*fi)),ne&&ne.invalidate(),isNaN(hr)||(hr-=z.getProperty($,O.p),ps-=z.getProperty($t,O.p),Es($,O,hr),Es(mt,O,hr-(W||0)),Es($t,O,ps),Es(St,O,ps-(W||0))),Qe&&!ft&&y.update(),u&&!ft&&!Si&&(Si=!0,u(y),Si=!1)}},y.getVelocity=function(){return(Ce()-lt)/(nt()-wr)*1e3||0},y.endAnimation=function(){_r(y.callbackAnimation),n&&(ne?ne.progress(1):n.paused()?M||_r(n,y.direction<0,1):_r(n,n.reversed()))},y.labelToScroll=function(A){return n&&n.labels&&(ae||y.refresh()||ae)+n.labels[A]/n.duration()*$e||0},y.getTrailing=function(A){var q=J.indexOf(y),F=y.direction>0?J.slice(0,q).reverse():J.slice(q+1);return(Tt(A)?F.filter(function(W){return W.vars.preventOverlaps===A}):F).filter(function(W){return y.direction>0?W.end<=ae:W.start>=Oe})},y.update=function(A,q,F){if(!(C&&!F&&!A)){var W=ft===!0?Xt:y.scroll(),Be=A?0:(W-ae)/$e,re=Be<0?0:Be>1?1:Be||0,Ae=y.progress,Qe,Pe,me,de,Gt,be,Pt,Zt;if(q&&(lt=at,at=C?Ce():W,w&&(Xi=ki,ki=n&&!M?n.totalProgress():re)),_&&f&&!it&&!Cs&&Bt&&(!re&&ae<W+(W-lt)/(nt()-wr)*_?re=1e-4:re===1&&Oe>W+(W-lt)/(nt()-wr)*_&&(re=.9999)),re!==Ae&&y.enabled){if(Qe=y.isActive=!!re&&re<1,Pe=!!Ae&&Ae<1,be=Qe!==Pe,Gt=be||!!re!=!!Ae,y.direction=re>Ae?1:-1,y.progress=re,Gt&&!it&&(me=re&&!Ae?0:re===1?1:Ae===1?2:3,M&&(de=!be&&j[me+1]!=="none"&&j[me+1]||j[me],Zt=n&&(de==="complete"||de==="reset"||de in n))),k&&(be||Zt)&&(Zt||d||!n)&&(st(k)?k(y):y.getTrailing(k).forEach(function(Zi){return Zi.endAnimation()})),M||(ne&&!it&&!Cs?(ne._dp._time-ne._start!==ne._time&&ne.render(ne._dp._time-ne._start),ne.resetTo?ne.resetTo("totalProgress",re,n._tTime/n._tDur):(ne.vars.totalProgress=re,ne.invalidate().restart())):n&&n.totalProgress(re,!!(it&&(we||A)))),f){if(A&&g&&(Ve.style[g+O.os2]=cr),!I)qt(Sr(It+fi*re));else if(Gt){if(Pt=!A&&re>Ae&&Oe+1>W&&W+1>=si(E,O),S)if(!A&&(Qe||Pt)){var Ge=bi(f,!0),Ke=W-ae;Oc(f,ce,Ge.top+(O===Fe?Ke:0)+Ne,Ge.left+(O===Fe?0:Ke)+Ne)}else Oc(f,Ve);Xn(Qe||Pt?$i:Yi),pi&&re<1&&Qe||qt(It+(re===1&&!Pt?fi:0))}}w&&!Xe.tween&&!it&&!Cs&&Yt.restart(!0),a&&(be||x&&re&&(re<1||!No))&&Qr(a.targets).forEach(function(Zi){return Zi.classList[Qe||x?"add":"remove"](a.className)}),o&&!M&&!A&&o(y),Gt&&!it?(M&&(Zt&&(de==="complete"?n.pause().totalProgress(1):de==="reset"?n.restart(!0).pause():de==="restart"?n.restart(!0):n[de]()),o&&o(y)),(be||!No)&&(c&&be&&Uo(y,c),N[me]&&Uo(y,N[me]),x&&(re===1?y.kill(!1,1):N[me]=0),be||(me=re===1?1:3,N[me]&&Uo(y,N[me]))),T&&!Qe&&Math.abs(y.getVelocity())>($r(T)?T:2500)&&(_r(y.callbackAnimation),ne?ne.progress(1):_r(n,de==="reverse"?1:!re,1))):M&&o&&!it&&o(y)}if(kn){var et=C?W/C.duration()*(C._caScrollDist||0):W;hs(et+($._isFlipped?1:0)),kn(et)}On&&On(-W/C.duration()*(C._caScrollDist||0))}},y.enable=function(A,q){y.enabled||(y.enabled=!0,We(E,"resize",Pr),U||We(E,"scroll",Rn),K&&We(s,"refreshInit",K),A!==!1&&(y.progress=Ue=0,at=lt=ue=Ce()),q!==!1&&y.refresh())},y.getTween=function(A){return A&&Xe?Xe.tween:ne},y.setPositions=function(A,q,F,W){if(C){var Be=C.scrollTrigger,re=C.duration(),Ae=Be.end-Be.start;A=Be.start+Ae*A/re,q=Be.start+Ae*q/re}y.refresh(!1,!1,{start:yc(A,F&&!!y._startClamp),end:yc(q,F&&!!y._endClamp)},W),y.update()},y.adjustPinSpacing=function(A){if(De&&A){var q=De.indexOf(O.d)+1;De[q]=parseFloat(De[q])+A+Ne,De[1]=parseFloat(De[1])+A+Ne,Xn(De)}},y.disable=function(A,q){if(A!==!1&&y.revert(!0,!0),y.enabled&&(y.enabled=y.isActive=!1,q||ne&&ne.pause(),Xt=0,He&&(He.uncache=1),K&&qe(s,"refreshInit",K),Yt&&(Yt.pause(),Xe.tween&&Xe.tween.kill()&&(Xe.tween=0)),!U)){for(var F=J.length;F--;)if(J[F].scroller===E&&J[F]!==y)return;qe(E,"resize",Pr),U||qe(E,"scroll",Rn)}},y.kill=function(A,q){y.disable(A,q),ne&&!q&&ne.kill(),l&&delete ya[l];var F=J.indexOf(y);F>=0&&J.splice(F,1),F===ht&&Fs>0&&ht--,F=0,J.forEach(function(W){return W.scroller===y.scroller&&(F=1)}),F||ft||(y.scroll.rec=0),n&&(n.scrollTrigger=null,A&&n.revert({kill:!1}),q||n.kill()),mt&&[mt,St,$,$t].forEach(function(W){return W.parentNode&&W.parentNode.removeChild(W)}),Ur===y&&(Ur=0),f&&(He&&(He.uncache=1),F=0,J.forEach(function(W){return W.pin===f&&F++}),F||(He.spacer=0)),i.onKill&&i.onKill(y)},J.push(y),y.enable(!1,!1),gi&&gi(y),n&&n.add&&!$e){var le=y.update;y.update=function(){y.update=le,te.cache++,ae||Oe||y.refresh()},z.delayedCall(.01,y.update),$e=.01,ae=Oe=0}else y.refresh();f&&Dg()},s.register=function(i){return jn||(z=i||Sd(),Cd()&&window.document&&s.enable(),jn=Cr),jn},s.defaults=function(i){if(i)for(var n in i)ks[n]=i[n];return ks},s.disable=function(i,n){Cr=0,J.forEach(function(o){return o[n?"kill":"disable"](i)}),qe(ee,"wheel",Rn),qe(pe,"scroll",Rn),clearInterval(ws),qe(pe,"touchcancel",ti),qe(ce,"touchstart",ti),$s(qe,pe,"pointerdown,touchstart,mousedown",xc),$s(qe,pe,"pointerup,touchend,mouseup",wc),ro.kill(),Ss(qe);for(var r=0;r<te.length;r+=3)Ps(qe,te[r],te[r+1]),Ps(qe,te[r],te[r+2])},s.enable=function(){if(ee=window,pe=document,Et=pe.documentElement,ce=pe.body,z&&(Qr=z.utils.toArray,Dr=z.utils.clamp,ba=z.core.context||ti,Io=z.core.suppressOverwrites||ti,dl=ee.history.scrollRestoration||"auto",xa=ee.pageYOffset||0,z.core.globals("ScrollTrigger",s),ce)){Cr=1,Yn=document.createElement("div"),Yn.style.height="100vh",Yn.style.position="absolute",zd(),Tg(),ze.register(z),s.isTouch=ze.isTouch,Ai=ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_a=ze.isTouch===1,We(ee,"wheel",Rn),ul=[ee,pe,Et,ce],z.matchMedia?(s.matchMedia=function(c){var u=z.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},z.addEventListener("matchMediaInit",function(){Ld(),_l()}),z.addEventListener("matchMediaRevert",function(){return Ad()}),z.addEventListener("matchMedia",function(){an(0,1),vn("matchMedia")}),z.matchMedia().add("(orientation: portrait)",function(){return Ho(),Ho})):console.warn("Requires GSAP 3.11.0 or later"),Ho(),We(pe,"scroll",Rn);var i=ce.hasAttribute("style"),n=ce.style,r=n.borderTopStyle,o=z.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=bi(ce),Fe.m=Math.round(a.top+Fe.sc())||0,gt.m=Math.round(a.left+gt.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(ce.setAttribute("style",""),ce.removeAttribute("style")),ws=setInterval($c,250),z.delayedCall(.5,function(){return Cs=0}),We(pe,"touchcancel",ti),We(ce,"touchstart",ti),$s(We,pe,"pointerdown,touchstart,mousedown",xc),$s(We,pe,"pointerup,touchend,mouseup",wc),ma=z.utils.checkPrefix("transform"),Us.push(ma),jn=nt(),ro=z.delayedCall(.2,an).pause(),In=[pe,"visibilitychange",function(){var c=ee.innerWidth,u=ee.innerHeight;pe.hidden?(_c=c,bc=u):(_c!==c||bc!==u)&&Pr()},pe,"DOMContentLoaded",an,ee,"load",an,ee,"resize",Pr],Ss(We),J.forEach(function(c){return c.enable(0,1)}),l=0;l<te.length;l+=3)Ps(qe,te[l],te[l+1]),Ps(qe,te[l],te[l+2])}},s.config=function(i){"limitCallbacks"in i&&(No=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(ws)||(ws=n)&&setInterval($c,n),"ignoreMobileResize"in i&&(_a=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ss(qe)||Ss(We,i.autoRefreshEvents||"none"),yd=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=_t(i),o=te.indexOf(r),a=_n(r);~o&&te.splice(o,a?6:2),n&&(a?ai.unshift(ee,n,ce,n,Et,n):ai.unshift(r,n))},s.clearMatchMedia=function(i){J.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(Tt(i)?_t(i):i).getBoundingClientRect(),a=o[r?fn:pn]*n||0;return r?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},s.positionInViewport=function(i,n,r){Tt(i)&&(i=_t(i));var o=i.getBoundingClientRect(),a=o[r?fn:pn],l=n==null?a/2:n in oo?oo[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},s.killAll=function(i){if(J.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=bn.killAll||[];bn={},n.forEach(function(r){return r()})}},s})();Q.version="3.14.2";Q.saveStyles=function(s){return s?Qr(s).forEach(function(e){if(e&&e.style){var t=kt.indexOf(e);t>=0&&kt.splice(t,5),kt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),z.core.getCache(e),ba())}}):kt};Q.revert=function(s,e){return _l(!s,e)};Q.create=function(s,e){return new Q(s,e)};Q.refresh=function(s){return s?Pr(!0):(jn||Q.register())&&an(!0)};Q.update=function(s){return++te.cache&&xi(s===!0?2:0)};Q.clearScrollMemory=Md;Q.maxScroll=function(s,e){return si(s,e?gt:Fe)};Q.getScrollFunc=function(s,e){return qi(_t(s),e?gt:Fe)};Q.getById=function(s){return ya[s]};Q.getAll=function(){return J.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Q.isScrolling=function(){return!!Bt};Q.snapDirectional=ml;Q.addEventListener=function(s,e){var t=bn[s]||(bn[s]=[]);~t.indexOf(e)||t.push(e)};Q.removeEventListener=function(s,e){var t=bn[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Q.batch=function(s,e){var t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var d=[],h=[],f=z.delayedCall(n,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),r<=d.length&&f.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&st(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return st(r)&&(r=r(),We(Q,"refresh",function(){return r=e.batchMax()})),Qr(s).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(Q.create(c))}),t};var Ac=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},Bo=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(ze.isTouch?" pinch-zoom":""):"none",e===Et&&s(ce,t)},As={auto:1,scroll:1},Fg=function(e){var t=e.event,i=e.target,n=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||z.core.getCache(r),a=nt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==ce&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(As[(l=Ut(r)).overflowY]||As[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!_n(r)&&(As[(l=Ut(r)).overflowY]||As[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Rd=function(e,t,i,n){return ze.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&Fg,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&We(pe,ze.eventTypes[0],Mc,!1,!0)},onDisable:function(){return qe(pe,ze.eventTypes[0],Mc,!0)}})},Ug=/(input|label|select|textarea)/i,Lc,Mc=function(e){var t=Ug.test(e.target.tagName);(t||Lc)&&(e._gsapAllow=!0,Lc=t)},Hg=function(e){rn(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=_t(e.target)||Et,u=z.core.globals().ScrollSmoother,d=u&&u.get(),h=Ai&&(e.content&&_t(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=qi(c,Fe),g=qi(c,gt),p=1,_=(ze.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,v=0,b=st(n)?function(){return n(a)}:function(){return n||2.8},x,w,S=Rd(c,e.type,!0,r),P=function(){return w=!1},C=ti,T=ti,k=function(){l=si(c,Fe),T=Dr(Ai?1:0,l),i&&(C=Dr(0,si(c,gt))),x=gn},O=function(){h._gsap.y=Sr(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},M=function(){if(w){requestAnimationFrame(P);var Z=Sr(a.deltaY/2),Y=T(f.v-Z);if(h&&Y!==f.v+f.offset){f.offset=Y-f.v;var y=Sr((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+y+", 0, 1)",h._gsap.y=y+"px",f.cacheID=te.cache,xi()}return!0}f.offset&&O(),w=!0},E,V,U,I,N=function(){k(),E.isActive()&&E.vars.scrollY>l&&(f()>l?E.progress(1)&&f(l):E.resetTo("scrollY",l))};return h&&z.set(h,{y:"+=0"}),e.ignoreCheck=function(j){return Ai&&j.type==="touchmove"&&M()||p>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){w=!1;var j=p;p=Sr((ee.visualViewport&&ee.visualViewport.scale||1)/_),E.pause(),j!==p&&Bo(c,p>1.01?!0:i?!1:"x"),V=g(),U=f(),k(),x=gn},e.onRelease=e.onGestureStart=function(j,Z){if(f.offset&&O(),!Z)I.restart(!0);else{te.cache++;var Y=b(),y,K;i&&(y=g(),K=y+Y*.05*-j.velocityX/.227,Y*=Ac(g,y,K,si(c,gt)),E.vars.scrollX=C(K)),y=f(),K=y+Y*.05*-j.velocityY/.227,Y*=Ac(f,y,K,si(c,Fe)),E.vars.scrollY=T(K),E.invalidate().duration(Y).play(.01),(Ai&&E.vars.scrollY>=l||y>=l-1)&&z.to({},{onUpdate:N,duration:Y})}o&&o(j)},e.onWheel=function(){E._ts&&E.pause(),nt()-v>1e3&&(x=0,v=nt())},e.onChange=function(j,Z,Y,y,K){if(gn!==x&&k(),Z&&i&&g(C(y[2]===Z?V+(j.startX-j.x):g()+Z-y[1])),Y){f.offset&&O();var Te=K[2]===Y,ge=Te?U+j.startY-j.y:f()+Y-K[1],ue=T(ge);Te&&ge!==ue&&(U+=ue-ge),f(ue)}(Y||Z)&&xi()},e.onEnable=function(){Bo(c,i?!1:"x"),Q.addEventListener("refresh",N),We(ee,"resize",N),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){Bo(c,!0),qe(ee,"resize",N),Q.removeEventListener("refresh",N),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new ze(e),a.iOS=Ai,Ai&&!f()&&f(1),Ai&&z.ticker.add(ti),I=a._dc,E=z.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Dd(f,f(),function(){return E.pause()})},onUpdate:xi,onComplete:I.vars.onComplete}),a};Q.sort=function(s){if(st(s))return J.sort(s);var e=ee.pageYOffset||0;return Q.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ee.innerHeight}),J.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Q.observe=function(s){return new ze(s)};Q.normalizeScroll=function(s){if(typeof s>"u")return dt;if(s===!0&&dt)return dt.enable();if(s===!1){dt&&dt.kill(),dt=s;return}var e=s instanceof ze?s:Hg(s);return dt&&dt.target===e.target&&dt.kill(),_n(e.target)&&(dt=e),e};Q.core={_getVelocityProp:ga,_inputObserver:Rd,_scrollers:te,_proxies:ai,bridge:{ss:function(){Bt||vn("scrollStart"),Bt=nt()},ref:function(){return it}}};Sd()&&z.registerPlugin(Q);/*!
 * DrawSVGPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var oi,bl,ao,jd,Id,zc,Ca,Nd,Fd=function(){return typeof window<"u"},Ud=function(){return oi||Fd()&&(oi=window.gsap)&&oi.registerPlugin&&oi},Vg=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,qo={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},sn=function(e){return Math.round(e*1e4)/1e4},yi=function(e){return parseFloat(e)||0},Dc=function(e,t){var i=yi(e);return~e.indexOf("%")?i/100*t:i},Ls=function(e,t){return yi(e.getAttribute(t))},Vs=Math.sqrt,Rc=function(e,t,i,n,r,o){return Vs(Math.pow((yi(i)-yi(e))*r,2)+Math.pow((yi(n)-yi(t))*o,2))},jc=function(e){return console.warn(e)},Hd=function(e){return e.getAttribute("vector-effect")==="non-scaling-stroke"},Bg=1,qg=function(e,t,i){var n=e.indexOf(" "),r,o;return n<0?(r=i!==void 0?i+"":e,o=e):(r=e.substr(0,n),o=e.substr(n+1)),r=Dc(r,t),o=Dc(o,t),r>o?[o,r]:[r,o]},Bs=function(e){if(e=bl(e)[0],!e)return 0;var t=e.tagName.toLowerCase(),i=e.style,n=1,r=1,o,a,l,c,u,d,h;Hd(e)&&(r=e.getScreenCTM(),n=Vs(r.a*r.a+r.b*r.b),r=Vs(r.d*r.d+r.c*r.c));try{a=e.getBBox()}catch{jc("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var f=a||{x:0,y:0,width:0,height:0},g=f.x,p=f.y,_=f.width,v=f.height;if((!a||!_&&!v)&&qo[t]&&(_=Ls(e,qo[t][0]),v=Ls(e,qo[t][1]),t!=="rect"&&t!=="line"&&(_*=2,v*=2),t==="line"&&(g=Ls(e,"x1"),p=Ls(e,"y1"),_=Math.abs(_-g),v=Math.abs(v-p))),t==="path")c=i.strokeDasharray,i.strokeDasharray="none",o=e.getTotalLength()||0,sn(n)!==sn(r)&&!zc&&(zc=1)&&jc("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),o*=(n+r)/2,i.strokeDasharray=c;else if(t==="rect")o=_*2*n+v*2*r;else if(t==="line")o=Rc(g,p,g+_,p+v,n,r);else if(t==="polyline"||t==="polygon")for(l=e.getAttribute("points").match(Vg)||[],t==="polygon"&&l.push(l[0],l[1]),o=0,u=2;u<l.length;u+=2)o+=Rc(l[u-2],l[u-1],l[u],l[u+1],n,r)||0;else(t==="circle"||t==="ellipse")&&(d=_/2*n,h=v/2*r,o=Math.PI*(3*(d+h)-Vs((3*d+h)*(d+3*h))));return o||0},Ic=function(e,t){if(e=bl(e)[0],!e)return[0,0];t||(t=Bs(e)+1);var i=ao.getComputedStyle(e),n=i.strokeDasharray||"",r=yi(i.strokeDashoffset),o=n.indexOf(",");return o<0&&(o=n.indexOf(" ")),n=o<0?t:yi(n.substr(0,o)),n>t&&(n=t),[-r||0,n-r||0]},Nc=function(){Fd()&&(ao=window,Id=oi=Ud(),bl=oi.utils.toArray,Ca=oi.core.getStyleSaver,Nd=oi.core.reverting||function(){},jd=((ao.navigator||{}).userAgent||"").indexOf("Edge")!==-1)},Vd={version:"3.14.2",name:"drawSVG",register:function(e){oi=e,Nc()},init:function(e,t,i,n,r){if(!e.getBBox)return!1;Id||Nc();var o=Bs(e),a,l,c;return this.styles=Ca&&Ca(e,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=i,this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?(t+"").indexOf(" ")===-1&&(t="0 "+t):t="0 0",a=Ic(e,o),l=qg(t,o,a[0]),this._length=sn(o),this._dash=sn(a[1]-a[0]),this._offset=sn(-a[0]),this._dashPT=this.add(this,"_dash",this._dash,sn(l[1]-l[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,sn(-l[0]),0,0,0,0,0,1),jd&&(c=ao.getComputedStyle(e),c.strokeLinecap!==c.strokeLinejoin&&(l=yi(c.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",l,l+.01))),this._live=Hd(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),Bg},render:function(e,t){if(t.tween._time||!Nd()){var i=t._pt,n=t._style,r,o,a,l;if(i){for(t._live&&(r=Bs(t._target),r!==t._length&&(o=r/t._length,t._length=r,t._offsetPT&&(t._offsetPT.s*=o,t._offsetPT.c*=o),t._dashPT?(t._dashPT.s*=o,t._dashPT.c*=o):t._dash*=o));i;)i.r(e,i.d),i=i._next;a=t._dash||e&&e!==1&&1e-4||0,r=t._length-a+.1,l=t._offset,a&&l&&a+Math.abs(l%t._length)>t._length-.05&&(l+=l<0?.005:-.005)&&(r+=.005),n.strokeDashoffset=a?l:l+.001,n.strokeDasharray=r<.1?"none":a?a+"px,"+(t._nowrap?999999:r)+"px":"0px, 999999px"}}else t.styles.revert()},getLength:Bs,getPosition:Ic};Ud()&&oi.registerPlugin(Vd);oe.registerPlugin(sr,Vd,Q);oe.defaults({duration:1,ease:sr.create("custom",".75,0,.5,1")});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qs=globalThis,vl=qs.ShadowRoot&&(qs.ShadyCSS===void 0||qs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bd=Symbol(),Fc=new WeakMap;let Wg=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Bd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(vl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Fc.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Fc.set(t,e))}return e}toString(){return this.cssText}};const Yg=s=>new Wg(typeof s=="string"?s:s+"",void 0,Bd),Xg=(s,e)=>{if(vl)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=qs.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},Uc=vl?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Yg(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Gg,defineProperty:Kg,getOwnPropertyDescriptor:Zg,getOwnPropertyNames:Jg,getOwnPropertySymbols:Qg,getPrototypeOf:em}=Object,Ui=globalThis,Hc=Ui.trustedTypes,tm=Hc?Hc.emptyScript:"",Wo=Ui.reactiveElementPolyfillSupport,Hr=(s,e)=>s,lo={toAttribute(s,e){switch(e){case Boolean:s=s?tm:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},yl=(s,e)=>!Gg(s,e),Vc={attribute:!0,type:String,converter:lo,reflect:!1,useDefault:!1,hasChanged:yl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ui.litPropertyMetadata??(Ui.litPropertyMetadata=new WeakMap);let Nn=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Vc){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Kg(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=Zg(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){const a=n==null?void 0:n.call(this);r==null||r.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Vc}static _$Ei(){if(this.hasOwnProperty(Hr("elementProperties")))return;const e=em(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Hr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Hr("properties"))){const t=this.properties,i=[...Jg(t),...Qg(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Uc(n))}else e!==void 0&&t.push(Uc(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xg(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:lo).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var r,o;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:lo;this._$Em=n;const c=l.fromAttribute(t,a.type);this[n]=c??((o=this._$Ej)==null?void 0:o.get(n))??c,this._$Em=null}}requestUpdate(e,t,i,n=!1,r){var o;if(e!==void 0){const a=this.constructor;if(n===!1&&(r=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??yl)(r,t)||i.useDefault&&i.reflect&&r===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n){const{wrapped:a}=o,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Nn.elementStyles=[],Nn.shadowRootOptions={mode:"open"},Nn[Hr("elementProperties")]=new Map,Nn[Hr("finalized")]=new Map,Wo==null||Wo({ReactiveElement:Nn}),(Ui.reactiveElementVersions??(Ui.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=globalThis,Bc=s=>s,co=Vr.trustedTypes,qc=co?co.createPolicy("lit-html",{createHTML:s=>s}):void 0,qd="$lit$",Li=`lit$${Math.random().toFixed(9).slice(2)}$`,Wd="?"+Li,im=`<${Wd}>`,yn=document,ts=()=>yn.createComment(""),is=s=>s===null||typeof s!="object"&&typeof s!="function",xl=Array.isArray,nm=s=>xl(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Yo=`[ 	
\f\r]`,br=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wc=/-->/g,Yc=/>/g,en=RegExp(`>|${Yo}(?:([^\\s"'>=/]+)(${Yo}*=${Yo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xc=/'/g,Gc=/"/g,Yd=/^(?:script|style|textarea|title)$/i,rm=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),R=rm(1),xn=Symbol.for("lit-noChange"),Me=Symbol.for("lit-nothing"),Kc=new WeakMap,ln=yn.createTreeWalker(yn,129);function Xd(s,e){if(!xl(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return qc!==void 0?qc.createHTML(e):e}const sm=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",o=br;for(let a=0;a<t;a++){const l=s[a];let c,u,d=-1,h=0;for(;h<l.length&&(o.lastIndex=h,u=o.exec(l),u!==null);)h=o.lastIndex,o===br?u[1]==="!--"?o=Wc:u[1]!==void 0?o=Yc:u[2]!==void 0?(Yd.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=en):u[3]!==void 0&&(o=en):o===en?u[0]===">"?(o=n??br,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?en:u[3]==='"'?Gc:Xc):o===Gc||o===Xc?o=en:o===Wc||o===Yc?o=br:(o=en,n=void 0);const f=o===en&&s[a+1].startsWith("/>")?" ":"";r+=o===br?l+im:d>=0?(i.push(c),l.slice(0,d)+qd+l.slice(d)+Li+f):l+Li+(d===-2?a:f)}return[Xd(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class ns{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,u]=sm(e,t);if(this.el=ns.createElement(c,i),ln.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=ln.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(qd)){const h=u[o++],f=n.getAttribute(d).split(Li),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?am:g[1]==="?"?lm:g[1]==="@"?cm:Co}),n.removeAttribute(d)}else d.startsWith(Li)&&(l.push({type:6,index:r}),n.removeAttribute(d));if(Yd.test(n.tagName)){const d=n.textContent.split(Li),h=d.length-1;if(h>0){n.textContent=co?co.emptyScript:"";for(let f=0;f<h;f++)n.append(d[f],ts()),ln.nextNode(),l.push({type:2,index:++r});n.append(d[h],ts())}}}else if(n.nodeType===8)if(n.data===Wd)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(Li,d+1))!==-1;)l.push({type:7,index:r}),d+=Li.length-1}r++}}static createElement(e,t){const i=yn.createElement("template");return i.innerHTML=e,i}}function ir(s,e,t=s,i){var o,a;if(e===xn)return e;let n=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=is(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=ir(s,n._$AS(s,e.values),n,i)),e}class om{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??yn).importNode(t,!0);ln.currentNode=n;let r=ln.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new cs(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new um(r,this,e)),this._$AV.push(c),l=i[++a]}o!==(l==null?void 0:l.index)&&(r=ln.nextNode(),o++)}return ln.currentNode=yn,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class cs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Me,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ir(this,e,t),is(e)?e===Me||e==null||e===""?(this._$AH!==Me&&this._$AR(),this._$AH=Me):e!==this._$AH&&e!==xn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):nm(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Me&&is(this._$AH)?this._$AA.nextSibling.data=e:this.T(yn.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ns.createElement(Xd(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(t);else{const o=new om(n,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=Kc.get(e.strings);return t===void 0&&Kc.set(e.strings,t=new ns(e)),t}k(e){xl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new cs(this.O(ts()),this.O(ts()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const n=Bc(e).nextSibling;Bc(e).remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Co{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=Me,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Me}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=ir(this,e,t,0),o=!is(e)||e!==this._$AH&&e!==xn,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=ir(this,a[i+l],t,l),c===xn&&(c=this._$AH[l]),o||(o=!is(c)||c!==this._$AH[l]),c===Me?e=Me:e!==Me&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!n&&this.j(e)}j(e){e===Me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class am extends Co{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Me?void 0:e}}class lm extends Co{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Me)}}class cm extends Co{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=ir(this,e,t,0)??Me)===xn)return;const i=this._$AH,n=e===Me&&i!==Me||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Me&&(i===Me||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class um{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ir(this,e)}}const Xo=Vr.litHtmlPolyfillSupport;Xo==null||Xo(ns,cs),(Vr.litHtmlVersions??(Vr.litHtmlVersions=[])).push("3.3.2");const dm=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new cs(e.insertBefore(ts(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=globalThis;let G=class extends Nn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dm(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return xn}};var nu;G._$litElement$=!0,G.finalized=!0,(nu=mn.litElementHydrateSupport)==null||nu.call(mn,{LitElement:G});const Go=mn.litElementPolyfillSupport;Go==null||Go({LitElement:G});(mn.litElementVersions??(mn.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hm={attribute:!0,type:String,converter:lo,reflect:!1,hasChanged:yl},fm=(s=hm,e,t)=>{const{kind:i,metadata:n}=t;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,s,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,s,a),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function L(s){return(e,t)=>typeof t=="object"?fm(s,e,t):((i,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(n,r):void 0})(s,e,t)}class pm{constructor(){this._dark=!0,this.listeners=new Set}get dark(){return this._dark}set dark(e){this._dark=e,document.documentElement.classList.toggle("dark",e),localStorage.setItem("theme",e?"dark":"light"),this.notifyListeners()}toggle(){this.dark=!this.dark}subscribe(e){this.listeners.add(e)}unsubscribe(e){this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>{e.requestUpdate()})}init(){const e=localStorage.getItem("theme");e&&(this._dark=e==="dark"),document.documentElement.classList.toggle("dark",this._dark)}}const vr=new pm,ui=s=>class extends s{connectedCallback(){super.connectedCallback(),vr.subscribe(this)}disconnectedCallback(){super.disconnectedCallback(),vr.unsubscribe(this)}get dark(){return vr.dark}set dark(e){vr.dark=e}toggleTheme(){vr.toggle()}};var gm=Object.defineProperty,mm=Object.getOwnPropertyDescriptor,Gd=(s,e,t,i)=>{for(var n=i>1?void 0:i?mm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&gm(e,t,n),n};let Sa=class extends ui(G){constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language,this.requestUpdate()}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){}render(){return R`
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
                <p class="mb-8 text-sm/loose text-pretty lg:text-base/loose">
                  ${m.t("about.p1")}
                </p>
                <p class="text-sm/loose text-pretty lg:text-base/loose">
                  ${m.t("about.p2")}
                </p>
              </div>
              <div>
                <h3
                  class="text-brand-400 font-mono text-[.625rem] font-semibold tracking-widest uppercase"
                >
                  ${m.t("about.education")}
                </h3>
                <ul class="grid gap-y-4 xl:grid-cols-3">
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Industrial Design
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2012 <span class="text-zinc-500">&bull;</span> Escola de
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
                      2026 <span class="text-zinc-500">&bull;</span> Univ.
                      Católica de Brasília
                    </p>
                  </li>
                </ul>
              </div>
              <div class="pt-2">
                <h3
                  class="text-brand-400 font-mono text-[.625rem] font-semibold tracking-widest uppercase"
                >
                  ${m.t("about.courses")}
                </h3>
                <ul class="grid gap-y-4 xl:grid-cols-3">
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Digital Product Design
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2025 <span class="text-zinc-500">&bull;</span> Tera
                      <span class="text-zinc-500">&bull;</span>
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
                      2025 <span class="text-zinc-500">&bull;</span> Tera
                      <span class="text-zinc-500">&bull;</span>
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
    `}createRenderRoot(){return this}};Gd([L({type:String})],Sa.prototype,"lang",2);Sa=Gd([ie("about-section")],Sa);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _m={CHILD:2},bm=s=>(...e)=>({_$litDirective$:s,values:e});class vm{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $a extends vm{constructor(e){if(super(e),this.it=Me,e.type!==_m.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Me||e==null)return this._t=void 0,this.it=e;if(e===xn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}$a.directiveName="unsafeHTML",$a.resultType=1;const ci=bm($a);var ym=Object.defineProperty,xm=Object.getOwnPropertyDescriptor,Kd=(s,e,t,i)=>{for(var n=i>1?void 0:i?xm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ym(e,t,n),n};let Pa=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return R`
      <div class="mx-5 pt-22 pb-5 lg:pt-32 lg:pb-2">
        <h1
          class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
        >
          ${ci(m.t("featured.title"))}
        </h1>
      </div>
    `}createRenderRoot(){return this}};Kd([L({type:String})],Pa.prototype,"lang",2);Pa=Kd([ie("projects-header")],Pa);var wm=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,us=(s,e,t,i)=>{for(var n=i>1?void 0:i?Cm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&wm(e,t,n),n};let nr=class extends G{constructor(){super(...arguments),this.title="",this.tags="",this.year="2025",this.contentHtml=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){const e=this.tags.split(",").map(t=>t.trim()).map(t=>R`<span class="text-[.875rem] text-zinc-600">/</span
          ><span class="text-zinc-50">${t}</span>`);return R`
      <div
        class="mb-8 lg:sticky lg:top-24 lg:mb-0 lg:grid lg:items-end lg:gap-8"
      >
        <div class="mb-6 lg:mb-1 flex flex-wrap gap-2 text-[.875rem] leading-none">
          <span class="text-brand-400"> ${this.year} </span>
          ${e}
        </div>
        <h2
          class="text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem]"
        >
          ${this.title}
        </h2>
        ${this.contentHtml?R`<div
              class="mt-4 flex flex-col items-start gap-3 leading-loose text-balance lg:mt-0"
            >
              ${ci(this.contentHtml)}
            </div>`:null}
      </div>
    `}createRenderRoot(){return this}};us([L({type:String})],nr.prototype,"title",2);us([L({type:String})],nr.prototype,"tags",2);us([L({type:String})],nr.prototype,"year",2);us([L({type:String})],nr.prototype,"contentHtml",2);nr=us([ie("item-header")],nr);const Sm="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e";var $m=Object.defineProperty,Pm=Object.getOwnPropertyDescriptor,wl=(s,e,t,i)=>{for(var n=i>1?void 0:i?Pm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&$m(e,t,n),n};let uo=class extends ui(G){constructor(){super(),this.more=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}toggleMore(){this.more=!this.more}toggleLanguage(){const e=m.language==="en"?"pt":"en";m.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}changeTheme(){this.toggleTheme()}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Copied!":"Copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){oe.from("header > *",{y:-64}),window.addEventListener("scroll",()=>{this.more=!1}),oe.to("header",{scrollTrigger:{trigger:".hero",start:"60 60",end:"60 0",toggleActions:"play none none reverse",scrub:1},outline:"1px solid hsla(0 0 100% / 0.075)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return R`
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
                  class="flex h-20 items-center px-5 text-[2rem] tracking-tighter text-zinc-500"
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
              class="flex size-8 ms-2 cursor-pointer items-center justify-center rounded-full opacity-50 transition-all duration-[200ms] hover:bg-zinc-50/10 hover:opacity-100 active:scale-95 active:bg-zinc-50/20"
              title="Go back to homepage"
            >
              <img src="${Sm}" class="transition-all duration-[200ms]" />
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
    `}createRenderRoot(){return this}};wl([L({type:Boolean})],uo.prototype,"more",2);wl([L({type:String})],uo.prototype,"lang",2);uo=wl([ie("projects-menu")],uo);const km="/src/5c2c4b.webp",Tm="/src/36c011.webp",Om="/src/c5764d.webp",Em="/src/a374cc.webp",Am="/src/bf87a5.webp",Lm="/src/fd8081.webp";var Mm=Object.defineProperty,zm=Object.getOwnPropertyDescriptor,Zd=(s,e,t,i)=>{for(var n=i>1?void 0:i?zm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Mm(e,t,n),n};let ka=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=`
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
    `;return R`
      <div id="allugator" class="py-8 lg:grid lg:grid-cols-3 lg:py-16 mx-5">
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
            src="${Em}"
            loading="lazy"
          />
          <img src="${Lm}" loading="lazy" />
          <img src="${km}" loading="lazy" />
          <img
            class="mix-blend-screen lg:col-span-2 lg:row-span-2"
            src="${Tm}"
            loading="lazy"
          />
          <img src="${Am}" loading="lazy" />
          <img
            class="border-2 border-zinc-800"
            src="${Om}"
            loading="lazy"
          />
        </div>
      </div>
    `}createRenderRoot(){return this}};Zd([L({type:String})],ka.prototype,"lang",2);ka=Zd([ie("projects-allugator")],ka);const Dm="/src/39683d.webp",Rm="/src/15c264.webp",jm="/src/295098.webp",Im="/src/778272.webp",Nm="/src/50783c.webp";var Fm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,Jd=(s,e,t,i)=>{for(var n=i>1?void 0:i?Um(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Fm(e,t,n),n};let Ta=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}renderDescription(){return`${m.t("damus.description1")}`}render(){const s=`
      <p class="text-[.875rem]">
        ${this.renderDescription()}
      </p>
      <p class="text-[.875rem]">
        ${m.t("damus.description2")}
      </p>
    `;return R`
      <div id="damus" class="py-8 lg:grid lg:grid-cols-3 lg:py-16 mx-5">
        <item-header
          title="${m.t("damus.title")}"
          tags="${m.t("damus.tags")}"
          year="${m.t("damus.year")}"
          .contentHtml=${s}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:gap-4"
        >
          <img src="${Dm}" loading="lazy" class="border-2 border-zinc-800" />
          <img src="${Rm}" loading="lazy" />
          <img src="${jm}" loading="lazy" />
          <img src="${Nm}" loading="lazy" />
          <img
            class="col-span-2 border-2 border-zinc-800"
            src="${Im}"
            loading="lazy"
          />
        </div>
      </div>
    `}createRenderRoot(){return this}};Jd([L({type:String})],Ta.prototype,"lang",2);Ta=Jd([ie("projects-damus")],Ta);const Hm="/src/e761eb.webp",Vm="/src/140c7b.webp",Bm="/src/36a4a4.webp",qm="/src/ae754e.webp",Wm="/src/492162.webp",Ym="/src/bec54c.webp",Xm="/src/555530.webp",Gm="/src/6a0945.webp",Km="/src/4fb0f0.webp",Zm="/src/52e81e.webp",Jm="/src/f150ed.webp",Qm="/src/55a96b.webp",e0="/src/85d489.webp";var t0=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,Qd=(s,e,t,i)=>{for(var n=i>1?void 0:i?i0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&t0(e,t,n),n};let Oa=class extends G{constructor(){super(...arguments),this.src="",this.overlayRafId=0,this.onKeydown=s=>{s.key==="Escape"&&this.close()},this.onBackdropClick=s=>{s.target===this.querySelector(".zoom-overlay")&&this.close()},this.close=()=>{this.remove()}}connectedCallback(){var s;super.connectedCallback(),(s=window.lenis)==null||s.stop(),document.body.style.overflow="hidden",document.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){var s,e,t;super.disconnectedCallback(),this.overlayRafId&&cancelAnimationFrame(this.overlayRafId),this.overlayRafId=0,(e=(s=this.overlayLenis)==null?void 0:s.destroy)==null||e.call(s),this.overlayLenis=void 0,(t=window.lenis)==null||t.start(),document.body.style.overflow="",document.removeEventListener("keydown",this.onKeydown)}firstUpdated(){const s=this.querySelector(".zoom-overlay"),e=this.querySelector(".zoom-content");if(!s||!e)return;this.overlayLenis=new du({wrapper:s,content:e});const t=i=>{var n;(n=this.overlayLenis)==null||n.raf(i),this.overlayRafId=requestAnimationFrame(t)};this.overlayRafId=requestAnimationFrame(t),s.addEventListener("click",this.onBackdropClick)}render(){return R`
      <button class="${"fixed right-5 leading-none top-5 z-60 flex transition-all ps-3 pe-1 xl:pe-1.5 gap-1 h-8 rounded-full items-center hover:bg-zinc-100 hover:text-zinc-950 hover:font-semibold text-zinc-100"}" @click=${this.close}>
        Esc
        <svg
          class="size-5 stroke-zinc-100"
          stroke-width="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <div
        class="zoom-overlay fixed inset-0 z-50 overflow-auto overscroll-contain bg-zinc-50/20 backdrop-blur backdrop-brightness-50"
      >
        <div class="zoom-content container my-24 max-w-[1280px]">
          <picture>
            <img
              src="${Wm}"
              width="1920"
              height="1136"
              type="image/webp"
              class="rounded-t-[.5rem]"
            />
            <img
              src="${Ym}"
              width="1920"
              height="800"
              loading="lazy"
              type="image/webp"
            />
            <img
              src="${Xm}"
              width="1920"
              height="800"
              loading="lazy"
              type="image/webp"
            />
            <img
              src="${Gm}"
              width="1920"
              height="800"
              loading="lazy"
              type="image/webp"
            />
            <img
              src="${Km}"
              width="1920"
              height="800"
              loading="lazy"
              type="image/webp"
            />
            <img
              src="${Zm}"
              width="1920"
              height="800"
              loading="lazy"
              type="image/webp"
            />
            <img
              src="${Jm}"
              width="1920"
              height="800"
              loading="lazy"
              type="image/webp"
            />
            <img
              src="${Qm}"
              width="1920"
              height="800"
              loading="lazy"
              type="image/webp"
            />
            <img
              src="${e0}"
              width="1920"
              height="236"
              loading="lazy"
              type="image/webp"
              class="rounded-b-[.5rem]"
            />
          </picture>
        </div>
      </div>
    `}createRenderRoot(){return this}};Qd([L({type:String})],Oa.prototype,"src",2);Oa=Qd([ie("img-zoom")],Oa);var n0=Object.defineProperty,r0=Object.getOwnPropertyDescriptor,eh=(s,e,t,i)=>{for(var n=i>1?void 0:i?r0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&n0(e,t,n),n};let Ea=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language},this.createZoomBox=s=>{const e=document.createElement("img-zoom");return e.setAttribute("src",s.src),e},this.handleSeeFullPage=()=>{const s=document.querySelector("#ifficient-homepage");if(s){const e=this.createZoomBox(s);document.body.appendChild(e)}}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=`
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
    `;return R`
      <div id="ifficient" class="py-8 lg:grid lg:grid-cols-3 lg:py-16 mx-5">
        <item-header
          title="${m.t("ifficient.title")}"
          tags="${m.t("ifficient.tags")}"
          .contentHtml=${s}
        ></item-header>
        <div class="grid gap-4 *:rounded-[.75rem] lg:col-span-2">
          <div
            class="group relative aspect-video cursor-pointer overflow-hidden border-2 border-zinc-800 before:absolute before:inset-0 before:transition-colors before:duration-200 hover:before:bg-zinc-950/50 before:hover:opacity-1"
            @click=${this.handleSeeFullPage}
          >
            <img id="ifficient-homepage" class="w-full" src="${Hm}" />
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100/15 px-5 py-3 text-[1rem] leading-[20px] font-medium text-zinc-50 opacity-0 backdrop-blur transition-all duration-200 group-hover:opacity-100 hover:bg-zinc-100/30"
            >
              ${m.t("ifficient.fullView")}
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2 *:rounded-[.75rem] lg:gap-4">
            <img src="${Bm}" />
            <img src="${Vm}" />
            <img src="${qm}" />
          </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};eh([L({type:String})],Ea.prototype,"lang",2);Ea=eh([ie("projects-ifficient")],Ea);const s0="/src/00c014.webp",o0="/src/f89330.webp",a0="/src/342435.webp",l0="/src/8e3288.webp",c0="/src/a44924.webp",u0="/src/a6b260.webp",d0="/src/53e6da.gif",h0="/src/73910b.webp",f0="/src/b808d9.webp",p0="/src/80a3c2.gif",g0="/src/dd2f35.webp";var m0=Object.defineProperty,_0=Object.getOwnPropertyDescriptor,th=(s,e,t,i)=>{for(var n=i>1?void 0:i?_0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&m0(e,t,n),n};let Aa=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=`
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
    `;return R`
      <div id="multiplayer" class="py-8 lg:grid lg:grid-cols-3 lg:py-16 mx-5">
        <item-header
          title="${m.t("multiplayer.title")}"
          tags="${m.t("multiplayer.tags")}"
          year="${m.t("multiplayer.year")}"
          .contentHtml=${s}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:gap-4"
        >
          <img src="${o0}" loading="lazy" />
          <img src="${a0}" loading="lazy" />
          <img src="${c0}" loading="lazy" />
          <img src="${u0}" loading="lazy" />
          <img src="${p0}" loading="lazy" />
          <img src="${l0}" loading="lazy" />
          <img src="${f0}" loading="lazy" />
          <img src="${g0}" loading="lazy" />
          <img src="${h0}" loading="lazy" />
          <img src="${d0}" loading="lazy" />
          <img
            class="col-span-2 border-2 border-zinc-800"
            src="${s0}"
            loading="lazy"
          />
        </div>
      </div>
    `}createRenderRoot(){return this}};th([L({type:String})],Aa.prototype,"lang",2);Aa=th([ie("projects-multiplayer")],Aa);var b0=Object.getOwnPropertyDescriptor,v0=(s,e,t,i)=>{for(var n=i>1?void 0:i?b0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(n)||n);return n};let Zc=class extends ui(G){render(){return R`
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
          class="hidden lg:block my-8 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:my-16 lg:mb-32"
        ></div>
        <cases-section></cases-section>
      </section>
    `}createRenderRoot(){return this}};Zc=v0([ie("projects-index")],Zc);var y0=Object.defineProperty,x0=Object.getOwnPropertyDescriptor,Cl=(s,e,t,i)=>{for(var n=i>1?void 0:i?x0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&y0(e,t,n),n};let ho=class extends G{constructor(){super(...arguments),this.reverse=!1,this.customClass=""}render(){return R`
      <div
        class="progressive-blur ${this.reverse?"progressive-blur--reverse":""} ${this.customClass}"
      >
        ${Array.from({length:6},()=>R`<div></div>`)}
      </div>
    `}createRenderRoot(){return this}};Cl([L({type:Boolean})],ho.prototype,"reverse",2);Cl([L({type:String})],ho.prototype,"customClass",2);ho=Cl([ie("progressive-blur")],ho);const w0="/src/341817.webp",C0="/src/7ea3a6.webp";var S0=Object.defineProperty,$0=Object.getOwnPropertyDescriptor,ih=(s,e,t,i)=>{for(var n=i>1?void 0:i?$0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&S0(e,t,n),n};let La=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}initAnimation(){const s=this.querySelector("#cases"),e=this.querySelectorAll("#cases .cases");s&&e.length>0&&oe.matchMedia().add("(min-width: 1024px)",()=>{oe.from(Array.from(e),{scrollTrigger:{trigger:s,start:"top 100%",end:"bottom 80%",toggleActions:"play none none reverse",scrub:2},stagger:-.1,y:"10rem"})})}firstUpdated(){this.initAnimation()}renderTitle(s){const e=s.split("<br class='block xl:hidden'>");return e.length>1?R`
        ${e[0]}
        <br class="block xl:hidden" />
        ${e[1]}
      `:s}render(){return R`
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
                class="absolute bottom-0 left-0 flex gap-2 p-8 font-mono text-[.75rem] leading-none font-medium tracking-[.05em] text-zinc-600 uppercase"
              >
                2025 ${m.t("cases.project")}
              </span>
              <div
                class="pointer-events-none absolute bottom-0 overflow-hidden"
              >
                <img
                  class="cases absolute w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${w0}"
                  width="1264"
                  height="720"
                  alt="Dark mode mobile dashboard showing analytics overview with graphs, lead count, and campaign metrics on a tilted iPhone screen."
                />
                <img
                  class="cases w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${C0}"
                  width="1264"
                  height="720"
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
    `}createRenderRoot(){return this}};ih([L({type:String})],La.prototype,"lang",2);La=ih([ie("cases-section")],La);var P0=Object.defineProperty,k0=Object.getOwnPropertyDescriptor,or=(s,e,t,i)=>{for(var n=i>1?void 0:i?k0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&P0(e,t,n),n};let wn=class extends G{constructor(){super(...arguments),this.url="",this.label="",this.index="000",this.target="_blank",this.rel="noopener noreferrer"}render(){return R`
      <a
        href="${this.url}"
        target="${this.target}"
        rel="${this.rel}"
        class="group relative flex h-20 items-center border-b border-zinc-800 bg-black px-5 text-zinc-50 transition-colors duration-400 group-hover/item:text-zinc-700 hover:text-white lg:h-auto lg:border-0 lg:bg-transparent"
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
    `}createRenderRoot(){return this}};or([L({type:String})],wn.prototype,"url",2);or([L({type:String})],wn.prototype,"label",2);or([L({type:String})],wn.prototype,"index",2);or([L({type:String})],wn.prototype,"target",2);or([L({type:String})],wn.prototype,"rel",2);wn=or([ie("footer-link")],wn);var T0=Object.defineProperty,O0=Object.getOwnPropertyDescriptor,nh=(s,e,t,i)=>{for(var n=i>1?void 0:i?O0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&T0(e,t,n),n};let Ma=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}currentYear(){return new Date().getFullYear()}getRandomQuote(){const s=["Stay hungry, stay foolish.","Get off zero.","No great thing is created suddenly.","Where the mind goes the body will follow.","To define is to limit.","Publish to polish."],e=Math.floor(Math.random()*s.length);return s[e]}initMenuAnimation(){const s=this.querySelector("footer"),e=this.querySelector("#menu"),t=this.querySelectorAll("#menu > *");s&&e&&t.length>0&&oe.from(Array.from(t),{scrollTrigger:{trigger:s,start:"top 50%",end:"top 0%",toggleActions:"play none none reverse"},opacity:0,stagger:.1,y:"5rem"})}firstUpdated(){this.initMenuAnimation()}render(){return R`
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
              class="mx-5 flex h-20 items-center text-zinc-600 transition-colors duration-400 group-hover/item:text-zinc-400 lg:p-0"
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
          <span class="hidden text-zinc-600 md:inline"> / </span>
          <span class="hidden md:inline">
            ${this.getRandomQuote()||"To define is to limit."}
          </span>
        </div>
      </footer>
    `}createRenderRoot(){return this}};nh([L({type:String})],Ma.prototype,"lang",2);Ma=nh([ie("footer-section")],Ma);const E0="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e",A0="/src/c2501f.webp",L0="/src/c03c5c.webp",M0="/src/37694a.webp",z0="/src/2e45e1.webp",D0="/src/6ab35f.png";var R0=Object.defineProperty,j0=Object.getOwnPropertyDescriptor,rh=(s,e,t,i)=>{for(var n=i>1?void 0:i?j0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&R0(e,t,n),n};let za=class extends ui(G){constructor(){super(...arguments),this.lang=m.language}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}itemEntrance(){oe.from(".hero",{paddingTop:64}),document.querySelectorAll("[data-entrance]").forEach(s=>{const e=[{item:"4",opacity:"0",y:"20%",delay:.4,scale:1.1,duration:1},{item:"5",opacity:"0",y:"20%",delay:0,scale:1.1,duration:1.2},{item:"3",opacity:"0",y:"0rem",delay:.2,duration:1},{item:"2",opacity:"0",y:"0rem",delay:.2,duration:1},{item:"1",opacity:"0",y:"0rem",delay:.2,duration:1}],t=oe.timeline();e.forEach((i,n)=>{t.from(s.querySelectorAll(`[data-entrance-item="${i.item}"]`),{y:i.y,opacity:i.opacity,delay:i.delay,scale:i.scale,duration:i.duration},n===0?void 0:"<")})})}heroParallax(){document.querySelectorAll("[data-parallax-layers]").forEach(s=>{let e=oe.timeline({scrollTrigger:{trigger:s,start:"0% 0%",end:"100% 0%",scrub:0}});[{layer:"1",y:"5rem"},{layer:"2",y:"10rem",opacity:0,filter:"blur(1rem)"}].forEach((i,n)=>{e.to(s.querySelectorAll(`[data-parallax-layer="${i.layer}"]`),{y:i.y,ease:"none",opacity:i.opacity,filter:i.filter},n===0?void 0:"<")})})}firstUpdated(){this.itemEntrance(),this.heroParallax()}render(){return R`
      <section
        class="hero before:animate-(--animate-fade-in)"
        data-parallax-layers
        data-entrance
      >
        <div
          class="container flex min-h-[calc(100svh-4rem)] flex-col-reverse justify-between pt-12 sm:flex-col md:pt-18"
        >
          <div
            class="my-auto flex flex-col items-center pb-16 xl:pt-16 xl:pb-20"
            data-parallax-layer="1"
          >
            <div data-entrance-item="3" class="mb-5 flex items-center gap-4">
              <img
                src="${A0}"
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
                  Paulo Melo Jr.
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
              class="mb-9 flex flex-col gap-2 text-center xl:gap-4"
            >
              <h1
                data-split="heading"
                class="tracking-tightest text-[3rem] leading-none font-medium text-balance text-zinc-50 xl:tracking-tighter 2xl:text-[5rem]"
              >
                ${m.t("hero.title")}
              </h1>
              <h2 class="px-5 text-[1.125rem] text-balance 2xl:text-[1.5rem]">
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
                  src="${E0}"
                  class="-rotate-90 transition-opacity duration-500"
                />
              </a>
            </div>
          </div>
          <div
            class="col-span-12 container grid grid-cols-12 items-end"
            data-parallax-layer="2"
          >
            <div class="bg-zinc-950 col-span-12 block sm:hidden">
              <img
                data-entrance-item="5"
                class="aspect-[4/3] w-full rounded-tl-lg mask-b-from-50% object-cover object-center"
                src="${D0}"
                height="384"
                width="384"
              />
            </div>
            <div class="bg-zinc-950 hidden xl:col-span-3 xl:block">
              <img
                data-entrance-item="5"
                class="aspect-square w-full rounded-tl-lg mask-b-from-50% object-cover object-top sm:mask-r-from-50% sm:mask-b-from-0%"
                src="${L0}"
                height="384"
                width="384"
              />
            </div>
            <div class="bg-zinc-950 col-span-8 hidden sm:block xl:col-span-6">
              <img
                data-entrance-item="4"
                class="max-h-[432px] w-full rounded-t-lg mask-b-from-75% object-cover object-top"
                src="${M0}"
                height="432"
                width="768"
              />
            </div>
            <div class="bg-zinc-950 col-span-4 hidden sm:block xl:col-span-3">
              <img
                data-entrance-item="5"
                class="aspect-square w-full rounded-tr-lg mask-b-from-50% mask-l-from-0% object-cover object-top"
                src="${z0}"
                height="384"
                width="384"
              />
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};rh([L({type:String})],za.prototype,"lang",2);za=rh([ie("hero-section")],za);var I0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,sh=(s,e,t,i)=>{for(var n=i>1?void 0:i?N0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&I0(e,t,n),n};let Da=class extends ui(G){constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language,this.requestUpdate()}}get journeyItems(){return[{hide:!1,custom:"text-brand-400",start:"2019",end:"2025",title:m.t("journey.t4"),description:m.t("journey.p4")},{hide:!1,start:"2018",end:"2019",title:m.t("journey.t3"),description:m.t("journey.p3"),more:m.t("journey.m3")},{hide:!1,start:"2016",end:"2018",title:m.t("journey.t2"),description:m.t("journey.p2"),more:m.t("journey.m2")},{hide:!1,start:"2015",end:"2016",title:m.t("journey.t1"),description:m.t("journey.p1")}]}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}renderJourneyHeader(){return R`
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
    `}renderJourneyItem(s){return s.hide?R`<div class="hidden xl:flex"></div>`:R`
      <div class="job relative flex flex-col gap-4 px-5 xl:px-20 2xl:px-32">
        <span
          class="mb-2 font-mono text-[.75rem] leading-none font-medium tracking-tighter text-zinc-500"
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
        ${s.more?R`<span class="text-default mt-1 hidden text-xs"
              >${s.more}</span
            >`:Me}
      </div>
    `}firstUpdated(s){}render(){return R`
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
    `}createRenderRoot(){return this}};sh([L({type:String})],Da.prototype,"lang",2);Da=sh([ie("journey-section")],Da);function F0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ko={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Jc;function U0(){return Jc||(Jc=1,(function(s){(function(){var e={}.hasOwnProperty;function t(){for(var r="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(r=n(r,i(a)))}return r}function i(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var o="";for(var a in r)e.call(r,a)&&r[a]&&(o=n(o,a));return o}function n(r,o){return o?r?r+" "+o:r+o:r}s.exports?(t.default=t,s.exports=t):window.classNames=t})()})(Ko)),Ko.exports}var H0=U0();const Cn=F0(H0);var V0=Object.defineProperty,B0=Object.getOwnPropertyDescriptor,So=(s,e,t,i)=>{for(var n=i>1?void 0:i?B0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&V0(e,t,n),n};let rs=class extends G{constructor(){super(...arguments),this.star="",this.items="",this.reverse=!1}render(){const e=this.items.split(",").map(n=>n.trim()).map(n=>R`<li>${n}</li>
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
          </li>`),t=this.reverse,i=Cn("marquee",{reverse:t});return R`
      <div class=${i}>
        <ul class="marquee__content">
          ${e}
        </ul>
        <ul class="marquee__content">
          ${e}
        </ul>
      </div>
    `}createRenderRoot(){return this}};So([L({type:String})],rs.prototype,"star",2);So([L({type:String})],rs.prototype,"items",2);So([L({type:Boolean})],rs.prototype,"reverse",2);rs=So([ie("marquee-element")],rs);var q0=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,$o=(s,e,t,i)=>{for(var n=i>1?void 0:i?W0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&q0(e,t,n),n};let ss=class extends G{constructor(){super(...arguments),this.classNames="",this.href="",this.label=""}firstUpdated(){const s=document.querySelectorAll(".menu-item");s.forEach(i=>{const n=i.firstElementChild;oe.set(n,{clipPath:"inset(0% 0% 100% 0%)"})});function e(){const i=this.firstElementChild;oe.to(i,{duration:.2,clipPath:"inset(0% 0% 0% 0%)"})}function t(){if(this.classList.contains("active"))return;const i=this.firstElementChild;i&&oe.to(i,{duration:.2,clipPath:"inset(100% 0 0 0)",onComplete:()=>{oe.set(i,{clipPath:"inset(0% 0% 100%)"})}})}s.forEach(i=>{i.addEventListener("mouseenter",e),i.addEventListener("mouseleave",t)})}render(){const s=Cn("font-medium relative flex justify-center leading-none pt-2 pb-2.5 px-4 text-zinc-300 text-[.875rem] items-center rounded-full hover:text-zinc-50 hover:bg-zinc-50/10 transition-all duration-[200ms] active:scale-95 active:bg-zinc-50/20");return R`<a
      class="${s} ${this.classNames}"
      href="${this.href}"
      data-label="${this.label}"
    >
      ${this.label}
    </a>`}createRenderRoot(){return this}};$o([L({type:String})],ss.prototype,"classNames",2);$o([L({type:String})],ss.prototype,"href",2);$o([L({type:String})],ss.prototype,"label",2);ss=$o([ie("menu-item")],ss);var Y0=Object.defineProperty,X0=Object.getOwnPropertyDescriptor,Sl=(s,e,t,i)=>{for(var n=i>1?void 0:i?X0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Y0(e,t,n),n};let fo=class extends ui(G){constructor(){super(),this.more=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}toggleMore(){this.more=!this.more}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}toggleLanguage(){const e=m.language==="en"?"pt":"en";m.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){oe.from("header > *",{y:-64}),window.addEventListener("scroll",()=>{this.more=!1}),oe.to("header",{scrollTrigger:{trigger:".hero",start:"60 60",end:"60 0",toggleActions:"play none none reverse",scrub:1},outline:"1px solid hsla(0 0 100% / 0.075)",padding:"0 0 0 0"})}render(){return R`
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
                  class="flex h-20 items-center px-5 text-[2rem] tracking-tighter text-zinc-500"
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
    `}createRenderRoot(){return this}};Sl([L({type:Boolean})],fo.prototype,"more",2);Sl([L({type:String})],fo.prototype,"lang",2);fo=Sl([ie("menu-container")],fo);var G0=Object.defineProperty,K0=Object.getOwnPropertyDescriptor,ar=(s,e,t,i)=>{for(var n=i>1?void 0:i?K0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&G0(e,t,n),n};let Sn=class extends G{constructor(){super(...arguments),this.baseClasses="",this.customClasses="",this.icon="",this.label="",this.title=""}render(){const e=Cn("relative font-medium text-[.75rem] tracking-[0.04em] flex transition-all duration-[200ms] px-1 xl:px-1.5 gap-2 h-8 rounded-full leading-8.5 xl:items-center  hover:text-zinc-50 text-zinc-300  active:scale-95 me-2",this.customClasses);return R`
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
    `}createRenderRoot(){return this}};ar([L({type:String})],Sn.prototype,"baseClasses",2);ar([L({type:String})],Sn.prototype,"customClasses",2);ar([L({type:String})],Sn.prototype,"icon",2);ar([L({type:String})],Sn.prototype,"label",2);ar([L({type:String})],Sn.prototype,"title",2);Sn=ar([ie("languages-button")],Sn);var Z0=Object.defineProperty,J0=Object.getOwnPropertyDescriptor,Po=(s,e,t,i)=>{for(var n=i>1?void 0:i?J0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Z0(e,t,n),n};let os=class extends G{constructor(){super(...arguments),this.href="",this.label="",this.hover=""}render(){const s=Cn("flex px-3 tracking-wide gap-2 text-zinc-50 text-[.75rem] uppercase items-center py-2.5 leading-none rounded-full whitespace-nowrap font-medium active:scale-95");return R`<button class="menu-item group/item ${s} relative">
      <div
        class="${s} pointer-events-none absolute inset-0 justify-center"
        aria-hidden="true"
      >
        <span class="text-zinc-950">
          ${this.hover?this.hover:this.label}
        </span>
      </div>
      ${this.label}
    </button>`}createRenderRoot(){return this}};Po([L({type:String})],os.prototype,"href",2);Po([L({type:String})],os.prototype,"label",2);Po([L({type:String})],os.prototype,"hover",2);os=Po([ie("mail-button")],os);var Q0=Object.defineProperty,e1=Object.getOwnPropertyDescriptor,ds=(s,e,t,i)=>{for(var n=i>1?void 0:i?e1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Q0(e,t,n),n};let rr=class extends G{constructor(){super(...arguments),this.classNames="",this.icon="",this.label="",this.title=""}render(){const e=Cn("relative text-[.75rem] tracking-[0.05em] flex transition-all ps-3 pe-1 xl:pe-1.5 gap-2 h-8 xl:h-6 hover:h-8 rounded-full leading-8.5 xl:items-center hover:bg-zinc-100 hover:text-zinc-950 text-zinc-300 font-medium stroke-zinc-300 hover:stroke-zinc-950 hover:fill-zinc-100 active:scale-95",this.classNames);return R`
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
    `}createRenderRoot(){return this}};ds([L({type:String})],rr.prototype,"classNames",2);ds([L({type:String})],rr.prototype,"icon",2);ds([L({type:String})],rr.prototype,"label",2);ds([L({type:String})],rr.prototype,"title",2);rr=ds([ie("button-lang")],rr);var t1=Object.defineProperty,i1=Object.getOwnPropertyDescriptor,ko=(s,e,t,i)=>{for(var n=i>1?void 0:i?i1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&t1(e,t,n),n};let as=class extends G{constructor(){super(...arguments),this.href="",this.label="",this.index=""}render(){return R`<div class="border-b border-zinc-800 xl:border-0">
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
    </div>`}createRenderRoot(){return this}};ko([L({type:String})],as.prototype,"href",2);ko([L({type:String})],as.prototype,"label",2);ko([L({type:String})],as.prototype,"index",2);as=ko([ie("mobile-item")],as);var n1=Object.defineProperty,r1=Object.getOwnPropertyDescriptor,$l=(s,e,t,i)=>{for(var n=i>1?void 0:i?r1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&n1(e,t,n),n};let po=class extends G{constructor(){super(),this.langMenu=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}toggleLangMenu(){this.langMenu=!this.langMenu,this.langMenu&&setTimeout(()=>{const s=this.renderRoot.querySelector("#langMenuEl");if(s){const e=()=>{this.langMenu=!1};s.removeEventListener("mouseleave",e),s.addEventListener("mouseleave",e,{once:!0})}},0)}selectLanguage(s){m.changeLanguage(s),localStorage.setItem("lang",s),this.lang=s,this.langMenu=!1}render(){return R`
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
    `}createRenderRoot(){return this}};$l([L({type:Boolean})],po.prototype,"langMenu",2);$l([L({type:String})],po.prototype,"lang",2);po=$l([ie("languages-dropdown")],po);var s1=Object.defineProperty,o1=Object.getOwnPropertyDescriptor,lr=(s,e,t,i)=>{for(var n=i>1?void 0:i?o1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&s1(e,t,n),n};let $n=class extends ui(G){constructor(){super(...arguments),this.lang=m.language,this.index="000",this.t="Add Title",this.content="Add Content",this.open=!1}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}firstUpdated(){}render(){return R`
      <div
        class="${this.open?"col-span-3 bg-zinc-800":"bg-zinc-900"} flex aspect-square h-full flex-col justify-between rounded-[.25rem] p-6 xl:aspect-[2/1] xl:p-12"
      >
        <span class="mb-2 leading-none text-zinc-600"> ${this.index} </span>
        <h2
          class="text-[1.5rem] leading-none tracking-tighter text-zinc-50 xl:text-[2rem]"
        >
          ${this.t}
        </h2>
      </div>
    `}createRenderRoot(){return this}};lr([L({type:String})],$n.prototype,"lang",2);lr([L({type:String})],$n.prototype,"index",2);lr([L({type:String})],$n.prototype,"t",2);lr([L({type:String})],$n.prototype,"content",2);lr([L({type:Boolean})],$n.prototype,"open",2);$n=lr([ie("method-item")],$n);var a1=Object.defineProperty,l1=Object.getOwnPropertyDescriptor,oh=(s,e,t,i)=>{for(var n=i>1?void 0:i?l1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&a1(e,t,n),n};let Ra=class extends ui(G){constructor(){super(...arguments),this.lang=m.language}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}firstUpdated(){}render(){return R`
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
    `}createRenderRoot(){return this}};oh([L({type:String})],Ra.prototype,"lang",2);Ra=oh([ie("method-section")],Ra);var c1=Object.defineProperty,u1=Object.getOwnPropertyDescriptor,ah=(s,e,t,i)=>{for(var n=i>1?void 0:i?u1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&c1(e,t,n),n};let ja=class extends ui(G){constructor(){super(...arguments),this.lang=m.language}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}firstUpdated(){const s=this.renderRoot.querySelectorAll(".praxis svg"),e=this.renderRoot.querySelector("section > .praxis-bg");oe.to(e,{scrollTrigger:{trigger:e,start:"0 75%",end:"0 50%",toggleActions:"play none none reverse",scrub:1},opacity:0,ease:"none"}),s.forEach(i=>{const n=i.querySelectorAll("path");oe.from(n,{scrollTrigger:{trigger:i,start:"0% 75%",toggleActions:"play none none reverse"},stagger:.12,opacity:0,fill:(this.dark,"var(--color-brand-400)"),drawSVG:!1})}),this.renderRoot.querySelectorAll(".praxis").forEach(i=>{oe.from(i.children,{scrollTrigger:{trigger:i.children,start:"0% 75%",toggleActions:"play none none reverse"},duration:.8,stagger:.1,x:"5rem",filter:"blur(.5rem)",opacity:n=>n===0?1:0})})}render(){return R`
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
    `}createRenderRoot(){return this}};ah([L({type:String})],ja.prototype,"lang",2);ja=ah([ie("praxis-section")],ja);const d1=`<style>\r
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
</svg>`;var h1=Object.defineProperty,f1=Object.getOwnPropertyDescriptor,lh=(s,e,t,i)=>{for(var n=i>1?void 0:i?f1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&h1(e,t,n),n};let Ia=class extends G{constructor(){super(...arguments),this.minMs=500,this.mountedAt=0,this.finishTimeoutId=null,this.fallbackTimeoutId=null,this.isExiting=!1,this.onDomContentLoaded=()=>this.finishAfterMinTime(),this.onWindowLoad=()=>this.finishAfterMinTime()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-busy","true"),this.setAttribute("aria-live","polite"),this.mountedAt=performance.now(),document.readyState==="complete"||document.readyState==="interactive"?this.finishAfterMinTime():(document.addEventListener("DOMContentLoaded",this.onDomContentLoaded,{once:!0}),window.addEventListener("load",this.onWindowLoad,{once:!0}),this.fallbackTimeoutId=window.setTimeout(()=>this.finishAfterMinTime(),8e3))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("DOMContentLoaded",this.onDomContentLoaded),window.removeEventListener("load",this.onWindowLoad),this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null)}finishAfterMinTime(){const s=performance.now()-this.mountedAt,e=Math.max(0,this.minMs-s);this.finishTimeoutId=window.setTimeout(()=>this.exit(),e)}exit(){if(this.isExiting)return;this.isExiting=!0,this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null);const s=this.querySelector("#loading")||this,e=document.querySelector("main");oe.set(e,{y:"5rem",opacity:0}),oe.to(s,{opacity:0,scale:2,filter:"blur(1rem)",duration:.4,force3D:!0,onComplete:()=>{this.dispatchEvent(new CustomEvent("mobile-loading:done",{bubbles:!0,composed:!0})),oe.to(e,{y:0,opacity:1,duration:1,onComplete:()=>{e.removeAttribute("style")}}),this.remove()}})}render(){return R` <div
      id="loading"
      class="fixed top-0 z-100 h-svh w-full bg-zinc-950"
    >
      <div
        class="container flex h-full flex-col items-center justify-center gap-4"
      >
        <div class="">${ci(`${d1}`)}</div>
        <span
          class="hidden animate-pulse text-[.75rem] leading-10 tracking-[.05em] text-zinc-50 uppercase"
        >
          ${this.lang==="pt"?R`Carregando...`:R`Loading...`}
        </span>
      </div>
    </div>`}createRenderRoot(){return this}};lh([L({type:Number,attribute:"min-ms"})],Ia.prototype,"minMs",2);Ia=lh([ie("page-loading")],Ia);function Ms(s){let e=document.querySelector(`meta[name="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("name",s),document.head.appendChild(e)),e}function Qc(s){let e=document.querySelector(`meta[property="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("property",s),document.head.appendChild(e)),e}function p1(s){const e=s.replace(/\/+$/,"")||"/";return e==="/"||e.endsWith("/index.html")?"home":e.endsWith("/projects")||e.endsWith("/projects.html")?"projects":e.endsWith("/last-project")||e.endsWith("/last-project.html")?"lastProject":e.endsWith("/404")||e.endsWith("/404.html")?"404":"home"}function eu(s){const e=m.t.bind(m),t=e("seo.common.description"),i=e("seo.common.keywords");switch(s){case"projects":return{title:e("seo.projects.title"),description:t,keywords:[i,e("seo.projects.keywords")].filter(Boolean).join(", ")};case"lastProject":return{title:e("seo.lastProject.title"),description:t,keywords:[i,e("seo.lastProject.keywords")].filter(Boolean).join(", ")};case"404":return{title:e("seo.404.title"),description:t,keywords:i};case"home":default:return{title:e("seo.home.title"),description:t,keywords:i}}}function tu(s){document.title=s.title,Ms("description").setAttribute("content",s.description),Ms("keywords").setAttribute("content",s.keywords),Qc("og:title").setAttribute("content",s.title),Qc("og:description").setAttribute("content",s.description),Ms("twitter:title").setAttribute("content",s.title),Ms("twitter:description").setAttribute("content",s.description)}function iu(){const s=p1(window.location.pathname);tu(eu(s)),m.on("languageChanged",()=>{tu(eu(s))})}typeof window<"u"&&document.readyState!=="loading"?iu():typeof window<"u"&&document.addEventListener("DOMContentLoaded",()=>iu(),{once:!0});const g1="/src/4f3f0c.png";var m1=Object.defineProperty,_1=Object.getOwnPropertyDescriptor,ch=(s,e,t,i)=>{for(var n=i>1?void 0:i?_1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&m1(e,t,n),n};let Na=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}handleCoverImage(){const s=document.querySelector("#cover-image");s&&oe.matchMedia().add("(min-width: 1024px)",()=>{oe.to(s,{scrollTrigger:{trigger:"#about",start:"top 20%",end:"bottom 20%",scrub:2},y:"-5rem",ease:"none"})})}firstUpdated(){this.handleCoverImage()}render(){return R` <div
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
              <span class="text-zinc-500">/</span>
              <span class="hidden xl:flex">
                ${m.t("twyne.about.details.contribution2")}
              </span>
              <span class="hidden text-zinc-500 xl:flex">/</span>
              <span> ${m.t("twyne.about.details.contribution3")} </span>
            </span>
          </li>
        </ul>
      </div>
      <div
        class="relative flex aspect-square overflow-hidden lg:aspect-[3/4] xl:aspect-square"
      >
        <img
          src="${g1}"
          id="cover-image"
          class="absolute top-0 left-6 flex-none rounded-ss-md border-t border-zinc-800 shadow-[0px_24px_24px_0px_black] lg:top-16 lg:left-16 lg:max-w-none lg:rounded-ss-lg"
        />
        <progressive-blur
          class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-zinc-950 to-transparent"
        ></progressive-blur>
      </div>
    </div>`}createRenderRoot(){return this}};ch([L({type:String})],Na.prototype,"lang",2);Na=ch([ie("twyne-about")],Na);var b1=Object.defineProperty,v1=Object.getOwnPropertyDescriptor,uh=(s,e,t,i)=>{for(var n=i>1?void 0:i?v1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&b1(e,t,n),n};oe.registerPlugin(Q);let Fa=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.cleanupAnimation()}setupSignatureAnimation(){if(!this.signElement)return;const s=this.signElement.querySelectorAll("path");this.animation=oe.from(s,{scrollTrigger:{trigger:this.signElement,start:"100% 100%",toggleActions:"play none none reverse"},duration:.75,stagger:.75,drawSVG:!1})}cleanupAnimation(){this.animation&&(this.animation.kill(),this.animation=void 0)}firstUpdated(s){this.signElement=this.querySelector("#sign"),this.setupSignatureAnimation()}renderSignature(){return R`
      <svg
        id="sign"
        class="mt-2 rotate-21 stroke-brand-400"
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
    `}renderContent(){return R`
      <h2
        class="font-mono mt-16 mb-4 text-[0.75rem] leading-none font-semibold tracking-[0.05em] text-zinc-500 uppercase"
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
    `}render(){return R`
      <section id="conclusion">
        <div class="container grid-cols-4 px-6 pt-24 lg:grid lg:pt-32">
          <div
            class="relative col-span-2 col-start-2 flex aspect-square flex-col items-center justify-center gap-8 text-center text-[1.25rem] leading-loose text-balance text-zinc-300 2xl:text-[1.5rem]"
          >
            ${this.renderContent()} ${this.renderSignature()}
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};uh([L({type:String})],Fa.prototype,"lang",2);Fa=uh([ie("twyne-conclusion")],Fa);var y1=Object.defineProperty,x1=Object.getOwnPropertyDescriptor,dh=(s,e,t,i)=>{for(var n=i>1?void 0:i?x1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&y1(e,t,n),n};let Ua=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return R`
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
    `}createRenderRoot(){return this}};dh([L({type:String})],Ua.prototype,"lang",2);Ua=dh([ie("twyne-goal")],Ua);const w1="/src/3d9806.svg";var C1=Object.defineProperty,S1=Object.getOwnPropertyDescriptor,hh=(s,e,t,i)=>{for(var n=i>1?void 0:i?S1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&C1(e,t,n),n};let Ha=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return R`
      <div
        class="flex flex-col items-start px-5 py-12 pt-8 xl:gap-2 xl:px-14 xl:py-14 xl:pt-16"
      >
        <div class="flex items-center gap-6">
          <img src="${w1}" class="h-14 border-r border-zinc-700 pr-6" />
          <h1
            class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
          >
            ${m.t("twyne.t2")}
          </h1>
        </div>
      </div>
    `}createRenderRoot(){return this}};hh([L({type:String})],Ha.prototype,"lang",2);Ha=hh([ie("twyne-header")],Ha);var $1=Object.defineProperty,P1=Object.getOwnPropertyDescriptor,fh=(s,e,t,i)=>{for(var n=i>1?void 0:i?P1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&$1(e,t,n),n};let Va=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=m.t("twyne.impact.l1",{returnObjects:!0});return R`
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
          ${s.map(e=>R`<li
                class="flex items-baseline gap-2 text-balance before:text-zinc-700 before:content-['✦'] lg:gap-4"
              >
                ${e}
              </li>`)}
        </ul>
      </div>
    `}createRenderRoot(){return this}};fh([L({type:String})],Va.prototype,"lang",2);Va=fh([ie("twyne-impact")],Va);const k1="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='1.75'/%3e%3c/svg%3e";var T1=Object.defineProperty,O1=Object.getOwnPropertyDescriptor,Pl=(s,e,t,i)=>{for(var n=i>1?void 0:i?O1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&T1(e,t,n),n};let go=class extends ui(G){constructor(){super(),this.more=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}toggleMore(){this.more=!this.more}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}changeLang(){const e=m.language==="en"?"pt":"en";m.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){oe.from("header > *",{y:-64}),window.addEventListener("scroll",()=>{this.more=!1}),oe.to("header",{scrollTrigger:{trigger:".hero",start:"60 60",end:"60 0",toggleActions:"play none none reverse",scrub:1},outline:"1px solid hsla(0 0 100% / 0.075)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return R`
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
                  class="flex h-20 items-center px-5 text-[2rem] tracking-tighter text-zinc-500"
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
              <img src="${k1}" class="transition-all duration-[200ms]" />
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
    `}createRenderRoot(){return this}};Pl([L({type:Boolean})],go.prototype,"more",2);Pl([L({type:String})],go.prototype,"lang",2);go=Pl([ie("twyne-menu")],go);const ph="/src/0f79a9.png",gh="/src/e2bfcc.png",mh="/src/4cb65f.png",_h="/src/04ff88.png",bh="/src/df5b53.png";var E1=Object.defineProperty,A1=Object.getOwnPropertyDescriptor,vh=(s,e,t,i)=>{for(var n=i>1?void 0:i?A1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&E1(e,t,n),n};let Ba=class extends G{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}screensMotion(){document.querySelectorAll("[data-parallax-layers]").forEach(s=>{let e=oe.timeline({scrollTrigger:{trigger:"#mobile-images",start:"0% 100%",end:"100% 0%",scrub:0}});[{layer:"1",ys:"30%",ye:"0%",opacity:.5},{layer:"2",ys:"20%",ye:"5%",opacity:.75},{layer:"3",ys:"10%",ye:"10%",opacity:1},{layer:"4",ys:"20%",ye:"5%",opacity:.75},{layer:"5",ys:"30%",ye:"0%",opacity:.5}].forEach((i,n)=>{e.fromTo(s.querySelectorAll(`[data-parallax-layer="${i.layer}"]`),{y:i.ys,opacity:i.opacity},{y:i.ye,opacity:1,ease:"none"},n===0?void 0:"<")})})}firstUpdated(s){this.screensMotion()}render(){return R`
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
          <img src="${gh}" data-parallax-layer="1" class="mobile-screen" />
          <img src="${ph}" data-parallax-layer="2" class="mobile-screen" />
          <img src="${mh}" data-parallax-layer="3" class="mobile-screen" />
          <img src="${_h}" data-parallax-layer="4" class="mobile-screen" />
          <img src="${bh}" data-parallax-layer="5" class="mobile-screen" />
        </div>
      </section>
    `}createRenderRoot(){return this}};vh([L({type:String})],Ba.prototype,"lang",2);Ba=vh([ie("twyne-mobile")],Ba);var L1=Object.defineProperty,M1=Object.getOwnPropertyDescriptor,kl=(s,e,t,i)=>{for(var n=i>1?void 0:i?M1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&L1(e,t,n),n};let mo=class extends G{constructor(){super(...arguments),this.lang=m.language,this.currentIndex=0,this.abortController=new AbortController,this.handleLanguageChange=()=>{this.lang=m.language},this.handlePrev=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateMobScreens())},this.handleNext=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateMobScreens())}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.abortController.abort()}firstUpdated(){this.initCarousel()}updated(s){s.has("lang")&&this.updateComplete.then(()=>{this.initCarousel()})}initCarousel(){if(this.abortController.abort(),this.abortController=new AbortController,this.screens=this.querySelectorAll(".mob-carrossel img"),!this.screens.length)return;this.currentIndex=Math.min(this.currentIndex,this.screens.length-1),this.updateMobScreens=()=>{this.screens.forEach((i,n)=>{const r=n===this.currentIndex;oe.to(i,{opacity:r?1:0,y:r?0:100,duration:.4,delay:r?.2:0,ease:"power2.out",onStart:()=>{r&&i.classList.remove("invisible")},onComplete:()=>{r||i.classList.add("invisible")}})})},this.updateMobScreens();const s=this.querySelector("button[data-prev]"),e=this.querySelector("button[data-next]"),{signal:t}=this.abortController;s&&e&&(s.addEventListener("click",this.handlePrev,{signal:t}),e.addEventListener("click",this.handleNext,{signal:t}))}render(){var s;return R`
      <section class="relative mt-24 px-2 xl:mt-32">
        <div class="container">
          <h2
            class="mb-10 text-center text-[2rem] leading-normal tracking-tighter text-zinc-50 xl:text-[2.5rem] 2xl:text-[3rem]"
          >
            ${ci(m.t("twyne.mobile.t1"))}
          </h2>

          <div class="mob-carrossel relative overflow-hidden">
            <img src="${ph}" class="mobile-screen relative" />
            <img
              src="${gh}"
              class="mobile-screen invisible absolute top-0 left-0"
            />
            <img
              src="${mh}"
              class="mobile-screen invisible absolute top-0 left-0"
            />
            <img
              src="${_h}"
              class="mobile-screen invisible absolute top-0 left-0"
            />
            <img
              src="${bh}"
              class="mobile-screen invisible absolute top-0 left-0"
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
    `}createRenderRoot(){return this}};kl([L({type:String})],mo.prototype,"lang",2);kl([L({type:Number})],mo.prototype,"currentIndex",2);mo=kl([ie("mobile-screens")],mo);const z1="/src/6ab55e.png",D1="/src/b0e17e.png",R1="/src/96ef6f.png",j1="/src/2bf8a7.png",I1="/src/2eab02.png",N1="/src/a54df0.png",F1="/src/b3d826.png",U1="/src/adef9e.png",H1="/src/120066.png",V1="/src/908f2c.png",B1="/src/20a18e.png";var q1=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,yh=(s,e,t,i)=>{for(var n=i>1?void 0:i?W1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&q1(e,t,n),n};oe.registerPlugin(Q);let qa=class extends G{constructor(){super(...arguments),this.lang=m.language,this.componentAnimations=[],this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.cleanupAnimations()}setupComponentAnimations(){this.renderRoot.querySelectorAll("img").forEach(e=>{const t=oe.from(e,{scrollTrigger:{trigger:e,start:"0% 100%",end:"0% 50%",toggleActions:"play none none reverse"},scale:1,opacity:0,filter:"blur(1rem)",duration:1,y:"20%"});this.componentAnimations.push(t)})}cleanupAnimations(){this.componentAnimations.forEach(s=>{s&&s.kill()}),this.componentAnimations=[]}firstUpdated(){this.setupComponentAnimations()}renderProposalList(){const s=m.t("twyne.proposal.l1",{returnObjects:!0});return R`
      <ul
        class="flex flex-col gap-4 leading-loose text-zinc-50 lg:gap-0 2xl:text-[1.25rem]"
      >
        ${s.map(e=>R`
            <li
              class="flex items-baseline gap-2 text-balance before:text-zinc-700 before:content-['✦'] lg:gap-4"
            >
              ${e}
            </li>
          `)}
      </ul>
    `}renderComponentGrid(){return R`
      <div class="flex flex-col items-center gap-2 lg:gap-4">
        <div class="flex gap-4">
          <div class="hidden flex-col gap-4 lg:flex">
            <img
              src="${I1}"
              height="425"
              width="216"
              loading="lazy"
              alt="Component B1"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
            <img
              src="${F1}"
              height="216"
              width="216"
              loading="lazy"
              alt="Component B3"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
          </div>
          <img
            src="${N1}"
            height="660"
            width="560"
            loading="lazy"
            alt="Component B2"
            class="w-[calc(560px*0.8)] xl:w-auto"
          />
        </div>
        <img
          src="${U1}"
          height="448"
          width="792"
          loading="lazy"
          alt="Component B4"
          class="w-[calc(792px*0.8)] xl:w-auto"
        />
        <div class="hidden gap-4 lg:flex">
          <img
            src="${B1}"
            height="218"
            width="280"
            loading="lazy"
            alt="Component B7"
            class="w-[calc(280px*0.8)] xl:w-auto"
          />
          <img
            src="${H1}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B5"
            class="w-[calc(240px*0.8)] xl:w-auto"
          />
          <img
            src="${V1}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B6"
            class="w-[calc(240px*0.8)] xl:w-auto"
          />
        </div>
      </div>
    `}renderComponentColumn(){return R`
      <div class="grid gap-2 lg:gap-4">
        <img
          src="${z1}"
          height="264"
          width="480"
          loading="lazy"
          alt="Component A1"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${D1}"
          height="248"
          width="480"
          loading="lazy"
          alt="Component A2"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${R1}"
          height="492"
          width="480"
          loading="lazy"
          alt="Component A3"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${j1}"
          height="296"
          width="480"
          loading="lazy"
          alt="Component A4"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
      </div>
    `}renderComponentsSection(){return R`
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
    `}render(){return R`
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
    `}createRenderRoot(){return this}};yh([L({type:String})],qa.prototype,"lang",2);qa=yh([ie("twyne-proposal")],qa);const Y1="/src/2f4591.png",X1="/src/367502.png",G1="/src/014eec.png";var K1=Object.defineProperty,Z1=Object.getOwnPropertyDescriptor,Tl=(s,e,t,i)=>{for(var n=i>1?void 0:i?Z1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&K1(e,t,n),n};let _o=class extends G{constructor(){super(...arguments),this.lang=m.language,this.currentIndex=0,this.abortController=new AbortController,this.handleLanguageChange=()=>{this.lang=m.language},this.handlePrev=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateScreens())},this.handleNext=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateScreens())}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.abortController.abort()}firstUpdated(){this.initCarousel()}updated(s){s.has("lang")&&this.updateComplete.then(()=>{this.initCarousel()})}initCarousel(){if(this.abortController.abort(),this.abortController=new AbortController,this.screens=this.querySelectorAll(".carrossel img"),!this.screens.length)return;this.currentIndex=Math.min(this.currentIndex,this.screens.length-1),this.updateScreens=()=>{this.screens.forEach((i,n)=>{const r=n===this.currentIndex;oe.to(i,{opacity:r?1:0,y:r?0:100,duration:.4,delay:r?.2:0,ease:"power2.out",onStart:()=>{r&&i.classList.remove("invisible")},onComplete:()=>{r||i.classList.add("invisible")}})})},this.updateScreens();const s=this.querySelector("button[data-prev]"),e=this.querySelector("button[data-next]"),{signal:t}=this.abortController;s&&e&&(s.addEventListener("click",this.handlePrev,{signal:t}),e.addEventListener("click",this.handleNext,{signal:t}))}render(){var s;return R`
      <section class="relative mt-24 xl:mt-32">
        <div class="container">
          <div class="carrossel relative overflow-hidden">
            <img
              src="${Y1}"
              width="1728"
              height="976"
              class="relative rounded-[.5rem]"
            />
            <img
              src="${X1}"
              width="1728"
              height="976"
              class="invisible absolute top-0 left-0 rounded-[.5rem]"
            />
            <img
              src="${G1}"
              width="1728"
              height="976"
              class="invisible absolute top-0 left-0 rounded-[.5rem]"
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
                  ${this.currentIndex+1} / ${((s=this.screens)==null?void 0:s.length)??3}
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
    `}createRenderRoot(){return this}};Tl([L({type:String})],_o.prototype,"lang",2);Tl([L({type:Number})],_o.prototype,"currentIndex",2);_o=Tl([ie("twyne-screens")],_o);

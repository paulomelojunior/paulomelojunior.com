var rd=Object.defineProperty;var nd=(s,e,t)=>e in s?rd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var D=(s,e,t)=>nd(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const H=s=>typeof s=="string",dn=()=>{let s,e;const t=new Promise((i,r)=>{s=i,e=r});return t.resolve=s,t.reject=e,t},sl=s=>s==null?"":""+s,sd=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},od=/###/g,ol=s=>s&&s.indexOf("###")>-1?s.replace(od,"."):s,al=s=>!s||H(s),Cn=(s,e,t)=>{const i=H(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(al(s))return{};const n=ol(i[r]);!s[n]&&t&&(s[n]=new t),Object.prototype.hasOwnProperty.call(s,n)?s=s[n]:s={},++r}return al(s)?{}:{obj:s,k:ol(i[r])}},ll=(s,e,t)=>{const{obj:i,k:r}=Cn(s,e,Object);if(i!==void 0||e.length===1){i[r]=t;return}let n=e[e.length-1],o=e.slice(0,e.length-1),a=Cn(s,o,Object);for(;a.obj===void 0&&o.length;)n=`${o[o.length-1]}.${n}`,o=o.slice(0,o.length-1),a=Cn(s,o,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${n}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${n}`]=t},ad=(s,e,t,i)=>{const{obj:r,k:n}=Cn(s,e,Object);r[n]=r[n]||[],r[n].push(t)},Ws=(s,e)=>{const{obj:t,k:i}=Cn(s,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},ld=(s,e,t)=>{const i=Ws(s,t);return i!==void 0?i:Ws(e,t)},Qc=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?H(s[i])||s[i]instanceof String||H(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):Qc(s[i],e[i],t):s[i]=e[i]);return s},Tr=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var cd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const ud=s=>H(s)?s.replace(/[&<>"'\/]/g,e=>cd[e]):s;class hd{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const dd=[" ",",","?","!",";"],fd=new hd(20),pd=(s,e,t)=>{e=e||"",t=t||"";const i=dd.filter(o=>e.indexOf(o)<0&&t.indexOf(o)<0);if(i.length===0)return!0;const r=fd.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let n=!r.test(s);if(!n){const o=s.indexOf(t);o>0&&!r.test(s.substring(0,o))&&(n=!0)}return n},qo=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;const i=e.split(t);let r=s;for(let n=0;n<i.length;){if(!r||typeof r!="object")return;let o,a="";for(let l=n;l<i.length;++l)if(l!==n&&(a+=t),a+=i[l],o=r[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;n+=l-n+1;break}r=o}return r},Ys=s=>s==null?void 0:s.replace("_","-"),gd={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){var t,i;(i=(t=console==null?void 0:console[s])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Xs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||gd,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,r){return r&&!this.debug?null:(H(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Xs(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Xs(this.logger,e)}}var ni=new Xs;class ho{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(t)||0;this.observers[i].set(t,r+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...i])})}}class cl extends ho{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var c,u;let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,o=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):H(i)&&n?a.push(...i.split(n)):a.push(i)));const l=Ws(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!o||!H(i)?l:qo((u=(c=this.data)==null?void 0:c[e])==null?void 0:u[t],i,n)}addResource(e,t,i,r){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),r=t,t=a[1]),this.addNamespaces(t),ll(this.data,a,r),n.silent||this.emit("added",e,t,i,r)}addResources(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(H(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});r.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,r,n){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),r=i,i=t,t=a[1]),this.addNamespaces(t);let l=Ws(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?Qc(l,i,n):l={...l,...i},ll(this.data,a,l),o.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(r=>t[r]&&Object.keys(t[r]).length>0)}toJSON(){return this.data}}var eu={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,r){return s.forEach(n=>{var o;e=((o=this.processors[n])==null?void 0:o.process(e,t,i,r))??e}),e}};const ul={},hl=s=>!H(s)&&typeof s!="boolean"&&typeof s!="number";class Gs extends ho{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),sd(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ni.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!pd(e,i,r);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:H(n)?[n]:n};const c=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(c[0])>-1)&&(n=c.shift()),e=c.join(r)}return{key:e,namespaces:H(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],c=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((c==null?void 0:c.toLowerCase())==="cimode"){if(u){const A=t.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${A}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${A}${o}`}return r?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:o}const d=this.resolve(e,t);let h=d==null?void 0:d.res;const f=(d==null?void 0:d.usedKey)||o,g=(d==null?void 0:d.exactUsedKey)||o,p=["[object Number]","[object Function]","[object RegExp]"],m=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,v=t.count!==void 0&&!H(t.count),x=Gs.hasDefaultValue(t),y=v?this.pluralResolver.getSuffix(c,t.count,t):"",S=t.ordinal&&v?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",C=v&&!t.ordinal&&t.count===0,w=C&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${y}`]||t[`defaultValue${S}`]||t.defaultValue;let P=h;_&&!h&&x&&(P=w);const k=hl(P),T=Object.prototype.toString.apply(P);if(_&&P&&k&&p.indexOf(T)<0&&!(H(m)&&Array.isArray(P))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const A=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,P,{...t,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return r?(d.res=A,d.usedParams=this.getUsedParamsDetails(t),d):A}if(n){const A=Array.isArray(P),O=A?[]:{},U=A?g:f;for(const N in P)if(Object.prototype.hasOwnProperty.call(P,N)){const L=`${U}${n}${N}`;x&&!h?O[N]=this.translate(L,{...t,defaultValue:hl(w)?w[N]:void 0,joinArrays:!1,ns:a}):O[N]=this.translate(L,{...t,joinArrays:!1,ns:a}),O[N]===L&&(O[N]=P[N])}h=O}}else if(_&&H(m)&&Array.isArray(h))h=h.join(m),h&&(h=this.extendTranslation(h,e,t,i));else{let A=!1,O=!1;!this.isValidLookup(h)&&x&&(A=!0,h=w),this.isValidLookup(h)||(O=!0,h=o);const N=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&O?void 0:h,L=x&&w!==h&&this.options.updateMissing;if(O||A||L){if(this.logger.log(L?"updateKey":"missingKey",c,l,o,L?w:h),n){const W=this.resolve(o,{...t,keySeparator:!1});W&&W.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const R=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&R&&R[0])for(let W=0;W<R.length;W++)I.push(R[W]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(t.lng||this.language):I.push(t.lng||this.language);const K=(W,b,G)=>{var me;const Oe=x&&G!==h?G:N;this.options.missingKeyHandler?this.options.missingKeyHandler(W,l,b,Oe,L,t):(me=this.backendConnector)!=null&&me.saveMissing&&this.backendConnector.saveMissing(W,l,b,Oe,L,t),this.emit("missingKey",W,l,b,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&v?I.forEach(W=>{const b=this.pluralResolver.getSuffixes(W,t);C&&t[`defaultValue${this.options.pluralSeparator}zero`]&&b.indexOf(`${this.options.pluralSeparator}zero`)<0&&b.push(`${this.options.pluralSeparator}zero`),b.forEach(G=>{K([W],o+G,t[`defaultValue${G}`]||w)})}):K(I,o,w))}h=this.extendTranslation(h,e,t,d,i),O&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(O||A)&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,A?h:void 0))}return r?(d.res=h,d.usedParams=this.getUsedParamsDetails(t),d):h}extendTranslation(e,t,i,r,n){var c,u;var o=this;if((c=this.i18nFormat)!=null&&c.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=H(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(d){const g=e.match(this.interpolator.nestingRegexp);h=g&&g.length}let f=i.replace&&!H(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||r.usedLng,i),d){const g=e.match(this.interpolator.nestingRegexp),p=g&&g.length;h<p&&(i.nest=!1)}!i.lng&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var g=arguments.length,p=new Array(g),m=0;m<g;m++)p[m]=arguments[m];return(n==null?void 0:n[0])===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`),null):o.translate(...p,t)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=H(a)?[a]:a;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=eu.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,n,o,a;return H(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,t),u=c.key;r=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=t.count!==void 0&&!H(t.count),f=h&&!t.ordinal&&t.count===0,g=t.context!==void 0&&(H(t.context)||typeof t.context=="number")&&t.context!=="",p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(m=>{var _,v;this.isValidLookup(i)||(a=m,!ul[`${p[0]}-${m}`]&&((_=this.utils)!=null&&_.hasLoadedNamespace)&&!((v=this.utils)!=null&&v.hasLoadedNamespace(a))&&(ul[`${p[0]}-${m}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach(x=>{var C;if(this.isValidLookup(i))return;o=x;const y=[u];if((C=this.i18nFormat)!=null&&C.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,x,m,t);else{let w;h&&(w=this.pluralResolver.getSuffix(x,t.count,t));const P=`${this.options.pluralSeparator}zero`,k=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(y.push(u+w),t.ordinal&&w.indexOf(k)===0&&y.push(u+w.replace(k,this.options.pluralSeparator)),f&&y.push(u+P)),g){const T=`${u}${this.options.contextSeparator}${t.context}`;y.push(T),h&&(y.push(T+w),t.ordinal&&w.indexOf(k)===0&&y.push(T+w.replace(k,this.options.pluralSeparator)),f&&y.push(T+P))}}let S;for(;S=y.pop();)this.isValidLookup(i)||(n=S,i=this.getResource(x,m,S,t))}))})}),{res:i,usedKey:r,exactUsedKey:n,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,r):this.resourceStore.getResource(e,t,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!H(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const n of t)delete r[n]}return r}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class dl{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ni.create("languageUtils")}getScriptPartFromCode(e){if(e=Ys(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ys(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(H(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(t=r)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(n=>{if(n===r)return n;if(!(n.indexOf("-")<0&&r.indexOf("-")<0)&&(n.indexOf("-")>0&&r.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===r||n.indexOf(r)===0&&r.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),H(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],n=o=>{o&&(this.isSupportedCode(o)?r.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return H(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):H(e)&&n(this.formatLanguageCode(e)),i.forEach(o=>{r.indexOf(o)<0&&n(this.formatLanguageCode(o))}),r}}const fl={zero:0,one:1,two:2,few:3,many:4,other:5},pl={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class md{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=ni.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Ys(e==="dev"?"en":e),r=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:r});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let o;try{o=new Intl.PluralRules(i,{type:r})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),pl;if(!e.match(/-|_/))return pl;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,t)}return this.pluralRulesCache[n]=o,o}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${t}${r}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((r,n)=>fl[r]-fl[n]).map(r=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${r}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const gl=function(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=ld(s,e,t);return!n&&r&&H(t)&&(n=qo(s,t,i),n===void 0&&(n=qo(e,t,i))),n},So=s=>s.replace(/\$/g,"$$$$");class _d{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ni.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:r,prefix:n,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:g,nestingSuffixEscaped:p,nestingOptionsSeparator:m,maxReplaces:_,alwaysFormat:v}=e.interpolation;this.escape=t!==void 0?t:ud,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=n?Tr(n):o||"{{",this.suffix=a?Tr(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?Tr(h):f||Tr("$t("),this.nestingSuffix=g?Tr(g):p||Tr(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=_||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,r){var f;let n,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=g=>{if(g.indexOf(this.formatSeparator)<0){const v=gl(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(v,void 0,i,{...r,...t,interpolationkey:g}):v}const p=g.split(this.formatSeparator),m=p.shift().trim(),_=p.join(this.formatSeparator).trim();return this.format(gl(t,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),_,i,{...r,...t,interpolationkey:m})};this.resetRegExp();const u=(r==null?void 0:r.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((f=r==null?void 0:r.interpolation)==null?void 0:f.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>So(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?So(this.escape(g)):So(g)}].forEach(g=>{for(a=0;n=g.regex.exec(e);){const p=n[1].trim();if(o=c(p),o===void 0)if(typeof u=="function"){const _=u(e,n,r);o=H(_)?_:""}else if(r&&Object.prototype.hasOwnProperty.call(r,p))o="";else if(d){o=n[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),o="";else!H(o)&&!this.useRawValueToEscape&&(o=sl(o));const m=g.safeValue(o);if(e=e.replace(n[0],m),d?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=n[0].length):g.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,n,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),g=h.match(/"/g);(((f==null?void 0:f.length)??0)%2===0&&!g||g.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(p){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,p),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!H(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const u=r[1].split(this.formatSeparator).map(d=>d.trim());r[1]=u.shift(),l=u,c=!0}if(n=t(a.call(this,r[1].trim(),o),o),n&&r[0]===e&&!H(n))return n;H(n)||(n=sl(n)),n||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),n=""),c&&(n=l.reduce((u,d)=>this.format(u,d,i.lng,{...i,interpolationkey:r[1].trim()}),n.trim())),e=e.replace(r[0],n),this.regexp.lastIndex=0}return e}}const vd=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?t.currency||(t.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?t.range||(t.range=r.trim()):r.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();t[u]||(t[u]=c),c==="false"&&(t[u]=!1),c==="true"&&(t[u]=!0),isNaN(c)||(t[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},Or=s=>{const e={};return(t,i,r)=>{let n=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(n={...n,[r.interpolationkey]:void 0});const o=i+JSON.stringify(n);let a=e[o];return a||(a=s(Ys(i),r),e[o]=a),a(t)}};class bd{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ni.create("formatter"),this.options=e,this.formats={number:Or((t,i)=>{const r=new Intl.NumberFormat(t,{...i});return n=>r.format(n)}),currency:Or((t,i)=>{const r=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>r.format(n)}),datetime:Or((t,i)=>{const r=new Intl.DateTimeFormat(t,{...i});return n=>r.format(n)}),relativetime:Or((t,i)=>{const r=new Intl.RelativeTimeFormat(t,{...i});return n=>r.format(n,i.range||"day")}),list:Or((t,i)=>{const r=new Intl.ListFormat(t,{...i});return n=>r.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Or(t)}format(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(a=>a.indexOf(")")>-1)){const a=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,a)].join(this.formatSeparator)}return n.reduce((a,l)=>{var d;const{formatName:c,formatOptions:u}=vd(l);if(this.formats[c]){let h=a;try{const f=((d=r==null?void 0:r.formatParams)==null?void 0:d[r.interpolationkey])||{},g=f.locale||f.lng||r.locale||r.lng||i;h=this.formats[c](a,g,{...u,...r,...f})}catch(f){this.logger.warn(f)}return h}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const yd=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class xd extends ho{constructor(e,t,i){var n,o;let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=ni.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],(o=(n=this.backend)==null?void 0:n.init)==null||o.call(n,i,r.backend,r)}queueLoad(e,t,i,r){const n={},o={},a={},l={};return e.forEach(c=>{let u=!0;t.forEach(d=>{const h=`${c}|${d}`;!i.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),n[h]===void 0&&(n[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(n).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(n),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const r=e.split("|"),n=r[0],o=r[1];t&&this.emit("failedLoading",n,o,t),!t&&i&&this.store.addResourceBundle(n,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{ad(l.loaded,[n],o),yd(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:r,wait:n,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,r+1,n*2,o)},n);return}o(c,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();H(e)&&(e=this.languageUtils.toResolveHierarchy(e)),H(t)&&(t=[t]);const n=this.queueLoad(e,t,i,r);if(!n.toLoad.length)return n.pending.length||r(),null;n.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],n=i[1];this.read(r,n,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${t}loading namespace ${n} for language ${r} failed`,o),!o&&a&&this.logger.log(`${t}loaded namespace ${n} for language ${r}`,a),this.loaded(e,o,a)})}saveMissing(e,t,i,r,n){var l,c,u,d,h;let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((c=(l=this.services)==null?void 0:l.utils)!=null&&c.hasLoadedNamespace&&!((d=(u=this.services)==null?void 0:u.utils)!=null&&d.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((h=this.backend)!=null&&h.create){const f={...o,isUpdate:n},g=this.backend.create.bind(this.backend);if(g.length<6)try{let p;g.length===5?p=g(e,t,i,r,f):p=g(e,t,i,r),p&&typeof p.then=="function"?p.then(m=>a(null,m)).catch(a):a(null,p)}catch(p){a(p)}else g(e,t,i,r,a,f)}!e||!e[0]||this.store.addResource(e[0],t,i,r)}}}const ml=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),H(s[1])&&(e.defaultValue=s[1]),H(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),_l=s=>{var e,t;return H(s.ns)&&(s.ns=[s.ns]),H(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),H(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),((t=(e=s.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s},ps=()=>{},wd=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class Hn extends ho{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=_l(e),this.services={},this.logger=ni,this.modules={external:[]},wd(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(H(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const r=ml();this.options={...r,...this.options,..._l(t)},this.options.interpolation={...r.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?ni.init(n(this.modules.logger),this.options):ni.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=bd;const d=new dl(this.options);this.store=new cl(this.options.resources,this.options);const h=this.services;h.logger=ni,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new md(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(h.formatter=n(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new _d(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new xd(n(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),m=1;m<g;m++)p[m-1]=arguments[m];e.emit(f,...p)}),this.modules.languageDetector&&(h.languageDetector=n(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=n(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Gs(this.services,this.options),this.translator.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),m=1;m<g;m++)p[m-1]=arguments[m];e.emit(f,...p)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=ps),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=dn(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(d,h)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?c():setTimeout(c,0),l}loadResources(e){var n,o;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ps;const r=H(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((r==null?void 0:r.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],l=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(d=>{d!=="cimode"&&a.indexOf(d)<0&&a.push(d)})};r?l(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(o=(n=this.options.preload)==null?void 0:n.forEach)==null||o.call(n,c=>l(c)),this.services.backendConnector.load(a,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(c)})}else i(null)}reloadResources(e,t,i){const r=dn();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ps),this.services.backendConnector.reload(e,t,n=>{r.resolve(),i(n)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&eu.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const r=dn();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(n(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},a=l=>{var u,d;!e&&!l&&this.services.languageDetector&&(l=[]);const c=H(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||n(c),this.translator.language||this.translator.changeLanguage(c),(d=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||d.call(u,c)),this.loadResources(c,h=>{o(h,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),r}getFixedT(e,t,i){var r=this;const n=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=r.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const h=r.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(g=>`${l.keyPrefix}${h}${g}`):f=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,r.t(f,l)};return H(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var r;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(r=this.translator)==null?void 0:r.translate(...t)}exists(){var r;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(r=this.translator)==null?void 0:r.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!r||o(n,e)))}loadNamespaces(e,t){const i=dn();return this.options.ns?(H(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),t&&t(r)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=dn();H(e)&&(e=[e]);const r=this.options.preload||[],n=e.filter(o=>r.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return n.length?(this.options.preload=r.concat(n),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}dir(e){var r,n;if(e||(e=this.resolvedLanguage||(((r=this.languages)==null?void 0:r.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new dl(ml());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Hn(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ps;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},n=new Hn(r);if((e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(a=>{n[a]=this[a]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i){const a=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},Object.keys(l[c]).reduce((u,d)=>(u[d]={...l[c][d]},u),{})),{});n.store=new cl(a,r),n.services.resourceStore=n.store}return n.translator=new Gs(n.services,r),n.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];n.emit(a,...c)}),n.init(r,t),n.translator.options=r,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const le=Hn.createInstance();le.createInstance=Hn.createInstance;le.createInstance;le.dir;le.init;le.loadResources;le.reloadResources;le.use;le.changeLanguage;le.getFixedT;le.t;le.exists;le.setDefaultNamespace;le.hasLoadedNamespace;le.loadNamespaces;le.loadLanguages;const{slice:Sd,forEach:$d}=[];function Cd(s){return $d.call(Sd.call(arguments,1),e=>{if(e)for(const t in e)s[t]===void 0&&(s[t]=e[t])}),s}function kd(s){return typeof s!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(s))}const vl=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Pd=function(s,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},r=encodeURIComponent(e);let n=`${s}=${r}`;if(i.maxAge>0){const o=i.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(o)}`}if(i.domain){if(!vl.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!vl.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(n+="; Partitioned"),n},bl={create(s,e,t,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+t*60*1e3)),i&&(r.domain=i),document.cookie=Pd(s,e,r)},read(s){const e=`${s}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let r=t[i];for(;r.charAt(0)===" ";)r=r.substring(1,r.length);if(r.indexOf(e)===0)return r.substring(e.length,r.length)}return null},remove(s,e){this.create(s,"",-1,e)}};var Td={name:"cookie",lookup(s){let{lookupCookie:e}=s;if(e&&typeof document<"u")return bl.read(e)||void 0},cacheUserLanguage(s,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:r,cookieOptions:n}=e;t&&typeof document<"u"&&bl.create(t,s,i,r,n)}},Od={name:"querystring",lookup(s){var i;let{lookupQuerystring:e}=s,t;if(typeof window<"u"){let{search:r}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));const o=r.substring(1).split("&");for(let a=0;a<o.length;a++){const l=o[a].indexOf("=");l>0&&o[a].substring(0,l)===e&&(t=o[a].substring(l+1))}}return t}},Ed={name:"hash",lookup(s){var r;let{lookupHash:e,lookupFromHashIndex:t}=s,i;if(typeof window<"u"){const{hash:n}=window.location;if(n&&n.length>2){const o=n.substring(1);if(e){const a=o.split("&");for(let l=0;l<a.length;l++){const c=a[l].indexOf("=");c>0&&a[l].substring(0,c)===e&&(i=a[l].substring(c+1))}}if(i)return i;if(!i&&t>-1){const a=n.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?(r=a[typeof t=="number"?t:0])==null?void 0:r.replace("/",""):void 0}}}return i}};let Er=null;const yl=()=>{if(Er!==null)return Er;try{if(Er=typeof window<"u"&&window.localStorage!==null,!Er)return!1;const s="i18next.translate.boo";window.localStorage.setItem(s,"foo"),window.localStorage.removeItem(s)}catch{Er=!1}return Er};var Ad={name:"localStorage",lookup(s){let{lookupLocalStorage:e}=s;if(e&&yl())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupLocalStorage:t}=e;t&&yl()&&window.localStorage.setItem(t,s)}};let Ar=null;const xl=()=>{if(Ar!==null)return Ar;try{if(Ar=typeof window<"u"&&window.sessionStorage!==null,!Ar)return!1;const s="i18next.translate.boo";window.sessionStorage.setItem(s,"foo"),window.sessionStorage.removeItem(s)}catch{Ar=!1}return Ar};var zd={name:"sessionStorage",lookup(s){let{lookupSessionStorage:e}=s;if(e&&xl())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupSessionStorage:t}=e;t&&xl()&&window.sessionStorage.setItem(t,s)}},Md={name:"navigator",lookup(s){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:r}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),r&&e.push(r)}return e.length>0?e:void 0}},Dd={name:"htmlTag",lookup(s){let{htmlTag:e}=s,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},Rd={name:"path",lookup(s){var r;let{lookupFromPathIndex:e}=s;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(r=t[typeof e=="number"?e:0])==null?void 0:r.replace("/",""):void 0}},Ld={name:"subdomain",lookup(s){var r,n;let{lookupFromSubdomainIndex:e}=s;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(r=window.location)==null?void 0:r.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let tu=!1;try{document.cookie,tu=!0}catch{}const iu=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];tu||iu.splice(1,1);const Id=()=>({order:iu,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:s=>s});class ru{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Cd(t,this.options||{},Id()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=r=>r.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Td),this.addDetector(Od),this.addDetector(Ad),this.addDetector(zd),this.addDetector(Md),this.addDetector(Dd),this.addDetector(Rd),this.addDetector(Ld),this.addDetector(Ed)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let r=this.detectors[i].lookup(this.options);r&&typeof r=="string"&&(r=[r]),r&&(t=t.concat(r))}}),t=t.filter(i=>i!=null&&!kd(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}ru.type="languageDetector";const jd={about:"About",connect:"Connect",journey:"Journey",praxis:"Approach",languages:{en:"EN",pt:"PT"}},Nd={title:"About me",p1:"Enthusiast of decentralized technologies and other geeky stuff, I'm driven by the balance between people's needs and business goals. Also deeply interested in AI, as a tool to simplify workflows, improve decision-making, and explore new creative possibilities.",p2:"Devoted to quality, I commit to continuous learning and professional development, staying abreast of emerging design trends tech advancements and best practices to deliver cutting-edge solutions.",education:"Education",courses:"Courses",iaBusiness:"AI in Digital Business",link:"See credential"},Fd={name:"Paulo Melo Jr.",status:"Available for hiring",picDescription:"An image of Paul M., a bearded man with short, dark hair. He is looking to the right with a thoughtful expression. He is wearing a plain t-shirt.",title:"Software designer",subtitle:"Crafting future-ready digital interactions",cta:{label:"Check out my latest work",label_alt1:"See last project",label_alt2:"Explore the last project",label_alt3:"Discover recent project",label_alt4:"View last case study",label_alt5:"See recent project",url:"/last-project"}},Ud={t1:"Design in thinking",p1:"From insight to interface, I design with people in mind. Merging aesthetics, purpose, and cutting-edge tech through Design Thinking and Human-Centered Design.",t2:"Technology to deliver",p2:"Learning from tech experts early on made algorithms a core part of my toolkit, bridging design and engineering to craft seamless, refined digital experiences."},Hd={1:"Strategy",2:"Create",3:"Deliver",4:"Repeat"},Vd={t0:"Journey",t1:"Design <br class='block md:hidden'> intern",p1:"During my internship, I had the opportunity to refine and develop skills across various functions. HTML and CSS development, marketing initiatives, visual design, branding, and UX/UI design.",t2:"Designer, <br class='block md:hidden'> front-end coder",p2:"In multifaceted collaboration with managers and the development team, we successfully redesigned the interfaces and features of company's software.",m2:"Also played a key role in co-creating a platform that facilitates connecting individuals facing legal issues with specialized professionals.",t3:"Visual and <br class='block md:hidden'> product designer",p3:"Early 2018, I held the role of a generalist designer, tasked with developing and managing all aspects of design and creative outputs for their product project.",m3:"Second half of the year, I collaborated with another company to design an open-source library of interface components.",t4:"Lead designer, <br class='block md:hidden'> UI engineer",p4:"Today responsible for redesigning the company's advanced lead management platform, using React components to improve performance and scalability."},Bd={title:"Recent project",description:"A robust software for lead management, optimization, and distribution.",cta:"See details",project:"twyne.io"},qd={title:"Reach out"},Wd={title:"Featured works",button:"Featured works"},Yd={menu:{about:"About",goal:"Challenge",proposal:"Proposition",impact:"Outcomes",mobile:"Mobile",final:"Final"},t1:"Case study / 01",t2:"Twyne",about:{t1:"about",p1:"Developed by Ifficient, <span class='text-zinc-50'>Twyne is a robust software for lead management, optimization, and distribution, focused on monetization and real-time analytics.</span>",p2:"Targeted at the B2B market, it serves a few clients in volume, but with high ticket value and demanding customization.",details:{company:"Company",companyValue:"Ifficient",industry:"Industry",industryValue:"AdTech",product:"Product",productValue:"Software as a Service",contributions:"Contributions",contribution1:"Product Design",contribution2:"Design System",contribution3:"UI Engineering"}},goal:{t1:"Challenge",p1:"Tackling one of the biggest challenges in digital design: creating a <span class='text-zinc-50'>modular</span>, <span class='text-zinc-50'>scalable</span>, and <span class='text-zinc-50'>adaptable</span> interface for highly complex software, with constant growth in features and requirements.",p2:"The visual approach needed to balance performance, readability, and continuous evolution, without requiring a restart for every new feature. Delivering clarity and control even in dense flows."},proposal:{t1:"Proposition",l1:["A robust, strategic, and flexible UI kit.","Simplified UI that puts information up front.","Built to last, scale, and ease development."],p1:"Each component carries decisions guided by performance, readability, and functional clarity, with special attention to business logic and the journey of corporate users."},impact:{t1:"Outcomes",l1:["Reduced rework for the engineering team.","Faster onboarding for new users.","Supports new modules with minimal friction.","Strengthened identity with a modern UI."]},numbers:{t1:"+ 400.000",p1:"Registrations acquired per day",t2:"+ 2 million",p2:"User clicks on campaigns",t3:"+ 7 million",p3:"Leads negotiated daily"},mobile:{t1:"Built on solid principles. Ready for any platform."},conclusion:{t1:"Final thoughts",p1:"The modularity of the component library enables smart reuse, reducing complexity and increasing development speed.",p2:"Decisions on layout, typography, contrast, and spacing were calibrated to support dense data environments without compromising readability.",p3:"The result is an interface that adapts to the usage context without losing visual coherence or functional integrity."}},Xd={title:"Allugator",tags:"Design Partner, Start-up",year:"2018",description:"Acting as a generalist designer, I contributed key deliverables for the startup's growth in its early stage, from rebranding and brand communication to digital product evolution.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investors in 2018"},users:{title:"+ 7000 new users",subtitle:"+ 100% compared to 2017"},daily:{title:"+ 1000 daily in 2018",subtitle:"+ 100% compared to 2017"}}},Gd={title:"Damus",tags:"Experiment, Rebranding",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Damus official website'>Damus</a> is a client for the decentralized social network Nostr, available for iOS, iPad, and macOS. It allows users to post text, images, videos, and GIFs, as well as interact with other users through the sending of <a href='https://en.wikipedia.org/wiki/Satoshi' class='underline text-zinc-100' target='_blank' title='Satoshi is the smallest unit of the system, representing 0.00000001 bitcoin, a hundredth of a millionth of a bitcoin.'>satoshis</a> and encrypted private messages.",description2:"The goal of Damus is to offer an alternative to traditional social networks, focusing on freedom of expression and privacy."},Kd={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Interactive marketing company specialized in lead generation, based in Denver, CO.",description2:"There I led the design of Twyne and Path Evolution software, ensuring scalability and consistency in product evolution.",cta:"See details",fullView:"Full view"},Jd={title:"Multiplayer Orchestra",tags:"Volunteer, Visual Design",year:"2017",description1:"Created by former students of UFMG's School of Music, Multiplayer explored soundtracks from series, movies, and games in their repertoire, connecting classical music to pop culture.",description2:"I was invited to join the project as a designer, taking care of visual communication and providing support in event production.",metrics:{audience:{title:"1.6k people in 2 concerts",subtitle:"@ Cine Theatro Brasil"},facebook:{title:"4.7k followers",subtitle:"Facebook"},youtube:{title:"2.1k subscribers",subtitle:"YouTube"}}},Zd={404:{title:"404 · Page not found"},common:{description:"Enthusiast of decentralized technologies, Paul is a designer and coder from Brazil. Here you can find links to stay in touch with him.",keywords:"Paul M, Paulo Melo Jr, pmjr, digital product designer, product designer, interface designer, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animations, motion design, branding, portfolio, Brazil, São Paulo, decentralized technologies, bitcoin, nostr"},home:{title:"Paulo Melo Jr. · Designer and coder"},projects:{title:"Featured projects · Paulo Melo Jr.",keywords:"archive, projects, case studies"},lastProject:{title:"Twyne · Paulo Melo Jr.",keywords:"twyne, case study, product design, ui/ux, onboarding, mobile, web, adtech, interactive marketing, lead generation"}},Qd={home:{label:"Home",url:"/"},projects:{label:"Featured works",url:"/projects"},lastProject:{label:"Last project",url:"/last-project"},instagram:{label:"Instagram",url:"https://instagram.com/paulomelojunior"},github:{label:"GitHub",url:"https://github.com/paulomelojunior"},linkedin:{label:"LinkedIn",url:"https://linkedin.com/in/paulomelojunior/"},email:{label:"Email",url:"mailto:hello@pmjr.cc"}},ef={menu:jd,about:Nd,hero:Fd,praxis:Ud,method:Hd,journey:Vd,cases:Bd,connect:qd,featured:Wd,twyne:Yd,allugator:Xd,damus:Gd,ifficient:Kd,multiplayer:Jd,seo:Zd,links:Qd},tf={about:"Sobre",journey:"Jornada",praxis:"Abordagem",connect:"Contato",languages:{en:"EN",pt:"PT"}},rf={title:"Sobre mim",p1:"Entusiasta de tecnologias descentralizadas e outros assuntos geek, sou movido pelo equilíbrio entre as necessidades das pessoas e os objetivos de negócios. Também tenho profundo interesse em IA, como uma ferramenta para simplificar fluxos de trabalho, melhorar a tomada de decisões e explorar novas possibilidades criativas.",p2:"Comprometido com a qualidade, busco constantemente o aprendizado e o desenvolvimento profissional, mantendo-me atualizado sobre tendências emergentes de design, avanços tecnológicos e melhores práticas para oferecer soluções inovadoras.",education:"Educação",courses:"Cursos",iaBusiness:"IA em Negócios Digitais",link:"Ver credencial"},nf={name:"Paulo Melo Júnior",status:"Disponível para contrato",picDescription:"Uma foto de Paulo, um homem barbado com cabelos curtos e escuros. Ele está olhando para a direita com uma expressão pensativa. Ele usa uma camisa simples.",title:"Software designer",subtitle:"Interações digitais prontas para o futuro",cta:{label:"Ver trabalho mais recente",url:"/last-project"}},sf={t1:"Design no pensar",p1:"Do insight à interface, projeto com foco nas pessoas. Unindo estética, propósito e tecnologia de ponta por meio do Design Thinking e Human-Centered Design.",t2:"Tecnologia para realizar",p2:"Aprender com experts em tecnologia desde cedo tornou algoritmos parte do meu repertório, conecto design e engenharia para criar experiências refinadas."},of={1:"Strategy",2:"Create",3:"Deliver",4:"Repeat"},af={t0:"Jornada",t1:"Estagiário de <br class='block md:hidden'> design",p1:"Durante meu estágio, aprofundei e refinei habilidades em desenvolvimento front-end, participei de iniciativas de marketing, e atuei em design visual, branding e UX/UI.",m1:"",t2:"Designer, <br class='block md:hidden'> front-end coder",p2:"Em colaboração multifacetada com gerentes e a equipe de desenvolvimento, redesenhamos com sucesso as interfaces e funcionalidades do software da empresa.",m2:"Também desempenhei um papel fundamental na co-criação de uma plataforma que facilita a conexão de pessoas enfrentando questões legais com profissionais especializados.",t3:"Designer de produto",p3:"No início de 2018, exerci o papel de designer generalista, responsável por desenvolver e gerenciar todos os aspectos do design e saídas criativas para o projeto de produto.",m3:"Na segunda metade do ano, colaborei com outra empresa para projetar uma biblioteca open-source de componentes de interface.",t4:"Lead designer, <br class='block md:hidden'> UI engineer",p4:"Hoje responsável por redesenhar a plataforma avançada de gerenciamento de leads da empresa, usando componentes React para melhorar performance e escalabilidade."},lf={title:"Projeto mais recente",description:"Um software robusto para gestão, otimização e distribuição de leads.",cta:"Ver detalhes",project:"twyne.io"},cf={title:"Entre em contato"},uf={title:"Projetos <br> em destaque",button:"Projetos destaque"},hf={menu:{about:"Sobre",goal:"Desafio",proposal:"Proposta",impact:"Resultados",mobile:"Mobile",final:"Final"},t1:"Estudo de caso / 01",t2:"Twyne",about:{t1:"O que é",p1:"Desenvolvida pela Ifficient, <span class='text-zinc-100'>o Twyne é um software robusto de gestão, otimização e distribuição de leads, com foco em monetização e análise em tempo real.</span>",p2:"Voltada para o mercado B2B, atende poucos clientes em volume, mas com alto ticket médio e exigências elevadas de personalização.",details:{company:"Empresa",companyValue:"Ifficient",industry:"Mercado",industryValue:"AdTech",product:"Produto",productValue:"Software as a Service",contributions:"Contribuições",contribution1:"Product Design",contribution2:"Design System",contribution3:"UI Engineering"}},projectInfo:{company:"Empresa",companyValue:"Ifficient",industry:"Setor",industryValue:"AdTech",product:"Produto",productValue:"Software as a Service",contributions:"Contribuições",contribution1:"Design de Produto",contribution2:"Design System",contribution3:"UI Engineering"},goal:{t1:"Desafio",p1:"Resolver um dos grandes desafios do design digital: criar uma <span class='text-zinc-100'>interface modular</span>, <span class='text-zinc-100'>escalável</span> e <span class='text-zinc-100'>adaptável</span> para um software de alta complexidade técnica, com crescimento constante de features e demandas.",p2:"A proposta visual precisava equilibrar performance, legibilidade e evolução contínua, sem exigir recomeços a cada nova funcionalidade. Oferecendo clareza e controle mesmo em fluxos densos."},proposal:{t1:"Proposta",l1:["Biblioteca de componentes robusta, estratégica e flexível.","UI simplificada e informações em primeiro plano.","Pensado para durar, escalar e facilitar o desenvolvimento."],p1:"Cada componente carrega decisões orientadas por performance, legibilidade e clareza funcional, com atenção especial à jornada dos usuários corporativos."},impact:{t1:"Resultados",l1:["Redução de retrabalho no time de engenharia.","Aumento na velocidade de onboarding de novos usuários.","Base que suportou a adição de novos módulos sem atrito.","Fortalecimento da identidade com uma UI moderna."]},numbers:{t1:"+ 400 mil",p1:"Registros adiquiridos por dia",t2:"+ 2 milhões",p2:"Clicks de usuários em campanhas",t3:"+ 7 milhões",p3:"Leads negociados diariamente"},mobile:{t1:"Construído com solidez. Pronto para qualquer plataforma."},conclusion:{t1:"Considerações finais",p1:"A modularidade do UI kit permite reuso inteligente, reduzindo complexidade e aumentando a velocidade de desenvolvimento.",p2:"As decisões de layout, tipografia, contraste e espaçamento foram calibradas para sustentar ambientes densos de dados sem comprometer a legibilidade.",p3:"O resultado é uma interface que se adapta ao contexto de uso sem perder coerência visual nem integridade funcional."}},df={title:"Allugator",tags:"Design Partner, Start-up",year:"2018",description:"Atuando como designer generalista, contribuí com entregas-chave para o crescimento da startup em seu estágio inicial, da reformulação da identidade e comunicação da marca à evolução do produto digital.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investidores em 2018"},users:{title:"+ 7000 usuários novos",subtitle:"+ 100% em relação a 2017"},daily:{title:"+ 1000 diárias em 2018",subtitle:"+ 100% em relação a 2017"}}},ff={title:"Damus",tags:"Experimento, Rebranding",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Site oficial do Damus'>Damus</a> é um cliente para a rede social descentralizada Nostr, disponível para iOS, iPad e macOS. Ele permite aos usuários postar textos, imagens, vídeos e GIFs, além de interagir com outros usuários através de envio de <a href='https://pt.wikipedia.org/wiki/Bitcoin' class='underline text-zinc-100' target='_blank' title='Satoshi, é a menor quantidade do sistema, representando 0,00000001 bitcoin, um centésimo de milionésimo de bitcoin.'>satoshis</a> e mensagens privadas criptografadas.",description2:"O objetivo do Damus é oferecer uma alternativa às redes sociais tradicionais, com foco na liberdade de expressão e privacidade."},pf={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Companhia de marketing interativo especializada em geração de leads, com base em Denver, CO.",description2:"Nela liderei o design dos softwares Twyne e Path Evolution, assegurando escalabilidade e consistência na evolução dos produtos.",cta:"Ver detalhes",fullView:"Ver tudo"},gf={title:"Orquestra Multiplayer",tags:"Voluntário, Visual Design",year:"2017",description1:"Criada por ex-alunos da Escola de Música da UFMG, a Multiplayer explorava trilhas sonoras de séries, filmes e jogos em seu repertório, ligando música erudita à cultura pop.",description2:"Fui convidado a integrar o projeto como designer, cuidando da comunicação visual e prestando suporte na produção dos eventos.",metrics:{audience:{title:"1600 pessoas em 2 concertos",subtitle:"@ Cine Theatro Brasil"},facebook:{title:"4,7 mil seguidores",subtitle:"Facebook"},youtube:{title:"2,1 mil inscritos",subtitle:"YouTube"}}},mf={404:{title:"404 · Página não encontrada"},common:{description:"Entusiasta de tecnologias descentralizadas, Paulo é designer e coder do Brasil. Aqui você encontra links para se conectar com ele.",keywords:"Paulo Melo Júnior, Paulo Melo Jr, Paul M, pmjr, designer de produto digital, product designer, designer de interface, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animações, motion design, branding, portfólio, Brasil, São Paulo, tecnologias descentralizadas, bitcoin, nostr"},home:{title:"Paulo Melo Jr. · Designer and coder"},projects:{title:"Projetos em destaque · Paulo Melo Jr.",keywords:"arquivo, projetos, cases"},lastProject:{title:"Twyne · Paulo Melo Jr.",keywords:"twyne, estudo de caso, design de produto, ui/ux, onboarding, mobile, web, adtech, marketing interativo, geração de leads"}},_f={home:{label:"Home",url:"/"},projects:{label:"Projetos",url:"/projects"},lastProject:{label:"Último projeto",url:"/last-project"},github:{label:"GitHub",url:"https://github.com/paulomelojunior"},linkedin:{label:"LinkedIn",url:"https://linkedin.com/in/paulomelojunior/"},email:{label:"Email",url:"mailto:hello@pmjr.cc"}},vf={menu:tf,about:rf,hero:nf,praxis:sf,method:of,journey:af,cases:lf,connect:cf,featured:uf,twyne:hf,allugator:df,damus:ff,ifficient:pf,multiplayer:gf,seo:mf,links:_f};le.use(ru).init({lng:"en",fallbackLng:"en",nonExplicitSupportedLngs:!0,detection:{order:["localStorage","navigator","htmlTag"],caches:["localStorage"],lookupLocalStorage:"i18nextLng"},interpolation:{escapeValue:!1},resources:{en:{translation:ef},pt:{translation:vf}}});le.on("languageChanged",s=>{const e=s.split("-")[0];document.documentElement.lang=e,localStorage.setItem("i18nextLng",e)});le.on("initialized",()=>{const s=localStorage.getItem("i18nextLng");if(s&&s.includes("-")){const e=s.split("-")[0];localStorage.setItem("i18nextLng",e),le.changeLanguage(e)}});function mi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function nu(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Lt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yr={duration:.5,overwrite:!1,delay:0},Pa,Qe,ve,Vt=1e8,fe=1/Vt,Wo=Math.PI*2,bf=Wo/4,yf=0,su=Math.sqrt,xf=Math.cos,wf=Math.sin,Xe=function(e){return typeof e=="string"},Te=function(e){return typeof e=="function"},wi=function(e){return typeof e=="number"},Ta=function(e){return typeof e>"u"},ci=function(e){return typeof e=="object"},yt=function(e){return e!==!1},Oa=function(){return typeof window<"u"},gs=function(e){return Te(e)||Xe(e)},ou=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},at=Array.isArray,Sf=/random\([^)]+\)/g,$f=/,\s*/g,wl=/(?:-?\.?\d|\.)+/gi,au=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$o=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lu=/[+-]=-?[.\d]+/,Cf=/[^,'"\[\]\s]+/gi,kf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xe,ti,Yo,Ea,It={},Ks={},cu,uu=function(e){return(Ks=Xr(e,It))&&$t},Aa=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vn=function(e,t){return!t&&console.warn(e)},hu=function(e,t){return e&&(It[e]=t)&&Ks&&(Ks[e]=t)||It},Bn=function(){return 0},Pf={suppressEvents:!0,isStart:!0,kill:!1},Ds={suppressEvents:!0,kill:!1},Tf={suppressEvents:!0},za={},ji=[],Xo={},du,Et={},Co={},Sl=30,Rs=[],Ma="",Da=function(e){var t=e[0],i,r;if(ci(t)||Te(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Rs.length;r--&&!Rs[r].targetTest(t););i=Rs[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Lu(e[r],i)))||e.splice(r,1);return e},lr=function(e){return e._gsap||Da(Bt(e))[0]._gsap},fu=function(e,t,i){return(i=e[t])&&Te(i)?e[t]():Ta(i)&&e.getAttribute&&e.getAttribute(t)||i},xt=function(e,t){return(e=e.split(",")).forEach(t)||e},Me=function(e){return Math.round(e*1e5)/1e5||0},ye=function(e){return Math.round(e*1e7)/1e7||0},Ur=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Of=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Js=function(){var e=ji.length,t=ji.slice(0),i,r;for(Xo={},ji.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ra=function(e){return!!(e._initted||e._startAt||e.add)},pu=function(e,t,i,r){ji.length&&!Qe&&Js(),e.render(t,i,!!(Qe&&t<0&&Ra(e))),ji.length&&!Qe&&Js()},gu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Cf).length<2?t:Xe(e)?e.trim():e},mu=function(e){return e},jt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ef=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Xr=function(e,t){for(var i in t)e[i]=t[i];return e},$l=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ci(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},Zs=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},kn=function(e){var t=e.parent||xe,i=e.keyframes?Ef(at(e.keyframes)):jt;if(yt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Af=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},_u=function(e,t,i,r,n){var o=e[r],a;if(n)for(a=t[n];o&&o[n]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},fo=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=t._prev,o=t._next;n?n._next=o:e[i]===t&&(e[i]=o),o?o._prev=n:e[r]===t&&(e[r]=n),t._next=t._prev=t.parent=null},Hi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},zf=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Go=function(e,t,i,r){return e._startAt&&(Qe?e._startAt.revert(Ds):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Mf=function s(e){return!e||e._ts&&s(e.parent)},Cl=function(e){return e._repeat?Gr(e._tTime,e=e.duration()+e._rDelay)*e:0},Gr=function(e,t){var i=Math.floor(e=ye(e/t));return e&&i===e?i-1:i},Qs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},po=function(e){return e._end=ye(e._start+(e._tDur/Math.abs(e._ts||e._rts||fe)||0))},go=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ye(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),po(e),i._dirty||cr(i,e)),e},vu=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qs(e.rawTime(),t),(!t._dur||os(0,t.totalDuration(),i)-t._tTime>fe)&&t.render(i,!0)),cr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-fe}},ri=function(e,t,i,r){return t.parent&&Hi(t),t._start=ye((wi(i)?i:i||e!==xe?Ft(e,i,t):e._time)+t._delay),t._end=ye(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_u(e,t,"_first","_last",e._sort?"_start":0),Ko(t)||(e._recent=t),r||vu(e,t),e._ts<0&&go(e,e._tTime),e},bu=function(e,t){return(It.ScrollTrigger||Aa("scrollTrigger",t))&&It.ScrollTrigger.create(t,e)},yu=function(e,t,i,r,n){if(Ia(e,t,n),!e._initted)return 1;if(!i&&e._pt&&!Qe&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&du!==zt.frame)return ji.push(e),e._lazy=[n,r],1},Df=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Ko=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Rf=function(e,t,i,r){var n=e.ratio,o=t<0||!t&&(!e._start&&Df(e)&&!(!e._initted&&Ko(e))||(e._ts<0||e._dp._ts<0)&&!Ko(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=os(0,e._tDur,t),u=Gr(l,a),e._yoyo&&u&1&&(o=1-o),u!==Gr(e._tTime,a)&&(n=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==n||Qe||r||e._zTime===fe||!t&&e._zTime){if(!e._initted&&yu(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?fe:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Go(e,t,i,!0),e._onUpdate&&!i&&Dt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Dt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hi(e,1),!i&&!Qe&&(Dt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Lf=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Kr=function(e,t,i,r){var n=e._repeat,o=ye(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=n?n<0?1e10:ye(o*(n+1)+e._rDelay*n):o,a>0&&!r&&go(e,e._tTime=e._tDur*a),e.parent&&po(e),i||cr(e.parent,e),e},kl=function(e){return e instanceof gt?cr(e):Kr(e,e._dur)},If={_start:0,endTime:Bn,totalDuration:Bn},Ft=function s(e,t,i){var r=e.labels,n=e._recent||If,o=e.duration()>=Vt?n.endTime(!1):e._dur,a,l,c;return Xe(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?n:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(at(i)?i[0]:i).totalDuration()),a>1?s(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Pn=function(e,t,i){var r=wi(t[1]),n=(r?2:1)+(e<2?0:1),o=t[n],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yt(l.vars.inherit)&&l.parent;o.immediateRender=yt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[n-1]}return new je(t[0],o,t[n+1])},Wi=function(e,t){return e||e===0?t(e):t},os=function(e,t,i){return i<e?e:i>t?t:i},st=function(e,t){return!Xe(e)||!(t=kf.exec(e))?"":t[1]},jf=function(e,t,i){return Wi(i,function(r){return os(e,t,r)})},Jo=[].slice,xu=function(e,t){return e&&ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ci(e[0]))&&!e.nodeType&&e!==ti},Nf=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var n;return Xe(r)&&!t||xu(r,1)?(n=i).push.apply(n,Bt(r)):i.push(r)})||i},Bt=function(e,t,i){return ve&&!t&&ve.selector?ve.selector(e):Xe(e)&&!i&&(Yo||!Jr())?Jo.call((t||Ea).querySelectorAll(e),0):at(e)?Nf(e,i):xu(e)?Jo.call(e,0):e?[e]:[]},Zo=function(e){return e=Bt(e)[0]||Vn("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bt(t,i.querySelectorAll?i:i===e?Vn("Invalid scope")||Ea.createElement("div"):e)}},wu=function(e){return e.sort(function(){return .5-Math.random()})},Su=function(e){if(Te(e))return e;var t=ci(e)?e:{each:e},i=ur(t.ease),r=t.from||0,n=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return Xe(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(h,f,g){var p=(g||t).length,m=o[p],_,v,x,y,S,C,w,P,k;if(!m){if(k=t.grid==="auto"?0:(t.grid||[1,Vt])[1],!k){for(w=-Vt;w<(w=g[k++].getBoundingClientRect().left)&&k<p;);k<p&&k--}for(m=o[p]=[],_=l?Math.min(k,p)*u-.5:r%k,v=k===Vt?0:l?p*d/k-.5:r/k|0,w=0,P=Vt,C=0;C<p;C++)x=C%k-_,y=v-(C/k|0),m[C]=S=c?Math.abs(c==="y"?y:x):su(x*x+y*y),S>w&&(w=S),S<P&&(P=S);r==="random"&&wu(m),m.max=w-P,m.min=P,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(k>p?p-1:c?c==="y"?p/k:k:Math.max(k,p/k))||0)*(r==="edges"?-1:1),m.b=p<0?n-p:n,m.u=st(t.amount||t.each)||0,i=i&&p<0?Mu(i):i}return p=(m[h]-m.min)/m.max||0,ye(m.b+(i?i(p):p)*m.v)+m.u}},Qo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ye(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(wi(i)?0:st(i))}},$u=function(e,t){var i=at(e),r,n;return!i&&ci(e)&&(r=i=e.radius||Vt,e.values?(e=Bt(e.values),(n=!wi(e[0]))&&(r*=r)):e=Qo(e.increment)),Wi(t,i?Te(e)?function(o){return n=e(o),Math.abs(n-o)<=r?n:o}:function(o){for(var a=parseFloat(n?o.x:o),l=parseFloat(n?o.y:0),c=Vt,u=0,d=e.length,h,f;d--;)n?(h=e[d].x-a,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-a),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:o,n||u===o||wi(o)?u:u+st(o)}:Qo(e))},Cu=function(e,t,i,r){return Wi(at(e)?!t:i===!0?!!(i=0):!r,function(){return at(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Ff=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(n,o){return o(n)},r)}},Uf=function(e,t){return function(i){return e(parseFloat(i))+(t||st(i))}},Hf=function(e,t,i){return Pu(e,t,0,1,i)},ku=function(e,t,i){return Wi(i,function(r){return e[~~t(r)]})},Vf=function s(e,t,i){var r=t-e;return at(e)?ku(e,s(0,e.length),t):Wi(i,function(n){return(r+(n-e)%r)%r+e})},Bf=function s(e,t,i){var r=t-e,n=r*2;return at(e)?ku(e,s(0,e.length-1),t):Wi(i,function(o){return o=(n+(o-e)%n)%n||0,e+(o>r?n-o:o)})},qn=function(e){return e.replace(Sf,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split($f);return Cu(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Pu=function(e,t,i,r,n){var o=t-e,a=r-i;return Wi(n,function(l){return i+((l-e)/o*a||0)})},qf=function s(e,t,i,r){var n=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!n){var o=Xe(e),a={},l,c,u,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(at(e)&&!at(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,n=function(g){g*=d;var p=Math.min(h,~~g);return u[p](g-p)},i=t}else r||(e=Xr(at(e)?[]:{},e));if(!u){for(l in t)La.call(a,e,l,"get",t[l]);n=function(g){return Fa(g,a)||(o?e.p:e)}}}return Wi(i,n)},Pl=function(e,t,i){var r=e.labels,n=Vt,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&n>(a=Math.abs(a))&&(l=o,n=a);return l},Dt=function(e,t,i){var r=e.vars,n=r[t],o=ve,a=e._ctx,l,c,u;if(n)return l=r[t+"Params"],c=r.callbackScope||e,i&&ji.length&&Js(),a&&(ve=a),u=l?n.apply(c,l):n.call(c),ve=o,u},vn=function(e){return Hi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qe),e.progress()<1&&Dt(e,"onInterrupt"),e},Nr,Tu=[],Ou=function(e){if(e)if(e=!e.name&&e.default||e,Oa()||e.headless){var t=e.name,i=Te(e),r=t&&!i&&e.init?function(){this._props=[]}:e,n={init:Bn,render:Fa,add:La,kill:ap,modifier:op,rawVars:0},o={targetTest:0,get:0,getSetter:Na,aliases:{},register:0};if(Jr(),e!==r){if(Et[t])return;jt(r,jt(Zs(e,n),o)),Xr(r.prototype,Xr(n,Zs(e,o))),Et[r.prop=t]=r,e.targetTest&&(Rs.push(r),za[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hu(t,r),e.register&&e.register($t,r,wt)}else Tu.push(e)},de=255,bn={aqua:[0,de,de],lime:[0,de,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,de],navy:[0,0,128],white:[de,de,de],olive:[128,128,0],yellow:[de,de,0],orange:[de,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[de,0,0],pink:[de,192,203],cyan:[0,de,de],transparent:[de,de,de,0]},ko=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*de+.5|0},Eu=function(e,t,i){var r=e?wi(e)?[e>>16,e>>8&de,e&de]:0:bn.black,n,o,a,l,c,u,d,h,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),bn[e])r=bn[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+n+n+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&de,r&de,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&de,e&de]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(wl),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,n=u*2-o,r.length>3&&(r[3]*=1),r[0]=ko(l+1/3,n,o),r[1]=ko(l,n,o),r[2]=ko(l-1/3,n,o);else if(~e.indexOf("="))return r=e.match(au),i&&r.length<4&&(r[3]=1),r}else r=e.match(wl)||bn.transparent;r=r.map(Number)}return t&&!g&&(n=r[0]/de,o=r[1]/de,a=r[2]/de,d=Math.max(n,o,a),h=Math.min(n,o,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===n?(o-a)/f+(o<a?6:0):d===o?(a-n)/f+2:(n-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Au=function(e){var t=[],i=[],r=-1;return e.split(Ni).forEach(function(n){var o=n.match(jr)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Tl=function(e,t,i){var r="",n=(e+r).match(Ni),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!n)return e;if(n=n.map(function(h){return(h=Eu(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Au(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ni,"1").split(jr),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?n.shift()||o+"0,0,0,0)":(u.length?u:n.length?n:i).shift());if(!c)for(c=e.split(Ni),d=c.length-1;a<d;a++)r+=c[a]+n[a];return r+c[d]},Ni=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in bn)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),Wf=/hsl[a]?\(/,zu=function(e){var t=e.join(" "),i;if(Ni.lastIndex=0,Ni.test(t))return i=Wf.test(t),e[1]=Tl(e[1],i),e[0]=Tl(e[0],i,Au(e[1])),!0},Wn,zt=(function(){var s=Date.now,e=500,t=33,i=s(),r=i,n=1e3/240,o=n,a=[],l,c,u,d,h,f,g=function p(m){var _=s()-r,v=m===!0,x,y,S,C;if((_>e||_<0)&&(i+=_-t),r+=_,S=r-i,x=S-o,(x>0||v)&&(C=++d.frame,h=S-d.time*1e3,d.time=S=S/1e3,o+=x+(x>=n?4:n-x),y=1),v||(l=c(p)),y)for(f=0;f<a.length;f++)a[f](S,h,C,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){cu&&(!Yo&&Oa()&&(ti=Yo=window,Ea=ti.document||{},It.gsap=$t,(ti.gsapVersions||(ti.gsapVersions=[])).push($t.version),uu(Ks||ti.GreenSockGlobals||!ti.gsap&&ti||{}),Tu.forEach(Ou)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Wn=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Wn=0,c=Bn},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){n=1e3/(m||240),o=d.time*1e3+n},add:function(m,_,v){var x=_?function(y,S,C,w){m(y,S,C,w),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),Jr(),x},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},d})(),Jr=function(){return!Wn&&zt.wake()},ne={},Yf=/^[\d.\-M][\d.\-,\s]/,Xf=/["']/g,Gf=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],n=1,o=i.length,a,l,c;n<o;n++)l=i[n],a=n!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Xf,"").trim():+c,r=l.substr(a+1).trim();return t},Kf=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Jf=function(e){var t=(e+"").split("("),i=ne[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Gf(t[1])]:Kf(e).split(",").map(gu)):ne._CE&&Yf.test(e)?ne._CE("",e):i},Mu=function(e){return function(t){return 1-e(1-t)}},Du=function s(e,t){for(var i=e._first,r;i;)i instanceof gt?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ur=function(e,t){return e&&(Te(e)?e:ne[e]||Jf(e))||t},$r=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var n={easeIn:t,easeOut:i,easeInOut:r},o;return xt(e,function(a){ne[a]=It[a]=n,ne[o=a.toLowerCase()]=i;for(var l in n)ne[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ne[a+"."+l]=n[l]}),n},Ru=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Po=function s(e,t,i){var r=t>=1?t:1,n=(i||(e?.3:.45))/(t<1?t:1),o=n/Wo*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*wf((u-o)*n)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ru(a);return n=Wo/n,l.config=function(c,u){return s(e,c,u)},l},To=function s(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(n){return 1-i(1-n)}:Ru(i);return r.config=function(n){return s(e,n)},r};xt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;$r(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ne.Linear.easeNone=ne.none=ne.Linear.easeIn;$r("Elastic",Po("in"),Po("out"),Po());(function(s,e){var t=1/e,i=2*t,r=2.5*t,n=function(a){return a<t?s*a*a:a<i?s*Math.pow(a-1.5/e,2)+.75:a<r?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};$r("Bounce",function(o){return 1-n(1-o)},n)})(7.5625,2.75);$r("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});$r("Circ",function(s){return-(su(1-s*s)-1)});$r("Sine",function(s){return s===1?1:-xf(s*bf)+1});$r("Back",To("in"),To("out"),To());ne.SteppedEase=ne.steps=It.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),n=t?1:0,o=1-fe;return function(a){return((r*os(0,o,a)|0)+n)*i}}};Yr.ease=ne["quad.out"];xt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ma+=s+","+s+"Params,"});var Lu=function(e,t){this.id=yf++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fu,this.set=t?t.getSetter:Na},Yn=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kr(this,+t.duration,1,1),this.data=t.data,ve&&(this._ctx=ve,ve.data.push(this)),Wn||zt.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Kr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Jr(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(go(this,i),!n._dp||n.parent||vu(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===fe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),pu(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Cl(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Cl(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?Gr(this._tTime,n)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-fe?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Qs(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-fe?0:this._rts,this.totalTime(os(-Math.abs(this._delay),this.totalDuration(),n),r!==!1),po(this),zf(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fe&&(this._tTime-=fe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ye(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ri(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(yt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qs(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Tf);var r=Qe;return Qe=i,Ra(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Qe=r,this},e.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):n},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,kl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,kl(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ft(this,i),yt(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,yt(r)),this._dur||(this._zTime=-fe),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-fe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-fe,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-fe)},e.eventCallback=function(i,r,n){var o=this.vars;return arguments.length>1?(r?(o[i]=r,n&&(o[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,n=r._prom;return new Promise(function(o){var a=Te(i)?i:mu,l=function(){var u=r.then;r.then=null,n&&n(),Te(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){vn(this)},s})();jt(Yn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fe,_prom:0,_ps:!1,_rts:1});var gt=(function(s){nu(e,s);function e(i,r){var n;return i===void 0&&(i={}),n=s.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=yt(i.sortChildren),xe&&ri(i.parent||xe,mi(n),r),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&bu(mi(n),i.scrollTrigger),n}var t=e.prototype;return t.to=function(r,n,o){return Pn(0,arguments,this),this},t.from=function(r,n,o){return Pn(1,arguments,this),this},t.fromTo=function(r,n,o,a){return Pn(2,arguments,this),this},t.set=function(r,n,o){return n.duration=0,n.parent=this,kn(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new je(r,n,Ft(this,o),1),this},t.call=function(r,n,o){return ri(this,je.delayedCall(0,r,n),o)},t.staggerTo=function(r,n,o,a,l,c,u){return o.duration=n,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new je(r,o,Ft(this,l)),this},t.staggerFrom=function(r,n,o,a,l,c,u){return o.runBackwards=1,kn(o).immediateRender=yt(o.immediateRender),this.staggerTo(r,n,o,a,l,c,u)},t.staggerFromTo=function(r,n,o,a,l,c,u,d){return a.startAt=o,kn(a).immediateRender=yt(a.immediateRender),this.staggerTo(r,n,a,l,c,u,d)},t.render=function(r,n,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ye(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,f,g,p,m,_,v,x,y,S,C,w;if(this!==xe&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,y=this._start,x=this._ts,_=!x,d&&(c||(a=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,n,o);if(h=ye(u%m),u===l?(p=this._repeat,h=c):(S=ye(u/m),p=~~S,p&&p===S&&(h=c,p--),h>c&&(h=c)),S=Gr(this._tTime,m),!a&&this._tTime&&S!==p&&this._tTime-S*m-this._dur<=0&&(S=p),C&&p&1&&(h=c-h,w=1),p!==S&&!this._lock){var P=C&&S&1,k=P===(C&&p&1);if(p<S&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(w?0:ye(p*m)),n,!c)._lock=0,this._tTime=u,!n&&this.parent&&Dt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,S=p),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,k&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Du(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Lf(this,ye(a),ye(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!n&&!S&&(Dt(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(r,n,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,n,o),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-fe);break}}f=g}else{f=this._last;for(var T=r<0?r:h;f;){if(g=f._prev,(f._act||T<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(r,n,o);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,n,o||Qe&&Ra(f)),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=T?-fe:fe);break}}f=g}}if(v&&!n&&(this.pause(),v.render(h>=a?0:-fe)._zTime=h>=a?1:-1,this._ts))return this._start=y,po(this),this.render(r,n,o);this._onUpdate&&!n&&Dt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hi(this,1),!n&&!(r<0&&!a)&&(u||a||!l)&&(Dt(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,n){var o=this;if(wi(n)||(n=Ft(this,n,r)),!(r instanceof Yn)){if(at(r))return r.forEach(function(a){return o.add(a,n)}),this;if(Xe(r))return this.addLabel(r,n);if(Te(r))r=je.delayedCall(0,r);else return this}return this!==r?ri(this,r,n):this},t.getChildren=function(r,n,o,a){r===void 0&&(r=!0),n===void 0&&(n=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vt);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof je?n&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,n,o)))),c=c._next;return l},t.getById=function(r){for(var n=this.getChildren(1,1,1),o=n.length;o--;)if(n[o].vars.id===r)return n[o]},t.remove=function(r){return Xe(r)?this.removeLabel(r):Te(r)?this.killTweensOf(r):(r.parent===this&&fo(this,r),r===this._recent&&(this._recent=this._last),cr(this))},t.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ye(zt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},t.addLabel=function(r,n){return this.labels[r]=Ft(this,n),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,n,o){var a=je.delayedCall(0,n||Bn,o);return a.data="isPause",this._hasPause=1,ri(this,a,Ft(this,r))},t.removePause=function(r){var n=this._first;for(r=Ft(this,r);n;)n._start===r&&n.data==="isPause"&&Hi(n),n=n._next},t.killTweensOf=function(r,n,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Mi!==a[l]&&a[l].kill(r,n);return this},t.getTweensOf=function(r,n){for(var o=[],a=Bt(r),l=this._first,c=wi(n),u;l;)l instanceof je?Of(l._targets,a)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=n&&l.globalTime(l.totalDuration())>n:!n||l.isActive())&&o.push(l):(u=l.getTweensOf(a,n)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,n){n=n||{};var o=this,a=Ft(o,r),l=n,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=je.to(o,jt({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:n.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||fe,onStart:function(){if(o.pause(),!f){var m=n.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Kr(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},n));return h?g.render(0):g},t.tweenFromTo=function(r,n,o){return this.tweenTo(n,jt({startAt:{time:Ft(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Pl(this,Ft(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Pl(this,Ft(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+fe)},t.shiftChildren=function(r,n,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=ye(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(n)for(c in l)l[c]>=o&&(l[c]+=r);return cr(this)},t.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return s.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,o;n;)o=n._next,this.remove(n),n=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),cr(this)},t.totalDuration=function(r){var n=0,o=this,a=o._last,l=Vt,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ri(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(n-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ye(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>n&&a._ts&&(n=a._end),a=c;Kr(o,o===xe&&o._time>n?o._time:n,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(xe._ts&&(pu(xe,Qs(r,xe)),du=zt.frame),zt.frame>=Sl){Sl+=Lt.autoSleep||120;var n=xe._first;if((!n||!n._ts)&&Lt.autoSleep&&zt._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||zt.sleep()}}},e})(Yn);jt(gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Zf=function(e,t,i,r,n,o,a){var l=new wt(this._pt,e,t,0,1,Hu,null,n),c=0,u=0,d,h,f,g,p,m,_,v;for(l.b=i,l.e=r,i+="",r+="",(_=~r.indexOf("random("))&&(r=qn(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match($o)||[];d=$o.exec(r);)g=d[0],p=r.substring(c,d.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?Ur(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=$o.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(lu.test(r)||_)&&(l.e=0),this._pt=l,l},La=function(e,t,i,r,n,o,a,l,c,u){Te(r)&&(r=r(n||0,e,o));var d=e[t],h=i!=="get"?i:Te(d)?c?e[t.indexOf("set")||!Te(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Te(d)?c?rp:Fu:ja,g;if(Xe(r)&&(~r.indexOf("random(")&&(r=qn(r)),r.charAt(1)==="="&&(g=Ur(h,r)+(st(h)||0),(g||g===0)&&(r=g))),!u||h!==r||ea)return!isNaN(h*r)&&r!==""?(g=new wt(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?sp:Uu,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&Aa(t,r),Zf.call(this,e,t,h,r,f,l||Lt.stringFilter,c))},Qf=function(e,t,i,r,n){if(Te(e)&&(e=Tn(e,n,t,i,r)),!ci(e)||e.style&&e.nodeType||at(e)||ou(e))return Xe(e)?Tn(e,n,t,i,r):e;var o={},a;for(a in e)o[a]=Tn(e[a],n,t,i,r);return o},Iu=function(e,t,i,r,n,o){var a,l,c,u;if(Et[e]&&(a=new Et[e]).init(n,a.rawVars?t[e]:Qf(t[e],r,n,o,i),i,r,o)!==!1&&(i._pt=l=new wt(i._pt,n,e,0,1,a.render,a,0,a.priority),i!==Nr))for(c=i._ptLookup[i._targets.indexOf(n)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Mi,ea,Ia=function s(e,t,i){var r=e.vars,n=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,g=e._dur,p=e._startAt,m=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:m,x=e._overwrite==="auto"&&!Pa,y=e.timeline,S,C,w,P,k,T,A,O,U,N,L,I,R;if(y&&(!h||!n)&&(n="none"),e._ease=ur(n,Yr.ease),e._yEase=d?Mu(ur(d===!0?n:d,Yr.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(O=m[0]?lr(m[0]).harness:0,I=O&&r[O.prop],S=Zs(r,za),p&&(p._zTime<0&&p.progress(1),t<0&&u&&a&&!f?p.render(-1,!0):p.revert(u&&g?Ds:Pf),p._lazy=0),o){if(Hi(e._startAt=je.set(m,jt({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&yt(l),startAt:null,delay:0,onUpdate:c&&function(){return Dt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qe||!a&&!f)&&e._startAt.revert(Ds),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!p){if(t&&(a=!1),w=jt({overwrite:!1,data:"isFromStart",lazy:a&&!p&&yt(l),immediateRender:a,stagger:0,parent:_},S),I&&(w[O.prop]=I),Hi(e._startAt=je.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qe?e._startAt.revert(Ds):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,fe,fe);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&yt(l)||l&&!g,C=0;C<m.length;C++){if(k=m[C],A=k._gsap||Da(m)[C]._gsap,e._ptLookup[C]=N={},Xo[A.id]&&ji.length&&Js(),L=v===m?C:v.indexOf(k),O&&(U=new O).init(k,I||S,e,L,v)!==!1&&(e._pt=P=new wt(e._pt,k,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(K){N[K]=P}),U.priority&&(T=1)),!O||I)for(w in S)Et[w]&&(U=Iu(w,S,e,L,k,v))?U.priority&&(T=1):N[w]=P=La.call(e,k,w,"get",S[w],L,v,0,r.stringFilter);e._op&&e._op[C]&&e.kill(k,e._op[C]),x&&e._pt&&(Mi=e,xe.killTweensOf(k,N,e.globalTime(t)),R=!e.parent,Mi=0),e._pt&&l&&(Xo[A.id]=1)}T&&Vu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!R,h&&t<=0&&y.render(Vt,!0,!0)},ep=function(e,t,i,r,n,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ea=1,e.vars[t]="+=0",Ia(e,a),ea=0,l?Vn(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(r||r===0)&&!n?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=Me(i)+st(d.e)),d.b&&(d.b=u.s+st(d.b))},tp=function(e,t){var i=e[0]?lr(e[0]).harness:0,r=i&&i.aliases,n,o,a,l;if(!r)return t;n=Xr({},t);for(o in r)if(o in n)for(l=r[o].split(","),a=l.length;a--;)n[l[a]]=n[o];return n},ip=function(e,t,i,r){var n=t.ease||r||"power1.inOut",o,a;if(at(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:n})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:n})},Tn=function(e,t,i,r,n){return Te(e)?e.call(t,i,r,n):Xe(e)&&~e.indexOf("random(")?qn(e):e},ju=Ma+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Nu={};xt(ju+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Nu[s]=1});var je=(function(s){nu(e,s);function e(i,r,n,o){var a;typeof r=="number"&&(n.duration=r,r=n,n=null),a=s.call(this,o?r:kn(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,v=r.parent||xe,x=(at(i)||ou(i)?wi(i[0]):"length"in r)?[i]:Bt(i),y,S,C,w,P,k,T,A;if(a._targets=x.length?Da(x):Vn("GSAP target "+i+" not found. https://gsap.com",!Lt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||h||gs(c)||gs(u)){if(r=a.vars,y=a.timeline=new gt({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=mi(a),y._start=0,h||gs(c)||gs(u)){if(w=x.length,T=h&&Su(h),ci(h))for(P in h)~ju.indexOf(P)&&(A||(A={}),A[P]=h[P]);for(S=0;S<w;S++)C=Zs(r,Nu),C.stagger=0,_&&(C.yoyoEase=_),A&&Xr(C,A),k=x[S],C.duration=+Tn(c,mi(a),S,k,x),C.delay=(+Tn(u,mi(a),S,k,x)||0)-a._delay,!h&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),y.to(k,C,T?T(S,k,x):0),y._ease=ne.none;y.duration()?c=u=0:a.timeline=0}else if(g){kn(jt(y.vars.defaults,{ease:"none"})),y._ease=ur(g.ease||r.ease||"none");var O=0,U,N,L;if(at(g))g.forEach(function(I){return y.to(x,I,">")}),y.duration();else{C={};for(P in g)P==="ease"||P==="easeEach"||ip(P,g[P],C,g.easeEach);for(P in C)for(U=C[P].sort(function(I,R){return I.t-R.t}),O=0,S=0;S<U.length;S++)N=U[S],L={ease:N.e,duration:(N.t-(S?U[S-1].t:0))/100*c},L[P]=N.v,y.to(x,L,O),O+=L.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return f===!0&&!Pa&&(Mi=mi(a),xe.killTweensOf(x),Mi=0),ri(v,mi(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!g&&a._start===ye(v._time)&&yt(d)&&Mf(mi(a))&&v.data!=="nested")&&(a._tTime=-fe,a.render(Math.max(0,-u)||0)),m&&bu(mi(a),m),a}var t=e.prototype;return t.render=function(r,n,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-fe&&!u?l:r<fe?0:r,h,f,g,p,m,_,v,x,y;if(!c)Rf(this,r,n,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,x=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+r,n,o);if(h=ye(d%p),d===l?(g=this._repeat,h=c):(m=ye(d/p),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,h=c-h),m=Gr(this._tTime,p),h===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(x&&this._yEase&&Du(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&h!==p&&this._initted&&(this._lock=o=1,this.render(ye(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(yu(this,u?r:h,o,n,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,n,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/c),this._from&&(this.ratio=v=1-v),!a&&d&&!n&&!m&&(Dt(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),n,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(u&&Go(this,r,n,o),Dt(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!n&&this.parent&&Dt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Go(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hi(this,1),!n&&!(u&&!a)&&(d||a||_)&&(Dt(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},t.resetTo=function(r,n,o,a,l){Wn||zt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ia(this,c),u=this._ease(c/this._dur),ep(this,r,n,o,a,u,c,l)?this.resetTo(r,n,o,a,1):(go(this,0),this.parent||_u(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?vn(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,Mi&&Mi.vars.overwrite!==!0)._first||vn(this),this.parent&&o!==this.timeline.totalDuration()&&Kr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Bt(r):a,c=this._ptLookup,u=this._pt,d,h,f,g,p,m,_;if((!n||n==="all")&&Af(a,l))return n==="all"&&(this._pt=0),vn(this);for(d=this._op=this._op||[],n!=="all"&&(Xe(n)&&(p={},xt(n,function(v){return p[v]=1}),n=p),n=tp(a,n)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],n==="all"?(d[_]=n,g=h,f={}):(f=d[_]=d[_]||{},g=n);for(p in g)m=h&&h[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&fo(this,m,"_pt"),delete h[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&vn(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return Pn(1,arguments)},e.delayedCall=function(r,n,o,a){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,n,o){return Pn(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,o){return xe.killTweensOf(r,n,o)},e})(Yn);jt(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xt("staggerTo,staggerFrom,staggerFromTo",function(s){je[s]=function(){var e=new gt,t=Jo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ja=function(e,t,i){return e[t]=i},Fu=function(e,t,i){return e[t](i)},rp=function(e,t,i,r){return e[t](r.fp,i)},np=function(e,t,i){return e.setAttribute(t,i)},Na=function(e,t){return Te(e[t])?Fu:Ta(e[t])&&e.setAttribute?np:ja},Uu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Hu=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Fa=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},op=function(e,t,i,r){for(var n=this._pt,o;n;)o=n._next,n.p===r&&n.modifier(e,t,i),n=o},ap=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?fo(this,t,"_pt"):t.dep||(i=1),t=r;return!i},lp=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Vu=function(e){for(var t=e._pt,i,r,n,o;t;){for(i=t._next,r=n;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:n=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=n},wt=(function(){function s(t,i,r,n,o,a,l,c,u){this.t=i,this.s=n,this.c=o,this.p=r,this.r=a||Uu,this.d=l||this,this.set=c||ja,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=lp,this.m=i,this.mt=n,this.tween=r},s})();xt(Ma+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return za[s]=1});It.TweenMax=It.TweenLite=je;It.TimelineLite=It.TimelineMax=gt;xe=new gt({sortChildren:!1,defaults:Yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Lt.stringFilter=zu;var hr=[],Ls={},cp=[],Ol=0,up=0,Oo=function(e){return(Ls[e]||cp).map(function(t){return t()})},ta=function(){var e=Date.now(),t=[];e-Ol>2&&(Oo("matchMediaInit"),hr.forEach(function(i){var r=i.queries,n=i.conditions,o,a,l,c;for(a in r)o=ti.matchMedia(r[a]).matches,o&&(l=1),o!==n[a]&&(n[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Oo("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Ol=e,Oo("matchMedia"))},Bu=(function(){function s(t,i){this.selector=i&&Zo(i),this.data=[],this._r=[],this.isReverted=!1,this.id=up++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,r,n){Te(i)&&(n=r,r=i,i=Te);var o=this,a=function(){var c=ve,u=o.selector,d;return c&&c!==o&&c.data.push(o),n&&(o.selector=Zo(n)),ve=o,d=r.apply(o,arguments),Te(d)&&o._r.push(d),ve=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===Te?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ve;ve=null,i(this),ve=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof s?i.push.apply(i,r.getTweens()):r instanceof je&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var n=this;if(i?(function(){for(var a=n.getTweens(),l=n.data.length,c;l--;)c=n.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=n.data.length;l--;)c=n.data[l],c instanceof gt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(i);n._r.forEach(function(u){return u(i,n)}),n.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=hr.length;o--;)hr[o].id===this.id&&hr.splice(o,1)},e.revert=function(i){this.kill(i||{})},s})(),hp=(function(){function s(t){this.contexts=[],this.scope=t,ve&&ve.data.push(this)}var e=s.prototype;return e.add=function(i,r,n){ci(i)||(i={matches:i});var o=new Bu(0,n||this.scope),a=o.conditions={},l,c,u;ve&&!o.selector&&(o.selector=ve.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ti.matchMedia(i[c]),l&&(hr.indexOf(o)<0&&hr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ta):l.addEventListener("change",ta)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},s})(),eo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Ou(r)})},timeline:function(e){return new gt(e)},getTweensOf:function(e,t){return xe.getTweensOf(e,t)},getProperty:function(e,t,i,r){Xe(e)&&(e=Bt(e)[0]);var n=lr(e||{}).get,o=i?mu:gu;return i==="native"&&(i=""),e&&(t?o((Et[t]&&Et[t].get||n)(e,t,i,r)):function(a,l,c){return o((Et[a]&&Et[a].get||n)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Bt(e),e.length>1){var r=e.map(function(u){return $t.quickSetter(u,t,i)}),n=r.length;return function(u){for(var d=n;d--;)r[d](u)}}e=e[0]||{};var o=Et[t],a=lr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;Nr._pt=0,d.init(e,i?u+i:u,Nr,0,[e]),d.render(1,d),Nr._pt&&Fa(1,Nr)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,n=$t.to(e,jt((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return n.resetTo(t,l,c,u)};return o.tween=n,o},isTweening:function(e){return xe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ur(e.ease,Yr.ease)),$l(Yr,e||{})},config:function(e){return $l(Lt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,n=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Et[a]&&!It[a]&&Vn(t+" effect requires "+a+" plugin.")}),Co[t]=function(a,l,c){return i(Bt(a),jt(l||{},n),c)},o&&(gt.prototype[t]=function(a,l,c){return this.add(Co[t](a,ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ne[e]=ur(t)},parseEase:function(e,t){return arguments.length?ur(e,t):ne},getById:function(e){return xe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new gt(e),r,n;for(i.smoothChildTiming=yt(e.smoothChildTiming),xe.remove(i),i._dp=0,i._time=i._tTime=xe._time,r=xe._first;r;)n=r._next,(t||!(!r._dur&&r instanceof je&&r.vars.onComplete===r._targets[0]))&&ri(i,r,r._start-r._delay),r=n;return ri(xe,i,0),i},context:function(e,t){return e?new Bu(e,t):ve},matchMedia:function(e){return new hp(e)},matchMediaRefresh:function(){return hr.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ta()},addEventListener:function(e,t){var i=Ls[e]||(Ls[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ls[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Vf,wrapYoyo:Bf,distribute:Su,random:Cu,snap:$u,normalize:Hf,getUnit:st,clamp:jf,splitColor:Eu,toArray:Bt,selector:Zo,mapRange:Pu,pipe:Ff,unitize:Uf,interpolate:qf,shuffle:wu},install:uu,effects:Co,ticker:zt,updateRoot:gt.updateRoot,plugins:Et,globalTimeline:xe,core:{PropTween:wt,globals:hu,Tween:je,Timeline:gt,Animation:Yn,getCache:lr,_removeLinkedListItem:fo,reverting:function(){return Qe},context:function(e){return e&&ve&&(ve.data.push(e),e._ctx=ve),ve},suppressOverwrites:function(e){return Pa=e}}};xt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return eo[s]=je[s]});zt.add(gt.updateRoot);Nr=eo.to({},{duration:0});var dp=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},fp=function(e,t){var i=e._targets,r,n,o;for(r in t)for(n=i.length;n--;)o=e._ptLookup[n][r],o&&(o=o.d)&&(o._pt&&(o=dp(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[n],r))},Eo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,n,o){o._onInit=function(a){var l,c;if(Xe(n)&&(l={},xt(n,function(u){return l[u]=1}),n=l),t){l={};for(c in n)l[c]=t(n[c]);n=l}fp(a,n)}}}},$t=eo.registerPlugin({name:"attr",init:function(e,t,i,r,n){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,n,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Qe?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Eo("roundProps",Qo),Eo("modifiers"),Eo("snap",$u))||eo;je.version=gt.version=$t.version="3.14.2";cu=1;Oa()&&Jr();ne.Power0;ne.Power1;ne.Power2;ne.Power3;ne.Power4;ne.Linear;ne.Quad;ne.Cubic;ne.Quart;ne.Quint;ne.Strong;ne.Elastic;ne.Back;ne.SteppedEase;ne.Bounce;ne.Sine;ne.Expo;ne.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var El,Di,Hr,Ua,sr,Al,Ha,pp=function(){return typeof window<"u"},Si={},tr=180/Math.PI,Vr=Math.PI/180,zr=Math.atan2,zl=1e8,Va=/([A-Z])/g,gp=/(left|right|width|margin|padding|x)/i,mp=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ia=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_p=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bp=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yp=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},qu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xp=function(e,t,i){return e.style[t]=i},wp=function(e,t,i){return e.style.setProperty(t,i)},Sp=function(e,t,i){return e._gsap[t]=i},$p=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Cp=function(e,t,i,r,n){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(n,o)},kp=function(e,t,i,r,n){var o=e._gsap;o[t]=i,o.renderTransform(n,o)},we="transform",St=we+"Origin",Pp=function s(e,t){var i=this,r=this.target,n=r.style,o=r._gsap;if(e in Si&&n){if(this.tfm=this.tfm||{},e!=="transform")e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=_i(r,a)}):this.tfm[e]=o.x?o[e]:_i(r,e),e===St&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return s.call(i,a,t)});if(this.props.indexOf(we)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(St,t,"")),e=we}(n||t)&&this.props.push(e,t,n[e])},Yu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Tp=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,n,o;for(n=0;n<e.length;n+=3)e[n+1]?e[n+1]===2?t[e[n]](e[n+2]):t[e[n]]=e[n+2]:e[n+2]?i[e[n]]=e[n+2]:i.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(Va,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),n=Ha(),(!n||!n.isStart)&&!i[we]&&(Yu(i),r.zOrigin&&i[St]&&(i[St]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Xu=function(e,t){var i={target:e,props:[],revert:Tp,save:Pp};return e._gsap||$t.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Gu,ra=function(e,t){var i=Di.createElementNS?Di.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Di.createElement(e);return i&&i.style?i:Di.createElement(e)},Rt=function s(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Va,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&s(e,Zr(t)||t,1)||""},Ml="O,Moz,ms,Ms,Webkit".split(","),Zr=function(e,t,i){var r=t||sr,n=r.style,o=5;if(e in n&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ml[o]+e in n););return o<0?null:(o===3?"ms":o>=0?Ml[o]:"")+e},na=function(){pp()&&window.document&&(El=window,Di=El.document,Hr=Di.documentElement,sr=ra("div")||{style:{}},ra("div"),we=Zr(we),St=we+"Origin",sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gu=!!Zr("perspective"),Ha=$t.core.reverting,Ua=1)},Dl=function(e){var t=e.ownerSVGElement,i=ra("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),n;r.style.display="block",i.appendChild(r),Hr.appendChild(i);try{n=r.getBBox()}catch{}return i.removeChild(r),Hr.removeChild(i),n},Rl=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ku=function(e){var t,i;try{t=e.getBBox()}catch{t=Dl(e),i=1}return t&&(t.width||t.height)||i||(t=Dl(e)),t&&!t.width&&!t.x&&!t.y?{x:+Rl(e,["x","cx","x1"])||0,y:+Rl(e,["y","cy","y1"])||0,width:0,height:0}:t},Ju=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ku(e))},Vi=function(e,t){if(t){var i=e.style,r;t in Si&&t!==St&&(t=we),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Va,"-$1").toLowerCase())):i.removeAttribute(t)}},Ri=function(e,t,i,r,n,o){var a=new wt(e._pt,t,i,0,1,o?Wu:qu);return e._pt=a,a.b=r,a.e=n,e._props.push(i),a},Ll={deg:1,rad:1,turn:1},Op={grid:1,flex:1},Bi=function s(e,t,i,r){var n=parseFloat(i)||0,o=(i+"").trim().substr((n+"").length)||"px",a=sr.style,l=gp.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",f=r==="%",g,p,m,_;if(r===o||!n||Ll[r]||Ll[o])return n;if(o!=="px"&&!h&&(n=s(e,t,i,"px")),_=e.getCTM&&Ju(e),(f||o==="%")&&(Si[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[u],Me(f?n/g*d:n/100*g);if(a[l?"width":"height"]=d+(h?o:r),p=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Di||!p.appendChild)&&(p=Di.body),m=p._gsap,m&&f&&m.width&&l&&m.time===zt.time&&!m.uncache)return Me(n/m.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,g=e[u],v?e.style[t]=v:Vi(e,t)}else(f||o==="%")&&!Op[Rt(p,"display")]&&(a.position=Rt(e,"position")),p===e&&(a.position="static"),p.appendChild(sr),g=sr[u],p.removeChild(sr),a.position="absolute";return l&&f&&(m=lr(p),m.time=zt.time,m.width=p[u]),Me(h?g*n/d:g&&n?d/g*n:0)},_i=function(e,t,i,r){var n;return Ua||na(),t in si&&t!=="transform"&&(t=si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Si[t]&&t!=="transform"?(n=Gn(e,r),n=t!=="transformOrigin"?n[t]:n.svg?n.origin:io(Rt(e,St))+" "+n.zOrigin+"px"):(n=e.style[t],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=to[t]&&to[t](e,t,i)||Rt(e,t)||fu(e,t)||(t==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?Bi(e,t,n,i)+i:n},Ep=function(e,t,i,r){if(!i||i==="none"){var n=Zr(t,e,1),o=n&&Rt(e,n,1);o&&o!==i?(t=n,i=o):t==="borderColor"&&(i=Rt(e,"borderTopColor"))}var a=new wt(this._pt,e.style,t,0,1,Hu),l=0,c=0,u,d,h,f,g,p,m,_,v,x,y,S;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Rt(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(p=e.style[t],e.style[t]=r,r=Rt(e,t)||r,p?e.style[t]=p:Vi(e,t)),u=[i,r],zu(u),i=u[0],r=u[1],h=i.match(jr)||[],S=r.match(jr)||[],S.length){for(;d=jr.exec(r);)m=d[0],v=r.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(p=h[c++]||"")&&(f=parseFloat(p)||0,y=p.substr((f+"").length),m.charAt(1)==="="&&(m=Ur(f,m)+y),_=parseFloat(m),x=m.substr((_+"").length),l=jr.lastIndex-x.length,x||(x=x||Lt.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(f=Bi(e,t,p,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:_-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Wu:qu;return lu.test(r)&&(a.e=0),this._pt=a,a},Il={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ap=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Il[i]||i,t[1]=Il[r]||r,t.join(" ")},zp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,n=t.u,o=i._gsap,a,l,c;if(n==="all"||n===!0)r.cssText="",l=1;else for(n=n.split(","),c=n.length;--c>-1;)a=n[c],Si[a]&&(l=1,a=a==="transformOrigin"?St:we),Vi(i,a);l&&(Vi(i,we),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Gn(i,1),o.uncache=1,Yu(r)))}},to={clearProps:function(e,t,i,r,n){if(n.data!=="isFromStart"){var o=e._pt=new wt(e._pt,t,i,0,0,zp);return o.u=r,o.pr=-10,o.tween=n,e._props.push(i),1}}},Xn=[1,0,0,1,0,0],Zu={},Qu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jl=function(e){var t=Rt(e,we);return Qu(t)?Xn:t.substr(7).match(au).map(Me)},Ba=function(e,t){var i=e._gsap||lr(e),r=e.style,n=jl(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],n.join(",")==="1,0,0,1,0,0"?Xn:n):(n===Xn&&!e.offsetParent&&e!==Hr&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Hr.appendChild(e)),n=jl(e),l?r.display=l:Vi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Hr.removeChild(e))),t&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},sa=function(e,t,i,r,n,o){var a=e._gsap,l=n||Ba(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],g=l[1],p=l[2],m=l[3],_=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,S=parseFloat(x[1])||0,C,w,P,k;i?l!==Xn&&(w=f*m-g*p)&&(P=y*(m/w)+S*(-p/w)+(p*v-m*_)/w,k=y*(-g/w)+S*(f/w)-(f*v-g*_)/w,y=P,S=k):(C=Ku(e),y=C.x+(~x[0].indexOf("%")?y/100*C.width:y),S=C.y+(~(x[1]||x[0]).indexOf("%")?S/100*C.height:S)),r||r!==!1&&a.smooth?(_=y-c,v=S-u,a.xOffset=d+(_*f+v*p)-_,a.yOffset=h+(_*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[St]="0px 0px",o&&(Ri(o,a,"xOrigin",c,y),Ri(o,a,"yOrigin",u,S),Ri(o,a,"xOffset",d,a.xOffset),Ri(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Gn=function(e,t){var i=e._gsap||new Lu(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,n=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Rt(e,St)||"0",u,d,h,f,g,p,m,_,v,x,y,S,C,w,P,k,T,A,O,U,N,L,I,R,K,W,b,G,Oe,me,ue,Se;return u=d=h=p=m=_=v=x=y=0,f=g=1,i.svg=!!(e.getCTM&&Ju(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[we]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[we]!=="none"?l[we]:"")),r.scale=r.rotate=r.translate="none"),w=Ba(e,i.svg),i.svg&&(i.uncache?(K=e.getBBox(),c=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",R=""):R=!t&&e.getAttribute("data-svg-origin"),sa(e,R||c,!!R||i.originIsAbsolute,i.smooth!==!1,w)),S=i.xOrigin||0,C=i.yOrigin||0,w!==Xn&&(A=w[0],O=w[1],U=w[2],N=w[3],u=L=w[4],d=I=w[5],w.length===6?(f=Math.sqrt(A*A+O*O),g=Math.sqrt(N*N+U*U),p=A||O?zr(O,A)*tr:0,v=U||N?zr(U,N)*tr+p:0,v&&(g*=Math.abs(Math.cos(v*Vr))),i.svg&&(u-=S-(S*A+C*U),d-=C-(S*O+C*N))):(Se=w[6],me=w[7],b=w[8],G=w[9],Oe=w[10],ue=w[11],u=w[12],d=w[13],h=w[14],P=zr(Se,Oe),m=P*tr,P&&(k=Math.cos(-P),T=Math.sin(-P),R=L*k+b*T,K=I*k+G*T,W=Se*k+Oe*T,b=L*-T+b*k,G=I*-T+G*k,Oe=Se*-T+Oe*k,ue=me*-T+ue*k,L=R,I=K,Se=W),P=zr(-U,Oe),_=P*tr,P&&(k=Math.cos(-P),T=Math.sin(-P),R=A*k-b*T,K=O*k-G*T,W=U*k-Oe*T,ue=N*T+ue*k,A=R,O=K,U=W),P=zr(O,A),p=P*tr,P&&(k=Math.cos(P),T=Math.sin(P),R=A*k+O*T,K=L*k+I*T,O=O*k-A*T,I=I*k-L*T,A=R,L=K),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),f=Me(Math.sqrt(A*A+O*O+U*U)),g=Me(Math.sqrt(I*I+Se*Se)),P=zr(L,I),v=Math.abs(P)>2e-4?P*tr:0,y=ue?1/(ue<0?-ue:ue):0),i.svg&&(R=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Qu(Rt(e,we)),R&&e.setAttribute("transform",R))),Math.abs(v)>90&&Math.abs(v)<270&&(n?(f*=-1,v+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Me(f),i.scaleY=Me(g),i.rotation=Me(p)+a,i.rotationX=Me(m)+a,i.rotationY=Me(_)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[St]=io(c)),i.xOffset=i.yOffset=0,i.force3D=Lt.force3D,i.renderTransform=i.svg?Dp:Gu?eh:Mp,i.uncache=0,i},io=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ao=function(e,t,i){var r=st(t);return Me(parseFloat(t)+parseFloat(Bi(e,"x",i+"px",r)))+r},Mp=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,eh(e,t)},Zi="0deg",fn="0px",Qi=") ",eh=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,f=i.skewY,g=i.scaleX,p=i.scaleY,m=i.transformPerspective,_=i.force3D,v=i.target,x=i.zOrigin,y="",S=_==="auto"&&e&&e!==1||_===!0;if(x&&(d!==Zi||u!==Zi)){var C=parseFloat(u)*Vr,w=Math.sin(C),P=Math.cos(C),k;C=parseFloat(d)*Vr,k=Math.cos(C),o=Ao(v,o,w*k*-x),a=Ao(v,a,-Math.sin(C)*-x),l=Ao(v,l,P*k*-x+x)}m!==fn&&(y+="perspective("+m+Qi),(r||n)&&(y+="translate("+r+"%, "+n+"%) "),(S||o!==fn||a!==fn||l!==fn)&&(y+=l!==fn||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qi),c!==Zi&&(y+="rotate("+c+Qi),u!==Zi&&(y+="rotateY("+u+Qi),d!==Zi&&(y+="rotateX("+d+Qi),(h!==Zi||f!==Zi)&&(y+="skew("+h+", "+f+Qi),(g!==1||p!==1)&&(y+="scale("+g+", "+p+Qi),v.style[we]=y||"translate(0, 0)"},Dp=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,f=i.target,g=i.xOrigin,p=i.yOrigin,m=i.xOffset,_=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),S,C,w,P,k;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vr,c*=Vr,S=Math.cos(l)*d,C=Math.sin(l)*d,w=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=Vr,k=Math.tan(c-u),k=Math.sqrt(1+k*k),w*=k,P*=k,u&&(k=Math.tan(u),k=Math.sqrt(1+k*k),S*=k,C*=k)),S=Me(S),C=Me(C),w=Me(w),P=Me(P)):(S=d,P=h,C=w=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Bi(f,"x",o,"px"),y=Bi(f,"y",a,"px")),(g||p||m||_)&&(x=Me(x+g-(g*S+p*w)+m),y=Me(y+p-(g*C+p*P)+_)),(r||n)&&(k=f.getBBox(),x=Me(x+r/100*k.width),y=Me(y+n/100*k.height)),k="matrix("+S+","+C+","+w+","+P+","+x+","+y+")",f.setAttribute("transform",k),v&&(f.style[we]=k)},Rp=function(e,t,i,r,n){var o=360,a=Xe(n),l=parseFloat(n)*(a&&~n.indexOf("rad")?tr:1),c=l-r,u=r+c+"deg",d,h;return a&&(d=n.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*zl)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*zl)%o-~~(c/o)*o)),e._pt=h=new wt(e._pt,t,i,r,c,_p),h.e=u,h.u="deg",e._props.push(i),h},Nl=function(e,t){for(var i in t)e[i]=t[i];return e},Lp=function(e,t,i){var r=Nl({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,h,f,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[we]=t,a=Gn(i,1),Vi(i,we),i.setAttribute("transform",c)):(c=getComputedStyle(i)[we],o[we]=t,a=Gn(i,1),o[we]=c);for(l in Si)c=r[l],u=a[l],c!==u&&n.indexOf(l)<0&&(f=st(c),g=st(u),d=f!==g?Bi(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new wt(e._pt,a,l,d,h-d,ia),e._pt.u=g||0,e._props.push(l));Nl(a,r)};xt("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",r="Bottom",n="Left",o=(e<3?[t,i,r,n]:[t+n,t+i,r+i,r+n]).map(function(a){return e<2?s+a:"border"+a+s});to[e>1?"border"+s:s]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=o.map(function(g){return _i(a,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(g,p){return f[g]=h[p]=h[p]||h[(p-1)/2|0]}),a.init(l,f,d)}});var th={name:"css",register:na,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,n){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,h,f,g,p,m,_,v,x,y,S,C,w,P,k;Ua||na(),this.styles=this.styles||Xu(e),P=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Et[p]&&Iu(p,t,i,r,e,n)))){if(f=typeof u,g=to[p],f==="function"&&(u=u.call(i,r,e,n),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=qn(u)),g)g(this,e,p,u,i)&&(w=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Ni.lastIndex=0,Ni.test(c)||(m=st(c),_=st(u),_?m!==_&&(c=Bi(e,p,c,_)+_):m&&(u+=m)),this.add(a,"setProperty",c,u,r,n,0,0,p),o.push(p),P.push(p,0,a[p]);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,r,e,n):l[p],Xe(c)&&~c.indexOf("random(")&&(c=qn(c)),st(c+"")||c==="auto"||(c+=Lt.units[p]||st(_i(e,p))||""),(c+"").charAt(1)==="="&&(c=_i(e,p))):c=_i(e,p),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),p in si&&(p==="autoAlpha"&&(h===1&&_i(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),Ri(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=si[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in Si,x){if(this.styles.save(p),k=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Rt(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=Rt(e,"perspective"),T?e.style.perspective=T:Vi(e,"perspective")}d=parseFloat(u)}if(y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Gn(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new wt(this._pt,a,we,0,1,S.renderTransform,S,0,-1),y.dep=1),p==="scale")this._pt=new wt(this._pt,S,"scaleY",S.scaleY,(v?Ur(S.scaleY,v+d):d)-S.scaleY||0,ia),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){P.push(St,0,a[St]),u=Ap(u),S.svg?sa(e,u,0,C,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==S.zOrigin&&Ri(this,S,"zOrigin",S.zOrigin,_),Ri(this,a,p,io(c),io(u)));continue}else if(p==="svgOrigin"){sa(e,u,1,C,0,this);continue}else if(p in Zu){Rp(this,S,p,h,v?Ur(h,v+u):u);continue}else if(p==="smoothOrigin"){Ri(this,S,"smooth",S.smooth,u);continue}else if(p==="force3D"){S[p]=u;continue}else if(p==="transform"){Lp(this,u,e);continue}}else p in a||(p=Zr(p)||p);if(x||(d||d===0)&&(h||h===0)&&!mp.test(u)&&p in a)m=(c+"").substr((h+"").length),d||(d=0),_=st(u)||(p in Lt.units?Lt.units[p]:m),m!==_&&(h=Bi(e,p,c,_)),this._pt=new wt(this._pt,x?S:a,p,h,(v?Ur(h,v+d):d)-h,!x&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?yp:ia),this._pt.u=_||0,x&&k!==u?(this._pt.b=c,this._pt.e=k,this._pt.r=bp):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=vp);else if(p in a)Ep.call(this,e,p,c,v?v+u:u);else if(p in e)this.add(e,p,c||e[p],v?v+u:u,r,n);else if(p!=="parseTransform"){Aa(p,u);continue}x||(p in a?P.push(p,0,a[p]):typeof e[p]=="function"?P.push(p,2,e[p]()):P.push(p,1,c||e[p])),o.push(p)}}w&&Vu(this)},render:function(e,t){if(t.tween._time||!Ha())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:_i,aliases:si,getSetter:function(e,t,i){var r=si[t];return r&&r.indexOf(",")<0&&(t=r),t in Si&&t!==St&&(e._gsap.x||_i(e,"x"))?i&&Al===i?t==="scale"?$p:Sp:(Al=i||{})&&(t==="scale"?Cp:kp):e.style&&!Ta(e.style[t])?xp:~t.indexOf("-")?wp:Na(e,t)},core:{_removeProperty:Vi,_getMatrix:Ba}};$t.utils.checkPrefix=Zr;$t.core.getStyleSaver=Xu;(function(s,e,t,i){var r=xt(s+","+e+","+t,function(n){Si[n]=1});xt(e,function(n){Lt.units[n]="deg",Zu[n]=1}),si[r[13]]=s+","+e,xt(i,function(n){var o=n.split(":");si[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Lt.units[s]="px"});$t.registerPlugin(th);var oe=$t.registerPlugin(th)||$t;oe.core.Tween;/*!
 * paths 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ip=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,jp=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Np=Math.PI/180,ms=Math.sin,_s=Math.cos,On=Math.abs,pn=Math.sqrt,Fp=function(e){return typeof e=="number"},Fl=1e5,Oi=function(e){return Math.round(e*Fl)/Fl||0},Ul=function(e){return e.closed=Math.abs(e[0]-e[e.length-2])<.001&&Math.abs(e[1]-e[e.length-1])<.001};function Up(s,e,t,i,r,n,o){for(var a=s.length,l,c,u,d,h;--a>-1;)for(l=s[a],c=l.length,u=0;u<c;u+=2)d=l[u],h=l[u+1],l[u]=d*e+h*i+n,l[u+1]=d*t+h*r+o;return s._dirty=1,s}function Hp(s,e,t,i,r,n,o,a,l){if(!(s===a&&e===l)){t=On(t),i=On(i);var c=r%360*Np,u=_s(c),d=ms(c),h=Math.PI,f=h*2,g=(s-a)/2,p=(e-l)/2,m=u*g+d*p,_=-d*g+u*p,v=m*m,x=_*_,y=v/(t*t)+x/(i*i);y>1&&(t=pn(y)*t,i=pn(y)*i);var S=t*t,C=i*i,w=(S*C-S*x-C*v)/(S*x+C*v);w<0&&(w=0);var P=(n===o?-1:1)*pn(w),k=P*(t*_/i),T=P*-(i*m/t),A=(s+a)/2,O=(e+l)/2,U=A+(u*k-d*T),N=O+(d*k+u*T),L=(m-k)/t,I=(_-T)/i,R=(-m-k)/t,K=(-_-T)/i,W=L*L+I*I,b=(I<0?-1:1)*Math.acos(L/pn(W)),G=(L*K-I*R<0?-1:1)*Math.acos((L*R+I*K)/pn(W*(R*R+K*K)));isNaN(G)&&(G=h),!o&&G>0?G-=f:o&&G<0&&(G+=f),b%=f,G%=f;var Oe=Math.ceil(On(G)/(f/4)),me=[],ue=G/Oe,Se=4/3*ms(ue/2)/(1+_s(ue/2)),He=u*t,$e=d*t,Ge=d*-i,Ve=u*i,Ce;for(Ce=0;Ce<Oe;Ce++)r=b+Ce*ue,m=_s(r),_=ms(r),L=_s(r+=ue),I=ms(r),me.push(m-Se*_,_+Se*m,L+Se*I,I-Se*L,L,I);for(Ce=0;Ce<me.length;Ce+=2)m=me[Ce],_=me[Ce+1],me[Ce]=m*He+_*Ge+U,me[Ce+1]=m*$e+_*Ve+N;return me[Ce-2]=a,me[Ce-1]=l,me}}function Vp(s){var e=(s+"").replace(jp,function(k){var T=+k;return T<1e-4&&T>-1e-4?0:T}).match(Ip)||[],t=[],i=0,r=0,n=2/3,o=e.length,a=0,l="ERROR: malformed path: "+s,c,u,d,h,f,g,p,m,_,v,x,y,S,C,w,P=function(T,A,O,U){v=(O-T)/3,x=(U-A)/3,p.push(T+v,A+x,O-v,U-x,O,U)};if(!s||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(S=f,isNaN(e[c])?(f=e[c].toUpperCase(),g=f!==e[c]):c--,d=+e[c+1],h=+e[c+2],g&&(d+=i,h+=r),c||(m=d,_=h),f==="M")p&&(p.length<8?t.length-=1:a+=p.length,Ul(p)),i=m=d,r=_=h,p=[d,h],t.push(p),c+=2,f="L";else if(f==="C")p||(p=[0,0]),g||(i=r=0),p.push(d,h,i+e[c+3]*1,r+e[c+4]*1,i+=e[c+5]*1,r+=e[c+6]*1),c+=6;else if(f==="S")v=i,x=r,(S==="C"||S==="S")&&(v+=i-p[p.length-4],x+=r-p[p.length-3]),g||(i=r=0),p.push(v,x,d,h,i+=e[c+3]*1,r+=e[c+4]*1),c+=4;else if(f==="Q")v=i+(d-i)*n,x=r+(h-r)*n,g||(i=r=0),i+=e[c+3]*1,r+=e[c+4]*1,p.push(v,x,i+(d-i)*n,r+(h-r)*n,i,r),c+=4;else if(f==="T")v=i-p[p.length-4],x=r-p[p.length-3],p.push(i+v,r+x,d+(i+v*1.5-d)*n,h+(r+x*1.5-h)*n,i=d,r=h),c+=2;else if(f==="H")P(i,r,i=d,r),c+=1;else if(f==="V")P(i,r,i,r=d+(g?r-i:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(d=m,h=_,p.closed=!0),(f==="L"||On(i-d)>.5||On(r-h)>.5)&&(P(i,r,d,h),f==="L"&&(c+=2)),i=d,r=h;else if(f==="A"){if(C=e[c+4],w=e[c+5],v=e[c+6],x=e[c+7],u=7,C.length>1&&(C.length<3?(x=v,v=w,u--):(x=w,v=C.substr(2),u-=2),w=C.charAt(1),C=C.charAt(0)),y=Hp(i,r,+e[c+1],+e[c+2],+e[c+3],+C,+w,(g?i:0)+v*1,(g?r:0)+x*1),c+=u,y)for(u=0;u<y.length;u++)p.push(y[u]);i=p[p.length-2],r=p[p.length-1]}else console.log(l);return c=p.length,c<6?(t.pop(),c=0):Ul(p),t.totalPoints=a+c,t}function Bp(s){Fp(s[0])&&(s=[s]);var e="",t=s.length,i,r,n,o;for(r=0;r<t;r++){for(o=s[r],e+="M"+Oi(o[0])+","+Oi(o[1])+" C",i=o.length,n=2;n<i;n++)e+=Oi(o[n++])+","+Oi(o[n++])+" "+Oi(o[n++])+","+Oi(o[n++])+" "+Oi(o[n++])+","+Oi(o[n])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bt,ih,rh=function(){return bt||typeof window<"u"&&(bt=window.gsap)&&bt.registerPlugin&&bt},Hl=function(){bt=rh(),bt?(bt.registerEase("_CE",sn.create),ih=1):console.warn("Please gsap.registerPlugin(CustomEase)")},qp=1e20,vs=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Wp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Yp=/[cLlsSaAhHvVtTqQ]/g,Xp=function(e){var t=e.length,i=qp,r;for(r=1;r<t;r+=6)+e[r]<i&&(i=+e[r]);return i},Gp=function(e,t,i){!i&&i!==0&&(i=Math.max(+e[e.length-1],+e[1]));var r=+e[0]*-1,n=-i,o=e.length,a=1/(+e[o-2]+r),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Xp(e)+n:+e[o-1]+n),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+r)*a,e[c+1]=(+e[c+1]+n)*l},Kp=function s(e,t,i,r,n,o,a,l,c,u,d){var h=(e+i)/2,f=(t+r)/2,g=(i+n)/2,p=(r+o)/2,m=(n+a)/2,_=(o+l)/2,v=(h+g)/2,x=(f+p)/2,y=(g+m)/2,S=(p+_)/2,C=(v+y)/2,w=(x+S)/2,P=a-e,k=l-t,T=Math.abs((i-a)*k-(r-l)*P),A=Math.abs((n-a)*k-(o-l)*P),O;return u||(u=[{x:e,y:t},{x:a,y:l}],d=1),u.splice(d||u.length-1,0,{x:C,y:w}),(T+A)*(T+A)>c*(P*P+k*k)&&(O=u.length,s(e,t,h,f,v,x,C,w,c,u,d),s(C,w,y,S,m,_,a,l,c,u,d+1+(u.length-O))),u},sn=(function(){function s(t,i,r){ih||Hl(),this.id=t,this.setData(i,r)}var e=s.prototype;return e.setData=function(i,r){r=r||{},i=i||"0,0,1,1";var n=i.match(Wp),o=1,a=[],l=[],c=r.precision||1,u=c<=1,d,h,f,g,p,m,_,v,x;if(this.data=i,(Yp.test(i)||~i.indexOf("M")&&i.indexOf("C")<0)&&(n=Vp(i)[0]),d=n.length,d===4)n.unshift(0,0),n.push(1,1),d=8;else if((d-2)%6)throw"Invalid CustomEase";for((+n[0]!=0||+n[d-2]!=1)&&Gp(n,r.height,r.originY),this.segment=n,g=2;g<d;g+=6)h={x:+n[g-2],y:+n[g-1]},f={x:+n[g+4],y:+n[g+5]},a.push(h,f),Kp(h.x,h.y,+n[g],+n[g+1],+n[g+2],+n[g+3],f.x,f.y,1/(c*2e5),a,a.length-1);for(d=a.length,g=0;g<d;g++)_=a[g],v=a[g-1]||_,(_.x>v.x||v.y!==_.y&&v.x===_.x||_===v)&&_.x<=1?(v.cx=_.x-v.x,v.cy=_.y-v.y,v.n=_,v.nx=_.x,u&&g>1&&Math.abs(v.cy/v.cx-a[g-2].cy/a[g-2].cx)>2&&(u=0),v.cx<o&&(v.cx?o=v.cx:(v.cx=.001,g===d-1&&(v.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(g--,1),d--);if(d=1/o+1|0,p=1/d,m=0,_=a[0],u){for(g=0;g<d;g++)x=g*p,_.nx<x&&(_=a[++m]),h=_.y+(x-_.x)/_.cx*_.cy,l[g]={x,cx:p,y:h,cy:0,nx:9},g&&(l[g-1].cy=h-l[g-1].y);m=a[a.length-1],l[d-1].cy=m.y-h,l[d-1].cx=m.x-l[l.length-1].x}else{for(g=0;g<d;g++)_.nx<g*p&&(_=a[++m]),l[g]=_;m<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(y){var S=l[y*d|0]||l[d-1];return S.nx<y&&(S=S.n),S.y+(y-S.x)/S.cx*S.cy},this.ease.custom=this,this.id&&bt&&bt.registerEase(this.id,this.ease),this},e.getSVGData=function(i){return s.getSVGData(this,i)},s.create=function(i,r,n){return new s(i,r,n).ease},s.register=function(i){bt=i,Hl()},s.get=function(i){return bt.parseEase(i)},s.getSVGData=function(i,r){r=r||{};var n=r.width||100,o=r.height||100,a=r.x||0,l=(r.y||0)+o,c=bt.utils.toArray(r.path)[0],u,d,h,f,g,p,m,_,v,x;if(r.invert&&(o=-o,l=0),typeof i=="string"&&(i=bt.parseEase(i)),i.custom&&(i=i.custom),i instanceof s)u=Bp(Up([i.segment.slice(0)],n,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(r.precision||1)*200),f=1/m,m+=2,_=5/m,v=vs(a+f*n),x=vs(l+i(f)*-o),d=(x-l)/(v-a),h=2;h<m;h++)g=vs(a+h*f*n),p=vs(l+i(h*f)*-o),(Math.abs((p-x)/(g-v)-d)>_||h===m-1)&&(u.push(v,x),d=(p-x)/(g-v)),v=g,x=p;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},s})();sn.version="3.14.2";sn.headless=!0;rh()&&bt.registerPlugin(sn);function Jp(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function Zp(s,e,t){return e&&Jp(s.prototype,e),s}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ze,Is,Mt,Li,Ii,Br,nh,ir,En,sh,bi,Jt,oh,ah=function(){return Ze||typeof window<"u"&&(Ze=window.gsap)&&Ze.registerPlugin&&Ze},lh=1,Fr=[],ee=[],li=[],An=Date.now,oa=function(e,t){return t},Qp=function(){var e=En.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ee),r.push.apply(r,li),ee=i,li=r,oa=function(o,a){return t[o](a)}},Fi=function(e,t){return~li.indexOf(e)&&li[li.indexOf(e)+1][t]},zn=function(e){return!!~sh.indexOf(e)},ht=function(e,t,i,r,n){return e.addEventListener(t,i,{passive:r!==!1,capture:!!n})},ut=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},bs="scrollLeft",ys="scrollTop",aa=function(){return bi&&bi.isPressed||ee.cache++},ro=function(e,t){var i=function r(n){if(n||n===0){lh&&(Mt.history.scrollRestoration="manual");var o=bi&&bi.isPressed;n=r.v=Math.round(n)||(bi&&bi.iOS?1:0),e(n),r.cacheID=ee.cache,o&&oa("ss",n)}else(t||ee.cache!==r.cacheID||oa("ref"))&&(r.cacheID=ee.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},mt={s:bs,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ro(function(s){return arguments.length?Mt.scrollTo(s,Ue.sc()):Mt.pageXOffset||Li[bs]||Ii[bs]||Br[bs]||0})},Ue={s:ys,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mt,sc:ro(function(s){return arguments.length?Mt.scrollTo(mt.sc(),s):Mt.pageYOffset||Li[ys]||Ii[ys]||Br[ys]||0})},vt=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ze.utils.toArray)(e)[0]||(typeof e=="string"&&Ze.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},eg=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},qi=function(e,t){var i=t.s,r=t.sc;zn(e)&&(e=Li.scrollingElement||Ii);var n=ee.indexOf(e),o=r===Ue.sc?1:2;!~n&&(n=ee.push(e)-1),ee[n+o]||ht(e,"scroll",aa);var a=ee[n+o],l=a||(ee[n+o]=ro(Fi(e,i),!0)||(zn(e)?r:ro(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Ze.getProperty(e,"scrollBehavior")==="smooth"),l},la=function(e,t,i){var r=e,n=e,o=An(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,p){var m=An();p||m-o>l?(n=r,r=g,a=o,o=m):i?r+=g:r=n+(g-n)/(m-a)*(o-a)},d=function(){n=r=i?0:r,a=o=0},h=function(g){var p=a,m=n,_=An();return(g||g===0)&&g!==r&&u(g),o===a||_-a>c?0:(r+(i?m:-m))/((i?_:o)-p)*1e3};return{update:u,reset:d,getVelocity:h}},gn=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Vl=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},ch=function(){En=Ze.core.globals().ScrollTrigger,En&&En.core&&Qp()},uh=function(e){return Ze=e||ah(),!Is&&Ze&&typeof document<"u"&&document.body&&(Mt=window,Li=document,Ii=Li.documentElement,Br=Li.body,sh=[Mt,Li,Ii,Br],Ze.utils.clamp,oh=Ze.core.context||function(){},ir="onpointerenter"in Br?"pointer":"mouse",nh=Re.isTouch=Mt.matchMedia&&Mt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jt=Re.eventTypes=("ontouchstart"in Ii?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ii?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return lh=0},500),ch(),Is=1),Is};mt.op=Ue;ee.cache=0;var Re=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){Is||uh(Ze)||console.warn("Please gsap.registerPlugin(Observer)"),En||ch();var r=i.tolerance,n=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,h=i.onStopDelay,f=i.ignore,g=i.wheelSpeed,p=i.event,m=i.onDragStart,_=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,S=i.onRight,C=i.onLeft,w=i.onUp,P=i.onDown,k=i.onChangeX,T=i.onChangeY,A=i.onChange,O=i.onToggleX,U=i.onToggleY,N=i.onHover,L=i.onHoverEnd,I=i.onMove,R=i.ignoreCheck,K=i.isNormalizer,W=i.onGestureStart,b=i.onGestureEnd,G=i.onWheel,Oe=i.onEnable,me=i.onDisable,ue=i.onClick,Se=i.scrollSpeed,He=i.capture,$e=i.allowClicks,Ge=i.lockAxis,Ve=i.onLockAxis;this.target=a=vt(a)||Ii,this.vars=i,f&&(f=Ze.utils.toArray(f)),r=r||1e-9,n=n||0,g=g||1,Se=Se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Mt.getComputedStyle(Br).lineHeight)||22);var Ce,lt,ct,se,Ee,_t,Ct,$=this,kt=0,hi=0,$i=i.passive||!u&&i.passive!==!1,ke=qi(a,mt),di=qi(a,Ue),Ci=ke(),Yi=di(),Be=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Jt[0]==="pointerdown",ki=zn(a),Ae=a.ownerDocument||Li,Wt=[0,0,0],Nt=[0,0,0],fi=0,ln=function(){return fi=An()},Le=function(F,ae){return($.event=F)&&f&&eg(F.target,f)||ae&&Be&&F.pointerType!=="touch"||R&&R(F,ae)},hs=function(){$._vx.reset(),$._vy.reset(),lt.pause(),d&&d($)},pi=function(){var F=$.deltaX=Vl(Wt),ae=$.deltaY=Vl(Nt),E=Math.abs(F)>=r,B=Math.abs(ae)>=r;A&&(E||B)&&A($,F,ae,Wt,Nt),E&&(S&&$.deltaX>0&&S($),C&&$.deltaX<0&&C($),k&&k($),O&&$.deltaX<0!=kt<0&&O($),kt=$.deltaX,Wt[0]=Wt[1]=Wt[2]=0),B&&(P&&$.deltaY>0&&P($),w&&$.deltaY<0&&w($),T&&T($),U&&$.deltaY<0!=hi<0&&U($),hi=$.deltaY,Nt[0]=Nt[1]=Nt[2]=0),(se||ct)&&(I&&I($),ct&&(m&&ct===1&&m($),v&&v($),ct=0),se=!1),_t&&!(_t=!1)&&Ve&&Ve($),Ee&&(G($),Ee=!1),Ce=0},Cr=function(F,ae,E){Wt[E]+=F,Nt[E]+=ae,$._vx.update(F),$._vy.update(ae),c?Ce||(Ce=requestAnimationFrame(pi)):pi()},kr=function(F,ae){Ge&&!Ct&&($.axis=Ct=Math.abs(F)>Math.abs(ae)?"x":"y",_t=!0),Ct!=="y"&&(Wt[2]+=F,$._vx.update(F,!0)),Ct!=="x"&&(Nt[2]+=ae,$._vy.update(ae,!0)),c?Ce||(Ce=requestAnimationFrame(pi)):pi()},Pi=function(F){if(!Le(F,1)){F=gn(F,u);var ae=F.clientX,E=F.clientY,B=ae-$.x,j=E-$.y,q=$.isDragging;$.x=ae,$.y=E,(q||(B||j)&&(Math.abs($.startX-ae)>=n||Math.abs($.startY-E)>=n))&&(ct||(ct=q?2:1),q||($.isDragging=!0),kr(B,j))}},Xi=$.onPress=function(Y){Le(Y,1)||Y&&Y.button||($.axis=Ct=null,lt.pause(),$.isPressed=!0,Y=gn(Y),kt=hi=0,$.startX=$.x=Y.clientX,$.startY=$.y=Y.clientY,$._vx.reset(),$._vy.reset(),ht(K?a:Ae,Jt[1],Pi,$i,!0),$.deltaX=$.deltaY=0,x&&x($))},ie=$.onRelease=function(Y){if(!Le(Y,1)){ut(K?a:Ae,Jt[1],Pi,!0);var F=!isNaN($.y-$.startY),ae=$.isDragging,E=ae&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),B=gn(Y);!E&&F&&($._vx.reset(),$._vy.reset(),u&&$e&&Ze.delayedCall(.08,function(){if(An()-fi>300&&!Y.defaultPrevented){if(Y.target.click)Y.target.click();else if(Ae.createEvent){var j=Ae.createEvent("MouseEvents");j.initMouseEvent("click",!0,!0,Mt,1,B.screenX,B.screenY,B.clientX,B.clientY,!1,!1,!1,!1,0,null),Y.target.dispatchEvent(j)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&ae&&!K&&lt.restart(!0),ct&&pi(),_&&ae&&_($),y&&y($,E)}},Gi=function(F){return F.touches&&F.touches.length>1&&($.isGesturing=!0)&&W(F,$.isDragging)},Yt=function(){return($.isGesturing=!1)||b($)},Xt=function(F){if(!Le(F)){var ae=ke(),E=di();Cr((ae-Ci)*Se,(E-Yi)*Se,1),Ci=ae,Yi=E,d&&lt.restart(!0)}},Gt=function(F){if(!Le(F)){F=gn(F,u),G&&(Ee=!0);var ae=(F.deltaMode===1?l:F.deltaMode===2?Mt.innerHeight:1)*g;Cr(F.deltaX*ae,F.deltaY*ae,0),d&&!K&&lt.restart(!0)}},Ki=function(F){if(!Le(F)){var ae=F.clientX,E=F.clientY,B=ae-$.x,j=E-$.y;$.x=ae,$.y=E,se=!0,d&&lt.restart(!0),(B||j)&&kr(B,j)}},Pr=function(F){$.event=F,N($)},gi=function(F){$.event=F,L($)},cn=function(F){return Le(F)||gn(F,u)&&ue($)};lt=$._dc=Ze.delayedCall(h||.25,hs).pause(),$.deltaX=$.deltaY=0,$._vx=la(0,50,!0),$._vy=la(0,50,!0),$.scrollX=ke,$.scrollY=di,$.isDragging=$.isGesturing=$.isPressed=!1,oh(this),$.enable=function(Y){return $.isEnabled||(ht(ki?Ae:a,"scroll",aa),o.indexOf("scroll")>=0&&ht(ki?Ae:a,"scroll",Xt,$i,He),o.indexOf("wheel")>=0&&ht(a,"wheel",Gt,$i,He),(o.indexOf("touch")>=0&&nh||o.indexOf("pointer")>=0)&&(ht(a,Jt[0],Xi,$i,He),ht(Ae,Jt[2],ie),ht(Ae,Jt[3],ie),$e&&ht(a,"click",ln,!0,!0),ue&&ht(a,"click",cn),W&&ht(Ae,"gesturestart",Gi),b&&ht(Ae,"gestureend",Yt),N&&ht(a,ir+"enter",Pr),L&&ht(a,ir+"leave",gi),I&&ht(a,ir+"move",Ki)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=se=ct=!1,$._vx.reset(),$._vy.reset(),Ci=ke(),Yi=di(),Y&&Y.type&&Xi(Y),Oe&&Oe($)),$},$.disable=function(){$.isEnabled&&(Fr.filter(function(Y){return Y!==$&&zn(Y.target)}).length||ut(ki?Ae:a,"scroll",aa),$.isPressed&&($._vx.reset(),$._vy.reset(),ut(K?a:Ae,Jt[1],Pi,!0)),ut(ki?Ae:a,"scroll",Xt,He),ut(a,"wheel",Gt,He),ut(a,Jt[0],Xi,He),ut(Ae,Jt[2],ie),ut(Ae,Jt[3],ie),ut(a,"click",ln,!0),ut(a,"click",cn),ut(Ae,"gesturestart",Gi),ut(Ae,"gestureend",Yt),ut(a,ir+"enter",Pr),ut(a,ir+"leave",gi),ut(a,ir+"move",Ki),$.isEnabled=$.isPressed=$.isDragging=!1,me&&me($))},$.kill=$.revert=function(){$.disable();var Y=Fr.indexOf($);Y>=0&&Fr.splice(Y,1),bi===$&&(bi=0)},Fr.push($),K&&zn(a)&&(bi=$),$.enable(p)},Zp(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Re.version="3.14.2";Re.create=function(s){return new Re(s)};Re.register=uh;Re.getAll=function(){return Fr.slice()};Re.getById=function(s){return Fr.filter(function(e){return e.vars.id===s})[0]};ah()&&Ze.registerPlugin(Re);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var z,Rr,Q,ge,At,ce,qa,no,Kn,Mn,yn,xs,rt,mo,ca,ft,Bl,ql,Lr,hh,zo,dh,dt,ua,fh,ph,Ai,ha,Wa,qr,Ya,Dn,da,Mo,ws=1,nt=Date.now,Do=nt(),qt=0,xn=0,Wl=function(e,t,i){var r=Ot(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Yl=function(e,t){return t&&(!Ot(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},tg=function s(){return xn&&requestAnimationFrame(s)},Xl=function(){return mo=1},Gl=function(){return mo=0},ii=function(e){return e},wn=function(e){return Math.round(e*1e5)/1e5||0},gh=function(){return typeof window<"u"},mh=function(){return z||gh()&&(z=window.gsap)&&z.registerPlugin&&z},mr=function(e){return!!~qa.indexOf(e)},_h=function(e){return(e==="Height"?Ya:Q["inner"+e])||At["client"+e]||ce["client"+e]},vh=function(e){return Fi(e,"getBoundingClientRect")||(mr(e)?function(){return Hs.width=Q.innerWidth,Hs.height=Ya,Hs}:function(){return vi(e)})},ig=function(e,t,i){var r=i.d,n=i.d2,o=i.a;return(o=Fi(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?_h(n):e["client"+n])||0}},rg=function(e,t){return!t||~li.indexOf(e)?vh(e):function(){return Hs}},oi=function(e,t){var i=t.s,r=t.d2,n=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Fi(e,i))?o()-vh(e)()[n]:mr(e)?(At[i]||ce[i])-_h(r):e[i]-e["offset"+r])},Ss=function(e,t){for(var i=0;i<Lr.length;i+=3)(!t||~t.indexOf(Lr[i+1]))&&e(Lr[i],Lr[i+1],Lr[i+2])},Ot=function(e){return typeof e=="string"},ot=function(e){return typeof e=="function"},Sn=function(e){return typeof e=="number"},rr=function(e){return typeof e=="object"},mn=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ro=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Mr=Math.abs,bh="left",yh="top",Xa="right",Ga="bottom",dr="width",fr="height",Rn="Right",Ln="Left",In="Top",jn="Bottom",Ie="padding",Ut="margin",Qr="Width",Ka="Height",Fe="px",Ht=function(e){return Q.getComputedStyle(e)},ng=function(e){var t=Ht(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Kl=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},vi=function(e,t){var i=t&&Ht(e)[ca]!=="matrix(1, 0, 0, 1, 0, 0)"&&z.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},so=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},xh=function(e){var t=[],i=e.labels,r=e.duration(),n;for(n in i)t.push(i[n]/r);return t},sg=function(e){return function(t){return z.utils.snap(xh(e),t)}},Ja=function(e){var t=z.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,n){return r-n});return i?function(r,n,o){o===void 0&&(o=.001);var a;if(!n)return t(r);if(n>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,n,o){o===void 0&&(o=.001);var a=t(r);return!n||Math.abs(a-r)<o||a-r<0==n<0?a:t(n<0?r-e:r+e)}},og=function(e){return function(t,i){return Ja(xh(e))(t,i.direction)}},$s=function(e,t,i,r){return i.split(",").forEach(function(n){return e(t,n,r)})},Ye=function(e,t,i,r,n){return e.addEventListener(t,i,{passive:!r,capture:!!n})},We=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Cs=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Jl={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ks={toggleActions:"play",anticipatePin:0},oo={top:0,left:0,center:.5,bottom:1,right:1},js=function(e,t){if(Ot(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in oo?oo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ps=function(e,t,i,r,n,o,a,l){var c=n.startColor,u=n.endColor,d=n.fontSize,h=n.indent,f=n.fontWeight,g=ge.createElement("div"),p=mr(i)||Fi(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=p?ce:i,v=e.indexOf("start")!==-1,x=v?c:u,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(y+=(r===Ue?Xa:Ga)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+r.op.d2],Ns(g,0,r,v),g},Ns=function(e,t,i,r){var n={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,n[i.a+"Percent"]=r?-100:0,n[i.a]=r?"1px":0,n["border"+o+Qr]=1,n["border"+a+Qr]=0,n[i.p]=t+"px",z.set(e,n)},J=[],fa={},Jn,Zl=function(){return nt()-qt>34&&(Jn||(Jn=requestAnimationFrame(xi)))},Dr=function(){(!dt||!dt.isPressed||dt.startX>ce.clientWidth)&&(ee.cache++,dt?Jn||(Jn=requestAnimationFrame(xi)):xi(),qt||vr("scrollStart"),qt=nt())},Lo=function(){ph=Q.innerWidth,fh=Q.innerHeight},$n=function(e){ee.cache++,(e===!0||!rt&&!dh&&!ge.fullscreenElement&&!ge.webkitFullscreenElement&&(!ua||ph!==Q.innerWidth||Math.abs(Q.innerHeight-fh)>Q.innerHeight*.25))&&no.restart(!0)},_r={},ag=[],wh=function s(){return We(Z,"scrollEnd",s)||or(!0)},vr=function(e){return _r[e]&&_r[e].map(function(t){return t()})||ag},Tt=[],Sh=function(e){for(var t=0;t<Tt.length;t+=5)(!e||Tt[t+4]&&Tt[t+4].query===e)&&(Tt[t].style.cssText=Tt[t+1],Tt[t].getBBox&&Tt[t].setAttribute("transform",Tt[t+2]||""),Tt[t+3].uncache=1)},$h=function(){return ee.forEach(function(e){return ot(e)&&++e.cacheID&&(e.rec=e())})},Za=function(e,t){var i;for(ft=0;ft<J.length;ft++)i=J[ft],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Dn=!0,t&&Sh(t),t||vr("revert")},Ch=function(e,t){ee.cache++,(t||!pt)&&ee.forEach(function(i){return ot(i)&&i.cacheID++&&(i.rec=0)}),Ot(e)&&(Q.history.scrollRestoration=Wa=e)},pt,pr=0,Ql,lg=function(){if(Ql!==pr){var e=Ql=pr;requestAnimationFrame(function(){return e===pr&&or(!0)})}},kh=function(){ce.appendChild(qr),Ya=!dt&&qr.offsetHeight||Q.innerHeight,ce.removeChild(qr)},ec=function(e){return Kn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},or=function(e,t){if(At=ge.documentElement,ce=ge.body,qa=[Q,ge,At,ce],qt&&!e&&!Dn){Ye(Z,"scrollEnd",wh);return}kh(),pt=Z.isRefreshing=!0,Dn||$h();var i=vr("refreshInit");hh&&Z.sort(),t||Za(),ee.forEach(function(r){ot(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),J.slice(0).forEach(function(r){return r.refresh()}),Dn=!1,J.forEach(function(r){if(r._subPinOffset&&r.pin){var n=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[n];r.revert(!0,1),r.adjustPinSpacing(r.pin[n]-o),r.refresh()}}),da=1,ec(!0),J.forEach(function(r){var n=oi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>n,a=r._startClamp&&r.start>=n;(o||a)&&r.setPositions(a?n-1:r.start,o?Math.max(a?n:r.start+1,n):r.end,!0)}),ec(!1),da=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ee.forEach(function(r){ot(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Ch(Wa,1),no.pause(),pr++,pt=2,xi(2),J.forEach(function(r){return ot(r.vars.onRefresh)&&r.vars.onRefresh(r)}),pt=Z.isRefreshing=!1,vr("refresh")},pa=0,Fs=1,Nn,xi=function(e){if(e===2||!pt&&!Dn){Z.isUpdating=!0,Nn&&Nn.update(0);var t=J.length,i=nt(),r=i-Do>=50,n=t&&J[0].scroll();if(Fs=pa>n?-1:1,pt||(pa=n),r&&(qt&&!mo&&i-qt>200&&(qt=0,vr("scrollEnd")),yn=Do,Do=i),Fs<0){for(ft=t;ft-- >0;)J[ft]&&J[ft].update(0,r);Fs=1}else for(ft=0;ft<t;ft++)J[ft]&&J[ft].update(0,r);Z.isUpdating=!1}Jn=0},ga=[bh,yh,Ga,Xa,Ut+jn,Ut+Rn,Ut+In,Ut+Ln,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Us=ga.concat([dr,fr,"boxSizing","max"+Qr,"max"+Ka,"position",Ut,Ie,Ie+In,Ie+Rn,Ie+jn,Ie+Ln]),cg=function(e,t,i){Wr(i);var r=e._gsap;if(r.spacerIsNative)Wr(r.spacerState);else if(e._gsap.swappedIn){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}e._gsap.swappedIn=!1},Io=function(e,t,i,r){if(!e._gsap.swappedIn){for(var n=ga.length,o=t.style,a=e.style,l;n--;)l=ga[n],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Ga]=a[Xa]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[dr]=so(e,mt)+Fe,o[fr]=so(e,Ue)+Fe,o[Ie]=a[Ut]=a[yh]=a[bh]="0",Wr(r),a[dr]=a["max"+Qr]=i[dr],a[fr]=a["max"+Ka]=i[fr],a[Ie]=i[Ie],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ug=/([A-Z])/g,Wr=function(e){if(e){var t=e.t.style,i=e.length,r=0,n,o;for((e.t._gsap||z.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],n=e[r],o?t[n]=o:t[n]&&t.removeProperty(n.replace(ug,"-$1").toLowerCase())}},Ts=function(e){for(var t=Us.length,i=e.style,r=[],n=0;n<t;n++)r.push(Us[n],i[Us[n]]);return r.t=e,r},hg=function(e,t,i){for(var r=[],n=e.length,o=i?8:0,a;o<n;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Hs={left:0,top:0},tc=function(e,t,i,r,n,o,a,l,c,u,d,h,f,g){ot(e)&&(e=e(l)),Ot(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?js("0"+e.substr(3),i):0));var p=f?f.time():0,m,_,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Sn(e))f&&(e=z.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),a&&Ns(a,i,r,!0);else{ot(t)&&(t=t(l));var x=(e||"0").split(" "),y,S,C,w;v=vt(t,l)||ce,y=vi(v)||{},(!y||!y.left&&!y.top)&&Ht(v).display==="none"&&(w=v.style.display,v.style.display="block",y=vi(v),w?v.style.display=w:v.style.removeProperty("display")),S=js(x[0],y[r.d]),C=js(x[1]||"0",i),e=y[r.p]-c[r.p]-u+S+n-C,a&&Ns(a,C,r,i-C<20||a._isStart&&C>20),i-=i-C}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+i,k=o._isStart;m="scroll"+r.d2,Ns(o,P,r,k&&P>20||!k&&(d?Math.max(ce[m],At[m]):o.parentNode[m])<=P+1),d&&(c=vi(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+Fe))}return f&&v&&(m=vi(v),f.seek(h),_=vi(v),f._caScrollDist=m[r.p]-_[r.p],e=e/f._caScrollDist*h),f&&f.seek(p),f?e:Math.round(e)},dg=/(webkit|moz|length|cssText|inset)/i,ic=function(e,t,i,r){if(e.parentNode!==t){var n=e.style,o,a;if(t===ce){e._stOrig=n.cssText,a=Ht(e);for(o in a)!+o&&!dg.test(o)&&a[o]&&typeof n[o]=="string"&&o!=="0"&&(n[o]=a[o]);n.top=i,n.left=r}else n.cssText=e._stOrig;z.core.getCache(e).uncache=1,t.appendChild(e)}},Ph=function(e,t,i){var r=t,n=r;return function(o){var a=Math.round(e());return a!==r&&a!==n&&Math.abs(a-r)>3&&Math.abs(a-n)>3&&(o=a,i&&i()),n=r,r=Math.round(o),r}},Os=function(e,t,i){var r={};r[t.p]="+="+i,z.set(e,r)},rc=function(e,t){var i=qi(e,t),r="_scroll"+t.p2,n=function o(a,l,c,u,d){var h=o.tween,f=l.onComplete,g={};c=c||i();var p=Ph(i,c,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return p(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&xi()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=z.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},Ye(e,"wheel",i.wheelHandler),Z.isTouch&&Ye(e,"touchmove",i.wheelHandler),n},Z=(function(){function s(t,i){Rr||s.register(z)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ha(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xn){this.update=this.refresh=this.kill=ii;return}i=Kl(Ot(i)||Sn(i)||i.nodeType?{trigger:i}:i,ks);var n=i,o=n.onUpdate,a=n.toggleClass,l=n.id,c=n.onToggle,u=n.onRefresh,d=n.scrub,h=n.trigger,f=n.pin,g=n.pinSpacing,p=n.invalidateOnRefresh,m=n.anticipatePin,_=n.onScrubComplete,v=n.onSnapComplete,x=n.once,y=n.snap,S=n.pinReparent,C=n.pinSpacer,w=n.containerAnimation,P=n.fastScrollEnd,k=n.preventOverlaps,T=i.horizontal||i.containerAnimation&&i.horizontal!==!1?mt:Ue,A=!d&&d!==0,O=vt(i.scroller||Q),U=z.core.getCache(O),N=mr(O),L=("pinType"in i?i.pinType:Fi(O,"pinType")||N&&"fixed")==="fixed",I=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],R=A&&i.toggleActions.split(" "),K="markers"in i?i.markers:ks.markers,W=N?0:parseFloat(Ht(O)["border"+T.p2+Qr])||0,b=this,G=i.onRefreshInit&&function(){return i.onRefreshInit(b)},Oe=ig(O,N,T),me=rg(O,N),ue=0,Se=0,He=0,$e=qi(O,T),Ge,Ve,Ce,lt,ct,se,Ee,_t,Ct,$,kt,hi,$i,ke,di,Ci,Yi,Be,ki,Ae,Wt,Nt,fi,ln,Le,hs,pi,Cr,kr,Pi,Xi,ie,Gi,Yt,Xt,Gt,Ki,Pr,gi;if(b._startClamp=b._endClamp=!1,b._dir=T,m*=45,b.scroller=O,b.scroll=w?w.time.bind(w):$e,lt=$e(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(hh=1,i.refreshPriority===-9999&&(Nn=b)),U.tweenScroll=U.tweenScroll||{top:rc(O,Ue),left:rc(O,mt)},b.tweenTo=Ge=U.tweenScroll[T.p],b.scrubDuration=function(E){Gi=Sn(E)&&E,Gi?ie?ie.duration(E):ie=z.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Gi,paused:!0,onComplete:function(){return _&&_(b)}}):(ie&&ie.progress(1).kill(),ie=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(d),Pi=0,l||(l=r.vars.id)),y&&((!rr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ce.style&&z.set(N?[ce,At]:O,{scrollBehavior:"auto"}),ee.forEach(function(E){return ot(E)&&E.target===(N?ge.scrollingElement||At:O)&&(E.smooth=!1)}),Ce=ot(y.snapTo)?y.snapTo:y.snapTo==="labels"?sg(r):y.snapTo==="labelsDirectional"?og(r):y.directional!==!1?function(E,B){return Ja(y.snapTo)(E,nt()-Se<500?0:B.direction)}:z.utils.snap(y.snapTo),Yt=y.duration||{min:.1,max:2},Yt=rr(Yt)?Mn(Yt.min,Yt.max):Mn(Yt,Yt),Xt=z.delayedCall(y.delay||Gi/2||.1,function(){var E=$e(),B=nt()-Se<500,j=Ge.tween;if((B||Math.abs(b.getVelocity())<10)&&!j&&!mo&&ue!==E){var q=(E-se)/ke,qe=r&&!A?r.totalProgress():q,re=B?0:(qe-Xi)/(nt()-yn)*1e3||0,ze=z.utils.clamp(-q,1-q,Mr(re/2)*re/.185),et=q+(y.inertia===!1?0:ze),Pe,_e,he=y,Kt=he.onStart,be=he.onInterrupt,Pt=he.onComplete;if(Pe=Ce(et,b),Sn(Pe)||(Pe=et),_e=Math.max(0,Math.round(se+Pe*ke)),E<=Ee&&E>=se&&_e!==E){if(j&&!j._initted&&j.data<=Mr(_e-E))return;y.inertia===!1&&(ze=Pe-q),Ge(_e,{duration:Yt(Mr(Math.max(Mr(et-qe),Mr(Pe-qe))*.185/re/.05||0)),ease:y.ease||"power3",data:Mr(_e-E),onInterrupt:function(){return Xt.restart(!0)&&be&&be(b)},onComplete:function(){b.update(),ue=$e(),r&&!A&&(ie?ie.resetTo("totalProgress",Pe,r._tTime/r._tDur):r.progress(Pe)),Pi=Xi=r&&!A?r.totalProgress():b.progress,v&&v(b),Pt&&Pt(b)}},E,ze*ke,_e-E-ze*ke),Kt&&Kt(b,Ge.tween)}}else b.isActive&&ue!==E&&Xt.restart(!0)}).pause()),l&&(fa[l]=b),h=b.trigger=vt(h||f!==!0&&f),gi=h&&h._gsap&&h._gsap.stRevert,gi&&(gi=gi(b)),f=f===!0?h:vt(f),Ot(a)&&(a={targets:h,className:a}),f&&(g===!1||g===Ut||(g=!g&&f.parentNode&&f.parentNode.style&&Ht(f.parentNode).display==="flex"?!1:Ie),b.pin=f,Ve=z.core.getCache(f),Ve.spacer?di=Ve.pinState:(C&&(C=vt(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),Ve.spacerIsNative=!!C,C&&(Ve.spacerState=Ts(C))),Ve.spacer=Be=C||ge.createElement("div"),Be.classList.add("pin-spacer"),l&&Be.classList.add("pin-spacer-"+l),Ve.pinState=di=Ts(f)),i.force3D!==!1&&z.set(f,{force3D:!0}),b.spacer=Be=Ve.spacer,kr=Ht(f),ln=kr[g+T.os2],Ae=z.getProperty(f),Wt=z.quickSetter(f,T.a,Fe),Io(f,Be,kr),Yi=Ts(f)),K){hi=rr(K)?Kl(K,Jl):Jl,$=Ps("scroller-start",l,O,T,hi,0),kt=Ps("scroller-end",l,O,T,hi,0,$),ki=$["offset"+T.op.d2];var cn=vt(Fi(O,"content")||O);_t=this.markerStart=Ps("start",l,cn,T,hi,ki,0,w),Ct=this.markerEnd=Ps("end",l,cn,T,hi,ki,0,w),w&&(Pr=z.quickSetter([_t,Ct],T.a,Fe)),!L&&!(li.length&&Fi(O,"fixedMarkers")===!0)&&(ng(N?ce:O),z.set([$,kt],{force3D:!0}),hs=z.quickSetter($,T.a,Fe),Cr=z.quickSetter(kt,T.a,Fe))}if(w){var Y=w.vars.onUpdate,F=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){b.update(0,0,1),Y&&Y.apply(w,F||[])})}if(b.previous=function(){return J[J.indexOf(b)-1]},b.next=function(){return J[J.indexOf(b)+1]},b.revert=function(E,B){if(!B)return b.kill(!0);var j=E!==!1||!b.enabled,q=rt;j!==b.isReverted&&(j&&(Gt=Math.max($e(),b.scroll.rec||0),He=b.progress,Ki=r&&r.progress()),_t&&[_t,Ct,$,kt].forEach(function(qe){return qe.style.display=j?"none":"block"}),j&&(rt=b,b.update(j)),f&&(!S||!b.isActive)&&(j?cg(f,Be,di):Io(f,Be,Ht(f),Le)),j||b.update(j),rt=q,b.isReverted=j)},b.refresh=function(E,B,j,q){if(!((rt||!b.enabled)&&!B)){if(f&&E&&qt){Ye(s,"scrollEnd",wh);return}!pt&&G&&G(b),rt=b,Ge.tween&&!j&&(Ge.tween.kill(),Ge.tween=0),ie&&ie.pause(),p&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ti){return Ti.vars.immediateRender&&Ti.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var qe=Oe(),re=me(),ze=w?w.duration():oi(O,T),et=ke<=.01||!ke,Pe=0,_e=q||0,he=rr(j)?j.end:i.end,Kt=i.endTrigger||h,be=rr(j)?j.start:i.start||(i.start===0||!h?0:f?"0 0":"0 100%"),Pt=b.pinnedContainer=i.pinnedContainer&&vt(i.pinnedContainer,b),Zt=h&&Math.max(0,J.indexOf(b))||0,Ke=Zt,Je,tt,Ji,ds,it,Ne,Qt,wo,nl,un,ei,hn,fs;for(K&&rr(j)&&(hn=z.getProperty($,T.p),fs=z.getProperty(kt,T.p));Ke-- >0;)Ne=J[Ke],Ne.end||Ne.refresh(0,1)||(rt=b),Qt=Ne.pin,Qt&&(Qt===h||Qt===f||Qt===Pt)&&!Ne.isReverted&&(un||(un=[]),un.unshift(Ne),Ne.revert(!0,!0)),Ne!==J[Ke]&&(Zt--,Ke--);for(ot(be)&&(be=be(b)),be=Wl(be,"start",b),se=tc(be,h,qe,T,$e(),_t,$,b,re,W,L,ze,w,b._startClamp&&"_startClamp")||(f?-.001:0),ot(he)&&(he=he(b)),Ot(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(Ot(be)?be.split(" ")[0]:"")+he:(Pe=js(he.substr(2),qe),he=Ot(be)?be:(w?z.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,se):se)+Pe,Kt=h)),he=Wl(he,"end",b),Ee=Math.max(se,tc(he||(Kt?"100% 0":ze),Kt,qe,T,$e()+Pe,Ct,kt,b,re,W,L,ze,w,b._endClamp&&"_endClamp"))||-.001,Pe=0,Ke=Zt;Ke--;)Ne=J[Ke]||{},Qt=Ne.pin,Qt&&Ne.start-Ne._pinPush<=se&&!w&&Ne.end>0&&(Je=Ne.end-(b._startClamp?Math.max(0,Ne.start):Ne.start),(Qt===h&&Ne.start-Ne._pinPush<se||Qt===Pt)&&isNaN(be)&&(Pe+=Je*(1-Ne.progress)),Qt===f&&(_e+=Je));if(se+=Pe,Ee+=Pe,b._startClamp&&(b._startClamp+=Pe),b._endClamp&&!pt&&(b._endClamp=Ee||-.001,Ee=Math.min(Ee,oi(O,T))),ke=Ee-se||(se-=.01)&&.001,et&&(He=z.utils.clamp(0,1,z.utils.normalize(se,Ee,Gt))),b._pinPush=_e,_t&&Pe&&(Je={},Je[T.a]="+="+Pe,Pt&&(Je[T.p]="-="+$e()),z.set([_t,Ct],Je)),f&&!(da&&b.end>=oi(O,T)))Je=Ht(f),ds=T===Ue,Ji=$e(),Nt=parseFloat(Ae(T.a))+_e,!ze&&Ee>1&&(ei=(N?ge.scrollingElement||At:O).style,ei={style:ei,value:ei["overflow"+T.a.toUpperCase()]},N&&Ht(ce)["overflow"+T.a.toUpperCase()]!=="scroll"&&(ei.style["overflow"+T.a.toUpperCase()]="scroll")),Io(f,Be,Je),Yi=Ts(f),tt=vi(f,!0),wo=L&&qi(O,ds?mt:Ue)(),g?(Le=[g+T.os2,ke+_e+Fe],Le.t=Be,Ke=g===Ie?so(f,T)+ke+_e:0,Ke&&(Le.push(T.d,Ke+Fe),Be.style.flexBasis!=="auto"&&(Be.style.flexBasis=Ke+Fe)),Wr(Le),Pt&&J.forEach(function(Ti){Ti.pin===Pt&&Ti.vars.pinSpacing!==!1&&(Ti._subPinOffset=!0)}),L&&$e(Gt)):(Ke=so(f,T),Ke&&Be.style.flexBasis!=="auto"&&(Be.style.flexBasis=Ke+Fe)),L&&(it={top:tt.top+(ds?Ji-se:wo)+Fe,left:tt.left+(ds?wo:Ji-se)+Fe,boxSizing:"border-box",position:"fixed"},it[dr]=it["max"+Qr]=Math.ceil(tt.width)+Fe,it[fr]=it["max"+Ka]=Math.ceil(tt.height)+Fe,it[Ut]=it[Ut+In]=it[Ut+Rn]=it[Ut+jn]=it[Ut+Ln]="0",it[Ie]=Je[Ie],it[Ie+In]=Je[Ie+In],it[Ie+Rn]=Je[Ie+Rn],it[Ie+jn]=Je[Ie+jn],it[Ie+Ln]=Je[Ie+Ln],Ci=hg(di,it,S),pt&&$e(0)),r?(nl=r._initted,zo(1),r.render(r.duration(),!0,!0),fi=Ae(T.a)-Nt+ke+_e,pi=Math.abs(ke-fi)>1,L&&pi&&Ci.splice(Ci.length-2,2),r.render(0,!0,!0),nl||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),zo(0)):fi=ke,ei&&(ei.value?ei.style["overflow"+T.a.toUpperCase()]=ei.value:ei.style.removeProperty("overflow-"+T.a));else if(h&&$e()&&!w)for(tt=h.parentNode;tt&&tt!==ce;)tt._pinOffset&&(se-=tt._pinOffset,Ee-=tt._pinOffset),tt=tt.parentNode;un&&un.forEach(function(Ti){return Ti.revert(!1,!0)}),b.start=se,b.end=Ee,lt=ct=pt?Gt:$e(),!w&&!pt&&(lt<Gt&&$e(Gt),b.scroll.rec=0),b.revert(!1,!0),Se=nt(),Xt&&(ue=-1,Xt.restart(!0)),rt=0,r&&A&&(r._initted||Ki)&&r.progress()!==Ki&&r.progress(Ki||0,!0).render(r.time(),!0,!0),(et||He!==b.progress||w||p||r&&!r._initted)&&(r&&!A&&(r._initted||He||r.vars.immediateRender!==!1)&&r.totalProgress(w&&se<-.001&&!He?z.utils.normalize(se,Ee,0):He,!0),b.progress=et||(lt-se)/ke===He?0:He),f&&g&&(Be._pinOffset=Math.round(b.progress*fi)),ie&&ie.invalidate(),isNaN(hn)||(hn-=z.getProperty($,T.p),fs-=z.getProperty(kt,T.p),Os($,T,hn),Os(_t,T,hn-(q||0)),Os(kt,T,fs),Os(Ct,T,fs-(q||0))),et&&!pt&&b.update(),u&&!pt&&!$i&&($i=!0,u(b),$i=!1)}},b.getVelocity=function(){return($e()-ct)/(nt()-yn)*1e3||0},b.endAnimation=function(){mn(b.callbackAnimation),r&&(ie?ie.progress(1):r.paused()?A||mn(r,b.direction<0,1):mn(r,r.reversed()))},b.labelToScroll=function(E){return r&&r.labels&&(se||b.refresh()||se)+r.labels[E]/r.duration()*ke||0},b.getTrailing=function(E){var B=J.indexOf(b),j=b.direction>0?J.slice(0,B).reverse():J.slice(B+1);return(Ot(E)?j.filter(function(q){return q.vars.preventOverlaps===E}):j).filter(function(q){return b.direction>0?q.end<=se:q.start>=Ee})},b.update=function(E,B,j){if(!(w&&!j&&!E)){var q=pt===!0?Gt:b.scroll(),qe=E?0:(q-se)/ke,re=qe<0?0:qe>1?1:qe||0,ze=b.progress,et,Pe,_e,he,Kt,be,Pt,Zt;if(B&&(ct=lt,lt=w?$e():q,y&&(Xi=Pi,Pi=r&&!A?r.totalProgress():re)),m&&f&&!rt&&!ws&&qt&&(!re&&se<q+(q-ct)/(nt()-yn)*m?re=1e-4:re===1&&Ee>q+(q-ct)/(nt()-yn)*m&&(re=.9999)),re!==ze&&b.enabled){if(et=b.isActive=!!re&&re<1,Pe=!!ze&&ze<1,be=et!==Pe,Kt=be||!!re!=!!ze,b.direction=re>ze?1:-1,b.progress=re,Kt&&!rt&&(_e=re&&!ze?0:re===1?1:ze===1?2:3,A&&(he=!be&&R[_e+1]!=="none"&&R[_e+1]||R[_e],Zt=r&&(he==="complete"||he==="reset"||he in r))),k&&(be||Zt)&&(Zt||d||!r)&&(ot(k)?k(b):b.getTrailing(k).forEach(function(Ji){return Ji.endAnimation()})),A||(ie&&!rt&&!ws?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",re,r._tTime/r._tDur):(ie.vars.totalProgress=re,ie.invalidate().restart())):r&&r.totalProgress(re,!!(rt&&(Se||E)))),f){if(E&&g&&(Be.style[g+T.os2]=ln),!L)Wt(wn(Nt+fi*re));else if(Kt){if(Pt=!E&&re>ze&&Ee+1>q&&q+1>=oi(O,T),S)if(!E&&(et||Pt)){var Ke=vi(f,!0),Je=q-se;ic(f,ce,Ke.top+(T===Ue?Je:0)+Fe,Ke.left+(T===Ue?0:Je)+Fe)}else ic(f,Be);Wr(et||Pt?Ci:Yi),pi&&re<1&&et||Wt(Nt+(re===1&&!Pt?fi:0))}}y&&!Ge.tween&&!rt&&!ws&&Xt.restart(!0),a&&(be||x&&re&&(re<1||!Mo))&&Kn(a.targets).forEach(function(Ji){return Ji.classList[et||x?"add":"remove"](a.className)}),o&&!A&&!E&&o(b),Kt&&!rt?(A&&(Zt&&(he==="complete"?r.pause().totalProgress(1):he==="reset"?r.restart(!0).pause():he==="restart"?r.restart(!0):r[he]()),o&&o(b)),(be||!Mo)&&(c&&be&&Ro(b,c),I[_e]&&Ro(b,I[_e]),x&&(re===1?b.kill(!1,1):I[_e]=0),be||(_e=re===1?1:3,I[_e]&&Ro(b,I[_e]))),P&&!et&&Math.abs(b.getVelocity())>(Sn(P)?P:2500)&&(mn(b.callbackAnimation),ie?ie.progress(1):mn(r,he==="reverse"?1:!re,1))):A&&o&&!rt&&o(b)}if(Cr){var tt=w?q/w.duration()*(w._caScrollDist||0):q;hs(tt+($._isFlipped?1:0)),Cr(tt)}Pr&&Pr(-q/w.duration()*(w._caScrollDist||0))}},b.enable=function(E,B){b.enabled||(b.enabled=!0,Ye(O,"resize",$n),N||Ye(O,"scroll",Dr),G&&Ye(s,"refreshInit",G),E!==!1&&(b.progress=He=0,lt=ct=ue=$e()),B!==!1&&b.refresh())},b.getTween=function(E){return E&&Ge?Ge.tween:ie},b.setPositions=function(E,B,j,q){if(w){var qe=w.scrollTrigger,re=w.duration(),ze=qe.end-qe.start;E=qe.start+ze*E/re,B=qe.start+ze*B/re}b.refresh(!1,!1,{start:Yl(E,j&&!!b._startClamp),end:Yl(B,j&&!!b._endClamp)},q),b.update()},b.adjustPinSpacing=function(E){if(Le&&E){var B=Le.indexOf(T.d)+1;Le[B]=parseFloat(Le[B])+E+Fe,Le[1]=parseFloat(Le[1])+E+Fe,Wr(Le)}},b.disable=function(E,B){if(E!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,B||ie&&ie.pause(),Gt=0,Ve&&(Ve.uncache=1),G&&We(s,"refreshInit",G),Xt&&(Xt.pause(),Ge.tween&&Ge.tween.kill()&&(Ge.tween=0)),!N)){for(var j=J.length;j--;)if(J[j].scroller===O&&J[j]!==b)return;We(O,"resize",$n),N||We(O,"scroll",Dr)}},b.kill=function(E,B){b.disable(E,B),ie&&!B&&ie.kill(),l&&delete fa[l];var j=J.indexOf(b);j>=0&&J.splice(j,1),j===ft&&Fs>0&&ft--,j=0,J.forEach(function(q){return q.scroller===b.scroller&&(j=1)}),j||pt||(b.scroll.rec=0),r&&(r.scrollTrigger=null,E&&r.revert({kill:!1}),B||r.kill()),_t&&[_t,Ct,$,kt].forEach(function(q){return q.parentNode&&q.parentNode.removeChild(q)}),Nn===b&&(Nn=0),f&&(Ve&&(Ve.uncache=1),j=0,J.forEach(function(q){return q.pin===f&&j++}),j||(Ve.spacer=0)),i.onKill&&i.onKill(b)},J.push(b),b.enable(!1,!1),gi&&gi(b),r&&r.add&&!ke){var ae=b.update;b.update=function(){b.update=ae,ee.cache++,se||Ee||b.refresh()},z.delayedCall(.01,b.update),ke=.01,se=Ee=0}else b.refresh();f&&lg()},s.register=function(i){return Rr||(z=i||mh(),gh()&&window.document&&s.enable(),Rr=xn),Rr},s.defaults=function(i){if(i)for(var r in i)ks[r]=i[r];return ks},s.disable=function(i,r){xn=0,J.forEach(function(o){return o[r?"kill":"disable"](i)}),We(Q,"wheel",Dr),We(ge,"scroll",Dr),clearInterval(xs),We(ge,"touchcancel",ii),We(ce,"touchstart",ii),$s(We,ge,"pointerdown,touchstart,mousedown",Xl),$s(We,ge,"pointerup,touchend,mouseup",Gl),no.kill(),Ss(We);for(var n=0;n<ee.length;n+=3)Cs(We,ee[n],ee[n+1]),Cs(We,ee[n],ee[n+2])},s.enable=function(){if(Q=window,ge=document,At=ge.documentElement,ce=ge.body,z&&(Kn=z.utils.toArray,Mn=z.utils.clamp,ha=z.core.context||ii,zo=z.core.suppressOverwrites||ii,Wa=Q.history.scrollRestoration||"auto",pa=Q.pageYOffset||0,z.core.globals("ScrollTrigger",s),ce)){xn=1,qr=document.createElement("div"),qr.style.height="100vh",qr.style.position="absolute",kh(),tg(),Re.register(z),s.isTouch=Re.isTouch,Ai=Re.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ua=Re.isTouch===1,Ye(Q,"wheel",Dr),qa=[Q,ge,At,ce],z.matchMedia?(s.matchMedia=function(c){var u=z.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},z.addEventListener("matchMediaInit",function(){$h(),Za()}),z.addEventListener("matchMediaRevert",function(){return Sh()}),z.addEventListener("matchMedia",function(){or(0,1),vr("matchMedia")}),z.matchMedia().add("(orientation: portrait)",function(){return Lo(),Lo})):console.warn("Requires GSAP 3.11.0 or later"),Lo(),Ye(ge,"scroll",Dr);var i=ce.hasAttribute("style"),r=ce.style,n=r.borderTopStyle,o=z.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=vi(ce),Ue.m=Math.round(a.top+Ue.sc())||0,mt.m=Math.round(a.left+mt.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),i||(ce.setAttribute("style",""),ce.removeAttribute("style")),xs=setInterval(Zl,250),z.delayedCall(.5,function(){return ws=0}),Ye(ge,"touchcancel",ii),Ye(ce,"touchstart",ii),$s(Ye,ge,"pointerdown,touchstart,mousedown",Xl),$s(Ye,ge,"pointerup,touchend,mouseup",Gl),ca=z.utils.checkPrefix("transform"),Us.push(ca),Rr=nt(),no=z.delayedCall(.2,or).pause(),Lr=[ge,"visibilitychange",function(){var c=Q.innerWidth,u=Q.innerHeight;ge.hidden?(Bl=c,ql=u):(Bl!==c||ql!==u)&&$n()},ge,"DOMContentLoaded",or,Q,"load",or,Q,"resize",$n],Ss(Ye),J.forEach(function(c){return c.enable(0,1)}),l=0;l<ee.length;l+=3)Cs(We,ee[l],ee[l+1]),Cs(We,ee[l],ee[l+2])}},s.config=function(i){"limitCallbacks"in i&&(Mo=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(xs)||(xs=r)&&setInterval(Zl,r),"ignoreMobileResize"in i&&(ua=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ss(We)||Ss(Ye,i.autoRefreshEvents||"none"),dh=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,r){var n=vt(i),o=ee.indexOf(n),a=mr(n);~o&&ee.splice(o,a?6:2),r&&(a?li.unshift(Q,r,ce,r,At,r):li.unshift(n,r))},s.clearMatchMedia=function(i){J.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},s.isInViewport=function(i,r,n){var o=(Ot(i)?vt(i):i).getBoundingClientRect(),a=o[n?dr:fr]*r||0;return n?o.right-a>0&&o.left+a<Q.innerWidth:o.bottom-a>0&&o.top+a<Q.innerHeight},s.positionInViewport=function(i,r,n){Ot(i)&&(i=vt(i));var o=i.getBoundingClientRect(),a=o[n?dr:fr],l=r==null?a/2:r in oo?oo[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return n?(o.left+l)/Q.innerWidth:(o.top+l)/Q.innerHeight},s.killAll=function(i){if(J.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),i!==!0){var r=_r.killAll||[];_r={},r.forEach(function(n){return n()})}},s})();Z.version="3.14.2";Z.saveStyles=function(s){return s?Kn(s).forEach(function(e){if(e&&e.style){var t=Tt.indexOf(e);t>=0&&Tt.splice(t,5),Tt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),z.core.getCache(e),ha())}}):Tt};Z.revert=function(s,e){return Za(!s,e)};Z.create=function(s,e){return new Z(s,e)};Z.refresh=function(s){return s?$n(!0):(Rr||Z.register())&&or(!0)};Z.update=function(s){return++ee.cache&&xi(s===!0?2:0)};Z.clearScrollMemory=Ch;Z.maxScroll=function(s,e){return oi(s,e?mt:Ue)};Z.getScrollFunc=function(s,e){return qi(vt(s),e?mt:Ue)};Z.getById=function(s){return fa[s]};Z.getAll=function(){return J.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Z.isScrolling=function(){return!!qt};Z.snapDirectional=Ja;Z.addEventListener=function(s,e){var t=_r[s]||(_r[s]=[]);~t.indexOf(e)||t.push(e)};Z.removeEventListener=function(s,e){var t=_r[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Z.batch=function(s,e){var t=[],i={},r=e.interval||.016,n=e.batchMax||1e9,o=function(c,u){var d=[],h=[],f=z.delayedCall(r,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),n<=d.length&&f.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&ot(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return ot(n)&&(n=n(),Ye(Z,"refresh",function(){return n=e.batchMax()})),Kn(s).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(Z.create(c))}),t};var nc=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},jo=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Re.isTouch?" pinch-zoom":""):"none",e===At&&s(ce,t)},Es={auto:1,scroll:1},fg=function(e){var t=e.event,i=e.target,r=e.axis,n=(t.changedTouches?t.changedTouches[0]:t).target,o=n._gsap||z.core.getCache(n),a=nt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;n&&n!==ce&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(Es[(l=Ht(n)).overflowY]||Es[l.overflowX]));)n=n.parentNode;o._isScroll=n&&n!==i&&!mr(n)&&(Es[(l=Ht(n)).overflowY]||Es[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Th=function(e,t,i,r){return Re.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&fg,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Ye(ge,Re.eventTypes[0],oc,!1,!0)},onDisable:function(){return We(ge,Re.eventTypes[0],oc,!0)}})},pg=/(input|label|select|textarea)/i,sc,oc=function(e){var t=pg.test(e.target.tagName);(t||sc)&&(e._gsapAllow=!0,sc=t)},gg=function(e){rr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,n=t.allowNestedScroll,o=t.onRelease,a,l,c=vt(e.target)||At,u=z.core.globals().ScrollSmoother,d=u&&u.get(),h=Ai&&(e.content&&vt(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=qi(c,Ue),g=qi(c,mt),p=1,m=(Re.isTouch&&Q.visualViewport?Q.visualViewport.scale*Q.visualViewport.width:Q.outerWidth)/Q.innerWidth,_=0,v=ot(r)?function(){return r(a)}:function(){return r||2.8},x,y,S=Th(c,e.type,!0,n),C=function(){return y=!1},w=ii,P=ii,k=function(){l=oi(c,Ue),P=Mn(Ai?1:0,l),i&&(w=Mn(0,oi(c,mt))),x=pr},T=function(){h._gsap.y=wn(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},A=function(){if(y){requestAnimationFrame(C);var K=wn(a.deltaY/2),W=P(f.v-K);if(h&&W!==f.v+f.offset){f.offset=W-f.v;var b=wn((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",h._gsap.y=b+"px",f.cacheID=ee.cache,xi()}return!0}f.offset&&T(),y=!0},O,U,N,L,I=function(){k(),O.isActive()&&O.vars.scrollY>l&&(f()>l?O.progress(1)&&f(l):O.resetTo("scrollY",l))};return h&&z.set(h,{y:"+=0"}),e.ignoreCheck=function(R){return Ai&&R.type==="touchmove"&&A()||p>1.05&&R.type!=="touchstart"||a.isGesturing||R.touches&&R.touches.length>1},e.onPress=function(){y=!1;var R=p;p=wn((Q.visualViewport&&Q.visualViewport.scale||1)/m),O.pause(),R!==p&&jo(c,p>1.01?!0:i?!1:"x"),U=g(),N=f(),k(),x=pr},e.onRelease=e.onGestureStart=function(R,K){if(f.offset&&T(),!K)L.restart(!0);else{ee.cache++;var W=v(),b,G;i&&(b=g(),G=b+W*.05*-R.velocityX/.227,W*=nc(g,b,G,oi(c,mt)),O.vars.scrollX=w(G)),b=f(),G=b+W*.05*-R.velocityY/.227,W*=nc(f,b,G,oi(c,Ue)),O.vars.scrollY=P(G),O.invalidate().duration(W).play(.01),(Ai&&O.vars.scrollY>=l||b>=l-1)&&z.to({},{onUpdate:I,duration:W})}o&&o(R)},e.onWheel=function(){O._ts&&O.pause(),nt()-_>1e3&&(x=0,_=nt())},e.onChange=function(R,K,W,b,G){if(pr!==x&&k(),K&&i&&g(w(b[2]===K?U+(R.startX-R.x):g()+K-b[1])),W){f.offset&&T();var Oe=G[2]===W,me=Oe?N+R.startY-R.y:f()+W-G[1],ue=P(me);Oe&&me!==ue&&(N+=ue-me),f(ue)}(W||K)&&xi()},e.onEnable=function(){jo(c,i?!1:"x"),Z.addEventListener("refresh",I),Ye(Q,"resize",I),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){jo(c,!0),We(Q,"resize",I),Z.removeEventListener("refresh",I),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new Re(e),a.iOS=Ai,Ai&&!f()&&f(1),Ai&&z.ticker.add(ii),L=a._dc,O=z.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ph(f,f(),function(){return O.pause()})},onUpdate:xi,onComplete:L.vars.onComplete}),a};Z.sort=function(s){if(ot(s))return J.sort(s);var e=Q.pageYOffset||0;return Z.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Q.innerHeight}),J.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Z.observe=function(s){return new Re(s)};Z.normalizeScroll=function(s){if(typeof s>"u")return dt;if(s===!0&&dt)return dt.enable();if(s===!1){dt&&dt.kill(),dt=s;return}var e=s instanceof Re?s:gg(s);return dt&&dt.target===e.target&&dt.kill(),mr(e.target)&&(dt=e),e};Z.core={_getVelocityProp:la,_inputObserver:Th,_scrollers:ee,_proxies:li,bridge:{ss:function(){qt||vr("scrollStart"),qt=nt()},ref:function(){return rt}}};mh()&&z.registerPlugin(Z);/*!
 * DrawSVGPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ai,Qa,ao,Oh,Eh,ac,ma,Ah,zh=function(){return typeof window<"u"},Mh=function(){return ai||zh()&&(ai=window.gsap)&&ai.registerPlugin&&ai},mg=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,No={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},nr=function(e){return Math.round(e*1e4)/1e4},yi=function(e){return parseFloat(e)||0},lc=function(e,t){var i=yi(e);return~e.indexOf("%")?i/100*t:i},As=function(e,t){return yi(e.getAttribute(t))},Vs=Math.sqrt,cc=function(e,t,i,r,n,o){return Vs(Math.pow((yi(i)-yi(e))*n,2)+Math.pow((yi(r)-yi(t))*o,2))},uc=function(e){return console.warn(e)},Dh=function(e){return e.getAttribute("vector-effect")==="non-scaling-stroke"},_g=1,vg=function(e,t,i){var r=e.indexOf(" "),n,o;return r<0?(n=i!==void 0?i+"":e,o=e):(n=e.substr(0,r),o=e.substr(r+1)),n=lc(n,t),o=lc(o,t),n>o?[o,n]:[n,o]},Bs=function(e){if(e=Qa(e)[0],!e)return 0;var t=e.tagName.toLowerCase(),i=e.style,r=1,n=1,o,a,l,c,u,d,h;Dh(e)&&(n=e.getScreenCTM(),r=Vs(n.a*n.a+n.b*n.b),n=Vs(n.d*n.d+n.c*n.c));try{a=e.getBBox()}catch{uc("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var f=a||{x:0,y:0,width:0,height:0},g=f.x,p=f.y,m=f.width,_=f.height;if((!a||!m&&!_)&&No[t]&&(m=As(e,No[t][0]),_=As(e,No[t][1]),t!=="rect"&&t!=="line"&&(m*=2,_*=2),t==="line"&&(g=As(e,"x1"),p=As(e,"y1"),m=Math.abs(m-g),_=Math.abs(_-p))),t==="path")c=i.strokeDasharray,i.strokeDasharray="none",o=e.getTotalLength()||0,nr(r)!==nr(n)&&!ac&&(ac=1)&&uc("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),o*=(r+n)/2,i.strokeDasharray=c;else if(t==="rect")o=m*2*r+_*2*n;else if(t==="line")o=cc(g,p,g+m,p+_,r,n);else if(t==="polyline"||t==="polygon")for(l=e.getAttribute("points").match(mg)||[],t==="polygon"&&l.push(l[0],l[1]),o=0,u=2;u<l.length;u+=2)o+=cc(l[u-2],l[u-1],l[u],l[u+1],r,n)||0;else(t==="circle"||t==="ellipse")&&(d=m/2*r,h=_/2*n,o=Math.PI*(3*(d+h)-Vs((3*d+h)*(d+3*h))));return o||0},hc=function(e,t){if(e=Qa(e)[0],!e)return[0,0];t||(t=Bs(e)+1);var i=ao.getComputedStyle(e),r=i.strokeDasharray||"",n=yi(i.strokeDashoffset),o=r.indexOf(",");return o<0&&(o=r.indexOf(" ")),r=o<0?t:yi(r.substr(0,o)),r>t&&(r=t),[-n||0,r-n||0]},dc=function(){zh()&&(ao=window,Eh=ai=Mh(),Qa=ai.utils.toArray,ma=ai.core.getStyleSaver,Ah=ai.core.reverting||function(){},Oh=((ao.navigator||{}).userAgent||"").indexOf("Edge")!==-1)},Rh={version:"3.14.2",name:"drawSVG",register:function(e){ai=e,dc()},init:function(e,t,i,r,n){if(!e.getBBox)return!1;Eh||dc();var o=Bs(e),a,l,c;return this.styles=ma&&ma(e,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=i,this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?(t+"").indexOf(" ")===-1&&(t="0 "+t):t="0 0",a=hc(e,o),l=vg(t,o,a[0]),this._length=nr(o),this._dash=nr(a[1]-a[0]),this._offset=nr(-a[0]),this._dashPT=this.add(this,"_dash",this._dash,nr(l[1]-l[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,nr(-l[0]),0,0,0,0,0,1),Oh&&(c=ao.getComputedStyle(e),c.strokeLinecap!==c.strokeLinejoin&&(l=yi(c.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",l,l+.01))),this._live=Dh(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),_g},render:function(e,t){if(t.tween._time||!Ah()){var i=t._pt,r=t._style,n,o,a,l;if(i){for(t._live&&(n=Bs(t._target),n!==t._length&&(o=n/t._length,t._length=n,t._offsetPT&&(t._offsetPT.s*=o,t._offsetPT.c*=o),t._dashPT?(t._dashPT.s*=o,t._dashPT.c*=o):t._dash*=o));i;)i.r(e,i.d),i=i._next;a=t._dash||e&&e!==1&&1e-4||0,n=t._length-a+.1,l=t._offset,a&&l&&a+Math.abs(l%t._length)>t._length-.05&&(l+=l<0?.005:-.005)&&(n+=.005),r.strokeDashoffset=a?l:l+.001,r.strokeDasharray=n<.1?"none":a?a+"px,"+(t._nowrap?999999:n)+"px":"0px, 999999px"}}else t.styles.revert()},getLength:Bs,getPosition:hc};Mh()&&ai.registerPlugin(Rh);oe.registerPlugin(sn,Rh,Z);oe.defaults({duration:1,ease:sn.create("custom",".75,0,.5,1")});var fc="1.3.19";function Lh(s,e,t){return Math.max(s,Math.min(e,t))}function bg(s,e,t){return(1-t)*s+t*e}function yg(s,e,t,i){return bg(s,e,1-Math.exp(-t*i))}function xg(s,e){return(s%e+e)%e}var wg=class{constructor(){D(this,"isRunning",!1);D(this,"value",0);D(this,"from",0);D(this,"to",0);D(this,"currentTime",0);D(this,"lerp");D(this,"duration");D(this,"easing");D(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const i=Lh(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=yg(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:i,easing:r,onStart:n,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,n==null||n(),this.onUpdate=o}};function Sg(s,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,i)},e)}}var $g=class{constructor(s,e,{autoResize:t=!0,debounce:i=250}={}){D(this,"width",0);D(this,"height",0);D(this,"scrollHeight",0);D(this,"scrollWidth",0);D(this,"debouncedResize");D(this,"wrapperResizeObserver");D(this,"contentResizeObserver");D(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});D(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});D(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Sg(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ih=class{constructor(){D(this,"events",{})}emit(s,...e){var i;const t=this.events[s]||[];for(let r=0,n=t.length;r<n;r++)(i=t[r])==null||i.call(t,...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(i=>e!==i)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}},Cg=100/6,Ei={passive:!1};function pc(s,e){return s===1?Cg:s===2?e:1}var kg=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){D(this,"touchStart",{x:0,y:0});D(this,"lastDelta",{x:0,y:0});D(this,"window",{width:0,height:0});D(this,"emitter",new Ih);D(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});D(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:s})});D(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});D(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:i}=s;const r=pc(i,this.window.width),n=pc(i,this.window.height);e*=r,t*=n,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});D(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ei),this.element.addEventListener("touchstart",this.onTouchStart,Ei),this.element.addEventListener("touchmove",this.onTouchMove,Ei),this.element.addEventListener("touchend",this.onTouchEnd,Ei)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ei),this.element.removeEventListener("touchstart",this.onTouchStart,Ei),this.element.removeEventListener("touchmove",this.onTouchMove,Ei),this.element.removeEventListener("touchend",this.onTouchEnd,Ei)}},gc=s=>Math.min(1,1.001-2**(-10*s)),jh=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:n=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:p=!0,prevent:m,virtualScroll:_,overscroll:v=!0,autoRaf:x=!1,anchors:y=!1,autoToggle:S=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:P=w,stopInertiaOnNavigate:k=!1}={}){D(this,"_isScrolling",!1);D(this,"_isStopped",!1);D(this,"_isLocked",!1);D(this,"_preventNextNativeScrollEvent",!1);D(this,"_resetVelocityTimeout",null);D(this,"_rafId",null);D(this,"isTouching");D(this,"time",0);D(this,"userData",{});D(this,"lastVelocity",0);D(this,"velocity",0);D(this,"direction",0);D(this,"options");D(this,"targetScroll");D(this,"animatedScroll");D(this,"animate",new wg);D(this,"emitter",new Ih);D(this,"dimensions");D(this,"virtualScroll");D(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});D(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});D(this,"onTransitionEnd",s=>{s.propertyName.includes("overflow")&&this.checkOverflow()});D(this,"onClick",s=>{const i=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),r=new URL(window.location.href);if(this.options.anchors){const n=i.find(o=>r.host===o.host&&r.pathname===o.pathname&&o.hash);if(n){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${n.hash.split("#")[1]}`;this.scrollTo(a,o);return}}if(this.options.stopInertiaOnNavigate&&i.some(o=>r.host===o.host&&r.pathname!==o.pathname)){this.reset();return}});D(this,"onPointerDown",s=>{s.button===1&&this.reset()});D(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),n=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent,d=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(c.find(_=>{var v,x,y,S,C;return _ instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(_))||((v=_.hasAttribute)==null?void 0:v.call(_,"data-lenis-prevent"))||d==="vertical"&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-vertical"))||d==="horizontal"&&((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent-horizontal"))||r&&((S=_.hasAttribute)==null?void 0:S.call(_,"data-lenis-prevent-touch"))||n&&((C=_.hasAttribute)==null?void 0:C.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&n)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const g=r&&this.options.syncTouch,m=r&&i.type==="touchend";m&&(f=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...g?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});D(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});D(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=fc,window.lenis||(window.lenis={}),window.lenis.version=fc,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=gc:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:n,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:p,prevent:m,virtualScroll:_,overscroll:v,autoRaf:x,anchors:y,autoToggle:S,allowNestedScroll:C,naiveDimensions:P,stopInertiaOnNavigate:k},this.dimensions=new $g(s,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new kg(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:n=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=s,f=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(g=h),g){if(this.options.wrapper!==window){const m=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?m.left:m.top}const p=g.getBoundingClientRect();h=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof h=="number"){if(h+=f,h=Math.round(h),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=Lh(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=gc:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:n,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),p||this.emit(),p&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){const i=Date.now();s._lenis||(s._lenis={});const r=s._lenis;let n,o,a,l,c,u,d,h,f,g;if(i-(r.time??0)>2e3){r.time=Date.now();const w=window.getComputedStyle(s);if(r.computedStyle=w,n=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),r.hasOverflowX=n,r.hasOverflowY=o,!(n||o))return!1;d=s.scrollWidth,h=s.scrollHeight,f=s.clientWidth,g=s.clientHeight,a=d>f,l=h>g,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=h,r.clientWidth=f,r.clientHeight=g,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,n=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(n&&a||o&&l))return!1;const p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,_,v,x,y,S;if(p==="horizontal")m=Math.round(s.scrollLeft),_=d-f,v=e,x=n,y=a,S=c;else if(p==="vertical")m=Math.round(s.scrollTop),_=h-g,v=t,x=o,y=l,S=u;else return!1;return!S&&(m>=_||m<=0)?!0:(v>0?m<_:m>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?xg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Zn=new jh;window.lenis=Zn;function _a(s){Zn.raf(s),requestAnimationFrame(_a)}const Pg=!!document.querySelector("mobile-loading");Pg?(Zn.stop(),window.addEventListener("mobile-loading:done",()=>{Zn.start(),requestAnimationFrame(_a)},{once:!0})):requestAnimationFrame(_a);document.addEventListener("click",s=>{const e=s.target.closest('a[href^="#"]');if(!e)return;const t=e.getAttribute("href");if(!t)return;const i=document.querySelector(t);i&&(s.preventDefault(),Zn.scrollTo(i))});function zs(s){let e=document.querySelector(`meta[name="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("name",s),document.head.appendChild(e)),e}function mc(s){let e=document.querySelector(`meta[property="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("property",s),document.head.appendChild(e)),e}function Tg(s){const e=s.replace(/\/+$/,"")||"/";return e==="/"||e.endsWith("/index.html")?"home":e.endsWith("/projects")||e.endsWith("/projects.html")?"projects":e.endsWith("/last-project")||e.endsWith("/last-project.html")?"lastProject":e.endsWith("/404")||e.endsWith("/404.html")?"404":"home"}function _c(s){const e=le.t.bind(le),t=e("seo.common.description"),i=e("seo.common.keywords");switch(s){case"projects":return{title:e("seo.projects.title"),description:t,keywords:[i,e("seo.projects.keywords")].filter(Boolean).join(", ")};case"lastProject":return{title:e("seo.lastProject.title"),description:t,keywords:[i,e("seo.lastProject.keywords")].filter(Boolean).join(", ")};case"404":return{title:e("seo.404.title"),description:t,keywords:i};case"home":default:return{title:e("seo.home.title"),description:t,keywords:i}}}function vc(s){document.title=s.title,zs("description").setAttribute("content",s.description),zs("keywords").setAttribute("content",s.keywords),mc("og:title").setAttribute("content",s.title),mc("og:description").setAttribute("content",s.description),zs("twitter:title").setAttribute("content",s.title),zs("twitter:description").setAttribute("content",s.description)}function bc(){const s=Tg(window.location.pathname);vc(_c(s)),le.on("languageChanged",()=>{vc(_c(s))})}typeof window<"u"&&document.readyState!=="loading"?bc():typeof window<"u"&&document.addEventListener("DOMContentLoaded",()=>bc(),{once:!0});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qs=globalThis,el=qs.ShadowRoot&&(qs.ShadyCSS===void 0||qs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nh=Symbol(),yc=new WeakMap;let Og=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Nh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(el&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=yc.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&yc.set(t,e))}return e}toString(){return this.cssText}};const Eg=s=>new Og(typeof s=="string"?s:s+"",void 0,Nh),Ag=(s,e)=>{if(el)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=qs.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},xc=el?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Eg(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zg,defineProperty:Mg,getOwnPropertyDescriptor:Dg,getOwnPropertyNames:Rg,getOwnPropertySymbols:Lg,getPrototypeOf:Ig}=Object,Ui=globalThis,wc=Ui.trustedTypes,jg=wc?wc.emptyScript:"",Fo=Ui.reactiveElementPolyfillSupport,Fn=(s,e)=>s,lo={toAttribute(s,e){switch(e){case Boolean:s=s?jg:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},tl=(s,e)=>!zg(s,e),Sc={attribute:!0,type:String,converter:lo,reflect:!1,useDefault:!1,hasChanged:tl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ui.litPropertyMetadata??(Ui.litPropertyMetadata=new WeakMap);let Ir=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Sc){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Mg(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=Dg(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:r,set(o){const a=r==null?void 0:r.call(this);n==null||n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Sc}static _$Ei(){if(this.hasOwnProperty(Fn("elementProperties")))return;const e=Ig(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fn("properties"))){const t=this.properties,i=[...Rg(t),...Lg(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(xc(r))}else e!==void 0&&t.push(xc(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ag(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:lo).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:lo;this._$Em=r;const c=l.fromAttribute(t,a.type);this[r]=c??((o=this._$Ej)==null?void 0:o.get(r))??c,this._$Em=null}}requestUpdate(e,t,i,r=!1,n){var o;if(e!==void 0){const a=this.constructor;if(r===!1&&(n=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??tl)(n,t)||i.useDefault&&i.reflect&&n===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r){const{wrapped:a}=o,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Ir.elementStyles=[],Ir.shadowRootOptions={mode:"open"},Ir[Fn("elementProperties")]=new Map,Ir[Fn("finalized")]=new Map,Fo==null||Fo({ReactiveElement:Ir}),(Ui.reactiveElementVersions??(Ui.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=globalThis,$c=s=>s,co=Un.trustedTypes,Cc=co?co.createPolicy("lit-html",{createHTML:s=>s}):void 0,Fh="$lit$",zi=`lit$${Math.random().toFixed(9).slice(2)}$`,Uh="?"+zi,Ng=`<${Uh}>`,br=document,Qn=()=>br.createComment(""),es=s=>s===null||typeof s!="object"&&typeof s!="function",il=Array.isArray,Fg=s=>il(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Uo=`[ 	
\f\r]`,_n=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kc=/-->/g,Pc=/>/g,er=RegExp(`>|${Uo}(?:([^\\s"'>=/]+)(${Uo}*=${Uo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tc=/'/g,Oc=/"/g,Hh=/^(?:script|style|textarea|title)$/i,Ug=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),M=Ug(1),yr=Symbol.for("lit-noChange"),De=Symbol.for("lit-nothing"),Ec=new WeakMap,ar=br.createTreeWalker(br,129);function Vh(s,e){if(!il(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cc!==void 0?Cc.createHTML(e):e}const Hg=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=_n;for(let a=0;a<t;a++){const l=s[a];let c,u,d=-1,h=0;for(;h<l.length&&(o.lastIndex=h,u=o.exec(l),u!==null);)h=o.lastIndex,o===_n?u[1]==="!--"?o=kc:u[1]!==void 0?o=Pc:u[2]!==void 0?(Hh.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=er):u[3]!==void 0&&(o=er):o===er?u[0]===">"?(o=r??_n,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?er:u[3]==='"'?Oc:Tc):o===Oc||o===Tc?o=er:o===kc||o===Pc?o=_n:(o=er,r=void 0);const f=o===er&&s[a+1].startsWith("/>")?" ":"";n+=o===_n?l+Ng:d>=0?(i.push(c),l.slice(0,d)+Fh+l.slice(d)+zi+f):l+zi+(d===-2?a:f)}return[Vh(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class ts{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[c,u]=Hg(e,t);if(this.el=ts.createElement(c,i),ar.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=ar.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Fh)){const h=u[o++],f=r.getAttribute(d).split(zi),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?Bg:g[1]==="?"?qg:g[1]==="@"?Wg:_o}),r.removeAttribute(d)}else d.startsWith(zi)&&(l.push({type:6,index:n}),r.removeAttribute(d));if(Hh.test(r.tagName)){const d=r.textContent.split(zi),h=d.length-1;if(h>0){r.textContent=co?co.emptyScript:"";for(let f=0;f<h;f++)r.append(d[f],Qn()),ar.nextNode(),l.push({type:2,index:++n});r.append(d[h],Qn())}}}else if(r.nodeType===8)if(r.data===Uh)l.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(zi,d+1))!==-1;)l.push({type:7,index:n}),d+=zi.length-1}n++}}static createElement(e,t){const i=br.createElement("template");return i.innerHTML=e,i}}function en(s,e,t=s,i){var o,a;if(e===yr)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=es(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=en(s,r._$AS(s,e.values),r,i)),e}class Vg{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??br).importNode(t,!0);ar.currentNode=r;let n=ar.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new as(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new Yg(n,this,e)),this._$AV.push(c),l=i[++a]}o!==(l==null?void 0:l.index)&&(n=ar.nextNode(),o++)}return ar.currentNode=br,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class as{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=De,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=en(this,e,t),es(e)?e===De||e==null||e===""?(this._$AH!==De&&this._$AR(),this._$AH=De):e!==this._$AH&&e!==yr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fg(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==De&&es(this._$AH)?this._$AA.nextSibling.data=e:this.T(br.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ts.createElement(Vh(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new Vg(r,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=Ec.get(e.strings);return t===void 0&&Ec.set(e.strings,t=new ts(e)),t}k(e){il(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new as(this.O(Qn()),this.O(Qn()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const r=$c(e).nextSibling;$c(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class _o{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=De,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=De}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=en(this,e,t,0),o=!es(e)||e!==this._$AH&&e!==yr,o&&(this._$AH=e);else{const a=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=en(this,a[i+l],t,l),c===yr&&(c=this._$AH[l]),o||(o=!es(c)||c!==this._$AH[l]),c===De?e=De:e!==De&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!r&&this.j(e)}j(e){e===De?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Bg extends _o{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===De?void 0:e}}class qg extends _o{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==De)}}class Wg extends _o{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=en(this,e,t,0)??De)===yr)return;const i=this._$AH,r=e===De&&i!==De||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==De&&(i===De||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Yg{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){en(this,e)}}const Ho=Un.litHtmlPolyfillSupport;Ho==null||Ho(ts,as),(Un.litHtmlVersions??(Un.litHtmlVersions=[])).push("3.3.2");const Xg=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new as(e.insertBefore(Qn(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=globalThis;let X=class extends Ir{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xg(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return yr}};var Zc;X._$litElement$=!0,X.finalized=!0,(Zc=gr.litElementHydrateSupport)==null||Zc.call(gr,{LitElement:X});const Vo=gr.litElementPolyfillSupport;Vo==null||Vo({LitElement:X});(gr.litElementVersions??(gr.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gg={attribute:!0,type:String,converter:lo,reflect:!1,hasChanged:tl},Kg=(s=Gg,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,s,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,s,a),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function V(s){return(e,t)=>typeof t=="object"?Kg(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}class Jg{constructor(){this._dark=!0,this.listeners=new Set}get dark(){return this._dark}set dark(e){this._dark=e,document.documentElement.classList.toggle("dark",e),localStorage.setItem("theme",e?"dark":"light"),this.notifyListeners()}toggle(){this.dark=!this.dark}subscribe(e){this.listeners.add(e)}unsubscribe(e){this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>{e.requestUpdate()})}init(){const e=localStorage.getItem("theme");e&&(this._dark=e==="dark"),document.documentElement.classList.toggle("dark",this._dark)}}const Ms=new Jg,pe=s=>class extends s{constructor(){super(...arguments),this.dark=Ms.dark,this.lang=le.language,this.handleLanguageChange=()=>{this.lang=le.language,this.requestUpdate()}}get t(){return le.t.bind(le)}connectedCallback(){super.connectedCallback(),Ms.subscribe(this),le.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),Ms.unsubscribe(this),le.off("languageChanged",this.handleLanguageChange)}toggleTheme(){Ms.toggle()}toggleLanguage(){const e=this.lang==="en"?"pt":"en";le.changeLanguage(e)}};var Zg=Object.getOwnPropertyDescriptor,Qg=(s,e,t,i)=>{for(var r=i>1?void 0:i?Zg(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Ac=class extends pe(X){firstUpdated(s){}render(){return M`
      <section id="section-about">
        <div class="container">
          <div
            class="grid items-baseline gap-y-8 px-5 pt-16 xl:grid-cols-3 xl:px-20 xl:pt-24 2xl:px-32 2xl:pt-64"
          >
            <h2
              class="text-[2.5rem] leading-none tracking-tighter text-pretty text-zinc-50 xl:text-[3rem] 2xl:text-[4rem]"
            >
              ${this.t("about.title")}
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
                  ${this.t("about.p1")}
                </p>
                <p class="mb-2 text-sm/loose text-pretty lg:text-xl/loose">
                  ${this.t("about.p2")}
                </p>
              </div>
              <div>
                <h3
                  class="text-brand-400 font-mono text-[.625rem] font-semibold tracking-widest uppercase"
                >
                  ${this.t("about.education")}
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
                  ${this.t("about.courses")}
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
                        ${this.t("about.link")}
                      </a>
                    </p>
                  </li>
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      ${this.t("about.iaBusiness")}
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
                        ${this.t("about.link")}
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};Ac=Qg([te("about-section")],Ac);var em=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,rl=(s,e,t,i)=>{for(var r=i>1?void 0:i?tm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&em(e,t,r),r};let uo=class extends X{constructor(){super(...arguments),this.reverse=!1,this.customClass=""}render(){return M`
      <div
        class="progressive-blur ${this.reverse?"progressive-blur--reverse":""} ${this.customClass}"
      >
        ${Array.from({length:6},()=>M`<div></div>`)}
      </div>
    `}createRenderRoot(){return this}};rl([V({type:Boolean})],uo.prototype,"reverse",2);rl([V({type:String})],uo.prototype,"customClass",2);uo=rl([te("progressive-blur")],uo);const im="/src/341817.webp",rm="/src/7ea3a6.webp";var nm=Object.getOwnPropertyDescriptor,sm=(s,e,t,i)=>{for(var r=i>1?void 0:i?nm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let zc=class extends pe(X){initAnimation(){const s=this.querySelector("#cases"),e=this.querySelectorAll("#cases .cases");s&&e.length>0&&oe.matchMedia().add("(min-width: 1024px)",()=>{oe.from(Array.from(e),{scrollTrigger:{trigger:s,start:"top 100%",end:"bottom 80%",toggleActions:"play none none reverse",scrub:2},stagger:-.1,y:"10rem"})})}firstUpdated(){this.initAnimation()}renderTitle(s){const e=s.split("<br class='block xl:hidden'>");return e.length>1?M`
        ${e[0]}
        <br class="block xl:hidden" />
        ${e[1]}
      `:s}render(){return M`
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
                2025 ${this.t("cases.project")}
              </span>
              <div
                class="pointer-events-none absolute bottom-0 overflow-hidden"
              >
                <img
                  class="cases absolute w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${im}"
                  width="1264"
                  height="720"
                  decoding="async"
                  alt="Dark mode mobile dashboard showing analytics overview with graphs, lead count, and campaign metrics on a tilted iPhone screen."
                />
                <img
                  class="cases w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${rm}"
                  width="1264"
                  height="720"
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
                ${this.renderTitle(this.t("cases.title"))}
              </h2>
              <p
                class="mt-8 mb-auto text-sm/loose text-pretty 2xl:text-base/loose"
              >
                ${this.t("cases.description")}
              </p>
              <a
                href="${this.t("links.lastProject.url")}"
                class="cta-button cta-button--accent flex w-full items-center justify-between gap-3 self-center py-4 ps-6"
              >
                ${this.t("cases.cta")}
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
    `}createRenderRoot(){return this}};zc=sm([te("cases-section")],zc);var om=Object.defineProperty,am=Object.getOwnPropertyDescriptor,on=(s,e,t,i)=>{for(var r=i>1?void 0:i?am(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&om(e,t,r),r};let xr=class extends X{constructor(){super(...arguments),this.url="",this.label="",this.index="000",this.target="_blank",this.rel="noopener noreferrer"}render(){return M`
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
    `}createRenderRoot(){return this}};on([V({type:String})],xr.prototype,"url",2);on([V({type:String})],xr.prototype,"label",2);on([V({type:String})],xr.prototype,"index",2);on([V({type:String})],xr.prototype,"target",2);on([V({type:String})],xr.prototype,"rel",2);xr=on([te("footer-link")],xr);var lm=Object.getOwnPropertyDescriptor,cm=(s,e,t,i)=>{for(var r=i>1?void 0:i?lm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Mc=class extends pe(X){currentYear(){return new Date().getFullYear()}getRandomQuote(){const s=["Stay hungry, stay foolish.","Get off zero.","No great thing is created suddenly.","Where the mind goes the body will follow.","To define is to limit.","Publish to polish."],e=Math.floor(Math.random()*s.length);return s[e]}initMenuAnimation(){const s=this.querySelector("footer"),e=this.querySelector("#menu"),t=this.querySelectorAll("#menu > *");s&&e&&t.length>0&&oe.from(Array.from(t),{scrollTrigger:{trigger:s,start:"top 50%",end:"top 0%",toggleActions:"play none none reverse"},opacity:0,stagger:.1,y:"5rem"})}firstUpdated(){this.initMenuAnimation()}render(){return M`
      <footer
        id="section-connect"
        class="footer md:from-brand-800 relative z-10 h-lvh overflow-hidden md:bg-linear-0 md:from-[5rem] md:via-zinc-950 md:to-zinc-950 lg:before:content-['']"
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
              ${this.t("connect.title")}
            </span>
            <footer-link
              url=${this.t("links.github.url")}
              label=${this.t("links.github.label")}
              index="001"
            ></footer-link>

            <footer-link
              url=${this.t("links.linkedin.url")}
              label=${this.t("links.linkedin.label")}
              index="002"
            ></footer-link>

            <footer-link
              url=${this.t("links.email.url")}
              label=${this.t("links.email.label")}
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
    `}createRenderRoot(){return this}};Mc=cm([te("footer-section")],Mc);const um="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e",hm="/src/c2501f.webp",dm="/src/c03c5c.webp",fm="/src/37694a.webp",pm="/src/2e45e1.webp",gm="/src/5963f7.webp";var mm=Object.getOwnPropertyDescriptor,_m=(s,e,t,i)=>{for(var r=i>1?void 0:i?mm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Dc=class extends pe(X){itemEntrance(){oe.from(".hero",{paddingTop:64}),document.querySelectorAll("[data-entrance]").forEach(s=>{const e=[{item:"4",opacity:"0",y:"20%",delay:.4,scale:1.1,duration:1},{item:"5",opacity:"0",y:"20%",delay:0,scale:1.1,duration:1.2},{item:"3",opacity:"0",y:"0rem",delay:.2,duration:1},{item:"2",opacity:"0",y:"0rem",delay:.2,duration:1},{item:"1",opacity:"0",y:"0rem",delay:.2,duration:1}],t=oe.timeline();e.forEach((i,r)=>{t.from(s.querySelectorAll(`[data-entrance-item="${i.item}"]`),{y:i.y,opacity:i.opacity,delay:i.delay,scale:i.scale,duration:i.duration},r===0?void 0:"<")})})}heroParallax(){document.querySelectorAll("[data-parallax-layers]").forEach(s=>{let e=oe.timeline({scrollTrigger:{trigger:s,start:"0% 0%",end:"100% 0%",scrub:0}});[{layer:"1",y:"2.5rem",opacity:0},{layer:"2",y:"5rem",opacity:0,filter:"blur(1rem)"}].forEach((i,r)=>{e.to(s.querySelectorAll(`[data-parallax-layer="${i.layer}"]`),{y:i.y,ease:"none",opacity:i.opacity,filter:i.filter},r===0?void 0:"<")})})}firstUpdated(){this.itemEntrance(),this.heroParallax()}render(){return M`
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
                src="${hm}"
                sizes="64px"
                height="64"
                width="64"
                fetchpriority="high"
                loading="eager"
                alt="${this.t("hero.picDescription")}"
                class="size-14 rounded-full bg-zinc-900 outline-4 outline-zinc-950"
              />
              <div class="grid gap-2 leading-none">
                <span class="text-white 2xl:text-[1.25rem]">
                  ${this.t("hero.name")}
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
                  ${this.t("hero.status")}
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
                ${this.t("hero.title")}
              </h1>
              <h2 class="text-[1.125rem] text-balance 2xl:text-[1.5rem]">
                ${this.t("hero.subtitle")}
              </h2>
            </div>

            <div data-entrance-item="1" class="relative flex gap-2">
              <a
                href="${this.t("hero.cta.url")}"
                class="cta-button cta-button--accent flex items-center gap-3 self-center px-6 py-4"
              >
                ${this.t("hero.cta.label")}
              </a>
              <a
                href="#section-praxis"
                class="transition-color hidden size-[48px] items-center justify-center rounded-full bg-zinc-900 outline-4 outline-zinc-950 duration-[200ms] hover:bg-zinc-800 active:scale-95"
                title="Scroll page"
              >
                <img
                  src="${um}"
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
                src="${gm}"
              />
            </div>
            <div class="hidden bg-zinc-950 xl:col-span-3 xl:block">
              <img
                data-entrance-item="5"
                class="aspect-square w-full rounded-tl-lg mask-b-from-50% object-cover object-top sm:mask-r-from-50% sm:mask-b-from-0%"
                src="${dm}"
                height="384"
                width="384"
              />
            </div>
            <div class="col-span-8 hidden bg-zinc-950 sm:block xl:col-span-6">
              <img
                data-entrance-item="4"
                class="max-h-[432px] w-full rounded-t-lg mask-b-from-75% object-cover object-top"
                src="${fm}"
                height="432"
                width="768"
              />
            </div>
            <div class="col-span-4 hidden bg-zinc-950 sm:block xl:col-span-3">
              <img
                data-entrance-item="5"
                class="aspect-square w-full rounded-tr-lg mask-b-from-50% mask-l-from-0% object-cover object-top"
                src="${pm}"
                height="384"
                width="384"
              />
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};Dc=_m([te("hero-section")],Dc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vm={CHILD:2},bm=s=>(...e)=>({_$litDirective$:s,values:e});class ym{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class va extends ym{constructor(e){if(super(e),this.it=De,e.type!==vm.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===De||e==null)return this._t=void 0,this.it=e;if(e===yr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}va.directiveName="unsafeHTML",va.resultType=1;const ui=bm(va);var xm=Object.getOwnPropertyDescriptor,wm=(s,e,t,i)=>{for(var r=i>1?void 0:i?xm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Rc=class extends pe(X){get journeyItems(){return[{hide:!1,custom:"text-brand-400",start:"2019",end:"2025",title:this.t("journey.t4"),description:this.t("journey.p4")},{hide:!1,start:"2018",end:"2019",title:this.t("journey.t3"),description:this.t("journey.p3"),more:this.t("journey.m3")},{hide:!1,start:"2016",end:"2018",title:this.t("journey.t2"),description:this.t("journey.p2"),more:this.t("journey.m2")},{hide:!1,start:"2015",end:"2016",title:this.t("journey.t1"),description:this.t("journey.p1")}]}renderJourneyHeader(){return M`
      <h2
        class="px-5 text-[2.5rem] leading-none tracking-tighter text-pretty text-zinc-50 xl:px-20 xl:text-[3rem] 2xl:px-32 2xl:text-[4rem]"
      >
        ${this.t("journey.t0")}
      </h2>
      <div
        class="order-1 flex items-center px-5 lg:order-0 lg:justify-end xl:px-20 2xl:px-32"
      >
        <a
          href="/Paulo Melo Jr. - Currículo.pdf"
          target="_blank"
          class="cta-button cta-button--accent flex items-center px-6 py-4 text-[1rem] leading-none"
        >
          ${this.lang==="en"?"Download my CV":"Baixar meu currículo"}
        </a>
      </div>
    `}renderJourneyItem(s){return s.hide?M`<div class="hidden xl:flex"></div>`:M`
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
          ${ui(s.title)}
        </h2>
        <p class="text-sm/loose text-pretty lg:text-base/loose">
          ${s.description}
        </p>
        ${s.more?M`<span class="text-default mt-1 hidden text-xs"
              >${s.more}</span
            >`:De}
      </div>
    `}firstUpdated(s){}render(){return M`
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
    `}createRenderRoot(){return this}};Rc=wm([te("journey-section")],Rc);const Sm=`<style>\r
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
</svg>`;var $m=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,Bh=(s,e,t,i)=>{for(var r=i>1?void 0:i?Cm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&$m(e,t,r),r};let ba=class extends X{constructor(){super(...arguments),this.minMs=500,this.mountedAt=0,this.finishTimeoutId=null,this.fallbackTimeoutId=null,this.isExiting=!1,this.onDomContentLoaded=()=>this.finishAfterMinTime(),this.onWindowLoad=()=>this.finishAfterMinTime()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-busy","true"),this.setAttribute("aria-live","polite"),this.mountedAt=performance.now(),document.readyState==="complete"||document.readyState==="interactive"?this.finishAfterMinTime():(document.addEventListener("DOMContentLoaded",this.onDomContentLoaded,{once:!0}),window.addEventListener("load",this.onWindowLoad,{once:!0}),this.fallbackTimeoutId=window.setTimeout(()=>this.finishAfterMinTime(),8e3))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("DOMContentLoaded",this.onDomContentLoaded),window.removeEventListener("load",this.onWindowLoad),this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null)}finishAfterMinTime(){const s=performance.now()-this.mountedAt,e=Math.max(0,this.minMs-s);this.finishTimeoutId=window.setTimeout(()=>this.exit(),e)}exit(){if(this.isExiting)return;this.isExiting=!0,this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null);const s=this.querySelector("#loading")||this,e=document.querySelector("main");oe.set(e,{y:"1rem",opacity:0}),oe.to(s,{opacity:0,scale:2,filter:"blur(1rem)",duration:.4,force3D:!0,onComplete:()=>{this.dispatchEvent(new CustomEvent("mobile-loading:done",{bubbles:!0,composed:!0})),oe.to(e,{y:0,opacity:1,duration:1,onComplete:()=>{e.removeAttribute("style")}}),this.remove()}})}render(){return M` <div
      id="loading"
      class="fixed top-0 z-100 h-svh w-full bg-zinc-950"
    >
      <div
        class="container flex h-full flex-col items-center justify-center gap-4"
      >
        <div class="">${ui(`${Sm}`)}</div>
        <span
          class="hidden animate-pulse text-[.75rem] leading-10 tracking-[.05em] text-zinc-50 uppercase"
        >
          ${this.lang==="pt"?M`Carregando...`:M`Loading...`}
        </span>
      </div>
    </div>`}createRenderRoot(){return this}};Bh([V({type:Number,attribute:"min-ms"})],ba.prototype,"minMs",2);ba=Bh([te("page-loading")],ba);function km(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Lc;function Pm(){return Lc||(Lc=1,(function(s){(function(){var e={}.hasOwnProperty;function t(){for(var n="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(n=r(n,i(a)))}return n}function i(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return t.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var o="";for(var a in n)e.call(n,a)&&n[a]&&(o=r(o,a));return o}function r(n,o){return o?n?n+" "+o:n+o:n}s.exports?(t.default=t,s.exports=t):window.classNames=t})()})(Bo)),Bo.exports}var Tm=Pm();const wr=km(Tm);var Om=Object.defineProperty,Em=Object.getOwnPropertyDescriptor,vo=(s,e,t,i)=>{for(var r=i>1?void 0:i?Em(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Om(e,t,r),r};let is=class extends X{constructor(){super(...arguments),this.star="",this.items="",this.reverse=!1}render(){const e=this.items.split(",").map(r=>r.trim()).map(r=>M`<li>${r}</li>
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
          </li>`),t=this.reverse,i=wr("marquee",{reverse:t});return M`
      <div class=${i}>
        <ul class="marquee__content">
          ${e}
        </ul>
        <ul class="marquee__content">
          ${e}
        </ul>
      </div>
    `}createRenderRoot(){return this}};vo([V({type:String})],is.prototype,"star",2);vo([V({type:String})],is.prototype,"items",2);vo([V({type:Boolean})],is.prototype,"reverse",2);is=vo([te("marquee-element")],is);var Am=Object.defineProperty,zm=Object.getOwnPropertyDescriptor,bo=(s,e,t,i)=>{for(var r=i>1?void 0:i?zm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Am(e,t,r),r};let rs=class extends X{constructor(){super(...arguments),this.classNames="",this.href="",this.label=""}firstUpdated(){const s=document.querySelectorAll(".menu-item");s.forEach(i=>{const r=i.firstElementChild;oe.set(r,{clipPath:"inset(0% 0% 100% 0%)"})});function e(){const i=this.firstElementChild;oe.to(i,{duration:.2,clipPath:"inset(0% 0% 0% 0%)"})}function t(){if(this.classList.contains("active"))return;const i=this.firstElementChild;i&&oe.to(i,{duration:.2,clipPath:"inset(100% 0 0 0)",onComplete:()=>{oe.set(i,{clipPath:"inset(0% 0% 100%)"})}})}s.forEach(i=>{i.addEventListener("mouseenter",e),i.addEventListener("mouseleave",t)})}render(){const s=wr("font-medium relative flex justify-center leading-none pt-2 pb-2.5 px-4 text-zinc-300 text-[.875rem] items-center rounded-full hover:text-zinc-50 hover:bg-zinc-50/10 transition-all duration-[200ms] active:scale-95 active:bg-zinc-50/20");return M`<a
      class="${s} ${this.classNames}"
      href="${this.href}"
      data-label="${this.label}"
    >
      ${this.label}
    </a>`}createRenderRoot(){return this}};bo([V({type:String})],rs.prototype,"classNames",2);bo([V({type:String})],rs.prototype,"href",2);bo([V({type:String})],rs.prototype,"label",2);rs=bo([te("menu-item")],rs);var Mm=Object.defineProperty,Dm=Object.getOwnPropertyDescriptor,qh=(s,e,t,i)=>{for(var r=i>1?void 0:i?Dm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Mm(e,t,r),r};let ya=class extends pe(X){constructor(){super(...arguments),this.more=!1}toggleMore(){this.more=!this.more}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){oe.from("header > *",{y:-64}),window.addEventListener("scroll",()=>{this.more=!1}),oe.to("header",{scrollTrigger:{trigger:".hero",start:"60 60",end:"60 0",toggleActions:"play none none reverse",scrub:1},outline:"1px solid hsla(0 0 100% / 0.05)",padding:"0 0 0 0"})}render(){return M`
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
                  href="${this.t("links.lastProject.url")}"
                  label="${this.t("links.lastProject.label")}"
                  index="01"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${this.t("links.github.url")}"
                  label="${this.t("links.github.label")}"
                  index="02"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${this.t("links.linkedin.url")}"
                  label="${this.t("links.linkedin.label")}"
                  index="03"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${this.t("links.email.url")}"
                  label="${this.t("links.email.label")}"
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
                  label="${this.t("menu.praxis")}"
                ></menu-item>
              </li>
              <li>
                <menu-item
                  href="#section-journey"
                  label="${this.t("menu.journey")}"
                ></menu-item>
              </li>
              <li>
                <menu-item
                  href="#section-about"
                  label="${this.t("menu.about")}"
                ></menu-item>
              </li>
              <li>
                <menu-item
                  href="#section-connect"
                  label="${this.t("menu.connect")}"
                ></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden items-center justify-end gap-1 lg:flex">
            <a
              class="cta-button px-3.5 pt-2 pb-2.5 text-[.875rem]"
              href="${this.t("links.projects.url")}"
            >
              ${this.t("featured.button")}
            </a>
            <languages-dropdown></languages-dropdown>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};qh([V({type:Boolean})],ya.prototype,"more",2);ya=qh([te("menu-container")],ya);var Rm=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,an=(s,e,t,i)=>{for(var r=i>1?void 0:i?Lm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Rm(e,t,r),r};let Sr=class extends X{constructor(){super(...arguments),this.baseClasses="",this.customClasses="",this.icon="",this.label="",this.title=""}render(){const e=wr("relative font-medium text-[.75rem] tracking-[0.04em] flex transition-all duration-[200ms] px-1 xl:px-1.5 gap-2 h-8 rounded-full leading-8.5 xl:items-center  hover:text-zinc-50 text-zinc-300  active:scale-95 me-2",this.customClasses);return M`
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
    `}createRenderRoot(){return this}};an([V({type:String})],Sr.prototype,"baseClasses",2);an([V({type:String})],Sr.prototype,"customClasses",2);an([V({type:String})],Sr.prototype,"icon",2);an([V({type:String})],Sr.prototype,"label",2);an([V({type:String})],Sr.prototype,"title",2);Sr=an([te("languages-button")],Sr);var Im=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,yo=(s,e,t,i)=>{for(var r=i>1?void 0:i?jm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Im(e,t,r),r};let ns=class extends X{constructor(){super(...arguments),this.href="",this.label="",this.hover=""}render(){const s=wr("flex px-3 tracking-wide gap-2 text-zinc-50 text-[.75rem] uppercase items-center py-2.5 leading-none rounded-full whitespace-nowrap font-medium active:scale-95");return M`<button class="menu-item group/item ${s} relative">
      <div
        class="${s} pointer-events-none absolute inset-0 justify-center"
        aria-hidden="true"
      >
        <span class="text-zinc-950">
          ${this.hover?this.hover:this.label}
        </span>
      </div>
      ${this.label}
    </button>`}createRenderRoot(){return this}};yo([V({type:String})],ns.prototype,"href",2);yo([V({type:String})],ns.prototype,"label",2);yo([V({type:String})],ns.prototype,"hover",2);ns=yo([te("mail-button")],ns);var Nm=Object.defineProperty,Fm=Object.getOwnPropertyDescriptor,ls=(s,e,t,i)=>{for(var r=i>1?void 0:i?Fm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Nm(e,t,r),r};let tn=class extends X{constructor(){super(...arguments),this.classNames="",this.icon="",this.label="",this.title=""}render(){const e=wr("relative text-[.75rem] tracking-[0.05em] flex transition-all ps-3 pe-1 xl:pe-1.5 gap-2 h-8 xl:h-6 hover:h-8 rounded-full leading-8.5 xl:items-center hover:bg-zinc-100 hover:text-zinc-950 text-zinc-300 font-medium stroke-zinc-300 hover:stroke-zinc-950 hover:fill-zinc-100 active:scale-95",this.classNames);return M`
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
    `}createRenderRoot(){return this}};ls([V({type:String})],tn.prototype,"classNames",2);ls([V({type:String})],tn.prototype,"icon",2);ls([V({type:String})],tn.prototype,"label",2);ls([V({type:String})],tn.prototype,"title",2);tn=ls([te("button-lang")],tn);var Um=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,xo=(s,e,t,i)=>{for(var r=i>1?void 0:i?Hm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Um(e,t,r),r};let ss=class extends X{constructor(){super(...arguments),this.href="",this.label="",this.index=""}render(){return M`<div class="border-b border-zinc-900 xl:border-0">
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
    </div>`}createRenderRoot(){return this}};xo([V({type:String})],ss.prototype,"href",2);xo([V({type:String})],ss.prototype,"label",2);xo([V({type:String})],ss.prototype,"index",2);ss=xo([te("mobile-item")],ss);var Vm=Object.defineProperty,Bm=Object.getOwnPropertyDescriptor,Wh=(s,e,t,i)=>{for(var r=i>1?void 0:i?Bm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Vm(e,t,r),r};let xa=class extends pe(X){constructor(){super(...arguments),this.langMenu=!1}toggleLangMenu(){this.langMenu=!this.langMenu,this.langMenu&&setTimeout(()=>{const s=this.renderRoot.querySelector("#langMenuEl");if(s){const e=()=>{this.langMenu=!1};s.removeEventListener("mouseleave",e),s.addEventListener("mouseleave",e,{once:!0})}},0)}render(){return M`
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
              @click=${()=>le.changeLanguage("en")}
              class=${wr("w-full pt-2 pb-2.5 px-4 rounded-full text-[.875rem] leading-none transition-all active:scale-95 duration-[200ms]",this.lang==="en"?"bg-zinc-100 text-zinc-950 hover:bg-white":"hover:bg-zinc-50/10 hover:text-zinc-50")}
            >
              English
            </button>
          </li>
          <li>
            <button
              @click=${()=>le.changeLanguage("pt")}
              class=${wr("w-full pt-2 pb-2.5 px-4 rounded-full text-[.875rem] leading-none transition-all active:scale-95 duration-[200ms]",this.lang==="pt"?"bg-zinc-100 text-zinc-950 hover:bg-white":"hover:bg-zinc-50/10 hover:text-zinc-50")}
            >
              Português
            </button>
          </li>
        </ul>
      </div>
    `}createRenderRoot(){return this}};Wh([V({type:Boolean})],xa.prototype,"langMenu",2);xa=Wh([te("languages-dropdown")],xa);var qm=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,cs=(s,e,t,i)=>{for(var r=i>1?void 0:i?Wm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&qm(e,t,r),r};let rn=class extends pe(X){constructor(){super(...arguments),this.index="000",this.title="Add Title",this.content="Add Content",this.open=!1}firstUpdated(){}render(){return M`
      <div
        class="${this.open?"col-span-3 bg-zinc-800":"bg-zinc-900"} flex aspect-square h-full flex-col justify-between rounded-[.25rem] p-6 xl:aspect-[2/1] xl:p-12"
      >
        <span class="mb-2 leading-none text-zinc-400"> ${this.index} </span>
        <h2
          class="text-[1.5rem] leading-none tracking-tighter text-zinc-50 xl:text-[2rem]"
        >
          ${this.title}
        </h2>
      </div>
    `}createRenderRoot(){return this}};cs([V({type:String})],rn.prototype,"index",2);cs([V({type:String})],rn.prototype,"title",2);cs([V({type:String})],rn.prototype,"content",2);cs([V({type:Boolean})],rn.prototype,"open",2);rn=cs([te("method-item")],rn);var Ym=Object.getOwnPropertyDescriptor,Xm=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ym(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Ic=class extends pe(X){firstUpdated(){}render(){return M`
      <section class="">
        <div class="container">
          <div
            class="grid grid-cols-2 gap-[2px] overflow-hidden rounded-4xl px-0.5 *:contents md:grid-cols-4"
          >
            <method-item
              index="001"
              title=${this.t("method.1")}
              content="It all begins with a no-stress chat. Without compromises."
            ></method-item>
            <method-item
              index="002"
              title=${this.t("method.2")}
              content="We analyze your brand and strategize a custom roadmap."
            ></method-item>
            <method-item
              index="003"
              title=${this.t("method.3")}
              content="Time to design and ask for feedback. We lock in and work."
            ></method-item>
            <method-item
              index="004"
              title=${this.t("method.4")}
              content="It's go-time! We launch your project, monitor its impact, and make adjustments to maximize performance."
            ></method-item>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};Ic=Xm([te("method-section")],Ic);var Gm=Object.getOwnPropertyDescriptor,Km=(s,e,t,i)=>{for(var r=i>1?void 0:i?Gm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let jc=class extends pe(X){firstUpdated(){const s=this.renderRoot.querySelectorAll(".praxis svg"),e=this.renderRoot.querySelector("section > .praxis-bg");oe.to(e,{scrollTrigger:{trigger:e,start:"0 75%",end:"0 50%",toggleActions:"play none none reverse",scrub:1},opacity:0,ease:"none"}),s.forEach(i=>{const r=i.querySelectorAll("path");oe.from(r,{scrollTrigger:{trigger:i,start:"0% 75%",toggleActions:"play none none reverse"},stagger:.12,opacity:0,fill:(this.dark,"var(--color-brand-400)"),drawSVG:!1})}),this.renderRoot.querySelectorAll(".praxis").forEach(i=>{oe.from(i.children,{scrollTrigger:{trigger:i.children,start:"0% 75%",toggleActions:"play none none reverse"},duration:.8,stagger:.1,x:"5rem",filter:"blur(.5rem)",opacity:r=>r===0?1:0})})}render(){return M`
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
                  ${this.t("praxis.t1")}
                </h2>
                <p class="text-default text-balance">${this.t("praxis.p1")}</p>
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
                  ${this.t("praxis.t2")}
                </h2>
                <p class="text-default text-balance">${this.t("praxis.p2")}</p>
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
    `}createRenderRoot(){return this}};jc=Km([te("praxis-section")],jc);var Jm=Object.getOwnPropertyDescriptor,Zm=(s,e,t,i)=>{for(var r=i>1?void 0:i?Jm(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Nc=class extends pe(X){render(){return M`
      <div class="mx-5 pt-22 pb-5 lg:pt-32 lg:pb-2">
        <h1
          class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
        >
          ${ui(this.t("featured.title"))}
        </h1>
      </div>
    `}createRenderRoot(){return this}};Nc=Zm([te("projects-header")],Nc);var Qm=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,us=(s,e,t,i)=>{for(var r=i>1?void 0:i?e0(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Qm(e,t,r),r};let nn=class extends X{constructor(){super(...arguments),this.title="",this.tags="",this.year="2025",this.contentHtml=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){const e=this.tags.split(",").map(t=>t.trim()).map(t=>M`<span class="text-zinc-50">${t}</span>`);return M`
      <div
        class="mb-8 lg:sticky lg:top-24 lg:mb-0 lg:grid lg:items-end lg:gap-8"
      >
        <div
          class="mb-6 flex flex-wrap gap-4 text-[.875rem] leading-none lg:mb-1"
        >
          <span class="text-zinc-50 font-bold"> ${this.year} </span>
          ${e}
        </div>
        <h2
          class="text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem]"
        >
          ${this.title}
        </h2>
        ${this.contentHtml?M`<div
              class="mt-4 flex flex-col items-start gap-3 leading-loose text-balance lg:mt-0"
            >
              ${ui(this.contentHtml)}
            </div>`:null}
      </div>
    `}createRenderRoot(){return this}};us([V({type:String})],nn.prototype,"title",2);us([V({type:String})],nn.prototype,"tags",2);us([V({type:String})],nn.prototype,"year",2);us([V({type:String})],nn.prototype,"contentHtml",2);nn=us([te("item-header")],nn);const t0="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e";var i0=Object.defineProperty,r0=Object.getOwnPropertyDescriptor,Yh=(s,e,t,i)=>{for(var r=i>1?void 0:i?r0(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&i0(e,t,r),r};let wa=class extends pe(X){constructor(){super(...arguments),this.more=!1}toggleMore(){this.more=!this.more}changeTheme(){this.toggleTheme()}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Copied!":"Copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){oe.from("header > *",{y:-64}),window.addEventListener("scroll",()=>{this.more=!1}),oe.to("header",{scrollTrigger:{trigger:".hero",start:"60 60",end:"60 0",toggleActions:"play none none reverse",scrub:1},outline:"1px solid hsla(0 0 100% / 0.05)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return M`
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
                  href="${this.t("links.github.url")}"
                  label="${this.t("links.github.label")}"
                  index="02"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${this.t("links.linkedin.url")}"
                  label="${this.t("links.linkedin.label")}"
                  index="03"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${this.t("links.email.url")}"
                  label="${this.t("links.email.label")}"
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
                src="${t0}"
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
              ${this.lang==="en"?"Download CV":"Baixar currículo"}
            </a>
            <languages-dropdown></languages-dropdown>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};Yh([V({type:Boolean})],wa.prototype,"more",2);wa=Yh([te("projects-menu")],wa);const n0="/src/5c2c4b.webp",s0="/src/36c011.webp",o0="/src/c5764d.webp",a0="/src/a374cc.webp",l0="/src/bf87a5.webp",c0="/src/fd8081.webp";var u0=Object.getOwnPropertyDescriptor,h0=(s,e,t,i)=>{for(var r=i>1?void 0:i?u0(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Fc=class extends pe(X){render(){const s=`
      <p class="mb-3 text-[.875rem]">
        ${this.t("allugator.description")}
      </p>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t("allugator.metrics.valuation.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${this.t("allugator.metrics.valuation.subtitle")}</p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t("allugator.metrics.users.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${this.t("allugator.metrics.users.subtitle")}</p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t("allugator.metrics.daily.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${this.t("allugator.metrics.daily.subtitle")}</p>
      </div>
    `;return M`
      <div id="allugator" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${this.t("allugator.title")}"
          tags="${this.t("allugator.tags")}"
          year="${this.t("allugator.year")}"
          .contentHtml=${s}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:grid-cols-3 lg:gap-4"
        >
          <img
            class="border border-zinc-900 mix-blend-screen"
            src="${a0}"
            loading="lazy"
          />
          <img src="${c0}" loading="lazy" />
          <img src="${n0}" loading="lazy" />
          <img
            class="mix-blend-screen lg:col-span-2 lg:row-span-2"
            src="${s0}"
            loading="lazy"
          />
          <img src="${l0}" loading="lazy" />
          <img class="border border-zinc-900" src="${o0}" loading="lazy" />
        </div>
      </div>
    `}createRenderRoot(){return this}};Fc=h0([te("projects-allugator")],Fc);const d0="/src/39683d.webp",f0="/src/15c264.webp",p0="/src/295098.webp",g0="/src/778272.webp",m0="/src/50783c.webp";var _0=Object.getOwnPropertyDescriptor,v0=(s,e,t,i)=>{for(var r=i>1?void 0:i?_0(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Uc=class extends pe(X){renderDescription(){return`${this.t("damus.description1")}`}render(){const s=`
      <p class="text-[.875rem]">
        ${this.renderDescription()}
      </p>
      <p class="text-[.875rem]">
        ${this.t("damus.description2")}
      </p>
    `;return M`
      <div id="damus" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${this.t("damus.title")}"
          tags="${this.t("damus.tags")}"
          year="${this.t("damus.year")}"
          .contentHtml=${s}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:gap-4"
        >
          <img src="${d0}" loading="lazy" class="border border-zinc-900" />
          <img src="${f0}" loading="lazy" />
          <img src="${p0}" loading="lazy" />
          <img src="${m0}" loading="lazy" />
          <img
            class="col-span-2 border border-zinc-900"
            src="${g0}"
            loading="lazy"
          />
        </div>
      </div>
    `}createRenderRoot(){return this}};Uc=v0([te("projects-damus")],Uc);const b0="/src/e761eb.webp",y0="/src/140c7b.webp",x0="/src/36a4a4.webp",w0="/src/ae754e.webp",S0="/src/492162.webp",$0="/src/bec54c.webp",C0="/src/555530.webp",k0="/src/6a0945.webp",P0="/src/4fb0f0.webp",T0="/src/52e81e.webp",O0="/src/f150ed.webp",E0="/src/55a96b.webp",A0="/src/85d489.webp";var z0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,Xh=(s,e,t,i)=>{for(var r=i>1?void 0:i?M0(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&z0(e,t,r),r};let Sa=class extends X{constructor(){super(...arguments),this.images=[],this.overlayRafId=0,this.onKeydown=s=>{s.key==="Escape"&&this.close()},this.onBackdropClick=s=>{s.target.classList.contains("zoom-overlay")&&this.close()},this.close=()=>{this.remove()}}connectedCallback(){var s;super.connectedCallback(),(s=window.lenis)==null||s.stop(),document.body.style.overflow="hidden",document.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){var s,e;super.disconnectedCallback(),this.overlayRafId&&cancelAnimationFrame(this.overlayRafId),(s=this.overlayLenis)==null||s.destroy(),this.overlayLenis=void 0,(e=window.lenis)==null||e.start(),document.body.style.overflow="",document.removeEventListener("keydown",this.onKeydown)}firstUpdated(){const s=this.querySelector(".zoom-overlay"),e=this.querySelector(".zoom-content");if(!s||!e)return;this.overlayLenis=new jh({wrapper:s,content:e});const t=i=>{var r;(r=this.overlayLenis)==null||r.raf(i),this.overlayRafId=requestAnimationFrame(t)};this.overlayRafId=requestAnimationFrame(t)}render(){return M`
      <button
        class="fixed top-5 right-5 z-60 flex h-8 items-center gap-1 rounded-full px-3 pe-2 tracking-wider text-xs/none leading-none text-zinc-100 uppercase transition-all hover:bg-zinc-100 hover:text-zinc-950"
        @click=${this.close}
      >
        Esc
        <span class="text-2xl/none font-extralight">
          &times;
        </span>
      </button>
      <div
        class="zoom-overlay fixed inset-0 z-50 overflow-auto overscroll-contain bg-zinc-50/20 backdrop-blur backdrop-brightness-50"
        @click=${this.onBackdropClick}
      >
        <div class="zoom-content container my-24 max-w-[1280px]">
          <picture>
            ${this.images.map((s,e)=>M`
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
    `}createRenderRoot(){return this}};Xh([V({type:Array})],Sa.prototype,"images",2);Sa=Xh([te("img-zoom")],Sa);var D0=Object.getOwnPropertyDescriptor,R0=(s,e,t,i)=>{for(var r=i>1?void 0:i?D0(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};const L0=[{src:S0,width:1920,height:1136,class:"rounded-t-[.5rem]"},{src:$0,width:1920,height:800},{src:C0,width:1920,height:800},{src:k0,width:1920,height:800},{src:P0,width:1920,height:800},{src:T0,width:1920,height:800},{src:O0,width:1920,height:800},{src:E0,width:1920,height:800},{src:A0,width:1920,height:236,class:"rounded-b-[.5rem]"}];let Hc=class extends pe(X){constructor(){super(...arguments),this.openZoom=()=>{const s=document.createElement("img-zoom");s.images=L0,document.body.appendChild(s)}}render(){const s=`
      <p class="text-[.875rem]">
        ${this.t("ifficient.description1")}
      </p>
      <p class="text-[.875rem]">
        ${this.t("ifficient.description2")}
      </p>
      <a
        href="${this.t("links.lastProject.url")}"
        class="cta-button cta-button--accent inline-flex items-center gap-4 mt-3 lg:mt-7 px-6"
      >
        ${this.t("ifficient.cta")}
      </a>
    `;return M`
      <div id="ifficient" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${this.t("ifficient.title")}"
          tags="${this.t("ifficient.tags")}"
          .contentHtml=${s}
        ></item-header>
        <div class="grid gap-4 *:rounded-[.75rem] lg:col-span-2">
          <div
            class="group relative aspect-video cursor-pointer overflow-hidden border border-zinc-900 bg-zinc-950 transition-colors hover:bg-zinc-900"
            @click=${this.openZoom}
          >
            <img
              id="ifficient-homepage"
              class="w-full mix-blend-screen"
              src="${b0}"
              alt="Ifficient homepage"
            />
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100/15 px-5 py-3 text-[1rem] leading-none font-medium text-zinc-50 opacity-0 backdrop-blur transition-all group-hover:opacity-100 hover:bg-zinc-100/30"
            >
              ${this.t("ifficient.fullView")}
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2 *:rounded-[.75rem] lg:gap-4">
            <img
              src="${x0}"
              loading="lazy"
              decoding="async"
              alt="Ifficient screenshot 1"
            />
            <img
              src="${y0}"
              loading="lazy"
              decoding="async"
              alt="Ifficient screenshot 2"
            />
            <img
              src="${w0}"
              loading="lazy"
              decoding="async"
              alt="Ifficient screenshot 3"
            />
          </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};Hc=R0([te("projects-ifficient")],Hc);const I0="/src/00c014.webp",j0="/src/f89330.webp",N0="/src/342435.webp",F0="/src/8e3288.webp",U0="/src/a44924.webp",H0="/src/a6b260.webp",V0="/src/53e6da.gif",B0="/src/73910b.webp",q0="/src/b808d9.webp",W0="/src/80a3c2.gif",Y0="/src/dd2f35.webp";var X0=Object.getOwnPropertyDescriptor,G0=(s,e,t,i)=>{for(var r=i>1?void 0:i?X0(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Vc=class extends pe(X){render(){const s=`
      <p class="text-[.875rem]">
        ${this.t("multiplayer.description1")}
      </p>
      <p class="mb-3 text-[.875rem]">
        ${this.t("multiplayer.description2")}
      </p>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t("multiplayer.metrics.audience.title")}
        </h3>
        <p class="text-[.875rem] leading-none font-medium">
          ${this.t("multiplayer.metrics.audience.subtitle")}
        </p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t("multiplayer.metrics.facebook.title")}
        </h3>
        <p class="text-[.875rem] leading-none font-medium">
          ${this.t("multiplayer.metrics.facebook.subtitle")}
        </p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t("multiplayer.metrics.youtube.title")}
        </h3>
        <p class="text-[.875rem] leading-none font-medium">
          ${this.t("multiplayer.metrics.youtube.subtitle")}
        </p>
      </div>
    `;return M`
      <div id="multiplayer" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${this.t("multiplayer.title")}"
          tags="${this.t("multiplayer.tags")}"
          year="${this.t("multiplayer.year")}"
          .contentHtml=${s}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:gap-4"
        >
          <img src="${j0}" loading="lazy" />
          <img src="${N0}" loading="lazy" />
          <img src="${U0}" loading="lazy" />
          <img src="${H0}" loading="lazy" />
          <img src="${W0}" loading="lazy" />
          <img src="${F0}" loading="lazy" />
          <img src="${q0}" loading="lazy" />
          <img src="${Y0}" loading="lazy" />
          <img src="${B0}" loading="lazy" />
          <img src="${V0}" loading="lazy" />
          <img
            class="col-span-2 border border-zinc-900"
            src="${I0}"
            loading="lazy"
          />
        </div>
      </div>
    `}createRenderRoot(){return this}};Vc=G0([te("projects-multiplayer")],Vc);var K0=Object.getOwnPropertyDescriptor,J0=(s,e,t,i)=>{for(var r=i>1?void 0:i?K0(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Bc=class extends pe(X){render(){return M`
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
    `}createRenderRoot(){return this}};Bc=J0([te("projects-index")],Bc);const Z0="/src/4f3f0c.png";var Q0=Object.getOwnPropertyDescriptor,e1=(s,e,t,i)=>{for(var r=i>1?void 0:i?Q0(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let qc=class extends pe(X){handleCoverImage(){const s=document.querySelector("#cover-image");s&&oe.matchMedia().add("(min-width: 1024px)",()=>{oe.to(s,{scrollTrigger:{trigger:"#about",start:"top 20%",end:"bottom 20%",scrub:2},y:"-5rem",ease:"none"})})}firstUpdated(){this.handleCoverImage()}render(){return M` <div
      id="about"
      class="relative grid overflow-hidden bg-linear-to-b from-zinc-900 to-zinc-950 lg:grid-cols-2 lg:rounded-4xl"
    >
      <div
        class="absolute h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:block"
      ></div>
      <div class="flex flex-col p-6 lg:p-16 lg:pe-0">
        <p class="text-default mb-4 text-balance lg:-mt-2">
          ${ui(this.t("twyne.about.p2"))}
        </p>
        <p class="text-default text-pretty">
          ${ui(this.t("twyne.about.p1"))}
        </p>
        <ul
          class="mt-auto hidden text-[.75rem] leading-none *:border-b *:border-zinc-800 *:py-6 lg:block lg:text-[1rem]"
        >
          <li class="flex justify-between align-baseline">
            <span> ${this.t("twyne.about.details.company")} </span>
            <span class="text-right text-zinc-50">
              ${this.t("twyne.about.details.companyValue")}
            </span>
          </li>
          <li class="flex justify-between align-baseline">
            <span> ${this.t("twyne.about.details.industry")} </span>
            <span class="text-right text-zinc-50">
              ${this.t("twyne.about.details.industryValue")}
            </span>
          </li>
          <li class="flex justify-between align-baseline">
            <span> ${this.t("twyne.about.details.product")} </span>
            <span class="text-right text-zinc-50">
              ${this.t("twyne.about.details.productValue")}
            </span>
          </li>
          <li class="flex justify-between align-baseline">
            <span> ${this.t("twyne.about.details.contributions")} </span>
            <span
              class="inline-flex gap-2 text-right align-baseline text-zinc-50"
            >
              <span> ${this.t("twyne.about.details.contribution1")} </span>
              <span class="text-zinc-400">/</span>
              <span class="hidden xl:flex">
                ${this.t("twyne.about.details.contribution2")}
              </span>
              <span class="hidden text-zinc-400 xl:flex">/</span>
              <span> ${this.t("twyne.about.details.contribution3")} </span>
            </span>
          </li>
        </ul>
      </div>
      <div
        class="relative flex aspect-square overflow-hidden lg:aspect-[3/4] xl:aspect-square"
      >
        <img
          src="${Z0}"
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
    </div>`}createRenderRoot(){return this}};qc=e1([te("twyne-about")],qc);var t1=Object.getOwnPropertyDescriptor,i1=(s,e,t,i)=>{for(var r=i>1?void 0:i?t1(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};oe.registerPlugin(Z);let Wc=class extends pe(X){connectedCallback(){super.connectedCallback(),this.cleanupAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupAnimation()}setupSignatureAnimation(){if(!this.signElement)return;const s=this.signElement.querySelectorAll("path");this.animation=oe.from(s,{scrollTrigger:{trigger:this.signElement,start:"100% 100%",toggleActions:"play none none reverse"},duration:.75,stagger:.75,drawSVG:!1})}cleanupAnimation(){this.animation&&(this.animation.kill(),this.animation=void 0)}firstUpdated(s){this.signElement=this.querySelector("#sign"),this.setupSignatureAnimation()}renderSignature(){return M`
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
    `}renderContent(){return M`
      <h2
        class="mt-16 mb-4 font-mono text-[0.75rem] leading-none font-semibold tracking-[0.05em] text-zinc-400 uppercase"
      >
        ${this.t("twyne.conclusion.t1")}
      </h2>
      <p class="text-default text-zinc-50">${this.t("twyne.conclusion.p1")}</p>
      <p class="text-default text-zinc-50">${this.t("twyne.conclusion.p2")}</p>
      <p class="text-default text-zinc-50">${this.t("twyne.conclusion.p3")}</p>
    `}render(){return M`
      <section id="conclusion">
        <div class="container grid-cols-4 px-6 pt-24 lg:grid lg:pt-32">
          <div
            class="relative col-span-2 col-start-2 flex aspect-square flex-col items-center justify-center gap-8 text-center text-[1.25rem] leading-loose text-balance text-zinc-300 2xl:text-[1.5rem]"
          >
            ${this.renderContent()} ${this.renderSignature()}
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};Wc=i1([te("twyne-conclusion")],Wc);var r1=Object.getOwnPropertyDescriptor,n1=(s,e,t,i)=>{for(var r=i>1?void 0:i?r1(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Yc=class extends pe(X){render(){return M`
      <section id="goal" class="container px-6 py-24 lg:p-24 2xl:p-32">
        <div class="grid-cols-4 justify-center lg:grid">
          <div
            class="col-span-2 col-start-2 flex flex-col justify-center xl:aspect-square"
          >
            <h2
              class="mb-10 text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem] 2xl:text-[3rem]"
            >
              ${this.t("twyne.goal.t1")}
            </h2>
            <p class="text-default mb-8 leading-loose">
              ${ui(this.t("twyne.goal.p1"))}
            </p>
            <p class="text-default leading-loose">${this.t("twyne.goal.p2")}</p>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};Yc=n1([te("twyne-goal")],Yc);const s1="/src/3d9806.svg";var o1=Object.getOwnPropertyDescriptor,a1=(s,e,t,i)=>{for(var r=i>1?void 0:i?o1(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Xc=class extends pe(X){render(){return M`
      <div
        class="flex flex-col items-start px-5 py-12 pt-8 xl:gap-2 xl:px-14 xl:py-14 xl:pt-16"
      >
        <div class="flex items-center gap-6">
          <img
            src="${s1}"
            class="h-14 border-r border-zinc-700 pr-6"
            alt="Twyne"
          />
          <h1
            class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
          >
            ${this.t("twyne.t2")}
          </h1>
        </div>
      </div>
    `}createRenderRoot(){return this}};Xc=a1([te("twyne-header")],Xc);var l1=Object.getOwnPropertyDescriptor,c1=(s,e,t,i)=>{for(var r=i>1?void 0:i?l1(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Gc=class extends pe(X){render(){const s=this.t("twyne.impact.l1",{returnObjects:!0});return M`
      <div
        id="impact"
        class="container grid gap-10 px-6 pt-24 xl:px-24 xl:pt-32 2xl:px-32"
      >
        <h2
          class="text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem] 2xl:text-[3rem]"
        >
          ${ui(this.t("twyne.impact.t1"))}
        </h2>
        <div
          class="grid items-center gap-px overflow-hidden rounded-4xl lg:grid-cols-3"
        >
          <div class="grid gap-2 bg-zinc-900 py-12 text-center">
            <h3
              class="text-[2rem] leading-none font-semibold tracking-tighter text-zinc-50"
            >
              ${this.t("twyne.numbers.t1")}
            </h3>
            <p class="text-base/none text-pretty">
              ${this.t("twyne.numbers.p1")}
            </p>
          </div>
          <div class="grid gap-2 bg-zinc-900 py-12 text-center">
            <h3
              class="text-[2rem] leading-none font-semibold tracking-tighter text-zinc-50"
            >
              ${this.t("twyne.numbers.t2")}
            </h3>
            <p class="text-base/none text-pretty">
              ${this.t("twyne.numbers.p2")}
            </p>
          </div>
          <div class="grid gap-2 bg-zinc-900 py-12 text-center">
            <h3
              class="text-[2rem] leading-none font-semibold tracking-tighter text-zinc-50"
            >
              ${this.t("twyne.numbers.t3")}
            </h3>
            <p class="text-base/none text-pretty">
              ${this.t("twyne.numbers.p3")}
            </p>
          </div>
        </div>
        <ul
          class="grid gap-4 text-sm leading-loose text-zinc-50 lg:grid-cols-2 lg:gap-0 lg:text-base 2xl:text-[1.25rem]"
        >
          ${s.map(e=>M`<li
                class="flex items-baseline gap-2 text-balance before:text-zinc-700 before:content-['✦'] lg:gap-4"
              >
                ${e}
              </li>`)}
        </ul>
      </div>
    `}createRenderRoot(){return this}};Gc=c1([te("twyne-impact")],Gc);const u1="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='1.75'/%3e%3c/svg%3e";var h1=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,Gh=(s,e,t,i)=>{for(var r=i>1?void 0:i?d1(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&h1(e,t,r),r};let $a=class extends pe(X){constructor(){super(...arguments),this.more=!1}toggleMore(){this.more=!this.more}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){oe.from("header > *",{y:-64}),window.addEventListener("scroll",()=>{this.more=!1}),oe.to("header",{scrollTrigger:{trigger:".hero",start:"60 60",end:"60 0",toggleActions:"play none none reverse",scrub:1},outline:"1px solid hsla(0 0 100% / 0.05)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return M`
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
                  href="${this.t("links.github.url")}"
                  label="${this.t("links.github.label")}"
                  index="02"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${this.t("links.linkedin.url")}"
                  label="${this.t("links.linkedin.label")}"
                  index="03"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${this.t("links.email.url")}"
                  label="${this.t("links.email.label")}"
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
                src="${u1}"
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
                  label="${this.t("twyne.menu.goal")}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#proposal"
                  label="${this.t("twyne.menu.proposal")}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#impact"
                  label="${this.t("twyne.menu.impact")}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#mobile"
                  label="${this.t("twyne.menu.mobile")}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#conclusion"
                  label="${this.t("twyne.menu.final")}"
                ></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden items-center justify-end gap-1 lg:flex">
            <a
              class="cta-button px-3.5 pt-2 pb-2.5 text-[.875rem]"
              href="${this.t("links.projects.url")}"
            >
              ${this.t("featured.button")}
            </a>
            <languages-dropdown></languages-dropdown>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};Gh([V({type:Boolean})],$a.prototype,"more",2);$a=Gh([te("twyne-menu")],$a);const Kh="/src/0f79a9.png",Jh="/src/e2bfcc.png",Zh="/src/4cb65f.png",Qh="/src/04ff88.png",ed="/src/df5b53.png";var f1=Object.getOwnPropertyDescriptor,p1=(s,e,t,i)=>{for(var r=i>1?void 0:i?f1(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Kc=class extends pe(X){screensMotion(){document.querySelectorAll("[data-parallax-layers]").forEach(s=>{let e=oe.timeline({scrollTrigger:{trigger:"#mobile-images",start:"0% 100%",end:"100% 0%",scrub:0}});[{layer:"1",ys:"30%",ye:"0%",opacity:.5},{layer:"2",ys:"20%",ye:"5%",opacity:.75},{layer:"3",ys:"10%",ye:"10%",opacity:1},{layer:"4",ys:"20%",ye:"5%",opacity:.75},{layer:"5",ys:"30%",ye:"0%",opacity:.5}].forEach((i,r)=>{e.fromTo(s.querySelectorAll(`[data-parallax-layer="${i.layer}"]`),{y:i.ys,opacity:i.opacity},{y:i.ye,opacity:1,ease:"none"},r===0?void 0:"<")})})}firstUpdated(s){this.screensMotion()}render(){return M`
      <section id="mobile" class="mt-24 py-24 xl:mt-32 xl:py-32">
        <h2
          class="mb-16 text-center text-[2.5rem] leading-normal tracking-tighter text-zinc-50 xl:mb-32 2xl:text-[3rem]"
        >
          ${ui(this.t("twyne.mobile.t1"))}
        </h2>
        <div
          id="mobile-images"
          class="mx-auto grid max-w-[1920px] grid-cols-5 items-center justify-center gap-4 px-4"
          data-parallax-layers
        >
          <img
            src="${Jh}"
            data-parallax-layer="1"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 1"
          />
          <img
            src="${Kh}"
            data-parallax-layer="2"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 2"
          />
          <img
            src="${Zh}"
            data-parallax-layer="3"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 3"
          />
          <img
            src="${Qh}"
            data-parallax-layer="4"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 4"
          />
          <img
            src="${ed}"
            data-parallax-layer="5"
            class="mobile-screen"
            loading="lazy"
            alt="Mobile screen 5"
          />
        </div>
      </section>
    `}createRenderRoot(){return this}};Kc=p1([te("twyne-mobile")],Kc);var g1=Object.defineProperty,m1=Object.getOwnPropertyDescriptor,td=(s,e,t,i)=>{for(var r=i>1?void 0:i?m1(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&g1(e,t,r),r};let Ca=class extends pe(X){constructor(){super(...arguments),this.currentIndex=0,this.abortController=new AbortController,this.handlePrev=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateMobScreens())},this.handleNext=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateMobScreens())}}connectedCallback(){super.connectedCallback(),this.abortController=new AbortController}disconnectedCallback(){super.disconnectedCallback(),this.abortController.abort()}firstUpdated(){this.initCarousel()}updated(s){s.has("lang")&&this.updateComplete.then(()=>{this.initCarousel()})}initCarousel(){if(this.abortController.abort(),this.abortController=new AbortController,this.screens=this.querySelectorAll(".mob-carrossel img"),!this.screens.length)return;this.currentIndex=Math.min(this.currentIndex,this.screens.length-1),this.updateMobScreens=()=>{this.screens.forEach((i,r)=>{const n=r===this.currentIndex;oe.to(i,{opacity:n?1:0,y:n?0:100,duration:.4,delay:n?.2:0,ease:"power2.out",onStart:()=>{n&&i.classList.remove("invisible")},onComplete:()=>{n||i.classList.add("invisible")}})})},this.updateMobScreens();const s=this.querySelector("button[data-prev]"),e=this.querySelector("button[data-next]"),{signal:t}=this.abortController;s&&e&&(s.addEventListener("click",this.handlePrev,{signal:t}),e.addEventListener("click",this.handleNext,{signal:t}))}render(){var s;return M`
      <section class="relative mt-24 px-2 xl:mt-32">
        <div class="container">
          <h2
            class="mb-10 text-center text-[2rem] leading-normal tracking-tighter text-zinc-50 xl:text-[2.5rem] 2xl:text-[3rem]"
          >
            ${ui(this.t("twyne.mobile.t1"))}
          </h2>

          <div class="mob-carrossel relative overflow-hidden">
            <img
              src="${Kh}"
              class="mobile-screen relative"
              loading="lazy"
              alt="Mobile screen"
            />
            <img
              src="${Jh}"
              class="mobile-screen invisible absolute top-0 left-0"
              loading="lazy"
              alt="Mobile screen"
            />
            <img
              src="${Zh}"
              class="mobile-screen invisible absolute top-0 left-0"
              loading="lazy"
              alt="Mobile screen"
            />
            <img
              src="${Qh}"
              class="mobile-screen invisible absolute top-0 left-0"
              loading="lazy"
              alt="Mobile screen"
            />
            <img
              src="${ed}"
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
    `}createRenderRoot(){return this}};td([V({type:Number})],Ca.prototype,"currentIndex",2);Ca=td([te("mobile-screens")],Ca);const _1="/src/6ab55e.png",v1="/src/b0e17e.png",b1="/src/96ef6f.png",y1="/src/2bf8a7.png",x1="/src/2eab02.png",w1="/src/a54df0.png",S1="/src/b3d826.png",$1="/src/adef9e.png",C1="/src/120066.png",k1="/src/908f2c.png",P1="/src/20a18e.png";var T1=Object.getOwnPropertyDescriptor,O1=(s,e,t,i)=>{for(var r=i>1?void 0:i?T1(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};oe.registerPlugin(Z);let Jc=class extends pe(X){renderProposalList(){const s=this.t("twyne.proposal.l1",{returnObjects:!0});return M`
      <ul
        class="flex flex-col gap-4 leading-loose text-zinc-50 lg:gap-0 2xl:text-[1.25rem]"
      >
        ${s.map(e=>M`
            <li
              class="flex items-baseline gap-2 text-balance before:text-zinc-700 before:content-['✦'] lg:gap-4"
            >
              ${e}
            </li>
          `)}
      </ul>
    `}renderComponentGrid(){return M`
      <div class="flex flex-col items-center gap-2 lg:gap-4">
        <div class="flex gap-4">
          <div class="hidden flex-col gap-4 lg:flex">
            <img
              src="${x1}"
              height="425"
              width="216"
              loading="lazy"
              alt="Component B1"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
            <img
              src="${S1}"
              height="216"
              width="216"
              loading="lazy"
              alt="Component B3"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
          </div>
          <img
            src="${w1}"
            height="660"
            width="560"
            loading="lazy"
            alt="Component B2"
            class="w-[calc(560px*0.8)] xl:w-auto"
          />
        </div>
        <img
          src="${$1}"
          height="448"
          width="792"
          loading="lazy"
          alt="Component B4"
          class="w-[calc(792px*0.8)] xl:w-auto"
        />
        <div class="hidden gap-4 lg:flex">
          <img
            src="${P1}"
            height="218"
            width="280"
            loading="lazy"
            alt="Component B7"
            class="w-[calc(280px*0.8)] xl:w-auto"
          />
          <img
            src="${C1}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B5"
            class="w-[calc(240px*0.8)] xl:w-auto"
          />
          <img
            src="${k1}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B6"
            class="w-[calc(240px*0.8)] xl:w-auto"
          />
        </div>
      </div>
    `}renderComponentColumn(){return M`
      <div class="grid gap-2 lg:gap-4">
        <img
          src="${_1}"
          height="264"
          width="480"
          loading="lazy"
          alt="Component A1"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${v1}"
          height="248"
          width="480"
          loading="lazy"
          alt="Component A2"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${b1}"
          height="492"
          width="480"
          loading="lazy"
          alt="Component A3"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${y1}"
          height="296"
          width="480"
          loading="lazy"
          alt="Component A4"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
      </div>
    `}renderComponentsSection(){return M`
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
    `}render(){return M`
      <section id="proposal">
        <div
          class="container hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:block"
        ></div>
        <div class="container rounded-t-4xl px-6 pb-24 lg:py-24 2xl:p-32">
          <h2
            class="mb-10 text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem] 2xl:text-[3rem]"
          >
            ${this.t("twyne.proposal.t1")}
          </h2>
          <div class="flex grid-cols-2 flex-col gap-8 lg:grid">
            ${this.renderProposalList()}
            <p class="text-default text-pretty">
              ${this.t("twyne.proposal.p1")}
            </p>
          </div>
        </div>
        ${this.renderComponentsSection()}
        <twyne-impact></twyne-impact>
      </section>
    `}createRenderRoot(){return this}};Jc=O1([te("twyne-proposal")],Jc);const E1="/src/2f4591.png",A1="/src/367502.png",z1="/src/014eec.png";var M1=Object.defineProperty,D1=Object.getOwnPropertyDescriptor,id=(s,e,t,i)=>{for(var r=i>1?void 0:i?D1(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&M1(e,t,r),r};let ka=class extends pe(X){constructor(){super(...arguments),this.currentIndex=0,this.abortController=new AbortController,this.handlePrev=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateScreens())},this.handleNext=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateScreens())}}connectedCallback(){super.connectedCallback(),this.abortController=new AbortController}disconnectedCallback(){super.disconnectedCallback(),this.abortController.abort()}firstUpdated(){this.initCarousel()}updated(s){s.has("lang")&&this.updateComplete.then(()=>{this.initCarousel()})}initCarousel(){if(this.abortController.abort(),this.abortController=new AbortController,this.screens=this.querySelectorAll(".carrossel img"),!this.screens.length)return;this.currentIndex=Math.min(this.currentIndex,this.screens.length-1),this.updateScreens=()=>{this.screens.forEach((i,r)=>{const n=r===this.currentIndex;oe.to(i,{opacity:n?1:0,y:n?0:100,duration:.4,delay:n?.2:0,ease:"power2.out",onStart:()=>{n&&i.classList.remove("invisible")},onComplete:()=>{n||i.classList.add("invisible")}})})},this.updateScreens();const s=this.querySelector("button[data-prev]"),e=this.querySelector("button[data-next]"),{signal:t}=this.abortController;s&&e&&(s.addEventListener("click",this.handlePrev,{signal:t}),e.addEventListener("click",this.handleNext,{signal:t}))}render(){var s;return M`
      <section class="relative mt-24 xl:mt-32">
        <div class="container">
          <div class="carrossel relative overflow-hidden">
            <img
              src="${E1}"
              width="1728"
              height="976"
              loading="lazy"
              class="relative rounded-[.5rem]"
              alt="Twyne screen 1"
            />
            <img
              src="${A1}"
              width="1728"
              height="976"
              loading="lazy"
              class="invisible absolute top-0 left-0 rounded-[.5rem]"
              alt="Twyne screen 2"
            />
            <img
              src="${z1}"
              width="1728"
              height="976"
              loading="lazy"
              class="invisible absolute top-0 left-0 rounded-[.5rem]"
              alt="Twyne screen 3"
            />
          </div>

          <div class="absolute inset-0">
            <div
              class="sticky top-[calc(100dvh-72px)] isolate flex translate-y-1/2 justify-center"
            >
              <div
                class="relative z-20 flex gap-px rounded-full shadow-xl shadow-zinc-950/25 backdrop-blur-md"
              >
                <button
                  data-prev
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/80 py-3 ps-5 pe-4 text-[.75rem] leading-none tracking-[.05em] text-zinc-950 uppercase transition-all hover:bg-zinc-50"
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
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/80 py-3 ps-4 pe-5 text-[.75rem] leading-none tracking-[.05em] text-zinc-950 uppercase transition-all hover:bg-zinc-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};id([V({type:Number})],ka.prototype,"currentIndex",2);ka=id([te("twyne-screens")],ka);

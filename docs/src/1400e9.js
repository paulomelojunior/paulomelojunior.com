var Pd=Object.defineProperty;var Td=(s,e,t)=>e in s?Pd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var j=(s,e,t)=>Td(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const Y=s=>typeof s=="string",cr=()=>{let s,e;const t=new Promise((i,n)=>{s=i,e=n});return t.resolve=s,t.reject=e,t},Ol=s=>s==null?"":""+s,Od=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},Ad=/###/g,Al=s=>s&&s.indexOf("###")>-1?s.replace(Ad,"."):s,Fl=s=>!s||Y(s),Cr=(s,e,t)=>{const i=Y(e)?e.split("."):e;let n=0;for(;n<i.length-1;){if(Fl(s))return{};const r=Al(i[n]);!s[r]&&t&&(s[r]=new t),Object.prototype.hasOwnProperty.call(s,r)?s=s[r]:s={},++n}return Fl(s)?{}:{obj:s,k:Al(i[n])}},Ll=(s,e,t)=>{const{obj:i,k:n}=Cr(s,e,Object);if(i!==void 0||e.length===1){i[n]=t;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=Cr(s,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Cr(s,o,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=t},Fd=(s,e,t,i)=>{const{obj:n,k:r}=Cr(s,e,Object);n[r]=n[r]||[],n[r].push(t)},Ys=(s,e)=>{const{obj:t,k:i}=Cr(s,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},Ld=(s,e,t)=>{const i=Ys(s,t);return i!==void 0?i:Ys(e,t)},cc=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?Y(s[i])||s[i]instanceof String||Y(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):cc(s[i],e[i],t):s[i]=e[i]);return s},kn=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Md={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const zd=s=>Y(s)?s.replace(/[&<>"'\/]/g,e=>Md[e]):s;class Rd{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const jd=[" ",",","?","!",";"],Id=new Rd(20),Nd=(s,e,t)=>{e=e||"",t=t||"";const i=jd.filter(o=>e.indexOf(o)<0&&t.indexOf(o)<0);if(i.length===0)return!0;const n=Id.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(s);if(!r){const o=s.indexOf(t);o>0&&!n.test(s.substring(0,o))&&(r=!0)}return r},Zo=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;const i=e.split(t);let n=s;for(let r=0;r<i.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<i.length;++l)if(l!==r&&(a+=t),a+=i[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}n=o}return n},Xs=s=>s==null?void 0:s.replace("_","-"),Bd={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){var t,i;(i=(t=console==null?void 0:console[s])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Gs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Bd,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,n){return n&&!this.debug?null:(Y(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Gs(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Gs(this.logger,e)}}var ri=new Gs;class vo{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(t)||0;this.observers[i].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a.apply(a,[e,...i])})}}class Ml extends vo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var u,c;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):Y(i)&&r?a.push(...i.split(r)):a.push(i)));const l=Ys(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!o||!Y(i)?l:Zo((c=(u=this.data)==null?void 0:u[e])==null?void 0:c[t],i,r)}addResource(e,t,i,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),n=t,t=a[1]),this.addNamespaces(t),Ll(this.data,a,n),r.silent||this.emit("added",e,t,i,n)}addResources(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(Y(i[r])||Array.isArray(i[r]))&&this.addResource(e,t,r,i[r],{silent:!0});n.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),n=i,i=t,t=a[1]),this.addNamespaces(t);let l=Ys(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?cc(l,i,r):l={...l,...i},Ll(this.data,a,l),o.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(n=>t[n]&&Object.keys(t[n]).length>0)}toJSON(){return this.data}}var hc={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,n){return s.forEach(r=>{var o;e=((o=this.processors[r])==null?void 0:o.process(e,t,i,n))??e}),e}};const zl={},Rl=s=>!Y(s)&&typeof s!="boolean"&&typeof s!="number";class Ks extends vo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Od(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ri.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Nd(e,i,n);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Y(r)?[r]:r};const u=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(u[0])>-1)&&(r=u.shift()),e=u.join(n)}return{key:e,namespaces:Y(r)?[r]:r}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],u=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((u==null?void 0:u.toLowerCase())==="cimode"){if(c){const A=t.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${A}${o}`,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${A}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:o}const h=this.resolve(e,t);let d=h==null?void 0:h.res;const f=(h==null?void 0:h.usedKey)||o,g=(h==null?void 0:h.exactUsedKey)||o,p=["[object Number]","[object Function]","[object RegExp]"],_=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,v=t.count!==void 0&&!Y(t.count),D=Ks.hasDefaultValue(t),x=v?this.pluralResolver.getSuffix(u,t.count,t):"",C=t.ordinal&&v?this.pluralResolver.getSuffix(u,t.count,{ordinal:!1}):"",$=v&&!t.ordinal&&t.count===0,w=$&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${x}`]||t[`defaultValue${C}`]||t.defaultValue;let P=d;b&&!d&&D&&(P=w);const E=Rl(P),k=Object.prototype.toString.apply(P);if(b&&P&&E&&p.indexOf(k)<0&&!(Y(_)&&Array.isArray(P))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const A=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,P,{...t,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(h.res=A,h.usedParams=this.getUsedParamsDetails(t),h):A}if(r){const A=Array.isArray(P),T=A?[]:{},H=A?g:f;for(const z in P)if(Object.prototype.hasOwnProperty.call(P,z)){const F=`${H}${r}${z}`;D&&!d?T[z]=this.translate(F,{...t,defaultValue:Rl(w)?w[z]:void 0,joinArrays:!1,ns:a}):T[z]=this.translate(F,{...t,joinArrays:!1,ns:a}),T[z]===F&&(T[z]=P[z])}d=T}}else if(b&&Y(_)&&Array.isArray(d))d=d.join(_),d&&(d=this.extendTranslation(d,e,t,i));else{let A=!1,T=!1;!this.isValidLookup(d)&&D&&(A=!0,d=w),this.isValidLookup(d)||(T=!0,d=o);const z=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&T?void 0:d,F=D&&w!==d&&this.options.updateMissing;if(T||A||F){if(this.logger.log(F?"updateKey":"missingKey",u,l,o,F?w:d),r){const W=this.resolve(o,{...t,keySeparator:!1});W&&W.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const M=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&M&&M[0])for(let W=0;W<M.length;W++)I.push(M[W]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(t.lng||this.language):I.push(t.lng||this.language);const N=(W,y,q)=>{var me;const ce=D&&q!==d?q:z;this.options.missingKeyHandler?this.options.missingKeyHandler(W,l,y,ce,F,t):(me=this.backendConnector)!=null&&me.saveMissing&&this.backendConnector.saveMissing(W,l,y,ce,F,t),this.emit("missingKey",W,l,y,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&v?I.forEach(W=>{const y=this.pluralResolver.getSuffixes(W,t);$&&t[`defaultValue${this.options.pluralSeparator}zero`]&&y.indexOf(`${this.options.pluralSeparator}zero`)<0&&y.push(`${this.options.pluralSeparator}zero`),y.forEach(q=>{N([W],o+q,t[`defaultValue${q}`]||w)})}):N(I,o,w))}d=this.extendTranslation(d,e,t,h,i),T&&d===o&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${o}`),(T||A)&&this.options.parseMissingKeyHandler&&(d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,A?d:void 0))}return n?(h.res=d,h.usedParams=this.getUsedParamsDetails(t),h):d}extendTranslation(e,t,i,n,r){var u,c;var o=this;if((u=this.i18nFormat)!=null&&u.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const h=Y(e)&&(((c=i==null?void 0:i.interpolation)==null?void 0:c.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(h){const g=e.match(this.interpolator.nestingRegexp);d=g&&g.length}let f=i.replace&&!Y(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||n.usedLng,i),h){const g=e.match(this.interpolator.nestingRegexp),p=g&&g.length;d<p&&(i.nest=!1)}!i.lng&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var g=arguments.length,p=new Array(g),_=0;_<g;_++)p[_]=arguments[_];return(r==null?void 0:r[0])===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`),null):o.translate(...p,t)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=Y(a)?[a]:a;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=hc.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,n,r,o,a;return Y(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const u=this.extractFromKey(l,t),c=u.key;n=c;let h=u.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const d=t.count!==void 0&&!Y(t.count),f=d&&!t.ordinal&&t.count===0,g=t.context!==void 0&&(Y(t.context)||typeof t.context=="number")&&t.context!=="",p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);h.forEach(_=>{var b,v;this.isValidLookup(i)||(a=_,!zl[`${p[0]}-${_}`]&&((b=this.utils)!=null&&b.hasLoadedNamespace)&&!((v=this.utils)!=null&&v.hasLoadedNamespace(a))&&(zl[`${p[0]}-${_}`]=!0,this.logger.warn(`key "${n}" for languages "${p.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach(D=>{var $;if(this.isValidLookup(i))return;o=D;const x=[c];if(($=this.i18nFormat)!=null&&$.addLookupKeys)this.i18nFormat.addLookupKeys(x,c,D,_,t);else{let w;d&&(w=this.pluralResolver.getSuffix(D,t.count,t));const P=`${this.options.pluralSeparator}zero`,E=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(x.push(c+w),t.ordinal&&w.indexOf(E)===0&&x.push(c+w.replace(E,this.options.pluralSeparator)),f&&x.push(c+P)),g){const k=`${c}${this.options.contextSeparator}${t.context}`;x.push(k),d&&(x.push(k+w),t.ordinal&&w.indexOf(E)===0&&x.push(k+w.replace(E,this.options.pluralSeparator)),f&&x.push(k+P))}}let C;for(;C=x.pop();)this.isValidLookup(i)||(r=C,i=this.getResource(D,_,C,t))}))})}),{res:i,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var r;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(r=this.i18nFormat)!=null&&r.getResource?this.i18nFormat.getResource(e,t,i,n):this.resourceStore.getResource(e,t,i,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Y(e.replace);let n=i?e.replace:e;if(i&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const r of t)delete n[r]}return n}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class jl{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ri.create("languageUtils")}getScriptPartFromCode(e){if(e=Xs(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Xs(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Y(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Y(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return Y(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):Y(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}const Il={zero:0,one:1,two:2,few:3,many:4,other:5},Nl={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Hd{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=ri.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Xs(e==="dev"?"en":e),n=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:n})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Nl;if(!e.match(/-|_/))return Nl;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,t)}return this.pluralRulesCache[r]=o,o}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(n=>`${t}${n}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((n,r)=>Il[n]-Il[r]).map(n=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${n}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,i);return n?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Bl=function(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Ld(s,e,t);return!r&&n&&Y(t)&&(r=Zo(s,t,i),r===void 0&&(r=Zo(e,t,i))),r},To=s=>s.replace(/\$/g,"$$$$");class Ud{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ri.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:u,unescapeSuffix:c,unescapePrefix:h,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:g,nestingSuffixEscaped:p,nestingOptionsSeparator:_,maxReplaces:b,alwaysFormat:v}=e.interpolation;this.escape=t!==void 0?t:zd,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?kn(r):o||"{{",this.suffix=a?kn(a):l||"}}",this.formatSeparator=u||",",this.unescapePrefix=c?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=d?kn(d):f||kn("$t("),this.nestingSuffix=g?kn(g):p||kn(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=b||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,n){var f;let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},u=g=>{if(g.indexOf(this.formatSeparator)<0){const v=Bl(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(v,void 0,i,{...n,...t,interpolationkey:g}):v}const p=g.split(this.formatSeparator),_=p.shift().trim(),b=p.join(this.formatSeparator).trim();return this.format(Bl(t,l,_,this.options.keySeparator,this.options.ignoreJSONStructure),b,i,{...n,...t,interpolationkey:_})};this.resetRegExp();const c=(n==null?void 0:n.missingInterpolationHandler)||this.options.missingInterpolationHandler,h=((f=n==null?void 0:n.interpolation)==null?void 0:f.skipOnVariables)!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>To(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?To(this.escape(g)):To(g)}].forEach(g=>{for(a=0;r=g.regex.exec(e);){const p=r[1].trim();if(o=u(p),o===void 0)if(typeof c=="function"){const b=c(e,r,n);o=Y(b)?b:""}else if(n&&Object.prototype.hasOwnProperty.call(n,p))o="";else if(h){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),o="";else!Y(o)&&!this.useRawValueToEscape&&(o=Ol(o));const _=g.safeValue(o);if(e=e.replace(r[0],_),h?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=r[0].length):g.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,u)=>{const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const h=l.split(new RegExp(`${c}[ ]*{`));let d=`{${h[1]}`;l=h[0],d=this.interpolate(d,o);const f=d.match(/'/g),g=d.match(/"/g);(((f==null?void 0:f.length)??0)%2===0&&!g||g.length%2!==0)&&(d=d.replace(/'/g,'"'));try{o=JSON.parse(d),u&&(o={...u,...o})}catch(p){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,p),`${l}${c}${d}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!Y(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let u=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const c=n[1].split(this.formatSeparator).map(h=>h.trim());n[1]=c.shift(),l=c,u=!0}if(r=t(a.call(this,n[1].trim(),o),o),r&&n[0]===e&&!Y(r))return r;Y(r)||(r=Ol(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),u&&(r=l.reduce((c,h)=>this.format(c,h,i.lng,{...i,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const Vd=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);e==="currency"&&n.indexOf(":")<0?t.currency||(t.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?t.range||(t.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,""),c=a.trim();t[c]||(t[c]=u),u==="false"&&(t[c]=!1),u==="true"&&(t[c]=!0),isNaN(u)||(t[c]=parseInt(u,10))}})}return{formatName:e,formatOptions:t}},Pn=s=>{const e={};return(t,i,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=i+JSON.stringify(r);let a=e[o];return a||(a=s(Xs(i),n),e[o]=a),a(t)}};class qd{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ri.create("formatter"),this.options=e,this.formats={number:Pn((t,i)=>{const n=new Intl.NumberFormat(t,{...i});return r=>n.format(r)}),currency:Pn((t,i)=>{const n=new Intl.NumberFormat(t,{...i,style:"currency"});return r=>n.format(r)}),datetime:Pn((t,i)=>{const n=new Intl.DateTimeFormat(t,{...i});return r=>n.format(r)}),relativetime:Pn((t,i)=>{const n=new Intl.RelativeTimeFormat(t,{...i});return r=>n.format(r,i.range||"day")}),list:Pn((t,i)=>{const n=new Intl.ListFormat(t,{...i});return r=>n.format(r)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Pn(t)}format(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{var h;const{formatName:u,formatOptions:c}=Vd(l);if(this.formats[u]){let d=a;try{const f=((h=n==null?void 0:n.formatParams)==null?void 0:h[n.interpolationkey])||{},g=f.locale||f.lng||n.locale||n.lng||i;d=this.formats[u](a,g,{...c,...n,...f})}catch(f){this.logger.warn(f)}return d}else this.logger.warn(`there was no format function for ${u}`);return a},e)}}const Wd=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class Yd extends vo{constructor(e,t,i){var r,o;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=ri.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],(o=(r=this.backend)==null?void 0:r.init)==null||o.call(r,i,n.backend,n)}queueLoad(e,t,i,n){const r={},o={},a={},l={};return e.forEach(u=>{let c=!0;t.forEach(h=>{const d=`${u}|${h}`;!i.reload&&this.store.hasResourceBundle(u,h)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?o[d]===void 0&&(o[d]=!0):(this.state[d]=1,c=!1,o[d]===void 0&&(o[d]=!0),r[d]===void 0&&(r[d]=!0),l[h]===void 0&&(l[h]=!0)))}),c||(a[u]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const n=e.split("|"),r=n[0],o=n[1];t&&this.emit("failedLoading",r,o,t),!t&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Fd(l.loaded,[r],o),Wd(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{a[u]||(a[u]={});const c=l.loaded[u];c.length&&c.forEach(h=>{a[u][h]===void 0&&(a[u][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(u,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(u&&c&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,n+1,r*2,o)},r);return}o(u,c)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const u=l(e,t);u&&typeof u.then=="function"?u.then(c=>a(null,c)).catch(a):a(null,u)}catch(u){a(u)}return}return l(e,t,a)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();Y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Y(t)&&(t=[t]);const r=this.queueLoad(e,t,i,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),n=i[0],r=i[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${t}loaded namespace ${r} for language ${n}`,a),this.loaded(e,o,a)})}saveMissing(e,t,i,n,r){var l,u,c,h,d;let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((u=(l=this.services)==null?void 0:l.utils)!=null&&u.hasLoadedNamespace&&!((h=(c=this.services)==null?void 0:c.utils)!=null&&h.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((d=this.backend)!=null&&d.create){const f={...o,isUpdate:r},g=this.backend.create.bind(this.backend);if(g.length<6)try{let p;g.length===5?p=g(e,t,i,n,f):p=g(e,t,i,n),p&&typeof p.then=="function"?p.then(_=>a(null,_)).catch(a):a(null,p)}catch(p){a(p)}else g(e,t,i,n,a,f)}!e||!e[0]||this.store.addResource(e[0],t,i,n)}}}const Hl=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),Y(s[1])&&(e.defaultValue=s[1]),Y(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ul=s=>{var e,t;return Y(s.ns)&&(s.ns=[s.ns]),Y(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),Y(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),((t=(e=s.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s},gs=()=>{},Xd=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class Br extends vo{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ul(e),this.services={},this.logger=ri,this.modules={external:[]},Xd(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(Y(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const n=Hl();this.options={...n,...this.options,...Ul(t)},this.options.interpolation={...n.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const r=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?ri.init(r(this.modules.logger),this.options):ri.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=qd;const h=new jl(this.options);this.store=new Ml(this.options.resources,this.options);const d=this.services;d.logger=ri,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new Hd(h,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(d.formatter=r(c),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Ud(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new Yd(r(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),_=1;_<g;_++)p[_-1]=arguments[_];e.emit(f,...p)}),this.modules.languageDetector&&(d.languageDetector=r(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=r(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Ks(this.services,this.options),this.translator.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),_=1;_<g;_++)p[_-1]=arguments[_];e.emit(f,...p)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=gs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return e.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return e.store[c](...arguments),e}});const l=cr(),u=()=>{const c=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),i(h,d)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?u():setTimeout(u,0),l}loadResources(e){var r,o;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:gs;const n=Y(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((n==null?void 0:n.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],l=u=>{if(!u||u==="cimode")return;this.services.languageUtils.toResolveHierarchy(u).forEach(h=>{h!=="cimode"&&a.indexOf(h)<0&&a.push(h)})};n?l(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>l(c)),(o=(r=this.options.preload)==null?void 0:r.forEach)==null||o.call(r,u=>l(u)),this.services.backendConnector.load(a,this.options.ns,u=>{!u&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(u)})}else i(null)}reloadResources(e,t,i){const n=cr();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=gs),this.services.backendConnector.reload(e,t,r=>{n.resolve(),i(r)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&hc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const n=cr();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,u)=>{u?(r(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,n.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},a=l=>{var c,h;!e&&!l&&this.services.languageDetector&&(l=[]);const u=Y(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||r(u),this.translator.language||this.translator.changeLanguage(u),(h=(c=this.services.languageDetector)==null?void 0:c.cacheUserLanguage)==null||h.call(c,u)),this.loadResources(u,d=>{o(d,u)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,i){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var u=arguments.length,c=new Array(u>2?u-2:0),h=2;h<u;h++)c[h-2]=arguments[h];l=n.options.overloadTranslationOptionHandler([o,a].concat(c))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const d=n.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(g=>`${l.keyPrefix}${d}${g}`):f=l.keyPrefix?`${l.keyPrefix}${d}${o}`:o,n.t(f,l)};return Y(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=i,r}t(){var n;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(n=this.translator)==null?void 0:n.translate(...t)}exists(){var n;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(n=this.translator)==null?void 0:n.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const u=this.services.backendConnector.state[`${a}|${l}`];return u===-1||u===0||u===2};if(t.precheck){const a=t.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!n||o(r,e)))}loadNamespaces(e,t){const i=cr();return this.options.ns?(Y(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=cr();Y(e)&&(e=[e]);const n=this.options.preload||[],r=e.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}dir(e){var n,r;if(e||(e=this.resolvedLanguage||(((n=this.languages)==null?void 0:n.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((r=this.services)==null?void 0:r.languageUtils)||new jl(Hl());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Br(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:gs;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new Br(n);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i){const a=Object.keys(this.store.data).reduce((l,u)=>(l[u]={...this.store.data[u]},Object.keys(l[u]).reduce((c,h)=>(c[h]={...l[u][h]},c),{})),{});r.store=new Ml(a,n),r.services.resourceStore=r.store}return r.translator=new Ks(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c];r.emit(a,...u)}),r.init(n,t),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const m=Br.createInstance();m.createInstance=Br.createInstance;m.createInstance;m.dir;m.init;m.loadResources;m.reloadResources;m.use;m.changeLanguage;m.getFixedT;m.t;m.exists;m.setDefaultNamespace;m.hasLoadedNamespace;m.loadNamespaces;m.loadLanguages;const{slice:Gd,forEach:Kd}=[];function Jd(s){return Kd.call(Gd.call(arguments,1),e=>{if(e)for(const t in e)s[t]===void 0&&(s[t]=e[t])}),s}function Zd(s){return typeof s!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(s))}const Vl=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Qd=function(s,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},n=encodeURIComponent(e);let r=`${s}=${n}`;if(i.maxAge>0){const o=i.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(o)}`}if(i.domain){if(!Vl.test(i.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${i.domain}`}if(i.path){if(!Vl.test(i.path))throw new TypeError("option path is invalid");r+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");r+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(r+="; HttpOnly"),i.secure&&(r+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(r+="; Partitioned"),r},ql={create(s,e,t,i){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(n.expires=new Date,n.expires.setTime(n.expires.getTime()+t*60*1e3)),i&&(n.domain=i),document.cookie=Qd(s,e,n)},read(s){const e=`${s}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let n=t[i];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(e)===0)return n.substring(e.length,n.length)}return null},remove(s,e){this.create(s,"",-1,e)}};var ef={name:"cookie",lookup(s){let{lookupCookie:e}=s;if(e&&typeof document<"u")return ql.read(e)||void 0},cacheUserLanguage(s,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:n,cookieOptions:r}=e;t&&typeof document<"u"&&ql.create(t,s,i,n,r)}},tf={name:"querystring",lookup(s){var i;let{lookupQuerystring:e}=s,t;if(typeof window<"u"){let{search:n}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(n=window.location.hash.substring(window.location.hash.indexOf("?")));const o=n.substring(1).split("&");for(let a=0;a<o.length;a++){const l=o[a].indexOf("=");l>0&&o[a].substring(0,l)===e&&(t=o[a].substring(l+1))}}return t}},nf={name:"hash",lookup(s){var n;let{lookupHash:e,lookupFromHashIndex:t}=s,i;if(typeof window<"u"){const{hash:r}=window.location;if(r&&r.length>2){const o=r.substring(1);if(e){const a=o.split("&");for(let l=0;l<a.length;l++){const u=a[l].indexOf("=");u>0&&a[l].substring(0,u)===e&&(i=a[l].substring(u+1))}}if(i)return i;if(!i&&t>-1){const a=r.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?(n=a[typeof t=="number"?t:0])==null?void 0:n.replace("/",""):void 0}}}return i}};let Tn=null;const Wl=()=>{if(Tn!==null)return Tn;try{if(Tn=typeof window<"u"&&window.localStorage!==null,!Tn)return!1;const s="i18next.translate.boo";window.localStorage.setItem(s,"foo"),window.localStorage.removeItem(s)}catch{Tn=!1}return Tn};var rf={name:"localStorage",lookup(s){let{lookupLocalStorage:e}=s;if(e&&Wl())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupLocalStorage:t}=e;t&&Wl()&&window.localStorage.setItem(t,s)}};let On=null;const Yl=()=>{if(On!==null)return On;try{if(On=typeof window<"u"&&window.sessionStorage!==null,!On)return!1;const s="i18next.translate.boo";window.sessionStorage.setItem(s,"foo"),window.sessionStorage.removeItem(s)}catch{On=!1}return On};var sf={name:"sessionStorage",lookup(s){let{lookupSessionStorage:e}=s;if(e&&Yl())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupSessionStorage:t}=e;t&&Yl()&&window.sessionStorage.setItem(t,s)}},of={name:"navigator",lookup(s){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:n}=navigator;if(t)for(let r=0;r<t.length;r++)e.push(t[r]);i&&e.push(i),n&&e.push(n)}return e.length>0?e:void 0}},af={name:"htmlTag",lookup(s){let{htmlTag:e}=s,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},lf={name:"path",lookup(s){var n;let{lookupFromPathIndex:e}=s;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(n=t[typeof e=="number"?e:0])==null?void 0:n.replace("/",""):void 0}},uf={name:"subdomain",lookup(s){var n,r;let{lookupFromSubdomainIndex:e}=s;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((r=(n=window.location)==null?void 0:n.hostname)==null?void 0:r.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let dc=!1;try{document.cookie,dc=!0}catch{}const fc=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];dc||fc.splice(1,1);const cf=()=>({order:fc,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:s=>s});class pc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Jd(t,this.options||{},cf()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=n=>n.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(ef),this.addDetector(tf),this.addDetector(rf),this.addDetector(sf),this.addDetector(of),this.addDetector(af),this.addDetector(lf),this.addDetector(uf),this.addDetector(nf)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let n=this.detectors[i].lookup(this.options);n&&typeof n=="string"&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(i=>i!=null&&!Zd(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}pc.type="languageDetector";const hf={about:"About",journey:"Journey",praxis:"Method",connect:"Connect",languages:{en:"EN",pt:"PT"}},df={status:"Available for hiring",picDescription:"An image of Paul M., a bearded man with short, dark hair. He is looking to the right with a thoughtful expression. He is wearing a plain t-shirt.",content:{title:"Software designer",subtitle:"Crafting future-ready digital interactions.",h1:"Enthusiast of decentralized technologies",p1:", driven by the open-source movement and other geeky stuff. Previously part of an interactive marketing company focused on lead generation from Denver, CO.",h2:"Devoted to quality",p2:", I commit to continuous learning and professional development, staying abreast of emerging design trends tech advancements and best practices to deliver cutting-edge solutions."},cta:{label:"Last project showcase",url:"/last-project"}},ff={t1:"Design in thinking",p1:"From insight to interface, I design with people in mind. Merging aesthetics, purpose, and cutting-edge tech through Design Thinking and Human-Centered Design.",t2:"Technology to deliver",p2:"Learning from tech experts early on made algorithms a core part of my toolkit, bridging design and engineering to craft seamless, refined digital experiences."},pf={t0:"Journey",t1:"Design <br class='block md:hidden'> intern",p1:"During my internship, I had the opportunity to refine and develop skills across various functions. HTML and CSS development, marketing initiatives, visual design, branding, and UX/UI design.",t2:"Designer, <br class='block md:hidden'> front-end coder",p2:"In multifaceted collaboration with managers and the development team, we successfully redesigned the interfaces and features of company's software.",m2:"Also played a key role in co-creating a platform that facilitates connecting individuals facing legal issues with specialized professionals.",t3:"Visual and <br class='block md:hidden'> product designer",p3:"Early 2018, I held the role of a generalist designer, tasked with developing and managing all aspects of design and creative outputs for their product project.",m3:"Second half of the year, I collaborated with another company to design an open-source library of interface components.",t4:"Lead designer, <br class='block md:hidden'> UI engineer",p4:"Today responsible for redesigning the company's advanced lead management platform, using React components to improve performance and scalability."},gf={title:"Recent project",description:"A robust software for lead management, optimization, and distribution.",cta:"See details",project:"twyne.io"},mf={title:"Reach out"},_f={title:"Featured <br> works",button:"Featured works"},vf={menu:{about:"About",goal:"Goal",proposal:"Proposal",impact:"Impact",mobile:"Mobile",final:"Final"},t1:"Case study / 01",t2:"Twyne",about:{t1:"about",p1:"Developed by Ifficient, <span class='text-zinc-50'>Twyne is a robust software for lead management, optimization, and distribution, focused on monetization and real-time analytics.</span>",p2:"Targeted at the B2B market, it serves a few clients in volume, but with high ticket value and demanding customization.",details:{company:"Company",companyValue:"Ifficient",industry:"Industry",industryValue:"AdTech",product:"Product",productValue:"Software as a Service",contributions:"Contributions",contribution1:"Product Design",contribution2:"Design System",contribution3:"UI Engineering"}},goal:{t1:"Goal",p1:"Tackling one of the biggest challenges in digital design: creating a <span class='text-zinc-50'>modular</span>, <span class='text-zinc-50'>scalable</span>, and <span class='text-zinc-50'>adaptable</span> interface for highly complex software, with constant growth in features and requirements.",p2:"The visual approach needed to balance performance, readability, and continuous evolution, without requiring a restart for every new feature. Delivering clarity and control even in dense flows."},proposal:{t1:"Proposal",l1:["A robust, strategic, and flexible UI kit.","Simplified UI that puts information up front.","Built to last, scale, and ease development."],p1:"Each component carries decisions guided by performance, readability, and functional clarity, with special attention to business logic and the journey of corporate users."},impact:{t1:"Impact",l1:["Reduced rework for the engineering team.","Faster onboarding for new users.","Supports new modules with minimal friction.","Strengthened identity with a modern UI."]},numbers:{t1:"+ 400.000",p1:"Registrations acquired per day",t2:"+ 2 million",p2:"User clicks on campaigns",t3:"+ 7 million",p3:"Leads negotiated daily"},mobile:{t1:"Built on solid principles. Ready for any platform."},conclusion:{t1:"Final thoughts",p1:"The modularity of the component library enables smart reuse, reducing complexity and increasing development speed.",p2:"Decisions on layout, typography, contrast, and spacing were calibrated to support dense data environments without compromising readability.",p3:"The result is an interface that adapts to the usage context without losing visual coherence or functional integrity."}},bf={title:"Allugator",tags:"Design Partner, Start-up",year:"2018",description:"Acting as a generalist designer, I contributed key deliverables for the startup's growth in its early stage, from rebranding and brand communication to digital product evolution.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investors in 2018"},users:{title:"+ 7000 new users",subtitle:"+ 100% compared to 2017"},daily:{title:"+ 1000 daily in 2018",subtitle:"+ 100% compared to 2017"}}},yf={title:"Damus",tags:"Experiment, Rebranding",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Damus official website'>Damus</a> is a client for the decentralized social network Nostr, available for iOS, iPad, and macOS. It allows users to post text, images, videos, and GIFs, as well as interact with other users through the sending of <a href='https://en.wikipedia.org/wiki/Satoshi' class='underline text-zinc-100' target='_blank' title='Satoshi is the smallest unit of the system, representing 0.00000001 bitcoin, a hundredth of a millionth of a bitcoin.'>satoshis</a> and encrypted private messages.",description2:"The goal of Damus is to offer an alternative to traditional social networks, focusing on freedom of expression and privacy."},xf={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Interactive marketing company specialized in lead generation, based in Denver, CO.",description2:"There I led the design of Twyne and Path Evolution software, ensuring scalability and consistency in product evolution.",cta:"See details",fullView:"Full view"},Df={title:"Multiplayer Orchestra",tags:"Volunteer, Visual Design",year:"2017",description1:"Created by former students of UFMG's School of Music, Multiplayer explored soundtracks from series, movies, and games in their repertoire, connecting classical music to pop culture.",description2:"I was invited to join the project as a designer, taking care of visual communication and providing support in event production.",metrics:{audience:{title:"1.6k people in 2 concerts",subtitle:"@ Cine Theatro Brasil"},facebook:{title:"4.7k followers",subtitle:"Facebook"},youtube:{title:"2.1k subscribers",subtitle:"YouTube"}}},wf={404:{title:"404 · Page not found"},common:{description:"Enthusiast of decentralized technologies, Paul is a designer and coder from Brazil. Here you can find links to stay in touch with him.",keywords:"Paul M, Paulo Melo Jr, pmjr, digital product designer, product designer, interface designer, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animations, motion design, branding, portfolio, Brazil, São Paulo, decentralized technologies, bitcoin, nostr"},home:{title:"Paulo Melo Jr. · Designer and coder"},projects:{title:"Featured projects · Paulo Melo Jr.",keywords:"archive, projects, case studies"},lastProject:{title:"Twyne · Paulo Melo Jr.",keywords:"twyne, case study, product design, ui/ux, onboarding, mobile, web, adtech, interactive marketing, lead generation"}},Cf={home:{label:"Home",url:"/"},projects:{label:"Featured works",url:"/projects"},lastProject:{label:"Last project",url:"/last-project"},github:{label:"GitHub",url:"https://github.com/paulomelojunior"},linkedin:{label:"LinkedIn",url:"https://linkedin.com/in/paulomelojunior/"},email:{label:"Email",url:"mailto:hello@pmjr.cc"}},Sf={menu:hf,about:df,praxis:ff,journey:pf,cases:gf,connect:mf,featured:_f,twyne:vf,allugator:bf,damus:yf,ifficient:xf,multiplayer:Df,seo:wf,links:Cf},$f={about:"Sobre",journey:"Jornada",praxis:"Método",connect:"Contato",languages:{en:"EN",pt:"PT"}},Ef={status:"Disponível para contrato",picDescription:"Uma foto de Paulo, um homem barbado com cabelos curtos e escuros. Ele está olhando para a direita com uma expressão pensativa. Ele usa uma camisa simples.",content:{title:"Software designer",subtitle:"Criando experiências digitais prontas para o futuro.",h1:"Entusiasta de tecnologias descentralizadas",p1:" e valorizando soluções open-source. Recentemente atuei em uma empresa de marketing interativo especializada em geração de leads, com base em Denver, CO.",h2:"Comprometido com a qualidade",p2:" e o aprendizado contínuo, mantenho-me atualizado sobre tendências de design, avanços tecnológicos e as melhores práticas do setor para entregar soluções modernas e eficazes."},cta:{label:"Showcase do último projeto",url:"/last-project"}},kf={t1:"Design no pensar",p1:"Do insight à interface, projeto com foco nas pessoas. Unindo estética, propósito e tecnologia de ponta por meio do Design Thinking e Human-Centered Design.",t2:"Tecnologia para realizar",p2:"Aprender com experts em tecnologia desde cedo tornou algoritmos parte do meu repertório, conecto design e engenharia para criar experiências refinadas."},Pf={t0:"Jornada",t1:"Estagiário de <br class='block md:hidden'> design",p1:"Durante meu estágio, aprofundei e refinei habilidades em desenvolvimento front-end, participei de iniciativas de marketing, e atuei em design visual, branding e UX/UI.",m1:"",t2:"Designer, <br class='block md:hidden'> front-end coder",p2:"Em colaboração multifacetada com gerentes e a equipe de desenvolvimento, redesenhamos com sucesso as interfaces e funcionalidades do software da empresa.",m2:"Também desempenhei um papel fundamental na co-criação de uma plataforma que facilita a conexão de pessoas enfrentando questões legais com profissionais especializados.",t3:"Designer de produto",p3:"No início de 2018, exerci o papel de designer generalista, responsável por desenvolver e gerenciar todos os aspectos do design e saídas criativas para o projeto de produto.",m3:"Na segunda metade do ano, colaborei com outra empresa para projetar uma biblioteca open-source de componentes de interface.",t4:"Lead designer, <br class='block md:hidden'> UI engineer",p4:"Hoje responsável por redesenhar a plataforma avançada de gerenciamento de leads da empresa, usando componentes React para melhorar performance e escalabilidade."},Tf={title:"Projeto mais recente",description:"Um software robusto para gestão, otimização e distribuição de leads.",cta:"Ver detalhes",project:"twyne.io"},Of={title:"Entre em contato"},Af={title:"Projetos <br> em destaque",button:"Projetos destaque"},Ff={menu:{about:"Sobre",goal:"Objetivo",proposal:"Proposta",impact:"Impacto",mobile:"Mobile",final:"Final"},t1:"Estudo de caso / 01",t2:"Twyne",about:{t1:"O que é",p1:"Desenvolvida pela Ifficient, <span class='text-zinc-100'>o Twyne é um software robusto de gestão, otimização e distribuição de leads, com foco em monetização e análise em tempo real.</span>",p2:"Voltada para o mercado B2B, atende poucos clientes em volume, mas com alto ticket médio e exigências elevadas de personalização."},projectInfo:{company:"Empresa",companyValue:"Ifficient",industry:"Setor",industryValue:"AdTech",product:"Produto",productValue:"Software as a Service",contributions:"Contribuições",contribution1:"Design de Produto",contribution2:"Design System",contribution3:"UI Engineering"},goal:{t1:"Objetivo",p1:"Resolver um dos grandes desafios do design digital: criar uma <span class='text-zinc-100'>interface modular</span>, <span class='text-zinc-100'>escalável</span> e <span class='text-zinc-100'>adaptável</span> para um software de alta complexidade técnica, com crescimento constante de features e demandas.",p2:"A proposta visual precisava equilibrar performance, legibilidade e evolução contínua, sem exigir recomeços a cada nova funcionalidade. Oferecendo clareza e controle mesmo em fluxos densos."},proposal:{t1:"Proposta",l1:["Biblioteca de componentes robusta, estratégica e flexível.","UI simplificada e informações em primeiro plano.","Pensado para durar, escalar e facilitar o desenvolvimento."],p1:"Cada componente carrega decisões orientadas por performance, legibilidade e clareza funcional, com atenção especial à jornada dos usuários corporativos."},impact:{t1:"Impactos",l1:["Redução de retrabalho no time de engenharia.","Aumento na velocidade de onboarding de novos usuários.","Base que suportou a adição de novos módulos sem atrito.","Fortalecimento da identidade com uma UI moderna."]},numbers:{t1:"+ 400 mil",p1:"Registros adiquiridos por dia",t2:"+ 2 milhões",p2:"Clicks de usuários em campanhas",t3:"+ 7 milhões",p3:"Leads negociados diariamente"},mobile:{t1:"Construído com solidez. Pronto para qualquer plataforma."},conclusion:{t1:"Considerações finais",p1:"A modularidade do UI kit permite reuso inteligente, reduzindo complexidade e aumentando a velocidade de desenvolvimento.",p2:"As decisões de layout, tipografia, contraste e espaçamento foram calibradas para sustentar ambientes densos de dados sem comprometer a legibilidade.",p3:"O resultado é uma interface que se adapta ao contexto de uso sem perder coerência visual nem integridade funcional."}},Lf={title:"Allugator",tags:"Design Partner, Start-up",year:"2018",description:"Atuando como designer generalista, contribuí com entregas-chave para o crescimento da startup em seu estágio inicial, da reformulação da identidade e comunicação da marca à evolução do produto digital.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investidores em 2018"},users:{title:"+ 7000 usuários novos",subtitle:"+ 100% em relação a 2017"},daily:{title:"+ 1000 diárias em 2018",subtitle:"+ 100% em relação a 2017"}}},Mf={title:"Damus",tags:"Experimento, Rebranding",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Site oficial do Damus'>Damus</a> é um cliente para a rede social descentralizada Nostr, disponível para iOS, iPad e macOS. Ele permite aos usuários postar textos, imagens, vídeos e GIFs, além de interagir com outros usuários através de envio de <a href='https://pt.wikipedia.org/wiki/Bitcoin' class='underline text-zinc-100' target='_blank' title='Satoshi, é a menor quantidade do sistema, representando 0,00000001 bitcoin, um centésimo de milionésimo de bitcoin.'>satoshis</a> e mensagens privadas criptografadas.",description2:"O objetivo do Damus é oferecer uma alternativa às redes sociais tradicionais, com foco na liberdade de expressão e privacidade."},zf={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Companhia de marketing interativo especializada em geração de leads, com base em Denver, CO.",description2:"Nela liderei o design dos softwares Twyne e Path Evolution, assegurando escalabilidade e consistência na evolução dos produtos.",cta:"Ver detalhes",fullView:"Ver tudo"},Rf={title:"Orquestra Multiplayer",tags:"Voluntário, Visual Design",year:"2017",description1:"Criada por ex-alunos da Escola de Música da UFMG, a Multiplayer explorava trilhas sonoras de séries, filmes e jogos em seu repertório, ligando música erudita à cultura pop.",description2:"Fui convidado a integrar o projeto como designer, cuidando da comunicação visual e prestando suporte na produção dos eventos.",metrics:{audience:{title:"1600 pessoas em 2 concertos",subtitle:"@ Cine Theatro Brasil"},facebook:{title:"4,7 mil seguidores",subtitle:"Facebook"},youtube:{title:"2,1 mil inscritos",subtitle:"YouTube"}}},jf={404:{title:"404 · Página não encontrada"},common:{description:"Entusiasta de tecnologias descentralizadas, Paulo é designer e coder do Brasil. Aqui você encontra links para se conectar com ele.",keywords:"Paulo Melo Júnior, Paulo Melo Jr, Paul M, pmjr, designer de produto digital, product designer, designer de interface, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animações, motion design, branding, portfólio, Brasil, São Paulo, tecnologias descentralizadas, bitcoin, nostr"},home:{title:"Paulo Melo Jr. · Designer and coder"},projects:{title:"Projetos em destaque · Paulo Melo Jr.",keywords:"arquivo, projetos, cases"},lastProject:{title:"Twyne · Paulo Melo Jr.",keywords:"twyne, estudo de caso, design de produto, ui/ux, onboarding, mobile, web, adtech, marketing interativo, geração de leads"}},If={home:{label:"Home",url:"/"},projects:{label:"Projetos",url:"/projects"},lastProject:{label:"Último projeto",url:"/last-project"},github:{label:"GitHub",url:"https://github.com/paulomelojunior"},linkedin:{label:"LinkedIn",url:"https://linkedin.com/in/paulomelojunior/"},email:{label:"Email",url:"mailto:hello@pmjr.cc"}},Nf={menu:$f,about:Ef,praxis:kf,journey:Pf,cases:Tf,connect:Of,featured:Af,twyne:Ff,allugator:Lf,damus:Mf,ifficient:zf,multiplayer:Rf,seo:jf,links:If};m.use(pc).init({fallbackLng:"en",detection:{order:["navigator","htmlTag"],caches:["localStorage"]},interpolation:{escapeValue:!1},resources:{en:{translation:Sf},pt:{translation:Nf}}});m.on("languageChanged",s=>{document.documentElement.lang=s});var Bf="1.3.17";function gc(s,e,t){return Math.max(s,Math.min(e,t))}function Hf(s,e,t){return(1-t)*s+t*e}function Uf(s,e,t,i){return Hf(s,e,1-Math.exp(-t*i))}function Vf(s,e){return(s%e+e)%e}var qf=class{constructor(){j(this,"isRunning",!1);j(this,"value",0);j(this,"from",0);j(this,"to",0);j(this,"currentTime",0);j(this,"lerp");j(this,"duration");j(this,"easing");j(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const i=gc(0,this.currentTime/this.duration,1);e=i>=1;const n=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Uf(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function Wf(s,e){let t;return function(...i){let n=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(n,i)},e)}}var Yf=class{constructor(s,e,{autoResize:t=!0,debounce:i=250}={}){j(this,"width",0);j(this,"height",0);j(this,"scrollHeight",0);j(this,"scrollWidth",0);j(this,"debouncedResize");j(this,"wrapperResizeObserver");j(this,"contentResizeObserver");j(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});j(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});j(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Wf(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},mc=class{constructor(){j(this,"events",{})}emit(s,...e){var i;let t=this.events[s]||[];for(let n=0,r=t.length;n<r;n++)(i=t[n])==null||i.call(t,...e)}on(s,e){var t;return(t=this.events[s])!=null&&t.push(e)||(this.events[s]=[e]),()=>{var i;this.events[s]=(i=this.events[s])==null?void 0:i.filter(n=>e!==n)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}},Xl=100/6,Pi={passive:!1},Xf=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){j(this,"touchStart",{x:0,y:0});j(this,"lastDelta",{x:0,y:0});j(this,"window",{width:0,height:0});j(this,"emitter",new mc);j(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});j(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});j(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});j(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:i}=s;const n=i===1?Xl:i===2?this.window.width:1,r=i===1?Xl:i===2?this.window.height:1;e*=n,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});j(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Pi),this.element.addEventListener("touchstart",this.onTouchStart,Pi),this.element.addEventListener("touchmove",this.onTouchMove,Pi),this.element.addEventListener("touchend",this.onTouchEnd,Pi)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Pi),this.element.removeEventListener("touchstart",this.onTouchStart,Pi),this.element.removeEventListener("touchmove",this.onTouchMove,Pi),this.element.removeEventListener("touchend",this.onTouchEnd,Pi)}},Gl=s=>Math.min(1,1.001-Math.pow(2,-10*s)),_c=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:u=.1,infinite:c=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:p=!0,prevent:_,virtualScroll:b,overscroll:v=!0,autoRaf:D=!1,anchors:x=!1,autoToggle:C=!1,allowNestedScroll:$=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:P=w,stopInertiaOnNavigate:E=!1}={}){j(this,"_isScrolling",!1);j(this,"_isStopped",!1);j(this,"_isLocked",!1);j(this,"_preventNextNativeScrollEvent",!1);j(this,"_resetVelocityTimeout",null);j(this,"_rafId",null);j(this,"isTouching");j(this,"time",0);j(this,"userData",{});j(this,"lastVelocity",0);j(this,"velocity",0);j(this,"direction",0);j(this,"options");j(this,"targetScroll");j(this,"animatedScroll");j(this,"animate",new qf);j(this,"emitter",new mc);j(this,"dimensions");j(this,"virtualScroll");j(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});j(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});j(this,"onTransitionEnd",s=>{s.propertyName.includes("overflow")&&this.checkOverflow()});j(this,"onClick",s=>{const t=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.getAttribute("href"));if(this.options.anchors){const i=t.find(n=>{var r;return(r=n.getAttribute("href"))==null?void 0:r.includes("#")});if(i){const n=i.getAttribute("href");if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${n.split("#")[1]}`;this.scrollTo(o,r)}}}this.options.stopInertiaOnNavigate&&t.find(n=>n.host===window.location.host)&&this.reset()});j(this,"onPointerDown",s=>{s.button===1&&this.reset()});j(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const n=i.type.includes("touch"),r=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let u=i.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const c=this.options.prevent;if(u.find(_=>{var b,v,D;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((b=_.hasAttribute)==null?void 0:b.call(_,"data-lenis-prevent"))||n&&((v=_.hasAttribute)==null?void 0:v.call(_,"data-lenis-prevent-touch"))||r&&((D=_.hasAttribute)==null?void 0:D.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(_,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=n&&this.options.syncTouch,p=n&&i.type==="touchend";p&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});j(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});j(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Bf,(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Gl:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:u,infinite:c,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:g,autoResize:p,prevent:_,virtualScroll:b,overscroll:v,autoRaf:D,anchors:x,autoToggle:C,allowNestedScroll:$,naiveDimensions:P,stopInertiaOnNavigate:E},this.dimensions=new Yf(s,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Xf(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:n=!0,lerp:r=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:u,force:c=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof s=="string"&&["top","left","start","#"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let d;if(typeof s=="string"?(d=document.querySelector(s),d||(s==="#top"?s=0:console.warn("Lenis: Target not found",s))):s instanceof HTMLElement&&(s!=null&&s.nodeType)&&(d=s),d){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const f=d.getBoundingClientRect();s=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=e,s=Math.round(s),this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const d=s-this.animatedScroll;d>this.limit/2?s=s-this.limit:d<-this.limit/2&&(s=s+this.limit)}}else s=gc(0,s,this.limit);if(s===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=s),typeof o=="number"&&typeof a!="function"?a=Gl:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,s,{duration:o,easing:a,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),n&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(s,{deltaX:e,deltaY:t}){const i=Date.now(),n=s._lenis??(s._lenis={});let r,o,a,l,u,c,h,d;const f=this.options.gestureOrientation;if(i-(n.time??0)>2e3){n.time=Date.now();const C=window.getComputedStyle(s);n.computedStyle=C;const $=C.overflowX,w=C.overflowY;if(r=["auto","overlay","scroll"].includes($),o=["auto","overlay","scroll"].includes(w),n.hasOverflowX=r,n.hasOverflowY=o,!r&&!o||f==="vertical"&&!o||f==="horizontal"&&!r)return!1;u=s.scrollWidth,c=s.scrollHeight,h=s.clientWidth,d=s.clientHeight,a=u>h,l=c>d,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=u,n.scrollHeight=c,n.clientWidth=h,n.clientHeight=d}else a=n.isScrollableX,l=n.isScrollableY,r=n.hasOverflowX,o=n.hasOverflowY,u=n.scrollWidth,c=n.scrollHeight,h=n.clientWidth,d=n.clientHeight;if(!r&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!r||!a))return!1;let g;if(f==="horizontal")g="x";else if(f==="vertical")g="y";else{const C=e!==0,$=t!==0;C&&r&&a&&(g="x"),$&&o&&l&&(g="y")}if(!g)return!1;let p,_,b,v,D;if(g==="x")p=s.scrollLeft,_=u-h,b=e,v=r,D=a;else if(g==="y")p=s.scrollTop,_=c-d,b=t,v=o,D=l;else return!1;return(b>0?p<_:p>0)&&v&&D}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Vf(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Hr=new _c;window.lenis=Hr;function Qo(s){Hr.raf(s),requestAnimationFrame(Qo)}const Gf=!!document.querySelector("mobile-loading");Gf?(Hr.stop(),window.addEventListener("mobile-loading:done",()=>{Hr.start(),requestAnimationFrame(Qo)},{once:!0})):requestAnimationFrame(Qo);document.addEventListener("click",s=>{const e=s.target.closest('a[href^="#"]');if(!e)return;const t=e.getAttribute("href");if(!t)return;const i=document.querySelector(t);i&&(s.preventDefault(),Hr.scrollTo(i))});function mi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function vc(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yn={duration:.5,overwrite:!1,delay:0},Xa,Ze,ve,Ht=1e8,pe=1/Ht,ea=Math.PI*2,Kf=ea/4,Jf=0,bc=Math.sqrt,Zf=Math.cos,Qf=Math.sin,Ye=function(e){return typeof e=="string"},ke=function(e){return typeof e=="function"},Di=function(e){return typeof e=="number"},Ga=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},bt=function(e){return e!==!1},Ka=function(){return typeof window<"u"},ms=function(e){return ke(e)||Ye(e)},yc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ot=Array.isArray,ep=/random\([^)]+\)/g,tp=/,\s*/g,Kl=/(?:-?\.?\d|\.)+/gi,xc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dc=/[+-]=-?[.\d]+/,ip=/[^,'"\[\]\s]+/gi,np=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xe,ti,ta,Ja,zt={},Js={},wc,Cc=function(e){return(Js=Xn(e,zt))&&wt},Za=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ur=function(e,t){return!t&&console.warn(e)},Sc=function(e,t){return e&&(zt[e]=t)&&Js&&(Js[e]=t)||zt},Vr=function(){return 0},rp={suppressEvents:!0,isStart:!0,kill:!1},Ls={suppressEvents:!0,kill:!1},sp={suppressEvents:!0},Qa={},ji=[],ia={},$c,Pt={},Ao={},Jl=30,Ms=[],el="",tl=function(e){var t=e[0],i,n;if(ui(t)||ke(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Ms.length;n--&&!Ms[n].targetTest(t););i=Ms[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Kc(e[n],i)))||e.splice(n,1);return e},cn=function(e){return e._gsap||tl(Ut(e))[0]._gsap},Ec=function(e,t,i){return(i=e[t])&&ke(i)?e[t]():Ga(i)&&e.getAttribute&&e.getAttribute(t)||i},yt=function(e,t){return(e=e.split(",")).forEach(t)||e},Ae=function(e){return Math.round(e*1e5)/1e5||0},ye=function(e){return Math.round(e*1e7)/1e7||0},Bn=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},op=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Zs=function(){var e=ji.length,t=ji.slice(0),i,n;for(ia={},ji.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},il=function(e){return!!(e._initted||e._startAt||e.add)},kc=function(e,t,i,n){ji.length&&!Ze&&Zs(),e.render(t,i,!!(Ze&&t<0&&il(e))),ji.length&&!Ze&&Zs()},Pc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ip).length<2?t:Ye(e)?e.trim():e},Tc=function(e){return e},Rt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},ap=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Xn=function(e,t){for(var i in t)e[i]=t[i];return e},Zl=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ui(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},Qs=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Sr=function(e){var t=e.parent||xe,i=e.keyframes?ap(ot(e.keyframes)):Rt;if(bt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},lp=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Oc=function(e,t,i,n,r){var o=e[n],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},bo=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Hi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},up=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},na=function(e,t,i,n){return e._startAt&&(Ze?e._startAt.revert(Ls):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},cp=function s(e){return!e||e._ts&&s(e.parent)},Ql=function(e){return e._repeat?Gn(e._tTime,e=e.duration()+e._rDelay)*e:0},Gn=function(e,t){var i=Math.floor(e=ye(e/t));return e&&i===e?i-1:i},eo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yo=function(e){return e._end=ye(e._start+(e._tDur/Math.abs(e._ts||e._rts||pe)||0))},xo=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ye(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yo(e),i._dirty||hn(i,e)),e},Ac=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=eo(e.rawTime(),t),(!t._dur||os(0,t.totalDuration(),i)-t._tTime>pe)&&t.render(i,!0)),hn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-pe}},ni=function(e,t,i,n){return t.parent&&Hi(t),t._start=ye((Di(i)?i:i||e!==xe?It(e,i,t):e._time)+t._delay),t._end=ye(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Oc(e,t,"_first","_last",e._sort?"_start":0),ra(t)||(e._recent=t),n||Ac(e,t),e._ts<0&&xo(e,e._tTime),e},Fc=function(e,t){return(zt.ScrollTrigger||Za("scrollTrigger",t))&&zt.ScrollTrigger.create(t,e)},Lc=function(e,t,i,n,r){if(rl(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Ze&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$c!==Ot.frame)return ji.push(e),e._lazy=[r,n],1},hp=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},ra=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dp=function(e,t,i,n){var r=e.ratio,o=t<0||!t&&(!e._start&&hp(e)&&!(!e._initted&&ra(e))||(e._ts<0||e._dp._ts<0)&&!ra(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=os(0,e._tDur,t),c=Gn(l,a),e._yoyo&&c&1&&(o=1-o),c!==Gn(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Ze||n||e._zTime===pe||!t&&e._zTime){if(!e._initted&&Lc(e,t,n,i,l))return;for(h=e._zTime,e._zTime=t||(i?pe:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&na(e,t,i,!0),e._onUpdate&&!i&&Ft(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ft(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hi(e,1),!i&&!Ze&&(Ft(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fp=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Kn=function(e,t,i,n){var r=e._repeat,o=ye(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:ye(o*(r+1)+e._rDelay*r):o,a>0&&!n&&xo(e,e._tTime=e._tDur*a),e.parent&&yo(e),i||hn(e.parent,e),e},eu=function(e){return e instanceof pt?hn(e):Kn(e,e._dur)},pp={_start:0,endTime:Vr,totalDuration:Vr},It=function s(e,t,i){var n=e.labels,r=e._recent||pp,o=e.duration()>=Ht?r.endTime(!1):e._dur,a,l,u;return Ye(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?r:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(ot(i)?i[0]:i).totalDuration()),a>1?s(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},$r=function(e,t,i){var n=Di(t[1]),r=(n?2:1)+(e<2?0:1),o=t[r],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=bt(l.vars.inherit)&&l.parent;o.immediateRender=bt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new ze(t[0],o,t[r+1])},Wi=function(e,t){return e||e===0?t(e):t},os=function(e,t,i){return i<e?e:i>t?t:i},rt=function(e,t){return!Ye(e)||!(t=np.exec(e))?"":t[1]},gp=function(e,t,i){return Wi(i,function(n){return os(e,t,n)})},sa=[].slice,Mc=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==ti},mp=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Ye(n)&&!t||Mc(n,1)?(r=i).push.apply(r,Ut(n)):i.push(n)})||i},Ut=function(e,t,i){return ve&&!t&&ve.selector?ve.selector(e):Ye(e)&&!i&&(ta||!Jn())?sa.call((t||Ja).querySelectorAll(e),0):ot(e)?mp(e,i):Mc(e)?sa.call(e,0):e?[e]:[]},oa=function(e){return e=Ut(e)[0]||Ur("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ut(t,i.querySelectorAll?i:i===e?Ur("Invalid scope")||Ja.createElement("div"):e)}},zc=function(e){return e.sort(function(){return .5-Math.random()})},Rc=function(e){if(ke(e))return e;var t=ui(e)?e:{each:e},i=dn(t.ease),n=t.from||0,r=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,u=t.axis,c=n,h=n;return Ye(n)?c=h={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(c=n[0],h=n[1]),function(d,f,g){var p=(g||t).length,_=o[p],b,v,D,x,C,$,w,P,E;if(!_){if(E=t.grid==="auto"?0:(t.grid||[1,Ht])[1],!E){for(w=-Ht;w<(w=g[E++].getBoundingClientRect().left)&&E<p;);E<p&&E--}for(_=o[p]=[],b=l?Math.min(E,p)*c-.5:n%E,v=E===Ht?0:l?p*h/E-.5:n/E|0,w=0,P=Ht,$=0;$<p;$++)D=$%E-b,x=v-($/E|0),_[$]=C=u?Math.abs(u==="y"?x:D):bc(D*D+x*x),C>w&&(w=C),C<P&&(P=C);n==="random"&&zc(_),_.max=w-P,_.min=P,_.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(E>p?p-1:u?u==="y"?p/E:E:Math.max(E,p/E))||0)*(n==="edges"?-1:1),_.b=p<0?r-p:r,_.u=rt(t.amount||t.each)||0,i=i&&p<0?Yc(i):i}return p=(_[d]-_.min)/_.max||0,ye(_.b+(i?i(p):p)*_.v)+_.u}},aa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=ye(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Di(i)?0:rt(i))}},jc=function(e,t){var i=ot(e),n,r;return!i&&ui(e)&&(n=i=e.radius||Ht,e.values?(e=Ut(e.values),(r=!Di(e[0]))&&(n*=n)):e=aa(e.increment)),Wi(t,i?ke(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),u=Ht,c=0,h=e.length,d,f;h--;)r?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<u&&(u=d,c=h);return c=!n||u<=n?e[c]:o,r||c===o||Di(o)?c:c+rt(o)}:aa(e))},Ic=function(e,t,i,n){return Wi(ot(e)?!t:i===!0?!!(i=0):!n,function(){return ot(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},_p=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,o){return o(r)},n)}},vp=function(e,t){return function(i){return e(parseFloat(i))+(t||rt(i))}},bp=function(e,t,i){return Bc(e,t,0,1,i)},Nc=function(e,t,i){return Wi(i,function(n){return e[~~t(n)]})},yp=function s(e,t,i){var n=t-e;return ot(e)?Nc(e,s(0,e.length),t):Wi(i,function(r){return(n+(r-e)%n)%n+e})},xp=function s(e,t,i){var n=t-e,r=n*2;return ot(e)?Nc(e,s(0,e.length-1),t):Wi(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},qr=function(e){return e.replace(ep,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(tp);return Ic(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Bc=function(e,t,i,n,r){var o=t-e,a=n-i;return Wi(r,function(l){return i+((l-e)/o*a||0)})},Dp=function s(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=Ye(e),a={},l,u,c,h,d;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(ot(e)&&!ot(t)){for(c=[],h=e.length,d=h-2,u=1;u<h;u++)c.push(s(e[u-1],e[u]));h--,r=function(g){g*=h;var p=Math.min(d,~~g);return c[p](g-p)},i=t}else n||(e=Xn(ot(e)?[]:{},e));if(!c){for(l in t)nl.call(a,e,l,"get",t[l]);r=function(g){return al(g,a)||(o?e.p:e)}}}return Wi(i,r)},tu=function(e,t,i){var n=e.labels,r=Ht,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ft=function(e,t,i){var n=e.vars,r=n[t],o=ve,a=e._ctx,l,u,c;if(r)return l=n[t+"Params"],u=n.callbackScope||e,i&&ji.length&&Zs(),a&&(ve=a),c=l?r.apply(u,l):r.call(u),ve=o,c},_r=function(e){return Hi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ze),e.progress()<1&&Ft(e,"onInterrupt"),e},In,Hc=[],Uc=function(e){if(e)if(e=!e.name&&e.default||e,Ka()||e.headless){var t=e.name,i=ke(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Vr,render:al,add:nl,kill:jp,modifier:Rp,rawVars:0},o={targetTest:0,get:0,getSetter:ol,aliases:{},register:0};if(Jn(),e!==n){if(Pt[t])return;Rt(n,Rt(Qs(e,r),o)),Xn(n.prototype,Xn(r,Qs(e,o))),Pt[n.prop=t]=n,e.targetTest&&(Ms.push(n),Qa[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Sc(t,n),e.register&&e.register(wt,n,xt)}else Hc.push(e)},fe=255,vr={aqua:[0,fe,fe],lime:[0,fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,fe],navy:[0,0,128],white:[fe,fe,fe],olive:[128,128,0],yellow:[fe,fe,0],orange:[fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[fe,0,0],pink:[fe,192,203],cyan:[0,fe,fe],transparent:[fe,fe,fe,0]},Fo=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*fe+.5|0},Vc=function(e,t,i){var n=e?Di(e)?[e>>16,e>>8&fe,e&fe]:0:vr.black,r,o,a,l,u,c,h,d,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vr[e])n=vr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&fe,n&fe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&fe,e&fe]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Kl),!t)l=+n[0]%360/360,u=+n[1]/100,c=+n[2]/100,o=c<=.5?c*(u+1):c+u-c*u,r=c*2-o,n.length>3&&(n[3]*=1),n[0]=Fo(l+1/3,r,o),n[1]=Fo(l,r,o),n[2]=Fo(l-1/3,r,o);else if(~e.indexOf("="))return n=e.match(xc),i&&n.length<4&&(n[3]=1),n}else n=e.match(Kl)||vr.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/fe,o=n[1]/fe,a=n[2]/fe,h=Math.max(r,o,a),d=Math.min(r,o,a),c=(h+d)/2,h===d?l=u=0:(f=h-d,u=c>.5?f/(2-h-d):f/(h+d),l=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(u*100+.5),n[2]=~~(c*100+.5)),i&&n.length<4&&(n[3]=1),n},qc=function(e){var t=[],i=[],n=-1;return e.split(Ii).forEach(function(r){var o=r.match(jn)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},iu=function(e,t,i){var n="",r=(e+n).match(Ii),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!r)return e;if(r=r.map(function(d){return(d=Vc(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=qc(e),l=i.c,l.join(n)!==c.c.join(n)))for(u=e.replace(Ii,"1").split(jn),h=u.length-1;a<h;a++)n+=u[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:i).shift());if(!u)for(u=e.split(Ii),h=u.length-1;a<h;a++)n+=u[a]+r[a];return n+u[h]},Ii=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vr)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),wp=/hsl[a]?\(/,Wc=function(e){var t=e.join(" "),i;if(Ii.lastIndex=0,Ii.test(t))return i=wp.test(t),e[1]=iu(e[1],i),e[0]=iu(e[0],i,qc(e[1])),!0},Wr,Ot=(function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,u,c,h,d,f,g=function p(_){var b=s()-n,v=_===!0,D,x,C,$;if((b>e||b<0)&&(i+=b-t),n+=b,C=n-i,D=C-o,(D>0||v)&&($=++h.frame,d=C-h.time*1e3,h.time=C=C/1e3,o+=D+(D>=r?4:r-D),x=1),v||(l=u(p)),x)for(f=0;f<a.length;f++)a[f](C,d,$,_)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){wc&&(!ta&&Ka()&&(ti=ta=window,Ja=ti.document||{},zt.gsap=wt,(ti.gsapVersions||(ti.gsapVersions=[])).push(wt.version),Cc(Js||ti.GreenSockGlobals||!ti.gsap&&ti||{}),Hc.forEach(Uc)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(_){return setTimeout(_,o-h.time*1e3+1|0)},Wr=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Wr=0,u=Vr},lagSmoothing:function(_,b){e=_||1/0,t=Math.min(b||33,e)},fps:function(_){r=1e3/(_||240),o=h.time*1e3+r},add:function(_,b,v){var D=b?function(x,C,$,w){_(x,C,$,w),h.remove(D)}:_;return h.remove(_),a[v?"unshift":"push"](D),Jn(),D},remove:function(_,b){~(b=a.indexOf(_))&&a.splice(b,1)&&f>=b&&f--},_listeners:a},h})(),Jn=function(){return!Wr&&Ot.wake()},se={},Cp=/^[\d.\-M][\d.\-,\s]/,Sp=/["']/g,$p=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,u;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[n]=isNaN(u)?u.replace(Sp,"").trim():+u,n=l.substr(a+1).trim();return t},Ep=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},kp=function(e){var t=(e+"").split("("),i=se[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[$p(t[1])]:Ep(e).split(",").map(Pc)):se._CE&&Cp.test(e)?se._CE("",e):i},Yc=function(e){return function(t){return 1-e(1-t)}},Xc=function s(e,t){for(var i=e._first,n;i;)i instanceof pt?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},dn=function(e,t){return e&&(ke(e)?e:se[e]||kp(e))||t},wn=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},o;return yt(e,function(a){se[a]=zt[a]=r,se[o=a.toLowerCase()]=i;for(var l in r)se[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[a+"."+l]=r[l]}),r},Gc=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Lo=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/ea*(Math.asin(1/n)||0),a=function(c){return c===1?1:n*Math.pow(2,-10*c)*Qf((c-o)*r)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Gc(a);return r=ea/r,l.config=function(u,c){return s(e,u,c)},l},Mo=function s(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Gc(i);return n.config=function(r){return s(e,r)},n};yt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;wn(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;wn("Elastic",Lo("in"),Lo("out"),Lo());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(a){return a<t?s*a*a:a<i?s*Math.pow(a-1.5/e,2)+.75:a<n?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};wn("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);wn("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});wn("Circ",function(s){return-(bc(1-s*s)-1)});wn("Sine",function(s){return s===1?1:-Zf(s*Kf)+1});wn("Back",Mo("in"),Mo("out"),Mo());se.SteppedEase=se.steps=zt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,o=1-pe;return function(a){return((n*os(0,o,a)|0)+r)*i}}};Yn.ease=se["quad.out"];yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return el+=s+","+s+"Params,"});var Kc=function(e,t){this.id=Jf++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ec,this.set=t?t.getSetter:ol},Yr=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kn(this,+t.duration,1,1),this.data=t.data,ve&&(this._ctx=ve,ve.data.push(this)),Wr||Ot.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Kn(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Jn(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(xo(this,i),!r._dp||r.parent||Ac(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===pe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),kc(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ql(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ql(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Gn(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-pe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?eo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-pe?0:this._rts,this.totalTime(os(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),yo(this),up(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pe&&(this._tTime-=pe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ye(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ni(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(bt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?eo(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sp);var n=Ze;return Ze=i,il(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ze=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,eu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,eu(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(It(this,i),bt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,bt(n)),this._dur||(this._zTime=-pe),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-pe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pe,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-pe)},e.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var a=ke(i)?i:Tc,l=function(){var c=n.then;n.then=null,r&&r(),ke(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),o(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){_r(this)},s})();Rt(Yr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pe,_prom:0,_ps:!1,_rts:1});var pt=(function(s){vc(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=bt(i.sortChildren),xe&&ni(i.parent||xe,mi(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Fc(mi(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,o){return $r(0,arguments,this),this},t.from=function(n,r,o){return $r(1,arguments,this),this},t.fromTo=function(n,r,o,a){return $r(2,arguments,this),this},t.set=function(n,r,o){return r.duration=0,r.parent=this,Sr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ze(n,r,It(this,o),1),this},t.call=function(n,r,o){return ni(this,ze.delayedCall(0,n,r),o)},t.staggerTo=function(n,r,o,a,l,u,c){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new ze(n,o,It(this,l)),this},t.staggerFrom=function(n,r,o,a,l,u,c){return o.runBackwards=1,Sr(o).immediateRender=bt(o.immediateRender),this.staggerTo(n,r,o,a,l,u,c)},t.staggerFromTo=function(n,r,o,a,l,u,c,h){return a.startAt=o,Sr(a).immediateRender=bt(a.immediateRender),this.staggerTo(n,r,a,l,u,c,h)},t.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=n<=0?0:ye(n),h=this._zTime<0!=n<0&&(this._initted||!u),d,f,g,p,_,b,v,D,x,C,$,w;if(this!==xe&&c>l&&n>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,n+=this._time-a),d=c,x=this._start,D=this._ts,b=!D,h&&(u||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if($=this._yoyo,_=u+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,r,o);if(d=ye(c%_),c===l?(p=this._repeat,d=u):(C=ye(c/_),p=~~C,p&&p===C&&(d=u,p--),d>u&&(d=u)),C=Gn(this._tTime,_),!a&&this._tTime&&C!==p&&this._tTime-C*_-this._dur<=0&&(C=p),$&&p&1&&(d=u-d,w=1),p!==C&&!this._lock){var P=$&&C&1,E=P===($&&p&1);if(p<C&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(w?0:ye(p*_)),r,!u)._lock=0,this._tTime=c,!r&&this.parent&&Ft(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,C=p),a&&a!==this._time||b!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!b)return this;Xc(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=fp(this,ye(a),ye(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&c&&u&&!r&&!C&&(Ft(this,"onStart"),this._tTime!==c))return this;if(d>=a&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!b){v=0,g&&(c+=this._zTime=-pe);break}}f=g}else{f=this._last;for(var k=n<0?n:d;f;){if(g=f._prev,(f._act||k<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(k-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(k-f._start)*f._ts,r,o||Ze&&il(f)),d!==this._time||!this._ts&&!b){v=0,g&&(c+=this._zTime=k?-pe:pe);break}}f=g}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-pe)._zTime=d>=a?1:-1,this._ts))return this._start=x,yo(this),this.render(n,r,o);this._onUpdate&&!r&&Ft(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(x===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((n||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Hi(this,1),!r&&!(n<0&&!a)&&(c||a||!l)&&(Ft(this,c===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var o=this;if(Di(r)||(r=It(this,r,n)),!(n instanceof Yr)){if(ot(n))return n.forEach(function(a){return o.add(a,r)}),this;if(Ye(n))return this.addLabel(n,r);if(ke(n))n=ze.delayedCall(0,n);else return this}return this!==n?ni(this,n,r):this},t.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ht);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof ze?r&&l.push(u):(o&&l.push(u),n&&l.push.apply(l,u.getChildren(!0,r,o)))),u=u._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},t.remove=function(n){return Ye(n)?this.removeLabel(n):ke(n)?this.killTweensOf(n):(n.parent===this&&bo(this,n),n===this._recent&&(this._recent=this._last),hn(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ye(Ot.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=It(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,o){var a=ze.delayedCall(0,r||Vr,o);return a.data="isPause",this._hasPause=1,ni(this,a,It(this,n))},t.removePause=function(n){var r=this._first;for(n=It(this,n);r;)r._start===n&&r.data==="isPause"&&Hi(r),r=r._next},t.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Fi!==a[l]&&a[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var o=[],a=Ut(n),l=this._first,u=Di(r),c;l;)l instanceof ze?op(l._targets,a)&&(u?(!Fi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(a,r)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(n,r){r=r||{};var o=this,a=It(o,n),l=r,u=l.startAt,c=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=ze.to(o,Rt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||pe,onStart:function(){if(o.pause(),!f){var _=r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==_&&Kn(g,_,0,1).render(g._time,!0,!0),f=1}c&&c.apply(g,h||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(n,r,o){return this.tweenTo(r,Rt({startAt:{time:It(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),tu(this,It(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),tu(this,It(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+pe)},t.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(n=ye(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(u in l)l[u]>=o&&(l[u]+=n);return hn(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),hn(this)},t.totalDuration=function(n){var r=0,o=this,a=o._last,l=Ht,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ni(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(r-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=ye(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=u;Kn(o,o===xe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(xe._ts&&(kc(xe,eo(n,xe)),$c=Ot.frame),Ot.frame>=Jl){Jl+=Mt.autoSleep||120;var r=xe._first;if((!r||!r._ts)&&Mt.autoSleep&&Ot._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ot.sleep()}}},e})(Yr);Rt(pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Pp=function(e,t,i,n,r,o,a){var l=new xt(this._pt,e,t,0,1,ih,null,r),u=0,c=0,h,d,f,g,p,_,b,v;for(l.b=i,l.e=n,i+="",n+="",(b=~n.indexOf("random("))&&(n=qr(n)),o&&(v=[i,n],o(v,e,t),i=v[0],n=v[1]),d=i.match(Oo)||[];h=Oo.exec(n);)g=h[0],p=n.substring(u,h.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==d[c++]&&(_=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:p||c===1?p:",",s:_,c:g.charAt(1)==="="?Bn(_,g)-_:parseFloat(g)-_,m:f&&f<4?Math.round:0},u=Oo.lastIndex);return l.c=u<n.length?n.substring(u,n.length):"",l.fp=a,(Dc.test(n)||b)&&(l.e=0),this._pt=l,l},nl=function(e,t,i,n,r,o,a,l,u,c){ke(n)&&(n=n(r||0,e,o));var h=e[t],d=i!=="get"?i:ke(h)?u?e[t.indexOf("set")||!ke(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,f=ke(h)?u?Lp:eh:sl,g;if(Ye(n)&&(~n.indexOf("random(")&&(n=qr(n)),n.charAt(1)==="="&&(g=Bn(d,n)+(rt(d)||0),(g||g===0)&&(n=g))),!c||d!==n||la)return!isNaN(d*n)&&n!==""?(g=new xt(this._pt,e,t,+d||0,n-(d||0),typeof h=="boolean"?zp:th,0,f),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Za(t,n),Pp.call(this,e,t,d,n,f,l||Mt.stringFilter,u))},Tp=function(e,t,i,n,r){if(ke(e)&&(e=Er(e,r,t,i,n)),!ui(e)||e.style&&e.nodeType||ot(e)||yc(e))return Ye(e)?Er(e,r,t,i,n):e;var o={},a;for(a in e)o[a]=Er(e[a],r,t,i,n);return o},Jc=function(e,t,i,n,r,o){var a,l,u,c;if(Pt[e]&&(a=new Pt[e]).init(r,a.rawVars?t[e]:Tp(t[e],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new xt(i._pt,r,e,0,1,a.render,a,0,a.priority),i!==In))for(u=i._ptLookup[i._targets.indexOf(r)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Fi,la,rl=function s(e,t,i){var n=e.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,u=n.onUpdate,c=n.runBackwards,h=n.yoyoEase,d=n.keyframes,f=n.autoRevert,g=e._dur,p=e._startAt,_=e._targets,b=e.parent,v=b&&b.data==="nested"?b.vars.targets:_,D=e._overwrite==="auto"&&!Xa,x=e.timeline,C,$,w,P,E,k,A,T,H,z,F,I,M;if(x&&(!d||!r)&&(r="none"),e._ease=dn(r,Yn.ease),e._yEase=h?Yc(dn(h===!0?r:h,Yn.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!n.runBackwards,!x||d&&!n.stagger){if(T=_[0]?cn(_[0]).harness:0,I=T&&n[T.prop],C=Qs(n,Qa),p&&(p._zTime<0&&p.progress(1),t<0&&c&&a&&!f?p.render(-1,!0):p.revert(c&&g?Ls:rp),p._lazy=0),o){if(Hi(e._startAt=ze.set(_,Rt({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!p&&bt(l),startAt:null,delay:0,onUpdate:u&&function(){return Ft(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ze||!a&&!f)&&e._startAt.revert(Ls),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!p){if(t&&(a=!1),w=Rt({overwrite:!1,data:"isFromStart",lazy:a&&!p&&bt(l),immediateRender:a,stagger:0,parent:b},C),I&&(w[T.prop]=I),Hi(e._startAt=ze.set(_,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ze?e._startAt.revert(Ls):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,pe,pe);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&bt(l)||l&&!g,$=0;$<_.length;$++){if(E=_[$],A=E._gsap||tl(_)[$]._gsap,e._ptLookup[$]=z={},ia[A.id]&&ji.length&&Zs(),F=v===_?$:v.indexOf(E),T&&(H=new T).init(E,I||C,e,F,v)!==!1&&(e._pt=P=new xt(e._pt,E,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(N){z[N]=P}),H.priority&&(k=1)),!T||I)for(w in C)Pt[w]&&(H=Jc(w,C,e,F,E,v))?H.priority&&(k=1):z[w]=P=nl.call(e,E,w,"get",C[w],F,v,0,n.stringFilter);e._op&&e._op[$]&&e.kill(E,e._op[$]),D&&e._pt&&(Fi=e,xe.killTweensOf(E,z,e.globalTime(t)),M=!e.parent,Fi=0),e._pt&&l&&(ia[A.id]=1)}k&&nh(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!M,d&&t<=0&&x.render(Ht,!0,!0)},Op=function(e,t,i,n,r,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,d,f;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(c=d[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return la=1,e.vars[t]="+=0",rl(e,a),la=0,l?Ur(t+" not eligible for reset"):1;u.push(c)}for(f=u.length;f--;)h=u[f],c=h._pt||h,c.s=(n||n===0)&&!r?n:c.s+(n||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=Ae(i)+rt(h.e)),h.b&&(h.b=c.s+rt(h.b))},Ap=function(e,t){var i=e[0]?cn(e[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return t;r=Xn({},t);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Fp=function(e,t,i,n){var r=t.ease||n||"power1.inOut",o,a;if(ot(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:r})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Er=function(e,t,i,n,r){return ke(e)?e.call(t,i,n,r):Ye(e)&&~e.indexOf("random(")?qr(e):e},Zc=el+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qc={};yt(Zc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Qc[s]=1});var ze=(function(s){vc(e,s);function e(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:Sr(n))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,p=l.defaults,_=l.scrollTrigger,b=l.yoyoEase,v=n.parent||xe,D=(ot(i)||yc(i)?Di(i[0]):"length"in n)?[i]:Ut(i),x,C,$,w,P,E,k,A;if(a._targets=D.length?tl(D):Ur("GSAP target "+i+" not found. https://gsap.com",!Mt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||ms(u)||ms(c)){if(n=a.vars,x=a.timeline=new pt({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:D}),x.kill(),x.parent=x._dp=mi(a),x._start=0,d||ms(u)||ms(c)){if(w=D.length,k=d&&Rc(d),ui(d))for(P in d)~Zc.indexOf(P)&&(A||(A={}),A[P]=d[P]);for(C=0;C<w;C++)$=Qs(n,Qc),$.stagger=0,b&&($.yoyoEase=b),A&&Xn($,A),E=D[C],$.duration=+Er(u,mi(a),C,E,D),$.delay=(+Er(c,mi(a),C,E,D)||0)-a._delay,!d&&w===1&&$.delay&&(a._delay=c=$.delay,a._start+=c,$.delay=0),x.to(E,$,k?k(C,E,D):0),x._ease=se.none;x.duration()?u=c=0:a.timeline=0}else if(g){Sr(Rt(x.vars.defaults,{ease:"none"})),x._ease=dn(g.ease||n.ease||"none");var T=0,H,z,F;if(ot(g))g.forEach(function(I){return x.to(D,I,">")}),x.duration();else{$={};for(P in g)P==="ease"||P==="easeEach"||Fp(P,g[P],$,g.easeEach);for(P in $)for(H=$[P].sort(function(I,M){return I.t-M.t}),T=0,C=0;C<H.length;C++)z=H[C],F={ease:z.e,duration:(z.t-(C?H[C-1].t:0))/100*u},F[P]=z.v,x.to(D,F,T),T+=F.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return f===!0&&!Xa&&(Fi=mi(a),xe.killTweensOf(D),Fi=0),ni(v,mi(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(h||!u&&!g&&a._start===ye(v._time)&&bt(h)&&cp(mi(a))&&v.data!=="nested")&&(a._tTime=-pe,a.render(Math.max(0,-c)||0)),_&&Fc(mi(a),_),a}var t=e.prototype;return t.render=function(n,r,o){var a=this._time,l=this._tDur,u=this._dur,c=n<0,h=n>l-pe&&!c?l:n<pe?0:n,d,f,g,p,_,b,v,D,x;if(!u)dp(this,n,r,o);else if(h!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=h,D=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(p*100+n,r,o);if(d=ye(h%p),h===l?(g=this._repeat,d=u):(_=ye(h/p),g=~~_,g&&g===_?(d=u,g--):d>u&&(d=u)),b=this._yoyo&&g&1,b&&(x=this._yEase,d=u-d),_=Gn(this._tTime,p),d===a&&!o&&this._initted&&g===_)return this._tTime=h,this;g!==_&&(D&&this._yEase&&Xc(D,b),this.vars.repeatRefresh&&!b&&!this._lock&&d!==p&&this._initted&&(this._lock=o=1,this.render(ye(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Lc(this,c?n:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(u!==this._dur)return this.render(n,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/u),this._from&&(this.ratio=v=1-v),!a&&h&&!r&&!_&&(Ft(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;D&&D.render(n<0?n:D._dur*D._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(c&&na(this,n,r,o),Ft(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!r&&this.parent&&Ft(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&na(this,n,!0,!0),(n||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Hi(this,1),!r&&!(c&&!a)&&(h||a||b)&&(Ft(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,o,a,l){Wr||Ot.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||rl(this,u),c=this._ease(u/this._dur),Op(this,n,r,o,a,c,u,l)?this.resetTo(n,r,o,a,1):(xo(this,0),this.parent||Oc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?_r(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ze),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Fi&&Fi.vars.overwrite!==!0)._first||_r(this),this.parent&&o!==this.timeline.totalDuration()&&Kn(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Ut(n):a,u=this._ptLookup,c=this._pt,h,d,f,g,p,_,b;if((!r||r==="all")&&lp(a,l))return r==="all"&&(this._pt=0),_r(this);for(h=this._op=this._op||[],r!=="all"&&(Ye(r)&&(p={},yt(r,function(v){return p[v]=1}),r=p),r=Ap(a,r)),b=a.length;b--;)if(~l.indexOf(a[b])){d=u[b],r==="all"?(h[b]=r,g=d,f={}):(f=h[b]=h[b]||{},g=r);for(p in g)_=d&&d[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&bo(this,_,"_pt"),delete d[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&c&&_r(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return $r(1,arguments)},e.delayedCall=function(n,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,r,o){return $r(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return xe.killTweensOf(n,r,o)},e})(Yr);Rt(ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yt("staggerTo,staggerFrom,staggerFromTo",function(s){ze[s]=function(){var e=new pt,t=sa.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var sl=function(e,t,i){return e[t]=i},eh=function(e,t,i){return e[t](i)},Lp=function(e,t,i,n){return e[t](n.fp,i)},Mp=function(e,t,i){return e.setAttribute(t,i)},ol=function(e,t){return ke(e[t])?eh:Ga(e[t])&&e.setAttribute?Mp:sl},th=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ih=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},al=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Rp=function(e,t,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,t,i),r=o},jp=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?bo(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Ip=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},nh=function(e){for(var t=e._pt,i,n,r,o;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=r},xt=(function(){function s(t,i,n,r,o,a,l,u,c){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||th,this.d=l||this,this.set=u||sl,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Ip,this.m=i,this.mt=r,this.tween=n},s})();yt(el+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Qa[s]=1});zt.TweenMax=zt.TweenLite=ze;zt.TimelineLite=zt.TimelineMax=pt;xe=new pt({sortChildren:!1,defaults:Yn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mt.stringFilter=Wc;var fn=[],zs={},Np=[],nu=0,Bp=0,zo=function(e){return(zs[e]||Np).map(function(t){return t()})},ua=function(){var e=Date.now(),t=[];e-nu>2&&(zo("matchMediaInit"),fn.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,u;for(a in n)o=ti.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),zo("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),nu=e,zo("matchMedia"))},rh=(function(){function s(t,i){this.selector=i&&oa(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Bp++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){ke(i)&&(r=n,n=i,i=ke);var o=this,a=function(){var u=ve,c=o.selector,h;return u&&u!==o&&u.data.push(o),r&&(o.selector=oa(r)),ve=o,h=n.apply(o,arguments),ke(h)&&o._r.push(h),ve=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===ke?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=ve;ve=null,i(this),ve=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof ze&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,u;l--;)u=r.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=r.data.length;l--;)u=r.data[l],u instanceof pt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof ze)&&u.revert&&u.revert(i);r._r.forEach(function(c){return c(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=fn.length;o--;)fn[o].id===this.id&&fn.splice(o,1)},e.revert=function(i){this.kill(i||{})},s})(),Hp=(function(){function s(t){this.contexts=[],this.scope=t,ve&&ve.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){ui(i)||(i={matches:i});var o=new rh(0,r||this.scope),a=o.conditions={},l,u,c;ve&&!o.selector&&(o.selector=ve.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(u in i)u==="all"?c=1:(l=ti.matchMedia(i[u]),l&&(fn.indexOf(o)<0&&fn.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(ua):l.addEventListener("change",ua)));return c&&n(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),to={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Uc(n)})},timeline:function(e){return new pt(e)},getTweensOf:function(e,t){return xe.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ye(e)&&(e=Ut(e)[0]);var r=cn(e||{}).get,o=i?Tc:Pc;return i==="native"&&(i=""),e&&(t?o((Pt[t]&&Pt[t].get||r)(e,t,i,n)):function(a,l,u){return o((Pt[a]&&Pt[a].get||r)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Ut(e),e.length>1){var n=e.map(function(c){return wt.quickSetter(c,t,i)}),r=n.length;return function(c){for(var h=r;h--;)n[h](c)}}e=e[0]||{};var o=Pt[t],a=cn(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;In._pt=0,h.init(e,i?c+i:c,In,0,[e]),h.render(1,h),In._pt&&al(1,In)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var n,r=wt.to(e,Rt((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,u,c){return r.resetTo(t,l,u,c)};return o.tween=r,o},isTweening:function(e){return xe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=dn(e.ease,Yn.ease)),Zl(Yn,e||{})},config:function(e){return Zl(Mt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Pt[a]&&!zt[a]&&Ur(t+" effect requires "+a+" plugin.")}),Ao[t]=function(a,l,u){return i(Ut(a),Rt(l||{},r),u)},o&&(pt.prototype[t]=function(a,l,u){return this.add(Ao[t](a,ui(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){se[e]=dn(t)},parseEase:function(e,t){return arguments.length?dn(e,t):se},getById:function(e){return xe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new pt(e),n,r;for(i.smoothChildTiming=bt(e.smoothChildTiming),xe.remove(i),i._dp=0,i._time=i._tTime=xe._time,n=xe._first;n;)r=n._next,(t||!(!n._dur&&n instanceof ze&&n.vars.onComplete===n._targets[0]))&&ni(i,n,n._start-n._delay),n=r;return ni(xe,i,0),i},context:function(e,t){return e?new rh(e,t):ve},matchMedia:function(e){return new Hp(e)},matchMediaRefresh:function(){return fn.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||ua()},addEventListener:function(e,t){var i=zs[e]||(zs[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=zs[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:yp,wrapYoyo:xp,distribute:Rc,random:Ic,snap:jc,normalize:bp,getUnit:rt,clamp:gp,splitColor:Vc,toArray:Ut,selector:oa,mapRange:Bc,pipe:_p,unitize:vp,interpolate:Dp,shuffle:zc},install:Cc,effects:Ao,ticker:Ot,updateRoot:pt.updateRoot,plugins:Pt,globalTimeline:xe,core:{PropTween:xt,globals:Sc,Tween:ze,Timeline:pt,Animation:Yr,getCache:cn,_removeLinkedListItem:bo,reverting:function(){return Ze},context:function(e){return e&&ve&&(ve.data.push(e),e._ctx=ve),ve},suppressOverwrites:function(e){return Xa=e}}};yt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return to[s]=ze[s]});Ot.add(pt.updateRoot);In=to.to({},{duration:0});var Up=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Vp=function(e,t){var i=e._targets,n,r,o;for(n in t)for(r=i.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=Up(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[r],n))},Ro=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,u;if(Ye(r)&&(l={},yt(r,function(c){return l[c]=1}),r=l),t){l={};for(u in r)l[u]=t(r[u]);r=l}Vp(a,r)}}}},wt=to.registerPlugin({name:"attr",init:function(e,t,i,n,r){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Ze?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ro("roundProps",aa),Ro("modifiers"),Ro("snap",jc))||to;ze.version=pt.version=wt.version="3.14.2";wc=1;Ka()&&Jn();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ru,Li,Hn,ll,on,su,ul,qp=function(){return typeof window<"u"},wi={},tn=180/Math.PI,Un=Math.PI/180,An=Math.atan2,ou=1e8,cl=/([A-Z])/g,Wp=/(left|right|width|margin|padding|x)/i,Yp=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ca=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Gp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Kp=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jp=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},sh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},oh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zp=function(e,t,i){return e.style[t]=i},Qp=function(e,t,i){return e.style.setProperty(t,i)},eg=function(e,t,i){return e._gsap[t]=i},tg=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},ig=function(e,t,i,n,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},ng=function(e,t,i,n,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},De="transform",Dt=De+"Origin",rg=function s(e,t){var i=this,n=this.target,r=n.style,o=n._gsap;if(e in wi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=_i(n,a)}):this.tfm[e]=o.x?o[e]:_i(n,e),e===Dt&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return s.call(i,a,t)});if(this.props.indexOf(De)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Dt,t,"")),e=De}(r||t)&&this.props.push(e,t,r[e])},ah=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sg=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(cl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ul(),(!r||!r.isStart)&&!i[De]&&(ah(i),n.zOrigin&&i[Dt]&&(i[Dt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},lh=function(e,t){var i={target:e,props:[],revert:sg,save:rg};return e._gsap||wt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},uh,ha=function(e,t){var i=Li.createElementNS?Li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Li.createElement(e);return i&&i.style?i:Li.createElement(e)},Lt=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(cl,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,Zn(t)||t,1)||""},au="O,Moz,ms,Ms,Webkit".split(","),Zn=function(e,t,i){var n=t||on,r=n.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(au[o]+e in r););return o<0?null:(o===3?"ms":o>=0?au[o]:"")+e},da=function(){qp()&&window.document&&(ru=window,Li=ru.document,Hn=Li.documentElement,on=ha("div")||{style:{}},ha("div"),De=Zn(De),Dt=De+"Origin",on.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",uh=!!Zn("perspective"),ul=wt.core.reverting,ll=1)},lu=function(e){var t=e.ownerSVGElement,i=ha("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Hn.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Hn.removeChild(i),r},uu=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ch=function(e){var t,i;try{t=e.getBBox()}catch{t=lu(e),i=1}return t&&(t.width||t.height)||i||(t=lu(e)),t&&!t.width&&!t.x&&!t.y?{x:+uu(e,["x","cx","x1"])||0,y:+uu(e,["y","cy","y1"])||0,width:0,height:0}:t},hh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ch(e))},Ui=function(e,t){if(t){var i=e.style,n;t in wi&&t!==Dt&&(t=De),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(cl,"-$1").toLowerCase())):i.removeAttribute(t)}},Mi=function(e,t,i,n,r,o){var a=new xt(e._pt,t,i,0,1,o?oh:sh);return e._pt=a,a.b=n,a.e=r,e._props.push(i),a},cu={deg:1,rad:1,turn:1},og={grid:1,flex:1},Vi=function s(e,t,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=on.style,l=Wp.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,d=n==="px",f=n==="%",g,p,_,b;if(n===o||!r||cu[n]||cu[o])return r;if(o!=="px"&&!d&&(r=s(e,t,i,"px")),b=e.getCTM&&hh(e),(f||o==="%")&&(wi[t]||~t.indexOf("adius")))return g=b?e.getBBox()[l?"width":"height"]:e[c],Ae(f?r/g*h:r/100*g);if(a[l?"width":"height"]=h+(d?o:n),p=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!u?e:e.parentNode,b&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Li||!p.appendChild)&&(p=Li.body),_=p._gsap,_&&f&&_.width&&l&&_.time===Ot.time&&!_.uncache)return Ae(r/_.width*h);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+n,g=e[c],v?e.style[t]=v:Ui(e,t)}else(f||o==="%")&&!og[Lt(p,"display")]&&(a.position=Lt(e,"position")),p===e&&(a.position="static"),p.appendChild(on),g=on[c],p.removeChild(on),a.position="absolute";return l&&f&&(_=cn(p),_.time=Ot.time,_.width=p[c]),Ae(d?g*r/h:g&&r?h/g*r:0)},_i=function(e,t,i,n){var r;return ll||da(),t in si&&t!=="transform"&&(t=si[t],~t.indexOf(",")&&(t=t.split(",")[0])),wi[t]&&t!=="transform"?(r=Gr(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:no(Lt(e,Dt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=io[t]&&io[t](e,t,i)||Lt(e,t)||Ec(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Vi(e,t,r,i)+i:r},ag=function(e,t,i,n){if(!i||i==="none"){var r=Zn(t,e,1),o=r&&Lt(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=Lt(e,"borderTopColor"))}var a=new xt(this._pt,e.style,t,0,1,ih),l=0,u=0,c,h,d,f,g,p,_,b,v,D,x,C;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Lt(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(p=e.style[t],e.style[t]=n,n=Lt(e,t)||n,p?e.style[t]=p:Ui(e,t)),c=[i,n],Wc(c),i=c[0],n=c[1],d=i.match(jn)||[],C=n.match(jn)||[],C.length){for(;h=jn.exec(n);)_=h[0],v=n.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),_!==(p=d[u++]||"")&&(f=parseFloat(p)||0,x=p.substr((f+"").length),_.charAt(1)==="="&&(_=Bn(f,_)+x),b=parseFloat(_),D=_.substr((b+"").length),l=jn.lastIndex-D.length,D||(D=D||Mt.units[t]||x,l===n.length&&(n+=D,a.e+=D)),x!==D&&(f=Vi(e,t,p,D)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:f,c:b-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?oh:sh;return Dc.test(n)&&(a.e=0),this._pt=a,a},hu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lg=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=hu[i]||i,t[1]=hu[n]||n,t.join(" ")},ug=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,o=i._gsap,a,l,u;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)a=r[u],wi[a]&&(l=1,a=a==="transformOrigin"?Dt:De),Ui(i,a);l&&(Ui(i,De),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Gr(i,1),o.uncache=1,ah(n)))}},io={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var o=e._pt=new xt(e._pt,t,i,0,0,ug);return o.u=n,o.pr=-10,o.tween=r,e._props.push(i),1}}},Xr=[1,0,0,1,0,0],dh={},fh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},du=function(e){var t=Lt(e,De);return fh(t)?Xr:t.substr(7).match(xc).map(Ae)},hl=function(e,t){var i=e._gsap||cn(e),n=e.style,r=du(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Xr:r):(r===Xr&&!e.offsetParent&&e!==Hn&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Hn.appendChild(e)),r=du(e),l?n.display=l:Ui(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Hn.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},fa=function(e,t,i,n,r,o){var a=e._gsap,l=r||hl(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],p=l[2],_=l[3],b=l[4],v=l[5],D=t.split(" "),x=parseFloat(D[0])||0,C=parseFloat(D[1])||0,$,w,P,E;i?l!==Xr&&(w=f*_-g*p)&&(P=x*(_/w)+C*(-p/w)+(p*v-_*b)/w,E=x*(-g/w)+C*(f/w)-(f*v-g*b)/w,x=P,C=E):($=ch(e),x=$.x+(~D[0].indexOf("%")?x/100*$.width:x),C=$.y+(~(D[1]||D[0]).indexOf("%")?C/100*$.height:C)),n||n!==!1&&a.smooth?(b=x-u,v=C-c,a.xOffset=h+(b*f+v*p)-b,a.yOffset=d+(b*g+v*_)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[Dt]="0px 0px",o&&(Mi(o,a,"xOrigin",u,x),Mi(o,a,"yOrigin",c,C),Mi(o,a,"xOffset",h,a.xOffset),Mi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+C)},Gr=function(e,t){var i=e._gsap||new Kc(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Lt(e,Dt)||"0",c,h,d,f,g,p,_,b,v,D,x,C,$,w,P,E,k,A,T,H,z,F,I,M,N,W,y,q,ce,me,he,we;return c=h=d=p=_=b=v=D=x=0,f=g=1,i.svg=!!(e.getCTM&&hh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[De]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[De]!=="none"?l[De]:"")),n.scale=n.rotate=n.translate="none"),w=hl(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",M=""):M=!t&&e.getAttribute("data-svg-origin"),fa(e,M||u,!!M||i.originIsAbsolute,i.smooth!==!1,w)),C=i.xOrigin||0,$=i.yOrigin||0,w!==Xr&&(A=w[0],T=w[1],H=w[2],z=w[3],c=F=w[4],h=I=w[5],w.length===6?(f=Math.sqrt(A*A+T*T),g=Math.sqrt(z*z+H*H),p=A||T?An(T,A)*tn:0,v=H||z?An(H,z)*tn+p:0,v&&(g*=Math.abs(Math.cos(v*Un))),i.svg&&(c-=C-(C*A+$*H),h-=$-(C*T+$*z))):(we=w[6],me=w[7],y=w[8],q=w[9],ce=w[10],he=w[11],c=w[12],h=w[13],d=w[14],P=An(we,ce),_=P*tn,P&&(E=Math.cos(-P),k=Math.sin(-P),M=F*E+y*k,N=I*E+q*k,W=we*E+ce*k,y=F*-k+y*E,q=I*-k+q*E,ce=we*-k+ce*E,he=me*-k+he*E,F=M,I=N,we=W),P=An(-H,ce),b=P*tn,P&&(E=Math.cos(-P),k=Math.sin(-P),M=A*E-y*k,N=T*E-q*k,W=H*E-ce*k,he=z*k+he*E,A=M,T=N,H=W),P=An(T,A),p=P*tn,P&&(E=Math.cos(P),k=Math.sin(P),M=A*E+T*k,N=F*E+I*k,T=T*E-A*k,I=I*E-F*k,A=M,F=N),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,b=180-b),f=Ae(Math.sqrt(A*A+T*T+H*H)),g=Ae(Math.sqrt(I*I+we*we)),P=An(F,I),v=Math.abs(P)>2e-4?P*tn:0,x=he?1/(he<0?-he:he):0),i.svg&&(M=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!fh(Lt(e,De)),M&&e.setAttribute("transform",M))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Ae(f),i.scaleY=Ae(g),i.rotation=Ae(p)+a,i.rotationX=Ae(_)+a,i.rotationY=Ae(b)+a,i.skewX=v+a,i.skewY=D+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Dt]=no(u)),i.xOffset=i.yOffset=0,i.force3D=Mt.force3D,i.renderTransform=i.svg?hg:uh?ph:cg,i.uncache=0,i},no=function(e){return(e=e.split(" "))[0]+" "+e[1]},jo=function(e,t,i){var n=rt(t);return Ae(parseFloat(t)+parseFloat(Vi(e,"x",i+"px",n)))+n},cg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ph(e,t)},Zi="0deg",hr="0px",Qi=") ",ph=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,d=i.skewX,f=i.skewY,g=i.scaleX,p=i.scaleY,_=i.transformPerspective,b=i.force3D,v=i.target,D=i.zOrigin,x="",C=b==="auto"&&e&&e!==1||b===!0;if(D&&(h!==Zi||c!==Zi)){var $=parseFloat(c)*Un,w=Math.sin($),P=Math.cos($),E;$=parseFloat(h)*Un,E=Math.cos($),o=jo(v,o,w*E*-D),a=jo(v,a,-Math.sin($)*-D),l=jo(v,l,P*E*-D+D)}_!==hr&&(x+="perspective("+_+Qi),(n||r)&&(x+="translate("+n+"%, "+r+"%) "),(C||o!==hr||a!==hr||l!==hr)&&(x+=l!==hr||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qi),u!==Zi&&(x+="rotate("+u+Qi),c!==Zi&&(x+="rotateY("+c+Qi),h!==Zi&&(x+="rotateX("+h+Qi),(d!==Zi||f!==Zi)&&(x+="skew("+d+", "+f+Qi),(g!==1||p!==1)&&(x+="scale("+g+", "+p+Qi),v.style[De]=x||"translate(0, 0)"},hg=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,d=i.scaleY,f=i.target,g=i.xOrigin,p=i.yOrigin,_=i.xOffset,b=i.yOffset,v=i.forceCSS,D=parseFloat(o),x=parseFloat(a),C,$,w,P,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Un,u*=Un,C=Math.cos(l)*h,$=Math.sin(l)*h,w=Math.sin(l-u)*-d,P=Math.cos(l-u)*d,u&&(c*=Un,E=Math.tan(u-c),E=Math.sqrt(1+E*E),w*=E,P*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),C*=E,$*=E)),C=Ae(C),$=Ae($),w=Ae(w),P=Ae(P)):(C=h,P=d,$=w=0),(D&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(D=Vi(f,"x",o,"px"),x=Vi(f,"y",a,"px")),(g||p||_||b)&&(D=Ae(D+g-(g*C+p*w)+_),x=Ae(x+p-(g*$+p*P)+b)),(n||r)&&(E=f.getBBox(),D=Ae(D+n/100*E.width),x=Ae(x+r/100*E.height)),E="matrix("+C+","+$+","+w+","+P+","+D+","+x+")",f.setAttribute("transform",E),v&&(f.style[De]=E)},dg=function(e,t,i,n,r){var o=360,a=Ye(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?tn:1),u=l-n,c=n+u+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*ou)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*ou)%o-~~(u/o)*o)),e._pt=d=new xt(e._pt,t,i,n,u,Xp),d.e=c,d.u="deg",e._props.push(i),d},fu=function(e,t){for(var i in t)e[i]=t[i];return e},fg=function(e,t,i){var n=fu({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,d,f,g;n.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[De]=t,a=Gr(i,1),Ui(i,De),i.setAttribute("transform",u)):(u=getComputedStyle(i)[De],o[De]=t,a=Gr(i,1),o[De]=u);for(l in wi)u=n[l],c=a[l],u!==c&&r.indexOf(l)<0&&(f=rt(u),g=rt(c),h=f!==g?Vi(i,l,u,g):parseFloat(u),d=parseFloat(c),e._pt=new xt(e._pt,a,l,h,d-h,ca),e._pt.u=g||0,e._props.push(l));fu(a,n)};yt("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",o=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(a){return e<2?s+a:"border"+a+s});io[e>1?"border"+s:s]=function(a,l,u,c,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return _i(a,g,u)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(c+"").split(" "),f={},o.forEach(function(g,p){return f[g]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(l,f,h)}});var gh={name:"css",register:da,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,d,f,g,p,_,b,v,D,x,C,$,w,P,E;ll||da(),this.styles=this.styles||lh(e),P=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(c=t[p],!(Pt[p]&&Jc(p,t,i,n,e,r)))){if(f=typeof c,g=io[p],f==="function"&&(c=c.call(i,n,e,r),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=qr(c)),g)g(this,e,p,c,i)&&(w=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),c+="",Ii.lastIndex=0,Ii.test(u)||(_=rt(u),b=rt(c),b?_!==b&&(u=Vi(e,p,u,b)+b):_&&(c+=_)),this.add(a,"setProperty",u,c,n,r,0,0,p),o.push(p),P.push(p,0,a[p]);else if(f!=="undefined"){if(l&&p in l?(u=typeof l[p]=="function"?l[p].call(i,n,e,r):l[p],Ye(u)&&~u.indexOf("random(")&&(u=qr(u)),rt(u+"")||u==="auto"||(u+=Mt.units[p]||rt(_i(e,p))||""),(u+"").charAt(1)==="="&&(u=_i(e,p))):u=_i(e,p),d=parseFloat(u),v=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),p in si&&(p==="autoAlpha"&&(d===1&&_i(e,"visibility")==="hidden"&&h&&(d=0),P.push("visibility",0,a.visibility),Mi(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=si[p],~p.indexOf(",")&&(p=p.split(",")[0]))),D=p in wi,D){if(this.styles.save(p),E=c,f==="string"&&c.substring(0,6)==="var(--"){if(c=Lt(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var k=e.style.perspective;e.style.perspective=c,c=Lt(e,"perspective"),k?e.style.perspective=k:Ui(e,"perspective")}h=parseFloat(c)}if(x||(C=e._gsap,C.renderTransform&&!t.parseTransform||Gr(e,t.parseTransform),$=t.smoothOrigin!==!1&&C.smooth,x=this._pt=new xt(this._pt,a,De,0,1,C.renderTransform,C,0,-1),x.dep=1),p==="scale")this._pt=new xt(this._pt,C,"scaleY",C.scaleY,(v?Bn(C.scaleY,v+h):h)-C.scaleY||0,ca),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){P.push(Dt,0,a[Dt]),c=lg(c),C.svg?fa(e,c,0,$,0,this):(b=parseFloat(c.split(" ")[2])||0,b!==C.zOrigin&&Mi(this,C,"zOrigin",C.zOrigin,b),Mi(this,a,p,no(u),no(c)));continue}else if(p==="svgOrigin"){fa(e,c,1,$,0,this);continue}else if(p in dh){dg(this,C,p,d,v?Bn(d,v+c):c);continue}else if(p==="smoothOrigin"){Mi(this,C,"smooth",C.smooth,c);continue}else if(p==="force3D"){C[p]=c;continue}else if(p==="transform"){fg(this,c,e);continue}}else p in a||(p=Zn(p)||p);if(D||(h||h===0)&&(d||d===0)&&!Yp.test(c)&&p in a)_=(u+"").substr((d+"").length),h||(h=0),b=rt(c)||(p in Mt.units?Mt.units[p]:_),_!==b&&(d=Vi(e,p,u,b)),this._pt=new xt(this._pt,D?C:a,p,d,(v?Bn(d,v+h):h)-d,!D&&(b==="px"||p==="zIndex")&&t.autoRound!==!1?Jp:ca),this._pt.u=b||0,D&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=Kp):_!==b&&b!=="%"&&(this._pt.b=u,this._pt.r=Gp);else if(p in a)ag.call(this,e,p,u,v?v+c:c);else if(p in e)this.add(e,p,u||e[p],v?v+c:c,n,r);else if(p!=="parseTransform"){Za(p,c);continue}D||(p in a?P.push(p,0,a[p]):typeof e[p]=="function"?P.push(p,2,e[p]()):P.push(p,1,u||e[p])),o.push(p)}}w&&nh(this)},render:function(e,t){if(t.tween._time||!ul())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:_i,aliases:si,getSetter:function(e,t,i){var n=si[t];return n&&n.indexOf(",")<0&&(t=n),t in wi&&t!==Dt&&(e._gsap.x||_i(e,"x"))?i&&su===i?t==="scale"?tg:eg:(su=i||{})&&(t==="scale"?ig:ng):e.style&&!Ga(e.style[t])?Zp:~t.indexOf("-")?Qp:ol(e,t)},core:{_removeProperty:Ui,_getMatrix:hl}};wt.utils.checkPrefix=Zn;wt.core.getStyleSaver=lh;(function(s,e,t,i){var n=yt(s+","+e+","+t,function(r){wi[r]=1});yt(e,function(r){Mt.units[r]="deg",dh[r]=1}),si[n[13]]=s+","+e,yt(i,function(r){var o=r.split(":");si[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Mt.units[s]="px"});wt.registerPlugin(gh);var ne=wt.registerPlugin(gh)||wt;ne.core.Tween;/*!
 * paths 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pg=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,gg=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,mg=Math.PI/180,_s=Math.sin,vs=Math.cos,kr=Math.abs,dr=Math.sqrt,_g=function(e){return typeof e=="number"},pu=1e5,Ti=function(e){return Math.round(e*pu)/pu||0},gu=function(e){return e.closed=Math.abs(e[0]-e[e.length-2])<.001&&Math.abs(e[1]-e[e.length-1])<.001};function vg(s,e,t,i,n,r,o){for(var a=s.length,l,u,c,h,d;--a>-1;)for(l=s[a],u=l.length,c=0;c<u;c+=2)h=l[c],d=l[c+1],l[c]=h*e+d*i+r,l[c+1]=h*t+d*n+o;return s._dirty=1,s}function bg(s,e,t,i,n,r,o,a,l){if(!(s===a&&e===l)){t=kr(t),i=kr(i);var u=n%360*mg,c=vs(u),h=_s(u),d=Math.PI,f=d*2,g=(s-a)/2,p=(e-l)/2,_=c*g+h*p,b=-h*g+c*p,v=_*_,D=b*b,x=v/(t*t)+D/(i*i);x>1&&(t=dr(x)*t,i=dr(x)*i);var C=t*t,$=i*i,w=(C*$-C*D-$*v)/(C*D+$*v);w<0&&(w=0);var P=(r===o?-1:1)*dr(w),E=P*(t*b/i),k=P*-(i*_/t),A=(s+a)/2,T=(e+l)/2,H=A+(c*E-h*k),z=T+(h*E+c*k),F=(_-E)/t,I=(b-k)/i,M=(-_-E)/t,N=(-b-k)/i,W=F*F+I*I,y=(I<0?-1:1)*Math.acos(F/dr(W)),q=(F*N-I*M<0?-1:1)*Math.acos((F*M+I*N)/dr(W*(M*M+N*N)));isNaN(q)&&(q=d),!o&&q>0?q-=f:o&&q<0&&(q+=f),y%=f,q%=f;var ce=Math.ceil(kr(q)/(f/4)),me=[],he=q/ce,we=4/3*_s(he/2)/(1+vs(he/2)),Be=c*t,Ce=h*t,Xe=h*-i,He=c*i,Se;for(Se=0;Se<ce;Se++)n=y+Se*he,_=vs(n),b=_s(n),F=vs(n+=he),I=_s(n),me.push(_-we*b,b+we*_,F+we*I,I-we*F,F,I);for(Se=0;Se<me.length;Se+=2)_=me[Se],b=me[Se+1],me[Se]=_*Be+b*Xe+H,me[Se+1]=_*Ce+b*He+z;return me[Se-2]=a,me[Se-1]=l,me}}function yg(s){var e=(s+"").replace(gg,function(E){var k=+E;return k<1e-4&&k>-1e-4?0:k}).match(pg)||[],t=[],i=0,n=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+s,u,c,h,d,f,g,p,_,b,v,D,x,C,$,w,P=function(k,A,T,H){v=(T-k)/3,D=(H-A)/3,p.push(k+v,A+D,T-v,H-D,T,H)};if(!s||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(u=0;u<o;u++)if(C=f,isNaN(e[u])?(f=e[u].toUpperCase(),g=f!==e[u]):u--,h=+e[u+1],d=+e[u+2],g&&(h+=i,d+=n),u||(_=h,b=d),f==="M")p&&(p.length<8?t.length-=1:a+=p.length,gu(p)),i=_=h,n=b=d,p=[h,d],t.push(p),u+=2,f="L";else if(f==="C")p||(p=[0,0]),g||(i=n=0),p.push(h,d,i+e[u+3]*1,n+e[u+4]*1,i+=e[u+5]*1,n+=e[u+6]*1),u+=6;else if(f==="S")v=i,D=n,(C==="C"||C==="S")&&(v+=i-p[p.length-4],D+=n-p[p.length-3]),g||(i=n=0),p.push(v,D,h,d,i+=e[u+3]*1,n+=e[u+4]*1),u+=4;else if(f==="Q")v=i+(h-i)*r,D=n+(d-n)*r,g||(i=n=0),i+=e[u+3]*1,n+=e[u+4]*1,p.push(v,D,i+(h-i)*r,n+(d-n)*r,i,n),u+=4;else if(f==="T")v=i-p[p.length-4],D=n-p[p.length-3],p.push(i+v,n+D,h+(i+v*1.5-h)*r,d+(n+D*1.5-d)*r,i=h,n=d),u+=2;else if(f==="H")P(i,n,i=h,n),u+=1;else if(f==="V")P(i,n,i,n=h+(g?n-i:0)),u+=1;else if(f==="L"||f==="Z")f==="Z"&&(h=_,d=b,p.closed=!0),(f==="L"||kr(i-h)>.5||kr(n-d)>.5)&&(P(i,n,h,d),f==="L"&&(u+=2)),i=h,n=d;else if(f==="A"){if($=e[u+4],w=e[u+5],v=e[u+6],D=e[u+7],c=7,$.length>1&&($.length<3?(D=v,v=w,c--):(D=w,v=$.substr(2),c-=2),w=$.charAt(1),$=$.charAt(0)),x=bg(i,n,+e[u+1],+e[u+2],+e[u+3],+$,+w,(g?i:0)+v*1,(g?n:0)+D*1),u+=c,x)for(c=0;c<x.length;c++)p.push(x[c]);i=p[p.length-2],n=p[p.length-1]}else console.log(l);return u=p.length,u<6?(t.pop(),u=0):gu(p),t.totalPoints=a+u,t}function xg(s){_g(s[0])&&(s=[s]);var e="",t=s.length,i,n,r,o;for(n=0;n<t;n++){for(o=s[n],e+="M"+Ti(o[0])+","+Ti(o[1])+" C",i=o.length,r=2;r<i;r++)e+=Ti(o[r++])+","+Ti(o[r++])+" "+Ti(o[r++])+","+Ti(o[r++])+" "+Ti(o[r++])+","+Ti(o[r])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vt,mh,_h=function(){return vt||typeof window<"u"&&(vt=window.gsap)&&vt.registerPlugin&&vt},mu=function(){vt=_h(),vt?(vt.registerEase("_CE",sr.create),mh=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Dg=1e20,bs=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},wg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Cg=/[cLlsSaAhHvVtTqQ]/g,Sg=function(e){var t=e.length,i=Dg,n;for(n=1;n<t;n+=6)+e[n]<i&&(i=+e[n]);return i},$g=function(e,t,i){!i&&i!==0&&(i=Math.max(+e[e.length-1],+e[1]));var n=+e[0]*-1,r=-i,o=e.length,a=1/(+e[o-2]+n),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Sg(e)+r:+e[o-1]+r),u;for(l?l=1/l:l=-a,u=0;u<o;u+=2)e[u]=(+e[u]+n)*a,e[u+1]=(+e[u+1]+r)*l},Eg=function s(e,t,i,n,r,o,a,l,u,c,h){var d=(e+i)/2,f=(t+n)/2,g=(i+r)/2,p=(n+o)/2,_=(r+a)/2,b=(o+l)/2,v=(d+g)/2,D=(f+p)/2,x=(g+_)/2,C=(p+b)/2,$=(v+x)/2,w=(D+C)/2,P=a-e,E=l-t,k=Math.abs((i-a)*E-(n-l)*P),A=Math.abs((r-a)*E-(o-l)*P),T;return c||(c=[{x:e,y:t},{x:a,y:l}],h=1),c.splice(h||c.length-1,0,{x:$,y:w}),(k+A)*(k+A)>u*(P*P+E*E)&&(T=c.length,s(e,t,d,f,v,D,$,w,u,c,h),s($,w,x,C,_,b,a,l,u,c,h+1+(c.length-T))),c},sr=(function(){function s(t,i,n){mh||mu(),this.id=t,this.setData(i,n)}var e=s.prototype;return e.setData=function(i,n){n=n||{},i=i||"0,0,1,1";var r=i.match(wg),o=1,a=[],l=[],u=n.precision||1,c=u<=1,h,d,f,g,p,_,b,v,D;if(this.data=i,(Cg.test(i)||~i.indexOf("M")&&i.indexOf("C")<0)&&(r=yg(i)[0]),h=r.length,h===4)r.unshift(0,0),r.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[h-2]!=1)&&$g(r,n.height,n.originY),this.segment=r,g=2;g<h;g+=6)d={x:+r[g-2],y:+r[g-1]},f={x:+r[g+4],y:+r[g+5]},a.push(d,f),Eg(d.x,d.y,+r[g],+r[g+1],+r[g+2],+r[g+3],f.x,f.y,1/(u*2e5),a,a.length-1);for(h=a.length,g=0;g<h;g++)b=a[g],v=a[g-1]||b,(b.x>v.x||v.y!==b.y&&v.x===b.x||b===v)&&b.x<=1?(v.cx=b.x-v.x,v.cy=b.y-v.y,v.n=b,v.nx=b.x,c&&g>1&&Math.abs(v.cy/v.cx-a[g-2].cy/a[g-2].cx)>2&&(c=0),v.cx<o&&(v.cx?o=v.cx:(v.cx=.001,g===h-1&&(v.x-=.001,o=Math.min(o,.001),c=0)))):(a.splice(g--,1),h--);if(h=1/o+1|0,p=1/h,_=0,b=a[0],c){for(g=0;g<h;g++)D=g*p,b.nx<D&&(b=a[++_]),d=b.y+(D-b.x)/b.cx*b.cy,l[g]={x:D,cx:p,y:d,cy:0,nx:9},g&&(l[g-1].cy=d-l[g-1].y);_=a[a.length-1],l[h-1].cy=_.y-d,l[h-1].cx=_.x-l[l.length-1].x}else{for(g=0;g<h;g++)b.nx<g*p&&(b=a[++_]),l[g]=b;_<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(x){var C=l[x*h|0]||l[h-1];return C.nx<x&&(C=C.n),C.y+(x-C.x)/C.cx*C.cy},this.ease.custom=this,this.id&&vt&&vt.registerEase(this.id,this.ease),this},e.getSVGData=function(i){return s.getSVGData(this,i)},s.create=function(i,n,r){return new s(i,n,r).ease},s.register=function(i){vt=i,mu()},s.get=function(i){return vt.parseEase(i)},s.getSVGData=function(i,n){n=n||{};var r=n.width||100,o=n.height||100,a=n.x||0,l=(n.y||0)+o,u=vt.utils.toArray(n.path)[0],c,h,d,f,g,p,_,b,v,D;if(n.invert&&(o=-o,l=0),typeof i=="string"&&(i=vt.parseEase(i)),i.custom&&(i=i.custom),i instanceof s)c=xg(vg([i.segment.slice(0)],r,0,0,-o,a,l));else{for(c=[a,l],_=Math.max(5,(n.precision||1)*200),f=1/_,_+=2,b=5/_,v=bs(a+f*r),D=bs(l+i(f)*-o),h=(D-l)/(v-a),d=2;d<_;d++)g=bs(a+d*f*r),p=bs(l+i(d*f)*-o),(Math.abs((p-D)/(g-v)-h)>b||d===_-1)&&(c.push(v,D),h=(p-D)/(g-v)),v=g,D=p;c="M"+c.join(",")}return u&&u.setAttribute("d",c),c},s})();sr.version="3.14.2";sr.headless=!0;_h()&&vt.registerPlugin(sr);function kg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function Pg(s,e,t){return e&&kg(s.prototype,e),s}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Je,Rs,At,zi,Ri,Vn,vh,nn,Pr,bh,bi,Kt,yh,xh=function(){return Je||typeof window<"u"&&(Je=window.gsap)&&Je.registerPlugin&&Je},Dh=1,Nn=[],te=[],li=[],Tr=Date.now,pa=function(e,t){return t},Tg=function(){var e=Pr.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,te),n.push.apply(n,li),te=i,li=n,pa=function(o,a){return t[o](a)}},Ni=function(e,t){return~li.indexOf(e)&&li[li.indexOf(e)+1][t]},Or=function(e){return!!~bh.indexOf(e)},ct=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:n!==!1,capture:!!r})},ut=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},ys="scrollLeft",xs="scrollTop",ga=function(){return bi&&bi.isPressed||te.cache++},ro=function(e,t){var i=function n(r){if(r||r===0){Dh&&(At.history.scrollRestoration="manual");var o=bi&&bi.isPressed;r=n.v=Math.round(r)||(bi&&bi.iOS?1:0),e(r),n.cacheID=te.cache,o&&pa("ss",r)}else(t||te.cache!==n.cacheID||pa("ref"))&&(n.cacheID=te.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},gt={s:ys,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ro(function(s){return arguments.length?At.scrollTo(s,Ne.sc()):At.pageXOffset||zi[ys]||Ri[ys]||Vn[ys]||0})},Ne={s:xs,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gt,sc:ro(function(s){return arguments.length?At.scrollTo(gt.sc(),s):At.pageYOffset||zi[xs]||Ri[xs]||Vn[xs]||0})},_t=function(e,t){return(t&&t._ctx&&t._ctx.selector||Je.utils.toArray)(e)[0]||(typeof e=="string"&&Je.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Og=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},qi=function(e,t){var i=t.s,n=t.sc;Or(e)&&(e=zi.scrollingElement||Ri);var r=te.indexOf(e),o=n===Ne.sc?1:2;!~r&&(r=te.push(e)-1),te[r+o]||ct(e,"scroll",ga);var a=te[r+o],l=a||(te[r+o]=ro(Ni(e,i),!0)||(Or(e)?n:ro(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=Je.getProperty(e,"scrollBehavior")==="smooth"),l},ma=function(e,t,i){var n=e,r=e,o=Tr(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,p){var _=Tr();p||_-o>l?(r=n,n=g,a=o,o=_):i?n+=g:n=r+(g-r)/(_-a)*(o-a)},h=function(){r=n=i?0:n,a=o=0},d=function(g){var p=a,_=r,b=Tr();return(g||g===0)&&g!==n&&c(g),o===a||b-a>u?0:(n+(i?_:-_))/((i?b:o)-p)*1e3};return{update:c,reset:h,getVelocity:d}},fr=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_u=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},wh=function(){Pr=Je.core.globals().ScrollTrigger,Pr&&Pr.core&&Tg()},Ch=function(e){return Je=e||xh(),!Rs&&Je&&typeof document<"u"&&document.body&&(At=window,zi=document,Ri=zi.documentElement,Vn=zi.body,bh=[At,zi,Ri,Vn],Je.utils.clamp,yh=Je.core.context||function(){},nn="onpointerenter"in Vn?"pointer":"mouse",vh=Fe.isTouch=At.matchMedia&&At.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in At||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Kt=Fe.eventTypes=("ontouchstart"in Ri?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ri?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Dh=0},500),wh(),Rs=1),Rs};gt.op=Ne;te.cache=0;var Fe=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){Rs||Ch(Je)||console.warn("Please gsap.registerPlugin(Observer)"),Pr||wh();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,h=i.onStop,d=i.onStopDelay,f=i.ignore,g=i.wheelSpeed,p=i.event,_=i.onDragStart,b=i.onDragEnd,v=i.onDrag,D=i.onPress,x=i.onRelease,C=i.onRight,$=i.onLeft,w=i.onUp,P=i.onDown,E=i.onChangeX,k=i.onChangeY,A=i.onChange,T=i.onToggleX,H=i.onToggleY,z=i.onHover,F=i.onHoverEnd,I=i.onMove,M=i.ignoreCheck,N=i.isNormalizer,W=i.onGestureStart,y=i.onGestureEnd,q=i.onWheel,ce=i.onEnable,me=i.onDisable,he=i.onClick,we=i.scrollSpeed,Be=i.capture,Ce=i.allowClicks,Xe=i.lockAxis,He=i.onLockAxis;this.target=a=_t(a)||Ri,this.vars=i,f&&(f=Je.utils.toArray(f)),n=n||1e-9,r=r||0,g=g||1,we=we||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(At.getComputedStyle(Vn).lineHeight)||22);var Se,at,lt,ae,Pe,mt,Ct,S=this,St=0,hi=0,Ci=i.passive||!c&&i.passive!==!1,$e=qi(a,gt),di=qi(a,Ne),Si=$e(),Yi=di(),Ue=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Kt[0]==="pointerdown",$i=Or(a),Te=a.ownerDocument||zi,qt=[0,0,0],jt=[0,0,0],fi=0,or=function(){return fi=Tr()},Le=function(V,le){return(S.event=V)&&f&&Og(V.target,f)||le&&Ue&&V.pointerType!=="touch"||M&&M(V,le)},ds=function(){S._vx.reset(),S._vy.reset(),at.pause(),h&&h(S)},pi=function(){var V=S.deltaX=_u(qt),le=S.deltaY=_u(jt),O=Math.abs(V)>=n,X=Math.abs(le)>=n;A&&(O||X)&&A(S,V,le,qt,jt),O&&(C&&S.deltaX>0&&C(S),$&&S.deltaX<0&&$(S),E&&E(S),T&&S.deltaX<0!=St<0&&T(S),St=S.deltaX,qt[0]=qt[1]=qt[2]=0),X&&(P&&S.deltaY>0&&P(S),w&&S.deltaY<0&&w(S),k&&k(S),H&&S.deltaY<0!=hi<0&&H(S),hi=S.deltaY,jt[0]=jt[1]=jt[2]=0),(ae||lt)&&(I&&I(S),lt&&(_&&lt===1&&_(S),v&&v(S),lt=0),ae=!1),mt&&!(mt=!1)&&He&&He(S),Pe&&(q(S),Pe=!1),Se=0},Sn=function(V,le,O){qt[O]+=V,jt[O]+=le,S._vx.update(V),S._vy.update(le),u?Se||(Se=requestAnimationFrame(pi)):pi()},$n=function(V,le){Xe&&!Ct&&(S.axis=Ct=Math.abs(V)>Math.abs(le)?"x":"y",mt=!0),Ct!=="y"&&(qt[2]+=V,S._vx.update(V,!0)),Ct!=="x"&&(jt[2]+=le,S._vy.update(le,!0)),u?Se||(Se=requestAnimationFrame(pi)):pi()},Ei=function(V){if(!Le(V,1)){V=fr(V,c);var le=V.clientX,O=V.clientY,X=le-S.x,B=O-S.y,G=S.isDragging;S.x=le,S.y=O,(G||(X||B)&&(Math.abs(S.startX-le)>=r||Math.abs(S.startY-O)>=r))&&(lt||(lt=G?2:1),G||(S.isDragging=!0),$n(X,B))}},Xi=S.onPress=function(K){Le(K,1)||K&&K.button||(S.axis=Ct=null,at.pause(),S.isPressed=!0,K=fr(K),St=hi=0,S.startX=S.x=K.clientX,S.startY=S.y=K.clientY,S._vx.reset(),S._vy.reset(),ct(N?a:Te,Kt[1],Ei,Ci,!0),S.deltaX=S.deltaY=0,D&&D(S))},ie=S.onRelease=function(K){if(!Le(K,1)){ut(N?a:Te,Kt[1],Ei,!0);var V=!isNaN(S.y-S.startY),le=S.isDragging,O=le&&(Math.abs(S.x-S.startX)>3||Math.abs(S.y-S.startY)>3),X=fr(K);!O&&V&&(S._vx.reset(),S._vy.reset(),c&&Ce&&Je.delayedCall(.08,function(){if(Tr()-fi>300&&!K.defaultPrevented){if(K.target.click)K.target.click();else if(Te.createEvent){var B=Te.createEvent("MouseEvents");B.initMouseEvent("click",!0,!0,At,1,X.screenX,X.screenY,X.clientX,X.clientY,!1,!1,!1,!1,0,null),K.target.dispatchEvent(B)}}})),S.isDragging=S.isGesturing=S.isPressed=!1,h&&le&&!N&&at.restart(!0),lt&&pi(),b&&le&&b(S),x&&x(S,O)}},Gi=function(V){return V.touches&&V.touches.length>1&&(S.isGesturing=!0)&&W(V,S.isDragging)},Wt=function(){return(S.isGesturing=!1)||y(S)},Yt=function(V){if(!Le(V)){var le=$e(),O=di();Sn((le-Si)*we,(O-Yi)*we,1),Si=le,Yi=O,h&&at.restart(!0)}},Xt=function(V){if(!Le(V)){V=fr(V,c),q&&(Pe=!0);var le=(V.deltaMode===1?l:V.deltaMode===2?At.innerHeight:1)*g;Sn(V.deltaX*le,V.deltaY*le,0),h&&!N&&at.restart(!0)}},Ki=function(V){if(!Le(V)){var le=V.clientX,O=V.clientY,X=le-S.x,B=O-S.y;S.x=le,S.y=O,ae=!0,h&&at.restart(!0),(X||B)&&$n(X,B)}},En=function(V){S.event=V,z(S)},gi=function(V){S.event=V,F(S)},ar=function(V){return Le(V)||fr(V,c)&&he(S)};at=S._dc=Je.delayedCall(d||.25,ds).pause(),S.deltaX=S.deltaY=0,S._vx=ma(0,50,!0),S._vy=ma(0,50,!0),S.scrollX=$e,S.scrollY=di,S.isDragging=S.isGesturing=S.isPressed=!1,yh(this),S.enable=function(K){return S.isEnabled||(ct($i?Te:a,"scroll",ga),o.indexOf("scroll")>=0&&ct($i?Te:a,"scroll",Yt,Ci,Be),o.indexOf("wheel")>=0&&ct(a,"wheel",Xt,Ci,Be),(o.indexOf("touch")>=0&&vh||o.indexOf("pointer")>=0)&&(ct(a,Kt[0],Xi,Ci,Be),ct(Te,Kt[2],ie),ct(Te,Kt[3],ie),Ce&&ct(a,"click",or,!0,!0),he&&ct(a,"click",ar),W&&ct(Te,"gesturestart",Gi),y&&ct(Te,"gestureend",Wt),z&&ct(a,nn+"enter",En),F&&ct(a,nn+"leave",gi),I&&ct(a,nn+"move",Ki)),S.isEnabled=!0,S.isDragging=S.isGesturing=S.isPressed=ae=lt=!1,S._vx.reset(),S._vy.reset(),Si=$e(),Yi=di(),K&&K.type&&Xi(K),ce&&ce(S)),S},S.disable=function(){S.isEnabled&&(Nn.filter(function(K){return K!==S&&Or(K.target)}).length||ut($i?Te:a,"scroll",ga),S.isPressed&&(S._vx.reset(),S._vy.reset(),ut(N?a:Te,Kt[1],Ei,!0)),ut($i?Te:a,"scroll",Yt,Be),ut(a,"wheel",Xt,Be),ut(a,Kt[0],Xi,Be),ut(Te,Kt[2],ie),ut(Te,Kt[3],ie),ut(a,"click",or,!0),ut(a,"click",ar),ut(Te,"gesturestart",Gi),ut(Te,"gestureend",Wt),ut(a,nn+"enter",En),ut(a,nn+"leave",gi),ut(a,nn+"move",Ki),S.isEnabled=S.isPressed=S.isDragging=!1,me&&me(S))},S.kill=S.revert=function(){S.disable();var K=Nn.indexOf(S);K>=0&&Nn.splice(K,1),bi===S&&(bi=0)},Nn.push(S),N&&Or(a)&&(bi=S),S.enable(p)},Pg(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Fe.version="3.14.2";Fe.create=function(s){return new Fe(s)};Fe.register=Ch;Fe.getAll=function(){return Nn.slice()};Fe.getById=function(s){return Nn.filter(function(e){return e.vars.id===s})[0]};xh()&&Je.registerPlugin(Fe);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var L,Mn,ee,ge,Tt,ue,dl,so,Kr,Ar,br,Ds,it,Do,_a,dt,vu,bu,zn,Sh,Io,$h,ht,va,Eh,kh,Oi,ba,fl,qn,pl,Fr,ya,No,ws=1,nt=Date.now,Bo=nt(),Vt=0,yr=0,yu=function(e,t,i){var n=kt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},xu=function(e,t){return t&&(!kt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ag=function s(){return yr&&requestAnimationFrame(s)},Du=function(){return Do=1},wu=function(){return Do=0},ii=function(e){return e},xr=function(e){return Math.round(e*1e5)/1e5||0},Ph=function(){return typeof window<"u"},Th=function(){return L||Ph()&&(L=window.gsap)&&L.registerPlugin&&L},vn=function(e){return!!~dl.indexOf(e)},Oh=function(e){return(e==="Height"?pl:ee["inner"+e])||Tt["client"+e]||ue["client"+e]},Ah=function(e){return Ni(e,"getBoundingClientRect")||(vn(e)?function(){return Hs.width=ee.innerWidth,Hs.height=pl,Hs}:function(){return vi(e)})},Fg=function(e,t,i){var n=i.d,r=i.d2,o=i.a;return(o=Ni(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?Oh(r):e["client"+r])||0}},Lg=function(e,t){return!t||~li.indexOf(e)?Ah(e):function(){return Hs}},oi=function(e,t){var i=t.s,n=t.d2,r=t.d,o=t.a;return Math.max(0,(i="scroll"+n)&&(o=Ni(e,i))?o()-Ah(e)()[r]:vn(e)?(Tt[i]||ue[i])-Oh(n):e[i]-e["offset"+n])},Cs=function(e,t){for(var i=0;i<zn.length;i+=3)(!t||~t.indexOf(zn[i+1]))&&e(zn[i],zn[i+1],zn[i+2])},kt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},Dr=function(e){return typeof e=="number"},rn=function(e){return typeof e=="object"},pr=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ho=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Fn=Math.abs,Fh="left",Lh="top",gl="right",ml="bottom",pn="width",gn="height",Lr="Right",Mr="Left",zr="Top",Rr="Bottom",Me="padding",Nt="margin",Qn="Width",_l="Height",Ie="px",Bt=function(e){return ee.getComputedStyle(e)},Mg=function(e){var t=Bt(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cu=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},vi=function(e,t){var i=t&&Bt(e)[_a]!=="matrix(1, 0, 0, 1, 0, 0)"&&L.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return i&&i.progress(0).kill(),n},oo=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Mh=function(e){var t=[],i=e.labels,n=e.duration(),r;for(r in i)t.push(i[r]/n);return t},zg=function(e){return function(t){return L.utils.snap(Mh(e),t)}},vl=function(e){var t=L.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return t(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=t(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Rg=function(e){return function(t,i){return vl(Mh(e))(t,i.direction)}},Ss=function(e,t,i,n){return i.split(",").forEach(function(r){return e(t,r,n)})},We=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:!n,capture:!!r})},qe=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},$s=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Su={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Es={toggleActions:"play",anticipatePin:0},ao={top:0,left:0,center:.5,bottom:1,right:1},js=function(e,t){if(kt(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in ao?ao[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ks=function(e,t,i,n,r,o,a,l){var u=r.startColor,c=r.endColor,h=r.fontSize,d=r.indent,f=r.fontWeight,g=ge.createElement("div"),p=vn(i)||Ni(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,b=p?ue:i,v=e.indexOf("start")!==-1,D=v?u:c,x="border-color:"+D+";font-size:"+h+";color:"+D+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((_||l)&&p?"fixed;":"absolute;"),(_||l||!p)&&(x+=(n===Ne?gl:ml)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,b.children[0]?b.insertBefore(g,b.children[0]):b.appendChild(g),g._offset=g["offset"+n.op.d2],Is(g,0,n,v),g},Is=function(e,t,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];e._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+Qn]=1,r["border"+a+Qn]=0,r[i.p]=t+"px",L.set(e,r)},J=[],xa={},Jr,$u=function(){return nt()-Vt>34&&(Jr||(Jr=requestAnimationFrame(xi)))},Ln=function(){(!ht||!ht.isPressed||ht.startX>ue.clientWidth)&&(te.cache++,ht?Jr||(Jr=requestAnimationFrame(xi)):xi(),Vt||yn("scrollStart"),Vt=nt())},Uo=function(){kh=ee.innerWidth,Eh=ee.innerHeight},wr=function(e){te.cache++,(e===!0||!it&&!$h&&!ge.fullscreenElement&&!ge.webkitFullscreenElement&&(!va||kh!==ee.innerWidth||Math.abs(ee.innerHeight-Eh)>ee.innerHeight*.25))&&so.restart(!0)},bn={},jg=[],zh=function s(){return qe(Z,"scrollEnd",s)||an(!0)},yn=function(e){return bn[e]&&bn[e].map(function(t){return t()})||jg},Et=[],Rh=function(e){for(var t=0;t<Et.length;t+=5)(!e||Et[t+4]&&Et[t+4].query===e)&&(Et[t].style.cssText=Et[t+1],Et[t].getBBox&&Et[t].setAttribute("transform",Et[t+2]||""),Et[t+3].uncache=1)},jh=function(){return te.forEach(function(e){return st(e)&&++e.cacheID&&(e.rec=e())})},bl=function(e,t){var i;for(dt=0;dt<J.length;dt++)i=J[dt],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Fr=!0,t&&Rh(t),t||yn("revert")},Ih=function(e,t){te.cache++,(t||!ft)&&te.forEach(function(i){return st(i)&&i.cacheID++&&(i.rec=0)}),kt(e)&&(ee.history.scrollRestoration=fl=e)},ft,mn=0,Eu,Ig=function(){if(Eu!==mn){var e=Eu=mn;requestAnimationFrame(function(){return e===mn&&an(!0)})}},Nh=function(){ue.appendChild(qn),pl=!ht&&qn.offsetHeight||ee.innerHeight,ue.removeChild(qn)},ku=function(e){return Kr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},an=function(e,t){if(Tt=ge.documentElement,ue=ge.body,dl=[ee,ge,Tt,ue],Vt&&!e&&!Fr){We(Z,"scrollEnd",zh);return}Nh(),ft=Z.isRefreshing=!0,Fr||jh();var i=yn("refreshInit");Sh&&Z.sort(),t||bl(),te.forEach(function(n){st(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),J.slice(0).forEach(function(n){return n.refresh()}),Fr=!1,J.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),ya=1,ku(!0),J.forEach(function(n){var r=oi(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),ku(!1),ya=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),te.forEach(function(n){st(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Ih(fl,1),so.pause(),mn++,ft=2,xi(2),J.forEach(function(n){return st(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ft=Z.isRefreshing=!1,yn("refresh")},Da=0,Ns=1,jr,xi=function(e){if(e===2||!ft&&!Fr){Z.isUpdating=!0,jr&&jr.update(0);var t=J.length,i=nt(),n=i-Bo>=50,r=t&&J[0].scroll();if(Ns=Da>r?-1:1,ft||(Da=r),n&&(Vt&&!Do&&i-Vt>200&&(Vt=0,yn("scrollEnd")),br=Bo,Bo=i),Ns<0){for(dt=t;dt-- >0;)J[dt]&&J[dt].update(0,n);Ns=1}else for(dt=0;dt<t;dt++)J[dt]&&J[dt].update(0,n);Z.isUpdating=!1}Jr=0},wa=[Fh,Lh,ml,gl,Nt+Rr,Nt+Lr,Nt+zr,Nt+Mr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bs=wa.concat([pn,gn,"boxSizing","max"+Qn,"max"+_l,"position",Nt,Me,Me+zr,Me+Lr,Me+Rr,Me+Mr]),Ng=function(e,t,i){Wn(i);var n=e._gsap;if(n.spacerIsNative)Wn(n.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Vo=function(e,t,i,n){if(!e._gsap.swappedIn){for(var r=wa.length,o=t.style,a=e.style,l;r--;)l=wa[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[ml]=a[gl]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[pn]=oo(e,gt)+Ie,o[gn]=oo(e,Ne)+Ie,o[Me]=a[Nt]=a[Lh]=a[Fh]="0",Wn(n),a[pn]=a["max"+Qn]=i[pn],a[gn]=a["max"+_l]=i[gn],a[Me]=i[Me],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Bg=/([A-Z])/g,Wn=function(e){if(e){var t=e.t.style,i=e.length,n=0,r,o;for((e.t._gsap||L.core.getCache(e.t)).uncache=1;n<i;n+=2)o=e[n+1],r=e[n],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Bg,"-$1").toLowerCase())}},Ps=function(e){for(var t=Bs.length,i=e.style,n=[],r=0;r<t;r++)n.push(Bs[r],i[Bs[r]]);return n.t=e,n},Hg=function(e,t,i){for(var n=[],r=e.length,o=i?8:0,a;o<r;o+=2)a=e[o],n.push(a,a in t?t[a]:e[o+1]);return n.t=e.t,n},Hs={left:0,top:0},Pu=function(e,t,i,n,r,o,a,l,u,c,h,d,f,g){st(e)&&(e=e(l)),kt(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?js("0"+e.substr(3),i):0));var p=f?f.time():0,_,b,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Dr(e))f&&(e=L.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Is(a,i,n,!0);else{st(t)&&(t=t(l));var D=(e||"0").split(" "),x,C,$,w;v=_t(t,l)||ue,x=vi(v)||{},(!x||!x.left&&!x.top)&&Bt(v).display==="none"&&(w=v.style.display,v.style.display="block",x=vi(v),w?v.style.display=w:v.style.removeProperty("display")),C=js(D[0],x[n.d]),$=js(D[1]||"0",i),e=x[n.p]-u[n.p]-c+C+r-$,a&&Is(a,$,n,i-$<20||a._isStart&&$>20),i-=i-$}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+i,E=o._isStart;_="scroll"+n.d2,Is(o,P,n,E&&P>20||!E&&(h?Math.max(ue[_],Tt[_]):o.parentNode[_])<=P+1),h&&(u=vi(a),h&&(o.style[n.op.p]=u[n.op.p]-n.op.m-o._offset+Ie))}return f&&v&&(_=vi(v),f.seek(d),b=vi(v),f._caScrollDist=_[n.p]-b[n.p],e=e/f._caScrollDist*d),f&&f.seek(p),f?e:Math.round(e)},Ug=/(webkit|moz|length|cssText|inset)/i,Tu=function(e,t,i,n){if(e.parentNode!==t){var r=e.style,o,a;if(t===ue){e._stOrig=r.cssText,a=Bt(e);for(o in a)!+o&&!Ug.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=e._stOrig;L.core.getCache(e).uncache=1,t.appendChild(e)}},Bh=function(e,t,i){var n=t,r=n;return function(o){var a=Math.round(e());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},Ts=function(e,t,i){var n={};n[t.p]="+="+i,L.set(e,n)},Ou=function(e,t){var i=qi(e,t),n="_scroll"+t.p2,r=function o(a,l,u,c,h){var d=o.tween,f=l.onComplete,g={};u=u||i();var p=Bh(i,u,function(){d.kill(),o.tween=0});return h=c&&h||0,c=c||a-u,d&&d.kill(),l[n]=a,l.inherit=!1,l.modifiers=g,g[n]=function(){return p(u+c*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){te.cache++,o.tween&&xi()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=L.to(e,l),d};return e[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},We(e,"wheel",i.wheelHandler),Z.isTouch&&We(e,"touchmove",i.wheelHandler),r},Z=(function(){function s(t,i){Mn||s.register(L)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ba(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!yr){this.update=this.refresh=this.kill=ii;return}i=Cu(kt(i)||Dr(i)||i.nodeType?{trigger:i}:i,Es);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,u=r.onToggle,c=r.onRefresh,h=r.scrub,d=r.trigger,f=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,_=r.anticipatePin,b=r.onScrubComplete,v=r.onSnapComplete,D=r.once,x=r.snap,C=r.pinReparent,$=r.pinSpacer,w=r.containerAnimation,P=r.fastScrollEnd,E=r.preventOverlaps,k=i.horizontal||i.containerAnimation&&i.horizontal!==!1?gt:Ne,A=!h&&h!==0,T=_t(i.scroller||ee),H=L.core.getCache(T),z=vn(T),F=("pinType"in i?i.pinType:Ni(T,"pinType")||z&&"fixed")==="fixed",I=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],M=A&&i.toggleActions.split(" "),N="markers"in i?i.markers:Es.markers,W=z?0:parseFloat(Bt(T)["border"+k.p2+Qn])||0,y=this,q=i.onRefreshInit&&function(){return i.onRefreshInit(y)},ce=Fg(T,z,k),me=Lg(T,z),he=0,we=0,Be=0,Ce=qi(T,k),Xe,He,Se,at,lt,ae,Pe,mt,Ct,S,St,hi,Ci,$e,di,Si,Yi,Ue,$i,Te,qt,jt,fi,or,Le,ds,pi,Sn,$n,Ei,Xi,ie,Gi,Wt,Yt,Xt,Ki,En,gi;if(y._startClamp=y._endClamp=!1,y._dir=k,_*=45,y.scroller=T,y.scroll=w?w.time.bind(w):Ce,at=Ce(),y.vars=i,n=n||i.animation,"refreshPriority"in i&&(Sh=1,i.refreshPriority===-9999&&(jr=y)),H.tweenScroll=H.tweenScroll||{top:Ou(T,Ne),left:Ou(T,gt)},y.tweenTo=Xe=H.tweenScroll[k.p],y.scrubDuration=function(O){Gi=Dr(O)&&O,Gi?ie?ie.duration(O):ie=L.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Gi,paused:!0,onComplete:function(){return b&&b(y)}}):(ie&&ie.progress(1).kill(),ie=0)},n&&(n.vars.lazy=!1,n._initted&&!y.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),y.animation=n.pause(),n.scrollTrigger=y,y.scrubDuration(h),Ei=0,l||(l=n.vars.id)),x&&((!rn(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ue.style&&L.set(z?[ue,Tt]:T,{scrollBehavior:"auto"}),te.forEach(function(O){return st(O)&&O.target===(z?ge.scrollingElement||Tt:T)&&(O.smooth=!1)}),Se=st(x.snapTo)?x.snapTo:x.snapTo==="labels"?zg(n):x.snapTo==="labelsDirectional"?Rg(n):x.directional!==!1?function(O,X){return vl(x.snapTo)(O,nt()-we<500?0:X.direction)}:L.utils.snap(x.snapTo),Wt=x.duration||{min:.1,max:2},Wt=rn(Wt)?Ar(Wt.min,Wt.max):Ar(Wt,Wt),Yt=L.delayedCall(x.delay||Gi/2||.1,function(){var O=Ce(),X=nt()-we<500,B=Xe.tween;if((X||Math.abs(y.getVelocity())<10)&&!B&&!Do&&he!==O){var G=(O-ae)/$e,Ve=n&&!A?n.totalProgress():G,re=X?0:(Ve-Xi)/(nt()-br)*1e3||0,Oe=L.utils.clamp(-G,1-G,Fn(re/2)*re/.185),Qe=G+(x.inertia===!1?0:Oe),Ee,_e,de=x,Gt=de.onStart,be=de.onInterrupt,$t=de.onComplete;if(Ee=Se(Qe,y),Dr(Ee)||(Ee=Qe),_e=Math.max(0,Math.round(ae+Ee*$e)),O<=Pe&&O>=ae&&_e!==O){if(B&&!B._initted&&B.data<=Fn(_e-O))return;x.inertia===!1&&(Oe=Ee-G),Xe(_e,{duration:Wt(Fn(Math.max(Fn(Qe-Ve),Fn(Ee-Ve))*.185/re/.05||0)),ease:x.ease||"power3",data:Fn(_e-O),onInterrupt:function(){return Yt.restart(!0)&&be&&be(y)},onComplete:function(){y.update(),he=Ce(),n&&!A&&(ie?ie.resetTo("totalProgress",Ee,n._tTime/n._tDur):n.progress(Ee)),Ei=Xi=n&&!A?n.totalProgress():y.progress,v&&v(y),$t&&$t(y)}},O,Oe*$e,_e-O-Oe*$e),Gt&&Gt(y,Xe.tween)}}else y.isActive&&he!==O&&Yt.restart(!0)}).pause()),l&&(xa[l]=y),d=y.trigger=_t(d||f!==!0&&f),gi=d&&d._gsap&&d._gsap.stRevert,gi&&(gi=gi(y)),f=f===!0?d:_t(f),kt(a)&&(a={targets:d,className:a}),f&&(g===!1||g===Nt||(g=!g&&f.parentNode&&f.parentNode.style&&Bt(f.parentNode).display==="flex"?!1:Me),y.pin=f,He=L.core.getCache(f),He.spacer?di=He.pinState:($&&($=_t($),$&&!$.nodeType&&($=$.current||$.nativeElement),He.spacerIsNative=!!$,$&&(He.spacerState=Ps($))),He.spacer=Ue=$||ge.createElement("div"),Ue.classList.add("pin-spacer"),l&&Ue.classList.add("pin-spacer-"+l),He.pinState=di=Ps(f)),i.force3D!==!1&&L.set(f,{force3D:!0}),y.spacer=Ue=He.spacer,$n=Bt(f),or=$n[g+k.os2],Te=L.getProperty(f),qt=L.quickSetter(f,k.a,Ie),Vo(f,Ue,$n),Yi=Ps(f)),N){hi=rn(N)?Cu(N,Su):Su,S=ks("scroller-start",l,T,k,hi,0),St=ks("scroller-end",l,T,k,hi,0,S),$i=S["offset"+k.op.d2];var ar=_t(Ni(T,"content")||T);mt=this.markerStart=ks("start",l,ar,k,hi,$i,0,w),Ct=this.markerEnd=ks("end",l,ar,k,hi,$i,0,w),w&&(En=L.quickSetter([mt,Ct],k.a,Ie)),!F&&!(li.length&&Ni(T,"fixedMarkers")===!0)&&(Mg(z?ue:T),L.set([S,St],{force3D:!0}),ds=L.quickSetter(S,k.a,Ie),Sn=L.quickSetter(St,k.a,Ie))}if(w){var K=w.vars.onUpdate,V=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){y.update(0,0,1),K&&K.apply(w,V||[])})}if(y.previous=function(){return J[J.indexOf(y)-1]},y.next=function(){return J[J.indexOf(y)+1]},y.revert=function(O,X){if(!X)return y.kill(!0);var B=O!==!1||!y.enabled,G=it;B!==y.isReverted&&(B&&(Xt=Math.max(Ce(),y.scroll.rec||0),Be=y.progress,Ki=n&&n.progress()),mt&&[mt,Ct,S,St].forEach(function(Ve){return Ve.style.display=B?"none":"block"}),B&&(it=y,y.update(B)),f&&(!C||!y.isActive)&&(B?Ng(f,Ue,di):Vo(f,Ue,Bt(f),Le)),B||y.update(B),it=G,y.isReverted=B)},y.refresh=function(O,X,B,G){if(!((it||!y.enabled)&&!X)){if(f&&O&&Vt){We(s,"scrollEnd",zh);return}!ft&&q&&q(y),it=y,Xe.tween&&!B&&(Xe.tween.kill(),Xe.tween=0),ie&&ie.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(ki){return ki.vars.immediateRender&&ki.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),y.isReverted||y.revert(!0,!0),y._subPinOffset=!1;var Ve=ce(),re=me(),Oe=w?w.duration():oi(T,k),Qe=$e<=.01||!$e,Ee=0,_e=G||0,de=rn(B)?B.end:i.end,Gt=i.endTrigger||d,be=rn(B)?B.start:i.start||(i.start===0||!d?0:f?"0 0":"0 100%"),$t=y.pinnedContainer=i.pinnedContainer&&_t(i.pinnedContainer,y),Jt=d&&Math.max(0,J.indexOf(y))||0,Ge=Jt,Ke,et,Ji,fs,tt,je,Zt,Po,Tl,lr,Qt,ur,ps;for(N&&rn(B)&&(ur=L.getProperty(S,k.p),ps=L.getProperty(St,k.p));Ge-- >0;)je=J[Ge],je.end||je.refresh(0,1)||(it=y),Zt=je.pin,Zt&&(Zt===d||Zt===f||Zt===$t)&&!je.isReverted&&(lr||(lr=[]),lr.unshift(je),je.revert(!0,!0)),je!==J[Ge]&&(Jt--,Ge--);for(st(be)&&(be=be(y)),be=yu(be,"start",y),ae=Pu(be,d,Ve,k,Ce(),mt,S,y,re,W,F,Oe,w,y._startClamp&&"_startClamp")||(f?-.001:0),st(de)&&(de=de(y)),kt(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(kt(be)?be.split(" ")[0]:"")+de:(Ee=js(de.substr(2),Ve),de=kt(be)?be:(w?L.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,ae):ae)+Ee,Gt=d)),de=yu(de,"end",y),Pe=Math.max(ae,Pu(de||(Gt?"100% 0":Oe),Gt,Ve,k,Ce()+Ee,Ct,St,y,re,W,F,Oe,w,y._endClamp&&"_endClamp"))||-.001,Ee=0,Ge=Jt;Ge--;)je=J[Ge]||{},Zt=je.pin,Zt&&je.start-je._pinPush<=ae&&!w&&je.end>0&&(Ke=je.end-(y._startClamp?Math.max(0,je.start):je.start),(Zt===d&&je.start-je._pinPush<ae||Zt===$t)&&isNaN(be)&&(Ee+=Ke*(1-je.progress)),Zt===f&&(_e+=Ke));if(ae+=Ee,Pe+=Ee,y._startClamp&&(y._startClamp+=Ee),y._endClamp&&!ft&&(y._endClamp=Pe||-.001,Pe=Math.min(Pe,oi(T,k))),$e=Pe-ae||(ae-=.01)&&.001,Qe&&(Be=L.utils.clamp(0,1,L.utils.normalize(ae,Pe,Xt))),y._pinPush=_e,mt&&Ee&&(Ke={},Ke[k.a]="+="+Ee,$t&&(Ke[k.p]="-="+Ce()),L.set([mt,Ct],Ke)),f&&!(ya&&y.end>=oi(T,k)))Ke=Bt(f),fs=k===Ne,Ji=Ce(),jt=parseFloat(Te(k.a))+_e,!Oe&&Pe>1&&(Qt=(z?ge.scrollingElement||Tt:T).style,Qt={style:Qt,value:Qt["overflow"+k.a.toUpperCase()]},z&&Bt(ue)["overflow"+k.a.toUpperCase()]!=="scroll"&&(Qt.style["overflow"+k.a.toUpperCase()]="scroll")),Vo(f,Ue,Ke),Yi=Ps(f),et=vi(f,!0),Po=F&&qi(T,fs?gt:Ne)(),g?(Le=[g+k.os2,$e+_e+Ie],Le.t=Ue,Ge=g===Me?oo(f,k)+$e+_e:0,Ge&&(Le.push(k.d,Ge+Ie),Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=Ge+Ie)),Wn(Le),$t&&J.forEach(function(ki){ki.pin===$t&&ki.vars.pinSpacing!==!1&&(ki._subPinOffset=!0)}),F&&Ce(Xt)):(Ge=oo(f,k),Ge&&Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=Ge+Ie)),F&&(tt={top:et.top+(fs?Ji-ae:Po)+Ie,left:et.left+(fs?Po:Ji-ae)+Ie,boxSizing:"border-box",position:"fixed"},tt[pn]=tt["max"+Qn]=Math.ceil(et.width)+Ie,tt[gn]=tt["max"+_l]=Math.ceil(et.height)+Ie,tt[Nt]=tt[Nt+zr]=tt[Nt+Lr]=tt[Nt+Rr]=tt[Nt+Mr]="0",tt[Me]=Ke[Me],tt[Me+zr]=Ke[Me+zr],tt[Me+Lr]=Ke[Me+Lr],tt[Me+Rr]=Ke[Me+Rr],tt[Me+Mr]=Ke[Me+Mr],Si=Hg(di,tt,C),ft&&Ce(0)),n?(Tl=n._initted,Io(1),n.render(n.duration(),!0,!0),fi=Te(k.a)-jt+$e+_e,pi=Math.abs($e-fi)>1,F&&pi&&Si.splice(Si.length-2,2),n.render(0,!0,!0),Tl||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Io(0)):fi=$e,Qt&&(Qt.value?Qt.style["overflow"+k.a.toUpperCase()]=Qt.value:Qt.style.removeProperty("overflow-"+k.a));else if(d&&Ce()&&!w)for(et=d.parentNode;et&&et!==ue;)et._pinOffset&&(ae-=et._pinOffset,Pe-=et._pinOffset),et=et.parentNode;lr&&lr.forEach(function(ki){return ki.revert(!1,!0)}),y.start=ae,y.end=Pe,at=lt=ft?Xt:Ce(),!w&&!ft&&(at<Xt&&Ce(Xt),y.scroll.rec=0),y.revert(!1,!0),we=nt(),Yt&&(he=-1,Yt.restart(!0)),it=0,n&&A&&(n._initted||Ki)&&n.progress()!==Ki&&n.progress(Ki||0,!0).render(n.time(),!0,!0),(Qe||Be!==y.progress||w||p||n&&!n._initted)&&(n&&!A&&(n._initted||Be||n.vars.immediateRender!==!1)&&n.totalProgress(w&&ae<-.001&&!Be?L.utils.normalize(ae,Pe,0):Be,!0),y.progress=Qe||(at-ae)/$e===Be?0:Be),f&&g&&(Ue._pinOffset=Math.round(y.progress*fi)),ie&&ie.invalidate(),isNaN(ur)||(ur-=L.getProperty(S,k.p),ps-=L.getProperty(St,k.p),Ts(S,k,ur),Ts(mt,k,ur-(G||0)),Ts(St,k,ps),Ts(Ct,k,ps-(G||0))),Qe&&!ft&&y.update(),c&&!ft&&!Ci&&(Ci=!0,c(y),Ci=!1)}},y.getVelocity=function(){return(Ce()-lt)/(nt()-br)*1e3||0},y.endAnimation=function(){pr(y.callbackAnimation),n&&(ie?ie.progress(1):n.paused()?A||pr(n,y.direction<0,1):pr(n,n.reversed()))},y.labelToScroll=function(O){return n&&n.labels&&(ae||y.refresh()||ae)+n.labels[O]/n.duration()*$e||0},y.getTrailing=function(O){var X=J.indexOf(y),B=y.direction>0?J.slice(0,X).reverse():J.slice(X+1);return(kt(O)?B.filter(function(G){return G.vars.preventOverlaps===O}):B).filter(function(G){return y.direction>0?G.end<=ae:G.start>=Pe})},y.update=function(O,X,B){if(!(w&&!B&&!O)){var G=ft===!0?Xt:y.scroll(),Ve=O?0:(G-ae)/$e,re=Ve<0?0:Ve>1?1:Ve||0,Oe=y.progress,Qe,Ee,_e,de,Gt,be,$t,Jt;if(X&&(lt=at,at=w?Ce():G,x&&(Xi=Ei,Ei=n&&!A?n.totalProgress():re)),_&&f&&!it&&!ws&&Vt&&(!re&&ae<G+(G-lt)/(nt()-br)*_?re=1e-4:re===1&&Pe>G+(G-lt)/(nt()-br)*_&&(re=.9999)),re!==Oe&&y.enabled){if(Qe=y.isActive=!!re&&re<1,Ee=!!Oe&&Oe<1,be=Qe!==Ee,Gt=be||!!re!=!!Oe,y.direction=re>Oe?1:-1,y.progress=re,Gt&&!it&&(_e=re&&!Oe?0:re===1?1:Oe===1?2:3,A&&(de=!be&&M[_e+1]!=="none"&&M[_e+1]||M[_e],Jt=n&&(de==="complete"||de==="reset"||de in n))),E&&(be||Jt)&&(Jt||h||!n)&&(st(E)?E(y):y.getTrailing(E).forEach(function(Ji){return Ji.endAnimation()})),A||(ie&&!it&&!ws?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",re,n._tTime/n._tDur):(ie.vars.totalProgress=re,ie.invalidate().restart())):n&&n.totalProgress(re,!!(it&&(we||O)))),f){if(O&&g&&(Ue.style[g+k.os2]=or),!F)qt(xr(jt+fi*re));else if(Gt){if($t=!O&&re>Oe&&Pe+1>G&&G+1>=oi(T,k),C)if(!O&&(Qe||$t)){var Ge=vi(f,!0),Ke=G-ae;Tu(f,ue,Ge.top+(k===Ne?Ke:0)+Ie,Ge.left+(k===Ne?0:Ke)+Ie)}else Tu(f,Ue);Wn(Qe||$t?Si:Yi),pi&&re<1&&Qe||qt(jt+(re===1&&!$t?fi:0))}}x&&!Xe.tween&&!it&&!ws&&Yt.restart(!0),a&&(be||D&&re&&(re<1||!No))&&Kr(a.targets).forEach(function(Ji){return Ji.classList[Qe||D?"add":"remove"](a.className)}),o&&!A&&!O&&o(y),Gt&&!it?(A&&(Jt&&(de==="complete"?n.pause().totalProgress(1):de==="reset"?n.restart(!0).pause():de==="restart"?n.restart(!0):n[de]()),o&&o(y)),(be||!No)&&(u&&be&&Ho(y,u),I[_e]&&Ho(y,I[_e]),D&&(re===1?y.kill(!1,1):I[_e]=0),be||(_e=re===1?1:3,I[_e]&&Ho(y,I[_e]))),P&&!Qe&&Math.abs(y.getVelocity())>(Dr(P)?P:2500)&&(pr(y.callbackAnimation),ie?ie.progress(1):pr(n,de==="reverse"?1:!re,1))):A&&o&&!it&&o(y)}if(Sn){var et=w?G/w.duration()*(w._caScrollDist||0):G;ds(et+(S._isFlipped?1:0)),Sn(et)}En&&En(-G/w.duration()*(w._caScrollDist||0))}},y.enable=function(O,X){y.enabled||(y.enabled=!0,We(T,"resize",wr),z||We(T,"scroll",Ln),q&&We(s,"refreshInit",q),O!==!1&&(y.progress=Be=0,at=lt=he=Ce()),X!==!1&&y.refresh())},y.getTween=function(O){return O&&Xe?Xe.tween:ie},y.setPositions=function(O,X,B,G){if(w){var Ve=w.scrollTrigger,re=w.duration(),Oe=Ve.end-Ve.start;O=Ve.start+Oe*O/re,X=Ve.start+Oe*X/re}y.refresh(!1,!1,{start:xu(O,B&&!!y._startClamp),end:xu(X,B&&!!y._endClamp)},G),y.update()},y.adjustPinSpacing=function(O){if(Le&&O){var X=Le.indexOf(k.d)+1;Le[X]=parseFloat(Le[X])+O+Ie,Le[1]=parseFloat(Le[1])+O+Ie,Wn(Le)}},y.disable=function(O,X){if(O!==!1&&y.revert(!0,!0),y.enabled&&(y.enabled=y.isActive=!1,X||ie&&ie.pause(),Xt=0,He&&(He.uncache=1),q&&qe(s,"refreshInit",q),Yt&&(Yt.pause(),Xe.tween&&Xe.tween.kill()&&(Xe.tween=0)),!z)){for(var B=J.length;B--;)if(J[B].scroller===T&&J[B]!==y)return;qe(T,"resize",wr),z||qe(T,"scroll",Ln)}},y.kill=function(O,X){y.disable(O,X),ie&&!X&&ie.kill(),l&&delete xa[l];var B=J.indexOf(y);B>=0&&J.splice(B,1),B===dt&&Ns>0&&dt--,B=0,J.forEach(function(G){return G.scroller===y.scroller&&(B=1)}),B||ft||(y.scroll.rec=0),n&&(n.scrollTrigger=null,O&&n.revert({kill:!1}),X||n.kill()),mt&&[mt,Ct,S,St].forEach(function(G){return G.parentNode&&G.parentNode.removeChild(G)}),jr===y&&(jr=0),f&&(He&&(He.uncache=1),B=0,J.forEach(function(G){return G.pin===f&&B++}),B||(He.spacer=0)),i.onKill&&i.onKill(y)},J.push(y),y.enable(!1,!1),gi&&gi(y),n&&n.add&&!$e){var le=y.update;y.update=function(){y.update=le,te.cache++,ae||Pe||y.refresh()},L.delayedCall(.01,y.update),$e=.01,ae=Pe=0}else y.refresh();f&&Ig()},s.register=function(i){return Mn||(L=i||Th(),Ph()&&window.document&&s.enable(),Mn=yr),Mn},s.defaults=function(i){if(i)for(var n in i)Es[n]=i[n];return Es},s.disable=function(i,n){yr=0,J.forEach(function(o){return o[n?"kill":"disable"](i)}),qe(ee,"wheel",Ln),qe(ge,"scroll",Ln),clearInterval(Ds),qe(ge,"touchcancel",ii),qe(ue,"touchstart",ii),Ss(qe,ge,"pointerdown,touchstart,mousedown",Du),Ss(qe,ge,"pointerup,touchend,mouseup",wu),so.kill(),Cs(qe);for(var r=0;r<te.length;r+=3)$s(qe,te[r],te[r+1]),$s(qe,te[r],te[r+2])},s.enable=function(){if(ee=window,ge=document,Tt=ge.documentElement,ue=ge.body,L&&(Kr=L.utils.toArray,Ar=L.utils.clamp,ba=L.core.context||ii,Io=L.core.suppressOverwrites||ii,fl=ee.history.scrollRestoration||"auto",Da=ee.pageYOffset||0,L.core.globals("ScrollTrigger",s),ue)){yr=1,qn=document.createElement("div"),qn.style.height="100vh",qn.style.position="absolute",Nh(),Ag(),Fe.register(L),s.isTouch=Fe.isTouch,Oi=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),va=Fe.isTouch===1,We(ee,"wheel",Ln),dl=[ee,ge,Tt,ue],L.matchMedia?(s.matchMedia=function(u){var c=L.matchMedia(),h;for(h in u)c.add(h,u[h]);return c},L.addEventListener("matchMediaInit",function(){jh(),bl()}),L.addEventListener("matchMediaRevert",function(){return Rh()}),L.addEventListener("matchMedia",function(){an(0,1),yn("matchMedia")}),L.matchMedia().add("(orientation: portrait)",function(){return Uo(),Uo})):console.warn("Requires GSAP 3.11.0 or later"),Uo(),We(ge,"scroll",Ln);var i=ue.hasAttribute("style"),n=ue.style,r=n.borderTopStyle,o=L.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=vi(ue),Ne.m=Math.round(a.top+Ne.sc())||0,gt.m=Math.round(a.left+gt.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(ue.setAttribute("style",""),ue.removeAttribute("style")),Ds=setInterval($u,250),L.delayedCall(.5,function(){return ws=0}),We(ge,"touchcancel",ii),We(ue,"touchstart",ii),Ss(We,ge,"pointerdown,touchstart,mousedown",Du),Ss(We,ge,"pointerup,touchend,mouseup",wu),_a=L.utils.checkPrefix("transform"),Bs.push(_a),Mn=nt(),so=L.delayedCall(.2,an).pause(),zn=[ge,"visibilitychange",function(){var u=ee.innerWidth,c=ee.innerHeight;ge.hidden?(vu=u,bu=c):(vu!==u||bu!==c)&&wr()},ge,"DOMContentLoaded",an,ee,"load",an,ee,"resize",wr],Cs(We),J.forEach(function(u){return u.enable(0,1)}),l=0;l<te.length;l+=3)$s(qe,te[l],te[l+1]),$s(qe,te[l],te[l+2])}},s.config=function(i){"limitCallbacks"in i&&(No=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Ds)||(Ds=n)&&setInterval($u,n),"ignoreMobileResize"in i&&(va=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Cs(qe)||Cs(We,i.autoRefreshEvents||"none"),$h=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=_t(i),o=te.indexOf(r),a=vn(r);~o&&te.splice(o,a?6:2),n&&(a?li.unshift(ee,n,ue,n,Tt,n):li.unshift(r,n))},s.clearMatchMedia=function(i){J.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(kt(i)?_t(i):i).getBoundingClientRect(),a=o[r?pn:gn]*n||0;return r?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},s.positionInViewport=function(i,n,r){kt(i)&&(i=_t(i));var o=i.getBoundingClientRect(),a=o[r?pn:gn],l=n==null?a/2:n in ao?ao[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},s.killAll=function(i){if(J.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=bn.killAll||[];bn={},n.forEach(function(r){return r()})}},s})();Z.version="3.14.2";Z.saveStyles=function(s){return s?Kr(s).forEach(function(e){if(e&&e.style){var t=Et.indexOf(e);t>=0&&Et.splice(t,5),Et.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),L.core.getCache(e),ba())}}):Et};Z.revert=function(s,e){return bl(!s,e)};Z.create=function(s,e){return new Z(s,e)};Z.refresh=function(s){return s?wr(!0):(Mn||Z.register())&&an(!0)};Z.update=function(s){return++te.cache&&xi(s===!0?2:0)};Z.clearScrollMemory=Ih;Z.maxScroll=function(s,e){return oi(s,e?gt:Ne)};Z.getScrollFunc=function(s,e){return qi(_t(s),e?gt:Ne)};Z.getById=function(s){return xa[s]};Z.getAll=function(){return J.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Z.isScrolling=function(){return!!Vt};Z.snapDirectional=vl;Z.addEventListener=function(s,e){var t=bn[s]||(bn[s]=[]);~t.indexOf(e)||t.push(e)};Z.removeEventListener=function(s,e){var t=bn[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Z.batch=function(s,e){var t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,o=function(u,c){var h=[],d=[],f=L.delayedCall(n,function(){c(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),r<=h.length&&f.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&st(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return st(r)&&(r=r(),We(Z,"refresh",function(){return r=e.batchMax()})),Kr(s).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Z.create(u))}),t};var Au=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},qo=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Fe.isTouch?" pinch-zoom":""):"none",e===Tt&&s(ue,t)},Os={auto:1,scroll:1},Vg=function(e){var t=e.event,i=e.target,n=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||L.core.getCache(r),a=nt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==ue&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Os[(l=Bt(r)).overflowY]||Os[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!vn(r)&&(Os[(l=Bt(r)).overflowY]||Os[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Hh=function(e,t,i,n){return Fe.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&Vg,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&We(ge,Fe.eventTypes[0],Lu,!1,!0)},onDisable:function(){return qe(ge,Fe.eventTypes[0],Lu,!0)}})},qg=/(input|label|select|textarea)/i,Fu,Lu=function(e){var t=qg.test(e.target.tagName);(t||Fu)&&(e._gsapAllow=!0,Fu=t)},Wg=function(e){rn(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,u=_t(e.target)||Tt,c=L.core.globals().ScrollSmoother,h=c&&c.get(),d=Oi&&(e.content&&_t(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=qi(u,Ne),g=qi(u,gt),p=1,_=(Fe.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,b=0,v=st(n)?function(){return n(a)}:function(){return n||2.8},D,x,C=Hh(u,e.type,!0,r),$=function(){return x=!1},w=ii,P=ii,E=function(){l=oi(u,Ne),P=Ar(Oi?1:0,l),i&&(w=Ar(0,oi(u,gt))),D=mn},k=function(){d._gsap.y=xr(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},A=function(){if(x){requestAnimationFrame($);var N=xr(a.deltaY/2),W=P(f.v-N);if(d&&W!==f.v+f.offset){f.offset=W-f.v;var y=xr((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+y+", 0, 1)",d._gsap.y=y+"px",f.cacheID=te.cache,xi()}return!0}f.offset&&k(),x=!0},T,H,z,F,I=function(){E(),T.isActive()&&T.vars.scrollY>l&&(f()>l?T.progress(1)&&f(l):T.resetTo("scrollY",l))};return d&&L.set(d,{y:"+=0"}),e.ignoreCheck=function(M){return Oi&&M.type==="touchmove"&&A()||p>1.05&&M.type!=="touchstart"||a.isGesturing||M.touches&&M.touches.length>1},e.onPress=function(){x=!1;var M=p;p=xr((ee.visualViewport&&ee.visualViewport.scale||1)/_),T.pause(),M!==p&&qo(u,p>1.01?!0:i?!1:"x"),H=g(),z=f(),E(),D=mn},e.onRelease=e.onGestureStart=function(M,N){if(f.offset&&k(),!N)F.restart(!0);else{te.cache++;var W=v(),y,q;i&&(y=g(),q=y+W*.05*-M.velocityX/.227,W*=Au(g,y,q,oi(u,gt)),T.vars.scrollX=w(q)),y=f(),q=y+W*.05*-M.velocityY/.227,W*=Au(f,y,q,oi(u,Ne)),T.vars.scrollY=P(q),T.invalidate().duration(W).play(.01),(Oi&&T.vars.scrollY>=l||y>=l-1)&&L.to({},{onUpdate:I,duration:W})}o&&o(M)},e.onWheel=function(){T._ts&&T.pause(),nt()-b>1e3&&(D=0,b=nt())},e.onChange=function(M,N,W,y,q){if(mn!==D&&E(),N&&i&&g(w(y[2]===N?H+(M.startX-M.x):g()+N-y[1])),W){f.offset&&k();var ce=q[2]===W,me=ce?z+M.startY-M.y:f()+W-q[1],he=P(me);ce&&me!==he&&(z+=he-me),f(he)}(W||N)&&xi()},e.onEnable=function(){qo(u,i?!1:"x"),Z.addEventListener("refresh",I),We(ee,"resize",I),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){qo(u,!0),qe(ee,"resize",I),Z.removeEventListener("refresh",I),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Fe(e),a.iOS=Oi,Oi&&!f()&&f(1),Oi&&L.ticker.add(ii),F=a._dc,T=L.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bh(f,f(),function(){return T.pause()})},onUpdate:xi,onComplete:F.vars.onComplete}),a};Z.sort=function(s){if(st(s))return J.sort(s);var e=ee.pageYOffset||0;return Z.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ee.innerHeight}),J.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Z.observe=function(s){return new Fe(s)};Z.normalizeScroll=function(s){if(typeof s>"u")return ht;if(s===!0&&ht)return ht.enable();if(s===!1){ht&&ht.kill(),ht=s;return}var e=s instanceof Fe?s:Wg(s);return ht&&ht.target===e.target&&ht.kill(),vn(e.target)&&(ht=e),e};Z.core={_getVelocityProp:ma,_inputObserver:Hh,_scrollers:te,_proxies:li,bridge:{ss:function(){Vt||yn("scrollStart"),Vt=nt()},ref:function(){return it}}};Th()&&L.registerPlugin(Z);/*!
 * DrawSVGPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ai,yl,lo,Uh,Vh,Mu,Ca,qh,Wh=function(){return typeof window<"u"},Yh=function(){return ai||Wh()&&(ai=window.gsap)&&ai.registerPlugin&&ai},Yg=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Wo={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},sn=function(e){return Math.round(e*1e4)/1e4},yi=function(e){return parseFloat(e)||0},zu=function(e,t){var i=yi(e);return~e.indexOf("%")?i/100*t:i},As=function(e,t){return yi(e.getAttribute(t))},Us=Math.sqrt,Ru=function(e,t,i,n,r,o){return Us(Math.pow((yi(i)-yi(e))*r,2)+Math.pow((yi(n)-yi(t))*o,2))},ju=function(e){return console.warn(e)},Xh=function(e){return e.getAttribute("vector-effect")==="non-scaling-stroke"},Xg=1,Gg=function(e,t,i){var n=e.indexOf(" "),r,o;return n<0?(r=i!==void 0?i+"":e,o=e):(r=e.substr(0,n),o=e.substr(n+1)),r=zu(r,t),o=zu(o,t),r>o?[o,r]:[r,o]},Vs=function(e){if(e=yl(e)[0],!e)return 0;var t=e.tagName.toLowerCase(),i=e.style,n=1,r=1,o,a,l,u,c,h,d;Xh(e)&&(r=e.getScreenCTM(),n=Us(r.a*r.a+r.b*r.b),r=Us(r.d*r.d+r.c*r.c));try{a=e.getBBox()}catch{ju("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var f=a||{x:0,y:0,width:0,height:0},g=f.x,p=f.y,_=f.width,b=f.height;if((!a||!_&&!b)&&Wo[t]&&(_=As(e,Wo[t][0]),b=As(e,Wo[t][1]),t!=="rect"&&t!=="line"&&(_*=2,b*=2),t==="line"&&(g=As(e,"x1"),p=As(e,"y1"),_=Math.abs(_-g),b=Math.abs(b-p))),t==="path")u=i.strokeDasharray,i.strokeDasharray="none",o=e.getTotalLength()||0,sn(n)!==sn(r)&&!Mu&&(Mu=1)&&ju("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),o*=(n+r)/2,i.strokeDasharray=u;else if(t==="rect")o=_*2*n+b*2*r;else if(t==="line")o=Ru(g,p,g+_,p+b,n,r);else if(t==="polyline"||t==="polygon")for(l=e.getAttribute("points").match(Yg)||[],t==="polygon"&&l.push(l[0],l[1]),o=0,c=2;c<l.length;c+=2)o+=Ru(l[c-2],l[c-1],l[c],l[c+1],n,r)||0;else(t==="circle"||t==="ellipse")&&(h=_/2*n,d=b/2*r,o=Math.PI*(3*(h+d)-Us((3*h+d)*(h+3*d))));return o||0},Iu=function(e,t){if(e=yl(e)[0],!e)return[0,0];t||(t=Vs(e)+1);var i=lo.getComputedStyle(e),n=i.strokeDasharray||"",r=yi(i.strokeDashoffset),o=n.indexOf(",");return o<0&&(o=n.indexOf(" ")),n=o<0?t:yi(n.substr(0,o)),n>t&&(n=t),[-r||0,n-r||0]},Nu=function(){Wh()&&(lo=window,Vh=ai=Yh(),yl=ai.utils.toArray,Ca=ai.core.getStyleSaver,qh=ai.core.reverting||function(){},Uh=((lo.navigator||{}).userAgent||"").indexOf("Edge")!==-1)},Gh={version:"3.14.2",name:"drawSVG",register:function(e){ai=e,Nu()},init:function(e,t,i,n,r){if(!e.getBBox)return!1;Vh||Nu();var o=Vs(e),a,l,u;return this.styles=Ca&&Ca(e,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=i,this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?(t+"").indexOf(" ")===-1&&(t="0 "+t):t="0 0",a=Iu(e,o),l=Gg(t,o,a[0]),this._length=sn(o),this._dash=sn(a[1]-a[0]),this._offset=sn(-a[0]),this._dashPT=this.add(this,"_dash",this._dash,sn(l[1]-l[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,sn(-l[0]),0,0,0,0,0,1),Uh&&(u=lo.getComputedStyle(e),u.strokeLinecap!==u.strokeLinejoin&&(l=yi(u.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",l,l+.01))),this._live=Xh(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),Xg},render:function(e,t){if(t.tween._time||!qh()){var i=t._pt,n=t._style,r,o,a,l;if(i){for(t._live&&(r=Vs(t._target),r!==t._length&&(o=r/t._length,t._length=r,t._offsetPT&&(t._offsetPT.s*=o,t._offsetPT.c*=o),t._dashPT?(t._dashPT.s*=o,t._dashPT.c*=o):t._dash*=o));i;)i.r(e,i.d),i=i._next;a=t._dash||e&&e!==1&&1e-4||0,r=t._length-a+.1,l=t._offset,a&&l&&a+Math.abs(l%t._length)>t._length-.05&&(l+=l<0?.005:-.005)&&(r+=.005),n.strokeDashoffset=a?l:l+.001,n.strokeDasharray=r<.1?"none":a?a+"px,"+(t._nowrap?999999:r)+"px":"0px, 999999px"}}else t.styles.revert()},getLength:Vs,getPosition:Iu};Yh()&&ai.registerPlugin(Gh);/*!
 * strings: 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kg=/(?:^\s+|\s+$)/g,Jg=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function xl(s){var e=s.nodeType,t="";if(e===1||e===9||e===11){if(typeof s.textContent=="string")return s.textContent;for(s=s.firstChild;s;s=s.nextSibling)t+=xl(s)}else if(e===3||e===4)return s.nodeValue;return t}function ei(s,e,t,i,n){if(s+="",t&&(s=s.trim?s.trim():s.replace(Kg,"")),e&&e!=="")return s.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var r=[],o=s.length,a=0,l,u;a<o;a++)u=s.charAt(a),(u.charCodeAt(0)>=55296&&u.charCodeAt(0)<=56319||s.charCodeAt(a+1)>=65024&&s.charCodeAt(a+1)<=65039)&&(l=((s.substr(a,12).split(Jg)||[])[1]||"").length||2,u=s.substr(a,l),r.emoji=1,a+=l-1),r.push(n?u:u===">"?"&gt;":u==="<"?"&lt;":i&&u===" "&&(s.charAt(a-1)===" "||s.charAt(a+1)===" ")?"&nbsp;":u);return r}/*!
 * ScrambleTextPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qs=(function(){function s(t){this.chars=ei(t),this.sets=[],this.length=50;for(var i=0;i<20;i++)this.sets[i]=Hu(80,this.chars)}var e=s.prototype;return e.grow=function(i){for(var n=0;n<20;n++)this.sets[n]+=Hu(i-this.length,this.chars);this.length=i},s})(),ln,Kh,Jh=function(){return ln||typeof window<"u"&&(ln=window.gsap)&&ln.registerPlugin&&ln},Zg=1,Bu=/\s+/g,Hu=function(e,t){for(var i=t.length,n="";--e>-1;)n+=t[~~(Math.random()*i)];return n},Sa="ABCDEFGHIJKLMNOPQRSTUVWXYZ",Uu=Sa.toLowerCase(),Qg={upperCase:new qs(Sa),lowerCase:new qs(Uu),upperAndLowerCase:new qs(Sa+Uu)},Vu=function(){Kh=ln=Jh()},wo={version:"3.14.2",name:"scrambleText",register:function(e,t,i){ln=e,Vu()},init:function(e,t,i,n,r){if(Kh||Vu(),this.prop="innerHTML"in e?"innerHTML":"textContent"in e?"textContent":0,!!this.prop){this.target=e,typeof t!="object"&&(t={text:t});var o=t.text||t.value||"",a=t.trim!==!1,l=this,u,c,h,d;return l.delimiter=u=t.delimiter||"",l.original=ei(xl(e).replace(Bu," ").split("&nbsp;").join(""),u,a),(o==="{original}"||o===!0||o==null)&&(o=l.original.join(u)),l.text=ei((o||"").replace(Bu," "),u,a),l.hasClass=!!(t.newClass||t.oldClass),l.newClass=t.newClass,l.oldClass=t.oldClass,d=u==="",l.textHasEmoji=d&&!!l.text.emoji,l.charsHaveEmoji=!!t.chars&&!!ei(t.chars).emoji,l.length=d?l.original.length:l.original.join(u).length,l.lengthDif=(d?l.text.length:l.text.join(u).length)-l.length,l.fillChar=t.fillChar||t.chars&&~t.chars.indexOf(" ")?"&nbsp;":"",l.charSet=h=Qg[t.chars||"upperCase"]||new qs(t.chars),l.speed=.05/(t.speed||1),l.prevScrambleTime=0,l.setIndex=Math.random()*20|0,c=l.length+Math.max(l.lengthDif,0),c>h.length&&h.grow(c),l.chars=h.sets[l.setIndex],l.revealDelay=t.revealDelay||0,l.tweenLength=t.tweenLength!==!1,l.tween=i,l.rightToLeft=!!t.rightToLeft,l._props.push("scrambleText","text"),Zg}},render:function(e,t){var i=t.target,n=t.prop,r=t.text,o=t.delimiter,a=t.tween,l=t.prevScrambleTime,u=t.revealDelay,c=t.setIndex,h=t.chars,d=t.charSet,f=t.length,g=t.textHasEmoji,p=t.charsHaveEmoji,_=t.lengthDif,b=t.tweenLength,v=t.oldClass,D=t.newClass,x=t.rightToLeft,C=t.fillChar,$=t.speed,w=t.original,P=t.hasClass,E=r.length,k=a._time,A=k-l,T,H,z,F,I,M,N,W,y,q,ce;u&&(a._from&&(k=a._dur-k),e=k===0?0:k<u?1e-6:k===a._dur?1:a._ease((k-u)/(a._dur-u))),e<0?e=0:e>1&&(e=1),x&&(e=1-e),T=~~(e*E+.5),e?((A>$||A<-$)&&(t.setIndex=c=(c+(Math.random()*19|0))%20,t.chars=d.sets[c],t.prevScrambleTime+=A),F=h):F=w.join(o),ce=a._from?e:1-e,q=f+(b?a._from?ce*ce*ce:1-ce*ce*ce:1)*_,x?e===1&&(a._from||a.data==="isFromStart")?(z="",F=w.join(o)):(N=r.slice(T).join(o),p?z=ei(F).slice(0,q-(g?ei(N):N).length+.5|0).join(""):z=F.substr(0,q-(g?ei(N):N).length+.5|0),F=N):(z=r.slice(0,T).join(o),H=(g?ei(z):z).length,p?F=ei(F).slice(H,q+.5|0).join(""):F=F.substr(H,q-H+.5|0)),P?(W=x?v:D,y=x?D:v,I=W&&T!==0,M=y&&T!==E,N=(I?"<span class='"+W+"'>":"")+z+(I?"</span>":"")+(M?"<span class='"+y+"'>":"")+o+F+(M?"</span>":"")):N=z+o+F,i[n]=C==="&nbsp;"&&~N.indexOf("  ")?N.split("  ").join("&nbsp;&nbsp;"):N}};wo.emojiSafeSplit=ei;wo.getText=xl;Jh()&&ln.registerPlugin(wo);ne.registerPlugin(sr,Gh,Z,wo);ne.defaults({duration:1,ease:sr.create("custom",".75,0,.5,1")});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws=globalThis,Dl=Ws.ShadowRoot&&(Ws.ShadyCSS===void 0||Ws.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zh=Symbol(),qu=new WeakMap;let e0=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Zh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Dl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=qu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&qu.set(t,e))}return e}toString(){return this.cssText}};const t0=s=>new e0(typeof s=="string"?s:s+"",void 0,Zh),i0=(s,e)=>{if(Dl)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=Ws.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},Wu=Dl?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return t0(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:n0,defineProperty:r0,getOwnPropertyDescriptor:s0,getOwnPropertyNames:o0,getOwnPropertySymbols:a0,getPrototypeOf:l0}=Object,Bi=globalThis,Yu=Bi.trustedTypes,u0=Yu?Yu.emptyScript:"",Yo=Bi.reactiveElementPolyfillSupport,Ir=(s,e)=>s,uo={toAttribute(s,e){switch(e){case Boolean:s=s?u0:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},wl=(s,e)=>!n0(s,e),Xu={attribute:!0,type:String,converter:uo,reflect:!1,useDefault:!1,hasChanged:wl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Bi.litPropertyMetadata??(Bi.litPropertyMetadata=new WeakMap);let Rn=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Xu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&r0(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=s0(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){const a=n==null?void 0:n.call(this);r==null||r.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Xu}static _$Ei(){if(this.hasOwnProperty(Ir("elementProperties")))return;const e=l0(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ir("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ir("properties"))){const t=this.properties,i=[...o0(t),...a0(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Wu(n))}else e!==void 0&&t.push(Wu(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return i0(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:uo).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var r,o;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:uo;this._$Em=n;const u=l.fromAttribute(t,a.type);this[n]=u??((o=this._$Ej)==null?void 0:o.get(n))??u,this._$Em=null}}requestUpdate(e,t,i,n=!1,r){var o;if(e!==void 0){const a=this.constructor;if(n===!1&&(r=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??wl)(r,t)||i.useDefault&&i.reflect&&r===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n){const{wrapped:a}=o,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Rn.elementStyles=[],Rn.shadowRootOptions={mode:"open"},Rn[Ir("elementProperties")]=new Map,Rn[Ir("finalized")]=new Map,Yo==null||Yo({ReactiveElement:Rn}),(Bi.reactiveElementVersions??(Bi.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nr=globalThis,Gu=s=>s,co=Nr.trustedTypes,Ku=co?co.createPolicy("lit-html",{createHTML:s=>s}):void 0,Qh="$lit$",Ai=`lit$${Math.random().toFixed(9).slice(2)}$`,ed="?"+Ai,c0=`<${ed}>`,xn=document,Zr=()=>xn.createComment(""),Qr=s=>s===null||typeof s!="object"&&typeof s!="function",Cl=Array.isArray,h0=s=>Cl(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Xo=`[ 	
\f\r]`,gr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ju=/-->/g,Zu=/>/g,en=RegExp(`>|${Xo}(?:([^\\s"'>=/]+)(${Xo}*=${Xo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qu=/'/g,ec=/"/g,td=/^(?:script|style|textarea|title)$/i,d0=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),U=d0(1),Dn=Symbol.for("lit-noChange"),Re=Symbol.for("lit-nothing"),tc=new WeakMap,un=xn.createTreeWalker(xn,129);function id(s,e){if(!Cl(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ku!==void 0?Ku.createHTML(e):e}const f0=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",o=gr;for(let a=0;a<t;a++){const l=s[a];let u,c,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,c=o.exec(l),c!==null);)d=o.lastIndex,o===gr?c[1]==="!--"?o=Ju:c[1]!==void 0?o=Zu:c[2]!==void 0?(td.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=en):c[3]!==void 0&&(o=en):o===en?c[0]===">"?(o=n??gr,h=-1):c[1]===void 0?h=-2:(h=o.lastIndex-c[2].length,u=c[1],o=c[3]===void 0?en:c[3]==='"'?ec:Qu):o===ec||o===Qu?o=en:o===Ju||o===Zu?o=gr:(o=en,n=void 0);const f=o===en&&s[a+1].startsWith("/>")?" ":"";r+=o===gr?l+c0:h>=0?(i.push(u),l.slice(0,h)+Qh+l.slice(h)+Ai+f):l+Ai+(h===-2?a:f)}return[id(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class es{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[u,c]=f0(e,t);if(this.el=es.createElement(u,i),un.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=un.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(Qh)){const d=c[o++],f=n.getAttribute(h).split(Ai),g=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?g0:g[1]==="?"?m0:g[1]==="@"?_0:Co}),n.removeAttribute(h)}else h.startsWith(Ai)&&(l.push({type:6,index:r}),n.removeAttribute(h));if(td.test(n.tagName)){const h=n.textContent.split(Ai),d=h.length-1;if(d>0){n.textContent=co?co.emptyScript:"";for(let f=0;f<d;f++)n.append(h[f],Zr()),un.nextNode(),l.push({type:2,index:++r});n.append(h[d],Zr())}}}else if(n.nodeType===8)if(n.data===ed)l.push({type:2,index:r});else{let h=-1;for(;(h=n.data.indexOf(Ai,h+1))!==-1;)l.push({type:7,index:r}),h+=Ai.length-1}r++}}static createElement(e,t){const i=xn.createElement("template");return i.innerHTML=e,i}}function er(s,e,t=s,i){var o,a;if(e===Dn)return e;let n=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=Qr(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=er(s,n._$AS(s,e.values),n,i)),e}class p0{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??xn).importNode(t,!0);un.currentNode=n;let r=un.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new as(r,r.nextSibling,this,e):l.type===1?u=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(u=new v0(r,this,e)),this._$AV.push(u),l=i[++a]}o!==(l==null?void 0:l.index)&&(r=un.nextNode(),o++)}return un.currentNode=xn,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class as{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Re,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=er(this,e,t),Qr(e)?e===Re||e==null||e===""?(this._$AH!==Re&&this._$AR(),this._$AH=Re):e!==this._$AH&&e!==Dn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):h0(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Re&&Qr(this._$AH)?this._$AA.nextSibling.data=e:this.T(xn.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=es.createElement(id(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(t);else{const o=new p0(n,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=tc.get(e.strings);return t===void 0&&tc.set(e.strings,t=new es(e)),t}k(e){Cl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new as(this.O(Zr()),this.O(Zr()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const n=Gu(e).nextSibling;Gu(e).remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Co{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=Re,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Re}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=er(this,e,t,0),o=!Qr(e)||e!==this._$AH&&e!==Dn,o&&(this._$AH=e);else{const a=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=er(this,a[i+l],t,l),u===Dn&&(u=this._$AH[l]),o||(o=!Qr(u)||u!==this._$AH[l]),u===Re?e=Re:e!==Re&&(e+=(u??"")+r[l+1]),this._$AH[l]=u}o&&!n&&this.j(e)}j(e){e===Re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class g0 extends Co{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Re?void 0:e}}class m0 extends Co{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Re)}}class _0 extends Co{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=er(this,e,t,0)??Re)===Dn)return;const i=this._$AH,n=e===Re&&i!==Re||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Re&&(i===Re||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class v0{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){er(this,e)}}const Go=Nr.litHtmlPolyfillSupport;Go==null||Go(es,as),(Nr.litHtmlVersions??(Nr.litHtmlVersions=[])).push("3.3.2");const b0=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new as(e.insertBefore(Zr(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n=globalThis;let Q=class extends Rn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=b0(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Dn}};var uc;Q._$litElement$=!0,Q.finalized=!0,(uc=_n.litElementHydrateSupport)==null||uc.call(_n,{LitElement:Q});const Ko=_n.litElementPolyfillSupport;Ko==null||Ko({LitElement:Q});(_n.litElementVersions??(_n.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y0={attribute:!0,type:String,converter:uo,reflect:!1,hasChanged:wl},x0=(s=y0,e,t)=>{const{kind:i,metadata:n}=t;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,s,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,s,a),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function R(s){return(e,t)=>typeof t=="object"?x0(s,e,t):((i,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(n,r):void 0})(s,e,t)}const D0="/src/6fcbae.png",w0="/src/2fe1e5.png",C0="/src/d23901.png",S0="/src/09b1b5.png",$0="/src/64d59d.png",E0="/src/6db26f.png",k0="/src/34521f.png",P0="/src/bda8b1.png",T0="/src/25e321.png",O0="/src/7a9943.png",A0="/src/a20a34.png";var F0=Object.defineProperty,L0=Object.getOwnPropertyDescriptor,ls=(s,e,t,i)=>{for(var n=i>1?void 0:i?L0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&F0(e,t,n),n};let tr=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.currentIndex=0,this.screens=[],this.updateScreens=()=>{},this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){const e=document.querySelectorAll(".carrossel img");this.currentIndex=0,this.screens=e,this.updateScreens=()=>{this.screens.forEach((n,r)=>{r===this.currentIndex?ne.to(n,{opacity:1,duration:.4,y:0,delay:.2,onStart:()=>n.classList.remove("invisible")}):ne.to(n,{opacity:0,duration:.4,y:"2rem",onComplete:()=>n.classList.add("invisible")})})},this.updateScreens();const t=this.renderRoot.querySelector("button:first-of-type"),i=this.renderRoot.querySelector("button:last-of-type");t&&i&&(t.addEventListener("click",()=>{this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateScreens()}),i.addEventListener("click",()=>{this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateScreens()}))}render(){return U`
      <section class="relative">
        <div class="container">
          <div class="carrossel relative overflow-hidden rounded-b-2xl">
            <img
              src="${D0}"
              width="1728"
              height="976"
              class="relative rounded-2xl"
              loading="lazy"
            />
            <img
              src="${w0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${C0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${S0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${$0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${E0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${k0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
            />
            <img
              src="${P0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${T0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${O0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${A0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
          </div>
          <div class="absolute inset-0">
            <div
              class="sticky top-[calc(100dvh-4rem)] translate-y-full isolate flex h-16 items-center justify-center after:absolute after:-inset-px after:z-10 after:rounded-b-2xl after:bg-zinc-950/50 after:backdrop-blur-md after:content-['']"
            >
              <div class="relative z-20 flex gap-px">
                <button
                  class="flex items-center gap-4 rounded-s-full bg-zinc-50/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em] text-zinc-50/50"
                >
                  ${this.currentIndex+1} / ${this.screens.length}
                </span>
                <button
                  class="flex items-center gap-4 rounded-e-full bg-zinc-50/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};ls([R({type:String})],tr.prototype,"lang",2);ls([R({type:Number})],tr.prototype,"currentIndex",2);ls([R({type:Array})],tr.prototype,"screens",2);ls([R({type:Function})],tr.prototype,"updateScreens",2);tr=ls([oe("allu-press")],tr);const M0="/src/5c2c4b.webp",z0="/src/36c011.webp",R0="/src/c5764d.webp",j0="/src/a374cc.webp",I0="/src/bf87a5.webp",N0="/src/fd8081.webp";var B0=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,nd=(s,e,t,i)=>{for(var n=i>1?void 0:i?H0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&B0(e,t,n),n};let $a=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=`
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
    `;return U`
      <div id="allugator" class="grid grid-cols-3 py-16">
        <item-header
          title="${m.t("allugator.title")}"
          tags="${m.t("allugator.tags")}"
          year="${m.t("allugator.year")}"
          .contentHtml=${s}
        ></item-header>
        <div class="col-span-2 grid grid-cols-3 gap-4 *:rounded-[.5rem]">
          <img class="mix-blend-screen border-2 border-zinc-800" src="${j0}" loading="lazy" />
          <img src="${N0}" loading="lazy" />
          <img src="${M0}" loading="lazy" />
          <img class="col-span-2 row-span-2 mix-blend-screen" src="${z0}" loading="lazy" />
          <img src="${I0}" loading="lazy" />
          <img class="border-2 border-zinc-800" src="${R0}" loading="lazy" />
        </div>
      </div>
    `}createRenderRoot(){return this}};nd([R({type:String})],$a.prototype,"lang",2);$a=nd([oe("projects-allugator")],$a);const U0="/src/39683d.webp",V0="/src/15c264.webp",q0="/src/295098.webp",W0="/src/778272.webp",Y0="/src/50783c.webp";var X0=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,rd=(s,e,t,i)=>{for(var n=i>1?void 0:i?G0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&X0(e,t,n),n};let Ea=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}renderDescription(){return`${m.t("damus.description1")}`}render(){const s=`
      <p class="text-[.875rem]">
        ${this.renderDescription()}
      </p>
      <p class="text-[.875rem]">
        ${m.t("damus.description2")}
      </p>
    `;return U`
      <div id="damus" class="grid grid-cols-3 py-16">
        <item-header
          title="${m.t("damus.title")}"
          tags="${m.t("damus.tags")}"
          year="${m.t("damus.year")}"
          .contentHtml=${s}
        ></item-header>
        <div class="col-span-2 grid grid-cols-2 gap-4 *:rounded-[.5rem]">
          <img src="${U0}" loading="lazy" class="border-2 border-zinc-800" />
          <img src="${V0}" loading="lazy" />
          <img src="${q0}" loading="lazy"/>
          <img src="${Y0}" loading="lazy"/>
          <img class="col-span-2 border-2 border-zinc-800" src="${W0}" loading="lazy"/>
        </div>
      </div>
    `}createRenderRoot(){return this}};rd([R({type:String})],Ea.prototype,"lang",2);Ea=rd([oe("projects-damus")],Ea);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K0={CHILD:2},J0=s=>(...e)=>({_$litDirective$:s,values:e});class Z0{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ka extends Z0{constructor(e){if(super(e),this.it=Re,e.type!==K0.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Re||e==null)return this._t=void 0,this.it=e;if(e===Dn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ka.directiveName="unsafeHTML",ka.resultType=1;const ci=J0(ka);var Q0=Object.defineProperty,em=Object.getOwnPropertyDescriptor,sd=(s,e,t,i)=>{for(var n=i>1?void 0:i?em(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Q0(e,t,n),n};let Pa=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return U`
      <div class="pt-16 pb-4 xl:pb-8">
        <div class="flex items-center gap-6">
          <h1
            class="text-[2.5rem] leading-none tracking-[-0.05em] lg:text-[3rem] 2xl:text-[4rem] text-zinc-50"
          >
            ${ci(m.t("featured.title"))}
          </h1>
        </div>
      </div>
    `}createRenderRoot(){return this}};sd([R({type:String})],Pa.prototype,"lang",2);Pa=sd([oe("projects-header")],Pa);const tm="/src/e761eb.webp",im="/src/140c7b.webp",nm="/src/36a4a4.webp",rm="/src/ae754e.webp",sm="/src/492162.webp",om="/src/bec54c.webp",am="/src/555530.webp",lm="/src/6a0945.webp",um="/src/4fb0f0.webp",cm="/src/52e81e.webp",hm="/src/f150ed.webp",dm="/src/55a96b.webp",fm="/src/85d489.webp";var pm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,od=(s,e,t,i)=>{for(var n=i>1?void 0:i?gm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&pm(e,t,n),n};let Ta=class extends Q{constructor(){super(...arguments),this.src="",this.overlayRafId=0,this.onKeydown=s=>{s.key==="Escape"&&this.close()},this.onBackdropClick=s=>{s.target===this.querySelector(".zoom-overlay")&&this.close()},this.close=()=>{this.remove()}}connectedCallback(){var s;super.connectedCallback(),(s=window.lenis)==null||s.stop(),document.body.style.overflow="hidden",document.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){var s,e,t;super.disconnectedCallback(),this.overlayRafId&&cancelAnimationFrame(this.overlayRafId),this.overlayRafId=0,(e=(s=this.overlayLenis)==null?void 0:s.destroy)==null||e.call(s),this.overlayLenis=void 0,(t=window.lenis)==null||t.start(),document.body.style.overflow="",document.removeEventListener("keydown",this.onKeydown)}firstUpdated(){const s=this.querySelector(".zoom-overlay"),e=this.querySelector(".zoom-content");if(!s||!e)return;this.overlayLenis=new _c({wrapper:s,content:e});const t=i=>{var n;(n=this.overlayLenis)==null||n.raf(i),this.overlayRafId=requestAnimationFrame(t)};this.overlayRafId=requestAnimationFrame(t),s.addEventListener("click",this.onBackdropClick)}render(){return U`
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
        <div class="zoom-content container max-w-[1280px] my-24">
          <picture>
            <img src="${sm}" width="1920" height="1136" type="image/webp" class="rounded-t-[.5rem]" />
            <img src="${om}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${am}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${lm}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${um}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${cm}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${hm}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${dm}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${fm}" width="1920" height="236" loading="lazy" type="image/webp" class="rounded-b-[.5rem]" />
          </picture>
        </div>
      </div>
    `}createRenderRoot(){return this}};od([R({type:String})],Ta.prototype,"src",2);Ta=od([oe("img-zoom")],Ta);var mm=Object.defineProperty,_m=Object.getOwnPropertyDescriptor,ad=(s,e,t,i)=>{for(var n=i>1?void 0:i?_m(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&mm(e,t,n),n};let Oa=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language},this.createZoomBox=s=>{const e=document.createElement("img-zoom");return e.setAttribute("src",s.src),e},this.handleSeeFullPage=()=>{const s=document.querySelector("#ifficient-homepage");if(s){const e=this.createZoomBox(s);document.body.appendChild(e)}}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=`
      <p class="text-[.875rem]">
        ${m.t("ifficient.description1")}
      </p>
      <p class="text-[.875rem]">
        ${m.t("ifficient.description2")}
      </p>
      <a
        href="${m.t("links.lastProject.url")}"
        class="cta-button cta-button--accent inline-flex items-center gap-4 mt-6 px-6"
      >
        ${m.t("ifficient.cta")}
      </a>
    `;return U`
      <div id="ifficient" class="grid grid-cols-3 py-16">
        <item-header title="${m.t("ifficient.title")}" tags="${m.t("ifficient.tags")}" .contentHtml=${s}></item-header>
        <div class="col-span-2 grid gap-4 *:rounded-[.75rem]">
          <div
            class="relative group cursor-pointer aspect-video overflow-hidden border-2 border-zinc-800 before:hover:opacity-1 before:absolute before:inset-0 hover:before:bg-zinc-950/50 before:transition-colors before:duration-200"
            @click=${this.handleSeeFullPage}
          >
            <img id="ifficient-homepage" class="w-full" src="${tm}" />
            <div
              class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full py-3 px-5 text-[1rem] font-medium leading-[20px] text-zinc-50 opacity-0 group-hover:opacity-100 transition-all backdrop-blur duration-200 bg-zinc-100/15 hover:bg-zinc-100/30"
            >
              ${m.t("ifficient.fullView")}
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4 *:rounded-[.75rem]">
            <img src="${nm}" />
            <img src="${im}" />
            <img src="${rm}" />
          </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};ad([R({type:String})],Oa.prototype,"lang",2);Oa=ad([oe("projects-ifficient")],Oa);var vm=Object.defineProperty,bm=Object.getOwnPropertyDescriptor,us=(s,e,t,i)=>{for(var n=i>1?void 0:i?bm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&vm(e,t,n),n};let ir=class extends Q{constructor(){super(...arguments),this.title="",this.tags="",this.year="2025",this.contentHtml=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){const e=this.tags.split(",").map(t=>t.trim()).map(t=>U`<span class="text-[.875rem] text-zinc-600">/</span><span class="text-zinc-50">${t}</span>`);return U`
      <div class="sticky top-20 grid items-end gap-8">
        <div class="mb-2 flex flex-wrap gap-2 leading-none text-[.875rem]">
          <span class="text-brand-400"> ${this.year} </span>
          ${e}
        </div>
        <h2 class="text-[2.5rem] leading-none text-zinc-50">${this.title}</h2>
        ${this.contentHtml?U`<div class="flex flex-col gap-4 text-balance leading-loose items-start">
              ${ci(this.contentHtml)}
            </div>`:null}
      </div>
    `}createRenderRoot(){return this}};us([R({type:String})],ir.prototype,"title",2);us([R({type:String})],ir.prototype,"tags",2);us([R({type:String})],ir.prototype,"year",2);us([R({type:String})],ir.prototype,"contentHtml",2);ir=us([oe("item-header")],ir);class ym{constructor(){this._dark=!0,this.listeners=new Set}get dark(){return this._dark}set dark(e){this._dark=e,document.documentElement.classList.toggle("dark",e),localStorage.setItem("theme",e?"dark":"light"),this.notifyListeners()}toggle(){this.dark=!this.dark}subscribe(e){this.listeners.add(e)}unsubscribe(e){this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>{e.requestUpdate()})}init(){const e=localStorage.getItem("theme");e&&(this._dark=e==="dark"),document.documentElement.classList.toggle("dark",this._dark)}}const mr=new ym,Cn=s=>class extends s{connectedCallback(){super.connectedCallback(),mr.subscribe(this)}disconnectedCallback(){super.disconnectedCallback(),mr.unsubscribe(this)}get dark(){return mr.dark}set dark(e){mr.dark=e}toggleTheme(){mr.toggle()}},xm="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='2'/%3e%3c/svg%3e";var Dm=Object.defineProperty,wm=Object.getOwnPropertyDescriptor,Sl=(s,e,t,i)=>{for(var n=i>1?void 0:i?wm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Dm(e,t,n),n};let ho=class extends Cn(Q){constructor(){super(),this.more=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}changeLang(){const e=m.language==="en"?"pt":"en";m.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}changeTheme(){this.toggleTheme()}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Copied!":"Copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){ne.to("header",{scrollTrigger:{trigger:"header",start:"bottom top",toggleActions:"play none none reverse",scrub:2},outline:"1px solid hsla(0 0 100% / 0.05)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return U`
      <header
        class="absolute inset-x-0 z-40 hidden w-full bg-linear-to-t from-zinc-950 backdrop-blur to-zinc-950/80 backdrop-saturate-200 lg:fixed lg:block py-2"
      >
        <div class="container grid items-center lg:grid-cols-3">
          <div class="flex items-center">
            <button
              @click=${()=>this.getPreviousPage()}
              class="flex size-10 p-3 cursor-pointer transition-background duration-500 items-center justify-center opacity-50 hover:opacity-100 hover:bg-zinc-800 rounded-full"
              title="Go back to homepage"
            >
              <img
                src="${xm}"
                class="transition-opacity duration-500"
              />
            </button>
            <mail-button
              @click=${()=>this.copyEmail()}
              @mouseleave=${()=>this.copyEmailReset()}
              label="hello@pmjr.cc"
              hover="${this.lang==="en"?"Click to copy":"Copiar e-mail"}"
            ></mail-button>
          </div>
          <nav>
            <ul id="anchors" class="flex justify-evenly">
              <li class="flex-1">
                <menu-item
                  href="#ifficient"
                  label="Ifficient"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#damus"
                  label="Damus"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#allugator"
                  label="Allugator"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#multiplayer"
                  label="Multiplayer"
                ></menu-item>
              </li>
            </ul>
            <div
              id="copy"
              class="absolute flex h-12 w-full items-center justify-center px-5 font-mono text-[.625rem] font-semibold uppercase lg:hidden bg-zinc-900"
            >
              <span> Copyright 2025 Paulo Melo Jr. </span>
            </div>
          </nav>
          <div class="flex justify-end">
            <div class="flex items-center justify-center gap-2">
              <a
                class="cta-button flex items-center gap-2 uppercase font-semibold text-[.75rem] py-1.5 pe-2 tracking-[0.05em]"
                href="/Paulo Melo Jr. - Currículo.pdf"
                target="_blank"
              >
                ${this.lang==="en"?"Resume":"Currículo"}
                <svg
                  alt="${this.lang==="en"?"Download":"Baixar"}"
                  width="20px"
                  height="20px"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13V22M12 22L15.5 18.5M12 22L8.5 18.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <div class="flex h-12 items-center justify-center">
                <lang-button
                  @click=${()=>this.changeLang()}
                  label=${this.lang==="pt"?"PT · BR":"EN · US"}
                  title="${this.lang==="en"?"Mudar para português":"Change to english"}"
                ></lang-button>
              </div>
            </div>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};Sl([R({type:Boolean})],ho.prototype,"more",2);Sl([R({type:String})],ho.prototype,"lang",2);ho=Sl([oe("projects-menu")],ho);const Cm="/src/00c014.webp",Sm="/src/f89330.webp",$m="/src/342435.webp",Em="/src/8e3288.webp",km="/src/a44924.webp",Pm="/src/a6b260.webp",Tm="/src/53e6da.gif",Om="/src/73910b.webp",Am="/src/b808d9.webp",Fm="/src/80a3c2.gif",Lm="/src/dd2f35.webp";var Mm=Object.defineProperty,zm=Object.getOwnPropertyDescriptor,ld=(s,e,t,i)=>{for(var n=i>1?void 0:i?zm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Mm(e,t,n),n};let Aa=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=`
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
    `;return U`
      <div id="multiplayer" class="grid grid-cols-3 py-16">
        <item-header
          title="${m.t("multiplayer.title")}"
          tags="${m.t("multiplayer.tags")}"
          year="${m.t("multiplayer.year")}"
          .contentHtml=${s}
        ></item-header>
        <div class="col-span-2 grid grid-cols-2 gap-4 *:rounded-[.5rem]">
          <img src="${Sm}" loading="lazy" />
          <img src="${$m}" loading="lazy" />
          <img src="${km}" loading="lazy"/>
          <img src="${Pm}" loading="lazy"/>
          <img src="${Fm}" loading="lazy"/>
          <img src="${Em}" loading="lazy"/>
          <img src="${Am}" loading="lazy"/>
          <img src="${Lm}" loading="lazy"/>
          <img src="${Om}" loading="lazy"/>
          <img src="${Tm}" loading="lazy"/>
          <img class="col-span-2 border-2 border-zinc-800" src="${Cm}" loading="lazy" />
        </div>
      </div>
    `}createRenderRoot(){return this}};ld([R({type:String})],Aa.prototype,"lang",2);Aa=ld([oe("projects-multiplayer")],Aa);var Rm=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,cs=(s,e,t,i)=>{for(var n=i>1?void 0:i?jm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Rm(e,t,n),n};let nr=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.currentIndex=0,this.screens=[],this.updateScreens=()=>{},this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){const e=document.querySelectorAll(".carrossel img");this.currentIndex=0,this.screens=e,this.updateScreens=()=>{this.screens.forEach((n,r)=>{r===this.currentIndex?ne.to(n,{opacity:1,duration:.4,y:0,delay:.2,onStart:()=>n.classList.remove("invisible")}):ne.to(n,{opacity:0,duration:.4,y:100,onComplete:()=>n.classList.add("invisible")})})},this.updateScreens();const t=this.renderRoot.querySelector("button:first-of-type"),i=this.renderRoot.querySelector("button:last-of-type");t&&i&&(t.addEventListener("click",()=>{this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateScreens()}),i.addEventListener("click",()=>{this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateScreens()}))}render(){return U`
      <section class="relative mt-32">
        <div class="container">
          <div class="carrossel relative overflow-hidden">
            <img
              src=""
              width="1728"
              height="976"
              class="relative rounded-[.5rem]"
            />
            <img
              src=""
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
            />
            <img
              src=""
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
            />
          </div>
          <div class="absolute inset-0">
            <div
              class="sticky -inset-x-4 top-[calc(100dvh-12rem)] isolate flex h-48 items-end justify-center after:absolute after:inset-0 after:z-10 after:bg-linear-to-t after:from-zinc-950 after:content-['']"
            >
              <progressive-blur></progressive-blur>
              <div class="relative z-20 flex gap-px pb-2">
                <button
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em]"
                >
                  ${this.currentIndex+1} / ${this.screens.length}
                </span>
                <button
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};cs([R({type:String})],nr.prototype,"lang",2);cs([R({type:Number})],nr.prototype,"currentIndex",2);cs([R({type:Array})],nr.prototype,"screens",2);cs([R({type:Function})],nr.prototype,"updateScreens",2);nr=cs([oe("projects-screens")],nr);var Im=Object.getOwnPropertyDescriptor,Nm=(s,e,t,i)=>{for(var n=i>1?void 0:i?Im(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(n)||n);return n};let ic=class extends Cn(Q){render(){return U`
      <section class="container pt-12">
        <projects-header></projects-header>
        <projects-ifficient></projects-ifficient>
        <div
          class="xl:my-16 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
        ></div>
        <projects-damus></projects-damus>
        <div
          class="xl:my-16 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
        ></div>
        <projects-allugator></projects-allugator>
        <div
          class="xl:my-16 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
        ></div>
        <projects-multiplayer></projects-multiplayer>
        <div
          class="mt-16 mb-32 h-px w-full bg-linear-to-r bg-transparent"
        ></div>
        <cases-section></cases-section>
      </section>
    `}createRenderRoot(){return this}};ic=Nm([oe("projects-index")],ic);var Bm=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,ud=(s,e,t,i)=>{for(var n=i>1?void 0:i?Hm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Bm(e,t,n),n};let Fa=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return U`
      <div
        class="hero flex h-dvh flex-col items-center justify-center gap-16 p-8 text-center text-[1.5rem] text-zinc-100 lg:hidden"
      >
        Sorry, this page isn't available <br />
        for small screens yet.
        <a
          href="/"
          class=" flex items-center gap-4 rounded-full bg-zinc-100 py-3 pe-6 ps-4 text-[1rem] font-semibold uppercase leading-none text-zinc-950"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 13L2 6.99999M2 6.99999L8 1M2 6.99999L14 6.99999"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          Go back
        </a>
        <svg
          class="absolute bottom-8 h-12 rotate-21 stroke-zinc-600"
          width="44"
          height="67"
          viewBox="0 0 44 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.622 26.2432C21.3514 21.7806 26.8467 14.2637 26.8467 14.2637L24.3142 20.9771C22.2556 25.7528 20.6914 30.708 18.6864 35.4888C16.8732 39.8121 13.9681 45.3093 12.0938 48.2719C10.2195 51.2345 5.20238 56.9493 4.7375 53.4575C4.51176 51.7619 5.98672 46.8824 8.83354 42.6494C11.6804 38.4164 18.3776 29.4011 24.7806 25.0562C32.0957 20.0925 40.026 12.6061 40.6384 8.03106C42.2438 -3.96201 21.0414 0.396133 1.82617 23.5558"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.0068 65.5502C25.5655 61.1839 21.8028 42.839 27.25 23.3022C28.2281 19.7942 29.5032 16.2477 31.2288 12.7368C30.2319 15.3528 27.6369 24.4559 30.9257 27.8938C34.2144 31.3317 40.2681 27.7068 42.8838 25.4646"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    `}createRenderRoot(){return this}};ud([R({type:String})],Fa.prototype,"lang",2);Fa=ud([oe("projects-fail")],Fa);var Um=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,cd=(s,e,t,i)=>{for(var n=i>1?void 0:i?Vm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Um(e,t,n),n};let La=class extends Q{constructor(){super(...arguments),this.reverse=!1}render(){return U`
      <div class="progressive-blur ${this.reverse?"progressive-blur--reverse":""}">
        ${Array.from({length:6},()=>U`<div></div>`)}
      </div>
    `}createRenderRoot(){return this}};cd([R({type:Boolean})],La.prototype,"reverse",2);La=cd([oe("progressive-blur")],La);const qm="/src/341817.webp",Wm="/src/7ea3a6.webp";var Ym=Object.defineProperty,Xm=Object.getOwnPropertyDescriptor,hd=(s,e,t,i)=>{for(var n=i>1?void 0:i?Xm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Ym(e,t,n),n};let Ma=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}initAnimation(){const s=this.querySelector("#cases"),e=this.querySelectorAll("#cases .cases");s&&e.length>0&&ne.matchMedia().add("(min-width: 1024px)",()=>{ne.from(Array.from(e),{scrollTrigger:{trigger:s,start:"top 100%",end:"bottom 80%",toggleActions:"play none none reverse",scrub:2},stagger:-.1,y:"10rem"})})}firstUpdated(){this.initAnimation()}renderTitle(s){const e=s.split("<br class='block xl:hidden'>");return e.length>1?U`
        ${e[0]}
        <br class="block xl:hidden" />
        ${e[1]}
      `:s}render(){return U`
      <section id="cases" class="hidden xl:block">
        <div class="container">
          <div
            class="hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
          ></div>
          <div
            class="cases-background relative bg-gradient-to-l from-zinc-900 flex rounded-4xl 2xl:h-[512px]"
          >
            <div class="hidden w-2/3 justify-center xl:flex">
              <span
                class="absolute bottom-0 left-0 flex gap-2 p-8 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em] text-zinc-600"
              >
                2025 ${m.t("cases.project")}
              </span>
              <div class="absolute bottom-0 overflow-hidden pointer-events-none">
                <img
                  class="cases absolute w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${qm}"
                  width="1264"
                  height="720"
                  alt="Dark mode mobile dashboard showing analytics overview with graphs, lead count, and campaign metrics on a tilted iPhone screen."
                />
                <img
                  class="cases w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${Wm}"
                  width="1264"
                  height="720"
                  alt="Mobile screen in dark mode showcasing an organized campaign list view, with project names, dates, and quick actions."
                />
              </div>
            </div>
            <div
              class="cases-content relative flex flex-1 flex-col p-20 text-center xl:aspect-square xl:rounded-r-4xl 2xl:p-24"
            >
              <h2
                class="text-[2.5rem] leading-none tracking-[-0.04em] text-zinc-50 2xl:text-[3rem]"
              >
                ${this.renderTitle(m.t("cases.title"))}
              </h2>
              <p
                class="mb-auto mt-8 text-pretty text-sm/loose 2xl:text-base/loose"
              >
                ${m.t("cases.description")}
              </p>
              <a
                href="${m.t("links.lastProject.url")}"
                class="cta-button cta-button--accent flex items-center gap-3 self-center ps-6 w-full justify-between"
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
            class="hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
          ></div>
        </div>
      </section>
    `}createRenderRoot(){return this}};hd([R({type:String})],Ma.prototype,"lang",2);Ma=hd([oe("cases-section")],Ma);const Gm=`<svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12 23H34M12 23C5.92487 23 1 18.0751 1 12M12 23H23M1 12C1 5.92487 5.92487 1 12 1M1 12H12M45 12C45 18.0751 40.0751 23 34 23M45 12C45 5.92487 40.0751 1 34 1M45 12H34M34 23H23M34 1H12M34 1H23M12 1H23M23 23C16.9249 23 12 18.0751 12 12M23 23C29.0751 23 34 18.0751 34 12M23 23C23 21.5555 23.2845 20.1251 23.8373 18.7905C24.3901 17.4559 25.2004 16.2433 26.2218 15.2218C27.2433 14.2004 28.4559 13.3901 29.7905 12.8373C31.1251 12.2845 32.5555 12 34 12M23 23C23 21.5555 22.7155 20.1251 22.1627 18.7905C21.6099 17.4559 20.7996 16.2433 19.7782 15.2218C18.7567 14.2004 17.5441 13.3901 16.2095 12.8373C14.8749 12.2845 13.4445 12 12 12M12 12C12 5.92487 16.9249 1 23 1M12 12C14.9174 12 17.7153 10.8411 19.7782 8.77818C21.8411 6.71528 23 3.91738 23 1M34 12C34 5.92487 29.0751 1 23 1M34 12C32.5555 12 31.1251 11.7155 29.7905 11.1627C28.4559 10.6099 27.2433 9.79962 26.2218 8.77817C25.2004 7.75673 24.3901 6.5441 23.8373 5.20952C23.2845 3.87494 23 2.44454 23 1" stroke-width="2"/>\r
</svg>\r
`;var Km=Object.defineProperty,Jm=Object.getOwnPropertyDescriptor,dd=(s,e,t,i)=>{for(var n=i>1?void 0:i?Jm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Km(e,t,n),n};let za=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}initScrambleText(){const s=this.querySelector("#copyright"),e=this.querySelector(".copyright span");s&&e&&(s.addEventListener("mouseenter",()=>{ne.to(e,{duration:1,scrambleText:{text:"Made by a human being",chars:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",speed:.1}})}),s.addEventListener("mouseleave",()=>{ne.to(e,{duration:.5,scrambleText:{text:"Copyright",chars:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",speed:.1}})}))}firstUpdated(){const s=this.querySelector("#menu");if(!s)return;const e={github:{label:m.t("links.github.label"),url:m.t("links.github.url")},linkedin:{label:m.t("links.linkedin.label"),url:m.t("links.linkedin.url")},email:{label:m.t("links.email.label"),url:m.t("links.email.url")}};Object.values(e).forEach((i,n)=>{const r=(n+1).toString().padStart(2,"0"),o=`
				<div class="border-b border-zinc-800 lg:border-0">
					<a target="_blank" class="menu-item h-20 lg:h-16 px-5 lg:pt-1 flex items-center text-zinc-100 relative" rel="noopener noreferrer" href="${i.url}">
						${i.label}
						<div class="absolute flex items-center px-5 pt-1 inset-0 lg:rounded-full text-zinc-950">
							${i.label}
						</div>
						<span class="lg:hidden absolute opacity-50 mix-blend-difference right-6 bottom-6 font-mono text-[.75rem] tracking-[0.05em]">
							${i.label==="Email"?"hello@pmjr.cc":r}
						</span>
					</a>
				</div>`;s.insertAdjacentHTML("beforeend",o)}),this.initScrambleText(),this.initMenuAnimation()}initMenuAnimation(){const s=this.querySelector("footer"),e=this.querySelector("#menu"),t=this.querySelectorAll("#menu > *");s&&e&&t.length>0&&ne.from(Array.from(t),{scrollTrigger:{trigger:s,start:"top 50%",end:"top 0%",toggleActions:"play none none reverse"},opacity:0,stagger:.1,y:"5rem"})}render(){return U`
      <footer
        id="section-connect"
        class="footer relative z-10 h-lvh overflow-hidden rounded-t-4xl before:content-none lg:before:content-['']"
      >
        <div
          id="footerLinks"
          class="relative z-10 flex h-full flex-1 items-center pb-24 lg:pb-0"
        >
          <div
            id="menu"
            class="flex flex-1 flex-col flex-wrap gap-0 text-[2rem] tracking-[-0.04em] lg:flex-row lg:items-baseline lg:justify-center lg:gap-4 lg:text-[2.5rem]"
          >
            <span
              class="flex h-20 items-center px-5 lg:p-0 text-zinc-600 me-5"
            >
              ${m.t("connect.title")}
            </span>
            <span
              class="hidden lg:flex items-center self-center relative px-2 stroke-brand-400"
            >
              ${ci(`${Gm}`)}
            </span>
          </div>
        </div>
        <div class="absolute z-50 inset-x-0 bottom-0 h-12 w-full flex items-center gap-2 justify-center px-5 font-mono text-[.625rem] font-semibold uppercase bg-zinc-950 tracking-[0.1em]">
            <span> [c] 2025 Paulo melo Jr. </span>
            <span class="text-zinc-600"> / </span>
            <span> Made by a human being </span>
          </div>
      </footer>
    `}createRenderRoot(){return this}};dd([R({type:String})],za.prototype,"lang",2);za=dd([oe("footer-section")],za);const Zm="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='2'/%3e%3c/svg%3e",nc="/src/c2501f.webp",Qm="/src/6c7165.webp",e1="/src/b1426f.webp",t1="/src/c792cd.webp",i1="/src/0fcdf9.webp",n1="/src/7816ff.webp";var r1=Object.defineProperty,s1=Object.getOwnPropertyDescriptor,fd=(s,e,t,i)=>{for(var n=i>1?void 0:i?s1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&r1(e,t,n),n};let Ra=class extends Cn(Q){constructor(){super(...arguments),this.lang=m.language}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}firstUpdated(){document.querySelectorAll("[data-parallax-layers]").forEach(s=>{let e=ne.timeline({scrollTrigger:{trigger:s,start:"0% 0%",end:"100% 0%",scrub:0}});[{layer:"1",y:"5rem"},{layer:"2",y:"10rem",opacity:0,filter:"blur(1rem)"}].forEach((i,n)=>{e.to(s.querySelectorAll(`[data-parallax-layer="${i.layer}"]`),{y:i.y,ease:"none",opacity:i.opacity,filter:i.filter},n===0?void 0:"<")})})}render(){return U`
      <section class="hero" data-parallax-layers>
        <div
          class="container flex flex-col justify-between min-h-[calc(100svh-4rem)] pt-16"
        >
          <div class="flex flex-col items-center my-auto pt-12 pb-16 gap-16 md:gap-12" data-parallax-layer="1">

            <div class="flex items-center gap-4 -mb-2 md:-mb-3">
              <img
                src="${nc}"
                srcset="${nc} 64w, ${Qm} 96w, ${e1} 128w"
                sizes="64px"
                height="64"
                width="64"
                fetchpriority="high"
                decoding="async"
                loading="eager"
                alt="${m.t("about.picDescription")}"
                class="rounded-full size-14 2xl:size-16 bg-zinc-900 outline-4 outline-zinc-950"
              />
              <div class="grid gap-2 leading-none">
                <span class="2xl:text-[1.25rem] text-white">
                  Paulo Melo Jr.
                </span>
                <span class="flex items-center gap-2 font-medium text-[.875rem] 2xl:text-[1rem]">
                  <span class="relative flex size-3">
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400"
                    ></span>
                    <span
                      class="relative m-0.5 inline-flex size-2 rounded-full bg-green-300"
                    ></span>
                  </span>
                  ${m.t("about.status")}
                </span>
              </div>
            </div>
            
            <div class="flex flex-col gap-2 text-center">
              <h1 class="text-pretty text-zinc-50 font-semibold text-[2.5rem] leading-none tracking-[-0.06em] xl:text-[2.75rem] 2xl:text-[4rem] uppercase">
                ${m.t("about.content.title")}
              </h1>
              <h2 class="text-balance leading-none text-[1rem] 2xl:text-[1.5rem] text-zinc-200 tracking-[-0.02em] xl:font-light">
                ${m.t("about.content.subtitle")}
              </h2>
            </div>

            <div class="flex relative gap-2">
              <a
                href="${m.t("about.cta.url")}"
                class="cta-button cta-button--accent flex items-center gap-3 self-center px-6 outline-8 outline-zinc-950"
              >
                ${m.t("about.cta.label")}
              </a>
              <a
                href="#section-praxis"
                class="hidden lg:flex rounded-full size-[44px] transition-color duration-200 bg-zinc-800 hover:bg-zinc-700 justify-center items-center outline-4 outline-zinc-950"
                title="Scroll page"
              >
                <img
                  src="${Zm}"
                  class="transition-opacity duration-500 -rotate-90"
                />
              </a>
            </div>

          </div>
          <div
            class="hidden px-5 xl:grid-cols-2 xl:gap-24 gap-6"
            data-parallax-layer="1"
          >
            <div class="xl:py-24 2xl:py-32">
              <p class="text-default">
                <mark
                  class="inline-block bg-transparent text-zinc-50"
                  >${m.t("about.content.h1")}</mark
                >${m.t("about.content.p1")}
              </p>
            </div>
            <div class="xl:py-24 2xl:py-32">
              <p class="text-default">
                <mark
                  class="inline-block bg-transparent text-zinc-50"
                  >${m.t("about.content.h2")}</mark
                >${m.t("about.content.p2")}
              </p>
            </div>
          </div>
          <div
            class="container grid grid-cols-12 items-end ps-5 sm:ps-0"
            data-parallax-layer="2"
          >
            <div class="hidden sm:hidden xl:block col-span-12 xl:col-span-3">
              <img
                class="aspect-square w-full object-cover mask-b-from-50% sm:mask-b-from-0% sm:mask-r-from-50% object-top rounded-tl-lg"
                src="${t1}"
                height="384"
                width="384"
              />
              </div>
            <div class="hidden sm:block col-span-8 xl:col-span-6">
              <img
                class="w-full max-h-[432px] object-cover object-top mask-b-from-75% rounded-t-lg"
                src="${i1}"
                height="432"
                width="768"
              />
            </div>
            <div class="hidden sm:block col-span-4 xl:col-span-3">
              <img
                class="aspect-square w-full object-cover mask-b-from-50% mask-l-from-0% object-top rounded-tr-lg"
                src="${n1}"
                height="384"
                width="384"
              />
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};fd([R({type:String})],Ra.prototype,"lang",2);Ra=fd([oe("hero-section")],Ra);var o1=Object.defineProperty,a1=Object.getOwnPropertyDescriptor,pd=(s,e,t,i)=>{for(var n=i>1?void 0:i?a1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&o1(e,t,n),n};let ja=class extends Cn(Q){constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language,this.updateJourneyContent()}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}updateJourneyContent(){const s=document.querySelector("#job");if(!s)return;s.innerHTML="";const e=this.getJourneyItems(),t=Object.values(e),i=this.createJourneyHeader();s.insertAdjacentHTML("beforeend",i),t.forEach(n=>{const r=this.createJourneyItemHTML(n);s.insertAdjacentHTML("beforeend",r)})}getJourneyItems(){return{1:{hide:!1,custom:"text-brand-400",start:"2019",end:"2025",title:m.t("journey.t4"),description:m.t("journey.p4"),more:void 0},2:{hide:!1,start:"2018",end:"2019",title:m.t("journey.t3"),description:m.t("journey.p3"),more:m.t("journey.m3"),custom:void 0},3:{hide:!1,start:"2016",end:"2018",title:m.t("journey.t2"),description:m.t("journey.p2"),more:m.t("journey.m2"),custom:void 0},4:{hide:!1,start:"2015",end:"2016",title:m.t("journey.t1"),description:m.t("journey.p1"),custom:void 0,more:void 0}}}createJourneyHeader(){return`
      <h2
        class="text-pretty text-[2.5rem] leading-none tracking-[-0.04em] xl:text-[3rem] 2xl:text-[4rem] text-zinc-50 px-5 xl:px-20 2xl:px-32"
      >
        ${m.t("journey.t0")}
      </h2>
      <div class="flex items-center lg:justify-end order-1 lg:order-0 px-5 xl:px-20 2xl:px-32">
        <a
          href="/Paulo Melo Jr. - Currículo.pdf"
          target="_blank"
          class="cta-button cta-button--accent flex items-center gap-4 py-3 pe-4 ps-6 text-[1rem] leading-none"
        >
          ${this.lang==="en"?"Download my resume":"Baixar meu currículo"}
          <svg
            alt="${this.lang==="en"?"Download":"Baixar"}"
            width="20px"
            height="20px"
            stroke-width="2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13V22M12 22L15.5 18.5M12 22L8.5 18.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    `}createJourneyItemHTML(s){const e=s.hide?"hidden xl:flex":"flex",t=s.custom?` class="${s.custom}"`:"";return`
      <div class="${e} job relative flex-col gap-4 px-5 xl:px-20 2xl:px-32">
        <span class="font-mono text-[.75rem] leading-none font-medium tracking-[.05em] text-zinc-500 mb-2">
          ${s.start} &bull; <span${t}>${s.end}</span>
        </span>
        <h2 class="text-[1.5rem] 2xl:text-[2rem] xl:leading-none text-zinc-50">
          ${s.title}
        </h2>
        <p class="text-sm/loose lg:text-base/loose text-pretty">
          ${s.description}
        </p>
      </div>
    `}handleJourneyItems(){ne.matchMedia().add("(min-width: 1024px)",()=>{ne.from("#job > *",{scrollTrigger:{trigger:".job",start:"0% 100%",toggleActions:"play none none reverse"},opacity:0,y:"10rem",stagger:.1})})}firstUpdated(s){const e=this.querySelector("#job"),t=this.getJourneyItems(),i=Object.values(t),n=this.createJourneyHeader();e.insertAdjacentHTML("beforeend",n),i.forEach(r=>{const o=this.createJourneyItemHTML(r);e.insertAdjacentHTML("beforeend",o)}),this.handleJourneyItems()}render(){return U`
      <section id="section-journey">
        <div
          class="lg:py-16 xl:py-24 2xl:py-32"
        >
          <div
            id="job"
            class="container grid gap-y-16 overflow-hidden py-16 lg:grid-cols-2 xl:gap-y-32"
          ></div>
        </div>
      </section>
    `}createRenderRoot(){return this}};pd([R({type:String})],ja.prototype,"lang",2);ja=pd([oe("journey-section")],ja);function l1(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Jo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var rc;function u1(){return rc||(rc=1,(function(s){(function(){var e={}.hasOwnProperty;function t(){for(var r="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(r=n(r,i(a)))}return r}function i(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var o="";for(var a in r)e.call(r,a)&&r[a]&&(o=n(o,a));return o}function n(r,o){return o?r?r+" "+o:r+o:r}s.exports?(t.default=t,s.exports=t):window.classNames=t})()})(Jo)),Jo.exports}var c1=u1();const ts=l1(c1);var h1=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,So=(s,e,t,i)=>{for(var n=i>1?void 0:i?d1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&h1(e,t,n),n};let is=class extends Q{constructor(){super(...arguments),this.star="",this.items="",this.reverse=!1}render(){const e=this.items.split(",").map(n=>n.trim()).map(n=>U`<li>${n}</li>
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
          </li>`),t=this.reverse,i=ts("marquee",{reverse:t});return U`
      <div class=${i}>
        <ul class="marquee__content">
          ${e}
        </ul>
        <ul class="marquee__content">
          ${e}
        </ul>
      </div>
    `}createRenderRoot(){return this}};So([R({type:String})],is.prototype,"star",2);So([R({type:String})],is.prototype,"items",2);So([R({type:Boolean})],is.prototype,"reverse",2);is=So([oe("marquee-element")],is);var f1=Object.defineProperty,p1=Object.getOwnPropertyDescriptor,$o=(s,e,t,i)=>{for(var n=i>1?void 0:i?p1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&f1(e,t,n),n};let ns=class extends Q{constructor(){super(...arguments),this.classNames="",this.href="",this.label=""}firstUpdated(){const s=document.querySelectorAll(".menu-item");s.forEach(i=>{const n=i.firstElementChild;ne.set(n,{clipPath:"inset(0% 0% 100% 0%)"})});function e(){const i=this.firstElementChild;ne.to(i,{duration:.2,clipPath:"inset(0% 0% 0% 0%)"})}function t(){if(this.classList.contains("active"))return;const i=this.firstElementChild;i&&ne.to(i,{duration:.2,clipPath:"inset(100% 0 0 0)",onComplete:()=>{ne.set(i,{clipPath:"inset(0% 0% 100%)"})}})}s.forEach(i=>{i.addEventListener("mouseenter",e),i.addEventListener("mouseleave",t)})}render(){const s=ts("menu-item font-semibold relative tracking-[0.04em] flex justify-center h-8 px-4 text-zinc-400 text-[.75rem] uppercase items-center"),e=ts("absolute flex items-center justify-center inset-0 text-zinc-950");return U`<a
      class="${s} ${this.classNames}"
      href="${this.href}"
      data-label="${this.label}"
    >
      <div aria-hidden="true" class="${e}">${this.label}</div>
      ${this.label}
    </a>`}createRenderRoot(){return this}};$o([R({type:String})],ns.prototype,"classNames",2);$o([R({type:String})],ns.prototype,"href",2);$o([R({type:String})],ns.prototype,"label",2);ns=$o([oe("menu-item")],ns);var g1=Object.defineProperty,m1=Object.getOwnPropertyDescriptor,$l=(s,e,t,i)=>{for(var n=i>1?void 0:i?m1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&g1(e,t,n),n};let fo=class extends Cn(Q){constructor(){super(),this.more=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}toggleMore(){this.more=!this.more}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}changeLang(){const e=m.language==="en"?"pt":"en";m.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){window.addEventListener("scroll",()=>{this.more=!1}),ne.to("header",{scrollTrigger:{trigger:"header",start:"bottom top",toggleActions:"play none none reverse",scrub:2},outline:"1px solid hsla(0 0 100% / 0.075)",padding:"0 0 0 0"})}render(){return U`
      <header
        class="fixed inset-x-0 z-40 w-full bg-linear-to-t from-zinc-950 backdrop-blur to-zinc-950/80 lg:fixed py-2"
      >
        <div class="container lg:grid flex items-center lg:grid-cols-3">
          <nav class="lg:hidden">
            <ul id="anchors" class="flex bg-zinc-950 overflow-hidden fixed inset-0 flex-col justify-center w-dvw *:transition-all duration-500 ${this.more?"h-dvh":"h-0 *:opacity-0"}">
              <li>
                <span class="text-[2rem] tracking-[-0.04em] h-20 px-5 flex items-center text-zinc-500">
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
              <div class="absolute bottom-4 right-4">
                <lang-button
                  @click=${()=>this.changeLang()}
                  label=${this.lang==="pt"?"PT · BR":"EN · US"}
                  title="${this.lang==="en"?"Mudar para português":"Change to english"}"
                ></lang-button>
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
            class="menu-toggle lg:hidden ms-auto me-4 ${this.more?"menu-toggle--close":""}"
            @click=${()=>this.toggleMore()}
          >
            <span class="uppercase text-[.75rem] font-semibold">
              Menu
            </span>
          </button>
          <nav>
            <ul id="anchors" class="hidden lg:flex justify-end">
              <li class="flex-1">
                <menu-item
                  href="#section-praxis"
                  label="${m.t("menu.praxis")}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#section-journey"
                  label="${m.t("menu.journey")}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#section-connect"
                  label="${m.t("menu.connect")}"
                ></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden lg:flex items-center justify-end gap-2">
            <a class="cta-button py-1.5 px-4 uppercase font-semibold text-[.75rem] tracking-[0.05em]" href="${m.t("links.projects.url")}">
              ${m.t("featured.button")}
            </a>
            <div class="flex h-12 items-center justify-center lg:h-12">
              <lang-button
                @click=${()=>this.changeLang()}
                label=${this.lang==="pt"?"PT · BR":"EN · US"}
                title="${this.lang==="en"?"Mudar para português":"Change to english"}"
              ></lang-button>
            </div>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};$l([R({type:Boolean})],fo.prototype,"more",2);$l([R({type:String})],fo.prototype,"lang",2);fo=$l([oe("menu-container")],fo);var _1=Object.defineProperty,v1=Object.getOwnPropertyDescriptor,hs=(s,e,t,i)=>{for(var n=i>1?void 0:i?v1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&_1(e,t,n),n};let rr=class extends Q{constructor(){super(...arguments),this.classNames="",this.icon="",this.label="",this.title=""}render(){const e=ts("relative text-[.75rem] tracking-[0.05em] flex transition-all ps-3 pe-1 xl:pe-1.5 gap-2 h-8 xl:h-6 hover:h-8 rounded-full leading-8.5 xl:items-center hover:bg-zinc-100 hover:text-zinc-950 text-zinc-300 font-semibold stroke-zinc-300 hover:stroke-zinc-950 hover:fill-zinc-100",this.classNames);return U`
      <button class="${e}" title="${this.title}">
        ${this.label}
        <svg
          width="20px"
          height="20px"
          stroke-width="1.75"
          viewBox="0 0 24 24"
          class="h-8 "
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
    `}createRenderRoot(){return this}};hs([R({type:String})],rr.prototype,"classNames",2);hs([R({type:String})],rr.prototype,"icon",2);hs([R({type:String})],rr.prototype,"label",2);hs([R({type:String})],rr.prototype,"title",2);rr=hs([oe("lang-button")],rr);var b1=Object.defineProperty,y1=Object.getOwnPropertyDescriptor,Eo=(s,e,t,i)=>{for(var n=i>1?void 0:i?y1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&b1(e,t,n),n};let rs=class extends Q{constructor(){super(...arguments),this.href="",this.label="",this.hover=""}render(){const s=ts("flex px-3 gap-2 text-zinc-50 tracking-[0.05em] text-[.75rem] uppercase items-center h-8 leading-12.5 rounded-full whitespace-nowrap font-medium");return U`<button class="menu-item group/item ${s} relative">
      <div
        class="${s} pointer-events-none absolute inset-0 justify-center"
        aria-hidden="true"
      >
        <span class="font-semibold text-zinc-950">
          ${this.hover?this.hover:this.label}
        </span>
      </div>
      ${this.label}
    </button>`}createRenderRoot(){return this}};Eo([R({type:String})],rs.prototype,"href",2);Eo([R({type:String})],rs.prototype,"label",2);Eo([R({type:String})],rs.prototype,"hover",2);rs=Eo([oe("mail-button")],rs);var x1=Object.defineProperty,D1=Object.getOwnPropertyDescriptor,ko=(s,e,t,i)=>{for(var n=i>1?void 0:i?D1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&x1(e,t,n),n};let ss=class extends Q{constructor(){super(...arguments),this.href="",this.label="",this.index=""}render(){return U`<div class="border-b border-zinc-800 xl:border-0">
      <a class="text-[2rem] tracking-[-0.04em] menu-item h-20 xl:h-16 px-5 flex items-center text-zinc-100 relative" rel="noopener noreferrer" href="${this.href}">
        ${this.label}
        <div class="absolute flex items-center px-5 inset-0 xl:rounded-full text-zinc-950">
          ${this.label}
        </div>
        <span class="absolute mix-blend-difference opacity-50 right-6 bottom-6 font-mono text-[.75rem] tracking-[0.05em]">
          ${this.index}
        </span>
      </a>
    </div>`}createRenderRoot(){return this}};ko([R({type:String})],ss.prototype,"href",2);ko([R({type:String})],ss.prototype,"label",2);ko([R({type:String})],ss.prototype,"index",2);ss=ko([oe("mobile-item")],ss);var w1=Object.defineProperty,C1=Object.getOwnPropertyDescriptor,gd=(s,e,t,i)=>{for(var n=i>1?void 0:i?C1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&w1(e,t,n),n};let Ia=class extends Cn(Q){constructor(){super(...arguments),this.lang=m.language}connectedCallback(){super.connectedCallback(),m.on("languageChanged",()=>{this.lang=m.language})}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",()=>{this.lang=m.language})}firstUpdated(){this.renderRoot.querySelectorAll(".praxis svg").forEach(t=>{const i=t.querySelectorAll("path");ne.from(i,{scrollTrigger:{trigger:t,start:"0% 75%",toggleActions:"play none none reverse"},stagger:.12,opacity:0,fill:(this.dark,"var(--color-brand-400)"),drawSVG:!1})}),this.renderRoot.querySelectorAll(".praxis").forEach(t=>{ne.from(t.children,{scrollTrigger:{trigger:t.children,start:"0% 75%",toggleActions:"play none none reverse"},duration:.8,stagger:.1,x:"5rem",filter:"blur(.5rem)",opacity:i=>i===0?1:0})})}render(){return U`
      <section class="bg-zinc-900 relative">
        <div id="section-praxis" class="absolute w-full h-px -top-12"></div>
        <div
          class="relative mx-5 h-px bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900"
        ></div>
        <div class="container">
          <marquee-element
            star="fill-brand-400"
            items="Design Engineering, Product Design, UX & UI"
          ></marquee-element>
          <div
            class="grid gap-16 overflow-x-hidden px-5 lg:px-0 py-16 *:flex *:items-start *:justify-center *:gap-5 lg:grid-cols-2 xl:gap-24 xl:py-0 xl:*:flex-row *:xl:gap-12 *:xl:py-24 *:2xl:py-32"
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
                  class="flex items-center text-[1.5rem] leading-16 text-zinc-50 xl:text-[2rem] xl:leading-24 2xl:text-[2.5rem] 2xl:leading-24"
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
                  class="flex items-center text-[1.5rem] leading-16 text-zinc-50 xl:text-[2rem] xl:leading-24 2xl:text-[2.5rem] 2xl:leading-24"
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
            items="Design Engineering, Product Design, UX & UI"
          ></marquee-element>
          <div
            class="relative mx-5 h-px bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900"
          ></div>
        </div>
      </section>
    `}createRenderRoot(){return this}};gd([R({type:String})],Ia.prototype,"lang",2);Ia=gd([oe("praxis-section")],Ia);const S1=`<style>\r
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
</svg>`;var $1=Object.defineProperty,E1=Object.getOwnPropertyDescriptor,md=(s,e,t,i)=>{for(var n=i>1?void 0:i?E1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&$1(e,t,n),n};let Na=class extends Q{constructor(){super(...arguments),this.minMs=500,this.mountedAt=0,this.finishTimeoutId=null,this.fallbackTimeoutId=null,this.isExiting=!1,this.onDomContentLoaded=()=>this.finishAfterMinTime(),this.onWindowLoad=()=>this.finishAfterMinTime()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-busy","true"),this.setAttribute("aria-live","polite"),this.mountedAt=performance.now(),document.readyState==="complete"||document.readyState==="interactive"?this.finishAfterMinTime():(document.addEventListener("DOMContentLoaded",this.onDomContentLoaded,{once:!0}),window.addEventListener("load",this.onWindowLoad,{once:!0}),this.fallbackTimeoutId=window.setTimeout(()=>this.finishAfterMinTime(),8e3))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("DOMContentLoaded",this.onDomContentLoaded),window.removeEventListener("load",this.onWindowLoad),this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null)}finishAfterMinTime(){const s=performance.now()-this.mountedAt,e=Math.max(0,this.minMs-s);this.finishTimeoutId=window.setTimeout(()=>this.exit(),e)}exit(){if(this.isExiting)return;this.isExiting=!0,this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null);const s=this.querySelector("#loading")||this,e=document.querySelector("main");ne.set(e,{y:"5rem",opacity:0}),ne.to(s,{opacity:0,scale:2,filter:"blur(1rem)",duration:.4,force3D:!0,onComplete:()=>{this.dispatchEvent(new CustomEvent("mobile-loading:done",{bubbles:!0,composed:!0})),ne.to(e,{y:0,opacity:1,duration:1,onComplete:()=>{e.removeAttribute("style")}}),this.remove()}})}render(){return U` <div
      id="loading"
      class="fixed top-0 z-100 h-svh w-full bg-zinc-950"
    >
      <div
        class="container flex h-full items-center justify-center gap-4 flex-col"
      >
        <div class="saturate-50">
          ${ci(`${S1}`)}
        </div>
        <span
          class="hidden animate-pulse text-[.75rem] uppercase leading-10 tracking-[.05em] text-zinc-50"
        >
          ${this.lang==="pt"?U`Carregando...`:U`Loading...`}
        </span>
      </div>
    </div>`}createRenderRoot(){return this}};md([R({type:Number,attribute:"min-ms"})],Na.prototype,"minMs",2);Na=md([oe("page-loading")],Na);function Fs(s){let e=document.querySelector(`meta[name="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("name",s),document.head.appendChild(e)),e}function sc(s){let e=document.querySelector(`meta[property="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("property",s),document.head.appendChild(e)),e}function k1(s){const e=s.replace(/\/+$/,"")||"/";return e==="/"||e.endsWith("/index.html")?"home":e.endsWith("/projects")||e.endsWith("/projects.html")?"projects":e.endsWith("/last-project")||e.endsWith("/last-project.html")?"lastProject":e.endsWith("/404")||e.endsWith("/404.html")?"404":"home"}function oc(s){const e=m.t.bind(m),t=e("seo.common.description"),i=e("seo.common.keywords");switch(s){case"projects":return{title:e("seo.projects.title"),description:t,keywords:[i,e("seo.projects.keywords")].filter(Boolean).join(", ")};case"lastProject":return{title:e("seo.lastProject.title"),description:t,keywords:[i,e("seo.lastProject.keywords")].filter(Boolean).join(", ")};case"404":return{title:e("seo.404.title"),description:t,keywords:i};case"home":default:return{title:e("seo.home.title"),description:t,keywords:i}}}function ac(s){document.title=s.title,Fs("description").setAttribute("content",s.description),Fs("keywords").setAttribute("content",s.keywords),sc("og:title").setAttribute("content",s.title),sc("og:description").setAttribute("content",s.description),Fs("twitter:title").setAttribute("content",s.title),Fs("twitter:description").setAttribute("content",s.description)}function lc(){const s=k1(window.location.pathname);ac(oc(s)),m.on("languageChanged",()=>{ac(oc(s))})}typeof window<"u"&&document.readyState!=="loading"?lc():typeof window<"u"&&document.addEventListener("DOMContentLoaded",()=>lc(),{once:!0});const P1="/src/4f3f0c.png";var T1=Object.defineProperty,O1=Object.getOwnPropertyDescriptor,_d=(s,e,t,i)=>{for(var n=i>1?void 0:i?O1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&T1(e,t,n),n};let Ba=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}handleCoverImage(){const s=document.querySelector("#cover-image");s&&ne.matchMedia().add("(min-width: 1024px)",()=>{ne.to(s,{scrollTrigger:{trigger:"#about",start:"top 20%",end:"bottom 20%",scrub:2},y:"-5rem",ease:"none"})})}firstUpdated(){this.handleCoverImage()}render(){return U` <div
      id="about"
      class="relative grid lg:grid-cols-2 overflow-hidden lg:rounded-4xl bg-linear-to-b from-zinc-900 to-zinc-950"
    >
      <div
        class="absolute h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:block"
      ></div>
      <div class="flex flex-col lg:p-16 lg:pe-0 p-6">
        <p class="text-default mb-4 text-balance lg:-mt-2">
          ${ci(m.t("twyne.about.p2"))}
        </p>
        <p class="text-default text-pretty">
          ${ci(m.t("twyne.about.p1"))}
        </p>
        <ul class="hidden lg:block mt-auto text-[.75rem] leading-none *:py-4 lg:text-[1rem] *:border-b *:border-zinc-800">
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
            <span>
              ${m.t("twyne.about.details.contributions")}
            </span>
            <span class="inline-flex align-baseline gap-2 text-right text-zinc-50">
              <span>
                ${m.t("twyne.about.details.contribution1")}
              </span>
              <span class="text-zinc-500">/</span>
              <span class="hidden xl:flex">
                ${m.t("twyne.about.details.contribution2")}
              </span>
              <span class="hidden xl:flex text-zinc-500">/</span>
              <span>
                ${m.t("twyne.about.details.contribution3")}
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="relative flex aspect-square lg:aspect-[3/4] xl:aspect-square overflow-hidden">
        <img
          src="${P1}"
          id="cover-image"
          class="absolute lg:left-16 lg:top-16 left-6 top-0 lg:max-w-none flex-none lg:rounded-ss-lg rounded-ss-md border-t border-zinc-800 shadow-[0px_24px_24px_0px_black]"
        />
        <progressive-blur
          class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-zinc-950 to-transparent"
        ></progressive-blur>
      </div>
    </div>`}createRenderRoot(){return this}};_d([R({type:String})],Ba.prototype,"lang",2);Ba=_d([oe("twyne-about")],Ba);var A1=Object.defineProperty,F1=Object.getOwnPropertyDescriptor,vd=(s,e,t,i)=>{for(var n=i>1?void 0:i?F1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&A1(e,t,n),n};ne.registerPlugin(Z);let Ha=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.cleanupAnimation()}setupSignatureAnimation(){if(!this.signElement)return;const s=this.signElement.querySelectorAll("path");this.animation=ne.from(s,{scrollTrigger:{trigger:this.signElement,start:"100% 100%",toggleActions:"play none none reverse"},duration:.75,stagger:.75,drawSVG:!1})}cleanupAnimation(){this.animation&&(this.animation.kill(),this.animation=void 0)}firstUpdated(s){this.signElement=this.querySelector("#sign"),this.setupSignatureAnimation()}renderSignature(){return U`
      <svg
        id="sign"
        class="rotate-21 stroke-zinc-600 mt-2"
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
    `}renderContent(){return U`
      <h2
        class="mb-4 mt-16 font-semibold uppercase leading-none tracking-[0.05em] text-[0.75rem] text-zinc-500"
      >
        ${m.t("twyne.conclusion.t1")}
      </h2>
      <p class="text-default text-zinc-50">${m.t("twyne.conclusion.p1")}</p>
      <p class="text-default text-zinc-50">${m.t("twyne.conclusion.p2")}</p>
      <p class="text-default text-zinc-50">${m.t("twyne.conclusion.p3")}</p>
    `}render(){return U`
      <section id="conclusion">
        <div class="container lg:grid grid-cols-4 pt-24 lg:pt-32 px-6">
          <div
            class="relative col-span-2 col-start-2 flex aspect-square flex-col items-center justify-center gap-8 text-balance text-center text-[1.25rem] leading-loose text-zinc-300 2xl:text-[1.5rem]"
          >
            ${this.renderContent()} ${this.renderSignature()}
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};vd([R({type:String})],Ha.prototype,"lang",2);Ha=vd([oe("twyne-conclusion")],Ha);var L1=Object.defineProperty,M1=Object.getOwnPropertyDescriptor,bd=(s,e,t,i)=>{for(var n=i>1?void 0:i?M1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&L1(e,t,n),n};let Ua=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return U`
      <section id="goal" class="container py-24 px-6 lg:p-24 2xl:p-32">
        <div class="lg:grid grid-cols-4 justify-center">
          <div
            class="col-span-2 col-start-2 flex xl:aspect-square flex-col justify-center"
          >
            <h2
              class="mb-10 text-[2rem] lg:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-50"
            >
              ${m.t("twyne.goal.t1")}
            </h2>
            <p
              class="mb-8 text-default leading-loose"
            >
              ${ci(m.t("twyne.goal.p1"))}
            </p>
            <p class=" text-default leading-loose">
              ${m.t("twyne.goal.p2")}
            </p>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};bd([R({type:String})],Ua.prototype,"lang",2);Ua=bd([oe("twyne-goal")],Ua);const z1="/src/3d9806.svg";var R1=Object.defineProperty,j1=Object.getOwnPropertyDescriptor,yd=(s,e,t,i)=>{for(var n=i>1?void 0:i?j1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&R1(e,t,n),n};let Va=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){return U`
      <div class="flex flex-col items-start xl:gap-2 xl:px-14 px-5 py-16 pb-14 xl:pb-16">
        <div class="flex items-center gap-6">
          <img src="${z1}" class="h-14 border-r border-zinc-700 pr-6" />
          <h1
            class="xl:h-14 leading-none tracking-[-0.04em] text-[3rem] 2xl:text-[4rem] text-zinc-50"
          >
            ${m.t("twyne.t2")}
          </h1>
        </div>
      </div>
    `}createRenderRoot(){return this}};yd([R({type:String})],Va.prototype,"lang",2);Va=yd([oe("twyne-header")],Va);var I1=Object.defineProperty,N1=Object.getOwnPropertyDescriptor,xd=(s,e,t,i)=>{for(var n=i>1?void 0:i?N1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&I1(e,t,n),n};let qa=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}render(){const s=m.t("twyne.impact.l1",{returnObjects:!0});return U`
      <div id="impact" class="container grid gap-10 px-6 pt-24 xl:pt-32 xl:px-24 2xl:px-32">
        <h2
          class="text-[2rem] lg:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-50"
        >
          ${ci(m.t("twyne.impact.t1"))}
        </h2>
        <div class="grid gap-px lg:grid-cols-3 items-center rounded-4xl overflow-hidden">
          <div class="grid gap-2 text-center bg-zinc-900 py-12">
            <h3 class="text-[2rem] font-semibold leading-none text-zinc-50 tracking-[-0.04em]">
              ${m.t("twyne.numbers.t1")}
            </h3>
            <p class="text-pretty text-base/none">
              ${m.t("twyne.numbers.p1")}
            </p>
          </div>
          <div class="grid gap-2 text-center bg-zinc-900 py-12">
            <h3 class="text-[2rem] font-semibold leading-none text-zinc-50 tracking-[-0.04em]">
              ${m.t("twyne.numbers.t2")}
            </h3>
            <p class="text-pretty text-base/none">
              ${m.t("twyne.numbers.p2")}
            </p>
          </div>
          <div class="grid gap-2 text-center bg-zinc-900 py-12">
            <h3 class="text-[2rem] font-semibold leading-none text-zinc-50 tracking-[-0.04em]">
              ${m.t("twyne.numbers.t3")}
            </h3>
            <p class="text-pretty text-base/none">
              ${m.t("twyne.numbers.p3")}
            </p>
          </div>
        </div>
        <ul
          class="text-sm leading-loose lg:text-base 2xl:text-[1.25rem] text-zinc-50 grid lg:grid-cols-2 gap-4 lg:gap-0"
        >
          ${s.map(e=>U`<li
                class="flex items-baseline gap-2 lg:gap-4 before:text-zinc-700 before:content-['✦'] text-balance"
              >
                ${e}
              </li>`)}
        </ul>
      </div>
    `}createRenderRoot(){return this}};xd([R({type:String})],qa.prototype,"lang",2);qa=xd([oe("twyne-impact")],qa);const B1="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2013L2%206.99999M2%206.99999L8%201M2%206.99999L14%206.99999'%20stroke='white'%20stroke-width='2'/%3e%3c/svg%3e";var H1=Object.defineProperty,U1=Object.getOwnPropertyDescriptor,El=(s,e,t,i)=>{for(var n=i>1?void 0:i?U1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&H1(e,t,n),n};let po=class extends Cn(Q){constructor(){super(),this.more=!1,this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language};const s=localStorage.getItem("lang");s&&(this.lang=s,m.changeLanguage(s))}toggleMore(){this.more=!this.more}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}changeLang(){const e=m.language==="en"?"pt":"en";m.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){window.addEventListener("scroll",()=>{this.more=!1}),ne.to("header",{scrollTrigger:{trigger:"header",start:"bottom top",toggleActions:"play none none reverse",scrub:2},outline:"1px solid hsla(0 0 100% / 0.05)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return U`
      <header
        class="fixed inset-x-0 z-40 w-full bg-linear-to-t from-zinc-950 backdrop-blur to-zinc-950/80 backdrop-saturate-200 lg:fixed lg:block py-2"
      >
        <div class="container lg:grid flex items-center lg:grid-cols-4">
          <nav class="lg:hidden">
            <ul id="anchors" class="flex bg-zinc-950 overflow-hidden fixed inset-0 flex-col justify-center w-dvw *:transition-all duration-500 ${this.more?"h-dvh":"h-0 *:opacity-0"}">
              <li>
                <span class="text-[2rem] tracking-[-0.04em] h-20 px-5 flex items-center text-zinc-500">
                  Menu
                </span>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="Home"
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
              <div class="absolute bottom-4 right-4">
                <lang-button
                  @click=${()=>this.changeLang()}
                  label=${this.lang==="pt"?"PT · BR":"EN · US"}
                  title="${this.lang==="en"?"Mudar para português":"Change to english"}"
                ></lang-button>
              </div>
            </ul>
          </nav>
          <div class="flex items-center">
          <button
              @click=${()=>this.getPreviousPage()}
              class="flex size-10 p-3 cursor-pointer transition-background duration-500 items-center justify-center opacity-50 hover:opacity-100 hover:bg-zinc-800 rounded-full"
              title="Go back to homepage"
            >
              <img
                src="${B1}"
                class="transition-opacity duration-500"
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
            class="menu-toggle lg:hidden ms-auto me-4 ${this.more?"menu-toggle--close":""}"
            @click=${()=>this.toggleMore()}
          >
            <span class="uppercase text-[.75rem] font-semibold">
              Menu
            </span>
          </button>
          <nav class="col-span-2">
            <ul id="anchors" class="hidden lg:flex justify-center px-0">
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
          <div class="hidden lg:flex items-center justify-end gap-2">
            <a class="cta-button py-1.5 px-4 uppercase font-semibold text-[.75rem] tracking-[0.05em]" href="${m.t("links.projects.url")}">
              ${m.t("featured.button")}
            </a>
            <div class="flex h-12 items-center justify-center lg:h-12">
              <lang-button
                @click=${()=>this.changeLang()}
                label=${this.lang==="pt"?"PT · BR":"EN · US"}
                title="${this.lang==="en"?"Mudar para português":"Change to english"}"
              ></lang-button>
            </div>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};El([R({type:Boolean})],po.prototype,"more",2);El([R({type:String})],po.prototype,"lang",2);po=El([oe("twyne-menu")],po);const Dd="/src/0f79a9.png",wd="/src/e2bfcc.png",Cd="/src/4cb65f.png",Sd="/src/04ff88.png",$d="/src/df5b53.png",go="/src/ef0222.png";var V1=Object.defineProperty,q1=Object.getOwnPropertyDescriptor,Ed=(s,e,t,i)=>{for(var n=i>1?void 0:i?q1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&V1(e,t,n),n};let Wa=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){document.querySelectorAll("[data-parallax-screens]").forEach(e=>{let t=ne.timeline({scrollTrigger:{trigger:"#mobile-images",start:"0% 100%",end:"50% 100%",scrub:2}});[{layer:"1",y:"50%",opacity:0},{layer:"2",y:"40%",opacity:0},{layer:"3",y:"30%",opacity:0},{layer:"4",y:"20%",opacity:0},{layer:"5",y:"10%",opacity:0}].forEach((n,r)=>{t.from(e.querySelectorAll(`[data-parallax-screens="${n.layer}"]`),{y:n.y,ease:"none",opacity:n.opacity},r===0?void 0:"<")})})}render(){return U`
      <section id="mobile" class="mt-24 py-24 xl:mt-32 xl:py-32">
        <h2
          class="mb-16 xl:mb-32 text-center text-[2.5rem] leading-normal tracking-[-.02em] 2xl:text-[3rem] text-zinc-50"
        >
          ${ci(m.t("twyne.mobile.t1"))}
        </h2>
        <div
          id="mobile-images"
          class="mx-auto grid max-w-[1920px] grid-cols-4 xl:grid-cols-5 items-center justify-center gap-4 px-4"
          data-parallax-screens
        >
          <img src="${wd}" data-parallax-screens="1" class="mobile-screen hidden xl:block" />
          <img src="${Dd}" data-parallax-screens="2" class="mobile-screen" />
          <img src="${Cd}" data-parallax-screens="3" class="mobile-screen" />
          <img src="${Sd}" data-parallax-screens="4" class="mobile-screen" />
          <img src="${$d}" data-parallax-screens="5" class="mobile-screen" />
        </div>
      </section>
      <style>
        .mobile-screen {
          mask-image: url(${go});
          mask-mode: luminance;
          mask-size: cover;
          -webkit-mask-image: url(${go});
          -webkit-mask-mode: luminance;
          -webkit-mask-size: cover;
        }
      </style>
    `}createRenderRoot(){return this}};Ed([R({type:String})],Wa.prototype,"lang",2);Wa=Ed([oe("twyne-mobile")],Wa);var W1=Object.defineProperty,Y1=Object.getOwnPropertyDescriptor,kl=(s,e,t,i)=>{for(var n=i>1?void 0:i?Y1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&W1(e,t,n),n};let mo=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.currentIndex=0,this.abortController=new AbortController,this.handleLanguageChange=()=>{this.lang=m.language},this.handlePrev=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateMobScreens())},this.handleNext=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateMobScreens())}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.abortController.abort()}firstUpdated(){this.initCarousel()}updated(s){s.has("lang")&&this.updateComplete.then(()=>{this.initCarousel()})}initCarousel(){if(this.abortController.abort(),this.abortController=new AbortController,this.screens=this.querySelectorAll(".mob-carrossel img"),!this.screens.length)return;this.currentIndex=Math.min(this.currentIndex,this.screens.length-1),this.updateMobScreens=()=>{this.screens.forEach((i,n)=>{const r=n===this.currentIndex;ne.to(i,{opacity:r?1:0,y:r?0:100,duration:.4,delay:r?.2:0,ease:"power2.out",onStart:()=>{r&&i.classList.remove("invisible")},onComplete:()=>{r||i.classList.add("invisible")}})})},this.updateMobScreens();const s=this.querySelector("button[data-prev]"),e=this.querySelector("button[data-next]"),{signal:t}=this.abortController;s&&e&&(s.addEventListener("click",this.handlePrev,{signal:t}),e.addEventListener("click",this.handleNext,{signal:t}))}render(){var s;return U`
      <section class="relative px-2 mt-24 xl:mt-32">
        <div class="container">
          <h2
            class="mb-10 text-[2rem] text-center xl:text-[2.5rem] leading-normal tracking-[-.02em] 2xl:text-[3rem] text-zinc-50"
          >
            ${ci(m.t("twyne.mobile.t1"))}
          </h2>

          <style>
            .mobile-screen {
              mask-image: url(${go});
              mask-mode: luminance;
              mask-size: cover;
              -webkit-mask-image: url(${go});
              -webkit-mask-mode: luminance;
              -webkit-mask-size: cover;
            }
          </style>

          <div class="mob-carrossel relative overflow-hidden">
            <img src="${Dd}" class="relative mobile-screen" />
            <img
              src="${wd}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
            <img
              src="${Cd}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
            <img
              src="${Sd}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
            <img
              src="${$d}"
              class="invisible absolute left-0 top-0 mobile-screen"
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
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-50 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em]"
                >
                  ${this.currentIndex+1} / ${((s=this.screens)==null?void 0:s.length)??5}
                </span>

                <button
                  data-next
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-50 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};kl([R({type:String})],mo.prototype,"lang",2);kl([R({type:Number})],mo.prototype,"currentIndex",2);mo=kl([oe("mobile-screens")],mo);const X1="/src/6ab55e.png",G1="/src/b0e17e.png",K1="/src/96ef6f.png",J1="/src/2bf8a7.png",Z1="/src/2eab02.png",Q1="/src/a54df0.png",e_="/src/b3d826.png",t_="/src/adef9e.png",i_="/src/120066.png",n_="/src/908f2c.png",r_="/src/20a18e.png";var s_=Object.defineProperty,o_=Object.getOwnPropertyDescriptor,kd=(s,e,t,i)=>{for(var n=i>1?void 0:i?o_(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&s_(e,t,n),n};ne.registerPlugin(Z);let Ya=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.componentAnimations=[],this.handleLanguageChange=()=>{this.lang=m.language}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.cleanupAnimations()}setupComponentAnimations(){this.renderRoot.querySelectorAll("img").forEach(e=>{const t=ne.from(e,{scrollTrigger:{trigger:e,start:"0% 100%",end:"0% 50%",toggleActions:"play none none reverse"},scale:1,opacity:0,filter:"blur(1rem)",duration:1,y:"20%"});this.componentAnimations.push(t)})}cleanupAnimations(){this.componentAnimations.forEach(s=>{s&&s.kill()}),this.componentAnimations=[]}firstUpdated(){this.setupComponentAnimations()}renderProposalList(){const s=m.t("twyne.proposal.l1",{returnObjects:!0});return U`
      <ul
        class="leading-loose 2xl:text-[1.25rem] text-zinc-50 flex flex-col gap-4 lg:gap-0"
      >
        ${s.map(e=>U`
            <li
              class="flex items-baseline gap-2 lg:gap-4 before:text-zinc-700 before:content-['✦'] text-balance"
            >
              ${e}
            </li>
          `)}
      </ul>
    `}renderComponentGrid(){return U`
      <div class="flex flex-col gap-2 lg:gap-4 items-center">
        <div class="flex gap-4">
          <div class="hidden lg:flex flex-col gap-4">
            <img
              src="${Z1}"
              height="425"
              width="216"
              loading="lazy"
              alt="Component B1"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
            <img
              src="${e_}"
              height="216"
              width="216"
              loading="lazy"
              alt="Component B3"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
          </div>
          <img
            src="${Q1}"
            height="660"
            width="560"
            loading="lazy"
            alt="Component B2"
            class="w-[calc(560px*0.8)] xl:w-auto"
          />
        </div>
        <div class="hidden lg:flex gap-4">
          <img
            src="${r_}"
            height="218"
            width="280"
            loading="lazy"
            alt="Component B7"
            class="w-[calc(280px*0.8)] xl:w-auto"
          />
          <img
            src="${i_}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B5"
            class="w-[calc(240px*0.8)] xl:w-auto"
            />
          <img
            src="${n_}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B6"
            class="w-[calc(240px*0.8)] xl:w-auto"
          />
        </div>
        <img
          src="${t_}"
          height="448"
          width="792"
          loading="lazy"
          alt="Component B4"
          class="w-[calc(792px*0.8)] xl:w-auto"
        />
      </div>
    `}renderComponentColumn(){return U`
      <div class="grid gap-2 lg:gap-4">
        <img
          src="${X1}"
          height="264"
          width="480"
          loading="lazy"
          alt="Component A1"
          class="w-[calc(480px*0.8)] xl:w-auto"
          />
        <img
          src="${G1}"
          height="248"
          width="480"
          loading="lazy"
          alt="Component A2"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${K1}"
          height="492"
          width="480"
          loading="lazy"
          alt="Component A3"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${J1}"
          height="296"
          width="480"
          loading="lazy"
          alt="Component A4"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
      </div>
    `}renderComponentsSection(){return U`
      <div
        id="components"
        class="relative px-2 lg:p-0 flex flex-col lg:flex-row lg:min-h-[1088px] xl:min-h-[1348px] items-center justify-center gap-2 lg:gap-4"
      >
        <style>
          #components img {
            border-radius: 0.25rem;
          }
        </style>
        ${this.renderComponentGrid()} ${this.renderComponentColumn()}
      </div>
    `}render(){return U`
      <section id="proposal">
        <div
          class="container hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:block"
        ></div>
        <div class="container rounded-t-4xl px-6 pb-24 lg:py-24 2xl:p-32">
          <h2
            class="mb-10 text-[2rem] lg:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-50"
          >
            ${m.t("twyne.proposal.t1")}
          </h2>
          <div class="flex flex-col gap-8 lg:grid grid-cols-2">
            ${this.renderProposalList()}
            <p class="text-default text-pretty">
              ${m.t("twyne.proposal.p1")}
            </p>
          </div>
        </div>
        ${this.renderComponentsSection()}
        <twyne-impact></twyne-impact>
      </section>
    `}createRenderRoot(){return this}};kd([R({type:String})],Ya.prototype,"lang",2);Ya=kd([oe("twyne-proposal")],Ya);const a_="/src/2f4591.png",l_="/src/367502.png",u_="/src/014eec.png";var c_=Object.defineProperty,h_=Object.getOwnPropertyDescriptor,Pl=(s,e,t,i)=>{for(var n=i>1?void 0:i?h_(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&c_(e,t,n),n};let _o=class extends Q{constructor(){super(...arguments),this.lang=m.language,this.currentIndex=0,this.abortController=new AbortController,this.handleLanguageChange=()=>{this.lang=m.language},this.handlePrev=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateScreens())},this.handleNext=()=>{var s;(s=this.screens)!=null&&s.length&&(this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateScreens())}}connectedCallback(){super.connectedCallback(),m.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),m.off("languageChanged",this.handleLanguageChange),this.abortController.abort()}firstUpdated(){this.initCarousel()}updated(s){s.has("lang")&&this.updateComplete.then(()=>{this.initCarousel()})}initCarousel(){if(this.abortController.abort(),this.abortController=new AbortController,this.screens=this.querySelectorAll(".carrossel img"),!this.screens.length)return;this.currentIndex=Math.min(this.currentIndex,this.screens.length-1),this.updateScreens=()=>{this.screens.forEach((i,n)=>{const r=n===this.currentIndex;ne.to(i,{opacity:r?1:0,y:r?0:100,duration:.4,delay:r?.2:0,ease:"power2.out",onStart:()=>{r&&i.classList.remove("invisible")},onComplete:()=>{r||i.classList.add("invisible")}})})},this.updateScreens();const s=this.querySelector("button[data-prev]"),e=this.querySelector("button[data-next]"),{signal:t}=this.abortController;s&&e&&(s.addEventListener("click",this.handlePrev,{signal:t}),e.addEventListener("click",this.handleNext,{signal:t}))}render(){var s;return U`
      <section class="relative mt-24 xl:mt-32">
        <div class="container">
          <div class="carrossel relative overflow-hidden">
            <img
              src="${a_}"
              width="1728"
              height="976"
              class="relative rounded-[.5rem]"
            />
            <img
              src="${l_}"
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
            />
            <img
              src="${u_}"
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
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
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-50 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em]"
                >
                  ${this.currentIndex+1} / ${((s=this.screens)==null?void 0:s.length)??3}
                </span>

                <button
                  data-next
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-50 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};Pl([R({type:String})],_o.prototype,"lang",2);Pl([R({type:Number})],_o.prototype,"currentIndex",2);_o=Pl([oe("twyne-screens")],_o);

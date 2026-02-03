(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const qt=globalThis,Ts=qt.ShadowRoot&&(qt.ShadyCSS===void 0||qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Es=Symbol(),Pi=new WeakMap;let qa=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==Es)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ts&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Pi.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Pi.set(n,t))}return t}toString(){return this.cssText}};const Oo=e=>new qa(typeof e=="string"?e:e+"",void 0,Es),Do=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,i,a)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new qa(n,e,Es)},Bo=(e,t)=>{if(Ts)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),i=qt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,e.appendChild(s)}},Ni=Ts?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Oo(n)})(e):e;const{is:Fo,defineProperty:Uo,getOwnPropertyDescriptor:Ko,getOwnPropertyNames:Ho,getOwnPropertySymbols:zo,getPrototypeOf:jo}=Object,nn=globalThis,Oi=nn.trustedTypes,qo=Oi?Oi.emptyScript:"",Vo=nn.reactiveElementPolyfillSupport,yt=(e,t)=>e,Gt={toAttribute(e,t){switch(t){case Boolean:e=e?qo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Cs=(e,t)=>!Fo(e,t),Di={attribute:!0,type:String,converter:Gt,reflect:!1,useDefault:!1,hasChanged:Cs};Symbol.metadata??=Symbol("metadata"),nn.litPropertyMetadata??=new WeakMap;let Qe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Di){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,n);i!==void 0&&Uo(this.prototype,t,i)}}static getPropertyDescriptor(t,n,s){const{get:i,set:a}=Ko(this.prototype,t)??{get(){return this[n]},set(r){this[n]=r}};return{get:i,set(r){const l=i?.call(this);a?.call(this,r),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Di}static _$Ei(){if(this.hasOwnProperty(yt("elementProperties")))return;const t=jo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yt("properties"))){const n=this.properties,s=[...Ho(n),...zo(n)];for(const i of s)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,i]of n)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const i=this._$Eu(n,s);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)n.unshift(Ni(i))}else t!==void 0&&n.push(Ni(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bo(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Gt).toAttribute(n,s.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,n){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),r=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Gt;this._$Em=i;const l=r.fromAttribute(n,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,n,s,i=!1,a){if(t!==void 0){const r=this.constructor;if(i===!1&&(a=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??Cs)(a,n)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:i,wrapped:a},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??n??this[t]),a!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s){const{wrapped:r}=a,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Qe.elementStyles=[],Qe.shadowRootOptions={mode:"open"},Qe[yt("elementProperties")]=new Map,Qe[yt("finalized")]=new Map,Vo?.({ReactiveElement:Qe}),(nn.reactiveElementVersions??=[]).push("2.1.2");const Is=globalThis,Bi=e=>e,Qt=Is.trustedTypes,Fi=Qt?Qt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Va="$lit$",xe=`lit$${Math.random().toFixed(9).slice(2)}$`,Wa="?"+xe,Wo=`<${Wa}>`,Ne=document,wt=()=>Ne.createComment(""),xt=e=>e===null||typeof e!="object"&&typeof e!="function",Ms=Array.isArray,Go=e=>Ms(e)||typeof e?.[Symbol.iterator]=="function",On=`[ 	
\f\r]`,ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ui=/-->/g,Ki=/>/g,Ce=RegExp(`>|${On}(?:([^\\s"'>=/]+)(${On}*=${On}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hi=/'/g,zi=/"/g,Ga=/^(?:script|style|textarea|title)$/i,Qo=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),o=Qo(1),ke=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ji=new WeakMap,Re=Ne.createTreeWalker(Ne,129);function Qa(e,t){if(!Ms(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fi!==void 0?Fi.createHTML(t):t}const Yo=(e,t)=>{const n=e.length-1,s=[];let i,a=t===2?"<svg>":t===3?"<math>":"",r=ot;for(let l=0;l<n;l++){const c=e[l];let p,d,u=-1,h=0;for(;h<c.length&&(r.lastIndex=h,d=r.exec(c),d!==null);)h=r.lastIndex,r===ot?d[1]==="!--"?r=Ui:d[1]!==void 0?r=Ki:d[2]!==void 0?(Ga.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=Ce):d[3]!==void 0&&(r=Ce):r===Ce?d[0]===">"?(r=i??ot,u=-1):d[1]===void 0?u=-2:(u=r.lastIndex-d[2].length,p=d[1],r=d[3]===void 0?Ce:d[3]==='"'?zi:Hi):r===zi||r===Hi?r=Ce:r===Ui||r===Ki?r=ot:(r=Ce,i=void 0);const g=r===Ce&&e[l+1].startsWith("/>")?" ":"";a+=r===ot?c+Wo:u>=0?(s.push(p),c.slice(0,u)+Va+c.slice(u)+xe+g):c+xe+(u===-2?l:g)}return[Qa(e,a+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let ts=class Ya{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let a=0,r=0;const l=t.length-1,c=this.parts,[p,d]=Yo(t,n);if(this.el=Ya.createElement(p,s),Re.currentNode=this.el.content,n===2||n===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Re.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Va)){const h=d[r++],g=i.getAttribute(u).split(xe),$=/([.?@])?(.*)/.exec(h);c.push({type:1,index:a,name:$[2],strings:g,ctor:$[1]==="."?Xo:$[1]==="?"?Jo:$[1]==="@"?el:an}),i.removeAttribute(u)}else u.startsWith(xe)&&(c.push({type:6,index:a}),i.removeAttribute(u));if(Ga.test(i.tagName)){const u=i.textContent.split(xe),h=u.length-1;if(h>0){i.textContent=Qt?Qt.emptyScript:"";for(let g=0;g<h;g++)i.append(u[g],wt()),Re.nextNode(),c.push({type:2,index:++a});i.append(u[h],wt())}}}else if(i.nodeType===8)if(i.data===Wa)c.push({type:2,index:a});else{let u=-1;for(;(u=i.data.indexOf(xe,u+1))!==-1;)c.push({type:7,index:a}),u+=xe.length-1}a++}}static createElement(t,n){const s=Ne.createElement("template");return s.innerHTML=t,s}};function Xe(e,t,n=e,s){if(t===ke)return t;let i=s!==void 0?n._$Co?.[s]:n._$Cl;const a=xt(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=i:n._$Cl=i),i!==void 0&&(t=Xe(e,i._$AS(e,t.values),i,s)),t}class Zo{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,i=(t?.creationScope??Ne).importNode(n,!0);Re.currentNode=i;let a=Re.nextNode(),r=0,l=0,c=s[0];for(;c!==void 0;){if(r===c.index){let p;c.type===2?p=new sn(a,a.nextSibling,this,t):c.type===1?p=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(p=new tl(a,this,t)),this._$AV.push(p),c=s[++l]}r!==c?.index&&(a=Re.nextNode(),r++)}return Re.currentNode=Ne,i}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let sn=class Za{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Xe(this,t,n),xt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==ke&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Go(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&xt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ne.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ts.createElement(Qa(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(n);else{const a=new Zo(i,this),r=a.u(this.options);a.p(n),this.T(r),this._$AH=a}}_$AC(t){let n=ji.get(t.strings);return n===void 0&&ji.set(t.strings,n=new ts(t)),n}k(t){Ms(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const a of t)i===n.length?n.push(s=new Za(this.O(wt()),this.O(wt()),this,this.options)):s=n[i],s._$AI(a),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=Bi(t).nextSibling;Bi(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class an{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,i,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(t,n=this,s,i){const a=this.strings;let r=!1;if(a===void 0)t=Xe(this,t,n,0),r=!xt(t)||t!==this._$AH&&t!==ke,r&&(this._$AH=t);else{const l=t;let c,p;for(t=a[0],c=0;c<a.length-1;c++)p=Xe(this,l[s+c],n,c),p===ke&&(p=this._$AH[c]),r||=!xt(p)||p!==this._$AH[c],p===v?t=v:t!==v&&(t+=(p??"")+a[c+1]),this._$AH[c]=p}r&&!i&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let Xo=class extends an{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},Jo=class extends an{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},el=class extends an{constructor(t,n,s,i,a){super(t,n,s,i,a),this.type=5}_$AI(t,n=this){if((t=Xe(this,t,n,0)??v)===ke)return;const s=this._$AH,i=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==v&&(s===v||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},tl=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Xe(this,t)}};const nl={I:sn},sl=Is.litHtmlPolyfillSupport;sl?.(ts,sn),(Is.litHtmlVersions??=[]).push("3.3.2");const il=(e,t,n)=>{const s=n?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const a=n?.renderBefore??null;s._$litPart$=i=new sn(t.insertBefore(wt(),a),a,void 0,n??{})}return i._$AI(e),i};const Ls=globalThis;let Ze=class extends Qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=il(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ke}};Ze._$litElement$=!0,Ze.finalized=!0,Ls.litElementHydrateSupport?.({LitElement:Ze});const al=Ls.litElementPolyfillSupport;al?.({LitElement:Ze});(Ls.litElementVersions??=[]).push("4.2.2");const Xa=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const rl={attribute:!0,type:String,converter:Gt,reflect:!1,hasChanged:Cs},ol=(e=rl,t,n)=>{const{kind:s,metadata:i}=n;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),s==="accessor"){const{name:r}=n;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,c,e,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,e,l),l}}}if(s==="setter"){const{name:r}=n;return function(l){const c=this[r];t.call(this,l),this.requestUpdate(r,c,e,!0,l)}}throw Error("Unsupported decorator location: "+s)};function rn(e){return(t,n)=>typeof n=="object"?ol(e,t,n):((s,i,a)=>{const r=i.hasOwnProperty(a);return i.constructor.createProperty(a,s),r?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,n)}function b(e){return rn({...e,state:!0,attribute:!1})}const ll=50,cl=200,dl="Assistant";function qi(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function ns(e){const t=qi(e?.name,ll)??dl,n=qi(e?.avatar??void 0,cl)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}function ul(){return ns(typeof window>"u"?{}:{name:window.__CLAWDBOT_ASSISTANT_NAME__,avatar:window.__CLAWDBOT_ASSISTANT_AVATAR__})}const Ja="clawdbot.control.settings.v1";function pl(){const t={gatewayUrl:`${location.protocol==="https:"?"wss":"ws"}://${location.host}`,token:"",sessionKey:"main",lastActiveSessionKey:"main",theme:"system",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(Ja);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?s.gatewayUrl.trim():t.gatewayUrl,token:typeof s.token=="string"?s.token:t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed}}catch{return t}}function fl(e){localStorage.setItem(Ja,JSON.stringify(e))}function er(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),i=n.slice(2).join(":");return!s||!i?null:{agentId:s,rest:i}}const hl=[{label:"聊天",tabs:["chat"]},{label:"控制",tabs:["overview","channels","instances","sessions","cron"]},{label:"代理",tabs:["skills","nodes"]},{label:"设置",tabs:["config","debug","logs"]}],tr={overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",cron:"/cron",skills:"/skills",nodes:"/nodes",chat:"/chat",config:"/config",debug:"/debug",logs:"/logs"},nr=new Map(Object.entries(tr).map(([e,t])=>[t,e]));function on(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function At(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function Rs(e,t=""){const n=on(t),s=tr[e];return n?`${n}${s}`:s}function sr(e,t=""){const n=on(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let i=At(s).toLowerCase();return i.endsWith("/index.html")&&(i="/"),i==="/"?"chat":nr.get(i)??null}function gl(e){let t=At(e);if(t.endsWith("/index.html")&&(t=At(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const i=`/${n.slice(s).join("/")}`.toLowerCase();if(nr.has(i)){const a=n.slice(0,s);return a.length?`/${a.join("/")}`:""}}return`/${n.join("/")}`}function vl(e){switch(e){case"chat":return"messageSquare";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"cron":return"loader";case"skills":return"zap";case"nodes":return"monitor";case"config":return"settings";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function ss(e){switch(e){case"overview":return"概览";case"channels":return"通道";case"instances":return"实例";case"sessions":return"会话";case"cron":return"定时任务";case"skills":return"技能";case"nodes":return"节点";case"chat":return"聊天";case"config":return"配置";case"debug":return"调试";case"logs":return"日志";default:return"控制"}}function ml(e){switch(e){case"overview":return"网关状态、入口点和快速健康读取。";case"channels":return"管理通道和设置。";case"instances":return"来自已连接客户端和节点的存在信标。";case"sessions":return"检查活跃会话并调整每个会话的默认值。";case"cron":return"安排唤醒和定期代理运行。";case"skills":return"管理技能可用性和API密钥注入。";case"nodes":return"配对设备、功能和命令暴露。";case"chat":return"直接网关聊天会话，用于快速干预。";case"config":return"安全编辑 ~/.clawdbot/clawdbot.json。";case"debug":return"网关快照、事件和手动RPC调用。";case"logs":return"网关文件日志的实时跟踪。";default:return""}}const W={messageSquare:o`<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,barChart:o`<svg viewBox="0 0 24 24"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`,link:o`<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,radio:o`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>`,fileText:o`<svg viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,zap:o`<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,monitor:o`<svg viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,settings:o`<svg viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,bug:o`<svg viewBox="0 0 24 24"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>`,scrollText:o`<svg viewBox="0 0 24 24"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M15 8h-5"/><path d="M15 12h-5"/></svg>`,folder:o`<svg viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,menu:o`<svg viewBox="0 0 24 24"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,x:o`<svg viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,check:o`<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>`,copy:o`<svg viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,search:o`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,brain:o`<svg viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>`,book:o`<svg viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`,loader:o`<svg viewBox="0 0 24 24"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>`,wrench:o`<svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,fileCode:o`<svg viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>`,edit:o`<svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,penLine:o`<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,paperclip:o`<svg viewBox="0 0 24 24"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,globe:o`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,image:o`<svg viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,smartphone:o`<svg viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,plug:o`<svg viewBox="0 0 24 24"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>`,circle:o`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,puzzle:o`<svg viewBox="0 0 24 24"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"/></svg>`},yl=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,Dt=/<\s*\/?\s*final\b[^>]*>/gi,Vi=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^>]*>/gi;function bl(e,t){return e.trimStart()}function $l(e,t){if(!e||!yl.test(e))return e;let n=e;Dt.test(n)?(Dt.lastIndex=0,n=n.replace(Dt,"")):Dt.lastIndex=0,Vi.lastIndex=0;let s="",i=0,a=!1;for(const r of n.matchAll(Vi)){const l=r.index??0,c=r[1]==="/";a?c&&(a=!1):(s+=n.slice(i,l),c||(a=!0)),i=l+r[0].length}return s+=n.slice(i),bl(s)}function kt(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function O(e){if(!e&&e!==0)return"n/a";const t=Date.now()-e;if(t<0)return"just now";const n=Math.round(t/1e3);if(n<60)return`${n}s ago`;const s=Math.round(n/60);if(s<60)return`${s}m ago`;const i=Math.round(s/60);return i<48?`${i}h ago`:`${Math.round(i/24)}d ago`}function ir(e){if(!e&&e!==0)return"n/a";if(e<1e3)return`${e}ms`;const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);if(n<60)return`${n}m`;const s=Math.round(n/60);return s<48?`${s}h`:`${Math.round(s/24)}d`}function is(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function as(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function ar(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function Yt(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Dn(e){return $l(e)}const wl=/^\[([^\]]+)\]\s*/,xl=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"],Bn=new WeakMap,Fn=new WeakMap;function Al(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:xl.some(t=>e.startsWith(`${t} `))}function Un(e){const t=e.match(wl);if(!t)return e;const n=t[1]??"";return Al(n)?e.slice(t[0].length):e}function rs(e){const t=e,n=typeof t.role=="string"?t.role:"",s=t.content;if(typeof s=="string")return n==="assistant"?Dn(s):Un(s);if(Array.isArray(s)){const i=s.map(a=>{const r=a;return r.type==="text"&&typeof r.text=="string"?r.text:null}).filter(a=>typeof a=="string");if(i.length>0){const a=i.join(`
`);return n==="assistant"?Dn(a):Un(a)}}return typeof t.text=="string"?n==="assistant"?Dn(t.text):Un(t.text):null}function rr(e){if(!e||typeof e!="object")return rs(e);const t=e;if(Bn.has(t))return Bn.get(t)??null;const n=rs(e);return Bn.set(t,n),n}function Wi(e){const n=e.content,s=[];if(Array.isArray(n))for(const l of n){const c=l;if(c.type==="thinking"&&typeof c.thinking=="string"){const p=c.thinking.trim();p&&s.push(p)}}if(s.length>0)return s.join(`
`);const i=Sl(e);if(!i)return null;const r=[...i.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(l=>(l[1]??"").trim()).filter(Boolean);return r.length>0?r.join(`
`):null}function kl(e){if(!e||typeof e!="object")return Wi(e);const t=e;if(Fn.has(t))return Fn.get(t)??null;const n=Wi(e);return Fn.set(t,n),n}function Sl(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(i=>{const a=i;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(i=>typeof i=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function _l(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}function Gi(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function Tl(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function Ps(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),Gi(t)}return Gi(Tl())}async function Je(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function El(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}async function Cl(e,t,n){if(!e.client||!e.connected)return!1;const s=t.trim(),i=n&&n.length>0;if(!s&&!i)return!1;const a=Date.now(),r=[];if(s&&r.push({type:"text",text:s}),i)for(const p of n)r.push({type:"image",source:{type:"base64",media_type:p.mimeType,data:p.dataUrl}});e.chatMessages=[...e.chatMessages,{role:"user",content:r,timestamp:a}],e.chatSending=!0,e.lastError=null;const l=Ps();e.chatRunId=l,e.chatStream="",e.chatStreamStartedAt=a;const c=i?n.map(p=>{const d=El(p.dataUrl);return d?{type:"image",mimeType:d.mimeType,content:d.content}:null}).filter(p=>p!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:s,deliver:!1,idempotencyKey:l,attachments:c}),!0}catch(p){const d=String(p);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=d,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+d}],timestamp:Date.now()}],!1}finally{e.chatSending=!1}}async function Il(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function Ml(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=rs(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else t.state==="final"||t.state==="aborted"?(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null):t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}async function st(e){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const t={includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown},n=Yt(e.sessionsFilterActive,0),s=Yt(e.sessionsFilterLimit,0);n>0&&(t.activeMinutes=n),s>0&&(t.limit=s);const i=await e.client.request("sessions.list",t);i&&(e.sessionsResult=i)}catch(t){e.sessionsError=String(t)}finally{e.sessionsLoading=!1}}}async function Ll(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await st(e)}catch(i){e.sessionsError=String(i)}}async function Rl(e,t){if(!(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))){e.sessionsLoading=!0,e.sessionsError=null;try{await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),await st(e)}catch(s){e.sessionsError=String(s)}finally{e.sessionsLoading=!1}}}const Qi=50,Pl=80,Nl=12e4;function Ol(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(i=>{if(!i||typeof i!="object")return null;const a=i;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(i=>!!i);return s.length===0?null:s.join(`
`)}function Yi(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Ol(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=ar(n,Nl);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function Dl(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function Bl(e){if(e.toolStreamOrder.length<=Qi)return;const t=e.toolStreamOrder.length-Qi,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function Fl(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function os(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Fl(e)}function Ul(e,t=!1){if(t){os(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>os(e),Pl))}function Ns(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],os(e)}const Kl=5e3;function Hl(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},Kl))}function zl(e,t){if(!t)return;if(t.stream==="compaction"){Hl(e,t);return}if(t.stream!=="tool")return;const n=typeof t.sessionKey=="string"?t.sessionKey:void 0;if(n&&n!==e.sessionKey||!n&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId)return;const s=t.data??{},i=typeof s.toolCallId=="string"?s.toolCallId:"";if(!i)return;const a=typeof s.name=="string"?s.name:"tool",r=typeof s.phase=="string"?s.phase:"",l=r==="start"?s.args:void 0,c=r==="update"?Yi(s.partialResult):r==="result"?Yi(s.result):void 0,p=Date.now();let d=e.toolStreamById.get(i);d?(d.name=a,l!==void 0&&(d.args=l),c!==void 0&&(d.output=c),d.updatedAt=p):(d={toolCallId:i,runId:t.runId,sessionKey:n,name:a,args:l,output:c,startedAt:typeof t.ts=="number"?t.ts:p,updatedAt:p,message:{}},e.toolStreamById.set(i,d),e.toolStreamOrder.push(i)),d.message=Dl(d),Bl(e),Ul(e,r==="result")}function ln(e,t=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const n=()=>{const s=e.querySelector(".chat-thread");if(s){const i=getComputedStyle(s).overflowY;if(i==="auto"||i==="scroll"||s.scrollHeight-s.clientHeight>1)return s}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const s=n();if(!s)return;const i=s.scrollHeight-s.scrollTop-s.clientHeight;if(!(t||e.chatUserNearBottom||i<200))return;t&&(e.chatHasAutoScrolled=!0),s.scrollTop=s.scrollHeight,e.chatUserNearBottom=!0;const r=t?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const l=n();if(!l)return;const c=l.scrollHeight-l.scrollTop-l.clientHeight;(t||e.chatUserNearBottom||c<200)&&(l.scrollTop=l.scrollHeight,e.chatUserNearBottom=!0)},r)})})}function or(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function jl(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<200}function ql(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function Vl(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0}function Wl(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),i=document.createElement("a"),a=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");i.href=s,i.download=`clawdbot-logs-${t}-${a}.log`,i.click(),URL.revokeObjectURL(s)}function Gl(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}function Oe(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function et(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function lr(e,t,n){if(t.length===0)return;let s=e;for(let a=0;a<t.length-1;a+=1){const r=t[a],l=t[a+1];if(typeof r=="number"){if(!Array.isArray(s))return;s[r]==null&&(s[r]=typeof l=="number"?[]:{}),s=s[r]}else{if(typeof s!="object"||s==null)return;const c=s;c[r]==null&&(c[r]=typeof l=="number"?[]:{}),s=c[r]}}const i=t[t.length-1];if(typeof i=="number"){Array.isArray(s)&&(s[i]=n);return}typeof s=="object"&&s!=null&&(s[i]=n)}function cr(e,t){if(t.length===0)return;let n=e;for(let i=0;i<t.length-1;i+=1){const a=t[i];if(typeof a=="number"){if(!Array.isArray(n))return;n=n[a]}else{if(typeof n!="object"||n==null)return;n=n[a]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function ye(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Yl(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function dr(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Ql(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Ql(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Yl(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?et(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=et(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=Oe(t.config??{}),e.configFormOriginal=Oe(t.config??{}),e.configRawOriginal=n)}async function ls(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?et(e.configForm):e.configRaw,n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await ye(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Zl(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?et(e.configForm):e.configRaw,n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await ye(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function Xl(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function Bt(e,t,n){const s=Oe(e.configForm??e.configSnapshot?.config??{});lr(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=et(s))}function Zi(e,t){const n=Oe(e.configForm??e.configSnapshot?.config??{});cr(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=et(n))}async function Tt(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function cn(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function Jl(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",atMs:n}}if(e.scheduleKind==="every"){const n=Yt(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const s=e.everyUnit;return{kind:"every",everyMs:n*(s==="minutes"?6e4:s==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function ec(e){if(e.payloadKind==="systemEvent"){const i=e.payloadText.trim();if(!i)throw new Error("System event text required.");return{kind:"systemEvent",text:i}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t};e.deliver&&(n.deliver=!0),e.channel&&(n.channel=e.channel),e.to.trim()&&(n.to=e.to.trim());const s=Yt(e.timeoutSeconds,0);return s>0&&(n.timeoutSeconds=s),n}async function tc(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=Jl(e.cronForm),n=ec(e.cronForm),s=e.cronForm.agentId.trim(),i={name:e.cronForm.name.trim(),description:e.cronForm.description.trim()||void 0,agentId:s||void 0,enabled:e.cronForm.enabled,schedule:t,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:n,isolation:e.cronForm.postToMainPrefix.trim()&&e.cronForm.sessionTarget==="isolated"?{postToMainPrefix:e.cronForm.postToMainPrefix.trim()}:void 0};if(!i.name)throw new Error("Name required.");await e.client.request("cron.add",i),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await cn(e),await Tt(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function nc(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await cn(e),await Tt(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function sc(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await ur(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function ic(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await cn(e),await Tt(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function ur(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}async function re(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function ac(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function rc(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function oc(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}async function dn(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,i]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const a=s;e.debugModels=Array.isArray(a?.models)?a?.models:[],e.debugHeartbeat=i}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function lc(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const cc=2e3,dc=new Set(["trace","debug","info","warn","error","fatal"]);function uc(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function pc(e){if(typeof e!="string")return null;const t=e.toLowerCase();return dc.has(t)?t:null}function fc(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,i=pc(n?.logLevelName??n?.level),a=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,r=uc(a);let l=null;r&&(typeof r.subsystem=="string"?l=r.subsystem:typeof r.module=="string"&&(l=r.module)),!l&&a&&a.length<120&&(l=a);let c=null;return typeof t[1]=="string"?c=t[1]:!r&&typeof t[0]=="string"?c=t[0]:typeof t.message=="string"&&(c=t.message),{raw:e,time:s,level:i,subsystem:l,message:c??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Os(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),a=(Array.isArray(s.lines)?s.lines.filter(l=>typeof l=="string"):[]).map(fc),r=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=r?a:[...e.logsEntries,...a].slice(-cc),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}const pr={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:V,n:Vt,Gx:Xi,Gy:Ji,a:Kn,d:Hn,h:hc}=pr,De=32,Ds=64,gc=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},H=(e="")=>{const t=new Error(e);throw gc(t,H),t},vc=e=>typeof e=="bigint",mc=e=>typeof e=="string",yc=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",Se=(e,t,n="")=>{const s=yc(e),i=e?.length,a=t!==void 0;if(!s||a&&i!==t){const r=n&&`"${n}" `,l=a?` of length ${t}`:"",c=s?`length=${i}`:`type=${typeof e}`;H(r+"expected Uint8Array"+l+", got "+c)}return e},un=e=>new Uint8Array(e),fr=e=>Uint8Array.from(e),hr=(e,t)=>e.toString(16).padStart(t,"0"),gr=e=>Array.from(Se(e)).map(t=>hr(t,2)).join(""),ve={_0:48,_9:57,A:65,F:70,a:97,f:102},ea=e=>{if(e>=ve._0&&e<=ve._9)return e-ve._0;if(e>=ve.A&&e<=ve.F)return e-(ve.A-10);if(e>=ve.a&&e<=ve.f)return e-(ve.a-10)},vr=e=>{const t="hex invalid";if(!mc(e))return H(t);const n=e.length,s=n/2;if(n%2)return H(t);const i=un(s);for(let a=0,r=0;a<s;a++,r+=2){const l=ea(e.charCodeAt(r)),c=ea(e.charCodeAt(r+1));if(l===void 0||c===void 0)return H(t);i[a]=l*16+c}return i},mr=()=>globalThis?.crypto,bc=()=>mr()?.subtle??H("crypto.subtle must be defined, consider polyfill"),St=(...e)=>{const t=un(e.reduce((s,i)=>s+Se(i).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},$c=(e=De)=>mr().getRandomValues(un(e)),Zt=BigInt,Le=(e,t,n,s="bad number: out of range")=>vc(e)&&t<=e&&e<n?e:H(s),k=(e,t=V)=>{const n=e%t;return n>=0n?n:t+n},yr=e=>k(e,Vt),wc=(e,t)=>{(e===0n||t<=0n)&&H("no inverse n="+e+" mod="+t);let n=k(e,t),s=t,i=0n,a=1n;for(;n!==0n;){const r=s/n,l=s%n,c=i-a*r;s=n,n=l,i=a,a=c}return s===1n?k(i,t):H("no inverse")},xc=e=>{const t=xr[e];return typeof t!="function"&&H("hashes."+e+" not set"),t},zn=e=>e instanceof ee?e:H("Point expected"),cs=2n**256n;class ee{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,i){const a=cs;this.X=Le(t,0n,a),this.Y=Le(n,0n,a),this.Z=Le(s,1n,a),this.T=Le(i,0n,a),Object.freeze(this)}static CURVE(){return pr}static fromAffine(t){return new ee(t.x,t.y,1n,k(t.x*t.y))}static fromBytes(t,n=!1){const s=Hn,i=fr(Se(t,De)),a=t[31];i[31]=a&-129;const r=$r(i);Le(r,0n,n?cs:V);const c=k(r*r),p=k(c-1n),d=k(s*c+1n);let{isValid:u,value:h}=kc(p,d);u||H("bad point: y not sqrt");const g=(h&1n)===1n,$=(a&128)!==0;return!n&&h===0n&&$&&H("bad point: x==0, isLastByteOdd"),$!==g&&(h=k(-h)),new ee(h,r,1n,k(h*r))}static fromHex(t,n){return ee.fromBytes(vr(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=Kn,n=Hn,s=this;if(s.is0())return H("bad point: ZERO");const{X:i,Y:a,Z:r,T:l}=s,c=k(i*i),p=k(a*a),d=k(r*r),u=k(d*d),h=k(c*t),g=k(d*k(h+p)),$=k(u+k(n*k(c*p)));if(g!==$)return H("bad point: equation left != right (1)");const w=k(i*a),A=k(r*l);return w!==A?H("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:i}=this,{X:a,Y:r,Z:l}=zn(t),c=k(n*l),p=k(a*i),d=k(s*l),u=k(r*i);return c===p&&d===u}is0(){return this.equals(Ye)}negate(){return new ee(k(-this.X),this.Y,this.Z,k(-this.T))}double(){const{X:t,Y:n,Z:s}=this,i=Kn,a=k(t*t),r=k(n*n),l=k(2n*k(s*s)),c=k(i*a),p=t+n,d=k(k(p*p)-a-r),u=c+r,h=u-l,g=c-r,$=k(d*h),w=k(u*g),A=k(d*g),_=k(h*u);return new ee($,w,_,A)}add(t){const{X:n,Y:s,Z:i,T:a}=this,{X:r,Y:l,Z:c,T:p}=zn(t),d=Kn,u=Hn,h=k(n*r),g=k(s*l),$=k(a*u*p),w=k(i*c),A=k((n+s)*(r+l)-h-g),_=k(w-$),M=k(w+$),P=k(g-d*h),I=k(A*_),E=k(M*P),C=k(A*P),pe=k(_*M);return new ee(I,E,pe,C)}subtract(t){return this.add(zn(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return Ye;if(Le(t,1n,Vt),t===1n)return this;if(this.equals(Be))return Nc(t).p;let s=Ye,i=Be;for(let a=this;t>0n;a=a.double(),t>>=1n)t&1n?s=s.add(a):n&&(i=i.add(a));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(Ye))return{x:0n,y:1n};const i=wc(s,V);k(s*i)!==1n&&H("invalid inverse");const a=k(t*i),r=k(n*i);return{x:a,y:r}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=br(n);return s[31]|=t&1n?128:0,s}toHex(){return gr(this.toBytes())}clearCofactor(){return this.multiply(Zt(hc),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(Vt/2n,!1).double();return Vt%2n&&(t=t.add(this)),t.is0()}}const Be=new ee(Xi,Ji,1n,k(Xi*Ji)),Ye=new ee(0n,1n,1n,0n);ee.BASE=Be;ee.ZERO=Ye;const br=e=>vr(hr(Le(e,0n,cs),Ds)).reverse(),$r=e=>Zt("0x"+gr(fr(Se(e)).reverse())),ce=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=V;return n},Ac=e=>{const n=e*e%V*e%V,s=ce(n,2n)*n%V,i=ce(s,1n)*e%V,a=ce(i,5n)*i%V,r=ce(a,10n)*a%V,l=ce(r,20n)*r%V,c=ce(l,40n)*l%V,p=ce(c,80n)*c%V,d=ce(p,80n)*c%V,u=ce(d,10n)*a%V;return{pow_p_5_8:ce(u,2n)*e%V,b2:n}},ta=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,kc=(e,t)=>{const n=k(t*t*t),s=k(n*n*t),i=Ac(e*s).pow_p_5_8;let a=k(e*n*i);const r=k(t*a*a),l=a,c=k(a*ta),p=r===e,d=r===k(-e),u=r===k(-e*ta);return p&&(a=l),(d||u)&&(a=c),(k(a)&1n)===1n&&(a=k(-a)),{isValid:p||d,value:a}},ds=e=>yr($r(e)),Bs=(...e)=>xr.sha512Async(St(...e)),Sc=(...e)=>xc("sha512")(St(...e)),wr=e=>{const t=e.slice(0,De);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(De,Ds),s=ds(t),i=Be.multiply(s),a=i.toBytes();return{head:t,prefix:n,scalar:s,point:i,pointBytes:a}},Fs=e=>Bs(Se(e,De)).then(wr),_c=e=>wr(Sc(Se(e,De))),Tc=e=>Fs(e).then(t=>t.pointBytes),Ec=e=>Bs(e.hashable).then(e.finish),Cc=(e,t,n)=>{const{pointBytes:s,scalar:i}=e,a=ds(t),r=Be.multiply(a).toBytes();return{hashable:St(r,s,n),finish:p=>{const d=yr(a+ds(p)*i);return Se(St(r,br(d)),Ds)}}},Ic=async(e,t)=>{const n=Se(e),s=await Fs(t),i=await Bs(s.prefix,n);return Ec(Cc(s,i,n))},xr={sha512Async:async e=>{const t=bc(),n=St(e);return un(await t.digest("SHA-512",n.buffer))},sha512:void 0},Mc=(e=$c(De))=>e,Lc={getExtendedPublicKeyAsync:Fs,getExtendedPublicKey:_c,randomSecretKey:Mc},Xt=8,Rc=256,Ar=Math.ceil(Rc/Xt)+1,us=2**(Xt-1),Pc=()=>{const e=[];let t=Be,n=t;for(let s=0;s<Ar;s++){n=t,e.push(n);for(let i=1;i<us;i++)n=n.add(t),e.push(n);t=n.double()}return e};let na;const sa=(e,t)=>{const n=t.negate();return e?n:t},Nc=e=>{const t=na||(na=Pc());let n=Ye,s=Be;const i=2**Xt,a=i,r=Zt(i-1),l=Zt(Xt);for(let c=0;c<Ar;c++){let p=Number(e&r);e>>=l,p>us&&(p-=a,e+=1n);const d=c*us,u=d,h=d+Math.abs(p)-1,g=c%2!==0,$=p<0;p===0?s=s.add(sa(g,t[u])):n=n.add(sa($,t[h]))}return e!==0n&&H("invalid wnaf"),{p:n,f:s}},jn="clawdbot-device-identity-v1";function ps(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function kr(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),i=new Uint8Array(s.length);for(let a=0;a<s.length;a+=1)i[a]=s.charCodeAt(a);return i}function Oc(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function Sr(e){const t=await crypto.subtle.digest("SHA-256",e);return Oc(new Uint8Array(t))}async function Dc(){const e=Lc.randomSecretKey(),t=await Tc(e);return{deviceId:await Sr(t),publicKey:ps(t),privateKey:ps(e)}}async function Us(){try{const n=localStorage.getItem(jn);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const i=await Sr(kr(s.publicKey));if(i!==s.deviceId){const a={...s,deviceId:i};return localStorage.setItem(jn,JSON.stringify(a)),{deviceId:i,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await Dc(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(jn,JSON.stringify(t)),e}async function Bc(e,t){const n=kr(e),s=new TextEncoder().encode(t),i=await Ic(s,n);return ps(i)}const _r="clawdbot.device.auth.v1";function Ks(e){return e.trim()}function Fc(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].sort()}function Hs(){try{const e=window.localStorage.getItem(_r);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function Tr(e){try{window.localStorage.setItem(_r,JSON.stringify(e))}catch{}}function Uc(e){const t=Hs();if(!t||t.deviceId!==e.deviceId)return null;const n=Ks(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function Er(e){const t=Ks(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},s=Hs();s&&s.deviceId===e.deviceId&&(n.tokens={...s.tokens});const i={token:e.token,role:t,scopes:Fc(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=i,Tr(n),i}function Cr(e){const t=Hs();if(!t||t.deviceId!==e.deviceId)return;const n=Ks(e.role);if(!t.tokens[n])return;const s={...t,tokens:{...t.tokens}};delete s.tokens[n],Tr(s)}async function _e(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function Kc(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await _e(e)}catch(n){e.devicesError=String(n)}}async function Hc(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await _e(e)}catch(s){e.devicesError=String(s)}}async function zc(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await Us(),i=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&Er({deviceId:s.deviceId,role:i,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await _e(e)}catch(n){e.devicesError=String(n)}}async function jc(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await Us();t.deviceId===s.deviceId&&Cr({deviceId:s.deviceId,role:t.role}),await _e(e)}catch(s){e.devicesError=String(s)}}async function pn(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function qc(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function Vc(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function zs(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=qc(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);Wc(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function Wc(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=Oe(t.file??{}))}async function Gc(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},i=Vc(t,{file:s,baseHash:n});if(!i){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(i.method,i.params),e.execApprovalsDirty=!1,await zs(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function Qc(e,t,n){const s=Oe(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});lr(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function Yc(e,t){const n=Oe(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});cr(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function js(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}function tt(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function fn(e){return e instanceof Error?e.message:String(e)}async function Et(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=fn(n)}finally{e.skillsLoading=!1}}}function Zc(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function Xc(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await Et(e),tt(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const i=fn(s);e.skillsError=i,tt(e,t,{kind:"error",message:i})}finally{e.skillsBusyKey=null}}}async function Jc(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const n=e.skillEdits[t]??"";await e.client.request("skills.update",{skillKey:t,apiKey:n}),await Et(e),tt(e,t,{kind:"success",message:"API key saved"})}catch(n){const s=fn(n);e.skillsError=s,tt(e,t,{kind:"error",message:s})}finally{e.skillsBusyKey=null}}}async function ed(e,t,n,s){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const i=await e.client.request("skills.install",{name:n,installId:s,timeoutMs:12e4});await Et(e),tt(e,t,{kind:"success",message:i?.message??"Installed"})}catch(i){const a=fn(i);e.skillsError=a,tt(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}function td(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function qs(e){return e==="system"?td():e}const Ft=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,nd=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,Ut=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},sd=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const i=globalThis.document??null;if(!i){t();return}const a=i.documentElement,r=i,l=nd();if(!!r.startViewTransition&&!l){let p=.5,d=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")p=Ft(n.pointerClientX/window.innerWidth),d=Ft(n.pointerClientY/window.innerHeight);else if(n?.element){const u=n.element.getBoundingClientRect();u.width>0&&u.height>0&&typeof window<"u"&&(p=Ft((u.left+u.width/2)/window.innerWidth),d=Ft((u.top+u.height/2)/window.innerHeight))}a.style.setProperty("--theme-switch-x",`${p*100}%`),a.style.setProperty("--theme-switch-y",`${d*100}%`),a.classList.add("theme-transition");try{const u=r.startViewTransition?.(()=>{t()});u?.finished?u.finished.finally(()=>Ut(a)):Ut(a)}catch{Ut(a),t()}return}t(),Ut(a)};function id(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{pn(e,{quiet:!0})},5e3))}function ad(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Vs(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Os(e,{quiet:!0})},2e3))}function Ws(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function Gs(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&dn(e)},3e3))}function Qs(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}function Fe(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,fl(n),t.theme!==e.theme&&(e.theme=t.theme,hn(e,qs(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function Ir(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&Fe(e,{...e.settings,lastActiveSessionKey:n})}function rd(e){if(!window.location.search)return;const t=new URLSearchParams(window.location.search),n=t.get("token"),s=t.get("password"),i=t.get("session"),a=t.get("gatewayUrl");let r=!1;if(n!=null){const c=n.trim();c&&c!==e.settings.token&&Fe(e,{...e.settings,token:c}),t.delete("token"),r=!0}if(s!=null){const c=s.trim();c&&(e.password=c),t.delete("password"),r=!0}if(i!=null){const c=i.trim();c&&(e.sessionKey=c,Fe(e,{...e.settings,sessionKey:c,lastActiveSessionKey:c}))}if(a!=null){const c=a.trim();c&&c!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=c),t.delete("gatewayUrl"),r=!0}if(!r)return;const l=new URL(window.location.href);l.search=t.toString(),window.history.replaceState({},"",l.toString())}function od(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Vs(e):Ws(e),t==="debug"?Gs(e):Qs(e),Ys(e),Lr(e,t,!1)}function ld(e,t,n){sd({nextTheme:t,applyTheme:()=>{e.theme=t,Fe(e,{...e.settings,theme:t}),hn(e,qs(t))},context:n,currentTheme:e.theme})}async function Ys(e){e.tab==="overview"&&await Rr(e),e.tab==="channels"&&await vd(e),e.tab==="instances"&&await js(e),e.tab==="sessions"&&await st(e),e.tab==="cron"&&await Zs(e),e.tab==="skills"&&await Et(e),e.tab==="nodes"&&(await pn(e),await _e(e),await ye(e),await zs(e)),e.tab==="chat"&&(await wd(e),ln(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await dr(e),await ye(e)),e.tab==="debug"&&(await dn(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Os(e,{reset:!0}),or(e,!0))}function cd(){if(typeof window>"u")return"";const e=window.__CLAWDBOT_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?on(e):gl(window.location.pathname)}function dd(e){e.theme=e.settings.theme??"system",hn(e,qs(e.theme))}function hn(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function ud(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&hn(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function pd(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function fd(e,t){if(typeof window>"u")return;const n=sr(window.location.pathname,e.basePath)??"chat";Mr(e,n),Lr(e,n,t)}function hd(e){if(typeof window>"u")return;const t=sr(window.location.pathname,e.basePath);if(!t)return;const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,Fe(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),Mr(e,t)}function Mr(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Vs(e):Ws(e),t==="debug"?Gs(e):Qs(e),e.connected&&Ys(e)}function Lr(e,t,n){if(typeof window>"u")return;const s=At(Rs(t,e.basePath)),i=At(window.location.pathname),a=new URL(window.location.href);t==="chat"&&e.sessionKey?a.searchParams.set("session",e.sessionKey):a.searchParams.delete("session"),i!==s&&(a.pathname=s),n?window.history.replaceState({},"",a.toString()):window.history.pushState({},"",a.toString())}function gd(e,t,n){if(typeof window>"u")return;const s=new URL(window.location.href);s.searchParams.set("session",t),window.history.replaceState({},"",s.toString())}async function Rr(e){await Promise.all([re(e,!1),js(e),st(e),Tt(e),dn(e)])}async function vd(e){await Promise.all([re(e,!0),dr(e),ye(e)])}async function Zs(e){await Promise.all([re(e,!1),Tt(e),cn(e)])}function Pr(e){return e.chatSending||!!e.chatRunId}function md(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}async function Nr(e){e.connected&&(e.chatMessage="",await Il(e))}function yd(e,t,n){const s=t.trim(),i=!!(n&&n.length>0);!s&&!i||(e.chatQueue=[...e.chatQueue,{id:Ps(),text:s,createdAt:Date.now(),attachments:i?n?.map(a=>({...a})):void 0}])}async function Or(e,t,n){Ns(e);const s=await Cl(e,t,n?.attachments);return!s&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!s&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),s&&Ir(e,e.sessionKey),s&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),s&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),ln(e),s&&!e.chatRunId&&Dr(e),s}async function Dr(e){if(!e.connected||Pr(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await Or(e,t.text,{attachments:t.attachments})||(e.chatQueue=[t,...e.chatQueue])}function bd(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function $d(e,t,n){if(!e.connected)return;const s=e.chatMessage,i=(t??e.chatMessage).trim(),a=e.chatAttachments??[],r=t==null?a:[],l=r.length>0;if(!(!i&&!l)){if(md(i)){await Nr(e);return}if(t==null&&(e.chatMessage="",e.chatAttachments=[]),Pr(e)){yd(e,i,r);return}await Or(e,i,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:l?r:void 0,previousAttachments:t==null?a:void 0,restoreAttachments:!!(t&&n?.restoreDraft)})}}async function wd(e){await Promise.all([Je(e),st(e),fs(e)]),ln(e,!0)}const xd=Dr;function Ad(e){const t=er(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function kd(e,t){const n=on(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function fs(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=Ad(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=kd(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const i=await s.json(),a=typeof i.avatarUrl=="string"?i.avatarUrl.trim():"";e.chatAvatarUrl=a||null}catch{e.chatAvatarUrl=null}}const Br={CHILD:2},Fr=e=>(...t)=>({_$litDirective$:e,values:t});let Ur=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const{I:Sd}=nl,ia=e=>e,aa=()=>document.createComment(""),lt=(e,t,n)=>{const s=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=s.insertBefore(aa(),i),r=s.insertBefore(aa(),i);n=new Sd(a,r,e,e.options)}else{const a=n._$AB.nextSibling,r=n._$AM,l=r!==e;if(l){let c;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(c=e._$AU)!==r._$AU&&n._$AP(c)}if(a!==i||l){let c=n._$AA;for(;c!==a;){const p=ia(c).nextSibling;ia(s).insertBefore(c,i),c=p}}}return n},Ie=(e,t,n=e)=>(e._$AI(t,n),e),_d={},Td=(e,t=_d)=>e._$AH=t,Ed=e=>e._$AH,qn=e=>{e._$AR(),e._$AA.remove()};const ra=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},Kr=Fr(class extends Ur{constructor(e){if(super(e),e.type!==Br.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const i=[],a=[];let r=0;for(const l of e)i[r]=s?s(l,r):r,a[r]=n(l,r),r++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const i=Ed(e),{values:a,keys:r}=this.dt(t,n,s);if(!Array.isArray(i))return this.ut=r,a;const l=this.ut??=[],c=[];let p,d,u=0,h=i.length-1,g=0,$=a.length-1;for(;u<=h&&g<=$;)if(i[u]===null)u++;else if(i[h]===null)h--;else if(l[u]===r[g])c[g]=Ie(i[u],a[g]),u++,g++;else if(l[h]===r[$])c[$]=Ie(i[h],a[$]),h--,$--;else if(l[u]===r[$])c[$]=Ie(i[u],a[$]),lt(e,c[$+1],i[u]),u++,$--;else if(l[h]===r[g])c[g]=Ie(i[h],a[g]),lt(e,i[u],i[h]),h--,g++;else if(p===void 0&&(p=ra(r,g,$),d=ra(l,u,h)),p.has(l[u]))if(p.has(l[h])){const w=d.get(r[g]),A=w!==void 0?i[w]:null;if(A===null){const _=lt(e,i[u]);Ie(_,a[g]),c[g]=_}else c[g]=Ie(A,a[g]),lt(e,i[u],A),i[w]=null;g++}else qn(i[h]),h--;else qn(i[u]),u++;for(;g<=$;){const w=lt(e,c[$+1]);Ie(w,a[g]),c[g++]=w}for(;u<=h;){const w=i[u++];w!==null&&qn(w)}return this.ut=r,Td(e,c),ke}});function Hr(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",i=t.content,a=Array.isArray(i)?i:null,r=Array.isArray(a)&&a.some(u=>{const g=String(u.type??"").toLowerCase();return g==="toolresult"||g==="tool_result"}),l=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||r||l)&&(n="toolResult");let c=[];typeof t.content=="string"?c=[{type:"text",text:t.content}]:Array.isArray(t.content)?c=t.content.map(u=>({type:u.type||"text",text:u.text,name:u.name,args:u.args||u.arguments})):typeof t.text=="string"&&(c=[{type:"text",text:t.text}]);const p=typeof t.timestamp=="number"?t.timestamp:Date.now(),d=typeof t.id=="string"?t.id:void 0;return{role:n,content:c,timestamp:p,id:d}}function Xs(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function zr(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}class hs extends Ur{constructor(t){if(super(t),this.it=v,t.type!==Br.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===ke)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}hs.directiveName="unsafeHTML",hs.resultType=1;const gs=Fr(hs);const{entries:jr,setPrototypeOf:oa,isFrozen:Cd,getPrototypeOf:Id,getOwnPropertyDescriptor:Md}=Object;let{freeze:Z,seal:ne,create:vs}=Object,{apply:ms,construct:ys}=typeof Reflect<"u"&&Reflect;Z||(Z=function(t){return t});ne||(ne=function(t){return t});ms||(ms=function(t,n){for(var s=arguments.length,i=new Array(s>2?s-2:0),a=2;a<s;a++)i[a-2]=arguments[a];return t.apply(n,i)});ys||(ys=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return new t(...s)});const Kt=X(Array.prototype.forEach),Ld=X(Array.prototype.lastIndexOf),la=X(Array.prototype.pop),ct=X(Array.prototype.push),Rd=X(Array.prototype.splice),Wt=X(String.prototype.toLowerCase),Vn=X(String.prototype.toString),Wn=X(String.prototype.match),dt=X(String.prototype.replace),Pd=X(String.prototype.indexOf),Nd=X(String.prototype.trim),se=X(Object.prototype.hasOwnProperty),Q=X(RegExp.prototype.test),ut=Od(TypeError);function X(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return ms(e,t,s)}}function Od(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return ys(e,n)}}function L(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Wt;oa&&oa(e,null);let s=t.length;for(;s--;){let i=t[s];if(typeof i=="string"){const a=n(i);a!==i&&(Cd(t)||(t[s]=a),i=a)}e[i]=!0}return e}function Dd(e){for(let t=0;t<e.length;t++)se(e,t)||(e[t]=null);return e}function de(e){const t=vs(null);for(const[n,s]of jr(e))se(e,n)&&(Array.isArray(s)?t[n]=Dd(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=de(s):t[n]=s);return t}function pt(e,t){for(;e!==null;){const s=Md(e,t);if(s){if(s.get)return X(s.get);if(typeof s.value=="function")return X(s.value)}e=Id(e)}function n(){return null}return n}const ca=Z(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Gn=Z(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Qn=Z(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Bd=Z(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Yn=Z(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Fd=Z(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),da=Z(["#text"]),ua=Z(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Zn=Z(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),pa=Z(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ht=Z(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ud=ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Kd=ne(/<%[\w\W]*|[\w\W]*%>/gm),Hd=ne(/\$\{[\w\W]*/gm),zd=ne(/^data-[\-\w.\u00B7-\uFFFF]+$/),jd=ne(/^aria-[\-\w]+$/),qr=ne(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),qd=ne(/^(?:\w+script|data):/i),Vd=ne(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Vr=ne(/^html$/i),Wd=ne(/^[a-z][.\w]*(-[.\w]+)+$/i);var fa=Object.freeze({__proto__:null,ARIA_ATTR:jd,ATTR_WHITESPACE:Vd,CUSTOM_ELEMENT:Wd,DATA_ATTR:zd,DOCTYPE_NAME:Vr,ERB_EXPR:Kd,IS_ALLOWED_URI:qr,IS_SCRIPT_OR_DATA:qd,MUSTACHE_EXPR:Ud,TMPLIT_EXPR:Hd});const ft={element:1,text:3,progressingInstruction:7,comment:8,document:9},Gd=function(){return typeof window>"u"?null:window},Qd=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(s=n.getAttribute(i));const a="dompurify"+(s?"#"+s:"");try{return t.createPolicy(a,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},ha=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Wr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Gd();const t=T=>Wr(T);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==ft.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,i=s.currentScript,{DocumentFragment:a,HTMLTemplateElement:r,Node:l,Element:c,NodeFilter:p,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:u,DOMParser:h,trustedTypes:g}=e,$=c.prototype,w=pt($,"cloneNode"),A=pt($,"remove"),_=pt($,"nextSibling"),M=pt($,"childNodes"),P=pt($,"parentNode");if(typeof r=="function"){const T=n.createElement("template");T.content&&T.content.ownerDocument&&(n=T.content.ownerDocument)}let I,E="";const{implementation:C,createNodeIterator:pe,createDocumentFragment:bn,getElementsByTagName:$n}=n,{importNode:Ao}=s;let G=ha();t.isSupported=typeof jr=="function"&&typeof P=="function"&&C&&C.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:wn,ERB_EXPR:xn,TMPLIT_EXPR:An,DATA_ATTR:ko,ARIA_ATTR:So,IS_SCRIPT_OR_DATA:_o,ATTR_WHITESPACE:di,CUSTOM_ELEMENT:To}=fa;let{IS_ALLOWED_URI:ui}=fa,K=null;const pi=L({},[...ca,...Gn,...Qn,...Yn,...da]);let z=null;const fi=L({},[...ua,...Zn,...pa,...Ht]);let B=Object.seal(vs(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),it=null,kn=null;const He=Object.seal(vs(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let hi=!0,Sn=!0,gi=!1,vi=!0,ze=!1,It=!0,Te=!1,_n=!1,Tn=!1,je=!1,Mt=!1,Lt=!1,mi=!0,yi=!1;const Eo="user-content-";let En=!0,at=!1,qe={},oe=null;const Cn=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let bi=null;const $i=L({},["audio","video","img","source","image","track"]);let In=null;const wi=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Rt="http://www.w3.org/1998/Math/MathML",Pt="http://www.w3.org/2000/svg",fe="http://www.w3.org/1999/xhtml";let Ve=fe,Mn=!1,Ln=null;const Co=L({},[Rt,Pt,fe],Vn);let Nt=L({},["mi","mo","mn","ms","mtext"]),Ot=L({},["annotation-xml"]);const Io=L({},["title","style","font","a","script"]);let rt=null;const Mo=["application/xhtml+xml","text/html"],Lo="text/html";let U=null,We=null;const Ro=n.createElement("form"),xi=function(f){return f instanceof RegExp||f instanceof Function},Rn=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(We&&We===f)){if((!f||typeof f!="object")&&(f={}),f=de(f),rt=Mo.indexOf(f.PARSER_MEDIA_TYPE)===-1?Lo:f.PARSER_MEDIA_TYPE,U=rt==="application/xhtml+xml"?Vn:Wt,K=se(f,"ALLOWED_TAGS")?L({},f.ALLOWED_TAGS,U):pi,z=se(f,"ALLOWED_ATTR")?L({},f.ALLOWED_ATTR,U):fi,Ln=se(f,"ALLOWED_NAMESPACES")?L({},f.ALLOWED_NAMESPACES,Vn):Co,In=se(f,"ADD_URI_SAFE_ATTR")?L(de(wi),f.ADD_URI_SAFE_ATTR,U):wi,bi=se(f,"ADD_DATA_URI_TAGS")?L(de($i),f.ADD_DATA_URI_TAGS,U):$i,oe=se(f,"FORBID_CONTENTS")?L({},f.FORBID_CONTENTS,U):Cn,it=se(f,"FORBID_TAGS")?L({},f.FORBID_TAGS,U):de({}),kn=se(f,"FORBID_ATTR")?L({},f.FORBID_ATTR,U):de({}),qe=se(f,"USE_PROFILES")?f.USE_PROFILES:!1,hi=f.ALLOW_ARIA_ATTR!==!1,Sn=f.ALLOW_DATA_ATTR!==!1,gi=f.ALLOW_UNKNOWN_PROTOCOLS||!1,vi=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ze=f.SAFE_FOR_TEMPLATES||!1,It=f.SAFE_FOR_XML!==!1,Te=f.WHOLE_DOCUMENT||!1,je=f.RETURN_DOM||!1,Mt=f.RETURN_DOM_FRAGMENT||!1,Lt=f.RETURN_TRUSTED_TYPE||!1,Tn=f.FORCE_BODY||!1,mi=f.SANITIZE_DOM!==!1,yi=f.SANITIZE_NAMED_PROPS||!1,En=f.KEEP_CONTENT!==!1,at=f.IN_PLACE||!1,ui=f.ALLOWED_URI_REGEXP||qr,Ve=f.NAMESPACE||fe,Nt=f.MATHML_TEXT_INTEGRATION_POINTS||Nt,Ot=f.HTML_INTEGRATION_POINTS||Ot,B=f.CUSTOM_ELEMENT_HANDLING||{},f.CUSTOM_ELEMENT_HANDLING&&xi(f.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(B.tagNameCheck=f.CUSTOM_ELEMENT_HANDLING.tagNameCheck),f.CUSTOM_ELEMENT_HANDLING&&xi(f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(B.attributeNameCheck=f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),f.CUSTOM_ELEMENT_HANDLING&&typeof f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(B.allowCustomizedBuiltInElements=f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ze&&(Sn=!1),Mt&&(je=!0),qe&&(K=L({},da),z=[],qe.html===!0&&(L(K,ca),L(z,ua)),qe.svg===!0&&(L(K,Gn),L(z,Zn),L(z,Ht)),qe.svgFilters===!0&&(L(K,Qn),L(z,Zn),L(z,Ht)),qe.mathMl===!0&&(L(K,Yn),L(z,pa),L(z,Ht))),f.ADD_TAGS&&(typeof f.ADD_TAGS=="function"?He.tagCheck=f.ADD_TAGS:(K===pi&&(K=de(K)),L(K,f.ADD_TAGS,U))),f.ADD_ATTR&&(typeof f.ADD_ATTR=="function"?He.attributeCheck=f.ADD_ATTR:(z===fi&&(z=de(z)),L(z,f.ADD_ATTR,U))),f.ADD_URI_SAFE_ATTR&&L(In,f.ADD_URI_SAFE_ATTR,U),f.FORBID_CONTENTS&&(oe===Cn&&(oe=de(oe)),L(oe,f.FORBID_CONTENTS,U)),f.ADD_FORBID_CONTENTS&&(oe===Cn&&(oe=de(oe)),L(oe,f.ADD_FORBID_CONTENTS,U)),En&&(K["#text"]=!0),Te&&L(K,["html","head","body"]),K.table&&(L(K,["tbody"]),delete it.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');I=f.TRUSTED_TYPES_POLICY,E=I.createHTML("")}else I===void 0&&(I=Qd(g,i)),I!==null&&typeof E=="string"&&(E=I.createHTML(""));Z&&Z(f),We=f}},Ai=L({},[...Gn,...Qn,...Bd]),ki=L({},[...Yn,...Fd]),Po=function(f){let x=P(f);(!x||!x.tagName)&&(x={namespaceURI:Ve,tagName:"template"});const S=Wt(f.tagName),D=Wt(x.tagName);return Ln[f.namespaceURI]?f.namespaceURI===Pt?x.namespaceURI===fe?S==="svg":x.namespaceURI===Rt?S==="svg"&&(D==="annotation-xml"||Nt[D]):!!Ai[S]:f.namespaceURI===Rt?x.namespaceURI===fe?S==="math":x.namespaceURI===Pt?S==="math"&&Ot[D]:!!ki[S]:f.namespaceURI===fe?x.namespaceURI===Pt&&!Ot[D]||x.namespaceURI===Rt&&!Nt[D]?!1:!ki[S]&&(Io[S]||!Ai[S]):!!(rt==="application/xhtml+xml"&&Ln[f.namespaceURI]):!1},le=function(f){ct(t.removed,{element:f});try{P(f).removeChild(f)}catch{A(f)}},Ee=function(f,x){try{ct(t.removed,{attribute:x.getAttributeNode(f),from:x})}catch{ct(t.removed,{attribute:null,from:x})}if(x.removeAttribute(f),f==="is")if(je||Mt)try{le(x)}catch{}else try{x.setAttribute(f,"")}catch{}},Si=function(f){let x=null,S=null;if(Tn)f="<remove></remove>"+f;else{const F=Wn(f,/^[\r\n\t ]+/);S=F&&F[0]}rt==="application/xhtml+xml"&&Ve===fe&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");const D=I?I.createHTML(f):f;if(Ve===fe)try{x=new h().parseFromString(D,rt)}catch{}if(!x||!x.documentElement){x=C.createDocument(Ve,"template",null);try{x.documentElement.innerHTML=Mn?E:D}catch{}}const q=x.body||x.documentElement;return f&&S&&q.insertBefore(n.createTextNode(S),q.childNodes[0]||null),Ve===fe?$n.call(x,Te?"html":"body")[0]:Te?x.documentElement:q},_i=function(f){return pe.call(f.ownerDocument||f,f,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null)},Pn=function(f){return f instanceof u&&(typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||!(f.attributes instanceof d)||typeof f.removeAttribute!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function")},Ti=function(f){return typeof l=="function"&&f instanceof l};function he(T,f,x){Kt(T,S=>{S.call(t,f,x,We)})}const Ei=function(f){let x=null;if(he(G.beforeSanitizeElements,f,null),Pn(f))return le(f),!0;const S=U(f.nodeName);if(he(G.uponSanitizeElement,f,{tagName:S,allowedTags:K}),It&&f.hasChildNodes()&&!Ti(f.firstElementChild)&&Q(/<[/\w!]/g,f.innerHTML)&&Q(/<[/\w!]/g,f.textContent)||f.nodeType===ft.progressingInstruction||It&&f.nodeType===ft.comment&&Q(/<[/\w]/g,f.data))return le(f),!0;if(!(He.tagCheck instanceof Function&&He.tagCheck(S))&&(!K[S]||it[S])){if(!it[S]&&Ii(S)&&(B.tagNameCheck instanceof RegExp&&Q(B.tagNameCheck,S)||B.tagNameCheck instanceof Function&&B.tagNameCheck(S)))return!1;if(En&&!oe[S]){const D=P(f)||f.parentNode,q=M(f)||f.childNodes;if(q&&D){const F=q.length;for(let J=F-1;J>=0;--J){const ge=w(q[J],!0);ge.__removalCount=(f.__removalCount||0)+1,D.insertBefore(ge,_(f))}}}return le(f),!0}return f instanceof c&&!Po(f)||(S==="noscript"||S==="noembed"||S==="noframes")&&Q(/<\/no(script|embed|frames)/i,f.innerHTML)?(le(f),!0):(ze&&f.nodeType===ft.text&&(x=f.textContent,Kt([wn,xn,An],D=>{x=dt(x,D," ")}),f.textContent!==x&&(ct(t.removed,{element:f.cloneNode()}),f.textContent=x)),he(G.afterSanitizeElements,f,null),!1)},Ci=function(f,x,S){if(mi&&(x==="id"||x==="name")&&(S in n||S in Ro))return!1;if(!(Sn&&!kn[x]&&Q(ko,x))){if(!(hi&&Q(So,x))){if(!(He.attributeCheck instanceof Function&&He.attributeCheck(x,f))){if(!z[x]||kn[x]){if(!(Ii(f)&&(B.tagNameCheck instanceof RegExp&&Q(B.tagNameCheck,f)||B.tagNameCheck instanceof Function&&B.tagNameCheck(f))&&(B.attributeNameCheck instanceof RegExp&&Q(B.attributeNameCheck,x)||B.attributeNameCheck instanceof Function&&B.attributeNameCheck(x,f))||x==="is"&&B.allowCustomizedBuiltInElements&&(B.tagNameCheck instanceof RegExp&&Q(B.tagNameCheck,S)||B.tagNameCheck instanceof Function&&B.tagNameCheck(S))))return!1}else if(!In[x]){if(!Q(ui,dt(S,di,""))){if(!((x==="src"||x==="xlink:href"||x==="href")&&f!=="script"&&Pd(S,"data:")===0&&bi[f])){if(!(gi&&!Q(_o,dt(S,di,"")))){if(S)return!1}}}}}}}return!0},Ii=function(f){return f!=="annotation-xml"&&Wn(f,To)},Mi=function(f){he(G.beforeSanitizeAttributes,f,null);const{attributes:x}=f;if(!x||Pn(f))return;const S={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:z,forceKeepAttr:void 0};let D=x.length;for(;D--;){const q=x[D],{name:F,namespaceURI:J,value:ge}=q,Ge=U(F),Nn=ge;let j=F==="value"?Nn:Nd(Nn);if(S.attrName=Ge,S.attrValue=j,S.keepAttr=!0,S.forceKeepAttr=void 0,he(G.uponSanitizeAttribute,f,S),j=S.attrValue,yi&&(Ge==="id"||Ge==="name")&&(Ee(F,f),j=Eo+j),It&&Q(/((--!?|])>)|<\/(style|title|textarea)/i,j)){Ee(F,f);continue}if(Ge==="attributename"&&Wn(j,"href")){Ee(F,f);continue}if(S.forceKeepAttr)continue;if(!S.keepAttr){Ee(F,f);continue}if(!vi&&Q(/\/>/i,j)){Ee(F,f);continue}ze&&Kt([wn,xn,An],Ri=>{j=dt(j,Ri," ")});const Li=U(f.nodeName);if(!Ci(Li,Ge,j)){Ee(F,f);continue}if(I&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!J)switch(g.getAttributeType(Li,Ge)){case"TrustedHTML":{j=I.createHTML(j);break}case"TrustedScriptURL":{j=I.createScriptURL(j);break}}if(j!==Nn)try{J?f.setAttributeNS(J,F,j):f.setAttribute(F,j),Pn(f)?le(f):la(t.removed)}catch{Ee(F,f)}}he(G.afterSanitizeAttributes,f,null)},No=function T(f){let x=null;const S=_i(f);for(he(G.beforeSanitizeShadowDOM,f,null);x=S.nextNode();)he(G.uponSanitizeShadowNode,x,null),Ei(x),Mi(x),x.content instanceof a&&T(x.content);he(G.afterSanitizeShadowDOM,f,null)};return t.sanitize=function(T){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=null,S=null,D=null,q=null;if(Mn=!T,Mn&&(T="<!-->"),typeof T!="string"&&!Ti(T))if(typeof T.toString=="function"){if(T=T.toString(),typeof T!="string")throw ut("dirty is not a string, aborting")}else throw ut("toString is not a function");if(!t.isSupported)return T;if(_n||Rn(f),t.removed=[],typeof T=="string"&&(at=!1),at){if(T.nodeName){const ge=U(T.nodeName);if(!K[ge]||it[ge])throw ut("root node is forbidden and cannot be sanitized in-place")}}else if(T instanceof l)x=Si("<!---->"),S=x.ownerDocument.importNode(T,!0),S.nodeType===ft.element&&S.nodeName==="BODY"||S.nodeName==="HTML"?x=S:x.appendChild(S);else{if(!je&&!ze&&!Te&&T.indexOf("<")===-1)return I&&Lt?I.createHTML(T):T;if(x=Si(T),!x)return je?null:Lt?E:""}x&&Tn&&le(x.firstChild);const F=_i(at?T:x);for(;D=F.nextNode();)Ei(D),Mi(D),D.content instanceof a&&No(D.content);if(at)return T;if(je){if(Mt)for(q=bn.call(x.ownerDocument);x.firstChild;)q.appendChild(x.firstChild);else q=x;return(z.shadowroot||z.shadowrootmode)&&(q=Ao.call(s,q,!0)),q}let J=Te?x.outerHTML:x.innerHTML;return Te&&K["!doctype"]&&x.ownerDocument&&x.ownerDocument.doctype&&x.ownerDocument.doctype.name&&Q(Vr,x.ownerDocument.doctype.name)&&(J="<!DOCTYPE "+x.ownerDocument.doctype.name+`>
`+J),ze&&Kt([wn,xn,An],ge=>{J=dt(J,ge," ")}),I&&Lt?I.createHTML(J):J},t.setConfig=function(){let T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Rn(T),_n=!0},t.clearConfig=function(){We=null,_n=!1},t.isValidAttribute=function(T,f,x){We||Rn({});const S=U(T),D=U(f);return Ci(S,D,x)},t.addHook=function(T,f){typeof f=="function"&&ct(G[T],f)},t.removeHook=function(T,f){if(f!==void 0){const x=Ld(G[T],f);return x===-1?void 0:Rd(G[T],x,1)[0]}return la(G[T])},t.removeHooks=function(T){G[T]=[]},t.removeAllHooks=function(){G=ha()},t}var bs=Wr();function Js(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ke=Js();function Gr(e){Ke=e}var bt={exec:()=>null};function R(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(i,a)=>{let r=typeof a=="string"?a:a.source;return r=r.replace(Y.caret,"$1"),n=n.replace(i,r),s},getRegex:()=>new RegExp(n,t)};return s}var Yd=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Y={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Zd=/^(?:[ \t]*(?:\n|$))+/,Xd=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Jd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ct=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,eu=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ei=/(?:[*+-]|\d{1,9}[.)])/,Qr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Yr=R(Qr).replace(/bull/g,ei).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),tu=R(Qr).replace(/bull/g,ei).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ti=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,nu=/^[^\n]+/,ni=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,su=R(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ni).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),iu=R(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ei).getRegex(),gn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",si=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,au=R("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",si).replace("tag",gn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Zr=R(ti).replace("hr",Ct).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gn).getRegex(),ru=R(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Zr).getRegex(),ii={blockquote:ru,code:Xd,def:su,fences:Jd,heading:eu,hr:Ct,html:au,lheading:Yr,list:iu,newline:Zd,paragraph:Zr,table:bt,text:nu},ga=R("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ct).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gn).getRegex(),ou={...ii,lheading:tu,table:ga,paragraph:R(ti).replace("hr",Ct).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ga).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gn).getRegex()},lu={...ii,html:R(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",si).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:bt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:R(ti).replace("hr",Ct).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Yr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},cu=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,du=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Xr=/^( {2,}|\\)\n(?!\s*$)/,uu=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vn=/[\p{P}\p{S}]/u,ai=/[\s\p{P}\p{S}]/u,Jr=/[^\s\p{P}\p{S}]/u,pu=R(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ai).getRegex(),eo=/(?!~)[\p{P}\p{S}]/u,fu=/(?!~)[\s\p{P}\p{S}]/u,hu=/(?:[^\s\p{P}\p{S}]|~)/u,gu=R(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Yd?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),to=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,vu=R(to,"u").replace(/punct/g,vn).getRegex(),mu=R(to,"u").replace(/punct/g,eo).getRegex(),no="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",yu=R(no,"gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,ai).replace(/punct/g,vn).getRegex(),bu=R(no,"gu").replace(/notPunctSpace/g,hu).replace(/punctSpace/g,fu).replace(/punct/g,eo).getRegex(),$u=R("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,ai).replace(/punct/g,vn).getRegex(),wu=R(/\\(punct)/,"gu").replace(/punct/g,vn).getRegex(),xu=R(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Au=R(si).replace("(?:-->|$)","-->").getRegex(),ku=R("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Au).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Jt=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Su=R(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Jt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),so=R(/^!?\[(label)\]\[(ref)\]/).replace("label",Jt).replace("ref",ni).getRegex(),io=R(/^!?\[(ref)\](?:\[\])?/).replace("ref",ni).getRegex(),_u=R("reflink|nolink(?!\\()","g").replace("reflink",so).replace("nolink",io).getRegex(),va=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ri={_backpedal:bt,anyPunctuation:wu,autolink:xu,blockSkip:gu,br:Xr,code:du,del:bt,emStrongLDelim:vu,emStrongRDelimAst:yu,emStrongRDelimUnd:$u,escape:cu,link:Su,nolink:io,punctuation:pu,reflink:so,reflinkSearch:_u,tag:ku,text:uu,url:bt},Tu={...ri,link:R(/^!?\[(label)\]\((.*?)\)/).replace("label",Jt).getRegex(),reflink:R(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Jt).getRegex()},$s={...ri,emStrongRDelimAst:bu,emStrongLDelim:mu,url:R(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",va).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:R(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",va).getRegex()},Eu={...$s,br:R(Xr).replace("{2,}","*").getRegex(),text:R($s.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},zt={normal:ii,gfm:ou,pedantic:lu},ht={normal:ri,gfm:$s,breaks:Eu,pedantic:Tu},Cu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ma=e=>Cu[e];function me(e,t){if(t){if(Y.escapeTest.test(e))return e.replace(Y.escapeReplace,ma)}else if(Y.escapeTestNoEncode.test(e))return e.replace(Y.escapeReplaceNoEncode,ma);return e}function ya(e){try{e=encodeURI(e).replace(Y.percentDecode,"%")}catch{return null}return e}function ba(e,t){let n=e.replace(Y.findPipe,(a,r,l)=>{let c=!1,p=r;for(;--p>=0&&l[p]==="\\";)c=!c;return c?"|":" |"}),s=n.split(Y.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(Y.slashPipe,"|");return s}function gt(e,t,n){let s=e.length;if(s===0)return"";let i=0;for(;i<s&&e.charAt(s-i-1)===t;)i++;return e.slice(0,s-i)}function Iu(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function $a(e,t,n,s,i){let a=t.href,r=t.title||null,l=e[1].replace(i.other.outputLinkReplace,"$1");s.state.inLink=!0;let c={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:a,title:r,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,c}function Mu(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let i=s[1];return t.split(`
`).map(a=>{let r=a.match(n.other.beginningSpace);if(r===null)return a;let[l]=r;return l.length>=i.length?a.slice(i.length):a}).join(`
`)}var en=class{options;rules;lexer;constructor(e){this.options=e||Ke}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:gt(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Mu(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=gt(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:gt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=gt(t[0],`
`).split(`
`),s="",i="",a=[];for(;n.length>0;){let r=!1,l=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),r=!0;else if(!r)l.push(n[c]);else break;n=n.slice(c);let p=l.join(`
`),d=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${p}`:p,i=i?`${i}
${d}`:d;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,a,!0),this.lexer.state.top=u,n.length===0)break;let h=a.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let g=h,$=g.raw+`
`+n.join(`
`),w=this.blockquote($);a[a.length-1]=w,s=s.substring(0,s.length-g.raw.length)+w.raw,i=i.substring(0,i.length-g.text.length)+w.text;break}else if(h?.type==="list"){let g=h,$=g.raw+`
`+n.join(`
`),w=this.list($);a[a.length-1]=w,s=s.substring(0,s.length-h.raw.length)+w.raw,i=i.substring(0,i.length-g.raw.length)+w.raw,n=$.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:a,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let a=this.rules.other.listItemRegex(n),r=!1;for(;e;){let c=!1,p="",d="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;p=t[0],e=e.substring(p.length);let u=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,w=>" ".repeat(3*w.length)),h=e.split(`
`,1)[0],g=!u.trim(),$=0;if(this.options.pedantic?($=2,d=u.trimStart()):g?$=t[1].length+1:($=t[2].search(this.rules.other.nonSpaceChar),$=$>4?1:$,d=u.slice($),$+=t[1].length),g&&this.rules.other.blankLine.test(h)&&(p+=h+`
`,e=e.substring(h.length+1),c=!0),!c){let w=this.rules.other.nextBulletRegex($),A=this.rules.other.hrRegex($),_=this.rules.other.fencesBeginRegex($),M=this.rules.other.headingBeginRegex($),P=this.rules.other.htmlBeginRegex($);for(;e;){let I=e.split(`
`,1)[0],E;if(h=I,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),E=h):E=h.replace(this.rules.other.tabCharGlobal,"    "),_.test(h)||M.test(h)||P.test(h)||w.test(h)||A.test(h))break;if(E.search(this.rules.other.nonSpaceChar)>=$||!h.trim())d+=`
`+E.slice($);else{if(g||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||_.test(u)||M.test(u)||A.test(u))break;d+=`
`+h}!g&&!h.trim()&&(g=!0),p+=I+`
`,e=e.substring(I.length+1),u=E.slice($)}}i.loose||(r?i.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(r=!0)),i.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),i.raw+=p}let l=i.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let c of i.items){if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),c.task){if(c.text=c.text.replace(this.rules.other.listReplaceTask,""),c.tokens[0]?.type==="text"||c.tokens[0]?.type==="paragraph"){c.tokens[0].raw=c.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),c.tokens[0].text=c.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}}let p=this.rules.other.listTaskCheckbox.exec(c.raw);if(p){let d={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};c.checked=d.checked,i.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=d.raw+c.tokens[0].raw,c.tokens[0].text=d.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(d)):c.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):c.tokens.unshift(d)}}if(!i.loose){let p=c.tokens.filter(u=>u.type==="space"),d=p.length>0&&p.some(u=>this.rules.other.anyLine.test(u.raw));i.loose=d}}if(i.loose)for(let c of i.items){c.loose=!0;for(let p of c.tokens)p.type==="text"&&(p.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ba(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let r of s)this.rules.other.tableAlignRight.test(r)?a.align.push("right"):this.rules.other.tableAlignCenter.test(r)?a.align.push("center"):this.rules.other.tableAlignLeft.test(r)?a.align.push("left"):a.align.push(null);for(let r=0;r<n.length;r++)a.header.push({text:n[r],tokens:this.lexer.inline(n[r]),header:!0,align:a.align[r]});for(let r of i)a.rows.push(ba(r,a.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[c]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let a=gt(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{let a=Iu(t[2],"()");if(a===-2)return;if(a>-1){let r=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(s);a&&(s=a[1],i=a[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),$a(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[s.toLowerCase()];if(!i){let a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return $a(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,a,r,l=i,c=0,p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+i);(s=p.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(r=[...a].length,s[3]||s[4]){l+=r;continue}else if((s[5]||s[6])&&i%3&&!((i+r)%3)){c+=r;continue}if(l-=r,l>0)continue;r=Math.min(r,r+l+c);let d=[...s[0]][0].length,u=e.slice(0,i+s.index+d+r);if(Math.min(i,r)%2){let g=u.slice(1,-1);return{type:"em",raw:u,text:g,tokens:this.lexer.inlineTokens(g)}}let h=u.slice(2,-2);return{type:"strong",raw:u,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},ie=class ws{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ke,this.options.tokenizer=this.options.tokenizer||new en,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Y,block:zt.normal,inline:ht.normal};this.options.pedantic?(n.block=zt.pedantic,n.inline=ht.pedantic):this.options.gfm&&(n.block=zt.gfm,this.options.breaks?n.inline=ht.breaks:n.inline=ht.gfm),this.tokenizer.rules=n}static get rules(){return{block:zt,inline:ht}}static lex(t,n){return new ws(n).lex(t)}static lexInline(t,n){return new ws(n).inlineTokens(t)}lex(t){t=t.replace(Y.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(Y.tabCharGlobal,"    ").replace(Y.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(r=>(i=r.call({lexer:this},t,n))?(t=t.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let r=n.at(-1);i.raw.length===1&&r!==void 0?r.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let r=n.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.at(-1).src=r.text):n.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let r=n.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+i.raw,r.text+=`
`+i.raw,this.inlineQueue.at(-1).src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),n.push(i);continue}let a=t;if(this.options.extensions?.startBlock){let r=1/0,l=t.slice(1),c;this.options.extensions.startBlock.forEach(p=>{c=p.call({lexer:this},l),typeof c=="number"&&c>=0&&(r=Math.min(r,c))}),r<1/0&&r>=0&&(a=t.substring(0,r+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=n.at(-1);s&&r?.type==="paragraph"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):n.push(i),s=a.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let r=n.at(-1);r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):n.push(i);continue}if(t){let r="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(r);break}else throw new Error(r)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,i=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,i.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)a=i[2]?i[2].length:0,s=s.slice(0,i.index+a)+"["+"a".repeat(i[0].length-a-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let r=!1,l="";for(;t;){r||(l=""),r=!1;let c;if(this.options.extensions?.inline?.some(d=>(c=d.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);let d=n.at(-1);c.type==="text"&&d?.type==="text"?(d.raw+=c.raw,d.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,s,l)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let p=t;if(this.options.extensions?.startInline){let d=1/0,u=t.slice(1),h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},u),typeof h=="number"&&h>=0&&(d=Math.min(d,h))}),d<1/0&&d>=0&&(p=t.substring(0,d+1))}if(c=this.tokenizer.inlineText(p)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),r=!0;let d=n.at(-1);d?.type==="text"?(d.raw+=c.raw,d.text+=c.text):n.push(c);continue}if(t){let d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return n}},tn=class{options;parser;constructor(e){this.options=e||Ke}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(Y.notSpaceStart)?.[0],i=e.replace(Y.endingNewline,"")+`
`;return s?'<pre><code class="language-'+me(s)+'">'+(n?i:me(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:me(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let r=0;r<e.items.length;r++){let l=e.items[r];s+=this.listitem(l)}let i=t?"ol":"ul",a=t&&n!==1?' start="'+n+'"':"";return"<"+i+a+`>
`+s+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let s="";for(let i=0;i<e.rows.length;i++){let a=e.rows[i];n="";for(let r=0;r<a.length;r++)n+=this.tablecell(a[r]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${me(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),i=ya(e);if(i===null)return s;e=i;let a='<a href="'+e+'"';return t&&(a+=' title="'+me(t)+'"'),a+=">"+s+"</a>",a}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let i=ya(e);if(i===null)return me(n);e=i;let a=`<img src="${e}" alt="${n}"`;return t&&(a+=` title="${me(t)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:me(e.text)}},oi=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},ae=class xs{options;renderer;textRenderer;constructor(t){this.options=t||Ke,this.options.renderer=this.options.renderer||new tn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new oi}static parse(t,n){return new xs(n).parse(t)}static parseInline(t,n){return new xs(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let i=t[s];if(this.options.extensions?.renderers?.[i.type]){let r=i,l=this.options.extensions.renderers[r.type].call({parser:this},r);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(r.type)){n+=l||"";continue}}let a=i;switch(a.type){case"space":{n+=this.renderer.space(a);break}case"hr":{n+=this.renderer.hr(a);break}case"heading":{n+=this.renderer.heading(a);break}case"code":{n+=this.renderer.code(a);break}case"table":{n+=this.renderer.table(a);break}case"blockquote":{n+=this.renderer.blockquote(a);break}case"list":{n+=this.renderer.list(a);break}case"checkbox":{n+=this.renderer.checkbox(a);break}case"html":{n+=this.renderer.html(a);break}case"def":{n+=this.renderer.def(a);break}case"paragraph":{n+=this.renderer.paragraph(a);break}case"text":{n+=this.renderer.text(a);break}default:{let r='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}parseInline(t,n=this.renderer){let s="";for(let i=0;i<t.length;i++){let a=t[i];if(this.options.extensions?.renderers?.[a.type]){let l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=l||"";continue}}let r=a;switch(r.type){case"escape":{s+=n.text(r);break}case"html":{s+=n.html(r);break}case"link":{s+=n.link(r);break}case"image":{s+=n.image(r);break}case"checkbox":{s+=n.checkbox(r);break}case"strong":{s+=n.strong(r);break}case"em":{s+=n.em(r);break}case"codespan":{s+=n.codespan(r);break}case"br":{s+=n.br(r);break}case"del":{s+=n.del(r);break}case"text":{s+=n.text(r);break}default:{let l='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},vt=class{options;block;constructor(e){this.options=e||Ke}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?ie.lex:ie.lexInline}provideParser(){return this.block?ae.parse:ae.parseInline}},Lu=class{defaults=Js();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ae;Renderer=tn;TextRenderer=oi;Lexer=ie;Tokenizer=en;Hooks=vt;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let i=s;for(let a of i.header)n=n.concat(this.walkTokens(a.tokens,t));for(let a of i.rows)for(let r of a)n=n.concat(this.walkTokens(r.tokens,t));break}case"list":{let i=s;n=n.concat(this.walkTokens(i.items,t));break}default:{let i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{let r=i[a].flat(1/0);n=n.concat(this.walkTokens(r,t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let a=t.renderers[i.name];a?t.renderers[i.name]=function(...r){let l=i.renderer.apply(this,r);return l===!1&&(l=a.apply(this,r)),l}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=t[i.level];a?a.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){let i=this.defaults.renderer||new tn(this.defaults);for(let a in n.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let r=a,l=n.renderer[r],c=i[r];i[r]=(...p)=>{let d=l.apply(i,p);return d===!1&&(d=c.apply(i,p)),d||""}}s.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new en(this.defaults);for(let a in n.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let r=a,l=n.tokenizer[r],c=i[r];i[r]=(...p)=>{let d=l.apply(i,p);return d===!1&&(d=c.apply(i,p)),d}}s.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new vt;for(let a in n.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let r=a,l=n.hooks[r],c=i[r];vt.passThroughHooks.has(a)?i[r]=p=>{if(this.defaults.async&&vt.passThroughHooksRespectAsync.has(a))return(async()=>{let u=await l.call(i,p);return c.call(i,u)})();let d=l.call(i,p);return c.call(i,d)}:i[r]=(...p)=>{if(this.defaults.async)return(async()=>{let u=await l.apply(i,p);return u===!1&&(u=await c.apply(i,p)),u})();let d=l.apply(i,p);return d===!1&&(d=c.apply(i,p)),d}}s.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,a=n.walkTokens;s.walkTokens=function(r){let l=[];return l.push(a.call(this,r)),i&&(l=l.concat(i.call(this,r))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ie.lex(e,t??this.defaults)}parser(e,t){return ae.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},i={...this.defaults,...s},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let r=i.hooks?await i.hooks.preprocess(t):t,l=await(i.hooks?await i.hooks.provideLexer():e?ie.lex:ie.lexInline)(r,i),c=i.hooks?await i.hooks.processAllTokens(l):l;i.walkTokens&&await Promise.all(this.walkTokens(c,i.walkTokens));let p=await(i.hooks?await i.hooks.provideParser():e?ae.parse:ae.parseInline)(c,i);return i.hooks?await i.hooks.postprocess(p):p})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let r=(i.hooks?i.hooks.provideLexer():e?ie.lex:ie.lexInline)(t,i);i.hooks&&(r=i.hooks.processAllTokens(r)),i.walkTokens&&this.walkTokens(r,i.walkTokens);let l=(i.hooks?i.hooks.provideParser():e?ae.parse:ae.parseInline)(r,i);return i.hooks&&(l=i.hooks.postprocess(l)),l}catch(r){return a(r)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+me(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Ue=new Lu;function N(e,t){return Ue.parse(e,t)}N.options=N.setOptions=function(e){return Ue.setOptions(e),N.defaults=Ue.defaults,Gr(N.defaults),N};N.getDefaults=Js;N.defaults=Ke;N.use=function(...e){return Ue.use(...e),N.defaults=Ue.defaults,Gr(N.defaults),N};N.walkTokens=function(e,t){return Ue.walkTokens(e,t)};N.parseInline=Ue.parseInline;N.Parser=ae;N.parser=ae.parse;N.Renderer=tn;N.TextRenderer=oi;N.Lexer=ie;N.lexer=ie.lex;N.Tokenizer=en;N.Hooks=vt;N.parse=N;N.options;N.setOptions;N.use;N.walkTokens;N.parseInline;ae.parse;ie.lex;N.setOptions({gfm:!0,breaks:!0,mangle:!1});const wa=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul"],xa=["class","href","rel","target","title","start"];let Aa=!1;const Ru=14e4,Pu=4e4,Nu=200,Xn=5e4,Pe=new Map;function Ou(e){const t=Pe.get(e);return t===void 0?null:(Pe.delete(e),Pe.set(e,t),t)}function ka(e,t){if(Pe.set(e,t),Pe.size<=Nu)return;const n=Pe.keys().next().value;n&&Pe.delete(n)}function Du(){Aa||(Aa=!0,bs.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function As(e){const t=e.trim();if(!t)return"";if(Du(),t.length<=Xn){const r=Ou(t);if(r!==null)return r}const n=ar(t,Ru),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>Pu){const l=`<pre class="code-block">${Bu(`${n.text}${s}`)}</pre>`,c=bs.sanitize(l,{ALLOWED_TAGS:wa,ALLOWED_ATTR:xa});return t.length<=Xn&&ka(t,c),c}const i=N.parse(`${n.text}${s}`),a=bs.sanitize(i,{ALLOWED_TAGS:wa,ALLOWED_ATTR:xa});return t.length<=Xn&&ka(t,a),a}function Bu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Fu=1500,Uu=2e3,ao="Copy as markdown",Ku="Copied",Hu="Copy failed";async function zu(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function jt(e,t){e.title=t,e.setAttribute("aria-label",t)}function ju(e){const t=e.label??ao;return o`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(s?.querySelector(".chat-copy-btn__icon"),!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const i=await zu(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!i){s.dataset.error="1",jt(s,Hu),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,jt(s,t))},Uu);return}s.dataset.copied="1",jt(s,Ku),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,jt(s,t))},Fu)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${W.copy}</span>
        <span class="chat-copy-btn__icon-check">${W.check}</span>
      </span>
    </button>
  `}function qu(e){return ju({text:()=>e,label:ao})}const Vu={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},Wu={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"反应",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"反应列表",detailKeys:["channelId","messageId"]},sticker:{label:"贴纸",detailKeys:["to","stickerIds"]},poll:{label:"投票",detailKeys:["question","to"]},permissions:{label:"权限",detailKeys:["channelId"]},readMessages:{label:"读取消息",detailKeys:["channelId","limit"]},sendMessage:{label:"发送",detailKeys:["to","content"]},editMessage:{label:"编辑",detailKeys:["channelId","messageId"]},deleteMessage:{label:"删除",detailKeys:["channelId","messageId"]},threadCreate:{label:"创建话题",detailKeys:["channelId","name"]},threadList:{label:"话题列表",detailKeys:["guildId","channelId"]},threadReply:{label:"话题回复",detailKeys:["channelId","content"]},pinMessage:{label:"置顶",detailKeys:["channelId","messageId"]},unpinMessage:{label:"取消置顶",detailKeys:["channelId","messageId"]},listPins:{label:"置顶列表",detailKeys:["channelId"]},searchMessages:{label:"搜索",detailKeys:["guildId","content"]},memberInfo:{label:"成员",detailKeys:["guildId","userId"]},roleInfo:{label:"角色",detailKeys:["guildId"]},emojiList:{label:"表情列表",detailKeys:["guildId"]},roleAdd:{label:"添加角色",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"移除角色",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"频道",detailKeys:["channelId"]},channelList:{label:"频道列表",detailKeys:["guildId"]},voiceStatus:{label:"语音",detailKeys:["guildId","userId"]},eventList:{label:"事件",detailKeys:["guildId"]},eventCreate:{label:"创建事件",detailKeys:["guildId","name"]},timeout:{label:"超时",detailKeys:["guildId","userId"]},kick:{label:"踢出",detailKeys:["guildId","userId"]},ban:{label:"封禁",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"反应",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"反应列表",detailKeys:["channelId","messageId"]},sendMessage:{label:"发送",detailKeys:["to","content"]},editMessage:{label:"编辑",detailKeys:["channelId","messageId"]},deleteMessage:{label:"删除",detailKeys:["channelId","messageId"]},readMessages:{label:"读取消息",detailKeys:["channelId","limit"]},pinMessage:{label:"置顶",detailKeys:["channelId","messageId"]},unpinMessage:{label:"取消置顶",detailKeys:["channelId","messageId"]},listPins:{label:"置顶列表",detailKeys:["channelId"]},memberInfo:{label:"成员",detailKeys:["userId"]},emojiList:{label:"表情列表"}}}},Gu={fallback:Vu,tools:Wu},ro=Gu,Sa=ro.fallback??{icon:"puzzle"},Qu=ro.tools??{};function Yu(e){return(e??"tool").trim()}function Zu(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function Xu(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function oo(e){if(e!=null){if(typeof e=="string"){const t=e.trim();if(!t)return;const n=t.split(/\r?\n/)[0]?.trim()??"";return n?n.length>160?`${n.slice(0,157)}…`:n:void 0}if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e)){const t=e.map(s=>oo(s)).filter(s=>!!s);if(t.length===0)return;const n=t.slice(0,3).join(", ");return t.length>3?`${n}…`:n}}}function Ju(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function ep(e,t){for(const n of t){const s=Ju(e,n),i=oo(s);if(i)return i}}function tp(e){if(!e||typeof e!="object")return;const t=e,n=typeof t.path=="string"?t.path:void 0;if(!n)return;const s=typeof t.offset=="number"?t.offset:void 0,i=typeof t.limit=="number"?t.limit:void 0;return s!==void 0&&i!==void 0?`${n}:${s}-${s+i}`:n}function np(e){if(!e||typeof e!="object")return;const t=e;return typeof t.path=="string"?t.path:void 0}function sp(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function ip(e){const t=Yu(e.name),n=t.toLowerCase(),s=Qu[n],i=s?.icon??Sa.icon??"puzzle",a=s?.title??Zu(t),r=s?.label??t,l=e.args&&typeof e.args=="object"?e.args.action:void 0,c=typeof l=="string"?l.trim():void 0,p=sp(s,c),d=Xu(p?.label??c);let u;n==="read"&&(u=tp(e.args)),!u&&(n==="write"||n==="edit"||n==="attach")&&(u=np(e.args));const h=p?.detailKeys??s?.detailKeys??Sa.detailKeys??[];return!u&&h.length>0&&(u=ep(e.args,h)),!u&&e.meta&&(u=e.meta),u&&(u=rp(u)),{name:t,icon:i,title:a,label:r,verb:d,detail:u}}function ap(e){const t=[];if(e.verb&&t.push(e.verb),e.detail&&t.push(e.detail),t.length!==0)return t.join(" · ")}function rp(e){return e&&e.replace(/\/Users\/[^/]+/g,"~").replace(/\/home\/[^/]+/g,"~")}const op=80,lp=2,_a=100;function cp(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function dp(e){const t=e.split(`
`),n=t.slice(0,lp),s=n.join(`
`);return s.length>_a?s.slice(0,_a)+"…":n.length<t.length?s+"…":s}function up(e){const t=e,n=pp(t.content),s=[];for(const i of n){const a=String(i.type??"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(a)||typeof i.name=="string"&&i.arguments!=null)&&s.push({kind:"call",name:i.name??"tool",args:fp(i.arguments??i.args)})}for(const i of n){const a=String(i.type??"").toLowerCase();if(a!=="toolresult"&&a!=="tool_result")continue;const r=hp(i),l=typeof i.name=="string"?i.name:"tool";s.push({kind:"result",name:l,text:r})}if(zr(e)&&!s.some(i=>i.kind==="result")){const i=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",a=rr(e)??void 0;s.push({kind:"result",name:i,text:a})}return s}function Ta(e,t){const n=ip({name:e.name,args:e.args}),s=ap(n),i=!!e.text?.trim(),a=!!t,r=a?()=>{if(i){t(cp(e.text));return}const u=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(u)}:void 0,l=i&&(e.text?.length??0)<=op,c=i&&!l,p=i&&l,d=!i;return o`
    <div
      class="chat-tool-card ${a?"chat-tool-card--clickable":""}"
      @click=${r}
      role=${a?"button":v}
      tabindex=${a?"0":v}
      @keydown=${a?u=>{u.key!=="Enter"&&u.key!==" "||(u.preventDefault(),r?.())}:v}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${W[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${a?o`<span class="chat-tool-card__action">${i?"View":""} ${W.check}</span>`:v}
        ${d&&!a?o`<span class="chat-tool-card__status">${W.check}</span>`:v}
      </div>
      ${s?o`<div class="chat-tool-card__detail">${s}</div>`:v}
      ${d?o`<div class="chat-tool-card__status-text muted">Completed</div>`:v}
      ${c?o`<div class="chat-tool-card__preview mono">${dp(e.text)}</div>`:v}
      ${p?o`<div class="chat-tool-card__inline mono">${e.text}</div>`:v}
    </div>
  `}function pp(e){return Array.isArray(e)?e.filter(Boolean):[]}function fp(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function hp(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function gp(e){const n=e.content,s=[];if(Array.isArray(n))for(const i of n){if(typeof i!="object"||i===null)continue;const a=i;if(a.type==="image"){const r=a.source;if(r?.type==="base64"&&typeof r.data=="string"){const l=r.data,c=r.media_type||"image/png",p=l.startsWith("data:")?l:`data:${c};base64,${l}`;s.push({url:p})}else typeof a.url=="string"&&s.push({url:a.url})}else if(a.type==="image_url"){const r=a.image_url;typeof r?.url=="string"&&s.push({url:r.url})}}return s}function vp(e){return o`
    <div class="chat-group assistant">
      ${li("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function mp(e,t,n,s){const i=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),a=s?.name??"Assistant";return o`
    <div class="chat-group assistant">
      ${li("assistant",s)}
      <div class="chat-group-messages">
        ${lo({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${i}</span>
        </div>
      </div>
    </div>
  `}function yp(e,t){const n=Xs(e.role),s=t.assistantName??"Assistant",i=n==="user"?"You":n==="assistant"?s:n,a=n==="user"?"user":n==="assistant"?"assistant":"other",r=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return o`
    <div class="chat-group ${a}">
      ${li(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((l,c)=>lo(l.message,{isStreaming:e.isStreaming&&c===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${i}</span>
          <span class="chat-group-timestamp">${r}</span>
        </div>
      </div>
    </div>
  `}function li(e,t){const n=Xs(e),s=t?.name?.trim()||"Assistant",i=t?.avatar?.trim()||"",a=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",r=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return i&&n==="assistant"?bp(i)?o`<img
        class="chat-avatar ${r}"
        src="${i}"
        alt="${s}"
      />`:o`<div class="chat-avatar ${r}">${i}</div>`:o`<div class="chat-avatar ${r}">${a}</div>`}function bp(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||/^\//.test(e)}function $p(e){return e.length===0?v:o`
    <div class="chat-message-images">
      ${e.map(t=>o`
          <img
            src=${t.url}
            alt=${t.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function lo(e,t,n){const s=e,i=typeof s.role=="string"?s.role:"unknown",a=zr(e)||i.toLowerCase()==="toolresult"||i.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",r=up(e),l=r.length>0,c=gp(e),p=c.length>0,d=rr(e),u=t.showReasoning&&i==="assistant"?kl(e):null,h=d?.trim()?d:null,g=u?_l(u):null,$=h,w=i==="assistant"&&!!$?.trim(),A=["chat-bubble",w?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!$&&l&&a?o`${r.map(_=>Ta(_,n))}`:!$&&!l&&!p?v:o`
    <div class="${A}">
      ${w?qu($):v}
      ${$p(c)}
      ${g?o`<div class="chat-thinking">${gs(As(g))}</div>`:v}
      ${$?o`<div class="chat-text">${gs(As($))}</div>`:v}
      ${r.map(_=>Ta(_,n))}
    </div>
  `}function wp(e){return o`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${W.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?o`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?o`<div class="sidebar-markdown">${gs(As(e.content))}</div>`:o`<div class="muted">No content available</div>`}
      </div>
    </div>
  `}var xp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,mn=(e,t,n,s)=>{for(var i=s>1?void 0:s?Ap(t,n):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(s?r(t,n,i):r(i))||i);return s&&i&&xp(t,n,i),i};let nt=class extends Ze{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,i=(e.clientX-this.startX)/n;let a=this.startRatio+i;a=Math.max(this.minRatio,Math.min(this.maxRatio,a)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:a},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return o``}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};nt.styles=Do`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }

    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }

    :host(:hover) {
      background: var(--accent, #007bff);
    }

    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;mn([rn({type:Number})],nt.prototype,"splitRatio",2);mn([rn({type:Number})],nt.prototype,"minRatio",2);mn([rn({type:Number})],nt.prototype,"maxRatio",2);nt=mn([Xa("resizable-divider")],nt);const kp=5e3;function Sp(e){return e?e.active?o`
      <div class="callout info compaction-indicator compaction-indicator--active">
        ${W.loader} 正在压缩上下文...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<kp?o`
        <div class="callout success compaction-indicator compaction-indicator--complete">
          ${W.check} 上下文已压缩
        </div>
      `:v:v}function _p(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function Tp(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let i=0;i<n.length;i++){const a=n[i];a.type.startsWith("image/")&&s.push(a)}if(s.length!==0){e.preventDefault();for(const i of s){const a=i.getAsFile();if(!a)continue;const r=new FileReader;r.onload=()=>{const l=r.result,c={id:_p(),dataUrl:l,mimeType:a.type},p=t.attachments??[];t.onAttachmentsChange?.([...p,c])},r.readAsDataURL(a)}}}function Ep(e){const t=e.attachments??[];return t.length===0?v:o`
    <div class="chat-attachments">
      ${t.map(n=>o`
          <div class="chat-attachment">
            <img
              src=${n.dataUrl}
              alt="附件预览"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="移除附件"
              @click=${()=>{const s=(e.attachments??[]).filter(i=>i.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${W.x}
            </button>
          </div>
        `)}
    </div>
  `}function Cp(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),a=e.sessions?.sessions?.find(g=>g.key===e.sessionKey)?.reasoningLevel??"off",r=e.showThinking&&a!=="off",l={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},c=(e.attachments?.length??0)>0,p=e.connected?c?"添加消息或粘贴更多图片...":"消息（回车发送，Shift+回车换行，可粘贴图片）":"连接到网关以开始聊天…",d=e.splitRatio??.6,u=!!(e.sidebarOpen&&e.onCloseSidebar),h=o`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?o`<div class="muted">正在加载聊天…</div>`:v}
      ${Kr(Mp(e),g=>g.key,g=>g.kind==="reading-indicator"?vp(l):g.kind==="stream"?mp(g.text,g.startedAt,e.onOpenSidebar,l):g.kind==="group"?yp(g,{onOpenSidebar:e.onOpenSidebar,showReasoning:r,assistantName:e.assistantName,assistantAvatar:l.avatar}):v)}
    </div>
  `;return o`
    <section class="card chat">
      ${e.disabledReason?o`<div class="callout">${e.disabledReason}</div>`:v}

      ${e.error?o`<div class="callout danger">${e.error}</div>`:v}

      ${Sp(e.compactionStatus)}

      ${e.focusMode?o`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="退出专注模式"
              title="退出专注模式"
            >
              ${W.x}
            </button>
          `:v}

      <div
        class="chat-split-container ${u?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${u?`0 0 ${d*100}%`:"1 1 100%"}"
        >
          ${h}
        </div>

        ${u?o`
              <resizable-divider
                .splitRatio=${d}
                @resize=${g=>e.onSplitRatioChange?.(g.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${wp({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:v}
      </div>

      ${e.queue.length?o`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">队列（${e.queue.length}）</div>
              <div class="chat-queue__list">
                ${e.queue.map(g=>o`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${g.text||(g.attachments?.length?`图片（${g.attachments.length}）`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="移除队列消息"
                        @click=${()=>e.onQueueRemove(g.id)}
                      >
                        ${W.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:v}

      <div class="chat-compose">
        ${Ep(e)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>消息</span>
            <textarea
              .value=${e.draft}
              ?disabled=${!e.connected}
              @keydown=${g=>{g.key==="Enter"&&(g.isComposing||g.keyCode===229||g.shiftKey||e.connected&&(g.preventDefault(),t&&e.onSend()))}}
              @input=${g=>e.onDraftChange(g.target.value)}
              @paste=${g=>Tp(g,e)}
              placeholder=${p}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"停止":"新会话"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?"队列":"发送"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}const Ea=200;function Ip(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const i=Hr(s.message),a=Xs(i.role),r=i.timestamp||Date.now();!n||n.role!==a?(n&&t.push(n),n={kind:"group",key:`group:${a}:${s.key}`,role:a,messages:[{message:s.message,key:s.key}],timestamp:r,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function Mp(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],i=Math.max(0,n.length-Ea);i>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`显示最后 ${Ea} 条消息（隐藏 ${i} 条）。`,timestamp:Date.now()}});for(let a=i;a<n.length;a++){const r=n[a],l=Hr(r);!e.showThinking&&l.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:Ca(r,a),message:r})}if(e.showThinking)for(let a=0;a<s.length;a++)t.push({kind:"message",key:Ca(s[a],a+n.length),message:s[a]});if(e.stream!==null){const a=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:a,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:a})}return Ip(t)}function Ca(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const i=typeof n.id=="string"?n.id:"";if(i)return`msg:${i}`;const a=typeof n.messageId=="string"?n.messageId:"";if(a)return`msg:${a}`;const r=typeof n.timestamp=="number"?n.timestamp:null,l=typeof n.role=="string"?n.role:"unknown";return r!=null?`msg:${l}:${r}:${t}`:`msg:${l}:${t}`}function ue(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function co(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(ue(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function yn(e){return e.filter(t=>typeof t=="string").join(".")}function te(e,t){const n=yn(e),s=t[n];if(s)return s;const i=n.split(".");for(const[a,r]of Object.entries(t)){if(!a.includes("*"))continue;const l=a.split(".");if(l.length!==i.length)continue;let c=!0;for(let p=0;p<i.length;p+=1)if(l[p]!=="*"&&l[p]!==i[p]){c=!1;break}if(c)return r}}function $e(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function Lp(e){const t=yn(e).toLowerCase();return t.includes("token")||t.includes("password")||t.includes("secret")||t.includes("apikey")||t.endsWith("key")}const Rp=new Set(["title","description","default","nullable"]);function Pp(e){return Object.keys(e??{}).filter(n=>!Rp.has(n)).length===0}function Np(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const _t={chevronDown:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,plus:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,minus:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,trash:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,edit:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`};function be(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:r,onPatch:l}=e,c=e.showLabel??!0,p=ue(t),d=te(s,i),u=d?.label??t.title??$e(String(s.at(-1))),h=d?.help??t.description,g=yn(s);if(a.has(g))return o`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${u}</div>
      <div class="cfg-field__error">不支持的模式节点。请使用原始模式。</div>
    </div>`;if(t.anyOf||t.oneOf){const w=(t.anyOf??t.oneOf??[]).filter(E=>!(E.type==="null"||Array.isArray(E.type)&&E.type.includes("null")));if(w.length===1)return be({...e,schema:w[0]});const A=E=>{if(E.const!==void 0)return E.const;if(E.enum&&E.enum.length===1)return E.enum[0]},_=w.map(A),M=_.every(E=>E!==void 0);if(M&&_.length>0&&_.length<=5){const E=n??t.default;return o`
        <div class="cfg-field">
          ${c?o`<label class="cfg-field__label">${u}</label>`:v}
          ${h?o`<div class="cfg-field__help">${h}</div>`:v}
          <div class="cfg-segmented">
            ${_.map((C,pe)=>o`
              <button
                type="button"
                class="cfg-segmented__btn ${C===E||String(C)===String(E)?"active":""}"
                ?disabled=${r}
                @click=${()=>l(s,C)}
              >
                ${String(C)}
              </button>
            `)}
          </div>
        </div>
      `}if(M&&_.length>5)return Ma({...e,options:_,value:n??t.default});const P=new Set(w.map(E=>ue(E)).filter(Boolean)),I=new Set([...P].map(E=>E==="integer"?"number":E));if([...I].every(E=>["string","number","boolean"].includes(E))){const E=I.has("string"),C=I.has("number");if(I.has("boolean")&&I.size===1)return be({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(E||C)return Ia({...e,inputType:C&&!E?"number":"text"})}}if(t.enum){const $=t.enum;if($.length<=5){const w=n??t.default;return o`
        <div class="cfg-field">
          ${c?o`<label class="cfg-field__label">${u}</label>`:v}
          ${h?o`<div class="cfg-field__help">${h}</div>`:v}
          <div class="cfg-segmented">
            ${$.map(A=>o`
              <button
                type="button"
                class="cfg-segmented__btn ${A===w||String(A)===String(w)?"active":""}"
                ?disabled=${r}
                @click=${()=>l(s,A)}
              >
                ${String(A)}
              </button>
            `)}
          </div>
        </div>
      `}return Ma({...e,options:$,value:n??t.default})}if(p==="object")return Dp(e);if(p==="array")return Bp(e);if(p==="boolean"){const $=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return o`
      <label class="cfg-toggle-row ${r?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${u}</span>
          ${h?o`<span class="cfg-toggle-row__help">${h}</span>`:v}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${$}
            ?disabled=${r}
            @change=${w=>l(s,w.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return p==="number"||p==="integer"?Op(e):p==="string"?Ia({...e,inputType:"text"}):o`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${u}</div>
      <div class="cfg-field__error">不支持的类型: ${p}。请使用原始模式。</div>
    </div>
  `}function Ia(e){const{schema:t,value:n,path:s,hints:i,disabled:a,onPatch:r,inputType:l}=e,c=e.showLabel??!0,p=te(s,i),d=p?.label??t.title??$e(String(s.at(-1))),u=p?.help??t.description,h=p?.sensitive??Lp(s),g=p?.placeholder??(h?"••••":t.default!==void 0?`Default: ${t.default}`:""),$=n??"";return o`
    <div class="cfg-field">
      ${c?o`<label class="cfg-field__label">${d}</label>`:v}
      ${u?o`<div class="cfg-field__help">${u}</div>`:v}
      <div class="cfg-input-wrap">
        <input
          type=${h?"password":l}
          class="cfg-input"
          placeholder=${g}
          .value=${$==null?"":String($)}
          ?disabled=${a}
          @input=${w=>{const A=w.target.value;if(l==="number"){if(A.trim()===""){r(s,void 0);return}const _=Number(A);r(s,Number.isNaN(_)?A:_);return}r(s,A)}}
        />
        ${t.default!==void 0?o`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${a}
            @click=${()=>r(s,t.default)}
          >↺</button>
        `:v}
      </div>
    </div>
  `}function Op(e){const{schema:t,value:n,path:s,hints:i,disabled:a,onPatch:r}=e,l=e.showLabel??!0,c=te(s,i),p=c?.label??t.title??$e(String(s.at(-1))),d=c?.help??t.description,u=n??t.default??"",h=typeof u=="number"?u:0;return o`
    <div class="cfg-field">
      ${l?o`<label class="cfg-field__label">${p}</label>`:v}
      ${d?o`<div class="cfg-field__help">${d}</div>`:v}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>r(s,h-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${u==null?"":String(u)}
          ?disabled=${a}
          @input=${g=>{const $=g.target.value,w=$===""?void 0:Number($);r(s,w)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>r(s,h+1)}
        >+</button>
      </div>
    </div>
  `}function Ma(e){const{schema:t,value:n,path:s,hints:i,disabled:a,options:r,onPatch:l}=e,c=e.showLabel??!0,p=te(s,i),d=p?.label??t.title??$e(String(s.at(-1))),u=p?.help??t.description,h=n??t.default,g=r.findIndex(w=>w===h||String(w)===String(h)),$="__unset__";return o`
    <div class="cfg-field">
      ${c?o`<label class="cfg-field__label">${d}</label>`:v}
      ${u?o`<div class="cfg-field__help">${u}</div>`:v}
      <select
        class="cfg-select"
        ?disabled=${a}
        .value=${g>=0?String(g):$}
        @change=${w=>{const A=w.target.value;l(s,A===$?void 0:r[Number(A)])}}
      >
        <option value=${$}>Select...</option>
        ${r.map((w,A)=>o`
          <option value=${String(A)}>${String(w)}</option>
        `)}
      </select>
    </div>
  `}function Dp(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:r,onPatch:l}=e;e.showLabel;const c=te(s,i),p=c?.label??t.title??$e(String(s.at(-1))),d=c?.help??t.description,u=n??t.default,h=u&&typeof u=="object"&&!Array.isArray(u)?u:{},g=t.properties??{},w=Object.entries(g).sort((P,I)=>{const E=te([...s,P[0]],i)?.order??0,C=te([...s,I[0]],i)?.order??0;return E!==C?E-C:P[0].localeCompare(I[0])}),A=new Set(Object.keys(g)),_=t.additionalProperties,M=!!_&&typeof _=="object";return s.length===1?o`
      <div class="cfg-fields">
        ${w.map(([P,I])=>be({schema:I,value:h[P],path:[...s,P],hints:i,unsupported:a,disabled:r,onPatch:l}))}
        ${M?La({schema:_,value:h,path:s,hints:i,unsupported:a,disabled:r,reservedKeys:A,onPatch:l}):v}
      </div>
    `:o`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${p}</span>
        <span class="cfg-object__chevron">${_t.chevronDown}</span>
      </summary>
      ${d?o`<div class="cfg-object__help">${d}</div>`:v}
      <div class="cfg-object__content">
        ${w.map(([P,I])=>be({schema:I,value:h[P],path:[...s,P],hints:i,unsupported:a,disabled:r,onPatch:l}))}
        ${M?La({schema:_,value:h,path:s,hints:i,unsupported:a,disabled:r,reservedKeys:A,onPatch:l}):v}
      </div>
    </details>
  `}function Bp(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:r,onPatch:l}=e,c=e.showLabel??!0,p=te(s,i),d=p?.label??t.title??$e(String(s.at(-1))),u=p?.help??t.description,h=Array.isArray(t.items)?t.items[0]:t.items;if(!h)return o`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${d}</div>
        <div class="cfg-field__error">不支持的数组模式。请使用原始模式。</div>
      </div>
    `;const g=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return o`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${c?o`<span class="cfg-array__label">${d}</span>`:v}
        <span class="cfg-array__count">${g.length} item${g.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${r}
          @click=${()=>{const $=[...g,co(h)];l(s,$)}}
        >
          <span class="cfg-array__add-icon">${_t.plus}</span>
          Add
        </button>
      </div>
      ${u?o`<div class="cfg-array__help">${u}</div>`:v}

      ${g.length===0?o`
        <div class="cfg-array__empty">
          No items yet. Click "Add" to create one.
        </div>
      `:o`
        <div class="cfg-array__items">
          ${g.map(($,w)=>o`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${w+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${r}
                  @click=${()=>{const A=[...g];A.splice(w,1),l(s,A)}}
                >
                  ${_t.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${be({schema:h,value:$,path:[...s,w],hints:i,unsupported:a,disabled:r,showLabel:!1,onPatch:l})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function La(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:r,reservedKeys:l,onPatch:c}=e,p=Pp(t),d=Object.entries(n??{}).filter(([u])=>!l.has(u));return o`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${r}
          @click=${()=>{const u={...n??{}};let h=1,g=`custom-${h}`;for(;g in u;)h+=1,g=`custom-${h}`;u[g]=p?{}:co(t),c(s,u)}}
        >
          <span class="cfg-map__add-icon">${_t.plus}</span>
          Add Entry
        </button>
      </div>

      ${d.length===0?o`
        <div class="cfg-map__empty">No custom entries.</div>
      `:o`
        <div class="cfg-map__items">
          ${d.map(([u,h])=>{const g=[...s,u],$=Np(h);return o`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${u}
                    ?disabled=${r}
                    @change=${w=>{const A=w.target.value.trim();if(!A||A===u)return;const _={...n??{}};A in _||(_[A]=_[u],delete _[u],c(s,_))}}
                  />
                </div>
                <div class="cfg-map__item-value">
                  ${p?o`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${$}
                          ?disabled=${r}
                          @change=${w=>{const A=w.target,_=A.value.trim();if(!_){c(g,void 0);return}try{c(g,JSON.parse(_))}catch{A.value=$}}}
                        ></textarea>
                      `:be({schema:t,value:h,path:g,hints:i,unsupported:a,disabled:r,showLabel:!1,onPatch:c})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${r}
                  @click=${()=>{const w={...n??{}};delete w[u],c(s,w)}}
                >
                  ${_t.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const Ra={env:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,update:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,agents:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path><circle cx="8" cy="14" r="1"></circle><circle cx="16" cy="14" r="1"></circle></svg>`,auth:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,channels:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,messages:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,commands:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,hooks:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,skills:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,tools:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,gateway:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,wizard:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8 19 13"></path><path d="M15 9h0"></path><path d="M17.8 6.2 19 5"></path><path d="m3 21 9-9"></path><path d="M12.2 6.2 11 5"></path></svg>`,meta:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>`,logging:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,browser:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>`,ui:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,models:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,bindings:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,broadcast:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>`,audio:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,session:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,cron:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,web:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,discovery:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,canvasHost:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,talk:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,plugins:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v6"></path><path d="m4.93 10.93 4.24 4.24"></path><path d="M2 12h6"></path><path d="m4.93 13.07 4.24-4.24"></path><path d="M12 22v-6"></path><path d="m19.07 13.07-4.24-4.24"></path><path d="M22 12h-6"></path><path d="m19.07 10.93-4.24 4.24"></path></svg>`,default:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`},ci={env:{label:"环境变量",description:"传递给网关进程的环境变量"},update:{label:"更新",description:"自动更新设置和发布渠道"},agents:{label:"代理",description:"代理配置、模型和身份"},auth:{label:"身份验证",description:"API密钥和身份验证配置文件"},channels:{label:"通道",description:"消息通道（Telegram、Discord、Slack等）"},messages:{label:"消息",description:"消息处理和路由设置"},commands:{label:"命令",description:"自定义斜杠命令"},hooks:{label:"钩子",description:"Webhooks和事件钩子"},skills:{label:"技能",description:"技能包和能力"},tools:{label:"工具",description:"工具配置（浏览器、搜索等）"},gateway:{label:"网关",description:"网关服务器设置（端口、身份验证、绑定）"},wizard:{label:"设置向导",description:"设置向导状态和历史记录"},diagnostics:{label:"诊断",description:"诊断设置"},meta:{label:"元数据",description:"网关元数据和版本信息"},logging:{label:"日志",description:"日志级别和输出配置"},browser:{label:"浏览器",description:"浏览器自动化设置"},ui:{label:"用户界面",description:"用户界面偏好设置"},models:{label:"模型",description:"AI模型配置和提供商"},bindings:{label:"绑定",description:"键绑定和快捷键"},broadcast:{label:"广播",description:"广播和通知设置"},audio:{label:"音频",description:"音频输入/输出设置"},session:{label:"会话",description:"会话管理和持久化"},cron:{label:"定时任务",description:"计划任务和自动化"},web:{label:"Web",description:"Web服务器和API设置"},discovery:{label:"发现",description:"服务发现和网络"},canvasHost:{label:"Canvas主机",description:"Canvas渲染和显示"},talk:{label:"语音",description:"语音和语音设置"},plugins:{label:"插件",description:"插件管理和扩展"}};function Pa(e){return Ra[e]??Ra.default}function Fp(e,t,n){if(!n)return!0;const s=n.toLowerCase(),i=ci[e];return e.toLowerCase().includes(s)||i&&(i.label.toLowerCase().includes(s)||i.description.toLowerCase().includes(s))?!0:mt(t,s)}function mt(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(s=>String(s).toLowerCase().includes(t)))return!0;if(e.properties){for(const[s,i]of Object.entries(e.properties))if(s.toLowerCase().includes(t)||mt(i,t))return!0}if(e.items){const s=Array.isArray(e.items)?e.items:[e.items];for(const i of s)if(i&&mt(i,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&mt(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const s of n)if(s&&mt(s,t))return!0}return!1}function Up(e){if(!e.schema)return o`<div class="muted">模式不可用。</div>`;const t=e.schema,n=e.value??{};if(ue(t)!=="object"||!t.properties)return o`<div class="callout danger">不支持的模式。使用原始模式。</div>`;const s=new Set(e.unsupportedPaths??[]),i=t.properties,a=e.searchQuery??"",r=e.activeSection,l=e.activeSubsection??null,p=Object.entries(i).sort((u,h)=>{const g=te([u[0]],e.uiHints)?.order??50,$=te([h[0]],e.uiHints)?.order??50;return g!==$?g-$:u[0].localeCompare(h[0])}).filter(([u,h])=>!(r&&u!==r||a&&!Fp(u,h,a)));let d=null;if(r&&l&&p.length===1){const u=p[0]?.[1];u&&ue(u)==="object"&&u.properties&&u.properties[l]&&(d={sectionKey:r,subsectionKey:l,schema:u.properties[l]})}return p.length===0?o`
      <div class="config-empty">
        <div class="config-empty__icon">${W.search}</div>
        <div class="config-empty__text">
          ${a?`没有匹配"${a}"的设置`:"此部分中没有设置"}
        </div>
      </div>
    `:o`
    <div class="config-form config-form--modern">
      ${d?(()=>{const{sectionKey:u,subsectionKey:h,schema:g}=d,$=te([u,h],e.uiHints),w=$?.label??g.title??$e(h),A=$?.help??g.description??"",_=n[u],M=_&&typeof _=="object"?_[h]:void 0,P=`config-section-${u}-${h}`;return o`
              <section class="config-section-card" id=${P}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Pa(u)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${w}</h3>
                    ${A?o`<p class="config-section-card__desc">${A}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${be({schema:g,value:M,path:[u,h],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():p.map(([u,h])=>{const g=ci[u]??{label:u.charAt(0).toUpperCase()+u.slice(1),description:h.description??""};return o`
              <section class="config-section-card" id="config-section-${u}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Pa(u)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${g.label}</h3>
                    ${g.description?o`<p class="config-section-card__desc">${g.description}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${be({schema:h,value:n[u],path:[u],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const Kp=new Set(["title","description","default","nullable"]);function Hp(e){return Object.keys(e??{}).filter(n=>!Kp.has(n)).length===0}function uo(e){const t=e.filter(i=>i!=null),n=t.length!==e.length,s=[];for(const i of t)s.some(a=>Object.is(a,i))||s.push(i);return{enumValues:s,nullable:n}}function po(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:$t(e,[])}function $t(e,t){const n=new Set,s={...e},i=yn(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const l=zp(e,t);return l||{schema:e,unsupportedPaths:[i]}}const a=Array.isArray(e.type)&&e.type.includes("null"),r=ue(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=r??e.type,s.nullable=a||e.nullable,s.enum){const{enumValues:l,nullable:c}=uo(s.enum);s.enum=l,c&&(s.nullable=!0),l.length===0&&n.add(i)}if(r==="object"){const l=e.properties??{},c={};for(const[p,d]of Object.entries(l)){const u=$t(d,[...t,p]);u.schema&&(c[p]=u.schema);for(const h of u.unsupportedPaths)n.add(h)}if(s.properties=c,e.additionalProperties===!0)n.add(i);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!Hp(e.additionalProperties)){const p=$t(e.additionalProperties,[...t,"*"]);s.additionalProperties=p.schema??e.additionalProperties,p.unsupportedPaths.length>0&&n.add(i)}}else if(r==="array"){const l=Array.isArray(e.items)?e.items[0]:e.items;if(!l)n.add(i);else{const c=$t(l,[...t,"*"]);s.items=c.schema??l,c.unsupportedPaths.length>0&&n.add(i)}}else r!=="string"&&r!=="number"&&r!=="integer"&&r!=="boolean"&&!s.enum&&n.add(i);return{schema:s,unsupportedPaths:Array.from(n)}}function zp(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],i=[];let a=!1;for(const l of n){if(!l||typeof l!="object")return null;if(Array.isArray(l.enum)){const{enumValues:c,nullable:p}=uo(l.enum);s.push(...c),p&&(a=!0);continue}if("const"in l){if(l.const==null){a=!0;continue}s.push(l.const);continue}if(ue(l)==="null"){a=!0;continue}i.push(l)}if(s.length>0&&i.length===0){const l=[];for(const c of s)l.some(p=>Object.is(p,c))||l.push(c);return{schema:{...e,enum:l,nullable:a,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(i.length===1){const l=$t(i[0],t);return l.schema&&(l.schema.nullable=a||l.schema.nullable),l}const r=["string","number","integer","boolean"];return i.length>0&&s.length===0&&i.every(l=>l.type&&r.includes(String(l.type)))?{schema:{...e,nullable:a},unsupportedPaths:[]}:null}const ks={all:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,env:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,update:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,agents:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path><circle cx="8" cy="14" r="1"></circle><circle cx="16" cy="14" r="1"></circle></svg>`,auth:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,channels:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,messages:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,commands:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,hooks:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,skills:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,tools:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,gateway:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,wizard:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8 19 13"></path><path d="M15 9h0"></path><path d="M17.8 6.2 19 5"></path><path d="m3 21 9-9"></path><path d="M12.2 6.2 11 5"></path></svg>`,meta:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>`,logging:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,browser:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>`,ui:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,models:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,bindings:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,broadcast:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>`,audio:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,session:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,cron:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,web:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,discovery:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,canvasHost:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,talk:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,plugins:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v6"></path><path d="m4.93 10.93 4.24 4.24"></path><path d="M2 12h6"></path><path d="m4.93 13.07 4.24-4.24"></path><path d="M12 22v-6"></path><path d="m19.07 13.07-4.24-4.24"></path><path d="M22 12h-6"></path><path d="m19.07 10.93-4.24 4.24"></path></svg>`,default:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`},Na=[{key:"env",label:"环境"},{key:"update",label:"更新"},{key:"agents",label:"代理"},{key:"auth",label:"身份验证"},{key:"channels",label:"通道"},{key:"messages",label:"消息"},{key:"commands",label:"命令"},{key:"hooks",label:"钩子"},{key:"skills",label:"技能"},{key:"tools",label:"工具"},{key:"gateway",label:"网关"},{key:"wizard",label:"设置向导"}],Oa="__all__";function Da(e){return ks[e]??ks.default}function jp(e,t){const n=ci[e];return n||{label:t?.title??$e(e),description:t?.description??""}}function qp(e){const{key:t,schema:n,uiHints:s}=e;if(!n||ue(n)!=="object"||!n.properties)return[];const i=Object.entries(n.properties).map(([a,r])=>{const l=te([t,a],s),c=l?.label??r.title??$e(a),p=l?.help??r.description??"",d=l?.order??50;return{key:a,label:c,description:p,order:d}});return i.sort((a,r)=>a.order!==r.order?a.order-r.order:a.key.localeCompare(r.key)),i}function Vp(e,t){if(!e||!t)return[];const n=[];function s(i,a,r){if(i===a)return;if(typeof i!=typeof a){n.push({path:r,from:i,to:a});return}if(typeof i!="object"||i===null||a===null){i!==a&&n.push({path:r,from:i,to:a});return}if(Array.isArray(i)&&Array.isArray(a)){JSON.stringify(i)!==JSON.stringify(a)&&n.push({path:r,from:i,to:a});return}const l=i,c=a,p=new Set([...Object.keys(l),...Object.keys(c)]);for(const d of p)s(l[d],c[d],r?`${r}.${d}`:d)}return s(e,t,""),n}function Ba(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function Wp(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=po(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,i=n.schema?.properties??{},a=Na.filter(C=>C.key in i),r=new Set(Na.map(C=>C.key)),l=Object.keys(i).filter(C=>!r.has(C)).map(C=>({key:C,label:C.charAt(0).toUpperCase()+C.slice(1)})),c=[...a,...l],p=e.activeSection&&n.schema&&ue(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,d=e.activeSection?jp(e.activeSection,p):null,u=e.activeSection?qp({key:e.activeSection,schema:p,uiHints:e.uiHints}):[],h=e.formMode==="form"&&!!e.activeSection&&u.length>0,g=e.activeSubsection===Oa,$=e.searchQuery||g?null:e.activeSubsection??u[0]?.key??null,w=e.formMode==="form"?Vp(e.originalValue,e.formValue):[],A=e.formMode==="raw"&&e.raw!==e.originalRaw,_=e.formMode==="form"?w.length>0:A,M=!!e.formValue&&!e.loading&&!!n.schema,P=e.connected&&!e.saving&&_&&(e.formMode==="raw"?!0:M),I=e.connected&&!e.applying&&!e.updating&&_&&(e.formMode==="raw"?!0:M),E=e.connected&&!e.applying&&!e.updating;return o`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">设置</div>
          <span class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}">${t}</span>
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg class="config-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            class="config-search__input"
            placeholder="搜索设置..."
            .value=${e.searchQuery}
            @input=${C=>e.onSearchChange(C.target.value)}
          />
          ${e.searchQuery?o`
            <button
              class="config-search__clear"
              @click=${()=>e.onSearchChange("")}
            >×</button>
          `:v}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${ks.all}</span>
            <span class="config-nav__label">所有设置</span>
          </button>
          ${c.map(C=>o`
            <button
              class="config-nav__item ${e.activeSection===C.key?"active":""}"
              @click=${()=>e.onSectionChange(C.key)}
            >
              <span class="config-nav__icon">${Da(C.key)}</span>
              <span class="config-nav__label">${C.label}</span>
            </button>
          `)}
        </nav>

        <!-- Mode toggle at bottom -->
        <div class="config-sidebar__footer">
          <div class="config-mode-toggle">
            <button
              class="config-mode-toggle__btn ${e.formMode==="form"?"active":""}"
              ?disabled=${e.schemaLoading||!e.schema}
              @click=${()=>e.onFormModeChange("form")}
            >
              表单
            </button>
            <button
              class="config-mode-toggle__btn ${e.formMode==="raw"?"active":""}"
              @click=${()=>e.onFormModeChange("raw")}
            >
              原始
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${_?o`
              <span class="config-changes-badge">${e.formMode==="raw"?"未保存的更改":`${w.length} 个未保存的更改`}</span>
            `:o`
              <span class="config-status muted">无更改</span>
            `}
          </div>
          <div class="config-actions__right">
            <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onReload}>
              ${e.loading?"加载中…":"重新加载"}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!P}
              @click=${e.onSave}
            >
              ${e.saving?"保存中…":"保存"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!I}
              @click=${e.onApply}
            >
              ${e.applying?"应用中…":"应用"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!E}
              @click=${e.onUpdate}
            >
              ${e.updating?"更新中…":"更新"}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${_&&e.formMode==="form"?o`
          <details class="config-diff">
            <summary class="config-diff__summary">
              <span>查看 ${w.length} 个待处理的更改</span>
              <svg class="config-diff__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="config-diff__content">
              ${w.map(C=>o`
                <div class="config-diff__item">
                  <div class="config-diff__path">${C.path}</div>
                  <div class="config-diff__values">
                    <span class="config-diff__from">${Ba(C.from)}</span>
                    <span class="config-diff__arrow">→</span>
                    <span class="config-diff__to">${Ba(C.to)}</span>
                  </div>
                </div>
              `)}
            </div>
          </details>
        `:v}

        ${d&&e.formMode==="form"?o`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">${Da(e.activeSection??"")}</div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">${d.label}</div>
                  ${d.description?o`<div class="config-section-hero__desc">${d.description}</div>`:v}
                </div>
              </div>
            `:v}

        ${h?o`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${$===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(Oa)}
                >
                  全部
                </button>
                ${u.map(C=>o`
                    <button
                      class="config-subnav__item ${$===C.key?"active":""}"
                      title=${C.description||C.label}
                      @click=${()=>e.onSubsectionChange(C.key)}
                    >
                      ${C.label}
                    </button>
                  `)}
              </div>
            `:v}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?o`
                ${e.schemaLoading?o`<div class="config-loading">
                      <div class="config-loading__spinner"></div>
                      <span>正在加载模式…</span>
                    </div>`:Up({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:$})}
                ${s?o`<div class="callout danger" style="margin-top: 12px;">
                      表单视图无法安全编辑某些字段。
                      使用原始模式以避免丢失配置项。
                    </div>`:v}
              `:o`
                <label class="field config-raw-field">
                  <span>原始JSON5</span>
                  <textarea
                    .value=${e.raw}
                    @input=${C=>e.onRawChange(C.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?o`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">${JSON.stringify(e.issues,null,2)}</pre>
            </div>`:v}
      </main>
    </div>
  `}function Gp(e){if(!e&&e!==0)return"n/a";const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);return n<60?`${n}m`:`${Math.round(n/60)}h`}function Qp(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const i=s[e],a=typeof i?.configured=="boolean"&&i.configured,r=typeof i?.running=="boolean"&&i.running,l=typeof i?.connected=="boolean"&&i.connected,p=(n.channelAccounts?.[e]??[]).some(d=>d.configured||d.running||d.connected);return a||r||l||p}function Yp(e,t){return t?.[e]?.length??0}function fo(e,t){const n=Yp(e,t);return n<2?v:o`<div class="account-count">账户 (${n})</div>`}function Zp(e,t){let n=e;for(const s of t){if(!n)return null;const i=ue(n);if(i==="object"){const a=n.properties??{};if(typeof s=="string"&&a[s]){n=a[s];continue}const r=n.additionalProperties;if(typeof s=="string"&&r&&typeof r=="object"){n=r;continue}return null}if(i==="array"){if(typeof s!="number")return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function Xp(e,t){const s=(e.channels??{})[t],i=e[t];return(s&&typeof s=="object"?s:null)??(i&&typeof i=="object"?i:null)??{}}function Jp(e){const t=po(e.schema),n=t.schema;if(!n)return o`<div class="callout danger">模式不可用。请使用原始模式。</div>`;const s=Zp(n,["channels",e.channelId]);if(!s)return o`<div class="callout danger">通道配置模式不可用。</div>`;const i=e.configValue??{},a=Xp(i,e.channelId);return o`
    <div class="config-form">
      ${be({schema:s,value:a,path:["channels",e.channelId],hints:e.uiHints,unsupported:new Set(t.unsupportedPaths),disabled:e.disabled,showLabel:!1,onPatch:e.onPatch})}
    </div>
  `}function we(e){const{channelId:t,props:n}=e,s=n.configSaving||n.configSchemaLoading;return o`
    <div style="margin-top: 16px;">
      ${n.configSchemaLoading?o`<div class="muted">正在加载配置模式…</div>`:Jp({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?"保存中…":"保存"}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          重新加载
        </button>
      </div>
    </div>
  `}function ef(e){const{props:t,discord:n,accountCountLabel:s}=e;return o`
    <div class="card">
      <div class="card-title">Discord</div>
      <div class="card-sub">机器人状态和频道配置。</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?o`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?o`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${we({channelId:"discord",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function tf(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return o`
    <div class="card">
      <div class="card-title">Google Chat</div>
      <div class="card-sub">Chat API webhook 状态和频道配置。</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?n.configured?"是":"否":"无"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?n.running?"是":"否":"无"}</span>
        </div>
        <div>
          <span class="label">凭证</span>
          <span>${n?.credentialSource??"无"}</span>
        </div>
        <div>
          <span class="label">受众</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:"无"}
          </span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?o`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?o`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${we({channelId:"googlechat",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function nf(e){const{props:t,imessage:n,accountCountLabel:s}=e;return o`
    <div class="card">
      <div class="card-title">iMessage</div>
      <div class="card-sub">macOS 桥接状态和频道配置。</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?o`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?o`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.error??""}
          </div>`:v}

      ${we({channelId:"imessage",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function sf(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function af(e){const{state:t,callbacks:n,accountId:s}=e,i=sf(t),a=(l,c,p={})=>{const{type:d="text",placeholder:u,maxLength:h,help:g}=p,$=t.values[l]??"",w=t.fieldErrors[l],A=`nostr-profile-${l}`;return d==="textarea"?o`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${A}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${c}
          </label>
          <textarea
            id="${A}"
            .value=${$}
            placeholder=${u??""}
            maxlength=${h??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${_=>{const M=_.target;n.onFieldChange(l,M.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${g?o`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${g}</div>`:v}
          ${w?o`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${w}</div>`:v}
        </div>
      `:o`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${A}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${c}
        </label>
        <input
          id="${A}"
          type=${d}
          .value=${$}
          placeholder=${u??""}
          maxlength=${h??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${_=>{const M=_.target;n.onFieldChange(l,M.value)}}
          ?disabled=${t.saving}
        />
        ${g?o`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${g}</div>`:v}
        ${w?o`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${w}</div>`:v}
      </div>
    `},r=()=>{const l=t.values.picture;return l?o`
      <div style="margin-bottom: 12px;">
        <img
          src=${l}
          alt="Profile picture preview"
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${c=>{const p=c.target;p.style.display="none"}}
          @load=${c=>{const p=c.target;p.style.display="block"}}
        />
      </div>
    `:v};return o`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">编辑资料</div>
        <div style="font-size: 12px; color: var(--text-muted);">账户: ${s}</div>
      </div>

      ${t.error?o`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:v}

      ${t.success?o`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:v}

      ${r()}

      ${a("name","用户名",{placeholder:"satoshi",maxLength:256,help:"短用户名（例如：satoshi）"})}

      ${a("displayName","显示名称",{placeholder:"Satoshi Nakamoto",maxLength:256,help:"您的完整显示名称"})}

      ${a("about","简介",{type:"textarea",placeholder:"向别人介绍自己...",maxLength:2e3,help:"简短的个人简介或描述"})}

      ${a("picture","头像URL",{type:"url",placeholder:"https://example.com/avatar.jpg",help:"您头像图片的HTTPS URL"})}

      ${t.showAdvanced?o`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">高级选项</div>

              ${a("banner","横幅URL",{type:"url",placeholder:"https://example.com/banner.jpg",help:"横幅图片的HTTPS URL"})}

              ${a("website","网站",{type:"url",placeholder:"https://example.com",help:"您的个人网站"})}

              ${a("nip05","NIP-05 标识",{placeholder:"you@example.com",help:"可验证的标识符（例如：you@domain.com）"})}

              ${a("lud16","闪电网络地址",{placeholder:"you@getalby.com",help:"用于打赏的闪电网络地址（LUD-16）"})}
            </div>
          `:v}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!i}
        >
          ${t.saving?"保存中...":"保存并发布"}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?"导入中...":"从转发器导入"}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?"隐藏高级选项":"显示高级选项"}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          取消
        </button>
      </div>

      ${i?o`<div style="font-size: 12px; color: var(--warning-color); margin-top: 8px;">
            您有未保存的更改
          </div>`:v}
    </div>
  `}function rf(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}function Fa(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:"无"}function of(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:i,profileFormState:a,profileFormCallbacks:r,onEditProfile:l}=e,c=s[0],p=n?.configured??c?.configured??!1,d=n?.running??c?.running??!1,u=n?.publicKey??c?.publicKey,h=n?.lastStartAt??c?.lastStartAt??null,g=n?.lastError??c?.lastError??null,$=s.length>1,w=a!=null,A=M=>{const P=M.publicKey,I=M.profile,E=I?.displayName??I?.name??M.name??M.accountId;return o`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${E}</div>
          <div class="account-card-id">${M.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">运行中</span>
            <span>${M.running?"是":"否"}</span>
          </div>
          <div>
            <span class="label">已配置</span>
            <span>${M.configured?"是":"否"}</span>
          </div>
          <div>
            <span class="label">公钥</span>
            <span class="monospace" title="${P??""}">${Fa(P)}</span>
          </div>
          <div>
            <span class="label">最后入站</span>
            <span>${M.lastInboundAt?O(M.lastInboundAt):"无"}</span>
          </div>
          ${M.lastError?o`
                <div class="account-card-error">${M.lastError}</div>
              `:v}
        </div>
      </div>
    `},_=()=>{if(w&&r)return af({state:a,callbacks:r,accountId:s[0]?.accountId??"default"});const M=c?.profile??n?.profile,{name:P,displayName:I,about:E,picture:C,nip05:pe}=M??{},bn=P||I||E||C||pe;return o`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">资料</div>
          ${p?o`
                <button
                  class="btn btn-sm"
                  @click=${l}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  编辑资料
                </button>
              `:v}
        </div>
        ${bn?o`
              <div class="status-list">
                ${C?o`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${C}
                          alt="Profile picture"
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${$n=>{$n.target.style.display="none"}}
                        />
                      </div>
                    `:v}
                ${P?o`<div><span class="label">姓名</span><span>${P}</span></div>`:v}
                ${I?o`<div><span class="label">显示名称</span><span>${I}</span></div>`:v}
                ${E?o`<div><span class="label">关于</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${E}</span></div>`:v}
                ${pe?o`<div><span class="label">NIP-05</span><span>${pe}</span></div>`:v}
              </div>
            `:o`
              <div style="color: var(--text-muted); font-size: 13px;">
                未设置资料。点击"编辑资料"来添加您的姓名、简介和头像。
              </div>
            `}
      </div>
    `};return o`
    <div class="card">
      <div class="card-title">Nostr</div>
      <div class="card-sub">通过 Nostr 中继（NIP-04）的去中心化私信。</div>
      ${i}

      ${$?o`
            <div class="account-card-list">
              ${s.map(M=>A(M))}
            </div>
          `:o`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">已配置</span>
                <span>${p?"是":"否"}</span>
              </div>
              <div>
                <span class="label">运行中</span>
                <span>${d?"是":"否"}</span>
              </div>
              <div>
                <span class="label">公钥</span>
                <span class="monospace" title="${u??""}"
                  >${Fa(u)}</span
                >
              </div>
              <div>
                <span class="label">最后启动</span>
                <span>${h?O(h):"无"}</span>
              </div>
            </div>
          `}

      ${g?o`<div class="callout danger" style="margin-top: 12px;">${g}</div>`:v}

      ${_()}

      ${we({channelId:"nostr",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>刷新</button>
      </div>
    </div>
  `}function lf(e){const{props:t,signal:n,accountCountLabel:s}=e;return o`
    <div class="card">
      <div class="card-title">Signal</div>
      <div class="card-sub">signal-cli 状态和频道配置。</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">基础URL</span>
          <span>${n?.baseUrl??"无"}</span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?o`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?o`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${we({channelId:"signal",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function cf(e){const{props:t,slack:n,accountCountLabel:s}=e;return o`
    <div class="card">
      <div class="card-title">Slack</div>
      <div class="card-sub">套接字模式状态和频道配置。</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?o`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?o`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${we({channelId:"slack",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function df(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:i}=e,a=s.length>1,r=l=>{const p=l.probe?.bot?.username,d=l.name||l.accountId;return o`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${p?`@${p}`:d}
          </div>
          <div class="account-card-id">${l.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">运行中</span>
            <span>${l.running?"是":"否"}</span>
          </div>
          <div>
            <span class="label">已配置</span>
            <span>${l.configured?"是":"否"}</span>
          </div>
          <div>
            <span class="label">最后入站</span>
            <span>${l.lastInboundAt?O(l.lastInboundAt):"无"}</span>
          </div>
          ${l.lastError?o`
                <div class="account-card-error">
                  ${l.lastError}
                </div>
              `:v}
        </div>
      </div>
    `};return o`
    <div class="card">
      <div class="card-title">Telegram</div>
      <div class="card-sub">机器人状态和频道配置。</div>
      ${i}

      ${a?o`
            <div class="account-card-list">
              ${s.map(l=>r(l))}
            </div>
          `:o`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">已配置</span>
                <span>${n?.configured?"是":"否"}</span>
              </div>
              <div>
                <span class="label">运行中</span>
                <span>${n?.running?"是":"否"}</span>
              </div>
              <div>
                <span class="label">模式</span>
                <span>${n?.mode??"无"}</span>
              </div>
              <div>
                <span class="label">最后启动</span>
                <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
              </div>
              <div>
                <span class="label">最后探测</span>
                <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
              </div>
            </div>
          `}

      ${n?.lastError?o`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?o`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${we({channelId:"telegram",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function uf(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return o`
    <div class="card">
      <div class="card-title">WhatsApp</div>
      <div class="card-sub">链接 WhatsApp Web 并监控连接健康状况。</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">已链接</span>
          <span>${n?.linked?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">已连接</span>
          <span>${n?.connected?"是":"否"}</span>
        </div>
        <div>
          <span class="label">最后连接</span>
          <span>
            ${n?.lastConnectedAt?O(n.lastConnectedAt):"无"}
          </span>
        </div>
        <div>
          <span class="label">最后消息</span>
          <span>
            ${n?.lastMessageAt?O(n.lastMessageAt):"无"}
          </span>
        </div>
        <div>
          <span class="label">认证时长</span>
          <span>
            ${n?.authAgeMs!=null?Gp(n.authAgeMs):"无"}
          </span>
        </div>
      </div>

      ${n?.lastError?o`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${t.whatsappMessage?o`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:v}

      ${t.whatsappQrDataUrl?o`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:v}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?"工作中…":"显示二维码"}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          重新链接
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          等待扫描
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          登出
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          刷新
        </button>
      </div>

      ${we({channelId:"whatsapp",props:t})}
    </div>
  `}function pf(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,i=t?.discord??null,a=t?.googlechat??null,r=t?.slack??null,l=t?.signal??null,c=t?.imessage??null,p=t?.nostr??null,u=ff(e.snapshot).map((h,g)=>({key:h,enabled:Qp(h,e),order:g})).sort((h,g)=>h.enabled!==g.enabled?h.enabled?-1:1:h.order-g.order);return o`
    <section class="grid grid-cols-2">
      ${u.map(h=>hf(h.key,e,{whatsapp:n,telegram:s,discord:i,googlechat:a,slack:r,signal:l,imessage:c,nostr:p,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">通道健康状况</div>
          <div class="card-sub">来自网关的通道状态快照。</div>
        </div>
        <div class="muted">${e.lastSuccessAt?O(e.lastSuccessAt):"无"}</div>
      </div>
      ${e.lastError?o`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):"暂无快照。"}
      </pre>
    </section>
  `}function ff(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function hf(e,t,n){const s=fo(e,n.channelAccounts);switch(e){case"whatsapp":return uf({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return df({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return ef({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return tf({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return cf({props:t,slack:n.slack,accountCountLabel:s});case"signal":return lf({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return nf({props:t,imessage:n.imessage,accountCountLabel:s});case"nostr":{const i=n.channelAccounts?.nostr??[],a=i[0],r=a?.accountId??"default",l=a?.profile??null,c=t.nostrProfileAccountId===r?t.nostrProfileFormState:null,p=c?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return of({props:t,nostr:n.nostr,nostrAccounts:i,accountCountLabel:s,profileFormState:c,profileFormCallbacks:p,onEditProfile:()=>t.onNostrProfileEdit(r,l)})}default:return gf(e,t,n.channelAccounts??{})}}function gf(e,t,n){const s=mf(t.snapshot,e),i=t.snapshot?.channels?.[e],a=typeof i?.configured=="boolean"?i.configured:void 0,r=typeof i?.running=="boolean"?i.running:void 0,l=typeof i?.connected=="boolean"?i.connected:void 0,c=typeof i?.lastError=="string"?i.lastError:void 0,p=n[e]??[],d=fo(e,n);return o`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">通道状态和配置。</div>
      ${d}

      ${p.length>0?o`
            <div class="account-card-list">
              ${p.map(u=>wf(u))}
            </div>
          `:o`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">已配置</span>
                <span>${a==null?"无":a?"是":"否"}</span>
              </div>
              <div>
                <span class="label">运行中</span>
                <span>${r==null?"无":r?"是":"否"}</span>
              </div>
              <div>
                <span class="label">已连接</span>
                <span>${l==null?"无":l?"是":"否"}</span>
              </div>
            </div>
          `}

      ${c?o`<div class="callout danger" style="margin-top: 12px;">
            ${c}
          </div>`:v}

      ${we({channelId:e,props:t})}
    </div>
  `}function vf(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function mf(e,t){return vf(e)[t]?.label??e?.channelLabels?.[t]??t}const yf=600*1e3;function ho(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<yf:!1}function bf(e){return e.running?"是":ho(e)?"活跃":"否"}function $f(e){return e.connected===!0?"是":e.connected===!1?"否":ho(e)?"活跃":"无"}function wf(e){const t=bf(e),n=$f(e);return o`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">运行中</span>
          <span>${t}</span>
        </div>
        <div>
          <span class="label">已配置</span>
          <span>${e.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">已连接</span>
          <span>${n}</span>
        </div>
        <div>
          <span class="label">最后入站</span>
          <span>${e.lastInboundAt?O(e.lastInboundAt):"无"}</span>
        </div>
        ${e.lastError?o`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:v}
      </div>
    </div>
  `}function xf(e){const t=e.host??"unknown",n=e.ip?`(${e.ip})`:"",s=e.mode??"",i=e.version??"";return`${t} ${n} ${s} ${i}`.trim()}function Af(e){const t=e.ts??null;return t?O(t):"n/a"}function go(e){return e?`${kt(e)} (${O(e)})`:"n/a"}function kf(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function Sf(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function _f(e){const t=e.state??{},n=t.nextRunAtMs?kt(t.nextRunAtMs):"n/a",s=t.lastRunAtMs?kt(t.lastRunAtMs):"n/a";return`${t.lastStatus??"n/a"} · next ${n} · last ${s}`}function Tf(e){const t=e.schedule;return t.kind==="at"?`At ${kt(t.atMs)}`:t.kind==="every"?`Every ${ir(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function Ef(e){const t=e.payload;return t.kind==="systemEvent"?`System: ${t.text}`:`Agent: ${t.message}`}function Cf(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.channel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(i=>s.has(i)?!1:(s.add(i),!0))}function If(e,t){if(t==="last")return"last";const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function Mf(e){const t=Cf(e);return o`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">调度器</div>
        <div class="card-sub">网关拥有的定时任务调度器状态。</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">已启用</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"是":"否":"无"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">任务</div>
            <div class="stat-value">${e.status?.jobs??"无"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">下次唤醒</div>
            <div class="stat-value">${go(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"刷新中…":"刷新"}
          </button>
          ${e.error?o`<span class="muted">${e.error}</span>`:v}
        </div>
      </div>

      <div class="card">
        <div class="card-title">新建任务</div>
        <div class="card-sub">创建一个定时唤醒或代理运行。</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>名称</span>
            <input
              .value=${e.form.name}
              @input=${n=>e.onFormChange({name:n.target.value})}
            />
          </label>
          <label class="field">
            <span>描述</span>
            <input
              .value=${e.form.description}
              @input=${n=>e.onFormChange({description:n.target.value})}
            />
          </label>
          <label class="field">
            <span>代理ID</span>
            <input
              .value=${e.form.agentId}
              @input=${n=>e.onFormChange({agentId:n.target.value})}
              placeholder="默认"
            />
          </label>
          <label class="field checkbox">
            <span>已启用</span>
            <input
              type="checkbox"
              .checked=${e.form.enabled}
              @change=${n=>e.onFormChange({enabled:n.target.checked})}
            />
          </label>
          <label class="field">
            <span>计划</span>
            <select
              .value=${e.form.scheduleKind}
              @change=${n=>e.onFormChange({scheduleKind:n.target.value})}
            >
              <option value="every">每隔</option>
              <option value="at">在</option>
              <option value="cron">Cron</option>
            </select>
          </label>
        </div>
        ${Lf(e)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>会话</span>
            <select
              .value=${e.form.sessionTarget}
              @change=${n=>e.onFormChange({sessionTarget:n.target.value})}
            >
              <option value="main">主会话</option>
              <option value="isolated">隔离</option>
            </select>
          </label>
          <label class="field">
            <span>唤醒模式</span>
            <select
              .value=${e.form.wakeMode}
              @change=${n=>e.onFormChange({wakeMode:n.target.value})}
            >
              <option value="next-heartbeat">下次心跳</option>
              <option value="now">立即</option>
            </select>
          </label>
          <label class="field">
            <span>负载</span>
            <select
              .value=${e.form.payloadKind}
              @change=${n=>e.onFormChange({payloadKind:n.target.value})}
            >
              <option value="systemEvent">系统事件</option>
              <option value="agentTurn">代理回合</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${e.form.payloadKind==="systemEvent"?"系统文本":"代理消息"}</span>
          <textarea
            .value=${e.form.payloadText}
            @input=${n=>e.onFormChange({payloadText:n.target.value})}
            rows="4"
          ></textarea>
        </label>
	          ${e.form.payloadKind==="agentTurn"?o`
	              <div class="form-grid" style="margin-top: 12px;">
                <label class="field checkbox">
                  <span>传送</span>
                  <input
                    type="checkbox"
                    .checked=${e.form.deliver}
                    @change=${n=>e.onFormChange({deliver:n.target.checked})}
                  />
	                </label>
	                <label class="field">
	                  <span>频道</span>
	                  <select
	                    .value=${e.form.channel||"last"}
	                    @change=${n=>e.onFormChange({channel:n.target.value})}
	                  >
	                    ${t.map(n=>o`<option value=${n}>
                            ${If(e,n)}
                          </option>`)}
                  </select>
                </label>
                <label class="field">
                  <span>发送至</span>
                  <input
                    .value=${e.form.to}
                    @input=${n=>e.onFormChange({to:n.target.value})}
                    placeholder="+1555… 或聊天ID"
                  />
                </label>
                <label class="field">
                  <span>超时时间（秒）</span>
                  <input
                    .value=${e.form.timeoutSeconds}
                    @input=${n=>e.onFormChange({timeoutSeconds:n.target.value})}
                  />
                </label>
                ${e.form.sessionTarget==="isolated"?o`
                      <label class="field">
                        <span>发布到主前缀</span>
                        <input
                          .value=${e.form.postToMainPrefix}
                          @input=${n=>e.onFormChange({postToMainPrefix:n.target.value})}
                        />
                      </label>
                    `:v}
              </div>
            `:v}
        <div class="row" style="margin-top: 14px;">
          <button class="btn primary" ?disabled=${e.busy} @click=${e.onAdd}>
            ${e.busy?"保存中…":"添加任务"}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">任务</div>
      <div class="card-sub">存储在网关中的所有定时任务。</div>
      ${e.jobs.length===0?o`<div class="muted" style="margin-top: 12px;">暂无任务。</div>`:o`
            <div class="list" style="margin-top: 12px;">
              ${e.jobs.map(n=>Rf(n,e))}
            </div>
          `}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">运行历史</div>
      <div class="card-sub">${e.runsJobId??"（选择一个任务）"}的最新运行记录。</div>
      ${e.runsJobId==null?o`
            <div class="muted" style="margin-top: 12px;">
              选择一个任务以查看运行历史。
            </div>
          `:e.runs.length===0?o`<div class="muted" style="margin-top: 12px;">暂无运行记录。</div>`:o`
              <div class="list" style="margin-top: 12px;">
                ${e.runs.map(n=>Pf(n))}
              </div>
            `}
    </section>
  `}function Lf(e){const t=e.form;return t.scheduleKind==="at"?o`
      <label class="field" style="margin-top: 12px;">
        <span>运行于</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?o`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>每隔</span>
          <input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          />
        </label>
        <label class="field">
          <span>单位</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">分钟</option>
            <option value="hours">小时</option>
            <option value="days">天</option>
          </select>
        </label>
      </div>
    `:o`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>表达式</span>
        <input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        />
      </label>
      <label class="field">
        <span>时区（可选）</span>
        <input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        />
      </label>
    </div>
  `}function Rf(e,t){const s=`list-item list-item-clickable${t.runsJobId===e.id?" list-item-selected":""}`;return o`
    <div class=${s} @click=${()=>t.onLoadRuns(e.id)}>
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${Tf(e)}</div>
        <div class="muted">${Ef(e)}</div>
        ${e.agentId?o`<div class="muted">Agent: ${e.agentId}</div>`:v}
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.enabled?"已启用":"已禁用"}</span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
      </div>
      <div class="list-meta">
        <div>${_f(e)}</div>
        <div class="row" style="justify-content: flex-end; margin-top: 8px;">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"禁用":"启用"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onRun(e)}}
          >
            运行
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onLoadRuns(e.id)}}
          >
            运行
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onRemove(e)}}
          >
            删除
          </button>
        </div>
      </div>
    </div>
  `}function Pf(e){return o`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${kt(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${e.error?o`<div class="muted">${e.error}</div>`:v}
      </div>
    </div>
  `}function Nf(e){return o`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">快照</div>
            <div class="card-sub">状态、健康状况和心跳数据。</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"刷新中…":"刷新"}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">状态</div>
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">健康状况</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">最后心跳</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">手动RPC</div>
        <div class="card-sub">使用JSON参数发送原始网关方法。</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>方法</span>
            <input
              .value=${e.callMethod}
              @input=${t=>e.onCallMethodChange(t.target.value)}
              placeholder="系统状态"
            />
          </label>
          <label class="field">
            <span>参数（JSON）</span>
            <textarea
              .value=${e.callParams}
              @input=${t=>e.onCallParamsChange(t.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>调用</button>
        </div>
        ${e.callError?o`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:v}
        ${e.callResult?o`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:v}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">模型</div>
      <div class="card-sub">来自models.list的目录。</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">事件日志</div>
      <div class="card-sub">最新的网关事件。</div>
      ${e.eventLog.length===0?o`<div class="muted" style="margin-top: 12px;">暂无事件。</div>`:o`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(t=>o`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${t.event}</div>
                      <div class="list-sub">${new Date(t.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${Sf(t.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function Of(e){return o`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">已连接实例</div>
          <div class="card-sub">来自网关和客户端的存在信标。</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"加载中…":"刷新"}
        </button>
      </div>
      ${e.lastError?o`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      ${e.statusMessage?o`<div class="callout" style="margin-top: 12px;">
            ${e.statusMessage}
          </div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${e.entries.length===0?o`<div class="muted">暂未报告任何实例。</div>`:e.entries.map(t=>Df(t))}
      </div>
    </section>
  `}function Df(e){const t=e.lastInputSeconds!=null?`${e.lastInputSeconds}秒前`:"无",n=e.mode??"未知",s=Array.isArray(e.roles)?e.roles.filter(Boolean):[],i=Array.isArray(e.scopes)?e.scopes.filter(Boolean):[],a=i.length>0?i.length>3?`${i.length} 作用域`:`作用域: ${i.join(", ")}`:null;return o`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.host??"未知主机"}</div>
        <div class="list-sub">${xf(e)}</div>
        <div class="chip-row">
          <span class="chip">${n}</span>
          ${s.map(r=>o`<span class="chip">${r}</span>`)}
          ${a?o`<span class="chip">${a}</span>`:v}
          ${e.platform?o`<span class="chip">${e.platform}</span>`:v}
          ${e.deviceFamily?o`<span class="chip">${e.deviceFamily}</span>`:v}
          ${e.modelIdentifier?o`<span class="chip">${e.modelIdentifier}</span>`:v}
          ${e.version?o`<span class="chip">${e.version}</span>`:v}
        </div>
      </div>
      <div class="list-meta">
        <div>${Af(e)}</div>
        <div class="muted">上次输入 ${t}</div>
        <div class="muted">原因 ${e.reason??""}</div>
      </div>
    </div>
  `}const Ua=["trace","debug","info","warn","error","fatal"];function Bf(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function Ff(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function Uf(e){const t=e.filterText.trim().toLowerCase(),n=Ua.some(a=>!e.levelFilters[a]),s=e.entries.filter(a=>a.level&&!e.levelFilters[a.level]?!1:Ff(a,t)),i=t||n?"filtered":"visible";return o`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">日志</div>
          <div class="card-sub">网关文件日志（JSONL）。</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"加载中…":"刷新"}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(a=>a.raw),i)}
          >
            导出 ${i}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>过滤器</span>
          <input
            .value=${e.filterText}
            @input=${a=>e.onFilterTextChange(a.target.value)}
            placeholder="搜索日志"
          />
        </label>
        <label class="field checkbox">
          <span>自动跟随</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${a=>e.onToggleAutoFollow(a.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${Ua.map(a=>o`
            <label class="chip log-chip ${a}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[a]}
                @change=${r=>e.onLevelToggle(a,r.target.checked)}
              />
              <span>${a}</span>
            </label>
          `)}
      </div>

      ${e.file?o`<div class="muted" style="margin-top: 10px;">文件: ${e.file}</div>`:v}
      ${e.truncated?o`<div class="callout" style="margin-top: 10px;">
            日志输出已截断；显示最新部分。
          </div>`:v}
      ${e.error?o`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:v}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?o`<div class="muted" style="padding: 12px;">无日志条目。</div>`:s.map(a=>o`
                <div class="log-row">
                  <div class="log-time mono">${Bf(a.time)}</div>
                  <div class="log-level ${a.level??""}">${a.level??""}</div>
                  <div class="log-subsystem mono">${a.subsystem??""}</div>
                  <div class="log-message mono">${a.message??a.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function Kf(e){const t=Wf(e),n=Jf(e);return o`
    ${th(n)}
    ${eh(t)}
    ${Hf(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">节点</div>
          <div class="card-sub">配对设备和实时链接。</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"加载中…":"刷新"}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?o`<div class="muted">未找到节点。</div>`:e.nodes.map(s=>uh(s))}
      </div>
    </section>
  `}function Hf(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return o`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">设备</div>
          <div class="card-sub">配对请求 + 角色令牌。</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?"加载中…":"刷新"}
        </button>
      </div>
      ${e.devicesError?o`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?o`
              <div class="muted" style="margin-bottom: 8px;">待处理</div>
              ${n.map(i=>zf(i,e))}
            `:v}
        ${s.length>0?o`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">已配对</div>
              ${s.map(i=>jf(i,e))}
            `:v}
        ${n.length===0&&s.length===0?o`<div class="muted">无配对设备。</div>`:v}
      </div>
    </section>
  `}function zf(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?O(e.ts):"无",i=e.role?.trim()?`role: ${e.role}`:"角色: -",a=e.isRepair?" · repair":"",r=e.remoteIp?` · ${e.remoteIp}`:"";return o`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${r}</div>
        <div class="muted" style="margin-top: 6px;">
          ${i} · requested ${s}${a}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            批准
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            拒绝
          </button>
        </div>
      </div>
    </div>
  `}function jf(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",i=`角色: ${is(e.roles)}`,a=`范围: ${is(e.scopes)}`,r=Array.isArray(e.tokens)?e.tokens:[];return o`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${i} · ${a}</div>
        ${r.length===0?o`<div class="muted" style="margin-top: 6px;">令牌: 无</div>`:o`
              <div class="muted" style="margin-top: 10px;">令牌</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${r.map(l=>qf(e.deviceId,l,t))}
              </div>
            `}
      </div>
    </div>
  `}function qf(e,t,n){const s=t.revokedAtMs?"revoked":"active",i=`范围: ${is(t.scopes)}`,a=O(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return o`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${i} · ${a}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          更新
        </button>
        ${t.revokedAtMs?v:o`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}>
              >
                撤销
              </button>
            `}
      </div>
    </div>
  `}const Ae="__defaults__",Ka=[{value:"deny",label:"拒绝"},{value:"allowlist",label:"白名单"},{value:"full",label:"全部"}],Vf=[{value:"off",label:"关闭"},{value:"on-miss",label:"未命中时"},{value:"always",label:"始终"}];function Wf(e){const t=e.configForm,n=lh(e.nodes),{defaultBinding:s,agents:i}=dh(t),a=!!t,r=e.configSaving||e.configFormMode==="raw";return{ready:a,disabled:r,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:i,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function Ha(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function Gf(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function Qf(e){const t=e?.defaults??{};return{security:Ha(t.security),ask:Gf(t.ask),askFallback:Ha(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function Yf(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach(i=>{if(!i||typeof i!="object")return;const a=i,r=typeof a.id=="string"?a.id.trim():"";if(!r)return;const l=typeof a.name=="string"?a.name.trim():void 0,c=a.default===!0;s.push({id:r,name:l||void 0,isDefault:c})}),s}function Zf(e,t){const n=Yf(e),s=Object.keys(t?.agents??{}),i=new Map;n.forEach(r=>i.set(r.id,r)),s.forEach(r=>{i.has(r)||i.set(r,{id:r})});const a=Array.from(i.values());return a.length===0&&a.push({id:"main",isDefault:!0}),a.sort((r,l)=>{if(r.isDefault&&!l.isDefault)return-1;if(!r.isDefault&&l.isDefault)return 1;const c=r.name?.trim()?r.name:r.id,p=l.name?.trim()?l.name:l.id;return c.localeCompare(p)}),a}function Xf(e,t){return e===Ae?Ae:e&&t.some(n=>n.id===e)?e:Ae}function Jf(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=Qf(t),i=Zf(e.configForm,t),a=ch(e.nodes),r=e.execApprovalsTarget;let l=r==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;r==="node"&&l&&!a.some(u=>u.id===l)&&(l=null);const c=Xf(e.execApprovalsSelectedAgent,i),p=c!==Ae?(t?.agents??{})[c]??null:null,d=Array.isArray(p?.allowlist)?p.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:c,selectedAgent:p,agents:i,allowlist:d,target:r,targetNodeId:l,targetNodes:a,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function eh(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return o`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">执行节点绑定</div>
          <div class="card-sub">
            使用<span class="mono">exec host=node</span>时将代理固定到特定节点。
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?"保存中…":"保存"}
        </button>
      </div>

      ${e.formMode==="raw"?o`<div class="callout warn" style="margin-top: 12px;">
            将配置选项卡切换到<strong>表单</strong>模式以在此处编辑绑定。
          </div>`:v}

      ${e.ready?o`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">默认绑定</div>
                  <div class="list-sub">当代理不覆盖节点绑定时使用。</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>节点</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const a=s.target.value.trim();e.onBindDefault(a||null)}}
                    >
                      <option value="" ?selected=${n===""}>任何节点</option>
                      ${e.nodes.map(s=>o`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?v:o`<div class="muted">没有可用system.run的节点。</div>`}
                </div>
              </div>

              ${e.agents.length===0?o`<div class="muted">未找到代理。</div>`:e.agents.map(s=>oh(s,e))}
            </div>
          `:o`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">加载配置以编辑绑定。</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?"加载中…":"加载配置"}
            </button>
          </div>`}
    </section>
  `}function th(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return o`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">执行审批</div>
          <div class="card-sub">
            <span class="mono">exec host=gateway/node</span>的白名单和审批策略。
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?"保存中…":"保存"}
        </button>
      </div>

      ${nh(e)}

      ${t?o`
            ${sh(e)}
            ${ih(e)}
            ${e.selectedScope===Ae?v:ah(e)}
          `:o`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">加载执行审批以编辑白名单。</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?"加载中…":"加载审批"}
            </button>
          </div>`}
    </section>
  `}function nh(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return o`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">目标</div>
          <div class="list-sub">
            网关编辑本地审批；节点编辑选定的节点。
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>主机</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const r=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||r)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>网关</option>
              <option value="node" ?selected=${e.target==="node"}>节点</option>
            </select>
          </label>
          ${e.target==="node"?o`
                <label class="field">
                  <span>节点</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const a=s.target.value.trim();e.onSelectTarget("node",a||null)}}
                  >
                    <option value="" ?selected=${n===""}>选择节点</option>
                    ${e.targetNodes.map(s=>o`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:v}
        </div>
      </div>
      ${e.target==="node"&&!t?o`<div class="muted">尚无节点发布执行审批广告。</div>`:v}
    </div>
  `}function sh(e){return o`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">范围</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===Ae?"active":""}"
          @click=${()=>e.onSelectScope(Ae)}
        >
          默认值
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return o`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function ih(e){const t=e.selectedScope===Ae,n=e.defaults,s=e.selectedAgent??{},i=t?["defaults"]:["agents",e.selectedScope],a=typeof s.security=="string"?s.security:void 0,r=typeof s.ask=="string"?s.ask:void 0,l=typeof s.askFallback=="string"?s.askFallback:void 0,c=t?n.security:a??"__default__",p=t?n.ask:r??"__default__",d=t?n.askFallback:l??"__default__",u=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,h=u??n.autoAllowSkills,g=u==null;return o`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">安全</div>
          <div class="list-sub">
            ${t?"默认安全模式。":`默认值: ${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>模式</span>
            <select
              ?disabled=${e.disabled}
              @change=${$=>{const A=$.target.value;!t&&A==="__default__"?e.onRemove([...i,"security"]):e.onPatch([...i,"security"],A)}}
            >
              ${t?v:o`<option value="__default__" ?selected=${c==="__default__"}>
                    使用默认值 (${n.security})
                  </option>`}
              ${Ka.map($=>o`<option
                    value=${$.value}
                    ?selected=${c===$.value}
                  >
                    ${$.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">询问</div>
          <div class="list-sub">
            ${t?"默认提示策略。":`默认值: ${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>模式</span>
            <select
              ?disabled=${e.disabled}
              @change=${$=>{const A=$.target.value;!t&&A==="__default__"?e.onRemove([...i,"ask"]):e.onPatch([...i,"ask"],A)}}
            >
              ${t?v:o`<option value="__default__" ?selected=${p==="__default__"}>
                    使用默认值 (${n.ask})
                  </option>`}
              ${Vf.map($=>o`<option
                    value=${$.value}
                    ?selected=${p===$.value}
                  >
                    ${$.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">询问回退</div>
          <div class="list-sub">
            ${t?"当UI提示不可用时应用。":`默认值: ${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>回退</span>
            <select
              ?disabled=${e.disabled}
              @change=${$=>{const A=$.target.value;!t&&A==="__default__"?e.onRemove([...i,"askFallback"]):e.onPatch([...i,"askFallback"],A)}}
            >
              ${t?v:o`<option value="__default__" ?selected=${d==="__default__"}>
                    使用默认值 (${n.askFallback})
                  </option>`}
              ${Ka.map($=>o`<option
                    value=${$.value}
                    ?selected=${d===$.value}
                  >
                    ${$.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">自动允许技能CLI</div>
          <div class="list-sub">
            ${t?"允许网关列出的技能可执行文件。":g?`使用默认值 (${n.autoAllowSkills?"开":"关"}).`:`覆盖 (${h?"开":"关"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>启用</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${h}
              @change=${$=>{const w=$.target;e.onPatch([...i,"autoAllowSkills"],w.checked)}}
            />
          </label>
          ${!t&&!g?o`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...i,"autoAllowSkills"])}
              >
                使用默认值
              </button>`:v}
        </div>
      </div>
    </div>
  `}function ah(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return o`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">白名单</div>
        <div class="card-sub">不区分大小写的通配符模式。</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        添加模式
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?o`<div class="muted">尚无白名单条目。</div>`:n.map((s,i)=>rh(e,s,i))}
    </div>
  `}function rh(e,t,n){const s=t.lastUsedAt?O(t.lastUsedAt):"从未",i=t.lastUsedCommand?as(t.lastUsedCommand,120):null,a=t.lastResolvedPath?as(t.lastResolvedPath,120):null;return o`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:"新模式"}</div>
        <div class="list-sub">最后使用: ${s}</div>
        ${i?o`<div class="list-sub mono">${i}</div>`:v}
        ${a?o`<div class="list-sub mono">${a}</div>`:v}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>模式</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${r=>{const l=r.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],l.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          移除
        </button>
      </div>
    </div>
  `}function oh(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,i=t.nodes.length>0;return o`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?"默认代理":"代理"} ·
          ${n==="__default__"?`使用默认值 (${t.defaultBinding??"任意"})`:`覆盖: ${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>绑定</span>
          <select
            ?disabled=${t.disabled||!i}
            @change=${a=>{const l=a.target.value.trim();t.onBindAgent(e.index,l==="__default__"?null:l)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              使用默认值
            </option>
            ${t.nodes.map(a=>o`<option
                  value=${a.id}
                  ?selected=${n===a.id}
                >
                  ${a.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function lh(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(l=>String(l)==="system.run"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const r=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:r===a?a:`${r} · ${a}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function ch(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(l=>String(l)==="system.execApprovals.get"||String(l)==="system.execApprovals.set"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const r=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:r===a?a:`${r} · ${a}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function dh(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},i=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,a=e.agents??{},r=Array.isArray(a.list)?a.list:[];if(r.length===0)return{defaultBinding:i,agents:[t]};const l=[];return r.forEach((c,p)=>{if(!c||typeof c!="object")return;const d=c,u=typeof d.id=="string"?d.id.trim():"";if(!u)return;const h=typeof d.name=="string"?d.name.trim():void 0,g=d.default===!0,w=(d.tools??{}).exec??{},A=typeof w.node=="string"&&w.node.trim()?w.node.trim():null;l.push({id:u,name:h||void 0,index:p,isDefault:g,binding:A})}),l.length===0&&l.push(t),{defaultBinding:i,agents:l}}function uh(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"未知"),i=Array.isArray(e.caps)?e.caps:[],a=Array.isArray(e.commands)?e.commands:[];return o`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${n?"已配对":"未配对"}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${t?"已连接":"离线"}
          </span>
          ${i.slice(0,12).map(r=>o`<span class="chip">${String(r)}</span>`)}
          ${a.slice(0,8).map(r=>o`<span class="chip">${String(r)}</span>`)}
        </div>
      </div>
    </div>
  `}function ph(e){const t=e.hello?.snapshot,n=t?.uptimeMs?ir(t.uptimeMs):"n/a",s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:"n/a",i=(()=>{if(e.connected||!e.lastError)return null;const r=e.lastError.toLowerCase();if(!(r.includes("unauthorized")||r.includes("connect failed")))return null;const c=!!e.settings.token.trim(),p=!!e.password.trim();return!c&&!p?o`
        <div class="muted" style="margin-top: 8px;">
          此网关需要身份验证。添加令牌或密码，然后点击连接。
          <div style="margin-top: 6px;">
            <span class="mono">clawdbot dashboard --no-open</span> → 生成带令牌的URL<br />
            <span class="mono">clawdbot doctor --generate-gateway-token</span> → 设置令牌
          </div>
          <div style="margin-top: 6px;">
            <a
              class="session-link"
              href="https://docs.clawd.bot/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="控制界面身份验证文档（在新标签页中打开）"
              >文档：控制界面身份验证</a
            >
          </div>
        </div>
      `:o`
      <div class="muted" style="margin-top: 8px;">
        身份验证失败。重新复制带令牌的URL，使用
        <span class="mono">clawdbot dashboard --no-open</span>，或更新令牌，
        然后点击连接。
        <div style="margin-top: 6px;">
          <a
            class="session-link"
            href="https://docs.clawd.bot/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="控制界面身份验证文档（在新标签页中打开）"
            >文档：控制界面身份验证</a
          >
        </div>
      </div>
    `})(),a=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0)!==!1)return null;const l=e.lastError.toLowerCase();return!l.includes("secure context")&&!l.includes("device identity required")?null:o`
      <div class="muted" style="margin-top: 8px;">
        此页面使用HTTP协议，因此浏览器会阻止设备身份验证。请使用HTTPS（Tailscale Serve）或
        在网关主机上打开 <span class="mono">http://127.0.0.1:18789</span>。
        <div style="margin-top: 6px;">
          如果必须使用HTTP，请设置
          <span class="mono">gateway.controlUi.allowInsecureAuth: true</span>（仅限令牌）。
        </div>
        <div style="margin-top: 6px;">
          <a
            class="session-link"
            href="https://docs.clawd.bot/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Tailscale Serve 文档（在新标签页中打开）"
            >文档：Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.clawd.bot/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="非安全HTTP文档（在新标签页中打开）"
            >文档：非安全HTTP</a
          >
        </div>
      </div>
    `})();return o`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">网关访问</div>
        <div class="card-sub">仪表板连接位置以及身份验证方式。</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>WebSocket URL</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${r=>{const l=r.target.value;e.onSettingsChange({...e.settings,gatewayUrl:l})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          <label class="field">
            <span>网关令牌</span>
            <input
              .value=${e.settings.token}
              @input=${r=>{const l=r.target.value;e.onSettingsChange({...e.settings,token:l})}}
              placeholder="CLAWDBOT_GATEWAY_TOKEN"
            />
          </label>
          <label class="field">
            <span>密码（不存储）</span>
            <input
              type="password"
              .value=${e.password}
              @input=${r=>{const l=r.target.value;e.onPasswordChange(l)}}
              placeholder="系统或共享密码"
            />
          </label>
          <label class="field">
            <span>默认会话密钥</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${r=>{const l=r.target.value;e.onSessionKeyChange(l)}}
            />
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>连接</button>
          <button class="btn" @click=${()=>e.onRefresh()}>刷新</button>
          <span class="muted">点击连接以应用连接更改。</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">快照</div>
        <div class="card-sub">最新网关握手信息。</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">状态</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?"已连接":"已断开"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">运行时间</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">心跳间隔</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">上次通道刷新</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?O(e.lastChannelsRefresh):"无"}
            </div>
          </div>
        </div>
        ${e.lastError?o`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${i??""}
              ${a??""}
            </div>`:o`<div class="callout" style="margin-top: 14px;">
              使用通道链接 WhatsApp、Telegram、Discord、Signal 或 iMessage。
            </div>`}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">实例</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">过去5分钟内的存在信标。</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">会话</div>
        <div class="stat-value">${e.sessionsCount??"n/a"}</div>
        <div class="muted">网关跟踪的最近会话密钥。</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">定时任务</div>
        <div class="stat-value">
          ${e.cronEnabled==null?"无":e.cronEnabled?"启用":"禁用"}
        </div>
        <div class="muted">下次唤醒 ${go(e.cronNext)}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">注意事项</div>
      <div class="card-sub">远程控制设置的快速提醒。</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">Tailscale服务</div>
          <div class="muted">
            优先使用服务模式，在回环接口上保持网关并使用尾网认证。
          </div>
        </div>
        <div>
          <div class="note-title">会话管理</div>
          <div class="muted">使用 /new 或 sessions.patch 来重置上下文。</div>
        </div>
        <div>
          <div class="note-title">定时任务提醒</div>
          <div class="muted">对重复运行使用隔离会话。</div>
        </div>
      </div>
    </section>
  `}const fh=["","off","minimal","low","medium","high"],hh=["","off","on"],gh=[{value:"",label:"inherit"},{value:"off",label:"off (explicit)"},{value:"on",label:"on"}],vh=["","off","on","stream"];function mh(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function vo(e){return mh(e)==="zai"}function yh(e){return vo(e)?hh:fh}function bh(e,t){return!t||!e||e==="off"?e:"on"}function $h(e,t){return e?t&&e==="on"?"low":e:null}function wh(e){const t=e.result?.sessions??[];return o`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">会话</div>
          <div class="card-sub">活跃会话密钥和每会话覆盖设置。</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"加载中…":"刷新"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>活跃于（分钟内）</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>限制</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>包含全局</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>包含未知</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.error?o`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`存储: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          <div>密钥</div>
          <div>标签</div>
          <div>类型</div>
          <div>更新时间</div>
          <div>令牌</div>
          <div>思考</div>
          <div>详细</div>
          <div>推理</div>
          <div>操作</div>
        </div>
        ${t.length===0?o`<div class="muted">未找到会话。</div>`:t.map(n=>xh(n,e.basePath,e.onPatch,e.onDelete,e.loading))}
      </div>
    </section>
  `}function xh(e,t,n,s,i){const a=e.updatedAt?O(e.updatedAt):"无",r=e.thinkingLevel??"",l=vo(e.modelProvider),c=bh(r,l),p=yh(e.modelProvider),d=e.verboseLevel??"",u=e.reasoningLevel??"",h=e.displayName??e.key,g=e.kind!=="global",$=g?`${Rs("chat",t)}?session=${encodeURIComponent(e.key)}`:null;return o`
    <div class="table-row">
      <div class="mono">${g?o`<a href=${$} class="session-link">${h}</a>`:h}</div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${i}
          placeholder="（可选）"
          @change=${w=>{const A=w.target.value.trim();n(e.key,{label:A||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${a}</div>
      <div>${kf(e)}</div>
      <div>
        <select
          .value=${c}
          ?disabled=${i}
          @change=${w=>{const A=w.target.value;n(e.key,{thinkingLevel:$h(A,l)})}}
        >
          ${p.map(w=>o`<option value=${w}>${w||"继承"}</option>`)}
        </select>
      </div>
      <div>
        <select
          .value=${d}
          ?disabled=${i}
          @change=${w=>{const A=w.target.value;n(e.key,{verboseLevel:A||null})}}
        >
          ${gh.map(w=>o`<option value=${w.value}>${w.label}</option>`)}
        </select>
      </div>
      <div>
        <select
          .value=${u}
          ?disabled=${i}
          @change=${w=>{const A=w.target.value;n(e.key,{reasoningLevel:A||null})}}
        >
          ${vh.map(w=>o`<option value=${w}>${w||"继承"}</option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${i} @click=${()=>s(e.key)}>
          删除
        </button>
      </div>
    </div>
  `}function Ah(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function Me(e,t){return t?o`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:v}function kh(e){const t=e.execApprovalQueue[0];if(!t)return v;const n=t.request,s=t.expiresAtMs-Date.now(),i=s>0?`expires in ${Ah(s)}`:"expired",a=e.execApprovalQueue.length;return o`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${i}</div>
          </div>
          ${a>1?o`<div class="exec-approval-queue">${a} pending</div>`:v}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${Me("Host",n.host)}
          ${Me("Agent",n.agentId)}
          ${Me("Session",n.sessionKey)}
          ${Me("CWD",n.cwd)}
          ${Me("Resolved",n.resolvedPath)}
          ${Me("Security",n.security)}
          ${Me("Ask",n.ask)}
        </div>
        ${e.execApprovalError?o`<div class="exec-approval-error">${e.execApprovalError}</div>`:v}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function Sh(e){const t=e.pendingGatewayUrl;if(!t)return v;const n=e.settings.gatewayUrl||window.location.origin;return o`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite" aria-modal="true">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">⚠️ 网关地址变更请求</div>
            <div class="exec-approval-sub">请仔细核实此请求</div>
          </div>
        </div>
        <div class="exec-approval-meta">
          <div class="exec-approval-meta-row">
            <span>当前地址</span>
            <span class="mono">${n}</span>
          </div>
          <div class="exec-approval-meta-row">
            <span>请求地址</span>
            <span class="mono" style="color: var(--warning)">${t}</span>
          </div>
        </div>
        <div style="margin: 1rem 0; padding: 0.75rem; background: var(--danger-bg, rgba(239, 68, 68, 0.1)); border-radius: 0.5rem; font-size: 0.875rem;">
          <strong>安全警告：</strong>此请求来自 URL 参数。如果您不确定来源，请拒绝此请求。
          连接到恶意网关可能导致您的认证信息泄露。
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn danger"
            @click=${()=>e.rejectPendingGatewayUrl()}
          >
            拒绝
          </button>
          <button
            class="btn primary"
            @click=${()=>e.acceptPendingGatewayUrl()}
          >
            确认连接
          </button>
        </div>
      </div>
    </div>
  `}function _h(e){return{"clawdbot-bundled":"内置","clawdbot-workspace":"工作区","clawdbot-managed":"已管理","clawdbot-extra":"额外"}[e]??e}function Th(e){const t=e.report?.skills??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(i=>[i.name,i.description,i.source].join(" ").toLowerCase().includes(n)):t;return o`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">技能</div>
          <div class="card-sub">捆绑、管理和工作区技能。</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"加载中…":"刷新"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>过滤器</span>
          <input
            .value=${e.filter}
            @input=${i=>e.onFilterChange(i.target.value)}
            placeholder="搜索技能"
          />
        </label>
        <div class="muted">显示${s.length}项</div>
      </div>

      ${e.error?o`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      ${s.length===0?o`<div class="muted" style="margin-top: 16px;">未找到技能。</div>`:o`
            <div class="list" style="margin-top: 16px;">
              ${s.map(i=>Eh(i,e))}
            </div>
          `}
    </section>
  `}function Eh(e,t){const n=t.busyKey===e.skillKey,s=t.edits[e.skillKey]??"",i=t.messages[e.skillKey]??null,a=e.install.length>0&&e.missing.bins.length>0,r=[...e.missing.bins.map(p=>`bin:${p}`),...e.missing.env.map(p=>`env:${p}`),...e.missing.config.map(p=>`config:${p}`),...e.missing.os.map(p=>`os:${p}`)],l=r.length>0?r.join(", "):"",c=[];return e.disabled&&c.push("已禁用"),e.blockedByAllowlist&&c.push("被白名单阻止"),o`
    <div class="list-item">
      <div class="list-main">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <div class="list-title">
            ${e.emoji?`${e.emoji} `:""}${e.name}
          </div>
          <div class="chip-row">
            <span class="chip">${_h(e.source)}</span>
            <span class="chip ${e.eligible?"chip-ok":"chip-warn"}>
              ${e.eligible?"符合条件":"被阻止"}
            </span>
            ${e.disabled?o`<span class="chip chip-warn">已禁用</span>`:v}
          </div>
        </div>
        <div class="list-sub" style="margin-top: 4px;">${as(e.description,140)}</div>
        ${r.length>0?o`
              <div class="muted" style="margin-top: 6px; font-size: 11px;">
                缺少: ${l}
              </div>
            `:v}
        ${c.length>0?o`
              <div class="muted" style="margin-top: 6px; font-size: 11px;">
                原因: ${c.join(", ")}
              </div>
            `:v}
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; flex-wrap: wrap;">
          <button
            class="btn"
            ?disabled=${n}
            @click=${()=>t.onToggle(e.skillKey,e.disabled)}
          >
            ${e.disabled?"启用":"禁用"}
          </button>
          ${a?o`<button
                class="btn"
                ?disabled=${n}
                @click=${()=>t.onInstall(e.skillKey,e.name,e.install[0].id)}
              >
                ${n?"安装中…":e.install[0].label}
              </button>`:v}
        </div>
        ${i?o`<div
              class="muted"
              style="margin-top: 8px; color: ${i.kind==="error"?"var(--danger-color, #d14343)":"var(--success-color, #0a7f5a)"};"
            >
              ${i.message}
            </div>`:v}
        ${e.primaryEnv?o`
              <div class="field" style="margin-top: 10px;">
                <span>API密钥</span>
                <input
                  type="password"
                  .value=${s}
                  @input=${p=>t.onEdit(e.skillKey,p.target.value)}
                />
              </div>
              <button
                class="btn primary"
                style="margin-top: 8px;"
                ?disabled=${n}
                @click=${()=>t.onSaveKey(e.skillKey)}
              >
                保存密钥
              </button>
            `:v}
      </div>
    </div>
  `}function Ch(e,t){const n=Rs(t,e.basePath);return o`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${s=>{s.defaultPrevented||s.button!==0||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),e.setTab(t))}}
      title=${ss(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${W[vl(t)]}</span>
      <span class="nav-item__text">${ss(t)}</span>
    </a>
  `}function Ih(e){const t=Mh(e.sessionKey,e.sessionsResult),n=e.onboarding,s=e.onboarding,i=e.onboarding?!1:e.settings.chatShowThinking,a=e.onboarding?!0:e.settings.chatFocusMode,r=o`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>`,l=o`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h3"></path><path d="M20 7V4h-3"></path><path d="M4 17v3h3"></path><path d="M20 17v3h-3"></path><circle cx="12" cy="12" r="3"></circle></svg>`;return o`
    <div class="chat-controls">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected}
          @change=${c=>{const p=c.target.value;e.sessionKey=p,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:p,lastActiveSessionKey:p}),e.loadAssistantIdentity(),gd(e,p),Je(e)}}
        >
          ${Kr(t,c=>c.key,c=>o`<option value=${c.key}>
                ${c.displayName??c.key}
              </option>`)}
        </select>
      </label>
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${()=>{e.resetToolStream(),Je(e)}}
        title="刷新聊天记录"
      >
        ${r}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${i?"active":""}"
        ?disabled=${n}
        @click=${()=>{n||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${i}
        title=${n?"在引导期间禁用":"切换助手思考/工作输出"}
      >
        ${W.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${a?"active":""}"
        ?disabled=${s}
        @click=${()=>{s||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${a}
        title=${s?"在引导期间禁用":"切换焦点模式（隐藏侧边栏和页面头部）"}
      >
        ${l}
      </button>
    </div>
  `}function Mh(e,t){const n=new Set,s=[],i=t?.sessions?.find(a=>a.key===e);if(n.add(e),s.push({key:e,displayName:i?.displayName}),t?.sessions)for(const a of t.sessions)n.has(a.key)||(n.add(a.key),s.push({key:a.key,displayName:a.displayName}));return s}const Lh=["system","light","dark"];function Rh(e){const t=Math.max(0,Lh.indexOf(e.theme)),n=s=>i=>{const r={element:i.currentTarget};(i.clientX||i.clientY)&&(r.pointerClientX=i.clientX,r.pointerClientY=i.clientY),e.setTheme(s,r)};return o`
    <div class="theme-toggle" style="--theme-index: ${t};">
      <div class="theme-toggle__track" role="group" aria-label="主题">
        <span class="theme-toggle__indicator"></span>
        <button
          class="theme-toggle__button ${e.theme==="system"?"active":""}"
          @click=${n("system")}
          aria-pressed=${e.theme==="system"}
          aria-label="系统主题"
          title="系统"
        >
          ${Oh()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="light"?"active":""}"
          @click=${n("light")}
          aria-pressed=${e.theme==="light"}
          aria-label="浅色主题"
          title="浅色"
        >
          ${Ph()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="dark"?"active":""}"
          @click=${n("dark")}
          aria-pressed=${e.theme==="dark"}
          aria-label="深色主题"
          title="深色"
        >
          ${Nh()}
        </button>
      </div>
    </div>
  `}function Ph(){return o`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  `}function Nh(){return o`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      ></path>
    </svg>
  `}function Oh(){return o`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  `}const Dh=/^data:/i,Bh=/^https?:\/\//i;function Fh(e){const t=e.agentsList?.agents??[],s=er(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",a=t.find(l=>l.id===s)?.identity,r=a?.avatarUrl??a?.avatar;if(r)return Dh.test(r)||Bh.test(r)?r:a?.avatarUrl}function Uh(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,i=e.connected?null:"与网关断开连接。",a=e.tab==="chat",r=a&&(e.settings.chatFocusMode||e.onboarding),l=e.onboarding?!1:e.settings.chatShowThinking,c=Fh(e),p=e.chatAvatarUrl??c??null;return o`
    <div class="shell ${a?"shell--chat":""} ${r?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="nav-collapse-toggle"
            @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
            title="${e.settings.navCollapsed?"展开侧边栏":"折叠侧边栏"}"
            aria-label="${e.settings.navCollapsed?"展开侧边栏":"折叠侧边栏"}"
          >
            <span class="nav-collapse-toggle__icon">${W.menu}</span>
          </button>
          <div class="brand">
            <div class="brand-logo">
              <img src="https://mintcdn.com/clawdhub/4rYvG-uuZrMK_URE/assets/pixel-lobster.svg?fit=max&auto=format&n=4rYvG-uuZrMK_URE&q=85&s=da2032e9eac3b5d9bfe7eb96ca6a8a26" alt="Clawdbot" />
            </div>
            <div class="brand-text">
              <div class="brand-title">CLAWDBOT</div>
              <div class="brand-sub">网关控制台</div>
            </div>
          </div>
        </div>
        <div class="topbar-status">
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>健康状态</span>
            <span class="mono">${e.connected?"正常":"离线"}</span>
          </div>
          ${Rh(e)}
        </div>
      </header>
      <aside class="nav ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${hl.map(d=>{const u=e.settings.navGroupsCollapsed[d.label]??!1,h=d.tabs.some(g=>g===e.tab);return o`
            <div class="nav-group ${u&&!h?"nav-group--collapsed":""}">
              <button
                class="nav-label"
                @click=${()=>{const g={...e.settings.navGroupsCollapsed};g[d.label]=!u,e.applySettings({...e.settings,navGroupsCollapsed:g})}}
                aria-expanded=${!u}
              >
                <span class="nav-label__text">${d.label}</span>
                <span class="nav-label__chevron">${u?"+":"−"}</span>
              </button>
              <div class="nav-group__items">
                ${d.tabs.map(g=>Ch(e,g))}
              </div>
            </div>
          `})}
        <div class="nav-group nav-group--links">
          <div class="nav-label nav-label--static">
            <span class="nav-label__text">资源</span>
          </div>
          <div class="nav-group__items">
            <a
              class="nav-item nav-item--external"
              href="https://docs.clawd.bot"
              target="_blank"
              rel="noreferrer"
              title="文档（在新标签页中打开）"
            >
              <span class="nav-item__icon" aria-hidden="true">${W.book}</span>
              <span class="nav-item__text">文档</span>
            </a>
          </div>
        </div>
      </aside>
      <main class="content ${a?"content--chat":""}">
        <section class="content-header">
          <div>
            <div class="page-title">${ss(e.tab)}</div>
            <div class="page-sub">${ml(e.tab)}</div>
          </div>
          <div class="page-meta">
            ${e.lastError?o`<div class="pill danger">${e.lastError}</div>`:v}
            ${a?Ih(e):v}
          </div>
        </section>

        ${e.tab==="overview"?ph({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:d=>e.applySettings(d),onPasswordChange:d=>e.password=d,onSessionKeyChange:d=>{e.sessionKey=d,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:d,lastActiveSessionKey:d}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):v}

        ${e.tab==="channels"?pf({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:d=>re(e,d),onWhatsAppStart:d=>e.handleWhatsAppStart(d),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(d,u)=>Bt(e,d,u),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(d,u)=>e.handleNostrProfileEdit(d,u),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(d,u)=>e.handleNostrProfileFieldChange(d,u),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):v}

        ${e.tab==="instances"?Of({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>js(e)}):v}

        ${e.tab==="sessions"?wh({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,onFiltersChange:d=>{e.sessionsFilterActive=d.activeMinutes,e.sessionsFilterLimit=d.limit,e.sessionsIncludeGlobal=d.includeGlobal,e.sessionsIncludeUnknown=d.includeUnknown},onRefresh:()=>st(e),onPatch:(d,u)=>Ll(e,d,u),onDelete:d=>Rl(e,d)}):v}

        ${e.tab==="cron"?Mf({loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(d=>d.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:d=>e.cronForm={...e.cronForm,...d},onRefresh:()=>e.loadCron(),onAdd:()=>tc(e),onToggle:(d,u)=>nc(e,d,u),onRun:d=>sc(e,d),onRemove:d=>ic(e,d),onLoadRuns:d=>ur(e,d)}):v}

        ${e.tab==="skills"?Th({loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,onFilterChange:d=>e.skillsFilter=d,onRefresh:()=>Et(e,{clearMessages:!0}),onToggle:(d,u)=>Xc(e,d,u),onEdit:(d,u)=>Zc(e,d,u),onSaveKey:d=>Jc(e,d),onInstall:(d,u,h)=>ed(e,d,u,h)}):v}

        ${e.tab==="nodes"?Kf({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>pn(e),onDevicesRefresh:()=>_e(e),onDeviceApprove:d=>Kc(e,d),onDeviceReject:d=>Hc(e,d),onDeviceRotate:(d,u,h)=>zc(e,{deviceId:d,role:u,scopes:h}),onDeviceRevoke:(d,u)=>jc(e,{deviceId:d,role:u}),onLoadConfig:()=>ye(e),onLoadExecApprovals:()=>{const d=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return zs(e,d)},onBindDefault:d=>{d?Bt(e,["tools","exec","node"],d):Zi(e,["tools","exec","node"])},onBindAgent:(d,u)=>{const h=["agents","list",d,"tools","exec","node"];u?Bt(e,h,u):Zi(e,h)},onSaveBindings:()=>ls(e),onExecApprovalsTargetChange:(d,u)=>{e.execApprovalsTarget=d,e.execApprovalsTargetNodeId=u,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:d=>{e.execApprovalsSelectedAgent=d},onExecApprovalsPatch:(d,u)=>Qc(e,d,u),onExecApprovalsRemove:d=>Yc(e,d),onSaveExecApprovals:()=>{const d=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Gc(e,d)}}):v}

        ${e.tab==="chat"?Cp({sessionKey:e.sessionKey,onSessionKeyChange:d=>{e.sessionKey=d,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:d,lastActiveSessionKey:d}),e.loadAssistantIdentity(),Je(e),fs(e)},thinkingLevel:e.chatThinkingLevel,showThinking:l,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,assistantAvatarUrl:p,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:i,error:e.lastError,sessions:e.sessionsResult,focusMode:r,onRefresh:()=>(e.resetToolStream(),Promise.all([Je(e),fs(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:d=>e.handleChatScroll(d),onDraftChange:d=>e.chatMessage=d,attachments:e.chatAttachments,onAttachmentsChange:d=>e.chatAttachments=d,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:d=>e.removeQueuedMessage(d),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:d=>e.handleOpenSidebar(d),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:d=>e.handleSplitRatioChange(d),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):v}

        ${e.tab==="config"?Wp({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:d=>{e.configRaw=d},onFormModeChange:d=>e.configFormMode=d,onFormPatch:(d,u)=>Bt(e,d,u),onSearchChange:d=>e.configSearchQuery=d,onSectionChange:d=>{e.configActiveSection=d,e.configActiveSubsection=null},onSubsectionChange:d=>e.configActiveSubsection=d,onReload:()=>ye(e),onSave:()=>ls(e),onApply:()=>Zl(e),onUpdate:()=>Xl(e)}):v}

        ${e.tab==="debug"?Nf({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:d=>e.debugCallMethod=d,onCallParamsChange:d=>e.debugCallParams=d,onRefresh:()=>dn(e),onCall:()=>lc(e)}):v}

        ${e.tab==="logs"?Uf({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:d=>e.logsFilterText=d,onLevelToggle:(d,u)=>{e.logsLevelFilters={...e.logsLevelFilters,[d]:u}},onToggleAutoFollow:d=>e.logsAutoFollow=d,onRefresh:()=>Os(e,{reset:!0}),onExport:(d,u)=>e.exportLogs(d,u),onScroll:d=>e.handleLogsScroll(d)}):v}
      </main>
      ${kh(e)}
      ${Sh(e)}
    </div>
  `}const Kh={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},Hh={name:"",description:"",agentId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"main",wakeMode:"next-heartbeat",payloadKind:"systemEvent",payloadText:"",deliver:!1,channel:"last",to:"",timeoutSeconds:"",postToMainPrefix:""};async function zh(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});t&&(e.agentsList=t)}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}const mo={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"clawdbot-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"clawdbot-macos",IOS_APP:"clawdbot-ios",ANDROID_APP:"clawdbot-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"clawdbot-probe"},za=mo,Ss={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(mo));new Set(Object.values(Ss));function jh(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),s=e.token??"",i=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),s];return t==="v2"&&i.push(e.nonce??""),i.join("|")}const qh=4008;class Vh{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.onopen=()=>this.queueConnect(),this.ws.onmessage=t=>this.handleMessage(String(t.data??"")),this.ws.onclose=t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()},this.ws.onerror=()=>{})}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let i=null,a=!1,r=this.opts.token;if(t){i=await Us();const d=Uc({deviceId:i.deviceId,role:s})?.token;r=d??this.opts.token,a=!!(d&&this.opts.token)}const l=r||this.opts.password?{token:r,password:this.opts.password}:void 0;let c;if(t&&i){const d=Date.now(),u=this.connectNonce??void 0,h=jh({deviceId:i.deviceId,clientId:this.opts.clientName??za.CONTROL_UI,clientMode:this.opts.mode??Ss.WEBCHAT,role:s,scopes:n,signedAtMs:d,token:r??null,nonce:u}),g=await Bc(i.privateKey,h);c={id:i.deviceId,publicKey:i.publicKey,signature:g,signedAt:d,nonce:u}}const p={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??za.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??Ss.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:c,caps:[],auth:l,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",p).then(d=>{d?.auth?.deviceToken&&i&&Er({deviceId:i.deviceId,role:d.auth.role??s,token:d.auth.deviceToken,scopes:d.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(d)}).catch(()=>{a&&i&&Cr({deviceId:i.deviceId,role:s}),this.ws?.close(qh,"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const i=n;if(i.event==="connect.challenge"){const r=i.payload,l=r&&typeof r.nonce=="string"?r.nonce:null;l&&(this.connectNonce=l,this.sendConnect());return}const a=typeof i.seq=="number"?i.seq:null;a!==null&&(this.lastSeq!==null&&a>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:a}),this.lastSeq=a);try{this.opts.onEvent?.(i)}catch(r){console.error("[gateway] event handler error:",r)}return}if(s.type==="res"){const i=n,a=this.pending.get(i.id);if(!a)return;this.pending.delete(i.id),i.ok?a.resolve(i.payload):a.reject(new Error(i.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=Ps(),i={type:"req",id:s,method:t,params:n},a=new Promise((r,l)=>{this.pending.set(s,{resolve:c=>r(c),reject:l})});return this.ws.send(JSON.stringify(i)),a}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function _s(e){return typeof e=="object"&&e!==null}function Wh(e){if(!_s(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!_s(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const i=typeof e.createdAtMs=="number"?e.createdAtMs:0,a=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!i||!a?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:i,expiresAtMs:a}}function Gh(e){if(!_s(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function yo(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function Qh(e,t){const n=yo(e).filter(s=>s.id!==t.id);return n.push(t),n}function ja(e,t){return yo(e).filter(n=>n.id!==t)}async function bo(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const i=await e.client.request("agent.identity.get",s);if(!i)return;const a=ns(i);e.assistantName=a.name,e.assistantAvatar=a.avatar,e.assistantAgentId=a.agentId??null}catch{}}function Jn(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const i=t.mainKey?.trim()||"main",a=t.defaultAgentId?.trim();return n==="main"||n===i||a&&(n===`agent:${a}:main`||n===`agent:${a}:${i}`)?s:n}function Yh(e,t){if(!t?.mainSessionKey)return;const n=Jn(e.sessionKey,t),s=Jn(e.settings.sessionKey,t),i=Jn(e.settings.lastActiveSessionKey,t),a=n||s||e.sessionKey,r={...e.settings,sessionKey:s||a,lastActiveSessionKey:i||a},l=r.sessionKey!==e.settings.sessionKey||r.lastActiveSessionKey!==e.settings.lastActiveSessionKey;a!==e.sessionKey&&(e.sessionKey=a),l&&Fe(e,r)}function $o(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null,e.client?.stop(),e.client=new Vh({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"clawdbot-control-ui",mode:"webchat",onHello:t=>{e.connected=!0,e.lastError=null,e.hello=t,Jh(e,t),bo(e),zh(e),pn(e,{quiet:!0}),_e(e,{quiet:!0}),Ys(e)},onClose:({code:t,reason:n})=>{e.connected=!1,t!==1012&&(e.lastError=`disconnected (${t}): ${n||"no reason"}`)},onEvent:t=>Zh(e,t),onGap:({expected:t,received:n})=>{e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`}}),e.client.start()}function Zh(e,t){try{Xh(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function Xh(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;zl(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&Ir(e,n.sessionKey);const s=Ml(e,n);(s==="final"||s==="error"||s==="aborted")&&(Ns(e),xd(e)),s==="final"&&Je(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&Zs(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&_e(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=Wh(t.payload);if(n){e.execApprovalQueue=Qh(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=ja(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=Gh(t.payload);n&&(e.execApprovalQueue=ja(e.execApprovalQueue,n.id))}}function Jh(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&Yh(e,n.sessionDefaults)}function eg(e){e.basePath=cd(),fd(e,!0),dd(e),ud(e),window.addEventListener("popstate",e.popStateHandler),rd(e),$o(e),id(e),e.tab==="logs"&&Vs(e),e.tab==="debug"&&Gs(e)}function tg(e){Gl(e)}function ng(e){window.removeEventListener("popstate",e.popStateHandler),ad(e),Ws(e),Qs(e),pd(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function sg(e,t){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&e.chatLoading===!1;ln(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&or(e,t.has("tab")||t.has("logsAutoFollow"))}async function ig(e,t){await ac(e,t),await re(e,!0)}async function ag(e){await rc(e),await re(e,!0)}async function rg(e){await oc(e),await re(e,!0)}async function og(e){await ls(e),await ye(e),await re(e,!0)}async function lg(e){await ye(e),await re(e,!0)}function cg(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...i]=n.split(":");if(!s||i.length===0)continue;const a=s.trim(),r=i.join(":").trim();a&&r&&(t[a]=r)}return t}function wo(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function xo(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function dg(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=rf(n??void 0)}function ug(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function pg(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function fg(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function hg(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=wo(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(xo(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.values)}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const a=i?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:a,success:null,fieldErrors:cg(i?.details)};return}if(!i.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await re(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function gg(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=wo(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(xo(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({autoMerge:!0})}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const c=i?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:c,success:null};return}const a=i.merged??i.imported??null,r=a?{...t.values,...a}:t.values,l=!!(r.banner||r.website||r.nip05||r.lud16);e.nostrProfileFormState={...t,importing:!1,values:r,error:null,success:i.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:l},i.saved&&await re(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}var vg=Object.defineProperty,mg=Object.getOwnPropertyDescriptor,y=(e,t,n,s)=>{for(var i=s>1?void 0:s?mg(t,n):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(s?r(t,n,i):r(i))||i);return s&&i&&vg(t,n,i),i};const es=ul();function yg(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let m=class extends Ze{constructor(){super(...arguments),this.settings=pl(),this.password="",this.tab="chat",this.onboarding=yg(),this.connected=!1,this.theme=this.settings.theme??"system",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=es.name,this.assistantAvatar=es.avatar,this.assistantAgentId=es.agentId??null,this.pendingGatewayUrl=null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatQueue=[],this.chatAttachments=[],this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="form",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...Hh},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...Kh},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.basePath="",this.popStateHandler=()=>hd(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),eg(this)}firstUpdated(){tg(this)}disconnectedCallback(){ng(this),super.disconnectedCallback()}updated(e){sg(this,e)}connect(){$o(this)}handleChatScroll(e){jl(this,e)}handleLogsScroll(e){ql(this,e)}exportLogs(e,t){Wl(e,t)}resetToolStream(){Ns(this)}resetChatScroll(){Vl(this)}async loadAssistantIdentity(){await bo(this)}applySettings(e){Fe(this,e)}setTab(e){od(this,e)}setTheme(e,t){ld(this,e,t)}async loadOverview(){await Rr(this)}async loadCron(){await Zs(this)}async handleAbortChat(){await Nr(this)}removeQueuedMessage(e){bd(this,e)}async handleSendChat(e,t){await $d(this,e,t)}async handleWhatsAppStart(e){await ig(this,e)}async handleWhatsAppWait(){await ag(this)}async handleWhatsAppLogout(){await rg(this)}async handleChannelConfigSave(){await og(this)}async handleChannelConfigReload(){await lg(this)}handleNostrProfileEdit(e,t){dg(this,e,t)}handleNostrProfileCancel(){ug(this)}handleNostrProfileFieldChange(e,t){pg(this,e,t)}async handleNostrProfileSave(){await hg(this)}async handleNostrProfileImport(){await gg(this)}handleNostrProfileToggleAdvanced(){fg(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}acceptPendingGatewayUrl(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,this.applySettings({...this.settings,gatewayUrl:e}),this.connect())}rejectPendingGatewayUrl(){this.pendingGatewayUrl=null}render(){return Uh(this)}};y([b()],m.prototype,"settings",2);y([b()],m.prototype,"password",2);y([b()],m.prototype,"tab",2);y([b()],m.prototype,"onboarding",2);y([b()],m.prototype,"connected",2);y([b()],m.prototype,"theme",2);y([b()],m.prototype,"themeResolved",2);y([b()],m.prototype,"hello",2);y([b()],m.prototype,"lastError",2);y([b()],m.prototype,"eventLog",2);y([b()],m.prototype,"assistantName",2);y([b()],m.prototype,"assistantAvatar",2);y([b()],m.prototype,"assistantAgentId",2);y([b()],m.prototype,"pendingGatewayUrl",2);y([b()],m.prototype,"sessionKey",2);y([b()],m.prototype,"chatLoading",2);y([b()],m.prototype,"chatSending",2);y([b()],m.prototype,"chatMessage",2);y([b()],m.prototype,"chatMessages",2);y([b()],m.prototype,"chatToolMessages",2);y([b()],m.prototype,"chatStream",2);y([b()],m.prototype,"chatStreamStartedAt",2);y([b()],m.prototype,"chatRunId",2);y([b()],m.prototype,"compactionStatus",2);y([b()],m.prototype,"chatAvatarUrl",2);y([b()],m.prototype,"chatThinkingLevel",2);y([b()],m.prototype,"chatQueue",2);y([b()],m.prototype,"chatAttachments",2);y([b()],m.prototype,"sidebarOpen",2);y([b()],m.prototype,"sidebarContent",2);y([b()],m.prototype,"sidebarError",2);y([b()],m.prototype,"splitRatio",2);y([b()],m.prototype,"nodesLoading",2);y([b()],m.prototype,"nodes",2);y([b()],m.prototype,"devicesLoading",2);y([b()],m.prototype,"devicesError",2);y([b()],m.prototype,"devicesList",2);y([b()],m.prototype,"execApprovalsLoading",2);y([b()],m.prototype,"execApprovalsSaving",2);y([b()],m.prototype,"execApprovalsDirty",2);y([b()],m.prototype,"execApprovalsSnapshot",2);y([b()],m.prototype,"execApprovalsForm",2);y([b()],m.prototype,"execApprovalsSelectedAgent",2);y([b()],m.prototype,"execApprovalsTarget",2);y([b()],m.prototype,"execApprovalsTargetNodeId",2);y([b()],m.prototype,"execApprovalQueue",2);y([b()],m.prototype,"execApprovalBusy",2);y([b()],m.prototype,"execApprovalError",2);y([b()],m.prototype,"configLoading",2);y([b()],m.prototype,"configRaw",2);y([b()],m.prototype,"configRawOriginal",2);y([b()],m.prototype,"configValid",2);y([b()],m.prototype,"configIssues",2);y([b()],m.prototype,"configSaving",2);y([b()],m.prototype,"configApplying",2);y([b()],m.prototype,"updateRunning",2);y([b()],m.prototype,"applySessionKey",2);y([b()],m.prototype,"configSnapshot",2);y([b()],m.prototype,"configSchema",2);y([b()],m.prototype,"configSchemaVersion",2);y([b()],m.prototype,"configSchemaLoading",2);y([b()],m.prototype,"configUiHints",2);y([b()],m.prototype,"configForm",2);y([b()],m.prototype,"configFormOriginal",2);y([b()],m.prototype,"configFormDirty",2);y([b()],m.prototype,"configFormMode",2);y([b()],m.prototype,"configSearchQuery",2);y([b()],m.prototype,"configActiveSection",2);y([b()],m.prototype,"configActiveSubsection",2);y([b()],m.prototype,"channelsLoading",2);y([b()],m.prototype,"channelsSnapshot",2);y([b()],m.prototype,"channelsError",2);y([b()],m.prototype,"channelsLastSuccess",2);y([b()],m.prototype,"whatsappLoginMessage",2);y([b()],m.prototype,"whatsappLoginQrDataUrl",2);y([b()],m.prototype,"whatsappLoginConnected",2);y([b()],m.prototype,"whatsappBusy",2);y([b()],m.prototype,"nostrProfileFormState",2);y([b()],m.prototype,"nostrProfileAccountId",2);y([b()],m.prototype,"presenceLoading",2);y([b()],m.prototype,"presenceEntries",2);y([b()],m.prototype,"presenceError",2);y([b()],m.prototype,"presenceStatus",2);y([b()],m.prototype,"agentsLoading",2);y([b()],m.prototype,"agentsList",2);y([b()],m.prototype,"agentsError",2);y([b()],m.prototype,"sessionsLoading",2);y([b()],m.prototype,"sessionsResult",2);y([b()],m.prototype,"sessionsError",2);y([b()],m.prototype,"sessionsFilterActive",2);y([b()],m.prototype,"sessionsFilterLimit",2);y([b()],m.prototype,"sessionsIncludeGlobal",2);y([b()],m.prototype,"sessionsIncludeUnknown",2);y([b()],m.prototype,"cronLoading",2);y([b()],m.prototype,"cronJobs",2);y([b()],m.prototype,"cronStatus",2);y([b()],m.prototype,"cronError",2);y([b()],m.prototype,"cronForm",2);y([b()],m.prototype,"cronRunsJobId",2);y([b()],m.prototype,"cronRuns",2);y([b()],m.prototype,"cronBusy",2);y([b()],m.prototype,"skillsLoading",2);y([b()],m.prototype,"skillsReport",2);y([b()],m.prototype,"skillsError",2);y([b()],m.prototype,"skillsFilter",2);y([b()],m.prototype,"skillEdits",2);y([b()],m.prototype,"skillsBusyKey",2);y([b()],m.prototype,"skillMessages",2);y([b()],m.prototype,"debugLoading",2);y([b()],m.prototype,"debugStatus",2);y([b()],m.prototype,"debugHealth",2);y([b()],m.prototype,"debugModels",2);y([b()],m.prototype,"debugHeartbeat",2);y([b()],m.prototype,"debugCallMethod",2);y([b()],m.prototype,"debugCallParams",2);y([b()],m.prototype,"debugCallResult",2);y([b()],m.prototype,"debugCallError",2);y([b()],m.prototype,"logsLoading",2);y([b()],m.prototype,"logsError",2);y([b()],m.prototype,"logsFile",2);y([b()],m.prototype,"logsEntries",2);y([b()],m.prototype,"logsFilterText",2);y([b()],m.prototype,"logsLevelFilters",2);y([b()],m.prototype,"logsAutoFollow",2);y([b()],m.prototype,"logsTruncated",2);y([b()],m.prototype,"logsCursor",2);y([b()],m.prototype,"logsLastFetchAt",2);y([b()],m.prototype,"logsLimit",2);y([b()],m.prototype,"logsMaxBytes",2);y([b()],m.prototype,"logsAtBottom",2);m=y([Xa("clawdbot-app")],m);
//# sourceMappingURL=index-CNUQGStP.js.map

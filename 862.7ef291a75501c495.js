(self.webpackChunkhost_example=self.webpackChunkhost_example||[]).push([[862,861,531,588],{6328:($,O,l)=>{l.d(O,{b:()=>w});var I=l(1631),a=l(4674);function w(C,P){return(0,a.m)(P)?(0,I.z)(C,P,1):(0,I.z)(C,1)}},4716:($,O,l)=>{l.d(O,{x:()=>a});var I=l(9360);function a(w){return(0,I.e)((C,P)=>{try{C.subscribe(P)}finally{P.add(w)}})}},9397:($,O,l)=>{l.d(O,{b:()=>P});var I=l(4674),a=l(9360),w=l(8251),C=l(2737);function P(D,k,M){const f=(0,I.m)(D)||k||M?{next:D,error:k,complete:M}:D;return f?(0,a.e)((A,R)=>{var U;null===(U=f.subscribe)||void 0===U||U.call(f);let L=!0;A.subscribe((0,w.x)(R,E=>{var v;null===(v=f.next)||void 0===v||v.call(f,E),R.next(E)},()=>{var E;L=!1,null===(E=f.complete)||void 0===E||E.call(f),R.complete()},E=>{var v;L=!1,null===(v=f.error)||void 0===v||v.call(f,E),R.error(E)},()=>{var E,v;L&&(null===(E=f.unsubscribe)||void 0===E||E.call(f)),null===(v=f.finalize)||void 0===v||v.call(f)}))}):C.y}},9862:($,O,l)=>{l.r(O),l.d(O,{FetchBackend:()=>re,HTTP_INTERCEPTORS:()=>oe,HttpBackend:()=>v,HttpClient:()=>Ee,HttpClientJsonpModule:()=>ct,HttpClientModule:()=>at,HttpClientXsrfModule:()=>it,HttpContext:()=>pe,HttpContextToken:()=>Fe,HttpErrorResponse:()=>F,HttpEventType:()=>p,HttpFeatureKind:()=>u,HttpHandler:()=>E,HttpHeaderResponse:()=>K,HttpHeaders:()=>b,HttpParams:()=>j,HttpRequest:()=>X,HttpResponse:()=>N,HttpResponseBase:()=>Y,HttpUrlEncodingCodec:()=>ue,HttpXhrBackend:()=>ce,HttpXsrfTokenExtractor:()=>q,JsonpClientBackend:()=>ae,JsonpInterceptor:()=>et,provideHttpClient:()=>Oe,withFetch:()=>ot,withInterceptors:()=>rt,withInterceptorsFromDi:()=>He,withJsonpSupport:()=>ke,withNoXsrfProtection:()=>Se,withRequestsMadeViaParent:()=>st,withXsrfConfiguration:()=>de,\u0275HttpInterceptingHandler:()=>Z,\u0275HttpInterceptorHandler:()=>Z,\u0275withHttpTransferCache:()=>ft});var I=l(5861),a=l(5232),w=l(2096),C=l(5592),P=l(7715),D=l(6328),k=l(2181),M=l(7398),f=l(4716),A=l(4664),R=l(9397),U=l(1374),L=l(1902);class E{}class v{}class b{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?"string"==typeof t?this.lazyInit=()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const s=e.slice(0,r),i=s.toLowerCase(),o=e.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,r)=>{this.setHeaderEntries(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof b?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new b;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof b?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const s=("a"===t.op?this.headers.get(e):void 0)||[];s.push(...r),this.headers.set(e,s);break;case"d":const i=t.value;if(i){let o=this.headers.get(e);if(!o)return;o=o.filter(d=>-1===i.indexOf(d)),0===o.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}else this.headers.delete(e),this.normalizedNames.delete(e)}}setHeaderEntries(t,e){const r=(Array.isArray(e)?e:[e]).map(i=>i.toString()),s=t.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(t,s)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class ue{encodeKey(t){return he(t)}encodeValue(t){return he(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const je=/%(\d[a-f0-9])/gi,Ne={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function he(n){return encodeURIComponent(n).replace(je,(t,e)=>Ne[e]??t)}function G(n){return`${n}`}class j{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new ue,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Ae(n,t){const e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[o,d]=-1==i?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,i)),t.decodeValue(s.slice(i+1))],c=e.get(o)||[];c.push(d),e.set(o,c)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e],s=Array.isArray(r)?r.map(G):[G(r)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const s=t[r];Array.isArray(s)?s.forEach(i=>{e.push({param:r,value:i,op:"a"})}):e.push({param:r,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new j({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(G(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const s=r.indexOf(G(t.value));-1!==s&&r.splice(s,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class Fe{constructor(t){this.defaultValue=t}}class pe{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function fe(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ye(n){return typeof Blob<"u"&&n instanceof Blob}function me(n){return typeof FormData<"u"&&n instanceof FormData}class X{constructor(t,e,r,s){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function Le(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new b),this.context||(this.context=new pe),this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=e;else{const d=e.indexOf("?");this.urlWithParams=e+(-1===d?"?":d<e.length-1?"&":"")+o}}else this.params=new j,this.urlWithParams=e}serializeBody(){return null===this.body?null:fe(this.body)||ye(this.body)||me(this.body)||function Ue(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof j?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||me(this.body)?null:ye(this.body)?this.body.type||null:fe(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof j?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,r=t.url||this.url,s=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,o=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,d=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let c=t.headers||this.headers,T=t.params||this.params;const H=t.context??this.context;return void 0!==t.setHeaders&&(c=Object.keys(t.setHeaders).reduce((m,g)=>m.set(g,t.setHeaders[g]),c)),t.setParams&&(T=Object.keys(t.setParams).reduce((m,g)=>m.set(g,t.setParams[g]),T)),new X(e,r,i,{params:T,headers:c,context:H,reportProgress:d,responseType:s,withCredentials:o})}}var p=(()=>((p=p||{})[p.Sent=0]="Sent",p[p.UploadProgress=1]="UploadProgress",p[p.ResponseHeader=2]="ResponseHeader",p[p.DownloadProgress=3]="DownloadProgress",p[p.Response=4]="Response",p[p.User=5]="User",p))();class Y{constructor(t,e=200,r="OK"){this.headers=t.headers||new b,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class K extends Y{constructor(t={}){super(t),this.type=p.ResponseHeader}clone(t={}){return new K({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class N extends Y{constructor(t={}){super(t),this.type=p.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new N({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class F extends Y{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function ne(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let Ee=(()=>{class n{constructor(e){this.handler=e}request(e,r,s={}){let i;if(e instanceof X)i=e;else{let c,T;c=s.headers instanceof b?s.headers:new b(s.headers),s.params&&(T=s.params instanceof j?s.params:new j({fromObject:s.params})),i=new X(e,r,void 0!==s.body?s.body:null,{headers:c,context:s.context,params:T,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const o=(0,w.of)(i).pipe((0,D.b)(c=>this.handler.handle(c)));if(e instanceof X||"events"===s.observe)return o;const d=o.pipe((0,k.h)(c=>c instanceof N));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe((0,M.U)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return d.pipe((0,M.U)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return d.pipe((0,M.U)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return d.pipe((0,M.U)(c=>c.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new j).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,s={}){return this.request("PATCH",e,ne(s,r))}post(e,r,s={}){return this.request("POST",e,ne(s,r))}put(e,r,s={}){return this.request("PUT",e,ne(s,r))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(E))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const Be=/^\)\]\}',?\n/;function Te(n){if(n.url)return n.url;const t="X-Request-URL".toLocaleLowerCase();return n.headers.get(t)}let re=(()=>{class n{constructor(){this.fetchImpl=(0,a.inject)(Ke,{optional:!0})?.fetch??fetch.bind(globalThis)}handle(e){return new C.y(r=>{const s=new AbortController;return this.doRequest(e,s.signal,r).then(se,i=>r.error(new F({error:i}))),()=>s.abort()})}doRequest(e,r,s){var i=this;return(0,I.Z)(function*(){const o=i.createRequestInit(e);let d;try{const x=i.fetchImpl(e.urlWithParams,{signal:r,...o});(function Je(n){n.then(se,se)})(x),s.next({type:p.Sent}),d=yield x}catch(x){return void s.error(new F({error:x,status:x.status??0,statusText:x.statusText,url:e.urlWithParams,headers:x.headers}))}const c=new b(d.headers),T=d.statusText,H=Te(d)??e.urlWithParams;let m=d.status,g=null;if(e.reportProgress&&s.next(new K({headers:c,status:m,statusText:T,url:H})),d.body){const x=d.headers.get("content-length"),h=[],y=d.body.getReader();let te,_,S=0;for(;;){const{done:W,value:V}=yield y.read();if(W)break;h.push(V),S+=V.length,e.reportProgress&&(_="text"===e.responseType?(_??"")+(te??=new TextDecoder).decode(V,{stream:!0}):void 0,s.next({type:p.DownloadProgress,total:x?+x:void 0,loaded:S,partialText:_}))}const z=i.concatChunks(h,S);try{g=i.parseBody(e,z)}catch(W){return void s.error(new F({error:W,headers:new b(d.headers),status:d.status,statusText:d.statusText,url:Te(d)??e.urlWithParams}))}}0===m&&(m=g?200:0),m>=200&&m<300?(s.next(new N({body:g,headers:c,status:m,statusText:T,url:H})),s.complete()):s.error(new F({error:g,headers:c,status:m,statusText:T,url:H}))})()}parseBody(e,r){switch(e.responseType){case"json":const s=(new TextDecoder).decode(r).replace(Be,"");return""===s?null:JSON.parse(s);case"text":return(new TextDecoder).decode(r);case"blob":return new Blob([r]);case"arraybuffer":return r.buffer}}createRequestInit(e){const r={},s=e.withCredentials?"include":void 0;if(e.headers.forEach((i,o)=>r[i]=o.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){const i=e.detectContentTypeHeader();null!==i&&(r["Content-Type"]=i)}return{body:e.serializeBody(),method:e.method,headers:r,credentials:s}}concatChunks(e,r){const s=new Uint8Array(r);let i=0;for(const o of e)s.set(o,i),i+=o.length;return s}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class Ke{}function se(){}function ge(n,t){return t(n)}function ze(n,t){return(e,r)=>t.intercept(e,{handle:s=>n(s,r)})}const oe=new a.InjectionToken(""),J=new a.InjectionToken(""),_e=new a.InjectionToken("");function Ve(){let n=null;return(t,e)=>{null===n&&(n=((0,a.inject)(oe,{optional:!0})??[]).reduceRight(ze,ge));const r=(0,a.inject)(a.\u0275InitialRenderPendingTasks),s=r.add();return n(t,e).pipe((0,f.x)(()=>r.remove(s)))}}let ie,Z=(()=>{class n extends E{constructor(e,r){super(),this.backend=e,this.injector=r,this.chain=null,this.pendingTasks=(0,a.inject)(a.\u0275InitialRenderPendingTasks)}handle(e){if(null===this.chain){const s=Array.from(new Set([...this.injector.get(J),...this.injector.get(_e,[])]));this.chain=s.reduceRight((i,o)=>function We(n,t,e){return(r,s)=>e.runInContext(()=>t(r,i=>n(i,s)))}(i,o,this.injector),ge)}const r=this.pendingTasks.add();return this.chain(e,s=>this.backend.handle(s)).pipe((0,f.x)(()=>this.pendingTasks.remove(r)))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(v),a.\u0275\u0275inject(a.EnvironmentInjector))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),$e=0;class ve{}function qe(){return"object"==typeof window?window:{}}let ae=(()=>{class n{constructor(e,r){this.callbackMap=e,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+$e++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new C.y(r=>{const s=this.nextCallback(),i=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${s}$1`),o=this.document.createElement("script");o.src=i;let d=null,c=!1;this.callbackMap[s]=g=>{delete this.callbackMap[s],d=g,c=!0};const T=()=>{o.parentNode&&o.parentNode.removeChild(o),delete this.callbackMap[s]};return o.addEventListener("load",g=>{this.resolvedPromise.then(()=>{T(),c?(r.next(new N({body:d,status:200,statusText:"OK",url:i})),r.complete()):r.error(new F({url:i,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),o.addEventListener("error",g=>{T(),r.error(new F({error:g,status:0,statusText:"JSONP Error",url:i}))}),this.document.body.appendChild(o),r.next({type:p.Sent}),()=>{c||this.removeListeners(o),T()}})}removeListeners(e){ie||(ie=this.document.implementation.createHTMLDocument()),ie.adoptNode(e)}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(ve),a.\u0275\u0275inject(L.DOCUMENT))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function Ce(n,t){return"JSONP"===n.method?(0,a.inject)(ae).handle(n):t(n)}let et=(()=>{class n{constructor(e){this.injector=e}intercept(e,r){return this.injector.runInContext(()=>Ce(e,s=>r.handle(s)))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(a.EnvironmentInjector))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const tt=/^\)\]\}',?\n/;let ce=(()=>{class n{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new a.\u0275RuntimeError(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,P.D)(r.\u0275loadImpl()):(0,w.of)(null)).pipe((0,A.w)(()=>new C.y(i=>{const o=r.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((h,y)=>o.setRequestHeader(h,y.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const h=e.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(e.responseType){const h=e.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const d=e.serializeBody();let c=null;const T=()=>{if(null!==c)return c;const h=o.statusText||"OK",y=new b(o.getAllResponseHeaders()),S=function nt(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(o)||e.url;return c=new K({headers:y,status:o.status,statusText:h,url:S}),c},H=()=>{let{headers:h,status:y,statusText:S,url:te}=T(),_=null;204!==y&&(_=typeof o.response>"u"?o.responseText:o.response),0===y&&(y=_?200:0);let z=y>=200&&y<300;if("json"===e.responseType&&"string"==typeof _){const W=_;_=_.replace(tt,"");try{_=""!==_?JSON.parse(_):null}catch(V){_=W,z&&(z=!1,_={error:V,text:_})}}z?(i.next(new N({body:_,headers:h,status:y,statusText:S,url:te||void 0})),i.complete()):i.error(new F({error:_,headers:h,status:y,statusText:S,url:te||void 0}))},m=h=>{const{url:y}=T(),S=new F({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:y||void 0});i.error(S)};let g=!1;const le=h=>{g||(i.next(T()),g=!0);let y={type:p.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(y.total=h.total),"text"===e.responseType&&o.responseText&&(y.partialText=o.responseText),i.next(y)},x=h=>{let y={type:p.UploadProgress,loaded:h.loaded};h.lengthComputable&&(y.total=h.total),i.next(y)};return o.addEventListener("load",H),o.addEventListener("error",m),o.addEventListener("timeout",m),o.addEventListener("abort",m),e.reportProgress&&(o.addEventListener("progress",le),null!==d&&o.upload&&o.upload.addEventListener("progress",x)),o.send(d),i.next({type:p.Sent}),()=>{o.removeEventListener("error",m),o.removeEventListener("abort",m),o.removeEventListener("load",H),o.removeEventListener("timeout",m),e.reportProgress&&(o.removeEventListener("progress",le),null!==d&&o.upload&&o.upload.removeEventListener("progress",x)),o.readyState!==o.DONE&&o.abort()}})))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(L.XhrFactory))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const Q=new a.InjectionToken("XSRF_ENABLED"),we="XSRF-TOKEN",Pe=new a.InjectionToken("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>we}),Re="X-XSRF-TOKEN",be=new a.InjectionToken("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>Re});class q{}let xe=(()=>{class n{constructor(e,r,s){this.doc=e,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,L.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(L.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(Pe))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function Me(n,t){const e=n.url.toLowerCase();if(!(0,a.inject)(Q)||"GET"===n.method||"HEAD"===n.method||e.startsWith("http://")||e.startsWith("https://"))return t(n);const r=(0,a.inject)(q).getToken(),s=(0,a.inject)(be);return null!=r&&!n.headers.has(s)&&(n=n.clone({headers:n.headers.set(s,r)})),t(n)}let Ie=(()=>{class n{constructor(e){this.injector=e}intercept(e,r){return this.injector.runInContext(()=>Me(e,s=>r.handle(s)))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(a.EnvironmentInjector))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();var u=(()=>((u=u||{})[u.Interceptors=0]="Interceptors",u[u.LegacyInterceptors=1]="LegacyInterceptors",u[u.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",u[u.NoXsrfProtection=3]="NoXsrfProtection",u[u.JsonpSupport=4]="JsonpSupport",u[u.RequestsMadeViaParent=5]="RequestsMadeViaParent",u[u.Fetch=6]="Fetch",u))();function B(n,t){return{\u0275kind:n,\u0275providers:t}}function Oe(...n){const t=[Ee,ce,Z,{provide:E,useExisting:Z},{provide:v,useExisting:ce},{provide:J,useValue:Me,multi:!0},{provide:Q,useValue:!0},{provide:q,useClass:xe}];for(const e of n)t.push(...e.\u0275providers);return(0,a.makeEnvironmentProviders)(t)}function rt(n){return B(u.Interceptors,n.map(t=>({provide:J,useValue:t,multi:!0})))}const De=new a.InjectionToken("LEGACY_INTERCEPTOR_FN");function He(){return B(u.LegacyInterceptors,[{provide:De,useFactory:Ve},{provide:J,useExisting:De,multi:!0}])}function de({cookieName:n,headerName:t}){const e=[];return void 0!==n&&e.push({provide:Pe,useValue:n}),void 0!==t&&e.push({provide:be,useValue:t}),B(u.CustomXsrfConfiguration,e)}function Se(){return B(u.NoXsrfProtection,[{provide:Q,useValue:!1}])}function ke(){return B(u.JsonpSupport,[ae,{provide:ve,useFactory:qe},{provide:J,useValue:Ce,multi:!0}])}function st(){return B(u.RequestsMadeViaParent,[{provide:v,useFactory:()=>(0,a.inject)(E,{skipSelf:!0,optional:!0})}])}function ot(){return B(u.Fetch,[re,{provide:v,useExisting:re}])}let it=(()=>{class n{static disable(){return{ngModule:n,providers:[Se().\u0275providers]}}static withOptions(e={}){return{ngModule:n,providers:de(e).\u0275providers}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ie,{provide:oe,useExisting:Ie,multi:!0},{provide:q,useClass:xe},de({cookieName:we,headerName:Re}).\u0275providers,{provide:Q,useValue:!0}]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=a.\u0275\u0275defineInjector({providers:[Oe(He())]}),n})(),ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=a.\u0275\u0275defineInjector({providers:[ke().\u0275providers]}),n})();const ee=new a.InjectionToken(""),dt=["GET","HEAD"];function lt(n,t){const{isCacheActive:e}=(0,a.inject)(ee);if(!e||!dt.includes(n.method))return t(n);const r=(0,a.inject)(a.TransferState),s=function ht(n){const{params:t,method:e,responseType:r,url:s}=n,d=function pt(n){let t=0;for(const e of n)t=Math.imul(31,t)+e.charCodeAt(0)<<0;return t+=2147483648,t.toString()}(e+"."+r+"."+s+"?"+t.keys().sort().map(c=>`${c}=${t.getAll(c)}`).join("&"));return(0,a.makeStateKey)(d)}(n),i=r.get(s,null);if(i){let o=i.body;switch(i.responseType){case"arraybuffer":o=(new TextEncoder).encode(i.body).buffer;break;case"blob":o=new Blob([i.body])}return(0,w.of)(new N({body:o,headers:new b(i.headers),status:i.status,statusText:i.statusText,url:i.url}))}return t(n).pipe((0,R.b)(o=>{o instanceof N&&r.set(s,{body:o.body,headers:ut(o.headers),status:o.status,statusText:o.statusText,url:o.url||"",responseType:n.responseType})}))}function ut(n){const t={};for(const e of n.keys()){const r=n.getAll(e);null!==r&&(t[e]=r)}return t}function ft(){return[{provide:ee,useFactory:()=>((0,a.inject)(a.\u0275ENABLED_SSR_FEATURES).add("httpcache"),{isCacheActive:!0})},{provide:_e,useValue:lt,multi:!0,deps:[a.TransferState,ee]},{provide:a.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const n=(0,a.inject)(a.ApplicationRef),t=(0,a.inject)(ee);return()=>{n.isStable.pipe((0,U.P)(e=>e)).toPromise().then(()=>{t.isCacheActive=!1})}}}]}},5861:($,O,l)=>{function I(w,C,P,D,k,M,f){try{var A=w[M](f),R=A.value}catch(U){return void P(U)}A.done?C(R):Promise.resolve(R).then(D,k)}function a(w){return function(){var C=this,P=arguments;return new Promise(function(D,k){var M=w.apply(C,P);function f(R){I(M,D,k,f,A,"next",R)}function A(R){I(M,D,k,f,A,"throw",R)}f(void 0)})}}l.d(O,{Z:()=>a})}}]);
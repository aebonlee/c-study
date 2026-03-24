import{h as Xe,k as ze,m as De,_ as Je,u as Qe,r as Ae,j as y}from"./index-C8a8tVZm.js";import{C as et}from"./CodeEditor-CWAaONDy.js";var $={},Me;function tt(){if(Me)return $;Me=1;var m=$&&$.__assign||function(){return m=Object.assign||function(a){for(var e,l=1,c=arguments.length;l<c;l++){e=arguments[l];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o])}return a},m.apply(this,arguments)},B=$&&$.__createBinding||(Object.create?(function(a,e,l,c){c===void 0&&(c=l);var o=Object.getOwnPropertyDescriptor(e,l);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[l]}}),Object.defineProperty(a,c,o)}):(function(a,e,l,c){c===void 0&&(c=l),a[c]=e[l]})),s=$&&$.__setModuleDefault||(Object.create?(function(a,e){Object.defineProperty(a,"default",{enumerable:!0,value:e})}):function(a,e){a.default=e}),g=$&&$.__importStar||function(a){if(a&&a.__esModule)return a;var e={};if(a!=null)for(var l in a)l!=="default"&&Object.prototype.hasOwnProperty.call(a,l)&&B(e,a,l);return s(e,a),e},b=$&&$.__rest||function(a,e){var l={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&e.indexOf(c)<0&&(l[c]=a[c]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,c=Object.getOwnPropertySymbols(a);o<c.length;o++)e.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(a,c[o])&&(l[c[o]]=a[c[o]]);return l};Object.defineProperty($,"__esModule",{value:!0});var v=g(Xe()),F=89,u=90,A=77,w=57,M=219,W=222,z=192,Z=100,V=3e3,k=typeof window<"u"&&"navigator"in window&&/Win/i.test(navigator.platform),p=typeof window<"u"&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),E="npm__react-simple-code-editor__textarea",n=`
/**
 * Reset the text fill color so that placeholder is visible
 */
.`.concat(E,`:empty {
  -webkit-text-fill-color: inherit !important;
}

/**
 * Hack to apply on some CSS on IE10 and IE11
 */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /**
    * IE doesn't support '-webkit-text-fill-color'
    * So we use 'color: transparent' to make the text transparent on IE
    * Unlike other browsers, it doesn't affect caret color in IE
    */
  .`).concat(E,` {
    color: transparent !important;
  }

  .`).concat(E,`::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`),t=v.forwardRef(function(e,l){var c=e.autoFocus,o=e.disabled,x=e.form,_=e.highlight,I=e.ignoreTabKey,fe=I===void 0?!1:I,ne=e.insertSpaces,xe=ne===void 0?!0:ne,be=e.maxLength,ge=e.minLength,K=e.name,D=e.onBlur,G=e.onClick,X=e.onFocus,P=e.onKeyDown,Ee=e.onKeyUp,L=e.onValueChange,U=e.padding,j=U===void 0?0:U,J=e.placeholder,ae=e.preClassName,pe=e.readOnly,re=e.required,Q=e.style,he=e.tabSize,ie=he===void 0?2:he,Ce=e.textareaClassName,He=e.textareaId,_e=e.value,Be=b(e,["autoFocus","disabled","form","highlight","ignoreTabKey","insertSpaces","maxLength","minLength","name","onBlur","onClick","onFocus","onKeyDown","onKeyUp","onValueChange","padding","placeholder","preClassName","readOnly","required","style","tabSize","textareaClassName","textareaId","value"]),S=v.useRef({stack:[],offset:-1}),ve=v.useRef(null),Ke=v.useState(!0),We=Ke[0],Ge=Ke[1],je={paddingTop:typeof j=="object"?j.top:j,paddingRight:typeof j=="object"?j.right:j,paddingBottom:typeof j=="object"?j.bottom:j,paddingLeft:typeof j=="object"?j.left:j},we=_(_e),Y=function(i,h){return i.substring(0,h).split(`
`)},me=v.useCallback(function(i,h){var d,f,C;h===void 0&&(h=!1);var O=S.current,R=O.stack,se=O.offset;if(R.length&&se>-1){S.current.stack=R.slice(0,se+1);var le=S.current.stack.length;if(le>Z){var te=le-Z;S.current.stack=R.slice(te,le),S.current.offset=Math.max(S.current.offset-te,0)}}var N=Date.now();if(h){var q=S.current.stack[S.current.offset];if(q&&N-q.timestamp<V){var oe=/[^a-z0-9]([a-z0-9]+)$/i,T=(d=Y(q.value,q.selectionStart).pop())===null||d===void 0?void 0:d.match(oe),ue=(f=Y(i.value,i.selectionStart).pop())===null||f===void 0?void 0:f.match(oe);if(T?.[1]&&(!((C=ue?.[1])===null||C===void 0)&&C.startsWith(T[1]))){S.current.stack[S.current.offset]=m(m({},i),{timestamp:N});return}}}S.current.stack.push(m(m({},i),{timestamp:N})),S.current.offset++},[]),Oe=v.useCallback(function(){var i=ve.current;if(i){var h=i.value,d=i.selectionStart,f=i.selectionEnd;me({value:h,selectionStart:d,selectionEnd:f})}},[me]),Se=function(i){var h=ve.current;h&&(h.value=i.value,h.selectionStart=i.selectionStart,h.selectionEnd=i.selectionEnd,L?.(i.value))},ee=function(i){var h=ve.current,d=S.current.stack[S.current.offset];d&&h&&(S.current.stack[S.current.offset]=m(m({},d),{selectionStart:h.selectionStart,selectionEnd:h.selectionEnd})),me(i),Se(i)},Ue=function(){var i=S.current,h=i.stack,d=i.offset,f=h[d-1];f&&(Se(f),S.current.offset=Math.max(d-1,0))},qe=function(){var i=S.current,h=i.stack,d=i.offset,f=h[d+1];f&&(Se(f),S.current.offset=Math.min(d+1,h.length-1))},Ye=function(i){if(!(P&&(P(i),i.defaultPrevented))){i.key==="Escape"&&i.currentTarget.blur();var h=i.currentTarget,d=h.value,f=h.selectionStart,C=h.selectionEnd,O=(xe?" ":"	").repeat(ie);if(i.key==="Tab"&&!fe&&We)if(i.preventDefault(),i.shiftKey){var R=Y(d,f),se=R.length-1,le=Y(d,C).length-1,te=d.split(`
`).map(function(ce,$e){return $e>=se&&$e<=le&&ce.startsWith(O)?ce.substring(O.length):ce}).join(`
`);if(d!==te){var N=R[se];ee({value:te,selectionStart:N?.startsWith(O)?f-O.length:f,selectionEnd:C-(d.length-te.length)})}}else if(f!==C){var R=Y(d,f),q=R.length-1,oe=Y(d,C).length-1,N=R[q];ee({value:d.split(`
`).map(function(Le,Te){return Te>=q&&Te<=oe?O+Le:Le}).join(`
`),selectionStart:N&&/\S/.test(N)?f+O.length:f,selectionEnd:C+O.length*(oe-q+1)})}else{var T=f+O.length;ee({value:d.substring(0,f)+O+d.substring(C),selectionStart:T,selectionEnd:T})}else if(i.key==="Backspace"){var ue=f!==C,Ve=d.substring(0,f);if(Ve.endsWith(O)&&!ue){i.preventDefault();var T=f-O.length;ee({value:d.substring(0,f-O.length)+d.substring(C),selectionStart:T,selectionEnd:T})}}else if(i.key==="Enter"){if(f===C){var Fe=Y(d,f).pop(),ye=Fe?.match(/^\s+/);if(ye?.[0]){i.preventDefault();var Pe=`
`+ye[0],T=f+Pe.length;ee({value:d.substring(0,f)+Pe+d.substring(C),selectionStart:T,selectionEnd:T})}}}else if(i.keyCode===w||i.keyCode===M||i.keyCode===W||i.keyCode===z){var H=void 0;i.keyCode===w&&i.shiftKey?H=["(",")"]:i.keyCode===M?i.shiftKey?H=["{","}"]:H=["[","]"]:i.keyCode===W?i.shiftKey?H=['"','"']:H=["'","'"]:i.keyCode===z&&!i.shiftKey&&(H=["`","`"]),f!==C&&H&&(i.preventDefault(),ee({value:d.substring(0,f)+H[0]+d.substring(f,C)+H[1]+d.substring(C),selectionStart:f,selectionEnd:C+2}))}else(p?i.metaKey&&i.keyCode===u:i.ctrlKey&&i.keyCode===u)&&!i.shiftKey&&!i.altKey?(i.preventDefault(),Ue()):(p?i.metaKey&&i.keyCode===u&&i.shiftKey:k?i.ctrlKey&&i.keyCode===F:i.ctrlKey&&i.keyCode===u&&i.shiftKey)&&!i.altKey?(i.preventDefault(),qe()):i.keyCode===A&&i.ctrlKey&&(!p||i.shiftKey)&&(i.preventDefault(),Ge(function(ce){return!ce}))}},Ze=function(i){var h=i.currentTarget,d=h.value,f=h.selectionStart,C=h.selectionEnd;me({value:d,selectionStart:f,selectionEnd:C},!0),L(d)};return v.useEffect(function(){Oe()},[Oe]),v.useImperativeHandle(l,function(){return{get session(){return{history:S.current}},set session(i){S.current=i.history}}},[]),v.createElement("div",m({},Be,{style:m(m({},r.container),Q)}),v.createElement("pre",m({className:ae,"aria-hidden":"true",style:m(m(m({},r.editor),r.highlight),je)},typeof we=="string"?{dangerouslySetInnerHTML:{__html:we+"<br />"}}:{children:we})),v.createElement("textarea",{ref:function(i){return ve.current=i},style:m(m(m({},r.editor),r.textarea),je),className:E+(Ce?" ".concat(Ce):""),id:He,value:_e,onChange:Ze,onKeyDown:Ye,onClick:G,onKeyUp:Ee,onFocus:X,onBlur:D,disabled:o,form:x,maxLength:be,minLength:ge,name:K,placeholder:J,readOnly:pe,required:re,autoFocus:c,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),v.createElement("style",{dangerouslySetInnerHTML:{__html:n}}))}),r={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}};return $.default=t,$}var nt=tt();const Ie=ze(nt);var ke={exports:{}},Ne;function at(){return Ne||(Ne=1,(function(m){var B=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var s=(function(g){var b=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,F={},u={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function n(t){return t instanceof A?new A(t.type,n(t.content),t.alias):Array.isArray(t)?t.map(n):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++v}),n.__id},clone:function n(t,r){r=r||{};var a,e;switch(u.util.type(t)){case"Object":if(e=u.util.objId(t),r[e])return r[e];a={},r[e]=a;for(var l in t)t.hasOwnProperty(l)&&(a[l]=n(t[l],r));return a;case"Array":return e=u.util.objId(t),r[e]?r[e]:(a=[],r[e]=a,t.forEach(function(c,o){a[o]=n(c,r)}),a);default:return t}},getLanguage:function(n){for(;n;){var t=b.exec(n.className);if(t)return t[1].toLowerCase();n=n.parentElement}return"none"},setLanguage:function(n,t){n.className=n.className.replace(RegExp(b,"gi"),""),n.classList.add("language-"+t)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(a){var n=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(n){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==n)return t[r]}return null}},isActive:function(n,t,r){for(var a="no-"+t;n;){var e=n.classList;if(e.contains(t))return!0;if(e.contains(a))return!1;n=n.parentElement}return!!r}},languages:{plain:F,plaintext:F,text:F,txt:F,extend:function(n,t){var r=u.util.clone(u.languages[n]);for(var a in t)r[a]=t[a];return r},insertBefore:function(n,t,r,a){a=a||u.languages;var e=a[n],l={};for(var c in e)if(e.hasOwnProperty(c)){if(c==t)for(var o in r)r.hasOwnProperty(o)&&(l[o]=r[o]);r.hasOwnProperty(c)||(l[c]=e[c])}var x=a[n];return a[n]=l,u.languages.DFS(u.languages,function(_,I){I===x&&_!=n&&(this[_]=l)}),l},DFS:function n(t,r,a,e){e=e||{};var l=u.util.objId;for(var c in t)if(t.hasOwnProperty(c)){r.call(t,c,t[c],a||c);var o=t[c],x=u.util.type(o);x==="Object"&&!e[l(o)]?(e[l(o)]=!0,n(o,r,null,e)):x==="Array"&&!e[l(o)]&&(e[l(o)]=!0,n(o,r,c,e))}}},plugins:{},highlightAll:function(n,t){u.highlightAllUnder(document,n,t)},highlightAllUnder:function(n,t,r){var a={callback:r,container:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};u.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),u.hooks.run("before-all-elements-highlight",a);for(var e=0,l;l=a.elements[e++];)u.highlightElement(l,t===!0,a.callback)},highlightElement:function(n,t,r){var a=u.util.getLanguage(n),e=u.languages[a];u.util.setLanguage(n,a);var l=n.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&u.util.setLanguage(l,a);var c=n.textContent,o={element:n,language:a,grammar:e,code:c};function x(I){o.highlightedCode=I,u.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,u.hooks.run("after-highlight",o),u.hooks.run("complete",o),r&&r.call(o.element)}if(u.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){u.hooks.run("complete",o),r&&r.call(o.element);return}if(u.hooks.run("before-highlight",o),!o.grammar){x(u.util.encode(o.code));return}if(t&&g.Worker){var _=new Worker(u.filename);_.onmessage=function(I){x(I.data)},_.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else x(u.highlight(o.code,o.grammar,o.language))},highlight:function(n,t,r){var a={code:n,grammar:t,language:r};if(u.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=u.tokenize(a.code,a.grammar),u.hooks.run("after-tokenize",a),A.stringify(u.util.encode(a.tokens),a.language)},tokenize:function(n,t){var r=t.rest;if(r){for(var a in r)t[a]=r[a];delete t.rest}var e=new W;return z(e,e.head,n),M(n,e,t,e.head,0),V(e)},hooks:{all:{},add:function(n,t){var r=u.hooks.all;r[n]=r[n]||[],r[n].push(t)},run:function(n,t){var r=u.hooks.all[n];if(!(!r||!r.length))for(var a=0,e;e=r[a++];)e(t)}},Token:A};g.Prism=u;function A(n,t,r,a){this.type=n,this.content=t,this.alias=r,this.length=(a||"").length|0}A.stringify=function n(t,r){if(typeof t=="string")return t;if(Array.isArray(t)){var a="";return t.forEach(function(x){a+=n(x,r)}),a}var e={type:t.type,content:n(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},l=t.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(e.classes,l):e.classes.push(l)),u.hooks.run("wrap",e);var c="";for(var o in e.attributes)c+=" "+o+'="'+(e.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+e.tag+' class="'+e.classes.join(" ")+'"'+c+">"+e.content+"</"+e.tag+">"};function w(n,t,r,a){n.lastIndex=t;var e=n.exec(r);if(e&&a&&e[1]){var l=e[1].length;e.index+=l,e[0]=e[0].slice(l)}return e}function M(n,t,r,a,e,l){for(var c in r)if(!(!r.hasOwnProperty(c)||!r[c])){var o=r[c];o=Array.isArray(o)?o:[o];for(var x=0;x<o.length;++x){if(l&&l.cause==c+","+x)return;var _=o[x],I=_.inside,fe=!!_.lookbehind,ne=!!_.greedy,xe=_.alias;if(ne&&!_.pattern.global){var be=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,be+"g")}for(var ge=_.pattern||_,K=a.next,D=e;K!==t.tail&&!(l&&D>=l.reach);D+=K.value.length,K=K.next){var G=K.value;if(t.length>n.length)return;if(!(G instanceof A)){var X=1,P;if(ne){if(P=w(ge,D,n,fe),!P||P.index>=n.length)break;var j=P.index,Ee=P.index+P[0].length,L=D;for(L+=K.value.length;j>=L;)K=K.next,L+=K.value.length;if(L-=K.value.length,D=L,K.value instanceof A)continue;for(var U=K;U!==t.tail&&(L<Ee||typeof U.value=="string");U=U.next)X++,L+=U.value.length;X--,G=n.slice(D,L),P.index-=D}else if(P=w(ge,0,G,fe),!P)continue;var j=P.index,J=P[0],ae=G.slice(0,j),pe=G.slice(j+J.length),re=D+G.length;l&&re>l.reach&&(l.reach=re);var Q=K.prev;ae&&(Q=z(t,Q,ae),D+=ae.length),Z(t,Q,X);var he=new A(c,I?u.tokenize(J,I):J,xe,J);if(K=z(t,Q,he),pe&&z(t,K,pe),X>1){var ie={cause:c+","+x,reach:re};M(n,t,r,K.prev,D,ie),l&&ie.reach>l.reach&&(l.reach=ie.reach)}}}}}}function W(){var n={value:null,prev:null,next:null},t={value:null,prev:n,next:null};n.next=t,this.head=n,this.tail=t,this.length=0}function z(n,t,r){var a=t.next,e={value:r,prev:t,next:a};return t.next=e,a.prev=e,n.length++,e}function Z(n,t,r){for(var a=t.next,e=0;e<r&&a!==n.tail;e++)a=a.next;t.next=a,a.prev=t,n.length-=e}function V(n){for(var t=[],r=n.head.next;r!==n.tail;)t.push(r.value),r=r.next;return t}if(!g.document)return g.addEventListener&&(u.disableWorkerMessageHandler||g.addEventListener("message",function(n){var t=JSON.parse(n.data),r=t.language,a=t.code,e=t.immediateClose;g.postMessage(u.highlight(a,u.languages[r],r)),e&&g.close()},!1)),u;var k=u.util.currentScript();k&&(u.filename=k.src,k.hasAttribute("data-manual")&&(u.manual=!0));function p(){u.manual||u.highlightAll()}if(!u.manual){var E=document.readyState;E==="loading"||E==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return u})(B);m.exports&&(m.exports=s),typeof De<"u"&&(De.Prism=s),s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup,s.hooks.add("wrap",function(g){g.type==="entity"&&(g.attributes.title=g.content.replace(/&amp;/,"&"))}),Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(b,v){var F={};F["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[v]},F.cdata=/^<!\[CDATA\[|\]\]>$/i;var u={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:F}};u["language-"+v]={pattern:/[\s\S]+/,inside:s.languages[v]};var A={};A[b]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return b}),"i"),lookbehind:!0,greedy:!0,inside:u},s.languages.insertBefore("markup","cdata",A)}}),Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(g,b){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+g+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[b,"language-"+b],inside:s.languages[b]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.xml=s.languages.extend("markup",{}),s.languages.ssml=s.languages.xml,s.languages.atom=s.languages.xml,s.languages.rss=s.languages.xml,(function(g){var b=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;g.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+b.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+b.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+b.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+b.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:b,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},g.languages.css.atrule.inside.rest=g.languages.css;var v=g.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))})(s),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),s.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,s.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),s.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),s.languages.js=s.languages.javascript,(function(){if(typeof s>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var g="Loading…",b=function(k,p){return"✖ Error "+k+" while fetching file: "+p},v="✖ Error: File does not exist or is empty",F={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},u="data-src-status",A="loading",w="loaded",M="failed",W="pre[data-src]:not(["+u+'="'+w+'"]):not(['+u+'="'+A+'"])';function z(k,p,E){var n=new XMLHttpRequest;n.open("GET",k,!0),n.onreadystatechange=function(){n.readyState==4&&(n.status<400&&n.responseText?p(n.responseText):n.status>=400?E(b(n.status,n.statusText)):E(v))},n.send(null)}function Z(k){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(k||"");if(p){var E=Number(p[1]),n=p[2],t=p[3];return n?t?[E,Number(t)]:[E,void 0]:[E,E]}}s.hooks.add("before-highlightall",function(k){k.selector+=", "+W}),s.hooks.add("before-sanity-check",function(k){var p=k.element;if(p.matches(W)){k.code="",p.setAttribute(u,A);var E=p.appendChild(document.createElement("CODE"));E.textContent=g;var n=p.getAttribute("data-src"),t=k.language;if(t==="none"){var r=(/\.(\w+)$/.exec(n)||[,"none"])[1];t=F[r]||r}s.util.setLanguage(E,t),s.util.setLanguage(p,t);var a=s.plugins.autoloader;a&&a.loadLanguages(t),z(n,function(e){p.setAttribute(u,w);var l=Z(p.getAttribute("data-range"));if(l){var c=e.split(/\r\n?|\n/g),o=l[0],x=l[1]==null?c.length:l[1];o<0&&(o+=c.length),o=Math.max(0,Math.min(o-1,c.length)),x<0&&(x+=c.length),x=Math.max(0,Math.min(x,c.length)),e=c.slice(o,x).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(o+1))}E.textContent=e,s.highlightElement(E)},function(e){p.setAttribute(u,M),E.textContent=e})}}),s.plugins.fileHighlight={highlight:function(p){for(var E=(p||document).querySelectorAll(W),n=0,t;t=E[n++];)s.highlightElement(t)}};var V=!1;s.fileHighlight=function(){V||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),V=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(ke)),ke.exports}var rt=at();const Re=ze(rt);Ie?.default;typeof globalThis<"u"&&(globalThis.Prism=Re);typeof window<"u"&&(window.Prism=Re);Je(()=>import("./prism-c-BI05wwL9.js"),[]).then(()=>{});const de=[{step:1,titleKo:"기초 출력",titleEn:"Basic Output",descKo:"printf를 사용하여 다양한 출력을 연습합니다.",descEn:"Practice various outputs using printf.",examples:[{titleKo:"Hello World 출력",titleEn:"Print Hello World",code:`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,expected:"Hello, World!"},{titleKo:"여러 줄 출력",titleEn:"Multi-line Output",code:`#include <stdio.h>

int main() {
    printf("Line 1\\n");
    printf("Line 2\\n");
    printf("Line 3\\n");
    return 0;
}`,expected:`Line 1
Line 2
Line 3`}]},{step:2,titleKo:"변수와 입력",titleEn:"Variables & Input",descKo:"변수를 선언하고 scanf로 입력받습니다.",descEn:"Declare variables and receive input with scanf.",examples:[{titleKo:"정수 변수 선언",titleEn:"Integer Variables",code:`#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    int sum = a + b;
    printf("Sum: %d\\n", sum);
    return 0;
}`,expected:"Sum: 30"},{titleKo:"다양한 자료형",titleEn:"Various Data Types",code:`#include <stdio.h>

int main() {
    int age = 25;
    float height = 175.5f;
    char grade = 'A';
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);
    return 0;
}`,expected:`Age: 25
Height: 175.5
Grade: A`}]},{step:3,titleKo:"조건문",titleEn:"Conditionals",descKo:"if-else와 switch문을 연습합니다.",descEn:"Practice if-else and switch statements.",examples:[{titleKo:"짝수/홀수 판별",titleEn:"Even/Odd Check",code:`#include <stdio.h>

int main() {
    int num = 7;
    if (num % 2 == 0) {
        printf("%d is even\\n", num);
    } else {
        printf("%d is odd\\n", num);
    }
    return 0;
}`,expected:"7 is odd"},{titleKo:"학점 계산",titleEn:"Grade Calculator",code:`#include <stdio.h>

int main() {
    int score = 85;
    char grade;
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else grade = 'F';
    printf("Score: %d, Grade: %c\\n", score, grade);
    return 0;
}`,expected:"Score: 85, Grade: B"}]},{step:4,titleKo:"반복문",titleEn:"Loops",descKo:"for, while, do-while 반복문을 연습합니다.",descEn:"Practice for, while, and do-while loops.",examples:[{titleKo:"1부터 10까지 합",titleEn:"Sum 1 to 10",code:`#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("Sum: %d\\n", sum);
    return 0;
}`,expected:"Sum: 55"},{titleKo:"구구단 출력",titleEn:"Multiplication Table",code:`#include <stdio.h>

int main() {
    int n = 5;
    for (int i = 1; i <= 9; i++) {
        printf("%d x %d = %d\\n", n, i, n * i);
    }
    return 0;
}`,expected:`5 x 1 = 5
...
5 x 9 = 45`}]},{step:5,titleKo:"함수",titleEn:"Functions",descKo:"함수를 정의하고 호출하는 연습을 합니다.",descEn:"Practice defining and calling functions.",examples:[{titleKo:"최대값 함수",titleEn:"Max Function",code:`#include <stdio.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    int result = max(10, 25);
    printf("Max: %d\\n", result);
    return 0;
}`,expected:"Max: 25"},{titleKo:"팩토리얼 함수",titleEn:"Factorial Function",code:`#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("5! = %d\\n", factorial(5));
    return 0;
}`,expected:"5! = 120"}]},{step:6,titleKo:"배열",titleEn:"Arrays",descKo:"배열의 선언, 초기화, 순회를 연습합니다.",descEn:"Practice array declaration, initialization, and traversal.",examples:[{titleKo:"배열 평균 계산",titleEn:"Array Average",code:`#include <stdio.h>

int main() {
    int scores[] = {90, 85, 78, 92, 88};
    int n = sizeof(scores) / sizeof(scores[0]);
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += scores[i];
    }
    printf("Average: %.1f\\n", (float)sum / n);
    return 0;
}`,expected:"Average: 86.6"},{titleKo:"배열 최대/최소",titleEn:"Array Min/Max",code:`#include <stdio.h>

int main() {
    int arr[] = {3, 7, 1, 9, 4, 6};
    int n = 6;
    int max = arr[0], min = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    printf("Max: %d, Min: %d\\n", max, min);
    return 0;
}`,expected:"Max: 9, Min: 1"}]},{step:7,titleKo:"포인터",titleEn:"Pointers",descKo:"포인터 선언, 역참조, 배열 포인터를 연습합니다.",descEn:"Practice pointer declaration, dereferencing, and array pointers.",examples:[{titleKo:"포인터 기본",titleEn:"Basic Pointers",code:`#include <stdio.h>

int main() {
    int x = 42;
    int *ptr = &x;
    printf("Value: %d\\n", *ptr);
    printf("Address: %p\\n", (void*)ptr);
    *ptr = 100;
    printf("New value: %d\\n", x);
    return 0;
}`,expected:`Value: 42
Address: ...
New value: 100`},{titleKo:"swap 함수",titleEn:"Swap Function",code:`#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("After: x=%d, y=%d\\n", x, y);
    return 0;
}`,expected:`Before: x=10, y=20
After: x=20, y=10`}]},{step:8,titleKo:"문자열 처리",titleEn:"String Handling",descKo:"문자열 함수와 문자열 조작을 연습합니다.",descEn:"Practice string functions and manipulation.",examples:[{titleKo:"문자열 길이와 복사",titleEn:"String Length & Copy",code:`#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Hello, C!";
    char dest[20];
    strcpy(dest, src);
    printf("String: %s\\n", dest);
    printf("Length: %lu\\n", strlen(dest));
    return 0;
}`,expected:`String: Hello, C!
Length: 9`},{titleKo:"문자열 비교와 결합",titleEn:"String Compare & Concat",code:`#include <stdio.h>
#include <string.h>

int main() {
    char str1[30] = "Hello";
    char str2[] = " World";
    strcat(str1, str2);
    printf("%s\\n", str1);
    printf("Compare: %d\\n", strcmp("abc", "abc"));
    return 0;
}`,expected:`Hello World
Compare: 0`}]},{step:9,titleKo:"구조체",titleEn:"Structs",descKo:"구조체 정의, 초기화, 포인터 활용을 연습합니다.",descEn:"Practice struct definition, initialization, and pointer usage.",examples:[{titleKo:"학생 구조체",titleEn:"Student Struct",code:`#include <stdio.h>

typedef struct {
    char name[20];
    int age;
    float gpa;
} Student;

int main() {
    Student s = {"Kim", 20, 3.8};
    printf("Name: %s\\n", s.name);
    printf("Age: %d\\n", s.age);
    printf("GPA: %.1f\\n", s.gpa);
    return 0;
}`,expected:`Name: Kim
Age: 20
GPA: 3.8`},{titleKo:"구조체 배열",titleEn:"Struct Array",code:`#include <stdio.h>

typedef struct {
    char title[30];
    int pages;
} Book;

int main() {
    Book books[] = {
        {"C Programming", 400},
        {"Data Structures", 350}
    };
    for (int i = 0; i < 2; i++) {
        printf("%s (%d pages)\\n",
               books[i].title, books[i].pages);
    }
    return 0;
}`,expected:`C Programming (400 pages)
Data Structures (350 pages)`}]},{step:10,titleKo:"동적 메모리와 파일",titleEn:"Dynamic Memory & Files",descKo:"malloc/free와 파일 입출력을 종합 연습합니다.",descEn:"Comprehensive practice with malloc/free and file I/O.",examples:[{titleKo:"동적 배열",titleEn:"Dynamic Array",code:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5;
    int *arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }
    for (int i = 0; i < n; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
    }
    free(arr);
    return 0;
}`,expected:`arr[0] = 10
arr[1] = 20
...`},{titleKo:"파일 쓰기와 읽기",titleEn:"File Write & Read",code:`#include <stdio.h>

int main() {
    // Write to file
    FILE *fp = fopen("test.txt", "w");
    if (fp != NULL) {
        fprintf(fp, "Hello, File!\\n");
        fprintf(fp, "Line 2\\n");
        fclose(fp);
    }

    // Read from file
    fp = fopen("test.txt", "r");
    if (fp != NULL) {
        char line[100];
        while (fgets(line, sizeof(line), fp)) {
            printf("%s", line);
        }
        fclose(fp);
    }
    return 0;
}`,expected:`Hello, File!
Line 2`}]}];function lt(){const{t:m,lang:B}=Qe(),[s,g]=Ae.useState(1),[b,v]=Ae.useState(0),F=Ae.useMemo(()=>de.find(w=>w.step===s)||de[0],[s]),u=F.examples[b],A=w=>{g(w),v(0)};return y.jsxs("div",{className:"c-practice-page",children:[y.jsxs("section",{className:"practice-header",children:[y.jsxs("h1",{children:[y.jsx("i",{className:"fa-solid fa-dumbbell"}),m("practice.title")]}),y.jsx("p",{className:"practice-subtitle",children:m("practice.subtitle")})]}),y.jsx("section",{className:"practice-steps",children:y.jsx("div",{className:"steps-scroll",children:de.map(w=>y.jsxs("button",{className:`step-btn ${s===w.step?"active":""}`,onClick:()=>A(w.step),children:[y.jsx("span",{className:"step-number",children:w.step}),y.jsx("span",{className:"step-title",children:B==="en"?w.titleEn:w.titleKo})]},w.step))})}),y.jsxs("section",{className:"practice-content",children:[y.jsxs("div",{className:"practice-content-header",children:[y.jsxs("h2",{children:[y.jsxs("span",{className:"step-badge",children:[m("practice.step")," ",F.step]}),B==="en"?F.titleEn:F.titleKo]}),y.jsx("p",{children:B==="en"?F.descEn:F.descKo})]}),y.jsx("div",{className:"example-tabs",children:F.examples.map((w,M)=>y.jsxs("button",{className:`example-tab ${b===M?"active":""}`,onClick:()=>v(M),children:[y.jsx("i",{className:"fa-solid fa-code"}),B==="en"?w.titleEn:w.titleKo]},M))}),u&&y.jsx("div",{className:"practice-editor-section",children:y.jsx(et,{initialCode:u.code,expectedOutput:u.expected,lessonId:`practice-${s}-${b}`})})]}),y.jsxs("section",{className:"practice-nav",children:[y.jsxs("button",{className:"practice-nav-btn",disabled:s<=1,onClick:()=>A(s-1),children:[y.jsx("i",{className:"fa-solid fa-arrow-left"}),m("practice.prevStep")]}),y.jsxs("span",{className:"practice-nav-info",children:[s," / ",de.length]}),y.jsxs("button",{className:"practice-nav-btn",disabled:s>=de.length,onClick:()=>A(s+1),children:[m("practice.nextStep"),y.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})}export{lt as default};

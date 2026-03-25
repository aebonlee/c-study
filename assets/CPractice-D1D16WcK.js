import{h as Xn,k as qn,m as Ln,_ as Jn,u as ne,r as Fn,j as v}from"./index-dSLgqTgE.js";import{C as ee}from"./CodeEditor-BZr_qZ7l.js";var T={},Rn;function te(){if(Rn)return T;Rn=1;var x=T&&T.__assign||function(){return x=Object.assign||function(i){for(var n,o=1,u=arguments.length;o<u;o++){n=arguments[o];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(i[l]=n[l])}return i},x.apply(this,arguments)},H=T&&T.__createBinding||(Object.create?(function(i,n,o,u){u===void 0&&(u=o);var l=Object.getOwnPropertyDescriptor(n,o);(!l||("get"in l?!n.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return n[o]}}),Object.defineProperty(i,u,l)}):(function(i,n,o,u){u===void 0&&(u=o),i[u]=n[o]})),s=T&&T.__setModuleDefault||(Object.create?(function(i,n){Object.defineProperty(i,"default",{enumerable:!0,value:n})}):function(i,n){i.default=n}),p=T&&T.__importStar||function(i){if(i&&i.__esModule)return i;var n={};if(i!=null)for(var o in i)o!=="default"&&Object.prototype.hasOwnProperty.call(i,o)&&H(n,i,o);return s(n,i),n},b=T&&T.__rest||function(i,n){var o={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&n.indexOf(u)<0&&(o[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,u=Object.getOwnPropertySymbols(i);l<u.length;l++)n.indexOf(u[l])<0&&Object.prototype.propertyIsEnumerable.call(i,u[l])&&(o[u[l]]=i[u[l]]);return o};Object.defineProperty(T,"__esModule",{value:!0});var h=p(Xn()),C=89,d=90,A=77,E=57,L=219,W=222,I=192,V=100,Y=3e3,F=typeof window<"u"&&"navigator"in window&&/Win/i.test(navigator.platform),g=typeof window<"u"&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),S="npm__react-simple-code-editor__textarea",t=`
/**
 * Reset the text fill color so that placeholder is visible
 */
.`.concat(S,`:empty {
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
  .`).concat(S,` {
    color: transparent !important;
  }

  .`).concat(S,`::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`),e=h.forwardRef(function(n,o){var u=n.autoFocus,l=n.disabled,y=n.form,j=n.highlight,R=n.ignoreTabKey,pn=R===void 0?!1:R,tn=n.insertSpaces,yn=tn===void 0?!0:tn,Sn=n.maxLength,gn=n.minLength,K=n.name,z=n.onBlur,N=n.onClick,Q=n.onFocus,_=n.onKeyDown,En=n.onKeyUp,D=n.onValueChange,G=n.padding,M=G===void 0?0:G,X=n.placeholder,rn=n.preClassName,mn=n.readOnly,an=n.required,J=n.style,hn=n.tabSize,sn=hn===void 0?2:hn,jn=n.textareaClassName,Hn=n.textareaId,Kn=n.value,Wn=b(n,["autoFocus","disabled","form","highlight","ignoreTabKey","insertSpaces","maxLength","minLength","name","onBlur","onClick","onFocus","onKeyDown","onKeyUp","onValueChange","padding","placeholder","preClassName","readOnly","required","style","tabSize","textareaClassName","textareaId","value"]),w=h.useRef({stack:[],offset:-1}),xn=h.useRef(null),Mn=h.useState(!0),Nn=Mn[0],Gn=Mn[1],Pn={paddingTop:typeof M=="object"?M.top:M,paddingRight:typeof M=="object"?M.right:M,paddingBottom:typeof M=="object"?M.bottom:M,paddingLeft:typeof M=="object"?M.left:M},wn=j(Kn),Z=function(a,m){return a.substring(0,m).split(`
`)},vn=h.useCallback(function(a,m){var c,f,k;m===void 0&&(m=!1);var P=w.current,q=P.stack,on=P.offset;if(q.length&&on>-1){w.current.stack=q.slice(0,on+1);var ln=w.current.stack.length;if(ln>V){var en=ln-V;w.current.stack=q.slice(en,ln),w.current.offset=Math.max(w.current.offset-en,0)}}var B=Date.now();if(m){var U=w.current.stack[w.current.offset];if(U&&B-U.timestamp<Y){var dn=/[^a-z0-9]([a-z0-9]+)$/i,O=(c=Z(U.value,U.selectionStart).pop())===null||c===void 0?void 0:c.match(dn),un=(f=Z(a.value,a.selectionStart).pop())===null||f===void 0?void 0:f.match(dn);if(O?.[1]&&(!((k=un?.[1])===null||k===void 0)&&k.startsWith(O[1]))){w.current.stack[w.current.offset]=x(x({},a),{timestamp:B});return}}}w.current.stack.push(x(x({},a),{timestamp:B})),w.current.offset++},[]),_n=h.useCallback(function(){var a=xn.current;if(a){var m=a.value,c=a.selectionStart,f=a.selectionEnd;vn({value:m,selectionStart:c,selectionEnd:f})}},[vn]),Cn=function(a){var m=xn.current;m&&(m.value=a.value,m.selectionStart=a.selectionStart,m.selectionEnd=a.selectionEnd,D?.(a.value))},nn=function(a){var m=xn.current,c=w.current.stack[w.current.offset];c&&m&&(w.current.stack[w.current.offset]=x(x({},c),{selectionStart:m.selectionStart,selectionEnd:m.selectionEnd})),vn(a),Cn(a)},Un=function(){var a=w.current,m=a.stack,c=a.offset,f=m[c-1];f&&(Cn(f),w.current.offset=Math.max(c-1,0))},Zn=function(){var a=w.current,m=a.stack,c=a.offset,f=m[c+1];f&&(Cn(f),w.current.offset=Math.min(c+1,m.length-1))},Vn=function(a){if(!(_&&(_(a),a.defaultPrevented))){a.key==="Escape"&&a.currentTarget.blur();var m=a.currentTarget,c=m.value,f=m.selectionStart,k=m.selectionEnd,P=(yn?" ":"	").repeat(sn);if(a.key==="Tab"&&!pn&&Nn)if(a.preventDefault(),a.shiftKey){var q=Z(c,f),on=q.length-1,ln=Z(c,k).length-1,en=c.split(`
`).map(function(cn,Dn){return Dn>=on&&Dn<=ln&&cn.startsWith(P)?cn.substring(P.length):cn}).join(`
`);if(c!==en){var B=q[on];nn({value:en,selectionStart:B?.startsWith(P)?f-P.length:f,selectionEnd:k-(c.length-en.length)})}}else if(f!==k){var q=Z(c,f),U=q.length-1,dn=Z(c,k).length-1,B=q[U];nn({value:c.split(`
`).map(function(On,zn){return zn>=U&&zn<=dn?P+On:On}).join(`
`),selectionStart:B&&/\S/.test(B)?f+P.length:f,selectionEnd:k+P.length*(dn-U+1)})}else{var O=f+P.length;nn({value:c.substring(0,f)+P+c.substring(k),selectionStart:O,selectionEnd:O})}else if(a.key==="Backspace"){var un=f!==k,Qn=c.substring(0,f);if(Qn.endsWith(P)&&!un){a.preventDefault();var O=f-P.length;nn({value:c.substring(0,f-P.length)+c.substring(k),selectionStart:O,selectionEnd:O})}}else if(a.key==="Enter"){if(f===k){var An=Z(c,f).pop(),bn=An?.match(/^\s+/);if(bn?.[0]){a.preventDefault();var Tn=`
`+bn[0],O=f+Tn.length;nn({value:c.substring(0,f)+Tn+c.substring(k),selectionStart:O,selectionEnd:O})}}}else if(a.keyCode===E||a.keyCode===L||a.keyCode===W||a.keyCode===I){var $=void 0;a.keyCode===E&&a.shiftKey?$=["(",")"]:a.keyCode===L?a.shiftKey?$=["{","}"]:$=["[","]"]:a.keyCode===W?a.shiftKey?$=['"','"']:$=["'","'"]:a.keyCode===I&&!a.shiftKey&&($=["`","`"]),f!==k&&$&&(a.preventDefault(),nn({value:c.substring(0,f)+$[0]+c.substring(f,k)+$[1]+c.substring(k),selectionStart:f,selectionEnd:k+2}))}else(g?a.metaKey&&a.keyCode===d:a.ctrlKey&&a.keyCode===d)&&!a.shiftKey&&!a.altKey?(a.preventDefault(),Un()):(g?a.metaKey&&a.keyCode===d&&a.shiftKey:F?a.ctrlKey&&a.keyCode===C:a.ctrlKey&&a.keyCode===d&&a.shiftKey)&&!a.altKey?(a.preventDefault(),Zn()):a.keyCode===A&&a.ctrlKey&&(!g||a.shiftKey)&&(a.preventDefault(),Gn(function(cn){return!cn}))}},Yn=function(a){var m=a.currentTarget,c=m.value,f=m.selectionStart,k=m.selectionEnd;vn({value:c,selectionStart:f,selectionEnd:k},!0),D(c)};return h.useEffect(function(){_n()},[_n]),h.useImperativeHandle(o,function(){return{get session(){return{history:w.current}},set session(a){w.current=a.history}}},[]),h.createElement("div",x({},Wn,{style:x(x({},r.container),J)}),h.createElement("pre",x({className:rn,"aria-hidden":"true",style:x(x(x({},r.editor),r.highlight),Pn)},typeof wn=="string"?{dangerouslySetInnerHTML:{__html:wn+"<br />"}}:{children:wn})),h.createElement("textarea",{ref:function(a){return xn.current=a},style:x(x(x({},r.editor),r.textarea),Pn),className:S+(jn?" ".concat(jn):""),id:Hn,value:Kn,onChange:Yn,onKeyDown:Vn,onClick:N,onKeyUp:En,onFocus:Q,onBlur:z,disabled:l,form:y,maxLength:Sn,minLength:gn,name:K,placeholder:X,readOnly:mn,required:an,autoFocus:u,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),h.createElement("style",{dangerouslySetInnerHTML:{__html:t}}))}),r={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}};return T.default=e,T}var ie=te();const Bn=qn(ie);var kn={exports:{}},In;function re(){return In||(In=1,(function(x){var H=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var s=(function(p){var b=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,C={},d={manual:p.Prism&&p.Prism.manual,disableWorkerMessageHandler:p.Prism&&p.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof A?new A(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++h}),t.__id},clone:function t(e,r){r=r||{};var i,n;switch(d.util.type(e)){case"Object":if(n=d.util.objId(e),r[n])return r[n];i={},r[n]=i;for(var o in e)e.hasOwnProperty(o)&&(i[o]=t(e[o],r));return i;case"Array":return n=d.util.objId(e),r[n]?r[n]:(i=[],r[n]=i,e.forEach(function(u,l){i[l]=t(u,r)}),i);default:return e}},getLanguage:function(t){for(;t;){var e=b.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(b,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var i="no-"+e;t;){var n=t.classList;if(n.contains(e))return!0;if(n.contains(i))return!1;t=t.parentElement}return!!r}},languages:{plain:C,plaintext:C,text:C,txt:C,extend:function(t,e){var r=d.util.clone(d.languages[t]);for(var i in e)r[i]=e[i];return r},insertBefore:function(t,e,r,i){i=i||d.languages;var n=i[t],o={};for(var u in n)if(n.hasOwnProperty(u)){if(u==e)for(var l in r)r.hasOwnProperty(l)&&(o[l]=r[l]);r.hasOwnProperty(u)||(o[u]=n[u])}var y=i[t];return i[t]=o,d.languages.DFS(d.languages,function(j,R){R===y&&j!=t&&(this[j]=o)}),o},DFS:function t(e,r,i,n){n=n||{};var o=d.util.objId;for(var u in e)if(e.hasOwnProperty(u)){r.call(e,u,e[u],i||u);var l=e[u],y=d.util.type(l);y==="Object"&&!n[o(l)]?(n[o(l)]=!0,t(l,r,null,n)):y==="Array"&&!n[o(l)]&&(n[o(l)]=!0,t(l,r,u,n))}}},plugins:{},highlightAll:function(t,e){d.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var i={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};d.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),d.hooks.run("before-all-elements-highlight",i);for(var n=0,o;o=i.elements[n++];)d.highlightElement(o,e===!0,i.callback)},highlightElement:function(t,e,r){var i=d.util.getLanguage(t),n=d.languages[i];d.util.setLanguage(t,i);var o=t.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&d.util.setLanguage(o,i);var u=t.textContent,l={element:t,language:i,grammar:n,code:u};function y(R){l.highlightedCode=R,d.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,d.hooks.run("after-highlight",l),d.hooks.run("complete",l),r&&r.call(l.element)}if(d.hooks.run("before-sanity-check",l),o=l.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code){d.hooks.run("complete",l),r&&r.call(l.element);return}if(d.hooks.run("before-highlight",l),!l.grammar){y(d.util.encode(l.code));return}if(e&&p.Worker){var j=new Worker(d.filename);j.onmessage=function(R){y(R.data)},j.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else y(d.highlight(l.code,l.grammar,l.language))},highlight:function(t,e,r){var i={code:t,grammar:e,language:r};if(d.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=d.tokenize(i.code,i.grammar),d.hooks.run("after-tokenize",i),A.stringify(d.util.encode(i.tokens),i.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var i in r)e[i]=r[i];delete e.rest}var n=new W;return I(n,n.head,t),L(t,n,e,n.head,0),Y(n)},hooks:{all:{},add:function(t,e){var r=d.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=d.hooks.all[t];if(!(!r||!r.length))for(var i=0,n;n=r[i++];)n(e)}},Token:A};p.Prism=d;function A(t,e,r,i){this.type=t,this.content=e,this.alias=r,this.length=(i||"").length|0}A.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(y){i+=t(y,r)}),i}var n={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(n.classes,o):n.classes.push(o)),d.hooks.run("wrap",n);var u="";for(var l in n.attributes)u+=" "+l+'="'+(n.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+u+">"+n.content+"</"+n.tag+">"};function E(t,e,r,i){t.lastIndex=e;var n=t.exec(r);if(n&&i&&n[1]){var o=n[1].length;n.index+=o,n[0]=n[0].slice(o)}return n}function L(t,e,r,i,n,o){for(var u in r)if(!(!r.hasOwnProperty(u)||!r[u])){var l=r[u];l=Array.isArray(l)?l:[l];for(var y=0;y<l.length;++y){if(o&&o.cause==u+","+y)return;var j=l[y],R=j.inside,pn=!!j.lookbehind,tn=!!j.greedy,yn=j.alias;if(tn&&!j.pattern.global){var Sn=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,Sn+"g")}for(var gn=j.pattern||j,K=i.next,z=n;K!==e.tail&&!(o&&z>=o.reach);z+=K.value.length,K=K.next){var N=K.value;if(e.length>t.length)return;if(!(N instanceof A)){var Q=1,_;if(tn){if(_=E(gn,z,t,pn),!_||_.index>=t.length)break;var M=_.index,En=_.index+_[0].length,D=z;for(D+=K.value.length;M>=D;)K=K.next,D+=K.value.length;if(D-=K.value.length,z=D,K.value instanceof A)continue;for(var G=K;G!==e.tail&&(D<En||typeof G.value=="string");G=G.next)Q++,D+=G.value.length;Q--,N=t.slice(z,D),_.index-=z}else if(_=E(gn,0,N,pn),!_)continue;var M=_.index,X=_[0],rn=N.slice(0,M),mn=N.slice(M+X.length),an=z+N.length;o&&an>o.reach&&(o.reach=an);var J=K.prev;rn&&(J=I(e,J,rn),z+=rn.length),V(e,J,Q);var hn=new A(u,R?d.tokenize(X,R):X,yn,X);if(K=I(e,J,hn),mn&&I(e,K,mn),Q>1){var sn={cause:u+","+y,reach:an};L(t,e,r,K.prev,z,sn),o&&sn.reach>o.reach&&(o.reach=sn.reach)}}}}}}function W(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function I(t,e,r){var i=e.next,n={value:r,prev:e,next:i};return e.next=n,i.prev=n,t.length++,n}function V(t,e,r){for(var i=e.next,n=0;n<r&&i!==t.tail;n++)i=i.next;e.next=i,i.prev=e,t.length-=n}function Y(t){for(var e=[],r=t.head.next;r!==t.tail;)e.push(r.value),r=r.next;return e}if(!p.document)return p.addEventListener&&(d.disableWorkerMessageHandler||p.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,i=e.code,n=e.immediateClose;p.postMessage(d.highlight(i,d.languages[r],r)),n&&p.close()},!1)),d;var F=d.util.currentScript();F&&(d.filename=F.src,F.hasAttribute("data-manual")&&(d.manual=!0));function g(){d.manual||d.highlightAll()}if(!d.manual){var S=document.readyState;S==="loading"||S==="interactive"&&F&&F.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return d})(H);x.exports&&(x.exports=s),typeof Ln<"u"&&(Ln.Prism=s),s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup,s.hooks.add("wrap",function(p){p.type==="entity"&&(p.attributes.title=p.content.replace(/&amp;/,"&"))}),Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(b,h){var C={};C["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[h]},C.cdata=/^<!\[CDATA\[|\]\]>$/i;var d={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:C}};d["language-"+h]={pattern:/[\s\S]+/,inside:s.languages[h]};var A={};A[b]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return b}),"i"),lookbehind:!0,greedy:!0,inside:d},s.languages.insertBefore("markup","cdata",A)}}),Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(p,b){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+p+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[b,"language-"+b],inside:s.languages[b]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.xml=s.languages.extend("markup",{}),s.languages.ssml=s.languages.xml,s.languages.atom=s.languages.xml,s.languages.rss=s.languages.xml,(function(p){var b=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;p.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+b.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+b.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+b.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+b.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:b,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},p.languages.css.atrule.inside.rest=p.languages.css;var h=p.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))})(s),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),s.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,s.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),s.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),s.languages.js=s.languages.javascript,(function(){if(typeof s>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var p="Loading…",b=function(F,g){return"✖ Error "+F+" while fetching file: "+g},h="✖ Error: File does not exist or is empty",C={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},d="data-src-status",A="loading",E="loaded",L="failed",W="pre[data-src]:not(["+d+'="'+E+'"]):not(['+d+'="'+A+'"])';function I(F,g,S){var t=new XMLHttpRequest;t.open("GET",F,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?g(t.responseText):t.status>=400?S(b(t.status,t.statusText)):S(h))},t.send(null)}function V(F){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(F||"");if(g){var S=Number(g[1]),t=g[2],e=g[3];return t?e?[S,Number(e)]:[S,void 0]:[S,S]}}s.hooks.add("before-highlightall",function(F){F.selector+=", "+W}),s.hooks.add("before-sanity-check",function(F){var g=F.element;if(g.matches(W)){F.code="",g.setAttribute(d,A);var S=g.appendChild(document.createElement("CODE"));S.textContent=p;var t=g.getAttribute("data-src"),e=F.language;if(e==="none"){var r=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=C[r]||r}s.util.setLanguage(S,e),s.util.setLanguage(g,e);var i=s.plugins.autoloader;i&&i.loadLanguages(e),I(t,function(n){g.setAttribute(d,E);var o=V(g.getAttribute("data-range"));if(o){var u=n.split(/\r\n?|\n/g),l=o[0],y=o[1]==null?u.length:o[1];l<0&&(l+=u.length),l=Math.max(0,Math.min(l-1,u.length)),y<0&&(y+=u.length),y=Math.max(0,Math.min(y,u.length)),n=u.slice(l,y).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(l+1))}S.textContent=n,s.highlightElement(S)},function(n){g.setAttribute(d,L),S.textContent=n})}}),s.plugins.fileHighlight={highlight:function(g){for(var S=(g||document).querySelectorAll(W),t=0,e;e=S[t++];)s.highlightElement(e)}};var Y=!1;s.fileHighlight=function(){Y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),Y=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(kn)),kn.exports}var ae=re();const $n=qn(ae);Bn?.default;typeof globalThis<"u"&&(globalThis.Prism=$n);typeof window<"u"&&(window.Prism=$n);Jn(()=>import("./prism-c-BI05wwL9.js"),[]).then(()=>{});const se=[{step:1,titleKo:"기초 출력",titleEn:"Basic Output",descKo:"printf를 사용하여 다양한 출력을 연습합니다.",descEn:"Practice various outputs using printf.",examples:[{titleKo:"Hello World 출력",titleEn:"Print Hello World",code:`#include <stdio.h>

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
Line 3`},{titleKo:"이스케이프 문자 출력",titleEn:"Escape Characters",code:`#include <stdio.h>

int main() {
    printf("Tab:\\tHello\\n");
    printf("Quote: \\"Hi\\"\\n");
    printf("Backslash: \\\\\\n");
    printf("Percent: 100%%\\n");
    return 0;
}`,expected:`Tab:	Hello
Quote: "Hi"
Backslash: \\
Percent: 100%`},{titleKo:"숫자와 문자 출력",titleEn:"Numbers & Characters",code:`#include <stdio.h>

int main() {
    printf("Integer: %d\\n", 42);
    printf("Float: %.2f\\n", 3.14);
    printf("Char: %c\\n", 'A');
    printf("String: %s\\n", "Hello");
    return 0;
}`,expected:`Integer: 42
Float: 3.14
Char: A
String: Hello`},{titleKo:"서식 지정 출력",titleEn:"Formatted Output",code:`#include <stdio.h>

int main() {
    printf("[%10d]\\n", 42);
    printf("[%-10d]\\n", 42);
    printf("[%05d]\\n", 42);
    printf("[%.3f]\\n", 3.14159);
    return 0;
}`,expected:`[        42]
[42        ]
[00042]
[3.142]`},{titleKo:"아스키 아트",titleEn:"ASCII Art",code:`#include <stdio.h>

int main() {
    printf("  /\\\\\\n");
    printf(" /  \\\\\\n");
    printf("/____\\\\\\n");
    printf("|    |\\n");
    printf("|____|\\n");
    return 0;
}`,expected:`  /\\
 /  \\
/____\\
|    |
|____|`},{titleKo:"명함 출력",titleEn:"Name Card",code:`#include <stdio.h>

int main() {
    printf("+------------------+\\n");
    printf("|  Kim Cheolsu     |\\n");
    printf("|  Developer       |\\n");
    printf("|  TEL: 010-1234   |\\n");
    printf("+------------------+\\n");
    return 0;
}`,expected:`+------------------+
|  Kim Cheolsu     |
|  Developer       |
|  TEL: 010-1234   |
+------------------+`},{titleKo:"숫자 패턴",titleEn:"Number Pattern",code:`#include <stdio.h>

int main() {
    printf("1\\n");
    printf("12\\n");
    printf("123\\n");
    printf("1234\\n");
    printf("12345\\n");
    return 0;
}`,expected:`1
12
123
1234
12345`},{titleKo:"printf 플래그",titleEn:"Printf Flags",code:`#include <stdio.h>

int main() {
    printf("Right align: [%8d]\\n", 123);
    printf("Left align:  [%-8d]\\n", 123);
    printf("Zero pad:    [%08d]\\n", 123);
    printf("Plus sign:   [%+d]\\n", 123);
    printf("Plus sign:   [%+d]\\n", -123);
    printf("Space flag:  [% d]\\n", 123);
    printf("Hex: 0x%x\\n", 255);
    printf("Octal: 0%o\\n", 255);
    return 0;
}`,expected:`Right align: [     123]
Left align:  [123     ]
Zero pad:    [00000123]
Plus sign:   [+123]
Plus sign:   [-123]
Space flag:  [ 123]
Hex: 0xff
Octal: 0377`},{titleKo:"문자 코드표",titleEn:"Character Code Table",code:`#include <stdio.h>

int main() {
    printf("=== ASCII Table ===\\n");
    printf("Char | Code\\n");
    printf("-----------\\n");
    char c;
    for (c = 'A'; c <= 'E'; c++) {
        printf("  %c  |  %d\\n", c, c);
    }
    printf("-----------\\n");
    for (c = 'a'; c <= 'e'; c++) {
        printf("  %c  |  %d\\n", c, c);
    }
    return 0;
}`,expected:`=== ASCII Table ===
Char | Code
-----------
  A  |  65
  B  |  66
  C  |  67
  D  |  68
  E  |  69
-----------
  a  |  97
  b  |  98
  c  |  99
  d  |  100
  e  |  101`}]},{step:2,titleKo:"변수와 자료형",titleEn:"Variables & Data Types",descKo:"변수를 선언하고 다양한 자료형을 사용합니다.",descEn:"Declare variables and use various data types.",examples:[{titleKo:"정수 변수 선언",titleEn:"Integer Variables",code:`#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    int sum = a + b;
    printf("a = %d, b = %d\\n", a, b);
    printf("Sum: %d\\n", sum);
    return 0;
}`,expected:`a = 10, b = 20
Sum: 30`},{titleKo:"다양한 자료형",titleEn:"Various Data Types",code:`#include <stdio.h>

int main() {
    int age = 25;
    float height = 175.5f;
    char grade = 'A';
    double pi = 3.14159265;
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);
    printf("Pi: %.8f\\n", pi);
    return 0;
}`,expected:`Age: 25
Height: 175.5
Grade: A
Pi: 3.14159265`},{titleKo:"변수 연산",titleEn:"Variable Operations",code:`#include <stdio.h>

int main() {
    int x = 17, y = 5;
    printf("%d + %d = %d\\n", x, y, x + y);
    printf("%d - %d = %d\\n", x, y, x - y);
    printf("%d * %d = %d\\n", x, y, x * y);
    printf("%d / %d = %d\\n", x, y, x / y);
    printf("%d %% %d = %d\\n", x, y, x % y);
    return 0;
}`,expected:`17 + 5 = 22
17 - 5 = 12
17 * 5 = 85
17 / 5 = 3
17 % 5 = 2`},{titleKo:"형변환",titleEn:"Type Casting",code:`#include <stdio.h>

int main() {
    int a = 7, b = 2;
    printf("Int division: %d / %d = %d\\n", a, b, a / b);
    printf("Float division: %.1f\\n", (double)a / b);
    double x = 9.7;
    int y = (int)x;
    printf("double %.1f -> int %d\\n", x, y);
    return 0;
}`,expected:`Int division: 7 / 2 = 3
Float division: 3.5
double 9.7 -> int 9`},{titleKo:"상수와 define",titleEn:"Constants & Define",code:`#include <stdio.h>

#define MAX_SIZE 100

int main() {
    const double PI = 3.14159;
    const int DAYS = 7;
    printf("PI = %.5f\\n", PI);
    printf("Days: %d\\n", DAYS);
    printf("MAX_SIZE: %d\\n", MAX_SIZE);
    double area = PI * 5.0 * 5.0;
    printf("Circle area: %.2f\\n", area);
    return 0;
}`,expected:`PI = 3.14159
Days: 7
MAX_SIZE: 100
Circle area: 78.54`},{titleKo:"sizeof 연산자",titleEn:"sizeof Operator",code:`#include <stdio.h>

int main() {
    printf("Size of char:   %d byte\\n", (int)sizeof(char));
    printf("Size of int:    %d bytes\\n", (int)sizeof(int));
    printf("Size of float:  %d bytes\\n", (int)sizeof(float));
    printf("Size of double: %d bytes\\n", (int)sizeof(double));
    int arr[10];
    printf("Size of int[10]: %d bytes\\n", (int)sizeof(arr));
    printf("Array elements:  %d\\n", (int)(sizeof(arr) / sizeof(arr[0])));
    return 0;
}`,expected:`Size of char:   1 byte
Size of int:    4 bytes
Size of float:  4 bytes
Size of double: 8 bytes
Size of int[10]: 40 bytes
Array elements:  10`},{titleKo:"온도 변환",titleEn:"Temperature Converter",code:`#include <stdio.h>

int main() {
    double celsius = 100.0;
    double fahrenheit = celsius * 9.0 / 5.0 + 32.0;
    printf("%.1f C = %.1f F\\n", celsius, fahrenheit);

    celsius = 0.0;
    fahrenheit = celsius * 9.0 / 5.0 + 32.0;
    printf("%.1f C = %.1f F\\n", celsius, fahrenheit);

    celsius = 37.0;
    fahrenheit = celsius * 9.0 / 5.0 + 32.0;
    printf("%.1f C = %.1f F\\n", celsius, fahrenheit);
    return 0;
}`,expected:`100.0 C = 212.0 F
0.0 C = 32.0 F
37.0 C = 98.6 F`},{titleKo:"BMI 계산기",titleEn:"BMI Calculator",code:`#include <stdio.h>

int main() {
    double weight = 70.0;
    double height = 1.75;
    double bmi = weight / (height * height);
    printf("Weight: %.1f kg\\n", weight);
    printf("Height: %.2f m\\n", height);
    printf("BMI: %.1f\\n", bmi);
    if (bmi < 18.5)
        printf("Category: Underweight\\n");
    else if (bmi < 25.0)
        printf("Category: Normal\\n");
    else if (bmi < 30.0)
        printf("Category: Overweight\\n");
    else
        printf("Category: Obese\\n");
    return 0;
}`,expected:`Weight: 70.0 kg
Height: 1.75 m
BMI: 22.9
Category: Normal`},{titleKo:"변수 교환",titleEn:"Swap Variables",code:`#include <stdio.h>

int main() {
    int a = 30, b = 50;
    printf("Before: a=%d, b=%d\\n", a, b);

    // Swap using arithmetic (no temp variable)
    a = a + b;  // a=80
    b = a - b;  // b=30
    a = a - b;  // a=50
    printf("After:  a=%d, b=%d\\n", a, b);

    // Swap using XOR
    int x = 10, y = 20;
    printf("\\nBefore: x=%d, y=%d\\n", x, y);
    x = x ^ y;
    y = x ^ y;
    x = x ^ y;
    printf("After:  x=%d, y=%d\\n", x, y);
    return 0;
}`,expected:`Before: a=30, b=50
After:  a=50, b=30

Before: x=10, y=20
After:  x=20, y=10`},{titleKo:"원 계산",titleEn:"Circle Calculator",code:`#include <stdio.h>

#define PI 3.14159265

int main() {
    double radius = 5.0;
    double circumference = 2.0 * PI * radius;
    double area = PI * radius * radius;
    printf("Radius: %.1f\\n", radius);
    printf("Circumference: %.2f\\n", circumference);
    printf("Area: %.2f\\n", area);

    radius = 10.0;
    circumference = 2.0 * PI * radius;
    area = PI * radius * radius;
    printf("\\nRadius: %.1f\\n", radius);
    printf("Circumference: %.2f\\n", circumference);
    printf("Area: %.2f\\n", area);
    return 0;
}`,expected:`Radius: 5.0
Circumference: 31.42
Area: 78.54

Radius: 10.0
Circumference: 62.83
Area: 314.16`}]},{step:3,titleKo:"조건문",titleEn:"Conditionals",descKo:"if, else, switch를 사용하여 조건에 따른 처리를 합니다.",descEn:"Use if, else, switch for conditional processing.",examples:[{titleKo:"짝수/홀수 판별",titleEn:"Even/Odd Check",code:`#include <stdio.h>

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
}`,expected:"Score: 85, Grade: B"},{titleKo:"switch문",titleEn:"Switch Statement",code:`#include <stdio.h>

int main() {
    int day = 3;
    switch (day) {
        case 1: printf("Monday\\n"); break;
        case 2: printf("Tuesday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        case 4: printf("Thursday\\n"); break;
        case 5: printf("Friday\\n"); break;
        default: printf("Weekend\\n"); break;
    }
    return 0;
}`,expected:"Wednesday"},{titleKo:"중첩 조건문",titleEn:"Nested Conditionals",code:`#include <stdio.h>

int main() {
    int age = 25;
    int hasLicense = 1;
    if (age >= 18) {
        if (hasLicense) {
            printf("Can drive\\n");
        } else {
            printf("Need a license\\n");
        }
    } else {
        printf("Too young to drive\\n");
    }
    return 0;
}`,expected:"Can drive"},{titleKo:"삼항 연산자",titleEn:"Ternary Operator",code:`#include <stdio.h>

int main() {
    int a = 15, b = 23;
    int max = (a > b) ? a : b;
    int min = (a < b) ? a : b;
    printf("a=%d, b=%d\\n", a, b);
    printf("Max: %d\\n", max);
    printf("Min: %d\\n", min);
    for (int i = 1; i <= 5; i++) {
        printf("%d is %s\\n", i, (i % 2 == 0) ? "even" : "odd");
    }
    return 0;
}`,expected:`a=15, b=23
Max: 23
Min: 15
1 is odd
2 is even
3 is odd
4 is even
5 is odd`},{titleKo:"윤년 판별",titleEn:"Leap Year",code:`#include <stdio.h>

int main() {
    int years[] = {2000, 1900, 2024, 2023, 2100};
    int n = 5;
    for (int i = 0; i < n; i++) {
        int y = years[i];
        int leap = 0;
        if (y % 4 == 0) {
            if (y % 100 == 0) {
                if (y % 400 == 0)
                    leap = 1;
                else
                    leap = 0;
            } else {
                leap = 1;
            }
        }
        if (leap)
            printf("%d: Leap year\\n", y);
        else
            printf("%d: Not a leap year\\n", y);
    }
    return 0;
}`,expected:`2000: Leap year
1900: Not a leap year
2024: Leap year
2023: Not a leap year
2100: Not a leap year`},{titleKo:"삼각형 판별",titleEn:"Triangle Type",code:`#include <stdio.h>

int main() {
    int a = 5, b = 5, c = 5;
    printf("Sides: %d, %d, %d\\n", a, b, c);
    if (a == b && b == c)
        printf("Equilateral triangle\\n");
    else if (a == b || b == c || a == c)
        printf("Isosceles triangle\\n");
    else
        printf("Scalene triangle\\n");

    a = 3; b = 4; c = 5;
    printf("\\nSides: %d, %d, %d\\n", a, b, c);
    if (a == b && b == c)
        printf("Equilateral triangle\\n");
    else if (a == b || b == c || a == c)
        printf("Isosceles triangle\\n");
    else
        printf("Scalene triangle\\n");

    // Check right angle
    if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a)
        printf("Also a right triangle!\\n");
    return 0;
}`,expected:`Sides: 5, 5, 5
Equilateral triangle

Sides: 3, 4, 5
Scalene triangle
Also a right triangle!`},{titleKo:"세 수 중 최대값",titleEn:"Max of Three",code:`#include <stdio.h>

int main() {
    int a = 15, b = 42, c = 28;
    printf("a=%d, b=%d, c=%d\\n", a, b, c);

    int max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    printf("Max: %d\\n", max);

    int min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    printf("Min: %d\\n", min);
    printf("Mid: %d\\n", a + b + c - max - min);
    return 0;
}`,expected:`a=15, b=42, c=28
Max: 42
Min: 15
Mid: 28`},{titleKo:"월별 일수",titleEn:"Month Days",code:`#include <stdio.h>

int main() {
    int months[] = {1, 2, 4, 7, 11};
    int n = 5;
    for (int i = 0; i < n; i++) {
        int month = months[i];
        int days;
        switch (month) {
            case 2: days = 28; break;
            case 4: case 6: case 9: case 11:
                days = 30; break;
            default:
                days = 31; break;
        }
        printf("Month %2d: %d days\\n", month, days);
    }
    return 0;
}`,expected:`Month  1: 31 days
Month  2: 28 days
Month  4: 30 days
Month  7: 31 days
Month 11: 30 days`},{titleKo:"간단 메뉴",titleEn:"Simple Menu",code:`#include <stdio.h>

int main() {
    printf("=== Restaurant Menu ===\\n");
    printf("1. Burger   - $5\\n");
    printf("2. Pizza    - $8\\n");
    printf("3. Salad    - $4\\n");
    printf("4. Pasta    - $7\\n");
    printf("=======================\\n\\n");

    int choice = 2;
    int qty = 3;
    int price;

    switch (choice) {
        case 1: price = 5; printf("Ordered: Burger\\n"); break;
        case 2: price = 8; printf("Ordered: Pizza\\n"); break;
        case 3: price = 4; printf("Ordered: Salad\\n"); break;
        case 4: price = 7; printf("Ordered: Pasta\\n"); break;
        default: price = 0; printf("Invalid choice\\n"); break;
    }
    printf("Quantity: %d\\n", qty);
    printf("Total: $%d\\n", price * qty);
    return 0;
}`,expected:`=== Restaurant Menu ===
1. Burger   - $5
2. Pizza    - $8
3. Salad    - $4
4. Pasta    - $7
=======================

Ordered: Pizza
Quantity: 3
Total: $24`}]},{step:4,titleKo:"반복문",titleEn:"Loops",descKo:"for, while 반복문을 사용하여 반복 처리를 합니다.",descEn:"Use for and while loops for iteration.",examples:[{titleKo:"1부터 10까지 합",titleEn:"Sum 1 to 10",code:`#include <stdio.h>

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
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45`},{titleKo:"while 반복문",titleEn:"While Loop",code:`#include <stdio.h>

int main() {
    int num = 1;
    while (num <= 100) {
        num *= 2;
    }
    printf("First power of 2 > 100: %d\\n", num);

    int n = 12345;
    int digits = 0;
    int temp = n;
    while (temp > 0) {
        digits++;
        temp /= 10;
    }
    printf("%d has %d digits\\n", n, digits);
    return 0;
}`,expected:`First power of 2 > 100: 128
12345 has 5 digits`},{titleKo:"별 패턴",titleEn:"Star Pattern",code:`#include <stdio.h>

int main() {
    int rows = 5;
    for (int i = 1; i <= rows; i++) {
        for (int j = 0; j < i; j++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,expected:`*
**
***
****
*****`},{titleKo:"break와 continue",titleEn:"Break & Continue",code:`#include <stdio.h>

int main() {
    printf("Skip even numbers:\\n");
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) continue;
        printf("%d ", i);
    }
    printf("\\n\\nFind first multiple of 7:\\n");
    for (int i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            printf("Found: %d\\n", i);
            break;
        }
    }
    return 0;
}`,expected:`Skip even numbers:
1 3 5 7 9 

Find first multiple of 7:
Found: 7`},{titleKo:"숫자 피라미드",titleEn:"Number Pyramid",code:`#include <stdio.h>

int main() {
    int rows = 5;
    for (int i = 1; i <= rows; i++) {
        // Print leading spaces
        for (int j = 0; j < rows - i; j++) {
            printf(" ");
        }
        // Print numbers
        for (int j = 1; j <= i; j++) {
            printf("%d", j);
        }
        for (int j = i - 1; j >= 1; j--) {
            printf("%d", j);
        }
        printf("\\n");
    }
    return 0;
}`,expected:`    1
   121
  12321
 1234321
123454321`},{titleKo:"숫자 뒤집기",titleEn:"Reverse Number",code:`#include <stdio.h>

int main() {
    int nums[] = {12345, 9070, 100};
    int n = 3;
    for (int i = 0; i < n; i++) {
        int num = nums[i];
        int reversed = 0;
        int original = num;
        while (num > 0) {
            reversed = reversed * 10 + num % 10;
            num /= 10;
        }
        printf("%d -> %d\\n", original, reversed);
    }
    return 0;
}`,expected:`12345 -> 54321
9070 -> 709
100 -> 1`},{titleKo:"최대공약수",titleEn:"GCD Calculation",code:`#include <stdio.h>

int main() {
    int a = 48, b = 18;
    int origA = a, origB = b;

    // Euclidean algorithm
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    printf("GCD(%d, %d) = %d\\n", origA, origB, a);

    a = 56; b = 42;
    origA = a; origB = b;
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    printf("GCD(%d, %d) = %d\\n", origA, origB, a);

    a = 17; b = 13;
    origA = a; origB = b;
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    printf("GCD(%d, %d) = %d\\n", origA, origB, a);
    return 0;
}`,expected:`GCD(48, 18) = 6
GCD(56, 42) = 14
GCD(17, 13) = 1`},{titleKo:"다이아몬드 패턴",titleEn:"Diamond Pattern",code:`#include <stdio.h>

int main() {
    int n = 3; // half-size
    // Upper half including middle
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n - i; j++) printf(" ");
        for (int j = 0; j < 2 * i - 1; j++) printf("*");
        printf("\\n");
    }
    // Lower half
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 0; j < n - i; j++) printf(" ");
        for (int j = 0; j < 2 * i - 1; j++) printf("*");
        printf("\\n");
    }
    return 0;
}`,expected:`  *
 ***
*****
 ***
  *`},{titleKo:"자릿수 합",titleEn:"Sum of Digits",code:`#include <stdio.h>

int main() {
    int nums[] = {1234, 9999, 305, 7};
    int n = 4;
    for (int i = 0; i < n; i++) {
        int num = nums[i];
        int sum = 0;
        int temp = num;
        while (temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }
        printf("Sum of digits of %d = %d\\n", num, sum);
    }
    return 0;
}`,expected:`Sum of digits of 1234 = 10
Sum of digits of 9999 = 36
Sum of digits of 305 = 8
Sum of digits of 7 = 7`}]},{step:5,titleKo:"함수",titleEn:"Functions",descKo:"함수를 정의하고 호출하여 코드를 구조화합니다.",descEn:"Define and call functions to structure code.",examples:[{titleKo:"최대값 함수",titleEn:"Max Function",code:`#include <stdio.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    printf("max(10, 25) = %d\\n", max(10, 25));
    printf("max(99, 7) = %d\\n", max(99, 7));
    printf("max(-3, -8) = %d\\n", max(-3, -8));
    return 0;
}`,expected:`max(10, 25) = 25
max(99, 7) = 99
max(-3, -8) = -3`},{titleKo:"팩토리얼 함수",titleEn:"Factorial Function",code:`#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    for (int i = 0; i <= 7; i++) {
        printf("%d! = %d\\n", i, factorial(i));
    }
    return 0;
}`,expected:`0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
7! = 5040`},{titleKo:"피보나치 수열",titleEn:"Fibonacci Sequence",code:`#include <stdio.h>

int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

int main() {
    printf("Fibonacci sequence:\\n");
    for (int i = 0; i <= 10; i++) {
        printf("F(%d) = %d\\n", i, fibonacci(i));
    }
    return 0;
}`,expected:`Fibonacci sequence:
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34
F(10) = 55`},{titleKo:"배열 합계 함수",titleEn:"Array Sum Function",code:`#include <stdio.h>

int arraySum(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

double arrayAvg(int arr[], int size) {
    return (double)arraySum(arr, size) / size;
}

int main() {
    int scores[] = {90, 85, 78, 92, 88};
    int n = 5;
    printf("Sum: %d\\n", arraySum(scores, n));
    printf("Average: %.1f\\n", arrayAvg(scores, n));
    return 0;
}`,expected:`Sum: 433
Average: 86.6`},{titleKo:"거듭제곱 함수",titleEn:"Power Function",code:`#include <stdio.h>

int power(int base, int exp) {
    int result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

int main() {
    printf("2^0 = %d\\n", power(2, 0));
    printf("2^8 = %d\\n", power(2, 8));
    printf("3^4 = %d\\n", power(3, 4));
    printf("5^3 = %d\\n", power(5, 3));
    return 0;
}`,expected:`2^0 = 1
2^8 = 256
3^4 = 81
5^3 = 125`},{titleKo:"최대공약수/최소공배수",titleEn:"GCD/LCM Function",code:`#include <stdio.h>

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}

int main() {
    printf("GCD(12, 8) = %d\\n", gcd(12, 8));
    printf("LCM(12, 8) = %d\\n", lcm(12, 8));
    printf("GCD(15, 25) = %d\\n", gcd(15, 25));
    printf("LCM(15, 25) = %d\\n", lcm(15, 25));
    printf("GCD(7, 3) = %d\\n", gcd(7, 3));
    printf("LCM(7, 3) = %d\\n", lcm(7, 3));
    return 0;
}`,expected:`GCD(12, 8) = 4
LCM(12, 8) = 24
GCD(15, 25) = 5
LCM(15, 25) = 75
GCD(7, 3) = 1
LCM(7, 3) = 21`},{titleKo:"소수 판별 함수",titleEn:"isPrime Function",code:`#include <stdio.h>

int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    printf("Prime numbers 1-30:\\n");
    for (int i = 1; i <= 30; i++) {
        if (isPrime(i)) {
            printf("%d ", i);
        }
    }
    printf("\\n\\nPrime check:\\n");
    int tests[] = {1, 2, 17, 20, 97};
    int n = 5;
    for (int i = 0; i < n; i++) {
        printf("%d is %s\\n", tests[i], isPrime(tests[i]) ? "prime" : "not prime");
    }
    return 0;
}`,expected:`Prime numbers 1-30:
2 3 5 7 11 13 17 19 23 29 

Prime check:
1 is not prime
2 is prime
17 is prime
20 is not prime
97 is prime`},{titleKo:"온도 변환 함수",titleEn:"Temperature Functions",code:`#include <stdio.h>

double celsiusToFahr(double c) {
    return c * 9.0 / 5.0 + 32.0;
}

double fahrToCelsius(double f) {
    return (f - 32.0) * 5.0 / 9.0;
}

int main() {
    printf("Celsius -> Fahrenheit:\\n");
    double temps[] = {0.0, 37.0, 100.0};
    for (int i = 0; i < 3; i++) {
        printf("  %.1f C = %.1f F\\n", temps[i], celsiusToFahr(temps[i]));
    }
    printf("\\nFahrenheit -> Celsius:\\n");
    double ftemps[] = {32.0, 98.6, 212.0};
    for (int i = 0; i < 3; i++) {
        printf("  %.1f F = %.1f C\\n", ftemps[i], fahrToCelsius(ftemps[i]));
    }
    return 0;
}`,expected:`Celsius -> Fahrenheit:
  0.0 C = 32.0 F
  37.0 C = 98.6 F
  100.0 C = 212.0 F

Fahrenheit -> Celsius:
  32.0 F = 0.0 C
  98.6 F = 37.0 C
  212.0 F = 100.0 C`},{titleKo:"문자열 길이 함수",titleEn:"String Length Function",code:`#include <stdio.h>

int myStrlen(char str[]) {
    int len = 0;
    while (str[len] != '\\0') {
        len++;
    }
    return len;
}

int countChar(char str[], char target) {
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        if (str[i] == target) count++;
    }
    return count;
}

int main() {
    char s1[] = "Hello";
    char s2[] = "Programming";
    char s3[] = "";
    printf("\\"%s\\": length = %d\\n", s1, myStrlen(s1));
    printf("\\"%s\\": length = %d\\n", s2, myStrlen(s2));
    printf("\\"%s\\": length = %d\\n", s3, myStrlen(s3));
    printf("\\nCount 'g' in \\"%s\\": %d\\n", s2, countChar(s2, 'g'));
    printf("Count 'l' in \\"%s\\": %d\\n", s1, countChar(s1, 'l'));
    return 0;
}`,expected:`"Hello": length = 5
"Programming": length = 11
"": length = 0

Count 'g' in "Programming": 2
Count 'l' in "Hello": 2`},{titleKo:"배열 최소/최대 함수",titleEn:"Array Min/Max Function",code:`#include <stdio.h>

int findMin(int arr[], int size) {
    int min = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

int findMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

int findSum(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) sum += arr[i];
    return sum;
}

int main() {
    int data[] = {34, 7, 23, 56, 12, 89, 45};
    int n = 7;
    printf("Array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", data[i]);
    }
    printf("\\n");
    printf("Min: %d\\n", findMin(data, n));
    printf("Max: %d\\n", findMax(data, n));
    printf("Sum: %d\\n", findSum(data, n));
    printf("Range: %d\\n", findMax(data, n) - findMin(data, n));
    return 0;
}`,expected:`Array: 34 7 23 56 12 89 45 
Min: 7
Max: 89
Sum: 266
Range: 82`}]}],oe=[{step:6,titleKo:"배열",titleEn:"Arrays",descKo:"배열의 선언, 초기화, 순회를 연습합니다.",descEn:"Practice array declaration, initialization, and traversal.",examples:[{titleKo:"배열 평균 계산",titleEn:"Array Average",code:`#include <stdio.h>

int main() {
    int scores[] = {90, 85, 78, 92, 88};
    int n = 5;
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += scores[i];
    }
    printf("Scores: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", scores[i]);
    }
    printf("\\nSum: %d\\n", sum);
    printf("Average: %.1f\\n", (float)sum / n);
    return 0;
}`,expected:`Scores: 90 85 78 92 88 
Sum: 433
Average: 86.6`},{titleKo:"배열 최대/최소",titleEn:"Array Min/Max",code:`#include <stdio.h>

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
}`,expected:"Max: 9, Min: 1"},{titleKo:"버블 정렬",titleEn:"Bubble Sort",code:`#include <stdio.h>

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = 5;
    printf("Before: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("After:  ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,expected:`Before: 64 25 12 22 11 
After:  11 12 22 25 64 `},{titleKo:"2차원 배열",titleEn:"2D Array",code:`#include <stdio.h>

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    printf("Matrix:\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,expected:`Matrix:
1 2 3 
4 5 6 
7 8 9 `},{titleKo:"배열 뒤집기",titleEn:"Reverse Array",code:`#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    printf("Original: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    for (int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }

    printf("Reversed: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,expected:`Original: 1 2 3 4 5 
Reversed: 5 4 3 2 1 `},{titleKo:"빈도 계산",titleEn:"Frequency Count",code:`#include <stdio.h>

int main() {
    int arr[] = {1, 3, 2, 1, 4, 2, 3, 1, 2, 4};
    int n = 10;
    int freq[5] = {0}; // count for values 0-4

    for (int i = 0; i < n; i++) {
        freq[arr[i]]++;
    }

    printf("Element frequencies:\\n");
    for (int i = 1; i <= 4; i++) {
        printf("%d appears %d time(s)\\n", i, freq[i]);
    }
    return 0;
}`,expected:`Element frequencies:
1 appears 3 time(s)
2 appears 3 time(s)
3 appears 2 time(s)
4 appears 2 time(s)`},{titleKo:"선형 탐색",titleEn:"Linear Search",code:`#include <stdio.h>

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

int main() {
    int arr[] = {15, 23, 8, 42, 16, 4, 37};
    int n = 7;
    int targets[] = {42, 100, 8};

    for (int i = 0; i < 3; i++) {
        int idx = linearSearch(arr, n, targets[i]);
        if (idx >= 0)
            printf("Found %d at index %d\\n", targets[i], idx);
        else
            printf("%d not found\\n", targets[i]);
    }
    return 0;
}`,expected:`Found 42 at index 3
100 not found
Found 8 at index 2`},{titleKo:"배열 회전",titleEn:"Array Rotation",code:`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = 5;

    printf("Before: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    // Rotate left by 1
    int first = arr[0];
    for (int i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = first;

    printf("After:  ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,expected:`Before: 10 20 30 40 50 
After:  20 30 40 50 10 `},{titleKo:"중복 제거",titleEn:"Remove Duplicates",code:`#include <stdio.h>

int main() {
    int arr[] = {1, 1, 2, 3, 3, 3, 4, 5, 5};
    int n = 9;

    printf("Original: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    // Remove duplicates from sorted array
    int unique[9];
    int newLen = 0;
    for (int i = 0; i < n; i++) {
        if (i == 0 || arr[i] != arr[i - 1]) {
            unique[newLen] = arr[i];
            newLen++;
        }
    }

    printf("Unique:   ");
    for (int i = 0; i < newLen; i++) printf("%d ", unique[i]);
    printf("\\n");
    printf("Count: %d -> %d\\n", n, newLen);
    return 0;
}`,expected:`Original: 1 1 2 3 3 3 4 5 5 
Unique:   1 2 3 4 5 
Count: 9 -> 5`},{titleKo:"배열 병합",titleEn:"Merge Arrays",code:`#include <stdio.h>

int main() {
    int a[] = {1, 3, 5, 7};
    int b[] = {2, 4, 6, 8};
    int na = 4, nb = 4;
    int merged[8];
    int i = 0, j = 0, k = 0;

    while (i < na && j < nb) {
        if (a[i] <= b[j]) {
            merged[k++] = a[i++];
        } else {
            merged[k++] = b[j++];
        }
    }
    while (i < na) merged[k++] = a[i++];
    while (j < nb) merged[k++] = b[j++];

    printf("Array A: ");
    for (int x = 0; x < na; x++) printf("%d ", a[x]);
    printf("\\n");
    printf("Array B: ");
    for (int x = 0; x < nb; x++) printf("%d ", b[x]);
    printf("\\n");
    printf("Merged:  ");
    for (int x = 0; x < k; x++) printf("%d ", merged[x]);
    printf("\\n");
    return 0;
}`,expected:`Array A: 1 3 5 7 
Array B: 2 4 6 8 
Merged:  1 2 3 4 5 6 7 8 `}]},{step:7,titleKo:"포인터",titleEn:"Pointers",descKo:"포인터의 개념과 활용을 연습합니다.",descEn:"Practice pointer concepts and usage.",examples:[{titleKo:"포인터 기본",titleEn:"Basic Pointers",code:`#include <stdio.h>

int main() {
    int x = 42;
    int *ptr = &x;
    printf("Value of x: %d\\n", x);
    printf("Value via pointer: %d\\n", *ptr);
    *ptr = 100;
    printf("After *ptr = 100: x = %d\\n", x);
    return 0;
}`,expected:`Value of x: 42
Value via pointer: 42
After *ptr = 100: x = 100`},{titleKo:"swap 함수",titleEn:"Swap Function",code:`#include <stdio.h>

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
After: x=20, y=10`},{titleKo:"배열과 포인터",titleEn:"Array & Pointer",code:`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    printf("Array via pointer:\\n");
    for (int i = 0; i < 5; i++) {
        printf("*(ptr+%d) = %d\\n", i, *(ptr + i));
    }
    printf("\\narr[2] = %d\\n", arr[2]);
    printf("*(arr+2) = %d\\n", *(arr + 2));
    return 0;
}`,expected:`Array via pointer:
*(ptr+0) = 10
*(ptr+1) = 20
*(ptr+2) = 30
*(ptr+3) = 40
*(ptr+4) = 50

arr[2] = 30
*(arr+2) = 30`},{titleKo:"포인터로 최대/최소 반환",titleEn:"Return Min/Max via Pointer",code:`#include <stdio.h>

void findMinMax(int arr[], int n, int *min, int *max) {
    *min = arr[0];
    *max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}

int main() {
    int arr[] = {34, 12, 67, 5, 89, 23};
    int min, max;
    findMinMax(arr, 6, &min, &max);
    printf("Min: %d\\n", min);
    printf("Max: %d\\n", max);
    return 0;
}`,expected:`Min: 5
Max: 89`},{titleKo:"const 포인터",titleEn:"Const Pointer",code:`#include <stdio.h>

void printArray(const int *arr, int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int x = 10, y = 20;
    const int *p1 = &x;
    printf("*p1 = %d\\n", *p1);
    p1 = &y;
    printf("*p1 = %d (changed target)\\n", *p1);

    int arr[] = {1, 2, 3, 4, 5};
    printf("Array: ");
    printArray(arr, 5);
    return 0;
}`,expected:`*p1 = 10
*p1 = 20 (changed target)
Array: 1 2 3 4 5 `},{titleKo:"포인터로 문자열",titleEn:"String via Pointer",code:`#include <stdio.h>

int main() {
    char str[] = "Hello";
    char *ptr = str;

    printf("String: ");
    while (*ptr != '\\0') {
        printf("%c", *ptr);
        ptr++;
    }
    printf("\\n");

    // Count characters using pointer
    ptr = str;
    int count = 0;
    while (*ptr != '\\0') {
        count++;
        ptr++;
    }
    printf("Length: %d\\n", count);
    return 0;
}`,expected:`String: Hello
Length: 5`},{titleKo:"포인터 연산",titleEn:"Pointer Arithmetic",code:`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *start = arr;
    int *end = arr + 4;

    printf("First element: %d\\n", *start);
    printf("Last element: %d\\n", *end);

    // Move pointer forward
    int *p = arr;
    printf("Moving forward: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", *p);
        p++;
    }
    printf("\\n");

    // Distance between pointers
    int dist = end - start;
    printf("Distance: %d elements\\n", dist);
    return 0;
}`,expected:`First element: 10
Last element: 50
Moving forward: 10 20 30 40 50 
Distance: 4 elements`},{titleKo:"포인터로 배열 뒤집기",titleEn:"Array Reverse via Pointer",code:`#include <stdio.h>

void reverseArray(int *start, int *end) {
    while (start < end) {
        int temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6};
    int n = 6;

    printf("Before: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    reverseArray(arr, arr + n - 1);

    printf("After:  ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,expected:`Before: 1 2 3 4 5 6 
After:  6 5 4 3 2 1 `},{titleKo:"다중 반환",titleEn:"Multiple Return Values",code:`#include <stdio.h>

void computeStats(int arr[], int n, int *sum, int *min, int *max) {
    *sum = 0;
    *min = arr[0];
    *max = arr[0];
    for (int i = 0; i < n; i++) {
        *sum += arr[i];
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}

int main() {
    int data[] = {25, 10, 45, 30, 5, 40};
    int sum, min, max;

    computeStats(data, 6, &sum, &min, &max);

    printf("Sum: %d\\n", sum);
    printf("Min: %d\\n", min);
    printf("Max: %d\\n", max);
    printf("Range: %d\\n", max - min);
    return 0;
}`,expected:`Sum: 155
Min: 5
Max: 45
Range: 40`},{titleKo:"포인터 비교",titleEn:"Pointer Comparison",code:`#include <stdio.h>

int main() {
    int arr[] = {50, 30, 80, 10, 60};
    int n = 5;
    int *minPtr = arr;
    int *maxPtr = arr;

    for (int i = 1; i < n; i++) {
        if (arr[i] < *minPtr) minPtr = &arr[i];
        if (arr[i] > *maxPtr) maxPtr = &arr[i];
    }

    printf("Min value: %d at index %d\\n", *minPtr, (int)(minPtr - arr));
    printf("Max value: %d at index %d\\n", *maxPtr, (int)(maxPtr - arr));

    if (minPtr < maxPtr)
        printf("Min comes before Max in memory\\n");
    else
        printf("Max comes before Min in memory\\n");
    return 0;
}`,expected:`Min value: 10 at index 3
Max value: 80 at index 2
Max comes before Min in memory`}]},{step:8,titleKo:"문자열 처리",titleEn:"String Handling",descKo:"문자열 함수와 문자 처리를 연습합니다.",descEn:"Practice string functions and character handling.",examples:[{titleKo:"문자열 길이와 복사",titleEn:"String Length & Copy",code:`#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Hello, C!";
    char dest[20];
    strcpy(dest, src);
    printf("String: %s\\n", dest);
    printf("Length: %d\\n", (int)strlen(dest));
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
Compare: 0`},{titleKo:"문자 처리 함수",titleEn:"Character Functions",code:`#include <stdio.h>
#include <ctype.h>

int main() {
    char str[] = "Hello 123";
    int upper = 0, lower = 0, digit = 0;
    for (int i = 0; str[i]; i++) {
        if (isupper(str[i])) upper++;
        else if (islower(str[i])) lower++;
        else if (isdigit(str[i])) digit++;
    }
    printf("String: %s\\n", str);
    printf("Upper: %d, Lower: %d, Digit: %d\\n", upper, lower, digit);
    return 0;
}`,expected:`String: Hello 123
Upper: 1, Lower: 4, Digit: 3`},{titleKo:"문자열 뒤집기",titleEn:"String Reversal",code:`#include <stdio.h>
#include <string.h>

void reverseString(char *str) {
    int left = 0;
    int right = (int)strlen(str) - 1;
    while (left < right) {
        char temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
}

int main() {
    char str[] = "Hello";
    printf("Original: %s\\n", str);
    reverseString(str);
    printf("Reversed: %s\\n", str);
    return 0;
}`,expected:`Original: Hello
Reversed: olleH`},{titleKo:"단어 세기",titleEn:"Word Counter",code:`#include <stdio.h>

int countWords(const char *str) {
    int count = 0;
    int inWord = 0;
    for (int i = 0; str[i]; i++) {
        if (str[i] != ' ' && !inWord) {
            inWord = 1;
            count++;
        } else if (str[i] == ' ') {
            inWord = 0;
        }
    }
    return count;
}

int main() {
    char s1[] = "Hello World";
    char s2[] = "The quick brown fox";
    printf("\\"%s\\": %d words\\n", s1, countWords(s1));
    printf("\\"%s\\": %d words\\n", s2, countWords(s2));
    return 0;
}`,expected:`"Hello World": 2 words
"The quick brown fox": 4 words`},{titleKo:"회문 판별",titleEn:"Palindrome Check",code:`#include <stdio.h>
#include <string.h>

int isPalindrome(char *str) {
    int left = 0;
    int right = (int)strlen(str) - 1;
    while (left < right) {
        if (str[left] != str[right]) return 0;
        left++;
        right--;
    }
    return 1;
}

int main() {
    char words[][20] = {"level", "hello", "racecar", "world", "madam"};
    int n = 5;
    for (int i = 0; i < n; i++) {
        if (isPalindrome(words[i]))
            printf("%s -> palindrome\\n", words[i]);
        else
            printf("%s -> not palindrome\\n", words[i]);
    }
    return 0;
}`,expected:`level -> palindrome
hello -> not palindrome
racecar -> palindrome
world -> not palindrome
madam -> palindrome`},{titleKo:"문자 빈도",titleEn:"Character Frequency",code:`#include <stdio.h>

int main() {
    char str[] = "banana";
    int freq[26] = {0};

    for (int i = 0; str[i]; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            freq[str[i] - 'a']++;
        }
    }

    printf("Character frequency in \\"%s\\":\\n", str);
    for (int i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            printf("'%c': %d\\n", 'a' + i, freq[i]);
        }
    }
    return 0;
}`,expected:`Character frequency in "banana":
'a': 3
'b': 1
'n': 2`},{titleKo:"모음 카운터",titleEn:"Vowel Counter",code:`#include <stdio.h>

int main() {
    char str[] = "Hello World";
    int vowels = 0, consonants = 0;

    for (int i = 0; str[i]; i++) {
        char c = str[i];
        if (c >= 'A' && c <= 'Z') c = c + 32;
        if (c >= 'a' && c <= 'z') {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                vowels++;
            else
                consonants++;
        }
    }

    printf("String: %s\\n", str);
    printf("Vowels: %d\\n", vowels);
    printf("Consonants: %d\\n", consonants);
    return 0;
}`,expected:`String: Hello World
Vowels: 3
Consonants: 7`},{titleKo:"대소문자 변환",titleEn:"Case Conversion",code:`#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello World 123";
    char upper[20], lower[20];
    int len = (int)strlen(str);

    for (int i = 0; i <= len; i++) {
        if (str[i] >= 'a' && str[i] <= 'z')
            upper[i] = str[i] - 32;
        else
            upper[i] = str[i];

        if (str[i] >= 'A' && str[i] <= 'Z')
            lower[i] = str[i] + 32;
        else
            lower[i] = str[i];
    }

    printf("Original:  %s\\n", str);
    printf("Uppercase: %s\\n", upper);
    printf("Lowercase: %s\\n", lower);
    return 0;
}`,expected:`Original:  Hello World 123
Uppercase: HELLO WORLD 123
Lowercase: hello world 123`},{titleKo:"공백 제거",titleEn:"Remove Spaces",code:`#include <stdio.h>

int main() {
    char str[] = "H e l l o W o r l d";
    char result[30];
    int j = 0;

    for (int i = 0; str[i]; i++) {
        if (str[i] != ' ') {
            result[j] = str[i];
            j++;
        }
    }
    result[j] = '\\0';

    printf("Original: \\"%s\\"\\n", str);
    printf("Removed:  \\"%s\\"\\n", result);
    printf("Length: %d -> %d\\n", 19, j);
    return 0;
}`,expected:`Original: "H e l l o W o r l d"
Removed:  "HelloWorld"
Length: 19 -> 10`}]},{step:9,titleKo:"종합 실습",titleEn:"Comprehensive Practice",descKo:"배열, 포인터, 문자열을 종합적으로 활용합니다.",descEn:"Combine arrays, pointers, and strings in comprehensive exercises.",examples:[{titleKo:"간단한 계산기",titleEn:"Simple Calculator",code:`#include <stdio.h>

double calculate(double a, double b, char op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return (b != 0) ? a / b : 0;
        default: return 0;
    }
}

int main() {
    double a = 10.0, b = 3.0;
    char ops[] = {'+', '-', '*', '/'};
    for (int i = 0; i < 4; i++) {
        printf("%.1f %c %.1f = %.2f\\n", a, ops[i], b, calculate(a, b, ops[i]));
    }
    return 0;
}`,expected:`10.0 + 3.0 = 13.00
10.0 - 3.0 = 7.00
10.0 * 3.0 = 30.00
10.0 / 3.0 = 3.33`},{titleKo:"성적 관리 (배열)",titleEn:"Grade Manager (Arrays)",code:`#include <stdio.h>

int main() {
    int scores[] = {92, 85, 78, 96, 88, 73, 91};
    int n = 7;
    int sum = 0, max = scores[0], min = scores[0];

    for (int i = 0; i < n; i++) {
        sum += scores[i];
        if (scores[i] > max) max = scores[i];
        if (scores[i] < min) min = scores[i];
    }

    printf("Students: %d\\n", n);
    printf("Average: %.1f\\n", (double)sum / n);
    printf("Highest: %d\\n", max);
    printf("Lowest: %d\\n", min);

    int grades[4] = {0};
    for (int i = 0; i < n; i++) {
        if (scores[i] >= 90) grades[0]++;
        else if (scores[i] >= 80) grades[1]++;
        else if (scores[i] >= 70) grades[2]++;
        else grades[3]++;
    }
    printf("A: %d, B: %d, C: %d, F: %d\\n", grades[0], grades[1], grades[2], grades[3]);
    return 0;
}`,expected:`Students: 7
Average: 86.1
Highest: 96
Lowest: 73
A: 3, B: 2, C: 2, F: 0`},{titleKo:"배열 통계",titleEn:"Array Statistics",code:`#include <stdio.h>

int main() {
    int data[] = {23, 45, 12, 67, 34, 89, 56, 78, 90, 11};
    int n = 10;
    int sum = 0;

    for (int i = 0; i < n; i++) sum += data[i];
    double avg = (double)sum / n;

    double variance = 0;
    for (int i = 0; i < n; i++) {
        double diff = data[i] - avg;
        variance += diff * diff;
    }
    variance /= n;

    printf("Count: %d\\n", n);
    printf("Sum: %d\\n", sum);
    printf("Average: %.1f\\n", avg);
    printf("Variance: %.1f\\n", variance);
    return 0;
}`,expected:`Count: 10
Sum: 505
Average: 50.5
Variance: 697.2`},{titleKo:"문자열 암호화 (시저 암호)",titleEn:"Caesar Cipher",code:`#include <stdio.h>
#include <string.h>

void encrypt(char *str, int shift) {
    for (int i = 0; str[i]; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            str[i] = (str[i] - 'A' + shift) % 26 + 'A';
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            str[i] = (str[i] - 'a' + shift) % 26 + 'a';
        }
    }
}

int main() {
    char msg[] = "Hello World";
    printf("Original:  %s\\n", msg);
    encrypt(msg, 3);
    printf("Encrypted: %s\\n", msg);
    encrypt(msg, 23);
    printf("Decrypted: %s\\n", msg);
    return 0;
}`,expected:`Original:  Hello World
Encrypted: Khoor Zruog
Decrypted: Hello World`},{titleKo:"소수 구하기",titleEn:"Find Primes",code:`#include <stdio.h>

int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    printf("Primes up to 30:\\n");
    int count = 0;
    for (int i = 2; i <= 30; i++) {
        if (isPrime(i)) {
            printf("%d ", i);
            count++;
        }
    }
    printf("\\nTotal: %d primes\\n", count);
    return 0;
}`,expected:`Primes up to 30:
2 3 5 7 11 13 17 19 23 29 
Total: 10 primes`},{titleKo:"이진수 변환",titleEn:"Number to Binary",code:`#include <stdio.h>

void toBinary(int n, char *result) {
    int bits[32];
    int count = 0;

    if (n == 0) {
        result[0] = '0';
        result[1] = '\\0';
        return;
    }

    int temp = n;
    while (temp > 0) {
        bits[count] = temp % 2;
        temp = temp / 2;
        count++;
    }

    for (int i = 0; i < count; i++) {
        result[i] = '0' + bits[count - 1 - i];
    }
    result[count] = '\\0';
}

int main() {
    int nums[] = {0, 5, 10, 42, 255};
    int n = 5;
    char binary[33];

    for (int i = 0; i < n; i++) {
        toBinary(nums[i], binary);
        printf("%3d -> %s\\n", nums[i], binary);
    }
    return 0;
}`,expected:`  0 -> 0
  5 -> 101
 10 -> 1010
 42 -> 101010
255 -> 11111111`},{titleKo:"행렬 전치",titleEn:"Matrix Transpose",code:`#include <stdio.h>

int main() {
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    int transposed[3][2];

    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 3; j++)
            transposed[j][i] = matrix[i][j];

    printf("Original (2x3):\\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++)
            printf("%d ", matrix[i][j]);
        printf("\\n");
    }

    printf("Transposed (3x2):\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++)
            printf("%d ", transposed[i][j]);
        printf("\\n");
    }
    return 0;
}`,expected:`Original (2x3):
1 2 3 
4 5 6 
Transposed (3x2):
1 4 
2 5 
3 6 `},{titleKo:"파스칼의 삼각형",titleEn:"Pascal's Triangle",code:`#include <stdio.h>

int main() {
    int rows = 6;
    int tri[6][6] = {0};

    printf("Pascal's Triangle:\\n");
    for (int i = 0; i < rows; i++) {
        tri[i][0] = 1;
        for (int j = 1; j <= i; j++) {
            tri[i][j] = tri[i - 1][j - 1] + tri[i - 1][j];
        }

        // Print leading spaces for alignment
        for (int s = 0; s < rows - i - 1; s++) printf("  ");

        for (int j = 0; j <= i; j++) {
            printf("%3d ", tri[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,expected:`Pascal's Triangle:
            1 
          1   1 
        1   2   1 
      1   3   3   1 
    1   4   6   4   1 
  1   5  10  10   5   1 `},{titleKo:"숫자 맞추기",titleEn:"Number Guessing Game",code:`#include <stdio.h>

int main() {
    int secret = 42;
    int guesses[] = {25, 50, 38, 45, 42};
    int n = 5;

    printf("Secret number is between 1-100\\n");
    for (int i = 0; i < n; i++) {
        printf("Guess %d: %d -> ", i + 1, guesses[i]);
        if (guesses[i] < secret)
            printf("Too low!\\n");
        else if (guesses[i] > secret)
            printf("Too high!\\n");
        else {
            printf("Correct!\\n");
            printf("Found in %d guesses!\\n", i + 1);
            break;
        }
    }
    return 0;
}`,expected:`Secret number is between 1-100
Guess 1: 25 -> Too low!
Guess 2: 50 -> Too high!
Guess 3: 38 -> Too low!
Guess 4: 45 -> Too high!
Guess 5: 42 -> Correct!
Found in 5 guesses!`},{titleKo:"학생 순위",titleEn:"Student Ranking",code:`#include <stdio.h>

int main() {
    int scores[] = {78, 92, 85, 96, 88};
    int ids[] = {1, 2, 3, 4, 5};
    int n = 5;

    // Sort by score descending (bubble sort)
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (scores[j] < scores[j + 1]) {
                int temp = scores[j];
                scores[j] = scores[j + 1];
                scores[j + 1] = temp;
                temp = ids[j];
                ids[j] = ids[j + 1];
                ids[j + 1] = temp;
            }
        }
    }

    printf("=== Student Rankings ===\\n");
    for (int i = 0; i < n; i++) {
        printf("Rank %d: Student %d (Score: %d)\\n", i + 1, ids[i], scores[i]);
    }
    return 0;
}`,expected:`=== Student Rankings ===
Rank 1: Student 4 (Score: 96)
Rank 2: Student 2 (Score: 92)
Rank 3: Student 5 (Score: 88)
Rank 4: Student 3 (Score: 85)
Rank 5: Student 1 (Score: 78)`}]},{step:10,titleKo:"고급 실습",titleEn:"Advanced Practice",descKo:"정렬, 탐색, 재귀 등 고급 알고리즘을 연습합니다.",descEn:"Practice advanced algorithms including sorting, searching, and recursion.",examples:[{titleKo:"선택 정렬",titleEn:"Selection Sort",code:`#include <stdio.h>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = 5;
    printf("Before: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    selectionSort(arr, n);
    printf("After:  ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,expected:`Before: 64 25 12 22 11 
After:  11 12 22 25 64 `},{titleKo:"이진 탐색",titleEn:"Binary Search",code:`#include <stdio.h>

int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int n = 10;
    int targets[] = {23, 72, 15};
    for (int i = 0; i < 3; i++) {
        int idx = binarySearch(arr, n, targets[i]);
        if (idx >= 0)
            printf("Found %d at index %d\\n", targets[i], idx);
        else
            printf("%d not found\\n", targets[i]);
    }
    return 0;
}`,expected:`Found 23 at index 5
Found 72 at index 8
15 not found`},{titleKo:"행렬 곱셈",titleEn:"Matrix Multiplication",code:`#include <stdio.h>

int main() {
    int A[2][2] = {{1, 2}, {3, 4}};
    int B[2][2] = {{5, 6}, {7, 8}};
    int C[2][2] = {{0}};

    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            for (int k = 0; k < 2; k++)
                C[i][j] += A[i][k] * B[k][j];

    printf("Result:\\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%3d ", C[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,expected:`Result:
 19  22 
 43  50 `},{titleKo:"재귀 패턴 출력",titleEn:"Recursive Pattern",code:`#include <stdio.h>

void printStars(int n) {
    if (n <= 0) return;
    printStars(n - 1);
    for (int i = 0; i < n; i++) printf("*");
    printf("\\n");
}

int sumRecursive(int n) {
    if (n <= 0) return 0;
    return n + sumRecursive(n - 1);
}

int main() {
    printStars(5);
    printf("\\n");
    printf("Sum(1..10) = %d\\n", sumRecursive(10));
    printf("Sum(1..100) = %d\\n", sumRecursive(100));
    return 0;
}`,expected:`*
**
***
****
*****

Sum(1..10) = 55
Sum(1..100) = 5050`},{titleKo:"종합: 성적 분석",titleEn:"Grade Analysis",code:`#include <stdio.h>
#include <string.h>

int main() {
    int scores[] = {95, 82, 67, 91, 78, 55, 88, 73, 99, 61};
    char grades[] = "          ";
    int n = 10;
    int counts[5] = {0};

    for (int i = 0; i < n; i++) {
        if (scores[i] >= 90) { grades[i] = 'A'; counts[0]++; }
        else if (scores[i] >= 80) { grades[i] = 'B'; counts[1]++; }
        else if (scores[i] >= 70) { grades[i] = 'C'; counts[2]++; }
        else if (scores[i] >= 60) { grades[i] = 'D'; counts[3]++; }
        else { grades[i] = 'F'; counts[4]++; }
    }

    int sum = 0;
    for (int i = 0; i < n; i++) sum += scores[i];

    printf("=== Grade Report ===\\n");
    for (int i = 0; i < n; i++) {
        printf("Student %2d: %d (%c)\\n", i + 1, scores[i], grades[i]);
    }
    printf("\\nAverage: %.1f\\n", (double)sum / n);
    printf("A:%d B:%d C:%d D:%d F:%d\\n", counts[0], counts[1], counts[2], counts[3], counts[4]);
    return 0;
}`,expected:`=== Grade Report ===
Student  1: 95 (A)
Student  2: 82 (B)
Student  3: 67 (D)
Student  4: 91 (A)
Student  5: 78 (C)
Student  6: 55 (F)
Student  7: 88 (B)
Student  8: 73 (C)
Student  9: 99 (A)
Student 10: 61 (D)

Average: 78.9
A:3 B:2 C:2 D:2 F:1`},{titleKo:"삽입 정렬",titleEn:"Insertion Sort",code:`#include <stdio.h>

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        // Print state after each insertion
        printf("Step %d: ", i);
        for (int k = 0; k < n; k++) printf("%d ", arr[k]);
        printf("\\n");
    }
}

int main() {
    int arr[] = {5, 3, 4, 1, 2};
    int n = 5;
    printf("Before: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    insertionSort(arr, n);
    printf("After:  ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,expected:`Before: 5 3 4 1 2 
Step 1: 3 5 4 1 2 
Step 2: 3 4 5 1 2 
Step 3: 1 3 4 5 2 
Step 4: 1 2 3 4 5 
After:  1 2 3 4 5 `},{titleKo:"스택 시뮬레이션",titleEn:"Stack Simulation",code:`#include <stdio.h>

int stack[100];
int top = -1;

void push(int val) {
    top++;
    stack[top] = val;
    printf("Push %d -> [", val);
    for (int i = 0; i <= top; i++) {
        if (i > 0) printf(", ");
        printf("%d", stack[i]);
    }
    printf("]\\n");
}

int pop() {
    int val = stack[top];
    top--;
    printf("Pop %d  -> [", val);
    for (int i = 0; i <= top; i++) {
        if (i > 0) printf(", ");
        printf("%d", stack[i]);
    }
    printf("]\\n");
    return val;
}

int main() {
    printf("=== Stack Operations ===\\n");
    push(10);
    push(20);
    push(30);
    pop();
    push(40);
    pop();
    pop();
    printf("Stack size: %d\\n", top + 1);
    return 0;
}`,expected:`=== Stack Operations ===
Push 10 -> [10]
Push 20 -> [10, 20]
Push 30 -> [10, 20, 30]
Pop 30  -> [10, 20]
Push 40 -> [10, 20, 40]
Pop 40  -> [10, 20]
Pop 20  -> [10]
Stack size: 1`},{titleKo:"큐 시뮬레이션",titleEn:"Queue Simulation",code:`#include <stdio.h>

int queue[100];
int front = 0, rear = 0, count = 0;

void enqueue(int val) {
    queue[rear] = val;
    rear = (rear + 1) % 100;
    count++;
    printf("Enqueue %d (size=%d)\\n", val, count);
}

int dequeue() {
    int val = queue[front];
    front = (front + 1) % 100;
    count--;
    printf("Dequeue %d (size=%d)\\n", val, count);
    return val;
}

int main() {
    printf("=== Queue Operations ===\\n");
    enqueue(10);
    enqueue(20);
    enqueue(30);
    dequeue();
    dequeue();
    enqueue(40);
    enqueue(50);
    dequeue();
    printf("Remaining: %d items\\n", count);
    return 0;
}`,expected:`=== Queue Operations ===
Enqueue 10 (size=1)
Enqueue 20 (size=2)
Enqueue 30 (size=3)
Dequeue 10 (size=2)
Dequeue 20 (size=1)
Enqueue 40 (size=2)
Enqueue 50 (size=3)
Dequeue 30 (size=2)
Remaining: 2 items`},{titleKo:"하노이의 탑",titleEn:"Tower of Hanoi",code:`#include <stdio.h>

int moveCount = 0;

void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        moveCount++;
        printf("Move disk 1: %c -> %c\\n", from, to);
        return;
    }
    hanoi(n - 1, from, aux, to);
    moveCount++;
    printf("Move disk %d: %c -> %c\\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}

int main() {
    int n = 3;
    printf("Tower of Hanoi (n=%d):\\n", n);
    hanoi(n, 'A', 'C', 'B');
    printf("Total moves: %d\\n", moveCount);
    return 0;
}`,expected:`Tower of Hanoi (n=3):
Move disk 1: A -> C
Move disk 2: A -> B
Move disk 1: C -> B
Move disk 3: A -> C
Move disk 1: B -> A
Move disk 2: B -> C
Move disk 1: A -> C
Total moves: 7`},{titleKo:"병합 정렬",titleEn:"Merge Sort",code:`#include <stdio.h>

void merge(int arr[], int left, int mid, int right) {
    int temp[20];
    int i = left, j = mid + 1, k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j])
            temp[k++] = arr[i++];
        else
            temp[k++] = arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    for (int i = 0; i < k; i++)
        arr[left + i] = temp[i];
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = 7;

    printf("Before: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    mergeSort(arr, 0, n - 1);

    printf("After:  ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,expected:`Before: 38 27 43 3 9 82 10 
After:  3 9 10 27 38 43 82 `}]}],fn=[...se,...oe];function ue(){const{t:x,lang:H}=ne(),[s,p]=Fn.useState(1),[b,h]=Fn.useState(0),C=Fn.useMemo(()=>fn.find(E=>E.step===s)||fn[0],[s]),d=C.examples[b],A=E=>{p(E),h(0)};return v.jsxs("div",{className:"c-practice-page",children:[v.jsxs("section",{className:"practice-header",children:[v.jsxs("h1",{children:[v.jsx("i",{className:"fa-solid fa-dumbbell"}),x("practice.title")]}),v.jsx("p",{className:"practice-subtitle",children:x("practice.subtitle")})]}),v.jsx("section",{className:"practice-steps",children:v.jsx("div",{className:"steps-scroll",children:fn.map(E=>v.jsxs("button",{className:`step-btn ${s===E.step?"active":""}`,onClick:()=>A(E.step),children:[v.jsx("span",{className:"step-number",children:E.step}),v.jsx("span",{className:"step-title",children:H==="en"?E.titleEn:E.titleKo})]},E.step))})}),v.jsxs("section",{className:"practice-content",children:[v.jsxs("div",{className:"practice-content-header",children:[v.jsxs("h2",{children:[v.jsxs("span",{className:"step-badge",children:[x("practice.step")," ",C.step]}),H==="en"?C.titleEn:C.titleKo]}),v.jsx("p",{children:H==="en"?C.descEn:C.descKo})]}),v.jsx("div",{className:"example-tabs",children:C.examples.map((E,L)=>v.jsxs("button",{className:`example-tab ${b===L?"active":""}`,onClick:()=>h(L),children:[v.jsx("i",{className:"fa-solid fa-code"}),H==="en"?E.titleEn:E.titleKo]},L))}),d&&v.jsx("div",{className:"practice-editor-section",children:v.jsx(ee,{initialCode:d.code,expectedOutput:d.expected,lessonId:`practice-${s}-${b}`},`practice-${s}-${b}`)})]}),v.jsxs("section",{className:"practice-nav",children:[v.jsxs("button",{className:"practice-nav-btn",disabled:s<=1,onClick:()=>A(s-1),children:[v.jsx("i",{className:"fa-solid fa-arrow-left"}),x("practice.prevStep")]}),v.jsxs("span",{className:"practice-nav-info",children:[s," / ",fn.length]}),v.jsxs("button",{className:"practice-nav-btn",disabled:s>=fn.length,onClick:()=>A(s+1),children:[x("practice.nextStep"),v.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})}export{ue as default};

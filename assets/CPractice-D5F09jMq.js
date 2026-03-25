import{h as Qn,k as Bn,m as $n,_ as Jn,u as ne,r as kn,j as x}from"./index-CiPcZnrF.js";import{C as ee}from"./CodeEditor-CXPWv7_m.js";var O={},Ln;function te(){if(Ln)return O;Ln=1;var v=O&&O.__assign||function(){return v=Object.assign||function(i){for(var n,o=1,d=arguments.length;o<d;o++){n=arguments[o];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(i[l]=n[l])}return i},v.apply(this,arguments)},z=O&&O.__createBinding||(Object.create?(function(i,n,o,d){d===void 0&&(d=o);var l=Object.getOwnPropertyDescriptor(n,o);(!l||("get"in l?!n.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return n[o]}}),Object.defineProperty(i,d,l)}):(function(i,n,o,d){d===void 0&&(d=o),i[d]=n[o]})),s=O&&O.__setModuleDefault||(Object.create?(function(i,n){Object.defineProperty(i,"default",{enumerable:!0,value:n})}):function(i,n){i.default=n}),p=O&&O.__importStar||function(i){if(i&&i.__esModule)return i;var n={};if(i!=null)for(var o in i)o!=="default"&&Object.prototype.hasOwnProperty.call(i,o)&&z(n,i,o);return s(n,i),n},y=O&&O.__rest||function(i,n){var o={};for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&n.indexOf(d)<0&&(o[d]=i[d]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,d=Object.getOwnPropertySymbols(i);l<d.length;l++)n.indexOf(d[l])<0&&Object.prototype.propertyIsEnumerable.call(i,d[l])&&(o[d[l]]=i[d[l]]);return o};Object.defineProperty(O,"__esModule",{value:!0});var m=p(Qn()),A=89,u=90,F=77,S=57,$=219,N=222,H=192,Y=100,V=3e3,k=typeof window<"u"&&"navigator"in window&&/Win/i.test(navigator.platform),g=typeof window<"u"&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),E="npm__react-simple-code-editor__textarea",t=`
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
`),e=m.forwardRef(function(n,o){var d=n.autoFocus,l=n.disabled,b=n.form,K=n.highlight,L=n.ignoreTabKey,pn=L===void 0?!1:L,tn=n.insertSpaces,yn=tn===void 0?!0:tn,En=n.maxLength,gn=n.minLength,_=n.name,I=n.onBlur,q=n.onClick,X=n.onFocus,M=n.onKeyDown,Sn=n.onKeyUp,T=n.onValueChange,G=n.padding,j=G===void 0?0:G,Q=n.placeholder,rn=n.preClassName,hn=n.readOnly,an=n.required,J=n.style,mn=n.tabSize,sn=mn===void 0?2:mn,Kn=n.textareaClassName,zn=n.textareaId,_n=n.value,Nn=y(n,["autoFocus","disabled","form","highlight","ignoreTabKey","insertSpaces","maxLength","minLength","name","onBlur","onClick","onFocus","onKeyDown","onKeyUp","onValueChange","padding","placeholder","preClassName","readOnly","required","style","tabSize","textareaClassName","textareaId","value"]),w=m.useRef({stack:[],offset:-1}),vn=m.useRef(null),jn=m.useState(!0),qn=jn[0],Gn=jn[1],Pn={paddingTop:typeof j=="object"?j.top:j,paddingRight:typeof j=="object"?j.right:j,paddingBottom:typeof j=="object"?j.bottom:j,paddingLeft:typeof j=="object"?j.left:j},wn=K(_n),Z=function(a,h){return a.substring(0,h).split(`
`)},xn=m.useCallback(function(a,h){var c,f,C;h===void 0&&(h=!1);var P=w.current,B=P.stack,on=P.offset;if(B.length&&on>-1){w.current.stack=B.slice(0,on+1);var ln=w.current.stack.length;if(ln>Y){var en=ln-Y;w.current.stack=B.slice(en,ln),w.current.offset=Math.max(w.current.offset-en,0)}}var R=Date.now();if(h){var U=w.current.stack[w.current.offset];if(U&&R-U.timestamp<V){var un=/[^a-z0-9]([a-z0-9]+)$/i,D=(c=Z(U.value,U.selectionStart).pop())===null||c===void 0?void 0:c.match(un),dn=(f=Z(a.value,a.selectionStart).pop())===null||f===void 0?void 0:f.match(un);if(D?.[1]&&(!((C=dn?.[1])===null||C===void 0)&&C.startsWith(D[1]))){w.current.stack[w.current.offset]=v(v({},a),{timestamp:R});return}}}w.current.stack.push(v(v({},a),{timestamp:R})),w.current.offset++},[]),Mn=m.useCallback(function(){var a=vn.current;if(a){var h=a.value,c=a.selectionStart,f=a.selectionEnd;xn({value:h,selectionStart:c,selectionEnd:f})}},[xn]),An=function(a){var h=vn.current;h&&(h.value=a.value,h.selectionStart=a.selectionStart,h.selectionEnd=a.selectionEnd,T?.(a.value))},nn=function(a){var h=vn.current,c=w.current.stack[w.current.offset];c&&h&&(w.current.stack[w.current.offset]=v(v({},c),{selectionStart:h.selectionStart,selectionEnd:h.selectionEnd})),xn(a),An(a)},Un=function(){var a=w.current,h=a.stack,c=a.offset,f=h[c-1];f&&(An(f),w.current.offset=Math.max(c-1,0))},Zn=function(){var a=w.current,h=a.stack,c=a.offset,f=h[c+1];f&&(An(f),w.current.offset=Math.min(c+1,h.length-1))},Yn=function(a){if(!(M&&(M(a),a.defaultPrevented))){a.key==="Escape"&&a.currentTarget.blur();var h=a.currentTarget,c=h.value,f=h.selectionStart,C=h.selectionEnd,P=(yn?" ":"	").repeat(sn);if(a.key==="Tab"&&!pn&&qn)if(a.preventDefault(),a.shiftKey){var B=Z(c,f),on=B.length-1,ln=Z(c,C).length-1,en=c.split(`
`).map(function(cn,Tn){return Tn>=on&&Tn<=ln&&cn.startsWith(P)?cn.substring(P.length):cn}).join(`
`);if(c!==en){var R=B[on];nn({value:en,selectionStart:R?.startsWith(P)?f-P.length:f,selectionEnd:C-(c.length-en.length)})}}else if(f!==C){var B=Z(c,f),U=B.length-1,un=Z(c,C).length-1,R=B[U];nn({value:c.split(`
`).map(function(Dn,In){return In>=U&&In<=un?P+Dn:Dn}).join(`
`),selectionStart:R&&/\S/.test(R)?f+P.length:f,selectionEnd:C+P.length*(un-U+1)})}else{var D=f+P.length;nn({value:c.substring(0,f)+P+c.substring(C),selectionStart:D,selectionEnd:D})}else if(a.key==="Backspace"){var dn=f!==C,Xn=c.substring(0,f);if(Xn.endsWith(P)&&!dn){a.preventDefault();var D=f-P.length;nn({value:c.substring(0,f-P.length)+c.substring(C),selectionStart:D,selectionEnd:D})}}else if(a.key==="Enter"){if(f===C){var Fn=Z(c,f).pop(),bn=Fn?.match(/^\s+/);if(bn?.[0]){a.preventDefault();var On=`
`+bn[0],D=f+On.length;nn({value:c.substring(0,f)+On+c.substring(C),selectionStart:D,selectionEnd:D})}}}else if(a.keyCode===S||a.keyCode===$||a.keyCode===N||a.keyCode===H){var W=void 0;a.keyCode===S&&a.shiftKey?W=["(",")"]:a.keyCode===$?a.shiftKey?W=["{","}"]:W=["[","]"]:a.keyCode===N?a.shiftKey?W=['"','"']:W=["'","'"]:a.keyCode===H&&!a.shiftKey&&(W=["`","`"]),f!==C&&W&&(a.preventDefault(),nn({value:c.substring(0,f)+W[0]+c.substring(f,C)+W[1]+c.substring(C),selectionStart:f,selectionEnd:C+2}))}else(g?a.metaKey&&a.keyCode===u:a.ctrlKey&&a.keyCode===u)&&!a.shiftKey&&!a.altKey?(a.preventDefault(),Un()):(g?a.metaKey&&a.keyCode===u&&a.shiftKey:k?a.ctrlKey&&a.keyCode===A:a.ctrlKey&&a.keyCode===u&&a.shiftKey)&&!a.altKey?(a.preventDefault(),Zn()):a.keyCode===F&&a.ctrlKey&&(!g||a.shiftKey)&&(a.preventDefault(),Gn(function(cn){return!cn}))}},Vn=function(a){var h=a.currentTarget,c=h.value,f=h.selectionStart,C=h.selectionEnd;xn({value:c,selectionStart:f,selectionEnd:C},!0),T(c)};return m.useEffect(function(){Mn()},[Mn]),m.useImperativeHandle(o,function(){return{get session(){return{history:w.current}},set session(a){w.current=a.history}}},[]),m.createElement("div",v({},Nn,{style:v(v({},r.container),J)}),m.createElement("pre",v({className:rn,"aria-hidden":"true",style:v(v(v({},r.editor),r.highlight),Pn)},typeof wn=="string"?{dangerouslySetInnerHTML:{__html:wn+"<br />"}}:{children:wn})),m.createElement("textarea",{ref:function(a){return vn.current=a},style:v(v(v({},r.editor),r.textarea),Pn),className:E+(Kn?" ".concat(Kn):""),id:zn,value:_n,onChange:Vn,onKeyDown:Yn,onClick:q,onKeyUp:Sn,onFocus:X,onBlur:I,disabled:l,form:b,maxLength:En,minLength:gn,name:_,placeholder:Q,readOnly:hn,required:an,autoFocus:d,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),m.createElement("style",{dangerouslySetInnerHTML:{__html:t}}))}),r={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}};return O.default=e,O}var ie=te();const Rn=Bn(ie);var Cn={exports:{}},Hn;function re(){return Hn||(Hn=1,(function(v){var z=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var s=(function(p){var y=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,m=0,A={},u={manual:p.Prism&&p.Prism.manual,disableWorkerMessageHandler:p.Prism&&p.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof F?new F(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++m}),t.__id},clone:function t(e,r){r=r||{};var i,n;switch(u.util.type(e)){case"Object":if(n=u.util.objId(e),r[n])return r[n];i={},r[n]=i;for(var o in e)e.hasOwnProperty(o)&&(i[o]=t(e[o],r));return i;case"Array":return n=u.util.objId(e),r[n]?r[n]:(i=[],r[n]=i,e.forEach(function(d,l){i[l]=t(d,r)}),i);default:return e}},getLanguage:function(t){for(;t;){var e=y.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(y,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var i="no-"+e;t;){var n=t.classList;if(n.contains(e))return!0;if(n.contains(i))return!1;t=t.parentElement}return!!r}},languages:{plain:A,plaintext:A,text:A,txt:A,extend:function(t,e){var r=u.util.clone(u.languages[t]);for(var i in e)r[i]=e[i];return r},insertBefore:function(t,e,r,i){i=i||u.languages;var n=i[t],o={};for(var d in n)if(n.hasOwnProperty(d)){if(d==e)for(var l in r)r.hasOwnProperty(l)&&(o[l]=r[l]);r.hasOwnProperty(d)||(o[d]=n[d])}var b=i[t];return i[t]=o,u.languages.DFS(u.languages,function(K,L){L===b&&K!=t&&(this[K]=o)}),o},DFS:function t(e,r,i,n){n=n||{};var o=u.util.objId;for(var d in e)if(e.hasOwnProperty(d)){r.call(e,d,e[d],i||d);var l=e[d],b=u.util.type(l);b==="Object"&&!n[o(l)]?(n[o(l)]=!0,t(l,r,null,n)):b==="Array"&&!n[o(l)]&&(n[o(l)]=!0,t(l,r,d,n))}}},plugins:{},highlightAll:function(t,e){u.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var i={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};u.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),u.hooks.run("before-all-elements-highlight",i);for(var n=0,o;o=i.elements[n++];)u.highlightElement(o,e===!0,i.callback)},highlightElement:function(t,e,r){var i=u.util.getLanguage(t),n=u.languages[i];u.util.setLanguage(t,i);var o=t.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&u.util.setLanguage(o,i);var d=t.textContent,l={element:t,language:i,grammar:n,code:d};function b(L){l.highlightedCode=L,u.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,u.hooks.run("after-highlight",l),u.hooks.run("complete",l),r&&r.call(l.element)}if(u.hooks.run("before-sanity-check",l),o=l.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code){u.hooks.run("complete",l),r&&r.call(l.element);return}if(u.hooks.run("before-highlight",l),!l.grammar){b(u.util.encode(l.code));return}if(e&&p.Worker){var K=new Worker(u.filename);K.onmessage=function(L){b(L.data)},K.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else b(u.highlight(l.code,l.grammar,l.language))},highlight:function(t,e,r){var i={code:t,grammar:e,language:r};if(u.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=u.tokenize(i.code,i.grammar),u.hooks.run("after-tokenize",i),F.stringify(u.util.encode(i.tokens),i.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var i in r)e[i]=r[i];delete e.rest}var n=new N;return H(n,n.head,t),$(t,n,e,n.head,0),V(n)},hooks:{all:{},add:function(t,e){var r=u.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=u.hooks.all[t];if(!(!r||!r.length))for(var i=0,n;n=r[i++];)n(e)}},Token:F};p.Prism=u;function F(t,e,r,i){this.type=t,this.content=e,this.alias=r,this.length=(i||"").length|0}F.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(b){i+=t(b,r)}),i}var n={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(n.classes,o):n.classes.push(o)),u.hooks.run("wrap",n);var d="";for(var l in n.attributes)d+=" "+l+'="'+(n.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+d+">"+n.content+"</"+n.tag+">"};function S(t,e,r,i){t.lastIndex=e;var n=t.exec(r);if(n&&i&&n[1]){var o=n[1].length;n.index+=o,n[0]=n[0].slice(o)}return n}function $(t,e,r,i,n,o){for(var d in r)if(!(!r.hasOwnProperty(d)||!r[d])){var l=r[d];l=Array.isArray(l)?l:[l];for(var b=0;b<l.length;++b){if(o&&o.cause==d+","+b)return;var K=l[b],L=K.inside,pn=!!K.lookbehind,tn=!!K.greedy,yn=K.alias;if(tn&&!K.pattern.global){var En=K.pattern.toString().match(/[imsuy]*$/)[0];K.pattern=RegExp(K.pattern.source,En+"g")}for(var gn=K.pattern||K,_=i.next,I=n;_!==e.tail&&!(o&&I>=o.reach);I+=_.value.length,_=_.next){var q=_.value;if(e.length>t.length)return;if(!(q instanceof F)){var X=1,M;if(tn){if(M=S(gn,I,t,pn),!M||M.index>=t.length)break;var j=M.index,Sn=M.index+M[0].length,T=I;for(T+=_.value.length;j>=T;)_=_.next,T+=_.value.length;if(T-=_.value.length,I=T,_.value instanceof F)continue;for(var G=_;G!==e.tail&&(T<Sn||typeof G.value=="string");G=G.next)X++,T+=G.value.length;X--,q=t.slice(I,T),M.index-=I}else if(M=S(gn,0,q,pn),!M)continue;var j=M.index,Q=M[0],rn=q.slice(0,j),hn=q.slice(j+Q.length),an=I+q.length;o&&an>o.reach&&(o.reach=an);var J=_.prev;rn&&(J=H(e,J,rn),I+=rn.length),Y(e,J,X);var mn=new F(d,L?u.tokenize(Q,L):Q,yn,Q);if(_=H(e,J,mn),hn&&H(e,_,hn),X>1){var sn={cause:d+","+b,reach:an};$(t,e,r,_.prev,I,sn),o&&sn.reach>o.reach&&(o.reach=sn.reach)}}}}}}function N(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function H(t,e,r){var i=e.next,n={value:r,prev:e,next:i};return e.next=n,i.prev=n,t.length++,n}function Y(t,e,r){for(var i=e.next,n=0;n<r&&i!==t.tail;n++)i=i.next;e.next=i,i.prev=e,t.length-=n}function V(t){for(var e=[],r=t.head.next;r!==t.tail;)e.push(r.value),r=r.next;return e}if(!p.document)return p.addEventListener&&(u.disableWorkerMessageHandler||p.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,i=e.code,n=e.immediateClose;p.postMessage(u.highlight(i,u.languages[r],r)),n&&p.close()},!1)),u;var k=u.util.currentScript();k&&(u.filename=k.src,k.hasAttribute("data-manual")&&(u.manual=!0));function g(){u.manual||u.highlightAll()}if(!u.manual){var E=document.readyState;E==="loading"||E==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return u})(z);v.exports&&(v.exports=s),typeof $n<"u"&&($n.Prism=s),s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup,s.hooks.add("wrap",function(p){p.type==="entity"&&(p.attributes.title=p.content.replace(/&amp;/,"&"))}),Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(y,m){var A={};A["language-"+m]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[m]},A.cdata=/^<!\[CDATA\[|\]\]>$/i;var u={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:A}};u["language-"+m]={pattern:/[\s\S]+/,inside:s.languages[m]};var F={};F[y]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return y}),"i"),lookbehind:!0,greedy:!0,inside:u},s.languages.insertBefore("markup","cdata",F)}}),Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(p,y){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+p+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[y,"language-"+y],inside:s.languages[y]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.xml=s.languages.extend("markup",{}),s.languages.ssml=s.languages.xml,s.languages.atom=s.languages.xml,s.languages.rss=s.languages.xml,(function(p){var y=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;p.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+y.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+y.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+y.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+y.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:y,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},p.languages.css.atrule.inside.rest=p.languages.css;var m=p.languages.markup;m&&(m.tag.addInlined("style","css"),m.tag.addAttribute("style","css"))})(s),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),s.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,s.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),s.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),s.languages.js=s.languages.javascript,(function(){if(typeof s>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var p="Loading…",y=function(k,g){return"✖ Error "+k+" while fetching file: "+g},m="✖ Error: File does not exist or is empty",A={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},u="data-src-status",F="loading",S="loaded",$="failed",N="pre[data-src]:not(["+u+'="'+S+'"]):not(['+u+'="'+F+'"])';function H(k,g,E){var t=new XMLHttpRequest;t.open("GET",k,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?g(t.responseText):t.status>=400?E(y(t.status,t.statusText)):E(m))},t.send(null)}function Y(k){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(k||"");if(g){var E=Number(g[1]),t=g[2],e=g[3];return t?e?[E,Number(e)]:[E,void 0]:[E,E]}}s.hooks.add("before-highlightall",function(k){k.selector+=", "+N}),s.hooks.add("before-sanity-check",function(k){var g=k.element;if(g.matches(N)){k.code="",g.setAttribute(u,F);var E=g.appendChild(document.createElement("CODE"));E.textContent=p;var t=g.getAttribute("data-src"),e=k.language;if(e==="none"){var r=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=A[r]||r}s.util.setLanguage(E,e),s.util.setLanguage(g,e);var i=s.plugins.autoloader;i&&i.loadLanguages(e),H(t,function(n){g.setAttribute(u,S);var o=Y(g.getAttribute("data-range"));if(o){var d=n.split(/\r\n?|\n/g),l=o[0],b=o[1]==null?d.length:o[1];l<0&&(l+=d.length),l=Math.max(0,Math.min(l-1,d.length)),b<0&&(b+=d.length),b=Math.max(0,Math.min(b,d.length)),n=d.slice(l,b).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(l+1))}E.textContent=n,s.highlightElement(E)},function(n){g.setAttribute(u,$),E.textContent=n})}}),s.plugins.fileHighlight={highlight:function(g){for(var E=(g||document).querySelectorAll(N),t=0,e;e=E[t++];)s.highlightElement(e)}};var V=!1;s.fileHighlight=function(){V||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),V=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(Cn)),Cn.exports}var ae=re();const Wn=Bn(ae);Rn?.default;typeof globalThis<"u"&&(globalThis.Prism=Wn);typeof window<"u"&&(window.Prism=Wn);Jn(()=>import("./prism-c-BI05wwL9.js"),[]).then(()=>{});const fn=[{step:1,titleKo:"기초 출력",titleEn:"Basic Output",descKo:"printf를 사용하여 다양한 출력을 연습합니다.",descEn:"Practice various outputs using printf.",examples:[{titleKo:"Hello World 출력",titleEn:"Print Hello World",code:`#include <stdio.h>

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
[3.142]`}]},{step:2,titleKo:"변수와 자료형",titleEn:"Variables & Data Types",descKo:"변수를 선언하고 다양한 자료형을 사용합니다.",descEn:"Declare variables and use various data types.",examples:[{titleKo:"정수 변수 선언",titleEn:"Integer Variables",code:`#include <stdio.h>

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
Circle area: 78.54`}]},{step:3,titleKo:"조건문",titleEn:"Conditionals",descKo:"if-else와 switch문을 연습합니다.",descEn:"Practice if-else and switch statements.",examples:[{titleKo:"짝수/홀수 판별",titleEn:"Even/Odd Check",code:`#include <stdio.h>

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
5 is odd`}]},{step:4,titleKo:"반복문",titleEn:"Loops",descKo:"for, while, do-while 반복문을 연습합니다.",descEn:"Practice for, while, and do-while loops.",examples:[{titleKo:"1부터 10까지 합",titleEn:"Sum 1 to 10",code:`#include <stdio.h>

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
Found: 7`}]},{step:5,titleKo:"함수",titleEn:"Functions",descKo:"함수를 정의하고 호출하는 연습을 합니다.",descEn:"Practice defining and calling functions.",examples:[{titleKo:"최대값 함수",titleEn:"Max Function",code:`#include <stdio.h>

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
5^3 = 125`}]},{step:6,titleKo:"배열",titleEn:"Arrays",descKo:"배열의 선언, 초기화, 순회를 연습합니다.",descEn:"Practice array declaration, initialization, and traversal.",examples:[{titleKo:"배열 평균 계산",titleEn:"Array Average",code:`#include <stdio.h>

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
Reversed: 5 4 3 2 1 `}]},{step:7,titleKo:"포인터",titleEn:"Pointers",descKo:"포인터 선언, 역참조, 배열 포인터를 연습합니다.",descEn:"Practice pointer declaration, dereferencing, and array pointers.",examples:[{titleKo:"포인터 기본",titleEn:"Basic Pointers",code:`#include <stdio.h>

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
Array: 1 2 3 4 5 `}]},{step:8,titleKo:"문자열 처리",titleEn:"String Handling",descKo:"문자열 함수와 문자열 조작을 연습합니다.",descEn:"Practice string functions and manipulation.",examples:[{titleKo:"문자열 길이와 복사",titleEn:"String Length & Copy",code:`#include <stdio.h>
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
"The quick brown fox": 4 words`}]},{step:9,titleKo:"종합 실습",titleEn:"Comprehensive Practice",descKo:"지금까지 배운 내용을 종합하여 실전 프로그램을 작성합니다.",descEn:"Combine everything learned to write practical programs.",examples:[{titleKo:"간단한 계산기",titleEn:"Simple Calculator",code:`#include <stdio.h>

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
    char ops[] = {'+ ', '-', '*', '/'};
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
Total: 10 primes`}]},{step:10,titleKo:"고급 실습",titleEn:"Advanced Practice",descKo:"정렬, 검색, 재귀 등 알고리즘 중심의 고급 연습입니다.",descEn:"Advanced practice focusing on sorting, searching, and recursion.",examples:[{titleKo:"선택 정렬",titleEn:"Selection Sort",code:`#include <stdio.h>

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
A:3 B:2 C:2 D:2 F:1`}]}];function le(){const{t:v,lang:z}=ne(),[s,p]=kn.useState(1),[y,m]=kn.useState(0),A=kn.useMemo(()=>fn.find(S=>S.step===s)||fn[0],[s]),u=A.examples[y],F=S=>{p(S),m(0)};return x.jsxs("div",{className:"c-practice-page",children:[x.jsxs("section",{className:"practice-header",children:[x.jsxs("h1",{children:[x.jsx("i",{className:"fa-solid fa-dumbbell"}),v("practice.title")]}),x.jsx("p",{className:"practice-subtitle",children:v("practice.subtitle")})]}),x.jsx("section",{className:"practice-steps",children:x.jsx("div",{className:"steps-scroll",children:fn.map(S=>x.jsxs("button",{className:`step-btn ${s===S.step?"active":""}`,onClick:()=>F(S.step),children:[x.jsx("span",{className:"step-number",children:S.step}),x.jsx("span",{className:"step-title",children:z==="en"?S.titleEn:S.titleKo})]},S.step))})}),x.jsxs("section",{className:"practice-content",children:[x.jsxs("div",{className:"practice-content-header",children:[x.jsxs("h2",{children:[x.jsxs("span",{className:"step-badge",children:[v("practice.step")," ",A.step]}),z==="en"?A.titleEn:A.titleKo]}),x.jsx("p",{children:z==="en"?A.descEn:A.descKo})]}),x.jsx("div",{className:"example-tabs",children:A.examples.map((S,$)=>x.jsxs("button",{className:`example-tab ${y===$?"active":""}`,onClick:()=>m($),children:[x.jsx("i",{className:"fa-solid fa-code"}),z==="en"?S.titleEn:S.titleKo]},$))}),u&&x.jsx("div",{className:"practice-editor-section",children:x.jsx(ee,{initialCode:u.code,expectedOutput:u.expected,lessonId:`practice-${s}-${y}`})})]}),x.jsxs("section",{className:"practice-nav",children:[x.jsxs("button",{className:"practice-nav-btn",disabled:s<=1,onClick:()=>F(s-1),children:[x.jsx("i",{className:"fa-solid fa-arrow-left"}),v("practice.prevStep")]}),x.jsxs("span",{className:"practice-nav-info",children:[s," / ",fn.length]}),x.jsxs("button",{className:"practice-nav-btn",disabled:s>=fn.length,onClick:()=>F(s+1),children:[v("practice.nextStep"),x.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})}export{le as default};

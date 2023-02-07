"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[865],{84765:(a,e,t)=>{t.d(e,{Z:()=>s});var n=t(67294),m=t(34673);function s(a){let{children:e}=a;return n.createElement(m.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},e)}},45140:(a,e,t)=>{t.d(e,{Z:()=>d});var n=t(67294),m=t(40667),s=t(86886),l=t(15861),p=t(93193),r=t(26126),i=t(74005),g=t(62288),c=t(17440),I=t(1849),o=t(3018),C=t(98034);function N(a,e,t){const n=function(a,e,t){let n=0;for(let m=e-1;m<=e+1;m++)for(let e=t-1;e<=t+1;e++)0<=m&&m<a.length&&0<=e&&e<a[0].length&&(n+=Number(a[m][e]));return n-Number(a[e][t])}(a,e,t);return a[e][t]&&2===n||3===n}function d(a){let{data:e=Array(100).fill().map((()=>Array(100).fill(!1)))}=a;const[t,d]=(0,n.useState)(e),[A,h]=(0,n.useState)(4),[u,Z]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const a=setInterval((()=>{u&&d(function(a){const e=a.map((a=>a.map((a=>a))));for(let t=0;t<a.length;t++)for(let n=0;n<a[0].length;n++)e[t][n]=N(a,t,n);return e}(t))}),4e3/A);return()=>{clearInterval(a)}}),[u,t]),n.createElement(n.Fragment,null,n.createElement(r.d$,{initialScale:7},(a=>{let{zoomIn:e,zoomOut:s,resetTransform:l}=a;return n.createElement(n.Fragment,null,n.createElement(m.Z,{onClick:()=>{e()}},n.createElement(i.Z,null)),n.createElement(m.Z,{onClick:()=>{s()}},n.createElement(g.Z,null)),n.createElement(m.Z,{onClick:()=>{l()}},n.createElement(c.Z,null)),n.createElement(r.Uv,null,n.createElement(k,{board:t,setBoard:d})))})),n.createElement(s.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(s.ZP,{item:!0},n.createElement(m.Z,{onClick:()=>{Z(!u)}},u?n.createElement(C.Z,null):n.createElement(o.Z,null))),n.createElement(s.ZP,{item:!0},n.createElement(m.Z,{onClick:()=>{d(e)}},n.createElement(I.Z,null))),n.createElement(s.ZP,{item:!0},n.createElement(l.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(s.ZP,{item:!0,xs:!0},n.createElement(p.ZP,{value:A,onChange:a=>{h(a.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function k(a){let{board:e,setBoard:t}=a;const m=52*e.length+2,s=52*e[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${m} ${s}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:m,height:s,fill:"#808080"}),e.map(((a,m)=>a.map(((a,s)=>n.createElement("rect",{key:`${m},${s}`,x:52*s+2,y:52*m+2,width:"50",height:"50",fill:a?"#000000":"#ffffff",onClick:()=>{const a=[...e];a[m][s]=!e[m][s],t(a)}}))))))))}},41089:(a,e,t)=>{t.d(e,{Z:()=>C});var n=t(67294),m=t(7174),s=t.n(m),l=t(31413),p=t(35993);const r="root_frVT";function i(a){let{path:e}=a;return n.createElement(n.Fragment,null,n.createElement("div",{className:r},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${e}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const g="iframe-wrapper_kRL9";function c(a,e){const t=new(s())({newline:!0});switch(a){case"text":return t.toHtml(e);case"html":return e;case"png":return`<img src="data:image/png;base64,${e}"></img>`;case"js":return`<script>${e}<\/script>`}}function I(a){const e=[];let t="normal";for(const n of a)switch(n.output_type){case"stream":e.push(c("text",n.text.join("")));break;case"execute_result":{const a=[];null!=n.data["text/plain"]&&a.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&a.push(c("html",n.data["text/html"].join(""))),e.push(a.join(""));break}case"error":e.push(c("text",n.traceback.join(""))),t="error";break;case"display_data":{const a=[];null!=n.data["text/plain"]&&a.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&a.push(c("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&a.push(c("js",n.data["application/javascript"])),null!=n.data["image/png"]&&a.push(c("png",n.data["image/png"])),e.push(a.join(""));break}}return{result:e.join(""),cellType:t}}function o(a){let{children:e,cellColor:t,title:m}=a;return n.createElement("div",{className:g,style:{backgroundColor:t}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:e,onLoad:a=>{const e=a.target;e.height=e.contentDocument.documentElement.scrollHeight+"px"},title:m}))}function C(a){let{path:e,noOutput:t=!1}=a;const[m,s]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(e).then((a=>a.json())).then((a=>{s(function(a){const e=[];for(const t of a.cells)switch(t.cell_type){case"markdown":e.push({cell_type:"markdown",source:0===t.source.length?null:t.source.join("")});break;case"code":{const{result:a,cellType:n}=I(t.outputs);e.push({cell_type:"code",source:0===t.source.length?null:t.source.join(""),output:0===t.outputs.length?null:a,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return e}(a))}))}),[]),n.createElement(n.Fragment,null,m.map(((a,e)=>n.createElement(n.Fragment,{key:e},"markdown"===a.cell_type&&null!=a.source&&n.createElement(o,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,p.Z)(a.source)),"code"===a.cell_type&&n.createElement(n.Fragment,null,null!=a.source&&n.createElement(l.Z,{language:"python"},a.source),!t&&null!=a.output&&n.createElement(o,{cellColor:a.cellColor,title:"Code Output"},a.output))))),n.createElement(i,{path:e}))}},56922:(a,e,t)=>{t.d(e,{Z:()=>s});var n=t(67294),m=t(45140);const s={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(m.Z,null)))}}},96370:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>g,contentTitle:()=>r,default:()=>o,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=t(87462),m=(t(67294),t(3905)),s=t(41089),l=t(84765);const p={sidebar_position:4},r="\u5909\u6570",i={unversionedId:"python/variables/index",id:"python/variables/index",title:"\u5909\u6570",description:"\u3053\u3053\u3067\u306f\u3001\u5909\u6570\u306e\u4f7f\u3044\u65b9\u3092\u5b66\u3073\u307e\u3059\u3002",source:"@site/docs/02-python/04-variables/index.mdx",sourceDirName:"02-python/04-variables",slug:"/python/variables/",permalink:"/docs/python/variables/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/02-python/04-variables/index.mdx",tags:[],version:"current",lastUpdatedAt:1675740021,formattedLastUpdatedAt:"2023\u5e742\u67087\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u7b97\u8853\u6f14\u7b97\u5b50",permalink:"/docs/python/expressions/"},next:{title:"\u95a2\u6570",permalink:"/docs/python/function/"}},g={},c=[{value:"\u5909\u6570",id:"\u5909\u6570-1",level:2},{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u7df4\u7fd2\u554f\u984c 2",id:"\u7df4\u7fd2\u554f\u984c-2",level:3}],I={toc:c};function o(a){let{components:e,...p}=a;return(0,m.kt)("wrapper",(0,n.Z)({},I,p,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"\u5909\u6570"},"\u5909\u6570"),(0,m.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u5909\u6570\u306e\u4f7f\u3044\u65b9\u3092\u5b66\u3073\u307e\u3059\u3002"),(0,m.kt)("h2",{id:"\u5909\u6570-1"},"\u5909\u6570"),(0,m.kt)("p",null,"10\xb0C \u3067\u306e\u97f3\u901f\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"V")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V")))))," \u3092\u97f3\u901f\u3001",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"t")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," \u3092\u6442\u6c0f\u6e29\u5ea6\u3068\u3059\u308b\u3068\u3001\u97f3\u901f\u306f\u304a\u304a\u3088\u305d\u6b21\u306e\u3088\u3046\u306a\u5f0f\u3067\u6c42\u3081\u3089\u308c\u307e\u3059\u3002"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"331.5"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mn",{parentName:"mrow"},"0.6"),(0,m.kt)("mi",{parentName:"mrow"},"t")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V=331.5+0.6t")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"331.5"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"0.6"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))),(0,m.kt)(s.Z,{path:"/variables/sound_velocity.ipynb",mdxType:"ViewSource"}),(0,m.kt)("p",null,"\u4e00\u5fdc\u3067\u304d\u307e\u3057\u305f\u304c\u3001 ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"t")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," \u3092\u5909\u3048\u3088\u3046\u3068\u3059\u308b\u3068\u3001(\u3053\u308c\u3050\u3089\u3044\u306a\u3089\u3059\u3050\u3067\u304d\u307e\u3059\u304c)\u3044\u3061\u3044\u3061\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5168\u3066\u8aad\u307f\u76f4\u3057\u3066\u3001\u6e29\u5ea6\u3092\u66f8\u304d\u63db\u3048\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u3053\u308c\u304c\u3001\u8907\u96d1\u306a\u8a08\u7b97\u5f0f\u3060\u3063\u305f\u3089\u3001\u3069\u306e\u5024\u3092\u5909\u3048\u308c\u3070\u3044\u3044\u306e\u304b\u308f\u304b\u3089\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3044\u305d\u3046\u3067\u3059\u3002"),(0,m.kt)("p",null,"\u3053\u3053\u3067\u3001\u5909\u6570\u304c\u6d3b\u8e8d\u3057\u307e\u3059\u3002\u5909\u6570\u306f\u6570\u5024\u3084\u6587\u5b57\u5217\u3092\u5165\u308c\u3089\u308c\u308b\u7bb1\u306e\u3088\u3046\u306a\u3082\u306e\u3067\u3001\u4efb\u610f\u306e\u6570\u5024\u3084\u6587\u5b57\u5217\u3092\u683c\u7d0d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u6b21\u306e\u3088\u3046\u306b ",(0,m.kt)("inlineCode",{parentName:"p"},"hoge")," \u3068\u540d\u524d\u306e\u3064\u3044\u305f\u7bb1\u306b ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2")))))," \u3092\u5165\u308c\u3066\u304a\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"\u5909\u6570\u306e\u8aac\u660e",src:t(73547).Z,width:"121",height:"121"})),(0,m.kt)("admonition",{title:"\u30e1\u30bf\u69cb\u6587\u5909\u6570",type:"note"},(0,m.kt)("p",{parentName:"admonition"},"\u30e1\u30bf\u69cb\u6587\u5909\u6570\u306f\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u306a\u3069\u3092\u8aac\u660e\u3059\u308b\u969b\u3001\u7279\u306b\u610f\u5473\u306e\u306a\u3044\u540d\u524d\u304c\u5fc5\u8981\u306b\u306a\u3063\u305f\u3068\u304d\u306b\u3088\u304f\u4f7f\u308f\u308c\u308b\u8a00\u8449\u3067\u3059\u3002\u540d\u524d\u3092\u66f8\u304f\u3068\u304d\u306b\u3001\u6771\u5927\u592a\u90ce\u3084\u99d2\u5834\u82b1\u5b50\u3068\u3044\u3063\u305f\u540d\u524d\u3092\u4f7f\u3046\u306e\u3068\u540c\u3058\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u3002"),(0,m.kt)("p",{parentName:"admonition"},"\u65e5\u672c\u3067\u306f\u3001",(0,m.kt)("inlineCode",{parentName:"p"},"hoge"),"\u3001",(0,m.kt)("inlineCode",{parentName:"p"},"fuga"),"\u3001",(0,m.kt)("inlineCode",{parentName:"p"},"piyo")," \u306a\u3069\u304c\u3088\u304f\u4f7f\u308f\u308c\u307e\u3059\u3002",(0,m.kt)("inlineCode",{parentName:"p"},"hogehoge")," \u306a\u3069\u3082\u4f7f\u308f\u308c\u307e\u3059\u3002"),(0,m.kt)("p",{parentName:"admonition"},"\u82f1\u8a9e\u3067\u306f\u3001",(0,m.kt)("inlineCode",{parentName:"p"},"foo")," \u3084 ",(0,m.kt)("inlineCode",{parentName:"p"},"bar")," \u306a\u3069\u304c\u3088\u304f\u4f7f\u308f\u308c\u307e\u3059\u3002",(0,m.kt)("inlineCode",{parentName:"p"},"foobar")," \u306a\u3069\u3082\u4f7f\u308f\u308c\u307e\u3059\u3002"),(0,m.kt)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e\u5358\u8a9e\u3092\u898b\u305f\u3089\u3001\u3053\u3053\u306e\u3068\u3053\u308d\u306f\u4efb\u610f\u306e\u6587\u5b57\u3067\u66f8\u304d\u63db\u3048\u3089\u308c\u308b\u3093\u3060\u306a\u3068\u601d\u3063\u3066\u304a\u304f\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,m.kt)("p",{parentName:"admonition"},"\u3061\u306a\u307f\u306b\u3001\u6697\u53f7\u306e\u4ed5\u7d44\u307f\u3092\u8aac\u660e\u3059\u308b\u3068\u304d\u306a\u3069\u306b\u306f Alice \u3068 Bob \u304c\u3088\u304f\u767b\u5834\u3057\u307e\u3059(\u7b11)")),(0,m.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u5909\u6570\u3092\u4f7f\u3046\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u3088\u308a\u5909\u66f4\u3057\u3084\u3059\u3044\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,m.kt)(s.Z,{path:"/variables/sound_velocity_revised.ipynb",mdxType:"ViewSource"}),(0,m.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u3001\u4f8b\u3048\u3070 10\xb0C \u3067\u306f\u306a\u304f 20\xb0C \u306e\u3068\u304d\u306e\u97f3\u901f\u3092\u6c42\u3081\u305f\u304f\u306a\u3063\u305f\u3068\u304d\u306b\u6b21\u306e\u3088\u3046\u306b ",(0,m.kt)("inlineCode",{parentName:"p"},"t = 20")," \u3068\u3059\u308b\u3060\u3051\u3067\u3088\u304f\u306a\u308a\u3001\u3088\u308a\u7c21\u5358\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,m.kt)(s.Z,{path:"/variables/sound_velocity_revised_20degree.ipynb",mdxType:"ViewSource"}),(0,m.kt)("admonition",{type:"tip"},(0,m.kt)("p",{parentName:"admonition"},"Python \u3067\u306f\u3001\u6570\u5b66\u3068\u306f\u9055\u3044 ",(0,m.kt)("inlineCode",{parentName:"p"},"=")," \u306f\u53f3\u306e\u7d50\u679c\u3092\u5de6\u306e\u5909\u6570\u306b\u4ee3\u5165\u3059\u308b\u3068\u3044\u3046\u610f\u5473\u3067\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u6b21\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3059\u308b\u3068 2 \u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),(0,m.kt)(s.Z,{path:"/variables/substitution.ipynb",mdxType:"ViewSource"})),(0,m.kt)("admonition",{title:"\u547d\u540d\u898f\u5247",type:"note"},(0,m.kt)("p",{parentName:"admonition"},"Python \u3067\u306f\u5909\u6570\u540d\u306b\u30b9\u30da\u30fc\u30b9\u3092\u4f7f\u3048\u306a\u3044\u305f\u3081\u3001\u8a9e\u3092\u3064\u306a\u3052\u3066\u5909\u6570\u540d\u3092\u4f5c\u308b\u3053\u3068\u306b\u6210\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u69d8\u3005\u306a\u547d\u540d\u898f\u5247\u304c\u3042\u308a\u307e\u3059\u3002\u4e0b\u306b\u4e3b\u306a\u3082\u306e\u306e\u540d\u79f0\u3068\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,m.kt)("table",{parentName:"admonition"},(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,m.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30e1\u30eb\u30b1\u30fc\u30b9"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"camelCase"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\u30d1\u30b9\u30ab\u30eb\u30b1\u30fc\u30b9"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"PascalCase"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\u30b9\u30cd\u30fc\u30af\u30b1\u30fc\u30b9"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"snake_case"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\u30b1\u30d0\u30d6\u30b1\u30fc\u30b9"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"kebab-case"))))),(0,m.kt)("p",{parentName:"admonition"},"Python \u3067\u306f\u3001\u30b9\u30cd\u30fc\u30af\u30b1\u30fc\u30b9\u3092\u4f7f\u3046\u3053\u3068\u304c\u591a\u3044\u3088\u3046\u3067\u3059\u3002\n(\u305f\u3060\u3057\u3001\u30af\u30e9\u30b9(\u3053\u3053\u3067\u306f\u8aac\u660e\u3057\u307e\u305b\u3093)\u306e\u547d\u540d\u306b\u306f\u3001\u30d1\u30b9\u30ab\u30eb\u30b1\u30fc\u30b9\u3092\u4f7f\u3046\u3088\u3046\u3067\u3059\u3002)\n\u305d\u306e\u305f\u3081\u3001\u8907\u6570\u306e\u8a9e\u3092\u4e00\u8a9e\u306b\u3064\u306a\u3052\u308b\u5834\u5408\u306f\u3001",(0,m.kt)("inlineCode",{parentName:"p"},"snake_case")," \u306e\u3088\u3046\u306b ",(0,m.kt)("inlineCode",{parentName:"p"},"_"),"\uff08\u30a2\u30f3\u30c0\u30fc\u30d0\u30fc\uff09\u3092\u4f7f\u3063\u3066\u8a9e\u306e\u533a\u5207\u308a\u304c\u5206\u304b\u308b\u3088\u3046\u306b\u3059\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002")),(0,m.kt)("admonition",{title:"\u5b9a\u6570(\u4e3b\u306b\u4ed6\u306e\u8a00\u8a9e\u306e\u5b66\u7fd2\u8005\u3078)",type:"note"},(0,m.kt)("p",{parentName:"admonition"},"Python \u3067\u306f\u5b9a\u6570\u306f\u4f7f\u3048\u306a\u3044\u3088\u3046\u3067\u3059\u3002\u6163\u7fd2\u7684\u306b\u5b9a\u6570\u306f\u5927\u6587\u5b57\u306e\u307f\u306e\u5909\u6570\u3068\u3057\u3066\u8868\u3059\u3088\u3046\u3067\u3059\u3002\u4f8b: ",(0,m.kt)("inlineCode",{parentName:"p"},"SAMPLE_CONST"))),(0,m.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"./../expressions/#%E5%95%8F%E9%A1%8C"},"\u7b97\u8853\u6f14\u7b97\u5b50\u306e\u9805"),"\u3067\u89e3\u3044\u305f\u554f\u984c\u3092\u5909\u6570\u3092\u4f7f\u3063\u3066\u89e3\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u300220\xb0C \u3067\u306e\u83ef\u6c0f\u6e29\u5ea6\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u6b21\u306e\u3088\u3046\u306a\u5f0f\u3067\u8868\u305b\u307e\u3059\u3002"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"F"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mfrac",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"mfrac"},"9"),(0,m.kt)("mn",{parentName:"mfrac"},"5")),(0,m.kt)("mi",{parentName:"mrow"},"C"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mn",{parentName:"mrow"},"32")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F=\\frac{9}{5}C+32")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0074em",verticalAlign:"-0.686em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,m.kt)("span",{parentName:"span",className:"mfrac"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3214em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"5"))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,m.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"9")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"32")))))),(0,m.kt)(l.Z,{mdxType:"Answer"},(0,m.kt)(s.Z,{path:"/variables/to_fahrenheit.ipynb",mdxType:"ViewSource"})),(0,m.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-2"},"\u7df4\u7fd2\u554f\u984c 2"),(0,m.kt)("p",null,"\u6b21\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u3069\u306e\u3088\u3046\u306a\u6570\u5b57\u304c\u51fa\u529b\u3055\u308c\u308b\u304b\u8003\u3048\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"x = 2\ny = 3\ny = x + y\ny\n")),(0,m.kt)(l.Z,{mdxType:"Answer"},(0,m.kt)("p",null,"3 \u884c\u76ee\u3067\u306f\u3001",(0,m.kt)("inlineCode",{parentName:"p"},"x + y")," \u306e\u5024\u304c\u8a55\u4fa1\u3055\u308c\u3066\u305d\u306e\u7d50\u679c\u304c ",(0,m.kt)("inlineCode",{parentName:"p"},"y")," \u306b\u4ee3\u5165\u3055\u308c\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"5")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2+3=5")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"5")))))," \u304c ",(0,m.kt)("inlineCode",{parentName:"p"},"y")," \u306b\u4ee3\u5165\u3055\u308c ",(0,m.kt)("inlineCode",{parentName:"p"},"5")," \u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),(0,m.kt)(s.Z,{path:"/variables/substitution_practice.ipynb",mdxType:"ViewSource"})))}o.isMDXComponent=!0},73547:(a,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyBob3N0PSI2NWJkNzExNDRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMjFweCIgaGVpZ2h0PSIxMjFweCIgdmlld0JveD0iLTAuNSAtMC41IDEyMSAxMjEiIGNvbnRlbnQ9IiZsdDtteGZpbGUmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7bnRJUjBVLVNOT2NXVHdvUDBXXzAmcXVvdDsgbmFtZT0mcXVvdDvjg5rjg7zjgrgxJnF1b3Q7Jmd0O3JaUk5VNE13RUlaL0RVY2RDQzNGbzYyMUhuUjY2TUZ6U2xMSU5CQk1RNkgrZWpmTjhqWFVVV2U4a09YWnpTYjc3b0lYcnZKbW8ybVp2U25HcFVkODFuamhrMGRJRkN6Z2FjSEZnVmtVT0pCcXdSd2FnSjM0NUFoOXBKVmcvRFFLTkVwSkk4b3hURlJSOE1TTUdOVmExZU93ZzVMalUwdWE4Z25ZSlZSTzZidGdKbk0wSm91ZXYzQ1JadTNKUWZUZ1BEbHRnN0dTVTBhWnFnY29YSHZoU2l0bG5KVTNLeTZ0ZHEwdWJ0L3pOOTd1WXBvWDVqY2JpTnR3cHJMQzJqd1NTZGk2UENqSUFCYzBGNnc2K3FoVTY3ZzdYWHZ5Q0FFa0txR3R5OTRQVm1yWFRJR0ltQXd1NFBJNUY5YmVwU1lnUTJuTnBOckRzcXd6WWZpdXBJbGxOWXlRVFdkeUNXOEJtSHRWRll5ejEzMEhhSEpNdGFYYnlraFJjT1NNNnVNVzBnaGpCODIvOStkalNLNDA2RzQwMUEybFBITnRlRE5BcU9PR3E1d2JmWUVROU02d3BUalRRZHZpdXArUWptV0Q2WWlSVVJ6S3RNdmM5dzBNYk4zdE5zYVROcEtKeHRxcFprditXV0xiTGZ6dVNQUS8rc1JqZmVLcFBQTWI2a1IvVndkZSt3L282aHY4aGNMMUZ3PT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij4KICAgIDxkZWZzLz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0gMCA0MCBMIDEwMCA0MCBMIDEyMCA2MCBMIDEyMCAxMjAgTCAyMCAxMjAgTCAwIDEwMCBMIDAgNDAgWiIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHBhdGggZD0iTSAwIDQwIEwgMTAwIDQwIEwgMTIwIDYwIEwgMjAgNjAgWiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cGF0aCBkPSJNIDAgNDAgTCAyMCA2MCBMIDIwIDEyMCBMIDAgMTAwIFoiIGZpbGwtb3BhY2l0eT0iMC4xIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cGF0aCBkPSJNIDIwIDEyMCBMIDIwIDYwIEwgMCA0MCBNIDIwIDYwIEwgMTIwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+CiAgICAgICAgICAgIDxzd2l0Y2g+CiAgICAgICAgICAgICAgICA8Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij4KICAgICAgICAgICAgICAgICAgICA8ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDk4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogOTBweDsgbWFyZ2luLWxlZnQ6IDIxcHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udCBzdHlsZT0iZm9udC1zaXplOiAyNnB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvZ2UKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZvbnQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI3MCIgeT0iOTQiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4KICAgICAgICAgICAgICAgICAgICBob2dlCiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvc3dpdGNoPgogICAgICAgIDwvZz4KICAgICAgICA8cmVjdCB4PSI0MCIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+CiAgICAgICAgICAgIDxzd2l0Y2g+CiAgICAgICAgICAgICAgICA8Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij4KICAgICAgICAgICAgICAgICAgICA8ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDQ4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMzBweDsgbWFyZ2luLWxlZnQ6IDQxcHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAyNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI2NSIgeT0iMzgiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyNnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4KICAgICAgICAgICAgICAgICAgICAyCiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvc3dpdGNoPgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxzd2l0Y2g+CiAgICAgICAgPGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+CiAgICAgICAgPGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPgogICAgICAgICAgICA8dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+CiAgICAgICAgICAgICAgICBUZXh0IGlzIG5vdCBTVkcgLSBjYW5ub3QgZGlzcGxheQogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9hPgogICAgPC9zd2l0Y2g+Cjwvc3ZnPg=="}}]);
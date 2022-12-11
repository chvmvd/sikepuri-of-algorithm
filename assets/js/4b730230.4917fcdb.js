"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[861],{3665:(t,a,e)=>{e.d(a,{Z:()=>r});var n=e(7294),l=e(4673);function r(t){let{children:a}=t;return n.createElement(l.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},a)}},2320:(t,a,e)=>{e.d(a,{Z:()=>c});var n=e(7294),l=e(7174),r=e.n(l),p=e(330),m=e(7184);const i="root_frVT";function s(t){let{path:a}=t;return n.createElement(n.Fragment,null,n.createElement("div",{className:i},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${a}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const u="iframe-wrapper_kRL9";function o(t,a){const e=new(r())({newline:!0});switch(t){case"text":return e.toHtml(a);case"html":return a;case"png":return`<img src="data:image/png;base64,${a}"></img>`;case"js":return`<script>${a}<\/script>`}}function k(t){const a=[];let e="normal";for(const n of t)switch(n.output_type){case"stream":a.push(o("text",n.text.join("")));break;case"execute_result":{const t=[];null!=n.data["text/plain"]&&t.push(o("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&t.push(o("html",n.data["text/html"].join(""))),a.push(t.join(""));break}case"error":a.push(o("text",n.traceback.join(""))),e="error";break;case"display_data":{const t=[];null!=n.data["text/plain"]&&t.push(o("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&t.push(o("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&t.push(o("js",n.data["application/javascript"])),null!=n.data["image/png"]&&t.push(o("png",n.data["image/png"])),a.push(t.join(""));break}}return{result:a.join(""),cellType:e}}function d(t){let{children:a,cellColor:e,title:l}=t;return n.createElement("div",{className:u,style:{backgroundColor:e}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px"},srcDoc:a,onLoad:t=>{const a=t.target;a.height=a.contentDocument.documentElement.scrollHeight+"px"},title:l}))}function c(t){let{path:a,noOutput:e=!1}=t;const[l,r]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(a).then((t=>t.json())).then((t=>{r(function(t){const a=[];for(const e of t.cells)switch(e.cell_type){case"markdown":a.push({cell_type:"markdown",source:0===e.source.length?null:e.source.join("")});break;case"code":{const{result:t,cellType:n}=k(e.outputs);a.push({cell_type:"code",source:0===e.source.length?null:e.source.join(""),output:0===e.outputs.length?null:t,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return a}(t))}))}),[]),n.createElement(n.Fragment,null,l.map(((t,a)=>n.createElement(n.Fragment,{key:a},"markdown"===t.cell_type&&null!=t.source&&n.createElement(d,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,m.Z)(t.source)),"code"===t.cell_type&&n.createElement(n.Fragment,null,null!=t.source&&n.createElement(p.Z,{language:"python"},t.source),!e&&null!=t.output&&n.createElement(d,{cellColor:t.cellColor,title:"Code Output"},t.output))))),n.createElement(s,{path:a}))}},6454:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>m,metadata:()=>s,toc:()=>o});var n=e(7462),l=(e(7294),e(3905)),r=e(2320),p=e(3665);const m={sidebar_position:10},i="\u591a\u6b21\u5143\u914d\u5217",s={unversionedId:"01python/10multi-array/index",id:"01python/10multi-array/index",title:"\u591a\u6b21\u5143\u914d\u5217",description:"\u4e8c\u6b21\u5143\u914d\u5217",source:"@site/docs/01python/10multi-array/index.mdx",sourceDirName:"01python/10multi-array",slug:"/01python/10multi-array/",permalink:"/docs/01python/10multi-array/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/01python/10multi-array/index.mdx",tags:[],version:"current",lastUpdatedAt:1670770922,formattedLastUpdatedAt:"2022\u5e7412\u670811\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u914d\u5217",permalink:"/docs/01python/09array/"},next:{title:"\u6761\u4ef6\u5206\u5c90",permalink:"/docs/01python/11if/"}},u={},o=[{value:"\u4e8c\u6b21\u5143\u914d\u5217",id:"\u4e8c\u6b21\u5143\u914d\u5217",level:2},{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u4e09\u6b21\u5143\u914d\u5217",id:"\u4e09\u6b21\u5143\u914d\u5217",level:2},{value:"\u591a\u6b21\u5143\u914d\u5217",id:"\u591a\u6b21\u5143\u914d\u5217-1",level:2}],k={toc:o};function d(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u591a\u6b21\u5143\u914d\u5217"},"\u591a\u6b21\u5143\u914d\u5217"),(0,l.kt)("h2",{id:"\u4e8c\u6b21\u5143\u914d\u5217"},"\u4e8c\u6b21\u5143\u914d\u5217"),(0,l.kt)("p",null,"\u524d\u9805\u3067\u306f\u751f\u5f92\u306e",(0,l.kt)("strong",{parentName:"p"},"\u6570\u5b66"),"\u306e\u70b9\u6570\u306e\u307f\u306b\u3064\u3044\u3066\u8003\u3048\u307e\u3057\u305f\u304c\u3001\u751f\u5f92\u306e",(0,l.kt)("strong",{parentName:"p"},"\u5168\u6559\u79d1"),"\u306e\u70b9\u6570\u306b\u3064\u3044\u3066\u8003\u3048\u305f\u3089\u3001\u3069\u3046\u306a\u308b\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"A\u3001B\u3001C \u306e 3 \u4eba\u306e\u751f\u5f92\u304c\u3044\u3066\u3001\u305d\u308c\u305e\u308c\u306e\u56fd\u8a9e\u3001\u6570\u5b66\u3001\u82f1\u8a9e\u306e\u70b9\u6570\u304c\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"A")),(0,l.kt)("td",{parentName:"tr",align:null},"83"),(0,l.kt)("td",{parentName:"tr",align:null},"75"),(0,l.kt)("td",{parentName:"tr",align:null},"32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},"73"),(0,l.kt)("td",{parentName:"tr",align:null},"53"),(0,l.kt)("td",{parentName:"tr",align:null},"84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"C")),(0,l.kt)("td",{parentName:"tr",align:null},"63"),(0,l.kt)("td",{parentName:"tr",align:null},"48"),(0,l.kt)("td",{parentName:"tr",align:null},"64")))),(0,l.kt)("p",null,"\u524d\u9805\u306e\u5185\u5bb9\u3092\u4f7f\u3063\u3066\u3001\u70b9\u6570\u306e\u5408\u8a08\u3092\u8a08\u7b97\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/multi-array/2_dim_array_sample.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u4e00\u5fdc\u3067\u304d\u307e\u3057\u305f\u304c\u3001\u751f\u5f92\u306e\u4eba\u6570\u304c\u5897\u3048\u3066\u3057\u307e\u3046\u3068\u5927\u5909\u3067\u3059\u3057\u3001\u751f\u5f92\u306e\u4eba\u6570\u304c\u5909\u308f\u308b\u3054\u3068\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u304d\u76f4\u3055\u306a\u3044\u3068\u3044\u3051\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u3053\u3053\u3067\u3001\u4e8c\u6b21\u5143\u914d\u5217\u3092\u4f7f\u3044\u307e\u3059\u3002\u4e8c\u6b21\u5143\u914d\u5217\u306f\u540d\u524d\u306e\u901a\u308a\u914d\u5217\u304c\u4e8c\u6b21\u5143\u3068\u306a\u3063\u305f\u3082\u306e\u3067\u3001\u914d\u5217\u306e\u914d\u5217\u3067\u3059\u3002\u6570\u5b66\u306b\u304a\u3051\u308b\u884c\u5217\u3068\u540c\u3058\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u4e0a\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4e8c\u6b21\u5143\u914d\u5217\u3092\u4f7f\u3063\u3066\u8a18\u8ff0\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/multi-array/2_dim_array_revised.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u4e8c\u6b21\u5143\u914d\u5217\u3092\u4f5c\u308b\u3068\u304d\u306f\u3001\u914d\u5217\u306e\u8981\u7d20\u3092\u914d\u5217\u306b\u3059\u308c\u3070\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\u914d\u5217\u540d = [\u7b2c\u4e00\u884c\u306e\u914d\u5217, \u7b2c\u4e8c\u884c\u306e\u914d\u5217, \u7b2c\u4e09\u884c\u306e\u914d\u5217, \u2026 , \u7b2ci\u884c\u306e\u914d\u5217]\n")),(0,l.kt)("p",null,(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"i")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," \u884c\u3001",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"j")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," \u5217\u306e\u6570\u5b57\u3092\u53d6\u308a\u51fa\u3059\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\u914d\u5217\u540d[i][j]\n")),(0,l.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,l.kt)("p",null,"A\u3001B\u3001C \u306e 3 \u4eba\u306e\u751f\u5f92\u304c\u3044\u3066\u3001\u305d\u308c\u305e\u308c\u306e\u56fd\u8a9e\u3001\u6570\u5b66\u3001\u82f1\u8a9e\u306e\u70b9\u6570\u304c\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"A")),(0,l.kt)("td",{parentName:"tr",align:null},"83"),(0,l.kt)("td",{parentName:"tr",align:null},"75"),(0,l.kt)("td",{parentName:"tr",align:null},"32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},"73"),(0,l.kt)("td",{parentName:"tr",align:null},"53"),(0,l.kt)("td",{parentName:"tr",align:null},"84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"C")),(0,l.kt)("td",{parentName:"tr",align:null},"63"),(0,l.kt)("td",{parentName:"tr",align:null},"48"),(0,l.kt)("td",{parentName:"tr",align:null},"64")))),(0,l.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u751f\u5f92\u306e\u5408\u8a08\u70b9\u3092\u51fa\u3057\u3066\u3001\u305d\u306e\u5e73\u5747\u5024\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(p.Z,{mdxType:"Answer"},(0,l.kt)(r.Z,{path:"/multi-array/average_of_sum.ipynb",mdxType:"ViewSource"})),(0,l.kt)("h2",{id:"\u4e09\u6b21\u5143\u914d\u5217"},"\u4e09\u6b21\u5143\u914d\u5217"),(0,l.kt)("p",null,"\u4e8c\u6b21\u5143\u914d\u5217\u3092\u3055\u3089\u306b\u767a\u5c55\u3055\u305b\u3066\u3001\u4e09\u6b21\u5143\u914d\u5217\u3092\u8003\u3048\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3048\u3070\u30011 \u7d44\u306b A \u3068 B \u304c\u6240\u5c5e\u3057\u3066\u3044\u3066\u30012 \u7d44\u306b C \u3068 D \u304c\u6240\u5c5e\u3057\u3066\u3044\u308b\u3068\u3057\u307e\u3059\u3002\n\u305d\u306e\u6642\u3001\u305d\u308c\u305e\u308c\u306e\u751f\u5f92\u306e\u56fd\u8a9e\u3068\u6570\u5b66\u3068\u82f1\u8a9e\u306e\u70b9\u6570\u304c\u6b21\u306e\u3088\u3046\u306b\u4e0e\u3048\u3089\u308c\u305f\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"1 \u7d44"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"A")),(0,l.kt)("td",{parentName:"tr",align:null},"51"),(0,l.kt)("td",{parentName:"tr",align:null},"56"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},"47"),(0,l.kt)("td",{parentName:"tr",align:null},"52"),(0,l.kt)("td",{parentName:"tr",align:null},"58")))),(0,l.kt)("p",null,"2 \u7d44"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"C")),(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"92"),(0,l.kt)("td",{parentName:"tr",align:null},"34")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"D")),(0,l.kt)("td",{parentName:"tr",align:null},"28"),(0,l.kt)("td",{parentName:"tr",align:null},"44"),(0,l.kt)("td",{parentName:"tr",align:null},"19")))),(0,l.kt)("p",null,"\u4e09\u6b21\u5143\u914d\u5217\u3092\u7528\u3044\u3066\u3001\u3053\u308c\u306e\u5408\u8a08\u70b9\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/multi-array/3_dim_array_sample.ipynb",mdxType:"ViewSource"}),(0,l.kt)("h2",{id:"\u591a\u6b21\u5143\u914d\u5217-1"},"\u591a\u6b21\u5143\u914d\u5217"),(0,l.kt)("p",null,"\u3055\u3089\u306b\u767a\u5c55\u3055\u305b\u3066\u3001\u591a\u6b21\u5143\u914d\u5217\u3092\u8003\u3048\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);
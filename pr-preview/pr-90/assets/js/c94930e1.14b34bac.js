"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[516,918],{3665:(a,e,t)=>{t.d(e,{Z:()=>m});var n=t(7294),s=t(4673);function m(a){let{children:e}=a;return n.createElement(s.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},e)}},2320:(a,e,t)=>{t.d(e,{Z:()=>h});var n=t(7294),s=t(7174),m=t.n(s),p=t(1686),r=t(7184);const l="root_frVT";function i(a){let{path:e}=a;return n.createElement(n.Fragment,null,n.createElement("div",{className:l},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${e}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const N="iframe-wrapper_kRL9";function c(a,e){const t=new(m())({newline:!0});switch(a){case"text":return t.toHtml(e);case"html":return e;case"png":return`<img src="data:image/png;base64,${e}"></img>`;case"js":return`<script>${e}<\/script>`}}function o(a){const e=[];let t="normal";for(const n of a)switch(n.output_type){case"stream":e.push(c("text",n.text.join("")));break;case"execute_result":{const a=[];null!=n.data["text/plain"]&&a.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&a.push(c("html",n.data["text/html"].join(""))),e.push(a.join(""));break}case"error":e.push(c("text",n.traceback.join(""))),t="error";break;case"display_data":{const a=[];null!=n.data["text/plain"]&&a.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&a.push(c("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&a.push(c("js",n.data["application/javascript"])),null!=n.data["image/png"]&&a.push(c("png",n.data["image/png"])),e.push(a.join(""));break}}return{result:e.join(""),cellType:t}}function k(a){let{children:e,cellColor:t,title:s}=a;return n.createElement("div",{className:N,style:{backgroundColor:t}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px"},srcDoc:e,onLoad:a=>{const e=a.target;e.height=e.contentDocument.documentElement.scrollHeight+"px"},title:s}))}function h(a){let{path:e,noOutput:t=!1}=a;const[s,m]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(e).then((a=>a.json())).then((a=>{m(function(a){const e=[];for(const t of a.cells)switch(t.cell_type){case"markdown":e.push({cell_type:"markdown",source:0===t.source.length?null:t.source.join("")});break;case"code":{const{result:a,cellType:n}=o(t.outputs);e.push({cell_type:"code",source:0===t.source.length?null:t.source.join(""),output:0===t.outputs.length?null:a,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return e}(a))}))}),[]),n.createElement(n.Fragment,null,s.map(((a,e)=>n.createElement(n.Fragment,{key:e},"markdown"===a.cell_type&&null!=a.source&&n.createElement(k,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,r.Z)(a.source)),"code"===a.cell_type&&n.createElement(n.Fragment,null,null!=a.source&&n.createElement(p.Z,{language:"python"},a.source),!t&&null!=a.output&&n.createElement(k,{cellColor:a.cellColor,title:"Code Output"},a.output))))),n.createElement(i,{path:e}))}},6922:(a,e,t)=>{t.d(e,{Z:()=>m});var n=t(7294),s=t(9832);const m={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(s.Z,null)))}}},7857:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>N,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(7462),s=(t(7294),t(3905)),m=t(2320),p=t(3665);const r={sidebar_position:5},l="\u95a2\u6570",i={unversionedId:"01python/05function/index",id:"01python/05function/index",title:"\u95a2\u6570",description:"\u95a2\u6570",source:"@site/docs/01python/05function/index.mdx",sourceDirName:"01python/05function",slug:"/01python/05function/",permalink:"/docs/01python/05function/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/01python/05function/index.mdx",tags:[],version:"current",lastUpdatedAt:1670133362,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5909\u6570",permalink:"/docs/01python/04variables/"},next:{title:"\u30e9\u30a4\u30d6\u30e9\u30ea",permalink:"/docs/01python/06library/"}},N={},c=[{value:"\u95a2\u6570",id:"\u95a2\u6570-1",level:2},{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u7df4\u7fd2\u554f\u984c 2",id:"\u7df4\u7fd2\u554f\u984c-2",level:3}],o={toc:c};function k(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u95a2\u6570"},"\u95a2\u6570"),(0,s.kt)("h2",{id:"\u95a2\u6570-1"},"\u95a2\u6570"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"x"),(0,s.kt)("mn",{parentName:"msup"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x)=x^2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))))," \u3068\u3057\u305f\u3068\u304d\u306e\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(2)+f(3)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(m.Z,{path:"/function/x2.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,"\u4e00\u5fdc\u3067\u304d\u307e\u3057\u305f\u304c\u3001\u3053\u306e\u3088\u3046\u306b\u3064\u304f\u308b\u3068\u95a2\u6570\u5024\u3092\u6c42\u3081\u308b\u3068\u304d\u306b\u6bce\u56de ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u306e\u5b9a\u7fa9\u3092\u898b\u3066\u66f8\u304b\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u4eca\u56de\u306e\u3088\u3046\u306b\u3001\u5358\u7d14\u306a\u95a2\u6570\u3067\u306f\u826f\u3044\u3067\u3059\u304c\u3082\u3063\u3068\u8907\u96d1\u306a\u95a2\u6570\u3067\u306f\u5927\u5909\u3067\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u3068\u304d\u306b\u3001Python \u3067\u306f\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)("p",null,"\u95a2\u6570\u3092\u7528\u3044\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u7c21\u5358\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/function/x2_function.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,"\u95a2\u6570\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5f15\u6570\u306f\u300c\u3072\u304d\u3059\u3046\u300d\u3068\u8aad\u307f\u307e\u3059\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def \u95a2\u6570\u540d(\u5f15\u6570):\n    return \u623b\u308a\u5024\n")),(0,s.kt)("p",null,"\u95a2\u6570\u3092\u4f7f\u7528\u3059\u308b\u3068\u304d\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"\u95a2\u6570\u540d(\u4efb\u610f\u306e\u5f15\u6570)\n")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Python \u3067\u306f\u3001\u304d\u3061\u3093\u3068\u30a4\u30f3\u30c7\u30f3\u30c8\uff08\u5b57\u4e0b\u3052\uff09\u3092\u3057\u306a\u3044\u3068\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001\u5148\u7a0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067 ",(0,s.kt)("inlineCode",{parentName:"p"},"return")," \u306e\u524d\u306e\u30a4\u30f3\u30c7\u30f3\u30c8\u3092\u5fd8\u308c\u308b\u3068\u3001\u3069\u3053\u307e\u3067\u304c\u95a2\u6570\u306e\u4e2d\u8eab\u3067\u3042\u308b\u306e\u304b\u308f\u304b\u3089\u306a\u304f\u306a\u308a\u3001\u6b21\u306e\u3088\u3046\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/function/indent.ipynb",mdxType:"ViewSource"})),(0,s.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u304a\u3051\u308b\u95a2\u6570\u306f\u3001\u6570\u5b66\u306b\u304a\u3051\u308b\u95a2\u6570\u3088\u308a\u3082\u591a\u304f\u306e\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001\u6570\u5b66\u3067\u306f\u623b\u308a\u5024\u306f\u5fc5\u8981\u3067\u3059\u304c\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u304a\u3051\u308b\u95a2\u6570\u306b\u306f\u623b\u308a\u5024\u306f\u5fc5\u305a\u3057\u3082\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001\u6b21\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u3064\u304f\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/function/hello.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u304a\u3044\u3066\u306f\u3001\u4e00\u9023\u306e\u51e6\u7406\u3092\u5b9f\u884c\u3059\u308b\u3068\u304d\u306b\u95a2\u6570\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3082\u3061\u308d\u3093\u3001\u5f15\u6570\u3092\u4e0e\u3048\u308b\u3068\u5f15\u6570\u306b\u5fdc\u3058\u305f\u51e6\u7406\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/function/introduce_self.ipynb",mdxType:"ViewSource"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u4e0a\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u3001\u4e0b\u3068\u540c\u3058\u610f\u5473\u3067\u3059\u3002\u4e0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3082\u554f\u984c\u306a\u3044\u306e\u3067\u3059\u304c\u3001\u5c11\u3057\u683c\u597d\u60aa\u3044\u306e\u3067\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"f-string")," \u3092\u4f7f\u3063\u3066\u3057\u307e\u3044\u307e\u3057\u305f\u3002\u6c17\u306b\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"+")," \u8a18\u53f7\u3092\u4f7f\u3046\u3068\u3001\u6587\u5b57\u5217\u3092\u3064\u306a\u3052\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/function/introduce_self2.ipynb",mdxType:"ViewSource"})),(0,s.kt)("p",null,"\u623b\u308a\u5024\u3092\u4f7f\u3046\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u3082\u8868\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/function/introduce_self3.ipynb",mdxType:"ViewSource"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5148\u307b\u3069\u3068\u540c\u69d8\u306e\u7406\u7531\u3067 ",(0,s.kt)("inlineCode",{parentName:"p"},"f-string")," \u3092\u4f7f\u3063\u3066\u3057\u307e\u3044\u307e\u3057\u305f\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"f-string")," \u3092\u4f7f\u308f\u306a\u3044\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/function/introduce_self4.ipynb",mdxType:"ViewSource"})),(0,s.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,s.kt)("p",null,"\u4e07\u6709\u5f15\u529b\u3092\u6c42\u3081\u308b\u95a2\u6570\u3092\u4f5c\u3063\u3066\u5b9f\u969b\u306b\u8a08\u7b97\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"F"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"G"),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"M"),(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("msup",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"msup"},"r"),(0,s.kt)("mn",{parentName:"msup"},"2")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F=G\\frac{Mm}{r^2}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0463em",verticalAlign:"-0.686em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3603em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7401em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.989em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"G"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"6.7"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"11")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G=6.7\\times 10^{-11}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"6.7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"11"))))))))))))),"\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r=2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))))),"\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"M"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"60")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M=60")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"60"))))),"\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"20")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m=20")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"20")))))," \u3068\u3057\u307e\u3059\u3002"),(0,s.kt)(p.Z,{mdxType:"Answer"},(0,s.kt)(m.Z,{path:"/function/gravitation.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,"\u3053\u3053\u3067 ",(0,s.kt)("inlineCode",{parentName:"p"},"e-08")," \u3068\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u3053\u308c\u306f ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"8")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{-8}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"8")))))))))))))," \u3068\u3044\u3046\u610f\u5473\u3067\u3059\u3002")),(0,s.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-2"},"\u7df4\u7fd2\u554f\u984c 2"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"\u79c1\u306e\u540d\u524d\u306f\u3001\u6771\u5927\u592a\u90ce\u3067\u3059\u3002\u4e2d\u56fd\u8a9e\u9078\u629e\u3067\u3059\u3002")," \u306e\u3088\u3046\u306b\u81ea\u5206\u306e\u540d\u524d\u3068\u7b2c\uff12\u5916\u56fd\u8a9e\u3092\u7d39\u4ecb\u3059\u308b\u95a2\u6570\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(p.Z,{mdxType:"Answer"},(0,s.kt)(m.Z,{path:"/function/introduce_language.ipynb",mdxType:"ViewSource"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"f-string")," \u3092\u4f7f\u308f\u306a\u3044\u3068\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/function/introduce_language2.ipynb",mdxType:"ViewSource"}))))}k.isMDXComponent=!0}}]);
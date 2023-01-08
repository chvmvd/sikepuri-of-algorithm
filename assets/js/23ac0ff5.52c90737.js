"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[5385,7918],{4765:(a,e,t)=>{t.d(e,{Z:()=>m});var s=t(7294),n=t(4673);function m(a){let{children:e}=a;return s.createElement(n.Z,{summary:s.createElement("summary",null,"\u89e3\u7b54")},e)}},5140:(a,e,t)=>{t.d(e,{Z:()=>u});var s=t(7294),n=t(9531),m=t(9072),p=t(9630),r=t(3477),l=t(6126),i=t(4005),N=t(2288),c=t(7440),o=t(1849),k=t(3018),h=t(8034);function d(a,e,t){const s=function(a,e,t){let s=0;for(let n=e-1;n<=e+1;n++)for(let e=t-1;e<=t+1;e++)0<=n&&n<a.length&&0<=e&&e<a[0].length&&(s+=Number(a[n][e]));return s-Number(a[e][t])}(a,e,t);return a[e][t]&&2===s||3===s}function u(a){let{data:e=Array(100).fill().map((()=>Array(100).fill(!1)))}=a;const[t,u]=(0,s.useState)(e),[y,v]=(0,s.useState)(4),[f,x]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const a=setInterval((()=>{f&&u(function(a){const e=a.map((a=>a.map((a=>a))));for(let t=0;t<a.length;t++)for(let s=0;s<a[0].length;s++)e[t][s]=d(a,t,s);return e}(t))}),4e3/y);return()=>{clearInterval(a)}}),[f,t]),s.createElement(s.Fragment,null,s.createElement(l.d$,{initialScale:7},(a=>{let{zoomIn:e,zoomOut:m,resetTransform:p}=a;return s.createElement(s.Fragment,null,s.createElement(n.Z,{onClick:()=>{e()}},s.createElement(i.Z,null)),s.createElement(n.Z,{onClick:()=>{m()}},s.createElement(N.Z,null)),s.createElement(n.Z,{onClick:()=>{p()}},s.createElement(c.Z,null)),s.createElement(l.Uv,null,s.createElement(g,{board:t,setBoard:u})))})),s.createElement(m.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},s.createElement(m.ZP,{item:!0},s.createElement(n.Z,{onClick:()=>{x(!f)}},f?s.createElement(h.Z,null):s.createElement(k.Z,null))),s.createElement(m.ZP,{item:!0},s.createElement(n.Z,{onClick:()=>{u(e)}},s.createElement(o.Z,null))),s.createElement(m.ZP,{item:!0},s.createElement(p.Z,{gutterBottom:!0},"\u901f\u3055")),s.createElement(m.ZP,{item:!0,xs:!0},s.createElement(r.ZP,{value:y,onChange:a=>{v(a.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function g(a){let{board:e,setBoard:t}=a;const n=52*e.length+2,m=52*e[0].length+2;return s.createElement(s.Fragment,null,s.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${n} ${m}`},s.createElement("defs",null),s.createElement("g",null,s.createElement("rect",{x:"0",y:"0",width:n,height:m,fill:"#808080"}),e.map(((a,n)=>a.map(((a,m)=>s.createElement("rect",{key:`${n},${m}`,x:52*m+2,y:52*n+2,width:"50",height:"50",fill:a?"#000000":"#ffffff",onClick:()=>{const a=[...e];a[n][m]=!e[n][m],t(a)}}))))))))}},1089:(a,e,t)=>{t.d(e,{Z:()=>h});var s=t(7294),n=t(7174),m=t.n(n),p=t(5614),r=t(5993);const l="root_frVT";function i(a){let{path:e}=a;return s.createElement(s.Fragment,null,s.createElement("div",{className:l},s.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${e}`,target:"_blank",rel:"noreferrer"},s.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const N="iframe-wrapper_kRL9";function c(a,e){const t=new(m())({newline:!0});switch(a){case"text":return t.toHtml(e);case"html":return e;case"png":return`<img src="data:image/png;base64,${e}"></img>`;case"js":return`<script>${e}<\/script>`}}function o(a){const e=[];let t="normal";for(const s of a)switch(s.output_type){case"stream":e.push(c("text",s.text.join("")));break;case"execute_result":{const a=[];null!=s.data["text/plain"]&&a.push(c("text",s.data["text/plain"].join(""))),null!=s.data["text/html"]&&a.push(c("html",s.data["text/html"].join(""))),e.push(a.join(""));break}case"error":e.push(c("text",s.traceback.join(""))),t="error";break;case"display_data":{const a=[];null!=s.data["text/plain"]&&a.push(c("text",s.data["text/plain"].join(""))),null!=s.data["text/html"]&&a.push(c("html",s.data["text/html"].join(""))),null!=s.data["application/javascript"]&&a.push(c("js",s.data["application/javascript"])),null!=s.data["image/png"]&&a.push(c("png",s.data["image/png"])),e.push(a.join(""));break}}return{result:e.join(""),cellType:t}}function k(a){let{children:e,cellColor:t,title:n}=a;return s.createElement("div",{className:N,style:{backgroundColor:t}},s.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:e,onLoad:a=>{const e=a.target;e.height=e.contentDocument.documentElement.scrollHeight+"px"},title:n}))}function h(a){let{path:e,noOutput:t=!1}=a;const[n,m]=(0,s.useState)([]);return(0,s.useEffect)((()=>{fetch(e).then((a=>a.json())).then((a=>{m(function(a){const e=[];for(const t of a.cells)switch(t.cell_type){case"markdown":e.push({cell_type:"markdown",source:0===t.source.length?null:t.source.join("")});break;case"code":{const{result:a,cellType:s}=o(t.outputs);e.push({cell_type:"code",source:0===t.source.length?null:t.source.join(""),output:0===t.outputs.length?null:a,cellColor:"normal"===s?"#eee":"#ffdddc"});break}}return e}(a))}))}),[]),s.createElement(s.Fragment,null,n.map(((a,e)=>s.createElement(s.Fragment,{key:e},"markdown"===a.cell_type&&null!=a.source&&s.createElement(k,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,r.Z)(a.source)),"code"===a.cell_type&&s.createElement(s.Fragment,null,null!=a.source&&s.createElement(p.Z,{language:"python"},a.source),!t&&null!=a.output&&s.createElement(k,{cellColor:a.cellColor,title:"Code Output"},a.output))))),s.createElement(i,{path:e}))}},6922:(a,e,t)=>{t.d(e,{Z:()=>m});var s=t(7294),n=t(5140);const m={React:s,...s,LifeGame:function(){return s.createElement(s.Fragment,null,s.createElement("div",{style:{maxWidth:"200px"}},s.createElement(n.Z,null)))}}},2792:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>N,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(7462),n=(t(7294),t(3905)),m=t(1089),p=t(4765);const r={sidebar_position:5},l="\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5",i={unversionedId:"02advanced/06monte-carlo/index",id:"02advanced/06monte-carlo/index",title:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5",description:"\u3053\u3053\u3067\u306f\u3001\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u306b\u3064\u3044\u3066\u5b66\u3093\u3067\u3044\u304d\u307e\u3059\u3002",source:"@site/docs/02advanced/06monte-carlo/index.mdx",sourceDirName:"02advanced/06monte-carlo",slug:"/02advanced/06monte-carlo/",permalink:"/docs/02advanced/06monte-carlo/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/02advanced/06monte-carlo/index.mdx",tags:[],version:"current",lastUpdatedAt:1673142489,formattedLastUpdatedAt:"2023\u5e741\u67088\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u8a08\u7b97\u91cf",permalink:"/docs/02advanced/05order/"},next:{title:"\u30b5\u30fc\u30c1\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",permalink:"/docs/02advanced/07search/"}},N={},c=[{value:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3068\u306f",id:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3068\u306f",level:2},{value:"\u4e71\u6570",id:"\u4e71\u6570",level:2},{value:"<code>random</code> \u95a2\u6570",id:"random-\u95a2\u6570",level:3},{value:"<code>uniform</code> \u95a2\u6570",id:"uniform-\u95a2\u6570",level:3},{value:"<code>randrange</code> \u95a2\u6570",id:"randrange-\u95a2\u6570",level:3},{value:"<code>randint</code> \u95a2\u6570",id:"randint-\u95a2\u6570",level:3},{value:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u30b3\u30a4\u30f3\u6295\u3052",id:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u30b3\u30a4\u30f3\u6295\u3052",level:2},{value:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u5186\u5468\u7387",id:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u5186\u5468\u7387",level:2},{value:"\u7df4\u7fd2\u554f\u984c",id:"\u7df4\u7fd2\u554f\u984c",level:2}],o={toc:c};function k(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"},"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u306b\u3064\u3044\u3066\u5b66\u3093\u3067\u3044\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3068\u306f"},"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3068\u306f"),(0,n.kt)("p",null,"\u4e16\u306e\u4e2d\u306e\u73fe\u8c61\u306f\u8907\u96d1\u306a\u3082\u306e\u304c\u591a\u3044\u305f\u3081\u3001\u591a\u304f\u306e\u554f\u984c\u306f\u5b9f\u969b\u306b\u53b3\u5bc6\u306a\u89e3\u3092\u6c42\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u3092\u7528\u3044\u3066\u8fd1\u4f3c\u89e3\u3092\u6c42\u3081\u308b\u5fc5\u8981\u304c\u51fa\u3066\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u8fd1\u4f3c\u89e3\u3092\u6c42\u3081\u308b\u65b9\u6cd5\u306f\u3044\u304f\u3064\u3082\u3042\u308a\u307e\u3059\u304c\u305d\u306e\u4e00\u3064\u306b\u3001\u5927\u91cf\u306e\u30e9\u30f3\u30c0\u30e0\u306a\u5024\u3092\u4e0e\u3048\u3066\u305d\u308c\u3067\u5b9f\u969b\u306b\u8a08\u7b97\u3057\u3066\u307f\u3066\u305d\u306e\u7d50\u679c\u304b\u3089\u78ba\u7387\u3092\u6c42\u3081\u308b\u3068\u3044\u3046\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u3059\u3002"),(0,n.kt)("h2",{id:"\u4e71\u6570"},"\u4e71\u6570"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u3001Python \u3067\u4e71\u6570\u3092\u6271\u3046\u65b9\u6cd5\u3092\u5b66\u3093\u3067\u3044\u304d\u307e\u3057\u3087\u3046\u3002\u305f\u3060\u3057\u3001\u3053\u3053\u3067\u6271\u3046\u4e71\u6570\u306f\u771f\u4e71\u6570\u3067\u306f\u306a\u304f\u64ec\u4f3c\u4e71\u6570\u3067\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,n.kt)("h3",{id:"random-\u95a2\u6570"},(0,n.kt)("inlineCode",{parentName:"h3"},"random")," \u95a2\u6570"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"random")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306e ",(0,n.kt)("inlineCode",{parentName:"p"},"random")," \u95a2\u6570\u306f\u30010 \u4ee5\u4e0a 1 \u672a\u6e80\u306e\u4e00\u69d8\u4e71\u6570\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)(m.Z,{path:"/monte-carlo/random.ipynb",mdxType:"ViewSource"}),(0,n.kt)("h3",{id:"uniform-\u95a2\u6570"},(0,n.kt)("inlineCode",{parentName:"h3"},"uniform")," \u95a2\u6570"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"random")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306e ",(0,n.kt)("inlineCode",{parentName:"p"},"uniform")," \u95a2\u6570\u306f\u3001\u4efb\u610f\u306e\u7bc4\u56f2\u306e\u4e00\u69d8\u4e71\u6570\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"uniform(a, b)")," \u3068\u3059\u308b\u3068\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"a")," \u4ee5\u4e0a ",(0,n.kt)("inlineCode",{parentName:"p"},"b")," \u4ee5\u4e0b\u306e\u7bc4\u56f2\u306e\u4e00\u69d8\u4e71\u6570\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)(m.Z,{path:"/monte-carlo/uniform.ipynb",mdxType:"ViewSource"}),(0,n.kt)("h3",{id:"randrange-\u95a2\u6570"},(0,n.kt)("inlineCode",{parentName:"h3"},"randrange")," \u95a2\u6570"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"random")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306e ",(0,n.kt)("inlineCode",{parentName:"p"},"randrange")," \u95a2\u6570\u306f\u3001\u4efb\u610f\u306e\u7bc4\u56f2\u306e\u30e9\u30f3\u30c0\u30e0\u306a\u6574\u6570\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"randrange(start, stop, step)")," \u3068\u3059\u308b\u3068\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"start")," \u4ee5\u4e0a ",(0,n.kt)("inlineCode",{parentName:"p"},"stop")," \u672a\u6e80\u306e\u7bc4\u56f2\u3067\u30e9\u30f3\u30c0\u30e0\u306a\u6574\u6570\u3092\u751f\u6210\u3057\u307e\u3059\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"step")," \u3067\u30b9\u30c6\u30c3\u30d7\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(m.Z,{path:"/monte-carlo/randrange.ipynb",mdxType:"ViewSource"}),(0,n.kt)("h3",{id:"randint-\u95a2\u6570"},(0,n.kt)("inlineCode",{parentName:"h3"},"randint")," \u95a2\u6570"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"random")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306e ",(0,n.kt)("inlineCode",{parentName:"p"},"randint")," \u95a2\u6570\u306f\u3001\u4efb\u610f\u306e\u7bc4\u56f2\u306e\u30e9\u30f3\u30c0\u30e0\u306a\u6574\u6570\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"randint(a, b)")," \u3068\u3059\u308b\u3068\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"a")," \u4ee5\u4e0a ",(0,n.kt)("inlineCode",{parentName:"p"},"b")," \u4ee5\u4e0b\u306e\u7bc4\u56f2\u306e\u30e9\u30f3\u30c0\u30e0\u306a\u6574\u6570\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)(m.Z,{path:"/monte-carlo/randint.ipynb",mdxType:"ViewSource"}),(0,n.kt)("h2",{id:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u30b3\u30a4\u30f3\u6295\u3052"},"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u30b3\u30a4\u30f3\u6295\u3052"),(0,n.kt)("p",null,"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3092\u7528\u3044\u3066\u30b3\u30a4\u30f3\u6295\u3052\u3067\u8868\u304c\u51fa\u308b\u78ba\u7387\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u8868\u304c\u51fa\u308b\u78ba\u7387\u304c ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"2"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1}{2}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," \u306a\u306e\u306f\u3001\u3059\u3067\u306b\u77e5\u3063\u3066\u3044\u308b\u3068\u601d\u3044\u307e\u3059\u304c\u3001\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u306e\u7df4\u7fd2\u3068\u3057\u3066\u307f\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(m.Z,{path:"/monte-carlo/coin_toss.ipynb",mdxType:"ViewSource"}),(0,n.kt)("p",null,"\u5b9f\u884c\u56de\u6570\u3092\u5897\u3084\u305b\u3070\u3001\u7cbe\u5ea6\u304c\u3088\u304f\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u5186\u5468\u7387"},"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u5186\u5468\u7387"),(0,n.kt)("p",null,"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3067\u5186\u5468\u7387\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u6b21\u306e\u3088\u3046\u306b\u7b2c\u4e00\u8c61\u9650\u4e0a\u3067\u534a\u5f84\u304c 1 \u306e\u6247\u5f62\u3092\u8003\u3048\u307e\u3059\u3002\n",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"x")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," \u5ea7\u6a19\u3001",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"y")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," \u5ea7\u6a19\u304c\u3068\u3082\u306b ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[0,1)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"["),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u306e\u7bc4\u56f2\u306b\u30e9\u30f3\u30c0\u30e0\u306b\u70b9\u3092\u30d7\u30ed\u30c3\u30c8\u3057\u307e\u3057\u3087\u3046\u3002\n\u6247\u5f62\u4e0a\u306e\u9762\u7a4d\u306f\u3001",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"2")),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"r"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mfrac"},"\u03c0"),(0,n.kt)("mn",{parentName:"mfrac"},"2"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1}{2} r^2 \\frac{\\pi}{2}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6954em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03c0"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," \u306a\u306e\u3067\u3001\u6247\u5f62\u306e\u4e0a\u306b\u70b9\u304c\u4e57\u308b\u78ba\u7387\u306f\u3001",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"2")),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"r"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mfrac"},"\u03c0"),(0,n.kt)("mn",{parentName:"mfrac"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"4")),(0,n.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1}{2} r^2 \\frac{\\pi}{2} = \\frac{1}{4}\\pi")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6954em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03c0"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"4")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0")))))," \u3068\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u308c\u3092\u4f7f\u3063\u3066\u3001\u5186\u5468\u7387\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(m.Z,{path:"/monte-carlo/calc_pi.ipynb",mdxType:"ViewSource"}),(0,n.kt)("h2",{id:"\u7df4\u7fd2\u554f\u984c"},"\u7df4\u7fd2\u554f\u984c"),(0,n.kt)("p",null,"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3092\u7528\u3044\u3066\u3001\u30b5\u30a4\u30b3\u30ed\u6295\u3052\u3067 1 \u304c\u51fa\u308b\u78ba\u7387\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(p.Z,{mdxType:"Answer"},(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"6")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"0.166"),(0,n.kt)("mo",{parentName:"mrow"},"\u22ef")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1}{6} = 0.166\\cdots")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"6")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0.166"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},"\u22ef")))))," \u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002"),(0,n.kt)(m.Z,{path:"/monte-carlo/dice.ipynb",mdxType:"ViewSource"})))}k.isMDXComponent=!0}}]);
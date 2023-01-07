"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[1763,7918],{4765:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),s=a(4673);function l(e){let{children:t}=e;return n.createElement(s.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},t)}},5140:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),s=a(9531),l=a(9072),r=a(9630),m=a(3477),p=a(6126),i=a(4005),o=a(2288),c=a(7440),u=a(1849),d=a(3018),k=a(8034);function h(e,t,a){const n=function(e,t,a){let n=0;for(let s=t-1;s<=t+1;s++)for(let t=a-1;t<=a+1;t++)0<=s&&s<e.length&&0<=t&&t<e[0].length&&(n+=Number(e[s][t]));return n-Number(e[t][a])}(e,t,a);return e[t][a]&&2===n||3===n}function g(e){let{data:t=Array(100).fill().map((()=>Array(100).fill(!1)))}=e;const[a,g]=(0,n.useState)(t),[b,f]=(0,n.useState)(4),[v,w]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=setInterval((()=>{v&&g(function(e){const t=e.map((e=>e.map((e=>e))));for(let a=0;a<e.length;a++)for(let n=0;n<e[0].length;n++)t[a][n]=h(e,a,n);return t}(a))}),4e3/b);return()=>{clearInterval(e)}}),[v,a]),n.createElement(n.Fragment,null,n.createElement(p.d$,{initialScale:7},(e=>{let{zoomIn:t,zoomOut:l,resetTransform:r}=e;return n.createElement(n.Fragment,null,n.createElement(s.Z,{onClick:()=>{t()}},n.createElement(i.Z,null)),n.createElement(s.Z,{onClick:()=>{l()}},n.createElement(o.Z,null)),n.createElement(s.Z,{onClick:()=>{r()}},n.createElement(c.Z,null)),n.createElement(p.Uv,null,n.createElement(N,{board:a,setBoard:g})))})),n.createElement(l.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(l.ZP,{item:!0},n.createElement(s.Z,{onClick:()=>{w(!v)}},v?n.createElement(k.Z,null):n.createElement(d.Z,null))),n.createElement(l.ZP,{item:!0},n.createElement(s.Z,{onClick:()=>{g(t)}},n.createElement(u.Z,null))),n.createElement(l.ZP,{item:!0},n.createElement(r.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(l.ZP,{item:!0,xs:!0},n.createElement(m.ZP,{value:b,onChange:e=>{f(e.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function N(e){let{board:t,setBoard:a}=e;const s=52*t.length+2,l=52*t[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${s} ${l}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:s,height:l,fill:"#808080"}),t.map(((e,s)=>e.map(((e,l)=>n.createElement("rect",{key:`${s},${l}`,x:52*l+2,y:52*s+2,width:"50",height:"50",fill:e?"#000000":"#ffffff",onClick:()=>{const e=[...t];e[s][l]=!t[s][l],a(e)}}))))))))}},1089:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7294),s=a(7174),l=a.n(s),r=a(5614),m=a(5993);const p="root_frVT";function i(e){let{path:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:p},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const o="iframe-wrapper_kRL9";function c(e,t){const a=new(l())({newline:!0});switch(e){case"text":return a.toHtml(t);case"html":return t;case"png":return`<img src="data:image/png;base64,${t}"></img>`;case"js":return`<script>${t}<\/script>`}}function u(e){const t=[];let a="normal";for(const n of e)switch(n.output_type){case"stream":t.push(c("text",n.text.join("")));break;case"execute_result":{const e=[];null!=n.data["text/plain"]&&e.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(c("html",n.data["text/html"].join(""))),t.push(e.join(""));break}case"error":t.push(c("text",n.traceback.join(""))),a="error";break;case"display_data":{const e=[];null!=n.data["text/plain"]&&e.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(c("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&e.push(c("js",n.data["application/javascript"])),null!=n.data["image/png"]&&e.push(c("png",n.data["image/png"])),t.push(e.join(""));break}}return{result:t.join(""),cellType:a}}function d(e){let{children:t,cellColor:a,title:s}=e;return n.createElement("div",{className:o,style:{backgroundColor:a}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:t,onLoad:e=>{const t=e.target;t.height=t.contentDocument.documentElement.scrollHeight+"px"},title:s}))}function k(e){let{path:t,noOutput:a=!1}=e;const[s,l]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(t).then((e=>e.json())).then((e=>{l(function(e){const t=[];for(const a of e.cells)switch(a.cell_type){case"markdown":t.push({cell_type:"markdown",source:0===a.source.length?null:a.source.join("")});break;case"code":{const{result:e,cellType:n}=u(a.outputs);t.push({cell_type:"code",source:0===a.source.length?null:a.source.join(""),output:0===a.outputs.length?null:e,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return t}(e))}))}),[]),n.createElement(n.Fragment,null,s.map(((e,t)=>n.createElement(n.Fragment,{key:t},"markdown"===e.cell_type&&null!=e.source&&n.createElement(d,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,m.Z)(e.source)),"code"===e.cell_type&&n.createElement(n.Fragment,null,null!=e.source&&n.createElement(r.Z,{language:"python"},e.source),!a&&null!=e.output&&n.createElement(d,{cellColor:e.cellColor,title:"Code Output"},e.output))))),n.createElement(i,{path:t}))}},6922:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),s=a(5140);const l={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(s.Z,null)))}}},3564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>m,metadata:()=>i,toc:()=>c});var n=a(7462),s=(a(7294),a(3905)),l=a(1089),r=a(4765);const m={sidebar_position:6},p="\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",i={unversionedId:"02advanced/08sort/index",id:"02advanced/08sort/index",title:"\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",description:"\u30bd\u30fc\u30c8\u3068\u306f",source:"@site/docs/02advanced/08sort/index.mdx",sourceDirName:"02advanced/08sort",slug:"/02advanced/08sort/",permalink:"/docs/02advanced/08sort/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/02advanced/08sort/index.mdx",tags:[],version:"current",lastUpdatedAt:1673074957,formattedLastUpdatedAt:"2023\u5e741\u67087\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u63a2\u7d22",permalink:"/docs/02advanced/07search-algorithm/"},next:{title:"\u4ed8\u9332",permalink:"/docs/03extras/"}},o={},c=[{value:"\u30bd\u30fc\u30c8\u3068\u306f",id:"\u30bd\u30fc\u30c8\u3068\u306f",level:2},{value:"\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0-1",level:2},{value:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8",id:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8",level:2},{value:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u3068\u306f",id:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u3068\u306f",level:3},{value:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",level:3},{value:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0",level:3},{value:"\u7df4\u7fd2\u554f\u984c",id:"\u7df4\u7fd2\u554f\u984c",level:3},{value:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8",id:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8",level:2},{value:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u3068\u306f",id:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u3068\u306f",level:3},{value:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",level:3},{value:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0",level:3},{value:"\u7df4\u7fd2\u554f\u984c",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u30bd\u30fc\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea",id:"\u30bd\u30fc\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea",level:2},{value:"<code>sort</code>",id:"sort",level:3},{value:"<code>sorted</code>",id:"sorted",level:3}],u={toc:c};function d(e){let{components:t,...m}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,m,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},"\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,s.kt)("h2",{id:"\u30bd\u30fc\u30c8\u3068\u306f"},"\u30bd\u30fc\u30c8\u3068\u306f"),(0,s.kt)("p",null,"\u4eca\u56de\u306f\u3001\u30bd\u30fc\u30c8\u306b\u3064\u3044\u3066\u898b\u3066\u3044\u304d\u307e\u3059\u3002"),(0,s.kt)("p",null,"\u30bd\u30fc\u30c8\u306f\u3001\u30c7\u30fc\u30bf\u3092\u9806\u756a\u306b\u4e26\u3079\u308b\u3053\u3068\u3067\u3059\u3002\u65e5\u672c\u8a9e\u3067\u306f\u3001\u6574\u5217\u3001\u4e26\u3079\u66ff\u3048\u306a\u3069\u3068\u547c\u3070\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u6b21\u306e\u3088\u3046\u306b\u6570\u5b57\u3092\u9806\u756a\u306b\u4e26\u3079\u66ff\u3048\u305f\u308a\u3001\u540d\u524d\u3092\u540d\u524d\u306e\u9806\u306b\u4e26\u3073\u66ff\u3048\u308b\u3053\u3068\u3082\u30bd\u30fc\u30c8\u3067\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ex1",src:a(7729).Z,width:"501",height:"151"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ex2",src:a(3125).Z,width:"561",height:"152"})),(0,s.kt)("h2",{id:"\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0-1"},"\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,s.kt)("p",null,"\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u6700\u3082\u5358\u7d14\u306a\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u3042\u308b\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u3092\u898b\u305f\u5f8c\u306b\u3001\u3088\u308a\u52b9\u7387\u7684\u306a\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u3092\u898b\u3066\u3044\u304d\u307e\u3059\u3002"),(0,s.kt)("h2",{id:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"},"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"),(0,s.kt)("h3",{id:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u3068\u306f"},"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u3068\u306f"),(0,s.kt)("p",null,"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306f\u3001\u5358\u7d14\u3067\u5b9f\u88c5\u3082\u975e\u5e38\u306b\u7c21\u5358\u306a\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u52b9\u7387\u306f\u975e\u5e38\u306b\u60aa\u304f\u3001\u30aa\u30fc\u30c0\u30fc\u306f\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u3067\u3059\u3002"),(0,s.kt)("h3",{id:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,s.kt)("p",null,"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306f\u3001\u96a3\u308a\u5408\u3046\u8981\u7d20\u3092\u6bd4\u8f03\u3057\u306a\u304c\u3089\u30bd\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,s.kt)("p",null,"\u306f\u3058\u3081\u306f\u3001\u4e00\u756a\u76ee\u306e\u8981\u7d20\u3068\u4e8c\u756a\u76ee\u306e\u8981\u7d20\u3092\u6bd4\u8f03\u3057\u3066\u3001\u5165\u308c\u66ff\u3048\u307e\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"bubble sort step1",src:a(564).Z,width:"202",height:"152"})),(0,s.kt)("p",null,"\u6b21\u306f\u3001\u4e00\u756a\u76ee\u306e\u8981\u7d20\u3068\u4e09\u756a\u76ee\u306e\u8981\u7d20\u3092\u6bd4\u8f03\u3057\u3066\u3001\u5165\u308c\u66ff\u3048\u307e\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"bubble sort step2",src:a(8171).Z,width:"202",height:"152"})),(0,s.kt)("p",null,"\u4e00\u756a\u76ee\u306e\u8981\u7d20\u3068\u56db\u756a\u76ee\u306e\u8981\u7d20\u3092\u6bd4\u8f03\u3057\u3066\u3001\u5165\u308c\u66ff\u3048\u307e\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"bubble sort step3",src:a(7882).Z,width:"201",height:"151"})),(0,s.kt)("p",null,"\u4e8c\u756a\u76ee\u306e\u8981\u7d20\u3068\u4e09\u756a\u76ee\u306e\u8981\u7d20\u3092\u6bd4\u8f03\u3057\u3066\u3001\u5165\u308c\u66ff\u3048\u307e\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"bubble sort step4",src:a(2794).Z,width:"201",height:"151"})),(0,s.kt)("p",null,"\u4e8c\u756a\u76ee\u306e\u8981\u7d20\u3068\u56db\u756a\u76ee\u306e\u8981\u7d20\u3092\u6bd4\u8f03\u3057\u3066\u3001\u5165\u308c\u66ff\u3048\u307e\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"bubble sort step5",src:a(4669).Z,width:"201",height:"151"})),(0,s.kt)("p",null,"\u4e09\u756a\u76ee\u306e\u8981\u7d20\u3068\u56db\u756a\u76ee\u306e\u8981\u7d20\u3092\u6bd4\u8f03\u3057\u3066\u3001\u5165\u308c\u66ff\u3048\u307e\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"bubble sort step6",src:a(2537).Z,width:"201",height:"151"})),(0,s.kt)("p",null,"\u3053\u308c\u3092\u4e00\u822c\u5316\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n\u306f\u3058\u3081\u306f\u3001\u4e00\u756a\u76ee\u306e\u8981\u7d20\u3068\u4e8c\u756a\u76ee\u306e\u8981\u7d20\u3092\u6bd4\u8f03\u3057\u3066\u5165\u308c\u66ff\u3048\u307e\u3059\u3002\u3064\u304e\u306f\u4e00\u756a\u76ee\u3068\u4e09\u756a\u76ee\u3001\u3055\u3089\u306b\u3064\u304e\u306f\u4e00\u756a\u76ee\u3068\u56db\u756a\u76ee\u3001\u2026\u3001\u4e00\u756a\u76ee\u3068 n \u756a\u76ee\u3068\u6bd4\u8f03\u3057\u3066\u5165\u308c\u66ff\u3048\u3066\u3044\u304d\u307e\u3059\u3002\n\u305d\u306e\u5f8c\u3001\u4e8c\u756a\u76ee\u3068\u4e09\u756a\u76ee\u3001\u4e8c\u756a\u76ee\u3068\u56db\u756a\u76ee\u3001\u2026\u3001\u4e8c\u756a\u76ee\u3068 n \u756a\u76ee\u3068\u5165\u308c\u66ff\u3048\u3066\u3044\u304d\u307e\u3059\u3002\u3053\u308c\u3092 n-1 \u756a\u76ee\u3068 n \u756a\u76ee\u307e\u3067\u7e70\u308a\u8fd4\u3057\u3066\u3044\u3051\u3070\u3001\u30bd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)("h3",{id:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0"},"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,s.kt)("p",null,"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u5b9f\u88c5\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u975e\u5e38\u306b\u7c21\u5358\u3067\u3059\u306d\u3002"),(0,s.kt)(l.Z,{path:"/sort/bubble_sort.ipynb",mdxType:"ViewSource"}),(0,s.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c"},"\u7df4\u7fd2\u554f\u984c"),(0,s.kt)("p",null,"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u3092\u7528\u3044\u3066\u3001\u30c7\u30fc\u30bf\u3092\u964d\u9806\u306b\u4e26\u3073\u66ff\u3048\u308b\u95a2\u6570\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(r.Z,{mdxType:"Answer"},(0,s.kt)(l.Z,{path:"/sort/bubble_sort_reverse.ipynb",mdxType:"ViewSource"})),(0,s.kt)("h2",{id:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8"},"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8"),(0,s.kt)("h3",{id:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u3068\u306f"},"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u3068\u306f"),(0,s.kt)("p",null,"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306f\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u81ea\u4f53\u306f\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u3088\u308a\u8907\u96d1\u3067\u3059\u304c\u975e\u5e38\u306b\u52b9\u7387\u306e\u826f\u3044\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u3059\u3002\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30aa\u30fc\u30c0\u30fc\u304c\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u3067\u3042\u3063\u305f\u306e\u306b\u5bfe\u3057\u3066\u3001\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30aa\u30fc\u30c0\u30fc\u306f ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"log"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n\\log n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u3067\u3059\u3002\u4f75\u5408\u6574\u5217\u6cd5\u3068\u547c\u3070\u308c\u308b\u3053\u3068\u3082\u3042\u308b\u3088\u3046\u3067\u3059\u3002"),(0,s.kt)("h3",{id:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,s.kt)("p",null,"\u57fa\u672c\u7684\u306a\u6d41\u308c\u3068\u3057\u3066\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u30c7\u30fc\u30bf\u5217\u3092\u4e8c\u5206\u5272\u3059\u308b\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u305d\u308c\u305e\u308c\u306e\u30c7\u30fc\u30bf\u5217\u3092\u30bd\u30fc\u30c8\u3059\u308b\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u30bd\u30fc\u30c8\u3055\u308c\u305f 2 \u3064\u306e\u30c7\u30fc\u30bf\u3092\u30de\u30fc\u30b8\u3059\u308b\u3002")),(0,s.kt)("p",null,"\u307e\u305a\u306f\u3001\u30c7\u30fc\u30bf\u5217\u3092\u4e8c\u5206\u5272\u3059\u308b\u3053\u3068\u3092\u7e70\u308a\u8fd4\u3057\u307e\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"merge sort step1",src:a(9619).Z,width:"262",height:"252"})),(0,s.kt)("p",null,"\u6b21\u306b\u3001\u5206\u5272\u3057\u305f\u8981\u7d20\u3092\u4e26\u3079\u66ff\u3048\u306a\u304c\u3089\u623b\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"merge sort step2",src:a(9284).Z,width:"261",height:"251"})),(0,s.kt)("h3",{id:"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0"},"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,s.kt)("p",null,"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)("p",null,"\u30c7\u30fc\u30bf\u3092\u4e8c\u5206\u5272\u3057\u3066\u305d\u308c\u305e\u308c\u306e\u30c7\u30fc\u30bf\u5217\u3092\u30bd\u30fc\u30c8\u3057\u3066\u3044\u304f\u306e\u306f\u3001\u518d\u5e30\u3092\u4f7f\u3048\u3070\u826f\u3055\u305d\u3046\u3067\u3059\u3002\u914d\u5217\u306e\u9577\u3055\u304c 1 \u4ee5\u4e0b\u306b\u306a\u3063\u305f\u6642\u306b\u306f\u3001\u305d\u306e\u30c7\u30fc\u30bf\u3092\u305d\u306e\u307e\u307e\u8fd4\u305b\u3070\u826f\u3055\u305d\u3046\u3067\u3059\u3002"),(0,s.kt)("p",null,"\u30de\u30fc\u30b8\u3059\u308b\u51e6\u7406\u306f\u3069\u3046\u3059\u308c\u3070\u826f\u3044\u3067\u3057\u3087\u3046\u3002\u3053\u308c\u3082\u518d\u5e30\u3092\u4f7f\u3046\u3068\u3001\u7c21\u5358\u306b\u3067\u304d\u307e\u3059\u3002\u4e8c\u3064\u306e\u30c7\u30fc\u30bf\u306f\u305d\u308c\u305e\u308c\u30bd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u4e8c\u3064\u306e\u306f\u3058\u3081\u306e\u30c7\u30fc\u30bf\u3092\u6bd4\u8f03\u3057\u3066\u5c0f\u3055\u3044\u65b9\u306e\u6570\u3092\u53d6\u308a\u51fa\u3057\u3001\u6b8b\u308a\u3092\u518d\u5e30\u7684\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002"),(0,s.kt)("p",null,"\u3053\u308c\u3092\u57fa\u306b\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,s.kt)(l.Z,{path:"/sort/merge_sort.ipynb",mdxType:"ViewSource"}),(0,s.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c"),(0,s.kt)("p",null,"\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u3092\u7528\u3044\u3066\u3001\u30c7\u30fc\u30bf\u3092\u964d\u9806\u306b\u4e26\u3073\u66ff\u3048\u308b\u95a2\u6570\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(r.Z,{mdxType:"Answer"},(0,s.kt)(l.Z,{path:"/sort/bubble_sort_reverse.ipynb",mdxType:"ViewSource"})),(0,s.kt)("h2",{id:"\u30bd\u30fc\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea"},"\u30bd\u30fc\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,s.kt)("p",null,"Python \u306b\u306f\u30bd\u30fc\u30c8\u3092\u3059\u308b\u95a2\u6570\u304c\u5099\u308f\u3063\u3066\u3044\u307e\u3059\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"sort")," \u3068 ",(0,s.kt)("inlineCode",{parentName:"p"},"sorted")," \u304c\u3042\u308a\u307e\u3059\u3002"),(0,s.kt)("h3",{id:"sort"},(0,s.kt)("inlineCode",{parentName:"h3"},"sort")),(0,s.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u914d\u5217\u306e\u30c7\u30fc\u30bf\u3092\u30bd\u30fc\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)("h3",{id:"sorted"},(0,s.kt)("inlineCode",{parentName:"h3"},"sorted")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sorted")," \u95a2\u6570\u306f\u3001\u8981\u7d20\u3092\u4e26\u3073\u66ff\u3048\u305f\u914d\u5217\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u5b9f\u306f\u3001\u3053\u3053\u3067\u7d39\u4ecb\u3057\u305f\u4ee5\u5916\u306b\u3082\u305f\u304f\u3055\u3093\u306e\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u304c\u3042\u308a\u307e\u3059\u3002"),(0,s.kt)("p",{parentName:"admonition"},"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u3001\u30de\u30fc\u30b8\u30bd\u30fc\u30c8\u306e\u4ed6\u306b\u3001\u30af\u30a4\u30c3\u30af\u30bd\u30fc\u30c8\u3084\u9078\u629e\u30bd\u30fc\u30c8\u3001\u633f\u5165\u30bd\u30fc\u30c8\u3001\u30d2\u30fc\u30d7\u30bd\u30fc\u30c8\u3001\u30d0\u30b1\u30c3\u30c8\u30bd\u30fc\u30c8\u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002"),(0,s.kt)("p",{parentName:"admonition"},"\u4ed6\u306b\u3082\u3001\u975e\u5e38\u306b\u52b9\u7387\u306e\u60aa\u3044\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3068\u3057\u3066\u3001\u30dc\u30b4\u30bd\u30fc\u30c8\u304c\u77e5\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u30dc\u30b4\u30bd\u30fc\u30c8\u306f\u3001\u30bd\u30fc\u30c8\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u914d\u5217\u306e\u4e2d\u8eab\u3092\u30e9\u30f3\u30c0\u30e0\u306b\u30b7\u30e3\u30c3\u30d5\u30eb\u3059\u308b\u3053\u3068\u3092\u7e70\u308a\u8fd4\u3059\u3068\u3044\u3046\u3082\u306e\u3067\u3059(\u7b11)")))}d.isMDXComponent=!0},564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bubble-sort1.drawio-6ecae02e312677f72c0793b3a1024461.svg"},8171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bubble-sort2.drawio-411bd5e3434dd37e9db99ba3ff44c770.svg"},7882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bubble-sort3.drawio-8a0d27ad2d7acab86fa74d1d78824d53.svg"},2794:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bubble-sort4.drawio-3bfdfaee23429fd574c967a9a20aff86.svg"},4669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bubble-sort5.drawio-448434d296e4dbcfcf91768e2d1d33e2.svg"},2537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bubble-sort6.drawio-afedd8385699e558e742ef3922924927.svg"},9619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/merge-sort1.drawio-2e60228ffcc4019b9327354b43fa66d2.svg"},9284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/merge-sort2.drawio-9b30e83d6fcb519f80dad89178514185.svg"},7729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sort-ex1.drawio-808749de9af68806885e13292257e018.svg"},3125:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sort-ex2.drawio-2424af7fbb193064aec642bdbb261339.svg"}}]);
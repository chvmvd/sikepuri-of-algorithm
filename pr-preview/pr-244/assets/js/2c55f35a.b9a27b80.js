"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[1145],{52991:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(67294),r=a(86010),l=a(53438),s=a(39960),u=a(13919),c=a(95999);const i="cardContainer_fWXF",o="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:a}=e;return n.createElement(s.Z,{href:t,className:(0,r.Z)("card padding--lg",i)},a)}function h(e){let{href:t,icon:a,title:l,description:s}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",o),title:l},a," ",l),s&&n.createElement("p",{className:(0,r.Z)("text--truncate",d),title:s},s))}function p(e){let{item:t}=e;const a=(0,l.Wl)(t);return a?n.createElement(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,u.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,l.xz)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:a,title:t.label,description:null==r?void 0:r.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const a=(0,l.jA)();return n.createElement(E,{items:a.items,className:t})}function E(e){const{items:t,className:a}=e;if(!t)return n.createElement(b,e);const s=(0,l.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),u=a(16550),c=a(91980),i=a(67392),o=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,i]=p({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,o.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=c??d;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var g=a(72389);const b="tabList__CuJ",E="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:u,selectValue:c,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=o.indexOf(t),n=i[a].value;n!==u&&(d(t),c(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>o.push(e),onKeyDown:h,onClick:m},s,{className:(0,l.Z)("tabs__item",E,null==s?void 0:s.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(S,(0,n.Z)({key:String(t)},e))}},26811:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(86010);const l="browserWindow_my1Q",s="browserWindowHeader_jXSR",u="buttons_uHc7",c="browserWindowAddressBar_Pd8y",i="dot_giz1",o="browserWindowMenuIcon_Vhuh",d="bar_rrRL",m="browserWindowBody_Idgs";function h(e){let{children:t,minHeight:a,height:h,url:p="http://localhost:3000"}=e;return n.createElement("div",{className:l,style:{minHeight:a,height:h}},n.createElement("div",{className:s},n.createElement("div",{className:u},n.createElement("span",{className:i,style:{background:"#f25f58"}}),n.createElement("span",{className:i,style:{background:"#fbbe3c"}}),n.createElement("span",{className:i,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(c,"text--truncate")},p),n.createElement("div",{className:o},n.createElement("div",null,n.createElement("span",{className:d}),n.createElement("span",{className:d}),n.createElement("span",{className:d})))),n.createElement("div",{className:m,style:{height:"90%"}},t))}function p(e){let{children:t,height:a}=e;return n.createElement(n.Fragment,null,n.createElement(h,{height:void 0!==a&&a,minHeight:void 0===a&&"200px"},n.createElement("iframe",{width:"100%",height:"100%",srcDoc:t,title:"Live Code",onLoad:e=>{setInterval((e=>{if(null==a){const t=e.target;t.height="100%",t.height=t.contentDocument.documentElement.scrollHeight+"px"}}),3e3,e)}})))}},24701:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(67294),r=a(74866),l=a(85162),s=a(19604),u=a(26811),c=a(35993),i=a(37403);const o="playgroundContainer_dc2C",d="playgroundHeader_gfqA",m="playgroundEditor_bEFE",h="playgroundPreview_I95C";function p(e){let{defaultHTML:t,setHTML:a,defaultCSS:u,setCSS:c,defaultJavaScript:i,setJS:o}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,{groupId:"editor"},n.createElement(l.Z,{value:"html",label:"HTML"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),n.createElement(l.Z,{value:"css",label:"CSS"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"css",defaultValue:u,onChange:e=>{c(e)}})),n.createElement(l.Z,{value:"js",label:"JavaScript"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"javascript",defaultValue:i,onChange:e=>{o(e)}}))))}function f(e){let{defaultHTML:t,setHTML:a,defaultCSS:u,setCSS:c}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,{groupId:"editor"},n.createElement(l.Z,{value:"html",label:"HTML"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),n.createElement(l.Z,{value:"css",label:"CSS"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"css",defaultValue:u,onChange:e=>{c(e)}}))))}function g(e){let{defaultHTML:t,setHTML:a,defaultJavaScript:u,setJS:c}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,{groupId:"editor"},n.createElement(l.Z,{value:"html",label:"HTML"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),n.createElement(l.Z,{value:"js",label:"JavaScript"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"javascript",defaultValue:u,onChange:e=>{c(e)}}))))}function b(e){let{language:t,children:a,defaultCSS:r,defaultJavaScript:l}=e;const[b,E]=(0,n.useState)(a),[v,y]=(0,n.useState)(r),[S,w]=(0,n.useState)(l);return n.createElement(n.Fragment,null,n.createElement("div",{className:o},n.createElement("div",{className:d},"\u30e9\u30a4\u30d6\u30a8\u30c7\u30a3\u30bf\u30fc"),n.createElement("div",{className:m},"html-css-javascript"===t?n.createElement(p,{defaultHTML:a,setHTML:E,defaultCSS:r,setCSS:y,defaultJavaScript:l,setJS:w}):"html-css"===t?n.createElement(f,{defaultHTML:a,setHTML:E,defaultCSS:r,setCSS:y}):"html-javascript"===t?n.createElement(g,{defaultHTML:a,setHTML:E,defaultJavaScript:l,setJS:w}):n.createElement(s.ZP,{height:"400px",defaultLanguage:t,defaultValue:a,onChange:e=>{E(e)}})),n.createElement("div",{className:d},"\u7d50\u679c"),n.createElement("div",{className:h},n.createElement(u.Z,null,"html"===t?b:"markdown"===t?(0,c.Z)(b):"latex"===t?(0,i.Z)(b):"html-css"===t?`<style>${v}</style>${b}`:"html-javascript"===t?`${b}<script>${S}<\/script>`:`<style>${v}</style>${b}<script>${S}<\/script>`))))}},37403:(e,t,a)=>{function n(e){return'  <!DOCTYPE html>\n  <html lang="ja">\n    <head>\n      <meta charset="UTF-8" />\n      <script type="module">\n        import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs";\n        customElements.define("latex-js", LaTeXJSComponent);\n      <\/script>\n    </head>\n    <body>\n      <latex-js baseURL="https://cdn.jsdelivr.net/npm/latex.js/dist/">'+e+"      </latex-js>\n    </body>\n  </html>"}a.d(t,{Z:()=>n})},14328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=a(87462),r=(a(67294),a(3905)),l=a(52991);a(24701);const s={sidebar_position:4},u="\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9",c={unversionedId:"extras/website/index",id:"extras/website/index",title:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9",description:"\u3053\u3053\u3067\u306f\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9\u3092\u7d39\u4ecb\u3057\u3066\u304a\u304d\u307e\u3059\u3002",source:"@site/docs/07-extras/04-website/index.mdx",sourceDirName:"07-extras/04-website",slug:"/extras/website/",permalink:"/docs/extras/website/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/07-extras/04-website/index.mdx",tags:[],version:"current",lastUpdatedAt:1676768943,formattedLastUpdatedAt:"2023\u5e742\u670819\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Python \u306e\u74b0\u5883\u69cb\u7bc9",permalink:"/docs/extras/python/"},next:{title:"HTML \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9",permalink:"/docs/extras/website/html/"}},i={},o=[],d={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9"},"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9\u3092\u7d39\u4ecb\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"Web \u30b5\u30a4\u30c8\u306f\u3001HTML \u3092\u7528\u3044\u3066\u4f5c\u308b\u306e\u304c\u4e00\u822c\u7684\u3067\u3059\u3002\u307e\u305a\u306f\u3058\u3081\u306b HTML \u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"HTML \u3092\u4f7f\u3048\u3070\u5927\u62b5\u306e\u3082\u306e\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u8907\u96d1\u306a\u3082\u306e\u3092\u4f5c\u308b\u306e\u306f\u3042\u307e\u308a\u306b\u3082\u5927\u5909\u306a\u306e\u3067\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3067\u306f\u3088\u308a\u7c21\u5358\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u308b Docusaurus \u3092\u4f7f\u3044\u307e\u3057\u305f\u3002\u305d\u306e\u305f\u3081\u3001Docusaurus \u3092\u4f7f\u3063\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9\u306b\u3064\u3044\u3066\u305d\u306e\u5f8c\u89e3\u8aac\u3057\u307e\u3059\u3002HTML \u306b\u3064\u3044\u3066\u306e\u9805\u3068 Docusaurus \u306b\u3064\u3044\u3066\u306e\u9805\u306f\u72ec\u7acb\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u3067\u3001HTML \u306e\u9805\u306f\u3072\u3068\u307e\u305a\u8aad\u307f\u98db\u3070\u3057\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u4ee5\u964d\u306e\u624b\u9806\u306b\u6cbf\u3046\u3053\u3068\u3067\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3068\u5168\u304f\u540c\u3058\u3088\u3046\u306a\u3082\u306e\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5b9f\u306f\u3001\u3082\u3063\u3068\u7c21\u5358\u306b Web \u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u306f\u305f\u304f\u3055\u3093\u3042\u308a\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332\u3060\u3051\u3067\u3067\u304d\u305f\u308a\u3057\u307e\u3059\u304c\u3001\u305b\u3063\u304b\u304f\u306a\u306e\u3067 Web \u958b\u767a\u8005\u304c\u901a\u5e38\u884c\u3046\u65b9\u6cd5\u3067\u89e3\u8aac\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u305f\u3060\u30b7\u30b1\u30d7\u30ea\u3092\u4f5c\u308b\u76ee\u7684\u306a\u3089\u5c11\u3005\u56de\u308a\u9053\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u3001\u3053\u306e\u65b9\u6cd5\u3092\u4f7f\u3048\u3070\u3053\u306e\u5148\u4ed6\u306e\u8a00\u8a9e\u306e\u74b0\u5883\u69cb\u7bc9\u3092\u3057\u3088\u3046\u3068\u3059\u308b\u6642\u3084\u4ed6\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u4f7f\u304a\u3046\u3068\u3059\u308b\u6642\u306b\u30b3\u30de\u30f3\u30c9\u4e00\u3064\u3067\u3067\u304d\u305f\u308a\u3059\u308b\u306e\u3067\u3001\u3042\u3048\u3066\u3053\u306e\u65b9\u6cd5\u3092\u63a1\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b8c\u6210\u54c1\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("iframe",{width:"100%",height:"800px",style:{border:"1px solid black"},src:"https://docusaurus-sample.onrender.com/docs/intro"}),(0,r.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u5b9f\u969b\u306b Web \u30b5\u30a4\u30c8\u3092\u4f5c\u3063\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(l.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);
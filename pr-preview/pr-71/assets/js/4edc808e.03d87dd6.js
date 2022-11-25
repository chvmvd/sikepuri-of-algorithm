"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[4173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11788:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},p="Introduction to Algorithms",i={unversionedId:"index",id:"index",title:"Introduction to Algorithms",description:"\u3053\u308c\u306f\u30012022 \u5e74\u5ea6\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u5165\u9580\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u76ee\u6307\u3057\u3066\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f\u3002",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/index.mdx",tags:[],version:"current",lastUpdatedAt:1669364601,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Python",permalink:"/docs/01python/"}},l={},c=[{value:"\u66f4\u65b0\u5c65\u6b74",id:"\u66f4\u65b0\u5c65\u6b74",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-algorithms"},"Introduction to Algorithms"),(0,o.kt)("p",null,"\u3053\u308c\u306f\u30012022 \u5e74\u5ea6\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u5165\u9580\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u76ee\u6307\u3057\u3066\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"Python \u3084\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u307e\u3068\u3081\u3066\u3044\u3053\u3046\u304b\u306a\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}),(0,o.kt)("p",null,"\u4e0a\u306e\u3088\u3046\u306a\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30fc\u30c9\u3092 Google Colaboratory \u4e0a\u3067\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u8aa4\u690d\u3084\u8981\u671b\u306a\u3069\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001\u3069\u3093\u306a\u4e9b\u7d30\u306a\u3053\u3068\u3067\u3082\u4e0b\u8a18\u306e Google Form \u306a\u3069\u3067\u6c17\u8efd\u306b\u9023\u7d61\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u7279\u306b\u8aa4\u690d\u306a\u3069\u306f\u898b\u3064\u3051\u305f\u3089\u3001\u305c\u3072\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002(\u305d\u306e\u5834\u3067\u3059\u3050\u306b\u76f4\u305b\u308b\u3088\u3046\u306b\u3057\u305f\u306e\u3067)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/QrtQh7TLPPF6dGci7"},"\u8aa4\u690d\u306e\u8a02\u6b63\u3001\u611f\u60f3\u7b49\u5165\u529b\u30d5\u30a9\u30fc\u30e0")),(0,o.kt)("h2",{id:"\u66f4\u65b0\u5c65\u6b74"},"\u66f4\u65b0\u5c65\u6b74"),(0,o.kt)("p",null,"11/25 \u7df4\u7fd2\u554f\u984c\u306e\u9805\u3092\u57f7\u7b46 ",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/11practice/"},"\u7df4\u7fd2\u554f\u984c")),(0,o.kt)("p",null,"11/13 \u7b2c\u4e94\u9031\u306e\u5206\u3092\u57f7\u7b46 ",(0,o.kt)("a",{parentName:"p",href:"/docs/02advanced/01life-game/"},"\u30e9\u30a4\u30d5\u30b2\u30fc\u30e0")),(0,o.kt)("p",null,"11/6 \u7b2c\u56db\u9031\u306e\u5206\u3092\u57f7\u7b46 ",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/09multi-array/"},"\u591a\u6b21\u5143\u914d\u5217"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/10if/"},"\u6761\u4ef6\u5206\u5c90")),(0,o.kt)("p",null,"11/6 range \u95a2\u6570\u306b\u3064\u3044\u3066\u3092\u88dc\u8db3 ",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/08array/#%E5%95%8F%E9%A1%8C-1"},"\u3053\u306e\u4e0b")),(0,o.kt)("p",null,"10/30 \u7b2c\u4e09\u9031\u306e\u5206\u3092\u57f7\u7b46 ",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/07for/"},"\u7e70\u308a\u8fd4\u3057\u51e6\u7406"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/08array/"},"\u914d\u5217")),(0,o.kt)("p",null,"10/23 \u7b2c\u4e8c\u9031\u306e\u5206\u3092\u57f7\u7b46 ",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/05function/"},"\u95a2\u6570"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/06library/"},"\u30e9\u30a4\u30d6\u30e9\u30ea")),(0,o.kt)("p",null,"10/16 \u7df4\u7fd2\u554f\u984c\u3092\u3055\u3089\u306b\u8ffd\u52a0"),(0,o.kt)("p",null,"10/10 \u7df4\u7fd2\u554f\u984c\u3092\u8ffd\u52a0"),(0,o.kt)("p",null,"10/10 \u7b2c\u4e00\u5468\u306e\u5206\u3092\u57f7\u7b46 ",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/01google-colaboratory/"},"\u74b0\u5883\u69cb\u7bc9"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/02get-started/"},"\u306f\u3058\u3081\u3066\u306e Python"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/03expressions/"},"\u5f0f\u3068\u6f14\u7b97\u5b50"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/01python/04variables/"},"\u5909\u6570")))}u.isMDXComponent=!0}}]);
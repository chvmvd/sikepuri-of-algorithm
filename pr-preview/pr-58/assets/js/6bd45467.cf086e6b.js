"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[6713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),l=r(72389),s=r(67392),i=r(7094),c=r(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:r,block:l,defaultValue:p,values:m,groupId:f,className:v}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,s.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[x,O]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==x&&h.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,r=T.indexOf(t),n=h[r].value;n!==x&&(E(t),O(n),null!=f&&w(f,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:C,onClick:S},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===t})}),r??t)}))),r?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},14297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(65488),l=r(85162);const s=r.p+"assets/medias/install_vscode-02f65af5a6c2de514ec1aa135ffe6e9e.mov",i={sidebar_position:1},c="VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",u={unversionedId:"extras/1vscode/index",id:"extras/1vscode/index",title:"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",source:"@site/docs/extras/1vscode/index.mdx",sourceDirName:"extras/1vscode",slug:"/extras/1vscode/",permalink:"/docs/extras/1vscode/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/extras/1vscode/index.mdx",tags:[],version:"current",lastUpdatedAt:1667722566,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u304a\u307e\u3051",permalink:"/docs/extras/"},next:{title:"WSL \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08Windows \u306e\u307f\u5fc5\u8981\uff09",permalink:"/docs/extras/2wsl/"}},d={},p=[{value:"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"vscode-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:2}],m={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vscode-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,a.kt)("h2",{id:"vscode-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,a.kt)("p",null,"Visual Studio Code \u306f\u3001Microsoft \u304c\u958b\u767a\u3057\u3066\u3044\u308b\u30d5\u30ea\u30fc\u304b\u3064\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u3067\u3059\u3002\u69d8\u3005\u306a\u4fbf\u5229\u306a\u62e1\u5f35\u6a5f\u80fd\u304c\u3042\u308a\u3001\u591a\u304f\u306e\u958b\u767a\u8005\u306b\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u305d\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6b21\u306e\u52d5\u753b\u3092\u898b\u306a\u304c\u3089\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"win10",label:"Windows 10",mdxType:"TabItem"},(0,a.kt)("video",{src:s,controls:!0,width:"100%"})),(0,a.kt)(l.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"macOS\u3067\u3082\u3001Windows\u3068\u540c\u3058\u3088\u3046\u306b\u3059\u308c\u3070\u3067\u304d\u307e\u3059\u3002macOS\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u52d5\u753b\u3092\u64ae\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u2026\u3002\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3002")))}f.isMDXComponent=!0}}]);
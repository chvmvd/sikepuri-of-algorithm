"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[8240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),l=r(72389),i=r(67392),s=r(7094),d=r(12466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:r,block:l,defaultValue:p,values:m,groupId:f,className:v}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??b.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),k=(0,i.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:g}=(0,s.U)(),[S,x]=(0,n.useState)(w),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=f){const e=y[f];null!=e&&e!==S&&h.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,r=O.indexOf(t),a=h[r].value;a!==S&&(C(t),x(a),null!=f&&g(f,String(a)))},E=e=>{var t;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:T},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":S===t})}),r??t)}))),r?(0,n.cloneElement)(b.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,l.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},48443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var a=r(87462),n=(r(67294),r(3905)),o=r(65488),l=r(85162);const i=r.p+"assets/medias/install_vscode-02f65af5a6c2de514ec1aa135ffe6e9e.mov",s=r.p+"assets/medias/open_folder-55a2214c133a6ed5ef277d082755fbf9.mp4",d=r.p+"assets/medias/install_remote_wsl-d41758ec4182b30c80a5b5fa943dfba7.mov",u=r.p+"assets/medias/start_wsl-620ca0e3e28c78892a570cfe8729d98a.mov",c=r.p+"assets/medias/open_folder_wsl-3e08ef0f4172e71437388d60f09089d2.mov",p=r.p+"assets/medias/open_terminal-73735bd32665b18edfea8ce2efa2cd44.mp4",m={sidebar_position:2},f="Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",v={unversionedId:"03extras/02vscode/index",id:"03extras/02vscode/index",title:"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",source:"@site/docs/03extras/02vscode/index.mdx",sourceDirName:"03extras/02vscode",slug:"/03extras/02vscode/",permalink:"/docs/03extras/02vscode/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/03extras/02vscode/index.mdx",tags:[],version:"current",lastUpdatedAt:1669359623,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"WSL \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08Windows \u306e\u307f\u5fc5\u8981\uff09",permalink:"/docs/03extras/01wsl/"},next:{title:"Python \u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/docs/03extras/03python/"}},b={},h=[{value:"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"visual-studio-code-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:2},{value:"Remote WSL \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\uff08Windows \u306e\u307f\uff09",id:"remote-wsl-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5windows-\u306e\u307f",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9",level:2},{value:"WSL \u4e0a\u3067\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9\uff08Windows \u306e\u307f\uff09",id:"wsl-\u4e0a\u3067\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9windows-\u306e\u307f",level:2},{value:"\u30bf\u30fc\u30df\u30ca\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5",id:"\u30bf\u30fc\u30df\u30ca\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5",level:2}],k={toc:h};function w(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"visual-studio-code-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,n.kt)("h2",{id:"visual-studio-code-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,n.kt)("p",null,"Visual Studio Code \u306f\u3001Microsoft \u793e \u304c\u958b\u767a\u3057\u3066\u3044\u308b\u30d5\u30ea\u30fc\u304b\u3064\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306a\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u3067\u3059\u3002\u69d8\u3005\u306a\u4fbf\u5229\u306a\u62e1\u5f35\u6a5f\u80fd\u304c\u3042\u308a\u3001\u591a\u304f\u306e\u958b\u767a\u8005\u306b\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u6b21\u306e\u52d5\u753b\u3092\u898b\u306a\u304c\u3089\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"win10",label:"Windows 10",mdxType:"TabItem"},(0,n.kt)("video",{src:i,controls:!0,width:"100%"})),(0,n.kt)(l.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"macOS\u3067\u3082\u3001Windows\u3068\u540c\u3058\u3088\u3046\u306b\u3059\u308c\u3070\u3067\u304d\u307e\u3059\u3002macOS\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u52d5\u753b\u306f\u64ae\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u2026\u3002\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3002")),(0,n.kt)("h2",{id:"remote-wsl-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5windows-\u306e\u307f"},"Remote WSL \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\uff08Windows \u306e\u307f\uff09"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001VSCode \u3067 WSL \u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u7c21\u5358\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b Remote WSL \u62e1\u5f35\u6a5f\u80fd\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/03extras/01wsl/"},"WSL \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805"),"\u3092\u53c2\u8003\u306b WSL \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"\u4e0b\u8a18\u306e\u52d5\u753b\u3092\u53c2\u8003\u306b VSCode \u306b Remote WSL \u62e1\u5f35\u6a5f\u80fd\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VSCode \u3067\u62e1\u5f35\u6a5f\u80fd\u3092\u691c\u7d22\u3057\u3066\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002")),(0,n.kt)("video",{src:d,controls:!0,width:"100%"}),(0,n.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9"),(0,n.kt)("p",null,"VSCode \u3067\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306f\u6b21\u306e\u52d5\u753b\u306e\u3088\u3046\u306b\u3057\u3066\u958b\u304d\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306b\u69d8\u3005\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u7f6e\u3044\u3066\u958b\u767a\u3092\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,n.kt)("video",{src:s,controls:!0,width:"100%"}),(0,n.kt)("h2",{id:"wsl-\u4e0a\u3067\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9windows-\u306e\u307f"},"WSL \u4e0a\u3067\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9\uff08Windows \u306e\u307f\uff09"),(0,n.kt)("p",null,"WSL \u306e\u8d77\u52d5\u306f\u3001\u6b21\u306e\u52d5\u753b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u5de6\u4e0b\u306e\u7dd1\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"New WSL Window")," \u3092\u30af\u30ea\u30c3\u30af\u3059\u308c\u3070\u3001WSL \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("video",{src:u,controls:!0,width:"100%"}),(0,n.kt)("p",null,"\u6b21\u306e\u52d5\u753b\u306e\u3088\u3046\u306b\u3057\u3066\u3001\u65b0\u3057\u304f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u3066\u3001\u305d\u308c\u3092 VSCode \u3067\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u306e\u30a2\u30c9\u30ec\u30b9\u30d0\u30fc\u306b ",(0,n.kt)("inlineCode",{parentName:"p"},"\xa5\xa5wsl$")," \u3068\u5165\u529b\u3059\u308b\u3068\u3001WSL \u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3055\u3089\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"Ubuntu"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"home"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"\u30e6\u30fc\u30b6\u30fc\u540d")," \u306e\u9806\u306b\u30af\u30ea\u30c3\u30af\u3057\u3066\u3044\u304f\u3053\u3068\u3067\u30db\u30fc\u30e0\u30d5\u30a9\u30eb\u30c0\u306b\u79fb\u52d5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u305d\u306e\u5f8c\u3001VSCode \u3067\u305d\u306e\u30d5\u30a9\u30eb\u30c0\u3092\u958b\u304d\u307e\u3059\u3002"),(0,n.kt)("video",{src:c,controls:!0,width:"100%"}),(0,n.kt)("h2",{id:"\u30bf\u30fc\u30df\u30ca\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5"},"\u30bf\u30fc\u30df\u30ca\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5"),(0,n.kt)("p",null,"\u30bf\u30fc\u30df\u30ca\u30eb\u306f\u3001\u6b21\u306e\u52d5\u753b\u306e\u3088\u3046\u306b\u3057\u3066\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("video",{src:p,controls:!0,width:"100%"}))}w.isMDXComponent=!0}}]);
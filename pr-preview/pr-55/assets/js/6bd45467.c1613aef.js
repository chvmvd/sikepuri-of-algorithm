"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[6713],{67983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>x,default:()=>S,frontMatter:()=>k,metadata:()=>g,toc:()=>T});var s=a(87462),o=a(67294),r=a(3905),l=a(86010),n=a(72389),i=a(67392),u=a(7094),d=a(12466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:r,defaultValue:n,values:p,groupId:v,className:b}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??h.map((e=>{let{props:{value:t,label:a,attributes:s}}=e;return{value:t,label:a,attributes:s}})),k=(0,i.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===n?n:n??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==x&&!f.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,u.U)(),[T,y]=(0,o.useState)(x),S=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=v){const e=g[v];null!=e&&e!==T&&f.some((t=>t.value===e))&&y(e)}const E=e=>{const t=e.currentTarget,a=S.indexOf(t),s=f[a].value;s!==T&&(C(t),y(s),null!=v&&w(v,String(s)))},_=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},b)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,s.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>S.push(e),onKeyDown:_,onClick:E},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,o.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function v(e){const t=(0,n.Z)();return o.createElement(p,(0,s.Z)({key:String(t)},e))}const b="tabItem_Ymn6";function h(e){let{children:t,hidden:a,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(b,s),hidden:a},t)}const f=a.p+"assets/medias/install_vscode-02f65af5a6c2de514ec1aa135ffe6e9e.mov",k={sidebar_position:1},x="VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",g={unversionedId:"extras/1vscode/index",id:"extras/1vscode/index",title:"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",source:"@site/docs/extras/1vscode/index.mdx",sourceDirName:"extras/1vscode",slug:"/extras/1vscode/",permalink:"/docs/extras/1vscode/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/extras/1vscode/index.mdx",tags:[],version:"current",lastUpdatedAt:1667708252,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u304a\u307e\u3051",permalink:"/docs/extras/"},next:{title:"WSL \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08Windows \u306e\u307f\u5fc5\u8981\uff09",permalink:"/docs/extras/2wsl/"}},w={},T=[{value:"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"vscode-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:2}],y={toc:T};function S(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vscode-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("h2",{id:"vscode-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"VSCode \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,r.kt)("p",null,"Visual Studio Code \u306f\u3001Microsoft \u304c\u958b\u767a\u3057\u3066\u3044\u308b\u30d5\u30ea\u30fc\u304b\u3064\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u3067\u3059\u3002\u69d8\u3005\u306a\u4fbf\u5229\u306a\u62e1\u5f35\u6a5f\u80fd\u304c\u3042\u308a\u3001\u591a\u304f\u306e\u958b\u767a\u8005\u306b\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u305d\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u52d5\u753b\u3092\u898b\u306a\u304c\u3089\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(v,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(h,{value:"win10",label:"Windows 10",mdxType:"TabItem"},(0,r.kt)("video",{src:f,controls:!0,width:"700px"})),(0,r.kt)(h,{value:"mac",label:"macOS",mdxType:"TabItem"},"macOS\u3067\u3082\u3001Windows\u3068\u540c\u3058\u3088\u3046\u306b\u3059\u308c\u3070\u3067\u304d\u307e\u3059\u3002macOS\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u52d5\u753b\u3092\u64ae\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u2026\u3002\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3002")))}S.isMDXComponent=!0}}]);
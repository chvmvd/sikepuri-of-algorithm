"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[1408],{85162:(a,e,t)=>{t.d(e,{Z:()=>m});var s=t(67294),n=t(86010);const p="tabItem_Ymn6";function m(a){let{children:e,hidden:t,className:m}=a;return s.createElement("div",{role:"tabpanel",className:(0,n.Z)(p,m),hidden:t},e)}},65488:(a,e,t)=>{t.d(e,{Z:()=>o});var s=t(87462),n=t(67294),p=t(86010),m=t(72389),r=t(67392),l=t(7094),N=t(12466);const i="tabList__CuJ",c="tabItem_LNqP";function k(a){var e;const{lazy:t,block:m,defaultValue:k,values:o,groupId:d,className:h}=a,u=n.Children.map(a.children,(a=>{if((0,n.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=o??u.map((a=>{let{props:{value:e,label:t,attributes:s}}=a;return{value:e,label:t,attributes:s}})),x=(0,r.l)(g,((a,e)=>a.value===e.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===k?k:k??(null==(e=u.find((a=>a.props.default)))?void 0:e.props.value)??u[0].props.value;if(null!==v&&!g.some((a=>a.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,l.U)(),[w,f]=(0,n.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:L}=(0,N.o5)();if(null!=d){const a=y[d];null!=a&&a!==w&&g.some((e=>e.value===a))&&f(a)}const R=a=>{const e=a.currentTarget,t=T.indexOf(e),s=g[t].value;s!==w&&(L(e),f(s),null!=d&&b(d,String(s)))},X=a=>{var e;let t=null;switch(a.key){case"Enter":R(a);break;case"ArrowRight":{const e=T.indexOf(a.currentTarget)+1;t=T[e]??T[0];break}case"ArrowLeft":{const e=T.indexOf(a.currentTarget)-1;t=T[e]??T[T.length-1];break}}null==(e=t)||e.focus()};return n.createElement("div",{className:(0,p.Z)("tabs-container",i)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},h)},g.map((a=>{let{value:e,label:t,attributes:m}=a;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:a=>T.push(a),onKeyDown:X,onClick:R},m,{className:(0,p.Z)("tabs__item",c,null==m?void 0:m.className,{"tabs__item--active":w===e})}),t??e)}))),t?(0,n.cloneElement)(u.filter((a=>a.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},u.map(((a,e)=>(0,n.cloneElement)(a,{key:e,hidden:a.props.value!==w})))))}function o(a){const e=(0,m.Z)();return n.createElement(k,(0,s.Z)({key:String(e)},a))}},69669:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>h,frontMatter:()=>N,metadata:()=>c,toc:()=>o});var s=t(87462),n=(t(67294),t(3905)),p=t(65488),m=t(85162);const r=t.p+"assets/medias/install_texlive-48cb8376b8fdefc6c3506458ca863b24.mov",l=t.p+"assets/medias/typeset_tex-7add0e6c3a6d539420c920714f656992.mp4",N={sidebar_position:5},i="$LaTeX$ \u306e\u5c0e\u5165",c={unversionedId:"03extras/05tex/index",id:"03extras/05tex/index",title:"$\\LaTeX$ \u306e\u5c0e\u5165",description:"\u306a\u305c\u304b\u5468\u308a\u306b $\\LaTeX$ \u3092\u4f7f\u3063\u3066\u3044\u308b\u4eba\u304c\u591a\u3044\u306e\u3067\u3001$\\LaTeX$ \u74b0\u5883\u306e\u69cb\u7bc9\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u3066\u304a\u304d\u307e\u3059\u3002",source:"@site/docs/03extras/05tex/index.mdx",sourceDirName:"03extras/05tex",slug:"/03extras/05tex/",permalink:"/docs/03extras/05tex/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/03extras/05tex/index.mdx",tags:[],version:"current",lastUpdatedAt:1669555473,formattedLastUpdatedAt:"2022\u5e7411\u670827\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Render \u306b\u30c7\u30d7\u30ed\u30a4",permalink:"/docs/03extras/04website/04deploy/"}},k={},o=[{value:"TeXLive \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"texlive-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"LaTeX \u3092\u4f7f\u3063\u3066\u307f\u308b",id:"latex-\u3092\u4f7f\u3063\u3066\u307f\u308b",level:2}],d={toc:o};function h(a){let{components:e,...N}=a;return(0,n.kt)("wrapper",(0,s.Z)({},d,N,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"latex-\u306e\u5c0e\u5165"},(0,n.kt)("span",{parentName:"h1",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"LaTeX")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\LaTeX")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"L"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.36em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," \u306e\u5c0e\u5165"),(0,n.kt)("p",null,"\u306a\u305c\u304b\u5468\u308a\u306b ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"LaTeX")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\LaTeX")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"L"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.36em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," \u3092\u4f7f\u3063\u3066\u3044\u308b\u4eba\u304c\u591a\u3044\u306e\u3067\u3001",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"LaTeX")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\LaTeX")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"L"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.36em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," \u74b0\u5883\u306e\u69cb\u7bc9\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"texlive-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"TeXLive \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/03extras/02vscode/"},"Visual Studio Code \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805"),"\u3092\u53c2\u8003\u306b VSCode \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"Windows \u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"/docs/03extras/01wsl/"},"WSL \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805"),"\u3092\u53c2\u8003\u306b WSL \u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"VSCode \u3067 ",(0,n.kt)("inlineCode",{parentName:"p"},"samples")," \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u3092\u958b\u3044\u3066\u3044\u308b\u72b6\u614b\u306b\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(p.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(m.Z,{value:"win-and-ubuntu",label:"Windows \u53ca\u3073 Ubuntu",mdxType:"TabItem"},(0,n.kt)("p",null,"\u6b21\u306e\u52d5\u753b\u306e\u901a\u308a\u306b\u3059\u308c\u3070\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30bf\u30fc\u30df\u30ca\u30eb\u3067\u6b21\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u307e\u3059\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt update && sudo apt -y install texlive-full\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u6c42\u3081\u3089\u308c\u305f\u3089\u3001WSL \u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1 \u6642\u9593\u3082\u3059\u308c\u3070\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u81ea\u52d5\u3067\u5b8c\u4e86\u3057\u307e\u3059\u3002"))),(0,n.kt)("video",{src:r,controls:!0,width:"100%"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u3082\u3057\u9014\u4e2d\u3067\u30a8\u30e9\u30fc\u304c\u51fa\u3066\u3057\u307e\u3063\u305f\u3089\u3001\u3082\u3046\u4e00\u5ea6\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt -y install texlive-full\n")),(0,n.kt)("p",{parentName:"admonition"},"\u3053\u306e\u3068\u304d ",(0,n.kt)("inlineCode",{parentName:"p"},"dpkg was interrupted, you must manually run 'sudo dpkg --configure -a' to correct the problem.")," \u306a\u3069\u3068\u8868\u793a\u3055\u308c\u305f\u3089\u3001\u8a00\u308f\u308c\u305f\u3068\u304a\u308a\u306b\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u9806\u306b\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u5927\u4f53\u3001\u3053\u308c\u3067\u3046\u307e\u304f\u3044\u304d\u307e\u3059\u3002"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dpkg --configure -a\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt -y install texlive-full\n")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6642\u306e\u30a8\u30e9\u30fc",src:t(84078).Z,width:"1366",height:"768"})))),(0,n.kt)(m.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"macOS\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u52d5\u753b\u306f\u64ae\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u2026\u3002\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3002",(0,n.kt)("p",null,"\u8a66\u3057\u3066\u306f\u3044\u307e\u305b\u3093\u304c\u3001\u304a\u305d\u3089\u304f\u6b21\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u306f\u305a\u3067\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u958b\u304d\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u9806\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002\u5408\u8a08\u3067 1 \u6642\u9593\u3082\u3059\u308c\u3070\u5b8c\u4e86\u3059\u308b\u306f\u305a\u3067\u3059\u3002"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"brew update\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"brew install --cask mactex\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo tlmgr update --self --all\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo tlmgr paper a4\n")))),(0,n.kt)("h2",{id:"latex-\u3092\u4f7f\u3063\u3066\u307f\u308b"},(0,n.kt)("span",{parentName:"h2",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"LaTeX")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\LaTeX")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"L"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.36em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," \u3092\u4f7f\u3063\u3066\u307f\u308b"),(0,n.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u3001",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"LaTeX")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\LaTeX")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"L"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.36em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," \u304c\u52d5\u304f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"sample.tex")," \u3068\u3044\u3046\u540d\u524d\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u308a\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"sample.tex")," \u306e\u4e2d\u306b\u6b21\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3057\u307e\u3059\u3002"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tex"},"\\documentclass{jlreq}\n\\begin{document}\n  \u30b5\u30f3\u30d7\u30eb\u30c6\u30ad\u30b9\u30c8\n  $$\n  a^2+b^2=c^2\n  $$\n\\end{document}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30bf\u30fc\u30df\u30ca\u30eb\u4e0a\u3067\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"lualatex sample.tex\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sample.pdf")," \u3068\u3044\u3046\u540d\u524d\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3067\u304d\u308b\u306e\u3067\u3001\u305d\u308c\u3092\u958b\u304d\u307e\u3059\u3002")),(0,n.kt)("video",{src:l,controls:!0,width:"100%"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Mac \u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30d0\u30c3\u30af\u30b9\u30e9\u30c3\u30b7\u30e5\uff08 ",(0,n.kt)("inlineCode",{parentName:"p"},"\\")," \uff09\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"Alt")," \u3092\u62bc\u3057\u306a\u304c\u3089 ",(0,n.kt)("inlineCode",{parentName:"p"},"\xa5")," \u3092\u62bc\u3059\u3053\u3068\u3067\u3001\u5165\u529b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"LuaLaTeX")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{Lua}\\LaTeX")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"Lua")),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"L"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.36em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," \u4ee5\u5916\u3082\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"pLaTeX")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{p}\\LaTeX")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"p")),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"L"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.36em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.905em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"T"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4678em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.7845em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"E")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),(0,n.kt)("span",{parentName:"span",className:"mord textrm"},"X")))))))," \u3067 jsarticle \u3092\u4f7f\u3046\u4f8b\u3082\u8f09\u305b\u3066\u304a\u304d\u307e\u3059\u3002"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"sample.tex")," \u306e\u4e2d\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tex"},"\\documentclass{jsarticle}\n\\begin{document}\n  \u30b5\u30f3\u30d7\u30eb\u30c6\u30ad\u30b9\u30c8\n  $$\n  a^2+b^2=c^2\n  $$\n\\end{document}\n")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u30bf\u30fc\u30df\u30ca\u30eb\u4e0a\u3067\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u9806\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"platex sample.tex\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dvipdfmx sample.dvi\n"))))}h.isMDXComponent=!0},84078:(a,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/tex_error-bd0869f9a046124f310f6e220947e82e.png"}}]);
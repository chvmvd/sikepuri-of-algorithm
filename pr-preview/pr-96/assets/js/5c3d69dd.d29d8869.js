"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[869],{2991:(e,t,i)=>{i.d(t,{Z:()=>v});var n=i(7294),a=i(6010),r=i(3438),o=i(9960),c=i(3919),s=i(5999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:i}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},i)}function p(e){let{href:t,icon:i,title:r,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:r},i," ",r),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function f(e){let{item:t}=e;const i=(0,r.Wl)(t);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const i=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:i,title:t.label,description:null==a?void 0:a.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const i=(0,r.jA)();return n.createElement(v,{items:i.items,className:t})}function v(e){const{items:t,className:i}=e;if(!t)return n.createElement(k,e);const o=(0,r.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",i)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},4111:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(7462),a=(i(7294),i(3905)),r=i(2991);const o={sidebar_position:3},c="\u7269\u4f53\u306e\u904b\u52d5\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3",s={unversionedId:"02advanced/03simulation/index",id:"02advanced/03simulation/index",title:"\u7269\u4f53\u306e\u904b\u52d5\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3",description:"\u4eca\u56de\u306f\u3001\u7269\u4f53\u306e\u904b\u52d5\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002",source:"@site/docs/02advanced/03simulation/index.mdx",sourceDirName:"02advanced/03simulation",slug:"/02advanced/03simulation/",permalink:"/docs/02advanced/03simulation/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/02advanced/03simulation/index.mdx",tags:[],version:"current",lastUpdatedAt:1670604269,formattedLastUpdatedAt:"2022\u5e7412\u67089\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u30e9\u30a4\u30d5\u30b2\u30fc\u30e0",permalink:"/docs/02advanced/01life-game/"},next:{title:"\u7b49\u901f\u76f4\u7dda\u904b\u52d5",permalink:"/docs/02advanced/03simulation/01uniform_linear_motion/"}},l={},d=[],m={toc:d};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7269\u4f53\u306e\u904b\u52d5\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3"},"\u7269\u4f53\u306e\u904b\u52d5\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,a.kt)("p",null,"\u4eca\u56de\u306f\u3001\u7269\u4f53\u306e\u904b\u52d5\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u306f\u3058\u3081\u306b\u7c21\u5358\u306a\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u3057\u3066\u3001\u305d\u306e\u5f8c\u8907\u96d1\u306a\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u884c\u3044\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)(r.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);
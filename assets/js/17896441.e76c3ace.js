"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[7918],{5140:(e,t,n)=>{n.d(t,{Z:()=>Z});var l=n(7294),r=n(9531),a=n(9072),c=n(9630),m=n(3477),i=n(6126),u=n(4005),o=n(2288),E=n(7440),s=n(1849),f=n(3018),g=n(8034);function h(e,t,n){const l=function(e,t,n){let l=0;for(let r=t-1;r<=t+1;r++)for(let t=n-1;t<=n+1;t++)0<=r&&r<e.length&&0<=t&&t<e[0].length&&(l+=Number(e[r][t]));return l-Number(e[t][n])}(e,t,n);return e[t][n]&&2===l||3===l}function Z(e){let{data:t=Array(100).fill().map((()=>Array(100).fill(!1)))}=e;const[n,Z]=(0,l.useState)(t),[p,k]=(0,l.useState)(4),[v,C]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=setInterval((()=>{v&&Z(function(e){const t=e.map((e=>e.map((e=>e))));for(let n=0;n<e.length;n++)for(let l=0;l<e[0].length;l++)t[n][l]=h(e,n,l);return t}(n))}),4e3/p);return()=>{clearInterval(e)}}),[v,n]),l.createElement(l.Fragment,null,l.createElement(i.d$,{initialScale:7},(e=>{let{zoomIn:t,zoomOut:a,resetTransform:c}=e;return l.createElement(l.Fragment,null,l.createElement(r.Z,{onClick:()=>{t()}},l.createElement(u.Z,null)),l.createElement(r.Z,{onClick:()=>{a()}},l.createElement(o.Z,null)),l.createElement(r.Z,{onClick:()=>{c()}},l.createElement(E.Z,null)),l.createElement(i.Uv,null,l.createElement(d,{board:n,setBoard:Z})))})),l.createElement(a.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},l.createElement(a.ZP,{item:!0},l.createElement(r.Z,{onClick:()=>{C(!v)}},v?l.createElement(g.Z,null):l.createElement(f.Z,null))),l.createElement(a.ZP,{item:!0},l.createElement(r.Z,{onClick:()=>{Z(t)}},l.createElement(s.Z,null))),l.createElement(a.ZP,{item:!0},l.createElement(c.Z,{gutterBottom:!0},"\u901f\u3055")),l.createElement(a.ZP,{item:!0,xs:!0},l.createElement(m.ZP,{value:p,onChange:e=>{k(e.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function d(e){let{board:t,setBoard:n}=e;const r=52*t.length+2,a=52*t[0].length+2;return l.createElement(l.Fragment,null,l.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${a}`},l.createElement("defs",null),l.createElement("g",null,l.createElement("rect",{x:"0",y:"0",width:r,height:a,fill:"#808080"}),t.map(((e,r)=>e.map(((e,a)=>l.createElement("rect",{key:`${r},${a}`,x:52*a+2,y:52*r+2,width:"50",height:"50",fill:e?"#000000":"#ffffff",onClick:()=>{const e=[...t];e[r][a]=!t[r][a],n(e)}}))))))))}},6922:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294),r=n(5140);const a={React:l,...l,LifeGame:function(){return l.createElement(l.Fragment,null,l.createElement("div",{style:{maxWidth:"200px"}},l.createElement(r.Z,null)))}}}}]);
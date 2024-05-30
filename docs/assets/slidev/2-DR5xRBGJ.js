import{d as _,r as q,A as d,o as a,c as m,k as S,f as h,b as c,y as f,F as P,ad as A,i as g,l as v,g as $,h as k,e as b,az as j,aa as I,q as w,s as z}from"../modules/vue-Dkez5CBM.js";import{a as B,_ as p,a7 as C,a8 as L}from"../index-CcI3l4UT.js";import{T as M}from"./title-renderer-B57trPjJ.js";import{u as D,p as R,f as U}from"./context-USRaVrL_.js";import"../modules/shiki-BUHFcX-9.js";const F=["href","innerHTML"],H=["href"],V=_({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(l){const{isPrintMode:r}=B();return(s,i)=>{const t=q("RouterLink");return!d(r)&&s.title?(a(),m(t,{key:0,to:String(s.to),onClick:i[0]||(i[0]=u=>u.target.blur()),innerHTML:s.title},null,8,["to","innerHTML"])):!d(r)&&!s.title?(a(),m(t,{key:1,to:String(s.to),onClick:i[1]||(i[1]=u=>u.target.blur())},{default:S(()=>[h(s.$slots,"default")]),_:3},8,["to"])):d(r)&&s.title?(a(),c("a",{key:2,href:`#${s.to}`,innerHTML:s.title},null,8,F)):(a(),c("a",{key:3,href:`#${s.to}`},[h(s.$slots,"default")],8,H))}}}),O=p(V,[["__file","/Users/benji/Documents/benji/github/slidev-demo/node_modules/.pnpm/@slidev+client@0.49.5_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/builtin/Link.vue"]]);function N(l){return l.startsWith("/")?"./"+l.slice(1):l}function E(l,r=!1,s="cover"){const i=l&&(l[0]==="#"||l.startsWith("rgb")),t={background:i?l:void 0,color:l&&!i?"white":void 0,backgroundImage:i?void 0:l?r?`linear-gradient(#0005, #0008), url(${N(l)})`:`url("${N(l)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:s};return t.background||delete t.background,t}const W=["start"],Y=_({__name:"TocList",props:{level:{type:Number,required:!0,default:1},start:{type:Number,required:!1},listStyle:{type:[String,Array],required:!1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(l){const r=l,s=f(()=>[...C(r.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${r.level}`]),i=f(()=>[...C(r.listStyle||[])]);return(t,u)=>{const y=O,n=q("TocList",!0);return t.list&&t.list.length>0?(a(),c("ol",{key:0,class:g(s.value),start:t.level===1?t.start:void 0,style:k(i.value.length>=t.level?`list-style:${i.value[t.level-1]}`:void 0)},[(a(!0),c(P,null,A(t.list,e=>(a(),c("li",{key:e.path,class:g(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[v(y,{to:e.path},{default:S(()=>[v(d(M),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(a(),m(n,{key:0,level:t.level+1,"list-style":t.listStyle,list:e.children,"list-class":t.listClass},null,8,["level","list-style","list","list-class"])):$("v-if",!0)],2))),128))],14,W)):$("v-if",!0)}}}),G=p(Y,[["__file","/Users/benji/Documents/benji/github/slidev-demo/node_modules/.pnpm/@slidev+client@0.49.5_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/builtin/TocList.vue"]]),J=_({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},start:{type:[String,Number],required:!1,default:1},listStyle:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:Number.POSITIVE_INFINITY},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(l){const r=l,{$slidev:s}=D();function i(n,e=1){if(e>Number(r.maxDepth))return[];if(e<Number(r.minDepth)){const o=n.find(T=>T.active||T.activeParent);return o?i(o.children,e+1):[]}return n.map(o=>({...o,children:i(o.children,e+1)}))}function t(n){return n.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:t(e.children)}))}function u(n){const e=n.some(o=>o.active||o.activeParent||o.hasActiveParent);return n.filter(()=>e).map(o=>({...o,children:u(o.children)}))}const y=f(()=>{const n=s==null?void 0:s.nav.tocTree;if(!n)return[];let e=i(n);return r.mode==="onlyCurrentTree"?e=t(e):r.mode==="onlySiblings"&&(e=u(e)),e});return(n,e)=>{const o=G;return a(),c("div",{class:"slidev-toc",style:k(`column-count:${n.columns}`)},[v(o,{level:1,start:n.start,"list-style":n.listStyle,list:y.value,"list-class":n.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),K=p(J,[["__file","/Users/benji/Documents/benji/github/slidev-demo/node_modules/.pnpm/@slidev+client@0.49.5_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/builtin/Toc.vue"]]),Q={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},X=_({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(l){const r=l,s=f(()=>E(r.image,!1,r.backgroundSize));return(i,t)=>(a(),c("div",Q,[b("div",{class:g(["slidev-layout default",r.class])},[h(i.$slots,"default")],2),b("div",{class:"w-full h-full",style:k(s.value)},null,4)]))}}),Z=p(X,[["__file","/Users/benji/Documents/benji/github/slidev-demo/node_modules/.pnpm/@slidev+client@0.49.5_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/layouts/image-right.vue"]]),x=b("h1",null,"目录",-1),ee={__name:"2",setup(l){return R(L),D(),(r,s)=>{const i=K,t=j("click");return a(),m(Z,w(z(d(U)(d(L),1))),{default:S(()=>[x,I(v(i,{class:"flex flex-grow mt-12px",columns:"2",minDepth:"1",maxDepth:"2"},null,512),[[t]])]),_:1},16)}}},ne=p(ee,[["__file","/@slidev/slides/2.md"]]);export{ne as default};
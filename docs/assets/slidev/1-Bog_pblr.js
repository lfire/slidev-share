import{q as f}from"../modules/unplugin-icons-CxAc81jq.js";import{d as v,y as h,o as d,b as g,e as n,f as x,h as b,c as k,k as y,A as r,a6 as $,l as C,q as w,s as B}from"../modules/vue-Dkez5CBM.js";import{u,p as S,f as A}from"./context-USRaVrL_.js";import{_ as p,a6 as c}from"../index-CcI3l4UT.js";import"../modules/shiki-BUHFcX-9.js";function l(e){return e.startsWith("/")?"./"+e.slice(1):e}function I(e,t=!1){const o=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),s={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?t?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const P={class:"my-auto w-full"},j=v({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const t=e,o=h(()=>I(t.background,!0));return(s,a)=>(d(),g("div",{class:"slidev-layout cover text-center",style:b(o.value)},[n("div",P,[x(s.$slots,"default")])],4))}}),z=p(j,[["__file","/Users/benji/Documents/benji/github/slidev-demo/node_modules/.pnpm/@slidev+theme-seriph@0.25.0/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),N=n("div",{class:"pt-28"},null,-1),T=n("h1",null,"Take Flight with AI大模型",-1),V=n("h4",null,"AI大模型辅助编码",-1),q={class:"pt-12"},F={__name:"1",setup(e){S(c);const{$slidev:t,$nav:o,$clicksContext:s,$clicks:a,$page:R,$renderContext:U,$frontmatter:D}=u();return(E,i)=>{const _=f;return d(),k(z,w(B(r(A)(r(c),0))),{default:y(()=>[N,T,V,n("div",q,[n("span",{onClick:i[0]||(i[0]=(...m)=>r(t).nav.next&&r(t).nav.next(...m)),class:"px-2 py-1 rounded cursor-pointer bg-gray bg-opacity-10",hover:"bg-white bg-opacity-10"},[$(" Start taking off "),C(_,{class:"inline"})])])]),_:1},16)}}},J=p(F,[["__file","/@slidev/slides/1.md"]]);export{J as default};